((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A3,Z,A4,A_,R,A5,A6,A7,A8,A9,A0,N,Aa,Ab,Ac,Ad,T,Ae,P,Af,U,V,W,E,K,F,I,A1,O,Ag,Ah,S,Ai,Q,Aj,L,G,M,C={
bAS(d){return C.i_d(d)},
i_d(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bAS=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.r7(B.nf(""),d,A.hS,null,null).da(0,A.ZM),$async$bAS)
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
return B.i($async$bAS,v)},
iba(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.R7[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cT(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fY(D.R7,new C.fEs())
if(w==null)w=A.d.gI(D.R7)
s=B.U(x.N,x.B)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.L)(r),++u){l=r[u].a
k=l[0]
l=$.qu().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.L)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gI(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.akn(w.a,w.b,m,w,s,!1)},
i4I(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.Ry,new C.fu0(),x.bd).aG(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
ij6(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cu(b2,"{")
v=A.a.oQ(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.X.aL(0,A.a.ar(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aX(a5)
r=0
for(a6=x.j,a7=J.aW(a6.a(J.r(u,"parts"))),a8=x.i;a7.C();){q=a7.gS(a7)
p=B.w(J.r(q,"kind"))
o=B.w(J.r(q,"id"))
if(!$.qu().aj(0,p)||J.f0(s,o)||J.ad(t)>=8)continue
J.ca(s,o)
n=B.U(a5,a8)
for(a9=0;a9<4;++a9){m=D.dsh[a9]
l=J.r(q,m)
if(typeof l=="number")J.aI(n,m,l)}k=A.k.E(typeof J.r(q,"x")=="number"?B.e8(J.r(q,"x")):0.2+A.k.F(r,3)*0.3,0.16,0.84)
j=A.k.E(typeof J.r(q,"y")=="number"?B.e8(J.r(q,"y")):0.25+A.k.ao(r,3)*0.3,0.1,0.9)
J.ca(t,new B.ec([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aW(a6.a(J.r(u,"wires")));a5.C();){h=a5.gS(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.r(g,0))
e=B.w(J.r(g,2))
d=A.o.E(A.k.N(B.e8(J.r(g,1))),0,1)
a0=A.o.E(A.k.N(B.e8(J.r(g,3))),0,1)
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
a4=new C.mO(a0,B.w(a1==null?"":a1),t,i,A.Y)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.r(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.akn(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
i9L(d){var w,v,u=C.heP()
d.B(u)
for(w=0;w<60;++w)u.vn(0,0.03333333333333333)
v=u.a
return A.d.b3(v,new C.fBb(u))&&!A.d.d5(v,new C.fBc())},
i9K(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.U(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.L)(l),++u){t=l[u];++v
k.n(0,t.a,$.qu().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.L)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.dqu,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aG(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.k.ac(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.L)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aG(s,"\n")+"\nWires: "+A.d.aG(l,"; ")},
hYJ(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.L)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aG(v,"\n")+"\n\n"}v=A.d.aG(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
ib9(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qu().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Ry[u]
if(A.d.b3(w,new C.fEp(s)))if(!B.cT(r,s.b.toLowerCase(),0))v=B.cT(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Z(w,new C.fEq(e),B.T(w).k("Z<1>")).gan(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ac(A.d.cI(w,0,new C.fEr())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gI(w)
w=$.qu().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
akn:function akn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fEs:function fEs(){},
fu0:function fu0(){},
fBb:function fBb(d){this.a=d},
fBc:function fBc(){},
fEp:function fEp(d){this.a=d},
fEq:function fEq(d){this.a=d},
fEr:function fEr(){},
VV:function VV(d,e){this.c=d
this.a=e},
blr:function blr(d,e,f,g,h){var _=this
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
eeM:function eeM(d){this.a=d},
eeN:function eeN(d,e,f){this.a=d
this.b=e
this.c=f},
eeO:function eeO(d){this.a=d},
eeZ:function eeZ(d){this.a=d},
ef_:function ef_(d,e){this.a=d
this.b=e},
eeV:function eeV(d){this.a=d},
eeT:function eeT(d,e){this.a=d
this.b=e},
eeU:function eeU(d,e,f){this.a=d
this.b=e
this.c=f},
eeW:function eeW(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eeR:function eeR(d){this.a=d},
eeS:function eeS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eeX:function eeX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eeQ:function eeQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eeY:function eeY(d,e){this.a=d
this.b=e},
eeP:function eeP(d,e){this.a=d
this.b=e},
ef2:function ef2(d){this.a=d},
ef1:function ef1(d){this.a=d},
ef3:function ef3(d){this.a=d},
ef0:function ef0(d){this.a=d},
ef4:function ef4(d,e){this.a=d
this.b=e},
ef5:function ef5(d,e){this.a=d
this.b=e},
ef6:function ef6(d,e){this.a=d
this.b=e},
ef7:function ef7(d,e){this.a=d
this.b=e},
bBc(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fjJ,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.O,0,A.p)},
hsp(d,e,f,g){var w=null,v=B.n(24),u=B.J(f.j(0.6),A.r,1)
return B.au(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.am,B.d(e,w,w,w,w,w,w,A.x2,A.K,w,w),A.aA,B.bX(A.fI,g,A.bq,w,0,8)],x.p),A.m,w,A.e,A.O,0,A.p),A.f,w,w,new B.o(D.bdY,w,u,v,w,w,A.n),w,w,w,w,A.aa,w,w,w),w,w,w)},
Gr:function Gr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
v8:function v8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wh:function Wh(d){this.a=d},
aFh:function aFh(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.lX$=i
_.f6$=j
_.h2$=k
_.bx$=l
_.a8$=m
_.c=_.a=null},
eu6:function eu6(){},
euq:function euq(d){this.a=d},
eup:function eup(d,e){this.a=d
this.b=e},
eur:function eur(){},
eus:function eus(){},
eu8:function eu8(d,e,f){this.a=d
this.b=e
this.c=f},
eu7:function eu7(d,e){this.a=d
this.b=e},
etY:function etY(d){this.a=d},
etZ:function etZ(d){this.a=d},
eu_:function eu_(d){this.a=d},
eu0:function eu0(d){this.a=d},
eu1:function eu1(d){this.a=d},
eu2:function eu2(d){this.a=d},
eu3:function eu3(d){this.a=d},
eu4:function eu4(d){this.a=d},
eu5:function eu5(d){this.a=d},
etW:function etW(d){this.a=d},
etX:function etX(d){this.a=d},
etV:function etV(d){this.a=d},
euj:function euj(d,e){this.a=d
this.b=e},
eue:function eue(d){this.a=d},
euf:function euf(d){this.a=d},
eub:function eub(d){this.a=d},
eug:function eug(d){this.a=d},
eua:function eua(d){this.a=d},
euh:function euh(d){this.a=d},
eui:function eui(d){this.a=d},
eu9:function eu9(d){this.a=d},
euk:function euk(d,e){this.a=d
this.b=e},
eud:function eud(d,e){this.a=d
this.b=e},
eul:function eul(d){this.a=d},
eum:function eum(d){this.a=d},
eun:function eun(d){this.a=d},
euo:function euo(d){this.a=d},
euc:function euc(d){this.a=d},
bio:function bio(d,e){this.b=d
this.a=e},
aNd:function aNd(){},
byT:function byT(){},
cLq(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cLq=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.r9().jg(0,"assets/data/body3d.bin"),$async$cLq)
case 3:d=a1
$.hnG=J.eI(A.dK.gaR(d),d.byteOffset,d.byteLength)
t=B.aTp(d)
s=t.getUint32(4,!0)
r=B.a([],x.a)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jC(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.deS[i]
g=B.b1((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a3z(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b1c))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bbk(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cLq,v)},
aTc:function aTc(d,e,f){this.a=d
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
bbk:function bbk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
UO:function UO(d){this.a=d},
aDL:function aDL(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.lX$=t
_.f6$=u
_.h2$=v
_.bx$=w
_.a8$=a0
_.c=_.a=null},
dLr:function dLr(d){this.a=d},
dLq:function dLq(d,e){this.a=d
this.b=e},
dL3:function dL3(d,e){this.a=d
this.b=e},
dL4:function dL4(){},
dLs:function dLs(){},
dL5:function dL5(d,e){this.a=d
this.b=e},
dL6:function dL6(d){this.a=d},
dL7:function dL7(){},
dL8:function dL8(d){this.a=d},
dLa:function dLa(d,e){this.a=d
this.b=e},
dL9:function dL9(d){this.a=d},
dL0:function dL0(d,e,f){this.a=d
this.b=e
this.c=f},
dL1:function dL1(d){this.a=d},
dL2:function dL2(d){this.a=d},
dLh:function dLh(d){this.a=d},
dLi:function dLi(d,e){this.a=d
this.b=e},
dLj:function dLj(d,e){this.a=d
this.b=e},
dLk:function dLk(d){this.a=d},
dLg:function dLg(d,e){this.a=d
this.b=e},
dLl:function dLl(d,e){this.a=d
this.b=e},
dLf:function dLf(d,e){this.a=d
this.b=e},
dLm:function dLm(d){this.a=d},
dLe:function dLe(d){this.a=d},
dLn:function dLn(d){this.a=d},
dLd:function dLd(d){this.a=d},
dLo:function dLo(d){this.a=d},
dLc:function dLc(d){this.a=d},
dLp:function dLp(d){this.a=d},
dLb:function dLb(d){this.a=d},
aMi:function aMi(){},
aMj:function aMj(){},
c50:function c50(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c51:function c51(d,e){this.a=d
this.b=e},
c52:function c52(d){this.a=d},
az8(d,e,f,g,h){return new C.bc3(d,e,f,g,h)},
h5n(d,e,f,g,h,i){return $.hW5.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cSk(d,e,f,i,g,h))},
yn:function yn(d,e,f,g,h){var _=this
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
nx:function nx(d,e,f){this.a=d
this.b=e
this.c=f},
bc3:function bc3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fnv:function fnv(){},
fnw:function fnw(){},
fnx:function fnx(){},
fnE:function fnE(){},
fnF:function fnF(){},
fnG:function fnG(){},
UT:function UT(d){this.a=d},
aDN:function aDN(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.lX$=n
_.f6$=o
_.h2$=p
_.bx$=q
_.a8$=r
_.c=_.a=null},
dN6:function dN6(d){this.a=d},
dML:function dML(d,e){this.a=d
this.b=e},
dMO:function dMO(){},
dN7:function dN7(){},
dMJ:function dMJ(d,e){this.a=d
this.b=e},
dMK:function dMK(d,e){this.a=d
this.b=e},
dMP:function dMP(d,e,f){this.a=d
this.b=e
this.c=f},
dME:function dME(){},
dMF:function dMF(){},
dMG:function dMG(d){this.a=d},
dMH:function dMH(d,e){this.a=d
this.b=e},
dMI:function dMI(d,e,f){this.a=d
this.b=e
this.c=f},
dMQ:function dMQ(){},
dMR:function dMR(d,e){this.a=d
this.b=e},
dMS:function dMS(d){this.a=d},
dMN:function dMN(d,e){this.a=d
this.b=e},
dMM:function dMM(d){this.a=d},
dMD:function dMD(d,e,f){this.a=d
this.b=e
this.c=f},
dN0:function dN0(d){this.a=d},
dN_:function dN_(d){this.a=d},
dN1:function dN1(d){this.a=d},
dMZ:function dMZ(d){this.a=d},
dMX:function dMX(d){this.a=d},
dMY:function dMY(d){this.a=d},
dMW:function dMW(d){this.a=d},
dMT:function dMT(d){this.a=d},
dMV:function dMV(d){this.a=d},
dN2:function dN2(d,e){this.a=d
this.b=e},
dN3:function dN3(d,e){this.a=d
this.b=e},
dN4:function dN4(d){this.a=d},
dMU:function dMU(d){this.a=d},
dN5:function dN5(d,e){this.a=d
this.b=e},
bcm:function bcm(d,e){this.b=d
this.a=e},
cSk:function cSk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aMn:function aMn(){},
byD:function byD(){},
hMV(){return new C.NI(null)},
QD(d,e,f,g,h){return new C.bub(d,e,f,g,h)},
bsA(d,e,f){return A.k.E((d-e)/(f-e),0,1)},
h5U(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
NI:function NI(d){this.a=d},
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
aE3:function aE3(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dSX:function dSX(d,e){this.a=d
this.b=e},
dSW:function dSW(d){this.a=d},
dSZ:function dSZ(d,e){this.a=d
this.b=e},
dSY:function dSY(d){this.a=d},
bub:function bub(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fnW:function fnW(){},
fnX:function fnX(){},
fnY:function fnY(){},
fnZ:function fnZ(){},
fo_:function fo_(){},
fo0:function fo0(){},
fo1:function fo1(){},
fo2:function fo2(){},
fo3:function fo3(){},
bsB:function bsB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f3x:function f3x(d){this.a=d},
f3w:function f3w(d,e){this.a=d
this.b=e},
f3u:function f3u(d){this.a=d},
f3y:function f3y(d){this.a=d},
f3v:function f3v(d,e){this.a=d
this.b=e},
afh:function afh(d,e,f){this.c=d
this.d=e
this.a=f},
ae9:function ae9(d,e,f){this.c=d
this.d=e
this.a=f},
Qw:function Qw(d,e,f,g,h,i,j,k,l,m){var _=this
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
btA:function btA(d,e){this.b=d
this.a=e},
bt5:function bt5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bb2:function bb2(d,e){this.b=d
this.a=e},
aIi:function aIi(d,e){this.c=d
this.a=e},
aIj:function aIj(d,e,f){var _=this
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
f3d:function f3d(d){this.a=d},
f3c:function f3c(d){this.a=d},
f3b:function f3b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3a:function f3a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f38:function f38(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f37:function f37(d,e,f){this.a=d
this.b=e
this.c=f},
f39:function f39(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f36:function f36(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3l:function f3l(d){this.a=d},
f3k:function f3k(d){this.a=d},
f3m:function f3m(d,e){this.a=d
this.b=e},
f3n:function f3n(d,e){this.a=d
this.b=e},
f3o:function f3o(d,e){this.a=d
this.b=e},
f3j:function f3j(d,e,f){this.a=d
this.b=e
this.c=f},
f3p:function f3p(d,e,f){this.a=d
this.b=e
this.c=f},
f3i:function f3i(d){this.a=d},
f3e:function f3e(d){this.a=d},
f3q:function f3q(d){this.a=d},
f3r:function f3r(d){this.a=d},
f3h:function f3h(d,e){this.a=d
this.b=e},
f3s:function f3s(d,e){this.a=d
this.b=e},
f3g:function f3g(d,e){this.a=d
this.b=e},
f3t:function f3t(d,e){this.a=d
this.b=e},
f3f:function f3f(d,e){this.a=d
this.b=e},
f34:function f34(){},
f35:function f35(){},
bsd:function bsd(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
brD:function brD(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbI:function bbI(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
brF:function brF(d,e,f){this.b=d
this.c=e
this.a=f},
bvF:function bvF(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aO2:function aO2(){},
htS(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a9(0,new B.t(w,0)),u=e.aE(0,new B.t(w,0)),t=1-f,s=3*t
return d.aI(0,t*t*t).a9(0,v.aI(0,s*t*f)).a9(0,u.aI(0,s*f*f)).a9(0,e.aI(0,f*f*f))},
bin(d,e,f,g,h,i){return $.hWG.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dng(d,e,f,i,g,h))},
a0O:function a0O(d,e){this.a=d
this.b=e},
qg:function qg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
r1:function r1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
CH:function CH(d,e){this.a=d
this.b=e},
ZL:function ZL(d,e){this.a=d
this.b=e},
af5:function af5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a10:function a10(d,e,f,g,h,i){var _=this
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
ac2:function ac2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aci:function aci(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aec:function aec(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bil:function bil(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
dnk:function dnk(d){this.a=d},
dnl:function dnl(d){this.a=d},
dnh:function dnh(d,e){this.a=d
this.b=e},
dni:function dni(d){this.a=d},
dnj:function dnj(d){this.a=d},
dnm:function dnm(d){this.a=d},
dnn:function dnn(d){this.a=d},
dno:function dno(d){this.a=d},
dnp:function dnp(d){this.a=d},
dnq:function dnq(d){this.a=d},
dnr:function dnr(d){this.a=d},
dns:function dns(d){this.a=d},
dnt:function dnt(d){this.a=d},
dnu:function dnu(d){this.a=d},
Gc:function Gc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wg:function Wg(d){this.a=d},
aFg:function aFg(d,e,f,g,h,i,j){var _=this
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
_.a8$=j
_.c=_.a=null},
etr:function etr(d){this.a=d},
etg:function etg(d){this.a=d},
eti:function eti(){},
etj:function etj(){},
etm:function etm(){},
etn:function etn(d,e,f){this.a=d
this.b=e
this.c=f},
eto:function eto(d){this.a=d},
etp:function etp(d){this.a=d},
etk:function etk(){},
etl:function etl(d){this.a=d},
etR:function etR(d){this.a=d},
etq:function etq(){},
etc:function etc(d){this.a=d},
ett:function ett(d){this.a=d},
ets:function ets(d){this.a=d},
etv:function etv(){},
etu:function etu(d,e){this.a=d
this.b=e},
etf:function etf(){},
etd:function etd(d){this.a=d},
ete:function ete(d){this.a=d},
etP:function etP(d){this.a=d},
etO:function etO(d){this.a=d},
etQ:function etQ(d){this.a=d},
etF:function etF(d,e){this.a=d
this.b=e},
etN:function etN(d){this.a=d},
etL:function etL(d){this.a=d},
etM:function etM(d){this.a=d},
etK:function etK(d){this.a=d},
etJ:function etJ(d){this.a=d},
etG:function etG(d){this.a=d},
etH:function etH(d){this.a=d},
etI:function etI(d){this.a=d},
eth:function eth(){},
etB:function etB(d){this.a=d},
etC:function etC(d){this.a=d},
etA:function etA(d){this.a=d},
etD:function etD(d){this.a=d},
etz:function etz(d){this.a=d},
etE:function etE(d){this.a=d},
ety:function ety(d){this.a=d},
etx:function etx(d){this.a=d},
etw:function etw(d,e){this.a=d
this.b=e},
bim:function bim(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dng:function dng(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNb:function aNb(){},
hz6(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aE(0,e).gcF()*0.1
return new B.t((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
heP(){var w=B.a([],x.C),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a4S(w,v,u,A.cK,B.U(x.N,x.y))},
hGJ(d,e,f){var w=d.c,v=e===0?-1:1
return new B.t(w*f.a+v*C.heQ(d),d.d*f.b)},
heQ(d){return 42+(D.mj.aj(0,d.b)?(d.ch-1)*38:0)},
ei:function ei(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tK:function tK(d,e,f,g){var _=this
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
aaJ:function aaJ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
abP:function abP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4S:function a4S(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bOm:function bOm(){},
bOx:function bOx(d){this.a=d},
bOs:function bOs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bOy:function bOy(d){this.a=d},
bOz:function bOz(d){this.a=d},
bOB:function bOB(d){this.a=d},
bOC:function bOC(d){this.a=d},
bOA:function bOA(d){this.a=d},
bOD:function bOD(d,e,f){this.a=d
this.b=e
this.c=f},
bOE:function bOE(d){this.a=d},
bOo:function bOo(d){this.a=d},
bOp:function bOp(d){this.a=d},
bOn:function bOn(d){this.a=d},
bOq:function bOq(d,e,f){this.a=d
this.b=e
this.c=f},
bOr:function bOr(d){this.a=d},
bOl:function bOl(d){this.a=d},
bOF:function bOF(d,e){this.a=d
this.b=e},
bOt:function bOt(d,e){this.a=d
this.b=e},
bOw:function bOw(d){this.a=d},
bOv:function bOv(d){this.a=d},
bOu:function bOu(d){this.a=d},
aj7:function aj7(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bIZ:function bIZ(){},
bJ_:function bJ_(){},
mO:function mO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cqK:function cqK(d){this.a=d},
ij1(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.fQf(),c9=new C.fQh(),d0=new C.fQi(),d1=new C.fQg(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.az(w,d1.$3(new B.a3(w.a,w.b,w.c,w.d),A.bN,A.bM))
d3.bo(D.ejx,D.egr,c9.$2(A.dL,1.4))
d3.bo(D.eg8,D.eg7,c9.$2(A.bs,2.4))
d3.bo(D.eg9,T.aJC,c9.$2(A.bs,2.4))
if(c7){d2=c8.$1(A.fi.j(0.5))
d2.z=A.Iw
d3.ad(D.efS,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.t(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.az(d0.$4(-22,-26,44,50),d1.$3(D.aPG,A.aP,A.cq))
d3.ad(A.cH,16,c8.$1(A.bs))
d3.ad(A.cH,13,c8.$1(c7?A.aK.j(0.85):A.N))
if(c7){d2=d3.a
J.bl(d2.save())
d2.translate(0,4)
d3.ih(0,d4.y*0.6)
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
r.delete()}}d3.ad(D.ejp,2.4,c8.$1(c7?A.bf:A.al))
d3.ad(D.ekg,2.4,c8.$1(A.al))
return!0
case"blender":d3.az(d0.$5(-14,14,28,12,4),c8.$1(A.e7))
d2=$.S().r
t=x.v
q=new B.aF(d2,A.ag,c6,c6,B.a([],t))
q.D(new B.aY(-16,-26))
q.D(new B.aq(16,-26))
q.D(new B.aq(12,14))
q.D(new B.aq(-12,14))
q.D(new B.bs())
d3.aH(q,c8.$1(A.fi.j(0.35)))
if(c7){d2=new B.aF(d2,A.ag,c6,c6,B.a([],t))
d2.D(new B.aY(-14,-10))
d2.D(new B.aq(14,-10))
d2.D(new B.aq(12,14))
d2.D(new B.aq(-12,14))
d2.D(new B.bs())
d3.aH(d2,c8.$1(A.ax.j(0.7)))}d3.aH(q,c9.$2(A.ad,1.6))
d2=d3.a
J.bl(d2.save())
d2.translate(0,10)
d3.ih(0,d4.y)
d3.bo(D.a7p,D.aJY,c9.$2(A.bO,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.F(s+v*0.33,1)
r=c8.$1(A.eO).G()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.az(d0.$5(-10,-4,20,10,4),c8.$1(A.aJ))
d3.ad(A.ib,3,c8.$1(c7?A.bf:A.al))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=G.a52[m]
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
w.D(new B.bs())
d3.aH(w,d1.$3(D.f0w,A.aT,A.d1))
d3.aO(D.f_D,c8.$1(A.dv))
d2=d3.a
J.bl(d2.save())
d2.translate(18,-5)
d3.ih(0,d4.y*2)
d3.bo(A.I,D.egi,c9.$2(A.bO,2.4))
d3.bo(A.a7m,D.egh,c9.$2(A.hN,1))
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
d2.D(new B.bs())
d3.aH(d2,c8.$1(A.bL.j(0.35*v)))}d3.az(d0.$5(-26,-6,30,12,3),d1.$3(D.f0C,A.bm,A.cr))
k=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
k.D(new B.aY(4,-6))
k.D(new B.aq(18,-12))
k.D(new B.aq(18,12))
k.D(new B.aq(4,6))
k.D(new B.bs())
d3.aH(k,c8.$1(A.e7))
d3.ad(D.egn,7,c8.$1(c7?A.c:A.dv))
return!0
case"neon":d3.az(d0.$5(-30,-14,60,28,6),c8.$1(M.nf))
if(c7)j=d4.ax>0.5||A.o.F(A.k.bf(d5*17),3)!==0
else j=!1
i=j?A.c_:D.bnX
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c_.j(0.35))
t.z=A.mT
d3.az(d2,t)}d3.az(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.ejD,i,17)
return!0
case"microwave":d3.az(d0.$4(-30,-18,60,38),d1.$3(D.f0I,A.bO,A.bm))
d2=d0.$5(-26,-14,38,30,3)
d3.az(d2,c8.$1(c7?A.bL.j(0.75):A.av))
if(c7){d2=d3.a
J.bl(d2.save())
d2.translate(-7,8)
d3.ih(0,d4.y*0.5)
d3.dO(B.bK(A.I,7,22),c8.$1(A.d1))
d2.restore()}d3.az(d0.$5(15,-14,12,12,2),c8.$1(M.nf))
if(c7)d6.$5(d3,"0:"+A.a.aW(A.o.u(59-A.o.F(A.k.bf(d5),60)),2,"0"),D.ego,A.be,6.5)
d3.ad(D.egE,4,c8.$1(A.dv))
return!0
case"doorbell":d3.az(d0.$5(-16,-26,32,52,8),c8.$1(A.aN))
d3.ad(A.J4,10,c8.$1(c7?A.bu:A.bs))
d2=d3.a
J.bl(d2.save())
d2.translate(0,-8)
d3.ih(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.ekk,A.c,16)
d2.restore()
d3.ad(A.kq,6,c8.$1(A.d3))
d3.ad(A.kq,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=B.bY(A.J4,14+v*6+A.k.F(t,6))
r=c9.$2(A.bu.j(0.9-v*0.3),1.8).G()
d2.drawArc.apply(d2,[B.bG(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bo(D.ejC,D.eke,c9.$2(A.bs,4))
d2=d3.a
J.bl(d2.save())
d3.ih(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.az(d0.$5(-24,-14,46,22,5),d1.$3(D.f0x,A.bO,A.al))
d3.ad(D.aJG,8,c8.$1(A.av))
d3.ad(D.aJG,4.5,c8.$1(c7?A.aK:A.cr))
d3.ad(D.ejA,2.2,c8.$1(c7&&A.o.F(A.k.bf(d5*1.6),2)===0?A.ax:A.jM))
d2.restore()
if(c7)d6.$5(d3,"REC",D.ejL,A.ax,9)
return!0
case"console":d3.az(d0.$5(-28,-22,56,44,8),d1.$3(D.f0F,A.iR,A.fb))
d3.az(d0.$5(-20,-17,40,22,3),c8.$1(A.dG))
if(c7){d2=d5*2.3
d3.ad(new B.t(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aO(new B.a3(-18,t,-15.6,t+8),c8.$1(A.be))
d2=-9+Math.sin(d2-0.4)*6
d3.aO(new B.a3(15.6,d2,18,d2+8),c8.$1(A.c_))}d3.ad(D.ejv,4,c8.$1(A.aS))
d3.ad(D.egj,2.4,c8.$1(A.ax))
d3.ad(D.egB,2.4,c8.$1(A.bf))
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
h.e=null}}d3.aH(h,c9.$2(A.be,1.8))
d6.$5(d3,"72",D.egk,A.hc,11)
d2=d5*9
d6.$5(d3,"\u2665",D.ejQ,A.hc.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ad(D.ejF,3,c8.$1(c7?A.bf:A.bs))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.az(d2,c8.$1(A.cw.j(c7?0.5:0.3)))
d3.az(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.aO(D.f0z,c8.$1(G.tF))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bl(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.p8(0,-1,1)
d3.dO(B.bK(A.I,8,14),c8.$1(A.cQ))
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-6,0))
d2.D(new B.aq(-12,-4))
d2.D(new B.aq(-12,4))
d2.D(new B.bs())
d3.aH(d2,c8.$1(A.cd))
d3.ad(D.ehn,1.2,c8.$1(A.w))
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
e.D(new B.aY(-9,22))
e.D(new B.aq(-5,-16))
e.D(new B.aq(5,-16))
e.D(new B.aq(9,22))
e.D(new B.bs())
d3.aH(e,d1.$3(D.f19,A.c,A.bz))
d3.aO(D.f15,c8.$1(c7?A.dB:A.bs))
s=new B.aF(d2,A.ag,c6,c6,B.a([],t))
s.D(new B.aY(-7,-22))
s.D(new B.aq(0,-29))
s.D(new B.aq(7,-22))
s.D(new B.bs())
d3.aH(s,c8.$1(A.ej))
if(c7){d=Math.sin(d4.y*0.3)
d2=new B.aF(d2,A.ag,c6,c6,B.a([],t))
d2.D(new B.aY(0,-19))
t=d*34
d2.D(new B.aq(t,-26))
d2.D(new B.aq(t,-12))
d2.D(new B.bs())
d3.aH(d2,c8.$1(A.dB.j(0.45)))
d2=c8.$1(A.dB.j(0.35))
d2.z=A.Iw
d3.ad(D.efT,14,d2)}return!0
case"discoball":d3.bo(D.efW,Q.aJy,c9.$2(A.dv,1.4))
d3.ad(A.I,16,d1.$3(D.f0g,A.aP,A.al))
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
r=c8.$1(D.dfT[A.o.F(v,4)].j(0.5+0.5*Math.sin(s+v))).G()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.az(d0.$5(-14,-4,28,24,5),d1.$3(D.f0d,A.cq,A.al))
d3.az(d0.$5(-12,-26,24,20,5),d1.$3(D.f06,A.aN,A.bM))
d3.bo(H.aJz,D.efX,c9.$2(A.bs,1.6))
d3.ad(D.efY,2.2,c8.$1(c7?A.ax:A.bs))
a1=c7&&A.k.F(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=G.a54[m]
if(c7)t=a1?A.b8:A.eQ
else t=A.cr
r=c8.$1(t).G()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bl(d2.save())
d2.translate(14,0)
d3.ih(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bo(A.I,D.a7h,c9.$2(A.bM,4))
d2.restore()
d3.bo(D.ejl,D.ejJ,c9.$2(A.bM,4))
d3.aO(D.f14,c8.$1(c7?A.b8.j(0.7):A.aJ))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.aAs[m]+1,d2,10,14,2)
p=B.ar(A.bL,A.d1,a2)
p.toString
r=c8.$1(p).G()
t.drawRRect(B.e6(s),r)
r.delete()}d3.az(d0.$5(-24,-6,48,26,8),d1.$3(D.f0y,A.bO,A.bm))
for(m=0;m<2;++m){l=D.aAs[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fr:A.av).G()
t.drawRRect(B.e6(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cQ.j(0.5))
s.z=N.ox
r=s.G()
t.drawRRect(B.e6(d2),r)
r.delete()}}d3.bo(D.egK,D.eh5,c9.$2(A.av,3))
return!0
case"ledstrip":d3.az(d0.$5(-34,-4,68,10,4),c8.$1(A.cr))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.F(t+v*40,360)
i=c7?new Ak.p4(1,a3,0.8,1).jU():A.e7
if(c7){s=c8.$1(i.j(0.45))
s.z=N.ox
r=s.G()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).G()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.az(d0.$5(-40,-2,6,6,1),c8.$1(A.dv))
return!0
case"pump":d3.az(d0.$5(-16,-2,32,22,6),d1.$3(D.f0m,A.cw,A.Fo))
d3.ad(D.ejR,8,c8.$1(A.pW))
d2=d3.a
J.bl(d2.save())
d2.translate(-2,9)
d3.ih(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.fi,2.4).G()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
t.D(new B.aY(16,6))
t.D(new B.aq(26,6))
t.D(new B.aq(26,-20))
t.D(new B.aq(10,-20))
d3.aH(t,c9.$2(A.bM,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.F(t+v*0.2,1)
r=c8.$1(A.hh).G()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ad(D.ei0,3.2,c8.$1(A.hh.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bl(d2.save())
d3.ih(0,-0.15)
d3.az(d0.$5(-26,-14,40,22,10),d1.$3(D.f0A,A.ij,A.tJ))
d3.az(d0.$5(14,-10,12,14,3),c8.$1(A.cr))
d3.az(d0.$5(-10,6,12,22,4),c8.$1(A.e7))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).G()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cQ.j(0.4))
d2.z=N.ox
d3.ad(D.egD,8,d2)}return!0
case"headphones":d3.e3(B.bK(A.dC,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bs,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=G.RL[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new B.a3(s,0,s+14,20),A.br,A.o5).G()
d2.drawRRect(B.e6(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=B.bY(new B.t(l,10),10+v*5+A.k.F(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eG.j(0.9-v*0.3),1.6).G()
d2.drawArc.apply(d2,[B.bG(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new B.t(-4,-8-A.k.F(d5*14,8)),A.kA,12)
return!0
case"smartwatch":d3.az(d0.$5(-8,-30,16,14,3),c8.$1(A.cr))
d3.az(d0.$5(-8,14,16,14,3),c8.$1(A.cr))
d3.az(d0.$5(-14,-17,28,32,8),d1.$3(D.f0b,A.dv,A.e7))
d3.az(d0.$5(-11,-14,22,26,6),c8.$1(A.dG))
if(c7){a4=new B.V(Date.now(),0,!1)
d6.$5(d3,A.a.aW(A.o.u(B.dg(a4)),2,"0")+":"+A.a.aW(A.o.u(B.fQ(a4)),2,"0"),D.eg1,A.be,9.5)
g=(Math.sin(d5*9)+1)/2
d2=B.ar(A.F2,A.hc,g)
d2.toString
d6.$5(d3,"\u2665",new B.t(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.F(A.k.bf(d5*2),6)),A.dC,A.c,7)}return!0
case"tablet":d3.az(d0.$5(-30,-22,60,44,6),c8.$1(M.nf))
d3.az(d0.$5(-30,-22,60,44,6),c9.$2(A.bM,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e6(a5),$.nD(),!0)
d2.translate(-27,-19)
L.Lz(d3,D.f6W,d5,c6)
d2.restore()}else d3.az(a5,c8.$1(D.vP))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.az(a6,d1.$3(new B.a3(a6.a,a6.b,a6.c,a6.d),A.dF,A.d7))
d3.az(a6,c9.$2(A.aY,1.2))
d3.ad(D.aK5,9,c8.$1(A.av))
d3.ad(D.aK5,6,c9.$2(A.d1,2))
d3.az(d0.$5(4,-2,14,10,2),c8.$1(A.av))
d3.az(d0.$5(-22,-19,44,12,2),c8.$1(A.dG))
d2=A.k.ac(d4.db,1)
t=A.k.ac(c7?d4.dx:d4.e,1)
s=c7?A.be:A.al
d6.$5(d3,d2+"\u2192"+t+"V",D.eia,s,8.2)
d3.ad(D.egs,2.4,c8.$1(c7?A.bf:A.aJ))
d6.$5(d3,"IN",D.ejK,A.ad,6)
d6.$5(d3,"OUT",D.ehT,A.ad,6)
return!0
case"regulator":a7=c7?A.k.E(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ar(A.bM,A.ax,a7)
t.toString
d3.az(d2,c8.$1(t))
d3.ad(H.a7f,3,c8.$1(A.aJ))
d3.az(d0.$5(-12,-4,24,18,3),d1.$3(D.f07,A.e7,A.hW))
d6.$5(d3,"7805",D.a7p,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.dma[m]-1
r=c8.$1(A.e4).G()
d2.drawRect(B.bG(new B.a3(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.F(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).G()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.ekh,A.bk,9)
return!0
case"diode":d3.bo(D.aK9,D.aJS,c9.$2(A.e4,2.4))
d3.az(d0.$5(-14,-7,28,14,6),c8.$1(A.aE.j(0.85)))
d3.aO(D.f_R,c8.$1(A.bk))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dB.j(0.4))
t.z=A.kP
d3.az(d2,t)}d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-8,-4))
d2.D(new B.aq(-8,4))
d2.D(new B.aq(-1,0))
d2.D(new B.bs())
d3.aH(d2,c8.$1(A.aS))
d6.$5(d3,"one way",D.ejy,A.aB,8)
return!0
case"ldr":d3.bo(D.aK9,D.a7p,c9.$2(A.e4,2.4))
d3.bo(D.aJY,D.aJS,c9.$2(A.e4,2.4))
d3.ad(A.I,12,c8.$1(A.d1))
d3.ad(A.I,12,c9.$2(A.ri,1.6))
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
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.ejm,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.eh
break A}if("sonytv"===d2){t=A.ra
break A}if("appletv"===d2){t=A.e4
break A}t=G.F4
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
p.clipRRect(B.e6(a5),$.nD(),!0)
p.translate(t,s)
L.haW(d3,new B.av(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ad(D.eh8,1.6,c8.$1(A.be))}else{d3.az(a5,c8.$1(D.vP))
p=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
p.D(new B.aY(t,s))
p.D(new B.aq(t+24,s))
p.D(new B.aq(t,s+22))
p.D(new B.bs())
d3.aH(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.az(d0.$5(-22,19,44,3,1.5),c8.$1(A.dv))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=M.hB[m]
s=$.S()
p=B.a([],t)
s=new B.aF(s.r,A.ag,c6,c6,p)
p.push(new B.aY(l*30,20))
p.push(new B.aq(l*22,20))
p.push(new B.aq(l*26,26))
p.push(new B.bs())
r=c8.$1(A.dv).G()
p=s.gbv().a.snapshot()
d2.drawPath((s.e=new B.ce(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.eiO,A.bO,5.5)
break
case"appletv":d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-8,18))
d2.D(new B.aq(8,18))
d2.D(new B.aq(12,25))
d2.D(new B.aq(-12,25))
d2.D(new B.bs())
d3.aH(d2,c8.$1(D.Yo))
d6.$5(d3,"Apple TV",D.eib,A.bs,4.8)
break
default:d3.az(d0.$5(-34,19,68,7,3),c8.$1(D.bmg))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dm,0.6).G()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.ekd,G.tF,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.mj.h(0,d2)
b1=b0.b===D.wR
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
t.clipRRect(B.e6(a5),$.nD(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
L.Lz(d3,new B.av(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.az(a5,c8.$1(D.vP))
if(b1){t=a5.b
s=a5.d
d3.bo(new B.t(0,t),new B.t(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.az(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ad(new B.t(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.az(d0.$5(-17,-28,34,52,4),c8.$1(A.e7))
d3.az(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.ekn,A.av,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.F(v,4)===3?14:22
r=c8.$1(A.bm).G()
d2.drawRect(B.bG(new B.a3(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ad(A.a7d,1.6,c8.$1(A.av))}return!0
case"laptop":d3.az(d0.$5(-30,-28,60,42,4),d1.$3(D.f0J,A.cq,A.bm))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e6(b8),$.nD(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
L.Lz(d3,new B.av(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.az(b8,c8.$1(D.vP))
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-38,16))
d2.D(new B.aq(38,16))
d2.D(new B.aq(34,21))
d2.D(new B.aq(-34,21))
d2.D(new B.bs())
d3.aH(d2,c8.$1(D.Yo))
d3.az(d0.$5(-7,16,14,2,1),c8.$1(A.bm))
return!0
case"imac":d3.az(d0.$5(-32,-28,64,46,5),d1.$3(D.f0N,A.bN,A.cq))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e6(b9),$.nD(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
L.Lz(d3,new B.av(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.az(b9,c8.$1(D.vP))
d3.ad(D.aJt,2,c8.$1(A.bM))
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-6,18))
d2.D(new B.aq(6,18))
d2.D(new B.aq(10,26))
d2.D(new B.aq(-10,26))
d2.D(new B.bs())
d3.aH(d2,c8.$1(D.Yo))
return!0
case"monitor":d3.az(d0.$5(-34,-28,68,40,3),c8.$1(A.eh))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e6(c0),$.nD(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
L.Lz(d3,new B.av(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.az(c0,c8.$1(D.vP))
d3.aO(D.f0U,c8.$1(A.bm))
d3.az(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dv))
return!0
case"projector":if(c7){d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(14,4))
d2.D(new B.aq(-32,-42))
d2.D(new B.aq(34,-42))
d2.D(new B.bs())
d3.aH(d2,c8.$1(A.dB.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e6(c1),$.nD(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
L.Lz(d3,new B.av(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.az(d0.$5(-26,-4,52,24,6),d1.$3(D.f0B,A.iy,A.dv))
d3.ad(D.aJE,7,c8.$1(A.av))
d3.ad(D.aJE,4,c8.$1(c7?A.dB:A.cr))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dm,1).G()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.az(d0.$5(-34,-10,68,32,12),c8.$1(A.av))
c2=d0.$5(-30,-20,60,28,8)
d3.az(c2,c8.$1(M.nf))
d3.az(c2,c9.$2(A.bs,1.2))
if(c7){c3=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
c3.D(new B.aY(-26,4))
c3.D(new B.c4(-10,-14+Math.sin(d5)*3,6,-6))
c3.D(new B.aq(22,-16))
d3.aH(c3,c9.$2(A.aK,2.2))
d2=A.k.F(d5*6,48)
d3.ad(new B.t(-26+d2,4-d2*0.1),2.4,c8.$1(A.be))
d6.$5(d3,""+(88+A.o.F(A.k.bf(d5*2),5)),H.aJX,A.c,10)
d6.$5(d3,"km/h",D.ehZ,A.aB,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.az(c4,d1.$3(new B.a3(c4.a,c4.b,c4.c,c4.d),A.dv,A.e7))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e6(c5),$.nD(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
L.Lz(d3,new B.av(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.br.j(0.2))
d2.z=A.mT
d3.ad(A.I,26,d2)}else d3.az(c5,c8.$1(A.N))
d3.bo(D.ejY,D.ek2,c9.$2(A.bm,4))
d3.bo(D.eha,D.ehq,c9.$2(A.bm,4))
return!0}return!1},
fQf:function fQf(){},
fQh:function fQh(){},
fQi:function fQi(){},
fQg:function fQg(){},
hdF(d,e,f,g){return new C.aj5(d,g,f,e)},
FX(d,e,f){return new C.bc4(d,e,f)},
aj5:function aj5(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aj6:function aj6(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.lX$=i
_.f6$=j
_.h2$=k
_.bx$=l
_.a8$=m
_.c=_.a=null},
bID:function bID(d,e){this.a=d
this.b=e},
bIE:function bIE(d){this.a=d},
bIC:function bIC(d){this.a=d},
bIF:function bIF(){},
bIG:function bIG(d){this.a=d},
bIH:function bIH(d,e,f){this.a=d
this.b=e
this.c=f},
bIB:function bIB(d,e){this.a=d
this.b=e},
bIz:function bIz(d,e){this.a=d
this.b=e},
bIA:function bIA(d,e,f){this.a=d
this.b=e
this.c=f},
bIt:function bIt(d,e){this.a=d
this.b=e},
bIu:function bIu(){},
bIv:function bIv(d,e){this.a=d
this.b=e},
bIw:function bIw(d,e){this.a=d
this.b=e},
bIx:function bIx(d){this.a=d},
bIy:function bIy(d){this.a=d},
bIW:function bIW(d){this.a=d},
bIX:function bIX(){},
bI6:function bI6(){},
bIY:function bIY(d,e){this.a=d
this.b=e},
bIV:function bIV(d,e,f){this.a=d
this.b=e
this.c=f},
bIQ:function bIQ(d){this.a=d},
bIN:function bIN(d,e,f){this.a=d
this.b=e
this.c=f},
bIO:function bIO(d,e){this.a=d
this.b=e},
bIR:function bIR(d){this.a=d},
bIL:function bIL(d,e){this.a=d
this.b=e},
bIM:function bIM(d,e){this.a=d
this.b=e},
bIP:function bIP(d){this.a=d},
bIS:function bIS(d){this.a=d},
bIJ:function bIJ(d,e){this.a=d
this.b=e},
bIK:function bIK(d,e){this.a=d
this.b=e},
bIT:function bIT(d){this.a=d},
bII:function bII(d){this.a=d},
bIU:function bIU(d){this.a=d},
bI7:function bI7(d,e){this.a=d
this.b=e},
bIq:function bIq(d,e){this.a=d
this.b=e},
bIs:function bIs(d,e){this.a=d
this.b=e},
bIr:function bIr(d,e){this.a=d
this.b=e},
bId:function bId(d,e){this.a=d
this.b=e},
bIe:function bIe(d){this.a=d},
bIc:function bIc(d){this.a=d},
bIf:function bIf(d,e,f){this.a=d
this.b=e
this.c=f},
bIb:function bIb(d,e){this.a=d
this.b=e},
bIi:function bIi(d,e){this.a=d
this.b=e},
bIj:function bIj(d,e){this.a=d
this.b=e},
bIk:function bIk(d,e){this.a=d
this.b=e},
bIl:function bIl(d,e,f){this.a=d
this.b=e
this.c=f},
bIa:function bIa(d,e){this.a=d
this.b=e},
bIm:function bIm(d,e,f){this.a=d
this.b=e
this.c=f},
bI9:function bI9(d,e){this.a=d
this.b=e},
bIn:function bIn(d,e,f){this.a=d
this.b=e
this.c=f},
bI8:function bI8(d,e){this.a=d
this.b=e},
bIo:function bIo(d){this.a=d},
bIp:function bIp(d){this.a=d},
bIg:function bIg(d){this.a=d},
bIh:function bIh(d){this.a=d},
bc4:function bc4(d,e,f){this.a=d
this.b=e
this.c=f},
fnH:function fnH(){},
fnI:function fnI(){},
fnJ:function fnJ(){},
fnu:function fnu(){},
fnK:function fnK(){},
fnt:function fnt(){},
fnL:function fnL(){},
fny:function fny(){},
fns:function fns(){},
fnz:function fnz(){},
fnr:function fnr(){},
fnA:function fnA(){},
fnq:function fnq(){},
fnB:function fnB(){},
fno:function fno(){},
fnp:function fnp(){},
fnC:function fnC(){},
fnm:function fnm(){},
fnn:function fnn(){},
fnD:function fnD(){},
fnl:function fnl(){},
Vu:function Vu(d){this.a=d},
aEf:function aEf(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dXK:function dXK(d,e){this.a=d
this.b=e},
dXT:function dXT(d){this.a=d},
dXU:function dXU(){},
dXV:function dXV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dXW:function dXW(){},
dXJ:function dXJ(d){this.a=d},
dXI:function dXI(d,e,f){this.a=d
this.b=e
this.c=f},
dXH:function dXH(d,e){this.a=d
this.b=e},
dXF:function dXF(d){this.a=d},
dXG:function dXG(){},
dXS:function dXS(d){this.a=d},
dXR:function dXR(d){this.a=d},
dXP:function dXP(d,e){this.a=d
this.b=e},
dXN:function dXN(d){this.a=d},
dXO:function dXO(){},
dXQ:function dXQ(d,e,f){this.a=d
this.b=e
this.c=f},
dXL:function dXL(d,e){this.a=d
this.b=e},
dXM:function dXM(){},
dXY:function dXY(d){this.a=d},
dXZ:function dXZ(d,e){this.a=d
this.b=e},
dXX:function dXX(){},
dY_:function dY_(d,e){this.a=d
this.b=e},
dY0:function dY0(d){this.a=d},
dY1:function dY1(d){this.a=d},
aye:function aye(d,e){this.c=d
this.a=e},
bag:function bag(d,e){var _=this
_.d=$
_.bx$=d
_.a8$=e
_.c=_.a=null},
cHP:function cHP(d){this.a=d},
baf:function baf(d,e){this.b=d
this.a=e},
cHO:function cHO(d){this.a=d},
ayy:function ayy(){},
ayz:function ayz(){},
aKL:function aKL(){},
byG:function byG(){},
ij3(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bY(A.v0,23)
$.S()
b8=B.I()
b8.r=A.av.gp(0)
b9.ad(A.v0,25,b8)
b8=B.I()
b8.sam(D.et2.aA(0,v))
b9.ad(A.v0,23,b8)
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
r.d=A.bA
b9.bo(A.v0,new B.t(b8*18,s*18-2),r)
r=B.I()
r.r=A.bk.gp(0)
b9.ad(A.v0,3,r)
c2.$5(b9,w?"V":"A",D.ek5,A.bk,12)
c2.$5(b9,w?A.k.ac(m,1)+" V":""+A.k.V(m*1000)+" mA",D.ejs,A.av,9.5)
return!0
case"fan":b8=B.br(D.f03,A.hE)
$.S()
s=B.I()
s.r=A.bs.gp(0)
b9.az(b8,s)
s=B.I()
s.r=A.al.gp(0)
b9.aO(D.f0V,s)
s=B.I()
s.r=A.N.j(0.6).gp(0)
b9.ad(H.v1,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bl(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bK(A.aJx,18,10)
r=new B.ao(A.Q,A.M,A.S,A.T,A.R)
r.r=A.hh.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.G()
b8.drawOval(B.bG(s),n)
n.delete()
b8.restore()}b8=B.I()
b8.r=A.bo.gp(0)
b9.ad(H.v1,4,b8)
b8=B.I()
b8.b=A.a9
b8.c=2
b8.r=A.cq.gp(0)
b9.ad(H.v1,22,b8)
b8=B.I()
b8.b=A.a9
b8.c=0.8
b8.r=A.jN.gp(0)
b9.ad(H.v1,14,b8)
return!0
case"speaker":l=B.br(D.aPG,A.qK)
$.S()
b8=B.I()
b8.sam(D.ard.aA(0,new B.a3(l.a,l.b,l.c,l.d)))
b9.az(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=B.I()
b8.sam(D.etp.aA(0,B.bY(A.cx,15)))
b9.ad(A.cx,14+k,b8)
b8=B.I()
b8.r=A.dv.gp(0)
b9.ad(A.cx,5,b8)
b8=B.I()
b8.r=A.bm.gp(0)
b9.ad(H.a7e,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=B.bY(D.egJ,6+u*6+A.k.F(b8,6))
q=new B.ao(A.Q,A.M,A.S,A.T,A.R)
q.b=A.a9
q.c=1.8
q.r=A.c_.j(0.9-u*0.2).gp(0)
n=q.G()
s.drawArc.apply(s,[B.bG(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=B.br(D.f0M,A.qK)
$.S()
b8=B.I()
b8.sam(D.c3E.aA(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
b8=B.br(D.aPI,A.ic)
s=B.I()
s.r=A.hW.gp(0)
b9.az(b8,s)
if(b7){i=new B.V(Date.now(),0,!1)
h=B.Fg(i)<500?":":" "
g=A.a.aW(A.o.u(B.dg(i)),2,"0")
f=A.a.aW(A.o.u(B.fQ(i)),2,"0")
b8=B.I()
b8.r=A.be.j(0.12).gp(0)
b9.aO(D.aPI,b8)
c2.$5(b9,g+h+f,D.ejO,A.be,21)}b8=B.I()
b8.r=A.cq.gp(0)
b9.ad(D.ejM,2.4,b8)
b8=B.I()
b8.r=A.cq.gp(0)
b9.ad(D.egO,2.4,b8)
return!0
case"calculator":j=B.br(D.f0r,A.hF)
$.S()
b8=B.I()
b8.sam(D.c3o.aA(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
b8=B.br(D.f0k,A.hn)
s=B.I()
s.r=(b7?A.YA:D.bow).gp(0)
b9.az(b8,s)
if(b7)c2.$5(b9,"3.14159",D.ejr,A.Xo,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=B.br(new B.a3(q,s,q+6,r),A.TD)
$.S()
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
p.r=(d===3?A.cd:A.bO).gp(0)
n=p.G()
b8.drawRRect(B.e6(q),n)
n.delete()}return!0
case"phone":j=B.br(D.f0f,A.hF)
$.S()
b8=B.I()
b8.r=M.nf.gp(0)
b9.az(j,b8)
b8=B.I()
b8.b=A.a9
b8.c=1.9
b8.r=D.aiD.gp(0)
b9.az(j,b8)
a0=B.br(D.f05,A.hE)
if(b7){b8=B.I()
b8.sam(D.c4Y.aA(0,new B.a3(a0.a,a0.b,a0.c,a0.d)))
b9.az(a0,b8)
b8=b9.a
J.bl(b8.save())
b8.clipRRect(B.e6(a0),$.nD(),!0)
b8.translate(-12,-25)
L.Lz(b9,D.f6y,c1,b6)
b8.restore()
a1=A.k.F(c1*0.12,1)
b8=B.br(D.f02,A.hn)
s=B.I()
s.r=A.aS.gp(0)
b9.az(b8,s)
s=B.I()
s.r=A.be.gp(0)
b9.aO(new B.a3(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.eiu,A.c,6)}else{b8=B.I()
b8.r=D.vP.gp(0)
b9.az(a0,b8)}b8=B.br(D.f1a,D.ety)
s=B.I()
s.r=A.w.gp(0)
b9.az(b8,s)
return!0
case"router":j=B.br(D.f0L,A.mW)
$.S()
b8=B.I()
b8.sam(D.c3V.aA(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=G.RL[a2]
s=a3<0?-4:4
r=new B.ao(A.Q,A.M,A.S,A.T,A.R)
r.r=A.cr.gp(0)
r.c=4
r.d=A.bA
n=r.G()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.F(A.k.bf(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new B.ao(A.Q,A.M,A.S,A.T,A.R)
s.r=(a4?A.bf:A.aJ).gp(0)
n=s.G()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=B.bY(H.v1,8+u*6+A.k.F(s,6))
q=new B.ao(A.Q,A.M,A.S,A.T,A.R)
q.b=A.a9
q.c=1.8
q.r=A.hf.j(0.9-u*0.2).gp(0)
n=q.G()
b8.drawArc.apply(b8,[B.bG(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=B.br(D.f0q,A.hE)
s=$.S()
r=B.I()
r.r=A.e7.gp(0)
b9.az(b8,r)
if(b7){b8=B.I()
b8.r=A.ax.j(0.5*a5).gp(0)
b8.z=A.zG
b9.ad(A.v0,34,b8)}a6=new B.aF(s.r,A.ag,b6,b6,B.a([],x.v))
a6.D(new B.aY(-16,12))
a6.D(new B.aq(-16,-2))
a6.D(new B.c4(0,-30,16,-2))
a6.D(new B.aq(16,12))
a6.D(new B.bs())
b8=B.I()
b8.r=B.ar(A.ej,D.bfH,a5).gp(0)
b9.aH(a6,b8)
b8=B.I()
b8.b=A.a9
b8.c=1.4
b8.r=A.bZ.gp(0)
b9.aH(a6,b8)
if(b7){b8=b9.a
J.bl(b8.save())
b8.translate(0,-2)
b9.ih(0,c1*7)
s=B.I()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bo(A.I,H.a7e,s)
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
j.D(new B.bs())
q=B.I()
q.sam(D.c1Z.aA(0,D.f0E))
b9.aH(j,q)
q=new B.aF(s,A.ag,b6,b6,B.a([],r))
q.D(new B.aY(-8,-4))
q.D(new B.aq(-4,-13))
q.D(new B.aq(4,-13))
q.D(new B.aq(4,-4))
q.D(new B.bs())
p=B.I()
p.r=A.fi.gp(0)
b9.aH(q,p)
r=new B.aF(s,A.ag,b6,b6,B.a([],r))
r.D(new B.aY(8,-4))
r.D(new B.aq(8,-13))
r.D(new B.aq(11,-13))
r.D(new B.aq(15,-4))
r.D(new B.bs())
s=B.I()
s.r=A.fi.gp(0)
b9.aH(r,s)
for(a2=0;a2<2;++a2){a3=G.aAt[a2]
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
p.r=A.aB.gp(0)
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
j.D(new B.bs())
r=B.I()
r.sam(D.c33.aA(0,D.f0p))
b9.aH(j,r)
r=new B.aF(b8,A.ag,b6,b6,B.a([],s))
r.D(new B.aY(14,-10))
r.D(new B.aq(30,-22))
r.D(new B.aq(32,-18))
r.D(new B.aq(16,-4))
r.D(new B.bs())
q=B.I()
q.r=A.e4.gp(0)
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
if(b7){s=B.ar(A.cQ,A.tR,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.e7
b8.r=s.gp(0)
b9.aO(D.f0o,b8)
if(b7){b8=B.I()
b8.r=A.cQ.j(0.3).gp(0)
b8.z=A.mT
b9.ad(A.aJv,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.F(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new B.ao(A.Q,A.M,A.S,A.T,A.R)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.G()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=B.I()
b8.r=A.av.gp(0)
b9.ad(D.efR,3,b8)
return!0
case"lamp":if(b7){u=A.k.E(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aF($.S().r,A.ag,b6,b6,B.a([],x.v))
b8.D(new B.aY(-10,-14))
b8.D(new B.aq(-30,24))
b8.D(new B.aq(10,24))
b8.D(new B.aq(8,-14))
b8.D(new B.bs())
s=B.I()
s.r=A.dB.j(0.28*u).gp(0)
b9.aH(b8,s)
s=B.I()
s.r=A.dB.j(0.5*u).gp(0)
s.z=U.Iu
b9.ad(D.ejS,24,s)}b8=B.br(D.f13,A.hE)
s=$.S()
r=B.I()
r.r=A.e7.gp(0)
b9.az(b8,r)
r=B.I()
r.r=A.dv.gp(0)
r.c=3
r.d=A.bA
b9.bo(D.eg4,D.aJH,r)
r=B.I()
r.r=A.dv.gp(0)
r.c=3
r.d=A.bA
b9.bo(D.aJH,D.ejT,r)
a9=new B.aF(s.r,A.ag,b6,b6,B.a([],x.v))
a9.D(new B.aY(-14,-16))
a9.D(new B.aq(6,-26))
a9.D(new B.aq(10,-12))
a9.D(new B.aq(-10,-6))
a9.D(new B.bs())
s=B.I()
s.r=(b7?A.aT:A.ke).gp(0)
b9.aH(a9,s)
b8=B.I()
b8.r=(b7?A.c:A.bm).gp(0)
b9.ad(D.ejW,4,b8)
return!0
case"lights":b8=$.S().r
s=x.v
b0=new B.aF(b8,A.ag,b6,b6,B.a([],s))
b0.D(new B.aY(-34,-6))
b0.D(new B.c4(0,22,34,-6))
r=B.I()
r.b=A.a9
r.c=2
r.r=A.he.gp(0)
b9.aH(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.F(q+u*0.7,1.8)<1.1
if(b2){b3=new B.ao(A.Q,A.M,A.S,A.T,A.R)
b3.r=D.a46[u].j(0.6).gp(0)
b3.z=A.Iw
n=b3.G()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=B.a([],s)
b4=new B.aF(b8,A.ag,b6,b6,b3)
b3.push(new B.aY(p-3,o))
b3.push(new B.aq(p+3,o))
b5=o+11
b3.push(new B.aq(p+5,b5))
b3.push(new B.c4(p,o+17,p-5,b5))
b3.push(new B.bs())
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
if(b2)o=D.a46[u]
else{o=B.ar(D.a46[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.G()
p=b4.gbv().a.snapshot()
r.drawPath((b4.e=new B.ce(p)).a,n)
n.delete()}return!0}return C.ij1(b9,c0,c1,c2)},
fR:function fR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h9_(d){var w=D.mj.h(0,d)
return(w==null?null:w.b)===D.A5},
ike(d,e,f){return B.a4(d,!1).cc(B.v1(null,!1,!0,!0,new C.fV6(e,f),A.eR,null,A.p7,new C.fV7(),x.H))},
JI:function JI(d,e){this.a=d
this.b=e},
ml:function ml(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fV6:function fV6(d,e){this.a=d
this.b=e},
fV7:function fV7(){},
Vd:function Vd(d,e,f){this.c=d
this.d=e
this.a=f},
bkS:function bkS(d,e){var _=this
_.d=$
_.e=null
_.bx$=d
_.a8$=e
_.c=_.a=null},
dTU:function dTU(d){this.a=d},
dTT:function dTT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTR:function dTR(){},
dTS:function dTS(d){this.a=d},
dTQ:function dTQ(d){this.a=d},
dTP:function dTP(d,e){this.a=d
this.b=e},
dTO:function dTO(d,e){this.a=d
this.b=e},
dTN:function dTN(d){this.a=d},
dTM:function dTM(d){this.a=d},
dTI:function dTI(d){this.a=d},
dTH:function dTH(d){this.a=d},
dTL:function dTL(d,e,f){this.a=d
this.b=e
this.c=f},
dTK:function dTK(d){this.a=d},
dTJ:function dTJ(d){this.a=d},
bwI:function bwI(d,e,f){this.b=d
this.c=e
this.a=f},
aeZ:function aeZ(d,e,f){this.b=d
this.c=e
this.a=f},
aMw:function aMw(){},
a1k(d,e,f,g,h,i){return new C.bvv(d,e,f,g,h,i)},
bvv:function bvv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fob:function fob(){},
foc:function foc(){},
fod:function fod(){},
foe:function foe(){},
fof:function fof(){},
fog:function fog(){},
foh:function foh(){},
foi:function foi(){},
a8I:function a8I(d){this.a=d},
ckv:function ckv(d){this.a=d},
ckw:function ckw(){},
cku:function cku(d,e){this.a=d
this.b=e},
ckt:function ckt(d){this.a=d},
WO:function WO(d){this.a=d},
aFJ:function aFJ(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.h1$=f
_.lX$=g
_.f6$=h
_.h2$=i
_.bx$=j
_.a8$=k
_.c=_.a=null},
ePW:function ePW(d){this.a=d},
ePS:function ePS(d){this.a=d},
ePR:function ePR(d,e){this.a=d
this.b=e},
ePU:function ePU(d,e){this.a=d
this.b=e},
ePT:function ePT(d,e){this.a=d
this.b=e},
ePV:function ePV(d){this.a=d},
bwU:function bwU(d,e,f){this.b=d
this.c=e
this.a=f},
VC:function VC(d){this.a=d},
bl2:function bl2(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.h1$=d
_.lX$=e
_.f6$=f
_.h2$=g
_.bx$=h
_.a8$=i
_.c=_.a=null},
e_J:function e_J(){},
e_K:function e_K(){},
e_E:function e_E(d,e){this.a=d
this.b=e},
e_G:function e_G(d,e){this.a=d
this.b=e},
e_H:function e_H(d){this.a=d},
e_F:function e_F(d){this.a=d},
e_I:function e_I(d){this.a=d},
brE:function brE(d,e,f){this.b=d
this.c=e
this.a=f},
UP:function UP(d){this.a=d},
bkE:function bkE(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.h1$=d
_.lX$=e
_.f6$=f
_.h2$=g
_.bx$=h
_.a8$=i
_.c=_.a=null},
dLy:function dLy(){},
dLz:function dLz(){},
dLt:function dLt(){},
dLw:function dLw(d,e){this.a=d
this.b=e},
dLv:function dLv(d,e){this.a=d
this.b=e},
dLx:function dLx(d){this.a=d},
dLu:function dLu(d){this.a=d},
aJa:function aJa(d,e,f){this.a=d
this.b=e
this.c=f},
Vt:function Vt(d){this.a=d},
bkU:function bkU(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dXe:function dXe(d,e){this.a=d
this.b=e},
dXf:function dXf(d){this.a=d},
dXd:function dXd(d,e){this.a=d
this.b=e},
dXg:function dXg(d){this.a=d},
dXc:function dXc(d,e){this.a=d
this.b=e},
dXh:function dXh(d){this.a=d},
dXb:function dXb(d,e){this.a=d
this.b=e},
dXi:function dXi(d,e){this.a=d
this.b=e},
dXa:function dXa(d,e){this.a=d
this.b=e},
dXj:function dXj(d){this.a=d},
dX9:function dX9(d,e){this.a=d
this.b=e},
dXk:function dXk(d){this.a=d},
dX8:function dX8(d){this.a=d},
dXl:function dXl(d){this.a=d},
dX7:function dX7(d){this.a=d},
dXm:function dXm(d){this.a=d},
dXn:function dXn(d){this.a=d},
dX6:function dX6(d){this.a=d},
bmV:function bmV(d,e,f){this.b=d
this.c=e
this.a=f},
Wb:function Wb(d){this.a=d},
aF2:function aF2(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
emZ:function emZ(d,e){this.a=d
this.b=e},
en_:function en_(d,e,f){this.a=d
this.b=e
this.c=f},
emY:function emY(d,e,f){this.a=d
this.b=e
this.c=f},
en0:function en0(d){this.a=d},
emX:function emX(d){this.a=d},
en4:function en4(d){this.a=d},
en3:function en3(d,e){this.a=d
this.b=e},
en2:function en2(d,e){this.a=d
this.b=e},
en5:function en5(d,e){this.a=d
this.b=e},
en1:function en1(d,e){this.a=d
this.b=e},
en6:function en6(d){this.a=d},
Wl:function Wl(d){this.a=d},
aFn:function aFn(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
exz:function exz(d){this.a=d},
exA:function exA(d){this.a=d},
exx:function exx(d,e){this.a=d
this.b=e},
exy:function exy(d){this.a=d},
exw:function exw(d){this.a=d},
exB:function exB(d){this.a=d},
exC:function exC(d){this.a=d},
exD:function exD(d){this.a=d},
exE:function exE(d,e){this.a=d
this.b=e},
WF:function WF(d){this.a=d},
bm8:function bm8(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eLq:function eLq(){},
eLz:function eLz(){},
eLv:function eLv(d){this.a=d},
eLu:function eLu(){},
eLw:function eLw(d,e){this.a=d
this.b=e},
eLt:function eLt(d,e){this.a=d
this.b=e},
eLx:function eLx(d){this.a=d},
eLs:function eLs(d,e){this.a=d
this.b=e},
eLy:function eLy(d){this.a=d},
eLr:function eLr(d){this.a=d},
Wa:function Wa(d){this.a=d},
blD:function blD(d,e,f,g,h,i,j,k){var _=this
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
_.lX$=g
_.f6$=h
_.h2$=i
_.bx$=j
_.a8$=k
_.c=_.a=null},
elE:function elE(){},
elF:function elF(){},
elx:function elx(d){this.a=d},
elw:function elw(d){this.a=d},
ely:function ely(d){this.a=d},
elv:function elv(d){this.a=d},
elz:function elz(d){this.a=d},
elu:function elu(d){this.a=d},
elA:function elA(d,e){this.a=d
this.b=e},
elt:function elt(d,e){this.a=d
this.b=e},
elB:function elB(d){this.a=d},
els:function els(d,e){this.a=d
this.b=e},
elC:function elC(d){this.a=d},
elr:function elr(d,e){this.a=d
this.b=e},
elD:function elD(d){this.a=d},
elq:function elq(d,e){this.a=d
this.b=e},
beu:function beu(d,e,f){this.c=d
this.d=e
this.a=f},
aMk:function aMk(){},
byC:function byC(){},
aMD:function aMD(){},
byI:function byI(){},
aN5:function aN5(){},
byR:function byR(){},
aNw:function aNw(){},
bz_:function bz_(){},
Je(d,e,f,g){var w,v,u,t,s,r,q,p=$.asD
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.L)(e),++w)E.mj(d,e[w],f,g)
return}for(p=B.d_(e,0,B.dA(4,"count",x.S),B.T(e).c),v=p.$ti,p=new B.bR(p,p.gL(0),v.k("bR<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mj(d,s,f,g)
else B.bP(new B.bb(1000*q),new C.ckr(d,s,f,g),u)}},
ci_(d){return C.hPX(d)},
hPX(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ci_=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ci_)
case 7:r=f
q=B.aT(J.r(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.U(x.N,x.z)
w=1
break}p=A.X.aL(0,q,null)
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
return B.i($async$ci_,v)},
b28(d,e){return C.hPY(d,e)},
hPY(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b28=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b28)
case 6:s=g
w=7
return B.b(s.au("String","ngmy_play_progress_v1_"+d,A.X.aq(e,null)),$async$b28)
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
return B.i($async$b28,v)},
ckr:function ckr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
i9S(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.U(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.x)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.L)(w),++q){p=w[q]
u.push(B.H(["k",p.b,"x",B.ob(A.k.ac(p.c,4)),"y",B.ob(A.k.ac(p.d,4)),"v",p.e,"l",B.ob(A.k.ac(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.ob(A.k.ac(p.as,3)),"ch",p.at,"vc",B.ob(A.k.ac(p.z,3)),"s",B.ob(A.k.ac(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.L)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a7(f).k("cs.E"))
A.d.ff(l)
return A.X.aq(B.H(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
ijr(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.X.aL(0,a7,a5)
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
if(!$.qu().aj(0,s)){J.ca(v,null)
continue}d=s
a0=B.aK(J.r(t,"x"))
if(a0==null)a0=0.5
a1=B.aK(J.r(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.tK(a2,d,a0,a1)
a3.aqZ(a2,d,a0,a1)
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
d=B.jW(J.r(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.jW(J.r(t,"b"))
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
if(m!=null&&l!=null)a6.ali(m,A.k.N(B.e8(J.r(p,1))),l,A.k.N(B.e8(J.r(p,3))))}i=B.aK(J.r(w,"challenge"))
i=A.k.N(i==null?0:i)
k=B.aX(x.S)
h=g.a(J.r(w,"done"))
h=J.aW(h==null?A.cv:h)
while(h.C()){j=h.gS(h)
J.ca(k,A.k.N(B.e8(j)))}return new B.bpR(i,k)}catch(a4){return a5}},
fE4(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fE4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.az(),$async$fE4)
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
return B.i($async$fE4,v)},
bFj(d){return C.il0(d)},
il0(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bFj=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.az(),$async$bFj)
case 7:w=6
return B.b(f.au("String","ngmy_electronics_lab_v1",d),$async$bFj)
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
return B.i($async$bFj,v)}},D,H,X,Ak,Y,A2,Al
J=c[1]
B=c[0]
A=c[2]
A3=c[118]
Z=c[155]
A4=c[147]
A_=c[145]
R=c[139]
A5=c[133]
A6=c[149]
A7=c[157]
A8=c[107]
A9=c[135]
A0=c[117]
N=c[141]
Aa=c[156]
Ab=c[148]
Ac=c[152]
Ad=c[75]
T=c[84]
Ae=c[87]
P=c[127]
Af=c[131]
U=c[137]
V=c[140]
W=c[151]
E=c[29]
K=c[3]
F=c[38]
I=c[109]
A1=c[103]
O=c[150]
Ag=c[102]
Ah=c[153]
S=c[128]
Ai=c[154]
Q=c[143]
Aj=c[26]
L=c[28]
G=c[100]
M=c[98]
C=a.updateHolder(c[18],C)
D=c[136]
H=c[138]
X=c[144]
Ak=c[57]
Y=c[111]
A2=c[146]
Al=c[142]
C.akn.prototype={}
C.VV.prototype={
R(){return new C.blr(B.U(x.N,x.i),new B.as(A.at,$.ax()),B.a([],x.X),B.a([],x.F),B.mP(0,null,null))}}
C.blr.prototype={
gWH(){var w,v=this.d
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
if(s!=null)s.jl()
p.bP(0,A.cb)
t.m(new C.eeM(t))
t.a.toString
p=t.gWH()
w=3
return B.b(C.bAS(C.hYJ(q,C.i9K(p),o,t.ay)),$async$Px)
case 3:s=e
r=s==null?null:J.j4(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=C.ib9(q,p,o)
if(t.c==null){w=1
break}t.m(new C.eeN(t,o,r))
$.aV.x1$.push(new C.eeO(t))
case 1:return B.h(u,v)}})
return B.i($async$Px,v)},
YK(d){return this.c0T(d)},
aWT(){return this.YK(null)},
c0T(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$YK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aV.al$.d.c
if(s!=null)s.jl()
t.f.saX(0,o)
t.m(new C.eeZ(t))
F.dF(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bAS(C.i4I(o)),$async$YK)
case 3:r=n.a=m.ij6(f)
p.b=""
if(r!=null&&!C.i9L(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.iba(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.akn(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.ef_(p,t))
t.c6l(p.a)
case 1:return B.h(u,v)}})
return B.i($async$YK,v)},
c6l(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
A.d.aa(w)
w=++m.as
v=m.gWH()
A.d.aa(v.a)
A.d.aa(v.b)
m.e.aa(0)
m.m(new C.eeV(m))
t=d.d
s=B.U(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.eeT(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.eeW(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.L)(r),++u){p.$2(o,new C.eeX(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.eeY(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.br.j(0.1),g=B.n(16),f=B.J(A.br.j(0.35),A.r,1)
if(m.x)j=B.B(B.a([D.f84,A.bc,B.E(B.d(m.Q,l,l,l,l,l,l,A.Af,l,l,l),1)],x.p),A.m,l,A.e,A.i,0,l,l)
else if(k==null)j=D.fyN
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.V4,l,l,l),1)
v=x.p
w=B.a([B.B(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fj5,l,l,l)],v),A.m,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.u7,B.d(u,l,l,l,l,l,l,D.flT,l,l,l),l))
w.push(A.cM)
w.push(B.d(k.b,l,l,l,l,l,l,I.Ee,l,l,l))
u=k.e
if(u.length!==0){t=A.aT.j(0.12)
s=B.n(10)
w.push(B.p(l,B.d(u,l,l,l,l,l,l,D.fon,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.i3,A.cm,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aB
w.push(new B.D(A.Ne,new B.cd(A.aM,A.e,A.i,A.E,l,A.p,l,0,B.a([new B.y(t,l,A.lS,l,l,l,l,l,l,l,l,l),A.bn,new B.bz(1,A.ba,new B.y(q,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.L)(j),++p){o=j[p]
t=new B.aP(12,12)
s=new B.aP(12,12)
A.d.v(w,B.a([A.P,new B.bM(A.a8,l,l,B.p(l,new B.y(o.a,l,A.UL,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.br.j(0.3),l,l,new B.bj(t,t,t,t),l,l,A.n),l,l,l,l,A.h5,l,l,l),l),A.au,B.p(l,new B.y(o.b,l,D.fu0,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.c.j(0.07),l,l,new B.bj(s,s,s,s),l,l,A.n),l,l,l,l,A.bT,l,l,l)],v))}if(m.ax)w.push(D.elp)
j=B.cg(B.x(w,A.E,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.aiA(B.p(l,j,A.f,l,new B.aZ(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.by6,A.eB,l,l,1/0),A.b7,A.iC),B.E(C.hdF(m.gWH(),l,l,m.e),1)],w),A.m,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dX("Ask about it",i,new C.ef2(m),l,A.br,l),new E.dX("Invent something new",!i,new C.ef3(m),l,A.br,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dos[p]
i.push(new E.dX(n,!1,new C.ef4(m,n),l,A.br,l))}f.push(new E.fc(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.d6O[p]
i.push(new E.dX(r,!1,new C.ef5(m,r),l,A.br,l))}f.push(new E.fc(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aM(l,A.Y,!1,l,!0,A.t,l,B.aN(),m.f,l,l,l,l,l,2,B.bt(l,new B.b5(4,B.n(16),A.a0),l,A.eS,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.ku,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.ef6(m,k),l,!1,l,l,!1,l,!0,l,A.aa,l,l,l,l,l,l,l,l,l,l,l,A.df,!0,A.a4,l,A.ao,l,A.Ux,l,l),1)
h=m.at
v=h&&j?D.bNp:A.e5
j=h&&j?"Ask":"Invent"
f.push(B.B(B.a([i,A.ac,new E.fC(v,j,new C.ef7(m,k),A.br,l)],w),A.m,l,A.e,A.i,0,l,l))
return E.lv(A.br,A.f0,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.m,l,A.e,A.O,0,A.p))}}
C.Gr.prototype={}
C.v8.prototype={}
C.Wh.prototype={
R(){return new C.aFh(A.I,A.I,A.aw,B.aX(x.S),$,A.bB,0,B.a([],x.X),null,null)}}
C.aFh.prototype={
gaY9(){var w,v,u,t=this,s=D.HW[t.cx],r=D.RM[t.cy],q=D.CX[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.en(w,w.r,B.a7(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.ayN[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cI(p,0,new C.eu6())},
ga37(){return D.HW[this.cx].d/this.gaY9()},
gaPj(){return 0.1*(D.HW[this.cx].d/0.9)/D.RM[this.cy].d},
Z(){this.a2()
this.m7()
C.ci_("rocket_lander").bM(new C.euq(this),x.h)},
c6u(){var w=this
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
if(m.as!=="flying"){m.m(new C.eur())
return}w=D.rJ[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.E(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.t(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga37()
v=v.a9(0,new B.t(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaPj())}if(m.dy){t=m.r
v=v.aE(0,t.aI(0,t.gcF()*6*D.aAL[m.d]))}t=m.r=m.r.a9(0,v.aI(0,d))
s=m.f=m.f.a9(0,t.aI(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.t(-t.a*0.4,t.b)
t=new B.t(A.k.E(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.t(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.CX[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b28("rocket_lander",B.H(["unlocked",t],x.N,x.z))
C.Je("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga37()/(D.rJ[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ac(m.ga37()/(D.rJ[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
F.dF(80,"",500,0,0.6,"noise")
B.fL()}}if(m.Q&&m.x>0&&A.o.F(A.k.bf(m.CW*20),2)===0)F.dF(90,"",70,0,0.12,"noise")
m.m(new C.eus())},
agy(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.flm,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dX(e[w].a,f.$1(w),new C.eu8(this,g,w),v,h,v))
return new B.D(A.eH,B.x(B.a([u,A.cM,B.bX(A.bG,s,A.bq,v,6,6)],t),A.E,v,A.e,A.i,0,A.p),v)},
bFN(d){var w,v,u,t,s=this,r=null,q=s.ga37()/(D.rJ[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaPj()),o=D.aAL[s.d],n=B.n(24),m=d.c,l=B.J(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.au,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,G.V_,r,r,r),A.W,s.agy("ENGINE: "+D.HW[s.cx].b,D.HW,new C.etY(s),new C.etZ(s),A.cQ),s.agy("FUEL TANK: "+D.RM[s.cy].b,D.RM,new C.eu_(s),new C.eu0(s),A.be),s.agy("LANDING GEAR: "+D.CX[s.db].b,D.CX,new C.eu1(s),new C.eu2(s),A.aK),s.agy("EXTRAS (tap to add)",D.ayN,new C.eu3(s),new C.eu4(s),A.br)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fRB)
o=(q?A.be:A.c7).j(0.14)
w=B.n(12)
v=A.k.ac(s.gaY9(),2)
u=A.k.ac(s.ga37()/(D.rJ[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.CX[s.db].d*100)+".",r,r,r,r,r,r,D.fm0,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.i3,A.bT,r,r,r))
m.push(A.W)
m.push(new B.bM(A.A,r,r,new E.fC(A.on,"Launch",new C.eu5(s),A.be,r),r))
return B.au(B.p(r,B.cg(B.x(m,A.E,r,A.e,A.O,0,A.p),A.t,r,A.y,r,A.bQ,r,r,A.ah),A.f,r,A.lX,new B.o(D.bo4,r,l,n,r,r,A.n),r,r,r,A.bT,r,r,r,r),r,r,r)},
aZh(d,e,f,g){var w=null,v=f?A.cQ:A.c.j(0.1),u=B.n(18),t=B.J(A.aY,A.r,1)
return B.n1(A.iW,B.p(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.etV(e),new C.etW(e),w,w,w,w,new C.etX(e))},
aZg(d,e,f){return this.aZh(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cu(new C.euj(s,D.rJ[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rJ[w].a:"\ud83d\udd12"
o.push(new E.dX(v,s.d===w,new C.euk(s,w),r,D.rJ[w].c,r))}v=B.a([s.aZg(G.aox,new C.eul(s),s.y),A.bc,s.aZh(A.wk,new C.eum(s),s.Q,130),A.bc,s.aZg(A.OT,new C.eun(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aK:A.c.j(0.1)
t=B.n(18)
A.d.v(v,B.a([A.bc,B.aB(r,B.p(r,D.bRD,A.f,r,r,new B.o(u,r,B.J(A.aY,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.euo(s),r,r,r,r,r,r,!1,A.a3)],p))}return E.lv(A.cQ,A.f0,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fc(o,"WORLD",r),B.B(v,A.m,r,A.b9,A.i,0,r,r)],p),A.m,r,A.e,A.O,0,A.p))}}
C.bio.prototype={
a3(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rJ[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.S(),d=B.I(),a0=j.c,a1=B.ar(K.Z3,a0,0.25)
a1.toString
d.sam(new B.a9(A.b_,A.b5,A.x,B.a([G.afM,a1],x.O),l,l).aA(0,new B.a3(0,0,g,f)))
a2.aO(new B.a3(0,0,g,f),d)
w=new B.e5()
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
q=new B.e5()
q.cY(2)
for(p=0;p<=i;p+=18){e=new B.aq(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.af()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bw(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.D(new B.aq(i,h))
r.D(new B.aq(0,h))
r.D(new B.bs())
e=$.S()
d=B.I()
d.r=B.ar(a0,A.w,0.6).gp(0)
a2.aH(r,d)
o=B.bK(new B.t(k.ax*i,s+10),8,k.ay*i)
d=B.br(o,A.ic)
a0=B.I()
a0.r=A.bf.gp(0)
a2.az(d,a0)
a0=B.br(o.cq(2),A.mW)
d=B.I()
d.b=A.a9
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.az(a0,d)
if(k.as==="ready")return
d=k.f
J.bl(g.save())
g.translate(d.a*i,d.b*h)
a2.ih(0,k.w)
i=k.as
if(i==="crashed"){k=B.I()
k.r=A.cQ.j(0.6).gp(0)
k.z=U.Iu
a2.ad(A.I,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new B.aF(i,A.ag,l,l,B.a([],f))
n.D(new B.aY(-8,18))
n.D(new B.aq(0,44+Math.sin(k.CW*40)*8))
n.D(new B.aq(8,18))
n.D(new B.bs())
k=B.I()
k.r=A.aT.gp(0)
a2.aH(n,k)
i=new B.aF(i,A.ag,l,l,B.a([],f))
i.D(new B.aY(-4,18))
i.D(new B.aq(0,32))
i.D(new B.aq(4,18))
i.D(new B.bs())
k=B.I()
k.r=A.c.gp(0)
a2.aH(i,k)}k=e.r
m=new B.aF(k,A.ag,l,l,B.a([],f))
m.D(new B.aY(0,-26))
m.D(new B.c4(14,-10,11,18))
m.D(new B.aq(-11,18))
m.D(new B.c4(-14,-10,0,-26))
m.D(new B.bs())
i=B.I()
i.sam(D.c3x.aA(0,D.f0c))
a2.aH(m,i)
i=B.I()
i.r=A.aK.gp(0)
a2.ad(H.v1,5,i)
i=new B.aF(k,A.ag,l,l,B.a([],f))
i.D(new B.aY(-11,6))
i.D(new B.aq(-20,20))
i.D(new B.aq(-11,18))
i.D(new B.bs())
h=B.I()
h.r=A.ax.gp(0)
a2.aH(i,h)
f=new B.aF(k,A.ag,l,l,B.a([],f))
f.D(new B.aY(11,6))
f.D(new B.aq(20,20))
f.D(new B.aq(11,18))
f.D(new B.bs())
k=B.I()
k.r=A.ax.gp(0)
a2.aH(f,k)
g.restore()},
av(d){return!0}}
C.aNd.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.byT.prototype={
q(){var w,v,u
for(w=this.h2$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h1$
w===$&&B.c()
w.q()
this.bxP()}}
C.aTc.prototype={}
C.a3z.prototype={}
C.bbk.prototype={}
C.UO.prototype={
R(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eE(["skin"],x.N),o=new Float32Array(0)
return new C.aDL(w,v,u,t,s,r,q,new B.cw(null,x.A),p,D.Li,D.Li,A.aw,A.cK,o,new Int32Array(0),$,A.bB,0,B.a([],x.X),null,null)}}
C.aDL.prototype={
Z(){var w=this
w.a2()
w.m7()
w.as=new C.c50(w.gcf1())
new C.dLr(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a4(0)
v.d=null}this.bwT()},
cf2(d){var w,v=this
if(v.c==null)return
w=J.a6(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f5(0,B.H(["t","init","data",$.hnG],x.N,x.z))
v.at=!0
v.ax=""
v.azB()
break
case"pick":v.m(new C.dL3(v,d))
break
case"shot":v.aip(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
break}},
azB(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.awE[q.CW]
v=new C.dL4()
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
v.f5(0,u)}},
aip(d){return this.cvZ(d)},
cvZ(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aip=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cF.aN(A.a.b5(d,A.a.cu(d,",")+1))
w=6
return B.b(B.aw0(B.a([B.cD4(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$aip)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.K(x.gV).f.U(K.aRM)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aip,v)},
az2(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
mp(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bf(w)!==A.k.bf(v.ok)){E.WH("kick",0,0.4)
v.Ui(170,new C.dLs())}v.ok=w
return},
ae8(d){var w,v,u,t,s=this
s.m(new C.dL5(s,d))
if(d==null){s.fx=D.Li
s.dy=1
w=s.as
if(w!=null)w.f5(0,B.H(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.T(w).k("Z<1>")
u=B.C(new B.Z(w,new C.dL6(d),v),v.k("M.E"))
t=A.d.gI(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.M(0,t)
if(s.ch===2)s.ch=1}s.azB()
w=s.as
if(w!=null)w.f5(0,B.H(["t","focus","group",d],x.N,x.z))
s.go=0
s.cys(t,d)
return},
cys(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.WH("kick",0,0.8)
this.Ui(260,new C.dL7())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")F.dF(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.Ui(w*70,new C.dL8(this))
else if(A.a.t(e,"intestine")||e==="Stomach")F.dF(110,"",360,0.7,0.3,"saw")
else E.h3x("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":F.dF(210+e.length*4,"",80,0.6,0.55,"tri")
F.dF(2400,"",20,0,0.3,v)
break
case"muscle":F.dF(70,"",150,1,0.6,"sine")
break
case"vessel":F.dF(300,"",380,0.4,0.22,v)
E.WH("kick",0,0.3)
break
default:E.h3x("organic",2+A.o.F(e.length,6),200,0.4)}},
cD1(d){this.m(new C.dLa(this,d))},
aZz(){var w,v,u,t,s,r,q,p=this,o=B.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
if(p.az2(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.M(0,s.a)}q=B.C(o,o.$ti.k("cs.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.ap(w)]
p.p4=""},
bXt(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new C.dL0(u,w,d))
v=x.t
C.Je("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.Ui(1100,new C.dL1(u))
return}if(d==null){if(u.cx!=null)u.ae8(null)
return}u.ae8(d)},
c0b(d,e){var w,v=this,u=null,t=B.n(18),s=B.J(A.c_.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.fht,u,u,u)}else if(d==null||e==null)w=D.fwb
else{w=x.p
w=B.B(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hp,u,u,u),A.cM,B.d(e.b,u,u,u,u,u,u,I.Ee,u,u,u)],w),A.E,u,A.e,A.O,0,A.p),1),B.aG(u,u,u,u,D.bU9,u,u,u,new C.dL2(v),u,u,u,u,"Back to the whole body",A.cc)],w),A.E,u,A.e,A.i,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(K.Xu,u,s,t,u,u,A.n),u,u,u,u,R.ak7,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dzz.h(0,g)
i.azB()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dgR
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,B.L)(v),++s){r=v[s]
if(i.az2(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=B.a([B.aG(h,h,h,h,K.oq,h,h,h,new C.dLh(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bJ:B.Bz(h,A.pu,q)}else q=A.ks
q=B.x(B.a([B.E(q,1),new B.D(G.a_5,i.c0b(g,f),h)],v),A.m,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){o=D.d8o[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new E.dX(l,n,new C.dLi(i,o),o.c,A.c_,h))}p=B.a([new E.fc(p,h,h)],v)
if(!i.p1&&w.length!==0){n=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.L)(w),++s){k=w[s]
n.push(new E.dX(k,k===i.cx,new C.dLj(i,k),h,A.aT,h))}p.push(new E.fc(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(E.iK(A.c7,""+A.k.V(n)+" beats/min","Heart rate",180,40,new C.dLk(i),n))}if(i.ch>0&&t.a===0){n=B.a([],v)
for(j=0;j<5;++j)n.push(new E.FC(D.awE[j],i.CW===j,new C.dLl(i,j),!1,h))
p.push(new E.fc(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=B.a([new E.dX("Spin",n,new C.dLm(i),D.ank,A.aK,h),new E.fC(A.oi,"Reset view",new C.dLn(i),A.c,h),new E.dX(l,m,new C.dLo(i),A.He,A.aT,h)],v)
if(t.t(0,"organ"))v.push(new E.dX("Heartbeat sound",i.k4,new C.dLp(i),A.om,A.c7,h))
p.push(new E.fc(v,h,h))
return E.lv(A.c_,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.m,h,A.e,A.O,0,A.p))}}
C.aMi.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.aMj.prototype={
q(){var w,v,u
for(w=this.h2$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h1$
w===$&&B.c()
w.q()
this.bwS()}}
C.c50.prototype={
kR(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.htR
$.htR=v+1
u="ngmy-body-viewer-"+v
$.x6()
$.pI().oX(u,new C.c51(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fz(v,"message",new C.c52(t),!1,x.gA)
t.b=u},
f5(d,e){var w,v
try{w=this.c
if(w!=null){w=B.QQ(w.contentWindow)
if(w!=null)J.aiq(w,e,"*")}}catch(v){}}}
C.yn.prototype={}
C.CD.prototype={}
C.nx.prototype={}
C.bc3.prototype={}
C.UT.prototype={
R(){var w=x.N,v=x.y,u=x.S
return new C.aDN(B.U(w,x.a2),B.a([],x.cB),B.U(w,v),B.U(w,v),B.U(w,u),A.aw,A.I,A.I,B.aX(u),$,A.bB,0,B.a([],x.X),null,null)}}
C.aDN.prototype={
Z(){var w=this
w.a2()
w.m7()
w.ad7()
$.aV.x1$.push(new C.dN6(w))},
ad7(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ad7=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$ad7)
case 6:q=e.tz("ngmy_circuit_passed_v1")
r=q==null?A.Y:q
if(s.c!=null)s.m(new C.dML(s,r))
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
adt(d){return this.c42(d)},
c42(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$adt=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.M(0,d)
u=3
w=6
return B.b(B.az(),$async$adt)
case 6:r=f
q=s.cx
p=B.a7(q).k("k3<cs.E,m>")
q=B.C(new B.k3(q,new C.dMO(),p),p.k("M.E"))
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
axL(d,e,f,g){var w="c"+this.y++,v=new C.CD(w,e,f,g)
this.d.n(0,w,v)
return v},
mE(d,e,f){return this.axL(0,e,f,0)},
act(d,e){var w
if(D.zE.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a9(0,new B.t(-36,w))},
tW(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aTm(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.f6$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dq(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ea(m,D.cSC[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tW(p,0)&&n.tW(p,1)
break
case"or":p=q.a
o=n.tW(p,0)||n.tW(p,1)
break
case"xor":p=q.a
o=n.tW(p,0)!==n.tW(p,1)
break
case"nand":p=q.a
o=!(n.tW(p,0)&&n.tW(p,1))
break
case"nor":p=q.a
o=!(n.tW(p,0)||n.tW(p,1))
break
case"not":o=!n.tW(q.a,0)
break
default:o=n.tW(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bQ2(){return this.aTm(null)},
mp(d){var w,v,u,t,s,r,q,p,o,n=this
n.bQ2()
if(!n.ax)return
for(w=n.d,w=new B.bd(w,B.a7(w).k("bd<2>")).gag(0),v=new B.f5(w,new C.dN7()),u=n.f,t=n.w,s=0;v.C();){r=w.gS(0).a
if(u.h(0,r)===!0){q=n.f6$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.f6$)
o=s+1
F.dF(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
axM(d){var w=this
w.d.aa(0)
A.d.aa(w.e)
w.f.aa(0)
w.r.aa(0)
w.cy=null},
m8(d,e){var w=this.x
return new B.t(d*w.a,e*w.b)},
atZ(d){var w=this
if(w.x.A(0,A.aw)){$.aV.x1$.push(new C.dMJ(w,d))
return}w.m(new C.dMK(w,d))},
cyK(d){this.m(new C.dMP(this,d,$.bFF()[d]))},
c8P(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bFF()[a0]
v=d.d
u=B.a7(v).k("bd<2>")
t=u.k("Z<M.E>")
s=t.k("M.E")
r=B.C(new B.Z(new B.bd(v,u),new C.dME(),t),s)
A.d.aY(r,new C.dMF())
q=B.C(new B.Z(new B.bd(v,u),new C.dMG(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dMH(d,w))
return}u=d.r
p=B.dR(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dt(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h6(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aTm(0)
h=m.h(0,A.d.gI(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lu(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aG(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.aa(0)
u.v(0,p)
d.m(new C.dMI(d,o,a0))},
ayA(d){var w,v,u,t,s=this.d,r=B.a7(s).k("bd<2>")
s=B.C(new B.bd(s,r),r.k("M.E"))
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
chr(d){var w,v,u,t,s,r=this.d,q=B.a7(r).k("bd<2>")
r=B.C(new B.bd(r,q),q.k("M.E"))
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
c04(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.zE.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.act(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.z(p,o)
s=l}}}return t},
bOO(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
c8R(d){var w,v,u,t=this,s=t.ayA(d)
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
t.m(new C.dMQ())
return}u=t.bOO(d)
if(u!=null)t.m(new C.dMR(t,u))
else t.m(new C.dMS(t))},
awA(d){return this.c31(d)},
c31(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$awA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.ayA(d)
if(s==null){w=1
break}B.jO()
t.m(new C.dMN(t,s))
case 1:return B.h(u,v)}})
return B.i($async$awA,v)},
bBC(d){if(this.x.A(0,A.aw))return
this.m(new C.dMD(this,d,A.cK))
B.f1()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bFF()[g]
g=x.p
v=B.a([B.aG(h,h,h,h,B.X(i.ax?A.om:V.rE,A.ad,h,h,h,21),h,h,h,new C.dN0(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.n(16)
s=A.co.j(0.14)
r=B.J(A.co.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.fgC,h,h,h),B.d(w.b,h,h,h,h,h,h,H.a9X,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.l6,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.be:A.eO,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.B(B.a([B.E(B.x(q,A.E,h,A.e,A.i,0,A.p),1),B.bH(D.fHI,h,i.gc8O(),B.bo(A.co,h,h,h,h,h,h,h,h,h,h,A.cc))],g),A.m,h,A.e,A.i,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,T.Nm,D.byM,h,h,1/0))}u.push(B.E(B.cu(new C.dN1(i)),1))
if(f!=null){t=B.n(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.d(D.zE.h(0,r).a+": "+D.zE.h(0,r).e,h,h,h,h,h,h,A.tf,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A.a_9,A.bT,h,h,1/0))}u=B.x(u,A.m,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.zE.gdV(D.zE),s=s.gag(s);s.C();){r=s.gS(s)
q=new B.aP(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.aB(h,B.p(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bF,new B.y(p.a,h,D.aTI,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.O,0,A.p),A.f,h,h,new B.o(n,h,new B.bI(m,m,m,m),new B.bj(q,q,q,q),h,h,A.n),h,h,h,A.fB,Ag.Nj,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dN2(i,r),h,h,h,h,h,h,!1,A.a3))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dlh[l]
s.push(new E.fC(A.OU,k.b,new C.dN3(i,k),A.co,h))}s.push(new E.fC(K.wh,"Clear",new C.dN4(i),A.c7,h))
r=B.a([],g)
for(j=0;q=$.bFF(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.ed:A.lG
o=i.ay
n=i.cx.t(0,j)?A.be:A.bu
r.push(new E.dX(q.a,o===j,new C.dN5(i,j),p,n,h))}return E.lv(A.co,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fc(t,"PARTS",h),new E.fc(s,"TRY",h),new E.fc(r,"TASKS",h)],g),A.m,h,A.e,A.O,0,A.p))}}
C.bcm.prototype={
a3(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.S()
w=B.I()
w.r=D.aed.gp(0)
a7.aO(new B.a3(0,0,0+a5,0+a6),w)
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
e.push(new B.l_(h+a0,i,l-a0,a1,l,a1))
if(f){l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=9
l.r=A.bu.j(0.28).gp(0)
l.z=N.ox
s=l.G()
l=d.gbv().a.snapshot()
w.drawPath((d.e=new B.ce(l)).a,s)
s.delete()}l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=3.2
l.d=A.bA
l.r=(f?A.dB:A.bs).gp(0)
s=l.G()
l=d.e
w.drawPath((l==null?d.e=new B.ce(d.gbv().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.a9(0,D.J6)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new B.aF($.S().r,A.ag,a4,a4,B.a([],p))
w=a3.b
p.D(new B.aY(a6,w))
r=g.b
p.D(new B.l_(a6+a0,w,a5-a0,r,a5,r))
r=B.I()
r.b=A.a9
r.c=3
r.r=A.ad.gp(0)
a7.aH(p,r)}for(a5=new B.dq(o,o.r,o.e);a5.C();)this.c8Q(a7,a5.d)},
c8Q(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.zE.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bK(a0.c,64,64)
s=B.br(t,A.lm)
r=w.cy===v
q=s.eO(A.cx)
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
q.sam(new B.a9(A.b_,A.b5,A.x,B.a([p,m],x.O),g,g).aA(0,t))
d.az(s,q)
q=B.I()
q.b=A.a9
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.az(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?G.uA:D.bNT}else l=e.b
k=C.h5n(B.lu(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a3(d,v.aE(0,new B.t(p/2,q.gbb(q)/2)))
j=C.h5n(e.a,10.5,A.c,g,g,A.H)
j.a3(d,a0.c.a9(0,new B.t(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.h5n(f,9,u?A.dB:A.bZ,g,g,A.u)
i.a3(d,a0.c.a9(0,new B.t(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b_c(d,w.act(a0,h),o)
this.b_c(d,a0.c.a9(0,D.J6),o)},
b_c(d,e,f){var w
$.S()
w=B.I()
w.r=D.aed.gp(0)
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
C.aMn.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.byD.prototype={
q(){var w,v,u
for(w=this.h2$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h1$
w===$&&B.c()
w.q()
this.bwX()}}
C.NI.prototype={
R(){return new C.aE3(B.mP(0,null,null))}}
C.KK.prototype={
a6(){return"_UnfoldStyle."+this.b}}
C.AM.prototype={}
C.aE3.prototype={
c8W(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.m(new C.dSX(w,e))},
c1T(){var w=this
w.e.q()
w.e=B.mP(w.f,null,null)
w.m(new C.dSW(w))},
q(){this.e.q()
this.a1()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.oA(t,B.c7(v,A.c1,t?new C.bsB(w.e,w.gc8V(w),new C.dSY(d),v):new C.aIi(u,new B.bV(u.b,x.gj)),v,!1,!1,v,!1),new C.dSZ(w,u),x.K)}}
C.bub.prototype={}
C.bsB.prototype={
b_d(d,e){var w=null
return new B.D(R.a_A,B.x(B.a([B.d(d,w,w,w,w,w,w,D.fhc,w,w,w),A.bF,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=B.B(B.a([B.aG(v,v,v,v,A1.nw,v,v,v,w.e,v,v,v,v,v,v),A.t7,D.bEP],u),A.m,v,A.e,A.i,0,v,v),s=w.b_d("STUDIOS","Play, make things, and keep what you make")
$.bFG()
return B.bm(!0,B.x(B.a([new B.D(D.bDR,t,v),B.E(B.vQ(0,v,A.t,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,B.a([new B.mn(s,v),new B.o1(A.hO,B.Pk(new B.oD(new C.f3x(d),9,!0,!0,!0,0,B.ta(),v),D.aRB),v),new B.mn(w.b_d("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.o1(D.byU,B.Pk(new B.oD(new C.f3y(w),6,!0,!0,!0,0,B.ta(),v),D.aRB),v)],u)),1)],u),A.m,v,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0)}}
C.afh.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.n(20),n=B.n(20),m=B.ar(I.ni,p,0.3)
m.toString
w=x.O
m=B.a([m,D.ahe],w)
v=B.J(p.j(0.6),A.r,1.2)
u=x.V
t=B.a([new B.ac(-4,A.G,p.j(0.22),A.I,14)],u)
s=B.ar(p,A.w,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ac(0,A.G,p.j(0.5),A.I,12)],u)
return B.aH(!1,A.a2,!0,r,B.aO(!1,o,!0,B.eK(B.x(B.a([B.p(r,B.X(q.c,A.c,r,r,r,24),A.f,r,r,new B.o(r,r,r,r,u,new B.a9(A.ay,A.aD,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.P,B.d(q.a,r,2,A.a1,r,r,r,B.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.K,r,r),A.cM,B.d(q.b,r,2,A.a1,r,r,r,B.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.K,r,r)],x.p),A.m,r,A.b9,A.i,0,A.p),r,new B.o(r,r,v,n,t,new B.a9(A.ay,A.aD,A.x,m,r,r),A.n),r,A.Gs,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai)}}
C.ae9.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.n(20),g=B.n(20),f=B.ar(I.ni,A.d.gI(i),0.24)
f.toString
w=x.O
f=B.a([f,D.ahe],w)
v=B.J(A.d.gI(i).j(0.35),A.r,1)
u=x.V
t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cx,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.aP(6,6)
m=B.a([A.d.gI(i),A.d.gak(i)],w)
l=B.a([new B.ac(0,A.G,A.w.j(0.45),R.aK4,0)],u)
r.push(B.p(k,B.X(q[p],A.c,k,k,k,11),A.f,k,k,new B.o(k,k,k,new B.bj(n,n,n,n),l,new B.a9(A.a5,A.a8,A.x,m,k,k),A.n),k,17,k,new B.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.x(r,A.m,k,A.e,A.O,0,A.p)
u=B.ar(A.d.gI(i),A.d.gak(i),0.4)
u.toString
return B.aH(!1,A.a2,!0,k,B.aO(!1,h,!0,B.eK(B.x(B.a([new B.a5(58,k,w,k),A.W,B.d(j.b,k,2,A.a1,k,k,k,B.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.K,k,k),A.au,B.X(A.Cw,A.d.gI(i),k,k,k,18)],s),A.m,k,A.b9,A.i,0,A.p),k,new B.o(k,k,v,g,t,new B.a9(A.ay,A.aD,A.x,f,k,k),A.n),k,A.Gs,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.ai)}}
C.Qw.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gak(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ap(-8,B.c3(j,new B.o(h,j,j,B.n(22),j,j,A.n),A.bh),j,j,2,2,8,j)
u=B.n(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.J3,26),new B.ac(-6,A.G,A.d.gI(i).j(0.1+0.4*t),A.I,30)],s)
q=B.n(22)
p=B.ar(A.d.gI(i),A.c,0.14)
p.toString
o=A.d.gI(i)
n=A.d.gak(i)
i=B.ar(A.d.gak(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bS(0,B.c3(j,new B.o(j,j,j,j,j,new B.a9(A.ay,A.aD,A.x,B.a([p,o,n,i],m),D.dqW,j),A.n),A.bh),0,0,0),B.ap(j,B.c3(j,new B.o(j,j,j,j,j,new B.a9(A.b_,A.b5,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bh),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bS(0,B.b4(j,j,j,new C.btA(i,j),A.aw),0,0,0))
i=A.c.j(0.16)
p=B.J(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.I,14)],s)
s=B.p(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fiW,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.au,B.d(i,j,1,A.a1,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a7,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Ul)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.n(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.fZ,B.B(B.a([s,A.er,B.E(B.x(p,A.E,j,A.e,A.O,0,A.p),1)],l),A.m,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bS(0,B.dZ(B.ed(j,A.w.j(A.k.E(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=B.n(22)
m.push(B.bS(0,B.dZ(B.c3(j,new B.o(j,j,B.J(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bh),!0,j),0,0,0))
return new B.a5(w,v,new B.an(A.a_,j,A.ab,A.f,B.a([h,B.bS(0,B.c3(B.bx(q,new B.an(A.a_,j,A.ab,A.t,m,j),A.ap),new B.o(j,j,j,u,r,j,A.n),A.bh),0,0,0)],l),j),j)}}
C.btA.prototype={
a3(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a3(r,-10,s,w)
u=d.a
J.bl(u.save())
u.translate(v.gbK().a,v.gbK().b)
d.ih(0,0.35)
t=B.bK(A.I,(w- -10)*1.6,s-r)
$.S()
s=B.I()
s.sam(new B.a9(A.a5,A.a8,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aA(0,t))
d.aO(t,s)
u.restore()},
av(d){return d.b!==this.b}}
C.bt5.prototype={
B(d){var w=null,v=B.n(22),u=B.a([D.bm_,D.agm],x.O),t=this.e,s=B.J(A.d.gI(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.kq,24)],x.V),q=B.n(22),p=A.d.gI(t)
return new B.a5(this.c,this.d,B.c3(B.bx(q,B.b4(B.au(B.X(A.jB,A.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bb2(p,w),A.aw),A.ap),new B.o(w,w,s,v,r,new B.a9(A.ay,A.aD,A.x,u,w,w),A.n),A.bh),w)}}
C.bb2.prototype={
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
C.aIi.prototype={
R(){return new C.aIj(new B.cw(null,x.A),null,null)}}
C.aIj.prototype={
guj(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,D.bwd,null,1,null,v)
w.cM(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
ga_6(){var w,v=this,u=v.e
if(u===$){w=B.bn(null,A.fY,null,1,null,v)
w.fn(0,!0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
gaxN(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc8T(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaWA(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaXm(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb7Y(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a2()
var w=this.guj()
w.dh()
w.dS$.M(0,this.gcyt())},
cyu(){var w,v,u,t,s,r,q,p=this,o=p.guj().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gaxN().a){case 0:w=D.nz
break
case 1:w=D.uJ
break
case 2:w=D.a49
break
case 3:w=D.nz
break
case 4:w=D.ddG
break
case 5:w=D.uJ
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.abU)r=0.09
else r=s===D.abV?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){F.dF(260+90*v,"",260,1.6,0.18,"tri")
u=D.c65[v]
E.mj("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.Je("bell",D.ceU,1400,0.35)}}p.ax=o},
q(){this.guj().q()
this.ga_6().q()
this.byL()},
aey(){var w=this
w.guj().cY8(0,B.dC(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new C.f3d(w))},
cju(){this.guj().bR(0)
this.m(new C.f3c(this))},
aex(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$aex=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaXm(),s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
l.push(new B.as(new B.ba(q,A.b3,A.aO),$.ax()))}m=B.a([],m)
for(t=u.gb7Y(),s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){p=t[r]
m.push(new B.as(new B.ba(p,A.b3,A.aO),$.ax()))}o=B.C(u.gaWA(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bU(I.ni,null,new C.f3b(u,l,m,o),t,!0,!0,!0,A.lP,!1,!1,x.H),$async$aex)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.T$=$.ax()
n.P$=0}return B.h(null,v)}})
return B.i($async$aex,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gaxN(),f=i.a.c,e=f.b,d=i.gc8T(),a0=new C.AM(g,e,f.c,d,i.gaWA(),i.gaXm(),i.gb7Y())
f=B.ar(A.d.gI(d),A.d.gak(d),0.4)
f.toString
g=x.p
w=B.a([B.aG(h,h,h,h,B.X(i.at?A.om:V.rE,A.ad,h,h,h,21),h,h,h,new C.f3l(i),h,h,h,h,"Sound",h),B.aG(h,h,h,h,D.bXJ,h,h,h,i.gc8U(),h,h,h,h,"Edit words and pictures",h),B.aG(h,h,h,h,K.oq,h,h,h,new C.f3m(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.cb(i.ga_6(),new C.f3n(i,a0),h),B.cu(new C.f3o(i,a0))],g)
u=i.as
t=u?i.gcjt():i.gc8X()
u=u?D.bNd:A.rD
s=B.ar(A.d.gI(d),A.d.gak(d),0.4)
s.toString
t=B.B(B.a([B.aG(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cc),B.E(B.cb(i.guj(),new C.f3p(i,a1,a0),h),1),B.aG(h,h,h,h,D.bU_,h,h,h,new C.f3q(i),h,h,h,h,"Replay",A.cc)],g),A.m,h,A.e,A.i,0,h,h)
s=i.Q
u=A.k.ac(s,1)
r=B.ar(A.d.gI(d),A.d.gak(d),0.4)
r.toString
s=E.iK(r,u+"x","Speed",2.5,0.4,new C.f3r(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.do2[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gI(d),A.d.gak(d),0.4)
r.toString
u.push(new E.dX(p.b,o===p.a,new C.f3s(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.c6t[q]
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}m=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}l=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}k=A.d.gI(o).A(0,A.d.gI(n))?A.c:A.aY
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}j=new B.ay(k,A.d.gI(o).A(0,A.d.gI(n))?2.5:1,A.r,-1)
d.push(B.aB(h,B.p(h,h,A.f,h,h,new B.o(h,h,new B.bI(j,j,j,j),h,h,new B.a9(A.ay,A.aD,A.x,n,h,h),A.a6),h,l,h,K.ajD,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f3t(i,n),h,h,h,h,h,h,!1,A.a3))}return E.lv(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.er(new B.an(A.a_,h,A.b2,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fc(u,"STYLE",h),new E.fc(d,"THEME",h)],g),A.m,h,A.e,A.O,0,A.p))},
bAO(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nz[r]
p=A.k.E((1-A.et.aw(0,A.k.E((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.E(p/1.5707963267948966,0,1)
q=D.nz[r]
n=q+0.12
m=A.k.E((a0-n)/(q+0.2-n),0,1)
n=D.nz[r]
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
i=D.nz[r]
h=i+0.1
if(A.k.E((a0-h)/(i+0.3-h),0,1)>0){i=D.nz[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nz[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cN(0,r*118,0,f,f,f,new B.kB(q,new B.iN(n,f,A.b_,!0,f,new C.Qw(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nz[r]
u=v-0.02
g=A.k.E((a0-u)/(v+0.1-u),0,1)
u=A.d.gI(w)
v=D.nz[r]
t=v+0.12
e.push(new B.cN(0,r*118-3-2,0,f,f,4,new B.my(new C.bsd(u,g,1-A.k.E((a0-t)/(v+0.22-t),0,1),f),f,A.aw,f,f),f))}return new B.a5(a2,358,new B.an(A.a_,f,A.ab,A.f,e,f),f)},
bRA(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.uJ[r]
p=A.q8.aw(0,A.k.E((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.uJ[r]
m=q+0.15
l=A.k.E((a0-m)/(q+0.25-m),0,1)
m=D.uJ[r]
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
g=new C.Qw(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dr()
k.fI(3.141592653589793)
k=new B.iN(k,f,A.A,!0,f,new C.bt5(a2,108,w,f),f)}e.push(new B.cN(0,r*130,0,f,f,f,new B.kB(q,new B.iN(m,f,A.A,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.an(A.a_,f,A.ab,A.f,e,f),f)},
cDu(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a49[w]
l.push(A.ct.aw(0,A.k.E((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bS(0,B.b4(n,n,n,new C.bvF(d.d,l,D.ayn,m,C.bsA(e,0.4,0.62),f,C.bsA(e,0.45,0.7),n),A.aw),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.h5U(g,w)
q=D.ayn[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cN(r,s-q*m*p+12,n,n,t,n,new B.kB(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.h5U(g,w)
r=D.a49[w]
q=r+0.15
v.push(new B.cN(s,l,n,n,t,n,new B.kB(A.k.E((e-q)/(r+0.25-q),0,1),new B.y(u[w],n,A.Va,n,A.K,n,n,n,n,n,n,n),n),n))}return new B.a5(g,m+90,new B.an(A.a_,n,A.ab,A.f,v,n),n)},
bH2(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.ct.aw(0,C.bsA(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bS(0,B.au(B.dP(B.b4(f,f,f,new C.brD(A.d.gI(a1),C.bsA(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.efG),f,f,f),0,0,0))
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
w.push(new B.z(o,new B.cN(0,0,0,0,f,f,new B.ci(A.A,f,f,new B.kB(k*(0.45+0.55*o),B.dP(new B.iN(l,f,A.A,!0,f,new C.Qw(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.t(n*a5*0.34,-o*18)),f),f),f)))}A.d.aY(w,new C.f34())
A.d.v(a0,new B.N(w,new C.f35(),x.fR))
return new B.a5(a5,330,new B.an(A.a_,f,A.ab,A.f,a0,f),f)},
c8S(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.uJ[q]
o=A.k.E((a2-p)/(p+0.22-p),0,1)
n=A.lt.aw(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.uJ[q]
m=A.k.E((a2-m)/(m+0.02-m),0,1)
l=D.aAr[q]
k=B.dr()
k.mS(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jX(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.uJ[q]
g=h+0.1
g=A.k.E((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cN(0,0,0,0,e,e,new B.ci(A.A,e,e,new B.kB(m,B.dP(new B.iN(k,e,A.A,!0,e,new C.Qw(d,92,w,p,j,i,0,g*s,h,e),e),new B.t(0,l)),e),e),e))
l=D.uJ[q]
h=l+0.02
f=A.k.E((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cN(0,0,0,0,e,e,new B.ci(A.A,e,e,B.dP(new B.my(new C.bbI(w,f,q,e),e,new B.av(r,212),e,e),new B.t(0,D.aAr[q])),e),e))}return new B.a5(a4,330,new B.an(A.a_,e,A.ab,A.f,a0,e),e)},
bDJ(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.t(-b0,-150),new B.t(b0,-40),D.efK],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nz[r]
p=A.k.E((a8-q)/(q+0.2-q),0,1)
o=A.ct.aw(0,p)
q=D.aAA[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nz[r]
f=g+0.2
e=A.k.E((a8-f)/(g+0.3-f),0,1)
f=D.nz[r]
g=f-0.01
g=A.k.E((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.mS(l*h+D.dhO[r]*o)
f.fI(l*0.9)
h=0.55+0.45*o
f.jX(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cN(0,0,0,0,a3,a3,new B.ci(A.A,a3,a3,new B.kB(g,B.dP(new B.iN(f,a3,A.A,!0,a3,new C.Qw(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.t(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nz[r]
i=q+0.17
a2=A.k.E((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aAA[r]
a6.push(new B.cN(0,0,0,0,a3,a3,new B.ci(A.A,a3,a3,B.dP(new B.my(new C.brF(A.d.gI(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.t(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.an(A.a_,a3,A.ab,A.f,a6,a3),a3)}}
C.bsd.prototype={
a3(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a3(w-v,0,w+v,e.b)
q=B.br(u,A.hn)
$.S()
t=B.I()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=N.ox
d.az(q,t)
t=B.br(u,A.hn)
q=B.I()
q.r=A.c.j(s).gp(0)
d.az(t,q)},
av(d){return d.c!==this.c||d.d!==this.d}}
C.brD.prototype={
a3(d,e){var w,v,u=this.c,t=B.bK(e.eh(A.I),e.b*u,e.a*u)
$.S()
u=B.I()
u.b=A.a9
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=U.Iu
d.dO(t,u)
u=B.I()
u.b=A.a9
u.c=2.5
u.r=w.j(0.7).gp(0)
d.dO(t,u)
u=t.cq(-14)
v=B.I()
v.b=A.a9
v.c=1
v.r=w.j(0.3).gp(0)
d.dO(u,v)},
av(d){return!0}}
C.bbI.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.eh(A.I),f=this.c,e=A.ct.aw(0,f)
$.S()
w=B.I()
w.b=A.a9
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gI(u).j(0.6*v).gp(0)
d.ad(g,40+e*a0.a*0.42,w)
t=new B.e5()
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
C.brF.prototype={
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
C.bvF.prototype={
a3(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new B.a3(0,d0,0+c5,d0+60)
$.S()
d0=B.I()
w=c1.b
v=x.O
d0.sam(new B.a9(A.b_,A.b5,A.x,B.a([A.d.gI(w).j(0.18),A.L],v),c2,c2).aA(0,d1))
d2.aO(d1,d0)
d0=B.I()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bo(new B.t(0,c4),new B.t(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=C.h5U(c5,f)
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
a6.sam(new B.a9(A.b_,A.b5,A.x,B.a([a7,A.d.gak(w)],v),c2,c2).aA(0,a5))
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
a6.push(new B.bs())
a6=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a6.r=B.ar(A.d.gak(w),A.w,0.5).gp(0)
a4=a6.G()
a6=a8.gbv().a.snapshot()
t.drawPath((a8.e=new B.ce(a6)).a,a4)
a4.delete()
a6=B.a([],n)
b0=new B.aF(a2,A.ag,c2,c2,a6)
a6.push(new B.aY(d,a1))
a6.push(new B.aq(d+c8,a9))
a6.push(new B.aq(a7,a9))
a6.push(new B.aq(a3,a1))
a6.push(new B.bs())
a2=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a2.r=B.ar(A.d.gI(w),A.c,0.45).gp(0)
a4=a2.G()
a2=b0.gbv().a.snapshot()
t.drawPath((b0.e=new B.ce(a2)).a,a4)
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
t.drawPath((a2==null?a8.e=new B.ce(a8.gbv().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.G()
a2=b0.e
t.drawPath((a2==null?b0.e=new B.ce(b0.gbv().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bf(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=B.br(new B.a3(b7,a7,b7+r,b5),A.hn)
$.S()
b9=new B.ao(A.Q,A.M,A.S,A.T,A.R)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.G()
t.drawRRect(B.e6(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new B.a3(d,a1,a3,a1+28)
J.bl(t.save())
t.clipRect(B.bG(a5),$.mw()[1],!0)
$.S()
a1=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a1.sam(new B.a9(A.b_,A.b5,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c2,c2).aA(0,c0))
a4=a1.G()
t.drawRect(B.bG(c0),a4)
a4.delete()
t.restore()}}},
av(d){return!0}}
C.aO2.prototype={
aU(){this.b1()
this.b0()
this.dH()},
q(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdD())
w.b7$=null
w.a1()}}
C.a0O.prototype={
a6(){return"_Role."+this.b}}
C.qg.prototype={}
C.r1.prototype={}
C.CH.prototype={}
C.ZL.prototype={}
C.af5.prototype={}
C.a10.prototype={
gY(d){return this.d}}
C.CR.prototype={}
C.ac2.prototype={}
C.aci.prototype={}
C.aec.prototype={}
C.bil.prototype={
a3g(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
F.dF(d,"",e,g,h,f)},
b92(d,e,f){return this.a3g(d,e,f,0,0.55)},
aCm(d,e,f,g){return this.a3g(d,e,f,0,g)},
b93(d,e,f,g){return this.a3g(d,e,f,g,0.55)},
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
w.aV()},
akB(d,e,f,g){var w="n"+this.ay++,v=new C.r1(w,e,f,g)
this.a.n(0,w,v)
this.aV()
return v},
rW(d,e,f){return this.akB(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bs(w.b,new C.dnk(e))
A.d.bs(w.c,new C.dnl(e))
w.aV()},
bcS(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mS.h(0,v.b).c===D.xm)return!1
w=this.b
if(A.d.b3(w,new C.dnh(d,e)))return!1
w.push(new C.CH(d,e))
this.aV()
return!0},
c0Q(d){var w
if(d.b==="beat")return D.cf3[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.ap(500)
case 2:return 1400+w.ap(2200)
default:return 450+w.ap(2000)}},
aFX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aAQ[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.CR(u,t,j.ax,90))
w.push(new C.CR(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.af()*3.141592653589793*2
v.push(new C.a10(u,new B.t(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b92(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.af()*3.141592653589793*2
p=100+w.af()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.af()*0.5)
m.toString
v.push(new C.a10(u,new B.t(o*p,n*p),m,3+w.af()*4.5,1000+w.ap(700),j.ax))}j.f.push(new C.CR(u,t,j.ax,120))
j.aCm(120,200,"noise",0.5)
j.b92(261.63*Math.pow(2,([7,12,16,19][w.ap(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.CR(u,t,j.ax,230))
w.push(new C.CR(u,t,j.ax+160,160))
w.push(new C.CR(u,t,j.ax+320,100))
j.b93(180+j.at.ap(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.ac2(u,new B.t((w.af()-0.5)*220,-260-w.af()*180),t,j.ax))
j.b93(300+w.ap(300),110,h,0.8)
break
case"comet":w=j.at
q=w.af()*3.141592653589793*2
j.w.push(new C.aci(u,u.a9(0,new B.t(Math.cos(q),Math.sin(q)).aI(0,260+w.af()*200)),t,j.ax))
j.a3g(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fL()
j.a3g(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.aec(u,D.aAf[v],t,j.ax))
j.aCm(261.63*Math.pow(2,([0,5,9,12][j.at.ap(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aCm(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cb9[A.o.F(w,3)]
for(k=1;k<=3;++k)j.ctz(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gag(j.b),v=new B.f5(w,new C.dni(d));v.C();)j.aAS(w.gS(0),j.ax+D.cns[A.o.F(g.d,4)])
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
case"chance":s=j.at.ap(100)<D.cED[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gag(j.b),v=new B.f5(w,new C.dnj(d));v.C();)j.aAS(w.gS(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xb(w,0,v-700)},
ctz(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.ZL(e,"~"+d))},
aAS(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.af5(d.a,v,e,w))
u.push(new C.ZL(w,v))},
a6Z(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aFX(r)
u.n(0,r,o.ax+o.c0Q(s))}}w=o.c
v=B.T(w).k("Z<1>")
q=B.C(new B.Z(w,new C.dnm(o),v),v.k("M.E"))
if(q.length!==0){A.d.bs(w,new C.dnn(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.L)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b5(u,1)
for(u=A.d.gag(v),r=new B.f5(u,new C.dno(p));r.C();)o.aAS(u.gS(0),o.ax)}else o.aFX(u)}}A.d.bs(o.d,new C.dnp(o))
A.d.bs(o.e,new C.dnq(o))
A.d.bs(o.f,new C.dnr(o))
A.d.bs(o.w,new C.dns(o))
A.d.bs(o.x,new C.dnt(o))
A.d.bs(o.r,new C.dnu(o))
o.aV()},
vn(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
for(v=this.a,v=new B.dq(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.H(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.X.aq(B.H(["nodes",m,"edges",v],u,x.ew),null)},
TW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.X.aL(0,d,null))
k.aa(0)
for(o=x.j,n=J.aW(o.a(J.r(w,"nodes"))),m=k.a;n.C();){v=n.gS(n)
u=B.w(J.r(v,"k"))
if(!D.mS.aj(0,u))continue
t=B.w(J.r(v,"id"))
m.n(0,t,new C.r1(t,u,new B.t(B.e8(J.r(v,"x"))*k.cy.a,B.e8(J.r(v,"y"))*k.cy.b),A.k.N(B.e8(J.r(v,"p")))))
s=B.cc(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aW(o.a(J.r(w,"edges"))),n=k.b;o.C();){r=o.gS(o)
q=B.w(J.r(r,0))
p=B.w(J.r(r,1))
if(m.aj(0,q)&&m.aj(0,p))n.push(new C.CH(q,p))}k.aV()
return!0}catch(l){return!1}},
cSJ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.aa(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.r1(n,r,new B.t(q*p.a,o*p.b),s))
l.aV()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bcS(w[m.a],w[m.b])}},
gY(d){return this.cy}}
C.Gc.prototype={}
C.Wg.prototype={
R(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aFg(new C.bil(B.U(w,x.f3),v,u,t,s,r,q,p,o,B.U(w,n),B.U(w,n),B.U(w,n),B.U(w,n),A.cK,A.L,A.aw,$.ax()),A.bB,A.I,A.I,A.Y,null,null)}}
C.aFg.prototype={
ad0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$ad0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.az(),$async$ad0)
case 6:q=n.jW(m.r(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.etr(s))
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
w=u}for(;;)switch(w){case 0:s.m(new C.etg(s))
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
bMZ(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a7(n).k("bd<2>")
v=""+n.a+"|"+o.length+"|"+new B.bd(n,w).cI(0,0,new C.eti())+"|"+A.d.cI(o,0,new C.etj())
if(v===p.ch)return p.CW
u=new C.etm()
t=x.s
s=B.a([],t)
r=new C.etn(p,s,u)
for(n=new B.bd(n,w).gag(0),w=new B.f5(n,new C.etk());w.C();){q=n.gS(0)
if(!A.d.b3(o,new C.etl(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.d_(s,0,B.dA(5,"count",x.S),x.N).dm(0)},
Z(){var w,v=this
v.a2()
v.ad0()
v.d.db=v.ay
w=v.pQ(new C.etR(v))
w.h5(0)
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
w.bxN()},
acx(d){return this.c0h(d)},
c0h(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
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
if(q!=null&&q.length!==0)r=o.TW(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aXM(A.d.gI(D.azG))
if(s.c!=null)s.m(new C.etq())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$acx,v)},
aXM(d){this.d.cSJ(0,d.c,d.d)
this.Eo()},
Eo(){var w=this.as
if(w!=null)w.a4(0)
this.as=B.cG(A.lC,new C.etc(this))},
axO(d){var w,v,u,t,s=this.d.a,r=B.a7(s).k("bd<2>")
s=B.C(new B.bd(s,r),r.k("M.E"))
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
chs(d){var w,v,u,t,s,r=this.d.a,q=B.a7(r).k("bd<2>")
r=B.C(new B.bd(r,q),q.k("M.E"))
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
c05(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mS.h(0,r.b).c===D.xm)continue
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
c9_(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.htS(new B.t(n.a+36,n.b+0),new B.t(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cBi(d){var w,v,u,t,s,r,q=this,p=q.axO(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f1()
u=v.b
if(u==="button"){w.aFX(p)
return}if(q.r)return
t=D.mS.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.r0)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.aV()
q.Eo()
return}if(q.r)return
r=q.c9_(d)
if(r!=null){w=q.d
A.d.cz(w.b,r)
w.aV()
q.Eo()}},
ciL(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.chs(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.axO(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aE(0,d)}},
ciM(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aV()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.t(A.k.E(d.a+s.y.a,46,t.a-46),A.k.E(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aV()}}},
b2_(){var w,v,u=this
if(u.z!=null){w=u.c05(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bcS(v,w)}else v=!1
if(v){B.jN()
u.Eo()}u.z=null
u.d.aV()}else if(u.x!=null){if(u.at)u.Eo()
u.x=null}},
ade(d){return this.c32(d)},
c32(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ade=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.axO(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jO()
p=t.c
p.toString
w=3
return B.b(B.bU(I.ni,null,new C.ett(q),p,!0,!0,!1,A.lP,!1,!1,x.y),$async$ade)
case 3:if(f===!0){r.W(0,s)
t.Eo()}case 1:return B.h(u,v)}})
return B.i($async$ade,v)},
c8Y(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.rW(0,d,new B.t(v.a*(0.25+u.af()*0.5),v.b*(0.2+u.af()*0.55)))
B.f1()
this.Eo()},
ah5(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ah5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(I.ni,null,new C.etv(),s,!0,!0,!0,A.lP,!1,!1,x.es),$async$ah5)
case 2:t=e
if(t!=null)u.aXM(t)
return B.h(null,v)}})
return B.i($async$ah5,v)},
aez(d){var w=0,v=B.j(x.H),u=this,t
var $async$aez=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ck(null,null,!0,null,new C.etf(),t,null,!0,!0,x.y),$async$aez)
case 2:if(f===!0){u.d.aa(0)
u.Eo()}return B.h(null,v)}})
return B.i($async$aez,v)},
B(d){var w=this,v=null,u=B.a([B.aiA(w.r?new B.bM(A.a5,v,v,new B.D(A.Gt,B.hs(D.bRT,D.fAl,new C.etP(w),v),v),v):w.c90(),A.b7,A.iB),B.E(B.cu(new C.etQ(w)),1)],x.p)
if(!w.r)u.push(w.cw1())
return B.c7(v,A.c1,B.bm(!0,B.x(u,A.m,v,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bII(){var w=null,v=new C.eth(),u=A.w.j(0.7),t=B.n(26),s=B.J(A.bv.j(0.5),A.r,1)
return B.bS(0,B.ed(B.au(B.p(w,B.cg(B.x(B.a([D.fLM,A.au,D.fTw,A.aA,v.$4(A.ol,A.bv,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.Cs,A.co,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kj,A.c_,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(G.anA,A.bu,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fSO,new B.bM(A.a8,w,w,B.bN(!1,D.fIT,w,w,!0,w,w,w,this.gbIB(),w,w),w)],x.p),A.E,w,A.e,A.O,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),A.f,w,A.WQ,new B.o(I.ni,w,s,t,w,w,A.n),w,w,w,A.fk,Al.akR,w,w,w),w,w,w),u,!0),0,0,0)},
c90(){var w=this,v=null,u=B.aG(v,v,v,v,A1.nw,v,v,v,new C.etB(w),v,v,v,v,v,v),t=w.a9p(A.OK,"How it works",new C.etC(w),!0),s=w.ay?A.om:V.rE
return new B.D(D.bD1,B.B(B.a([u,D.bEB,t,w.a9p(s,"Sound",new C.etD(w),!0),w.a9p(A.e5,"Ideas",w.gcmw(),!0),w.a9p(K.wh,"Clear",w.gc8Z(w),!0),w.aOC(A.hk,"Show",new C.etE(w),!0,!0)],x.p),A.m,v,A.e,A.i,0,v,v),v)},
aOC(d,e,f,g,h){var w=null,v=h?A.bv:A.c.j(0.08),u=B.n(14),t=B.n(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Ad.w5,B.aH(!1,A.a2,!0,u,B.aO(!1,t,!0,B.he(new B.D(new B.Q(8,8,8,8),B.B(s,A.m,w,A.e,A.O,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
a9p(d,e,f,g){return this.aOC(d,e,f,g,!1)},
cw1(){var w=null,v=new C.etx(this),u=A.c.j(0.08)
return B.p(w,B.cg(B.B(B.a([v.$2("START",D.xm),v.$2("CHANGE",D.Ez),v.$2("REACT",D.r0)],x.p),A.E,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aM),A.f,w,w,new B.o(I.Bi,w,new B.bI(new B.ay(u,1,A.r,-1),A.a0,A.a0,A.a0),w,w,w,A.n),w,w,w,w,D.by8,w,w,w)},
cw2(d){var w,v,u,t,s=null,r=D.mS.h(0,d)
r.toString
w=B.n(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.J(v.j(0.5),A.r,1)
return new B.D(A.fB,B.aB(s,B.p(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cM,B.d(r.a,s,1,A.a1,s,s,s,D.aTI,s,s,s)],x.p),A.m,s,A.e,A.O,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a9(A.b_,A.b5,A.x,u,s,s),A.n),s,s,s,s,A.hv,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.etw(this,d),s,s,s,s,s,s,!1,A.a3),s)}}
C.bim.prototype={
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
b8.aO(new B.a3(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){l=w[m]
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
d.push(new B.l_(h+a1,i,f-a1,g,f,g))
a2=D.mS.h(0,k.b).d
a3=D.mS.h(0,j.b).d
e=new B.ao(A.Q,A.M,A.S,A.T,A.R)
e.b=A.a9
e.c=3
e.d=A.bA
d=B.a([a2.j(0.55),a3.j(0.55)],p)
g=B.rM(new B.t(h,i),new B.t(f,g))
e.sam(new B.a9(A.a5,A.a8,A.x,d,b4,b4).aA(0,new B.a3(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.G()
i=a0.gbv().a.snapshot()
b7.drawPath((a0.e=new B.ce(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.E((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=C.htS(new B.t(i.a+36,i.b+0),new B.t(h.a-36,h.b),a5)
$.S()
h=new B.ao(A.Q,A.M,A.S,A.T,A.R)
h.r=A.c.j(0.35).gp(0)
h.z=N.ox
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
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.a9(0,D.J6)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new B.aF($.S().r,A.ag,b4,b4,B.a([],o))
o=a8.b
a0.D(new B.aY(t,o))
i=a9.b
a0.D(new B.l_(t+a1,o,w-a1,i,w,i))
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
o.d=A.bA
g=b1.c
f=B.a([g.j(0),g],p)
e=B.rM(i,h)
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
i.sam(new B.c2(A5.xp,0.5,A.x,b4,0,B.a([A.c,h],p),b4,b4).aA(0,B.bY(j.a,8)))
q=i.G()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,B.L)(b5),++m){a6=b5[m]
v=A.k.E((b6-a6.d)/1000,0,1)
t=1-v
b2=C.bin(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a3(b8,new B.t(t.a-o/2,t.b-(40+60*v+p.gbb(p)/2)))}for(b5=new B.dq(n,n.r,n.e);b5.C();)b3.cij(b8,b5.d,b6)
b7.restore()},
cij(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mS.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.E(1-(f-w)/520,0,1)
u=B.bK(e.c,64,64)
t=B.br(u,A.is)
s=t.eO(A.cx)
$.S()
r=B.I()
r.r=A.w.j(0.55).gp(0)
r.z=A.mT
d.az(s,r)
if(v>0){s=t.cq(6)
r=B.I()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.zG
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
r.sam(new B.a9(A.b_,A.b5,A.x,B.a([s,p],x.O),j,j).aA(0,u))
d.az(t,r)
r=B.I()
r.b=A.a9
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.az(t,r)
r=h.b
p=e.c
o=C.bin(B.lu(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a3(d,p.aE(0,new B.t(s/2,r.gbb(r)/2)))
n=C.bin(h.a,11,A.c,j,j,A.H)
n.a3(d,e.c.a9(0,new B.t(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aAf[A.o.F(e.d,6)]:j
h=h.c
if(h===D.r0){s=e.c.a9(0,new B.t(0,62))
r=B.I()
r.r=D.aAQ[A.o.F(e.d,6)].gp(0)
d.ad(s,5,r)}else if(m!=null){l=C.bin(m,9.5,A.aB,j,j,A.U)
l.a3(d,e.c.a9(0,new B.t(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bin(m,9.5,A.aB,j,j,A.U)
l.a3(d,e.c.a9(0,new B.t(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xm)k.b2N(d,e.c.aE(0,D.J6),q)
k.b2N(d,e.c.a9(0,D.J6),q)},
b2N(d,e,f){var w
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
C.aNb.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.ei.prototype={}
C.tK.prototype={
aqZ(d,e,f,g){var w=this
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
C.aaJ.prototype={}
C.abP.prototype={}
C.a4S.prototype={
beH(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hl()?-1:1
v=t.af()*3.141592653589793*2
u=f*(0.3+t.af())
s.push(new C.aaJ(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.af()*0.45));++r}},
c5b(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bs(w,new C.bOm())},
akB(d,e,f,g){var w="p"+this.c++,v=new C.tK(w,e,f,g)
v.aqZ(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bs(this.b,new C.bOx(e))},
aa(d){A.d.aa(this.a)
A.d.aa(this.b)},
cJJ(d,e,f,g,h){return A.d.b3(this.b,new C.bOs(e,f,g,h))},
ali(d,e,f,g){var w
if(d===f||this.cJJ(0,d,e,f,g))return null
w=new C.abP(d,e,f,g)
this.b.push(w)
return w},
aBo(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zT(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
ao_(d){return this.M3(d)&&!d.x&&d.cx>this.zT(d)},
b78(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
M3(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c9j(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.zF.h(0,v)
if(w!=null)return w.a
return 100},
vn(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c5b(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.T(v).k("Z<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.L)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Z(v,new C.bOy(a2),t).cI(0,0,new C.bOz(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.U(x.N,u)
n=new C.bOB(o)
m=B.a([],x.t)
l=new C.bOA(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.L)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.L)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.U(u,u)
f=new C.bOD(g,l,n)
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
a2.b74(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zT(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b74(e,d,w,!0)
a2.bPh(a4)},
b74(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.U(x.N,b3),b5=new C.bOo(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bOn(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.L)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bOq(B.U(b3,b3),r,b5)
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
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b78(t)*(1+t.CW))
a4=b2.aBo(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c9j(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bSz(e,a0,b8)
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
bSz(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
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
bPh(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.L)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aBo(o)/a1.b78(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zT(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bHl(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.beH(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.u1(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.u1(o,"The "+$.qu().h(0,n).b+" got "+A.k.ac(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.u1(o,"More than 1.5 amps went through the "+$.qu().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.u1(o,"The regulator had to turn "+A.k.ac(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.ac(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.u1(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.zF.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qu().h(0,n).b
l=f.b
l=l===A.k.jj(l)?""+A.k.V(l):B.w(l)
g=f.c
g=g===A.k.jj(g)?""+A.k.V(g):B.w(g)
a1.u1(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ac(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.f4k.t(0,n)){m=o.fx>0?A.k.E((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.E(j/0.9,0,1)
if(!o.x&&j>2.4)a1.u1(o,"The bulb got "+A.k.ac(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.E((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.u1(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.E(j/14,0,1)
break
case"motor":n=A.k.E(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.E(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.u1(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.E(i/1,0,1)
if(!o.x&&i>1)a1.u1(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.u1(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.E(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.u1(o,"The capacitor was charged to "+A.k.ac(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bHl(d){return A.d.b3(this.a,new C.bOl(d))},
u1(d,e){var w
d.x=!0
d.ay=e
this.beH(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bjn(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.aa(0)},
aHD(d){var w=d.b
return D.aQD.t(0,w)||D.zF.aj(0,w)||w==="buck"||w==="regulator"},
bg7(d){var w,v=!0
if(!this.M3(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.zF.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Vc(d,e){var w=this.b
return new B.Z(w,new C.bOF(d,e),B.T(w).k("Z<1>")).gL(0)},
CH(d){var w,v
if(d.x)return!1
w=d.b
if(D.zF.aj(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bed(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qu().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aHD(d)||i.CH(d))return null
w=i.Vc(d,0)
v=i.Vc(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.T(u).k("Z<1>")
s=B.C(new B.Z(u,i.gcSi(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jj(r)?""+A.k.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ac(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.zF.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Mg("battery"),o=J.aW(t.a),t=new B.f5(o,t.b);t.C();){n=o.gS(o)
if(n.e===1.5&&n.as<=0.02&&i.Vc(n,0)+i.Vc(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Mg("switch"),o=J.aW(t.a),t=new B.f5(o,t.b);t.C();)if(!o.gS(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qu().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zT(k))return"The "+$.qu().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ac(k.cx,2)+" amps, but it can only give about "+A.k.ac(i.zT(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b3(u,new C.bOt(i,d))
h=q.b
h=h===A.k.jj(h)?""+A.k.V(h):B.w(h)
u=A.k.ac(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ac(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ac(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Mg(d){var w=this.a
return new B.Z(w,new C.bOw(d),B.T(w).k("Z<1>"))},
aHh(d){return this.Mg(d).b3(0,new C.bOv(0.35))},
q_(d,e){return A.d.b3(this.a,new C.bOu(e))}}
C.aj7.prototype={
a3(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.S()
w=B.I()
w.r=G.Bk.gp(0)
c0.aO(new B.a3(0,0,b8,b9),w)
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
b4.cGx(c0,new B.t(k*b6+j*(42+i),l*b7),new B.t(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=C.hGJ(q.a,q.b,c1)
q=b4.e
q.toString
$.S()
p=B.I()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bA
c0.bo(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,B.L)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.S()
g=new B.ao(A.Q,A.M,A.S,A.T,A.R)
g.r=D.afH.j(A.k.E(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.zG
s=g.G()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bl(w.save())
w.translate(j,i)
h=A.k.E(A.lt.aw(0,A.k.E(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.cji(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zT(a0)){g=j+0
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
a3.push(new B.bs())
a3=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a3.r=A.ax.j(0.65+0.35*e).gp(0)
s=a3.G()
e=a4.gbv().a.snapshot()
w.drawPath((a4.e=new B.ce(e)).a,s)
s.delete()
e=B.a([],k)
a2=new B.aF(a2,A.ag,b5,b5,e)
e.push(new B.aY(g,a5))
e.push(new B.aq(a6,a7))
e.push(new B.aq(a8,a7))
e.push(new B.bs())
e=new B.ao(A.Q,A.M,A.S,A.T,A.R)
e.b=A.a9
e.c=1.6
e.r=A.c.gp(0)
s=e.G()
e=a2.gbv().a.snapshot()
w.drawPath((a2.e=new B.ce(e)).a,s)
s.delete()
a9=new B.iM(new B.eu("!",b5,b5,A.cN,b5,b5,b5,b5,b5,b5,new B.F(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.bX,new B.jp(1),b5,b5,b5,b5,A.bV,b5)
a9.ej()
a9.a3(c0,new B.t(g+-3,f+-8))}if(!a0.x)g=(D.aQD.t(0,h)||D.zF.aj(0,h)||h==="buck"||h==="regulator")&&!r.CH(a0)&&r.Vc(a0,0)+r.Vc(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.S()
g=new B.ao(A.Q,A.M,A.S,A.T,A.R)
g.r=A.aE.gp(0)
s=g.G()
w.drawCircle(j,i,10,s)
s.delete()
a9=new B.iM(new B.eu("!",b5,b5,A.cN,b5,b5,b5,b5,b5,b5,new B.F(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.bX,new B.jp(1),b5,b5,b5,b5,A.bV,b5)
a9.ej()
a9.a3(c0,new B.t(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.mj.aj(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.S()
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.r=G.Bk.gp(0)
s=j.G()
w.drawCircle(f,g,7,s)
s.delete()
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.b=A.a9
j.c=2.4
j.r=(i&&r.bg7(a0)?A.c7:A.ad).gp(0)
s=j.G()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bg7(a0)){a9=new B.iM(new B.eu("+",b5,b5,A.cN,b5,b5,b5,b5,b5,b5,new B.F(!0,A.c7,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.bX,new B.jp(1),b5,b5,b5,b5,A.bV,b5)
a9.ej()
a9.a3(c0,new B.t(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,B.L)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.E(b1.r/0.8,0,1)
j=B.ar(M.MH,G.Z4,b2)
j.toString
i=b1.f
$.S()
h=new B.ao(A.Q,A.M,A.S,A.T,A.R)
h.r=j.gp(0)
h.c=2.4
h.d=A.bA
s=h.G()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new B.ao(A.Q,A.M,A.S,A.T,A.R)
i.r=j.j(0.35*b2).gp(0)
i.z=A.Iv
s=i.G()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b3(q,new C.bIZ())){b3=A.d.cI(q,0,new C.bJ_())
$.S()
b7=B.I()
b7.r=D.bdH.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aO(new B.a3(0,0,b8,b9),b7)
a9=B.fw(b5,b5,b5,b5,D.ffm,A.a4,A.bX,b5,A.dA,A.bV)
a9.o0(b6-24)
a9.a3(c0,new B.t(12,10))}},
qE(d,e,f,g,h){var w=null,v=B.fw(w,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.bX,w,A.dA,A.bV)
v.ej()
v.a3(d,f)},
cGx(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new B.aF($.S().r,A.ag,null,null,B.a([],x.v))
d.D(new B.aY(a1.a,a1.b))
w=C.hz6(a1,a2,a3)
d.D(new B.c4(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aT,D.afH,A.k.E(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aK,A.aT,A.k.E(r*1.2,0,1))
u.toString
o=u}else o=A.bm
u=B.I()
u.b=A.a9
u.c=a4?7:5
u.d=A.bA
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aH(d,u)
u=B.I()
u.b=A.a9
u.c=2.4
u.d=A.bA
u.r=(a4?A.c:o).gp(0)
a0.aH(d,u)
if(q){n=new B.T4(new B.tp(B.xr(d),!1,B.a([],x.R))).gI(0)
m=40+A.k.E(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.im()
i=t[u].b
i===$&&B.c()
if(!(j<i.a.length()/22))break
i=k.d
v.im()
h=t[u].b
h===$&&B.c()
h=A.k.F(j*22+i*m*l,h.a.length())
v.im()
i=t[u].b
i===$&&B.c()
i=i.a.length()
v.im()
g=t[u].b
g===$&&B.c()
f=A.k.F(h+i,g.a.length())
v.im()
i=t[u].Hc(f).a
h=new B.ao(A.Q,A.M,A.S,A.T,A.R)
h.r=A.c.gp(0)
e=h.G()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
Pp(d,e,f,g){var w,v,u,t
$.S()
w=B.I()
v=g?A.b_:A.a5
u=g?A.b5:A.a8
t=B.ar(e,A.w,0.3)
t.toString
w.sam(new B.a9(v,u,A.x,B.a([e,f,e,t],x.O),A.HX,null).aA(0,d))
return w},
ax_(d,e,f){return this.Pp(d,e,f,!0)},
c4M(d,e){return this.Pp(d,A.bm,A.iy,e)},
aib(d,e){var w,v,u
$.S()
w=B.I()
w.sam(D.aP0.aA(0,B.bY(e,4.2)))
d.ad(e,4.2,w)
w=e.a9(0,D.eie)
v=e.a9(0,D.ein)
u=B.I()
u.r=A.e7.gp(0)
u.c=1.2
d.bo(w,v,u)},
cji(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.S(),c0=B.I()
c0.sam(D.c1M.aA(0,D.f10))
c0.c=3.4
c0.d=A.bA
w=B.I()
w.r=A.w.j(0.45).gp(0)
w.z=N.ox
c1.dO(D.f0P,w)
if(c3){w=B.br(D.f0Z,A.k1)
v=B.I()
v.r=A.c.j(0.14).gp(0)
c1.az(w,v)}u=C.heQ(c2)
c1.bo(new B.t(-u,0),D.ejP,c0)
c1.bo(D.egT,new B.t(u,0),c0)
t=c2.x
w=c2.b
s=D.mj.aj(0,w)&&c2.ch!==1
if(s){J.bl(c1.a.save())
c1.bW(0,c2.ch)}switch(w){case"battery":b3.bE8(c1,c2)
break
case"solar":r=B.br(D.f0S,A.ic)
c1.az(r,b3.Pp(new B.a3(r.a,r.b,r.c,r.d),A.dv,A.bO,!1))
b9=B.I()
w=B.ar(D.bhz,A.d3,0.25+0.55*c2.f)
w.toString
v=B.ar(D.bqx,A.mB,0.3+0.4*c2.f)
v.toString
b9.sam(new B.a9(A.ay,A.aD,A.x,B.a([w,v],x.O),b4,b4).aA(0,D.a8i))
c1.aO(D.a8i,b9)
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
b9.D(new B.bs())
w=B.I()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aH(b9,w)
w=c2.f
b9=B.I()
b9.r=A.dB.j(0.9).gp(0)
c1.ad(D.egZ,4+4*w,b9)
break
case"crank":n=B.br(D.f0D,A.fE)
c1.az(n,b3.ax_(new B.a3(n.a,n.b,n.c,n.d),A.bs,A.bM))
b9=B.I()
b9.sam(D.aP1.aA(0,B.bY(A.I,12)))
c1.ad(A.I,12,b9)
m=new B.t(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.I()
b9.r=A.cq.gp(0)
b9.c=5
b9.d=A.bA
c1.bo(A.I,m,b9)
b9=B.I()
b9.sam(D.eth.aA(0,B.bY(m,7)))
c1.ad(m,7,b9)
b3.aib(c1,D.ejH)
b3.aib(c1,D.egI)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aF(b9,A.ag,b4,b4,B.a([],w))
v.D(new B.aY(-3,24))
v.D(new B.aq(3,24))
v.D(new B.aq(1.5,0))
v.D(new B.aq(-1.5,0))
v.D(new B.bs())
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
l.push(new B.bs())
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.r=A.c.gp(0)
o=l.G()
l=j.gbv().a.snapshot()
v.drawPath((j.e=new B.ce(l)).a,o)
o.delete()
v.restore()}b9=B.I()
b9.sam(D.esZ.aA(0,B.bY(A.I,4.5)))
c1.ad(A.I,4.5,b9)
break
case"switch":n=B.br(D.f0K,A.mW)
b9=B.I()
b9.sam(D.ard.aA(0,new B.a3(n.a,n.b,n.c,n.d)))
c1.az(n,b9)
b3.aib(c1,D.T9)
b3.aib(c1,D.aJO)
i=c2.w?D.aJO:H.aJF
b9=B.I()
b9.r=A.av.gp(0)
b9.c=6
b9.d=A.bA
c1.bo(D.T9,i,b9)
b9=B.I()
b9.r=(c2.w?A.be:A.bO).gp(0)
b9.c=4
b9.d=A.bA
c1.bo(D.T9,i,b9)
b9=B.kA(D.T9,i,0.85)
b9.toString
w=B.I()
w.r=A.ax.gp(0)
c1.ad(b9,5,w)
break
case"fuse":h=B.br(D.aPH,D.aP5)
b9=B.I()
b9.r=A.fi.j(0.25).gp(0)
c1.az(h,b9)
b9=B.I()
b9.b=A.a9
b9.c=1.4
b9.r=A.aB.gp(0)
c1.az(h,b9)
if(!t){b9=B.I()
b9.c=1.6
b9.r=B.ar(A.bO,A.cQ,c2.fx).gp(0)
c1.bo(D.aK7,D.aJM,b9)}else{b9=B.I()
b9.c=1.6
b9.r=A.bZ.gp(0)
c1.bo(D.aK7,D.eka,b9)
b9=B.I()
b9.c=1.6
b9.r=A.bZ.gp(0)
c1.bo(D.ehM,D.aJM,b9)
b9=B.I()
b9.r=A.dL.gp(0)
c1.ad(A.I,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=B.bK(new B.t(M.hB[g]*22,0),20,9)
w=B.br(f,A.hE)
o=b3.Pp(f,A.d1,A.oX,!0).G()
b9.drawRRect(B.e6(w),o)
o.delete()}break
case"pot":b9=B.I()
b9.sam(D.et9.aA(0,B.bY(A.I,21)))
c1.ad(A.I,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new B.ao(A.Q,A.M,A.S,A.T,A.R)
d.r=A.aB.gp(0)
d.c=1.2
o=d.G()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=B.I()
b9.sam(D.esX.aA(0,B.bY(A.I,13)))
c1.ad(A.I,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=B.I()
j.r=A.aT.gp(0)
j.c=3
j.d=A.bA
c1.bo(new B.t(b9*3,w*3),new B.t(v*12,l*12),j)
break
case"resistor":a1=B.br(D.aPH,D.aP5)
b9=B.I()
b9.sam(D.c57.aA(0,new B.a3(a1.a,a1.b,a1.c,a1.d)))
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
c1.aO(D.f1c,b9)
b9=c2.r
b3.qE(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.eja,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.I()
v.r=A.dB.j(0.55*w).gp(0)
v.z=A.zG
c1.ad(H.v1,34,v)}n=B.bK(D.efH,12,18)
c1.az(B.br(n,A.hE),b3.Pp(n,A.bm,A.e4,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.r=A.dm.gp(0)
l.c=1
o=l.G()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=B.I()
if(t)v=A.XG
else{v=B.ar(A.e4,A.hZ,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.Fy
else{l=B.ar(A.dv,A.dB,c2.fx)
l.toString}w.sam(new B.c2(A.tp,0.5,A.x,b4,0,B.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aA(0,B.bY(A.rY,17)))
c1.ad(A.rY,17,w)
w=B.I()
w.b=A.a9
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ad(A.rY,17,w)
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
c1.bo(D.ek4,D.ek6,v)
v=B.I()
v.r=A.cY.gp(0)
v.c=1.4
c1.bo(D.ehE,D.ehH,v)
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
else{w=B.ar(A.dv,D.biA,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aH(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.I()
v.r=A.ax.j(0.6*w).gp(0)
v.z=D.dzB
c1.ad(A.rY,30,v)}w=B.I()
w.r=A.e4.gp(0)
w.c=2.4
c1.bo(D.ekc,D.ekb,w)
w=B.I()
w.r=A.e4.gp(0)
w.c=2.4
c1.bo(D.ehO,D.ehN,w)
b9=b9.r
w=x.v
a6=new B.aF(b9,A.ag,b4,b4,B.a([],w))
a6.D(new B.aY(-12,8))
a6.D(new B.aq(-12,-6))
a6.D(new B.c4(0,-26,12,-6))
a6.D(new B.aq(12,8))
a6.D(new B.bs())
v=B.I()
if(t)l=A.jd
else{l=B.ar(A.ej,D.bkf,c2.fx)
l.toString}if(t)j=A.kF
else{j=B.ar(A.jM,A.ax,c2.fx)
j.toString}v.sam(new B.a9(A.ay,A.aD,A.x,B.a([l,j],x.O),b4,b4).aA(0,D.f04))
c1.aH(a6,v)
v=B.I()
v.b=A.a9
v.c=1.2
v.r=A.jN.gp(0)
c1.aH(a6,v)
v=B.I()
v.r=A.ek.gp(0)
c1.aO(D.f0a,v)
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
c1.az(B.br(a7,A.hF),b3.ax_(a7,A.al,A.aN))
b9=B.I()
b9.r=A.cr.gp(0)
c1.aO(D.f_E,b9)
b9=B.I()
b9.r=A.cq.gp(0)
c1.aO(D.f_G,b9)
b9=c1.a
J.bl(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bl(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=B.bK(H.aJA,15,7)
v=new B.ao(A.Q,A.M,A.S,A.T,A.R)
v.r=A.cQ.j(0.9).gp(0)
o=v.G()
b9.drawOval(B.bG(w),o)
o.delete()
b9.restore()}w=B.I()
w.r=A.av.gp(0)
c1.ad(A.I,3,w)
b9.restore()
b3.qE(c1,"M",D.ejG,A.av,14)
break
case"buzzer":a8=B.bK(A.I,42,42)
b9=B.I()
b9.sam(D.etd.aA(0,a8))
c1.dO(a8,b9)
b9=B.I()
b9.r=A.w.gp(0)
c1.ad(A.I,6,b9)
b9=B.I()
b9.b=A.a9
b9.c=1.4
b9.r=A.aY.gp(0)
c1.ad(A.I,6,b9)
b3.qE(c1,"+",D.ejz,A.ad,12)
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
case"heater":n=B.br(D.f0G,A.hF)
w=B.I()
w.sam(D.c2L.aA(0,new B.a3(n.a,n.b,n.c,n.d)))
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
w.r=D.bjg.j(0.5*b9).gp(0)
w.z=A.kP
c1.aH(a9,w)}$.S()
b9=B.I()
b9.b=A.a9
b9.c=3.2
b9.d=A.bA
b9.r=B.ar(A.m2,A9.MA,c2.fx).gp(0)
c1.aH(a9,b9)
break
case"capacitor":a7=new B.a3(-16,-22,16,18)
b9=B.br(a7,A.hF)
w=B.I()
w.sam(D.c1E.aA(0,a7))
c1.az(b9,w)
w=B.I()
w.r=A.bO.gp(0)
c1.aO(D.f0j,w)
for(p=0;p<4;++p){b0=new B.iM(new B.eu("\u2212",b4,b4,A.cN,b4,b4,b4,b4,b4,b4,new B.F(!0,A.av,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.bX,new B.jp(1),b4,b4,b4,b4,A.bV,b4)
b0.ej()
b0.a3(c1,new B.t(-14,-18+p*9))}b1=new B.a3(-16,-24,16,-17)
c1.az(B.br(b1,A.hE),b3.c4M(b1,!1))
b9=38*c2.fx
w=18-b9
$.S()
v=B.I()
v.r=A.be.j(0.5).gp(0)
c1.aO(new B.a3(-3,w,11,w+b9),v)
b3.qE(c1,"1F",H.v1,A.c,11)
break
case"radio":a1=B.br(D.a8i,A.fE)
b9=B.I()
b9.sam(D.c5n.aA(0,new B.a3(a1.a,a1.b,a1.c,a1.d)))
c1.az(a1,b9)
b9=B.I()
b9.b=A.a9
b9.c=1.4
b9.r=A.oX.j(0.6).gp(0)
c1.az(a1,b9)
b9=B.br(D.f0H,A.ic)
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
w.r=(c2.fx>0?A.fU:A.nY).gp(0)
c1.aO(D.f_L,w)
if(c2.fx>0){w=8+A.k.F(b3.b.d*7,18)
v=B.I()
v.r=A.bz.gp(0)
v.c=1.6
c1.bo(new B.t(w,-13),new B.t(w,-3),v)}w=B.I()
w.sam(D.aP1.aA(0,B.bY(D.a7h,6)))
c1.ad(D.a7h,6,w)
w=B.I()
w.r=A.oX.gp(0)
c1.ad(D.egS,4,w)
w=B.I()
w.r=A.e4.gp(0)
w.c=1.8
c1.bo(D.egN,D.aJT,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=B.bY(D.aJT,4+k*5+A.k.F(w.d*8,5))
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=1.4
l.r=A.o3.j(0.7).gp(0)
o=l.G()
b9.drawArc.apply(b9,[B.bG(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=B.br(D.f0R,A.hF)
v=B.I()
v.r=M.nf.gp(0)
c1.az(w,v)
b2=B.br(D.f0O,A.hE)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bl(b9.save())
b9.clipRRect(B.e6(b2),$.nD(),!0)
b9.translate(-33,-21)
L.haW(c1,D.f72,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.I()
b9.r=A.be.gp(0)
c1.ad(D.eh4,1.6,b9)}else{w=B.I()
w.r=D.vP.gp(0)
c1.az(b2,w)
b9=new B.aF(b9.r,A.ag,b4,b4,B.a([],x.v))
b9.D(new B.aY(-33,-21))
b9.D(new B.aq(-10,-21))
b9.D(new B.aq(-33,0))
b9.D(new B.bs())
w=B.I()
w.r=A.c.j(0.05).gp(0)
c1.aH(b9,w)}b9=B.I()
b9.r=A.bs.gp(0)
c1.aO(D.f09,b9)
break}C.ij3(c1,c2,b3.b.d,b3.gc9k())
if(t)b3.qE(c1,"\u2716",D.ekf,A.ax,14)
if(s)c1.a.restore()},
bE8(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new B.a3(-28,-13,28,13)
d.az(B.br(w,A.mW),m.ax_(w,A.dv,A.jb))
v=new B.a3(-22,-13,22,13)
$.S()
u=B.I()
u.sam(D.ar6.aA(0,v))
d.aO(v,u)
u=B.I()
u.r=A.dY.gp(0)
d.aO(D.f0t,u)
t=new B.a3(28,-5,34,5)
d.az(B.br(t,A.hn),m.Pp(t,A.dv,A.iy,!0))
m.qE(d,"+",D.egt,A.aT,11)
m.qE(d,"\u2212",D.ejI,A.ad,11)
m.qE(d,B.w(l===A.k.jj(l)?A.k.V(l):l)+"V",D.ejo,A.aT,13)
if(l===1.5){u=B.I()
u.r=A.bC.gp(0)
d.aO(D.f0s,u)
u=e.as
s=B.I()
s.r=B.ar(A.ax,A.be,u).gp(0)
d.aO(new B.a3(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qE(d,"FLAT",D.ej9,A.c7,9)}if(l>2){u=B.I()
u.r=A.aY.gp(0)
u.c=1
d.bo(D.efQ,D.aJt,u)
m.qE(d,l>3?"3 cells":"2 cells",D.ejn,A.aB,8)}}else if(l<=9){r=new B.a3(-22,-17,22,17)
u=B.br(r,A.mW)
$.S()
s=B.I()
s.sam(D.c4V.aA(0,r))
d.az(u,s)
s=B.I()
s.r=A.cT.gp(0)
d.aO(D.f0u,s)
for(u=d.a,q=0;q<2;++q){p=G.aAz[q]
s=p<0?5:3.6
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.sam(D.aP0.aA(0,B.bY(new B.t(p,-18),5)))
n=o.G()
u.drawCircle(p,-18,s,n)
n.delete()}m.qE(d,"9V",D.ejg,A.c,16)}else{r=new B.a3(-34,-16,34,16)
u=B.br(r,A.ic)
$.S()
s=B.I()
s.sam(D.ar6.aA(0,r))
d.az(u,s)
s=B.I()
s.r=A.bu.gp(0)
d.aO(D.f0Q,s)
for(u=d.a,q=0;q<2;++q){s=B.br(B.bK(new B.t(G.a52[q],-20),8,10),A.hn)
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.r=A.cq.gp(0)
n=o.G()
u.drawRRect(B.e6(s),n)
n.delete()}m.qE(d,"+",D.egC,A.ax,10)
m.qE(d,"12V",D.ejk,A.av,15)}},
av(d){return!0}}
C.mO.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.aa(k)
A.d.aa(d.b)
w=B.U(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.tK(o,r,q,p)
n.aqZ(o,r,q,p)
k.push(n)
J.iy(s[4],new C.cqK(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.L)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.ali(m,u[1],l,u[3])}}}
C.aj5.prototype={
R(){var w=x.N
return new C.aj6(A.I,A.aw,B.U(w,x.gl),B.aX(w),$,A.bB,0,B.a([],x.X),null,null)}}
C.aj6.prototype={
aeK(d){var w=this,v=w.as
if(v!=null)v.a4(0)
w.m(new C.bID(w,d))
w.as=B.cG(A.lD,new C.bIE(w))},
q(){var w=this.as
if(w!=null)w.a4(0)
w=this.ch
if(w!=null)w.a4(0)
this.btU()},
a0s(d,e){return this.chd(d,e)},
b1t(d){return this.a0s(d,!1)},
chd(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a0s=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.rs:A.yb
p=d.b
w=3
return B.b(L.hbe(s,r,p,d.ax<3.2,q,$.qu().h(0,p).b),$async$a0s)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a0s,v)},
ctW(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.at.c3(0,d.a,new C.bIF()),t=J.cD(u)
t.M(u,v)
t.bs(u,new C.bIG(v))
if(t.gL(u)>=4){t.aa(u)
t=w.ch
if(t!=null)t.a4(0)
w.a1N(d)
return}if(t.gL(u)===3){t=w.ch
if(t!=null)t.a4(0)
w.ch=B.cG(A.iU,new C.bIH(w,u,d))}},
a08(d){return this.cfA(d)},
cfA(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a08=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.ike(s,d.b,A.k.V(A.k.F(t.a.c.d*0.12,1)*100)),$async$a08)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a08,v)},
a1N(d){return this.crt(d)},
crt(d){var w=0,v=B.j(x.H),u=this,t
var $async$a1N=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(G.lA,null,new C.bIB(u,d),t,!0,!0,!1,A.k2,!1,!1,x.H),$async$a1N)
case 2:return B.h(null,v)}})
return B.i($async$a1N,v)},
Z(){this.a2()
this.bgh()
this.m7()},
bgh(){this.a.c.e=new C.bIW(this)},
mp(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vn(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=D.mj.h(0,s.b)
if((r==null?null:r.b)!==D.A5)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.M(0,s.a)
q.a0s(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
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
q.m(new C.bIX())},
b8w(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
b28(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.T(w).k("dw<1>"),w=new B.dw(w,v),w=new B.bR(w,w.gL(0),v.k("bR<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.mj.aj(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cGy(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
h=C.hz6(new B.t(k,n),new B.t(i,l),p)
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
this.m(new C.bI6())},
bqC(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.d7y[v]
if(!A.d.b3(p.a.c.a,new C.bIY(u,w))){o=new B.t(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?Q.J8:o
s=s?Q.J8:o
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
for(v=0;v<76;++v)w.push(D.Ry[v].a)
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
w.push(n.b1Z(s,!0))
n.a.toString
if(t)w.push(n.b1Z(r,!0))
w.push(B.E(B.cu(new C.bIV(n,q,m)),1))
return B.x(w,A.m,null,A.e,A.i,0,A.p)},
b1Z(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.L)(d),++v){u=d[v]
t=$.qu()
s=t.h(0,u).d.j(0.14)
r=new B.aP(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aB(p,B.p(p,B.x(B.a([new B.y(t.h(0,u).c,p,A.Am,p,p,p,p,p,p,p,p,p),new B.y(t.h(0,u).b,p,A.nF,p,p,p,p,A.a1,p,1,p,p)],n),A.m,p,A.b9,A.i,0,A.p),A.f,p,p,new B.o(s,p,new B.bI(q,q,q,q),new B.bj(r,r,r,r),p,p,A.n),p,p,p,I.u4,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bI7(this,u),p,p,p,p,p,p,!1,A.a3))}return B.p(p,B.cn(m,p,A.h4,p,p,A.aM,!1),A.f,p,p,new B.o(I.Bi,p,new B.bI(A.a0,A.a0,new B.ay(o,1,A.r,-1),A.a0),p,p,p,A.n),p,58,p,p,p,p,p,p)},
b_p(d){var w=null,v=B.n(18)
return B.p(w,d,A.f,w,w,new B.o(G.aej,w,B.J(A.bC,A.r,1),v,w,w,A.n),w,w,w,w,G.ak3,w,w,w)},
cjj(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qu().h(0,o),m=d.dy,l=d.fr,k=new C.bIq(q,n),j=B.d(n.c,p,p,p,p,p,p,A.Ka,p,p,p),i=n.b,h=n.d,g=x.p
i=B.B(B.a([j,A.ac,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aG(p,p,p,p,D.bTL,p,p,p,new C.bId(q,d),p,p,p,p,"Remove part",A.cc),B.aG(p,p,p,p,A.Hs,p,p,p,new C.bIe(q),p,p,p,p,p,A.cc)],g),A.m,p,A.e,A.i,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,I.Ee,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fot,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ac(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ac(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ac(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.au,w,A.am,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.c7:A.aT,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bed(d)
if(v!=null){l=(d.x?A.ax:A.aE).j(0.14)
j=B.n(10)
i=B.J((d.x?A.ax:A.aE).j(0.5),A.r,1)
m.push(new B.D(A.i3,B.p(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fvd,p,p,p),A.f,p,p,new B.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cm,p,p,p),p))}if(C.h9_(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new E.dX("CH "+t,d.at===u,new C.bIf(q,d,u),p,h,p))}l=B.bX(A.bG,l,A.bq,p,4,6)
l=B.a([A.am,l,A.au,B.d(q.a.c.CH(d)?"Showing: "+G.R8[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.ho,p,p,p)],g)
if(q.a.c.CH(d))l.push(new E.fC(A.H0,"Open big screen",new C.bIi(q,d),h,p))
A.d.v(m,l)}if(D.mj.aj(0,o)&&!C.h9_(o)){l=B.a([A.am,B.d(q.a.c.CH(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.ho,p,p,p)],g)
if(q.a.c.CH(d))l.push(new E.fC(A.OP,"Open the "+$.qu().h(0,o).b,new C.bIj(q,d),h,p))
A.d.v(m,l)}if(D.mj.aj(0,o))A.d.v(m,B.a([A.am,new E.fC(A.Cm,"Make it bigger (or tap it 4 times)",new C.bIk(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ac(d.db,1)
if(q.a.c.CH(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.am,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ac(i,1)+" V",p,p,p,p,p,p,D.fpk,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dpv[s]
j=r===A.k.jj(r)?A.k.V(r):r
l.push(new E.dX(B.w(j)+" V out",d.e===r,new C.bIl(q,d,r),p,h,p))}i.push(new B.D(A.l6,B.bX(A.bG,l,A.bq,p,0,6),p))}if(o==="regulator")i.push(D.fO7)
A.d.v(m,i)}if(q.a.c.M3(d)&&!d.x){l=A.k.ac(d.cx,2)
j=A.k.ac(q.a.c.zT(d),2)
i=q.a.c
w=i.ao_(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.ao_(d)?A.c7:A.es,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.n(4)
w=A.k.E(d.cx/q.a.c.zT(d),0,1)
i=q.a.c.ao_(d)?A.ax:A.be
m.push(new B.D(A.i3,B.x(B.a([l,A.cM,B.bx(j,B.kx(A.bC,p,p,5,p,w,new B.m8(i,x.c)),A.ap)],g),A.E,p,A.e,A.i,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.i3,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.fj0,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.deA[s]
j=r===1.5?"1.5 V (rechargeable)":B.w(r)+" V"
l.push(new E.dX(j,d.e===r,new C.bIm(q,d,r),p,h,p))}m.push(B.bX(A.bG,l,A.bq,p,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.d4M[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new E.dX(j,d.r===r,new C.bIn(q,d,r),p,h,p))}m.push(B.bX(A.bG,l,A.bq,p,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bIo(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bIp(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bIg(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bIh(d)))
if(o==="crank")m.push(D.fJs)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.ho,p,p,p))
return q.b_p(new B.cU(D.b3d,B.cg(B.x(m,A.E,p,A.e,A.O,0,A.p),A.t,p,A.y,p,p,p,p,A.ah),p))}}
C.bc4.prototype={}
C.Vu.prototype={
R(){return new C.aEf(C.heP(),new B.cw(null,x.q),B.aX(x.S))}}
C.aEf.prototype={
Z(){this.a2()
$.aV.bZ$.push(this)
this.aeJ()},
aeJ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fE4(),$async$aeJ)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.ijr(t.d,r)
if(s!=null){t.m(new C.dXK(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$aeJ,v)},
F9(){var w,v=this
if(!v.as)return
w=C.i9S(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bFj(w)},
je(d){if(d!==A.fK)this.F9()},
q(){$.aV.hR(this)
this.F9()
this.a1()},
c9m(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.T(v).k("Z<1>")
t=new B.Z(v,new C.dXT(q),u).gL(0)
s=new B.Z(v,new C.dXU(),u).gL(0)
r=new B.Z(v,w.gcVU(),u).gL(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.dXV(q,t,s,r))}if(A.o.F(q.w,45)===0)q.F9()
if(A.o.F(q.w,10)===0){w=q.f
$.aii()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.aii()[q.f].c.$1(q.d)){w.M(0,q.f)
C.Je("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.dXW())
q.F9()
w=q.c
w.toString
w=B.XN(w)
if(w!=null)w.U(B.b3(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.aii()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.m6,p,p,p,p,p,p,p,p,p,p))}},
ahr(){var w=0,v=B.j(x.H),u=this,t
var $async$ahr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ck(null,null,!0,null,new C.dXJ(u),t,null,!0,!0,x.H),$async$ahr)
case 2:return B.h(null,v)}})
return B.i($async$ahr,v)},
b_o(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.n(12),t=B.J(f.j(0.45),A.r,1)
u=B.a([B.ap(w,B.p(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ap(w,h,w,w,w,-1,-3,w))
return B.aB(w,B.he(new B.a5(40,38,new B.an(A.a_,w,A.ab,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a3)},
b_n(d,e,f,g){return this.b_o(d,e,f,g,null)},
arF(d,e,f,g){var w=null,v=f.j(0.1),u=B.n(10),t=B.J(f.j(0.4),A.r,1)
return B.E(B.aB(w,B.p(w,B.B(B.a([B.X(d,f,w,w,w,15),A.en,new B.ds(1,A.cp,B.d(e,w,1,A.a1,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b9,A.i,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a3),1)},
afM(){var w=0,v=B.j(x.H),u=this,t
var $async$afM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a4(t,!1).cc(B.e0(new C.dXF(u),!1,null,x.H)),$async$afM)
case 2:t=u.e.gbl()
if(t!=null)t.bgh()
if(u.c!=null)u.m(new C.dXG())
u.F9()
return B.h(null,v)}})
return B.i($async$afM,v)},
bHe(){var w,v,u,t,s=null,r=this.f
$.aii()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bf:A.ax
u=B.n(9)
t=B.J(I.Bi,A.r,1.5)
return B.p(s,B.au(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.x1,s,s,s),s,s,s),A.f,s,D.b3k,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eZ,s,s,s)},
aiy(){var w=0,v=B.j(x.H),u=this,t
var $async$aiy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(G.lA,null,new C.dXS(u),t,!0,!0,!0,A.k2,!1,!1,x.H),$async$aiy)
case 2:return B.h(null,v)}})
return B.i($async$aiy,v)},
c9n(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aB(r,B.p(r,D.bV0,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dXY(d),r,r,r,r,r,r,!1,A.a3),o=B.n(11)
o=B.p(r,D.b97,A.f,r,r,new B.o(A.bo,r,B.J(A.aK.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.x(B.a([B.B(B.a([p,A.ac,o,A.ac,B.E(B.x(B.a([D.fM7,B.d(w,r,1,A.a1,r,r,r,B.l(r,r,s.y>0||s.z>0?A.eO:A.hh,r,r,r,r,r,r,r,r,11.5,r,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.i,0,A.p),1),new C.aye(s.gcfh(),r),A.t7,s.b_n(A.yP,"Construction Lab: real 3D wiring, plumbing and a house",A.cQ,new C.dXZ(s,d)),s.b_o(A.lG,"Challenges",A.aT,s.gcwu(),s.bHe()),s.b_n(A.OK,"How to play",A.aK,new C.dY_(d,e))],v),A.m,r,A.e,A.i,0,r,r),A.am,B.B(B.a([s.arF(A.og,"Circuits",A.br,s.gcpk()),A.bn,s.arF(A.pd,"Repair",A.aT,new C.dY0(s)),A.bn,s.arF(K.wh,"Clear",A.c7,new C.dY1(s))],v),A.m,r,A.e,A.i,0,r,r)],v),A.m,r,A.e,A.O,0,A.p),A.f,r,r,new B.o(I.Bi,r,new B.bI(A.a0,A.a0,new B.ay(q,1,A.r,-1),A.a0),r,r,r,A.n),r,r,r,r,D.bDS,r,r,r)},
B(d){var w=this,v=null
$.asD="tech"
return B.c7(v,A.c1,B.bm(!0,B.x(B.a([w.c9n(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hdF(w.d,w.e,w.gc9l(),v),1)],x.p),A.m,v,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
C.aye.prototype={
R(){return new C.bag(null,null)}}
C.bag.prototype={
gaxU(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.Z,null,1,null,v)
w.cM(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
q(){this.gaxU().q()
this.bvg()},
B(d){var w=null,v=this.a.c
return B.aB(w,B.he(new B.a5(42,42,B.cb(this.gaxU(),new C.cHP(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a3)}}
C.baf.prototype={
a3(d,e){var w,v,u,t=null,s=e.eh(A.I),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.S()
w=B.I()
w.r=A.b6.j(0.25+0.15*o).gp(0)
w.z=N.ox
d.ad(s,r+2+o*2,w)
w=B.I()
w.sam(D.et8.aA(0,B.bY(s,r)))
d.ad(s,r,w)
v=B.I()
v.b=A.a9
v.c=2.2
v.sam(new B.h0(A.A,0,6.283185307179586,A.x,D.cWJ,t,new B.mC(p)).aA(0,B.bY(s,r)))
d.ad(s,r,v)
p=new C.cHO(d)
p.$3(s.a9(0,A.rY),8+o*1.5,1)
q*=4
p.$3(s.a9(0,D.ei_),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a9(0,D.ekl),2.6,0.5+0.5*Math.cos(q))
u=B.fw(t,t,t,t,D.ffs,A.a4,A.bX,t,A.dA,A.bV)
u.ej()
u.a3(d,s.a9(0,new B.t(-u.b.c/2,5)))},
av(d){return d.b!==this.b}}
C.ayy.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.ayz.prototype={
q(){var w,v,u
for(w=this.h2$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h1$
w===$&&B.c()
w.q()
this.btT()}}
C.aKL.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.byG.prototype={}
C.fR.prototype={}
C.JI.prototype={
a6(){return"ScreenStyle."+this.b}}
C.ml.prototype={}
C.Vd.prototype={
R(){return new C.bkS(null,null)}}
C.bkS.prototype={
ga9W(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.ob,null,1,null,v)
w.cp(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
q(){this.ga9W().q()
this.bx5()},
gSg(){var w=this.ga9W().y
w=w==null?null:A.o.ao(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.mj.h(0,this.a.c)
if(v==null)v=D.aPZ
return B.c7(w,X.YM,B.bm(!0,new B.an(A.a_,w,A.ab,A.t,B.a([B.au(v.b===D.A6?this.bJm(v):this.cm5(v),w,w,w),B.ap(w,B.aG(w,w,w,w,A.mQ,w,w,w,new C.dTU(d),w,w,w,B.nM(w,A.aS,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ap(6,B.au(B.d(v.a,w,w,w,w,w,w,D.fh7,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c9o(d){var w
A:{if(D.Jw===d){w=0.46153846153846156
break A}if(D.va===d){w=0.45
break A}if(D.wR===d){w=0.9259259259259258
break A}if(D.TP===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cm5(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.Jw
A:{if(D.Jw===p){w=44
break A}if(D.va===p){w=30
break A}if(D.wR===p){w=22
break A}if(D.TP===p){w=26
break A}w=14
break A}v=B.cb(this.ga9W(),new C.dTT(this,w,d,o),q)
if(p===D.a8r)v=new B.Bk(D.bEu,v,q)
p=this.c9o(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.n(w)
s=B.a([new B.ac(0,A.G,d.d.j(0.28),A.I,36)],x.V)
return new B.fG(p,B.p(q,B.p(q,v,A.f,q,q,new B.o(A.w,q,q,B.n(w-3),q,q,A.n),q,q,q,q,A_.Gv,q,q,q),A.f,q,q,new B.o(q,q,q,t,s,new B.a9(A.ay,A.aD,A.x,r,q,q),A.n),q,q,q,D.bxZ,new B.Q(u,u,u,u),q,q,q),q)},
b7F(d){var w,v,u,t=null,s=new B.V(Date.now(),0,!1),r=A.o.E(this.a.d+A.k.bf(this.gSg()*0.4),0,100),q=d.b===D.Jw,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.aW(A.o.u(B.dg(s)),2,"0")+":"+A.a.aW(A.o.u(B.fQ(s)),2,"0"),t,t,t,t,t,t,A.tg,t,t,t),A.b1],x.p)
for(w=0;w<4;++w){v=new B.aP(1,1)
n.push(B.p(t,t,A.f,t,t,new B.o(A.c,t,t,new B.bj(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bEc,t,t,t,3))}n.push(A.db)
n.push(D.fEM)
n.push(A.bn)
v=B.J(A.ad,A.r,1)
u=B.n(4)
n.push(B.p(t,new B.bM(A.a5,t,t,B.Bx(A.A,B.p(t,t,A.f,t,t,new B.o(A.be,t,t,B.n(2),t,t,A.n),t,t,t,A_.Gv,t,t,t,t),t,r/100),t),A.f,t,t,new B.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qO)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fvA,t,t,t))
return new B.D(new B.Q(p,12,o,2),B.B(n,A.m,t,A.e,A.i,0,t,t),t)},
avQ(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.n(e*0.26)
w=x.p
t=B.a([B.p(v,B.au(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dku,new B.a9(A.ay,A.aD,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.au,B.d(d.a,v,1,A.a1,v,v,v,D.flV,v,v,v)],w))
return B.aB(v,B.x(t,A.m,v,A.e,A.O,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dTP(this,d),v,v,v,v,v,v,!1,A.a3)},
c_O(d,e){return this.avQ(d,e,!0)},
c_v(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.TP||n===D.wR,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.ka,0.5)
l.toString
l=B.a([k,A.du,l],x.O)
k=p.b7F(d)
w=m?190:138
v=B.n(24)
u=B.J(A.aY,A.r,1)
w=B.aB(o,B.p(o,B.bx(B.n(23),B.b4(o,o,o,new C.aeZ(0,p.gSg(),o),A.fF),A.ap),A.f,o,o,new B.o(o,o,u,v,o,o,A.n),o,w,o,A.hO,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dTN(p),o,o,o,o,o,o,!1,A.a3)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=G.km[s]
t.push(new B.ci(A.A,o,o,p.c_O(r,m?58:54),o))}k=B.a([k,A.am,w,A.ae,B.E(B.kP(0.92,t,v,8,12,A2.w0,o,!1),1)],u)
if(n!==D.a8r){n=A.c.j(0.16)
w=B.n(28)
u=B.a([],u)
for(v=B.d_(G.km,0,B.dA(4,"count",x.S),x.gD),t=v.$ti,v=new B.bR(v,v.gL(0),t.k("bR<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.avQ(q==null?t.a(q):q,50,!1))}k.push(B.p(o,B.B(u,A.m,o,A.qB,A.i,0,o,o),A.f,o,o,new B.o(n,o,o,w,o,o,A.n),o,o,o,D.byS,H.alw,o,o,o))}return B.p(o,B.x(k,A.m,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(o,o,o,o,o,new B.a9(A.ay,A.aD,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bCM(d,e){var w=null
return B.p(w,B.x(B.a([this.b7F(d),B.E(B.b4(w,w,w,new C.aeZ(e,this.gSg(),w),A.fF),1),B.aB(w,B.p(w,B.au(B.d(G.km[e].a,w,w,w,w,w,w,A.K0,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dTI(this),w,w,w,w,w,w,!1,A.a3)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bJm(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.n(r?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.I,36)],x.V)
return new B.fG(1.5384615384615383,B.p(t,B.cb(this.ga9W(),new C.dTL(this,r,d),t),A.f,t,t,new B.o(t,t,t,v,u,new B.a9(A.ay,A.aD,A.x,w,t,t),A.n),t,t,t,D.bDM,new B.Q(8,8,8,s),t,t,t),t)}}
C.bwI.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.S()
w=B.I()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.ka,0.4)
t.toString
w.sam(new B.a9(A.ay,A.aD,A.x,B.a([u,A.du,t],x.O),null,null).aA(0,new B.a3(0,0,n,m)))
d.aO(new B.a3(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new B.ao(A.Q,A.M,A.S,A.T,A.R)
r.r=v.j(0.1).gp(0)
r.z=D.dzF
q=r.G()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
av(d){return!0}}
C.aeZ.prototype={
a3(d,e){return L.RX(d,e,this.b,this.c)},
av(d){return!0}}
C.aMw.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.bvv.prototype={}
C.a8I.prototype={
B(d){var w=null
return B.c7(B.eJ(w,w,w,!0,!0,D.agK,w,1,!0,w,0,!1,w,!1,w,w,B.aG(w,w,w,w,K.aq4,w,w,w,new C.ckv(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fV_,w,w,w,1,w,!0),D.agK,B.cn(B.a([D.elO,B.cu(new C.ckw())],x.p),w,D.bzU,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.WO.prototype={
R(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aFJ(w,new B.as(A.at,$.ax()),$,A.bB,0,B.a([],x.X),null,null)}}
C.aFJ.prototype={
Z(){this.a2()
this.m7()},
b5A(d){var w=this.d.length
return A.o.F(A.k.bf(A.k.F(A.k.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mp(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b5A(v.f)
if(w!==v.x){v.x=w
E.mj("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.ePW(v))
C.Je("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
caI(){if(this.d.length<2)return
this.m(new C.ePS(this))},
b_S(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.ePR(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcaH(),p=s.d,o=B.E(B.aB(r,B.b4(r,r,r,new C.bwU(p,s.f,r),A.fF),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a3),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a5(r,40,B.au(B.d(n,r,r,r,r,r,r,D.ftF,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.azM[A.o.F(v,8)].j(0.9)
t=new B.aP(20,20)
o.push(B.aB(r,B.p(r,new B.y(p[v],r,D.fsU,r,r,r,r,r,r,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bj(t,t,t,t),r,r,A.n),r,r,r,A.fB,A.h6,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.ePU(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a3))}p=A.c.j(0.07)
return E.lv(A.aT,A.f0,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fc(o,r,r),B.B(B.a([B.E(B.aM(r,A.Y,!1,r,!0,A.t,r,B.aN(),s.e,r,r,r,r,r,2,B.bt(r,new B.b5(4,B.n(14),A.a0),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.ku,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.aj,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.ePV(s),r,!1,r,r,!1,r,!0,r,A.aa,r,r,r,r,r,r,r,r,r,r,r,A.df,!0,A.a4,r,A.ao,r,r,r,r),1),A.ac,new E.fC(A.hQ,"Add",s.gcaF(s),A.c,r),A.bn,new E.fC(A.of,"Spin",q,A.be,r)],w),A.m,r,A.e,A.i,0,r,r)],w),A.m,r,A.e,A.O,0,A.p))}}
C.bwU.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new B.t(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.S()
w=B.I()
w.r=D.bfk.gp(0)
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
n.r=D.azM[A.o.F(q,8)].gp(0)
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
k=new B.iM(new B.eu(o,i,i,A.cN,i,i,i,i,i,i,D.fgg),A.a4,A.bX,new B.jp(1),i,i,i,i,A.bV,i)
k.ej()
o=k.b
n=o.c
o=o.a.c
k.a3(a1,new B.t(a0-n-16,-o.gbb(o)/2))
f.restore()}f=B.I()
f.r=D.agm.gp(0)
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
j.D(new B.bs())
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
R(){return new C.bl2($,A.bB,0,B.a([],x.X),null,null)}}
C.bl2.prototype={
Z(){this.a2()
this.m7()},
mp(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.Je("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.Ui(900,new C.e_J())}w.m(new C.e_K())},
b_U(d){return this.m(new C.e_E(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aW(A.o.u(A.k.ao(m,60)),2,"0")
v=A.a.aW(A.o.u(A.o.F(A.k.dd(m),60)),2,"0")
m=B.b4(n,n,n,new C.brE(l,A.c7,n),A.aRh)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fkR,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.au(new B.a5(280,280,new B.an(A.A,n,A.ab,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fjR,n,n,n),A.au,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vg,n,n,n)],s),A.m,n,A.e,A.O,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dhs[r]
u.push(new E.dX(""+q+" min",o.d===q,new C.e_G(o,q),n,A.c7,n))}m=o.f
p=m?A4.uu:A.hk
m=m?"Pause":"Start"
return E.lv(A.c7,A.f0,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fc(u,n,n),new E.fc(B.a([new E.fC(p,m,new C.e_H(o),A.be,n),new E.fC(A.oi,"Reset",new C.e_I(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.O,0,A.p))}}
C.brE.prototype={
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
v.d=A.bA
u=this.c
t=B.ar(u,A.c,0.4)
t.toString
v.sam(new B.h0(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aA(0,B.bY(s,r)))
d.e3(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
av(d){return d.b!==this.b}}
C.UP.prototype={
R(){return new C.bkE($,A.bB,0,B.a([],x.X),null,null)}}
C.bkE.prototype={
Z(){this.a2()
this.m7()},
mp(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Sd.h(0,p.d)
w.toString
v=A.d.f3(w,new C.dLy())
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
E.mj("flute",D.c67[t]+5,1400,0.35)}p.m(new C.dLz())},
gcaL(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.Kx("Press Start",0.5)
w=D.Sd.h(0,this.d)
w.toString
v=A.d.f3(w,new C.dLt())
u=A.k.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.Kx("Breathe in",0.5+0.5*A.dw.aw(0,p))
case 1:return new B.Kx("Hold",1)
case 2:return new B.Kx("Breathe out",1-0.5*A.dw.aw(0,p))
default:return new B.Kx("Hold",0.5)}}}return new B.Kx("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcaL(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hf.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.hf.j(0.35),A.I,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.pE,q,q,q))
n.push(B.ap(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.ku,q,q,q),q,q,q,q,q,q))
n=B.au(new B.a5(300,340,new B.an(A.A,q,A.ab,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aW(D.Sd.gev(D.Sd));w.C();){v=w.gS(w)
o.push(new E.dX(v,r.d===v,new C.dLw(r,v),q,A.hf,q))}w=r.e
v=w?A.z_:A.hk
w=w?"Stop":"Start"
o.push(new E.fC(v,w,new C.dLx(r),A.be,q))
return E.lv(A.hf,A.f0,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fc(o,q,q))}}
C.aJa.prototype={}
C.Vt.prototype={
R(){return new C.bkU(new B.cw(null,x.A),B.a([],x.au),A.av,A.c)}}
C.bkU.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aG(s,s,s,s,K.oq,s,s,s,new C.dXe(t,d),s,s,s,s,"Share",s)],r),p=B.bx(B.n(18),new B.er(B.aB(s,B.b4(s,s,s,new C.bmV(t.e,t.x,s),A.fF),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dXf(t),new C.dXg(t),s,s,s,s,s,s,s,s,s,new C.dXh(t),s,s,s,s,!1,A.a3),t.d),A.ap),o=B.a([],r)
for(w=0;w<9;++w){v=D.cYe[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.FC(v,u,new C.dXi(t,v),!1,s))}u=t.r
return E.lv(A.bD,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bT,p,s),"DRAW PAD",B.x(B.a([new E.fc(o,s,s),E.iK(A.bD,""+A.k.V(u),"Brush",30,2,new C.dXj(t),u),new E.fc(B.a([new E.dX("Eraser",t.w,new C.dXk(t),A.GT,A.bD,s),new E.fC(A.qx,"Undo",new C.dXl(t),A.c,s),new E.fC(A.e9,"Clear",new C.dXm(t),A.c,s),new E.fC(A.OE,"Paper",new C.dXn(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.O,0,A.p))}}
C.bmV.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.S()
w=B.I()
w.r=this.c.gp(0)
d.aO(new B.a3(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.L)(w),++s){r=w[s]
q=$.S()
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bA
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
u.drawPath((q==null?k.e=new B.ce(k.gbv().a.snapshot()):q).a,l)
l.delete()}}},
av(d){return!0}}
C.Wb.prototype={
R(){var w=x.S
return new C.aF2(B.aX(w),B.aX(w))}}
C.aF2.prototype={
Z(){this.a2()
this.at9()},
at9(){var w,v,u=this,t=x.N,s=B.bq(D.dmB,!0,t)
A.d.D1(s)
w=x.S
v=B.T(s).c
t=B.C(B.d_(s,0,B.dA(u.d,"count",w),v),t)
A.d.v(t,B.d_(s,0,B.dA(u.d,"count",w),v))
A.d.D1(t)
u.e=t
u.f.aa(0)
u.r.aa(0)
u.w=0
u.x=!1},
caG(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
E.mj("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.emZ(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gak(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bP(A.mE,new C.en_(s,v,u),t)
else{s.x=!0
B.bP(Ab.G6,new C.en0(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.UW,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ao(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.ym,B.B(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aT:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.iI,A.i,0,q,q),q),B.E(B.im(!0,q,q,A.y,new B.hK(v,8,8,1,q),new C.en4(r),r.e.length,A.bg,q,A.ah,!1),1)],o),A.m,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.cZK[t]
o.push(new E.dX(s.b,r.d===s.a,new C.en5(r,s),q,A.aK,q))}o.push(new E.fC(K.aoC,"New game",new C.en6(r),A.be,q))
return E.lv(A.aK,A.f0,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fc(o,q,q))}}
C.Wl.prototype={
R(){return new C.aFn(B.a([],x.t))}}
C.aFn.prototype={
caK(d){A.d.aa(this.d)
this.w=!0
this.b_T()},
b_T(){this.d.push(A.cK.ap(4))
this.e=0
this.a_w()},
a_w(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_w=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.exz(t))
s=x.H
w=3
return B.b(B.bP(A.lC,null,s),$async$a_w)
case 3:r=t.d,q=B.bq(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aTV(n)
w=7
return B.b(B.bP(new B.bb(1000*Math.max(280,600-r.length*18)),null,s),$async$a_w)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.exA(t))
case 1:return B.h(u,v)}})
return B.i($async$a_w,v)},
aTV(d){this.m(new C.exx(this,d))
E.mj("marimba",D.c66[d]+5,450,0.55)
B.bP(A.G4,new C.exy(this),x.H)},
caM(d){var w,v,u=this
if(!u.w||u.r)return
u.aTV(d)
w=u.d
v=u.e
if(w[v]!==d){F.dF(90,"",600,0,0.5,"saw")
u.m(new C.exB(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.exC(u))
B.bP(A.hu,new C.exD(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,Q.aTL,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fu3,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.ayF[v]
u=u.j(q.f===v?1:0.35)
t=new B.aP(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.ayF[v].j(0.8),A.I,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aB(p,B.da(p,p,p,p,A.b7,new B.o(u,p,new B.bI(r,r,r,r),new B.bj(t,t,t,t),s,p,A.n),A.je,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.exE(q,v),p,p,p,p,p,p,!1,A.a3))}o=B.au(new B.D(A.aa,B.x(B.a([o,A.am,n,A.d4,new B.fG(1,B.kP(1,l,2,12,12,p,A.dS,!1),p)],m),A.m,p,A.b9,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lv(A.bu,A.f0,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fc(B.a([new E.fC(A.hk,n,q.gcaJ(q),A.be,p)],m),p,p))}}
C.WF.prototype={
R(){return new C.bm8(new B.as(A.at,$.ax()))}}
C.bm8.prototype={
awH(d){return B.oT(A.k.ac(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eLq(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.d4(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eLz()
l=B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),l,m,m,m,m,m,2,B.bt(m,m,m,m,m,m,m,m,!0,new B.b5(4,B.n(16),A6.xt),m,m,m,m,m,m,m,m,m,m,m,new B.b5(4,B.n(16),D.b1L),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lR,"Bill amount",!0,!0,!1,m,m,m,m,D.frs,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,A.e1,m,m,m,1,m,m,!1,"\u2022",m,new C.eLv(n),m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,A.aSK,!0,A.a4,m,A.ao,m,m,m,m)
k=A.be.j(0.1)
s=B.n(20)
r=B.J(A.be.j(0.35),A.r,1)
q=x.p
s=B.cn(B.a([l,A.bx,B.p(m,B.x(B.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.awH(w)),t.$2("Total","$"+n.awH(v)),A3.N4,t.$3$big("Each of "+n.f+" pays","$"+n.awH(u),!0)],q),A.m,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bQ,m,m,m)],q),m,A.fk,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cKe[p]
r.push(new E.dX(""+o+"%",A.k.V(n.e)===o,new C.eLw(n,o),m,A.be,m))}l=n.f
return E.lv(A.be,A.f0,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fc(r,"TIP",m),E.iK(A.aK,""+l,"People",20,1,new C.eLx(n),l),new E.fc(B.a([new E.dX("Round up",n.r,new C.eLy(n),m,A.aT,m)],q),m,m)],q),A.m,m,A.e,A.O,0,A.p))}}
C.Wa.prototype={
R(){var w=B.a([3,5],x.t)
return new C.blD(w,A.cK,$,A.bB,0,B.a([],x.X),null,null)}}
C.blD.prototype={
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
E.WH("snare",0,0.5)}u.m(new C.elE())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hl()
u.w=t
u.x=t?0:3.141592653589793
E.mj("bell",24,400,0.5)}u.m(new C.elF())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.beu(v,o.r>0,n))}u=B.aB(n,B.au(B.bX(A.fI,m,A.bq,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.elx(o),n,n,n,n,n,n,!1,A.a3)}else if(m==="coin"){t=A.k.E(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.J(A.d1,A.r,6)
s=B.a([new B.ac(0,A.G,A.aT.j(0.4),A.I,30)],x.V)
u=B.aB(n,B.au(B.ef(A.A,B.p(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fqC,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.etc,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ely(o),n,n,n,n,n,n,!1,A.a3)}else{m=o.as
u=B.aB(n,B.au(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.ffK,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.ku,n,n,n)],x.p),A.m,n,A.e,A.O,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.elz(o),n,n,n,n,n,n,!1,A.a3)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.deO[r]
v.push(new E.dX(q.b,o.d===q.a,new C.elA(o,q),q.c,A.br,n))}v=B.a([new E.fc(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iK(A.br,""+s,"Dice",4,1,new C.elB(o),s))}if(o.d==="num"){s=o.z
s=E.iK(A.br,""+s,"From",100,1,new C.elC(o),s)
p=o.Q
A.d.v(v,B.a([s,E.iK(A.br,""+p,"To",1000,2,new C.elD(o),p)],m))}return E.lv(A.br,A.f0,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.m,n,A.e,A.O,0,A.p))}}
C.beu.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cK.af()-0.5)*0.6
else w=0
v=B.n(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cx,14)],x.V)
t=B.a([],x.p)
for(s=D.dys.h(0,A.o.E(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bM(s[q],p,p,B.p(p,p,A.f,p,p,O.adi,p,18,p,p,p,p,p,18),p))
return B.eM(A.A,w,B.p(p,new B.an(A.a_,p,A.ab,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bE,p,p,100),p)}}
C.aMk.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.byC.prototype={
q(){var w,v,u
for(w=this.h2$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h1$
w===$&&B.c()
w.q()
this.bwU()}}
C.aMD.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.byI.prototype={
q(){var w,v,u
for(w=this.h2$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h1$
w===$&&B.c()
w.q()
this.bxd()}}
C.aN5.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.byR.prototype={
q(){var w,v,u
for(w=this.h2$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h1$
w===$&&B.c()
w.q()
this.bxH()}}
C.aNw.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
C.bz_.prototype={
q(){var w,v,u
for(w=this.h2$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.h1$
w===$&&B.c()
w.q()
this.by7()}}
var z=a.updateTypes(["R(tK)","~()","R(a4S)","aA<~>()","R(CH)","G(tK,G)","K(K,tK)","R(CD)","R(ZL)","R(abP)","R(a3z)","R(nx)","WG()","UO()","a8I()","Wg()","Wv()","Wh()","R(mO)","UT()","afh(Y,G)","ae9(Y,G)","~(a8<@,@>)","G(CD,CD)","m(ei)","R(af5)","R(a10)","R(CR)","R(aci)","R(aec)","R(ac2)","G(G,r1)","G(G,CH)","m(r1)","~(r1,ai<m>,G)","r1?(CH)","Wa()","v(m,a0O)","R(aaJ)","~(AM)","WJ()","~(xh,m,t,u,K)","~(m,tK)","Vu()","VV(Y)","NH(Y)","Vd(Y,bu<K>,bu<K>)","WO()","VC()","UP()","Vt()","Wb()","Wl()","WF()","R(r1)"])
C.fEs.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fu0.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gI(d.e.split(". "))+"."},
$S:z+24}
C.fBb.prototype={
$1(d){var w
if(!this.a.M3(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fBc.prototype={
$1(d){return d.x},
$S:z+0}
C.fEp.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fEq.prototype={
$1(d){var w
if(!this.a.M3(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fEr.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.eeM.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eeN.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.z(this.b,this.c))},
$S:0}
C.eeO.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd2(v).Q
v.toString
w.mh(v,A.dU,A.iC)}},
$S:9}
C.eeZ.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.aa(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.ef_.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.eeV.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.eeT.prototype={
$2(d,e){var w=this.a
w.r.push(B.cG(B.dC(0,0,0,d,0,0),new C.eeU(w,this.b,e)))},
$S:1879}
C.eeU.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.eeW.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gWH().akB(0,u[1],u[2],u[3])
u[4].bQ(0,new C.eeR(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
F.dF(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.eeS(w.a,v,w.f,w.r))},
$S:0}
C.eeR.prototype={
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
C.eeS.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bf(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eeX.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gWH().ali(t,u[1],s,u[3])
F.dF(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.eeQ(w.a,v,w.e,w.f))},
$S:0}
C.eeQ.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bf(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eeY.prototype={
$0(){F.dF(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.eeP(w,this.b))},
$S:0}
C.eeP.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.ef2.prototype={
$0(){var w=this.a
return w.m(new C.ef1(w))},
$S:0}
C.ef1.prototype={
$0(){return this.a.at=!0},
$S:0}
C.ef3.prototype={
$0(){var w=this.a
return w.m(new C.ef0(w))},
$S:0}
C.ef0.prototype={
$0(){return this.a.at=!1},
$S:0}
C.ef4.prototype={
$0(){var w=this.a
w.f.saX(0,this.b)
w.Px()},
$S:0}
C.ef5.prototype={
$0(){return this.a.YK(this.b)},
$S:0}
C.ef6.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Px():w.aWT()},
$S:2}
C.ef7.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Px():w.aWT()},
$S:0}
C.eu6.prototype={
$2(d,e){return d+e},
$S:1880}
C.euq.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eup(w,d))},
$S:1881}
C.eup.prototype={
$0(){var w=B.aK(J.r(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eur.prototype={
$0(){},
$S:0}
C.eus.prototype={
$0(){},
$S:0}
C.eu8.prototype={
$0(){return this.a.m(new C.eu7(this.b,this.c))},
$S:0}
C.eu7.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.etY.prototype={
$1(d){return this.a.cx===d},
$S:35}
C.etZ.prototype={
$1(d){return this.a.cx=d},
$S:28}
C.eu_.prototype={
$1(d){return this.a.cy===d},
$S:35}
C.eu0.prototype={
$1(d){return this.a.cy=d},
$S:28}
C.eu1.prototype={
$1(d){return this.a.db===d},
$S:35}
C.eu2.prototype={
$1(d){return this.a.db=d},
$S:28}
C.eu3.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:35}
C.eu4.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.M(0,d)},
$S:28}
C.eu5.prototype={
$0(){var w=this.a
return w.m(w.gaxh())},
$S:0}
C.etW.prototype={
$1(d){return this.a.$1(!0)},
$S:72}
C.etX.prototype={
$1(d){return this.a.$1(!1)},
$S:118}
C.etV.prototype={
$1(d){return this.a.$1(!1)},
$S:146}
C.euj.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bio(o,p),n)
w=this.b
v=C.bBc("WORLD",w.a,w.c)
u=C.bBc("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.c7:A.be
t=C.bBc("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.CX[o.db].d?A.c7:A.c
q=x.p
s=B.a([v,u,t,C.bBc("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(C.bBc("HEIGHT",""+A.k.V(A.k.E(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ap(p,B.B(s,A.m,p,A.iI,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bFN(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rJ[w].a+".":"You landed on every world!"
v=B.a([new E.fC(A.oj,"Again",new C.eue(o),A.c,p),new E.fC(A.pd,"Rebuild",new C.euf(o),A.aT,p)],q)
if(o.d+1<7)v.push(new E.fC(A.jA,"Next world",new C.eug(o),A.be,p))
n.push(C.hsp("Perfect landing!",w,A.be,v))}if(o.as==="crashed")n.push(C.hsp("Crash!",o.at,A.c7,B.a([new E.fC(A.oj,"Try again",new C.euh(o),A.be,p),new E.fC(A.pd,"Rebuild",new C.eui(o),A.aT,p)],q)))
return new B.an(A.a_,p,A.b2,A.t,n,p)},
$S:64}
C.eue.prototype={
$0(){var w=this.a
return w.m(w.gaxh())},
$S:0}
C.euf.prototype={
$0(){var w=this.a
return w.m(new C.eub(w))},
$S:0}
C.eub.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eug.prototype={
$0(){var w=this.a
return w.m(new C.eua(w))},
$S:0}
C.eua.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.euh.prototype={
$0(){var w=this.a
return w.m(w.gaxh())},
$S:0}
C.eui.prototype={
$0(){var w=this.a
return w.m(new C.eu9(w))},
$S:0}
C.eu9.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.euk.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.eud(v,w))},
$S:0}
C.eud.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eul.prototype={
$1(d){return this.a.y=d},
$S:8}
C.eum.prototype={
$1(d){return this.a.Q=d},
$S:8}
C.eun.prototype={
$1(d){return this.a.z=d},
$S:8}
C.euo.prototype={
$0(){var w=this.a
return w.m(new C.euc(w))},
$S:0}
C.euc.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dLr.prototype={
$0(){var w=0,v=B.j(x.h),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=$.hnF
if(q==null)q=$.hnF=C.cLq()
w=3
return B.b(B.iU(B.a([q,$.r9().cSV("assets/data/three.min.js")],x.D),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kR(0,B.cP(J.r(s,1)))
q.m(new C.dLq(q,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:50}
C.dLq.prototype={
$0(){return this.a.d=x.m.a(J.r(this.b,0))},
$S:0}
C.dL3.prototype={
$0(){return this.a.bXt(B.aT(J.r(this.b,"group")))},
$S:0}
C.dL4.prototype={
$1(d){return A.a.aW(A.o.fu(A.o.E(A.k.V(d*255),0,255),16),2,"0")},
$S:297}
C.dLs.prototype={
$0(){return E.WH("kick",0,0.25)},
$S:0}
C.dL5.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dL6.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dL7.prototype={
$0(){return E.WH("kick",0,0.5)},
$S:0}
C.dL8.prototype={
$0(){return F.dF(1300+this.a.R8.ap(900),"",40,0,0.2,"square")},
$S:0}
C.dLa.prototype={
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
u=w}if(u.cx!=null&&!A.d.b3(u.d.e,new C.dL9(u)))u.cx=null
u.go=0},
$S:0}
C.dL9.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.az2(d)},
$S:z+10}
C.dL0.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
C.dL1.prototype={
$0(){var w=this.a
return w.m(w.gc73())},
$S:0}
C.dL2.prototype={
$0(){return this.a.ae8(null)},
$S:0}
C.dLh.prototype={
$0(){var w=this.a.as
return w==null?null:w.f5(0,B.H(["t","shot"],x.N,x.z))},
$S:0}
C.dLi.prototype={
$0(){return this.a.cD1(this.b.a)},
$S:0}
C.dLj.prototype={
$0(){return this.a.ae8(this.b)},
$S:0}
C.dLk.prototype={
$1(d){var w=this.a
return w.m(new C.dLg(w,d))},
$S:6}
C.dLg.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.dLl.prototype={
$0(){var w=this.a
return w.m(new C.dLf(w,this.b))},
$S:0}
C.dLf.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.dLm.prototype={
$0(){var w=this.a
return w.m(new C.dLe(w))},
$S:0}
C.dLe.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.dLn.prototype={
$0(){var w=this.a
return w.m(new C.dLd(w))},
$S:0}
C.dLd.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f5(0,B.H(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Li},
$S:0}
C.dLo.prototype={
$0(){var w=this.a
return w.m(new C.dLc(w))},
$S:0}
C.dLc.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aZz()
else w.p2=null},
$S:0}
C.dLp.prototype={
$0(){var w=this.a
return w.m(new C.dLb(w))},
$S:0}
C.dLb.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
C.c51.prototype={
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
C.c52.prototype={
$1(d){var w=new B.qZ([],[]).oz(d.data,!0)
if(x.f.b(w)&&J.r(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:350}
C.fnv.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)},
$S:202}
C.fnw.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)||w.h(d,1)},
$S:202}
C.fnx.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)!==w.h(d,1)},
$S:202}
C.fnE.prototype={
$1(d){return!J.r(d,0)},
$S:202}
C.fnF.prototype={
$1(d){var w=J.a6(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:202}
C.fnG.prototype={
$1(d){var w=J.a6(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:202}
C.dN6.prototype={
$1(d){return this.a.atZ(0)},
$S:9}
C.dML.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.i9n(),B.T(w).k("N<1,G>")).fJ(0)},
$S:0}
C.dMO.prototype={
$1(d){return""+d},
$S:73}
C.dN7.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dMJ.prototype={
$1(d){return this.a.atZ(this.b)},
$S:9}
C.dMK.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.axM(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mE(0,d,a1.m8(0.15,0.3))
u=a1.mE(0,d,a1.m8(0.15,0.62))
t=a1.mE(0,"and",a1.m8(0.48,0.46))
s=a1.mE(0,a0,a1.m8(0.82,0.46))
a1=t.a
w.push(new C.nx(v.a,a1,0))
w.push(new C.nx(u.a,a1,1))
w.push(new C.nx(a1,s.a,0))
break
case 1:v=a1.mE(0,d,a1.m8(0.12,0.25))
u=a1.mE(0,d,a1.m8(0.12,0.65))
r=a1.mE(0,"xor",a1.m8(0.46,0.25))
q=a1.mE(0,"and",a1.m8(0.46,0.65))
p=a1.axL(0,a0,a1.m8(0.82,0.25),0)
o=a1.axL(0,a0,a1.m8(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nx(a1,n,0))
m=u.a
w.push(new C.nx(m,n,1))
l=q.a
w.push(new C.nx(a1,l,0))
w.push(new C.nx(m,l,1))
w.push(new C.nx(n,p.a,0))
w.push(new C.nx(l,o.a,0))
break
case 2:k=a1.mE(0,"clock",a1.m8(0.15,0.4))
j=a1.mE(0,"not",a1.m8(0.45,0.65))
s=a1.mE(0,a0,a1.m8(0.82,0.3))
i=a1.mE(0,"buzzer",a1.m8(0.82,0.65))
a1=k.a
w.push(new C.nx(a1,s.a,0))
n=j.a
w.push(new C.nx(a1,n,0))
w.push(new C.nx(n,i.a,0))
break
default:h=a1.mE(0,d,a1.m8(0.12,0.25))
g=a1.mE(0,d,a1.m8(0.12,0.7))
f=a1.mE(0,"nor",a1.m8(0.5,0.25))
e=a1.mE(0,"nor",a1.m8(0.5,0.7))
s=a1.mE(0,a0,a1.m8(0.86,0.25))
a1=f.a
w.push(new C.nx(g.a,a1,0))
n=e.a
w.push(new C.nx(n,a1,1))
w.push(new C.nx(h.a,n,0))
w.push(new C.nx(a1,n,1))
w.push(new C.nx(a1,s.a,0))}},
$S:0}
C.dMP.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.axM(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.CD(p,"switch",new B.t(0.14*q.a,r*q.b),0))}o.mE(0,w.e,o.m8(0.86,0.5))},
$S:0}
C.dME.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dMF.prototype={
$2(d,e){return A.k.aK(d.c.b,e.c.b)},
$S:z+23}
C.dMG.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dMH.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dMI.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.adt(this.c)
if(v.ax)C.Je("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gI(w)
v.CW=!1
if(v.ax)F.dF(140,"",250,0,0.3,"square")}},
$S:0}
C.dMQ.prototype={
$0(){},
$S:0}
C.dMR.prototype={
$0(){return A.d.cz(this.a.e,this.b)},
$S:0}
C.dMS.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dMN.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bs(w.e,new C.dMM(v))
w.cy=null},
$S:0}
C.dMM.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dMD.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mE(0,this.b,new B.t(w.x.a*(0.3+v.af()*0.4),w.x.b*(0.2+v.af()*0.6))).a},
$S:0}
C.dN0.prototype={
$0(){var w=this.a
return w.m(new C.dN_(w))},
$S:0}
C.dN_.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dN1.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aB(A.c5,B.jh(B.b4(w,w,w,new C.bcm(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dMV(v),w,w,w,new C.dMW(v),new C.dMX(v),new C.dMY(v),w,w,w,w,w,w,w,w,w,w,new C.dMZ(v),w,w,w,!1,A.a3)},
$S:36}
C.dMZ.prototype={
$1(d){return this.a.c8R(d.b)},
$S:67}
C.dMX.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.chr(u)
if(t!=null){v.as=t
v.at=u
return}w=v.ayA(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aE(0,u)}},
$S:47}
C.dMY.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.t(A.k.E(w.a+u.Q.a,46,u.x.a-46),A.k.E(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
C.dMW.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c04(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bs(v,new C.dMT(w))
u=t.as
u.toString
v.push(new C.nx(u,w.a,w.b))
B.jN()}}t.z=t.as=null},
$S:38}
C.dMT.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dMV.prototype={
$1(d){return this.a.awA(d.b)},
$S:318}
C.dN2.prototype={
$0(){return this.a.bBC(this.b.a)},
$S:0}
C.dN3.prototype={
$0(){return this.a.atZ(this.b.a)},
$S:0}
C.dN4.prototype={
$0(){var w=this.a
return w.m(new C.dMU(w))},
$S:0}
C.dMU.prototype={
$0(){var w=this.a
w.axM(0)
w.ay=null},
$S:0}
C.dN5.prototype={
$0(){return this.a.cyK(this.b)},
$S:0}
C.cSk.prototype={
$0(){var w=this,v=null,u=B.fw(v,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.bX,v,A.dA,A.bV)
u.ej()
return u},
$S:260}
C.dSX.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSW.prototype={
$0(){return this.a.d=null},
$S:0}
C.dSZ.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c1T()},
$S:124}
C.dSY.prototype={
$0(){return B.a4(this.a,!1).ig()},
$S:0}
C.fnW.prototype={
$0(){return K.aJd},
$S:z+40}
C.fnX.prototype={
$0(){return D.dJP},
$S:z+43}
C.fnY.prototype={
$0(){return D.dGK},
$S:z+13}
C.fnZ.prototype={
$0(){return D.ea1},
$S:z+14}
C.fo_.prototype={
$0(){return D.dSV},
$S:z+15}
C.fo0.prototype={
$0(){return K.aJ4},
$S:z+16}
C.fo1.prototype={
$0(){return D.e7O},
$S:z+17}
C.fo2.prototype={
$0(){return K.aJc},
$S:z+12}
C.fo3.prototype={
$0(){return D.dIY},
$S:z+19}
C.f3x.prototype={
$2(d,e){return new C.afh($.bFG()[e],new C.f3w(e,this.a),null)},
$S:z+20}
C.f3w.prototype={
$0(){var w=this.a,v=I.aGJ.h(0,$.bFG()[w].a)
$.asD=v==null?"music":v
B.a4(this.b,!1).cc(B.e0(new C.f3u(w),!1,null,x.H))},
$S:0}
C.f3u.prototype={
$1(d){return $.bFG()[this.a].e.$0()},
$S:40}
C.f3y.prototype={
$2(d,e){return new C.ae9(D.azj[e],new C.f3v(this.a,e),null)},
$S:z+21}
C.f3v.prototype={
$0(){return this.a.d.$1(D.azj[this.b])},
$S:0}
C.f3d.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f3c.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f3b.prototype={
$1(d){var w=this
return new B.e1(new C.f3a(w.a,w.b,w.c,w.d),null)},
$S:21}
C.f3a.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.l,a1=B.aJ(a2,d,a0).w
a0=B.aJ(a2,d,a0).w
w=x.p
v=B.a([D.fBA,A.au,D.fIo,A.ae],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new B.aP(12,12)
m=new B.aP(12,12)
m=B.a([new B.bz(1,A.ba,B.aM(d,A.Y,!1,d,!0,A.t,d,B.aN(),r[p],d,d,d,d,d,2,new B.e7(d,d,d,d,d,d,d,d,d,d,"Title",d,N.Ed,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b5(4,new B.bj(n,n,n,n),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.aa,d,d,d,d,d,d,d,d,d,d,d,A.jm,!0,A.a4,d,A.ao,d,d,d,d),d),A.ac,new B.bz(2,A.ba,B.aM(d,A.Y,!1,d,!0,A.t,d,B.aN(),q[p],d,d,d,d,d,2,new B.e7(d,d,d,d,d,d,d,d,d,d,"Small line",d,N.Ed,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b5(4,new B.bj(m,m,m,m),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.aa,d,d,d,d,d,d,d,d,d,d,d,A.jm,!0,A.a4,d,A.ao,d,d,d,d),d)],w)
n=B.a([],w)
for(l=0;l<30;++l){k=D.dtJ[l]
j=new B.aP(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}h=A.d.gI(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}g=A.d.gI(i)}else g=A.bC
f=new B.ay(g,u[p].A(0,k)?1.8:1,A.r,-1)
n.push(B.aB(d,B.p(d,B.X(k,u[p].A(0,k)?A.c:A.aR,d,d,d,22),A.f,d,d,new B.o(h,d,new B.bI(f,f,f,f),new B.bj(j,j,j,j),d,d,A.n),d,d,d,A.fB,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.f38(a3,p,u,k),d,d,d,d,d,d,!1,A.a3))}A.d.v(v,B.a([new B.y("SLAB "+o,d,D.fqV,d,d,d,d,d,d,d,d,d),A.am,new B.cd(A.aM,A.e,A.i,A.m,d,A.p,d,0,m,d),A.P,new B.a5(d,44,B.cn(n,d,d,d,d,A.aM,!1),d),A.aA],w))}v.push(B.bH(A.x3,d,new C.f39(t,r,q,u,a2),d))
return new B.D(new B.Q(0,0,0,a1.f.d),B.bm(!0,new B.cU(new B.aZ(0,1/0,0,a0.a.b*0.86),B.cn(v,d,A0.yn,d,d,A.ah,!0),d),!0,!1,A.af,!0,!0),d)},
$S:108}
C.f38.prototype={
$0(){var w=this
return w.a.$1(new C.f37(w.b,w.c,w.d))},
$S:0}
C.f37.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f39.prototype={
$0(){var w=this,v=w.a
v.m(new C.f36(v,w.b,w.c,w.d))
B.a4(w.e,!1).O(null)},
$S:0}
C.f36.prototype={
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
C.f3l.prototype={
$0(){var w=this.a
return w.m(new C.f3k(w))},
$S:0}
C.f3k.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f3m.prototype={
$0(){return E.us(this.b,this.a.f,"scene")},
$S:0}
C.f3n.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gI(u),A.d.gak(u),0.4)
u.toString
w=this.a.ga_6().x
w===$&&B.c()
return B.c3(v,new B.o(v,v,v,v,v,new B.c2(D.b_w,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c1],x.O),v,v),A.n),A.bh)},
$S:317}
C.f3o.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.au(B.eO(A.A,B.cb(new B.h8(B.a([u.guj(),u.ga_6()],x.dS)),new C.f3j(u,this.b,v),w),A.f,A.e2),w,w,w)},
$S:237}
C.f3j.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guj().x
r===$&&B.c()
w=r<0.9?1:1-C.bsA(r,0.9,0.98)
v=s.ga_6().x
v===$&&B.c()
u=A.dw.aw(0,v)
switch(s.gaxN().a){case 0:s=s.bAO(t.b,r,u,t.c)
break
case 1:s=s.bRA(t.b,r,u,t.c)
break
case 2:s=s.cDu(t.b,r,u,t.c)
break
case 3:s=s.bDJ(t.b,r,u,t.c)
break
case 4:s=s.bH2(t.b,r,u,t.c)
break
case 5:s=s.c8S(t.b,r,u,t.c)
break
default:s=null}return B.db(s,w)},
$S:209}
C.f3p.prototype={
$2(d,e){var w=B.awc(this.b),v=this.c.d,u=B.ar(A.d.gI(v),A.d.gak(v),0.4)
u.toString
v=B.ar(A.d.gI(v),A.d.gak(v),0.4)
v.toString
v=w.cMf(u,A.bC,v,3.5)
u=this.a
w=u.guj().x
w===$&&B.c()
return B.aav(B.kQ(null,null,null,1,0,new C.f3i(u),A.k.E(w,0,1)),v)},
$S:1883}
C.f3i.prototype={
$1(d){var w=this.a
w.guj().sp(0,d)
if(w.as)w.m(new C.f3e(w))},
$S:6}
C.f3e.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f3q.prototype={
$0(){var w=this.a
w.guj().sp(0,0)
w.aey()},
$S:0}
C.f3r.prototype={
$1(d){var w=this.a
w.m(new C.f3h(w,d))
if(w.as)w.aey()},
$S:6}
C.f3h.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f3s.prototype={
$0(){var w=this.a
w.m(new C.f3g(w,this.b))
w.guj().sp(0,0)
if(w.as)w.aey()},
$S:0}
C.f3g.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f3t.prototype={
$0(){var w=this.a
return w.m(new C.f3f(w,this.b))},
$S:0}
C.f3f.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.f34.prototype={
$2(d,e){return A.k.aK(d.a,e.a)},
$S:1884}
C.f35.prototype={
$1(d){return d.b},
$S:1885}
C.dnk.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dnl.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dnh.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dni.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dnj.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dnm.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dnn.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dno.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dnp.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dnq.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dnr.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dns.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dnt.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dnu.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.etr.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.etg.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eti.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.etj.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.etm.prototype={
$1(d){var w=D.mS.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.etn.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.T(q),o=x.dg,n=B.C(new B.eg(new B.cQ(new B.Z(q,new C.eto(d),p.k("Z<1>")),new C.etp(r),p.k("cQ<1,r1?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aG(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.L)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.eto.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.etp.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.etk.prototype={
$1(d){return D.mS.h(0,d.b).c===D.xm},
$S:z+54}
C.etl.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.etR.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.E((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vn(0,u)
w.a6Z(A.o.ao(v,1000))},
$S:9}
C.etq.prototype={
$0(){},
$S:0}
C.etc.prototype={
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
C.ett.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.x(B.a([A.P,B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.X(D.mS.h(0,v).b,D.mS.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fTV,w,B.d(D.mS.h(0,v).a,w,w,w,w,w,w,A.fS,w,w,w),w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,W.aq8,w,w,w,w,new C.ets(d),!1,w,w,w,w,w,w,w,D.fLe,w,w,w)],x.p),A.m,w,A.e,A.O,0,A.p),!0,!1,A.af,!0,!0)},
$S:27}
C.ets.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.etv.prototype={
$1(d){var w,v,u=null,t=B.aJ(d,u,x.l).w,s=B.a([D.elC],x.p)
for(w=0;w<6;++w){v=D.azG[w]
s.push(B.dG(!1,u,u,u,!0,u,u,u,!0,u,u,D.bZg,u,u,u,u,new C.etu(d,v),!1,u,u,u,u,u,new B.y(v.b,u,A.lR,u,u,u,u,u,u,u,u,u),u,new B.y(v.a,u,A.fS,u,u,u,u,u,u,u,u,u),u,u,u))}return B.bm(!0,new B.cU(new B.aZ(0,1/0,0,t.a.b*0.7),B.cn(s,u,D.bDF,u,u,A.ah,!0),u),!0,!1,A.af,!0,!0)},
$S:27}
C.etu.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.etf.prototype={
$1(d){var w=null
return B.ep(B.a([B.bN(!1,A.di,w,w,!0,w,w,w,new C.etd(d),w,w),B.bN(!1,A.Ei,w,w,!0,w,w,w,new C.ete(d),w,w)],x.p),w,w,I.ni,D.fIz,w,w,w,w,D.fLw,w)},
$S:19}
C.etd.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.ete.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.etP.prototype={
$0(){var w=this.a
return w.m(new C.etO(w))},
$S:0}
C.etO.prototype={
$0(){return this.a.r=!1},
$S:0}
C.etQ.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.mv(new C.etF(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.ba0:t
v=B.a([B.b4(u,t,t,new C.bim(w,v,new C.etG(r),new C.etH(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ap(t,B.dZ(B.cb(w,new C.etI(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bII())
return B.aB(A.c5,B.jh(new B.an(A.a_,t,A.b2,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.etJ(r),t,r.gciK(),t,new C.etK(r),new C.etL(r),new C.etM(r),t,t,t,t,t,t,t,t,t,t,new C.etN(r),t,t,t,!1,A.a3)},
$S:36}
C.etF.prototype={
$0(){return this.a.acx(this.b)},
$S:0}
C.etN.prototype={
$1(d){return this.a.cBi(d.b)},
$S:67}
C.etL.prototype={
$1(d){return this.a.ciL(d.b)},
$S:47}
C.etM.prototype={
$1(d){return this.a.ciM(d.b)},
$S:18}
C.etK.prototype={
$1(d){return this.a.b2_()},
$S:38}
C.etJ.prototype={
$1(d){return this.a.ade(d.b)},
$S:318}
C.etG.prototype={
$0(){return this.a.z},
$S:677}
C.etH.prototype={
$0(){return this.a.Q},
$S:583}
C.etI.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bMZ()
if(p.length===0)return A.bJ
w=A.w.j(0.55)
v=B.n(14)
u=B.J(A.bC,A.r,1)
t=B.a([D.fFX,A.cM],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.L)(p),++r)t.push(new B.y(p[r],q,D.fpz,q,q,q,q,A.a1,q,2,q,q))
return B.p(q,B.x(t,A.E,q,A.e,A.O,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h6,q,q,q)},
$S:62}
C.eth.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.n(12),t=B.J(e.j(0.6),A.r,1),s=x.p
return new B.D(A.ec,B.B(B.a([B.p(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bc,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,Ac.UR,w,w,w),A.bF,B.d(g,w,w,w,w,w,w,G.V_,w,w,w)],s),A.E,w,A.e,A.i,0,A.p),1)],s),A.E,w,A.e,A.i,0,w,w),w)},
$S:1887}
C.etB.prototype={
$0(){var w=this.a.c
w.toString
return B.a4(w,!1).ig()},
$S:0}
C.etC.prototype={
$0(){var w=this.a
return w.m(new C.etA(w))},
$S:0}
C.etA.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.etD.prototype={
$0(){var w=this.a
return w.m(new C.etz(w))},
$S:0}
C.etz.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.etE.prototype={
$0(){var w=this.a
return w.m(new C.ety(w))},
$S:0}
C.ety.prototype={
$0(){return this.a.r=!0},
$S:0}
C.etx.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.mS.gdV(D.mS),w=w.gag(w);w.C();){v=w.gS(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.L)(p),++r)u.push(s.cw2(p[r]))
return new B.D(R.ajA,B.x(B.a([new B.D(Ah.alf,w,q),B.B(u,A.m,q,A.e,A.i,0,q,q)],v),A.E,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.etw.prototype={
$0(){return this.a.c8Y(this.b)},
$S:0}
C.dng.prototype={
$0(){var w=this,v=null,u=B.fw(v,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.bX,v,A.dA,A.bV)
u.ej()
return u},
$S:260}
C.bOm.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bOx.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bOs.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bOy.prototype={
$1(d){return this.a.M3(d)&&!d.x},
$S:z+0}
C.bOz.prototype={
$2(d,e){return Math.max(d,this.a.aBo(e))},
$S:z+6}
C.bOB.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bOC(w))},
$S:z+5}
C.bOC.prototype={
$0(){return this.a.a},
$S:94}
C.bOA.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:76}
C.bOD.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bOE(w))},
$S:z+5}
C.bOE.prototype={
$0(){return this.a.a},
$S:94}
C.bOo.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bOp(w))},
$S:z+5}
C.bOp.prototype={
$0(){return this.a.a},
$S:94}
C.bOn.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:76}
C.bOq.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bOr(w))},
$S:z+5}
C.bOr.prototype={
$0(){return this.a.a},
$S:94}
C.bOl.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bOF.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bOt.prototype={
$1(d){return d!==this.b&&this.a.aHD(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bOw.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bOv.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bOu.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bIZ.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bJ_.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.cqK.prototype={
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
C.fQf.prototype={
$1(d){var w
$.S()
w=B.I()
w.r=d.gp(0)
return w},
$S:1888}
C.fQh.prototype={
$2(d,e){var w
$.S()
w=B.I()
w.b=A.a9
w.c=e
w.r=d.gp(0)
w.d=A.bA
return w},
$S:1889}
C.fQi.prototype={
$5(d,e,f,g,h){return B.br(new B.a3(d,e,d+f,e+g),new B.aP(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1890}
C.fQg.prototype={
$3(d,e,f){var w
$.S()
w=B.I()
w.sam(new B.a9(A.b_,A.b5,A.x,B.a([e,f],x.O),null,null).aA(0,d))
return w},
$S:1891}
C.bID.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bIE.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bIC(w))},
$S:0}
C.bIC.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bIF.prototype={
$0(){return B.a([],x.k)},
$S:1892}
C.bIG.prototype={
$1(d){return this.a.bF(d).a>15e5},
$S:375}
C.bIH.prototype={
$0(){var w,v,u
J.bFP(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.CH(v))if(C.h9_(v.b))w.b1t(v)
else w.a08(v)
else{u=w.a.c.bed(v)
w.aeK(u==null?"The "+$.qu().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bIB.prototype={
$1(d){return new B.e1(new C.bIz(this.a,this.b),null)},
$S:21}
C.bIz.prototype={
$2(d,e){var w=null,v=this.b,u=new C.bIA(this.a,v,e),t=$.qu(),s=v.b,r=B.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.k5,w,w,w),q=B.aG(w,w,w,w,D.bPK,w,w,w,new C.bIv(u,v),w,w,w,w,w,w),p=A.k.E(v.ch,1,2.6),o=x.p
return B.bm(!0,new B.D(A.w1,B.x(B.a([r,A.au,D.fUY,A.W,B.B(B.a([q,B.E(B.kQ(t.h(0,s).d,w,w,2.6,1,u,p),1),B.aG(w,w,w,w,D.bWA,w,w,w,new C.bIw(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.i,0,w,w),B.B(B.a([B.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,B.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b1,B.bN(!1,D.fxR,w,w,!0,w,w,w,new C.bIx(u),w,w),B.bN(!1,A.x3,w,w,!0,w,w,w,new C.bIy(d),w,w)],o),A.m,w,A.e,A.i,0,w,w)],o),A.E,w,A.e,A.O,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:86}
C.bIA.prototype={
$1(d){var w=this.a
w.m(new C.bIt(this.b,d))
this.c.$1(new C.bIu())
w.a.toString},
$S:6}
C.bIt.prototype={
$0(){return this.a.ch=A.k.E(this.b,1,2.6)},
$S:0}
C.bIu.prototype={
$0(){},
$S:0}
C.bIv.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
C.bIw.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
C.bIx.prototype={
$0(){return this.a.$1(1)},
$S:0}
C.bIy.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.bIW.prototype={
$2(d,e){var w
if(d==="short"){F.dF(1800,"",120,0,0.55,"noise")
F.dF(200,"",160,2.2,0.4,"saw")
B.fL()
w=this.a
if(w.c!=null)w.aeK("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){F.dF(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.aeK("\u26a0 Overloaded! The "+$.qu().h(0,e.b).b+" can only give about "+A.k.ac(w.a.c.zT(e),2)+" amps but your gadgets are asking for "+A.k.ac(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.aeK("Burnt out! "+e.ay)
F.dF(140,"",320,0,0.6,"noise")
F.dF(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bIX.prototype={
$0(){},
$S:0}
C.bI6.prototype={
$0(){},
$S:0}
C.bIY.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bIV.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.aB(A.c5,B.b4(p,p,p,new C.aj7(w,v,u,t,s,r==null?A.ji:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bIP(o),new C.bIQ(o),new C.bIR(o),p,p,p,p,p,p,p,p,p,p,new C.bIS(o),p,p,p,!1,A.a3)],q)
if(o.a.c.a.length===0)n.push(D.b9g)
w=o.Q
if(w!=null){v=B.n(14)
u=B.J(A.cQ,A.r,1)
n.push(B.ap(p,B.aB(p,B.p(p,B.B(B.a([D.fvZ,B.E(B.d(w,p,p,p,p,p,p,D.fnN,p,p,p),1)],q),A.E,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(D.bfe,p,u,v,p,p,A.n),p,p,p,p,A.nq,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bIT(o),p,p,p,p,p,p,!1,A.a3),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ap(8,o.b_p(B.B(B.a([D.bFO,new E.fC(A.GV,"Cut wire",new C.bIU(o),A.c7,p)],q),A.m,p,A.e,A.i,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ap(8,o.cjj(w),p,p,10,10,p,p))}return B.jh(new B.an(A.a_,p,A.b2,A.t,n,p),A.t,p)},
$S:333}
C.bIQ.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b8w(s)
if(r!=null){t.m(new C.bIN(t,r,d))
return}w=t.b28(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.t(v*u.a,w.d*u.b).aE(0,s)
t.m(new C.bIO(t,w))}},
$S:47}
C.bIN.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bIO.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bIR.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bIL(w,d))
else if(w.w!=null)w.m(new C.bIM(w,d.b.a9(0,w.x)))},
$S:18}
C.bIL.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bIM.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.E(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.E(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bIP.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b8w(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.ali(u.a,u.b,v.a,v.b)!=null)F.dF(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.aeI()},
$S:38}
C.bIS.prototype={
$1(d){var w=this.a,v=d.b,u=w.b28(v)
if(u!=null){w.m(new C.bIJ(w,u))
if(D.mj.aj(0,u.b))w.ctW(u)
w.a.toString
return}w.m(new C.bIK(w,w.cGy(v)))},
$S:67}
C.bIJ.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
F.dF(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
F.dF(200,"",70,0,0.2,"saw")}},
$S:0}
C.bIK.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bIT.prototype={
$0(){var w=this.a
return w.m(new C.bII(w))},
$S:0}
C.bII.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bIU.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
F.dF(300,"",50,0,0.35,"noise")
w.aeI()},
$S:0}
C.bI7.prototype={
$0(){return this.a.bqC(this.b)},
$S:0}
C.bIq.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.B(B.a([B.d(d,w,w,w,w,w,w,D.fhZ,w,w,w),B.E(B.kQ(this.b.d,w,w,g,h,new C.bIs(this.a,f),A.k.E(e,h,g)),1)],x.p),A.m,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1893}
C.bIs.prototype={
$1(d){var w=this.a
w.m(new C.bIr(this.b,d))
w.a.toString},
$S:6}
C.bIr.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bId.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
F.dF(260,"",70,0,0.35,"noise")
w.aeI()},
$S:0}
C.bIe.prototype={
$0(){var w=this.a
return w.m(new C.bIc(w))},
$S:0}
C.bIc.prototype={
$0(){return this.a.d=null},
$S:0}
C.bIf.prototype={
$0(){this.a.m(new C.bIb(this.b,this.c))
F.dF(900,"",40,0,0.3,"noise")},
$S:0}
C.bIb.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bIi.prototype={
$0(){return this.a.b1t(this.b)},
$S:0}
C.bIj.prototype={
$0(){return this.a.a08(this.b)},
$S:0}
C.bIk.prototype={
$0(){return this.a.a1N(this.b)},
$S:0}
C.bIl.prototype={
$0(){var w=this.a
w.m(new C.bIa(this.b,this.c))
w.a.toString},
$S:0}
C.bIa.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bIm.prototype={
$0(){var w=this.a
w.m(new C.bI9(this.b,this.c))
w.a.toString},
$S:0}
C.bI9.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bIn.prototype={
$0(){var w=this.a
w.m(new C.bI8(this.b,this.c))
w.a.toString},
$S:0}
C.bI8.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bIo.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bIp.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bIg.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bIh.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fnH.prototype={
$1(d){return d.aHh("bulb")},
$S:z+2}
C.fnI.prototype={
$1(d){return d.q_(0,"switch")&&d.aHh("bulb")},
$S:z+2}
C.fnJ.prototype={
$1(d){return A.d.b3(d.a,new C.fnu())},
$S:z+2}
C.fnu.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fnK.prototype={
$1(d){return d.q_(0,"resistor")&&A.d.b3(d.a,new C.fnt())},
$S:z+2}
C.fnt.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fnL.prototype={
$1(d){return!d.q_(0,"battery")&&d.aHh("bulb")},
$S:z+2}
C.fny.prototype={
$1(d){return A.d.b3(d.a,new C.fns())},
$S:z+2}
C.fns.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fnz.prototype={
$1(d){return A.d.b3(d.a,new C.fnr())},
$S:z+2}
C.fnr.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fnA.prototype={
$1(d){return A.d.b3(d.a,new C.fnq())},
$S:z+2}
C.fnq.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fnB.prototype={
$1(d){var w=d.a
return A.d.b3(w,new C.fno())&&A.d.b3(w,new C.fnp())&&d.q_(0,"buck")},
$S:z+2}
C.fno.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fnp.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fnC.prototype={
$1(d){var w=d.a
return A.d.b3(w,new C.fnm())&&A.d.b3(w,new C.fnn())},
$S:z+2}
C.fnm.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fnn.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fnD.prototype={
$1(d){return A.d.b3(d.a,new C.fnl())},
$S:z+2}
C.fnl.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.dXK.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.aa(0)
w.v(0,v.b)},
$S:0}
C.dXT.prototype={
$1(d){var w=this.a.d
return w.aHD(d)&&w.CH(d)},
$S:z+0}
C.dXU.prototype={
$1(d){return d.x},
$S:z+0}
C.dXV.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.dXW.prototype={
$0(){},
$S:0}
C.dXJ.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.n(22),o=x.p,n=B.a([D.fNu,A.au,D.fxN,A.W],o)
for(w=this.a,v=0;v<19;++v){u=D.R7[v]
t=A.c.j(0.06)
s=new B.aP(14,14)
r=new B.ay(A.bC,1,A.r,-1)
n.push(B.aB(q,B.p(q,B.x(B.a([new B.y(u.a,q,A.it,q,q,q,q,q,q,q,q,q),A.bF,new B.y(u.b,q,D.foy,q,q,q,q,A.a1,q,3,q,q)],o),A.E,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(t,q,new B.bI(r,r,r,r),new B.bj(s,s,s,s),q,q,A.n),q,q,q,A.cu,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dXI(w,d,u),q,q,q,q,q,q,!1,A.a3))}return B.eT(q,G.lA,new B.D(A.bQ,new B.a5(340,q,B.cn(n,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d8,q,new B.b8(p,A.a0),q)},
$S:49}
C.dXI.prototype={
$0(){B.a4(this.b,!1).O(null)
var w=this.a
w.m(new C.dXH(w,this.c))
F.dF(800,"",120,-0.5,0.3,"square")},
$S:0}
C.dXH.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bjn()},
$S:0}
C.dXF.prototype={
$1(d){return new C.VV(this.a.d,null)},
$S:z+44}
C.dXG.prototype={
$0(){},
$S:0}
C.dXS.prototype={
$1(d){return new B.e1(new C.dXR(this.a),null)},
$S:21}
C.dXR.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.aii(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.be:A.aK
k=B.aJ(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.B(B.a([D.fKG,A.b1,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.i,0,m,m),A.P,B.bx(B.n(4),B.kx(A.bC,m,m,5,m,w.a/11,new B.m8(f,x.c)),A.ap),A.ae],v)
if(h)u.push(D.fAY)
else{h=f.j(0.1)
t=B.n(14)
s=B.J(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ae.K7,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,I.Ee,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.x(B.a([r,A.au,q,new B.bM(A.a8,m,m,B.bN(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.dXP(l,e),m,m),m)],v),A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bg,m,m,m))}u.push(A.W)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aP(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.ds,1,A.r,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aB:A.c
u.push(B.aB(m,B.p(m,new B.cd(A.aM,A.e,A.i,A.m,m,A.p,m,0,B.a([new B.y(s,m,A.a9W,m,m,m,m,m,m,m,m,m),A.as,new B.bz(1,A.ba,new B.y(r.a,m,new B.F(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bI(n,n,n,n),new B.bj(t,t,t,t),m,m,A.n),m,m,m,A.eH,A.nq,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.dXQ(l,o,e),m,m,m,m,m,m,!1,A.a3))}return B.bm(!0,new B.cU(new B.aZ(0,1/0,0,k.a.b*0.75),B.cn(u,m,A0.yn,m,m,A.ah,!0),m),!0,!1,A.af,!0,!0)},
$S:86}
C.dXP.prototype={
$0(){var w=this.a
w.m(new C.dXN(w))
this.b.$1(new C.dXO())
w.F9()},
$S:0}
C.dXN.prototype={
$0(){var w=this.a
$.aii()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.dXO.prototype={
$0(){},
$S:0}
C.dXQ.prototype={
$0(){var w=this.a
w.m(new C.dXL(w,this.b))
this.c.$1(new C.dXM())
w.F9()},
$S:0}
C.dXL.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dXM.prototype={
$0(){},
$S:0}
C.dXY.prototype={
$0(){return B.a4(this.a,!1).ig()},
$S:0}
C.dXZ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.m4("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a4(t.b,!1).cc(B.e0(new C.dXX(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dXX.prototype={
$1(d){B.le("construction")
return Aj.hMU()},
$S:z+45}
C.dY_.prototype={
$0(){return E.hyP(this.a,"ELECTRONICS LAB",this.b,A.aK)},
$S:0}
C.dY0.prototype={
$0(){var w=this.a
return w.m(w.d.gcY7())},
$S:0}
C.dY1.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grY(v))
w.F9()},
$S:0}
C.cHP.prototype={
$2(d,e){var w=null,v=this.a.gaxU().x
v===$&&B.c()
return B.b4(w,w,w,new C.baf(v,w),A.aw)},
$S:63}
C.cHO.prototype={
$3(d,e,f){var w=new B.aF($.S().r,A.ag,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.D(new B.aY(v,t))
w.D(new B.c4(v,u,v+e,u))
w.D(new B.c4(v,u,v,u+e))
w.D(new B.c4(v,u,v-e,u))
w.D(new B.c4(v,u,v,t))
w.D(new B.bs())
t=B.I()
t.r=A.c.j(f).gp(0)
this.a.aH(w,t)},
$S:443}
C.fV6.prototype={
$3(d,e,f){return new C.Vd(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.fV7.prototype={
$4(d,e,f,g){var w=x.Y
return new B.d1(e,!1,B.it(A.A,g,null,new B.bg(B.cK(A.ct,e,null),new B.bp(0.85,1,w),w.k("bg<bO.T>"))),null)},
$C:"$4",
$R:4,
$S:33}
C.dTU.prototype={
$0(){return B.a4(this.a,!1).ig()},
$S:0}
C.dTT.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c_v(o):q.bCM(o,p),m=x.p
p=B.a([B.oY(new B.mE(n,new B.bV(p,x.bz)),A.p7,B.qp(),A.b7,A.b7,new C.dTR())],m)
n=t.d
if(n){w=A.k.F(q.gSg(),12)<4
v=w?150:96
u=B.n(16)
m=B.a([A.as],m)
if(w)m.push(D.bFz)
else m.push(A.b1)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.be:A.av,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.as)
p.push(B.ap(s,B.au(B.da(s,B.B(m,A.m,s,A.e,A.i,0,s,s),s,s,A.et,new B.o(A.w,s,s,u,s,s,A.n),A.mE,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.va)p.push(B.ap(s,B.au(B.p(s,s,A.f,s,s,A.Ln,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wR)p.push(B.ap(s,B.p(s,s,A.f,s,s,A.Ln,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ap(6,B.aB(s,B.au(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.n(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dTS(q),s,s,s,s,s,s,!1,A.a3),s,s,0,0,s,s))
return B.bx(r,new B.an(A.a_,s,A.b2,A.t,p,s),A.ap)},
$S:298}
C.dTR.prototype={
$2(d,e){var w=x.Y
return new B.d1(e,!1,B.it(A.A,d,null,new B.bg(e,new B.bp(0.92,1,w),w.k("bg<bO.T>"))),null)},
$S:435}
C.dTS.prototype={
$0(){var w=this.a
return w.m(new C.dTQ(w))},
$S:0}
C.dTQ.prototype={
$0(){return this.a.e=null},
$S:0}
C.dTP.prototype={
$0(){var w=this.a
return w.m(new C.dTO(w,this.b))},
$S:0}
C.dTO.prototype={
$0(){return this.a.e=A.d.cu(G.km,this.b)},
$S:0}
C.dTN.prototype={
$0(){var w=this.a
return w.m(new C.dTM(w))},
$S:0}
C.dTM.prototype={
$0(){return this.a.e=0},
$S:0}
C.dTI.prototype={
$0(){var w=this.a
return w.m(new C.dTH(w))},
$S:0}
C.dTH.prototype={
$0(){return this.a.e=null},
$S:0}
C.dTL.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.n(o?20:8),m=A.w.j(0.55),l=x.p
m=B.p(p,B.B(B.a([D.fTi,A.as,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eL,p,p,p,D.fuO,p,p,p),1),B.d(A.a.aW(A.o.u(B.dg(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.aW(A.o.u(B.fQ(new B.V(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qS,p,p,p)],l),A.m,p,A.e,A.i,0,p,p),A.f,m,p,p,p,24,p,p,A.kJ,p,p,p)
w=this.a
v=B.a([B.b4(p,p,p,new C.bwI(w.gSg(),this.c.d,p),A.aw)],l)
o=w.e
if(o!=null){u=B.n(10)
t=B.J(A.aY,A.r,1)
s=B.n(10)
o=B.p(p,B.B(B.a([B.aB(p,B.p(p,p,A.f,p,p,A.adb,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dTK(w),p,p,p,p,p,p,!1,A.a3),A.en,B.p(p,p,A.f,p,p,A.adh,p,12,p,p,p,p,p,12),A.en,B.p(p,p,A.f,p,p,D.b4y,p,12,p,p,p,p,p,12),A.as,B.E(B.d(G.km[o].a,p,1,A.a1,p,p,p,A.a9Q,p,p,p),1)],l),A.m,p,A.e,A.i,0,p,p),A.f,A.cr,p,p,p,24,p,p,A.fC,p,p,p)
r=w.e
r.toString
v.push(B.bS(0,new B.D(D.bCb,B.p(p,B.bx(s,B.x(B.a([o,B.E(B.b4(p,p,p,new C.aeZ(r,w.gSg(),p),A.fF),1)],l),A.m,p,A.e,A.i,0,A.p),A.ap),A.f,p,p,new B.o(A.w,p,t,u,D.dpX,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.n(18)
t=B.J(A.aY,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jz,w.avQ(G.km[q],34,!1),p))
v.push(B.ap(8,B.au(B.p(p,B.B(s,A.m,p,A.e,A.O,0,p,p),A.f,p,p,new B.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lF,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bx(n,B.p(p,B.x(B.a([m,B.E(new B.an(A.a_,p,A.b2,A.t,v,p),1)],l),A.m,p,A.e,A.i,0,A.p),A.f,X.YM,p,p,p,p,p,p,p,p,p,p),A.ap)},
$S:298}
C.dTK.prototype={
$0(){var w=this.a
return w.m(new C.dTJ(w))},
$S:0}
C.dTJ.prototype={
$0(){return this.a.e=null},
$S:0}
C.fob.prototype={
$0(){return D.ec4},
$S:z+47}
C.foc.prototype={
$0(){return D.dKn},
$S:z+48}
C.fod.prototype={
$0(){return D.dGX},
$S:z+49}
C.foe.prototype={
$0(){return D.dJM},
$S:z+50}
C.fof.prototype={
$0(){return D.dOI},
$S:z+51}
C.fog.prototype={
$0(){return D.e7R},
$S:z+52}
C.foh.prototype={
$0(){return D.ea0},
$S:z+53}
C.foi.prototype={
$0(){return D.dO1},
$S:z+36}
C.ckv.prototype={
$0(){return B.a4(this.a,!1).ig()},
$S:0}
C.ckw.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=B.a([],k)
for(w=$.hCs(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aP(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.dq,16)],t)
n=A.c.j(0.85)
j.push(B.aB(m,B.p(m,new B.an(A.a_,m,A.ab,A.t,B.a([new B.cN(m,-6,-6,m,m,m,new B.y(r.c,m,Ai.K5,m,m,m,m,m,m,m,m,m),m),new B.bM(A.ls,m,m,B.x(B.a([new B.y(r.a,m,D.ftn,m,m,m,m,m,m,m,m,m),A.cM,new B.y(r.b,m,new B.F(!0,n,m,m,m,m,12,A.a7,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.E,m,A.e,A.O,0,A.p),m)],k),m),A.f,m,m,new B.o(m,m,m,new B.bj(q,q,q,q),p,new B.a9(A.ay,A.aD,A.x,o,m,m),A.n),m,v,m,m,A.bE,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.cku(d,r),m,m,m,m,m,m,!1,A.a3))}return B.bX(A.bG,j,A.bq,m,14,14)},
$S:173}
C.cku.prototype={
$0(){return B.a4(this.a,!1).cc(B.e0(new C.ckt(this.b),!1,null,x.H))},
$S:0}
C.ckt.prototype={
$1(d){return this.a.f.$0()},
$S:40}
C.ePW.prototype={
$0(){var w=this.a
return w.w=w.d[w.b5A(w.f)]},
$S:0}
C.ePS.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cK.af()*7},
$S:0}
C.ePR.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.cb)
w.w=""},
$S:0}
C.ePU.prototype={
$0(){var w=this.a
return w.m(new C.ePT(w,this.b))},
$S:0}
C.ePT.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cz(w,this.b)},
$S:0}
C.ePV.prototype={
$1(d){return this.a.b_S(0)},
$S:2}
C.e_J.prototype={
$0(){return C.Je("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e_K.prototype={
$0(){},
$S:0}
C.e_E.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e_G.prototype={
$0(){return this.a.b_U(this.b)},
$S:0}
C.e_H.prototype={
$0(){var w=this.a
return w.m(new C.e_F(w))},
$S:0}
C.e_F.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e_I.prototype={
$0(){var w=this.a
return w.b_U(w.d)},
$S:0}
C.dLy.prototype={
$2(d,e){return d+e},
$S:79}
C.dLz.prototype={
$0(){},
$S:0}
C.dLt.prototype={
$2(d,e){return d+e},
$S:79}
C.dLw.prototype={
$0(){var w=this.a
return w.m(new C.dLv(w,this.b))},
$S:0}
C.dLv.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dLx.prototype={
$0(){var w=this.a
return w.m(new C.dLu(w))},
$S:0}
C.dLu.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.dXe.prototype={
$0(){return E.us(this.b,this.a.d,"drawing")},
$S:0}
C.dXf.prototype={
$1(d){var w=this.a
return w.m(new C.dXd(w,d))},
$S:47}
C.dXd.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJa(u,v,t))},
$S:0}
C.dXg.prototype={
$1(d){var w=this.a
return w.m(new C.dXc(w,d))},
$S:18}
C.dXc.prototype={
$0(){return A.d.gak(this.a.e).c.push(this.b.b)},
$S:0}
C.dXh.prototype={
$1(d){var w=this.a
return w.m(new C.dXb(w,d))},
$S:22}
C.dXb.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJa(u,v,t))},
$S:0}
C.dXi.prototype={
$0(){var w=this.a
return w.m(new C.dXa(w,this.b))},
$S:0}
C.dXa.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.dXj.prototype={
$1(d){var w=this.a
return w.m(new C.dX9(w,d))},
$S:6}
C.dX9.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dXk.prototype={
$0(){var w=this.a
return w.m(new C.dX8(w))},
$S:0}
C.dX8.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dXl.prototype={
$0(){var w=this.a
return w.m(new C.dX7(w))},
$S:0}
C.dX7.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.dXm.prototype={
$0(){var w=this.a
return w.m(A.d.grY(w.e))},
$S:0}
C.dXn.prototype={
$0(){var w=this.a
return w.m(new C.dX6(w))},
$S:0}
C.dX6.prototype={
$0(){var w=this.a
w.x=D.ayy[A.o.F(A.d.cu(D.ayy,w.x)+1,4)]},
$S:0}
C.emZ.prototype={
$0(){return this.a.f.M(0,this.b)},
$S:0}
C.en_.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.Je("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.emY(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.Je("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.emY.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.aa(0)},
$S:0}
C.en0.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.emX(w))},
$S:12}
C.emX.prototype={
$0(){var w=this.a
w.f.aa(0)
w.x=!1},
$S:0}
C.en4.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return B.aB(w,B.lw(new C.en2(v,e),w,A.b7,A.p7,w,w,new B.bp(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.en3(v,e),w,w,w,w,w,w,!1,A.a3)},
$S:84}
C.en3.prototype={
$0(){return this.a.caG(this.b)},
$S:0}
C.en2.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fI(3.141592653589793*e)
m=B.n(16)
w=o?p:D.c4K
if(o)v=q.a.r.t(0,q.b)?A.be.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.J(u.r.t(0,t)?A.be:A.aY,A.r,1)
if(o){r=B.dr()
r.fI(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fx(A.A,B.d(u[t],p,p,p,p,p,p,H.aa_,p,p,p),p,r,!0)
u=r}else u=D.fMb
return B.fx(A.A,B.p(A.A,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:109}
C.en5.prototype={
$0(){var w=this.a
return w.m(new C.en1(w,this.b))},
$S:0}
C.en1.prototype={
$0(){var w=this.a
w.d=this.b.a
w.at9()},
$S:0}
C.en6.prototype={
$0(){var w=this.a
return w.m(w.gbLs())},
$S:0}
C.exz.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.exA.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.exx.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.exy.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.exw(w))},
$S:12}
C.exw.prototype={
$0(){return this.a.f=-1},
$S:0}
C.exB.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.exC.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.exD.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b_T()},
$S:12}
C.exE.prototype={
$0(){return this.a.caM(this.b)},
$S:0}
C.eLq.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:71}
C.eLz.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a1,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kI,B.B(B.a([v,A.ac,new B.ds(1,A.cp,B.eO(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e2),w)],x.p),A.m,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1894}
C.eLv.prototype={
$1(d){return this.a.m(new C.eLu())},
$S:2}
C.eLu.prototype={
$0(){},
$S:0}
C.eLw.prototype={
$0(){var w=this.a
return w.m(new C.eLt(w,this.b))},
$S:0}
C.eLt.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eLx.prototype={
$1(d){var w=this.a
return w.m(new C.eLs(w,d))},
$S:6}
C.eLs.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
C.eLy.prototype={
$0(){var w=this.a
return w.m(new C.eLr(w))},
$S:0}
C.eLr.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.elE.prototype={
$0(){},
$S:0}
C.elF.prototype={
$0(){},
$S:0}
C.elx.prototype={
$0(){var w=this.a
return w.m(new C.elw(w))},
$S:0}
C.elw.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.bZ(u,1,!1,x.S)
w.r=0.9
E.WH("hat",0,0.6)},
$S:0}
C.ely.prototype={
$0(){var w=this.a
return w.m(new C.elv(w))},
$S:0}
C.elv.prototype={
$0(){this.a.y=1.1
E.mj("bell",36,200,0.4)},
$S:0}
C.elz.prototype={
$0(){var w=this.a
return w.m(new C.elu(w))},
$S:0}
C.elu.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.ap(Math.max(v,u)-t+1)
w.as=u
E.mj("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.elA.prototype={
$0(){var w=this.a
return w.m(new C.elt(w,this.b))},
$S:0}
C.elt.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.elB.prototype={
$1(d){var w=this.a
return w.m(new C.els(w,d))},
$S:6}
C.els.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e_(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.elC.prototype={
$1(d){var w=this.a
return w.m(new C.elr(w,d))},
$S:6}
C.elr.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
C.elD.prototype={
$1(d){var w=this.a
return w.m(new C.elq(w,d))},
$S:6}
C.elq.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
C.ckr.prototype={
$0(){var w=this
return E.mj(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aNd.prototype
w.bxP=w.q
w=C.aMi.prototype
w.bwS=w.q
w=C.aMj.prototype
w.bwT=w.q
w=C.aMn.prototype
w.bwX=w.q
w=C.aO2.prototype
w.byL=w.q
w=C.aNb.prototype
w.bxN=w.q
w=C.ayy.prototype
w.btT=w.q
w=C.ayz.prototype
w.btU=w.q
w=C.aKL.prototype
w.bvg=w.q
w=C.aMw.prototype
w.bx5=w.q
w=C.aMk.prototype
w.bwU=w.q
w=C.aMD.prototype
w.bxd=w.q
w=C.aN5.prototype
w.bxH=w.q
w=C.aNw.prototype
w.by7=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(C.aFh.prototype,"gaxh","c6u",1)
var r
v(r=C.aDL.prototype,"gcf1","cf2",22)
w(r,"gc73","aZz",1)
w(C.aDN.prototype,"gc8O","c8P",1)
u(C.aE3.prototype,"gc8V","c8W",39)
w(r=C.aIj.prototype,"gcyt","cyu",1)
w(r,"gc8X","aey",1)
w(r,"gcjt","cju",1)
w(r,"gc8U","aex",3)
w(r=C.aFg.prototype,"gbIB","a9Y",3)
w(r,"gciK","b2_",1)
w(r,"gcmw","ah5",3)
t(r,"gc8Z","aez",3)
t(r=C.a4S.prototype,"grY","aa",1)
v(r,"gcVU","ao_",0)
v(r,"gcSi","M3",0)
w(r,"gcY7","bjn",1)
s(C.aj7.prototype,"gc9k",0,5,null,["$5"],["qE"],41,0,0)
w(r=C.aEf.prototype,"gc9l","c9m",1)
w(r,"gcpk","ahr",3)
w(r,"gcfh","afM",3)
w(r,"gcwu","aiy",3)
w(r=C.aFJ.prototype,"gcaH","caI",1)
t(r,"gcaF","b_S",1)
w(C.aF2.prototype,"gbLs","at9",1)
t(C.aFn.prototype,"gcaJ","caK",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.akn,C.Gr,C.v8,C.aTc,C.a3z,C.bbk,C.c50,C.yn,C.CD,C.nx,C.bc3,C.AM,C.bub,C.qg,C.r1,C.CH,C.ZL,C.af5,C.a10,C.CR,C.ac2,C.aci,C.aec,C.Gc,C.ei,C.tK,C.aaJ,C.abP,C.a4S,C.mO,C.bc4,C.fR,C.ml,C.bvv,C.aJa])
u(B.hx,[C.fEs,C.fu0,C.fBb,C.fBc,C.fEp,C.fEq,C.eeO,C.ef6,C.euq,C.etY,C.etZ,C.eu_,C.eu0,C.eu1,C.eu2,C.eu3,C.eu4,C.etW,C.etX,C.etV,C.eul,C.eum,C.eun,C.dL4,C.dL6,C.dL9,C.dLk,C.c51,C.c52,C.fnv,C.fnw,C.fnx,C.fnE,C.fnF,C.fnG,C.dN6,C.dMO,C.dN7,C.dMJ,C.dME,C.dMG,C.dMM,C.dMZ,C.dMX,C.dMY,C.dMW,C.dMT,C.dMV,C.f3u,C.f3b,C.f3i,C.f3r,C.f35,C.dnk,C.dnl,C.dnh,C.dni,C.dnj,C.dnm,C.dnn,C.dno,C.dnp,C.dnq,C.dnr,C.dns,C.dnt,C.dnu,C.etm,C.etn,C.eto,C.etp,C.etk,C.etl,C.etR,C.ett,C.etv,C.etf,C.etN,C.etL,C.etM,C.etK,C.etJ,C.eth,C.bOm,C.bOx,C.bOs,C.bOy,C.bOA,C.bOn,C.bOl,C.bOF,C.bOt,C.bOw,C.bOv,C.bOu,C.bIZ,C.fQf,C.fQi,C.fQg,C.bIG,C.bIB,C.bIA,C.bIY,C.bIQ,C.bIR,C.bIP,C.bIS,C.bIq,C.bIs,C.bIo,C.bIp,C.bIg,C.bIh,C.fnH,C.fnI,C.fnJ,C.fnu,C.fnK,C.fnt,C.fnL,C.fny,C.fns,C.fnz,C.fnr,C.fnA,C.fnq,C.fnB,C.fno,C.fnp,C.fnC,C.fnm,C.fnn,C.fnD,C.fnl,C.dXT,C.dXU,C.dXJ,C.dXF,C.dXS,C.dXX,C.cHO,C.fV6,C.fV7,C.ckt,C.ePV,C.dXf,C.dXg,C.dXh,C.dXj,C.en2,C.eLq,C.eLz,C.eLv,C.eLx,C.elB,C.elC,C.elD])
u(B.js,[C.fEr,C.eeT,C.eeR,C.eu6,C.euj,C.dMF,C.dN1,C.dSZ,C.f3x,C.f3y,C.f3a,C.f3n,C.f3o,C.f3j,C.f3p,C.f34,C.eti,C.etj,C.etQ,C.etI,C.etx,C.bOz,C.bOB,C.bOD,C.bOo,C.bOq,C.bJ_,C.cqK,C.fQh,C.bIz,C.bIW,C.bIV,C.dXR,C.cHP,C.dTT,C.dTR,C.dTL,C.ckw,C.dLy,C.dLt,C.en4])
u(B.af,[C.VV,C.Wh,C.UO,C.UT,C.NI,C.aIi,C.Wg,C.aj5,C.Vu,C.aye,C.Vd,C.WO,C.VC,C.UP,C.Vt,C.Wb,C.Wl,C.WF,C.Wa])
u(B.ah,[C.blr,C.aNd,C.aMi,C.aMn,C.aE3,C.aO2,C.aNb,C.ayy,C.byG,C.aKL,C.aMw,C.aNw,C.aMD,C.aMk,C.bkU,C.aF2,C.aFn,C.bm8,C.aN5])
u(B.iF,[C.eeM,C.eeN,C.eeZ,C.ef_,C.eeV,C.eeU,C.eeW,C.eeS,C.eeX,C.eeQ,C.eeY,C.eeP,C.ef2,C.ef1,C.ef3,C.ef0,C.ef4,C.ef5,C.ef7,C.eup,C.eur,C.eus,C.eu8,C.eu7,C.eu5,C.eue,C.euf,C.eub,C.eug,C.eua,C.euh,C.eui,C.eu9,C.euk,C.eud,C.euo,C.euc,C.dLr,C.dLq,C.dL3,C.dLs,C.dL5,C.dL7,C.dL8,C.dLa,C.dL0,C.dL1,C.dL2,C.dLh,C.dLi,C.dLj,C.dLg,C.dLl,C.dLf,C.dLm,C.dLe,C.dLn,C.dLd,C.dLo,C.dLc,C.dLp,C.dLb,C.dML,C.dMK,C.dMP,C.dMH,C.dMI,C.dMQ,C.dMR,C.dMS,C.dMN,C.dMD,C.dN0,C.dN_,C.dN2,C.dN3,C.dN4,C.dMU,C.dN5,C.cSk,C.dSX,C.dSW,C.dSY,C.fnW,C.fnX,C.fnY,C.fnZ,C.fo_,C.fo0,C.fo1,C.fo2,C.fo3,C.f3w,C.f3v,C.f3d,C.f3c,C.f38,C.f37,C.f39,C.f36,C.f3l,C.f3k,C.f3m,C.f3e,C.f3q,C.f3h,C.f3s,C.f3g,C.f3t,C.f3f,C.etr,C.etg,C.etq,C.etc,C.ets,C.etu,C.etd,C.ete,C.etP,C.etO,C.etF,C.etG,C.etH,C.etB,C.etC,C.etA,C.etD,C.etz,C.etE,C.ety,C.etw,C.dng,C.bOC,C.bOE,C.bOp,C.bOr,C.bID,C.bIE,C.bIC,C.bIF,C.bIH,C.bIt,C.bIu,C.bIv,C.bIw,C.bIx,C.bIy,C.bIX,C.bI6,C.bIN,C.bIO,C.bIL,C.bIM,C.bIJ,C.bIK,C.bIT,C.bII,C.bIU,C.bI7,C.bIr,C.bId,C.bIe,C.bIc,C.bIf,C.bIb,C.bIi,C.bIj,C.bIk,C.bIl,C.bIa,C.bIm,C.bI9,C.bIn,C.bI8,C.dXK,C.dXV,C.dXW,C.dXI,C.dXH,C.dXG,C.dXP,C.dXN,C.dXO,C.dXQ,C.dXL,C.dXM,C.dXY,C.dXZ,C.dY_,C.dY0,C.dY1,C.dTU,C.dTS,C.dTQ,C.dTP,C.dTO,C.dTN,C.dTM,C.dTI,C.dTH,C.dTK,C.dTJ,C.fob,C.foc,C.fod,C.foe,C.fof,C.fog,C.foh,C.foi,C.ckv,C.cku,C.ePW,C.ePS,C.ePR,C.ePU,C.ePT,C.e_J,C.e_K,C.e_E,C.e_G,C.e_H,C.e_F,C.e_I,C.dLz,C.dLw,C.dLv,C.dLx,C.dLu,C.dXe,C.dXd,C.dXc,C.dXb,C.dXi,C.dXa,C.dX9,C.dXk,C.dX8,C.dXl,C.dX7,C.dXm,C.dXn,C.dX6,C.emZ,C.en_,C.emY,C.en0,C.emX,C.en3,C.en5,C.en1,C.en6,C.exz,C.exA,C.exx,C.exy,C.exw,C.exB,C.exC,C.exD,C.exE,C.eLu,C.eLw,C.eLt,C.eLs,C.eLy,C.eLr,C.elE,C.elF,C.elx,C.elw,C.ely,C.elv,C.elz,C.elu,C.elA,C.elt,C.els,C.elr,C.elq,C.ckr])
t(C.byT,C.aNd)
t(C.aFh,C.byT)
u(B.md,[C.bio,C.bcm,C.btA,C.bb2,C.bsd,C.brD,C.bbI,C.brF,C.bvF,C.bim,C.aj7,C.baf,C.bwI,C.aeZ,C.bwU,C.brE,C.bmV])
t(C.aMj,C.aMi)
t(C.aDL,C.aMj)
t(C.byD,C.aMn)
t(C.aDN,C.byD)
u(B.lz,[C.KK,C.a0O,C.JI])
u(B.aw,[C.bsB,C.afh,C.ae9,C.Qw,C.bt5,C.a8I,C.beu])
t(C.aIj,C.aO2)
t(C.bil,B.p_)
t(C.aFg,C.aNb)
t(C.ayz,C.ayy)
t(C.aj6,C.ayz)
t(C.aEf,C.byG)
t(C.bag,C.aKL)
t(C.bkS,C.aMw)
t(C.bz_,C.aNw)
t(C.aFJ,C.bz_)
t(C.byI,C.aMD)
t(C.bl2,C.byI)
t(C.byC,C.aMk)
t(C.bkE,C.byC)
t(C.byR,C.aN5)
t(C.blD,C.byR)
w(C.aNd,B.cf)
w(C.byT,E.nw)
w(C.aMi,B.cf)
w(C.aMj,E.nw)
w(C.aMn,B.cf)
w(C.byD,E.nw)
w(C.aO2,B.eQ)
w(C.aNb,B.cf)
w(C.ayy,B.cf)
w(C.ayz,E.nw)
w(C.aKL,B.cf)
v(C.byG,B.eF)
w(C.aMw,B.cf)
w(C.aMk,B.cf)
w(C.byC,E.nw)
w(C.aMD,B.cf)
w(C.byI,E.nw)
w(C.aN5,B.cf)
w(C.byR,E.nw)
w(C.aNw,B.cf)
w(C.bz_,E.nw)})()
B.j0(b.typeUniverse,JSON.parse('{"VV":{"af":[],"v":[]},"blr":{"ah":["VV"]},"Wh":{"af":[],"v":[]},"aFh":{"ah":["Wh"]},"bio":{"aC":[]},"UO":{"af":[],"v":[]},"aDL":{"ah":["UO"]},"UT":{"af":[],"v":[]},"aDN":{"ah":["UT"]},"bcm":{"aC":[]},"afh":{"aw":[],"v":[]},"ae9":{"aw":[],"v":[]},"aIi":{"af":[],"v":[]},"NI":{"af":[],"v":[]},"aE3":{"ah":["NI"]},"bsB":{"aw":[],"v":[]},"Qw":{"aw":[],"v":[]},"btA":{"aC":[]},"bt5":{"aw":[],"v":[]},"bb2":{"aC":[]},"aIj":{"ah":["aIi"]},"bsd":{"aC":[]},"brD":{"aC":[]},"bbI":{"aC":[]},"brF":{"aC":[]},"bvF":{"aC":[]},"Wg":{"af":[],"v":[]},"bil":{"aC":[]},"aFg":{"ah":["Wg"]},"bim":{"aC":[]},"aj7":{"aC":[]},"aj5":{"af":[],"v":[]},"aj6":{"ah":["aj5"]},"Vu":{"af":[],"v":[]},"aye":{"af":[],"v":[]},"aEf":{"ah":["Vu"],"eF":[]},"bag":{"ah":["aye"]},"baf":{"aC":[]},"Vd":{"af":[],"v":[]},"bkS":{"ah":["Vd"]},"bwI":{"aC":[]},"aeZ":{"aC":[]},"a8I":{"aw":[],"v":[]},"WO":{"af":[],"v":[]},"VC":{"af":[],"v":[]},"UP":{"af":[],"v":[]},"Vt":{"af":[],"v":[]},"Wb":{"af":[],"v":[]},"Wl":{"af":[],"v":[]},"WF":{"af":[],"v":[]},"Wa":{"af":[],"v":[]},"aFJ":{"ah":["WO"]},"bwU":{"aC":[]},"bl2":{"ah":["VC"]},"brE":{"aC":[]},"bkE":{"ah":["UP"]},"bkU":{"ah":["Vt"]},"bmV":{"aC":[]},"aF2":{"ah":["Wb"]},"aFn":{"ah":["Wl"]},"bm8":{"ah":["WF"]},"blD":{"ah":["Wa"]},"beu":{"aw":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.at
return{c:w("m8<u?>"),G:w("u"),J:w("bw<m,K>"),Q:w("dE<m>"),Z:w("a0"),M:w("O<d9>"),R:w("O<a3v>"),a:w("O<a3z>"),V:w("O<ac>"),O:w("O<u>"),k:w("O<V>"),D:w("O<aA<aD>>"),w:w("O<a0>"),E:w("O<ai<m>>"),b:w("O<ai<K>>"),U:w("O<ai<G?>>"),x:w("O<a8<m,aD>>"),g:w("O<t>"),C:w("O<tK>"),v:w("O<h_>"),F:w("O<+(m,m)>"),fT:w("O<+(K,v)>"),I:w("O<+(G,m)>"),u:w("O<+(G,G)>"),r:w("O<+(m,m,a0)>"),e:w("O<+(m,K,K,G)>"),o:w("O<+(m,G,m,G)>"),d:w("O<+(m,m,K,K,a8<m,K>)>"),_:w("O<v8>"),fQ:w("O<aaJ>"),s:w("O<m>"),cF:w("O<as>"),X:w("O<u1>"),p:w("O<v>"),bL:w("O<abP>"),fH:w("O<lc>"),a_:w("O<ac2>"),cB:w("O<nx>"),ba:w("O<aci>"),eW:w("O<CH>"),fY:w("O<ZL>"),ac:w("O<aec>"),cd:w("O<CR>"),fr:w("O<af5>"),e4:w("O<a10>"),au:w("O<aJa>"),f7:w("O<R>"),n:w("O<K>"),t:w("O<G>"),dS:w("O<aC?>"),fs:w("O<tK?>"),bN:w("O<G?>"),q:w("cw<aj6>"),A:w("cw<ah<af>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aD>"),j:w("ai<@>"),P:w("a8<m,@>"),f:w("a8<@,@>"),bd:w("N<ei,m>"),fR:w("N<+(K,v),v>"),l:w("iA"),gA:w("zx"),gD:w("w6"),h:w("cv"),K:w("aD"),W:w("tK"),B:w("ei"),N:w("m"),bO:w("as"),Y:w("bp<K>"),gj:w("bV<m>"),bz:w("bV<G?>"),dg:w("eg<r1>"),m:w("bbk"),a2:w("CD"),f3:w("r1"),es:w("Gc"),gV:w("mr"),y:w("R"),i:w("K"),z:w("@"),S:w("G"),L:w("ai<@>?"),cK:w("aD?"),T:w("m?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b_w=new B.d9(0,0.1)
D.b1c=new C.aTc(0,0,0)
D.Li=new C.aTc(0,0.5,0)
D.b1L=new B.ay(A.be,1,A.r,-1)
D.b3d=new B.aZ(0,1/0,0,290)
D.b3k=new B.aZ(16,1/0,16,1/0)
D.b4y=new B.o(A.bf,null,null,null,null,null,A.a6)
D.fhx=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUJ=new B.y("\u26a1",null,D.fhx,null,null,null,null,null,null,null,null,null)
D.b97=new B.ci(A.A,null,null,D.fUJ,null)
D.aTD=new B.F(!0,A.bZ,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKb=new B.y("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aTD,null,A.K,null,null,null,null,null,null,null)
D.elh=new B.D(A.nt,D.fKb,null)
D.b9g=new B.ci(A.A,null,null,D.elh,null)
D.fA2=new B.y("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aTD,null,A.K,null,null,null,null,null,null,null)
D.em8=new B.D(A.Gn,D.fA2,null)
D.ba0=new B.ci(A.A,null,null,D.em8,null)
D.aed=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bdH=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bdY=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bfe=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bfk=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bfH=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.afH=new B.u(1,1,0.23137254901960785,0.12156862745098039,A.q)
D.bhz=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.biA=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bjg=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.agm=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bkf=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.agK=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.Yo=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bm_=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.bmg=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.ahe=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bnX=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bo4=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bow=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.vP=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.bqx=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.aiD=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bwd=new B.bb(11e6)
D.bxZ=new B.Q(10,34,10,26)
D.by6=new B.Q(10,6,10,2)
D.by8=new B.Q(10,8,0,10)
D.byM=new B.Q(12,8,8,8)
D.byS=new B.Q(14,0,14,22)
D.byU=new B.Q(14,0,14,30)
D.bzU=new B.Q(16,4,16,28)
D.bCb=new B.Q(26,12,26,58)
D.bD1=new B.Q(4,4,8,2)
D.bDF=new B.Q(8,14,8,12)
D.bDM=new B.Q(8,40,8,30)
D.bDR=new B.Q(8,6,16,0)
D.bDS=new B.Q(8,6,8,8)
D.bEc=new B.Q(0,0,1.5,0)
D.b0Z=new B.Hr(26,"saturation")
D.bEu=new B.xq(A.cY,D.b0Z,null,A.Xm)
D.fz7=new B.y("REACTION LAB",null,T.aUd,null,null,null,null,A.a1,null,1,null,null)
D.bEB=new B.bz(1,A.ba,D.fz7,null)
D.fpI=new B.F(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCn=new B.y("CORE PROTOCOL",null,D.fpI,null,null,null,null,null,null,null,null,null)
D.bEP=new B.bz(1,A.ba,D.fCn,null)
D.fDa=new B.y("\ud83d\udce2 NGMY Ads",null,A.qS,null,null,null,null,A.eL,null,1,null,null)
D.bFz=new B.bz(1,A.ba,D.fDa,null)
D.fxO=new B.y("Wire selected",null,A.fS,null,null,null,null,null,null,null,null,null)
D.bFO=new B.bz(1,A.ba,D.fxO,null)
D.ank=new B.a0(62712,"MaterialIcons",!1)
D.bLy=new B.a0(62908,"MaterialIcons",!1)
D.bNd=new B.a0(983122,"MaterialIcons",!1)
D.bNp=new B.a0(983247,"MaterialIcons",!1)
D.bNT=new B.a0(983616,"MaterialIcons",!1)
D.bPK=new B.ae(A.OS,null,A.ad,null,null,null)
D.bNc=new B.a0(983117,"MaterialIcons",!1)
D.bRD=new B.ae(D.bNc,28,A.c,null,null,null)
D.bRT=new B.ae(A.iX,18,null,null,null,null)
D.bTL=new B.ae(A.e9,21,A.c7,null,null,null)
D.bU_=new B.ae(A.oj,null,A.ad,null,null,null)
D.bU9=new B.ae(A.a2l,21,A.ad,null,null,null)
D.bV0=new B.ae(A.eJ,17,A.ad,null,null,null)
D.bWA=new B.ae(A.Oo,null,A.ad,null,null,null)
D.bXJ=new B.ae(A.iX,21,A.ad,null,null,null)
D.bZg=new B.ae(A.e5,null,A.aT,null,null,null)
D.dnR=w([A.d7,A.d3,A.d7],x.O)
D.c1E=new B.a9(A.a5,A.a8,A.x,D.dnR,null,null)
D.d_X=w([A.bO,A.bm],x.O)
D.c1M=new B.a9(A.b_,A.b5,A.x,D.d_X,null,null)
D.c1Z=new B.a9(A.b_,A.b5,A.x,A.a4X,null,null)
D.ar6=new B.a9(A.b_,A.b5,A.x,O.a4b,null,null)
D.cYA=w([A.oW,A.iw],x.O)
D.c2L=new B.a9(A.b_,A.b5,A.x,D.cYA,null,null)
D.d_F=w([A.e7,A.av],x.O)
D.ard=new B.a9(A.b_,A.b5,A.x,D.d_F,null,null)
D.dhE=w([A.dv,A.jb,A.bm],x.O)
D.c33=new B.a9(A.a5,A.a8,A.x,D.dhE,null,null)
D.dhK=w([A.hi,A.cr],x.O)
D.c3o=new B.a9(A.b_,A.b5,A.x,D.dhK,null,null)
D.cwP=w([A.bO,A.dv],x.O)
D.c3x=new B.a9(A.a5,A.a8,A.x,D.cwP,null,null)
D.aB3=w([A.e7,M.nf],x.O)
D.c3E=new B.a9(A.b_,A.b5,A.x,D.aB3,null,null)
D.c3V=new B.a9(A.b_,A.b5,A.x,R.arz,null,null)
D.c4K=new B.a9(A.ay,A.aD,A.x,A.QV,null,null)
D.d9k=w([A.av,A.w],x.O)
D.c4V=new B.a9(A.b_,A.b5,A.x,D.d9k,null,null)
D.c4Y=new B.a9(A.b_,A.b5,A.x,H.aAq,null,null)
D.bor=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bph=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cJI=w([A.MF,D.bor,D.bph],x.O)
D.c57=new B.a9(A.b_,A.b5,A.x,D.cJI,null,null)
D.cx8=w([A.d1,A.fV],x.O)
D.c5n=new B.a9(A.b_,A.b5,A.x,D.cx8,null,null)
D.c65=w([0,4,7],x.t)
D.c66=w([0,4,7,12],x.t)
D.c67=w([0,4,7,4],x.t)
D.aA7=w([A.hd,A.q4],x.O)
D.azC=w([A.hf,A.cR],x.O)
D.axX=w([A.br,A.dH],x.O)
D.cSk=w([A.aT,A.d1],x.O)
D.dj_=w([A.c_,A.l1],x.O)
D.axn=w([A.cQ,A.ke],x.O)
D.cXp=w([A.bM,A.aJ],x.O)
D.c6t=w([D.aA7,D.azC,A.a4g,D.axX,D.cSk,A.ayd,A.az7,D.dj_,D.axn,D.cXp],B.at("O<ai<u>>"))
D.cb9=w([120,220,380],x.t)
D.ceU=w([12,16,19,24],x.t)
D.cf3=w([1400,800,450,2400],x.t)
D.cns=w([250,450,900,1500],x.t)
D.bd2=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.boR=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bmH=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bsp=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.blP=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.awE=w([D.bd2,D.boR,D.bmH,D.bsp,D.blP],x.O)
D.cED=w([50,25,75],x.t)
D.cKe=w([0,5,10,15,18,20,25],x.t)
D.cSC=w([900,500,250,1600],x.t)
D.cWJ=w([A.br,A.bD,A.b8,A.br],x.O)
D.a46=w([A.ax,A.bu,A.bf,A.aK,A.o3],x.O)
D.cYe=w([A.av,A.ax,A.cQ,A.bu,A.bf,A.cw,A.cf,A.bD,A.XA],x.O)
D.a49=w([0.04,0.17,0.3],x.n)
D.f1z=new C.v8("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.f1F=new C.v8("Medium engine","A good all-rounder.",0.3,0.9)
D.f1E=new C.v8("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.HW=w([D.f1z,D.f1F,D.f1E],x._)
D.eyQ=new B.z(6,"Easy")
D.ezB=new B.z(8,"Medium")
D.euB=new B.z(10,"Hard")
D.cZK=w([D.eyQ,D.ezB,D.euB],x.I)
D.ayn=w([0.55,0.78,1],x.n)
D.ayy=w([A.c,A.fU,A.nV,A.av],x.O)
D.ayF=w([A.bf,A.ax,A.bu,A.d3],x.O)
D.f1w=new C.v8("Radar","Shows your height above the ground.",0.1,0)
D.f1x=new C.v8("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.f1u=new C.v8("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.ayN=w([D.f1w,D.f1x,D.f1u],x._)
D.d4M=w([47,100,220,470,1000],x.n)
D.J2={volts:0}
D.a5W=new B.bw(D.J2,[3],x.J)
D.Js=new B.ec(["b","battery",0.2,0.3,D.a5W])
D.efd={on:0}
D.dyD=new B.bw(D.efd,[1],x.J)
D.DW=new B.ec(["s","switch",0.5,0.3,D.dyD])
D.f_d=new B.ec(["l","bulb",0.8,0.3,A.ji])
D.d05=w([D.Js,D.DW,D.f_d],x.d)
D.DV=new B.cy(["b",0,"s",0])
D.eZe=new B.cy(["s",1,"l",0])
D.aPw=new B.cy(["l",1,"b",1])
D.dhQ=w([D.DV,D.eZe,D.aPw],x.o)
D.d_w=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.etM=new C.mO("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d05,D.dhQ,D.d_w)
D.aJn={ohms:0}
D.aGV=new B.bw(D.aJn,[220],x.J)
D.eZH=new B.ec(["r","resistor",0.5,0.3,D.aGV])
D.f_s=new B.ec(["d","led",0.8,0.3,A.ji])
D.dl4=w([D.Js,D.eZH,D.f_s],x.d)
D.eYA=new B.cy(["b",0,"r",0])
D.eZ8=new B.cy(["r",1,"d",0])
D.eYG=new B.cy(["d",1,"b",1])
D.duk=w([D.eYA,D.eZ8,D.eYG],x.o)
D.dlx=w(["led","diode","indicator"],x.s)
D.etT=new C.mO("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dl4,D.duk,D.dlx)
D.a7b={level:0}
D.dy_=new B.bw(D.a7b,[0.2],x.J)
D.eZN=new B.ec(["p","pot",0.5,0.3,D.dy_])
D.eZP=new B.ec(["m","motor",0.8,0.3,A.ji])
D.d0o=w([D.Js,D.eZN,D.eZP],x.d)
D.eYz=new B.cy(["b",0,"p",0])
D.eZ4=new B.cy(["p",1,"m",0])
D.eZ0=new B.cy(["m",1,"b",1])
D.dpT=w([D.eYz,D.eZ4,D.eZ0],x.o)
D.dhx=w(["fan","motor","spin","dimmer"],x.s)
D.etK=new C.mO("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d0o,D.dpT,D.dhx)
D.a5T=new B.bw(D.a7b,[0.9],x.J)
D.aPD=new B.ec(["s","solar",0.25,0.3,D.a5T])
D.aPC=new B.ec(["l","bulb",0.75,0.3,A.ji])
D.d39=w([D.aPD,D.aPC],x.d)
D.eZb=new B.cy(["s",0,"l",0])
D.eZ_=new B.cy(["l",1,"s",1])
D.d1c=w([D.eZb,D.eZ_],x.o)
D.dqy=w(["solar","sun","without battery","no battery","free"],x.s)
D.etN=new C.mO("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d39,D.d1c,D.dqy)
D.f_v=new B.ec(["c","crank",0.25,0.3,D.a5T])
D.dfR=w([D.f_v,D.aPC],x.d)
D.eYD=new B.cy(["c",0,"l",0])
D.eYZ=new B.cy(["l",1,"c",1])
D.dgq=w([D.eYD,D.eYZ],x.o)
D.dg0=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.etJ=new C.mO("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dfR,D.dgq,D.dg0)
D.dxZ=new B.bw(D.a7b,[0.7],x.J)
D.eZS=new B.ec(["t","turbine",0.25,0.3,D.dxZ])
D.eZF=new B.ec(["m","motor",0.75,0.3,A.ji])
D.da0=w([D.eZS,D.eZF],x.d)
D.eZm=new B.cy(["t",0,"m",0])
D.eZ1=new B.cy(["m",1,"t",1])
D.d8Z=w([D.eZm,D.eZ1],x.o)
D.deB=w(["wind","turbine","windmill","water","hydro"],x.s)
D.etG=new C.mO("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.da0,D.d8Z,D.deB)
D.aGS=new B.bw(D.J2,[9],x.J)
D.a8g=new B.ec(["b","battery",0.2,0.3,D.aGS])
D.aPB=new B.ec(["r","radio",0.8,0.3,A.ji])
D.dr9=w([D.a8g,D.DW,D.aPB],x.d)
D.eZg=new B.cy(["s",1,"r",0])
D.aPx=new B.cy(["r",1,"b",1])
D.c5O=w([D.DV,D.eZg,D.aPx],x.o)
D.dpF=w(["radio","music","listen"],x.s)
D.etS=new C.mO("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dr9,D.c5O,D.dpF)
D.dz3=new B.bw(D.J2,[12],x.J)
D.aPA=new B.ec(["b","battery",0.2,0.3,D.dz3])
D.f_e=new B.ec(["t","tv",0.8,0.3,A.ji])
D.d07=w([D.aPA,D.DW,D.f_e],x.d)
D.eZh=new B.cy(["s",1,"t",0])
D.aPy=new B.cy(["t",1,"b",1])
D.dj2=w([D.DV,D.eZh,D.aPy],x.o)
D.dr6=w(["tv","television","screen","watch"],x.s)
D.etD=new C.mO("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d07,D.dj2,D.dr6)
D.f_4=new B.ec(["z","buzzer",0.8,0.3,A.ji])
D.cGZ=w([D.Js,D.DW,D.f_4],x.d)
D.eZi=new B.cy(["s",1,"z",0])
D.eZA=new B.cy(["z",1,"b",1])
D.cVW=w([D.DV,D.eZi,D.eZA],x.o)
D.dnX=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.etP=new C.mO("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cGZ,D.cVW,D.dnX)
D.eZO=new B.ec(["h","heater",0.8,0.3,A.ji])
D.ddh=w([D.a8g,D.DW,D.eZO],x.d)
D.eZd=new B.cy(["s",1,"h",0])
D.eYO=new B.cy(["h",1,"b",1])
D.cWE=w([D.DV,D.eZd,D.eYO],x.o)
D.cqL=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.etE=new C.mO("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.ddh,D.cWE,D.cqL)
D.f_g=new B.ec(["s","solar",0.2,0.25,D.a5T])
D.dz7=new B.bw(D.aJn,[100],x.J)
D.f_j=new B.ec(["r","resistor",0.55,0.25,D.dz7])
D.f_q=new B.ec(["c","capacitor",0.85,0.25,A.ji])
D.eZK=new B.ec(["q","resistor",0.55,0.6,D.aGV])
D.f_h=new B.ec(["d","led",0.85,0.6,A.ji])
D.diz=w([D.f_g,D.f_j,D.f_q,D.eZK,D.f_h],x.d)
D.eZc=new B.cy(["s",0,"r",0])
D.eZ7=new B.cy(["r",1,"c",0])
D.eYF=new B.cy(["c",1,"s",1])
D.eYE=new B.cy(["c",0,"q",0])
D.eZ6=new B.cy(["q",1,"d",0])
D.eYH=new B.cy(["d",1,"c",1])
D.d6Q=w([D.eZc,D.eZ7,D.eYF,D.eYE,D.eZ6,D.eYH],x.o)
D.dfa=w(["capacitor","store","charge","flash"],x.s)
D.etR=new C.mO("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.diz,D.d6Q,D.dfa)
D.eZV=new B.ec(["b","battery",0.15,0.3,D.a5W])
D.f_w=new B.ec(["l1","bulb",0.5,0.3,A.ji])
D.f_1=new B.ec(["l2","bulb",0.85,0.3,A.ji])
D.cZa=w([D.eZV,D.f_w,D.f_1],x.d)
D.eYy=new B.cy(["b",0,"l1",0])
D.eYW=new B.cy(["l1",1,"l2",0])
D.eYX=new B.cy(["l2",1,"b",1])
D.daM=w([D.eYy,D.eYW,D.eYX],x.o)
D.dqS=w(["series","two bulbs","dim"],x.s)
D.etH=new C.mO("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cZa,D.daM,D.dqS)
D.efw={volts:0,charge:1}
D.dza=new B.bw(D.efw,[1.5,0],x.J)
D.f_o=new B.ec(["b","battery",0.75,0.3,D.dza])
D.cYB=w([D.aPD,D.f_o],x.d)
D.eZa=new B.cy(["s",0,"b",0])
D.eYC=new B.cy(["b",1,"s",1])
D.d78=w([D.eZa,D.eYC],x.o)
D.dfj=w(["charge","rechargeable","flat","recharge"],x.s)
D.etF=new C.mO("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cYB,D.d78,D.dfj)
D.dz2=new B.bw(D.J2,[4.5],x.J)
D.eZQ=new B.ec(["b","battery",0.2,0.3,D.dz2])
D.aPz=new B.ec(["p","phone",0.8,0.3,A.ji])
D.d9Q=w([D.eZQ,D.DW,D.aPz],x.d)
D.eZf=new B.cy(["s",1,"p",0])
D.a8f=new B.cy(["p",1,"b",1])
D.dmT=w([D.DV,D.eZf,D.a8f],x.o)
D.dom=w(["phone","charger","usb","mobile"],x.s)
D.etL=new C.mO("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.d9Q,D.dmT,D.dom)
D.eZC=new B.ec(["f","fan",0.8,0.3,A.ji])
D.ciS=w([D.Js,D.eZC],x.d)
D.eYx=new B.cy(["b",0,"f",0])
D.eYM=new B.cy(["f",1,"b",1])
D.cXc=w([D.eYx,D.eYM],x.o)
D.dhw=w(["fan","cool","air","wind"],x.s)
D.etU=new C.mO("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.ciS,D.cXc,D.dhw)
D.f_8=new B.ec(["b","battery",0.15,0.2,D.a5W])
D.eZD=new B.ec(["a","ammeter",0.5,0.2,A.ji])
D.eZB=new B.ec(["l","bulb",0.85,0.2,A.ji])
D.f_a=new B.ec(["v","voltmeter",0.5,0.6,A.ji])
D.dfF=w([D.f_8,D.eZD,D.eZB,D.f_a],x.d)
D.eYv=new B.cy(["b",0,"a",0])
D.eYu=new B.cy(["a",1,"l",0])
D.eZo=new B.cy(["v",0,"l",0])
D.eZp=new B.cy(["v",1,"l",1])
D.d7_=w([D.eYv,D.eYu,D.aPw,D.eZo,D.eZp],x.o)
D.duj=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.etQ=new C.mO("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dfF,D.d7_,D.duj)
D.f_z=new B.ec(["b","battery",0.15,0.2,D.aGS])
D.eZU=new B.ec(["t","tv",0.55,0.2,A.ji])
D.aGT=new B.bw(D.J2,[5],x.J)
D.eZI=new B.ec(["c","buck",0.4,0.5,D.aGT])
D.eZW=new B.ec(["p","phone",0.8,0.5,A.ji])
D.d4z=w([D.f_z,D.eZU,D.eZI,D.eZW],x.d)
D.eYB=new B.cy(["b",0,"t",0])
D.aPu=new B.cy(["b",0,"c",0])
D.aPv=new B.cy(["c",1,"p",0])
D.d9N=w([D.eYB,D.aPy,D.aPu,D.aPv,D.a8f],x.o)
D.d2I=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.etI=new C.mO("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.d4z,D.d9N,D.d2I)
D.eZJ=new B.ec(["c","buck",0.5,0.3,D.aGT])
D.cWt=w([D.aPA,D.eZJ,D.aPz],x.d)
D.d0y=w([D.aPu,D.aPv,D.a8f],x.o)
D.cud=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.etC=new C.mO("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cWt,D.d0y,D.cud)
D.f__=new B.ec(["d","diode",0.5,0.3,A.ji])
D.db_=w([D.a8g,D.f__,D.aPB],x.d)
D.eYw=new B.cy(["b",0,"d",0])
D.eYI=new B.cy(["d",1,"r",0])
D.cJw=w([D.eYw,D.eYI,D.aPx],x.o)
D.d2m=w(["diode","protect","backwards","one way"],x.s)
D.etO=new C.mO("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.db_,D.cJw,D.d2m)
D.R7=w([D.etM,D.etT,D.etK,D.etN,D.etJ,D.etG,D.etS,D.etD,D.etP,D.etE,D.etR,D.etH,D.etF,D.etL,D.etU,D.etQ,D.etI,D.etC,D.etO],B.at("O<mO>"))
D.hsb=new C.Gr("Moon",1.62,A.dv,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hs9=new C.Gr("Mars",3.71,A.ax,"Mars has about 38 percent of Earth's gravity.")
D.hsc=new C.Gr("Mercury",3.7,A.kd,"Mercury is small, so its gravity is like Mars.")
D.hs6=new C.Gr("Venus",8.87,A.aT,"Venus is almost as heavy as Earth, with strong gravity.")
D.hs8=new C.Gr("Earth",9.81,A.aK,"On Earth gravity is strong, and the air also slows you down.")
D.hsa=new C.Gr("Neptune",11.15,A.d3,"Neptune pulls a little harder than Earth.")
D.hs7=new C.Gr("Jupiter",24.79,A.cQ,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rJ=w([D.hsb,D.hs9,D.hsc,D.hs6,D.hs8,D.hsa,D.hs7],B.at("O<Gr>"))
D.d6O=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.d7y=w([0.2,0.5,0.8],x.n)
D.aZm=new C.KK(0,"accordion")
D.cXx=w([A.jC,A.Cr,A.Ca],x.w)
D.d3Z=w(["Mail","SMS","Ad"],x.s)
D.cY5=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hqo=new C.AM(D.aZm,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aA7,D.cXx,D.d3Z,D.cY5)
D.abU=new C.KK(1,"flip")
D.df4=w([A.qt,Z.Hm,A.uy],x.w)
D.d9x=w(["Unlock","Verify","Secure"],x.s)
D.cWp=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hqn=new C.AM(D.abU,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.azC,D.df4,D.d9x,D.cWp)
D.aZn=new C.KK(2,"towers")
D.d8i=w([A.yZ,A.qw,A.i5],x.w)
D.d7S=w(["Save","Grow","Earn"],x.s)
D.cKp=w(["","",""],x.s)
D.hqp=new C.AM(D.aZn,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a4g,D.d8i,D.d7S,D.cKp)
D.abV=new C.KK(3,"assemble")
D.dg3=w([A.on,A.hw,A.e5],x.w)
D.d3l=w(["Launch","Charge","Shine"],x.s)
D.dcm=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hqr=new C.AM(D.abV,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.axX,D.dg3,D.d3l,D.dcm)
D.aZo=new C.KK(4,"carousel")
D.dfS=w([A.b8,A.eQ],x.O)
D.d47=w([A.mO,A.anR,A.OZ],x.w)
D.cZA=w(["Explore","Discover","Learn"],x.s)
D.d9W=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hqm=new C.AM(D.aZo,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dfS,D.d47,D.cZA,D.d9W)
D.aZp=new C.KK(5,"burst")
D.d7N=w([A.ij,A.tJ],x.O)
D.cY0=w([A.kj,A.mM,A.hy],x.w)
D.cYm=w(["Cheer","Win","Love"],x.s)
D.d_D=w(["Make some noise","First place","Share the joy"],x.s)
D.hqq=new C.AM(D.aZp,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.d7N,D.cY0,D.cYm,D.d_D)
D.azj=w([D.hqo,D.hqn,D.hqp,D.hqr,D.hqm,D.hqq],B.at("O<AM>"))
D.eVR=new B.b7("skin","Skin",A.anS)
D.eXj=new B.b7("muscle","Muscles",A.OA)
D.eX1=new B.b7("organ","Organs",A.hy)
D.bLg=new B.a0(62747,"MaterialIcons",!1)
D.eX7=new B.b7("bone","Skeleton",D.bLg)
D.eXr=new B.b7("vessel","Blood vessels",A.pk)
D.d8o=w([D.eVR,D.eXj,D.eX1,D.eX7,D.eXr],x.r)
D.f1y=new C.v8("Simple legs","Light. Land gently.",0.15,0.2)
D.f1A=new C.v8("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.f1D=new C.v8("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.CX=w([D.f1y,D.f1A,D.f1D],x._)
D.eYc=new B.cy(["beat",0.18,0.28,0])
D.eZj=new B.cy(["burst",0.7,0.2,0])
D.eZu=new B.cy(["delay",0.45,0.5,1])
D.eZ3=new B.cy(["ripple",0.75,0.6,3])
D.d34=w([D.eYc,D.eZj,D.eZu,D.eZ3],x.e)
D.dep=w([P.ln,O.Jr,G.TE],x.u)
D.hpk=new C.Gc("First spark","A clock lights a burst and a ripple",D.d34,D.dep)
D.eYL=new B.cy(["beat",0.15,0.3,1])
D.eXR=new B.cy(["ripple",0.62,0.15,0])
D.eZq=new B.cy(["delay",0.4,0.45,0])
D.eYr=new B.cy(["ripple",0.7,0.45,0])
D.eY8=new B.cy(["delay",0.4,0.7,1])
D.eZ5=new B.cy(["shake",0.75,0.75,0])
D.ds2=w([D.eYL,D.eXR,D.eZq,D.eYr,D.eY8,D.eZ5],x.e)
D.evG=new B.z(2,4)
D.aPb=new B.z(4,5)
D.d6E=w([P.ln,O.Jr,G.TE,D.evG,D.aPb],x.u)
D.hpm=new C.Gc("Heartbeat","Two thumps, then a shake",D.ds2,D.d6E)
D.eYh=new B.cy(["dice",0.15,0.7,1])
D.eZw=new B.cy(["echo",0.4,0.7,0])
D.eYp=new B.cy(["comet",0.7,0.5,4])
D.eZk=new B.cy(["burst",0.72,0.2,1])
D.eYJ=new B.cy(["burst",0.3,0.25,0])
D.eYi=new B.cy(["pop",0.55,0.85,0])
D.cqi=w([D.eYh,D.eZw,D.eYp,D.eZk,D.eYJ,D.eYi],x.e)
D.ev2=new B.z(1,3)
D.ev3=new B.z(1,4)
D.aP7=new B.z(0,5)
D.dfN=w([P.ln,S.v6,D.ev2,D.ev3,D.aP7],x.u)
D.hpl=new C.Gc("Fireworks","Dice launch comets that burst in colour",D.cqi,D.dfN)
D.eYm=new B.cy(["beat",0.15,0.2,2])
D.eYT=new B.cy(["chance",0.4,0.2,0])
D.eYe=new B.cy(["ball",0.7,0.12,3])
D.eY1=new B.cy(["chance",0.4,0.5,1])
D.eZv=new B.cy(["ball",0.3,0.08,1])
D.eXV=new B.cy(["ripple",0.7,0.55,3])
D.cjk=w([D.eYm,D.eYT,D.eYe,D.eY1,D.eZv,D.eXV],x.e)
D.evH=new B.z(2,5)
D.cGH=w([P.ln,S.v6,O.a87,G.TF,D.evH],x.u)
D.hpj=new C.Gc("Rain","Balls fall at random and splash",D.cjk,D.cGH)
D.eYU=new B.cy(["beat",0.12,0.45,2])
D.eZl=new B.cy(["toggle",0.38,0.2,0])
D.eZs=new B.cy(["wash",0.7,0.15,4])
D.eYg=new B.cy(["count3",0.38,0.45,0])
D.eZn=new B.cy(["burst",0.72,0.4,0])
D.eYK=new B.cy(["light",0.55,0.7,1])
D.eY2=new B.cy(["pop",0.8,0.8,4])
D.dix=w([D.eYU,D.eZl,D.eZs,D.eYg,D.eZn,D.eYK,D.eY2],x.e)
D.ewd=new B.z(3,6)
D.cms=w([P.ln,S.v6,O.a87,G.TF,D.aP7,D.ewd],x.u)
D.hph=new C.Gc("Disco","A beat drives lights, washes and bursts",D.dix,D.cms)
D.eZz=new B.cy(["button",0.12,0.2,0])
D.eXX=new B.cy(["delay",0.34,0.2,1])
D.eZy=new B.cy(["light",0.56,0.2,1])
D.eZr=new B.cy(["delay",0.56,0.45,1])
D.eYV=new B.cy(["ball",0.34,0.6,0])
D.eY0=new B.cy(["delay",0.34,0.8,1])
D.eXQ=new B.cy(["burst",0.7,0.8,5])
D.c6w=w([D.eZz,D.eXX,D.eZy,D.eZr,D.eYV,D.eY0,D.eXQ],x.e)
D.eyp=new B.z(5,6)
D.do5=w([P.ln,S.v6,G.TE,G.TF,D.aPb,D.eyp],x.u)
D.hpi=new C.Gc("Domino","Tap the button and watch it run down the line",D.c6w,D.do5)
D.azG=w([D.hpk,D.hpm,D.hpl,D.hpj,D.hph,D.hpi],B.at("O<Gc>"))
D.ddG=w([0.05,0.15,0.25],x.n)
D.deA=w([1.5,3,4.5,9,12],x.n)
D.eUh=new B.b7("dice","Dice",A.of)
D.eVq=new B.b7("coin","Coin",Q.yU)
D.eXm=new B.b7("num","Number",A.z1)
D.deO=w([D.eUh,D.eVq,D.eXm],x.r)
D.deS=w(["skin","muscle","organ","bone","vessel"],x.s)
D.azM=w([A.c7,A.aT,A.be,A.aK,A.br,A.c_,A.cQ,A.hf],x.O)
D.dfT=w([A.c_,A.aK,A.dB,A.be],x.O)
D.dgR=w([],x.a)
D.emV=new C.ei("battery","Battery","\ud83d\udd0b",A.be,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.en0=new C.ei("solar","Solar panel","\u2600\ufe0f",A.bu,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.enF=new C.ei("crank","Hand crank","\ud83d\udd04",A.cQ,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.enh=new C.ei("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aK,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.emN=new C.ei("buck","Step-down converter","\ud83d\udd3d",A.hf,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.enf=new C.ei("regulator","5 V regulator","\ud83e\uddca",A.bM,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.enK=new C.ei("diode","Diode","\u27a1\ufe0f",A.aT,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.enr=new C.ei("ldr","Light sensor","\ud83c\udf1e",A.dB,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.en5=new C.ei("switch","Switch","\ud83c\udf9a\ufe0f",A.br,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.enH=new C.ei("fuse","Fuse","\ud83e\uddef",A.c7,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.emF=new C.ei("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hf,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.ens=new C.ei("resistor","Resistor","\u3030\ufe0f",A.aT,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.enu=new C.ei("bulb","Light bulb","\ud83d\udca1",A.dB,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.en2=new C.ei("led","LED","\ud83d\udd34",A.ax,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.en6=new C.ei("motor","Motor","\u2699\ufe0f",A.bM,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eno=new C.ei("buzzer","Buzzer","\ud83d\udd14",A.c_,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.emW=new C.ei("heater","Heater","\ud83d\udd25",A.cQ,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.enj=new C.ei("capacitor","Capacitor","\ud83e\udeab",A.co,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.enb=new C.ei("radio","Radio","\ud83d\udcfb",A.o3,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.en8=new C.ei("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b8,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.emM=new C.ei("voltmeter","Voltmeter","\ud83e\udded",A.bv,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.emT=new C.ei("ammeter","Ammeter","\ud83d\udcdf",A.aT,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.emZ=new C.ei("fan","Fan","\ud83c\udf00",A.aK,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.enM=new C.ei("speaker","Speaker","\ud83d\udd0a",A.c_,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.enB=new C.ei("clock","Digital clock","\u23f0",A.be,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.ene=new C.ei("calculator","Calculator","\ud83e\uddee",A.LL,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.emS=new C.ei("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.co,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.enL=new C.ei("router","WiFi router","\ud83d\udcf6",A.hf,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.enO=new C.ei("siren","Siren","\ud83d\udea8",A.ax,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.emI=new C.ei("toycar","Toy car","\ud83d\ude97",A.cQ,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.enP=new C.ei("kettle","Kettle","\ud83e\uded6",A.mA,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.emQ=new C.ei("lamp","Desk lamp","\ud83e\ude94",A.dB,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.en1=new C.ei("lights","Party lights","\ud83c\udf84",A.o3,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.enc=new C.ei("fridge","Fridge","\ud83e\uddca",A.hh,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.emK=new C.ei("washer","Washing machine","\ud83e\udee7",A.co,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.enC=new C.ei("blender","Blender","\ud83e\udd64",A.c7,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.en9=new C.ei("drone","Drone","\ud83d\ude81",A.bM,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.emP=new C.ei("drill","Power drill","\ud83d\udd29",A.aT,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.end=new C.ei("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.enz=new C.ei("neon","Neon sign","\ud83e\udea7",A.c_,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.emL=new C.ei("microwave","Microwave","\ud83c\udf72",A.cQ,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.ent=new C.ei("doorbell","Doorbell","\ud83d\udd14",A.bu,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.emY=new C.ei("camera","Security camera","\ud83d\udcf7",A.al,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.enn=new C.ei("console","Game console","\ud83c\udfae",A.br,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.enE=new C.ei("heartmon","Heart monitor","\ud83e\ude7a",A.hc,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.emJ=new C.ei("aquarium","Aquarium","\ud83d\udc20",A.b8,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eni=new C.ei("lighthouse","Lighthouse","\ud83d\uddfc",A.dB,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.enq=new C.ei("discoball","Disco ball","\ud83e\udea9",A.o3,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.enJ=new C.ei("robot","Robot","\ud83e\udd16",A.aK,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.emH=new C.ei("toaster","Toaster","\ud83c\udf5e",A.dY,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.enN=new C.ei("ledstrip","LED strip","\ud83c\udf08",A.c_,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eny=new C.ei("pump","Water pump","\ud83d\udeb0",A.aK,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.enk=new C.ei("hairdryer","Hair dryer","\ud83d\udca8",A.ij,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.enw=new C.ei("headphones","Headphones","\ud83c\udfa7",A.br,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.emR=new C.ei("smartwatch","Apple Watch Ultra","\u231a",A.bv,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.enI=new C.ei("tablet","iPad Pro M5","\ud83d\udcf2",A.co,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.emE=new C.ei("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hc,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.ena=new C.ei("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bt,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.en3=new C.ei("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.enp=new C.ei("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",G.tF,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.emG=new C.ei("iphonefold","iPhone Fold","\ud83d\udcf1",A.b6,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.emU=new C.ei("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d3,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.enG=new C.ei("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cw,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.enl=new C.ei("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bf,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eng=new C.ei("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cd,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.enx=new C.ei("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ax,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.en4=new C.ei("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.be,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.enm=new C.ei("honor","Honor Magic V5","\ud83d\udcf1",A.co,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.env=new C.ei("vivo","vivo X300 Pro","\ud83d\udcf1",A.cQ,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.enA=new C.ei("ereader","Kindle Scribe","\ud83d\udcd6",A.bt,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.emD=new C.ei("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cf,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.en7=new C.ei("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cw,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.en_=new C.ei("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b8,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.emO=new C.ei("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dB,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.emX=new C.ei("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ax,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.enD=new C.ei("vision","Apple Vision Pro","\ud83e\udd7d",A.br,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Ry=w([D.emV,D.en0,D.enF,D.enh,D.emN,D.enf,D.enK,D.enr,D.en5,D.enH,D.emF,D.ens,D.enu,D.en2,D.en6,D.eno,D.emW,D.enj,D.enb,D.en8,D.emM,D.emT,D.emZ,D.enM,D.enB,D.ene,D.emS,D.enL,D.enO,D.emI,D.enP,D.emQ,D.en1,D.enc,D.emK,D.enC,D.en9,D.emP,D.end,D.enz,D.emL,D.ent,D.emY,D.enn,D.enE,D.emJ,D.eni,D.enq,D.enJ,D.emH,D.enN,D.eny,D.enk,D.enw,D.emR,D.enI,D.emE,D.ena,D.en3,D.enp,D.emG,D.emU,D.enG,D.enl,D.eng,D.enx,D.en4,D.enm,D.env,D.enA,D.emD,D.en7,D.en_,D.emO,D.emX,D.enD],B.at("O<ei>"))
D.dhs=w([5,10,15,25,45,60],x.t)
D.dhO=w([-0.045,0.03,-0.015],x.n)
D.aAf=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.uJ=w([0.05,0.2,0.35],x.n)
D.b5P=new B.ac(0,A.G,A.hN,A.dC,6)
D.dku=w([D.b5P],x.V)
D.eud=new B.z(0,"AND")
D.ev4=new B.z(1,"Adder")
D.evI=new B.z(2,"Blinker")
D.ewe=new B.z(3,"Memory")
D.dlh=w([D.eud,D.ev4,D.evI,D.ewe],x.I)
D.aAr=w([-104,0,104],x.n)
D.aAs=w([-14,3],x.n)
D.dma=w([-8,0,8],x.n)
D.aAA=w([-92,0,92],x.n)
D.dmB=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.f1v=new C.v8("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.f1C=new C.v8("Medium tank","Balanced.",0.35,1)
D.f1B=new C.v8("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.RM=w([D.f1v,D.f1C,D.f1B],x._)
D.nz=w([0.04,0.2,0.36],x.n)
D.aAL=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eX0=new B.b7(D.aZm,"Fold",Q.aoP)
D.eW4=new B.b7(D.abU,"Flip",A.Ch)
D.bLx=new B.a0(62889,"MaterialIcons",!1)
D.eXi=new B.b7(D.aZn,"Rise",D.bLx)
D.ap2=new B.a0(983870,"MaterialIcons",!1)
D.eTJ=new B.b7(D.abV,"Assemble",D.ap2)
D.eTT=new B.b7(D.aZo,"Spin",D.ank)
D.eTQ=new B.b7(D.aZp,"Pop",A.kj)
D.do2=w([D.eX0,D.eW4,D.eXi,D.eTJ,D.eTT,D.eTQ],B.at("O<+(KK,m,a0)>"))
D.aAQ=w([A.c_,A.dB,A.bv,A.aK,A.br,A.c7],x.O)
D.dos=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dpv=w([3,4.5,5,6,9],x.n)
D.b6n=new B.ac(0,A.G,A.aS,A.I,16)
D.dpX=w([D.b6n],x.V)
D.dqu=w(["solar","turbine","crank","pot"],x.s)
D.dqW=w([0,0.35,0.75,1],x.n)
D.dsh=w(["volts","level","ohms","on"],x.s)
D.dtJ=w([A.jC,A.Cr,A.Ca,A.qt,Z.Hm,A.uy,A.yZ,A.qw,A.i5,A.on,A.hw,A.e5,A.hy,A.i6,A.mM,A.lH,A.ux,A.rF,A.la,A.GR,A.wr,A.Cg,A.Cc,A.a29,A.Os,A.Cn,A.OA,A.aof,H.aoZ,A.kj],x.w)
D.edc={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hhS=new C.yn("Switch",G.uA,A.bu,0,"Tap it to turn it ON or OFF.")
D.hhO=new C.yn("Blinker",A.ol,A.bv,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hhP=new C.yn("AND",D.ap2,A.co,2,"ON only when BOTH inputs are ON.")
D.bN_=new B.a0(63671,"MaterialIcons",!1)
D.hhN=new C.yn("OR",D.bN_,A.br,2,"ON when EITHER input is ON.")
D.hhQ=new C.yn("XOR",Aa.a1y,A.c_,2,"ON when the inputs are DIFFERENT.")
D.hhK=new C.yn("NAND",A.uj,A.aK,2,"OFF only when BOTH inputs are ON.")
D.bM6=new B.a0(63176,"MaterialIcons",!1)
D.hhL=new C.yn("NOR",D.bM6,A.hf,2,"ON only when BOTH inputs are OFF.")
D.hhM=new C.yn("NOT",Y.Cs,A.cQ,1,"Flips the signal: ON becomes OFF.")
D.hhR=new C.yn("Light",A.rA,A.dB,1,"Glows when its input is ON.")
D.hhT=new C.yn("Buzzer",A.om,A.c7,1,"Beeps while its input is ON.")
D.zE=new B.bw(D.edc,[D.hhS,D.hhO,D.hhP,D.hhN,D.hhQ,D.hhK,D.hhL,D.hhM,D.hhR,D.hhT],B.at("bw<m,yn>"))
D.cWX=w([A.A],x.M)
D.cXi=w([A.ay,A.aD],x.M)
D.d5F=w([A.ay,A.A,A.aD],x.M)
D.d7e=w([A.ay,A.lr,A.A,A.ls,A.aD],x.M)
D.dld=w([A.ay,A.lr,A.a5,A.a8,A.ls,A.aD],x.M)
D.dys=new B.du([1,D.cWX,2,D.cXi,3,D.d5F,4,A.aBk,5,D.d7e,6,D.dld],B.at("du<G,ai<d9>>"))
D.efu={Calm:0,Box:1,Sleep:2}
D.cE6=w([4,2,6,0],x.n)
D.cEd=w([4,4,4,4],x.n)
D.cEe=w([4,7,8,0],x.n)
D.Sd=new B.bw(D.efu,[D.cE6,D.cEd,D.cEe],B.at("bw<m,ai<K>>"))
D.edn={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xm=new C.a0O(0,"source")
D.d6H=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hnY=new C.qg("Clock",A.ol,D.xm,A.bv,D.d6H)
D.hnU=new C.qg("Button",A.Cv,D.xm,A.aT,A.Y)
D.dpH=w(["random","quick","slow"],x.s)
D.ho4=new C.qg("Dice",A.of,D.xm,A.c_,D.dpH)
D.bME=new B.a0(63484,"MaterialIcons",!1)
D.Ez=new C.a0O(1,"logic")
D.duy=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.ho0=new C.qg("Delay",D.bME,D.Ez,A.co,D.duy)
D.dhz=w(["fast","mid","slow"],x.s)
D.ho5=new C.qg("Echo",A.aov,D.Ez,A.br,D.dhz)
D.ho2=new C.qg("Every 2nd",Y.Cs,D.Ez,A.hf,A.Y)
D.bMj=new B.a0(63309,"MaterialIcons",!1)
D.ho_=new C.qg("Every 3rd",D.bMj,D.Ez,A.aK,A.Y)
D.bOd=new B.a0(983902,"MaterialIcons",!1)
D.c5U=w(["50%","25%","75%"],x.s)
D.ho7=new C.qg("Chance",D.bOd,D.Ez,A.cQ,D.c5U)
D.r0=new C.a0O(2,"out")
D.hnW=new C.qg("Light",A.rA,D.r0,A.dB,A.Y)
D.hnX=new C.qg("Burst",A.kj,D.r0,A.c_,A.Y)
D.hnV=new C.qg("Ripple",A.z3,D.r0,A.b8,A.Y)
D.ho3=new C.qg("Ball",A.aoH,D.r0,A.cQ,A.Y)
D.ho1=new C.qg("Comet",A.on,D.r0,A.br,A.Y)
D.bNY=new B.a0(983669,"MaterialIcons",!1)
D.ho6=new C.qg("Shake",D.bNY,D.r0,A.c7,A.Y)
D.ho8=new C.qg("Pop",A.GS,D.r0,A.be,A.Y)
D.hnZ=new C.qg("Wash",A.OE,D.r0,A.p_,A.Y)
D.mS=new B.bw(D.edn,[D.hnY,D.hnU,D.ho4,D.ho0,D.ho5,D.ho2,D.ho_,D.ho7,D.hnW,D.hnX,D.hnV,D.ho3,D.ho1,D.ho6,D.ho8,D.hnZ],B.at("bw<m,qg>"))
D.edz={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.A5=new C.JI(0,"tv")
D.f32=new C.ml("Samsung Neo QLED 8K",D.A5,G.Fr,A.aK)
D.f2U=new C.ml("LG OLED evo G5",D.A5,A.eh,A.hc)
D.f2L=new C.ml("Sony Bravia 9",D.A5,A.ra,A.bt)
D.f2P=new C.ml("Apple TV 4K",D.A5,A.e4,A.bO)
D.f2M=new C.ml("Bang and Olufsen Beovision",D.A5,G.F4,G.tF)
D.Jw=new C.JI(1,"iphone")
D.aPZ=new C.ml("iPhone 18 Pro Max",D.Jw,D.aiD,A.cf)
D.wR=new C.JI(3,"fold")
D.bs6=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.f2Z=new C.ml("iPhone Fold",D.wR,D.bs6,A.b6)
D.va=new C.JI(2,"android")
D.f3_=new C.ml("Samsung Galaxy S26 Ultra",D.va,G.aer,A.d3)
D.bkY=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.f2S=new C.ml("Samsung Galaxy Z Fold7",D.wR,D.bkY,A.cw)
D.f2O=new C.ml("Google Pixel 10 Pro XL",D.va,A.dv,A.bf)
D.f2W=new C.ml("Xiaomi 16 Ultra",D.va,A.i1,A.cd)
D.f2R=new C.ml("Huawei Mate 80 Pro Max",D.va,A.ek,A.ax)
D.f2N=new C.ml("OPPO Find X9 Ultra",D.va,A.e_,A.be)
D.f34=new C.ml("Honor Magic V5",D.wR,A.d7,A.co)
D.f2T=new C.ml("vivo X300 Pro",D.va,A.hM,A.cQ)
D.TP=new C.JI(4,"tablet")
D.f2Y=new C.ml("iPad Pro M5",D.TP,A.dv,A.aK)
D.a8r=new C.JI(5,"reader")
D.f35=new C.ml("Kindle Scribe",D.a8r,A.e7,A.bt)
D.A6=new C.JI(6,"computer")
D.f2X=new C.ml("MacBook Pro M5 Max",D.A6,A.dv,A.cf)
D.f31=new C.ml("iMac 32 inch",D.A6,A.bO,A.cw)
D.f2V=new C.ml("Pro Display XDR 8K",D.A6,A.i1,A.b8)
D.f2Q=new C.ml("Sony Laser Projector",D.A6,A.cr,A.dB)
D.f30=new C.ml("Luxury car touchscreen",D.A6,M.nf,A.ax)
D.f33=new C.ml("Apple Vision Pro",D.A6,A.hi,A.br)
D.mj=new B.bw(D.edz,[D.f32,D.f2U,D.f2L,D.f2P,D.f2M,D.aPZ,D.f2Z,D.f3_,D.f2S,D.f2O,D.f2W,D.f2R,D.f2N,D.f34,D.f2T,D.f2Y,D.f35,D.f2X,D.f31,D.f2V,D.f2Q,D.f30,D.f33],B.at("bw<m,ml>"))
D.edH={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.buS=new C.fR(20,4,13,!1)
D.bvi=new C.fR(14,5,13.5,!1)
D.bv9=new C.fR(9,2.4,10,!1)
D.bvn=new C.fR(7,5,12.5,!1)
D.bvc=new C.fR(8,3.5,12,!1)
D.buO=new C.fR(15,2,6,!1)
D.bvl=new C.fR(45,6,13.5,!0)
D.bv3=new C.fR(10,8,13.5,!1)
D.buW=new C.fR(25,3,12,!0)
D.bv1=new C.fR(35,4,12,!0)
D.bv2=new C.fR(40,4.5,9.5,!0)
D.bv4=new C.fR(55,3,9,!0)
D.buP=new C.fR(18,3,9,!1)
D.bvk=new C.fR(22,4,13.5,!1)
D.bvd=new C.fR(16,5,13.5,!1)
D.bv_=new C.fR(30,4,9,!0)
D.bvw=new C.fR(5,3.5,13,!1)
D.bv7=new C.fR(25,3,13.5,!0)
D.bvg=new C.fR(14,2.5,9,!1)
D.bv6=new C.fR(6,6,13,!1)
D.bvo=new C.fR(30,1.2,5,!0)
D.bvv=new C.fR(35,3,4.5,!0)
D.bvr=new C.fR(20,4.5,7.5,!0)
D.bv5=new C.fR(55,5.5,13.5,!0)
D.buN=new C.fR(45,5.5,13.5,!0)
D.bvh=new C.fR(40,5.5,13.5,!0)
D.bvu=new C.fR(60,6,13.5,!0)
D.aj6=new C.fR(28,4,7,!0)
D.G1=new C.fR(25,4,7,!0)
D.buZ=new C.fR(30,4,7,!0)
D.buU=new C.fR(22,4,7,!0)
D.buV=new C.fR(24,4,7,!0)
D.bv8=new C.fR(60,3,5.5,!0)
D.buQ=new C.fR(18,9,14,!0)
D.buX=new C.fR(25,9,14,!0)
D.aj7=new C.fR(30,8,14,!0)
D.buT=new C.fR(20,8,14,!0)
D.bv0=new C.fR(30,9,14,!0)
D.bvp=new C.fR(22,5,9.5,!0)
D.buR=new C.fR(30,2.5,10.5,!0)
D.bve=new C.fR(50,5.5,13.5,!0)
D.bvt=new C.fR(12,2,9.5,!1)
D.bvb=new C.fR(16,1.3,9.5,!0)
D.bvm=new C.fR(40,2.5,7,!0)
D.bvs=new C.fR(60,1.2,4.8,!0)
D.bvq=new C.fR(18,5,13.5,!0)
D.bvj=new C.fR(8,2,9.5,!1)
D.bva=new C.fR(12,2.5,8,!1)
D.buY=new C.fR(20,3.5,13.5,!0)
D.bvf=new C.fR(3.5,3,13,!1)
D.zF=new B.bw(D.edH,[D.buS,D.bvi,D.bv9,D.bvn,D.bvc,D.buO,D.bvl,D.bv3,D.buW,D.bv1,D.bv2,D.bv4,D.buP,D.bvk,D.bvd,D.bv_,D.bvw,D.bv7,D.bvg,D.bv6,D.bvo,D.bvv,D.bvr,D.bv5,D.buN,D.bvh,D.bvu,D.aj6,D.G1,D.buZ,D.G1,D.buU,D.G1,D.buV,D.aj6,D.G1,D.bv8,D.buQ,D.buX,D.aj7,D.buT,D.bv0,D.bvp,D.buR,D.bve,D.bvt,D.bvb,D.bvm,D.bvs,D.G1,D.aj7,D.bvq,D.bvj,D.bva,D.buY,D.bvf],B.at("bw<m,fR>"))
D.edm={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eTf=new B.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eym=new B.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eyh=new B.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eKJ=new B.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eLG=new B.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eKF=new B.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.ewn=new B.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eIC=new B.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eTn=new B.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eM1=new B.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eBK=new B.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.ew1=new B.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eAJ=new B.z("Movement","They pull your legs together and help you balance.")
D.eCH=new B.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eyv=new B.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eQI=new B.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eRS=new B.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eIk=new B.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eRB=new B.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eGV=new B.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eMa=new B.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.ew8=new B.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eD3=new B.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eLP=new B.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eHg=new B.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eRJ=new B.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eK9=new B.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.ewl=new B.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eMK=new B.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eQl=new B.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eOt=new B.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eup=new B.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eJS=new B.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eJW=new B.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eDO=new B.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eyJ=new B.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eCv=new B.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eIM=new B.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.ePi=new B.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eTk=new B.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eM7=new B.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eu7=new B.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eIY=new B.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.euY=new B.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.ePx=new B.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eQE=new B.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eJo=new B.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.ePM=new B.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.ewa=new B.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eRf=new B.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eA5=new B.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eOW=new B.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eDs=new B.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eHa=new B.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eMr=new B.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eRp=new B.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eRh=new B.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eRl=new B.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eHI=new B.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eNh=new B.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eOq=new B.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eR1=new B.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eJn=new B.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eFw=new B.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eEe=new B.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eJN=new B.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eMk=new B.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eG1=new B.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eGI=new B.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eAt=new B.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eQA=new B.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eBj=new B.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.euV=new B.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eDN=new B.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.euQ=new B.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eza=new B.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eDS=new B.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eBt=new B.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eMG=new B.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eCK=new B.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eT2=new B.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eEo=new B.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eHB=new B.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eKh=new B.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eBC=new B.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eBl=new B.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dzz=new B.bw(D.edm,[D.eTf,D.eym,D.eyh,D.eKJ,D.eLG,D.eKF,D.ewn,D.eIC,D.eTn,D.eM1,D.eBK,D.ew1,D.eAJ,D.eCH,D.eyv,D.eQI,D.eRS,D.eIk,D.eRB,D.eGV,D.eMa,D.ew8,D.eD3,D.eLP,D.eHg,D.eRJ,D.eK9,D.ewl,D.eMK,D.eQl,D.eOt,D.eup,D.eJS,D.eJW,D.eDO,D.eyJ,D.eCv,D.eIM,D.ePi,D.eTk,D.eM7,D.eu7,D.eIY,D.euY,D.ePx,D.eQE,D.eJo,D.ePM,D.ewa,D.eRf,D.eA5,D.eOW,D.eDs,D.eHa,D.eMr,D.eRp,D.eRh,D.eRl,D.eHI,D.eNh,D.eOq,D.eR1,D.eJn,D.eFw,D.eEe,D.eJN,D.eMk,D.eG1,D.eGI,D.eAt,D.eQA,D.eBj,D.euV,D.eDN,D.euQ,D.eza,D.eDS,D.eBt,D.eMG,D.eCK,D.eT2,D.eEo,D.eHB,D.eKh,D.eBC,D.eBl],B.at("bw<m,+(m,m)>"))
D.dzB=new B.hi(A.G,11)
D.dzF=new B.hi(A.G,30)
D.dGK=new C.UO(null)
D.dGX=new C.UP(null)
D.dIY=new C.UT(null)
D.dJM=new C.Vt(null)
D.dJP=new C.Vu(null)
D.dKn=new C.VC(null)
D.dO1=new C.Wa(null)
D.dOI=new C.Wb(null)
D.dSV=new C.Wg(null)
D.e7O=new C.Wh(null)
D.e7R=new C.Wl(null)
D.ea0=new C.WF(null)
D.ea1=new C.a8I(null)
D.ec4=new C.WO(null)
D.efG=new B.t(0,118)
D.aJt=new B.t(0,13)
D.efH=new B.t(0,17)
D.efK=new B.t(0,330)
D.efQ=new B.t(0,-13)
D.efR=new B.t(0,-17)
D.efS=new B.t(0,-18)
D.efT=new B.t(0,-19)
D.efW=new B.t(0,-28)
D.efX=new B.t(0,-31)
D.efY=new B.t(0,-32)
D.eg1=new B.t(-9.5,-11)
D.eg4=new B.t(10,20)
D.eg7=new B.t(10,-13)
D.eg8=new B.t(10,-22)
D.eg9=new B.t(10,-4)
D.a7h=new B.t(11,8)
D.egh=new B.t(12,2)
D.egi=new B.t(14,0)
D.egj=new B.t(14,12)
D.aJE=new B.t(14,8)
D.egk=new B.t(14,-17)
D.aJG=new B.t(14,-3)
D.aJH=new B.t(14,-4)
D.egn=new B.t(15,0)
D.ego=new B.t(15,-12)
D.egr=new B.t(16,-8)
D.egs=new B.t(18,14)
D.egt=new B.t(18,-12)
D.aJM=new B.t(20,0)
D.egB=new B.t(20,15)
D.egC=new B.t(20,-17)
D.egD=new B.t(20,-3)
D.egE=new B.t(21,8)
D.egI=new B.t(22,10)
D.aJO=new B.t(22,8)
D.egJ=new B.t(24,0)
D.egK=new B.t(24,2)
D.egN=new B.t(24,-18)
D.egO=new B.t(24,-22)
D.egS=new B.t(25,8)
D.egT=new B.t(26,0)
D.egZ=new B.t(28,-30)
D.eh4=new B.t(30,18)
D.eh5=new B.t(30,2)
D.eh8=new B.t(31,19)
D.eha=new B.t(32,0)
D.aJS=new B.t(34,0)
D.aJT=new B.t(34,-32)
D.J6=new B.t(36,0)
D.ehn=new B.t(3,-1)
D.ehq=new B.t(40,3)
D.ehE=new B.t(4,11)
D.ehH=new B.t(4,-2)
D.ehM=new B.t(5,0)
D.ehN=new B.t(5,17)
D.ehO=new B.t(5,6)
D.ehT=new B.t(6,11)
D.ehZ=new B.t(8,7)
D.ei_=new B.t(8,-10)
D.ei0=new B.t(8,-14)
D.aJY=new B.t(9,0)
D.eia=new B.t(-20.5,-17.6)
D.eib=new B.t(-9,18.5)
D.eie=new B.t(-2.6,-1)
D.ein=new B.t(2.6,1)
D.eiu=new B.t(-9,12.2)
D.eiO=new B.t(-9,20.5)
D.ej9=new B.t(-10,0)
D.eja=new B.t(-10,12)
D.aK5=new B.t(-10,4)
D.ejg=new B.t(-11,-2)
D.ejk=new B.t(-13,-5)
D.ejl=new B.t(-14,0)
D.ejm=new B.t(-14,13)
D.ejn=new B.t(-14,2)
D.ejo=new B.t(-14,-12)
D.ejp=new B.t(-14,-19)
D.ejr=new B.t(-14,-23)
D.ejs=new B.t(-15,6)
D.ejv=new B.t(-16,14)
D.ejx=new B.t(-16,-8)
D.ejy=new B.t(-17,10)
D.ejz=new B.t(-17,-18)
D.ejA=new B.t(-17,-8)
D.ejC=new B.t(-18,20)
D.ejD=new B.t(-18,-9)
D.aK7=new B.t(-20,0)
D.ejF=new B.t(-20,16)
D.ejG=new B.t(-20,-9)
D.T9=new B.t(-22,8)
D.ejH=new B.t(-22,-10)
D.ejI=new B.t(-22,-11)
D.ejJ=new B.t(-24,10)
D.ejK=new B.t(-24,11)
D.ejL=new B.t(-24,14)
D.ejM=new B.t(-24,-22)
D.ejO=new B.t(-25,-11)
D.ejP=new B.t(-26,0)
D.ejQ=new B.t(-26,-18)
D.ejR=new B.t(-2,9)
D.ejS=new B.t(-2,-10)
D.ejT=new B.t(-2,-20)
D.ejW=new B.t(-2,-9)
D.ejY=new B.t(-32,0)
D.aK9=new B.t(-34,0)
D.ek2=new B.t(-40,3)
D.ek4=new B.t(-4,11)
D.ek5=new B.t(-4,-17)
D.ek6=new B.t(-4,-2)
D.eka=new B.t(-5,0)
D.ekb=new B.t(-5,20)
D.ekc=new B.t(-5,6)
D.ekd=new B.t(-6,26)
D.eke=new B.t(-6,6)
D.ekf=new B.t(-6,-42)
D.ekg=new B.t(-7,-19)
D.ekh=new B.t(-7,-24)
D.ekk=new B.t(-8,-9)
D.a7p=new B.t(-9,0)
D.ekl=new B.t(-9,1)
D.ekn=new B.t(-9,-23)
D.fzL=new B.y("Thinking\u2026",null,A.ho,null,null,null,null,null,null,null,null,null)
D.elp=new B.D(A.jy,D.fzL,null)
D.fQt=new B.y("Start from a ready-made board",null,A.fw,null,null,null,null,null,null,null,null,null)
D.elC=new B.D(A2.w0,D.fQt,null)
D.bCO=new B.Q(4,0,4,14)
D.fuY=new B.F(!0,A.aB,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAK=new B.y("Games and little helpers for a spare minute.",null,D.fuY,null,null,null,null,null,null,null,null,null)
D.elO=new B.D(D.bCO,D.fAK,null)
D.di9=w([A.iy,A.bm],x.O)
D.aP0=new B.c2(A.A,0.5,A.x,null,0,D.di9,null,null)
D.esX=new B.c2(A.A,0.5,A.x,null,0,D.aB3,null,null)
D.d94=w([A.c,A.bM],x.O)
D.esZ=new B.c2(A.A,0.5,A.x,null,0,D.d94,null,null)
D.dqJ=w([A.bO,A.hi],x.O)
D.aP1=new B.c2(A.A,0.5,A.x,null,0,D.dqJ,null,null)
D.cO3=w([A.c,A.bO],x.O)
D.et2=new B.c2(A.tp,0.5,A.x,null,0,D.cO3,null,null)
D.bsa=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.doK=w([A.fb,D.bsa],x.O)
D.et8=new B.c2(A.tp,0.5,A.x,null,0,D.doK,null,null)
D.cHe=w([A.dv,A.cr],x.O)
D.et9=new B.c2(A.A,0.5,A.x,null,0,D.cHe,null,null)
D.cVU=w([A.fU,A.aT,A.d1],x.O)
D.etc=new B.c2(A.tp,0.5,A.x,null,0,D.cVU,null,null)
D.diO=w([A.hi,M.nf],x.O)
D.etd=new B.c2(A.tp,0.5,A.x,null,0,D.diO,null,null)
D.eth=new B.c2(A.A,0.5,A.x,null,0,D.axn,null,null)
D.drA=w([A.hi,A.hW],x.O)
D.etp=new B.c2(A.A,0.5,A.x,null,0,D.drA,null,null)
D.aP5=new B.aP(9,9)
D.ety=new B.aP(1.4,1.4)
D.f_D=new B.a3(10,-8,18,-2)
D.f_E=new B.a3(14,-14,20,14)
D.f_G=new B.a3(20,-2,30,2)
D.f_L=new B.a3(4,-13,30,-3)
D.f_R=new B.a3(8,-7,12,7)
D.f02=new B.a3(-12,12,12,19)
D.f03=new B.a3(-12,14,12,22)
D.f04=new B.a3(-12,-22,12,8)
D.f05=new B.a3(-12,-25,12,19)
D.f06=new B.a3(-12,-26,12,-6)
D.f07=new B.a3(-12,-4,12,14)
D.f09=new B.a3(-14,20,14,24)
D.f0a=new B.a3(-14,6,14,10)
D.f0b=new B.a3(-14,-17,14,15)
D.f0c=new B.a3(-14,-26,14,18)
D.f0d=new B.a3(-14,-4,14,20)
D.f0f=new B.a3(-15,-29,15,25)
D.f0g=new B.a3(-16,-16,16,16)
D.f0j=new B.a3(-16,-22,-9,18)
D.f0k=new B.a3(-16,-24,16,-10)
D.f0m=new B.a3(-16,-2,16,20)
D.f0o=new B.a3(-18,20,18,24)
D.f0p=new B.a3(-18,-18,18,20)
D.f0q=new B.a3(-20,12,20,22)
D.f0r=new B.a3(-20,-28,20,26)
D.f0s=new B.a3(-22,14,22,18)
D.aPG=new B.a3(-22,-26,22,24)
D.f0t=new B.a3(-22,-3,22,3)
D.f0u=new B.a3(-22,-4,22,12)
D.f0w=new B.a3(-24,-12,10,22)
D.f0x=new B.a3(-24,-14,22,8)
D.f0y=new B.a3(-24,-6,24,20)
D.aPH=new B.a3(-24,-9,24,9)
D.f0z=new B.a3(-25,14,25,19)
D.f0A=new B.a3(-26,-14,14,8)
D.f0B=new B.a3(-26,-4,26,20)
D.f0C=new B.a3(-26,-6,4,6)
D.aPI=new B.a3(-28,-13,28,13)
D.f0D=new B.a3(-28,-16,28,16)
D.f0E=new B.a3(-28,-16,28,8)
D.f0F=new B.a3(-28,-22,28,22)
D.f0G=new B.a3(-30,-12,30,14)
D.f0H=new B.a3(-30,-14,0,14)
D.f0I=new B.a3(-30,-18,30,20)
D.f0J=new B.a3(-30,-28,30,14)
D.f0K=new B.a3(-30,-2,30,18)
D.f0L=new B.a3(-30,-4,30,18)
D.f0M=new B.a3(-32,-17,32,17)
D.f0N=new B.a3(-32,-28,32,18)
D.f0O=new B.a3(-33,-21,33,17)
D.f0P=new B.a3(-34,14,34,26)
D.a8i=new B.a3(-34,-18,34,18)
D.f0Q=new B.a3(-34,-4,34,7)
D.f0R=new B.a3(-36,-24,36,20)
D.f0S=new B.a3(-38,-22,38,22)
D.f0U=new B.a3(-3,12,3,22)
D.f0V=new B.a3(-3,5,3,15)
D.f0Z=new B.a3(-46,-34,46,28)
D.f10=new B.a3(-48,-3,48,3)
D.f13=new B.a3(-6,18,24,24)
D.f14=new B.a3(-6,5,6,12)
D.f15=new B.a3(-6,-22,6,-15)
D.f19=new B.a3(-9,-16,9,22)
D.f1a=new B.a3(-4.5,-24,4.5,-21.2)
D.f1c=new B.a3(14,-9,17.5,9)
D.eeV={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aQD=new B.dE(D.eeV,5,x.Q)
D.ees={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.f4k=new B.dE(D.ees,10,x.Q)
D.f6y=new B.av(24,44)
D.f6W=new B.av(54,38)
D.f72=new B.av(66,38)
D.bb0=new B.fk(2,null,null,null,null,A.br,null,null,null,null)
D.f84=new B.a5(16,16,D.bb0,null)
D.aRB=new B.hK(3,12,12,0.82,null)
D.fkN=new B.F(!0,A8.xH,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffm=new B.eu("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cN,null,null,null,null,null,null,D.fkN)
D.fpO=new B.F(!0,A.kA,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffs=new B.eu("AI",null,null,A.cN,null,null,null,null,null,null,D.fpO)
D.ffK=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgg=new B.F(!0,A.bk,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgC=new B.F(!0,A.co,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh7=new B.F(!0,A.bZ,null,null,null,null,11,A.U,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhc=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fht=new B.F(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhZ=new B.F(!0,A.aR,null,null,null,null,12,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4X=new B.cV(A.hN,A.dC,6)
D.dc3=w([D.f4X],B.at("O<cV>"))
D.fiW=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dc3,null,null,null)
D.fj0=new B.F(!0,A.es,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj5=new B.F(!0,A.bZ,null,null,null,null,10.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjJ=new B.F(!0,A.bZ,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjR=new B.F(!0,A.aB,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkR=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flm=new B.F(!0,A.aB,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flT=new B.F(!0,A.aT,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flV=new B.F(!0,A.c,null,null,null,null,10.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.aBn,null,null,null)
D.fm0=new B.F(!0,A.c,null,null,null,null,12.5,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnN=new B.F(!0,A.tR,null,null,null,null,12.5,A.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fon=new B.F(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fot=new B.F(!0,A.bZ,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foy=new B.F(!0,A.aB,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpk=new B.F(!0,A.mC,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpz=new B.F(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTI=new B.F(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqC=new B.F(!0,A.fV,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqV=new B.F(!0,A.bZ,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frs=new B.F(!0,A.be,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsU=new B.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftn=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftF=new B.F(!0,A.aT,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu0=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu3=new B.F(!0,A.aT,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuO=new B.F(!0,A.aR,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvd=new B.F(!0,A.tR,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvA=new B.F(!0,A.be,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj8=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvZ=new B.y("\u26a0\ufe0f ",null,D.fj8,null,null,null,null,null,null,null,null,null)
D.fwb=new B.y("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.vl,null,null,null,null,null,null,null,null,null)
D.fxN=new B.y("Pick one, then change it and see what happens.",null,A.vl,null,null,null,null,null,null,null,null,null)
D.fxR=new B.y("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.fki=new B.F(!0,A.ad,null,null,null,null,null,A.U,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyN=new B.y("What do you want to invent? Type it below, or tap an idea.",null,D.fki,null,null,null,null,null,null,null,null,null)
D.fAl=new B.y("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fAY=new B.y("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fBA=new B.y("Make it yours",null,A.k5,null,null,null,null,null,null,null,null,null)
D.fEM=new B.y("5G",null,X.aT2,null,null,null,null,null,null,null,null,null)
D.frc=new B.F(!0,A.bZ,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFX=new B.y("WHAT HAPPENS",null,D.frc,null,null,null,null,null,null,null,null,null)
D.fHI=new B.y("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fIo=new B.y("Change the words and pictures on the three slabs.",null,A.vl,null,null,null,null,null,null,null,null,null)
D.fIz=new B.y("All the parts and wires will be removed.",null,A.hb,null,null,null,null,null,null,null,null,null)
D.fIT=new B.y("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fJs=new B.y("Tap the crank on the board again and again to spin it faster.",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fKG=new B.y("\ud83c\udfaf Challenges",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fLe=new B.y("Remove this part",null,W.aSE,null,null,null,null,null,null,null,null,null)
D.fLw=new B.y("Clear the board?",null,A.df,null,null,null,null,null,null,null,null,null)
D.fqD=new B.F(!0,A.bv,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLM=new B.y("How the Lab works",null,D.fqD,null,null,null,null,null,null,null,null,null)
D.fhG=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM7=new B.y("Electronics Lab",null,D.fhG,null,null,null,null,A.a1,null,1,null,null)
D.fMb=new B.y("?",null,O.aUc,null,null,null,null,null,null,null,null,null)
D.fNu=new B.y("Ready-made circuits",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fO7=new B.y("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.ho,null,null,null,null,null,null,null,null,null)
D.ftJ=new B.F(!0,A.aT,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRB=new B.y("\u26a0 There is no air here, so a parachute will not work.",null,D.ftJ,null,null,null,null,null,null,null,null,null)
D.fSO=new B.y("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,W.aSD,null,null,null,null,null,null,null,null,null)
D.fTi=new B.y("NGMY",null,A.vj,null,null,null,null,null,null,null,null,null)
D.fTw=new B.y("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.V1,null,null,null,null,null,null,null,null,null)
D.fTV=new B.y("Tap it to change its setting. Drag from the right dot to connect.",null,A.lR,null,null,null,null,null,null,null,null,null)
D.fUY=new B.y("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.vl,null,null,null,null,null,null,null,null,null)
D.fV_=new B.y("TOOLBOX",null,A7.a9B,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hnG=null
$.hnF=null
$.htR=0
$.hW5=B.U(x.N,B.at("iM"))
$.hWG=B.U(x.N,B.at("iM"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"isy","bFF",()=>{var v="led"
return B.a([C.az8("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fnv(),v),C.az8("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fnw(),v),C.az8("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fnx(),v),C.az8("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fnE(),v),C.az8("Not both","Make the light go OFF only when both switches are ON.",2,new C.fnF(),v),C.az8("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fnG(),"buzzer")],B.at("O<bc3>"))})
w($,"it_","bFG",()=>B.a([C.QD("UNIVERSE","Earth, space and gravity",A.OZ,A.aK,new C.fnW()),C.QD("ELECTRONICS LAB","Batteries, wires, real circuits",Af.Cd,A.aK,new C.fnX()),C.QD("DISCOVERY LAB","Body Explorer: a real 3D human",D.bLy,A.be,new C.fnY()),C.QD("TOOLBOX","Converter, clock, games",H.anz,A.cQ,new C.fnZ()),C.QD("REACTION LAB","Wire parts together",A.CA,A.bv,new C.fo_()),C.QD("SPARK PAINTER","Paint with light",A.Or,A.c_,new C.fo0()),C.QD("ROCKET LANDER","Land softly on the pad",A.on,A.aK,new C.fo1()),C.QD("TITLE ANIMATOR","Make a moving title",A.wt,A.bu,new C.fo2()),C.QD("CIRCUIT LAB","Connect logic, learn it",A.a1T,A.co,new C.fo3())],B.at("O<bub>")))
w($,"iux","qu",()=>{var v,u,t=B.U(x.N,x.B)
for(v=0;v<76;++v){u=D.Ry[v]
t.n(0,u.a,u)}return t})
w($,"isz","aii",()=>B.a([C.FX("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fnH()),C.FX("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fnI()),C.FX("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fnJ()),C.FX("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fnK()),C.FX("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fnL()),C.FX("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fny()),C.FX("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fnz()),C.FX("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fnA()),C.FX("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fnB()),C.FX("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fnC()),C.FX("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fnD())],B.at("O<bc4>")))
w($,"it1","hCs",()=>B.a([C.a1k("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aT,A.cd,new C.fob()),C.a1k("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c7,A.bz,new C.foc()),C.a1k("Breathe","Calm down in a minute","\ud83e\udee7",A.hf,A.cw,new C.fod()),C.a1k("Draw Pad","Sketch and share","\ud83c\udfa8",A.bD,A.b6,new C.foe()),C.a1k("Memory Match","Find the pairs","\ud83c\udccf",A.aK,A.cf,new C.fof()),C.a1k("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bu,A.bf,new C.fog()),C.a1k("Tip & Split","Share the bill","\ud83e\uddfe",A.be,A.b0,new C.foh()),C.a1k("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.br,A.aC,new C.foi())],B.at("O<bvv>")))})()};
(a=>{a["koHpugzNV/fF3ZdYMAgfr5lH/fc="]=a.current})($__dart_deferred_initializers__);