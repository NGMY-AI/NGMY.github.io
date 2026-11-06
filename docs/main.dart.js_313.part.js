((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Z,A7,A_,A0,H,A1,U,A8,A2,A3,G,A9,A4,Aa,V,Ab,Ac,N,Ad,Ae,W,O,X,Af,L,Ag,Ah,Q,I,P,Ai,E,F,K,C={
byi(d){return C.hPa(d)},
hPa(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$byi=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.qU(B.n4(""),d,A.hC,null,null).d7(0,A.Ym),$async$byi)
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
return B.i($async$byi,v)},
i_V(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Q6[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cU(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fZ(D.Q6,new C.fut())
if(w==null)w=A.d.gH(D.Q6)
s=B.U(x.N,x.E)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.L)(r),++u){l=r[u].a
k=l[0]
l=$.qi().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.L)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.ajx(w.a,w.b,m,w,s,!1)},
hUw(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.M(D.Qx,new C.fk3(),x.bd).aH(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
i7J(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cK(b2,"{")
v=A.a.oF(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.S.aL(0,A.a.ap(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aY(a5)
r=0
for(a6=x.j,a7=J.aW(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gT(a7)
p=B.u(J.q(q,"kind"))
o=B.u(J.q(q,"id"))
if(!$.qi().ai(0,p)||J.f0(s,o)||J.ad(t)>=8)continue
J.cd(s,o)
n=B.U(a5,a8)
for(a9=0;a9<4;++a9){m=D.dka[a9]
l=J.q(q,m)
if(typeof l=="number")J.aG(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?B.e3(J.q(q,"x")):0.2+A.k.F(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?B.e3(J.q(q,"y")):0.25+A.k.am(r,3)*0.3,0.1,0.9)
J.cd(t,new B.e8([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aW(a6.a(J.q(u,"wires")));a5.C();){h=a5.gT(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.u(J.q(g,0))
e=B.u(J.q(g,2))
d=A.o.D(A.k.N(B.e3(J.q(g,1))),0,1)
a0=A.o.D(A.k.N(B.e3(J.q(g,3))),0,1)
if(J.f0(s,f)&&J.f0(s,e)&&!J.A(f,e))J.cd(i,new B.ct([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.bM.a(J.q(u,"steps"))
a0=J.aW(a0==null?A.cC:a0)
while(a0.C()){a2=a0.gT(a0)
J.cd(a1,B.u(a2))}a3=a1
a0=J.q(u,"title")
a0=B.u(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new C.mB(a0,B.u(a1==null?"":a1),t,i,A.U)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=B.u(a5==null?"":a5)
return new C.ajx(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hZv(d){var w,v,u=C.h4b()
d.B(u)
for(w=0;w<60;++w)u.v6(0,0.03333333333333333)
v=u.a
return A.d.b4(v,new C.fre(u))&&!A.d.d8(v,new C.frf())},
hZu(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.U(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.L)(l),++u){t=l[u];++v
k.n(0,t.a,$.qi().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.L)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.u(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.dit,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aH(q,", ")+")"
s.push(B.u(p)+n+": "+o+", current "+A.k.ab(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.L)(w),++u){m=w[u]
l.push(B.u(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.u(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aH(s,"\n")+"\nWires: "+A.d.aH(l,"; ")},
hNK(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.L)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aH(v,"\n")+"\n\n"}v=A.d.aH(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
i_U(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qi().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Qx[u]
if(A.d.b4(w,new C.fuq(s)))if(!B.cU(r,s.b.toLowerCase(),0))v=B.cU(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.a_(w,new C.fur(e),B.T(w).k("a_<1>")).gal(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ab(A.d.cM(w,0,new C.fus())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qi().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ajx:function ajx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fut:function fut(){},
fk3:function fk3(){},
fre:function fre(d){this.a=d},
frf:function frf(){},
fuq:function fuq(d){this.a=d},
fur:function fur(d){this.a=d},
fus:function fus(){},
Vh:function Vh(d,e){this.c=d
this.a=e},
bj8:function bj8(d,e,f,g,h){var _=this
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
e6V:function e6V(d){this.a=d},
e6W:function e6W(d,e,f){this.a=d
this.b=e
this.c=f},
e6X:function e6X(d){this.a=d},
e77:function e77(d){this.a=d},
e78:function e78(d,e){this.a=d
this.b=e},
e73:function e73(d){this.a=d},
e71:function e71(d,e){this.a=d
this.b=e},
e72:function e72(d,e,f){this.a=d
this.b=e
this.c=f},
e74:function e74(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e7_:function e7_(d){this.a=d},
e70:function e70(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e75:function e75(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e6Z:function e6Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e76:function e76(d,e){this.a=d
this.b=e},
e6Y:function e6Y(d,e){this.a=d
this.b=e},
e7b:function e7b(d){this.a=d},
e7a:function e7a(d){this.a=d},
e7c:function e7c(d){this.a=d},
e79:function e79(d){this.a=d},
e7d:function e7d(d,e){this.a=d
this.b=e},
e7e:function e7e(d,e){this.a=d
this.b=e},
e7f:function e7f(d,e){this.a=d
this.b=e},
e7g:function e7g(d,e){this.a=d
this.b=e},
byD(d,e,f){var w=null
return B.w(B.a([B.d(d,w,w,w,w,w,w,D.f6Q,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
hhH(d,e,f,g){var w=null,v=B.n(24),u=B.I(f.j(0.6),A.q,1)
return B.au(B.p(w,B.w(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,B.d(e,w,w,w,w,w,w,A.DD,A.L,w,w),A.aB,B.bZ(A.fQ,g,A.br,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new B.o(D.bad,w,u,v,w,w,A.n),w,w,w,w,A.aa,w,w,w),w,w,w)},
G1:function G1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uS:function uS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VE:function VE(d){this.a=d},
aDL:function aDL(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.iG$=h
_.oy$=i
_.nb$=j
_.iH$=k
_.bw$=l
_.aa$=m
_.c=_.a=null},
ela:function ela(){},
elu:function elu(d){this.a=d},
elt:function elt(d,e){this.a=d
this.b=e},
elv:function elv(){},
elw:function elw(){},
elc:function elc(d,e,f){this.a=d
this.b=e
this.c=f},
elb:function elb(d,e){this.a=d
this.b=e},
el1:function el1(d){this.a=d},
el2:function el2(d){this.a=d},
el3:function el3(d){this.a=d},
el4:function el4(d){this.a=d},
el5:function el5(d){this.a=d},
el6:function el6(d){this.a=d},
el7:function el7(d){this.a=d},
el8:function el8(d){this.a=d},
el9:function el9(d){this.a=d},
el_:function el_(d){this.a=d},
el0:function el0(d){this.a=d},
ekZ:function ekZ(d){this.a=d},
eln:function eln(d,e){this.a=d
this.b=e},
eli:function eli(d){this.a=d},
elj:function elj(d){this.a=d},
elf:function elf(d){this.a=d},
elk:function elk(d){this.a=d},
ele:function ele(d){this.a=d},
ell:function ell(d){this.a=d},
elm:function elm(d){this.a=d},
eld:function eld(d){this.a=d},
elo:function elo(d,e){this.a=d
this.b=e},
elh:function elh(d,e){this.a=d
this.b=e},
elp:function elp(d){this.a=d},
elq:function elq(d){this.a=d},
elr:function elr(d){this.a=d},
els:function els(d){this.a=d},
elg:function elg(d){this.a=d},
bgf:function bgf(d,e){this.b=d
this.a=e},
aLt:function aLt(){},
bwi:function bwi(){},
cFw(){var w=0,v=B.j(x.F),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cFw=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.qW().jG(0,"assets/data/body3d.bin"),$async$cFw)
case 3:d=a1
$.hd0=J.eY(A.dC.gaP(d),d.byteOffset,d.byteLength)
t=B.aRB(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jr(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.d7n[i]
g=B.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a2L(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aYY))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.b9p(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cFw,v)},
aRo:function aRo(d,e,f){this.a=d
this.b=e
this.c=f},
a2L:function a2L(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b9p:function b9p(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Uc:function Uc(d){this.a=d},
aCg:function aCg(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.iG$=s
_.oy$=t
_.nb$=u
_.iH$=v
_.bw$=w
_.aa$=a0
_.c=_.a=null},
dF2:function dF2(d){this.a=d},
dF1:function dF1(d,e){this.a=d
this.b=e},
dEF:function dEF(d,e){this.a=d
this.b=e},
dEG:function dEG(){},
dF3:function dF3(){},
dEH:function dEH(d,e){this.a=d
this.b=e},
dEI:function dEI(d){this.a=d},
dEJ:function dEJ(){},
dEK:function dEK(d){this.a=d},
dEM:function dEM(d,e){this.a=d
this.b=e},
dEL:function dEL(d){this.a=d},
dEC:function dEC(d,e,f){this.a=d
this.b=e
this.c=f},
dED:function dED(d){this.a=d},
dEE:function dEE(d){this.a=d},
dET:function dET(d){this.a=d},
dEU:function dEU(d,e){this.a=d
this.b=e},
dEV:function dEV(d,e){this.a=d
this.b=e},
dEW:function dEW(d){this.a=d},
dES:function dES(d,e){this.a=d
this.b=e},
dEX:function dEX(d,e){this.a=d
this.b=e},
dER:function dER(d,e){this.a=d
this.b=e},
dEY:function dEY(d){this.a=d},
dEQ:function dEQ(d){this.a=d},
dEZ:function dEZ(d){this.a=d},
dEP:function dEP(d){this.a=d},
dF_:function dF_(d){this.a=d},
dEO:function dEO(d){this.a=d},
dF0:function dF0(d){this.a=d},
dEN:function dEN(d){this.a=d},
aKD:function aKD(){},
aKE:function aKE(){},
c0I:function c0I(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c0J:function c0J(d,e){this.a=d
this.b=e},
c0K:function c0K(d){this.a=d},
axL(d,e,f,g,h){return new C.ba6(d,e,f,g,h)},
fVR(d,e,f,g,h,i){return $.hL7.c7(0,d+"|"+B.u(e)+"|"+f.l()+"|"+B.u(g),new C.cMh(d,e,f,i,g,h))},
y8:function y8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Cj:function Cj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
no:function no(d,e,f){this.a=d
this.b=e
this.c=f},
ba6:function ba6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fdU:function fdU(){},
fdV:function fdV(){},
fdW:function fdW(){},
fe2:function fe2(){},
fe3:function fe3(){},
fe4:function fe4(){},
Ug:function Ug(d){this.a=d},
aCi:function aCi(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.iG$=m
_.oy$=n
_.nb$=o
_.iH$=p
_.bw$=q
_.aa$=r
_.c=_.a=null},
dGI:function dGI(d){this.a=d},
dGm:function dGm(d,e){this.a=d
this.b=e},
dGp:function dGp(){},
dGJ:function dGJ(){},
dGk:function dGk(d,e){this.a=d
this.b=e},
dGl:function dGl(d,e){this.a=d
this.b=e},
dGq:function dGq(d,e,f){this.a=d
this.b=e
this.c=f},
dGf:function dGf(){},
dGg:function dGg(){},
dGh:function dGh(d){this.a=d},
dGi:function dGi(d,e){this.a=d
this.b=e},
dGj:function dGj(d,e,f){this.a=d
this.b=e
this.c=f},
dGr:function dGr(){},
dGs:function dGs(d,e){this.a=d
this.b=e},
dGt:function dGt(d){this.a=d},
dGo:function dGo(d,e){this.a=d
this.b=e},
dGn:function dGn(d){this.a=d},
dGe:function dGe(d,e,f){this.a=d
this.b=e
this.c=f},
dGC:function dGC(d){this.a=d},
dGB:function dGB(d){this.a=d},
dGD:function dGD(d){this.a=d},
dGA:function dGA(d){this.a=d},
dGy:function dGy(d){this.a=d},
dGz:function dGz(d){this.a=d},
dGx:function dGx(d){this.a=d},
dGu:function dGu(d){this.a=d},
dGw:function dGw(d){this.a=d},
dGE:function dGE(d,e){this.a=d
this.b=e},
dGF:function dGF(d,e){this.a=d
this.b=e},
dGG:function dGG(d){this.a=d},
dGv:function dGv(d){this.a=d},
dGH:function dGH(d,e){this.a=d
this.b=e},
bap:function bap(d,e){this.b=d
this.a=e},
cMh:function cMh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aKI:function aKI(){},
bw6:function bw6(){},
hBZ(){return new C.Nh(null)},
Q5(d,e,f,g,h){return new C.brJ(d,e,f,g,h)},
bq8(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fWm(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Nh:function Nh(d){this.a=d},
Kk:function Kk(d,e){this.a=d
this.b=e},
Az:function Az(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aCz:function aCz(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dMy:function dMy(d,e){this.a=d
this.b=e},
dMx:function dMx(d){this.a=d},
dMA:function dMA(d,e){this.a=d
this.b=e},
dMz:function dMz(d){this.a=d},
brJ:function brJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fek:function fek(){},
fel:function fel(){},
fem:function fem(){},
fen:function fen(){},
feo:function feo(){},
fep:function fep(){},
feq:function feq(){},
fer:function fer(){},
fes:function fes(){},
bq9:function bq9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eVs:function eVs(d){this.a=d},
eVr:function eVr(d,e){this.a=d
this.b=e},
eVp:function eVp(d){this.a=d},
eVt:function eVt(d){this.a=d},
eVq:function eVq(d,e){this.a=d
this.b=e},
aex:function aex(d,e,f){this.c=d
this.d=e
this.a=f},
adp:function adp(d,e,f){this.c=d
this.d=e
this.a=f},
PZ:function PZ(d,e,f,g,h,i,j,k,l,m){var _=this
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
br7:function br7(d,e){this.b=d
this.a=e},
bqD:function bqD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b97:function b97(d,e){this.b=d
this.a=e},
aGK:function aGK(d,e){this.c=d
this.a=e},
aGL:function aGL(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cR$=e
_.b2$=f
_.c=_.a=null},
eV8:function eV8(d){this.a=d},
eV7:function eV7(d){this.a=d},
eV6:function eV6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eV5:function eV5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eV3:function eV3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eV2:function eV2(d,e,f){this.a=d
this.b=e
this.c=f},
eV4:function eV4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eV1:function eV1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVg:function eVg(d){this.a=d},
eVf:function eVf(d){this.a=d},
eVh:function eVh(d,e){this.a=d
this.b=e},
eVi:function eVi(d,e){this.a=d
this.b=e},
eVj:function eVj(d,e){this.a=d
this.b=e},
eVe:function eVe(d,e,f){this.a=d
this.b=e
this.c=f},
eVk:function eVk(d,e,f){this.a=d
this.b=e
this.c=f},
eVd:function eVd(d){this.a=d},
eV9:function eV9(d){this.a=d},
eVl:function eVl(d){this.a=d},
eVm:function eVm(d){this.a=d},
eVc:function eVc(d,e){this.a=d
this.b=e},
eVn:function eVn(d,e){this.a=d
this.b=e},
eVb:function eVb(d,e){this.a=d
this.b=e},
eVo:function eVo(d,e){this.a=d
this.b=e},
eVa:function eVa(d,e){this.a=d
this.b=e},
eV_:function eV_(){},
eV0:function eV0(){},
bpM:function bpM(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpd:function bpd(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9M:function b9M(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpf:function bpf(d,e,f){this.b=d
this.c=e
this.a=f},
btc:function btc(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aMj:function aMj(){},
hj7(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new B.x(w,0)),u=e.aF(0,new B.x(w,0)),t=1-f,s=3*t
return d.aI(0,t*t*t).ad(0,v.aI(0,s*t*f)).ad(0,u.aI(0,s*f*f)).ad(0,e.aI(0,f*f*f))},
bge(d,e,f,g,h,i){return $.hLI.c7(0,d+"|"+B.u(e)+"|"+f.l()+"|"+B.u(g),new C.dhb(d,e,f,i,g,h))},
a0_:function a0_(d,e){this.a=d
this.b=e},
q6:function q6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qN:function qN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Cn:function Cn(d,e){this.a=d
this.b=e},
YZ:function YZ(d,e){this.a=d
this.b=e},
aen:function aen(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0c:function a0c(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Cx:function Cx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abk:function abk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abA:function abA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adt:function adt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgc:function bgc(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bt$=_.bG$=0},
dhf:function dhf(d){this.a=d},
dhg:function dhg(d){this.a=d},
dhc:function dhc(d,e){this.a=d
this.b=e},
dhd:function dhd(d){this.a=d},
dhe:function dhe(d){this.a=d},
dhh:function dhh(d){this.a=d},
dhi:function dhi(d){this.a=d},
dhj:function dhj(d){this.a=d},
dhk:function dhk(d){this.a=d},
dhl:function dhl(d){this.a=d},
dhm:function dhm(d){this.a=d},
dhn:function dhn(d){this.a=d},
dho:function dho(d){this.a=d},
dhp:function dhp(d){this.a=d},
FN:function FN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VD:function VD(d){this.a=d},
aDK:function aDK(d,e,f,g,h,i,j){var _=this
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
_.aa$=j
_.c=_.a=null},
ekv:function ekv(d){this.a=d},
ekk:function ekk(d){this.a=d},
ekm:function ekm(){},
ekn:function ekn(){},
ekq:function ekq(){},
ekr:function ekr(d,e,f){this.a=d
this.b=e
this.c=f},
eks:function eks(d){this.a=d},
ekt:function ekt(d){this.a=d},
eko:function eko(){},
ekp:function ekp(d){this.a=d},
ekV:function ekV(d){this.a=d},
eku:function eku(){},
ekg:function ekg(d){this.a=d},
ekx:function ekx(d){this.a=d},
ekw:function ekw(d){this.a=d},
ekz:function ekz(){},
eky:function eky(d,e){this.a=d
this.b=e},
ekj:function ekj(){},
ekh:function ekh(d){this.a=d},
eki:function eki(d){this.a=d},
ekT:function ekT(d){this.a=d},
ekS:function ekS(d){this.a=d},
ekU:function ekU(d){this.a=d},
ekJ:function ekJ(d,e){this.a=d
this.b=e},
ekR:function ekR(d){this.a=d},
ekP:function ekP(d){this.a=d},
ekQ:function ekQ(d){this.a=d},
ekO:function ekO(d){this.a=d},
ekN:function ekN(d){this.a=d},
ekK:function ekK(d){this.a=d},
ekL:function ekL(d){this.a=d},
ekM:function ekM(d){this.a=d},
ekl:function ekl(){},
ekF:function ekF(d){this.a=d},
ekG:function ekG(d){this.a=d},
ekE:function ekE(d){this.a=d},
ekH:function ekH(d){this.a=d},
ekD:function ekD(d){this.a=d},
ekI:function ekI(d){this.a=d},
ekC:function ekC(d){this.a=d},
ekB:function ekB(d){this.a=d},
ekA:function ekA(d,e){this.a=d
this.b=e},
bgd:function bgd(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dhb:function dhb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aLr:function aLr(){},
bkA:function bkA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
PQ:function PQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
VS:function VS(d){this.a=d},
bjH:function bjH(d,e,f,g,h,i,j,k){var _=this
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
_.bw$=j
_.aa$=k
_.c=_.a=null},
ewB:function ewB(d){this.a=d},
ewz:function ewz(d){this.a=d},
ewA:function ewA(){},
ewc:function ewc(){},
ewb:function ewb(){},
ewl:function ewl(d,e){this.a=d
this.b=e},
ewn:function ewn(d){this.a=d},
ewr:function ewr(d){this.a=d},
ewm:function ewm(d){this.a=d},
ews:function ews(d){this.a=d},
ewt:function ewt(d){this.a=d},
ewu:function ewu(d,e){this.a=d
this.b=e},
ewk:function ewk(d,e){this.a=d
this.b=e},
ewv:function ewv(d){this.a=d},
ewj:function ewj(d){this.a=d},
eww:function eww(d,e){this.a=d
this.b=e},
ewi:function ewi(d,e){this.a=d
this.b=e},
ewx:function ewx(d){this.a=d},
ewh:function ewh(d,e){this.a=d
this.b=e},
ewy:function ewy(d){this.a=d},
ewg:function ewg(d){this.a=d},
ewo:function ewo(d){this.a=d},
ewf:function ewf(d){this.a=d},
ewp:function ewp(d){this.a=d},
ewe:function ewe(d){this.a=d},
ewq:function ewq(d,e){this.a=d
this.b=e},
ewd:function ewd(d,e){this.a=d
this.b=e},
br2:function br2(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
W2:function W2(d){this.a=d},
aE_:function aE_(d,e,f,g){var _=this
_.d=d
_.e=$
_.f=e
_.r="bounce"
_.w=3
_.x=56
_.y=0
_.z=!0
_.Q=0
_.bw$=f
_.aa$=g
_.c=_.a=null},
eCK:function eCK(d,e){this.a=d
this.b=e},
eCL:function eCL(d,e,f){this.a=d
this.b=e
this.c=f},
eCM:function eCM(d){this.a=d},
eCJ:function eCJ(){},
eCN:function eCN(d,e){this.a=d
this.b=e},
eCI:function eCI(d,e){this.a=d
this.b=e},
eCO:function eCO(d,e){this.a=d
this.b=e},
eCH:function eCH(d,e){this.a=d
this.b=e},
eCP:function eCP(d){this.a=d},
eCG:function eCG(d){this.a=d},
eCQ:function eCQ(d,e){this.a=d
this.b=e},
eCF:function eCF(d,e){this.a=d
this.b=e},
eCR:function eCR(d){this.a=d},
eCS:function eCS(d){this.a=d},
eCE:function eCE(d,e){this.a=d
this.b=e},
aLA:function aLA(){},
aLF:function aLF(){},
hoe(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aF(0,e).gcG()*0.1
return new B.x((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h4b(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a46(w,v,u,A.cW,B.U(x.N,x.y))},
hvQ(d,e,f){var w=d.c,v=e===0?-1:1
return new B.x(w*f.a+v*C.h4c(d),d.d*f.b)},
h4c(d){return 42+(D.m1.ai(0,d.b)?(d.ch-1)*38:0)},
eb:function eb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tx:function tx(d,e,f,g){var _=this
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
aa_:function aa_(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ab6:function ab6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a46:function a46(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bLz:function bLz(){},
bLK:function bLK(d){this.a=d},
bLF:function bLF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLL:function bLL(d){this.a=d},
bLM:function bLM(d){this.a=d},
bLO:function bLO(d){this.a=d},
bLP:function bLP(d){this.a=d},
bLN:function bLN(d){this.a=d},
bLQ:function bLQ(d,e,f){this.a=d
this.b=e
this.c=f},
bLR:function bLR(d){this.a=d},
bLB:function bLB(d){this.a=d},
bLC:function bLC(d){this.a=d},
bLA:function bLA(d){this.a=d},
bLD:function bLD(d,e,f){this.a=d
this.b=e
this.c=f},
bLE:function bLE(d){this.a=d},
bLy:function bLy(d){this.a=d},
bLS:function bLS(d,e){this.a=d
this.b=e},
bLG:function bLG(d,e){this.a=d
this.b=e},
bLJ:function bLJ(d){this.a=d},
bLI:function bLI(d){this.a=d},
bLH:function bLH(d){this.a=d},
aik:function aik(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bGm:function bGm(){},
bGn:function bGn(){},
mB:function mB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cl4:function cl4(d){this.a=d},
i7F(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.fG6(),c9=new C.fG8(),d0=new C.fG9(),d1=new C.fG7(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aD(w,d1.$3(new B.a9(w.a,w.b,w.c,w.d),A.bM,A.bK))
d3.bL(D.e9Z,D.e7M,c9.$2(A.dI,1.4))
d3.bL(D.e7C,D.e7B,c9.$2(A.bq,2.4))
d3.bL(D.e7D,V.aGT,c9.$2(A.bq,2.4))
if(c7){d2=c8.$1(A.fe.j(0.5))
d2.z=A.Rk
d3.af(D.e7m,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.x(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aD(d0.$4(-22,-26,44,50),d1.$3(D.aML,A.aO,A.cr))
d3.af(A.cH,16,c8.$1(A.bq))
d3.af(A.cH,13,c8.$1(c7?A.aR.j(0.85):A.M))
if(c7){d2=d3.a
J.bx(d2.save())
d2.translate(0,4)
d3.jp(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.ad,3).K()
d2.drawLine.apply(d2,[0,0,s*11,t*11,r])
r.delete()}d2.restore()
for(t=d5*0.8,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=Math.sin(v*2+d5)
r=c8.$1(A.c.j(0.8*(1-u))).K()
d2.drawCircle(s*9,4-u*12,1.6+u*2,r)
r.delete()}}d3.af(D.e9V,2.4,c8.$1(c7?A.bc:A.ak))
d3.af(D.eaC,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aD(d0.$5(-14,14,28,12,4),c8.$1(A.e2))
d2=$.W().r
t=x.v
q=new B.aO(d2,A.ao,c6,c6,B.a([],t))
q.E(new B.b5(-16,-26))
q.E(new B.ap(16,-26))
q.E(new B.ap(12,14))
q.E(new B.ap(-12,14))
q.E(new B.bE())
d3.aS(q,c8.$1(A.fe.j(0.35)))
if(c7){d2=new B.aO(d2,A.ao,c6,c6,B.a([],t))
d2.E(new B.b5(-14,-10))
d2.E(new B.ap(14,-10))
d2.E(new B.ap(12,14))
d2.E(new B.ap(-12,14))
d2.E(new B.bE())
d3.aS(d2,c8.$1(A.aw.j(0.7)))}d3.aS(q,c9.$2(A.ad,1.6))
d2=d3.a
J.bx(d2.save())
d2.translate(0,10)
d3.jp(0,d4.y)
d3.bL(D.a5H,D.aH8,c9.$2(A.bO,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.F(s+v*0.33,1)
r=c8.$1(A.f1).K()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aD(d0.$5(-10,-4,20,10,4),c8.$1(A.aJ))
d3.af(A.it,3,c8.$1(c7?A.bc:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a3t[m]
r=c9.$2(A.bq,3).K()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.bx(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).K()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=B.ci(A.J,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).K()
d2.drawOval(B.bX(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
w.E(new B.b5(-24,-12))
w.E(new B.ap(10,-12))
w.E(new B.ap(10,2))
w.E(new B.ap(-2,2))
w.E(new B.ap(-6,22))
w.E(new B.ap(-16,22))
w.E(new B.ap(-14,2))
w.E(new B.ap(-24,2))
w.E(new B.bE())
d3.aS(w,d1.$3(D.eP6,A.aT,A.d8))
d3.b1(D.eOx,c8.$1(A.ds))
d2=d3.a
J.bx(d2.save())
d2.translate(18,-5)
d3.jp(0,d4.y*2)
d3.bL(A.J,D.e7G,c9.$2(A.bO,2.4))
d3.bL(A.a5G,D.e7F,c9.$2(A.ig,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dO.j(1-u)).K()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
d2.E(new B.b5(16,-6))
d2.E(new B.ap(52,-26))
d2.E(new B.ap(52,18))
d2.E(new B.ap(16,4))
d2.E(new B.bE())
d3.aS(d2,c8.$1(A.bL.j(0.35*v)))}d3.aD(d0.$5(-26,-6,30,12,3),d1.$3(D.ePc,A.bm,A.co))
k=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
k.E(new B.b5(4,-6))
k.E(new B.ap(18,-12))
k.E(new B.ap(18,12))
k.E(new B.ap(4,6))
k.E(new B.bE())
d3.aS(k,c8.$1(A.e2))
d3.af(D.e7K,7,c8.$1(c7?A.c:A.ds))
return!0
case"neon":d3.aD(d0.$5(-30,-14,60,28,6),c8.$1(K.mX))
if(c7)j=d4.ax>0.5||A.o.F(A.k.bm(d5*17),3)!==0
else j=!1
i=j?A.c5:D.bj5
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c5.j(0.35))
t.z=A.mD
d3.aD(d2,t)}d3.aD(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.ea4,i,17)
return!0
case"microwave":d3.aD(d0.$4(-30,-18,60,38),d1.$3(D.ePi,A.bO,A.bm))
d2=d0.$5(-26,-14,38,30,3)
d3.aD(d2,c8.$1(c7?A.bL.j(0.75):A.au))
if(c7){d2=d3.a
J.bx(d2.save())
d2.translate(-7,8)
d3.jp(0,d4.y*0.5)
d3.hH(B.ci(A.J,7,22),c8.$1(A.d8))
d2.restore()}d3.aD(d0.$5(15,-14,12,12,2),c8.$1(K.mX))
if(c7)d6.$5(d3,"0:"+A.a.aX(A.o.u(59-A.o.F(A.k.bm(d5),60)),2,"0"),D.e7L,A.bn,6.5)
d3.af(D.e7X,4,c8.$1(A.ds))
return!0
case"doorbell":d3.aD(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.af(A.S9,10,c8.$1(c7?A.bH:A.bq))
d2=d3.a
J.bx(d2.save())
d2.translate(0,-8)
d3.jp(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.eaE,A.c,16)
d2.restore()
d3.af(A.ke,6,c8.$1(A.d0))
d3.af(A.ke,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=B.bU(A.S9,14+v*6+A.k.F(t,6))
r=c9.$2(A.bH.j(0.9-v*0.3),1.8).K()
d2.drawArc.apply(d2,[B.bX(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bL(D.ea3,D.eaA,c9.$2(A.bq,4))
d2=d3.a
J.bx(d2.save())
d3.jp(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aD(d0.$5(-24,-14,46,22,5),d1.$3(D.eP7,A.bO,A.ak))
d3.af(D.aGV,8,c8.$1(A.au))
d3.af(D.aGV,4.5,c8.$1(c7?A.aR:A.co))
d3.af(D.ea1,2.2,c8.$1(c7&&A.o.F(A.k.bm(d5*1.6),2)===0?A.aw:A.kt))
d2.restore()
if(c7)d6.$5(d3,"REC",D.eac,A.aw,9)
return!0
case"console":d3.aD(d0.$5(-28,-22,56,44,8),d1.$3(D.ePf,A.j_,A.fa))
d3.aD(d0.$5(-20,-17,40,22,3),c8.$1(A.dH))
if(c7){d2=d5*2.3
d3.af(new B.x(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.b1(new B.a9(-18,t,-15.6,t+8),c8.$1(A.bn))
d2=-9+Math.sin(d2-0.4)*6
d3.b1(new B.a9(15.6,d2,18,d2+8),c8.$1(A.c5))}d3.af(D.e9Y,4,c8.$1(A.aW))
d3.af(D.e7H,2.4,c8.$1(A.aw))
d3.af(D.e7U,2.4,c8.$1(A.bc))
return!0
case"heartmon":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(A.au))
d3.aD(d0.$5(-26,-18,52,28,3),c8.$1(A.dH))
if(c7){d2=$.W()
t=B.a([],x.v)
h=new B.aO(d2.r,A.ao,c6,c6,t)
for(d2=d5*0.5,l=-25;l<=25;++l){u=A.k.F((l+25)/50-d2,1)
if(u<0.1)g=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)g=0.6
else{s=u<0.2?-0.4:0
g=s}f=-4+g*11
if(l===-25){s=new B.b5(l,f)
t.push(s)
p=h.f
if(p!=null)s.bA(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new B.ap(l,f)
t.push(s)
p=h.f
if(p!=null)s.bA(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aS(h,c9.$2(A.bn,1.8))
d6.$5(d3,"72",D.e7I,A.h3,11)
d2=d5*9
d6.$5(d3,"\u2665",D.eag,A.h3.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.af(D.ea6,3,c8.$1(c7?A.bc:A.bq))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aD(d2,c8.$1(A.cB.j(c7?0.5:0.3)))
d3.aD(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.b1(D.eP9,c8.$1(F.tg))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bx(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.v4(0,-1,1)
d3.hH(B.ci(A.J,8,14),c8.$1(A.cY))
d2=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
d2.E(new B.b5(-6,0))
d2.E(new B.ap(-12,-4))
d2.E(new B.ap(-12,4))
d2.E(new B.bE())
d3.aS(d2,c8.$1(A.c9))
d3.af(D.e8o,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.F(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.F(v,2)
r=c9.$2(A.ad,1).K()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.W().r
t=x.v
e=new B.aO(d2,A.ao,c6,c6,B.a([],t))
e.E(new B.b5(-9,22))
e.E(new B.ap(-5,-16))
e.E(new B.ap(5,-16))
e.E(new B.ap(9,22))
e.E(new B.bE())
d3.aS(e,d1.$3(D.ePD,A.c,A.bx))
d3.b1(D.ePC,c8.$1(c7?A.dO:A.bq))
s=new B.aO(d2,A.ao,c6,c6,B.a([],t))
s.E(new B.b5(-7,-22))
s.E(new B.ap(0,-29))
s.E(new B.ap(7,-22))
s.E(new B.bE())
d3.aS(s,c8.$1(A.es))
if(c7){d=Math.sin(d4.y*0.3)
d2=new B.aO(d2,A.ao,c6,c6,B.a([],t))
d2.E(new B.b5(0,-19))
t=d*34
d2.E(new B.ap(t,-26))
d2.E(new B.ap(t,-12))
d2.E(new B.bE())
d3.aS(d2,c8.$1(A.dO.j(0.45)))
d2=c8.$1(A.dO.j(0.35))
d2.z=A.Rk
d3.af(D.e7n,14,d2)}return!0
case"discoball":d3.bL(D.e7s,I.aGR,c9.$2(A.ds,1.4))
d3.af(A.J,16,d1.$3(D.eOV,A.aO,A.ak))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.dq,0.7).K()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.dq,0.7).K()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.F(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.d8m[A.o.F(v,4)].j(0.5+0.5*Math.sin(s+v))).K()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aD(d0.$5(-14,-4,28,24,5),d1.$3(D.eOT,A.cr,A.ak))
d3.aD(d0.$5(-12,-26,24,20,5),d1.$3(D.eON,A.aL,A.bK))
d3.bL(D.e7r,D.e7t,c9.$2(A.bq,1.6))
d3.af(D.e7u,2.2,c8.$1(c7?A.aw:A.bq))
a1=c7&&A.k.F(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a3v[m]
if(c7)t=a1?A.ba:A.f3
else t=A.co
r=c8.$1(t).K()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bx(d2.save())
d2.translate(14,0)
d3.jp(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bL(A.J,D.a5D,c9.$2(A.bK,4))
d2.restore()
d3.bL(D.e9R,D.eaa,c9.$2(A.bK,4))
d3.b1(D.ePB,c8.$1(c7?A.ba.j(0.7):A.aJ))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.axV[m]+1,d2,10,14,2)
p=B.aq(A.bL,A.d8,a2)
p.toString
r=c8.$1(p).K()
t.drawRRect(B.eT(s),r)
r.delete()}d3.aD(d0.$5(-24,-6,48,26,8),d1.$3(D.eP8,A.bO,A.bm))
for(m=0;m<2;++m){l=D.axV[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fz:A.au).K()
t.drawRRect(B.eT(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cY.j(0.5))
s.z=G.p7
r=s.K()
t.drawRRect(B.eT(d2),r)
r.delete()}}d3.bL(D.e80,D.e8h,c9.$2(A.au,3))
return!0
case"ledstrip":d3.aD(d0.$5(-34,-4,68,10,4),c8.$1(A.co))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.F(t+v*40,360)
i=c7?new M.vJ(1,a3,0.8,1).lZ():A.e2
if(c7){s=c8.$1(i.j(0.45))
s.z=G.p7
r=s.K()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).K()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aD(d0.$5(-40,-2,6,6,1),c8.$1(A.ds))
return!0
case"pump":d3.aD(d0.$5(-16,-2,32,22,6),d1.$3(D.eOY,A.cB,A.Ld))
d3.af(D.eah,8,c8.$1(A.qR))
d2=d3.a
J.bx(d2.save())
d2.translate(-2,9)
d3.jp(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.fe,2.4).K()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
t.E(new B.b5(16,6))
t.E(new B.ap(26,6))
t.E(new B.ap(26,-20))
t.E(new B.ap(10,-20))
d3.aS(t,c9.$2(A.bK,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.F(t+v*0.2,1)
r=c8.$1(A.hh).K()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.af(D.e8Q,3.2,c8.$1(A.hh.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bx(d2.save())
d3.jp(0,-0.15)
d3.aD(d0.$5(-26,-14,40,22,10),d1.$3(D.ePa,A.i1,A.tj))
d3.aD(d0.$5(14,-10,12,14,3),c8.$1(A.co))
d3.aD(d0.$5(-10,6,12,22,4),c8.$1(A.e2))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).K()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cY.j(0.4))
d2.z=G.p7
d3.af(D.e7W,8,d2)}return!0
case"headphones":d3.eV(B.ci(A.dD,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bq,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=F.QK[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new B.a9(s,0,s+14,20),A.by,A.oE).K()
d2.drawRRect(B.eT(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=B.bU(new B.x(l,10),10+v*5+A.k.F(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eC.j(0.9-v*0.3),1.6).K()
d2.drawArc.apply(d2,[B.bX(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new B.x(-4,-8-A.k.F(d5*14,8)),A.ko,12)
return!0
case"smartwatch":d3.aD(d0.$5(-8,-30,16,14,3),c8.$1(A.co))
d3.aD(d0.$5(-8,14,16,14,3),c8.$1(A.co))
d3.aD(d0.$5(-14,-17,28,32,8),d1.$3(D.eOR,A.ds,A.e2))
d3.aD(d0.$5(-11,-14,22,26,6),c8.$1(A.dH))
if(c7){a4=new B.S(Date.now(),0,!1)
d6.$5(d3,A.a.aX(A.o.u(B.dk(a4)),2,"0")+":"+A.a.aX(A.o.u(B.h1(a4)),2,"0"),D.e7y,A.bn,9.5)
g=(Math.sin(d5*9)+1)/2
d2=B.aq(A.Eq,A.h3,g)
d2.toString
d6.$5(d3,"\u2665",new B.x(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.F(A.k.bm(d5*2),6)),A.dD,A.c,7)}return!0
case"tablet":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(K.mX))
d3.aD(d0.$5(-30,-22,60,44,6),c9.$2(A.bK,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bx(d2.save())
d2.clipRRect(B.eT(a5),$.px(),!0)
d2.translate(-27,-19)
E.La(d3,D.eVp,d5,c6)
d2.restore()}else d3.aD(a5,c8.$1(D.vl))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aD(a6,d1.$3(new B.a9(a6.a,a6.b,a6.c,a6.d),A.dL,A.d5))
d3.aD(a6,c9.$2(A.b2,1.2))
d3.af(D.aHf,9,c8.$1(A.au))
d3.af(D.aHf,6,c9.$2(A.d8,2))
d3.aD(d0.$5(4,-2,14,10,2),c8.$1(A.au))
d3.aD(d0.$5(-22,-19,44,12,2),c8.$1(A.dH))
d2=A.k.ab(d4.db,1)
t=A.k.ab(c7?d4.dx:d4.e,1)
s=c7?A.bn:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.e8U,s,8.2)
d3.af(D.e7N,2.4,c8.$1(c7?A.bc:A.aJ))
d6.$5(d3,"IN",D.eab,A.ad,6)
d6.$5(d3,"OUT",D.e8I,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.aq(A.bK,A.aw,a7)
t.toString
d3.aD(d2,c8.$1(t))
d3.af(D.e7o,3,c8.$1(A.aJ))
d3.aD(d0.$5(-12,-4,24,18,3),d1.$3(D.eOO,A.e2,A.hG))
d6.$5(d3,"7805",D.a5H,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.deo[m]-1
r=c8.$1(A.e4).K()
d2.drawRect(B.bX(new B.a9(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.F(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).K()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.eaD,A.bj,9)
return!0
case"diode":d3.bL(D.aHj,D.aH3,c9.$2(A.e4,2.4))
d3.aD(d0.$5(-14,-7,28,14,6),c8.$1(A.aE.j(0.85)))
d3.b1(D.eOD,c8.$1(A.bj))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dO.j(0.4))
t.z=A.lw
d3.aD(d2,t)}d2=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
d2.E(new B.b5(-8,-4))
d2.E(new B.ap(-8,4))
d2.E(new B.ap(-1,0))
d2.E(new B.bE())
d3.aS(d2,c8.$1(A.aW))
d6.$5(d3,"one way",D.ea_,A.aA,8)
return!0
case"ldr":d3.bL(D.aHj,D.a5H,c9.$2(A.e4,2.4))
d3.bL(D.aH8,D.aH3,c9.$2(A.e4,2.4))
d3.af(A.J,12,c8.$1(A.d8))
d3.af(A.J,12,c9.$2(A.ts,1.6))
d2=$.W()
t=B.a([],x.v)
a8=new B.aO(d2.r,A.ao,c6,c6,t)
a8.E(new B.b5(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.ap(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bA(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aS(a8,c9.$2(A.bL,1.4))
d2=B.aq(A.bq,A.dO,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.x(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.e9S,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.ed
break A}if("sonytv"===d2){t=A.qM
break A}if("appletv"===d2){t=A.e4
break A}t=F.Es
break A}a9=d2==="lgtv"||d2==="appletv"
d3.aD(d0.$5(-36,-24,72,a9?42:44,6),c8.$1(t))
t=a9?-35:-33
s=a9?-23:-21
p=a9?70:66
a5=d0.$5(t,s,p,a9?40:38,3)
t=a5.a
s=a5.b
if(c7){p=d3.a
J.bx(p.save())
p.clipRRect(B.eT(a5),$.px(),!0)
p.translate(t,s)
E.h0k(d3,new B.as(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.af(D.e8i,1.6,c8.$1(A.bn))}else{d3.aD(a5,c8.$1(D.vl))
p=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
p.E(new B.b5(t,s))
p.E(new B.ap(t+24,s))
p.E(new B.ap(t,s+22))
p.E(new B.bE())
d3.aS(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aD(d0.$5(-22,19,44,3,1.5),c8.$1(A.ds))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=F.js[m]
s=$.W()
p=B.a([],t)
s=new B.aO(s.r,A.ao,c6,c6,p)
p.push(new B.b5(l*30,20))
p.push(new B.ap(l*22,20))
p.push(new B.ap(l*26,26))
p.push(new B.bE())
r=c8.$1(A.ds).K()
p=s.gbK().a.snapshot()
d2.drawPath((s.e=new B.cF(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.e9v,A.bO,5.5)
break
case"appletv":d2=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
d2.E(new B.b5(-8,18))
d2.E(new B.ap(8,18))
d2.E(new B.ap(12,25))
d2.E(new B.ap(-12,25))
d2.E(new B.bE())
d3.aS(d2,c8.$1(D.X2))
d6.$5(d3,"Apple TV",D.e8V,A.bq,4.8)
break
default:d3.aD(d0.$5(-34,19,68,7,3),c8.$1(D.bhz))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dq,0.6).K()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.eaz,F.tg,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.m1.h(0,d2)
b1=b0.b===D.wq
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
b7=B.aq(b6,A.c,0.35)
b7.toString
d3.aD(w,d1.$3(new B.a9(p,o,b4,b5),b7,b6))
a5=d0.$5(t+2,s,b2-4,b3-4,3.5)
if(c7){t=d3.a
J.bx(t.save())
t.clipRRect(B.eT(a5),$.px(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.La(d3,new B.as(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aD(a5,c8.$1(D.vl))
if(b1){t=a5.b
s=a5.d
d3.bL(new B.x(0,t),new B.x(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aD(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.af(new B.x(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aD(d0.$5(-17,-28,34,52,4),c8.$1(A.e2))
d3.aD(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.eaG,A.au,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.F(v,4)===3?14:22
r=c8.$1(A.bm).K()
d2.drawRect(B.bX(new B.a9(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.af(A.aGP,1.6,c8.$1(A.au))}return!0
case"laptop":d3.aD(d0.$5(-30,-28,60,42,4),d1.$3(D.ePj,A.cr,A.bm))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bx(d2.save())
d2.clipRRect(B.eT(b8),$.px(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.La(d3,new B.as(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aD(b8,c8.$1(D.vl))
d2=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
d2.E(new B.b5(-38,16))
d2.E(new B.ap(38,16))
d2.E(new B.ap(34,21))
d2.E(new B.ap(-34,21))
d2.E(new B.bE())
d3.aS(d2,c8.$1(D.X2))
d3.aD(d0.$5(-7,16,14,2,1),c8.$1(A.bm))
return!0
case"imac":d3.aD(d0.$5(-32,-28,64,46,5),d1.$3(D.ePn,A.bM,A.cr))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bx(d2.save())
d2.clipRRect(B.eT(b9),$.px(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.La(d3,new B.as(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aD(b9,c8.$1(D.vl))
d3.af(D.aGK,2,c8.$1(A.bK))
d2=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
d2.E(new B.b5(-6,18))
d2.E(new B.ap(6,18))
d2.E(new B.ap(10,26))
d2.E(new B.ap(-10,26))
d2.E(new B.bE())
d3.aS(d2,c8.$1(D.X2))
return!0
case"monitor":d3.aD(d0.$5(-34,-28,68,40,3),c8.$1(A.ed))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.bx(d2.save())
d2.clipRRect(B.eT(c0),$.px(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.La(d3,new B.as(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aD(c0,c8.$1(D.vl))
d3.b1(D.ePt,c8.$1(A.bm))
d3.aD(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.ds))
return!0
case"projector":if(c7){d2=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
d2.E(new B.b5(14,4))
d2.E(new B.ap(-32,-42))
d2.E(new B.ap(34,-42))
d2.E(new B.bE())
d3.aS(d2,c8.$1(A.dO.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bx(d2.save())
d2.clipRRect(B.eT(c1),$.px(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.La(d3,new B.as(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aD(d0.$5(-26,-4,52,24,6),d1.$3(D.ePb,A.iC,A.ds))
d3.af(D.aGU,7,c8.$1(A.au))
d3.af(D.aGU,4,c8.$1(c7?A.dO:A.co))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dq,1).K()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aD(d0.$5(-34,-10,68,32,12),c8.$1(A.au))
c2=d0.$5(-30,-20,60,28,8)
d3.aD(c2,c8.$1(K.mX))
d3.aD(c2,c9.$2(A.bq,1.2))
if(c7){c3=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
c3.E(new B.b5(-26,4))
c3.E(new B.cR(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new B.ap(22,-16))
d3.aS(c3,c9.$2(A.aR,2.2))
d2=A.k.F(d5*6,48)
d3.af(new B.x(-26+d2,4-d2*0.1),2.4,c8.$1(A.bn))
d6.$5(d3,""+(88+A.o.F(A.k.bm(d5*2),5)),D.e8R,A.c,10)
d6.$5(d3,"km/h",D.e8O,A.aA,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aD(c4,d1.$3(new B.a9(c4.a,c4.b,c4.c,c4.d),A.ds,A.e2))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.bx(d2.save())
d2.clipRRect(B.eT(c5),$.px(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.La(d3,new B.as(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.by.j(0.2))
d2.z=A.mD
d3.af(A.J,26,d2)}else d3.aD(c5,c8.$1(A.M))
d3.bL(D.eal,D.eaq,c9.$2(A.bm,4))
d3.bL(D.e8j,D.e8r,c9.$2(A.bm,4))
return!0}return!1},
fG6:function fG6(){},
fG8:function fG8(){},
fG9:function fG9(){},
fG7:function fG7(){},
h31(d,e,f,g){return new C.aii(d,g,f,e)},
Fz(d,e,f){return new C.ba7(d,e,f)},
aii:function aii(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aij:function aij(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.iG$=h
_.oy$=i
_.nb$=j
_.iH$=k
_.bw$=l
_.aa$=m
_.c=_.a=null},
bG0:function bG0(d,e){this.a=d
this.b=e},
bG1:function bG1(d){this.a=d},
bG_:function bG_(d){this.a=d},
bG2:function bG2(){},
bG3:function bG3(d){this.a=d},
bG4:function bG4(d,e,f){this.a=d
this.b=e
this.c=f},
bFZ:function bFZ(d,e){this.a=d
this.b=e},
bFX:function bFX(d,e){this.a=d
this.b=e},
bFY:function bFY(d,e,f){this.a=d
this.b=e
this.c=f},
bFR:function bFR(d,e){this.a=d
this.b=e},
bFS:function bFS(){},
bFT:function bFT(d,e){this.a=d
this.b=e},
bFU:function bFU(d,e){this.a=d
this.b=e},
bFV:function bFV(d){this.a=d},
bFW:function bFW(d){this.a=d},
bGj:function bGj(d){this.a=d},
bGk:function bGk(){},
bFu:function bFu(){},
bGl:function bGl(d,e){this.a=d
this.b=e},
bGi:function bGi(d,e,f){this.a=d
this.b=e
this.c=f},
bGd:function bGd(d){this.a=d},
bGa:function bGa(d,e,f){this.a=d
this.b=e
this.c=f},
bGb:function bGb(d,e){this.a=d
this.b=e},
bGe:function bGe(d){this.a=d},
bG8:function bG8(d,e){this.a=d
this.b=e},
bG9:function bG9(d,e){this.a=d
this.b=e},
bGc:function bGc(d){this.a=d},
bGf:function bGf(d){this.a=d},
bG6:function bG6(d,e){this.a=d
this.b=e},
bG7:function bG7(d,e){this.a=d
this.b=e},
bGg:function bGg(d){this.a=d},
bG5:function bG5(d){this.a=d},
bGh:function bGh(d){this.a=d},
bFv:function bFv(d,e){this.a=d
this.b=e},
bFO:function bFO(d,e){this.a=d
this.b=e},
bFQ:function bFQ(d,e){this.a=d
this.b=e},
bFP:function bFP(d,e){this.a=d
this.b=e},
bFB:function bFB(d,e){this.a=d
this.b=e},
bFC:function bFC(d){this.a=d},
bFA:function bFA(d){this.a=d},
bFD:function bFD(d,e,f){this.a=d
this.b=e
this.c=f},
bFz:function bFz(d,e){this.a=d
this.b=e},
bFG:function bFG(d,e){this.a=d
this.b=e},
bFH:function bFH(d,e){this.a=d
this.b=e},
bFI:function bFI(d,e){this.a=d
this.b=e},
bFJ:function bFJ(d,e,f){this.a=d
this.b=e
this.c=f},
bFy:function bFy(d,e){this.a=d
this.b=e},
bFK:function bFK(d,e,f){this.a=d
this.b=e
this.c=f},
bFx:function bFx(d,e){this.a=d
this.b=e},
bFL:function bFL(d,e,f){this.a=d
this.b=e
this.c=f},
bFw:function bFw(d,e){this.a=d
this.b=e},
bFM:function bFM(d){this.a=d},
bFN:function bFN(d){this.a=d},
bFE:function bFE(d){this.a=d},
bFF:function bFF(d){this.a=d},
ba7:function ba7(d,e,f){this.a=d
this.b=e
this.c=f},
fe5:function fe5(){},
fe6:function fe6(){},
fe7:function fe7(){},
fdT:function fdT(){},
fe8:function fe8(){},
fdS:function fdS(){},
fe9:function fe9(){},
fdX:function fdX(){},
fdR:function fdR(){},
fdY:function fdY(){},
fdQ:function fdQ(){},
fdZ:function fdZ(){},
fdP:function fdP(){},
fe_:function fe_(){},
fdN:function fdN(){},
fdO:function fdO(){},
fe0:function fe0(){},
fdL:function fdL(){},
fdM:function fdM(){},
fe1:function fe1(){},
fdK:function fdK(){},
US:function US(d){this.a=d},
aCL:function aCL(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dR6:function dR6(d,e){this.a=d
this.b=e},
dRf:function dRf(d){this.a=d},
dRg:function dRg(){},
dRh:function dRh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRi:function dRi(){},
dR5:function dR5(d){this.a=d},
dR4:function dR4(d,e,f){this.a=d
this.b=e
this.c=f},
dR3:function dR3(d,e){this.a=d
this.b=e},
dR1:function dR1(d){this.a=d},
dR2:function dR2(){},
dRe:function dRe(d){this.a=d},
dRd:function dRd(d){this.a=d},
dRb:function dRb(d,e){this.a=d
this.b=e},
dR9:function dR9(d){this.a=d},
dRa:function dRa(){},
dRc:function dRc(d,e,f){this.a=d
this.b=e
this.c=f},
dR7:function dR7(d,e){this.a=d
this.b=e},
dR8:function dR8(){},
dRk:function dRk(d){this.a=d},
dRl:function dRl(d,e){this.a=d
this.b=e},
dRj:function dRj(){},
dRm:function dRm(d,e){this.a=d
this.b=e},
dRn:function dRn(d){this.a=d},
dRo:function dRo(d){this.a=d},
awU:function awU(d,e){this.c=d
this.a=e},
b8m:function b8m(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
cBW:function cBW(d){this.a=d},
b8l:function b8l(d,e){this.b=d
this.a=e},
cBV:function cBV(d){this.a=d},
axc:function axc(){},
axd:function axd(){},
aJ6:function aJ6(){},
bw8:function bw8(){},
i7H(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bU(A.wi,23)
$.W()
b8=B.N()
b8.r=A.au.gp(0)
b9.af(A.wi,25,b8)
b8=B.N()
b8.sar(D.eiF.aA(0,v))
b9.af(A.wi,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.r=A.bj.gp(0)
o.c=A.o.F(u,5)===0?1.8:1
n=o.K()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.D(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.N()
r.r=A.bx.gp(0)
r.c=2
r.d=A.bV
b9.bL(A.wi,new B.x(b8*18,s*18-2),r)
r=B.N()
r.r=A.bj.gp(0)
b9.af(A.wi,3,r)
c2.$5(b9,w?"V":"A",D.eat,A.bj,12)
c2.$5(b9,w?A.k.ab(m,1)+" V":""+A.k.V(m*1000)+" mA",D.e9X,A.au,9.5)
return!0
case"fan":b8=B.by(D.eOK,A.hD)
$.W()
s=B.N()
s.r=A.bq.gp(0)
b9.aD(b8,s)
s=B.N()
s.r=A.ak.gp(0)
b9.b1(D.ePu,s)
s=B.N()
s.r=A.M.j(0.6).gp(0)
b9.af(D.wj,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bx(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.ci(A.aGO,18,10)
r=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
r.r=A.hh.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.K()
b8.drawOval(B.bX(s),n)
n.delete()
b8.restore()}b8=B.N()
b8.r=A.bl.gp(0)
b9.af(D.wj,4,b8)
b8=B.N()
b8.b=A.af
b8.c=2
b8.r=A.cr.gp(0)
b9.af(D.wj,22,b8)
b8=B.N()
b8.b=A.af
b8.c=0.8
b8.r=A.k0.gp(0)
b9.af(D.wj,14,b8)
return!0
case"speaker":l=B.by(D.aML,A.uF)
$.W()
b8=B.N()
b8.sar(D.aoO.aA(0,new B.a9(l.a,l.b,l.c,l.d)))
b9.aD(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=B.N()
b8.sar(D.ej0.aA(0,B.bU(A.cz,15)))
b9.af(A.cz,14+k,b8)
b8=B.N()
b8.r=A.ds.gp(0)
b9.af(A.cz,5,b8)
b8=B.N()
b8.r=A.bm.gp(0)
b9.af(D.aGQ,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=B.bU(D.e8_,6+u*6+A.k.F(b8,6))
q=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
q.b=A.af
q.c=1.8
q.r=A.c5.j(0.9-u*0.2).gp(0)
n=q.K()
s.drawArc.apply(s,[B.bX(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=B.by(D.ePm,A.uF)
$.W()
b8=B.N()
b8.sar(D.bYA.aA(0,new B.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=B.by(D.aMN,A.iw)
s=B.N()
s.r=A.hG.gp(0)
b9.aD(b8,s)
if(b7){i=new B.S(Date.now(),0,!1)
h=B.ET(i)<500?":":" "
g=A.a.aX(A.o.u(B.dk(i)),2,"0")
f=A.a.aX(A.o.u(B.h1(i)),2,"0")
b8=B.N()
b8.r=A.bn.j(0.12).gp(0)
b9.b1(D.aMN,b8)
c2.$5(b9,g+h+f,D.eae,A.bn,21)}b8=B.N()
b8.r=A.cr.gp(0)
b9.af(D.ead,2.4,b8)
b8=B.N()
b8.r=A.cr.gp(0)
b9.af(D.e83,2.4,b8)
return!0
case"calculator":j=B.by(D.eP2,A.hU)
$.W()
b8=B.N()
b8.sar(D.bYk.aA(0,new B.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=B.by(D.eOX,A.hb)
s=B.N()
s.r=(b7?A.Xe:D.bjD).gp(0)
b9.aD(b8,s)
if(b7)c2.$5(b9,"3.14159",D.e9W,A.W5,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=B.by(new B.a9(q,s,q+6,r),A.SF)
$.W()
p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
p.r=(d===3?A.c9:A.bO).gp(0)
n=p.K()
b8.drawRRect(B.eT(q),n)
n.delete()}return!0
case"phone":j=B.by(D.eOU,A.hU)
$.W()
b8=B.N()
b8.r=K.mX.gp(0)
b9.aD(j,b8)
b8=B.N()
b8.b=A.af
b8.c=1.9
b8.r=D.agm.gp(0)
b9.aD(j,b8)
a0=B.by(D.eOM,A.hD)
if(b7){b8=B.N()
b8.sar(D.bZS.aA(0,new B.a9(a0.a,a0.b,a0.c,a0.d)))
b9.aD(a0,b8)
b8=b9.a
J.bx(b8.save())
b8.clipRRect(B.eT(a0),$.px(),!0)
b8.translate(-12,-25)
E.La(b9,D.eV1,c1,b6)
b8.restore()
a1=A.k.F(c1*0.12,1)
b8=B.by(D.eOJ,A.hb)
s=B.N()
s.r=A.aW.gp(0)
b9.aD(b8,s)
s=B.N()
s.r=A.bn.gp(0)
b9.b1(new B.a9(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.e9d,A.c,6)}else{b8=B.N()
b8.r=D.vl.gp(0)
b9.aD(a0,b8)}b8=B.by(D.ePE,D.ej9)
s=B.N()
s.r=A.w.gp(0)
b9.aD(b8,s)
return!0
case"router":j=B.by(D.ePl,A.rC)
$.W()
b8=B.N()
b8.sar(D.bYR.aA(0,new B.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=F.QK[a2]
s=a3<0?-4:4
r=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
r.r=A.co.gp(0)
r.c=4
r.d=A.bV
n=r.K()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.F(A.k.bm(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
s.r=(a4?A.bc:A.aJ).gp(0)
n=s.K()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=B.bU(D.wj,8+u*6+A.k.F(s,6))
q=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
q.b=A.af
q.c=1.8
q.r=A.iE.j(0.9-u*0.2).gp(0)
n=q.K()
b8.drawArc.apply(b8,[B.bX(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=B.by(D.eP1,A.hD)
s=$.W()
r=B.N()
r.r=A.e2.gp(0)
b9.aD(b8,r)
if(b7){b8=B.N()
b8.r=A.aw.j(0.5*a5).gp(0)
b8.z=A.z9
b9.af(A.wi,34,b8)}a6=new B.aO(s.r,A.ao,b6,b6,B.a([],x.v))
a6.E(new B.b5(-16,12))
a6.E(new B.ap(-16,-2))
a6.E(new B.cR(0,-30,16,-2))
a6.E(new B.ap(16,12))
a6.E(new B.bE())
b8=B.N()
b8.r=B.aq(A.es,D.bbK,a5).gp(0)
b9.aS(a6,b8)
b8=B.N()
b8.b=A.af
b8.c=1.4
b8.r=A.c_.gp(0)
b9.aS(a6,b8)
if(b7){b8=b9.a
J.bx(b8.save())
b8.translate(0,-2)
b9.jp(0,c1*7)
s=B.N()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bL(A.J,D.aGQ,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bx(b8.save())
b8.translate(0,a7)
s=$.W().r
r=x.v
j=new B.aO(s,A.ao,b6,b6,B.a([],r))
j.E(new B.b5(-28,8))
j.E(new B.ap(-28,-2))
j.E(new B.ap(-16,-4))
j.E(new B.ap(-10,-16))
j.E(new B.ap(10,-16))
j.E(new B.ap(18,-4))
j.E(new B.ap(28,-2))
j.E(new B.ap(28,8))
j.E(new B.bE())
q=B.N()
q.sar(D.bWW.aA(0,D.ePe))
b9.aS(j,q)
q=new B.aO(s,A.ao,b6,b6,B.a([],r))
q.E(new B.b5(-8,-4))
q.E(new B.ap(-4,-13))
q.E(new B.ap(4,-13))
q.E(new B.ap(4,-4))
q.E(new B.bE())
p=B.N()
p.r=A.fe.gp(0)
b9.aS(q,p)
r=new B.aO(s,A.ao,b6,b6,B.a([],r))
r.E(new B.b5(8,-4))
r.E(new B.ap(8,-13))
r.E(new B.ap(11,-13))
r.E(new B.ap(15,-4))
r.E(new B.bE())
s=B.N()
s.r=A.fe.gp(0)
b9.aS(r,s)
for(a2=0;a2<2;++a2){a3=F.axW[a2]
s=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
s.r=A.au.gp(0)
n=s.K()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bx(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
q.r=A.bO.gp(0)
q.c=1.6
n=q.K()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.F(s+u*8,14)
q=-4+u*5
p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
p.r=A.aA.gp(0)
p.c=1.6
n=p.K()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.W().r
s=x.v
j=new B.aO(b8,A.ao,b6,b6,B.a([],s))
j.E(new B.b5(-18,20))
j.E(new B.ap(-14,-12))
j.E(new B.cR(0,-20,14,-12))
j.E(new B.ap(18,20))
j.E(new B.bE())
r=B.N()
r.sar(D.bY_.aA(0,D.eP0))
b9.aS(j,r)
r=new B.aO(b8,A.ao,b6,b6,B.a([],s))
r.E(new B.b5(14,-10))
r.E(new B.ap(30,-22))
r.E(new B.ap(32,-18))
r.E(new B.ap(16,-4))
r.E(new B.bE())
q=B.N()
q.r=A.e4.gp(0)
b9.aS(r,q)
s=new B.aO(b8,A.ao,b6,b6,B.a([],s))
s.E(new B.b5(-14,-8))
s.E(new B.cR(-34,-6,-18,12))
b8=B.N()
b8.b=A.af
b8.c=5
b8.r=A.au.gp(0)
b9.aS(s,b8)
b8=B.N()
if(b7){s=B.aq(A.cY,A.tq,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.e2
b8.r=s.gp(0)
b9.b1(D.eP_,b8)
if(b7){b8=B.N()
b8.r=A.cY.j(0.3).gp(0)
b8.z=A.mD
b9.af(A.aGM,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.F(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.K()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=B.N()
b8.r=A.au.gp(0)
b9.af(D.e7l,3,b8)
return!0
case"lamp":if(b7){u=A.k.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aO($.W().r,A.ao,b6,b6,B.a([],x.v))
b8.E(new B.b5(-10,-14))
b8.E(new B.ap(-30,24))
b8.E(new B.ap(10,24))
b8.E(new B.ap(8,-14))
b8.E(new B.bE())
s=B.N()
s.r=A.dO.j(0.28*u).gp(0)
b9.aS(b8,s)
s=B.N()
s.r=A.dO.j(0.5*u).gp(0)
s.z=W.HK
b9.af(D.eai,24,s)}b8=B.by(D.ePA,A.hD)
s=$.W()
r=B.N()
r.r=A.e2.gp(0)
b9.aD(b8,r)
r=B.N()
r.r=A.ds.gp(0)
r.c=3
r.d=A.bV
b9.bL(D.e7z,D.aGW,r)
r=B.N()
r.r=A.ds.gp(0)
r.c=3
r.d=A.bV
b9.bL(D.aGW,D.eaj,r)
a9=new B.aO(s.r,A.ao,b6,b6,B.a([],x.v))
a9.E(new B.b5(-14,-16))
a9.E(new B.ap(6,-26))
a9.E(new B.ap(10,-12))
a9.E(new B.ap(-10,-6))
a9.E(new B.bE())
s=B.N()
s.r=(b7?A.aT:A.k1).gp(0)
b9.aS(a9,s)
b8=B.N()
b8.r=(b7?A.c:A.bm).gp(0)
b9.af(D.eak,4,b8)
return!0
case"lights":b8=$.W().r
s=x.v
b0=new B.aO(b8,A.ao,b6,b6,B.a([],s))
b0.E(new B.b5(-34,-6))
b0.E(new B.cR(0,22,34,-6))
r=B.N()
r.b=A.af
r.c=2
r.r=A.hg.gp(0)
b9.aS(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.F(q+u*0.7,1.8)<1.1
if(b2){b3=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
b3.r=D.a2z[u].j(0.6).gp(0)
b3.z=A.Rk
n=b3.K()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=B.a([],s)
b4=new B.aO(b8,A.ao,b6,b6,b3)
b3.push(new B.b5(p-3,o))
b3.push(new B.ap(p+3,o))
b5=o+11
b3.push(new B.ap(p+5,b5))
b3.push(new B.cR(p,o+17,p-5,b5))
b3.push(new B.bE())
p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
if(b2)o=D.a2z[u]
else{o=B.aq(D.a2z[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.K()
p=b4.gbK().a.snapshot()
r.drawPath((b4.e=new B.cF(p)).a,n)
n.delete()}return!0}return C.i7F(b9,c0,c1,c2)},
fN:function fN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fZo(d){var w=D.m1.h(0,d)
return(w==null?null:w.b)===D.zz},
i8R(d,e,f){return B.a4(d,!1).cm(B.uL(null,!1,!0,!0,new C.fKP(e,f),A.eL,null,A.pS,new C.fKQ(),x.H))},
Jh:function Jh(d,e){this.a=d
this.b=e},
m8:function m8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fKP:function fKP(d,e){this.a=d
this.b=e},
fKQ:function fKQ(){},
UB:function UB(d,e,f){this.c=d
this.d=e
this.a=f},
biD:function biD(d,e){var _=this
_.d=$
_.e=null
_.bw$=d
_.aa$=e
_.c=_.a=null},
dNv:function dNv(d){this.a=d},
dNu:function dNu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNs:function dNs(){},
dNt:function dNt(d){this.a=d},
dNr:function dNr(d){this.a=d},
dNq:function dNq(d,e){this.a=d
this.b=e},
dNp:function dNp(d,e){this.a=d
this.b=e},
dNo:function dNo(d){this.a=d},
dNn:function dNn(d){this.a=d},
dNj:function dNj(d){this.a=d},
dNi:function dNi(d){this.a=d},
dNm:function dNm(d,e,f){this.a=d
this.b=e
this.c=f},
dNl:function dNl(d){this.a=d},
dNk:function dNk(d){this.a=d},
bud:function bud(d,e,f){this.b=d
this.c=e
this.a=f},
aeg:function aeg(d,e,f){this.b=d
this.c=e
this.a=f},
aKR:function aKR(){},
a0v(d,e,f,g,h,i){return new C.bt2(d,e,f,g,h,i)},
bt2:function bt2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
feA:function feA(){},
feB:function feB(){},
feC:function feC(){},
feD:function feD(){},
feE:function feE(){},
feF:function feF(){},
feG:function feG(){},
feH:function feH(){},
a7Z:function a7Z(d){this.a=d},
cfI:function cfI(d){this.a=d},
cfJ:function cfJ(){},
cfH:function cfH(d,e){this.a=d
this.b=e},
cfG:function cfG(d){this.a=d},
W8:function W8(d){this.a=d},
aEc:function aEc(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.iG$=f
_.oy$=g
_.nb$=h
_.iH$=i
_.bw$=j
_.aa$=k
_.c=_.a=null},
eHc:function eHc(d){this.a=d},
eH8:function eH8(d){this.a=d},
eH7:function eH7(d,e){this.a=d
this.b=e},
eHa:function eHa(d,e){this.a=d
this.b=e},
eH9:function eH9(d,e){this.a=d
this.b=e},
eHb:function eHb(d){this.a=d},
bup:function bup(d,e,f){this.b=d
this.c=e
this.a=f},
UZ:function UZ(d){this.a=d},
biL:function biL(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.iG$=d
_.oy$=e
_.nb$=f
_.iH$=g
_.bw$=h
_.aa$=i
_.c=_.a=null},
dTk:function dTk(){},
dTl:function dTl(){},
dTf:function dTf(d,e){this.a=d
this.b=e},
dTh:function dTh(d,e){this.a=d
this.b=e},
dTi:function dTi(d){this.a=d},
dTg:function dTg(d){this.a=d},
dTj:function dTj(d){this.a=d},
bpe:function bpe(d,e,f){this.b=d
this.c=e
this.a=f},
Ud:function Ud(d){this.a=d},
bip:function bip(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.iG$=d
_.oy$=e
_.nb$=f
_.iH$=g
_.bw$=h
_.aa$=i
_.c=_.a=null},
dF9:function dF9(){},
dFa:function dFa(){},
dF4:function dF4(){},
dF7:function dF7(d,e){this.a=d
this.b=e},
dF6:function dF6(d,e){this.a=d
this.b=e},
dF8:function dF8(d){this.a=d},
dF5:function dF5(d){this.a=d},
aHB:function aHB(d,e,f){this.a=d
this.b=e
this.c=f},
UR:function UR(d){this.a=d},
biF:function biF(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dQQ:function dQQ(d,e){this.a=d
this.b=e},
dQR:function dQR(d){this.a=d},
dQP:function dQP(d,e){this.a=d
this.b=e},
dQS:function dQS(d){this.a=d},
dQO:function dQO(d,e){this.a=d
this.b=e},
dQT:function dQT(d){this.a=d},
dQN:function dQN(d,e){this.a=d
this.b=e},
dQU:function dQU(d,e){this.a=d
this.b=e},
dQM:function dQM(d,e){this.a=d
this.b=e},
dQV:function dQV(d){this.a=d},
dQL:function dQL(d,e){this.a=d
this.b=e},
dQW:function dQW(d){this.a=d},
dQK:function dQK(d){this.a=d},
dQX:function dQX(d){this.a=d},
dQJ:function dQJ(d){this.a=d},
dQY:function dQY(d){this.a=d},
dQZ:function dQZ(d){this.a=d},
dQI:function dQI(d){this.a=d},
bkB:function bkB(d,e,f){this.b=d
this.c=e
this.a=f},
Vy:function Vy(d){this.a=d},
aDy:function aDy(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
eeI:function eeI(d,e){this.a=d
this.b=e},
eeJ:function eeJ(d,e,f){this.a=d
this.b=e
this.c=f},
eeH:function eeH(d,e,f){this.a=d
this.b=e
this.c=f},
eeK:function eeK(d){this.a=d},
eeG:function eeG(d){this.a=d},
eeO:function eeO(d){this.a=d},
eeN:function eeN(d,e){this.a=d
this.b=e},
eeM:function eeM(d,e){this.a=d
this.b=e},
eeP:function eeP(d,e){this.a=d
this.b=e},
eeL:function eeL(d,e){this.a=d
this.b=e},
eeQ:function eeQ(d){this.a=d},
VI:function VI(d){this.a=d},
aDR:function aDR(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eoD:function eoD(d){this.a=d},
eoE:function eoE(d){this.a=d},
eoB:function eoB(d,e){this.a=d
this.b=e},
eoC:function eoC(d){this.a=d},
eoA:function eoA(d){this.a=d},
eoF:function eoF(d){this.a=d},
eoG:function eoG(d){this.a=d},
eoH:function eoH(d){this.a=d},
eoI:function eoI(d,e){this.a=d
this.b=e},
W1:function W1(d){this.a=d},
bjP:function bjP(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eCu:function eCu(){},
eCD:function eCD(){},
eCz:function eCz(d){this.a=d},
eCy:function eCy(){},
eCA:function eCA(d,e){this.a=d
this.b=e},
eCx:function eCx(d,e){this.a=d
this.b=e},
eCB:function eCB(d){this.a=d},
eCw:function eCw(d,e){this.a=d
this.b=e},
eCC:function eCC(d){this.a=d},
eCv:function eCv(d){this.a=d},
Vx:function Vx(d){this.a=d},
bjk:function bjk(d,e,f,g,h,i,j,k){var _=this
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
_.iG$=f
_.oy$=g
_.nb$=h
_.iH$=i
_.bw$=j
_.aa$=k
_.c=_.a=null},
edN:function edN(){},
edO:function edO(){},
edG:function edG(d){this.a=d},
edF:function edF(d){this.a=d},
edH:function edH(d){this.a=d},
edE:function edE(d){this.a=d},
edI:function edI(d){this.a=d},
edD:function edD(d){this.a=d},
edJ:function edJ(d,e){this.a=d
this.b=e},
edC:function edC(d,e){this.a=d
this.b=e},
edK:function edK(d){this.a=d},
edB:function edB(d,e){this.a=d
this.b=e},
edL:function edL(d){this.a=d},
edA:function edA(d,e){this.a=d
this.b=e},
edM:function edM(d){this.a=d},
edz:function edz(d,e){this.a=d
this.b=e},
bcw:function bcw(d,e,f){this.c=d
this.d=e
this.a=f},
aKF:function aKF(){},
bw5:function bw5(){},
aKW:function aKW(){},
bw9:function bw9(){},
aLn:function aLn(){},
bwh:function bwh(){},
aLN:function aLN(){},
bwp:function bwp(){},
ou(d,e,f,g,h,i){return new C.b67(h,d,f,g,i,e,null)},
hnY(d,e,f,g){var w=null
return B.ca(w,w,!0,w,new C.fOE(g,e,f),d,w,!0,!0,x.H)},
lM(d,e,f,g,h,i,j){return new C.b68(f,j,i,h,g,d,e,null)},
wS(d,e,f){return C.i9G(d,e,f)},
i9G(d,e,f){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$wS=B.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aV.aj$.x.h(0,e)
n=n==null?null:n.gba()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return B.b(r.m_(2),$async$wS)
case 7:q=h
w=8
return B.b(q.hu(A.h0),$async$wS)
case 8:p=h
if(p==null){w=1
break}o=J.eU(A.dC.gaP(p))
w=9
return B.b(C.cqE(B.a([C.hcM(o,"image/png",f+".png")],x.D),"Made in NGMY Core Protocol"),$async$wS)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.I(x.U).f.R(D.aOS)
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$wS,v)},
pW(d,e,f,g){var w,v=$.ars
if(v==="music")return E.dX(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dX(261.63*v,w,f,0,g,"sine")}return C.fU4(v,e,f,g)},
fU4(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return E.dX(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return E.dX(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return E.dX(140+A.o.F(e,12)*9,"",150,0.9,g,v)
case"bubble":return E.dX(260+A.o.F(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":E.dX(t,"",160,-0.7,g*0.4,w)
return E.dX(900,"",90,0,g*0.45,u)
case"zap":return E.dX(t*3,"",150,1.6,g*0.4,"square")
case"click":return E.dX(2600+A.o.F(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":E.dX(320,"",220,-0.7,g*0.35,v)
return E.dX(1500,"",200,0,g*0.22,u)
case"organic":return E.dX(85+A.o.F(e,12)*5,"",190,1.1,g,v)
case"lab":return E.dX(t*1.6,"",140,-0.3,g*0.55,w)
default:return E.dX(t,"",s,0,g*0.5,w)}},
IO(d,e,f,g){var w,v,u,t,s,r,q,p=$.ars
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.L)(e),++w)C.pW(d,e[w],f,g)
return}for(p=B.dc(e,0,B.dG(4,"count",x.S),B.T(e).c),v=p.$ti,p=new B.bS(p,p.gL(0),v.k("bS<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)C.pW(d,s,f,g)
else B.bM(new B.ba(1000*q),new C.cfE(d,s,f,g),u)}},
a7Y(d,e){var w="sine",v="noise"
switch(d){case"kick":E.dX(95,"",200,1.8,e,w)
break
case"snare":E.dX(220,"",140,0,e*0.65,v)
break
case"hat":E.dX(5000,"",50,0,e*0.35,v)
break
case"open":E.dX(5200,"",220,0,e*0.35,v)
break
case"clap":E.dX(1100,"",100,0,e*0.5,v)
break
case"tom":E.dX(150,"",230,1,e,w)
break
case"low":E.dX(100,"",260,0.9,e,w)
break
case"rim":E.dX(1700,"",60,0,e*0.4,"square")
break
case"cow":E.dX(820,"",240,0,e*0.3,"square")
break
case"crash":E.dX(3200,"",650,0,e*0.4,v)
break
case"shake":E.dX(7000,"",90,0,e*0.3,v)
break
default:E.dX(60,"",300,0,e,w)}},
cdA(d){return C.hF_(d)},
hF_(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cdA=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$cdA)
case 7:r=f
q=B.aU(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.U(x.N,x.A)
w=1
break}p=A.S.aL(0,q,null)
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
return B.i($async$cdA,v)},
b0h(d,e){return C.hF0(d,e)},
hF0(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b0h=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$b0h)
case 6:s=g
w=7
return B.b(s.aq("String","ngmy_play_progress_v1_"+d,A.S.ao(e,null)),$async$b0h)
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
return B.i($async$b0h,v)},
b67:function b67(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
csD:function csD(d){this.a=d},
csE:function csE(d,e){this.a=d
this.b=e},
fOE:function fOE(d,e,f){this.a=d
this.b=e
this.c=f},
fOD:function fOD(d){this.a=d},
f3:function f3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
csz:function csz(d){this.a=d},
hm:function hm(d,e,f){this.c=d
this.d=e
this.a=f},
b68:function b68(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
j4:function j4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
csy:function csy(d){this.a=d},
Fe:function Fe(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
csF:function csF(d){this.a=d},
qG:function qG(){},
csA:function csA(d,e,f){this.a=d
this.b=e
this.c=f},
csC:function csC(d){this.a=d},
csB:function csB(){},
cfE:function cfE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cve(){var w=0,v=B.j(x.cL),u,t
var $async$cve=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=C
w=3
return B.b($.qW().bfz("assets/data/world110.json"),$async$cve)
case 3:u=t.hJz(e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cve,v)},
hJz(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.S.aL(0,a2,null)),a1=B.a([],x.m)
for(w=J.aW(a0),v=x.n,u=x.b,t=x.P,s=x.gO;w.C();){r=t.a(w.gT(w))
q=B.a([],s)
for(p=J.a3(r),o=J.aW(d.a(p.h(r,"r")));o.C();){n=o.gT(o)
m=B.a([],u)
for(l=J.aW(d.a(n));l.C();){k=l.gT(l)
j=J.a3(k)
m.push(B.a([B.e3(j.h(k,0)),B.e3(j.h(k,1))],v))}q.push(m)}o=B.cO(p.h(r,"n"))
m=B.cO(p.h(r,"a"))
l=B.cO(p.h(r,"ct"))
j=B.cO(p.h(r,"sr"))
i=B.e3(p.h(r,"pop"))
h=B.e3(p.h(r,"gdp"))
g=B.cO(p.h(r,"inc"))
f=B.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=B.aPJ(g,f,"",0)
f=B.e3(J.q(p.h(r,"c"),0))
p=B.e3(J.q(p.h(r,"c"),1))
e=new C.aaM(o,m,l,j,i,h,g,f,p,q)
e.bxO(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new C.aaN(a1)},
fs8(d){if(d>=1e12)return A.k.ab(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.ab(d/1e9,2)+" billion"
if(d>=1e6)return A.k.ab(d/1e6,1)+" million"
if(d>=1000)return A.k.ab(d/1000,1)+" thousand"
return A.k.ab(d,0)},
GM(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.F(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
aaM:function aaM(d,e,f,g,h,i,j,k,l,m){var _=this
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
aaN:function aaN(d){this.a=d},
v5:function v5(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
P4:function P4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
y6:function y6(d,e,f){this.a=d
this.b=e
this.c=f},
P3:function P3(d){this.a=0
this.b=d
this.c=0},
hLs(d,e,f){return $.hLt.c7(0,d+"|"+B.u(e)+"|"+f.l(),new C.ddh(d,e,f))},
V4:function V4(d){this.a=d},
aCW:function aCW(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.iG$=j
_.oy$=k
_.nb$=l
_.iH$=m
_.bw$=n
_.aa$=o
_.c=_.a=null},
dVR:function dVR(d){this.a=d},
dVQ:function dVQ(d,e){this.a=d
this.b=e},
dVj:function dVj(d){this.a=d},
dVh:function dVh(d){this.a=d},
dVi:function dVi(d,e,f){this.a=d
this.b=e
this.c=f},
dVg:function dVg(d){this.a=d},
dVf:function dVf(){},
dVe:function dVe(d){this.a=d},
dVC:function dVC(d,e){this.a=d
this.b=e},
dVD:function dVD(d,e){this.a=d
this.b=e},
dVr:function dVr(d){this.a=d},
dVs:function dVs(d){this.a=d},
dVq:function dVq(d){this.a=d},
dVt:function dVt(d){this.a=d},
dVk:function dVk(d,e){this.a=d
this.b=e},
dVl:function dVl(d){this.a=d},
dVE:function dVE(d,e){this.a=d
this.b=e},
dVp:function dVp(d,e){this.a=d
this.b=e},
dVI:function dVI(d){this.a=d},
dVB:function dVB(d){this.a=d},
dVJ:function dVJ(d,e){this.a=d
this.b=e},
dVA:function dVA(d,e){this.a=d
this.b=e},
dVK:function dVK(d){this.a=d},
dVz:function dVz(d,e){this.a=d
this.b=e},
dVL:function dVL(d){this.a=d},
dVy:function dVy(d,e){this.a=d
this.b=e},
dVM:function dVM(d){this.a=d},
dVx:function dVx(d,e){this.a=d
this.b=e},
dVN:function dVN(d){this.a=d},
dVw:function dVw(d,e){this.a=d
this.b=e},
dVO:function dVO(d){this.a=d},
dVv:function dVv(d){this.a=d},
dVP:function dVP(d){this.a=d},
dVu:function dVu(d){this.a=d},
dVF:function dVF(d){this.a=d},
dVo:function dVo(d){this.a=d},
dVG:function dVG(d){this.a=d},
dVn:function dVn(d){this.a=d},
dVH:function dVH(d){this.a=d},
dVm:function dVm(d){this.a=d},
dVd:function dVd(){},
dVc:function dVc(d){this.a=d},
dVb:function dVb(d){this.a=d},
beJ:function beJ(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ddh:function ddh(d,e,f){this.a=d
this.b=e
this.c=f},
ddi:function ddi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aL0:function aL0(){},
aL1:function aL1(){},
aeO(d,e,f,g,h){return new C.bsY(d,e,f,g,h)},
bsY:function bsY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fet:function fet(){},
feu:function feu(){},
fev:function fev(){},
few:function few(){},
fex:function fex(){},
fey:function fey(){},
fez:function fez(){},
W4:function W4(d){this.a=d},
bjT:function bjT(){this.d=$
this.c=this.a=null},
eDn:function eDn(d){this.a=d},
eDo:function eDo(d){this.a=d},
eDm:function eDm(d){this.a=d},
eDp:function eDp(){},
eDl:function eDl(d,e){this.a=d
this.b=e},
eDk:function eDk(d){this.a=d},
hLU(){var w,v,u=x.n,t=B.a([],u)
for(w=0;w<260;++w){v=new B.f5()
v.dU(w)
t.push(v.an()*3.141592653589793*2)}u=B.a([],u)
for(w=0;w<260;++w){v=new B.f5()
v.dU(w+900)
u.push(2.2+v.an())}return new C.bjG(new B.cu(null,x.z),new C.P3(A.cW),A.J,A.az,t,u,$,A.bB,0,B.a([],x.X),null,null)},
hLW(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hLV(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hdY(d,e,f){return $.hMw.c7(0,d+"|"+B.u(e)+"|"+f.l(),new C.eXL(d,e,f))},
VR:function VR(d){this.a=d},
bjG:function bjG(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.iG$=j
_.oy$=k
_.nb$=l
_.iH$=m
_.bw$=n
_.aa$=o
_.c=_.a=null},
evR:function evR(d,e){this.a=d
this.b=e},
ew1:function ew1(d,e){this.a=d
this.b=e},
ew2:function ew2(d,e){this.a=d
this.b=e},
evZ:function evZ(d){this.a=d},
ew_:function ew_(d){this.a=d},
ew0:function ew0(d){this.a=d},
ew3:function ew3(d){this.a=d},
evY:function evY(d){this.a=d},
ew4:function ew4(d,e){this.a=d
this.b=e},
ew5:function ew5(d){this.a=d},
evX:function evX(d,e){this.a=d
this.b=e},
ew6:function ew6(d){this.a=d},
evW:function evW(d,e){this.a=d
this.b=e},
ew7:function ew7(d){this.a=d},
evV:function evV(d){this.a=d},
ew8:function ew8(d){this.a=d},
evU:function evU(d){this.a=d},
ew9:function ew9(d){this.a=d},
evT:function evT(d){this.a=d},
ewa:function ewa(d){this.a=d},
evS:function evS(d){this.a=d},
evQ:function evQ(){},
evP:function evP(){},
evO:function evO(d){this.a=d},
evN:function evN(d){this.a=d},
br0:function br0(d,e){this.b=d
this.a=e},
eXL:function eXL(d,e,f){this.a=d
this.b=e
this.c=f},
eXM:function eXM(){},
eXN:function eXN(){},
V5:function V5(d){this.a=d},
aCX:function aCX(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.iG$=k
_.oy$=l
_.nb$=m
_.iH$=n
_.bw$=o
_.aa$=p
_.c=_.a=null},
dVV:function dVV(){},
dWn:function dWn(){},
dW9:function dW9(d,e){this.a=d
this.b=e},
dW0:function dW0(d,e){this.a=d
this.b=e},
dWa:function dWa(d){this.a=d},
dW_:function dW_(d){this.a=d},
dWb:function dWb(d){this.a=d},
dW8:function dW8(d){this.a=d},
dWf:function dWf(d){this.a=d},
dW7:function dW7(d){this.a=d},
dWg:function dWg(d){this.a=d},
dW6:function dW6(d,e){this.a=d
this.b=e},
dWh:function dWh(d){this.a=d},
dWi:function dWi(d){this.a=d},
dW5:function dW5(d,e){this.a=d
this.b=e},
dWj:function dWj(d){this.a=d},
dW4:function dW4(d,e){this.a=d
this.b=e},
dWk:function dWk(d){this.a=d},
dW3:function dW3(d,e){this.a=d
this.b=e},
dWl:function dWl(d){this.a=d},
dW2:function dW2(d,e){this.a=d
this.b=e},
dWm:function dWm(d){this.a=d},
dW1:function dW1(d){this.a=d},
dWc:function dWc(d){this.a=d},
dVZ:function dVZ(d){this.a=d},
dWd:function dWd(d){this.a=d},
dVY:function dVY(d){this.a=d},
dWe:function dWe(d){this.a=d},
dVX:function dVX(d){this.a=d},
dVU:function dVU(d){this.a=d},
dVT:function dVT(){},
dVW:function dVW(d,e){this.a=d
this.b=e},
dVS:function dVS(d){this.a=d},
b9Y:function b9Y(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
VJ:function VJ(d){this.a=d},
bjD:function bjD(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.iG$=e
_.oy$=f
_.nb$=g
_.iH$=h
_.bw$=i
_.aa$=j
_.c=_.a=null},
eoL:function eoL(d,e){this.a=d
this.b=e},
eoM:function eoM(d,e){this.a=d
this.b=e},
eoK:function eoK(d,e){this.a=d
this.b=e},
eoN:function eoN(d,e){this.a=d
this.b=e},
eoJ:function eoJ(d,e){this.a=d
this.b=e},
bqz:function bqz(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eVV:function eVV(d){this.a=d},
aL2:function aL2(){},
bwb:function bwb(){},
aLw:function aLw(){},
bwk:function bwk(){},
aLz:function aLz(){},
bwm:function bwm(){},
hLS(){var w,v,u,t=B.a([],x.d9),s=B.a([],x.g)
for(w=0;w<150;++w){v=new B.f5()
v.dU(w)
v=v.an()
u=new B.f5()
u.dU(w+500)
s.push(new B.x(v,u.an()))}return new C.bio(new B.cu(null,x.z),new C.P3(A.cW),t,A.az,s,$,A.bB,0,B.a([],x.X),null,null)},
Py:function Py(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Ub:function Ub(d){this.a=d},
bio:function bio(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.iG$=i
_.oy$=j
_.nb$=k
_.iH$=l
_.bw$=m
_.aa$=n
_.c=_.a=null},
dEB:function dEB(){},
dEp:function dEp(){},
dEq:function dEq(d,e){this.a=d
this.b=e},
dEr:function dEr(d,e){this.a=d
this.b=e},
dEo:function dEo(d){this.a=d},
dEn:function dEn(d){this.a=d},
dEt:function dEt(d){this.a=d},
dEm:function dEm(d,e){this.a=d
this.b=e},
dEu:function dEu(d){this.a=d},
dEl:function dEl(d){this.a=d},
dEv:function dEv(d){this.a=d},
dEk:function dEk(d){this.a=d},
dEw:function dEw(d){this.a=d},
dEj:function dEj(d){this.a=d},
dEx:function dEx(d){this.a=d},
dEi:function dEi(d){this.a=d},
dEy:function dEy(d){this.a=d},
dEh:function dEh(d){this.a=d},
dEz:function dEz(d){this.a=d},
dEg:function dEg(d){this.a=d},
dEA:function dEA(d){this.a=d},
dEf:function dEf(d){this.a=d},
dEs:function dEs(d){this.a=d},
dEe:function dEe(d){this.a=d},
b9m:function b9m(d,e){this.b=d
this.a=e},
aes:function aes(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
V2:function V2(d){this.a=d},
biO:function biO(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.iG$=p
_.oy$=q
_.nb$=r
_.iH$=s
_.bw$=t
_.aa$=u
_.c=_.a=null},
dUE:function dUE(d){this.a=d},
dUu:function dUu(d,e){this.a=d
this.b=e},
dUv:function dUv(d,e){this.a=d
this.b=e},
dUt:function dUt(d,e){this.a=d
this.b=e},
dUw:function dUw(d){this.a=d},
dUs:function dUs(d){this.a=d},
dUx:function dUx(d){this.a=d},
dUr:function dUr(d,e){this.a=d
this.b=e},
dUy:function dUy(d){this.a=d},
dUq:function dUq(d,e){this.a=d
this.b=e},
dUz:function dUz(d){this.a=d},
dUp:function dUp(d,e){this.a=d
this.b=e},
dUA:function dUA(d){this.a=d},
dUo:function dUo(d,e){this.a=d
this.b=e},
dUB:function dUB(d){this.a=d},
dUn:function dUn(d){this.a=d},
dUC:function dUC(d){this.a=d},
dUm:function dUm(d){this.a=d},
dUD:function dUD(d){this.a=d},
dUl:function dUl(d){this.a=d},
beA:function beA(d,e){this.b=d
this.a=e},
dar:function dar(d){this.a=d},
VF:function VF(d){this.a=d},
bjC:function bjC(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.iG$=f
_.oy$=g
_.nb$=h
_.iH$=i
_.bw$=j
_.aa$=k
_.c=_.a=null},
eo_:function eo_(d,e){this.a=d
this.b=e},
eo0:function eo0(d){this.a=d},
enZ:function enZ(d){this.a=d},
eo1:function eo1(d){this.a=d},
enY:function enY(d){this.a=d},
eo2:function eo2(d){this.a=d},
enX:function enX(d){this.a=d},
eo3:function eo3(d){this.a=d},
enW:function enW(d){this.a=d},
eo4:function eo4(d){this.a=d},
enV:function enV(d,e){this.a=d
this.b=e},
eo5:function eo5(d){this.a=d},
enU:function enU(d,e){this.a=d
this.b=e},
eo6:function eo6(d){this.a=d},
enT:function enT(d,e){this.a=d
this.b=e},
eo7:function eo7(d){this.a=d},
enS:function enS(d,e){this.a=d
this.b=e},
bpP:function bpP(d,e){this.b=d
this.a=e},
aKC:function aKC(){},
bw4:function bw4(){},
aKZ:function aKZ(){},
bwa:function bwa(){},
aLv:function aLv(){},
bwj:function bwj(){},
hcM(d,e,f){var w,v
B.fU(0,0,!1)
w=new B.ll(e,f,$,null)
v=w.bI0(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
hZD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.U(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.C)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.L)(w),++q){p=w[q]
u.push(B.F(["k",p.b,"x",B.o0(A.k.ab(p.c,4)),"y",B.o0(A.k.ab(p.d,4)),"v",p.e,"l",B.o0(A.k.ab(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.o0(A.k.ab(p.as,3)),"ch",p.at,"vc",B.o0(A.k.ab(p.z,3)),"s",B.o0(A.k.ab(p.ch,2))],s,r))}w=B.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.L)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a6(f).k("cq.E"))
A.d.fp(l)
return A.S.ao(B.F(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
i83(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.S.aL(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=B.a([],x.fs)
g=x.bM
f=g.a(J.q(w,"parts"))
f=J.aW(f==null?A.cC:f)
while(f.C()){u=f.gT(f)
t=i.a(u)
e=B.aU(J.q(t,"k"))
s=e==null?"":e
if(!$.qi().ai(0,s)){J.cd(v,null)
continue}d=s
a0=B.aJ(J.q(t,"x"))
if(a0==null)a0=0.5
a1=B.aJ(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.tx(a2,d,a0,a1)
a3.apO(a2,d,a0,a1)
h.push(a3)
r=a3
a1=B.aJ(J.q(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=B.aJ(J.q(t,"l"))
if(d==null)d=r.f
r.f=d
d=B.aJ(J.q(t,"o"))
if(d==null)d=r.r
r.r=d
d=B.jJ(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.jJ(J.q(t,"b"))
r.x=d===!0
d=B.aU(J.q(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aJ(J.q(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aJ(J.q(t,"ch"))
r.at=A.k.N(d==null?0:d)
d=B.aJ(J.q(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aJ(J.q(t,"s"))
r.ch=A.k.D(d==null?1:d,1,2.6)
J.cd(v,r)}i=g.a(J.q(w,"wires"))
i=J.aW(i==null?A.cC:i)
h=x.j
while(i.C()){q=i.gT(i)
p=h.a(q)
f=B.aJ(J.q(p,0))
o=f==null?a5:A.k.N(f)
f=B.aJ(J.q(p,2))
n=f==null?a5:A.k.N(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.q(v,o)
l=J.q(v,n)
if(m!=null&&l!=null)a6.akj(m,A.k.N(B.e3(J.q(p,1))),l,A.k.N(B.e3(J.q(p,3))))}i=B.aJ(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=B.aY(x.S)
h=g.a(J.q(w,"done"))
h=J.aW(h==null?A.cC:h)
while(h.C()){j=h.gT(h)
J.cd(k,A.k.N(B.e3(j)))}return new B.bns(i,k)}catch(a4){return a5}},
fu5(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fu5=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.ay(),$async$fu5)
case 7:r=o.aU(n.q(e.a,"ngmy_electronics_lab_v1"))
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
return B.i($async$fu5,v)},
bCH(d){return C.i9C(d)},
i9C(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bCH=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.ay(),$async$bCH)
case 7:w=6
return B.b(f.aq("String","ngmy_electronics_lab_v1",d),$async$bCH)
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
return B.i($async$bCH,v)},
cqE(d,e){var w=0,v=B.j(x.g7),u
var $async$cqE=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.h1d().xb(d,null,null,null,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cqE,v)}},D,R,M,S,Y,A5,A6,T
J=c[1]
B=c[0]
A=c[2]
Z=c[145]
A7=c[144]
A_=c[136]
A0=c[133]
H=c[127]
A1=c[124]
U=c[123]
A8=c[138]
A2=c[110]
A3=c[100]
G=c[130]
A9=c[137]
A4=c[141]
Aa=c[67]
V=c[76]
Ab=c[84]
Ac=c[80]
N=c[117]
Ad=c[121]
Ae=c[119]
W=c[126]
O=c[128]
X=c[142]
Af=c[140]
L=c[139]
Ag=c[95]
Ah=c[143]
Q=c[118]
I=c[131]
P=c[96]
Ai=c[24]
E=c[26]
F=c[93]
K=c[102]
C=a.updateHolder(c[17],C)
D=c[125]
R=c[135]
M=c[41]
S=c[132]
Y=c[104]
A5=c[134]
A6=c[129]
T=c[97]
C.ajx.prototype={}
C.Vh.prototype={
U(){return new C.bj8(B.U(x.N,x.i),new B.ar(A.as,$.aw()),B.a([],x.X),B.a([],x.L),B.mC(0,null,null))}}
C.bj8.prototype={
gW4(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
this.ch.q()
this.a2()},
Nu(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Nu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aV.aj$.d.c
if(s!=null)s.jN()
p.bP(0,A.c4)
t.m(new C.e6V(t))
t.a.toString
p=t.gW4()
w=3
return B.b(C.byi(C.hNK(q,C.hZu(p),o,t.ay)),$async$Nu)
case 3:s=e
r=s==null?null:J.iY(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=C.i_U(q,p,o)
if(t.c==null){w=1
break}t.m(new C.e6W(t,o,r))
$.aV.x1$.push(new C.e6X(t))
case 1:return B.h(u,v)}})
return B.i($async$Nu,v)},
Y4(d){return this.bZ5(d)},
aVk(){return this.Y4(null)},
bZ5(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Y4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aV.aj$.d.c
if(s!=null)s.jN()
t.f.saU(0,o)
t.m(new C.e77(t))
E.dX(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.byi(C.hUw(o)),$async$Y4)
case 3:r=n.a=m.i7J(f)
p.b=""
if(r!=null&&!C.hZv(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.i_V(o)
q=B.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.ajx(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.e78(p,t))
t.c3s(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Y4,v)},
c3s(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
A.d.a8(w)
w=++m.as
v=m.gW4()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.e73(m))
t=d.d
s=B.U(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.e71(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.e74(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.L)(r),++u){p.$2(o,new C.e75(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.e76(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.by.j(0.1),g=B.n(16),f=B.I(A.by.j(0.35),A.q,1)
if(m.x)j=B.B(B.a([D.eWw,A.bd,B.E(B.d(m.Q,l,l,l,l,l,l,A.Dr,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.fl5
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.TX,l,l,l),1)
v=x.p
w=B.a([B.B(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.f6e,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.vt,B.d(u,l,l,l,l,l,l,D.f8T,l,l,l),l))
w.push(A.cQ)
w.push(B.d(k.b,l,l,l,l,l,l,F.DC,l,l,l))
u=k.e
if(u.length!==0){t=A.aT.j(0.12)
s=B.n(10)
w.push(B.p(l,B.d(u,l,l,l,l,l,l,D.fbg,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.i4,A.cp,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aA
w.push(new B.D(A.Mg,new B.ck(A.aN,A.e,A.j,A.F,l,A.p,l,0,B.a([new B.y(t,l,A.m8,l,l,l,l,l,l,l,l,l),A.bp,new B.bB(1,A.bg,new B.y(q,l,new B.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.L)(j),++p){o=j[p]
t=new B.aR(12,12)
s=new B.aR(12,12)
A.d.v(w,B.a([A.N,new B.bI(A.a8,l,l,B.p(l,new B.y(o.a,l,A.TF,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.by.j(0.3),l,l,new B.bo(t,t,t,t),l,l,A.n),l,l,l,l,A.fX,l,l,l),l),A.av,B.p(l,new B.y(o.b,l,D.fgw,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.c.j(0.07),l,l,new B.bo(s,s,s,s),l,l,A.n),l,l,l,l,A.bT,l,l,l)],v))}if(m.ax)w.push(D.ebC)
j=B.cc(B.w(w,A.F,l,A.e,A.j,0,A.p),A.r,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=B.w(B.a([B.ahN(B.p(l,j,A.f,l,new B.aX(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.bsT,A.eu,l,l,1/0),A.bb,A.ij),B.E(C.h31(m.gW4(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new C.f3("Ask about it",i,new C.e7b(m),l,A.by,l),new C.f3("Invent something new",!i,new C.e7c(m),l,A.by,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dgB[p]
i.push(new C.f3(n,!1,new C.e7d(m,n),l,A.by,l))}f.push(new C.hm(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.d_L[p]
i.push(new C.f3(r,!1,new C.e7e(m,r),l,A.by,l))}f.push(new C.hm(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aM(l,A.U,!1,l,!0,A.r,l,B.aN(),m.f,l,l,l,l,l,2,B.bs(l,new B.b4(4,B.n(16),A.W),l,A.eR,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kI,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.e7f(m,k),l,!1,l,l,!1,l,!0,l,A.aa,l,l,l,l,l,l,l,l,l,l,l,A.dg,!0,A.a4,l,A.an,l,A.aPA,l,l),1)
h=m.at
v=h&&j?D.bHG:A.e0
j=h&&j?"Ask":"Invent"
f.push(B.B(B.a([i,A.ab,new C.j4(v,j,new C.e7g(m,k),A.by,l)],w),A.m,l,A.e,A.j,0,l,l))
return C.ou(A.by,A.jK,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.w(f,A.m,l,A.e,A.Q,0,A.p))}}
C.G1.prototype={}
C.uS.prototype={}
C.VE.prototype={
U(){return new C.aDL(A.J,A.J,A.az,B.aY(x.S),$,A.bB,0,B.a([],x.X),null,null)}}
C.aDL.prototype={
gaWy(){var w,v,u,t=this,s=D.Hc[t.cx],r=D.QL[t.cy],q=D.Co[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.em(w,w.r,B.a6(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.awg[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cM(p,0,new C.ela())},
ga2j(){return D.Hc[this.cx].d/this.gaWy()},
gaNS(){return 0.1*(D.Hc[this.cx].d/0.9)/D.QL[this.cy].d},
a_(){this.a1()
this.oZ()
C.cdA("rocket_lander").bJ(new C.elu(this),x.a)},
c3B(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cW.an()*0.6
w.f=new B.x(0.15+A.cW.an()*0.7,0.08)
w.r=new B.x((A.cW.an()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
pW(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.elv())
return}w=D.rk[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.x(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga2j()
v=v.ad(0,new B.x(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaNS())}if(m.dy){t=m.r
v=v.aF(0,t.aI(0,t.gcG()*6*D.ayd[m.d]))}t=m.r=m.r.ad(0,v.aI(0,d))
s=m.f=m.f.ad(0,t.aI(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.x(-t.a*0.4,t.b)
t=new B.x(A.k.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.x(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Co[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b0h("rocket_lander",B.F(["unlocked",t],x.N,x.A))
C.IO("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga2j()/(D.rk[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ab(m.ga2j()/(D.rk[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dX(80,"",500,0,0.6,"noise")
B.fF()}}if(m.Q&&m.x>0&&A.o.F(A.k.bm(m.CW*20),2)===0)E.dX(90,"",70,0,0.12,"noise")
m.m(new C.elw())},
afw(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.f8n,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new C.f3(e[w].a,f.$1(w),new C.elc(this,g,w),v,h,v))
return new B.D(A.eM,B.w(B.a([u,A.cQ,B.bZ(A.bC,s,A.br,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bDf(d){var w,v,u,t,s=this,r=null,q=s.ga2j()/(D.rk[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaNS()),o=D.ayd[s.d],n=B.n(24),m=d.c,l=B.I(m.j(0.6),A.q,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.av,B.d(d.d+" Gravity here: "+B.u(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.TS,r,r,r),A.R,s.afw("ENGINE: "+D.Hc[s.cx].b,D.Hc,new C.el1(s),new C.el2(s),A.cY),s.afw("FUEL TANK: "+D.QL[s.cy].b,D.QL,new C.el3(s),new C.el4(s),A.bn),s.afw("LANDING GEAR: "+D.Co[s.db].b,D.Co,new C.el5(s),new C.el6(s),A.aR),s.afw("EXTRAS (tap to add)",D.awg,new C.el7(s),new C.el8(s),A.by)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fDg)
o=(q?A.bn:A.cs).j(0.14)
w=B.n(12)
v=A.k.ab(s.gaWy(),2)
u=A.k.ab(s.ga2j()/(D.rk[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.Co[s.db].d*100)+".",r,r,r,r,r,r,D.f90,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.i4,A.bT,r,r,r))
m.push(A.R)
m.push(new B.bI(A.A,r,r,new C.j4(A.o4,"Launch",new C.el9(s),A.bn,r),r))
return B.au(B.p(r,B.cc(B.w(m,A.F,r,A.e,A.Q,0,A.p),A.r,r,A.y,r,A.bQ,r,r,A.ah),A.f,r,A.lH,new B.o(D.bjd,r,l,n,r,r,A.n),r,r,r,A.bT,r,r,r,r),r,r,r)},
aXG(d,e,f,g){var w=null,v=f?A.cY:A.c.j(0.1),u=B.n(18),t=B.I(A.b2,A.q,1)
return B.oh(A.jG,B.p(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.ekZ(e),new C.el_(e),w,w,w,w,new C.el0(e))},
aXF(d,e,f){return this.aXG(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cA(new C.eln(s,D.rk[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rk[w].a:"\ud83d\udd12"
o.push(new C.f3(v,s.d===w,new C.elo(s,w),r,D.rk[w].c,r))}v=B.a([s.aXF(F.amb,new C.elp(s),s.y),A.bd,s.aXG(A.vR,new C.elq(s),s.Q,130),A.bd,s.aXF(A.NV,new C.elr(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aR:A.c.j(0.1)
t=B.n(18)
A.d.v(v,B.a([A.bd,B.aB(r,B.p(r,D.bLP,A.f,r,r,new B.o(u,r,B.I(A.b2,A.q,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.els(s),r,r,r,r,r,r,!1,A.a7)],p))}return C.ou(A.cY,A.jK,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.w(B.a([new C.hm(o,"WORLD",r),B.B(v,A.m,r,A.b7,A.j,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
C.bgf.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rk[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.W(),d=B.N(),a0=j.c,a1=B.aq(D.bm_,a0,0.25)
a1.toString
d.sar(new B.a8(A.b1,A.b6,A.x,B.a([F.adR,a1],x.O),l,l).aA(0,new B.a9(0,0,g,f)))
a2.b1(new B.a9(0,0,g,f),d)
w=new B.f5()
w.dU(5)
for(g=a2.a,v=0;v<70;++v){f=w.an()
d=w.an()
a1=w.an()
u=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
u.r=A.c.j(0.2+w.an()*0.5).gp(0)
t=u.K()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=B.a([],f)
r=new B.aO(e.r,A.ao,l,l,d)
r.E(new B.b5(0,s+14))
q=new B.f5()
q.dU(2)
for(p=0;p<=i;p+=18){e=new B.ap(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.an()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bA(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.E(new B.ap(i,h))
r.E(new B.ap(0,h))
r.E(new B.bE())
e=$.W()
d=B.N()
d.r=B.aq(a0,A.w,0.6).gp(0)
a2.aS(r,d)
o=B.ci(new B.x(k.ax*i,s+10),8,k.ay*i)
d=B.by(o,A.iw)
a0=B.N()
a0.r=A.bc.gp(0)
a2.aD(d,a0)
a0=B.by(o.cs(2),A.rC)
d=B.N()
d.b=A.af
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aD(a0,d)
if(k.as==="ready")return
d=k.f
J.bx(g.save())
g.translate(d.a*i,d.b*h)
a2.jp(0,k.w)
i=k.as
if(i==="crashed"){k=B.N()
k.r=A.cY.j(0.6).gp(0)
k.z=W.HK
a2.af(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new B.aO(i,A.ao,l,l,B.a([],f))
n.E(new B.b5(-8,18))
n.E(new B.ap(0,44+Math.sin(k.CW*40)*8))
n.E(new B.ap(8,18))
n.E(new B.bE())
k=B.N()
k.r=A.aT.gp(0)
a2.aS(n,k)
i=new B.aO(i,A.ao,l,l,B.a([],f))
i.E(new B.b5(-4,18))
i.E(new B.ap(0,32))
i.E(new B.ap(4,18))
i.E(new B.bE())
k=B.N()
k.r=A.c.gp(0)
a2.aS(i,k)}k=e.r
m=new B.aO(k,A.ao,l,l,B.a([],f))
m.E(new B.b5(0,-26))
m.E(new B.cR(14,-10,11,18))
m.E(new B.ap(-11,18))
m.E(new B.cR(-14,-10,0,-26))
m.E(new B.bE())
i=B.N()
i.sar(D.bYt.aA(0,D.eOS))
a2.aS(m,i)
i=B.N()
i.r=A.aR.gp(0)
a2.af(D.wj,5,i)
i=new B.aO(k,A.ao,l,l,B.a([],f))
i.E(new B.b5(-11,6))
i.E(new B.ap(-20,20))
i.E(new B.ap(-11,18))
i.E(new B.bE())
h=B.N()
h.r=A.aw.gp(0)
a2.aS(i,h)
f=new B.aO(k,A.ao,l,l,B.a([],f))
f.E(new B.b5(11,6))
f.E(new B.ap(20,20))
f.E(new B.ap(11,18))
f.E(new B.bE())
k=B.N()
k.r=A.aw.gp(0)
a2.aS(f,k)
g.restore()},
av(d){return!0}}
C.aLt.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bwi.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.bvj()}}
C.aRo.prototype={}
C.a2L.prototype={}
C.b9p.prototype={}
C.Uc.prototype={
U(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eC(["skin"],x.N),o=new Float32Array(0)
return new C.aCg(w,v,u,t,s,r,q,new B.cu(null,x.z),p,D.Kq,D.Kq,A.az,A.cW,o,new Int32Array(0),$,A.bB,0,B.a([],x.X),null,null)}}
C.aCg.prototype={
a_(){var w=this
w.a1()
w.oZ()
w.as=new C.c0I(w.gcbJ())
new C.dF2(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a7(0)
v.d=null}this.bus()},
cbK(d){var w,v=this
if(v.c==null)return
w=J.a3(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f0(0,B.F(["t","init","data",$.hd0],x.N,x.A))
v.at=!0
v.ax=""
v.ayk()
break
case"pick":v.m(new C.dEF(v,d))
break
case"shot":v.aho(B.u(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.u(w.h(d,"text")))
break}},
ayk(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aue[q.CW]
v=new C.dEG()
u=q.ay
u=B.C(u,B.a6(u).k("cq.E"))
A.d.fp(u)
t=x.N
s=B.F(["layers",u,"skinMode",q.ch,"tone","#"+B.u(v.$1(w.b))+B.u(v.$1(w.c))+B.u(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.S.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=B.U(t,x.A)
u.n(0,"t","state")
u.v(0,s)
v.f0(0,u)}},
aho(d){return this.csB(d)},
csB(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aho=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cF.aK(A.a.b3(d,A.a.cK(d,",")+1))
w=6
return B.b(C.cqE(B.a([C.hcM(r,"image/png","body.png")],x.D),"Made in NGMY Core Protocol"),$async$aho)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.I(x.U).f.R(D.aOS)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aho,v)},
axN(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
pW(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bm(w)!==A.k.bm(v.ok)){C.a7Y("kick",0.4)
v.a4Z(170,new C.dF3())}v.ok=w
return},
ahd(d){var w,v,u,t,s=this
s.m(new C.dEH(s,d))
if(d==null){s.fx=D.Kq
s.dy=1
w=s.as
if(w!=null)w.f0(0,B.F(["t","focus","group",null],x.N,x.A))
return}w=s.d.e
v=B.T(w).k("a_<1>")
u=B.C(new B.a_(w,new C.dEI(d),v),v.k("J.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.M(0,t)
if(s.ch===2)s.ch=1}s.ayk()
w=s.as
if(w!=null)w.f0(0,B.F(["t","focus","group",d],x.N,x.A))
s.go=0
s.cv0(t,d)
return},
cv0(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){C.a7Y("kick",0.8)
this.a4Z(260,new C.dEJ())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dX(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a4Z(w*70,new C.dEK(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dX(110,"",360,0.7,0.3,"saw")
else C.fU4("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":E.dX(210+e.length*4,"",80,0.6,0.55,"tri")
E.dX(2400,"",20,0,0.3,v)
break
case"muscle":E.dX(70,"",150,1,0.6,"sine")
break
case"vessel":E.dX(300,"",380,0.4,0.22,v)
C.a7Y("kick",0.3)
break
default:C.fU4("organic",2+A.o.F(e.length,6),200,0.4)}},
czA(d){this.m(new C.dEM(this,d))},
aXY(){var w,v,u,t,s,r,q,p=this,o=B.aY(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
if(p.axN(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.M(0,s.a)}q=B.C(o,o.$ti.k("cq.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.az(w)]
p.p4=""},
bUJ(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new C.dEC(u,w,d))
v=x.t
C.IO("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.a4Z(1100,new C.dED(u))
return}if(d==null){if(u.cx!=null)u.ahd(null)
return}u.ahd(d)},
bYp(d,e){var w,v=this,u=null,t=B.n(18),s=B.I(A.c5.j(0.5),A.q,1)
if(v.p1){w=v.p2
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.f4M,u,u,u)}else if(d==null||e==null)w=D.fiE
else{w=x.p
w=B.B(B.a([B.E(B.w(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hX,u,u,u),A.cQ,B.d(e.b,u,u,u,u,u,u,F.DC,u,u,u)],w),A.F,u,A.e,A.Q,0,A.p),1),B.aI(u,u,u,u,D.bOg,u,u,u,new C.dEE(v),u,u,u,u,"Back to the whole body",A.cc)],w),A.F,u,A.e,A.j,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(D.Wb,u,s,t,u,u,A.n),u,u,u,u,H.ahP,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.drl.h(0,g)
i.ayk()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d9g
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,B.L)(v),++s){r=v[s]
if(i.axN(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=B.a([B.aI(h,h,h,h,D.qa,h,h,h,new C.dET(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bI:B.DO(h,A.qm,q)}else q=A.kF
q=B.w(B.a([B.E(q,1),new B.D(F.YI,i.bYp(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){o=D.d1g[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new C.f3(l,n,new C.dEU(i,o),o.c,A.c5,h))}p=B.a([new C.hm(p,h,h)],v)
if(!i.p1&&w.length!==0){n=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.L)(w),++s){k=w[s]
n.push(new C.f3(k,k===i.cx,new C.dEV(i,k),h,A.aT,h))}p.push(new C.hm(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(C.lM(A.cs,""+A.k.V(n)+" beats/min","Heart rate",180,40,new C.dEW(i),n))}if(i.ch>0&&t.a===0){n=B.a([],v)
for(j=0;j<5;++j)n.push(new C.Fe(D.aue[j],i.CW===j,new C.dEX(i,j),!1,h))
p.push(new C.hm(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=B.a([new C.f3("Spin",n,new C.dEY(i),D.al0,A.aR,h),new C.j4(A.o2,"Reset view",new C.dEZ(i),A.c,h),new C.f3(l,m,new C.dF_(i),A.Gs,A.aT,h)],v)
if(t.t(0,"organ"))v.push(new C.f3("Heartbeat sound",i.k4,new C.dF0(i),A.ua,A.cs,h))
p.push(new C.hm(v,h,h))
return C.ou(A.c5,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.w(p,A.m,h,A.e,A.Q,0,A.p))}}
C.aKD.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.aKE.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.bur()}}
C.c0I.prototype={
kG(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hj6
$.hj6=v+1
u="ngmy-body-viewer-"+v
$.yK()
$.qh().pY(u,new C.c0J(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fL(v,"message",new C.c0K(t),!1,x.gA)
t.b=u},
f0(d,e){var w,v
try{w=this.c
if(w!=null){w=B.byf(w.contentWindow)
if(w!=null)J.fQl(w,e,"*")}}catch(v){}}}
C.y8.prototype={}
C.Cj.prototype={}
C.no.prototype={}
C.ba6.prototype={}
C.Ug.prototype={
U(){var w=x.N,v=x.y,u=x.S
return new C.aCi(B.U(w,x.a2),B.a([],x.cB),B.U(w,v),B.U(w,v),B.U(w,u),A.az,A.J,A.J,B.aY(u),$,A.bB,0,B.a([],x.X),null,null)}}
C.aCi.prototype={
a_(){var w=this
w.a1()
w.oZ()
w.aci()
$.aV.x1$.push(new C.dGI(w))},
aci(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aci=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$aci)
case 6:q=e.tf("ngmy_circuit_passed_v1")
r=q==null?A.U:q
if(s.c!=null)s.m(new C.dGm(s,r))
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
return B.i($async$aci,v)},
acC(d){return this.c1c(d)},
c1c(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$acC=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.M(0,d)
u=3
w=6
return B.b(B.ay(),$async$acC)
case 6:r=f
q=s.cx
p=B.a6(q).k("jR<cq.E,m>")
q=B.C(new B.jR(q,new C.dGp(),p),p.k("J.E"))
r.aq("StringList","ngmy_circuit_passed_v1",q)
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
return B.i($async$acC,v)},
awy(d,e,f,g){var w="c"+this.y++,v=new C.Cj(w,e,f,g)
this.d.n(0,w,v)
return v},
mx(d,e,f){return this.awy(0,e,f,0)},
abE(d,e){var w
if(D.z7.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new B.x(-36,w))},
tE(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aRT(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.nb$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.du(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.e6(m,D.cMe[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tE(p,0)&&n.tE(p,1)
break
case"or":p=q.a
o=n.tE(p,0)||n.tE(p,1)
break
case"xor":p=q.a
o=n.tE(p,0)!==n.tE(p,1)
break
case"nand":p=q.a
o=!(n.tE(p,0)&&n.tE(p,1))
break
case"nor":p=q.a
o=!(n.tE(p,0)||n.tE(p,1))
break
case"not":o=!n.tE(q.a,0)
break
default:o=n.tE(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bNo(){return this.aRT(null)},
pW(d){var w,v,u,t,s,r,q,p,o,n=this
n.bNo()
if(!n.ax)return
for(w=n.d,w=new B.bc(w,B.a6(w).k("bc<2>")).gae(0),v=new B.f4(w,new C.dGJ()),u=n.f,t=n.w,s=0;v.C();){r=w.gT(0).a
if(u.h(0,r)===!0){q=n.nb$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.nb$)
o=s+1
E.dX(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
awz(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
m1(d,e){var w=this.x
return new B.x(d*w.a,e*w.b)},
asN(d){var w=this
if(w.x.A(0,A.az)){$.aV.x1$.push(new C.dGk(w,d))
return}w.m(new C.dGl(w,d))},
cvi(d){this.m(new C.dGq(this,d,$.bD2()[d]))},
c5S(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bD2()[a0]
v=d.d
u=B.a6(v).k("bc<2>")
t=u.k("a_<J.E>")
s=t.k("J.E")
r=B.C(new B.a_(new B.bc(v,u),new C.dGf(),t),s)
A.d.aZ(r,new C.dGg())
q=B.C(new B.a_(new B.bc(v,u),new C.dGh(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dGi(d,w))
return}u=d.r
p=B.dO(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dz(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h1(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aRT(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lj(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aH(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.m(new C.dGj(d,o,a0))},
axk(d){var w,v,u,t,s=this.d,r=B.a6(s).k("bc<2>")
s=B.C(new B.bc(s,r),r.k("J.E"))
r=B.T(s).k("dx<1>")
s=new B.dx(s,r)
s=new B.bS(s,s.gL(0),r.k("bS<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ce7(d){var w,v,u,t,s,r=this.d,q=B.a6(r).k("bc<2>")
r=B.C(new B.bc(r,q),q.k("J.E"))
q=B.T(r).k("dx<1>")
r=new B.dx(r,q)
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
bYi(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.z7.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.abE(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.z(p,o)
s=l}}}return t},
bMe(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.abE(p,o)
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
c5U(d){var w,v,u,t=this,s=t.axk(d)
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
E.dX(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dGr())
return}u=t.bMe(d)
if(u!=null)t.m(new C.dGs(t,u))
else t.m(new C.dGt(t))},
avn(d){return this.c0c(d)},
c0c(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$avn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.axk(d)
if(s==null){w=1
break}B.jB()
t.m(new C.dGo(t,s))
case 1:return B.h(u,v)}})
return B.i($async$avn,v)},
bz5(d){if(this.x.A(0,A.az))return
this.m(new C.dGe(this,d,A.cW))
B.eZ()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bD2()[g]
g=x.p
v=B.a([B.aI(h,h,h,h,B.X(i.ax?A.ua:O.C0,A.ad,h,h,h,21),h,h,h,new C.dGC(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.n(16)
s=A.cn.j(0.14)
r=B.I(A.cn.j(0.5),A.q,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.f3W,h,h,h),B.d(w.b,h,h,h,h,h,h,D.fc9,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.lS,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bn:A.f1,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.B(B.a([B.E(B.w(q,A.F,h,A.e,A.j,0,A.p),1),B.bG(D.ftE,i.gc5R(),B.bm(A.cn,h,h,h,h,h,h,h,h,h,h,A.cc))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,V.Mp,D.btw,h,h,1/0))}u.push(B.E(B.cA(new C.dGD(i)),1))
if(f!=null){t=B.n(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.d(D.z7.h(0,r).a+": "+D.z7.h(0,r).e,h,h,h,h,h,h,A.rP,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A6.ahz,A.bT,h,h,1/0))}u=B.w(u,A.m,h,A.e,A.j,0,A.p)
t=B.a([],g)
for(s=D.z7.gdQ(D.z7),s=s.gae(s);s.C();){r=s.gT(s)
q=new B.aR(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.az(o.j(0.5),1,A.q,-1)
t.push(B.aB(h,B.p(h,B.w(B.a([B.X(p.b,o,h,h,h,20),A.bz,new B.y(p.a,h,D.aQL,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new B.o(n,h,new B.bO(m,m,m,m),new B.bo(q,q,q,q),h,h,A.n),h,h,h,A.fB,Ag.Ml,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dGE(i,r),h,h,h,h,h,h,!1,A.a7))}s=B.a([],g)
for(l=0;l<4;++l){k=D.ddB[l]
s.push(new C.j4(A.NW,k.b,new C.dGF(i,k),A.cn,h))}s.push(new C.j4(D.Nz,"Clear",new C.dGG(i),A.cs,h))
r=B.a([],g)
for(j=0;q=$.bD2(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.e9:A.lp
o=i.ay
n=i.cx.t(0,j)?A.bn:A.bH
r.push(new C.f3(q.a,o===j,new C.dGH(i,j),p,n,h))}return C.ou(A.cn,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.w(B.a([new C.hm(t,"PARTS",h),new C.hm(s,"TRY",h),new C.hm(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
C.bap.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=B.N()
w.r=D.acq.gp(0)
a7.b1(new B.a9(0,0,0+a5,0+a6),w)
v=B.N()
v.r=A.c.j(0.05).gp(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.K()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,B.L)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.abE(j,m.c)
f=q.h(0,l)===!0
l=$.W()
e=B.a([],p)
d=new B.aO(l.r,A.ao,a4,a4,e)
e.push(new B.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new B.pF(h+a0,i,l-a0,a1,l,a1))
if(f){l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.b=A.af
l.c=9
l.r=A.bH.j(0.28).gp(0)
l.z=G.p7
s=l.K()
l=d.gbK().a.snapshot()
w.drawPath((d.e=new B.cF(l)).a,s)
s.delete()}l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.b=A.af
l.c=3.2
l.d=A.bV
l.r=(f?A.dO:A.bq).gp(0)
s=l.K()
l=d.e
w.drawPath((l==null?d.e=new B.cF(d.gbK().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ad(0,D.Ih)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new B.aO($.W().r,A.ao,a4,a4,B.a([],p))
w=a3.b
p.E(new B.b5(a6,w))
r=g.b
p.E(new B.pF(a6+a0,w,a5-a0,r,a5,r))
r=B.N()
r.b=A.af
r.c=3
r.r=A.ad.gp(0)
a7.aS(p,r)}for(a5=new B.du(o,o.r,o.e);a5.C();)this.c5T(a7,a5.d)},
c5T(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.z7.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.ci(a0.c,64,64)
s=B.by(t,A.l9)
r=w.cy===v
q=s.eR(A.cz)
$.W()
p=B.N()
p.r=A.w.j(0.55).gp(0)
p.z=A.mD
d.aD(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.N()
p.sar(new B.c_(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.K],x.O),g,g).aA(0,B.bU(a0.c,52)))
d.af(q,52,p)}q=s.eR(A.cH)
p=B.N()
o=e.c
p.r=B.aq(o,A.w,0.65).gp(0)
d.aD(q,p)
n=u?0.35:0
q=B.N()
p=B.aq(o,A.c,0.1+n)
p.toString
m=B.aq(o,A.w,u?0.2:0.45)
m.toString
q.sar(new B.a8(A.b1,A.b6,A.x,B.a([p,m],x.O),g,g).aA(0,t))
d.aD(s,q)
q=B.N()
q.b=A.af
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aD(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.u8:D.bI7}else l=e.b
k=C.fVR(B.lj(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a6(d,v.aF(0,new B.x(p/2,q.gbf(q)/2)))
j=C.fVR(e.a,10.5,A.c,g,g,A.H)
j.a6(d,a0.c.ad(0,new B.x(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.fVR(f,9,u?A.dO:A.c_,g,g,A.u)
i.a6(d,a0.c.ad(0,new B.x(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aYA(d,w.abE(a0,h),o)
this.aYA(d,a0.c.ad(0,D.Ih),o)},
aYA(d,e,f){var w
$.W()
w=B.N()
w.r=D.acq.gp(0)
d.af(e,8.5,w)
w=B.N()
w.b=A.af
w.c=2.2
w.r=f.gp(0)
d.af(e,8.5,w)
w=B.N()
w.r=A.c.gp(0)
d.af(e,3.2,w)},
av(d){return!0}}
C.aKI.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bw6.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.buw()}}
C.Nh.prototype={
U(){return new C.aCz(B.mC(0,null,null))}}
C.Kk.prototype={
a3(){return"_UnfoldStyle."+this.b}}
C.Az.prototype={}
C.aCz.prototype={
c5Y(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.m(new C.dMy(w,e))},
c_5(){var w=this
w.e.q()
w.e=B.mC(w.f,null,null)
w.m(new C.dMx(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.oq(t,B.c6(v,A.bY,t?new C.bq9(w.e,w.gc5X(w),new C.dMz(d),v):new C.aGK(u,new B.cw(u.b,x.gj)),v,!1,!1,v,!1),new C.dMA(w,u),x.K)}}
C.brJ.prototype={}
C.bq9.prototype={
aYB(d,e){var w=null
return new B.D(H.Zb,B.w(B.a([B.d(d,w,w,w,w,w,w,D.f4w,w,w,w),A.bz,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=B.B(B.a([B.aI(v,v,v,v,P.ni,v,v,v,w.e,v,v,v,v,v,v),A.rJ,D.bzn],u),A.m,v,A.e,A.j,0,v,v),s=w.aYB("STUDIOS","Play, make things, and keep what you make")
$.bD3()
return B.bl(!0,B.w(B.a([new B.D(D.byq,t,v),B.E(B.vz(0,v,A.r,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,B.a([new B.ma(s,v),new B.nS(A.hM,B.OR(new B.ot(new C.eVs(d),9,!0,!0,!0,0,B.t1(),v),D.aOH),v),new B.ma(w.aYB("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.nS(D.btD,B.OR(new B.ot(new C.eVt(w),6,!0,!0,!0,0,B.t1(),v),D.aOH),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0)}}
C.aex.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.n(20),n=B.n(20),m=B.aq(F.n0,p,0.3)
m.toString
w=x.O
m=B.a([m,D.afa],w)
v=B.I(p.j(0.6),A.q,1.2)
u=x.V
t=B.a([new B.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=B.aq(p,A.w,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ac(0,A.G,p.j(0.5),A.J,12)],u)
return B.aF(!1,A.a1,!0,r,B.aK(!1,o,!0,B.eB(B.w(B.a([B.p(r,B.X(q.c,A.c,r,r,r,24),A.f,r,r,new B.o(r,r,r,r,u,new B.a8(A.ay,A.aC,A.x,w,r,r),A.a5),r,44,r,r,r,r,r,44),A.N,B.d(q.a,r,2,A.a2,r,r,r,B.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cQ,B.d(q.b,r,2,A.a2,r,r,r,B.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b7,A.j,0,A.p),r,new B.o(r,r,v,n,t,new B.a8(A.ay,A.aC,A.x,m,r,r),A.n),r,A.FK,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
C.adp.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.n(20),g=B.n(20),f=B.aq(F.n0,A.d.gH(i),0.24)
f.toString
w=x.O
f=B.a([f,D.afa],w)
v=B.I(A.d.gH(i).j(0.35),A.q,1)
u=x.V
t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cz,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.aR(6,6)
m=B.a([A.d.gH(i),A.d.gak(i)],w)
l=B.a([new B.ac(0,A.G,A.w.j(0.45),H.aHe,0)],u)
r.push(B.p(k,B.X(q[p],A.c,k,k,k,11),A.f,k,k,new B.o(k,k,k,new B.bo(n,n,n,n),l,new B.a8(A.a3,A.a8,A.x,m,k,k),A.n),k,17,k,new B.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.w(r,A.m,k,A.e,A.Q,0,A.p)
u=B.aq(A.d.gH(i),A.d.gak(i),0.4)
u.toString
return B.aF(!1,A.a1,!0,k,B.aK(!1,h,!0,B.eB(B.w(B.a([new B.a7(58,k,w,k),A.R,B.d(j.b,k,2,A.a2,k,k,k,B.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.av,B.X(A.BZ,A.d.gH(i),k,k,k,18)],s),A.m,k,A.b7,A.j,0,A.p),k,new B.o(k,k,v,g,t,new B.a8(A.ay,A.aC,A.x,f,k,k),A.n),k,A.FK,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag)}}
C.PZ.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.aq(A.d.gak(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,B.c0(j,new B.o(h,j,j,B.n(22),j,j,A.n),A.be),j,j,2,2,8,j)
u=B.n(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.S7,26),new B.ac(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.n(22)
p=B.aq(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gak(i)
i=B.aq(A.d.gak(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bT(0,B.c0(j,new B.o(j,j,j,j,j,new B.a8(A.ay,A.aC,A.x,B.a([p,o,n,i],m),D.diU,j),A.n),A.be),0,0,0),B.ao(j,B.c0(j,new B.o(j,j,j,j,j,new B.a8(A.b1,A.b6,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.be),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bT(0,B.b3(j,j,j,new C.br7(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.I(A.c.j(0.5),A.q,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.p(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a5),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.f66,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.av,B.d(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a6,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Tj)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.n(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.fL,B.B(B.a([s,A.eo,B.E(B.w(p,A.F,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(B.bT(0,B.e1(B.el(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=B.n(22)
m.push(B.bT(0,B.e1(B.c0(j,new B.o(j,j,B.I(A.c.j(0.3),A.q,1.2),i,j,j,A.n),A.be),!0,j),0,0,0))
return new B.a7(w,v,new B.an(A.V,j,A.a9,A.f,B.a([h,B.bT(0,B.c0(B.bw(q,new B.an(A.V,j,A.a9,A.r,m,j),A.aq),new B.o(j,j,j,u,r,j,A.n),A.be),0,0,0)],l),j),j)}}
C.br7.prototype={
a6(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a9(r,-10,s,w)
u=d.a
J.bx(u.save())
u.translate(v.gbN().a,v.gbN().b)
d.jp(0,0.35)
t=B.ci(A.J,(w- -10)*1.6,s-r)
$.W()
s=B.N()
s.sar(new B.a8(A.a3,A.a8,A.x,B.a([A.K,A.c.j(0.3),A.K],x.O),null,null).aA(0,t))
d.b1(t,s)
u.restore()},
av(d){return d.b!==this.b}}
C.bqD.prototype={
B(d){var w=null,v=B.n(22),u=B.a([D.bhj,D.aen],x.O),t=this.e,s=B.I(A.d.gH(t).j(0.4),A.q,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.ke,24)],x.V),q=B.n(22),p=A.d.gH(t)
return new B.a7(this.c,this.d,B.c0(B.bw(q,B.b3(B.au(B.X(A.jI,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.b97(p,w),A.az),A.aq),new B.o(w,w,s,v,r,new B.a8(A.ay,A.aC,A.x,u,w,w),A.n),A.be),w)}}
C.b97.prototype={
a6(d,e){var w,v,u,t,s,r,q,p
$.W()
w=B.N()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.K()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.K()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ei(A.J)
$.W()
t=B.N()
t.b=A.af
t.c=1.4
t.r=v.j(0.35).gp(0)
d.af(u,30,t)},
av(d){return!1}}
C.aGK.prototype={
U(){return new C.aGL(new B.cu(null,x.z),null,null)}}
C.aGL.prototype={
gtZ(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,D.br0,null,1,null,v)
w.cL(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
gZp(){var w,v=this,u=v.e
if(u===$){w=B.bj(null,A.fK,null,1,null,v)
w.fh(0,!0)
v.e!==$&&B.bL()
v.e=w
u=w}return u},
gawA(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc5V(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaV3(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaVM(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb67(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a1()
var w=this.gtZ()
w.dd()
w.dV$.M(0,this.gcv1())},
cv2(){var w,v,u,t,s,r,q,p=this,o=p.gtZ().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gawA().a){case 0:w=D.nl
break
case 1:w=D.uh
break
case 2:w=D.a2D
break
case 3:w=D.nl
break
case 4:w=D.d6f
break
case 5:w=D.uh
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.aa6)r=0.09
else r=s===D.aa7?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dX(260+90*v,"",260,1.6,0.18,"tri")
u=D.c0_[v]
C.pW("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.IO("bell",D.c8M,1400,0.35)}}p.ax=o},
q(){this.gtZ().q()
this.gZp().q()
this.bwg()},
afX(){var w=this
w.gtZ().cUh(0,B.dD(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new C.eV8(w))},
cg9(){this.gtZ().bR(0)
this.m(new C.eV7(this))},
adC(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$adC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaVM(),s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
l.push(new B.ar(new B.bb(q,A.b3,A.aM),$.aw()))}m=B.a([],m)
for(t=u.gb67(),s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){p=t[r]
m.push(new B.ar(new B.bb(p,A.b3,A.aM),$.aw()))}o=B.C(u.gaV3(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bQ(F.n0,null,new C.eV6(u,l,m,o),t,!0,!0,!0,A.ly,!1,!1,x.H),$async$adC)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.S$=$.aw()
n.P$=0}return B.h(null,v)}})
return B.i($async$adC,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gawA(),f=i.a.c,e=f.b,d=i.gc5V(),a0=new C.Az(g,e,f.c,d,i.gaV3(),i.gaVM(),i.gb67())
f=B.aq(A.d.gH(d),A.d.gak(d),0.4)
f.toString
g=x.p
w=B.a([B.aI(h,h,h,h,B.X(i.at?A.ua:O.C0,A.ad,h,h,h,21),h,h,h,new C.eVg(i),h,h,h,h,"Sound",h),B.aI(h,h,h,h,D.bRL,h,h,h,i.gc5W(),h,h,h,h,"Edit words and pictures",h),B.aI(h,h,h,h,D.qa,h,h,h,new C.eVh(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c7(i.gZp(),new C.eVi(i,a0),h),B.cA(new C.eVj(i,a0))],g)
u=i.as
t=u?i.gcg8():i.gcit()
u=u?D.bHs:A.u3
s=B.aq(A.d.gH(d),A.d.gak(d),0.4)
s.toString
t=B.B(B.a([B.aI(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cc),B.E(B.c7(i.gtZ(),new C.eVk(i,a1,a0),h),1),B.aI(h,h,h,h,D.bO6,h,h,h,new C.eVl(i),h,h,h,h,"Replay",A.cc)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.ab(s,1)
r=B.aq(A.d.gH(d),A.d.gak(d),0.4)
r.toString
s=C.lM(r,u+"x","Speed",2.5,0.4,new C.eVm(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.dgb[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.aq(A.d.gH(d),A.d.gak(d),0.4)
r.toString
u.push(new C.f3(p.b,o===p.a,new C.eVn(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.c0n[q]
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}m=A.d.gH(o).A(0,A.d.gH(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}l=A.d.gH(o).A(0,A.d.gH(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}k=A.d.gH(o).A(0,A.d.gH(n))?A.c:A.b2
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}j=new B.az(k,A.d.gH(o).A(0,A.d.gH(n))?2.5:1,A.q,-1)
d.push(B.aB(h,B.p(h,h,A.f,h,h,new B.o(h,h,new B.bO(j,j,j,j),h,h,new B.a8(A.ay,A.aC,A.x,n,h,h),A.a5),h,l,h,D.ahj,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eVo(i,n),h,h,h,h,h,h,!1,A.a7))}return C.ou(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.eH(new B.an(A.V,h,A.b0,A.r,v,h),i.f),e,B.w(B.a([t,s,new C.hm(u,"STYLE",h),new C.hm(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
byh(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nl[r]
p=A.k.D((1-A.et.au(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.nl[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.nl[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=B.dp()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.k9(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nl[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nl[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nl[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cL(0,r*118,0,f,f,f,new B.kF(q,new B.iI(n,f,A.b1,!0,f,new C.PZ(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nl[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.nl[r]
t=v+0.12
e.push(new B.cL(0,r*118-3-2,0,f,f,4,new B.ml(new C.bpM(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a7(a2,358,new B.an(A.V,f,A.a9,A.f,e,f),f)},
bOS(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.uh[r]
p=A.pO.au(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.uh[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.uh[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=B.dp()
k=m.a
k.$flags&2&&B.aj(k)
k[11]=0.0011
m.jQ(n,n,n,1)
m.fC(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.PZ(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dp()
k.fC(3.141592653589793)
k=new B.iI(k,f,A.A,!0,f,new C.bqD(a2,108,w,f),f)}e.push(new B.cL(0,r*130,0,f,f,f,new B.kF(q,new B.iI(m,f,A.A,!0,f,k,f),f),f))}return new B.a7(a2,378,new B.an(A.V,f,A.a9,A.f,e,f),f)},
cA6(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a2D[w]
l.push(A.ct.au(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bT(0,B.b3(n,n,n,new C.btc(d.d,l,D.avU,m,C.bq8(e,0.4,0.62),f,C.bq8(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.fWm(g,w)
q=D.avU[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cL(r,s-q*m*p+12,n,n,t,n,new B.kF(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.fWm(g,w)
r=D.a2D[w]
q=r+0.15
v.push(new B.cL(s,l,n,n,t,n,new B.kF(A.k.D((e-q)/(r+0.25-q),0,1),new B.y(u[w],n,A.U0,n,A.L,n,n,n,n,n,n,n),n),n))}return new B.a7(g,m+90,new B.an(A.V,n,A.a9,A.f,v,n),n)},
bEw(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.ct.au(0,C.bq8(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bT(0,B.au(B.dU(B.b3(f,f,f,new C.bpd(A.d.gH(a1),C.bq8(a3,0,0.2),a4,f),new B.as(a5*0.95,70)),D.e7d),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dy.au(0,A.k.D((o-0.7)/0.3,0,1))
l=B.dp()
m=l.a
m.$flags&2&&B.aj(m)
m[11]=0.001
l.fC(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jQ(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.F(r,1):-1
w.push(new B.z(o,new B.cL(0,0,0,0,f,f,new B.co(A.A,f,f,new B.kF(k*(0.45+0.55*o),B.dU(new B.iI(l,f,A.A,!0,f,new C.PZ(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.x(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new C.eV_())
A.d.v(a0,new B.M(w,new C.eV0(),x.fR))
return new B.a7(a5,330,new B.an(A.V,f,A.a9,A.f,a0,f),f)},
bDG(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.uh[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.lI.au(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.uh[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.axU[q]
k=B.dp()
k.mK(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jQ(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.uh[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cL(0,0,0,0,e,e,new B.co(A.A,e,e,new B.kF(m,B.dU(new B.iI(k,e,A.A,!0,e,new C.PZ(d,92,w,p,j,i,0,g*s,h,e),e),new B.x(0,l)),e),e),e))
l=D.uh[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cL(0,0,0,0,e,e,new B.co(A.A,e,e,B.dU(new B.ml(new C.b9M(w,f,q,e),e,new B.as(r,212),e,e),new B.x(0,D.axU[q])),e),e))}return new B.a7(a4,330,new B.an(A.V,e,A.a9,A.f,a0,e),e)},
bBc(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.x(-b0,-150),new B.x(b0,-40),D.e7h],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nl[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.ct.au(0,p)
q=D.ay2[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nl[r]
f=g+0.2
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.nl[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=B.dp()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.mK(l*h+D.dae[r]*o)
f.fC(l*0.9)
h=0.55+0.45*o
f.jQ(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cL(0,0,0,0,a3,a3,new B.co(A.A,a3,a3,new B.kF(g,B.dU(new B.iI(f,a3,A.A,!0,a3,new C.PZ(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.x(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nl[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.ay2[r]
a6.push(new B.cL(0,0,0,0,a3,a3,new B.co(A.A,a3,a3,B.dU(new B.ml(new C.bpf(A.d.gH(w),a2,a3),a3,new B.as(a4,30),a3,a3),new B.x(0,q+48-4)),a3),a3))}}return new B.a7(b0,330,new B.an(A.V,a3,A.a9,A.f,a6,a3),a3)}}
C.bpM.prototype={
a6(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a9(w-v,0,w+v,e.b)
q=B.by(u,A.hb)
$.W()
t=B.N()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=G.p7
d.aD(q,t)
t=B.by(u,A.hb)
q=B.N()
q.r=A.c.j(s).gp(0)
d.aD(t,q)},
av(d){return d.c!==this.c||d.d!==this.d}}
C.bpd.prototype={
a6(d,e){var w,v,u=this.c,t=B.ci(e.ei(A.J),e.b*u,e.a*u)
$.W()
u=B.N()
u.b=A.af
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=W.HK
d.hH(t,u)
u=B.N()
u.b=A.af
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hH(t,u)
u=t.cs(-14)
v=B.N()
v.b=A.af
v.c=1
v.r=w.j(0.3).gp(0)
d.hH(u,v)},
av(d){return!0}}
C.b9M.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ei(A.J),f=this.c,e=A.ct.au(0,f)
$.W()
w=B.N()
w.b=A.af
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.af(g,40+e*a0.a*0.42,w)
t=new B.f5()
t.dU(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.an()*3.141592653589793*2
n=(40+t.an()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.an()
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
i=(p&1)===0?A.d.gH(u):A.c
j.r=i.j(A.k.D(v,0,1)).gp(0)
h=j.K()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
av(d){return!0}}
C.bpf.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ei(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=B.ci(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.W()
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.b=A.af
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.K()
t.drawOval(B.bX(p),n)
n.delete()}},
av(d){return d.c!==this.c}}
C.btc.prototype={
a6(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new B.a9(0,d0,0+c5,d0+60)
$.W()
d0=B.N()
w=c1.b
v=x.O
d0.sar(new B.a8(A.b1,A.b6,A.x,B.a([A.d.gH(w).j(0.18),A.K],v),c2,c2).aA(0,d1))
d2.b1(d1,d0)
d0=B.N()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bL(new B.x(0,c4),new B.x(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=C.fWm(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.W()
a3=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.mD
a4=a3.K()
t.drawOval(B.bX(new B.a9(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new B.a9(d,a1,a3,a1+a0)
a6=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a7=B.aq(A.d.gH(w),A.c,0.1)
a7.toString
a6.sar(new B.a8(A.b1,A.b6,A.x,B.a([a7,A.d.gak(w)],v),c2,c2).aA(0,a5))
a4=a6.K()
t.drawRect(B.bX(a5),a4)
a4.delete()
a2=a2.r
a6=B.a([],n)
a8=new B.aO(a2,A.ao,c2,c2,a6)
a6.push(new B.b5(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new B.ap(a7,a9))
a6.push(new B.ap(a7,m))
a6.push(new B.ap(a3,c4))
a6.push(new B.bE())
a6=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a6.r=B.aq(A.d.gak(w),A.w,0.5).gp(0)
a4=a6.K()
a6=a8.gbK().a.snapshot()
t.drawPath((a8.e=new B.cF(a6)).a,a4)
a4.delete()
a6=B.a([],n)
b0=new B.aO(a2,A.ao,c2,c2,a6)
a6.push(new B.b5(d,a1))
a6.push(new B.ap(d+c8,a9))
a6.push(new B.ap(a7,a9))
a6.push(new B.ap(a3,a1))
a6.push(new B.bE())
a2=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a2.r=B.aq(A.d.gH(w),A.c,0.45).gp(0)
a4=a2.K()
a2=b0.gbK().a.snapshot()
t.drawPath((b0.e=new B.cF(a2)).a,a4)
a4.delete()
b1=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
b1.b=A.af
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.K()
t.drawRect(B.bX(a5),a4)
a4.delete()
a4=b1.K()
a2=a8.e
t.drawPath((a2==null?a8.e=new B.cF(a8.gbK().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.K()
a2=b0.e
t.drawPath((a2==null?b0.e=new B.cF(b0.gbK().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bm(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=B.by(new B.a9(b7,a7,b7+r,b5),A.hb)
$.W()
b9=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.K()
t.drawRRect(B.eT(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new B.a9(d,a1,a3,a1+28)
J.bx(t.save())
t.clipRect(B.bX(a5),$.n7()[1],!0)
$.W()
a1=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a1.sar(new B.a8(A.b1,A.b6,A.x,B.a([A.K,A.c.j(0.4),A.K],v),c2,c2).aA(0,c0))
a4=a1.K()
t.drawRect(B.bX(c0),a4)
a4.delete()
t.restore()}}},
av(d){return!0}}
C.aMj.prototype={
aW(){this.b6()
this.b5()
this.dI()},
q(){var w=this,v=w.b2$
if(v!=null)v.a4(0,w.gdD())
w.b2$=null
w.a2()}}
C.a0_.prototype={
a3(){return"_Role."+this.b}}
C.q6.prototype={}
C.qN.prototype={}
C.Cn.prototype={}
C.YZ.prototype={}
C.aen.prototype={}
C.a0c.prototype={
gY(d){return this.d}}
C.Cx.prototype={}
C.abk.prototype={}
C.abA.prototype={}
C.adt.prototype={}
C.bgc.prototype={
a2s(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dX(d,"",e,g,h,f)},
b79(d,e,f){return this.a2s(d,e,f,0,0.55)},
aB2(d,e,f,g){return this.a2s(d,e,f,0,g)},
b7a(d,e,f,g){return this.a2s(d,e,f,g,0.55)},
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
w.aT()},
ajB(d,e,f,g){var w="n"+this.ay++,v=new C.qN(w,e,f,g)
this.a.n(0,w,v)
this.aT()
return v},
B2(d,e,f){return this.ajB(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bs(w.b,new C.dhf(e))
A.d.bs(w.c,new C.dhg(e))
w.aT()},
baZ(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mC.h(0,v.b).c===D.wU)return!1
w=this.b
if(A.d.b4(w,new C.dhc(d,e)))return!1
w.push(new C.Cn(d,e))
this.aT()
return!0},
bZ2(d){var w
if(d.b==="beat")return D.c8W[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.az(500)
case 2:return 1400+w.az(2200)
default:return 450+w.az(2000)}},
aEx(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.ayi[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Cx(u,t,j.ax,90))
w.push(new C.Cx(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.an()*3.141592653589793*2
v.push(new C.a0c(u,new B.x(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b79(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.an()*3.141592653589793*2
p=100+w.an()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.aq(t,A.c,w.an()*0.5)
m.toString
v.push(new C.a0c(u,new B.x(o*p,n*p),m,3+w.an()*4.5,1000+w.az(700),j.ax))}j.f.push(new C.Cx(u,t,j.ax,120))
j.aB2(120,200,"noise",0.5)
j.b79(261.63*Math.pow(2,([7,12,16,19][w.az(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Cx(u,t,j.ax,230))
w.push(new C.Cx(u,t,j.ax+160,160))
w.push(new C.Cx(u,t,j.ax+320,100))
j.b7a(180+j.at.az(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.abk(u,new B.x((w.an()-0.5)*220,-260-w.an()*180),t,j.ax))
j.b7a(300+w.az(300),110,h,0.8)
break
case"comet":w=j.at
q=w.an()*3.141592653589793*2
j.w.push(new C.abA(u,u.ad(0,new B.x(Math.cos(q),Math.sin(q)).aI(0,260+w.an()*200)),t,j.ax))
j.a2s(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fF()
j.a2s(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.adt(u,D.axG[v],t,j.ax))
j.aB2(261.63*Math.pow(2,([0,5,9,12][j.at.az(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aB2(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c51[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cqb(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.f4(w,new C.dhd(d));v.C();)j.azz(w.gT(0),j.ax+D.chm[A.o.F(g.d,4)])
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
case"chance":s=j.at.az(100)<D.cym[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.f4(w,new C.dhe(d));v.C();)j.azz(w.gT(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.zc(w,0,v-700)},
cqb(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.YZ(e,"~"+d))},
azz(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.aen(d.a,v,e,w))
u.push(new C.YZ(w,v))},
a6a(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a6(w).k("bc<2>")
w=B.C(new B.bc(w,v),v.k("J.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aEx(r)
u.n(0,r,o.ax+o.bZ2(s))}}w=o.c
v=B.T(w).k("a_<1>")
q=B.C(new B.a_(w,new C.dhh(o),v),v.k("J.E"))
if(q.length!==0){A.d.bs(w,new C.dhi(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.L)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b3(u,1)
for(u=A.d.gae(v),r=new B.f4(u,new C.dhj(p));r.C();)o.azz(u.gT(0),o.ax)}else o.aEx(u)}}A.d.bs(o.d,new C.dhk(o))
A.d.bs(o.e,new C.dhl(o))
A.d.bs(o.f,new C.dhm(o))
A.d.bs(o.w,new C.dhn(o))
A.d.bs(o.x,new C.dho(o))
A.d.bs(o.r,new C.dhp(o))
o.aT()},
v6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.x(q.a+o*e,q.b+p*e)
r.b=new B.x(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.x(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.x(l,o)
if(o>n){p=m.a=new B.x(l,n)
t=m.b=new B.x(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.x(-t.a*0.8,t.b)}},
ag(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=B.a([],x.C)
for(v=this.a,v=new B.du(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.F(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.S.ao(B.F(["nodes",m,"edges",v],u,x.ew),null)},
Tp(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.S.aL(0,d,null))
k.a8(0)
for(o=x.j,n=J.aW(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gT(n)
u=B.u(J.q(v,"k"))
if(!D.mC.ai(0,u))continue
t=B.u(J.q(v,"id"))
m.n(0,t,new C.qN(t,u,new B.x(B.e3(J.q(v,"x"))*k.cy.a,B.e3(J.q(v,"y"))*k.cy.b),A.k.N(B.e3(J.q(v,"p")))))
s=B.c8(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aW(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gT(o)
q=B.u(J.q(r,0))
p=B.u(J.q(r,1))
if(m.ai(0,q)&&m.ai(0,p))n.push(new C.Cn(q,p))}k.aT()
return!0}catch(l){return!1}},
cP0(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.qN(n,r,new B.x(q*p.a,o*p.b),s))
l.aT()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.baZ(w[m.a],w[m.b])}},
gY(d){return this.cy}}
C.FN.prototype={}
C.VD.prototype={
U(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aDK(new C.bgc(B.U(w,x.f3),v,u,t,s,r,q,p,o,B.U(w,n),B.U(w,n),B.U(w,n),B.U(w,n),A.cW,A.K,A.az,$.aw()),A.bB,A.J,A.J,A.U,null,null)}}
C.aDK.prototype={
acb(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$acb=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.ay(),$async$acb)
case 6:q=n.jJ(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.ekv(s))
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
return B.i($async$acb,v)},
a99(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$a99=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.ekk(s))
u=3
w=6
return B.b(B.ay(),$async$a99)
case 6:e.aq("Bool","ngmy_core_lab_coach_v1",!0)
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
return B.i($async$a99,v)},
bKq(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a6(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new B.bc(n,w).cM(0,0,new C.ekm())+"|"+A.d.cM(o,0,new C.ekn())
if(v===p.ch)return p.CW
u=new C.ekq()
t=x.s
s=B.a([],t)
r=new C.ekr(p,s,u)
for(n=new B.bc(n,w).gae(0),w=new B.f4(n,new C.eko());w.C();){q=n.gT(0)
if(!A.d.b4(o,new C.ekp(q)))s.push(B.u(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.dc(s,0,B.dG(5,"count",x.S),x.N).dM(0)},
a_(){var w,v=this
v.a1()
v.acb()
v.d.db=v.ay
w=v.wm(new C.ekV(v))
w.ia(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this,v=w.as
if(v!=null)v.a7(0)
v=w.e
v===$&&B.c()
v.q()
v=w.d
v.S$=$.aw()
v.P$=0
w.bvh()},
abI(d){return this.bYv(d)},
bYv(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$abI=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.ay(),$async$abI)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Tp(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aWc(A.d.gH(D.ax7))
if(s.c!=null)s.m(new C.eku())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$abI,v)},
aWc(d){this.d.cP0(0,d.c,d.d)
this.E8()},
E8(){var w=this.as
if(w!=null)w.a7(0)
this.as=B.cM(A.lR,new C.ekg(this))},
awB(d){var w,v,u,t,s=this.d.a,r=B.a6(s).k("bc<2>")
s=B.C(new B.bc(s,r),r.k("J.E"))
r=B.T(s).k("dx<1>")
s=new B.dx(s,r)
s=new B.bS(s,s.gL(0),r.k("bS<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ce8(d){var w,v,u,t,s,r=this.d.a,q=B.a6(r).k("bc<2>")
r=B.C(new B.bc(r,q),q.k("J.E"))
q=B.T(r).k("dx<1>")
r=new B.dx(r,q)
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
bYj(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mC.h(0,r.b).c===D.wU)continue
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
c60(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hj7(new B.x(n.a+36,n.b+0),new B.x(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cxR(d){var w,v,u,t,s,r,q=this,p=q.awB(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eZ()
u=v.b
if(u==="button"){w.aEx(p)
return}if(q.r)return
t=D.mC.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qC)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.aT()
q.E8()
return}if(q.r)return
r=q.c60(d)
if(r!=null){w=q.d
A.d.cF(w.b,r)
w.aT()
q.E8()}},
cfr(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.ce8(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.awB(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aF(0,d)}},
cfs(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aT()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.x(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aT()}}},
b0c(){var w,v,u=this
if(u.z!=null){w=u.bYj(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.baZ(v,w)}else v=!1
if(v){B.kn()
u.E8()}u.z=null
u.d.aT()}else if(u.x!=null){if(u.at)u.E8()
u.x=null}},
aco(d){return this.c0d(d)},
c0d(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$aco=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.awB(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jB()
p=t.c
p.toString
w=3
return B.b(B.bQ(F.n0,null,new C.ekx(q),p,!0,!0,!1,A.ly,!1,!1,x.y),$async$aco)
case 3:if(f===!0){r.W(0,s)
t.E8()}case 1:return B.h(u,v)}})
return B.i($async$aco,v)},
c5Z(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.B2(0,d,new B.x(v.a*(0.25+u.an()*0.5),v.b*(0.2+u.an()*0.55)))
B.eZ()
this.E8()},
ag4(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ag4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bQ(F.n0,null,new C.ekz(),s,!0,!0,!0,A.ly,!1,!1,x.es),$async$ag4)
case 2:t=e
if(t!=null)u.aWc(t)
return B.h(null,v)}})
return B.i($async$ag4,v)},
adD(d){var w=0,v=B.j(x.H),u=this,t
var $async$adD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ca(null,null,!0,null,new C.ekj(),t,null,!0,!0,x.y),$async$adD)
case 2:if(f===!0){u.d.a8(0)
u.E8()}return B.h(null,v)}})
return B.i($async$adD,v)},
B(d){var w=this,v=null,u=B.a([B.ahN(w.r?new B.bI(A.a3,v,v,new B.D(A.FL,B.hn(D.bM4,D.fmz,new C.ekT(w),v),v),v):w.c61(),A.bb,A.iI),B.E(B.cA(new C.ekU(w)),1)],x.p)
if(!w.r)u.push(w.csE())
return B.c6(v,A.bY,B.bl(!0,B.w(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0),v,!1,!1,v,v)},
bGb(){var w=null,v=new C.ekl(),u=A.w.j(0.7),t=B.n(26),s=B.I(A.bu.j(0.5),A.q,1)
return B.bT(0,B.el(B.au(B.p(w,B.cc(B.w(B.a([D.fxC,A.av,D.fF8,A.aB,v.$4(A.oW,A.bu,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.BV,A.cn,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.lo,A.c5,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.ale,A.bH,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fEs,new B.bI(A.a8,w,w,B.bK(!1,D.fuO,w,w,!0,w,w,this.gbG4(),w,w),w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),A.f,w,A.Vz,new B.o(F.n0,w,s,t,w,w,A.n),w,w,w,A.fC,A6.aix,w,w,w),w,w,w),u,!0),0,0,0)},
c61(){var w=this,v=null,u=B.aI(v,v,v,v,P.ni,v,v,v,new C.ekF(w),v,v,v,v,v,v),t=w.a8C(A.NL,"How it works",new C.ekG(w),!0),s=w.ay?A.ua:O.C0
return new B.D(D.bxG,B.B(B.a([u,D.bz9,t,w.a8C(s,"Sound",new C.ekH(w),!0),w.a8C(A.e0,"Ideas",w.gcja(),!0),w.a8C(D.Nz,"Clear",w.gc6_(w),!0),w.aNa(A.j2,"Show",new C.ekI(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aNa(d,e,f,g,h){var w=null,v=h?A.bu:A.c.j(0.08),u=B.n(14),t=B.n(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Aa.vE,B.aF(!1,A.a1,!0,u,B.aK(!1,t,!0,B.hx(new B.D(new B.Q(8,8,8,8),B.B(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ag),w)},
a8C(d,e,f,g){return this.aNa(d,e,f,g,!1)},
csE(){var w=null,v=new C.ekB(this),u=A.c.j(0.08)
return B.p(w,B.cc(B.B(B.a([v.$2("START",D.wU),v.$2("CHANGE",D.DY),v.$2("REACT",D.qC)],x.p),A.F,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aN),A.f,w,w,new B.o(F.AJ,w,new B.bO(new B.az(u,1,A.q,-1),A.W,A.W,A.W),w,w,w,A.n),w,w,w,w,D.bsV,w,w,w)},
csF(d){var w,v,u,t,s=null,r=D.mC.h(0,d)
r.toString
w=B.n(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.I(v.j(0.5),A.q,1)
return new B.D(A.fB,B.aB(s,B.p(s,B.w(B.a([B.X(r.b,v,s,s,s,22),A.cQ,B.d(r.a,s,1,A.a2,s,s,s,D.aQL,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a8(A.b1,A.b6,A.x,u,s,s),A.n),s,s,s,s,A.hx,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ekA(this,d),s,s,s,s,s,s,!1,A.a7),s)}}
C.bgd.prototype={
a6(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bx(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.W()
u=B.N()
u.r=A.c.j(0.05).gp(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.K()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.W()
o=B.N()
o.r=b5.cx.j(0.4*((p-b6)/800)).gp(0)
b8.b1(new B.a9(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){l=w[m]
k=n.h(0,l.a)
j=n.h(0,l.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=j.c
f=g.a-36
g=g.b
e=$.W()
d=B.a([],o)
a0=new B.aO(e.r,A.ao,b4,b4,d)
d.push(new B.b5(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new B.pF(h+a1,i,f-a1,g,f,g))
a2=D.mC.h(0,k.b).d
a3=D.mC.h(0,j.b).d
e=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
e.b=A.af
e.c=3
e.d=A.bV
d=B.a([a2.j(0.55),a3.j(0.55)],p)
g=B.rB(new B.x(h,i),new B.x(f,g))
e.sar(new B.a8(A.a3,A.a8,A.x,d,b4,b4).aA(0,new B.a9(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.K()
i=a0.gbK().a.snapshot()
b7.drawPath((a0.e=new B.cF(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=C.hj7(new B.x(i.a+36,i.b+0),new B.x(h.a-36,h.b),a5)
$.W()
h=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gp(0)
h.z=G.p7
q=h.K()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
g.r=A.c.gp(0)
q=g.K()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ad(0,D.Ih)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new B.aO($.W().r,A.ao,b4,b4,B.a([],o))
o=a8.b
a0.E(new B.b5(t,o))
i=a9.b
a0.E(new B.pF(t+a1,o,w-a1,i,w,i))
i=B.N()
i.b=A.af
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aS(a0,i)
i=B.N()
i.r=A.c.gp(0)
b8.af(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){b0=w[m]
o=b0.c
v=A.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dX.au(0,v)
$.W()
h=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
h.b=A.af
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gp(0)
q=h.K()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){b1=w[m]
v=A.k.D((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=B.kr(o,i,A.dX.au(0,v))
h.toString
i=B.kr(o,i,A.dX.au(0,A.k.D(v-0.35,0,1)))
i.toString
$.W()
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.c=5
o.d=A.bV
g=b1.c
f=B.a([g.j(0),g],p)
e=B.rB(i,h)
o.sar(new B.a8(A.a3,A.a8,A.x,f,b4,b4).aA(0,new B.a9(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.K()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
i.r=A.c.gp(0)
q=i.K()
b7.drawCircle(o,h,6,q)
q.delete()
i=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
i.r=g.j(0.5*(1-v)).gp(0)
i.z=A.lw
q=i.K()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){a4=w[m]
v=A.k.D((b6-a4.f)/a4.e,0,1)
o=a4.a
$.W()
i=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
i.r=a4.c.j(1-v).gp(0)
q=i.K()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){j=w[m]
o=j.a
$.W()
i=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.lw
q=i.K()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
i.sar(new B.c_(U.wX,0.5,A.x,b4,0,B.a([A.c,h],p),b4,b4).aA(0,B.bU(j.a,8)))
q=i.K()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,B.L)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=C.bge(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a6(b8,new B.x(t.a-o/2,t.b-(40+60*v+p.gbf(p)/2)))}for(b5=new B.du(n,n.r,n.e);b5.C();)b3.cf_(b8,b5.d,b6)
b7.restore()},
cf_(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mC.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=B.ci(e.c,64,64)
t=B.by(u,A.iv)
s=t.eR(A.cz)
$.W()
r=B.N()
r.r=A.w.j(0.55).gp(0)
r.z=A.mD
d.aD(s,r)
if(v>0){s=t.cs(6)
r=B.N()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.z9
d.aD(s,r)}s=t.eR(A.cH)
r=B.N()
q=h.d
r.r=B.aq(q,A.w,0.65).gp(0)
d.aD(s,r)
r=B.N()
s=B.aq(q,A.c,0.18+0.4*v)
s.toString
p=B.aq(q,A.w,0.35)
p.toString
r.sar(new B.a8(A.b1,A.b6,A.x,B.a([s,p],x.O),j,j).aA(0,u))
d.aD(t,r)
r=B.N()
r.b=A.af
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aD(t,r)
r=h.b
p=e.c
o=C.bge(B.lj(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a6(d,p.aF(0,new B.x(s/2,r.gbf(r)/2)))
n=C.bge(h.a,11,A.c,j,j,A.H)
n.a6(d,e.c.ad(0,new B.x(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.axG[A.o.F(e.d,6)]:j
h=h.c
if(h===D.qC){s=e.c.ad(0,new B.x(0,62))
r=B.N()
r.r=D.ayi[A.o.F(e.d,6)].gp(0)
d.af(s,5,r)}else if(m!=null){l=C.bge(m,9.5,A.aA,j,j,A.O)
l.a6(d,e.c.ad(0,new B.x(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bge(m,9.5,A.aA,j,j,A.O)
l.a6(d,e.c.ad(0,new B.x(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wU)k.b10(d,e.c.aF(0,D.Ih),q)
k.b10(d,e.c.ad(0,D.Ih),q)},
b10(d,e,f){var w
$.W()
w=B.N()
w.r=A.bY.gp(0)
d.af(e,9,w)
w=B.N()
w.b=A.af
w.c=2.2
w.r=f.gp(0)
d.af(e,9,w)
w=B.N()
w.r=A.c.gp(0)
d.af(e,3.5,w)},
av(d){return!0}}
C.aLr.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bkA.prototype={}
C.PQ.prototype={
gY(d){return this.d}}
C.VS.prototype={
U(){var w=B.a([],x.g4),v=B.a([],x.ed)
return new C.bjH(new B.cu(null,x.z),w,v,A.cW,A.bB,D.Lt,null,null)}}
C.bjH.prototype={
aZK(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bm((1-d.b/(B.aH(w,null,x.l).w.a.b*0.7))*10),0,9)
u=D.cZl[A.o.F(v,5)]+12*A.o.am(v,5)+12
switch(t.z){case"glow":C.pW("synth",u,420,0.3)
break
case"rainbow":C.pW("bell",u,700,0.35)
break
case"stars":C.pW("pluck",u+12,400,0.4)
break
case"sparks":E.dX(2400+t.r.az(2000),"",60,0,0.18,"noise")
break
default:E.dX(110+t.r.az(60),"",140,0,0.22,"noise")}},
c8L(d){return this.aZK(d,!1)},
a_(){var w,v=this
v.a1()
w=v.wm(new C.ewB(v))
w.ia(0)
v.w!==$&&B.aP()
v.w=w},
q(){var w=this.w
w===$&&B.c()
w.q()
this.bvq()},
gb0w(){var w=this.Q
return w<0?new M.vJ(1,A.k.F(this.y*0.18,360),0.85,1).lZ():D.QO[w]},
aRz(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb0w(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.an()*3.141592653589793*2
switch(l.z){case"fire":q=v.an()
p=l.as
o=v.an()
n=v.an()
m=B.aq(A.bH,A.aw,v.an())
m.toString
j.push(new C.PQ(new B.x(u+(q-0.5)*p,t),new B.x((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.an()*0.4),l.y,700+v.az(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.an()*200
n=B.aq(k,A.c,v.an()*0.6)
n.toString
j.push(new C.PQ(d,new B.x(q*o,p*o),n,1.5+v.an()*3,l.y,600+v.az(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.an()*40
j.push(new C.PQ(d,new B.x(q*o,p*o),k,1.2+v.an()*1.8,l.y,500))}}},
aYD(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb0w()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=B.a([],x.g)
r.ax=new C.bkA(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aRz(e)
r.aZK(e,!0)
r.m(new C.ewc())},
aYC(){this.ax=null
this.m(new C.ewb())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([B.aI(n,n,n,n,D.qa,n,n,n,new C.ewl(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=B.a([B.b3(n,n,n,new C.br2(k,o.f,o.y,o.at,n),A.az)],m)
if(!o.ay&&k.length===0)j.push(D.b6i)
k=B.aB(A.ci,new B.an(A.V,n,A.b0,A.r,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ewm(o),new C.ewn(o),new C.ewr(o),n,n,n,n,n,n,n,n,n,new C.ews(o),new C.ewt(o),n,n,n,!1,A.a7)
j=B.a([],m)
for(w=0;w<5;++w){v=D.cWy[w]
j.push(new C.f3(v.b,o.z===v.a,new C.ewu(o,v),v.c,A.c5,n))}u=B.a([new C.Fe(A.c,o.Q<0,new C.ewv(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new C.Fe(D.QO[t],o.Q===t,new C.eww(o,t),!1,n))
s=o.as
s=C.lM(A.c5,A.o.u(A.k.V(s)),"Size",36,4,new C.ewx(o),s)
r=o.ch
q=r?A.ua:O.C0
q=B.a([new C.f3("Sound",r,new C.ewy(o),q,A.c5,n),new C.j4(A.rf,"Undo",new C.ewo(o),A.c,n),new C.j4(D.Nz,"Clear",new C.ewp(o),A.cs,n)],m)
for(w=0;w<4;++w){p=D.dbU[w]
q.push(new C.Fe(p,o.at.A(0,p),new C.ewq(o,p),!1,n))}return C.ou(A.c5,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new B.eH(k,o.d),"SPARK PAINTER",B.w(B.a([new C.hm(j,"BRUSH",n),new C.hm(u,"COLOUR",n),s,new C.hm(q,n,n)],m),A.m,n,A.e,A.Q,0,A.p))}}
C.br2.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.W()
w=B.N()
v=a4.e
w.r=v.gp(v)
a6.b1(new B.a9(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.L)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.W()
o=B.a([],t)
n=new B.aO(p.r,A.ao,a5,a5,o)
o.push(new B.b5(A.d.gH(q).a,A.d.gH(q).b))
for(p=B.T(q),m=p.k("nn<1>"),l=new B.nn(q,1,a5,m),l.zJ(q,1,a5,p.c),l=new B.bS(l,l.gL(0),m.k("bS<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new B.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bA(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gH(q)
$.W()
p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
p.r=r.c.gp(0)
j=p.K()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.W()
q=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
q.b=A.af
q.d=A.bV
q.e=A.hn
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new B.hC(A.G,p)
j=q.K()
q=n.e
u.drawPath((q==null?n.e=new B.cF(n.gbK().a.snapshot()):q).a,j)
j.delete()
q=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
q.b=A.af
q.d=A.bV
q.e=A.hn
q.c=p
q.r=o.gp(0)
j=q.K()
q=n.e
u.drawPath((q==null?n.e=new B.cF(n.gbK().a.snapshot()):q).a,j)
j.delete()
q=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
q.b=A.af
q.d=A.bV
q.e=A.hn
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.K()
q=n.e
u.drawPath((q==null?n.e=new B.cF(n.gbK().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new M.vJ(1,A.o.F(i*5,360),0.85,1).lZ()
o=q[i-1]
m=q[i]
$.W()
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.c=p
l.d=A.bV
l.r=h.gp(0)
j=l.K()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,B.L)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gH(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new M.vJ(1,A.o.F(a3*23,360),0.7,1).lZ():l
a4.c62(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,B.L)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.W()
p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=P.Ri
j=p.K()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c62(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.W(),o=B.a([],x.v),n=new B.aO(p.r,A.ao,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new B.b5(r,q)
o.push(r)
q=n.f
if(q!=null)r.bA(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new B.ap(r,q)
o.push(r)
q=n.f
if(q!=null)r.bA(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.E(new B.bE())
$.W()
p=B.N()
p.r=h.j(0.4).gp(0)
p.z=A.lw
d.aS(n,p)
p=B.N()
p.r=h.gp(0)
d.aS(n,p)},
av(d){return!0}}
C.W2.prototype={
U(){return new C.aE_(new B.cu(null,x.z),new B.ar(new B.bb("NGMY",A.b3,A.aM),$.aw()),null,null)}}
C.aE_.prototype={
gIR(){var w,v=this,u=v.e
if(u===$){w=B.bj(null,A.tE,null,1,null,v)
w.cL(0)
v.e!==$&&B.bL()
v.e=w
u=w}return u},
a_(){this.a1()
var w=this.gIR()
w.dd()
w.dV$.M(0,this.gbXs())},
bXt(){var w,v,u,t,s,r,q,p=this,o=p.gIR().x
o===$&&B.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.m5:new B.mb(w)).gL(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dX(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dX(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
C.pW(s,D.cPM[A.o.F(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIR().q()
var w=this.f
w.S$=$.aw()
w.P$=0
this.bvv()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=B.a(["\u2026"],x.s)
else{h=new B.mb(h)
w=B.C(h,B.a6(h).k("J.E"))}v=D.QO[k.w]
h=x.p
u=B.a([B.aI(j,j,j,j,D.qa,j,j,j,new C.eCK(k,d),j,j,j,j,"Share",j)],h)
t=B.n(26)
s=D.axH[k.y]
s=B.bw(t,B.c0(B.au(B.c7(k.gIR(),new C.eCL(k,w,v),j),j,j,j),new B.o(j,j,j,j,j,new B.a8(A.ay,A.aC,A.x,s,j,j),A.n),A.be),A.aq)
t=A.c.j(0.06)
t=B.aM(j,A.U,!1,j,!0,A.r,j,B.aN(),i,j,j,j,j,j,2,B.bs(j,new B.b4(4,B.n(14),A.W),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.DB,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new C.eCM(k),j,j,j,!1,j,j,!1,j,!0,j,A.aa,j,j,j,j,j,j,j,j,j,j,j,A.hq,!0,A.a4,j,A.an,j,j,j,j)
i=B.a([],h)
for(r=0;r<7;++r){q=D.cy8[r]
i.push(new C.f3(q.b,k.r===q.a,new C.eCN(k,q),j,A.bH,j))}p=B.a([],h)
for(o=0;o<8;++o)p.push(new C.Fe(D.QO[o],k.w===o,new C.eCO(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.ua:O.C0
l=B.a([new C.f3(m,n,new C.eCP(k),l,A.bH,j)],h)
n=B.a([],h)
for(o=0;o<5;++o)n.push(new C.Fe(D.axH[o][0],k.y===o,new C.eCQ(k,o),!1,j))
n.push(A.bp)
n.push(new C.j4(A.o3,"Replay",new C.eCR(k),A.c,j))
m=k.x
return C.ou(A.bH,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new B.D(A.bE,new B.eH(s,k.d),j),"TITLE ANIMATOR",B.w(B.a([t,A.N,new C.hm(i,"MOVE",j),new C.hm(p,"COLOUR",j),new C.hm(l,"SOUND",j),new C.hm(n,"BACK",j),C.lM(A.bH,A.o.u(A.k.V(m)),"Size",96,28,new C.eCS(k),m)],h),A.m,j,A.e,A.Q,0,A.p))},
c_f(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=B.a([new B.cS(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bm(g*1.6*f)?1:0
w=h
break
case"bounce":o=-Math.abs(Math.sin(A.k.F(g*2-q*0.5,1)*3.141592653589793))*s.x*0.5
w=h
break
case"wave":o=Math.sin(g*3.141592653589793*2-q*3)*s.x*0.28
w=h
break
case"neon":v=Math.sin(g*40+e*7)>0.92?0.25:1
A.d.a8(p)
p.push(new B.cS(h,A.J,30*v))
p.push(new B.cS(h.j(0.8),A.J,60*v))
w=h
m=v
break
case"glitch":u=A.o.F(A.k.bm(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.ba
else w=u?A.c5:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.lI.au(0,t)
w=h
m=t
break
case"rainbow":w=new M.vJ(1,A.k.F(g*360+e*40,360),0.75,1).lZ()
A.d.a8(p)
p.push(new B.cS(w.j(0.7),A.J,18))
break
default:w=h}return B.db(B.dU(B.ed(A.A,B.d(d,r,r,r,r,r,r,B.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new B.x(l,o)),m)}}
C.aLA.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.aLF.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.eb.prototype={}
C.tx.prototype={
apO(d,e,f,g){var w=this
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
C.aa_.prototype={}
C.ab6.prototype={}
C.a46.prototype={
bcQ(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.ht()?-1:1
v=t.an()*3.141592653589793*2
u=f*(0.3+t.an())
s.push(new C.aa_(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.an()*0.45));++r}},
c2k(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bs(w,new C.bLz())},
ajB(d,e,f,g){var w="p"+this.c++,v=new C.tx(w,e,f,g)
v.apO(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bs(this.b,new C.bLK(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cG7(d,e,f,g,h){return A.d.b4(this.b,new C.bLF(e,f,g,h))},
akj(d,e,f,g){var w
if(d===f||this.cG7(0,d,e,f,g))return null
w=new C.ab6(d,e,f,g)
this.b.push(w)
return w},
aA5(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zF(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
amU(d){return this.LG(d)&&!d.x&&d.cx>this.zF(d)},
b5n(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
LG(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c6j(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.z8.h(0,v)
if(w!=null)return w.a
return 100},
v6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c2k(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.T(v).k("a_<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.L)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.a_(v,new C.bLL(a2),t).cM(0,0,new C.bLM(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.U(x.N,u)
n=new C.bLO(o)
m=B.a([],x.t)
l=new C.bLN(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.L)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.L)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.U(u,u)
f=new C.bLQ(g,l,n)
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
a2.b5j(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zF(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b5j(e,d,w,!0)
a2.bMH(a4)},
b5j(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.U(x.N,b3),b5=new C.bLB(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bLA(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.L)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bLD(B.U(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.L)(w),++u){t=w[u]
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
if(h)B.b8(B.dH(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c3(b7,0,!1,b3)
a0=B.c3(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.L)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b5n(t)*(1+t.CW))
a4=b2.aA5(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c6j(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bPQ(e,a0,b8)
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
bPQ(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.c3(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=B.c3(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bMH(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.L)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aA5(o)/a1.b5n(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zF(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bEP(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bcQ(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tK(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
l=o.fr
j=Math.abs(m*l)
i=Math.abs(l)
if((n==="buck"||n==="regulator")&&!o.x){m=n==="regulator"
h=m?5:o.e
if(i<0.002)o.cy=A.k.D(o.db-h,0,24)
else o.cy=A.k.D(o.cy+(o.dx-h)*0.7,0,24)
l=o.db
g=l>h+0.2&&Math.abs(o.dx-h)<0.35?1:0
o.fx=g
o.ax=g>0?o.ax+a2:0
if(l>26)a1.tK(o,"The "+$.qi().h(0,n).b+" got "+A.k.ab(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tK(o,"More than 1.5 amps went through the "+$.qi().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tK(o,"The regulator had to turn "+A.k.ab(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.ab(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tK(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.z8.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qi().h(0,n).b
l=f.b
l=l===A.k.ja(l)?""+A.k.V(l):B.u(l)
g=f.c
g=g===A.k.ja(g)?""+A.k.V(g):B.u(g)
a1.tK(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ab(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eSO.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tK(o,"The bulb got "+A.k.ab(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tK(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.D(j/14,0,1)
break
case"motor":n=A.k.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tK(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.D(i/1,0,1)
if(!o.x&&i>1)a1.tK(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tK(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tK(o,"The capacitor was charged to "+A.k.ab(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bEP(d){return A.d.b4(this.a,new C.bLy(d))},
tK(d,e){var w
d.x=!0
d.ay=e
this.bcQ(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bhu(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aGg(d){var w=d.b
return D.aNH.t(0,w)||D.z8.ai(0,w)||w==="buck"||w==="regulator"},
beg(d){var w,v=!0
if(!this.LG(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.z8.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
UE(d,e){var w=this.b
return new B.a_(w,new C.bLS(d,e),B.T(w).k("a_<1>")).gL(0)},
Ct(d){var w,v
if(d.x)return!1
w=d.b
if(D.z8.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bcm(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qi().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aGg(d)||i.Ct(d))return null
w=i.UE(d,0)
v=i.UE(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.T(u).k("a_<1>")
s=B.C(new B.a_(u,i.gcOA(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.ja(r)?""+A.k.V(r):B.u(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ab(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.z8.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aGl("battery"),o=J.aW(t.a),t=new B.f4(o,t.b);t.C();){n=o.gT(o)
if(n.e===1.5&&n.as<=0.02&&i.UE(n,0)+i.UE(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aGl("switch"),o=J.aW(t.a),t=new B.f4(o,t.b);t.C();)if(!o.gT(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qi().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zF(k))return"The "+$.qi().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ab(k.cx,2)+" amps, but it can only give about "+A.k.ab(i.zF(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b4(u,new C.bLG(i,d))
h=q.b
h=h===A.k.ja(h)?""+A.k.V(h):B.u(h)
u=A.k.ab(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ab(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ab(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aGl(d){var w=this.a
return new B.a_(w,new C.bLJ(d),B.T(w).k("a_<1>"))},
aFT(d){return this.aGl(d).b4(0,new C.bLI(0.35))},
pO(d,e){return A.d.b4(this.a,new C.bLH(e))}}
C.aik.prototype={
a6(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.W()
w=B.N()
w.r=F.AL.gp(0)
c0.b1(new B.a9(0,0,b8,b9),w)
v=B.N()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.K()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,B.L)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.m1.ai(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.m1.ai(0,h.b)?(h.ch-1)*38:0
b4.cD5(c0,new B.x(k*b6+j*(42+i),l*b7),new B.x(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=C.hvQ(q.a,q.b,c1)
q=b4.e
q.toString
$.W()
p=B.N()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bV
c0.bL(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,B.L)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.W()
g=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
g.r=D.adM.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.z9
s=g.K()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bx(w.save())
w.translate(j,i)
h=A.k.D(A.lI.au(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.cfY(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zF(a0)){g=j+0
f=i+-40
e=Math.sin(r.d*10)
a2=$.W().r
a3=B.a([],k)
a4=new B.aO(a2,A.ao,b5,b5,a3)
a5=f-13
a3.push(new B.b5(g,a5))
a6=g+13
a7=f+10
a3.push(new B.ap(a6,a7))
a8=g-13
a3.push(new B.ap(a8,a7))
a3.push(new B.bE())
a3=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a3.r=A.aw.j(0.65+0.35*e).gp(0)
s=a3.K()
e=a4.gbK().a.snapshot()
w.drawPath((a4.e=new B.cF(e)).a,s)
s.delete()
e=B.a([],k)
a2=new B.aO(a2,A.ao,b5,b5,e)
e.push(new B.b5(g,a5))
e.push(new B.ap(a6,a7))
e.push(new B.ap(a8,a7))
e.push(new B.bE())
e=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
e.b=A.af
e.c=1.6
e.r=A.c.gp(0)
s=e.K()
e=a2.gbK().a.snapshot()
w.drawPath((a2.e=new B.cF(e)).a,s)
s.delete()
a9=new B.l0(new B.eR("!",b5,b5,A.d_,b5,b5,b5,b5,b5,b5,new B.G(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.cb,new B.kI(1),b5,b5,b5,b5,A.c7,b5)
a9.eO()
a9.a6(c0,new B.x(g+-3,f+-8))}if(!a0.x)g=(D.aNH.t(0,h)||D.z8.ai(0,h)||h==="buck"||h==="regulator")&&!r.Ct(a0)&&r.UE(a0,0)+r.UE(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.W()
g=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
g.r=A.aE.gp(0)
s=g.K()
w.drawCircle(j,i,10,s)
s.delete()
a9=new B.l0(new B.eR("!",b5,b5,A.d_,b5,b5,b5,b5,b5,b5,new B.G(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.cb,new B.kI(1),b5,b5,b5,b5,A.c7,b5)
a9.eO()
a9.a6(c0,new B.x(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.m1.ai(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.W()
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.r=F.AL.gp(0)
s=j.K()
w.drawCircle(f,g,7,s)
s.delete()
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.b=A.af
j.c=2.4
j.r=(i&&r.beg(a0)?A.cs:A.ad).gp(0)
s=j.K()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.beg(a0)){a9=new B.l0(new B.eR("+",b5,b5,A.d_,b5,b5,b5,b5,b5,b5,new B.G(!0,A.cs,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.cb,new B.kI(1),b5,b5,b5,b5,A.c7,b5)
a9.eO()
a9.a6(c0,new B.x(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,B.L)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=B.aq(F.Xz,F.XG,b2)
j.toString
i=b1.f
$.W()
h=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
h.r=j.gp(0)
h.c=2.4
h.d=A.bV
s=h.K()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
i.r=j.j(0.35*b2).gp(0)
i.z=A.Rj
s=i.K()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b4(q,new C.bGm())){b3=A.d.cM(q,0,new C.bGn())
$.W()
b7=B.N()
b7.r=D.b9Z.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.b1(new B.a9(0,0,b8,b9),b7)
a9=B.h2(b5,b5,b5,b5,D.f2L,A.a4,A.cb,b5,A.dR,A.c7)
a9.uB(b6-24)
a9.a6(c0,new B.x(12,10))}},
qo(d,e,f,g,h){var w=null,v=B.h2(w,w,w,w,B.d0(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.cb,w,A.dR,A.c7)
v.eO()
v.a6(d,f)},
cD5(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new B.aO($.W().r,A.ao,null,null,B.a([],x.v))
d.E(new B.b5(a1.a,a1.b))
w=C.hoe(a1,a2,a3)
d.E(new B.cR(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.aq(A.aT,D.adM,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.aq(A.aR,A.aT,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bm
u=B.N()
u.b=A.af
u.c=a4?7:5
u.d=A.bV
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aS(d,u)
u=B.N()
u.b=A.af
u.c=2.4
u.d=A.bV
u.r=(a4?A.c:o).gp(0)
a0.aS(d,u)
if(q){n=new B.Sv(new B.vD(B.xc(d),!1,B.a([],x.f5))).gH(0)
m=40+A.k.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.jz()
i=t[u].b
i===$&&B.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jz()
h=t[u].b
h===$&&B.c()
h=A.k.F(j*22+i*m*l,h.a.length())
v.jz()
i=t[u].b
i===$&&B.c()
i=i.a.length()
v.jz()
g=t[u].b
g===$&&B.c()
f=A.k.F(h+i,g.a.length())
v.jz()
i=t[u].MP(f).a
h=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.K()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
P_(d,e,f,g){var w,v,u,t
$.W()
w=B.N()
v=g?A.b1:A.a3
u=g?A.b6:A.a8
t=B.aq(e,A.w,0.3)
t.toString
w.sar(new B.a8(v,u,A.x,B.a([e,f,e,t],x.O),A.Hd,null).aA(0,d))
return w},
avN(d,e,f){return this.P_(d,e,f,!0)},
c1W(d,e){return this.P_(d,A.bm,A.iC,e)},
aha(d,e){var w,v,u
$.W()
w=B.N()
w.sar(D.aMa.aA(0,B.bU(e,4.2)))
d.af(e,4.2,w)
w=e.ad(0,D.e8Y)
v=e.ad(0,D.e96)
u=B.N()
u.r=A.e2.gp(0)
u.c=1.2
d.bL(w,v,u)},
cfY(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.W(),c0=B.N()
c0.sar(D.bWK.aA(0,D.ePx))
c0.c=3.4
c0.d=A.bV
w=B.N()
w.r=A.w.j(0.45).gp(0)
w.z=G.p7
c1.hH(D.ePp,w)
if(c3){w=B.by(D.ePw,A.kD)
v=B.N()
v.r=A.c.j(0.14).gp(0)
c1.aD(w,v)}u=C.h4c(c2)
c1.bL(new B.x(-u,0),D.eaf,c0)
c1.bL(D.e85,new B.x(u,0),c0)
t=c2.x
w=c2.b
s=D.m1.ai(0,w)&&c2.ch!==1
if(s){J.bx(c1.a.save())
c1.bZ(0,c2.ch)}switch(w){case"battery":b3.bBC(c1,c2)
break
case"solar":r=B.by(D.ePs,A.iw)
c1.aD(r,b3.P_(new B.a9(r.a,r.b,r.c,r.d),A.ds,A.bO,!1))
b9=B.N()
w=B.aq(D.bdp,A.d0,0.25+0.55*c2.f)
w.toString
v=B.aq(D.blv,A.ml,0.3+0.4*c2.f)
v.toString
b9.sar(new B.a8(A.ay,A.aC,A.x,B.a([w,v],x.O),b4,b4).aA(0,D.a6D))
c1.b1(D.a6D,b9)
q=B.N()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(b9=c1.a,p=1;p<6;++p){w=-34+p*68/6
o=q.K()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}for(p=1;p<4;++p){w=-18+p*9
o=q.K()
b9.drawLine.apply(b9,[-34,w,34,w,o])
o.delete()}for(p=0;p<6;++p){w=-34+(p+0.5)*68/6
$.W()
v=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
v.r=A.cr.j(0.5).gp(0)
v.c=0.6
o=v.K()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new B.aO($.W().r,A.ao,b4,b4,B.a([],x.v))
b9.E(new B.b5(-34,18))
b9.E(new B.ap(-6+40*c2.f,-18))
b9.E(new B.ap(4+40*c2.f,-18))
b9.E(new B.ap(-24,18))
b9.E(new B.bE())
w=B.N()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aS(b9,w)
w=c2.f
b9=B.N()
b9.r=A.dO.j(0.9).gp(0)
c1.af(D.e8b,4+4*w,b9)
break
case"crank":n=B.by(D.ePd,A.hE)
c1.aD(n,b3.avN(new B.a9(n.a,n.b,n.c,n.d),A.bq,A.bK))
b9=B.N()
b9.sar(D.aMb.aA(0,B.bU(A.J,12)))
c1.af(A.J,12,b9)
m=new B.x(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.N()
b9.r=A.cr.gp(0)
b9.c=5
b9.d=A.bV
c1.bL(A.J,m,b9)
b9=B.N()
b9.sar(D.eiU.aA(0,B.bU(m,7)))
c1.af(m,7,b9)
b3.aha(c1,D.ea8)
b3.aha(c1,D.e7Z)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aO(b9,A.ao,b4,b4,B.a([],w))
v.E(new B.b5(-3,24))
v.E(new B.ap(3,24))
v.E(new B.ap(1.5,0))
v.E(new B.ap(-1.5,0))
v.E(new B.bE())
l=B.N()
l.r=A.bO.gp(0)
c1.aS(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.bx(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=B.a([],w)
j=new B.aO(b9,A.ao,b4,b4,l)
l.push(new B.b5(0,-2))
l.push(new B.cR(6,-14,2,-30))
l.push(new B.cR(-2,-14,0,-2))
l.push(new B.bE())
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.r=A.c.gp(0)
o=l.K()
l=j.gbK().a.snapshot()
v.drawPath((j.e=new B.cF(l)).a,o)
o.delete()
v.restore()}b9=B.N()
b9.sar(D.eiB.aA(0,B.bU(A.J,4.5)))
c1.af(A.J,4.5,b9)
break
case"switch":n=B.by(D.ePk,A.rC)
b9=B.N()
b9.sar(D.aoO.aA(0,new B.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,b9)
b3.aha(c1,D.Sc)
b3.aha(c1,D.aH0)
i=c2.w?D.aH0:D.e7J
b9=B.N()
b9.r=A.au.gp(0)
b9.c=6
b9.d=A.bV
c1.bL(D.Sc,i,b9)
b9=B.N()
b9.r=(c2.w?A.bn:A.bO).gp(0)
b9.c=4
b9.d=A.bV
c1.bL(D.Sc,i,b9)
b9=B.kr(D.Sc,i,0.85)
b9.toString
w=B.N()
w.r=A.aw.gp(0)
c1.af(b9,5,w)
break
case"fuse":h=B.by(D.aMM,D.aMf)
b9=B.N()
b9.r=A.fe.j(0.25).gp(0)
c1.aD(h,b9)
b9=B.N()
b9.b=A.af
b9.c=1.4
b9.r=A.aA.gp(0)
c1.aD(h,b9)
if(!t){b9=B.N()
b9.c=1.6
b9.r=B.aq(A.bO,A.cY,c2.fx).gp(0)
c1.bL(D.aHh,D.aH_,b9)}else{b9=B.N()
b9.c=1.6
b9.r=A.c_.gp(0)
c1.bL(D.aHh,D.eaw,b9)
b9=B.N()
b9.c=1.6
b9.r=A.c_.gp(0)
c1.bL(D.e8C,D.aH_,b9)
b9=B.N()
b9.r=A.dI.gp(0)
c1.af(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=B.ci(new B.x(F.js[g]*22,0),20,9)
w=B.by(f,A.hD)
o=b3.P_(f,A.d8,A.oB,!0).K()
b9.drawRRect(B.eT(w),o)
o.delete()}break
case"pot":b9=B.N()
b9.sar(D.eiM.aA(0,B.bU(A.J,21)))
c1.af(A.J,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
d.r=A.aA.gp(0)
d.c=1.2
o=d.K()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=B.N()
b9.sar(D.eiz.aA(0,B.bU(A.J,13)))
c1.af(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=B.N()
j.r=A.aT.gp(0)
j.c=3
j.d=A.bV
c1.bL(new B.x(b9*3,w*3),new B.x(v*12,l*12),j)
break
case"resistor":a1=B.by(D.aMM,D.aMf)
b9=B.N()
b9.sar(D.c_1.aA(0,new B.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=x.O
a2=B.F([47,B.a([B.b0(b5),B.b0(b6),A.w],b9),100,B.a([B.b0(b7),A.w,B.b0(b7)],b9),220,B.a([B.b0(b8),B.b0(b8),B.b0(b7)],b9),470,B.a([B.b0(b5),B.b0(b6),B.b0(b7)],b9),1000,B.a([B.b0(b7),A.w,B.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
v.r=a3[p].gp(0)
o=v.K()
b9.drawRect(B.bX(new B.a9(w,-9,w+4.5,9)),o)
o.delete()}b9=B.N()
b9.r=A.aT.gp(0)
c1.b1(D.ePG,b9)
b9=c2.r
b3.qo(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.e9O,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.N()
v.r=A.dO.j(0.55*w).gp(0)
v.z=A.z9
c1.af(D.wj,34,v)}n=B.ci(D.e7e,12,18)
c1.aD(B.by(n,A.hD),b3.P_(n,A.bm,A.e4,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.r=A.dq.gp(0)
l.c=1
o=l.K()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=B.N()
if(t)v=A.Wl
else{v=B.aq(A.e4,A.hI,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.ET
else{l=B.aq(A.ds,A.dO,c2.fx)
l.toString}w.sar(new B.c_(A.t_,0.5,A.x,b4,0,B.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aA(0,B.bU(A.rz,17)))
c1.af(A.rz,17,w)
w=B.N()
w.b=A.af
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.af(A.rz,17,w)
b9=b9.r
w=x.v
l=new B.aO(b9,A.ao,b4,b4,B.a([],w))
l.E(new B.b5(-9,-12))
l.E(new B.cR(-12,-4,-9,0))
v=B.N()
v.b=A.af
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aS(l,v)
v=B.N()
v.r=A.cU.gp(0)
v.c=1.4
c1.bL(D.eas,D.eau,v)
v=B.N()
v.r=A.cU.gp(0)
v.c=1.4
c1.bL(D.e8v,D.e8y,v)
w=B.a([],w)
a4=new B.aO(b9,A.ao,b4,b4,w)
a4.E(new B.b5(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new B.ap(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bA(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.W()
b9=B.N()
b9.b=A.af
b9.c=1.8
if(t)w=A.aW
else{w=B.aq(A.ds,D.bei,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aS(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.N()
v.r=A.aw.j(0.6*w).gp(0)
v.z=D.drn
c1.af(A.rz,30,v)}w=B.N()
w.r=A.e4.gp(0)
w.c=2.4
c1.bL(D.eay,D.eax,w)
w=B.N()
w.r=A.e4.gp(0)
w.c=2.4
c1.bL(D.e8E,D.e8D,w)
b9=b9.r
w=x.v
a6=new B.aO(b9,A.ao,b4,b4,B.a([],w))
a6.E(new B.b5(-12,8))
a6.E(new B.ap(-12,-6))
a6.E(new B.cR(0,-26,12,-6))
a6.E(new B.ap(12,8))
a6.E(new B.bE())
v=B.N()
if(t)l=A.j1
else{l=B.aq(A.es,D.bfM,c2.fx)
l.toString}if(t)j=A.kv
else{j=B.aq(A.kt,A.aw,c2.fx)
j.toString}v.sar(new B.a8(A.ay,A.aC,A.x,B.a([l,j],x.O),b4,b4).aA(0,D.eOL))
c1.aS(a6,v)
v=B.N()
v.b=A.af
v.c=1.2
v.r=A.k0.gp(0)
c1.aS(a6,v)
v=B.N()
v.r=A.ey.gp(0)
c1.b1(D.eOQ,v)
w=new B.aO(b9,A.ao,b4,b4,B.a([],w))
w.E(new B.b5(-7,-4))
w.E(new B.cR(-6,-12,0,-15))
b9=B.N()
b9.b=A.af
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aS(w,b9)
break
case"motor":a7=new B.a9(-28,-14,20,14)
c1.aD(B.by(a7,A.hU),b3.avN(a7,A.ak,A.aL))
b9=B.N()
b9.r=A.co.gp(0)
c1.b1(D.eOy,b9)
b9=B.N()
b9.r=A.cr.gp(0)
c1.b1(D.eOz,b9)
b9=c1.a
J.bx(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bx(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=B.ci(D.e7w,15,7)
v=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
v.r=A.cY.j(0.9).gp(0)
o=v.K()
b9.drawOval(B.bX(w),o)
o.delete()
b9.restore()}w=B.N()
w.r=A.au.gp(0)
c1.af(A.J,3,w)
b9.restore()
b3.qo(c1,"M",D.ea7,A.au,14)
break
case"buzzer":a8=B.ci(A.J,42,42)
b9=B.N()
b9.sar(D.eiQ.aA(0,a8))
c1.hH(a8,b9)
b9=B.N()
b9.r=A.w.gp(0)
c1.af(A.J,6,b9)
b9=B.N()
b9.b=A.af
b9.c=1.4
b9.r=A.b2.gp(0)
c1.af(A.J,6,b9)
b3.qo(c1,"+",D.ea0,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.F(w.d*14,5):0
l=B.bU(A.J,24+k*5+l)
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.b=A.af
j.c=2
j.r=A.c5.j(v*(1-k*0.22)).gp(0)
o=j.K()
b9.drawArc.apply(b9,[B.bX(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=B.by(D.ePg,A.hU)
w=B.N()
w.sar(D.bXH.aA(0,new B.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,w)
w=B.a([],x.v)
a9=new B.aO(b9.r,A.ao,b4,b4,w)
a9.E(new B.b5(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new B.cR(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bA(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.W()
w=B.N()
w.b=A.af
w.c=10
w.r=D.beX.j(0.5*b9).gp(0)
w.z=A.lw
c1.aS(a9,w)}$.W()
b9=B.N()
b9.b=A.af
b9.c=3.2
b9.d=A.bV
b9.r=B.aq(A.lN,A1.Xn,c2.fx).gp(0)
c1.aS(a9,b9)
break
case"capacitor":a7=new B.a9(-16,-22,16,18)
b9=B.by(a7,A.hU)
w=B.N()
w.sar(D.bWC.aA(0,a7))
c1.aD(b9,w)
w=B.N()
w.r=A.bO.gp(0)
c1.b1(D.eOW,w)
for(p=0;p<4;++p){b0=new B.l0(new B.eR("\u2212",b4,b4,A.d_,b4,b4,b4,b4,b4,b4,new B.G(!0,A.au,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.cb,new B.kI(1),b4,b4,b4,b4,A.c7,b4)
b0.eO()
b0.a6(c1,new B.x(-14,-18+p*9))}b1=new B.a9(-16,-24,16,-17)
c1.aD(B.by(b1,A.hD),b3.c1W(b1,!1))
b9=38*c2.fx
w=18-b9
$.W()
v=B.N()
v.r=A.bn.j(0.5).gp(0)
c1.b1(new B.a9(-3,w,11,w+b9),v)
b3.qo(c1,"1F",D.wj,A.c,11)
break
case"radio":a1=B.by(D.a6D,A.hE)
b9=B.N()
b9.sar(D.c_h.aA(0,new B.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=B.N()
b9.b=A.af
b9.c=1.4
b9.r=A.oB.j(0.6).gp(0)
c1.aD(a1,b9)
b9=B.by(D.ePh,A.iw)
w=B.N()
w.r=A.dG.gp(0)
c1.aD(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
v.r=A.lN.gp(0)
v.c=1.4
o=v.K()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=B.N()
w.r=(c2.fx>0?A.fT:A.nK).gp(0)
c1.b1(D.eOB,w)
if(c2.fx>0){w=8+A.k.F(b3.b.d*7,18)
v=B.N()
v.r=A.bx.gp(0)
v.c=1.6
c1.bL(new B.x(w,-13),new B.x(w,-3),v)}w=B.N()
w.sar(D.aMb.aA(0,B.bU(D.a5D,6)))
c1.af(D.a5D,6,w)
w=B.N()
w.r=A.oB.gp(0)
c1.af(D.e84,4,w)
w=B.N()
w.r=A.e4.gp(0)
w.c=1.8
c1.bL(D.e82,D.aH4,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=B.bU(D.aH4,4+k*5+A.k.F(w.d*8,5))
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.b=A.af
l.c=1.4
l.r=A.nQ.j(0.7).gp(0)
o=l.K()
b9.drawArc.apply(b9,[B.bX(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=B.by(D.ePr,A.hU)
v=B.N()
v.r=K.mX.gp(0)
c1.aD(w,v)
b2=B.by(D.ePo,A.hD)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bx(b9.save())
b9.clipRRect(B.eT(b2),$.px(),!0)
b9.translate(-33,-21)
E.h0k(c1,D.eVw,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.N()
b9.r=A.bn.gp(0)
c1.af(D.e8g,1.6,b9)}else{w=B.N()
w.r=D.vl.gp(0)
c1.aD(b2,w)
b9=new B.aO(b9.r,A.ao,b4,b4,B.a([],x.v))
b9.E(new B.b5(-33,-21))
b9.E(new B.ap(-10,-21))
b9.E(new B.ap(-33,0))
b9.E(new B.bE())
w=B.N()
w.r=A.c.j(0.05).gp(0)
c1.aS(b9,w)}b9=B.N()
b9.r=A.bq.gp(0)
c1.b1(D.eOP,b9)
break}C.i7H(c1,c2,b3.b.d,b3.gc6k())
if(t)b3.qo(c1,"\u2716",D.eaB,A.aw,14)
if(s)c1.a.restore()},
bBC(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new B.a9(-28,-13,28,13)
d.aD(B.by(w,A.rC),m.avN(w,A.ds,A.iZ))
v=new B.a9(-22,-13,22,13)
$.W()
u=B.N()
u.sar(D.aoH.aA(0,v))
d.b1(v,u)
u=B.N()
u.r=A.dS.gp(0)
d.b1(D.eP4,u)
t=new B.a9(28,-5,34,5)
d.aD(B.by(t,A.hb),m.P_(t,A.ds,A.iC,!0))
m.qo(d,"+",D.e7O,A.aT,11)
m.qo(d,"\u2212",D.ea9,A.ad,11)
m.qo(d,B.u(l===A.k.ja(l)?A.k.V(l):l)+"V",D.e9U,A.aT,13)
if(l===1.5){u=B.N()
u.r=A.bD.gp(0)
d.b1(D.eP3,u)
u=e.as
s=B.N()
s.r=B.aq(A.aw,A.bn,u).gp(0)
d.b1(new B.a9(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qo(d,"FLAT",D.e9N,A.cs,9)}if(l>2){u=B.N()
u.r=A.b2.gp(0)
u.c=1
d.bL(D.e7k,D.aGK,u)
m.qo(d,l>3?"3 cells":"2 cells",D.e9T,A.aA,8)}}else if(l<=9){r=new B.a9(-22,-17,22,17)
u=B.by(r,A.rC)
$.W()
s=B.N()
s.sar(D.bZP.aA(0,r))
d.aD(u,s)
s=B.N()
s.r=A.cS.gp(0)
d.b1(D.eP5,s)
for(u=d.a,q=0;q<2;++q){p=F.ay1[q]
s=p<0?5:3.6
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.sar(D.aMa.aA(0,B.bU(new B.x(p,-18),5)))
n=o.K()
u.drawCircle(p,-18,s,n)
n.delete()}m.qo(d,"9V",D.e9P,A.c,16)}else{r=new B.a9(-34,-16,34,16)
u=B.by(r,A.iw)
$.W()
s=B.N()
s.sar(D.aoH.aA(0,r))
d.aD(u,s)
s=B.N()
s.r=A.bH.gp(0)
d.b1(D.ePq,s)
for(u=d.a,q=0;q<2;++q){s=B.by(B.ci(new B.x(F.a3t[q],-20),8,10),A.hb)
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.r=A.cr.gp(0)
n=o.K()
u.drawRRect(B.eT(s),n)
n.delete()}m.qo(d,"+",D.e7V,A.aw,10)
m.qo(d,"12V",D.e9Q,A.au,15)}},
av(d){return!0}}
C.mB.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=B.U(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.tx(o,r,q,p)
n.apO(o,r,q,p)
k.push(n)
J.iu(s[4],new C.cl4(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.L)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.akj(m,u[1],l,u[3])}}}
C.aii.prototype={
U(){var w=x.N
return new C.aij(A.J,A.az,B.U(w,x.gl),B.aY(w),$,A.bB,0,B.a([],x.X),null,null)}}
C.aij.prototype={
adO(d){var w=this,v=w.as
if(v!=null)v.a7(0)
w.m(new C.bG0(w,d))
w.as=B.cM(A.lk,new C.bG1(w))},
q(){var w=this.as
if(w!=null)w.a7(0)
w=this.ch
if(w!=null)w.a7(0)
this.brB()},
a_I(d,e){return this.cdU(d,e)},
b_G(d){return this.a_I(d,!1)},
cdU(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a_I=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.r1:A.xI
p=d.b
w=3
return B.b(E.h0D(s,r,p,d.ax<3.2,q,$.qi().h(0,p).b),$async$a_I)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a_I,v)},
cqx(d){var w=this,v=new B.S(Date.now(),0,!1),u=w.at.c7(0,d.a,new C.bG2()),t=J.cE(u)
t.M(u,v)
t.bs(u,new C.bG3(v))
if(t.gL(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a7(0)
w.a11(d)
return}if(t.gL(u)===3){t=w.ch
if(t!=null)t.a7(0)
w.ch=B.cM(A.kw,new C.bG4(w,u,d))}},
a_o(d){return this.cch(d)},
cch(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a_o=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.i8R(s,d.b,A.k.V(A.k.F(t.a.c.d*0.12,1)*100)),$async$a_o)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a_o,v)},
a11(d){return this.co7(d)},
co7(d){var w=0,v=B.j(x.H),u=this,t
var $async$a11=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bQ(F.li,null,new C.bFZ(u,d),t,!0,!0,!1,A.jR,!1,!1,x.H),$async$a11)
case 2:return B.h(null,v)}})
return B.i($async$a11,v)},
a_(){this.a1()
this.beq()
this.oZ()},
beq(){this.a.c.e=new C.bGj(this)},
pW(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.v6(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=D.m1.h(0,s.b)
if((r==null?null:r.b)!==D.zz)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.M(0,s.a)
q.a_I(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)E.dX(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)E.dX(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cW.an()<0.5
else u=!1
if(u)E.dX(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){E.dX(900+A.cW.az(800),"",90,0,0.1,o)
if(A.cW.an()<0.35)E.dX(300+A.cW.az(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cW.an()<0.4
else u=!1
if(u)E.dX(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)E.dX(330+A.o.F(110*A.k.bm(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dX((A.k.bm(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)E.dX(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)E.dX(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cW.an()<0.5
else u=!1
if(u)E.dX(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)E.dX(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)E.dX(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new C.bGk())},
b6E(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.L)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.m1.ai(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.z(p,n)
r=i}}}return s},
b0m(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.T(w).k("dx<1>"),w=new B.dx(w,v),w=new B.bS(w,w.gL(0),v.k("bS<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.m1.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cD6(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.L)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.m1.ai(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.m1.ai(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hoe(new B.x(k,n),new B.x(i,l),p)
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
adM(){this.a.toString
this.m(new C.bFu())},
bok(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.d0t[v]
if(!A.d.b4(p.a.c.a,new C.bGl(u,w))){o=new B.x(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?I.Ij:o
s=s?I.Ij:o
q=t.ajB(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dX(1200,"",50,0,0.3,"tri")
p.adM()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.Qx[v].a)
u=w.length
t=u>8
s=t?A.d.ds(w,0,A.o.am(u+1,2)):w
r=t?A.d.fO(w,A.o.am(w.length+1,2)):A.U
q=n.a.d
if(q!=null){w=B.a6(q).k("cv<1>")
w=B.C(new B.cv(q,w),w.k("J.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.L)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b0b(s,!0))
n.a.toString
if(t)w.push(n.b0b(r,!0))
w.push(B.E(B.cA(new C.bGi(n,q,m)),1))
return B.w(w,A.m,null,A.e,A.j,0,A.p)},
b0b(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.L)(d),++v){u=d[v]
t=$.qi()
s=t.h(0,u).d.j(0.14)
r=new B.aR(14,14)
q=new B.az(t.h(0,u).d.j(0.5),1,A.q,-1)
m.push(B.aB(p,B.p(p,B.w(B.a([new B.y(t.h(0,u).c,p,A.zO,p,p,p,p,p,p,p,p,p),new B.y(t.h(0,u).b,p,A.nr,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.b7,A.j,0,A.p),A.f,p,p,new B.o(s,p,new B.bO(q,q,q,q),new B.bo(r,r,r,r),p,p,A.n),p,p,p,F.tG,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bFv(this,u),p,p,p,p,p,p,!1,A.a7))}return B.p(p,B.cy(m,p,A.h7,p,p,A.aN,!1),A.f,p,p,new B.o(F.AJ,p,new B.bO(A.W,A.W,new B.az(o,1,A.q,-1),A.W),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aYK(d){var w=null,v=B.n(18)
return B.p(w,d,A.f,w,w,new B.o(F.acu,w,B.I(A.bD,A.q,1),v,w,w,A.n),w,w,w,w,F.ahK,w,w,w)},
cfZ(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qi().h(0,o),m=d.dy,l=d.fr,k=new C.bFO(q,n),j=B.d(n.c,p,p,p,p,p,p,A.Jm,p,p,p),i=n.b,h=n.d,g=x.p
i=B.B(B.a([j,A.ab,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aI(p,p,p,p,D.bNS,p,p,p,new C.bFB(q,d),p,p,p,p,"Remove part",A.cc),B.aI(p,p,p,p,A.GI,p,p,p,new C.bFC(q),p,p,p,p,p,A.cc)],g),A.m,p,A.e,A.j,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,F.DC,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fbl,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ab(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ab(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ab(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.av,w,A.am,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.cs:A.aT,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bcm(d)
if(v!=null){l=(d.x?A.aw:A.aE).j(0.14)
j=B.n(10)
i=B.I((d.x?A.aw:A.aE).j(0.5),A.q,1)
m.push(new B.D(A.i4,B.p(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fhJ,p,p,p),A.f,p,p,new B.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cp,p,p,p),p))}if(C.fZo(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new C.f3("CH "+t,d.at===u,new C.bFD(q,d,u),p,h,p))}l=B.bZ(A.bC,l,A.br,4,6)
l=B.a([A.am,l,A.av,B.d(q.a.c.Ct(d)?"Showing: "+F.Q7[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hc,p,p,p)],g)
if(q.a.c.Ct(d))l.push(new C.j4(A.Gf,"Open big screen",new C.bFG(q,d),h,p))
A.d.v(m,l)}if(D.m1.ai(0,o)&&!C.fZo(o)){l=B.a([A.am,B.d(q.a.c.Ct(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hc,p,p,p)],g)
if(q.a.c.Ct(d))l.push(new C.j4(A.NR,"Open the "+$.qi().h(0,o).b,new C.bFH(q,d),h,p))
A.d.v(m,l)}if(D.m1.ai(0,o))A.d.v(m,B.a([A.am,new C.j4(A.BR,"Make it bigger (or tap it 4 times)",new C.bFI(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ab(d.db,1)
if(q.a.c.Ct(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.am,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ab(i,1)+" V",p,p,p,p,p,p,D.fc8,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dhz[s]
j=r===A.k.ja(r)?A.k.V(r):r
l.push(new C.f3(B.u(j)+" V out",d.e===r,new C.bFJ(q,d,r),p,h,p))}i.push(new B.D(A.lS,B.bZ(A.bC,l,A.br,0,6),p))}if(o==="regulator")i.push(D.fzU)
A.d.v(m,i)}if(q.a.c.LG(d)&&!d.x){l=A.k.ab(d.cx,2)
j=A.k.ab(q.a.c.zF(d),2)
i=q.a.c
w=i.amU(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.amU(d)?A.cs:A.ek,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.n(4)
w=A.k.D(d.cx/q.a.c.zF(d),0,1)
i=q.a.c.amU(d)?A.aw:A.bn
m.push(new B.D(A.i4,B.w(B.a([l,A.cQ,B.bw(j,B.m5(A.bD,p,p,5,p,w,new B.lZ(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.i4,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.f6a,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.d78[s]
j=r===1.5?"1.5 V (rechargeable)":B.u(r)+" V"
l.push(new C.f3(j,d.e===r,new C.bFK(q,d,r),p,h,p))}m.push(B.bZ(A.bC,l,A.br,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.cYQ[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new C.f3(j,d.r===r,new C.bFL(q,d,r),p,h,p))}m.push(B.bZ(A.bC,l,A.br,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bFM(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bFN(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bFE(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bFF(d)))
if(o==="crank")m.push(D.fvn)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hc,p,p,p))
return q.aYK(new B.cT(D.b_Z,B.cc(B.w(m,A.F,p,A.e,A.Q,0,A.p),A.r,p,A.y,p,p,p,p,A.ah),p))}}
C.ba7.prototype={}
C.US.prototype={
U(){return new C.aCL(C.h4b(),new B.cu(null,x.gJ),B.aY(x.S))}}
C.aCL.prototype={
a_(){this.a1()
$.aV.bY$.push(this)
this.adN()},
adN(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fu5(),$async$adN)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.i83(t.d,r)
if(s!=null){t.m(new C.dR6(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$adN,v)},
EU(){var w,v=this
if(!v.as)return
w=C.hZD(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bCH(w)},
j6(d){if(d!==A.fv)this.EU()},
q(){$.aV.hM(this)
this.EU()
this.a2()},
c6m(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.T(v).k("a_<1>")
t=new B.a_(v,new C.dRf(q),u).gL(0)
s=new B.a_(v,new C.dRg(),u).gL(0)
r=new B.a_(v,w.gcS4(),u).gL(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.dRh(q,t,s,r))}if(A.o.F(q.w,45)===0)q.EU()
if(A.o.F(q.w,10)===0){w=q.f
$.ahw()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.ahw()[q.f].c.$1(q.d)){w.M(0,q.f)
C.IO("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.dRi())
q.EU()
w=q.c
w.toString
w=B.X6(w)
if(w!=null)w.R(B.b2(p,p,p,p,p,A.r,p,B.d("\u2705 Challenge done: "+$.ahw()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mn,p,p,p,p,p,p,p,p,p,p))}},
agr(){var w=0,v=B.j(x.H),u=this,t
var $async$agr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ca(null,null,!0,null,new C.dR5(u),t,null,!0,!0,x.H),$async$agr)
case 2:return B.h(null,v)}})
return B.i($async$agr,v)},
aYJ(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.n(12),t=B.I(f.j(0.45),A.q,1)
u=B.a([B.ao(w,B.p(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aB(w,B.hx(new B.a7(40,38,new B.an(A.V,w,A.a9,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7)},
aYI(d,e,f,g){return this.aYJ(d,e,f,g,null)},
aqt(d,e,f,g){var w=null,v=f.j(0.1),u=B.n(10),t=B.I(f.j(0.4),A.q,1)
return B.E(B.aB(w,B.p(w,B.B(B.a([B.X(d,f,w,w,w,15),A.eg,new B.dq(1,A.cm,B.d(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b7,A.j,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7),1)},
aeK(){var w=0,v=B.j(x.H),u=this,t
var $async$aeK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a4(t,!1).cm(B.e9(new C.dR1(u),!1,null,x.H)),$async$aeK)
case 2:t=u.e.gbk()
if(t!=null)t.beq()
if(u.c!=null)u.m(new C.dR2())
u.EU()
return B.h(null,v)}})
return B.i($async$aeK,v)},
bEI(){var w,v,u,t,s=null,r=this.f
$.ahw()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bc:A.aw
u=B.n(9)
t=B.I(F.AJ,A.q,1.5)
return B.p(s,B.au(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wB,s,s,s),s,s,s),A.f,s,D.b05,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eS,s,s,s)},
ahx(){var w=0,v=B.j(x.H),u=this,t
var $async$ahx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bQ(F.li,null,new C.dRe(u),t,!0,!0,!0,A.jR,!1,!1,x.H),$async$ahx)
case 2:return B.h(null,v)}})
return B.i($async$ahx,v)},
c6n(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aB(r,B.p(r,D.bP5,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a5),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dRk(d),r,r,r,r,r,r,!1,A.a7),o=B.n(11)
o=B.p(r,D.b5L,A.f,r,r,new B.o(A.bl,r,B.I(A.aR.j(0.45),A.q,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.w(B.a([B.B(B.a([p,A.ab,o,A.ab,B.E(B.w(B.a([D.fxW,B.d(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.f1:A.hh,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new C.awU(s.gcbZ(),r),A.rJ,s.aYI(A.yi,"Construction Lab: real 3D wiring, plumbing and a house",A.cY,new C.dRl(s,d)),s.aYJ(A.lp,"Challenges",A.aT,s.gct6(),s.bEI()),s.aYI(A.NL,"How to play",A.aR,new C.dRm(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.am,B.B(B.a([s.aqt(A.o_,"Circuits",A.by,s.gclY()),A.bp,s.aqt(A.oR,"Repair",A.aT,new C.dRn(s)),A.bp,s.aqt(D.Nz,"Clear",A.cs,new C.dRo(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new B.o(F.AJ,r,new B.bO(A.W,A.W,new B.az(q,1,A.q,-1),A.W),r,r,r,A.n),r,r,r,r,D.byr,r,r,r)},
B(d){var w=this,v=null
$.ars="tech"
return B.c6(v,A.bY,B.bl(!0,B.w(B.a([w.c6n(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.h31(w.d,w.e,w.gc6l(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0),v,!1,!1,v,v)}}
C.awU.prototype={
U(){return new C.b8m(null,null)}}
C.b8m.prototype={
gawF(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.T,null,1,null,v)
w.cL(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gawF().q()
this.bsR()},
B(d){var w=null,v=this.a.c
return B.aB(w,B.hx(new B.a7(42,42,B.c7(this.gawF(),new C.cBW(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a7)}}
C.b8l.prototype={
a6(d,e){var w,v,u,t=null,s=e.ei(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.W()
w=B.N()
w.r=A.b5.j(0.25+0.15*o).gp(0)
w.z=G.p7
d.af(s,r+2+o*2,w)
w=B.N()
w.sar(D.eiL.aA(0,B.bU(s,r)))
d.af(s,r,w)
v=B.N()
v.b=A.af
v.c=2.2
v.sar(new B.fW(A.A,0,6.283185307179586,A.x,D.cQi,t,new B.mp(p)).aA(0,B.bU(s,r)))
d.af(s,r,v)
p=new C.cBV(d)
p.$3(s.ad(0,A.rz),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.e8P),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.eaF),2.6,0.5+0.5*Math.cos(q))
u=B.h2(t,t,t,t,D.f2R,A.a4,A.cb,t,A.dR,A.c7)
u.eO()
u.a6(d,s.ad(0,new B.x(-u.b.c/2,5)))},
av(d){return d.b!==this.b}}
C.axc.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.axd.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.brA()}}
C.aJ6.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bw8.prototype={}
C.fN.prototype={}
C.Jh.prototype={
a3(){return"ScreenStyle."+this.b}}
C.m8.prototype={}
C.UB.prototype={
U(){return new C.biD(null,null)}}
C.biD.prototype={
ga97(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.nW,null,1,null,v)
w.cr(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.ga97().q()
this.buF()},
gRM(){var w=this.ga97().y
w=w==null?null:A.o.am(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.m1.h(0,this.a.c)
if(v==null)v=D.aN2
return B.c6(w,S.Xr,B.bl(!0,new B.an(A.V,w,A.a9,A.r,B.a([B.au(v.b===D.zA?this.bGQ(v):this.ciL(v),w,w,w),B.ao(w,B.aI(w,w,w,w,A.my,w,w,w,new C.dNv(d),w,w,w,B.nC(w,A.aW,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ao(6,B.au(B.d(v.a,w,w,w,w,w,w,D.f4r,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ae,!0,!0),w,!1,!1,w,w)},
c6o(d){var w
A:{if(D.IH===d){w=0.46153846153846156
break A}if(D.uJ===d){w=0.45
break A}if(D.wq===d){w=0.9259259259259258
break A}if(D.SO===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
ciL(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.IH
A:{if(D.IH===p){w=44
break A}if(D.uJ===p){w=30
break A}if(D.wq===p){w=22
break A}if(D.SO===p){w=26
break A}w=14
break A}v=B.c7(this.ga97(),new C.dNu(this,w,d,o),q)
if(p===D.a6M)v=new B.Dl(D.bz3,v,q)
p=this.c6o(p)
u=o?4:5
t=d.c
s=B.aq(t,A.c,o?0.25:0.08)
s.toString
r=B.aq(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.n(w)
s=B.a([new B.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new B.fK(p,B.p(q,B.p(q,v,A.f,q,q,new B.o(A.w,q,q,B.n(w-3),q,q,A.n),q,q,q,q,A0.FN,q,q,q),A.f,q,q,new B.o(q,q,q,t,s,new B.a8(A.ay,A.aC,A.x,r,q,q),A.n),q,q,q,D.bsL,new B.Q(u,u,u,u),q,q,q),q)},
b5Q(d){var w,v,u,t=null,s=new B.S(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bm(this.gRM()*0.4),0,100),q=d.b===D.IH,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.aX(A.o.u(B.dk(s)),2,"0")+":"+A.a.aX(A.o.u(B.h1(s)),2,"0"),t,t,t,t,t,t,A.rQ,t,t,t),A.b4],x.p)
for(w=0;w<4;++w){v=new B.aR(1,1)
n.push(B.p(t,t,A.f,t,t,new B.o(A.c,t,t,new B.bo(v,v,v,v),t,t,A.n),t,4+w*2,t,D.byM,t,t,t,3))}n.push(A.db)
n.push(D.fqQ)
n.push(A.bp)
v=B.I(A.ad,A.q,1)
u=B.n(4)
n.push(B.p(t,new B.bI(A.a3,t,t,B.Bg(A.A,B.p(t,t,A.f,t,t,new B.o(A.bn,t,t,B.n(2),t,t,A.n),t,t,t,A0.FN,t,t,t,t),t,r/100),t),A.f,t,t,new B.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qq)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fi3,t,t,t))
return new B.D(new B.Q(p,12,o,2),B.B(n,A.m,t,A.e,A.j,0,t,t),t)},
auC(d,e,f){var w,v=null,u=d.d,t=B.aq(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.n(e*0.26)
w=x.p
t=B.a([B.p(v,B.au(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dcP,new B.a8(A.ay,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.av,B.d(d.a,v,1,A.a2,v,v,v,D.f8W,v,v,v)],w))
return B.aB(v,B.w(t,A.m,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dNq(this,d),v,v,v,v,v,v,!1,A.a7)},
bY1(d,e){return this.auC(d,e,!0)},
bXL(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.SO||n===D.wq,l=d.d,k=B.aq(l,A.w,0.55)
k.toString
l=B.aq(l,A.kr,0.5)
l.toString
l=B.a([k,A.dx,l],x.O)
k=p.b5Q(d)
w=m?190:138
v=B.n(24)
u=B.I(A.b2,A.q,1)
w=B.aB(o,B.p(o,B.bw(B.n(23),B.b3(o,o,o,new C.aeg(0,p.gRM(),o),A.fE),A.aq),A.f,o,o,new B.o(o,o,u,v,o,o,A.n),o,w,o,A.hM,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dNo(p),o,o,o,o,o,o,!1,A.a7)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.ka[s]
t.push(new B.co(A.A,o,o,p.bY1(r,m?58:54),o))}k=B.a([k,A.am,w,A.ac,B.E(B.lA(0.92,t,v,8,12,A5.vz,o,!1),1)],u)
if(n!==D.a6M){n=A.c.j(0.16)
w=B.n(28)
u=B.a([],u)
for(v=B.dc(F.ka,0,B.dG(4,"count",x.S),x.gD),t=v.$ti,v=new B.bS(v,v.gL(0),t.k("bS<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.auC(q==null?t.a(q):q,50,!1))}k.push(B.p(o,B.B(u,A.m,o,A.rq,A.j,0,o,o),A.f,o,o,new B.o(n,o,o,w,o,o,A.n),o,o,o,D.btB,R.ajb,o,o,o))}return B.p(o,B.w(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new B.o(o,o,o,o,o,new B.a8(A.ay,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bAf(d,e){var w=null
return B.p(w,B.w(B.a([this.b5Q(d),B.E(B.b3(w,w,w,new C.aeg(e,this.gRM(),w),A.fE),1),B.aB(w,B.p(w,B.au(B.d(F.ka[e].a,w,w,w,w,w,w,A.Jc,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dNj(this),w,w,w,w,w,w,!1,A.a7)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bGQ(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.aq(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.n(r?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new B.fK(1.5384615384615383,B.p(t,B.c7(this.ga97(),new C.dNm(this,r,d),t),A.f,t,t,new B.o(t,t,t,v,u,new B.a8(A.ay,A.aC,A.x,w,t,t),A.n),t,t,t,D.bym,new B.Q(8,8,8,s),t,t,t),t)}}
C.bud.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.W()
w=B.N()
v=this.c
u=B.aq(v,A.w,0.6)
u.toString
t=B.aq(v,A.kr,0.4)
t.toString
w.sar(new B.a8(A.ay,A.aC,A.x,B.a([u,A.dx,t],x.O),null,null).aA(0,new B.a9(0,0,n,m)))
d.b1(new B.a9(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
r.r=v.j(0.1).gp(0)
r.z=D.drs
q=r.K()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
av(d){return!0}}
C.aeg.prototype={
a6(d,e){return E.Rn(d,e,this.b,this.c)},
av(d){return!0}}
C.aKR.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bt2.prototype={}
C.a7Z.prototype={
B(d){var w=null
return B.c6(B.ez(w,w,w,!0,!0,D.aeI,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,D.anG,w,w,w,new C.cfI(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fGy,w,w,w,1,w,!0),D.aeI,B.cy(B.a([D.ebX,B.cA(new C.cfJ())],x.p),w,D.buB,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.W8.prototype={
U(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aEc(w,new B.ar(A.as,$.aw()),$,A.bB,0,B.a([],x.X),null,null)}}
C.aEc.prototype={
a_(){this.a1()
this.oZ()},
b3P(d){var w=this.d.length
return A.o.F(A.k.bm(A.k.F(A.k.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
pW(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b3P(v.f)
if(w!==v.x){v.x=w
C.pW("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eHc(v))
C.IO("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
c7y(){if(this.d.length<2)return
this.m(new C.eH8(this))},
aZ9(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eH7(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc7x(),p=s.d,o=B.E(B.aB(r,B.b3(r,r,r,new C.bup(p,s.f,r),A.fE),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a7),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.w(B.a([o,new B.a7(r,40,B.au(B.d(n,r,r,r,r,r,r,D.fgc,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.axd[A.o.F(v,8)].j(0.9)
t=new B.aR(20,20)
o.push(B.aB(r,B.p(r,new B.y(p[v],r,D.fft,r,r,r,r,r,r,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bo(t,t,t,t),r,r,A.n),r,r,r,A.fB,A.h8,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eHa(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a7))}p=A.c.j(0.07)
return C.ou(A.aT,A.jK,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.w(B.a([new C.hm(o,r,r),B.B(B.a([B.E(B.aM(r,A.U,!1,r,!0,A.r,r,B.aN(),s.e,r,r,r,r,r,2,B.bs(r,new B.b4(4,B.n(14),A.W),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kI,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.aj,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eHb(s),r,!1,r,r,!1,r,!0,r,A.aa,r,r,r,r,r,r,r,r,r,r,r,A.dg,!0,A.a4,r,A.an,r,r,r,r),1),A.ab,new C.j4(A.hz,"Add",s.gc7v(s),A.c,r),A.bp,new C.j4(A.oS,"Spin",q,A.bn,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
C.bup.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new B.x(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.W()
w=B.N()
w.r=D.bbo.gp(0)
a1.af(d,f,w)
w=B.N()
w.b=A.af
w.c=3
w.r=A.aT.gp(0)
a1.af(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=B.bU(d,a0)
n=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
n.r=D.axd[A.o.F(q,8)].gp(0)
m=n.K()
n=p*57.29577951308232
f.drawArc.apply(f,[B.bX(o),n,s,!0,m])
m.delete()
o=B.bU(d,a0)
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.b=A.af
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.K()
f.drawArc.apply(f,[B.bX(o),n,s,!0,m])
m.delete()
J.bx(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.ap(o,0,11)+"\u2026"
k=new B.l0(new B.eR(o,i,i,A.d_,i,i,i,i,i,i,D.f3C),A.a4,A.cb,new B.kI(1),i,i,i,i,A.c7,i)
k.eO()
o=k.b
n=o.c
o=o.a.c
k.a6(a1,new B.x(a0-n-16,-o.gbf(o)/2))
f.restore()}f=B.N()
f.r=D.aen.gp(0)
a1.af(d,20,f)
f=B.N()
f.b=A.af
f.c=3
f.r=A.aT.gp(0)
a1.af(d,20,f)
j=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
e-=a0
j.E(new B.b5(g,e+26))
e-=10
j.E(new B.ap(g-14,e))
j.E(new B.ap(g+14,e))
j.E(new B.bE())
e=B.N()
e.r=A.c.gp(0)
a1.aS(j,e)
e=B.N()
e.b=A.af
e.c=2
e.r=A.aW.gp(0)
a1.aS(j,e)},
av(d){return!0}}
C.UZ.prototype={
U(){return new C.biL($,A.bB,0,B.a([],x.X),null,null)}}
C.biL.prototype={
a_(){this.a1()
this.oZ()},
pW(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.IO("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.a4Z(900,new C.dTk())}w.m(new C.dTl())},
aZb(d){return this.m(new C.dTf(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aX(A.o.u(A.k.am(m,60)),2,"0")
v=A.a.aX(A.o.u(A.o.F(A.k.dj(m),60)),2,"0")
m=B.b3(n,n,n,new C.bpe(l,A.cs,n),A.aOm)
u=B.d(w+":"+v,n,n,n,n,n,n,D.f7T,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.au(new B.a7(280,280,new B.an(A.A,n,A.a9,A.r,B.a([m,B.w(B.a([u,B.d(t,n,n,n,n,n,n,D.f6Y,n,n,n),A.av,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.ww,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.d9T[r]
u.push(new C.f3(""+q+" min",o.d===q,new C.dTh(o,q),n,A.cs,n))}m=o.f
p=m?A_.yq:A.j2
m=m?"Pause":"Start"
return C.ou(A.cs,A.jK,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.w(B.a([new C.hm(u,n,n),new C.hm(B.a([new C.j4(p,m,new C.dTi(o),A.bn,n),new C.j4(A.o2,"Reset",new C.dTj(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
C.bpe.prototype={
a6(d,e){var w,v,u,t,s=e.ei(A.J),r=e.a/2-14
$.W()
w=B.N()
w.b=A.af
w.c=16
w.r=A.c.j(0.08).gp(0)
d.af(s,r,w)
w=B.bU(s,r)
v=B.N()
v.b=A.af
v.c=16
v.d=A.bV
u=this.c
t=B.aq(u,A.c,0.4)
t.toString
v.sar(new B.fW(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aA(0,B.bU(s,r)))
d.eV(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
av(d){return d.b!==this.b}}
C.Ud.prototype={
U(){return new C.bip($,A.bB,0,B.a([],x.X),null,null)}}
C.bip.prototype={
a_(){this.a1()
this.oZ()},
pW(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Rc.h(0,p.d)
w.toString
v=A.d.ff(w,new C.dF9())
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
C.pW("flute",D.c01[t]+5,1400,0.35)}p.m(new C.dFa())},
gc7B(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.K7("Press Start",0.5)
w=D.Rc.h(0,this.d)
w.toString
v=A.d.ff(w,new C.dF4())
u=A.k.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.K7("Breathe in",0.5+0.5*A.dy.au(0,p))
case 1:return new B.K7("Hold",1)
case 2:return new B.K7("Breathe out",1-0.5*A.dy.au(0,p))
default:return new B.K7("Hold",0.5)}}}return new B.K7("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc7B(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.iE.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.iE.j(0.35),A.J,40)],v):q,q,A.a5),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.DF,q,q,q))
n.push(B.ao(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kI,q,q,q),q,q,q,q,q,q))
n=B.au(new B.a7(300,340,new B.an(A.A,q,A.a9,A.r,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aW(D.Rc.gep(D.Rc));w.C();){v=w.gT(w)
o.push(new C.f3(v,r.d===v,new C.dF7(r,v),q,A.iE,q))}w=r.e
v=w?A.Gx:A.j2
w=w?"Stop":"Start"
o.push(new C.j4(v,w,new C.dF8(r),A.bn,q))
return C.ou(A.iE,A.jK,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new C.hm(o,q,q))}}
C.aHB.prototype={}
C.UR.prototype={
U(){return new C.biF(new B.cu(null,x.z),B.a([],x.au),A.au,A.c)}}
C.biF.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aI(s,s,s,s,D.qa,s,s,s,new C.dQQ(t,d),s,s,s,s,"Share",s)],r),p=B.bw(B.n(18),new B.eH(B.aB(s,B.b3(s,s,s,new C.bkB(t.e,t.x,s),A.fE),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dQR(t),new C.dQS(t),s,s,s,s,s,s,s,s,s,new C.dQT(t),s,s,s,s,!1,A.a7),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.cRH[w]
u=!t.w&&t.f.A(0,v)
o.push(new C.Fe(v,u,new C.dQU(t,v),!1,s))}u=t.r
return C.ou(A.bA,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bT,p,s),"DRAW PAD",B.w(B.a([new C.hm(o,s,s),C.lM(A.bA,""+A.k.V(u),"Brush",30,2,new C.dQV(t),u),new C.hm(B.a([new C.f3("Eraser",t.w,new C.dQW(t),A.G7,A.bA,s),new C.j4(A.rf,"Undo",new C.dQX(t),A.c,s),new C.j4(A.ef,"Clear",new C.dQY(t),A.c,s),new C.j4(A.NI,"Paper",new C.dQZ(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
C.bkB.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.W()
w=B.N()
w.r=this.c.gp(0)
d.b1(new B.a9(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.L)(w),++s){r=w[s]
q=$.W()
p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bV
p.e=A.hn
p.b=A.af
m=r.c
if(m.length===1){q=A.d.gH(m)
m=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
m.r=o.gp(o)
l=m.K()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=B.a([],t)
k=new B.aO(q.r,A.ao,null,null,o)
o.push(new B.b5(A.d.gH(m).a,A.d.gH(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new B.cR(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bA(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new B.ap(A.d.gak(m).a,A.d.gak(m).b)
o.push(q)
o=k.f
if(o!=null)q.bA(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.K()
q=k.e
u.drawPath((q==null?k.e=new B.cF(k.gbK().a.snapshot()):q).a,l)
l.delete()}}},
av(d){return!0}}
C.Vy.prototype={
U(){var w=x.S
return new C.aDy(B.aY(w),B.aY(w))}}
C.aDy.prototype={
a_(){this.a1()
this.arY()},
arY(){var w,v,u=this,t=x.N,s=B.bn(D.deN,!0,t)
A.d.CM(s)
w=x.S
v=B.T(s).c
t=B.C(B.dc(s,0,B.dG(u.d,"count",w),v),t)
A.d.v(t,B.dc(s,0,B.dG(u.d,"count",w),v))
A.d.CM(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
c7w(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
C.pW("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.eeI(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gak(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bM(A.n5,new C.eeJ(s,v,u),t)
else{s.x=!0
B.bM(A9.Fp,new C.eeK(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.TO,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.am(p,2)+" / "+o
o=x.p
p=B.w(B.a([new B.D(A.xS,B.B(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aT:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.ir,A.j,0,q,q),q),B.E(B.iw(!0,q,q,A.y,new B.hP(v,8,8,1,q),new C.eeO(r),r.e.length,A.bk,q,A.ah,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.cT9[t]
o.push(new C.f3(s.b,r.d===s.a,new C.eeP(r,s),q,A.aR,q))}o.push(new C.j4(D.bHS,"New game",new C.eeQ(r),A.bn,q))
return C.ou(A.aR,A.jK,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new C.hm(o,q,q))}}
C.VI.prototype={
U(){return new C.aDR(B.a([],x.t))}}
C.aDR.prototype={
c7A(d){A.d.a8(this.d)
this.w=!0
this.aZa()},
aZa(){this.d.push(A.cW.az(4))
this.e=0
this.ZP()},
ZP(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eoD(t))
s=x.H
w=3
return B.b(B.bM(A.lR,null,s),$async$ZP)
case 3:r=t.d,q=B.bn(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aSs(n)
w=7
return B.b(B.bM(new B.ba(1000*Math.max(280,600-r.length*18)),null,s),$async$ZP)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eoE(t))
case 1:return B.h(u,v)}})
return B.i($async$ZP,v)},
aSs(d){this.m(new C.eoB(this,d))
C.pW("marimba",D.c00[d]+5,450,0.55)
B.bM(A.Fn,new C.eoC(this),x.H)},
c7C(d){var w,v,u=this
if(!u.w||u.r)return
u.aSs(d)
w=u.d
v=u.e
if(w[v]!==d){E.dX(90,"",600,0,0.5,"saw")
u.m(new C.eoF(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.eoG(u))
B.bM(A.ik,new C.eoH(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,I.aQO,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fgz,A.L,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aw8[v]
u=u.j(q.f===v?1:0.35)
t=new B.aR(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.aw8[v].j(0.8),A.J,30)],w):p
r=new B.az(A.c.j(q.f===v?0.9:0.15),2,A.q,-1)
l.push(B.aB(p,B.de(p,p,p,p,A.bb,new B.o(u,p,new B.bO(r,r,r,r),new B.bo(t,t,t,t),s,p,A.n),A.jl,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eoI(q,v),p,p,p,p,p,p,!1,A.a7))}o=B.au(new B.D(A.aa,B.w(B.a([o,A.am,n,A.d7,new B.fK(1,B.lA(1,l,2,12,12,p,A.dT,!1),p)],m),A.m,p,A.b7,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return C.ou(A.bH,A.jK,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new C.hm(B.a([new C.j4(A.j2,n,q.gc7z(q),A.bn,p)],m),p,p))}}
C.W1.prototype={
U(){return new C.bjP(new B.ar(A.as,$.aw()))}}
C.bjP.prototype={
avu(d){return B.oK(A.k.ab(d,2),B.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eCu(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.d5(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eCD()
l=B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),l,m,m,m,m,m,2,B.bs(m,m,m,m,m,m,m,m,!0,new B.b4(4,B.n(16),A8.x0),m,m,m,m,m,m,m,m,m,m,m,new B.b4(4,B.n(16),D.aZw),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lA,"Bill amount",!0,!0,!1,m,m,m,m,D.fe8,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,A.dW,m,m,m,1,m,m,!1,"\u2022",m,new C.eCz(n),m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,A.aPR,!0,A.a4,m,A.an,m,m,m,m)
k=A.bn.j(0.1)
s=B.n(20)
r=B.I(A.bn.j(0.35),A.q,1)
q=x.p
s=B.cy(B.a([l,A.bw,B.p(m,B.w(B.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.avu(w)),t.$2("Total","$"+n.avu(v)),T.M6,t.$3$big("Each of "+n.f+" pays","$"+n.avu(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bQ,m,m,m)],q),m,A.fC,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cDX[p]
r.push(new C.f3(""+o+"%",A.k.V(n.e)===o,new C.eCA(n,o),m,A.bn,m))}l=n.f
return C.ou(A.bn,A.jK,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.w(B.a([new C.hm(r,"TIP",m),C.lM(A.aR,""+l,"People",20,1,new C.eCB(n),l),new C.hm(B.a([new C.f3("Round up",n.r,new C.eCC(n),m,A.aT,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
C.Vx.prototype={
U(){var w=B.a([3,5],x.t)
return new C.bjk(w,A.cW,$,A.bB,0,B.a([],x.X),null,null)}}
C.bjk.prototype={
a_(){this.a1()
this.oZ()},
pW(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.k.bm(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.az(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.az(6)+1)
u.f=t
C.a7Y("snare",0.5)}u.m(new C.edN())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.ht()
u.w=t
u.x=t?0:3.141592653589793
C.pW("bell",24,400,0.5)}u.m(new C.edO())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bcw(v,o.r>0,n))}u=B.aB(n,B.au(B.bZ(A.fQ,m,A.br,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.edG(o),n,n,n,n,n,n,!1,A.a7)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.I(A.d8,A.q,6)
s=B.a([new B.ac(0,A.G,A.aT.j(0.4),A.J,30)],x.V)
u=B.aB(n,B.au(B.ed(A.A,B.p(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fdn,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.eiP,A.a5),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.edH(o),n,n,n,n,n,n,!1,A.a7)}else{m=o.as
u=B.aB(n,B.au(B.w(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.f36,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kI,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.edI(o),n,n,n,n,n,n,!1,A.a7)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.d7k[r]
v.push(new C.f3(q.b,o.d===q.a,new C.edJ(o,q),q.c,A.by,n))}v=B.a([new C.hm(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(C.lM(A.by,""+s,"Dice",4,1,new C.edK(o),s))}if(o.d==="num"){s=o.z
s=C.lM(A.by,""+s,"From",100,1,new C.edL(o),s)
p=o.Q
A.d.v(v,B.a([s,C.lM(A.by,""+p,"To",1000,2,new C.edM(o),p)],m))}return C.ou(A.by,A.jK,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.w(v,A.m,n,A.e,A.Q,0,A.p))}}
C.bcw.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cW.an()-0.5)*0.6
else w=0
v=B.n(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cz,14)],x.V)
t=B.a([],x.p)
for(s=D.dqh.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bI(s[q],p,p,B.p(p,p,A.f,p,p,L.abu,p,18,p,p,p,p,p,18),p))
return B.eE(A.A,w,B.p(p,new B.an(A.V,p,A.a9,A.r,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bE,p,p,100),p)}}
C.aKF.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bw5.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.but()}}
C.aKW.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bw9.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.buL()}}
C.aLn.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bwh.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.bvd()}}
C.aLN.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bwp.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.bvD()}}
C.b67.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aE3.h(0,t)
$.ars=s==null?"music":s
s=v.d
w=x.p
t=B.a([B.aI(u,u,u,u,P.ni,u,u,u,new C.csD(d),u,u,u,u,u,u),B.E(B.d(t,u,1,A.a2,u,u,u,B.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(B.aI(u,u,u,u,B.X(A.NL,s,u,u,u,22),u,u,u,new C.csE(v,d),u,u,u,u,"How to play",u))
w=B.a([new B.D(D.bxE,B.B(t,A.m,u,A.e,A.j,0,u,u),u),B.E(v.f,1)],w)
w.push(B.p(u,v.r,A.f,u,u,new B.o(F.AJ,u,new B.bO(new B.az(A.c.j(0.08),1,A.q,-1),A.W,A.W,A.W),u,u,u,A.n),u,u,u,u,A.Fr,u,u,1/0))
return B.c6(u,A.bY,B.bl(!0,B.w(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0),u,!1,!1,u,u)}}
C.f3.prototype={
B(d){var w,v,u,t=this,s=null,r=B.n(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=B.I(o,A.q,q?1.6:1)
w=x.p
v=B.a([],w)
u=t.f
if(u!=null)A.d.v(v,B.a([B.X(u,q?t.r:A.aQ,s,s,s,16),A.eg],w))
v.push(B.d(t.c,s,s,s,s,s,s,B.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new B.D(F.tG,B.aB(s,B.de(s,B.B(v,A.m,s,A.e,A.Q,0,s,s),s,s,A.bb,new B.o(p,s,o,r,s,s,A.n),A.eJ,s,s,s,A.h8,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.csz(t),s,s,s,s,s,s,!1,A.a7),s)}}
C.hm.prototype={
B(d){var w=null,v=B.a([],x.p),u=this.d
if(u!=null)v.push(new B.a7(54,w,B.d(u,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(B.E(B.cc(B.B(this.c,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aN),1))
return new B.D(A.cu,B.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
C.b68.prototype={
B(d){var w,v,u=this,t=null,s=B.d(u.c,t,t,t,t,t,t,B.l(t,t,A.c.j(0.7),t,t,t,t,t,t,t,t,11.5,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),r=u.w
r=B.auU(d).cIK(r,A.bD,r.j(0.2),r,3.5)
w=u.f
v=u.r
r=B.E(B.a9M(B.l_(t,t,t,v,w,u.e,A.k.D(u.d,w,v)),r),1)
return new B.a7(t,34,B.B(B.a([new B.a7(78,t,s,t),r,new B.a7(38,t,B.d(u.x,t,t,t,t,t,t,A.Jc,A.dP,t,t),t)],x.p),A.m,t,A.e,A.j,0,t,t),t)}}
C.j4.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new B.D(F.tG,B.aF(!1,A.a1,!0,B.n(12),B.aK(!1,B.n(12),!0,new B.D(Af.ahx,B.B(B.a([B.X(w.c,u,v,v,v,17),A.eg,B.d(w.d,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.csy(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ag),v)}}
C.Fe.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.f1s:u
w=t?A.c:A.b2
w=B.I(w,A.q,t?2.5:1)
return B.aB(u,B.de(u,u,u,u,A.bb,new B.o(p,u,w,u,t?B.a([new B.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a5),A.hw,u,r,D.ahj,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.csF(v),u,u,u,u,u,u,!1,A.a7)}}
C.qG.prototype={
a4Z(d,e){var w=B.dj()
w.seJ(B.cM(B.dD(0,0,0,d,0,0),new C.csA(this,w,e)))
this.iH$.push(w.bj())},
oZ(){var w=this,v=w.wm(new C.csC(w))
v.ia(0)
w.iG$!==$&&B.aP()
w.iG$=v}}
C.aaM.prototype={
bxO(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,B.L)(w),++q)for(p=A.d.gae(w[q]);p.C();){o=p.gT(0)
n=J.a3(o)
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
for(m=0,q=0;q<w.length;w.length===p||(0,B.L)(w),++q){for(v=A.d.gae(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gT(0)
n=J.a3(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&B.aP()
g.ax=m
w=g.bB2()
g.ay!==$&&B.aP()
g.ay=w},
bB2(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
FA(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
for(k=l.y,w=k.length,v=0;v<k.length;k.length===w||(0,B.L)(k),++v){u=k[v]
for(t=u.length-1,s=!1,r=0;r<u.length;q=r+1,t=r,r=q){p=J.q(u[r],0)
o=J.q(u[r],1)
n=J.q(u[t],0)
m=J.q(u[t],1)
if(o>f!==m>f&&e<(n-p)*(f-o)/(m-o)+p)s=!s}if(s)return!0}return!1}}
C.aaN.prototype={
cEE(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,B.L)(v),++s){r=v[s]
if(r.FA(0,w,e)){if(t!=null){q=r.ax
q===$&&B.c()
p=t.ax
p===$&&B.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
C.v5.prototype={}
C.P4.prototype={}
C.y6.prototype={}
C.P3.prototype={
fo(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.c_M[w.az(7)]
w=w.ht()?0:12
u=A.o.F(t.c++,3)===0?"flute":"bell"
C.pW(u,v+w-12,2200,0.1)}}
C.V4.prototype={
U(){var w=$.aw()
return new C.aCW(new B.cu(null,x.z),new B.ar(A.as,w),new C.P3(A.cW),D.d9k,A.az,D.a3g,$,A.bB,0,B.a([],x.X),null,null)}}
C.aCW.prototype={
a_(){var w,v=this
v.a1()
v.oZ()
v.a.toString
w=$.hcl
if(w==null)w=$.hcl=C.cve()
w.bJ(new C.dVR(v),x.a)},
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.buS()},
csg(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=B.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,B.L)(v),++s){r=v[s]
q=B.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,B.L)(p),++n)q.push(new C.dVj(p[n]).$0())
w.push(q)}this.w=w},
gW1(){var w=this.fy
return w.A(0,A.az)?100:Math.min(w.a,w.b)*0.43},
at8(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
axb(d){var w
this.fx=d
w=d.ax
w===$&&B.c()
this.at8(d.x,d.w,105/Math.max(w,3))
B.eZ()
C.pW("bell",(A.d.cK(D.a2T,d.c)+1)*3+12,900,0.45)
E.dX(300,"",280,1.4,0.15,"tri")},
pW(d){var w,v,u,t,s,r,q,p=this
p.f.fo(0,d,p.db)
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
p.x=A.k.D(p.x+p.as*d,-85,85)
q=Math.exp(-d*2.2)
v=p.Q*=q
p.as*=q
if(p.ch&&Math.abs(v)<3)p.y=p.y+7*d/Math.sqrt(p.z)}while(v=p.y,v>180)p.y=v-360
while(v<-180){v+=360
p.y=v}},
c8g(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.az))return null
w=n.fy
v=n.gW1()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gW1()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cEE((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c8f(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new C.dVh(w))
return}w.m(new C.dVi(w,v,A.a.i(d).toLowerCase()))},
bO0(){var w=null,v=this.c
v.toString
B.ca(w,w,!0,w,new C.dVf(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=B.a([B.aI(n,n,n,n,D.bKs,n,n,n,o.gbO_(),n,n,n,n,"Earth facts",n),B.aI(n,n,n,n,D.qa,n,n,n,new C.dVC(o,d),n,n,n,n,"Share",n)],l),j=B.cA(new C.dVD(o,m)),i=A.c.j(0.06)
i=B.a([B.aM(n,A.U,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,B.bs(n,new B.b4(4,B.n(14),A.W),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.DB,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bSC,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc8e(),n,n,n,!1,n,n,!1,n,!0,n,A.aa,n,n,n,n,n,n,n,n,n,n,n,A.j9,!0,A.a4,n,A.an,n,n,n,n)],l)
if(o.id.length!==0){w=B.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
w.push(new C.f3(s.a,!1,new C.dVE(o,s),A.mv,A.aR,n))}i.push(new B.D(A.i4,new B.a7(n,38,B.cy(w,n,n,n,n,A.aN,!1),n),n))}i.push(A.am)
w=B.a([new C.f3("Whole Earth",!1,new C.dVI(o),A.hk,A.aR,n)],l)
for(v=D.aE2.gdQ(D.aE2),v=v.gae(v);v.C();){u=v.gT(v)
w.push(new C.f3(u.a,!1,new C.dVJ(o,u),n,A.aR,n))}w.push(new C.f3("Random",!1,new C.dVK(o),A.oS,A.aR,n))
i.push(new C.hm(w,"GO TO",n))
w=o.z
i.push(C.lM(A.aR,A.k.ab(w,1)+"x","Zoom",16,0.8,new C.dVL(o),w))
w=o.dy
i.push(C.lM(A.bH,A.a.aX(A.o.u(A.k.bm(w)),2,"0")+":00","Time",24,0,new C.dVM(o),w))
w=o.fr
i.push(C.lM(A.bn,o.cr1(),"Season",365,0,new C.dVN(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lW:D.Go
i.push(new C.hm(B.a([new C.f3("Spin",w,new C.dVO(o),D.bFL,A.aR,n),new C.f3("Night",v,new C.dVP(o),A.vK,A.aR,n),new C.f3("Borders",u,new C.dVF(o),D.bFP,A.aR,n),new C.f3("Names",r,new C.dVG(o),T.BO,A.aR,n),new C.f3("Music",q,new C.dVH(o),p,A.aR,n)],l),n,n))
return C.ou(A.aR,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",B.w(i,A.m,n,A.e,A.Q,0,A.p))},
cr1(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.awM[u])v=u
return A.ip[v]+" "+(A.k.bm(w-D.awM[v])+1)},
c8d(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&B.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new M.vJ(1,A.o.F((A.d.cK(D.a2T,t)+1)*47,360),0.55,1).lZ()
r=new C.dVd()
q=B.n(20)
p=B.I(s.j(0.6),A.q,1)
o=x.p
n=B.B(B.a([B.p(j,j,A.f,j,j,new B.o(s,j,j,j,j,j,A.a5),j,10,j,j,j,j,j,10),A.ab,B.E(B.d(d.a,j,1,A.a2,j,j,j,A.de,j,j,j),1),B.aI(j,j,j,j,A.GI,j,j,j,new C.dVc(this),j,j,j,j,j,A.cc)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=B.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hc,j,j,j)
m=D.doV.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=B.B(B.a([m,A.ab,r.$2("PEOPLE",l?C.fs8(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",C.GM(i)+" km\xb2")
if(l)m=(w<10?A.k.ab(w,1):C.GM(w))+" per km\xb2"
else m="\u2014"
m=B.B(B.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.ab(u,3):A.k.ab(u,1))+"% of people")
l=d.f
k=d.r
return B.p(j,B.w(B.a([n,t,A.N,v,A.N,m,A.N,B.B(B.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+C.fs8(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.Q,0,A.p),A.f,j,j,new B.o(D.Wb,j,p,q,j,j,A.n),j,j,j,j,D.ahQ,j,j,j)}}
C.beJ.prototype={
a6(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.W(),d7=B.N()
d7.r=D.AF.gp(0)
d8.b1(new B.a9(0,0,0+d4,0+d5),d7)
w=new B.f5()
w.dU(4)
for(d7=d8.a,v=0;v<90;++v){u=w.an()
t=w.an()
s=w.an()
r=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
r.r=A.c.j(0.25+w.an()*0.5).gp(0)
q=r.K()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new B.x(d4,d5)
o=d2.f
u=B.N()
t=x.O
u.sar(new B.c_(A.A,0.5,A.x,d3,0,B.a([A.K,A.aR.j(0.35),A.K],t),D.cUG,d3).aA(0,B.bU(p,o*1.1)))
d8.af(p,o*1.05,u)
n=B.bU(p,o)
u=B.N()
u.sar(D.eiT.aA(0,n))
d8.af(p,o,u)
J.bx(d7.save())
u=x.v
d6=new B.aO(d6.r,A.ao,d3,d3,B.a([],u))
d6.E(new B.jO(n))
d8.pD(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=B.N()
g.b=A.af
m=g.c=0.7
g.r=A.c.j(0.1).gp(0)
f=new C.ddi(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.K()
s=d.e
d7.drawPath((s==null?d.e=new B.cF(d.gbK().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=B.a([],u)
d=new B.aO(a2.r,A.ao,d3,d3,a3)
a3.push(new B.b5(s,r))}else{s=new B.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bA(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.K()
d6=d.e
d7.drawPath((d6==null?d.e=new B.cF(d.gbK().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.K()
s=d.e
d7.drawPath((s==null?d.e=new B.cF(d.gbK().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=B.a([],u)
d=new B.aO(a2.r,A.ao,d3,d3,a3)
a3.push(new B.b5(s,r))}else{s=new B.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bA(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.K()
d6=d.e
d7.drawPath((d6==null?d.e=new B.cF(d.gbK().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=B.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.F((A.d.cK(D.a2T,a7.c)+1)*47,360)
$.W()
b0=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new M.vJ(1,a9,a3,a8?1:0.62).lZ().gp(0)
b1=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
b1.b=A.af
b1.c=a8?2.2:m
b1.e=A.hn
b1.r=(a8?A.c:A.w.j(0.55)).gp(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,B.L)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.W()
b7=B.a([],u)
b8=new B.aO(b6.r,A.ao,d3,d3,b7)
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
if(v===0){b6=new B.b5(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bA(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new B.ap(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bA(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new B.bE()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bA(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.K()
b6=b8.e
d7.drawPath((b6==null?b8.e=new B.cF(b8.gbK().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.K()
b6=b8.e
d7.drawPath((b6==null?b8.e=new B.cF(b8.gbK().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,B.L)(a5),++b3){d=a5[b3]
$.W()
s=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
s.b=A.af
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.ul
q=s.K()
s=d.e
d7.drawPath((s==null?d.e=new B.cF(d.gbK().a.snapshot()):s).a,q)
q.delete()}if(d2.z)for(u=d6.length,s=d2.r,r=!(s<1.8),s=14/s,b3=0;b3<d6.length;d6.length===u||(0,B.L)(d6),++b3){a7=d6[b3]
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
c9=C.hLs(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbf(b2)
c9.a6(d8,new B.x(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.D(k*c0+j*c1*c4,-1,1)
$.W()
u=B.N()
u.sar(new B.c_(A.A,0.5,A.x,d3,0,B.a([A.K,A.K,D.b9d.j(0.78)],t),D.d9I,d3).aA(0,B.bU(new B.x(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.af(p,o,u)}$.W()
d4=B.N()
d4.sar(new B.c_(A.A,0.5,A.x,d3,0,B.a([A.K,A.w.j(0.4)],t),D.dms,d3).aA(0,n))
d8.af(p,o,d4)
d7.restore()
d7=B.N()
d7.b=A.af
d7.c=1.4
d7.r=A.hh.j(0.5).gp(0)
d8.af(p,o,d7)},
av(d){return!0}}
C.aL0.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.aL1.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.buR()}}
C.bsY.prototype={}
C.W4.prototype={
U(){return new C.bjT()}}
C.bjT.prototype={
gaS0(){var w=this.d
if(w===$)w=this.d=A.cW.az(16)
return w},
B(d){var w=null,v=B.ez(w,w,w,!0,!0,D.AF,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,D.anG,w,w,w,new C.eDn(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fAc,w,w,w,1,w,!0),u=B.n(18),t=A.aR.j(0.1),s=B.I(A.aR.j(0.35),A.q,1),r=x.p
return B.c6(v,D.AF,B.cy(B.a([B.p(w,B.B(B.a([D.bJa,A.at,B.E(B.d(D.cYB[this.gaS0()],w,w,w,w,w,w,D.fhw,w,w,w),1),B.aI(w,w,w,w,D.bTC,w,w,w,new C.eDo(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bE,w,w,w),A.aB,B.cA(new C.eDp())],r),w,A.YV,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.VR.prototype={
U(){return C.hLU()}}
C.bjG.prototype={
ciM(d){var w=d.c,v=C.hLW(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new B.x(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a1()
this.oZ()},
pW(d){var w,v,u,t=this
t.e.fo(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.ciM(w)
u=new B.x(-v.a,-v.b).aI(0,t.w)
v=B.kr(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc8h(){var w=this.ch
return new B.x(w.a/2,w.b/2).ad(0,this.x)},
c8l(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.Cv[s]
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
aZw(d){this.m(new C.evR(this,d))
B.eZ()
C.pW("bell",D.dmF[A.o.F(A.d.cK(D.Cv,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=B.a([B.aI(m,m,m,m,D.qa,m,m,m,new C.ew1(n,d),m,m,m,m,"Share",m)],k),i=B.cA(new C.ew2(n,l)),h=B.a([new C.f3("All",!1,new C.ew3(n),A.a0V,A.aT,m)],k)
for(w=0;w<10;++w){v=D.Cv[w]
h.push(new C.f3(v.a,n.z===v,new C.ew4(n,v),m,B.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.ab(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=C.lM(A.aT,s,"Time",1,0,new C.ew5(n),u/t)
u=n.w
u=C.lM(A.aT,A.k.ab(u,1)+"x","Zoom",9,0.5,new C.ew6(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lW:D.Go
return C.ou(A.aT,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",B.w(B.a([new C.hm(h,"GO TO",m),t,u,new C.hm(B.a([new C.f3("Orbits",s,new C.ew7(n),m,A.aT,m),new C.f3("Names",r,new C.ew8(n),m,A.aT,m),new C.f3("Asteroids",q,new C.ew9(n),m,A.aT,m),new C.f3("Music",p,new C.ewa(n),o,A.aT,m)],k),m,m)],k),A.m,m,A.e,A.Q,0,A.p))},
c8i(d){var w,v,u,t,s,r=null,q=B.b0(d.z),p=d.c,o=p*8.317,n=new C.evP(),m=B.n(20),l=B.I(q.j(0.6),A.q,1),k=B.p(r,r,A.f,r,r,new B.o(q,r,r,r,r,r,A.a5),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=B.B(B.a([k,A.ab,B.E(B.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.ki,r,r,r),1),B.aI(r,r,r,r,A.GI,r,r,r,new C.evO(this),r,r,r,r,r,A.cc)],w),A.m,r,A.e,A.j,0,r,r)
k=B.d(d.y,r,r,r,r,r,r,F.DC,r,r,r)
v=n.$2("WIDTH",C.GM(d.d*2)+" km")
u=p===0
p=B.B(B.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":B.u(p)+" AU ("+C.GM(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new C.evQ().$1(v))
t=d.f
v=B.B(B.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.ab(t/24,0)+" Earth days":A.k.ab(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=B.B(B.a([n.$2("GRAVITY",B.u(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.ab(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.ab(o,1)+" minutes":A.k.ab(o/60,1)+" hours"
return B.p(r,B.w(B.a([j,A.av,k,A.N,p,A.N,v,A.N,s,A.N,B.B(B.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.Q,0,A.p),A.f,r,r,new B.o(D.Wb,r,l,m,r,r,A.n),r,r,r,r,D.ahQ,r,r,r)}}
C.br0.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=B.N()
w.r=D.AF.gp(0)
a7.b1(new B.a9(0,0,0+a5,0+a6),w)
v=new B.f5()
v.dU(8)
for(w=a7.a,u=0;u<110;++u){t=v.an()
s=v.an()
r=v.an()
q=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.an()*0.5).gp(0)
p=q.K()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc8h()
n=a5.w
if(a5.as)for(a6=A.d.gae(D.Cv),t=new B.f4(a6,new C.eXM()),s=o.a,r=o.b;t.C();){q=a6.gT(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
m.b=A.af
m.c=1
m.r=A.c.j(0.12).gp(0)
p=m.K()
w.drawCircle(s,r,q*n,p)
p.delete()}if(a5.ax)for(a6=a5.CW,t=o.a,s=o.b,r=a5.cx,u=0;u<a6.length;++u){q=a6[u]
m=a5.f
l=r[u]
k=q+m*0.0016/l
j=(l===0?0:30+150*Math.sqrt(l/30.1))*n
q=Math.cos(k)
m=Math.sin(k)
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.r=A.c.j(0.5).gp(0)
p=l.K()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=C.hLV(A.d.gH(D.Cv))*Math.sqrt(n)*1.4
a6=i*3.2
t=B.N()
s=x.O
t.sar(new B.c_(A.A,0.5,A.x,a4,0,B.a([A.aT.j(0.5),A.K],s),a4,a4).aA(0,B.bU(o,a6)))
a7.af(o,a6,t)
t=B.N()
t.sar(D.eiN.aA(0,B.bU(o,i)))
a7.af(o,i,t)
if(a5.at){h=C.hdY("Sun",10.5,A.ad)
h.a6(a7,o.ad(0,new B.x(-h.b.c/2,i+4)))}for(a6=A.d.gae(D.Cv),t=new B.f4(a6,new C.eXN()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gT(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=B.b0(l.z)
d=l.a
if(d==="Saturn"){J.bx(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=B.ci(A.J,j*1.3,j*4.2)
a1=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a1.b=A.af
a1.c=j*0.45
a1.r=A.bL.j(0.55).gp(0)
p=a1.K()
w.drawOval(B.bX(a0),p)
p.delete()
w.restore()}a0=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gp(0)
a0.z=A.ul
p=a0.K()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a1=B.aq(e,A.w,0.55)
a1.toString
a0.sar(new B.c_(U.wX,0.5,A.x,a4,0,B.a([A.c,e,a1],s),H.a2v,a4).aA(0,B.bU(new B.x(g,f),j)))
p=a0.K()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.b=A.af
l.c=2
l.r=A.c.gp(0)
p=l.K()
w.drawCircle(g,f,j+7,p)
p.delete()}if(r&&d==="Earth"){k=a5.f/27.3*2*3.141592653589793
a2=j+11*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a3.r=A.c.gp(0)
p=a3.K()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.d2V[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.K()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=C.hdY(d,10.5,A.ad)
h.a6(a7,new B.x(g+-h.b.c/2,f+(j+4)))}}},
av(d){return!0}}
C.V5.prototype={
U(){var w=x.i
return new C.aCX(new C.P3(A.cW),B.c3(5,0,!1,w),B.c3(5,0,!1,w),B.c3(5,null,!1,x.cD),A.J,A.J,B.a([],x.g),$,A.bB,0,B.a([],x.X),null,null)}}
C.aCX.prototype={
cvv(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c8k(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.e7v
s.cy=new B.x(s.ay,0)
w=s.db
A.d.a8(w)
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
E.dX(150,"",400,0,0.5,"noise")
E.dX(90,"",300,1.5,0.6,"sine")
s.m(new C.dVV())},
a_(){this.a1()
this.oZ()},
pW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fo(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.yU[r]
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
if(q.a!=="Sun")E.dX(60+p*5,"",220,0.6,0.55,"sine")
break}}}if(A.d.d8(s,new C.dWn()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
i.cy=new B.x(k,s)
k=p+k*w
s=t+s*w
i.cx=new B.x(k,s)
j=Math.sqrt(k*k+s*s)
s=i.cy
k=i.cx
t=-398600/(j*j*j)
p=k.a
k=k.b
i.cy=new B.x(s.a+p*t*v,s.b+k*t*v)
i.dy+=w
if(Math.sqrt(p*p+k*k)<6371){i.CW=!1
E.dX(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||A.d.gak(v).aF(0,i.cx).gcG()>120)v.push(i.cx)
if(v.length>700)A.d.cF(v,0)
if(i.cx.gcG()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bM9()
else n=n==="weight"?p.cCV():p.bEj()
w=x.p
v=B.a([],w)
for(u=0;u<3;++u){t=D.djD[u]
v.push(new C.f3(t.b,p.d===t.a,new C.dW9(p,t),t.c,A.cY,o))}v=B.a([new C.hm(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=B.a([new C.f3("Hammer",!s,new C.dWa(p),Ae.Gj,A.cY,o),new C.f3("Feather",s,new C.dWb(p),T.Ns,A.cY,o),new C.f3(q,r,new C.dWf(p),A.G8,A.aR,o)],w)
q=p.w
A.d.v(v,B.a([new C.hm(r,o,o),C.lM(A.cY,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new C.dWg(p),q),new C.hm(B.a([new C.j4(A.tT,"Drop!",new C.dWh(p),A.bn,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=C.lM(A.cY,""+A.k.V(s)+" kg","Your weight",120,20,new C.dWi(p),s)
r=p.ax
A.d.v(v,B.a([s,C.lM(A.cY,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new C.dWj(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=C.lM(A.cY,A.k.ab(s,1)+" km/s","Speed",13,0,new C.dWk(p),s)
r=p.ch
A.d.v(v,B.a([s,C.lM(A.cY,A.k.ab(r,1)+"x out","View",8,0.5,new C.dWl(p),r),new C.hm(B.a([new C.j4(A.o4,"Fire!",p.gc8j(),A.bn,o),new C.j4(A.tT,"Falls",new C.dWm(p),A.c,o),new C.j4(A.r8,"Orbit 7.7",new C.dWc(p),A.c,o),new C.j4(D.bIA,"Oval 9",new C.dWd(p),A.c,o),new C.j4(A.BR,"Escape",new C.dWe(p),A.c,o)],w),o,o)],w))}return C.ou(A.cY,A.jK,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",B.w(v,A.m,o,A.e,A.Q,0,A.p))},
bM9(){return new B.D(D.bsC,B.cA(new C.dVU(this)),null)},
cCV(){var w,v,u,t=null,s=[D.eIF,D.eK3,D.eKa,D.eKs,D.eK8,D.eKz,D.eJc,D.eKV,D.eJR],r=x.p,q=B.a([D.fo4,A.R],r)
for(w=0;w<9;++w){v=s[w]
u=B.b0(v.c)
q.push(new B.D(A.cu,new B.ck(A.aN,A.e,A.j,A.m,t,A.p,t,0,B.a([new B.a7(62,t,new B.y(v.a,t,new B.G(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new B.bB(1,A.bg,new B.Bq(new C.dVW(this,v),t),t)],r),t),t))}q.push(A.av)
q.push(D.fqq)
return B.cy(q,t,A.iK,t,t,A.ah,!1)},
bEj(){return B.cA(new C.dVS(this))}}
C.b9Y.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.W(),e=B.N()
e.r=D.AF.gp(0)
d.b1(new B.a9(0,0,0+h,0+g),e)
w=new B.f5()
w.dU(2)
for(e=d.a,v=0;v<80;++v){u=w.an()
t=w.an()
s=w.an()
r=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.an()*0.5).gp(0)
q=r.K()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=B.N()
e.sar(new B.c_(A.A,0.5,A.x,i,0,B.a([A.K,A.aR.j(0.35),A.K],x.O),D.daC,i).aA(0,B.bU(g,p*1.1)))
d.af(g,p*1.06,e)
e=B.N()
e.sar(D.eiH.aA(0,B.bU(g,p)))
d.af(g,p,e)
o=g.ad(0,new B.x(0,-p))
f=f.r
e=x.v
n=new B.aO(f,A.ao,i,i,B.a([],e))
u=o.a
t=o.b
s=t+3
n.E(new B.b5(u-16,s))
n.E(new B.ap(u,t-400*h-4))
n.E(new B.ap(u+16,s))
n.E(new B.bE())
s=B.N()
s.r=A.ak.gp(0)
d.aS(n,s)
s=o.ad(0,new B.x(0,-400*h-6))
u=B.N()
u.r=A.c.gp(0)
d.af(s,4,u)
u=j.e
if(u.length>1){e=B.a([],e)
m=new B.aO(f,A.ao,i,i,e)
f=g.a
t=g.b
m.E(new B.b5(f+A.d.gH(u).a*h,t+A.d.gH(u).b*h))
for(u=B.dc(u,1,i,B.T(u).c),s=u.$ti,u=new B.bS(u,u.gL(0),s.k("bS<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new B.ap(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bA(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.W()
f=B.N()
f.b=A.af
f.c=2.4
f.d=A.bV
f.r=A.cY.j(0.9).gp(0)
d.aS(m,f)}if(j.f){f=j.d
k=g.ad(0,new B.x(f.a*h,f.b*h))
h=B.N()
h.r=A.cY.j(0.4).gp(0)
h.z=G.p7
d.af(k,7,h)
h=B.N()
h.r=A.c.gp(0)
d.af(k,4,h)}},
av(d){return!0}}
C.VJ.prototype={
U(){return new C.bjD(new B.cu(null,x.z),$,A.bB,0,B.a([],x.X),null,null)}}
C.bjD.prototype={
a_(){this.a1()
this.oZ()},
pW(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Q3[l.e],i=D.Q3[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=B.a([B.aI(k,k,k,k,D.qa,k,k,k,new C.eoL(l,d),k,k,k,k,"Share",k)],u)
s=B.E(B.b3(k,k,k,new C.bqz(f,g,v,k),A.fE),1)
r=g.a
q=v<10?A.k.ab(v,1):C.GM(v)
p=f.a
q=B.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.hX,A.L,k,k)
o=C.GM(v*v*v)
n=A.a.cc(p,"s")?"":"s"
h=B.w(B.a([s,B.p(k,B.w(B.a([q,A.av,B.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A3.uO,A.L,k,k),A.bz,B.d(p+": "+C.GM(w*2)+" km wide. "+r+": "+C.GM(h*2)+" km wide.",k,k,k,k,k,k,A3.Jk,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.buL,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=B.a([],u)
for(m=0;m<10;++m){w=D.Q3[m]
r.push(new C.f3(w.a,l.e===m,new C.eoM(l,m),k,B.b0(w.c),k))}w=B.a([],u)
for(m=0;m<10;++m){s=D.Q3[m]
w.push(new C.f3(s.a,l.f===m,new C.eoN(l,m),k,B.b0(s.c),k))}return C.ou(A.c5,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new B.eH(h,l.d),"SIZE COMPARE",B.w(B.a([new C.hm(r,"FIRST",k),new C.hm(w,"SECOND",k)],u),A.m,k,A.e,A.Q,0,A.p))}}
C.bqz.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.W()
w=B.N()
w.r=D.bfh.gp(0)
d.b1(new B.a9(0,0,0+h,0+g),w)
v=new B.f5()
v.dU(6)
for(w=d.a,u=0;u<70;++u){t=v.an()
s=v.an()
r=v.an()
q=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.an()*0.4).gp(0)
p=q.K()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new B.x(h,g)
w=new C.eVV(d)
t=this.c
w.$3(m,o,B.b0(t.c))
s=o-n
l=new B.x(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,B.b0(s.c))
w=B.N()
w.b=A.af
w.c=1.4
w.r=A.ad.gp(0)
d.af(l,n+3,w)
k=B.h2(i,i,i,i,B.d0(i,i,i,i,i,i,i,i,i,D.f9I,s.a),A.a4,A.cb,i,A.dR,A.c7)
k.eO()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbf(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbf(g)-6
h=g}k.a6(d,l.ad(0,new B.x(-w/2,h)))
j=B.h2(i,i,i,i,B.d0(i,i,i,i,i,i,i,i,i,D.fcX,t.a),A.a4,A.cb,i,A.dR,A.c7)
j.eO()
t=j.b
h=t.c
t=t.a.c
j.a6(d,m.ad(0,new B.x(-h/2,-t.gbf(t)/2)))},
av(d){return!0}}
C.aL2.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bwb.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.buT()}}
C.aLw.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bwk.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.bvm()}}
C.aLz.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bwm.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.bvp()}}
C.Py.prototype={}
C.Ub.prototype={
U(){return C.hLS()}}
C.bio.prototype={
a_(){this.a1()
this.oZ()},
pW(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fo(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dX(70,"",500,0.3,0.5,"sine")}}A.d.bs(w,new C.dEB())},
aZx(d){var w,v,u,t=this.Q
if(t.A(0,A.az))return
w=this.gb7s()
v=d.aF(0,new B.x(t.a/2,t.b*0.42))
u=A.k.D(v.gcG()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new C.Py(t,u,1.2,new B.vI(1,30+A.cW.an()*40,0.9,0.7).lZ()))
C.pW("bell",60+A.k.V(12-u)*2,400,0.35)},
gb7s(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new B.M(m,new C.dEp(),B.T(m).k("M<1,K>")).ff(0,A.v6),1.0001,99))
m=x.p
w=B.a([B.aI(n,n,n,n,D.qa,n,n,n,new C.dEq(o,d),n,n,n,n,"Share",n)],m)
v=B.cA(new C.dEr(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.ab(s,0)+" Suns":C.fs8(s)+" Suns"
t=C.lM(A.by,s,"Mass",1,0,new C.dEt(o),u/t)
u=B.a([new C.f3("Star (10)",!1,new C.dEu(o),n,A.by,n),new C.f3("Cygnus X-1 (21)",!1,new C.dEv(o),n,A.by,n),new C.f3("Milky Way core (4 million)",!1,new C.dEw(o),n,A.by,n),new C.f3("M87 (6.5 billion)",!1,new C.dEx(o),n,A.by,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lW:D.Go
return C.ou(A.by,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",B.w(B.a([t,new C.hm(u,"LIKE",n),new C.hm(B.a([new C.f3("Glowing ring",s,new C.dEy(o),n,A.by,n),new C.f3("Bent light",r,new C.dEz(o),n,A.by,n),new C.f3("Music",q,new C.dEA(o),p,A.by,n),new C.j4(A.o2,"Clear",new C.dEs(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.Q,0,A.p))},
aex(d,e){var w=null
return B.E(B.w(B.a([B.d(d,w,w,w,w,w,w,D.f5D,w,w,w),A.bz,B.d(e,w,2,w,w,w,w,K.zK,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
C.b9m.prototype={
a6(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.W()
w=B.N()
w.r=D.bhq.gp(0)
b2.b1(new B.a9(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new B.x(w,v)
t=this.b
s=t.gb7s()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,B.L)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new B.x(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.D(o/h,0,n)
i=new B.x(w+k/h*g,v+j/h*g)}}k=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
k.r=A.c.j(0.6).gp(0)
f=k.K()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=B.N()
b0.b=A.af
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=P.Ri
b2.af(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=B.aq(A.vd,A.fz,d)
n.toString
k=Math.cos(a4)
$.W()
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gp(0)
f=j.K()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
k.r=n.j(b1).gp(0)
f=k.K()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.W()
b1=B.N()
b1.sar(new B.c_(A.A,0.5,A.x,null,0,B.a([A.w,A.w.j(0)],x.O),D.cPJ,null).aA(0,B.bU(u,b0)))
b2.af(u,b0,b1)
b1=B.N()
b1.r=A.w.gp(0)
b2.af(u,s,b1)
b1=B.N()
b1.b=A.af
b1.c=1
b1.r=A.by.j(0.55).gp(0)
b2.af(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,B.L)(b0),++m){a7=b0[m]
a0=s*a7.b
t=w+Math.cos(a7.a)*a0
r=v+Math.sin(a7.a)*a0*0.9
a8=1+A.k.D(3.5/a7.b,0,5)
a9=3*a8
q=-Math.sin(a7.a)*a9
o=Math.cos(a7.a)*a9
n=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
n.c=4.2/Math.sqrt(a8)
n.d=A.bV
k=a7.d
n.r=k.j(A.k.D(a7.b/2,0.2,1)).gp(0)
f=n.K()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.r=k.j(0.2).gp(0)
o.z=G.p7
f=o.K()
p.drawCircle(t,r,6,f)
f.delete()}},
av(d){return!0}}
C.aes.prototype={}
C.V2.prototype={
U(){var w=x.r,v=x.g
return new C.biO(new B.cu(null,x.z),new C.P3(A.cW),B.a([],w),A.J,A.J,B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.a([],v),A.J,A.J,$,A.bB,0,B.a([],x.X),null,null)}}
C.biO.prototype={
a_(){this.a1()
this.a_1()
this.oZ()},
a_1(){var w,v,u,t,s,r,q,p,o=this,n=new B.f5()
n.dU(5)
w=B.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.an(),1.6)
w.push(new C.aes(t,n.an()*3.141592653589793*2,(n.an()-0.5)*0.5*t,25+n.an()*20))}else{t=Math.pow(n.an(),0.8)
s=n.az(o.f)
r=n.an()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.ht()?0:3.141592653589793
q=r+(n.an()-0.5)*0.25}r=n.an()
p=t<0.25?35+n.an()*15:205+n.an()*50
w.push(new C.aes(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cvl(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.e8Z
k.cx=D.e91
w=new B.f5()
w.dU(9)
v=k.cy
A.d.a8(v)
u=B.a([],x.r)
for(t=0;t<900;++t)u.push(new C.aes(Math.pow(w.an(),0.8)*0.7,w.an()*3.141592653589793*2,0,320+w.an()*30))
A.d.v(v,u)
u=x.g
s=B.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,B.L)(v),++q){p=v[q]
o=p.b
n=p.a
s.push(new B.x(Math.cos(o)*n,Math.sin(o)*n))}k.dx=s
s=B.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,B.L)(v),++q){p=v[q]
o=p.b
n=p.a+0.2
s.push(new B.x(-Math.sin(o)*0.55/Math.sqrt(n),Math.cos(o)*0.55/Math.sqrt(n)))}k.fr=s
v=B.a([],u)
for(s=k.ay,r=x.S,s=B.dc(s,0,B.dG(900,"count",r),B.T(s).c),o=s.$ti,s=new B.bS(s,s.gL(0),o.k("bS<ak.E>")),o=o.k("ak.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new B.x(l*n,Math.sin(m)*n))}k.db=v
v=B.a([],u)
for(u=k.ay,u=B.dc(u,0,B.dG(900,"count",r),B.T(u).c),r=u.$ti,u=new B.bS(u,u.gL(0),r.k("bS<ak.E>")),r=r.k("ak.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new B.x(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
E.dX(110,"",900,0.5,0.45,"sine")},
pW(d){var w,v,u,t,s,r,q,p=this
p.e.fo(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aF(0,p.fx)
s=Math.max(0.25,t.gcG())
r=t.eQ(0,s).aI(0,0.9/(s*s))
w=p.fy.ad(0,r.aI(0,u))
p.fy=w
v=p.cx.aF(0,r.aI(0,u))
p.cx=v
w=p.fx.ad(0,w.aI(0,u))
p.fx=w
v=p.CW.ad(0,v.aI(0,u))
p.CW=v
q=new C.dUE(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=B.a([B.aI(r,r,r,r,D.qa,r,r,r,new C.dUu(s,d),r,r,r,r,"Share",r)],q),o=B.b3(r,r,r,new C.beA(s,r),A.az),n=A.w.j(0.5),m=B.n(14),l=B.I(A.bD,A.q,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=B.a([o,B.ao(8,B.p(r,B.d(w,r,r,r,r,r,r,Ab.a7S,r,r,r),A.f,r,r,new B.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bT,r,r,r),r,r,10,10,r,r)],q)
l=B.a([],q)
for(v=0;v<3;++v){u=D.d67[v]
o=s.Q===u.a&&!s.ch
l.push(new C.f3(u.b,o,new C.dUv(s,u),r,A.h4,r))}l.push(new C.f3("Collide",s.ch,new C.dUw(s),A.yg,A.c5,r))
o=B.a([new C.hm(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=C.lM(A.h4,""+n,"Arms",6,2,new C.dUx(s),n)
l=s.r
A.d.v(o,B.a([n,C.lM(A.h4,A.k.ab(l,1),"Winding",6,0.8,new C.dUy(s),l)],q))}n=s.as
o.push(C.lM(A.h4,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new C.dUz(s),n))
n=s.ax
o.push(C.lM(A.h4,A.k.ab(n,1)+"x","Speed",4,0,new C.dUA(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lW:D.Go
o.push(new C.hm(B.a([new C.f3("Dark matter",n,new C.dUB(s),r,A.by,r),new C.f3("You are here",l,new C.dUC(s),r,A.aT,r),new C.f3("Music",w,new C.dUD(s),t,A.h4,r)],q),r,r))
return C.ou(A.h4,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new B.eH(new B.an(A.V,r,A.b0,A.r,m,r),s.d),"GALAXY",B.w(o,A.m,r,A.e,A.Q,0,A.p))}}
C.beA.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.W()
w=B.N()
w.r=D.bjv.gp(0)
a3.b1(new B.a9(0,0,0+a1,0+a2),w)
v=new B.f5()
v.dU(3)
for(w=a3.a,u=0;u<90;++u){t=v.an()
s=v.an()
r=v.an()
q=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
q.r=A.c.j(0.15+v.an()*0.4).gp(0)
p=q.K()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new B.x(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=B.N()
t.sar(new B.c_(A.A,0.5,A.x,a0,0,B.a([A.aF.j(0.32),A.aF.j(0.12),A.K],x.O),D.cdc,a0).aA(0,B.bU(o,a2)))
a3.af(o,a2,t)}m=new C.dar(a1.as)
a2=n*0.3
t=B.N()
t.sar(new B.c_(A.A,0.5,A.x,a0,0,B.a([A.fT.j(0.85),A.aE.j(0.3),A.K],x.O),a0,a0).aA(0,B.bU(o,a2)))
a3.af(o,a2,t)
if(!a1.ch){l=B.N()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.L)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=A.k.F(q,360)
l.r=new M.vJ(1,r,q>200?0.45:0.55,1).lZ().j(0.35+(1-s)*0.5).gp(0)
s=s<0.3?1.3:1
p=l.K()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.W()
a2=B.N()
a2.b=A.af
a2.c=1.6
a2.r=A.aT.gp(0)
a3.af(g,9,a2)
f=B.h2(a0,a0,a0,a0,D.f2H,A.a4,A.cb,a0,A.dR,A.c7)
f.eO()
f.a6(a3,g.ad(0,new B.x(-f.b.c/2,12)))}}else{e=n*0.8
l=B.N()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.L)(a2),++k){d=a2[k]
l.r=D.bkL.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.K()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.L)(a2),++k){d=a2[k]
l.r=D.bfy.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.K()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.W()
w=B.N()
w.r=A.fT.gp(0)
a3.af(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=B.N()
w.r=A.i0.gp(0)
a3.af(a1,5,w)}},
av(d){return!0}}
C.VF.prototype={
U(){return new C.bjC(new B.cu(null,x.z),new C.P3(A.cW),$,A.bB,0,B.a([],x.X),null,null)}}
C.bjC.prototype={
a_(){this.a1()
this.oZ()},
pW(d){var w,v,u,t=this
t.e.fo(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.F(t.r+d*0.04*v,1)
else{w=A.k.F(t.w+d*0.05*v,1)
t.w=w
u=A.k.bm(w*4)
if(u!==A.k.bm(t.as))C.pW("bell",60+u*4,500,0.35)
t.as=u}},
gcr0(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gchm(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=B.a([B.aI(q,q,q,q,D.qa,q,q,q,new C.eo_(r,d),q,q,q,q,"Share",q)],p),n=B.E(new B.eH(B.b3(q,q,q,new C.bpP(r,q),A.fE),r.d),1)
if(r.f==="seasons")w=r.gcr0()
else{w=r.gchm()
v=A.k.am(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=B.w(B.a([n,B.p(q,B.d(w,q,q,q,q,q,q,A4.TM,A.L,q,q),A.f,q,q,q,q,q,q,q,I.ai_,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A_.yq:A.j2
t=r.Q
s=t?A.lW:D.Go
s=B.a([new C.hm(B.a([new C.f3("Seasons",n==="seasons",new C.eo0(r),A.C2,A.bu,q),new C.f3("Moon phases",n==="moon",new C.eo1(r),A.vK,A.bu,q),new C.f3(u,!1,new C.eo2(r),v,A.bu,q),new C.f3("Music",t,new C.eo3(r),s,A.bu,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=C.lM(A.bu,D.d5r[A.o.F(A.k.bm(n*12),12)],"Month",1,0,new C.eo4(r),n)
v=r.z
A.d.v(s,B.a([n,C.lM(A.bu,A.k.ab(v,1)+"\xb0","Tilt",90,0,new C.eo5(r),v)],p))}else{p=r.w
s.push(C.lM(A.bu,""+(A.k.bm(p*29.5)+1),"Day of month",1,0,new C.eo6(r),p))}p=r.y
s.push(C.lM(A.bu,A.k.ab(p,1)+"x","Speed",4,0.2,new C.eo7(r),p))
return C.ou(A.bu,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",B.w(s,A.m,q,A.e,A.Q,0,A.p))}}
C.bpP.prototype={
a6(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.W(),b8=B.N()
b8.r=D.AF.gp(0)
b9.b1(new B.a9(0,0,0+b5,0+b6),b8)
w=new B.f5()
w.dU(4)
for(b8=b9.a,v=0;v<70;++v){u=w.an()
t=w.an()
s=w.an()
r=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.an()*0.4).gp(0)
q=r.K()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new B.x(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=B.ci(p,n*2,o*2)
t=B.N()
t.b=A.af
t.c=1
t.r=A.b2.gp(0)
b9.hH(u,t)
t=B.N()
t.sar(D.eiJ.aA(0,B.bU(p,34)))
b9.af(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new B.x(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aF(0,l).eQ(0,p.aF(0,l).gcG())
J.bx(b8.save())
b8.translate(l.a,l.b)
s=B.N()
s.r=D.bhm.gp(0)
b9.af(A.J,k,s)
J.bx(b8.save())
b7=new B.aO(b7.r,A.ao,b4,b4,B.a([],x.v))
b7.E(new B.jO(B.bU(A.J,k)))
b9.pD(0,b7)
b7=i.aI(0,k).aI(0,0.35)
s=k*1.1
b6=B.N()
b6.sar(D.eiS.aA(0,B.bU(A.J,s)))
b9.af(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new B.x(s,b6)
b7=new B.x(-s,-b6).aI(0,k).aI(0,1.7)
b5=h.aI(0,k).aI(0,1.7)
t=B.N()
t.c=2
t.r=A.cs.gp(0)
b9.bL(b7,b5,t)
t=h.aI(0,k).aI(0,1.7)
b5=B.N()
b5.r=A.cs.gp(0)
b9.af(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=B.h2(b4,b4,b4,b4,B.d0(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aRk,b5),A.a4,A.cb,b4,A.dR,A.c7)
f.eO()
f.a6(b9,l.ad(0,new B.x(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=B.N()
r.b=A.af
r.c=1
r.r=A.b2.gp(0)
b9.af(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a0.r=A.aT.j(0.6).gp(0)
a0.c=2
q=a0.K()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=B.N()
r.sar(new B.c_(new B.dd(-0.5,0),1.1,A.x,b4,0,B.a([D.bcW,D.afW],x.O),D.cXz,b4).aA(0,B.bU(p,k)))
b9.af(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new B.x(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=B.N()
r.r=D.ba8.gp(0)
b9.af(a1,a2,r)
J.bx(b8.save())
b7=b7.r
r=x.v
d=new B.aO(b7,A.ao,b4,b4,B.a([],r))
d.E(new B.jO(B.bU(a1,a2)))
b9.pD(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=B.N()
a3.r=A.bO.gp(0)
b9.b1(new B.a9(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aF(0,p).eQ(0,a1.aF(0,p).gcG())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.asW[a5]
a7=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a7.r=A.aR.j(0.45).gp(0)
a7.z=A.lw
q=a7.K()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new B.x(u,t)
a9=Math.min(b5,b6)*0.1
b6=B.N()
b6.r=D.ba3.gp(0)
b9.af(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bx(b8.save())
b6=new B.aO(b7,A.ao,b4,b4,B.a([],r))
b6.E(new B.jO(B.bU(a8,a9)))
b9.pD(0,b6)
s=s.w
b1=new B.aO(b7,A.ao,b4,b4,B.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.E(new B.b5(u,b5))
b6=b2>0
b1.aCl(new B.x(u,t+a9),b6,new B.aR(a9,a9))
if(b0<0.5)b6=b2<0
b1.aCl(new B.x(u,b5),b6,new B.aR(a9*Math.abs(1-2*b0),a9))
b6=B.N()
b6.r=A.bO.gp(0)
b9.aS(b1,b6)
b8.restore()
b8=B.N()
b8.b=A.af
b8.c=1
b8.r=A.b2.gp(0)
b9.af(a8,a9,b8)
b3=B.h2(b4,b4,b4,b4,D.f2I,A.a4,A.cb,b4,A.dR,A.c7)
b3.eO()
b3.a6(b9,a8.ad(0,new B.x(-b3.b.c/2,a9+6)))}},
av(d){return!0}}
C.aKC.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bw4.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.buq()}}
C.aKZ.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bwa.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.buO()}}
C.aLv.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bwj.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.bvl()}}
var z=a.updateTypes(["R(tx)","~()","R(a46)","R(Cn)","aA<~>()","H(tx,H)","K(K,tx)","R(Cj)","R(YZ)","R(ab6)","R(v5)","R(a2L)","R(no)","W4()","a7Z()","VD()","VS()","VE()","W2()","Ug()","aex(Y,H)","adp(Y,H)","H(Cj,Cj)","R(mB)","m(eb)","R(aen)","R(a0c)","R(Cx)","R(abA)","R(adt)","R(abk)","H(H,qN)","H(H,Cn)","m(qN)","~(qN,ai<m>,H)","qN?(Cn)","R(qN)","t(m,a0_)","R(PQ)","R(aa_)","~(Az)","~(a5<@,@>)","~(x3,m,x,v,K)","~(m,tx)","US()","K(Py)","Ng(Y)","UB(Y,bq<K>,bq<K>)","W8()","UZ()","Ud()","UR()","Vy()","VI()","W1()","Vx()","~(m)","cp(aaN)","R(aaM)","V4()","VR()","V5()","Ub()","V2()","VJ()","VF()","Uc()","R(Py)","Vh(Y)"])
C.fut.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+23}
C.fk3.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fre.prototype={
$1(d){var w
if(!this.a.LG(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.frf.prototype={
$1(d){return d.x},
$S:z+0}
C.fuq.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fur.prototype={
$1(d){var w
if(!this.a.LG(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fus.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.e6V.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.e6W.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.z(this.b,this.c))},
$S:0}
C.e6X.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd0(v).Q
v.toString
w.ma(v,A.dX,A.ij)}},
$S:9}
C.e77.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.e78.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.e73.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.e71.prototype={
$2(d,e){var w=this.a
w.r.push(B.cM(B.dD(0,0,0,d,0,0),new C.e72(w,this.b,e)))},
$S:1857}
C.e72.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.e74.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gW4().ajB(0,u[1],u[2],u[3])
u[4].bQ(0,new C.e7_(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dX(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.e70(w.a,v,w.f,w.r))},
$S:0}
C.e7_.prototype={
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
C.e70.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bm(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.e75.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gW4().akj(t,u[1],s,u[3])
E.dX(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.e6Z(w.a,v,w.e,w.f))},
$S:0}
C.e6Z.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bm(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.e76.prototype={
$0(){E.dX(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.e6Y(w,this.b))},
$S:0}
C.e6Y.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.e7b.prototype={
$0(){var w=this.a
return w.m(new C.e7a(w))},
$S:0}
C.e7a.prototype={
$0(){return this.a.at=!0},
$S:0}
C.e7c.prototype={
$0(){var w=this.a
return w.m(new C.e79(w))},
$S:0}
C.e79.prototype={
$0(){return this.a.at=!1},
$S:0}
C.e7d.prototype={
$0(){var w=this.a
w.f.saU(0,this.b)
w.Nu()},
$S:0}
C.e7e.prototype={
$0(){return this.a.Y4(this.b)},
$S:0}
C.e7f.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Nu():w.aVk()},
$S:2}
C.e7g.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Nu():w.aVk()},
$S:0}
C.ela.prototype={
$2(d,e){return d+e},
$S:1858}
C.elu.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.elt(w,d))},
$S:1859}
C.elt.prototype={
$0(){var w=B.aJ(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.elv.prototype={
$0(){},
$S:0}
C.elw.prototype={
$0(){},
$S:0}
C.elc.prototype={
$0(){return this.a.m(new C.elb(this.b,this.c))},
$S:0}
C.elb.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.el1.prototype={
$1(d){return this.a.cx===d},
$S:34}
C.el2.prototype={
$1(d){return this.a.cx=d},
$S:30}
C.el3.prototype={
$1(d){return this.a.cy===d},
$S:34}
C.el4.prototype={
$1(d){return this.a.cy=d},
$S:30}
C.el5.prototype={
$1(d){return this.a.db===d},
$S:34}
C.el6.prototype={
$1(d){return this.a.db=d},
$S:30}
C.el7.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:34}
C.el8.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.M(0,d)},
$S:30}
C.el9.prototype={
$0(){var w=this.a
return w.m(w.gaw5())},
$S:0}
C.el_.prototype={
$1(d){return this.a.$1(!0)},
$S:79}
C.el0.prototype={
$1(d){return this.a.$1(!1)},
$S:136}
C.ekZ.prototype={
$1(d){return this.a.$1(!1)},
$S:192}
C.eln.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.as(e.b,e.d)
o.ch=n
n=B.b3(p,p,p,new C.bgf(o,p),n)
w=this.b
v=C.byD("WORLD",w.a,w.c)
u=C.byD("GRAVITY",B.u(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.cs:A.bn
t=C.byD("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.Co[o.db].d?A.cs:A.c
q=x.p
s=B.a([v,u,t,C.byD("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(C.byD("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.B(s,A.m,p,A.ir,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bDf(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rk[w].a+".":"You landed on every world!"
v=B.a([new C.j4(A.o3,"Again",new C.eli(o),A.c,p),new C.j4(A.oR,"Rebuild",new C.elj(o),A.aT,p)],q)
if(o.d+1<7)v.push(new C.j4(A.ln,"Next world",new C.elk(o),A.bn,p))
n.push(C.hhH("Perfect landing!",w,A.bn,v))}if(o.as==="crashed")n.push(C.hhH("Crash!",o.at,A.cs,B.a([new C.j4(A.o3,"Try again",new C.ell(o),A.bn,p),new C.j4(A.oR,"Rebuild",new C.elm(o),A.aT,p)],q)))
return new B.an(A.V,p,A.b0,A.r,n,p)},
$S:70}
C.eli.prototype={
$0(){var w=this.a
return w.m(w.gaw5())},
$S:0}
C.elj.prototype={
$0(){var w=this.a
return w.m(new C.elf(w))},
$S:0}
C.elf.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.elk.prototype={
$0(){var w=this.a
return w.m(new C.ele(w))},
$S:0}
C.ele.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.ell.prototype={
$0(){var w=this.a
return w.m(w.gaw5())},
$S:0}
C.elm.prototype={
$0(){var w=this.a
return w.m(new C.eld(w))},
$S:0}
C.eld.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.elo.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.elh(v,w))},
$S:0}
C.elh.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.elp.prototype={
$1(d){return this.a.y=d},
$S:8}
C.elq.prototype={
$1(d){return this.a.Q=d},
$S:8}
C.elr.prototype={
$1(d){return this.a.z=d},
$S:8}
C.els.prototype={
$0(){var w=this.a
return w.m(new C.elg(w))},
$S:0}
C.elg.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dF2.prototype={
$0(){var w=0,v=B.j(x.a),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=$.hd_
if(q==null)q=$.hd_=C.cFw()
w=3
return B.b(B.iO(B.a([q,$.qW().bfz("assets/data/three.min.js")],x.aJ),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kG(0,B.cO(J.q(s,1)))
q.m(new C.dF1(q,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:51}
C.dF1.prototype={
$0(){return this.a.d=x.F.a(J.q(this.b,0))},
$S:0}
C.dEF.prototype={
$0(){return this.a.bUJ(B.aU(J.q(this.b,"group")))},
$S:0}
C.dEG.prototype={
$1(d){return A.a.aX(A.o.fV(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:276}
C.dF3.prototype={
$0(){return C.a7Y("kick",0.25)},
$S:0}
C.dEH.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dEI.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.dEJ.prototype={
$0(){return C.a7Y("kick",0.5)},
$S:0}
C.dEK.prototype={
$0(){return E.dX(1300+this.a.R8.az(900),"",40,0,0.2,"square")},
$S:0}
C.dEM.prototype={
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
u=w}if(u.cx!=null&&!A.d.b4(u.d.e,new C.dEL(u)))u.cx=null
u.go=0},
$S:0}
C.dEL.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.axN(d)},
$S:z+11}
C.dEC.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
C.dED.prototype={
$0(){var w=this.a
return w.m(w.gc49())},
$S:0}
C.dEE.prototype={
$0(){return this.a.ahd(null)},
$S:0}
C.dET.prototype={
$0(){var w=this.a.as
return w==null?null:w.f0(0,B.F(["t","shot"],x.N,x.A))},
$S:0}
C.dEU.prototype={
$0(){return this.a.czA(this.b.a)},
$S:0}
C.dEV.prototype={
$0(){return this.a.ahd(this.b)},
$S:0}
C.dEW.prototype={
$1(d){var w=this.a
return w.m(new C.dES(w,d))},
$S:7}
C.dES.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.dEX.prototype={
$0(){var w=this.a
return w.m(new C.dER(w,this.b))},
$S:0}
C.dER.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.dEY.prototype={
$0(){var w=this.a
return w.m(new C.dEQ(w))},
$S:0}
C.dEQ.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.dEZ.prototype={
$0(){var w=this.a
return w.m(new C.dEP(w))},
$S:0}
C.dEP.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f0(0,B.F(["t","reset"],x.N,x.A))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Kq},
$S:0}
C.dF_.prototype={
$0(){var w=this.a
return w.m(new C.dEO(w))},
$S:0}
C.dEO.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aXY()
else w.p2=null},
$S:0}
C.dF0.prototype={
$0(){var w=this.a
return w.m(new C.dEN(w))},
$S:0}
C.dEN.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
C.c0J.prototype={
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
$S:343}
C.c0K.prototype={
$1(d){var w=new B.rR([],[]).pF(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:480}
C.fdU.prototype={
$1(d){var w=J.a3(d)
return w.h(d,0)&&w.h(d,1)},
$S:219}
C.fdV.prototype={
$1(d){var w=J.a3(d)
return w.h(d,0)||w.h(d,1)},
$S:219}
C.fdW.prototype={
$1(d){var w=J.a3(d)
return w.h(d,0)!==w.h(d,1)},
$S:219}
C.fe2.prototype={
$1(d){return!J.q(d,0)},
$S:219}
C.fe3.prototype={
$1(d){var w=J.a3(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:219}
C.fe4.prototype={
$1(d){var w=J.a3(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:219}
C.dGI.prototype={
$1(d){return this.a.asN(0)},
$S:9}
C.dGm.prototype={
$0(){var w=this.b
return this.a.cx=new B.M(w,B.hZ7(),B.T(w).k("M<1,H>")).fM(0)},
$S:0}
C.dGp.prototype={
$1(d){return""+d},
$S:81}
C.dGJ.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dGk.prototype={
$1(d){return this.a.asN(this.b)},
$S:9}
C.dGl.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.awz(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mx(0,d,a1.m1(0.15,0.3))
u=a1.mx(0,d,a1.m1(0.15,0.62))
t=a1.mx(0,"and",a1.m1(0.48,0.46))
s=a1.mx(0,a0,a1.m1(0.82,0.46))
a1=t.a
w.push(new C.no(v.a,a1,0))
w.push(new C.no(u.a,a1,1))
w.push(new C.no(a1,s.a,0))
break
case 1:v=a1.mx(0,d,a1.m1(0.12,0.25))
u=a1.mx(0,d,a1.m1(0.12,0.65))
r=a1.mx(0,"xor",a1.m1(0.46,0.25))
q=a1.mx(0,"and",a1.m1(0.46,0.65))
p=a1.awy(0,a0,a1.m1(0.82,0.25),0)
o=a1.awy(0,a0,a1.m1(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.no(a1,n,0))
m=u.a
w.push(new C.no(m,n,1))
l=q.a
w.push(new C.no(a1,l,0))
w.push(new C.no(m,l,1))
w.push(new C.no(n,p.a,0))
w.push(new C.no(l,o.a,0))
break
case 2:k=a1.mx(0,"clock",a1.m1(0.15,0.4))
j=a1.mx(0,"not",a1.m1(0.45,0.65))
s=a1.mx(0,a0,a1.m1(0.82,0.3))
i=a1.mx(0,"buzzer",a1.m1(0.82,0.65))
a1=k.a
w.push(new C.no(a1,s.a,0))
n=j.a
w.push(new C.no(a1,n,0))
w.push(new C.no(n,i.a,0))
break
default:h=a1.mx(0,d,a1.m1(0.12,0.25))
g=a1.mx(0,d,a1.m1(0.12,0.7))
f=a1.mx(0,"nor",a1.m1(0.5,0.25))
e=a1.mx(0,"nor",a1.m1(0.5,0.7))
s=a1.mx(0,a0,a1.m1(0.86,0.25))
a1=f.a
w.push(new C.no(g.a,a1,0))
n=e.a
w.push(new C.no(n,a1,1))
w.push(new C.no(h.a,n,0))
w.push(new C.no(a1,n,1))
w.push(new C.no(a1,s.a,0))}},
$S:0}
C.dGq.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.awz(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.Cj(p,"switch",new B.x(0.14*q.a,r*q.b),0))}o.mx(0,w.e,o.m1(0.86,0.5))},
$S:0}
C.dGf.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dGg.prototype={
$2(d,e){return A.k.aM(d.c.b,e.c.b)},
$S:z+22}
C.dGh.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dGi.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dGj.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.acC(this.c)
if(v.ax)C.IO("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)E.dX(140,"",250,0,0.3,"square")}},
$S:0}
C.dGr.prototype={
$0(){},
$S:0}
C.dGs.prototype={
$0(){return A.d.cF(this.a.e,this.b)},
$S:0}
C.dGt.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dGo.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bs(w.e,new C.dGn(v))
w.cy=null},
$S:0}
C.dGn.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
C.dGe.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mx(0,this.b,new B.x(w.x.a*(0.3+v.an()*0.4),w.x.b*(0.2+v.an()*0.6))).a},
$S:0}
C.dGC.prototype={
$0(){var w=this.a
return w.m(new C.dGB(w))},
$S:0}
C.dGB.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dGD.prototype={
$2(d,e){var w=null,v=this.a,u=new B.as(e.b,e.d)
v.x=u
return B.aB(A.ci,B.jx(B.b3(w,w,w,new C.bap(v,w),u),A.r,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dGw(v),w,w,w,new C.dGx(v),new C.dGy(v),new C.dGz(v),w,w,w,w,w,w,w,w,w,w,new C.dGA(v),w,w,w,!1,A.a7)},
$S:37}
C.dGA.prototype={
$1(d){return this.a.c5U(d.b)},
$S:65}
C.dGy.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ce7(u)
if(t!=null){v.as=t
v.at=u
return}w=v.axk(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aF(0,u)}},
$S:49}
C.dGz.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.x(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:21}
C.dGx.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bYi(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bs(v,new C.dGu(w))
u=t.as
u.toString
v.push(new C.no(u,w.a,w.b))
B.kn()}}t.z=t.as=null},
$S:43}
C.dGu.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
C.dGw.prototype={
$1(d){return this.a.avn(d.b)},
$S:280}
C.dGE.prototype={
$0(){return this.a.bz5(this.b.a)},
$S:0}
C.dGF.prototype={
$0(){return this.a.asN(this.b.a)},
$S:0}
C.dGG.prototype={
$0(){var w=this.a
return w.m(new C.dGv(w))},
$S:0}
C.dGv.prototype={
$0(){var w=this.a
w.awz(0)
w.ay=null},
$S:0}
C.dGH.prototype={
$0(){return this.a.cvi(this.b)},
$S:0}
C.cMh.prototype={
$0(){var w=this,v=null,u=B.h2(v,v,v,v,B.d0(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.cb,v,A.dR,A.c7)
u.eO()
return u},
$S:317}
C.dMy.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dMx.prototype={
$0(){return this.a.d=null},
$S:0}
C.dMA.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c_5()},
$S:120}
C.dMz.prototype={
$0(){return B.a4(this.a,!1).la()},
$S:0}
C.fek.prototype={
$0(){return D.e2a},
$S:z+13}
C.fel.prototype={
$0(){return D.dBq},
$S:z+44}
C.fem.prototype={
$0(){return D.dym},
$S:z+66}
C.fen.prototype={
$0(){return D.e1A},
$S:z+14}
C.feo.prototype={
$0(){return D.dKr},
$S:z+15}
C.fep.prototype={
$0(){return D.e1i},
$S:z+16}
C.feq.prototype={
$0(){return D.e_k},
$S:z+17}
C.fer.prototype={
$0(){return D.e1z},
$S:z+18}
C.fes.prototype={
$0(){return D.dAA},
$S:z+19}
C.eVs.prototype={
$2(d,e){return new C.aex($.bD3()[e],new C.eVr(e,this.a),null)},
$S:z+20}
C.eVr.prototype={
$0(){var w=this.a,v=F.aE3.h(0,$.bD3()[w].a)
$.ars=v==null?"music":v
B.a4(this.b,!1).cm(B.e9(new C.eVp(w),!1,null,x.H))},
$S:0}
C.eVp.prototype={
$1(d){return $.bD3()[this.a].e.$0()},
$S:39}
C.eVt.prototype={
$2(d,e){return new C.adp(D.awN[e],new C.eVq(this.a,e),null)},
$S:z+21}
C.eVq.prototype={
$0(){return this.a.d.$1(D.awN[this.b])},
$S:0}
C.eV8.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eV7.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eV6.prototype={
$1(d){var w=this
return new B.dY(new C.eV5(w.a,w.b,w.c,w.d),null)},
$S:19}
C.eV5.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.l,a1=B.aH(a2,d,a0).w
a0=B.aH(a2,d,a0).w
w=x.p
v=B.a([D.fnN,A.av,D.fuj,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new B.aR(12,12)
m=new B.aR(12,12)
m=B.a([new B.bB(1,A.bg,B.aM(d,A.U,!1,d,!0,A.r,d,B.aN(),r[p],d,d,d,d,d,2,new B.e2(d,d,d,d,d,d,d,d,d,d,"Title",d,G.DB,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b4(4,new B.bo(n,n,n,n),A.W),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.aa,d,d,d,d,d,d,d,d,d,d,d,A.j9,!0,A.a4,d,A.an,d,d,d,d),d),A.ab,new B.bB(2,A.bg,B.aM(d,A.U,!1,d,!0,A.r,d,B.aN(),q[p],d,d,d,d,d,2,new B.e2(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.DB,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b4(4,new B.bo(m,m,m,m),A.W),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.aa,d,d,d,d,d,d,d,d,d,d,d,A.j9,!0,A.a4,d,A.an,d,d,d,d),d)],w)
n=B.a([],w)
for(l=0;l<30;++l){k=D.dlz[l]
j=new B.aR(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}h=A.d.gH(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}g=A.d.gH(i)}else g=A.bD
f=new B.az(g,u[p].A(0,k)?1.8:1,A.q,-1)
n.push(B.aB(d,B.p(d,B.X(k,u[p].A(0,k)?A.c:A.aQ,d,d,d,22),A.f,d,d,new B.o(h,d,new B.bO(f,f,f,f),new B.bo(j,j,j,j),d,d,A.n),d,d,d,A.fB,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eV3(a3,p,u,k),d,d,d,d,d,d,!1,A.a7))}A.d.v(v,B.a([new B.y("SLAB "+o,d,D.fdE,d,d,d,d,d,d,d,d,d),A.am,new B.ck(A.aN,A.e,A.j,A.m,d,A.p,d,0,m,d),A.N,new B.a7(d,44,B.cy(n,d,d,d,d,A.aN,!1),d),A.aB],w))}v.push(B.bG(A.wC,new C.eV4(t,r,q,u,a2),d))
return new B.D(new B.Q(0,0,0,a1.f.d),B.bl(!0,new B.cT(new B.aX(0,1/0,0,a0.a.b*0.86),B.cy(v,d,A2.xT,d,d,A.ah,!0),d),!0,!1,A.ae,!0,!0),d)},
$S:102}
C.eV3.prototype={
$0(){var w=this
return w.a.$1(new C.eV2(w.b,w.c,w.d))},
$S:0}
C.eV2.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.eV4.prototype={
$0(){var w=this,v=w.a
v.m(new C.eV1(v,w.b,w.c,w.d))
B.a4(w.e,!1).O(null)},
$S:0}
C.eV1.prototype={
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
C.eVg.prototype={
$0(){var w=this.a
return w.m(new C.eVf(w))},
$S:0}
C.eVf.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.eVh.prototype={
$0(){return C.wS(this.b,this.a.f,"scene")},
$S:0}
C.eVi.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.aq(A.d.gH(u),A.d.gak(u),0.4)
u.toString
w=this.a.gZp().x
w===$&&B.c()
return B.c0(v,new B.o(v,v,v,v,v,new B.c_(D.aXi,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.bY],x.O),v,v),A.n),A.be)},
$S:341}
C.eVj.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.au(B.eM(A.A,B.c7(new B.h9(B.a([u.gtZ(),u.gZp()],x.dS)),new C.eVe(u,this.b,v),w),A.f,A.dZ),w,w,w)},
$S:242}
C.eVe.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gtZ().x
r===$&&B.c()
w=r<0.9?1:1-C.bq8(r,0.9,0.98)
v=s.gZp().x
v===$&&B.c()
u=A.dy.au(0,v)
switch(s.gawA().a){case 0:s=s.byh(t.b,r,u,t.c)
break
case 1:s=s.bOS(t.b,r,u,t.c)
break
case 2:s=s.cA6(t.b,r,u,t.c)
break
case 3:s=s.bBc(t.b,r,u,t.c)
break
case 4:s=s.bEw(t.b,r,u,t.c)
break
case 5:s=s.bDG(t.b,r,u,t.c)
break
default:s=null}return B.db(s,w)},
$S:228}
C.eVk.prototype={
$2(d,e){var w=B.auU(this.b),v=this.c.d,u=B.aq(A.d.gH(v),A.d.gak(v),0.4)
u.toString
v=B.aq(A.d.gH(v),A.d.gak(v),0.4)
v.toString
v=w.cIE(u,A.bD,v,3.5)
u=this.a
w=u.gtZ().x
w===$&&B.c()
return B.a9M(B.l_(null,null,null,1,0,new C.eVd(u),A.k.D(w,0,1)),v)},
$S:1862}
C.eVd.prototype={
$1(d){var w=this.a
w.gtZ().sp(0,d)
if(w.as)w.m(new C.eV9(w))},
$S:7}
C.eV9.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eVl.prototype={
$0(){var w=this.a
w.gtZ().sp(0,0)
w.afX()},
$S:0}
C.eVm.prototype={
$1(d){var w=this.a
w.m(new C.eVc(w,d))
if(w.as)w.afX()},
$S:7}
C.eVc.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eVn.prototype={
$0(){var w=this.a
w.m(new C.eVb(w,this.b))
w.gtZ().sp(0,0)
if(w.as)w.afX()},
$S:0}
C.eVb.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.eVo.prototype={
$0(){var w=this.a
return w.m(new C.eVa(w,this.b))},
$S:0}
C.eVa.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.eV_.prototype={
$2(d,e){return A.k.aM(d.a,e.a)},
$S:1863}
C.eV0.prototype={
$1(d){return d.b},
$S:1864}
C.dhf.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+3}
C.dhg.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dhc.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+3}
C.dhd.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.dhe.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.dhh.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dhi.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dhj.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.dhk.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dhl.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dhm.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dhn.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dho.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dhp.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.ekv.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ekk.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.ekm.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.ekn.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.ekq.prototype={
$1(d){var w=D.mC.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.ekr.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.T(q),o=x.dg,n=B.C(new B.ea(new B.cP(new B.a_(q,new C.eks(d),p.k("a_<1>")),new C.ekt(r),p.k("cP<1,qN?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aH(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.L)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.eks.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.ekt.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.eko.prototype={
$1(d){return D.mC.h(0,d.b).c===D.wU},
$S:z+36}
C.ekp.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.ekV.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.v6(0,u)
w.a6a(A.o.am(v,1000))},
$S:9}
C.eku.prototype={
$0(){},
$S:0}
C.ekg.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$$0)
case 6:e.aq("String","ngmy_core_reaction_lab_v1",s.a.d.ag())
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
C.ekx.prototype={
$1(d){var w=null,v=this.a.b
return B.bl(!0,B.w(B.a([A.N,B.dL(!1,w,w,w,!0,w,w,w,!0,w,B.X(D.mC.h(0,v).b,D.mC.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fFv,w,B.d(D.mC.h(0,v).a,w,w,w,w,w,w,A.hq,w,w,w),w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,X.anK,w,w,w,w,new C.ekw(d),!1,w,w,w,w,w,w,w,D.fx4,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ae,!0,!0)},
$S:25}
C.ekw.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.ekz.prototype={
$1(d){var w,v,u=null,t=B.aH(d,u,x.l).w,s=B.a([D.ebN],x.p)
for(w=0;w<6;++w){v=D.ax7[w]
s.push(B.dL(!1,u,u,u,!0,u,u,u,!0,u,D.bTh,u,u,u,u,new C.eky(d,v),!1,u,u,u,u,u,new B.y(v.b,u,A.lA,u,u,u,u,u,u,u,u,u),u,new B.y(v.a,u,A.hq,u,u,u,u,u,u,u,u,u),u,u,u))}return B.bl(!0,new B.cT(new B.aX(0,1/0,0,t.a.b*0.7),B.cy(s,u,D.byf,u,u,A.ah,!0),u),!0,!1,A.ae,!0,!0)},
$S:25}
C.eky.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.ekj.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.dh,w,w,!0,w,w,new C.ekh(d),w,w),B.bK(!1,A.DH,w,w,!0,w,w,new C.eki(d),w,w)],x.p),w,w,F.n0,D.fuu,w,w,w,w,D.fxm,w)},
$S:18}
C.ekh.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.eki.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.ekT.prototype={
$0(){var w=this.a
return w.m(new C.ekS(w))},
$S:0}
C.ekS.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ekU.prototype={
$2(d,e){var w,v,u,t=null,s=new B.as(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.mi(new C.ekJ(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b6B:t
v=B.a([B.b3(u,t,t,new C.bgd(w,v,new C.ekK(r),new C.ekL(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,B.e1(B.c7(w,new C.ekM(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bGb())
return B.aB(A.ci,B.jx(new B.an(A.V,t,A.b0,A.r,v,t),A.r,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.ekN(r),t,r.gcfq(),t,new C.ekO(r),new C.ekP(r),new C.ekQ(r),t,t,t,t,t,t,t,t,t,t,new C.ekR(r),t,t,t,!1,A.a7)},
$S:37}
C.ekJ.prototype={
$0(){return this.a.abI(this.b)},
$S:0}
C.ekR.prototype={
$1(d){return this.a.cxR(d.b)},
$S:65}
C.ekP.prototype={
$1(d){return this.a.cfr(d.b)},
$S:49}
C.ekQ.prototype={
$1(d){return this.a.cfs(d.b)},
$S:21}
C.ekO.prototype={
$1(d){return this.a.b0c()},
$S:43}
C.ekN.prototype={
$1(d){return this.a.aco(d.b)},
$S:280}
C.ekK.prototype={
$0(){return this.a.z},
$S:648}
C.ekL.prototype={
$0(){return this.a.Q},
$S:722}
C.ekM.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bKq()
if(p.length===0)return A.bI
w=A.w.j(0.55)
v=B.n(14)
u=B.I(A.bD,A.q,1)
t=B.a([D.frY,A.cQ],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.L)(p),++r)t.push(new B.y(p[r],q,D.fco,q,q,q,q,A.a2,q,2,q,q))
return B.p(q,B.w(t,A.F,q,A.e,A.Q,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h8,q,q,q)},
$S:59}
C.ekl.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.n(12),t=B.I(e.j(0.6),A.q,1),s=x.p
return new B.D(A.e8,B.B(B.a([B.p(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bd,B.E(B.w(B.a([B.d(f,w,w,w,w,w,w,A4.TM,w,w,w),A.bz,B.d(g,w,w,w,w,w,w,F.TS,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1866}
C.ekF.prototype={
$0(){var w=this.a.c
w.toString
return B.a4(w,!1).la()},
$S:0}
C.ekG.prototype={
$0(){var w=this.a
return w.m(new C.ekE(w))},
$S:0}
C.ekE.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ekH.prototype={
$0(){var w=this.a
return w.m(new C.ekD(w))},
$S:0}
C.ekD.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.ekI.prototype={
$0(){var w=this.a
return w.m(new C.ekC(w))},
$S:0}
C.ekC.prototype={
$0(){return this.a.r=!0},
$S:0}
C.ekB.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.mC.gdQ(D.mC),w=w.gae(w);w.C();){v=w.gT(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.L)(p),++r)u.push(s.csF(p[r]))
return new B.D(H.ahg,B.w(B.a([new B.D(Ah.aiV,w,q),B.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+37}
C.ekA.prototype={
$0(){return this.a.c5Z(this.b)},
$S:0}
C.dhb.prototype={
$0(){var w=this,v=null,u=B.h2(v,v,v,v,B.d0(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.cb,v,A.dR,A.c7)
u.eO()
return u},
$S:317}
C.ewB.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.am(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new B.x(s.a+q*n,s.b+r*n)
t.b=new B.x(q*v,r*v)}A.d.bs(o,new C.ewz(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new C.ewA())},
$S:9}
C.ewz.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+38}
C.ewA.prototype={
$0(){},
$S:0}
C.ewc.prototype={
$0(){},
$S:0}
C.ewb.prototype={
$0(){},
$S:0}
C.ewl.prototype={
$0(){return C.wS(this.b,this.a.d,"spark-painter")},
$S:0}
C.ewn.prototype={
$1(d){return this.a.aYD(0,d.b)},
$S:49}
C.ewr.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gak(w).aF(0,u).gcG()>2.5}else w=!1
if(w)t.a.push(u)
v.aRz(u)
v.c8L(u)
return null},
$S:21}
C.ewm.prototype={
$1(d){return this.a.aYC()},
$S:43}
C.ews.prototype={
$1(d){return this.a.aYD(0,d.b)},
$S:23}
C.ewt.prototype={
$1(d){return this.a.aYC()},
$S:65}
C.ewu.prototype={
$0(){var w=this.a
return w.m(new C.ewk(w,this.b))},
$S:0}
C.ewk.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
C.ewv.prototype={
$0(){var w=this.a
return w.m(new C.ewj(w))},
$S:0}
C.ewj.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.eww.prototype={
$0(){var w=this.a
return w.m(new C.ewi(w,this.b))},
$S:0}
C.ewi.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.ewx.prototype={
$1(d){var w=this.a
return w.m(new C.ewh(w,d))},
$S:7}
C.ewh.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.ewy.prototype={
$0(){var w=this.a
return w.m(new C.ewg(w))},
$S:0}
C.ewg.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.ewo.prototype={
$0(){var w=this.a
return w.m(new C.ewf(w))},
$S:0}
C.ewf.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.ewp.prototype={
$0(){var w=this.a
return w.m(new C.ewe(w))},
$S:0}
C.ewe.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
C.ewq.prototype={
$0(){var w=this.a
return w.m(new C.ewd(w,this.b))},
$S:0}
C.ewd.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eCK.prototype={
$0(){return C.wS(this.b,this.a.d,"title")},
$S:0}
C.eCL.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIR().x
q===$&&B.c()
w=B.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.c_f(v[t],t,s,q,u))
return new B.D(A.fC,B.bZ(A.fQ,w,A.rX,0,0),null)},
$S:686}
C.eCM.prototype={
$1(d){return this.a.m(new C.eCJ())},
$S:2}
C.eCJ.prototype={
$0(){},
$S:0}
C.eCN.prototype={
$0(){var w=this.a
w.m(new C.eCI(w,this.b))
w=w.gIR()
w.iJ(0,0)
w.cL(0)},
$S:0}
C.eCI.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.eCO.prototype={
$0(){var w=this.a
return w.m(new C.eCH(w,this.b))},
$S:0}
C.eCH.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eCP.prototype={
$0(){var w=this.a
return w.m(new C.eCG(w))},
$S:0}
C.eCG.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
C.eCQ.prototype={
$0(){var w=this.a
return w.m(new C.eCF(w,this.b))},
$S:0}
C.eCF.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eCR.prototype={
$0(){var w=this.a.gIR()
w.iJ(0,0)
w.cL(0)},
$S:0}
C.eCS.prototype={
$1(d){var w=this.a
return w.m(new C.eCE(w,d))},
$S:7}
C.eCE.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.bLz.prototype={
$1(d){return d.r<=0},
$S:z+39}
C.bLK.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bLF.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bLL.prototype={
$1(d){return this.a.LG(d)&&!d.x},
$S:z+0}
C.bLM.prototype={
$2(d,e){return Math.max(d,this.a.aA5(e))},
$S:z+6}
C.bLO.prototype={
$2(d,e){var w=this.a
return w.c7(0,d.a+"."+e,new C.bLP(w))},
$S:z+5}
C.bLP.prototype={
$0(){return this.a.a},
$S:99}
C.bLN.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:72}
C.bLQ.prototype={
$2(d,e){var w=this.a
return w.c7(0,this.b.$1(this.c.$2(d,e)),new C.bLR(w))},
$S:z+5}
C.bLR.prototype={
$0(){return this.a.a},
$S:99}
C.bLB.prototype={
$2(d,e){var w=this.a
return w.c7(0,d.a+"."+e,new C.bLC(w))},
$S:z+5}
C.bLC.prototype={
$0(){return this.a.a},
$S:99}
C.bLA.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:72}
C.bLD.prototype={
$2(d,e){var w=this.a
return w.c7(0,this.b.$1(this.c.$2(d,e)),new C.bLE(w))},
$S:z+5}
C.bLE.prototype={
$0(){return this.a.a},
$S:99}
C.bLy.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bLS.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bLG.prototype={
$1(d){return d!==this.b&&this.a.aGg(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bLJ.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bLI.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bLH.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bGm.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bGn.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.cl4.prototype={
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
C.fG6.prototype={
$1(d){var w
$.W()
w=B.N()
w.r=d.gp(0)
return w},
$S:1867}
C.fG8.prototype={
$2(d,e){var w
$.W()
w=B.N()
w.b=A.af
w.c=e
w.r=d.gp(0)
w.d=A.bV
return w},
$S:1868}
C.fG9.prototype={
$5(d,e,f,g,h){return B.by(new B.a9(d,e,d+f,e+g),new B.aR(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1869}
C.fG7.prototype={
$3(d,e,f){var w
$.W()
w=B.N()
w.sar(new B.a8(A.b1,A.b6,A.x,B.a([e,f],x.O),null,null).aA(0,d))
return w},
$S:1870}
C.bG0.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bG1.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bG_(w))},
$S:0}
C.bG_.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bG2.prototype={
$0(){return B.a([],x.ey)},
$S:1871}
C.bG3.prototype={
$1(d){return this.a.bz(d).a>15e5},
$S:429}
C.bG4.prototype={
$0(){var w,v,u
J.bDc(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.Ct(v))if(C.fZo(v.b))w.b_G(v)
else w.a_o(v)
else{u=w.a.c.bcm(v)
w.adO(u==null?"The "+$.qi().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bFZ.prototype={
$1(d){return new B.dY(new C.bFX(this.a,this.b),null)},
$S:19}
C.bFX.prototype={
$2(d,e){var w=null,v=this.b,u=new C.bFY(this.a,v,e),t=$.qi(),s=v.b,r=B.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.ki,w,w,w),q=B.aI(w,w,w,w,D.bJV,w,w,w,new C.bFT(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return B.bl(!0,new B.D(A.xV,B.w(B.a([r,A.av,D.fGw,A.R,B.B(B.a([q,B.E(B.l_(t.h(0,s).d,w,w,2.6,1,u,p),1),B.aI(w,w,w,w,D.bQC,w,w,w,new C.bFU(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),B.B(B.a([B.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,B.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b4,B.bK(!1,D.fkb,w,w,!0,w,w,new C.bFV(u),w,w),B.bK(!1,A.wC,w,w,!0,w,w,new C.bFW(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.Q,0,A.p),w),!0,!1,A.ae,!0,!0)},
$S:88}
C.bFY.prototype={
$1(d){var w=this.a
w.m(new C.bFR(this.b,d))
this.c.$1(new C.bFS())
w.a.toString},
$S:7}
C.bFR.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
C.bFS.prototype={
$0(){},
$S:0}
C.bFT.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
C.bFU.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
C.bFV.prototype={
$0(){return this.a.$1(1)},
$S:0}
C.bFW.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.bGj.prototype={
$2(d,e){var w
if(d==="short"){E.dX(1800,"",120,0,0.55,"noise")
E.dX(200,"",160,2.2,0.4,"saw")
B.fF()
w=this.a
if(w.c!=null)w.adO("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dX(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.adO("\u26a0 Overloaded! The "+$.qi().h(0,e.b).b+" can only give about "+A.k.ab(w.a.c.zF(e),2)+" amps but your gadgets are asking for "+A.k.ab(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.adO("Burnt out! "+e.ay)
E.dX(140,"",320,0,0.6,"noise")
E.dX(900,"",160,1.5,0.35,"square")}},
$S:z+43}
C.bGk.prototype={
$0(){},
$S:0}
C.bFu.prototype={
$0(){},
$S:0}
C.bGl.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bGi.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.as(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.aB(A.ci,B.b3(p,p,p,new C.aik(w,v,u,t,s,r==null?A.j5:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bGc(o),new C.bGd(o),new C.bGe(o),p,p,p,p,p,p,p,p,p,p,new C.bGf(o),p,p,p,!1,A.a7)],q)
if(o.a.c.a.length===0)n.push(D.b5U)
w=o.Q
if(w!=null){v=B.n(14)
u=B.I(A.cY,A.q,1)
n.push(B.ao(p,B.aB(p,B.p(p,B.B(B.a([D.fis,B.E(B.d(w,p,p,p,p,p,p,D.faH,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(D.bbj,p,u,v,p,p,A.n),p,p,p,p,A.na,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bGg(o),p,p,p,p,p,p,!1,A.a7),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ao(8,o.aYK(B.B(B.a([D.bAk,new C.j4(A.G9,"Cut wire",new C.bGh(o),A.cs,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ao(8,o.cfZ(w),p,p,10,10,p,p))}return B.jx(new B.an(A.V,p,A.b0,A.r,n,p),A.r,p)},
$S:376}
C.bGd.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b6E(s)
if(r!=null){t.m(new C.bGa(t,r,d))
return}w=t.b0m(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.x(v*u.a,w.d*u.b).aF(0,s)
t.m(new C.bGb(t,w))}},
$S:49}
C.bGa.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bGb.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bGe.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bG8(w,d))
else if(w.w!=null)w.m(new C.bG9(w,d.b.ad(0,w.x)))},
$S:21}
C.bG8.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bG9.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bGc.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b6E(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.akj(u.a,u.b,v.a,v.b)!=null)E.dX(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.adM()},
$S:43}
C.bGf.prototype={
$1(d){var w=this.a,v=d.b,u=w.b0m(v)
if(u!=null){w.m(new C.bG6(w,u))
if(D.m1.ai(0,u.b))w.cqx(u)
w.a.toString
return}w.m(new C.bG7(w,w.cD6(v)))},
$S:65}
C.bG6.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dX(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dX(200,"",70,0,0.2,"saw")}},
$S:0}
C.bG7.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bGg.prototype={
$0(){var w=this.a
return w.m(new C.bG5(w))},
$S:0}
C.bG5.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bGh.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dX(300,"",50,0,0.35,"noise")
w.adM()},
$S:0}
C.bFv.prototype={
$0(){return this.a.bok(this.b)},
$S:0}
C.bFO.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.B(B.a([B.d(d,w,w,w,w,w,w,D.f5e,w,w,w),B.E(B.l_(this.b.d,w,w,g,h,new C.bFQ(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1872}
C.bFQ.prototype={
$1(d){var w=this.a
w.m(new C.bFP(this.b,d))
w.a.toString},
$S:7}
C.bFP.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bFB.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dX(260,"",70,0,0.35,"noise")
w.adM()},
$S:0}
C.bFC.prototype={
$0(){var w=this.a
return w.m(new C.bFA(w))},
$S:0}
C.bFA.prototype={
$0(){return this.a.d=null},
$S:0}
C.bFD.prototype={
$0(){this.a.m(new C.bFz(this.b,this.c))
E.dX(900,"",40,0,0.3,"noise")},
$S:0}
C.bFz.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bFG.prototype={
$0(){return this.a.b_G(this.b)},
$S:0}
C.bFH.prototype={
$0(){return this.a.a_o(this.b)},
$S:0}
C.bFI.prototype={
$0(){return this.a.a11(this.b)},
$S:0}
C.bFJ.prototype={
$0(){var w=this.a
w.m(new C.bFy(this.b,this.c))
w.a.toString},
$S:0}
C.bFy.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bFK.prototype={
$0(){var w=this.a
w.m(new C.bFx(this.b,this.c))
w.a.toString},
$S:0}
C.bFx.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bFL.prototype={
$0(){var w=this.a
w.m(new C.bFw(this.b,this.c))
w.a.toString},
$S:0}
C.bFw.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bFM.prototype={
$1(d){return this.a.f=d},
$S:7}
C.bFN.prototype={
$1(d){return this.a.f=d},
$S:7}
C.bFE.prototype={
$1(d){return this.a.f=d},
$S:7}
C.bFF.prototype={
$1(d){return this.a.f=d},
$S:7}
C.fe5.prototype={
$1(d){return d.aFT("bulb")},
$S:z+2}
C.fe6.prototype={
$1(d){return d.pO(0,"switch")&&d.aFT("bulb")},
$S:z+2}
C.fe7.prototype={
$1(d){return A.d.b4(d.a,new C.fdT())},
$S:z+2}
C.fdT.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fe8.prototype={
$1(d){return d.pO(0,"resistor")&&A.d.b4(d.a,new C.fdS())},
$S:z+2}
C.fdS.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fe9.prototype={
$1(d){return!d.pO(0,"battery")&&d.aFT("bulb")},
$S:z+2}
C.fdX.prototype={
$1(d){return A.d.b4(d.a,new C.fdR())},
$S:z+2}
C.fdR.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fdY.prototype={
$1(d){return A.d.b4(d.a,new C.fdQ())},
$S:z+2}
C.fdQ.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fdZ.prototype={
$1(d){return A.d.b4(d.a,new C.fdP())},
$S:z+2}
C.fdP.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fe_.prototype={
$1(d){var w=d.a
return A.d.b4(w,new C.fdN())&&A.d.b4(w,new C.fdO())&&d.pO(0,"buck")},
$S:z+2}
C.fdN.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fdO.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fe0.prototype={
$1(d){var w=d.a
return A.d.b4(w,new C.fdL())&&A.d.b4(w,new C.fdM())},
$S:z+2}
C.fdL.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fdM.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fe1.prototype={
$1(d){return A.d.b4(d.a,new C.fdK())},
$S:z+2}
C.fdK.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.dR6.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
C.dRf.prototype={
$1(d){var w=this.a.d
return w.aGg(d)&&w.Ct(d)},
$S:z+0}
C.dRg.prototype={
$1(d){return d.x},
$S:z+0}
C.dRh.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.dRi.prototype={
$0(){},
$S:0}
C.dR5.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.n(22),o=x.p,n=B.a([D.fzg,A.av,D.fk7,A.R],o)
for(w=this.a,v=0;v<19;++v){u=D.Q6[v]
t=A.c.j(0.06)
s=new B.aR(14,14)
r=new B.az(A.bD,1,A.q,-1)
n.push(B.aB(q,B.p(q,B.w(B.a([new B.y(u.a,q,A.kh,q,q,q,q,q,q,q,q,q),A.bz,new B.y(u.b,q,D.fbq,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(t,q,new B.bO(r,r,r,r),new B.bo(s,s,s,s),q,q,A.n),q,q,q,A.cu,A.bk,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dR4(w,d,u),q,q,q,q,q,q,!1,A.a7))}return B.eL(q,F.li,new B.D(A.bQ,new B.a7(340,q,B.cy(n,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d3,q,new B.b7(p,A.W),q)},
$S:47}
C.dR4.prototype={
$0(){B.a4(this.b,!1).O(null)
var w=this.a
w.m(new C.dR3(w,this.c))
E.dX(800,"",120,-0.5,0.3,"square")},
$S:0}
C.dR3.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bhu()},
$S:0}
C.dR1.prototype={
$1(d){return new C.Vh(this.a.d,null)},
$S:z+68}
C.dR2.prototype={
$0(){},
$S:0}
C.dRe.prototype={
$1(d){return new B.dY(new C.dRd(this.a),null)},
$S:19}
C.dRd.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ahw(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.bn:A.aR
k=B.aH(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.B(B.a([D.fwz,A.b4,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.N,B.bw(B.n(4),B.m5(A.bD,m,m,5,m,w.a/11,new B.lZ(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.fna)
else{h=f.j(0.1)
t=B.n(14)
s=B.I(f.j(0.5),A.q,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ac.TK,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.DC,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.w(B.a([r,A.av,q,new B.bI(A.a8,m,m,B.bK(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new C.dRb(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bk,m,m,m))}u.push(A.R)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aR(12,12)
n=new B.az(o===l.f?f.j(0.6):A.dB,1,A.q,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aA:A.c
u.push(B.aB(m,B.p(m,new B.ck(A.aN,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.y(s,m,A.a8i,m,m,m,m,m,m,m,m,m),A.at,new B.bB(1,A.bg,new B.y(r.a,m,new B.G(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bO(n,n,n,n),new B.bo(t,t,t,t),m,m,A.n),m,m,m,A.eM,A.na,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.dRc(l,o,e),m,m,m,m,m,m,!1,A.a7))}return B.bl(!0,new B.cT(new B.aX(0,1/0,0,k.a.b*0.75),B.cy(u,m,A2.xT,m,m,A.ah,!0),m),!0,!1,A.ae,!0,!0)},
$S:88}
C.dRb.prototype={
$0(){var w=this.a
w.m(new C.dR9(w))
this.b.$1(new C.dRa())
w.EU()},
$S:0}
C.dR9.prototype={
$0(){var w=this.a
$.ahw()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.dRa.prototype={
$0(){},
$S:0}
C.dRc.prototype={
$0(){var w=this.a
w.m(new C.dR7(w,this.b))
this.c.$1(new C.dR8())
w.EU()},
$S:0}
C.dR7.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dR8.prototype={
$0(){},
$S:0}
C.dRk.prototype={
$0(){return B.a4(this.a,!1).la()},
$S:0}
C.dRl.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.mf("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a4(t.b,!1).cm(B.e9(new C.dRj(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dRj.prototype={
$1(d){B.lo("construction")
return Ai.hBY()},
$S:z+46}
C.dRm.prototype={
$0(){return C.hnY(this.a,"ELECTRONICS LAB",this.b,A.aR)},
$S:0}
C.dRn.prototype={
$0(){var w=this.a
return w.m(w.d.gcUg())},
$S:0}
C.dRo.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gBm(v))
w.EU()},
$S:0}
C.cBW.prototype={
$2(d,e){var w=null,v=this.a.gawF().x
v===$&&B.c()
return B.b3(w,w,w,new C.b8l(v,w),A.az)},
$S:68}
C.cBV.prototype={
$3(d,e,f){var w=new B.aO($.W().r,A.ao,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.b5(v,t))
w.E(new B.cR(v,u,v+e,u))
w.E(new B.cR(v,u,v,u+e))
w.E(new B.cR(v,u,v-e,u))
w.E(new B.cR(v,u,v,t))
w.E(new B.bE())
t=B.N()
t.r=A.c.j(f).gp(0)
this.a.aS(w,t)},
$S:432}
C.fKP.prototype={
$3(d,e,f){return new C.UB(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+47}
C.fKQ.prototype={
$4(d,e,f,g){var w=x.Y
return new B.d_(e,!1,B.iq(A.A,g,null,new B.bf(B.cH(A.ct,e,null),new B.bp(0.85,1,w),w.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:32}
C.dNv.prototype={
$0(){return B.a4(this.a,!1).la()},
$S:0}
C.dNu.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bXL(o):q.bAf(o,p),m=x.p
p=B.a([B.ql(new B.nh(n,new B.cw(p,x.aC)),A.pS,B.rW(),A.bb,A.bb,new C.dNs())],m)
n=t.d
if(n){w=A.k.F(q.gRM(),12)<4
v=w?150:96
u=B.n(16)
m=B.a([A.at],m)
if(w)m.push(D.bA5)
else m.push(A.b4)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.bn:A.au,s,s,s,s,s,A.a5),s,9,s,s,s,s,s,9))
m.push(A.at)
p.push(B.ao(s,B.au(B.de(s,B.B(m,A.m,s,A.e,A.j,0,s,s),s,s,A.et,new B.o(A.w,s,s,u,s,s,A.n),A.n5,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.uJ)p.push(B.ao(s,B.au(B.p(s,s,A.f,s,s,A.Kv,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wq)p.push(B.ao(s,B.p(s,s,A.f,s,s,A.Kv,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aB(s,B.au(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.n(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dNt(q),s,s,s,s,s,s,!1,A.a7),s,s,0,0,s,s))
return B.bw(r,new B.an(A.V,s,A.b0,A.r,p,s),A.aq)},
$S:323}
C.dNs.prototype={
$2(d,e){var w=x.Y
return new B.d_(e,!1,B.iq(A.A,d,null,new B.bf(e,new B.bp(0.92,1,w),w.k("bf<bJ.T>"))),null)},
$S:466}
C.dNt.prototype={
$0(){var w=this.a
return w.m(new C.dNr(w))},
$S:0}
C.dNr.prototype={
$0(){return this.a.e=null},
$S:0}
C.dNq.prototype={
$0(){var w=this.a
return w.m(new C.dNp(w,this.b))},
$S:0}
C.dNp.prototype={
$0(){return this.a.e=A.d.cK(F.ka,this.b)},
$S:0}
C.dNo.prototype={
$0(){var w=this.a
return w.m(new C.dNn(w))},
$S:0}
C.dNn.prototype={
$0(){return this.a.e=0},
$S:0}
C.dNj.prototype={
$0(){var w=this.a
return w.m(new C.dNi(w))},
$S:0}
C.dNi.prototype={
$0(){return this.a.e=null},
$S:0}
C.dNm.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.n(o?20:8),m=A.w.j(0.55),l=x.p
m=B.p(p,B.B(B.a([D.fEW,A.at,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eH,p,p,p,D.fhj,p,p,p),1),B.d(A.a.aX(A.o.u(B.dk(new B.S(Date.now(),0,!1))),2,"0")+":"+A.a.aX(A.o.u(B.h1(new B.S(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qu,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.kV,p,p,p)
w=this.a
v=B.a([B.b3(p,p,p,new C.bud(w.gRM(),this.c.d,p),A.az)],l)
o=w.e
if(o!=null){u=B.n(10)
t=B.I(A.b2,A.q,1)
s=B.n(10)
o=B.p(p,B.B(B.a([B.aB(p,B.p(p,p,A.f,p,p,A.abn,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dNl(w),p,p,p,p,p,p,!1,A.a7),A.eg,B.p(p,p,A.f,p,p,A.abt,p,12,p,p,p,p,p,12),A.eg,B.p(p,p,A.f,p,p,D.b1j,p,12,p,p,p,p,p,12),A.at,B.E(B.d(F.ka[o].a,p,1,A.a2,p,p,p,A.a89,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.co,p,p,p,24,p,p,A.fq,p,p,p)
r=w.e
r.toString
v.push(B.bT(0,new B.D(D.bwQ,B.p(p,B.bw(s,B.w(B.a([o,B.E(B.b3(p,p,p,new C.aeg(r,w.gRM(),p),A.fE),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new B.o(A.w,p,t,u,D.di_,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.n(18)
t=B.I(A.b2,A.q,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jo,w.auC(F.ka[q],34,!1),p))
v.push(B.ao(8,B.au(B.p(p,B.B(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new B.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lm,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bw(n,B.p(p,B.w(B.a([m,B.E(new B.an(A.V,p,A.b0,A.r,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,S.Xr,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:323}
C.dNl.prototype={
$0(){var w=this.a
return w.m(new C.dNk(w))},
$S:0}
C.dNk.prototype={
$0(){return this.a.e=null},
$S:0}
C.feA.prototype={
$0(){return D.e3D},
$S:z+48}
C.feB.prototype={
$0(){return D.dBY},
$S:z+49}
C.feC.prototype={
$0(){return D.dyz},
$S:z+50}
C.feD.prototype={
$0(){return D.dBo},
$S:z+51}
C.feE.prototype={
$0(){return D.dGg},
$S:z+52}
C.feF.prototype={
$0(){return D.e_n},
$S:z+53}
C.feG.prototype={
$0(){return D.e1y},
$S:z+54}
C.feH.prototype={
$0(){return D.dFB},
$S:z+55}
C.cfI.prototype={
$0(){return B.a4(this.a,!1).la()},
$S:0}
C.cfJ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=B.a([],k)
for(w=$.hrA(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aR(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.dn,16)],t)
n=A.c.j(0.85)
j.push(B.aB(m,B.p(m,new B.an(A.V,m,A.a9,A.r,B.a([new B.cL(m,-6,-6,m,m,m,new B.y(r.c,m,L.TJ,m,m,m,m,m,m,m,m,m),m),new B.bI(A.lF,m,m,B.w(B.a([new B.y(r.a,m,D.ffW,m,m,m,m,m,m,m,m,m),A.cQ,new B.y(r.b,m,new B.G(!0,n,m,m,m,m,12,A.a6,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.Q,0,A.p),m)],k),m),A.f,m,m,new B.o(m,m,m,new B.bo(q,q,q,q),p,new B.a8(A.ay,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bE,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.cfH(d,r),m,m,m,m,m,m,!1,A.a7))}return B.bZ(A.bC,j,A.br,14,14)},
$S:159}
C.cfH.prototype={
$0(){return B.a4(this.a,!1).cm(B.e9(new C.cfG(this.b),!1,null,x.H))},
$S:0}
C.cfG.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eHc.prototype={
$0(){var w=this.a
return w.w=w.d[w.b3P(w.f)]},
$S:0}
C.eH8.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cW.an()*7},
$S:0}
C.eH7.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.c4)
w.w=""},
$S:0}
C.eHa.prototype={
$0(){var w=this.a
return w.m(new C.eH9(w,this.b))},
$S:0}
C.eH9.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cF(w,this.b)},
$S:0}
C.eHb.prototype={
$1(d){return this.a.aZ9(0)},
$S:2}
C.dTk.prototype={
$0(){return C.IO("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.dTl.prototype={
$0(){},
$S:0}
C.dTf.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.dTh.prototype={
$0(){return this.a.aZb(this.b)},
$S:0}
C.dTi.prototype={
$0(){var w=this.a
return w.m(new C.dTg(w))},
$S:0}
C.dTg.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.dTj.prototype={
$0(){var w=this.a
return w.aZb(w.d)},
$S:0}
C.dF9.prototype={
$2(d,e){return d+e},
$S:75}
C.dFa.prototype={
$0(){},
$S:0}
C.dF4.prototype={
$2(d,e){return d+e},
$S:75}
C.dF7.prototype={
$0(){var w=this.a
return w.m(new C.dF6(w,this.b))},
$S:0}
C.dF6.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dF8.prototype={
$0(){var w=this.a
return w.m(new C.dF5(w))},
$S:0}
C.dF5.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.dQQ.prototype={
$0(){return C.wS(this.b,this.a.d,"drawing")},
$S:0}
C.dQR.prototype={
$1(d){var w=this.a
return w.m(new C.dQP(w,d))},
$S:49}
C.dQP.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aHB(u,v,t))},
$S:0}
C.dQS.prototype={
$1(d){var w=this.a
return w.m(new C.dQO(w,d))},
$S:21}
C.dQO.prototype={
$0(){return A.d.gak(this.a.e).c.push(this.b.b)},
$S:0}
C.dQT.prototype={
$1(d){var w=this.a
return w.m(new C.dQN(w,d))},
$S:23}
C.dQN.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aHB(u,v,t))},
$S:0}
C.dQU.prototype={
$0(){var w=this.a
return w.m(new C.dQM(w,this.b))},
$S:0}
C.dQM.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.dQV.prototype={
$1(d){var w=this.a
return w.m(new C.dQL(w,d))},
$S:7}
C.dQL.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dQW.prototype={
$0(){var w=this.a
return w.m(new C.dQK(w))},
$S:0}
C.dQK.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dQX.prototype={
$0(){var w=this.a
return w.m(new C.dQJ(w))},
$S:0}
C.dQJ.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.dQY.prototype={
$0(){var w=this.a
return w.m(A.d.gBm(w.e))},
$S:0}
C.dQZ.prototype={
$0(){var w=this.a
return w.m(new C.dQI(w))},
$S:0}
C.dQI.prototype={
$0(){var w=this.a
w.x=D.aw4[A.o.F(A.d.cK(D.aw4,w.x)+1,4)]},
$S:0}
C.eeI.prototype={
$0(){return this.a.f.M(0,this.b)},
$S:0}
C.eeJ.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.IO("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.eeH(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.IO("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
C.eeH.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.eeK.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.eeG(w))},
$S:11}
C.eeG.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.eeO.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return B.aB(w,B.mE(new C.eeM(v,e),w,A.bb,A.pS,w,w,new B.bp(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eeN(v,e),w,w,w,w,w,w,!1,A.a7)},
$S:84}
C.eeN.prototype={
$0(){return this.a.c7w(this.b)},
$S:0}
C.eeM.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dp(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fC(3.141592653589793*e)
m=B.n(16)
w=o?p:D.bZE
if(o)v=q.a.r.t(0,q.b)?A.bn.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.I(u.r.t(0,t)?A.bn:A.b2,A.q,1)
if(o){r=B.dp()
r.fC(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fu(A.A,B.d(u[t],p,p,p,p,p,p,D.fdh,p,p,p),p,r,!0)
u=r}else u=D.fxZ
return B.fu(A.A,B.p(A.A,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:137}
C.eeP.prototype={
$0(){var w=this.a
return w.m(new C.eeL(w,this.b))},
$S:0}
C.eeL.prototype={
$0(){var w=this.a
w.d=this.b.a
w.arY()},
$S:0}
C.eeQ.prototype={
$0(){var w=this.a
return w.m(w.gbIV())},
$S:0}
C.eoD.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eoE.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eoB.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eoC.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eoA(w))},
$S:11}
C.eoA.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eoF.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eoG.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eoH.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aZa()},
$S:11}
C.eoI.prototype={
$0(){return this.a.c7C(this.b)},
$S:0}
C.eCu.prototype={
$1(d){return B.u(d.h(0,1))+","},
$S:71}
C.eCD.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.l(w,w,A.aQ,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kU,B.B(B.a([v,A.ab,new B.dq(1,A.cm,B.eM(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.dZ),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1873}
C.eCz.prototype={
$1(d){return this.a.m(new C.eCy())},
$S:2}
C.eCy.prototype={
$0(){},
$S:0}
C.eCA.prototype={
$0(){var w=this.a
return w.m(new C.eCx(w,this.b))},
$S:0}
C.eCx.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eCB.prototype={
$1(d){var w=this.a
return w.m(new C.eCw(w,d))},
$S:7}
C.eCw.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
C.eCC.prototype={
$0(){var w=this.a
return w.m(new C.eCv(w))},
$S:0}
C.eCv.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.edN.prototype={
$0(){},
$S:0}
C.edO.prototype={
$0(){},
$S:0}
C.edG.prototype={
$0(){var w=this.a
return w.m(new C.edF(w))},
$S:0}
C.edF.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c3(u,1,!1,x.S)
w.r=0.9
C.a7Y("hat",0.6)},
$S:0}
C.edH.prototype={
$0(){var w=this.a
return w.m(new C.edE(w))},
$S:0}
C.edE.prototype={
$0(){this.a.y=1.1
C.pW("bell",36,200,0.4)},
$S:0}
C.edI.prototype={
$0(){var w=this.a
return w.m(new C.edD(w))},
$S:0}
C.edD.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.az(Math.max(v,u)-t+1)
w.as=u
C.pW("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.edJ.prototype={
$0(){var w=this.a
return w.m(new C.edC(w,this.b))},
$S:0}
C.edC.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.edK.prototype={
$1(d){var w=this.a
return w.m(new C.edB(w,d))},
$S:7}
C.edB.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e6(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.edL.prototype={
$1(d){var w=this.a
return w.m(new C.edA(w,d))},
$S:7}
C.edA.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
C.edM.prototype={
$1(d){var w=this.a
return w.m(new C.edz(w,d))},
$S:7}
C.edz.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
C.csD.prototype={
$0(){return B.a4(this.a,!1).la()},
$S:0}
C.csE.prototype={
$0(){var w=this.a
return C.hnY(this.b,w.c,w.e,w.d)},
$S:0}
C.fOE.prototype={
$1(d){var w,v=null,u=B.n(24),t=this.a,s=t.j(0.4)
t=B.d(this.b,v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=B.d(this.c,v,v,v,v,v,v,D.f5N,v,v,v)
return B.ek(B.a([B.bK(!1,D.fnf,v,v,!0,v,v,new C.fOD(d),v,v)],x.p),v,v,F.n0,w,v,v,v,new B.b7(u,new B.az(s,1,A.q,-1)),t,v)},
$S:18}
C.fOD.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.csz.prototype={
$0(){B.eZ()
this.a.e.$0()},
$S:0}
C.csy.prototype={
$0(){B.eZ()
this.a.e.$0()},
$S:0}
C.csF.prototype={
$0(){B.eZ()
this.a.e.$0()},
$S:0}
C.csA.prototype={
$0(){var w=this.a
A.d.W(w.iH$,this.b.bj())
if(w.c!=null)this.c.$0()},
$S:0}
C.csC.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.oy$.a)/1e6,0,0.04)
w.oy$=d
w.nb$=A.o.am(v,1000)
w.pW(u)
if(w.c!=null)w.m(new C.csB())},
$S:9}
C.csB.prototype={
$0(){},
$S:0}
C.cfE.prototype={
$0(){var w=this
return C.pW(w.a,w.b,w.c,w.d)},
$S:1}
C.dVR.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dVQ(w,d))},
$S:z+57}
C.dVQ.prototype={
$0(){return this.a.csg(this.b)},
$S:0}
C.dVj.prototype={
$0(){var w,v,u,t=this.a,s=J.a3(t),r=s.gL(t),q=new Float64Array(r*4)
for(w=0;w<s.gL(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:693}
C.dVh.prototype={
$0(){return this.a.id=D.a3g},
$S:0}
C.dVi.prototype={
$0(){var w=this.b.a,v=B.T(w).k("a_<1>")
v=B.pg(new B.a_(w,new C.dVg(this.c),v),6,v.k("J.E"))
w=B.C(v,B.a6(v).k("J.E"))
return this.a.id=w},
$S:0}
C.dVg.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+58}
C.dVf.prototype={
$1(d){var w=null,v=B.cc(B.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,B.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.r,w,A.y,w,w,w,w,A.ah)
return B.ek(B.a([B.bK(!1,A.pl,w,w,!0,w,w,new C.dVe(d),w,w)],x.p),w,w,F.n0,v,w,w,w,w,D.fy3,w)},
$S:18}
C.dVe.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.dVC.prototype={
$0(){return C.wS(this.b,this.a.d,"earth")},
$S:0}
C.dVD.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new B.as(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gW1()
r=p.z
o=B.a([B.aB(A.ci,B.b3(q,q,q,new C.beJ(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dVq(p),new C.dVr(p),new C.dVs(p),q,q,q,q,q,q,q,new C.dVt(p),q,q,q,!1,A.a7)],x.p)
if(p.r==null)o.push(A7.ac5)
w=this.b
if(w!=null)o.push(B.ao(8,p.c8d(w),q,q,10,10,q,q))
return new B.eH(new B.an(A.V,q,A.b0,A.r,o,q),p.d)},
$S:354}
C.dVr.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:270}
C.dVs.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gW1()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:204}
C.dVq.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gW1()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:755}
C.dVt.prototype={
$1(d){var w=this.a,v=w.c8g(d.b)
if(v!=null)w.m(new C.dVk(w,v))
else w.m(new C.dVl(w))},
$S:65}
C.dVk.prototype={
$0(){return this.a.axb(this.b)},
$S:0}
C.dVl.prototype={
$0(){return this.a.fx=null},
$S:0}
C.dVE.prototype={
$0(){var w=this.a
w.e.bP(0,A.c4)
w.m(new C.dVp(w,this.b))},
$S:0}
C.dVp.prototype={
$0(){var w=this.a
w.id=D.a3g
w.axb(this.b)},
$S:0}
C.dVI.prototype={
$0(){var w=this.a
return w.m(new C.dVB(w))},
$S:0}
C.dVB.prototype={
$0(){var w=this.a
w.fx=null
w.at8(15,w.y,1)},
$S:0}
C.dVJ.prototype={
$0(){var w=this.a
return w.m(new C.dVA(w,this.b))},
$S:0}
C.dVA.prototype={
$0(){var w=this.b.b
return this.a.at8(w.a,w.b,w.c)},
$S:0}
C.dVK.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new C.dVz(w,v))},
$S:0}
C.dVz.prototype={
$0(){var w=this.b.a
return this.a.axb(w[A.cW.az(w.length)])},
$S:0}
C.dVL.prototype={
$1(d){var w=this.a
return w.m(new C.dVy(w,d))},
$S:7}
C.dVy.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
C.dVM.prototype={
$1(d){var w=this.a
return w.m(new C.dVx(w,d))},
$S:7}
C.dVx.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.dVN.prototype={
$1(d){var w=this.a
return w.m(new C.dVw(w,d))},
$S:7}
C.dVw.prototype={
$0(){return this.a.fr=this.b},
$S:0}
C.dVO.prototype={
$0(){var w=this.a
return w.m(new C.dVv(w))},
$S:0}
C.dVv.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.dVP.prototype={
$0(){var w=this.a
return w.m(new C.dVu(w))},
$S:0}
C.dVu.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
C.dVF.prototype={
$0(){var w=this.a
return w.m(new C.dVo(w))},
$S:0}
C.dVo.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.dVG.prototype={
$0(){var w=this.a
return w.m(new C.dVn(w))},
$S:0}
C.dVn.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.dVH.prototype={
$0(){var w=this.a
return w.m(new C.dVm(w))},
$S:0}
C.dVm.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
C.dVd.prototype={
$2(d,e){var w=null
return B.E(B.w(B.a([B.d(d,w,w,w,w,w,w,D.aPG,w,w,w),A.uM,B.d(e,w,2,A.a2,w,w,w,A.U_,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:140}
C.dVc.prototype={
$0(){var w=this.a
return w.m(new C.dVb(w))},
$S:0}
C.dVb.prototype={
$0(){return this.a.fx=null},
$S:0}
C.ddh.prototype={
$0(){var w=null,v=B.h2(w,w,w,w,B.d0(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.d0R,w,w),this.a),A.a4,A.cb,w,A.dR,A.c7)
v.eO()
return v},
$S:317}
C.ddi.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new B.x(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1875}
C.fet.prototype={
$0(){return D.dDU},
$S:z+59}
C.feu.prototype={
$0(){return D.e1h},
$S:z+60}
C.fev.prototype={
$0(){return D.dDW},
$S:z+61}
C.few.prototype={
$0(){return D.dyl},
$S:z+62}
C.fex.prototype={
$0(){return D.dDT},
$S:z+63}
C.fey.prototype={
$0(){return D.e_o},
$S:z+64}
C.fez.prototype={
$0(){return D.e_m},
$S:z+65}
C.eDn.prototype={
$0(){return B.a4(this.a,!1).la()},
$S:0}
C.eDo.prototype={
$0(){var w=this.a
return w.m(new C.eDm(w))},
$S:0}
C.eDm.prototype={
$0(){var w=this.a
return w.d=A.o.F(w.gaS0()+1,16)},
$S:0}
C.eDp.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=B.a([],l)
for(w=$.hrz(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new B.aR(18,18)
q=s.d
p=new B.az(q.j(0.5),1,A.q,-1)
o=B.a([q.j(0.28),D.bjr],u)
k.push(B.aB(n,B.p(n,B.w(B.a([B.X(s.c,q,n,n,n,30),A.N,new B.y(s.a,n,D.fah,n,A.L,n,n,n,n,2,n,n),A.cQ,new B.y(s.b,n,D.ffk,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b7,A.j,0,A.p),A.f,n,n,new B.o(n,n,new B.bO(p,p,p,p),new B.bo(r,r,r,r),n,new B.a8(A.ay,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.cp,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eDl(d,s),n,n,n,n,n,n,!1,A.a7))}return B.bZ(A.fQ,k,A.br,10,10)},
$S:159}
C.eDl.prototype={
$0(){return B.a4(this.a,!1).cm(B.e9(new C.eDk(this.b),!1,null,x.H))},
$S:0}
C.eDk.prototype={
$1(d){return this.a.e.$0()},
$S:39}
C.evR.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
C.ew1.prototype={
$0(){return C.wS(this.b,this.a.d,"solar-system")},
$S:0}
C.ew2.prototype={
$2(d,e){var w,v=null,u=this.a,t=new B.as(e.b,e.d)
u.ch=t
t=B.a([B.aB(A.ci,B.b3(v,v,v,new C.br0(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.evZ(u),new C.ew_(u),v,v,v,v,v,v,v,new C.ew0(u),v,v,v,!1,A.a7)],x.p)
w=this.b
if(w!=null)t.push(B.ao(8,u.c8i(w),v,v,10,10,v,v))
return new B.eH(new B.an(A.V,v,A.b0,A.r,t,v),u.d)},
$S:354}
C.evZ.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:270}
C.ew_.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:204}
C.ew0.prototype={
$1(d){var w=this.a,v=w.c8l(d.b)
if(v!=null)w.aZw(v)},
$S:65}
C.ew3.prototype={
$0(){var w=this.a
return w.m(new C.evY(w))},
$S:0}
C.evY.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
C.ew4.prototype={
$0(){return this.a.aZw(this.b)},
$S:0}
C.ew5.prototype={
$1(d){var w=this.a
return w.m(new C.evX(w,d))},
$S:7}
C.evX.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
C.ew6.prototype={
$1(d){var w=this.a
return w.m(new C.evW(w,d))},
$S:7}
C.evW.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ew7.prototype={
$0(){var w=this.a
return w.m(new C.evV(w))},
$S:0}
C.evV.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
C.ew8.prototype={
$0(){var w=this.a
return w.m(new C.evU(w))},
$S:0}
C.evU.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.ew9.prototype={
$0(){var w=this.a
return w.m(new C.evT(w))},
$S:0}
C.evT.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.ewa.prototype={
$0(){var w=this.a
return w.m(new C.evS(w))},
$S:0}
C.evS.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.evQ.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.ab(d/365.25,w)+" Earth years"}else w=A.k.ab(d,0)+" Earth days"
return w},
$S:276}
C.evP.prototype={
$2(d,e){var w=null
return B.E(B.w(B.a([B.d(d,w,w,w,w,w,w,D.aPG,w,w,w),A.uM,B.d(e,w,2,A.a2,w,w,w,A.U_,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:140}
C.evO.prototype={
$0(){var w=this.a
return w.m(new C.evN(w))},
$S:0}
C.evN.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
C.eXL.prototype={
$0(){var w=null,v=B.h2(w,w,w,w,B.d0(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,I.Qf,w,w),this.a),A.a4,A.cb,w,A.dR,A.c7)
v.eO()
return v},
$S:317}
C.eXM.prototype={
$1(d){return d.c>0},
$S:z+10}
C.eXN.prototype={
$1(d){return d.c>0},
$S:z+10}
C.dVV.prototype={
$0(){},
$S:0}
C.dWn.prototype={
$1(d){return d!=null},
$S:392}
C.dW9.prototype={
$0(){var w=this.a
return w.m(new C.dW0(w,this.b))},
$S:0}
C.dW0.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dWa.prototype={
$0(){var w=this.a
return w.m(new C.dW_(w))},
$S:0}
C.dW_.prototype={
$0(){return this.a.f=!1},
$S:0}
C.dWb.prototype={
$0(){var w=this.a
return w.m(new C.dW8(w))},
$S:0}
C.dW8.prototype={
$0(){return this.a.f=!0},
$S:0}
C.dWf.prototype={
$0(){var w=this.a
return w.m(new C.dW7(w))},
$S:0}
C.dW7.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dWg.prototype={
$1(d){var w=this.a
return w.m(new C.dW6(w,d))},
$S:7}
C.dW6.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.dWh.prototype={
$0(){var w=this.a
return w.m(w.gcvu())},
$S:0}
C.dWi.prototype={
$1(d){var w=this.a
return w.m(new C.dW5(w,d))},
$S:7}
C.dW5.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.dWj.prototype={
$1(d){var w=this.a
return w.m(new C.dW4(w,d))},
$S:7}
C.dW4.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.dWk.prototype={
$1(d){var w=this.a
return w.m(new C.dW3(w,d))},
$S:7}
C.dW3.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dWl.prototype={
$1(d){var w=this.a
return w.m(new C.dW2(w,d))},
$S:7}
C.dW2.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.dWm.prototype={
$0(){var w=this.a
return w.m(new C.dW1(w))},
$S:0}
C.dW1.prototype={
$0(){return this.a.ay=4},
$S:0}
C.dWc.prototype={
$0(){var w=this.a
return w.m(new C.dVZ(w))},
$S:0}
C.dVZ.prototype={
$0(){return this.a.ay=7.67},
$S:0}
C.dWd.prototype={
$0(){var w=this.a
return w.m(new C.dVY(w))},
$S:0}
C.dVY.prototype={
$0(){return this.a.ay=9},
$S:0}
C.dWe.prototype={
$0(){var w=this.a
return w.m(new C.dVX(w))},
$S:0}
C.dVX.prototype={
$0(){return this.a.ay=11.3},
$S:0}
C.dVU.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=B.a([B.bT(0,B.c0(g,new B.o(D.bhY,g,g,B.n(20),g,g,A.n),A.be),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.yU[q]
n=B.b0(o.d)
o=B.w(B.a([new B.y(o.a,g,new B.G(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new B.y(B.u(D.yU[q].b)+" m/s\xb2",g,D.feH,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=B.p(g,g,A.f,A.dB,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?B.X(T.Ns,B.b0(D.yU[q].d),g,g,g,22):B.p(g,g,A.f,g,g,new B.o(B.b0(D.yU[q].d),g,g,g,B.a([new B.ac(0,A.G,B.b0(D.yU[q].d).j(0.6),A.J,10)],u),g,A.a5),g,22,g,g,g,g,g,22)
j=B.p(g,g,A.f,B.b0(D.yU[q].d).j(0.6),g,g,g,3,g,A.fq,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.ab(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,B.a([new B.cL(p,8,g,g,f,g,o,g),new B.cL(n-0.5,54,g,e,g,g,m,g),new B.cL(n-11,54+s*(l/20),g,g,g,g,k,g),new B.cL(p,g,g,8,f,g,B.w(B.a([j,A.av,new B.y(i,g,A.rQ,g,g,g,g,g,g,g,g,g),new B.y(h,g,D.f6Z,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d8(v,new C.dVT()))a1.push(D.b6e)
return new B.an(A.V,g,A.a9,A.r,a1,g)},
$S:70}
C.dVT.prototype={
$1(d){return d==null},
$S:392}
C.dVW.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=B.n(8)
p=B.p(v,v,A.f,v,v,new B.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=B.de(v,v,v,v,A.bb,new B.o(v,v,v,B.n(8),v,new B.a8(A.a3,A.a8,A.x,B.a([B.b0(t).j(0.9),B.b0(t).j(0.4)],x.O),v,v),A.n),A.ij,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.ab(r,1):C.GM(r)
u=u.ax*9.81/s
u=u<10?A.k.ab(u,2):A.k.ab(u,0)
return new B.an(A.V,v,A.a9,A.r,B.a([p,t,B.ao(v,B.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.fd1,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:70}
C.dVS.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=B.b3(v,v,v,new C.b9Y(new B.x(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.az)
o=A.w.j(0.55)
p=B.n(14)
q=B.I(A.bD,A.q,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.bn
else u=A.a.t(u,"escapes")?A.aR:A.c
u=B.d(t,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.ab(Math.sqrt(58.86870477034412),1)
s=A.k.ab(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+C.GM(A.k.D(r.cx.gcG()-6371,0,9e9))+" km":""
w=x.p
return new B.an(A.V,v,A.b0,A.r,B.a([n,B.ao(v,B.p(v,B.w(B.a([u,A.bz,B.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,H.aRm,v,v,v)],w),A.F,v,A.e,A.Q,0,A.p),A.f,v,v,new B.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bT,v,v,v),v,v,12,12,8,v)],w),v)},
$S:70}
C.eoL.prototype={
$0(){return C.wS(this.b,this.a.d,"size-compare")},
$S:0}
C.eoM.prototype={
$0(){var w=this.a
return w.m(new C.eoK(w,this.b))},
$S:0}
C.eoK.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eoN.prototype={
$0(){var w=this.a
return w.m(new C.eoJ(w,this.b))},
$S:0}
C.eoJ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eVV.prototype={
$3(d,e,f){var w,v,u=this.a
$.W()
w=B.N()
w.r=f.j(0.2).gp(0)
w.z=new B.hC(A.G,Math.max(2,e*0.18))
u.af(d,e*1.12,w)
w=B.N()
v=B.aq(f,A.w,0.6)
v.toString
w.sar(new B.c_(U.wX,0.5,A.x,null,0,B.a([A.c,f,v],x.O),H.a2v,null).aA(0,B.bU(d,e)))
u.af(d,e,w)},
$S:1876}
C.dEB.prototype={
$1(d){return d.e<=0},
$S:z+67}
C.dEp.prototype={
$1(d){return d.b},
$S:z+45}
C.dEq.prototype={
$0(){return C.wS(this.b,this.a.d,"black-hole")},
$S:0}
C.dEr.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new B.as(e.b,e.d)
p.Q=o
o=B.aB(A.ci,B.b3(q,q,q,new C.b9m(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dEn(p),q,q,q,q,q,q,q,q,q,new C.dEo(p),q,q,q,q,!1,A.a7)
w=A.w.j(0.55)
v=B.n(14)
u=B.I(A.bD,A.q,1)
t=p.r
if(t<1000)t=A.k.ab(t,t<10?1:0)+" Suns"
else t=C.fs8(t)+" Suns"
t=p.aex("MASS",t)
s=2.953*p.r
r=x.p
r=B.a([o,B.ao(q,B.p(q,B.B(B.a([t,p.aex("EDGE WIDTH",(s<100?A.k.ab(s,1):C.GM(s))+" km"),p.aex("TIME",A.k.ab(this.b*100,0)+"%"),p.aex("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bT,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.ehR)
return new B.eH(new B.an(A.V,q,A.b0,A.r,r,q),p.d)},
$S:354}
C.dEo.prototype={
$1(d){return this.a.aZx(d.b)},
$S:23}
C.dEn.prototype={
$1(d){if(A.cW.an()<0.12)this.a.aZx(d.b)},
$S:21}
C.dEt.prototype={
$1(d){var w=this.a
return w.m(new C.dEm(w,d))},
$S:7}
C.dEm.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
C.dEu.prototype={
$0(){var w=this.a
return w.m(new C.dEl(w))},
$S:0}
C.dEl.prototype={
$0(){return this.a.r=10},
$S:0}
C.dEv.prototype={
$0(){var w=this.a
return w.m(new C.dEk(w))},
$S:0}
C.dEk.prototype={
$0(){return this.a.r=21},
$S:0}
C.dEw.prototype={
$0(){var w=this.a
return w.m(new C.dEj(w))},
$S:0}
C.dEj.prototype={
$0(){return this.a.r=43e5},
$S:0}
C.dEx.prototype={
$0(){var w=this.a
return w.m(new C.dEi(w))},
$S:0}
C.dEi.prototype={
$0(){return this.a.r=65e8},
$S:0}
C.dEy.prototype={
$0(){var w=this.a
return w.m(new C.dEh(w))},
$S:0}
C.dEh.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dEz.prototype={
$0(){var w=this.a
return w.m(new C.dEg(w))},
$S:0}
C.dEg.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.dEA.prototype={
$0(){var w=this.a
return w.m(new C.dEf(w))},
$S:0}
C.dEf.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.dEs.prototype={
$0(){var w=this.a
return w.m(new C.dEe(w))},
$S:0}
C.dEe.prototype={
$0(){var w=this.a
A.d.a8(w.z)
w.as=0},
$S:0}
C.dUE.prototype={
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
e[r]=new B.x(p,i)
q=d[r]
d[r]=new B.x(q.a+p*s,q.b+i*s)}},
$S:1877}
C.dUu.prototype={
$0(){return C.wS(this.b,this.a.d,"galaxy")},
$S:0}
C.dUv.prototype={
$0(){var w=this.a
return w.m(new C.dUt(w,this.b))},
$S:0}
C.dUt.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.a_1()},
$S:0}
C.dUw.prototype={
$0(){var w=this.a
return w.m(new C.dUs(w))},
$S:0}
C.dUs.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.a_1()}w.cvl()},
$S:0}
C.dUx.prototype={
$1(d){var w=this.a
return w.m(new C.dUr(w,d))},
$S:7}
C.dUr.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.a_1()},
$S:0}
C.dUy.prototype={
$1(d){var w=this.a
return w.m(new C.dUq(w,d))},
$S:7}
C.dUq.prototype={
$0(){var w=this.a
w.r=this.b
w.a_1()},
$S:0}
C.dUz.prototype={
$1(d){var w=this.a
return w.m(new C.dUp(w,d))},
$S:7}
C.dUp.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dUA.prototype={
$1(d){var w=this.a
return w.m(new C.dUo(w,d))},
$S:7}
C.dUo.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.dUB.prototype={
$0(){var w=this.a
return w.m(new C.dUn(w))},
$S:0}
C.dUn.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.dUC.prototype={
$0(){var w=this.a
return w.m(new C.dUm(w))},
$S:0}
C.dUm.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
C.dUD.prototype={
$0(){var w=this.a
return w.m(new C.dUl(w))},
$S:0}
C.dUl.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.dar.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new B.x((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1878}
C.eo_.prototype={
$0(){return C.wS(this.b,this.a.d,"seasons-moon")},
$S:0}
C.eo0.prototype={
$0(){var w=this.a
return w.m(new C.enZ(w))},
$S:0}
C.enZ.prototype={
$0(){return this.a.f="seasons"},
$S:0}
C.eo1.prototype={
$0(){var w=this.a
return w.m(new C.enY(w))},
$S:0}
C.enY.prototype={
$0(){return this.a.f="moon"},
$S:0}
C.eo2.prototype={
$0(){var w=this.a
return w.m(new C.enX(w))},
$S:0}
C.enX.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.eo3.prototype={
$0(){var w=this.a
return w.m(new C.enW(w))},
$S:0}
C.enW.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
C.eo4.prototype={
$1(d){var w=this.a
return w.m(new C.enV(w,d))},
$S:7}
C.enV.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eo5.prototype={
$1(d){var w=this.a
return w.m(new C.enU(w,d))},
$S:7}
C.enU.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eo6.prototype={
$1(d){var w=this.a
return w.m(new C.enT(w,d))},
$S:7}
C.enT.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eo7.prototype={
$1(d){var w=this.a
return w.m(new C.enS(w,d))},
$S:7}
C.enS.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=C.aLt.prototype
w.bvj=w.q
w=C.aKD.prototype
w.bur=w.q
w=C.aKE.prototype
w.bus=w.q
w=C.aKI.prototype
w.buw=w.q
w=C.aMj.prototype
w.bwg=w.q
w=C.aLr.prototype
w.bvh=w.q
w=C.aLA.prototype
w.bvq=w.q
w=C.aLF.prototype
w.bvv=w.q
w=C.axc.prototype
w.brA=w.q
w=C.axd.prototype
w.brB=w.q
w=C.aJ6.prototype
w.bsR=w.q
w=C.aKR.prototype
w.buF=w.q
w=C.aKF.prototype
w.but=w.q
w=C.aKW.prototype
w.buL=w.q
w=C.aLn.prototype
w.bvd=w.q
w=C.aLN.prototype
w.bvD=w.q
w=C.aL0.prototype
w.buR=w.q
w=C.aL1.prototype
w.buS=w.q
w=C.aL2.prototype
w.buT=w.q
w=C.aLw.prototype
w.bvm=w.q
w=C.aLz.prototype
w.bvp=w.q
w=C.aKC.prototype
w.buq=w.q
w=C.aKZ.prototype
w.buO=w.q
w=C.aLv.prototype
w.bvl=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(C.aDL.prototype,"gaw5","c3B",1)
var r
v(r=C.aCg.prototype,"gcbJ","cbK",41)
w(r,"gc49","aXY",1)
w(C.aCi.prototype,"gc5R","c5S",1)
u(C.aCz.prototype,"gc5X","c5Y",40)
w(r=C.aGL.prototype,"gcv1","cv2",1)
w(r,"gcit","afX",1)
w(r,"gcg8","cg9",1)
w(r,"gc5W","adC",4)
w(r=C.aDK.prototype,"gbG4","a99",4)
w(r,"gcfq","b0c",1)
w(r,"gcja","ag4",4)
t(r,"gc6_","adD",4)
w(C.aE_.prototype,"gbXs","bXt",1)
t(r=C.a46.prototype,"gBm","a8",1)
v(r,"gcS4","amU",0)
v(r,"gcOA","LG",0)
w(r,"gcUg","bhu",1)
s(C.aik.prototype,"gc6k",0,5,null,["$5"],["qo"],42,0,0)
w(r=C.aCL.prototype,"gc6l","c6m",1)
w(r,"gclY","agr",4)
w(r,"gcbZ","aeK",4)
w(r,"gct6","ahx",4)
w(r=C.aEc.prototype,"gc7x","c7y",1)
t(r,"gc7v","aZ9",1)
w(C.aDy.prototype,"gbIV","arY",1)
t(C.aDR.prototype,"gc7z","c7A",1)
v(r=C.aCW.prototype,"gc8e","c8f",56)
w(r,"gbO_","bO0",1)
w(r=C.aCX.prototype,"gcvu","cvv",1)
w(r,"gc8j","c8k",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.ajx,C.G1,C.uS,C.aRo,C.a2L,C.b9p,C.c0I,C.y8,C.Cj,C.no,C.ba6,C.Az,C.brJ,C.q6,C.qN,C.Cn,C.YZ,C.aen,C.a0c,C.Cx,C.abk,C.abA,C.adt,C.FN,C.bkA,C.PQ,C.eb,C.tx,C.aa_,C.ab6,C.a46,C.mB,C.ba7,C.fN,C.m8,C.bt2,C.aHB,C.qG,C.aaM,C.aaN,C.v5,C.P4,C.y6,C.P3,C.bsY,C.Py,C.aes])
u(B.i_,[C.fut,C.fk3,C.fre,C.frf,C.fuq,C.fur,C.e6X,C.e7f,C.elu,C.el1,C.el2,C.el3,C.el4,C.el5,C.el6,C.el7,C.el8,C.el_,C.el0,C.ekZ,C.elp,C.elq,C.elr,C.dEG,C.dEI,C.dEL,C.dEW,C.c0J,C.c0K,C.fdU,C.fdV,C.fdW,C.fe2,C.fe3,C.fe4,C.dGI,C.dGp,C.dGJ,C.dGk,C.dGf,C.dGh,C.dGn,C.dGA,C.dGy,C.dGz,C.dGx,C.dGu,C.dGw,C.eVp,C.eV6,C.eVd,C.eVm,C.eV0,C.dhf,C.dhg,C.dhc,C.dhd,C.dhe,C.dhh,C.dhi,C.dhj,C.dhk,C.dhl,C.dhm,C.dhn,C.dho,C.dhp,C.ekq,C.ekr,C.eks,C.ekt,C.eko,C.ekp,C.ekV,C.ekx,C.ekz,C.ekj,C.ekR,C.ekP,C.ekQ,C.ekO,C.ekN,C.ekl,C.ewB,C.ewz,C.ewn,C.ewr,C.ewm,C.ews,C.ewt,C.ewx,C.eCM,C.eCS,C.bLz,C.bLK,C.bLF,C.bLL,C.bLN,C.bLA,C.bLy,C.bLS,C.bLG,C.bLJ,C.bLI,C.bLH,C.bGm,C.fG6,C.fG9,C.fG7,C.bG3,C.bFZ,C.bFY,C.bGl,C.bGd,C.bGe,C.bGc,C.bGf,C.bFO,C.bFQ,C.bFM,C.bFN,C.bFE,C.bFF,C.fe5,C.fe6,C.fe7,C.fdT,C.fe8,C.fdS,C.fe9,C.fdX,C.fdR,C.fdY,C.fdQ,C.fdZ,C.fdP,C.fe_,C.fdN,C.fdO,C.fe0,C.fdL,C.fdM,C.fe1,C.fdK,C.dRf,C.dRg,C.dR5,C.dR1,C.dRe,C.dRj,C.cBV,C.fKP,C.fKQ,C.cfG,C.eHb,C.dQR,C.dQS,C.dQT,C.dQV,C.eeM,C.eCu,C.eCD,C.eCz,C.eCB,C.edK,C.edL,C.edM,C.fOE,C.csC,C.dVR,C.dVg,C.dVf,C.dVr,C.dVs,C.dVq,C.dVt,C.dVL,C.dVM,C.dVN,C.eDk,C.evZ,C.ew_,C.ew0,C.ew5,C.ew6,C.evQ,C.eXM,C.eXN,C.dWn,C.dWg,C.dWi,C.dWj,C.dWk,C.dWl,C.dVT,C.eVV,C.dEB,C.dEp,C.dEo,C.dEn,C.dEt,C.dUE,C.dUx,C.dUy,C.dUz,C.dUA,C.dar,C.eo4,C.eo5,C.eo6,C.eo7])
u(B.kj,[C.fus,C.e71,C.e7_,C.ela,C.eln,C.dGg,C.dGD,C.dMA,C.eVs,C.eVt,C.eV5,C.eVi,C.eVj,C.eVe,C.eVk,C.eV_,C.ekm,C.ekn,C.ekU,C.ekM,C.ekB,C.eCL,C.bLM,C.bLO,C.bLQ,C.bLB,C.bLD,C.bGn,C.cl4,C.fG8,C.bFX,C.bGj,C.bGi,C.dRd,C.cBW,C.dNu,C.dNs,C.dNm,C.cfJ,C.dF9,C.dF4,C.eeO,C.dVD,C.dVd,C.ddi,C.eDp,C.ew2,C.evP,C.dVU,C.dVW,C.dVS,C.dEr])
u(B.ag,[C.Vh,C.VE,C.Uc,C.Ug,C.Nh,C.aGK,C.VD,C.VS,C.W2,C.aii,C.US,C.awU,C.UB,C.W8,C.UZ,C.Ud,C.UR,C.Vy,C.VI,C.W1,C.Vx,C.V4,C.W4,C.VR,C.V5,C.VJ,C.Ub,C.V2,C.VF])
u(B.ah,[C.bj8,C.aLt,C.aKD,C.aKI,C.aCz,C.aMj,C.aLr,C.aLA,C.aLF,C.axc,C.bw8,C.aJ6,C.aKR,C.aLN,C.aKW,C.aKF,C.biF,C.aDy,C.aDR,C.bjP,C.aLn,C.aL0,C.bjT,C.aLz,C.aL2,C.aLw,C.aKC,C.aKZ,C.aLv])
u(B.ja,[C.e6V,C.e6W,C.e77,C.e78,C.e73,C.e72,C.e74,C.e70,C.e75,C.e6Z,C.e76,C.e6Y,C.e7b,C.e7a,C.e7c,C.e79,C.e7d,C.e7e,C.e7g,C.elt,C.elv,C.elw,C.elc,C.elb,C.el9,C.eli,C.elj,C.elf,C.elk,C.ele,C.ell,C.elm,C.eld,C.elo,C.elh,C.els,C.elg,C.dF2,C.dF1,C.dEF,C.dF3,C.dEH,C.dEJ,C.dEK,C.dEM,C.dEC,C.dED,C.dEE,C.dET,C.dEU,C.dEV,C.dES,C.dEX,C.dER,C.dEY,C.dEQ,C.dEZ,C.dEP,C.dF_,C.dEO,C.dF0,C.dEN,C.dGm,C.dGl,C.dGq,C.dGi,C.dGj,C.dGr,C.dGs,C.dGt,C.dGo,C.dGe,C.dGC,C.dGB,C.dGE,C.dGF,C.dGG,C.dGv,C.dGH,C.cMh,C.dMy,C.dMx,C.dMz,C.fek,C.fel,C.fem,C.fen,C.feo,C.fep,C.feq,C.fer,C.fes,C.eVr,C.eVq,C.eV8,C.eV7,C.eV3,C.eV2,C.eV4,C.eV1,C.eVg,C.eVf,C.eVh,C.eV9,C.eVl,C.eVc,C.eVn,C.eVb,C.eVo,C.eVa,C.ekv,C.ekk,C.eku,C.ekg,C.ekw,C.eky,C.ekh,C.eki,C.ekT,C.ekS,C.ekJ,C.ekK,C.ekL,C.ekF,C.ekG,C.ekE,C.ekH,C.ekD,C.ekI,C.ekC,C.ekA,C.dhb,C.ewA,C.ewc,C.ewb,C.ewl,C.ewu,C.ewk,C.ewv,C.ewj,C.eww,C.ewi,C.ewh,C.ewy,C.ewg,C.ewo,C.ewf,C.ewp,C.ewe,C.ewq,C.ewd,C.eCK,C.eCJ,C.eCN,C.eCI,C.eCO,C.eCH,C.eCP,C.eCG,C.eCQ,C.eCF,C.eCR,C.eCE,C.bLP,C.bLR,C.bLC,C.bLE,C.bG0,C.bG1,C.bG_,C.bG2,C.bG4,C.bFR,C.bFS,C.bFT,C.bFU,C.bFV,C.bFW,C.bGk,C.bFu,C.bGa,C.bGb,C.bG8,C.bG9,C.bG6,C.bG7,C.bGg,C.bG5,C.bGh,C.bFv,C.bFP,C.bFB,C.bFC,C.bFA,C.bFD,C.bFz,C.bFG,C.bFH,C.bFI,C.bFJ,C.bFy,C.bFK,C.bFx,C.bFL,C.bFw,C.dR6,C.dRh,C.dRi,C.dR4,C.dR3,C.dR2,C.dRb,C.dR9,C.dRa,C.dRc,C.dR7,C.dR8,C.dRk,C.dRl,C.dRm,C.dRn,C.dRo,C.dNv,C.dNt,C.dNr,C.dNq,C.dNp,C.dNo,C.dNn,C.dNj,C.dNi,C.dNl,C.dNk,C.feA,C.feB,C.feC,C.feD,C.feE,C.feF,C.feG,C.feH,C.cfI,C.cfH,C.eHc,C.eH8,C.eH7,C.eHa,C.eH9,C.dTk,C.dTl,C.dTf,C.dTh,C.dTi,C.dTg,C.dTj,C.dFa,C.dF7,C.dF6,C.dF8,C.dF5,C.dQQ,C.dQP,C.dQO,C.dQN,C.dQU,C.dQM,C.dQL,C.dQW,C.dQK,C.dQX,C.dQJ,C.dQY,C.dQZ,C.dQI,C.eeI,C.eeJ,C.eeH,C.eeK,C.eeG,C.eeN,C.eeP,C.eeL,C.eeQ,C.eoD,C.eoE,C.eoB,C.eoC,C.eoA,C.eoF,C.eoG,C.eoH,C.eoI,C.eCy,C.eCA,C.eCx,C.eCw,C.eCC,C.eCv,C.edN,C.edO,C.edG,C.edF,C.edH,C.edE,C.edI,C.edD,C.edJ,C.edC,C.edB,C.edA,C.edz,C.csD,C.csE,C.fOD,C.csz,C.csy,C.csF,C.csA,C.csB,C.cfE,C.dVQ,C.dVj,C.dVh,C.dVi,C.dVe,C.dVC,C.dVk,C.dVl,C.dVE,C.dVp,C.dVI,C.dVB,C.dVJ,C.dVA,C.dVK,C.dVz,C.dVy,C.dVx,C.dVw,C.dVO,C.dVv,C.dVP,C.dVu,C.dVF,C.dVo,C.dVG,C.dVn,C.dVH,C.dVm,C.dVc,C.dVb,C.ddh,C.fet,C.feu,C.fev,C.few,C.fex,C.fey,C.fez,C.eDn,C.eDo,C.eDm,C.eDl,C.evR,C.ew1,C.ew3,C.evY,C.ew4,C.evX,C.evW,C.ew7,C.evV,C.ew8,C.evU,C.ew9,C.evT,C.ewa,C.evS,C.evO,C.evN,C.eXL,C.dVV,C.dW9,C.dW0,C.dWa,C.dW_,C.dWb,C.dW8,C.dWf,C.dW7,C.dW6,C.dWh,C.dW5,C.dW4,C.dW3,C.dW2,C.dWm,C.dW1,C.dWc,C.dVZ,C.dWd,C.dVY,C.dWe,C.dVX,C.eoL,C.eoM,C.eoK,C.eoN,C.eoJ,C.dEq,C.dEm,C.dEu,C.dEl,C.dEv,C.dEk,C.dEw,C.dEj,C.dEx,C.dEi,C.dEy,C.dEh,C.dEz,C.dEg,C.dEA,C.dEf,C.dEs,C.dEe,C.dUu,C.dUv,C.dUt,C.dUw,C.dUs,C.dUr,C.dUq,C.dUp,C.dUo,C.dUB,C.dUn,C.dUC,C.dUm,C.dUD,C.dUl,C.eo_,C.eo0,C.enZ,C.eo1,C.enY,C.eo2,C.enX,C.eo3,C.enW,C.enV,C.enU,C.enT,C.enS])
t(C.bwi,C.aLt)
t(C.aDL,C.bwi)
u(B.mN,[C.bgf,C.bap,C.br7,C.b97,C.bpM,C.bpd,C.b9M,C.bpf,C.btc,C.bgd,C.br2,C.aik,C.b8l,C.bud,C.aeg,C.bup,C.bpe,C.bkB,C.beJ,C.br0,C.b9Y,C.bqz,C.b9m,C.beA,C.bpP])
t(C.aKE,C.aKD)
t(C.aCg,C.aKE)
t(C.bw6,C.aKI)
t(C.aCi,C.bw6)
u(B.mc,[C.Kk,C.a0_,C.Jh])
u(B.at,[C.bq9,C.aex,C.adp,C.PZ,C.bqD,C.a7Z,C.bcw,C.b67,C.f3,C.hm,C.b68,C.j4,C.Fe])
t(C.aGL,C.aMj)
t(C.bgc,B.oQ)
t(C.aDK,C.aLr)
t(C.bjH,C.aLA)
t(C.aE_,C.aLF)
t(C.axd,C.axc)
t(C.aij,C.axd)
t(C.aCL,C.bw8)
t(C.b8m,C.aJ6)
t(C.biD,C.aKR)
t(C.bwp,C.aLN)
t(C.aEc,C.bwp)
t(C.bw9,C.aKW)
t(C.biL,C.bw9)
t(C.bw5,C.aKF)
t(C.bip,C.bw5)
t(C.bwh,C.aLn)
t(C.bjk,C.bwh)
t(C.aL1,C.aL0)
t(C.aCW,C.aL1)
t(C.bwm,C.aLz)
t(C.bjG,C.bwm)
t(C.bwb,C.aL2)
t(C.aCX,C.bwb)
t(C.bwk,C.aLw)
t(C.bjD,C.bwk)
t(C.bw4,C.aKC)
t(C.bio,C.bw4)
t(C.bwa,C.aKZ)
t(C.biO,C.bwa)
t(C.bwj,C.aLv)
t(C.bjC,C.bwj)
w(C.aLt,B.cn)
w(C.bwi,C.qG)
w(C.aKD,B.cn)
w(C.aKE,C.qG)
w(C.aKI,B.cn)
w(C.bw6,C.qG)
w(C.aMj,B.eS)
w(C.aLr,B.cn)
w(C.aLA,B.cn)
w(C.aLF,B.cn)
w(C.axc,B.cn)
w(C.axd,C.qG)
w(C.aJ6,B.cn)
v(C.bw8,B.ew)
w(C.aKR,B.cn)
w(C.aKF,B.cn)
w(C.bw5,C.qG)
w(C.aKW,B.cn)
w(C.bw9,C.qG)
w(C.aLn,B.cn)
w(C.bwh,C.qG)
w(C.aLN,B.cn)
w(C.bwp,C.qG)
w(C.aL0,B.cn)
w(C.aL1,C.qG)
w(C.aL2,B.cn)
w(C.bwb,C.qG)
w(C.aLw,B.cn)
w(C.bwk,C.qG)
w(C.aLz,B.cn)
w(C.bwm,C.qG)
w(C.aKC,B.cn)
w(C.bw4,C.qG)
w(C.aKZ,B.cn)
w(C.bwa,C.qG)
w(C.aLv,B.cn)
w(C.bwj,C.qG)})()
B.k_(b.typeUniverse,JSON.parse('{"Vh":{"ag":[],"t":[]},"bj8":{"ah":["Vh"]},"VE":{"ag":[],"t":[]},"aDL":{"ah":["VE"]},"bgf":{"aC":[]},"Uc":{"ag":[],"t":[]},"aCg":{"ah":["Uc"]},"Ug":{"ag":[],"t":[]},"aCi":{"ah":["Ug"]},"bap":{"aC":[]},"aex":{"at":[],"t":[]},"adp":{"at":[],"t":[]},"aGK":{"ag":[],"t":[]},"Nh":{"ag":[],"t":[]},"aCz":{"ah":["Nh"]},"bq9":{"at":[],"t":[]},"PZ":{"at":[],"t":[]},"br7":{"aC":[]},"bqD":{"at":[],"t":[]},"b97":{"aC":[]},"aGL":{"ah":["aGK"]},"bpM":{"aC":[]},"bpd":{"aC":[]},"b9M":{"aC":[]},"bpf":{"aC":[]},"btc":{"aC":[]},"VD":{"ag":[],"t":[]},"bgc":{"aC":[]},"aDK":{"ah":["VD"]},"bgd":{"aC":[]},"VS":{"ag":[],"t":[]},"W2":{"ag":[],"t":[]},"bjH":{"ah":["VS"]},"br2":{"aC":[]},"aE_":{"ah":["W2"]},"aik":{"aC":[]},"aii":{"ag":[],"t":[]},"aij":{"ah":["aii"]},"US":{"ag":[],"t":[]},"awU":{"ag":[],"t":[]},"aCL":{"ah":["US"],"ew":[]},"b8m":{"ah":["awU"]},"b8l":{"aC":[]},"UB":{"ag":[],"t":[]},"biD":{"ah":["UB"]},"bud":{"aC":[]},"aeg":{"aC":[]},"a7Z":{"at":[],"t":[]},"W8":{"ag":[],"t":[]},"UZ":{"ag":[],"t":[]},"Ud":{"ag":[],"t":[]},"UR":{"ag":[],"t":[]},"Vy":{"ag":[],"t":[]},"VI":{"ag":[],"t":[]},"W1":{"ag":[],"t":[]},"Vx":{"ag":[],"t":[]},"aEc":{"ah":["W8"]},"bup":{"aC":[]},"biL":{"ah":["UZ"]},"bpe":{"aC":[]},"bip":{"ah":["Ud"]},"biF":{"ah":["UR"]},"bkB":{"aC":[]},"aDy":{"ah":["Vy"]},"aDR":{"ah":["VI"]},"bjP":{"ah":["W1"]},"bjk":{"ah":["Vx"]},"bcw":{"at":[],"t":[]},"b67":{"at":[],"t":[]},"f3":{"at":[],"t":[]},"hm":{"at":[],"t":[]},"b68":{"at":[],"t":[]},"j4":{"at":[],"t":[]},"Fe":{"at":[],"t":[]},"V4":{"ag":[],"t":[]},"aCW":{"ah":["V4"]},"beJ":{"aC":[]},"W4":{"ag":[],"t":[]},"bjT":{"ah":["W4"]},"VR":{"ag":[],"t":[]},"V5":{"ag":[],"t":[]},"VJ":{"ag":[],"t":[]},"bjG":{"ah":["VR"]},"br0":{"aC":[]},"aCX":{"ah":["V5"]},"b9Y":{"aC":[]},"bjD":{"ah":["VJ"]},"bqz":{"aC":[]},"Ub":{"ag":[],"t":[]},"V2":{"ag":[],"t":[]},"VF":{"ag":[],"t":[]},"bio":{"ah":["Ub"]},"b9m":{"aC":[]},"biO":{"ah":["V2"]},"beA":{"aC":[]},"bjC":{"ah":["VF"]},"bpP":{"aC":[]}}'))
B.Kl(b.typeUniverse,JSON.parse('{"qG":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.ax
return{x:w("lZ<v?>"),G:w("v"),J:w("bt<m,K>"),R:w("dC<m>"),Z:w("a1"),M:w("O<dd>"),f5:w("O<a2H>"),h:w("O<a2L>"),V:w("O<ac>"),O:w("O<v>"),ey:w("O<S>"),dh:w("O<HB>"),aJ:w("O<aA<aD>>"),w:w("O<a1>"),Q:w("O<ai<v>>"),B:w("O<ai<HB>>"),gO:w("O<ai<ai<K>>>"),bj:w("O<ai<m>>"),b:w("O<ai<K>>"),fA:w("O<ai<H?>>"),C:w("O<a5<m,aD>>"),g:w("O<x>"),bz:w("O<tx>"),ds:w("O<a8l>"),v:w("O<hv>"),L:w("O<+(m,m)>"),fT:w("O<+(K,t)>"),I:w("O<+(H,m)>"),u:w("O<+(H,H)>"),c:w("O<+(m,m,a1)>"),e:w("O<+(m,K,K,H)>"),o:w("O<+(m,H,m,H)>"),d:w("O<+(m,m,K,K,a5<m,K>)>"),_:w("O<uS>"),q:w("O<cS>"),fQ:w("O<aa_>"),s:w("O<m>"),cF:w("O<ar>"),X:w("O<wg>"),m:w("O<aaM>"),p:w("O<t>"),bL:w("O<ab6>"),D:w("O<ll>"),a_:w("O<abk>"),cB:w("O<no>"),ba:w("O<abA>"),d9:w("O<Py>"),eW:w("O<Cn>"),fY:w("O<YZ>"),ed:w("O<PQ>"),g4:w("O<bkA>"),ac:w("O<adt>"),cd:w("O<Cx>"),fr:w("O<aen>"),e4:w("O<a0c>"),r:w("O<aes>"),au:w("O<aHB>"),f7:w("O<R>"),n:w("O<K>"),t:w("O<H>"),dS:w("O<aC?>"),fs:w("O<tx?>"),bN:w("O<H?>"),gJ:w("cu<aij>"),z:w("cu<ah<ag>>"),bF:w("ai<v>"),gl:w("ai<S>"),ew:w("ai<aD>"),j:w("ai<@>"),P:w("a5<m,@>"),f:w("a5<@,@>"),bd:w("M<eb,m>"),fR:w("M<+(K,t),t>"),l:w("iD"),gA:w("zi"),gD:w("vT"),a:w("cp"),K:w("aD"),W:w("tx"),E:w("eb"),g7:w("C4"),N:w("m"),bO:w("ar"),k:w("l0"),Y:w("bp<K>"),cL:w("aaN"),gj:w("cw<m>"),aC:w("cw<H?>"),dg:w("ea<qN>"),F:w("b9p"),a2:w("Cj"),f3:w("qN"),es:w("FN"),U:w("n_"),y:w("R"),i:w("K"),A:w("@"),S:w("H"),bM:w("ai<@>?"),cK:w("aD?"),az:w("q_?"),T:w("m?"),cD:w("K?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aXi=new B.dd(0,0.1)
D.aYY=new C.aRo(0,0,0)
D.Kq=new C.aRo(0,0.5,0)
D.aZw=new B.az(A.bn,1,A.q,-1)
D.b_Z=new B.aX(0,1/0,0,290)
D.b05=new B.aX(16,1/0,16,1/0)
D.b1j=new B.o(A.bc,null,null,null,null,null,A.a5)
D.f4Q=new B.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGh=new B.y("\u26a1",null,D.f4Q,null,null,null,null,null,null,null,null,null)
D.b5L=new B.co(A.A,null,null,D.fGh,null)
D.aQG=new B.G(!0,A.c_,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw6=new B.y("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aQG,null,A.L,null,null,null,null,null,null,null)
D.ebv=new B.D(A.nX,D.fw6,null)
D.b5U=new B.co(A.A,null,null,D.ebv,null)
D.fzV=new B.y("Press Drop! and watch them fall from 20 metres.",null,A.kI,null,A.L,null,null,null,null,null,null,null)
D.ebz=new B.D(A.nX,D.fzV,null)
D.b6e=new B.co(A.A,null,null,D.ebz,null)
D.ffF=new B.G(!0,A.k0,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEH=new B.y("Draw anywhere",null,D.ffF,null,null,null,null,null,null,null,null,null)
D.b6i=new B.co(A.A,null,null,D.fEH,null)
D.fmi=new B.y("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aQG,null,A.L,null,null,null,null,null,null,null)
D.ech=new B.D(A.FE,D.fmi,null)
D.b6B=new B.co(A.A,null,null,D.ech,null)
D.acq=new B.v(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b9d=new B.v(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b9Z=new B.v(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.Wb=new B.v(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.ba3=new B.v(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.ba8=new B.v(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.bad=new B.v(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bbj=new B.v(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.bbo=new B.v(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.bbK=new B.v(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.bcW=new B.v(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.adM=new B.v(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.bdp=new B.v(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.AF=new B.v(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.bei=new B.v(1,1,0.9686274509803922,0.8,A.t)
D.beX=new B.v(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.aen=new B.v(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.bfh=new B.v(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.bfy=new B.v(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.bfM=new B.v(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.aeI=new B.v(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.X2=new B.v(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bhj=new B.v(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bhm=new B.v(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bhq=new B.v(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.bhz=new B.v(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.afa=new B.v(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.bhY=new B.v(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.Lt=new B.v(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.bj5=new B.v(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.bjd=new B.v(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bjr=new B.v(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.bjv=new B.v(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bjD=new B.v(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.vl=new B.v(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.afW=new B.v(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.bkL=new B.v(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.blv=new B.v(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.bm_=new B.v(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.agm=new B.v(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.br0=new B.ba(11e6)
D.ahj=new B.Q(0,0,9,0)
D.bsC=new B.Q(10,10,10,6)
D.bsL=new B.Q(10,34,10,26)
D.bsT=new B.Q(10,6,10,2)
D.bsV=new B.Q(10,8,0,10)
D.btw=new B.Q(12,8,8,8)
D.btB=new B.Q(14,0,14,22)
D.btD=new B.Q(14,0,14,30)
D.ahQ=new B.Q(14,10,8,12)
D.buB=new B.Q(16,4,16,28)
D.buL=new B.Q(16,8,16,12)
D.bwQ=new B.Q(26,12,26,58)
D.bxE=new B.Q(4,4,6,2)
D.bxG=new B.Q(4,4,8,2)
D.byf=new B.Q(8,14,8,12)
D.bym=new B.Q(8,40,8,30)
D.byq=new B.Q(8,6,16,0)
D.byr=new B.Q(8,6,8,8)
D.byM=new B.Q(0,0,1.5,0)
D.aYK=new B.H_(26,"saturation")
D.bz3=new B.z_(A.cU,D.aYK,null,A.aco)
D.flp=new B.y("REACTION LAB",null,V.aRg,null,null,null,null,A.a2,null,1,null,null)
D.bz9=new B.bB(1,A.bg,D.flp,null)
D.fcx=new B.G(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foA=new B.y("CORE PROTOCOL",null,D.fcx,null,null,null,null,null,null,null,null,null)
D.bzn=new B.bB(1,A.bg,D.foA,null)
D.fpi=new B.y("\ud83d\udce2 NGMY Ads",null,A.qu,null,null,null,null,A.eH,null,1,null,null)
D.bA5=new B.bB(1,A.bg,D.fpi,null)
D.fk8=new B.y("Wire selected",null,A.hq,null,null,null,null,null,null,null,null,null)
D.bAk=new B.bB(1,A.bg,D.fk8,null)
D.al0=new B.a1(62712,"MaterialIcons",!1)
D.bFL=new B.a1(62878,"MaterialIcons",!1)
D.bFO=new B.a1(62908,"MaterialIcons",!1)
D.bFP=new B.a1(62931,"MaterialIcons",!1)
D.bFS=new B.a1(62951,"MaterialIcons",!1)
D.bG8=new B.a1(63070,"MaterialIcons",!1)
D.Nz=new B.a1(63128,"MaterialIcons",!1)
D.Go=new B.a1(63726,"MaterialIcons",!1)
D.bHs=new B.a1(983122,"MaterialIcons",!1)
D.bHG=new B.a1(983247,"MaterialIcons",!1)
D.bHS=new B.a1(983415,"MaterialIcons",!1)
D.amk=new B.a1(983467,"MaterialIcons",!1)
D.bI7=new B.a1(983616,"MaterialIcons",!1)
D.bIA=new B.a1(984561,"MaterialIcons",!1)
D.bJa=new B.ae(A.rb,24,A.aT,null,null,null)
D.bJV=new B.ae(A.NU,null,A.ad,null,null,null)
D.bKs=new B.ae(A.o1,21,A.ad,null,null,null)
D.bHr=new B.a1(983117,"MaterialIcons",!1)
D.bLP=new B.ae(D.bHr,28,A.c,null,null,null)
D.bM4=new B.ae(A.jp,18,null,null,null,null)
D.bNS=new B.ae(A.ef,21,A.cs,null,null,null)
D.bO6=new B.ae(A.o3,null,A.ad,null,null,null)
D.bOg=new B.ae(A.a0V,21,A.ad,null,null,null)
D.bP5=new B.ae(A.eF,17,A.ad,null,null,null)
D.anG=new B.ae(A.eF,19,null,null,null,null)
D.qa=new B.ae(A.vQ,21,A.ad,null,null,null)
D.bQC=new B.ae(A.Np,null,A.ad,null,null,null)
D.bRL=new B.ae(A.jp,21,A.ad,null,null,null)
D.bSC=new B.ae(A.ff,20,A.aA,null,null,null)
D.bTh=new B.ae(A.e0,null,A.aT,null,null,null)
D.bTC=new B.ae(A.o2,null,A.aA,null,null,null)
D.dg_=w([A.d5,A.d0,A.d5],x.O)
D.bWC=new B.a8(A.a3,A.a8,A.x,D.dg_,null,null)
D.cUf=w([A.bO,A.bm],x.O)
D.bWK=new B.a8(A.b1,A.b6,A.x,D.cUf,null,null)
D.bWW=new B.a8(A.b1,A.b6,A.x,A.axO,null,null)
D.aoH=new B.a8(A.b1,A.b6,A.x,L.a2F,null,null)
D.cS1=w([A.oA,A.ic],x.O)
D.bXH=new B.a8(A.b1,A.b6,A.x,D.cS1,null,null)
D.cTY=w([A.e2,A.au],x.O)
D.aoO=new B.a8(A.b1,A.b6,A.x,D.cTY,null,null)
D.da4=w([A.ds,A.iZ,A.bm],x.O)
D.bY_=new B.a8(A.a3,A.a8,A.x,D.da4,null,null)
D.daa=w([A.h6,A.co],x.O)
D.bYk=new B.a8(A.b1,A.b6,A.x,D.daa,null,null)
D.cqF=w([A.bO,A.ds],x.O)
D.bYt=new B.a8(A.a3,A.a8,A.x,D.cqF,null,null)
D.ayv=w([A.e2,K.mX],x.O)
D.bYA=new B.a8(A.b1,A.b6,A.x,D.ayv,null,null)
D.bYR=new B.a8(A.b1,A.b6,A.x,H.ap9,null,null)
D.bZE=new B.a8(A.ay,A.aC,A.x,A.a2C,null,null)
D.d2b=w([A.au,A.w],x.O)
D.bZP=new B.a8(A.b1,A.b6,A.x,D.d2b,null,null)
D.bZS=new B.a8(A.b1,A.b6,A.x,R.axT,null,null)
D.bjz=new B.v(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bkl=new B.v(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cDq=w([A.LJ,D.bjz,D.bkl],x.O)
D.c_1=new B.a8(A.b1,A.b6,A.x,D.cDq,null,null)
D.cqZ=w([A.d8,A.fU],x.O)
D.c_h=new B.a8(A.b1,A.b6,A.x,D.cqZ,null,null)
D.c_M=w([0,2,4,6,7,9,11],x.t)
D.c0_=w([0,4,7],x.t)
D.c00=w([0,4,7,12],x.t)
D.c01=w([0,4,7,4],x.t)
D.axy=w([A.h4,A.pK],x.O)
D.ax3=w([A.iE,A.cN],x.O)
D.avw=w([A.by,A.dN],x.O)
D.cLZ=w([A.aT,A.d8],x.O)
D.cSm=w([A.cs,A.ey],x.O)
D.dbn=w([A.c5,A.lL],x.O)
D.auY=w([A.cY,A.k1],x.O)
D.cQX=w([A.bK,A.aJ],x.O)
D.c0n=w([D.axy,D.ax3,A.a2K,D.avw,D.cLZ,D.cSm,A.awB,D.dbn,D.auY,D.cQX],x.Q)
D.c51=w([120,220,380],x.t)
D.c8M=w([12,16,19,24],x.t)
D.c8W=w([1400,800,450,2400],x.t)
D.cdc=w([0,0.6,1],x.n)
D.chm=w([250,450,900,1500],x.t)
D.b9p=new B.v(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bjX=new B.v(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bi_=new B.v(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bne=new B.v(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bh9=new B.v(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.aue=w([D.b9p,D.bjX,D.bi_,D.bne,D.bh9],x.O)
D.eG8=new B.z("type","Typewriter")
D.eyI=new B.z("bounce","Bounce")
D.eGZ=new B.z("wave","Wave")
D.eI3=new B.z("zoom","Zoom")
D.cy8=w([D.eG8,D.eyI,D.eGZ,A.a6v,H.aMs,D.eI3,H.aMx],x.L)
D.cym=w([50,25,75],x.t)
D.cDX=w([0,5,10,15,18,20,25],x.t)
D.cMe=w([900,500,250,1600],x.t)
D.cPJ=w([0.78,1],x.n)
D.cPM=w([0,2,4,7,9,12,14,16],x.t)
D.cQi=w([A.by,A.bA,A.ba,A.by],x.O)
D.a2z=w([A.aw,A.bH,A.bc,A.aR,A.nQ],x.O)
D.cRH=w([A.au,A.aw,A.cY,A.bH,A.bc,A.cB,A.c8,A.bA,A.Wh],x.O)
D.a2D=w([0.04,0.17,0.3],x.n)
D.eQ2=new C.uS("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eQ8=new C.uS("Medium engine","A good all-rounder.",0.3,0.9)
D.eQ7=new C.uS("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Hc=w([D.eQ2,D.eQ8,D.eQ7],x._)
D.eok=new B.z(6,"Easy")
D.ep3=new B.z(8,"Medium")
D.ekb=new B.z(10,"Hard")
D.cT9=w([D.eok,D.ep3,D.ekb],x.I)
D.avU=w([0.55,0.78,1],x.n)
D.cUG=w([0.93,0.975,1],x.n)
D.aw4=w([A.c,A.fT,A.nH,A.au],x.O)
D.fJj=new C.y6("Moon",1737,4291941851)
D.fJg=new C.y6("Earth",6371,4281908728)
D.fJk=new C.y6("Neptune",24622,4284524026)
D.fJl=new C.y6("Saturn",58232,4294829706)
D.fJh=new C.y6("Jupiter",69911,4294677052)
D.fJm=new C.y6("Sun",696340,4294688548)
D.fJn=new C.y6("Sirius A",119e4,4290763774)
D.fJe=new C.y6("Arcturus",179e5,4294818420)
D.fJf=new C.y6("Betelgeuse",531e6,4294472049)
D.fJi=new C.y6("UY Scuti",667e6,4293870660)
D.Q3=w([D.fJj,D.fJg,D.fJk,D.fJl,D.fJh,D.fJm,D.fJn,D.fJe,D.fJf,D.fJi],B.ax("O<y6>"))
D.eLy=new B.bk("glow","Glow",A.a04)
D.eJb=new B.bk("rainbow","Rainbow",A.ng)
D.eJy=new B.bk("stars","Stars",A.i6)
D.eIX=new B.bk("sparks","Sparks",A.e0)
D.eKP=new B.bk("fire","Fire",A.vR)
D.cWy=w([D.eLy,D.eJb,D.eJy,D.eIX,D.eKP],x.c)
D.aw8=w([A.bc,A.aw,A.bH,A.d0],x.O)
D.cXz=w([0.2,1],x.n)
D.eQ_=new C.uS("Radar","Shows your height above the ground.",0.1,0)
D.eQ0=new C.uS("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.ePY=new C.uS("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.awg=w([D.eQ_,D.eQ0,D.ePY],x._)
D.cYB=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cYQ=w([47,100,220,470,1000],x.n)
D.cZl=w([0,2,4,7,9],x.t)
D.Ig={volts:0}
D.a4k=new B.bt(D.Ig,[3],x.J)
D.ID=new B.e8(["b","battery",0.2,0.3,D.a4k])
D.e6L={on:0}
D.dqs=new B.bt(D.e6L,[1],x.J)
D.Di=new B.e8(["s","switch",0.5,0.3,D.dqs])
D.eO9=new B.e8(["l","bulb",0.8,0.3,A.j5])
D.cUm=w([D.ID,D.Di,D.eO9],x.d)
D.Dh=new B.ct(["b",0,"s",0])
D.eNa=new B.ct(["s",1,"l",0])
D.aMB=new B.ct(["l",1,"b",1])
D.dag=w([D.Dh,D.eNa,D.aMB],x.o)
D.cTQ=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.ejn=new C.mB("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cUm,D.dag,D.cTQ)
D.aGE={ohms:0}
D.aEf=new B.bt(D.aGE,[220],x.J)
D.eND=new B.e8(["r","resistor",0.5,0.3,D.aEf])
D.eOo=new B.e8(["d","led",0.8,0.3,A.j5])
D.ddp=w([D.ID,D.eND,D.eOo],x.d)
D.eMw=new B.ct(["b",0,"r",0])
D.eN4=new B.ct(["r",1,"d",0])
D.eMC=new B.ct(["d",1,"b",1])
D.dm9=w([D.eMw,D.eN4,D.eMC],x.o)
D.ddP=w(["led","diode","indicator"],x.s)
D.eju=new C.mB("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.ddp,D.dm9,D.ddP)
D.a5A={level:0}
D.dpP=new B.bt(D.a5A,[0.2],x.J)
D.eNJ=new B.e8(["p","pot",0.5,0.3,D.dpP])
D.eNL=new B.e8(["m","motor",0.8,0.3,A.j5])
D.cUE=w([D.ID,D.eNJ,D.eNL],x.d)
D.eMv=new B.ct(["b",0,"p",0])
D.eN0=new B.ct(["p",1,"m",0])
D.eMX=new B.ct(["m",1,"b",1])
D.dhW=w([D.eMv,D.eN0,D.eMX],x.o)
D.d9Y=w(["fan","motor","spin","dimmer"],x.s)
D.ejl=new C.mB("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cUE,D.dhW,D.d9Y)
D.a4h=new B.bt(D.a5A,[0.9],x.J)
D.aMI=new B.e8(["s","solar",0.25,0.3,D.a4h])
D.aMH=new B.e8(["l","bulb",0.75,0.3,A.j5])
D.cXf=w([D.aMI,D.aMH],x.d)
D.eN7=new B.ct(["s",0,"l",0])
D.eMW=new B.ct(["l",1,"s",1])
D.cVn=w([D.eN7,D.eMW],x.o)
D.diw=w(["solar","sun","without battery","no battery","free"],x.s)
D.ejo=new C.mB("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cXf,D.cVn,D.diw)
D.eOr=new B.e8(["c","crank",0.25,0.3,D.a4h])
D.d8k=w([D.eOr,D.aMH],x.d)
D.eMz=new B.ct(["c",0,"l",0])
D.eMV=new B.ct(["l",1,"c",1])
D.d8S=w([D.eMz,D.eMV],x.o)
D.d8s=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.ejk=new C.mB("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d8k,D.d8S,D.d8s)
D.dpO=new B.bt(D.a5A,[0.7],x.J)
D.eNO=new B.e8(["t","turbine",0.25,0.3,D.dpO])
D.eNB=new B.e8(["m","motor",0.75,0.3,A.j5])
D.d2Q=w([D.eNO,D.eNB],x.d)
D.eNi=new B.ct(["t",0,"m",0])
D.eMY=new B.ct(["m",1,"t",1])
D.d1Q=w([D.eNi,D.eMY],x.o)
D.d79=w(["wind","turbine","windmill","water","hydro"],x.s)
D.ejh=new C.mB("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.d2Q,D.d1Q,D.d79)
D.aEc=new B.bt(D.Ig,[9],x.J)
D.a6C=new B.e8(["b","battery",0.2,0.3,D.aEc])
D.aMG=new B.e8(["r","radio",0.8,0.3,A.j5])
D.dj7=w([D.a6C,D.Di,D.aMG],x.d)
D.eNc=new B.ct(["s",1,"r",0])
D.aMC=new B.ct(["r",1,"b",1])
D.c_I=w([D.Dh,D.eNc,D.aMC],x.o)
D.dhJ=w(["radio","music","listen"],x.s)
D.ejt=new C.mB("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dj7,D.c_I,D.dhJ)
D.dqS=new B.bt(D.Ig,[12],x.J)
D.aMF=new B.e8(["b","battery",0.2,0.3,D.dqS])
D.eOa=new B.e8(["t","tv",0.8,0.3,A.j5])
D.cUo=w([D.aMF,D.Di,D.eOa],x.d)
D.eNd=new B.ct(["s",1,"t",0])
D.aMD=new B.ct(["t",1,"b",1])
D.dbq=w([D.Dh,D.eNd,D.aMD],x.o)
D.dj4=w(["tv","television","screen","watch"],x.s)
D.eje=new C.mB("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cUo,D.dbq,D.dj4)
D.eO0=new B.e8(["z","buzzer",0.8,0.3,A.j5])
D.cAH=w([D.ID,D.Di,D.eO0],x.d)
D.eNe=new B.ct(["s",1,"z",0])
D.eNw=new B.ct(["z",1,"b",1])
D.cPx=w([D.Dh,D.eNe,D.eNw],x.o)
D.dg5=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.ejq=new C.mB("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cAH,D.cPx,D.dg5)
D.eNK=new B.e8(["h","heater",0.8,0.3,A.j5])
D.d5S=w([D.a6C,D.Di,D.eNK],x.d)
D.eN9=new B.ct(["s",1,"h",0])
D.eMK=new B.ct(["h",1,"b",1])
D.cQe=w([D.Dh,D.eN9,D.eMK],x.o)
D.ckE=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.ejf=new C.mB("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d5S,D.cQe,D.ckE)
D.eOc=new B.e8(["s","solar",0.2,0.25,D.a4h])
D.dqW=new B.bt(D.aGE,[100],x.J)
D.eOf=new B.e8(["r","resistor",0.55,0.25,D.dqW])
D.eOm=new B.e8(["c","capacitor",0.85,0.25,A.j5])
D.eNG=new B.e8(["q","resistor",0.55,0.6,D.aEf])
D.eOd=new B.e8(["d","led",0.85,0.6,A.j5])
D.daY=w([D.eOc,D.eOf,D.eOm,D.eNG,D.eOd],x.d)
D.eN8=new B.ct(["s",0,"r",0])
D.eN3=new B.ct(["r",1,"c",0])
D.eMB=new B.ct(["c",1,"s",1])
D.eMA=new B.ct(["c",0,"q",0])
D.eN2=new B.ct(["q",1,"d",0])
D.eMD=new B.ct(["d",1,"c",1])
D.d_N=w([D.eN8,D.eN3,D.eMB,D.eMA,D.eN2,D.eMD],x.o)
D.d7G=w(["capacitor","store","charge","flash"],x.s)
D.ejs=new C.mB("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.daY,D.d_N,D.d7G)
D.eNR=new B.e8(["b","battery",0.15,0.3,D.a4k])
D.eOs=new B.e8(["l1","bulb",0.5,0.3,A.j5])
D.eNY=new B.e8(["l2","bulb",0.85,0.3,A.j5])
D.cSB=w([D.eNR,D.eOs,D.eNY],x.d)
D.eMu=new B.ct(["b",0,"l1",0])
D.eMS=new B.ct(["l1",1,"l2",0])
D.eMT=new B.ct(["l2",1,"b",1])
D.d3x=w([D.eMu,D.eMS,D.eMT],x.o)
D.diQ=w(["series","two bulbs","dim"],x.s)
D.eji=new C.mB("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cSB,D.d3x,D.diQ)
D.e73={volts:0,charge:1}
D.dqZ=new B.bt(D.e73,[1.5,0],x.J)
D.eOk=new B.e8(["b","battery",0.75,0.3,D.dqZ])
D.cS2=w([D.aMI,D.eOk],x.d)
D.eN6=new B.ct(["s",0,"b",0])
D.eMy=new B.ct(["b",1,"s",1])
D.d04=w([D.eN6,D.eMy],x.o)
D.d7P=w(["charge","rechargeable","flat","recharge"],x.s)
D.ejg=new C.mB("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cS2,D.d04,D.d7P)
D.dqR=new B.bt(D.Ig,[4.5],x.J)
D.eNM=new B.e8(["b","battery",0.2,0.3,D.dqR])
D.aME=new B.e8(["p","phone",0.8,0.3,A.j5])
D.d2G=w([D.eNM,D.Di,D.aME],x.d)
D.eNb=new B.ct(["s",1,"p",0])
D.a6B=new B.ct(["p",1,"b",1])
D.df4=w([D.Dh,D.eNb,D.a6B],x.o)
D.dgv=w(["phone","charger","usb","mobile"],x.s)
D.ejm=new C.mB("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.d2G,D.df4,D.dgv)
D.eNy=new B.e8(["f","fan",0.8,0.3,A.j5])
D.ccL=w([D.ID,D.eNy],x.d)
D.eMt=new B.ct(["b",0,"f",0])
D.eMI=new B.ct(["f",1,"b",1])
D.cQK=w([D.eMt,D.eMI],x.o)
D.d9X=w(["fan","cool","air","wind"],x.s)
D.ejv=new C.mB("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.ccL,D.cQK,D.d9X)
D.eO4=new B.e8(["b","battery",0.15,0.2,D.a4k])
D.eNz=new B.e8(["a","ammeter",0.5,0.2,A.j5])
D.eNx=new B.e8(["l","bulb",0.85,0.2,A.j5])
D.eO6=new B.e8(["v","voltmeter",0.5,0.6,A.j5])
D.d88=w([D.eO4,D.eNz,D.eNx,D.eO6],x.d)
D.eMr=new B.ct(["b",0,"a",0])
D.eMq=new B.ct(["a",1,"l",0])
D.eNk=new B.ct(["v",0,"l",0])
D.eNl=new B.ct(["v",1,"l",1])
D.d_W=w([D.eMr,D.eMq,D.aMB,D.eNk,D.eNl],x.o)
D.dm8=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.ejr=new C.mB("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d88,D.d_W,D.dm8)
D.eOv=new B.e8(["b","battery",0.15,0.2,D.aEc])
D.eNQ=new B.e8(["t","tv",0.55,0.2,A.j5])
D.aEd=new B.bt(D.Ig,[5],x.J)
D.eNE=new B.e8(["c","buck",0.4,0.5,D.aEd])
D.eNS=new B.e8(["p","phone",0.8,0.5,A.j5])
D.cYD=w([D.eOv,D.eNQ,D.eNE,D.eNS],x.d)
D.eMx=new B.ct(["b",0,"t",0])
D.aMz=new B.ct(["b",0,"c",0])
D.aMA=new B.ct(["c",1,"p",0])
D.d2D=w([D.eMx,D.aMD,D.aMz,D.aMA,D.a6B],x.o)
D.cWP=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.ejj=new C.mB("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cYD,D.d2D,D.cWP)
D.eNF=new B.e8(["c","buck",0.5,0.3,D.aEd])
D.cQ5=w([D.aMF,D.eNF,D.aME],x.d)
D.cUN=w([D.aMz,D.aMA,D.a6B],x.o)
D.co4=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.ejd=new C.mB("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cQ5,D.cUN,D.co4)
D.eNW=new B.e8(["d","diode",0.5,0.3,A.j5])
D.d3K=w([D.a6C,D.eNW,D.aMG],x.d)
D.eMs=new B.ct(["b",0,"d",0])
D.eME=new B.ct(["d",1,"r",0])
D.cDe=w([D.eMs,D.eME,D.aMC],x.o)
D.cWv=w(["diode","protect","backwards","one way"],x.s)
D.ejp=new C.mB("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.d3K,D.cDe,D.cWv)
D.Q6=w([D.ejn,D.eju,D.ejl,D.ejo,D.ejk,D.ejh,D.ejt,D.eje,D.ejq,D.ejf,D.ejs,D.eji,D.ejg,D.ejm,D.ejv,D.ejr,D.ejj,D.ejd,D.ejp],B.ax("O<mB>"))
D.hcy=new C.G1("Moon",1.62,A.ds,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hcw=new C.G1("Mars",3.71,A.aw,"Mars has about 38 percent of Earth's gravity.")
D.hcz=new C.G1("Mercury",3.7,A.k_,"Mercury is small, so its gravity is like Mars.")
D.hct=new C.G1("Venus",8.87,A.aT,"Venus is almost as heavy as Earth, with strong gravity.")
D.hcv=new C.G1("Earth",9.81,A.aR,"On Earth gravity is strong, and the air also slows you down.")
D.hcx=new C.G1("Neptune",11.15,A.d0,"Neptune pulls a little harder than Earth.")
D.hcu=new C.G1("Jupiter",24.79,A.cY,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rk=w([D.hcy,D.hcw,D.hcz,D.hct,D.hcv,D.hcx,D.hcu],B.ax("O<G1>"))
D.d_L=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a2T=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.d0t=w([0.2,0.5,0.8],x.n)
D.eTc=new B.cS(A.bj,A.J,4)
D.d0R=w([D.eTc],x.q)
D.awM=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aW8=new C.Kk(0,"accordion")
D.cR2=w([A.jq,A.BU,A.BG],x.w)
D.cY3=w(["Mail","SMS","Ad"],x.s)
D.cRy=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.haL=new C.Az(D.aW8,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.axy,D.cR2,D.cY3,D.cRy)
D.aa6=new C.Kk(1,"flip")
D.d7A=w([A.rc,Z.GC,A.u6],x.w)
D.d2m=w(["Unlock","Verify","Secure"],x.s)
D.cQ1=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.haK=new C.Az(D.aa6,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.ax3,D.d7A,D.d2m,D.cQ1)
D.aW9=new C.Kk(2,"towers")
D.d1a=w([A.yu,A.q7,A.hO],x.w)
D.d0M=w(["Save","Grow","Earn"],x.s)
D.cE6=w(["","",""],x.s)
D.haM=new C.Az(D.aW9,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a2K,D.d1a,D.d0M,D.cE6)
D.aa7=new C.Kk(3,"assemble")
D.d8v=w([A.o4,A.hj,A.e0],x.w)
D.cXr=w(["Launch","Charge","Shine"],x.s)
D.d50=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.haO=new C.Az(D.aa7,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.avw,D.d8v,D.cXr,D.d50)
D.aWa=new C.Kk(4,"carousel")
D.d8l=w([A.ba,A.f3],x.O)
D.cYc=w([A.o1,A.aly,A.O0],x.w)
D.cT_=w(["Explore","Discover","Learn"],x.s)
D.d2L=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.haJ=new C.Az(D.aWa,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d8l,D.cYc,D.cT_,D.d2L)
D.aWb=new C.Kk(5,"burst")
D.d0H=w([A.i1,A.tj],x.O)
D.cRt=w([A.lo,A.mu,A.i5],x.w)
D.cRP=w(["Cheer","Win","Love"],x.s)
D.cTW=w(["Make some noise","First place","Share the joy"],x.s)
D.haN=new C.Az(D.aWb,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.d0H,D.cRt,D.cRP,D.cTW)
D.awN=w([D.haL,D.haK,D.haM,D.haO,D.haJ,D.haN],B.ax("O<Az>"))
D.eK_=new B.bk("skin","Skin",A.alz)
D.eLk=new B.bk("muscle","Muscles",A.NE)
D.eL2=new B.bk("organ","Organs",A.i5)
D.bFu=new B.a1(62747,"MaterialIcons",!1)
D.eL8=new B.bk("bone","Skeleton",D.bFu)
D.eLq=new B.bk("vessel","Blood vessels",A.q9)
D.d1g=w([D.eK_,D.eLk,D.eL2,D.eL8,D.eLq],x.c)
D.eQ1=new C.uS("Simple legs","Light. Land gently.",0.15,0.2)
D.eQ3=new C.uS("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eQ6=new C.uS("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Co=w([D.eQ1,D.eQ3,D.eQ6],x._)
D.d2V=w([1.77,3.55,7.15,16.7],x.n)
D.d5r=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.eFF=new B.z("spiral","Spiral")
D.eoh=new B.z("barred","Barred spiral")
D.ezP=new B.z("elliptical","Elliptical")
D.d67=w([D.eFF,D.eoh,D.ezP],x.L)
D.eM8=new B.ct(["beat",0.18,0.28,0])
D.eNf=new B.ct(["burst",0.7,0.2,0])
D.eNq=new B.ct(["delay",0.45,0.5,1])
D.eN_=new B.ct(["ripple",0.75,0.6,3])
D.cXa=w([D.eM8,D.eNf,D.eNq,D.eN_],x.e)
D.d6Y=w([N.la,L.IC,F.SG],x.u)
D.ha_=new C.FN("First spark","A clock lights a burst and a ripple",D.cXa,D.d6Y)
D.eMH=new B.ct(["beat",0.15,0.3,1])
D.eLN=new B.ct(["ripple",0.62,0.15,0])
D.eNm=new B.ct(["delay",0.4,0.45,0])
D.eMn=new B.ct(["ripple",0.7,0.45,0])
D.eM4=new B.ct(["delay",0.4,0.7,1])
D.eN1=new B.ct(["shake",0.75,0.75,0])
D.djX=w([D.eMH,D.eLN,D.eNm,D.eMn,D.eM4,D.eN1],x.e)
D.ele=new B.z(2,4)
D.aMl=new B.z(4,5)
D.d_B=w([N.la,L.IC,F.SG,D.ele,D.aMl],x.u)
D.ha1=new C.FN("Heartbeat","Two thumps, then a shake",D.djX,D.d_B)
D.eMd=new B.ct(["dice",0.15,0.7,1])
D.eNs=new B.ct(["echo",0.4,0.7,0])
D.eMl=new B.ct(["comet",0.7,0.5,4])
D.eNg=new B.ct(["burst",0.72,0.2,1])
D.eMF=new B.ct(["burst",0.3,0.25,0])
D.eMe=new B.ct(["pop",0.55,0.85,0])
D.ckc=w([D.eMd,D.eNs,D.eMl,D.eNg,D.eMF,D.eMe],x.e)
D.ekD=new B.z(1,3)
D.ekE=new B.z(1,4)
D.aMh=new B.z(0,5)
D.d8g=w([N.la,Q.uG,D.ekD,D.ekE,D.aMh],x.u)
D.ha0=new C.FN("Fireworks","Dice launch comets that burst in colour",D.ckc,D.d8g)
D.eMi=new B.ct(["beat",0.15,0.2,2])
D.eMP=new B.ct(["chance",0.4,0.2,0])
D.eMa=new B.ct(["ball",0.7,0.12,3])
D.eLY=new B.ct(["chance",0.4,0.5,1])
D.eNr=new B.ct(["ball",0.3,0.08,1])
D.eLR=new B.ct(["ripple",0.7,0.55,3])
D.cdd=w([D.eMi,D.eMP,D.eMa,D.eLY,D.eNr,D.eLR],x.e)
D.elf=new B.z(2,5)
D.cAq=w([N.la,Q.uG,L.a6q,F.SH,D.elf],x.u)
D.h9Z=new C.FN("Rain","Balls fall at random and splash",D.cdd,D.cAq)
D.eMQ=new B.ct(["beat",0.12,0.45,2])
D.eNh=new B.ct(["toggle",0.38,0.2,0])
D.eNo=new B.ct(["wash",0.7,0.15,4])
D.eMc=new B.ct(["count3",0.38,0.45,0])
D.eNj=new B.ct(["burst",0.72,0.4,0])
D.eMG=new B.ct(["light",0.55,0.7,1])
D.eLZ=new B.ct(["pop",0.8,0.8,4])
D.daW=w([D.eMQ,D.eNh,D.eNo,D.eMc,D.eNj,D.eMG,D.eLZ],x.e)
D.elL=new B.z(3,6)
D.cgm=w([N.la,Q.uG,L.a6q,F.SH,D.aMh,D.elL],x.u)
D.h9X=new C.FN("Disco","A beat drives lights, washes and bursts",D.daW,D.cgm)
D.eNv=new B.ct(["button",0.12,0.2,0])
D.eLT=new B.ct(["delay",0.34,0.2,1])
D.eNu=new B.ct(["light",0.56,0.2,1])
D.eNn=new B.ct(["delay",0.56,0.45,1])
D.eMR=new B.ct(["ball",0.34,0.6,0])
D.eLX=new B.ct(["delay",0.34,0.8,1])
D.eLM=new B.ct(["burst",0.7,0.8,5])
D.c0q=w([D.eNv,D.eLT,D.eNu,D.eNn,D.eMR,D.eLX,D.eLM],x.e)
D.enU=new B.z(5,6)
D.dge=w([N.la,Q.uG,F.SG,F.SH,D.aMl,D.enU],x.u)
D.h9Y=new C.FN("Domino","Tap the button and watch it run down the line",D.c0q,D.dge)
D.ax7=w([D.ha_,D.ha1,D.ha0,D.h9Z,D.h9X,D.h9Y],B.ax("O<FN>"))
D.d6f=w([0.05,0.15,0.25],x.n)
D.d78=w([1.5,3,4.5,9,12],x.n)
D.eIH=new B.bk("dice","Dice",A.oS)
D.eJI=new B.bk("coin","Coin",I.yo)
D.eLl=new B.bk("num","Number",A.yw)
D.d7k=w([D.eIH,D.eJI,D.eLl],x.c)
D.d7n=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fJo=new C.P4("Moon",1.62,0,4291941851)
D.fJp=new C.P4("Mars",3.71,0.01,4294472049)
D.fJq=new C.P4("Earth",9.81,1,4281908728)
D.fJs=new C.P4("Jupiter",24.79,1.4,4294677052)
D.fJr=new C.P4("Sun",274,2,4294688548)
D.yU=w([D.fJo,D.fJp,D.fJq,D.fJs,D.fJr],B.ax("O<P4>"))
D.axd=w([A.cs,A.aT,A.bn,A.aR,A.by,A.c5,A.cY,A.iE],x.O)
D.d8m=w([A.c5,A.aR,A.dO,A.bn],x.O)
D.d9g=w([],x.h)
D.d9k=w([],x.B)
D.a3g=w([],x.m)
D.ed0=new C.eb("battery","Battery","\ud83d\udd0b",A.bn,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.ed6=new C.eb("solar","Solar panel","\u2600\ufe0f",A.bH,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.edL=new C.eb("crank","Hand crank","\ud83d\udd04",A.cY,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.edn=new C.eb("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aR,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.ecT=new C.eb("buck","Step-down converter","\ud83d\udd3d",A.iE,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.edl=new C.eb("regulator","5 V regulator","\ud83e\uddca",A.bK,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.edQ=new C.eb("diode","Diode","\u27a1\ufe0f",A.aT,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.edx=new C.eb("ldr","Light sensor","\ud83c\udf1e",A.dO,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.edb=new C.eb("switch","Switch","\ud83c\udf9a\ufe0f",A.by,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.edN=new C.eb("fuse","Fuse","\ud83e\uddef",A.cs,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.ecL=new C.eb("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.iE,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.edy=new C.eb("resistor","Resistor","\u3030\ufe0f",A.aT,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.edA=new C.eb("bulb","Light bulb","\ud83d\udca1",A.dO,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.ed8=new C.eb("led","LED","\ud83d\udd34",A.aw,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.edc=new C.eb("motor","Motor","\u2699\ufe0f",A.bK,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.edu=new C.eb("buzzer","Buzzer","\ud83d\udd14",A.c5,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.ed1=new C.eb("heater","Heater","\ud83d\udd25",A.cY,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.edp=new C.eb("capacitor","Capacitor","\ud83e\udeab",A.cn,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.edh=new C.eb("radio","Radio","\ud83d\udcfb",A.nQ,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.ede=new C.eb("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.ba,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.ecS=new C.eb("voltmeter","Voltmeter","\ud83e\udded",A.bu,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.ecZ=new C.eb("ammeter","Ammeter","\ud83d\udcdf",A.aT,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.ed4=new C.eb("fan","Fan","\ud83c\udf00",A.aR,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.edS=new C.eb("speaker","Speaker","\ud83d\udd0a",A.c5,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.edH=new C.eb("clock","Digital clock","\u23f0",A.bn,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.edk=new C.eb("calculator","Calculator","\ud83e\uddee",A.KQ,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.ecY=new C.eb("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cn,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.edR=new C.eb("router","WiFi router","\ud83d\udcf6",A.iE,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.edU=new C.eb("siren","Siren","\ud83d\udea8",A.aw,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.ecO=new C.eb("toycar","Toy car","\ud83d\ude97",A.cY,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.edV=new C.eb("kettle","Kettle","\ud83e\uded6",A.mk,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.ecW=new C.eb("lamp","Desk lamp","\ud83e\ude94",A.dO,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.ed7=new C.eb("lights","Party lights","\ud83c\udf84",A.nQ,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.edi=new C.eb("fridge","Fridge","\ud83e\uddca",A.hh,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.ecQ=new C.eb("washer","Washing machine","\ud83e\udee7",A.cn,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.edI=new C.eb("blender","Blender","\ud83e\udd64",A.cs,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.edf=new C.eb("drone","Drone","\ud83d\ude81",A.bK,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.ecV=new C.eb("drill","Power drill","\ud83d\udd29",A.aT,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.edj=new C.eb("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.edF=new C.eb("neon","Neon sign","\ud83e\udea7",A.c5,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.ecR=new C.eb("microwave","Microwave","\ud83c\udf72",A.cY,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.edz=new C.eb("doorbell","Doorbell","\ud83d\udd14",A.bH,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.ed3=new C.eb("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.edt=new C.eb("console","Game console","\ud83c\udfae",A.by,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.edK=new C.eb("heartmon","Heart monitor","\ud83e\ude7a",A.h3,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.ecP=new C.eb("aquarium","Aquarium","\ud83d\udc20",A.ba,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.edo=new C.eb("lighthouse","Lighthouse","\ud83d\uddfc",A.dO,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.edw=new C.eb("discoball","Disco ball","\ud83e\udea9",A.nQ,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.edP=new C.eb("robot","Robot","\ud83e\udd16",A.aR,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.ecN=new C.eb("toaster","Toaster","\ud83c\udf5e",A.dS,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.edT=new C.eb("ledstrip","LED strip","\ud83c\udf08",A.c5,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.edE=new C.eb("pump","Water pump","\ud83d\udeb0",A.aR,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.edq=new C.eb("hairdryer","Hair dryer","\ud83d\udca8",A.i1,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.edC=new C.eb("headphones","Headphones","\ud83c\udfa7",A.by,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.ecX=new C.eb("smartwatch","Apple Watch Ultra","\u231a",A.bu,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.edO=new C.eb("tablet","iPad Pro M5","\ud83d\udcf2",A.cn,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.ecK=new C.eb("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h3,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.edg=new C.eb("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bs,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.ed9=new C.eb("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.edv=new C.eb("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.tg,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.ecM=new C.eb("iphonefold","iPhone Fold","\ud83d\udcf1",A.b5,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.ed_=new C.eb("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d0,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.edM=new C.eb("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cB,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.edr=new C.eb("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bc,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.edm=new C.eb("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c9,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.edD=new C.eb("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aw,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eda=new C.eb("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bn,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eds=new C.eb("honor","Honor Magic V5","\ud83d\udcf1",A.cn,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.edB=new C.eb("vivo","vivo X300 Pro","\ud83d\udcf1",A.cY,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.edG=new C.eb("ereader","Kindle Scribe","\ud83d\udcd6",A.bs,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.ecJ=new C.eb("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.c8,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.edd=new C.eb("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cB,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.ed5=new C.eb("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.ba,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.ecU=new C.eb("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dO,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.ed2=new C.eb("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aw,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.edJ=new C.eb("vision","Apple Vision Pro","\ud83e\udd7d",A.by,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Qx=w([D.ed0,D.ed6,D.edL,D.edn,D.ecT,D.edl,D.edQ,D.edx,D.edb,D.edN,D.ecL,D.edy,D.edA,D.ed8,D.edc,D.edu,D.ed1,D.edp,D.edh,D.ede,D.ecS,D.ecZ,D.ed4,D.edS,D.edH,D.edk,D.ecY,D.edR,D.edU,D.ecO,D.edV,D.ecW,D.ed7,D.edi,D.ecQ,D.edI,D.edf,D.ecV,D.edj,D.edF,D.ecR,D.edz,D.ed3,D.edt,D.edK,D.ecP,D.edo,D.edw,D.edP,D.ecN,D.edT,D.edE,D.edq,D.edC,D.ecX,D.edO,D.ecK,D.edg,D.ed9,D.edv,D.ecM,D.ed_,D.edM,D.edr,D.edm,D.edD,D.eda,D.eds,D.edB,D.edG,D.ecJ,D.edd,D.ed5,D.ecU,D.ed2,D.edJ],B.ax("O<eb>"))
D.d9I=w([0,0.46,0.82],x.n)
D.d9T=w([5,10,15,25,45,60],x.t)
D.dae=w([-0.045,0.03,-0.015],x.n)
D.daC=w([0.9,0.97,1],x.n)
D.axG=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.uh=w([0.05,0.2,0.35],x.n)
D.cRT=w([D.Lt,D.Lt],x.O)
D.cX5=w([A.F7,A.M],x.O)
D.cW9=w([A.fz,A.hv],x.O)
D.cPY=w([A.f3,A.nP],x.O)
D.ccJ=w([A.lL,A.dx],x.O)
D.axH=w([D.cRT,D.cX5,D.cW9,D.cPY,D.ccJ],x.Q)
D.fJc=new C.v5("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fJd=new C.v5("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fJ4=new C.v5("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fJb=new C.v5("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fJ9=new C.v5("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fJ5=new C.v5("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fJa=new C.v5("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fJ6=new C.v5("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fJ8=new C.v5("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fJ7=new C.v5("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.Cv=w([D.fJc,D.fJd,D.fJ4,D.fJb,D.fJ9,D.fJ5,D.fJa,D.fJ6,D.fJ8,D.fJ7],B.ax("O<v5>"))
D.bgQ=new B.v(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.beA=new B.v(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.dbU=w([D.Lt,D.bgQ,D.beA,A.adJ],x.O)
D.b2y=new B.ac(0,A.G,A.ig,A.dD,6)
D.dcP=w([D.b2y],x.V)
D.ejP=new B.z(0,"AND")
D.ekF=new B.z(1,"Adder")
D.elg=new B.z(2,"Blinker")
D.elM=new B.z(3,"Memory")
D.ddB=w([D.ejP,D.ekF,D.elg,D.elM],x.I)
D.axU=w([-104,0,104],x.n)
D.axV=w([-14,3],x.n)
D.deo=w([-8,0,8],x.n)
D.ay2=w([-92,0,92],x.n)
D.deN=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.ePZ=new C.uS("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eQ5=new C.uS("Medium tank","Balanced.",0.35,1)
D.eQ4=new C.uS("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.QL=w([D.ePZ,D.eQ5,D.eQ4],x._)
D.nl=w([0.04,0.2,0.36],x.n)
D.ayd=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eL1=new B.bk(D.aW8,"Fold",I.amu)
D.eKc=new B.bk(D.aa6,"Flip",A.Gd)
D.bFN=new B.a1(62889,"MaterialIcons",!1)
D.eLj=new B.bk(D.aW9,"Rise",D.bFN)
D.amI=new B.a1(983870,"MaterialIcons",!1)
D.eId=new B.bk(D.aa7,"Assemble",D.amI)
D.eIm=new B.bk(D.aWa,"Spin",D.al0)
D.eIj=new B.bk(D.aWb,"Pop",A.lo)
D.dgb=w([D.eL1,D.eKc,D.eLj,D.eId,D.eIm,D.eIj],B.ax("O<+(Kk,m,a1)>"))
D.ayi=w([A.c5,A.dO,A.bu,A.aR,A.by,A.cs],x.O)
D.dgB=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dhz=w([3,4.5,5,6,9],x.n)
D.b36=new B.ac(0,A.G,A.aW,A.J,16)
D.di_=w([D.b36],x.V)
D.QO=w([A.c5,A.bH,A.bn,A.aR,A.by,A.cs,A.c,A.cY],x.O)
D.dit=w(["solar","turbine","crank","pot"],x.s)
D.diU=w([0,0.35,0.75,1],x.n)
D.eIB=new B.bk("drop","Drop",D.amk)
D.eID=new B.bk("weight","Weight",S.amM)
D.eLd=new B.bk("cannon","Newton's cannon",A.alK)
D.djD=w([D.eIB,D.eID,D.eLd],x.c)
D.dka=w(["volts","level","ohms","on"],x.s)
D.dlz=w([A.jq,A.BU,A.BG,A.rc,Z.GC,A.u6,A.yu,A.q7,A.hO,A.o4,A.hj,A.e0,A.i5,A.i6,A.mu,A.lV,A.vY,A.rg,A.lW,A.G5,A.vX,A.BM,A.BI,A.amf,A.Nv,A.BS,A.NE,A.alV,R.amE,A.lo],x.w)
D.dms=w([0.72,1],x.n)
D.dmF=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.e6R={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.doV=new B.bt(D.e6R,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],B.ax("bt<m,m>"))
D.e4L={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.h2J=new C.y8("Switch",F.u8,A.bH,0,"Tap it to turn it ON or OFF.")
D.h2F=new C.y8("Blinker",A.oW,A.bu,0,"Turns itself ON and OFF. Tap to change the speed.")
D.h2G=new C.y8("AND",D.amI,A.cn,2,"ON only when BOTH inputs are ON.")
D.bHf=new B.a1(63671,"MaterialIcons",!1)
D.h2E=new C.y8("OR",D.bHf,A.by,2,"ON when EITHER input is ON.")
D.h2H=new C.y8("XOR",G.a09,A.c5,2,"ON when the inputs are DIFFERENT.")
D.h2B=new C.y8("NAND",A.tU,A.aR,2,"OFF only when BOTH inputs are ON.")
D.bGl=new B.a1(63176,"MaterialIcons",!1)
D.h2C=new C.y8("NOR",D.bGl,A.iE,2,"ON only when BOTH inputs are OFF.")
D.h2D=new C.y8("NOT",Y.BV,A.cY,1,"Flips the signal: ON becomes OFF.")
D.h2I=new C.y8("Light",A.rb,A.dO,1,"Glows when its input is ON.")
D.h2K=new C.y8("Buzzer",A.ua,A.cs,1,"Beeps while its input is ON.")
D.z7=new B.bt(D.e4L,[D.h2J,D.h2F,D.h2G,D.h2E,D.h2H,D.h2B,D.h2C,D.h2D,D.h2I,D.h2K],B.ax("bt<m,y8>"))
D.e6C={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eJ1=new B.bk(3,20,1.9)
D.eIw=new B.bk(33,90,1.6)
D.eLE=new B.bk(52,15,3.2)
D.eLC=new B.bk(45,-100,1.8)
D.eK6=new B.bk(-15,-60,1.9)
D.eJC=new B.bk(-25,140,2.4)
D.eJt=new B.bk(-82,0,2.2)
D.aE2=new B.bt(D.e6C,[D.eJ1,D.eIw,D.eLE,D.eLC,D.eK6,D.eJC,D.eJt],B.ax("bt<m,+(K,K,K)>"))
D.cQv=w([A.A],x.M)
D.cQQ=w([A.ay,A.aC],x.M)
D.cZE=w([A.ay,A.A,A.aC],x.M)
D.d0a=w([A.ay,A.ld,A.A,A.lF,A.aC],x.M)
D.ddx=w([A.ay,A.ld,A.a3,A.a8,A.lF,A.aC],x.M)
D.dqh=new B.dt([1,D.cQv,2,D.cQQ,3,D.cZE,4,A.ayH,5,D.d0a,6,D.ddx],B.ax("dt<H,ai<dd>>"))
D.e71={Calm:0,Box:1,Sleep:2}
D.cxU=w([4,2,6,0],x.n)
D.cy0=w([4,4,4,4],x.n)
D.cy1=w([4,7,8,0],x.n)
D.Rc=new B.bt(D.e71,[D.cxU,D.cy0,D.cy1],B.ax("bt<m,ai<K>>"))
D.e4W={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wU=new C.a0_(0,"source")
D.d_E=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.h8D=new C.q6("Clock",A.oW,D.wU,A.bu,D.d_E)
D.h8z=new C.q6("Button",A.BY,D.wU,A.aT,A.U)
D.dhL=w(["random","quick","slow"],x.s)
D.h8K=new C.q6("Dice",A.oS,D.wU,A.c5,D.dhL)
D.bGV=new B.a1(63484,"MaterialIcons",!1)
D.DY=new C.a0_(1,"logic")
D.dmn=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.h8G=new C.q6("Delay",D.bGV,D.DY,A.cn,D.dmn)
D.da_=w(["fast","mid","slow"],x.s)
D.h8L=new C.q6("Echo",A.am9,D.DY,A.by,D.da_)
D.h8I=new C.q6("Every 2nd",Y.BV,D.DY,A.iE,A.U)
D.bGz=new B.a1(63309,"MaterialIcons",!1)
D.h8F=new C.q6("Every 3rd",D.bGz,D.DY,A.aR,A.U)
D.bIr=new B.a1(983902,"MaterialIcons",!1)
D.c_O=w(["50%","25%","75%"],x.s)
D.h8N=new C.q6("Chance",D.bIr,D.DY,A.cY,D.c_O)
D.qC=new C.a0_(2,"out")
D.h8B=new C.q6("Light",A.rb,D.qC,A.dO,A.U)
D.h8C=new C.q6("Burst",A.lo,D.qC,A.c5,A.U)
D.h8A=new C.q6("Ripple",A.yz,D.qC,A.ba,A.U)
D.h8J=new C.q6("Ball",A.amm,D.qC,A.cY,A.U)
D.h8H=new C.q6("Comet",A.o4,D.qC,A.by,A.U)
D.bIc=new B.a1(983669,"MaterialIcons",!1)
D.h8M=new C.q6("Shake",D.bIc,D.qC,A.cs,A.U)
D.h8O=new C.q6("Pop",A.G6,D.qC,A.bn,A.U)
D.h8E=new C.q6("Wash",A.NI,D.qC,A.pA,A.U)
D.mC=new B.bt(D.e4W,[D.h8D,D.h8z,D.h8K,D.h8G,D.h8L,D.h8I,D.h8F,D.h8N,D.h8B,D.h8C,D.h8A,D.h8J,D.h8H,D.h8M,D.h8O,D.h8E],B.ax("bt<m,q6>"))
D.e57={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.zz=new C.Jh(0,"tv")
D.eRw=new C.m8("Samsung Neo QLED 8K",D.zz,F.EM,A.aR)
D.eRn=new C.m8("LG OLED evo G5",D.zz,A.ed,A.h3)
D.eRe=new C.m8("Sony Bravia 9",D.zz,A.qM,A.bs)
D.eRi=new C.m8("Apple TV 4K",D.zz,A.e4,A.bO)
D.eRf=new C.m8("Bang and Olufsen Beovision",D.zz,F.Es,F.tg)
D.IH=new C.Jh(1,"iphone")
D.aN2=new C.m8("iPhone 18 Pro Max",D.IH,D.agm,A.c8)
D.wq=new C.Jh(3,"fold")
D.bmX=new B.v(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eRs=new C.m8("iPhone Fold",D.wq,D.bmX,A.b5)
D.uJ=new C.Jh(2,"android")
D.eRt=new C.m8("Samsung Galaxy S26 Ultra",D.uJ,F.acB,A.d0)
D.bgo=new B.v(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eRl=new C.m8("Samsung Galaxy Z Fold7",D.wq,D.bgo,A.cB)
D.eRh=new C.m8("Google Pixel 10 Pro XL",D.uJ,A.ds,A.bc)
D.eRp=new C.m8("Xiaomi 16 Ultra",D.uJ,A.lP,A.c9)
D.eRk=new C.m8("Huawei Mate 80 Pro Max",D.uJ,A.ey,A.aw)
D.eRg=new C.m8("OPPO Find X9 Ultra",D.uJ,A.dV,A.bn)
D.eRy=new C.m8("Honor Magic V5",D.wq,A.d5,A.cn)
D.eRm=new C.m8("vivo X300 Pro",D.uJ,A.hv,A.cY)
D.SO=new C.Jh(4,"tablet")
D.eRr=new C.m8("iPad Pro M5",D.SO,A.ds,A.aR)
D.a6M=new C.Jh(5,"reader")
D.eRz=new C.m8("Kindle Scribe",D.a6M,A.e2,A.bs)
D.zA=new C.Jh(6,"computer")
D.eRq=new C.m8("MacBook Pro M5 Max",D.zA,A.ds,A.c8)
D.eRv=new C.m8("iMac 32 inch",D.zA,A.bO,A.cB)
D.eRo=new C.m8("Pro Display XDR 8K",D.zA,A.lP,A.ba)
D.eRj=new C.m8("Sony Laser Projector",D.zA,A.co,A.dO)
D.eRu=new C.m8("Luxury car touchscreen",D.zA,K.mX,A.aw)
D.eRx=new C.m8("Apple Vision Pro",D.zA,A.h6,A.by)
D.m1=new B.bt(D.e57,[D.eRw,D.eRn,D.eRe,D.eRi,D.eRf,D.aN2,D.eRs,D.eRt,D.eRl,D.eRh,D.eRp,D.eRk,D.eRg,D.eRy,D.eRm,D.eRr,D.eRz,D.eRq,D.eRv,D.eRo,D.eRj,D.eRu,D.eRx],B.ax("bt<m,m8>"))
D.e5f={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bpF=new C.fN(20,4,13,!1)
D.bq5=new C.fN(14,5,13.5,!1)
D.bpX=new C.fN(9,2.4,10,!1)
D.bqa=new C.fN(7,5,12.5,!1)
D.bq_=new C.fN(8,3.5,12,!1)
D.bpB=new C.fN(15,2,6,!1)
D.bq8=new C.fN(45,6,13.5,!0)
D.bpR=new C.fN(10,8,13.5,!1)
D.bpJ=new C.fN(25,3,12,!0)
D.bpP=new C.fN(35,4,12,!0)
D.bpQ=new C.fN(40,4.5,9.5,!0)
D.bpS=new C.fN(55,3,9,!0)
D.bpC=new C.fN(18,3,9,!1)
D.bq7=new C.fN(22,4,13.5,!1)
D.bq0=new C.fN(16,5,13.5,!1)
D.bpN=new C.fN(30,4,9,!0)
D.bqj=new C.fN(5,3.5,13,!1)
D.bpV=new C.fN(25,3,13.5,!0)
D.bq3=new C.fN(14,2.5,9,!1)
D.bpU=new C.fN(6,6,13,!1)
D.bqb=new C.fN(30,1.2,5,!0)
D.bqi=new C.fN(35,3,4.5,!0)
D.bqe=new C.fN(20,4.5,7.5,!0)
D.bpT=new C.fN(55,5.5,13.5,!0)
D.bpA=new C.fN(45,5.5,13.5,!0)
D.bq4=new C.fN(40,5.5,13.5,!0)
D.bqh=new C.fN(60,6,13.5,!0)
D.agP=new C.fN(28,4,7,!0)
D.Fk=new C.fN(25,4,7,!0)
D.bpM=new C.fN(30,4,7,!0)
D.bpH=new C.fN(22,4,7,!0)
D.bpI=new C.fN(24,4,7,!0)
D.bpW=new C.fN(60,3,5.5,!0)
D.bpD=new C.fN(18,9,14,!0)
D.bpK=new C.fN(25,9,14,!0)
D.agQ=new C.fN(30,8,14,!0)
D.bpG=new C.fN(20,8,14,!0)
D.bpO=new C.fN(30,9,14,!0)
D.bqc=new C.fN(22,5,9.5,!0)
D.bpE=new C.fN(30,2.5,10.5,!0)
D.bq1=new C.fN(50,5.5,13.5,!0)
D.bqg=new C.fN(12,2,9.5,!1)
D.bpZ=new C.fN(16,1.3,9.5,!0)
D.bq9=new C.fN(40,2.5,7,!0)
D.bqf=new C.fN(60,1.2,4.8,!0)
D.bqd=new C.fN(18,5,13.5,!0)
D.bq6=new C.fN(8,2,9.5,!1)
D.bpY=new C.fN(12,2.5,8,!1)
D.bpL=new C.fN(20,3.5,13.5,!0)
D.bq2=new C.fN(3.5,3,13,!1)
D.z8=new B.bt(D.e5f,[D.bpF,D.bq5,D.bpX,D.bqa,D.bq_,D.bpB,D.bq8,D.bpR,D.bpJ,D.bpP,D.bpQ,D.bpS,D.bpC,D.bq7,D.bq0,D.bpN,D.bqj,D.bpV,D.bq3,D.bpU,D.bqb,D.bqi,D.bqe,D.bpT,D.bpA,D.bq4,D.bqh,D.agP,D.Fk,D.bpM,D.Fk,D.bpH,D.Fk,D.bpI,D.agP,D.Fk,D.bpW,D.bpD,D.bpK,D.agQ,D.bpG,D.bpO,D.bqc,D.bpE,D.bq1,D.bqg,D.bpZ,D.bq9,D.bqf,D.Fk,D.agQ,D.bqd,D.bq6,D.bpY,D.bpL,D.bq2],B.ax("bt<m,fN>"))
D.e4V={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eHK=new B.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.enR=new B.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.enM=new B.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.ezG=new B.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eAy=new B.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.ezC=new B.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.elT=new B.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.exF=new B.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eHS=new B.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eAT=new B.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.er5=new B.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.elz=new B.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eq7=new B.z("Movement","They pull your legs together and help you balance.")
D.es_=new B.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eo_=new B.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eFo=new B.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eGp=new B.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.exn=new B.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eG9=new B.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.ew4=new B.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eB1=new B.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.elG=new B.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.esm=new B.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eAH=new B.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.ewo=new B.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eGh=new B.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.ez7=new B.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.elR=new B.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eBA=new B.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eF1=new B.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eDi=new B.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.ek_=new B.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eyR=new B.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eyV=new B.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.et3=new B.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eod=new B.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.erP=new B.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.exP=new B.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eE3=new B.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eHP=new B.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eAZ=new B.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.ejJ=new B.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.ey_=new B.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eky=new B.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eEi=new B.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eFk=new B.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eyp=new B.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eEv=new B.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.elI=new B.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eFP=new B.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.epx=new B.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eDJ=new B.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.esK=new B.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.ewj=new B.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eBi=new B.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eFZ=new B.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eFR=new B.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eFV=new B.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.ewO=new B.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eC6=new B.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eDf=new B.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eFG=new B.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eyo=new B.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.euI=new B.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.etu=new B.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eyM=new B.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eBb=new B.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.evd=new B.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.evT=new B.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.epT=new B.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eFg=new B.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eqF=new B.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.ekv=new B.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.et2=new B.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.ekq=new B.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eoE=new B.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.et7=new B.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eqP=new B.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eBw=new B.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.es2=new B.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eHx=new B.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.etE=new B.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.ewH=new B.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.ezf=new B.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eqY=new B.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eqH=new B.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.drl=new B.bt(D.e4V,[D.eHK,D.enR,D.enM,D.ezG,D.eAy,D.ezC,D.elT,D.exF,D.eHS,D.eAT,D.er5,D.elz,D.eq7,D.es_,D.eo_,D.eFo,D.eGp,D.exn,D.eG9,D.ew4,D.eB1,D.elG,D.esm,D.eAH,D.ewo,D.eGh,D.ez7,D.elR,D.eBA,D.eF1,D.eDi,D.ek_,D.eyR,D.eyV,D.et3,D.eod,D.erP,D.exP,D.eE3,D.eHP,D.eAZ,D.ejJ,D.ey_,D.eky,D.eEi,D.eFk,D.eyp,D.eEv,D.elI,D.eFP,D.epx,D.eDJ,D.esK,D.ewj,D.eBi,D.eFZ,D.eFR,D.eFV,D.ewO,D.eC6,D.eDf,D.eFG,D.eyo,D.euI,D.etu,D.eyM,D.eBb,D.evd,D.evT,D.epT,D.eFg,D.eqF,D.ekv,D.et2,D.ekq,D.eoE,D.et7,D.eqP,D.eBw,D.es2,D.eHx,D.etE,D.ewH,D.ezf,D.eqY,D.eqH],B.ax("bt<m,+(m,m)>"))
D.drn=new B.hC(A.G,11)
D.drs=new B.hC(A.G,30)
D.dyl=new C.Ub(null)
D.dym=new C.Uc(null)
D.dyz=new C.Ud(null)
D.dAA=new C.Ug(null)
D.dBo=new C.UR(null)
D.dBq=new C.US(null)
D.dBY=new C.UZ(null)
D.dDT=new C.V2(null)
D.dDU=new C.V4(null)
D.dDW=new C.V5(null)
D.dFB=new C.Vx(null)
D.dGg=new C.Vy(null)
D.dKr=new C.VD(null)
D.e_k=new C.VE(null)
D.e_m=new C.VF(null)
D.e_n=new C.VI(null)
D.e_o=new C.VJ(null)
D.e1h=new C.VR(null)
D.e1i=new C.VS(null)
D.e1y=new C.W1(null)
D.e1z=new C.W2(null)
D.e1A=new C.a7Z(null)
D.e2a=new C.W4(null)
D.e3D=new C.W8(null)
D.e7d=new B.x(0,118)
D.aGK=new B.x(0,13)
D.e7e=new B.x(0,17)
D.e7h=new B.x(0,330)
D.e7k=new B.x(0,-13)
D.aGQ=new B.x(0,-14)
D.e7l=new B.x(0,-17)
D.e7m=new B.x(0,-18)
D.e7n=new B.x(0,-19)
D.e7o=new B.x(0,-20)
D.e7r=new B.x(0,-26)
D.e7s=new B.x(0,-28)
D.e7t=new B.x(0,-31)
D.e7u=new B.x(0,-32)
D.wj=new B.x(0,-6)
D.e7v=new B.x(0,-6771)
D.e7w=new B.x(0,-9)
D.e7y=new B.x(-9.5,-11)
D.e7z=new B.x(10,20)
D.e7B=new B.x(10,-13)
D.e7C=new B.x(10,-22)
D.e7D=new B.x(10,-4)
D.a5D=new B.x(11,8)
D.e7F=new B.x(12,2)
D.e7G=new B.x(14,0)
D.e7H=new B.x(14,12)
D.aGU=new B.x(14,8)
D.e7I=new B.x(14,-17)
D.e7J=new B.x(14,-18)
D.aGV=new B.x(14,-3)
D.aGW=new B.x(14,-4)
D.e7K=new B.x(15,0)
D.e7L=new B.x(15,-12)
D.e7M=new B.x(16,-8)
D.e7N=new B.x(18,14)
D.e7O=new B.x(18,-12)
D.aH_=new B.x(20,0)
D.e7U=new B.x(20,15)
D.e7V=new B.x(20,-17)
D.e7W=new B.x(20,-3)
D.e7X=new B.x(21,8)
D.e7Z=new B.x(22,10)
D.aH0=new B.x(22,8)
D.e8_=new B.x(24,0)
D.e80=new B.x(24,2)
D.e82=new B.x(24,-18)
D.e83=new B.x(24,-22)
D.e84=new B.x(25,8)
D.e85=new B.x(26,0)
D.e8b=new B.x(28,-30)
D.e8g=new B.x(30,18)
D.e8h=new B.x(30,2)
D.e8i=new B.x(31,19)
D.e8j=new B.x(32,0)
D.aH3=new B.x(34,0)
D.aH4=new B.x(34,-32)
D.Ih=new B.x(36,0)
D.e8o=new B.x(3,-1)
D.e8r=new B.x(40,3)
D.e8v=new B.x(4,11)
D.e8y=new B.x(4,-2)
D.e8C=new B.x(5,0)
D.e8D=new B.x(5,17)
D.e8E=new B.x(5,6)
D.e8I=new B.x(6,11)
D.e8O=new B.x(8,7)
D.e8P=new B.x(8,-10)
D.e8Q=new B.x(8,-14)
D.e8R=new B.x(8,-3)
D.aH8=new B.x(9,0)
D.e8U=new B.x(-20.5,-17.6)
D.e8V=new B.x(-9,18.5)
D.e8Y=new B.x(-2.6,-1)
D.e8Z=new B.x(1.9,-0.8)
D.e91=new B.x(-0.22,0.09)
D.e96=new B.x(2.6,1)
D.e9d=new B.x(-9,12.2)
D.e9v=new B.x(-9,20.5)
D.e9N=new B.x(-10,0)
D.e9O=new B.x(-10,12)
D.aHf=new B.x(-10,4)
D.e9P=new B.x(-11,-2)
D.e9Q=new B.x(-13,-5)
D.e9R=new B.x(-14,0)
D.e9S=new B.x(-14,13)
D.e9T=new B.x(-14,2)
D.e9U=new B.x(-14,-12)
D.e9V=new B.x(-14,-19)
D.e9W=new B.x(-14,-23)
D.e9X=new B.x(-15,6)
D.e9Y=new B.x(-16,14)
D.e9Z=new B.x(-16,-8)
D.ea_=new B.x(-17,10)
D.ea0=new B.x(-17,-18)
D.ea1=new B.x(-17,-8)
D.ea3=new B.x(-18,20)
D.ea4=new B.x(-18,-9)
D.aHh=new B.x(-20,0)
D.ea6=new B.x(-20,16)
D.ea7=new B.x(-20,-9)
D.Sc=new B.x(-22,8)
D.ea8=new B.x(-22,-10)
D.ea9=new B.x(-22,-11)
D.eaa=new B.x(-24,10)
D.eab=new B.x(-24,11)
D.eac=new B.x(-24,14)
D.ead=new B.x(-24,-22)
D.eae=new B.x(-25,-11)
D.eaf=new B.x(-26,0)
D.eag=new B.x(-26,-18)
D.eah=new B.x(-2,9)
D.eai=new B.x(-2,-10)
D.eaj=new B.x(-2,-20)
D.eak=new B.x(-2,-9)
D.eal=new B.x(-32,0)
D.aHj=new B.x(-34,0)
D.eaq=new B.x(-40,3)
D.eas=new B.x(-4,11)
D.eat=new B.x(-4,-17)
D.eau=new B.x(-4,-2)
D.eaw=new B.x(-5,0)
D.eax=new B.x(-5,20)
D.eay=new B.x(-5,6)
D.eaz=new B.x(-6,26)
D.eaA=new B.x(-6,6)
D.eaB=new B.x(-6,-42)
D.eaC=new B.x(-7,-19)
D.eaD=new B.x(-7,-24)
D.eaE=new B.x(-8,-9)
D.a5H=new B.x(-9,0)
D.eaF=new B.x(-9,1)
D.eaG=new B.x(-9,-23)
D.fm1=new B.y("Thinking\u2026",null,A.hc,null,null,null,null,null,null,null,null,null)
D.ebC=new B.D(A.jF,D.fm1,null)
D.fCa=new B.y("Start from a ready-made board",null,A.fP,null,null,null,null,null,null,null,null,null)
D.ebN=new B.D(A5.vz,D.fCa,null)
D.bxs=new B.Q(4,0,4,14)
D.fht=new B.G(!0,A.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmY=new B.y("Games and little helpers for a spare minute.",null,D.fht,null,null,null,null,null,null,null,null,null)
D.ebX=new B.D(D.bxs,D.fmY,null)
D.fyV=new B.y("Tap to throw in a star",null,A.kI,null,null,null,null,null,null,null,null,null)
D.b6g=new B.co(A.A,null,null,D.fyV,null)
D.ehR=new B.cL(0,null,0,14,null,null,D.b6g,null)
D.daA=w([A.iC,A.bm],x.O)
D.aMa=new B.c_(A.A,0.5,A.x,null,0,D.daA,null,null)
D.eiz=new B.c_(A.A,0.5,A.x,null,0,D.ayv,null,null)
D.d1W=w([A.c,A.bK],x.O)
D.eiB=new B.c_(A.A,0.5,A.x,null,0,D.d1W,null,null)
D.diH=w([A.bO,A.h6],x.O)
D.aMb=new B.c_(A.A,0.5,A.x,null,0,D.diH,null,null)
D.cHL=w([A.c,A.bO],x.O)
D.eiF=new B.c_(A.t_,0.5,A.x,null,0,D.cHL,null,null)
D.bdI=new B.v(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.bja=new B.v(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.d0Y=w([D.bdI,D.afW,D.bja],x.O)
D.d8z=w([0,0.7,1],x.n)
D.eiH=new B.c_(A.t_,0.5,A.x,null,0,D.d0Y,D.d8z,null)
D.cy7=w([A.oI,A.aE,A.K],x.O)
D.dft=w([0.3,0.7,1],x.n)
D.eiJ=new B.c_(A.A,0.5,A.x,null,0,D.cy7,D.dft,null)
D.bn0=new B.v(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.dgT=w([A.fa,D.bn0],x.O)
D.eiL=new B.c_(A.t_,0.5,A.x,null,0,D.dgT,null,null)
D.cAX=w([A.ds,A.co],x.O)
D.eiM=new B.c_(A.A,0.5,A.x,null,0,D.cAX,null,null)
D.cXg=w([A.oI,A.aE,A.fz],x.O)
D.eiN=new B.c_(A.A,0.5,A.x,null,0,D.cXg,null,null)
D.cPv=w([A.fT,A.aT,A.d8],x.O)
D.eiP=new B.c_(A.t_,0.5,A.x,null,0,D.cPv,null,null)
D.dbb=w([A.h6,K.mX],x.O)
D.eiQ=new B.c_(A.t_,0.5,A.x,null,0,D.dbb,null,null)
D.bdX=new B.v(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.bbQ=new B.v(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cZw=w([D.bdX,D.bbQ],x.O)
D.eiS=new B.c_(A.A,0.5,A.x,null,0,D.cZw,null,null)
D.biz=new B.v(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.bgv=new B.v(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.bgz=new B.v(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.dl6=w([D.biz,D.bgv,D.bgz],x.O)
D.cW3=w([0,0.65,1],x.n)
D.eiT=new B.c_(L.aah,0.5,A.x,null,0,D.dl6,D.cW3,null)
D.eiU=new B.c_(A.A,0.5,A.x,null,0,D.auY,null,null)
D.djy=w([A.h6,A.hG],x.O)
D.ej0=new B.c_(A.A,0.5,A.x,null,0,D.djy,null,null)
D.aMf=new B.aR(9,9)
D.ej9=new B.aR(1.4,1.4)
D.eIF=new B.bk("Moon",1.62,4291941851)
D.eJc=new B.bk("Neptune",11.15,4284524026)
D.eJR=new B.bk("Sun",274,4294688548)
D.eK3=new B.bk("Mercury",3.7,4288455599)
D.eK8=new B.bk("Earth",9.81,4281908728)
D.eKa=new B.bk("Mars",3.71,4294472049)
D.eKs=new B.bk("Venus",8.87,4294759245)
D.eKz=new B.bk("Saturn",10.44,4294829706)
D.eKV=new B.bk("Jupiter",24.79,4294677052)
D.eOx=new B.a9(10,-8,18,-2)
D.eOy=new B.a9(14,-14,20,14)
D.eOz=new B.a9(20,-2,30,2)
D.eOB=new B.a9(4,-13,30,-3)
D.eOD=new B.a9(8,-7,12,7)
D.eOJ=new B.a9(-12,12,12,19)
D.eOK=new B.a9(-12,14,12,22)
D.eOL=new B.a9(-12,-22,12,8)
D.eOM=new B.a9(-12,-25,12,19)
D.eON=new B.a9(-12,-26,12,-6)
D.eOO=new B.a9(-12,-4,12,14)
D.eOP=new B.a9(-14,20,14,24)
D.eOQ=new B.a9(-14,6,14,10)
D.eOR=new B.a9(-14,-17,14,15)
D.eOS=new B.a9(-14,-26,14,18)
D.eOT=new B.a9(-14,-4,14,20)
D.eOU=new B.a9(-15,-29,15,25)
D.eOV=new B.a9(-16,-16,16,16)
D.eOW=new B.a9(-16,-22,-9,18)
D.eOX=new B.a9(-16,-24,16,-10)
D.eOY=new B.a9(-16,-2,16,20)
D.eP_=new B.a9(-18,20,18,24)
D.eP0=new B.a9(-18,-18,18,20)
D.eP1=new B.a9(-20,12,20,22)
D.eP2=new B.a9(-20,-28,20,26)
D.eP3=new B.a9(-22,14,22,18)
D.aML=new B.a9(-22,-26,22,24)
D.eP4=new B.a9(-22,-3,22,3)
D.eP5=new B.a9(-22,-4,22,12)
D.eP6=new B.a9(-24,-12,10,22)
D.eP7=new B.a9(-24,-14,22,8)
D.eP8=new B.a9(-24,-6,24,20)
D.aMM=new B.a9(-24,-9,24,9)
D.eP9=new B.a9(-25,14,25,19)
D.ePa=new B.a9(-26,-14,14,8)
D.ePb=new B.a9(-26,-4,26,20)
D.ePc=new B.a9(-26,-6,4,6)
D.aMN=new B.a9(-28,-13,28,13)
D.ePd=new B.a9(-28,-16,28,16)
D.ePe=new B.a9(-28,-16,28,8)
D.ePf=new B.a9(-28,-22,28,22)
D.ePg=new B.a9(-30,-12,30,14)
D.ePh=new B.a9(-30,-14,0,14)
D.ePi=new B.a9(-30,-18,30,20)
D.ePj=new B.a9(-30,-28,30,14)
D.ePk=new B.a9(-30,-2,30,18)
D.ePl=new B.a9(-30,-4,30,18)
D.ePm=new B.a9(-32,-17,32,17)
D.ePn=new B.a9(-32,-28,32,18)
D.ePo=new B.a9(-33,-21,33,17)
D.ePp=new B.a9(-34,14,34,26)
D.a6D=new B.a9(-34,-18,34,18)
D.ePq=new B.a9(-34,-4,34,7)
D.ePr=new B.a9(-36,-24,36,20)
D.ePs=new B.a9(-38,-22,38,22)
D.ePt=new B.a9(-3,12,3,22)
D.ePu=new B.a9(-3,5,3,15)
D.ePw=new B.a9(-46,-34,46,28)
D.ePx=new B.a9(-48,-3,48,3)
D.ePA=new B.a9(-6,18,24,24)
D.ePB=new B.a9(-6,5,6,12)
D.ePC=new B.a9(-6,-22,6,-15)
D.ePD=new B.a9(-9,-16,9,22)
D.ePE=new B.a9(-4.5,-24,4.5,-21.2)
D.ePG=new B.a9(14,-9,17.5,9)
D.e6s={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aNH=new B.dC(D.e6s,5,x.R)
D.e6_={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eSO=new B.dC(D.e6_,10,x.R)
D.eV1=new B.as(24,44)
D.eVp=new B.as(54,38)
D.eVw=new B.as(66,38)
D.b7z=new B.fi(2,null,null,null,null,A.by,null,null,null,null)
D.eWw=new B.a7(16,16,D.b7z,null)
D.aOH=new B.hP(3,12,12,0.82,null)
D.fDR=new B.y("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aOS=new B.b1(D.fDR,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.dbe=w([A.cs,A.bH,A.bn,A.aR,A.pA,A.cs],x.O)
D.f1s=new B.fW(A.A,0,6.283185307179586,A.x,D.dbe,null,null)
D.fas=new B.G(!0,A.aT,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Qf,null,null,null)
D.f2H=new B.eR("You are here (Sun)",null,null,A.d_,null,null,null,null,null,null,D.fas)
D.aRk=new B.G(!0,A.aA,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2I=new B.eR("What we see",null,null,A.d_,null,null,null,null,null,null,D.aRk)
D.f7P=new B.G(!0,A1.Eu,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2L=new B.eR("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.d_,null,null,null,null,null,null,D.f7P)
D.fcD=new B.G(!0,A.ko,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2R=new B.eR("AI",null,null,A.d_,null,null,null,null,null,null,D.fcD)
D.aPG=new B.G(!0,A.c_,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f36=new B.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3C=new B.G(!0,A.bj,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3W=new B.G(!0,A.cn,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4r=new B.G(!0,A.c_,null,null,null,null,11,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4w=new B.G(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4M=new B.G(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5e=new B.G(!0,A.aQ,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5D=new B.G(!0,A.c_,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5N=new B.G(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTq=new B.cS(A.ig,A.dD,6)
D.d4L=w([D.eTq],x.q)
D.f66=new B.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d4L,null,null,null)
D.f6a=new B.G(!0,A.ek,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6e=new B.G(!0,A.c_,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6Q=new B.G(!0,A.c_,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6Y=new B.G(!0,A.aA,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6Z=new B.G(!0,A.c_,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7T=new B.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8n=new B.G(!0,A.aA,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8T=new B.G(!0,A.aT,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTt=new B.cS(A.aW,A.J,3)
D.ayJ=w([D.eTt],x.q)
D.f8W=new B.G(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ayJ,null,null,null)
D.f90=new B.G(!0,A.c,null,null,null,null,12.5,A.a6,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9I=new B.G(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Qf,null,null,null)
D.fah=new B.G(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faH=new B.G(!0,A.tq,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbg=new B.G(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbl=new B.G(!0,A.c_,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbq=new B.G(!0,A.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc8=new B.G(!0,A.n_,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc9=new B.G(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fco=new B.G(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQL=new B.G(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTg=new B.cS(A.w,A.J,5)
D.cTE=w([D.eTg],x.q)
D.fcX=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cTE,null,null,null)
D.fd1=new B.G(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ayJ,null,null,null)
D.fdh=new B.G(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdn=new B.G(!0,A.fU,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdE=new B.G(!0,A.c_,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe8=new B.G(!0,A.bn,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feH=new B.G(!0,A.c_,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffk=new B.G(!0,A.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fft=new B.G(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffW=new B.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgc=new B.G(!0,A.aT,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgw=new B.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgz=new B.G(!0,A.aT,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhj=new B.G(!0,A.aQ,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhw=new B.G(!0,A.c,null,null,null,null,13,A.a6,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhJ=new B.G(!0,A.tq,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi3=new B.G(!0,A.bn,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6h=new B.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fis=new B.y("\u26a0\ufe0f ",null,D.f6h,null,null,null,null,null,null,null,null,null)
D.fiE=new B.y("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.wA,null,null,null,null,null,null,null,null,null)
D.fk7=new B.y("Pick one, then change it and see what happens.",null,A.wA,null,null,null,null,null,null,null,null,null)
D.fkb=new B.y("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.f7m=new B.G(!0,A.ad,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl5=new B.y("What do you want to invent? Type it below, or tap an idea.",null,D.f7m,null,null,null,null,null,null,null,null,null)
D.fmz=new B.y("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fna=new B.y("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fnf=new B.y("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fnN=new B.y("Make it yours",null,A.ki,null,null,null,null,null,null,null,null,null)
D.fo4=new B.y("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a7Y,null,null,null,null,null,null,null,null,null)
D.fbA=new B.G(!0,A.k0,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqq=new B.y("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.fbA,null,null,null,null,null,null,null,null,null)
D.fqQ=new B.y("5G",null,S.aQ8,null,null,null,null,null,null,null,null,null)
D.fdU=new B.G(!0,A.c_,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frY=new B.y("WHAT HAPPENS",null,D.fdU,null,null,null,null,null,null,null,null,null)
D.ftE=new B.y("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fuj=new B.y("Change the words and pictures on the three slabs.",null,A.wA,null,null,null,null,null,null,null,null,null)
D.fuu=new B.y("All the parts and wires will be removed.",null,A.hW,null,null,null,null,null,null,null,null,null)
D.fuO=new B.y("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fvn=new B.y("Tap the crank on the board again and again to spin it faster.",null,A.hc,null,null,null,null,null,null,null,null,null)
D.fwz=new B.y("\ud83c\udfaf Challenges",null,A.de,null,null,null,null,null,null,null,null,null)
D.fx4=new B.y("Remove this part",null,X.aPL,null,null,null,null,null,null,null,null,null)
D.fxm=new B.y("Clear the board?",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fdo=new B.G(!0,A.bu,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxC=new B.y("How the Lab works",null,D.fdo,null,null,null,null,null,null,null,null,null)
D.f4Y=new B.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxW=new B.y("Electronics Lab",null,D.f4Y,null,null,null,null,A.a2,null,1,null,null)
D.fxZ=new B.y("?",null,L.aRf,null,null,null,null,null,null,null,null,null)
D.fbv=new B.G(!0,A.aR,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy3=new B.y("Planet Earth",null,D.fbv,null,null,null,null,null,null,null,null,null)
D.fzg=new B.y("Ready-made circuits",null,A.de,null,null,null,null,null,null,null,null,null)
D.fzU=new B.y("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hc,null,null,null,null,null,null,null,null,null)
D.fAc=new B.y("UNIVERSE EXPLORER",null,H.a7W,null,null,null,null,null,null,null,null,null)
D.fgf=new B.G(!0,A.aT,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDg=new B.y("\u26a0 There is no air here, so a parachute will not work.",null,D.fgf,null,null,null,null,null,null,null,null,null)
D.fEs=new B.y("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,X.aPK,null,null,null,null,null,null,null,null,null)
D.fEW=new B.y("NGMY",null,A.uR,null,null,null,null,null,null,null,null,null)
D.fF8=new B.y("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.TU,null,null,null,null,null,null,null,null,null)
D.fFv=new B.y("Tap it to change its setting. Drag from the right dot to connect.",null,A.lA,null,null,null,null,null,null,null,null,null)
D.fGw=new B.y("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.wA,null,null,null,null,null,null,null,null,null)
D.fGy=new B.y("TOOLBOX",null,H.a7W,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hd0=null
$.hd_=null
$.hj6=0
$.hL7=B.U(x.N,x.k)
$.hLI=B.U(x.N,x.k)
$.hcl=null
$.hLt=B.U(x.N,x.k)
$.hMw=B.U(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ih7","bD2",()=>{var v="led"
return B.a([C.axL("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fdU(),v),C.axL("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fdV(),v),C.axL("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fdW(),v),C.axL("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fe2(),v),C.axL("Not both","Make the light go OFF only when both switches are ON.",2,new C.fe3(),v),C.axL("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fe4(),"buzzer")],B.ax("O<ba6>"))})
w($,"ihz","bD3",()=>B.a([C.Q5("UNIVERSE","Earth, space and gravity",A.O0,A.aR,new C.fek()),C.Q5("ELECTRONICS LAB","Batteries, wires, real circuits",Ad.BJ,A.aR,new C.fel()),C.Q5("DISCOVERY LAB","Body Explorer: a real 3D human",D.bFO,A.bn,new C.fem()),C.Q5("TOOLBOX","Converter, clock, games",R.ald,A.cY,new C.fen()),C.Q5("REACTION LAB","Wire parts together",A.C4,A.bu,new C.feo()),C.Q5("SPARK PAINTER","Paint with light",A.a04,A.c5,new C.fep()),C.Q5("ROCKET LANDER","Land softly on the pad",A.o4,A.aR,new C.feq()),C.Q5("TITLE ANIMATOR","Make a moving title",A.yx,A.bH,new C.fer()),C.Q5("CIRCUIT LAB","Connect logic, learn it",A.a0v,A.cn,new C.fes())],B.ax("O<brJ>")))
w($,"ij6","qi",()=>{var v,u,t=B.U(x.N,x.E)
for(v=0;v<76;++v){u=D.Qx[v]
t.n(0,u.a,u)}return t})
w($,"ih8","ahw",()=>B.a([C.Fz("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fe5()),C.Fz("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fe6()),C.Fz("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fe7()),C.Fz("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fe8()),C.Fz("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fe9()),C.Fz("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fdX()),C.Fz("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fdY()),C.Fz("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fdZ()),C.Fz("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fe_()),C.Fz("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fe0()),C.Fz("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fe1())],B.ax("O<ba7>")))
w($,"ihB","hrA",()=>B.a([C.a0v("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aT,A.c9,new C.feA()),C.a0v("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cs,A.bx,new C.feB()),C.a0v("Breathe","Calm down in a minute","\ud83e\udee7",A.iE,A.cB,new C.feC()),C.a0v("Draw Pad","Sketch and share","\ud83c\udfa8",A.bA,A.b5,new C.feD()),C.a0v("Memory Match","Find the pairs","\ud83c\udccf",A.aR,A.c8,new C.feE()),C.a0v("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bH,A.bc,new C.feF()),C.a0v("Tip & Split","Share the bill","\ud83e\uddfe",A.bn,A.aZ,new C.feG()),C.a0v("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.by,A.aF,new C.feH())],B.ax("O<bt2>")))
w($,"ihA","hrz",()=>B.a([C.aeO("EARTH GLOBE","Turn it, tap a country",A.o1,A.aR,new C.fet()),C.aeO("SOLAR SYSTEM","The Sun and its worlds",D.bFS,A.aT,new C.feu()),C.aeO("GRAVITY LAB","Drop, weigh, orbit",D.amk,A.cY,new C.fev()),C.aeO("BLACK HOLE","Throw in a star",A.FW,A.by,new C.few()),C.aeO("GALAXY","Build, tilt, collide",A.yg,A.h4,new C.fex()),C.aeO("SIZE COMPARE","Earth next to a star",D.bG8,A.c5,new C.fey()),C.aeO("SEASONS & MOON","Why it is summer",A.vK,A.bu,new C.fez())],B.ax("O<bsY>")))})()};
(a=>{a["+yrY+rK86bc87jOC5TeYp1tN3ag="]=a.current})($__dart_deferred_initializers__);