((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A3,Z,A4,A_,R,A5,A6,A7,A8,A9,A0,N,Aa,Ab,Ac,Ad,T,Ae,P,Af,U,V,W,E,K,F,I,A1,O,Ag,Ah,S,Ai,Q,Aj,L,G,M,C={
bAY(d){return C.i0_(d)},
i0_(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bAY=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.r8(B.nh(""),d,A.hS,null,null).da(0,A.ZN),$async$bAY)
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
return B.i($async$bAY,v)},
ibZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Rd[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cU(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fY(D.Rd,new C.fF9())
if(w==null)w=A.d.gI(D.Rd)
s=B.U(x.N,x.B)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.L)(r),++u){l=r[u].a
k=l[0]
l=$.qw().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.L)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gI(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.akp(w.a,w.b,m,w,s,!1)},
i5v(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.RE,new C.fuA(),x.bd).aG(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
ijV(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cu(b2,"{")
v=A.a.oR(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.X.aM(0,A.a.ar(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aX(a5)
r=0
for(a6=x.j,a7=J.aW(a6.a(J.r(u,"parts"))),a8=x.i;a7.C();){q=a7.gS(a7)
p=B.w(J.r(q,"kind"))
o=B.w(J.r(q,"id"))
if(!$.qw().aj(0,p)||J.f0(s,o)||J.ad(t)>=8)continue
J.ca(s,o)
n=B.U(a5,a8)
for(a9=0;a9<4;++a9){m=D.dsZ[a9]
l=J.r(q,m)
if(typeof l=="number")J.aJ(n,m,l)}k=A.k.E(typeof J.r(q,"x")=="number"?B.e7(J.r(q,"x")):0.2+A.k.F(r,3)*0.3,0.16,0.84)
j=A.k.E(typeof J.r(q,"y")=="number"?B.e7(J.r(q,"y")):0.25+A.k.ao(r,3)*0.3,0.1,0.9)
J.ca(t,new B.eb([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aW(a6.a(J.r(u,"wires")));a5.C();){h=a5.gS(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.r(g,0))
e=B.w(J.r(g,2))
d=A.o.E(A.k.N(B.e7(J.r(g,1))),0,1)
a0=A.o.E(A.k.N(B.e7(J.r(g,3))),0,1)
if(J.f0(s,f)&&J.f0(s,e)&&!J.A(f,e))J.ca(i,new B.cy([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.L.a(J.r(u,"steps"))
a0=J.aW(a0==null?A.cv:a0)
while(a0.C()){a2=a0.gS(a0)
J.ca(a1,B.w(a2))}a3=a1
a0=J.r(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.r(u,"explain")
a4=new C.mR(a0,B.w(a1==null?"":a1),t,i,A.Y)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.r(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.akp(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
iaz(d){var w,v,u=C.hfy()
d.B(u)
for(w=0;w<60;++w)u.vo(0,0.03333333333333333)
v=u.a
return A.d.b3(v,new C.fBM(u))&&!A.d.d0(v,new C.fBN())},
iay(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.U(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.L)(l),++u){t=l[u];++v
k.n(0,t.a,$.qw().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.L)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.drd,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aG(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.k.ac(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.L)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aG(s,"\n")+"\nWires: "+A.d.aG(l,"; ")},
hZv(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.L)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aG(v,"\n")+"\n\n"}v=A.d.aG(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
ibY(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qw().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.RE[u]
if(A.d.b3(w,new C.fF6(s)))if(!B.cU(r,s.b.toLowerCase(),0))v=B.cU(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Z(w,new C.fF7(e),B.T(w).k("Z<1>")).gan(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ac(A.d.cI(w,0,new C.fF8())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gI(w)
w=$.qw().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
akp:function akp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fF9:function fF9(){},
fuA:function fuA(){},
fBM:function fBM(d){this.a=d},
fBN:function fBN(){},
fF6:function fF6(d){this.a=d},
fF7:function fF7(d){this.a=d},
fF8:function fF8(){},
VV:function VV(d,e){this.c=d
this.a=e},
blw:function blw(d,e,f,g,h){var _=this
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
ef_:function ef_(d){this.a=d},
ef0:function ef0(d,e,f){this.a=d
this.b=e
this.c=f},
ef1:function ef1(d){this.a=d},
efc:function efc(d){this.a=d},
efd:function efd(d,e){this.a=d
this.b=e},
ef8:function ef8(d){this.a=d},
ef6:function ef6(d,e){this.a=d
this.b=e},
ef7:function ef7(d,e,f){this.a=d
this.b=e
this.c=f},
ef9:function ef9(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ef4:function ef4(d){this.a=d},
ef5:function ef5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efa:function efa(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ef3:function ef3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efb:function efb(d,e){this.a=d
this.b=e},
ef2:function ef2(d,e){this.a=d
this.b=e},
efg:function efg(d){this.a=d},
eff:function eff(d){this.a=d},
efh:function efh(d){this.a=d},
efe:function efe(d){this.a=d},
efi:function efi(d,e){this.a=d
this.b=e},
efj:function efj(d,e){this.a=d
this.b=e},
efk:function efk(d,e){this.a=d
this.b=e},
efl:function efl(d,e){this.a=d
this.b=e},
bBi(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fkD,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.O,0,A.p)},
ht9(d,e,f,g){var w=null,v=B.n(24),u=B.K(f.j(0.6),A.r,1)
return B.as(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.am,B.d(e,w,w,w,w,w,w,A.x4,A.K,w,w),A.aA,B.bX(A.fI,g,A.bq,w,0,8)],x.p),A.m,w,A.e,A.O,0,A.p),A.f,w,w,new B.o(D.beq,w,u,v,w,w,A.n),w,w,w,w,A.aa,w,w,w),w,w,w)},
Gs:function Gs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
v9:function v9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wh:function Wh(d){this.a=d},
aFk:function aFk(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.h1$=h
_.lY$=i
_.f7$=j
_.h2$=k
_.bx$=l
_.a9$=m
_.c=_.a=null},
eui:function eui(){},
euC:function euC(d){this.a=d},
euB:function euB(d,e){this.a=d
this.b=e},
euD:function euD(){},
euE:function euE(){},
euk:function euk(d,e,f){this.a=d
this.b=e
this.c=f},
euj:function euj(d,e){this.a=d
this.b=e},
eu9:function eu9(d){this.a=d},
eua:function eua(d){this.a=d},
eub:function eub(d){this.a=d},
euc:function euc(d){this.a=d},
eud:function eud(d){this.a=d},
eue:function eue(d){this.a=d},
euf:function euf(d){this.a=d},
eug:function eug(d){this.a=d},
euh:function euh(d){this.a=d},
eu7:function eu7(d){this.a=d},
eu8:function eu8(d){this.a=d},
eu6:function eu6(d){this.a=d},
euv:function euv(d,e){this.a=d
this.b=e},
euq:function euq(d){this.a=d},
eur:function eur(d){this.a=d},
eun:function eun(d){this.a=d},
eus:function eus(d){this.a=d},
eum:function eum(d){this.a=d},
eut:function eut(d){this.a=d},
euu:function euu(d){this.a=d},
eul:function eul(d){this.a=d},
euw:function euw(d,e){this.a=d
this.b=e},
eup:function eup(d,e){this.a=d
this.b=e},
eux:function eux(d){this.a=d},
euy:function euy(d){this.a=d},
euz:function euz(d){this.a=d},
euA:function euA(d){this.a=d},
euo:function euo(d){this.a=d},
bit:function bit(d,e){this.b=d
this.a=e},
aNh:function aNh(){},
byZ:function byZ(){},
cLv(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cLv=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.ra().ji(0,"assets/data/body3d.bin"),$async$cLv)
case 3:d=a1
$.hop=J.eI(A.dK.gaR(d),d.byteOffset,d.byteLength)
t=B.aTt(d)
s=t.getUint32(4,!0)
r=B.a([],x.a)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jE(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.dfv[i]
g=B.b1((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a3z(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b1F))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bbp(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cLv,v)},
aTg:function aTg(d,e,f){this.a=d
this.b=e
this.c=f},
a3z:function a3z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bbp:function bbp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
UO:function UO(d){this.a=d},
aDO:function aDO(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.h1$=s
_.lY$=t
_.f7$=u
_.h2$=v
_.bx$=w
_.a9$=a0
_.c=_.a=null},
dLx:function dLx(d){this.a=d},
dLw:function dLw(d,e){this.a=d
this.b=e},
dL9:function dL9(d,e){this.a=d
this.b=e},
dLa:function dLa(){},
dLy:function dLy(){},
dLb:function dLb(d,e){this.a=d
this.b=e},
dLc:function dLc(d){this.a=d},
dLd:function dLd(){},
dLe:function dLe(d){this.a=d},
dLg:function dLg(d,e){this.a=d
this.b=e},
dLf:function dLf(d){this.a=d},
dL6:function dL6(d,e,f){this.a=d
this.b=e
this.c=f},
dL7:function dL7(d){this.a=d},
dL8:function dL8(d){this.a=d},
dLn:function dLn(d){this.a=d},
dLo:function dLo(d,e){this.a=d
this.b=e},
dLp:function dLp(d,e){this.a=d
this.b=e},
dLq:function dLq(d){this.a=d},
dLm:function dLm(d,e){this.a=d
this.b=e},
dLr:function dLr(d,e){this.a=d
this.b=e},
dLl:function dLl(d,e){this.a=d
this.b=e},
dLs:function dLs(d){this.a=d},
dLk:function dLk(d){this.a=d},
dLt:function dLt(d){this.a=d},
dLj:function dLj(d){this.a=d},
dLu:function dLu(d){this.a=d},
dLi:function dLi(d){this.a=d},
dLv:function dLv(d){this.a=d},
dLh:function dLh(d){this.a=d},
aMm:function aMm(){},
aMn:function aMn(){},
c55:function c55(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c56:function c56(d,e){this.a=d
this.b=e},
c57:function c57(d){this.a=d},
azb(d,e,f,g,h){return new C.bc8(d,e,f,g,h)},
h65(d,e,f,g,h,i){return $.hWS.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cSp(d,e,f,i,g,h))},
yo:function yo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
CD:function CD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nz:function nz(d,e,f){this.a=d
this.b=e
this.c=f},
bc8:function bc8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fo0:function fo0(){},
fo1:function fo1(){},
fo2:function fo2(){},
fo9:function fo9(){},
foa:function foa(){},
fob:function fob(){},
UT:function UT(d){this.a=d},
aDQ:function aDQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.h1$=m
_.lY$=n
_.f7$=o
_.h2$=p
_.bx$=q
_.a9$=r
_.c=_.a=null},
dNc:function dNc(d){this.a=d},
dMR:function dMR(d,e){this.a=d
this.b=e},
dMU:function dMU(){},
dNd:function dNd(){},
dMP:function dMP(d,e){this.a=d
this.b=e},
dMQ:function dMQ(d,e){this.a=d
this.b=e},
dMV:function dMV(d,e,f){this.a=d
this.b=e
this.c=f},
dMK:function dMK(){},
dML:function dML(){},
dMM:function dMM(d){this.a=d},
dMN:function dMN(d,e){this.a=d
this.b=e},
dMO:function dMO(d,e,f){this.a=d
this.b=e
this.c=f},
dMW:function dMW(){},
dMX:function dMX(d,e){this.a=d
this.b=e},
dMY:function dMY(d){this.a=d},
dMT:function dMT(d,e){this.a=d
this.b=e},
dMS:function dMS(d){this.a=d},
dMJ:function dMJ(d,e,f){this.a=d
this.b=e
this.c=f},
dN6:function dN6(d){this.a=d},
dN5:function dN5(d){this.a=d},
dN7:function dN7(d){this.a=d},
dN4:function dN4(d){this.a=d},
dN2:function dN2(d){this.a=d},
dN3:function dN3(d){this.a=d},
dN1:function dN1(d){this.a=d},
dMZ:function dMZ(d){this.a=d},
dN0:function dN0(d){this.a=d},
dN8:function dN8(d,e){this.a=d
this.b=e},
dN9:function dN9(d,e){this.a=d
this.b=e},
dNa:function dNa(d){this.a=d},
dN_:function dN_(d){this.a=d},
dNb:function dNb(d,e){this.a=d
this.b=e},
bcr:function bcr(d,e){this.b=d
this.a=e},
cSp:function cSp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aMr:function aMr(){},
byJ:function byJ(){},
hNH(){return new C.NJ(null)},
QE(d,e,f,g,h){return new C.bug(d,e,f,g,h)},
bsF(d,e,f){return A.k.E((d-e)/(f-e),0,1)},
h6C(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
NJ:function NJ(d){this.a=d},
KK:function KK(d,e){this.a=d
this.b=e},
AM:function AM(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aE6:function aE6(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dT8:function dT8(d,e){this.a=d
this.b=e},
dT7:function dT7(d){this.a=d},
dTa:function dTa(d,e){this.a=d
this.b=e},
dT9:function dT9(d){this.a=d},
bug:function bug(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fos:function fos(){},
fot:function fot(){},
fou:function fou(){},
fov:function fov(){},
fow:function fow(){},
fox:function fox(){},
foy:function foy(){},
foz:function foz(){},
foA:function foA(){},
bsG:function bsG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f4_:function f4_(d){this.a=d},
f3Z:function f3Z(d,e){this.a=d
this.b=e},
f3X:function f3X(d){this.a=d},
f40:function f40(d){this.a=d},
f3Y:function f3Y(d,e){this.a=d
this.b=e},
afj:function afj(d,e,f){this.c=d
this.d=e
this.a=f},
aea:function aea(d,e,f){this.c=d
this.d=e
this.a=f},
Qx:function Qx(d,e,f,g,h,i,j,k,l,m){var _=this
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
btF:function btF(d,e){this.b=d
this.a=e},
bta:function bta(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bb7:function bb7(d,e){this.b=d
this.a=e},
aIl:function aIl(d,e){this.c=d
this.a=e},
aIm:function aIm(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cO$=e
_.b7$=f
_.c=_.a=null},
f3G:function f3G(d){this.a=d},
f3F:function f3F(d){this.a=d},
f3E:function f3E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3D:function f3D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3B:function f3B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3A:function f3A(d,e,f){this.a=d
this.b=e
this.c=f},
f3C:function f3C(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f3z:function f3z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3O:function f3O(d){this.a=d},
f3N:function f3N(d){this.a=d},
f3P:function f3P(d,e){this.a=d
this.b=e},
f3Q:function f3Q(d,e){this.a=d
this.b=e},
f3R:function f3R(d,e){this.a=d
this.b=e},
f3M:function f3M(d,e,f){this.a=d
this.b=e
this.c=f},
f3S:function f3S(d,e,f){this.a=d
this.b=e
this.c=f},
f3L:function f3L(d){this.a=d},
f3H:function f3H(d){this.a=d},
f3T:function f3T(d){this.a=d},
f3U:function f3U(d){this.a=d},
f3K:function f3K(d,e){this.a=d
this.b=e},
f3V:function f3V(d,e){this.a=d
this.b=e},
f3J:function f3J(d,e){this.a=d
this.b=e},
f3W:function f3W(d,e){this.a=d
this.b=e},
f3I:function f3I(d,e){this.a=d
this.b=e},
f3x:function f3x(){},
f3y:function f3y(){},
bsi:function bsi(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
brI:function brI(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbN:function bbN(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
brK:function brK(d,e,f){this.b=d
this.c=e
this.a=f},
bvK:function bvK(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aO6:function aO6(){},
huC(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a7(0,new B.t(w,0)),u=e.aE(0,new B.t(w,0)),t=1-f,s=3*t
return d.aI(0,t*t*t).a7(0,v.aI(0,s*t*f)).a7(0,u.aI(0,s*f*f)).a7(0,e.aI(0,f*f*f))},
bis(d,e,f,g,h,i){return $.hXs.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dnm(d,e,f,i,g,h))},
a0N:function a0N(d,e){this.a=d
this.b=e},
qi:function qi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
r2:function r2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
CH:function CH(d,e){this.a=d
this.b=e},
ZK:function ZK(d,e){this.a=d
this.b=e},
af7:function af7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1_:function a1_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
CR:function CR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ac3:function ac3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acj:function acj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aed:function aed(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
biq:function biq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.by$=_.bJ$=0},
dnq:function dnq(d){this.a=d},
dnr:function dnr(d){this.a=d},
dnn:function dnn(d,e){this.a=d
this.b=e},
dno:function dno(d){this.a=d},
dnp:function dnp(d){this.a=d},
dns:function dns(d){this.a=d},
dnt:function dnt(d){this.a=d},
dnu:function dnu(d){this.a=d},
dnv:function dnv(d){this.a=d},
dnw:function dnw(d){this.a=d},
dnx:function dnx(d){this.a=d},
dny:function dny(d){this.a=d},
dnz:function dnz(d){this.a=d},
dnA:function dnA(d){this.a=d},
Gd:function Gd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wg:function Wg(d){this.a=d},
aFj:function aFj(d,e,f,g,h,i,j){var _=this
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
etD:function etD(d){this.a=d},
ets:function ets(d){this.a=d},
etu:function etu(){},
etv:function etv(){},
ety:function ety(){},
etz:function etz(d,e,f){this.a=d
this.b=e
this.c=f},
etA:function etA(d){this.a=d},
etB:function etB(d){this.a=d},
etw:function etw(){},
etx:function etx(d){this.a=d},
eu2:function eu2(d){this.a=d},
etC:function etC(){},
eto:function eto(d){this.a=d},
etF:function etF(d){this.a=d},
etE:function etE(d){this.a=d},
etH:function etH(){},
etG:function etG(d,e){this.a=d
this.b=e},
etr:function etr(){},
etp:function etp(d){this.a=d},
etq:function etq(d){this.a=d},
eu0:function eu0(d){this.a=d},
eu_:function eu_(d){this.a=d},
eu1:function eu1(d){this.a=d},
etR:function etR(d,e){this.a=d
this.b=e},
etZ:function etZ(d){this.a=d},
etX:function etX(d){this.a=d},
etY:function etY(d){this.a=d},
etW:function etW(d){this.a=d},
etV:function etV(d){this.a=d},
etS:function etS(d){this.a=d},
etT:function etT(d){this.a=d},
etU:function etU(d){this.a=d},
ett:function ett(){},
etN:function etN(d){this.a=d},
etO:function etO(d){this.a=d},
etM:function etM(d){this.a=d},
etP:function etP(d){this.a=d},
etL:function etL(d){this.a=d},
etQ:function etQ(d){this.a=d},
etK:function etK(d){this.a=d},
etJ:function etJ(d){this.a=d},
etI:function etI(d,e){this.a=d
this.b=e},
bir:function bir(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dnm:function dnm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNf:function aNf(){},
hzR(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aE(0,e).gcC()*0.1
return new B.t((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hfy(){var w=B.a([],x.C),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a4T(w,v,u,A.cK,B.U(x.N,x.y))},
hHv(d,e,f){var w=d.c,v=e===0?-1:1
return new B.t(w*f.a+v*C.hfz(d),d.d*f.b)},
hfz(d){return 42+(D.mj.aj(0,d.b)?(d.ch-1)*38:0)},
ei:function ei(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tL:function tL(d,e,f,g){var _=this
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
aaK:function aaK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
abQ:function abQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4T:function a4T(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bOr:function bOr(){},
bOC:function bOC(d){this.a=d},
bOx:function bOx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bOD:function bOD(d){this.a=d},
bOE:function bOE(d){this.a=d},
bOG:function bOG(d){this.a=d},
bOH:function bOH(d){this.a=d},
bOF:function bOF(d){this.a=d},
bOI:function bOI(d,e,f){this.a=d
this.b=e
this.c=f},
bOJ:function bOJ(d){this.a=d},
bOt:function bOt(d){this.a=d},
bOu:function bOu(d){this.a=d},
bOs:function bOs(d){this.a=d},
bOv:function bOv(d,e,f){this.a=d
this.b=e
this.c=f},
bOw:function bOw(d){this.a=d},
bOq:function bOq(d){this.a=d},
bOK:function bOK(d,e){this.a=d
this.b=e},
bOy:function bOy(d,e){this.a=d
this.b=e},
bOB:function bOB(d){this.a=d},
bOA:function bOA(d){this.a=d},
bOz:function bOz(d){this.a=d},
aj9:function aj9(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bJ3:function bJ3(){},
bJ4:function bJ4(){},
mR:function mR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cqP:function cqP(d){this.a=d},
ijQ(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.fQX(),c9=new C.fQZ(),d0=new C.fR_(),d1=new C.fQY(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.az(w,d1.$3(new B.a3(w.a,w.b,w.c,w.d),A.bN,A.bM))
d3.bo(D.ekh,D.ehb,c9.$2(A.dL,1.4))
d3.bo(D.egT,D.egS,c9.$2(A.bs,2.4))
d3.bo(D.egU,T.aJZ,c9.$2(A.bs,2.4))
if(c7){d2=c8.$1(A.fk.j(0.5))
d2.z=A.ID
d3.ad(D.egC,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.t(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.az(d0.$4(-22,-26,44,50),d1.$3(D.aQ2,A.aP,A.cq))
d3.ad(A.cH,16,c8.$1(A.bs))
d3.ad(A.cH,13,c8.$1(c7?A.aJ.j(0.85):A.N))
if(c7){d2=d3.a
J.bl(d2.save())
d2.translate(0,4)
d3.ii(0,d4.y*0.6)
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
r.delete()}}d3.ad(D.ek9,2.4,c8.$1(c7?A.be:A.al))
d3.ad(D.el0,2.4,c8.$1(A.al))
return!0
case"blender":d3.az(d0.$5(-14,14,28,12,4),c8.$1(A.e7))
d2=$.S().r
t=x.v
q=new B.aF(d2,A.ag,c6,c6,B.a([],t))
q.D(new B.aY(-16,-26))
q.D(new B.aq(16,-26))
q.D(new B.aq(12,14))
q.D(new B.aq(-12,14))
q.D(new B.bt())
d3.aH(q,c8.$1(A.fk.j(0.35)))
if(c7){d2=new B.aF(d2,A.ag,c6,c6,B.a([],t))
d2.D(new B.aY(-14,-10))
d2.D(new B.aq(14,-10))
d2.D(new B.aq(12,14))
d2.D(new B.aq(-12,14))
d2.D(new B.bt())
d3.aH(d2,c8.$1(A.ax.j(0.7)))}d3.aH(q,c9.$2(A.ac,1.6))
d2=d3.a
J.bl(d2.save())
d2.translate(0,10)
d3.ii(0,d4.y)
d3.bo(D.a7v,D.aKk,c9.$2(A.bO,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.F(s+v*0.33,1)
r=c8.$1(A.eP).G()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.az(d0.$5(-10,-4,20,10,4),c8.$1(A.aK))
d3.ad(A.ic,3,c8.$1(c7?A.be:A.al))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=G.a55[m]
r=c9.$2(A.bs,3).G()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.bl(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).G()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=B.bK(A.I,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).G()
d2.drawOval(B.bG(p),r)
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
d3.aH(w,d1.$3(D.f1o,A.aT,A.d2))
d3.aP(D.f0v,c8.$1(A.dt))
d2=d3.a
J.bl(d2.save())
d2.translate(18,-5)
d3.ii(0,d4.y*2)
d3.bo(A.I,D.eh2,c9.$2(A.bO,2.4))
d3.bo(A.a7s,D.eh1,c9.$2(A.hN,1))
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
d3.aH(d2,c8.$1(A.bL.j(0.35*v)))}d3.az(d0.$5(-26,-6,30,12,3),d1.$3(D.f1u,A.bm,A.cr))
k=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
k.D(new B.aY(4,-6))
k.D(new B.aq(18,-12))
k.D(new B.aq(18,12))
k.D(new B.aq(4,6))
k.D(new B.bt())
d3.aH(k,c8.$1(A.e7))
d3.ad(D.eh7,7,c8.$1(c7?A.c:A.dt))
return!0
case"neon":d3.az(d0.$5(-30,-14,60,28,6),c8.$1(M.ng))
if(c7)j=d4.ax>0.5||A.o.F(A.k.bf(d5*17),3)!==0
else j=!1
i=j?A.c_:D.boo
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c_.j(0.35))
t.z=A.mT
d3.az(d2,t)}d3.az(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.ekn,i,17)
return!0
case"microwave":d3.az(d0.$4(-30,-18,60,38),d1.$3(D.f1A,A.bO,A.bm))
d2=d0.$5(-26,-14,38,30,3)
d3.az(d2,c8.$1(c7?A.bL.j(0.75):A.av))
if(c7){d2=d3.a
J.bl(d2.save())
d2.translate(-7,8)
d3.ii(0,d4.y*0.5)
d3.dP(B.bK(A.I,7,22),c8.$1(A.d2))
d2.restore()}d3.az(d0.$5(15,-14,12,12,2),c8.$1(M.ng))
if(c7)d6.$5(d3,"0:"+A.a.aX(A.o.u(59-A.o.F(A.k.bf(d5),60)),2,"0"),D.eh8,A.bf,6.5)
d3.ad(D.eho,4,c8.$1(A.dt))
return!0
case"doorbell":d3.az(d0.$5(-16,-26,32,52,8),c8.$1(A.aN))
d3.ad(A.Jb,10,c8.$1(c7?A.bu:A.bs))
d2=d3.a
J.bl(d2.save())
d2.translate(0,-8)
d3.ii(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.el4,A.c,16)
d2.restore()
d3.ad(A.ks,6,c8.$1(A.d3))
d3.ad(A.ks,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=B.bY(A.Jb,14+v*6+A.k.F(t,6))
r=c9.$2(A.bu.j(0.9-v*0.3),1.8).G()
d2.drawArc.apply(d2,[B.bG(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bo(D.ekm,D.ekZ,c9.$2(A.bs,4))
d2=d3.a
J.bl(d2.save())
d3.ii(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.az(d0.$5(-24,-14,46,22,5),d1.$3(D.f1p,A.bO,A.al))
d3.ad(D.aK2,8,c8.$1(A.av))
d3.ad(D.aK2,4.5,c8.$1(c7?A.aJ:A.cr))
d3.ad(D.ekk,2.2,c8.$1(c7&&A.o.F(A.k.bf(d5*1.6),2)===0?A.ax:A.jM))
d2.restore()
if(c7)d6.$5(d3,"REC",D.ekv,A.ax,9)
return!0
case"console":d3.az(d0.$5(-28,-22,56,44,8),d1.$3(D.f1x,A.iS,A.fd))
d3.az(d0.$5(-20,-17,40,22,3),c8.$1(A.dG))
if(c7){d2=d5*2.3
d3.ad(new B.t(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aP(new B.a3(-18,t,-15.6,t+8),c8.$1(A.bf))
d2=-9+Math.sin(d2-0.4)*6
d3.aP(new B.a3(15.6,d2,18,d2+8),c8.$1(A.c_))}d3.ad(D.ekf,4,c8.$1(A.aS))
d3.ad(D.eh3,2.4,c8.$1(A.ax))
d3.ad(D.ehl,2.4,c8.$1(A.be))
return!0
case"heartmon":d3.az(d0.$5(-30,-22,60,44,6),c8.$1(A.av))
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
if(p!=null)s.bw(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new B.aq(l,f)
t.push(s)
p=h.f
if(p!=null)s.bw(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aH(h,c9.$2(A.bf,1.8))
d6.$5(d3,"72",D.eh4,A.hc,11)
d2=d5*9
d6.$5(d3,"\u2665",D.ekA,A.hc.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ad(D.ekp,3,c8.$1(c7?A.be:A.bs))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.az(d2,c8.$1(A.cw.j(c7?0.5:0.3)))
d3.az(d0.$5(-26,-20,52,40,4),c9.$2(A.ac,1.6))
d3.aP(D.f1r,c8.$1(G.tH))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bl(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.p9(0,-1,1)
d3.dP(B.bK(A.I,8,14),c8.$1(A.cL))
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-6,0))
d2.D(new B.aq(-12,-4))
d2.D(new B.aq(-12,4))
d2.D(new B.bt())
d3.aH(d2,c8.$1(A.cd))
d3.ad(D.ei7,1.2,c8.$1(A.w))
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
d3.aH(e,d1.$3(D.f21,A.c,A.bz))
d3.aP(D.f1Y,c8.$1(c7?A.dB:A.bs))
s=new B.aF(d2,A.ag,c6,c6,B.a([],t))
s.D(new B.aY(-7,-22))
s.D(new B.aq(0,-29))
s.D(new B.aq(7,-22))
s.D(new B.bt())
d3.aH(s,c8.$1(A.ek))
if(c7){d=Math.sin(d4.y*0.3)
d2=new B.aF(d2,A.ag,c6,c6,B.a([],t))
d2.D(new B.aY(0,-19))
t=d*34
d2.D(new B.aq(t,-26))
d2.D(new B.aq(t,-12))
d2.D(new B.bt())
d3.aH(d2,c8.$1(A.dB.j(0.45)))
d2=c8.$1(A.dB.j(0.35))
d2.z=A.ID
d3.ad(D.egD,14,d2)}return!0
case"discoball":d3.bo(D.egG,Q.aJV,c9.$2(A.dt,1.4))
d3.ad(A.I,16,d1.$3(D.f18,A.aP,A.al))
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
r=c8.$1(D.dgx[A.o.F(v,4)].j(0.5+0.5*Math.sin(s+v))).G()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.az(d0.$5(-14,-4,28,24,5),d1.$3(D.f15,A.cq,A.al))
d3.az(d0.$5(-12,-26,24,20,5),d1.$3(D.f0Z,A.aN,A.bM))
d3.bo(H.aJW,D.egH,c9.$2(A.bs,1.6))
d3.ad(D.egI,2.2,c8.$1(c7?A.ax:A.bs))
a1=c7&&A.k.F(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=G.a57[m]
if(c7)t=a1?A.b8:A.eN
else t=A.cr
r=c8.$1(t).G()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bl(d2.save())
d2.translate(14,0)
d3.ii(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bo(A.I,D.a7n,c9.$2(A.bM,4))
d2.restore()
d3.bo(D.ek5,D.ekt,c9.$2(A.bM,4))
d3.aP(D.f1X,c8.$1(c7?A.b8.j(0.7):A.aK))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.aAN[m]+1,d2,10,14,2)
p=B.ar(A.bL,A.d2,a2)
p.toString
r=c8.$1(p).G()
t.drawRRect(B.e5(s),r)
r.delete()}d3.az(d0.$5(-24,-6,48,26,8),d1.$3(D.f1q,A.bO,A.bm))
for(m=0;m<2;++m){l=D.aAN[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fr:A.av).G()
t.drawRRect(B.e5(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cL.j(0.5))
s.z=N.oz
r=s.G()
t.drawRRect(B.e5(d2),r)
r.delete()}}d3.bo(D.ehu,D.ehQ,c9.$2(A.av,3))
return!0
case"ledstrip":d3.az(d0.$5(-34,-4,68,10,4),c8.$1(A.cr))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.F(t+v*40,360)
i=c7?new Ak.p6(1,a3,0.8,1).jU():A.e7
if(c7){s=c8.$1(i.j(0.45))
s.z=N.oz
r=s.G()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).G()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.az(d0.$5(-40,-2,6,6,1),c8.$1(A.dt))
return!0
case"pump":d3.az(d0.$5(-16,-2,32,22,6),d1.$3(D.f1e,A.cw,A.Fu))
d3.ad(D.ekB,8,c8.$1(A.pY))
d2=d3.a
J.bl(d2.save())
d2.translate(-2,9)
d3.ii(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.fk,2.4).G()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
t.D(new B.aY(16,6))
t.D(new B.aq(26,6))
t.D(new B.aq(26,-20))
t.D(new B.aq(10,-20))
d3.aH(t,c9.$2(A.bM,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.F(t+v*0.2,1)
r=c8.$1(A.hi).G()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ad(D.eiL,3.2,c8.$1(A.hi.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bl(d2.save())
d3.ii(0,-0.15)
d3.az(d0.$5(-26,-14,40,22,10),d1.$3(D.f1s,A.hZ,A.tL))
d3.az(d0.$5(14,-10,12,14,3),c8.$1(A.cr))
d3.az(d0.$5(-10,6,12,22,4),c8.$1(A.e7))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).G()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cL.j(0.4))
d2.z=N.oz
d3.ad(D.ehn,8,d2)}return!0
case"headphones":d3.e3(B.bK(A.dC,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bs,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=G.RR[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new B.a3(s,0,s+14,20),A.br,A.o6).G()
d2.drawRRect(B.e5(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=B.bY(new B.t(l,10),10+v*5+A.k.F(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eG.j(0.9-v*0.3),1.6).G()
d2.drawArc.apply(d2,[B.bG(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new B.t(-4,-8-A.k.F(d5*14,8)),A.kC,12)
return!0
case"smartwatch":d3.az(d0.$5(-8,-30,16,14,3),c8.$1(A.cr))
d3.az(d0.$5(-8,14,16,14,3),c8.$1(A.cr))
d3.az(d0.$5(-14,-17,28,32,8),d1.$3(D.f13,A.dt,A.e7))
d3.az(d0.$5(-11,-14,22,26,6),c8.$1(A.dG))
if(c7){a4=new B.V(Date.now(),0,!1)
d6.$5(d3,A.a.aX(A.o.u(B.dg(a4)),2,"0")+":"+A.a.aX(A.o.u(B.fQ(a4)),2,"0"),D.egM,A.bf,9.5)
g=(Math.sin(d5*9)+1)/2
d2=B.ar(A.F9,A.hc,g)
d2.toString
d6.$5(d3,"\u2665",new B.t(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.F(A.k.bf(d5*2),6)),A.dC,A.c,7)}return!0
case"tablet":d3.az(d0.$5(-30,-22,60,44,6),c8.$1(M.ng))
d3.az(d0.$5(-30,-22,60,44,6),c9.$2(A.bM,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e5(a5),$.nF(),!0)
d2.translate(-27,-19)
L.Lz(d3,D.f7Q,d5,c6)
d2.restore()}else d3.az(a5,c8.$1(D.vT))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.az(a6,d1.$3(new B.a3(a6.a,a6.b,a6.c,a6.d),A.dF,A.d7))
d3.az(a6,c9.$2(A.aX,1.2))
d3.ad(D.aKs,9,c8.$1(A.av))
d3.ad(D.aKs,6,c9.$2(A.d2,2))
d3.az(d0.$5(4,-2,14,10,2),c8.$1(A.av))
d3.az(d0.$5(-22,-19,44,12,2),c8.$1(A.dG))
d2=A.k.ac(d4.db,1)
t=A.k.ac(c7?d4.dx:d4.e,1)
s=c7?A.bf:A.al
d6.$5(d3,d2+"\u2192"+t+"V",D.eiV,s,8.2)
d3.ad(D.ehc,2.4,c8.$1(c7?A.be:A.aK))
d6.$5(d3,"IN",D.eku,A.ac,6)
d6.$5(d3,"OUT",D.eiD,A.ac,6)
return!0
case"regulator":a7=c7?A.k.E(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ar(A.bM,A.ax,a7)
t.toString
d3.az(d2,c8.$1(t))
d3.ad(H.a7l,3,c8.$1(A.aK))
d3.az(d0.$5(-12,-4,24,18,3),d1.$3(D.f1_,A.e7,A.hW))
d6.$5(d3,"7805",D.a7v,A.ac,8)
for(d2=d3.a,m=0;m<3;++m){t=D.dmS[m]-1
r=c8.$1(A.e2).G()
d2.drawRect(B.bG(new B.a3(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.F(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).G()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.el1,A.bk,9)
return!0
case"diode":d3.bo(D.aKw,D.aKe,c9.$2(A.e2,2.4))
d3.az(d0.$5(-14,-7,28,14,6),c8.$1(A.aB.j(0.85)))
d3.aP(D.f0J,c8.$1(A.bk))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dB.j(0.4))
t.z=A.kP
d3.az(d2,t)}d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-8,-4))
d2.D(new B.aq(-8,4))
d2.D(new B.aq(-1,0))
d2.D(new B.bt())
d3.aH(d2,c8.$1(A.aS))
d6.$5(d3,"one way",D.eki,A.aC,8)
return!0
case"ldr":d3.bo(D.aKw,D.a7v,c9.$2(A.e2,2.4))
d3.bo(D.aKk,D.aKe,c9.$2(A.e2,2.4))
d3.ad(A.I,12,c8.$1(A.d2))
d3.ad(A.I,12,c9.$2(A.rk,1.6))
d2=$.S()
t=B.a([],x.v)
a8=new B.aF(d2.r,A.ag,c6,c6,t)
a8.D(new B.aY(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.aq(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bw(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aH(a8,c9.$2(A.bL,1.4))
d2=B.ar(A.bs,A.dB,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.t(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.ek6,A.ac,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.ei
break A}if("sonytv"===d2){t=A.rc
break A}if("appletv"===d2){t=A.e2
break A}t=G.Fb
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
p.clipRRect(B.e5(a5),$.nF(),!0)
p.translate(t,s)
L.hbE(d3,new B.av(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ad(D.ehT,1.6,c8.$1(A.bf))}else{d3.az(a5,c8.$1(D.vT))
p=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
p.D(new B.aY(t,s))
p.D(new B.aq(t+24,s))
p.D(new B.aq(t,s+22))
p.D(new B.bt())
d3.aH(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.az(d0.$5(-22,19,44,3,1.5),c8.$1(A.dt))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=M.ho[m]
s=$.S()
p=B.a([],t)
s=new B.aF(s.r,A.ag,c6,c6,p)
p.push(new B.aY(l*30,20))
p.push(new B.aq(l*22,20))
p.push(new B.aq(l*26,26))
p.push(new B.bt())
r=c8.$1(A.dt).G()
p=s.gbv().a.snapshot()
d2.drawPath((s.e=new B.cf(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.ejy,A.bO,5.5)
break
case"appletv":d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-8,18))
d2.D(new B.aq(8,18))
d2.D(new B.aq(12,25))
d2.D(new B.aq(-12,25))
d2.D(new B.bt())
d3.aH(d2,c8.$1(D.Yq))
d6.$5(d3,"Apple TV",D.eiW,A.bs,4.8)
break
default:d3.az(d0.$5(-34,19,68,7,3),c8.$1(D.bmI))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dm,0.6).G()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.ekY,G.tH,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.mj.h(0,d2)
b1=b0.b===D.wT
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
t.clipRRect(B.e5(a5),$.nF(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
L.Lz(d3,new B.av(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.az(a5,c8.$1(D.vT))
if(b1){t=a5.b
s=a5.d
d3.bo(new B.t(0,t),new B.t(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.az(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ad(new B.t(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.az(d0.$5(-17,-28,34,52,4),c8.$1(A.e7))
d3.az(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.el7,A.av,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.F(v,4)===3?14:22
r=c8.$1(A.bm).G()
d2.drawRect(B.bG(new B.a3(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ad(A.a7j,1.6,c8.$1(A.av))}return!0
case"laptop":d3.az(d0.$5(-30,-28,60,42,4),d1.$3(D.f1B,A.cq,A.bm))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e5(b8),$.nF(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
L.Lz(d3,new B.av(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.az(b8,c8.$1(D.vT))
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-38,16))
d2.D(new B.aq(38,16))
d2.D(new B.aq(34,21))
d2.D(new B.aq(-34,21))
d2.D(new B.bt())
d3.aH(d2,c8.$1(D.Yq))
d3.az(d0.$5(-7,16,14,2,1),c8.$1(A.bm))
return!0
case"imac":d3.az(d0.$5(-32,-28,64,46,5),d1.$3(D.f1F,A.bN,A.cq))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e5(b9),$.nF(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
L.Lz(d3,new B.av(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.az(b9,c8.$1(D.vT))
d3.ad(D.aJQ,2,c8.$1(A.bM))
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-6,18))
d2.D(new B.aq(6,18))
d2.D(new B.aq(10,26))
d2.D(new B.aq(-10,26))
d2.D(new B.bt())
d3.aH(d2,c8.$1(D.Yq))
return!0
case"monitor":d3.az(d0.$5(-34,-28,68,40,3),c8.$1(A.ei))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e5(c0),$.nF(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
L.Lz(d3,new B.av(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.az(c0,c8.$1(D.vT))
d3.aP(D.f1M,c8.$1(A.bm))
d3.az(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dt))
return!0
case"projector":if(c7){d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(14,4))
d2.D(new B.aq(-32,-42))
d2.D(new B.aq(34,-42))
d2.D(new B.bt())
d3.aH(d2,c8.$1(A.dB.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e5(c1),$.nF(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
L.Lz(d3,new B.av(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.az(d0.$5(-26,-4,52,24,6),d1.$3(D.f1t,A.iy,A.dt))
d3.ad(D.aK0,7,c8.$1(A.av))
d3.ad(D.aK0,4,c8.$1(c7?A.dB:A.cr))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dm,1).G()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.az(d0.$5(-34,-10,68,32,12),c8.$1(A.av))
c2=d0.$5(-30,-20,60,28,8)
d3.az(c2,c8.$1(M.ng))
d3.az(c2,c9.$2(A.bs,1.2))
if(c7){c3=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
c3.D(new B.aY(-26,4))
c3.D(new B.c4(-10,-14+Math.sin(d5)*3,6,-6))
c3.D(new B.aq(22,-16))
d3.aH(c3,c9.$2(A.aJ,2.2))
d2=A.k.F(d5*6,48)
d3.ad(new B.t(-26+d2,4-d2*0.1),2.4,c8.$1(A.bf))
d6.$5(d3,""+(88+A.o.F(A.k.bf(d5*2),5)),H.aKj,A.c,10)
d6.$5(d3,"km/h",D.eiJ,A.aC,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.az(c4,d1.$3(new B.a3(c4.a,c4.b,c4.c,c4.d),A.dt,A.e7))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e5(c5),$.nF(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
L.Lz(d3,new B.av(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.br.j(0.2))
d2.z=A.mT
d3.ad(A.I,26,d2)}else d3.az(c5,c8.$1(A.N))
d3.bo(D.ekI,D.ekN,c9.$2(A.bm,4))
d3.bo(D.ehV,D.eia,c9.$2(A.bm,4))
return!0}return!1},
fQX:function fQX(){},
fQZ:function fQZ(){},
fR_:function fR_(){},
fQY:function fQY(){},
hen(d,e,f,g){return new C.aj7(d,g,f,e)},
FY(d,e,f){return new C.bc9(d,e,f)},
aj7:function aj7(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aj8:function aj8(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.h1$=h
_.lY$=i
_.f7$=j
_.h2$=k
_.bx$=l
_.a9$=m
_.c=_.a=null},
bII:function bII(d,e){this.a=d
this.b=e},
bIJ:function bIJ(d){this.a=d},
bIH:function bIH(d){this.a=d},
bIK:function bIK(){},
bIL:function bIL(d){this.a=d},
bIM:function bIM(d,e,f){this.a=d
this.b=e
this.c=f},
bIG:function bIG(d,e){this.a=d
this.b=e},
bIE:function bIE(d,e){this.a=d
this.b=e},
bIF:function bIF(d,e,f){this.a=d
this.b=e
this.c=f},
bIy:function bIy(d,e){this.a=d
this.b=e},
bIz:function bIz(){},
bIA:function bIA(d,e){this.a=d
this.b=e},
bIB:function bIB(d,e){this.a=d
this.b=e},
bIC:function bIC(d){this.a=d},
bID:function bID(d){this.a=d},
bJ0:function bJ0(d){this.a=d},
bJ1:function bJ1(){},
bIb:function bIb(){},
bJ2:function bJ2(d,e){this.a=d
this.b=e},
bJ_:function bJ_(d,e,f){this.a=d
this.b=e
this.c=f},
bIV:function bIV(d){this.a=d},
bIS:function bIS(d,e,f){this.a=d
this.b=e
this.c=f},
bIT:function bIT(d,e){this.a=d
this.b=e},
bIW:function bIW(d){this.a=d},
bIQ:function bIQ(d,e){this.a=d
this.b=e},
bIR:function bIR(d,e){this.a=d
this.b=e},
bIU:function bIU(d){this.a=d},
bIX:function bIX(d){this.a=d},
bIO:function bIO(d,e){this.a=d
this.b=e},
bIP:function bIP(d,e){this.a=d
this.b=e},
bIY:function bIY(d){this.a=d},
bIN:function bIN(d){this.a=d},
bIZ:function bIZ(d){this.a=d},
bIc:function bIc(d,e){this.a=d
this.b=e},
bIv:function bIv(d,e){this.a=d
this.b=e},
bIx:function bIx(d,e){this.a=d
this.b=e},
bIw:function bIw(d,e){this.a=d
this.b=e},
bIi:function bIi(d,e){this.a=d
this.b=e},
bIj:function bIj(d){this.a=d},
bIh:function bIh(d){this.a=d},
bIk:function bIk(d,e,f){this.a=d
this.b=e
this.c=f},
bIg:function bIg(d,e){this.a=d
this.b=e},
bIn:function bIn(d,e){this.a=d
this.b=e},
bIo:function bIo(d,e){this.a=d
this.b=e},
bIp:function bIp(d,e){this.a=d
this.b=e},
bIq:function bIq(d,e,f){this.a=d
this.b=e
this.c=f},
bIf:function bIf(d,e){this.a=d
this.b=e},
bIr:function bIr(d,e,f){this.a=d
this.b=e
this.c=f},
bIe:function bIe(d,e){this.a=d
this.b=e},
bIs:function bIs(d,e,f){this.a=d
this.b=e
this.c=f},
bId:function bId(d,e){this.a=d
this.b=e},
bIt:function bIt(d){this.a=d},
bIu:function bIu(d){this.a=d},
bIl:function bIl(d){this.a=d},
bIm:function bIm(d){this.a=d},
bc9:function bc9(d,e,f){this.a=d
this.b=e
this.c=f},
foc:function foc(){},
fod:function fod(){},
foe:function foe(){},
fo_:function fo_(){},
fof:function fof(){},
fnZ:function fnZ(){},
fog:function fog(){},
fo3:function fo3(){},
fnY:function fnY(){},
fo4:function fo4(){},
fnX:function fnX(){},
fo5:function fo5(){},
fnW:function fnW(){},
fo6:function fo6(){},
fnU:function fnU(){},
fnV:function fnV(){},
fo7:function fo7(){},
fnS:function fnS(){},
fnT:function fnT(){},
fo8:function fo8(){},
fnR:function fnR(){},
Vu:function Vu(d){this.a=d},
aEi:function aEi(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dXW:function dXW(d,e){this.a=d
this.b=e},
dY4:function dY4(d){this.a=d},
dY5:function dY5(){},
dY6:function dY6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dY7:function dY7(){},
dXV:function dXV(d){this.a=d},
dXU:function dXU(d,e,f){this.a=d
this.b=e
this.c=f},
dXT:function dXT(d,e){this.a=d
this.b=e},
dXR:function dXR(d){this.a=d},
dXS:function dXS(){},
dY3:function dY3(d){this.a=d},
dY2:function dY2(d){this.a=d},
dY0:function dY0(d,e){this.a=d
this.b=e},
dXZ:function dXZ(d){this.a=d},
dY_:function dY_(){},
dY1:function dY1(d,e,f){this.a=d
this.b=e
this.c=f},
dXX:function dXX(d,e){this.a=d
this.b=e},
dXY:function dXY(){},
dY9:function dY9(d){this.a=d},
dYa:function dYa(d,e){this.a=d
this.b=e},
dY8:function dY8(){},
dYb:function dYb(d,e){this.a=d
this.b=e},
dYc:function dYc(d){this.a=d},
dYd:function dYd(d){this.a=d},
ayh:function ayh(d,e){this.c=d
this.a=e},
bal:function bal(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
cHU:function cHU(d){this.a=d},
bak:function bak(d,e){this.b=d
this.a=e},
cHT:function cHT(d){this.a=d},
ayB:function ayB(){},
ayC:function ayC(){},
aKP:function aKP(){},
byM:function byM(){},
ijS(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bY(A.v4,23)
$.S()
b8=B.I()
b8.r=A.av.gp(0)
b9.ad(A.v4,25,b8)
b8=B.I()
b8.sam(D.etO.aA(0,v))
b9.ad(A.v4,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.r=A.bk.gp(0)
o.c=A.o.F(u,5)===0?1.8:1
n=o.G()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.E(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.I()
r.r=A.bz.gp(0)
r.c=2
r.d=A.bB
b9.bo(A.v4,new B.t(b8*18,s*18-2),r)
r=B.I()
r.r=A.bk.gp(0)
b9.ad(A.v4,3,r)
c2.$5(b9,w?"V":"A",D.ekQ,A.bk,12)
c2.$5(b9,w?A.k.ac(m,1)+" V":""+A.k.V(m*1000)+" mA",D.ekc,A.av,9.5)
return!0
case"fan":b8=B.bs(D.f0W,A.hE)
$.S()
s=B.I()
s.r=A.bs.gp(0)
b9.az(b8,s)
s=B.I()
s.r=A.al.gp(0)
b9.aP(D.f1N,s)
s=B.I()
s.r=A.N.j(0.6).gp(0)
b9.ad(H.v5,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bl(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bK(A.aJU,18,10)
r=new B.ao(A.Q,A.M,A.S,A.T,A.R)
r.r=A.hi.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.G()
b8.drawOval(B.bG(s),n)
n.delete()
b8.restore()}b8=B.I()
b8.r=A.bo.gp(0)
b9.ad(H.v5,4,b8)
b8=B.I()
b8.b=A.a9
b8.c=2
b8.r=A.cq.gp(0)
b9.ad(H.v5,22,b8)
b8=B.I()
b8.b=A.a9
b8.c=0.8
b8.r=A.jN.gp(0)
b9.ad(H.v5,14,b8)
return!0
case"speaker":l=B.bs(D.aQ2,A.qL)
$.S()
b8=B.I()
b8.sam(D.arw.aA(0,new B.a3(l.a,l.b,l.c,l.d)))
b9.az(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=B.I()
b8.sam(D.eua.aA(0,B.bY(A.cy,15)))
b9.ad(A.cy,14+k,b8)
b8=B.I()
b8.r=A.dt.gp(0)
b9.ad(A.cy,5,b8)
b8=B.I()
b8.r=A.bm.gp(0)
b9.ad(H.a7k,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=B.bY(D.eht,6+u*6+A.k.F(b8,6))
q=new B.ao(A.Q,A.M,A.S,A.T,A.R)
q.b=A.a9
q.c=1.8
q.r=A.c_.j(0.9-u*0.2).gp(0)
n=q.G()
s.drawArc.apply(s,[B.bG(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=B.bs(D.f1E,A.qL)
$.S()
b8=B.I()
b8.sam(D.c49.aA(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
b8=B.bs(D.aQ4,A.id)
s=B.I()
s.r=A.hW.gp(0)
b9.az(b8,s)
if(b7){i=new B.V(Date.now(),0,!1)
h=B.Fh(i)<500?":":" "
g=A.a.aX(A.o.u(B.dg(i)),2,"0")
f=A.a.aX(A.o.u(B.fQ(i)),2,"0")
b8=B.I()
b8.r=A.bf.j(0.12).gp(0)
b9.aP(D.aQ4,b8)
c2.$5(b9,g+h+f,D.eky,A.bf,21)}b8=B.I()
b8.r=A.cq.gp(0)
b9.ad(D.ekw,2.4,b8)
b8=B.I()
b8.r=A.cq.gp(0)
b9.ad(D.ehy,2.4,b8)
return!0
case"calculator":j=B.bs(D.f1j,A.hF)
$.S()
b8=B.I()
b8.sam(D.c3U.aA(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
b8=B.bs(D.f1c,A.hp)
s=B.I()
s.r=(b7?A.YC:D.boZ).gp(0)
b9.az(b8,s)
if(b7)c2.$5(b9,"3.14159",D.ekb,A.Xr,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=B.bs(new B.a3(q,s,q+6,r),A.TJ)
$.S()
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
p.r=(d===3?A.cd:A.bO).gp(0)
n=p.G()
b8.drawRRect(B.e5(q),n)
n.delete()}return!0
case"phone":j=B.bs(D.f17,A.hF)
$.S()
b8=B.I()
b8.r=M.ng.gp(0)
b9.az(j,b8)
b8=B.I()
b8.b=A.a9
b8.c=1.9
b8.r=D.aiP.gp(0)
b9.az(j,b8)
a0=B.bs(D.f0Y,A.hE)
if(b7){b8=B.I()
b8.sam(D.c5t.aA(0,new B.a3(a0.a,a0.b,a0.c,a0.d)))
b9.az(a0,b8)
b8=b9.a
J.bl(b8.save())
b8.clipRRect(B.e5(a0),$.nF(),!0)
b8.translate(-12,-25)
L.Lz(b9,D.f7s,c1,b6)
b8.restore()
a1=A.k.F(c1*0.12,1)
b8=B.bs(D.f0V,A.hp)
s=B.I()
s.r=A.aS.gp(0)
b9.az(b8,s)
s=B.I()
s.r=A.bf.gp(0)
b9.aP(new B.a3(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.eje,A.c,6)}else{b8=B.I()
b8.r=D.vT.gp(0)
b9.az(a0,b8)}b8=B.bs(D.f22,D.euj)
s=B.I()
s.r=A.w.gp(0)
b9.az(b8,s)
return!0
case"router":j=B.bs(D.f1D,A.mW)
$.S()
b8=B.I()
b8.sam(D.c4q.aA(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=G.RR[a2]
s=a3<0?-4:4
r=new B.ao(A.Q,A.M,A.S,A.T,A.R)
r.r=A.cr.gp(0)
r.c=4
r.d=A.bB
n=r.G()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.F(A.k.bf(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new B.ao(A.Q,A.M,A.S,A.T,A.R)
s.r=(a4?A.be:A.aK).gp(0)
n=s.G()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=B.bY(H.v5,8+u*6+A.k.F(s,6))
q=new B.ao(A.Q,A.M,A.S,A.T,A.R)
q.b=A.a9
q.c=1.8
q.r=A.hg.j(0.9-u*0.2).gp(0)
n=q.G()
b8.drawArc.apply(b8,[B.bG(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bs(D.f1i,A.hE)
s=$.S()
r=B.I()
r.r=A.e7.gp(0)
b9.az(b8,r)
if(b7){b8=B.I()
b8.r=A.ax.j(0.5*a5).gp(0)
b8.z=A.zI
b9.ad(A.v4,34,b8)}a6=new B.aF(s.r,A.ag,b6,b6,B.a([],x.v))
a6.D(new B.aY(-16,12))
a6.D(new B.aq(-16,-2))
a6.D(new B.c4(0,-30,16,-2))
a6.D(new B.aq(16,12))
a6.D(new B.bt())
b8=B.I()
b8.r=B.ar(A.ek,D.bg9,a5).gp(0)
b9.aH(a6,b8)
b8=B.I()
b8.b=A.a9
b8.c=1.4
b8.r=A.bU.gp(0)
b9.aH(a6,b8)
if(b7){b8=b9.a
J.bl(b8.save())
b8.translate(0,-2)
b9.ii(0,c1*7)
s=B.I()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bo(A.I,H.a7k,s)
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
q=B.I()
q.sam(D.c2u.aA(0,D.f1w))
b9.aH(j,q)
q=new B.aF(s,A.ag,b6,b6,B.a([],r))
q.D(new B.aY(-8,-4))
q.D(new B.aq(-4,-13))
q.D(new B.aq(4,-13))
q.D(new B.aq(4,-4))
q.D(new B.bt())
p=B.I()
p.r=A.fk.gp(0)
b9.aH(q,p)
r=new B.aF(s,A.ag,b6,b6,B.a([],r))
r.D(new B.aY(8,-4))
r.D(new B.aq(8,-13))
r.D(new B.aq(11,-13))
r.D(new B.aq(15,-4))
r.D(new B.bt())
s=B.I()
s.r=A.fk.gp(0)
b9.aH(r,s)
for(a2=0;a2<2;++a2){a3=G.aAO[a2]
s=new B.ao(A.Q,A.M,A.S,A.T,A.R)
s.r=A.av.gp(0)
n=s.G()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bl(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ao(A.Q,A.M,A.S,A.T,A.R)
q.r=A.bO.gp(0)
q.c=1.6
n=q.G()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.F(s+u*8,14)
q=-4+u*5
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
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
j.D(new B.c4(0,-20,14,-12))
j.D(new B.aq(18,20))
j.D(new B.bt())
r=B.I()
r.sam(D.c3z.aA(0,D.f1h))
b9.aH(j,r)
r=new B.aF(b8,A.ag,b6,b6,B.a([],s))
r.D(new B.aY(14,-10))
r.D(new B.aq(30,-22))
r.D(new B.aq(32,-18))
r.D(new B.aq(16,-4))
r.D(new B.bt())
q=B.I()
q.r=A.e2.gp(0)
b9.aH(r,q)
s=new B.aF(b8,A.ag,b6,b6,B.a([],s))
s.D(new B.aY(-14,-8))
s.D(new B.c4(-34,-6,-18,12))
b8=B.I()
b8.b=A.a9
b8.c=5
b8.r=A.av.gp(0)
b9.aH(s,b8)
b8=B.I()
if(b7){s=B.ar(A.cL,A.tV,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.e7
b8.r=s.gp(0)
b9.aP(D.f1g,b8)
if(b7){b8=B.I()
b8.r=A.cL.j(0.3).gp(0)
b8.z=A.mT
b9.ad(A.aJS,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.F(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new B.ao(A.Q,A.M,A.S,A.T,A.R)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.G()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=B.I()
b8.r=A.av.gp(0)
b9.ad(D.egB,3,b8)
return!0
case"lamp":if(b7){u=A.k.E(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aF($.S().r,A.ag,b6,b6,B.a([],x.v))
b8.D(new B.aY(-10,-14))
b8.D(new B.aq(-30,24))
b8.D(new B.aq(10,24))
b8.D(new B.aq(8,-14))
b8.D(new B.bt())
s=B.I()
s.r=A.dB.j(0.28*u).gp(0)
b9.aH(b8,s)
s=B.I()
s.r=A.dB.j(0.5*u).gp(0)
s.z=U.IB
b9.ad(D.ekC,24,s)}b8=B.bs(D.f1W,A.hE)
s=$.S()
r=B.I()
r.r=A.e7.gp(0)
b9.az(b8,r)
r=B.I()
r.r=A.dt.gp(0)
r.c=3
r.d=A.bB
b9.bo(D.egP,D.aK3,r)
r=B.I()
r.r=A.dt.gp(0)
r.c=3
r.d=A.bB
b9.bo(D.aK3,D.ekD,r)
a9=new B.aF(s.r,A.ag,b6,b6,B.a([],x.v))
a9.D(new B.aY(-14,-16))
a9.D(new B.aq(6,-26))
a9.D(new B.aq(10,-12))
a9.D(new B.aq(-10,-6))
a9.D(new B.bt())
s=B.I()
s.r=(b7?A.aT:A.kf).gp(0)
b9.aH(a9,s)
b8=B.I()
b8.r=(b7?A.c:A.bm).gp(0)
b9.ad(D.ekG,4,b8)
return!0
case"lights":b8=$.S().r
s=x.v
b0=new B.aF(b8,A.ag,b6,b6,B.a([],s))
b0.D(new B.aY(-34,-6))
b0.D(new B.c4(0,22,34,-6))
r=B.I()
r.b=A.a9
r.c=2
r.r=A.hf.gp(0)
b9.aH(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.F(q+u*0.7,1.8)<1.1
if(b2){b3=new B.ao(A.Q,A.M,A.S,A.T,A.R)
b3.r=D.a48[u].j(0.6).gp(0)
b3.z=A.ID
n=b3.G()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=B.a([],s)
b4=new B.aF(b8,A.ag,b6,b6,b3)
b3.push(new B.aY(p-3,o))
b3.push(new B.aq(p+3,o))
b5=o+11
b3.push(new B.aq(p+5,b5))
b3.push(new B.c4(p,o+17,p-5,b5))
b3.push(new B.bt())
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
if(b2)o=D.a48[u]
else{o=B.ar(D.a48[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.G()
p=b4.gbv().a.snapshot()
r.drawPath((b4.e=new B.cf(p)).a,n)
n.delete()}return!0}return C.ijQ(b9,c0,c1,c2)},
fS:function fS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h9I(d){var w=D.mj.h(0,d)
return(w==null?null:w.b)===D.A7},
il2(d,e,f){return B.a4(d,!1).cc(B.v2(null,!1,!0,!0,new C.fVO(e,f),A.eR,null,A.p8,new C.fVP(),x.H))},
JI:function JI(d,e){this.a=d
this.b=e},
mn:function mn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fVO:function fVO(d,e){this.a=d
this.b=e},
fVP:function fVP(){},
Vd:function Vd(d,e,f){this.c=d
this.d=e
this.a=f},
bkX:function bkX(d,e){var _=this
_.d=$
_.e=null
_.bx$=d
_.a9$=e
_.c=_.a=null},
dU5:function dU5(d){this.a=d},
dU4:function dU4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dU2:function dU2(){},
dU3:function dU3(d){this.a=d},
dU1:function dU1(d){this.a=d},
dU0:function dU0(d,e){this.a=d
this.b=e},
dU_:function dU_(d,e){this.a=d
this.b=e},
dTZ:function dTZ(d){this.a=d},
dTY:function dTY(d){this.a=d},
dTU:function dTU(d){this.a=d},
dTT:function dTT(d){this.a=d},
dTX:function dTX(d,e,f){this.a=d
this.b=e
this.c=f},
dTW:function dTW(d){this.a=d},
dTV:function dTV(d){this.a=d},
bwO:function bwO(d,e,f){this.b=d
this.c=e
this.a=f},
af0:function af0(d,e,f){this.b=d
this.c=e
this.a=f},
aMA:function aMA(){},
a1j(d,e,f,g,h,i){return new C.bvA(d,e,f,g,h,i)},
bvA:function bvA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
foI:function foI(){},
foJ:function foJ(){},
foK:function foK(){},
foL:function foL(){},
foM:function foM(){},
foN:function foN(){},
foO:function foO(){},
foP:function foP(){},
a8J:function a8J(d){this.a=d},
ckA:function ckA(d){this.a=d},
ckB:function ckB(){},
ckz:function ckz(d,e){this.a=d
this.b=e},
cky:function cky(d){this.a=d},
WO:function WO(d){this.a=d},
aFM:function aFM(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.h1$=f
_.lY$=g
_.f7$=h
_.h2$=i
_.bx$=j
_.a9$=k
_.c=_.a=null},
eQl:function eQl(d){this.a=d},
eQh:function eQh(d){this.a=d},
eQg:function eQg(d,e){this.a=d
this.b=e},
eQj:function eQj(d,e){this.a=d
this.b=e},
eQi:function eQi(d,e){this.a=d
this.b=e},
eQk:function eQk(d){this.a=d},
bx_:function bx_(d,e,f){this.b=d
this.c=e
this.a=f},
VC:function VC(d){this.a=d},
bl7:function bl7(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.h1$=d
_.lY$=e
_.f7$=f
_.h2$=g
_.bx$=h
_.a9$=i
_.c=_.a=null},
e_V:function e_V(){},
e_W:function e_W(){},
e_Q:function e_Q(d,e){this.a=d
this.b=e},
e_S:function e_S(d,e){this.a=d
this.b=e},
e_T:function e_T(d){this.a=d},
e_R:function e_R(d){this.a=d},
e_U:function e_U(d){this.a=d},
brJ:function brJ(d,e,f){this.b=d
this.c=e
this.a=f},
UP:function UP(d){this.a=d},
bkJ:function bkJ(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.h1$=d
_.lY$=e
_.f7$=f
_.h2$=g
_.bx$=h
_.a9$=i
_.c=_.a=null},
dLE:function dLE(){},
dLF:function dLF(){},
dLz:function dLz(){},
dLC:function dLC(d,e){this.a=d
this.b=e},
dLB:function dLB(d,e){this.a=d
this.b=e},
dLD:function dLD(d){this.a=d},
dLA:function dLA(d){this.a=d},
aJd:function aJd(d,e,f){this.a=d
this.b=e
this.c=f},
Vt:function Vt(d){this.a=d},
bkZ:function bkZ(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dXq:function dXq(d,e){this.a=d
this.b=e},
dXr:function dXr(d){this.a=d},
dXp:function dXp(d,e){this.a=d
this.b=e},
dXs:function dXs(d){this.a=d},
dXo:function dXo(d,e){this.a=d
this.b=e},
dXt:function dXt(d){this.a=d},
dXn:function dXn(d,e){this.a=d
this.b=e},
dXu:function dXu(d,e){this.a=d
this.b=e},
dXm:function dXm(d,e){this.a=d
this.b=e},
dXv:function dXv(d){this.a=d},
dXl:function dXl(d,e){this.a=d
this.b=e},
dXw:function dXw(d){this.a=d},
dXk:function dXk(d){this.a=d},
dXx:function dXx(d){this.a=d},
dXj:function dXj(d){this.a=d},
dXy:function dXy(d){this.a=d},
dXz:function dXz(d){this.a=d},
dXi:function dXi(d){this.a=d},
bn_:function bn_(d,e,f){this.b=d
this.c=e
this.a=f},
Wb:function Wb(d){this.a=d},
aF5:function aF5(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
enc:function enc(d,e){this.a=d
this.b=e},
end:function end(d,e,f){this.a=d
this.b=e
this.c=f},
enb:function enb(d,e,f){this.a=d
this.b=e
this.c=f},
ene:function ene(d){this.a=d},
ena:function ena(d){this.a=d},
eni:function eni(d){this.a=d},
enh:function enh(d,e){this.a=d
this.b=e},
eng:function eng(d,e){this.a=d
this.b=e},
enj:function enj(d,e){this.a=d
this.b=e},
enf:function enf(d,e){this.a=d
this.b=e},
enk:function enk(d){this.a=d},
Wl:function Wl(d){this.a=d},
aFq:function aFq(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
exZ:function exZ(d){this.a=d},
ey_:function ey_(d){this.a=d},
exX:function exX(d,e){this.a=d
this.b=e},
exY:function exY(d){this.a=d},
exW:function exW(d){this.a=d},
ey0:function ey0(d){this.a=d},
ey1:function ey1(d){this.a=d},
ey2:function ey2(d){this.a=d},
ey3:function ey3(d,e){this.a=d
this.b=e},
WF:function WF(d){this.a=d},
bmd:function bmd(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eLQ:function eLQ(){},
eLZ:function eLZ(){},
eLV:function eLV(d){this.a=d},
eLU:function eLU(){},
eLW:function eLW(d,e){this.a=d
this.b=e},
eLT:function eLT(d,e){this.a=d
this.b=e},
eLX:function eLX(d){this.a=d},
eLS:function eLS(d,e){this.a=d
this.b=e},
eLY:function eLY(d){this.a=d},
eLR:function eLR(d){this.a=d},
Wa:function Wa(d){this.a=d},
blI:function blI(d,e,f,g,h,i,j,k){var _=this
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
_.h1$=f
_.lY$=g
_.f7$=h
_.h2$=i
_.bx$=j
_.a9$=k
_.c=_.a=null},
elS:function elS(){},
elT:function elT(){},
elL:function elL(d){this.a=d},
elK:function elK(d){this.a=d},
elM:function elM(d){this.a=d},
elJ:function elJ(d){this.a=d},
elN:function elN(d){this.a=d},
elI:function elI(d){this.a=d},
elO:function elO(d,e){this.a=d
this.b=e},
elH:function elH(d,e){this.a=d
this.b=e},
elP:function elP(d){this.a=d},
elG:function elG(d,e){this.a=d
this.b=e},
elQ:function elQ(d){this.a=d},
elF:function elF(d,e){this.a=d
this.b=e},
elR:function elR(d){this.a=d},
elE:function elE(d,e){this.a=d
this.b=e},
bez:function bez(d,e,f){this.c=d
this.d=e
this.a=f},
aMo:function aMo(){},
byI:function byI(){},
aMH:function aMH(){},
byO:function byO(){},
aN9:function aN9(){},
byX:function byX(){},
aNA:function aNA(){},
bz5:function bz5(){},
Je(d,e,f,g){var w,v,u,t,s,r,q,p=$.asF
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.L)(e),++w)E.ml(d,e[w],f,g)
return}for(p=B.d_(e,0,B.dB(4,"count",x.S),B.T(e).c),v=p.$ti,p=new B.bS(p,p.gL(0),v.k("bS<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.ml(d,s,f,g)
else B.bP(new B.bb(1000*q),new C.ckw(d,s,f,g),u)}},
ci4(d){return C.hQJ(d)},
hQJ(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ci4=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ci4)
case 7:r=f
q=B.aT(J.r(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.U(x.N,x.z)
w=1
break}p=A.X.aM(0,q,null)
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
return B.i($async$ci4,v)},
b2d(d,e){return C.hQK(d,e)},
hQK(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b2d=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2d)
case 6:s=g
w=7
return B.b(s.au("String","ngmy_play_progress_v1_"+d,A.X.aq(e,null)),$async$b2d)
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
return B.i($async$b2d,v)},
ckw:function ckw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iaG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.U(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.x)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.L)(w),++q){p=w[q]
u.push(B.H(["k",p.b,"x",B.od(A.k.ac(p.c,4)),"y",B.od(A.k.ac(p.d,4)),"v",p.e,"l",B.od(A.k.ac(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.od(A.k.ac(p.as,3)),"ch",p.at,"vc",B.od(A.k.ac(p.z,3)),"s",B.od(A.k.ac(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.L)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a7(f).k("cs.E"))
A.d.ff(l)
return A.X.aq(B.H(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
ikf(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.X.aM(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.aa(h)
A.d.aa(a6.b)
v=B.a([],x.fs)
g=x.L
f=g.a(J.r(w,"parts"))
f=J.aW(f==null?A.cv:f)
while(f.C()){u=f.gS(f)
t=i.a(u)
e=B.aT(J.r(t,"k"))
s=e==null?"":e
if(!$.qw().aj(0,s)){J.ca(v,null)
continue}d=s
a0=B.aK(J.r(t,"x"))
if(a0==null)a0=0.5
a1=B.aK(J.r(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.tL(a2,d,a0,a1)
a3.ar3(a2,d,a0,a1)
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
d=B.jX(J.r(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.jX(J.r(t,"b"))
r.x=d===!0
d=B.aT(J.r(t,"bw"))
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
J.ca(v,r)}i=g.a(J.r(w,"wires"))
i=J.aW(i==null?A.cv:i)
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
if(m!=null&&l!=null)a6.ali(m,A.k.N(B.e7(J.r(p,1))),l,A.k.N(B.e7(J.r(p,3))))}i=B.aK(J.r(w,"challenge"))
i=A.k.N(i==null?0:i)
k=B.aX(x.S)
h=g.a(J.r(w,"done"))
h=J.aW(h==null?A.cv:h)
while(h.C()){j=h.gS(h)
J.ca(k,A.k.N(B.e7(j)))}return new B.bpW(i,k)}catch(a4){return a5}},
fEM(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fEM=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.az(),$async$fEM)
case 7:r=o.aT(n.r(e.a,"ngmy_electronics_lab_v1"))
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
return B.i($async$fEM,v)},
bFp(d){return C.ilP(d)},
ilP(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bFp=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.az(),$async$bFp)
case 7:w=6
return B.b(f.au("String","ngmy_electronics_lab_v1",d),$async$bFp)
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
return B.i($async$bFp,v)}},D,H,X,Ak,Y,A2,Al
J=c[1]
B=c[0]
A=c[2]
A3=c[117]
Z=c[154]
A4=c[146]
A_=c[144]
R=c[138]
A5=c[132]
A6=c[148]
A7=c[156]
A8=c[106]
A9=c[134]
A0=c[116]
N=c[140]
Aa=c[155]
Ab=c[147]
Ac=c[151]
Ad=c[75]
T=c[84]
Ae=c[87]
P=c[126]
Af=c[130]
U=c[136]
V=c[139]
W=c[150]
E=c[29]
K=c[3]
F=c[38]
I=c[108]
A1=c[102]
O=c[149]
Ag=c[101]
Ah=c[152]
S=c[127]
Ai=c[153]
Q=c[142]
Aj=c[26]
L=c[28]
G=c[99]
M=c[97]
C=a.updateHolder(c[18],C)
D=c[135]
H=c[137]
X=c[143]
Ak=c[57]
Y=c[110]
A2=c[145]
Al=c[141]
C.akp.prototype={}
C.VV.prototype={
R(){return new C.blw(B.U(x.N,x.i),new B.au(A.at,$.ax()),B.a([],x.X),B.a([],x.F),B.mS(0,null,null))}}
C.blw.prototype={
gWJ(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
this.ch.q()
this.a1()},
Px(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Px=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aV.al$.d.c
if(s!=null)s.jm()
p.bP(0,A.cb)
t.m(new C.ef_(t))
t.a.toString
p=t.gWJ()
w=3
return B.b(C.bAY(C.hZv(q,C.iay(p),o,t.ay)),$async$Px)
case 3:s=e
r=s==null?null:J.j6(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=C.ibY(q,p,o)
if(t.c==null){w=1
break}t.m(new C.ef0(t,o,r))
$.aV.x1$.push(new C.ef1(t))
case 1:return B.h(u,v)}})
return B.i($async$Px,v)},
YM(d){return this.c0W(d)},
aX1(){return this.YM(null)},
c0W(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$YM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aV.al$.d.c
if(s!=null)s.jm()
t.f.saY(0,o)
t.m(new C.efc(t))
F.dF(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bAY(C.i5v(o)),$async$YM)
case 3:r=n.a=m.ijV(f)
p.b=""
if(r!=null&&!C.iaz(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.ibZ(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.akp(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.efd(p,t))
t.c6p(p.a)
case 1:return B.h(u,v)}})
return B.i($async$YM,v)},
c6p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
A.d.aa(w)
w=++m.as
v=m.gWJ()
A.d.aa(v.a)
A.d.aa(v.b)
m.e.aa(0)
m.m(new C.ef8(m))
t=d.d
s=B.U(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.ef6(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.ef9(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.L)(r),++u){p.$2(o,new C.efa(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.efb(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.br.j(0.1),g=B.n(16),f=B.K(A.br.j(0.35),A.r,1)
if(m.x)j=B.B(B.a([D.f8Z,A.bb,B.E(B.d(m.Q,l,l,l,l,l,l,A.Ai,l,l,l),1)],x.p),A.m,l,A.e,A.i,0,l,l)
else if(k==null)j=D.fzK
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.V8,l,l,l),1)
v=x.p
w=B.a([B.B(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fk0,l,l,l)],v),A.m,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.u9,B.d(u,l,l,l,l,l,l,D.fmN,l,l,l),l))
w.push(A.cS)
w.push(B.d(k.b,l,l,l,l,l,l,I.Ek,l,l,l))
u=k.e
if(u.length!==0){t=A.aT.j(0.12)
s=B.n(10)
w.push(B.p(l,B.d(u,l,l,l,l,l,l,D.fpj,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.i4,A.ck,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aC
w.push(new B.D(A.Nh,new B.cd(A.aM,A.e,A.i,A.E,l,A.p,l,0,B.a([new B.y(t,l,A.lS,l,l,l,l,l,l,l,l,l),A.bn,new B.bA(1,A.bd,new B.y(q,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.L)(j),++p){o=j[p]
t=new B.aP(12,12)
s=new B.aP(12,12)
A.d.v(w,B.a([A.P,new B.bM(A.a8,l,l,B.p(l,new B.y(o.a,l,A.UQ,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.br.j(0.3),l,l,new B.bh(t,t,t,t),l,l,A.n),l,l,l,l,A.h5,l,l,l),l),A.au,B.p(l,new B.y(o.b,l,D.fuY,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.c.j(0.07),l,l,new B.bh(s,s,s,s),l,l,A.n),l,l,l,l,A.bT,l,l,l)],v))}if(m.ax)w.push(D.em9)
j=B.ch(B.x(w,A.E,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.aiC(B.p(l,j,A.f,l,new B.aZ(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.byA,A.eB,l,l,1/0),A.b7,A.iC),B.E(C.hen(m.gWJ(),l,l,m.e),1)],w),A.m,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dX("Ask about it",i,new C.efg(m),l,A.br,l),new E.dX("Invent something new",!i,new C.efh(m),l,A.br,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dp9[p]
i.push(new E.dX(n,!1,new C.efi(m,n),l,A.br,l))}f.push(new E.fc(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.d7r[p]
i.push(new E.dX(r,!1,new C.efj(m,r),l,A.br,l))}f.push(new E.fc(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aM(l,A.Y,!1,l,!0,A.t,l,B.aN(),m.f,l,l,l,l,l,2,B.br(l,new B.b5(4,B.n(16),A.a0),l,A.eS,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kw,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.efk(m,k),l,!1,l,l,!1,l,!0,l,A.aa,l,l,l,l,l,l,l,l,l,l,l,A.df,!0,A.a4,l,A.an,l,A.UC,l,l),1)
h=m.at
v=h&&j?D.bNS:A.e5
j=h&&j?"Ask":"Invent"
f.push(B.B(B.a([i,A.ad,new E.fD(v,j,new C.efl(m,k),A.br,l)],w),A.m,l,A.e,A.i,0,l,l))
return E.lw(A.br,A.f1,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.m,l,A.e,A.O,0,A.p))}}
C.Gs.prototype={}
C.v9.prototype={}
C.Wh.prototype={
R(){return new C.aFk(A.I,A.I,A.aw,B.aX(x.S),$,A.bA,0,B.a([],x.X),null,null)}}
C.aFk.prototype={
gaYi(){var w,v,u,t=this,s=D.I2[t.cx],r=D.RS[t.cy],q=D.D_[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.en(w,w.r,B.a7(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.az5[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cI(p,0,new C.eui())},
ga38(){return D.I2[this.cx].d/this.gaYi()},
gaPs(){return 0.1*(D.I2[this.cx].d/0.9)/D.RS[this.cy].d},
Z(){this.a2()
this.m7()
C.ci4("rocket_lander").bK(new C.euC(this),x.h)},
c6y(){var w=this
w.ay=A.k.E(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cK.af()*0.6
w.f=new B.t(0.15+A.cK.af()*0.7,0.08)
w.r=new B.t((A.cK.af()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mp(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.euD())
return}w=D.rM[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.E(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.t(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga38()
v=v.a7(0,new B.t(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaPs())}if(m.dy){t=m.r
v=v.aE(0,t.aI(0,t.gcC()*6*D.aB5[m.d]))}t=m.r=m.r.a7(0,v.aI(0,d))
s=m.f=m.f.a7(0,t.aI(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.t(-t.a*0.4,t.b)
t=new B.t(A.k.E(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.t(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.D_[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b2d("rocket_lander",B.H(["unlocked",t],x.N,x.z))
C.Je("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga38()/(D.rM[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ac(m.ga38()/(D.rM[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
F.dF(80,"",500,0,0.6,"noise")
B.fM()}}if(m.Q&&m.x>0&&A.o.F(A.k.bf(m.CW*20),2)===0)F.dF(90,"",70,0,0.12,"noise")
m.m(new C.euE())},
agy(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fmg,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dX(e[w].a,f.$1(w),new C.euk(this,g,w),v,h,v))
return new B.D(A.eH,B.x(B.a([u,A.cS,B.bX(A.bG,s,A.bq,v,6,6)],t),A.E,v,A.e,A.i,0,A.p),v)},
bFQ(d){var w,v,u,t,s=this,r=null,q=s.ga38()/(D.rM[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaPs()),o=D.aB5[s.d],n=B.n(24),m=d.c,l=B.K(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.au,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,G.aa3,r,r,r),A.W,s.agy("ENGINE: "+D.I2[s.cx].b,D.I2,new C.eu9(s),new C.eua(s),A.cL),s.agy("FUEL TANK: "+D.RS[s.cy].b,D.RS,new C.eub(s),new C.euc(s),A.bf),s.agy("LANDING GEAR: "+D.D_[s.db].b,D.D_,new C.eud(s),new C.eue(s),A.aJ),s.agy("EXTRAS (tap to add)",D.az5,new C.euf(s),new C.eug(s),A.br)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fSv)
o=(q?A.bf:A.c6).j(0.14)
w=B.n(12)
v=A.k.ac(s.gaYi(),2)
u=A.k.ac(s.ga38()/(D.rM[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.D_[s.db].d*100)+".",r,r,r,r,r,r,D.fmV,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.i4,A.bT,r,r,r))
m.push(A.W)
m.push(new B.bM(A.A,r,r,new E.fD(A.op,"Launch",new C.euh(s),A.bf,r),r))
return B.as(B.p(r,B.ch(B.x(m,A.E,r,A.e,A.O,0,A.p),A.t,r,A.y,r,A.bQ,r,r,A.ah),A.f,r,A.lX,new B.o(D.bow,r,l,n,r,r,A.n),r,r,r,A.bT,r,r,r,r),r,r,r)},
aZq(d,e,f,g){var w=null,v=f?A.cL:A.c.j(0.1),u=B.n(18),t=B.K(A.aX,A.r,1)
return B.mH(A.iE,B.p(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.eu6(e),new C.eu7(e),w,w,w,w,new C.eu8(e))},
aZp(d,e,f){return this.aZq(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cv(new C.euv(s,D.rM[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rM[w].a:"\ud83d\udd12"
o.push(new E.dX(v,s.d===w,new C.euw(s,w),r,D.rM[w].c,r))}v=B.a([s.aZp(G.aoR,new C.eux(s),s.y),A.bb,s.aZq(A.wm,new C.euy(s),s.Q,130),A.bb,s.aZp(A.OY,new C.euz(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aJ:A.c.j(0.1)
t=B.n(18)
A.d.v(v,B.a([A.bb,B.aA(r,B.p(r,D.bS7,A.f,r,r,new B.o(u,r,B.K(A.aX,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.euA(s),r,r,r,r,r,r,!1,A.a3)],p))}return E.lw(A.cL,A.f1,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fc(o,"WORLD",r),B.B(v,A.m,r,A.b9,A.i,0,r,r)],p),A.m,r,A.e,A.O,0,A.p))}}
C.bit.prototype={
a3(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rM[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.S(),d=B.I(),a0=j.c,a1=B.ar(K.Z4,a0,0.25)
a1.toString
d.sam(new B.a9(A.b0,A.b5,A.x,B.a([G.afW,a1],x.O),l,l).aA(0,new B.a3(0,0,g,f)))
a2.aP(new B.a3(0,0,g,f),d)
w=new B.e4()
w.cY(5)
for(g=a2.a,v=0;v<70;++v){f=w.af()
d=w.af()
a1=w.af()
u=new B.ao(A.Q,A.M,A.S,A.T,A.R)
u.r=A.c.j(0.2+w.af()*0.5).gp(0)
t=u.G()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=B.a([],f)
r=new B.aF(e.r,A.ag,l,l,d)
r.D(new B.aY(0,s+14))
q=new B.e4()
q.cY(2)
for(p=0;p<=i;p+=18){e=new B.aq(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.af()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bw(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.D(new B.aq(i,h))
r.D(new B.aq(0,h))
r.D(new B.bt())
e=$.S()
d=B.I()
d.r=B.ar(a0,A.w,0.6).gp(0)
a2.aH(r,d)
o=B.bK(new B.t(k.ax*i,s+10),8,k.ay*i)
d=B.bs(o,A.id)
a0=B.I()
a0.r=A.be.gp(0)
a2.az(d,a0)
a0=B.bs(o.cq(2),A.mW)
d=B.I()
d.b=A.a9
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.az(a0,d)
if(k.as==="ready")return
d=k.f
J.bl(g.save())
g.translate(d.a*i,d.b*h)
a2.ii(0,k.w)
i=k.as
if(i==="crashed"){k=B.I()
k.r=A.cL.j(0.6).gp(0)
k.z=U.IB
a2.ad(A.I,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new B.aF(i,A.ag,l,l,B.a([],f))
n.D(new B.aY(-8,18))
n.D(new B.aq(0,44+Math.sin(k.CW*40)*8))
n.D(new B.aq(8,18))
n.D(new B.bt())
k=B.I()
k.r=A.aT.gp(0)
a2.aH(n,k)
i=new B.aF(i,A.ag,l,l,B.a([],f))
i.D(new B.aY(-4,18))
i.D(new B.aq(0,32))
i.D(new B.aq(4,18))
i.D(new B.bt())
k=B.I()
k.r=A.c.gp(0)
a2.aH(i,k)}k=e.r
m=new B.aF(k,A.ag,l,l,B.a([],f))
m.D(new B.aY(0,-26))
m.D(new B.c4(14,-10,11,18))
m.D(new B.aq(-11,18))
m.D(new B.c4(-14,-10,0,-26))
m.D(new B.bt())
i=B.I()
i.sam(D.c42.aA(0,D.f14))
a2.aH(m,i)
i=B.I()
i.r=A.aJ.gp(0)
a2.ad(H.v5,5,i)
i=new B.aF(k,A.ag,l,l,B.a([],f))
i.D(new B.aY(-11,6))
i.D(new B.aq(-20,20))
i.D(new B.aq(-11,18))
i.D(new B.bt())
h=B.I()
h.r=A.ax.gp(0)
a2.aH(i,h)
f=new B.aF(k,A.ag,l,l,B.a([],f))
f.D(new B.aY(11,6))
f.D(new B.aq(20,20))
f.D(new B.aq(11,18))
f.D(new B.bt())
k=B.I()
k.r=A.ax.gp(0)
a2.aH(f,k)
g.restore()},
av(d){return!0}}
C.aNh.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.byZ.prototype={
q(){var w,v,u
for(w=this.h2$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h1$
w===$&&B.c()
w.q()
this.bxS()}}
C.aTg.prototype={}
C.a3z.prototype={}
C.bbp.prototype={}
C.UO.prototype={
R(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eE(["skin"],x.N),o=new Float32Array(0)
return new C.aDO(w,v,u,t,s,r,q,new B.cw(null,x.A),p,D.Ll,D.Ll,A.aw,A.cK,o,new Int32Array(0),$,A.bA,0,B.a([],x.X),null,null)}}
C.aDO.prototype={
Z(){var w=this
w.a2()
w.m7()
w.as=new C.c55(w.gcf3())
new C.dLx(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a4(0)
v.d=null}this.bwW()},
cf4(d){var w,v=this
if(v.c==null)return
w=J.a6(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f6(0,B.H(["t","init","data",$.hop],x.N,x.z))
v.at=!0
v.ax=""
v.azI()
break
case"pick":v.m(new C.dL9(v,d))
break
case"shot":v.aip(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
break}},
azI(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.awX[q.CW]
v=new C.dLa()
u=q.ay
u=B.C(u,B.a7(u).k("cs.E"))
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
aip(d){return this.cw1(d)},
cw1(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aip=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cF.aO(A.a.b5(d,A.a.cu(d,",")+1))
w=6
return B.b(B.aw2(B.a([B.cD9(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$aip)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.K(x.gV).f.U(K.aS8)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aip,v)},
az7(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
mp(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bf(w)!==A.k.bf(v.ok)){E.WH("kick",0,0.4)
v.Uk(170,new C.dLy())}v.ok=w
return},
ae8(d){var w,v,u,t,s=this
s.m(new C.dLb(s,d))
if(d==null){s.fx=D.Ll
s.dy=1
w=s.as
if(w!=null)w.f6(0,B.H(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.T(w).k("Z<1>")
u=B.C(new B.Z(w,new C.dLc(d),v),v.k("M.E"))
t=A.d.gI(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.M(0,t)
if(s.ch===2)s.ch=1}s.azI()
w=s.as
if(w!=null)w.f6(0,B.H(["t","focus","group",d],x.N,x.z))
s.go=0
s.cyv(t,d)
return},
cyv(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.WH("kick",0,0.8)
this.Uk(260,new C.dLd())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")F.dF(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.Uk(w*70,new C.dLe(this))
else if(A.a.t(e,"intestine")||e==="Stomach")F.dF(110,"",360,0.7,0.3,"saw")
else E.h4e("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":F.dF(210+e.length*4,"",80,0.6,0.55,"tri")
F.dF(2400,"",20,0,0.3,v)
break
case"muscle":F.dF(70,"",150,1,0.6,"sine")
break
case"vessel":F.dF(300,"",380,0.4,0.22,v)
E.WH("kick",0,0.3)
break
default:E.h4e("organic",2+A.o.F(e.length,6),200,0.4)}},
cD4(d){this.m(new C.dLg(this,d))},
aZI(){var w,v,u,t,s,r,q,p=this,o=B.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
if(p.az7(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.M(0,s.a)}q=B.C(o,o.$ti.k("cs.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.ap(w)]
p.p4=""},
bXw(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new C.dL6(u,w,d))
v=x.t
C.Je("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.Uk(1100,new C.dL7(u))
return}if(d==null){if(u.cx!=null)u.ae8(null)
return}u.ae8(d)},
c0e(d,e){var w,v=this,u=null,t=B.n(18),s=B.K(A.c_.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.fio,u,u,u)}else if(d==null||e==null)w=D.fx7
else{w=x.p
w=B.B(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hr,u,u,u),A.cS,B.d(e.b,u,u,u,u,u,u,I.Ek,u,u,u)],w),A.E,u,A.e,A.O,0,A.p),1),B.aH(u,u,u,u,D.bUE,u,u,u,new C.dL8(v),u,u,u,u,"Back to the whole body",A.cc)],w),A.E,u,A.e,A.i,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(K.Xx,u,s,t,u,u,A.n),u,u,u,u,R.akj,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dAg.h(0,g)
i.azI()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dhv
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,B.L)(v),++s){r=v[s]
if(i.az7(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=B.a([B.aH(h,h,h,h,K.os,h,h,h,new C.dLn(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bJ:B.Bz(h,A.pw,q)}else q=A.ku
q=B.x(B.a([B.E(q,1),new B.D(G.a_6,i.c0e(g,f),h)],v),A.m,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){o=D.d9_[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new E.dX(l,n,new C.dLo(i,o),o.c,A.c_,h))}p=B.a([new E.fc(p,h,h)],v)
if(!i.p1&&w.length!==0){n=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.L)(w),++s){k=w[s]
n.push(new E.dX(k,k===i.cx,new C.dLp(i,k),h,A.aT,h))}p.push(new E.fc(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(E.iL(A.c6,""+A.k.V(n)+" beats/min","Heart rate",180,40,new C.dLq(i),n))}if(i.ch>0&&t.a===0){n=B.a([],v)
for(j=0;j<5;++j)n.push(new E.FD(D.awX[j],i.CW===j,new C.dLr(i,j),!1,h))
p.push(new E.fc(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=B.a([new E.dX("Spin",n,new C.dLs(i),D.anD,A.aJ,h),new E.fD(A.ok,"Reset view",new C.dLt(i),A.c,h),new E.dX(l,m,new C.dLu(i),A.Hm,A.aT,h)],v)
if(t.t(0,"organ"))v.push(new E.dX("Heartbeat sound",i.k4,new C.dLv(i),A.oo,A.c6,h))
p.push(new E.fc(v,h,h))
return E.lw(A.c_,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.m,h,A.e,A.O,0,A.p))}}
C.aMm.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.aMn.prototype={
q(){var w,v,u
for(w=this.h2$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h1$
w===$&&B.c()
w.q()
this.bwV()}}
C.c55.prototype={
kR(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.huB
$.huB=v+1
u="ngmy-body-viewer-"+v
$.x8()
$.pJ().oY(u,new C.c56(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fA(v,"message",new C.c57(t),!1,x.gA)
t.b=u},
f6(d,e){var w,v
try{w=this.c
if(w!=null){w=B.QR(w.contentWindow)
if(w!=null)J.ais(w,e,"*")}}catch(v){}}}
C.yo.prototype={}
C.CD.prototype={}
C.nz.prototype={}
C.bc8.prototype={}
C.UT.prototype={
R(){var w=x.N,v=x.y,u=x.S
return new C.aDQ(B.U(w,x.a2),B.a([],x.cB),B.U(w,v),B.U(w,v),B.U(w,u),A.aw,A.I,A.I,B.aX(u),$,A.bA,0,B.a([],x.X),null,null)}}
C.aDQ.prototype={
Z(){var w=this
w.a2()
w.m7()
w.ad7()
$.aV.x1$.push(new C.dNc(w))},
ad7(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ad7=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$ad7)
case 6:q=e.tA("ngmy_circuit_passed_v1")
r=q==null?A.Y:q
if(s.c!=null)s.m(new C.dMR(s,r))
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
return B.i($async$ad7,v)},
adt(d){return this.c46(d)},
c46(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$adt=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.M(0,d)
u=3
w=6
return B.b(B.az(),$async$adt)
case 6:r=f
q=s.cx
p=B.a7(q).k("k3<cs.E,m>")
q=B.C(new B.k3(q,new C.dMU(),p),p.k("M.E"))
r.au("StringList","ngmy_circuit_passed_v1",q)
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
return B.i($async$adt,v)},
axQ(d,e,f,g){var w="c"+this.y++,v=new C.CD(w,e,f,g)
this.d.n(0,w,v)
return v},
mF(d,e,f){return this.axQ(0,e,f,0)},
act(d,e){var w
if(D.zG.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a7(0,new B.t(-36,w))},
tX(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aTv(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.f7$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.du(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ea(m,D.cT7[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tX(p,0)&&n.tX(p,1)
break
case"or":p=q.a
o=n.tX(p,0)||n.tX(p,1)
break
case"xor":p=q.a
o=n.tX(p,0)!==n.tX(p,1)
break
case"nand":p=q.a
o=!(n.tX(p,0)&&n.tX(p,1))
break
case"nor":p=q.a
o=!(n.tX(p,0)||n.tX(p,1))
break
case"not":o=!n.tX(q.a,0)
break
default:o=n.tX(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bQ5(){return this.aTv(null)},
mp(d){var w,v,u,t,s,r,q,p,o,n=this
n.bQ5()
if(!n.ax)return
for(w=n.d,w=new B.bd(w,B.a7(w).k("bd<2>")).gag(0),v=new B.f2(w,new C.dNd()),u=n.f,t=n.w,s=0;v.C();){r=w.gS(0).a
if(u.h(0,r)===!0){q=n.f7$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.f7$)
o=s+1
F.dF(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
axR(d){var w=this
w.d.aa(0)
A.d.aa(w.e)
w.f.aa(0)
w.r.aa(0)
w.cy=null},
m8(d,e){var w=this.x
return new B.t(d*w.a,e*w.b)},
au3(d){var w=this
if(w.x.A(0,A.aw)){$.aV.x1$.push(new C.dMP(w,d))
return}w.m(new C.dMQ(w,d))},
cyN(d){this.m(new C.dMV(this,d,$.bFK()[d]))},
c8R(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bFK()[a0]
v=d.d
u=B.a7(v).k("bd<2>")
t=u.k("Z<M.E>")
s=t.k("M.E")
r=B.C(new B.Z(new B.bd(v,u),new C.dMK(),t),s)
A.d.aZ(r,new C.dML())
q=B.C(new B.Z(new B.bd(v,u),new C.dMM(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dMN(d,w))
return}u=d.r
p=B.dR(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dt(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h7(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aTv(0)
h=m.h(0,A.d.gI(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lv(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aG(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.aa(0)
u.v(0,p)
d.m(new C.dMO(d,o,a0))},
ayF(d){var w,v,u,t,s=this.d,r=B.a7(s).k("bd<2>")
s=B.C(new B.bd(s,r),r.k("M.E"))
r=B.T(s).k("dw<1>")
s=new B.dw(s,r)
s=new B.bS(s,s.gL(0),r.k("bS<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cht(d){var w,v,u,t,s,r=this.d,q=B.a7(r).k("bd<2>")
r=B.C(new B.bd(r,q),q.k("M.E"))
q=B.T(r).k("dw<1>")
r=new B.dw(r,q)
r=new B.bS(r,r.gL(0),q.k("bS<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c07(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.zG.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.act(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.z(p,o)
s=l}}}return t},
bOR(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.act(p,o)
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
c8T(d){var w,v,u,t=this,s=t.ayF(d)
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
F.dF(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dMW())
return}u=t.bOR(d)
if(u!=null)t.m(new C.dMX(t,u))
else t.m(new C.dMY(t))},
awF(d){return this.c35(d)},
c35(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$awF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.ayF(d)
if(s==null){w=1
break}B.jP()
t.m(new C.dMT(t,s))
case 1:return B.h(u,v)}})
return B.i($async$awF,v)},
bBF(d){if(this.x.A(0,A.aw))return
this.m(new C.dMJ(this,d,A.cK))
B.f1()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bFK()[g]
g=x.p
v=B.a([B.aH(h,h,h,h,B.X(i.ax?A.oo:V.rH,A.ac,h,h,h,21),h,h,h,new C.dN6(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.n(16)
s=A.co.j(0.14)
r=B.K(A.co.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.fhx,h,h,h),B.d(w.b,h,h,h,h,h,h,H.aa2,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.l6,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bf:A.eP,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.B(B.a([B.E(B.x(q,A.E,h,A.e,A.i,0,A.p),1),B.bI(D.fIE,h,i.gc8Q(),B.bo(A.co,h,h,h,h,h,h,h,h,h,h,A.cc))],g),A.m,h,A.e,A.i,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,T.Np,D.bzf,h,h,1/0))}u.push(B.E(B.cv(new C.dN7(i)),1))
if(f!=null){t=B.n(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.d(D.zG.h(0,r).a+": "+D.zG.h(0,r).e,h,h,h,h,h,h,A.ti,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A.a_a,A.bT,h,h,1/0))}u=B.x(u,A.m,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.zG.gdV(D.zG),s=s.gag(s);s.C();){r=s.gS(s)
q=new B.aP(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.p(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bF,new B.y(p.a,h,D.aU4,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.O,0,A.p),A.f,h,h,new B.o(n,h,new B.bH(m,m,m,m),new B.bh(q,q,q,q),h,h,A.n),h,h,h,A.fu,Ag.Nm,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dN8(i,r),h,h,h,h,h,h,!1,A.a3))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dlZ[l]
s.push(new E.fD(A.OZ,k.b,new C.dN9(i,k),A.co,h))}s.push(new E.fD(K.wj,"Clear",new C.dNa(i),A.c6,h))
r=B.a([],g)
for(j=0;q=$.bFK(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.ed:A.lH
o=i.ay
n=i.cx.t(0,j)?A.bf:A.bu
r.push(new E.dX(q.a,o===j,new C.dNb(i,j),p,n,h))}return E.lw(A.co,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fc(t,"PARTS",h),new E.fc(s,"TRY",h),new E.fc(r,"TASKS",h)],g),A.m,h,A.e,A.O,0,A.p))}}
C.bcr.prototype={
a3(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.S()
w=B.I()
w.r=D.aem.gp(0)
a7.aP(new B.a3(0,0,0+a5,0+a6),w)
v=B.I()
v.r=A.c.j(0.05).gp(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.G()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,B.L)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.act(j,m.c)
f=q.h(0,l)===!0
l=$.S()
e=B.a([],p)
d=new B.aF(l.r,A.ag,a4,a4,e)
e.push(new B.aY(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new B.l0(h+a0,i,l-a0,a1,l,a1))
if(f){l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=9
l.r=A.bu.j(0.28).gp(0)
l.z=N.oz
s=l.G()
l=d.gbv().a.snapshot()
w.drawPath((d.e=new B.cf(l)).a,s)
s.delete()}l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=3.2
l.d=A.bB
l.r=(f?A.dB:A.bs).gp(0)
s=l.G()
l=d.e
w.drawPath((l==null?d.e=new B.cf(d.gbv().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.a7(0,D.Jd)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new B.aF($.S().r,A.ag,a4,a4,B.a([],p))
w=a3.b
p.D(new B.aY(a6,w))
r=g.b
p.D(new B.l0(a6+a0,w,a5-a0,r,a5,r))
r=B.I()
r.b=A.a9
r.c=3
r.r=A.ac.gp(0)
a7.aH(p,r)}for(a5=new B.du(o,o.r,o.e);a5.C();)this.c8S(a7,a5.d)},
c8S(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.zG.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bK(a0.c,64,64)
s=B.bs(t,A.ln)
r=w.cy===v
q=s.eO(A.cy)
$.S()
p=B.I()
p.r=A.w.j(0.55).gp(0)
p.z=A.mT
d.az(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.I()
p.sam(new B.c2(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).aA(0,B.bY(a0.c,52)))
d.ad(q,52,p)}q=s.eO(A.cH)
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
q.sam(new B.a9(A.b0,A.b5,A.x,B.a([p,m],x.O),g,g).aA(0,t))
d.az(s,q)
q=B.I()
q.b=A.a9
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.az(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?G.uE:D.bOn}else l=e.b
k=C.h65(B.lv(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a3(d,v.aE(0,new B.t(p/2,q.gbb(q)/2)))
j=C.h65(e.a,10.5,A.c,g,g,A.H)
j.a3(d,a0.c.a7(0,new B.t(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.h65(f,9,u?A.dB:A.bU,g,g,A.u)
i.a3(d,a0.c.a7(0,new B.t(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b_m(d,w.act(a0,h),o)
this.b_m(d,a0.c.a7(0,D.Jd),o)},
b_m(d,e,f){var w
$.S()
w=B.I()
w.r=D.aem.gp(0)
d.ad(e,8.5,w)
w=B.I()
w.b=A.a9
w.c=2.2
w.r=f.gp(0)
d.ad(e,8.5,w)
w=B.I()
w.r=A.c.gp(0)
d.ad(e,3.2,w)},
av(d){return!0}}
C.aMr.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.byJ.prototype={
q(){var w,v,u
for(w=this.h2$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h1$
w===$&&B.c()
w.q()
this.bx_()}}
C.NJ.prototype={
R(){return new C.aE6(B.mS(0,null,null))}}
C.KK.prototype={
a6(){return"_UnfoldStyle."+this.b}}
C.AM.prototype={}
C.aE6.prototype={
c8Y(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.m(new C.dT8(w,e))},
c1W(){var w=this
w.e.q()
w.e=B.mS(w.f,null,null)
w.m(new C.dT7(w))},
q(){this.e.q()
this.a1()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.oC(t,B.c5(v,A.c1,t?new C.bsG(w.e,w.gc8X(w),new C.dT9(d),v):new C.aIl(u,new B.bR(u.b,x.gj)),v,!1,!1,v,!1),new C.dTa(w,u),x.K)}}
C.bug.prototype={}
C.bsG.prototype={
b_n(d,e){var w=null
return new B.D(R.a_B,B.x(B.a([B.d(d,w,w,w,w,w,w,D.fi7,w,w,w),A.bF,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=B.B(B.a([B.aH(v,v,v,v,A1.nx,v,v,v,w.e,v,v,v,v,v,v),A.ta,D.bFi],u),A.m,v,A.e,A.i,0,v,v),s=w.b_n("STUDIOS","Play, make things, and keep what you make")
$.bFL()
return B.bm(!0,B.x(B.a([new B.D(D.bEk,t,v),B.E(B.vR(0,v,A.t,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,B.a([new B.mp(s,v),new B.o3(A.hO,B.Pl(new B.oF(new C.f4_(d),9,!0,!0,!0,0,B.tb(),v),D.aRY),v),new B.mp(w.b_n("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.o3(D.bzn,B.Pl(new B.oF(new C.f40(w),6,!0,!0,!0,0,B.tb(),v),D.aRY),v)],u)),1)],u),A.m,v,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0)}}
C.afj.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.n(20),n=B.n(20),m=B.ar(I.nj,p,0.3)
m.toString
w=x.O
m=B.a([m,D.aho],w)
v=B.K(p.j(0.6),A.r,1.2)
u=x.V
t=B.a([new B.ac(-4,A.G,p.j(0.22),A.I,14)],u)
s=B.ar(p,A.w,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ac(0,A.G,p.j(0.5),A.I,12)],u)
return B.aI(!1,A.a2,!0,r,B.aO(!1,o,!0,B.eK(B.x(B.a([B.p(r,B.X(q.c,A.c,r,r,r,24),A.f,r,r,new B.o(r,r,r,r,u,new B.a9(A.ay,A.aE,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.P,B.d(q.a,r,2,A.a1,r,r,r,B.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.K,r,r),A.cS,B.d(q.b,r,2,A.a1,r,r,r,B.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.K,r,r)],x.p),A.m,r,A.b9,A.i,0,A.p),r,new B.o(r,r,v,n,t,new B.a9(A.ay,A.aE,A.x,m,r,r),A.n),r,A.GA,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai)}}
C.aea.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.n(20),g=B.n(20),f=B.ar(I.nj,A.d.gI(i),0.24)
f.toString
w=x.O
f=B.a([f,D.aho],w)
v=B.K(A.d.gI(i).j(0.35),A.r,1)
u=x.V
t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cy,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.aP(6,6)
m=B.a([A.d.gI(i),A.d.gak(i)],w)
l=B.a([new B.ac(0,A.G,A.w.j(0.45),R.aKr,0)],u)
r.push(B.p(k,B.X(q[p],A.c,k,k,k,11),A.f,k,k,new B.o(k,k,k,new B.bh(n,n,n,n),l,new B.a9(A.a5,A.a8,A.x,m,k,k),A.n),k,17,k,new B.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.x(r,A.m,k,A.e,A.O,0,A.p)
u=B.ar(A.d.gI(i),A.d.gak(i),0.4)
u.toString
return B.aI(!1,A.a2,!0,k,B.aO(!1,h,!0,B.eK(B.x(B.a([new B.a5(58,k,w,k),A.W,B.d(j.b,k,2,A.a1,k,k,k,B.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.K,k,k),A.au,B.X(A.Cz,A.d.gI(i),k,k,k,18)],s),A.m,k,A.b9,A.i,0,A.p),k,new B.o(k,k,v,g,t,new B.a9(A.ay,A.aE,A.x,f,k,k),A.n),k,A.GA,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.ai)}}
C.Qx.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gak(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ap(-8,B.c3(j,new B.o(h,j,j,B.n(22),j,j,A.n),A.bh),j,j,2,2,8,j)
u=B.n(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.Ja,26),new B.ac(-6,A.G,A.d.gI(i).j(0.1+0.4*t),A.I,30)],s)
q=B.n(22)
p=B.ar(A.d.gI(i),A.c,0.14)
p.toString
o=A.d.gI(i)
n=A.d.gak(i)
i=B.ar(A.d.gak(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bT(0,B.c3(j,new B.o(j,j,j,j,j,new B.a9(A.ay,A.aE,A.x,B.a([p,o,n,i],m),D.drE,j),A.n),A.bh),0,0,0),B.ap(j,B.c3(j,new B.o(j,j,j,j,j,new B.a9(A.b0,A.b5,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bh),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bT(0,B.b4(j,j,j,new C.btF(i,j),A.aw),0,0,0))
i=A.c.j(0.16)
p=B.K(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.I,14)],s)
s=B.p(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fjR,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.au,B.d(i,j,1,A.a1,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a7,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Uq)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.n(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.fZ,B.B(B.a([s,A.er,B.E(B.x(p,A.E,j,A.e,A.O,0,A.p),1)],l),A.m,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bT(0,B.dZ(B.ec(j,A.w.j(A.k.E(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=B.n(22)
m.push(B.bT(0,B.dZ(B.c3(j,new B.o(j,j,B.K(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bh),!0,j),0,0,0))
return new B.a5(w,v,new B.an(A.a_,j,A.ab,A.f,B.a([h,B.bT(0,B.c3(B.bx(q,new B.an(A.a_,j,A.ab,A.t,m,j),A.ap),new B.o(j,j,j,u,r,j,A.n),A.bh),0,0,0)],l),j),j)}}
C.btF.prototype={
a3(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a3(r,-10,s,w)
u=d.a
J.bl(u.save())
u.translate(v.gbL().a,v.gbL().b)
d.ii(0,0.35)
t=B.bK(A.I,(w- -10)*1.6,s-r)
$.S()
s=B.I()
s.sam(new B.a9(A.a5,A.a8,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aA(0,t))
d.aP(t,s)
u.restore()},
av(d){return d.b!==this.b}}
C.bta.prototype={
B(d){var w=null,v=B.n(22),u=B.a([D.bmr,D.agw],x.O),t=this.e,s=B.K(A.d.gI(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.ks,24)],x.V),q=B.n(22),p=A.d.gI(t)
return new B.a5(this.c,this.d,B.c3(B.bx(q,B.b4(B.as(B.X(A.jB,A.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bb7(p,w),A.aw),A.ap),new B.o(w,w,s,v,r,new B.a9(A.ay,A.aE,A.x,u,w,w),A.n),A.bh),w)}}
C.bb7.prototype={
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
q.delete()}u=e.eh(A.I)
$.S()
t=B.I()
t.b=A.a9
t.c=1.4
t.r=v.j(0.35).gp(0)
d.ad(u,30,t)},
av(d){return!1}}
C.aIl.prototype={
R(){return new C.aIm(new B.cw(null,x.A),null,null)}}
C.aIm.prototype={
guk(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,D.bwG,null,1,null,v)
w.cM(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
ga_7(){var w,v=this,u=v.e
if(u===$){w=B.bn(null,A.fY,null,1,null,v)
w.fn(0,!0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
gaxS(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc8V(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaWJ(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaXv(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb85(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a2()
var w=this.guk()
w.dh()
w.dS$.M(0,this.gcyw())},
cyx(){var w,v,u,t,s,r,q,p=this,o=p.guk().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gaxS().a){case 0:w=D.nA
break
case 1:w=D.uN
break
case 2:w=D.a4b
break
case 3:w=D.nA
break
case 4:w=D.dei
break
case 5:w=D.uN
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.ac1)r=0.09
else r=s===D.ac2?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){F.dF(260+90*v,"",260,1.6,0.18,"tri")
u=D.c6B[v]
E.ml("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.Je("bell",D.cfp,1400,0.35)}}p.ax=o},
q(){this.guk().q()
this.ga_7().q()
this.byO()},
aey(){var w=this
w.guk().cYd(0,B.dx(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new C.f3G(w))},
cjw(){this.guk().bR(0)
this.m(new C.f3F(this))},
aex(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$aex=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaXv(),s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
l.push(new B.au(new B.ba(q,A.b4,A.aO),$.ax()))}m=B.a([],m)
for(t=u.gb85(),s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){p=t[r]
m.push(new B.au(new B.ba(p,A.b4,A.aO),$.ax()))}o=B.C(u.gaWJ(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bV(I.nj,null,new C.f3E(u,l,m,o),t,!0,!0,!0,A.lP,!1,!1,x.H),$async$aex)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.T$=$.ax()
n.P$=0}return B.h(null,v)}})
return B.i($async$aex,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gaxS(),f=i.a.c,e=f.b,d=i.gc8V(),a0=new C.AM(g,e,f.c,d,i.gaWJ(),i.gaXv(),i.gb85())
f=B.ar(A.d.gI(d),A.d.gak(d),0.4)
f.toString
g=x.p
w=B.a([B.aH(h,h,h,h,B.X(i.at?A.oo:V.rH,A.ac,h,h,h,21),h,h,h,new C.f3O(i),h,h,h,h,"Sound",h),B.aH(h,h,h,h,D.bYd,h,h,h,i.gc8W(),h,h,h,h,"Edit words and pictures",h),B.aH(h,h,h,h,K.os,h,h,h,new C.f3P(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.cb(i.ga_7(),new C.f3Q(i,a0),h),B.cv(new C.f3R(i,a0))],g)
u=i.as
t=u?i.gcjv():i.gc8Z()
u=u?D.bNG:A.rG
s=B.ar(A.d.gI(d),A.d.gak(d),0.4)
s.toString
t=B.B(B.a([B.aH(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cc),B.E(B.cb(i.guk(),new C.f3S(i,a1,a0),h),1),B.aH(h,h,h,h,D.bUu,h,h,h,new C.f3T(i),h,h,h,h,"Replay",A.cc)],g),A.m,h,A.e,A.i,0,h,h)
s=i.Q
u=A.k.ac(s,1)
r=B.ar(A.d.gI(d),A.d.gak(d),0.4)
r.toString
s=E.iL(r,u+"x","Speed",2.5,0.4,new C.f3U(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.doK[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gI(d),A.d.gak(d),0.4)
r.toString
u.push(new E.dX(p.b,o===p.a,new C.f3V(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.c6Z[q]
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}m=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}l=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}k=A.d.gI(o).A(0,A.d.gI(n))?A.c:A.aX
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}j=new B.ay(k,A.d.gI(o).A(0,A.d.gI(n))?2.5:1,A.r,-1)
d.push(B.aA(h,B.p(h,h,A.f,h,h,new B.o(h,h,new B.bH(j,j,j,j),h,h,new B.a9(A.ay,A.aE,A.x,n,h,h),A.a6),h,l,h,K.ajP,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f3W(i,n),h,h,h,h,h,h,!1,A.a3))}return E.lw(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.er(new B.an(A.a_,h,A.b3,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fc(u,"STYLE",h),new E.fc(d,"THEME",h)],g),A.m,h,A.e,A.O,0,A.p))},
bAR(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nA[r]
p=A.k.E((1-A.et.aw(0,A.k.E((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.E(p/1.5707963267948966,0,1)
q=D.nA[r]
n=q+0.12
m=A.k.E((a0-n)/(q+0.2-n),0,1)
n=D.nA[r]
q=n-0.01
q=A.k.E((a0-q)/(n+0.03-q),0,1)
n=B.dr()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.kh(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nA[r]
h=i+0.1
if(A.k.E((a0-h)/(i+0.3-h),0,1)>0){i=D.nA[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nA[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cN(0,r*118,0,f,f,f,new B.kB(q,new B.iO(n,f,A.b0,!0,f,new C.Qx(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nA[r]
u=v-0.02
g=A.k.E((a0-u)/(v+0.1-u),0,1)
u=A.d.gI(w)
v=D.nA[r]
t=v+0.12
e.push(new B.cN(0,r*118-3-2,0,f,f,4,new B.mA(new C.bsi(u,g,1-A.k.E((a0-t)/(v+0.22-t),0,1),f),f,A.aw,f,f),f))}return new B.a5(a2,358,new B.an(A.a_,f,A.ab,A.f,e,f),f)},
bRD(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.uN[r]
p=A.qa.aw(0,A.k.E((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.uN[r]
m=q+0.15
l=A.k.E((a0-m)/(q+0.25-m),0,1)
m=D.uN[r]
q=m-0.03
q=A.k.E((a0-q)/(m+0.01-q),0,1)
m=B.dr()
k=m.a
k.$flags&2&&B.aj(k)
k[11]=0.0011
m.jX(n,n,n,1)
m.fI(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.Qx(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dr()
k.fI(3.141592653589793)
k=new B.iO(k,f,A.A,!0,f,new C.bta(a2,108,w,f),f)}e.push(new B.cN(0,r*130,0,f,f,f,new B.kB(q,new B.iO(m,f,A.A,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.an(A.a_,f,A.ab,A.f,e,f),f)},
cDx(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a4b[w]
l.push(A.ct.aw(0,A.k.E((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bT(0,B.b4(n,n,n,new C.bvK(d.d,l,D.ayG,m,C.bsF(e,0.4,0.62),f,C.bsF(e,0.45,0.7),n),A.aw),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.h6C(g,w)
q=D.ayG[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cN(r,s-q*m*p+12,n,n,t,n,new B.kB(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.h6C(g,w)
r=D.a4b[w]
q=r+0.15
v.push(new B.cN(s,l,n,n,t,n,new B.kB(A.k.E((e-q)/(r+0.25-q),0,1),new B.y(u[w],n,A.Ve,n,A.K,n,n,n,n,n,n,n),n),n))}return new B.a5(g,m+90,new B.an(A.a_,n,A.ab,A.f,v,n),n)},
bH5(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.ct.aw(0,C.bsF(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bT(0,B.as(B.dP(B.b4(f,f,f,new C.brI(A.d.gI(a1),C.bsF(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.egq),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.E((a3-l)/(0.12+m-l),0,1)
j=A.dw.aw(0,A.k.E((o-0.7)/0.3,0,1))
l=B.dr()
m=l.a
m.$flags&2&&B.aj(m)
m[11]=0.001
l.fI(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jX(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.F(r,1):-1
w.push(new B.z(o,new B.cN(0,0,0,0,f,f,new B.ce(A.A,f,f,new B.kB(k*(0.45+0.55*o),B.dP(new B.iO(l,f,A.A,!0,f,new C.Qx(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.t(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new C.f3x())
A.d.v(a0,new B.N(w,new C.f3y(),x.fR))
return new B.a5(a5,330,new B.an(A.a_,f,A.ab,A.f,a0,f),f)},
c8U(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.uN[q]
o=A.k.E((a2-p)/(p+0.22-p),0,1)
n=A.lu.aw(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.uN[q]
m=A.k.E((a2-m)/(m+0.02-m),0,1)
l=D.aAM[q]
k=B.dr()
k.mT(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jX(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.uN[q]
g=h+0.1
g=A.k.E((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cN(0,0,0,0,e,e,new B.ce(A.A,e,e,new B.kB(m,B.dP(new B.iO(k,e,A.A,!0,e,new C.Qx(d,92,w,p,j,i,0,g*s,h,e),e),new B.t(0,l)),e),e),e))
l=D.uN[q]
h=l+0.02
f=A.k.E((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cN(0,0,0,0,e,e,new B.ce(A.A,e,e,B.dP(new B.mA(new C.bbN(w,f,q,e),e,new B.av(r,212),e,e),new B.t(0,D.aAM[q])),e),e))}return new B.a5(a4,330,new B.an(A.a_,e,A.ab,A.f,a0,e),e)},
bDM(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.t(-b0,-150),new B.t(b0,-40),D.egu],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nA[r]
p=A.k.E((a8-q)/(q+0.2-q),0,1)
o=A.ct.aw(0,p)
q=D.aAV[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nA[r]
f=g+0.2
e=A.k.E((a8-f)/(g+0.3-f),0,1)
f=D.nA[r]
g=f-0.01
g=A.k.E((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.mT(l*h+D.dit[r]*o)
f.fI(l*0.9)
h=0.55+0.45*o
f.jX(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cN(0,0,0,0,a3,a3,new B.ce(A.A,a3,a3,new B.kB(g,B.dP(new B.iO(f,a3,A.A,!0,a3,new C.Qx(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.t(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nA[r]
i=q+0.17
a2=A.k.E((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aAV[r]
a6.push(new B.cN(0,0,0,0,a3,a3,new B.ce(A.A,a3,a3,B.dP(new B.mA(new C.brK(A.d.gI(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.t(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.an(A.a_,a3,A.ab,A.f,a6,a3),a3)}}
C.bsi.prototype={
a3(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a3(w-v,0,w+v,e.b)
q=B.bs(u,A.hp)
$.S()
t=B.I()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=N.oz
d.az(q,t)
t=B.bs(u,A.hp)
q=B.I()
q.r=A.c.j(s).gp(0)
d.az(t,q)},
av(d){return d.c!==this.c||d.d!==this.d}}
C.brI.prototype={
a3(d,e){var w,v,u=this.c,t=B.bK(e.eh(A.I),e.b*u,e.a*u)
$.S()
u=B.I()
u.b=A.a9
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=U.IB
d.dP(t,u)
u=B.I()
u.b=A.a9
u.c=2.5
u.r=w.j(0.7).gp(0)
d.dP(t,u)
u=t.cq(-14)
v=B.I()
v.b=A.a9
v.c=1
v.r=w.j(0.3).gp(0)
d.dP(u,v)},
av(d){return!0}}
C.bbN.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.eh(A.I),f=this.c,e=A.ct.aw(0,f)
$.S()
w=B.I()
w.b=A.a9
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gI(u).j(0.6*v).gp(0)
d.ad(g,40+e*a0.a*0.42,w)
t=new B.e4()
t.cY(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.af()*3.141592653589793*2
n=(40+t.af()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.af()
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
i=(p&1)===0?A.d.gI(u):A.c
j.r=i.j(A.k.E(v,0,1)).gp(0)
h=j.G()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
av(d){return!0}}
C.brK.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.eh(A.I)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.E(s-r*0.18,0,1)
if(q<=0)continue
p=B.bK(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.S()
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.b=A.a9
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.G()
t.drawOval(B.bG(p),n)
n.delete()}},
av(d){return d.c!==this.c}}
C.bvK.prototype={
a3(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new B.a3(0,d0,0+c5,d0+60)
$.S()
d0=B.I()
w=c1.b
v=x.O
d0.sam(new B.a9(A.b0,A.b5,A.x,B.a([A.d.gI(w).j(0.18),A.L],v),c2,c2).aA(0,d1))
d2.aP(d1,d0)
d0=B.I()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bo(new B.t(0,c4),new B.t(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=C.h6C(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.S()
a3=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.mT
a4=a3.G()
t.drawOval(B.bG(new B.a3(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new B.a3(d,a1,a3,a1+a0)
a6=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a7=B.ar(A.d.gI(w),A.c,0.1)
a7.toString
a6.sam(new B.a9(A.b0,A.b5,A.x,B.a([a7,A.d.gak(w)],v),c2,c2).aA(0,a5))
a4=a6.G()
t.drawRect(B.bG(a5),a4)
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
a6=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a6.r=B.ar(A.d.gak(w),A.w,0.5).gp(0)
a4=a6.G()
a6=a8.gbv().a.snapshot()
t.drawPath((a8.e=new B.cf(a6)).a,a4)
a4.delete()
a6=B.a([],n)
b0=new B.aF(a2,A.ag,c2,c2,a6)
a6.push(new B.aY(d,a1))
a6.push(new B.aq(d+c8,a9))
a6.push(new B.aq(a7,a9))
a6.push(new B.aq(a3,a1))
a6.push(new B.bt())
a2=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a2.r=B.ar(A.d.gI(w),A.c,0.45).gp(0)
a4=a2.G()
a2=b0.gbv().a.snapshot()
t.drawPath((b0.e=new B.cf(a2)).a,a4)
a4.delete()
b1=new B.ao(A.Q,A.M,A.S,A.T,A.R)
b1.b=A.a9
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.G()
t.drawRect(B.bG(a5),a4)
a4.delete()
a4=b1.G()
a2=a8.e
t.drawPath((a2==null?a8.e=new B.cf(a8.gbv().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.G()
a2=b0.e
t.drawPath((a2==null?b0.e=new B.cf(b0.gbv().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bf(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=B.bs(new B.a3(b7,a7,b7+r,b5),A.hp)
$.S()
b9=new B.ao(A.Q,A.M,A.S,A.T,A.R)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.G()
t.drawRRect(B.e5(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new B.a3(d,a1,a3,a1+28)
J.bl(t.save())
t.clipRect(B.bG(a5),$.my()[1],!0)
$.S()
a1=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a1.sam(new B.a9(A.b0,A.b5,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c2,c2).aA(0,c0))
a4=a1.G()
t.drawRect(B.bG(c0),a4)
a4.delete()
t.restore()}}},
av(d){return!0}}
C.aO6.prototype={
aV(){this.b1()
this.b0()
this.dJ()},
q(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdD())
w.b7$=null
w.a1()}}
C.a0N.prototype={
a6(){return"_Role."+this.b}}
C.qi.prototype={}
C.r2.prototype={}
C.CH.prototype={}
C.ZK.prototype={}
C.af7.prototype={}
C.a1_.prototype={
gY(d){return this.d}}
C.CR.prototype={}
C.ac3.prototype={}
C.acj.prototype={}
C.aed.prototype={}
C.biq.prototype={
a3h(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
F.dF(d,"",e,g,h,f)},
b9a(d,e,f){return this.a3h(d,e,f,0,0.55)},
aCt(d,e,f,g){return this.a3h(d,e,f,0,g)},
b9b(d,e,f,g){return this.a3h(d,e,f,g,0.55)},
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
akB(d,e,f,g){var w="n"+this.ay++,v=new C.r2(w,e,f,g)
this.a.n(0,w,v)
this.aW()
return v},
rX(d,e,f){return this.akB(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bs(w.b,new C.dnq(e))
A.d.bs(w.c,new C.dnr(e))
w.aW()},
bd0(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mS.h(0,v.b).c===D.xo)return!1
w=this.b
if(A.d.b3(w,new C.dnn(d,e)))return!1
w.push(new C.CH(d,e))
this.aW()
return!0},
c0T(d){var w
if(d.b==="beat")return D.cfz[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.ap(500)
case 2:return 1400+w.ap(2200)
default:return 450+w.ap(2000)}},
aG4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aBa[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.CR(u,t,j.ax,90))
w.push(new C.CR(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.af()*3.141592653589793*2
v.push(new C.a1_(u,new B.t(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b9a(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.af()*3.141592653589793*2
p=100+w.af()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.af()*0.5)
m.toString
v.push(new C.a1_(u,new B.t(o*p,n*p),m,3+w.af()*4.5,1000+w.ap(700),j.ax))}j.f.push(new C.CR(u,t,j.ax,120))
j.aCt(120,200,"noise",0.5)
j.b9a(261.63*Math.pow(2,([7,12,16,19][w.ap(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.CR(u,t,j.ax,230))
w.push(new C.CR(u,t,j.ax+160,160))
w.push(new C.CR(u,t,j.ax+320,100))
j.b9b(180+j.at.ap(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.ac3(u,new B.t((w.af()-0.5)*220,-260-w.af()*180),t,j.ax))
j.b9b(300+w.ap(300),110,h,0.8)
break
case"comet":w=j.at
q=w.af()*3.141592653589793*2
j.w.push(new C.acj(u,u.a7(0,new B.t(Math.cos(q),Math.sin(q)).aI(0,260+w.af()*200)),t,j.ax))
j.a3h(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fM()
j.a3h(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.aed(u,D.aAz[v],t,j.ax))
j.aCt(261.63*Math.pow(2,([0,5,9,12][j.at.ap(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aCt(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cbF[A.o.F(w,3)]
for(k=1;k<=3;++k)j.ctB(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gag(j.b),v=new B.f2(w,new C.dno(d));v.C();)j.aAZ(w.gS(0),j.ax+D.cnY[A.o.F(g.d,4)])
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
case"chance":s=j.at.ap(100)<D.cF7[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gag(j.b),v=new B.f2(w,new C.dnp(d));v.C();)j.aAZ(w.gS(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xb(w,0,v-700)},
ctB(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.ZK(e,"~"+d))},
aAZ(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.af7(d.a,v,e,w))
u.push(new C.ZK(w,v))},
a7_(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a7(w).k("bd<2>")
w=B.C(new B.bd(w,v),v.k("M.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aG4(r)
u.n(0,r,o.ax+o.c0T(s))}}w=o.c
v=B.T(w).k("Z<1>")
q=B.C(new B.Z(w,new C.dns(o),v),v.k("M.E"))
if(q.length!==0){A.d.bs(w,new C.dnt(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.L)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b5(u,1)
for(u=A.d.gag(v),r=new B.f2(u,new C.dnu(p));r.C();)o.aAZ(u.gS(0),o.ax)}else o.aG4(u)}}A.d.bs(o.d,new C.dnv(o))
A.d.bs(o.e,new C.dnw(o))
A.d.bs(o.f,new C.dnx(o))
A.d.bs(o.w,new C.dny(o))
A.d.bs(o.x,new C.dnz(o))
A.d.bs(o.r,new C.dnA(o))
o.aW()},
vo(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.X.aq(B.H(["nodes",m,"edges",v],u,x.ew),null)},
TY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.X.aM(0,d,null))
k.aa(0)
for(o=x.j,n=J.aW(o.a(J.r(w,"nodes"))),m=k.a;n.C();){v=n.gS(n)
u=B.w(J.r(v,"k"))
if(!D.mS.aj(0,u))continue
t=B.w(J.r(v,"id"))
m.n(0,t,new C.r2(t,u,new B.t(B.e7(J.r(v,"x"))*k.cy.a,B.e7(J.r(v,"y"))*k.cy.b),A.k.N(B.e7(J.r(v,"p")))))
s=B.cc(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aW(o.a(J.r(w,"edges"))),n=k.b;o.C();){r=o.gS(o)
q=B.w(J.r(r,0))
p=B.w(J.r(r,1))
if(m.aj(0,q)&&m.aj(0,p))n.push(new C.CH(q,p))}k.aW()
return!0}catch(l){return!1}},
cSO(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.aa(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.r2(n,r,new B.t(q*p.a,o*p.b),s))
l.aW()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bd0(w[m.a],w[m.b])}},
gY(d){return this.cy}}
C.Gd.prototype={}
C.Wg.prototype={
R(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aFj(new C.biq(B.U(w,x.f3),v,u,t,s,r,q,p,o,B.U(w,n),B.U(w,n),B.U(w,n),B.U(w,n),A.cK,A.L,A.aw,$.ax()),A.bA,A.I,A.I,A.Y,null,null)}}
C.aFj.prototype={
ad0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$ad0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.az(),$async$ad0)
case 6:q=n.jX(m.r(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.etD(s))
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
return B.i($async$ad0,v)},
a9Y(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$a9Y=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.ets(s))
u=3
w=6
return B.b(B.az(),$async$a9Y)
case 6:e.au("Bool","ngmy_core_lab_coach_v1",!0)
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
return B.i($async$a9Y,v)},
bN1(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a7(n).k("bd<2>")
v=""+n.a+"|"+o.length+"|"+new B.bd(n,w).cI(0,0,new C.etu())+"|"+A.d.cI(o,0,new C.etv())
if(v===p.ch)return p.CW
u=new C.ety()
t=x.s
s=B.a([],t)
r=new C.etz(p,s,u)
for(n=new B.bd(n,w).gag(0),w=new B.f2(n,new C.etw());w.C();){q=n.gS(0)
if(!A.d.b3(o,new C.etx(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.d_(s,0,B.dB(5,"count",x.S),x.N).dm(0)},
Z(){var w,v=this
v.a2()
v.ad0()
v.d.db=v.ay
w=v.pS(new C.eu2(v))
w.h6(0)
v.e!==$&&B.aQ()
v.e=w},
q(){var w=this,v=w.as
if(v!=null)v.a4(0)
v=w.e
v===$&&B.c()
v.q()
v=w.d
v.T$=$.ax()
v.P$=0
w.bxQ()},
acx(d){return this.c0k(d)},
c0k(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$acx=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.az(),$async$acx)
case 6:q=m.aT(l.r(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.TY(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aXV(A.d.gI(D.aA_))
if(s.c!=null)s.m(new C.etC())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$acx,v)},
aXV(d){this.d.cSO(0,d.c,d.d)
this.Ep()},
Ep(){var w=this.as
if(w!=null)w.a4(0)
this.as=B.cG(A.lD,new C.eto(this))},
axT(d){var w,v,u,t,s=this.d.a,r=B.a7(s).k("bd<2>")
s=B.C(new B.bd(s,r),r.k("M.E"))
r=B.T(s).k("dw<1>")
s=new B.dw(s,r)
s=new B.bS(s,s.gL(0),r.k("bS<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
chu(d){var w,v,u,t,s,r=this.d.a,q=B.a7(r).k("bd<2>")
r=B.C(new B.bd(r,q),q.k("M.E"))
q=B.T(r).k("dw<1>")
r=new B.dw(r,q)
r=new B.bS(r,r.gL(0),q.k("bS<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c08(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mS.h(0,r.b).c===D.xo)continue
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
c91(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.huC(new B.t(n.a+36,n.b+0),new B.t(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cBl(d){var w,v,u,t,s,r,q=this,p=q.axT(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f1()
u=v.b
if(u==="button"){w.aG4(p)
return}if(q.r)return
t=D.mS.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.r2)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.aW()
q.Ep()
return}if(q.r)return
r=q.c91(d)
if(r!=null){w=q.d
A.d.cz(w.b,r)
w.aW()
q.Ep()}},
ciN(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.chu(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.axT(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aE(0,d)}},
ciO(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aW()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.t(A.k.E(d.a+s.y.a,46,t.a-46),A.k.E(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aW()}}},
b29(){var w,v,u=this
if(u.z!=null){w=u.c08(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bd0(v,w)}else v=!1
if(v){B.jO()
u.Ep()}u.z=null
u.d.aW()}else if(u.x!=null){if(u.at)u.Ep()
u.x=null}},
ade(d){return this.c36(d)},
c36(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ade=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.axT(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jP()
p=t.c
p.toString
w=3
return B.b(B.bV(I.nj,null,new C.etF(q),p,!0,!0,!1,A.lP,!1,!1,x.y),$async$ade)
case 3:if(f===!0){r.W(0,s)
t.Ep()}case 1:return B.h(u,v)}})
return B.i($async$ade,v)},
c9_(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.rX(0,d,new B.t(v.a*(0.25+u.af()*0.5),v.b*(0.2+u.af()*0.55)))
B.f1()
this.Ep()},
ah5(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ah5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bV(I.nj,null,new C.etH(),s,!0,!0,!0,A.lP,!1,!1,x.es),$async$ah5)
case 2:t=e
if(t!=null)u.aXV(t)
return B.h(null,v)}})
return B.i($async$ah5,v)},
aez(d){var w=0,v=B.j(x.H),u=this,t
var $async$aez=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ck(null,null,!0,null,new C.etr(),t,null,!0,!0,x.y),$async$aez)
case 2:if(f===!0){u.d.aa(0)
u.Ep()}return B.h(null,v)}})
return B.i($async$aez,v)},
B(d){var w=this,v=null,u=B.a([B.aiC(w.r?new B.bM(A.a5,v,v,new B.D(A.GB,B.hs(D.bSn,D.fBi,new C.eu0(w),v),v),v):w.c92(),A.b7,A.iB),B.E(B.cv(new C.eu1(w)),1)],x.p)
if(!w.r)u.push(w.cw4())
return B.c5(v,A.c1,B.bm(!0,B.x(u,A.m,v,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bIL(){var w=null,v=new C.ett(),u=A.w.j(0.7),t=B.n(26),s=B.K(A.bv.j(0.5),A.r,1)
return B.bT(0,B.ec(B.as(B.p(w,B.ch(B.x(B.a([D.fMI,A.au,D.fUq,A.aA,v.$4(A.on,A.bv,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.Cv,A.co,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.km,A.c_,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(G.anT,A.bu,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fTI,new B.bM(A.a8,w,w,B.bN(!1,D.fJP,w,w,!0,w,w,w,this.gbIE(),w,w),w)],x.p),A.E,w,A.e,A.O,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),A.f,w,A.WT,new B.o(I.nj,w,s,t,w,w,A.n),w,w,w,A.fl,Al.al2,w,w,w),w,w,w),u,!0),0,0,0)},
c92(){var w=this,v=null,u=B.aH(v,v,v,v,A1.nx,v,v,v,new C.etN(w),v,v,v,v,v,v),t=w.a9p(A.OP,"How it works",new C.etO(w),!0),s=w.ay?A.oo:V.rH
return new B.D(D.bDv,B.B(B.a([u,D.bF4,t,w.a9p(s,"Sound",new C.etP(w),!0),w.a9p(A.e5,"Ideas",w.gcmy(),!0),w.a9p(K.wj,"Clear",w.gc90(w),!0),w.aOL(A.hl,"Show",new C.etQ(w),!0,!0)],x.p),A.m,v,A.e,A.i,0,v,v),v)},
aOL(d,e,f,g,h){var w=null,v=h?A.bv:A.c.j(0.08),u=B.n(14),t=B.n(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Ad.w9,B.aI(!1,A.a2,!0,u,B.aO(!1,t,!0,B.he(new B.D(new B.Q(8,8,8,8),B.B(s,A.m,w,A.e,A.O,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
a9p(d,e,f,g){return this.aOL(d,e,f,g,!1)},
cw4(){var w=null,v=new C.etJ(this),u=A.c.j(0.08)
return B.p(w,B.ch(B.B(B.a([v.$2("START",D.xo),v.$2("CHANGE",D.EG),v.$2("REACT",D.r2)],x.p),A.E,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aM),A.f,w,w,new B.o(I.Bl,w,new B.bH(new B.ay(u,1,A.r,-1),A.a0,A.a0,A.a0),w,w,w,A.n),w,w,w,w,D.byC,w,w,w)},
cw5(d){var w,v,u,t,s=null,r=D.mS.h(0,d)
r.toString
w=B.n(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.K(v.j(0.5),A.r,1)
return new B.D(A.fu,B.aA(s,B.p(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cS,B.d(r.a,s,1,A.a1,s,s,s,D.aU4,s,s,s)],x.p),A.m,s,A.e,A.O,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a9(A.b0,A.b5,A.x,u,s,s),A.n),s,s,s,s,A.hw,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.etI(this,d),s,s,s,s,s,s,!1,A.a3),s)}}
C.bir.prototype={
a3(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bl(b7.save())
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
b8.aP(new B.a3(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){l=w[m]
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
d.push(new B.l0(h+a1,i,f-a1,g,f,g))
a2=D.mS.h(0,k.b).d
a3=D.mS.h(0,j.b).d
e=new B.ao(A.Q,A.M,A.S,A.T,A.R)
e.b=A.a9
e.c=3
e.d=A.bB
d=B.a([a2.j(0.55),a3.j(0.55)],p)
g=B.rN(new B.t(h,i),new B.t(f,g))
e.sam(new B.a9(A.a5,A.a8,A.x,d,b4,b4).aA(0,new B.a3(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.G()
i=a0.gbv().a.snapshot()
b7.drawPath((a0.e=new B.cf(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.E((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=C.huC(new B.t(i.a+36,i.b+0),new B.t(h.a-36,h.b),a5)
$.S()
h=new B.ao(A.Q,A.M,A.S,A.T,A.R)
h.r=A.c.j(0.35).gp(0)
h.z=N.oz
q=h.G()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new B.ao(A.Q,A.M,A.S,A.T,A.R)
g.r=A.c.gp(0)
q=g.G()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.a7(0,D.Jd)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new B.aF($.S().r,A.ag,b4,b4,B.a([],o))
o=a8.b
a0.D(new B.aY(t,o))
i=a9.b
a0.D(new B.l0(t+a1,o,w-a1,i,w,i))
i=B.I()
i.b=A.a9
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aH(a0,i)
i=B.I()
i.r=A.c.gp(0)
b8.ad(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){b0=w[m]
o=b0.c
v=A.k.E((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dU.aw(0,v)
$.S()
h=new B.ao(A.Q,A.M,A.S,A.T,A.R)
h.b=A.a9
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gp(0)
q=h.G()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){b1=w[m]
v=A.k.E((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=B.kA(o,i,A.dU.aw(0,v))
h.toString
i=B.kA(o,i,A.dU.aw(0,A.k.E(v-0.35,0,1)))
i.toString
$.S()
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.c=5
o.d=A.bB
g=b1.c
f=B.a([g.j(0),g],p)
e=B.rN(i,h)
o.sam(new B.a9(A.a5,A.a8,A.x,f,b4,b4).aA(0,new B.a3(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.G()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new B.ao(A.Q,A.M,A.S,A.T,A.R)
i.r=A.c.gp(0)
q=i.G()
b7.drawCircle(o,h,6,q)
q.delete()
i=new B.ao(A.Q,A.M,A.S,A.T,A.R)
i.r=g.j(0.5*(1-v)).gp(0)
i.z=A.kP
q=i.G()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){a4=w[m]
v=A.k.E((b6-a4.f)/a4.e,0,1)
o=a4.a
$.S()
i=new B.ao(A.Q,A.M,A.S,A.T,A.R)
i.r=a4.c.j(1-v).gp(0)
q=i.G()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){j=w[m]
o=j.a
$.S()
i=new B.ao(A.Q,A.M,A.S,A.T,A.R)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.kP
q=i.G()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new B.ao(A.Q,A.M,A.S,A.T,A.R)
i.sam(new B.c2(A5.xr,0.5,A.x,b4,0,B.a([A.c,h],p),b4,b4).aA(0,B.bY(j.a,8)))
q=i.G()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,B.L)(b5),++m){a6=b5[m]
v=A.k.E((b6-a6.d)/1000,0,1)
t=1-v
b2=C.bis(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a3(b8,new B.t(t.a-o/2,t.b-(40+60*v+p.gbb(p)/2)))}for(b5=new B.du(n,n.r,n.e);b5.C();)b3.cil(b8,b5.d,b6)
b7.restore()},
cil(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mS.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.E(1-(f-w)/520,0,1)
u=B.bK(e.c,64,64)
t=B.bs(u,A.it)
s=t.eO(A.cy)
$.S()
r=B.I()
r.r=A.w.j(0.55).gp(0)
r.z=A.mT
d.az(s,r)
if(v>0){s=t.cq(6)
r=B.I()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.zI
d.az(s,r)}s=t.eO(A.cH)
r=B.I()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.az(s,r)
r=B.I()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sam(new B.a9(A.b0,A.b5,A.x,B.a([s,p],x.O),j,j).aA(0,u))
d.az(t,r)
r=B.I()
r.b=A.a9
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.az(t,r)
r=h.b
p=e.c
o=C.bis(B.lv(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a3(d,p.aE(0,new B.t(s/2,r.gbb(r)/2)))
n=C.bis(h.a,11,A.c,j,j,A.H)
n.a3(d,e.c.a7(0,new B.t(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aAz[A.o.F(e.d,6)]:j
h=h.c
if(h===D.r2){s=e.c.a7(0,new B.t(0,62))
r=B.I()
r.r=D.aBa[A.o.F(e.d,6)].gp(0)
d.ad(s,5,r)}else if(m!=null){l=C.bis(m,9.5,A.aC,j,j,A.U)
l.a3(d,e.c.a7(0,new B.t(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bis(m,9.5,A.aC,j,j,A.U)
l.a3(d,e.c.a7(0,new B.t(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xo)k.b2V(d,e.c.aE(0,D.Jd),q)
k.b2V(d,e.c.a7(0,D.Jd),q)},
b2V(d,e,f){var w
$.S()
w=B.I()
w.r=A.c1.gp(0)
d.ad(e,9,w)
w=B.I()
w.b=A.a9
w.c=2.2
w.r=f.gp(0)
d.ad(e,9,w)
w=B.I()
w.r=A.c.gp(0)
d.ad(e,3.5,w)},
av(d){return!0}}
C.aNf.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.ei.prototype={}
C.tL.prototype={
ar3(d,e,f,g){var w=this
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
C.aaK.prototype={}
C.abQ.prototype={}
C.a4T.prototype={
beO(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h4()?-1:1
v=t.af()*3.141592653589793*2
u=f*(0.3+t.af())
s.push(new C.aaK(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.af()*0.45));++r}},
c5f(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bs(w,new C.bOr())},
akB(d,e,f,g){var w="p"+this.c++,v=new C.tL(w,e,f,g)
v.ar3(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bs(this.b,new C.bOC(e))},
aa(d){A.d.aa(this.a)
A.d.aa(this.b)},
cJO(d,e,f,g,h){return A.d.b3(this.b,new C.bOx(e,f,g,h))},
ali(d,e,f,g){var w
if(d===f||this.cJO(0,d,e,f,g))return null
w=new C.abQ(d,e,f,g)
this.b.push(w)
return w},
aBv(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zS(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
ao0(d){return this.M3(d)&&!d.x&&d.cx>this.zS(d)},
b7g(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
M3(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c9l(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.zH.h(0,v)
if(w!=null)return w.a
return 100},
vo(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c5f(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.T(v).k("Z<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.L)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Z(v,new C.bOD(a2),t).cI(0,0,new C.bOE(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.U(x.N,u)
n=new C.bOG(o)
m=B.a([],x.t)
l=new C.bOF(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.L)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.L)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.U(u,u)
f=new C.bOI(g,l,n)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,B.L)(v),++s){q=v[s]
f.$2(q,0)
f.$2(q,1)}e=g.a
if(e===0)return
s=0
for(;;){if(!(s<t)){d=0
break}q=v[s]
u=q.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){d=f.$2(q,1)
break}++s}for(u=v.length,s=0;s<u;++s)v[s].CW=0
a2.b7c(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zS(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b7c(e,d,w,!0)
a2.bPk(a4)},
b7c(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.U(x.N,b3),b5=new C.bOt(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bOs(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.L)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bOv(B.U(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.L)(w),++u){t=w[u]
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
if(h)B.b9(B.dL(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.bZ(b7,0,!1,b3)
a0=B.bZ(b7,0,!1,b3)
k.aa(0)
j.aa(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.L)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b7g(t)*(1+t.CW))
a4=b2.aBv(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c9l(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bSC(e,a0,b8)
if(!c0)break
for(a1=w.length,a8=!1,u=0;u<w.length;w.length===a1||(0,B.L)(w),++u){t=w[u]
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
c0=!0}for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.L)(w),++u){t=w[u]
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
bSC(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.bZ(d,0,!1,x.i)
u=B.a([],x.b)
for(t=a0.length,s=x.n,r=0;r<a0.length;a0.length===t||(0,B.L)(a0),++r){q=a0[r]
p=B.a([],s)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,B.L)(a0),++n){m=a0[n]
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
bPk(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.L)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aBv(o)/a1.b7g(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zS(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bHo(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.beO(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.u2(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.u2(o,"The "+$.qw().h(0,n).b+" got "+A.k.ac(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.u2(o,"More than 1.5 amps went through the "+$.qw().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.u2(o,"The regulator had to turn "+A.k.ac(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.ac(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.u2(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.zH.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qw().h(0,n).b
l=f.b
l=l===A.k.jl(l)?""+A.k.V(l):B.w(l)
g=f.c
g=g===A.k.jl(g)?""+A.k.V(g):B.w(g)
a1.u2(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ac(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.f5d.t(0,n)){m=o.fx>0?A.k.E((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.E(j/0.9,0,1)
if(!o.x&&j>2.4)a1.u2(o,"The bulb got "+A.k.ac(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.E((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.u2(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.E(j/14,0,1)
break
case"motor":n=A.k.E(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.E(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.u2(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.E(i/1,0,1)
if(!o.x&&i>1)a1.u2(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.u2(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.E(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.u2(o,"The capacitor was charged to "+A.k.ac(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bHo(d){return A.d.b3(this.a,new C.bOq(d))},
u2(d,e){var w
d.x=!0
d.ay=e
this.beO(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bjr(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.aa(0)},
aHL(d){var w=d.b
return D.aR_.t(0,w)||D.zH.aj(0,w)||w==="buck"||w==="regulator"},
bge(d){var w,v=!0
if(!this.M3(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.zH.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Ve(d,e){var w=this.b
return new B.Z(w,new C.bOK(d,e),B.T(w).k("Z<1>")).gL(0)},
CI(d){var w,v
if(d.x)return!1
w=d.b
if(D.zH.aj(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bek(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qw().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aHL(d)||i.CI(d))return null
w=i.Ve(d,0)
v=i.Ve(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.T(u).k("Z<1>")
s=B.C(new B.Z(u,i.gcSn(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jl(r)?""+A.k.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ac(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.zH.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Mg("battery"),o=J.aW(t.a),t=new B.f2(o,t.b);t.C();){n=o.gS(o)
if(n.e===1.5&&n.as<=0.02&&i.Ve(n,0)+i.Ve(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Mg("switch"),o=J.aW(t.a),t=new B.f2(o,t.b);t.C();)if(!o.gS(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qw().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zS(k))return"The "+$.qw().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ac(k.cx,2)+" amps, but it can only give about "+A.k.ac(i.zS(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b3(u,new C.bOy(i,d))
h=q.b
h=h===A.k.jl(h)?""+A.k.V(h):B.w(h)
u=A.k.ac(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ac(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ac(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Mg(d){var w=this.a
return new B.Z(w,new C.bOB(d),B.T(w).k("Z<1>"))},
aHp(d){return this.Mg(d).b3(0,new C.bOA(0.35))},
q1(d,e){return A.d.b3(this.a,new C.bOz(e))}}
C.aj9.prototype={
a3(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.S()
w=B.I()
w.r=G.Bn.gp(0)
c0.aP(new B.a3(0,0,b8,b9),w)
v=B.I()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.G()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,B.L)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.mj.aj(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.mj.aj(0,h.b)?(h.ch-1)*38:0
b4.cGB(c0,new B.t(k*b6+j*(42+i),l*b7),new B.t(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=C.hHv(q.a,q.b,c1)
q=b4.e
q.toString
$.S()
p=B.I()
p.r=A.ac.gp(0)
p.c=3
p.d=A.bB
c0.bo(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,B.L)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.S()
g=new B.ao(A.Q,A.M,A.S,A.T,A.R)
g.r=D.afR.j(A.k.E(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.zI
s=g.G()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bl(w.save())
w.translate(j,i)
h=A.k.E(A.lu.aw(0,A.k.E(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.cjk(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zS(a0)){g=j+0
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
a3=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a3.r=A.ax.j(0.65+0.35*e).gp(0)
s=a3.G()
e=a4.gbv().a.snapshot()
w.drawPath((a4.e=new B.cf(e)).a,s)
s.delete()
e=B.a([],k)
a2=new B.aF(a2,A.ag,b5,b5,e)
e.push(new B.aY(g,a5))
e.push(new B.aq(a6,a7))
e.push(new B.aq(a8,a7))
e.push(new B.bt())
e=new B.ao(A.Q,A.M,A.S,A.T,A.R)
e.b=A.a9
e.c=1.6
e.r=A.c.gp(0)
s=e.G()
e=a2.gbv().a.snapshot()
w.drawPath((a2.e=new B.cf(e)).a,s)
s.delete()
a9=new B.iN(new B.eu("!",b5,b5,A.cN,b5,b5,b5,b5,b5,b5,new B.F(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.bY,new B.jr(1),b5,b5,b5,b5,A.bW,b5)
a9.ej()
a9.a3(c0,new B.t(g+-3,f+-8))}if(!a0.x)g=(D.aR_.t(0,h)||D.zH.aj(0,h)||h==="buck"||h==="regulator")&&!r.CI(a0)&&r.Ve(a0,0)+r.Ve(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.S()
g=new B.ao(A.Q,A.M,A.S,A.T,A.R)
g.r=A.aB.gp(0)
s=g.G()
w.drawCircle(j,i,10,s)
s.delete()
a9=new B.iN(new B.eu("!",b5,b5,A.cN,b5,b5,b5,b5,b5,b5,new B.F(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.bY,new B.jr(1),b5,b5,b5,b5,A.bW,b5)
a9.ej()
a9.a3(c0,new B.t(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.mj.aj(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.S()
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.r=G.Bn.gp(0)
s=j.G()
w.drawCircle(f,g,7,s)
s.delete()
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.b=A.a9
j.c=2.4
j.r=(i&&r.bge(a0)?A.c6:A.ac).gp(0)
s=j.G()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bge(a0)){a9=new B.iN(new B.eu("+",b5,b5,A.cN,b5,b5,b5,b5,b5,b5,new B.F(!0,A.c6,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.bY,new B.jr(1),b5,b5,b5,b5,A.bW,b5)
a9.ej()
a9.a3(c0,new B.t(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,B.L)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.E(b1.r/0.8,0,1)
j=B.ar(M.MK,G.Z5,b2)
j.toString
i=b1.f
$.S()
h=new B.ao(A.Q,A.M,A.S,A.T,A.R)
h.r=j.gp(0)
h.c=2.4
h.d=A.bB
s=h.G()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new B.ao(A.Q,A.M,A.S,A.T,A.R)
i.r=j.j(0.35*b2).gp(0)
i.z=A.IC
s=i.G()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b3(q,new C.bJ3())){b3=A.d.cI(q,0,new C.bJ4())
$.S()
b7=B.I()
b7.r=D.be9.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aP(new B.a3(0,0,b8,b9),b7)
a9=B.fx(b5,b5,b5,b5,D.fgg,A.a4,A.bY,b5,A.dA,A.bW)
a9.o0(b6-24)
a9.a3(c0,new B.t(12,10))}},
qE(d,e,f,g,h){var w=null,v=B.fx(w,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.bY,w,A.dA,A.bW)
v.ej()
v.a3(d,f)},
cGB(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new B.aF($.S().r,A.ag,null,null,B.a([],x.v))
d.D(new B.aY(a1.a,a1.b))
w=C.hzR(a1,a2,a3)
d.D(new B.c4(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aT,D.afR,A.k.E(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aJ,A.aT,A.k.E(r*1.2,0,1))
u.toString
o=u}else o=A.bm
u=B.I()
u.b=A.a9
u.c=a4?7:5
u.d=A.bB
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aH(d,u)
u=B.I()
u.b=A.a9
u.c=2.4
u.d=A.bB
u.r=(a4?A.c:o).gp(0)
a0.aH(d,u)
if(q){n=new B.T4(new B.tq(B.xt(d),!1,B.a([],x.R))).gI(0)
m=40+A.k.E(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.io()
i=t[u].b
i===$&&B.c()
if(!(j<i.a.length()/22))break
i=k.d
v.io()
h=t[u].b
h===$&&B.c()
h=A.k.F(j*22+i*m*l,h.a.length())
v.io()
i=t[u].b
i===$&&B.c()
i=i.a.length()
v.io()
g=t[u].b
g===$&&B.c()
f=A.k.F(h+i,g.a.length())
v.io()
i=t[u].Hc(f).a
h=new B.ao(A.Q,A.M,A.S,A.T,A.R)
h.r=A.c.gp(0)
e=h.G()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
Pp(d,e,f,g){var w,v,u,t
$.S()
w=B.I()
v=g?A.b0:A.a5
u=g?A.b5:A.a8
t=B.ar(e,A.w,0.3)
t.toString
w.sam(new B.a9(v,u,A.x,B.a([e,f,e,t],x.O),A.I3,null).aA(0,d))
return w},
ax4(d,e,f){return this.Pp(d,e,f,!0)},
c4Q(d,e){return this.Pp(d,A.bm,A.iy,e)},
aib(d,e){var w,v,u
$.S()
w=B.I()
w.sam(D.aPn.aA(0,B.bY(e,4.2)))
d.ad(e,4.2,w)
w=e.a7(0,D.eiZ)
v=e.a7(0,D.ej7)
u=B.I()
u.r=A.e7.gp(0)
u.c=1.2
d.bo(w,v,u)},
cjk(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.S(),c0=B.I()
c0.sam(D.c2h.aA(0,D.f1T))
c0.c=3.4
c0.d=A.bB
w=B.I()
w.r=A.w.j(0.45).gp(0)
w.z=N.oz
c1.dP(D.f1H,w)
if(c3){w=B.bs(D.f1R,A.k2)
v=B.I()
v.r=A.c.j(0.14).gp(0)
c1.az(w,v)}u=C.hfz(c2)
c1.bo(new B.t(-u,0),D.ekz,c0)
c1.bo(D.ehD,new B.t(u,0),c0)
t=c2.x
w=c2.b
s=D.mj.aj(0,w)&&c2.ch!==1
if(s){J.bl(c1.a.save())
c1.bW(0,c2.ch)}switch(w){case"battery":b3.bEb(c1,c2)
break
case"solar":r=B.bs(D.f1K,A.id)
c1.az(r,b3.Pp(new B.a3(r.a,r.b,r.c,r.d),A.dt,A.bO,!1))
b9=B.I()
w=B.ar(D.bi0,A.d3,0.25+0.55*c2.f)
w.toString
v=B.ar(D.br_,A.mB,0.3+0.4*c2.f)
v.toString
b9.sam(new B.a9(A.ay,A.aE,A.x,B.a([w,v],x.O),b4,b4).aA(0,D.a8o))
c1.aP(D.a8o,b9)
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
v=new B.ao(A.Q,A.M,A.S,A.T,A.R)
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
w=B.I()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aH(b9,w)
w=c2.f
b9=B.I()
b9.r=A.dB.j(0.9).gp(0)
c1.ad(D.ehJ,4+4*w,b9)
break
case"crank":n=B.bs(D.f1v,A.fE)
c1.az(n,b3.ax4(new B.a3(n.a,n.b,n.c,n.d),A.bs,A.bM))
b9=B.I()
b9.sam(D.aPo.aA(0,B.bY(A.I,12)))
c1.ad(A.I,12,b9)
m=new B.t(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.I()
b9.r=A.cq.gp(0)
b9.c=5
b9.d=A.bB
c1.bo(A.I,m,b9)
b9=B.I()
b9.sam(D.eu2.aA(0,B.bY(m,7)))
c1.ad(m,7,b9)
b3.aib(c1,D.ekr)
b3.aib(c1,D.ehs)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aF(b9,A.ag,b4,b4,B.a([],w))
v.D(new B.aY(-3,24))
v.D(new B.aq(3,24))
v.D(new B.aq(1.5,0))
v.D(new B.aq(-1.5,0))
v.D(new B.bt())
l=B.I()
l.r=A.bO.gp(0)
c1.aH(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.bl(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=B.a([],w)
j=new B.aF(b9,A.ag,b4,b4,l)
l.push(new B.aY(0,-2))
l.push(new B.c4(6,-14,2,-30))
l.push(new B.c4(-2,-14,0,-2))
l.push(new B.bt())
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.r=A.c.gp(0)
o=l.G()
l=j.gbv().a.snapshot()
v.drawPath((j.e=new B.cf(l)).a,o)
o.delete()
v.restore()}b9=B.I()
b9.sam(D.etK.aA(0,B.bY(A.I,4.5)))
c1.ad(A.I,4.5,b9)
break
case"switch":n=B.bs(D.f1C,A.mW)
b9=B.I()
b9.sam(D.arw.aA(0,new B.a3(n.a,n.b,n.c,n.d)))
c1.az(n,b9)
b3.aib(c1,D.Tf)
b3.aib(c1,D.aKa)
i=c2.w?D.aKa:H.aK1
b9=B.I()
b9.r=A.av.gp(0)
b9.c=6
b9.d=A.bB
c1.bo(D.Tf,i,b9)
b9=B.I()
b9.r=(c2.w?A.bf:A.bO).gp(0)
b9.c=4
b9.d=A.bB
c1.bo(D.Tf,i,b9)
b9=B.kA(D.Tf,i,0.85)
b9.toString
w=B.I()
w.r=A.ax.gp(0)
c1.ad(b9,5,w)
break
case"fuse":h=B.bs(D.aQ3,D.aPs)
b9=B.I()
b9.r=A.fk.j(0.25).gp(0)
c1.az(h,b9)
b9=B.I()
b9.b=A.a9
b9.c=1.4
b9.r=A.aC.gp(0)
c1.az(h,b9)
if(!t){b9=B.I()
b9.c=1.6
b9.r=B.ar(A.bO,A.cL,c2.fx).gp(0)
c1.bo(D.aKu,D.aK8,b9)}else{b9=B.I()
b9.c=1.6
b9.r=A.bU.gp(0)
c1.bo(D.aKu,D.ekV,b9)
b9=B.I()
b9.c=1.6
b9.r=A.bU.gp(0)
c1.bo(D.eiw,D.aK8,b9)
b9=B.I()
b9.r=A.dL.gp(0)
c1.ad(A.I,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=B.bK(new B.t(M.ho[g]*22,0),20,9)
w=B.bs(f,A.hE)
o=b3.Pp(f,A.d2,A.oY,!0).G()
b9.drawRRect(B.e5(w),o)
o.delete()}break
case"pot":b9=B.I()
b9.sam(D.etV.aA(0,B.bY(A.I,21)))
c1.ad(A.I,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new B.ao(A.Q,A.M,A.S,A.T,A.R)
d.r=A.aC.gp(0)
d.c=1.2
o=d.G()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=B.I()
b9.sam(D.etI.aA(0,B.bY(A.I,13)))
c1.ad(A.I,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=B.I()
j.r=A.aT.gp(0)
j.c=3
j.d=A.bB
c1.bo(new B.t(b9*3,w*3),new B.t(v*12,l*12),j)
break
case"resistor":a1=B.bs(D.aQ3,D.aPs)
b9=B.I()
b9.sam(D.c5D.aA(0,new B.a3(a1.a,a1.b,a1.c,a1.d)))
c1.az(a1,b9)
b9=x.O
a2=B.H([47,B.a([B.b1(b5),B.b1(b6),A.w],b9),100,B.a([B.b1(b7),A.w,B.b1(b7)],b9),220,B.a([B.b1(b8),B.b1(b8),B.b1(b7)],b9),470,B.a([B.b1(b5),B.b1(b6),B.b1(b7)],b9),1000,B.a([B.b1(b7),A.w,B.b1(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new B.ao(A.Q,A.M,A.S,A.T,A.R)
v.r=a3[p].gp(0)
o=v.G()
b9.drawRect(B.bG(new B.a3(w,-9,w+4.5,9)),o)
o.delete()}b9=B.I()
b9.r=A.aT.gp(0)
c1.aP(D.f24,b9)
b9=c2.r
b3.qE(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.ejV,A.ac,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.I()
v.r=A.dB.j(0.55*w).gp(0)
v.z=A.zI
c1.ad(H.v5,34,v)}n=B.bK(D.egr,12,18)
c1.az(B.bs(n,A.hE),b3.Pp(n,A.bm,A.e2,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.r=A.dm.gp(0)
l.c=1
o=l.G()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=B.I()
if(t)v=A.XJ
else{v=B.ar(A.e2,A.i_,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.FE
else{l=B.ar(A.dt,A.dB,c2.fx)
l.toString}w.sam(new B.c2(A.tr,0.5,A.x,b4,0,B.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aA(0,B.bY(A.t0,17)))
c1.ad(A.t0,17,w)
w=B.I()
w.b=A.a9
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ad(A.t0,17,w)
b9=b9.r
w=x.v
l=new B.aF(b9,A.ag,b4,b4,B.a([],w))
l.D(new B.aY(-9,-12))
l.D(new B.c4(-12,-4,-9,0))
v=B.I()
v.b=A.a9
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aH(l,v)
v=B.I()
v.r=A.cY.gp(0)
v.c=1.4
c1.bo(D.ekP,D.ekR,v)
v=B.I()
v.r=A.cY.gp(0)
v.c=1.4
c1.bo(D.eio,D.eir,v)
w=B.a([],w)
a4=new B.aF(b9,A.ag,b4,b4,w)
a4.D(new B.aY(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new B.aq(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bw(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.S()
b9=B.I()
b9.b=A.a9
b9.c=1.8
if(t)w=A.aS
else{w=B.ar(A.dt,D.bj1,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aH(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.I()
v.r=A.ax.j(0.6*w).gp(0)
v.z=D.dAi
c1.ad(A.t0,30,v)}w=B.I()
w.r=A.e2.gp(0)
w.c=2.4
c1.bo(D.ekX,D.ekW,w)
w=B.I()
w.r=A.e2.gp(0)
w.c=2.4
c1.bo(D.eiy,D.eix,w)
b9=b9.r
w=x.v
a6=new B.aF(b9,A.ag,b4,b4,B.a([],w))
a6.D(new B.aY(-12,8))
a6.D(new B.aq(-12,-6))
a6.D(new B.c4(0,-26,12,-6))
a6.D(new B.aq(12,8))
a6.D(new B.bt())
v=B.I()
if(t)l=A.jd
else{l=B.ar(A.ek,D.bkH,c2.fx)
l.toString}if(t)j=A.kH
else{j=B.ar(A.jM,A.ax,c2.fx)
j.toString}v.sam(new B.a9(A.ay,A.aE,A.x,B.a([l,j],x.O),b4,b4).aA(0,D.f0X))
c1.aH(a6,v)
v=B.I()
v.b=A.a9
v.c=1.2
v.r=A.jN.gp(0)
c1.aH(a6,v)
v=B.I()
v.r=A.el.gp(0)
c1.aP(D.f12,v)
w=new B.aF(b9,A.ag,b4,b4,B.a([],w))
w.D(new B.aY(-7,-4))
w.D(new B.c4(-6,-12,0,-15))
b9=B.I()
b9.b=A.a9
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aH(w,b9)
break
case"motor":a7=new B.a3(-28,-14,20,14)
c1.az(B.bs(a7,A.hF),b3.ax4(a7,A.al,A.aN))
b9=B.I()
b9.r=A.cr.gp(0)
c1.aP(D.f0w,b9)
b9=B.I()
b9.r=A.cq.gp(0)
c1.aP(D.f0y,b9)
b9=c1.a
J.bl(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bl(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=B.bK(H.aJX,15,7)
v=new B.ao(A.Q,A.M,A.S,A.T,A.R)
v.r=A.cL.j(0.9).gp(0)
o=v.G()
b9.drawOval(B.bG(w),o)
o.delete()
b9.restore()}w=B.I()
w.r=A.av.gp(0)
c1.ad(A.I,3,w)
b9.restore()
b3.qE(c1,"M",D.ekq,A.av,14)
break
case"buzzer":a8=B.bK(A.I,42,42)
b9=B.I()
b9.sam(D.etZ.aA(0,a8))
c1.dP(a8,b9)
b9=B.I()
b9.r=A.w.gp(0)
c1.ad(A.I,6,b9)
b9=B.I()
b9.b=A.a9
b9.c=1.4
b9.r=A.aX.gp(0)
c1.ad(A.I,6,b9)
b3.qE(c1,"+",D.ekj,A.ac,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.F(w.d*14,5):0
l=B.bY(A.I,24+k*5+l)
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.b=A.a9
j.c=2
j.r=A.c_.j(v*(1-k*0.22)).gp(0)
o=j.G()
b9.drawArc.apply(b9,[B.bG(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=B.bs(D.f1y,A.hF)
w=B.I()
w.sam(D.c3g.aA(0,new B.a3(n.a,n.b,n.c,n.d)))
c1.az(n,w)
w=B.a([],x.v)
a9=new B.aF(b9.r,A.ag,b4,b4,w)
a9.D(new B.aY(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new B.c4(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bw(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.S()
w=B.I()
w.b=A.a9
w.c=10
w.r=D.bjI.j(0.5*b9).gp(0)
w.z=A.kP
c1.aH(a9,w)}$.S()
b9=B.I()
b9.b=A.a9
b9.c=3.2
b9.d=A.bB
b9.r=B.ar(A.m2,A9.MD,c2.fx).gp(0)
c1.aH(a9,b9)
break
case"capacitor":a7=new B.a3(-16,-22,16,18)
b9=B.bs(a7,A.hF)
w=B.I()
w.sam(D.c29.aA(0,a7))
c1.az(b9,w)
w=B.I()
w.r=A.bO.gp(0)
c1.aP(D.f1b,w)
for(p=0;p<4;++p){b0=new B.iN(new B.eu("\u2212",b4,b4,A.cN,b4,b4,b4,b4,b4,b4,new B.F(!0,A.av,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.bY,new B.jr(1),b4,b4,b4,b4,A.bW,b4)
b0.ej()
b0.a3(c1,new B.t(-14,-18+p*9))}b1=new B.a3(-16,-24,16,-17)
c1.az(B.bs(b1,A.hE),b3.c4Q(b1,!1))
b9=38*c2.fx
w=18-b9
$.S()
v=B.I()
v.r=A.bf.j(0.5).gp(0)
c1.aP(new B.a3(-3,w,11,w+b9),v)
b3.qE(c1,"1F",H.v5,A.c,11)
break
case"radio":a1=B.bs(D.a8o,A.fE)
b9=B.I()
b9.sam(D.c5T.aA(0,new B.a3(a1.a,a1.b,a1.c,a1.d)))
c1.az(a1,b9)
b9=B.I()
b9.b=A.a9
b9.c=1.4
b9.r=A.oY.j(0.6).gp(0)
c1.az(a1,b9)
b9=B.bs(D.f1z,A.id)
w=B.I()
w.r=A.dP.gp(0)
c1.az(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new B.ao(A.Q,A.M,A.S,A.T,A.R)
v.r=A.m2.gp(0)
v.c=1.4
o=v.G()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=B.I()
w.r=(c2.fx>0?A.fU:A.nZ).gp(0)
c1.aP(D.f0D,w)
if(c2.fx>0){w=8+A.k.F(b3.b.d*7,18)
v=B.I()
v.r=A.bz.gp(0)
v.c=1.6
c1.bo(new B.t(w,-13),new B.t(w,-3),v)}w=B.I()
w.sam(D.aPo.aA(0,B.bY(D.a7n,6)))
c1.ad(D.a7n,6,w)
w=B.I()
w.r=A.oY.gp(0)
c1.ad(D.ehC,4,w)
w=B.I()
w.r=A.e2.gp(0)
w.c=1.8
c1.bo(D.ehx,D.aKf,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=B.bY(D.aKf,4+k*5+A.k.F(w.d*8,5))
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=1.4
l.r=A.o4.j(0.7).gp(0)
o=l.G()
b9.drawArc.apply(b9,[B.bG(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=B.bs(D.f1J,A.hF)
v=B.I()
v.r=M.ng.gp(0)
c1.az(w,v)
b2=B.bs(D.f1G,A.hE)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bl(b9.save())
b9.clipRRect(B.e5(b2),$.nF(),!0)
b9.translate(-33,-21)
L.hbE(c1,D.f7X,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.I()
b9.r=A.bf.gp(0)
c1.ad(D.ehP,1.6,b9)}else{w=B.I()
w.r=D.vT.gp(0)
c1.az(b2,w)
b9=new B.aF(b9.r,A.ag,b4,b4,B.a([],x.v))
b9.D(new B.aY(-33,-21))
b9.D(new B.aq(-10,-21))
b9.D(new B.aq(-33,0))
b9.D(new B.bt())
w=B.I()
w.r=A.c.j(0.05).gp(0)
c1.aH(b9,w)}b9=B.I()
b9.r=A.bs.gp(0)
c1.aP(D.f11,b9)
break}C.ijS(c1,c2,b3.b.d,b3.gc9m())
if(t)b3.qE(c1,"\u2716",D.el_,A.ax,14)
if(s)c1.a.restore()},
bEb(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new B.a3(-28,-13,28,13)
d.az(B.bs(w,A.mW),m.ax4(w,A.dt,A.jb))
v=new B.a3(-22,-13,22,13)
$.S()
u=B.I()
u.sam(D.arp.aA(0,v))
d.aP(v,u)
u=B.I()
u.r=A.dZ.gp(0)
d.aP(D.f1l,u)
t=new B.a3(28,-5,34,5)
d.az(B.bs(t,A.hp),m.Pp(t,A.dt,A.iy,!0))
m.qE(d,"+",D.ehd,A.aT,11)
m.qE(d,"\u2212",D.eks,A.ac,11)
m.qE(d,B.w(l===A.k.jl(l)?A.k.V(l):l)+"V",D.ek8,A.aT,13)
if(l===1.5){u=B.I()
u.r=A.bC.gp(0)
d.aP(D.f1k,u)
u=e.as
s=B.I()
s.r=B.ar(A.ax,A.bf,u).gp(0)
d.aP(new B.a3(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qE(d,"FLAT",D.ejU,A.c6,9)}if(l>2){u=B.I()
u.r=A.aX.gp(0)
u.c=1
d.bo(D.egA,D.aJQ,u)
m.qE(d,l>3?"3 cells":"2 cells",D.ek7,A.aC,8)}}else if(l<=9){r=new B.a3(-22,-17,22,17)
u=B.bs(r,A.mW)
$.S()
s=B.I()
s.sam(D.c5q.aA(0,r))
d.az(u,s)
s=B.I()
s.r=A.cT.gp(0)
d.aP(D.f1m,s)
for(u=d.a,q=0;q<2;++q){p=G.aAU[q]
s=p<0?5:3.6
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.sam(D.aPn.aA(0,B.bY(new B.t(p,-18),5)))
n=o.G()
u.drawCircle(p,-18,s,n)
n.delete()}m.qE(d,"9V",D.ek0,A.c,16)}else{r=new B.a3(-34,-16,34,16)
u=B.bs(r,A.id)
$.S()
s=B.I()
s.sam(D.arp.aA(0,r))
d.az(u,s)
s=B.I()
s.r=A.bu.gp(0)
d.aP(D.f1I,s)
for(u=d.a,q=0;q<2;++q){s=B.bs(B.bK(new B.t(G.a55[q],-20),8,10),A.hp)
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.r=A.cq.gp(0)
n=o.G()
u.drawRRect(B.e5(s),n)
n.delete()}m.qE(d,"+",D.ehm,A.ax,10)
m.qE(d,"12V",D.ek4,A.av,15)}},
av(d){return!0}}
C.mR.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.aa(k)
A.d.aa(d.b)
w=B.U(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.tL(o,r,q,p)
n.ar3(o,r,q,p)
k.push(n)
J.iz(s[4],new C.cqP(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.L)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.ali(m,u[1],l,u[3])}}}
C.aj7.prototype={
R(){var w=x.N
return new C.aj8(A.I,A.aw,B.U(w,x.gl),B.aX(w),$,A.bA,0,B.a([],x.X),null,null)}}
C.aj8.prototype={
aeK(d){var w=this,v=w.as
if(v!=null)v.a4(0)
w.m(new C.bII(w,d))
w.as=B.cG(A.lE,new C.bIJ(w))},
q(){var w=this.as
if(w!=null)w.a4(0)
w=this.ch
if(w!=null)w.a4(0)
this.btX()},
a0t(d,e){return this.chf(d,e)},
b1D(d){return this.a0t(d,!1)},
chf(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a0t=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.rv:A.yd
p=d.b
w=3
return B.b(L.hbX(s,r,p,d.ax<3.2,q,$.qw().h(0,p).b),$async$a0t)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a0t,v)},
ctY(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.at.c3(0,d.a,new C.bIK()),t=J.cD(u)
t.M(u,v)
t.bs(u,new C.bIL(v))
if(t.gL(u)>=4){t.aa(u)
t=w.ch
if(t!=null)t.a4(0)
w.a1O(d)
return}if(t.gL(u)===3){t=w.ch
if(t!=null)t.a4(0)
w.ch=B.cG(A.iV,new C.bIM(w,u,d))}},
a09(d){return this.cfC(d)},
cfC(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a09=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.il2(s,d.b,A.k.V(A.k.F(t.a.c.d*0.12,1)*100)),$async$a09)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a09,v)},
a1O(d){return this.crv(d)},
crv(d){var w=0,v=B.j(x.H),u=this,t
var $async$a1O=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(G.lB,null,new C.bIG(u,d),t,!0,!0,!1,A.k3,!1,!1,x.H),$async$a1O)
case 2:return B.h(null,v)}})
return B.i($async$a1O,v)},
Z(){this.a2()
this.bgo()
this.m7()},
bgo(){this.a.c.e=new C.bJ0(this)},
mp(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vo(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=D.mj.h(0,s.b)
if((r==null?null:r.b)!==D.A7)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.M(0,s.a)
q.a0t(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)F.dF(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)F.dF(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cK.af()<0.5
else u=!1
if(u)F.dF(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){F.dF(900+A.cK.ap(800),"",90,0,0.1,o)
if(A.cK.af()<0.35)F.dF(300+A.cK.ap(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cK.af()<0.4
else u=!1
if(u)F.dF(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)F.dF(330+A.o.F(110*A.k.bf(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)F.dF((A.k.bf(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)F.dF(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)F.dF(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cK.af()<0.5
else u=!1
if(u)F.dF(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)F.dF(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)F.dF(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new C.bJ1())},
b8E(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.L)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.mj.aj(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.z(p,n)
r=i}}}return s},
b2i(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.T(w).k("dw<1>"),w=new B.dw(w,v),w=new B.bS(w,w.gL(0),v.k("bS<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.mj.aj(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cGC(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.L)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.mj.aj(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.mj.aj(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hzR(new B.t(k,n),new B.t(i,l),p)
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
aeI(){this.a.toString
this.m(new C.bIb())},
bqF(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.d8a[v]
if(!A.d.b3(p.a.c.a,new C.bJ2(u,w))){o=new B.t(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?Q.Jf:o
s=s?Q.Jf:o
q=t.akB(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
F.dF(1200,"",50,0,0.3,"tri")
p.aeI()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.RE[v].a)
u=w.length
t=u>8
s=t?A.d.ds(w,0,A.o.ao(u+1,2)):w
r=t?A.d.fL(w,A.o.ao(w.length+1,2)):A.Y
q=n.a.d
if(q!=null){w=B.a7(q).k("cx<1>")
w=B.C(new B.cx(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.L)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b28(s,!0))
n.a.toString
if(t)w.push(n.b28(r,!0))
w.push(B.E(B.cv(new C.bJ_(n,q,m)),1))
return B.x(w,A.m,null,A.e,A.i,0,A.p)},
b28(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.L)(d),++v){u=d[v]
t=$.qw()
s=t.h(0,u).d.j(0.14)
r=new B.aP(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.p(p,B.x(B.a([new B.y(t.h(0,u).c,p,A.Ap,p,p,p,p,p,p,p,p,p),new B.y(t.h(0,u).b,p,A.nG,p,p,p,p,A.a1,p,1,p,p)],n),A.m,p,A.b9,A.i,0,A.p),A.f,p,p,new B.o(s,p,new B.bH(q,q,q,q),new B.bh(r,r,r,r),p,p,A.n),p,p,p,I.od,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bIc(this,u),p,p,p,p,p,p,!1,A.a3))}return B.p(p,B.cl(m,p,p,A.h4,p,p,A.aM,!1),A.f,p,p,new B.o(I.Bl,p,new B.bH(A.a0,A.a0,new B.ay(o,1,A.r,-1),A.a0),p,p,p,A.n),p,58,p,p,p,p,p,p)},
b_z(d){var w=null,v=B.n(18)
return B.p(w,d,A.f,w,w,new B.o(G.aes,w,B.K(A.bC,A.r,1),v,w,w,A.n),w,w,w,w,G.akf,w,w,w)},
cjl(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qw().h(0,o),m=d.dy,l=d.fr,k=new C.bIv(q,n),j=B.d(n.c,p,p,p,p,p,p,A.Ke,p,p,p),i=n.b,h=n.d,g=x.p
i=B.B(B.a([j,A.ad,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aH(p,p,p,p,D.bUf,p,p,p,new C.bIi(q,d),p,p,p,p,"Remove part",A.cc),B.aH(p,p,p,p,A.Pc,p,p,p,new C.bIj(q),p,p,p,p,p,A.cc)],g),A.m,p,A.e,A.i,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,I.Ek,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fpo,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ac(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ac(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ac(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.au,w,A.am,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.c6:A.aT,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bek(d)
if(v!=null){l=(d.x?A.ax:A.aB).j(0.14)
j=B.n(10)
i=B.K((d.x?A.ax:A.aB).j(0.5),A.r,1)
m.push(new B.D(A.i4,B.p(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fw9,p,p,p),A.f,p,p,new B.o(l,p,i,j,p,p,A.n),p,p,p,p,A.ck,p,p,p),p))}if(C.h9I(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new E.dX("CH "+t,d.at===u,new C.bIk(q,d,u),p,h,p))}l=B.bX(A.bG,l,A.bq,p,4,6)
l=B.a([A.am,l,A.au,B.d(q.a.c.CI(d)?"Showing: "+G.Re[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hq,p,p,p)],g)
if(q.a.c.CI(d))l.push(new E.fD(A.H8,"Open big screen",new C.bIn(q,d),h,p))
A.d.v(m,l)}if(D.mj.aj(0,o)&&!C.h9I(o)){l=B.a([A.am,B.d(q.a.c.CI(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hq,p,p,p)],g)
if(q.a.c.CI(d))l.push(new E.fD(A.OU,"Open the "+$.qw().h(0,o).b,new C.bIo(q,d),h,p))
A.d.v(m,l)}if(D.mj.aj(0,o))A.d.v(m,B.a([A.am,new E.fD(A.Cp,"Make it bigger (or tap it 4 times)",new C.bIp(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ac(d.db,1)
if(q.a.c.CI(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.am,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ac(i,1)+" V",p,p,p,p,p,p,D.fqf,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dqc[s]
j=r===A.k.jl(r)?A.k.V(r):r
l.push(new E.dX(B.w(j)+" V out",d.e===r,new C.bIq(q,d,r),p,h,p))}i.push(new B.D(A.l6,B.bX(A.bG,l,A.bq,p,0,6),p))}if(o==="regulator")i.push(D.fP2)
A.d.v(m,i)}if(q.a.c.M3(d)&&!d.x){l=A.k.ac(d.cx,2)
j=A.k.ac(q.a.c.zS(d),2)
i=q.a.c
w=i.ao0(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.ao0(d)?A.c6:A.es,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.n(4)
w=A.k.E(d.cx/q.a.c.zS(d),0,1)
i=q.a.c.ao0(d)?A.ax:A.bf
m.push(new B.D(A.i4,B.x(B.a([l,A.cS,B.bx(j,B.kx(A.bC,p,p,5,p,w,new B.ma(i,x.c)),A.ap)],g),A.E,p,A.e,A.i,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.i4,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.fjW,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dfd[s]
j=r===1.5?"1.5 V (rechargeable)":B.w(r)+" V"
l.push(new E.dX(j,d.e===r,new C.bIr(q,d,r),p,h,p))}m.push(B.bX(A.bG,l,A.bq,p,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.d5n[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new E.dX(j,d.r===r,new C.bIs(q,d,r),p,h,p))}m.push(B.bX(A.bG,l,A.bq,p,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bIt(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bIu(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bIl(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bIm(d)))
if(o==="crank")m.push(D.fKo)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hq,p,p,p))
return q.b_z(new B.cT(D.b3G,B.ch(B.x(m,A.E,p,A.e,A.O,0,A.p),A.t,p,A.y,p,p,p,p,A.ah),p))}}
C.bc9.prototype={}
C.Vu.prototype={
R(){return new C.aEi(C.hfy(),new B.cw(null,x.q),B.aX(x.S))}}
C.aEi.prototype={
Z(){this.a2()
$.aV.bZ$.push(this)
this.aeJ()},
aeJ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fEM(),$async$aeJ)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.ikf(t.d,r)
if(s!=null){t.m(new C.dXW(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$aeJ,v)},
Fa(){var w,v=this
if(!v.as)return
w=C.iaG(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bFp(w)},
jg(d){if(d!==A.fK)this.Fa()},
q(){$.aV.hR(this)
this.Fa()
this.a1()},
c9o(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.T(v).k("Z<1>")
t=new B.Z(v,new C.dY4(q),u).gL(0)
s=new B.Z(v,new C.dY5(),u).gL(0)
r=new B.Z(v,w.gcVZ(),u).gL(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.dY6(q,t,s,r))}if(A.o.F(q.w,45)===0)q.Fa()
if(A.o.F(q.w,10)===0){w=q.f
$.aik()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.aik()[q.f].c.$1(q.d)){w.M(0,q.f)
C.Je("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.dY7())
q.Fa()
w=q.c
w.toString
w=B.XN(w)
if(w!=null)w.U(B.b3(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.aik()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.m6,p,p,p,p,p,p,p,p,p,p))}},
ahr(){var w=0,v=B.j(x.H),u=this,t
var $async$ahr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ck(null,null,!0,null,new C.dXV(u),t,null,!0,!0,x.H),$async$ahr)
case 2:return B.h(null,v)}})
return B.i($async$ahr,v)},
b_y(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.n(12),t=B.K(f.j(0.45),A.r,1)
u=B.a([B.ap(w,B.p(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ap(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.he(new B.a5(40,38,new B.an(A.a_,w,A.ab,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a3)},
b_x(d,e,f,g){return this.b_y(d,e,f,g,null)},
arK(d,e,f,g){var w=null,v=f.j(0.1),u=B.n(10),t=B.K(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.p(w,B.B(B.a([B.X(d,f,w,w,w,15),A.eg,new B.ds(1,A.cp,B.d(e,w,1,A.a1,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b9,A.i,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a3),1)},
afM(){var w=0,v=B.j(x.H),u=this,t
var $async$afM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a4(t,!1).cc(B.eh(new C.dXR(u),!1,null,x.H)),$async$afM)
case 2:t=u.e.gbl()
if(t!=null)t.bgo()
if(u.c!=null)u.m(new C.dXS())
u.Fa()
return B.h(null,v)}})
return B.i($async$afM,v)},
bHh(){var w,v,u,t,s=null,r=this.f
$.aik()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.be:A.ax
u=B.n(9)
t=B.K(I.Bl,A.r,1.5)
return B.p(s,B.as(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.x3,s,s,s),s,s,s),A.f,s,D.b3N,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.f_,s,s,s)},
aiy(){var w=0,v=B.j(x.H),u=this,t
var $async$aiy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(G.lB,null,new C.dY3(u),t,!0,!0,!0,A.k3,!1,!1,x.H),$async$aiy)
case 2:return B.h(null,v)}})
return B.i($async$aiy,v)},
c9p(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.p(r,D.bVv,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dY9(d),r,r,r,r,r,r,!1,A.a3),o=B.n(11)
o=B.p(r,D.b9z,A.f,r,r,new B.o(A.bo,r,B.K(A.aJ.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.x(B.a([B.B(B.a([p,A.ad,o,A.ad,B.E(B.x(B.a([D.fN3,B.d(w,r,1,A.a1,r,r,r,B.l(r,r,s.y>0||s.z>0?A.eP:A.hi,r,r,r,r,r,r,r,r,11.5,r,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.i,0,A.p),1),new C.ayh(s.gcfj(),r),A.ta,s.b_x(A.yR,"Construction Lab: real 3D wiring, plumbing and a house",A.cL,new C.dYa(s,d)),s.b_y(A.lH,"Challenges",A.aT,s.gcwx(),s.bHh()),s.b_x(A.OP,"How to play",A.aJ,new C.dYb(d,e))],v),A.m,r,A.e,A.i,0,r,r),A.am,B.B(B.a([s.arK(A.oi,"Circuits",A.br,s.gcpm()),A.bn,s.arK(A.pe,"Repair",A.aT,new C.dYc(s)),A.bn,s.arK(K.wj,"Clear",A.c6,new C.dYd(s))],v),A.m,r,A.e,A.i,0,r,r)],v),A.m,r,A.e,A.O,0,A.p),A.f,r,r,new B.o(I.Bl,r,new B.bH(A.a0,A.a0,new B.ay(q,1,A.r,-1),A.a0),r,r,r,A.n),r,r,r,r,D.bEl,r,r,r)},
B(d){var w=this,v=null
$.asF="tech"
return B.c5(v,A.c1,B.bm(!0,B.x(B.a([w.c9p(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hen(w.d,w.e,w.gc9n(),v),1)],x.p),A.m,v,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
C.ayh.prototype={
R(){return new C.bal(null,null)}}
C.bal.prototype={
gaxZ(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.Z,null,1,null,v)
w.cM(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
q(){this.gaxZ().q()
this.bvj()},
B(d){var w=null,v=this.a.c
return B.aA(w,B.he(new B.a5(42,42,B.cb(this.gaxZ(),new C.cHU(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a3)}}
C.bak.prototype={
a3(d,e){var w,v,u,t=null,s=e.eh(A.I),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.S()
w=B.I()
w.r=A.b6.j(0.25+0.15*o).gp(0)
w.z=N.oz
d.ad(s,r+2+o*2,w)
w=B.I()
w.sam(D.etU.aA(0,B.bY(s,r)))
d.ad(s,r,w)
v=B.I()
v.b=A.a9
v.c=2.2
v.sam(new B.h0(A.A,0,6.283185307179586,A.x,D.cXe,t,new B.mE(p)).aA(0,B.bY(s,r)))
d.ad(s,r,v)
p=new C.cHT(d)
p.$3(s.a7(0,A.t0),8+o*1.5,1)
q*=4
p.$3(s.a7(0,D.eiK),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a7(0,D.el5),2.6,0.5+0.5*Math.cos(q))
u=B.fx(t,t,t,t,D.fgm,A.a4,A.bY,t,A.dA,A.bW)
u.ej()
u.a3(d,s.a7(0,new B.t(-u.b.c/2,5)))},
av(d){return d.b!==this.b}}
C.ayB.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.ayC.prototype={
q(){var w,v,u
for(w=this.h2$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h1$
w===$&&B.c()
w.q()
this.btW()}}
C.aKP.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.byM.prototype={}
C.fS.prototype={}
C.JI.prototype={
a6(){return"ScreenStyle."+this.b}}
C.mn.prototype={}
C.Vd.prototype={
R(){return new C.bkX(null,null)}}
C.bkX.prototype={
ga9W(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.oc,null,1,null,v)
w.cp(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
q(){this.ga9W().q()
this.bx8()},
gSh(){var w=this.ga9W().y
w=w==null?null:A.o.ao(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.mj.h(0,this.a.c)
if(v==null)v=D.aQl
return B.c5(w,X.YN,B.bm(!0,new B.an(A.a_,w,A.ab,A.t,B.a([B.as(v.b===D.A8?this.bJp(v):this.cm7(v),w,w,w),B.ap(w,B.aH(w,w,w,w,A.mQ,w,w,w,new C.dU5(d),w,w,w,B.nO(w,A.aS,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ap(6,B.as(B.d(v.a,w,w,w,w,w,w,D.fi2,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c9q(d){var w
A:{if(D.JD===d){w=0.46153846153846156
break A}if(D.ve===d){w=0.45
break A}if(D.wT===d){w=0.9259259259259258
break A}if(D.TV===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cm7(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.JD
A:{if(D.JD===p){w=44
break A}if(D.ve===p){w=30
break A}if(D.wT===p){w=22
break A}if(D.TV===p){w=26
break A}w=14
break A}v=B.cb(this.ga9W(),new C.dU4(this,w,d,o),q)
if(p===D.a8x)v=new B.Bk(D.bEZ,v,q)
p=this.c9q(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.n(w)
s=B.a([new B.ac(0,A.G,d.d.j(0.28),A.I,36)],x.V)
return new B.fH(p,B.p(q,B.p(q,v,A.f,q,q,new B.o(A.w,q,q,B.n(w-3),q,q,A.n),q,q,q,q,A_.GD,q,q,q),A.f,q,q,new B.o(q,q,q,t,s,new B.a9(A.ay,A.aE,A.x,r,q,q),A.n),q,q,q,D.bys,new B.Q(u,u,u,u),q,q,q),q)},
b7N(d){var w,v,u,t=null,s=new B.V(Date.now(),0,!1),r=A.o.E(this.a.d+A.k.bf(this.gSh()*0.4),0,100),q=d.b===D.JD,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.aX(A.o.u(B.dg(s)),2,"0")+":"+A.a.aX(A.o.u(B.fQ(s)),2,"0"),t,t,t,t,t,t,A.tj,t,t,t),A.b2],x.p)
for(w=0;w<4;++w){v=new B.aP(1,1)
n.push(B.p(t,t,A.f,t,t,new B.o(A.c,t,t,new B.bh(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bEH,t,t,t,3))}n.push(A.db)
n.push(D.fFJ)
n.push(A.bn)
v=B.K(A.ac,A.r,1)
u=B.n(4)
n.push(B.p(t,new B.bM(A.a5,t,t,B.Bx(A.A,B.p(t,t,A.f,t,t,new B.o(A.bf,t,t,B.n(2),t,t,A.n),t,t,t,A_.GD,t,t,t,t),t,r/100),t),A.f,t,t,new B.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qP)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fww,t,t,t))
return new B.D(new B.Q(p,12,o,2),B.B(n,A.m,t,A.e,A.i,0,t,t),t)},
avV(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.n(e*0.26)
w=x.p
t=B.a([B.p(v,B.as(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dla,new B.a9(A.ay,A.aE,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.au,B.d(d.a,v,1,A.a1,v,v,v,D.fmP,v,v,v)],w))
return B.aA(v,B.x(t,A.m,v,A.e,A.O,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dU0(this,d),v,v,v,v,v,v,!1,A.a3)},
c_R(d,e){return this.avV(d,e,!0)},
c_y(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.TV||n===D.wT,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.kb,0.5)
l.toString
l=B.a([k,A.dv,l],x.O)
k=p.b7N(d)
w=m?190:138
v=B.n(24)
u=B.K(A.aX,A.r,1)
w=B.aA(o,B.p(o,B.bx(B.n(23),B.b4(o,o,o,new C.af0(0,p.gSh(),o),A.fF),A.ap),A.f,o,o,new B.o(o,o,u,v,o,o,A.n),o,w,o,A.hO,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dTZ(p),o,o,o,o,o,o,!1,A.a3)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=G.ko[s]
t.push(new B.ce(A.A,o,o,p.c_R(r,m?58:54),o))}k=B.a([k,A.am,w,A.ae,B.E(B.kP(0.92,t,v,8,12,A2.w4,o,!1),1)],u)
if(n!==D.a8x){n=A.c.j(0.16)
w=B.n(28)
u=B.a([],u)
for(v=B.d_(G.ko,0,B.dB(4,"count",x.S),x.gD),t=v.$ti,v=new B.bS(v,v.gL(0),t.k("bS<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.avV(q==null?t.a(q):q,50,!1))}k.push(B.p(o,B.B(u,A.m,o,A.qC,A.i,0,o,o),A.f,o,o,new B.o(n,o,o,w,o,o,A.n),o,o,o,D.bzl,H.alI,o,o,o))}return B.p(o,B.x(k,A.m,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(o,o,o,o,o,new B.a9(A.ay,A.aE,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bCP(d,e){var w=null
return B.p(w,B.x(B.a([this.b7N(d),B.E(B.b4(w,w,w,new C.af0(e,this.gSh(),w),A.fF),1),B.aA(w,B.p(w,B.as(B.d(G.ko[e].a,w,w,w,w,w,w,A.K4,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dTU(this),w,w,w,w,w,w,!1,A.a3)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bJp(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.n(r?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.I,36)],x.V)
return new B.fH(1.5384615384615383,B.p(t,B.cb(this.ga9W(),new C.dTX(this,r,d),t),A.f,t,t,new B.o(t,t,t,v,u,new B.a9(A.ay,A.aE,A.x,w,t,t),A.n),t,t,t,D.bEf,new B.Q(8,8,8,s),t,t,t),t)}}
C.bwO.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.S()
w=B.I()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.kb,0.4)
t.toString
w.sam(new B.a9(A.ay,A.aE,A.x,B.a([u,A.dv,t],x.O),null,null).aA(0,new B.a3(0,0,n,m)))
d.aP(new B.a3(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new B.ao(A.Q,A.M,A.S,A.T,A.R)
r.r=v.j(0.1).gp(0)
r.z=D.dAm
q=r.G()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
av(d){return!0}}
C.af0.prototype={
a3(d,e){return L.RY(d,e,this.b,this.c)},
av(d){return!0}}
C.aMA.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.bvA.prototype={}
C.a8J.prototype={
B(d){var w=null
return B.c5(B.eJ(w,w,w,!0,!0,D.agU,w,1,!0,w,0,!1,w,!1,w,w,B.aH(w,w,w,w,K.aqn,w,w,w,new C.ckA(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fVU,w,w,w,1,w,!0),D.agU,B.cl(B.a([D.emy,B.cv(new C.ckB())],x.p),w,w,D.bAn,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.WO.prototype={
R(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aFM(w,new B.au(A.at,$.ax()),$,A.bA,0,B.a([],x.X),null,null)}}
C.aFM.prototype={
Z(){this.a2()
this.m7()},
b5I(d){var w=this.d.length
return A.o.F(A.k.bf(A.k.F(A.k.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mp(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b5I(v.f)
if(w!==v.x){v.x=w
E.ml("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eQl(v))
C.Je("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
caK(){if(this.d.length<2)return
this.m(new C.eQh(this))},
b01(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eQg(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcaJ(),p=s.d,o=B.E(B.aA(r,B.b4(r,r,r,new C.bx_(p,s.f,r),A.fF),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a3),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a5(r,40,B.as(B.d(n,r,r,r,r,r,r,D.fuC,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aA5[A.o.F(v,8)].j(0.9)
t=new B.aP(20,20)
o.push(B.aA(r,B.p(r,new B.y(p[v],r,D.ftQ,r,r,r,r,r,r,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bh(t,t,t,t),r,r,A.n),r,r,r,A.fu,A.h6,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eQj(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a3))}p=A.c.j(0.07)
return E.lw(A.aT,A.f1,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fc(o,r,r),B.B(B.a([B.E(B.aM(r,A.Y,!1,r,!0,A.t,r,B.aN(),s.e,r,r,r,r,r,2,B.br(r,new B.b5(4,B.n(14),A.a0),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kw,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.aj,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eQk(s),r,!1,r,r,!1,r,!0,r,A.aa,r,r,r,r,r,r,r,r,r,r,r,A.df,!0,A.a4,r,A.an,r,r,r,r),1),A.ad,new E.fD(A.hQ,"Add",s.gcaH(s),A.c,r),A.bn,new E.fD(A.oh,"Spin",q,A.bf,r)],w),A.m,r,A.e,A.i,0,r,r)],w),A.m,r,A.e,A.O,0,A.p))}}
C.bx_.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new B.t(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.S()
w=B.I()
w.r=D.bfN.gp(0)
a1.ad(d,f,w)
w=B.I()
w.b=A.a9
w.c=3
w.r=A.aT.gp(0)
a1.ad(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=B.bY(d,a0)
n=new B.ao(A.Q,A.M,A.S,A.T,A.R)
n.r=D.aA5[A.o.F(q,8)].gp(0)
m=n.G()
n=p*57.29577951308232
f.drawArc.apply(f,[B.bG(o),n,s,!0,m])
m.delete()
o=B.bY(d,a0)
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.G()
f.drawArc.apply(f,[B.bG(o),n,s,!0,m])
m.delete()
J.bl(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.ar(o,0,11)+"\u2026"
k=new B.iN(new B.eu(o,i,i,A.cN,i,i,i,i,i,i,D.fha),A.a4,A.bY,new B.jr(1),i,i,i,i,A.bW,i)
k.ej()
o=k.b
n=o.c
o=o.a.c
k.a3(a1,new B.t(a0-n-16,-o.gbb(o)/2))
f.restore()}f=B.I()
f.r=D.agw.gp(0)
a1.ad(d,20,f)
f=B.I()
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
e=B.I()
e.r=A.c.gp(0)
a1.aH(j,e)
e=B.I()
e.b=A.a9
e.c=2
e.r=A.aS.gp(0)
a1.aH(j,e)},
av(d){return!0}}
C.VC.prototype={
R(){return new C.bl7($,A.bA,0,B.a([],x.X),null,null)}}
C.bl7.prototype={
Z(){this.a2()
this.m7()},
mp(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.Je("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.Uk(900,new C.e_V())}w.m(new C.e_W())},
b03(d){return this.m(new C.e_Q(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aX(A.o.u(A.k.ao(m,60)),2,"0")
v=A.a.aX(A.o.u(A.o.F(A.k.dd(m),60)),2,"0")
m=B.b4(n,n,n,new C.brJ(l,A.c6,n),A.aRE)
u=B.d(w+":"+v,n,n,n,n,n,n,D.flL,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.as(new B.a5(280,280,new B.an(A.A,n,A.ab,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fkL,n,n,n),A.au,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vk,n,n,n)],s),A.m,n,A.e,A.O,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.di7[r]
u.push(new E.dX(""+q+" min",o.d===q,new C.e_S(o,q),n,A.c6,n))}m=o.f
p=m?A4.uy:A.hl
m=m?"Pause":"Start"
return E.lw(A.c6,A.f1,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fc(u,n,n),new E.fc(B.a([new E.fD(p,m,new C.e_T(o),A.bf,n),new E.fD(A.ok,"Reset",new C.e_U(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.O,0,A.p))}}
C.brJ.prototype={
a3(d,e){var w,v,u,t,s=e.eh(A.I),r=e.a/2-14
$.S()
w=B.I()
w.b=A.a9
w.c=16
w.r=A.c.j(0.08).gp(0)
d.ad(s,r,w)
w=B.bY(s,r)
v=B.I()
v.b=A.a9
v.c=16
v.d=A.bB
u=this.c
t=B.ar(u,A.c,0.4)
t.toString
v.sam(new B.h0(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aA(0,B.bY(s,r)))
d.e3(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
av(d){return d.b!==this.b}}
C.UP.prototype={
R(){return new C.bkJ($,A.bA,0,B.a([],x.X),null,null)}}
C.bkJ.prototype={
Z(){this.a2()
this.m7()},
mp(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Sj.h(0,p.d)
w.toString
v=A.d.f4(w,new C.dLE())
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
E.ml("flute",D.c6D[t]+5,1400,0.35)}p.m(new C.dLF())},
gcaN(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.Kx("Press Start",0.5)
w=D.Sj.h(0,this.d)
w.toString
v=A.d.f4(w,new C.dLz())
u=A.k.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.Kx("Breathe in",0.5+0.5*A.dw.aw(0,p))
case 1:return new B.Kx("Hold",1)
case 2:return new B.Kx("Breathe out",1-0.5*A.dw.aw(0,p))
default:return new B.Kx("Hold",0.5)}}}return new B.Kx("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcaN(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hg.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.hg.j(0.35),A.I,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.pG,q,q,q))
n.push(B.ap(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kw,q,q,q),q,q,q,q,q,q))
n=B.as(new B.a5(300,340,new B.an(A.A,q,A.ab,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aW(D.Sj.gew(D.Sj));w.C();){v=w.gS(w)
o.push(new E.dX(v,r.d===v,new C.dLC(r,v),q,A.hg,q))}w=r.e
v=w?A.z1:A.hl
w=w?"Stop":"Start"
o.push(new E.fD(v,w,new C.dLD(r),A.bf,q))
return E.lw(A.hg,A.f1,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fc(o,q,q))}}
C.aJd.prototype={}
C.Vt.prototype={
R(){return new C.bkZ(new B.cw(null,x.A),B.a([],x.au),A.av,A.c)}}
C.bkZ.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aH(s,s,s,s,K.os,s,s,s,new C.dXq(t,d),s,s,s,s,"Share",s)],r),p=B.bx(B.n(18),new B.er(B.aA(s,B.b4(s,s,s,new C.bn_(t.e,t.x,s),A.fF),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dXr(t),new C.dXs(t),s,s,s,s,s,s,s,s,s,new C.dXt(t),s,s,s,s,!1,A.a3),t.d),A.ap),o=B.a([],r)
for(w=0;w<9;++w){v=D.cYL[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.FD(v,u,new C.dXu(t,v),!1,s))}u=t.r
return E.lw(A.bD,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bT,p,s),"DRAW PAD",B.x(B.a([new E.fc(o,s,s),E.iL(A.bD,""+A.k.V(u),"Brush",30,2,new C.dXv(t),u),new E.fc(B.a([new E.dX("Eraser",t.w,new C.dXw(t),A.H0,A.bD,s),new E.fD(A.pi,"Undo",new C.dXx(t),A.c,s),new E.fD(A.e9,"Clear",new C.dXy(t),A.c,s),new E.fD(A.OJ,"Paper",new C.dXz(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.O,0,A.p))}}
C.bn_.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.S()
w=B.I()
w.r=this.c.gp(0)
d.aP(new B.a3(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.L)(w),++s){r=w[s]
q=$.S()
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bB
p.e=A.dQ
p.b=A.a9
m=r.c
if(m.length===1){q=A.d.gI(m)
m=new B.ao(A.Q,A.M,A.S,A.T,A.R)
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
i=new B.c4(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bw(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new B.aq(A.d.gak(m).a,A.d.gak(m).b)
o.push(q)
o=k.f
if(o!=null)q.bw(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.G()
q=k.e
u.drawPath((q==null?k.e=new B.cf(k.gbv().a.snapshot()):q).a,l)
l.delete()}}},
av(d){return!0}}
C.Wb.prototype={
R(){var w=x.S
return new C.aF5(B.aX(w),B.aX(w))}}
C.aF5.prototype={
Z(){this.a2()
this.ate()},
ate(){var w,v,u=this,t=x.N,s=B.bq(D.dni,!0,t)
A.d.D2(s)
w=x.S
v=B.T(s).c
t=B.C(B.d_(s,0,B.dB(u.d,"count",w),v),t)
A.d.v(t,B.d_(s,0,B.dB(u.d,"count",w),v))
A.d.D2(t)
u.e=t
u.f.aa(0)
u.r.aa(0)
u.w=0
u.x=!1},
caI(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
E.ml("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.enc(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gak(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bP(A.mE,new C.end(s,v,u),t)
else{s.x=!0
B.bP(Ab.Ge,new C.ene(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.V0,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ao(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.yo,B.B(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aT:A.ac,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.iJ,A.i,0,q,q),q),B.E(B.io(!0,q,q,A.y,new B.hK(v,8,8,1,q),new C.eni(r),r.e.length,A.bg,q,A.ah,!1),1)],o),A.m,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d_g[t]
o.push(new E.dX(s.b,r.d===s.a,new C.enj(r,s),q,A.aJ,q))}o.push(new E.fD(K.aoW,"New game",new C.enk(r),A.bf,q))
return E.lw(A.aJ,A.f1,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fc(o,q,q))}}
C.Wl.prototype={
R(){return new C.aFq(B.a([],x.t))}}
C.aFq.prototype={
caM(d){A.d.aa(this.d)
this.w=!0
this.b02()},
b02(){this.d.push(A.cK.ap(4))
this.e=0
this.a_x()},
a_x(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_x=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.exZ(t))
s=x.H
w=3
return B.b(B.bP(A.lD,null,s),$async$a_x)
case 3:r=t.d,q=B.bq(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aU3(n)
w=7
return B.b(B.bP(new B.bb(1000*Math.max(280,600-r.length*18)),null,s),$async$a_x)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.ey_(t))
case 1:return B.h(u,v)}})
return B.i($async$a_x,v)},
aU3(d){this.m(new C.exX(this,d))
E.ml("marimba",D.c6C[d]+5,450,0.55)
B.bP(A.Gc,new C.exY(this),x.H)},
caO(d){var w,v,u=this
if(!u.w||u.r)return
u.aU3(d)
w=u.d
v=u.e
if(w[v]!==d){F.dF(90,"",600,0,0.5,"saw")
u.m(new C.ey0(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.ey1(u))
B.bP(A.hv,new C.ey2(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,Q.aU7,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fv0,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.ayY[v]
u=u.j(q.f===v?1:0.35)
t=new B.aP(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.ayY[v].j(0.8),A.I,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.da(p,p,p,p,A.b7,new B.o(u,p,new B.bH(r,r,r,r),new B.bh(t,t,t,t),s,p,A.n),A.je,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.ey3(q,v),p,p,p,p,p,p,!1,A.a3))}o=B.as(new B.D(A.aa,B.x(B.a([o,A.am,n,A.d4,new B.fH(1,B.kP(1,l,2,12,12,p,A.dS,!1),p)],m),A.m,p,A.b9,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lw(A.bu,A.f1,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fc(B.a([new E.fD(A.hl,n,q.gcaL(q),A.bf,p)],m),p,p))}}
C.WF.prototype={
R(){return new C.bmd(new B.au(A.at,$.ax()))}}
C.bmd.prototype={
awM(d){return B.oV(A.k.ac(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eLQ(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.d4(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eLZ()
l=B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),l,m,m,m,m,m,2,B.br(m,m,m,m,m,m,m,m,!0,new B.b5(4,B.n(16),A6.xv),m,m,m,m,m,m,m,m,m,m,m,new B.b5(4,B.n(16),D.b2d),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lR,"Bill amount",!0,!0,!1,m,m,m,m,D.fso,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,A.e1,m,m,m,1,m,m,!1,"\u2022",m,new C.eLV(n),m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,A.aT6,!0,A.a4,m,A.an,m,m,m,m)
k=A.bf.j(0.1)
s=B.n(20)
r=B.K(A.bf.j(0.35),A.r,1)
q=x.p
s=B.cl(B.a([l,A.bx,B.p(m,B.x(B.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.awM(w)),t.$2("Total","$"+n.awM(v)),A3.N7,t.$3$big("Each of "+n.f+" pays","$"+n.awM(u),!0)],q),A.m,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bQ,m,m,m)],q),m,m,A.fl,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cKJ[p]
r.push(new E.dX(""+o+"%",A.k.V(n.e)===o,new C.eLW(n,o),m,A.bf,m))}l=n.f
return E.lw(A.bf,A.f1,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fc(r,"TIP",m),E.iL(A.aJ,""+l,"People",20,1,new C.eLX(n),l),new E.fc(B.a([new E.dX("Round up",n.r,new C.eLY(n),m,A.aT,m)],q),m,m)],q),A.m,m,A.e,A.O,0,A.p))}}
C.Wa.prototype={
R(){var w=B.a([3,5],x.t)
return new C.blI(w,A.cK,$,A.bA,0,B.a([],x.X),null,null)}}
C.blI.prototype={
Z(){this.a2()
this.m7()},
mp(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.k.bf(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.ap(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.ap(6)+1)
u.f=t
E.WH("snare",0,0.5)}u.m(new C.elS())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h4()
u.w=t
u.x=t?0:3.141592653589793
E.ml("bell",24,400,0.5)}u.m(new C.elT())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bez(v,o.r>0,n))}u=B.aA(n,B.as(B.bX(A.fI,m,A.bq,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.elL(o),n,n,n,n,n,n,!1,A.a3)}else if(m==="coin"){t=A.k.E(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.K(A.d2,A.r,6)
s=B.a([new B.ac(0,A.G,A.aT.j(0.4),A.I,30)],x.V)
u=B.aA(n,B.as(B.ee(A.A,B.p(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fry,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.etY,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.elM(o),n,n,n,n,n,n,!1,A.a3)}else{m=o.as
u=B.aA(n,B.as(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.fgE,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kw,n,n,n)],x.p),A.m,n,A.e,A.O,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.elN(o),n,n,n,n,n,n,!1,A.a3)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dfr[r]
v.push(new E.dX(q.b,o.d===q.a,new C.elO(o,q),q.c,A.br,n))}v=B.a([new E.fc(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iL(A.br,""+s,"Dice",4,1,new C.elP(o),s))}if(o.d==="num"){s=o.z
s=E.iL(A.br,""+s,"From",100,1,new C.elQ(o),s)
p=o.Q
A.d.v(v,B.a([s,E.iL(A.br,""+p,"To",1000,2,new C.elR(o),p)],m))}return E.lw(A.br,A.f1,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.m,n,A.e,A.O,0,A.p))}}
C.bez.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cK.af()-0.5)*0.6
else w=0
v=B.n(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cy,14)],x.V)
t=B.a([],x.p)
for(s=D.dz9.h(0,A.o.E(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bM(s[q],p,p,B.p(p,p,A.f,p,p,O.adr,p,18,p,p,p,p,p,18),p))
return B.eM(A.A,w,B.p(p,new B.an(A.a_,p,A.ab,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bE,p,p,100),p)}}
C.aMo.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.byI.prototype={
q(){var w,v,u
for(w=this.h2$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h1$
w===$&&B.c()
w.q()
this.bwX()}}
C.aMH.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.byO.prototype={
q(){var w,v,u
for(w=this.h2$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h1$
w===$&&B.c()
w.q()
this.bxg()}}
C.aN9.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.byX.prototype={
q(){var w,v,u
for(w=this.h2$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h1$
w===$&&B.c()
w.q()
this.bxK()}}
C.aNA.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.bz5.prototype={
q(){var w,v,u
for(w=this.h2$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h1$
w===$&&B.c()
w.q()
this.bya()}}
var z=a.updateTypes(["R(tL)","~()","R(a4T)","aB<~>()","R(CH)","G(tL,G)","J(J,tL)","R(CD)","R(ZK)","R(abQ)","R(a3z)","R(nz)","WG()","UO()","a8J()","Wg()","Wv()","Wh()","R(mR)","UT()","afj(Y,G)","aea(Y,G)","~(a8<@,@>)","G(CD,CD)","m(ei)","R(af7)","R(a1_)","R(CR)","R(acj)","R(aed)","R(ac3)","G(G,r2)","G(G,CH)","m(r2)","~(r2,ai<m>,G)","r2?(CH)","Wa()","v(m,a0N)","R(aaK)","~(AM)","WJ()","~(xj,m,t,u,J)","~(m,tL)","Vu()","VV(Y)","NI(Y)","Vd(Y,bu<J>,bu<J>)","WO()","VC()","UP()","Vt()","Wb()","Wl()","WF()","R(r2)"])
C.fF9.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fuA.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gI(d.e.split(". "))+"."},
$S:z+24}
C.fBM.prototype={
$1(d){var w
if(!this.a.M3(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fBN.prototype={
$1(d){return d.x},
$S:z+0}
C.fF6.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fF7.prototype={
$1(d){var w
if(!this.a.M3(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fF8.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.ef_.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ef0.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.z(this.b,this.c))},
$S:0}
C.ef1.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd3(v).Q
v.toString
w.mh(v,A.dU,A.iC)}},
$S:8}
C.efc.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.aa(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.efd.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.ef8.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.ef6.prototype={
$2(d,e){var w=this.a
w.r.push(B.cG(B.dx(0,0,0,d,0,0),new C.ef7(w,this.b,e)))},
$S:1882}
C.ef7.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.ef9.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gWJ().akB(0,u[1],u[2],u[3])
u[4].bQ(0,new C.ef4(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
F.dF(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.ef5(w.a,v,w.f,w.r))},
$S:0}
C.ef4.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:200}
C.ef5.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bf(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.efa.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gWJ().ali(t,u[1],s,u[3])
F.dF(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.ef3(w.a,v,w.e,w.f))},
$S:0}
C.ef3.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bf(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.efb.prototype={
$0(){F.dF(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.ef2(w,this.b))},
$S:0}
C.ef2.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.efg.prototype={
$0(){var w=this.a
return w.m(new C.eff(w))},
$S:0}
C.eff.prototype={
$0(){return this.a.at=!0},
$S:0}
C.efh.prototype={
$0(){var w=this.a
return w.m(new C.efe(w))},
$S:0}
C.efe.prototype={
$0(){return this.a.at=!1},
$S:0}
C.efi.prototype={
$0(){var w=this.a
w.f.saY(0,this.b)
w.Px()},
$S:0}
C.efj.prototype={
$0(){return this.a.YM(this.b)},
$S:0}
C.efk.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Px():w.aX1()},
$S:2}
C.efl.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Px():w.aX1()},
$S:0}
C.eui.prototype={
$2(d,e){return d+e},
$S:1883}
C.euC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.euB(w,d))},
$S:1884}
C.euB.prototype={
$0(){var w=B.aK(J.r(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.euD.prototype={
$0(){},
$S:0}
C.euE.prototype={
$0(){},
$S:0}
C.euk.prototype={
$0(){return this.a.m(new C.euj(this.b,this.c))},
$S:0}
C.euj.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eu9.prototype={
$1(d){return this.a.cx===d},
$S:34}
C.eua.prototype={
$1(d){return this.a.cx=d},
$S:29}
C.eub.prototype={
$1(d){return this.a.cy===d},
$S:34}
C.euc.prototype={
$1(d){return this.a.cy=d},
$S:29}
C.eud.prototype={
$1(d){return this.a.db===d},
$S:34}
C.eue.prototype={
$1(d){return this.a.db=d},
$S:29}
C.euf.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:34}
C.eug.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.M(0,d)},
$S:29}
C.euh.prototype={
$0(){var w=this.a
return w.m(w.gaxm())},
$S:0}
C.eu7.prototype={
$1(d){return this.a.$1(!0)},
$S:71}
C.eu8.prototype={
$1(d){return this.a.$1(!1)},
$S:111}
C.eu6.prototype={
$1(d){return this.a.$1(!1)},
$S:141}
C.euv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bit(o,p),n)
w=this.b
v=C.bBi("WORLD",w.a,w.c)
u=C.bBi("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.c6:A.bf
t=C.bBi("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.D_[o.db].d?A.c6:A.c
q=x.p
s=B.a([v,u,t,C.bBi("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(C.bBi("HEIGHT",""+A.k.V(A.k.E(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ap(p,B.B(s,A.m,p,A.iJ,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bFQ(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rM[w].a+".":"You landed on every world!"
v=B.a([new E.fD(A.ol,"Again",new C.euq(o),A.c,p),new E.fD(A.pe,"Rebuild",new C.eur(o),A.aT,p)],q)
if(o.d+1<7)v.push(new E.fD(A.jA,"Next world",new C.eus(o),A.bf,p))
n.push(C.ht9("Perfect landing!",w,A.bf,v))}if(o.as==="crashed")n.push(C.ht9("Crash!",o.at,A.c6,B.a([new E.fD(A.ol,"Try again",new C.eut(o),A.bf,p),new E.fD(A.pe,"Rebuild",new C.euu(o),A.aT,p)],q)))
return new B.an(A.a_,p,A.b3,A.t,n,p)},
$S:64}
C.euq.prototype={
$0(){var w=this.a
return w.m(w.gaxm())},
$S:0}
C.eur.prototype={
$0(){var w=this.a
return w.m(new C.eun(w))},
$S:0}
C.eun.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eus.prototype={
$0(){var w=this.a
return w.m(new C.eum(w))},
$S:0}
C.eum.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eut.prototype={
$0(){var w=this.a
return w.m(w.gaxm())},
$S:0}
C.euu.prototype={
$0(){var w=this.a
return w.m(new C.eul(w))},
$S:0}
C.eul.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.euw.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.eup(v,w))},
$S:0}
C.eup.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eux.prototype={
$1(d){return this.a.y=d},
$S:9}
C.euy.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.euz.prototype={
$1(d){return this.a.z=d},
$S:9}
C.euA.prototype={
$0(){var w=this.a
return w.m(new C.euo(w))},
$S:0}
C.euo.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dLx.prototype={
$0(){var w=0,v=B.j(x.h),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=$.hoo
if(q==null)q=$.hoo=C.cLv()
w=3
return B.b(B.iW(B.a([q,$.ra().cT_("assets/data/three.min.js")],x.D),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kR(0,B.cP(J.r(s,1)))
q.m(new C.dLw(q,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:51}
C.dLw.prototype={
$0(){return this.a.d=x.m.a(J.r(this.b,0))},
$S:0}
C.dL9.prototype={
$0(){return this.a.bXw(B.aT(J.r(this.b,"group")))},
$S:0}
C.dLa.prototype={
$1(d){return A.a.aX(A.o.fv(A.o.E(A.k.V(d*255),0,255),16),2,"0")},
$S:319}
C.dLy.prototype={
$0(){return E.WH("kick",0,0.25)},
$S:0}
C.dLb.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dLc.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dLd.prototype={
$0(){return E.WH("kick",0,0.5)},
$S:0}
C.dLe.prototype={
$0(){return F.dF(1300+this.a.R8.ap(900),"",40,0,0.2,"square")},
$S:0}
C.dLg.prototype={
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
u=w}if(u.cx!=null&&!A.d.b3(u.d.e,new C.dLf(u)))u.cx=null
u.go=0},
$S:0}
C.dLf.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.az7(d)},
$S:z+10}
C.dL6.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
C.dL7.prototype={
$0(){var w=this.a
return w.m(w.gc77())},
$S:0}
C.dL8.prototype={
$0(){return this.a.ae8(null)},
$S:0}
C.dLn.prototype={
$0(){var w=this.a.as
return w==null?null:w.f6(0,B.H(["t","shot"],x.N,x.z))},
$S:0}
C.dLo.prototype={
$0(){return this.a.cD4(this.b.a)},
$S:0}
C.dLp.prototype={
$0(){return this.a.ae8(this.b)},
$S:0}
C.dLq.prototype={
$1(d){var w=this.a
return w.m(new C.dLm(w,d))},
$S:6}
C.dLm.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.dLr.prototype={
$0(){var w=this.a
return w.m(new C.dLl(w,this.b))},
$S:0}
C.dLl.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.dLs.prototype={
$0(){var w=this.a
return w.m(new C.dLk(w))},
$S:0}
C.dLk.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.dLt.prototype={
$0(){var w=this.a
return w.m(new C.dLj(w))},
$S:0}
C.dLj.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f6(0,B.H(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Ll},
$S:0}
C.dLu.prototype={
$0(){var w=this.a
return w.m(new C.dLi(w))},
$S:0}
C.dLi.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aZI()
else w.p2=null},
$S:0}
C.dLv.prototype={
$0(){var w=this.a
return w.m(new C.dLh(w))},
$S:0}
C.dLh.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
C.c56.prototype={
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
$S:322}
C.c57.prototype={
$1(d){var w=new B.r_([],[]).oA(d.data,!0)
if(x.f.b(w)&&J.r(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:445}
C.fo0.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)},
$S:238}
C.fo1.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)||w.h(d,1)},
$S:238}
C.fo2.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)!==w.h(d,1)},
$S:238}
C.fo9.prototype={
$1(d){return!J.r(d,0)},
$S:238}
C.foa.prototype={
$1(d){var w=J.a6(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:238}
C.fob.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:238}
C.dNc.prototype={
$1(d){return this.a.au3(0)},
$S:8}
C.dMR.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.iab(),B.T(w).k("N<1,G>")).fJ(0)},
$S:0}
C.dMU.prototype={
$1(d){return""+d},
$S:74}
C.dNd.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dMP.prototype={
$1(d){return this.a.au3(this.b)},
$S:8}
C.dMQ.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.axR(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mF(0,d,a1.m8(0.15,0.3))
u=a1.mF(0,d,a1.m8(0.15,0.62))
t=a1.mF(0,"and",a1.m8(0.48,0.46))
s=a1.mF(0,a0,a1.m8(0.82,0.46))
a1=t.a
w.push(new C.nz(v.a,a1,0))
w.push(new C.nz(u.a,a1,1))
w.push(new C.nz(a1,s.a,0))
break
case 1:v=a1.mF(0,d,a1.m8(0.12,0.25))
u=a1.mF(0,d,a1.m8(0.12,0.65))
r=a1.mF(0,"xor",a1.m8(0.46,0.25))
q=a1.mF(0,"and",a1.m8(0.46,0.65))
p=a1.axQ(0,a0,a1.m8(0.82,0.25),0)
o=a1.axQ(0,a0,a1.m8(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nz(a1,n,0))
m=u.a
w.push(new C.nz(m,n,1))
l=q.a
w.push(new C.nz(a1,l,0))
w.push(new C.nz(m,l,1))
w.push(new C.nz(n,p.a,0))
w.push(new C.nz(l,o.a,0))
break
case 2:k=a1.mF(0,"clock",a1.m8(0.15,0.4))
j=a1.mF(0,"not",a1.m8(0.45,0.65))
s=a1.mF(0,a0,a1.m8(0.82,0.3))
i=a1.mF(0,"buzzer",a1.m8(0.82,0.65))
a1=k.a
w.push(new C.nz(a1,s.a,0))
n=j.a
w.push(new C.nz(a1,n,0))
w.push(new C.nz(n,i.a,0))
break
default:h=a1.mF(0,d,a1.m8(0.12,0.25))
g=a1.mF(0,d,a1.m8(0.12,0.7))
f=a1.mF(0,"nor",a1.m8(0.5,0.25))
e=a1.mF(0,"nor",a1.m8(0.5,0.7))
s=a1.mF(0,a0,a1.m8(0.86,0.25))
a1=f.a
w.push(new C.nz(g.a,a1,0))
n=e.a
w.push(new C.nz(n,a1,1))
w.push(new C.nz(h.a,n,0))
w.push(new C.nz(a1,n,1))
w.push(new C.nz(a1,s.a,0))}},
$S:0}
C.dMV.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.axR(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.CD(p,"switch",new B.t(0.14*q.a,r*q.b),0))}o.mF(0,w.e,o.m8(0.86,0.5))},
$S:0}
C.dMK.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dML.prototype={
$2(d,e){return A.k.aL(d.c.b,e.c.b)},
$S:z+23}
C.dMM.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dMN.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dMO.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.adt(this.c)
if(v.ax)C.Je("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gI(w)
v.CW=!1
if(v.ax)F.dF(140,"",250,0,0.3,"square")}},
$S:0}
C.dMW.prototype={
$0(){},
$S:0}
C.dMX.prototype={
$0(){return A.d.cz(this.a.e,this.b)},
$S:0}
C.dMY.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dMT.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bs(w.e,new C.dMS(v))
w.cy=null},
$S:0}
C.dMS.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dMJ.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mF(0,this.b,new B.t(w.x.a*(0.3+v.af()*0.4),w.x.b*(0.2+v.af()*0.6))).a},
$S:0}
C.dN6.prototype={
$0(){var w=this.a
return w.m(new C.dN5(w))},
$S:0}
C.dN5.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dN7.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aA(A.c5,B.jj(B.b4(w,w,w,new C.bcr(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dN0(v),w,w,w,new C.dN1(v),new C.dN2(v),new C.dN3(v),w,w,w,w,w,w,w,w,w,w,new C.dN4(v),w,w,w,!1,A.a3)},
$S:36}
C.dN4.prototype={
$1(d){return this.a.c8T(d.b)},
$S:70}
C.dN2.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cht(u)
if(t!=null){v.as=t
v.at=u
return}w=v.ayF(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aE(0,u)}},
$S:47}
C.dN3.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.t(A.k.E(w.a+u.Q.a,46,u.x.a-46),A.k.E(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
C.dN1.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c07(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bs(v,new C.dMZ(w))
u=t.as
u.toString
v.push(new C.nz(u,w.a,w.b))
B.jO()}}t.z=t.as=null},
$S:38}
C.dMZ.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dN0.prototype={
$1(d){return this.a.awF(d.b)},
$S:314}
C.dN8.prototype={
$0(){return this.a.bBF(this.b.a)},
$S:0}
C.dN9.prototype={
$0(){return this.a.au3(this.b.a)},
$S:0}
C.dNa.prototype={
$0(){var w=this.a
return w.m(new C.dN_(w))},
$S:0}
C.dN_.prototype={
$0(){var w=this.a
w.axR(0)
w.ay=null},
$S:0}
C.dNb.prototype={
$0(){return this.a.cyN(this.b)},
$S:0}
C.cSp.prototype={
$0(){var w=this,v=null,u=B.fx(v,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.bY,v,A.dA,A.bW)
u.ej()
return u},
$S:271}
C.dT8.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dT7.prototype={
$0(){return this.a.d=null},
$S:0}
C.dTa.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c1W()},
$S:129}
C.dT9.prototype={
$0(){return B.a4(this.a,!1).ih()},
$S:0}
C.fos.prototype={
$0(){return K.aJA},
$S:z+40}
C.fot.prototype={
$0(){return D.dKw},
$S:z+43}
C.fou.prototype={
$0(){return D.dHr},
$S:z+13}
C.fov.prototype={
$0(){return D.eaJ},
$S:z+14}
C.fow.prototype={
$0(){return D.dTC},
$S:z+15}
C.fox.prototype={
$0(){return K.aJr},
$S:z+16}
C.foy.prototype={
$0(){return D.e8v},
$S:z+17}
C.foz.prototype={
$0(){return K.aJz},
$S:z+12}
C.foA.prototype={
$0(){return D.dJF},
$S:z+19}
C.f4_.prototype={
$2(d,e){return new C.afj($.bFL()[e],new C.f3Z(e,this.a),null)},
$S:z+20}
C.f3Z.prototype={
$0(){var w=this.a,v=I.aH5.h(0,$.bFL()[w].a)
$.asF=v==null?"music":v
B.a4(this.b,!1).cc(B.eh(new C.f3X(w),!1,null,x.H))},
$S:0}
C.f3X.prototype={
$1(d){return $.bFL()[this.a].e.$0()},
$S:39}
C.f40.prototype={
$2(d,e){return new C.aea(D.azD[e],new C.f3Y(this.a,e),null)},
$S:z+21}
C.f3Y.prototype={
$0(){return this.a.d.$1(D.azD[this.b])},
$S:0}
C.f3G.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f3F.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f3E.prototype={
$1(d){var w=this
return new B.e0(new C.f3D(w.a,w.b,w.c,w.d),null)},
$S:21}
C.f3D.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.l,a1=B.aG(a2,d,a0).w
a0=B.aG(a2,d,a0).w
w=x.p
v=B.a([D.fCx,A.au,D.fJk,A.ae],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new B.aP(12,12)
m=new B.aP(12,12)
m=B.a([new B.bA(1,A.bd,B.aM(d,A.Y,!1,d,!0,A.t,d,B.aN(),r[p],d,d,d,d,d,2,new B.e6(d,d,d,d,d,d,d,d,d,d,"Title",d,N.Ej,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b5(4,new B.bh(n,n,n,n),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.aa,d,d,d,d,d,d,d,d,d,d,d,A.jm,!0,A.a4,d,A.an,d,d,d,d),d),A.ad,new B.bA(2,A.bd,B.aM(d,A.Y,!1,d,!0,A.t,d,B.aN(),q[p],d,d,d,d,d,2,new B.e6(d,d,d,d,d,d,d,d,d,d,"Small line",d,N.Ej,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b5(4,new B.bh(m,m,m,m),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.aa,d,d,d,d,d,d,d,d,d,d,d,A.jm,!0,A.a4,d,A.an,d,d,d,d),d)],w)
n=B.a([],w)
for(l=0;l<30;++l){k=D.dup[l]
j=new B.aP(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}h=A.d.gI(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}g=A.d.gI(i)}else g=A.bC
f=new B.ay(g,u[p].A(0,k)?1.8:1,A.r,-1)
n.push(B.aA(d,B.p(d,B.X(k,u[p].A(0,k)?A.c:A.aR,d,d,d,22),A.f,d,d,new B.o(h,d,new B.bH(f,f,f,f),new B.bh(j,j,j,j),d,d,A.n),d,d,d,A.fu,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.f3B(a3,p,u,k),d,d,d,d,d,d,!1,A.a3))}A.d.v(v,B.a([new B.y("SLAB "+o,d,D.frR,d,d,d,d,d,d,d,d,d),A.am,new B.cd(A.aM,A.e,A.i,A.m,d,A.p,d,0,m,d),A.P,new B.a5(d,44,B.cl(n,d,d,d,d,d,A.aM,!1),d),A.aA],w))}v.push(B.bI(A.x5,d,new C.f3C(t,r,q,u,a2),d))
return new B.D(new B.Q(0,0,0,a1.f.d),B.bm(!0,new B.cT(new B.aZ(0,1/0,0,a0.a.b*0.86),B.cl(v,d,d,A0.yp,d,d,A.ah,!0),d),!0,!1,A.af,!0,!0),d)},
$S:102}
C.f3B.prototype={
$0(){var w=this
return w.a.$1(new C.f3A(w.b,w.c,w.d))},
$S:0}
C.f3A.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f3C.prototype={
$0(){var w=this,v=w.a
v.m(new C.f3z(v,w.b,w.c,w.d))
B.a4(w.e,!1).O(null)},
$S:0}
C.f3z.prototype={
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
C.f3O.prototype={
$0(){var w=this.a
return w.m(new C.f3N(w))},
$S:0}
C.f3N.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f3P.prototype={
$0(){return E.ut(this.b,this.a.f,"scene")},
$S:0}
C.f3Q.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gI(u),A.d.gak(u),0.4)
u.toString
w=this.a.ga_7().x
w===$&&B.c()
return B.c3(v,new B.o(v,v,v,v,v,new B.c2(D.b_Z,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c1],x.O),v,v),A.n),A.bh)},
$S:340}
C.f3R.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.as(B.eO(A.A,B.cb(new B.h8(B.a([u.guk(),u.ga_7()],x.dS)),new C.f3M(u,this.b,v),w),A.f,A.e3),w,w,w)},
$S:231}
C.f3M.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guk().x
r===$&&B.c()
w=r<0.9?1:1-C.bsF(r,0.9,0.98)
v=s.ga_7().x
v===$&&B.c()
u=A.dw.aw(0,v)
switch(s.gaxS().a){case 0:s=s.bAR(t.b,r,u,t.c)
break
case 1:s=s.bRD(t.b,r,u,t.c)
break
case 2:s=s.cDx(t.b,r,u,t.c)
break
case 3:s=s.bDM(t.b,r,u,t.c)
break
case 4:s=s.bH5(t.b,r,u,t.c)
break
case 5:s=s.c8U(t.b,r,u,t.c)
break
default:s=null}return B.db(s,w)},
$S:229}
C.f3S.prototype={
$2(d,e){var w=B.awe(this.b),v=this.c.d,u=B.ar(A.d.gI(v),A.d.gak(v),0.4)
u.toString
v=B.ar(A.d.gI(v),A.d.gak(v),0.4)
v.toString
v=w.cMk(u,A.bC,v,3.5)
u=this.a
w=u.guk().x
w===$&&B.c()
return B.aaw(B.kQ(null,null,null,1,0,new C.f3L(u),A.k.E(w,0,1)),v)},
$S:1886}
C.f3L.prototype={
$1(d){var w=this.a
w.guk().sp(0,d)
if(w.as)w.m(new C.f3H(w))},
$S:6}
C.f3H.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f3T.prototype={
$0(){var w=this.a
w.guk().sp(0,0)
w.aey()},
$S:0}
C.f3U.prototype={
$1(d){var w=this.a
w.m(new C.f3K(w,d))
if(w.as)w.aey()},
$S:6}
C.f3K.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f3V.prototype={
$0(){var w=this.a
w.m(new C.f3J(w,this.b))
w.guk().sp(0,0)
if(w.as)w.aey()},
$S:0}
C.f3J.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f3W.prototype={
$0(){var w=this.a
return w.m(new C.f3I(w,this.b))},
$S:0}
C.f3I.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.f3x.prototype={
$2(d,e){return A.k.aL(d.a,e.a)},
$S:1887}
C.f3y.prototype={
$1(d){return d.b},
$S:1888}
C.dnq.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dnr.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dnn.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dno.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dnp.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dns.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dnt.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dnu.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dnv.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dnw.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dnx.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dny.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dnz.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dnA.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.etD.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ets.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.etu.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.etv.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.ety.prototype={
$1(d){var w=D.mS.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.etz.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.T(q),o=x.dg,n=B.C(new B.ef(new B.cQ(new B.Z(q,new C.etA(d),p.k("Z<1>")),new C.etB(r),p.k("cQ<1,r2?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aG(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.L)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.etA.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.etB.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.etw.prototype={
$1(d){return D.mS.h(0,d.b).c===D.xo},
$S:z+54}
C.etx.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eu2.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.E((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vo(0,u)
w.a7_(A.o.ao(v,1000))},
$S:8}
C.etC.prototype={
$0(){},
$S:0}
C.eto.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$$0)
case 6:e.au("String","ngmy_core_reaction_lab_v1",s.a.d.ah())
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
C.etF.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.x(B.a([A.P,B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.X(D.mS.h(0,v).b,D.mS.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fUP,w,B.d(D.mS.h(0,v).a,w,w,w,w,w,w,A.fS,w,w,w),w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,W.aqr,w,w,w,w,new C.etE(d),!1,w,w,w,w,w,w,w,D.fMa,w,w,w)],x.p),A.m,w,A.e,A.O,0,A.p),!0,!1,A.af,!0,!0)},
$S:27}
C.etE.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.etH.prototype={
$1(d){var w,v,u=null,t=B.aG(d,u,x.l).w,s=B.a([D.emm],x.p)
for(w=0;w<6;++w){v=D.aA_[w]
s.push(B.dG(!1,u,u,u,!0,u,u,u,!0,u,u,D.bZL,u,u,u,u,new C.etG(d,v),!1,u,u,u,u,u,new B.y(v.b,u,A.lR,u,u,u,u,u,u,u,u,u),u,new B.y(v.a,u,A.fS,u,u,u,u,u,u,u,u,u),u,u,u))}return B.bm(!0,new B.cT(new B.aZ(0,1/0,0,t.a.b*0.7),B.cl(s,u,u,D.bE8,u,u,A.ah,!0),u),!0,!1,A.af,!0,!0)},
$S:27}
C.etG.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.etr.prototype={
$1(d){var w=null
return B.ep(B.a([B.bN(!1,A.di,w,w,!0,w,w,w,new C.etp(d),w,w),B.bN(!1,A.Eo,w,w,!0,w,w,w,new C.etq(d),w,w)],x.p),w,w,I.nj,D.fJv,w,w,w,w,D.fMs,w)},
$S:19}
C.etp.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.etq.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.eu0.prototype={
$0(){var w=this.a
return w.m(new C.eu_(w))},
$S:0}
C.eu_.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eu1.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.mx(new C.etR(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bat:t
v=B.a([B.b4(u,t,t,new C.bir(w,v,new C.etS(r),new C.etT(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ap(t,B.dZ(B.cb(w,new C.etU(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bIL())
return B.aA(A.c5,B.jj(new B.an(A.a_,t,A.b3,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.etV(r),t,r.gciM(),t,new C.etW(r),new C.etX(r),new C.etY(r),t,t,t,t,t,t,t,t,t,t,new C.etZ(r),t,t,t,!1,A.a3)},
$S:36}
C.etR.prototype={
$0(){return this.a.acx(this.b)},
$S:0}
C.etZ.prototype={
$1(d){return this.a.cBl(d.b)},
$S:70}
C.etX.prototype={
$1(d){return this.a.ciN(d.b)},
$S:47}
C.etY.prototype={
$1(d){return this.a.ciO(d.b)},
$S:18}
C.etW.prototype={
$1(d){return this.a.b29()},
$S:38}
C.etV.prototype={
$1(d){return this.a.ade(d.b)},
$S:314}
C.etS.prototype={
$0(){return this.a.z},
$S:671}
C.etT.prototype={
$0(){return this.a.Q},
$S:732}
C.etU.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bN1()
if(p.length===0)return A.bJ
w=A.w.j(0.55)
v=B.n(14)
u=B.K(A.bC,A.r,1)
t=B.a([D.fGU,A.cS],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.L)(p),++r)t.push(new B.y(p[r],q,D.fqu,q,q,q,q,A.a1,q,2,q,q))
return B.p(q,B.x(t,A.E,q,A.e,A.O,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h6,q,q,q)},
$S:58}
C.ett.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.n(12),t=B.K(e.j(0.6),A.r,1),s=x.p
return new B.D(A.ec,B.B(B.a([B.p(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bb,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,Ac.UW,w,w,w),A.bF,B.d(g,w,w,w,w,w,w,G.aa3,w,w,w)],s),A.E,w,A.e,A.i,0,A.p),1)],s),A.E,w,A.e,A.i,0,w,w),w)},
$S:1890}
C.etN.prototype={
$0(){var w=this.a.c
w.toString
return B.a4(w,!1).ih()},
$S:0}
C.etO.prototype={
$0(){var w=this.a
return w.m(new C.etM(w))},
$S:0}
C.etM.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.etP.prototype={
$0(){var w=this.a
return w.m(new C.etL(w))},
$S:0}
C.etL.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.etQ.prototype={
$0(){var w=this.a
return w.m(new C.etK(w))},
$S:0}
C.etK.prototype={
$0(){return this.a.r=!0},
$S:0}
C.etJ.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.mS.gdV(D.mS),w=w.gag(w);w.C();){v=w.gS(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.L)(p),++r)u.push(s.cw5(p[r]))
return new B.D(R.ajM,B.x(B.a([new B.D(Ah.alr,w,q),B.B(u,A.m,q,A.e,A.i,0,q,q)],v),A.E,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.etI.prototype={
$0(){return this.a.c9_(this.b)},
$S:0}
C.dnm.prototype={
$0(){var w=this,v=null,u=B.fx(v,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.bY,v,A.dA,A.bW)
u.ej()
return u},
$S:271}
C.bOr.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bOC.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bOx.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bOD.prototype={
$1(d){return this.a.M3(d)&&!d.x},
$S:z+0}
C.bOE.prototype={
$2(d,e){return Math.max(d,this.a.aBv(e))},
$S:z+6}
C.bOG.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bOH(w))},
$S:z+5}
C.bOH.prototype={
$0(){return this.a.a},
$S:98}
C.bOF.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:78}
C.bOI.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bOJ(w))},
$S:z+5}
C.bOJ.prototype={
$0(){return this.a.a},
$S:98}
C.bOt.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bOu(w))},
$S:z+5}
C.bOu.prototype={
$0(){return this.a.a},
$S:98}
C.bOs.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:78}
C.bOv.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bOw(w))},
$S:z+5}
C.bOw.prototype={
$0(){return this.a.a},
$S:98}
C.bOq.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bOK.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bOy.prototype={
$1(d){return d!==this.b&&this.a.aHL(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bOB.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bOA.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bOz.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bJ3.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bJ4.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.cqP.prototype={
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
$S:200}
C.fQX.prototype={
$1(d){var w
$.S()
w=B.I()
w.r=d.gp(0)
return w},
$S:1891}
C.fQZ.prototype={
$2(d,e){var w
$.S()
w=B.I()
w.b=A.a9
w.c=e
w.r=d.gp(0)
w.d=A.bB
return w},
$S:1892}
C.fR_.prototype={
$5(d,e,f,g,h){return B.bs(new B.a3(d,e,d+f,e+g),new B.aP(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1893}
C.fQY.prototype={
$3(d,e,f){var w
$.S()
w=B.I()
w.sam(new B.a9(A.b0,A.b5,A.x,B.a([e,f],x.O),null,null).aA(0,d))
return w},
$S:1894}
C.bII.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bIJ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bIH(w))},
$S:0}
C.bIH.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bIK.prototype={
$0(){return B.a([],x.k)},
$S:1895}
C.bIL.prototype={
$1(d){return this.a.bF(d).a>15e5},
$S:464}
C.bIM.prototype={
$0(){var w,v,u
J.bFU(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.CI(v))if(C.h9I(v.b))w.b1D(v)
else w.a09(v)
else{u=w.a.c.bek(v)
w.aeK(u==null?"The "+$.qw().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bIG.prototype={
$1(d){return new B.e0(new C.bIE(this.a,this.b),null)},
$S:21}
C.bIE.prototype={
$2(d,e){var w=null,v=this.b,u=new C.bIF(this.a,v,e),t=$.qw(),s=v.b,r=B.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.k6,w,w,w),q=B.aH(w,w,w,w,D.bQe,w,w,w,new C.bIA(u,v),w,w,w,w,w,w),p=A.k.E(v.ch,1,2.6),o=x.p
return B.bm(!0,new B.D(A.w5,B.x(B.a([r,A.au,D.fVS,A.W,B.B(B.a([q,B.E(B.kQ(t.h(0,s).d,w,w,2.6,1,u,p),1),B.aH(w,w,w,w,D.bX4,w,w,w,new C.bIB(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.i,0,w,w),B.B(B.a([B.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,B.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b2,B.bN(!1,D.fyO,w,w,!0,w,w,w,new C.bIC(u),w,w),B.bN(!1,A.x5,w,w,!0,w,w,w,new C.bID(d),w,w)],o),A.m,w,A.e,A.i,0,w,w)],o),A.E,w,A.e,A.O,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:87}
C.bIF.prototype={
$1(d){var w=this.a
w.m(new C.bIy(this.b,d))
this.c.$1(new C.bIz())
w.a.toString},
$S:6}
C.bIy.prototype={
$0(){return this.a.ch=A.k.E(this.b,1,2.6)},
$S:0}
C.bIz.prototype={
$0(){},
$S:0}
C.bIA.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
C.bIB.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
C.bIC.prototype={
$0(){return this.a.$1(1)},
$S:0}
C.bID.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.bJ0.prototype={
$2(d,e){var w
if(d==="short"){F.dF(1800,"",120,0,0.55,"noise")
F.dF(200,"",160,2.2,0.4,"saw")
B.fM()
w=this.a
if(w.c!=null)w.aeK("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){F.dF(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.aeK("\u26a0 Overloaded! The "+$.qw().h(0,e.b).b+" can only give about "+A.k.ac(w.a.c.zS(e),2)+" amps but your gadgets are asking for "+A.k.ac(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.aeK("Burnt out! "+e.ay)
F.dF(140,"",320,0,0.6,"noise")
F.dF(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bJ1.prototype={
$0(){},
$S:0}
C.bIb.prototype={
$0(){},
$S:0}
C.bJ2.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bJ_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.aA(A.c5,B.b4(p,p,p,new C.aj9(w,v,u,t,s,r==null?A.ji:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bIU(o),new C.bIV(o),new C.bIW(o),p,p,p,p,p,p,p,p,p,p,new C.bIX(o),p,p,p,!1,A.a3)],q)
if(o.a.c.a.length===0)n.push(D.b9J)
w=o.Q
if(w!=null){v=B.n(14)
u=B.K(A.cL,A.r,1)
n.push(B.ap(p,B.aA(p,B.p(p,B.B(B.a([D.fwV,B.E(B.d(w,p,p,p,p,p,p,D.foJ,p,p,p),1)],q),A.E,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(D.bfH,p,u,v,p,p,A.n),p,p,p,p,A.nr,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bIY(o),p,p,p,p,p,p,!1,A.a3),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ap(8,o.b_z(B.B(B.a([D.bGf,new E.fD(A.H2,"Cut wire",new C.bIZ(o),A.c6,p)],q),A.m,p,A.e,A.i,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ap(8,o.cjl(w),p,p,10,10,p,p))}return B.jj(new B.an(A.a_,p,A.b3,A.t,n,p),A.t,p)},
$S:287}
C.bIV.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b8E(s)
if(r!=null){t.m(new C.bIS(t,r,d))
return}w=t.b2i(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.t(v*u.a,w.d*u.b).aE(0,s)
t.m(new C.bIT(t,w))}},
$S:47}
C.bIS.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bIT.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bIW.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bIQ(w,d))
else if(w.w!=null)w.m(new C.bIR(w,d.b.a7(0,w.x)))},
$S:18}
C.bIQ.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bIR.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.E(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.E(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bIU.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b8E(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.ali(u.a,u.b,v.a,v.b)!=null)F.dF(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.aeI()},
$S:38}
C.bIX.prototype={
$1(d){var w=this.a,v=d.b,u=w.b2i(v)
if(u!=null){w.m(new C.bIO(w,u))
if(D.mj.aj(0,u.b))w.ctY(u)
w.a.toString
return}w.m(new C.bIP(w,w.cGC(v)))},
$S:70}
C.bIO.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
F.dF(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
F.dF(200,"",70,0,0.2,"saw")}},
$S:0}
C.bIP.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bIY.prototype={
$0(){var w=this.a
return w.m(new C.bIN(w))},
$S:0}
C.bIN.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bIZ.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
F.dF(300,"",50,0,0.35,"noise")
w.aeI()},
$S:0}
C.bIc.prototype={
$0(){return this.a.bqF(this.b)},
$S:0}
C.bIv.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.B(B.a([B.d(d,w,w,w,w,w,w,D.fiU,w,w,w),B.E(B.kQ(this.b.d,w,w,g,h,new C.bIx(this.a,f),A.k.E(e,h,g)),1)],x.p),A.m,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1896}
C.bIx.prototype={
$1(d){var w=this.a
w.m(new C.bIw(this.b,d))
w.a.toString},
$S:6}
C.bIw.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bIi.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
F.dF(260,"",70,0,0.35,"noise")
w.aeI()},
$S:0}
C.bIj.prototype={
$0(){var w=this.a
return w.m(new C.bIh(w))},
$S:0}
C.bIh.prototype={
$0(){return this.a.d=null},
$S:0}
C.bIk.prototype={
$0(){this.a.m(new C.bIg(this.b,this.c))
F.dF(900,"",40,0,0.3,"noise")},
$S:0}
C.bIg.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bIn.prototype={
$0(){return this.a.b1D(this.b)},
$S:0}
C.bIo.prototype={
$0(){return this.a.a09(this.b)},
$S:0}
C.bIp.prototype={
$0(){return this.a.a1O(this.b)},
$S:0}
C.bIq.prototype={
$0(){var w=this.a
w.m(new C.bIf(this.b,this.c))
w.a.toString},
$S:0}
C.bIf.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bIr.prototype={
$0(){var w=this.a
w.m(new C.bIe(this.b,this.c))
w.a.toString},
$S:0}
C.bIe.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bIs.prototype={
$0(){var w=this.a
w.m(new C.bId(this.b,this.c))
w.a.toString},
$S:0}
C.bId.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bIt.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bIu.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bIl.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bIm.prototype={
$1(d){return this.a.f=d},
$S:6}
C.foc.prototype={
$1(d){return d.aHp("bulb")},
$S:z+2}
C.fod.prototype={
$1(d){return d.q1(0,"switch")&&d.aHp("bulb")},
$S:z+2}
C.foe.prototype={
$1(d){return A.d.b3(d.a,new C.fo_())},
$S:z+2}
C.fo_.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fof.prototype={
$1(d){return d.q1(0,"resistor")&&A.d.b3(d.a,new C.fnZ())},
$S:z+2}
C.fnZ.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fog.prototype={
$1(d){return!d.q1(0,"battery")&&d.aHp("bulb")},
$S:z+2}
C.fo3.prototype={
$1(d){return A.d.b3(d.a,new C.fnY())},
$S:z+2}
C.fnY.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fo4.prototype={
$1(d){return A.d.b3(d.a,new C.fnX())},
$S:z+2}
C.fnX.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fo5.prototype={
$1(d){return A.d.b3(d.a,new C.fnW())},
$S:z+2}
C.fnW.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fo6.prototype={
$1(d){var w=d.a
return A.d.b3(w,new C.fnU())&&A.d.b3(w,new C.fnV())&&d.q1(0,"buck")},
$S:z+2}
C.fnU.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fnV.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fo7.prototype={
$1(d){var w=d.a
return A.d.b3(w,new C.fnS())&&A.d.b3(w,new C.fnT())},
$S:z+2}
C.fnS.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fnT.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fo8.prototype={
$1(d){return A.d.b3(d.a,new C.fnR())},
$S:z+2}
C.fnR.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.dXW.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.aa(0)
w.v(0,v.b)},
$S:0}
C.dY4.prototype={
$1(d){var w=this.a.d
return w.aHL(d)&&w.CI(d)},
$S:z+0}
C.dY5.prototype={
$1(d){return d.x},
$S:z+0}
C.dY6.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.dY7.prototype={
$0(){},
$S:0}
C.dXV.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.n(22),o=x.p,n=B.a([D.fOp,A.au,D.fyK,A.W],o)
for(w=this.a,v=0;v<19;++v){u=D.Rd[v]
t=A.c.j(0.06)
s=new B.aP(14,14)
r=new B.ay(A.bC,1,A.r,-1)
n.push(B.aA(q,B.p(q,B.x(B.a([new B.y(u.a,q,A.iu,q,q,q,q,q,q,q,q,q),A.bF,new B.y(u.b,q,D.fpt,q,q,q,q,A.a1,q,3,q,q)],o),A.E,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(t,q,new B.bH(r,r,r,r),new B.bh(s,s,s,s),q,q,A.n),q,q,q,A.cu,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dXU(w,d,u),q,q,q,q,q,q,!1,A.a3))}return B.eT(q,G.lB,new B.D(A.bQ,new B.a5(340,q,B.cl(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d8,q,new B.b8(p,A.a0),q)},
$S:49}
C.dXU.prototype={
$0(){B.a4(this.b,!1).O(null)
var w=this.a
w.m(new C.dXT(w,this.c))
F.dF(800,"",120,-0.5,0.3,"square")},
$S:0}
C.dXT.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bjr()},
$S:0}
C.dXR.prototype={
$1(d){return new C.VV(this.a.d,null)},
$S:z+44}
C.dXS.prototype={
$0(){},
$S:0}
C.dY3.prototype={
$1(d){return new B.e0(new C.dY2(this.a),null)},
$S:21}
C.dY2.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.aik(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.bf:A.aJ
k=B.aG(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.B(B.a([D.fLC,A.b2,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.i,0,m,m),A.P,B.bx(B.n(4),B.kx(A.bC,m,m,5,m,w.a/11,new B.ma(f,x.c)),A.ap),A.ae],v)
if(h)u.push(D.fBV)
else{h=f.j(0.1)
t=B.n(14)
s=B.K(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ae.Kb,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,I.Ek,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.x(B.a([r,A.au,q,new B.bM(A.a8,m,m,B.bN(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.dY0(l,e),m,m),m)],v),A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bg,m,m,m))}u.push(A.W)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aP(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dq,1,A.r,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aC:A.c
u.push(B.aA(m,B.p(m,new B.cd(A.aM,A.e,A.i,A.m,m,A.p,m,0,B.a([new B.y(s,m,A.aa1,m,m,m,m,m,m,m,m,m),A.as,new B.bA(1,A.bd,new B.y(r.a,m,new B.F(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bH(n,n,n,n),new B.bh(t,t,t,t),m,m,A.n),m,m,m,A.eH,A.nr,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.dY1(l,o,e),m,m,m,m,m,m,!1,A.a3))}return B.bm(!0,new B.cT(new B.aZ(0,1/0,0,k.a.b*0.75),B.cl(u,m,m,A0.yp,m,m,A.ah,!0),m),!0,!1,A.af,!0,!0)},
$S:87}
C.dY0.prototype={
$0(){var w=this.a
w.m(new C.dXZ(w))
this.b.$1(new C.dY_())
w.Fa()},
$S:0}
C.dXZ.prototype={
$0(){var w=this.a
$.aik()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.dY_.prototype={
$0(){},
$S:0}
C.dY1.prototype={
$0(){var w=this.a
w.m(new C.dXX(w,this.b))
this.c.$1(new C.dXY())
w.Fa()},
$S:0}
C.dXX.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dXY.prototype={
$0(){},
$S:0}
C.dY9.prototype={
$0(){return B.a4(this.a,!1).ih()},
$S:0}
C.dYa.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.m6("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a4(t.b,!1).cc(B.eh(new C.dY8(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dY8.prototype={
$1(d){B.lg("construction")
return Aj.hNG()},
$S:z+45}
C.dYb.prototype={
$0(){return E.hzz(this.a,"ELECTRONICS LAB",this.b,A.aJ)},
$S:0}
C.dYc.prototype={
$0(){var w=this.a
return w.m(w.d.gcYc())},
$S:0}
C.dYd.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grZ(v))
w.Fa()},
$S:0}
C.cHU.prototype={
$2(d,e){var w=null,v=this.a.gaxZ().x
v===$&&B.c()
return B.b4(w,w,w,new C.bak(v,w),A.aw)},
$S:63}
C.cHT.prototype={
$3(d,e,f){var w=new B.aF($.S().r,A.ag,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.D(new B.aY(v,t))
w.D(new B.c4(v,u,v+e,u))
w.D(new B.c4(v,u,v,u+e))
w.D(new B.c4(v,u,v-e,u))
w.D(new B.c4(v,u,v,t))
w.D(new B.bt())
t=B.I()
t.r=A.c.j(f).gp(0)
this.a.aH(w,t)},
$S:465}
C.fVO.prototype={
$3(d,e,f){return new C.Vd(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.fVP.prototype={
$4(d,e,f,g){var w=x.Y
return new B.d1(e,!1,B.iu(A.A,g,null,new B.bg(B.cK(A.ct,e,null),new B.bp(0.85,1,w),w.k("bg<bO.T>"))),null)},
$C:"$4",
$R:4,
$S:33}
C.dU5.prototype={
$0(){return B.a4(this.a,!1).ih()},
$S:0}
C.dU4.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c_y(o):q.bCP(o,p),m=x.p
p=B.a([B.p_(new B.mG(n,new B.bR(p,x.bz)),A.p8,B.qr(),A.b7,A.b7,new C.dU2())],m)
n=t.d
if(n){w=A.k.F(q.gSh(),12)<4
v=w?150:96
u=B.n(16)
m=B.a([A.as],m)
if(w)m.push(D.bG1)
else m.push(A.b2)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.bf:A.av,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.as)
p.push(B.ap(s,B.as(B.da(s,B.B(m,A.m,s,A.e,A.i,0,s,s),s,s,A.et,new B.o(A.w,s,s,u,s,s,A.n),A.mE,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.ve)p.push(B.ap(s,B.as(B.p(s,s,A.f,s,s,A.Lq,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wT)p.push(B.ap(s,B.p(s,s,A.f,s,s,A.Lq,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ap(6,B.aA(s,B.as(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.n(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dU3(q),s,s,s,s,s,s,!1,A.a3),s,s,0,0,s,s))
return B.bx(r,new B.an(A.a_,s,A.b3,A.t,p,s),A.ap)},
$S:299}
C.dU2.prototype={
$2(d,e){var w=x.Y
return new B.d1(e,!1,B.iu(A.A,d,null,new B.bg(e,new B.bp(0.92,1,w),w.k("bg<bO.T>"))),null)},
$S:455}
C.dU3.prototype={
$0(){var w=this.a
return w.m(new C.dU1(w))},
$S:0}
C.dU1.prototype={
$0(){return this.a.e=null},
$S:0}
C.dU0.prototype={
$0(){var w=this.a
return w.m(new C.dU_(w,this.b))},
$S:0}
C.dU_.prototype={
$0(){return this.a.e=A.d.cu(G.ko,this.b)},
$S:0}
C.dTZ.prototype={
$0(){var w=this.a
return w.m(new C.dTY(w))},
$S:0}
C.dTY.prototype={
$0(){return this.a.e=0},
$S:0}
C.dTU.prototype={
$0(){var w=this.a
return w.m(new C.dTT(w))},
$S:0}
C.dTT.prototype={
$0(){return this.a.e=null},
$S:0}
C.dTX.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.n(o?20:8),m=A.w.j(0.55),l=x.p
m=B.p(p,B.B(B.a([D.fUc,A.as,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eL,p,p,p,D.fvL,p,p,p),1),B.d(A.a.aX(A.o.u(B.dg(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.aX(A.o.u(B.fQ(new B.V(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qT,p,p,p)],l),A.m,p,A.e,A.i,0,p,p),A.f,m,p,p,p,24,p,p,A.kj,p,p,p)
w=this.a
v=B.a([B.b4(p,p,p,new C.bwO(w.gSh(),this.c.d,p),A.aw)],l)
o=w.e
if(o!=null){u=B.n(10)
t=B.K(A.aX,A.r,1)
s=B.n(10)
o=B.p(p,B.B(B.a([B.aA(p,B.p(p,p,A.f,p,p,A.adk,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dTW(w),p,p,p,p,p,p,!1,A.a3),A.eg,B.p(p,p,A.f,p,p,A.adq,p,12,p,p,p,p,p,12),A.eg,B.p(p,p,A.f,p,p,D.b5_,p,12,p,p,p,p,p,12),A.as,B.E(B.d(G.ko[o].a,p,1,A.a1,p,p,p,A.a9W,p,p,p),1)],l),A.m,p,A.e,A.i,0,p,p),A.f,A.cr,p,p,p,24,p,p,A.fC,p,p,p)
r=w.e
r.toString
v.push(B.bT(0,new B.D(D.bCF,B.p(p,B.bx(s,B.x(B.a([o,B.E(B.b4(p,p,p,new C.af0(r,w.gSh(),p),A.fF),1)],l),A.m,p,A.e,A.i,0,A.p),A.ap),A.f,p,p,new B.o(A.w,p,t,u,D.dqE,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.n(18)
t=B.K(A.aX,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jz,w.avV(G.ko[q],34,!1),p))
v.push(B.ap(8,B.as(B.p(p,B.B(s,A.m,p,A.e,A.O,0,p,p),A.f,p,p,new B.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lG,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bx(n,B.p(p,B.x(B.a([m,B.E(new B.an(A.a_,p,A.b3,A.t,v,p),1)],l),A.m,p,A.e,A.i,0,A.p),A.f,X.YN,p,p,p,p,p,p,p,p,p,p),A.ap)},
$S:299}
C.dTW.prototype={
$0(){var w=this.a
return w.m(new C.dTV(w))},
$S:0}
C.dTV.prototype={
$0(){return this.a.e=null},
$S:0}
C.foI.prototype={
$0(){return D.ecM},
$S:z+47}
C.foJ.prototype={
$0(){return D.dL4},
$S:z+48}
C.foK.prototype={
$0(){return D.dHE},
$S:z+49}
C.foL.prototype={
$0(){return D.dKt},
$S:z+50}
C.foM.prototype={
$0(){return D.dPp},
$S:z+51}
C.foN.prototype={
$0(){return D.e8y},
$S:z+52}
C.foO.prototype={
$0(){return D.eaI},
$S:z+53}
C.foP.prototype={
$0(){return D.dOJ},
$S:z+36}
C.ckA.prototype={
$0(){return B.a4(this.a,!1).ih()},
$S:0}
C.ckB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=B.a([],k)
for(w=$.hDc(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aP(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.dr,16)],t)
n=A.c.j(0.85)
j.push(B.aA(m,B.p(m,new B.an(A.a_,m,A.ab,A.t,B.a([new B.cN(m,-6,-6,m,m,m,new B.y(r.c,m,Ai.K9,m,m,m,m,m,m,m,m,m),m),new B.bM(A.lt,m,m,B.x(B.a([new B.y(r.a,m,D.fuk,m,m,m,m,m,m,m,m,m),A.cS,new B.y(r.b,m,new B.F(!0,n,m,m,m,m,12,A.a7,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.E,m,A.e,A.O,0,A.p),m)],k),m),A.f,m,m,new B.o(m,m,m,new B.bh(q,q,q,q),p,new B.a9(A.ay,A.aE,A.x,o,m,m),A.n),m,v,m,m,A.bE,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.ckz(d,r),m,m,m,m,m,m,!1,A.a3))}return B.bX(A.bG,j,A.bq,m,14,14)},
$S:166}
C.ckz.prototype={
$0(){return B.a4(this.a,!1).cc(B.eh(new C.cky(this.b),!1,null,x.H))},
$S:0}
C.cky.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eQl.prototype={
$0(){var w=this.a
return w.w=w.d[w.b5I(w.f)]},
$S:0}
C.eQh.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cK.af()*7},
$S:0}
C.eQg.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.cb)
w.w=""},
$S:0}
C.eQj.prototype={
$0(){var w=this.a
return w.m(new C.eQi(w,this.b))},
$S:0}
C.eQi.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cz(w,this.b)},
$S:0}
C.eQk.prototype={
$1(d){return this.a.b01(0)},
$S:2}
C.e_V.prototype={
$0(){return C.Je("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e_W.prototype={
$0(){},
$S:0}
C.e_Q.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e_S.prototype={
$0(){return this.a.b03(this.b)},
$S:0}
C.e_T.prototype={
$0(){var w=this.a
return w.m(new C.e_R(w))},
$S:0}
C.e_R.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e_U.prototype={
$0(){var w=this.a
return w.b03(w.d)},
$S:0}
C.dLE.prototype={
$2(d,e){return d+e},
$S:79}
C.dLF.prototype={
$0(){},
$S:0}
C.dLz.prototype={
$2(d,e){return d+e},
$S:79}
C.dLC.prototype={
$0(){var w=this.a
return w.m(new C.dLB(w,this.b))},
$S:0}
C.dLB.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dLD.prototype={
$0(){var w=this.a
return w.m(new C.dLA(w))},
$S:0}
C.dLA.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.dXq.prototype={
$0(){return E.ut(this.b,this.a.d,"drawing")},
$S:0}
C.dXr.prototype={
$1(d){var w=this.a
return w.m(new C.dXp(w,d))},
$S:47}
C.dXp.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJd(u,v,t))},
$S:0}
C.dXs.prototype={
$1(d){var w=this.a
return w.m(new C.dXo(w,d))},
$S:18}
C.dXo.prototype={
$0(){return A.d.gak(this.a.e).c.push(this.b.b)},
$S:0}
C.dXt.prototype={
$1(d){var w=this.a
return w.m(new C.dXn(w,d))},
$S:22}
C.dXn.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJd(u,v,t))},
$S:0}
C.dXu.prototype={
$0(){var w=this.a
return w.m(new C.dXm(w,this.b))},
$S:0}
C.dXm.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.dXv.prototype={
$1(d){var w=this.a
return w.m(new C.dXl(w,d))},
$S:6}
C.dXl.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dXw.prototype={
$0(){var w=this.a
return w.m(new C.dXk(w))},
$S:0}
C.dXk.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dXx.prototype={
$0(){var w=this.a
return w.m(new C.dXj(w))},
$S:0}
C.dXj.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.dXy.prototype={
$0(){var w=this.a
return w.m(A.d.grZ(w.e))},
$S:0}
C.dXz.prototype={
$0(){var w=this.a
return w.m(new C.dXi(w))},
$S:0}
C.dXi.prototype={
$0(){var w=this.a
w.x=D.ayR[A.o.F(A.d.cu(D.ayR,w.x)+1,4)]},
$S:0}
C.enc.prototype={
$0(){return this.a.f.M(0,this.b)},
$S:0}
C.end.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.Je("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.enb(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.Je("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.enb.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.aa(0)},
$S:0}
C.ene.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.ena(w))},
$S:12}
C.ena.prototype={
$0(){var w=this.a
w.f.aa(0)
w.x=!1},
$S:0}
C.eni.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return B.aA(w,B.lx(new C.eng(v,e),w,A.b7,A.p8,w,w,new B.bp(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.enh(v,e),w,w,w,w,w,w,!1,A.a3)},
$S:82}
C.enh.prototype={
$0(){return this.a.caI(this.b)},
$S:0}
C.eng.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fI(3.141592653589793*e)
m=B.n(16)
w=o?p:D.c5f
if(o)v=q.a.r.t(0,q.b)?A.bf.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.K(u.r.t(0,t)?A.bf:A.aX,A.r,1)
if(o){r=B.dr()
r.fI(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fy(A.A,B.d(u[t],p,p,p,p,p,p,H.aa6,p,p,p),p,r,!0)
u=r}else u=D.fN7
return B.fy(A.A,B.p(A.A,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:110}
C.enj.prototype={
$0(){var w=this.a
return w.m(new C.enf(w,this.b))},
$S:0}
C.enf.prototype={
$0(){var w=this.a
w.d=this.b.a
w.ate()},
$S:0}
C.enk.prototype={
$0(){var w=this.a
return w.m(w.gbLv())},
$S:0}
C.exZ.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.ey_.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.exX.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.exY.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.exW(w))},
$S:12}
C.exW.prototype={
$0(){return this.a.f=-1},
$S:0}
C.ey0.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.ey1.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.ey2.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b02()},
$S:12}
C.ey3.prototype={
$0(){return this.a.caO(this.b)},
$S:0}
C.eLQ.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:72}
C.eLZ.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a1,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kK,B.B(B.a([v,A.ad,new B.ds(1,A.cp,B.eO(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e3),w)],x.p),A.m,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1897}
C.eLV.prototype={
$1(d){return this.a.m(new C.eLU())},
$S:2}
C.eLU.prototype={
$0(){},
$S:0}
C.eLW.prototype={
$0(){var w=this.a
return w.m(new C.eLT(w,this.b))},
$S:0}
C.eLT.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eLX.prototype={
$1(d){var w=this.a
return w.m(new C.eLS(w,d))},
$S:6}
C.eLS.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
C.eLY.prototype={
$0(){var w=this.a
return w.m(new C.eLR(w))},
$S:0}
C.eLR.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.elS.prototype={
$0(){},
$S:0}
C.elT.prototype={
$0(){},
$S:0}
C.elL.prototype={
$0(){var w=this.a
return w.m(new C.elK(w))},
$S:0}
C.elK.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.bZ(u,1,!1,x.S)
w.r=0.9
E.WH("hat",0,0.6)},
$S:0}
C.elM.prototype={
$0(){var w=this.a
return w.m(new C.elJ(w))},
$S:0}
C.elJ.prototype={
$0(){this.a.y=1.1
E.ml("bell",36,200,0.4)},
$S:0}
C.elN.prototype={
$0(){var w=this.a
return w.m(new C.elI(w))},
$S:0}
C.elI.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.ap(Math.max(v,u)-t+1)
w.as=u
E.ml("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.elO.prototype={
$0(){var w=this.a
return w.m(new C.elH(w,this.b))},
$S:0}
C.elH.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.elP.prototype={
$1(d){var w=this.a
return w.m(new C.elG(w,d))},
$S:6}
C.elG.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e_(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.elQ.prototype={
$1(d){var w=this.a
return w.m(new C.elF(w,d))},
$S:6}
C.elF.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
C.elR.prototype={
$1(d){var w=this.a
return w.m(new C.elE(w,d))},
$S:6}
C.elE.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
C.ckw.prototype={
$0(){var w=this
return E.ml(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aNh.prototype
w.bxS=w.q
w=C.aMm.prototype
w.bwV=w.q
w=C.aMn.prototype
w.bwW=w.q
w=C.aMr.prototype
w.bx_=w.q
w=C.aO6.prototype
w.byO=w.q
w=C.aNf.prototype
w.bxQ=w.q
w=C.ayB.prototype
w.btW=w.q
w=C.ayC.prototype
w.btX=w.q
w=C.aKP.prototype
w.bvj=w.q
w=C.aMA.prototype
w.bx8=w.q
w=C.aMo.prototype
w.bwX=w.q
w=C.aMH.prototype
w.bxg=w.q
w=C.aN9.prototype
w.bxK=w.q
w=C.aNA.prototype
w.bya=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(C.aFk.prototype,"gaxm","c6y",1)
var r
v(r=C.aDO.prototype,"gcf3","cf4",22)
w(r,"gc77","aZI",1)
w(C.aDQ.prototype,"gc8Q","c8R",1)
u(C.aE6.prototype,"gc8X","c8Y",39)
w(r=C.aIm.prototype,"gcyw","cyx",1)
w(r,"gc8Z","aey",1)
w(r,"gcjv","cjw",1)
w(r,"gc8W","aex",3)
w(r=C.aFj.prototype,"gbIE","a9Y",3)
w(r,"gciM","b29",1)
w(r,"gcmy","ah5",3)
t(r,"gc90","aez",3)
t(r=C.a4T.prototype,"grZ","aa",1)
v(r,"gcVZ","ao0",0)
v(r,"gcSn","M3",0)
w(r,"gcYc","bjr",1)
s(C.aj9.prototype,"gc9m",0,5,null,["$5"],["qE"],41,0,0)
w(r=C.aEi.prototype,"gc9n","c9o",1)
w(r,"gcpm","ahr",3)
w(r,"gcfj","afM",3)
w(r,"gcwx","aiy",3)
w(r=C.aFM.prototype,"gcaJ","caK",1)
t(r,"gcaH","b01",1)
w(C.aF5.prototype,"gbLv","ate",1)
t(C.aFq.prototype,"gcaL","caM",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.akp,C.Gs,C.v9,C.aTg,C.a3z,C.bbp,C.c55,C.yo,C.CD,C.nz,C.bc8,C.AM,C.bug,C.qi,C.r2,C.CH,C.ZK,C.af7,C.a1_,C.CR,C.ac3,C.acj,C.aed,C.Gd,C.ei,C.tL,C.aaK,C.abQ,C.a4T,C.mR,C.bc9,C.fS,C.mn,C.bvA,C.aJd])
u(B.hy,[C.fF9,C.fuA,C.fBM,C.fBN,C.fF6,C.fF7,C.ef1,C.efk,C.euC,C.eu9,C.eua,C.eub,C.euc,C.eud,C.eue,C.euf,C.eug,C.eu7,C.eu8,C.eu6,C.eux,C.euy,C.euz,C.dLa,C.dLc,C.dLf,C.dLq,C.c56,C.c57,C.fo0,C.fo1,C.fo2,C.fo9,C.foa,C.fob,C.dNc,C.dMU,C.dNd,C.dMP,C.dMK,C.dMM,C.dMS,C.dN4,C.dN2,C.dN3,C.dN1,C.dMZ,C.dN0,C.f3X,C.f3E,C.f3L,C.f3U,C.f3y,C.dnq,C.dnr,C.dnn,C.dno,C.dnp,C.dns,C.dnt,C.dnu,C.dnv,C.dnw,C.dnx,C.dny,C.dnz,C.dnA,C.ety,C.etz,C.etA,C.etB,C.etw,C.etx,C.eu2,C.etF,C.etH,C.etr,C.etZ,C.etX,C.etY,C.etW,C.etV,C.ett,C.bOr,C.bOC,C.bOx,C.bOD,C.bOF,C.bOs,C.bOq,C.bOK,C.bOy,C.bOB,C.bOA,C.bOz,C.bJ3,C.fQX,C.fR_,C.fQY,C.bIL,C.bIG,C.bIF,C.bJ2,C.bIV,C.bIW,C.bIU,C.bIX,C.bIv,C.bIx,C.bIt,C.bIu,C.bIl,C.bIm,C.foc,C.fod,C.foe,C.fo_,C.fof,C.fnZ,C.fog,C.fo3,C.fnY,C.fo4,C.fnX,C.fo5,C.fnW,C.fo6,C.fnU,C.fnV,C.fo7,C.fnS,C.fnT,C.fo8,C.fnR,C.dY4,C.dY5,C.dXV,C.dXR,C.dY3,C.dY8,C.cHT,C.fVO,C.fVP,C.cky,C.eQk,C.dXr,C.dXs,C.dXt,C.dXv,C.eng,C.eLQ,C.eLZ,C.eLV,C.eLX,C.elP,C.elQ,C.elR])
u(B.ju,[C.fF8,C.ef6,C.ef4,C.eui,C.euv,C.dML,C.dN7,C.dTa,C.f4_,C.f40,C.f3D,C.f3Q,C.f3R,C.f3M,C.f3S,C.f3x,C.etu,C.etv,C.eu1,C.etU,C.etJ,C.bOE,C.bOG,C.bOI,C.bOt,C.bOv,C.bJ4,C.cqP,C.fQZ,C.bIE,C.bJ0,C.bJ_,C.dY2,C.cHU,C.dU4,C.dU2,C.dTX,C.ckB,C.dLE,C.dLz,C.eni])
u(B.af,[C.VV,C.Wh,C.UO,C.UT,C.NJ,C.aIl,C.Wg,C.aj7,C.Vu,C.ayh,C.Vd,C.WO,C.VC,C.UP,C.Vt,C.Wb,C.Wl,C.WF,C.Wa])
u(B.ah,[C.blw,C.aNh,C.aMm,C.aMr,C.aE6,C.aO6,C.aNf,C.ayB,C.byM,C.aKP,C.aMA,C.aNA,C.aMH,C.aMo,C.bkZ,C.aF5,C.aFq,C.bmd,C.aN9])
u(B.iG,[C.ef_,C.ef0,C.efc,C.efd,C.ef8,C.ef7,C.ef9,C.ef5,C.efa,C.ef3,C.efb,C.ef2,C.efg,C.eff,C.efh,C.efe,C.efi,C.efj,C.efl,C.euB,C.euD,C.euE,C.euk,C.euj,C.euh,C.euq,C.eur,C.eun,C.eus,C.eum,C.eut,C.euu,C.eul,C.euw,C.eup,C.euA,C.euo,C.dLx,C.dLw,C.dL9,C.dLy,C.dLb,C.dLd,C.dLe,C.dLg,C.dL6,C.dL7,C.dL8,C.dLn,C.dLo,C.dLp,C.dLm,C.dLr,C.dLl,C.dLs,C.dLk,C.dLt,C.dLj,C.dLu,C.dLi,C.dLv,C.dLh,C.dMR,C.dMQ,C.dMV,C.dMN,C.dMO,C.dMW,C.dMX,C.dMY,C.dMT,C.dMJ,C.dN6,C.dN5,C.dN8,C.dN9,C.dNa,C.dN_,C.dNb,C.cSp,C.dT8,C.dT7,C.dT9,C.fos,C.fot,C.fou,C.fov,C.fow,C.fox,C.foy,C.foz,C.foA,C.f3Z,C.f3Y,C.f3G,C.f3F,C.f3B,C.f3A,C.f3C,C.f3z,C.f3O,C.f3N,C.f3P,C.f3H,C.f3T,C.f3K,C.f3V,C.f3J,C.f3W,C.f3I,C.etD,C.ets,C.etC,C.eto,C.etE,C.etG,C.etp,C.etq,C.eu0,C.eu_,C.etR,C.etS,C.etT,C.etN,C.etO,C.etM,C.etP,C.etL,C.etQ,C.etK,C.etI,C.dnm,C.bOH,C.bOJ,C.bOu,C.bOw,C.bII,C.bIJ,C.bIH,C.bIK,C.bIM,C.bIy,C.bIz,C.bIA,C.bIB,C.bIC,C.bID,C.bJ1,C.bIb,C.bIS,C.bIT,C.bIQ,C.bIR,C.bIO,C.bIP,C.bIY,C.bIN,C.bIZ,C.bIc,C.bIw,C.bIi,C.bIj,C.bIh,C.bIk,C.bIg,C.bIn,C.bIo,C.bIp,C.bIq,C.bIf,C.bIr,C.bIe,C.bIs,C.bId,C.dXW,C.dY6,C.dY7,C.dXU,C.dXT,C.dXS,C.dY0,C.dXZ,C.dY_,C.dY1,C.dXX,C.dXY,C.dY9,C.dYa,C.dYb,C.dYc,C.dYd,C.dU5,C.dU3,C.dU1,C.dU0,C.dU_,C.dTZ,C.dTY,C.dTU,C.dTT,C.dTW,C.dTV,C.foI,C.foJ,C.foK,C.foL,C.foM,C.foN,C.foO,C.foP,C.ckA,C.ckz,C.eQl,C.eQh,C.eQg,C.eQj,C.eQi,C.e_V,C.e_W,C.e_Q,C.e_S,C.e_T,C.e_R,C.e_U,C.dLF,C.dLC,C.dLB,C.dLD,C.dLA,C.dXq,C.dXp,C.dXo,C.dXn,C.dXu,C.dXm,C.dXl,C.dXw,C.dXk,C.dXx,C.dXj,C.dXy,C.dXz,C.dXi,C.enc,C.end,C.enb,C.ene,C.ena,C.enh,C.enj,C.enf,C.enk,C.exZ,C.ey_,C.exX,C.exY,C.exW,C.ey0,C.ey1,C.ey2,C.ey3,C.eLU,C.eLW,C.eLT,C.eLS,C.eLY,C.eLR,C.elS,C.elT,C.elL,C.elK,C.elM,C.elJ,C.elN,C.elI,C.elO,C.elH,C.elG,C.elF,C.elE,C.ckw])
t(C.byZ,C.aNh)
t(C.aFk,C.byZ)
u(B.mf,[C.bit,C.bcr,C.btF,C.bb7,C.bsi,C.brI,C.bbN,C.brK,C.bvK,C.bir,C.aj9,C.bak,C.bwO,C.af0,C.bx_,C.brJ,C.bn_])
t(C.aMn,C.aMm)
t(C.aDO,C.aMn)
t(C.byJ,C.aMr)
t(C.aDQ,C.byJ)
u(B.lA,[C.KK,C.a0N,C.JI])
u(B.aw,[C.bsG,C.afj,C.aea,C.Qx,C.bta,C.a8J,C.bez])
t(C.aIm,C.aO6)
t(C.biq,B.p1)
t(C.aFj,C.aNf)
t(C.ayC,C.ayB)
t(C.aj8,C.ayC)
t(C.aEi,C.byM)
t(C.bal,C.aKP)
t(C.bkX,C.aMA)
t(C.bz5,C.aNA)
t(C.aFM,C.bz5)
t(C.byO,C.aMH)
t(C.bl7,C.byO)
t(C.byI,C.aMo)
t(C.bkJ,C.byI)
t(C.byX,C.aN9)
t(C.blI,C.byX)
w(C.aNh,B.cg)
w(C.byZ,E.ny)
w(C.aMm,B.cg)
w(C.aMn,E.ny)
w(C.aMr,B.cg)
w(C.byJ,E.ny)
w(C.aO6,B.eQ)
w(C.aNf,B.cg)
w(C.ayB,B.cg)
w(C.ayC,E.ny)
w(C.aKP,B.cg)
v(C.byM,B.eF)
w(C.aMA,B.cg)
w(C.aMo,B.cg)
w(C.byI,E.ny)
w(C.aMH,B.cg)
w(C.byO,E.ny)
w(C.aN9,B.cg)
w(C.byX,E.ny)
w(C.aNA,B.cg)
w(C.bz5,E.ny)})()
B.j1(b.typeUniverse,JSON.parse('{"VV":{"af":[],"v":[]},"blw":{"ah":["VV"]},"Wh":{"af":[],"v":[]},"aFk":{"ah":["Wh"]},"bit":{"aC":[]},"UO":{"af":[],"v":[]},"aDO":{"ah":["UO"]},"UT":{"af":[],"v":[]},"aDQ":{"ah":["UT"]},"bcr":{"aC":[]},"afj":{"aw":[],"v":[]},"aea":{"aw":[],"v":[]},"aIl":{"af":[],"v":[]},"NJ":{"af":[],"v":[]},"aE6":{"ah":["NJ"]},"bsG":{"aw":[],"v":[]},"Qx":{"aw":[],"v":[]},"btF":{"aC":[]},"bta":{"aw":[],"v":[]},"bb7":{"aC":[]},"aIm":{"ah":["aIl"]},"bsi":{"aC":[]},"brI":{"aC":[]},"bbN":{"aC":[]},"brK":{"aC":[]},"bvK":{"aC":[]},"Wg":{"af":[],"v":[]},"biq":{"aC":[]},"aFj":{"ah":["Wg"]},"bir":{"aC":[]},"aj9":{"aC":[]},"aj7":{"af":[],"v":[]},"aj8":{"ah":["aj7"]},"Vu":{"af":[],"v":[]},"ayh":{"af":[],"v":[]},"aEi":{"ah":["Vu"],"eF":[]},"bal":{"ah":["ayh"]},"bak":{"aC":[]},"Vd":{"af":[],"v":[]},"bkX":{"ah":["Vd"]},"bwO":{"aC":[]},"af0":{"aC":[]},"a8J":{"aw":[],"v":[]},"WO":{"af":[],"v":[]},"VC":{"af":[],"v":[]},"UP":{"af":[],"v":[]},"Vt":{"af":[],"v":[]},"Wb":{"af":[],"v":[]},"Wl":{"af":[],"v":[]},"WF":{"af":[],"v":[]},"Wa":{"af":[],"v":[]},"aFM":{"ah":["WO"]},"bx_":{"aC":[]},"bl7":{"ah":["VC"]},"brJ":{"aC":[]},"bkJ":{"ah":["UP"]},"bkZ":{"ah":["Vt"]},"bn_":{"aC":[]},"aF5":{"ah":["Wb"]},"aFq":{"ah":["Wl"]},"bmd":{"ah":["WF"]},"blI":{"ah":["Wa"]},"bez":{"aw":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.at
return{c:w("ma<u?>"),G:w("u"),J:w("bw<m,J>"),Q:w("dD<m>"),Z:w("a0"),M:w("O<d9>"),R:w("O<a3v>"),a:w("O<a3z>"),V:w("O<ac>"),O:w("O<u>"),k:w("O<V>"),D:w("O<aB<aD>>"),w:w("O<a0>"),E:w("O<ai<m>>"),b:w("O<ai<J>>"),U:w("O<ai<G?>>"),x:w("O<a8<m,aD>>"),g:w("O<t>"),C:w("O<tL>"),v:w("O<h_>"),F:w("O<+(m,m)>"),fT:w("O<+(J,v)>"),I:w("O<+(G,m)>"),u:w("O<+(G,G)>"),r:w("O<+(m,m,a0)>"),e:w("O<+(m,J,J,G)>"),o:w("O<+(m,G,m,G)>"),d:w("O<+(m,m,J,J,a8<m,J>)>"),_:w("O<v9>"),fQ:w("O<aaK>"),s:w("O<m>"),cF:w("O<au>"),X:w("O<u2>"),p:w("O<v>"),bL:w("O<abQ>"),fH:w("O<le>"),a_:w("O<ac3>"),cB:w("O<nz>"),ba:w("O<acj>"),eW:w("O<CH>"),fY:w("O<ZK>"),ac:w("O<aed>"),cd:w("O<CR>"),fr:w("O<af7>"),e4:w("O<a1_>"),au:w("O<aJd>"),f7:w("O<R>"),n:w("O<J>"),t:w("O<G>"),dS:w("O<aC?>"),fs:w("O<tL?>"),bN:w("O<G?>"),q:w("cw<aj8>"),A:w("cw<ah<af>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aD>"),j:w("ai<@>"),P:w("a8<m,@>"),f:w("a8<@,@>"),bd:w("N<ei,m>"),fR:w("N<+(J,v),v>"),l:w("iB"),gA:w("zx"),gD:w("w6"),h:w("cu"),K:w("aD"),W:w("tL"),B:w("ei"),N:w("m"),bO:w("au"),Y:w("bp<J>"),gj:w("bR<m>"),bz:w("bR<G?>"),dg:w("ef<r2>"),m:w("bbp"),a2:w("CD"),f3:w("r2"),es:w("Gd"),gV:w("mt"),y:w("R"),i:w("J"),z:w("@"),S:w("G"),L:w("ai<@>?"),cK:w("aD?"),T:w("m?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b_Z=new B.d9(0,0.1)
D.b1F=new C.aTg(0,0,0)
D.Ll=new C.aTg(0,0.5,0)
D.b2d=new B.ay(A.bf,1,A.r,-1)
D.b3G=new B.aZ(0,1/0,0,290)
D.b3N=new B.aZ(16,1/0,16,1/0)
D.b5_=new B.o(A.be,null,null,null,null,null,A.a6)
D.fis=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVD=new B.y("\u26a1",null,D.fis,null,null,null,null,null,null,null,null,null)
D.b9z=new B.ce(A.A,null,null,D.fVD,null)
D.aU_=new B.F(!0,A.bU,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL7=new B.y("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aU_,null,A.K,null,null,null,null,null,null,null)
D.em1=new B.D(A.nu,D.fL7,null)
D.b9J=new B.ce(A.A,null,null,D.em1,null)
D.fB_=new B.y("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aU_,null,A.K,null,null,null,null,null,null,null)
D.emU=new B.D(A.Gv,D.fB_,null)
D.bat=new B.ce(A.A,null,null,D.emU,null)
D.aem=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.be9=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.beq=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bfH=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bfN=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bg9=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.afR=new B.u(1,1,0.23137254901960785,0.12156862745098039,A.q)
D.bi0=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bj1=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bjI=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.agw=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bkH=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.agU=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.Yq=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bmr=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.bmI=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.aho=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.boo=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bow=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.boZ=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.vT=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.br_=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.aiP=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bwG=new B.bb(11e6)
D.bys=new B.Q(10,34,10,26)
D.byA=new B.Q(10,6,10,2)
D.byC=new B.Q(10,8,0,10)
D.bzf=new B.Q(12,8,8,8)
D.bzl=new B.Q(14,0,14,22)
D.bzn=new B.Q(14,0,14,30)
D.bAn=new B.Q(16,4,16,28)
D.bCF=new B.Q(26,12,26,58)
D.bDv=new B.Q(4,4,8,2)
D.bE8=new B.Q(8,14,8,12)
D.bEf=new B.Q(8,40,8,30)
D.bEk=new B.Q(8,6,16,0)
D.bEl=new B.Q(8,6,8,8)
D.bEH=new B.Q(0,0,1.5,0)
D.b1r=new B.Hr(26,"saturation")
D.bEZ=new B.xs(A.cY,D.b1r,null,A.Xp)
D.fA4=new B.y("REACTION LAB",null,T.aUB,null,null,null,null,A.a1,null,1,null,null)
D.bF4=new B.bA(1,A.bd,D.fA4,null)
D.fqD=new B.F(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDk=new B.y("CORE PROTOCOL",null,D.fqD,null,null,null,null,null,null,null,null,null)
D.bFi=new B.bA(1,A.bd,D.fDk,null)
D.fE7=new B.y("\ud83d\udce2 NGMY Ads",null,A.qT,null,null,null,null,A.eL,null,1,null,null)
D.bG1=new B.bA(1,A.bd,D.fE7,null)
D.fyL=new B.y("Wire selected",null,A.fS,null,null,null,null,null,null,null,null,null)
D.bGf=new B.bA(1,A.bd,D.fyL,null)
D.anD=new B.a0(62712,"MaterialIcons",!1)
D.bM_=new B.a0(62908,"MaterialIcons",!1)
D.bNG=new B.a0(983122,"MaterialIcons",!1)
D.bNS=new B.a0(983247,"MaterialIcons",!1)
D.bOn=new B.a0(983616,"MaterialIcons",!1)
D.bQe=new B.ae(A.OX,null,A.ac,null,null,null)
D.bNF=new B.a0(983117,"MaterialIcons",!1)
D.bS7=new B.ae(D.bNF,28,A.c,null,null,null)
D.bSn=new B.ae(A.iX,18,null,null,null,null)
D.bUf=new B.ae(A.e9,21,A.c6,null,null,null)
D.bUu=new B.ae(A.ol,null,A.ac,null,null,null)
D.bUE=new B.ae(A.a2m,21,A.ac,null,null,null)
D.bVv=new B.ae(A.eJ,17,A.ac,null,null,null)
D.bX4=new B.ae(A.Os,null,A.ac,null,null,null)
D.bYd=new B.ae(A.iX,21,A.ac,null,null,null)
D.bZL=new B.ae(A.e5,null,A.aT,null,null,null)
D.doy=w([A.d7,A.d3,A.d7],x.O)
D.c29=new B.a9(A.a5,A.a8,A.x,D.doy,null,null)
D.d0t=w([A.bO,A.bm],x.O)
D.c2h=new B.a9(A.b0,A.b5,A.x,D.d0t,null,null)
D.c2u=new B.a9(A.b0,A.b5,A.x,A.a5_,null,null)
D.arp=new B.a9(A.b0,A.b5,A.x,O.a4d,null,null)
D.cZ6=w([A.oX,A.iw],x.O)
D.c3g=new B.a9(A.b0,A.b5,A.x,D.cZ6,null,null)
D.d0b=w([A.e7,A.av],x.O)
D.arw=new B.a9(A.b0,A.b5,A.x,D.d0b,null,null)
D.dij=w([A.dt,A.jb,A.bm],x.O)
D.c3z=new B.a9(A.a5,A.a8,A.x,D.dij,null,null)
D.dip=w([A.hj,A.cr],x.O)
D.c3U=new B.a9(A.b0,A.b5,A.x,D.dip,null,null)
D.cxk=w([A.bO,A.dt],x.O)
D.c42=new B.a9(A.a5,A.a8,A.x,D.cxk,null,null)
D.aBq=w([A.e7,M.ng],x.O)
D.c49=new B.a9(A.b0,A.b5,A.x,D.aBq,null,null)
D.c4q=new B.a9(A.b0,A.b5,A.x,R.arS,null,null)
D.c5f=new B.a9(A.ay,A.aE,A.x,A.R0,null,null)
D.d9X=w([A.av,A.w],x.O)
D.c5q=new B.a9(A.b0,A.b5,A.x,D.d9X,null,null)
D.c5t=new B.a9(A.b0,A.b5,A.x,H.aAL,null,null)
D.boU=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bpK=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cKc=w([A.MI,D.boU,D.bpK],x.O)
D.c5D=new B.a9(A.b0,A.b5,A.x,D.cKc,null,null)
D.cxE=w([A.d2,A.fV],x.O)
D.c5T=new B.a9(A.b0,A.b5,A.x,D.cxE,null,null)
D.c6B=w([0,4,7],x.t)
D.c6C=w([0,4,7,12],x.t)
D.c6D=w([0,4,7,4],x.t)
D.aAr=w([A.he,A.q6],x.O)
D.azW=w([A.hg,A.cQ],x.O)
D.ayf=w([A.br,A.dH],x.O)
D.cSP=w([A.aT,A.d2],x.O)
D.djF=w([A.c_,A.l1],x.O)
D.axG=w([A.cL,A.kf],x.O)
D.cXW=w([A.bM,A.aK],x.O)
D.c6Z=w([D.aAr,D.azW,A.a4i,D.ayf,D.cSP,A.ayw,A.azq,D.djF,D.axG,D.cXW],B.at("O<ai<u>>"))
D.cbF=w([120,220,380],x.t)
D.cfp=w([12,16,19,24],x.t)
D.cfz=w([1400,800,450,2400],x.t)
D.cnY=w([250,450,900,1500],x.t)
D.bdv=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bpj=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bn8=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bsS=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bmg=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.awX=w([D.bdv,D.bpj,D.bn8,D.bsS,D.bmg],x.O)
D.cF7=w([50,25,75],x.t)
D.cKJ=w([0,5,10,15,18,20,25],x.t)
D.cT7=w([900,500,250,1600],x.t)
D.cXe=w([A.br,A.bD,A.b8,A.br],x.O)
D.a48=w([A.ax,A.bu,A.be,A.aJ,A.o4],x.O)
D.cYL=w([A.av,A.ax,A.cL,A.bu,A.be,A.cw,A.cf,A.bD,A.XD],x.O)
D.a4b=w([0.04,0.17,0.3],x.n)
D.f2r=new C.v9("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.f2x=new C.v9("Medium engine","A good all-rounder.",0.3,0.9)
D.f2w=new C.v9("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.I2=w([D.f2r,D.f2x,D.f2w],x._)
D.ezC=new B.z(6,"Easy")
D.eAn=new B.z(8,"Medium")
D.evm=new B.z(10,"Hard")
D.d_g=w([D.ezC,D.eAn,D.evm],x.I)
D.ayG=w([0.55,0.78,1],x.n)
D.ayR=w([A.c,A.fU,A.nW,A.av],x.O)
D.ayY=w([A.be,A.ax,A.bu,A.d3],x.O)
D.f2o=new C.v9("Radar","Shows your height above the ground.",0.1,0)
D.f2p=new C.v9("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.f2m=new C.v9("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.az5=w([D.f2o,D.f2p,D.f2m],x._)
D.d5n=w([47,100,220,470,1000],x.n)
D.J9={volts:0}
D.a60=new B.bw(D.J9,[3],x.J)
D.Jz=new B.eb(["b","battery",0.2,0.3,D.a60])
D.efY={on:0}
D.dzl=new B.bw(D.efY,[1],x.J)
D.DZ=new B.eb(["s","switch",0.5,0.3,D.dzl])
D.f05=new B.eb(["l","bulb",0.8,0.3,A.ji])
D.d0C=w([D.Jz,D.DZ,D.f05],x.d)
D.DY=new B.cy(["b",0,"s",0])
D.f_6=new B.cy(["s",1,"l",0])
D.aPT=new B.cy(["l",1,"b",1])
D.div=w([D.DY,D.f_6,D.aPT],x.o)
D.d02=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eux=new C.mR("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d0C,D.div,D.d02)
D.aJK={ohms:0}
D.aHh=new B.bw(D.aJK,[220],x.J)
D.f_z=new B.eb(["r","resistor",0.5,0.3,D.aHh])
D.f0k=new B.eb(["d","led",0.8,0.3,A.ji])
D.dlL=w([D.Jz,D.f_z,D.f0k],x.d)
D.eZs=new B.cy(["b",0,"r",0])
D.f_0=new B.cy(["r",1,"d",0])
D.eZy=new B.cy(["d",1,"b",1])
D.dv0=w([D.eZs,D.f_0,D.eZy],x.o)
D.dme=w(["led","diode","indicator"],x.s)
D.euE=new C.mR("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dlL,D.dv0,D.dme)
D.a7h={level:0}
D.dyH=new B.bw(D.a7h,[0.2],x.J)
D.f_F=new B.eb(["p","pot",0.5,0.3,D.dyH])
D.f_H=new B.eb(["m","motor",0.8,0.3,A.ji])
D.d0W=w([D.Jz,D.f_F,D.f_H],x.d)
D.eZr=new B.cy(["b",0,"p",0])
D.eZX=new B.cy(["p",1,"m",0])
D.eZT=new B.cy(["m",1,"b",1])
D.dqA=w([D.eZr,D.eZX,D.eZT],x.o)
D.dic=w(["fan","motor","spin","dimmer"],x.s)
D.euv=new C.mR("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d0W,D.dqA,D.dic)
D.a5Y=new B.bw(D.a7h,[0.9],x.J)
D.aQ_=new B.eb(["s","solar",0.25,0.3,D.a5Y])
D.aPZ=new B.eb(["l","bulb",0.75,0.3,A.ji])
D.d3K=w([D.aQ_,D.aPZ],x.d)
D.f_3=new B.cy(["s",0,"l",0])
D.eZS=new B.cy(["l",1,"s",1])
D.d1K=w([D.f_3,D.eZS],x.o)
D.drh=w(["solar","sun","without battery","no battery","free"],x.s)
D.euy=new C.mR("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d3K,D.d1K,D.drh)
D.f0n=new B.eb(["c","crank",0.25,0.3,D.a5Y])
D.dgv=w([D.f0n,D.aPZ],x.d)
D.eZv=new B.cy(["c",0,"l",0])
D.eZR=new B.cy(["l",1,"c",1])
D.dh4=w([D.eZv,D.eZR],x.o)
D.dgF=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.euu=new C.mR("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dgv,D.dh4,D.dgF)
D.dyG=new B.bw(D.a7h,[0.7],x.J)
D.f_K=new B.eb(["t","turbine",0.25,0.3,D.dyG])
D.f_x=new B.eb(["m","motor",0.75,0.3,A.ji])
D.daD=w([D.f_K,D.f_x],x.d)
D.f_e=new B.cy(["t",0,"m",0])
D.eZU=new B.cy(["m",1,"t",1])
D.d9A=w([D.f_e,D.eZU],x.o)
D.dfe=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eur=new C.mR("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.daD,D.d9A,D.dfe)
D.aHe=new B.bw(D.J9,[9],x.J)
D.a8m=new B.eb(["b","battery",0.2,0.3,D.aHe])
D.aPY=new B.eb(["r","radio",0.8,0.3,A.ji])
D.drR=w([D.a8m,D.DZ,D.aPY],x.d)
D.f_8=new B.cy(["s",1,"r",0])
D.aPU=new B.cy(["r",1,"b",1])
D.c6j=w([D.DY,D.f_8,D.aPU],x.o)
D.dqm=w(["radio","music","listen"],x.s)
D.euD=new C.mR("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.drR,D.c6j,D.dqm)
D.dzM=new B.bw(D.J9,[12],x.J)
D.aPX=new B.eb(["b","battery",0.2,0.3,D.dzM])
D.f06=new B.eb(["t","tv",0.8,0.3,A.ji])
D.d0E=w([D.aPX,D.DZ,D.f06],x.d)
D.f_9=new B.cy(["s",1,"t",0])
D.aPV=new B.cy(["t",1,"b",1])
D.djI=w([D.DY,D.f_9,D.aPV],x.o)
D.drP=w(["tv","television","screen","watch"],x.s)
D.euo=new C.mR("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d0E,D.djI,D.drP)
D.f_X=new B.eb(["z","buzzer",0.8,0.3,A.ji])
D.cHt=w([D.Jz,D.DZ,D.f_X],x.d)
D.f_a=new B.cy(["s",1,"z",0])
D.f_s=new B.cy(["z",1,"b",1])
D.cWr=w([D.DY,D.f_a,D.f_s],x.o)
D.doE=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.euA=new C.mR("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cHt,D.cWr,D.doE)
D.f_G=new B.eb(["h","heater",0.8,0.3,A.ji])
D.ddU=w([D.a8m,D.DZ,D.f_G],x.d)
D.f_5=new B.cy(["s",1,"h",0])
D.eZG=new B.cy(["h",1,"b",1])
D.cX9=w([D.DY,D.f_5,D.eZG],x.o)
D.crg=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eup=new C.mR("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.ddU,D.cX9,D.crg)
D.f08=new B.eb(["s","solar",0.2,0.25,D.a5Y])
D.dzP=new B.bw(D.aJK,[100],x.J)
D.f0b=new B.eb(["r","resistor",0.55,0.25,D.dzP])
D.f0i=new B.eb(["c","capacitor",0.85,0.25,A.ji])
D.f_C=new B.eb(["q","resistor",0.55,0.6,D.aHh])
D.f09=new B.eb(["d","led",0.85,0.6,A.ji])
D.dje=w([D.f08,D.f0b,D.f0i,D.f_C,D.f09],x.d)
D.f_4=new B.cy(["s",0,"r",0])
D.f__=new B.cy(["r",1,"c",0])
D.eZx=new B.cy(["c",1,"s",1])
D.eZw=new B.cy(["c",0,"q",0])
D.eZZ=new B.cy(["q",1,"d",0])
D.eZz=new B.cy(["d",1,"c",1])
D.d7t=w([D.f_4,D.f__,D.eZx,D.eZw,D.eZZ,D.eZz],x.o)
D.dfO=w(["capacitor","store","charge","flash"],x.s)
D.euC=new C.mR("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dje,D.d7t,D.dfO)
D.f_N=new B.eb(["b","battery",0.15,0.3,D.a60])
D.f0o=new B.eb(["l1","bulb",0.5,0.3,A.ji])
D.f_U=new B.eb(["l2","bulb",0.85,0.3,A.ji])
D.cZH=w([D.f_N,D.f0o,D.f_U],x.d)
D.eZq=new B.cy(["b",0,"l1",0])
D.eZO=new B.cy(["l1",1,"l2",0])
D.eZP=new B.cy(["l2",1,"b",1])
D.dbo=w([D.eZq,D.eZO,D.eZP],x.o)
D.drA=w(["series","two bulbs","dim"],x.s)
D.eus=new C.mR("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cZH,D.dbo,D.drA)
D.egg={volts:0,charge:1}
D.dzS=new B.bw(D.egg,[1.5,0],x.J)
D.f0g=new B.eb(["b","battery",0.75,0.3,D.dzS])
D.cZ7=w([D.aQ_,D.f0g],x.d)
D.f_2=new B.cy(["s",0,"b",0])
D.eZu=new B.cy(["b",1,"s",1])
D.d7M=w([D.f_2,D.eZu],x.o)
D.dfY=w(["charge","rechargeable","flat","recharge"],x.s)
D.euq=new C.mR("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cZ7,D.d7M,D.dfY)
D.dzL=new B.bw(D.J9,[4.5],x.J)
D.f_I=new B.eb(["b","battery",0.2,0.3,D.dzL])
D.aPW=new B.eb(["p","phone",0.8,0.3,A.ji])
D.das=w([D.f_I,D.DZ,D.aPW],x.d)
D.f_7=new B.cy(["s",1,"p",0])
D.a8l=new B.cy(["p",1,"b",1])
D.dnA=w([D.DY,D.f_7,D.a8l],x.o)
D.dp3=w(["phone","charger","usb","mobile"],x.s)
D.euw=new C.mR("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.das,D.dnA,D.dp3)
D.f_u=new B.eb(["f","fan",0.8,0.3,A.ji])
D.cjn=w([D.Jz,D.f_u],x.d)
D.eZp=new B.cy(["b",0,"f",0])
D.eZE=new B.cy(["f",1,"b",1])
D.cXI=w([D.eZp,D.eZE],x.o)
D.dib=w(["fan","cool","air","wind"],x.s)
D.euF=new C.mR("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cjn,D.cXI,D.dib)
D.f00=new B.eb(["b","battery",0.15,0.2,D.a60])
D.f_v=new B.eb(["a","ammeter",0.5,0.2,A.ji])
D.f_t=new B.eb(["l","bulb",0.85,0.2,A.ji])
D.f02=new B.eb(["v","voltmeter",0.5,0.6,A.ji])
D.dgj=w([D.f00,D.f_v,D.f_t,D.f02],x.d)
D.eZn=new B.cy(["b",0,"a",0])
D.eZm=new B.cy(["a",1,"l",0])
D.f_g=new B.cy(["v",0,"l",0])
D.f_h=new B.cy(["v",1,"l",1])
D.d7D=w([D.eZn,D.eZm,D.aPT,D.f_g,D.f_h],x.o)
D.dv_=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.euB=new C.mR("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dgj,D.d7D,D.dv_)
D.f0r=new B.eb(["b","battery",0.15,0.2,D.aHe])
D.f_M=new B.eb(["t","tv",0.55,0.2,A.ji])
D.aHf=new B.bw(D.J9,[5],x.J)
D.f_A=new B.eb(["c","buck",0.4,0.5,D.aHf])
D.f_O=new B.eb(["p","phone",0.8,0.5,A.ji])
D.d5a=w([D.f0r,D.f_M,D.f_A,D.f_O],x.d)
D.eZt=new B.cy(["b",0,"t",0])
D.aPR=new B.cy(["b",0,"c",0])
D.aPS=new B.cy(["c",1,"p",0])
D.dap=w([D.eZt,D.aPV,D.aPR,D.aPS,D.a8l],x.o)
D.d3i=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eut=new C.mR("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.d5a,D.dap,D.d3i)
D.f_B=new B.eb(["c","buck",0.5,0.3,D.aHf])
D.cWZ=w([D.aPX,D.f_B,D.aPW],x.d)
D.d15=w([D.aPR,D.aPS,D.a8l],x.o)
D.cuJ=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eun=new C.mR("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cWZ,D.d15,D.cuJ)
D.f_S=new B.eb(["d","diode",0.5,0.3,A.ji])
D.dbC=w([D.a8m,D.f_S,D.aPY],x.d)
D.eZo=new B.cy(["b",0,"d",0])
D.eZA=new B.cy(["d",1,"r",0])
D.cK0=w([D.eZo,D.eZA,D.aPU],x.o)
D.d2X=w(["diode","protect","backwards","one way"],x.s)
D.euz=new C.mR("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dbC,D.cK0,D.d2X)
D.Rd=w([D.eux,D.euE,D.euv,D.euy,D.euu,D.eur,D.euD,D.euo,D.euA,D.eup,D.euC,D.eus,D.euq,D.euw,D.euF,D.euB,D.eut,D.eun,D.euz],B.at("O<mR>"))
D.htF=new C.Gs("Moon",1.62,A.dt,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.htD=new C.Gs("Mars",3.71,A.ax,"Mars has about 38 percent of Earth's gravity.")
D.htG=new C.Gs("Mercury",3.7,A.ke,"Mercury is small, so its gravity is like Mars.")
D.htA=new C.Gs("Venus",8.87,A.aT,"Venus is almost as heavy as Earth, with strong gravity.")
D.htC=new C.Gs("Earth",9.81,A.aJ,"On Earth gravity is strong, and the air also slows you down.")
D.htE=new C.Gs("Neptune",11.15,A.d3,"Neptune pulls a little harder than Earth.")
D.htB=new C.Gs("Jupiter",24.79,A.cL,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rM=w([D.htF,D.htD,D.htG,D.htA,D.htC,D.htE,D.htB],B.at("O<Gs>"))
D.d7r=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.d8a=w([0.2,0.5,0.8],x.n)
D.aZO=new C.KK(0,"accordion")
D.cY3=w([A.jC,A.Cu,A.Cd],x.w)
D.d4A=w(["Mail","SMS","Ad"],x.s)
D.cYC=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hrS=new C.AM(D.aZO,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aAr,D.cY3,D.d4A,D.cYC)
D.ac1=new C.KK(1,"flip")
D.dfI=w([A.qv,Z.Hu,A.uC],x.w)
D.da9=w(["Unlock","Verify","Secure"],x.s)
D.cWV=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hrR=new C.AM(D.ac1,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.azW,D.dfI,D.da9,D.cWV)
D.aZP=new C.KK(2,"towers")
D.d8U=w([A.z0,A.qy,A.i6],x.w)
D.d8t=w(["Save","Grow","Earn"],x.s)
D.cKU=w(["","",""],x.s)
D.hrT=new C.AM(D.aZP,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a4i,D.d8U,D.d8t,D.cKU)
D.ac2=new C.KK(3,"assemble")
D.dgI=w([A.op,A.hx,A.e5],x.w)
D.d3W=w(["Launch","Charge","Shine"],x.s)
D.dcZ=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hrV=new C.AM(D.ac2,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.ayf,D.dgI,D.d3W,D.dcZ)
D.aZQ=new C.KK(4,"carousel")
D.dgw=w([A.b8,A.eN],x.O)
D.d4J=w([A.mO,A.ao9,A.P3],x.w)
D.d_6=w(["Explore","Discover","Learn"],x.s)
D.day=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hrQ=new C.AM(D.aZQ,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dgw,D.d4J,D.d_6,D.day)
D.aZR=new C.KK(5,"burst")
D.d8o=w([A.hZ,A.tL],x.O)
D.cYx=w([A.km,A.mM,A.hz],x.w)
D.cYT=w(["Cheer","Win","Love"],x.s)
D.d09=w(["Make some noise","First place","Share the joy"],x.s)
D.hrU=new C.AM(D.aZR,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.d8o,D.cYx,D.cYT,D.d09)
D.azD=w([D.hrS,D.hrR,D.hrT,D.hrV,D.hrQ,D.hrU],B.at("O<AM>"))
D.eWJ=new B.b7("skin","Skin",A.aoa)
D.eYb=new B.b7("muscle","Muscles",A.OF)
D.eXU=new B.b7("organ","Organs",A.hz)
D.bLI=new B.a0(62747,"MaterialIcons",!1)
D.eY_=new B.b7("bone","Skeleton",D.bLI)
D.eYj=new B.b7("vessel","Blood vessels",A.pm)
D.d9_=w([D.eWJ,D.eYb,D.eXU,D.eY_,D.eYj],x.r)
D.f2q=new C.v9("Simple legs","Light. Land gently.",0.15,0.2)
D.f2s=new C.v9("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.f2v=new C.v9("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.D_=w([D.f2q,D.f2s,D.f2v],x._)
D.eZ4=new B.cy(["beat",0.18,0.28,0])
D.f_b=new B.cy(["burst",0.7,0.2,0])
D.f_m=new B.cy(["delay",0.45,0.5,1])
D.eZW=new B.cy(["ripple",0.75,0.6,3])
D.d3F=w([D.eZ4,D.f_b,D.f_m,D.eZW],x.e)
D.df1=w([P.lo,O.Jy,G.TK],x.u)
D.hqO=new C.Gd("First spark","A clock lights a burst and a ripple",D.d3F,D.df1)
D.eZD=new B.cy(["beat",0.15,0.3,1])
D.eYJ=new B.cy(["ripple",0.62,0.15,0])
D.f_i=new B.cy(["delay",0.4,0.45,0])
D.eZj=new B.cy(["ripple",0.7,0.45,0])
D.eZ0=new B.cy(["delay",0.4,0.7,1])
D.eZY=new B.cy(["shake",0.75,0.75,0])
D.dsK=w([D.eZD,D.eYJ,D.f_i,D.eZj,D.eZ0,D.eZY],x.e)
D.ews=new B.z(2,4)
D.aPy=new B.z(4,5)
D.d7h=w([P.lo,O.Jy,G.TK,D.ews,D.aPy],x.u)
D.hqQ=new C.Gd("Heartbeat","Two thumps, then a shake",D.dsK,D.d7h)
D.eZ9=new B.cy(["dice",0.15,0.7,1])
D.f_o=new B.cy(["echo",0.4,0.7,0])
D.eZh=new B.cy(["comet",0.7,0.5,4])
D.f_c=new B.cy(["burst",0.72,0.2,1])
D.eZB=new B.cy(["burst",0.3,0.25,0])
D.eZa=new B.cy(["pop",0.55,0.85,0])
D.cqO=w([D.eZ9,D.f_o,D.eZh,D.f_c,D.eZB,D.eZa],x.e)
D.evO=new B.z(1,3)
D.evP=new B.z(1,4)
D.aPu=new B.z(0,5)
D.dgr=w([P.lo,S.va,D.evO,D.evP,D.aPu],x.u)
D.hqP=new C.Gd("Fireworks","Dice launch comets that burst in colour",D.cqO,D.dgr)
D.eZe=new B.cy(["beat",0.15,0.2,2])
D.eZL=new B.cy(["chance",0.4,0.2,0])
D.eZ6=new B.cy(["ball",0.7,0.12,3])
D.eYU=new B.cy(["chance",0.4,0.5,1])
D.f_n=new B.cy(["ball",0.3,0.08,1])
D.eYN=new B.cy(["ripple",0.7,0.55,3])
D.cjQ=w([D.eZe,D.eZL,D.eZ6,D.eYU,D.f_n,D.eYN],x.e)
D.ewt=new B.z(2,5)
D.cHb=w([P.lo,S.va,O.a8d,G.TL,D.ewt],x.u)
D.hqN=new C.Gd("Rain","Balls fall at random and splash",D.cjQ,D.cHb)
D.eZM=new B.cy(["beat",0.12,0.45,2])
D.f_d=new B.cy(["toggle",0.38,0.2,0])
D.f_k=new B.cy(["wash",0.7,0.15,4])
D.eZ8=new B.cy(["count3",0.38,0.45,0])
D.f_f=new B.cy(["burst",0.72,0.4,0])
D.eZC=new B.cy(["light",0.55,0.7,1])
D.eYV=new B.cy(["pop",0.8,0.8,4])
D.djc=w([D.eZM,D.f_d,D.f_k,D.eZ8,D.f_f,D.eZC,D.eYV],x.e)
D.ex_=new B.z(3,6)
D.cmY=w([P.lo,S.va,O.a8d,G.TL,D.aPu,D.ex_],x.u)
D.hqL=new C.Gd("Disco","A beat drives lights, washes and bursts",D.djc,D.cmY)
D.f_r=new B.cy(["button",0.12,0.2,0])
D.eYP=new B.cy(["delay",0.34,0.2,1])
D.f_q=new B.cy(["light",0.56,0.2,1])
D.f_j=new B.cy(["delay",0.56,0.45,1])
D.eZN=new B.cy(["ball",0.34,0.6,0])
D.eYT=new B.cy(["delay",0.34,0.8,1])
D.eYI=new B.cy(["burst",0.7,0.8,5])
D.c71=w([D.f_r,D.eYP,D.f_q,D.f_j,D.eZN,D.eYT,D.eYI],x.e)
D.ezb=new B.z(5,6)
D.doN=w([P.lo,S.va,G.TK,G.TL,D.aPy,D.ezb],x.u)
D.hqM=new C.Gd("Domino","Tap the button and watch it run down the line",D.c71,D.doN)
D.aA_=w([D.hqO,D.hqQ,D.hqP,D.hqN,D.hqL,D.hqM],B.at("O<Gd>"))
D.dei=w([0.05,0.15,0.25],x.n)
D.dfd=w([1.5,3,4.5,9,12],x.n)
D.eV9=new B.b7("dice","Dice",A.oh)
D.eWi=new B.b7("coin","Coin",Q.yW)
D.eYe=new B.b7("num","Number",A.z3)
D.dfr=w([D.eV9,D.eWi,D.eYe],x.r)
D.dfv=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aA5=w([A.c6,A.aT,A.bf,A.aJ,A.br,A.c_,A.cL,A.hg],x.O)
D.dgx=w([A.c_,A.aJ,A.dB,A.bf],x.O)
D.dhv=w([],x.a)
D.enG=new C.ei("battery","Battery","\ud83d\udd0b",A.bf,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.enM=new C.ei("solar","Solar panel","\u2600\ufe0f",A.bu,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eoq=new C.ei("crank","Hand crank","\ud83d\udd04",A.cL,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eo2=new C.ei("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aJ,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.eny=new C.ei("buck","Step-down converter","\ud83d\udd3d",A.hg,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eo0=new C.ei("regulator","5 V regulator","\ud83e\uddca",A.bM,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eov=new C.ei("diode","Diode","\u27a1\ufe0f",A.aT,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eoc=new C.ei("ldr","Light sensor","\ud83c\udf1e",A.dB,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.enR=new C.ei("switch","Switch","\ud83c\udf9a\ufe0f",A.br,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eos=new C.ei("fuse","Fuse","\ud83e\uddef",A.c6,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.enq=new C.ei("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hg,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eod=new C.ei("resistor","Resistor","\u3030\ufe0f",A.aT,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eof=new C.ei("bulb","Light bulb","\ud83d\udca1",A.dB,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.enO=new C.ei("led","LED","\ud83d\udd34",A.ax,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.enS=new C.ei("motor","Motor","\u2699\ufe0f",A.bM,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eo9=new C.ei("buzzer","Buzzer","\ud83d\udd14",A.c_,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.enH=new C.ei("heater","Heater","\ud83d\udd25",A.cL,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eo4=new C.ei("capacitor","Capacitor","\ud83e\udeab",A.co,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.enX=new C.ei("radio","Radio","\ud83d\udcfb",A.o4,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.enU=new C.ei("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b8,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.enx=new C.ei("voltmeter","Voltmeter","\ud83e\udded",A.bv,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.enE=new C.ei("ammeter","Ammeter","\ud83d\udcdf",A.aT,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.enK=new C.ei("fan","Fan","\ud83c\udf00",A.aJ,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eox=new C.ei("speaker","Speaker","\ud83d\udd0a",A.c_,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eom=new C.ei("clock","Digital clock","\u23f0",A.bf,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eo_=new C.ei("calculator","Calculator","\ud83e\uddee",A.LO,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.enD=new C.ei("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.co,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eow=new C.ei("router","WiFi router","\ud83d\udcf6",A.hg,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eoz=new C.ei("siren","Siren","\ud83d\udea8",A.ax,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.ent=new C.ei("toycar","Toy car","\ud83d\ude97",A.cL,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eoA=new C.ei("kettle","Kettle","\ud83e\uded6",A.mA,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.enB=new C.ei("lamp","Desk lamp","\ud83e\ude94",A.dB,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.enN=new C.ei("lights","Party lights","\ud83c\udf84",A.o4,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.enY=new C.ei("fridge","Fridge","\ud83e\uddca",A.hi,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.env=new C.ei("washer","Washing machine","\ud83e\udee7",A.co,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eon=new C.ei("blender","Blender","\ud83e\udd64",A.c6,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.enV=new C.ei("drone","Drone","\ud83d\ude81",A.bM,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.enA=new C.ei("drill","Power drill","\ud83d\udd29",A.aT,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.enZ=new C.ei("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eok=new C.ei("neon","Neon sign","\ud83e\udea7",A.c_,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.enw=new C.ei("microwave","Microwave","\ud83c\udf72",A.cL,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eoe=new C.ei("doorbell","Doorbell","\ud83d\udd14",A.bu,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.enJ=new C.ei("camera","Security camera","\ud83d\udcf7",A.al,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eo8=new C.ei("console","Game console","\ud83c\udfae",A.br,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eop=new C.ei("heartmon","Heart monitor","\ud83e\ude7a",A.hc,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.enu=new C.ei("aquarium","Aquarium","\ud83d\udc20",A.b8,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eo3=new C.ei("lighthouse","Lighthouse","\ud83d\uddfc",A.dB,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eob=new C.ei("discoball","Disco ball","\ud83e\udea9",A.o4,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eou=new C.ei("robot","Robot","\ud83e\udd16",A.aJ,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.ens=new C.ei("toaster","Toaster","\ud83c\udf5e",A.dZ,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eoy=new C.ei("ledstrip","LED strip","\ud83c\udf08",A.c_,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eoj=new C.ei("pump","Water pump","\ud83d\udeb0",A.aJ,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eo5=new C.ei("hairdryer","Hair dryer","\ud83d\udca8",A.hZ,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eoh=new C.ei("headphones","Headphones","\ud83c\udfa7",A.br,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.enC=new C.ei("smartwatch","Apple Watch Ultra","\u231a",A.bv,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eot=new C.ei("tablet","iPad Pro M5","\ud83d\udcf2",A.co,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.enp=new C.ei("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hc,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.enW=new C.ei("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bt,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.enP=new C.ei("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eoa=new C.ei("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",G.tH,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.enr=new C.ei("iphonefold","iPhone Fold","\ud83d\udcf1",A.b6,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.enF=new C.ei("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d3,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eor=new C.ei("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cw,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eo6=new C.ei("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.be,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eo1=new C.ei("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cd,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eoi=new C.ei("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ax,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.enQ=new C.ei("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bf,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eo7=new C.ei("honor","Honor Magic V5","\ud83d\udcf1",A.co,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eog=new C.ei("vivo","vivo X300 Pro","\ud83d\udcf1",A.cL,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eol=new C.ei("ereader","Kindle Scribe","\ud83d\udcd6",A.bt,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.eno=new C.ei("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cf,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.enT=new C.ei("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cw,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.enL=new C.ei("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b8,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.enz=new C.ei("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dB,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.enI=new C.ei("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ax,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eoo=new C.ei("vision","Apple Vision Pro","\ud83e\udd7d",A.br,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.RE=w([D.enG,D.enM,D.eoq,D.eo2,D.eny,D.eo0,D.eov,D.eoc,D.enR,D.eos,D.enq,D.eod,D.eof,D.enO,D.enS,D.eo9,D.enH,D.eo4,D.enX,D.enU,D.enx,D.enE,D.enK,D.eox,D.eom,D.eo_,D.enD,D.eow,D.eoz,D.ent,D.eoA,D.enB,D.enN,D.enY,D.env,D.eon,D.enV,D.enA,D.enZ,D.eok,D.enw,D.eoe,D.enJ,D.eo8,D.eop,D.enu,D.eo3,D.eob,D.eou,D.ens,D.eoy,D.eoj,D.eo5,D.eoh,D.enC,D.eot,D.enp,D.enW,D.enP,D.eoa,D.enr,D.enF,D.eor,D.eo6,D.eo1,D.eoi,D.enQ,D.eo7,D.eog,D.eol,D.eno,D.enT,D.enL,D.enz,D.enI,D.eoo],B.at("O<ei>"))
D.di7=w([5,10,15,25,45,60],x.t)
D.dit=w([-0.045,0.03,-0.015],x.n)
D.aAz=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.uN=w([0.05,0.2,0.35],x.n)
D.b6g=new B.ac(0,A.G,A.hN,A.dC,6)
D.dla=w([D.b6g],x.V)
D.euZ=new B.z(0,"AND")
D.evQ=new B.z(1,"Adder")
D.ewu=new B.z(2,"Blinker")
D.ex0=new B.z(3,"Memory")
D.dlZ=w([D.euZ,D.evQ,D.ewu,D.ex0],x.I)
D.aAM=w([-104,0,104],x.n)
D.aAN=w([-14,3],x.n)
D.dmS=w([-8,0,8],x.n)
D.aAV=w([-92,0,92],x.n)
D.dni=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.f2n=new C.v9("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.f2u=new C.v9("Medium tank","Balanced.",0.35,1)
D.f2t=new C.v9("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.RS=w([D.f2n,D.f2u,D.f2t],x._)
D.nA=w([0.04,0.2,0.36],x.n)
D.aB5=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eXT=new B.b7(D.aZO,"Fold",Q.ap8)
D.eWX=new B.b7(D.ac1,"Flip",A.Ck)
D.bLZ=new B.a0(62889,"MaterialIcons",!1)
D.eYa=new B.b7(D.aZP,"Rise",D.bLZ)
D.apm=new B.a0(983870,"MaterialIcons",!1)
D.eUB=new B.b7(D.ac2,"Assemble",D.apm)
D.eUL=new B.b7(D.aZQ,"Spin",D.anD)
D.eUI=new B.b7(D.aZR,"Pop",A.km)
D.doK=w([D.eXT,D.eWX,D.eYa,D.eUB,D.eUL,D.eUI],B.at("O<+(KK,m,a0)>"))
D.aBa=w([A.c_,A.dB,A.bv,A.aJ,A.br,A.c6],x.O)
D.dp9=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dqc=w([3,4.5,5,6,9],x.n)
D.b6P=new B.ac(0,A.G,A.aS,A.I,16)
D.dqE=w([D.b6P],x.V)
D.drd=w(["solar","turbine","crank","pot"],x.s)
D.drE=w([0,0.35,0.75,1],x.n)
D.dsZ=w(["volts","level","ohms","on"],x.s)
D.dup=w([A.jC,A.Cu,A.Cd,A.qv,Z.Hu,A.uC,A.z0,A.qy,A.i6,A.op,A.hx,A.e5,A.hz,A.i7,A.mM,A.lI,A.uB,A.rI,A.la,A.GZ,A.wt,A.Cj,A.Cf,A.a2a,A.Ow,A.Cq,A.OF,A.aoy,H.api,A.km],x.w)
D.edV={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hj9=new C.yo("Switch",G.uE,A.bu,0,"Tap it to turn it ON or OFF.")
D.hj5=new C.yo("Blinker",A.on,A.bv,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hj6=new C.yo("AND",D.apm,A.co,2,"ON only when BOTH inputs are ON.")
D.bNs=new B.a0(63671,"MaterialIcons",!1)
D.hj4=new C.yo("OR",D.bNs,A.br,2,"ON when EITHER input is ON.")
D.hj7=new C.yo("XOR",Aa.a1z,A.c_,2,"ON when the inputs are DIFFERENT.")
D.hj1=new C.yo("NAND",A.um,A.aJ,2,"OFF only when BOTH inputs are ON.")
D.bMy=new B.a0(63176,"MaterialIcons",!1)
D.hj2=new C.yo("NOR",D.bMy,A.hg,2,"ON only when BOTH inputs are OFF.")
D.hj3=new C.yo("NOT",Y.Cv,A.cL,1,"Flips the signal: ON becomes OFF.")
D.hj8=new C.yo("Light",A.rD,A.dB,1,"Glows when its input is ON.")
D.hja=new C.yo("Buzzer",A.oo,A.c6,1,"Beeps while its input is ON.")
D.zG=new B.bw(D.edV,[D.hj9,D.hj5,D.hj6,D.hj4,D.hj7,D.hj1,D.hj2,D.hj3,D.hj8,D.hja],B.at("bw<m,yo>"))
D.cXs=w([A.A],x.M)
D.cXP=w([A.ay,A.aE],x.M)
D.d6h=w([A.ay,A.A,A.aE],x.M)
D.d7S=w([A.ay,A.ls,A.A,A.lt,A.aE],x.M)
D.dlV=w([A.ay,A.ls,A.a5,A.a8,A.lt,A.aE],x.M)
D.dz9=new B.dp([1,D.cXs,2,D.cXP,3,D.d6h,4,A.aBH,5,D.d7S,6,D.dlV],B.at("dp<G,ai<d9>>"))
D.ege={Calm:0,Box:1,Sleep:2}
D.cEB=w([4,2,6,0],x.n)
D.cEI=w([4,4,4,4],x.n)
D.cEJ=w([4,7,8,0],x.n)
D.Sj=new B.bw(D.ege,[D.cEB,D.cEI,D.cEJ],B.at("bw<m,ai<J>>"))
D.ee5={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xo=new C.a0N(0,"source")
D.d7k=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hpr=new C.qi("Clock",A.on,D.xo,A.bv,D.d7k)
D.hpn=new C.qi("Button",A.Cy,D.xo,A.aT,A.Y)
D.dqo=w(["random","quick","slow"],x.s)
D.hpy=new C.qi("Dice",A.oh,D.xo,A.c_,D.dqo)
D.bN5=new B.a0(63484,"MaterialIcons",!1)
D.EG=new C.a0N(1,"logic")
D.dve=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hpu=new C.qi("Delay",D.bN5,D.EG,A.co,D.dve)
D.die=w(["fast","mid","slow"],x.s)
D.hpz=new C.qi("Echo",A.aoP,D.EG,A.br,D.die)
D.hpw=new C.qi("Every 2nd",Y.Cv,D.EG,A.hg,A.Y)
D.bML=new B.a0(63309,"MaterialIcons",!1)
D.hpt=new C.qi("Every 3rd",D.bML,D.EG,A.aJ,A.Y)
D.bOI=new B.a0(983902,"MaterialIcons",!1)
D.c6p=w(["50%","25%","75%"],x.s)
D.hpB=new C.qi("Chance",D.bOI,D.EG,A.cL,D.c6p)
D.r2=new C.a0N(2,"out")
D.hpp=new C.qi("Light",A.rD,D.r2,A.dB,A.Y)
D.hpq=new C.qi("Burst",A.km,D.r2,A.c_,A.Y)
D.hpo=new C.qi("Ripple",A.z5,D.r2,A.b8,A.Y)
D.hpx=new C.qi("Ball",A.ap0,D.r2,A.cL,A.Y)
D.hpv=new C.qi("Comet",A.op,D.r2,A.br,A.Y)
D.bOs=new B.a0(983669,"MaterialIcons",!1)
D.hpA=new C.qi("Shake",D.bOs,D.r2,A.c6,A.Y)
D.hpC=new C.qi("Pop",A.H_,D.r2,A.bf,A.Y)
D.hps=new C.qi("Wash",A.OJ,D.r2,A.p0,A.Y)
D.mS=new B.bw(D.ee5,[D.hpr,D.hpn,D.hpy,D.hpu,D.hpz,D.hpw,D.hpt,D.hpB,D.hpp,D.hpq,D.hpo,D.hpx,D.hpv,D.hpA,D.hpC,D.hps],B.at("bw<m,qi>"))
D.eeh={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.A7=new C.JI(0,"tv")
D.f3V=new C.mn("Samsung Neo QLED 8K",D.A7,G.Fx,A.aJ)
D.f3M=new C.mn("LG OLED evo G5",D.A7,A.ei,A.hc)
D.f3D=new C.mn("Sony Bravia 9",D.A7,A.rc,A.bt)
D.f3H=new C.mn("Apple TV 4K",D.A7,A.e2,A.bO)
D.f3E=new C.mn("Bang and Olufsen Beovision",D.A7,G.Fb,G.tH)
D.JD=new C.JI(1,"iphone")
D.aQl=new C.mn("iPhone 18 Pro Max",D.JD,D.aiP,A.cf)
D.wT=new C.JI(3,"fold")
D.bsz=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.f3R=new C.mn("iPhone Fold",D.wT,D.bsz,A.b6)
D.ve=new C.JI(2,"android")
D.f3S=new C.mn("Samsung Galaxy S26 Ultra",D.ve,G.aeA,A.d3)
D.blp=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.f3K=new C.mn("Samsung Galaxy Z Fold7",D.wT,D.blp,A.cw)
D.f3G=new C.mn("Google Pixel 10 Pro XL",D.ve,A.dt,A.be)
D.f3O=new C.mn("Xiaomi 16 Ultra",D.ve,A.i2,A.cd)
D.f3J=new C.mn("Huawei Mate 80 Pro Max",D.ve,A.el,A.ax)
D.f3F=new C.mn("OPPO Find X9 Ultra",D.ve,A.dY,A.bf)
D.f3X=new C.mn("Honor Magic V5",D.wT,A.d7,A.co)
D.f3L=new C.mn("vivo X300 Pro",D.ve,A.hM,A.cL)
D.TV=new C.JI(4,"tablet")
D.f3Q=new C.mn("iPad Pro M5",D.TV,A.dt,A.aJ)
D.a8x=new C.JI(5,"reader")
D.f3Y=new C.mn("Kindle Scribe",D.a8x,A.e7,A.bt)
D.A8=new C.JI(6,"computer")
D.f3P=new C.mn("MacBook Pro M5 Max",D.A8,A.dt,A.cf)
D.f3U=new C.mn("iMac 32 inch",D.A8,A.bO,A.cw)
D.f3N=new C.mn("Pro Display XDR 8K",D.A8,A.i2,A.b8)
D.f3I=new C.mn("Sony Laser Projector",D.A8,A.cr,A.dB)
D.f3T=new C.mn("Luxury car touchscreen",D.A8,M.ng,A.ax)
D.f3W=new C.mn("Apple Vision Pro",D.A8,A.hj,A.br)
D.mj=new B.bw(D.eeh,[D.f3V,D.f3M,D.f3D,D.f3H,D.f3E,D.aQl,D.f3R,D.f3S,D.f3K,D.f3G,D.f3O,D.f3J,D.f3F,D.f3X,D.f3L,D.f3Q,D.f3Y,D.f3P,D.f3U,D.f3N,D.f3I,D.f3T,D.f3W],B.at("bw<m,mn>"))
D.eep={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bvk=new C.fS(20,4,13,!1)
D.bvL=new C.fS(14,5,13.5,!1)
D.bvC=new C.fS(9,2.4,10,!1)
D.bvQ=new C.fS(7,5,12.5,!1)
D.bvF=new C.fS(8,3.5,12,!1)
D.bvg=new C.fS(15,2,6,!1)
D.bvO=new C.fS(45,6,13.5,!0)
D.bvw=new C.fS(10,8,13.5,!1)
D.bvo=new C.fS(25,3,12,!0)
D.bvu=new C.fS(35,4,12,!0)
D.bvv=new C.fS(40,4.5,9.5,!0)
D.bvx=new C.fS(55,3,9,!0)
D.bvh=new C.fS(18,3,9,!1)
D.bvN=new C.fS(22,4,13.5,!1)
D.bvG=new C.fS(16,5,13.5,!1)
D.bvs=new C.fS(30,4,9,!0)
D.bvZ=new C.fS(5,3.5,13,!1)
D.bvA=new C.fS(25,3,13.5,!0)
D.bvJ=new C.fS(14,2.5,9,!1)
D.bvz=new C.fS(6,6,13,!1)
D.bvR=new C.fS(30,1.2,5,!0)
D.bvY=new C.fS(35,3,4.5,!0)
D.bvU=new C.fS(20,4.5,7.5,!0)
D.bvy=new C.fS(55,5.5,13.5,!0)
D.bvf=new C.fS(45,5.5,13.5,!0)
D.bvK=new C.fS(40,5.5,13.5,!0)
D.bvX=new C.fS(60,6,13.5,!0)
D.aji=new C.fS(28,4,7,!0)
D.G9=new C.fS(25,4,7,!0)
D.bvr=new C.fS(30,4,7,!0)
D.bvm=new C.fS(22,4,7,!0)
D.bvn=new C.fS(24,4,7,!0)
D.bvB=new C.fS(60,3,5.5,!0)
D.bvi=new C.fS(18,9,14,!0)
D.bvp=new C.fS(25,9,14,!0)
D.ajj=new C.fS(30,8,14,!0)
D.bvl=new C.fS(20,8,14,!0)
D.bvt=new C.fS(30,9,14,!0)
D.bvS=new C.fS(22,5,9.5,!0)
D.bvj=new C.fS(30,2.5,10.5,!0)
D.bvH=new C.fS(50,5.5,13.5,!0)
D.bvW=new C.fS(12,2,9.5,!1)
D.bvE=new C.fS(16,1.3,9.5,!0)
D.bvP=new C.fS(40,2.5,7,!0)
D.bvV=new C.fS(60,1.2,4.8,!0)
D.bvT=new C.fS(18,5,13.5,!0)
D.bvM=new C.fS(8,2,9.5,!1)
D.bvD=new C.fS(12,2.5,8,!1)
D.bvq=new C.fS(20,3.5,13.5,!0)
D.bvI=new C.fS(3.5,3,13,!1)
D.zH=new B.bw(D.eep,[D.bvk,D.bvL,D.bvC,D.bvQ,D.bvF,D.bvg,D.bvO,D.bvw,D.bvo,D.bvu,D.bvv,D.bvx,D.bvh,D.bvN,D.bvG,D.bvs,D.bvZ,D.bvA,D.bvJ,D.bvz,D.bvR,D.bvY,D.bvU,D.bvy,D.bvf,D.bvK,D.bvX,D.aji,D.G9,D.bvr,D.G9,D.bvm,D.G9,D.bvn,D.aji,D.G9,D.bvB,D.bvi,D.bvp,D.ajj,D.bvl,D.bvt,D.bvS,D.bvj,D.bvH,D.bvW,D.bvE,D.bvP,D.bvV,D.G9,D.ajj,D.bvT,D.bvM,D.bvD,D.bvq,D.bvI],B.at("bw<m,fS>"))
D.ee4={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eU7=new B.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.ez8=new B.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.ez3=new B.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eLx=new B.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eMu=new B.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eLt=new B.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.ex9=new B.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eJq=new B.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eUf=new B.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eMQ=new B.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eCw=new B.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.ewO=new B.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eBv=new B.z("Movement","They pull your legs together and help you balance.")
D.eDt=new B.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.ezh=new B.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eRz=new B.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eSJ=new B.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eJ8=new B.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eSs=new B.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eHJ=new B.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eMZ=new B.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.ewV=new B.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eDQ=new B.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eMD=new B.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eI4=new B.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eSA=new B.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eKY=new B.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.ex7=new B.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eNz=new B.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eRc=new B.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.ePj=new B.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eva=new B.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eKG=new B.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eKK=new B.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eEA=new B.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.ezv=new B.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eDh=new B.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eJA=new B.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eQ8=new B.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eUc=new B.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eMW=new B.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.euT=new B.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eJM=new B.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.evJ=new B.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eQo=new B.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eRv=new B.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eKc=new B.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eQD=new B.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.ewX=new B.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eS6=new B.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eAS=new B.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.ePM=new B.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eEe=new B.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eHZ=new B.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eNf=new B.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eSg=new B.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eS8=new B.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eSc=new B.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eIw=new B.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eO7=new B.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.ePg=new B.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eRT=new B.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eKb=new B.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eGi=new B.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eF0=new B.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eKB=new B.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eN8=new B.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eGP=new B.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eHw=new B.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eBf=new B.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eRr=new B.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eC5=new B.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.evG=new B.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eEz=new B.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.evB=new B.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.ezX=new B.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eEE=new B.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eCf=new B.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eNv=new B.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eDw=new B.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eTV=new B.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eFa=new B.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eIp=new B.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eL5=new B.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eCo=new B.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eC7=new B.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dAg=new B.bw(D.ee4,[D.eU7,D.ez8,D.ez3,D.eLx,D.eMu,D.eLt,D.ex9,D.eJq,D.eUf,D.eMQ,D.eCw,D.ewO,D.eBv,D.eDt,D.ezh,D.eRz,D.eSJ,D.eJ8,D.eSs,D.eHJ,D.eMZ,D.ewV,D.eDQ,D.eMD,D.eI4,D.eSA,D.eKY,D.ex7,D.eNz,D.eRc,D.ePj,D.eva,D.eKG,D.eKK,D.eEA,D.ezv,D.eDh,D.eJA,D.eQ8,D.eUc,D.eMW,D.euT,D.eJM,D.evJ,D.eQo,D.eRv,D.eKc,D.eQD,D.ewX,D.eS6,D.eAS,D.ePM,D.eEe,D.eHZ,D.eNf,D.eSg,D.eS8,D.eSc,D.eIw,D.eO7,D.ePg,D.eRT,D.eKb,D.eGi,D.eF0,D.eKB,D.eN8,D.eGP,D.eHw,D.eBf,D.eRr,D.eC5,D.evG,D.eEz,D.evB,D.ezX,D.eEE,D.eCf,D.eNv,D.eDw,D.eTV,D.eFa,D.eIp,D.eL5,D.eCo,D.eC7],B.at("bw<m,+(m,m)>"))
D.dAi=new B.hi(A.G,11)
D.dAm=new B.hi(A.G,30)
D.dHr=new C.UO(null)
D.dHE=new C.UP(null)
D.dJF=new C.UT(null)
D.dKt=new C.Vt(null)
D.dKw=new C.Vu(null)
D.dL4=new C.VC(null)
D.dOJ=new C.Wa(null)
D.dPp=new C.Wb(null)
D.dTC=new C.Wg(null)
D.e8v=new C.Wh(null)
D.e8y=new C.Wl(null)
D.eaI=new C.WF(null)
D.eaJ=new C.a8J(null)
D.ecM=new C.WO(null)
D.egq=new B.t(0,118)
D.aJQ=new B.t(0,13)
D.egr=new B.t(0,17)
D.egu=new B.t(0,330)
D.egA=new B.t(0,-13)
D.egB=new B.t(0,-17)
D.egC=new B.t(0,-18)
D.egD=new B.t(0,-19)
D.egG=new B.t(0,-28)
D.egH=new B.t(0,-31)
D.egI=new B.t(0,-32)
D.egM=new B.t(-9.5,-11)
D.egP=new B.t(10,20)
D.egS=new B.t(10,-13)
D.egT=new B.t(10,-22)
D.egU=new B.t(10,-4)
D.a7n=new B.t(11,8)
D.eh1=new B.t(12,2)
D.eh2=new B.t(14,0)
D.eh3=new B.t(14,12)
D.aK0=new B.t(14,8)
D.eh4=new B.t(14,-17)
D.aK2=new B.t(14,-3)
D.aK3=new B.t(14,-4)
D.eh7=new B.t(15,0)
D.eh8=new B.t(15,-12)
D.ehb=new B.t(16,-8)
D.ehc=new B.t(18,14)
D.ehd=new B.t(18,-12)
D.aK8=new B.t(20,0)
D.ehl=new B.t(20,15)
D.ehm=new B.t(20,-17)
D.ehn=new B.t(20,-3)
D.eho=new B.t(21,8)
D.ehs=new B.t(22,10)
D.aKa=new B.t(22,8)
D.eht=new B.t(24,0)
D.ehu=new B.t(24,2)
D.ehx=new B.t(24,-18)
D.ehy=new B.t(24,-22)
D.ehC=new B.t(25,8)
D.ehD=new B.t(26,0)
D.ehJ=new B.t(28,-30)
D.ehP=new B.t(30,18)
D.ehQ=new B.t(30,2)
D.ehT=new B.t(31,19)
D.ehV=new B.t(32,0)
D.aKe=new B.t(34,0)
D.aKf=new B.t(34,-32)
D.Jd=new B.t(36,0)
D.ei7=new B.t(3,-1)
D.eia=new B.t(40,3)
D.eio=new B.t(4,11)
D.eir=new B.t(4,-2)
D.eiw=new B.t(5,0)
D.eix=new B.t(5,17)
D.eiy=new B.t(5,6)
D.eiD=new B.t(6,11)
D.eiJ=new B.t(8,7)
D.eiK=new B.t(8,-10)
D.eiL=new B.t(8,-14)
D.aKk=new B.t(9,0)
D.eiV=new B.t(-20.5,-17.6)
D.eiW=new B.t(-9,18.5)
D.eiZ=new B.t(-2.6,-1)
D.ej7=new B.t(2.6,1)
D.eje=new B.t(-9,12.2)
D.ejy=new B.t(-9,20.5)
D.ejU=new B.t(-10,0)
D.ejV=new B.t(-10,12)
D.aKs=new B.t(-10,4)
D.ek0=new B.t(-11,-2)
D.ek4=new B.t(-13,-5)
D.ek5=new B.t(-14,0)
D.ek6=new B.t(-14,13)
D.ek7=new B.t(-14,2)
D.ek8=new B.t(-14,-12)
D.ek9=new B.t(-14,-19)
D.ekb=new B.t(-14,-23)
D.ekc=new B.t(-15,6)
D.ekf=new B.t(-16,14)
D.ekh=new B.t(-16,-8)
D.eki=new B.t(-17,10)
D.ekj=new B.t(-17,-18)
D.ekk=new B.t(-17,-8)
D.ekm=new B.t(-18,20)
D.ekn=new B.t(-18,-9)
D.aKu=new B.t(-20,0)
D.ekp=new B.t(-20,16)
D.ekq=new B.t(-20,-9)
D.Tf=new B.t(-22,8)
D.ekr=new B.t(-22,-10)
D.eks=new B.t(-22,-11)
D.ekt=new B.t(-24,10)
D.eku=new B.t(-24,11)
D.ekv=new B.t(-24,14)
D.ekw=new B.t(-24,-22)
D.eky=new B.t(-25,-11)
D.ekz=new B.t(-26,0)
D.ekA=new B.t(-26,-18)
D.ekB=new B.t(-2,9)
D.ekC=new B.t(-2,-10)
D.ekD=new B.t(-2,-20)
D.ekG=new B.t(-2,-9)
D.ekI=new B.t(-32,0)
D.aKw=new B.t(-34,0)
D.ekN=new B.t(-40,3)
D.ekP=new B.t(-4,11)
D.ekQ=new B.t(-4,-17)
D.ekR=new B.t(-4,-2)
D.ekV=new B.t(-5,0)
D.ekW=new B.t(-5,20)
D.ekX=new B.t(-5,6)
D.ekY=new B.t(-6,26)
D.ekZ=new B.t(-6,6)
D.el_=new B.t(-6,-42)
D.el0=new B.t(-7,-19)
D.el1=new B.t(-7,-24)
D.el4=new B.t(-8,-9)
D.a7v=new B.t(-9,0)
D.el5=new B.t(-9,1)
D.el7=new B.t(-9,-23)
D.fAI=new B.y("Thinking\u2026",null,A.hq,null,null,null,null,null,null,null,null,null)
D.em9=new B.D(A.jy,D.fAI,null)
D.fRn=new B.y("Start from a ready-made board",null,A.fx,null,null,null,null,null,null,null,null,null)
D.emm=new B.D(A2.w4,D.fRn,null)
D.bDh=new B.Q(4,0,4,14)
D.fvV=new B.F(!0,A.aC,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBH=new B.y("Games and little helpers for a spare minute.",null,D.fvV,null,null,null,null,null,null,null,null,null)
D.emy=new B.D(D.bDh,D.fBH,null)
D.diP=w([A.iy,A.bm],x.O)
D.aPn=new B.c2(A.A,0.5,A.x,null,0,D.diP,null,null)
D.etI=new B.c2(A.A,0.5,A.x,null,0,D.aBq,null,null)
D.d9G=w([A.c,A.bM],x.O)
D.etK=new B.c2(A.A,0.5,A.x,null,0,D.d9G,null,null)
D.drr=w([A.bO,A.hj],x.O)
D.aPo=new B.c2(A.A,0.5,A.x,null,0,D.drr,null,null)
D.cOy=w([A.c,A.bO],x.O)
D.etO=new B.c2(A.tr,0.5,A.x,null,0,D.cOy,null,null)
D.bsD=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dpr=w([A.fd,D.bsD],x.O)
D.etU=new B.c2(A.tr,0.5,A.x,null,0,D.dpr,null,null)
D.cHJ=w([A.dt,A.cr],x.O)
D.etV=new B.c2(A.A,0.5,A.x,null,0,D.cHJ,null,null)
D.cWp=w([A.fU,A.aT,A.d2],x.O)
D.etY=new B.c2(A.tr,0.5,A.x,null,0,D.cWp,null,null)
D.djt=w([A.hj,M.ng],x.O)
D.etZ=new B.c2(A.tr,0.5,A.x,null,0,D.djt,null,null)
D.eu2=new B.c2(A.A,0.5,A.x,null,0,D.axG,null,null)
D.dsh=w([A.hj,A.hW],x.O)
D.eua=new B.c2(A.A,0.5,A.x,null,0,D.dsh,null,null)
D.aPs=new B.aP(9,9)
D.euj=new B.aP(1.4,1.4)
D.f0v=new B.a3(10,-8,18,-2)
D.f0w=new B.a3(14,-14,20,14)
D.f0y=new B.a3(20,-2,30,2)
D.f0D=new B.a3(4,-13,30,-3)
D.f0J=new B.a3(8,-7,12,7)
D.f0V=new B.a3(-12,12,12,19)
D.f0W=new B.a3(-12,14,12,22)
D.f0X=new B.a3(-12,-22,12,8)
D.f0Y=new B.a3(-12,-25,12,19)
D.f0Z=new B.a3(-12,-26,12,-6)
D.f1_=new B.a3(-12,-4,12,14)
D.f11=new B.a3(-14,20,14,24)
D.f12=new B.a3(-14,6,14,10)
D.f13=new B.a3(-14,-17,14,15)
D.f14=new B.a3(-14,-26,14,18)
D.f15=new B.a3(-14,-4,14,20)
D.f17=new B.a3(-15,-29,15,25)
D.f18=new B.a3(-16,-16,16,16)
D.f1b=new B.a3(-16,-22,-9,18)
D.f1c=new B.a3(-16,-24,16,-10)
D.f1e=new B.a3(-16,-2,16,20)
D.f1g=new B.a3(-18,20,18,24)
D.f1h=new B.a3(-18,-18,18,20)
D.f1i=new B.a3(-20,12,20,22)
D.f1j=new B.a3(-20,-28,20,26)
D.f1k=new B.a3(-22,14,22,18)
D.aQ2=new B.a3(-22,-26,22,24)
D.f1l=new B.a3(-22,-3,22,3)
D.f1m=new B.a3(-22,-4,22,12)
D.f1o=new B.a3(-24,-12,10,22)
D.f1p=new B.a3(-24,-14,22,8)
D.f1q=new B.a3(-24,-6,24,20)
D.aQ3=new B.a3(-24,-9,24,9)
D.f1r=new B.a3(-25,14,25,19)
D.f1s=new B.a3(-26,-14,14,8)
D.f1t=new B.a3(-26,-4,26,20)
D.f1u=new B.a3(-26,-6,4,6)
D.aQ4=new B.a3(-28,-13,28,13)
D.f1v=new B.a3(-28,-16,28,16)
D.f1w=new B.a3(-28,-16,28,8)
D.f1x=new B.a3(-28,-22,28,22)
D.f1y=new B.a3(-30,-12,30,14)
D.f1z=new B.a3(-30,-14,0,14)
D.f1A=new B.a3(-30,-18,30,20)
D.f1B=new B.a3(-30,-28,30,14)
D.f1C=new B.a3(-30,-2,30,18)
D.f1D=new B.a3(-30,-4,30,18)
D.f1E=new B.a3(-32,-17,32,17)
D.f1F=new B.a3(-32,-28,32,18)
D.f1G=new B.a3(-33,-21,33,17)
D.f1H=new B.a3(-34,14,34,26)
D.a8o=new B.a3(-34,-18,34,18)
D.f1I=new B.a3(-34,-4,34,7)
D.f1J=new B.a3(-36,-24,36,20)
D.f1K=new B.a3(-38,-22,38,22)
D.f1M=new B.a3(-3,12,3,22)
D.f1N=new B.a3(-3,5,3,15)
D.f1R=new B.a3(-46,-34,46,28)
D.f1T=new B.a3(-48,-3,48,3)
D.f1W=new B.a3(-6,18,24,24)
D.f1X=new B.a3(-6,5,6,12)
D.f1Y=new B.a3(-6,-22,6,-15)
D.f21=new B.a3(-9,-16,9,22)
D.f22=new B.a3(-4.5,-24,4.5,-21.2)
D.f24=new B.a3(14,-9,17.5,9)
D.efF={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aR_=new B.dD(D.efF,5,x.Q)
D.efa={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.f5d=new B.dD(D.efa,10,x.Q)
D.f7s=new B.av(24,44)
D.f7Q=new B.av(54,38)
D.f7X=new B.av(66,38)
D.bbt=new B.fk(2,null,null,null,null,A.br,null,null,null,null)
D.f8Z=new B.a5(16,16,D.bbt,null)
D.aRY=new B.hK(3,12,12,0.82,null)
D.flH=new B.F(!0,A8.xJ,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgg=new B.eu("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cN,null,null,null,null,null,null,D.flH)
D.fqJ=new B.F(!0,A.kC,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgm=new B.eu("AI",null,null,A.cN,null,null,null,null,null,null,D.fqJ)
D.fgE=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fha=new B.F(!0,A.bk,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhx=new B.F(!0,A.co,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi2=new B.F(!0,A.bU,null,null,null,null,11,A.U,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi7=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fio=new B.F(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiU=new B.F(!0,A.aR,null,null,null,null,12,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5R=new B.cW(A.hN,A.dC,6)
D.dcG=w([D.f5R],B.at("O<cW>"))
D.fjR=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dcG,null,null,null)
D.fjW=new B.F(!0,A.es,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk0=new B.F(!0,A.bU,null,null,null,null,10.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkD=new B.F(!0,A.bU,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkL=new B.F(!0,A.aC,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flL=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmg=new B.F(!0,A.aC,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmN=new B.F(!0,A.aT,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmP=new B.F(!0,A.c,null,null,null,null,10.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.aBK,null,null,null)
D.fmV=new B.F(!0,A.c,null,null,null,null,12.5,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foJ=new B.F(!0,A.tV,null,null,null,null,12.5,A.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpj=new B.F(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpo=new B.F(!0,A.bU,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpt=new B.F(!0,A.aC,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqf=new B.F(!0,A.mC,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqu=new B.F(!0,A.ac,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aU4=new B.F(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fry=new B.F(!0,A.fV,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frR=new B.F(!0,A.bU,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fso=new B.F(!0,A.bf,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftQ=new B.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuk=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuC=new B.F(!0,A.aT,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuY=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv0=new B.F(!0,A.aT,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvL=new B.F(!0,A.aR,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw9=new B.F(!0,A.tV,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fww=new B.F(!0,A.bf,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk3=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwV=new B.y("\u26a0\ufe0f ",null,D.fk3,null,null,null,null,null,null,null,null,null)
D.fx7=new B.y("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.vp,null,null,null,null,null,null,null,null,null)
D.fyK=new B.y("Pick one, then change it and see what happens.",null,A.vp,null,null,null,null,null,null,null,null,null)
D.fyO=new B.y("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.flc=new B.F(!0,A.ac,null,null,null,null,null,A.U,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzK=new B.y("What do you want to invent? Type it below, or tap an idea.",null,D.flc,null,null,null,null,null,null,null,null,null)
D.fBi=new B.y("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fBV=new B.y("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fCx=new B.y("Make it yours",null,A.k6,null,null,null,null,null,null,null,null,null)
D.fFJ=new B.y("5G",null,X.aTp,null,null,null,null,null,null,null,null,null)
D.fs8=new B.F(!0,A.bU,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGU=new B.y("WHAT HAPPENS",null,D.fs8,null,null,null,null,null,null,null,null,null)
D.fIE=new B.y("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fJk=new B.y("Change the words and pictures on the three slabs.",null,A.vp,null,null,null,null,null,null,null,null,null)
D.fJv=new B.y("All the parts and wires will be removed.",null,A.hb,null,null,null,null,null,null,null,null,null)
D.fJP=new B.y("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fKo=new B.y("Tap the crank on the board again and again to spin it faster.",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fLC=new B.y("\ud83c\udfaf Challenges",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fMa=new B.y("Remove this part",null,W.aT0,null,null,null,null,null,null,null,null,null)
D.fMs=new B.y("Clear the board?",null,A.df,null,null,null,null,null,null,null,null,null)
D.frz=new B.F(!0,A.bv,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMI=new B.y("How the Lab works",null,D.frz,null,null,null,null,null,null,null,null,null)
D.fiB=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN3=new B.y("Electronics Lab",null,D.fiB,null,null,null,null,A.a1,null,1,null,null)
D.fN7=new B.y("?",null,O.aUA,null,null,null,null,null,null,null,null,null)
D.fOp=new B.y("Ready-made circuits",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fP2=new B.y("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fuG=new B.F(!0,A.aT,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSv=new B.y("\u26a0 There is no air here, so a parachute will not work.",null,D.fuG,null,null,null,null,null,null,null,null,null)
D.fTI=new B.y("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,W.aT_,null,null,null,null,null,null,null,null,null)
D.fUc=new B.y("NGMY",null,A.vn,null,null,null,null,null,null,null,null,null)
D.fUq=new B.y("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.V5,null,null,null,null,null,null,null,null,null)
D.fUP=new B.y("Tap it to change its setting. Drag from the right dot to connect.",null,A.lR,null,null,null,null,null,null,null,null,null)
D.fVS=new B.y("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.vp,null,null,null,null,null,null,null,null,null)
D.fVU=new B.y("TOOLBOX",null,A7.a9H,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hop=null
$.hoo=null
$.huB=0
$.hWS=B.U(x.N,B.at("iN"))
$.hXs=B.U(x.N,B.at("iN"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"itm","bFK",()=>{var v="led"
return B.a([C.azb("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fo0(),v),C.azb("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fo1(),v),C.azb("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fo2(),v),C.azb("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fo9(),v),C.azb("Not both","Make the light go OFF only when both switches are ON.",2,new C.foa(),v),C.azb("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fob(),"buzzer")],B.at("O<bc8>"))})
w($,"itO","bFL",()=>B.a([C.QE("UNIVERSE","Earth, space and gravity",A.P3,A.aJ,new C.fos()),C.QE("ELECTRONICS LAB","Batteries, wires, real circuits",Af.Cg,A.aJ,new C.fot()),C.QE("DISCOVERY LAB","Body Explorer: a real 3D human",D.bM_,A.bf,new C.fou()),C.QE("TOOLBOX","Converter, clock, games",H.anS,A.cL,new C.fov()),C.QE("REACTION LAB","Wire parts together",A.CD,A.bv,new C.fow()),C.QE("SPARK PAINTER","Paint with light",A.Ov,A.c_,new C.fox()),C.QE("ROCKET LANDER","Land softly on the pad",A.op,A.aJ,new C.foy()),C.QE("TITLE ANIMATOR","Make a moving title",A.wv,A.bu,new C.foz()),C.QE("CIRCUIT LAB","Connect logic, learn it",A.a1U,A.co,new C.foA())],B.at("O<bug>")))
w($,"ivm","qw",()=>{var v,u,t=B.U(x.N,x.B)
for(v=0;v<76;++v){u=D.RE[v]
t.n(0,u.a,u)}return t})
w($,"itn","aik",()=>B.a([C.FY("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.foc()),C.FY("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fod()),C.FY("Spin the motor","A battery and a motor in a loop will make it spin.",new C.foe()),C.FY("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fof()),C.FY("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fog()),C.FY("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fo3()),C.FY("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fo4()),C.FY("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fo5()),C.FY("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fo6()),C.FY("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fo7()),C.FY("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fo8())],B.at("O<bc9>")))
w($,"itQ","hDc",()=>B.a([C.a1j("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aT,A.cd,new C.foI()),C.a1j("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c6,A.bz,new C.foJ()),C.a1j("Breathe","Calm down in a minute","\ud83e\udee7",A.hg,A.cw,new C.foK()),C.a1j("Draw Pad","Sketch and share","\ud83c\udfa8",A.bD,A.b6,new C.foL()),C.a1j("Memory Match","Find the pairs","\ud83c\udccf",A.aJ,A.cf,new C.foM()),C.a1j("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bu,A.be,new C.foN()),C.a1j("Tip & Split","Share the bill","\ud83e\uddfe",A.bf,A.b1,new C.foO()),C.a1j("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.br,A.aD,new C.foP())],B.at("O<bvA>")))})()};
(a=>{a["8JlN+HakTaKRdWMACzglPNhwZXI="]=a.current})($__dart_deferred_initializers__);