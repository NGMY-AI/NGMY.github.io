((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A_,A8,A0,A1,H,A2,W,A9,A3,A4,G,Aa,A5,Ab,X,Ac,Ad,Q,N,Ae,Af,Y,O,R,Ag,L,Ah,Ai,S,I,P,Aj,E,F,K,C={
bym(d){return C.hPs(d)},
hPs(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bym=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.qT(B.n2(""),d,A.hC,null,null).d7(0,A.Yo),$async$bym)
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
return B.i($async$bym,v)},
i09(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Q9[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cU(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fZ(D.Q9,new C.fuM())
if(w==null)w=A.d.gH(D.Q9)
s=B.U(x.N,x.F)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.L)(r),++u){l=r[u].a
k=l[0]
l=$.qg().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.L)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.ajA(w.a,w.b,m,w,s,!1)},
hUP(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.M(D.QA,new C.fkq(),x.bd).aH(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
i7Y(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
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
if(!$.qg().ai(0,p)||J.f1(s,o)||J.ad(t)>=8)continue
J.cd(s,o)
n=B.U(a5,a8)
for(a9=0;a9<4;++a9){m=D.djS[a9]
l=J.q(q,m)
if(typeof l=="number")J.aG(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?B.e1(J.q(q,"x")):0.2+A.k.E(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?B.e1(J.q(q,"y")):0.25+A.k.am(r,3)*0.3,0.1,0.9)
J.cd(t,new B.e8([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aW(a6.a(J.q(u,"wires")));a5.C();){h=a5.gT(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.u(J.q(g,0))
e=B.u(J.q(g,2))
d=A.o.D(A.k.N(B.e1(J.q(g,1))),0,1)
a0=A.o.D(A.k.N(B.e1(J.q(g,3))),0,1)
if(J.f1(s,f)&&J.f1(s,e)&&!J.A(f,e))J.cd(i,new B.cu([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.Q.a(J.q(u,"steps"))
a0=J.aW(a0==null?A.cC:a0)
while(a0.C()){a2=a0.gT(a0)
J.cd(a1,B.u(a2))}a3=a1
a0=J.q(u,"title")
a0=B.u(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new C.mz(a0,B.u(a1==null?"":a1),t,i,A.U)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=B.u(a5==null?"":a5)
return new C.ajA(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hZK(d){var w,v,u=C.h4u()
d.B(u)
for(w=0;w<60;++w)u.v5(0,0.03333333333333333)
v=u.a
return A.d.b4(v,new C.frx(u))&&!A.d.d8(v,new C.fry())},
hZJ(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.U(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.L)(l),++u){t=l[u];++v
k.n(0,t.a,$.qg().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.L)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.u(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.dia,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aH(q,", ")+")"
s.push(B.u(p)+n+": "+o+", current "+A.k.ab(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.L)(w),++u){m=w[u]
l.push(B.u(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.u(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aH(s,"\n")+"\nWires: "+A.d.aH(l,"; ")},
hO1(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.L)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aH(v,"\n")+"\n\n"}v=A.d.aH(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
i08(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qg().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.QA[u]
if(A.d.b4(w,new C.fuJ(s)))if(!B.cU(r,s.b.toLowerCase(),0))v=B.cU(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.a_(w,new C.fuK(e),B.T(w).k("a_<1>")).gal(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ab(A.d.cM(w,0,new C.fuL())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qg().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ajA:function ajA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fuM:function fuM(){},
fkq:function fkq(){},
frx:function frx(d){this.a=d},
fry:function fry(){},
fuJ:function fuJ(d){this.a=d},
fuK:function fuK(d){this.a=d},
fuL:function fuL(){},
Vi:function Vi(d,e){this.c=d
this.a=e},
bjc:function bjc(d,e,f,g,h){var _=this
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
e7g:function e7g(d){this.a=d},
e7h:function e7h(d,e,f){this.a=d
this.b=e
this.c=f},
e7i:function e7i(d){this.a=d},
e7t:function e7t(d){this.a=d},
e7u:function e7u(d,e){this.a=d
this.b=e},
e7p:function e7p(d){this.a=d},
e7n:function e7n(d,e){this.a=d
this.b=e},
e7o:function e7o(d,e,f){this.a=d
this.b=e
this.c=f},
e7q:function e7q(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e7l:function e7l(d){this.a=d},
e7m:function e7m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7r:function e7r(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e7k:function e7k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7s:function e7s(d,e){this.a=d
this.b=e},
e7j:function e7j(d,e){this.a=d
this.b=e},
e7x:function e7x(d){this.a=d},
e7w:function e7w(d){this.a=d},
e7y:function e7y(d){this.a=d},
e7v:function e7v(d){this.a=d},
e7z:function e7z(d,e){this.a=d
this.b=e},
e7A:function e7A(d,e){this.a=d
this.b=e},
e7B:function e7B(d,e){this.a=d
this.b=e},
e7C:function e7C(d,e){this.a=d
this.b=e},
byH(d,e,f){var w=null
return B.w(B.a([B.d(d,w,w,w,w,w,w,D.f6k,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
hhZ(d,e,f,g){var w=null,v=B.n(24),u=B.I(f.j(0.6),A.q,1)
return B.au(B.p(w,B.w(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.an,B.d(e,w,w,w,w,w,w,A.DD,A.L,w,w),A.aB,B.bZ(A.fQ,g,A.br,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new B.o(D.ba3,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
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
VF:function VF(d){this.a=d},
aDO:function aDO(d,e,f,g,h,i,j,k,l,m){var _=this
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
elw:function elw(){},
elQ:function elQ(d){this.a=d},
elP:function elP(d,e){this.a=d
this.b=e},
elR:function elR(){},
elS:function elS(){},
ely:function ely(d,e,f){this.a=d
this.b=e
this.c=f},
elx:function elx(d,e){this.a=d
this.b=e},
eln:function eln(d){this.a=d},
elo:function elo(d){this.a=d},
elp:function elp(d){this.a=d},
elq:function elq(d){this.a=d},
elr:function elr(d){this.a=d},
els:function els(d){this.a=d},
elt:function elt(d){this.a=d},
elu:function elu(d){this.a=d},
elv:function elv(d){this.a=d},
ell:function ell(d){this.a=d},
elm:function elm(d){this.a=d},
elk:function elk(d){this.a=d},
elJ:function elJ(d,e){this.a=d
this.b=e},
elE:function elE(d){this.a=d},
elF:function elF(d){this.a=d},
elB:function elB(d){this.a=d},
elG:function elG(d){this.a=d},
elA:function elA(d){this.a=d},
elH:function elH(d){this.a=d},
elI:function elI(d){this.a=d},
elz:function elz(d){this.a=d},
elK:function elK(d,e){this.a=d
this.b=e},
elD:function elD(d,e){this.a=d
this.b=e},
elL:function elL(d){this.a=d},
elM:function elM(d){this.a=d},
elN:function elN(d){this.a=d},
elO:function elO(d){this.a=d},
elC:function elC(d){this.a=d},
bgi:function bgi(d,e){this.b=d
this.a=e},
aLw:function aLw(){},
bwm:function bwm(){},
cFz(){var w=0,v=B.j(x.U),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cFz=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.qV().jG(0,"assets/data/body3d.bin"),$async$cFz)
case 3:d=a1
$.hdj=J.eZ(A.dC.gaP(d),d.byteOffset,d.byteLength)
t=B.aRE(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jq(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.d74[i]
g=B.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a2O(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aYO))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.b9s(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cFz,v)},
aRr:function aRr(d,e,f){this.a=d
this.b=e
this.c=f},
a2O:function a2O(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b9s:function b9s(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Uc:function Uc(d){this.a=d},
aCj:function aCj(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
dF5:function dF5(d){this.a=d},
dF4:function dF4(d,e){this.a=d
this.b=e},
dEI:function dEI(d,e){this.a=d
this.b=e},
dEJ:function dEJ(){},
dF6:function dF6(){},
dEK:function dEK(d,e){this.a=d
this.b=e},
dEL:function dEL(d){this.a=d},
dEM:function dEM(){},
dEN:function dEN(d){this.a=d},
dEP:function dEP(d,e){this.a=d
this.b=e},
dEO:function dEO(d){this.a=d},
dEF:function dEF(d,e,f){this.a=d
this.b=e
this.c=f},
dEG:function dEG(d){this.a=d},
dEH:function dEH(d){this.a=d},
dEW:function dEW(d){this.a=d},
dEX:function dEX(d,e){this.a=d
this.b=e},
dEY:function dEY(d,e){this.a=d
this.b=e},
dEZ:function dEZ(d){this.a=d},
dEV:function dEV(d,e){this.a=d
this.b=e},
dF_:function dF_(d,e){this.a=d
this.b=e},
dEU:function dEU(d,e){this.a=d
this.b=e},
dF0:function dF0(d){this.a=d},
dET:function dET(d){this.a=d},
dF1:function dF1(d){this.a=d},
dES:function dES(d){this.a=d},
dF2:function dF2(d){this.a=d},
dER:function dER(d){this.a=d},
dF3:function dF3(d){this.a=d},
dEQ:function dEQ(d){this.a=d},
aKG:function aKG(){},
aKH:function aKH(){},
c0L:function c0L(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c0M:function c0M(d,e){this.a=d
this.b=e},
c0N:function c0N(d){this.a=d},
axO(d,e,f,g,h){return new C.ba9(d,e,f,g,h)},
fW8(d,e,f,g,h,i){return $.hLp.ca(0,d+"|"+B.u(e)+"|"+f.l()+"|"+B.u(g),new C.cMk(d,e,f,i,g,h))},
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
nm:function nm(d,e,f){this.a=d
this.b=e
this.c=f},
ba9:function ba9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fef:function fef(){},
feg:function feg(){},
feh:function feh(){},
feo:function feo(){},
fep:function fep(){},
feq:function feq(){},
Uh:function Uh(d){this.a=d},
aCl:function aCl(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
dH3:function dH3(d){this.a=d},
dGI:function dGI(d,e){this.a=d
this.b=e},
dGL:function dGL(){},
dH4:function dH4(){},
dGG:function dGG(d,e){this.a=d
this.b=e},
dGH:function dGH(d,e){this.a=d
this.b=e},
dGM:function dGM(d,e,f){this.a=d
this.b=e
this.c=f},
dGB:function dGB(){},
dGC:function dGC(){},
dGD:function dGD(d){this.a=d},
dGE:function dGE(d,e){this.a=d
this.b=e},
dGF:function dGF(d,e,f){this.a=d
this.b=e
this.c=f},
dGN:function dGN(){},
dGO:function dGO(d,e){this.a=d
this.b=e},
dGP:function dGP(d){this.a=d},
dGK:function dGK(d,e){this.a=d
this.b=e},
dGJ:function dGJ(d){this.a=d},
dGA:function dGA(d,e,f){this.a=d
this.b=e
this.c=f},
dGY:function dGY(d){this.a=d},
dGX:function dGX(d){this.a=d},
dGZ:function dGZ(d){this.a=d},
dGW:function dGW(d){this.a=d},
dGU:function dGU(d){this.a=d},
dGV:function dGV(d){this.a=d},
dGT:function dGT(d){this.a=d},
dGQ:function dGQ(d){this.a=d},
dGS:function dGS(d){this.a=d},
dH_:function dH_(d,e){this.a=d
this.b=e},
dH0:function dH0(d,e){this.a=d
this.b=e},
dH1:function dH1(d){this.a=d},
dGR:function dGR(d){this.a=d},
dH2:function dH2(d,e){this.a=d
this.b=e},
bas:function bas(d,e){this.b=d
this.a=e},
cMk:function cMk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aKL:function aKL(){},
bwa:function bwa(){},
hCg(){return new C.Ni(null)},
Ki(d,e,f,g,h){return new C.brN(d,e,f,g,h)},
bqc(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fWE(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Ni:function Ni(d){this.a=d},
Kl:function Kl(d,e){this.a=d
this.b=e},
AA:function AA(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aCC:function aCC(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dMU:function dMU(d,e){this.a=d
this.b=e},
dMT:function dMT(d){this.a=d},
dMW:function dMW(d,e){this.a=d
this.b=e},
dMV:function dMV(d){this.a=d},
brN:function brN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
feG:function feG(){},
feH:function feH(){},
feI:function feI(){},
feJ:function feJ(){},
feK:function feK(){},
feL:function feL(){},
feM:function feM(){},
feN:function feN(){},
feO:function feO(){},
feP:function feP(){},
bqd:function bqd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eVO:function eVO(d){this.a=d},
eVN:function eVN(d,e){this.a=d
this.b=e},
eVL:function eVL(d){this.a=d},
eVP:function eVP(d){this.a=d},
eVM:function eVM(d,e){this.a=d
this.b=e},
aeA:function aeA(d,e,f){this.c=d
this.d=e
this.a=f},
ads:function ads(d,e,f){this.c=d
this.d=e
this.a=f},
Q_:function Q_(d,e,f,g,h,i,j,k,l,m){var _=this
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
brb:function brb(d,e){this.b=d
this.a=e},
bqH:function bqH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9a:function b9a(d,e){this.b=d
this.a=e},
aGN:function aGN(d,e){this.c=d
this.a=e},
aGO:function aGO(d,e,f){var _=this
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
eVu:function eVu(d){this.a=d},
eVt:function eVt(d){this.a=d},
eVs:function eVs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVr:function eVr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVp:function eVp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVo:function eVo(d,e,f){this.a=d
this.b=e
this.c=f},
eVq:function eVq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eVn:function eVn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVC:function eVC(d){this.a=d},
eVB:function eVB(d){this.a=d},
eVD:function eVD(d,e){this.a=d
this.b=e},
eVE:function eVE(d,e){this.a=d
this.b=e},
eVF:function eVF(d,e){this.a=d
this.b=e},
eVA:function eVA(d,e,f){this.a=d
this.b=e
this.c=f},
eVG:function eVG(d,e,f){this.a=d
this.b=e
this.c=f},
eVz:function eVz(d){this.a=d},
eVv:function eVv(d){this.a=d},
eVH:function eVH(d){this.a=d},
eVI:function eVI(d){this.a=d},
eVy:function eVy(d,e){this.a=d
this.b=e},
eVJ:function eVJ(d,e){this.a=d
this.b=e},
eVx:function eVx(d,e){this.a=d
this.b=e},
eVK:function eVK(d,e){this.a=d
this.b=e},
eVw:function eVw(d,e){this.a=d
this.b=e},
eVl:function eVl(){},
eVm:function eVm(){},
bpQ:function bpQ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bph:function bph(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9P:function b9P(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpj:function bpj(d,e,f){this.b=d
this.c=e
this.a=f},
btg:function btg(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aMm:function aMm(){},
hjo(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new B.x(w,0)),u=e.aF(0,new B.x(w,0)),t=1-f,s=3*t
return d.aJ(0,t*t*t).ad(0,v.aJ(0,s*t*f)).ad(0,u.aJ(0,s*f*f)).ad(0,e.aJ(0,f*f*f))},
bgh(d,e,f,g,h,i){return $.hM_.ca(0,d+"|"+B.u(e)+"|"+f.l()+"|"+B.u(g),new C.dhe(d,e,f,i,g,h))},
a01:function a01(d,e){this.a=d
this.b=e},
q4:function q4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qM:function qM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Cn:function Cn(d,e){this.a=d
this.b=e},
Z0:function Z0(d,e){this.a=d
this.b=e},
aeq:function aeq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0e:function a0e(d,e,f,g,h,i){var _=this
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
abn:function abn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abD:function abD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adw:function adw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgf:function bgf(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.R$=t
_.bt$=_.bG$=0},
dhi:function dhi(d){this.a=d},
dhj:function dhj(d){this.a=d},
dhf:function dhf(d,e){this.a=d
this.b=e},
dhg:function dhg(d){this.a=d},
dhh:function dhh(d){this.a=d},
dhk:function dhk(d){this.a=d},
dhl:function dhl(d){this.a=d},
dhm:function dhm(d){this.a=d},
dhn:function dhn(d){this.a=d},
dho:function dho(d){this.a=d},
dhp:function dhp(d){this.a=d},
dhq:function dhq(d){this.a=d},
dhr:function dhr(d){this.a=d},
dhs:function dhs(d){this.a=d},
FN:function FN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VE:function VE(d){this.a=d},
aDN:function aDN(d,e,f,g,h,i,j){var _=this
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
ekR:function ekR(d){this.a=d},
ekG:function ekG(d){this.a=d},
ekI:function ekI(){},
ekJ:function ekJ(){},
ekM:function ekM(){},
ekN:function ekN(d,e,f){this.a=d
this.b=e
this.c=f},
ekO:function ekO(d){this.a=d},
ekP:function ekP(d){this.a=d},
ekK:function ekK(){},
ekL:function ekL(d){this.a=d},
elg:function elg(d){this.a=d},
ekQ:function ekQ(){},
ekC:function ekC(d){this.a=d},
ekT:function ekT(d){this.a=d},
ekS:function ekS(d){this.a=d},
ekV:function ekV(){},
ekU:function ekU(d,e){this.a=d
this.b=e},
ekF:function ekF(){},
ekD:function ekD(d){this.a=d},
ekE:function ekE(d){this.a=d},
ele:function ele(d){this.a=d},
eld:function eld(d){this.a=d},
elf:function elf(d){this.a=d},
el4:function el4(d,e){this.a=d
this.b=e},
elc:function elc(d){this.a=d},
ela:function ela(d){this.a=d},
elb:function elb(d){this.a=d},
el9:function el9(d){this.a=d},
el8:function el8(d){this.a=d},
el5:function el5(d){this.a=d},
el6:function el6(d){this.a=d},
el7:function el7(d){this.a=d},
ekH:function ekH(){},
el0:function el0(d){this.a=d},
el1:function el1(d){this.a=d},
el_:function el_(d){this.a=d},
el2:function el2(d){this.a=d},
ekZ:function ekZ(d){this.a=d},
el3:function el3(d){this.a=d},
ekY:function ekY(d){this.a=d},
ekX:function ekX(d){this.a=d},
ekW:function ekW(d,e){this.a=d
this.b=e},
bgg:function bgg(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dhe:function dhe(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aLu:function aLu(){},
bkE:function bkE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
PR:function PR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
VT:function VT(d){this.a=d},
bjL:function bjL(d,e,f,g,h,i,j,k){var _=this
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
ewX:function ewX(d){this.a=d},
ewV:function ewV(d){this.a=d},
ewW:function ewW(){},
ewy:function ewy(){},
ewx:function ewx(){},
ewH:function ewH(d,e){this.a=d
this.b=e},
ewJ:function ewJ(d){this.a=d},
ewN:function ewN(d){this.a=d},
ewI:function ewI(d){this.a=d},
ewO:function ewO(d){this.a=d},
ewP:function ewP(d){this.a=d},
ewQ:function ewQ(d,e){this.a=d
this.b=e},
ewG:function ewG(d,e){this.a=d
this.b=e},
ewR:function ewR(d){this.a=d},
ewF:function ewF(d){this.a=d},
ewS:function ewS(d,e){this.a=d
this.b=e},
ewE:function ewE(d,e){this.a=d
this.b=e},
ewT:function ewT(d){this.a=d},
ewD:function ewD(d,e){this.a=d
this.b=e},
ewU:function ewU(d){this.a=d},
ewC:function ewC(d){this.a=d},
ewK:function ewK(d){this.a=d},
ewB:function ewB(d){this.a=d},
ewL:function ewL(d){this.a=d},
ewA:function ewA(d){this.a=d},
ewM:function ewM(d,e){this.a=d
this.b=e},
ewz:function ewz(d,e){this.a=d
this.b=e},
br6:function br6(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
W3:function W3(d){this.a=d},
aE2:function aE2(d,e,f,g){var _=this
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
eD5:function eD5(d,e){this.a=d
this.b=e},
eD6:function eD6(d,e,f){this.a=d
this.b=e
this.c=f},
eD7:function eD7(d){this.a=d},
eD4:function eD4(){},
eD8:function eD8(d,e){this.a=d
this.b=e},
eD3:function eD3(d,e){this.a=d
this.b=e},
eD9:function eD9(d,e){this.a=d
this.b=e},
eD2:function eD2(d,e){this.a=d
this.b=e},
eDa:function eDa(d){this.a=d},
eD1:function eD1(d){this.a=d},
eDb:function eDb(d,e){this.a=d
this.b=e},
eD0:function eD0(d,e){this.a=d
this.b=e},
eDc:function eDc(d){this.a=d},
eDd:function eDd(d){this.a=d},
eD_:function eD_(d,e){this.a=d
this.b=e},
aLD:function aLD(){},
aLI:function aLI(){},
fY6(d,e,f){var w=null,v=e.j(0.12),u=B.n(16),t=B.I(e.j(0.4),A.q,1),s=x.p,r=B.a([B.E(B.d(d,w,w,w,w,w,w,D.aRk,w,w,w),1)],s)
if(f!=null)A.d.v(r,B.a([A.ab,f],s))
return B.p(w,B.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.im,w,w,1/0)},
a1s(d,e){var w,v,u,t
for(w=new B.X6(d),v="";w.C();){u=B.jH(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+B.jH(65+A.o.E(A.o.E(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
ial(d,e){var w,v,u,t,s,r,q,p=B.af("[^A-Z]",!0,!1,!1,!1),o=B.aK(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new B.X6(d),v=0,u="";w.C();){t=B.jH(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.E(v,p)
u+=B.jH(65+A.o.E(A.o.E(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
Ug:function Ug(d){this.a=d},
biA:function biA(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dGz:function dGz(d){this.a=d},
dGy:function dGy(d,e){this.a=d
this.b=e},
dGh:function dGh(){},
dGq:function dGq(d){this.a=d},
dGp:function dGp(){},
dGr:function dGr(d){this.a=d},
dGo:function dGo(){},
dGs:function dGs(d){this.a=d},
dGn:function dGn(d){this.a=d},
dGt:function dGt(d){this.a=d},
dGm:function dGm(d){this.a=d},
dGu:function dGu(d){this.a=d},
dGl:function dGl(d){this.a=d},
dGv:function dGv(d,e){this.a=d
this.b=e},
dGk:function dGk(d,e){this.a=d
this.b=e},
dGw:function dGw(d){this.a=d},
dGj:function dGj(d,e){this.a=d
this.b=e},
dGx:function dGx(d){this.a=d},
dGi:function dGi(d,e){this.a=d
this.b=e},
how(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aF(0,e).gcG()*0.1
return new B.x((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h4u(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a49(w,v,u,A.cS,B.U(x.N,x.y))},
hw7(d,e,f){var w=d.c,v=e===0?-1:1
return new B.x(w*f.a+v*C.h4v(d),d.d*f.b)},
h4v(d){return 42+(D.m2.ai(0,d.b)?(d.ch-1)*38:0)},
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
aa2:function aa2(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ab9:function ab9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a49:function a49(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bLC:function bLC(){},
bLN:function bLN(d){this.a=d},
bLI:function bLI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLO:function bLO(d){this.a=d},
bLP:function bLP(d){this.a=d},
bLR:function bLR(d){this.a=d},
bLS:function bLS(d){this.a=d},
bLQ:function bLQ(d){this.a=d},
bLT:function bLT(d,e,f){this.a=d
this.b=e
this.c=f},
bLU:function bLU(d){this.a=d},
bLE:function bLE(d){this.a=d},
bLF:function bLF(d){this.a=d},
bLD:function bLD(d){this.a=d},
bLG:function bLG(d,e,f){this.a=d
this.b=e
this.c=f},
bLH:function bLH(d){this.a=d},
bLB:function bLB(d){this.a=d},
bLV:function bLV(d,e){this.a=d
this.b=e},
bLJ:function bLJ(d,e){this.a=d
this.b=e},
bLM:function bLM(d){this.a=d},
bLL:function bLL(d){this.a=d},
bLK:function bLK(d){this.a=d},
ain:function ain(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bGp:function bGp(){},
bGq:function bGq(){},
mz:function mz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cl7:function cl7(d){this.a=d},
i7U(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.fGp(),c9=new C.fGr(),d0=new C.fGs(),d1=new C.fGq(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aD(w,d1.$3(new B.a9(w.a,w.b,w.c,w.d),A.bM,A.bK))
d3.bL(D.e9C,D.e7p,c9.$2(A.dI,1.4))
d3.bL(D.e7f,D.e7e,c9.$2(A.bq,2.4))
d3.bL(D.e7g,X.aGV,c9.$2(A.bq,2.4))
if(c7){d2=c8.$1(A.fe.j(0.5))
d2.z=A.Rn
d3.af(D.e7_,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.E(d2+v/3,1)
d6.$5(d3,"\u2744",new B.x(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aD(d0.$4(-22,-26,44,50),d1.$3(D.aMM,A.aO,A.cr))
d3.af(A.cH,16,c8.$1(A.bq))
d3.af(A.cH,13,c8.$1(c7?A.aP.j(0.85):A.M))
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
for(t=d5*0.8,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
s=Math.sin(v*2+d5)
r=c8.$1(A.c.j(0.8*(1-u))).K()
d2.drawCircle(s*9,4-u*12,1.6+u*2,r)
r.delete()}}d3.af(D.e9y,2.4,c8.$1(c7?A.bd:A.ak))
d3.af(D.eaf,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aD(d0.$5(-14,14,28,12,4),c8.$1(A.e2))
d2=$.W().r
t=x.v
q=new B.aO(d2,A.ao,c6,c6,B.a([],t))
q.F(new B.b5(-16,-26))
q.F(new B.ap(16,-26))
q.F(new B.ap(12,14))
q.F(new B.ap(-12,14))
q.F(new B.bE())
d3.aS(q,c8.$1(A.fe.j(0.35)))
if(c7){d2=new B.aO(d2,A.ao,c6,c6,B.a([],t))
d2.F(new B.b5(-14,-10))
d2.F(new B.ap(14,-10))
d2.F(new B.ap(12,14))
d2.F(new B.ap(-12,14))
d2.F(new B.bE())
d3.aS(d2,c8.$1(A.aw.j(0.7)))}d3.aS(q,c9.$2(A.ad,1.6))
d2=d3.a
J.bx(d2.save())
d2.translate(0,10)
d3.jp(0,d4.y)
d3.bL(D.a5H,D.aHa,c9.$2(A.bO,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.E(s+v*0.33,1)
r=c8.$1(A.f1).K()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aD(d0.$5(-10,-4,20,10,4),c8.$1(A.aJ))
d3.af(A.iu,3,c8.$1(c7?A.bd:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a3s[m]
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
d2.drawOval(B.bY(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
w.F(new B.b5(-24,-12))
w.F(new B.ap(10,-12))
w.F(new B.ap(10,2))
w.F(new B.ap(-2,2))
w.F(new B.ap(-6,22))
w.F(new B.ap(-16,22))
w.F(new B.ap(-14,2))
w.F(new B.ap(-24,2))
w.F(new B.bE())
d3.aS(w,d1.$3(D.eOA,A.aS,A.d8))
d3.b1(D.eO0,c8.$1(A.dv))
d2=d3.a
J.bx(d2.save())
d2.translate(18,-5)
d3.jp(0,d4.y*2)
d3.bL(A.J,D.e7j,c9.$2(A.bO,2.4))
d3.bL(A.a5G,D.e7i,c9.$2(A.ig,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dO.j(1-u)).K()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
d2.F(new B.b5(16,-6))
d2.F(new B.ap(52,-26))
d2.F(new B.ap(52,18))
d2.F(new B.ap(16,4))
d2.F(new B.bE())
d3.aS(d2,c8.$1(A.bL.j(0.35*v)))}d3.aD(d0.$5(-26,-6,30,12,3),d1.$3(D.eOG,A.bn,A.co))
k=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
k.F(new B.b5(4,-6))
k.F(new B.ap(18,-12))
k.F(new B.ap(18,12))
k.F(new B.ap(4,6))
k.F(new B.bE())
d3.aS(k,c8.$1(A.e2))
d3.af(D.e7n,7,c8.$1(c7?A.c:A.dv))
return!0
case"neon":d3.aD(d0.$5(-30,-14,60,28,6),c8.$1(K.mY))
if(c7)j=d4.ax>0.5||A.o.E(A.k.bm(d5*17),3)!==0
else j=!1
i=j?A.c5:D.biW
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c5.j(0.35))
t.z=A.mD
d3.aD(d2,t)}d3.aD(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.e9I,i,17)
return!0
case"microwave":d3.aD(d0.$4(-30,-18,60,38),d1.$3(D.eOM,A.bO,A.bn))
d2=d0.$5(-26,-14,38,30,3)
d3.aD(d2,c8.$1(c7?A.bL.j(0.75):A.av))
if(c7){d2=d3.a
J.bx(d2.save())
d2.translate(-7,8)
d3.jp(0,d4.y*0.5)
d3.hH(B.ci(A.J,7,22),c8.$1(A.d8))
d2.restore()}d3.aD(d0.$5(15,-14,12,12,2),c8.$1(K.mY))
if(c7)d6.$5(d3,"0:"+A.a.aX(A.o.u(59-A.o.E(A.k.bm(d5),60)),2,"0"),D.e7o,A.bk,6.5)
d3.af(D.e7A,4,c8.$1(A.dv))
return!0
case"doorbell":d3.aD(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.af(A.Sc,10,c8.$1(c7?A.bH:A.bq))
d2=d3.a
J.bx(d2.save())
d2.translate(0,-8)
d3.jp(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.eah,A.c,16)
d2.restore()
d3.af(A.ke,6,c8.$1(A.d0))
d3.af(A.ke,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=B.bV(A.Sc,14+v*6+A.k.E(t,6))
r=c9.$2(A.bH.j(0.9-v*0.3),1.8).K()
d2.drawArc.apply(d2,[B.bY(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bL(D.e9H,D.ead,c9.$2(A.bq,4))
d2=d3.a
J.bx(d2.save())
d3.jp(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aD(d0.$5(-24,-14,46,22,5),d1.$3(D.eOB,A.bO,A.ak))
d3.af(D.aGX,8,c8.$1(A.av))
d3.af(D.aGX,4.5,c8.$1(c7?A.aP:A.co))
d3.af(D.e9F,2.2,c8.$1(c7&&A.o.E(A.k.bm(d5*1.6),2)===0?A.aw:A.kt))
d2.restore()
if(c7)d6.$5(d3,"REC",D.e9Q,A.aw,9)
return!0
case"console":d3.aD(d0.$5(-28,-22,56,44,8),d1.$3(D.eOJ,A.j_,A.fa))
d3.aD(d0.$5(-20,-17,40,22,3),c8.$1(A.dH))
if(c7){d2=d5*2.3
d3.af(new B.x(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.b1(new B.a9(-18,t,-15.6,t+8),c8.$1(A.bk))
d2=-9+Math.sin(d2-0.4)*6
d3.b1(new B.a9(15.6,d2,18,d2+8),c8.$1(A.c5))}d3.af(D.e9B,4,c8.$1(A.aW))
d3.af(D.e7k,2.4,c8.$1(A.aw))
d3.af(D.e7x,2.4,c8.$1(A.bd))
return!0
case"heartmon":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(A.av))
d3.aD(d0.$5(-26,-18,52,28,3),c8.$1(A.dH))
if(c7){d2=$.W()
t=B.a([],x.v)
h=new B.aO(d2.r,A.ao,c6,c6,t)
for(d2=d5*0.5,l=-25;l<=25;++l){u=A.k.E((l+25)/50-d2,1)
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
h.e=null}}d3.aS(h,c9.$2(A.bk,1.8))
d6.$5(d3,"72",D.e7l,A.h3,11)
d2=d5*9
d6.$5(d3,"\u2665",D.e9U,A.h3.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.af(D.e9K,3,c8.$1(c7?A.bd:A.bq))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aD(d2,c8.$1(A.cB.j(c7?0.5:0.3)))
d3.aD(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.b1(D.eOD,c8.$1(F.th))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bx(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.v3(0,-1,1)
d3.hH(B.ci(A.J,8,14),c8.$1(A.cY))
d2=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
d2.F(new B.b5(-6,0))
d2.F(new B.ap(-12,-4))
d2.F(new B.ap(-12,4))
d2.F(new B.bE())
d3.aS(d2,c8.$1(A.c9))
d3.af(D.e81,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.E(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.E(v,2)
r=c9.$2(A.ad,1).K()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.W().r
t=x.v
e=new B.aO(d2,A.ao,c6,c6,B.a([],t))
e.F(new B.b5(-9,22))
e.F(new B.ap(-5,-16))
e.F(new B.ap(5,-16))
e.F(new B.ap(9,22))
e.F(new B.bE())
d3.aS(e,d1.$3(D.eP6,A.c,A.bx))
d3.b1(D.eP5,c8.$1(c7?A.dO:A.bq))
s=new B.aO(d2,A.ao,c6,c6,B.a([],t))
s.F(new B.b5(-7,-22))
s.F(new B.ap(0,-29))
s.F(new B.ap(7,-22))
s.F(new B.bE())
d3.aS(s,c8.$1(A.es))
if(c7){d=Math.sin(d4.y*0.3)
d2=new B.aO(d2,A.ao,c6,c6,B.a([],t))
d2.F(new B.b5(0,-19))
t=d*34
d2.F(new B.ap(t,-26))
d2.F(new B.ap(t,-12))
d2.F(new B.bE())
d3.aS(d2,c8.$1(A.dO.j(0.45)))
d2=c8.$1(A.dO.j(0.35))
d2.z=A.Rn
d3.af(D.e70,14,d2)}return!0
case"discoball":d3.bL(D.e75,I.aGT,c9.$2(A.dv,1.4))
d3.af(A.J,16,d1.$3(D.eOo,A.aO,A.ak))
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
a0=22+A.o.E(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.d83[A.o.E(v,4)].j(0.5+0.5*Math.sin(s+v))).K()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aD(d0.$5(-14,-4,28,24,5),d1.$3(D.eOm,A.cr,A.ak))
d3.aD(d0.$5(-12,-26,24,20,5),d1.$3(D.eOg,A.aL,A.bK))
d3.bL(D.e74,D.e76,c9.$2(A.bq,1.6))
d3.af(D.e77,2.2,c8.$1(c7?A.aw:A.bq))
a1=c7&&A.k.E(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a3u[m]
if(c7)t=a1?A.ba:A.f3
else t=A.co
r=c8.$1(t).K()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bx(d2.save())
d2.translate(14,0)
d3.jp(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bL(A.J,D.a5D,c9.$2(A.bK,4))
d2.restore()
d3.bL(D.e9u,D.e9O,c9.$2(A.bK,4))
d3.b1(D.eP4,c8.$1(c7?A.ba.j(0.7):A.aJ))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.axX[m]+1,d2,10,14,2)
p=B.aq(A.bL,A.d8,a2)
p.toString
r=c8.$1(p).K()
t.drawRRect(B.eT(s),r)
r.delete()}d3.aD(d0.$5(-24,-6,48,26,8),d1.$3(D.eOC,A.bO,A.bn))
for(m=0;m<2;++m){l=D.axX[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fz:A.av).K()
t.drawRRect(B.eT(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cY.j(0.5))
s.z=G.p8
r=s.K()
t.drawRRect(B.eT(d2),r)
r.delete()}}d3.bL(D.e7E,D.e7V,c9.$2(A.av,3))
return!0
case"ledstrip":d3.aD(d0.$5(-34,-4,68,10,4),c8.$1(A.co))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.E(t+v*40,360)
i=c7?new M.vJ(1,a3,0.8,1).lZ():A.e2
if(c7){s=c8.$1(i.j(0.45))
s.z=G.p8
r=s.K()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).K()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aD(d0.$5(-40,-2,6,6,1),c8.$1(A.dv))
return!0
case"pump":d3.aD(d0.$5(-16,-2,32,22,6),d1.$3(D.eOr,A.cB,A.Le))
d3.af(D.e9V,8,c8.$1(A.qT))
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
t.F(new B.b5(16,6))
t.F(new B.ap(26,6))
t.F(new B.ap(26,-20))
t.F(new B.ap(10,-20))
d3.aS(t,c9.$2(A.bK,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.E(t+v*0.2,1)
r=c8.$1(A.hh).K()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.af(D.e8t,3.2,c8.$1(A.hh.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bx(d2.save())
d3.jp(0,-0.15)
d3.aD(d0.$5(-26,-14,40,22,10),d1.$3(D.eOE,A.i1,A.tk))
d3.aD(d0.$5(14,-10,12,14,3),c8.$1(A.co))
d3.aD(d0.$5(-10,6,12,22,4),c8.$1(A.e2))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).K()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cY.j(0.4))
d2.z=G.p8
d3.af(D.e7z,8,d2)}return!0
case"headphones":d3.eV(B.ci(A.dD,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bq,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=F.QN[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new B.a9(s,0,s+14,20),A.by,A.oF).K()
d2.drawRRect(B.eT(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=B.bV(new B.x(l,10),10+v*5+A.k.E(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eC.j(0.9-v*0.3),1.6).K()
d2.drawArc.apply(d2,[B.bY(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new B.x(-4,-8-A.k.E(d5*14,8)),A.ko,12)
return!0
case"smartwatch":d3.aD(d0.$5(-8,-30,16,14,3),c8.$1(A.co))
d3.aD(d0.$5(-8,14,16,14,3),c8.$1(A.co))
d3.aD(d0.$5(-14,-17,28,32,8),d1.$3(D.eOk,A.dv,A.e2))
d3.aD(d0.$5(-11,-14,22,26,6),c8.$1(A.dH))
if(c7){a4=new B.S(Date.now(),0,!1)
d6.$5(d3,A.a.aX(A.o.u(B.dk(a4)),2,"0")+":"+A.a.aX(A.o.u(B.h1(a4)),2,"0"),D.e7b,A.bk,9.5)
g=(Math.sin(d5*9)+1)/2
d2=B.aq(A.Eq,A.h3,g)
d2.toString
d6.$5(d3,"\u2665",new B.x(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.E(A.k.bm(d5*2),6)),A.dD,A.c,7)}return!0
case"tablet":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(K.mY))
d3.aD(d0.$5(-30,-22,60,44,6),c9.$2(A.bK,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bx(d2.save())
d2.clipRRect(B.eT(a5),$.pv(),!0)
d2.translate(-27,-19)
E.Lb(d3,D.eUT,d5,c6)
d2.restore()}else d3.aD(a5,c8.$1(D.vn))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aD(a6,d1.$3(new B.a9(a6.a,a6.b,a6.c,a6.d),A.dL,A.d5))
d3.aD(a6,c9.$2(A.b2,1.2))
d3.af(D.aHh,9,c8.$1(A.av))
d3.af(D.aHh,6,c9.$2(A.d8,2))
d3.aD(d0.$5(4,-2,14,10,2),c8.$1(A.av))
d3.aD(d0.$5(-22,-19,44,12,2),c8.$1(A.dH))
d2=A.k.ab(d4.db,1)
t=A.k.ab(c7?d4.dx:d4.e,1)
s=c7?A.bk:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.e8x,s,8.2)
d3.af(D.e7q,2.4,c8.$1(c7?A.bd:A.aJ))
d6.$5(d3,"IN",D.e9P,A.ad,6)
d6.$5(d3,"OUT",D.e8l,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.aq(A.bK,A.aw,a7)
t.toString
d3.aD(d2,c8.$1(t))
d3.af(D.e71,3,c8.$1(A.aJ))
d3.aD(d0.$5(-12,-4,24,18,3),d1.$3(D.eOh,A.e2,A.hG))
d6.$5(d3,"7805",D.a5H,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.de6[m]-1
r=c8.$1(A.e4).K()
d2.drawRect(B.bY(new B.a9(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.E(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).K()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.eag,A.bj,9)
return!0
case"diode":d3.bL(D.aHl,D.aH5,c9.$2(A.e4,2.4))
d3.aD(d0.$5(-14,-7,28,14,6),c8.$1(A.aF.j(0.85)))
d3.b1(D.eO6,c8.$1(A.bj))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dO.j(0.4))
t.z=A.lx
d3.aD(d2,t)}d2=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
d2.F(new B.b5(-8,-4))
d2.F(new B.ap(-8,4))
d2.F(new B.ap(-1,0))
d2.F(new B.bE())
d3.aS(d2,c8.$1(A.aW))
d6.$5(d3,"one way",D.e9D,A.aA,8)
return!0
case"ldr":d3.bL(D.aHl,D.a5H,c9.$2(A.e4,2.4))
d3.bL(D.aHa,D.aH5,c9.$2(A.e4,2.4))
d3.af(A.J,12,c8.$1(A.d8))
d3.af(A.J,12,c9.$2(A.tt,1.6))
d2=$.W()
t=B.a([],x.v)
a8=new B.aO(d2.r,A.ao,c6,c6,t)
a8.F(new B.b5(-8,-6))
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
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.e9v,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.ed
break A}if("sonytv"===d2){t=A.qO
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
p.clipRRect(B.eT(a5),$.pv(),!0)
p.translate(t,s)
E.h0D(d3,new B.as(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.af(D.e7W,1.6,c8.$1(A.bk))}else{d3.aD(a5,c8.$1(D.vn))
p=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
p.F(new B.b5(t,s))
p.F(new B.ap(t+24,s))
p.F(new B.ap(t,s+22))
p.F(new B.bE())
d3.aS(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aD(d0.$5(-22,19,44,3,1.5),c8.$1(A.dv))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=F.ju[m]
s=$.W()
p=B.a([],t)
s=new B.aO(s.r,A.ao,c6,c6,p)
p.push(new B.b5(l*30,20))
p.push(new B.ap(l*22,20))
p.push(new B.ap(l*26,26))
p.push(new B.bE())
r=c8.$1(A.dv).K()
p=s.gbK().a.snapshot()
d2.drawPath((s.e=new B.cF(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.e98,A.bO,5.5)
break
case"appletv":d2=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
d2.F(new B.b5(-8,18))
d2.F(new B.ap(8,18))
d2.F(new B.ap(12,25))
d2.F(new B.ap(-12,25))
d2.F(new B.bE())
d3.aS(d2,c8.$1(D.X4))
d6.$5(d3,"Apple TV",D.e8y,A.bq,4.8)
break
default:d3.aD(d0.$5(-34,19,68,7,3),c8.$1(D.bhp))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dq,0.6).K()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.eac,F.th,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.m2.h(0,d2)
b1=b0.b===D.wr
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
t.clipRRect(B.eT(a5),$.pv(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.Lb(d3,new B.as(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aD(a5,c8.$1(D.vn))
if(b1){t=a5.b
s=a5.d
d3.bL(new B.x(0,t),new B.x(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aD(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.af(new B.x(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aD(d0.$5(-17,-28,34,52,4),c8.$1(A.e2))
d3.aD(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.eaj,A.av,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.E(v,4)===3?14:22
r=c8.$1(A.bn).K()
d2.drawRect(B.bY(new B.a9(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.af(A.aGR,1.6,c8.$1(A.av))}return!0
case"laptop":d3.aD(d0.$5(-30,-28,60,42,4),d1.$3(D.eON,A.cr,A.bn))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bx(d2.save())
d2.clipRRect(B.eT(b8),$.pv(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.Lb(d3,new B.as(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aD(b8,c8.$1(D.vn))
d2=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
d2.F(new B.b5(-38,16))
d2.F(new B.ap(38,16))
d2.F(new B.ap(34,21))
d2.F(new B.ap(-34,21))
d2.F(new B.bE())
d3.aS(d2,c8.$1(D.X4))
d3.aD(d0.$5(-7,16,14,2,1),c8.$1(A.bn))
return!0
case"imac":d3.aD(d0.$5(-32,-28,64,46,5),d1.$3(D.eOR,A.bM,A.cr))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bx(d2.save())
d2.clipRRect(B.eT(b9),$.pv(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.Lb(d3,new B.as(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aD(b9,c8.$1(D.vn))
d3.af(D.aGM,2,c8.$1(A.bK))
d2=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
d2.F(new B.b5(-6,18))
d2.F(new B.ap(6,18))
d2.F(new B.ap(10,26))
d2.F(new B.ap(-10,26))
d2.F(new B.bE())
d3.aS(d2,c8.$1(D.X4))
return!0
case"monitor":d3.aD(d0.$5(-34,-28,68,40,3),c8.$1(A.ed))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.bx(d2.save())
d2.clipRRect(B.eT(c0),$.pv(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.Lb(d3,new B.as(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aD(c0,c8.$1(D.vn))
d3.b1(D.eOX,c8.$1(A.bn))
d3.aD(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dv))
return!0
case"projector":if(c7){d2=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
d2.F(new B.b5(14,4))
d2.F(new B.ap(-32,-42))
d2.F(new B.ap(34,-42))
d2.F(new B.bE())
d3.aS(d2,c8.$1(A.dO.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bx(d2.save())
d2.clipRRect(B.eT(c1),$.pv(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.Lb(d3,new B.as(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aD(d0.$5(-26,-4,52,24,6),d1.$3(D.eOF,A.iD,A.dv))
d3.af(D.aGW,7,c8.$1(A.av))
d3.af(D.aGW,4,c8.$1(c7?A.dO:A.co))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dq,1).K()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aD(d0.$5(-34,-10,68,32,12),c8.$1(A.av))
c2=d0.$5(-30,-20,60,28,8)
d3.aD(c2,c8.$1(K.mY))
d3.aD(c2,c9.$2(A.bq,1.2))
if(c7){c3=new B.aO($.W().r,A.ao,c6,c6,B.a([],x.v))
c3.F(new B.b5(-26,4))
c3.F(new B.cR(-10,-14+Math.sin(d5)*3,6,-6))
c3.F(new B.ap(22,-16))
d3.aS(c3,c9.$2(A.aP,2.2))
d2=A.k.E(d5*6,48)
d3.af(new B.x(-26+d2,4-d2*0.1),2.4,c8.$1(A.bk))
d6.$5(d3,""+(88+A.o.E(A.k.bm(d5*2),5)),D.e8u,A.c,10)
d6.$5(d3,"km/h",D.e8r,A.aA,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aD(c4,d1.$3(new B.a9(c4.a,c4.b,c4.c,c4.d),A.dv,A.e2))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.bx(d2.save())
d2.clipRRect(B.eT(c5),$.pv(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.Lb(d3,new B.as(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.by.j(0.2))
d2.z=A.mD
d3.af(A.J,26,d2)}else d3.aD(c5,c8.$1(A.M))
d3.bL(D.e9Z,D.ea3,c9.$2(A.bn,4))
d3.bL(D.e7X,D.e84,c9.$2(A.bn,4))
return!0}return!1},
fGp:function fGp(){},
fGr:function fGr(){},
fGs:function fGs(){},
fGq:function fGq(){},
h3k(d,e,f,g){return new C.ail(d,g,f,e)},
Fz(d,e,f){return new C.baa(d,e,f)},
ail:function ail(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aim:function aim(d,e,f,g,h,i,j,k,l,m){var _=this
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
bG3:function bG3(d,e){this.a=d
this.b=e},
bG4:function bG4(d){this.a=d},
bG2:function bG2(d){this.a=d},
bG5:function bG5(){},
bG6:function bG6(d){this.a=d},
bG7:function bG7(d,e,f){this.a=d
this.b=e
this.c=f},
bG1:function bG1(d,e){this.a=d
this.b=e},
bG_:function bG_(d,e){this.a=d
this.b=e},
bG0:function bG0(d,e,f){this.a=d
this.b=e
this.c=f},
bFU:function bFU(d,e){this.a=d
this.b=e},
bFV:function bFV(){},
bFW:function bFW(d,e){this.a=d
this.b=e},
bFX:function bFX(d,e){this.a=d
this.b=e},
bFY:function bFY(d){this.a=d},
bFZ:function bFZ(d){this.a=d},
bGm:function bGm(d){this.a=d},
bGn:function bGn(){},
bFx:function bFx(){},
bGo:function bGo(d,e){this.a=d
this.b=e},
bGl:function bGl(d,e,f){this.a=d
this.b=e
this.c=f},
bGg:function bGg(d){this.a=d},
bGd:function bGd(d,e,f){this.a=d
this.b=e
this.c=f},
bGe:function bGe(d,e){this.a=d
this.b=e},
bGh:function bGh(d){this.a=d},
bGb:function bGb(d,e){this.a=d
this.b=e},
bGc:function bGc(d,e){this.a=d
this.b=e},
bGf:function bGf(d){this.a=d},
bGi:function bGi(d){this.a=d},
bG9:function bG9(d,e){this.a=d
this.b=e},
bGa:function bGa(d,e){this.a=d
this.b=e},
bGj:function bGj(d){this.a=d},
bG8:function bG8(d){this.a=d},
bGk:function bGk(d){this.a=d},
bFy:function bFy(d,e){this.a=d
this.b=e},
bFR:function bFR(d,e){this.a=d
this.b=e},
bFT:function bFT(d,e){this.a=d
this.b=e},
bFS:function bFS(d,e){this.a=d
this.b=e},
bFE:function bFE(d,e){this.a=d
this.b=e},
bFF:function bFF(d){this.a=d},
bFD:function bFD(d){this.a=d},
bFG:function bFG(d,e,f){this.a=d
this.b=e
this.c=f},
bFC:function bFC(d,e){this.a=d
this.b=e},
bFJ:function bFJ(d,e){this.a=d
this.b=e},
bFK:function bFK(d,e){this.a=d
this.b=e},
bFL:function bFL(d,e){this.a=d
this.b=e},
bFM:function bFM(d,e,f){this.a=d
this.b=e
this.c=f},
bFB:function bFB(d,e){this.a=d
this.b=e},
bFN:function bFN(d,e,f){this.a=d
this.b=e
this.c=f},
bFA:function bFA(d,e){this.a=d
this.b=e},
bFO:function bFO(d,e,f){this.a=d
this.b=e
this.c=f},
bFz:function bFz(d,e){this.a=d
this.b=e},
bFP:function bFP(d){this.a=d},
bFQ:function bFQ(d){this.a=d},
bFH:function bFH(d){this.a=d},
bFI:function bFI(d){this.a=d},
baa:function baa(d,e,f){this.a=d
this.b=e
this.c=f},
fer:function fer(){},
fes:function fes(){},
fet:function fet(){},
fee:function fee(){},
feu:function feu(){},
fed:function fed(){},
fev:function fev(){},
fei:function fei(){},
fec:function fec(){},
fej:function fej(){},
feb:function feb(){},
fek:function fek(){},
fea:function fea(){},
fel:function fel(){},
fe8:function fe8(){},
fe9:function fe9(){},
fem:function fem(){},
fe6:function fe6(){},
fe7:function fe7(){},
fen:function fen(){},
fe5:function fe5(){},
UT:function UT(d){this.a=d},
aCO:function aCO(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dRs:function dRs(d,e){this.a=d
this.b=e},
dRB:function dRB(d){this.a=d},
dRC:function dRC(){},
dRD:function dRD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRE:function dRE(){},
dRr:function dRr(d){this.a=d},
dRq:function dRq(d,e,f){this.a=d
this.b=e
this.c=f},
dRp:function dRp(d,e){this.a=d
this.b=e},
dRn:function dRn(d){this.a=d},
dRo:function dRo(){},
dRA:function dRA(d){this.a=d},
dRz:function dRz(d){this.a=d},
dRx:function dRx(d,e){this.a=d
this.b=e},
dRv:function dRv(d){this.a=d},
dRw:function dRw(){},
dRy:function dRy(d,e,f){this.a=d
this.b=e
this.c=f},
dRt:function dRt(d,e){this.a=d
this.b=e},
dRu:function dRu(){},
dRG:function dRG(d){this.a=d},
dRH:function dRH(d,e){this.a=d
this.b=e},
dRF:function dRF(){},
dRI:function dRI(d,e){this.a=d
this.b=e},
dRJ:function dRJ(d){this.a=d},
dRK:function dRK(d){this.a=d},
awX:function awX(d,e){this.c=d
this.a=e},
b8p:function b8p(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
cBZ:function cBZ(d){this.a=d},
b8o:function b8o(d,e){this.b=d
this.a=e},
cBY:function cBY(d){this.a=d},
axf:function axf(){},
axg:function axg(){},
aJ9:function aJ9(){},
bwc:function bwc(){},
i7W(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bV(A.wj,23)
$.W()
b8=B.N()
b8.r=A.av.gp(0)
b9.af(A.wj,25,b8)
b8=B.N()
b8.sar(D.eii.aA(0,v))
b9.af(A.wj,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.r=A.bj.gp(0)
o.c=A.o.E(u,5)===0?1.8:1
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
b9.bL(A.wj,new B.x(b8*18,s*18-2),r)
r=B.N()
r.r=A.bj.gp(0)
b9.af(A.wj,3,r)
c2.$5(b9,w?"V":"A",D.ea6,A.bj,12)
c2.$5(b9,w?A.k.ab(m,1)+" V":""+A.k.V(m*1000)+" mA",D.e9A,A.av,9.5)
return!0
case"fan":b8=B.by(D.eOd,A.hD)
$.W()
s=B.N()
s.r=A.bq.gp(0)
b9.aD(b8,s)
s=B.N()
s.r=A.ak.gp(0)
b9.b1(D.eOY,s)
s=B.N()
s.r=A.M.j(0.6).gp(0)
b9.af(D.wk,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bx(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.ci(A.aGQ,18,10)
r=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
r.r=A.hh.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.K()
b8.drawOval(B.bY(s),n)
n.delete()
b8.restore()}b8=B.N()
b8.r=A.bm.gp(0)
b9.af(D.wk,4,b8)
b8=B.N()
b8.b=A.af
b8.c=2
b8.r=A.cr.gp(0)
b9.af(D.wk,22,b8)
b8=B.N()
b8.b=A.af
b8.c=0.8
b8.r=A.k0.gp(0)
b9.af(D.wk,14,b8)
return!0
case"speaker":l=B.by(D.aMM,A.uH)
$.W()
b8=B.N()
b8.sar(D.aoQ.aA(0,new B.a9(l.a,l.b,l.c,l.d)))
b9.aD(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=B.N()
b8.sar(D.eiE.aA(0,B.bV(A.cz,15)))
b9.af(A.cz,14+k,b8)
b8=B.N()
b8.r=A.dv.gp(0)
b9.af(A.cz,5,b8)
b8=B.N()
b8.r=A.bn.gp(0)
b9.af(D.aGS,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=B.bV(D.e7D,6+u*6+A.k.E(b8,6))
q=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
q.b=A.af
q.c=1.8
q.r=A.c5.j(0.9-u*0.2).gp(0)
n=q.K()
s.drawArc.apply(s,[B.bY(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=B.by(D.eOQ,A.uH)
$.W()
b8=B.N()
b8.sar(D.bYo.aA(0,new B.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=B.by(D.aMO,A.ix)
s=B.N()
s.r=A.hG.gp(0)
b9.aD(b8,s)
if(b7){i=new B.S(Date.now(),0,!1)
h=B.ET(i)<500?":":" "
g=A.a.aX(A.o.u(B.dk(i)),2,"0")
f=A.a.aX(A.o.u(B.h1(i)),2,"0")
b8=B.N()
b8.r=A.bk.j(0.12).gp(0)
b9.b1(D.aMO,b8)
c2.$5(b9,g+h+f,D.e9S,A.bk,21)}b8=B.N()
b8.r=A.cr.gp(0)
b9.af(D.e9R,2.4,b8)
b8=B.N()
b8.r=A.cr.gp(0)
b9.af(D.e7H,2.4,b8)
return!0
case"calculator":j=B.by(D.eOw,A.hU)
$.W()
b8=B.N()
b8.sar(D.bY8.aA(0,new B.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=B.by(D.eOq,A.hb)
s=B.N()
s.r=(b7?A.Xg:D.bjt).gp(0)
b9.aD(b8,s)
if(b7)c2.$5(b9,"3.14159",D.e9z,A.W7,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=B.by(new B.a9(q,s,q+6,r),A.SI)
$.W()
p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
p.r=(d===3?A.c9:A.bO).gp(0)
n=p.K()
b8.drawRRect(B.eT(q),n)
n.delete()}return!0
case"phone":j=B.by(D.eOn,A.hU)
$.W()
b8=B.N()
b8.r=K.mY.gp(0)
b9.aD(j,b8)
b8=B.N()
b8.b=A.af
b8.c=1.9
b8.r=D.ago.gp(0)
b9.aD(j,b8)
a0=B.by(D.eOf,A.hD)
if(b7){b8=B.N()
b8.sar(D.bZG.aA(0,new B.a9(a0.a,a0.b,a0.c,a0.d)))
b9.aD(a0,b8)
b8=b9.a
J.bx(b8.save())
b8.clipRRect(B.eT(a0),$.pv(),!0)
b8.translate(-12,-25)
E.Lb(b9,D.eUv,c1,b6)
b8.restore()
a1=A.k.E(c1*0.12,1)
b8=B.by(D.eOc,A.hb)
s=B.N()
s.r=A.aW.gp(0)
b9.aD(b8,s)
s=B.N()
s.r=A.bk.gp(0)
b9.b1(new B.a9(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.e8R,A.c,6)}else{b8=B.N()
b8.r=D.vn.gp(0)
b9.aD(a0,b8)}b8=B.by(D.eP7,D.eiN)
s=B.N()
s.r=A.w.gp(0)
b9.aD(b8,s)
return!0
case"router":j=B.by(D.eOP,A.rD)
$.W()
b8=B.N()
b8.sar(D.bYF.aA(0,new B.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=F.QN[a2]
s=a3<0?-4:4
r=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
r.r=A.co.gp(0)
r.c=4
r.d=A.bV
n=r.K()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.E(A.k.bm(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
s.r=(a4?A.bd:A.aJ).gp(0)
n=s.K()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=B.bV(D.wk,8+u*6+A.k.E(s,6))
q=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
q.b=A.af
q.c=1.8
q.r=A.iF.j(0.9-u*0.2).gp(0)
n=q.K()
b8.drawArc.apply(b8,[B.bY(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=B.by(D.eOv,A.hD)
s=$.W()
r=B.N()
r.r=A.e2.gp(0)
b9.aD(b8,r)
if(b7){b8=B.N()
b8.r=A.aw.j(0.5*a5).gp(0)
b8.z=A.zb
b9.af(A.wj,34,b8)}a6=new B.aO(s.r,A.ao,b6,b6,B.a([],x.v))
a6.F(new B.b5(-16,12))
a6.F(new B.ap(-16,-2))
a6.F(new B.cR(0,-30,16,-2))
a6.F(new B.ap(16,12))
a6.F(new B.bE())
b8=B.N()
b8.r=B.aq(A.es,D.bbA,a5).gp(0)
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
b9.bL(A.J,D.aGS,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bx(b8.save())
b8.translate(0,a7)
s=$.W().r
r=x.v
j=new B.aO(s,A.ao,b6,b6,B.a([],r))
j.F(new B.b5(-28,8))
j.F(new B.ap(-28,-2))
j.F(new B.ap(-16,-4))
j.F(new B.ap(-10,-16))
j.F(new B.ap(10,-16))
j.F(new B.ap(18,-4))
j.F(new B.ap(28,-2))
j.F(new B.ap(28,8))
j.F(new B.bE())
q=B.N()
q.sar(D.bWK.aA(0,D.eOI))
b9.aS(j,q)
q=new B.aO(s,A.ao,b6,b6,B.a([],r))
q.F(new B.b5(-8,-4))
q.F(new B.ap(-4,-13))
q.F(new B.ap(4,-13))
q.F(new B.ap(4,-4))
q.F(new B.bE())
p=B.N()
p.r=A.fe.gp(0)
b9.aS(q,p)
r=new B.aO(s,A.ao,b6,b6,B.a([],r))
r.F(new B.b5(8,-4))
r.F(new B.ap(8,-13))
r.F(new B.ap(11,-13))
r.F(new B.ap(15,-4))
r.F(new B.bE())
s=B.N()
s.r=A.fe.gp(0)
b9.aS(r,s)
for(a2=0;a2<2;++a2){a3=F.axY[a2]
s=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
s.r=A.av.gp(0)
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
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.E(s+u*8,14)
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
j.F(new B.b5(-18,20))
j.F(new B.ap(-14,-12))
j.F(new B.cR(0,-20,14,-12))
j.F(new B.ap(18,20))
j.F(new B.bE())
r=B.N()
r.sar(D.bXO.aA(0,D.eOu))
b9.aS(j,r)
r=new B.aO(b8,A.ao,b6,b6,B.a([],s))
r.F(new B.b5(14,-10))
r.F(new B.ap(30,-22))
r.F(new B.ap(32,-18))
r.F(new B.ap(16,-4))
r.F(new B.bE())
q=B.N()
q.r=A.e4.gp(0)
b9.aS(r,q)
s=new B.aO(b8,A.ao,b6,b6,B.a([],s))
s.F(new B.b5(-14,-8))
s.F(new B.cR(-34,-6,-18,12))
b8=B.N()
b8.b=A.af
b8.c=5
b8.r=A.av.gp(0)
b9.aS(s,b8)
b8=B.N()
if(b7){s=B.aq(A.cY,A.tr,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.e2
b8.r=s.gp(0)
b9.b1(D.eOt,b8)
if(b7){b8=B.N()
b8.r=A.cY.j(0.3).gp(0)
b8.z=A.mD
b9.af(A.aGO,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.E(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.K()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=B.N()
b8.r=A.av.gp(0)
b9.af(D.e6Z,3,b8)
return!0
case"lamp":if(b7){u=A.k.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aO($.W().r,A.ao,b6,b6,B.a([],x.v))
b8.F(new B.b5(-10,-14))
b8.F(new B.ap(-30,24))
b8.F(new B.ap(10,24))
b8.F(new B.ap(8,-14))
b8.F(new B.bE())
s=B.N()
s.r=A.dO.j(0.28*u).gp(0)
b9.aS(b8,s)
s=B.N()
s.r=A.dO.j(0.5*u).gp(0)
s.z=Y.HL
b9.af(D.e9W,24,s)}b8=B.by(D.eP3,A.hD)
s=$.W()
r=B.N()
r.r=A.e2.gp(0)
b9.aD(b8,r)
r=B.N()
r.r=A.dv.gp(0)
r.c=3
r.d=A.bV
b9.bL(D.e7c,D.aGY,r)
r=B.N()
r.r=A.dv.gp(0)
r.c=3
r.d=A.bV
b9.bL(D.aGY,D.e9X,r)
a9=new B.aO(s.r,A.ao,b6,b6,B.a([],x.v))
a9.F(new B.b5(-14,-16))
a9.F(new B.ap(6,-26))
a9.F(new B.ap(10,-12))
a9.F(new B.ap(-10,-6))
a9.F(new B.bE())
s=B.N()
s.r=(b7?A.aS:A.k1).gp(0)
b9.aS(a9,s)
b8=B.N()
b8.r=(b7?A.c:A.bn).gp(0)
b9.af(D.e9Y,4,b8)
return!0
case"lights":b8=$.W().r
s=x.v
b0=new B.aO(b8,A.ao,b6,b6,B.a([],s))
b0.F(new B.b5(-34,-6))
b0.F(new B.cR(0,22,34,-6))
r=B.N()
r.b=A.af
r.c=2
r.r=A.hg.gp(0)
b9.aS(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.E(q+u*0.7,1.8)<1.1
if(b2){b3=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
b3.r=D.a2y[u].j(0.6).gp(0)
b3.z=A.Rn
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
if(b2)o=D.a2y[u]
else{o=B.aq(D.a2y[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.K()
p=b4.gbK().a.snapshot()
r.drawPath((b4.e=new B.cF(p)).a,n)
n.delete()}return!0}return C.i7U(b9,c0,c1,c2)},
fN:function fN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fZH(d){var w=D.m2.h(0,d)
return(w==null?null:w.b)===D.zB},
i95(d,e,f){return B.a4(d,!1).cm(B.uL(null,!1,!0,!0,new C.fL7(e,f),A.eL,null,A.pS,new C.fL8(),x.H))},
Jh:function Jh(d,e){this.a=d
this.b=e},
m6:function m6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fL7:function fL7(d,e){this.a=d
this.b=e},
fL8:function fL8(){},
UC:function UC(d,e,f){this.c=d
this.d=e
this.a=f},
biH:function biH(d,e){var _=this
_.d=$
_.e=null
_.bw$=d
_.aa$=e
_.c=_.a=null},
dNR:function dNR(d){this.a=d},
dNQ:function dNQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNO:function dNO(){},
dNP:function dNP(d){this.a=d},
dNN:function dNN(d){this.a=d},
dNM:function dNM(d,e){this.a=d
this.b=e},
dNL:function dNL(d,e){this.a=d
this.b=e},
dNK:function dNK(d){this.a=d},
dNJ:function dNJ(d){this.a=d},
dNF:function dNF(d){this.a=d},
dNE:function dNE(d){this.a=d},
dNI:function dNI(d,e,f){this.a=d
this.b=e
this.c=f},
dNH:function dNH(d){this.a=d},
dNG:function dNG(d){this.a=d},
buh:function buh(d,e,f){this.b=d
this.c=e
this.a=f},
aej:function aej(d,e,f){this.b=d
this.c=e
this.a=f},
aKU:function aKU(){},
a0x(d,e,f,g,h,i){return new C.bt6(d,e,f,g,h,i)},
bt6:function bt6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
feX:function feX(){},
feY:function feY(){},
feZ:function feZ(){},
ff_:function ff_(){},
ff0:function ff0(){},
ff1:function ff1(){},
ff2:function ff2(){},
ff3:function ff3(){},
a81:function a81(d){this.a=d},
cfL:function cfL(d){this.a=d},
cfM:function cfM(){},
cfK:function cfK(d,e){this.a=d
this.b=e},
cfJ:function cfJ(d){this.a=d},
W9:function W9(d){this.a=d},
aEf:function aEf(d,e,f,g,h,i,j,k){var _=this
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
eHy:function eHy(d){this.a=d},
eHu:function eHu(d){this.a=d},
eHt:function eHt(d,e){this.a=d
this.b=e},
eHw:function eHw(d,e){this.a=d
this.b=e},
eHv:function eHv(d,e){this.a=d
this.b=e},
eHx:function eHx(d){this.a=d},
but:function but(d,e,f){this.b=d
this.c=e
this.a=f},
V_:function V_(d){this.a=d},
biP:function biP(d,e,f,g,h,i){var _=this
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
dTG:function dTG(){},
dTH:function dTH(){},
dTB:function dTB(d,e){this.a=d
this.b=e},
dTD:function dTD(d,e){this.a=d
this.b=e},
dTE:function dTE(d){this.a=d},
dTC:function dTC(d){this.a=d},
dTF:function dTF(d){this.a=d},
bpi:function bpi(d,e,f){this.b=d
this.c=e
this.a=f},
Ud:function Ud(d){this.a=d},
bis:function bis(d,e,f,g,h,i){var _=this
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
dFc:function dFc(){},
dFd:function dFd(){},
dF7:function dF7(){},
dFa:function dFa(d,e){this.a=d
this.b=e},
dF9:function dF9(d,e){this.a=d
this.b=e},
dFb:function dFb(d){this.a=d},
dF8:function dF8(d){this.a=d},
aHE:function aHE(d,e,f){this.a=d
this.b=e
this.c=f},
US:function US(d){this.a=d},
biJ:function biJ(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dRb:function dRb(d,e){this.a=d
this.b=e},
dRc:function dRc(d){this.a=d},
dRa:function dRa(d,e){this.a=d
this.b=e},
dRd:function dRd(d){this.a=d},
dR9:function dR9(d,e){this.a=d
this.b=e},
dRe:function dRe(d){this.a=d},
dR8:function dR8(d,e){this.a=d
this.b=e},
dRf:function dRf(d,e){this.a=d
this.b=e},
dR7:function dR7(d,e){this.a=d
this.b=e},
dRg:function dRg(d){this.a=d},
dR6:function dR6(d,e){this.a=d
this.b=e},
dRh:function dRh(d){this.a=d},
dR5:function dR5(d){this.a=d},
dRi:function dRi(d){this.a=d},
dR4:function dR4(d){this.a=d},
dRj:function dRj(d){this.a=d},
dRk:function dRk(d){this.a=d},
dR3:function dR3(d){this.a=d},
bkF:function bkF(d,e,f){this.b=d
this.c=e
this.a=f},
Vz:function Vz(d){this.a=d},
aDB:function aDB(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
ef3:function ef3(d,e){this.a=d
this.b=e},
ef4:function ef4(d,e,f){this.a=d
this.b=e
this.c=f},
ef2:function ef2(d,e,f){this.a=d
this.b=e
this.c=f},
ef5:function ef5(d){this.a=d},
ef1:function ef1(d){this.a=d},
ef9:function ef9(d){this.a=d},
ef8:function ef8(d,e){this.a=d
this.b=e},
ef7:function ef7(d,e){this.a=d
this.b=e},
efa:function efa(d,e){this.a=d
this.b=e},
ef6:function ef6(d,e){this.a=d
this.b=e},
efb:function efb(d){this.a=d},
VJ:function VJ(d){this.a=d},
aDU:function aDU(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eoZ:function eoZ(d){this.a=d},
ep_:function ep_(d){this.a=d},
eoX:function eoX(d,e){this.a=d
this.b=e},
eoY:function eoY(d){this.a=d},
eoW:function eoW(d){this.a=d},
ep0:function ep0(d){this.a=d},
ep1:function ep1(d){this.a=d},
ep2:function ep2(d){this.a=d},
ep3:function ep3(d,e){this.a=d
this.b=e},
W2:function W2(d){this.a=d},
bjT:function bjT(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eCQ:function eCQ(){},
eCZ:function eCZ(){},
eCV:function eCV(d){this.a=d},
eCU:function eCU(){},
eCW:function eCW(d,e){this.a=d
this.b=e},
eCT:function eCT(d,e){this.a=d
this.b=e},
eCX:function eCX(d){this.a=d},
eCS:function eCS(d,e){this.a=d
this.b=e},
eCY:function eCY(d){this.a=d},
eCR:function eCR(d){this.a=d},
Vy:function Vy(d){this.a=d},
bjo:function bjo(d,e,f,g,h,i,j,k){var _=this
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
ee8:function ee8(){},
ee9:function ee9(){},
ee1:function ee1(d){this.a=d},
ee0:function ee0(d){this.a=d},
ee2:function ee2(d){this.a=d},
ee_:function ee_(d){this.a=d},
ee3:function ee3(d){this.a=d},
edZ:function edZ(d){this.a=d},
ee4:function ee4(d,e){this.a=d
this.b=e},
edY:function edY(d,e){this.a=d
this.b=e},
ee5:function ee5(d){this.a=d},
edX:function edX(d,e){this.a=d
this.b=e},
ee6:function ee6(d){this.a=d},
edW:function edW(d,e){this.a=d
this.b=e},
ee7:function ee7(d){this.a=d},
edV:function edV(d,e){this.a=d
this.b=e},
bcz:function bcz(d,e,f){this.c=d
this.d=e
this.a=f},
aKI:function aKI(){},
bw9:function bw9(){},
aKZ:function aKZ(){},
bwd:function bwd(){},
aLq:function aLq(){},
bwl:function bwl(){},
aLQ:function aLQ(){},
bwt:function bwt(){},
nS(d,e,f,g,h,i){return new C.b6a(h,d,f,g,i,e,null)},
hof(d,e,f,g){var w=null
return B.ca(w,w,!0,w,new C.fOX(g,e,f),d,w,!0,!0,x.H)},
l0(d,e,f,g,h,i,j){return new C.b6b(f,j,i,h,g,d,e,null)},
wS(d,e,f){return C.i9V(d,e,f)},
i9V(d,e,f){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
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
return B.b(C.cqH(B.a([C.hd4(o,"image/png",f+".png")],x.E),"Made in NGMY Core Protocol"),$async$wS)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.I(x.gV).f.S(D.aOT)
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$wS,v)},
pU(d,e,f,g){var w,v=$.arw
if(v==="music")return E.dX(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dX(261.63*v,w,f,0,g,"sine")}return C.cfI(v,e,f,g)},
cfI(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return E.dX(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return E.dX(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return E.dX(140+A.o.E(e,12)*9,"",150,0.9,g,v)
case"bubble":return E.dX(260+A.o.E(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":E.dX(t,"",160,-0.7,g*0.4,w)
return E.dX(900,"",90,0,g*0.45,u)
case"zap":return E.dX(t*3,"",150,1.6,g*0.4,"square")
case"click":return E.dX(2600+A.o.E(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":E.dX(320,"",220,-0.7,g*0.35,v)
return E.dX(1500,"",200,0,g*0.22,u)
case"organic":return E.dX(85+A.o.E(e,12)*5,"",190,1.1,g,v)
case"lab":return E.dX(t*1.6,"",140,-0.3,g*0.55,w)
default:return E.dX(t,"",s,0,g*0.5,w)}},
IO(d,e,f,g){var w,v,u,t,s,r,q,p=$.arw
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.L)(e),++w)C.pU(d,e[w],f,g)
return}for(p=B.dc(e,0,B.dG(4,"count",x.S),B.T(e).c),v=p.$ti,p=new B.bR(p,p.gM(0),v.k("bR<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)C.pU(d,s,f,g)
else B.bM(new B.bb(1000*q),new C.cfG(d,s,f,g),u)}},
a80(d,e){var w="sine",v="noise"
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
b0k(d){return C.hFh(d)},
hFh(d){var w=0,v=B.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$b0k=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$b0k)
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
return B.i($async$b0k,v)},
aqG(d,e){return C.hFi(d,e)},
hFi(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$aqG=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$aqG)
case 6:s=g
w=7
return B.b(s.aq("String","ngmy_play_progress_v1_"+d,A.S.ao(e,null)),$async$aqG)
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
return B.i($async$aqG,v)},
b6a:function b6a(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
csG:function csG(d){this.a=d},
csH:function csH(d,e){this.a=d
this.b=e},
fOX:function fOX(d,e,f){this.a=d
this.b=e
this.c=f},
fOW:function fOW(d){this.a=d},
eV:function eV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
csC:function csC(d){this.a=d},
h8:function h8(d,e,f){this.c=d
this.d=e
this.a=f},
b6b:function b6b(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
iS:function iS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
csB:function csB(d){this.a=d},
Fe:function Fe(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
csI:function csI(d){this.a=d},
qE:function qE(){},
csD:function csD(d,e,f){this.a=d
this.b=e
this.c=f},
csF:function csF(d){this.a=d},
csE:function csE(){},
cfG:function cfG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cvh(){var w=0,v=B.j(x.cL),u,t
var $async$cvh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=C
w=3
return B.b($.qV().bfD("assets/data/world110.json"),$async$cvh)
case 3:u=t.hJR(e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cvh,v)},
hJR(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.S.aL(0,a2,null)),a1=B.a([],x.D)
for(w=J.aW(a0),v=x.n,u=x.b,t=x.a,s=x.gO;w.C();){r=t.a(w.gT(w))
q=B.a([],s)
for(p=J.a3(r),o=J.aW(d.a(p.h(r,"r")));o.C();){n=o.gT(o)
m=B.a([],u)
for(l=J.aW(d.a(n));l.C();){k=l.gT(l)
j=J.a3(k)
m.push(B.a([B.e1(j.h(k,0)),B.e1(j.h(k,1))],v))}q.push(m)}o=B.cO(p.h(r,"n"))
m=B.cO(p.h(r,"a"))
l=B.cO(p.h(r,"ct"))
j=B.cO(p.h(r,"sr"))
i=B.e1(p.h(r,"pop"))
h=B.e1(p.h(r,"gdp"))
g=B.cO(p.h(r,"inc"))
f=B.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=B.aPM(g,f,"",0)
f=B.e1(J.q(p.h(r,"c"),0))
p=B.e1(J.q(p.h(r,"c"),1))
e=new C.aaP(o,m,l,j,i,h,g,f,p,q)
e.bxS(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new C.aaQ(a1)},
fsr(d){if(d>=1e12)return A.k.ab(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.ab(d/1e9,2)+" billion"
if(d>=1e6)return A.k.ab(d/1e6,1)+" million"
if(d>=1000)return A.k.ab(d/1000,1)+" thousand"
return A.k.ab(d,0)},
GM(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.E(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
aaP:function aaP(d,e,f,g,h,i,j,k,l,m){var _=this
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
aaQ:function aaQ(d){this.a=d},
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
P5:function P5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
y6:function y6(d,e,f){this.a=d
this.b=e
this.c=f},
P4:function P4(d){this.a=0
this.b=d
this.c=0},
hLK(d,e,f){return $.hLL.ca(0,d+"|"+B.u(e)+"|"+f.l(),new C.ddk(d,e,f))},
V5:function V5(d){this.a=d},
aCZ:function aCZ(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
dWc:function dWc(d){this.a=d},
dWb:function dWb(d,e){this.a=d
this.b=e},
dVF:function dVF(d){this.a=d},
dVD:function dVD(d){this.a=d},
dVE:function dVE(d,e,f){this.a=d
this.b=e
this.c=f},
dVC:function dVC(d){this.a=d},
dVB:function dVB(){},
dVA:function dVA(d){this.a=d},
dVY:function dVY(d,e){this.a=d
this.b=e},
dVZ:function dVZ(d,e){this.a=d
this.b=e},
dVN:function dVN(d){this.a=d},
dVO:function dVO(d){this.a=d},
dVM:function dVM(d){this.a=d},
dVP:function dVP(d){this.a=d},
dVG:function dVG(d,e){this.a=d
this.b=e},
dVH:function dVH(d){this.a=d},
dW_:function dW_(d,e){this.a=d
this.b=e},
dVL:function dVL(d,e){this.a=d
this.b=e},
dW3:function dW3(d){this.a=d},
dVX:function dVX(d){this.a=d},
dW4:function dW4(d,e){this.a=d
this.b=e},
dVW:function dVW(d,e){this.a=d
this.b=e},
dW5:function dW5(d){this.a=d},
dVV:function dVV(d,e){this.a=d
this.b=e},
dW6:function dW6(d){this.a=d},
dVU:function dVU(d,e){this.a=d
this.b=e},
dW7:function dW7(d){this.a=d},
dVT:function dVT(d,e){this.a=d
this.b=e},
dW8:function dW8(d){this.a=d},
dVS:function dVS(d,e){this.a=d
this.b=e},
dW9:function dW9(d){this.a=d},
dVR:function dVR(d){this.a=d},
dWa:function dWa(d){this.a=d},
dVQ:function dVQ(d){this.a=d},
dW0:function dW0(d){this.a=d},
dVK:function dVK(d){this.a=d},
dW1:function dW1(d){this.a=d},
dVJ:function dVJ(d){this.a=d},
dW2:function dW2(d){this.a=d},
dVI:function dVI(d){this.a=d},
dVz:function dVz(){},
dVy:function dVy(d){this.a=d},
dVx:function dVx(d){this.a=d},
beM:function beM(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ddk:function ddk(d,e,f){this.a=d
this.b=e
this.c=f},
ddl:function ddl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aL3:function aL3(){},
aL4:function aL4(){},
aeR(d,e,f,g,h){return new C.bt1(d,e,f,g,h)},
bt1:function bt1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
feQ:function feQ(){},
feR:function feR(){},
feS:function feS(){},
feT:function feT(){},
feU:function feU(){},
feV:function feV(){},
feW:function feW(){},
W5:function W5(d){this.a=d},
bjX:function bjX(){this.d=$
this.c=this.a=null},
eDJ:function eDJ(d){this.a=d},
eDK:function eDK(d){this.a=d},
eDI:function eDI(d){this.a=d},
eDL:function eDL(){},
eDH:function eDH(d,e){this.a=d
this.b=e},
eDG:function eDG(d){this.a=d},
hMb(){var w,v,u=x.n,t=B.a([],u)
for(w=0;w<260;++w){v=new B.f5()
v.dU(w)
t.push(v.an()*3.141592653589793*2)}u=B.a([],u)
for(w=0;w<260;++w){v=new B.f5()
v.dU(w+900)
u.push(2.2+v.an())}return new C.bjK(new B.cv(null,x.z),new C.P4(A.cS),A.J,A.az,t,u,$,A.bB,0,B.a([],x.X),null,null)},
hMd(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hMc(d){return 1.5+1.6*Math.log(d.d/1000+1)},
heg(d,e,f){return $.hMO.ca(0,d+"|"+B.u(e)+"|"+f.l(),new C.eY6(d,e,f))},
VS:function VS(d){this.a=d},
bjK:function bjK(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ewc:function ewc(d,e){this.a=d
this.b=e},
ewn:function ewn(d,e){this.a=d
this.b=e},
ewo:function ewo(d,e){this.a=d
this.b=e},
ewk:function ewk(d){this.a=d},
ewl:function ewl(d){this.a=d},
ewm:function ewm(d){this.a=d},
ewp:function ewp(d){this.a=d},
ewj:function ewj(d){this.a=d},
ewq:function ewq(d,e){this.a=d
this.b=e},
ewr:function ewr(d){this.a=d},
ewi:function ewi(d,e){this.a=d
this.b=e},
ews:function ews(d){this.a=d},
ewh:function ewh(d,e){this.a=d
this.b=e},
ewt:function ewt(d){this.a=d},
ewg:function ewg(d){this.a=d},
ewu:function ewu(d){this.a=d},
ewf:function ewf(d){this.a=d},
ewv:function ewv(d){this.a=d},
ewe:function ewe(d){this.a=d},
eww:function eww(d){this.a=d},
ewd:function ewd(d){this.a=d},
ewb:function ewb(){},
ewa:function ewa(){},
ew9:function ew9(d){this.a=d},
ew8:function ew8(d){this.a=d},
br4:function br4(d,e){this.b=d
this.a=e},
eY6:function eY6(d,e,f){this.a=d
this.b=e
this.c=f},
eY7:function eY7(){},
eY8:function eY8(){},
V6:function V6(d){this.a=d},
aD_:function aD_(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dWg:function dWg(){},
dWJ:function dWJ(){},
dWv:function dWv(d,e){this.a=d
this.b=e},
dWm:function dWm(d,e){this.a=d
this.b=e},
dWw:function dWw(d){this.a=d},
dWl:function dWl(d){this.a=d},
dWx:function dWx(d){this.a=d},
dWu:function dWu(d){this.a=d},
dWB:function dWB(d){this.a=d},
dWt:function dWt(d){this.a=d},
dWC:function dWC(d){this.a=d},
dWs:function dWs(d,e){this.a=d
this.b=e},
dWD:function dWD(d){this.a=d},
dWE:function dWE(d){this.a=d},
dWr:function dWr(d,e){this.a=d
this.b=e},
dWF:function dWF(d){this.a=d},
dWq:function dWq(d,e){this.a=d
this.b=e},
dWG:function dWG(d){this.a=d},
dWp:function dWp(d,e){this.a=d
this.b=e},
dWH:function dWH(d){this.a=d},
dWo:function dWo(d,e){this.a=d
this.b=e},
dWI:function dWI(d){this.a=d},
dWn:function dWn(d){this.a=d},
dWy:function dWy(d){this.a=d},
dWk:function dWk(d){this.a=d},
dWz:function dWz(d){this.a=d},
dWj:function dWj(d){this.a=d},
dWA:function dWA(d){this.a=d},
dWi:function dWi(d){this.a=d},
dWf:function dWf(d){this.a=d},
dWe:function dWe(){},
dWh:function dWh(d,e){this.a=d
this.b=e},
dWd:function dWd(d){this.a=d},
ba0:function ba0(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
VK:function VK(d){this.a=d},
bjH:function bjH(d,e,f,g,h,i,j){var _=this
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
ep6:function ep6(d,e){this.a=d
this.b=e},
ep7:function ep7(d,e){this.a=d
this.b=e},
ep5:function ep5(d,e){this.a=d
this.b=e},
ep8:function ep8(d,e){this.a=d
this.b=e},
ep4:function ep4(d,e){this.a=d
this.b=e},
bqD:function bqD(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eWg:function eWg(d){this.a=d},
aL5:function aL5(){},
bwf:function bwf(){},
aLz:function aLz(){},
bwo:function bwo(){},
aLC:function aLC(){},
bwq:function bwq(){},
hM9(){var w,v,u,t=B.a([],x.d9),s=B.a([],x.g)
for(w=0;w<150;++w){v=new B.f5()
v.dU(w)
v=v.an()
u=new B.f5()
u.dU(w+500)
s.push(new B.x(v,u.an()))}return new C.bir(new B.cv(null,x.z),new C.P4(A.cS),t,A.az,s,$,A.bB,0,B.a([],x.X),null,null)},
Pz:function Pz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Ub:function Ub(d){this.a=d},
bir:function bir(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dEE:function dEE(){},
dEs:function dEs(){},
dEt:function dEt(d,e){this.a=d
this.b=e},
dEu:function dEu(d,e){this.a=d
this.b=e},
dEr:function dEr(d){this.a=d},
dEq:function dEq(d){this.a=d},
dEw:function dEw(d){this.a=d},
dEp:function dEp(d,e){this.a=d
this.b=e},
dEx:function dEx(d){this.a=d},
dEo:function dEo(d){this.a=d},
dEy:function dEy(d){this.a=d},
dEn:function dEn(d){this.a=d},
dEz:function dEz(d){this.a=d},
dEm:function dEm(d){this.a=d},
dEA:function dEA(d){this.a=d},
dEl:function dEl(d){this.a=d},
dEB:function dEB(d){this.a=d},
dEk:function dEk(d){this.a=d},
dEC:function dEC(d){this.a=d},
dEj:function dEj(d){this.a=d},
dED:function dED(d){this.a=d},
dEi:function dEi(d){this.a=d},
dEv:function dEv(d){this.a=d},
dEh:function dEh(d){this.a=d},
b9p:function b9p(d,e){this.b=d
this.a=e},
aev:function aev(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
V3:function V3(d){this.a=d},
biS:function biS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
dV_:function dV_(d){this.a=d},
dUQ:function dUQ(d,e){this.a=d
this.b=e},
dUR:function dUR(d,e){this.a=d
this.b=e},
dUP:function dUP(d,e){this.a=d
this.b=e},
dUS:function dUS(d){this.a=d},
dUO:function dUO(d){this.a=d},
dUT:function dUT(d){this.a=d},
dUN:function dUN(d,e){this.a=d
this.b=e},
dUU:function dUU(d){this.a=d},
dUM:function dUM(d,e){this.a=d
this.b=e},
dUV:function dUV(d){this.a=d},
dUL:function dUL(d,e){this.a=d
this.b=e},
dUW:function dUW(d){this.a=d},
dUK:function dUK(d,e){this.a=d
this.b=e},
dUX:function dUX(d){this.a=d},
dUJ:function dUJ(d){this.a=d},
dUY:function dUY(d){this.a=d},
dUI:function dUI(d){this.a=d},
dUZ:function dUZ(d){this.a=d},
dUH:function dUH(d){this.a=d},
beD:function beD(d,e){this.b=d
this.a=e},
dau:function dau(d){this.a=d},
VG:function VG(d){this.a=d},
bjG:function bjG(d,e,f,g,h,i,j,k){var _=this
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
eol:function eol(d,e){this.a=d
this.b=e},
eom:function eom(d){this.a=d},
eok:function eok(d){this.a=d},
eon:function eon(d){this.a=d},
eoj:function eoj(d){this.a=d},
eoo:function eoo(d){this.a=d},
eoi:function eoi(d){this.a=d},
eop:function eop(d){this.a=d},
eoh:function eoh(d){this.a=d},
eoq:function eoq(d){this.a=d},
eog:function eog(d,e){this.a=d
this.b=e},
eor:function eor(d){this.a=d},
eof:function eof(d,e){this.a=d
this.b=e},
eos:function eos(d){this.a=d},
eoe:function eoe(d,e){this.a=d
this.b=e},
eot:function eot(d){this.a=d},
eod:function eod(d,e){this.a=d
this.b=e},
bpT:function bpT(d,e){this.b=d
this.a=e},
aKF:function aKF(){},
bw8:function bw8(){},
aL1:function aL1(){},
bwe:function bwe(){},
aLy:function aLy(){},
bwn:function bwn(){},
hd4(d,e,f){var w,v
B.fU(0,0,!1)
w=new B.ll(e,f,$,null)
v=w.bI4(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
hZS(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.U(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.C)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.L)(w),++q){p=w[q]
u.push(B.F(["k",p.b,"x",B.o_(A.k.ab(p.c,4)),"y",B.o_(A.k.ab(p.d,4)),"v",p.e,"l",B.o_(A.k.ab(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.o_(A.k.ab(p.as,3)),"ch",p.at,"vc",B.o_(A.k.ab(p.z,3)),"s",B.o_(A.k.ab(p.ch,2))],s,r))}w=B.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.L)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a6(f).k("cq.E"))
A.d.fp(l)
return A.S.ao(B.F(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
i8i(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.S.aL(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=B.a([],x.fs)
g=x.Q
f=g.a(J.q(w,"parts"))
f=J.aW(f==null?A.cC:f)
while(f.C()){u=f.gT(f)
t=i.a(u)
e=B.aU(J.q(t,"k"))
s=e==null?"":e
if(!$.qg().ai(0,s)){J.cd(v,null)
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
if(m!=null&&l!=null)a6.akk(m,A.k.N(B.e1(J.q(p,1))),l,A.k.N(B.e1(J.q(p,3))))}i=B.aJ(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=B.aY(x.S)
h=g.a(J.q(w,"done"))
h=J.aW(h==null?A.cC:h)
while(h.C()){j=h.gT(h)
J.cd(k,A.k.N(B.e1(j)))}return new B.bnw(i,k)}catch(a4){return a5}},
fuo(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fuo=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.ay(),$async$fuo)
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
return B.i($async$fuo,v)},
bCL(d){return C.i9R(d)},
i9R(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bCL=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.ay(),$async$bCL)
case 7:w=6
return B.b(f.aq("String","ngmy_electronics_lab_v1",d),$async$bCL)
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
return B.i($async$bCL,v)},
cqH(d,e){var w=0,v=B.j(x.g7),u
var $async$cqH=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.h1w().xb(d,null,null,null,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cqH,v)}},D,T,M,U,Z,A6,A7,V
J=c[1]
B=c[0]
A=c[2]
A_=c[145]
A8=c[144]
A0=c[136]
A1=c[133]
H=c[127]
A2=c[124]
W=c[122]
A9=c[138]
A3=c[109]
A4=c[100]
G=c[130]
Aa=c[137]
A5=c[141]
Ab=c[67]
X=c[76]
Ac=c[84]
Ad=c[80]
Q=c[88]
N=c[116]
Ae=c[120]
Af=c[118]
Y=c[126]
O=c[128]
R=c[142]
Ag=c[140]
L=c[139]
Ah=c[95]
Ai=c[143]
S=c[117]
I=c[131]
P=c[96]
Aj=c[24]
E=c[26]
F=c[93]
K=c[102]
C=a.updateHolder(c[17],C)
D=c[125]
T=c[135]
M=c[41]
U=c[132]
Z=c[104]
A6=c[134]
A7=c[129]
V=c[97]
C.ajA.prototype={}
C.Vi.prototype={
U(){return new C.bjc(B.U(x.N,x.i),new B.ar(A.as,$.aw()),B.a([],x.X),B.a([],x.L),B.mA(0,null,null))}}
C.bjc.prototype={
gW5(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
this.ch.q()
this.a2()},
Nv(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Nv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aV.aj$.d.c
if(s!=null)s.jN()
p.bP(0,A.c4)
t.m(new C.e7g(t))
t.a.toString
p=t.gW5()
w=3
return B.b(C.bym(C.hO1(q,C.hZJ(p),o,t.ay)),$async$Nv)
case 3:s=e
r=s==null?null:J.iY(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=C.i08(q,p,o)
if(t.c==null){w=1
break}t.m(new C.e7h(t,o,r))
$.aV.x1$.push(new C.e7i(t))
case 1:return B.h(u,v)}})
return B.i($async$Nv,v)},
Y5(d){return this.bZ9(d)},
aVm(){return this.Y5(null)},
bZ9(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Y5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aV.aj$.d.c
if(s!=null)s.jN()
t.f.saU(0,o)
t.m(new C.e7t(t))
E.dX(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bym(C.hUP(o)),$async$Y5)
case 3:r=n.a=m.i7Y(f)
p.b=""
if(r!=null&&!C.hZK(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.i09(o)
q=B.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.ajA(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.e7u(p,t))
t.c3w(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Y5,v)},
c3w(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
A.d.a8(w)
w=++m.as
v=m.gW5()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.e7p(m))
t=d.d
s=B.U(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.e7n(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.e7q(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.L)(r),++u){p.$2(o,new C.e7r(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.e7s(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.by.j(0.1),g=B.n(16),f=B.I(A.by.j(0.35),A.q,1)
if(m.x)j=B.B(B.a([D.eW_,A.bc,B.E(B.d(m.Q,l,l,l,l,l,l,A.Dr,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.fkF
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.TZ,l,l,l),1)
v=x.p
w=B.a([B.B(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.f5J,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.vv,B.d(u,l,l,l,l,l,l,D.f8n,l,l,l),l))
w.push(A.cR)
w.push(B.d(k.b,l,l,l,l,l,l,F.DC,l,l,l))
u=k.e
if(u.length!==0){t=A.aS.j(0.12)
s=B.n(10)
w.push(B.p(l,B.d(u,l,l,l,l,l,l,D.faN,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.i4,A.cp,l,l,l))}w.push(A.an)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aA
w.push(new B.D(A.Mh,new B.ck(A.aN,A.e,A.j,A.F,l,A.p,l,0,B.a([new B.y(t,l,A.m9,l,l,l,l,l,l,l,l,l),A.bp,new B.bB(1,A.bf,new B.y(q,l,new B.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.L)(j),++p){o=j[p]
t=new B.aR(12,12)
s=new B.aR(12,12)
A.d.v(w,B.a([A.N,new B.bI(A.a8,l,l,B.p(l,new B.y(o.a,l,A.TH,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.by.j(0.3),l,l,new B.bo(t,t,t,t),l,l,A.n),l,l,l,l,A.fX,l,l,l),l),A.au,B.p(l,new B.y(o.b,l,D.fg5,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.c.j(0.07),l,l,new B.bo(s,s,s,s),l,l,A.n),l,l,l,l,A.bT,l,l,l)],v))}if(m.ax)w.push(D.ebf)
j=B.cc(B.w(w,A.F,l,A.e,A.j,0,A.p),A.r,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=B.w(B.a([B.ahQ(B.p(l,j,A.f,l,new B.aX(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.bsI,A.eu,l,l,1/0),A.bb,A.ij),B.E(C.h3k(m.gW5(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new C.eV("Ask about it",i,new C.e7x(m),l,A.by,l),new C.eV("Invent something new",!i,new C.e7y(m),l,A.by,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dgh[p]
i.push(new C.eV(n,!1,new C.e7z(m,n),l,A.by,l))}f.push(new C.h8(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.d_s[p]
i.push(new C.eV(r,!1,new C.e7A(m,r),l,A.by,l))}f.push(new C.h8(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aM(l,A.U,!1,l,!0,A.r,l,B.aN(),m.f,l,l,l,l,l,2,B.br(l,new B.b3(4,B.n(16),A.W),l,A.eR,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kJ,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.e7B(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dg,!0,A.a4,l,A.am,l,A.aPB,l,l),1)
h=m.at
v=h&&j?D.bHu:A.e0
j=h&&j?"Ask":"Invent"
f.push(B.B(B.a([i,A.ab,new C.iS(v,j,new C.e7C(m,k),A.by,l)],w),A.m,l,A.e,A.j,0,l,l))
return C.nS(A.by,A.jt,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.w(f,A.m,l,A.e,A.Q,0,A.p))}}
C.G1.prototype={}
C.uS.prototype={}
C.VF.prototype={
U(){return new C.aDO(A.J,A.J,A.az,B.aY(x.S),$,A.bB,0,B.a([],x.X),null,null)}}
C.aDO.prototype={
gaWA(){var w,v,u,t=this,s=D.Hd[t.cx],r=D.QO[t.cy],q=D.Cp[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.em(w,w.r,B.a6(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.awi[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cM(p,0,new C.elw())},
ga2k(){return D.Hd[this.cx].d/this.gaWA()},
gaNT(){return 0.1*(D.Hd[this.cx].d/0.9)/D.QO[this.cy].d},
a_(){this.a1()
this.oZ()
C.b0k("rocket_lander").bH(new C.elQ(this),x.P)},
c3F(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cS.an()*0.6
w.f=new B.x(0.15+A.cS.an()*0.7,0.08)
w.r=new B.x((A.cS.an()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
pW(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.elR())
return}w=D.rl[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.x(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga2k()
v=v.ad(0,new B.x(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaNT())}if(m.dy){t=m.r
v=v.aF(0,t.aJ(0,t.gcG()*6*D.ayf[m.d]))}t=m.r=m.r.ad(0,v.aJ(0,d))
s=m.f=m.f.ad(0,t.aJ(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.x(-t.a*0.4,t.b)
t=new B.x(A.k.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.x(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Cp[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.aqG("rocket_lander",B.F(["unlocked",t],x.N,x.A))
C.IO("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga2k()/(D.rl[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ab(m.ga2k()/(D.rl[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dX(80,"",500,0,0.6,"noise")
B.fF()}}if(m.Q&&m.x>0&&A.o.E(A.k.bm(m.CW*20),2)===0)E.dX(90,"",70,0,0.12,"noise")
m.m(new C.elS())},
afx(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.f7S,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new C.eV(e[w].a,f.$1(w),new C.ely(this,g,w),v,h,v))
return new B.D(A.eM,B.w(B.a([u,A.cR,B.bZ(A.bD,s,A.br,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bDj(d){var w,v,u,t,s=this,r=null,q=s.ga2k()/(D.rl[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaNT()),o=D.ayf[s.d],n=B.n(24),m=d.c,l=B.I(m.j(0.6),A.q,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.au,B.d(d.d+" Gravity here: "+B.u(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.TU,r,r,r),A.R,s.afx("ENGINE: "+D.Hd[s.cx].b,D.Hd,new C.eln(s),new C.elo(s),A.cY),s.afx("FUEL TANK: "+D.QO[s.cy].b,D.QO,new C.elp(s),new C.elq(s),A.bk),s.afx("LANDING GEAR: "+D.Cp[s.db].b,D.Cp,new C.elr(s),new C.els(s),A.aP),s.afx("EXTRAS (tap to add)",D.awi,new C.elt(s),new C.elu(s),A.by)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fCT)
o=(q?A.bk:A.cs).j(0.14)
w=B.n(12)
v=A.k.ab(s.gaWA(),2)
u=A.k.ab(s.ga2k()/(D.rl[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.Cp[s.db].d*100)+".",r,r,r,r,r,r,D.f8v,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.i4,A.bT,r,r,r))
m.push(A.R)
m.push(new B.bI(A.A,r,r,new C.iS(A.o3,"Launch",new C.elv(s),A.bk,r),r))
return B.au(B.p(r,B.cc(B.w(m,A.F,r,A.e,A.Q,0,A.p),A.r,r,A.y,r,A.bP,r,r,A.ah),A.f,r,A.lH,new B.o(D.bj3,r,l,n,r,r,A.n),r,r,r,A.bT,r,r,r,r),r,r,r)},
aXJ(d,e,f,g){var w=null,v=f?A.cY:A.c.j(0.1),u=B.n(18),t=B.I(A.b2,A.q,1)
return B.og(A.jI,B.p(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.elk(e),new C.ell(e),w,w,w,w,new C.elm(e))},
aXI(d,e,f){return this.aXJ(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cA(new C.elJ(s,D.rl[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rl[w].a:"\ud83d\udd12"
o.push(new C.eV(v,s.d===w,new C.elK(s,w),r,D.rl[w].c,r))}v=B.a([s.aXI(F.amd,new C.elL(s),s.y),A.bc,s.aXJ(A.vR,new C.elM(s),s.Q,130),A.bc,s.aXI(A.NX,new C.elN(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aP:A.c.j(0.1)
t=B.n(18)
A.d.v(v,B.a([A.bc,B.aB(r,B.p(r,D.bLD,A.f,r,r,new B.o(u,r,B.I(A.b2,A.q,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.elO(s),r,r,r,r,r,r,!1,A.a7)],p))}return C.nS(A.cY,A.jt,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.w(B.a([new C.h8(o,"WORLD",r),B.B(v,A.m,r,A.b7,A.j,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
C.bgi.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rl[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.W(),d=B.N(),a0=j.c,a1=B.aq(D.blQ,a0,0.25)
a1.toString
d.sar(new B.a8(A.b1,A.b6,A.x,B.a([F.adT,a1],x.O),l,l).aA(0,new B.a9(0,0,g,f)))
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
r.F(new B.b5(0,s+14))
q=new B.f5()
q.dU(2)
for(p=0;p<=i;p+=18){e=new B.ap(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.an()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bA(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.F(new B.ap(i,h))
r.F(new B.ap(0,h))
r.F(new B.bE())
e=$.W()
d=B.N()
d.r=B.aq(a0,A.w,0.6).gp(0)
a2.aS(r,d)
o=B.ci(new B.x(k.ax*i,s+10),8,k.ay*i)
d=B.by(o,A.ix)
a0=B.N()
a0.r=A.bd.gp(0)
a2.aD(d,a0)
a0=B.by(o.cs(2),A.rD)
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
k.z=Y.HL
a2.af(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new B.aO(i,A.ao,l,l,B.a([],f))
n.F(new B.b5(-8,18))
n.F(new B.ap(0,44+Math.sin(k.CW*40)*8))
n.F(new B.ap(8,18))
n.F(new B.bE())
k=B.N()
k.r=A.aS.gp(0)
a2.aS(n,k)
i=new B.aO(i,A.ao,l,l,B.a([],f))
i.F(new B.b5(-4,18))
i.F(new B.ap(0,32))
i.F(new B.ap(4,18))
i.F(new B.bE())
k=B.N()
k.r=A.c.gp(0)
a2.aS(i,k)}k=e.r
m=new B.aO(k,A.ao,l,l,B.a([],f))
m.F(new B.b5(0,-26))
m.F(new B.cR(14,-10,11,18))
m.F(new B.ap(-11,18))
m.F(new B.cR(-14,-10,0,-26))
m.F(new B.bE())
i=B.N()
i.sar(D.bYh.aA(0,D.eOl))
a2.aS(m,i)
i=B.N()
i.r=A.aP.gp(0)
a2.af(D.wk,5,i)
i=new B.aO(k,A.ao,l,l,B.a([],f))
i.F(new B.b5(-11,6))
i.F(new B.ap(-20,20))
i.F(new B.ap(-11,18))
i.F(new B.bE())
h=B.N()
h.r=A.aw.gp(0)
a2.aS(i,h)
f=new B.aO(k,A.ao,l,l,B.a([],f))
f.F(new B.b5(11,6))
f.F(new B.ap(20,20))
f.F(new B.ap(11,18))
f.F(new B.bE())
k=B.N()
k.r=A.aw.gp(0)
a2.aS(f,k)
g.restore()},
av(d){return!0}}
C.aLw.prototype={
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
this.bvn()}}
C.aRr.prototype={}
C.a2O.prototype={}
C.b9s.prototype={}
C.Uc.prototype={
U(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eC(["skin"],x.N),o=new Float32Array(0)
return new C.aCj(w,v,u,t,s,r,q,new B.cv(null,x.z),p,D.Kr,D.Kr,A.az,A.cS,o,new Int32Array(0),$,A.bB,0,B.a([],x.X),null,null)}}
C.aCj.prototype={
a_(){var w=this
w.a1()
w.oZ()
w.as=new C.c0L(w.gcbN())
new C.dF5(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a7(0)
v.d=null}this.buw()},
cbO(d){var w,v=this
if(v.c==null)return
w=J.a3(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f0(0,B.F(["t","init","data",$.hdj],x.N,x.A))
v.at=!0
v.ax=""
v.ayl()
break
case"pick":v.m(new C.dEI(v,d))
break
case"shot":v.ahp(B.u(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.u(w.h(d,"text")))
break}},
ayl(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aug[q.CW]
v=new C.dEJ()
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
ahp(d){return this.csF(d)},
csF(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ahp=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cF.aK(A.a.b3(d,A.a.cK(d,",")+1))
w=6
return B.b(C.cqH(B.a([C.hd4(r,"image/png","body.png")],x.E),"Made in NGMY Core Protocol"),$async$ahp)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.I(x.gV).f.S(D.aOT)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ahp,v)},
axO(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
pW(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bm(w)!==A.k.bm(v.ok)){C.a80("kick",0.4)
v.a4Y(170,new C.dF6())}v.ok=w
return},
ahe(d){var w,v,u,t,s=this
s.m(new C.dEK(s,d))
if(d==null){s.fx=D.Kr
s.dy=1
w=s.as
if(w!=null)w.f0(0,B.F(["t","focus","group",null],x.N,x.A))
return}w=s.d.e
v=B.T(w).k("a_<1>")
u=B.C(new B.a_(w,new C.dEL(d),v),v.k("J.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.L(0,t)
if(s.ch===2)s.ch=1}s.ayl()
w=s.as
if(w!=null)w.f0(0,B.F(["t","focus","group",d],x.N,x.A))
s.go=0
s.cv4(t,d)
return},
cv4(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){C.a80("kick",0.8)
this.a4Y(260,new C.dEM())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dX(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a4Y(w*70,new C.dEN(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dX(110,"",360,0.7,0.3,"saw")
else C.cfI("organic",6+A.o.E(e.length,8),200,0.6)
break
case"bone":E.dX(210+e.length*4,"",80,0.6,0.55,"tri")
E.dX(2400,"",20,0,0.3,v)
break
case"muscle":E.dX(70,"",150,1,0.6,"sine")
break
case"vessel":E.dX(300,"",380,0.4,0.22,v)
C.a80("kick",0.3)
break
default:C.cfI("organic",2+A.o.E(e.length,6),200,0.4)}},
czE(d){this.m(new C.dEP(this,d))},
aY0(){var w,v,u,t,s,r,q,p=this,o=B.aY(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
if(p.axO(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.L(0,s.a)}q=B.C(o,o.$ti.k("cq.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.az(w)]
p.p4=""},
bUN(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new C.dEF(u,w,d))
v=x.t
C.IO("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.a4Y(1100,new C.dEG(u))
return}if(d==null){if(u.cx!=null)u.ahe(null)
return}u.ahe(d)},
bYt(d,e){var w,v=this,u=null,t=B.n(18),s=B.I(A.c5.j(0.5),A.q,1)
if(v.p1){w=v.p2
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.f4f,u,u,u)}else if(d==null||e==null)w=D.fic
else{w=x.p
w=B.B(B.a([B.E(B.w(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hX,u,u,u),A.cR,B.d(e.b,u,u,u,u,u,u,F.DC,u,u,u)],w),A.F,u,A.e,A.Q,0,A.p),1),B.aI(u,u,u,u,D.bO3,u,u,u,new C.dEH(v),u,u,u,u,"Back to the whole body",A.cc)],w),A.F,u,A.e,A.j,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(D.Wd,u,s,t,u,u,A.n),u,u,u,u,H.ahR,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dr_.h(0,g)
i.ayl()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d8Y
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,B.L)(v),++s){r=v[s]
if(i.axO(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=B.a([B.aI(h,h,h,h,D.qb,h,h,h,new C.dEW(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bI:B.DO(h,A.qn,q)}else q=A.kF
q=B.w(B.a([B.E(q,1),new B.D(F.YK,i.bYt(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){o=D.d0Y[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new C.eV(l,n,new C.dEX(i,o),o.c,A.c5,h))}p=B.a([new C.h8(p,h,h)],v)
if(!i.p1&&w.length!==0){n=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.L)(w),++s){k=w[s]
n.push(new C.eV(k,k===i.cx,new C.dEY(i,k),h,A.aS,h))}p.push(new C.h8(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(C.l0(A.cs,""+A.k.V(n)+" beats/min","Heart rate",180,40,new C.dEZ(i),n))}if(i.ch>0&&t.a===0){n=B.a([],v)
for(j=0;j<5;++j)n.push(new C.Fe(D.aug[j],i.CW===j,new C.dF_(i,j),!1,h))
p.push(new C.h8(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=B.a([new C.eV("Spin",n,new C.dF0(i),D.al2,A.aP,h),new C.iS(A.nj,"Reset view",new C.dF1(i),A.c,h),new C.eV(l,m,new C.dF2(i),A.Gs,A.aS,h)],v)
if(t.t(0,"organ"))v.push(new C.eV("Heartbeat sound",i.k4,new C.dF3(i),A.uc,A.cs,h))
p.push(new C.h8(v,h,h))
return C.nS(A.c5,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.w(p,A.m,h,A.e,A.Q,0,A.p))}}
C.aKG.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.aKH.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.buv()}}
C.c0L.prototype={
kG(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aK(e,"</script","<\\/script")
v=$.hjn
$.hjn=v+1
u="ngmy-body-viewer-"+v
$.yK()
$.qf().pY(u,new C.c0M(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fL(v,"message",new C.c0N(t),!1,x.gA)
t.b=u},
f0(d,e){var w,v
try{w=this.c
if(w!=null){w=B.byj(w.contentWindow)
if(w!=null)J.fQE(w,e,"*")}}catch(v){}}}
C.y8.prototype={}
C.Cj.prototype={}
C.nm.prototype={}
C.ba9.prototype={}
C.Uh.prototype={
U(){var w=x.N,v=x.y,u=x.S
return new C.aCl(B.U(w,x.a2),B.a([],x.cB),B.U(w,v),B.U(w,v),B.U(w,u),A.az,A.J,A.J,B.aY(u),$,A.bB,0,B.a([],x.X),null,null)}}
C.aCl.prototype={
a_(){var w=this
w.a1()
w.oZ()
w.acj()
$.aV.x1$.push(new C.dH3(w))},
acj(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$acj=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$acj)
case 6:q=e.tf("ngmy_circuit_passed_v1")
r=q==null?A.U:q
if(s.c!=null)s.m(new C.dGI(s,r))
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
return B.i($async$acj,v)},
acD(d){return this.c1g(d)},
c1g(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$acD=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.L(0,d)
u=3
w=6
return B.b(B.ay(),$async$acD)
case 6:r=f
q=s.cx
p=B.a6(q).k("jR<cq.E,m>")
q=B.C(new B.jR(q,new C.dGL(),p),p.k("J.E"))
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
return B.i($async$acD,v)},
awy(d,e,f,g){var w="c"+this.y++,v=new C.Cj(w,e,f,g)
this.d.n(0,w,v)
return v},
mx(d,e,f){return this.awy(0,e,f,0)},
abF(d,e){var w
if(D.z9.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new B.x(-36,w))},
tE(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aRU(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.nb$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.du(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.dZ(m,D.cLY[A.o.E(q.d,4)])&1)===0
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
bNs(){return this.aRU(null)},
pW(d){var w,v,u,t,s,r,q,p,o,n=this
n.bNs()
if(!n.ax)return
for(w=n.d,w=new B.bc(w,B.a6(w).k("bc<2>")).gae(0),v=new B.f4(w,new C.dH4()),u=n.f,t=n.w,s=0;v.C();){r=w.gT(0).a
if(u.h(0,r)===!0){q=n.nb$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.nb$)
o=s+1
E.dX(520+90*A.o.E(s,4),"",200,0,0.25,"square")
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
if(w.x.A(0,A.az)){$.aV.x1$.push(new C.dGG(w,d))
return}w.m(new C.dGH(w,d))},
cvm(d){this.m(new C.dGM(this,d,$.bD6()[d]))},
c5W(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bD6()[a0]
v=d.d
u=B.a6(v).k("bc<2>")
t=u.k("a_<J.E>")
s=t.k("J.E")
r=B.C(new B.a_(new B.bc(v,u),new C.dGB(),t),s)
A.d.aZ(r,new C.dGC())
q=B.C(new B.a_(new B.bc(v,u),new C.dGD(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dGE(d,w))
return}u=d.r
p=B.dO(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dz(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h1(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aRU(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.jH(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aH(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.m(new C.dGF(d,o,a0))},
axk(d){var w,v,u,t,s=this.d,r=B.a6(s).k("bc<2>")
s=B.C(new B.bc(s,r),r.k("J.E"))
r=B.T(s).k("dx<1>")
s=new B.dx(s,r)
s=new B.bR(s,s.gM(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ceb(d){var w,v,u,t,s,r=this.d,q=B.a6(r).k("bc<2>")
r=B.C(new B.bc(r,q),q.k("J.E"))
q=B.T(r).k("dx<1>")
r=new B.dx(r,q)
r=new B.bR(r,r.gM(0),q.k("bR<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bYm(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.z9.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.abF(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.z(p,o)
s=l}}}return t},
bMi(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.abF(p,o)
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
c5Y(d){var w,v,u,t=this,s=t.axk(d)
if(s!=null){w=t.d.h(0,s)
w.toString
B.f_()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
E.dX(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dGN())
return}u=t.bMi(d)
if(u!=null)t.m(new C.dGO(t,u))
else t.m(new C.dGP(t))},
avn(d){return this.c0g(d)},
c0g(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$avn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.axk(d)
if(s==null){w=1
break}B.jA()
t.m(new C.dGK(t,s))
case 1:return B.h(u,v)}})
return B.i($async$avn,v)},
bz9(d){if(this.x.A(0,A.az))return
this.m(new C.dGA(this,d,A.cS))
B.f_()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bD6()[g]
g=x.p
v=B.a([B.aI(h,h,h,h,B.X(i.ax?A.uc:O.C2,A.ad,h,h,h,21),h,h,h,new C.dGY(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.n(16)
s=A.cn.j(0.14)
r=B.I(A.cn.j(0.5),A.q,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.f3p,h,h,h),B.d(w.b,h,h,h,h,h,h,D.fbI,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.lS,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bk:A.f1,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.B(B.a([B.E(B.w(q,A.F,h,A.e,A.j,0,A.p),1),B.bG(D.ftf,i.gc5V(),B.bm(A.cn,h,h,h,h,h,h,h,h,h,h,A.cc))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,X.Mq,D.btl,h,h,1/0))}u.push(B.E(B.cA(new C.dGZ(i)),1))
if(f!=null){t=B.n(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.d(D.z9.h(0,r).a+": "+D.z9.h(0,r).e,h,h,h,h,h,h,A.rQ,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A7.ahB,A.bT,h,h,1/0))}u=B.w(u,A.m,h,A.e,A.j,0,A.p)
t=B.a([],g)
for(s=D.z9.gdQ(D.z9),s=s.gae(s);s.C();){r=s.gT(s)
q=new B.aR(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.az(o.j(0.5),1,A.q,-1)
t.push(B.aB(h,B.p(h,B.w(B.a([B.X(p.b,o,h,h,h,20),A.bz,new B.y(p.a,h,D.aQK,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new B.o(n,h,new B.bO(m,m,m,m),new B.bo(q,q,q,q),h,h,A.n),h,h,h,A.fB,Ah.Mm,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dH_(i,r),h,h,h,h,h,h,!1,A.a7))}s=B.a([],g)
for(l=0;l<4;++l){k=D.ddi[l]
s.push(new C.iS(A.NY,k.b,new C.dH0(i,k),A.cn,h))}s.push(new C.iS(D.NB,"Clear",new C.dH1(i),A.cs,h))
r=B.a([],g)
for(j=0;q=$.bD6(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.e9:A.lq
o=i.ay
n=i.cx.t(0,j)?A.bk:A.bH
r.push(new C.eV(q.a,o===j,new C.dH2(i,j),p,n,h))}return C.nS(A.cn,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.w(B.a([new C.h8(t,"PARTS",h),new C.h8(s,"TRY",h),new C.h8(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
C.bas.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=B.N()
w.r=D.acs.gp(0)
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
g=a5.abF(j,m.c)
f=q.h(0,l)===!0
l=$.W()
e=B.a([],p)
d=new B.aO(l.r,A.ao,a4,a4,e)
e.push(new B.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new B.pD(h+a0,i,l-a0,a1,l,a1))
if(f){l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.b=A.af
l.c=9
l.r=A.bH.j(0.28).gp(0)
l.z=G.p8
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
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ad(0,D.Ii)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new B.aO($.W().r,A.ao,a4,a4,B.a([],p))
w=a3.b
p.F(new B.b5(a6,w))
r=g.b
p.F(new B.pD(a6+a0,w,a5-a0,r,a5,r))
r=B.N()
r.b=A.af
r.c=3
r.r=A.ad.gp(0)
a7.aS(p,r)}for(a5=new B.du(o,o.r,o.e);a5.C();)this.c5X(a7,a5.d)},
c5X(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.z9.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.ci(a0.c,64,64)
s=B.by(t,A.la)
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
p.sar(new B.c_(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.K],x.O),g,g).aA(0,B.bV(a0.c,52)))
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
l=v===!0?F.ua:D.bHW}else l=e.b
k=C.fW8(B.jH(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a6(d,v.aF(0,new B.x(p/2,q.gbf(q)/2)))
j=C.fW8(e.a,10.5,A.c,g,g,A.H)
j.a6(d,a0.c.ad(0,new B.x(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.fW8(f,9,u?A.dO:A.c_,g,g,A.u)
i.a6(d,a0.c.ad(0,new B.x(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aYD(d,w.abF(a0,h),o)
this.aYD(d,a0.c.ad(0,D.Ii),o)},
aYD(d,e,f){var w
$.W()
w=B.N()
w.r=D.acs.gp(0)
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
C.aKL.prototype={
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
this.buA()}}
C.Ni.prototype={
U(){return new C.aCC(B.mA(0,null,null))}}
C.Kl.prototype={
a3(){return"_UnfoldStyle."+this.b}}
C.AA.prototype={}
C.aCC.prototype={
c61(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.m(new C.dMU(w,e))},
c_9(){var w=this
w.e.q()
w.e=B.mA(w.f,null,null)
w.m(new C.dMT(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.op(t,B.c6(v,A.bY,t?new C.bqd(w.e,w.gc60(w),new C.dMV(d),v):new C.aGN(u,new B.cx(u.b,x.gj)),v,!1,!1,v,!1),new C.dMW(w,u),x.K)}}
C.brN.prototype={}
C.bqd.prototype={
aYE(d,e){var w=null
return new B.D(H.Zc,B.w(B.a([B.d(d,w,w,w,w,w,w,D.f4_,w,w,w),A.bz,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=B.B(B.a([B.aI(v,v,v,v,P.nk,v,v,v,w.e,v,v,v,v,v,v),A.rK,D.bzb],u),A.m,v,A.e,A.j,0,v,v),s=w.aYE("STUDIOS","Play, make things, and keep what you make")
$.bD7()
return B.bl(!0,B.w(B.a([new B.D(D.bye,t,v),B.E(B.vz(0,v,A.r,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,B.a([new B.m8(s,v),new B.nQ(A.hM,B.OS(new B.os(new C.eVO(d),10,!0,!0,!0,0,B.t_(),v),D.aOI),v),new B.m8(w.aYE("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.nQ(D.bts,B.OS(new B.os(new C.eVP(w),6,!0,!0,!0,0,B.t_(),v),D.aOI),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0)}}
C.aeA.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.n(20),n=B.n(20),m=B.aq(F.n1,p,0.3)
m.toString
w=x.O
m=B.a([m,D.afc],w)
v=B.I(p.j(0.6),A.q,1.2)
u=x.V
t=B.a([new B.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=B.aq(p,A.w,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ac(0,A.G,p.j(0.5),A.J,12)],u)
return B.aF(!1,A.a1,!0,r,B.aL(!1,o,!0,B.eB(B.w(B.a([B.p(r,B.X(q.c,A.c,r,r,r,24),A.f,r,r,new B.o(r,r,r,r,u,new B.a8(A.ay,A.aC,A.x,w,r,r),A.a5),r,44,r,r,r,r,r,44),A.N,B.d(q.a,r,2,A.a2,r,r,r,B.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cR,B.d(q.b,r,2,A.a2,r,r,r,B.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b7,A.j,0,A.p),r,new B.o(r,r,v,n,t,new B.a8(A.ay,A.aC,A.x,m,r,r),A.n),r,A.FK,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
C.ads.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.n(20),g=B.n(20),f=B.aq(F.n1,A.d.gH(i),0.24)
f.toString
w=x.O
f=B.a([f,D.afc],w)
v=B.I(A.d.gH(i).j(0.35),A.q,1)
u=x.V
t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cz,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.aR(6,6)
m=B.a([A.d.gH(i),A.d.gak(i)],w)
l=B.a([new B.ac(0,A.G,A.w.j(0.45),H.aHg,0)],u)
r.push(B.p(k,B.X(q[p],A.c,k,k,k,11),A.f,k,k,new B.o(k,k,k,new B.bo(n,n,n,n),l,new B.a8(A.a3,A.a8,A.x,m,k,k),A.n),k,17,k,new B.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.w(r,A.m,k,A.e,A.Q,0,A.p)
u=B.aq(A.d.gH(i),A.d.gak(i),0.4)
u.toString
return B.aF(!1,A.a1,!0,k,B.aL(!1,h,!0,B.eB(B.w(B.a([new B.a7(58,k,w,k),A.R,B.d(j.b,k,2,A.a2,k,k,k,B.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.au,B.X(A.C0,A.d.gH(i),k,k,k,18)],s),A.m,k,A.b7,A.j,0,A.p),k,new B.o(k,k,v,g,t,new B.a8(A.ay,A.aC,A.x,f,k,k),A.n),k,A.FK,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag)}}
C.Q_.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.aq(A.d.gak(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,B.c0(j,new B.o(h,j,j,B.n(22),j,j,A.n),A.be),j,j,2,2,8,j)
u=B.n(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.Sa,26),new B.ac(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.n(22)
p=B.aq(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gak(i)
i=B.aq(A.d.gak(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bT(0,B.c0(j,new B.o(j,j,j,j,j,new B.a8(A.ay,A.aC,A.x,B.a([p,o,n,i],m),D.diB,j),A.n),A.be),0,0,0),B.ao(j,B.c0(j,new B.o(j,j,j,j,j,new B.a8(A.b1,A.b6,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.be),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bT(0,B.b4(j,j,j,new C.brb(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.I(A.c.j(0.5),A.q,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.p(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a5),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.f5B,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.au,B.d(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a6,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Tm)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.n(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.fL,B.B(B.a([s,A.eo,B.E(B.w(p,A.F,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(B.bT(0,B.e2(B.el(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=B.n(22)
m.push(B.bT(0,B.e2(B.c0(j,new B.o(j,j,B.I(A.c.j(0.3),A.q,1.2),i,j,j,A.n),A.be),!0,j),0,0,0))
return new B.a7(w,v,new B.an(A.V,j,A.aa,A.f,B.a([h,B.bT(0,B.c0(B.bw(q,new B.an(A.V,j,A.aa,A.r,m,j),A.aq),new B.o(j,j,j,u,r,j,A.n),A.be),0,0,0)],l),j),j)}}
C.brb.prototype={
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
C.bqH.prototype={
B(d){var w=null,v=B.n(22),u=B.a([D.bh9,D.aep],x.O),t=this.e,s=B.I(A.d.gH(t).j(0.4),A.q,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.ke,24)],x.V),q=B.n(22),p=A.d.gH(t)
return new B.a7(this.c,this.d,B.c0(B.bw(q,B.b4(B.au(B.X(A.jq,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.b9a(p,w),A.az),A.aq),new B.o(w,w,s,v,r,new B.a8(A.ay,A.aC,A.x,u,w,w),A.n),A.be),w)}}
C.b9a.prototype={
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
C.aGN.prototype={
U(){return new C.aGO(new B.cv(null,x.z),null,null)}}
C.aGO.prototype={
gtZ(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,D.bqR,null,1,null,v)
w.cL(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
gZq(){var w,v=this,u=v.e
if(u===$){w=B.bj(null,A.fK,null,1,null,v)
w.fg(0,!0)
v.e!==$&&B.bL()
v.e=w
u=w}return u},
gawA(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc5Z(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaV5(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaVO(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb6a(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a1()
var w=this.gtZ()
w.dd()
w.dV$.L(0,this.gcv5())},
cv6(){var w,v,u,t,s,r,q,p=this,o=p.gtZ().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gawA().a){case 0:w=D.nn
break
case 1:w=D.uj
break
case 2:w=D.a2C
break
case 3:w=D.nn
break
case 4:w=D.d5W
break
case 5:w=D.uj
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.aa8)r=0.09
else r=s===D.aa9?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dX(260+90*v,"",260,1.6,0.18,"tri")
u=D.c_O[v]
C.pU("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.IO("bell",D.c8z,1400,0.35)}}p.ax=o},
q(){this.gtZ().q()
this.gZq().q()
this.bwk()},
afY(){var w=this
w.gtZ().cUl(0,B.dD(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new C.eVu(w))},
cgd(){this.gtZ().bR(0)
this.m(new C.eVt(this))},
adD(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$adD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaVO(),s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
l.push(new B.ar(new B.ba(q,A.b3,A.aM),$.aw()))}m=B.a([],m)
for(t=u.gb6a(),s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){p=t[r]
m.push(new B.ar(new B.ba(p,A.b3,A.aM),$.aw()))}o=B.C(u.gaV5(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bQ(F.n1,null,new C.eVs(u,l,m,o),t,!0,!0,!0,A.lz,!1,!1,x.H),$async$adD)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.R$=$.aw()
n.P$=0}return B.h(null,v)}})
return B.i($async$adD,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gawA(),f=i.a.c,e=f.b,d=i.gc5Z(),a0=new C.AA(g,e,f.c,d,i.gaV5(),i.gaVO(),i.gb6a())
f=B.aq(A.d.gH(d),A.d.gak(d),0.4)
f.toString
g=x.p
w=B.a([B.aI(h,h,h,h,B.X(i.at?A.uc:O.C2,A.ad,h,h,h,21),h,h,h,new C.eVC(i),h,h,h,h,"Sound",h),B.aI(h,h,h,h,D.bRz,h,h,h,i.gc6_(),h,h,h,h,"Edit words and pictures",h),B.aI(h,h,h,h,D.qb,h,h,h,new C.eVD(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c7(i.gZq(),new C.eVE(i,a0),h),B.cA(new C.eVF(i,a0))],g)
u=i.as
t=u?i.gcgc():i.gcix()
u=u?D.bHg:A.u5
s=B.aq(A.d.gH(d),A.d.gak(d),0.4)
s.toString
t=B.B(B.a([B.aI(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cc),B.E(B.c7(i.gtZ(),new C.eVG(i,a1,a0),h),1),B.aI(h,h,h,h,D.bNU,h,h,h,new C.eVH(i),h,h,h,h,"Replay",A.cc)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.ab(s,1)
r=B.aq(A.d.gH(d),A.d.gak(d),0.4)
r.toString
s=C.l0(r,u+"x","Speed",2.5,0.4,new C.eVI(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.dfT[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.aq(A.d.gH(d),A.d.gak(d),0.4)
r.toString
u.push(new C.eV(p.b,o===p.a,new C.eVJ(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.c0a[q]
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
d.push(B.aB(h,B.p(h,h,A.f,h,h,new B.o(h,h,new B.bO(j,j,j,j),h,h,new B.a8(A.ay,A.aC,A.x,n,h,h),A.a5),h,l,h,D.ahl,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eVK(i,n),h,h,h,h,h,h,!1,A.a7))}return C.nS(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.eH(new B.an(A.V,h,A.b0,A.r,v,h),i.f),e,B.w(B.a([t,s,new C.h8(u,"STYLE",h),new C.h8(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
byl(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nn[r]
p=A.k.D((1-A.et.au(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.nn[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.nn[r]
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
i=D.nn[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nn[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nn[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cL(0,r*118,0,f,f,f,new B.kF(q,new B.iH(n,f,A.b1,!0,f,new C.Q_(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nn[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.nn[r]
t=v+0.12
e.push(new B.cL(0,r*118-3-2,0,f,f,4,new B.mj(new C.bpQ(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a7(a2,358,new B.an(A.V,f,A.aa,A.f,e,f),f)},
bOW(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.uj[r]
p=A.pO.au(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.uj[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.uj[r]
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
g=new C.Q_(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dp()
k.fC(3.141592653589793)
k=new B.iH(k,f,A.A,!0,f,new C.bqH(a2,108,w,f),f)}e.push(new B.cL(0,r*130,0,f,f,f,new B.kF(q,new B.iH(m,f,A.A,!0,f,k,f),f),f))}return new B.a7(a2,378,new B.an(A.V,f,A.aa,A.f,e,f),f)},
cAa(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a2C[w]
l.push(A.ct.au(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bT(0,B.b4(n,n,n,new C.btg(d.d,l,D.avW,m,C.bqc(e,0.4,0.62),f,C.bqc(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.fWE(g,w)
q=D.avW[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cL(r,s-q*m*p+12,n,n,t,n,new B.kF(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.fWE(g,w)
r=D.a2C[w]
q=r+0.15
v.push(new B.cL(s,l,n,n,t,n,new B.kF(A.k.D((e-q)/(r+0.25-q),0,1),new B.y(u[w],n,A.U2,n,A.L,n,n,n,n,n,n,n),n),n))}return new B.a7(g,m+90,new B.an(A.V,n,A.aa,A.f,v,n),n)},
bEA(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.ct.au(0,C.bqc(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bT(0,B.au(B.dU(B.b4(f,f,f,new C.bph(A.d.gH(a1),C.bqc(a3,0,0.2),a4,f),new B.as(a5*0.95,70)),D.e6R),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dz.au(0,A.k.D((o-0.7)/0.3,0,1))
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
g=j>0.5?A.k.E(r,1):-1
w.push(new B.z(o,new B.cL(0,0,0,0,f,f,new B.co(A.A,f,f,new B.kF(k*(0.45+0.55*o),B.dU(new B.iH(l,f,A.A,!0,f,new C.Q_(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.x(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new C.eVl())
A.d.v(a0,new B.M(w,new C.eVm(),x.fR))
return new B.a7(a5,330,new B.an(A.V,f,A.aa,A.f,a0,f),f)},
bDK(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.uj[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.lI.au(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.uj[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.axW[q]
k=B.dp()
k.mK(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jQ(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.uj[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cL(0,0,0,0,e,e,new B.co(A.A,e,e,new B.kF(m,B.dU(new B.iH(k,e,A.A,!0,e,new C.Q_(d,92,w,p,j,i,0,g*s,h,e),e),new B.x(0,l)),e),e),e))
l=D.uj[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cL(0,0,0,0,e,e,new B.co(A.A,e,e,B.dU(new B.mj(new C.b9P(w,f,q,e),e,new B.as(r,212),e,e),new B.x(0,D.axW[q])),e),e))}return new B.a7(a4,330,new B.an(A.V,e,A.aa,A.f,a0,e),e)},
bBg(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.x(-b0,-150),new B.x(b0,-40),D.e6V],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nn[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.ct.au(0,p)
q=D.ay4[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nn[r]
f=g+0.2
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.nn[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=B.dp()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.mK(l*h+D.d9W[r]*o)
f.fC(l*0.9)
h=0.55+0.45*o
f.jQ(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cL(0,0,0,0,a3,a3,new B.co(A.A,a3,a3,new B.kF(g,B.dU(new B.iH(f,a3,A.A,!0,a3,new C.Q_(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.x(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nn[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.ay4[r]
a6.push(new B.cL(0,0,0,0,a3,a3,new B.co(A.A,a3,a3,B.dU(new B.mj(new C.bpj(A.d.gH(w),a2,a3),a3,new B.as(a4,30),a3,a3),new B.x(0,q+48-4)),a3),a3))}}return new B.a7(b0,330,new B.an(A.V,a3,A.aa,A.f,a6,a3),a3)}}
C.bpQ.prototype={
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
t.z=G.p8
d.aD(q,t)
t=B.by(u,A.hb)
q=B.N()
q.r=A.c.j(s).gp(0)
d.aD(t,q)},
av(d){return d.c!==this.c||d.d!==this.d}}
C.bph.prototype={
a6(d,e){var w,v,u=this.c,t=B.ci(e.ei(A.J),e.b*u,e.a*u)
$.W()
u=B.N()
u.b=A.af
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=Y.HL
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
C.b9P.prototype={
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
C.bpj.prototype={
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
t.drawOval(B.bY(p),n)
n.delete()}},
av(d){return d.c!==this.c}}
C.btg.prototype={
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
d=C.fWE(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.W()
a3=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.mD
a4=a3.K()
t.drawOval(B.bY(new B.a9(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new B.a9(d,a1,a3,a1+a0)
a6=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a7=B.aq(A.d.gH(w),A.c,0.1)
a7.toString
a6.sar(new B.a8(A.b1,A.b6,A.x,B.a([a7,A.d.gak(w)],v),c2,c2).aA(0,a5))
a4=a6.K()
t.drawRect(B.bY(a5),a4)
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
t.drawRect(B.bY(a5),a4)
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
t.clipRect(B.bY(a5),$.n5()[1],!0)
$.W()
a1=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a1.sar(new B.a8(A.b1,A.b6,A.x,B.a([A.K,A.c.j(0.4),A.K],v),c2,c2).aA(0,c0))
a4=a1.K()
t.drawRect(B.bY(c0),a4)
a4.delete()
t.restore()}}},
av(d){return!0}}
C.aMm.prototype={
aW(){this.b6()
this.b5()
this.dI()},
q(){var w=this,v=w.b2$
if(v!=null)v.a4(0,w.gdD())
w.b2$=null
w.a2()}}
C.a01.prototype={
a3(){return"_Role."+this.b}}
C.q4.prototype={}
C.qM.prototype={}
C.Cn.prototype={}
C.Z0.prototype={}
C.aeq.prototype={}
C.a0e.prototype={
gY(d){return this.d}}
C.Cx.prototype={}
C.abn.prototype={}
C.abD.prototype={}
C.adw.prototype={}
C.bgf.prototype={
a2t(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dX(d,"",e,g,h,f)},
b7c(d,e,f){return this.a2t(d,e,f,0,0.55)},
aB3(d,e,f,g){return this.a2t(d,e,f,0,g)},
b7d(d,e,f,g){return this.a2t(d,e,f,g,0.55)},
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
ajC(d,e,f,g){var w="n"+this.ay++,v=new C.qM(w,e,f,g)
this.a.n(0,w,v)
this.aT()
return v},
B2(d,e,f){return this.ajC(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bs(w.b,new C.dhi(e))
A.d.bs(w.c,new C.dhj(e))
w.aT()},
bb1(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mC.h(0,v.b).c===D.wU)return!1
w=this.b
if(A.d.b4(w,new C.dhf(d,e)))return!1
w.push(new C.Cn(d,e))
this.aT()
return!0},
bZ6(d){var w
if(d.b==="beat")return D.c8J[A.o.E(d.d,4)]
w=this.at
switch(A.o.E(d.d,3)){case 1:return 350+w.az(500)
case 2:return 1400+w.az(2200)
default:return 450+w.az(2000)}},
aEy(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.E(w,6)
t=D.ayk[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Cx(u,t,j.ax,90))
w.push(new C.Cx(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.an()*3.141592653589793*2
v.push(new C.a0e(u,new B.x(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b7c(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.E(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.an()*3.141592653589793*2
p=100+w.an()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.aq(t,A.c,w.an()*0.5)
m.toString
v.push(new C.a0e(u,new B.x(o*p,n*p),m,3+w.an()*4.5,1000+w.az(700),j.ax))}j.f.push(new C.Cx(u,t,j.ax,120))
j.aB3(120,200,"noise",0.5)
j.b7c(261.63*Math.pow(2,([7,12,16,19][w.az(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Cx(u,t,j.ax,230))
w.push(new C.Cx(u,t,j.ax+160,160))
w.push(new C.Cx(u,t,j.ax+320,100))
j.b7d(180+j.at.az(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.abn(u,new B.x((w.an()-0.5)*220,-260-w.an()*180),t,j.ax))
j.b7d(300+w.az(300),110,h,0.8)
break
case"comet":w=j.at
q=w.an()*3.141592653589793*2
j.w.push(new C.abD(u,u.ad(0,new B.x(Math.cos(q),Math.sin(q)).aJ(0,260+w.an()*200)),t,j.ax))
j.a2t(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fF()
j.a2t(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.adw(u,D.axI[v],t,j.ax))
j.aB3(261.63*Math.pow(2,([0,5,9,12][j.at.az(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aB3(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c4P[A.o.E(w,3)]
for(k=1;k<=3;++k)j.cqf(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.f4(w,new C.dhg(d));v.C();)j.azA(w.gT(0),j.ax+D.ch9[A.o.E(g.d,4)])
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
case"chance":s=j.at.az(100)<D.cy7[A.o.E(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.f4(w,new C.dhh(d));v.C();)j.azA(w.gT(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.zc(w,0,v-700)},
cqf(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.Z0(e,"~"+d))},
azA(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.aeq(d.a,v,e,w))
u.push(new C.Z0(w,v))},
a69(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aEy(r)
u.n(0,r,o.ax+o.bZ6(s))}}w=o.c
v=B.T(w).k("a_<1>")
q=B.C(new B.a_(w,new C.dhk(o),v),v.k("J.E"))
if(q.length!==0){A.d.bs(w,new C.dhl(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.L)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b3(u,1)
for(u=A.d.gae(v),r=new B.f4(u,new C.dhm(p));r.C();)o.azA(u.gT(0),o.ax)}else o.aEy(u)}}A.d.bs(o.d,new C.dhn(o))
A.d.bs(o.e,new C.dho(o))
A.d.bs(o.f,new C.dhp(o))
A.d.bs(o.w,new C.dhq(o))
A.d.bs(o.x,new C.dhr(o))
A.d.bs(o.r,new C.dhs(o))
o.aT()},
v5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
Tq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.S.aL(0,d,null))
k.a8(0)
for(o=x.j,n=J.aW(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gT(n)
u=B.u(J.q(v,"k"))
if(!D.mC.ai(0,u))continue
t=B.u(J.q(v,"id"))
m.n(0,t,new C.qM(t,u,new B.x(B.e1(J.q(v,"x"))*k.cy.a,B.e1(J.q(v,"y"))*k.cy.b),A.k.N(B.e1(J.q(v,"p")))))
s=B.c8(B.aK(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aW(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gT(o)
q=B.u(J.q(r,0))
p=B.u(J.q(r,1))
if(m.ai(0,q)&&m.ai(0,p))n.push(new C.Cn(q,p))}k.aT()
return!0}catch(l){return!1}},
cP4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.qM(n,r,new B.x(q*p.a,o*p.b),s))
l.aT()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bb1(w[m.a],w[m.b])}},
gY(d){return this.cy}}
C.FN.prototype={}
C.VE.prototype={
U(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aDN(new C.bgf(B.U(w,x.f3),v,u,t,s,r,q,p,o,B.U(w,n),B.U(w,n),B.U(w,n),B.U(w,n),A.cS,A.K,A.az,$.aw()),A.bB,A.J,A.J,A.U,null,null)}}
C.aDN.prototype={
acc(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$acc=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.ay(),$async$acc)
case 6:q=n.jJ(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.ekR(s))
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
return B.i($async$acc,v)},
a99(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$a99=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.ekG(s))
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
bKu(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a6(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new B.bc(n,w).cM(0,0,new C.ekI())+"|"+A.d.cM(o,0,new C.ekJ())
if(v===p.ch)return p.CW
u=new C.ekM()
t=x.s
s=B.a([],t)
r=new C.ekN(p,s,u)
for(n=new B.bc(n,w).gae(0),w=new B.f4(n,new C.ekK());w.C();){q=n.gT(0)
if(!A.d.b4(o,new C.ekL(q)))s.push(B.u(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.dc(s,0,B.dG(5,"count",x.S),x.N).dM(0)},
a_(){var w,v=this
v.a1()
v.acc()
v.d.db=v.ay
w=v.wl(new C.elg(v))
w.ia(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this,v=w.as
if(v!=null)v.a7(0)
v=w.e
v===$&&B.c()
v.q()
v=w.d
v.R$=$.aw()
v.P$=0
w.bvl()},
abJ(d){return this.bYz(d)},
bYz(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$abJ=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.ay(),$async$abJ)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Tq(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aWe(A.d.gH(D.ax9))
if(s.c!=null)s.m(new C.ekQ())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$abJ,v)},
aWe(d){this.d.cP4(0,d.c,d.d)
this.E8()},
E8(){var w=this.as
if(w!=null)w.a7(0)
this.as=B.cM(A.lR,new C.ekC(this))},
awB(d){var w,v,u,t,s=this.d.a,r=B.a6(s).k("bc<2>")
s=B.C(new B.bc(s,r),r.k("J.E"))
r=B.T(s).k("dx<1>")
s=new B.dx(s,r)
s=new B.bR(s,s.gM(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cec(d){var w,v,u,t,s,r=this.d.a,q=B.a6(r).k("bc<2>")
r=B.C(new B.bc(r,q),q.k("J.E"))
q=B.T(r).k("dx<1>")
r=new B.dx(r,q)
r=new B.bR(r,r.gM(0),q.k("bR<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bYn(d){var w,v,u,t,s,r,q,p,o,n
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
c64(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hjo(new B.x(n.a+36,n.b+0),new B.x(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cxV(d){var w,v,u,t,s,r,q=this,p=q.awB(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f_()
u=v.b
if(u==="button"){w.aEy(p)
return}if(q.r)return
t=D.mC.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qD)s=6
else s=1
v.d=A.o.E(v.d+1,s)
w.aT()
q.E8()
return}if(q.r)return
r=q.c64(d)
if(r!=null){w=q.d
A.d.cF(w.b,r)
w.aT()
q.E8()}},
cfv(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cec(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.awB(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aF(0,d)}},
cfw(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aT()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.x(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aT()}}},
b0f(){var w,v,u=this
if(u.z!=null){w=u.bYn(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bb1(v,w)}else v=!1
if(v){B.kn()
u.E8()}u.z=null
u.d.aT()}else if(u.x!=null){if(u.at)u.E8()
u.x=null}},
acp(d){return this.c0h(d)},
c0h(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$acp=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.awB(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jA()
p=t.c
p.toString
w=3
return B.b(B.bQ(F.n1,null,new C.ekT(q),p,!0,!0,!1,A.lz,!1,!1,x.y),$async$acp)
case 3:if(f===!0){r.W(0,s)
t.E8()}case 1:return B.h(u,v)}})
return B.i($async$acp,v)},
c62(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.B2(0,d,new B.x(v.a*(0.25+u.an()*0.5),v.b*(0.2+u.an()*0.55)))
B.f_()
this.E8()},
ag5(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ag5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bQ(F.n1,null,new C.ekV(),s,!0,!0,!0,A.lz,!1,!1,x.es),$async$ag5)
case 2:t=e
if(t!=null)u.aWe(t)
return B.h(null,v)}})
return B.i($async$ag5,v)},
adE(d){var w=0,v=B.j(x.H),u=this,t
var $async$adE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ca(null,null,!0,null,new C.ekF(),t,null,!0,!0,x.y),$async$adE)
case 2:if(f===!0){u.d.a8(0)
u.E8()}return B.h(null,v)}})
return B.i($async$adE,v)},
B(d){var w=this,v=null,u=B.a([B.ahQ(w.r?new B.bI(A.a3,v,v,new B.D(A.FL,B.hm(D.bLT,D.fm9,new C.ele(w),v),v),v):w.c65(),A.bb,A.iJ),B.E(B.cA(new C.elf(w)),1)],x.p)
if(!w.r)u.push(w.csI())
return B.c6(v,A.bY,B.bl(!0,B.w(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0),v,!1,!1,v,v)},
bGf(){var w=null,v=new C.ekH(),u=A.w.j(0.7),t=B.n(26),s=B.I(A.bu.j(0.5),A.q,1)
return B.bT(0,B.el(B.au(B.p(w,B.cc(B.w(B.a([D.fxe,A.au,D.fEL,A.aB,v.$4(A.oX,A.bu,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Z.BX,A.cn,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.lp,A.c5,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.alg,A.bH,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fE4,new B.bI(A.a8,w,w,B.bK(!1,D.fup,w,w,!0,w,w,this.gbG8(),w,w),w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),A.f,w,A.VB,new B.o(F.n1,w,s,t,w,w,A.n),w,w,w,A.fC,A7.aiz,w,w,w),w,w,w),u,!0),0,0,0)},
c65(){var w=this,v=null,u=B.aI(v,v,v,v,P.nk,v,v,v,new C.el0(w),v,v,v,v,v,v),t=w.a8C(A.NN,"How it works",new C.el1(w),!0),s=w.ay?A.uc:O.C2
return new B.D(D.bxu,B.B(B.a([u,D.byY,t,w.a8C(s,"Sound",new C.el2(w),!0),w.a8C(A.e0,"Ideas",w.gcje(),!0),w.a8C(D.NB,"Clear",w.gc63(w),!0),w.aNb(A.j2,"Show",new C.el3(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aNb(d,e,f,g,h){var w=null,v=h?A.bu:A.c.j(0.08),u=B.n(14),t=B.n(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Ab.tO,B.aF(!1,A.a1,!0,u,B.aL(!1,t,!0,B.hw(new B.D(new B.Q(8,8,8,8),B.B(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ag),w)},
a8C(d,e,f,g){return this.aNb(d,e,f,g,!1)},
csI(){var w=null,v=new C.ekX(this),u=A.c.j(0.08)
return B.p(w,B.cc(B.B(B.a([v.$2("START",D.wU),v.$2("CHANGE",D.DY),v.$2("REACT",D.qD)],x.p),A.F,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aN),A.f,w,w,new B.o(F.AK,w,new B.bO(new B.az(u,1,A.q,-1),A.W,A.W,A.W),w,w,w,A.n),w,w,w,w,D.bsK,w,w,w)},
csJ(d){var w,v,u,t,s=null,r=D.mC.h(0,d)
r.toString
w=B.n(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.I(v.j(0.5),A.q,1)
return new B.D(A.fB,B.aB(s,B.p(s,B.w(B.a([B.X(r.b,v,s,s,s,22),A.cR,B.d(r.a,s,1,A.a2,s,s,s,D.aQK,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a8(A.b1,A.b6,A.x,u,s,s),A.n),s,s,s,s,A.hx,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ekW(this,d),s,s,s,s,s,s,!1,A.a7),s)}}
C.bgg.prototype={
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
d.push(new B.pD(h+a1,i,f-a1,g,f,g))
a2=D.mC.h(0,k.b).d
a3=D.mC.h(0,j.b).d
e=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
e.b=A.af
e.c=3
e.d=A.bV
d=B.a([a2.j(0.55),a3.j(0.55)],p)
g=B.rz(new B.x(h,i),new B.x(f,g))
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
a6=C.hjo(new B.x(i.a+36,i.b+0),new B.x(h.a-36,h.b),a5)
$.W()
h=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gp(0)
h.z=G.p8
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
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ad(0,D.Ii)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new B.aO($.W().r,A.ao,b4,b4,B.a([],o))
o=a8.b
a0.F(new B.b5(t,o))
i=a9.b
a0.F(new B.pD(t+a1,o,w-a1,i,w,i))
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
e=B.rz(i,h)
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
i.z=A.lx
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
i.z=A.lx
q=i.K()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
i.sar(new B.c_(W.wX,0.5,A.x,b4,0,B.a([A.c,h],p),b4,b4).aA(0,B.bV(j.a,8)))
q=i.K()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,B.L)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=C.bgh(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a6(b8,new B.x(t.a-o/2,t.b-(40+60*v+p.gbf(p)/2)))}for(b5=new B.du(n,n.r,n.e);b5.C();)b3.cf3(b8,b5.d,b6)
b7.restore()},
cf3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mC.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=B.ci(e.c,64,64)
t=B.by(u,A.iw)
s=t.eR(A.cz)
$.W()
r=B.N()
r.r=A.w.j(0.55).gp(0)
r.z=A.mD
d.aD(s,r)
if(v>0){s=t.cs(6)
r=B.N()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.zb
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
o=C.bgh(B.jH(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a6(d,p.aF(0,new B.x(s/2,r.gbf(r)/2)))
n=C.bgh(h.a,11,A.c,j,j,A.H)
n.a6(d,e.c.ad(0,new B.x(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.E(e.d,r)]
else m=i==="pop"?D.axI[A.o.E(e.d,6)]:j
h=h.c
if(h===D.qD){s=e.c.ad(0,new B.x(0,62))
r=B.N()
r.r=D.ayk[A.o.E(e.d,6)].gp(0)
d.af(s,5,r)}else if(m!=null){l=C.bgh(m,9.5,A.aA,j,j,A.O)
l.a6(d,e.c.ad(0,new B.x(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bgh(m,9.5,A.aA,j,j,A.O)
l.a6(d,e.c.ad(0,new B.x(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wU)k.b13(d,e.c.aF(0,D.Ii),q)
k.b13(d,e.c.ad(0,D.Ii),q)},
b13(d,e,f){var w
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
C.aLu.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bkE.prototype={}
C.PR.prototype={
gY(d){return this.d}}
C.VT.prototype={
U(){var w=B.a([],x.g4),v=B.a([],x.ed)
return new C.bjL(new B.cv(null,x.z),w,v,A.cS,A.bB,D.Lu,null,null)}}
C.bjL.prototype={
aZN(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bm((1-d.b/(B.aH(w,null,x.l).w.a.b*0.7))*10),0,9)
u=D.cZ1[A.o.E(v,5)]+12*A.o.am(v,5)+12
switch(t.z){case"glow":C.pU("synth",u,420,0.3)
break
case"rainbow":C.pU("bell",u,700,0.35)
break
case"stars":C.pU("pluck",u+12,400,0.4)
break
case"sparks":E.dX(2400+t.r.az(2000),"",60,0,0.18,"noise")
break
default:E.dX(110+t.r.az(60),"",140,0,0.22,"noise")}},
c8P(d){return this.aZN(d,!1)},
a_(){var w,v=this
v.a1()
w=v.wl(new C.ewX(v))
w.ia(0)
v.w!==$&&B.aP()
v.w=w},
q(){var w=this.w
w===$&&B.c()
w.q()
this.bvu()},
gb0z(){var w=this.Q
return w<0?new M.vJ(1,A.k.E(this.y*0.18,360),0.85,1).lZ():D.QR[w]},
aRA(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb0z(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.an()*3.141592653589793*2
switch(l.z){case"fire":q=v.an()
p=l.as
o=v.an()
n=v.an()
m=B.aq(A.bH,A.aw,v.an())
m.toString
j.push(new C.PR(new B.x(u+(q-0.5)*p,t),new B.x((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.an()*0.4),l.y,700+v.az(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.an()*200
n=B.aq(k,A.c,v.an()*0.6)
n.toString
j.push(new C.PR(d,new B.x(q*o,p*o),n,1.5+v.an()*3,l.y,600+v.az(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.an()*40
j.push(new C.PR(d,new B.x(q*o,p*o),k,1.2+v.an()*1.8,l.y,500))}}},
aYG(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb0z()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=B.a([],x.g)
r.ax=new C.bkE(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aRA(e)
r.aZN(e,!0)
r.m(new C.ewy())},
aYF(){this.ax=null
this.m(new C.ewx())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([B.aI(n,n,n,n,D.qb,n,n,n,new C.ewH(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=B.a([B.b4(n,n,n,new C.br6(k,o.f,o.y,o.at,n),A.az)],m)
if(!o.ay&&k.length===0)j.push(D.b68)
k=B.aB(A.ci,new B.an(A.V,n,A.b0,A.r,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ewI(o),new C.ewJ(o),new C.ewN(o),n,n,n,n,n,n,n,n,n,new C.ewO(o),new C.ewP(o),n,n,n,!1,A.a7)
j=B.a([],m)
for(w=0;w<5;++w){v=D.cWg[w]
j.push(new C.eV(v.b,o.z===v.a,new C.ewQ(o,v),v.c,A.c5,n))}u=B.a([new C.Fe(A.c,o.Q<0,new C.ewR(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new C.Fe(D.QR[t],o.Q===t,new C.ewS(o,t),!1,n))
s=o.as
s=C.l0(A.c5,A.o.u(A.k.V(s)),"Size",36,4,new C.ewT(o),s)
r=o.ch
q=r?A.uc:O.C2
q=B.a([new C.eV("Sound",r,new C.ewU(o),q,A.c5,n),new C.iS(A.rg,"Undo",new C.ewK(o),A.c,n),new C.iS(D.NB,"Clear",new C.ewL(o),A.cs,n)],m)
for(w=0;w<4;++w){p=D.dbB[w]
q.push(new C.Fe(p,o.at.A(0,p),new C.ewM(o,p),!1,n))}return C.nS(A.c5,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new B.eH(k,o.d),"SPARK PAINTER",B.w(B.a([new C.h8(j,"BRUSH",n),new C.h8(u,"COLOUR",n),s,new C.h8(q,n,n)],m),A.m,n,A.e,A.Q,0,A.p))}}
C.br6.prototype={
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
for(p=B.T(q),m=p.k("nl<1>"),l=new B.nl(q,1,a5,m),l.zJ(q,1,a5,p.c),l=new B.bR(l,l.gM(0),m.k("bR<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
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
q.z=new B.hB(A.G,p)
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
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new M.vJ(1,A.o.E(i*5,360),0.85,1).lZ()
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
a1=k?new M.vJ(1,A.o.E(a3*23,360),0.7,1).lZ():l
a4.c66(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,B.L)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.W()
p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=P.Rl
j=p.K()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c66(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.W(),o=B.a([],x.v),n=new B.aO(p.r,A.ao,null,null,o)
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
n.e=null}}n.F(new B.bE())
$.W()
p=B.N()
p.r=h.j(0.4).gp(0)
p.z=A.lx
d.aS(n,p)
p=B.N()
p.r=h.gp(0)
d.aS(n,p)},
av(d){return!0}}
C.W3.prototype={
U(){return new C.aE2(new B.cv(null,x.z),new B.ar(new B.ba("NGMY",A.b3,A.aM),$.aw()),null,null)}}
C.aE2.prototype={
gIQ(){var w,v=this,u=v.e
if(u===$){w=B.bj(null,A.tF,null,1,null,v)
w.cL(0)
v.e!==$&&B.bL()
v.e=w
u=w}return u},
a_(){this.a1()
var w=this.gIQ()
w.dd()
w.dV$.L(0,this.gbXw())},
bXx(){var w,v,u,t,s,r,q,p=this,o=p.gIQ().x
o===$&&B.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.m6:new B.m9(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dX(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dX(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
C.pU(s,D.cPv[A.o.E(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIQ().q()
var w=this.f
w.R$=$.aw()
w.P$=0
this.bvz()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=B.a(["\u2026"],x.s)
else{h=new B.m9(h)
w=B.C(h,B.a6(h).k("J.E"))}v=D.QR[k.w]
h=x.p
u=B.a([B.aI(j,j,j,j,D.qb,j,j,j,new C.eD5(k,d),j,j,j,j,"Share",j)],h)
t=B.n(26)
s=D.axJ[k.y]
s=B.bw(t,B.c0(B.au(B.c7(k.gIQ(),new C.eD6(k,w,v),j),j,j,j),new B.o(j,j,j,j,j,new B.a8(A.ay,A.aC,A.x,s,j,j),A.n),A.be),A.aq)
t=A.c.j(0.06)
t=B.aM(j,A.U,!1,j,!0,A.r,j,B.aN(),i,j,j,j,j,j,2,B.br(j,new B.b3(4,B.n(14),A.W),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.DB,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new C.eD7(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.hq,!0,A.a4,j,A.am,j,j,j,j)
i=B.a([],h)
for(r=0;r<7;++r){q=D.cxU[r]
i.push(new C.eV(q.b,k.r===q.a,new C.eD8(k,q),j,A.bH,j))}p=B.a([],h)
for(o=0;o<8;++o)p.push(new C.Fe(D.QR[o],k.w===o,new C.eD9(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.uc:O.C2
l=B.a([new C.eV(m,n,new C.eDa(k),l,A.bH,j)],h)
n=B.a([],h)
for(o=0;o<5;++o)n.push(new C.Fe(D.axJ[o][0],k.y===o,new C.eDb(k,o),!1,j))
n.push(A.bp)
n.push(new C.iS(A.o2,"Replay",new C.eDc(k),A.c,j))
m=k.x
return C.nS(A.bH,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new B.D(A.bC,new B.eH(s,k.d),j),"TITLE ANIMATOR",B.w(B.a([t,A.N,new C.h8(i,"MOVE",j),new C.h8(p,"COLOUR",j),new C.h8(l,"SOUND",j),new C.h8(n,"BACK",j),C.l0(A.bH,A.o.u(A.k.V(m)),"Size",96,28,new C.eDd(k),m)],h),A.m,j,A.e,A.Q,0,A.p))},
c_j(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=B.a([new B.cS(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bm(g*1.6*f)?1:0
w=h
break
case"bounce":o=-Math.abs(Math.sin(A.k.E(g*2-q*0.5,1)*3.141592653589793))*s.x*0.5
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
case"glitch":u=A.o.E(A.k.bm(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.ba
else w=u?A.c5:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.lI.au(0,t)
w=h
m=t
break
case"rainbow":w=new M.vJ(1,A.k.E(g*360+e*40,360),0.75,1).lZ()
A.d.a8(p)
p.push(new B.cS(w.j(0.7),A.J,18))
break
default:w=h}return B.db(B.dU(B.ed(A.A,B.d(d,r,r,r,r,r,r,B.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new B.x(l,o)),m)}}
C.aLD.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.aLI.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.Ug.prototype={
U(){var w=$.aw()
return new C.biA(new B.ar(new B.ba("Meet me at noon",A.b3,A.aM),w),new B.ar(new B.ba("LEMON",A.b3,A.aM),w),B.aY(x.S))}}
C.biA.prototype={
a_(){this.a1()
this.aXs()
C.b0k("cipher_lab").bH(new C.dGz(this),x.P)},
q(){var w=this.d,v=$.aw()
w.R$=v
w.P$=0
w=this.e
w.R$=v
w.P$=0
this.a2()},
aXs(){this.y=1+A.cS.az(25)
this.z=0},
ga9D(){var w=this
return C.a1s(C.a1s(D.Hc[w.x],w.y),-w.z)===D.Hc[w.x]},
gaxB(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=C.a1s(u,v.w)
break A}if(1===t){w=new B.M(B.a(C.a1s(u,0).split(""),x.s),new C.dGh(),x.dv).hk(0)
break A}w=C.ial(u,v.e.a.a)
break A}return w},
aSJ(d){var w,v,u,t,s,r=null,q=B.c2(26,0,!1,x.S)
for(w=new B.d5(d.toUpperCase()),v=x.e8,w=new B.bR(w,w.gM(0),v.k("bR<bU.E>")),v=v.k("bU.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.fn(q,A.x6))
w=x.p
v=B.a([],w)
for(s=0;s<26;++s){u=new B.aR(2,2)
v.push(new B.bB(1,A.bf,B.w(B.a([B.p(r,r,A.f,r,r,new B.o(A.aP,r,r,new B.bo(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.ME,r,r,r,r),new B.y(B.jH(65+s),r,D.fbt,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.m1,A.j,0,A.p),r))}return new B.a7(r,70,B.B(v,A.dy,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=B.a([B.aM(o,A.U,!1,o,!0,A.r,o,B.aN(),p.d,o,o,o,o,o,2,B.br(o,new B.b3(4,B.n(14),A.W),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kI,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dGq(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,D.f5H,!0,A.a4,o,A.am,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,B.a([A.R,B.aM(o,A.U,!1,o,!0,A.r,o,B.aN(),p.e,o,o,o,o,o,2,B.br(o,new B.b3(4,B.n(14),A.W),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kI,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dGr(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.iS,!0,A.a4,o,A.am,o,o,o,o)],v))}w.push(A.aB)
w.push(D.fCm)
w.push(A.au)
v=A.aP.j(0.12)
u=B.n(14)
t=B.I(A.aP.j(0.4),A.q,1)
w.push(B.p(o,B.zT(p.gaxB().length===0?"\u2026":p.gaxB(),D.fas,o),A.f,o,o,new B.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bC,o,o,o))
w.push(A.ac)
w.push(C.fY6(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aP,o))
w.push(A.ac)
w.push(D.fiD)
w.push(A.au)
w.push(p.aSJ(p.gaxB()))
w.push(A.au)
w.push(D.fl1)
s=B.ct(w,o,A.bC,o,o,A.ah,!1)}else{w=C.fY6("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aS,o)
v=B.d(C.a1s(D.Hc[p.x],p.y),o,o,o,o,o,o,D.fb2,o,o,o)
u=(p.ga9D()?A.bk:A.aP).j(0.14)
t=B.n(14)
r=B.I((p.ga9D()?A.bk:A.aP).j(0.5),A.q,1)
t=B.a([w,A.ac,D.fvR,v,A.R,D.fqf,B.p(o,B.d(C.a1s(C.a1s(D.Hc[p.x],p.y),-p.z),o,o,o,o,o,o,D.fcv,o,o,o),A.f,o,o,new B.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bC,o,o,o),A.ac,p.aSJ(C.a1s(D.Hc[p.x],p.y)),A.N],x.p)
if(p.ga9D())t.push(C.fY6("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.bk,new C.iS(A.nj,"Next",new C.dGs(p),A.bk,o)))
s=B.ct(t,o,A.bC,o,o,A.ah,!1)}w=p.f
v=x.p
w=B.a([new C.h8(B.a([new C.eV("Make a secret",w===0,new C.dGt(p),A.jq,A.aP,o),new C.eV("Crack a code",w===1,new C.dGu(p),A.q4,A.aS,o)],v),o,o)],v)
if(p.f===0){u=B.a([],v)
for(q=0;q<3;++q)u.push(new C.eV(n[q],p.r===q,new C.dGv(p,q),o,A.aP,o))
v=B.a([new C.h8(u,o,o)],v)
if(p.r===0){u=p.w
v.push(C.l0(A.aP,""+u,"Shift",25,1,new C.dGw(p),u))}A.d.v(w,v)}else{v=p.z
w.push(C.l0(A.aS,""+v,"Shift back",25,0,new C.dGx(p),v))}return C.nS(A.aP,A.jt,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",B.w(w,A.m,o,A.e,A.Q,0,A.p))}}
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
C.aa2.prototype={}
C.ab9.prototype={}
C.a49.prototype={
bcU(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.ht()?-1:1
v=t.an()*3.141592653589793*2
u=f*(0.3+t.an())
s.push(new C.aa2(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.an()*0.45));++r}},
c2o(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bs(w,new C.bLC())},
ajC(d,e,f,g){var w="p"+this.c++,v=new C.tx(w,e,f,g)
v.apO(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bs(this.b,new C.bLN(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cGb(d,e,f,g,h){return A.d.b4(this.b,new C.bLI(e,f,g,h))},
akk(d,e,f,g){var w
if(d===f||this.cGb(0,d,e,f,g))return null
w=new C.ab9(d,e,f,g)
this.b.push(w)
return w},
aA6(d){var w
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
amV(d){return this.LF(d)&&!d.x&&d.cx>this.zF(d)},
b5q(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
LF(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c6n(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.za.h(0,v)
if(w!=null)return w.a
return 100},
v5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c2o(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.T(v).k("a_<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.L)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.a_(v,new C.bLO(a2),t).cM(0,0,new C.bLP(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.U(x.N,u)
n=new C.bLR(o)
m=B.a([],x.t)
l=new C.bLQ(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.L)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.L)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.U(u,u)
f=new C.bLT(g,l,n)
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
a2.b5m(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zF(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b5m(e,d,w,!0)
a2.bML(a4)},
b5m(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.U(x.N,b3),b5=new C.bLE(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bLD(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.L)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bLG(B.U(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.L)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.c2(b7,0,!1,b3)
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
for(d=0;d<b7;++d)e[d]=B.c2(b7,0,!1,b3)
a0=B.c2(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.L)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b5q(t)*(1+t.CW))
a4=b2.aA6(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c6n(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bPU(e,a0,b8)
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
bPU(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.c2(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=B.c2(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bML(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.L)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aA6(o)/a1.b5q(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zF(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bET(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bcU(o,3,260)
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
if(l>26)a1.tK(o,"The "+$.qg().h(0,n).b+" got "+A.k.ab(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tK(o,"More than 1.5 amps went through the "+$.qg().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tK(o,"The regulator had to turn "+A.k.ab(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.ab(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tK(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.za.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qg().h(0,n).b
l=f.b
l=l===A.k.ja(l)?""+A.k.V(l):B.u(l)
g=f.c
g=g===A.k.ja(g)?""+A.k.V(g):B.u(g)
a1.tK(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ab(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eSh.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
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
bET(d){return A.d.b4(this.a,new C.bLB(d))},
tK(d,e){var w
d.x=!0
d.ay=e
this.bcU(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bhy(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aGh(d){var w=d.b
return D.aNI.t(0,w)||D.za.ai(0,w)||w==="buck"||w==="regulator"},
bek(d){var w,v=!0
if(!this.LF(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.za.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
UF(d,e){var w=this.b
return new B.a_(w,new C.bLV(d,e),B.T(w).k("a_<1>")).gM(0)},
Ct(d){var w,v
if(d.x)return!1
w=d.b
if(D.za.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bcq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qg().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aGh(d)||i.Ct(d))return null
w=i.UF(d,0)
v=i.UF(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.T(u).k("a_<1>")
s=B.C(new B.a_(u,i.gcOE(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.ja(r)?""+A.k.V(r):B.u(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ab(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.za.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aGm("battery"),o=J.aW(t.a),t=new B.f4(o,t.b);t.C();){n=o.gT(o)
if(n.e===1.5&&n.as<=0.02&&i.UF(n,0)+i.UF(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aGm("switch"),o=J.aW(t.a),t=new B.f4(o,t.b);t.C();)if(!o.gT(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qg().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zF(k))return"The "+$.qg().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ab(k.cx,2)+" amps, but it can only give about "+A.k.ab(i.zF(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b4(u,new C.bLJ(i,d))
h=q.b
h=h===A.k.ja(h)?""+A.k.V(h):B.u(h)
u=A.k.ab(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ab(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ab(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aGm(d){var w=this.a
return new B.a_(w,new C.bLM(d),B.T(w).k("a_<1>"))},
aFU(d){return this.aGm(d).b4(0,new C.bLL(0.35))},
pO(d,e){return A.d.b4(this.a,new C.bLK(e))}}
C.ain.prototype={
a6(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.W()
w=B.N()
w.r=F.AM.gp(0)
c0.b1(new B.a9(0,0,b8,b9),w)
v=B.N()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.K()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,B.L)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.m2.ai(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.m2.ai(0,h.b)?(h.ch-1)*38:0
b4.cD9(c0,new B.x(k*b6+j*(42+i),l*b7),new B.x(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=C.hw7(q.a,q.b,c1)
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
g.r=D.adO.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.zb
s=g.K()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bx(w.save())
w.translate(j,i)
h=A.k.D(A.lI.au(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.cg1(c0,a0,a0===o)
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
a9=new B.l1(new B.eR("!",b5,b5,A.d_,b5,b5,b5,b5,b5,b5,new B.G(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.cb,new B.kI(1),b5,b5,b5,b5,A.c7,b5)
a9.eO()
a9.a6(c0,new B.x(g+-3,f+-8))}if(!a0.x)g=(D.aNI.t(0,h)||D.za.ai(0,h)||h==="buck"||h==="regulator")&&!r.Ct(a0)&&r.UF(a0,0)+r.UF(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.W()
g=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
g.r=A.aF.gp(0)
s=g.K()
w.drawCircle(j,i,10,s)
s.delete()
a9=new B.l1(new B.eR("!",b5,b5,A.d_,b5,b5,b5,b5,b5,b5,new B.G(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.cb,new B.kI(1),b5,b5,b5,b5,A.c7,b5)
a9.eO()
a9.a6(c0,new B.x(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.m2.ai(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.W()
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.r=F.AM.gp(0)
s=j.K()
w.drawCircle(f,g,7,s)
s.delete()
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.b=A.af
j.c=2.4
j.r=(i&&r.bek(a0)?A.cs:A.ad).gp(0)
s=j.K()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bek(a0)){a9=new B.l1(new B.eR("+",b5,b5,A.d_,b5,b5,b5,b5,b5,b5,new B.G(!0,A.cs,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.cb,new B.kI(1),b5,b5,b5,b5,A.c7,b5)
a9.eO()
a9.a6(c0,new B.x(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,B.L)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=B.aq(F.XB,F.XI,b2)
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
i.z=A.Rm
s=i.K()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b4(q,new C.bGp())){b3=A.d.cM(q,0,new C.bGq())
$.W()
b7=B.N()
b7.r=D.b9P.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.b1(new B.a9(0,0,b8,b9),b7)
a9=B.h2(b5,b5,b5,b5,D.f2e,A.a4,A.cb,b5,A.dR,A.c7)
a9.uB(b6-24)
a9.a6(c0,new B.x(12,10))}},
qo(d,e,f,g,h){var w=null,v=B.h2(w,w,w,w,B.d0(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.cb,w,A.dR,A.c7)
v.eO()
v.a6(d,f)},
cD9(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new B.aO($.W().r,A.ao,null,null,B.a([],x.v))
d.F(new B.b5(a1.a,a1.b))
w=C.how(a1,a2,a3)
d.F(new B.cR(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.aq(A.aS,D.adO,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.aq(A.aP,A.aS,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bn
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
h=A.k.E(j*22+i*m*l,h.a.length())
v.jz()
i=t[u].b
i===$&&B.c()
i=i.a.length()
v.jz()
g=t[u].b
g===$&&B.c()
f=A.k.E(h+i,g.a.length())
v.jz()
i=t[u].MQ(f).a
h=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.K()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
P0(d,e,f,g){var w,v,u,t
$.W()
w=B.N()
v=g?A.b1:A.a3
u=g?A.b6:A.a8
t=B.aq(e,A.w,0.3)
t.toString
w.sar(new B.a8(v,u,A.x,B.a([e,f,e,t],x.O),A.He,null).aA(0,d))
return w},
avN(d,e,f){return this.P0(d,e,f,!0)},
c2_(d,e){return this.P0(d,A.bn,A.iD,e)},
ahb(d,e){var w,v,u
$.W()
w=B.N()
w.sar(D.aMc.aA(0,B.bV(e,4.2)))
d.af(e,4.2,w)
w=e.ad(0,D.e8B)
v=e.ad(0,D.e8K)
u=B.N()
u.r=A.e2.gp(0)
u.c=1.2
d.bL(w,v,u)},
cg1(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.W(),c0=B.N()
c0.sar(D.bWy.aA(0,D.eP0))
c0.c=3.4
c0.d=A.bV
w=B.N()
w.r=A.w.j(0.45).gp(0)
w.z=G.p8
c1.hH(D.eOT,w)
if(c3){w=B.by(D.eP_,A.kD)
v=B.N()
v.r=A.c.j(0.14).gp(0)
c1.aD(w,v)}u=C.h4v(c2)
c1.bL(new B.x(-u,0),D.e9T,c0)
c1.bL(D.e7J,new B.x(u,0),c0)
t=c2.x
w=c2.b
s=D.m2.ai(0,w)&&c2.ch!==1
if(s){J.bx(c1.a.save())
c1.bZ(0,c2.ch)}switch(w){case"battery":b3.bBG(c1,c2)
break
case"solar":r=B.by(D.eOW,A.ix)
c1.aD(r,b3.P0(new B.a9(r.a,r.b,r.c,r.d),A.dv,A.bO,!1))
b9=B.N()
w=B.aq(D.bdf,A.d0,0.25+0.55*c2.f)
w.toString
v=B.aq(D.bll,A.mm,0.3+0.4*c2.f)
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
b9.F(new B.b5(-34,18))
b9.F(new B.ap(-6+40*c2.f,-18))
b9.F(new B.ap(4+40*c2.f,-18))
b9.F(new B.ap(-24,18))
b9.F(new B.bE())
w=B.N()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aS(b9,w)
w=c2.f
b9=B.N()
b9.r=A.dO.j(0.9).gp(0)
c1.af(D.e7P,4+4*w,b9)
break
case"crank":n=B.by(D.eOH,A.hE)
c1.aD(n,b3.avN(new B.a9(n.a,n.b,n.c,n.d),A.bq,A.bK))
b9=B.N()
b9.sar(D.aMd.aA(0,B.bV(A.J,12)))
c1.af(A.J,12,b9)
m=new B.x(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.N()
b9.r=A.cr.gp(0)
b9.c=5
b9.d=A.bV
c1.bL(A.J,m,b9)
b9=B.N()
b9.sar(D.eix.aA(0,B.bV(m,7)))
c1.af(m,7,b9)
b3.ahb(c1,D.e9M)
b3.ahb(c1,D.e7C)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aO(b9,A.ao,b4,b4,B.a([],w))
v.F(new B.b5(-3,24))
v.F(new B.ap(3,24))
v.F(new B.ap(1.5,0))
v.F(new B.ap(-1.5,0))
v.F(new B.bE())
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
b9.sar(D.eie.aA(0,B.bV(A.J,4.5)))
c1.af(A.J,4.5,b9)
break
case"switch":n=B.by(D.eOO,A.rD)
b9=B.N()
b9.sar(D.aoQ.aA(0,new B.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,b9)
b3.ahb(c1,D.Sf)
b3.ahb(c1,D.aH2)
i=c2.w?D.aH2:D.e7m
b9=B.N()
b9.r=A.av.gp(0)
b9.c=6
b9.d=A.bV
c1.bL(D.Sf,i,b9)
b9=B.N()
b9.r=(c2.w?A.bk:A.bO).gp(0)
b9.c=4
b9.d=A.bV
c1.bL(D.Sf,i,b9)
b9=B.kr(D.Sf,i,0.85)
b9.toString
w=B.N()
w.r=A.aw.gp(0)
c1.af(b9,5,w)
break
case"fuse":h=B.by(D.aMN,D.aMh)
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
c1.bL(D.aHj,D.aH1,b9)}else{b9=B.N()
b9.c=1.6
b9.r=A.c_.gp(0)
c1.bL(D.aHj,D.ea9,b9)
b9=B.N()
b9.c=1.6
b9.r=A.c_.gp(0)
c1.bL(D.e8f,D.aH1,b9)
b9=B.N()
b9.r=A.dI.gp(0)
c1.af(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=B.ci(new B.x(F.ju[g]*22,0),20,9)
w=B.by(f,A.hD)
o=b3.P0(f,A.d8,A.oC,!0).K()
b9.drawRRect(B.eT(w),o)
o.delete()}break
case"pot":b9=B.N()
b9.sar(D.eip.aA(0,B.bV(A.J,21)))
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
b9.sar(D.eic.aA(0,B.bV(A.J,13)))
c1.af(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=B.N()
j.r=A.aS.gp(0)
j.c=3
j.d=A.bV
c1.bL(new B.x(b9*3,w*3),new B.x(v*12,l*12),j)
break
case"resistor":a1=B.by(D.aMN,D.aMh)
b9=B.N()
b9.sar(D.bZQ.aA(0,new B.a9(a1.a,a1.b,a1.c,a1.d)))
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
b9.drawRect(B.bY(new B.a9(w,-9,w+4.5,9)),o)
o.delete()}b9=B.N()
b9.r=A.aS.gp(0)
c1.b1(D.eP9,b9)
b9=c2.r
b3.qo(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.e9r,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.N()
v.r=A.dO.j(0.55*w).gp(0)
v.z=A.zb
c1.af(D.wk,34,v)}n=B.ci(D.e6S,12,18)
c1.aD(B.by(n,A.hD),b3.P0(n,A.bn,A.e4,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.r=A.dq.gp(0)
l.c=1
o=l.K()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=B.N()
if(t)v=A.Wn
else{v=B.aq(A.e4,A.hI,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.ET
else{l=B.aq(A.dv,A.dO,c2.fx)
l.toString}w.sar(new B.c_(A.t0,0.5,A.x,b4,0,B.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aA(0,B.bV(A.rA,17)))
c1.af(A.rA,17,w)
w=B.N()
w.b=A.af
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.af(A.rA,17,w)
b9=b9.r
w=x.v
l=new B.aO(b9,A.ao,b4,b4,B.a([],w))
l.F(new B.b5(-9,-12))
l.F(new B.cR(-12,-4,-9,0))
v=B.N()
v.b=A.af
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aS(l,v)
v=B.N()
v.r=A.cV.gp(0)
v.c=1.4
c1.bL(D.ea5,D.ea7,v)
v=B.N()
v.r=A.cV.gp(0)
v.c=1.4
c1.bL(D.e88,D.e8b,v)
w=B.a([],w)
a4=new B.aO(b9,A.ao,b4,b4,w)
a4.F(new B.b5(-4,-2))
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
else{w=B.aq(A.dv,D.be8,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aS(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.N()
v.r=A.aw.j(0.6*w).gp(0)
v.z=D.dr1
c1.af(A.rA,30,v)}w=B.N()
w.r=A.e4.gp(0)
w.c=2.4
c1.bL(D.eab,D.eaa,w)
w=B.N()
w.r=A.e4.gp(0)
w.c=2.4
c1.bL(D.e8h,D.e8g,w)
b9=b9.r
w=x.v
a6=new B.aO(b9,A.ao,b4,b4,B.a([],w))
a6.F(new B.b5(-12,8))
a6.F(new B.ap(-12,-6))
a6.F(new B.cR(0,-26,12,-6))
a6.F(new B.ap(12,8))
a6.F(new B.bE())
v=B.N()
if(t)l=A.j1
else{l=B.aq(A.es,D.bfC,c2.fx)
l.toString}if(t)j=A.kv
else{j=B.aq(A.kt,A.aw,c2.fx)
j.toString}v.sar(new B.a8(A.ay,A.aC,A.x,B.a([l,j],x.O),b4,b4).aA(0,D.eOe))
c1.aS(a6,v)
v=B.N()
v.b=A.af
v.c=1.2
v.r=A.k0.gp(0)
c1.aS(a6,v)
v=B.N()
v.r=A.ey.gp(0)
c1.b1(D.eOj,v)
w=new B.aO(b9,A.ao,b4,b4,B.a([],w))
w.F(new B.b5(-7,-4))
w.F(new B.cR(-6,-12,0,-15))
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
c1.b1(D.eO1,b9)
b9=B.N()
b9.r=A.cr.gp(0)
c1.b1(D.eO2,b9)
b9=c1.a
J.bx(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bx(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=B.ci(D.e79,15,7)
v=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
v.r=A.cY.j(0.9).gp(0)
o=v.K()
b9.drawOval(B.bY(w),o)
o.delete()
b9.restore()}w=B.N()
w.r=A.av.gp(0)
c1.af(A.J,3,w)
b9.restore()
b3.qo(c1,"M",D.e9L,A.av,14)
break
case"buzzer":a8=B.ci(A.J,42,42)
b9=B.N()
b9.sar(D.eit.aA(0,a8))
c1.hH(a8,b9)
b9=B.N()
b9.r=A.w.gp(0)
c1.af(A.J,6,b9)
b9=B.N()
b9.b=A.af
b9.c=1.4
b9.r=A.b2.gp(0)
c1.af(A.J,6,b9)
b3.qo(c1,"+",D.e9E,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.E(w.d*14,5):0
l=B.bV(A.J,24+k*5+l)
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.b=A.af
j.c=2
j.r=A.c5.j(v*(1-k*0.22)).gp(0)
o=j.K()
b9.drawArc.apply(b9,[B.bY(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=B.by(D.eOK,A.hU)
w=B.N()
w.sar(D.bXv.aA(0,new B.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,w)
w=B.a([],x.v)
a9=new B.aO(b9.r,A.ao,b4,b4,w)
a9.F(new B.b5(-24,0))
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
w.r=D.beN.j(0.5*b9).gp(0)
w.z=A.lx
c1.aS(a9,w)}$.W()
b9=B.N()
b9.b=A.af
b9.c=3.2
b9.d=A.bV
b9.r=B.aq(A.lN,A2.Xp,c2.fx).gp(0)
c1.aS(a9,b9)
break
case"capacitor":a7=new B.a9(-16,-22,16,18)
b9=B.by(a7,A.hU)
w=B.N()
w.sar(D.bWq.aA(0,a7))
c1.aD(b9,w)
w=B.N()
w.r=A.bO.gp(0)
c1.b1(D.eOp,w)
for(p=0;p<4;++p){b0=new B.l1(new B.eR("\u2212",b4,b4,A.d_,b4,b4,b4,b4,b4,b4,new B.G(!0,A.av,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.cb,new B.kI(1),b4,b4,b4,b4,A.c7,b4)
b0.eO()
b0.a6(c1,new B.x(-14,-18+p*9))}b1=new B.a9(-16,-24,16,-17)
c1.aD(B.by(b1,A.hD),b3.c2_(b1,!1))
b9=38*c2.fx
w=18-b9
$.W()
v=B.N()
v.r=A.bk.j(0.5).gp(0)
c1.b1(new B.a9(-3,w,11,w+b9),v)
b3.qo(c1,"1F",D.wk,A.c,11)
break
case"radio":a1=B.by(D.a6D,A.hE)
b9=B.N()
b9.sar(D.c_5.aA(0,new B.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=B.N()
b9.b=A.af
b9.c=1.4
b9.r=A.oC.j(0.6).gp(0)
c1.aD(a1,b9)
b9=B.by(D.eOL,A.ix)
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
c1.b1(D.eO4,w)
if(c2.fx>0){w=8+A.k.E(b3.b.d*7,18)
v=B.N()
v.r=A.bx.gp(0)
v.c=1.6
c1.bL(new B.x(w,-13),new B.x(w,-3),v)}w=B.N()
w.sar(D.aMd.aA(0,B.bV(D.a5D,6)))
c1.af(D.a5D,6,w)
w=B.N()
w.r=A.oC.gp(0)
c1.af(D.e7I,4,w)
w=B.N()
w.r=A.e4.gp(0)
w.c=1.8
c1.bL(D.e7G,D.aH6,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=B.bV(D.aH6,4+k*5+A.k.E(w.d*8,5))
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.b=A.af
l.c=1.4
l.r=A.nQ.j(0.7).gp(0)
o=l.K()
b9.drawArc.apply(b9,[B.bY(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=B.by(D.eOV,A.hU)
v=B.N()
v.r=K.mY.gp(0)
c1.aD(w,v)
b2=B.by(D.eOS,A.hD)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bx(b9.save())
b9.clipRRect(B.eT(b2),$.pv(),!0)
b9.translate(-33,-21)
E.h0D(c1,D.eV_,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.N()
b9.r=A.bk.gp(0)
c1.af(D.e7U,1.6,b9)}else{w=B.N()
w.r=D.vn.gp(0)
c1.aD(b2,w)
b9=new B.aO(b9.r,A.ao,b4,b4,B.a([],x.v))
b9.F(new B.b5(-33,-21))
b9.F(new B.ap(-10,-21))
b9.F(new B.ap(-33,0))
b9.F(new B.bE())
w=B.N()
w.r=A.c.j(0.05).gp(0)
c1.aS(b9,w)}b9=B.N()
b9.r=A.bq.gp(0)
c1.b1(D.eOi,b9)
break}C.i7W(c1,c2,b3.b.d,b3.gc6o())
if(t)b3.qo(c1,"\u2716",D.eae,A.aw,14)
if(s)c1.a.restore()},
bBG(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new B.a9(-28,-13,28,13)
d.aD(B.by(w,A.rD),m.avN(w,A.dv,A.iZ))
v=new B.a9(-22,-13,22,13)
$.W()
u=B.N()
u.sar(D.aoJ.aA(0,v))
d.b1(v,u)
u=B.N()
u.r=A.dS.gp(0)
d.b1(D.eOy,u)
t=new B.a9(28,-5,34,5)
d.aD(B.by(t,A.hb),m.P0(t,A.dv,A.iD,!0))
m.qo(d,"+",D.e7r,A.aS,11)
m.qo(d,"\u2212",D.e9N,A.ad,11)
m.qo(d,B.u(l===A.k.ja(l)?A.k.V(l):l)+"V",D.e9x,A.aS,13)
if(l===1.5){u=B.N()
u.r=A.bE.gp(0)
d.b1(D.eOx,u)
u=e.as
s=B.N()
s.r=B.aq(A.aw,A.bk,u).gp(0)
d.b1(new B.a9(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qo(d,"FLAT",D.e9q,A.cs,9)}if(l>2){u=B.N()
u.r=A.b2.gp(0)
u.c=1
d.bL(D.e6Y,D.aGM,u)
m.qo(d,l>3?"3 cells":"2 cells",D.e9w,A.aA,8)}}else if(l<=9){r=new B.a9(-22,-17,22,17)
u=B.by(r,A.rD)
$.W()
s=B.N()
s.sar(D.bZD.aA(0,r))
d.aD(u,s)
s=B.N()
s.r=A.cT.gp(0)
d.b1(D.eOz,s)
for(u=d.a,q=0;q<2;++q){p=F.ay3[q]
s=p<0?5:3.6
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.sar(D.aMc.aA(0,B.bV(new B.x(p,-18),5)))
n=o.K()
u.drawCircle(p,-18,s,n)
n.delete()}m.qo(d,"9V",D.e9s,A.c,16)}else{r=new B.a9(-34,-16,34,16)
u=B.by(r,A.ix)
$.W()
s=B.N()
s.sar(D.aoJ.aA(0,r))
d.aD(u,s)
s=B.N()
s.r=A.bH.gp(0)
d.b1(D.eOU,s)
for(u=d.a,q=0;q<2;++q){s=B.by(B.ci(new B.x(F.a3s[q],-20),8,10),A.hb)
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.r=A.cr.gp(0)
n=o.K()
u.drawRRect(B.eT(s),n)
n.delete()}m.qo(d,"+",D.e7y,A.aw,10)
m.qo(d,"12V",D.e9t,A.av,15)}},
av(d){return!0}}
C.mz.prototype={
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
J.it(s[4],new C.cl7(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.L)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.akk(m,u[1],l,u[3])}}}
C.ail.prototype={
U(){var w=x.N
return new C.aim(A.J,A.az,B.U(w,x.gl),B.aY(w),$,A.bB,0,B.a([],x.X),null,null)}}
C.aim.prototype={
adP(d){var w=this,v=w.as
if(v!=null)v.a7(0)
w.m(new C.bG3(w,d))
w.as=B.cM(A.ll,new C.bG4(w))},
q(){var w=this.as
if(w!=null)w.a7(0)
w=this.ch
if(w!=null)w.a7(0)
this.brF()},
a_J(d,e){return this.cdY(d,e)},
b_J(d){return this.a_J(d,!1)},
cdY(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a_J=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.r3:A.xJ
p=d.b
w=3
return B.b(E.h0W(s,r,p,d.ax<3.2,q,$.qg().h(0,p).b),$async$a_J)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a_J,v)},
cqB(d){var w=this,v=new B.S(Date.now(),0,!1),u=w.at.ca(0,d.a,new C.bG5()),t=J.cE(u)
t.L(u,v)
t.bs(u,new C.bG6(v))
if(t.gM(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a7(0)
w.a12(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a7(0)
w.ch=B.cM(A.kw,new C.bG7(w,u,d))}},
a_p(d){return this.ccl(d)},
ccl(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a_p=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.i95(s,d.b,A.k.V(A.k.E(t.a.c.d*0.12,1)*100)),$async$a_p)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a_p,v)},
a12(d){return this.cob(d)},
cob(d){var w=0,v=B.j(x.H),u=this,t
var $async$a12=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bQ(F.lj,null,new C.bG1(u,d),t,!0,!0,!1,A.jR,!1,!1,x.H),$async$a12)
case 2:return B.h(null,v)}})
return B.i($async$a12,v)},
a_(){this.a1()
this.beu()
this.oZ()},
beu(){this.a.c.e=new C.bGm(this)},
pW(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.v5(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=D.m2.h(0,s.b)
if((r==null?null:r.b)!==D.zB)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.L(0,s.a)
q.a_J(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)E.dX(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)E.dX(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cS.an()<0.5
else u=!1
if(u)E.dX(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){E.dX(900+A.cS.az(800),"",90,0,0.1,o)
if(A.cS.an()<0.35)E.dX(300+A.cS.az(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cS.an()<0.4
else u=!1
if(u)E.dX(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)E.dX(330+A.o.E(110*A.k.bm(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dX((A.k.bm(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)E.dX(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)E.dX(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cS.an()<0.5
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
q.m(new C.bGn())},
b6H(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.L)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.m2.ai(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.z(p,n)
r=i}}}return s},
b0p(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.T(w).k("dx<1>"),w=new B.dx(w,v),w=new B.bR(w,w.gM(0),v.k("bR<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.m2.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cDa(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.L)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.m2.ai(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.m2.ai(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.how(new B.x(k,n),new B.x(i,l),p)
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
adN(){this.a.toString
this.m(new C.bFx())},
boo(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.d0a[v]
if(!A.d.b4(p.a.c.a,new C.bGo(u,w))){o=new B.x(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?I.Ik:o
s=s?I.Ik:o
q=t.ajC(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dX(1200,"",50,0,0.3,"tri")
p.adN()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.QA[v].a)
u=w.length
t=u>8
s=t?A.d.ds(w,0,A.o.am(u+1,2)):w
r=t?A.d.fO(w,A.o.am(w.length+1,2)):A.U
q=n.a.d
if(q!=null){w=B.a6(q).k("cw<1>")
w=B.C(new B.cw(q,w),w.k("J.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.L)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b0e(s,!0))
n.a.toString
if(t)w.push(n.b0e(r,!0))
w.push(B.E(B.cA(new C.bGl(n,q,m)),1))
return B.w(w,A.m,null,A.e,A.j,0,A.p)},
b0e(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.L)(d),++v){u=d[v]
t=$.qg()
s=t.h(0,u).d.j(0.14)
r=new B.aR(14,14)
q=new B.az(t.h(0,u).d.j(0.5),1,A.q,-1)
m.push(B.aB(p,B.p(p,B.w(B.a([new B.y(t.h(0,u).c,p,A.zQ,p,p,p,p,p,p,p,p,p),new B.y(t.h(0,u).b,p,A.nt,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.b7,A.j,0,A.p),A.f,p,p,new B.o(s,p,new B.bO(q,q,q,q),new B.bo(r,r,r,r),p,p,A.n),p,p,p,F.tH,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bFy(this,u),p,p,p,p,p,p,!1,A.a7))}return B.p(p,B.ct(m,p,A.h7,p,p,A.aN,!1),A.f,p,p,new B.o(F.AK,p,new B.bO(A.W,A.W,new B.az(o,1,A.q,-1),A.W),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aYN(d){var w=null,v=B.n(18)
return B.p(w,d,A.f,w,w,new B.o(F.acw,w,B.I(A.bE,A.q,1),v,w,w,A.n),w,w,w,w,F.ahM,w,w,w)},
cg2(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qg().h(0,o),m=d.dy,l=d.fr,k=new C.bFR(q,n),j=B.d(n.c,p,p,p,p,p,p,A.Jn,p,p,p),i=n.b,h=n.d,g=x.p
i=B.B(B.a([j,A.ab,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aI(p,p,p,p,D.bNF,p,p,p,new C.bFE(q,d),p,p,p,p,"Remove part",A.cc),B.aI(p,p,p,p,A.GI,p,p,p,new C.bFF(q),p,p,p,p,p,A.cc)],g),A.m,p,A.e,A.j,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,F.DC,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.faS,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ab(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ab(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ab(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.au,w,A.an,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.cs:A.aS,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bcq(d)
if(v!=null){l=(d.x?A.aw:A.aF).j(0.14)
j=B.n(10)
i=B.I((d.x?A.aw:A.aF).j(0.5),A.q,1)
m.push(new B.D(A.i4,B.p(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fhh,p,p,p),A.f,p,p,new B.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cp,p,p,p),p))}if(C.fZH(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new C.eV("CH "+t,d.at===u,new C.bFG(q,d,u),p,h,p))}l=B.bZ(A.bD,l,A.br,4,6)
l=B.a([A.an,l,A.au,B.d(q.a.c.Ct(d)?"Showing: "+F.Qa[A.o.E(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hc,p,p,p)],g)
if(q.a.c.Ct(d))l.push(new C.iS(A.Gf,"Open big screen",new C.bFJ(q,d),h,p))
A.d.v(m,l)}if(D.m2.ai(0,o)&&!C.fZH(o)){l=B.a([A.an,B.d(q.a.c.Ct(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hc,p,p,p)],g)
if(q.a.c.Ct(d))l.push(new C.iS(A.NT,"Open the "+$.qg().h(0,o).b,new C.bFK(q,d),h,p))
A.d.v(m,l)}if(D.m2.ai(0,o))A.d.v(m,B.a([A.an,new C.iS(A.BT,"Make it bigger (or tap it 4 times)",new C.bFL(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ab(d.db,1)
if(q.a.c.Ct(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.an,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ab(i,1)+" V",p,p,p,p,p,p,D.fbH,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dhg[s]
j=r===A.k.ja(r)?A.k.V(r):r
l.push(new C.eV(B.u(j)+" V out",d.e===r,new C.bFM(q,d,r),p,h,p))}i.push(new B.D(A.lS,B.bZ(A.bD,l,A.br,0,6),p))}if(o==="regulator")i.push(D.fzv)
A.d.v(m,i)}if(q.a.c.LF(d)&&!d.x){l=A.k.ab(d.cx,2)
j=A.k.ab(q.a.c.zF(d),2)
i=q.a.c
w=i.amV(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.amV(d)?A.cs:A.ek,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.n(4)
w=A.k.D(d.cx/q.a.c.zF(d),0,1)
i=q.a.c.amV(d)?A.aw:A.bk
m.push(new B.D(A.i4,B.w(B.a([l,A.cR,B.bw(j,B.m3(A.bE,p,p,5,p,w,new B.lW(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.i4,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.f5E,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.d6P[s]
j=r===1.5?"1.5 V (rechargeable)":B.u(r)+" V"
l.push(new C.eV(j,d.e===r,new C.bFN(q,d,r),p,h,p))}m.push(B.bZ(A.bD,l,A.br,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.cYw[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new C.eV(j,d.r===r,new C.bFO(q,d,r),p,h,p))}m.push(B.bZ(A.bD,l,A.br,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bFP(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bFQ(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bFH(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bFI(d)))
if(o==="crank")m.push(D.fuZ)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hc,p,p,p))
return q.aYN(new B.cT(D.b_P,B.cc(B.w(m,A.F,p,A.e,A.Q,0,A.p),A.r,p,A.y,p,p,p,p,A.ah),p))}}
C.baa.prototype={}
C.UT.prototype={
U(){return new C.aCO(C.h4u(),new B.cv(null,x.gJ),B.aY(x.S))}}
C.aCO.prototype={
a_(){this.a1()
$.aV.bY$.push(this)
this.adO()},
adO(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fuo(),$async$adO)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.i8i(t.d,r)
if(s!=null){t.m(new C.dRs(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$adO,v)},
EU(){var w,v=this
if(!v.as)return
w=C.hZS(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bCL(w)},
j6(d){if(d!==A.fv)this.EU()},
q(){$.aV.hM(this)
this.EU()
this.a2()},
c6q(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.T(v).k("a_<1>")
t=new B.a_(v,new C.dRB(q),u).gM(0)
s=new B.a_(v,new C.dRC(),u).gM(0)
r=new B.a_(v,w.gcS8(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.dRD(q,t,s,r))}if(A.o.E(q.w,45)===0)q.EU()
if(A.o.E(q.w,10)===0){w=q.f
$.ahz()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.ahz()[q.f].c.$1(q.d)){w.L(0,q.f)
C.IO("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.dRE())
q.EU()
w=q.c
w.toString
w=B.X8(w)
if(w!=null)w.S(B.b2(p,p,p,p,p,A.r,p,B.d("\u2705 Challenge done: "+$.ahz()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mo,p,p,p,p,p,p,p,p,p,p))}},
ags(){var w=0,v=B.j(x.H),u=this,t
var $async$ags=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ca(null,null,!0,null,new C.dRr(u),t,null,!0,!0,x.H),$async$ags)
case 2:return B.h(null,v)}})
return B.i($async$ags,v)},
aYM(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.n(12),t=B.I(f.j(0.45),A.q,1)
u=B.a([B.ao(w,B.p(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aB(w,B.hw(new B.a7(40,38,new B.an(A.V,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7)},
aYL(d,e,f,g){return this.aYM(d,e,f,g,null)},
aqt(d,e,f,g){var w=null,v=f.j(0.1),u=B.n(10),t=B.I(f.j(0.4),A.q,1)
return B.E(B.aB(w,B.p(w,B.B(B.a([B.X(d,f,w,w,w,15),A.eg,new B.dq(1,A.cm,B.d(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b7,A.j,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7),1)},
aeL(){var w=0,v=B.j(x.H),u=this,t
var $async$aeL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a4(t,!1).cm(B.e9(new C.dRn(u),!1,null,x.H)),$async$aeL)
case 2:t=u.e.gbk()
if(t!=null)t.beu()
if(u.c!=null)u.m(new C.dRo())
u.EU()
return B.h(null,v)}})
return B.i($async$aeL,v)},
bEM(){var w,v,u,t,s=null,r=this.f
$.ahz()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bd:A.aw
u=B.n(9)
t=B.I(F.AK,A.q,1.5)
return B.p(s,B.au(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wB,s,s,s),s,s,s),A.f,s,D.b_W,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eS,s,s,s)},
ahy(){var w=0,v=B.j(x.H),u=this,t
var $async$ahy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bQ(F.lj,null,new C.dRA(u),t,!0,!0,!0,A.jR,!1,!1,x.H),$async$ahy)
case 2:return B.h(null,v)}})
return B.i($async$ahy,v)},
c6r(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aB(r,B.p(r,D.bOT,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a5),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dRG(d),r,r,r,r,r,r,!1,A.a7),o=B.n(11)
o=B.p(r,D.b5B,A.f,r,r,new B.o(A.bm,r,B.I(A.aP.j(0.45),A.q,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.w(B.a([B.B(B.a([p,A.ab,o,A.ab,B.E(B.w(B.a([D.fxy,B.d(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.f1:A.hh,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new C.awX(s.gcc2(),r),A.rK,s.aYL(A.yj,"Construction Lab: real 3D wiring, plumbing and a house",A.cY,new C.dRH(s,d)),s.aYM(A.lq,"Challenges",A.aS,s.gcta(),s.bEM()),s.aYL(A.NN,"How to play",A.aP,new C.dRI(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.an,B.B(B.a([s.aqt(A.o_,"Circuits",A.by,s.gcm1()),A.bp,s.aqt(A.oS,"Repair",A.aS,new C.dRJ(s)),A.bp,s.aqt(D.NB,"Clear",A.cs,new C.dRK(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new B.o(F.AK,r,new B.bO(A.W,A.W,new B.az(q,1,A.q,-1),A.W),r,r,r,A.n),r,r,r,r,D.byf,r,r,r)},
B(d){var w=this,v=null
$.arw="tech"
return B.c6(v,A.bY,B.bl(!0,B.w(B.a([w.c6r(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.h3k(w.d,w.e,w.gc6p(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0),v,!1,!1,v,v)}}
C.awX.prototype={
U(){return new C.b8p(null,null)}}
C.b8p.prototype={
gawF(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.T,null,1,null,v)
w.cL(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gawF().q()
this.bsV()},
B(d){var w=null,v=this.a.c
return B.aB(w,B.hw(new B.a7(42,42,B.c7(this.gawF(),new C.cBZ(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a7)}}
C.b8o.prototype={
a6(d,e){var w,v,u,t=null,s=e.ei(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.W()
w=B.N()
w.r=A.b4.j(0.25+0.15*o).gp(0)
w.z=G.p8
d.af(s,r+2+o*2,w)
w=B.N()
w.sar(D.eio.aA(0,B.bV(s,r)))
d.af(s,r,w)
v=B.N()
v.b=A.af
v.c=2.2
v.sar(new B.fW(A.A,0,6.283185307179586,A.x,D.cQ1,t,new B.mn(p)).aA(0,B.bV(s,r)))
d.af(s,r,v)
p=new C.cBY(d)
p.$3(s.ad(0,A.rA),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.e8s),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.eai),2.6,0.5+0.5*Math.cos(q))
u=B.h2(t,t,t,t,D.f2k,A.a4,A.cb,t,A.dR,A.c7)
u.eO()
u.a6(d,s.ad(0,new B.x(-u.b.c/2,5)))},
av(d){return d.b!==this.b}}
C.axf.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.axg.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.brE()}}
C.aJ9.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bwc.prototype={}
C.fN.prototype={}
C.Jh.prototype={
a3(){return"ScreenStyle."+this.b}}
C.m6.prototype={}
C.UC.prototype={
U(){return new C.biH(null,null)}}
C.biH.prototype={
ga97(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.nW,null,1,null,v)
w.cr(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.ga97().q()
this.buJ()},
gRN(){var w=this.ga97().y
w=w==null?null:A.o.am(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.m2.h(0,this.a.c)
if(v==null)v=D.aN3
return B.c6(w,U.Xt,B.bl(!0,new B.an(A.V,w,A.aa,A.r,B.a([B.au(v.b===D.zC?this.bGU(v):this.ciP(v),w,w,w),B.ao(w,B.aI(w,w,w,w,A.mz,w,w,w,new C.dNR(d),w,w,w,B.nA(w,A.aW,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ao(6,B.au(B.d(v.a,w,w,w,w,w,w,D.f3V,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ae,!0,!0),w,!1,!1,w,w)},
c6s(d){var w
A:{if(D.II===d){w=0.46153846153846156
break A}if(D.uL===d){w=0.45
break A}if(D.wr===d){w=0.9259259259259258
break A}if(D.SR===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
ciP(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.II
A:{if(D.II===p){w=44
break A}if(D.uL===p){w=30
break A}if(D.wr===p){w=22
break A}if(D.SR===p){w=26
break A}w=14
break A}v=B.c7(this.ga97(),new C.dNQ(this,w,d,o),q)
if(p===D.a6M)v=new B.Dl(D.byS,v,q)
p=this.c6s(p)
u=o?4:5
t=d.c
s=B.aq(t,A.c,o?0.25:0.08)
s.toString
r=B.aq(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.n(w)
s=B.a([new B.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new B.fK(p,B.p(q,B.p(q,v,A.f,q,q,new B.o(A.w,q,q,B.n(w-3),q,q,A.n),q,q,q,q,A1.FN,q,q,q),A.f,q,q,new B.o(q,q,q,t,s,new B.a8(A.ay,A.aC,A.x,r,q,q),A.n),q,q,q,D.bsA,new B.Q(u,u,u,u),q,q,q),q)},
b5T(d){var w,v,u,t=null,s=new B.S(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bm(this.gRN()*0.4),0,100),q=d.b===D.II,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.aX(A.o.u(B.dk(s)),2,"0")+":"+A.a.aX(A.o.u(B.h1(s)),2,"0"),t,t,t,t,t,t,A.rR,t,t,t),A.b5],x.p)
for(w=0;w<4;++w){v=new B.aR(1,1)
n.push(B.p(t,t,A.f,t,t,new B.o(A.c,t,t,new B.bo(v,v,v,v),t,t,A.n),t,4+w*2,t,D.byA,t,t,t,3))}n.push(A.db)
n.push(D.fqr)
n.push(A.bp)
v=B.I(A.ad,A.q,1)
u=B.n(4)
n.push(B.p(t,new B.bI(A.a3,t,t,B.Bh(A.A,B.p(t,t,A.f,t,t,new B.o(A.bk,t,t,B.n(2),t,t,A.n),t,t,t,A1.FN,t,t,t,t),t,r/100),t),A.f,t,t,new B.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qr)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fhC,t,t,t))
return new B.D(new B.Q(p,12,o,2),B.B(n,A.m,t,A.e,A.j,0,t,t),t)},
auC(d,e,f){var w,v=null,u=d.d,t=B.aq(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.n(e*0.26)
w=x.p
t=B.a([B.p(v,B.au(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dcw,new B.a8(A.ay,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.au,B.d(d.a,v,1,A.a2,v,v,v,D.f8q,v,v,v)],w))
return B.aB(v,B.w(t,A.m,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dNM(this,d),v,v,v,v,v,v,!1,A.a7)},
bY5(d,e){return this.auC(d,e,!0)},
bXP(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.SR||n===D.wr,l=d.d,k=B.aq(l,A.w,0.55)
k.toString
l=B.aq(l,A.kr,0.5)
l.toString
l=B.a([k,A.dx,l],x.O)
k=p.b5T(d)
w=m?190:138
v=B.n(24)
u=B.I(A.b2,A.q,1)
w=B.aB(o,B.p(o,B.bw(B.n(23),B.b4(o,o,o,new C.aej(0,p.gRN(),o),A.fE),A.aq),A.f,o,o,new B.o(o,o,u,v,o,o,A.n),o,w,o,A.hM,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dNK(p),o,o,o,o,o,o,!1,A.a7)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.ka[s]
t.push(new B.co(A.A,o,o,p.bY5(r,m?58:54),o))}k=B.a([k,A.an,w,A.ac,B.E(B.m0(0.92,t,v,8,12,A6.vB,o,!1),1)],u)
if(n!==D.a6M){n=A.c.j(0.16)
w=B.n(28)
u=B.a([],u)
for(v=B.dc(F.ka,0,B.dG(4,"count",x.S),x.gD),t=v.$ti,v=new B.bR(v,v.gM(0),t.k("bR<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.auC(q==null?t.a(q):q,50,!1))}k.push(B.p(o,B.B(u,A.m,o,A.rr,A.j,0,o,o),A.f,o,o,new B.o(n,o,o,w,o,o,A.n),o,o,o,D.btq,T.ajd,o,o,o))}return B.p(o,B.w(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new B.o(o,o,o,o,o,new B.a8(A.ay,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bAj(d,e){var w=null
return B.p(w,B.w(B.a([this.b5T(d),B.E(B.b4(w,w,w,new C.aej(e,this.gRN(),w),A.fE),1),B.aB(w,B.p(w,B.au(B.d(F.ka[e].a,w,w,w,w,w,w,A.Jd,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dNF(this),w,w,w,w,w,w,!1,A.a7)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bGU(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.aq(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.n(r?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new B.fK(1.5384615384615383,B.p(t,B.c7(this.ga97(),new C.dNI(this,r,d),t),A.f,t,t,new B.o(t,t,t,v,u,new B.a8(A.ay,A.aC,A.x,w,t,t),A.n),t,t,t,D.bya,new B.Q(8,8,8,s),t,t,t),t)}}
C.buh.prototype={
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
r.z=D.dr6
q=r.K()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
av(d){return!0}}
C.aej.prototype={
a6(d,e){return E.Rn(d,e,this.b,this.c)},
av(d){return!0}}
C.aKU.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bt6.prototype={}
C.a81.prototype={
B(d){var w=null
return B.c6(B.ez(w,w,w,!0,!0,D.aeK,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,D.anI,w,w,w,new C.cfL(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fGa,w,w,w,1,w,!0),D.aeK,B.ct(B.a([D.ebA,B.cA(new C.cfM())],x.p),w,D.bup,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.W9.prototype={
U(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aEf(w,new B.ar(A.as,$.aw()),$,A.bB,0,B.a([],x.X),null,null)}}
C.aEf.prototype={
a_(){this.a1()
this.oZ()},
b3S(d){var w=this.d.length
return A.o.E(A.k.bm(A.k.E(A.k.E(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
pW(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b3S(v.f)
if(w!==v.x){v.x=w
C.pU("bell",24+A.o.E(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eHy(v))
C.IO("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
c7C(){if(this.d.length<2)return
this.m(new C.eHu(this))},
aZc(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eHt(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc7B(),p=s.d,o=B.E(B.aB(r,B.b4(r,r,r,new C.but(p,s.f,r),A.fE),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a7),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.w(B.a([o,new B.a7(r,40,B.au(B.d(n,r,r,r,r,r,r,D.ffM,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.axf[A.o.E(v,8)].j(0.9)
t=new B.aR(20,20)
o.push(B.aB(r,B.p(r,new B.y(p[v],r,D.ff2,r,r,r,r,r,r,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bo(t,t,t,t),r,r,A.n),r,r,r,A.fB,A.h8,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eHw(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a7))}p=A.c.j(0.07)
return C.nS(A.aS,A.jt,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.w(B.a([new C.h8(o,r,r),B.B(B.a([B.E(B.aM(r,A.U,!1,r,!0,A.r,r,B.aN(),s.e,r,r,r,r,r,2,B.br(r,new B.b3(4,B.n(14),A.W),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kJ,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.aj,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eHx(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dg,!0,A.a4,r,A.am,r,r,r,r),1),A.ab,new C.iS(A.hz,"Add",s.gc7z(s),A.c,r),A.bp,new C.iS(A.oT,"Spin",q,A.bk,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
C.but.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new B.x(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.W()
w=B.N()
w.r=D.bbe.gp(0)
a1.af(d,f,w)
w=B.N()
w.b=A.af
w.c=3
w.r=A.aS.gp(0)
a1.af(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=B.bV(d,a0)
n=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
n.r=D.axf[A.o.E(q,8)].gp(0)
m=n.K()
n=p*57.29577951308232
f.drawArc.apply(f,[B.bY(o),n,s,!0,m])
m.delete()
o=B.bV(d,a0)
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.b=A.af
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.K()
f.drawArc.apply(f,[B.bY(o),n,s,!0,m])
m.delete()
J.bx(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.ap(o,0,11)+"\u2026"
k=new B.l1(new B.eR(o,i,i,A.d_,i,i,i,i,i,i,D.f35),A.a4,A.cb,new B.kI(1),i,i,i,i,A.c7,i)
k.eO()
o=k.b
n=o.c
o=o.a.c
k.a6(a1,new B.x(a0-n-16,-o.gbf(o)/2))
f.restore()}f=B.N()
f.r=D.aep.gp(0)
a1.af(d,20,f)
f=B.N()
f.b=A.af
f.c=3
f.r=A.aS.gp(0)
a1.af(d,20,f)
j=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
e-=a0
j.F(new B.b5(g,e+26))
e-=10
j.F(new B.ap(g-14,e))
j.F(new B.ap(g+14,e))
j.F(new B.bE())
e=B.N()
e.r=A.c.gp(0)
a1.aS(j,e)
e=B.N()
e.b=A.af
e.c=2
e.r=A.aW.gp(0)
a1.aS(j,e)},
av(d){return!0}}
C.V_.prototype={
U(){return new C.biP($,A.bB,0,B.a([],x.X),null,null)}}
C.biP.prototype={
a_(){this.a1()
this.oZ()},
pW(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.IO("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.a4Y(900,new C.dTG())}w.m(new C.dTH())},
aZe(d){return this.m(new C.dTB(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aX(A.o.u(A.k.am(m,60)),2,"0")
v=A.a.aX(A.o.u(A.o.E(A.k.dj(m),60)),2,"0")
m=B.b4(n,n,n,new C.bpi(l,A.cs,n),A.aOn)
u=B.d(w+":"+v,n,n,n,n,n,n,D.f7n,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.au(new B.a7(280,280,new B.an(A.A,n,A.aa,A.r,B.a([m,B.w(B.a([u,B.d(t,n,n,n,n,n,n,D.f6s,n,n,n),A.au,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.wx,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.d9A[r]
u.push(new C.eV(""+q+" min",o.d===q,new C.dTD(o,q),n,A.cs,n))}m=o.f
p=m?A0.yr:A.j2
m=m?"Pause":"Start"
return C.nS(A.cs,A.jt,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.w(B.a([new C.h8(u,n,n),new C.h8(B.a([new C.iS(p,m,new C.dTE(o),A.bk,n),new C.iS(A.nj,"Reset",new C.dTF(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
C.bpi.prototype={
a6(d,e){var w,v,u,t,s=e.ei(A.J),r=e.a/2-14
$.W()
w=B.N()
w.b=A.af
w.c=16
w.r=A.c.j(0.08).gp(0)
d.af(s,r,w)
w=B.bV(s,r)
v=B.N()
v.b=A.af
v.c=16
v.d=A.bV
u=this.c
t=B.aq(u,A.c,0.4)
t.toString
v.sar(new B.fW(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aA(0,B.bV(s,r)))
d.eV(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
av(d){return d.b!==this.b}}
C.Ud.prototype={
U(){return new C.bis($,A.bB,0,B.a([],x.X),null,null)}}
C.bis.prototype={
a_(){this.a1()
this.oZ()},
pW(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Rf.h(0,p.d)
w.toString
v=A.d.fn(w,new C.dFc())
u=A.k.E(p.f,v)
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
C.pU("flute",D.c_Q[t]+5,1400,0.35)}p.m(new C.dFd())},
gc7F(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.K7("Press Start",0.5)
w=D.Rf.h(0,this.d)
w.toString
v=A.d.fn(w,new C.dF7())
u=A.k.E(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.K7("Breathe in",0.5+0.5*A.dz.au(0,p))
case 1:return new B.K7("Hold",1)
case 2:return new B.K7("Breathe out",1-0.5*A.dz.au(0,p))
default:return new B.K7("Hold",0.5)}}}return new B.K7("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc7F(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.iF.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.iF.j(0.35),A.J,40)],v):q,q,A.a5),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.DF,q,q,q))
n.push(B.ao(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kJ,q,q,q),q,q,q,q,q,q))
n=B.au(new B.a7(300,340,new B.an(A.A,q,A.aa,A.r,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aW(D.Rf.gep(D.Rf));w.C();){v=w.gT(w)
o.push(new C.eV(v,r.d===v,new C.dFa(r,v),q,A.iF,q))}w=r.e
v=w?A.Gx:A.j2
w=w?"Stop":"Start"
o.push(new C.iS(v,w,new C.dFb(r),A.bk,q))
return C.nS(A.iF,A.jt,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new C.h8(o,q,q))}}
C.aHE.prototype={}
C.US.prototype={
U(){return new C.biJ(new B.cv(null,x.z),B.a([],x.au),A.av,A.c)}}
C.biJ.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aI(s,s,s,s,D.qb,s,s,s,new C.dRb(t,d),s,s,s,s,"Share",s)],r),p=B.bw(B.n(18),new B.eH(B.aB(s,B.b4(s,s,s,new C.bkF(t.e,t.x,s),A.fE),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dRc(t),new C.dRd(t),s,s,s,s,s,s,s,s,s,new C.dRe(t),s,s,s,s,!1,A.a7),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.cRq[w]
u=!t.w&&t.f.A(0,v)
o.push(new C.Fe(v,u,new C.dRf(t,v),!1,s))}u=t.r
return C.nS(A.bA,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bT,p,s),"DRAW PAD",B.w(B.a([new C.h8(o,s,s),C.l0(A.bA,""+A.k.V(u),"Brush",30,2,new C.dRg(t),u),new C.h8(B.a([new C.eV("Eraser",t.w,new C.dRh(t),A.G7,A.bA,s),new C.iS(A.rg,"Undo",new C.dRi(t),A.c,s),new C.iS(A.ef,"Clear",new C.dRj(t),A.c,s),new C.iS(A.NK,"Paper",new C.dRk(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
C.bkF.prototype={
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
C.Vz.prototype={
U(){var w=x.S
return new C.aDB(B.aY(w),B.aY(w))}}
C.aDB.prototype={
a_(){this.a1()
this.arY()},
arY(){var w,v,u=this,t=x.N,s=B.bn(D.dev,!0,t)
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
c7A(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
C.pU("bell",12+A.o.E(d,9),150,0.35)
s.m(new C.ef3(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gak(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bM(A.n6,new C.ef4(s,v,u),t)
else{s.x=!0
B.bM(Aa.Fp,new C.ef5(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.TQ,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.am(p,2)+" / "+o
o=x.p
p=B.w(B.a([new B.D(A.xT,B.B(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aS:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.is,A.j,0,q,q),q),B.E(B.iv(!0,q,q,A.y,new B.hO(v,8,8,1,q),new C.ef9(r),r.e.length,A.bl,q,A.ah,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.cSS[t]
o.push(new C.eV(s.b,r.d===s.a,new C.efa(r,s),q,A.aP,q))}o.push(new C.iS(D.bHG,"New game",new C.efb(r),A.bk,q))
return C.nS(A.aP,A.jt,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new C.h8(o,q,q))}}
C.VJ.prototype={
U(){return new C.aDU(B.a([],x.t))}}
C.aDU.prototype={
c7E(d){A.d.a8(this.d)
this.w=!0
this.aZd()},
aZd(){this.d.push(A.cS.az(4))
this.e=0
this.ZQ()},
ZQ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eoZ(t))
s=x.H
w=3
return B.b(B.bM(A.lR,null,s),$async$ZQ)
case 3:r=t.d,q=B.bn(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aSt(n)
w=7
return B.b(B.bM(new B.bb(1000*Math.max(280,600-r.length*18)),null,s),$async$ZQ)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.ep_(t))
case 1:return B.h(u,v)}})
return B.i($async$ZQ,v)},
aSt(d){this.m(new C.eoX(this,d))
C.pU("marimba",D.c_P[d]+5,450,0.55)
B.bM(A.Fn,new C.eoY(this),x.H)},
c7G(d){var w,v,u=this
if(!u.w||u.r)return
u.aSt(d)
w=u.d
v=u.e
if(w[v]!==d){E.dX(90,"",600,0,0.5,"saw")
u.m(new C.ep0(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.ep1(u))
B.bM(A.ik,new C.ep2(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,I.aQN,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fg8,A.L,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.awa[v]
u=u.j(q.f===v?1:0.35)
t=new B.aR(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.awa[v].j(0.8),A.J,30)],w):p
r=new B.az(A.c.j(q.f===v?0.9:0.15),2,A.q,-1)
l.push(B.aB(p,B.de(p,p,p,p,A.bb,new B.o(u,p,new B.bO(r,r,r,r),new B.bo(t,t,t,t),s,p,A.n),A.jl,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.ep3(q,v),p,p,p,p,p,p,!1,A.a7))}o=B.au(new B.D(A.a9,B.w(B.a([o,A.an,n,A.d7,new B.fK(1,B.m0(1,l,2,12,12,p,A.dT,!1),p)],m),A.m,p,A.b7,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return C.nS(A.bH,A.jt,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new C.h8(B.a([new C.iS(A.j2,n,q.gc7D(q),A.bk,p)],m),p,p))}}
C.W2.prototype={
U(){return new C.bjT(new B.ar(A.as,$.aw()))}}
C.bjT.prototype={
avu(d){return B.oI(A.k.ab(d,2),B.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eCQ(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.d6(B.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eCZ()
l=B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),l,m,m,m,m,m,2,B.br(m,m,m,m,m,m,m,m,!0,new B.b3(4,B.n(16),A9.x0),m,m,m,m,m,m,m,m,m,m,m,new B.b3(4,B.n(16),D.aZm),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.kI,"Bill amount",!0,!0,!1,m,m,m,m,D.fdI,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,A.dV,m,m,m,1,m,m,!1,"\u2022",m,new C.eCV(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aPR,!0,A.a4,m,A.am,m,m,m,m)
k=A.bk.j(0.1)
s=B.n(20)
r=B.I(A.bk.j(0.35),A.q,1)
q=x.p
s=B.ct(B.a([l,A.bw,B.p(m,B.w(B.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.avu(w)),t.$2("Total","$"+n.avu(v)),V.M7,t.$3$big("Each of "+n.f+" pays","$"+n.avu(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bP,m,m,m)],q),m,A.fC,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cDH[p]
r.push(new C.eV(""+o+"%",A.k.V(n.e)===o,new C.eCW(n,o),m,A.bk,m))}l=n.f
return C.nS(A.bk,A.jt,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.w(B.a([new C.h8(r,"TIP",m),C.l0(A.aP,""+l,"People",20,1,new C.eCX(n),l),new C.h8(B.a([new C.eV("Round up",n.r,new C.eCY(n),m,A.aS,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
C.Vy.prototype={
U(){var w=B.a([3,5],x.t)
return new C.bjo(w,A.cS,$,A.bB,0,B.a([],x.X),null,null)}}
C.bjo.prototype={
a_(){this.a1()
this.oZ()},
pW(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.E(A.k.bm(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.az(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.az(6)+1)
u.f=t
C.a80("snare",0.5)}u.m(new C.ee8())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.ht()
u.w=t
u.x=t?0:3.141592653589793
C.pU("bell",24,400,0.5)}u.m(new C.ee9())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bcz(v,o.r>0,n))}u=B.aB(n,B.au(B.bZ(A.fQ,m,A.br,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ee1(o),n,n,n,n,n,n,!1,A.a7)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.I(A.d8,A.q,6)
s=B.a([new B.ac(0,A.G,A.aS.j(0.4),A.J,30)],x.V)
u=B.aB(n,B.au(B.ed(A.A,B.p(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fcX,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.eis,A.a5),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ee2(o),n,n,n,n,n,n,!1,A.a7)}else{m=o.as
u=B.aB(n,B.au(B.w(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.f2A,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kJ,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ee3(o),n,n,n,n,n,n,!1,A.a7)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.d71[r]
v.push(new C.eV(q.b,o.d===q.a,new C.ee4(o,q),q.c,A.by,n))}v=B.a([new C.h8(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(C.l0(A.by,""+s,"Dice",4,1,new C.ee5(o),s))}if(o.d==="num"){s=o.z
s=C.l0(A.by,""+s,"From",100,1,new C.ee6(o),s)
p=o.Q
A.d.v(v,B.a([s,C.l0(A.by,""+p,"To",1000,2,new C.ee7(o),p)],m))}return C.nS(A.by,A.jt,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.w(v,A.m,n,A.e,A.Q,0,A.p))}}
C.bcz.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cS.an()-0.5)*0.6
else w=0
v=B.n(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cz,14)],x.V)
t=B.a([],x.p)
for(s=D.dpX.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bI(s[q],p,p,B.p(p,p,A.f,p,p,L.abw,p,18,p,p,p,p,p,18),p))
return B.eE(A.A,w,B.p(p,new B.an(A.V,p,A.aa,A.r,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bC,p,p,100),p)}}
C.aKI.prototype={
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
this.bux()}}
C.aKZ.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bwd.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.buP()}}
C.aLq.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bwl.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.bvh()}}
C.aLQ.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bwt.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.bvH()}}
C.b6a.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aEp.h(0,t)
$.arw=s==null?"music":s
s=v.d
w=x.p
t=B.a([B.aI(u,u,u,u,P.nk,u,u,u,new C.csG(d),u,u,u,u,u,u),B.E(B.d(t,u,1,A.a2,u,u,u,B.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(B.aI(u,u,u,u,B.X(A.NN,s,u,u,u,22),u,u,u,new C.csH(v,d),u,u,u,u,"How to play",u))
w=B.a([new B.D(D.bxs,B.B(t,A.m,u,A.e,A.j,0,u,u),u),B.E(v.f,1)],w)
w.push(B.p(u,v.r,A.f,u,u,new B.o(F.AK,u,new B.bO(new B.az(A.c.j(0.08),1,A.q,-1),A.W,A.W,A.W),u,u,u,A.n),u,u,u,u,A.Fr,u,u,1/0))
return B.c6(u,A.bY,B.bl(!0,B.w(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0),u,!1,!1,u,u)}}
C.eV.prototype={
B(d){var w,v,u,t=this,s=null,r=B.n(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=B.I(o,A.q,q?1.6:1)
w=x.p
v=B.a([],w)
u=t.f
if(u!=null)A.d.v(v,B.a([B.X(u,q?t.r:A.aR,s,s,s,16),A.eg],w))
v.push(B.d(t.c,s,s,s,s,s,s,B.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new B.D(F.tH,B.aB(s,B.de(s,B.B(v,A.m,s,A.e,A.Q,0,s,s),s,s,A.bb,new B.o(p,s,o,r,s,s,A.n),A.eJ,s,s,s,A.h8,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.csC(t),s,s,s,s,s,s,!1,A.a7),s)}}
C.h8.prototype={
B(d){var w=null,v=B.a([],x.p),u=this.d
if(u!=null)v.push(new B.a7(54,w,B.d(u,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(B.E(B.cc(B.B(this.c,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aN),1))
return new B.D(A.cu,B.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
C.b6b.prototype={
B(d){var w,v,u=this,t=null,s=B.d(u.c,t,t,t,t,t,t,B.l(t,t,A.c.j(0.7),t,t,t,t,t,t,t,t,11.5,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),r=u.w
r=B.auX(d).cIO(r,A.bE,r.j(0.2),r,3.5)
w=u.f
v=u.r
r=B.E(B.a9P(B.l_(t,t,t,v,w,u.e,A.k.D(u.d,w,v)),r),1)
return new B.a7(t,34,B.B(B.a([new B.a7(78,t,s,t),r,new B.a7(38,t,B.d(u.x,t,t,t,t,t,t,A.Jd,A.dP,t,t),t)],x.p),A.m,t,A.e,A.j,0,t,t),t)}}
C.iS.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new B.D(F.tH,B.aF(!1,A.a1,!0,B.n(12),B.aL(!1,B.n(12),!0,new B.D(Ag.ahz,B.B(B.a([B.X(w.c,u,v,v,v,17),A.eg,B.d(w.d,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.csB(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ag),v)}}
C.Fe.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.f0W:u
w=t?A.c:A.b2
w=B.I(w,A.q,t?2.5:1)
return B.aB(u,B.de(u,u,u,u,A.bb,new B.o(p,u,w,u,t?B.a([new B.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a5),A.hw,u,r,D.ahl,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.csI(v),u,u,u,u,u,u,!1,A.a7)}}
C.qE.prototype={
a4Y(d,e){var w=B.dj()
w.seJ(B.cM(B.dD(0,0,0,d,0,0),new C.csD(this,w,e)))
this.iH$.push(w.bj())},
oZ(){var w=this,v=w.wl(new C.csF(w))
v.ia(0)
w.iG$!==$&&B.aP()
w.iG$=v}}
C.aaP.prototype={
bxS(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
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
w=g.bB6()
g.ay!==$&&B.aP()
g.ay=w},
bB6(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
C.aaQ.prototype={
cEI(d,e){var w,v,u,t,s,r,q,p
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
C.P5.prototype={}
C.y6.prototype={}
C.P4.prototype={
fo(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.c_A[w.az(7)]
w=w.ht()?0:12
u=A.o.E(t.c++,3)===0?"flute":"bell"
C.pU(u,v+w-12,2200,0.1)}}
C.V5.prototype={
U(){var w=$.aw()
return new C.aCZ(new B.cv(null,x.z),new B.ar(A.as,w),new C.P4(A.cS),D.d91,A.az,D.a3f,$,A.bB,0,B.a([],x.X),null,null)}}
C.aCZ.prototype={
a_(){var w,v=this
v.a1()
v.oZ()
v.a.toString
w=$.hcE
if(w==null)w=$.hcE=C.cvh()
w.bH(new C.dWc(v),x.P)},
q(){var w=this.e
w.R$=$.aw()
w.P$=0
this.buW()},
csk(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=B.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,B.L)(v),++s){r=v[s]
q=B.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,B.L)(p),++n)q.push(new C.dVF(p[n]).$0())
w.push(q)}this.w=w},
gW2(){var w=this.fy
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
B.f_()
C.pU("bell",(A.d.cK(D.a2S,d.c)+1)*3+12,900,0.45)
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
c8k(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.az))return null
w=n.fy
v=n.gW2()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gW2()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cEI((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c8j(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new C.dVD(w))
return}w.m(new C.dVE(w,v,A.a.i(d).toLowerCase()))},
bO4(){var w=null,v=this.c
v.toString
B.ca(w,w,!0,w,new C.dVB(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=B.a([B.aI(n,n,n,n,D.bKg,n,n,n,o.gbO3(),n,n,n,n,"Earth facts",n),B.aI(n,n,n,n,D.qb,n,n,n,new C.dVY(o,d),n,n,n,n,"Share",n)],l),j=B.cA(new C.dVZ(o,m)),i=A.c.j(0.06)
i=B.a([B.aM(n,A.U,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,B.br(n,new B.b3(4,B.n(14),A.W),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.DB,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bSq,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc8i(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.iS,!0,A.a4,n,A.am,n,n,n,n)],l)
if(o.id.length!==0){w=B.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
w.push(new C.eV(s.a,!1,new C.dW_(o,s),A.mw,A.aP,n))}i.push(new B.D(A.i4,new B.a7(n,38,B.ct(w,n,n,n,n,A.aN,!1),n),n))}i.push(A.an)
w=B.a([new C.eV("Whole Earth",!1,new C.dW3(o),A.hk,A.aP,n)],l)
for(v=D.aE4.gdQ(D.aE4),v=v.gae(v);v.C();){u=v.gT(v)
w.push(new C.eV(u.a,!1,new C.dW4(o,u),n,A.aP,n))}w.push(new C.eV("Random",!1,new C.dW5(o),A.oT,A.aP,n))
i.push(new C.h8(w,"GO TO",n))
w=o.z
i.push(C.l0(A.aP,A.k.ab(w,1)+"x","Zoom",16,0.8,new C.dW6(o),w))
w=o.dy
i.push(C.l0(A.bH,A.a.aX(A.o.u(A.k.bm(w)),2,"0")+":00","Time",24,0,new C.dW7(o),w))
w=o.fr
i.push(C.l0(A.bk,o.cr5(),"Season",365,0,new C.dW8(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lW:D.Go
i.push(new C.h8(B.a([new C.eV("Spin",w,new C.dW9(o),D.bFz,A.aP,n),new C.eV("Night",v,new C.dWa(o),A.vK,A.aP,n),new C.eV("Borders",u,new C.dW0(o),D.bFD,A.aP,n),new C.eV("Names",r,new C.dW1(o),V.BQ,A.aP,n),new C.eV("Music",q,new C.dW2(o),p,A.aP,n)],l),n,n))
return C.nS(A.aP,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",B.w(i,A.m,n,A.e,A.Q,0,A.p))},
cr5(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.awO[u])v=u
return A.iq[v]+" "+(A.k.bm(w-D.awO[v])+1)},
c8h(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&B.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new M.vJ(1,A.o.E((A.d.cK(D.a2S,t)+1)*47,360),0.55,1).lZ()
r=new C.dVz()
q=B.n(20)
p=B.I(s.j(0.6),A.q,1)
o=x.p
n=B.B(B.a([B.p(j,j,A.f,j,j,new B.o(s,j,j,j,j,j,A.a5),j,10,j,j,j,j,j,10),A.ab,B.E(B.d(d.a,j,1,A.a2,j,j,j,A.de,j,j,j),1),B.aI(j,j,j,j,A.GI,j,j,j,new C.dVy(this),j,j,j,j,j,A.cc)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=B.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hc,j,j,j)
m=D.doB.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=B.B(B.a([m,A.ab,r.$2("PEOPLE",l?C.fsr(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",C.GM(i)+" km\xb2")
if(l)m=(w<10?A.k.ab(w,1):C.GM(w))+" per km\xb2"
else m="\u2014"
m=B.B(B.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.ab(u,3):A.k.ab(u,1))+"% of people")
l=d.f
k=d.r
return B.p(j,B.w(B.a([n,t,A.N,v,A.N,m,A.N,B.B(B.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+C.fsr(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.Q,0,A.p),A.f,j,j,new B.o(D.Wd,j,p,q,j,j,A.n),j,j,j,j,D.ahS,j,j,j)}}
C.beM.prototype={
a6(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.W(),d7=B.N()
d7.r=D.AG.gp(0)
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
u.sar(new B.c_(A.A,0.5,A.x,d3,0,B.a([A.K,A.aP.j(0.35),A.K],t),D.cUp,d3).aA(0,B.bV(p,o*1.1)))
d8.af(p,o*1.05,u)
n=B.bV(p,o)
u=B.N()
u.sar(D.eiw.aA(0,n))
d8.af(p,o,u)
J.bx(d7.save())
u=x.v
d6=new B.aO(d6.r,A.ao,d3,d3,B.a([],u))
d6.F(new B.jO(n))
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
f=new C.ddl(l,k,j,p,o)
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
a9=A.o.E((A.d.cK(D.a2S,a7.c)+1)*47,360)
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
s.z=A.un
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
c9=C.hLK(a7.a,a3,b2)
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
u.sar(new B.c_(A.A,0.5,A.x,d3,0,B.a([A.K,A.K,D.b93.j(0.78)],t),D.d9p,d3).aA(0,B.bV(new B.x(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.af(p,o,u)}$.W()
d4=B.N()
d4.sar(new B.c_(A.A,0.5,A.x,d3,0,B.a([A.K,A.w.j(0.4)],t),D.dm8,d3).aA(0,n))
d8.af(p,o,d4)
d7.restore()
d7=B.N()
d7.b=A.af
d7.c=1.4
d7.r=A.hh.j(0.5).gp(0)
d8.af(p,o,d7)},
av(d){return!0}}
C.aL3.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.aL4.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.buV()}}
C.bt1.prototype={}
C.W5.prototype={
U(){return new C.bjX()}}
C.bjX.prototype={
gaS1(){var w=this.d
if(w===$)w=this.d=A.cS.az(16)
return w},
B(d){var w=null,v=B.ez(w,w,w,!0,!0,D.AG,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,D.anI,w,w,w,new C.eDJ(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fzO,w,w,w,1,w,!0),u=B.n(18),t=A.aP.j(0.1),s=B.I(A.aP.j(0.35),A.q,1),r=x.p
return B.c6(v,D.AG,B.ct(B.a([B.p(w,B.B(B.a([D.bIZ,A.at,B.E(B.d(D.cYh[this.gaS1()],w,w,w,w,w,w,D.aRk,w,w,w),1),B.aI(w,w,w,w,D.bTq,w,w,w,new C.eDK(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bC,w,w,w),A.aB,B.cA(new C.eDL())],r),w,A.YX,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.VS.prototype={
U(){return C.hMb()}}
C.bjK.prototype={
ciQ(d){var w=d.c,v=C.hMd(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new B.x(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a1()
this.oZ()},
pW(d){var w,v,u,t=this
t.e.fo(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.ciQ(w)
u=new B.x(-v.a,-v.b).aJ(0,t.w)
v=B.kr(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc8l(){var w=this.ch
return new B.x(w.a/2,w.b/2).ad(0,this.x)},
c8p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
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
aZz(d){this.m(new C.ewc(this,d))
B.f_()
C.pU("bell",D.dml[A.o.E(A.d.cK(D.Cv,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=B.a([B.aI(m,m,m,m,D.qb,m,m,m,new C.ewn(n,d),m,m,m,m,"Share",m)],k),i=B.cA(new C.ewo(n,l)),h=B.a([new C.eV("All",!1,new C.ewp(n),A.a0W,A.aS,m)],k)
for(w=0;w<10;++w){v=D.Cv[w]
h.push(new C.eV(v.a,n.z===v,new C.ewq(n,v),m,B.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.ab(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=C.l0(A.aS,s,"Time",1,0,new C.ewr(n),u/t)
u=n.w
u=C.l0(A.aS,A.k.ab(u,1)+"x","Zoom",9,0.5,new C.ews(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lW:D.Go
return C.nS(A.aS,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",B.w(B.a([new C.h8(h,"GO TO",m),t,u,new C.h8(B.a([new C.eV("Orbits",s,new C.ewt(n),m,A.aS,m),new C.eV("Names",r,new C.ewu(n),m,A.aS,m),new C.eV("Asteroids",q,new C.ewv(n),m,A.aS,m),new C.eV("Music",p,new C.eww(n),o,A.aS,m)],k),m,m)],k),A.m,m,A.e,A.Q,0,A.p))},
c8m(d){var w,v,u,t,s,r=null,q=B.b0(d.z),p=d.c,o=p*8.317,n=new C.ewa(),m=B.n(20),l=B.I(q.j(0.6),A.q,1),k=B.p(r,r,A.f,r,r,new B.o(q,r,r,r,r,r,A.a5),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=B.B(B.a([k,A.ab,B.E(B.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.ki,r,r,r),1),B.aI(r,r,r,r,A.GI,r,r,r,new C.ew9(this),r,r,r,r,r,A.cc)],w),A.m,r,A.e,A.j,0,r,r)
k=B.d(d.y,r,r,r,r,r,r,F.DC,r,r,r)
v=n.$2("WIDTH",C.GM(d.d*2)+" km")
u=p===0
p=B.B(B.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":B.u(p)+" AU ("+C.GM(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new C.ewb().$1(v))
t=d.f
v=B.B(B.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.ab(t/24,0)+" Earth days":A.k.ab(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=B.B(B.a([n.$2("GRAVITY",B.u(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.ab(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.ab(o,1)+" minutes":A.k.ab(o/60,1)+" hours"
return B.p(r,B.w(B.a([j,A.au,k,A.N,p,A.N,v,A.N,s,A.N,B.B(B.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.Q,0,A.p),A.f,r,r,new B.o(D.Wd,r,l,m,r,r,A.n),r,r,r,r,D.ahS,r,r,r)}}
C.br4.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=B.N()
w.r=D.AG.gp(0)
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
o=a5.gc8l()
n=a5.w
if(a5.as)for(a6=A.d.gae(D.Cv),t=new B.f4(a6,new C.eY7()),s=o.a,r=o.b;t.C();){q=a6.gT(0).c
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
p.delete()}i=C.hMc(A.d.gH(D.Cv))*Math.sqrt(n)*1.4
a6=i*3.2
t=B.N()
s=x.O
t.sar(new B.c_(A.A,0.5,A.x,a4,0,B.a([A.aS.j(0.5),A.K],s),a4,a4).aA(0,B.bV(o,a6)))
a7.af(o,a6,t)
t=B.N()
t.sar(D.eiq.aA(0,B.bV(o,i)))
a7.af(o,i,t)
if(a5.at){h=C.heg("Sun",10.5,A.ad)
h.a6(a7,o.ad(0,new B.x(-h.b.c/2,i+4)))}for(a6=A.d.gae(D.Cv),t=new B.f4(a6,new C.eY8()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gT(0)
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
w.drawOval(B.bY(a0),p)
p.delete()
w.restore()}a0=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gp(0)
a0.z=A.un
p=a0.K()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a1=B.aq(e,A.w,0.55)
a1.toString
a0.sar(new B.c_(W.wX,0.5,A.x,a4,0,B.a([A.c,e,a1],s),H.a2u,a4).aA(0,B.bV(new B.x(g,f),j)))
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
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.d2C[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.K()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=C.heg(d,10.5,A.ad)
h.a6(a7,new B.x(g+-h.b.c/2,f+(j+4)))}}},
av(d){return!0}}
C.V6.prototype={
U(){var w=x.i
return new C.aD_(new C.P4(A.cS),B.c2(5,0,!1,w),B.c2(5,0,!1,w),B.c2(5,null,!1,x.cD),A.J,A.J,B.a([],x.g),$,A.bB,0,B.a([],x.X),null,null)}}
C.aD_.prototype={
cvz(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c8o(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.e78
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
s.m(new C.dWg())},
a_(){this.a1()
this.oZ()},
pW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fo(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.yW[r]
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
break}}}if(A.d.d8(s,new C.dWJ()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
if(n==="drop")n=p.bMd()
else n=n==="weight"?p.cCZ():p.bEn()
w=x.p
v=B.a([],w)
for(u=0;u<3;++u){t=D.djk[u]
v.push(new C.eV(t.b,p.d===t.a,new C.dWv(p,t),t.c,A.cY,o))}v=B.a([new C.h8(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=B.a([new C.eV("Hammer",!s,new C.dWw(p),Af.Gj,A.cY,o),new C.eV("Feather",s,new C.dWx(p),V.Nu,A.cY,o),new C.eV(q,r,new C.dWB(p),A.G8,A.aP,o)],w)
q=p.w
A.d.v(v,B.a([new C.h8(r,o,o),C.l0(A.cY,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new C.dWC(p),q),new C.h8(B.a([new C.iS(A.tV,"Drop!",new C.dWD(p),A.bk,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=C.l0(A.cY,""+A.k.V(s)+" kg","Your weight",120,20,new C.dWE(p),s)
r=p.ax
A.d.v(v,B.a([s,C.l0(A.cY,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new C.dWF(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=C.l0(A.cY,A.k.ab(s,1)+" km/s","Speed",13,0,new C.dWG(p),s)
r=p.ch
A.d.v(v,B.a([s,C.l0(A.cY,A.k.ab(r,1)+"x out","View",8,0.5,new C.dWH(p),r),new C.h8(B.a([new C.iS(A.o3,"Fire!",p.gc8n(),A.bk,o),new C.iS(A.tV,"Falls",new C.dWI(p),A.c,o),new C.iS(A.ra,"Orbit 7.7",new C.dWy(p),A.c,o),new C.iS(D.bIo,"Oval 9",new C.dWz(p),A.c,o),new C.iS(A.BT,"Escape",new C.dWA(p),A.c,o)],w),o,o)],w))}return C.nS(A.cY,A.jt,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",B.w(v,A.m,o,A.e,A.Q,0,A.p))},
bMd(){return new B.D(D.bss,B.cA(new C.dWf(this)),null)},
cCZ(){var w,v,u,t=null,s=[D.eI8,D.eJx,D.eJE,D.eJW,D.eJC,D.eK2,D.eIG,D.eKo,D.eJk],r=x.p,q=B.a([D.fnF,A.R],r)
for(w=0;w<9;++w){v=s[w]
u=B.b0(v.c)
q.push(new B.D(A.cu,new B.ck(A.aN,A.e,A.j,A.m,t,A.p,t,0,B.a([new B.a7(62,t,new B.y(v.a,t,new B.G(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new B.bB(1,A.bf,new B.Br(new C.dWh(this,v),t),t)],r),t),t))}q.push(A.au)
q.push(D.fq0)
return B.ct(q,t,A.im,t,t,A.ah,!1)},
bEn(){return B.cA(new C.dWd(this))}}
C.ba0.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.W(),e=B.N()
e.r=D.AG.gp(0)
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
e.sar(new B.c_(A.A,0.5,A.x,i,0,B.a([A.K,A.aP.j(0.35),A.K],x.O),D.daj,i).aA(0,B.bV(g,p*1.1)))
d.af(g,p*1.06,e)
e=B.N()
e.sar(D.eik.aA(0,B.bV(g,p)))
d.af(g,p,e)
o=g.ad(0,new B.x(0,-p))
f=f.r
e=x.v
n=new B.aO(f,A.ao,i,i,B.a([],e))
u=o.a
t=o.b
s=t+3
n.F(new B.b5(u-16,s))
n.F(new B.ap(u,t-400*h-4))
n.F(new B.ap(u+16,s))
n.F(new B.bE())
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
m.F(new B.b5(f+A.d.gH(u).a*h,t+A.d.gH(u).b*h))
for(u=B.dc(u,1,i,B.T(u).c),s=u.$ti,u=new B.bR(u,u.gM(0),s.k("bR<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
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
h.z=G.p8
d.af(k,7,h)
h=B.N()
h.r=A.c.gp(0)
d.af(k,4,h)}},
av(d){return!0}}
C.VK.prototype={
U(){return new C.bjH(new B.cv(null,x.z),$,A.bB,0,B.a([],x.X),null,null)}}
C.bjH.prototype={
a_(){this.a1()
this.oZ()},
pW(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Q5[l.e],i=D.Q5[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=B.a([B.aI(k,k,k,k,D.qb,k,k,k,new C.ep6(l,d),k,k,k,k,"Share",k)],u)
s=B.E(B.b4(k,k,k,new C.bqD(f,g,v,k),A.fE),1)
r=g.a
q=v<10?A.k.ab(v,1):C.GM(v)
p=f.a
q=B.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.hX,A.L,k,k)
o=C.GM(v*v*v)
n=A.a.cc(p,"s")?"":"s"
h=B.w(B.a([s,B.p(k,B.w(B.a([q,A.au,B.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A4.uQ,A.L,k,k),A.bz,B.d(p+": "+C.GM(w*2)+" km wide. "+r+": "+C.GM(h*2)+" km wide.",k,k,k,k,k,k,A4.Jl,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.buz,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=B.a([],u)
for(m=0;m<10;++m){w=D.Q5[m]
r.push(new C.eV(w.a,l.e===m,new C.ep7(l,m),k,B.b0(w.c),k))}w=B.a([],u)
for(m=0;m<10;++m){s=D.Q5[m]
w.push(new C.eV(s.a,l.f===m,new C.ep8(l,m),k,B.b0(s.c),k))}return C.nS(A.c5,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new B.eH(h,l.d),"SIZE COMPARE",B.w(B.a([new C.h8(r,"FIRST",k),new C.h8(w,"SECOND",k)],u),A.m,k,A.e,A.Q,0,A.p))}}
C.bqD.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.W()
w=B.N()
w.r=D.bf7.gp(0)
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
w=new C.eWg(d)
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
k=B.h2(i,i,i,i,B.d0(i,i,i,i,i,i,i,i,i,D.f9c,s.a),A.a4,A.cb,i,A.dR,A.c7)
k.eO()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbf(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbf(g)-6
h=g}k.a6(d,l.ad(0,new B.x(-w/2,h)))
j=B.h2(i,i,i,i,B.d0(i,i,i,i,i,i,i,i,i,D.fcw,t.a),A.a4,A.cb,i,A.dR,A.c7)
j.eO()
t=j.b
h=t.c
t=t.a.c
j.a6(d,m.ad(0,new B.x(-h/2,-t.gbf(t)/2)))},
av(d){return!0}}
C.aL5.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bwf.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.buX()}}
C.aLz.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bwo.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.bvq()}}
C.aLC.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bwq.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.bvt()}}
C.Pz.prototype={}
C.Ub.prototype={
U(){return C.hM9()}}
C.bir.prototype={
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
E.dX(70,"",500,0.3,0.5,"sine")}}A.d.bs(w,new C.dEE())},
aZA(d){var w,v,u,t=this.Q
if(t.A(0,A.az))return
w=this.gb7v()
v=d.aF(0,new B.x(t.a/2,t.b*0.42))
u=A.k.D(v.gcG()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new C.Pz(t,u,1.2,new B.vI(1,30+A.cS.an()*40,0.9,0.7).lZ()))
C.pU("bell",60+A.k.V(12-u)*2,400,0.35)},
gb7v(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new B.M(m,new C.dEs(),B.T(m).k("M<1,K>")).fn(0,A.v8),1.0001,99))
m=x.p
w=B.a([B.aI(n,n,n,n,D.qb,n,n,n,new C.dEt(o,d),n,n,n,n,"Share",n)],m)
v=B.cA(new C.dEu(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.ab(s,0)+" Suns":C.fsr(s)+" Suns"
t=C.l0(A.by,s,"Mass",1,0,new C.dEw(o),u/t)
u=B.a([new C.eV("Star (10)",!1,new C.dEx(o),n,A.by,n),new C.eV("Cygnus X-1 (21)",!1,new C.dEy(o),n,A.by,n),new C.eV("Milky Way core (4 million)",!1,new C.dEz(o),n,A.by,n),new C.eV("M87 (6.5 billion)",!1,new C.dEA(o),n,A.by,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lW:D.Go
return C.nS(A.by,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",B.w(B.a([t,new C.h8(u,"LIKE",n),new C.h8(B.a([new C.eV("Glowing ring",s,new C.dEB(o),n,A.by,n),new C.eV("Bent light",r,new C.dEC(o),n,A.by,n),new C.eV("Music",q,new C.dED(o),p,A.by,n),new C.iS(A.nj,"Clear",new C.dEv(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.Q,0,A.p))},
aey(d,e){var w=null
return B.E(B.w(B.a([B.d(d,w,w,w,w,w,w,D.f57,w,w,w),A.bz,B.d(e,w,2,w,w,w,w,K.zM,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
C.b9p.prototype={
a6(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.W()
w=B.N()
w.r=D.bhg.gp(0)
b2.b1(new B.a9(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new B.x(w,v)
t=this.b
s=t.gb7v()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
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
b0.z=P.Rl
b2.af(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=B.aq(A.vf,A.fz,d)
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
b1.sar(new B.c_(A.A,0.5,A.x,null,0,B.a([A.w,A.w.j(0)],x.O),D.cPs,null).aA(0,B.bV(u,b0)))
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
o.z=G.p8
f=o.K()
p.drawCircle(t,r,6,f)
f.delete()}},
av(d){return!0}}
C.aev.prototype={}
C.V3.prototype={
U(){var w=x.r,v=x.g
return new C.biS(new B.cv(null,x.z),new C.P4(A.cS),B.a([],w),A.J,A.J,B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.a([],v),A.J,A.J,$,A.bB,0,B.a([],x.X),null,null)}}
C.biS.prototype={
a_(){this.a1()
this.a_2()
this.oZ()},
a_2(){var w,v,u,t,s,r,q,p,o=this,n=new B.f5()
n.dU(5)
w=B.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.an(),1.6)
w.push(new C.aev(t,n.an()*3.141592653589793*2,(n.an()-0.5)*0.5*t,25+n.an()*20))}else{t=Math.pow(n.an(),0.8)
s=n.az(o.f)
r=n.an()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.ht()?0:3.141592653589793
q=r+(n.an()-0.5)*0.25}r=n.an()
p=t<0.25?35+n.an()*15:205+n.an()*50
w.push(new C.aev(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cvp(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.e8C
k.cx=D.e8F
w=new B.f5()
w.dU(9)
v=k.cy
A.d.a8(v)
u=B.a([],x.r)
for(t=0;t<900;++t)u.push(new C.aev(Math.pow(w.an(),0.8)*0.7,w.an()*3.141592653589793*2,0,320+w.an()*30))
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
for(s=k.ay,r=x.S,s=B.dc(s,0,B.dG(900,"count",r),B.T(s).c),o=s.$ti,s=new B.bR(s,s.gM(0),o.k("bR<ak.E>")),o=o.k("ak.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new B.x(l*n,Math.sin(m)*n))}k.db=v
v=B.a([],u)
for(u=k.ay,u=B.dc(u,0,B.dG(900,"count",r),B.T(u).c),r=u.$ti,u=new B.bR(u,u.gM(0),r.k("bR<ak.E>")),r=r.k("ak.E");u.C();){s=u.d
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
r=t.eQ(0,s).aJ(0,0.9/(s*s))
w=p.fy.ad(0,r.aJ(0,u))
p.fy=w
v=p.cx.aF(0,r.aJ(0,u))
p.cx=v
w=p.fx.ad(0,w.aJ(0,u))
p.fx=w
v=p.CW.ad(0,v.aJ(0,u))
p.CW=v
q=new C.dV_(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=B.a([B.aI(r,r,r,r,D.qb,r,r,r,new C.dUQ(s,d),r,r,r,r,"Share",r)],q),o=B.b4(r,r,r,new C.beD(s,r),A.az),n=A.w.j(0.5),m=B.n(14),l=B.I(A.bE,A.q,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=B.a([o,B.ao(8,B.p(r,B.d(w,r,r,r,r,r,r,Ac.a7T,r,r,r),A.f,r,r,new B.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bT,r,r,r),r,r,10,10,r,r)],q)
l=B.a([],q)
for(v=0;v<3;++v){u=D.d5O[v]
o=s.Q===u.a&&!s.ch
l.push(new C.eV(u.b,o,new C.dUR(s,u),r,A.h4,r))}l.push(new C.eV("Collide",s.ch,new C.dUS(s),A.yh,A.c5,r))
o=B.a([new C.h8(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=C.l0(A.h4,""+n,"Arms",6,2,new C.dUT(s),n)
l=s.r
A.d.v(o,B.a([n,C.l0(A.h4,A.k.ab(l,1),"Winding",6,0.8,new C.dUU(s),l)],q))}n=s.as
o.push(C.l0(A.h4,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new C.dUV(s),n))
n=s.ax
o.push(C.l0(A.h4,A.k.ab(n,1)+"x","Speed",4,0,new C.dUW(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lW:D.Go
o.push(new C.h8(B.a([new C.eV("Dark matter",n,new C.dUX(s),r,A.by,r),new C.eV("You are here",l,new C.dUY(s),r,A.aS,r),new C.eV("Music",w,new C.dUZ(s),t,A.h4,r)],q),r,r))
return C.nS(A.h4,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new B.eH(new B.an(A.V,r,A.b0,A.r,m,r),s.d),"GALAXY",B.w(o,A.m,r,A.e,A.Q,0,A.p))}}
C.beD.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.W()
w=B.N()
w.r=D.bjl.gp(0)
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
t.sar(new B.c_(A.A,0.5,A.x,a0,0,B.a([A.aE.j(0.32),A.aE.j(0.12),A.K],x.O),D.cd_,a0).aA(0,B.bV(o,a2)))
a3.af(o,a2,t)}m=new C.dau(a1.as)
a2=n*0.3
t=B.N()
t.sar(new B.c_(A.A,0.5,A.x,a0,0,B.a([A.fT.j(0.85),A.aF.j(0.3),A.K],x.O),a0,a0).aA(0,B.bV(o,a2)))
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
r=A.k.E(q,360)
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
a2.r=A.aS.gp(0)
a3.af(g,9,a2)
f=B.h2(a0,a0,a0,a0,D.f2a,A.a4,A.cb,a0,A.dR,A.c7)
f.eO()
f.a6(a3,g.ad(0,new B.x(-f.b.c/2,12)))}}else{e=n*0.8
l=B.N()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.L)(a2),++k){d=a2[k]
l.r=D.bkB.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.K()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.L)(a2),++k){d=a2[k]
l.r=D.bfo.j(0.6).gp(0)
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
C.VG.prototype={
U(){return new C.bjG(new B.cv(null,x.z),new C.P4(A.cS),$,A.bB,0,B.a([],x.X),null,null)}}
C.bjG.prototype={
a_(){this.a1()
this.oZ()},
pW(d){var w,v,u,t=this
t.e.fo(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.E(t.r+d*0.04*v,1)
else{w=A.k.E(t.w+d*0.05*v,1)
t.w=w
u=A.k.bm(w*4)
if(u!==A.k.bm(t.as))C.pU("bell",60+u*4,500,0.35)
t.as=u}},
gcr4(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gchq(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=B.a([B.aI(q,q,q,q,D.qb,q,q,q,new C.eol(r,d),q,q,q,q,"Share",q)],p),n=B.E(new B.eH(B.b4(q,q,q,new C.bpT(r,q),A.fE),r.d),1)
if(r.f==="seasons")w=r.gcr4()
else{w=r.gchq()
v=A.k.am(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=B.w(B.a([n,B.p(q,B.d(w,q,q,q,q,q,q,A5.TO,A.L,q,q),A.f,q,q,q,q,q,q,q,I.ai1,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A0.yr:A.j2
t=r.Q
s=t?A.lW:D.Go
s=B.a([new C.h8(B.a([new C.eV("Seasons",n==="seasons",new C.eom(r),A.C3,A.bu,q),new C.eV("Moon phases",n==="moon",new C.eon(r),A.vK,A.bu,q),new C.eV(u,!1,new C.eoo(r),v,A.bu,q),new C.eV("Music",t,new C.eop(r),s,A.bu,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=C.l0(A.bu,D.d57[A.o.E(A.k.bm(n*12),12)],"Month",1,0,new C.eoq(r),n)
v=r.z
A.d.v(s,B.a([n,C.l0(A.bu,A.k.ab(v,1)+"\xb0","Tilt",90,0,new C.eor(r),v)],p))}else{p=r.w
s.push(C.l0(A.bu,""+(A.k.bm(p*29.5)+1),"Day of month",1,0,new C.eos(r),p))}p=r.y
s.push(C.l0(A.bu,A.k.ab(p,1)+"x","Speed",4,0.2,new C.eot(r),p))
return C.nS(A.bu,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",B.w(s,A.m,q,A.e,A.Q,0,A.p))}}
C.bpT.prototype={
a6(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.W(),b8=B.N()
b8.r=D.AG.gp(0)
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
t.sar(D.eim.aA(0,B.bV(p,34)))
b9.af(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new B.x(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aF(0,l).eQ(0,p.aF(0,l).gcG())
J.bx(b8.save())
b8.translate(l.a,l.b)
s=B.N()
s.r=D.bhc.gp(0)
b9.af(A.J,k,s)
J.bx(b8.save())
b7=new B.aO(b7.r,A.ao,b4,b4,B.a([],x.v))
b7.F(new B.jO(B.bV(A.J,k)))
b9.pD(0,b7)
b7=i.aJ(0,k).aJ(0,0.35)
s=k*1.1
b6=B.N()
b6.sar(D.eiv.aA(0,B.bV(A.J,s)))
b9.af(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new B.x(s,b6)
b7=new B.x(-s,-b6).aJ(0,k).aJ(0,1.7)
b5=h.aJ(0,k).aJ(0,1.7)
t=B.N()
t.c=2
t.r=A.cs.gp(0)
b9.bL(b7,b5,t)
t=h.aJ(0,k).aJ(0,1.7)
b5=B.N()
b5.r=A.cs.gp(0)
b9.af(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=B.h2(b4,b4,b4,b4,B.d0(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aRj,b5),A.a4,A.cb,b4,A.dR,A.c7)
f.eO()
f.a6(b9,l.ad(0,new B.x(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=B.N()
r.b=A.af
r.c=1
r.r=A.b2.gp(0)
b9.af(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a0.r=A.aS.j(0.6).gp(0)
a0.c=2
q=a0.K()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=B.N()
r.sar(new B.c_(new B.dd(-0.5,0),1.1,A.x,b4,0,B.a([D.bcM,D.afY],x.O),D.cXf,b4).aA(0,B.bV(p,k)))
b9.af(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new B.x(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=B.N()
r.r=D.b9Z.gp(0)
b9.af(a1,a2,r)
J.bx(b8.save())
b7=b7.r
r=x.v
d=new B.aO(b7,A.ao,b4,b4,B.a([],r))
d.F(new B.jO(B.bV(a1,a2)))
b9.pD(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=B.N()
a3.r=A.bO.gp(0)
b9.b1(new B.a9(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aF(0,p).eQ(0,a1.aF(0,p).gcG())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.asY[a5]
a7=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a7.r=A.aP.j(0.45).gp(0)
a7.z=A.lx
q=a7.K()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new B.x(u,t)
a9=Math.min(b5,b6)*0.1
b6=B.N()
b6.r=D.b9U.gp(0)
b9.af(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bx(b8.save())
b6=new B.aO(b7,A.ao,b4,b4,B.a([],r))
b6.F(new B.jO(B.bV(a8,a9)))
b9.pD(0,b6)
s=s.w
b1=new B.aO(b7,A.ao,b4,b4,B.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.F(new B.b5(u,b5))
b6=b2>0
b1.aCm(new B.x(u,t+a9),b6,new B.aR(a9,a9))
if(b0<0.5)b6=b2<0
b1.aCm(new B.x(u,b5),b6,new B.aR(a9*Math.abs(1-2*b0),a9))
b6=B.N()
b6.r=A.bO.gp(0)
b9.aS(b1,b6)
b8.restore()
b8=B.N()
b8.b=A.af
b8.c=1
b8.r=A.b2.gp(0)
b9.af(a8,a9,b8)
b3=B.h2(b4,b4,b4,b4,D.f2b,A.a4,A.cb,b4,A.dR,A.c7)
b3.eO()
b3.a6(b9,a8.ad(0,new B.x(-b3.b.c/2,a9+6)))}},
av(d){return!0}}
C.aKF.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bw8.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.buu()}}
C.aL1.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bwe.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.buS()}}
C.aLy.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bwn.prototype={
q(){var w,v,u
for(w=this.iH$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a7(0)
w=this.iG$
w===$&&B.c()
w.q()
this.bvp()}}
var z=a.updateTypes(["R(tx)","~()","R(a49)","aA<~>()","R(Cn)","H(tx,H)","R(Cj)","R(ab9)","R(Z0)","K(K,tx)","R(v5)","R(a2O)","R(nm)","Uc()","a81()","Ug()","VE()","VT()","VF()","W3()","Uh()","aeA(Y,H)","ads(Y,H)","R(mz)","UT()","~(AA)","R(aeq)","R(a0e)","R(Cx)","R(abD)","R(adw)","R(abn)","H(H,qM)","H(H,Cn)","W5()","~(qM,ai<m>,H)","qM?(Cn)","R(qM)","t(m,a01)","R(PR)","R(aa2)","H(Cj,Cj)","~(a5<@,@>)","~(x3,m,x,v,K)","~(m,tx)","K(Pz)","Vi(Y)","Nh(Y)","UC(Y,bq<K>,bq<K>)","W9()","V_()","Ud()","US()","Vz()","VJ()","W2()","Vy()","~(m)","cp(aaQ)","R(aaP)","V5()","VS()","V6()","Ub()","V3()","VK()","VG()","m(eb)","R(Pz)","m(qM)"])
C.fuM.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+23}
C.fkq.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+67}
C.frx.prototype={
$1(d){var w
if(!this.a.LF(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fry.prototype={
$1(d){return d.x},
$S:z+0}
C.fuJ.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fuK.prototype={
$1(d){var w
if(!this.a.LF(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fuL.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+9}
C.e7g.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.e7h.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.z(this.b,this.c))},
$S:0}
C.e7i.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd0(v).Q
v.toString
w.ma(v,A.dX,A.ij)}},
$S:9}
C.e7t.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.e7u.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.e7p.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.e7n.prototype={
$2(d,e){var w=this.a
w.r.push(B.cM(B.dD(0,0,0,d,0,0),new C.e7o(w,this.b,e)))},
$S:1856}
C.e7o.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.e7q.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gW5().ajC(0,u[1],u[2],u[3])
u[4].bQ(0,new C.e7l(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dX(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.e7m(w.a,v,w.f,w.r))},
$S:0}
C.e7l.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:181}
C.e7m.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bm(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.e7r.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gW5().akk(t,u[1],s,u[3])
E.dX(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.e7k(w.a,v,w.e,w.f))},
$S:0}
C.e7k.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bm(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.e7s.prototype={
$0(){E.dX(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.e7j(w,this.b))},
$S:0}
C.e7j.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.e7x.prototype={
$0(){var w=this.a
return w.m(new C.e7w(w))},
$S:0}
C.e7w.prototype={
$0(){return this.a.at=!0},
$S:0}
C.e7y.prototype={
$0(){var w=this.a
return w.m(new C.e7v(w))},
$S:0}
C.e7v.prototype={
$0(){return this.a.at=!1},
$S:0}
C.e7z.prototype={
$0(){var w=this.a
w.f.saU(0,this.b)
w.Nv()},
$S:0}
C.e7A.prototype={
$0(){return this.a.Y5(this.b)},
$S:0}
C.e7B.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Nv():w.aVm()},
$S:2}
C.e7C.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Nv():w.aVm()},
$S:0}
C.elw.prototype={
$2(d,e){return d+e},
$S:1857}
C.elQ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.elP(w,d))},
$S:734}
C.elP.prototype={
$0(){var w=B.aJ(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.elR.prototype={
$0(){},
$S:0}
C.elS.prototype={
$0(){},
$S:0}
C.ely.prototype={
$0(){return this.a.m(new C.elx(this.b,this.c))},
$S:0}
C.elx.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eln.prototype={
$1(d){return this.a.cx===d},
$S:34}
C.elo.prototype={
$1(d){return this.a.cx=d},
$S:28}
C.elp.prototype={
$1(d){return this.a.cy===d},
$S:34}
C.elq.prototype={
$1(d){return this.a.cy=d},
$S:28}
C.elr.prototype={
$1(d){return this.a.db===d},
$S:34}
C.els.prototype={
$1(d){return this.a.db=d},
$S:28}
C.elt.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:34}
C.elu.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.L(0,d)},
$S:28}
C.elv.prototype={
$0(){var w=this.a
return w.m(w.gaw5())},
$S:0}
C.ell.prototype={
$1(d){return this.a.$1(!0)},
$S:78}
C.elm.prototype={
$1(d){return this.a.$1(!1)},
$S:134}
C.elk.prototype={
$1(d){return this.a.$1(!1)},
$S:193}
C.elJ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.as(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bgi(o,p),n)
w=this.b
v=C.byH("WORLD",w.a,w.c)
u=C.byH("GRAVITY",B.u(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.cs:A.bk
t=C.byH("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.Cp[o.db].d?A.cs:A.c
q=x.p
s=B.a([v,u,t,C.byH("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(C.byH("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.B(s,A.m,p,A.is,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bDj(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rl[w].a+".":"You landed on every world!"
v=B.a([new C.iS(A.o2,"Again",new C.elE(o),A.c,p),new C.iS(A.oS,"Rebuild",new C.elF(o),A.aS,p)],q)
if(o.d+1<7)v.push(new C.iS(A.lo,"Next world",new C.elG(o),A.bk,p))
n.push(C.hhZ("Perfect landing!",w,A.bk,v))}if(o.as==="crashed")n.push(C.hhZ("Crash!",o.at,A.cs,B.a([new C.iS(A.o2,"Try again",new C.elH(o),A.bk,p),new C.iS(A.oS,"Rebuild",new C.elI(o),A.aS,p)],q)))
return new B.an(A.V,p,A.b0,A.r,n,p)},
$S:68}
C.elE.prototype={
$0(){var w=this.a
return w.m(w.gaw5())},
$S:0}
C.elF.prototype={
$0(){var w=this.a
return w.m(new C.elB(w))},
$S:0}
C.elB.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.elG.prototype={
$0(){var w=this.a
return w.m(new C.elA(w))},
$S:0}
C.elA.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.elH.prototype={
$0(){var w=this.a
return w.m(w.gaw5())},
$S:0}
C.elI.prototype={
$0(){var w=this.a
return w.m(new C.elz(w))},
$S:0}
C.elz.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.elK.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.elD(v,w))},
$S:0}
C.elD.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.elL.prototype={
$1(d){return this.a.y=d},
$S:8}
C.elM.prototype={
$1(d){return this.a.Q=d},
$S:8}
C.elN.prototype={
$1(d){return this.a.z=d},
$S:8}
C.elO.prototype={
$0(){var w=this.a
return w.m(new C.elC(w))},
$S:0}
C.elC.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dF5.prototype={
$0(){var w=0,v=B.j(x.P),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=$.hdi
if(q==null)q=$.hdi=C.cFz()
w=3
return B.b(B.iN(B.a([q,$.qV().bfD("assets/data/three.min.js")],x.aJ),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kG(0,B.cO(J.q(s,1)))
q.m(new C.dF4(q,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:50}
C.dF4.prototype={
$0(){return this.a.d=x.U.a(J.q(this.b,0))},
$S:0}
C.dEI.prototype={
$0(){return this.a.bUN(B.aU(J.q(this.b,"group")))},
$S:0}
C.dEJ.prototype={
$1(d){return A.a.aX(A.o.fV(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:310}
C.dF6.prototype={
$0(){return C.a80("kick",0.25)},
$S:0}
C.dEK.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dEL.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.dEM.prototype={
$0(){return C.a80("kick",0.5)},
$S:0}
C.dEN.prototype={
$0(){return E.dX(1300+this.a.R8.az(900),"",40,0,0.2,"square")},
$S:0}
C.dEP.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.ch
if(w===2)w=1
else w=w===1?0:2
u.ch=w}else{w=this.a
v=w.ay
if(v.t(0,u))v.W(0,u)
else{v.L(0,u)
if(w.ch===2)w.ch=1}if(v.a===0&&w.ch===0)w.ch=2
u=w}if(u.cx!=null&&!A.d.b4(u.d.e,new C.dEO(u)))u.cx=null
u.go=0},
$S:0}
C.dEO.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.axO(d)},
$S:z+11}
C.dEF.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
C.dEG.prototype={
$0(){var w=this.a
return w.m(w.gc4d())},
$S:0}
C.dEH.prototype={
$0(){return this.a.ahe(null)},
$S:0}
C.dEW.prototype={
$0(){var w=this.a.as
return w==null?null:w.f0(0,B.F(["t","shot"],x.N,x.A))},
$S:0}
C.dEX.prototype={
$0(){return this.a.czE(this.b.a)},
$S:0}
C.dEY.prototype={
$0(){return this.a.ahe(this.b)},
$S:0}
C.dEZ.prototype={
$1(d){var w=this.a
return w.m(new C.dEV(w,d))},
$S:6}
C.dEV.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.dF_.prototype={
$0(){var w=this.a
return w.m(new C.dEU(w,this.b))},
$S:0}
C.dEU.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.dF0.prototype={
$0(){var w=this.a
return w.m(new C.dET(w))},
$S:0}
C.dET.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.dF1.prototype={
$0(){var w=this.a
return w.m(new C.dES(w))},
$S:0}
C.dES.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f0(0,B.F(["t","reset"],x.N,x.A))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Kr},
$S:0}
C.dF2.prototype={
$0(){var w=this.a
return w.m(new C.dER(w))},
$S:0}
C.dER.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aY0()
else w.p2=null},
$S:0}
C.dF3.prototype={
$0(){var w=this.a
return w.m(new C.dEQ(w))},
$S:0}
C.dEQ.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
C.c0M.prototype={
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
$S:289}
C.c0N.prototype={
$1(d){var w=new B.rP([],[]).pF(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:601}
C.fef.prototype={
$1(d){var w=J.a3(d)
return w.h(d,0)&&w.h(d,1)},
$S:216}
C.feg.prototype={
$1(d){var w=J.a3(d)
return w.h(d,0)||w.h(d,1)},
$S:216}
C.feh.prototype={
$1(d){var w=J.a3(d)
return w.h(d,0)!==w.h(d,1)},
$S:216}
C.feo.prototype={
$1(d){return!J.q(d,0)},
$S:216}
C.fep.prototype={
$1(d){var w=J.a3(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:216}
C.feq.prototype={
$1(d){var w=J.a3(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:216}
C.dH3.prototype={
$1(d){return this.a.asN(0)},
$S:9}
C.dGI.prototype={
$0(){var w=this.b
return this.a.cx=new B.M(w,B.hZm(),B.T(w).k("M<1,H>")).fM(0)},
$S:0}
C.dGL.prototype={
$1(d){return""+d},
$S:81}
C.dH4.prototype={
$1(d){return d.b==="buzzer"},
$S:z+6}
C.dGG.prototype={
$1(d){return this.a.asN(this.b)},
$S:9}
C.dGH.prototype={
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
w.push(new C.nm(v.a,a1,0))
w.push(new C.nm(u.a,a1,1))
w.push(new C.nm(a1,s.a,0))
break
case 1:v=a1.mx(0,d,a1.m1(0.12,0.25))
u=a1.mx(0,d,a1.m1(0.12,0.65))
r=a1.mx(0,"xor",a1.m1(0.46,0.25))
q=a1.mx(0,"and",a1.m1(0.46,0.65))
p=a1.awy(0,a0,a1.m1(0.82,0.25),0)
o=a1.awy(0,a0,a1.m1(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nm(a1,n,0))
m=u.a
w.push(new C.nm(m,n,1))
l=q.a
w.push(new C.nm(a1,l,0))
w.push(new C.nm(m,l,1))
w.push(new C.nm(n,p.a,0))
w.push(new C.nm(l,o.a,0))
break
case 2:k=a1.mx(0,"clock",a1.m1(0.15,0.4))
j=a1.mx(0,"not",a1.m1(0.45,0.65))
s=a1.mx(0,a0,a1.m1(0.82,0.3))
i=a1.mx(0,"buzzer",a1.m1(0.82,0.65))
a1=k.a
w.push(new C.nm(a1,s.a,0))
n=j.a
w.push(new C.nm(a1,n,0))
w.push(new C.nm(n,i.a,0))
break
default:h=a1.mx(0,d,a1.m1(0.12,0.25))
g=a1.mx(0,d,a1.m1(0.12,0.7))
f=a1.mx(0,"nor",a1.m1(0.5,0.25))
e=a1.mx(0,"nor",a1.m1(0.5,0.7))
s=a1.mx(0,a0,a1.m1(0.86,0.25))
a1=f.a
w.push(new C.nm(g.a,a1,0))
n=e.a
w.push(new C.nm(n,a1,1))
w.push(new C.nm(h.a,n,0))
w.push(new C.nm(a1,n,1))
w.push(new C.nm(a1,s.a,0))}},
$S:0}
C.dGM.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.awz(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.Cj(p,"switch",new B.x(0.14*q.a,r*q.b),0))}o.mx(0,w.e,o.m1(0.86,0.5))},
$S:0}
C.dGB.prototype={
$1(d){return d.b==="switch"},
$S:z+6}
C.dGC.prototype={
$2(d,e){return A.k.aM(d.c.b,e.c.b)},
$S:z+41}
C.dGD.prototype={
$1(d){return d.b===this.a.e},
$S:z+6}
C.dGE.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dGF.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.acD(this.c)
if(v.ax)C.IO("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)E.dX(140,"",250,0,0.3,"square")}},
$S:0}
C.dGN.prototype={
$0(){},
$S:0}
C.dGO.prototype={
$0(){return A.d.cF(this.a.e,this.b)},
$S:0}
C.dGP.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dGK.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bs(w.e,new C.dGJ(v))
w.cy=null},
$S:0}
C.dGJ.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
C.dGA.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mx(0,this.b,new B.x(w.x.a*(0.3+v.an()*0.4),w.x.b*(0.2+v.an()*0.6))).a},
$S:0}
C.dGY.prototype={
$0(){var w=this.a
return w.m(new C.dGX(w))},
$S:0}
C.dGX.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dGZ.prototype={
$2(d,e){var w=null,v=this.a,u=new B.as(e.b,e.d)
v.x=u
return B.aB(A.ci,B.jw(B.b4(w,w,w,new C.bas(v,w),u),A.r,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dGS(v),w,w,w,new C.dGT(v),new C.dGU(v),new C.dGV(v),w,w,w,w,w,w,w,w,w,w,new C.dGW(v),w,w,w,!1,A.a7)},
$S:37}
C.dGW.prototype={
$1(d){return this.a.c5Y(d.b)},
$S:67}
C.dGU.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ceb(u)
if(t!=null){v.as=t
v.at=u
return}w=v.axk(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aF(0,u)}},
$S:49}
C.dGV.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.x(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:21}
C.dGT.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bYm(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bs(v,new C.dGQ(w))
u=t.as
u.toString
v.push(new C.nm(u,w.a,w.b))
B.kn()}}t.z=t.as=null},
$S:41}
C.dGQ.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
C.dGS.prototype={
$1(d){return this.a.avn(d.b)},
$S:342}
C.dH_.prototype={
$0(){return this.a.bz9(this.b.a)},
$S:0}
C.dH0.prototype={
$0(){return this.a.asN(this.b.a)},
$S:0}
C.dH1.prototype={
$0(){var w=this.a
return w.m(new C.dGR(w))},
$S:0}
C.dGR.prototype={
$0(){var w=this.a
w.awz(0)
w.ay=null},
$S:0}
C.dH2.prototype={
$0(){return this.a.cvm(this.b)},
$S:0}
C.cMk.prototype={
$0(){var w=this,v=null,u=B.h2(v,v,v,v,B.d0(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.cb,v,A.dR,A.c7)
u.eO()
return u},
$S:334}
C.dMU.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dMT.prototype={
$0(){return this.a.d=null},
$S:0}
C.dMW.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c_9()},
$S:120}
C.dMV.prototype={
$0(){return B.a4(this.a,!1).la()},
$S:0}
C.feG.prototype={
$0(){return D.e1Q},
$S:z+34}
C.feH.prototype={
$0(){return D.dB5},
$S:z+24}
C.feI.prototype={
$0(){return D.dy0},
$S:z+13}
C.feJ.prototype={
$0(){return D.e1f},
$S:z+14}
C.feK.prototype={
$0(){return D.dAe},
$S:z+15}
C.feL.prototype={
$0(){return D.dK6},
$S:z+16}
C.feM.prototype={
$0(){return D.e0Y},
$S:z+17}
C.feN.prototype={
$0(){return D.e__},
$S:z+18}
C.feO.prototype={
$0(){return D.e1e},
$S:z+19}
C.feP.prototype={
$0(){return D.dAf},
$S:z+20}
C.eVO.prototype={
$2(d,e){return new C.aeA($.bD7()[e],new C.eVN(e,this.a),null)},
$S:z+21}
C.eVN.prototype={
$0(){var w=this.a,v=F.aEp.h(0,$.bD7()[w].a)
$.arw=v==null?"music":v
B.a4(this.b,!1).cm(B.e9(new C.eVL(w),!1,null,x.H))},
$S:0}
C.eVL.prototype={
$1(d){return $.bD7()[this.a].e.$0()},
$S:43}
C.eVP.prototype={
$2(d,e){return new C.ads(D.awP[e],new C.eVM(this.a,e),null)},
$S:z+22}
C.eVM.prototype={
$0(){return this.a.d.$1(D.awP[this.b])},
$S:0}
C.eVu.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eVt.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eVs.prototype={
$1(d){var w=this
return new B.dY(new C.eVr(w.a,w.b,w.c,w.d),null)},
$S:19}
C.eVr.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.l,a1=B.aH(a2,d,a0).w
a0=B.aH(a2,d,a0).w
w=x.p
v=B.a([D.fnn,A.au,D.ftV,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new B.aR(12,12)
m=new B.aR(12,12)
m=B.a([new B.bB(1,A.bf,B.aM(d,A.U,!1,d,!0,A.r,d,B.aN(),r[p],d,d,d,d,d,2,new B.e3(d,d,d,d,d,d,d,d,d,d,"Title",d,G.DB,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b3(4,new B.bo(n,n,n,n),A.W),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iS,!0,A.a4,d,A.am,d,d,d,d),d),A.ab,new B.bB(2,A.bf,B.aM(d,A.U,!1,d,!0,A.r,d,B.aN(),q[p],d,d,d,d,d,2,new B.e3(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.DB,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b3(4,new B.bo(m,m,m,m),A.W),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iS,!0,A.a4,d,A.am,d,d,d,d),d)],w)
n=B.a([],w)
for(l=0;l<30;++l){k=D.dlf[l]
j=new B.aR(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}h=A.d.gH(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}g=A.d.gH(i)}else g=A.bE
f=new B.az(g,u[p].A(0,k)?1.8:1,A.q,-1)
n.push(B.aB(d,B.p(d,B.X(k,u[p].A(0,k)?A.c:A.aR,d,d,d,22),A.f,d,d,new B.o(h,d,new B.bO(f,f,f,f),new B.bo(j,j,j,j),d,d,A.n),d,d,d,A.fB,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eVp(a3,p,u,k),d,d,d,d,d,d,!1,A.a7))}A.d.v(v,B.a([new B.y("SLAB "+o,d,D.fdd,d,d,d,d,d,d,d,d,d),A.an,new B.ck(A.aN,A.e,A.j,A.m,d,A.p,d,0,m,d),A.N,new B.a7(d,44,B.ct(n,d,d,d,d,A.aN,!1),d),A.aB],w))}v.push(B.bG(A.wC,new C.eVq(t,r,q,u,a2),d))
return new B.D(new B.Q(0,0,0,a1.f.d),B.bl(!0,new B.cT(new B.aX(0,1/0,0,a0.a.b*0.86),B.ct(v,d,A3.xU,d,d,A.ah,!0),d),!0,!1,A.ae,!0,!0),d)},
$S:104}
C.eVp.prototype={
$0(){var w=this
return w.a.$1(new C.eVo(w.b,w.c,w.d))},
$S:0}
C.eVo.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.eVq.prototype={
$0(){var w=this,v=w.a
v.m(new C.eVn(v,w.b,w.c,w.d))
B.a4(w.e,!1).O(null)},
$S:0}
C.eVn.prototype={
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
C.eVC.prototype={
$0(){var w=this.a
return w.m(new C.eVB(w))},
$S:0}
C.eVB.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.eVD.prototype={
$0(){return C.wS(this.b,this.a.f,"scene")},
$S:0}
C.eVE.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.aq(A.d.gH(u),A.d.gak(u),0.4)
u.toString
w=this.a.gZq().x
w===$&&B.c()
return B.c0(v,new B.o(v,v,v,v,v,new B.c_(D.aXi,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.bY],x.O),v,v),A.n),A.be)},
$S:292}
C.eVF.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.au(B.eM(A.A,B.c7(new B.ha(B.a([u.gtZ(),u.gZq()],x.dS)),new C.eVA(u,this.b,v),w),A.f,A.dZ),w,w,w)},
$S:247}
C.eVA.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gtZ().x
r===$&&B.c()
w=r<0.9?1:1-C.bqc(r,0.9,0.98)
v=s.gZq().x
v===$&&B.c()
u=A.dz.au(0,v)
switch(s.gawA().a){case 0:s=s.byl(t.b,r,u,t.c)
break
case 1:s=s.bOW(t.b,r,u,t.c)
break
case 2:s=s.cAa(t.b,r,u,t.c)
break
case 3:s=s.bBg(t.b,r,u,t.c)
break
case 4:s=s.bEA(t.b,r,u,t.c)
break
case 5:s=s.bDK(t.b,r,u,t.c)
break
default:s=null}return B.db(s,w)},
$S:233}
C.eVG.prototype={
$2(d,e){var w=B.auX(this.b),v=this.c.d,u=B.aq(A.d.gH(v),A.d.gak(v),0.4)
u.toString
v=B.aq(A.d.gH(v),A.d.gak(v),0.4)
v.toString
v=w.cII(u,A.bE,v,3.5)
u=this.a
w=u.gtZ().x
w===$&&B.c()
return B.a9P(B.l_(null,null,null,1,0,new C.eVz(u),A.k.D(w,0,1)),v)},
$S:1861}
C.eVz.prototype={
$1(d){var w=this.a
w.gtZ().sp(0,d)
if(w.as)w.m(new C.eVv(w))},
$S:6}
C.eVv.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eVH.prototype={
$0(){var w=this.a
w.gtZ().sp(0,0)
w.afY()},
$S:0}
C.eVI.prototype={
$1(d){var w=this.a
w.m(new C.eVy(w,d))
if(w.as)w.afY()},
$S:6}
C.eVy.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eVJ.prototype={
$0(){var w=this.a
w.m(new C.eVx(w,this.b))
w.gtZ().sp(0,0)
if(w.as)w.afY()},
$S:0}
C.eVx.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.eVK.prototype={
$0(){var w=this.a
return w.m(new C.eVw(w,this.b))},
$S:0}
C.eVw.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.eVl.prototype={
$2(d,e){return A.k.aM(d.a,e.a)},
$S:1862}
C.eVm.prototype={
$1(d){return d.b},
$S:1863}
C.dhi.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dhj.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dhf.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dhg.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dhh.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dhk.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dhl.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dhm.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dhn.prototype={
$1(d){return d.d<this.a.ax},
$S:z+26}
C.dho.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+27}
C.dhp.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+28}
C.dhq.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+29}
C.dhr.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+30}
C.dhs.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+31}
C.ekR.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ekG.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.ekI.prototype={
$2(d,e){return d+e.d*7+A.o.E(A.a.gX(e.b),97)},
$S:z+32}
C.ekJ.prototype={
$2(d,e){return d+A.o.E(A.a.gX(e.a),31)+A.o.E(A.a.gX(e.b),17)},
$S:z+33}
C.ekM.prototype={
$1(d){var w=D.mC.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.E(d.d,u)]+")":t},
$S:z+69}
C.ekN.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.T(q),o=x.dg,n=B.C(new B.ea(new B.cP(new B.a_(q,new C.ekO(d),p.k("a_<1>")),new C.ekP(r),p.k("cP<1,qM?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aH(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.L)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+35}
C.ekO.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ekP.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+36}
C.ekK.prototype={
$1(d){return D.mC.h(0,d.b).c===D.wU},
$S:z+37}
C.ekL.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.elg.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.v5(0,u)
w.a69(A.o.am(v,1000))},
$S:9}
C.ekQ.prototype={
$0(){},
$S:0}
C.ekC.prototype={
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
C.ekT.prototype={
$1(d){var w=null,v=this.a.b
return B.bl(!0,B.w(B.a([A.N,B.dL(!1,w,w,w,!0,w,w,w,!0,w,B.X(D.mC.h(0,v).b,D.mC.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fF7,w,B.d(D.mC.h(0,v).a,w,w,w,w,w,w,A.hq,w,w,w),w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,R.anM,w,w,w,w,new C.ekS(d),!1,w,w,w,w,w,w,w,D.fwH,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ae,!0,!0)},
$S:25}
C.ekS.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.ekV.prototype={
$1(d){var w,v,u=null,t=B.aH(d,u,x.l).w,s=B.a([D.ebp],x.p)
for(w=0;w<6;++w){v=D.ax9[w]
s.push(B.dL(!1,u,u,u,!0,u,u,u,!0,u,D.bT5,u,u,u,u,new C.ekU(d,v),!1,u,u,u,u,u,new B.y(v.b,u,A.kI,u,u,u,u,u,u,u,u,u),u,new B.y(v.a,u,A.hq,u,u,u,u,u,u,u,u,u),u,u,u))}return B.bl(!0,new B.cT(new B.aX(0,1/0,0,t.a.b*0.7),B.ct(s,u,D.by3,u,u,A.ah,!0),u),!0,!1,A.ae,!0,!0)},
$S:25}
C.ekU.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.ekF.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.dh,w,w,!0,w,w,new C.ekD(d),w,w),B.bK(!1,A.DH,w,w,!0,w,w,new C.ekE(d),w,w)],x.p),w,w,F.n1,D.fu5,w,w,w,w,D.fwZ,w)},
$S:18}
C.ekD.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.ekE.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.ele.prototype={
$0(){var w=this.a
return w.m(new C.eld(w))},
$S:0}
C.eld.prototype={
$0(){return this.a.r=!1},
$S:0}
C.elf.prototype={
$2(d,e){var w,v,u,t=null,s=new B.as(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.mg(new C.el4(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b6r:t
v=B.a([B.b4(u,t,t,new C.bgg(w,v,new C.el5(r),new C.el6(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,B.e2(B.c7(w,new C.el7(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bGf())
return B.aB(A.ci,B.jw(new B.an(A.V,t,A.b0,A.r,v,t),A.r,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.el8(r),t,r.gcfu(),t,new C.el9(r),new C.ela(r),new C.elb(r),t,t,t,t,t,t,t,t,t,t,new C.elc(r),t,t,t,!1,A.a7)},
$S:37}
C.el4.prototype={
$0(){return this.a.abJ(this.b)},
$S:0}
C.elc.prototype={
$1(d){return this.a.cxV(d.b)},
$S:67}
C.ela.prototype={
$1(d){return this.a.cfv(d.b)},
$S:49}
C.elb.prototype={
$1(d){return this.a.cfw(d.b)},
$S:21}
C.el9.prototype={
$1(d){return this.a.b0f()},
$S:41}
C.el8.prototype={
$1(d){return this.a.acp(d.b)},
$S:342}
C.el5.prototype={
$0(){return this.a.z},
$S:690}
C.el6.prototype={
$0(){return this.a.Q},
$S:736}
C.el7.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bKu()
if(p.length===0)return A.bI
w=A.w.j(0.55)
v=B.n(14)
u=B.I(A.bE,A.q,1)
t=B.a([D.frz,A.cR],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.L)(p),++r)t.push(new B.y(p[r],q,D.fbX,q,q,q,q,A.a2,q,2,q,q))
return B.p(q,B.w(t,A.F,q,A.e,A.Q,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h8,q,q,q)},
$S:59}
C.ekH.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.n(12),t=B.I(e.j(0.6),A.q,1),s=x.p
return new B.D(A.e8,B.B(B.a([B.p(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bc,B.E(B.w(B.a([B.d(f,w,w,w,w,w,w,A5.TO,w,w,w),A.bz,B.d(g,w,w,w,w,w,w,F.TU,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1865}
C.el0.prototype={
$0(){var w=this.a.c
w.toString
return B.a4(w,!1).la()},
$S:0}
C.el1.prototype={
$0(){var w=this.a
return w.m(new C.el_(w))},
$S:0}
C.el_.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.el2.prototype={
$0(){var w=this.a
return w.m(new C.ekZ(w))},
$S:0}
C.ekZ.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.el3.prototype={
$0(){var w=this.a
return w.m(new C.ekY(w))},
$S:0}
C.ekY.prototype={
$0(){return this.a.r=!0},
$S:0}
C.ekX.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.mC.gdQ(D.mC),w=w.gae(w);w.C();){v=w.gT(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.L)(p),++r)u.push(s.csJ(p[r]))
return new B.D(H.ahi,B.w(B.a([new B.D(Ai.aiX,w,q),B.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+38}
C.ekW.prototype={
$0(){return this.a.c62(this.b)},
$S:0}
C.dhe.prototype={
$0(){var w=this,v=null,u=B.h2(v,v,v,v,B.d0(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.cb,v,A.dR,A.c7)
u.eO()
return u},
$S:334}
C.ewX.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.am(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new B.x(s.a+q*n,s.b+r*n)
t.b=new B.x(q*v,r*v)}A.d.bs(o,new C.ewV(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new C.ewW())},
$S:9}
C.ewV.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+39}
C.ewW.prototype={
$0(){},
$S:0}
C.ewy.prototype={
$0(){},
$S:0}
C.ewx.prototype={
$0(){},
$S:0}
C.ewH.prototype={
$0(){return C.wS(this.b,this.a.d,"spark-painter")},
$S:0}
C.ewJ.prototype={
$1(d){return this.a.aYG(0,d.b)},
$S:49}
C.ewN.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gak(w).aF(0,u).gcG()>2.5}else w=!1
if(w)t.a.push(u)
v.aRA(u)
v.c8P(u)
return null},
$S:21}
C.ewI.prototype={
$1(d){return this.a.aYF()},
$S:41}
C.ewO.prototype={
$1(d){return this.a.aYG(0,d.b)},
$S:23}
C.ewP.prototype={
$1(d){return this.a.aYF()},
$S:67}
C.ewQ.prototype={
$0(){var w=this.a
return w.m(new C.ewG(w,this.b))},
$S:0}
C.ewG.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
C.ewR.prototype={
$0(){var w=this.a
return w.m(new C.ewF(w))},
$S:0}
C.ewF.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.ewS.prototype={
$0(){var w=this.a
return w.m(new C.ewE(w,this.b))},
$S:0}
C.ewE.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.ewT.prototype={
$1(d){var w=this.a
return w.m(new C.ewD(w,d))},
$S:6}
C.ewD.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.ewU.prototype={
$0(){var w=this.a
return w.m(new C.ewC(w))},
$S:0}
C.ewC.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.ewK.prototype={
$0(){var w=this.a
return w.m(new C.ewB(w))},
$S:0}
C.ewB.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.ewL.prototype={
$0(){var w=this.a
return w.m(new C.ewA(w))},
$S:0}
C.ewA.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
C.ewM.prototype={
$0(){var w=this.a
return w.m(new C.ewz(w,this.b))},
$S:0}
C.ewz.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eD5.prototype={
$0(){return C.wS(this.b,this.a.d,"title")},
$S:0}
C.eD6.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIQ().x
q===$&&B.c()
w=B.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.c_j(v[t],t,s,q,u))
return new B.D(A.fC,B.bZ(A.fQ,w,A.rY,0,0),null)},
$S:712}
C.eD7.prototype={
$1(d){return this.a.m(new C.eD4())},
$S:2}
C.eD4.prototype={
$0(){},
$S:0}
C.eD8.prototype={
$0(){var w=this.a
w.m(new C.eD3(w,this.b))
w=w.gIQ()
w.iJ(0,0)
w.cL(0)},
$S:0}
C.eD3.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.eD9.prototype={
$0(){var w=this.a
return w.m(new C.eD2(w,this.b))},
$S:0}
C.eD2.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eDa.prototype={
$0(){var w=this.a
return w.m(new C.eD1(w))},
$S:0}
C.eD1.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
C.eDb.prototype={
$0(){var w=this.a
return w.m(new C.eD0(w,this.b))},
$S:0}
C.eD0.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eDc.prototype={
$0(){var w=this.a.gIQ()
w.iJ(0,0)
w.cL(0)},
$S:0}
C.eDd.prototype={
$1(d){var w=this.a
return w.m(new C.eD_(w,d))},
$S:6}
C.eD_.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.dGz.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dGy(w,d))},
$S:734}
C.dGy.prototype={
$0(){var w=B.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aW(v==null?A.cC:v)
while(v.C())w.push(A.k.N(B.e1(v.gT(v))))
return this.a.Q.v(0,w)},
$S:0}
C.dGh.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?B.jH(90-(w-65)):d},
$S:14}
C.dGq.prototype={
$1(d){return this.a.m(new C.dGp())},
$S:2}
C.dGp.prototype={
$0(){},
$S:0}
C.dGr.prototype={
$1(d){return this.a.m(new C.dGo())},
$S:2}
C.dGo.prototype={
$0(){},
$S:0}
C.dGs.prototype={
$0(){var w=this.a
return w.m(new C.dGn(w))},
$S:0}
C.dGn.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aXs()},
$S:0}
C.dGt.prototype={
$0(){var w=this.a
return w.m(new C.dGm(w))},
$S:0}
C.dGm.prototype={
$0(){return this.a.f=0},
$S:0}
C.dGu.prototype={
$0(){var w=this.a
return w.m(new C.dGl(w))},
$S:0}
C.dGl.prototype={
$0(){return this.a.f=1},
$S:0}
C.dGv.prototype={
$0(){var w=this.a
return w.m(new C.dGk(w,this.b))},
$S:0}
C.dGk.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dGw.prototype={
$1(d){var w=this.a
return w.m(new C.dGj(w,d))},
$S:6}
C.dGj.prototype={
$0(){return this.a.w=A.k.V(this.b)},
$S:0}
C.dGx.prototype={
$1(d){var w=this.a
w.m(new C.dGi(w,d))
if(w.ga9D()&&w.Q.L(0,w.x)){C.cfI("zap",9,220,0.45)
w=w.Q
w=B.C(w,B.a6(w).k("cq.E"))
C.aqG("cipher_lab",B.F(["done",w],x.N,x.A))}},
$S:6}
C.dGi.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
C.bLC.prototype={
$1(d){return d.r<=0},
$S:z+40}
C.bLN.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+7}
C.bLI.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+7}
C.bLO.prototype={
$1(d){return this.a.LF(d)&&!d.x},
$S:z+0}
C.bLP.prototype={
$2(d,e){return Math.max(d,this.a.aA6(e))},
$S:z+9}
C.bLR.prototype={
$2(d,e){var w=this.a
return w.ca(0,d.a+"."+e,new C.bLS(w))},
$S:z+5}
C.bLS.prototype={
$0(){return this.a.a},
$S:100}
C.bLQ.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
C.bLT.prototype={
$2(d,e){var w=this.a
return w.ca(0,this.b.$1(this.c.$2(d,e)),new C.bLU(w))},
$S:z+5}
C.bLU.prototype={
$0(){return this.a.a},
$S:100}
C.bLE.prototype={
$2(d,e){var w=this.a
return w.ca(0,d.a+"."+e,new C.bLF(w))},
$S:z+5}
C.bLF.prototype={
$0(){return this.a.a},
$S:100}
C.bLD.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
C.bLG.prototype={
$2(d,e){var w=this.a
return w.ca(0,this.b.$1(this.c.$2(d,e)),new C.bLH(w))},
$S:z+5}
C.bLH.prototype={
$0(){return this.a.a},
$S:100}
C.bLB.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bLV.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+7}
C.bLJ.prototype={
$1(d){return d!==this.b&&this.a.aGh(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bLM.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bLL.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bLK.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bGp.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bGq.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+9}
C.cl7.prototype={
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
$S:181}
C.fGp.prototype={
$1(d){var w
$.W()
w=B.N()
w.r=d.gp(0)
return w},
$S:1866}
C.fGr.prototype={
$2(d,e){var w
$.W()
w=B.N()
w.b=A.af
w.c=e
w.r=d.gp(0)
w.d=A.bV
return w},
$S:1867}
C.fGs.prototype={
$5(d,e,f,g,h){return B.by(new B.a9(d,e,d+f,e+g),new B.aR(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1868}
C.fGq.prototype={
$3(d,e,f){var w
$.W()
w=B.N()
w.sar(new B.a8(A.b1,A.b6,A.x,B.a([e,f],x.O),null,null).aA(0,d))
return w},
$S:1869}
C.bG3.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bG4.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bG2(w))},
$S:0}
C.bG2.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bG5.prototype={
$0(){return B.a([],x.ey)},
$S:1870}
C.bG6.prototype={
$1(d){return this.a.bz(d).a>15e5},
$S:421}
C.bG7.prototype={
$0(){var w,v,u
J.bDg(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.Ct(v))if(C.fZH(v.b))w.b_J(v)
else w.a_p(v)
else{u=w.a.c.bcq(v)
w.adP(u==null?"The "+$.qg().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bG1.prototype={
$1(d){return new B.dY(new C.bG_(this.a,this.b),null)},
$S:19}
C.bG_.prototype={
$2(d,e){var w=null,v=this.b,u=new C.bG0(this.a,v,e),t=$.qg(),s=v.b,r=B.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.ki,w,w,w),q=B.aI(w,w,w,w,D.bJJ,w,w,w,new C.bFW(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return B.bl(!0,new B.D(A.xW,B.w(B.a([r,A.au,D.fG8,A.R,B.B(B.a([q,B.E(B.l_(t.h(0,s).d,w,w,2.6,1,u,p),1),B.aI(w,w,w,w,D.bQp,w,w,w,new C.bFX(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),B.B(B.a([B.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,B.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b5,B.bK(!1,D.fjL,w,w,!0,w,w,new C.bFY(u),w,w),B.bK(!1,A.wC,w,w,!0,w,w,new C.bFZ(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.Q,0,A.p),w),!0,!1,A.ae,!0,!0)},
$S:90}
C.bG0.prototype={
$1(d){var w=this.a
w.m(new C.bFU(this.b,d))
this.c.$1(new C.bFV())
w.a.toString},
$S:6}
C.bFU.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
C.bFV.prototype={
$0(){},
$S:0}
C.bFW.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
C.bFX.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
C.bFY.prototype={
$0(){return this.a.$1(1)},
$S:0}
C.bFZ.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.bGm.prototype={
$2(d,e){var w
if(d==="short"){E.dX(1800,"",120,0,0.55,"noise")
E.dX(200,"",160,2.2,0.4,"saw")
B.fF()
w=this.a
if(w.c!=null)w.adP("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dX(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.adP("\u26a0 Overloaded! The "+$.qg().h(0,e.b).b+" can only give about "+A.k.ab(w.a.c.zF(e),2)+" amps but your gadgets are asking for "+A.k.ab(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.adP("Burnt out! "+e.ay)
E.dX(140,"",320,0,0.6,"noise")
E.dX(900,"",160,1.5,0.35,"square")}},
$S:z+44}
C.bGn.prototype={
$0(){},
$S:0}
C.bFx.prototype={
$0(){},
$S:0}
C.bGo.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bGl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.as(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.aB(A.ci,B.b4(p,p,p,new C.ain(w,v,u,t,s,r==null?A.j5:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bGf(o),new C.bGg(o),new C.bGh(o),p,p,p,p,p,p,p,p,p,p,new C.bGi(o),p,p,p,!1,A.a7)],q)
if(o.a.c.a.length===0)n.push(D.b5K)
w=o.Q
if(w!=null){v=B.n(14)
u=B.I(A.cY,A.q,1)
n.push(B.ao(p,B.aB(p,B.p(p,B.B(B.a([D.fi0,B.E(B.d(w,p,p,p,p,p,p,D.fac,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(D.bb9,p,u,v,p,p,A.n),p,p,p,p,A.nb,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bGj(o),p,p,p,p,p,p,!1,A.a7),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ao(8,o.aYN(B.B(B.a([D.bA8,new C.iS(A.G9,"Cut wire",new C.bGk(o),A.cs,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ao(8,o.cg2(w),p,p,10,10,p,p))}return B.jw(new B.an(A.V,p,A.b0,A.r,n,p),A.r,p)},
$S:346}
C.bGg.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b6H(s)
if(r!=null){t.m(new C.bGd(t,r,d))
return}w=t.b0p(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.x(v*u.a,w.d*u.b).aF(0,s)
t.m(new C.bGe(t,w))}},
$S:49}
C.bGd.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bGe.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bGh.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bGb(w,d))
else if(w.w!=null)w.m(new C.bGc(w,d.b.ad(0,w.x)))},
$S:21}
C.bGb.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bGc.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bGf.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b6H(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.akk(u.a,u.b,v.a,v.b)!=null)E.dX(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.adN()},
$S:41}
C.bGi.prototype={
$1(d){var w=this.a,v=d.b,u=w.b0p(v)
if(u!=null){w.m(new C.bG9(w,u))
if(D.m2.ai(0,u.b))w.cqB(u)
w.a.toString
return}w.m(new C.bGa(w,w.cDa(v)))},
$S:67}
C.bG9.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dX(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dX(200,"",70,0,0.2,"saw")}},
$S:0}
C.bGa.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bGj.prototype={
$0(){var w=this.a
return w.m(new C.bG8(w))},
$S:0}
C.bG8.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bGk.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dX(300,"",50,0,0.35,"noise")
w.adN()},
$S:0}
C.bFy.prototype={
$0(){return this.a.boo(this.b)},
$S:0}
C.bFR.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.B(B.a([B.d(d,w,w,w,w,w,w,D.f4J,w,w,w),B.E(B.l_(this.b.d,w,w,g,h,new C.bFT(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1871}
C.bFT.prototype={
$1(d){var w=this.a
w.m(new C.bFS(this.b,d))
w.a.toString},
$S:6}
C.bFS.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bFE.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dX(260,"",70,0,0.35,"noise")
w.adN()},
$S:0}
C.bFF.prototype={
$0(){var w=this.a
return w.m(new C.bFD(w))},
$S:0}
C.bFD.prototype={
$0(){return this.a.d=null},
$S:0}
C.bFG.prototype={
$0(){this.a.m(new C.bFC(this.b,this.c))
E.dX(900,"",40,0,0.3,"noise")},
$S:0}
C.bFC.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bFJ.prototype={
$0(){return this.a.b_J(this.b)},
$S:0}
C.bFK.prototype={
$0(){return this.a.a_p(this.b)},
$S:0}
C.bFL.prototype={
$0(){return this.a.a12(this.b)},
$S:0}
C.bFM.prototype={
$0(){var w=this.a
w.m(new C.bFB(this.b,this.c))
w.a.toString},
$S:0}
C.bFB.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bFN.prototype={
$0(){var w=this.a
w.m(new C.bFA(this.b,this.c))
w.a.toString},
$S:0}
C.bFA.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bFO.prototype={
$0(){var w=this.a
w.m(new C.bFz(this.b,this.c))
w.a.toString},
$S:0}
C.bFz.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bFP.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bFQ.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bFH.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bFI.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fer.prototype={
$1(d){return d.aFU("bulb")},
$S:z+2}
C.fes.prototype={
$1(d){return d.pO(0,"switch")&&d.aFU("bulb")},
$S:z+2}
C.fet.prototype={
$1(d){return A.d.b4(d.a,new C.fee())},
$S:z+2}
C.fee.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.feu.prototype={
$1(d){return d.pO(0,"resistor")&&A.d.b4(d.a,new C.fed())},
$S:z+2}
C.fed.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fev.prototype={
$1(d){return!d.pO(0,"battery")&&d.aFU("bulb")},
$S:z+2}
C.fei.prototype={
$1(d){return A.d.b4(d.a,new C.fec())},
$S:z+2}
C.fec.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fej.prototype={
$1(d){return A.d.b4(d.a,new C.feb())},
$S:z+2}
C.feb.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fek.prototype={
$1(d){return A.d.b4(d.a,new C.fea())},
$S:z+2}
C.fea.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fel.prototype={
$1(d){var w=d.a
return A.d.b4(w,new C.fe8())&&A.d.b4(w,new C.fe9())&&d.pO(0,"buck")},
$S:z+2}
C.fe8.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fe9.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fem.prototype={
$1(d){var w=d.a
return A.d.b4(w,new C.fe6())&&A.d.b4(w,new C.fe7())},
$S:z+2}
C.fe6.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fe7.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fen.prototype={
$1(d){return A.d.b4(d.a,new C.fe5())},
$S:z+2}
C.fe5.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.dRs.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
C.dRB.prototype={
$1(d){var w=this.a.d
return w.aGh(d)&&w.Ct(d)},
$S:z+0}
C.dRC.prototype={
$1(d){return d.x},
$S:z+0}
C.dRD.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.dRE.prototype={
$0(){},
$S:0}
C.dRr.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.n(22),o=x.p,n=B.a([D.fyT,A.au,D.fjH,A.R],o)
for(w=this.a,v=0;v<19;++v){u=D.Q9[v]
t=A.c.j(0.06)
s=new B.aR(14,14)
r=new B.az(A.bE,1,A.q,-1)
n.push(B.aB(q,B.p(q,B.w(B.a([new B.y(u.a,q,A.kh,q,q,q,q,q,q,q,q,q),A.bz,new B.y(u.b,q,D.faX,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(t,q,new B.bO(r,r,r,r),new B.bo(s,s,s,s),q,q,A.n),q,q,q,A.cu,A.bl,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dRq(w,d,u),q,q,q,q,q,q,!1,A.a7))}return B.eL(q,F.lj,new B.D(A.bP,new B.a7(340,q,B.ct(n,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d3,q,new B.b7(p,A.W),q)},
$S:47}
C.dRq.prototype={
$0(){B.a4(this.b,!1).O(null)
var w=this.a
w.m(new C.dRp(w,this.c))
E.dX(800,"",120,-0.5,0.3,"square")},
$S:0}
C.dRp.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bhy()},
$S:0}
C.dRn.prototype={
$1(d){return new C.Vi(this.a.d,null)},
$S:z+46}
C.dRo.prototype={
$0(){},
$S:0}
C.dRA.prototype={
$1(d){return new B.dY(new C.dRz(this.a),null)},
$S:19}
C.dRz.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ahz(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.bk:A.aP
k=B.aH(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.B(B.a([D.fwb,A.b5,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.N,B.bw(B.n(4),B.m3(A.bE,m,m,5,m,w.a/11,new B.lW(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.fmL)
else{h=f.j(0.1)
t=B.n(14)
s=B.I(f.j(0.5),A.q,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ad.TM,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.DC,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.w(B.a([r,A.au,q,new B.bI(A.a8,m,m,B.bK(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new C.dRx(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bl,m,m,m))}u.push(A.R)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aR(12,12)
n=new B.az(o===l.f?f.j(0.6):A.dB,1,A.q,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aA:A.c
u.push(B.aB(m,B.p(m,new B.ck(A.aN,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.y(s,m,A.a8k,m,m,m,m,m,m,m,m,m),A.at,new B.bB(1,A.bf,new B.y(r.a,m,new B.G(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bO(n,n,n,n),new B.bo(t,t,t,t),m,m,A.n),m,m,m,A.eM,A.nb,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.dRy(l,o,e),m,m,m,m,m,m,!1,A.a7))}return B.bl(!0,new B.cT(new B.aX(0,1/0,0,k.a.b*0.75),B.ct(u,m,A3.xU,m,m,A.ah,!0),m),!0,!1,A.ae,!0,!0)},
$S:90}
C.dRx.prototype={
$0(){var w=this.a
w.m(new C.dRv(w))
this.b.$1(new C.dRw())
w.EU()},
$S:0}
C.dRv.prototype={
$0(){var w=this.a
$.ahz()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.dRw.prototype={
$0(){},
$S:0}
C.dRy.prototype={
$0(){var w=this.a
w.m(new C.dRt(w,this.b))
this.c.$1(new C.dRu())
w.EU()},
$S:0}
C.dRt.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dRu.prototype={
$0(){},
$S:0}
C.dRG.prototype={
$0(){return B.a4(this.a,!1).la()},
$S:0}
C.dRH.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.md("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a4(t.b,!1).cm(B.e9(new C.dRF(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dRF.prototype={
$1(d){B.lo("construction")
return Aj.hCf()},
$S:z+47}
C.dRI.prototype={
$0(){return C.hof(this.a,"ELECTRONICS LAB",this.b,A.aP)},
$S:0}
C.dRJ.prototype={
$0(){var w=this.a
return w.m(w.d.gcUk())},
$S:0}
C.dRK.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gBm(v))
w.EU()},
$S:0}
C.cBZ.prototype={
$2(d,e){var w=null,v=this.a.gawF().x
v===$&&B.c()
return B.b4(w,w,w,new C.b8o(v,w),A.az)},
$S:70}
C.cBY.prototype={
$3(d,e,f){var w=new B.aO($.W().r,A.ao,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.F(new B.b5(v,t))
w.F(new B.cR(v,u,v+e,u))
w.F(new B.cR(v,u,v,u+e))
w.F(new B.cR(v,u,v-e,u))
w.F(new B.cR(v,u,v,t))
w.F(new B.bE())
t=B.N()
t.r=A.c.j(f).gp(0)
this.a.aS(w,t)},
$S:435}
C.fL7.prototype={
$3(d,e,f){return new C.UC(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+48}
C.fL8.prototype={
$4(d,e,f,g){var w=x.Y
return new B.d_(e,!1,B.ip(A.A,g,null,new B.bf(B.cH(A.ct,e,null),new B.bp(0.85,1,w),w.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:32}
C.dNR.prototype={
$0(){return B.a4(this.a,!1).la()},
$S:0}
C.dNQ.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bXP(o):q.bAj(o,p),m=x.p
p=B.a([B.qj(new B.nf(n,new B.cx(p,x.aC)),A.pS,B.rU(),A.bb,A.bb,new C.dNO())],m)
n=t.d
if(n){w=A.k.E(q.gRN(),12)<4
v=w?150:96
u=B.n(16)
m=B.a([A.at],m)
if(w)m.push(D.bzU)
else m.push(A.b5)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.bk:A.av,s,s,s,s,s,A.a5),s,9,s,s,s,s,s,9))
m.push(A.at)
p.push(B.ao(s,B.au(B.de(s,B.B(m,A.m,s,A.e,A.j,0,s,s),s,s,A.et,new B.o(A.w,s,s,u,s,s,A.n),A.n6,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.uL)p.push(B.ao(s,B.au(B.p(s,s,A.f,s,s,A.Kw,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wr)p.push(B.ao(s,B.p(s,s,A.f,s,s,A.Kw,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aB(s,B.au(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.n(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dNP(q),s,s,s,s,s,s,!1,A.a7),s,s,0,0,s,s))
return B.bw(r,new B.an(A.V,s,A.b0,A.r,p,s),A.aq)},
$S:306}
C.dNO.prototype={
$2(d,e){var w=x.Y
return new B.d_(e,!1,B.ip(A.A,d,null,new B.bf(e,new B.bp(0.92,1,w),w.k("bf<bJ.T>"))),null)},
$S:385}
C.dNP.prototype={
$0(){var w=this.a
return w.m(new C.dNN(w))},
$S:0}
C.dNN.prototype={
$0(){return this.a.e=null},
$S:0}
C.dNM.prototype={
$0(){var w=this.a
return w.m(new C.dNL(w,this.b))},
$S:0}
C.dNL.prototype={
$0(){return this.a.e=A.d.cK(F.ka,this.b)},
$S:0}
C.dNK.prototype={
$0(){var w=this.a
return w.m(new C.dNJ(w))},
$S:0}
C.dNJ.prototype={
$0(){return this.a.e=0},
$S:0}
C.dNF.prototype={
$0(){var w=this.a
return w.m(new C.dNE(w))},
$S:0}
C.dNE.prototype={
$0(){return this.a.e=null},
$S:0}
C.dNI.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.n(o?20:8),m=A.w.j(0.55),l=x.p
m=B.p(p,B.B(B.a([D.fEy,A.at,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eH,p,p,p,D.fgT,p,p,p),1),B.d(A.a.aX(A.o.u(B.dk(new B.S(Date.now(),0,!1))),2,"0")+":"+A.a.aX(A.o.u(B.h1(new B.S(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qv,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.kW,p,p,p)
w=this.a
v=B.a([B.b4(p,p,p,new C.buh(w.gRN(),this.c.d,p),A.az)],l)
o=w.e
if(o!=null){u=B.n(10)
t=B.I(A.b2,A.q,1)
s=B.n(10)
o=B.p(p,B.B(B.a([B.aB(p,B.p(p,p,A.f,p,p,A.abp,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dNH(w),p,p,p,p,p,p,!1,A.a7),A.eg,B.p(p,p,A.f,p,p,A.abv,p,12,p,p,p,p,p,12),A.eg,B.p(p,p,A.f,p,p,D.b19,p,12,p,p,p,p,p,12),A.at,B.E(B.d(F.ka[o].a,p,1,A.a2,p,p,p,A.a8b,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.co,p,p,p,24,p,p,A.fq,p,p,p)
r=w.e
r.toString
v.push(B.bT(0,new B.D(D.bwE,B.p(p,B.bw(s,B.w(B.a([o,B.E(B.b4(p,p,p,new C.aej(r,w.gRN(),p),A.fE),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new B.o(A.w,p,t,u,D.dhH,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.n(18)
t=B.I(A.b2,A.q,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jo,w.auC(F.ka[q],34,!1),p))
v.push(B.ao(8,B.au(B.p(p,B.B(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new B.o(o,p,t,u,p,p,A.n),p,p,p,p,A.ln,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bw(n,B.p(p,B.w(B.a([m,B.E(new B.an(A.V,p,A.b0,A.r,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,U.Xt,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:306}
C.dNH.prototype={
$0(){var w=this.a
return w.m(new C.dNG(w))},
$S:0}
C.dNG.prototype={
$0(){return this.a.e=null},
$S:0}
C.feX.prototype={
$0(){return D.e3i},
$S:z+49}
C.feY.prototype={
$0(){return D.dBD},
$S:z+50}
C.feZ.prototype={
$0(){return D.dyd},
$S:z+51}
C.ff_.prototype={
$0(){return D.dB3},
$S:z+52}
C.ff0.prototype={
$0(){return D.dFW},
$S:z+53}
C.ff1.prototype={
$0(){return D.e_2},
$S:z+54}
C.ff2.prototype={
$0(){return D.e1d},
$S:z+55}
C.ff3.prototype={
$0(){return D.dFg},
$S:z+56}
C.cfL.prototype={
$0(){return B.a4(this.a,!1).la()},
$S:0}
C.cfM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=B.a([],k)
for(w=$.hrS(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aR(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.dn,16)],t)
n=A.c.j(0.85)
j.push(B.aB(m,B.p(m,new B.an(A.V,m,A.aa,A.r,B.a([new B.cL(m,-6,-6,m,m,m,new B.y(r.c,m,L.TL,m,m,m,m,m,m,m,m,m),m),new B.bI(A.lF,m,m,B.w(B.a([new B.y(r.a,m,D.ffv,m,m,m,m,m,m,m,m,m),A.cR,new B.y(r.b,m,new B.G(!0,n,m,m,m,m,12,A.a6,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.Q,0,A.p),m)],k),m),A.f,m,m,new B.o(m,m,m,new B.bo(q,q,q,q),p,new B.a8(A.ay,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bC,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.cfK(d,r),m,m,m,m,m,m,!1,A.a7))}return B.bZ(A.bD,j,A.br,14,14)},
$S:156}
C.cfK.prototype={
$0(){return B.a4(this.a,!1).cm(B.e9(new C.cfJ(this.b),!1,null,x.H))},
$S:0}
C.cfJ.prototype={
$1(d){return this.a.f.$0()},
$S:43}
C.eHy.prototype={
$0(){var w=this.a
return w.w=w.d[w.b3S(w.f)]},
$S:0}
C.eHu.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cS.an()*7},
$S:0}
C.eHt.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.c4)
w.w=""},
$S:0}
C.eHw.prototype={
$0(){var w=this.a
return w.m(new C.eHv(w,this.b))},
$S:0}
C.eHv.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cF(w,this.b)},
$S:0}
C.eHx.prototype={
$1(d){return this.a.aZc(0)},
$S:2}
C.dTG.prototype={
$0(){return C.IO("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.dTH.prototype={
$0(){},
$S:0}
C.dTB.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.dTD.prototype={
$0(){return this.a.aZe(this.b)},
$S:0}
C.dTE.prototype={
$0(){var w=this.a
return w.m(new C.dTC(w))},
$S:0}
C.dTC.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.dTF.prototype={
$0(){var w=this.a
return w.aZe(w.d)},
$S:0}
C.dFc.prototype={
$2(d,e){return d+e},
$S:80}
C.dFd.prototype={
$0(){},
$S:0}
C.dF7.prototype={
$2(d,e){return d+e},
$S:80}
C.dFa.prototype={
$0(){var w=this.a
return w.m(new C.dF9(w,this.b))},
$S:0}
C.dF9.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dFb.prototype={
$0(){var w=this.a
return w.m(new C.dF8(w))},
$S:0}
C.dF8.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.dRb.prototype={
$0(){return C.wS(this.b,this.a.d,"drawing")},
$S:0}
C.dRc.prototype={
$1(d){var w=this.a
return w.m(new C.dRa(w,d))},
$S:49}
C.dRa.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aHE(u,v,t))},
$S:0}
C.dRd.prototype={
$1(d){var w=this.a
return w.m(new C.dR9(w,d))},
$S:21}
C.dR9.prototype={
$0(){return A.d.gak(this.a.e).c.push(this.b.b)},
$S:0}
C.dRe.prototype={
$1(d){var w=this.a
return w.m(new C.dR8(w,d))},
$S:23}
C.dR8.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aHE(u,v,t))},
$S:0}
C.dRf.prototype={
$0(){var w=this.a
return w.m(new C.dR7(w,this.b))},
$S:0}
C.dR7.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.dRg.prototype={
$1(d){var w=this.a
return w.m(new C.dR6(w,d))},
$S:6}
C.dR6.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dRh.prototype={
$0(){var w=this.a
return w.m(new C.dR5(w))},
$S:0}
C.dR5.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dRi.prototype={
$0(){var w=this.a
return w.m(new C.dR4(w))},
$S:0}
C.dR4.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.dRj.prototype={
$0(){var w=this.a
return w.m(A.d.gBm(w.e))},
$S:0}
C.dRk.prototype={
$0(){var w=this.a
return w.m(new C.dR3(w))},
$S:0}
C.dR3.prototype={
$0(){var w=this.a
w.x=D.aw6[A.o.E(A.d.cK(D.aw6,w.x)+1,4)]},
$S:0}
C.ef3.prototype={
$0(){return this.a.f.L(0,this.b)},
$S:0}
C.ef4.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.IO("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.ef2(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.IO("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
C.ef2.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.ef5.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.ef1(w))},
$S:11}
C.ef1.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.ef9.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return B.aB(w,B.mC(new C.ef7(v,e),w,A.bb,A.pS,w,w,new B.bp(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ef8(v,e),w,w,w,w,w,w,!1,A.a7)},
$S:82}
C.ef8.prototype={
$0(){return this.a.c7A(this.b)},
$S:0}
C.ef7.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dp(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fC(3.141592653589793*e)
m=B.n(16)
w=o?p:D.bZs
if(o)v=q.a.r.t(0,q.b)?A.bk.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.I(u.r.t(0,t)?A.bk:A.b2,A.q,1)
if(o){r=B.dp()
r.fC(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fu(A.A,B.d(u[t],p,p,p,p,p,p,D.fcR,p,p,p),p,r,!0)
u=r}else u=D.fxB
return B.fu(A.A,B.p(A.A,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:132}
C.efa.prototype={
$0(){var w=this.a
return w.m(new C.ef6(w,this.b))},
$S:0}
C.ef6.prototype={
$0(){var w=this.a
w.d=this.b.a
w.arY()},
$S:0}
C.efb.prototype={
$0(){var w=this.a
return w.m(w.gbIZ())},
$S:0}
C.eoZ.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.ep_.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eoX.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eoY.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eoW(w))},
$S:11}
C.eoW.prototype={
$0(){return this.a.f=-1},
$S:0}
C.ep0.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.ep1.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.ep2.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aZd()},
$S:11}
C.ep3.prototype={
$0(){return this.a.c7G(this.b)},
$S:0}
C.eCQ.prototype={
$1(d){return B.u(d.h(0,1))+","},
$S:71}
C.eCZ.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kV,B.B(B.a([v,A.ab,new B.dq(1,A.cm,B.eM(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.dZ),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1872}
C.eCV.prototype={
$1(d){return this.a.m(new C.eCU())},
$S:2}
C.eCU.prototype={
$0(){},
$S:0}
C.eCW.prototype={
$0(){var w=this.a
return w.m(new C.eCT(w,this.b))},
$S:0}
C.eCT.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eCX.prototype={
$1(d){var w=this.a
return w.m(new C.eCS(w,d))},
$S:6}
C.eCS.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
C.eCY.prototype={
$0(){var w=this.a
return w.m(new C.eCR(w))},
$S:0}
C.eCR.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ee8.prototype={
$0(){},
$S:0}
C.ee9.prototype={
$0(){},
$S:0}
C.ee1.prototype={
$0(){var w=this.a
return w.m(new C.ee0(w))},
$S:0}
C.ee0.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c2(u,1,!1,x.S)
w.r=0.9
C.a80("hat",0.6)},
$S:0}
C.ee2.prototype={
$0(){var w=this.a
return w.m(new C.ee_(w))},
$S:0}
C.ee_.prototype={
$0(){this.a.y=1.1
C.pU("bell",36,200,0.4)},
$S:0}
C.ee3.prototype={
$0(){var w=this.a
return w.m(new C.edZ(w))},
$S:0}
C.edZ.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.az(Math.max(v,u)-t+1)
w.as=u
C.pU("bell",12+A.o.E(u,12),500,0.5)},
$S:0}
C.ee4.prototype={
$0(){var w=this.a
return w.m(new C.edY(w,this.b))},
$S:0}
C.edY.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.ee5.prototype={
$1(d){var w=this.a
return w.m(new C.edX(w,d))},
$S:6}
C.edX.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e6(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.ee6.prototype={
$1(d){var w=this.a
return w.m(new C.edW(w,d))},
$S:6}
C.edW.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
C.ee7.prototype={
$1(d){var w=this.a
return w.m(new C.edV(w,d))},
$S:6}
C.edV.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
C.csG.prototype={
$0(){return B.a4(this.a,!1).la()},
$S:0}
C.csH.prototype={
$0(){var w=this.a
return C.hof(this.b,w.c,w.e,w.d)},
$S:0}
C.fOX.prototype={
$1(d){var w,v=null,u=B.n(24),t=this.a,s=t.j(0.4)
t=B.d(this.b,v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=B.d(this.c,v,v,v,v,v,v,D.f5h,v,v,v)
return B.ek(B.a([B.bK(!1,D.fmQ,v,v,!0,v,v,new C.fOW(d),v,v)],x.p),v,v,F.n1,w,v,v,v,new B.b7(u,new B.az(s,1,A.q,-1)),t,v)},
$S:18}
C.fOW.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.csC.prototype={
$0(){B.f_()
this.a.e.$0()},
$S:0}
C.csB.prototype={
$0(){B.f_()
this.a.e.$0()},
$S:0}
C.csI.prototype={
$0(){B.f_()
this.a.e.$0()},
$S:0}
C.csD.prototype={
$0(){var w=this.a
A.d.W(w.iH$,this.b.bj())
if(w.c!=null)this.c.$0()},
$S:0}
C.csF.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.oy$.a)/1e6,0,0.04)
w.oy$=d
w.nb$=A.o.am(v,1000)
w.pW(u)
if(w.c!=null)w.m(new C.csE())},
$S:9}
C.csE.prototype={
$0(){},
$S:0}
C.cfG.prototype={
$0(){var w=this
return C.pU(w.a,w.b,w.c,w.d)},
$S:1}
C.dWc.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dWb(w,d))},
$S:z+58}
C.dWb.prototype={
$0(){return this.a.csk(this.b)},
$S:0}
C.dVF.prototype={
$0(){var w,v,u,t=this.a,s=J.a3(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:716}
C.dVD.prototype={
$0(){return this.a.id=D.a3f},
$S:0}
C.dVE.prototype={
$0(){var w=this.b.a,v=B.T(w).k("a_<1>")
v=B.pe(new B.a_(w,new C.dVC(this.c),v),6,v.k("J.E"))
w=B.C(v,B.a6(v).k("J.E"))
return this.a.id=w},
$S:0}
C.dVC.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+59}
C.dVB.prototype={
$1(d){var w=null,v=B.cc(B.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,B.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.r,w,A.y,w,w,w,w,A.ah)
return B.ek(B.a([B.bK(!1,A.pm,w,w,!0,w,w,new C.dVA(d),w,w)],x.p),w,w,F.n1,v,w,w,w,w,D.fxG,w)},
$S:18}
C.dVA.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.dVY.prototype={
$0(){return C.wS(this.b,this.a.d,"earth")},
$S:0}
C.dVZ.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new B.as(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gW2()
r=p.z
o=B.a([B.aB(A.ci,B.b4(q,q,q,new C.beM(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dVM(p),new C.dVN(p),new C.dVO(p),q,q,q,q,q,q,q,new C.dVP(p),q,q,q,!1,A.a7)],x.p)
if(p.r==null)o.push(A8.ac7)
w=this.b
if(w!=null)o.push(B.ao(8,p.c8h(w),q,q,10,10,q,q))
return new B.eH(new B.an(A.V,q,A.b0,A.r,o,q),p.d)},
$S:461}
C.dVN.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:267}
C.dVO.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gW2()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:203}
C.dVM.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gW2()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:507}
C.dVP.prototype={
$1(d){var w=this.a,v=w.c8k(d.b)
if(v!=null)w.m(new C.dVG(w,v))
else w.m(new C.dVH(w))},
$S:67}
C.dVG.prototype={
$0(){return this.a.axb(this.b)},
$S:0}
C.dVH.prototype={
$0(){return this.a.fx=null},
$S:0}
C.dW_.prototype={
$0(){var w=this.a
w.e.bP(0,A.c4)
w.m(new C.dVL(w,this.b))},
$S:0}
C.dVL.prototype={
$0(){var w=this.a
w.id=D.a3f
w.axb(this.b)},
$S:0}
C.dW3.prototype={
$0(){var w=this.a
return w.m(new C.dVX(w))},
$S:0}
C.dVX.prototype={
$0(){var w=this.a
w.fx=null
w.at8(15,w.y,1)},
$S:0}
C.dW4.prototype={
$0(){var w=this.a
return w.m(new C.dVW(w,this.b))},
$S:0}
C.dVW.prototype={
$0(){var w=this.b.b
return this.a.at8(w.a,w.b,w.c)},
$S:0}
C.dW5.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new C.dVV(w,v))},
$S:0}
C.dVV.prototype={
$0(){var w=this.b.a
return this.a.axb(w[A.cS.az(w.length)])},
$S:0}
C.dW6.prototype={
$1(d){var w=this.a
return w.m(new C.dVU(w,d))},
$S:6}
C.dVU.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
C.dW7.prototype={
$1(d){var w=this.a
return w.m(new C.dVT(w,d))},
$S:6}
C.dVT.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.dW8.prototype={
$1(d){var w=this.a
return w.m(new C.dVS(w,d))},
$S:6}
C.dVS.prototype={
$0(){return this.a.fr=this.b},
$S:0}
C.dW9.prototype={
$0(){var w=this.a
return w.m(new C.dVR(w))},
$S:0}
C.dVR.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.dWa.prototype={
$0(){var w=this.a
return w.m(new C.dVQ(w))},
$S:0}
C.dVQ.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
C.dW0.prototype={
$0(){var w=this.a
return w.m(new C.dVK(w))},
$S:0}
C.dVK.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.dW1.prototype={
$0(){var w=this.a
return w.m(new C.dVJ(w))},
$S:0}
C.dVJ.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.dW2.prototype={
$0(){var w=this.a
return w.m(new C.dVI(w))},
$S:0}
C.dVI.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
C.dVz.prototype={
$2(d,e){var w=null
return B.E(B.w(B.a([B.d(d,w,w,w,w,w,w,D.aPH,w,w,w),A.uO,B.d(e,w,2,A.a2,w,w,w,A.U1,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:142}
C.dVy.prototype={
$0(){var w=this.a
return w.m(new C.dVx(w))},
$S:0}
C.dVx.prototype={
$0(){return this.a.fx=null},
$S:0}
C.ddk.prototype={
$0(){var w=null,v=B.h2(w,w,w,w,B.d0(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.d0y,w,w),this.a),A.a4,A.cb,w,A.dR,A.c7)
v.eO()
return v},
$S:334}
C.ddl.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new B.x(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1874}
C.feQ.prototype={
$0(){return D.dDz},
$S:z+60}
C.feR.prototype={
$0(){return D.e0X},
$S:z+61}
C.feS.prototype={
$0(){return D.dDB},
$S:z+62}
C.feT.prototype={
$0(){return D.dy_},
$S:z+63}
C.feU.prototype={
$0(){return D.dDy},
$S:z+64}
C.feV.prototype={
$0(){return D.e_3},
$S:z+65}
C.feW.prototype={
$0(){return D.e_1},
$S:z+66}
C.eDJ.prototype={
$0(){return B.a4(this.a,!1).la()},
$S:0}
C.eDK.prototype={
$0(){var w=this.a
return w.m(new C.eDI(w))},
$S:0}
C.eDI.prototype={
$0(){var w=this.a
return w.d=A.o.E(w.gaS1()+1,16)},
$S:0}
C.eDL.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=B.a([],l)
for(w=$.hrR(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new B.aR(18,18)
q=s.d
p=new B.az(q.j(0.5),1,A.q,-1)
o=B.a([q.j(0.28),D.bjh],u)
k.push(B.aB(n,B.p(n,B.w(B.a([B.X(s.c,q,n,n,n,30),A.N,new B.y(s.a,n,D.f9N,n,A.L,n,n,n,n,2,n,n),A.cR,new B.y(s.b,n,D.feU,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b7,A.j,0,A.p),A.f,n,n,new B.o(n,n,new B.bO(p,p,p,p),new B.bo(r,r,r,r),n,new B.a8(A.ay,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.cp,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eDH(d,s),n,n,n,n,n,n,!1,A.a7))}return B.bZ(A.fQ,k,A.br,10,10)},
$S:156}
C.eDH.prototype={
$0(){return B.a4(this.a,!1).cm(B.e9(new C.eDG(this.b),!1,null,x.H))},
$S:0}
C.eDG.prototype={
$1(d){return this.a.e.$0()},
$S:43}
C.ewc.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
C.ewn.prototype={
$0(){return C.wS(this.b,this.a.d,"solar-system")},
$S:0}
C.ewo.prototype={
$2(d,e){var w,v=null,u=this.a,t=new B.as(e.b,e.d)
u.ch=t
t=B.a([B.aB(A.ci,B.b4(v,v,v,new C.br4(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ewk(u),new C.ewl(u),v,v,v,v,v,v,v,new C.ewm(u),v,v,v,!1,A.a7)],x.p)
w=this.b
if(w!=null)t.push(B.ao(8,u.c8m(w),v,v,10,10,v,v))
return new B.eH(new B.an(A.V,v,A.b0,A.r,t,v),u.d)},
$S:461}
C.ewk.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:267}
C.ewl.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:203}
C.ewm.prototype={
$1(d){var w=this.a,v=w.c8p(d.b)
if(v!=null)w.aZz(v)},
$S:67}
C.ewp.prototype={
$0(){var w=this.a
return w.m(new C.ewj(w))},
$S:0}
C.ewj.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
C.ewq.prototype={
$0(){return this.a.aZz(this.b)},
$S:0}
C.ewr.prototype={
$1(d){var w=this.a
return w.m(new C.ewi(w,d))},
$S:6}
C.ewi.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
C.ews.prototype={
$1(d){var w=this.a
return w.m(new C.ewh(w,d))},
$S:6}
C.ewh.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ewt.prototype={
$0(){var w=this.a
return w.m(new C.ewg(w))},
$S:0}
C.ewg.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
C.ewu.prototype={
$0(){var w=this.a
return w.m(new C.ewf(w))},
$S:0}
C.ewf.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.ewv.prototype={
$0(){var w=this.a
return w.m(new C.ewe(w))},
$S:0}
C.ewe.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.eww.prototype={
$0(){var w=this.a
return w.m(new C.ewd(w))},
$S:0}
C.ewd.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.ewb.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.ab(d/365.25,w)+" Earth years"}else w=A.k.ab(d,0)+" Earth days"
return w},
$S:310}
C.ewa.prototype={
$2(d,e){var w=null
return B.E(B.w(B.a([B.d(d,w,w,w,w,w,w,D.aPH,w,w,w),A.uO,B.d(e,w,2,A.a2,w,w,w,A.U1,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:142}
C.ew9.prototype={
$0(){var w=this.a
return w.m(new C.ew8(w))},
$S:0}
C.ew8.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
C.eY6.prototype={
$0(){var w=null,v=B.h2(w,w,w,w,B.d0(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,I.Qi,w,w),this.a),A.a4,A.cb,w,A.dR,A.c7)
v.eO()
return v},
$S:334}
C.eY7.prototype={
$1(d){return d.c>0},
$S:z+10}
C.eY8.prototype={
$1(d){return d.c>0},
$S:z+10}
C.dWg.prototype={
$0(){},
$S:0}
C.dWJ.prototype={
$1(d){return d!=null},
$S:469}
C.dWv.prototype={
$0(){var w=this.a
return w.m(new C.dWm(w,this.b))},
$S:0}
C.dWm.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dWw.prototype={
$0(){var w=this.a
return w.m(new C.dWl(w))},
$S:0}
C.dWl.prototype={
$0(){return this.a.f=!1},
$S:0}
C.dWx.prototype={
$0(){var w=this.a
return w.m(new C.dWu(w))},
$S:0}
C.dWu.prototype={
$0(){return this.a.f=!0},
$S:0}
C.dWB.prototype={
$0(){var w=this.a
return w.m(new C.dWt(w))},
$S:0}
C.dWt.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dWC.prototype={
$1(d){var w=this.a
return w.m(new C.dWs(w,d))},
$S:6}
C.dWs.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.dWD.prototype={
$0(){var w=this.a
return w.m(w.gcvy())},
$S:0}
C.dWE.prototype={
$1(d){var w=this.a
return w.m(new C.dWr(w,d))},
$S:6}
C.dWr.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.dWF.prototype={
$1(d){var w=this.a
return w.m(new C.dWq(w,d))},
$S:6}
C.dWq.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.dWG.prototype={
$1(d){var w=this.a
return w.m(new C.dWp(w,d))},
$S:6}
C.dWp.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dWH.prototype={
$1(d){var w=this.a
return w.m(new C.dWo(w,d))},
$S:6}
C.dWo.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.dWI.prototype={
$0(){var w=this.a
return w.m(new C.dWn(w))},
$S:0}
C.dWn.prototype={
$0(){return this.a.ay=4},
$S:0}
C.dWy.prototype={
$0(){var w=this.a
return w.m(new C.dWk(w))},
$S:0}
C.dWk.prototype={
$0(){return this.a.ay=7.67},
$S:0}
C.dWz.prototype={
$0(){var w=this.a
return w.m(new C.dWj(w))},
$S:0}
C.dWj.prototype={
$0(){return this.a.ay=9},
$S:0}
C.dWA.prototype={
$0(){var w=this.a
return w.m(new C.dWi(w))},
$S:0}
C.dWi.prototype={
$0(){return this.a.ay=11.3},
$S:0}
C.dWf.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=B.a([B.bT(0,B.c0(g,new B.o(D.bhO,g,g,B.n(20),g,g,A.n),A.be),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.yW[q]
n=B.b0(o.d)
o=B.w(B.a([new B.y(o.a,g,new B.G(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new B.y(B.u(D.yW[q].b)+" m/s\xb2",g,D.feg,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=B.p(g,g,A.f,A.dB,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?B.X(V.Nu,B.b0(D.yW[q].d),g,g,g,22):B.p(g,g,A.f,g,g,new B.o(B.b0(D.yW[q].d),g,g,g,B.a([new B.ac(0,A.G,B.b0(D.yW[q].d).j(0.6),A.J,10)],u),g,A.a5),g,22,g,g,g,g,g,22)
j=B.p(g,g,A.f,B.b0(D.yW[q].d).j(0.6),g,g,g,3,g,A.fq,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.ab(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,B.a([new B.cL(p,8,g,g,f,g,o,g),new B.cL(n-0.5,54,g,e,g,g,m,g),new B.cL(n-11,54+s*(l/20),g,g,g,g,k,g),new B.cL(p,g,g,8,f,g,B.w(B.a([j,A.au,new B.y(i,g,A.rR,g,g,g,g,g,g,g,g,g),new B.y(h,g,D.f6t,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d8(v,new C.dWe()))a1.push(D.b64)
return new B.an(A.V,g,A.aa,A.r,a1,g)},
$S:68}
C.dWe.prototype={
$1(d){return d==null},
$S:469}
C.dWh.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=B.n(8)
p=B.p(v,v,A.f,v,v,new B.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=B.de(v,v,v,v,A.bb,new B.o(v,v,v,B.n(8),v,new B.a8(A.a3,A.a8,A.x,B.a([B.b0(t).j(0.9),B.b0(t).j(0.4)],x.O),v,v),A.n),A.ij,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.ab(r,1):C.GM(r)
u=u.ax*9.81/s
u=u<10?A.k.ab(u,2):A.k.ab(u,0)
return new B.an(A.V,v,A.aa,A.r,B.a([p,t,B.ao(v,B.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.fcB,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:68}
C.dWd.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=B.b4(v,v,v,new C.ba0(new B.x(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.az)
o=A.w.j(0.55)
p=B.n(14)
q=B.I(A.bE,A.q,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.bk
else u=A.a.t(u,"escapes")?A.aP:A.c
u=B.d(t,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.ab(Math.sqrt(58.86870477034412),1)
s=A.k.ab(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+C.GM(A.k.D(r.cx.gcG()-6371,0,9e9))+" km":""
w=x.p
return new B.an(A.V,v,A.b0,A.r,B.a([n,B.ao(v,B.p(v,B.w(B.a([u,A.bz,B.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,H.aRm,v,v,v)],w),A.F,v,A.e,A.Q,0,A.p),A.f,v,v,new B.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bT,v,v,v),v,v,12,12,8,v)],w),v)},
$S:68}
C.ep6.prototype={
$0(){return C.wS(this.b,this.a.d,"size-compare")},
$S:0}
C.ep7.prototype={
$0(){var w=this.a
return w.m(new C.ep5(w,this.b))},
$S:0}
C.ep5.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ep8.prototype={
$0(){var w=this.a
return w.m(new C.ep4(w,this.b))},
$S:0}
C.ep4.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eWg.prototype={
$3(d,e,f){var w,v,u=this.a
$.W()
w=B.N()
w.r=f.j(0.2).gp(0)
w.z=new B.hB(A.G,Math.max(2,e*0.18))
u.af(d,e*1.12,w)
w=B.N()
v=B.aq(f,A.w,0.6)
v.toString
w.sar(new B.c_(W.wX,0.5,A.x,null,0,B.a([A.c,f,v],x.O),H.a2u,null).aA(0,B.bV(d,e)))
u.af(d,e,w)},
$S:1875}
C.dEE.prototype={
$1(d){return d.e<=0},
$S:z+68}
C.dEs.prototype={
$1(d){return d.b},
$S:z+45}
C.dEt.prototype={
$0(){return C.wS(this.b,this.a.d,"black-hole")},
$S:0}
C.dEu.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new B.as(e.b,e.d)
p.Q=o
o=B.aB(A.ci,B.b4(q,q,q,new C.b9p(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dEq(p),q,q,q,q,q,q,q,q,q,new C.dEr(p),q,q,q,q,!1,A.a7)
w=A.w.j(0.55)
v=B.n(14)
u=B.I(A.bE,A.q,1)
t=p.r
if(t<1000)t=A.k.ab(t,t<10?1:0)+" Suns"
else t=C.fsr(t)+" Suns"
t=p.aey("MASS",t)
s=2.953*p.r
r=x.p
r=B.a([o,B.ao(q,B.p(q,B.B(B.a([t,p.aey("EDGE WIDTH",(s<100?A.k.ab(s,1):C.GM(s))+" km"),p.aey("TIME",A.k.ab(this.b*100,0)+"%"),p.aey("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bT,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.ehu)
return new B.eH(new B.an(A.V,q,A.b0,A.r,r,q),p.d)},
$S:461}
C.dEr.prototype={
$1(d){return this.a.aZA(d.b)},
$S:23}
C.dEq.prototype={
$1(d){if(A.cS.an()<0.12)this.a.aZA(d.b)},
$S:21}
C.dEw.prototype={
$1(d){var w=this.a
return w.m(new C.dEp(w,d))},
$S:6}
C.dEp.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
C.dEx.prototype={
$0(){var w=this.a
return w.m(new C.dEo(w))},
$S:0}
C.dEo.prototype={
$0(){return this.a.r=10},
$S:0}
C.dEy.prototype={
$0(){var w=this.a
return w.m(new C.dEn(w))},
$S:0}
C.dEn.prototype={
$0(){return this.a.r=21},
$S:0}
C.dEz.prototype={
$0(){var w=this.a
return w.m(new C.dEm(w))},
$S:0}
C.dEm.prototype={
$0(){return this.a.r=43e5},
$S:0}
C.dEA.prototype={
$0(){var w=this.a
return w.m(new C.dEl(w))},
$S:0}
C.dEl.prototype={
$0(){return this.a.r=65e8},
$S:0}
C.dEB.prototype={
$0(){var w=this.a
return w.m(new C.dEk(w))},
$S:0}
C.dEk.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dEC.prototype={
$0(){var w=this.a
return w.m(new C.dEj(w))},
$S:0}
C.dEj.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.dED.prototype={
$0(){var w=this.a
return w.m(new C.dEi(w))},
$S:0}
C.dEi.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.dEv.prototype={
$0(){var w=this.a
return w.m(new C.dEh(w))},
$S:0}
C.dEh.prototype={
$0(){var w=this.a
A.d.a8(w.z)
w.as=0},
$S:0}
C.dV_.prototype={
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
$S:1876}
C.dUQ.prototype={
$0(){return C.wS(this.b,this.a.d,"galaxy")},
$S:0}
C.dUR.prototype={
$0(){var w=this.a
return w.m(new C.dUP(w,this.b))},
$S:0}
C.dUP.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.a_2()},
$S:0}
C.dUS.prototype={
$0(){var w=this.a
return w.m(new C.dUO(w))},
$S:0}
C.dUO.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.a_2()}w.cvp()},
$S:0}
C.dUT.prototype={
$1(d){var w=this.a
return w.m(new C.dUN(w,d))},
$S:6}
C.dUN.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.a_2()},
$S:0}
C.dUU.prototype={
$1(d){var w=this.a
return w.m(new C.dUM(w,d))},
$S:6}
C.dUM.prototype={
$0(){var w=this.a
w.r=this.b
w.a_2()},
$S:0}
C.dUV.prototype={
$1(d){var w=this.a
return w.m(new C.dUL(w,d))},
$S:6}
C.dUL.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dUW.prototype={
$1(d){var w=this.a
return w.m(new C.dUK(w,d))},
$S:6}
C.dUK.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.dUX.prototype={
$0(){var w=this.a
return w.m(new C.dUJ(w))},
$S:0}
C.dUJ.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.dUY.prototype={
$0(){var w=this.a
return w.m(new C.dUI(w))},
$S:0}
C.dUI.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
C.dUZ.prototype={
$0(){var w=this.a
return w.m(new C.dUH(w))},
$S:0}
C.dUH.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.dau.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new B.x((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1877}
C.eol.prototype={
$0(){return C.wS(this.b,this.a.d,"seasons-moon")},
$S:0}
C.eom.prototype={
$0(){var w=this.a
return w.m(new C.eok(w))},
$S:0}
C.eok.prototype={
$0(){return this.a.f="seasons"},
$S:0}
C.eon.prototype={
$0(){var w=this.a
return w.m(new C.eoj(w))},
$S:0}
C.eoj.prototype={
$0(){return this.a.f="moon"},
$S:0}
C.eoo.prototype={
$0(){var w=this.a
return w.m(new C.eoi(w))},
$S:0}
C.eoi.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.eop.prototype={
$0(){var w=this.a
return w.m(new C.eoh(w))},
$S:0}
C.eoh.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
C.eoq.prototype={
$1(d){var w=this.a
return w.m(new C.eog(w,d))},
$S:6}
C.eog.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eor.prototype={
$1(d){var w=this.a
return w.m(new C.eof(w,d))},
$S:6}
C.eof.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eos.prototype={
$1(d){var w=this.a
return w.m(new C.eoe(w,d))},
$S:6}
C.eoe.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eot.prototype={
$1(d){var w=this.a
return w.m(new C.eod(w,d))},
$S:6}
C.eod.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=C.aLw.prototype
w.bvn=w.q
w=C.aKG.prototype
w.buv=w.q
w=C.aKH.prototype
w.buw=w.q
w=C.aKL.prototype
w.buA=w.q
w=C.aMm.prototype
w.bwk=w.q
w=C.aLu.prototype
w.bvl=w.q
w=C.aLD.prototype
w.bvu=w.q
w=C.aLI.prototype
w.bvz=w.q
w=C.axf.prototype
w.brE=w.q
w=C.axg.prototype
w.brF=w.q
w=C.aJ9.prototype
w.bsV=w.q
w=C.aKU.prototype
w.buJ=w.q
w=C.aKI.prototype
w.bux=w.q
w=C.aKZ.prototype
w.buP=w.q
w=C.aLq.prototype
w.bvh=w.q
w=C.aLQ.prototype
w.bvH=w.q
w=C.aL3.prototype
w.buV=w.q
w=C.aL4.prototype
w.buW=w.q
w=C.aL5.prototype
w.buX=w.q
w=C.aLz.prototype
w.bvq=w.q
w=C.aLC.prototype
w.bvt=w.q
w=C.aKF.prototype
w.buu=w.q
w=C.aL1.prototype
w.buS=w.q
w=C.aLy.prototype
w.bvp=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(C.aDO.prototype,"gaw5","c3F",1)
var r
v(r=C.aCj.prototype,"gcbN","cbO",42)
w(r,"gc4d","aY0",1)
w(C.aCl.prototype,"gc5V","c5W",1)
u(C.aCC.prototype,"gc60","c61",25)
w(r=C.aGO.prototype,"gcv5","cv6",1)
w(r,"gcix","afY",1)
w(r,"gcgc","cgd",1)
w(r,"gc6_","adD",3)
w(r=C.aDN.prototype,"gbG8","a99",3)
w(r,"gcfu","b0f",1)
w(r,"gcje","ag5",3)
t(r,"gc63","adE",3)
w(C.aE2.prototype,"gbXw","bXx",1)
t(r=C.a49.prototype,"gBm","a8",1)
v(r,"gcS8","amV",0)
v(r,"gcOE","LF",0)
w(r,"gcUk","bhy",1)
s(C.ain.prototype,"gc6o",0,5,null,["$5"],["qo"],43,0,0)
w(r=C.aCO.prototype,"gc6p","c6q",1)
w(r,"gcm1","ags",3)
w(r,"gcc2","aeL",3)
w(r,"gcta","ahy",3)
w(r=C.aEf.prototype,"gc7B","c7C",1)
t(r,"gc7z","aZc",1)
w(C.aDB.prototype,"gbIZ","arY",1)
t(C.aDU.prototype,"gc7D","c7E",1)
v(r=C.aCZ.prototype,"gc8i","c8j",57)
w(r,"gbO3","bO4",1)
w(r=C.aD_.prototype,"gcvy","cvz",1)
w(r,"gc8n","c8o",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.ajA,C.G1,C.uS,C.aRr,C.a2O,C.b9s,C.c0L,C.y8,C.Cj,C.nm,C.ba9,C.AA,C.brN,C.q4,C.qM,C.Cn,C.Z0,C.aeq,C.a0e,C.Cx,C.abn,C.abD,C.adw,C.FN,C.bkE,C.PR,C.eb,C.tx,C.aa2,C.ab9,C.a49,C.mz,C.baa,C.fN,C.m6,C.bt6,C.aHE,C.qE,C.aaP,C.aaQ,C.v5,C.P5,C.y6,C.P4,C.bt1,C.Pz,C.aev])
u(B.hZ,[C.fuM,C.fkq,C.frx,C.fry,C.fuJ,C.fuK,C.e7i,C.e7B,C.elQ,C.eln,C.elo,C.elp,C.elq,C.elr,C.els,C.elt,C.elu,C.ell,C.elm,C.elk,C.elL,C.elM,C.elN,C.dEJ,C.dEL,C.dEO,C.dEZ,C.c0M,C.c0N,C.fef,C.feg,C.feh,C.feo,C.fep,C.feq,C.dH3,C.dGL,C.dH4,C.dGG,C.dGB,C.dGD,C.dGJ,C.dGW,C.dGU,C.dGV,C.dGT,C.dGQ,C.dGS,C.eVL,C.eVs,C.eVz,C.eVI,C.eVm,C.dhi,C.dhj,C.dhf,C.dhg,C.dhh,C.dhk,C.dhl,C.dhm,C.dhn,C.dho,C.dhp,C.dhq,C.dhr,C.dhs,C.ekM,C.ekN,C.ekO,C.ekP,C.ekK,C.ekL,C.elg,C.ekT,C.ekV,C.ekF,C.elc,C.ela,C.elb,C.el9,C.el8,C.ekH,C.ewX,C.ewV,C.ewJ,C.ewN,C.ewI,C.ewO,C.ewP,C.ewT,C.eD7,C.eDd,C.dGz,C.dGh,C.dGq,C.dGr,C.dGw,C.dGx,C.bLC,C.bLN,C.bLI,C.bLO,C.bLQ,C.bLD,C.bLB,C.bLV,C.bLJ,C.bLM,C.bLL,C.bLK,C.bGp,C.fGp,C.fGs,C.fGq,C.bG6,C.bG1,C.bG0,C.bGo,C.bGg,C.bGh,C.bGf,C.bGi,C.bFR,C.bFT,C.bFP,C.bFQ,C.bFH,C.bFI,C.fer,C.fes,C.fet,C.fee,C.feu,C.fed,C.fev,C.fei,C.fec,C.fej,C.feb,C.fek,C.fea,C.fel,C.fe8,C.fe9,C.fem,C.fe6,C.fe7,C.fen,C.fe5,C.dRB,C.dRC,C.dRr,C.dRn,C.dRA,C.dRF,C.cBY,C.fL7,C.fL8,C.cfJ,C.eHx,C.dRc,C.dRd,C.dRe,C.dRg,C.ef7,C.eCQ,C.eCZ,C.eCV,C.eCX,C.ee5,C.ee6,C.ee7,C.fOX,C.csF,C.dWc,C.dVC,C.dVB,C.dVN,C.dVO,C.dVM,C.dVP,C.dW6,C.dW7,C.dW8,C.eDG,C.ewk,C.ewl,C.ewm,C.ewr,C.ews,C.ewb,C.eY7,C.eY8,C.dWJ,C.dWC,C.dWE,C.dWF,C.dWG,C.dWH,C.dWe,C.eWg,C.dEE,C.dEs,C.dEr,C.dEq,C.dEw,C.dV_,C.dUT,C.dUU,C.dUV,C.dUW,C.dau,C.eoq,C.eor,C.eos,C.eot])
u(B.kj,[C.fuL,C.e7n,C.e7l,C.elw,C.elJ,C.dGC,C.dGZ,C.dMW,C.eVO,C.eVP,C.eVr,C.eVE,C.eVF,C.eVA,C.eVG,C.eVl,C.ekI,C.ekJ,C.elf,C.el7,C.ekX,C.eD6,C.bLP,C.bLR,C.bLT,C.bLE,C.bLG,C.bGq,C.cl7,C.fGr,C.bG_,C.bGm,C.bGl,C.dRz,C.cBZ,C.dNQ,C.dNO,C.dNI,C.cfM,C.dFc,C.dF7,C.ef9,C.dVZ,C.dVz,C.ddl,C.eDL,C.ewo,C.ewa,C.dWf,C.dWh,C.dWd,C.dEu])
u(B.ag,[C.Vi,C.VF,C.Uc,C.Uh,C.Ni,C.aGN,C.VE,C.VT,C.W3,C.Ug,C.ail,C.UT,C.awX,C.UC,C.W9,C.V_,C.Ud,C.US,C.Vz,C.VJ,C.W2,C.Vy,C.V5,C.W5,C.VS,C.V6,C.VK,C.Ub,C.V3,C.VG])
u(B.ah,[C.bjc,C.aLw,C.aKG,C.aKL,C.aCC,C.aMm,C.aLu,C.aLD,C.aLI,C.biA,C.axf,C.bwc,C.aJ9,C.aKU,C.aLQ,C.aKZ,C.aKI,C.biJ,C.aDB,C.aDU,C.bjT,C.aLq,C.aL3,C.bjX,C.aLC,C.aL5,C.aLz,C.aKF,C.aL1,C.aLy])
u(B.j9,[C.e7g,C.e7h,C.e7t,C.e7u,C.e7p,C.e7o,C.e7q,C.e7m,C.e7r,C.e7k,C.e7s,C.e7j,C.e7x,C.e7w,C.e7y,C.e7v,C.e7z,C.e7A,C.e7C,C.elP,C.elR,C.elS,C.ely,C.elx,C.elv,C.elE,C.elF,C.elB,C.elG,C.elA,C.elH,C.elI,C.elz,C.elK,C.elD,C.elO,C.elC,C.dF5,C.dF4,C.dEI,C.dF6,C.dEK,C.dEM,C.dEN,C.dEP,C.dEF,C.dEG,C.dEH,C.dEW,C.dEX,C.dEY,C.dEV,C.dF_,C.dEU,C.dF0,C.dET,C.dF1,C.dES,C.dF2,C.dER,C.dF3,C.dEQ,C.dGI,C.dGH,C.dGM,C.dGE,C.dGF,C.dGN,C.dGO,C.dGP,C.dGK,C.dGA,C.dGY,C.dGX,C.dH_,C.dH0,C.dH1,C.dGR,C.dH2,C.cMk,C.dMU,C.dMT,C.dMV,C.feG,C.feH,C.feI,C.feJ,C.feK,C.feL,C.feM,C.feN,C.feO,C.feP,C.eVN,C.eVM,C.eVu,C.eVt,C.eVp,C.eVo,C.eVq,C.eVn,C.eVC,C.eVB,C.eVD,C.eVv,C.eVH,C.eVy,C.eVJ,C.eVx,C.eVK,C.eVw,C.ekR,C.ekG,C.ekQ,C.ekC,C.ekS,C.ekU,C.ekD,C.ekE,C.ele,C.eld,C.el4,C.el5,C.el6,C.el0,C.el1,C.el_,C.el2,C.ekZ,C.el3,C.ekY,C.ekW,C.dhe,C.ewW,C.ewy,C.ewx,C.ewH,C.ewQ,C.ewG,C.ewR,C.ewF,C.ewS,C.ewE,C.ewD,C.ewU,C.ewC,C.ewK,C.ewB,C.ewL,C.ewA,C.ewM,C.ewz,C.eD5,C.eD4,C.eD8,C.eD3,C.eD9,C.eD2,C.eDa,C.eD1,C.eDb,C.eD0,C.eDc,C.eD_,C.dGy,C.dGp,C.dGo,C.dGs,C.dGn,C.dGt,C.dGm,C.dGu,C.dGl,C.dGv,C.dGk,C.dGj,C.dGi,C.bLS,C.bLU,C.bLF,C.bLH,C.bG3,C.bG4,C.bG2,C.bG5,C.bG7,C.bFU,C.bFV,C.bFW,C.bFX,C.bFY,C.bFZ,C.bGn,C.bFx,C.bGd,C.bGe,C.bGb,C.bGc,C.bG9,C.bGa,C.bGj,C.bG8,C.bGk,C.bFy,C.bFS,C.bFE,C.bFF,C.bFD,C.bFG,C.bFC,C.bFJ,C.bFK,C.bFL,C.bFM,C.bFB,C.bFN,C.bFA,C.bFO,C.bFz,C.dRs,C.dRD,C.dRE,C.dRq,C.dRp,C.dRo,C.dRx,C.dRv,C.dRw,C.dRy,C.dRt,C.dRu,C.dRG,C.dRH,C.dRI,C.dRJ,C.dRK,C.dNR,C.dNP,C.dNN,C.dNM,C.dNL,C.dNK,C.dNJ,C.dNF,C.dNE,C.dNH,C.dNG,C.feX,C.feY,C.feZ,C.ff_,C.ff0,C.ff1,C.ff2,C.ff3,C.cfL,C.cfK,C.eHy,C.eHu,C.eHt,C.eHw,C.eHv,C.dTG,C.dTH,C.dTB,C.dTD,C.dTE,C.dTC,C.dTF,C.dFd,C.dFa,C.dF9,C.dFb,C.dF8,C.dRb,C.dRa,C.dR9,C.dR8,C.dRf,C.dR7,C.dR6,C.dRh,C.dR5,C.dRi,C.dR4,C.dRj,C.dRk,C.dR3,C.ef3,C.ef4,C.ef2,C.ef5,C.ef1,C.ef8,C.efa,C.ef6,C.efb,C.eoZ,C.ep_,C.eoX,C.eoY,C.eoW,C.ep0,C.ep1,C.ep2,C.ep3,C.eCU,C.eCW,C.eCT,C.eCS,C.eCY,C.eCR,C.ee8,C.ee9,C.ee1,C.ee0,C.ee2,C.ee_,C.ee3,C.edZ,C.ee4,C.edY,C.edX,C.edW,C.edV,C.csG,C.csH,C.fOW,C.csC,C.csB,C.csI,C.csD,C.csE,C.cfG,C.dWb,C.dVF,C.dVD,C.dVE,C.dVA,C.dVY,C.dVG,C.dVH,C.dW_,C.dVL,C.dW3,C.dVX,C.dW4,C.dVW,C.dW5,C.dVV,C.dVU,C.dVT,C.dVS,C.dW9,C.dVR,C.dWa,C.dVQ,C.dW0,C.dVK,C.dW1,C.dVJ,C.dW2,C.dVI,C.dVy,C.dVx,C.ddk,C.feQ,C.feR,C.feS,C.feT,C.feU,C.feV,C.feW,C.eDJ,C.eDK,C.eDI,C.eDH,C.ewc,C.ewn,C.ewp,C.ewj,C.ewq,C.ewi,C.ewh,C.ewt,C.ewg,C.ewu,C.ewf,C.ewv,C.ewe,C.eww,C.ewd,C.ew9,C.ew8,C.eY6,C.dWg,C.dWv,C.dWm,C.dWw,C.dWl,C.dWx,C.dWu,C.dWB,C.dWt,C.dWs,C.dWD,C.dWr,C.dWq,C.dWp,C.dWo,C.dWI,C.dWn,C.dWy,C.dWk,C.dWz,C.dWj,C.dWA,C.dWi,C.ep6,C.ep7,C.ep5,C.ep8,C.ep4,C.dEt,C.dEp,C.dEx,C.dEo,C.dEy,C.dEn,C.dEz,C.dEm,C.dEA,C.dEl,C.dEB,C.dEk,C.dEC,C.dEj,C.dED,C.dEi,C.dEv,C.dEh,C.dUQ,C.dUR,C.dUP,C.dUS,C.dUO,C.dUN,C.dUM,C.dUL,C.dUK,C.dUX,C.dUJ,C.dUY,C.dUI,C.dUZ,C.dUH,C.eol,C.eom,C.eok,C.eon,C.eoj,C.eoo,C.eoi,C.eop,C.eoh,C.eog,C.eof,C.eoe,C.eod])
t(C.bwm,C.aLw)
t(C.aDO,C.bwm)
u(B.mL,[C.bgi,C.bas,C.brb,C.b9a,C.bpQ,C.bph,C.b9P,C.bpj,C.btg,C.bgg,C.br6,C.ain,C.b8o,C.buh,C.aej,C.but,C.bpi,C.bkF,C.beM,C.br4,C.ba0,C.bqD,C.b9p,C.beD,C.bpT])
t(C.aKH,C.aKG)
t(C.aCj,C.aKH)
t(C.bwa,C.aKL)
t(C.aCl,C.bwa)
u(B.ma,[C.Kl,C.a01,C.Jh])
u(B.at,[C.bqd,C.aeA,C.ads,C.Q_,C.bqH,C.a81,C.bcz,C.b6a,C.eV,C.h8,C.b6b,C.iS,C.Fe])
t(C.aGO,C.aMm)
t(C.bgf,B.oO)
t(C.aDN,C.aLu)
t(C.bjL,C.aLD)
t(C.aE2,C.aLI)
t(C.axg,C.axf)
t(C.aim,C.axg)
t(C.aCO,C.bwc)
t(C.b8p,C.aJ9)
t(C.biH,C.aKU)
t(C.bwt,C.aLQ)
t(C.aEf,C.bwt)
t(C.bwd,C.aKZ)
t(C.biP,C.bwd)
t(C.bw9,C.aKI)
t(C.bis,C.bw9)
t(C.bwl,C.aLq)
t(C.bjo,C.bwl)
t(C.aL4,C.aL3)
t(C.aCZ,C.aL4)
t(C.bwq,C.aLC)
t(C.bjK,C.bwq)
t(C.bwf,C.aL5)
t(C.aD_,C.bwf)
t(C.bwo,C.aLz)
t(C.bjH,C.bwo)
t(C.bw8,C.aKF)
t(C.bir,C.bw8)
t(C.bwe,C.aL1)
t(C.biS,C.bwe)
t(C.bwn,C.aLy)
t(C.bjG,C.bwn)
w(C.aLw,B.cn)
w(C.bwm,C.qE)
w(C.aKG,B.cn)
w(C.aKH,C.qE)
w(C.aKL,B.cn)
w(C.bwa,C.qE)
w(C.aMm,B.eS)
w(C.aLu,B.cn)
w(C.aLD,B.cn)
w(C.aLI,B.cn)
w(C.axf,B.cn)
w(C.axg,C.qE)
w(C.aJ9,B.cn)
v(C.bwc,B.ew)
w(C.aKU,B.cn)
w(C.aKI,B.cn)
w(C.bw9,C.qE)
w(C.aKZ,B.cn)
w(C.bwd,C.qE)
w(C.aLq,B.cn)
w(C.bwl,C.qE)
w(C.aLQ,B.cn)
w(C.bwt,C.qE)
w(C.aL3,B.cn)
w(C.aL4,C.qE)
w(C.aL5,B.cn)
w(C.bwf,C.qE)
w(C.aLz,B.cn)
w(C.bwo,C.qE)
w(C.aLC,B.cn)
w(C.bwq,C.qE)
w(C.aKF,B.cn)
w(C.bw8,C.qE)
w(C.aL1,B.cn)
w(C.bwe,C.qE)
w(C.aLy,B.cn)
w(C.bwn,C.qE)})()
B.k_(b.typeUniverse,JSON.parse('{"Vi":{"ag":[],"t":[]},"bjc":{"ah":["Vi"]},"VF":{"ag":[],"t":[]},"aDO":{"ah":["VF"]},"bgi":{"aC":[]},"Uc":{"ag":[],"t":[]},"aCj":{"ah":["Uc"]},"Uh":{"ag":[],"t":[]},"aCl":{"ah":["Uh"]},"bas":{"aC":[]},"aeA":{"at":[],"t":[]},"ads":{"at":[],"t":[]},"aGN":{"ag":[],"t":[]},"Ni":{"ag":[],"t":[]},"aCC":{"ah":["Ni"]},"bqd":{"at":[],"t":[]},"Q_":{"at":[],"t":[]},"brb":{"aC":[]},"bqH":{"at":[],"t":[]},"b9a":{"aC":[]},"aGO":{"ah":["aGN"]},"bpQ":{"aC":[]},"bph":{"aC":[]},"b9P":{"aC":[]},"bpj":{"aC":[]},"btg":{"aC":[]},"VE":{"ag":[],"t":[]},"bgf":{"aC":[]},"aDN":{"ah":["VE"]},"bgg":{"aC":[]},"VT":{"ag":[],"t":[]},"W3":{"ag":[],"t":[]},"bjL":{"ah":["VT"]},"br6":{"aC":[]},"aE2":{"ah":["W3"]},"Ug":{"ag":[],"t":[]},"biA":{"ah":["Ug"]},"ain":{"aC":[]},"ail":{"ag":[],"t":[]},"aim":{"ah":["ail"]},"UT":{"ag":[],"t":[]},"awX":{"ag":[],"t":[]},"aCO":{"ah":["UT"],"ew":[]},"b8p":{"ah":["awX"]},"b8o":{"aC":[]},"UC":{"ag":[],"t":[]},"biH":{"ah":["UC"]},"buh":{"aC":[]},"aej":{"aC":[]},"a81":{"at":[],"t":[]},"W9":{"ag":[],"t":[]},"V_":{"ag":[],"t":[]},"Ud":{"ag":[],"t":[]},"US":{"ag":[],"t":[]},"Vz":{"ag":[],"t":[]},"VJ":{"ag":[],"t":[]},"W2":{"ag":[],"t":[]},"Vy":{"ag":[],"t":[]},"aEf":{"ah":["W9"]},"but":{"aC":[]},"biP":{"ah":["V_"]},"bpi":{"aC":[]},"bis":{"ah":["Ud"]},"biJ":{"ah":["US"]},"bkF":{"aC":[]},"aDB":{"ah":["Vz"]},"aDU":{"ah":["VJ"]},"bjT":{"ah":["W2"]},"bjo":{"ah":["Vy"]},"bcz":{"at":[],"t":[]},"b6a":{"at":[],"t":[]},"eV":{"at":[],"t":[]},"h8":{"at":[],"t":[]},"b6b":{"at":[],"t":[]},"iS":{"at":[],"t":[]},"Fe":{"at":[],"t":[]},"V5":{"ag":[],"t":[]},"aCZ":{"ah":["V5"]},"beM":{"aC":[]},"W5":{"ag":[],"t":[]},"bjX":{"ah":["W5"]},"VS":{"ag":[],"t":[]},"V6":{"ag":[],"t":[]},"VK":{"ag":[],"t":[]},"bjK":{"ah":["VS"]},"br4":{"aC":[]},"aD_":{"ah":["V6"]},"ba0":{"aC":[]},"bjH":{"ah":["VK"]},"bqD":{"aC":[]},"Ub":{"ag":[],"t":[]},"V3":{"ag":[],"t":[]},"VG":{"ag":[],"t":[]},"bir":{"ah":["Ub"]},"b9p":{"aC":[]},"biS":{"ah":["V3"]},"beD":{"aC":[]},"bjG":{"ah":["VG"]},"bpT":{"aC":[]}}'))
B.Km(b.typeUniverse,JSON.parse('{"qE":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.ax
return{x:w("lW<v?>"),e8:w("d5"),G:w("v"),J:w("bt<m,K>"),R:w("dC<m>"),Z:w("a1"),M:w("O<dd>"),f5:w("O<a2K>"),h:w("O<a2O>"),V:w("O<ac>"),O:w("O<v>"),ey:w("O<S>"),dh:w("O<HB>"),aJ:w("O<aA<aD>>"),w:w("O<a1>"),m:w("O<ai<v>>"),B:w("O<ai<HB>>"),gO:w("O<ai<ai<K>>>"),bj:w("O<ai<m>>"),b:w("O<ai<K>>"),fA:w("O<ai<H?>>"),C:w("O<a5<m,aD>>"),g:w("O<x>"),bz:w("O<tx>"),ds:w("O<a8o>"),v:w("O<hu>"),L:w("O<+(m,m)>"),fT:w("O<+(K,t)>"),I:w("O<+(H,m)>"),u:w("O<+(H,H)>"),c:w("O<+(m,m,a1)>"),e:w("O<+(m,K,K,H)>"),o:w("O<+(m,H,m,H)>"),d:w("O<+(m,m,K,K,a5<m,K>)>"),_:w("O<uS>"),q:w("O<cS>"),fQ:w("O<aa2>"),s:w("O<m>"),cF:w("O<ar>"),X:w("O<wg>"),D:w("O<aaP>"),p:w("O<t>"),bL:w("O<ab9>"),E:w("O<ll>"),a_:w("O<abn>"),cB:w("O<nm>"),ba:w("O<abD>"),d9:w("O<Pz>"),eW:w("O<Cn>"),fY:w("O<Z0>"),ed:w("O<PR>"),g4:w("O<bkE>"),ac:w("O<adw>"),cd:w("O<Cx>"),fr:w("O<aeq>"),e4:w("O<a0e>"),r:w("O<aev>"),au:w("O<aHE>"),f7:w("O<R>"),n:w("O<K>"),t:w("O<H>"),dS:w("O<aC?>"),fs:w("O<tx?>"),bN:w("O<H?>"),gJ:w("cv<aim>"),z:w("cv<ah<ag>>"),bF:w("ai<v>"),gl:w("ai<S>"),ew:w("ai<aD>"),j:w("ai<@>"),a:w("a5<m,@>"),f:w("a5<@,@>"),bd:w("M<eb,m>"),dv:w("M<m,m>"),fR:w("M<+(K,t),t>"),l:w("iC"),gA:w("zi"),gD:w("vT"),P:w("cp"),K:w("aD"),W:w("tx"),F:w("eb"),g7:w("C4"),N:w("m"),bO:w("ar"),k:w("l1"),Y:w("bp<K>"),cL:w("aaQ"),gj:w("cx<m>"),aC:w("cx<H?>"),dg:w("ea<qM>"),U:w("b9s"),a2:w("Cj"),f3:w("qM"),es:w("FN"),gV:w("mY"),y:w("R"),i:w("K"),A:w("@"),S:w("H"),Q:w("ai<@>?"),cK:w("aD?"),az:w("pY?"),T:w("m?"),cD:w("K?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aXi=new B.dd(0,0.1)
D.aYO=new C.aRr(0,0,0)
D.Kr=new C.aRr(0,0.5,0)
D.aZm=new B.az(A.bk,1,A.q,-1)
D.b_P=new B.aX(0,1/0,0,290)
D.b_W=new B.aX(16,1/0,16,1/0)
D.b19=new B.o(A.bd,null,null,null,null,null,A.a5)
D.f4j=new B.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFU=new B.y("\u26a1",null,D.f4j,null,null,null,null,null,null,null,null,null)
D.b5B=new B.co(A.A,null,null,D.fFU,null)
D.aQF=new B.G(!0,A.c_,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvI=new B.y("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aQF,null,A.L,null,null,null,null,null,null,null)
D.eb8=new B.D(A.nX,D.fvI,null)
D.b5K=new B.co(A.A,null,null,D.eb8,null)
D.fzw=new B.y("Press Drop! and watch them fall from 20 metres.",null,A.kJ,null,A.L,null,null,null,null,null,null,null)
D.ebc=new B.D(A.nX,D.fzw,null)
D.b64=new B.co(A.A,null,null,D.ebc,null)
D.ffe=new B.G(!0,A.k0,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEj=new B.y("Draw anywhere",null,D.ffe,null,null,null,null,null,null,null,null,null)
D.b68=new B.co(A.A,null,null,D.fEj,null)
D.flT=new B.y("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aQF,null,A.L,null,null,null,null,null,null,null)
D.ebV=new B.D(A.FE,D.flT,null)
D.b6r=new B.co(A.A,null,null,D.ebV,null)
D.acs=new B.v(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b93=new B.v(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b9P=new B.v(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.Wd=new B.v(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b9U=new B.v(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b9Z=new B.v(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.ba3=new B.v(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bb9=new B.v(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.bbe=new B.v(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.bbA=new B.v(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.bcM=new B.v(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.adO=new B.v(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.bdf=new B.v(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.AG=new B.v(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.be8=new B.v(1,1,0.9686274509803922,0.8,A.t)
D.beN=new B.v(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.aep=new B.v(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.bf7=new B.v(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.bfo=new B.v(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.bfC=new B.v(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.aeK=new B.v(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.X4=new B.v(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bh9=new B.v(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bhc=new B.v(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bhg=new B.v(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.bhp=new B.v(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.afc=new B.v(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.bhO=new B.v(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.Lu=new B.v(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.biW=new B.v(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.bj3=new B.v(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bjh=new B.v(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.bjl=new B.v(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bjt=new B.v(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.vn=new B.v(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.afY=new B.v(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.bkB=new B.v(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.bll=new B.v(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.blQ=new B.v(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.ago=new B.v(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.bqR=new B.bb(11e6)
D.ahl=new B.Q(0,0,9,0)
D.bss=new B.Q(10,10,10,6)
D.bsA=new B.Q(10,34,10,26)
D.bsI=new B.Q(10,6,10,2)
D.bsK=new B.Q(10,8,0,10)
D.btl=new B.Q(12,8,8,8)
D.btq=new B.Q(14,0,14,22)
D.bts=new B.Q(14,0,14,30)
D.ahS=new B.Q(14,10,8,12)
D.bup=new B.Q(16,4,16,28)
D.buz=new B.Q(16,8,16,12)
D.bwE=new B.Q(26,12,26,58)
D.bxs=new B.Q(4,4,6,2)
D.bxu=new B.Q(4,4,8,2)
D.by3=new B.Q(8,14,8,12)
D.bya=new B.Q(8,40,8,30)
D.bye=new B.Q(8,6,16,0)
D.byf=new B.Q(8,6,8,8)
D.byA=new B.Q(0,0,1.5,0)
D.aYA=new B.H_(26,"saturation")
D.byS=new B.z_(A.cV,D.aYA,null,A.acq)
D.fkZ=new B.y("REACTION LAB",null,X.aRf,null,null,null,null,A.a2,null,1,null,null)
D.byY=new B.bB(1,A.bf,D.fkZ,null)
D.fc5=new B.G(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo9=new B.y("CORE PROTOCOL",null,D.fc5,null,null,null,null,null,null,null,null,null)
D.bzb=new B.bB(1,A.bf,D.fo9,null)
D.foT=new B.y("\ud83d\udce2 NGMY Ads",null,A.qv,null,null,null,null,A.eH,null,1,null,null)
D.bzU=new B.bB(1,A.bf,D.foT,null)
D.fjI=new B.y("Wire selected",null,A.hq,null,null,null,null,null,null,null,null,null)
D.bA8=new B.bB(1,A.bf,D.fjI,null)
D.al2=new B.a1(62712,"MaterialIcons",!1)
D.bFz=new B.a1(62878,"MaterialIcons",!1)
D.bFC=new B.a1(62908,"MaterialIcons",!1)
D.bFD=new B.a1(62931,"MaterialIcons",!1)
D.bFG=new B.a1(62951,"MaterialIcons",!1)
D.bFX=new B.a1(63070,"MaterialIcons",!1)
D.NB=new B.a1(63128,"MaterialIcons",!1)
D.Go=new B.a1(63726,"MaterialIcons",!1)
D.bHg=new B.a1(983122,"MaterialIcons",!1)
D.bHu=new B.a1(983247,"MaterialIcons",!1)
D.bHG=new B.a1(983415,"MaterialIcons",!1)
D.amm=new B.a1(983467,"MaterialIcons",!1)
D.bHW=new B.a1(983616,"MaterialIcons",!1)
D.bIo=new B.a1(984561,"MaterialIcons",!1)
D.bIZ=new B.ae(A.rd,24,A.aS,null,null,null)
D.bJJ=new B.ae(A.NW,null,A.ad,null,null,null)
D.bKg=new B.ae(A.o1,21,A.ad,null,null,null)
D.bHf=new B.a1(983117,"MaterialIcons",!1)
D.bLD=new B.ae(D.bHf,28,A.c,null,null,null)
D.bLT=new B.ae(A.jp,18,null,null,null,null)
D.bNF=new B.ae(A.ef,21,A.cs,null,null,null)
D.bNU=new B.ae(A.o2,null,A.ad,null,null,null)
D.bO3=new B.ae(A.a0W,21,A.ad,null,null,null)
D.bOT=new B.ae(A.eF,17,A.ad,null,null,null)
D.anI=new B.ae(A.eF,19,null,null,null,null)
D.qb=new B.ae(A.vQ,21,A.ad,null,null,null)
D.bQp=new B.ae(A.Nr,null,A.ad,null,null,null)
D.bRz=new B.ae(A.jp,21,A.ad,null,null,null)
D.bSq=new B.ae(A.ff,20,A.aA,null,null,null)
D.bT5=new B.ae(A.e0,null,A.aS,null,null,null)
D.bTq=new B.ae(A.nj,null,A.aA,null,null,null)
D.dfH=w([A.d5,A.d0,A.d5],x.O)
D.bWq=new B.a8(A.a3,A.a8,A.x,D.dfH,null,null)
D.cTY=w([A.bO,A.bn],x.O)
D.bWy=new B.a8(A.b1,A.b6,A.x,D.cTY,null,null)
D.bWK=new B.a8(A.b1,A.b6,A.x,A.axQ,null,null)
D.aoJ=new B.a8(A.b1,A.b6,A.x,L.a2E,null,null)
D.cRL=w([A.oB,A.ic],x.O)
D.bXv=new B.a8(A.b1,A.b6,A.x,D.cRL,null,null)
D.cTG=w([A.e2,A.av],x.O)
D.aoQ=new B.a8(A.b1,A.b6,A.x,D.cTG,null,null)
D.d9M=w([A.dv,A.iZ,A.bn],x.O)
D.bXO=new B.a8(A.a3,A.a8,A.x,D.d9M,null,null)
D.d9S=w([A.h6,A.co],x.O)
D.bY8=new B.a8(A.b1,A.b6,A.x,D.d9S,null,null)
D.cqq=w([A.bO,A.dv],x.O)
D.bYh=new B.a8(A.a3,A.a8,A.x,D.cqq,null,null)
D.ayx=w([A.e2,K.mY],x.O)
D.bYo=new B.a8(A.b1,A.b6,A.x,D.ayx,null,null)
D.bYF=new B.a8(A.b1,A.b6,A.x,H.apb,null,null)
D.bZs=new B.a8(A.ay,A.aC,A.x,A.a2B,null,null)
D.d1T=w([A.av,A.w],x.O)
D.bZD=new B.a8(A.b1,A.b6,A.x,D.d1T,null,null)
D.bZG=new B.a8(A.b1,A.b6,A.x,T.axV,null,null)
D.bjp=new B.v(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bkb=new B.v(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cDa=w([A.LK,D.bjp,D.bkb],x.O)
D.bZQ=new B.a8(A.b1,A.b6,A.x,D.cDa,null,null)
D.cqK=w([A.d8,A.fU],x.O)
D.c_5=new B.a8(A.b1,A.b6,A.x,D.cqK,null,null)
D.c_A=w([0,2,4,6,7,9,11],x.t)
D.c_O=w([0,4,7],x.t)
D.c_P=w([0,4,7,12],x.t)
D.c_Q=w([0,4,7,4],x.t)
D.axA=w([A.h4,A.pK],x.O)
D.ax5=w([A.iF,A.cN],x.O)
D.avy=w([A.by,A.dN],x.O)
D.cLI=w([A.aS,A.d8],x.O)
D.cS5=w([A.cs,A.ey],x.O)
D.db4=w([A.c5,A.lL],x.O)
D.av_=w([A.cY,A.k1],x.O)
D.cQG=w([A.bK,A.aJ],x.O)
D.c0a=w([D.axA,D.ax5,A.a2J,D.avy,D.cLI,D.cS5,A.awD,D.db4,D.av_,D.cQG],x.m)
D.c4P=w([120,220,380],x.t)
D.c8z=w([12,16,19,24],x.t)
D.c8J=w([1400,800,450,2400],x.t)
D.cd_=w([0,0.6,1],x.n)
D.ch9=w([250,450,900,1500],x.t)
D.b9f=new B.v(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bjN=new B.v(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bhQ=new B.v(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bn4=new B.v(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bh_=new B.v(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.aug=w([D.b9f,D.bjN,D.bhQ,D.bn4,D.bh_],x.O)
D.eFD=new B.z("type","Typewriter")
D.eyd=new B.z("bounce","Bounce")
D.eGs=new B.z("wave","Wave")
D.eHx=new B.z("zoom","Zoom")
D.cxU=w([D.eFD,D.eyd,D.eGs,A.a6v,H.aMt,D.eHx,H.aMy],x.L)
D.cy7=w([50,25,75],x.t)
D.cDH=w([0,5,10,15,18,20,25],x.t)
D.cLY=w([900,500,250,1600],x.t)
D.cPs=w([0.78,1],x.n)
D.cPv=w([0,2,4,7,9,12,14,16],x.t)
D.cQ1=w([A.by,A.bA,A.ba,A.by],x.O)
D.a2y=w([A.aw,A.bH,A.bd,A.aP,A.nQ],x.O)
D.cRq=w([A.av,A.aw,A.cY,A.bH,A.bd,A.cB,A.c8,A.bA,A.Wj],x.O)
D.a2C=w([0.04,0.17,0.3],x.n)
D.Hc=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.ePw=new C.uS("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.ePC=new C.uS("Medium engine","A good all-rounder.",0.3,0.9)
D.ePB=new C.uS("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Hd=w([D.ePw,D.ePC,D.ePB],x._)
D.enT=new B.z(6,"Easy")
D.eoB=new B.z(8,"Medium")
D.ejP=new B.z(10,"Hard")
D.cSS=w([D.enT,D.eoB,D.ejP],x.I)
D.avW=w([0.55,0.78,1],x.n)
D.cUp=w([0.93,0.975,1],x.n)
D.aw6=w([A.c,A.fT,A.nH,A.av],x.O)
D.fIW=new C.y6("Moon",1737,4291941851)
D.fIT=new C.y6("Earth",6371,4281908728)
D.fIX=new C.y6("Neptune",24622,4284524026)
D.fIY=new C.y6("Saturn",58232,4294829706)
D.fIU=new C.y6("Jupiter",69911,4294677052)
D.fIZ=new C.y6("Sun",696340,4294688548)
D.fJ_=new C.y6("Sirius A",119e4,4290763774)
D.fIR=new C.y6("Arcturus",179e5,4294818420)
D.fIS=new C.y6("Betelgeuse",531e6,4294472049)
D.fIV=new C.y6("UY Scuti",667e6,4293870660)
D.Q5=w([D.fIW,D.fIT,D.fIX,D.fIY,D.fIU,D.fIZ,D.fJ_,D.fIR,D.fIS,D.fIV],B.ax("O<y6>"))
D.eL1=new B.bk("glow","Glow",A.a05)
D.eIF=new B.bk("rainbow","Rainbow",A.nh)
D.eJ1=new B.bk("stars","Stars",A.i6)
D.eIq=new B.bk("sparks","Sparks",A.e0)
D.eKi=new B.bk("fire","Fire",A.vR)
D.cWg=w([D.eL1,D.eIF,D.eJ1,D.eIq,D.eKi],x.c)
D.awa=w([A.bd,A.aw,A.bH,A.d0],x.O)
D.cXf=w([0.2,1],x.n)
D.ePt=new C.uS("Radar","Shows your height above the ground.",0.1,0)
D.ePu=new C.uS("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.ePr=new C.uS("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.awi=w([D.ePt,D.ePu,D.ePr],x._)
D.cYh=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cYw=w([47,100,220,470,1000],x.n)
D.cZ1=w([0,2,4,7,9],x.t)
D.Ih={volts:0}
D.a4k=new B.bt(D.Ih,[3],x.J)
D.IE=new B.e8(["b","battery",0.2,0.3,D.a4k])
D.e6p={on:0}
D.dq7=new B.bt(D.e6p,[1],x.J)
D.Di=new B.e8(["s","switch",0.5,0.3,D.dq7])
D.eND=new B.e8(["l","bulb",0.8,0.3,A.j5])
D.cU4=w([D.IE,D.Di,D.eND],x.d)
D.Dh=new B.cu(["b",0,"s",0])
D.eME=new B.cu(["s",1,"l",0])
D.aMC=new B.cu(["l",1,"b",1])
D.d9Y=w([D.Dh,D.eME,D.aMC],x.o)
D.cTy=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.ej0=new C.mz("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cU4,D.d9Y,D.cTy)
D.aGG={ohms:0}
D.aEg=new B.bt(D.aGG,[220],x.J)
D.eN6=new B.e8(["r","resistor",0.5,0.3,D.aEg])
D.eNS=new B.e8(["d","led",0.8,0.3,A.j5])
D.dd6=w([D.IE,D.eN6,D.eNS],x.d)
D.eM_=new B.cu(["b",0,"r",0])
D.eMy=new B.cu(["r",1,"d",0])
D.eM5=new B.cu(["d",1,"b",1])
D.dlQ=w([D.eM_,D.eMy,D.eM5],x.o)
D.ddv=w(["led","diode","indicator"],x.s)
D.ej7=new C.mz("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dd6,D.dlQ,D.ddv)
D.a5A={level:0}
D.dpu=new B.bt(D.a5A,[0.2],x.J)
D.eNc=new B.e8(["p","pot",0.5,0.3,D.dpu])
D.eNe=new B.e8(["m","motor",0.8,0.3,A.j5])
D.cUm=w([D.IE,D.eNc,D.eNe],x.d)
D.eLZ=new B.cu(["b",0,"p",0])
D.eMu=new B.cu(["p",1,"m",0])
D.eMq=new B.cu(["m",1,"b",1])
D.dhD=w([D.eLZ,D.eMu,D.eMq],x.o)
D.d9F=w(["fan","motor","spin","dimmer"],x.s)
D.eiZ=new C.mz("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cUm,D.dhD,D.d9F)
D.a4h=new B.bt(D.a5A,[0.9],x.J)
D.aMJ=new B.e8(["s","solar",0.25,0.3,D.a4h])
D.aMI=new B.e8(["l","bulb",0.75,0.3,A.j5])
D.cWX=w([D.aMJ,D.aMI],x.d)
D.eMB=new B.cu(["s",0,"l",0])
D.eMp=new B.cu(["l",1,"s",1])
D.cV6=w([D.eMB,D.eMp],x.o)
D.did=w(["solar","sun","without battery","no battery","free"],x.s)
D.ej1=new C.mz("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cWX,D.cV6,D.did)
D.eNV=new B.e8(["c","crank",0.25,0.3,D.a4h])
D.d81=w([D.eNV,D.aMI],x.d)
D.eM2=new B.cu(["c",0,"l",0])
D.eMo=new B.cu(["l",1,"c",1])
D.d8z=w([D.eM2,D.eMo],x.o)
D.d89=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eiY=new C.mz("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d81,D.d8z,D.d89)
D.dpt=new B.bt(D.a5A,[0.7],x.J)
D.eNh=new B.e8(["t","turbine",0.25,0.3,D.dpt])
D.eN4=new B.e8(["m","motor",0.75,0.3,A.j5])
D.d2x=w([D.eNh,D.eN4],x.d)
D.eMM=new B.cu(["t",0,"m",0])
D.eMr=new B.cu(["m",1,"t",1])
D.d1x=w([D.eMM,D.eMr],x.o)
D.d6Q=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eiV=new C.mz("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.d2x,D.d1x,D.d6Q)
D.aEd=new B.bt(D.Ih,[9],x.J)
D.a6C=new B.e8(["b","battery",0.2,0.3,D.aEd])
D.aMH=new B.e8(["r","radio",0.8,0.3,A.j5])
D.diP=w([D.a6C,D.Di,D.aMH],x.d)
D.eMG=new B.cu(["s",1,"r",0])
D.aMD=new B.cu(["r",1,"b",1])
D.c_w=w([D.Dh,D.eMG,D.aMD],x.o)
D.dhq=w(["radio","music","listen"],x.s)
D.ej6=new C.mz("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.diP,D.c_w,D.dhq)
D.dqw=new B.bt(D.Ih,[12],x.J)
D.aMG=new B.e8(["b","battery",0.2,0.3,D.dqw])
D.eNE=new B.e8(["t","tv",0.8,0.3,A.j5])
D.cU6=w([D.aMG,D.Di,D.eNE],x.d)
D.eMH=new B.cu(["s",1,"t",0])
D.aME=new B.cu(["t",1,"b",1])
D.db7=w([D.Dh,D.eMH,D.aME],x.o)
D.diM=w(["tv","television","screen","watch"],x.s)
D.eiS=new C.mz("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cU6,D.db7,D.diM)
D.eNu=new B.e8(["z","buzzer",0.8,0.3,A.j5])
D.cAr=w([D.IE,D.Di,D.eNu],x.d)
D.eMI=new B.cu(["s",1,"z",0])
D.eN_=new B.cu(["z",1,"b",1])
D.cPg=w([D.Dh,D.eMI,D.eN_],x.o)
D.dfN=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.ej3=new C.mz("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cAr,D.cPg,D.dfN)
D.eNd=new B.e8(["h","heater",0.8,0.3,A.j5])
D.d5y=w([D.a6C,D.Di,D.eNd],x.d)
D.eMD=new B.cu(["s",1,"h",0])
D.eMd=new B.cu(["h",1,"b",1])
D.cPY=w([D.Dh,D.eMD,D.eMd],x.o)
D.ckq=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eiT=new C.mz("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d5y,D.cPY,D.ckq)
D.eNG=new B.e8(["s","solar",0.2,0.25,D.a4h])
D.dqA=new B.bt(D.aGG,[100],x.J)
D.eNJ=new B.e8(["r","resistor",0.55,0.25,D.dqA])
D.eNQ=new B.e8(["c","capacitor",0.85,0.25,A.j5])
D.eN9=new B.e8(["q","resistor",0.55,0.6,D.aEg])
D.eNH=new B.e8(["d","led",0.85,0.6,A.j5])
D.daF=w([D.eNG,D.eNJ,D.eNQ,D.eN9,D.eNH],x.d)
D.eMC=new B.cu(["s",0,"r",0])
D.eMx=new B.cu(["r",1,"c",0])
D.eM4=new B.cu(["c",1,"s",1])
D.eM3=new B.cu(["c",0,"q",0])
D.eMw=new B.cu(["q",1,"d",0])
D.eM6=new B.cu(["d",1,"c",1])
D.d_u=w([D.eMC,D.eMx,D.eM4,D.eM3,D.eMw,D.eM6],x.o)
D.d7n=w(["capacitor","store","charge","flash"],x.s)
D.ej5=new C.mz("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.daF,D.d_u,D.d7n)
D.eNk=new B.e8(["b","battery",0.15,0.3,D.a4k])
D.eNW=new B.e8(["l1","bulb",0.5,0.3,A.j5])
D.eNr=new B.e8(["l2","bulb",0.85,0.3,A.j5])
D.cSk=w([D.eNk,D.eNW,D.eNr],x.d)
D.eLY=new B.cu(["b",0,"l1",0])
D.eMl=new B.cu(["l1",1,"l2",0])
D.eMm=new B.cu(["l2",1,"b",1])
D.d3d=w([D.eLY,D.eMl,D.eMm],x.o)
D.dix=w(["series","two bulbs","dim"],x.s)
D.eiW=new C.mz("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cSk,D.d3d,D.dix)
D.e6I={volts:0,charge:1}
D.dqD=new B.bt(D.e6I,[1.5,0],x.J)
D.eNO=new B.e8(["b","battery",0.75,0.3,D.dqD])
D.cRM=w([D.aMJ,D.eNO],x.d)
D.eMA=new B.cu(["s",0,"b",0])
D.eM1=new B.cu(["b",1,"s",1])
D.d_M=w([D.eMA,D.eM1],x.o)
D.d7w=w(["charge","rechargeable","flat","recharge"],x.s)
D.eiU=new C.mz("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cRM,D.d_M,D.d7w)
D.dqv=new B.bt(D.Ih,[4.5],x.J)
D.eNf=new B.e8(["b","battery",0.2,0.3,D.dqv])
D.aMF=new B.e8(["p","phone",0.8,0.3,A.j5])
D.d2n=w([D.eNf,D.Di,D.aMF],x.d)
D.eMF=new B.cu(["s",1,"p",0])
D.a6B=new B.cu(["p",1,"b",1])
D.deM=w([D.Dh,D.eMF,D.a6B],x.o)
D.dgc=w(["phone","charger","usb","mobile"],x.s)
D.ej_=new C.mz("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.d2n,D.deM,D.dgc)
D.eN1=new B.e8(["f","fan",0.8,0.3,A.j5])
D.ccy=w([D.IE,D.eN1],x.d)
D.eLX=new B.cu(["b",0,"f",0])
D.eMb=new B.cu(["f",1,"b",1])
D.cQt=w([D.eLX,D.eMb],x.o)
D.d9E=w(["fan","cool","air","wind"],x.s)
D.ej8=new C.mz("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.ccy,D.cQt,D.d9E)
D.eNy=new B.e8(["b","battery",0.15,0.2,D.a4k])
D.eN2=new B.e8(["a","ammeter",0.5,0.2,A.j5])
D.eN0=new B.e8(["l","bulb",0.85,0.2,A.j5])
D.eNA=new B.e8(["v","voltmeter",0.5,0.6,A.j5])
D.d7Q=w([D.eNy,D.eN2,D.eN0,D.eNA],x.d)
D.eLV=new B.cu(["b",0,"a",0])
D.eLU=new B.cu(["a",1,"l",0])
D.eMO=new B.cu(["v",0,"l",0])
D.eMP=new B.cu(["v",1,"l",1])
D.d_D=w([D.eLV,D.eLU,D.aMC,D.eMO,D.eMP],x.o)
D.dlP=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.ej4=new C.mz("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d7Q,D.d_D,D.dlP)
D.eNZ=new B.e8(["b","battery",0.15,0.2,D.aEd])
D.eNj=new B.e8(["t","tv",0.55,0.2,A.j5])
D.aEe=new B.bt(D.Ih,[5],x.J)
D.eN7=new B.e8(["c","buck",0.4,0.5,D.aEe])
D.eNl=new B.e8(["p","phone",0.8,0.5,A.j5])
D.cYj=w([D.eNZ,D.eNj,D.eN7,D.eNl],x.d)
D.eM0=new B.cu(["b",0,"t",0])
D.aMA=new B.cu(["b",0,"c",0])
D.aMB=new B.cu(["c",1,"p",0])
D.d2k=w([D.eM0,D.aME,D.aMA,D.aMB,D.a6B],x.o)
D.cWx=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eiX=new C.mz("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cYj,D.d2k,D.cWx)
D.eN8=new B.e8(["c","buck",0.5,0.3,D.aEe])
D.cPP=w([D.aMG,D.eN8,D.aMF],x.d)
D.cUw=w([D.aMA,D.aMB,D.a6B],x.o)
D.cnR=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eiR=new C.mz("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cPP,D.cUw,D.cnR)
D.eNp=new B.e8(["d","diode",0.5,0.3,A.j5])
D.d3q=w([D.a6C,D.eNp,D.aMH],x.d)
D.eLW=new B.cu(["b",0,"d",0])
D.eM7=new B.cu(["d",1,"r",0])
D.cCZ=w([D.eLW,D.eM7,D.aMD],x.o)
D.cWd=w(["diode","protect","backwards","one way"],x.s)
D.ej2=new C.mz("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.d3q,D.cCZ,D.cWd)
D.Q9=w([D.ej0,D.ej7,D.eiZ,D.ej1,D.eiY,D.eiV,D.ej6,D.eiS,D.ej3,D.eiT,D.ej5,D.eiW,D.eiU,D.ej_,D.ej8,D.ej4,D.eiX,D.eiR,D.ej2],B.ax("O<mz>"))
D.hbD=new C.G1("Moon",1.62,A.dv,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hbB=new C.G1("Mars",3.71,A.aw,"Mars has about 38 percent of Earth's gravity.")
D.hbE=new C.G1("Mercury",3.7,A.k_,"Mercury is small, so its gravity is like Mars.")
D.hby=new C.G1("Venus",8.87,A.aS,"Venus is almost as heavy as Earth, with strong gravity.")
D.hbA=new C.G1("Earth",9.81,A.aP,"On Earth gravity is strong, and the air also slows you down.")
D.hbC=new C.G1("Neptune",11.15,A.d0,"Neptune pulls a little harder than Earth.")
D.hbz=new C.G1("Jupiter",24.79,A.cY,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rl=w([D.hbD,D.hbB,D.hbE,D.hby,D.hbA,D.hbC,D.hbz],B.ax("O<G1>"))
D.d_s=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a2S=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.d0a=w([0.2,0.5,0.8],x.n)
D.eSG=new B.cS(A.bj,A.J,4)
D.d0y=w([D.eSG],x.q)
D.awO=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aW8=new C.Kl(0,"accordion")
D.cQM=w([A.jr,A.BW,A.BI],x.w)
D.cXK=w(["Mail","SMS","Ad"],x.s)
D.cRh=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.h9Q=new C.AA(D.aW8,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.axA,D.cQM,D.cXK,D.cRh)
D.aa8=new C.Kl(1,"flip")
D.d7h=w([A.q4,A_.GC,A.u8],x.w)
D.d23=w(["Unlock","Verify","Secure"],x.s)
D.cPL=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.h9P=new C.AA(D.aa8,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.ax5,D.d7h,D.d23,D.cPL)
D.aW9=new C.Kl(2,"towers")
D.d0S=w([A.yv,A.q8,A.hO],x.w)
D.d0t=w(["Save","Grow","Earn"],x.s)
D.cDR=w(["","",""],x.s)
D.h9R=new C.AA(D.aW9,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a2J,D.d0S,D.d0t,D.cDR)
D.aa9=new C.Kl(3,"assemble")
D.d8c=w([A.o3,A.hj,A.e0],x.w)
D.cX8=w(["Launch","Charge","Shine"],x.s)
D.d4H=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.h9T=new C.AA(D.aa9,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.avy,D.d8c,D.cX8,D.d4H)
D.aWa=new C.Kl(4,"carousel")
D.d82=w([A.ba,A.f3],x.O)
D.cXT=w([A.o1,A.alA,A.O2],x.w)
D.cSI=w(["Explore","Discover","Learn"],x.s)
D.d2s=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.h9O=new C.AA(D.aWa,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d82,D.cXT,D.cSI,D.d2s)
D.aWb=new C.Kl(5,"burst")
D.d0o=w([A.i1,A.tk],x.O)
D.cRc=w([A.lp,A.mv,A.i5],x.w)
D.cRy=w(["Cheer","Win","Love"],x.s)
D.cTE=w(["Make some noise","First place","Share the joy"],x.s)
D.h9S=new C.AA(D.aWb,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.d0o,D.cRc,D.cRy,D.cTE)
D.awP=w([D.h9Q,D.h9P,D.h9R,D.h9T,D.h9O,D.h9S],B.ax("O<AA>"))
D.eJt=new B.bk("skin","Skin",A.alB)
D.eKO=new B.bk("muscle","Muscles",A.NG)
D.eKw=new B.bk("organ","Organs",A.i5)
D.bFi=new B.a1(62747,"MaterialIcons",!1)
D.eKC=new B.bk("bone","Skeleton",D.bFi)
D.eKU=new B.bk("vessel","Blood vessels",A.qa)
D.d0Y=w([D.eJt,D.eKO,D.eKw,D.eKC,D.eKU],x.c)
D.ePv=new C.uS("Simple legs","Light. Land gently.",0.15,0.2)
D.ePx=new C.uS("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.ePA=new C.uS("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Cp=w([D.ePv,D.ePx,D.ePA],x._)
D.d2C=w([1.77,3.55,7.15,16.7],x.n)
D.d57=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.eF9=new B.z("spiral","Spiral")
D.enQ=new B.z("barred","Barred spiral")
D.ezk=new B.z("elliptical","Elliptical")
D.d5O=w([D.eF9,D.enQ,D.ezk],x.L)
D.eLC=new B.cu(["beat",0.18,0.28,0])
D.eMJ=new B.cu(["burst",0.7,0.2,0])
D.eMU=new B.cu(["delay",0.45,0.5,1])
D.eMt=new B.cu(["ripple",0.75,0.6,3])
D.cWS=w([D.eLC,D.eMJ,D.eMU,D.eMt],x.e)
D.d6E=w([N.lb,L.ID,F.SJ],x.u)
D.h94=new C.FN("First spark","A clock lights a burst and a ripple",D.cWS,D.d6E)
D.eMa=new B.cu(["beat",0.15,0.3,1])
D.eLg=new B.cu(["ripple",0.62,0.15,0])
D.eMQ=new B.cu(["delay",0.4,0.45,0])
D.eLR=new B.cu(["ripple",0.7,0.45,0])
D.eLy=new B.cu(["delay",0.4,0.7,1])
D.eMv=new B.cu(["shake",0.75,0.75,0])
D.djE=w([D.eMa,D.eLg,D.eMQ,D.eLR,D.eLy,D.eMv],x.e)
D.ekQ=new B.z(2,4)
D.aMm=new B.z(4,5)
D.d_i=w([N.lb,L.ID,F.SJ,D.ekQ,D.aMm],x.u)
D.h96=new C.FN("Heartbeat","Two thumps, then a shake",D.djE,D.d_i)
D.eLH=new B.cu(["dice",0.15,0.7,1])
D.eMW=new B.cu(["echo",0.4,0.7,0])
D.eLP=new B.cu(["comet",0.7,0.5,4])
D.eMK=new B.cu(["burst",0.72,0.2,1])
D.eM8=new B.cu(["burst",0.3,0.25,0])
D.eLI=new B.cu(["pop",0.55,0.85,0])
D.ck_=w([D.eLH,D.eMW,D.eLP,D.eMK,D.eM8,D.eLI],x.e)
D.ekg=new B.z(1,3)
D.ekh=new B.z(1,4)
D.aMj=new B.z(0,5)
D.d7Y=w([N.lb,S.uI,D.ekg,D.ekh,D.aMj],x.u)
D.h95=new C.FN("Fireworks","Dice launch comets that burst in colour",D.ck_,D.d7Y)
D.eLM=new B.cu(["beat",0.15,0.2,2])
D.eMi=new B.cu(["chance",0.4,0.2,0])
D.eLE=new B.cu(["ball",0.7,0.12,3])
D.eLr=new B.cu(["chance",0.4,0.5,1])
D.eMV=new B.cu(["ball",0.3,0.08,1])
D.eLk=new B.cu(["ripple",0.7,0.55,3])
D.cd0=w([D.eLM,D.eMi,D.eLE,D.eLr,D.eMV,D.eLk],x.e)
D.ekR=new B.z(2,5)
D.cAb=w([N.lb,S.uI,L.a6q,F.SK,D.ekR],x.u)
D.h93=new C.FN("Rain","Balls fall at random and splash",D.cd0,D.cAb)
D.eMj=new B.cu(["beat",0.12,0.45,2])
D.eML=new B.cu(["toggle",0.38,0.2,0])
D.eMS=new B.cu(["wash",0.7,0.15,4])
D.eLG=new B.cu(["count3",0.38,0.45,0])
D.eMN=new B.cu(["burst",0.72,0.4,0])
D.eM9=new B.cu(["light",0.55,0.7,1])
D.eLs=new B.cu(["pop",0.8,0.8,4])
D.daD=w([D.eMj,D.eML,D.eMS,D.eLG,D.eMN,D.eM9,D.eLs],x.e)
D.ell=new B.z(3,6)
D.cg9=w([N.lb,S.uI,L.a6q,F.SK,D.aMj,D.ell],x.u)
D.h91=new C.FN("Disco","A beat drives lights, washes and bursts",D.daD,D.cg9)
D.eMZ=new B.cu(["button",0.12,0.2,0])
D.eLm=new B.cu(["delay",0.34,0.2,1])
D.eMY=new B.cu(["light",0.56,0.2,1])
D.eMR=new B.cu(["delay",0.56,0.45,1])
D.eMk=new B.cu(["ball",0.34,0.6,0])
D.eLq=new B.cu(["delay",0.34,0.8,1])
D.eLf=new B.cu(["burst",0.7,0.8,5])
D.c0d=w([D.eMZ,D.eLm,D.eMY,D.eMR,D.eMk,D.eLq,D.eLf],x.e)
D.ens=new B.z(5,6)
D.dfW=w([N.lb,S.uI,F.SJ,F.SK,D.aMm,D.ens],x.u)
D.h92=new C.FN("Domino","Tap the button and watch it run down the line",D.c0d,D.dfW)
D.ax9=w([D.h94,D.h96,D.h95,D.h93,D.h91,D.h92],B.ax("O<FN>"))
D.d5W=w([0.05,0.15,0.25],x.n)
D.d6P=w([1.5,3,4.5,9,12],x.n)
D.eIa=new B.bk("dice","Dice",A.oT)
D.eJb=new B.bk("coin","Coin",I.yp)
D.eKP=new B.bk("num","Number",A.yx)
D.d71=w([D.eIa,D.eJb,D.eKP],x.c)
D.d74=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fJ0=new C.P5("Moon",1.62,0,4291941851)
D.fJ1=new C.P5("Mars",3.71,0.01,4294472049)
D.fJ2=new C.P5("Earth",9.81,1,4281908728)
D.fJ4=new C.P5("Jupiter",24.79,1.4,4294677052)
D.fJ3=new C.P5("Sun",274,2,4294688548)
D.yW=w([D.fJ0,D.fJ1,D.fJ2,D.fJ4,D.fJ3],B.ax("O<P5>"))
D.axf=w([A.cs,A.aS,A.bk,A.aP,A.by,A.c5,A.cY,A.iF],x.O)
D.d83=w([A.c5,A.aP,A.dO,A.bk],x.O)
D.d8Y=w([],x.h)
D.d91=w([],x.B)
D.a3f=w([],x.D)
D.ecE=new C.eb("battery","Battery","\ud83d\udd0b",A.bk,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.ecK=new C.eb("solar","Solar panel","\u2600\ufe0f",A.bH,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.edo=new C.eb("crank","Hand crank","\ud83d\udd04",A.cY,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.ed0=new C.eb("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aP,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.ecw=new C.eb("buck","Step-down converter","\ud83d\udd3d",A.iF,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.ecZ=new C.eb("regulator","5 V regulator","\ud83e\uddca",A.bK,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.edt=new C.eb("diode","Diode","\u27a1\ufe0f",A.aS,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eda=new C.eb("ldr","Light sensor","\ud83c\udf1e",A.dO,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.ecP=new C.eb("switch","Switch","\ud83c\udf9a\ufe0f",A.by,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.edq=new C.eb("fuse","Fuse","\ud83e\uddef",A.cs,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.eco=new C.eb("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.iF,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.edb=new C.eb("resistor","Resistor","\u3030\ufe0f",A.aS,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.edd=new C.eb("bulb","Light bulb","\ud83d\udca1",A.dO,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.ecM=new C.eb("led","LED","\ud83d\udd34",A.aw,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.ecQ=new C.eb("motor","Motor","\u2699\ufe0f",A.bK,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.ed7=new C.eb("buzzer","Buzzer","\ud83d\udd14",A.c5,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.ecF=new C.eb("heater","Heater","\ud83d\udd25",A.cY,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.ed2=new C.eb("capacitor","Capacitor","\ud83e\udeab",A.cn,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.ecV=new C.eb("radio","Radio","\ud83d\udcfb",A.nQ,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.ecS=new C.eb("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.ba,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.ecv=new C.eb("voltmeter","Voltmeter","\ud83e\udded",A.bu,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.ecC=new C.eb("ammeter","Ammeter","\ud83d\udcdf",A.aS,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.ecI=new C.eb("fan","Fan","\ud83c\udf00",A.aP,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.edv=new C.eb("speaker","Speaker","\ud83d\udd0a",A.c5,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.edk=new C.eb("clock","Digital clock","\u23f0",A.bk,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.ecY=new C.eb("calculator","Calculator","\ud83e\uddee",A.KR,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.ecB=new C.eb("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cn,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.edu=new C.eb("router","WiFi router","\ud83d\udcf6",A.iF,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.edx=new C.eb("siren","Siren","\ud83d\udea8",A.aw,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.ecr=new C.eb("toycar","Toy car","\ud83d\ude97",A.cY,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.edy=new C.eb("kettle","Kettle","\ud83e\uded6",A.ml,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.ecz=new C.eb("lamp","Desk lamp","\ud83e\ude94",A.dO,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.ecL=new C.eb("lights","Party lights","\ud83c\udf84",A.nQ,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.ecW=new C.eb("fridge","Fridge","\ud83e\uddca",A.hh,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.ect=new C.eb("washer","Washing machine","\ud83e\udee7",A.cn,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.edl=new C.eb("blender","Blender","\ud83e\udd64",A.cs,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.ecT=new C.eb("drone","Drone","\ud83d\ude81",A.bK,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.ecy=new C.eb("drill","Power drill","\ud83d\udd29",A.aS,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.ecX=new C.eb("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.edi=new C.eb("neon","Neon sign","\ud83e\udea7",A.c5,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.ecu=new C.eb("microwave","Microwave","\ud83c\udf72",A.cY,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.edc=new C.eb("doorbell","Doorbell","\ud83d\udd14",A.bH,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.ecH=new C.eb("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.ed6=new C.eb("console","Game console","\ud83c\udfae",A.by,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.edn=new C.eb("heartmon","Heart monitor","\ud83e\ude7a",A.h3,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.ecs=new C.eb("aquarium","Aquarium","\ud83d\udc20",A.ba,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.ed1=new C.eb("lighthouse","Lighthouse","\ud83d\uddfc",A.dO,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.ed9=new C.eb("discoball","Disco ball","\ud83e\udea9",A.nQ,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eds=new C.eb("robot","Robot","\ud83e\udd16",A.aP,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.ecq=new C.eb("toaster","Toaster","\ud83c\udf5e",A.dS,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.edw=new C.eb("ledstrip","LED strip","\ud83c\udf08",A.c5,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.edh=new C.eb("pump","Water pump","\ud83d\udeb0",A.aP,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.ed3=new C.eb("hairdryer","Hair dryer","\ud83d\udca8",A.i1,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.edf=new C.eb("headphones","Headphones","\ud83c\udfa7",A.by,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.ecA=new C.eb("smartwatch","Apple Watch Ultra","\u231a",A.bu,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.edr=new C.eb("tablet","iPad Pro M5","\ud83d\udcf2",A.cn,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.ecn=new C.eb("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h3,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.ecU=new C.eb("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bs,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.ecN=new C.eb("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.ed8=new C.eb("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.th,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.ecp=new C.eb("iphonefold","iPhone Fold","\ud83d\udcf1",A.b4,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.ecD=new C.eb("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d0,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.edp=new C.eb("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cB,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.ed4=new C.eb("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bd,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.ed_=new C.eb("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c9,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.edg=new C.eb("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aw,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.ecO=new C.eb("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bk,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.ed5=new C.eb("honor","Honor Magic V5","\ud83d\udcf1",A.cn,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.ede=new C.eb("vivo","vivo X300 Pro","\ud83d\udcf1",A.cY,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.edj=new C.eb("ereader","Kindle Scribe","\ud83d\udcd6",A.bs,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.ecm=new C.eb("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.c8,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.ecR=new C.eb("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cB,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.ecJ=new C.eb("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.ba,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.ecx=new C.eb("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dO,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.ecG=new C.eb("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aw,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.edm=new C.eb("vision","Apple Vision Pro","\ud83e\udd7d",A.by,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.QA=w([D.ecE,D.ecK,D.edo,D.ed0,D.ecw,D.ecZ,D.edt,D.eda,D.ecP,D.edq,D.eco,D.edb,D.edd,D.ecM,D.ecQ,D.ed7,D.ecF,D.ed2,D.ecV,D.ecS,D.ecv,D.ecC,D.ecI,D.edv,D.edk,D.ecY,D.ecB,D.edu,D.edx,D.ecr,D.edy,D.ecz,D.ecL,D.ecW,D.ect,D.edl,D.ecT,D.ecy,D.ecX,D.edi,D.ecu,D.edc,D.ecH,D.ed6,D.edn,D.ecs,D.ed1,D.ed9,D.eds,D.ecq,D.edw,D.edh,D.ed3,D.edf,D.ecA,D.edr,D.ecn,D.ecU,D.ecN,D.ed8,D.ecp,D.ecD,D.edp,D.ed4,D.ed_,D.edg,D.ecO,D.ed5,D.ede,D.edj,D.ecm,D.ecR,D.ecJ,D.ecx,D.ecG,D.edm],B.ax("O<eb>"))
D.d9p=w([0,0.46,0.82],x.n)
D.d9A=w([5,10,15,25,45,60],x.t)
D.d9W=w([-0.045,0.03,-0.015],x.n)
D.daj=w([0.9,0.97,1],x.n)
D.axI=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.uj=w([0.05,0.2,0.35],x.n)
D.cRC=w([D.Lu,D.Lu],x.O)
D.cWO=w([A.F7,A.M],x.O)
D.cVS=w([A.fz,A.hv],x.O)
D.cPH=w([A.f3,A.nP],x.O)
D.ccw=w([A.lL,A.dx],x.O)
D.axJ=w([D.cRC,D.cWO,D.cVS,D.cPH,D.ccw],x.m)
D.fIP=new C.v5("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fIQ=new C.v5("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fIH=new C.v5("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fIO=new C.v5("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fIM=new C.v5("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fII=new C.v5("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fIN=new C.v5("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fIJ=new C.v5("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fIL=new C.v5("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fIK=new C.v5("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.Cv=w([D.fIP,D.fIQ,D.fIH,D.fIO,D.fIM,D.fII,D.fIN,D.fIJ,D.fIL,D.fIK],B.ax("O<v5>"))
D.bgG=new B.v(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.beq=new B.v(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.dbB=w([D.Lu,D.bgG,D.beq,A.adL],x.O)
D.b2o=new B.ac(0,A.G,A.ig,A.dD,6)
D.dcw=w([D.b2o],x.V)
D.ejs=new B.z(0,"AND")
D.eki=new B.z(1,"Adder")
D.ekS=new B.z(2,"Blinker")
D.elm=new B.z(3,"Memory")
D.ddi=w([D.ejs,D.eki,D.ekS,D.elm],x.I)
D.axW=w([-104,0,104],x.n)
D.axX=w([-14,3],x.n)
D.de6=w([-8,0,8],x.n)
D.ay4=w([-92,0,92],x.n)
D.dev=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.ePs=new C.uS("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.ePz=new C.uS("Medium tank","Balanced.",0.35,1)
D.ePy=new C.uS("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.QO=w([D.ePs,D.ePz,D.ePy],x._)
D.nn=w([0.04,0.2,0.36],x.n)
D.ayf=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eKv=new B.bk(D.aW8,"Fold",I.amw)
D.eJG=new B.bk(D.aa8,"Flip",A.Gd)
D.bFB=new B.a1(62889,"MaterialIcons",!1)
D.eKN=new B.bk(D.aW9,"Rise",D.bFB)
D.amK=new B.a1(983870,"MaterialIcons",!1)
D.eHH=new B.bk(D.aa9,"Assemble",D.amK)
D.eHQ=new B.bk(D.aWa,"Spin",D.al2)
D.eHN=new B.bk(D.aWb,"Pop",A.lp)
D.dfT=w([D.eKv,D.eJG,D.eKN,D.eHH,D.eHQ,D.eHN],B.ax("O<+(Kl,m,a1)>"))
D.ayk=w([A.c5,A.dO,A.bu,A.aP,A.by,A.cs],x.O)
D.dgh=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dhg=w([3,4.5,5,6,9],x.n)
D.b2X=new B.ac(0,A.G,A.aW,A.J,16)
D.dhH=w([D.b2X],x.V)
D.QR=w([A.c5,A.bH,A.bk,A.aP,A.by,A.cs,A.c,A.cY],x.O)
D.dia=w(["solar","turbine","crank","pot"],x.s)
D.diB=w([0,0.35,0.75,1],x.n)
D.eI4=new B.bk("drop","Drop",D.amm)
D.eI6=new B.bk("weight","Weight",U.amO)
D.eKH=new B.bk("cannon","Newton's cannon",A.alM)
D.djk=w([D.eI4,D.eI6,D.eKH],x.c)
D.djS=w(["volts","level","ohms","on"],x.s)
D.dlf=w([A.jr,A.BW,A.BI,A.q4,A_.GC,A.u8,A.yv,A.q8,A.hO,A.o3,A.hj,A.e0,A.i5,A.i6,A.mv,A.lV,A.vY,A.rh,A.lW,A.G5,A.vX,A.BO,A.BK,A.amh,A.Nx,A.BU,A.NG,A.alX,T.amG,A.lp],x.w)
D.dm8=w([0.72,1],x.n)
D.dml=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.e6v={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.doB=new B.bt(D.e6v,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],B.ax("bt<m,m>"))
D.e4q={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.h2h=new C.y8("Switch",F.ua,A.bH,0,"Tap it to turn it ON or OFF.")
D.h2d=new C.y8("Blinker",A.oX,A.bu,0,"Turns itself ON and OFF. Tap to change the speed.")
D.h2e=new C.y8("AND",D.amK,A.cn,2,"ON only when BOTH inputs are ON.")
D.bH3=new B.a1(63671,"MaterialIcons",!1)
D.h2c=new C.y8("OR",D.bH3,A.by,2,"ON when EITHER input is ON.")
D.h2f=new C.y8("XOR",G.a0a,A.c5,2,"ON when the inputs are DIFFERENT.")
D.h29=new C.y8("NAND",A.tW,A.aP,2,"OFF only when BOTH inputs are ON.")
D.bG9=new B.a1(63176,"MaterialIcons",!1)
D.h2a=new C.y8("NOR",D.bG9,A.iF,2,"ON only when BOTH inputs are OFF.")
D.h2b=new C.y8("NOT",Z.BX,A.cY,1,"Flips the signal: ON becomes OFF.")
D.h2g=new C.y8("Light",A.rd,A.dO,1,"Glows when its input is ON.")
D.h2i=new C.y8("Buzzer",A.uc,A.cs,1,"Beeps while its input is ON.")
D.z9=new B.bt(D.e4q,[D.h2h,D.h2d,D.h2e,D.h2c,D.h2f,D.h29,D.h2a,D.h2b,D.h2g,D.h2i],B.ax("bt<m,y8>"))
D.e6g={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eIv=new B.bk(3,20,1.9)
D.eI_=new B.bk(33,90,1.6)
D.eL7=new B.bk(52,15,3.2)
D.eL5=new B.bk(45,-100,1.8)
D.eJA=new B.bk(-15,-60,1.9)
D.eJ5=new B.bk(-25,140,2.4)
D.eIX=new B.bk(-82,0,2.2)
D.aE4=new B.bt(D.e6g,[D.eIv,D.eI_,D.eL7,D.eL5,D.eJA,D.eJ5,D.eIX],B.ax("bt<m,+(K,K,K)>"))
D.cQe=w([A.A],x.M)
D.cQz=w([A.ay,A.aC],x.M)
D.cZk=w([A.ay,A.A,A.aC],x.M)
D.d_S=w([A.ay,A.le,A.A,A.lF,A.aC],x.M)
D.dde=w([A.ay,A.le,A.a3,A.a8,A.lF,A.aC],x.M)
D.dpX=new B.dt([1,D.cQe,2,D.cQz,3,D.cZk,4,A.ayJ,5,D.d_S,6,D.dde],B.ax("dt<H,ai<dd>>"))
D.e6G={Calm:0,Box:1,Sleep:2}
D.cxF=w([4,2,6,0],x.n)
D.cxM=w([4,4,4,4],x.n)
D.cxN=w([4,7,8,0],x.n)
D.Rf=new B.bt(D.e6G,[D.cxF,D.cxM,D.cxN],B.ax("bt<m,ai<K>>"))
D.e4A={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wU=new C.a01(0,"source")
D.d_l=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.h7I=new C.q4("Clock",A.oX,D.wU,A.bu,D.d_l)
D.h7E=new C.q4("Button",A.C_,D.wU,A.aS,A.U)
D.dhs=w(["random","quick","slow"],x.s)
D.h7P=new C.q4("Dice",A.oT,D.wU,A.c5,D.dhs)
D.bGJ=new B.a1(63484,"MaterialIcons",!1)
D.DY=new C.a01(1,"logic")
D.dm3=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.h7L=new C.q4("Delay",D.bGJ,D.DY,A.cn,D.dm3)
D.d9H=w(["fast","mid","slow"],x.s)
D.h7Q=new C.q4("Echo",A.amb,D.DY,A.by,D.d9H)
D.h7N=new C.q4("Every 2nd",Z.BX,D.DY,A.iF,A.U)
D.bGn=new B.a1(63309,"MaterialIcons",!1)
D.h7K=new C.q4("Every 3rd",D.bGn,D.DY,A.aP,A.U)
D.bIf=new B.a1(983902,"MaterialIcons",!1)
D.c_C=w(["50%","25%","75%"],x.s)
D.h7S=new C.q4("Chance",D.bIf,D.DY,A.cY,D.c_C)
D.qD=new C.a01(2,"out")
D.h7G=new C.q4("Light",A.rd,D.qD,A.dO,A.U)
D.h7H=new C.q4("Burst",A.lp,D.qD,A.c5,A.U)
D.h7F=new C.q4("Ripple",A.yB,D.qD,A.ba,A.U)
D.h7O=new C.q4("Ball",A.amo,D.qD,A.cY,A.U)
D.h7M=new C.q4("Comet",A.o3,D.qD,A.by,A.U)
D.bI0=new B.a1(983669,"MaterialIcons",!1)
D.h7R=new C.q4("Shake",D.bI0,D.qD,A.cs,A.U)
D.h7T=new C.q4("Pop",A.G6,D.qD,A.bk,A.U)
D.h7J=new C.q4("Wash",A.NK,D.qD,A.pA,A.U)
D.mC=new B.bt(D.e4A,[D.h7I,D.h7E,D.h7P,D.h7L,D.h7Q,D.h7N,D.h7K,D.h7S,D.h7G,D.h7H,D.h7F,D.h7O,D.h7M,D.h7R,D.h7T,D.h7J],B.ax("bt<m,q4>"))
D.e4M={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.zB=new C.Jh(0,"tv")
D.eR_=new C.m6("Samsung Neo QLED 8K",D.zB,F.EM,A.aP)
D.eQR=new C.m6("LG OLED evo G5",D.zB,A.ed,A.h3)
D.eQI=new C.m6("Sony Bravia 9",D.zB,A.qO,A.bs)
D.eQM=new C.m6("Apple TV 4K",D.zB,A.e4,A.bO)
D.eQJ=new C.m6("Bang and Olufsen Beovision",D.zB,F.Es,F.th)
D.II=new C.Jh(1,"iphone")
D.aN3=new C.m6("iPhone 18 Pro Max",D.II,D.ago,A.c8)
D.wr=new C.Jh(3,"fold")
D.bmN=new B.v(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eQW=new C.m6("iPhone Fold",D.wr,D.bmN,A.b4)
D.uL=new C.Jh(2,"android")
D.eQX=new C.m6("Samsung Galaxy S26 Ultra",D.uL,F.acD,A.d0)
D.bge=new B.v(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eQP=new C.m6("Samsung Galaxy Z Fold7",D.wr,D.bge,A.cB)
D.eQL=new C.m6("Google Pixel 10 Pro XL",D.uL,A.dv,A.bd)
D.eQT=new C.m6("Xiaomi 16 Ultra",D.uL,A.lP,A.c9)
D.eQO=new C.m6("Huawei Mate 80 Pro Max",D.uL,A.ey,A.aw)
D.eQK=new C.m6("OPPO Find X9 Ultra",D.uL,A.dW,A.bk)
D.eR1=new C.m6("Honor Magic V5",D.wr,A.d5,A.cn)
D.eQQ=new C.m6("vivo X300 Pro",D.uL,A.hv,A.cY)
D.SR=new C.Jh(4,"tablet")
D.eQV=new C.m6("iPad Pro M5",D.SR,A.dv,A.aP)
D.a6M=new C.Jh(5,"reader")
D.eR2=new C.m6("Kindle Scribe",D.a6M,A.e2,A.bs)
D.zC=new C.Jh(6,"computer")
D.eQU=new C.m6("MacBook Pro M5 Max",D.zC,A.dv,A.c8)
D.eQZ=new C.m6("iMac 32 inch",D.zC,A.bO,A.cB)
D.eQS=new C.m6("Pro Display XDR 8K",D.zC,A.lP,A.ba)
D.eQN=new C.m6("Sony Laser Projector",D.zC,A.co,A.dO)
D.eQY=new C.m6("Luxury car touchscreen",D.zC,K.mY,A.aw)
D.eR0=new C.m6("Apple Vision Pro",D.zC,A.h6,A.by)
D.m2=new B.bt(D.e4M,[D.eR_,D.eQR,D.eQI,D.eQM,D.eQJ,D.aN3,D.eQW,D.eQX,D.eQP,D.eQL,D.eQT,D.eQO,D.eQK,D.eR1,D.eQQ,D.eQV,D.eR2,D.eQU,D.eQZ,D.eQS,D.eQN,D.eQY,D.eR0],B.ax("bt<m,m6>"))
D.e4U={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bpv=new C.fN(20,4,13,!1)
D.bpW=new C.fN(14,5,13.5,!1)
D.bpN=new C.fN(9,2.4,10,!1)
D.bq0=new C.fN(7,5,12.5,!1)
D.bpQ=new C.fN(8,3.5,12,!1)
D.bpr=new C.fN(15,2,6,!1)
D.bpZ=new C.fN(45,6,13.5,!0)
D.bpH=new C.fN(10,8,13.5,!1)
D.bpz=new C.fN(25,3,12,!0)
D.bpF=new C.fN(35,4,12,!0)
D.bpG=new C.fN(40,4.5,9.5,!0)
D.bpI=new C.fN(55,3,9,!0)
D.bps=new C.fN(18,3,9,!1)
D.bpY=new C.fN(22,4,13.5,!1)
D.bpR=new C.fN(16,5,13.5,!1)
D.bpD=new C.fN(30,4,9,!0)
D.bq9=new C.fN(5,3.5,13,!1)
D.bpL=new C.fN(25,3,13.5,!0)
D.bpU=new C.fN(14,2.5,9,!1)
D.bpK=new C.fN(6,6,13,!1)
D.bq1=new C.fN(30,1.2,5,!0)
D.bq8=new C.fN(35,3,4.5,!0)
D.bq4=new C.fN(20,4.5,7.5,!0)
D.bpJ=new C.fN(55,5.5,13.5,!0)
D.bpq=new C.fN(45,5.5,13.5,!0)
D.bpV=new C.fN(40,5.5,13.5,!0)
D.bq7=new C.fN(60,6,13.5,!0)
D.agR=new C.fN(28,4,7,!0)
D.Fk=new C.fN(25,4,7,!0)
D.bpC=new C.fN(30,4,7,!0)
D.bpx=new C.fN(22,4,7,!0)
D.bpy=new C.fN(24,4,7,!0)
D.bpM=new C.fN(60,3,5.5,!0)
D.bpt=new C.fN(18,9,14,!0)
D.bpA=new C.fN(25,9,14,!0)
D.agS=new C.fN(30,8,14,!0)
D.bpw=new C.fN(20,8,14,!0)
D.bpE=new C.fN(30,9,14,!0)
D.bq2=new C.fN(22,5,9.5,!0)
D.bpu=new C.fN(30,2.5,10.5,!0)
D.bpS=new C.fN(50,5.5,13.5,!0)
D.bq6=new C.fN(12,2,9.5,!1)
D.bpP=new C.fN(16,1.3,9.5,!0)
D.bq_=new C.fN(40,2.5,7,!0)
D.bq5=new C.fN(60,1.2,4.8,!0)
D.bq3=new C.fN(18,5,13.5,!0)
D.bpX=new C.fN(8,2,9.5,!1)
D.bpO=new C.fN(12,2.5,8,!1)
D.bpB=new C.fN(20,3.5,13.5,!0)
D.bpT=new C.fN(3.5,3,13,!1)
D.za=new B.bt(D.e4U,[D.bpv,D.bpW,D.bpN,D.bq0,D.bpQ,D.bpr,D.bpZ,D.bpH,D.bpz,D.bpF,D.bpG,D.bpI,D.bps,D.bpY,D.bpR,D.bpD,D.bq9,D.bpL,D.bpU,D.bpK,D.bq1,D.bq8,D.bq4,D.bpJ,D.bpq,D.bpV,D.bq7,D.agR,D.Fk,D.bpC,D.Fk,D.bpx,D.Fk,D.bpy,D.agR,D.Fk,D.bpM,D.bpt,D.bpA,D.agS,D.bpw,D.bpE,D.bq2,D.bpu,D.bpS,D.bq6,D.bpP,D.bq_,D.bq5,D.Fk,D.agS,D.bq3,D.bpX,D.bpO,D.bpB,D.bpT],B.ax("bt<m,fN>"))
D.e4z={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eHd=new B.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.enp=new B.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.enk=new B.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.ezb=new B.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eA3=new B.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.ez7=new B.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.elr=new B.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.exa=new B.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eHl=new B.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eAo=new B.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eqD=new B.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.el9=new B.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.epF=new B.z("Movement","They pull your legs together and help you balance.")
D.erx=new B.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eny=new B.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eEU=new B.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eFT=new B.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.ewT=new B.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eFE=new B.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.evB=new B.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eAx=new B.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.elg=new B.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.erU=new B.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eAc=new B.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.evV=new B.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eFM=new B.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eyD=new B.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.elp=new B.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eB5=new B.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eEx=new B.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eCO=new B.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.ejD=new B.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eym=new B.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eyq=new B.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.esB=new B.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.enM=new B.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.erm=new B.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.exk=new B.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eDz=new B.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eHi=new B.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eAu=new B.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.ejm=new B.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.exv=new B.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.ekb=new B.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eDO=new B.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eEQ=new B.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.exV=new B.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eE0=new B.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eli=new B.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eFj=new B.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.ep4=new B.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eDe=new B.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.esh=new B.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.evQ=new B.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eAO=new B.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eFt=new B.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eFl=new B.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eFp=new B.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.ewj=new B.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eBC=new B.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eCL=new B.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eFa=new B.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.exU=new B.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eue=new B.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.et1=new B.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eyh=new B.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eAH=new B.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.euK=new B.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.evp=new B.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.epq=new B.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eEM=new B.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eqc=new B.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.ek8=new B.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.esA=new B.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.ek3=new B.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eob=new B.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.esF=new B.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eqm=new B.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eB1=new B.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.erA=new B.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eH0=new B.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eta=new B.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.ewc=new B.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eyL=new B.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eqv=new B.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eqe=new B.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dr_=new B.bt(D.e4z,[D.eHd,D.enp,D.enk,D.ezb,D.eA3,D.ez7,D.elr,D.exa,D.eHl,D.eAo,D.eqD,D.el9,D.epF,D.erx,D.eny,D.eEU,D.eFT,D.ewT,D.eFE,D.evB,D.eAx,D.elg,D.erU,D.eAc,D.evV,D.eFM,D.eyD,D.elp,D.eB5,D.eEx,D.eCO,D.ejD,D.eym,D.eyq,D.esB,D.enM,D.erm,D.exk,D.eDz,D.eHi,D.eAu,D.ejm,D.exv,D.ekb,D.eDO,D.eEQ,D.exV,D.eE0,D.eli,D.eFj,D.ep4,D.eDe,D.esh,D.evQ,D.eAO,D.eFt,D.eFl,D.eFp,D.ewj,D.eBC,D.eCL,D.eFa,D.exU,D.eue,D.et1,D.eyh,D.eAH,D.euK,D.evp,D.epq,D.eEM,D.eqc,D.ek8,D.esA,D.ek3,D.eob,D.esF,D.eqm,D.eB1,D.erA,D.eH0,D.eta,D.ewc,D.eyL,D.eqv,D.eqe],B.ax("bt<m,+(m,m)>"))
D.dr1=new B.hB(A.G,11)
D.dr6=new B.hB(A.G,30)
D.dy_=new C.Ub(null)
D.dy0=new C.Uc(null)
D.dyd=new C.Ud(null)
D.dAe=new C.Ug(null)
D.dAf=new C.Uh(null)
D.dB3=new C.US(null)
D.dB5=new C.UT(null)
D.dBD=new C.V_(null)
D.dDy=new C.V3(null)
D.dDz=new C.V5(null)
D.dDB=new C.V6(null)
D.dFg=new C.Vy(null)
D.dFW=new C.Vz(null)
D.dK6=new C.VE(null)
D.e__=new C.VF(null)
D.e_1=new C.VG(null)
D.e_2=new C.VJ(null)
D.e_3=new C.VK(null)
D.e0X=new C.VS(null)
D.e0Y=new C.VT(null)
D.e1d=new C.W2(null)
D.e1e=new C.W3(null)
D.e1f=new C.a81(null)
D.e1Q=new C.W5(null)
D.e3i=new C.W9(null)
D.e6R=new B.x(0,118)
D.aGM=new B.x(0,13)
D.e6S=new B.x(0,17)
D.e6V=new B.x(0,330)
D.e6Y=new B.x(0,-13)
D.aGS=new B.x(0,-14)
D.e6Z=new B.x(0,-17)
D.e7_=new B.x(0,-18)
D.e70=new B.x(0,-19)
D.e71=new B.x(0,-20)
D.e74=new B.x(0,-26)
D.e75=new B.x(0,-28)
D.e76=new B.x(0,-31)
D.e77=new B.x(0,-32)
D.wk=new B.x(0,-6)
D.e78=new B.x(0,-6771)
D.e79=new B.x(0,-9)
D.e7b=new B.x(-9.5,-11)
D.e7c=new B.x(10,20)
D.e7e=new B.x(10,-13)
D.e7f=new B.x(10,-22)
D.e7g=new B.x(10,-4)
D.a5D=new B.x(11,8)
D.e7i=new B.x(12,2)
D.e7j=new B.x(14,0)
D.e7k=new B.x(14,12)
D.aGW=new B.x(14,8)
D.e7l=new B.x(14,-17)
D.e7m=new B.x(14,-18)
D.aGX=new B.x(14,-3)
D.aGY=new B.x(14,-4)
D.e7n=new B.x(15,0)
D.e7o=new B.x(15,-12)
D.e7p=new B.x(16,-8)
D.e7q=new B.x(18,14)
D.e7r=new B.x(18,-12)
D.aH1=new B.x(20,0)
D.e7x=new B.x(20,15)
D.e7y=new B.x(20,-17)
D.e7z=new B.x(20,-3)
D.e7A=new B.x(21,8)
D.e7C=new B.x(22,10)
D.aH2=new B.x(22,8)
D.e7D=new B.x(24,0)
D.e7E=new B.x(24,2)
D.e7G=new B.x(24,-18)
D.e7H=new B.x(24,-22)
D.e7I=new B.x(25,8)
D.e7J=new B.x(26,0)
D.e7P=new B.x(28,-30)
D.e7U=new B.x(30,18)
D.e7V=new B.x(30,2)
D.e7W=new B.x(31,19)
D.e7X=new B.x(32,0)
D.aH5=new B.x(34,0)
D.aH6=new B.x(34,-32)
D.Ii=new B.x(36,0)
D.e81=new B.x(3,-1)
D.e84=new B.x(40,3)
D.e88=new B.x(4,11)
D.e8b=new B.x(4,-2)
D.e8f=new B.x(5,0)
D.e8g=new B.x(5,17)
D.e8h=new B.x(5,6)
D.e8l=new B.x(6,11)
D.e8r=new B.x(8,7)
D.e8s=new B.x(8,-10)
D.e8t=new B.x(8,-14)
D.e8u=new B.x(8,-3)
D.aHa=new B.x(9,0)
D.e8x=new B.x(-20.5,-17.6)
D.e8y=new B.x(-9,18.5)
D.e8B=new B.x(-2.6,-1)
D.e8C=new B.x(1.9,-0.8)
D.e8F=new B.x(-0.22,0.09)
D.e8K=new B.x(2.6,1)
D.e8R=new B.x(-9,12.2)
D.e98=new B.x(-9,20.5)
D.e9q=new B.x(-10,0)
D.e9r=new B.x(-10,12)
D.aHh=new B.x(-10,4)
D.e9s=new B.x(-11,-2)
D.e9t=new B.x(-13,-5)
D.e9u=new B.x(-14,0)
D.e9v=new B.x(-14,13)
D.e9w=new B.x(-14,2)
D.e9x=new B.x(-14,-12)
D.e9y=new B.x(-14,-19)
D.e9z=new B.x(-14,-23)
D.e9A=new B.x(-15,6)
D.e9B=new B.x(-16,14)
D.e9C=new B.x(-16,-8)
D.e9D=new B.x(-17,10)
D.e9E=new B.x(-17,-18)
D.e9F=new B.x(-17,-8)
D.e9H=new B.x(-18,20)
D.e9I=new B.x(-18,-9)
D.aHj=new B.x(-20,0)
D.e9K=new B.x(-20,16)
D.e9L=new B.x(-20,-9)
D.Sf=new B.x(-22,8)
D.e9M=new B.x(-22,-10)
D.e9N=new B.x(-22,-11)
D.e9O=new B.x(-24,10)
D.e9P=new B.x(-24,11)
D.e9Q=new B.x(-24,14)
D.e9R=new B.x(-24,-22)
D.e9S=new B.x(-25,-11)
D.e9T=new B.x(-26,0)
D.e9U=new B.x(-26,-18)
D.e9V=new B.x(-2,9)
D.e9W=new B.x(-2,-10)
D.e9X=new B.x(-2,-20)
D.e9Y=new B.x(-2,-9)
D.e9Z=new B.x(-32,0)
D.aHl=new B.x(-34,0)
D.ea3=new B.x(-40,3)
D.ea5=new B.x(-4,11)
D.ea6=new B.x(-4,-17)
D.ea7=new B.x(-4,-2)
D.ea9=new B.x(-5,0)
D.eaa=new B.x(-5,20)
D.eab=new B.x(-5,6)
D.eac=new B.x(-6,26)
D.ead=new B.x(-6,6)
D.eae=new B.x(-6,-42)
D.eaf=new B.x(-7,-19)
D.eag=new B.x(-7,-24)
D.eah=new B.x(-8,-9)
D.a5H=new B.x(-9,0)
D.eai=new B.x(-9,1)
D.eaj=new B.x(-9,-23)
D.flC=new B.y("Thinking\u2026",null,A.hc,null,null,null,null,null,null,null,null,null)
D.ebf=new B.D(A.jH,D.flC,null)
D.fBM=new B.y("Start from a ready-made board",null,A.fP,null,null,null,null,null,null,null,null,null)
D.ebp=new B.D(A6.vB,D.fBM,null)
D.bxg=new B.Q(4,0,4,14)
D.fh2=new B.G(!0,A.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmy=new B.y("Games and little helpers for a spare minute.",null,D.fh2,null,null,null,null,null,null,null,null,null)
D.ebA=new B.D(D.bxg,D.fmy,null)
D.fyx=new B.y("Tap to throw in a star",null,A.kJ,null,null,null,null,null,null,null,null,null)
D.b66=new B.co(A.A,null,null,D.fyx,null)
D.ehu=new B.cL(0,null,0,14,null,null,D.b66,null)
D.dah=w([A.iD,A.bn],x.O)
D.aMc=new B.c_(A.A,0.5,A.x,null,0,D.dah,null,null)
D.eic=new B.c_(A.A,0.5,A.x,null,0,D.ayx,null,null)
D.d1D=w([A.c,A.bK],x.O)
D.eie=new B.c_(A.A,0.5,A.x,null,0,D.d1D,null,null)
D.dio=w([A.bO,A.h6],x.O)
D.aMd=new B.c_(A.A,0.5,A.x,null,0,D.dio,null,null)
D.cHv=w([A.c,A.bO],x.O)
D.eii=new B.c_(A.t0,0.5,A.x,null,0,D.cHv,null,null)
D.bdy=new B.v(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.bj0=new B.v(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.d0F=w([D.bdy,D.afY,D.bj0],x.O)
D.d8g=w([0,0.7,1],x.n)
D.eik=new B.c_(A.t0,0.5,A.x,null,0,D.d0F,D.d8g,null)
D.cxT=w([A.oJ,A.aF,A.K],x.O)
D.dfa=w([0.3,0.7,1],x.n)
D.eim=new B.c_(A.A,0.5,A.x,null,0,D.cxT,D.dfa,null)
D.bmR=new B.v(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.dgA=w([A.fa,D.bmR],x.O)
D.eio=new B.c_(A.t0,0.5,A.x,null,0,D.dgA,null,null)
D.cAH=w([A.dv,A.co],x.O)
D.eip=new B.c_(A.A,0.5,A.x,null,0,D.cAH,null,null)
D.cWY=w([A.oJ,A.aF,A.fz],x.O)
D.eiq=new B.c_(A.A,0.5,A.x,null,0,D.cWY,null,null)
D.cPe=w([A.fT,A.aS,A.d8],x.O)
D.eis=new B.c_(A.t0,0.5,A.x,null,0,D.cPe,null,null)
D.daT=w([A.h6,K.mY],x.O)
D.eit=new B.c_(A.t0,0.5,A.x,null,0,D.daT,null,null)
D.bdN=new B.v(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.bbG=new B.v(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cZc=w([D.bdN,D.bbG],x.O)
D.eiv=new B.c_(A.A,0.5,A.x,null,0,D.cZc,null,null)
D.bip=new B.v(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.bgl=new B.v(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.bgp=new B.v(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.dkO=w([D.bip,D.bgl,D.bgp],x.O)
D.cVM=w([0,0.65,1],x.n)
D.eiw=new B.c_(L.aaj,0.5,A.x,null,0,D.dkO,D.cVM,null)
D.eix=new B.c_(A.A,0.5,A.x,null,0,D.av_,null,null)
D.djf=w([A.h6,A.hG],x.O)
D.eiE=new B.c_(A.A,0.5,A.x,null,0,D.djf,null,null)
D.aMh=new B.aR(9,9)
D.eiN=new B.aR(1.4,1.4)
D.eI8=new B.bk("Moon",1.62,4291941851)
D.eIG=new B.bk("Neptune",11.15,4284524026)
D.eJk=new B.bk("Sun",274,4294688548)
D.eJx=new B.bk("Mercury",3.7,4288455599)
D.eJC=new B.bk("Earth",9.81,4281908728)
D.eJE=new B.bk("Mars",3.71,4294472049)
D.eJW=new B.bk("Venus",8.87,4294759245)
D.eK2=new B.bk("Saturn",10.44,4294829706)
D.eKo=new B.bk("Jupiter",24.79,4294677052)
D.eO0=new B.a9(10,-8,18,-2)
D.eO1=new B.a9(14,-14,20,14)
D.eO2=new B.a9(20,-2,30,2)
D.eO4=new B.a9(4,-13,30,-3)
D.eO6=new B.a9(8,-7,12,7)
D.eOc=new B.a9(-12,12,12,19)
D.eOd=new B.a9(-12,14,12,22)
D.eOe=new B.a9(-12,-22,12,8)
D.eOf=new B.a9(-12,-25,12,19)
D.eOg=new B.a9(-12,-26,12,-6)
D.eOh=new B.a9(-12,-4,12,14)
D.eOi=new B.a9(-14,20,14,24)
D.eOj=new B.a9(-14,6,14,10)
D.eOk=new B.a9(-14,-17,14,15)
D.eOl=new B.a9(-14,-26,14,18)
D.eOm=new B.a9(-14,-4,14,20)
D.eOn=new B.a9(-15,-29,15,25)
D.eOo=new B.a9(-16,-16,16,16)
D.eOp=new B.a9(-16,-22,-9,18)
D.eOq=new B.a9(-16,-24,16,-10)
D.eOr=new B.a9(-16,-2,16,20)
D.eOt=new B.a9(-18,20,18,24)
D.eOu=new B.a9(-18,-18,18,20)
D.eOv=new B.a9(-20,12,20,22)
D.eOw=new B.a9(-20,-28,20,26)
D.eOx=new B.a9(-22,14,22,18)
D.aMM=new B.a9(-22,-26,22,24)
D.eOy=new B.a9(-22,-3,22,3)
D.eOz=new B.a9(-22,-4,22,12)
D.eOA=new B.a9(-24,-12,10,22)
D.eOB=new B.a9(-24,-14,22,8)
D.eOC=new B.a9(-24,-6,24,20)
D.aMN=new B.a9(-24,-9,24,9)
D.eOD=new B.a9(-25,14,25,19)
D.eOE=new B.a9(-26,-14,14,8)
D.eOF=new B.a9(-26,-4,26,20)
D.eOG=new B.a9(-26,-6,4,6)
D.aMO=new B.a9(-28,-13,28,13)
D.eOH=new B.a9(-28,-16,28,16)
D.eOI=new B.a9(-28,-16,28,8)
D.eOJ=new B.a9(-28,-22,28,22)
D.eOK=new B.a9(-30,-12,30,14)
D.eOL=new B.a9(-30,-14,0,14)
D.eOM=new B.a9(-30,-18,30,20)
D.eON=new B.a9(-30,-28,30,14)
D.eOO=new B.a9(-30,-2,30,18)
D.eOP=new B.a9(-30,-4,30,18)
D.eOQ=new B.a9(-32,-17,32,17)
D.eOR=new B.a9(-32,-28,32,18)
D.eOS=new B.a9(-33,-21,33,17)
D.eOT=new B.a9(-34,14,34,26)
D.a6D=new B.a9(-34,-18,34,18)
D.eOU=new B.a9(-34,-4,34,7)
D.eOV=new B.a9(-36,-24,36,20)
D.eOW=new B.a9(-38,-22,38,22)
D.eOX=new B.a9(-3,12,3,22)
D.eOY=new B.a9(-3,5,3,15)
D.eP_=new B.a9(-46,-34,46,28)
D.eP0=new B.a9(-48,-3,48,3)
D.eP3=new B.a9(-6,18,24,24)
D.eP4=new B.a9(-6,5,6,12)
D.eP5=new B.a9(-6,-22,6,-15)
D.eP6=new B.a9(-9,-16,9,22)
D.eP7=new B.a9(-4.5,-24,4.5,-21.2)
D.eP9=new B.a9(14,-9,17.5,9)
D.e66={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aNI=new B.dC(D.e66,5,x.R)
D.e5E={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eSh=new B.dC(D.e5E,10,x.R)
D.eUv=new B.as(24,44)
D.eUT=new B.as(54,38)
D.eV_=new B.as(66,38)
D.b7p=new B.fi(2,null,null,null,null,A.by,null,null,null,null)
D.eW_=new B.a7(16,16,D.b7p,null)
D.aOI=new B.hO(3,12,12,0.82,null)
D.fDt=new B.y("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aOT=new B.b1(D.fDt,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.daW=w([A.cs,A.bH,A.bk,A.aP,A.pA,A.cs],x.O)
D.f0W=new B.fW(A.A,0,6.283185307179586,A.x,D.daW,null,null)
D.f9Y=new B.G(!0,A.aS,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Qi,null,null,null)
D.f2a=new B.eR("You are here (Sun)",null,null,A.d_,null,null,null,null,null,null,D.f9Y)
D.aRj=new B.G(!0,A.aA,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2b=new B.eR("What we see",null,null,A.d_,null,null,null,null,null,null,D.aRj)
D.f7j=new B.G(!0,A2.Eu,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2e=new B.eR("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.d_,null,null,null,null,null,null,D.f7j)
D.fcb=new B.G(!0,A.ko,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2k=new B.eR("AI",null,null,A.d_,null,null,null,null,null,null,D.fcb)
D.aPH=new B.G(!0,A.c_,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2A=new B.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f35=new B.G(!0,A.bj,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3p=new B.G(!0,A.cn,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3V=new B.G(!0,A.c_,null,null,null,null,11,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4_=new B.G(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4f=new B.G(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4J=new B.G(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f57=new B.G(!0,A.c_,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5h=new B.G(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSU=new B.cS(A.ig,A.dD,6)
D.d4r=w([D.eSU],x.q)
D.f5B=new B.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d4r,null,null,null)
D.f5E=new B.G(!0,A.ek,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5H=new B.G(!0,A.c,null,null,null,null,17,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5J=new B.G(!0,A.c_,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6k=new B.G(!0,A.c_,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6s=new B.G(!0,A.aA,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6t=new B.G(!0,A.c_,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7n=new B.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7S=new B.G(!0,A.aA,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8n=new B.G(!0,A.aS,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSX=new B.cS(A.aW,A.J,3)
D.ayL=w([D.eSX],x.q)
D.f8q=new B.G(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ayL,null,null,null)
D.f8v=new B.G(!0,A.c,null,null,null,null,12.5,A.a6,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9c=new B.G(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Qi,null,null,null)
D.f9N=new B.G(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fac=new B.G(!0,A.tr,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fas=new B.G(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faN=new B.G(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faS=new B.G(!0,A.c_,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faX=new B.G(!0,A.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb2=new B.G(!0,A.aA,null,null,null,null,18,A.H,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbt=new B.G(!0,A.c_,null,null,null,null,8.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbH=new B.G(!0,A.n0,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbI=new B.G(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbX=new B.G(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQK=new B.G(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcv=new B.G(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSK=new B.cS(A.w,A.J,5)
D.cTm=w([D.eSK],x.q)
D.fcw=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cTm,null,null,null)
D.fcB=new B.G(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ayL,null,null,null)
D.fcR=new B.G(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcX=new B.G(!0,A.fU,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdd=new B.G(!0,A.c_,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdI=new B.G(!0,A.bk,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feg=new B.G(!0,A.c_,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feU=new B.G(!0,A.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff2=new B.G(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffv=new B.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffM=new B.G(!0,A.aS,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg5=new B.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg8=new B.G(!0,A.aS,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgT=new B.G(!0,A.aR,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRk=new B.G(!0,A.c,null,null,null,null,13,A.a6,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhh=new B.G(!0,A.tr,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhC=new B.G(!0,A.bk,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5M=new B.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi0=new B.y("\u26a0\ufe0f ",null,D.f5M,null,null,null,null,null,null,null,null,null)
D.fic=new B.y("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.wA,null,null,null,null,null,null,null,null,null)
D.fiD=new B.y("LETTER COUNT OF THE SECRET VERSION",null,Q.or,null,null,null,null,null,null,null,null,null)
D.fjH=new B.y("Pick one, then change it and see what happens.",null,A.wA,null,null,null,null,null,null,null,null,null)
D.fjL=new B.y("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.f6R=new B.G(!0,A.ad,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkF=new B.y("What do you want to invent? Type it below, or tap an idea.",null,D.f6R,null,null,null,null,null,null,null,null,null)
D.fl1=new B.y("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,R.a7U,null,null,null,null,null,null,null,null,null)
D.fm9=new B.y("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fmL=new B.y("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fmQ=new B.y("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fnn=new B.y("Make it yours",null,A.ki,null,null,null,null,null,null,null,null,null)
D.fnF=new B.y("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a8_,null,null,null,null,null,null,null,null,null)
D.fb7=new B.G(!0,A.k0,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq0=new B.y("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.fb7,null,null,null,null,null,null,null,null,null)
D.fqf=new B.y("YOUR DECODING",null,Q.or,null,null,null,null,null,null,null,null,null)
D.fqr=new B.y("5G",null,U.aQ8,null,null,null,null,null,null,null,null,null)
D.fdt=new B.G(!0,A.c_,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frz=new B.y("WHAT HAPPENS",null,D.fdt,null,null,null,null,null,null,null,null,null)
D.ftf=new B.y("Check",null,null,null,null,null,null,null,null,null,null,null)
D.ftV=new B.y("Change the words and pictures on the three slabs.",null,A.wA,null,null,null,null,null,null,null,null,null)
D.fu5=new B.y("All the parts and wires will be removed.",null,A.hW,null,null,null,null,null,null,null,null,null)
D.fup=new B.y("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fuZ=new B.y("Tap the crank on the board again and again to spin it faster.",null,A.hc,null,null,null,null,null,null,null,null,null)
D.fvR=new B.y("INTERCEPTED",null,Q.or,null,null,null,null,null,null,null,null,null)
D.fwb=new B.y("\ud83c\udfaf Challenges",null,A.de,null,null,null,null,null,null,null,null,null)
D.fwH=new B.y("Remove this part",null,R.aPL,null,null,null,null,null,null,null,null,null)
D.fwZ=new B.y("Clear the board?",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fcY=new B.G(!0,A.bu,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxe=new B.y("How the Lab works",null,D.fcY,null,null,null,null,null,null,null,null,null)
D.f4r=new B.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxy=new B.y("Electronics Lab",null,D.f4r,null,null,null,null,A.a2,null,1,null,null)
D.fxB=new B.y("?",null,L.aRe,null,null,null,null,null,null,null,null,null)
D.fb1=new B.G(!0,A.aP,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxG=new B.y("Planet Earth",null,D.fb1,null,null,null,null,null,null,null,null,null)
D.fyT=new B.y("Ready-made circuits",null,A.de,null,null,null,null,null,null,null,null,null)
D.fzv=new B.y("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hc,null,null,null,null,null,null,null,null,null)
D.fzO=new B.y("UNIVERSE EXPLORER",null,H.a7Y,null,null,null,null,null,null,null,null,null)
D.fCm=new B.y("SECRET VERSION",null,Q.or,null,null,null,null,null,null,null,null,null)
D.ffP=new B.G(!0,A.aS,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCT=new B.y("\u26a0 There is no air here, so a parachute will not work.",null,D.ffP,null,null,null,null,null,null,null,null,null)
D.fE4=new B.y("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,R.a7U,null,null,null,null,null,null,null,null,null)
D.fEy=new B.y("NGMY",null,A.uT,null,null,null,null,null,null,null,null,null)
D.fEL=new B.y("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.TW,null,null,null,null,null,null,null,null,null)
D.fF7=new B.y("Tap it to change its setting. Drag from the right dot to connect.",null,A.kI,null,null,null,null,null,null,null,null,null)
D.fG8=new B.y("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.wA,null,null,null,null,null,null,null,null,null)
D.fGa=new B.y("TOOLBOX",null,H.a7Y,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hdj=null
$.hdi=null
$.hjn=0
$.hLp=B.U(x.N,x.k)
$.hM_=B.U(x.N,x.k)
$.hcE=null
$.hLL=B.U(x.N,x.k)
$.hMO=B.U(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ihn","bD6",()=>{var v="led"
return B.a([C.axO("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fef(),v),C.axO("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.feg(),v),C.axO("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.feh(),v),C.axO("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.feo(),v),C.axO("Not both","Make the light go OFF only when both switches are ON.",2,new C.fep(),v),C.axO("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.feq(),"buzzer")],B.ax("O<ba9>"))})
w($,"ihP","bD7",()=>B.a([C.Ki("UNIVERSE","Earth, space and gravity",A.O2,A.aP,new C.feG()),C.Ki("ELECTRONICS LAB","Batteries, wires, real circuits",Ae.BL,A.aP,new C.feH()),C.Ki("DISCOVERY LAB","Body Explorer: a real 3D human",D.bFC,A.bk,new C.feI()),C.Ki("TOOLBOX","Converter, clock, games",T.alf,A.cY,new C.feJ()),C.Ki("CIPHER LAB","Make and crack secret codes",A.yA,A.aP,new C.feK()),C.Ki("REACTION LAB","Wire parts together",A.C5,A.bu,new C.feL()),C.Ki("SPARK PAINTER","Paint with light",A.a05,A.c5,new C.feM()),C.Ki("ROCKET LANDER","Land softly on the pad",A.o3,A.aP,new C.feN()),C.Ki("TITLE ANIMATOR","Make a moving title",A.yy,A.bH,new C.feO()),C.Ki("CIRCUIT LAB","Connect logic, learn it",A.a0w,A.cn,new C.feP())],B.ax("O<brN>")))
w($,"ijm","qg",()=>{var v,u,t=B.U(x.N,x.F)
for(v=0;v<76;++v){u=D.QA[v]
t.n(0,u.a,u)}return t})
w($,"iho","ahz",()=>B.a([C.Fz("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fer()),C.Fz("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fes()),C.Fz("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fet()),C.Fz("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.feu()),C.Fz("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fev()),C.Fz("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fei()),C.Fz("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fej()),C.Fz("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fek()),C.Fz("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fel()),C.Fz("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fem()),C.Fz("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fen())],B.ax("O<baa>")))
w($,"ihR","hrS",()=>B.a([C.a0x("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aS,A.c9,new C.feX()),C.a0x("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cs,A.bx,new C.feY()),C.a0x("Breathe","Calm down in a minute","\ud83e\udee7",A.iF,A.cB,new C.feZ()),C.a0x("Draw Pad","Sketch and share","\ud83c\udfa8",A.bA,A.b4,new C.ff_()),C.a0x("Memory Match","Find the pairs","\ud83c\udccf",A.aP,A.c8,new C.ff0()),C.a0x("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bH,A.bd,new C.ff1()),C.a0x("Tip & Split","Share the bill","\ud83e\uddfe",A.bk,A.aZ,new C.ff2()),C.a0x("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.by,A.aE,new C.ff3())],B.ax("O<bt6>")))
w($,"ihQ","hrR",()=>B.a([C.aeR("EARTH GLOBE","Turn it, tap a country",A.o1,A.aP,new C.feQ()),C.aeR("SOLAR SYSTEM","The Sun and its worlds",D.bFG,A.aS,new C.feR()),C.aeR("GRAVITY LAB","Drop, weigh, orbit",D.amm,A.cY,new C.feS()),C.aeR("BLACK HOLE","Throw in a star",A.FW,A.by,new C.feT()),C.aeR("GALAXY","Build, tilt, collide",A.yh,A.h4,new C.feU()),C.aeR("SIZE COMPARE","Earth next to a star",D.bFX,A.c5,new C.feV()),C.aeR("SEASONS & MOON","Why it is summer",A.vK,A.bu,new C.feW())],B.ax("O<bt1>")))})()};
(a=>{a["TvU9Q6pVMfvhmjrnfGCvIXT78z4="]=a.current})($__dart_deferred_initializers__);