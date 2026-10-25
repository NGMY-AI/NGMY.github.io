((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,V,G,N,A0,A1,A2,H,K,A3,T,A4,A5,W,O,X,A6,Y,L,R,A7,A8,P,I,E,A={
buB(d){return A.hsk(d)},
hsk(d){var w=0,v=C.j(x.dk),u,t=2,s=[],r,q,p,o
var $async$buB=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.ra(C.mV(""),d,B.hf,null).cI(0,B.Up),$async$buB)
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
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$buB,v)},
hDk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<12;++u){t=D.Nh[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.dk(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.ad(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=B.d.kT(D.Nh,new A.faZ())
if(w==null)w=B.d.gI(D.Nh)
s=C.Q(x.N,x.D)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.J)(r),++u){l=r[u].a
k=l[0]
l=$.a0m().h(0,l[1])
l.toString
s.m(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.J)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+B.d.gI(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new A.agX(w.a,w.b,m,w,s,!1)},
hxl(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.I(D.N4,new A.f2S(),x.bd).aH(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
hKS(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=B.a.cP(b2,"{")
v=B.a.oX(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(B.Q.aC(0,B.a.al(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aY(a5)
r=0
for(a6=x.a,a7=J.aW(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gT(a7)
p=C.t(J.q(q,"kind"))
o=C.t(J.q(q,"id"))
if(!$.a0m().am(0,p)||J.eR(s,o)||J.aa(t)>=8)continue
J.ci(s,o)
n=C.Q(a5,a8)
for(a9=0;a9<4;++a9){m=D.cX2[a9]
l=J.q(q,m)
if(typeof l=="number")J.aE(n,m,l)}k=B.k.D(typeof J.q(q,"x")=="number"?C.fc(J.q(q,"x")):0.2+B.k.J(r,3)*0.3,0.16,0.84)
j=B.k.D(typeof J.q(q,"y")=="number"?C.fc(J.q(q,"y")):0.25+B.k.aj(r,3)*0.3,0.1,0.9)
J.ci(t,new C.fz([o,p,k,j,n]));++r}if(J.aa(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aW(a6.a(J.q(u,"wires")));a5.C();){h=a5.gT(a5)
g=a6.a(h)
if(J.aa(g)<4)continue
f=C.t(J.q(g,0))
e=C.t(J.q(g,2))
d=B.o.D(B.k.L(C.fc(J.q(g,1))),0,1)
a0=B.o.D(B.k.L(C.fc(J.q(g,3))),0,1)
if(J.eR(s,f)&&J.eR(s,e)&&!J.y(f,e))J.ci(i,new C.d6([f,d,e,a0]))}if(J.aa(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.Q.a(J.q(u,"steps"))
a0=J.aW(a0==null?B.cK:a0)
while(a0.C()){a2=a0.gT(a0)
J.ci(a1,C.t(a2))}a3=a1
a0=J.q(u,"title")
a0=C.t(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new A.pZ(a0,C.t(a1==null?"":a1),t,i,B.T)
a0=a4.a
a1=a4.b
d=J.aa(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.t(a5==null?"":a5)
return new A.agX(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hBY(d){var w,v,u=A.fwi()
d.B(u)
for(w=0;w<60;++w)u.a4M(0,0.03333333333333333)
v=u.a
return B.d.bc(v,new A.f8p(u))&&!B.d.e7(v,new A.f8q())},
hBX(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.Q(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.J)(l),++u){t=l[u];++v
k.m(0,t.a,$.a0m().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.J)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+B.k.U(t.r)+" ohms")
if(B.d.q(D.cVH,p))q.push("level "+B.k.U(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.ax
o=p>0.05?"working (glow "+B.k.U(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+B.d.aH(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+B.k.ab(Math.abs(t.at)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.J)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+B.d.aH(s,"\n")+"\nWires: "+B.d.aH(l,"; ")},
hqY(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.J)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+B.d.aH(v,"\n")+"\n\n"}v=B.d.aH(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
hDj(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.a0m().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<16;++u){s=D.N4[u]
if(B.d.bc(w,new A.faW(s)))if(!C.dk(r,s.b.toLowerCase(),0))v=C.dk(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.ad("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a3(w,new A.faX(e),C.S(w).k("a3<1>")).gag(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.ad("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+B.k.ab(B.d.cO(w,0,new A.faY())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.ad("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=B.d.gI(w)
w=$.a0m().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
agX:function agX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
faZ:function faZ(){},
f2S:function f2S(){},
f8p:function f8p(d){this.a=d},
f8q:function f8q(){},
faW:function faW(d){this.a=d},
faX:function faX(d){this.a=d},
faY:function faY(){},
Th:function Th(d){this.a=d},
bfB:function bfB(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=null
_.y=_.x=!1
_.z=0
_.Q=""
_.as=0
_.ax=_.at=!1
_.ay=h
_.ch=i
_.c=_.a=null},
dUb:function dUb(d){this.a=d},
dUc:function dUc(d,e,f){this.a=d
this.b=e
this.c=f},
dUd:function dUd(d){this.a=d},
dUo:function dUo(d){this.a=d},
dUp:function dUp(d,e){this.a=d
this.b=e},
dUk:function dUk(d){this.a=d},
dUi:function dUi(d,e){this.a=d
this.b=e},
dUj:function dUj(d,e,f){this.a=d
this.b=e
this.c=f},
dUl:function dUl(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dUg:function dUg(d){this.a=d},
dUh:function dUh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUm:function dUm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dUf:function dUf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUn:function dUn(d,e){this.a=d
this.b=e},
dUe:function dUe(d,e){this.a=d
this.b=e},
dUs:function dUs(d){this.a=d},
dUr:function dUr(d){this.a=d},
dUt:function dUt(d){this.a=d},
dUq:function dUq(d){this.a=d},
dUu:function dUu(d,e){this.a=d
this.b=e},
dUv:function dUv(d,e){this.a=d
this.b=e},
dUw:function dUw(d,e){this.a=d
this.b=e},
dUx:function dUx(d,e){this.a=d
this.b=e},
buW(d,e,f){var w=null
return C.u(C.a([C.d(d,w,w,w,w,w,w,D.aIU,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.R,0,B.p)},
fWE(d,e,f,g){var w=null,v=C.m(24),u=C.H(f.j(0.6),B.r,1)
return C.at(C.p(w,C.u(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.ar,C.d(e,w,w,w,w,w,w,B.H0,B.L,w,w),B.aC,C.cf(B.fz,g,B.by,0,8)],x.p),B.m,w,B.e,B.R,0,B.p),B.i,w,w,new C.o(D.SX,w,u,v,w,w,B.n),w,w,w,w,B.a8,w,w,w),w,w,w)},
Er:function Er(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
tZ:function tZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
TG:function TG(d){this.a=d},
aAP:function aAP(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fa$=h
_.kt$=i
_.fB$=j
_.fb$=k
_.bq$=l
_.a5$=m
_.c=_.a=null},
e7P:function e7P(){},
e88:function e88(d){this.a=d},
e87:function e87(d,e){this.a=d
this.b=e},
e89:function e89(){},
e8a:function e8a(){},
e7R:function e7R(d,e,f){this.a=d
this.b=e
this.c=f},
e7Q:function e7Q(d,e){this.a=d
this.b=e},
e7G:function e7G(d){this.a=d},
e7H:function e7H(d){this.a=d},
e7I:function e7I(d){this.a=d},
e7J:function e7J(d){this.a=d},
e7K:function e7K(d){this.a=d},
e7L:function e7L(d){this.a=d},
e7M:function e7M(d){this.a=d},
e7N:function e7N(d){this.a=d},
e7O:function e7O(d){this.a=d},
e7E:function e7E(d){this.a=d},
e7F:function e7F(d){this.a=d},
e7D:function e7D(d){this.a=d},
e81:function e81(d,e){this.a=d
this.b=e},
e7X:function e7X(d){this.a=d},
e7Y:function e7Y(d){this.a=d},
e7U:function e7U(d){this.a=d},
e7Z:function e7Z(d){this.a=d},
e7T:function e7T(d){this.a=d},
e8_:function e8_(d){this.a=d},
e80:function e80(d){this.a=d},
e7S:function e7S(d){this.a=d},
e82:function e82(d,e){this.a=d
this.b=e},
e7W:function e7W(d,e){this.a=d
this.b=e},
e83:function e83(d){this.a=d},
e84:function e84(d){this.a=d},
e85:function e85(d){this.a=d},
e86:function e86(d){this.a=d},
e7V:function e7V(d){this.a=d},
bcE:function bcE(d,e){this.b=d
this.a=e},
aIx:function aIx(){},
bsz:function bsz(){},
cxT(){var w=0,v=C.j(x.E),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cxT=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.vU().ky(0,"assets/data/body3d.bin"),$async$cxT)
case 3:d=a1
$.fS9=J.eQ(B.dH.gaL(d),d.byteOffset,d.byteLength)
t=C.bCn(d)
s=t.getUint32(4,!0)
r=C.a([],x.Y)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=C.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=C.jc(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.cMc[i]
g=C.bg((l<<16|h<<8|g|4278190080)>>>0)
r.push(new A.a0K(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aOx))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new A.b5U(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cxT,v)},
aOj:function aOj(d,e,f){this.a=d
this.b=e
this.c=f},
a0K:function a0K(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b5U:function b5U(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Sa:function Sa(d){this.a=d},
azi:function azi(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.fa$=s
_.kt$=t
_.fB$=u
_.fb$=v
_.bq$=w
_.a5$=a0
_.c=_.a=null},
dw2:function dw2(d){this.a=d},
dw1:function dw1(d,e){this.a=d
this.b=e},
dvF:function dvF(d,e){this.a=d
this.b=e},
dvG:function dvG(){},
dw3:function dw3(){},
dvH:function dvH(d,e){this.a=d
this.b=e},
dvI:function dvI(d){this.a=d},
dvJ:function dvJ(){},
dvK:function dvK(d){this.a=d},
dvM:function dvM(d,e){this.a=d
this.b=e},
dvL:function dvL(d){this.a=d},
dvC:function dvC(d,e,f){this.a=d
this.b=e
this.c=f},
dvD:function dvD(d){this.a=d},
dvE:function dvE(d){this.a=d},
dvT:function dvT(d){this.a=d},
dvU:function dvU(d,e){this.a=d
this.b=e},
dvV:function dvV(d,e){this.a=d
this.b=e},
dvW:function dvW(d){this.a=d},
dvS:function dvS(d,e){this.a=d
this.b=e},
dvX:function dvX(d,e){this.a=d
this.b=e},
dvR:function dvR(d,e){this.a=d
this.b=e},
dvY:function dvY(d){this.a=d},
dvQ:function dvQ(d){this.a=d},
dvZ:function dvZ(d){this.a=d},
dvP:function dvP(d){this.a=d},
dw_:function dw_(d){this.a=d},
dvO:function dvO(d){this.a=d},
dw0:function dw0(d){this.a=d},
dvN:function dvN(d){this.a=d},
aHA:function aHA(){},
aHB:function aHB(){},
bVj:function bVj(d){var _=this
_.a=d
_.d=_.c=_.b=null},
bVk:function bVk(d,e){this.a=d
this.b=e},
bVl:function bVl(d){this.a=d},
auS(d,e,f,g,h){return new A.b6C(d,e,f,g,h)},
fAO(d,e,f,g,h,i){return $.hoo.ci(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new A.cEF(d,e,f,i,g,h))},
x2:function x2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
AU:function AU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
mS:function mS(d,e,f){this.a=d
this.b=e
this.c=f},
b6C:function b6C(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eYv:function eYv(){},
eYw:function eYw(){},
eYx:function eYx(){},
eYB:function eYB(){},
eYC:function eYC(){},
eYD:function eYD(){},
Sf:function Sf(d){this.a=d},
azl:function azl(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.fa$=m
_.kt$=n
_.fB$=o
_.fb$=p
_.bq$=q
_.a5$=r
_.c=_.a=null},
dyd:function dyd(d){this.a=d},
dxS:function dxS(d,e){this.a=d
this.b=e},
dxV:function dxV(){},
dye:function dye(){},
dxQ:function dxQ(d,e){this.a=d
this.b=e},
dxR:function dxR(d,e){this.a=d
this.b=e},
dxW:function dxW(d,e,f){this.a=d
this.b=e
this.c=f},
dxL:function dxL(){},
dxM:function dxM(){},
dxN:function dxN(d){this.a=d},
dxO:function dxO(d,e){this.a=d
this.b=e},
dxP:function dxP(d,e,f){this.a=d
this.b=e
this.c=f},
dxX:function dxX(){},
dxY:function dxY(d,e){this.a=d
this.b=e},
dxZ:function dxZ(d){this.a=d},
dxU:function dxU(d,e){this.a=d
this.b=e},
dxT:function dxT(d){this.a=d},
dxK:function dxK(d,e,f){this.a=d
this.b=e
this.c=f},
dy7:function dy7(d){this.a=d},
dy6:function dy6(d){this.a=d},
dy8:function dy8(d){this.a=d},
dy5:function dy5(d){this.a=d},
dy3:function dy3(d){this.a=d},
dy4:function dy4(d){this.a=d},
dy2:function dy2(d){this.a=d},
dy_:function dy_(d){this.a=d},
dy1:function dy1(d){this.a=d},
dy9:function dy9(d,e){this.a=d
this.b=e},
dya:function dya(d,e){this.a=d
this.b=e},
dyb:function dyb(d){this.a=d},
dy0:function dy0(d){this.a=d},
dyc:function dyc(d,e){this.a=d
this.b=e},
b6U:function b6U(d,e){this.b=d
this.a=e},
cEF:function cEF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aHG:function aHG(){},
bsj:function bsj(){},
hfn(){return new A.Ll(null)},
np(d,e,f,g,h){return new A.bo0(d,e,f,g,h)},
bmt(d,e,f){return B.k.D((d-e)/(f-e),0,1)},
fBj(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Ll:function Ll(d){this.a=d},
Iv:function Iv(d,e){this.a=d
this.b=e},
zg:function zg(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
azC:function azC(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dDq:function dDq(d,e){this.a=d
this.b=e},
dDp:function dDp(d){this.a=d},
dDs:function dDs(d,e){this.a=d
this.b=e},
dDr:function dDr(d){this.a=d},
bo0:function bo0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eYT:function eYT(){},
eYU:function eYU(){},
eYV:function eYV(){},
eZ5:function eZ5(){},
eZ8:function eZ8(){},
eZ9:function eZ9(){},
eZa:function eZa(){},
eZb:function eZb(){},
eZc:function eZc(){},
eZd:function eZd(){},
eZe:function eZe(){},
eYW:function eYW(){},
eYX:function eYX(){},
eYY:function eYY(){},
eYZ:function eYZ(){},
eZ_:function eZ_(){},
eZ0:function eZ0(){},
eZ1:function eZ1(){},
eZ2:function eZ2(){},
eZ3:function eZ3(){},
eZ4:function eZ4(){},
eZ6:function eZ6(){},
eZ7:function eZ7(){},
bmu:function bmu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eFF:function eFF(d){this.a=d},
eFE:function eFE(d,e){this.a=d
this.b=e},
eFC:function eFC(d){this.a=d},
eFG:function eFG(d){this.a=d},
eFD:function eFD(d,e){this.a=d
this.b=e},
acc:function acc(d,e,f){this.c=d
this.d=e
this.a=f},
ab7:function ab7(d,e,f){this.c=d
this.d=e
this.a=f},
O1:function O1(d,e,f,g,h,i,j,k,l,m){var _=this
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
bnr:function bnr(d,e){this.b=d
this.a=e},
bmY:function bmY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b5A:function b5A(d,e){this.b=d
this.a=e},
aDJ:function aDJ(d,e){this.c=d
this.a=e},
aDK:function aDK(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cN$=e
_.aX$=f
_.c=_.a=null},
eFl:function eFl(d){this.a=d},
eFk:function eFk(d){this.a=d},
eFj:function eFj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFi:function eFi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFg:function eFg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFf:function eFf(d,e,f){this.a=d
this.b=e
this.c=f},
eFh:function eFh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eFe:function eFe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFt:function eFt(d){this.a=d},
eFs:function eFs(d){this.a=d},
eFu:function eFu(d,e){this.a=d
this.b=e},
eFv:function eFv(d,e){this.a=d
this.b=e},
eFw:function eFw(d,e){this.a=d
this.b=e},
eFr:function eFr(d,e,f){this.a=d
this.b=e
this.c=f},
eFx:function eFx(d,e,f){this.a=d
this.b=e
this.c=f},
eFq:function eFq(d){this.a=d},
eFm:function eFm(d){this.a=d},
eFy:function eFy(d){this.a=d},
eFz:function eFz(d){this.a=d},
eFp:function eFp(d,e){this.a=d
this.b=e},
eFA:function eFA(d,e){this.a=d
this.b=e},
eFo:function eFo(d,e){this.a=d
this.b=e},
eFB:function eFB(d,e){this.a=d
this.b=e},
eFn:function eFn(d,e){this.a=d
this.b=e},
eFc:function eFc(){},
eFd:function eFd(){},
bm8:function bm8(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
blB:function blB(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b6g:function b6g(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
blD:function blD(d,e,f){this.b=d
this.c=e
this.a=f},
bpt:function bpt(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aJk:function aJk(){},
fXZ(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ap(0,new C.v(w,0)),u=e.aD(0,new C.v(w,0)),t=1-f,s=3*t
return d.aO(0,t*t*t).ap(0,v.aO(0,s*t*f)).ap(0,u.aO(0,s*f*f)).ap(0,e.aO(0,f*f*f))},
bcD(d,e,f,g,h,i){return $.hoZ.ci(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new A.d7Z(d,e,f,i,g,h))},
YX:function YX(d,e){this.a=d
this.b=e},
pv:function pv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
q8:function q8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
AY:function AY(d,e){this.a=d
this.b=e},
WY:function WY(d,e){this.a=d
this.b=e},
ac2:function ac2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Z8:function Z8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
B7:function B7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a9_:function a9_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a9g:function a9g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abb:function abb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcB:function bcB(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.O$=0
_.R$=t
_.bs$=_.bG$=0},
d82:function d82(d){this.a=d},
d83:function d83(d){this.a=d},
d8_:function d8_(d,e){this.a=d
this.b=e},
d80:function d80(d){this.a=d},
d81:function d81(d){this.a=d},
d84:function d84(d){this.a=d},
d85:function d85(d){this.a=d},
d86:function d86(d){this.a=d},
d87:function d87(d){this.a=d},
d88:function d88(d){this.a=d},
d89:function d89(d){this.a=d},
d8a:function d8a(d){this.a=d},
d8b:function d8b(d){this.a=d},
d8c:function d8c(d){this.a=d},
Ee:function Ee(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
TF:function TF(d){this.a=d},
aAO:function aAO(d,e,f,g,h,i,j){var _=this
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
_.bq$=i
_.a5$=j
_.c=_.a=null},
e79:function e79(d){this.a=d},
e6Z:function e6Z(d){this.a=d},
e70:function e70(){},
e71:function e71(){},
e74:function e74(){},
e75:function e75(d,e,f){this.a=d
this.b=e
this.c=f},
e76:function e76(d){this.a=d},
e77:function e77(d){this.a=d},
e72:function e72(){},
e73:function e73(d){this.a=d},
e7z:function e7z(d){this.a=d},
e78:function e78(){},
e6V:function e6V(d){this.a=d},
e7b:function e7b(d){this.a=d},
e7a:function e7a(d){this.a=d},
e7d:function e7d(){},
e7c:function e7c(d,e){this.a=d
this.b=e},
e6Y:function e6Y(){},
e6W:function e6W(d){this.a=d},
e6X:function e6X(d){this.a=d},
e7x:function e7x(d){this.a=d},
e7w:function e7w(d){this.a=d},
e7y:function e7y(d){this.a=d},
e7n:function e7n(d,e){this.a=d
this.b=e},
e7v:function e7v(d){this.a=d},
e7t:function e7t(d){this.a=d},
e7u:function e7u(d){this.a=d},
e7s:function e7s(d){this.a=d},
e7r:function e7r(d){this.a=d},
e7o:function e7o(d){this.a=d},
e7p:function e7p(d){this.a=d},
e7q:function e7q(d){this.a=d},
e7_:function e7_(){},
e7j:function e7j(d){this.a=d},
e7k:function e7k(d){this.a=d},
e7i:function e7i(d){this.a=d},
e7l:function e7l(d){this.a=d},
e7h:function e7h(d){this.a=d},
e7m:function e7m(d){this.a=d},
e7g:function e7g(d){this.a=d},
e7f:function e7f(d){this.a=d},
e7e:function e7e(d,e){this.a=d
this.b=e},
bcC:function bcC(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
d7Z:function d7Z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aIv:function aIv(){},
bh5:function bh5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NT:function NT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
TU:function TU(d){this.a=d},
bga:function bga(d,e,f,g,h,i,j,k){var _=this
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
_.bq$=j
_.a5$=k
_.c=_.a=null},
ehk:function ehk(d){this.a=d},
ehi:function ehi(d){this.a=d},
ehj:function ehj(){},
egW:function egW(){},
egV:function egV(){},
eh4:function eh4(d,e){this.a=d
this.b=e},
eh6:function eh6(d){this.a=d},
eha:function eha(d){this.a=d},
eh5:function eh5(d){this.a=d},
ehb:function ehb(d){this.a=d},
ehc:function ehc(d){this.a=d},
ehd:function ehd(d,e){this.a=d
this.b=e},
eh3:function eh3(d,e){this.a=d
this.b=e},
ehe:function ehe(d){this.a=d},
eh2:function eh2(d){this.a=d},
ehf:function ehf(d,e){this.a=d
this.b=e},
eh1:function eh1(d,e){this.a=d
this.b=e},
ehg:function ehg(d){this.a=d},
eh0:function eh0(d,e){this.a=d
this.b=e},
ehh:function ehh(d){this.a=d},
eh_:function eh_(d){this.a=d},
eh7:function eh7(d){this.a=d},
egZ:function egZ(d){this.a=d},
eh8:function eh8(d){this.a=d},
egY:function egY(d){this.a=d},
eh9:function eh9(d,e){this.a=d
this.b=e},
egX:function egX(d,e){this.a=d
this.b=e},
bnm:function bnm(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
U5:function U5(d){this.a=d},
aB1:function aB1(d,e,f,g){var _=this
_.d=d
_.e=$
_.f=e
_.r="bounce"
_.w=3
_.x=56
_.y=0
_.z=!0
_.Q=0
_.bq$=f
_.a5$=g
_.c=_.a=null},
enU:function enU(d,e){this.a=d
this.b=e},
enV:function enV(d,e,f){this.a=d
this.b=e
this.c=f},
enW:function enW(d){this.a=d},
enT:function enT(){},
enX:function enX(d,e){this.a=d
this.b=e},
enS:function enS(d,e){this.a=d
this.b=e},
enY:function enY(d,e){this.a=d
this.b=e},
enR:function enR(d,e){this.a=d
this.b=e},
enZ:function enZ(d){this.a=d},
enQ:function enQ(d){this.a=d},
eo_:function eo_(d,e){this.a=d
this.b=e},
enP:function enP(d,e){this.a=d
this.b=e},
eo0:function eo0(d){this.a=d},
eo1:function eo1(d){this.a=d},
enO:function enO(d,e){this.a=d
this.b=e},
aIE:function aIE(){},
aIK:function aIK(){},
Yt:function Yt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
TE:function TE(d){this.a=d},
aAI:function aAI(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.x=_.w=1
_.y=!1
_.z=!0
_.Q=7
_.at=_.as=null
_.ax=!0
_.fa$=h
_.kt$=i
_.fB$=j
_.fb$=k
_.bq$=l
_.a5$=m
_.c=_.a=null},
e4q:function e4q(d){this.a=d},
e4r:function e4r(d,e){this.a=d
this.b=e},
e4e:function e4e(d,e){this.a=d
this.b=e},
e4f:function e4f(d){this.a=d},
e4c:function e4c(d){this.a=d},
e4d:function e4d(d){this.a=d},
e4b:function e4b(d){this.a=d},
e4g:function e4g(d){this.a=d},
e4a:function e4a(d,e){this.a=d
this.b=e},
e4i:function e4i(d){this.a=d},
e49:function e49(d,e){this.a=d
this.b=e},
e4j:function e4j(d){this.a=d},
e48:function e48(d,e){this.a=d
this.b=e},
e4k:function e4k(d){this.a=d},
e47:function e47(d){this.a=d},
e4l:function e4l(d){this.a=d},
e46:function e46(d){this.a=d},
e4m:function e4m(d){this.a=d},
e45:function e45(d){this.a=d},
e4n:function e4n(d){this.a=d},
e4o:function e4o(d){this.a=d},
e4p:function e4p(d){this.a=d},
e44:function e44(d){this.a=d},
e4h:function e4h(d){this.a=d},
bgT:function bgT(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
a96:function a96(d,e,f){this.a=d
this.b=e
this.c=f},
U0:function U0(d){this.a=d},
bgf:function bgf(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=70
_.y=1
_.z=1.2
_.Q=1
_.as=120
_.at="attract"
_.ax="fish"
_.ay=null
_.ch=!0
_.CW=0
_.fa$=i
_.kt$=j
_.fB$=k
_.fb$=l
_.bq$=m
_.a5$=n
_.c=_.a=null},
enl:function enl(d){this.a=d},
enm:function enm(d){this.a=d},
enk:function enk(d){this.a=d},
ena:function ena(d,e){this.a=d
this.b=e},
enb:function enb(d){this.a=d},
en8:function en8(d){this.a=d},
en9:function en9(d){this.a=d},
en7:function en7(d){this.a=d},
en0:function en0(d){this.a=d},
en1:function en1(d){this.a=d},
en_:function en_(d){this.a=d},
enc:function enc(d,e){this.a=d
this.b=e},
en6:function en6(d,e){this.a=d
this.b=e},
end:function end(d,e){this.a=d
this.b=e},
en5:function en5(d,e){this.a=d
this.b=e},
ene:function ene(d){this.a=d},
en4:function en4(d){this.a=d},
enf:function enf(d){this.a=d},
en3:function en3(d,e){this.a=d
this.b=e},
eng:function eng(d){this.a=d},
en2:function en2(d,e){this.a=d
this.b=e},
enh:function enh(d){this.a=d},
emZ:function emZ(d,e){this.a=d
this.b=e},
eni:function eni(d){this.a=d},
emY:function emY(d,e){this.a=d
this.b=e},
enj:function enj(d){this.a=d},
emX:function emX(d,e){this.a=d
this.b=e},
boc:function boc(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
a9z:function a9z(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
Sd:function Sd(d){this.a=d},
azk:function azk(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=1
_.x=g
_.Q=_.z=_.y=!1
_.as=0
_.at=null
_.ax=0
_.fa$=h
_.kt$=i
_.fB$=j
_.fb$=k
_.bq$=l
_.a5$=m
_.c=_.a=null},
dxm:function dxm(d){this.a=d},
dxl:function dxl(d,e){this.a=d
this.b=e},
dxn:function dxn(){},
dxo:function dxo(d){this.a=d},
dxc:function dxc(d,e){this.a=d
this.b=e},
dxf:function dxf(d){this.a=d},
dxe:function dxe(d,e){this.a=d
this.b=e},
dxd:function dxd(d,e){this.a=d
this.b=e},
dxj:function dxj(d,e,f){this.a=d
this.b=e
this.c=f},
dxi:function dxi(d){this.a=d},
dxg:function dxg(d){this.a=d},
dxh:function dxh(d){this.a=d},
dxk:function dxk(d){this.a=d},
b6B:function b6B(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cEc:function cEc(d){this.a=d},
aHE:function aHE(){},
bsi:function bsi(){},
aIs:function aIs(){},
bsy:function bsy(){},
aIH:function aIH(){},
bsG:function bsG(){},
Ea:function Ea(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
aan:function aan(d,e,f){this.a=d
this.b=e
this.c=f},
Tz:function Tz(d){this.a=d},
bfQ:function bfQ(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x="peg"
_.y="Pentatonic"
_.z="bell"
_.Q=1.4
_.as=0
_.ax=_.at=null
_.ay=!0
_.fa$=i
_.kt$=j
_.fB$=k
_.fb$=l
_.bq$=m
_.a5$=n
_.c=_.a=null},
e0o:function e0o(d,e){this.a=d
this.b=e},
e0N:function e0N(d){this.a=d},
e0C:function e0C(d){this.a=d},
e0t:function e0t(d){this.a=d},
e0D:function e0D(d,e){this.a=d
this.b=e},
e0E:function e0E(d){this.a=d},
e0s:function e0s(d){this.a=d},
e0A:function e0A(d){this.a=d},
e0B:function e0B(d){this.a=d},
e0z:function e0z(d){this.a=d},
e0F:function e0F(d,e){this.a=d
this.b=e},
e0y:function e0y(d,e){this.a=d
this.b=e},
e0G:function e0G(d,e){this.a=d
this.b=e},
e0x:function e0x(d,e){this.a=d
this.b=e},
e0H:function e0H(d,e){this.a=d
this.b=e},
e0w:function e0w(d,e){this.a=d
this.b=e},
e0I:function e0I(d){this.a=d},
e0v:function e0v(d,e){this.a=d
this.b=e},
e0J:function e0J(d){this.a=d},
e0u:function e0u(d){this.a=d},
e0K:function e0K(d){this.a=d},
e0r:function e0r(d){this.a=d},
e0L:function e0L(d){this.a=d},
e0q:function e0q(d){this.a=d},
e0M:function e0M(d){this.a=d},
e0p:function e0p(d){this.a=d},
bdw:function bdw(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aaS:function aaS(d,e){this.a=d
this.b=e
this.c=-1000},
TD:function TD(d){this.a=d},
aAH:function aAH(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=!1
_.r=f
_.w=g
_.x=80
_.y="Pentatonic"
_.z="bell"
_.Q=!0
_.fa$=h
_.kt$=i
_.fB$=j
_.fb$=k
_.bq$=l
_.a5$=m
_.c=_.a=null},
e3O:function e3O(d,e){this.a=d
this.b=e},
e3P:function e3P(d,e,f){this.a=d
this.b=e
this.c=f},
e3W:function e3W(d){this.a=d},
e3V:function e3V(d){this.a=d},
e3X:function e3X(d,e){this.a=d
this.b=e},
e3Y:function e3Y(d){this.a=d},
e3U:function e3U(d){this.a=d},
e3Z:function e3Z(d){this.a=d},
e3T:function e3T(d,e){this.a=d
this.b=e},
e4_:function e4_(d,e){this.a=d
this.b=e},
e3S:function e3S(d,e){this.a=d
this.b=e},
e40:function e40(d,e){this.a=d
this.b=e},
e3R:function e3R(d,e){this.a=d
this.b=e},
e41:function e41(d){this.a=d},
e42:function e42(d){this.a=d},
e3Q:function e3Q(d){this.a=d},
e43:function e43(d){this.a=d},
bgU:function bgU(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aIq:function aIq(){},
bsw:function bsw(){},
aIr:function aIr(){},
bsx:function bsx(){},
eV2(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.H(e.j(0.4),B.r,1),s=x.p,r=C.a([C.C(C.d(d,w,w,w,w,w,w,D.a4f,w,w,w),1)],s)
if(f!=null)B.d.v(r,C.a([B.ab,f],s))
return C.p(w,C.A(r,B.m,w,B.e,B.j,0,w,w),B.i,w,w,new C.o(v,w,t,u,w,w,B.n),w,w,w,w,B.iU,w,w,1/0)},
hDJ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.Q(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.J)(d),++u){t=d[u]
s=v.h(0,t)
v.m(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gH(j))return!1
for(j=j.gdH(j),j=j.gaf(j);j.C();){s=j.gT(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.bS(d.length,0,!1,w)
q=d.length
p=J.e0(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bD(0,new A.fbf(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.uK.h(0,d[n]).a)return!1
m=C.eM([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.J)(j),++u){k=j[u]
if(m.G(0,k))l.push(k)}return m.a===d.length},
fDI(d){var w="TCAG",v=C.aK(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[B.a.cP(w,v[0])*16+B.a.cP(w,v[1])*4+B.a.cP(w,v[2])]},
ry:function ry(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b5t:function b5t(d,e){this.a=d
this.b=e},
fbf:function fbf(d,e){this.a=d
this.b=e},
TC:function TC(d){this.a=d},
aAG:function aAG(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
e3N:function e3N(d){this.a=d},
e3M:function e3M(d,e){this.a=d
this.b=e},
e3z:function e3z(d,e){this.a=d
this.b=e},
e3t:function e3t(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3u:function e3u(d){this.a=d},
e3y:function e3y(d,e){this.a=d
this.b=e},
e3x:function e3x(d,e){this.a=d
this.b=e},
e3v:function e3v(d){this.a=d},
e3w:function e3w(d,e){this.a=d
this.b=e},
e3H:function e3H(){},
e3I:function e3I(d){this.a=d},
e3G:function e3G(d){this.a=d},
e3J:function e3J(d){this.a=d},
e3F:function e3F(d){this.a=d},
e3D:function e3D(d){this.a=d},
e3E:function e3E(d,e){this.a=d
this.b=e},
e3A:function e3A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3C:function e3C(d){this.a=d},
e3K:function e3K(d,e){this.a=d
this.b=e},
e3B:function e3B(d,e){this.a=d
this.b=e},
e3L:function e3L(d,e){this.a=d
this.b=e},
bec:function bec(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dg2:function dg2(d,e){this.a=d
this.b=e},
SA:function SA(d){this.a=d},
bf5:function bf5(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dFg:function dFg(d){this.a=d},
dFf:function dFf(d,e){this.a=d
this.b=e},
dF5:function dF5(d){this.a=d},
dF4:function dF4(){},
dF6:function dF6(d){this.a=d},
dF3:function dF3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dFe:function dFe(){},
dF9:function dF9(){},
dFa:function dFa(d,e){this.a=d
this.b=e},
dF8:function dF8(d,e){this.a=d
this.b=e},
dFb:function dFb(d){this.a=d},
dF7:function dF7(d){this.a=d},
dFc:function dFc(d,e){this.a=d
this.b=e},
dFd:function dFd(d,e){this.a=d
this.b=e},
SQ:function SQ(d){this.a=d},
azO:function azO(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=0
_.z=_.y=_.x=1
_.as=_.Q=0
_.at="Grass feeds rabbits, rabbits feed foxes. Keep all three alive!"
_.bq$=g
_.a5$=h
_.c=_.a=null},
dI5:function dI5(d){this.a=d},
dI4:function dI4(d,e){this.a=d
this.b=e},
dHT:function dHT(){},
dHS:function dHS(d,e){this.a=d
this.b=e},
dHU:function dHU(d){this.a=d},
dHY:function dHY(d){this.a=d},
dHX:function dHX(d,e){this.a=d
this.b=e},
dHZ:function dHZ(d){this.a=d},
dHW:function dHW(d,e){this.a=d
this.b=e},
dI_:function dI_(d){this.a=d},
dHV:function dHV(d,e){this.a=d
this.b=e},
dI0:function dI0(d){this.a=d},
dI1:function dI1(d){this.a=d},
dI2:function dI2(d){this.a=d},
dI3:function dI3(d){this.a=d},
b9A:function b9A(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
cXH:function cXH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cXJ:function cXJ(d,e,f){this.a=d
this.b=e
this.c=f},
cXI:function cXI(d,e){this.a=d
this.b=e},
aHR:function aHR(){},
bvr(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.H(e.j(0.4),B.r,1),s=x.p,r=C.a([C.C(C.d(d,w,w,w,w,w,w,D.a4f,w,w,w),1)],s)
if(f!=null)B.d.v(r,C.a([B.ab,f],s))
return C.p(w,C.A(r,B.m,w,B.e,B.j,0,w,w),B.i,w,w,new C.o(v,w,t,u,w,w,B.n),w,w,w,w,B.iU,w,w,1/0)},
f6e(d,e,f,g,h){var w,v,u=null,t=C.jF(u,u,u,u,C.dw(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),e),B.a5,B.cp,u,B.f3,B.co)
t.fK()
w=t.b
v=w.c
w=w.a.c
w=f.aD(0,new C.v(v/2,w.gbd(w)/2))
t.a6(d,w)},
hAR(){var w,v,u,t,s,r,q,p,o=new C.f9()
o.e2(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+B.o.aj(t,4)
r=C.aY(v)
q=C.a([],u)
while(q.length<s){p=1+o.aE(5)
if(r.G(0,p))q.push(new C.V(p,1+o.aE(2+B.o.aj(t,3))))}B.d.aY(q,new A.f79())
w.push(new A.aO8(q))}return w},
a_l(d,e){var w,v,u,t
for(w=new C.V4(d),v="";w.C();){u=C.ju(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.ju(65+B.o.J(B.o.J(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
hN2(d,e){var w,v,u,t,s,r,q,p=C.ad("[^A-Z]",!0,!1,!1,!1),o=C.aK(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.V4(d),v=0,u="";w.C();){t=C.ju(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=B.o.J(v,p)
u+=C.ju(65+B.o.J(B.o.J(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aO8:function aO8(d){this.a=d},
bBf:function bBf(){},
f79:function f79(){},
S5:function S5(d){this.a=d},
beN:function beN(d,e,f,g,h,i){var _=this
_.d=d
_.e=0
_.f=e
_.r=f
_.w=0
_.x=$
_.y=g
_.bq$=h
_.a5$=i
_.c=_.a=null},
dtx:function dtx(){},
dtK:function dtK(d){this.a=d},
dtJ:function dtJ(d,e,f){this.a=d
this.b=e
this.c=f},
dtL:function dtL(d){this.a=d},
dtI:function dtI(d,e){this.a=d
this.b=e},
dty:function dty(d,e){this.a=d
this.b=e},
dtD:function dtD(){},
dtE:function dtE(d){this.a=d},
dtC:function dtC(d){this.a=d},
dtF:function dtF(d,e){this.a=d
this.b=e},
dtB:function dtB(d,e){this.a=d
this.b=e},
dtG:function dtG(d,e){this.a=d
this.b=e},
dtA:function dtA(d,e){this.a=d
this.b=e},
dtH:function dtH(d){this.a=d},
dtz:function dtz(d){this.a=d},
b5F:function b5F(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cwL:function cwL(d,e){this.a=d
this.b=e},
T3:function T3(d){this.a=d},
bfh:function bfh(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bq$=g
_.a5$=h
_.c=_.a=null},
dLT:function dLT(d){this.a=d},
dLS:function dLS(d,e){this.a=d
this.b=e},
dLU:function dLU(d){this.a=d},
dLR:function dLR(d,e){this.a=d
this.b=e},
dLJ:function dLJ(d,e,f){this.a=d
this.b=e
this.c=f},
dLN:function dLN(d){this.a=d},
dLM:function dLM(d){this.a=d},
dLO:function dLO(d,e){this.a=d
this.b=e},
dLL:function dLL(d,e){this.a=d
this.b=e},
dLP:function dLP(d){this.a=d},
dLK:function dLK(d,e){this.a=d
this.b=e},
dLQ:function dLQ(d,e){this.a=d
this.b=e},
bb1:function bb1(d,e,f){this.b=d
this.c=e
this.a=f},
d3z:function d3z(d,e){this.a=d
this.b=e},
d3A:function d3A(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Se:function Se(d){this.a=d},
bf_:function bf_(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dxJ:function dxJ(d){this.a=d},
dxI:function dxI(d,e){this.a=d
this.b=e},
dxr:function dxr(){},
dxA:function dxA(d){this.a=d},
dxz:function dxz(){},
dxB:function dxB(d){this.a=d},
dxy:function dxy(){},
dxC:function dxC(d){this.a=d},
dxx:function dxx(d){this.a=d},
dxD:function dxD(d){this.a=d},
dxw:function dxw(d){this.a=d},
dxE:function dxE(d){this.a=d},
dxv:function dxv(d){this.a=d},
dxF:function dxF(d,e){this.a=d
this.b=e},
dxu:function dxu(d,e){this.a=d
this.b=e},
dxG:function dxG(d){this.a=d},
dxt:function dxt(d,e){this.a=d
this.b=e},
dxH:function dxH(d){this.a=d},
dxs:function dxs(d,e){this.a=d
this.b=e},
aHw:function aHw(){},
aHZ:function aHZ(){},
h1N(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aD(0,e).gcr()*0.1
return new C.v((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
fwi(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new A.a20(w,v,u,B.cz,C.Q(x.N,x.y))},
h9h(d,e,f){var w=d.c,v=e===0?-42:42
return new C.v(w*f.a+v,d.d*f.b)},
mO:function mO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
v8:function v8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=3
_.f=0.5
_.r=100
_.w=!0
_.x=!1
_.ax=_.at=_.as=_.Q=_.z=_.y=0},
a7I:function a7I(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
a8M:function a8M(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a20:function a20(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.w=0
_.x=h},
bGB:function bGB(){},
bGL:function bGL(d){this.a=d},
bGH:function bGH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGN:function bGN(d){this.a=d},
bGO:function bGO(d){this.a=d},
bGM:function bGM(d){this.a=d},
bGP:function bGP(d,e,f){this.a=d
this.b=e
this.c=f},
bGQ:function bGQ(d){this.a=d},
bGD:function bGD(d){this.a=d},
bGE:function bGE(d){this.a=d},
bGC:function bGC(d){this.a=d},
bGF:function bGF(d,e,f){this.a=d
this.b=e
this.c=f},
bGG:function bGG(d){this.a=d},
bGK:function bGK(d){this.a=d},
bGJ:function bGJ(d){this.a=d},
bGI:function bGI(d){this.a=d},
aOi:function aOi(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bC2:function bC2(){},
bC3:function bC3(){},
pZ:function pZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ced:function ced(d){this.a=d},
fIw(d,e,f,g,h){return new A.afK(d,h,e,g,f)},
Wt(d,e,f){return new A.b6D(d,e,f)},
afK:function afK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.w=g
_.a=h},
afL:function afL(d,e,f,g,h,i,j,k){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.fa$=f
_.kt$=g
_.fB$=h
_.fb$=i
_.bq$=j
_.a5$=k
_.c=_.a=null},
bC_:function bC_(){},
bC0:function bC0(){},
bBz:function bBz(){},
bC1:function bC1(d,e){this.a=d
this.b=e},
bBY:function bBY(d,e,f){this.a=d
this.b=e
this.c=f},
bBU:function bBU(d){this.a=d},
bBR:function bBR(d,e,f){this.a=d
this.b=e
this.c=f},
bBS:function bBS(d,e){this.a=d
this.b=e},
bBV:function bBV(d){this.a=d},
bBP:function bBP(d,e){this.a=d
this.b=e},
bBQ:function bBQ(d,e){this.a=d
this.b=e},
bBT:function bBT(d){this.a=d},
bBW:function bBW(d){this.a=d},
bBN:function bBN(d,e){this.a=d
this.b=e},
bBO:function bBO(d,e){this.a=d
this.b=e},
bBX:function bBX(d){this.a=d},
bBZ:function bBZ(d,e){this.a=d
this.b=e},
bBK:function bBK(d,e){this.a=d
this.b=e},
bBM:function bBM(d,e){this.a=d
this.b=e},
bBL:function bBL(d,e){this.a=d
this.b=e},
bBD:function bBD(d,e){this.a=d
this.b=e},
bBE:function bBE(d){this.a=d},
bBC:function bBC(d){this.a=d},
bBF:function bBF(d,e,f){this.a=d
this.b=e
this.c=f},
bBB:function bBB(d,e){this.a=d
this.b=e},
bBG:function bBG(d,e,f){this.a=d
this.b=e
this.c=f},
bBA:function bBA(d,e){this.a=d
this.b=e},
bBH:function bBH(d){this.a=d},
bBI:function bBI(d){this.a=d},
bBJ:function bBJ(d){this.a=d},
b6D:function b6D(d,e,f){this.a=d
this.b=e
this.c=f},
eYE:function eYE(){},
eYF:function eYF(){},
eYG:function eYG(){},
eYu:function eYu(){},
eYH:function eYH(){},
eYt:function eYt(){},
eYI:function eYI(){},
eYy:function eYy(){},
eYs:function eYs(){},
eYz:function eYz(){},
eYr:function eYr(){},
eYA:function eYA(){},
eYq:function eYq(){},
SR:function SR(d){this.a=d},
azP:function azP(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.w=0
_.c=_.a=null},
dIb:function dIb(){},
dIa:function dIa(d){this.a=d},
dI9:function dI9(d,e,f){this.a=d
this.b=e
this.c=f},
dI8:function dI8(d,e){this.a=d
this.b=e},
dId:function dId(d,e){this.a=d
this.b=e},
dIc:function dIc(d,e){this.a=d
this.b=e},
dIe:function dIe(d){this.a=d},
dIf:function dIf(d){this.a=d},
auk:function auk(){},
b5S:function b5S(){},
f1Q(d,e,f,g){var w=null,v=C.m(24),u=C.H(f.j(0.6),B.r,1)
return C.at(C.p(w,C.u(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.ar,C.d(e,w,w,w,w,w,w,B.H0,B.L,w,w),B.aC,C.cf(B.fz,g,B.by,0,8)],x.p),B.m,w,B.e,B.R,0,B.p),B.i,w,w,new C.o(D.SX,w,u,v,w,w,B.n),w,w,w,B.ej,B.a8,w,w,w),w,w,w)},
fEb(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.f9()
b4.e2(b5*977+13)
w=B.o.D(1+B.o.aj(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aE(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.Q(u,t)
m=w
l=0
k=K.po
j=!0
i=0
for(;;){if(!(j&&i<12))break
A:{++i
h=2+b4.aE(4)
for(g=k.a,f=k.b,e=0;e<h;r=a0,l=d){d=l+g
a0=r+f
if(d<0||a0<0||d>=7||a0>=7){e=99
break}a1=a0*7+d
if(B.d.q(p,a1)||a1===q){j=!1
break}p.push(a1);++e}if(!j||e>=99||m===0)break
a2=b4.hd()?new C.V(f,-g):new C.V(-f,g)
a3=new C.V(-f,-g).A(0,a2)
a4=l+a2.a
a5=r+a2.b
if(a4<0||a5<0||a4>=7||a5>=7)break A
o.push(r*7+l);--m
g=B.d.gai(o)
n.m(0,g,a3?"/":"\\")
k=a2}}if(!j||o.length<w||p.length<5)continue
g=C.a([],v)
for(f=p.length,a6=0;a6<p.length;p.length===f||(0,C.J)(p),++a6){a7=p[a6]
if(!B.d.q(o,a7))g.push(a7)}if(g.length<3)continue
a8=B.o.D(2+B.o.aj(b5,8),2,4)
a9=C.eM([B.d.gai(g)],u)
B.d.fM(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.J)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.G(0,a7)}b0=C.aY(u)
b1=3+B.o.aj(b5,3)
v=q+1
b2=0
for(;;){if(b0.a<b1){b3=b2+1
g=b2<200
b2=b3}else g=!1
if(!g)break
B:{a7=b4.aE(49)
if(B.d.q(p,a7)||a7===q||a9.q(0,a7)||B.d.q(o,a7))break B
if(a7===v)break B
b0.G(0,a7)}}v=b5>=10?1:0
return new A.aSz(b0,a9,C.Q(u,t),q,K.po,w+v)}return new A.aSz(C.aY(u),C.eM([25],u),C.Q(u,t),21,K.po,1)},
h1I(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aY(x.S),n=d.e,m=B.o.J(n,7),l=B.o.aj(n,7),k=d.f
p.push(n)
for(n=d.c,w=d.b,v=d.d,u=0;u<200;++u){t=k.a
m+=t
s=k.b
l+=s
if(m<0||l<0||m>=7||l>=7)break
r=l*7+m
if(w.q(0,r))break
p.push(r)
if(n.q(0,r))o.G(0,r)
q=e.h(0,r)
if(q==null)q=v.h(0,r)
if(q==="/")k=new C.V(-s,-t)
if(q==="\\")k=new C.V(k.b,k.a)}return new C.bjT(p,o)},
fYc(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aSz:function aSz(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
Tm:function Tm(d){this.a=d},
bfD:function bfD(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fa$=g
_.kt$=h
_.fB$=i
_.fb$=j
_.bq$=k
_.a5$=l
_.c=_.a=null},
dXb:function dXb(d){this.a=d},
dXa:function dXa(d,e){this.a=d
this.b=e},
dXc:function dXc(){},
dX1:function dX1(d,e){this.a=d
this.b=e},
dX2:function dX2(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dX5:function dX5(d,e){this.a=d
this.b=e},
dX3:function dX3(d){this.a=d},
dX4:function dX4(d){this.a=d},
dX6:function dX6(d){this.a=d},
dX7:function dX7(d){this.a=d},
dX8:function dX8(d){this.a=d},
dX9:function dX9(d,e){this.a=d
this.b=e},
bcH:function bcH(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
d8l:function d8l(d,e,f){this.a=d
this.b=e
this.c=f},
d8o:function d8o(d,e,f){this.a=d
this.b=e
this.c=f},
d8m:function d8m(d){this.a=d},
d8n:function d8n(d){this.a=d},
To:function To(d){this.a=d},
aAs:function aAs(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fa$=g
_.kt$=h
_.fB$=i
_.fb$=j
_.bq$=k
_.a5$=l
_.c=_.a=null},
dXu:function dXu(d){this.a=d},
dXt:function dXt(d,e){this.a=d
this.b=e},
dXv:function dXv(){},
dXf:function dXf(){},
dXo:function dXo(d,e){this.a=d
this.b=e},
dXl:function dXl(d){this.a=d},
dXh:function dXh(d){this.a=d},
dXm:function dXm(d){this.a=d},
dXn:function dXn(d){this.a=d},
dXg:function dXg(d){this.a=d},
dXp:function dXp(d){this.a=d},
dXk:function dXk(d,e){this.a=d
this.b=e},
dXq:function dXq(d){this.a=d},
dXj:function dXj(d,e){this.a=d
this.b=e},
dXr:function dXr(d){this.a=d},
dXi:function dXi(d,e){this.a=d
this.b=e},
dXs:function dXs(d){this.a=d},
bcW:function bcW(d,e){this.b=d
this.a=e},
aIf:function aIf(){},
bsp:function bsp(){},
aIg:function aIg(){},
bsq:function bsq(){},
Zq(d,e,f,g,h,i){return new A.bpk(d,e,f,g,h,i)},
bpk:function bpk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eZm:function eZm(){},
eZn:function eZn(){},
eZo:function eZo(){},
eZp:function eZp(){},
eZq:function eZq(){},
eZr:function eZr(){},
eZs:function eZs(){},
eZt:function eZt(){},
a5N:function a5N(d){this.a=d},
c92:function c92(d){this.a=d},
c93:function c93(){},
c91:function c91(d,e){this.a=d
this.b=e},
c90:function c90(d){this.a=d},
Ua:function Ua(d){this.a=d},
aBd:function aBd(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fa$=f
_.kt$=g
_.fB$=h
_.fb$=i
_.bq$=j
_.a5$=k
_.c=_.a=null},
es_:function es_(d){this.a=d},
erW:function erW(d){this.a=d},
erV:function erV(d,e){this.a=d
this.b=e},
erY:function erY(d,e){this.a=d
this.b=e},
erX:function erX(d,e){this.a=d
this.b=e},
erZ:function erZ(d){this.a=d},
bqE:function bqE(d,e,f){this.b=d
this.c=e
this.a=f},
SY:function SY(d){this.a=d},
bfc:function bfc(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fa$=d
_.kt$=e
_.fB$=f
_.fb$=g
_.bq$=h
_.a5$=i
_.c=_.a=null},
dKb:function dKb(){},
dKc:function dKc(){},
dK6:function dK6(d,e){this.a=d
this.b=e},
dK8:function dK8(d,e){this.a=d
this.b=e},
dK9:function dK9(d){this.a=d},
dK7:function dK7(d){this.a=d},
dKa:function dKa(d){this.a=d},
blC:function blC(d,e,f){this.b=d
this.c=e
this.a=f},
Sb:function Sb(d){this.a=d},
beS:function beS(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fa$=d
_.kt$=e
_.fB$=f
_.fb$=g
_.bq$=h
_.a5$=i
_.c=_.a=null},
dw9:function dw9(){},
dwa:function dwa(){},
dw4:function dw4(){},
dw7:function dw7(d,e){this.a=d
this.b=e},
dw6:function dw6(d,e){this.a=d
this.b=e},
dw8:function dw8(d){this.a=d},
dw5:function dw5(d){this.a=d},
aEz:function aEz(d,e,f){this.a=d
this.b=e
this.c=f},
SP:function SP(d){this.a=d},
bf6:function bf6(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dHI:function dHI(d,e){this.a=d
this.b=e},
dHJ:function dHJ(d){this.a=d},
dHH:function dHH(d,e){this.a=d
this.b=e},
dHK:function dHK(d){this.a=d},
dHG:function dHG(d,e){this.a=d
this.b=e},
dHL:function dHL(d){this.a=d},
dHF:function dHF(d,e){this.a=d
this.b=e},
dHM:function dHM(d,e){this.a=d
this.b=e},
dHE:function dHE(d,e){this.a=d
this.b=e},
dHN:function dHN(d){this.a=d},
dHD:function dHD(d,e){this.a=d
this.b=e},
dHO:function dHO(d){this.a=d},
dHC:function dHC(d){this.a=d},
dHP:function dHP(d){this.a=d},
dHB:function dHB(d){this.a=d},
dHQ:function dHQ(d){this.a=d},
dHR:function dHR(d){this.a=d},
dHA:function dHA(d){this.a=d},
bh6:function bh6(d,e,f){this.b=d
this.c=e
this.a=f},
TA:function TA(d){this.a=d},
aAC:function aAC(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
e1D:function e1D(d,e){this.a=d
this.b=e},
e1E:function e1E(d,e,f){this.a=d
this.b=e
this.c=f},
e1C:function e1C(d,e,f){this.a=d
this.b=e
this.c=f},
e1F:function e1F(d){this.a=d},
e1B:function e1B(d){this.a=d},
e1J:function e1J(d){this.a=d},
e1I:function e1I(d,e){this.a=d
this.b=e},
e1H:function e1H(d,e){this.a=d
this.b=e},
e1K:function e1K(d,e){this.a=d
this.b=e},
e1G:function e1G(d,e){this.a=d
this.b=e},
e1L:function e1L(d){this.a=d},
TK:function TK(d){this.a=d},
aAT:function aAT(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
e9m:function e9m(d){this.a=d},
e9n:function e9n(d){this.a=d},
e9k:function e9k(d,e){this.a=d
this.b=e},
e9l:function e9l(d){this.a=d},
e9j:function e9j(d){this.a=d},
e9o:function e9o(d){this.a=d},
e9p:function e9p(d){this.a=d},
e9q:function e9q(d){this.a=d},
e9r:function e9r(d,e){this.a=d
this.b=e},
U4:function U4(d){this.a=d},
bgj:function bgj(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
enE:function enE(){},
enN:function enN(){},
enJ:function enJ(d){this.a=d},
enI:function enI(){},
enK:function enK(d,e){this.a=d
this.b=e},
enH:function enH(d,e){this.a=d
this.b=e},
enL:function enL(d){this.a=d},
enG:function enG(d,e){this.a=d
this.b=e},
enM:function enM(d){this.a=d},
enF:function enF(d){this.a=d},
Ty:function Ty(d){this.a=d},
bfO:function bfO(d,e,f,g,h,i,j,k){var _=this
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
_.fa$=f
_.kt$=g
_.fB$=h
_.fb$=i
_.bq$=j
_.a5$=k
_.c=_.a=null},
e0i:function e0i(){},
e0j:function e0j(){},
e0b:function e0b(d){this.a=d},
e0a:function e0a(d){this.a=d},
e0c:function e0c(d){this.a=d},
e09:function e09(d){this.a=d},
e0d:function e0d(d){this.a=d},
e08:function e08(d){this.a=d},
e0e:function e0e(d,e){this.a=d
this.b=e},
e07:function e07(d,e){this.a=d
this.b=e},
e0f:function e0f(d){this.a=d},
e06:function e06(d,e){this.a=d
this.b=e},
e0g:function e0g(d){this.a=d},
e05:function e05(d,e){this.a=d
this.b=e},
e0h:function e0h(d){this.a=d},
e04:function e04(d,e){this.a=d
this.b=e},
b8W:function b8W(d,e,f){this.c=d
this.d=e
this.a=f},
aHC:function aHC(){},
bsh:function bsh(){},
aHU:function aHU(){},
bsl:function bsl(){},
aIo:function aIo(){},
bsv:function bsv(){},
aIR:function aIR(){},
bsH:function bsH(){},
jd(d,e,f,g,h,i){return new A.b2H(h,d,f,g,i,e,null)},
hMy(d,e,f,g){var w=null
return C.cb(w,w,!0,w,new A.fu8(g,e,f),d,w,!0,!0,x.H)},
ho(d,e,f,g,h,i,j){return new A.ast(f,j,i,h,g,d,e,null)},
qf(d,e,f){return A.hMG(d,e,f)},
hMG(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qf=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aT.ae$.x.h(0,e)
n=n==null?null:n.gb3()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.mb(2),$async$qf)
case 7:q=h
w=8
return C.b(q.hv(B.fZ),$async$qf)
case 8:p=h
if(p==null){w=1
break}o=J.fa(B.dH.gaL(p))
w=9
return C.b(A.cjd(C.a([A.fRV(o,"image/png",f+".png")],x.C),"Made in NGMY Core Protocol"),$async$qf)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.E(x.U).f.P(D.aHJ)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qf,v)},
hj4(b4,b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=B.o.aj(22050*b5,1000),b1=b0*2,b2=new DataView(new ArrayBuffer(44+b1)),b3=new A.c8X(b2)
b3.$2(0,"RIFF")
b2.setUint32(4,36+b1,!0)
b3.$2(8,"WAVE")
b3.$2(12,"fmt ")
b2.setUint32(16,16,!0)
b2.setUint16(20,1,!0)
b2.setUint16(22,1,!0)
b2.setUint32(24,22050,!0)
b2.setUint32(28,44100,!0)
b2.setUint16(32,2,!0)
b2.setUint16(34,16,!0)
b3.$2(36,"data")
b2.setUint32(40,b1,!0)
w=new C.f9()
w.e2(3)
v=3
u=0.006
t=!1
s=0
switch(b8){case"piano":r=D.cBq
q=D.cG4
v=3.4
break
case"organ":r=D.cF6
q=D.cSE
u=0.02
t=!0
break
case"bell":r=D.cxr
q=D.cws
v=2.4
break
case"pluck":r=D.cBp
q=D.ciD
v=7
break
case"synth":r=D.cTs
q=D.cV_
u=0.012
t=!0
break
case"flute":r=D.cYD
q=D.bUo
u=0.07
t=!0
s=0.035
break
default:r=D.ajB
q=D.ajB}b1=r.length
p=C.bS(b1,0,!1,x.i)
for(o="saw"===b6,n="tri"===b6,m="noise"===b6,l="square"===b6,k=b8.length!==0,j=-v,i=j*0.12,h=s>0,g=b8!=="bell",f=b8!=="piano",e=b8==="pluck",d=0,a0=0;a0<b0;++a0){a1=a0/22050
a2=1-a0/b0
a3=b4*(1+b7*a2)
if(k){for(a2=6.283185307179586*a3,a4=j*a1,a5=0,a6=0;a6<b1;++a6){a7=p[a6]+a2*q[a6]/22050
p[a6]=a7
a8=!g||!f||e?Math.exp(a4*(1+a6*0.35)):1
a5+=Math.sin(a7)*r[a6]*a8}a5/=1.9
if(h)a5+=(w.ah()*2-1)*s
a9=Math.min(1,a1/u)*Math.min(1,(b0-a0)/1984.5)
a5*=t?a9:a9*Math.exp(i*a1)}else{d+=6.283185307179586*a3/22050
A:{if(l){a4=Math.sin(d)>=0?0.6:-0.6
break A}if(m){a4=(w.ah()*2-1)*0.8
break A}if(n){a4=0.6366197723675814*Math.asin(Math.sin(d))
break A}if(o){a4=B.k.J(d/6.283185307179586,1)*1.2-0.6
break A}a4=Math.sin(d)
break A}a5=a4*(Math.min(1,a0/120)*Math.pow(a2,1.6))}b2.setInt16(44+a0*2,B.o.D(B.k.U(a5*0.8*32e3),-32768,32767),!0)}return J.fa(B.dH.gaL(b2))},
e1(d,e,f,g,h,i){return A.hj5(d,e,f,g,h,i)},
hj5(d,e,f,g,h,i){var w=0,v=C.j(x.H),u=1,t=[],s,r,q,p,o,n
var $async$e1=C.e(function(j,k){if(j===1){t.push(k)
w=u}for(;;)switch(w){case 0:u=3
s=""+B.k.U(d)+"|"+f+"|"+i+"|"+C.t(g)+"|"+e
r=$.hj3.ci(0,s,new A.c8Z(d,f,i,g,e))
if($.c8W.length<12){p=C.afx()
p.Lc(B.aFQ)
$.c8W.push(p)}p=$.fPc
$.fPc=p+1
q=$.c8W[B.o.J(p,$.c8W.length)]
w=6
return C.b(J.h6r(q,new C.a0Q(r,null),h),$async$e1)
case 6:u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$e1,v)},
kY(d,e,f,g){var w,v=$.c9_
if(v==="music")return A.e1(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return A.e1(261.63*v,w,f,0,g,"sine")}return A.v3(v,e,f,g)},
v3(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,B.o.D(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return A.e1(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return A.e1(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return A.e1(140+B.o.J(e,12)*9,"",150,0.9,g,v)
case"bubble":return A.e1(260+B.o.J(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":A.e1(t,"",160,-0.7,g*0.4,w)
return A.e1(900,"",90,0,g*0.45,u)
case"zap":return A.e1(t*3,"",150,1.6,g*0.4,"square")
case"click":return A.e1(2600+B.o.J(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":A.e1(320,"",220,-0.7,g*0.35,v)
return A.e1(1500,"",200,0,g*0.22,u)
case"organic":return A.e1(85+B.o.J(e,12)*5,"",190,1.1,g,v)
case"lab":return A.e1(t*1.6,"",140,-0.3,g*0.55,w)
default:return A.e1(t,"",s,0,g*0.5,w)}},
Aj(d,e,f,g){var w,v,u,t,s,r,q,p=$.c9_
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.J)(e),++w)A.kY(d,e[w],f,g)
return}for(p=C.dg(e,0,C.dK(4,"count",x.S),C.S(e).c),v=p.$ti,p=new C.bR(p,p.gH(0),v.k("bR<ai.E>")),u=x.H,v=v.k("ai.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)A.kY(d,s,f,g)
else C.bK(new C.b6(1000*q),new A.c8Y(d,s,f,g),u)}},
a5M(d,e){var w="sine",v="noise"
switch(d){case"kick":A.e1(95,"",200,1.8,e,w)
break
case"snare":A.e1(220,"",140,0,e*0.65,v)
break
case"hat":A.e1(5000,"",50,0,e*0.35,v)
break
case"open":A.e1(5200,"",220,0,e*0.35,v)
break
case"clap":A.e1(1100,"",100,0,e*0.5,v)
break
case"tom":A.e1(150,"",230,1,e,w)
break
case"low":A.e1(100,"",260,0.9,e,w)
break
case"rim":A.e1(1700,"",60,0,e*0.4,"square")
break
case"cow":A.e1(820,"",240,0,e*0.3,"square")
break
case"crash":A.e1(3200,"",650,0,e*0.4,v)
break
case"shake":A.e1(7000,"",90,0,e*0.3,v)
break
default:A.e1(60,"",300,0,e,w)}},
yl(d){return A.him(d)},
him(d){var w=0,v=C.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l
var $async$yl=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.au(),$async$yl)
case 7:r=f
q=C.aR(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.Q(x.N,x.z)
w=1
break}p=B.Q.aC(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?C.Y(p,o,n):C.Q(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=C.Q(x.N,x.z)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$yl,v)},
v0(d,e){return A.hin(d,e)},
hin(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$v0=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.au(),$async$v0)
case 6:s=g
w=7
return C.b(s.an("String","ngmy_play_progress_v1_"+d,B.Q.ak(e,null)),$async$v0)
case 7:u=1
w=5
break
case 3:u=2
q=t.pop()
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$v0,v)},
b2H:function b2H(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cl8:function cl8(d){this.a=d},
cl9:function cl9(d,e){this.a=d
this.b=e},
fu8:function fu8(d,e,f){this.a=d
this.b=e
this.c=f},
fu7:function fu7(d){this.a=d},
dv:function dv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cl4:function cl4(d){this.a=d},
eD:function eD(d,e,f){this.c=d
this.d=e
this.a=f},
ast:function ast(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ff:function ff(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cl3:function cl3(d){this.a=d},
DJ:function DJ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cla:function cla(d){this.a=d},
m6:function m6(){},
cl5:function cl5(d,e,f){this.a=d
this.b=e
this.c=f},
cl7:function cl7(d){this.a=d},
cl6:function cl6(){},
c8X:function c8X(d){this.a=d},
c8Z:function c8Z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c8Y:function c8Y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cnF(){var w=0,v=C.j(x.cL),u,t
var $async$cnF=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=A
w=3
return C.b($.vU().b9c("assets/data/world110.json"),$async$cnF)
case 3:u=t.hmQ(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cnF,v)},
hmQ(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.a,a0=d.a(B.Q.aC(0,a2,null)),a1=C.a([],x.B)
for(w=J.aW(a0),v=x.n,u=x.b,t=x.h,s=x.gO;w.C();){r=t.a(w.gT(w))
q=C.a([],s)
for(p=J.a4(r),o=J.aW(d.a(p.h(r,"r")));o.C();){n=o.gT(o)
m=C.a([],u)
for(l=J.aW(d.a(n));l.C();){k=l.gT(l)
j=J.a4(k)
m.push(C.a([C.fc(j.h(k,0)),C.fc(j.h(k,1))],v))}q.push(m)}o=C.cJ(p.h(r,"n"))
m=C.cJ(p.h(r,"a"))
l=C.cJ(p.h(r,"ct"))
j=C.cJ(p.h(r,"sr"))
i=C.fc(p.h(r,"pop"))
h=C.fc(p.h(r,"gdp"))
g=C.cJ(p.h(r,"inc"))
f=C.ad("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aME(g,f,"",0)
f=C.fc(J.q(p.h(r,"c"),0))
p=C.fc(J.q(p.h(r,"c"),1))
e=new A.a8s(o,m,l,j,i,h,g,f,p,q)
e.bqV(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new A.a8t(a1)},
f8Z(d){if(d>=1e12)return B.k.ab(d/1e12,1)+" trillion"
if(d>=1e9)return B.k.ab(d/1e9,2)+" billion"
if(d>=1e6)return B.k.ab(d/1e6,1)+" million"
if(d>=1000)return B.k.ab(d/1000,1)+" thousand"
return B.k.ab(d,0)},
F6(d){var w,v,u,t=B.o.u(B.k.U(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&B.o.J(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
a8s:function a8s(d,e,f,g,h,i,j,k,l,m){var _=this
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
a8t:function a8t(d){this.a=d},
ub:function ub(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
N9:function N9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
x0:function x0(d,e,f){this.a=d
this.b=e
this.c=f},
N8:function N8(d){this.a=0
this.b=d
this.c=0},
hoJ(d,e,f){return $.hoK.ci(0,d+"|"+C.t(e)+"|"+f.l(),new A.d4n(d,e,f))},
T4:function T4(d){this.a=d},
aA_:function aA_(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fa$=j
_.kt$=k
_.fB$=l
_.fb$=m
_.bq$=n
_.a5$=o
_.c=_.a=null},
dMU:function dMU(d){this.a=d},
dMT:function dMT(d,e){this.a=d
this.b=e},
dMm:function dMm(d){this.a=d},
dMk:function dMk(d){this.a=d},
dMl:function dMl(d,e,f){this.a=d
this.b=e
this.c=f},
dMj:function dMj(d){this.a=d},
dMi:function dMi(){},
dMh:function dMh(d){this.a=d},
dMF:function dMF(d,e){this.a=d
this.b=e},
dMG:function dMG(d,e){this.a=d
this.b=e},
dMu:function dMu(d){this.a=d},
dMv:function dMv(d){this.a=d},
dMt:function dMt(d){this.a=d},
dMw:function dMw(d){this.a=d},
dMn:function dMn(d,e){this.a=d
this.b=e},
dMo:function dMo(d){this.a=d},
dMH:function dMH(d,e){this.a=d
this.b=e},
dMs:function dMs(d,e){this.a=d
this.b=e},
dML:function dML(d){this.a=d},
dME:function dME(d){this.a=d},
dMM:function dMM(d,e){this.a=d
this.b=e},
dMD:function dMD(d,e){this.a=d
this.b=e},
dMN:function dMN(d){this.a=d},
dMC:function dMC(d,e){this.a=d
this.b=e},
dMO:function dMO(d){this.a=d},
dMB:function dMB(d,e){this.a=d
this.b=e},
dMP:function dMP(d){this.a=d},
dMA:function dMA(d,e){this.a=d
this.b=e},
dMQ:function dMQ(d){this.a=d},
dMz:function dMz(d,e){this.a=d
this.b=e},
dMR:function dMR(d){this.a=d},
dMy:function dMy(d){this.a=d},
dMS:function dMS(d){this.a=d},
dMx:function dMx(d){this.a=d},
dMI:function dMI(d){this.a=d},
dMr:function dMr(d){this.a=d},
dMJ:function dMJ(d){this.a=d},
dMq:function dMq(d){this.a=d},
dMK:function dMK(d){this.a=d},
dMp:function dMp(d){this.a=d},
dMg:function dMg(){},
dMf:function dMf(d){this.a=d},
dMe:function dMe(d){this.a=d},
bb8:function bb8(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d4n:function d4n(d,e,f){this.a=d
this.b=e
this.c=f},
d4o:function d4o(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aI_:function aI_(){},
aI0:function aI0(){},
act(d,e,f,g,h){return new A.bpf(d,e,f,g,h)},
bpf:function bpf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eZf:function eZf(){},
eZg:function eZg(){},
eZh:function eZh(){},
eZi:function eZi(){},
eZj:function eZj(){},
eZk:function eZk(){},
eZl:function eZl(){},
U6:function U6(d){this.a=d},
bgm:function bgm(){this.d=$
this.c=this.a=null},
eoa:function eoa(d){this.a=d},
eob:function eob(d){this.a=d},
eo9:function eo9(d){this.a=d},
eoc:function eoc(){},
eo8:function eo8(d,e){this.a=d
this.b=e},
eo7:function eo7(d){this.a=d},
hpa(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.f9()
v.e2(w)
t.push(v.ah()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.f9()
v.e2(w+900)
u.push(2.2+v.ah())}return new A.bg9(new C.cn(null,x.A),new A.N8(B.cz),B.J,B.at,t,u,$,B.bs,0,C.a([],x.X),null,null)},
hpc(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hpb(d){return 1.5+1.6*Math.log(d.d/1000+1)},
fT5(d,e,f){return $.hpM.ci(0,d+"|"+C.t(e)+"|"+f.l(),new A.eHY(d,e,f))},
TT:function TT(d){this.a=d},
bg9:function bg9(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fa$=j
_.kt$=k
_.fB$=l
_.fb$=m
_.bq$=n
_.a5$=o
_.c=_.a=null},
egA:function egA(d,e){this.a=d
this.b=e},
egL:function egL(d,e){this.a=d
this.b=e},
egM:function egM(d,e){this.a=d
this.b=e},
egI:function egI(d){this.a=d},
egJ:function egJ(d){this.a=d},
egK:function egK(d){this.a=d},
egN:function egN(d){this.a=d},
egH:function egH(d){this.a=d},
egO:function egO(d,e){this.a=d
this.b=e},
egP:function egP(d){this.a=d},
egG:function egG(d,e){this.a=d
this.b=e},
egQ:function egQ(d){this.a=d},
egF:function egF(d,e){this.a=d
this.b=e},
egR:function egR(d){this.a=d},
egE:function egE(d){this.a=d},
egS:function egS(d){this.a=d},
egD:function egD(d){this.a=d},
egT:function egT(d){this.a=d},
egC:function egC(d){this.a=d},
egU:function egU(d){this.a=d},
egB:function egB(d){this.a=d},
egz:function egz(){},
egy:function egy(){},
egx:function egx(d){this.a=d},
egw:function egw(d){this.a=d},
bnk:function bnk(d,e){this.b=d
this.a=e},
eHY:function eHY(d,e,f){this.a=d
this.b=e
this.c=f},
eHZ:function eHZ(){},
eI_:function eI_(){},
T5:function T5(d){this.a=d},
aA0:function aA0(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fa$=k
_.kt$=l
_.fB$=m
_.fb$=n
_.bq$=o
_.a5$=p
_.c=_.a=null},
dMY:function dMY(){},
dNq:function dNq(){},
dNc:function dNc(d,e){this.a=d
this.b=e},
dN3:function dN3(d,e){this.a=d
this.b=e},
dNd:function dNd(d){this.a=d},
dN2:function dN2(d){this.a=d},
dNe:function dNe(d){this.a=d},
dNb:function dNb(d){this.a=d},
dNi:function dNi(d){this.a=d},
dNa:function dNa(d){this.a=d},
dNj:function dNj(d){this.a=d},
dN9:function dN9(d,e){this.a=d
this.b=e},
dNk:function dNk(d){this.a=d},
dNl:function dNl(d){this.a=d},
dN8:function dN8(d,e){this.a=d
this.b=e},
dNm:function dNm(d){this.a=d},
dN7:function dN7(d,e){this.a=d
this.b=e},
dNn:function dNn(d){this.a=d},
dN6:function dN6(d,e){this.a=d
this.b=e},
dNo:function dNo(d){this.a=d},
dN5:function dN5(d,e){this.a=d
this.b=e},
dNp:function dNp(d){this.a=d},
dN4:function dN4(d){this.a=d},
dNf:function dNf(d){this.a=d},
dN1:function dN1(d){this.a=d},
dNg:function dNg(d){this.a=d},
dN0:function dN0(d){this.a=d},
dNh:function dNh(d){this.a=d},
dN_:function dN_(d){this.a=d},
dMX:function dMX(d){this.a=d},
dMW:function dMW(){},
dMZ:function dMZ(d,e){this.a=d
this.b=e},
dMV:function dMV(d){this.a=d},
b6s:function b6s(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
TL:function TL(d){this.a=d},
bg6:function bg6(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fa$=e
_.kt$=f
_.fB$=g
_.fb$=h
_.bq$=i
_.a5$=j
_.c=_.a=null},
e9u:function e9u(d,e){this.a=d
this.b=e},
e9v:function e9v(d,e){this.a=d
this.b=e},
e9t:function e9t(d,e){this.a=d
this.b=e},
e9w:function e9w(d,e){this.a=d
this.b=e},
e9s:function e9s(d,e){this.a=d
this.b=e},
bmU:function bmU(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eG7:function eG7(d){this.a=d},
aI1:function aI1(){},
bsn:function bsn(){},
aIA:function aIA(){},
bsB:function bsB(){},
aID:function aID(){},
bsD:function bsD(){},
hp8(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.f9()
v.e2(w)
v=v.ah()
u=new C.f9()
u.e2(w+500)
s.push(new C.v(v,u.ah()))}return new A.beR(new C.cn(null,x.A),new A.N8(B.cz),t,B.at,s,$,B.bs,0,C.a([],x.X),null,null)},
NB:function NB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
S9:function S9(d){this.a=d},
beR:function beR(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.fa$=i
_.kt$=j
_.fB$=k
_.fb$=l
_.bq$=m
_.a5$=n
_.c=_.a=null},
dvB:function dvB(){},
dvp:function dvp(){},
dvq:function dvq(d,e){this.a=d
this.b=e},
dvr:function dvr(d,e){this.a=d
this.b=e},
dvo:function dvo(d){this.a=d},
dvn:function dvn(d){this.a=d},
dvt:function dvt(d){this.a=d},
dvm:function dvm(d,e){this.a=d
this.b=e},
dvu:function dvu(d){this.a=d},
dvl:function dvl(d){this.a=d},
dvv:function dvv(d){this.a=d},
dvk:function dvk(d){this.a=d},
dvw:function dvw(d){this.a=d},
dvj:function dvj(d){this.a=d},
dvx:function dvx(d){this.a=d},
dvi:function dvi(d){this.a=d},
dvy:function dvy(d){this.a=d},
dvh:function dvh(d){this.a=d},
dvz:function dvz(d){this.a=d},
dvg:function dvg(d){this.a=d},
dvA:function dvA(d){this.a=d},
dvf:function dvf(d){this.a=d},
dvs:function dvs(d){this.a=d},
dve:function dve(d){this.a=d},
b5Q:function b5Q(d,e){this.b=d
this.a=e},
ac7:function ac7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
T1:function T1(d){this.a=d},
bff:function bff(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.fa$=p
_.kt$=q
_.fB$=r
_.fb$=s
_.bq$=t
_.a5$=u
_.c=_.a=null},
dLv:function dLv(d){this.a=d},
dLl:function dLl(d,e){this.a=d
this.b=e},
dLm:function dLm(d,e){this.a=d
this.b=e},
dLk:function dLk(d,e){this.a=d
this.b=e},
dLn:function dLn(d){this.a=d},
dLj:function dLj(d){this.a=d},
dLo:function dLo(d){this.a=d},
dLi:function dLi(d,e){this.a=d
this.b=e},
dLp:function dLp(d){this.a=d},
dLh:function dLh(d,e){this.a=d
this.b=e},
dLq:function dLq(d){this.a=d},
dLg:function dLg(d,e){this.a=d
this.b=e},
dLr:function dLr(d){this.a=d},
dLf:function dLf(d,e){this.a=d
this.b=e},
dLs:function dLs(d){this.a=d},
dLe:function dLe(d){this.a=d},
dLt:function dLt(d){this.a=d},
dLd:function dLd(d){this.a=d},
dLu:function dLu(d){this.a=d},
dLc:function dLc(d){this.a=d},
baZ:function baZ(d,e){this.b=d
this.a=e},
d1w:function d1w(d){this.a=d},
TH:function TH(d){this.a=d},
bg5:function bg5(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.fa$=f
_.kt$=g
_.fB$=h
_.fb$=i
_.bq$=j
_.a5$=k
_.c=_.a=null},
e9a:function e9a(d,e){this.a=d
this.b=e},
e9b:function e9b(d){this.a=d},
e99:function e99(d){this.a=d},
e9c:function e9c(d){this.a=d},
e98:function e98(d){this.a=d},
e9d:function e9d(d){this.a=d},
e97:function e97(d){this.a=d},
e9e:function e9e(d){this.a=d},
e96:function e96(d){this.a=d},
e9f:function e9f(d){this.a=d},
e95:function e95(d,e){this.a=d
this.b=e},
e9g:function e9g(d){this.a=d},
e94:function e94(d,e){this.a=d
this.b=e},
e9h:function e9h(d){this.a=d},
e93:function e93(d,e){this.a=d
this.b=e},
e9i:function e9i(d){this.a=d},
e92:function e92(d,e){this.a=d
this.b=e},
bmb:function bmb(d,e){this.b=d
this.a=e},
aHz:function aHz(){},
bsg:function bsg(){},
aHX:function aHX(){},
bsm:function bsm(){},
aIz:function aIz(){},
bsA:function bsA(){},
fRV(d,e,f){var w,v
C.fH(0,0,!1)
w=new C.l0(e,f,$,null)
v=w.bAG(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
cjd(d,e){var w=0,v=C.j(x.fA),u
var $async$cjd=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.fGK().w9(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cjd,v)}},D,M,F,Q,U,A9,Z,Aa,S,A_,Ab,Ac
J=c[1]
C=c[0]
B=c[2]
V=c[101]
G=c[88]
N=c[96]
A0=c[103]
A1=c[109]
A2=c[108]
H=c[92]
K=c[113]
A3=c[102]
T=c[100]
A4=c[64]
A5=c[81]
W=c[73]
O=c[84]
X=c[86]
A6=c[107]
Y=c[87]
L=c[89]
R=c[110]
A7=c[68]
A8=c[106]
P=c[91]
I=c[104]
E=c[93]
A=a.updateHolder(c[17],A)
D=c[85]
M=c[99]
F=c[39]
Q=c[97]
U=c[95]
A9=c[114]
Z=c[90]
Aa=c[98]
S=c[105]
A_=c[112]
Ab=c[94]
Ac=c[111]
A.agX.prototype={}
A.Th.prototype={
S(){var w=A.fwi()
return new A.bfB(w,C.Q(x.N,x.i),new C.ao(B.aq,$.as()),C.a([],x.X),C.a([],x.L),C.mo(0,null,null))}}
A.bfB.prototype={
p(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
this.ch.p()
this.a2()},
LG(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$LG=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=B.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aT.ae$.d.c
if(s!=null)s.j9()
p.bH(0,B.c0)
t.n(new A.dUb(t))
t.a.toString
p=t.d
w=3
return C.b(A.buB(A.hqY(q,A.hBX(p),o,t.ay)),$async$LG)
case 3:s=e
r=s==null?null:J.iR(s)
if(r==null||r.length===0||B.a.a_(r,"{"))r=A.hDj(q,p,o)
if(t.c==null){w=1
break}t.n(new A.dUc(t,o,r))
$.aT.x1$.push(new A.dUd(t))
case 1:return C.h(u,v)}})
return C.i($async$LG,v)},
VL(d){return this.bR4(d)},
aQc(){return this.VL(null)},
bR4(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$VL=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=B.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aT.ae$.d.c
if(s!=null)s.j9()
t.f.saR(0,o)
t.n(new A.dUo(t))
A.e1(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=A
w=3
return C.b(A.buB(A.hxl(o)),$async$VL)
case 3:r=n.a=m.hKS(f)
p.b=""
if(r!=null&&!A.hBY(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=A.hDk(o)
q=C.ad(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new A.agX(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.n(new A.dUp(p,t))
t.bW9(p.a)
case 1:return C.h(u,v)}})
return C.i($async$VL,v)},
bW9(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
B.d.a8(w)
w=++m.as
v=m.d
B.d.a8(v.a)
B.d.a8(v.b)
m.e.a8(0)
m.n(new A.dUk(m))
t=d.d
s=C.Q(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new A.dUi(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new A.dUl(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.J)(r),++u){p.$2(o,new A.dUm(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new A.dUn(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=B.bD.j(0.1),g=C.m(16),f=C.H(B.bD.j(0.35),B.r,1)
if(m.x)j=C.A(C.a([D.ee2,B.bb,C.C(C.d(m.Q,l,l,l,l,l,l,B.Qp,l,l,l),1)],x.p),B.m,l,B.e,B.j,0,l,l)
else if(k==null)j=D.eCn
else{w=C.C(C.d(k.a,l,l,l,l,l,l,X.a4_,l,l,l),1)
v=x.p
w=C.a([C.A(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.eof,l,l,l)],v),B.m,l,B.e,B.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.B(B.u5,C.d(u,l,l,l,l,l,l,D.eqO,l,l,l),l))
w.push(B.dh)
w.push(C.d(k.b,l,l,l,l,l,l,D.QT,l,l,l))
u=k.e
if(u.length!==0){t=B.aM.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.et3,l,l,l),B.i,l,l,new C.o(t,l,l,s,l,l,B.n),l,l,l,B.jz,B.ch,l,l,l))}w.push(B.ar)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?B.c:B.aA
w.push(new C.B(B.Jq,new C.cF(B.b_,B.e,B.j,B.F,l,B.p,l,0,C.a([new C.w(t,l,B.lA,l,l,l,l,l,l,l,l,l),B.bp,new C.bI(1,B.bt,new C.w(q,l,new C.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.J)(j),++p){o=j[p]
t=new C.b2(12,12)
s=new C.b2(12,12)
B.d.v(w,C.a([B.P,new C.bE(B.a7,l,l,C.p(l,new C.w(o.a,l,B.a3D,l,l,l,l,l,l,l,l,l),B.i,l,l,new C.o(B.bD.j(0.3),l,l,new C.bx(t,t,t,t),l,l,B.n),l,l,l,l,B.fD,l,l,l),l),B.aw,C.p(l,new C.w(o.b,l,D.eya,l,l,l,l,l,l,l,l,l),B.i,l,l,new C.o(B.c.j(0.07),l,l,new C.bx(s,s,s,s),l,l,B.n),l,l,l,l,B.bT,l,l,l)],v))}if(m.ax)w.push(D.dKF)
j=C.ce(C.u(w,B.F,l,B.e,B.j,0,B.p),B.q,m.ch,B.z,l,l,l,l,B.af)}w=x.p
g=C.u(C.a([C.afd(C.p(l,j,B.i,l,new C.aV(0,1/0,0,i),new C.o(h,l,f,g,l,l,B.n),l,l,l,D.ac2,B.eh,l,l,1/0),B.b7,B.iz),C.C(A.fIw(m.d,l,l,l,m.e),1)],w),B.m,l,B.e,B.j,0,B.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new A.dv("Ask about it",i,new A.dUs(m),l,B.bD,l),new A.dv("Invent something new",!i,new A.dUt(m),l,B.bD,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.cTZ[p]
i.push(new A.dv(n,!1,new A.dUu(m,n),l,B.bD,l))}f.push(new A.eD(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cFk[p]
i.push(new A.dv(r,!1,new A.dUv(m,r),l,B.bD,l))}f.push(new A.eD(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=B.c.j(0.07)
i=C.C(C.aI(l,B.T,!1,l,!0,B.q,l,C.aL(),m.f,l,l,l,l,l,2,C.bn(l,new C.b0(4,C.m(16),B.V),l,B.eM,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,B.kb,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.z,!0,l,!0,l,!1,l,B.ad,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new A.dUw(m,k),l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,B.dj,!0,B.a5,l,B.am,l,B.aIq,l,l),1)
h=m.at
v=h&&j?D.bpP:B.dP
j=h&&j?"Ask":"Invent"
f.push(C.A(C.a([i,B.ab,new A.ff(v,j,new A.dUx(m,k),B.bD,l)],w),B.m,l,B.e,B.j,0,l,l))
return A.jd(B.bD,B.fQ,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.u(f,B.m,l,B.e,B.R,0,B.p))}}
A.Er.prototype={}
A.tZ.prototype={}
A.TG.prototype={
S(){return new A.aAP(B.J,B.J,B.at,C.aY(x.S),$,B.bs,0,C.a([],x.X),null,null)}}
A.aAP.prototype={
gaRk(){var w,v,u,t=this,s=D.F3[t.cx],r=D.NR[t.cy],q=D.At[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ee(w,w.r,C.a2(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aqs[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+B.d.cO(p,0,new A.e7P())},
ga_G(){return D.F3[this.cx].d/this.gaRk()},
gaJ6(){return 0.1*(D.F3[this.cx].d/0.9)/D.NR[this.cy].d},
Z(){this.a0()
this.kG()
A.yl("rocket_lander").bC(new A.e88(this),x.P)},
bWh(){var w=this
w.ay=B.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+B.cz.ah()*0.6
w.f=new C.v(0.15+B.cz.ah()*0.7,0.08)
w.r=new C.v((B.cz.ah()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
kZ(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.n(new A.e89())
return}w=D.qn[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=B.k.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.v(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga_G()
v=v.ap(0,new C.v(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaJ6())}if(m.dy){t=m.r
v=v.aD(0,t.aO(0,t.gcr()*6*D.as2[m.d]))}t=m.r=m.r.ap(0,v.aO(0,d))
s=m.f=m.f.ap(0,t.aO(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new C.v(-t.a*0.4,t.b)
t=new C.v(B.k.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new C.v(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.At[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
A.v0("rocket_lander",C.D(["unlocked",t],x.N,x.z))
A.Aj("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga_G()/(D.qn[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+B.k.ab(m.ga_G()/(D.qn[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
A.e1(80,"",500,0,0.6,"noise")
C.fT()}}if(m.Q&&m.x>0&&B.o.J(B.k.bK(m.CW*20),2)===0)A.e1(90,"",70,0,0.12,"noise")
m.n(new A.e8a())},
acg(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.eql,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new A.dv(e[w].a,f.$1(w),new A.e7R(this,g,w),v,h,v))
return new C.B(B.fh,C.u(C.a([u,B.dh,C.cf(B.bI,s,B.by,6,6)],t),B.F,v,B.e,B.j,0,B.p),v)},
bw4(d){var w,v,u,t,s=this,r=null,q=s.ga_G()/(D.qn[s.d].b/9.81*0.28)>=1,p=B.k.U(1/s.gaJ6()),o=D.as2[s.d],n=C.m(24),m=d.c,l=C.H(m.j(0.6),B.r,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),B.aw,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,D.aJw,r,r,r),B.U,s.acg("ENGINE: "+D.F3[s.cx].b,D.F3,new A.e7G(s),new A.e7H(s),B.dg),s.acg("FUEL TANK: "+D.NR[s.cy].b,D.NR,new A.e7I(s),new A.e7J(s),B.bq),s.acg("LANDING GEAR: "+D.At[s.db].b,D.At,new A.e7K(s),new A.e7L(s),B.b3),s.acg("EXTRAS (tap to add)",D.aqs,new A.e7M(s),new A.e7N(s),B.bD)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.eSR)
o=(q?B.bq:B.cJ).j(0.14)
w=C.m(12)
v=B.k.ab(s.gaRk(),2)
u=B.k.ab(s.ga_G()/(D.qn[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+B.k.U(D.At[s.db].d*100)+".",r,r,r,r,r,r,D.eqU,r,r,r),B.i,r,r,new C.o(o,r,r,w,r,r,B.n),r,r,r,B.jz,B.bT,r,r,r))
m.push(B.U)
m.push(new C.bE(B.C,r,r,new A.ff(B.lW,"Launch",new A.e7O(s),B.bq,r),r))
return C.at(C.p(r,C.ce(C.u(m,B.F,r,B.e,B.R,0,B.p),B.q,r,B.z,r,B.c2,r,r,B.af),B.i,r,B.l9,new C.o(D.b6m,r,l,n,r,r,B.n),r,r,r,B.bT,r,r,r,r),r,r,r)},
aSp(d,e,f,g){var w=null,v=f?B.dg:B.c.j(0.1),u=C.m(18),t=C.H(B.be,B.r,1)
return C.pf(B.jB,C.p(w,C.U(d,B.c,w,w,w,30),B.i,w,w,new C.o(v,w,t,u,w,w,B.n),w,62,w,w,w,w,w,g),w,new A.e7D(e),new A.e7E(e),w,w,w,w,new A.e7F(e))},
aSo(d,e,f){return this.aSp(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.co(new A.e81(s,D.qn[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.qn[w].a:"\ud83d\udd12"
o.push(new A.dv(v,s.d===w,new A.e82(s,w),r,D.qn[w].c,r))}v=C.a([s.aSo(D.bpV,new A.e83(s),s.y),B.bb,s.aSp(B.uq,new A.e84(s),s.Q,130),B.bb,s.aSo(B.XJ,new A.e85(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?B.b3:B.c.j(0.1)
t=C.m(18)
B.d.v(v,C.a([B.bb,C.aJ(r,C.p(r,D.bu3,B.i,r,r,new C.o(u,r,C.H(B.be,B.r,1),t,r,r,B.n),r,62,r,r,r,r,r,62),B.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.e86(s),r,r,r,r,r,r,!1,B.ae)],p))}return A.jd(B.dg,B.fQ,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.u(C.a([new A.eD(o,"WORLD",r),C.A(v,B.m,r,B.b5,B.j,0,r,r)],p),B.m,r,B.e,B.R,0,B.p))}}
A.bcE.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.qn[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.a1(),d=C.T(),a0=j.c,a1=C.aq(D.b8x,a0,0.25)
a1.toString
d.saz(new C.a7(B.b4,B.bc,B.w,C.a([D.b1C,a1],x.O),l,l).aB(0,new C.af(0,0,g,f)))
a2.bp(new C.af(0,0,g,f),d)
w=new C.f9()
w.e2(5)
for(g=a2.a,v=0;v<70;++v){f=w.ah()
d=w.ah()
a1=w.ah()
u=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
u.r=B.c.j(0.2+w.ah()*0.5).gt(0)
t=u.M()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=C.a([],f)
r=new C.b_(e.r,B.au,l,l,d)
r.N(new C.bj(0,s+14))
q=new C.f9()
q.e2(2)
for(p=0;p<=i;p+=18){e=new C.aw(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.ah()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bI(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.N(new C.aw(i,h))
r.N(new C.aw(0,h))
r.N(new C.bX())
e=$.a1()
d=C.T()
d.r=C.aq(a0,B.x,0.6).gt(0)
a2.b4(r,d)
o=C.dy(new C.v(k.ax*i,s+10),8,k.ay*i)
d=C.bZ(o,B.jK)
a0=C.T()
a0.r=B.br.gt(0)
a2.bi(d,a0)
a0=C.bZ(o.cD(2),B.uT)
d=C.T()
d.b=B.aj
d.c=2
d.r=B.c.j(0.5+0.3*Math.sin(k.CW*4)).gt(0)
a2.bi(a0,d)
if(k.as==="ready")return
d=k.f
J.bP(g.save())
g.translate(d.a*i,d.b*h)
a2.ra(0,k.w)
i=k.as
if(i==="crashed"){k=C.T()
k.r=B.dg.j(0.6).gt(0)
k.z=Y.a05
a2.aw(B.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.b_(i,B.au,l,l,C.a([],f))
n.N(new C.bj(-8,18))
n.N(new C.aw(0,44+Math.sin(k.CW*40)*8))
n.N(new C.aw(8,18))
n.N(new C.bX())
k=C.T()
k.r=B.aM.gt(0)
a2.b4(n,k)
i=new C.b_(i,B.au,l,l,C.a([],f))
i.N(new C.bj(-4,18))
i.N(new C.aw(0,32))
i.N(new C.aw(4,18))
i.N(new C.bX())
k=C.T()
k.r=B.c.gt(0)
a2.b4(i,k)}k=e.r
m=new C.b_(k,B.au,l,l,C.a([],f))
m.N(new C.bj(0,-26))
m.N(new C.dj(14,-10,11,18))
m.N(new C.aw(-11,18))
m.N(new C.dj(-14,-10,0,-26))
m.N(new C.bX())
i=C.T()
i.saz(D.bFc.aB(0,D.e81))
a2.b4(m,i)
i=C.T()
i.r=B.b3.gt(0)
a2.aw(D.a1m,5,i)
i=new C.b_(k,B.au,l,l,C.a([],f))
i.N(new C.bj(-11,6))
i.N(new C.aw(-20,20))
i.N(new C.aw(-11,18))
i.N(new C.bX())
h=C.T()
h.r=B.aH.gt(0)
a2.b4(i,h)
f=new C.b_(k,B.au,l,l,C.a([],f))
f.N(new C.bj(11,6))
f.N(new C.aw(20,20))
f.N(new C.aw(11,18))
f.N(new C.bX())
k=C.T()
k.r=B.aH.gt(0)
a2.b4(f,k)
g.restore()},
ao(d){return!0}}
A.aIx.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bsz.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.boz()}}
A.aOj.prototype={}
A.a0K.prototype={}
A.b5U.prototype={}
A.Sa.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.eM(["skin"],x.N),o=new Float32Array(0)
return new A.azi(w,v,u,t,s,r,q,new C.cn(null,x.A),p,D.HS,D.HS,B.at,B.cz,o,new Int32Array(0),$,B.bs,0,C.a([],x.X),null,null)}}
A.azi.prototype={
Z(){var w=this
w.a0()
w.kG()
w.as=new A.bVj(w.gc2B())
new A.dw2(w).$0()
return},
p(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a9(0)
v.d=null}this.bnB()},
c2C(d){var w,v=this
if(v.c==null)return
w=J.a4(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eK(0,C.D(["t","init","data",$.fS9],x.N,x.z))
v.at=!0
v.ax=""
v.auf()
break
case"pick":v.n(new A.dvF(v,d))
break
case"shot":v.ae6(C.t(w.h(d,"data")))
break
case"error":$.ak.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
auf(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aow[q.CW]
v=new A.dvG()
u=q.ay
u=C.z(u,C.a2(u).k("cj.E"))
B.d.fu(u)
t=x.N
s=C.D(["layers",u,"skinMode",q.ch,"tone","#"+C.t(v.$1(w.b))+C.t(v.$1(w.c))+C.t(v.$1(w.d)),"sel",q.cx,"bpm",B.k.U(q.k3),"spin",q.fy],t,x.cK)
r=B.Q.ak(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.Q(t,x.z)
u.m(0,"t","state")
u.v(0,s)
v.eK(0,u)}},
ae6(d){return this.ciH(d)},
ciH(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ae6=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=B.cw.aF(B.a.aV(d,B.a.cP(d,",")+1))
w=6
return C.b(A.cjd(C.a([A.fRV(r,"image/png","body.png")],x.C),"Made in NGMY Core Protocol"),$async$ae6)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.E(x.U).f.P(D.aHJ)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$ae6,v)},
atJ(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.q(0,w)},
kZ(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.q(0,"organ")&&B.k.bK(w)!==B.k.bK(v.ok)){A.a5M("kick",0.4)
v.a2c(170,new A.dw3())}v.ok=w
return},
adW(d){var w,v,u,t,s=this
s.n(new A.dvH(s,d))
if(d==null){s.fx=D.HS
s.dy=1
w=s.as
if(w!=null)w.eK(0,C.D(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.S(w).k("a3<1>")
u=C.z(new C.a3(w,new A.dvI(d),v),v.k("E.E"))
t=B.d.gI(u).b
if(t!=="skin"&&!s.ay.q(0,t)){s.ay.G(0,t)
if(s.ch===2)s.ch=1}s.auf()
w=s.as
if(w!=null)w.eK(0,C.D(["t","focus","group",d],x.N,x.z))
s.go=0
s.cl2(t,d)
return},
cl2(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){A.a5M("kick",0.8)
this.a2c(260,new A.dvJ())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")A.e1(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a2c(w*70,new A.dvK(this))
else if(B.a.q(e,"intestine")||e==="Stomach")A.e1(110,"",360,0.7,0.3,"saw")
else A.v3("organic",6+B.o.J(e.length,8),200,0.6)
break
case"bone":A.e1(210+e.length*4,"",80,0.6,0.55,"tri")
A.e1(2400,"",20,0,0.3,v)
break
case"muscle":A.e1(70,"",150,1,0.6,"sine")
break
case"vessel":A.e1(300,"",380,0.4,0.22,v)
A.a5M("kick",0.3)
break
default:A.v3("organic",2+B.o.J(e.length,6),200,0.4)}},
cph(d){this.n(new A.dvM(this,d))},
aSG(){var w,v,u,t,s,r,q,p=this,o=C.aY(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.J)(w),++t){s=w[t]
if(p.atJ(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.G(0,s.a)}q=C.z(o,o.$ti.k("cj.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aE(w)]
p.p4=""},
bMM(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.n(new A.dvC(u,w,d))
v=x.t
A.Aj("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a2c(1100,new A.dvD(u))
return}if(d==null){if(u.cx!=null)u.adW(null)
return}u.adW(d)},
bQo(d,e){var w,v=this,u=null,t=C.m(18),s=C.H(B.cd.j(0.5),B.r,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.emV,u,u,u)}else if(d==null||e==null)w=D.eA3
else{w=x.p
w=C.A(C.a([C.C(C.u(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,B.jp,u,u,u),B.dh,C.d(e.b,u,u,u,u,u,u,D.QT,u,u,u)],w),B.F,u,B.e,B.R,0,B.p),1),C.aF(u,u,u,u,D.bwo,u,u,u,new A.dvE(v),u,u,u,u,"Back to the whole body",B.c6)],w),B.F,u,B.e,B.j,0,u,u)}return C.p(u,w,B.i,u,u,new C.o(D.SW,u,s,t,u,u,B.n),u,u,u,u,G.aco,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.d2J.h(0,g)
i.auf()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.cNW
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.J)(v),++s){r=v[s]
if(i.atJ(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!B.d.q(w,q))w.push(q)}v=x.p
u=C.a([C.aF(h,h,h,h,D.lY,h,h,h,new A.dvT(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?B.bF:C.Cn(h,B.pm,q)}else q=B.k7
q=C.u(C.a([C.C(q,1),new C.B(D.bdT,i.bQo(g,f),h)],v),B.m,h,B.e,B.j,0,B.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cGD[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.q(0,n)
p.push(new A.dv(l,n,new A.dvU(i,o),o.c,B.cd,h))}p=C.a([new A.eD(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.J)(w),++s){k=w[s]
n.push(new A.dv(k,k===i.cx,new A.dvV(i,k),h,B.aM,h))}p.push(new A.eD(n,"FIND",h))}if(t.q(0,"organ")){n=i.k3
p.push(A.ho(B.cJ,""+B.k.U(n)+" beats/min","Heart rate",180,40,new A.dvW(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new A.DJ(D.aow[j],i.CW===j,new A.dvX(i,j),!1,h))
p.push(new A.eD(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new A.dv("Spin",n,new A.dvY(i),D.afp,B.b3,h),new A.ff(B.jE,"Reset view",new A.dvZ(i),B.c,h),new A.dv(l,m,new A.dw_(i),B.Ei,B.aM,h)],v)
if(t.q(0,"organ"))v.push(new A.dv("Heartbeat sound",i.k4,new A.dw0(i),B.np,B.cJ,h))
p.push(new A.eD(v,h,h))
return A.jd(B.cd,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.u(p,B.m,h,B.e,B.R,0,B.p))}}
A.aHA.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.aHB.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bnA()}}
A.bVj.prototype={
k0(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aK(e,"</script","<\\/script")
v=$.fXY
$.fXY=v+1
u="ngmy-body-viewer-"+v
$.xz()
$.pG().p0(u,new A.bVk(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fA(v,"message",new A.bVl(t),!1,x.gA)
t.b=u},
eK(d,e){var w,v
try{w=this.c
if(w!=null){w=C.buy(w.contentWindow)
if(w!=null)J.fvw(w,e,"*")}}catch(v){}}}
A.x2.prototype={}
A.AU.prototype={}
A.mS.prototype={}
A.b6C.prototype={}
A.Sf.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new A.azl(C.Q(w,x.a2),C.a([],x.cB),C.Q(w,v),C.Q(w,v),C.Q(w,u),B.at,B.J,B.J,C.aY(u),$,B.bs,0,C.a([],x.X),null,null)}}
A.azl.prototype={
Z(){var w=this
w.a0()
w.kG()
w.a9g()
$.aT.x1$.push(new A.dyd(w))},
a9g(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$a9g=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.au(),$async$a9g)
case 6:q=e.rk("ngmy_circuit_passed_v1")
r=q==null?B.T:q
if(s.c!=null)s.n(new A.dxS(s,r))
u=1
w=5
break
case 3:u=2
o=t.pop()
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$a9g,v)},
a9B(d){return this.bTZ(d)},
bTZ(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$a9B=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.G(0,d)
u=3
w=6
return C.b(C.au(),$async$a9B)
case 6:r=f
q=s.cx
p=C.a2(q).k("jx<cj.E,n>")
q=C.z(new C.jx(q,new A.dxV(),p),p.k("E.E"))
r.an("StringList","ngmy_circuit_passed_v1",q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$a9B,v)},
asz(d,e,f,g){var w="c"+this.y++,v=new A.AU(w,e,f,g)
this.d.m(0,w,v)
return v},
lZ(d,e,f){return this.asz(0,e,f,0)},
a8D(d,e){var w
if(D.xA.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ap(0,new C.v(-36,w))},
rJ(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aMX(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fB$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.du(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(B.o.eb(m,D.crY[B.o.J(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.rJ(p,0)&&n.rJ(p,1)
break
case"or":p=q.a
o=n.rJ(p,0)||n.rJ(p,1)
break
case"xor":p=q.a
o=n.rJ(p,0)!==n.rJ(p,1)
break
case"nand":p=q.a
o=!(n.rJ(p,0)&&n.rJ(p,1))
break
case"nor":p=q.a
o=!(n.rJ(p,0)||n.rJ(p,1))
break
case"not":o=!n.rJ(q.a,0)
break
default:o=n.rJ(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.m(0,q,o)
r=!0}}if(!r)break}},
bFK(){return this.aMX(null)},
kZ(d){var w,v,u,t,s,r,q,p,o,n=this
n.bFK()
if(!n.ax)return
for(w=n.d,w=new C.be(w,C.a2(w).k("be<2>")).gaf(0),v=new C.hX(w,new A.dye()),u=n.f,t=n.w,s=0;v.C();){r=w.gT(0).a
if(u.h(0,r)===!0){q=n.fB$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.m(0,r,n.fB$)
o=s+1
A.e1(520+90*B.o.J(s,4),"",200,0,0.25,"square")
s=o}}},
asA(d){var w=this
w.d.a8(0)
B.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
lt(d,e){var w=this.x
return new C.v(d*w.a,e*w.b)},
ap4(d){var w=this
if(w.x.A(0,B.at)){$.aT.x1$.push(new A.dxQ(w,d))
return}w.n(new A.dxR(w,d))},
cli(d){this.n(new A.dxW(this,d,$.bza()[d]))},
bXK(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bza()[a0]
v=d.d
u=C.a2(v).k("be<2>")
t=u.k("a3<E.E>")
s=t.k("E.E")
r=C.z(new C.a3(new C.be(v,u),new A.dxL(),t),s)
B.d.aY(r,new A.dxM())
q=C.z(new C.a3(new C.be(v,u),new A.dxN(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.n(new A.dxO(d,w))
return}u=d.r
p=C.dP(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=B.o.dq(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((B.o.fO(k,i)&1)===1)
for(i=0;i<v;++i)u.m(0,r[i].a,j[i])
d.aMX(0)
h=m.h(0,B.d.gI(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.ju(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=B.d.aH(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.n(new A.dxP(d,o,a0))},
atf(d){var w,v,u,t,s=this.d,r=C.a2(s).k("be<2>")
s=C.z(new C.be(s,r),r.k("E.E"))
r=C.S(s).k("dt<1>")
s=new C.dt(s,r)
s=new C.bR(s,s.gH(0),r.k("bR<ai.E>"))
w=d.a
r=r.k("ai.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
c4R(d){var w,v,u,t,s,r=this.d,q=C.a2(r).k("be<2>")
r=C.z(new C.be(r,q),q.k("E.E"))
q=C.S(r).k("dt<1>")
r=new C.dt(r,q)
r=new C.bR(r,r.gH(0),q.k("bR<ai.E>"))
w=d.a
v=d.b
q=q.k("ai.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bQh(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.xA.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.a8D(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.V(p,o)
s=l}}}return t},
bEI(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.a8D(p,o)
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
bXM(d){var w,v,u,t=this,s=t.atf(d)
if(s!=null){w=t.d.h(0,s)
w.toString
C.eL()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.m(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
A.e1(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.n(new A.dxX())
return}u=t.bEI(d)
if(u!=null)t.n(new A.dxY(t,u))
else t.n(new A.dxZ(t))},
arA(d){return this.bT3(d)},
bT3(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$arA=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.atf(d)
if(s==null){w=1
break}C.j5()
t.n(new A.dxU(t,s))
case 1:return C.h(u,v)}})
return C.i($async$arA,v)},
bs7(d){if(this.x.A(0,B.at))return
this.n(new A.dxK(this,d,B.cz))
C.eL()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bza()[g]
g=x.p
v=C.a([C.aF(h,h,h,h,C.U(i.ax?B.np:L.qh,B.ak,h,h,h,21),h,h,h,new A.dy7(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=B.cH.j(0.14)
r=C.H(B.cH.j(0.5),B.r,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.em9,h,h,h),C.d(w.b,h,h,h,h,h,h,D.etV,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.B(B.ng,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?B.bq:B.fL,h,h,h,h,h,h,h,h,12,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.A(C.a([C.C(C.u(q,B.F,h,B.e,B.j,0,B.p),1),C.bJ(D.eK7,i.gbXJ(),C.bk(B.cH,h,h,h,h,h,h,h,h,h,h,B.c6))],g),B.m,h,B.e,B.j,0,h,h),B.i,h,h,new C.o(s,h,r,t,h,h,B.n),h,h,h,W.Jx,D.bex,h,h,1/0))}u.push(C.C(C.co(new A.dy8(i)),1))
if(f!=null){t=C.m(14)
s=B.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.xA.h(0,r).a+": "+D.xA.h(0,r).e,h,h,h,h,h,h,B.v6,h,h,h),B.i,h,h,new C.o(s,h,h,t,h,h,B.n),h,h,h,Z.ac6,B.bT,h,h,1/0))}u=C.u(u,B.m,h,B.e,B.j,0,B.p)
t=C.a([],g)
for(s=D.xA.gdH(D.xA),s=s.gaf(s);s.C();){r=s.gT(s)
q=new C.b2(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.ay(o.j(0.5),1,B.r,-1)
t.push(C.aJ(h,C.p(h,C.u(C.a([C.U(p.b,o,h,h,h,20),B.bw,new C.w(p.a,h,D.a3X,h,h,h,h,h,h,h,h,h)],g),B.m,h,B.e,B.R,0,B.p),B.i,h,h,new C.o(n,h,new C.c2(m,m,m,m),new C.bx(q,q,q,q),h,h,B.n),h,h,h,B.h9,P.UL,h,h,58),B.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.dy9(i,r),h,h,h,h,h,h,!1,B.ae))}s=C.a([],g)
for(l=0;l<4;++l){k=D.cRB[l]
s.push(new A.ff(B.L3,k.b,new A.dya(i,k),B.cH,h))}s.push(new A.ff(D.wI,"Clear",new A.dyb(i),B.cJ,h))
r=C.a([],g)
for(j=0;q=$.bza(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?B.ei:B.lm
o=i.ay
n=i.cx.q(0,j)?B.bq:B.cX
r.push(new A.dv(q.a,o===j,new A.dyc(i,j),p,n,h))}return A.jd(B.cH,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.u(C.a([new A.eD(t,"PARTS",h),new A.eD(s,"TRY",h),new A.eD(r,"TASKS",h)],g),B.m,h,B.e,B.R,0,B.p))}}
A.b6U.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.a1()
w=C.T()
w.r=D.a7I.gt(0)
a7.bp(new C.af(0,0,0+a5,0+a6),w)
v=C.T()
v.r=B.c.j(0.05).gt(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.M()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,C.J)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.a8D(j,m.c)
f=q.h(0,l)===!0
l=$.a1()
e=C.a([],p)
d=new C.b_(l.r,B.au,a4,a4,e)
e.push(new C.bj(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.p3(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
l.b=B.aj
l.c=9
l.r=B.cX.j(0.28).gt(0)
l.z=H.pe
s=l.M()
l=d.gbM().a.snapshot()
w.drawPath((d.e=new C.cG(l)).a,s)
s.delete()}l=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
l.b=B.aj
l.c=3.2
l.d=B.bZ
l.r=(f?B.j2:B.bz).gt(0)
s=l.M()
l=d.e
w.drawPath((l==null?d.e=new C.cG(d.gbM().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ap(0,D.G3)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.b_($.a1().r,B.au,a4,a4,C.a([],p))
w=a3.b
p.N(new C.bj(a6,w))
r=g.b
p.N(new C.p3(a6+a0,w,a5-a0,r,a5,r))
r=C.T()
r.b=B.aj
r.c=3
r.r=B.ak.gt(0)
a7.b4(p,r)}for(a5=new C.du(o,o.r,o.e);a5.C();)this.bXL(a7,a5.d)},
bXL(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.xA.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.dy(a0.c,64,64)
s=C.bZ(t,B.kE)
r=w.cy===v
q=s.eF(B.cv)
$.a1()
p=C.T()
p.r=B.x.j(0.55).gt(0)
p.z=B.mK
d.bi(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.T()
p.saz(new C.bT(B.C,0.5,B.w,g,0,C.a([e.c.j(0.6),B.K],x.O),g,g).aB(0,C.c1(a0.c,52)))
d.aw(q,52,p)}q=s.eF(B.cC)
p=C.T()
o=e.c
p.r=C.aq(o,B.x,0.65).gt(0)
d.bi(q,p)
n=u?0.35:0
q=C.T()
p=C.aq(o,B.c,0.1+n)
p.toString
m=C.aq(o,B.x,u?0.2:0.45)
m.toString
q.saz(new C.a7(B.b4,B.bc,B.w,C.a([p,m],x.O),g,g).aB(0,t))
d.bi(s,q)
q=C.T()
q.b=B.aj
q.c=r?2.6:1.2
q.r=(r?B.c:B.c.j(0.35)).gt(0)
d.bi(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?D.agL:D.bqm}else l=e.b
k=A.fAO(C.ju(l.a),30,B.c,l.b,g,B.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a6(d,v.aD(0,new C.v(p/2,q.gbd(q)/2)))
j=A.fAO(e.a,10.5,B.c,g,g,B.I)
j.a6(d,a0.c.ap(0,new C.v(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=A.fAO(f,9,u?B.j2:B.c1,g,g,B.u)
i.a6(d,a0.c.ap(0,new C.v(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aT0(d,w.a8D(a0,h),o)
this.aT0(d,a0.c.ap(0,D.G3),o)},
aT0(d,e,f){var w
$.a1()
w=C.T()
w.r=D.a7I.gt(0)
d.aw(e,8.5,w)
w=C.T()
w.b=B.aj
w.c=2.2
w.r=f.gt(0)
d.aw(e,8.5,w)
w=C.T()
w.r=B.c.gt(0)
d.aw(e,3.2,w)},
ao(d){return!0}}
A.aHG.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bsj.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bnG()}}
A.Ll.prototype={
S(){return new A.azC(C.mo(0,null,null))}}
A.Iv.prototype={
a3(){return"_UnfoldStyle."+this.b}}
A.zg.prototype={}
A.azC.prototype={
bXQ(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcm(0).at
v.toString
w.f=v}w.n(new A.dDq(w,e))},
bS2(){var w=this
w.e.p()
w.e=C.mo(w.f,null,null)
w.n(new A.dDp(w))},
p(){this.e.p()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.nR(t,C.cg(v,B.bV,t?new A.bmu(w.e,w.gbXP(w),new A.dDr(d),v):new A.aDJ(u,new C.cv(u.b,x.gj)),v,!1,!1,v,!1),new A.dDs(w,u),x.K)}}
A.bo0.prototype={}
A.bmu.prototype={
aT1(d,e){var w=null
return new C.B(G.Vf,C.u(C.a([C.d(d,w,w,w,w,w,w,D.emF,w,w,w),B.bw,C.d(e,w,w,w,w,w,w,C.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.F,w,B.e,B.j,0,B.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.A(C.a([C.aF(v,v,v,v,E.qk,v,v,v,w.e,v,v,v,v,v,v),B.tt,D.bjZ],u),B.m,v,B.e,B.j,0,v,v),s=w.aT1("STUDIOS","Play, make things, and keep what you make")
$.bzc()
return C.br(!0,C.u(C.a([new C.B(D.bjd,t,v),C.C(C.uC(0,v,B.q,w.c,B.z,v,v,v,v,v,!1,v,B.af,!1,C.a([new C.lI(s,v),new C.nk(B.iT,C.MV(new C.nU(new A.eFF(d),23,!0,!0,!0,0,C.rf(),v),D.aHy),v),new C.lI(w.aT1("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nk(D.beE,C.MV(new C.nU(new A.eFG(w),6,!0,!0,!0,0,C.rf(),v),D.aHy),v)],u)),1)],u),B.m,v,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)}}
A.acc.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.aq(D.rk,p,0.3)
m.toString
w=x.O
m=C.a([m,D.a9T],w)
v=C.H(p.j(0.6),B.r,1.2)
u=x.V
t=C.a([new C.a9(-4,B.G,p.j(0.22),B.J,14)],u)
s=C.aq(p,B.x,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.a9(0,B.G,p.j(0.5),B.J,12)],u)
return C.aD(!1,B.X,!0,r,C.aH(!1,o,!0,C.eq(C.u(C.a([C.p(r,C.U(q.c,B.c,r,r,r,24),B.i,r,r,new C.o(r,r,r,r,u,new C.a7(B.ax,B.aE,B.w,w,r,r),B.a6),r,44,r,r,r,r,r,44),B.P,C.d(q.a,r,2,B.a0,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,B.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),B.L,r,r),B.dh,C.d(q.b,r,2,B.a0,r,r,r,C.l(r,r,B.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),B.L,r,r)],x.p),B.m,r,B.b5,B.j,0,B.p),r,new C.o(r,r,v,n,t,new C.a7(B.ax,B.aE,B.w,m,r,r),B.n),r,B.DC,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),B.i,B.K,0,r,r,r,r,r,B.aa)}}
A.ab7.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.aq(D.rk,B.d.gI(i),0.24)
f.toString
w=x.O
f=C.a([f,D.a9T],w)
v=C.H(B.d.gI(i).j(0.35),B.r,1)
u=x.V
t=C.a([new C.a9(0,B.G,B.x.j(0.4),B.cv,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.b2(6,6)
m=C.a([B.d.gI(i),B.d.gai(i)],w)
l=C.a([new C.a9(0,B.G,B.x.j(0.45),G.aAG,0)],u)
r.push(C.p(k,C.U(q[p],B.c,k,k,k,11),B.i,k,k,new C.o(k,k,k,new C.bx(n,n,n,n),l,new C.a7(B.a1,B.a7,B.w,m,k,k),B.n),k,17,k,new C.L(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.u(r,B.m,k,B.e,B.R,0,B.p)
u=C.aq(B.d.gI(i),B.d.gai(i),0.4)
u.toString
return C.aD(!1,B.X,!0,k,C.aH(!1,h,!0,C.eq(C.u(C.a([new C.a8(58,k,w,k),B.U,C.d(j.b,k,2,B.a0,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,B.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),B.L,k,k),B.aw,C.U(Ab.Er,B.d.gI(i),k,k,k,18)],s),B.m,k,B.b5,B.j,0,B.p),k,new C.o(k,k,v,g,t,new C.a7(B.ax,B.aE,B.w,f,k,k),B.n),k,B.DC,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),B.i,B.K,0,k,k,k,k,k,B.aa)}}
A.O1.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(B.d.gai(i),B.x,0.62)
h.toString
w=k.c
v=k.d
h=C.an(-8,C.bQ(j,new C.o(h,j,j,C.m(22),j,j,B.n),B.ba),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.a9(0,B.G,B.x.j(0.55),B.P6,26),new C.a9(-6,B.G,B.d.gI(i).j(0.1+0.4*t),B.J,30)],s)
q=C.m(22)
p=C.aq(B.d.gI(i),B.c,0.14)
p.toString
o=B.d.gI(i)
n=B.d.gai(i)
i=C.aq(B.d.gai(i),B.x,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.c_(0,C.bQ(j,new C.o(j,j,j,j,j,new C.a7(B.ax,B.aE,B.w,C.a([p,o,n,i],m),D.cW5,j),B.n),B.ba),0,0,0),C.an(j,C.bQ(j,new C.o(j,j,j,j,j,new C.a7(B.b4,B.bc,B.w,C.a([B.c.j(0.28),B.c.j(0)],m),j,j),B.n),B.ba),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.c_(0,C.b1(j,j,j,new A.bnr(i,j),B.at),0,0,0))
i=B.c.j(0.16)
p=C.H(B.c.j(0.5),B.r,1.4)
s=C.a([new C.a9(0,B.G,B.c.j(0.25*t),B.J,14)],s)
s=C.p(j,C.U(k.f,B.c,j,j,j,28),B.i,j,j,new C.o(i,j,p,j,s,j,B.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.eo7,j,j,j)],l)
i=k.w
if(i.length!==0)B.d.v(p,C.a([B.aw,C.d(i,j,1,B.a0,j,j,j,C.l(j,j,B.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,B.a_,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(B.Qa)
p.push(C.p(j,j,B.i,j,j,new C.o(B.c.j(0.28),j,j,C.m(3),j,j,B.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.B(B.fE,C.A(C.a([s,B.eG,C.C(C.u(p,B.F,j,B.e,B.R,0,B.p),1)],l),B.m,j,B.e,B.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.c_(0,C.ec(C.eb(j,B.x.j(B.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.c_(0,C.ec(C.bQ(j,new C.o(j,j,C.H(B.c.j(0.3),B.r,1.2),i,j,j,B.n),B.ba),!0,j),0,0,0))
return new C.a8(w,v,new C.am(B.W,j,B.a9,B.i,C.a([h,C.c_(0,C.bQ(C.bw(q,new C.am(B.W,j,B.a9,B.q,m,j),B.ap),new C.o(j,j,j,u,r,j,B.n),B.ba),0,0,0)],l),j),j)}}
A.bnr.prototype={
a6(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.af(r,-10,s,w)
u=d.a
J.bP(u.save())
u.translate(v.gbN().a,v.gbN().b)
d.ra(0,0.35)
t=C.dy(B.J,(w- -10)*1.6,s-r)
$.a1()
s=C.T()
s.saz(new C.a7(B.a1,B.a7,B.w,C.a([B.K,B.c.j(0.3),B.K],x.O),null,null).aB(0,t))
d.bp(t,s)
u.restore()},
ao(d){return d.b!==this.b}}
A.bmY.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.b4Q,D.a9g],x.O),t=this.e,s=C.H(B.d.gI(t).j(0.4),B.r,1.2),r=C.a([new C.a9(0,B.G,B.x.j(0.5),B.kC,24)],x.V),q=C.m(22),p=B.d.gI(t)
return new C.a8(this.c,this.d,C.bQ(C.bw(q,C.b1(C.at(C.U(B.iV,B.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new A.b5A(p,w),B.at),B.ap),new C.o(w,w,s,v,r,new C.a7(B.ax,B.aE,B.w,u,w,w),B.n),B.ba),w)}}
A.b5A.prototype={
a6(d,e){var w,v,u,t,s,r,q,p
$.a1()
w=C.T()
v=this.b
w.r=v.j(0.09).gt(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.M()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.M()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ej(B.J)
$.a1()
t=C.T()
t.b=B.aj
t.c=1.4
t.r=v.j(0.35).gt(0)
d.aw(u,30,t)},
ao(d){return!1}}
A.aDJ.prototype={
S(){return new A.aDK(new C.cn(null,x.A),null,null)}}
A.aDK.prototype={
gt3(){var w,v=this,u=v.d
if(u===$){w=C.bh(null,D.bc3,null,1,null,v)
w.cF(0)
v.d!==$&&C.bG()
v.d=w
u=w}return u},
gWY(){var w,v=this,u=v.e
if(u===$){w=C.bh(null,B.fC,null,1,null,v)
w.f2(0,!0)
v.e!==$&&C.bG()
v.e=w
u=w}return u},
gasB(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gbXN(){var w=this.w
if(w===$){w=C.z(this.a.c.d,x.G)
this.w=w}return w},
gaPW(){var w=this.x
if(w===$){w=C.z(this.a.c.e,x.Z)
this.x=w}return w},
gaQA(){var w=this.y
if(w===$){w=C.z(this.a.c.f,x.N)
this.y=w}return w},
gb08(){var w=this.z
if(w===$){w=C.z(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a0()
var w=this.gt3()
w.d4()
w.dL$.G(0,this.gcl3())},
cl4(){var w,v,u,t,s,r,q,p=this,o=p.gt3().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gasB().a){case 0:w=D.mH
break
case 1:w=D.t1
break
case 2:w=D.Zv
break
case 3:w=D.mH
break
case 4:w=D.cL8
break
case 5:w=D.t1
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a5v)r=0.09
else r=s===D.a5w?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){A.e1(260+90*v,"",260,1.6,0.18,"tri")
u=D.bHy[v]
A.kY("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
A.Aj("bell",D.bQg,1400,0.35)}}p.ax=o},
p(){this.gt3().p()
this.gWY().p()
this.bps()},
acH(){var w=this
w.gt3().cJ0(0,C.dA(0,0,0,B.k.U(11e3/w.Q),0,0))
w.n(new A.eFl(w))},
c6O(){this.gt3().bT(0)
this.n(new A.eFk(this))},
aat(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$aat=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaQA(),s=t.length,r=0;r<t.length;t.length===s||(0,C.J)(t),++r){q=t[r]
l.push(new C.ao(new C.b9(q,B.aY,B.aL),$.as()))}m=C.a([],m)
for(t=u.gb08(),s=t.length,r=0;r<t.length;t.length===s||(0,C.J)(t),++r){p=t[r]
m.push(new C.ao(new C.b9(p,B.aY,B.aL),$.as()))}o=C.z(u.gaPW(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.c0(D.rk,new A.eFj(u,l,m,o),t,!0,!0,!0,B.l0,!1,!1,x.H),$async$aat)
case 2:l=C.z(l,x.bO)
B.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.R$=$.as()
n.O$=0}return C.h(null,v)}})
return C.i($async$aat,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gasB(),f=i.a.c,e=f.b,d=i.gbXN(),a0=new A.zg(g,e,f.c,d,i.gaPW(),i.gaQA(),i.gb08())
f=C.aq(B.d.gI(d),B.d.gai(d),0.4)
f.toString
g=x.p
w=C.a([C.aF(h,h,h,h,C.U(i.at?B.np:L.qh,B.ak,h,h,h,21),h,h,h,new A.eFt(i),h,h,h,h,"Sound",h),C.aF(h,h,h,h,D.bzF,h,h,h,i.gbXO(),h,h,h,h,"Edit words and pictures",h),C.aF(h,h,h,h,D.lY,h,h,h,new A.eFu(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c4(i.gWY(),new A.eFv(i,a0),h),C.co(new A.eFw(i,a0))],g)
u=i.as
t=u?i.gc6N():i.gc94()
u=u?D.bpB:B.rR
s=C.aq(B.d.gI(d),B.d.gai(d),0.4)
s.toString
t=C.A(C.a([C.aF(h,h,h,h,C.U(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,B.c6),C.C(C.c4(i.gt3(),new A.eFx(i,a1,a0),h),1),C.aF(h,h,h,h,D.bwe,h,h,h,new A.eFy(i),h,h,h,h,"Replay",B.c6)],g),B.m,h,B.e,B.j,0,h,h)
s=i.Q
u=B.k.ab(s,1)
r=C.aq(B.d.gI(d),B.d.gai(d),0.4)
r.toString
s=A.ho(r,u+"x","Speed",2.5,0.4,new A.eFz(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.cTD[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(B.d.gI(d),B.d.gai(d),0.4)
r.toString
u.push(new A.dv(p.b,o===p.a,new A.eFA(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bHS[q]
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}m=B.d.gI(o).A(0,B.d.gI(n))?34:28
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}l=B.d.gI(o).A(0,B.d.gI(n))?34:28
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}k=B.d.gI(o).A(0,B.d.gI(n))?B.c:B.be
o=i.w
if(o===$){o=C.z(i.a.c.d,r)
i.w=o}j=new C.ay(k,B.d.gI(o).A(0,B.d.gI(n))?2.5:1,B.r,-1)
d.push(C.aJ(h,C.p(h,h,B.i,h,h,new C.o(h,h,new C.c2(j,j,j,j),h,h,new C.a7(B.ax,B.aE,B.w,n,h,h),B.a6),h,l,h,D.abU,h,h,h,m),B.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.eFB(i,n),h,h,h,h,h,h,!1,B.ae))}return A.jd(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.es(new C.am(B.W,h,B.aX,B.q,v,h),i.f),e,C.u(C.a([t,s,new A.eD(u,"STYLE",h),new A.eD(d,"THEME",h)],g),B.m,h,B.e,B.R,0,B.p))},
brl(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.mH[r]
p=B.k.D((1-B.et.aq(0,B.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=B.k.D(p/1.5707963267948966,0,1)
q=D.mH[r]
n=q+0.12
m=B.k.D((a0-n)/(q+0.2-n),0,1)
n=D.mH[r]
q=n-0.01
q=B.k.D((a0-q)/(n+0.03-q),0,1)
n=C.df()
l=n.a
l.$flags&2&&C.ah(l)
l[11]=0.0013
n.jv(p)
l=v[r]
k=u[r]
j=t[r]
i=D.mH[r]
h=i+0.1
if(B.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.mH[r]
h=i+0.1
h=B.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.mH[r]
h=i+0.1
h=B.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cE(0,r*118,0,f,f,f,new C.kF(q,new C.iv(n,f,B.b4,!0,f,new A.O1(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.mH[r]
u=v-0.02
g=B.k.D((a0-u)/(v+0.1-u),0,1)
u=B.d.gI(w)
v=D.mH[r]
t=v+0.12
e.push(new C.cE(0,r*118-3-2,0,f,f,4,new C.lS(new A.bm8(u,g,1-B.k.D((a0-t)/(v+0.22-t),0,1),f),f,B.at,f,f),f))}return new C.a8(a2,358,new C.am(B.W,f,B.a9,B.i,e,f),f)},
bH7(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.t1[r]
p=B.oP.aq(0,B.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.t1[r]
m=q+0.15
l=B.k.D((a0-m)/(q+0.25-m),0,1)
m=D.t1[r]
q=m-0.03
q=B.k.D((a0-q)/(m+0.01-q),0,1)
m=C.df()
k=m.a
k.$flags&2&&C.ah(k)
k[11]=0.0011
m.jd(n,n,n,1)
m.fk(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new A.O1(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.df()
k.fk(3.141592653589793)
k=new C.iv(k,f,B.C,!0,f,new A.bmY(a2,108,w,f),f)}e.push(new C.cE(0,r*130,0,f,f,f,new C.kF(q,new C.iv(m,f,B.C,!0,f,k,f),f),f))}return new C.a8(a2,378,new C.am(B.W,f,B.a9,B.i,e,f),f)},
cpJ(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.Zv[w]
l.push(B.cm.aq(0,B.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.c_(0,C.b1(n,n,n,new A.bpt(d.d,l,D.aq5,m,A.bmt(e,0.4,0.62),f,A.bmt(e,0.45,0.7),n),B.at),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=A.fBj(g,w)
q=D.aq5[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cE(r,s-q*m*p+12,n,n,t,n,new C.kF(o,C.U(u[w],B.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=A.fBj(g,w)
r=D.Zv[w]
q=r+0.15
v.push(new C.cE(s,l,n,n,t,n,new C.kF(B.k.D((e-q)/(r+0.25-q),0,1),new C.w(u[w],n,B.a47,n,B.L,n,n,n,n,n,n,n),n),n))}return new C.a8(g,m+90,new C.am(B.W,n,B.a9,B.i,v,n),n)},
bxg(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-B.cm.aq(0,A.bmt(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.c_(0,C.at(C.dN(C.b1(f,f,f,new A.blB(B.d.gI(a1),A.bmt(a3,0,0.2),a4,f),new C.ap(a5*0.95,70)),D.dHv),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=B.k.D((a3-l)/(0.12+m-l),0,1)
j=B.dE.aq(0,B.k.D((o-0.7)/0.3,0,1))
l=C.df()
m=l.a
m.$flags&2&&C.ah(m)
m[11]=0.001
l.fk(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jd(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?B.k.J(r,1):-1
w.push(new C.V(o,new C.cE(0,0,0,0,f,f,new C.cw(B.C,f,f,new C.kF(k*(0.45+0.55*o),C.dN(new C.iv(l,f,B.C,!0,f,new A.O1(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.v(n*a5*0.34,-o*18)),f),f),f)))}B.d.aY(w,new A.eFc())
B.d.v(a0,new C.I(w,new A.eFd(),x.fR))
return new C.a8(a5,330,new C.am(B.W,f,B.a9,B.i,a0,f),f)},
bwv(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.t1[q]
o=B.k.D((a2-p)/(p+0.22-p),0,1)
n=B.oB.aq(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.t1[q]
m=B.k.D((a2-m)/(m+0.02-m),0,1)
l=D.arS[q]
k=C.df()
k.ma(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jd(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.t1[q]
g=h+0.1
g=B.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cE(0,0,0,0,e,e,new C.cw(B.C,e,e,new C.kF(m,C.dN(new C.iv(k,e,B.C,!0,e,new A.O1(d,92,w,p,j,i,0,g*s,h,e),e),new C.v(0,l)),e),e),e))
l=D.t1[q]
h=l+0.02
f=B.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cE(0,0,0,0,e,e,new C.cw(B.C,e,e,C.dN(new C.lS(new A.b6g(w,f,q,e),e,new C.ap(r,212),e,e),new C.v(0,D.arS[q])),e),e))}return new C.a8(a4,330,new C.am(B.W,e,B.a9,B.i,a0,e),e)},
bua(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.v(-b0,-150),new C.v(b0,-40),D.dHB],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.mH[r]
p=B.k.D((a8-q)/(q+0.2-q),0,1)
o=B.cm.aq(0,p)
q=D.arU[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.mH[r]
f=g+0.2
e=B.k.D((a8-f)/(g+0.3-f),0,1)
f=D.mH[r]
g=f-0.01
g=B.k.D((a8-g)/(f+0.03-g),0,1)
f=C.df()
d=f.a
d.$flags&2&&C.ah(d)
d[11]=0.001
f.ma(l*h+D.cOJ[r]*o)
f.fk(l*0.9)
h=0.55+0.45*o
f.jd(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cE(0,0,0,0,a3,a3,new C.cw(B.C,a3,a3,new C.kF(g,C.dN(new C.iv(f,a3,B.C,!0,a3,new A.O1(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.v(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.mH[r]
i=q+0.17
a2=B.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.arU[r]
a6.push(new C.cE(0,0,0,0,a3,a3,new C.cw(B.C,a3,a3,C.dN(new C.lS(new A.blD(B.d.gI(w),a2,a3),a3,new C.ap(a4,30),a3,a3),new C.v(0,q+48-4)),a3),a3))}}return new C.a8(b0,330,new C.am(B.W,a3,B.a9,B.i,a6,a3),a3)}}
A.bm8.prototype={
a6(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.af(w-v,0,w+v,e.b)
q=C.bZ(u,B.hg)
$.a1()
t=C.T()
s=0.9*r.d
t.r=r.b.j(s).gt(0)
t.z=H.pe
d.bi(q,t)
t=C.bZ(u,B.hg)
q=C.T()
q.r=B.c.j(s).gt(0)
d.bi(t,q)},
ao(d){return d.c!==this.c||d.d!==this.d}}
A.blB.prototype={
a6(d,e){var w,v,u=this.c,t=C.dy(e.ej(B.J),e.b*u,e.a*u)
$.a1()
u=C.T()
u.b=B.aj
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gt(0)
u.z=Y.a05
d.lf(t,u)
u=C.T()
u.b=B.aj
u.c=2.5
u.r=w.j(0.7).gt(0)
d.lf(t,u)
u=t.cD(-14)
v=C.T()
v.b=B.aj
v.c=1
v.r=w.j(0.3).gt(0)
d.lf(u,v)},
ao(d){return!0}}
A.b6g.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ej(B.J),f=this.c,e=B.cm.aq(0,f)
$.a1()
w=C.T()
w.b=B.aj
v=1-f
w.c=5*v
u=this.b
w.r=B.d.gI(u).j(0.6*v).gt(0)
d.aw(g,40+e*a0.a*0.42,w)
t=new C.f9()
t.e2(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.ah()*3.141592653589793*2
n=(40+t.ah()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.ah()
j=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
i=(p&1)===0?B.d.gI(u):B.c
j.r=i.j(B.k.D(v,0,1)).gt(0)
h=j.M()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
ao(d){return!0}}
A.blD.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ej(B.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=B.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.dy(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.a1()
o=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
o.b=B.aj
o.c=2
o.r=u.j((1-q)*0.7).gt(0)
n=o.M()
t.drawOval(C.cz(p),n)
n.delete()}},
ao(d){return d.c!==this.c}}
A.bpt.prototype={
a6(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.af(0,d0,0+c5,d0+60)
$.a1()
d0=C.T()
w=c1.b
v=x.O
d0.saz(new C.a7(B.b4,B.bc,B.w,C.a([B.d.gI(w).j(0.18),B.K],v),c2,c2).aB(0,d1))
d2.bp(d1,d0)
d0=C.T()
d0.r=B.c.j(0.18).gt(0)
d0.c=1
d2.bU(new C.v(0,c4),new C.v(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=A.fBj(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.a1()
a3=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
a3.r=B.x.j(0.5).gt(0)
a3.z=B.mK
a4=a3.M()
t.drawOval(C.cz(new C.af(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.af(d,a1,a3,a1+a0)
a6=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
a7=C.aq(B.d.gI(w),B.c,0.1)
a7.toString
a6.saz(new C.a7(B.b4,B.bc,B.w,C.a([a7,B.d.gai(w)],v),c2,c2).aB(0,a5))
a4=a6.M()
t.drawRect(C.cz(a5),a4)
a4.delete()
a2=a2.r
a6=C.a([],n)
a8=new C.b_(a2,B.au,c2,c2,a6)
a6.push(new C.bj(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new C.aw(a7,a9))
a6.push(new C.aw(a7,m))
a6.push(new C.aw(a3,c4))
a6.push(new C.bX())
a6=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
a6.r=C.aq(B.d.gai(w),B.x,0.5).gt(0)
a4=a6.M()
a6=a8.gbM().a.snapshot()
t.drawPath((a8.e=new C.cG(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.b_(a2,B.au,c2,c2,a6)
a6.push(new C.bj(d,a1))
a6.push(new C.aw(d+c8,a9))
a6.push(new C.aw(a7,a9))
a6.push(new C.aw(a3,a1))
a6.push(new C.bX())
a2=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
a2.r=C.aq(B.d.gI(w),B.c,0.45).gt(0)
a4=a2.M()
a2=b0.gbM().a.snapshot()
t.drawPath((b0.e=new C.cG(a2)).a,a4)
a4.delete()
b1=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
b1.b=B.aj
b1.c=1
b1.r=B.c.j(0.28).gt(0)
a4=b1.M()
t.drawRect(C.cz(a5),a4)
a4.delete()
a4=b1.M()
a2=a8.e
t.drawPath((a2==null?a8.e=new C.cG(a8.gbM().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.M()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cG(b0.gbM().a.snapshot()):a2).a,a4)
a4.delete()
b2=B.k.bK(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.bZ(new C.af(b7,a7,b7+r,b5),B.hg)
$.a1()
b9=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
b9.r=(b4?B.c.j(q):B.x.j(0.22)).gt(0)
a4=b9.M()
t.drawRRect(C.fL(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.af(d,a1,a3,a1+28)
J.bP(t.save())
t.clipRect(C.cz(a5),$.vT()[1],!0)
$.a1()
a1=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
a1.saz(new C.a7(B.b4,B.bc,B.w,C.a([B.K,B.c.j(0.4),B.K],v),c2,c2).aB(0,c0))
a4=a1.M()
t.drawRect(C.cz(c0),a4)
a4.delete()
t.restore()}}},
ao(d){return!0}}
A.aJk.prototype={
aM(){this.aW()
this.aT()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdA())
w.aX$=null
w.a2()}}
A.YX.prototype={
a3(){return"_Role."+this.b}}
A.pv.prototype={}
A.q8.prototype={}
A.AY.prototype={}
A.WY.prototype={}
A.ac2.prototype={}
A.Z8.prototype={
gX(d){return this.d}}
A.B7.prototype={}
A.a9_.prototype={}
A.a9g.prototype={}
A.abb.prototype={}
A.bcB.prototype={
a_P(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
A.e1(d,"",e,g,h,f)},
b15(d,e,f){return this.a_P(d,e,f,0,0.55)},
awL(d,e,f,g){return this.a_P(d,e,f,0,g)},
b16(d,e,f,g){return this.a_P(d,e,f,g,0.55)},
a8(d){var w=this
w.a.a8(0)
B.d.a8(w.b)
B.d.a8(w.c)
B.d.a8(w.d)
B.d.a8(w.e)
B.d.a8(w.f)
B.d.a8(w.r)
B.d.a8(w.w)
B.d.a8(w.x)
w.y.a8(0)
w.Q.a8(0)
w.as.a8(0)
w.b0()},
agc(d,e,f,g){var w="n"+this.ay++,v=new A.q8(w,e,f,g)
this.a.m(0,w,v)
this.b0()
return v},
zW(d,e,f){return this.agc(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
B.d.bk(w.b,new A.d82(e))
B.d.bk(w.c,new A.d83(e))
w.b0()},
b4P(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.m1.h(0,v.b).c===D.vo)return!1
w=this.b
if(B.d.bc(w,new A.d8_(d,e)))return!1
w.push(new A.AY(d,e))
this.b0()
return!0},
bR1(d){var w
if(d.b==="beat")return D.bQp[B.o.J(d.d,4)]
w=this.at
switch(B.o.J(d.d,3)){case 1:return 350+w.aE(500)
case 2:return 1400+w.aE(2200)
default:return 450+w.aE(2000)}},
aA5(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.m(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.m(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=B.o.J(w,6)
t=D.as7[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new A.B7(u,t,j.ax,90))
w.push(new A.B7(u,B.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ah()*3.141592653589793*2
v.push(new A.Z8(u,new C.v(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b15(261.63*Math.pow(2,([0,4,7,12,16,19][B.o.J(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ah()*3.141592653589793*2
p=100+w.ah()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,B.c,w.ah()*0.5)
m.toString
v.push(new A.Z8(u,new C.v(o*p,n*p),m,3+w.ah()*4.5,1000+w.aE(700),j.ax))}j.f.push(new A.B7(u,t,j.ax,120))
j.awL(120,200,"noise",0.5)
j.b15(261.63*Math.pow(2,([7,12,16,19][w.aE(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new A.B7(u,t,j.ax,230))
w.push(new A.B7(u,t,j.ax+160,160))
w.push(new A.B7(u,t,j.ax+320,100))
j.b16(180+j.at.aE(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new A.a9_(u,new C.v((w.ah()-0.5)*220,-260-w.ah()*180),t,j.ax))
j.b16(300+w.aE(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ah()*3.141592653589793*2
j.w.push(new A.a9g(u,u.ap(0,new C.v(Math.cos(q),Math.sin(q)).aO(0,260+w.ah()*200)),t,j.ax))
j.a_P(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fT()
j.a_P(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new A.abb(u,D.arI[v],t,j.ax))
j.awL(261.63*Math.pow(2,([0,5,9,12][j.at.aE(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.awL(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.bMw[B.o.J(w,3)]
for(k=1;k<=3;++k)j.cgn(d,j.ax+l*k,!0)
break
case"delay":for(w=B.d.gaf(j.b),v=new C.hX(w,new A.d80(d));v.C();)j.avq(w.gT(0),j.ax+D.bYJ[B.o.J(g.d,4)])
s=!1
break
case"toggle":w=j.as
v=w.h(0,d)
k=(v==null?0:v)+1
w.m(0,d,k)
s=(k&1)===1
break
case"count3":w=j.as
v=w.h(0,d)
k=(v==null?0:v)+1
w.m(0,d,k)
s=k%3===0
break
case"chance":s=j.at.aE(100)<D.ceo[B.o.J(g.d,3)]
break
default:break}if(s)for(w=B.d.gaf(j.b),v=new C.hX(w,new A.d81(d));v.C();)j.avq(w.gT(0),j.ax)
w=j.e
v=w.length
if(v>700)B.d.y9(w,0,v-700)},
cgn(d,e,f){var w=this.c
if(w.length>260)return
w.push(new A.WY(e,"~"+d))},
avq(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new A.ac2(d.a,v,e,w))
u.push(new A.WY(w,v))},
cJE(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=C.a2(w).k("be<2>")
w=C.z(new C.be(w,v),v.k("E.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,C.J)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.m(0,r,o.ax+300)
else if(o.ax>=q){o.aA5(r)
u.m(0,r,o.ax+o.bR1(s))}}w=o.c
v=C.S(w).k("a3<1>")
q=C.z(new C.a3(w,new A.d84(o),v),v.k("E.E"))
if(q.length!==0){B.d.bk(w,new A.d85(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.J)(q),++t){u=q[t].b
if(B.a.a_(u,"~")){p=B.a.aV(u,1)
for(u=B.d.gaf(v),r=new C.hX(u,new A.d86(p));r.C();)o.avq(u.gT(0),o.ax)}else o.aA5(u)}}B.d.bk(o.d,new A.d87(o))
B.d.bk(o.e,new A.d88(o))
B.d.bk(o.f,new A.d89(o))
B.d.bk(o.w,new A.d8a(o))
B.d.bk(o.x,new A.d8b(o))
B.d.bk(o.r,new A.d8c(o))
o.b0()},
a4M(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new C.v(q.a+o*e,q.b+p*e)
r.b=new C.v(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new C.v(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new C.v(l,o)
if(o>n){p=m.a=new C.v(l,n)
t=m.b=new C.v(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new C.v(-t.a*0.8,t.b)}},
ad(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=C.a([],x.ez)
for(v=this.a,v=new C.du(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(C.D(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=C.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,C.J)(t),++o){n=t[o]
v.push(C.a([n.a,n.b],r))}return B.Q.ak(C.D(["nodes",m,"edges",v],u,x.ew),null)},
cB1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.h.a(B.Q.aC(0,d,null))
k.a8(0)
for(o=x.a,n=J.aW(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gT(n)
u=C.t(J.q(v,"k"))
if(!D.m1.am(0,u))continue
t=C.t(J.q(v,"id"))
m.m(0,t,new A.q8(t,u,new C.v(C.fc(J.q(v,"x"))*k.cy.a,C.fc(J.q(v,"y"))*k.cy.b),B.k.L(C.fc(J.q(v,"p")))))
s=C.c3(C.aK(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aW(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gT(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new A.AY(q,p))}k.b0()
return!0}catch(l){return!1}},
cDZ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.m(0,n,new A.q8(n,r,new C.v(q*p.a,o*p.b),s))
l.b0()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.b4P(w[m.a],w[m.b])}},
gX(d){return this.cy}}
A.Ee.prototype={}
A.TF.prototype={
S(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new A.aAO(new A.bcB(C.Q(w,x.f3),v,u,t,s,r,q,p,o,C.Q(w,n),C.Q(w,n),C.Q(w,n),C.Q(w,n),B.cz,B.K,B.at,$.as()),B.bs,B.J,B.J,B.T,null,null)}}
A.aAO.prototype={
a99(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$a99=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.au(),$async$a99)
case 6:q=n.ko(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.n(new A.e79(s))
u=1
w=5
break
case 3:u=2
o=t.pop()
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$a99,v)},
a6f(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a6f=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.n(new A.e6Z(s))
u=3
w=6
return C.b(C.au(),$async$a6f)
case 6:e.an("Bool","ngmy_core_lab_coach_v1",!0)
u=1
w=5
break
case 3:u=2
q=t.pop()
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$a6f,v)},
bD3(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a2(n).k("be<2>")
v=""+n.a+"|"+o.length+"|"+new C.be(n,w).cO(0,0,new A.e70())+"|"+B.d.cO(o,0,new A.e71())
if(v===p.ch)return p.CW
u=new A.e74()
t=x.s
s=C.a([],t)
r=new A.e75(p,s,u)
for(n=new C.be(n,w).gaf(0),w=new C.hX(n,new A.e72());w.C();){q=n.gT(0)
if(!B.d.bc(o,new A.e73(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.dg(s,0,C.dK(5,"count",x.S),x.N).dz(0)},
Z(){var w,v=this
v.a0()
v.a99()
v.d.db=v.ay
w=v.qL(new A.e7z(v))
w.ki(0)
v.e!==$&&C.aO()
v.e=w},
p(){var w=this,v=w.as
if(v!=null)v.a9(0)
v=w.e
v===$&&C.c()
v.p()
v=w.d
v.R$=$.as()
v.O$=0
w.box()},
a8H(d){return this.bQu(d)},
bQu(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$a8H=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.au(),$async$a8H)
case 6:q=m.aR(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cB1(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aR_(B.d.gI(D.arg))
if(s.c!=null)s.n(new A.e78())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$a8H,v)},
aR_(d){this.d.cDZ(0,d.c,d.d)
this.CO()},
CO(){var w=this.as
if(w!=null)w.a9(0)
this.as=C.cV(B.lg,new A.e6V(this))},
asC(d){var w,v,u,t,s=this.d.a,r=C.a2(s).k("be<2>")
s=C.z(new C.be(s,r),r.k("E.E"))
r=C.S(s).k("dt<1>")
s=new C.dt(s,r)
s=new C.bR(s,s.gH(0),r.k("bR<ai.E>"))
w=d.a
r=r.k("ai.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
c4S(d){var w,v,u,t,s,r=this.d.a,q=C.a2(r).k("be<2>")
r=C.z(new C.be(r,q),q.k("E.E"))
q=C.S(r).k("dt<1>")
r=new C.dt(r,q)
r=new C.bR(r,r.gH(0),q.k("bR<ai.E>"))
w=d.a
v=d.b
q=q.k("ai.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bQi(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.m1.h(0,r.b).c===D.vo)continue
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
bXT(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=A.fXZ(new C.v(n.a+36,n.b+0),new C.v(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cnC(d){var w,v,u,t,s,r,q=this,p=q.asC(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eL()
u=v.b
if(u==="button"){w.aA5(p)
return}if(q.r)return
t=D.m1.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.pF)s=6
else s=1
v.d=B.o.J(v.d+1,s)
w.b0()
q.CO()
return}if(q.r)return
r=q.bXT(d)
if(r!=null){w=q.d
B.d.ct(w.b,r)
w.b0()
q.CO()}},
c66(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.c4S(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.asC(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aD(0,d)}},
c67(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b0()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.v(B.k.D(d.a+s.y.a,46,t.a-46),B.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b0()}}},
aVw(){var w,v,u=this
if(u.z!=null){w=u.bQi(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.b4P(v,w)}else v=!1
if(v){C.jz()
u.CO()}u.z=null
u.d.b0()}else if(u.x!=null){if(u.at)u.CO()
u.x=null}},
a9n(d){return this.bT4(d)},
bT4(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$a9n=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.asC(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.j5()
p=t.c
p.toString
w=3
return C.b(C.c0(D.rk,new A.e7b(q),p,!0,!0,!1,B.l0,!1,!1,x.y),$async$a9n)
case 3:if(f===!0){r.W(0,s)
t.CO()}case 1:return C.h(u,v)}})
return C.i($async$a9n,v)},
bXR(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.zW(0,d,new C.v(v.a*(0.25+u.ah()*0.5),v.b*(0.2+u.ah()*0.55)))
C.eL()
this.CO()},
acP(){var w=0,v=C.j(x.H),u=this,t,s
var $async$acP=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.c0(D.rk,new A.e7d(),s,!0,!0,!0,B.l0,!1,!1,x.es),$async$acP)
case 2:t=e
if(t!=null)u.aR_(t)
return C.h(null,v)}})
return C.i($async$acP,v)},
aau(d){var w=0,v=C.j(x.H),u=this,t
var $async$aau=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cb(null,null,!0,null,new A.e6Y(),t,null,!0,!0,x.y),$async$aau)
case 2:if(f===!0){u.d.a8(0)
u.CO()}return C.h(null,v)}})
return C.i($async$aau,v)},
B(d){var w=this,v=null,u=C.a([C.afd(w.r?new C.bE(B.a1,v,v,new C.B(B.DE,C.hg(D.bui,D.eDK,new A.e7x(w),v),v),v):w.bXU(),B.b7,B.i8),C.C(C.co(new A.e7y(w)),1)],x.p)
if(!w.r)u.push(w.ciK())
return C.cg(v,B.bV,C.br(!0,C.u(u,B.m,v,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),v,!1,!1,v,v)},
byS(){var w=null,v=new A.e7_(),u=B.x.j(0.7),t=C.m(26),s=C.H(B.bo.j(0.5),B.r,1)
return C.c_(0,C.eb(C.at(C.p(w,C.ce(C.u(C.a([D.eNT,B.aw,D.eUC,B.aC,v.$4(B.o8,B.bo,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(U.Eo,B.cH,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(B.kT,B.cd,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(D.bo0,B.cX,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.eTZ,new C.bE(B.a7,w,w,C.bF(!1,D.eLc,w,w,!0,w,w,this.gbyL(),w,w),w)],x.p),B.F,w,B.e,B.R,0,B.p),B.q,w,B.z,w,w,w,w,B.af),B.i,w,B.Si,new C.o(D.rk,w,s,t,w,w,B.n),w,w,w,B.ft,Z.ad5,w,w,w),w,w,w),u,!0),0,0,0)},
bXU(){var w=this,v=null,u=C.aF(v,v,v,v,E.qk,v,v,v,new A.e7j(w),v,v,v,v,v,v),t=w.a5K(B.Xm,"How it works",new A.e7k(w),!0),s=w.ay?B.np:L.qh
return new C.B(D.bix,C.A(C.a([u,D.bjN,t,w.a5K(s,"Sound",new A.e7l(w),!0),w.a5K(B.dP,"Ideas",w.gc9J(),!0),w.a5K(D.wI,"Clear",w.gbXS(w),!0),w.aIp(B.iX,"Show",new A.e7m(w),!0,!0)],x.p),B.m,v,B.e,B.j,0,v,v),v)},
aIp(d,e,f,g,h){var w=null,v=h?B.bo:B.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.U(d,h?B.x:B.c,w,w,w,20)],x.p)
return new C.B(A4.ud,C.aD(!1,B.X,!0,u,C.aH(!1,t,!0,C.hJ(new C.B(new C.L(8,8,8,8),C.A(s,B.m,w,B.e,B.R,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.i,v,0,w,w,w,w,w,B.aa),w)},
a5K(d,e,f,g){return this.aIp(d,e,f,g,!1)},
ciK(){var w=null,v=new A.e7f(this),u=B.c.j(0.08)
return C.p(w,C.ce(C.A(C.a([v.$2("START",D.vo),v.$2("CHANGE",D.C_),v.$2("REACT",D.pF)],x.p),B.F,w,B.e,B.j,0,w,w),B.q,w,B.z,w,w,w,w,B.b_),B.i,w,w,new C.o(D.Tu,w,new C.c2(new C.ay(u,1,B.r,-1),B.V,B.V,B.V),w,w,w,B.n),w,w,w,w,D.bdV,w,w,w)},
ciL(d){var w,v,u,t,s=null,r=D.m1.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.H(v.j(0.5),B.r,1)
return new C.B(B.h9,C.aJ(s,C.p(s,C.u(C.a([C.U(r.b,v,s,s,s,22),B.dh,C.d(r.a,s,1,B.a0,s,s,s,D.a3X,s,s,s)],x.p),B.m,s,B.e,B.R,0,B.p),B.i,s,s,new C.o(s,s,t,w,s,new C.a7(B.b4,B.bc,B.w,u,s,s),B.n),s,s,s,s,B.hq,s,s,62),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.e7e(this,d),s,s,s,s,s,s,!1,B.ae),s)}}
A.bcC.prototype={
a6(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bP(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.a1()
u=C.T()
u.r=B.c.j(0.05).gt(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.M()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.a1()
o=C.T()
o.r=b5.cx.j(0.4*((p-b6)/800)).gt(0)
b8.bp(new C.af(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.J)(w),++m){l=w[m]
k=n.h(0,l.a)
j=n.h(0,l.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=j.c
f=g.a-36
g=g.b
e=$.a1()
d=C.a([],o)
a0=new C.b_(e.r,B.au,b4,b4,d)
d.push(new C.bj(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new C.p3(h+a1,i,f-a1,g,f,g))
a2=D.m1.h(0,k.b).d
a3=D.m1.h(0,j.b).d
e=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
e.b=B.aj
e.c=3
e.d=B.bZ
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.qQ(new C.v(h,i),new C.v(f,g))
e.saz(new C.a7(B.a1,B.a7,B.w,d,b4,b4).aB(0,new C.af(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.M()
i=a0.gbM().a.snapshot()
b7.drawPath((a0.e=new C.cG(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.J)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=B.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=A.fXZ(new C.v(i.a+36,i.b+0),new C.v(h.a-36,h.b),a5)
$.a1()
h=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
h.r=B.c.j(0.35).gt(0)
h.z=H.pe
q=h.M()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
g.r=B.c.gt(0)
q=g.M()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ap(0,D.G3)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.b_($.a1().r,B.au,b4,b4,C.a([],o))
o=a8.b
a0.N(new C.bj(t,o))
i=a9.b
a0.N(new C.p3(t+a1,o,w-a1,i,w,i))
i=C.T()
i.b=B.aj
i.c=3
i.r=B.c.j(0.7).gt(0)
b8.b4(a0,i)
i=C.T()
i.r=B.c.gt(0)
b8.aw(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.J)(w),++m){b0=w[m]
o=b0.c
v=B.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=B.dW.aq(0,v)
$.a1()
h=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
h.b=B.aj
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gt(0)
q=h.M()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,C.J)(w),++m){b1=w[m]
v=B.k.D((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=C.kZ(o,i,B.dW.aq(0,v))
h.toString
i=C.kZ(o,i,B.dW.aq(0,B.k.D(v-0.35,0,1)))
i.toString
$.a1()
o=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
o.c=5
o.d=B.bZ
g=b1.c
f=C.a([g.j(0),g],p)
e=C.qQ(i,h)
o.saz(new C.a7(B.a1,B.a7,B.w,f,b4,b4).aB(0,new C.af(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.M()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
i.r=B.c.gt(0)
q=i.M()
b7.drawCircle(o,h,6,q)
q.delete()
i=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
i.r=g.j(0.5*(1-v)).gt(0)
i.z=B.jf
q=i.M()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,C.J)(w),++m){a4=w[m]
v=B.k.D((b6-a4.f)/a4.e,0,1)
o=a4.a
$.a1()
i=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
i.r=a4.c.j(1-v).gt(0)
q=i.M()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,C.J)(w),++m){j=w[m]
o=j.a
$.a1()
i=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
h=j.c
i.r=h.j(0.35).gt(0)
i.z=B.jf
q=i.M()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
i.saz(new C.bT(N.qT,0.5,B.w,b4,0,C.a([B.c,h],p),b4,b4).aB(0,C.c1(j.a,8)))
q=i.M()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.J)(b5),++m){a6=b5[m]
v=B.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=A.bcD(a6.b,26+8*t,a6.c.j(t),b4,b4,B.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a6(b8,new C.v(t.a-o/2,t.b-(40+60*v+p.gbd(p)/2)))}for(b5=new C.du(n,n.r,n.e);b5.C();)b3.c5G(b8,b5.d,b6)
b7.restore()},
c5G(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.m1.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:B.k.D(1-(f-w)/520,0,1)
u=C.dy(e.c,64,64)
t=C.bZ(u,B.jJ)
s=t.eF(B.cv)
$.a1()
r=C.T()
r.r=B.x.j(0.55).gt(0)
r.z=B.mK
d.bi(s,r)
if(v>0){s=t.cD(6)
r=C.T()
r.r=h.d.j(0.6*v).gt(0)
r.z=B.Fy
d.bi(s,r)}s=t.eF(B.cC)
r=C.T()
q=h.d
r.r=C.aq(q,B.x,0.65).gt(0)
d.bi(s,r)
r=C.T()
s=C.aq(q,B.c,0.18+0.4*v)
s.toString
p=C.aq(q,B.x,0.35)
p.toString
r.saz(new C.a7(B.b4,B.bc,B.w,C.a([s,p],x.O),j,j).aB(0,u))
d.bi(t,r)
r=C.T()
r.b=B.aj
r.c=1.2
r.r=B.c.j(0.35).gt(0)
d.bi(t,r)
r=h.b
p=e.c
o=A.bcD(C.ju(r.a),30,B.c,r.b,j,B.I)
r=o.b
s=r.c
r=r.a.c
o.a6(d,p.aD(0,new C.v(s/2,r.gbd(r)/2)))
n=A.bcD(h.a,11,B.c,j,j,B.I)
n.a6(d,e.c.ap(0,new C.v(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[B.o.J(e.d,r)]
else m=i==="pop"?D.arI[B.o.J(e.d,6)]:j
h=h.c
if(h===D.pF){s=e.c.ap(0,new C.v(0,62))
r=C.T()
r.r=D.as7[B.o.J(e.d,6)].gt(0)
d.aw(s,5,r)}else if(m!=null){l=A.bcD(m,9.5,B.aA,j,j,B.O)
l.a6(d,e.c.ap(0,new C.v(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=A.bcD(m,9.5,B.aA,j,j,B.O)
l.a6(d,e.c.ap(0,new C.v(-l.b.c/2,54)))}if(k.c)return
if(h!==D.vo)k.aWh(d,e.c.aD(0,D.G3),q)
k.aWh(d,e.c.ap(0,D.G3),q)},
aWh(d,e,f){var w
$.a1()
w=C.T()
w.r=B.bV.gt(0)
d.aw(e,9,w)
w=C.T()
w.b=B.aj
w.c=2.2
w.r=f.gt(0)
d.aw(e,9,w)
w=C.T()
w.r=B.c.gt(0)
d.aw(e,3.5,w)},
ao(d){return!0}}
A.aIv.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bh5.prototype={}
A.NT.prototype={
gX(d){return this.d}}
A.TU.prototype={
S(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new A.bga(new C.cn(null,x.A),w,v,B.cz,B.bs,D.CQ,null,null)}}
A.bga.prototype={
aU7(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=B.o.D(B.k.bK((1-d.b/(C.aG(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.aqJ[B.o.J(v,5)]+12*B.o.aj(v,5)+12
switch(t.z){case"glow":A.kY("synth",u,420,0.3)
break
case"rainbow":A.kY("bell",u,700,0.35)
break
case"stars":A.kY("pluck",u+12,400,0.4)
break
case"sparks":A.e1(2400+t.r.aE(2000),"",60,0,0.18,"noise")
break
default:A.e1(110+t.r.aE(60),"",140,0,0.22,"noise")}},
c_E(d){return this.aU7(d,!1)},
Z(){var w,v=this
v.a0()
w=v.qL(new A.ehk(v))
w.ki(0)
v.w!==$&&C.aO()
v.w=w},
p(){var w=this.w
w===$&&C.c()
w.p()
this.boG()},
gaVP(){var w=this.Q
return w<0?new F.mI(1,B.k.J(this.y*0.18,360),0.85,1).iQ():D.NT[w]},
aMC(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gaVP(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.ah()*3.141592653589793*2
switch(l.z){case"fire":q=v.ah()
p=l.as
o=v.ah()
n=v.ah()
m=C.aq(B.cX,B.aH,v.ah())
m.toString
j.push(new A.NT(new C.v(u+(q-0.5)*p,t),new C.v((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.ah()*0.4),l.y,700+v.aE(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.ah()*200
n=C.aq(k,B.c,v.ah()*0.6)
n.toString
j.push(new A.NT(d,new C.v(q*o,p*o),n,1.5+v.ah()*3,l.y,600+v.aE(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.ah()*40
j.push(new A.NT(d,new C.v(q*o,p*o),k,1.2+v.ah()*1.8,l.y,500))}}},
aT3(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gaVP()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new A.bh5(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aMC(e)
r.aU7(e,!0)
r.n(new A.egW())},
aT2(){this.ax=null
this.n(new A.egV())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aF(n,n,n,n,D.lY,n,n,n,new A.eh4(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b1(n,n,n,new A.bnm(k,o.f,o.y,o.at,n),B.at)],m)
if(!o.ay&&k.length===0)j.push(D.aWr)
k=C.aJ(B.c5,new C.am(B.W,n,B.aX,B.q,j,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,new A.eh5(o),new A.eh6(o),new A.eha(o),n,n,n,n,n,n,n,n,n,new A.ehb(o),new A.ehc(o),n,n,n,!1,B.ae)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cBC[w]
j.push(new A.dv(v.b,o.z===v.a,new A.ehd(o,v),v.c,B.cd,n))}u=C.a([new A.DJ(B.c,o.Q<0,new A.ehe(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new A.DJ(D.NT[t],o.Q===t,new A.ehf(o,t),!1,n))
s=o.as
s=A.ho(B.cd,B.o.u(B.k.U(s)),"Size",36,4,new A.ehg(o),s)
r=o.ch
q=r?B.np:L.qh
q=C.a([new A.dv("Sound",r,new A.ehh(o),q,B.cd,n),new A.ff(B.x0,"Undo",new A.eh7(o),B.c,n),new A.ff(D.wI,"Clear",new A.eh8(o),B.cJ,n)],m)
for(w=0;w<4;++w){p=D.cQ6[w]
q.push(new A.DJ(p,o.at.A(0,p),new A.eh9(o,p),!1,n))}return A.jd(B.cd,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.es(k,o.d),"SPARK PAINTER",C.u(C.a([new A.eD(j,"BRUSH",n),new A.eD(u,"COLOUR",n),s,new A.eD(q,n,n)],m),B.m,n,B.e,B.R,0,B.p))}}
A.bnm.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.a1()
w=C.T()
v=a4.e
w.r=v.gt(v)
a6.bp(new C.af(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.J)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.a1()
o=C.a([],t)
n=new C.b_(p.r,B.au,a5,a5,o)
o.push(new C.bj(B.d.gI(q).a,B.d.gI(q).b))
for(p=C.S(q),m=p.k("pr<1>"),l=new C.pr(q,1,a5,m),l.FK(q,1,a5,p.c),l=new C.bR(l,l.gH(0),m.k("bR<ai.E>")),m=m.k("ai.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.aw(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bI(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=B.d.gI(q)
$.a1()
p=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
p.r=r.c.gt(0)
j=p.M()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.a1()
q=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
q.b=B.aj
q.d=B.bZ
q.e=B.fj
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gt(0)
q.z=new C.hG(B.G,p)
j=q.M()
q=n.e
u.drawPath((q==null?n.e=new C.cG(n.gbM().a.snapshot()):q).a,j)
j.delete()
q=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
q.b=B.aj
q.d=B.bZ
q.e=B.fj
q.c=p
q.r=o.gt(0)
j=q.M()
q=n.e
u.drawPath((q==null?n.e=new C.cG(n.gbM().a.snapshot()):q).a,j)
j.delete()
q=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
q.b=B.aj
q.d=B.bZ
q.e=B.fj
q.c=p*0.35
q.r=B.c.j(0.85).gt(0)
j=q.M()
q=n.e
u.drawPath((q==null?n.e=new C.cG(n.gbM().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new F.mI(1,B.o.J(i*5,360),0.85,1).iQ()
o=q[i-1]
m=q[i]
$.a1()
l=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
l.c=p
l.d=B.bZ
l.r=h.gt(0)
j=l.M()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,C.J)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=B.d.gI(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new F.mI(1,B.o.J(a3*23,360),0.7,1).iQ():l
a4.bXV(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.J)(w),++s){a0=w[s]
e=B.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.a1()
p=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
p.r=a0.c.j((1-e)*0.9).gt(0)
p.z=E.a06
j=p.M()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
bXV(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.a1(),o=C.a([],x.v),n=new C.b_(p.r,B.au,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new C.bj(r,q)
o.push(r)
q=n.f
if(q!=null)r.bI(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.aw(r,q)
o.push(r)
q=n.f
if(q!=null)r.bI(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.N(new C.bX())
$.a1()
p=C.T()
p.r=h.j(0.4).gt(0)
p.z=B.jf
d.b4(n,p)
p=C.T()
p.r=h.gt(0)
d.b4(n,p)},
ao(d){return!0}}
A.U5.prototype={
S(){return new A.aB1(new C.cn(null,x.A),new C.ao(new C.b9("NGMY",B.aY,B.aL),$.as()),null,null)}}
A.aB1.prototype={
gHd(){var w,v=this,u=v.e
if(u===$){w=C.bh(null,B.rt,null,1,null,v)
w.cF(0)
v.e!==$&&C.bG()
v.e=w
u=w}return u},
Z(){this.a0()
var w=this.gHd()
w.d4()
w.dL$.G(0,this.gbPt())},
bPu(){var w,v,u,t,s,r,q,p=this,o=p.gHd().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?B.lx:new C.lJ(w)).gH(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)A.e1(1500,"",35,0,0.18,"square")
else if(s==="glitch")A.e1(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
A.kY(s,D.apI[B.o.J(t,8)]+12,450,0.35)}}p.Q=o},
p(){this.gHd().p()
var w=this.f
w.R$=$.as()
w.O$=0
this.boM()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.lJ(h)
w=C.z(h,C.a2(h).k("E.E"))}v=D.NT[k.w]
h=x.p
u=C.a([C.aF(j,j,j,j,D.lY,j,j,j,new A.enU(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.arJ[k.y]
s=C.bw(t,C.bQ(C.at(C.c4(k.gHd(),new A.enV(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a7(B.ax,B.aE,B.w,s,j,j),B.n),B.ba),B.ap)
t=B.c.j(0.06)
t=C.aI(j,B.T,!1,j,!0,B.q,j,C.aL(),i,j,j,j,j,j,2,C.bn(j,new C.b0(4,C.m(14),B.V),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,H.BC,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),B.z,!0,j,!0,j,!1,j,B.ad,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new A.enW(k),j,j,j,!1,j,j,!1,j,!0,j,B.a8,j,j,j,j,j,j,j,j,j,j,j,B.hi,!0,B.a5,j,B.am,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cec[r]
i.push(new A.dv(q.b,k.r===q.a,new A.enX(k,q),j,B.cX,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new A.DJ(D.NT[o],k.w===o,new A.enY(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?B.np:L.qh
l=C.a([new A.dv(m,n,new A.enZ(k),l,B.cX,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new A.DJ(D.arJ[o][0],k.y===o,new A.eo_(k,o),!1,j))
n.push(B.bp)
n.push(new A.ff(B.lV,"Replay",new A.eo0(k),B.c,j))
m=k.x
return A.jd(B.cX,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.B(B.bC,new C.es(s,k.d),j),"TITLE ANIMATOR",C.u(C.a([t,B.P,new A.eD(i,"MOVE",j),new A.eD(p,"COLOUR",j),new A.eD(l,"SOUND",j),new A.eD(n,"BACK",j),A.ho(B.cX,B.o.u(B.k.U(m)),"Size",96,28,new A.eo1(k),m)],h),B.m,j,B.e,B.R,0,B.p))},
bSb(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cI(h.j(0.7),B.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<B.k.bK(g*1.6*f)?1:0
w=h
break
case"bounce":o=-Math.abs(Math.sin(B.k.J(g*2-q*0.5,1)*3.141592653589793))*s.x*0.5
w=h
break
case"wave":o=Math.sin(g*3.141592653589793*2-q*3)*s.x*0.28
w=h
break
case"neon":v=Math.sin(g*40+e*7)>0.92?0.25:1
B.d.a8(p)
p.push(new C.cI(h,B.J,30*v))
p.push(new C.cI(h.j(0.8),B.J,60*v))
w=h
m=v
break
case"glitch":u=B.o.J(B.k.bK(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=B.b8
else w=u?B.cd:h
break
case"zoom":t=B.k.D(g*1.4-q*0.5,0,1)
n=B.oB.aq(0,t)
w=h
m=t
break
case"rainbow":w=new F.mI(1,B.k.J(g*360+e*40,360),0.75,1).iQ()
B.d.a8(p)
p.push(new C.cI(w.j(0.7),B.J,18))
break
default:w=h}return C.d8(C.dN(C.e4(B.C,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,B.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.v(l,o)),m)}}
A.aIE.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.aIK.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.Yt.prototype={}
A.TE.prototype={
S(){var w=C.a([],x.aS)
return new A.aAI(new C.cn(null,x.A),w,B.cz,B.at,$,B.bs,0,C.a([],x.X),null,null)}}
A.aAI.prototype={
gaav(){var w=this.r
return new C.v(w.a/2,w.b/2)},
aWX(){return new F.mI(1,this.f.ah()*360,0.6,1).iQ()},
anp(d,e,f,g){var w=this,v=w.gaav().ap(0,new C.v(Math.cos(e),Math.sin(e)).aO(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new A.Yt(v,new C.v(-t,s).aO(0,r).aO(0,u*f),w.Q*(0.6+w.f.ah()*0.9),w.aWX(),C.a([],x.g)))},
bye(d,e,f){return this.anp(d,e,f,!1)},
byd(d,e){return this.anp(d,e,1,!1)},
ckZ(){var w,v,u,t=this
B.d.a8(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.byd(40+w*u/5,v.ah()*3.141592653589793*2)},
bz5(){var w=this.r
this.bye(Math.min(w.a,w.b)*0.42,this.f.ah()*3.141592653589793*2,0.45)},
Z(){this.a0()
this.kG()},
kZ(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,B.at))return
w=a2.e
v=w.length
if(v===0&&a2.fB$<300)return
u=a2.gaav()
t=a3*a2.x/4
for(s=u.a,r=u.b,q=0;q<4;++q,v=o)for(p=0;o=w.length,p<o;w.length===v||(0,C.J)(w),++p){n=w[p]
o=n.a
m=s-o.a
o=r-o.b
l=Math.max(m*m+o*o,400)
k=Math.sqrt(l)
j=1e6*a2.w/l
i=new C.v(m/k*j,o/k*j)
if(a2.y)for(o=w.length,h=0;h<w.length;w.length===o||(0,C.J)(w),++h){g=w[h]
if(g===n)continue
m=g.a
j=n.a
f=m.a-j.a
j=m.b-j.b
e=Math.max(f*f+j*j,400)
m=Math.sqrt(e)
d=1e6*a2.w*0.02/e
a0=g.c/7
i=new C.v(i.a+f/m*d*a0,i.b+j/m*d*a0)}o=n.b
m=o.a+i.a*t
o=o.b+i.b*t
n.b=new C.v(m,o)
j=n.a
n.a=new C.v(j.a+m*t,j.b+o*t)}for(p=0;o=w.length,p<o;w.length===v||(0,C.J)(w),++p){n=w[p]
if(a2.z){o=n.e
if(o.length!==0){m=B.d.gai(o)
j=n.a
f=m.a-j.a
j=m.b-j.b
j=Math.sqrt(f*f+j*j)>3
m=j}else m=!0
if(m)o.push(n.a)
if(o.length>260)B.d.ct(o,0)}else B.d.a8(n.e)}for(p=0;p<w.length;w.length===o||(0,C.J)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lx(v.a-s)!==J.lx(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fB$-n.r>250){n.r=a2.fB$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
A.kY("bell",D.apI[B.k.U((1-B.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a3(w,new A.e4q(u),C.S(w).k("a3<1>")).gH(0)>0&&a2.ax)A.e1(70,"",300,0.6,0.8,"sine")
B.d.bk(w,new A.e4r(a2,u))},
c9C(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gaav()
for(w=j.a,v=j.b,u=e,t=d,s=0;s<220;++s){r=t.a
q=w-r
p=t.b
o=v-p
n=Math.max(q*q+o*o,400)
m=Math.sqrt(n)
l=1e6*this.w/n
q=u.a+q/m*l*0.016666666666666666
l=u.b+o/m*l*0.016666666666666666
u=new C.v(q,l)
t=new C.v(r+q*0.016666666666666666,p+l*0.016666666666666666)
if(B.o.J(s,3)===0)k.push(t)
if(m<16)break}return k},
gaQF(){var w,v=this.as
if(v==null||this.at==null)v=B.J
else{w=this.at
w.toString
w=v.aD(0,w).aO(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aF(r,r,r,r,D.lY,r,r,r,new A.e4e(s,d),r,r,r,r,"Share",r)],q),o=C.co(new A.e4f(s)),n=s.w
n=A.ho(B.dg,B.k.ab(n,1)+"x","Sun mass",2.5,0.3,new A.e4g(s),n)
w=s.x
w=A.ho(B.dg,B.k.ab(w,1)+"x","Time",3,0.2,new A.e4i(s),w)
v=s.Q
v=A.ho(B.dg,B.o.u(B.k.U(v)),"Planet size",16,3,new A.e4j(s),v)
u=s.ax
t=u?B.np:L.qh
return A.jd(B.dg,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.u(C.a([n,w,v,new A.eD(C.a([new A.dv("Sound",u,new A.e4k(s),t,B.dg,r),new A.dv("Trails",s.z,new A.e4l(s),B.Eq,B.dg,r),new A.dv("Planets pull each other",s.y,new A.e4m(s),B.x7,B.dg,r)],q),r,r),new A.eD(C.a([new A.ff(B.no,"Solar system",new A.e4n(s),B.dg,r),new A.ff(B.lW,"Comet",new A.e4o(s),B.c,r),new A.ff(B.lS,"Cluster",new A.e4p(s),B.c,r),new A.ff(D.wI,"Clear",new A.e4h(s),B.cJ,r)],q),r,r)],q),B.m,r,B.e,B.R,0,B.p))}}
A.bgT.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.a1()
w=C.T()
w.r=D.Tn.gt(0)
d.bp(new C.af(0,0,0+g,0+f),w)
v=new C.f9()
v.e2(5)
for(w=d.a,u=0;u<70;++u){t=v.ah()
s=v.ah()
r=v.ah()
q=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.25+v.ah()*0.4).gt(0)
p=q.M()
w.drawCircle(t*g,s*f,r*1.2+0.3,p)
p.delete()}o=16+i.d*6
g=i.c
f=o*3.2
t=C.T()
s=x.O
t.saz(new C.bT(B.C,0.5,B.w,h,0,C.a([B.dg.j(0.45),B.K],s),h,h).aB(0,C.c1(g,f)))
d.aw(g,f,t)
t=C.T()
t.saz(D.dQy.aB(0,C.c1(g,o)))
d.aw(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.J)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
j.c=2.2*l+0.4
j.d=B.bZ
j.r=r.j(l*0.8).gt(0)
p=j.M()
w.drawLine.apply(w,[q.a,q.b,k.a,k.b,p])
p.delete()}t=m.a
r=m.c
q=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
k=m.d
q.r=k.j(0.3).gt(0)
q.z=H.pe
p=q.M()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
j=C.aq(k,B.x,0.5)
j.toString
q.saz(new C.bT(N.qT,0.5,B.w,h,0,C.a([B.c,k,j],s),h,h).aB(0,C.c1(m.a,r)))
p=q.M()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.T()
t.c=2
t.r=B.j8.gt(0)
d.bU(g,f,t)
t=C.T()
t.r=B.c.gt(0)
d.aw(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.J)(g),++n){m=g[n]
t=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
t.r=B.c.j(0.7).gt(0)
p=t.M()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
ao(d){return!0}}
A.a96.prototype={}
A.U0.prototype={
S(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new A.bgf(new C.cn(null,x.A),w,v,B.cz,B.at,$,B.bs,0,C.a([],x.X),null,null)}}
A.bgf.prototype={
Z(){this.a0()
this.kG()},
bXW(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.e,v=k.r;w.length<B.k.U(k.x);){u=v.ah()*3.141592653589793*2
t=k.w
s=v.ah()
r=k.w
q=v.ah()
p=Math.cos(u)
o=Math.sin(u)
n=k.as
m=v.ah()
l=k.ax
if(l==="fish")l=170
else l=l==="fly"?50:300
w.push(new A.a96(new C.v(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.v(p*n,o*n),B.k.J(m*60+l,360)))}while(w.length>B.k.U(k.x))w.pop()},
kZ(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,B.at))return
a2.bXW()
w=a2.f
B.d.bk(w,new A.enl(a2))
v=a2.e
u=v.length
for(t=0;t<u;++t){s=v[t]
for(r=B.J,q=B.J,p=B.J,o=0,n=0;n<u;++n){if(t===n)continue
m=v[n]
l=m.a
k=s.a
j=l.a
i=j-k.a
l=l.b
k=l-k.b
h=i*i+k*k
if(h<4900){++o
r=new C.v(r.a+j,r.b+l)
l=m.b
q=new C.v(q.a+l.a,q.b+l.b)
if(h<676&&h>0.01){l=Math.sqrt(h)
h=26-Math.sqrt(h)
p=new C.v(p.a-i/l*h,p.b-k/l*h)}}}if(o>0){l=s.a
k=0.8*a2.y
j=s.b
i=1.6*a2.Q
g=7*a2.z
f=new C.v(0+(r.a/o-l.a)*k+(q.a/o-j.a)*i+p.a*g,0+(r.b/o-l.b)*k+(q.b/o-j.b)*i+p.b*g)}else f=B.J
l=s.a
k=l.a
if(k<40)f=new C.v(f.a+(40-k)*6,f.b+0)
j=a2.w
i=j.a-40
if(k>i)f=new C.v(f.a-(k-i)*6,f.b)
l=l.b
if(l<40)f=new C.v(f.a+0,f.b+(40-l)*6)
j=j.b-40
if(l>j)f=new C.v(f.a,f.b-(l-j)*6)
j=a2.ay
if(j!=null){k=j.a-k
l=j.b-l
e=Math.sqrt(k*k+l*l)
j=a2.at
if(j==="attract"&&e<260&&e>1)f=new C.v(f.a+k/e*420,f.b+l/e*420)
if(j==="scare"&&e<170&&e>1){i=170-e
f=new C.v(f.a-k/e*i*22,f.b-l/e*i*22)}if(j==="hunt"&&e<220&&e>1){j=220-e
f=new C.v(f.a-k/e*j*30,f.b-l/e*j*30)}}for(l=w.length,d=0;d<w.length;w.length===l||(0,C.J)(w),++d){k=w[d].a
j=s.a
i=k.a-j.a
j=k.b-j.b
e=Math.sqrt(i*i+j*j)
if(e<220&&e>1)f=new C.v(f.a+i/e*360,f.b+j/e*360)}l=s.b
k=l.a+f.a*a3
l=l.b+f.b*a3
s.b=new C.v(k,l)
a0=Math.sqrt(k*k+l*l)
l=a2.as
k=a2.at==="hunt"&&a2.ay!=null?1.5:1
if(a0>0.01){j=s.b
k=B.k.D(a0,l*0.5,l*k)
s.b=new C.v(j.a/a0*k,j.b/a0*k)}l=s.a
k=s.b
s.a=new C.v(l.a+k.a*a3,l.b+k.b*a3)}a1=w.length
B.d.bk(w,new A.enm(a2))
if(w.length<a1&&a2.ch)A.kY("bell",12+a2.r.aE(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fB$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fB$
A.kY("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aF(l,l,l,l,D.lY,l,l,l,new A.ena(m,d),l,l,l,l,"Share",l)],k),i=C.co(new A.enb(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cD2[w]
h.push(new A.dv(v.b,m.at===v.a,new A.enc(m,v),v.c,B.bq,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cnV[w]
u.push(new A.dv(t.b,m.ax===t.a,new A.end(m,t),l,B.bq,l))}s=m.ch
r=s?B.np:L.qh
r=C.a([new A.dv("Sound",s,new A.ene(m),r,B.bq,l)],k)
s=m.x
s=A.ho(B.bq,B.o.u(B.k.U(s)),"How many",150,15,new A.enf(m),s)
q=A.ho(B.bq,l,"Together",2.5,0,new A.eng(m),m.y)
p=A.ho(B.bq,l,"Apart",2.5,0,new A.enh(m),m.z)
o=A.ho(B.bq,l,"Same way",2.5,0,new A.eni(m),m.Q)
n=m.as
return A.jd(B.bq,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.u(C.a([new A.eD(h,"TOUCH",l),new A.eD(u,"LOOK",l),new A.eD(r,l,l),s,q,p,o,A.ho(B.bq,B.o.u(B.k.U(n)),"Speed",280,50,new A.enj(m),n)],k),B.m,l,B.e,B.R,0,B.p))}}
A.boc.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.a94,D.b8S],x.O)
else{v=x.O
w=a4==="fly"?C.a([B.dc,Q.aaw],v):C.a([D.b6p,D.aZZ],v)}v=0+a6.a
u=0+a6.b
t=$.a1()
s=C.T()
s.saz(new C.a7(B.b4,B.bc,B.w,w,a3,a3).aB(0,new C.af(0,0,v,u)))
a5.bp(new C.af(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.J)(v),++r){q=v[r].a
p=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
p.r=B.cX.gt(0)
o=p.M()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
n.r=B.cX.j(0.25).gt(0)
n.z=H.pe
o=n.M()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.J)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new F.mI(1,j,0.7,1).iQ()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
f.r=h.j(0.35*g).gt(0)
f.z=B.jf
o=f.M()
s.drawCircle(j.a,j.b,9,o)
o.delete()
j=k.a
f=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
f.r=B.c.j(g).gt(0)
o=f.M()
s.drawCircle(j.a,j.b,2.6,o)
o.delete()
break
case"bird":J.bP(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
e=Math.sin(l+j)*5
j=C.a([],m)
d=new C.b_(t,B.au,a3,a3,j)
j.push(new C.bj(8,0))
j.push(new C.aw(-6,-7-e))
j.push(new C.aw(-2,0))
j.push(new C.aw(-6,7+e))
j.push(new C.bX())
j=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
j.r=h.gt(0)
o=j.M()
j=d.gbM().a.snapshot()
s.drawPath((d.e=new C.cG(j)).a,o)
o.delete()
s.restore()
break
default:J.bP(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
a0=Math.sin(n+j)*3
j=C.a([],m)
d=new C.b_(t,B.au,a3,a3,j)
j.push(new C.bj(9,0))
j.push(new C.dj(0,-6,-7,a0))
j.push(new C.aw(-12,-4+a0))
j.push(new C.aw(-12,4+a0))
j.push(new C.aw(-7,a0))
j.push(new C.dj(0,6,9,0))
j=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
f=C.aq(h,B.cA,0.6)
f.toString
j.saz(new C.a7(B.a1,B.a7,B.w,C.a([h,f],q),a3,a3).aB(0,D.e7Z))
o=j.M()
j=d.gbM().a.snapshot()
s.drawPath((d.e=new C.cG(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=B.cJ
else a1=v==="scare"?B.cX:B.bq
v=u?12:22
u=C.T()
u.b=B.aj
u.c=2.5
u.r=a1.j(0.8).gt(0)
a5.aw(a4,v,u)}},
ao(d){return!0}}
A.a9z.prototype={}
A.Sd.prototype={
S(){var w=C.a([],x.bi)
return new A.azk(w,B.cz,B.at,C.Q(x.N,x.S),$,B.bs,0,C.a([],x.X),null,null)}}
A.azk.prototype={
gGG(){var w=this.r,v=18+B.k.U(w*0.85)
return B.o.D(B.k.U(v*(0.12+0.45*(w-1)/99)),3,v-2)},
ga9D(){return 54-8*(this.r/100)},
Z(){this.a0()
this.kG()
A.yl("chain_burst").bC(new A.dxm(this),x.P)},
aT5(){return A.v0("chain_burst",C.D(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
avt(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
B.d.a8(k)
l.z=l.y=!1
w=l.as=0
l.at=null
v=18+B.k.U(l.r*0.85)
for(u=l.e;w<v;++w){t=u.ah()*3.141592653589793*2
s=u.ah()
r=l.f
q=u.ah()
p=l.f
o=Math.cos(t)
n=Math.sin(t)
m=(30+l.r*0.45)*(0.6+u.ah()*0.8)
k.push(new A.a9z(new C.v(20+s*(r.a-40),20+q*(p.b-40)),new C.v(o*m,n*m),new F.mI(1,u.ah()*360,0.6,1).iQ()))}},
WZ(d){var w,v=this
if(d==null)return 0
w=(v.fB$-d)/1000
if(w<0.4)return v.ga9D()*B.dW.aq(0,w/0.4)
if(w<1.1)return v.ga9D()
if(w<1.5)return v.ga9D()*(1-(w-1.1)/0.4)
return 0},
kZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,B.at)||!j.Q)return
w=j.d
if(w.length===0)j.avt()
for(v=w.length,u=0;u<v;++u){t=w[u]
if(t.d!=null)continue
s=t.a
r=t.b
q=r.a
p=r.b
o=s.a+q*d
s=s.b+p*d
t.a=new C.v(o,s)
if(o<8||o>j.f.a-8)r=t.b=new C.v(-q,p)
if(s<8||s>j.f.b-8)t.b=new C.v(r.a,-r.b)}if(j.y){n=C.a([],x.R)
v=j.at
if(v!=null)n.push(new C.V(v,j.WZ(j.ax)))
for(v=B.d.gaf(w),s=new C.hX(v,new A.dxn());s.C();){r=v.gT(0)
n.push(new C.V(r.a,j.WZ(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.J)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fB$
A.e1(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eL()
break}}}if(!(j.at!=null&&j.WZ(j.ax)>0||B.d.bc(w,new A.dxo(j)))&&j.fB$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gGG()){if(j.as>=j.gGG()*1.5)k=3
else k=j.as>=j.gGG()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.m(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
A.Aj("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aT5()}else A.e1(120,"",300,0,0.3,"saw")}}},
aT4(d){this.n(new A.dxc(this,d))
this.aT5()},
aaw(){var w=0,v=C.j(x.H),u=this,t,s
var $async$aaw=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.cb(null,null,!0,null,new A.dxf(u),s,null,!0,!0,x.S),$async$aaw)
case 2:t=e
if(t!=null)u.aT4(t)
return C.h(null,v)}})
return C.i($async$aaw,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gGG(),t=w.x.h(0,""+w.r)
return A.jd(B.cd,B.fQ,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.co(new A.dxj(w,t==null?0:t,u)),"CHAIN BURST",C.A(C.a([new A.ff(B.qe,"Levels",w.gbXX(),B.cd,v),new A.ff(B.jE,"New board",new A.dxk(w),B.c,v)],x.p),B.m,v,B.e,B.j,0,v,v))},
aqR(d,e,f){var w=null
return C.u(C.a([C.d(d,w,w,w,w,w,w,D.aIU,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p)},
bPW(d,e){return this.aqR(d,e,B.c)}}
A.b6B.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.a1()
w=C.T()
w.r=D.CQ.gt(0)
d.bp(new C.af(0,0,0+e.a,0+e.b),w)
v=new A.cEc(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),B.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,C.J)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.a1()
p=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
p.r=n.j(0.25).gt(0)
p.z=H.pe
m=p.M()
t.drawCircle(o.a,o.b,12,m)
m.delete()
o=q.a
p=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
p.r=n.gt(0)
m=p.M()
t.drawCircle(o.a,o.b,8,m)
m.delete()}}},
ao(d){return!0}}
A.aHE.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bsi.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bnE()}}
A.aIs.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bsy.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bou()}}
A.aIH.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bsG.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.boJ()}}
A.Ea.prototype={
gcDg(){return this.a.aD(0,this.b).gcr()>4}}
A.aan.prototype={}
A.Tz.prototype={
S(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new A.bfQ(new C.cn(null,x.A),w,v,B.cz,B.at,$,B.bs,0,C.a([],x.X),null,null)}}
A.bfQ.prototype={
aKo(d){return new F.mI(1,B.o.J(d*29,360),0.6,1).iQ()},
XE(d){var w,v=D.AF.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=B.o.D(B.k.bK(d.a/s*t),0,t-1)
return v[B.o.J(w,u)]+12*B.o.eb(w,u)},
aMS(d){B.d.bk(this.e,new A.e0o(this,d))},
chd(d,e,f){var w=f.aD(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aD(0,e).gcr()
return d.aD(0,e.ap(0,w.aO(0,B.k.D((d.aD(0,e).a*v+d.aD(0,e).b*u)/t,0,1)))).gcr()},
au5(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
B.d.a8(f)
w=g.w
v=w.a
u=w.b
switch(d){case"stairs":for(w=u*0.045,t=v*0.5,s=0;s<7;++s){r=(s&1)===0
q=v*(r?0.08:0.42)
p=u*(0.2+s*0.1)
o=new C.v(q,p)
n=q+t
m=p+w
l=new C.v(n,m)
k=g.XE(new C.v((q+n)/2,(p+m)/2))
p=r?o:new C.v(n,p)
r=r?l:new C.v(q,m)
f.push(new A.Ea(p,r,k,new F.mI(1,B.o.J(k*29,360),0.6,1).iQ()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.v(v*(0.1+i*0.16+r),w)
k=g.XE(h)
f.push(new A.Ea(h,h,k,new F.mI(1,B.o.J(k*29,360),0.6,1).iQ()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.v(v*(0.08+w.ah()*0.84),u*(0.2+w.ah()*0.65))
k=g.XE(h)
f.push(new A.Ea(h,h,k,new F.mI(1,B.o.J(k*29,360),0.6,1).iQ()))}}},
Z(){this.a0()
this.kG()},
bXZ(d,e){var w,v=this.fB$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
A.kY(v,d.c+12,w,B.k.D(0.25+e/900,0.25,0.8))}},
kZ(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,B.at))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new A.aan(new C.v(a2.w.a*(0.2+v.ah()*0.6),6),new C.v((v.ah()-0.5)*40,0),new F.mI(1,v.ah()*360,0.5,1).iQ()))}if(u>3)a2.as=0
for(v=w.length,u=a2.e,t=a3/2,s=900*t,r=0;r<w.length;w.length===v||(0,C.J)(w),++r){q=w[r]
for(p=0;p<2;++p){o=q.b
n=o.a+0
o=o.b+s
m=q.b=new C.v(n,o)
l=q.a
k=l.a+n*t
l=l.b+o*t
j=q.a=new C.v(k,l)
if(k<7){m=q.a=new C.v(7,l)
o=q.b=new C.v(-n*0.6,o)
n=m}else{n=j
o=m}m=a2.w.a-7
if(n.a>m){q.a=new C.v(m,n.b)
q.b=new C.v(-o.a*0.6,o.b)}for(o=u.length,i=0;i<u.length;u.length===o||(0,C.J)(u),++i){h=u[i]
g=h.a
n=h.b
m=g.a
l=n.a
k=m-l
j=g.b
n=n.b
f=j-n
if(Math.sqrt(k*k+f*f)>4){l-=m
n-=j
k=q.a
e=B.k.D(((k.a-m)*l+(k.b-j)*n)/(l*l+n*n),0,1)
g=new C.v(m+l*e,j+n*e)
d=4}else d=10
n=q.a
m=g.a
l=n.a-m
k=g.b
n=n.b-k
a0=Math.sqrt(l*l+n*n)
j=7+d
if(a0<j&&a0>0.001){l/=a0
n/=a0
q.a=new C.v(m+l*j,k+n*j)
j=q.b
a1=j.a*l+j.b*n
if(a1<0){a2.bXZ(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.v(m.a-l*k,m.b-n*k)}}}}}B.d.bk(w,new A.e0N(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aF(p,p,p,p,C.U(q.ay?B.np:L.qh,B.ak,p,p,p,21),p,p,p,new A.e0C(q),p,p,p,p,"Sound",p),C.aF(p,p,p,p,D.lY,p,p,p,new A.e0D(q,d),p,p,p,p,"Share",p)],o),m=C.co(new A.e0E(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cG5[w]
l.push(new A.dv(v.b,q.x===v.a,new A.e0F(q,v),v.c,B.b8,p))}u=C.a([],o)
for(t=J.aW(D.AF.ge9(D.AF));t.C();){s=t.gT(t)
u.push(new A.dv(s,q.y===s,new A.e0G(q,s),p,B.b8,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.asr[w]
t.push(new A.dv(r.b,q.z===r.a,new A.e0H(q,r),p,B.b8,p))}s=q.Q
return A.jd(B.b8,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.u(C.a([new A.eD(l,"TOOL",p),new A.eD(u,"SCALE",p),new A.eD(t,"SOUND",p),A.ho(B.b8,B.k.ab(s,1)+"/s","Marbles",4,0.3,new A.e0I(q),s),new A.eD(C.a([new A.ff(D.bqb,"Stairs",new A.e0J(q),B.b8,p),new A.ff(Aa.KT,"Pinball",new A.e0K(q),B.c,p),new A.ff(B.lS,"Random",new A.e0L(q),B.c,p),new A.ff(D.wI,"Clear",new A.e0M(q),B.cJ,p)],o),p,p)],o),B.m,p,B.e,B.R,0,B.p))}}
A.bdw.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.a1()
w=C.T()
w.saz(D.bFJ.aB(0,new C.af(0,0,a0,a1)))
a2.bp(new C.af(0,0,a0,a1),w)
for(a0=e.b,a1=a0.length,w=a2.a,v=x.O,u=e.f,t=0;t<a0.length;a0.length===a1||(0,C.J)(a0),++t){s=a0[t]
r=B.k.D(1-(u-s.e)/280,0,1)
q=s.a
p=s.b
o=q.a
n=p.a
m=o-n
l=q.b
p=p.b
k=l-p
j=8*r
i=s.d
h=0.5*r
if(Math.sqrt(m*m+k*k)>4){q=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
q.b=B.aj
q.d=B.bZ
q.c=12+j
q.r=i.j(0.2+h).gt(0)
q.z=B.jf
g=q.M()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
q.b=B.aj
q.d=B.bZ
q.c=6
q.r=C.aq(i,B.c,r*0.7).gt(0)
g=q.M()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
p.r=i.j(0.25+h).gt(0)
p.z=B.jf
g=p.M()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
p=C.aq(i,B.x,0.4)
p.toString
j.saz(new C.bT(N.qT,0.5,B.w,d,0,C.a([B.c,i,p],v),d,d).aB(0,C.c1(q,9)))
g=j.M()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.T()
u.c=5
u.d=B.bZ
u.r=B.aA.gt(0)
a2.bU(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.J)(a0),++t){f=a0[t]
u=f.a
q=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
p=f.c
q.r=p.j(0.3).gt(0)
q.z=B.qs
g=q.M()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
q.saz(new C.bT(N.qT,0.5,B.w,d,0,C.a([B.c,p],v),d,d).aB(0,C.c1(f.a,7)))
g=q.M()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
ao(d){return!0}}
A.aaS.prototype={}
A.TD.prototype={
S(){var w=C.a([],x.gB)
return new A.aAH(new C.cn(null,x.A),w,B.cz,B.at,$,B.bs,0,C.a([],x.X),null,null)}}
A.aAH.prototype={
gaT6(){var w=this.w
return new C.v(w.a/2,w.b/2)},
aug(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
avp(d){var w=D.AF.h(0,this.y),v=5-d,u=w.length
return w[B.o.J(v,u)]+12*B.o.eb(v,u)},
Z(){this.a0()
this.kG()},
aLI(){var w,v,u,t,s=this.e
B.d.a8(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new A.aaS(w,B.k.J(t/v+u,1)))}},
kZ(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,B.at))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fB$
if(p.Q){r=p.z
s=p.avp(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
A.kY(r,s+12,q,0.55)}}}},
bY_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aD(0,h.gaT6()),e=f.gcr()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.aug(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=B.k.J((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
s=h.e
s=C.a(s.slice(0),C.S(s))
r=s.length
q=d.a
p=d.b
o=0
for(;o<s.length;s.length===r||(0,C.J)(s),++o){n=s[o]
m=n.a
if(m!==g.a)continue
l=n.b*2*3.141592653589793-1.5707963267948966
k=h.w
j=Math.cos(l)
i=Math.sin(l)
m=h.aug(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new A.e3O(h,n).$0()
h.c.e1()
return}}h.n(new A.e3P(g,h,t))
if(h.Q)A.kY(h.z,h.avp(g.a)+12,700,0.5)
C.eL()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aF(q,q,q,q,C.U(r.Q?B.np:L.qh,B.ak,q,q,q,21),q,q,q,new A.e3W(r),q,q,q,q,"Sound",q),C.aF(q,q,q,q,D.lY,q,q,q,new A.e3X(r,d),q,q,q,q,"Share",q)],p),n=C.co(new A.e3Y(r)),m=r.x
m=A.ho(B.bD,""+B.k.U(m),"Tempo",180,40,new A.e3Z(r),m)
w=C.a([],p)
for(v=J.aW(D.AF.ge9(D.AF));v.C();){u=v.gT(v)
w.push(new A.dv(u,r.y===u,new A.e4_(r,u),q,B.bD,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.asr[t]
v.push(new A.dv(s.b,r.z===s.a,new A.e40(r,s),q,B.bD,q))}return A.jd(B.bD,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.u(C.a([m,new A.eD(w,"SCALE",q),new A.eD(v,"SOUND",q),new A.eD(C.a([new A.ff(B.dP,"Demo",new A.e41(r),B.bD,q),new A.ff(B.lS,"Random",new A.e42(r),B.c,q),new A.ff(D.wI,"Clear",new A.e43(r),B.cJ,q)],p),q,q)],p),B.m,q,B.e,B.R,0,B.p))}}
A.bgU.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.a1()
w=C.T()
w.r=D.Tn.gt(0)
a5.bp(new C.af(0,0,0+a6.a,0+a6.b),w)
w=a3.d
v=a3.e
u=v.$1(w-1)+14
t=a3.c
s=t.aD(0,new C.v(0,u))
r=C.T()
r.c=2
q=x.O
p=t.a
o=p-1
n=t.b
m=n-u
r.saz(new C.a7(B.bc,B.b4,B.w,C.a([B.c.j(0.05),B.c.j(0.5)],q),a4,a4).aB(0,new C.af(o,m,o+2,m+u)))
a5.bU(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new F.mI(1,B.k.J(s.$1(l)*23,360),0.55,1).iQ()
o=v.$1(l)
m=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
m.b=B.aj
m.c=1.6
m.r=k.j(0.35).gt(0)
j=m.M()
r.drawCircle(p,n,o,j)
j.delete()
o=D.cW1[B.o.J(B.o.J(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.mr(new C.eE(o,a4,a4,B.cT,a4,a4,a4,a4,a4,a4,new C.F(!0,m,a4,a4,a4,a4,9.5,B.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),B.a5,B.cp,new C.km(1),a4,a4,a4,a4,B.co,a4)
i.fK()
o=i.b.c
m=J.fvc(v.$1(l))
h=i.b.a.c
i.a6(a5,new C.v(p+-o/2,n+(m-h.gbd(h)-2)))}w=C.T()
w.saz(D.dQf.aB(0,C.c1(t,16)))
a5.aw(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.J)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new F.mI(1,B.k.J(s.$1(a0)*23,360),0.55,1).iQ()
a2=B.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fvc(v.$1(a0))
a0=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
a0.b=B.aj
a0.c=3*a2
a0.r=k.j(a2).gt(0)
j=a0.M()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
d.r=k.j(0.35).gt(0)
d.z=B.jf
j=d.M()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
d.saz(new C.bT(N.qT,0.5,B.w,a4,0,C.a([B.c,k],q),a4,a4).aB(0,C.c1(new C.v(h,a1),8.5)))
j=d.M()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
ao(d){return!0}}
A.aIq.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bsw.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bos()}}
A.aIr.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bsx.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bot()}}
A.ry.prototype={}
A.b5t.prototype={}
A.TC.prototype={
S(){var w=x.S
return new A.aAG(C.a([],x.aq),C.Q(w,w),C.aY(w),D.ecG)}}
A.aAG.prototype={
Z(){this.a0()
A.yl("molecule_maker").bC(new A.e3N(this),x.P)},
afM(d){var w={}
w.a=0
this.f.bD(0,new A.e3z(w,d))
return w.a},
gaTc(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)t.push(w[u].a)
return A.hDJ(t,this.f,D.ZZ[this.d])},
bYg(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.f9()
w.e2(t*7+3)
t=v.y
v.n(new A.e3t(v,e,t.a,w,t.b))
A.v3("pop",u.length,90,0.35)},
asG(d){return this.n(new A.e3u(this))},
aTd(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
bYm(d){this.n(new A.e3y(this,this.aTd(d)))},
cdR(){var w=this.r
if(w==null)return
this.n(new A.e3x(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.ZZ[k.d],h=k.gaTc()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.uK.h(0,w[u].a).a-k.afM(u)
w=i.c
w=w.gdH(w)
t=w.di(w,new A.e3H(),x.N).aH(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?B.bq:B.hS
r=x.p
s=C.u(C.a([new C.B(B.fD,A.eV2(w,s,h&&k.d<12?new A.ff(B.jD,"Next",new A.e3I(k),B.bq,j):j),j),C.C(C.co(new A.e3J(k)),1)],r),B.m,j,B.e,B.j,0,B.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.q(0,u)?"\u2713 ":""
w.push(new A.dv(p+D.ZZ[u].b,k.d===u,new A.e3K(k,u),j,B.hS,j))}q=C.a([],r)
for(p=D.uK.gdH(D.uK),p=p.gaf(p);p.C();){o=p.gT(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?B.fJ:m.b
q.push(new A.dv(n+" \xb7 "+m.a,!1,new A.e3L(k,o),j,l,j))}return A.jd(B.hS,B.fQ,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.u(C.a([new A.eD(w,"GOAL",j),new A.eD(q,"ADD",j),new A.eD(C.a([new A.dv("Remove selected atom",!1,k.gcdQ(),B.e4,B.cJ,j),new A.dv("Clear all",!1,k.gbYh(k),B.jE,B.aM,j)],r),j,j)],r),B.m,j,B.e,B.R,0,B.p))}}
A.bec.prototype={
a6(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=B.o.J(t*37,10)
r=B.o.J(t*53,10)
$.a1()
q=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
q.r=B.hS.j(0.03).gt(0)
p=q.M()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bD(0,new A.dg2(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.uK.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.c1(j,26)
if(q===t){$.a1()
h=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
h.r=B.aM.j(0.4).gt(0)
h.z=B.jf
p=h.M()
u.drawCircle(j.a,j.b,34,p)
p.delete()}j=m.b
$.a1()
h=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
g=l.b
f=C.aq(g,B.c,0.5)
f.toString
e=C.aq(g,B.x,0.5)
e.toString
h.saz(new C.bT(B.HA,0.5,B.w,a3,0,C.a([f,g,e],r),G.aqT,a3).aB(0,i))
p=h.M()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?B.aG:B.c
d=new C.mr(new C.eE(n,a3,a3,B.cT,a3,a3,a3,a3,a3,a3,new C.F(!0,j,a3,a3,a3,a3,19,B.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),B.a5,B.cp,new C.km(1),a3,a3,a3,a3,B.co,a3)
d.fK()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a6(a4,new C.v(n.a-h/2,n.b-j.gbd(j)/2))
n=k===0
a0=n?B.br:B.aZ
j=m.b
h=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
h.r=a0.gt(0)
p=h.M()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.t(k)
a1=new C.mr(new C.eE(n,a3,a3,B.cT,a3,a3,a3,a3,a3,a3,B.or),B.a5,B.cp,new C.km(1),a3,a3,a3,a3,B.co,a3)
a1.fK()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a6(a4,new C.v(n.a+(20-h/2),n.b+(-20-j.gbd(j)/2)))}if(n===0){d=C.jF(a3,a3,a3,a3,D.el5,B.a5,B.cp,a3,B.f3,B.co)
d.fK()
d.a6(a4,new C.v((w-d.b.c)/2,v/2))}},
ao(d){return!0}}
A.SA.prototype={
S(){var w=x.s
return new A.bf5(C.a([],w),C.a([],w))}}
A.bf5.prototype={
Z(){this.a0()
this.as7()
A.yl("dna_lab").bC(new A.dFg(this),x.P)},
gaYa(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a_V.h(0,w[u])
t.toString
s.push(t)}return B.d.fJ(s)},
ga6g(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(B.a.al(this.gaYa(),w,v))}return u},
as7(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.f9()
k.e2(l.e*31+l.d*7+C.Do(new C.N(Date.now(),0,!1)))
w=new A.dF5(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.ma(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=B.a.al(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a_V.h(0,p[n])
m.toString
r.push(m)}t.push(B.d.fJ(r))}if(!B.d.bc(t,new A.dF4()))break}l.f=v
B.d.a8(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.aW_()},
aW_(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=A.fDI(s.ga6g()[r])
v=J.dE(D.AG.ge9(D.AG),new A.dF6(w)).dz(0)
u=new C.f9()
u.e2(r+s.e)
B.d.fM(v,u)
u=C.a([w],x.s)
B.d.v(u,C.dg(v,0,C.dK(3,"count",x.S),C.S(v).c))
t=new C.f9()
t.e2(s.e*3+r)
B.d.fM(u,t)
s.z=u},
aTb(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.d0w.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a_V.h(0,w.f[v])
u.toString
break A}u=A.fDI(w.ga6g()[v])
break A}w.n(new A.dF3(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new A.dFe(),e=new A.dF9(),d=h.d===2?h.gaYa():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,O.m9,g,g,g),B.aw],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?B.cd.j(0.18):B.K
q=new C.b2(10,10)
p=new C.ay(t.length===s?B.cd:B.bG,1,B.r,-1)
o=C.a([],a0)
for(n=h.ga6g()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cF(B.b_,B.e,B.R,B.m,g,B.p,g,0,o,g),B.i,g,g,new C.o(r,g,new C.c2(p,p,p,p),new C.bx(q,q,q,q),g,g,B.n),g,g,g,D.bd5,B.ek,g,g,g))}v.push(C.cf(B.bI,u,B.by,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.cf(B.bI,u,B.by,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a8(34,g,new C.cw(B.C,g,g,C.U(A7.L_,j<t.length?B.aA:B.bG,g,g,g,14),g),g))
B.d.v(v,C.a([new C.B(B.Js,C.cf(B.bI,u,B.by,0,0),g)],a0))}v.push(B.ar)
v.push(C.d(w,g,g,g,g,g,g,O.m9,g,g,g))
v.push(B.aw)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?B.bq.j(0.25):B.du
q=new C.b2(12,12)
o=j<t.length
p=new C.ay(o?B.bq:B.be,1,B.r,-1)
if(o){o=D.AG.h(0,t[j])
o.toString}else o="?"
n=j<t.length?B.c:B.c1
u.push(C.p(g,new C.w(o,g,new C.F(!0,n,g,g,g,g,g,B.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),B.i,g,g,new C.o(r,g,new C.c2(p,p,p,p),new C.bx(q,q,q,q),g,g,B.n),g,g,g,g,B.eh,g,g,g))}v.push(C.cf(B.bI,u,B.by,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",B.c,!0)
u.push(r)}v.push(C.cf(B.bI,u,B.by,0,0))}v.push(B.aC)
u=h.w
if(u.length!==0){t=h.r.length
v.push(A.eV2(u,t>=(h.d===2?3:9)?B.bq:B.cd,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(A.eV2(u,B.cd,g))}v.push(B.U)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,E.QK,g,g,g))
v=C.ce(C.u(v,B.F,g,B.e,B.j,0,B.p),B.q,g,B.z,g,B.bC,g,g,B.af)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new A.dv(D.cLn[j],h.d===j,new A.dFa(h,j),g,B.cd,g))
u=C.a([new A.eD(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bE(B.a1,g,g,new A.ff(B.jE,"New strand",new A.dFb(h),B.bq,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.J)(t),++l){i=t[l]
q=D.AG.h(0,i)
q.toString
a0.push(new A.ff(D.X_,q,new A.dFc(h,i),B.cd,g))}u.push(C.cf(B.bI,a0,B.by,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.apO:D.cvW
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.b2(14,14)
a0.push(C.aJ(g,C.p(B.C,new C.w(k,g,D.ell,g,g,g,g,g,g,g,g,g),B.i,g,g,new C.o(e.$1(k),g,g,new C.bx(q,q,q,q),g,g,B.n),g,54,g,g,g,g,g,64),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.dFd(h,k),g,g,g,g,g,g,!1,B.ae))}u.push(C.A(a0,B.m,g,B.t3,B.j,0,g,g))}return A.jd(B.cd,B.fQ,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.u(u,B.m,g,B.e,B.R,0,B.p))}}
A.SQ.prototype={
S(){return new A.azO(B.bs,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
A.azO.prototype={
Z(){var w,v=this
v.a0()
w=v.qL(v.gbYi())
w.ki(0)
v.d!==$&&C.aO()
v.d=w
A.yl("ecosystem").bC(new A.dI5(v),x.P)},
p(){var w=this.d
w===$&&C.c()
w.p()
this.bnS()},
gaHL(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
bYj(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
m.e=d
if(l<=0)return
for(w=l*1.5/4,v=x.n,u=0;u<4;++u){t=m.f
s=m.x
r=m.y
q=m.z
p=t[0]
o=t[1]
n=t[2]
m.f=C.a([B.k.D(p+(s*(100-p)*0.05-0.0016*o*p)*w,0,100),B.k.D(o+(0.9*r*o*p/(p+40)-0.019*q*o*n-0.35*o)*w,0,400),B.k.D(n+(0.01*q*o*n-0.4*n)*w,0,200)],v)}w=m.w+=l
v=m.r
if(v.length===0||w-B.d.gai(v)[3]>0.25){w=C.z(m.f,x.i)
w.push(m.w)
v.push(w)
if(v.length>160)B.d.ct(v,0)}if(m.gaHL()){w=m.Q+=l
if(w>m.as){m.as=w
if(B.o.J(B.k.bK(w),5)===0)A.v0("ecosystem",C.D(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.n(new A.dHT())},
a7p(d){this.n(new A.dHS(this,d))
A.v3("pop",3,120,0.4)},
bYl(){return this.n(new A.dHU(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.u(C.a([new C.B(D.UN,A.eV2(r,t.gaHL()?B.bq:B.cJ,s),s),C.C(new C.B(D.bdA,C.bw(C.m(18),C.b1(s,s,s,new A.b9A(t.f,t.r,t.w,s),B.fx),B.ap),s),1),new C.B(B.fh,C.d("Alive together: "+B.k.U(t.Q)+" s     Best: "+B.k.U(t.as)+" s",s,s,s,s,s,s,D.es0,s,s,s),s)],q),B.m,s,B.e,B.j,0,B.p)
w=t.x
w=A.ho(B.bq,B.k.ab(w,1)+"\xd7","Grass growth",2,0.2,new A.dHY(t),w)
v=t.y
v=A.ho(B.cg,B.k.ab(v,1)+"\xd7","Rabbit breeding",2,0.3,new A.dHZ(t),v)
u=t.z
return A.jd(B.bq,B.fQ,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.u(C.a([w,v,A.ho(B.dg,B.k.ab(u,1)+"\xd7","Fox hunting",2,0.3,new A.dI_(t),u),new A.eD(C.a([new A.dv("Drought",!1,new A.dI0(t),B.x5,B.aM,s),new A.dv("Disease",!1,new A.dI1(t),D.bq2,B.bD,s),new A.dv("+ Foxes",!1,new A.dI2(t),s,B.dg,s),new A.dv("+ Rabbits",!1,new A.dI3(t),s,B.cg,s),new A.dv("Reset",!1,t.gbYk(),B.jE,B.b3,s)],q),s,s)],q),B.m,s,B.e,B.R,0,B.p))}}
A.b9A.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.a1()
w=C.T()
w.saz(D.bDX.aB(0,new C.af(0,0,d,a0)))
a1.bp(new C.af(0,0,d,a0),w)
w=h.b
a0=C.aq(B.r5,B.br,B.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.T()
t.r=a0.gt(0)
a1.bp(new C.af(0,v,d,v+u),t)
s=B.k.U(w[0]*0.9)
r=new C.f9()
r.e2(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.ah()*e
o=f*(0.6+0.4*r.ah())
t=Math.sin(a0+q)
n=r.ah()
m=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
m.r=B.h7.gt(0)
m.c=1.6
l=m.M()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new A.cXH(h,a2,f,a1)
k.$5(Math.min(B.k.U(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(B.k.U(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.af(10,a0,e,u)
t=C.T()
t.r=D.b2T.gt(0)
a1.bp(new C.af(0,f,d,f+g),t)
i=C.T()
i.r=B.du.gt(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.M()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new A.cXJ(h,j,a1)
g.$3(0,100,B.br)
g.$3(1,120,B.cg)
g.$3(2,24,B.dg)
g=new A.cXI(a1,j)
g.$3("Grass "+B.k.U(w[0]),B.br,16)
g.$3("Rabbits "+B.k.U(w[1]),B.cg,102)
g.$3("Foxes "+B.k.U(w[2]),B.dg,200)},
ao(d){return!0}}
A.aHR.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.aO8.prototype={
gu4(){return B.d.cO(this.a,0,new A.bBf())}}
A.S5.prototype={
S(){var w=x.S
return new A.beN(A.hAR(),C.bS(5,0,!1,w),C.aY(w),B.bs,null,null)}}
A.beN.prototype={
gv_(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return B.d.cO(t,0,new A.dtx())},
Z(){var w,v=this
v.a0()
w=v.qL(new A.dtK(v))
w.ki(0)
v.x!==$&&C.aO()
v.x=w
A.yl("balance_lab").bC(new A.dtL(v),x.P)},
p(){var w=this.x
w===$&&C.c()
w.p()
this.bnw()},
cnP(d){var w,v=this
v.n(new A.dty(v,d))
A.v3("click",v.f[d],60,0.4)
if(v.gv_()===v.d[v.e].gu4()&&v.r.G(0,v.e)){A.v3("zap",10,260,0.5)
w=v.r
w=C.z(w,C.a2(w).k("cj.E"))
A.v0("balance_lab",C.D(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.I(k,new A.dtD(),C.S(k).k("I<1,n>")).aH(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=B.d.aH(k," + ")
if(o.gv_()===m[o.e].gu4())s="\u2696\ufe0f Balanced! "+m[o.e].gu4()+" = "+o.gv_()+". The torques are equal, so the seesaw stays level."
else s=o.gv_()>m[o.e].gu4()?"The right side is too strong ("+o.gv_()+" vs "+m[o.e].gu4()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].gu4()+" vs "+o.gv_()+"). Add weight to the right, or place it further from the middle."
k=o.gv_()===m[o.e].gu4()?B.bq:B.aM
k=A.bvr(s,k,o.gv_()===m[o.e].gu4()&&o.e<m.length-1?new A.ff(B.jD,"Next",new A.dtE(o),B.bq,n):n)
w=C.C(C.co(new A.dtF(o,l)),1)
u=j.length===0?"0":j
u=C.C(C.d("Left torque\n"+u+" = "+m[o.e].gu4(),n,n,n,n,n,n,D.aK_,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.u(C.a([new C.B(D.UN,k,n),w,new C.B(D.acj,C.A(C.a([u,C.C(C.d("Right torque\n"+r+" = "+o.gv_(),n,n,n,n,n,n,D.aK_,B.dN,n,n),1)],q),B.m,n,B.e,B.j,0,n,n),n)],q),B.m,n,B.e,B.j,0,B.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.q(0,v)?"\u2713 ":""
p=v+1
u.push(new A.dv(w+p,o.e===v,new A.dtG(o,v),n,B.aM,n))}return A.jd(B.aM,B.fQ,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.u(C.a([new A.eD(u,"LEVEL",n),new A.eD(C.a([new A.dv("Clear right side",!1,new A.dtH(o),B.jE,B.cJ,n)],q),n,n)],q),B.m,n,B.e,B.R,0,B.p))}}
A.b5F.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.b_($.a1().r,B.au,null,null,C.a([],x.v))
i.N(new C.bj(h,f))
w=f+70
i.N(new C.aw(h-30,w))
i.N(new C.aw(h+30,w))
i.N(new C.bX())
v=C.T()
v.r=B.ai.gt(0)
d.b4(i,v)
v=h-120
i=C.T()
i.r=B.aI.gt(0)
d.bp(new C.af(v,w,v+240,w+8),i)
i=d.a
J.bP(i.save())
i.translate(h,f)
d.ra(0,j.b)
u=g*5.8
t=C.bZ(new C.af(-u,-9,u,9),B.hZ)
w=C.T()
w.saz(D.bGp.aB(0,new C.af(t.a,t.b,t.c,t.d)))
d.bi(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.a1()
v=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
v.r=B.hT.gt(0)
v.c=1.5
r=v.M()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
A.f6e(d,""+Math.abs(s),new C.v(w,22),B.c1,10)}q=new A.cwL(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.J)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,B.b3)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],B.cd)
if(w[s]===0){l=C.bZ(C.dy(new C.v(m,-22),22,v),B.hZ)
$.a1()
k=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
k.b=B.aj
k.c=1.4
k.r=B.be.gt(0)
r=k.M()
i.drawRRect(C.fL(l),r)
r.delete()
A.f6e(d,"+",new C.v(m,-22),B.c1,14)}}i.restore()
$.a1()
i=C.T()
i.r=(j.e?B.bq:B.aJ).gt(0)
d.aw(new C.v(h,f),7,i)},
ao(d){return!0},
gjs(){return this.e}}
A.T3.prototype={
S(){return new A.bfh(C.a([16,32,12,24],x.t),C.aY(x.S),B.bs,null,null)}}
A.bfh.prototype={
gZ3(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gaaF(){var w=this.gZ3(),v=this.r,u=D.asc[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.d7(this.d,x.S).a<4)
else w=!1
return w},
Z(){var w,v=this
v.a0()
w=v.qL(new A.dLT(v))
w.ki(0)
v.x!==$&&C.aO()
v.x=w
A.yl("gear_lab").bC(new A.dLU(v),x.P)},
p(){var w=this.x
w===$&&C.c()
w.p()
this.bo_()},
bYn(d,e){var w,v=this
v.n(new A.dLJ(v,d,e))
if(v.gaaF()&&v.w.G(0,v.r)){A.v3("zap",8,240,0.45)
w=v.w
w=C.z(w,C.a2(w).k("cj.E"))
A.v0("gear_lab",C.D(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.gZ3(),n=r.gZ3(),m=D.asc[r.r].a
m=r.gaaF()?"\u2705 Done! Ratio "+B.k.ab(r.gZ3(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gaaF()?B.bq:B.dg
v=r.d
u=x.p
n=C.u(C.a([new C.B(D.UN,A.bvr(m,w,r.gaaF()&&r.r<7?new A.ff(B.jD,"Next",new A.dLN(r),B.bq,q):q),q),C.C(C.b1(q,q,q,new A.bb1(v,r.f,q),B.fx),1),new C.B(D.acj,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+B.k.ab(r.gZ3(),2)+"   \xb7   Output "+B.k.ab(p*o,1)+" rpm   \xb7   Force \xd7"+B.k.ab(1/n,2),q,q,q,q,q,q,P.a3z,B.L,q,q),q)],u),B.m,q,B.e,B.j,0,B.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.q(0,t)?"\u2713 ":""
s=t+1
o.push(new A.dv(m+s,r.r===t,new A.dLO(r,t),q,B.dg,q))}p=r.e
u=C.a([new A.eD(o,"GOAL",q),A.ho(B.b3,""+B.k.U(p)+" rpm","Input speed",120,10,new A.dLP(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new A.ast("Gear "+s+" teeth",p,new A.dLQ(r,t),8,40,D.cTO[t],""+p,q))}return A.jd(B.dg,B.fQ,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.u(u,B.m,q,B.e,B.R,0,B.p))}}
A.bb1.prototype={
bI1(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.a1(),j=C.a([],x.v),i=new C.b_(k.r,B.au,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.dRa,D.dU_,D.e1d,D.dXz],s=v===0,r=0;r<4;++r){q=t[r]
p=q.a
o=u+p*h
n=e+q.b
m=k+Math.cos(o)*n
l=w+Math.sin(o)*n
if(s&&p===0){p=new C.bj(m,l)
j.push(p)
m=i.f
if(m!=null)p.bI(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}else{p=new C.aw(m,l)
j.push(p)
m=i.f
if(m!=null)p.bI(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}}}i.N(new C.bX())
return i},
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.n)
for(w=this.b,v=0;v<4;++v)g.push(w[v]*2.2)
u=g[0]
t=u+g[1]+6
s=g[2]
r=g[3]
q=t+s+r+6
p=-u-6
o=q+r+6
n=B.d.fq(g,B.pK)
m=-n-6
l=n+6
r=e.a
u=e.b
k=Math.min(r/(o-p),u/(l-m))*0.96
s=d.a
J.bP(s.save())
s.translate(r/2-(p+o)/2*k,u/2-(m+l)/2*k)
d.bV(0,k)
j=this.c
u=w[0]
r=w[1]
i=-j*u/r+3.141592653589793/r
r=w[2]
u=w[3]
h=new A.d3z(this,d)
h.$6$back(new C.v(t,0),g[2],r,i,B.dB,!0)
h.$5(new C.v(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,B.dp)
h.$5(new C.v(0,0),g[0],w[0],j,B.mj)
h.$5(new C.v(t,0),g[1],w[1],i,B.h8)
s.restore()
s=new A.d3A(d,e,p,o,k)
s.$3("1 \xb7 input",0,B.b3)
s.$3("2+3 \xb7 shared axle",t,B.dg)
s.$3("4 \xb7 output",q,B.bq)},
ao(d){return!0}}
A.Se.prototype={
S(){var w=$.as()
return new A.bf_(new C.ao(new C.b9("Meet me at noon",B.aY,B.aL),w),new C.ao(new C.b9("LEMON",B.aY,B.aL),w),C.aY(x.S))}}
A.bf_.prototype={
Z(){this.a0()
this.aS8()
A.yl("cipher_lab").bC(new A.dxJ(this),x.P)},
p(){var w=this.d,v=$.as()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
aS8(){this.y=1+B.cz.aE(25)
this.z=0},
ga6G(){var w=this
return A.a_l(A.a_l(D.F2[w.x],w.y),-w.z)===D.F2[w.x]},
gatw(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=A.a_l(u,v.w)
break A}if(1===t){w=new C.I(C.a(A.a_l(u,0).split(""),x.s),new A.dxr(),x.dv).fJ(0)
break A}w=A.hN2(u,v.e.a.a)
break A}return w},
aNJ(d){var w,v,u,t,s,r=null,q=C.bS(26,0,!1,x.S)
for(w=new C.cW(d.toUpperCase()),v=x.F,w=new C.bR(w,w.gH(0),v.k("bR<bO.E>")),v=v.k("bO.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,B.d.fq(q,B.yF))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.b2(2,2)
v.push(new C.bI(1,B.bt,C.u(C.a([C.p(r,r,B.i,r,r,new C.o(B.b3,r,r,new C.bx(u,u,u,u),r,r,B.n),r,46*q[s]/t,r,B.JK,r,r,r,r),new C.w(C.ju(65+s),r,D.etH,r,r,r,r,r,r,r,r,r)],w),B.m,r,B.m_,B.j,0,B.p),r))}return new C.a8(r,70,C.A(v,B.dD,r,B.e,B.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=B.c.j(0.07)
v=x.p
w=C.a([C.aI(o,B.T,!1,o,!0,B.q,o,C.aL(),p.d,o,o,o,o,o,2,C.bn(o,new C.b0(4,C.m(14),B.V),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l3,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ad,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new A.dxA(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eod,!0,B.a5,o,B.am,o,o,o,o)],v)
if(p.r===2){u=B.c.j(0.07)
B.d.v(w,C.a([B.U,C.aI(o,B.T,!1,o,!0,B.q,o,C.aL(),p.e,o,o,o,o,o,2,C.bn(o,new C.b0(4,C.m(14),B.V),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l3,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ad,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new A.dxB(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.iI,!0,B.a5,o,B.am,o,o,o,o)],v))}w.push(B.aC)
w.push(D.eSm)
w.push(B.aw)
v=B.b3.j(0.12)
u=C.m(14)
t=C.H(B.b3.j(0.4),B.r,1)
w.push(C.p(o,C.yD(p.gatw().length===0?"\u2026":p.gatw(),D.esL,o),B.i,o,o,new C.o(v,o,t,u,o,o,B.n),o,o,o,o,B.bC,o,o,o))
w.push(B.ac)
w.push(A.bvr(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],B.b3,o))
w.push(B.ac)
w.push(D.eAs)
w.push(B.aw)
w.push(p.aNJ(p.gatw()))
w.push(B.aw)
w.push(D.eCJ)
s=C.cX(w,o,B.bC,o,o,B.af,!1)}else{w=A.bvr("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",B.aM,o)
v=C.d(A.a_l(D.F2[p.x],p.y),o,o,o,o,o,o,D.etg,o,o,o)
u=(p.ga6G()?B.bq:B.b3).j(0.14)
t=C.m(14)
r=C.H((p.ga6G()?B.bq:B.b3).j(0.5),B.r,1)
t=C.a([w,B.ac,D.eMz,v,B.U,D.eHo,C.p(o,C.d(A.a_l(A.a_l(D.F2[p.x],p.y),-p.z),o,o,o,o,o,o,D.euG,o,o,o),B.i,o,o,new C.o(u,o,r,t,o,o,B.n),o,o,o,o,B.bC,o,o,o),B.ac,p.aNJ(A.a_l(D.F2[p.x],p.y)),B.P],x.p)
if(p.ga6G())t.push(A.bvr("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",B.bq,new A.ff(B.jE,"Next",new A.dxC(p),B.bq,o)))
s=C.cX(t,o,B.bC,o,o,B.af,!1)}w=p.f
v=x.p
w=C.a([new A.eD(C.a([new A.dv("Make a secret",w===0,new A.dxD(p),B.iV,B.b3,o),new A.dv("Crack a code",w===1,new A.dxE(p),B.p2,B.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new A.dv(n[q],p.r===q,new A.dxF(p,q),o,B.b3,o))
v=C.a([new A.eD(u,o,o)],v)
if(p.r===0){u=p.w
v.push(A.ho(B.b3,""+u,"Shift",25,1,new A.dxG(p),u))}B.d.v(w,v)}else{v=p.z
w.push(A.ho(B.aM,""+v,"Shift back",25,0,new A.dxH(p),v))}return A.jd(B.b3,B.fQ,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.u(w,B.m,o,B.e,B.R,0,B.p))}}
A.aHw.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.aHZ.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.mO.prototype={}
A.v8.prototype={
aH0(d,e,f,g){var w=this
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
break}}}
A.a7I.prototype={}
A.a8M.prototype={}
A.a20.prototype={
b6z(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hd()?-1:1
v=t.ah()*3.141592653589793*2
u=f*(0.3+t.ah())
s.push(new A.a7I(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ah()*0.45));++r}},
bV6(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}B.d.bk(w,new A.bGB())},
agc(d,e,f,g){var w="p"+this.c++,v=new A.v8(w,e,f,g)
v.aH0(w,e,f,g)
this.a.push(v)
return v},
W(d,e){B.d.W(this.a,e)
B.d.bk(this.b,new A.bGL(e))},
a8(d){B.d.a8(this.a)
B.d.a8(this.b)},
cvo(d,e,f,g,h){return B.d.bc(this.b,new A.bGH(e,f,g,h))},
ayG(d,e,f,g){var w
if(d===f||this.cvo(0,d,e,f,g))return null
w=new A.a8M(d,e,f,g)
this.b.push(w)
return w},
b_x(d){switch(d.b){case"battery":return d.e
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
b_w(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
b8X(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
bYo(d){switch(d.b){case"bulb":return 10
case"motor":return 6
case"buzzer":return 25
case"heater":return 4
case"radio":return 30
case"tv":return 50
case"resistor":return d.r
case"pot":return 1+99*d.f}return 100},
a4M(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.d+=a1
d.bV6(a1)
d.w=Math.max(0,d.w-a1)
w=Math.min(a1*6,0.12)
for(v=d.a,u=v.length,t=a1*0.25,s=0;s<u;++s){r=v[s]
if(r.b==="crank")r.f=Math.max(0,r.f-t)}u=x.S
q=C.Q(x.N,u)
p=new A.bGN(q)
o=C.a([],x.t)
n=new A.bGM(o)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.J)(v),++s){r=v[s]
p.$2(r,0)
p.$2(r,1)}for(m=0;m<q.a;++m)o.push(m)
for(t=d.b,l=t.length,s=0;s<t.length;t.length===l||(0,C.J)(t),++s){k=t[s]
j=n.$1(p.$2(k.a,k.b))
i=n.$1(p.$2(k.c,k.d))
if(j!==i)o[j]=i}h=C.Q(u,u)
g=new A.bGP(h,n,p)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,C.J)(v),++s){r=v[s]
g.$2(r,0)
g.$2(r,1)}f=h.a
if(f===0)return
s=0
for(;;){if(!(s<t)){e=0
break}r=v[s]
u=r.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){e=g.$2(r,1)
break}++s}d.cl_(f,e,w,!0)
d.bF7(a1)},
cl_(b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=x.S,b3=C.Q(x.N,b2),b4=new A.bGD(b3),b5=C.a([],x.t)
for(w=b1.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
b4.$2(t,0)
b4.$2(t,1)}for(s=0;s<b3.a;++s)b5.push(s)
r=new A.bGC(b5)
for(v=b1.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.J)(v),++u){p=v[u]
o=r.$1(b4.$2(p.a,p.b))
n=r.$1(b4.$2(p.c,p.d))
if(o!==n)b5[o]=n}m=new A.bGF(C.Q(b2,b2),r,b4)
for(b2=w.length,u=0;u<w.length;w.length===b2||(0,C.J)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b2=x.i
l=C.bS(b6,0,!1,b2)
v=x.W
k=C.Q(v,b2)
j=C.Q(v,b2)
v=b1.x
i=0.3/b8
q=x.b
h=b6<0
g="Length must be a non-negative integer: "+b6
f=0
for(;;){if(!(f<(b9?10:1)))break
if(h)C.b7(C.dC(g,null))
e=C.a(new Array(b6),q)
for(d=0;d<b6;++d)e[d]=C.bS(b6,0,!1,b2)
a0=C.bS(b6,0,!1,b2)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.J)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/b1.b_w(t)
a4=b1.b_x(t)*a3}else{a5=t.x
a4=0
if(a5&&a2!=="capacitor")a3=1e-9
else if(a2==="switch")a3=t.w?100:1e-9
else if(a2==="fuse")a3=20
else if(a2==="led"){a2=v.h(0,t.a)
a6=a2===!0
a3=a6?0.06666666666666667:1e-9
a4=a6?a3*1.9:0}else if(a2==="capacitor"){a4=i*t.z
a3=a5?1e-9:i}else a3=1/b1.bYo(t)}k.m(0,t,a3)
j.m(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b6;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b1.bI0(e,a0,b7)
if(!b9)break
for(a1=w.length,a7=!1,u=0;u<w.length;w.length===a1||(0,C.J)(w),++u){t=w[u]
if(t.b!=="led")continue
a8=l[m.$2(t,0)]-l[m.$2(t,1)]
a2=t.a
a5=v.h(0,a2)
a9=a5===!0
b0=a9?a8>1.8:a8>1.95
if(b0!==a9){v.m(0,a2,b0)
a7=!0}}if(!a7)break;++f
b9=!0}for(b2=w.length,u=0;u<w.length;w.length===b2||(0,C.J)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
t.as=l[o]-l[n]
v=k.h(0,t)
if(v==null)v=0
q=t.as
h=j.h(0,t)
if(h==null)h=0
t.at=v*q-h
if(t.b==="capacitor"&&!t.x)t.z=t.as}return!0},
bI0(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return C.bS(d,0,!1,x.i)
u=C.a([],x.b)
for(t=a0.length,s=x.n,r=0;r<a0.length;a0.length===t||(0,C.J)(a0),++r){q=a0[r]
p=C.a([],s)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,C.J)(a0),++n){m=a0[n]
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
t[m]=t[m]-g*u[l][m]}}}f=C.bS(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bF7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.a,v=w.length,u=d*0.8,t=d*0.9,s=0;s<w.length;w.length===v||(0,C.J)(w),++s){r=w[s]
q=r.b
if((q==="battery"||q==="solar"||q==="crank"||q==="turbine")&&!r.x){p=k.b_x(r)/k.b_w(r)
if(p>0.3){o=Math.abs(r.at)
o=o>0.4&&o>p*0.55}else o=!1
n=r.Q
if(o){r.Q=n+t
k.b6z(r,3,260)
if(k.w<=0){k.w=0.35
o=k.e
if(o!=null)o.$2("short",r)}if(r.Q>1.4)k.Nx(r,"source")}else r.Q=Math.max(0,n-u)}o=r.as
n=r.at
m=Math.abs(o*n)
l=Math.abs(n)
switch(q){case"bulb":r.ax=r.x?0:B.k.D(m/0.9,0,1)
if(!r.x&&m>2.4)k.Nx(r,"bulb")
break
case"led":r.ax=r.x?0:B.k.D((l-0.001)/0.02,0,1)
if(!r.x&&l>0.045)k.Nx(r,"led")
break
case"heater":r.ax=B.k.D(m/14,0,1)
break
case"motor":q=B.k.D(l/0.5,0,1.6)
r.ax=q
r.y=r.y+q*d*24
break
case"buzzer":r.ax=B.k.D(l/0.05,0,1)
break
case"radio":r.ax=o>=2.5?1:0
break
case"tv":r.ax=o>=5.5?1:0
break
case"fuse":r.ax=r.x?0:B.k.D(l/1,0,1)
if(!r.x&&l>1)k.Nx(r,"fuse")
break
case"resistor":if(!r.x&&m>0.8)k.Nx(r,"resistor")
break
case"capacitor":r.ax=B.k.D(Math.abs(r.z)/9,0,1)
if(!r.x&&Math.abs(r.z)>13)k.Nx(r,"capacitor")
break
case"crank":r.y=r.y+r.f*d*22
break
case"turbine":r.y=r.y+r.f*d*14
break
case"solar":r.ax=r.f
break}}},
Nx(d,e){var w
d.x=!0
this.b6z(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bb0(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.z=0}this.x.a8(0)},
cEV(d){var w=this.a
return new C.a3(w,new A.bGK(d),C.S(w).k("a3<1>"))},
aBo(d){return this.cEV(d).bc(0,new A.bGJ(0.35))},
aAy(d,e){return B.d.bc(this.a,new A.bGI(e))}}
A.aOi.prototype={
a6(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2=b7.a,b3=b7.b,b4=0+b2,b5=0+b3
$.a1()
w=C.T()
w.r=D.a9y.gt(0)
b6.bp(new C.af(0,0,b4,b5),w)
v=C.T()
v.r=B.c.j(0.06).gt(0)
for(w=b6.a,u=12;u<b2;u+=24)for(t=12;t<b3;t+=24){s=v.M()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b0.b,q=r.b,p=q.length,o=b0.f,n=0;n<q.length;q.length===p||(0,C.J)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-42:42
l=l.d
i=m.c
h=i.c
g=m.d===0?-42:42
b0.csy(b6,new C.v(k*b2+j,l*b3),new C.v(h*b2+g,i.d*b3),m,m===o)}q=b0.d
if(q!=null&&b0.e!=null){f=A.h9h(q.a,q.b,b7)
q=b0.e
q.toString
$.a1()
p=C.T()
p.r=B.ak.gt(0)
p.c=3
p.d=B.bZ
b6.bU(f,q,p)}for(q=r.a,p=q.length,o=b0.c,l=b0.r,n=0;n<q.length;q.length===p||(0,C.J)(q),++n){e=q[n]
k=e.c*b2
j=e.d*b3
if(e.Q>0){i=Math.sin(r.d*30)
$.a1()
h=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
h.r=D.a8K.j(B.k.D(e.Q*0.45,0,0.6)).gt(0)
h.z=B.Fy
s=h.M()
w.drawCircle(k,j,46+14*i,s)
s.delete()}d=l.h(0,e.a)
if(d==null)d=1
J.bP(w.save())
w.translate(k,j)
k=B.k.D(B.oB.aq(0,B.k.D(d,0,1)),0.01,1.4)
w.scale(k,k)
b0.c6C(b6,e,e===o)
w.restore()
for(k=e.b,j=k!=="battery",i=k!=="solar",h=k!=="crank",g=k==="turbine",k=k==="led",a0=0;a0<2;++a0){a1=e.c
a2=a0===0
a3=a2?-42:42
a3=a1*b2+a3
a1=e.d*b3
$.a1()
a4=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
a4.r=D.a9y.gt(0)
s=a4.M()
w.drawCircle(a3,a1,7,s)
s.delete()
a4=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
a4.b=B.aj
a4.c=2.4
if(a2)a5=!j||!i||!h||g||k
else a5=!1
a4.r=(a5?B.cJ:B.ak).gt(0)
s=a4.M()
w.drawCircle(a3,a1,6,s)
s.delete()
if(a2)a2=!j||!i||!h||g||k
else a2=!1
if(a2){a6=new C.mr(new C.eE("+",b1,b1,B.cT,b1,b1,b1,b1,b1,b1,new C.F(!0,B.cJ,b1,b1,b1,b1,13,B.u,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1)),B.a5,B.cp,new C.km(1),b1,b1,b1,b1,B.co,b1)
a6.fK()
a6.a6(b6,new C.v(a3+-4,a1+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.J)(p),++n){a7=p[n]
l=a7.a*b2+a7.c
k=a7.b*b3+a7.d
a8=B.k.D(a7.r/0.8,0,1)
j=C.aq(D.b80,D.b8O,a8)
j.toString
i=a7.f
$.a1()
h=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
h.r=j.gt(0)
h.c=2.4
h.d=B.bZ
s=h.M()
w.drawLine.apply(w,[l,k,l-a7.e*0.035,k-i*0.035,s])
s.delete()
i=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
i.r=j.j(0.35*a8).gt(0)
i.z=B.Ol
s=i.M()
w.drawCircle(l,k,4.5*a8+1,s)
s.delete()}if(B.d.bc(q,new A.bC2())){a9=B.d.cO(q,0,new A.bC3())
$.a1()
b3=C.T()
b3.r=D.aZM.j(0.05+0.09*a9*(0.5+0.5*Math.sin(r.d*22))).gt(0)
b6.bp(new C.af(0,0,b4,b5),b3)
a6=C.jF(b1,b1,b1,b1,D.el0,B.a5,B.cp,b1,B.f3,B.co)
a6.a2e(b2-24)
a6.a6(b6,new C.v(12,10))}},
rP(d,e,f,g,h){var w=null,v=C.jF(w,w,w,w,C.dw(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),e),B.a5,B.cp,w,B.f3,B.co)
v.fK()
v.a6(d,f)},
csy(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.b_($.a1().r,B.au,null,null,C.a([],x.v))
d.N(new C.bj(a1.a,a1.b))
w=A.h1N(a1,a2,a3)
d.N(new C.dj(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.at)
t=a3.c
s=Math.abs(t.at)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(B.aM,D.a8K,B.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(B.b3,B.aM,B.k.D(r*1.2,0,1))
u.toString
o=u}else o=B.bu
u=C.T()
u.b=B.aj
u.c=a4?7:5
u.d=B.bZ
s=a4?B.c:o
u.r=s.j(q?0.4:0.55).gt(0)
a0.b4(d,u)
u=C.T()
u.b=B.aj
u.c=2.4
u.d=B.bZ
u.r=(a4?B.c:o).gt(0)
a0.b4(d,u)
if(q){n=new C.aht(new C.xL(C.zS(d),!1,C.a([],x.f5))).gI(0)
m=40+B.k.D(r*120,0,160)
l=v.at+t.at>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.lc()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.lc()
h=t[u].b
h===$&&C.c()
h=B.k.J(j*22+i*m*l,h.a.length())
v.lc()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.lc()
g=t[u].b
g===$&&C.c()
f=B.k.J(h+i,g.a.length())
v.lc()
i=t[u].a4_(f).a
h=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
h.r=B.c.gt(0)
e=h.M()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
N8(d,e,f,g){var w,v,u,t
$.a1()
w=C.T()
v=g?B.b4:B.a1
u=g?B.bc:B.a7
t=C.aq(e,B.x,0.3)
t.toString
w.saz(new C.a7(v,u,B.w,C.a([e,f,e,t],x.O),B.F4,null).aB(0,d))
return w},
arZ(d,e,f){return this.N8(d,e,f,!0)},
bUI(d,e){return this.N8(d,B.bu,B.iN,e)},
adT(d,e){var w,v,u
$.a1()
w=C.T()
w.saz(D.aFs.aB(0,C.c1(e,4.2)))
d.aw(e,4.2,w)
w=e.ap(0,D.dIE)
v=e.ap(0,D.dIN)
u=C.T()
u.r=B.fr.gt(0)
u.c=1.2
d.bU(w,v,u)},
c6C(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null,b3=4294626325,b4=4286331629,b5=4287322667,b6=4293870660,b7=$.a1(),b8=C.T()
b8.saz(D.bDG.aB(0,D.e8i))
b8.c=3.4
b8.d=B.bZ
w=C.T()
w.r=B.x.j(0.45).gt(0)
w.z=H.pe
b9.lf(D.e8c,w)
if(c1){w=C.bZ(D.e8h,B.k5)
v=C.T()
v.r=B.c.j(0.14).gt(0)
b9.bi(w,v)}b9.bU(D.dJH,D.dJC,b8)
b9.bU(D.dI2,D.dIh,b8)
u=c0.x
switch(c0.b){case"battery":b1.buB(b9,c0)
break
case"solar":t=C.bZ(D.e8f,B.jK)
b9.bi(t,b1.N8(new C.af(t.a,t.b,t.c,t.d),B.fJ,B.cg,!1))
b7=C.T()
w=C.aq(D.b1x,B.db,0.25+0.55*c0.f)
w.toString
v=C.aq(D.b89,B.lN,0.3+0.4*c0.f)
v.toString
b7.saz(new C.a7(B.ax,B.aE,B.w,C.a([w,v],x.O),b2,b2).aB(0,D.a2h))
b9.bp(D.a2h,b7)
s=C.T()
s.r=B.c.j(0.35).gt(0)
s.c=0.8
for(b7=b9.a,r=1;r<6;++r){w=-34+r*68/6
q=s.M()
b7.drawLine.apply(b7,[w,-18,w,18,q])
q.delete()}for(r=1;r<4;++r){w=-18+r*9
q=s.M()
b7.drawLine.apply(b7,[-34,w,34,w,q])
q.delete()}for(r=0;r<6;++r){w=-34+(r+0.5)*68/6
$.a1()
v=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
v.r=B.ct.j(0.5).gt(0)
v.c=0.6
q=v.M()
b7.drawLine.apply(b7,[w,-18,w,18,q])
q.delete()}b7=new C.b_($.a1().r,B.au,b2,b2,C.a([],x.v))
b7.N(new C.bj(-34,18))
b7.N(new C.aw(-6+40*c0.f,-18))
b7.N(new C.aw(4+40*c0.f,-18))
b7.N(new C.aw(-24,18))
b7.N(new C.bX())
w=C.T()
w.r=B.c.j(0.1+0.22*c0.f).gt(0)
b9.b4(b7,w)
w=c0.f
b7=C.T()
b7.r=B.j2.j(0.9).gt(0)
b9.aw(D.dI6,4+4*w,b7)
break
case"crank":p=C.bZ(D.e86,B.h_)
b9.bi(p,b1.arZ(new C.af(p.a,p.b,p.c,p.d),B.bz,B.bO))
b7=C.T()
b7.saz(D.aFt.aB(0,C.c1(B.J,12)))
b9.aw(B.J,12,b7)
o=new C.v(Math.cos(c0.y)*22,Math.sin(c0.y)*22)
b7=C.T()
b7.r=B.ct.gt(0)
b7.c=5
b7.d=B.bZ
b9.bU(B.J,o,b7)
b7=C.T()
b7.saz(D.dQu.aB(0,C.c1(o,7)))
b9.aw(o,7,b7)
b1.adT(b9,D.dJA)
b1.adT(b9,D.dHZ)
break
case"turbine":b7=b7.r
w=x.v
v=new C.b_(b7,B.au,b2,b2,C.a([],w))
v.N(new C.bj(-3,24))
v.N(new C.aw(3,24))
v.N(new C.aw(1.5,0))
v.N(new C.aw(-1.5,0))
v.N(new C.bX())
n=C.T()
n.r=B.cg.gt(0)
b9.b4(v,n)
for(v=b9.a,m=0;m<3;++m){n=c0.y
J.bP(v.save())
v.rotate((n+m*2.094)*180/3.141592653589793,0,0)
n=C.a([],w)
l=new C.b_(b7,B.au,b2,b2,n)
n.push(new C.bj(0,-2))
n.push(new C.dj(6,-14,2,-30))
n.push(new C.dj(-2,-14,0,-2))
n.push(new C.bX())
n=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
n.r=B.c.gt(0)
q=n.M()
n=l.gbM().a.snapshot()
v.drawPath((l.e=new C.cG(n)).a,q)
q.delete()
v.restore()}b7=C.T()
b7.saz(D.dQe.aB(0,C.c1(B.J,4.5)))
b9.aw(B.J,4.5,b7)
break
case"switch":p=C.bZ(D.e89,B.uT)
b7=C.T()
b7.saz(D.bEH.aB(0,new C.af(p.a,p.b,p.c,p.d)))
b9.bi(p,b7)
b1.adT(b9,D.Pa)
b1.adT(b9,D.aAt)
k=c0.w?D.aAt:D.dHQ
b7=C.T()
b7.r=B.aG.gt(0)
b7.c=6
b7.d=B.bZ
b9.bU(D.Pa,k,b7)
b7=C.T()
b7.r=(c0.w?B.bq:B.cg).gt(0)
b7.c=4
b7.d=B.bZ
b9.bU(D.Pa,k,b7)
b7=C.kZ(D.Pa,k,0.85)
b7.toString
w=C.T()
w.r=B.aH.gt(0)
b9.aw(b7,5,w)
break
case"fuse":j=C.bZ(D.aFP,D.aFy)
b7=C.T()
b7.r=B.ho.j(0.25).gt(0)
b9.bi(j,b7)
b7=C.T()
b7.b=B.aj
b7.c=1.4
b7.r=B.aA.gt(0)
b9.bi(j,b7)
if(!u){b7=C.T()
b7.c=1.6
b7.r=C.aq(B.cg,B.dg,c0.ax).gt(0)
b9.bU(D.aAI,D.aAs,b7)}else{b7=C.T()
b7.c=1.6
b7.r=B.c1.gt(0)
b9.bU(D.aAI,D.dJM,b7)
b7=C.T()
b7.c=1.6
b7.r=B.c1.gt(0)
b9.bU(D.dIq,D.aAs,b7)
b7=C.T()
b7.r=B.dx.gt(0)
b9.aw(B.J,6,b7)}for(b7=b9.a,i=0;i<2;++i){h=C.dy(new C.v(D.cS0[i]*22,0),20,9)
w=C.bZ(h,B.kF)
q=b1.N8(h,B.dB,B.nL,!0).M()
b7.drawRRect(C.fL(w),q)
q.delete()}break
case"pot":b7=C.T()
b7.saz(D.dQm.aB(0,C.c1(B.J,21)))
b9.aw(B.J,21,b7)
for(b7=b9.a,m=0;m<=10;++m){g=2.356194490192345+m*3.141592653589793*1.5/10
w=Math.cos(g)
v=Math.sin(g)
n=Math.cos(g)
l=Math.sin(g)
f=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
f.r=B.aA.gt(0)
f.c=1.2
q=f.M()
b7.drawLine.apply(b7,[w*18,v*18,n*22,l*22,q])
q.delete()}b7=C.T()
b7.saz(D.dQc.aB(0,C.c1(B.J,13)))
b9.aw(B.J,13,b7)
e=2.356194490192345+c0.f*3.141592653589793*1.5
b7=Math.cos(e)
w=Math.sin(e)
v=Math.cos(e)
n=Math.sin(e)
l=C.T()
l.r=B.aM.gt(0)
l.c=3
l.d=B.bZ
b9.bU(new C.v(b7*3,w*3),new C.v(v*12,n*12),l)
break
case"resistor":d=C.bZ(D.aFP,D.aFy)
b7=C.T()
b7.saz(D.bGE.aB(0,new C.af(d.a,d.b,d.c,d.d)))
b9.bi(d,b7)
b7=x.O
a0=C.D([47,C.a([C.bg(b3),C.bg(b4),B.x],b7),100,C.a([C.bg(b5),B.x,C.bg(b5)],b7),220,C.a([C.bg(b6),C.bg(b6),C.bg(b5)],b7),470,C.a([C.bg(b3),C.bg(b4),C.bg(b5)],b7),1000,C.a([C.bg(b5),B.x,C.bg(b6)],b7)],x.i,x.bF)
a1=a0.h(0,c0.r)
if(a1==null){b7=a0.h(0,100)
b7.toString
a1=b7}for(b7=b9.a,r=0;r<3;++r){w=-14+r*9
v=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
v.r=a1[r].gt(0)
q=v.M()
b7.drawRect(C.cz(new C.af(w,-9,w+4.5,9)),q)
q.delete()}b7=C.T()
b7.r=B.aM.gt(0)
b9.bp(D.e8m,b7)
b7=c0.r
b1.rP(b9,b7>=1000?"1k\u03a9":""+B.k.U(b7)+"\u03a9",D.dJr,B.ak,10)
break
case"bulb":w=c0.ax
if(w>0){v=C.T()
v.r=B.j2.j(0.55*w).gt(0)
v.z=B.Fy
b9.aw(D.a1m,34,v)}p=C.dy(D.dHx,12,18)
b9.bi(C.bZ(p,B.kF),b1.N8(p,B.bu,B.ep,!0))
for(w=b9.a,r=0;r<3;++r){v=13+r*3.5
n=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
n.r=B.dt.gt(0)
n.c=1
q=n.M()
w.drawLine.apply(w,[-9,v,9,v,q])
q.delete()}w=C.T()
if(u)v=B.T1
else{v=C.aq(B.ep,B.hB,c0.ax)
n=c0.ax
v=v.j(0.25+0.7*n)}if(u)n=B.CK
else{n=C.aq(B.fJ,B.j2,c0.ax)
n.toString}w.saz(new C.bT(B.vr,0.5,B.w,b2,0,C.a([v,n.j(0.18+0.5*c0.ax)],x.O),b2,b2).aB(0,C.c1(B.tk,17)))
b9.aw(B.tk,17,w)
w=C.T()
w.b=B.aj
w.c=1.4
w.r=B.c.j(0.6).gt(0)
b9.aw(B.tk,17,w)
b7=b7.r
w=x.v
n=new C.b_(b7,B.au,b2,b2,C.a([],w))
n.N(new C.bj(-9,-12))
n.N(new C.dj(-12,-4,-9,0))
v=C.T()
v.b=B.aj
v.c=2
v.r=B.c.j(0.45).gt(0)
b9.b4(n,v)
v=C.T()
v.r=B.cO.gt(0)
v.c=1.4
b9.bU(D.dJJ,D.dJK,v)
v=C.T()
v.r=B.cO.gt(0)
v.c=1.4
b9.bU(D.dIl,D.dIn,v)
w=C.a([],w)
a2=new C.b_(b7,B.au,b2,b2,w)
a2.N(new C.bj(-4,-2))
for(m=0;m<6;m=a3){a3=m+1
b7=(m&1)===0?-6:1
b7=new C.aw(-4+a3*8/6,-2+b7)
w.push(b7)
v=a2.f
if(v!=null)b7.bI(v)
b7=a2.e
if(b7!=null)b7.a.delete()
a2.e=null}$.a1()
b7=C.T()
b7.b=B.aj
b7.c=1.8
if(u)w=B.aV
else{w=C.aq(B.fJ,D.b2c,c0.ax)
w.toString}b7.r=w.gt(0)
b9.b4(a2,b7)
break
case"led":w=c0.ax
if(w>0){v=C.T()
v.r=B.aH.j(0.6*w).gt(0)
v.z=D.d2L
b9.aw(B.tk,30,v)}w=C.T()
w.r=B.ep.gt(0)
w.c=2.4
b9.bU(D.dJO,D.dJN,w)
w=C.T()
w.r=B.ep.gt(0)
w.c=2.4
b9.bU(D.dIs,D.dIr,w)
b7=b7.r
w=x.v
a4=new C.b_(b7,B.au,b2,b2,C.a([],w))
a4.N(new C.bj(-12,8))
a4.N(new C.aw(-12,-6))
a4.N(new C.dj(0,-26,12,-6))
a4.N(new C.aw(12,8))
a4.N(new C.bX())
v=C.T()
if(u)n=B.IZ
else{n=C.aq(B.fp,D.a9l,c0.ax)
n.toString}if(u)l=B.jU
else{l=C.aq(B.kN,B.aH,c0.ax)
l.toString}v.saz(new C.a7(B.ax,B.aE,B.w,C.a([n,l],x.O),b2,b2).aB(0,D.e7Y))
b9.b4(a4,v)
v=C.T()
v.b=B.aj
v.c=1.2
v.r=B.j8.gt(0)
b9.b4(a4,v)
v=C.T()
v.r=B.f5.gt(0)
b9.bp(D.e80,v)
w=new C.b_(b7,B.au,b2,b2,C.a([],w))
w.N(new C.bj(-7,-4))
w.N(new C.dj(-6,-12,0,-15))
b7=C.T()
b7.b=B.aj
b7.c=2
b7.r=B.c.j(0.5).gt(0)
b9.b4(w,b7)
break
case"motor":a5=new C.af(-28,-14,20,14)
b9.bi(C.bZ(a5,B.hZ),b1.arZ(a5,B.ai,B.aJ))
b7=C.T()
b7.r=B.d3.gt(0)
b9.bp(D.e7O,b7)
b7=C.T()
b7.r=B.ct.gt(0)
b9.bp(D.e7P,b7)
b7=b9.a
J.bP(b7.save())
b7.translate(31,0)
for(m=0;m<3;++m){J.bP(b7.save())
b7.rotate((c0.y+m*2.094)*180/3.141592653589793,0,0)
w=C.dy(D.dHL,15,7)
v=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
v.r=B.dg.j(0.9).gt(0)
q=v.M()
b7.drawOval(C.cz(w),q)
q.delete()
b7.restore()}w=C.T()
w.r=B.aG.gt(0)
b9.aw(B.J,3,w)
b7.restore()
b1.rP(b9,"M",D.dJz,B.aG,14)
break
case"buzzer":a6=C.dy(B.J,42,42)
b7=C.T()
b7.saz(D.dQq.aB(0,a6))
b9.lf(a6,b7)
b7=C.T()
b7.r=B.x.gt(0)
b9.aw(B.J,6,b7)
b7=C.T()
b7.b=B.aj
b7.c=1.4
b7.r=B.be.gt(0)
b9.aw(B.J,6,b7)
b1.rP(b9,"+",D.dJw,B.ak,12)
for(b7=b9.a,w=b1.b,m=1;m<=3;++m){v=c0.ax
n=v>0?B.k.J(w.d*14,5):0
n=C.c1(B.J,24+m*5+n)
l=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
l.b=B.aj
l.c=2
l.r=B.cd.j(v*(1-m*0.22)).gt(0)
q=l.M()
b7.drawArc.apply(b7,[C.cz(n),-40.10704565915762,80.21409131831524,!1,q])
q.delete()}break
case"heater":p=C.bZ(D.e87,B.hZ)
w=C.T()
w.saz(D.bEy.aB(0,new C.af(p.a,p.b,p.c,p.d)))
b9.bi(p,w)
w=C.a([],x.v)
a7=new C.b_(b7.r,B.au,b2,b2,w)
a7.N(new C.bj(-24,0))
for(m=0;m<8;m=a3){b7=(m&1)===0?-10:10
a3=m+1
b7=new C.dj(-24+m*6+3,b7,-24+a3*6,0)
w.push(b7)
v=a7.f
if(v!=null)b7.bI(v)
b7=a7.e
if(b7!=null)b7.a.delete()
a7.e=null}b7=c0.ax
if(b7>0.1){$.a1()
w=C.T()
w.b=B.aj
w.c=10
w.r=D.b2M.j(0.5*b7).gt(0)
w.z=B.jf
b9.b4(a7,w)}$.a1()
b7=C.T()
b7.b=B.aj
b7.c=3.2
b7.d=B.bZ
b7.r=C.aq(B.le,G.aal,c0.ax).gt(0)
b9.b4(a7,b7)
break
case"capacitor":a5=new C.af(-16,-22,16,18)
b7=C.bZ(a5,B.hZ)
w=C.T()
w.saz(D.bDy.aB(0,a5))
b9.bi(b7,w)
w=C.T()
w.r=B.cg.gt(0)
b9.bp(D.e82,w)
for(r=0;r<4;++r){a8=new C.mr(new C.eE("\u2212",b2,b2,B.cT,b2,b2,b2,b2,b2,b2,new C.F(!0,B.aG,b2,b2,b2,b2,11,B.u,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2)),B.a5,B.cp,new C.km(1),b2,b2,b2,b2,B.co,b2)
a8.fK()
a8.a6(b9,new C.v(-14,-18+r*9))}a9=new C.af(-16,-24,16,-17)
b9.bi(C.bZ(a9,B.kF),b1.bUI(a9,!1))
b7=38*c0.ax
w=18-b7
$.a1()
v=C.T()
v.r=B.bq.j(0.5).gt(0)
b9.bp(new C.af(-3,w,11,w+b7),v)
b1.rP(b9,"1F",D.a1m,B.c,11)
break
case"radio":d=C.bZ(D.a2h,B.h_)
b7=C.T()
b7.saz(D.bGT.aB(0,new C.af(d.a,d.b,d.c,d.d)))
b9.bi(d,b7)
b7=C.T()
b7.b=B.aj
b7.c=1.4
b7.r=B.nL.j(0.6).gt(0)
b9.bi(d,b7)
b7=C.bZ(D.e88,B.jK)
w=C.T()
w.r=B.dw.gt(0)
b9.bi(b7,w)
for(b7=b9.a,r=0;r<6;++r){w=-10+r*4.4
v=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
v.r=B.le.gt(0)
v.c=1.4
q=v.M()
b7.drawLine.apply(b7,[-27,w,-3,w,q])
q.delete()}w=C.T()
w.r=(c0.ax>0?B.hA:B.n4).gt(0)
b9.bp(D.e7R,w)
if(c0.ax>0){w=8+B.k.J(b1.b.d*7,18)
v=C.T()
v.r=B.bR.gt(0)
v.c=1.6
b9.bU(new C.v(w,-13),new C.v(w,-3),v)}w=C.T()
w.saz(D.aFt.aB(0,C.c1(D.aAo,6)))
b9.aw(D.aAo,6,w)
w=C.T()
w.r=B.nL.gt(0)
b9.aw(D.dI1,4,w)
w=C.T()
w.r=B.ep.gt(0)
w.c=1.8
b9.bU(D.dI0,D.aAx,w)
if(c0.ax>0)for(w=b1.b,m=1;m<=2;++m){v=C.c1(D.aAx,4+m*5+B.k.J(w.d*8,5))
n=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
n.b=B.aj
n.c=1.4
n.r=B.pY.j(0.7).gt(0)
q=n.M()
b7.drawArc.apply(b7,[C.cz(v),-137.50987083139756,91.67324722093173,!1,q])
q.delete()}break
case"tv":w=C.bZ(D.e8e,B.hZ)
v=C.T()
v.r=M.CR.gt(0)
b9.bi(w,v)
b0=C.bZ(D.e8b,B.kF)
if(c0.ax>0){b7=b9.a
J.bP(b7.save())
b7.clipRRect(C.fL(b0),$.BC(),!0)
for(w=b1.b,m=0;m<7;++m){v=-33+m*9.5
n=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
n.r=D.c6L[B.o.J(m+B.k.bK(w.d*2),7)].gt(0)
q=n.M()
b7.drawRect(C.cz(new C.af(v,-21,v+9.5,7)),q)
q.delete()}v=C.T()
v.r=B.aG.gt(0)
b9.bp(D.e8a,v)
w=-21+B.k.J(w.d*30,38)
v=C.T()
v.r=B.c.j(0.25).gt(0)
b9.bp(new C.af(-33,w,33,w+2),v)
b7.restore()
b7=C.T()
b7.r=B.c.j(0.06).gt(0)
b9.bi(b0,b7)}else{w=C.T()
w.r=D.b6V.gt(0)
b9.bi(b0,w)
b7=new C.b_(b7.r,B.au,b2,b2,C.a([],x.v))
b7.N(new C.bj(-33,-21))
b7.N(new C.aw(-10,-21))
b7.N(new C.aw(-33,0))
b7.N(new C.bX())
w=C.T()
w.r=B.c.j(0.05).gt(0)
b9.b4(b7,w)}b7=C.T()
b7.r=B.bz.gt(0)
b9.bp(D.e8_,b7)
b7=C.T()
b7.r=(c0.ax>0?B.bq:B.aH).gt(0)
b9.aw(D.dIb,1.6,b7)
break}if(u)b1.rP(b9,"\u2716",D.dJP,B.aH,14)},
buB(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.af(-28,-13,28,13)
d.bi(C.bZ(w,B.uT),m.arZ(w,B.fJ,B.iv))
v=new C.af(-22,-13,22,13)
$.a1()
u=C.T()
u.saz(D.aj1.aB(0,v))
d.bp(v,u)
u=C.T()
u.r=B.e1.gt(0)
d.bp(D.e84,u)
t=new C.af(28,-5,34,5)
d.bi(C.bZ(t,B.hg),m.N8(t,B.fJ,B.iN,!0))
m.rP(d,"+",D.dHR,B.aM,11)
m.rP(d,"\u2212",D.dJB,B.ak,11)
m.rP(d,C.t(l===B.k.lM(l)?B.k.U(l):l)+"V",D.dJv,B.aM,13)
if(l>2){u=C.T()
u.r=B.be.gt(0)
u.c=1
d.bU(D.dHG,D.dHw,u)
m.rP(d,l>3?"3 cells":"2 cells",D.dJu,B.aA,8)}}else if(l<=9){s=new C.af(-22,-17,22,17)
u=C.bZ(s,B.uT)
$.a1()
r=C.T()
r.saz(D.bGu.aB(0,s))
d.bi(u,r)
r=C.T()
r.r=B.dp.gt(0)
d.bp(D.e85,r)
for(u=d.a,q=0;q<2;++q){p=D.cS5[q]
r=p<0?5:3.6
o=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
o.saz(D.aFs.aB(0,C.c1(new C.v(p,-18),5)))
n=o.M()
u.drawCircle(p,-18,r,n)
n.delete()}m.rP(d,"9V",D.dJs,B.c,16)}else{s=new C.af(-34,-16,34,16)
u=C.bZ(s,B.jK)
$.a1()
r=C.T()
r.saz(D.aj1.aB(0,s))
d.bi(u,r)
r=C.T()
r.r=B.cX.gt(0)
d.bp(D.e8d,r)
for(u=d.a,q=0;q<2;++q){r=C.bZ(C.dy(new C.v(D.cS2[q],-20),8,10),B.hg)
o=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
o.r=B.ct.gt(0)
n=o.M()
u.drawRRect(C.fL(r),n)
n.delete()}m.rP(d,"+",D.dHX,B.aH,10)
m.rP(d,"12V",D.dJt,B.aG,15)}},
ao(d){return!0}}
A.pZ.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
B.d.a8(k)
B.d.a8(d.b)
w=C.Q(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.J)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new A.v8(o,r,q,p)
n.aH0(o,r,q,p)
k.push(n)
J.ic(s[4],new A.ced(n))
w.m(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.J)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.ayG(m,u[1],l,u[3])}}}
A.afK.prototype={
S(){return new A.afL(B.J,B.at,$,B.bs,0,C.a([],x.X),null,null)}}
A.afL.prototype={
Z(){this.a0()
this.a.c.e=new A.bC_()
this.kG()},
kZ(d){var w,v,u,t,s,r=this,q="noise"
r.a.c.a4M(0,d)
if((r.z+=d)>0.16){r.z=0
for(w=r.a.c.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
if(t.x)continue
switch(t.b){case"buzzer":s=t.ax
if(s>0.2)A.e1(520,"",110,0,0.16*s,"square")
break
case"motor":s=t.ax
if(s>0.08)A.e1(60+s*55,"",130,0,0.12,"tri")
break
case"heater":if(t.ax>0.2)s=B.cz.ah()<0.5
else s=!1
if(s)A.e1(2400,"",25,0,0.12*t.ax,q)
break
case"radio":if(t.ax>0){A.e1(900+B.cz.aE(800),"",90,0,0.1,q)
if(B.cz.ah()<0.35)A.e1(300+B.cz.aE(6)*70,"",150,0,0.12,"tri")}break
case"tv":if(t.ax>0)s=B.cz.ah()<0.4
else s=!1
if(s)A.e1(3000,"",40,0,0.07,q)
break
case"turbine":s=t.f
if(s>0.1)A.e1(80,"",150,0,0.05*s,q)
break
case"crank":s=t.f
if(s>0.15)A.e1(110+s*140,"",70,0,0.08,"saw")
break}}}w=r.a.w
if(w!=null)w.$0()
r.n(new A.bC0())},
b0C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.J)(w),++q){p=w[q]
for(o=0;o<2;++o){n=this.y
m=p.c
l=o===0?-42:42
l=m*n.a+l-u
n=p.d*n.b-t
k=Math.sqrt(l*l+n*n)
if(k<r){s=new C.V(p,o)
r=k}}}return s},
aVF(d){var w,v,u,t,s,r,q,p
for(w=this.a.c.a,v=C.S(w).k("dt<1>"),w=new C.dt(w,v),w=new C.bR(w,w.gH(0),v.k("bR<ai.E>")),u=d.a,v=v.k("ai.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
if(Math.abs(u-r*q.a)<36&&Math.abs(t-p*q.b)<26)return s}return null},
csz(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.J)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=n.a
k=p.b===0?-42:42
k=m*l+k
n=n.b
o=o.d*n
m=p.c
j=m.c
i=p.d===0?-42:42
i=j*l+i
n=m.d*n
h=A.h1N(new C.v(k,o),new C.v(i,n),p)
for(m=h.a,l=h.b,g=1;g<20;++g){f=g/20
j=1-f
e=j*j
j=2*f*j
d=f*f
a0=k*e+m*j+i*d-u
d=o*e+l*j+n*d-t
a1=Math.sqrt(a0*a0+d*d)
if(a1<r){r=a1
s=p}}}return s},
aaG(){this.a.toString
this.n(new A.bBz())},
bhz(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cFV[v]
if(!B.d.bc(p.a.c.a,new A.bC1(u,w))){o=new C.v(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?E.G5:o
s=s?E.G5:o
q=t.agc(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.m(0,q.a,0)
p.d=q
p.e=null
A.e1(1200,"",50,0,0.3,"tri")
p.aaG()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d
j.a.toString
w=C.a([],x.s)
for(v=0;v<16;++v)w.push(D.N4[v].a)
u=j.a.d
if(u!=null){t=C.a2(u).k("ct<1>")
t=C.z(new C.ct(u,t),t.k("E.E"))
s=t.length
v=0
for(;v<t.length;t.length===s||(0,C.J)(t),++v){r=t[v]
q=u.h(0,r)
u.m(0,r,Math.min(1,(q==null?1:q)+0.03))}}t=x.p
s=C.a([],t)
q=j.a.f
if(q!=null)s.push(q)
s.push(C.C(C.co(new A.bBY(j,u,h)),1))
j.a.toString
q=B.c.j(0.08)
p=C.a([],t)
for(o=w.length,v=0;v<w.length;w.length===o||(0,C.J)(w),++v){r=w[v]
n=$.a0m()
m=n.h(0,r).d.j(0.14)
l=new C.b2(14,14)
k=new C.ay(n.h(0,r).d.j(0.5),1,B.r,-1)
p.push(C.aJ(i,C.p(i,C.u(C.a([new C.w(n.h(0,r).c,i,B.v4,i,i,i,i,i,i,i,i,i),B.bw,new C.w(n.h(0,r).b,i,D.a3X,i,i,i,i,B.a0,i,1,i,i)],t),B.m,i,B.b5,B.j,0,B.p),B.i,i,i,new C.o(m,i,new C.c2(k,k,k,k),new C.bx(l,l,l,l),i,i,B.n),i,i,i,B.lh,i,i,i,68),B.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.bBZ(j,r),i,i,i,i,i,i,!1,B.ae))}s.push(C.p(i,C.cX(p,i,B.kS,i,i,B.b_,!1),B.i,i,i,new C.o(D.Tu,i,new C.c2(new C.ay(q,1,B.r,-1),B.V,B.V,B.V),i,i,i,B.n),i,78,i,i,i,i,i,i))
return C.u(s,B.m,i,B.e,B.j,0,B.p)},
aTe(d){var w=null,v=C.m(18)
return C.p(w,d,B.i,w,w,new C.o(D.aYr,w,C.H(B.bG,B.r,1),v,w,w,B.n),w,w,w,w,D.beF,w,w,w)},
c6D(d){var w,v,u,t=this,s=null,r=d.b,q=$.a0m().h(0,r),p=d.as,o=d.at,n=new A.bBK(t,q),m=C.d(q.c,s,s,s,s,s,s,B.QG,s,s,s),l=q.b,k=q.d,j=x.p
l=C.A(C.a([m,B.ab,C.C(C.d(l,s,s,s,s,s,s,C.l(s,s,k,s,s,s,s,s,s,s,s,16,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),C.aF(s,s,s,s,D.bw_,s,s,s,new A.bBD(t,d),s,s,s,s,"Remove part",B.c6),C.aF(s,s,s,s,B.Li,s,s,s,new A.bBE(t),s,s,s,s,s,B.c6)],j),B.m,s,B.e,B.j,0,s,s)
m=C.d(q.e,s,s,s,s,s,s,D.QT,s,s,s)
w=C.d("How it is made: "+q.f,s,s,s,s,s,s,D.et7,s,s,s)
p=d.x?"Burnt out! Press Repair.":"Now: "+B.k.ab(Math.abs(d.as),2)+" volts  \xb7  "+B.k.ab(Math.abs(d.at)*1000,0)+" milliamps  \xb7  "+B.k.ab(Math.abs(p*o),2)+" watts"
p=C.a([l,m,B.aw,w,B.ar,C.d(p,s,s,s,s,s,s,C.l(s,s,d.x?B.cJ:B.aM,s,s,s,s,s,s,s,s,12.5,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],j)
if(r==="battery"){o=C.a([],j)
for(v=0;v<5;++v){u=D.cLZ[v]
o.push(new A.dv(C.t(u)+" V",d.e===u,new A.bBF(t,d,u),s,k,s))}p.push(C.cf(B.bI,o,B.by,0,6))}if(r==="resistor"){o=C.a([],j)
for(v=0;v<5;++v){u=D.cDD[v]
m=u>=1000?"1 k\u03a9":""+B.o.U(u)+" \u03a9"
o.push(new A.dv(m,d.r===u,new A.bBG(t,d,u),s,k,s))}p.push(C.cf(B.bI,o,B.by,0,6))}if(r==="solar")p.push(n.$3("Sunlight",d.f,new A.bBH(d)))
if(r==="turbine")p.push(n.$3("Wind",d.f,new A.bBI(d)))
if(r==="pot")p.push(n.$3("Knob",d.f,new A.bBJ(d)))
if(r==="crank")p.push(D.eLK)
if(r==="switch")p.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",s,s,s,s,s,s,B.im,s,s,s))
return t.aTe(new C.d3(D.aQE,C.ce(C.u(p,B.F,s,B.e,B.R,0,B.p),B.q,s,B.z,s,s,s,s,B.af),s))}}
A.b6D.prototype={}
A.SR.prototype={
S(){return new A.azP(A.fwi(),new C.cn(null,x.gJ),C.aY(x.S))}}
A.azP.prototype={
bYq(){var w,v=this
if(++v.w%10===0){w=v.f
$.bzb()
w=w>=8}else w=!0
if(w)return
w=v.r
if(!w.q(0,v.f)&&$.bzb()[v.f].c.$1(v.d)){w.G(0,v.f)
A.Aj("bell",C.a([0,4,7,12],x.t),700,0.45)
v.n(new A.dIb())}},
ada(){var w=0,v=C.j(x.H),u=this,t
var $async$ada=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cb(null,null,!0,null,new A.dIa(u),t,null,!0,!0,x.H),$async$ada)
case 2:return C.h(null,v)}})
return C.i($async$ada,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.f,o=$.bzb(),n=p<8?o[p]:q
o=n==null
w=!o
v=w&&r.r.q(0,p)
p=(v?B.bq:B.b3).j(0.12)
u=C.m(16)
t=C.H((v?B.bq:B.b3).j(0.4),B.r,1)
if(o)o=D.eLL
else{o=v?"\u2705":"\ud83c\udfaf"
o=C.d(o+" Challenge "+(r.f+1)+": "+n.a,q,q,q,q,q,q,T.GT,q,q,q)
o=C.u(C.a([o,C.d(v?"Well done!":n.b,q,2,B.a0,q,q,q,D.eo9,q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p)}s=x.p
o=C.a([C.C(o,1)],s)
if(w)o.push(C.bF(!1,C.d(v?"Next":"Skip",q,q,q,q,q,q,q,q,q,q),q,q,!0,q,q,new A.dId(r,v),q,q))
p=A.fIw(r.d,C.p(q,C.A(o,B.m,q,B.e,B.j,0,q,q),B.i,q,q,new C.o(p,q,t,u,q,q,B.n),q,q,q,D.ac2,B.aci,q,q,q),r.e,r.gbYp(),q)
return A.jd(B.b3,C.a([C.aF(q,q,q,q,D.bt6,q,q,q,r.gccn(),q,q,q,q,"Ready-made circuits",q),C.aF(q,q,q,q,D.bzy,q,q,q,new A.dIe(r),q,q,q,q,"Repair burnt parts",q),C.aF(q,q,q,q,D.bs9,q,q,q,new A.dIf(r),q,q,q,q,"Clear the board",q)],s),"Build real circuits.\n\n1. Tap a part at the bottom to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nTry the challenges at the top, or open Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired.",p,"ELECTRONICS LAB",q)}}
A.auk.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.b5S.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bkL()}}
A.aSz.prototype={}
A.Tm.prototype={
S(){return new A.bfD(C.Q(x.S,x.N),B.at,C.a([],x.R),$,B.bs,0,C.a([],x.X),null,null)}}
A.bfD.prototype={
guB(){var w=this.f
return w===$?this.f=A.fEb(0):w},
Z(){this.a0()
this.kG()
A.yl("laser_maze").bC(new A.dXb(this),x.P)},
kZ(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.V(u.a,t)
if(t>0.8)B.d.ct(w,v)}this.n(new A.dXc())},
aaI(d){var w=this
w.n(new A.dX1(w,d))
A.v0("laser_maze",C.D(["best",w.e,"level",w.d],x.N,x.z))},
bYD(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.gef()/7
u=v*7
t=(w.a-u)/2
s=B.k.D((w.b-u)/2,8,300)
r=B.k.bK((d.a-t)/v)
q=B.k.bK((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.guB().b.q(0,p)||p===o.guB().e||o.guB().d.am(0,p))return
o.n(new A.dX2(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.co(new A.dX5(t,A.h1I(t.guB(),t.r))),q=x.p,p=C.a([new A.dv("Clear mirrors",!1,new A.dX6(t),B.jE,B.aM,s),new A.dv("Skip",!1,new A.dX7(t),D.bq3,B.b3,s)],q)
if(t.d>0)p.push(new A.dv("Back",!1,new A.dX8(t),D.bq4,B.b3,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new A.dv(""+u,v===t.d,new A.dX9(t,v),s,B.aH,s))}return A.jd(B.aH,B.fQ,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.u(C.a([new A.eD(p,s,s),new A.eD(w,"LEVEL",s)],q),B.m,s,B.e,B.R,0,B.p))}}
A.bcH.prototype={
a6(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gef()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=B.k.D((b0.b-a4)/2,8,300),a7=new A.d8l(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bZ(new C.af(a5,a6,a8,a4),B.k5)
v=$.a1()
u=C.T()
u.r=M.CR.gt(0)
a9.bi(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
r.r=B.du.gt(0)
q=r.M()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
s.r=B.du.gt(0)
q=s.M()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.ee(a8,a8.r,C.a2(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.bZ(C.dy(p,u,u),B.h_)
o=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
o.saz(D.bGZ.aB(0,C.dy(p,a3,a3)))
q=o.M()
w.drawRRect(C.fL(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.b_(v.r,B.au,a2,a2,u)
n.N(new C.bj(a7.$1(B.d.gI(a8)).a,a7.$1(B.d.gI(a8)).b))
for(a8=C.dg(a8,1,a2,C.S(a8).c),v=a8.$ti,a8=new C.bR(a8,a8.gH(0),v.k("bR<ai.E>")),v=v.k("ai.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.aw(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bI(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.a1()
a8=C.T()
a8.b=B.aj
a8.c=14
a8.e=B.fj
a8.r=B.aH.j(0.28+0.08*Math.sin(a1.f*12)).gt(0)
a8.z=B.mK
a9.b4(n,a8)
a8=C.T()
a8.b=B.aj
a8.c=4
a8.e=B.fj
a8.r=D.a9l.gt(0)
a9.b4(n,a8)
a8=C.T()
a8.b=B.aj
a8.c=1.6
a8.e=B.fj
a8.r=B.c.gt(0)
a9.b4(n,a8)}for(a8=a4.c,a8=C.ee(a8,a8.r,C.a2(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.q(0,m)
if(l){m=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
m.r=B.aM.j(0.5).gt(0)
m.z=B.AI
q=m.M()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
m.r=(l?B.aM:B.bz).gt(0)
q=m.M()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?B.c:B.aA
i=new C.mr(new C.eE("\u2605",a2,a2,B.cT,a2,a2,a2,a2,a2,a2,new C.F(!0,j,a2,a2,a2,a2,v,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),B.a5,B.cp,new C.km(1),a2,a2,a2,a2,B.co,a2)
i.fK()
j=i.b
h=j.c
j=j.a.c
i.a6(a9,new C.v(m-h/2,k-j.gbd(j)/2))}g=new A.d8o(a7,a3,a9)
a1.c.bD(0,new A.d8m(g))
a4.d.bD(0,new A.d8n(g))
f=a7.$1(a4.e)
a4=C.bZ(C.dy(f,o,a3*0.8),B.h_)
a8=C.T()
a8.r=B.aH.gt(0)
a9.bi(a4,a8)
v=f.ap(0,new C.v(v,0))
a8=C.T()
a8.r=B.c.gt(0)
a9.aw(v,5,a8)
for(a4=a1.r,a8=a4.length,e=0;e<a4.length;a4.length===a8||(0,C.J)(a4),++e){d=a4[e]
a0=d.b/0.8
v=d.a
u=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
u.b=B.aj
s=1-a0
u.c=4*s
u.r=B.aM.j(s).gt(0)
q=u.M()
w.drawCircle(v.a,v.b,a3*(0.3+a0),q)
q.delete()}},
ao(d){return!0}}
A.To.prototype={
S(){var w=x.n
return new A.aAs(B.cz,C.a([1,0.5,0],w),C.a([0,0,0],w),$,B.bs,0,C.a([],x.X),null,null)}}
A.aAs.prototype={
Z(){this.a0()
this.kG()
A.yl("light_mixer").bC(new A.dXu(this),x.P)},
kZ(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aTf()
w.n(new A.dXv())},
asI(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aE(5)/4)
u.e=t
if(B.d.e7(t,new A.dXf()))u.e[w.aE(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aTf(){var w,v,u=this
if(u.z!=="play")return
w=B.k.U(B.k.D(1-A.fYc(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
A.v3(v,B.o.aj(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
A.v0("light_mixer",C.D(["best",v],x.N,x.z))}}else u.z="result"},
gcnS(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.D(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cxF[B.o.J(B.k.U(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.co(new A.dXo(v,A.fYc(v.e,t))),r=t[0]
r=A.ho(B.aH,""+B.k.U(r*100)+"%","Red",1,0,new A.dXp(v),r)
w=t[1]
w=A.ho(B.br,""+B.k.U(w*100)+"%","Green",1,0,new A.dXq(v),w)
t=t[2]
return A.jd(B.b8,B.fQ,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.u(C.a([r,w,A.ho(B.db,""+B.k.U(t*100)+"%","Blue",1,0,new A.dXr(v),t),new C.bE(B.a7,u,u,new A.ff(B.hr,"Lock it in",new A.dXs(v),B.bq,u),u)],x.p),B.m,u,B.e,B.R,0,B.p))}}
A.bcW.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bZ(new C.af(0,0,n,m),B.pn)
$.a1()
w=C.T()
w.r=B.x.gt(0)
d.bi(l,w)
w=d.a
J.bP(w.save())
w.clipRRect(C.fL(C.bZ(new C.af(0,0,n,m),B.pn)),$.BC(),!0)
v=e.gef()*0.3
u=e.ej(B.J)
l=-v*0.55
t=v*0.45
s=[u.ap(0,new C.v(0,l)),u.ap(0,new C.v(l,t)),u.ap(0,new C.v(v*0.55,t))]
r=[B.Cw,G.a8y,G.a8U]
d.kE(new C.af(0,0,n,m),C.T())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
p.a=B.mW
p.r=r[q].j(l[q]).gt(0)
o=p.M()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bZ(new C.af(0,0,n,m),B.pn)
m=C.T()
m.b=B.aj
m.c=2
m.r=B.be.gt(0)
d.bi(n,m)},
ao(d){return!0}}
A.aIf.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bsp.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.boh()}}
A.aIg.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bsq.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.boi()}}
A.bpk.prototype={}
A.a5N.prototype={
B(d){var w=null
return C.cg(C.eK(w,w,w,!0,!0,D.a9t,w,1,!0,w,0,!1,w,!1,w,w,C.aF(w,w,w,w,D.ai_,w,w,w,new A.c92(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.eVO,w,w,w,1,w,!0),D.a9t,C.cX(C.a([D.dKX,C.co(new A.c93())],x.p),w,D.bfB,w,w,B.af,!1),w,!1,!1,w,w)}}
A.Ua.prototype={
S(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new A.aBd(w,new C.ao(B.aq,$.as()),$,B.bs,0,C.a([],x.X),null,null)}}
A.aBd.prototype={
Z(){this.a0()
this.kG()},
aZ_(d){var w=this.d.length
return B.o.J(B.k.bK(B.k.J(B.k.J(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
kZ(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.aZ_(v.f)
if(w!==v.x){v.x=w
A.kY("bell",24+B.o.J(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.n(new A.es_(v))
A.Aj("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
bZr(){if(this.d.length<2)return
this.n(new A.erW(this))},
aTx(d){var w=this,v=B.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.n(new A.erV(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gbZq(),p=s.d,o=C.C(C.aJ(r,C.b1(r,r,r,new A.bqE(p,s.f,r),B.fx),B.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,B.ae),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.u(C.a([o,new C.a8(r,40,C.at(C.d(n,r,r,r,r,r,r,D.exQ,r,r,r),r,r,r),r)],w),B.m,r,B.e,B.j,0,B.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.arm[B.o.J(v,8)].j(0.9)
t=new C.b2(20,20)
o.push(C.aJ(r,C.p(r,new C.w(p[v],r,D.ex6,r,r,r,r,r,r,r,r,r),B.i,r,r,new C.o(u,r,r,new C.bx(t,t,t,t),r,r,B.n),r,r,r,B.h9,B.fX,r,r,r),B.z,!1,r,r,r,r,r,r,r,new A.erY(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,B.ae))}p=B.c.j(0.07)
return A.jd(B.aM,B.fQ,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.u(C.a([new A.eD(o,r,r),C.A(C.a([C.C(C.aI(r,B.T,!1,r,!0,B.q,r,C.aL(),s.e,r,r,r,r,r,2,C.bn(r,new C.b0(4,C.m(14),B.V),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,B.kb,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.z,!0,r,!0,r,!1,r,B.ad,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new A.erZ(s),r,!1,r,r,!1,r,!0,r,B.a8,r,r,r,r,r,r,r,r,r,r,r,B.dj,!0,B.a5,r,B.am,r,r,r,r),1),B.ab,new A.ff(B.hF,"Add",s.gbZo(s),B.c,r),B.bp,new A.ff(B.lS,"Spin",q,B.bq,r)],w),B.m,r,B.e,B.j,0,r,r)],w),B.m,r,B.e,B.R,0,B.p))}}
A.bqE.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.v(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.a1()
w=C.T()
w.r=D.b_Z.gt(0)
a1.aw(d,f,w)
w=C.T()
w.b=B.aj
w.c=3
w.r=B.aM.gt(0)
a1.aw(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=C.c1(d,a0)
n=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
n.r=D.arm[B.o.J(q,8)].gt(0)
m=n.M()
n=p*57.29577951308232
f.drawArc.apply(f,[C.cz(o),n,s,!0,m])
m.delete()
o=C.c1(d,a0)
l=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
l.b=B.aj
l.c=2
l.r=B.c.j(0.6).gt(0)
m=l.M()
f.drawArc.apply(f,[C.cz(o),n,s,!0,m])
m.delete()
J.bP(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=B.a.al(o,0,11)+"\u2026"
k=new C.mr(new C.eE(o,i,i,B.cT,i,i,i,i,i,i,D.elS),B.a5,B.cp,new C.km(1),i,i,i,i,B.co,i)
k.fK()
o=k.b
n=o.c
o=o.a.c
k.a6(a1,new C.v(a0-n-16,-o.gbd(o)/2))
f.restore()}f=C.T()
f.r=D.a9g.gt(0)
a1.aw(d,20,f)
f=C.T()
f.b=B.aj
f.c=3
f.r=B.aM.gt(0)
a1.aw(d,20,f)
j=new C.b_(h.r,B.au,i,i,C.a([],x.v))
e-=a0
j.N(new C.bj(g,e+26))
e-=10
j.N(new C.aw(g-14,e))
j.N(new C.aw(g+14,e))
j.N(new C.bX())
e=C.T()
e.r=B.c.gt(0)
a1.b4(j,e)
e=C.T()
e.b=B.aj
e.c=2
e.r=B.aV.gt(0)
a1.b4(j,e)},
ao(d){return!0}}
A.SY.prototype={
S(){return new A.bfc($,B.bs,0,C.a([],x.X),null,null)}}
A.bfc.prototype={
Z(){this.a0()
this.kG()},
kZ(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
A.Aj("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a2c(900,new A.dKb())}w.n(new A.dKc())},
aTz(d){return this.n(new A.dK6(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=B.a.aU(B.o.u(B.k.aj(m,60)),2,"0")
v=B.a.aU(B.o.u(B.o.J(B.k.dF(m),60)),2,"0")
m=C.b1(n,n,n,new A.blC(l,B.cJ,n),B.aHc)
u=C.d(w+":"+v,n,n,n,n,n,n,D.epU,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.at(new C.a8(280,280,new C.am(B.C,n,B.a9,B.q,C.a([m,C.u(C.a([u,C.d(t,n,n,n,n,n,n,D.eoY,n,n,n),B.aw,C.d("Sessions done: "+o.r,n,n,n,n,n,n,B.Bx,n,n,n)],s),B.m,n,B.e,B.R,0,B.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.cOt[r]
u.push(new A.dv(""+q+" min",o.d===q,new A.dK8(o,q),n,B.cJ,n))}m=o.f
p=m?V.wT:B.iX
m=m?"Pause":"Start"
return A.jd(B.cJ,B.fQ,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.u(C.a([new A.eD(u,n,n),new A.eD(C.a([new A.ff(p,m,new A.dK9(o),B.bq,n),new A.ff(B.jE,"Reset",new A.dKa(o),B.c,n)],s),n,n)],s),B.m,n,B.e,B.R,0,B.p))}}
A.blC.prototype={
a6(d,e){var w,v,u,t,s=e.ej(B.J),r=e.a/2-14
$.a1()
w=C.T()
w.b=B.aj
w.c=16
w.r=B.c.j(0.08).gt(0)
d.aw(s,r,w)
w=C.c1(s,r)
v=C.T()
v.b=B.aj
v.c=16
v.d=B.bZ
u=this.c
t=C.aq(u,B.c,0.4)
t.toString
v.saz(new C.fP(B.C,-1.5707963267948966,4.71238898038469,B.w,C.a([u,t,u],x.O),null,null).aB(0,C.c1(s,r)))
d.fP(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
ao(d){return d.b!==this.b}}
A.Sb.prototype={
S(){return new A.beS($,B.bs,0,C.a([],x.X),null,null)}}
A.beS.prototype={
Z(){this.a0()
this.kG()},
kZ(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Oh.h(0,p.d)
w.toString
v=B.d.fq(w,new A.dw9())
u=B.k.J(p.f,v)
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
A.kY("flute",D.bHz[t]+5,1400,0.35)}p.n(new A.dwa())},
gbZu(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.Ii("Press Start",0.5)
w=D.Oh.h(0,this.d)
w.toString
v=B.d.fq(w,new A.dw4())
u=B.k.J(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.Ii("Breathe in",0.5+0.5*B.dE.aq(0,p))
case 1:return new C.Ii("Hold",1)
case 2:return new C.Ii("Breathe out",1-0.5*B.dE.aq(0,p))
default:return new C.Ii("Hold",0.5)}}}return new C.Ii("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gbZu(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=B.hS.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,B.i,q,q,new C.o(s,q,q,q,u===0?C.a([new C.a9(0,B.G,B.hS.j(0.35),B.J,40)],v):q,q,B.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,B.BF,q,q,q))
n.push(C.an(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,B.kb,q,q,q),q,q,q,q,q,q))
n=C.at(new C.a8(300,340,new C.am(B.C,q,B.a9,B.q,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aW(D.Oh.ge9(D.Oh));w.C();){v=w.gT(w)
o.push(new A.dv(v,r.d===v,new A.dw7(r,v),q,B.hS,q))}w=r.e
v=w?B.XN:B.iX
w=w?"Stop":"Start"
o.push(new A.ff(v,w,new A.dw8(r),B.bq,q))
return A.jd(B.hS,B.fQ,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new A.eD(o,q,q))}}
A.aEz.prototype={}
A.SP.prototype={
S(){return new A.bf6(new C.cn(null,x.A),C.a([],x.au),B.aG,B.c)}}
A.bf6.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aF(s,s,s,s,D.lY,s,s,s,new A.dHI(t,d),s,s,s,s,"Share",s)],r),p=C.bw(C.m(18),new C.es(C.aJ(s,C.b1(s,s,s,new A.bh6(t.e,t.x,s),B.fx),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.dHJ(t),new A.dHK(t),s,s,s,s,s,s,s,s,s,new A.dHL(t),s,s,s,s,!1,B.ae),t.d),B.ap),o=C.a([],r)
for(w=0;w<9;++w){v=D.cx6[w]
u=!t.w&&t.f.A(0,v)
o.push(new A.DJ(v,u,new A.dHM(t,v),!1,s))}u=t.r
return A.jd(B.bB,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.B(B.bT,p,s),"DRAW PAD",C.u(C.a([new A.eD(o,s,s),A.ho(B.bB,""+B.k.U(u),"Brush",30,2,new A.dHN(t),u),new A.eD(C.a([new A.dv("Eraser",t.w,new A.dHO(t),B.KD,B.bB,s),new A.ff(B.x0,"Undo",new A.dHP(t),B.c,s),new A.ff(B.e4,"Clear",new A.dHQ(t),B.c,s),new A.ff(B.KP,"Paper",new A.dHR(t),B.c,s)],r),s,s)],r),B.m,s,B.e,B.R,0,B.p))}}
A.bh6.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.a1()
w=C.T()
w.r=this.c.gt(0)
d.bp(new C.af(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.J)(w),++s){r=w[s]
q=$.a1()
p=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
o=r.a
p.r=o.gt(o)
n=r.b
p.c=n
p.d=B.bZ
p.e=B.fj
p.b=B.aj
m=r.c
if(m.length===1){q=B.d.gI(m)
m=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
m.r=o.gt(o)
l=m.M()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=C.a([],t)
k=new C.b_(q.r,B.au,null,null,o)
o.push(new C.bj(B.d.gI(m).a,B.d.gI(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new C.dj(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bI(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new C.aw(B.d.gai(m).a,B.d.gai(m).b)
o.push(q)
o=k.f
if(o!=null)q.bI(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.M()
q=k.e
u.drawPath((q==null?k.e=new C.cG(k.gbM().a.snapshot()):q).a,l)
l.delete()}}},
ao(d){return!0}}
A.TA.prototype={
S(){var w=x.S
return new A.aAC(C.aY(w),C.aY(w))}}
A.aAC.prototype={
Z(){this.a0()
this.aog()},
aog(){var w,v,u=this,t=x.N,s=C.bi(D.cSo,!0,t)
B.d.By(s)
w=x.S
v=C.S(s).c
t=C.z(C.dg(s,0,C.dK(u.d,"count",w),v),t)
B.d.v(t,C.dg(s,0,C.dK(u.d,"count",w),v))
B.d.By(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
bZp(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
A.kY("bell",12+B.o.J(d,9),150,0.35)
s.n(new A.e1D(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gai(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bK(B.nZ,new A.e1E(s,v,u),t)
else{s.x=!0
C.bK(A3.Di,new A.e1F(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,B.aJq,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+B.o.aj(p,2)+" / "+o
o=x.p
p=C.u(C.a([new C.B(B.wj,C.A(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?B.aM:B.ak,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),B.m,q,B.iZ,B.j,0,q,q),q),C.C(C.ig(!0,q,q,B.z,new C.hI(v,8,8,1,q),new A.e1J(r),r.e.length,B.bj,q,B.af,!1),1)],o),B.m,q,B.e,B.j,0,B.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cyu[t]
o.push(new A.dv(s.b,r.d===s.a,new A.e1K(r,s),q,B.b3,q))}o.push(new A.ff(D.bq1,"New game",new A.e1L(r),B.bq,q))
return A.jd(B.b3,B.fQ,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new A.eD(o,q,q))}}
A.TK.prototype={
S(){return new A.aAT(C.a([],x.t))}}
A.aAT.prototype={
bZt(d){B.d.a8(this.d)
this.w=!0
this.aTy()},
aTy(){this.d.push(B.cz.aE(4))
this.e=0
this.Xj()},
Xj(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Xj=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.n(new A.e9m(t))
s=x.H
w=3
return C.b(C.bK(B.lg,null,s),$async$Xj)
case 3:r=t.d,q=C.bi(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aNt(n)
w=7
return C.b(C.bK(new C.b6(1000*Math.max(280,600-r.length*18)),null,s),$async$Xj)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.n(new A.e9n(t))
case 1:return C.h(u,v)}})
return C.i($async$Xj,v)},
aNt(d){this.n(new A.e9k(this,d))
A.kY("marimba",D.ajy[d]+5,450,0.55)
C.bK(B.Dg,new A.e9l(this),x.H)},
bZv(d){var w,v,u=this
if(!u.w||u.r)return
u.aNt(d)
w=u.d
v=u.e
if(w[v]!==d){A.e1(90,"",600,0,0.5,"saw")
u.n(new A.e9o(u))
return}++v
u.e=v
if(v===w.length){u.n(new A.e9p(u))
C.bK(B.ia,new A.e9q(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,E.QK,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.eyd,B.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aqj[v]
u=u.j(q.f===v?1:0.35)
t=new C.b2(28,28)
s=q.f===v?C.a([new C.a9(0,B.G,D.aqj[v].j(0.8),B.J,30)],w):p
r=new C.ay(B.c.j(q.f===v?0.9:0.15),2,B.r,-1)
l.push(C.aJ(p,C.de(p,p,p,p,B.b7,new C.o(u,p,new C.c2(r,r,r,r),new C.bx(t,t,t,t),s,p,B.n),B.ja,p,p,p,p,p,p,p),B.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.e9r(q,v),p,p,p,p,p,p,!1,B.ae))}o=C.at(new C.B(B.a8,C.u(C.a([o,B.ar,n,B.d1,new C.fZ(1,C.lW(1,l,2,12,12,p,B.dJ,!1),p)],m),B.m,p,B.b5,B.j,0,B.p),p),p,p,p)
n=q.w?"Restart":"Start"
return A.jd(B.cX,B.fQ,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new A.eD(C.a([new A.ff(B.iX,n,q.gbZs(q),B.bq,p)],m),p,p))}}
A.U4.prototype={
S(){return new A.bgj(new C.ao(B.aq,$.as()))}}
A.bgj.prototype={
arH(d){return C.oU(B.k.ab(d,2),C.ad("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new A.enE(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d_(C.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new A.enN()
l=C.aI(m,B.T,!1,m,!0,B.q,m,C.aL(),l,m,m,m,m,m,2,C.bn(m,m,m,m,m,m,m,m,!0,new C.b0(4,C.m(16),A0.vv),m,m,m,m,m,m,m,m,m,m,m,new C.b0(4,C.m(16),D.aP4),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.l3,"Bill amount",!0,!0,!1,m,m,m,m,D.evO,"$ ",m,m,m,m,m,m,m,m),B.z,!0,m,!0,m,!1,m,B.ad,m,m,m,m,m,B.e_,m,m,m,1,m,m,!1,"\u2022",m,new A.enJ(n),m,m,m,!1,m,m,!1,m,!0,m,B.a8,m,m,m,m,m,m,m,m,m,m,m,B.aIF,!0,B.a5,m,B.am,m,m,m,m)
k=B.bq.j(0.1)
s=C.m(20)
r=C.H(B.bq.j(0.35),B.r,1)
q=x.p
s=C.cX(C.a([l,B.bv,C.p(m,C.u(C.a([t.$2("Tip ("+B.k.U(n.e)+"%)","$"+n.arH(w)),t.$2("Total","$"+n.arH(v)),Q.Uk,t.$3$big("Each of "+n.f+" pays","$"+n.arH(u),!0)],q),B.m,m,B.e,B.j,0,B.p),B.i,m,m,new C.o(k,m,r,s,m,m,B.n),m,m,m,m,B.c2,m,m,m)],q),m,B.ft,m,m,B.af,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cjN[p]
r.push(new A.dv(""+o+"%",B.k.U(n.e)===o,new A.enK(n,o),m,B.bq,m))}l=n.f
return A.jd(B.bq,B.fQ,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.u(C.a([new A.eD(r,"TIP",m),A.ho(B.b3,""+l,"People",20,1,new A.enL(n),l),new A.eD(C.a([new A.dv("Round up",n.r,new A.enM(n),m,B.aM,m)],q),m,m)],q),B.m,m,B.e,B.R,0,B.p))}}
A.Ty.prototype={
S(){var w=C.a([3,5],x.t)
return new A.bfO(w,B.cz,$,B.bs,0,C.a([],x.X),null,null)}}
A.bfO.prototype={
Z(){this.a0()
this.kG()},
kZ(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(B.o.J(B.k.bK(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aE(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aE(6)+1)
u.f=t
A.a5M("snare",0.5)}u.n(new A.e0i())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hd()
u.w=t
u.x=t?0:3.141592653589793
A.kY("bell",24,400,0.5)}u.n(new A.e0j())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new A.b8W(v,o.r>0,n))}u=C.aJ(n,C.at(C.cf(B.fz,m,B.by,18,18),n,n,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e0b(o),n,n,n,n,n,n,!1,B.ae)}else if(m==="coin"){t=B.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.H(B.dB,B.r,6)
s=C.a([new C.a9(0,B.G,B.aM.j(0.4),B.J,30)],x.V)
u=C.aJ(n,C.at(C.e4(B.C,C.p(B.C,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.ev4,n,n,n),B.i,n,n,new C.o(n,n,v,n,s,D.dQp,B.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e0c(o),n,n,n,n,n,n,!1,B.ae)}else{m=o.as
u=C.aJ(n,C.at(C.u(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.eln,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,B.kb,n,n,n)],x.p),B.m,n,B.e,B.R,0,B.p),n,n,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e0d(o),n,n,n,n,n,n,!1,B.ae)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.cM8[r]
v.push(new A.dv(q.b,o.d===q.a,new A.e0e(o,q),q.c,B.bD,n))}v=C.a([new A.eD(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(A.ho(B.bD,""+s,"Dice",4,1,new A.e0f(o),s))}if(o.d==="num"){s=o.z
s=A.ho(B.bD,""+s,"From",100,1,new A.e0g(o),s)
p=o.Q
B.d.v(v,C.a([s,A.ho(B.bD,""+p,"To",1000,2,new A.e0h(o),p)],m))}return A.jd(B.bD,B.fQ,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.u(v,B.m,n,B.e,B.R,0,B.p))}}
A.b8W.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(B.cz.ah()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.a9(0,B.G,B.x.j(0.4),B.cv,14)],x.V)
t=C.a([],x.p)
for(s=D.d1G.h(0,B.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bE(s[q],p,p,C.p(p,p,B.i,p,p,I.a6P,p,18,p,p,p,p,p,18),p))
return C.eO(B.C,w,C.p(p,new C.am(B.W,p,B.a9,B.q,t,p),B.i,p,p,new C.o(B.c,p,p,v,u,p,B.n),p,100,p,p,B.bC,p,p,100),p)}}
A.aHC.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bsh.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bnC()}}
A.aHU.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bsl.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bnV()}}
A.aIo.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bsv.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.boq()}}
A.aIR.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bsH.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.boT()}}
A.b2H.prototype={
B(d){var w,v=this,u=null,t=v.c,s=D.ay1.h(0,t)
$.c9_=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aF(u,u,u,u,E.qk,u,u,u,new A.cl8(d),u,u,u,u,u,u),C.C(C.d(t,u,1,B.a0,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,B.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
B.d.v(t,v.w)
t.push(C.aF(u,u,u,u,C.U(B.Xm,s,u,u,u,22),u,u,u,new A.cl9(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.B(D.biv,C.A(t,B.m,u,B.e,B.j,0,u,u),u),C.C(v.f,1)],w)
t=v.r
if(t!=null)w.push(C.p(u,t,B.i,u,u,new C.o(D.Tu,u,new C.c2(new C.ay(B.c.j(0.08),1,B.r,-1),B.V,B.V,B.V),u,u,u,B.n),u,u,u,u,B.Dl,u,u,1/0))
return C.cg(u,B.bV,C.br(!0,C.u(w,B.m,u,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),u,!1,!1,u,u)}}
A.dv.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):B.c.j(0.06),o=q?t.r:B.c.j(0.12)
o=C.H(o,B.r,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)B.d.v(v,C.a([C.U(u,q?t.r:B.aP,s,s,s,16),B.ey],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?B.c:B.ak,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.B(D.abS,C.aJ(s,C.de(s,C.A(v,B.m,s,B.e,B.R,0,s,s),s,s,B.b7,new C.o(p,s,o,r,s,s,B.n),B.eC,s,s,s,B.fX,s,s,s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.cl4(t),s,s,s,s,s,s,!1,B.ae),s)}}
A.eD.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a8(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.C(C.ce(C.A(this.c,B.m,w,B.e,B.j,0,w,w),B.q,w,B.z,w,w,w,w,B.b_),1))
return new C.B(B.cR,C.A(v,B.m,w,B.e,B.j,0,w,w),w)}}
A.ast.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.as2(d).cxV(q,B.bG,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.C(C.a7u(C.mq(s,s,s,u,v,t.e,B.k.D(w,v,u)),q),1)
u=t.x
return new C.a8(s,34,C.A(C.a([new C.a8(78,s,r,s),q,new C.a8(38,s,C.d(u==null?B.k.ab(w,1):u,s,s,s,s,s,s,S.Qv,B.dN,s,s),s)],x.p),B.m,s,B.e,B.j,0,s,s),s)}}
A.ff.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.B(D.abS,C.aD(!1,B.X,!0,C.m(12),C.aH(!1,C.m(12),!0,new C.B(A8.ac5,C.A(C.a([C.U(w.c,u,v,v,v,17),B.ey,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.R,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new A.cl3(w),v,v,v,v,v,v,v),B.i,t,0,v,v,v,v,v,B.aa),v)}}
A.DJ.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.ejT:u
w=t?B.c:B.be
w=C.H(w,B.r,t?2.5:1)
return C.aJ(u,C.de(u,u,u,u,B.b7,new C.o(p,u,w,u,t?C.a([new C.a9(0,B.G,v.c.j(0.6),B.J,10)],x.V):u,q,B.a6),B.hE,u,r,D.abU,u,u,u,s),B.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.cla(v),u,u,u,u,u,u,!1,B.ae)}}
A.m6.prototype={
a2c(d,e){var w=C.da()
w.sew(C.cV(C.dA(0,0,0,d,0,0),new A.cl5(this,w,e)))
this.fb$.push(w.b6())},
kG(){var w=this,v=w.qL(new A.cl7(w))
v.ki(0)
w.fa$!==$&&C.aO()
w.fa$=v}}
A.a8s.prototype={
bqV(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.J)(w),++q)for(p=B.d.gaf(w[q]);p.C();){o=p.gT(0)
n=J.a4(o)
if(n.h(o,0)<s)s=n.h(o,0)
if(n.h(o,0)>t)t=n.h(o,0)
if(n.h(o,1)<r)r=n.h(o,1)
if(n.h(o,1)>u)u=n.h(o,1)}g.z!==$&&C.aO()
g.z=s
g.Q!==$&&C.aO()
g.Q=t
g.as!==$&&C.aO()
g.as=r
g.at!==$&&C.aO()
g.at=u
for(m=0,q=0;q<w.length;w.length===p||(0,C.J)(w),++q){for(v=B.d.gaf(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gT(0)
n=J.a4(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aO()
g.ax=m
w=g.bu0()
g.ay!==$&&C.aO()
g.ay=w},
bu0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.J)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
E9(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
k===$&&C.c()
w=!0
if(!(e<k)){k=l.Q
k===$&&C.c()
if(!(e>k)){k=l.as
k===$&&C.c()
if(!(f<k)){k=l.at
k===$&&C.c()
k=f>k}else k=w}else k=w}else k=w
if(k)return!1
for(k=l.y,w=k.length,v=0;v<k.length;k.length===w||(0,C.J)(k),++v){u=k[v]
for(t=u.length-1,s=!1,r=0;r<u.length;q=r+1,t=r,r=q){p=J.q(u[r],0)
o=J.q(u[r],1)
n=J.q(u[t],0)
m=J.q(u[t],1)
if(o>f!==m>f&&e<(n-p)*(f-o)/(m-o)+p)s=!s}if(s)return!0}return!1}}
A.a8t.prototype={
cu3(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.J)(v),++s){r=v[s]
if(r.E9(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
A.ub.prototype={}
A.N9.prototype={}
A.x0.prototype={}
A.N8.prototype={
f8(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.aju[w.aE(7)]
w=w.hd()?0:12
u=B.o.J(t.c++,3)===0?"flute":"bell"
A.kY(u,v+w-12,2200,0.1)}}
A.T4.prototype={
S(){var w=$.as()
return new A.aA_(new C.cn(null,x.A),new C.ao(B.aq,w),new A.N8(B.cz),D.cNX,B.at,D.a_8,$,B.bs,0,C.a([],x.X),null,null)}}
A.aA_.prototype={
Z(){var w,v=this
v.a0()
v.kG()
v.a.toString
w=$.fRv
if(w==null)w=$.fRv=A.cnF()
w.bC(new A.dMU(v),x.P)},
p(){var w=this.e
w.R$=$.as()
w.O$=0
this.bo2()},
cin(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.x)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.J)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.J)(p),++n)q.push(new A.dMm(p[n]).$0())
w.push(q)}this.w=w},
gTS(){var w=this.fy
return w.A(0,B.at)?100:Math.min(w.a,w.b)*0.43},
app(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=B.k.D(f,1,16)
w.Q=w.as=0},
at7(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.app(d.x,d.w,105/Math.max(w,3))
C.eL()
A.kY("bell",(B.d.cP(D.ZK,d.c)+1)*3+12,900,0.45)
A.e1(300,"",280,1.4,0.15,"tri")},
kZ(d){var w,v,u,t,s,r,q,p=this
p.f.f8(0,d,p.db)
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
p.x=B.k.D(p.x+p.as*d,-85,85)
q=Math.exp(-d*2.2)
v=p.Q*=q
p.as*=q
if(p.ch&&Math.abs(v)<3)p.y=p.y+7*d/Math.sqrt(p.z)}while(v=p.y,v>180)p.y=v-360
while(v<-180){v+=360
p.y=v}},
c_9(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,B.at))return null
w=n.fy
v=n.gTS()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gTS()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(B.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cu3((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c_8(d){var w=this,v=w.r
if(v==null||B.a.i(d).length===0){w.n(new A.dMk(w))
return}w.n(new A.dMl(w,v,B.a.i(d).toLowerCase()))},
bGj(){var w=null,v=this.c
v.toString
C.cb(w,w,!0,w,new A.dMi(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aF(n,n,n,n,D.bsI,n,n,n,o.gbGi(),n,n,n,n,"Earth facts",n),C.aF(n,n,n,n,D.lY,n,n,n,new A.dMF(o,d),n,n,n,n,"Share",n)],l),j=C.co(new A.dMG(o,m)),i=B.c.j(0.06)
i=C.a([C.aI(n,B.T,!1,n,!0,B.q,n,C.aL(),o.e,n,n,n,n,n,2,C.bn(n,new C.b0(4,C.m(14),B.V),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,H.BC,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bAu,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.ad,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc_7(),n,n,n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,B.iI,!0,B.a5,n,B.am,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.J)(v),++t){s=v[t]
w.push(new A.dv(s.a,!1,new A.dMH(o,s),B.mC,B.b3,n))}i.push(new C.B(B.jz,new C.a8(n,38,C.cX(w,n,n,n,n,B.b_,!1),n),n))}i.push(B.ar)
w=C.a([new A.dv("Whole Earth",!1,new A.dML(o),B.fY,B.b3,n)],l)
for(v=D.axS.gdH(D.axS),v=v.gaf(v);v.C();){u=v.gT(v)
w.push(new A.dv(u.a,!1,new A.dMM(o,u),n,B.b3,n))}w.push(new A.dv("Random",!1,new A.dMN(o),B.lS,B.b3,n))
i.push(new A.eD(w,"GO TO",n))
w=o.z
i.push(A.ho(B.b3,B.k.ab(w,1)+"x","Zoom",16,0.8,new A.dMO(o),w))
w=o.dy
i.push(A.ho(B.cX,B.a.aU(B.o.u(B.k.bK(w)),2,"0")+":00","Time",24,0,new A.dMP(o),w))
w=o.fr
i.push(A.ho(B.bq,o.cha(),"Season",365,0,new A.dMQ(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?B.ln:D.Ed
i.push(new A.eD(C.a([new A.dv("Spin",w,new A.dMR(o),D.bnT,B.b3,n),new A.dv("Night",v,new A.dMS(o),B.ui,B.b3,n),new A.dv("Borders",u,new A.dMI(o),D.bnX,B.b3,n),new A.dv("Names",r,new A.dMJ(o),Q.aga,B.b3,n),new A.dv("Music",q,new A.dMK(o),p,B.b3,n)],l),n,n))
return A.jd(B.b3,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.u(i,B.m,n,B.e,B.R,0,B.p))},
cha(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.aqY[u])v=u
return B.hV[v]+" "+(B.k.bK(w-D.aqY[v])+1)},
c_6(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new F.mI(1,B.o.J((B.d.cP(D.ZK,t)+1)*47,360),0.55,1).iQ()
r=new A.dMg()
q=C.m(20)
p=C.H(s.j(0.6),B.r,1)
o=x.p
n=C.A(C.a([C.p(j,j,B.i,j,j,new C.o(s,j,j,j,j,j,B.a6),j,10,j,j,j,j,j,10),B.ab,C.C(C.d(d.a,j,1,B.a0,j,j,j,B.dQ,j,j,j),1),C.aF(j,j,j,j,B.Li,j,j,j,new A.dMf(this),j,j,j,j,j,B.c6)],o),B.m,j,B.e,B.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,B.im,j,j,j)
m=D.d0o.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.A(C.a([m,B.ab,r.$2("PEOPLE",l?A.f8Z(v):"\u2014")],o),B.m,j,B.e,B.j,0,j,j)
i=r.$2("SIZE",A.F6(i)+" km\xb2")
if(l)m=(w<10?B.k.ab(w,1):A.F6(w))+" per km\xb2"
else m="\u2014"
m=C.A(C.a([i,B.ab,r.$2("CROWDING",m)],o),B.m,j,B.e,B.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?B.k.ab(u,3):B.k.ab(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.u(C.a([n,t,B.P,v,B.P,m,B.P,C.A(C.a([i,B.ab,r.$2("ECONOMY",l>0?"$"+A.f8Z(l*1e6)+" \xb7 "+k:k)],o),B.m,j,B.e,B.j,0,j,j)],o),B.F,j,B.e,B.R,0,B.p),B.i,j,j,new C.o(D.SW,j,p,q,j,j,B.n),j,j,j,j,D.acp,j,j,j)}}
A.bb8.prototype={
a6(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.a1(),d7=C.T()
d7.r=D.yX.gt(0)
d8.bp(new C.af(0,0,0+d4,0+d5),d7)
w=new C.f9()
w.e2(4)
for(d7=d8.a,v=0;v<90;++v){u=w.ah()
t=w.ah()
s=w.ah()
r=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
r.r=B.c.j(0.25+w.ah()*0.5).gt(0)
q=r.M()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new C.v(d4,d5)
o=d2.f
u=C.T()
t=x.O
u.saz(new C.bT(B.C,0.5,B.w,d3,0,C.a([B.K,B.b3.j(0.35),B.K],t),D.czW,d3).aB(0,C.c1(p,o*1.1)))
d8.aw(p,o*1.05,u)
n=C.c1(p,o)
u=C.T()
u.saz(D.dQt.aB(0,n))
d8.aw(p,o,u)
J.bP(d7.save())
u=x.v
d6=new C.b_(d6.r,B.au,d3,d3,C.a([],u))
d6.N(new C.kt(n))
d8.tg(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=C.T()
g.b=B.aj
m=g.c=0.7
g.r=B.c.j(0.1).gt(0)
f=new A.d4o(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.M()
s=d.e
d7.drawPath((s==null?d.e=new C.cG(d.gbM().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.a1()
a3=C.a([],u)
d=new C.b_(a2.r,B.au,d3,d3,a3)
a3.push(new C.bj(s,r))}else{s=new C.aw(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bI(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.M()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cG(d.gbM().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.M()
s=d.e
d7.drawPath((s==null?d.e=new C.cG(d.gbM().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.a1()
a3=C.a([],u)
d=new C.b_(a2.r,B.au,d3,d3,a3)
a3.push(new C.bj(s,r))}else{s=new C.aw(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bI(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.M()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cG(d.gbM().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=B.o.J((B.d.cP(D.ZK,a7.c)+1)*47,360)
$.a1()
b0=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
a3=a8?0.35:0.5
b0.r=new F.mI(1,a9,a3,a8?1:0.62).iQ().gt(0)
b1=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
b1.b=B.aj
b1.c=a8?2.2:m
b1.e=B.fj
b1.r=(a8?B.c:B.x.j(0.55)).gt(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,C.J)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.a1()
b7=C.a([],u)
b8=new C.b_(b6.r,B.au,d3,d3,b7)
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
if(v===0){b6=new C.bj(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bI(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new C.aw(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bI(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new C.bX()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bI(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.M()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cG(b8.gbM().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.M()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cG(b8.gbM().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.J)(a5),++b3){d=a5[b3]
$.a1()
s=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
s.b=B.aj
s.c=5
s.r=B.c.j(0.25).gt(0)
s.z=B.qs
q=s.M()
s=d.e
d7.drawPath((s==null?d.e=new C.cG(d.gbM().a.snapshot()):s).a,q)
q.delete()}if(d2.z)for(u=d6.length,s=d2.r,r=!(s<1.8),s=14/s,b3=0;b3<d6.length;d6.length===u||(0,C.J)(d6),++b3){a7=d6[b3]
a8=a7===a2
if(!a8)if(r){a3=a7.ax
a3===$&&C.c()
a3=a3<s}else a3=!0
else a3=!1
if(a3)continue
e=a7.x*3.141592653589793/180
a0=a7.w*3.141592653589793/180
if(k*Math.sin(e)+j*Math.cos(e)*Math.cos(a0-l)<0.25)continue
a1=f.$2(e,a0)
if(a1==null)continue
a3=a8?13:10.5
b2=a8?B.c:B.c.j(0.9)
c9=A.hoJ(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbd(b2)
c9.a6(d8,new C.v(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=B.k.D(k*c0+j*c1*c4,-1,1)
$.a1()
u=C.T()
u.saz(new C.bT(B.C,0.5,B.w,d3,0,C.a([B.K,B.K,D.aZ2.j(0.78)],t),D.cOh,d3).aB(0,C.c1(new C.v(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.aw(p,o,u)}$.a1()
d4=C.T()
d4.saz(new C.bT(B.C,0.5,B.w,d3,0,C.a([B.K,B.x.j(0.4)],t),D.cYZ,d3).aB(0,n))
d8.aw(p,o,d4)
d7.restore()
d7=C.T()
d7.b=B.aj
d7.c=1.4
d7.r=B.j7.j(0.5).gt(0)
d8.aw(p,o,d7)},
ao(d){return!0}}
A.aI_.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.aI0.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bo1()}}
A.bpf.prototype={}
A.U6.prototype={
S(){return new A.bgm()}}
A.bgm.prototype={
gaN4(){var w=this.d
if(w===$)w=this.d=B.cz.aE(16)
return w},
B(d){var w=null,v=C.eK(w,w,w,!0,!0,D.yX,w,1,!0,w,0,!1,w,!1,w,w,C.aF(w,w,w,w,D.ai_,w,w,w,new A.eoa(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.eQ6,w,w,w,1,w,!0),u=C.m(18),t=B.b3.j(0.1),s=C.H(B.b3.j(0.35),B.r,1),r=x.p
return C.cg(v,D.yX,C.cX(C.a([C.p(w,C.A(C.a([D.brq,B.av,C.C(C.d(D.cDp[this.gaN4()],w,w,w,w,w,w,D.a4f,w,w,w),1),C.aF(w,w,w,w,D.bBr,w,w,w,new A.eob(this),w,w,w,w,"Another fact",w)],r),B.m,w,B.e,B.j,0,w,w),B.i,w,w,new C.o(t,w,s,u,w,w,B.n),w,w,w,w,B.bC,w,w,w),B.aC,C.co(new A.eoc())],r),w,B.V_,w,w,B.af,!1),w,!1,!1,w,w)}}
A.TT.prototype={
S(){return A.hpa()}}
A.bg9.prototype={
c9m(d){var w=d.c,v=A.hpc(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.v(Math.cos(t)*v,Math.sin(t)*v)},
Z(){this.a0()
this.kG()},
kZ(d){var w,v,u,t=this
t.e.f8(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.c9m(w)
u=new C.v(-v.a,-v.b).aO(0,t.w)
v=C.kZ(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc_a(){var w=this.ch
return new C.v(w.a/2,w.b/2).ap(0,this.x)},
c_e(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.Ay[s]
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
aTU(d){this.n(new A.egA(this,d))
C.eL()
A.kY("bell",D.cZ8[B.o.J(B.d.cP(D.Ay,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aF(m,m,m,m,D.lY,m,m,m,new A.egL(n,d),m,m,m,m,"Share",m)],k),i=C.co(new A.egM(n,l)),h=C.a([new A.dv("All",!1,new A.egN(n),B.XU,B.aM,m)],k)
for(w=0;w<10;++w){v=D.Ay[w]
h.push(new A.dv(v.a,n.z===v,new A.egO(n,v),m,C.bg(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?B.k.ab(s,0)+" d/s":""+B.k.U(s)+" d/s"
t=A.ho(B.aM,s,"Time",1,0,new A.egP(n),u/t)
u=n.w
u=A.ho(B.aM,B.k.ab(u,1)+"x","Zoom",9,0.5,new A.egQ(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?B.ln:D.Ed
return A.jd(B.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.u(C.a([new A.eD(h,"GO TO",m),t,u,new A.eD(C.a([new A.dv("Orbits",s,new A.egR(n),m,B.aM,m),new A.dv("Names",r,new A.egS(n),m,B.aM,m),new A.dv("Asteroids",q,new A.egT(n),m,B.aM,m),new A.dv("Music",p,new A.egU(n),o,B.aM,m)],k),m,m)],k),B.m,m,B.e,B.R,0,B.p))},
c_b(d){var w,v,u,t,s,r=null,q=C.bg(d.z),p=d.c,o=p*8.317,n=new A.egy(),m=C.m(20),l=C.H(q.j(0.6),B.r,1),k=C.p(r,r,B.i,r,r,new C.o(q,r,r,r,r,r,B.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.A(C.a([k,B.ab,C.C(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,B.l2,r,r,r),1),C.aF(r,r,r,r,B.Li,r,r,r,new A.egx(this),r,r,r,r,r,B.c6)],w),B.m,r,B.e,B.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,D.QT,r,r,r)
v=n.$2("WIDTH",A.F6(d.d*2)+" km")
u=p===0
p=C.A(C.a([v,B.ab,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+A.F6(p*149.6)+" million km)")],w),B.m,r,B.e,B.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new A.egz().$1(v))
t=d.f
v=C.A(C.a([v,B.ab,n.$2("ONE DAY",t>=48?B.k.ab(t/24,0)+" Earth days":B.k.ab(t,1)+" hours")],w),B.m,r,B.e,B.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.A(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+B.k.ab(50*t/9.81,s)+" kg"),B.ab,n.$2("TEMPERATURE",""+B.o.U(d.x)+"\xb0C")],w),B.m,r,B.e,B.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?B.k.ab(o,1)+" minutes":B.k.ab(o/60,1)+" hours"
return C.p(r,C.u(C.a([j,B.aw,k,B.P,p,B.P,v,B.P,s,B.P,C.A(C.a([t,B.ab,n.$2("SUNLIGHT TAKES",i)],w),B.m,r,B.e,B.j,0,r,r)],w),B.F,r,B.e,B.R,0,B.p),B.i,r,r,new C.o(D.SW,r,l,m,r,r,B.n),r,r,r,r,D.acp,r,r,r)}}
A.bnk.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.a1()
w=C.T()
w.r=D.yX.gt(0)
a7.bp(new C.af(0,0,0+a5,0+a6),w)
v=new C.f9()
v.e2(8)
for(w=a7.a,u=0;u<110;++u){t=v.ah()
s=v.ah()
r=v.ah()
q=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.2+v.ah()*0.5).gt(0)
p=q.M()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc_a()
n=a5.w
if(a5.as)for(a6=B.d.gaf(D.Ay),t=new C.hX(a6,new A.eHZ()),s=o.a,r=o.b;t.C();){q=a6.gT(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
m.b=B.aj
m.c=1
m.r=B.c.j(0.12).gt(0)
p=m.M()
w.drawCircle(s,r,q*n,p)
p.delete()}if(a5.ax)for(a6=a5.CW,t=o.a,s=o.b,r=a5.cx,u=0;u<a6.length;++u){q=a6[u]
m=a5.f
l=r[u]
k=q+m*0.0016/l
j=(l===0?0:30+150*Math.sqrt(l/30.1))*n
q=Math.cos(k)
m=Math.sin(k)
l=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
l.r=B.c.j(0.5).gt(0)
p=l.M()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=A.hpb(B.d.gI(D.Ay))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.T()
s=x.O
t.saz(new C.bT(B.C,0.5,B.w,a4,0,C.a([B.aM.j(0.5),B.K],s),a4,a4).aB(0,C.c1(o,a6)))
a7.aw(o,a6,t)
t=C.T()
t.saz(D.dQn.aB(0,C.c1(o,i)))
a7.aw(o,i,t)
if(a5.at){h=A.fT5("Sun",10.5,B.ak)
h.a6(a7,o.ap(0,new C.v(-h.b.c/2,i+4)))}for(a6=B.d.gaf(D.Ay),t=new C.hX(a6,new A.eI_()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gT(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=C.bg(l.z)
d=l.a
if(d==="Saturn"){J.bP(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=C.dy(B.J,j*1.3,j*4.2)
a1=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
a1.b=B.aj
a1.c=j*0.45
a1.r=B.bJ.j(0.55).gt(0)
p=a1.M()
w.drawOval(C.cz(a0),p)
p.delete()
w.restore()}a0=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
a0.r=e.j(0.3).gt(0)
a0.z=B.qs
p=a0.M()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
a1=C.aq(e,B.x,0.55)
a1.toString
a0.saz(new C.bT(N.qT,0.5,B.w,a4,0,C.a([B.c,e,a1],s),G.Zn,a4).aB(0,C.c1(new C.v(g,f),j)))
p=a0.M()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
l.b=B.aj
l.c=2
l.r=B.c.gt(0)
p=l.M()
w.drawCircle(g,f,j+7,p)
p.delete()}if(r&&d==="Earth"){k=a5.f/27.3*2*3.141592653589793
a2=j+11*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
a3.r=B.c.gt(0)
p=a3.M()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.cI7[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
a3.r=B.ak.gt(0)
p=a3.M()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=A.fT5(d,10.5,B.ak)
h.a6(a7,new C.v(g+-h.b.c/2,f+(j+4)))}}},
ao(d){return!0}}
A.T5.prototype={
S(){var w=x.i
return new A.aA0(new A.N8(B.cz),C.bS(5,0,!1,w),C.bS(5,0,!1,w),C.bS(5,null,!1,x.cD),B.J,B.J,C.a([],x.g),$,B.bs,0,C.a([],x.X),null,null)}}
A.aA0.prototype={
clu(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c_d(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.dHK
s.cy=new C.v(s.ay,0)
w=s.db
B.d.a8(w)
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
A.e1(150,"",400,0,0.5,"noise")
A.e1(90,"",300,1.5,0.6,"sine")
s.n(new A.dMY())},
Z(){this.a0()
this.kG()},
kZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.f8(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.xo[r]
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
if(q.a!=="Sun")A.e1(60+p*5,"",220,0.6,0.55,"sine")
break}}}if(B.d.e7(s,new A.dNq()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
i.cy=new C.v(k,s)
k=p+k*w
s=t+s*w
i.cx=new C.v(k,s)
j=Math.sqrt(k*k+s*s)
s=i.cy
k=i.cx
t=-398600/(j*j*j)
p=k.a
k=k.b
i.cy=new C.v(s.a+p*t*v,s.b+k*t*v)
i.dy+=w
if(Math.sqrt(p*p+k*k)<6371){i.CW=!1
A.e1(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||B.d.gai(v).aD(0,i.cx).gcr()>120)v.push(i.cx)
if(v.length>700)B.d.ct(v,0)
if(i.cx.gcr()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bED()
else n=n==="weight"?p.csn():p.bx5()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.cWE[u]
v.push(new A.dv(t.b,p.d===t.a,new A.dNc(p,t),t.c,B.dg,o))}v=C.a([new A.eD(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new A.dv("Hammer",!s,new A.dNd(p),A6.Xl,B.dg,o),new A.dv("Feather",s,new A.dNe(p),Q.WV,B.dg,o),new A.dv(q,r,new A.dNi(p),B.E2,B.b3,o)],w)
q=p.w
B.d.v(v,C.a([new A.eD(r,o,o),A.ho(B.dg,""+B.k.U(q*100)+"%","Slow motion",1,0.05,new A.dNj(p),q),new A.eD(C.a([new A.ff(B.ul,"Drop!",new A.dNk(p),B.bq,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=A.ho(B.dg,""+B.k.U(s)+" kg","Your weight",120,20,new A.dNl(p),s)
r=p.ax
B.d.v(v,C.a([s,A.ho(B.dg,""+B.k.U(r*100)+" cm","Your jump",1.2,0.1,new A.dNm(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=A.ho(B.dg,B.k.ab(s,1)+" km/s","Speed",13,0,new A.dNn(p),s)
r=p.ch
B.d.v(v,C.a([s,A.ho(B.dg,B.k.ab(r,1)+"x out","View",8,0.5,new A.dNo(p),r),new A.eD(C.a([new A.ff(B.lW,"Fire!",p.gc_c(),B.bq,o),new A.ff(B.ul,"Falls",new A.dNp(p),B.c,o),new A.ff(B.rI,"Orbit 7.7",new A.dNf(p),B.c,o),new A.ff(D.bqS,"Oval 9",new A.dNg(p),B.c,o),new A.ff(B.Ef,"Escape",new A.dNh(p),B.c,o)],w),o,o)],w))}return A.jd(B.dg,B.fQ,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.u(v,B.m,o,B.e,B.R,0,B.p))},
bED(){return new C.B(D.bdE,C.co(new A.dMX(this)),null)},
csn(){var w,v,u,t=null,s=[D.e2O,D.e44,D.e4c,D.e4u,D.e4a,D.e4y,D.e3j,D.e4Q,D.e3R],r=x.p,q=C.a([D.eF7,B.U],r)
for(w=0;w<9;++w){v=s[w]
u=C.bg(v.c)
q.push(new C.B(B.cR,new C.cF(B.b_,B.e,B.j,B.m,t,B.p,t,0,C.a([new C.a8(62,t,new C.w(v.a,t,new C.F(!0,u,t,t,t,t,12.5,B.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bI(1,B.bt,new C.A3(new A.dMZ(this,v),t),t)],r),t),t))}q.push(B.aw)
q.push(D.eH9)
return C.cX(q,t,B.iU,t,t,B.af,!1)},
bx5(){return C.co(new A.dMV(this))}}
A.b6s.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.a1(),e=C.T()
e.r=D.yX.gt(0)
d.bp(new C.af(0,0,0+h,0+g),e)
w=new C.f9()
w.e2(2)
for(e=d.a,v=0;v<80;++v){u=w.ah()
t=w.ah()
s=w.ah()
r=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
r.r=B.c.j(0.2+w.ah()*0.5).gt(0)
q=r.M()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=C.T()
e.saz(new C.bT(B.C,0.5,B.w,i,0,C.a([B.K,B.b3.j(0.35),B.K],x.O),D.cP5,i).aB(0,C.c1(g,p*1.1)))
d.aw(g,p*1.06,e)
e=C.T()
e.saz(D.dQk.aB(0,C.c1(g,p)))
d.aw(g,p,e)
o=g.ap(0,new C.v(0,-p))
f=f.r
e=x.v
n=new C.b_(f,B.au,i,i,C.a([],e))
u=o.a
t=o.b
s=t+3
n.N(new C.bj(u-16,s))
n.N(new C.aw(u,t-400*h-4))
n.N(new C.aw(u+16,s))
n.N(new C.bX())
s=C.T()
s.r=B.ai.gt(0)
d.b4(n,s)
s=o.ap(0,new C.v(0,-400*h-6))
u=C.T()
u.r=B.c.gt(0)
d.aw(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.b_(f,B.au,i,i,e)
f=g.a
t=g.b
m.N(new C.bj(f+B.d.gI(u).a*h,t+B.d.gI(u).b*h))
for(u=C.dg(u,1,i,C.S(u).c),s=u.$ti,u=new C.bR(u,u.gH(0),s.k("bR<ai.E>")),s=s.k("ai.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.aw(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bI(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.a1()
f=C.T()
f.b=B.aj
f.c=2.4
f.d=B.bZ
f.r=B.dg.j(0.9).gt(0)
d.b4(m,f)}if(j.f){f=j.d
k=g.ap(0,new C.v(f.a*h,f.b*h))
h=C.T()
h.r=B.dg.j(0.4).gt(0)
h.z=H.pe
d.aw(k,7,h)
h=C.T()
h.r=B.c.gt(0)
d.aw(k,4,h)}},
ao(d){return!0}}
A.TL.prototype={
S(){return new A.bg6(new C.cn(null,x.A),$,B.bs,0,C.a([],x.X),null,null)}}
A.bg6.prototype={
Z(){this.a0()
this.kG()},
kZ(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Nf[l.e],i=D.Nf[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aF(k,k,k,k,D.lY,k,k,k,new A.e9u(l,d),k,k,k,k,"Share",k)],u)
s=C.C(C.b1(k,k,k,new A.bmU(f,g,v,k),B.fx),1)
r=g.a
q=v<10?B.k.ab(v,1):A.F6(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,B.jp,B.L,k,k)
o=A.F6(v*v*v)
n=B.a.c5(p,"s")?"":"s"
h=C.u(C.a([s,C.p(k,C.u(C.a([q,B.aw,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,G.aIV,B.L,k,k),B.bw,C.d(p+": "+A.F6(w*2)+" km wide. "+r+": "+A.F6(h*2)+" km wide.",k,k,k,k,k,k,A2.a3Q,B.L,k,k)],u),B.m,k,B.e,B.j,0,B.p),B.i,k,k,k,k,k,k,k,D.bfL,k,k,1/0)],u),B.m,k,B.e,B.j,0,B.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.Nf[m]
r.push(new A.dv(w.a,l.e===m,new A.e9v(l,m),k,C.bg(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.Nf[m]
w.push(new A.dv(s.a,l.f===m,new A.e9w(l,m),k,C.bg(s.c),k))}return A.jd(B.cd,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.es(h,l.d),"SIZE COMPARE",C.u(C.a([new A.eD(r,"FIRST",k),new A.eD(w,"SECOND",k)],u),B.m,k,B.e,B.R,0,B.p))}}
A.bmU.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.a1()
w=C.T()
w.r=D.Tn.gt(0)
d.bp(new C.af(0,0,0+h,0+g),w)
v=new C.f9()
v.e2(6)
for(w=d.a,u=0;u<70;++u){t=v.ah()
s=v.ah()
r=v.ah()
q=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.2+v.ah()*0.4).gt(0)
p=q.M()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new C.v(h,g)
w=new A.eG7(d)
t=this.c
w.$3(m,o,C.bg(t.c))
s=o-n
l=new C.v(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,C.bg(s.c))
w=C.T()
w.b=B.aj
w.c=1.4
w.r=B.ak.gt(0)
d.aw(l,n+3,w)
k=C.jF(i,i,i,i,C.dw(i,i,i,i,i,i,i,i,i,D.erA,s.a),B.a5,B.cp,i,B.f3,B.co)
k.fK()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbd(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbd(g)-6
h=g}k.a6(d,l.ap(0,new C.v(-w/2,h)))
j=C.jF(i,i,i,i,C.dw(i,i,i,i,i,i,i,i,i,D.euH,t.a),B.a5,B.cp,i,B.f3,B.co)
j.fK()
t=j.b
h=t.c
t=t.a.c
j.a6(d,m.ap(0,new C.v(-h/2,-t.gbd(t)/2)))},
ao(d){return!0}}
A.aI1.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bsn.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bo3()}}
A.aIA.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bsB.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.boC()}}
A.aID.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bsD.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.boF()}}
A.NB.prototype={}
A.S9.prototype={
S(){return A.hp8()}}
A.beR.prototype={
Z(){this.a0()
this.kG()},
kZ(d){var w,v,u,t,s,r=this
r.f+=d
r.e.f8(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
A.e1(70,"",500,0.3,0.5,"sine")}}B.d.bk(w,new A.dvB())},
aTV(d){var w,v,u,t=this.Q
if(t.A(0,B.at))return
w=this.gb1o()
v=d.aD(0,new C.v(t.a/2,t.b*0.42))
u=B.k.D(v.gcr()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new A.NB(t,u,1.2,new C.xQ(1,30+B.cz.ah()*40,0.9,0.7).iQ()))
A.kY("bell",60+B.k.U(12-u)*2,400,0.35)},
gb1o(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/B.k.D(m.length===0?3:new C.I(m,new A.dvp(),C.S(m).k("I<1,P>")).fq(0,B.vB),1.0001,99))
m=x.p
w=C.a([C.aF(n,n,n,n,D.lY,n,n,n,new A.dvq(o,d),n,n,n,n,"Share",n)],m)
v=C.co(new A.dvr(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?B.k.ab(s,0)+" Suns":A.f8Z(s)+" Suns"
t=A.ho(B.bD,s,"Mass",1,0,new A.dvt(o),u/t)
u=C.a([new A.dv("Star (10)",!1,new A.dvu(o),n,B.bD,n),new A.dv("Cygnus X-1 (21)",!1,new A.dvv(o),n,B.bD,n),new A.dv("Milky Way core (4 million)",!1,new A.dvw(o),n,B.bD,n),new A.dv("M87 (6.5 billion)",!1,new A.dvx(o),n,B.bD,n)],m)
s=o.w
r=o.x
q=o.y
p=q?B.ln:D.Ed
return A.jd(B.bD,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.u(C.a([t,new A.eD(u,"LIKE",n),new A.eD(C.a([new A.dv("Glowing ring",s,new A.dvy(o),n,B.bD,n),new A.dv("Bent light",r,new A.dvz(o),n,B.bD,n),new A.dv("Music",q,new A.dvA(o),p,B.bD,n),new A.ff(B.jE,"Clear",new A.dvs(o),B.c,n)],m),n,n)],m),B.m,n,B.e,B.R,0,B.p))},
abi(d,e){var w=null
return C.C(C.u(C.a([C.d(d,w,w,w,w,w,w,D.enF,w,w,w),B.bw,C.d(e,w,2,w,w,w,w,M.aII,B.L,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),1)}}
A.b5Q.prototype={
a6(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.a1()
w=C.T()
w.r=D.b4W.gt(0)
b2.bp(new C.af(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.v(w,v)
t=this.b
s=t.gb1o()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.J)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new C.v(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+B.k.D(o/h,0,n)
i=new C.v(w+k/h*g,v+j/h*g)}}k=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
k.r=B.c.j(0.6).gt(0)
f=k.M()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=C.T()
b0.b=B.aj
b0.c=2
b0.r=B.c.j(0.25).gt(0)
b0.z=E.a06
b2.aw(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(B.vQ,B.h8,d)
n.toString
k=Math.cos(a4)
$.a1()
j=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gt(0)
f=j.M()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
k.r=n.j(b1).gt(0)
f=k.M()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.a1()
b1=C.T()
b1.saz(new C.bT(B.C,0.5,B.w,null,0,C.a([B.x,B.x.j(0)],x.O),D.cvq,null).aB(0,C.c1(u,b0)))
b2.aw(u,b0,b1)
b1=C.T()
b1.r=B.x.gt(0)
b2.aw(u,s,b1)
b1=C.T()
b1.b=B.aj
b1.c=1
b1.r=B.bD.j(0.55).gt(0)
b2.aw(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,C.J)(b0),++m){a7=b0[m]
a0=s*a7.b
t=w+Math.cos(a7.a)*a0
r=v+Math.sin(a7.a)*a0*0.9
a8=1+B.k.D(3.5/a7.b,0,5)
a9=3*a8
q=-Math.sin(a7.a)*a9
o=Math.cos(a7.a)*a9
n=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
n.c=4.2/Math.sqrt(a8)
n.d=B.bZ
k=a7.d
n.r=k.j(B.k.D(a7.b/2,0.2,1)).gt(0)
f=n.M()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
o.r=k.j(0.2).gt(0)
o.z=H.pe
f=o.M()
p.drawCircle(t,r,6,f)
f.delete()}},
ao(d){return!0}}
A.ac7.prototype={}
A.T1.prototype={
S(){var w=x.r,v=x.g
return new A.bff(new C.cn(null,x.A),new A.N8(B.cz),C.a([],w),B.J,B.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),B.J,B.J,$,B.bs,0,C.a([],x.X),null,null)}}
A.bff.prototype={
Z(){this.a0()
this.Xw()
this.kG()},
Xw(){var w,v,u,t,s,r,q,p,o=this,n=new C.f9()
n.e2(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.ah(),1.6)
w.push(new A.ac7(t,n.ah()*3.141592653589793*2,(n.ah()-0.5)*0.5*t,25+n.ah()*20))}else{t=Math.pow(n.ah(),0.8)
s=n.aE(o.f)
r=n.ah()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hd()?0:3.141592653589793
q=r+(n.ah()-0.5)*0.25}r=n.ah()
p=t<0.25?35+n.ah()*15:205+n.ah()*50
w.push(new A.ac7(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cll(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.dIF
k.cx=D.dII
w=new C.f9()
w.e2(9)
v=k.cy
B.d.a8(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new A.ac7(Math.pow(w.ah(),0.8)*0.7,w.ah()*3.141592653589793*2,0,320+w.ah()*30))
B.d.v(v,u)
u=x.g
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.J)(v),++q){p=v[q]
o=p.b
n=p.a
s.push(new C.v(Math.cos(o)*n,Math.sin(o)*n))}k.dx=s
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.J)(v),++q){p=v[q]
o=p.b
n=p.a+0.2
s.push(new C.v(-Math.sin(o)*0.55/Math.sqrt(n),Math.cos(o)*0.55/Math.sqrt(n)))}k.fr=s
v=C.a([],u)
for(s=k.ay,r=x.S,s=C.dg(s,0,C.dK(900,"count",r),C.S(s).c),o=s.$ti,s=new C.bR(s,s.gH(0),o.k("bR<ai.E>")),o=o.k("ai.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.v(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.dg(u,0,C.dK(900,"count",r),C.S(u).c),r=u.$ti,u=new C.bR(u,u.gH(0),r.k("bR<ai.E>")),r=r.k("ai.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.v(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=B.J
A.e1(110,"",900,0.5,0.45,"sine")},
kZ(d){var w,v,u,t,s,r,q,p=this
p.e.f8(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aD(0,p.fx)
s=Math.max(0.25,t.gcr())
r=t.eV(0,s).aO(0,0.9/(s*s))
w=p.fy.ap(0,r.aO(0,u))
p.fy=w
v=p.cx.aD(0,r.aO(0,u))
p.cx=v
w=p.fx.ap(0,w.aO(0,u))
p.fx=w
v=p.CW.ap(0,v.aO(0,u))
p.CW=v
q=new A.dLv(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aF(r,r,r,r,D.lY,r,r,r,new A.dLl(s,d),r,r,r,r,"Share",r)],q),o=C.b1(r,r,r,new A.baZ(s,r),B.at),n=B.x.j(0.5),m=C.m(14),l=C.H(B.bG,B.r,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.an(8,C.p(r,C.d(w,r,r,r,r,r,r,A5.a3u,r,r,r),B.i,r,r,new C.o(n,r,l,m,r,r,B.n),r,r,r,r,B.bT,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.cL0[v]
o=s.Q===u.a&&!s.ch
l.push(new A.dv(u.b,o,new A.dLm(s,u),r,B.fU,r))}l.push(new A.dv("Collide",s.ch,new A.dLn(s),B.wG,B.cd,r))
o=C.a([new A.eD(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=A.ho(B.fU,""+n,"Arms",6,2,new A.dLo(s),n)
l=s.r
B.d.v(o,C.a([n,A.ho(B.fU,B.k.ab(l,1),"Winding",6,0.8,new A.dLp(s),l)],q))}n=s.as
o.push(A.ho(B.fU,""+B.k.U(n*90)+"\xb0","Tilt",1,0.15,new A.dLq(s),n))
n=s.ax
o.push(A.ho(B.fU,B.k.ab(n,1)+"x","Speed",4,0,new A.dLr(s),n))
n=s.x
l=s.z
w=s.y
t=w?B.ln:D.Ed
o.push(new A.eD(C.a([new A.dv("Dark matter",n,new A.dLs(s),r,B.bD,r),new A.dv("You are here",l,new A.dLt(s),r,B.aM,r),new A.dv("Music",w,new A.dLu(s),t,B.fU,r)],q),r,r))
return A.jd(B.fU,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.es(new C.am(B.W,r,B.aX,B.q,m,r),s.d),"GALAXY",C.u(o,B.m,r,B.e,B.R,0,B.p))}}
A.baZ.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.a1()
w=C.T()
w.r=D.b6B.gt(0)
a3.bp(new C.af(0,0,0+a1,0+a2),w)
v=new C.f9()
v.e2(3)
for(w=a3.a,u=0;u<90;++u){t=v.ah()
s=v.ah()
r=v.ah()
q=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.15+v.ah()*0.4).gt(0)
p=q.M()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new C.v(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=C.T()
t.saz(new C.bT(B.C,0.5,B.w,a0,0,C.a([B.az.j(0.32),B.az.j(0.12),B.K],x.O),D.bUA,a0).aB(0,C.c1(o,a2)))
a3.aw(o,a2,t)}m=new A.d1w(a1.as)
a2=n*0.3
t=C.T()
t.saz(new C.bT(B.C,0.5,B.w,a0,0,C.a([B.hA.j(0.85),B.aZ.j(0.3),B.K],x.O),a0,a0).aB(0,C.c1(o,a2)))
a3.aw(o,a2,t)
if(!a1.ch){l=C.T()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.J)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=B.k.J(q,360)
l.r=new F.mI(1,r,q>200?0.45:0.55,1).iQ().j(0.35+(1-s)*0.5).gt(0)
s=s<0.3?1.3:1
p=l.M()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.a1()
a2=C.T()
a2.b=B.aj
a2.c=1.6
a2.r=B.aM.gt(0)
a3.aw(g,9,a2)
f=C.jF(a0,a0,a0,a0,D.ekX,B.a5,B.cp,a0,B.f3,B.co)
f.fK()
f.a6(a3,g.ap(0,new C.v(-f.b.c/2,12)))}}else{e=n*0.8
l=C.T()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.J)(a2),++k){d=a2[k]
l.r=D.b7y.j(0.6).gt(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.M()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.J)(a2),++k){d=a2[k]
l.r=D.b3m.j(0.6).gt(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.M()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.a1()
w=C.T()
w.r=B.hA.gt(0)
a3.aw(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.T()
w.r=B.i3.gt(0)
a3.aw(a1,5,w)}},
ao(d){return!0}}
A.TH.prototype={
S(){return new A.bg5(new C.cn(null,x.A),new A.N8(B.cz),$,B.bs,0,C.a([],x.X),null,null)}}
A.bg5.prototype={
Z(){this.a0()
this.kG()},
kZ(d){var w,v,u,t=this
t.e.f8(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=B.k.J(t.r+d*0.04*v,1)
else{w=B.k.J(t.w+d*0.05*v,1)
t.w=w
u=B.k.bK(w*4)
if(u!==B.k.bK(t.as))A.kY("bell",60+u*4,500,0.35)
t.as=u}},
gch9(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gc80(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aF(q,q,q,q,D.lY,q,q,q,new A.e9a(r,d),q,q,q,q,"Share",q)],p),n=C.C(new C.es(C.b1(q,q,q,new A.bmb(r,q),B.fx),r.d),1)
if(r.f==="seasons")w=r.gch9()
else{w=r.gc80()
v=B.k.aj(B.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.u(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,T.GT,B.L,q,q),B.i,q,q,q,q,q,q,q,E.acy,q,q,1/0)],p),B.m,q,B.e,B.j,0,B.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?V.wT:B.iX
t=r.Q
s=t?B.ln:D.Ed
s=C.a([new A.eD(C.a([new A.dv("Seasons",n==="seasons",new A.e9b(r),B.x5,B.bo,q),new A.dv("Moon phases",n==="moon",new A.e9c(r),B.ui,B.bo,q),new A.dv(u,!1,new A.e9d(r),v,B.bo,q),new A.dv("Music",t,new A.e9e(r),s,B.bo,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=A.ho(B.bo,D.cKm[B.o.J(B.k.bK(n*12),12)],"Month",1,0,new A.e9f(r),n)
v=r.z
B.d.v(s,C.a([n,A.ho(B.bo,B.k.ab(v,1)+"\xb0","Tilt",90,0,new A.e9g(r),v)],p))}else{p=r.w
s.push(A.ho(B.bo,""+(B.k.bK(p*29.5)+1),"Day of month",1,0,new A.e9h(r),p))}p=r.y
s.push(A.ho(B.bo,B.k.ab(p,1)+"x","Speed",4,0.2,new A.e9i(r),p))
return A.jd(B.bo,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.u(s,B.m,q,B.e,B.R,0,B.p))}}
A.bmb.prototype={
a6(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.a1(),b8=C.T()
b8.r=D.yX.gt(0)
b9.bp(new C.af(0,0,0+b5,0+b6),b8)
w=new C.f9()
w.e2(4)
for(b8=b9.a,v=0;v<70;++v){u=w.ah()
t=w.ah()
s=w.ah()
r=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
r.r=B.c.j(0.2+w.ah()*0.4).gt(0)
q=r.M()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new C.v(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=C.dy(p,n*2,o*2)
t=C.T()
t.b=B.aj
t.c=1
t.r=B.be.gt(0)
b9.lf(u,t)
t=C.T()
t.saz(D.dQl.aB(0,C.c1(p,34)))
b9.aw(p,22,t)
m=s.r*2*3.141592653589793
l=p.ap(0,new C.v(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aD(0,l).eV(0,p.aD(0,l).gcr())
J.bP(b8.save())
b8.translate(l.a,l.b)
s=C.T()
s.r=D.b4S.gt(0)
b9.aw(B.J,k,s)
J.bP(b8.save())
b7=new C.b_(b7.r,B.au,b4,b4,C.a([],x.v))
b7.N(new C.kt(C.c1(B.J,k)))
b9.tg(0,b7)
b7=i.aO(0,k).aO(0,0.35)
s=k*1.1
b6=C.T()
b6.saz(D.dQs.aB(0,C.c1(B.J,s)))
b9.aw(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.v(s,b6)
b7=new C.v(-s,-b6).aO(0,k).aO(0,1.7)
b5=h.aO(0,k).aO(0,1.7)
t=C.T()
t.c=2
t.r=B.cJ.gt(0)
b9.bU(b7,b5,t)
t=h.aO(0,k).aO(0,1.7)
b5=C.T()
b5.r=B.cJ.gt(0)
b9.aw(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.jF(b4,b4,b4,b4,C.dw(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aK2,b5),B.a5,B.cp,b4,B.f3,B.co)
f.fK()
f.a6(b9,l.ap(0,new C.v(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.T()
r.b=B.aj
r.c=1
r.r=B.be.gt(0)
b9.aw(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
a0.r=B.aM.j(0.6).gt(0)
a0.c=2
q=a0.M()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.T()
r.saz(new C.bT(new C.d4(-0.5,0),1.1,B.w,b4,0,C.a([D.b18,D.aaG],x.O),D.cCs,b4).aB(0,C.c1(p,k)))
b9.aw(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ap(0,new C.v(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.T()
r.r=D.aZV.gt(0)
b9.aw(a1,a2,r)
J.bP(b8.save())
b7=b7.r
r=x.v
d=new C.b_(b7,B.au,b4,b4,C.a([],r))
d.N(new C.kt(C.c1(a1,a2)))
b9.tg(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.T()
a3.r=B.cg.gt(0)
b9.bp(new C.af(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aD(0,p).eV(0,a1.aD(0,p).gcr())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=D.bUz[a5]
a7=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
a7.r=B.b3.j(0.45).gt(0)
a7.z=B.jf
q=a7.M()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.v(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.T()
b6.r=D.aZR.gt(0)
b9.aw(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bP(b8.save())
b6=new C.b_(b7,B.au,b4,b4,C.a([],r))
b6.N(new C.kt(C.c1(a8,a9)))
b9.tg(0,b6)
s=s.w
b1=new C.b_(b7,B.au,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.N(new C.bj(u,b5))
b6=b2>0
b1.axY(new C.v(u,t+a9),b6,new C.b2(a9,a9))
if(b0<0.5)b6=b2<0
b1.axY(new C.v(u,b5),b6,new C.b2(a9*Math.abs(1-2*b0),a9))
b6=C.T()
b6.r=B.cg.gt(0)
b9.b4(b1,b6)
b8.restore()
b8=C.T()
b8.b=B.aj
b8.c=1
b8.r=B.be.gt(0)
b9.aw(a8,a9,b8)
b3=C.jF(b4,b4,b4,b4,D.ekY,B.a5,B.cp,b4,B.f3,B.co)
b3.fK()
b3.a6(b9,a8.ap(0,new C.v(-b3.b.c/2,a9+6)))}},
ao(d){return!0}}
A.aHz.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bsg.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bnz()}}
A.aHX.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bsm.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.bnY()}}
A.aIz.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
A.bsA.prototype={
p(){var w,v,u
for(w=this.fb$,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].a9(0)
w=this.fa$
w===$&&C.c()
w.p()
this.boB()}}
var z=a.updateTypes(["~()","R(v8)","R(a20)","R(AY)","av<~>()","G(v8,G)","R(AU)","R(WY)","R(ub)","P(P,v8)","R(a0K)","R(mS)","R(Yt)","R(a9z)","G(G)","R(a8M)","Sd()","SA()","SQ()","S5()","T3()","Tm()","To()","Se()","TF()","TU()","TG()","TE()","U0()","R(pZ)","U5()","Sf()","Tz()","TD()","acc(Z,G)","ab7(Z,G)","~(a0<@,@>)","G(AU,AU)","n(mO)","R(ac2)","R(Z8)","R(B7)","R(a9g)","R(abb)","R(a9_)","G(G,q8)","G(G,AY)","n(q8)","~(q8,al<n>,G)","q8?(AY)","R(q8)","r(n,YX)","R(NT)","~(zg)","R(a96)","P(G?)","U6()","P(NB)","R(aan)","P(G)","SR()","~(b6)","R(a7I)","Th()","Sa()","~(n,v8)","a5N()","Ua()","SY()","Sb()","SP()","TA()","TK()","U4()","Ty()","~(n)","cu(a8t)","R(a8s)","T4()","TT()","T5()","S9()","T1()","TL()","TH()","TC()","R(NB)","R(Ea)"])
A.faZ.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+29}
A.f2S.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+B.d.gI(d.e.split(". "))+"."},
$S:z+38}
A.f8p.prototype={
$1(d){var w
if(!this.a.b8X(d))w=Math.abs(d.at)>0.002||d.ax>0.05
else w=!1
return w},
$S:z+1}
A.f8q.prototype={
$1(d){return d.x},
$S:z+1}
A.faW.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
A.faX.prototype={
$1(d){var w
if(!this.a.b8X(d))w=d.ax>0.05||Math.abs(d.at)>0.002
else w=!1
return w},
$S:z+1}
A.faY.prototype={
$2(d,e){var w=Math.abs(e.at)
return w>d?w:d},
$S:z+9}
A.dUb.prototype={
$0(){return this.a.ax=!0},
$S:0}
A.dUc.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.V(this.b,this.c))},
$S:0}
A.dUd.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=B.d.gcW(v).Q
v.toString
w.m1(v,B.dW,B.iz)}},
$S:8}
A.dUo.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
B.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
A.dUp.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
A.dUk.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
A.dUi.prototype={
$2(d,e){var w=this.a
w.r.push(C.cV(C.dA(0,0,0,d,0,0),new A.dUj(w,this.b,e)))},
$S:1783}
A.dUj.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
A.dUl.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.d.agc(0,u[1],u[2],u[3])
u[4].bD(0,new A.dUg(t))
v.e.m(0,t.a,0)
w.d.m(0,u[0],t)
A.e1(700+w.e*120,"",80,0,0.25,"square")
v.n(new A.dUh(w.a,v,w.f,w.r))},
$S:0}
A.dUg.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:188}
A.dUh.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=B.o.D(B.k.bK(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
A.dUm.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.d.ayG(t,u[1],s,u[3])
A.e1(1500,"",45,0,0.25,"tri")
v=w.b
v.n(new A.dUf(w.a,v,w.e,w.f))},
$S:0}
A.dUf.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=B.o.D(B.k.bK(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
A.dUn.prototype={
$0(){A.e1(300,"",360,-1.2,0.3,"square")
var w=this.a
w.n(new A.dUe(w,this.b))},
$S:0}
A.dUe.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
A.dUs.prototype={
$0(){var w=this.a
return w.n(new A.dUr(w))},
$S:0}
A.dUr.prototype={
$0(){return this.a.at=!0},
$S:0}
A.dUt.prototype={
$0(){var w=this.a
return w.n(new A.dUq(w))},
$S:0}
A.dUq.prototype={
$0(){return this.a.at=!1},
$S:0}
A.dUu.prototype={
$0(){var w=this.a
w.f.saR(0,this.b)
w.LG()},
$S:0}
A.dUv.prototype={
$0(){return this.a.VL(this.b)},
$S:0}
A.dUw.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.LG():w.aQc()},
$S:2}
A.dUx.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.LG():w.aQc()},
$S:0}
A.e7P.prototype={
$2(d,e){return d+e},
$S:1784}
A.e88.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.e87(w,d))},
$S:132}
A.e87.prototype={
$0(){var w=C.aQ(J.q(this.b,"unlocked"))
w=w==null?null:B.k.L(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
A.e89.prototype={
$0(){},
$S:0}
A.e8a.prototype={
$0(){},
$S:0}
A.e7R.prototype={
$0(){return this.a.n(new A.e7Q(this.b,this.c))},
$S:0}
A.e7Q.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.e7G.prototype={
$1(d){return this.a.cx===d},
$S:64}
A.e7H.prototype={
$1(d){return this.a.cx=d},
$S:27}
A.e7I.prototype={
$1(d){return this.a.cy===d},
$S:64}
A.e7J.prototype={
$1(d){return this.a.cy=d},
$S:27}
A.e7K.prototype={
$1(d){return this.a.db===d},
$S:64}
A.e7L.prototype={
$1(d){return this.a.db=d},
$S:27}
A.e7M.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:64}
A.e7N.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.G(0,d)},
$S:27}
A.e7O.prototype={
$0(){var w=this.a
return w.n(w.gasg())},
$S:0}
A.e7E.prototype={
$1(d){return this.a.$1(!0)},
$S:82}
A.e7F.prototype={
$1(d){return this.a.$1(!1)},
$S:149}
A.e7D.prototype={
$1(d){return this.a.$1(!1)},
$S:224}
A.e81.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ap(e.b,e.d)
o.ch=n
n=C.b1(p,p,p,new A.bcE(o,p),n)
w=this.b
v=A.buW("WORLD",w.a,w.c)
u=A.buW("GRAVITY",C.t(w.b)+" m/s\xb2",B.c)
t=o.x
s=B.k.U(t*100)
t=t<0.25?B.cJ:B.bq
t=A.buW("FUEL",""+s+"%",t)
s=o.r.b
r=B.k.U(s*100)
s=s>D.At[o.db].d?B.cJ:B.c
q=x.p
s=C.a([v,u,t,A.buW("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(A.buW("HEIGHT",""+B.k.U(B.k.D(0.86-o.f.b,0,1)*1000)+" m",B.c))
n=C.a([n,C.an(p,C.A(s,B.m,p,B.iZ,B.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bw4(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.qn[w].a+".":"You landed on every world!"
v=C.a([new A.ff(B.lV,"Again",new A.e7X(o),B.c,p),new A.ff(S.zW,"Rebuild",new A.e7Y(o),B.aM,p)],q)
if(o.d+1<7)v.push(new A.ff(B.jD,"Next world",new A.e7Z(o),B.bq,p))
n.push(A.fWE("Perfect landing!",w,B.bq,v))}if(o.as==="crashed")n.push(A.fWE("Crash!",o.at,B.cJ,C.a([new A.ff(B.lV,"Try again",new A.e8_(o),B.bq,p),new A.ff(S.zW,"Rebuild",new A.e80(o),B.aM,p)],q)))
return new C.am(B.W,p,B.aX,B.q,n,p)},
$S:62}
A.e7X.prototype={
$0(){var w=this.a
return w.n(w.gasg())},
$S:0}
A.e7Y.prototype={
$0(){var w=this.a
return w.n(new A.e7U(w))},
$S:0}
A.e7U.prototype={
$0(){return this.a.as="ready"},
$S:0}
A.e7Z.prototype={
$0(){var w=this.a
return w.n(new A.e7T(w))},
$S:0}
A.e7T.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
A.e8_.prototype={
$0(){var w=this.a
return w.n(w.gasg())},
$S:0}
A.e80.prototype={
$0(){var w=this.a
return w.n(new A.e7S(w))},
$S:0}
A.e7S.prototype={
$0(){return this.a.as="ready"},
$S:0}
A.e82.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.n(new A.e7W(v,w))},
$S:0}
A.e7W.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
A.e83.prototype={
$1(d){return this.a.y=d},
$S:9}
A.e84.prototype={
$1(d){return this.a.Q=d},
$S:9}
A.e85.prototype={
$1(d){return this.a.z=d},
$S:9}
A.e86.prototype={
$0(){var w=this.a
return w.n(new A.e7V(w))},
$S:0}
A.e7V.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
A.dw2.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.fS8
if(q==null)q=$.fS8=A.cxT()
w=3
return C.b(C.iJ(C.a([q,$.vU().b9c("assets/data/three.min.js")],x.aJ),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.k0(0,C.cJ(J.q(s,1)))
q.n(new A.dw1(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:50}
A.dw1.prototype={
$0(){return this.a.d=x.E.a(J.q(this.b,0))},
$S:0}
A.dvF.prototype={
$0(){return this.a.bMM(C.aR(J.q(this.b,"group")))},
$S:0}
A.dvG.prototype={
$1(d){return B.a.aU(B.o.fC(B.o.D(B.k.U(d*255),0,255),16),2,"0")},
$S:453}
A.dw3.prototype={
$0(){return A.a5M("kick",0.25)},
$S:0}
A.dvH.prototype={
$0(){return this.a.cx=this.b},
$S:0}
A.dvI.prototype={
$1(d){return d.a===this.a},
$S:z+10}
A.dvJ.prototype={
$0(){return A.a5M("kick",0.5)},
$S:0}
A.dvK.prototype={
$0(){return A.e1(1300+this.a.R8.aE(900),"",40,0,0.2,"square")},
$S:0}
A.dvM.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.ch
if(w===2)w=1
else w=w===1?0:2
u.ch=w}else{w=this.a
v=w.ay
if(v.q(0,u))v.W(0,u)
else{v.G(0,u)
if(w.ch===2)w.ch=1}if(v.a===0&&w.ch===0)w.ch=2
u=w}if(u.cx!=null&&!B.d.bc(u.d.e,new A.dvL(u)))u.cx=null
u.go=0},
$S:0}
A.dvL.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.atJ(d)},
$S:z+10}
A.dvC.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
A.dvD.prototype={
$0(){var w=this.a
return w.n(w.gbWN())},
$S:0}
A.dvE.prototype={
$0(){return this.a.adW(null)},
$S:0}
A.dvT.prototype={
$0(){var w=this.a.as
return w==null?null:w.eK(0,C.D(["t","shot"],x.N,x.z))},
$S:0}
A.dvU.prototype={
$0(){return this.a.cph(this.b.a)},
$S:0}
A.dvV.prototype={
$0(){return this.a.adW(this.b)},
$S:0}
A.dvW.prototype={
$1(d){var w=this.a
return w.n(new A.dvS(w,d))},
$S:6}
A.dvS.prototype={
$0(){return this.a.k3=this.b},
$S:0}
A.dvX.prototype={
$0(){var w=this.a
return w.n(new A.dvR(w,this.b))},
$S:0}
A.dvR.prototype={
$0(){return this.a.CW=this.b},
$S:0}
A.dvY.prototype={
$0(){var w=this.a
return w.n(new A.dvQ(w))},
$S:0}
A.dvQ.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
A.dvZ.prototype={
$0(){var w=this.a
return w.n(new A.dvP(w))},
$S:0}
A.dvP.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eK(0,C.D(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.HS},
$S:0}
A.dw_.prototype={
$0(){var w=this.a
return w.n(new A.dvO(w))},
$S:0}
A.dvO.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aSG()
else w.p2=null},
$S:0}
A.dw0.prototype={
$0(){var w=this.a
return w.n(new A.dvN(w))},
$S:0}
A.dvN.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
A.bVk.prototype={
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
$S:316}
A.bVl.prototype={
$1(d){var w=new C.r4([],[]).oN(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:594}
A.eYv.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)},
$S:221}
A.eYw.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)||w.h(d,1)},
$S:221}
A.eYx.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)!==w.h(d,1)},
$S:221}
A.eYB.prototype={
$1(d){return!J.q(d,0)},
$S:221}
A.eYC.prototype={
$1(d){var w=J.a4(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:221}
A.eYD.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:221}
A.dyd.prototype={
$1(d){return this.a.ap4(0)},
$S:8}
A.dxS.prototype={
$0(){var w=this.b
return this.a.cx=new C.I(w,C.hBA(),C.S(w).k("I<1,G>")).fD(0)},
$S:0}
A.dxV.prototype={
$1(d){return""+d},
$S:86}
A.dye.prototype={
$1(d){return d.b==="buzzer"},
$S:z+6}
A.dxQ.prototype={
$1(d){return this.a.ap4(this.b)},
$S:8}
A.dxR.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.asA(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.lZ(0,d,a1.lt(0.15,0.3))
u=a1.lZ(0,d,a1.lt(0.15,0.62))
t=a1.lZ(0,"and",a1.lt(0.48,0.46))
s=a1.lZ(0,a0,a1.lt(0.82,0.46))
a1=t.a
w.push(new A.mS(v.a,a1,0))
w.push(new A.mS(u.a,a1,1))
w.push(new A.mS(a1,s.a,0))
break
case 1:v=a1.lZ(0,d,a1.lt(0.12,0.25))
u=a1.lZ(0,d,a1.lt(0.12,0.65))
r=a1.lZ(0,"xor",a1.lt(0.46,0.25))
q=a1.lZ(0,"and",a1.lt(0.46,0.65))
p=a1.asz(0,a0,a1.lt(0.82,0.25),0)
o=a1.asz(0,a0,a1.lt(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new A.mS(a1,n,0))
m=u.a
w.push(new A.mS(m,n,1))
l=q.a
w.push(new A.mS(a1,l,0))
w.push(new A.mS(m,l,1))
w.push(new A.mS(n,p.a,0))
w.push(new A.mS(l,o.a,0))
break
case 2:k=a1.lZ(0,"clock",a1.lt(0.15,0.4))
j=a1.lZ(0,"not",a1.lt(0.45,0.65))
s=a1.lZ(0,a0,a1.lt(0.82,0.3))
i=a1.lZ(0,"buzzer",a1.lt(0.82,0.65))
a1=k.a
w.push(new A.mS(a1,s.a,0))
n=j.a
w.push(new A.mS(a1,n,0))
w.push(new A.mS(n,i.a,0))
break
default:h=a1.lZ(0,d,a1.lt(0.12,0.25))
g=a1.lZ(0,d,a1.lt(0.12,0.7))
f=a1.lZ(0,"nor",a1.lt(0.5,0.25))
e=a1.lZ(0,"nor",a1.lt(0.5,0.7))
s=a1.lZ(0,a0,a1.lt(0.86,0.25))
a1=f.a
w.push(new A.mS(g.a,a1,0))
n=e.a
w.push(new A.mS(n,a1,1))
w.push(new A.mS(h.a,n,0))
w.push(new A.mS(a1,n,1))
w.push(new A.mS(a1,s.a,0))}},
$S:0}
A.dxW.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.asA(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.m(0,p,new A.AU(p,"switch",new C.v(0.14*q.a,r*q.b),0))}o.lZ(0,w.e,o.lt(0.86,0.5))},
$S:0}
A.dxL.prototype={
$1(d){return d.b==="switch"},
$S:z+6}
A.dxM.prototype={
$2(d,e){return B.k.aI(d.c.b,e.c.b)},
$S:z+37}
A.dxN.prototype={
$1(d){return d.b===this.a.e},
$S:z+6}
A.dxO.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
A.dxP.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.a9B(this.c)
if(v.ax)A.Aj("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+B.d.gI(w)
v.CW=!1
if(v.ax)A.e1(140,"",250,0,0.3,"square")}},
$S:0}
A.dxX.prototype={
$0(){},
$S:0}
A.dxY.prototype={
$0(){return B.d.ct(this.a.e,this.b)},
$S:0}
A.dxZ.prototype={
$0(){return this.a.cy=null},
$S:0}
A.dxU.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
B.d.bk(w.e,new A.dxT(v))
w.cy=null},
$S:0}
A.dxT.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
A.dxK.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.lZ(0,this.b,new C.v(w.x.a*(0.3+v.ah()*0.4),w.x.b*(0.2+v.ah()*0.6))).a},
$S:0}
A.dy7.prototype={
$0(){var w=this.a
return w.n(new A.dy6(w))},
$S:0}
A.dy6.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
A.dy8.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ap(e.b,e.d)
v.x=u
return C.aJ(B.c5,C.k0(C.b1(w,w,w,new A.b6U(v,w),u),B.q,w),B.z,!1,w,w,w,w,w,w,w,w,new A.dy1(v),w,w,w,new A.dy2(v),new A.dy3(v),new A.dy4(v),w,w,w,w,w,w,w,w,w,w,new A.dy5(v),w,w,w,!1,B.ae)},
$S:35}
A.dy5.prototype={
$1(d){return this.a.bXM(d.b)},
$S:51}
A.dy3.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.c4R(u)
if(t!=null){v.as=t
v.at=u
return}w=v.atf(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aD(0,u)}},
$S:42}
A.dy4.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.v(B.k.D(w.a+u.Q.a,46,u.x.a-46),B.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
A.dy2.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bQh(t.at)
if(w!=null&&w.a!==t.as){v=t.e
B.d.bk(v,new A.dy_(w))
u=t.as
u.toString
v.push(new A.mS(u,w.a,w.b))
C.jz()}}t.z=t.as=null},
$S:36}
A.dy_.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
A.dy1.prototype={
$1(d){return this.a.arA(d.b)},
$S:295}
A.dy9.prototype={
$0(){return this.a.bs7(this.b.a)},
$S:0}
A.dya.prototype={
$0(){return this.a.ap4(this.b.a)},
$S:0}
A.dyb.prototype={
$0(){var w=this.a
return w.n(new A.dy0(w))},
$S:0}
A.dy0.prototype={
$0(){var w=this.a
w.asA(0)
w.ay=null},
$S:0}
A.dyc.prototype={
$0(){return this.a.cli(this.b)},
$S:0}
A.cEF.prototype={
$0(){var w=this,v=null,u=C.jF(v,v,v,v,C.dw(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),B.a5,B.cp,v,B.f3,B.co)
u.fK()
return u},
$S:309}
A.dDq.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.dDp.prototype={
$0(){return this.a.d=null},
$S:0}
A.dDs.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bS2()},
$S:121}
A.dDr.prototype={
$0(){return C.a6(this.a,!1).pT()},
$S:0}
A.eYT.prototype={
$0(){return D.dE6},
$S:z+56}
A.eYU.prototype={
$0(){return D.dcK},
$S:z+60}
A.eYV.prototype={
$0(){return D.dg0},
$S:z+63}
A.eZ5.prototype={
$0(){return D.d9E},
$S:z+64}
A.eZ8.prototype={
$0(){return D.dDG},
$S:z+66}
A.eZ9.prototype={
$0(){return D.dj8},
$S:z+85}
A.eZa.prototype={
$0(){return D.dcG},
$S:z+17}
A.eZb.prototype={
$0(){return D.dcJ},
$S:z+18}
A.eZc.prototype={
$0(){return D.d5P},
$S:z+19}
A.eZd.prototype={
$0(){return D.dfd},
$S:z+20}
A.eZe.prototype={
$0(){return D.dgR},
$S:z+21}
A.eYW.prototype={
$0(){return D.dgT},
$S:z+22}
A.eYX.prototype={
$0(){return D.dbT},
$S:z+23}
A.eYY.prototype={
$0(){return D.dlx},
$S:z+24}
A.eYZ.prototype={
$0(){return D.dDn},
$S:z+25}
A.eZ_.prototype={
$0(){return D.dBq},
$S:z+26}
A.eZ0.prototype={
$0(){return D.dkc},
$S:z+27}
A.eZ1.prototype={
$0(){return D.dDv},
$S:z+28}
A.eZ2.prototype={
$0(){return D.dbS},
$S:z+16}
A.eZ3.prototype={
$0(){return D.dDF},
$S:z+30}
A.eZ4.prototype={
$0(){return D.dbU},
$S:z+31}
A.eZ6.prototype={
$0(){return D.dh8},
$S:z+32}
A.eZ7.prototype={
$0(){return D.dkb},
$S:z+33}
A.eFF.prototype={
$2(d,e){return new A.acc($.bzc()[e],new A.eFE(e,this.a),null)},
$S:z+34}
A.eFE.prototype={
$0(){var w=this.a,v=D.ay1.h(0,$.bzc()[w].a)
$.c9_=v==null?"music":v
C.a6(this.b,!1).cz(C.eN(new A.eFC(w),!1,null,x.H))},
$S:0}
A.eFC.prototype={
$1(d){return $.bzc()[this.a].e.$0()},
$S:44}
A.eFG.prototype={
$2(d,e){return new A.ab7(D.aqZ[e],new A.eFD(this.a,e),null)},
$S:z+35}
A.eFD.prototype={
$0(){return this.a.d.$1(D.aqZ[this.b])},
$S:0}
A.eFl.prototype={
$0(){return this.a.as=!0},
$S:0}
A.eFk.prototype={
$0(){return this.a.as=!1},
$S:0}
A.eFj.prototype={
$1(d){var w=this
return new C.eh(new A.eFi(w.a,w.b,w.c,w.d),null)},
$S:21}
A.eFi.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aG(a2,d,a0).w
a0=C.aG(a2,d,a0).w
w=x.p
v=C.a([D.eET,B.aw,D.eKK,B.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.b2(12,12)
m=new C.b2(12,12)
m=C.a([new C.bI(1,B.bt,C.aI(d,B.T,!1,d,!0,B.q,d,C.aL(),r[p],d,d,d,d,d,2,new C.dZ(d,d,d,d,d,d,d,d,d,d,"Title",d,H.BC,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,B.c.j(0.06),d,d,d,d,d,d,d,new C.b0(4,new C.bx(n,n,n,n),B.V),!0,d,d,d,d),B.z,!0,d,!0,d,!1,d,B.ad,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,B.iI,!0,B.a5,d,B.am,d,d,d,d),d),B.ab,new C.bI(2,B.bt,C.aI(d,B.T,!1,d,!0,B.q,d,C.aL(),q[p],d,d,d,d,d,2,new C.dZ(d,d,d,d,d,d,d,d,d,d,"Small line",d,H.BC,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,B.c.j(0.06),d,d,d,d,d,d,d,new C.b0(4,new C.bx(m,m,m,m),B.V),!0,d,d,d,d),B.z,!0,d,!0,d,!1,d,B.ad,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,B.iI,!0,B.a5,d,B.am,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.cY6[l]
j=new C.b2(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.z(t.a.c.d,s)
t.w=i}h=B.d.gI(i).j(0.3)}else h=B.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.z(t.a.c.d,s)
t.w=i}g=B.d.gI(i)}else g=B.bG
f=new C.ay(g,u[p].A(0,k)?1.8:1,B.r,-1)
n.push(C.aJ(d,C.p(d,C.U(k,u[p].A(0,k)?B.c:B.aP,d,d,d,22),B.i,d,d,new C.o(h,d,new C.c2(f,f,f,f),new C.bx(j,j,j,j),d,d,B.n),d,d,d,B.h9,d,d,d,42),B.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.eFg(a3,p,u,k),d,d,d,d,d,d,!1,B.ae))}B.d.v(v,C.a([new C.w("SLAB "+o,d,D.evj,d,d,d,d,d,d,d,d,d),B.ar,new C.cF(B.b_,B.e,B.j,B.m,d,B.p,d,0,m,d),B.P,new C.a8(d,44,C.cX(n,d,d,d,d,B.b_,!1),d),B.aC],w))}v.push(C.bJ(B.BJ,new A.eFh(t,r,q,u,a2),d))
return new C.B(new C.L(0,0,0,a1.f.d),C.br(!0,new C.d3(new C.aV(0,1/0,0,a0.a.b*0.86),C.cX(v,d,A1.Dr,d,d,B.af,!0),d),!0,!1,B.ag,!0,!0),d)},
$S:107}
A.eFg.prototype={
$0(){var w=this
return w.a.$1(new A.eFf(w.b,w.c,w.d))},
$S:0}
A.eFf.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
A.eFh.prototype={
$0(){var w=this,v=w.a
v.n(new A.eFe(v,w.b,w.c,w.d))
C.a6(w.e,!1).K(null)},
$S:0}
A.eFe.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this
for(w=m.d,v=m.c,u=m.a,t=m.b,s=x.N,r=x.Z,q=0;q<3;++q){p=u.y
if(p===$){p=C.z(u.a.c.f,s)
u.y=p
o=p}else o=p
n=B.a.i(t[q].a.a)
if(n.length===0)n=o[q]
p[q]=n
p=u.z
if(p===$){p=C.z(u.a.c.r,s)
u.z=p}p[q]=B.a.i(v[q].a.a)
p=u.x
if(p===$){p=C.z(u.a.c.e,r)
u.x=p}p[q]=w[q]}},
$S:0}
A.eFt.prototype={
$0(){var w=this.a
return w.n(new A.eFs(w))},
$S:0}
A.eFs.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
A.eFu.prototype={
$0(){return A.qf(this.b,this.a.f,"scene")},
$S:0}
A.eFv.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(B.d.gI(u),B.d.gai(u),0.4)
u.toString
w=this.a.gWY().x
w===$&&C.c()
return C.bQ(v,new C.o(v,v,v,v,v,new C.bT(D.aNv,0.9,B.w,v,0,C.a([u.j(0.06+0.03*w),B.bV],x.O),v,v),B.n),B.ba)},
$S:320}
A.eFw.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.at(C.f0(B.C,C.c4(new C.h3(C.a([u.gt3(),u.gWY()],x.dS)),new A.eFr(u,this.b,v),w),B.i,B.e8),w,w,w)},
$S:237}
A.eFr.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gt3().x
r===$&&C.c()
w=r<0.9?1:1-A.bmt(r,0.9,0.98)
v=s.gWY().x
v===$&&C.c()
u=B.dE.aq(0,v)
switch(s.gasB().a){case 0:s=s.brl(t.b,r,u,t.c)
break
case 1:s=s.bH7(t.b,r,u,t.c)
break
case 2:s=s.cpJ(t.b,r,u,t.c)
break
case 3:s=s.bua(t.b,r,u,t.c)
break
case 4:s=s.bxg(t.b,r,u,t.c)
break
case 5:s=s.bwv(t.b,r,u,t.c)
break
default:s=null}return C.d8(s,w)},
$S:225}
A.eFx.prototype={
$2(d,e){var w=C.as2(this.b),v=this.c.d,u=C.aq(B.d.gI(v),B.d.gai(v),0.4)
u.toString
v=C.aq(B.d.gI(v),B.d.gai(v),0.4)
v.toString
v=w.cxP(u,B.bG,v,3.5)
u=this.a
w=u.gt3().x
w===$&&C.c()
return C.a7u(C.mq(null,null,null,1,0,new A.eFq(u),B.k.D(w,0,1)),v)},
$S:1789}
A.eFq.prototype={
$1(d){var w=this.a
w.gt3().st(0,d)
if(w.as)w.n(new A.eFm(w))},
$S:6}
A.eFm.prototype={
$0(){return this.a.as=!1},
$S:0}
A.eFy.prototype={
$0(){var w=this.a
w.gt3().st(0,0)
w.acH()},
$S:0}
A.eFz.prototype={
$1(d){var w=this.a
w.n(new A.eFp(w,d))
if(w.as)w.acH()},
$S:6}
A.eFp.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.eFA.prototype={
$0(){var w=this.a
w.n(new A.eFo(w,this.b))
w.gt3().st(0,0)
if(w.as)w.acH()},
$S:0}
A.eFo.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
A.eFB.prototype={
$0(){var w=this.a
return w.n(new A.eFn(w,this.b))},
$S:0}
A.eFn.prototype={
$0(){var w=C.z(this.b,x.G)
return this.a.w=w},
$S:0}
A.eFc.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:1790}
A.eFd.prototype={
$1(d){return d.b},
$S:1791}
A.d82.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+3}
A.d83.prototype={
$1(d){return d.b===this.a},
$S:z+7}
A.d8_.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+3}
A.d80.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.d81.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.d84.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+7}
A.d85.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+7}
A.d86.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.d87.prototype={
$1(d){return d.d<this.a.ax},
$S:z+39}
A.d88.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+40}
A.d89.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+41}
A.d8a.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+42}
A.d8b.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+43}
A.d8c.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+44}
A.e79.prototype={
$0(){return this.a.ax=!0},
$S:0}
A.e6Z.prototype={
$0(){return this.a.ax=!1},
$S:0}
A.e70.prototype={
$2(d,e){return d+e.d*7+B.o.J(B.a.gV(e.b),97)},
$S:z+45}
A.e71.prototype={
$2(d,e){return d+B.o.J(B.a.gV(e.a),31)+B.o.J(B.a.gV(e.b),17)},
$S:z+46}
A.e74.prototype={
$1(d){var w=D.m1.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[B.o.J(d.d,u)]+")":t},
$S:z+47}
A.e75.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.S(q),o=x.dg,n=C.z(new C.e2(new C.cQ(new C.a3(q,new A.e76(d),p.k("a3<1>")),new A.e77(r),p.k("cQ<1,q8?>")),o),o.k("E.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(B.d.aH(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.J)(n),++v){u=n[v]
if(w.length>=6)return
t=C.z(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+48}
A.e76.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
A.e77.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+49}
A.e72.prototype={
$1(d){return D.m1.h(0,d.b).c===D.vo},
$S:z+50}
A.e73.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
A.e7z.prototype={
$1(d){var w=this.a,v=d.a,u=B.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.a4M(0,u)
w.cJE(B.o.aj(v,1000))},
$S:8}
A.e78.prototype={
$0(){},
$S:0}
A.e6V.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.au(),$async$$0)
case 6:e.an("String","ngmy_core_reaction_lab_v1",s.a.d.ad())
u=1
w=5
break
case 3:u=2
q=t.pop()
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$$0,v)},
$S:1}
A.e7b.prototype={
$1(d){var w=null,v=this.a.b
return C.br(!0,C.u(C.a([B.P,C.dI(!1,w,w,w,!0,w,w,w,!0,w,C.U(D.m1.h(0,v).b,D.m1.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.eUX,w,C.d(D.m1.h(0,v).a,w,w,w,w,w,w,B.hi,w,w,w),w,w,w),C.dI(!1,w,w,w,!0,w,w,w,!0,w,R.ai3,w,w,w,w,new A.e7a(d),!1,w,w,w,w,w,w,w,D.eNn,w,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),!0,!1,B.ag,!0,!0)},
$S:33}
A.e7a.prototype={
$0(){C.a6(this.a,!1).K(!0)
return null},
$S:0}
A.e7d.prototype={
$1(d){var w,v,u=null,t=C.aG(d,u,x.m).w,s=C.a([D.dKP],x.p)
for(w=0;w<6;++w){v=D.arg[w]
s.push(C.dI(!1,u,u,u,!0,u,u,u,!0,u,D.bB7,u,u,u,u,new A.e7c(d,v),!1,u,u,u,u,u,new C.w(v.b,u,B.l3,u,u,u,u,u,u,u,u,u),u,new C.w(v.a,u,B.hi,u,u,u,u,u,u,u,u,u),u,u,u))}return C.br(!0,new C.d3(new C.aV(0,1/0,0,t.a.b*0.7),C.cX(s,u,D.bj4,u,u,B.af,!0),u),!0,!1,B.ag,!0,!0)},
$S:33}
A.e7c.prototype={
$0(){C.a6(this.a,!1).K(this.b)
return null},
$S:0}
A.e6Y.prototype={
$1(d){var w=null
return C.ei(C.a([C.bF(!1,B.dd,w,w,!0,w,w,new A.e6W(d),w,w),C.bF(!1,B.BI,w,w,!0,w,w,new A.e6X(d),w,w)],x.p),w,w,D.rk,D.eKU,w,w,w,w,D.eNE,w)},
$S:19}
A.e6W.prototype={
$0(){C.a6(this.a,!1).K(!1)
return null},
$S:0}
A.e6X.prototype={
$0(){C.a6(this.a,!1).K(!0)
return null},
$S:0}
A.e7x.prototype={
$0(){var w=this.a
return w.n(new A.e7w(w))},
$S:0}
A.e7w.prototype={
$0(){return this.a.r=!1},
$S:0}
A.e7y.prototype={
$2(d,e){var w,v,u,t=null,s=new C.ap(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.lQ(new A.e7n(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.aWJ:t
v=C.a([C.b1(u,t,t,new A.bcC(w,v,new A.e7o(r),new A.e7p(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.an(t,C.ec(C.c4(w,new A.e7q(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.byS())
return C.aJ(B.c5,C.k0(new C.am(B.W,t,B.aX,B.q,v,t),B.q,t),B.z,!1,t,t,t,t,t,t,t,t,new A.e7r(r),t,r.gc65(),t,new A.e7s(r),new A.e7t(r),new A.e7u(r),t,t,t,t,t,t,t,t,t,t,new A.e7v(r),t,t,t,!1,B.ae)},
$S:35}
A.e7n.prototype={
$0(){return this.a.a8H(this.b)},
$S:0}
A.e7v.prototype={
$1(d){return this.a.cnC(d.b)},
$S:51}
A.e7t.prototype={
$1(d){return this.a.c66(d.b)},
$S:42}
A.e7u.prototype={
$1(d){return this.a.c67(d.b)},
$S:18}
A.e7s.prototype={
$1(d){return this.a.aVw()},
$S:36}
A.e7r.prototype={
$1(d){return this.a.a9n(d.b)},
$S:295}
A.e7o.prototype={
$0(){return this.a.z},
$S:684}
A.e7p.prototype={
$0(){return this.a.Q},
$S:723}
A.e7q.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bD3()
if(p.length===0)return B.bF
w=B.x.j(0.55)
v=C.m(14)
u=C.H(B.bG,B.r,1)
t=C.a([D.eIA,B.dh],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.J)(p),++r)t.push(new C.w(p[r],q,D.eu9,q,q,q,q,B.a0,q,2,q,q))
return C.p(q,C.u(t,B.F,q,B.e,B.R,0,B.p),B.i,q,q,new C.o(w,q,u,v,q,q,B.n),q,q,q,q,B.fX,q,q,q)},
$S:58}
A.e7_.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.H(e.j(0.6),B.r,1),s=x.p
return new C.B(B.e3,C.A(C.a([C.p(w,C.U(d,e,w,w,w,21),B.i,w,w,new C.o(v,w,t,u,w,w,B.n),w,38,w,w,w,w,w,38),B.bb,C.C(C.u(C.a([C.d(f,w,w,w,w,w,w,T.GT,w,w,w),B.bw,C.d(g,w,w,w,w,w,w,D.aJw,w,w,w)],s),B.F,w,B.e,B.j,0,B.p),1)],s),B.F,w,B.e,B.j,0,w,w),w)},
$S:1793}
A.e7j.prototype={
$0(){var w=this.a.c
w.toString
return C.a6(w,!1).pT()},
$S:0}
A.e7k.prototype={
$0(){var w=this.a
return w.n(new A.e7i(w))},
$S:0}
A.e7i.prototype={
$0(){return this.a.ax=!0},
$S:0}
A.e7l.prototype={
$0(){var w=this.a
return w.n(new A.e7h(w))},
$S:0}
A.e7h.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
A.e7m.prototype={
$0(){var w=this.a
return w.n(new A.e7g(w))},
$S:0}
A.e7g.prototype={
$0(){return this.a.r=!0},
$S:0}
A.e7f.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.m1.gdH(D.m1),w=w.gaf(w);w.C();){v=w.gT(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,B.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,B.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.J)(p),++r)u.push(s.ciL(p[r]))
return new C.B(G.abP,C.u(C.a([new C.B(P.adr,w,q),C.A(u,B.m,q,B.e,B.j,0,q,q)],v),B.F,q,B.e,B.j,0,B.p),q)},
$S:z+51}
A.e7e.prototype={
$0(){return this.a.bXR(this.b)},
$S:0}
A.d7Z.prototype={
$0(){var w=this,v=null,u=C.jF(v,v,v,v,C.dw(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),B.a5,B.cp,v,B.f3,B.co)
u.fK()
return u},
$S:309}
A.ehk.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=B.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=B.o.aj(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.v(s.a+q*n,s.b+r*n)
t.b=new C.v(q*v,r*v)}B.d.bk(o,new A.ehi(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.n(new A.ehj())},
$S:8}
A.ehi.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+52}
A.ehj.prototype={
$0(){},
$S:0}
A.egW.prototype={
$0(){},
$S:0}
A.egV.prototype={
$0(){},
$S:0}
A.eh4.prototype={
$0(){return A.qf(this.b,this.a.d,"spark-painter")},
$S:0}
A.eh6.prototype={
$1(d){return this.a.aT3(0,d.b)},
$S:42}
A.eha.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||B.d.gai(w).aD(0,u).gcr()>2.5}else w=!1
if(w)t.a.push(u)
v.aMC(u)
v.c_E(u)
return null},
$S:18}
A.eh5.prototype={
$1(d){return this.a.aT2()},
$S:36}
A.ehb.prototype={
$1(d){return this.a.aT3(0,d.b)},
$S:23}
A.ehc.prototype={
$1(d){return this.a.aT2()},
$S:51}
A.ehd.prototype={
$0(){var w=this.a
return w.n(new A.eh3(w,this.b))},
$S:0}
A.eh3.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.ehe.prototype={
$0(){var w=this.a
return w.n(new A.eh2(w))},
$S:0}
A.eh2.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.ehf.prototype={
$0(){var w=this.a
return w.n(new A.eh1(w,this.b))},
$S:0}
A.eh1.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.ehg.prototype={
$1(d){var w=this.a
return w.n(new A.eh0(w,d))},
$S:6}
A.eh0.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.ehh.prototype={
$0(){var w=this.a
return w.n(new A.eh_(w))},
$S:0}
A.eh_.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
A.eh7.prototype={
$0(){var w=this.a
return w.n(new A.egZ(w))},
$S:0}
A.egZ.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
A.eh8.prototype={
$0(){var w=this.a
return w.n(new A.egY(w))},
$S:0}
A.egY.prototype={
$0(){var w=this.a
B.d.a8(w.e)
B.d.a8(w.f)},
$S:0}
A.eh9.prototype={
$0(){var w=this.a
return w.n(new A.egX(w,this.b))},
$S:0}
A.egX.prototype={
$0(){return this.a.at=this.b},
$S:0}
A.enU.prototype={
$0(){return A.qf(this.b,this.a.d,"title")},
$S:0}
A.enV.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gHd().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bSb(v[t],t,s,q,u))
return new C.B(B.ft,C.cf(B.fz,w,B.tE,0,0),null)},
$S:706}
A.enW.prototype={
$1(d){return this.a.n(new A.enT())},
$S:2}
A.enT.prototype={
$0(){},
$S:0}
A.enX.prototype={
$0(){var w=this.a
w.n(new A.enS(w,this.b))
w=w.gHd()
w.ib(0,0)
w.cF(0)},
$S:0}
A.enS.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
A.enY.prototype={
$0(){var w=this.a
return w.n(new A.enR(w,this.b))},
$S:0}
A.enR.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.enZ.prototype={
$0(){var w=this.a
return w.n(new A.enQ(w))},
$S:0}
A.enQ.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
A.eo_.prototype={
$0(){var w=this.a
return w.n(new A.enP(w,this.b))},
$S:0}
A.enP.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.eo0.prototype={
$0(){var w=this.a.gHd()
w.ib(0,0)
w.cF(0)},
$S:0}
A.eo1.prototype={
$1(d){var w=this.a
return w.n(new A.enO(w,d))},
$S:6}
A.enO.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.e4q.prototype={
$1(d){return d.a.aD(0,this.a).gcr()<16},
$S:z+12}
A.e4r.prototype={
$1(d){var w=this.b
return d.a.aD(0,w).gcr()<16||d.a.aD(0,w).gcr()>this.a.r.gaiT()*2.2},
$S:z+12}
A.e4e.prototype={
$0(){return A.qf(this.b,this.a.d,"orbits")},
$S:0}
A.e4f.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.ap(e.b,e.d)
q.r=p
w=q.gaav()
v=q.w
u=q.as
t=q.at
s=u==null?B.a_1:q.c9C(u,q.gaQF())
return new C.es(C.aJ(B.c5,C.b1(r,r,r,new A.bgT(q.e,w,v,u,t,s,r),p),B.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,new A.e4b(q),new A.e4c(q),new A.e4d(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,B.ae),q.d)},
$S:193}
A.e4c.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:42}
A.e4d.prototype={
$1(d){return this.a.at=d.b},
$S:18}
A.e4b.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aD(0,w).gcr()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new A.Yt(u,v.gaQF(),v.Q,v.aWX(),C.a([],x.g)))
C.jz()
if(v.ax)A.e1(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:36}
A.e4g.prototype={
$1(d){var w=this.a
return w.n(new A.e4a(w,d))},
$S:6}
A.e4a.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.e4i.prototype={
$1(d){var w=this.a
return w.n(new A.e49(w,d))},
$S:6}
A.e49.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.e4j.prototype={
$1(d){var w=this.a
return w.n(new A.e48(w,d))},
$S:6}
A.e48.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.e4k.prototype={
$0(){var w=this.a
return w.n(new A.e47(w))},
$S:0}
A.e47.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
A.e4l.prototype={
$0(){var w=this.a
return w.n(new A.e46(w))},
$S:0}
A.e46.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
A.e4m.prototype={
$0(){var w=this.a
return w.n(new A.e45(w))},
$S:0}
A.e45.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e4n.prototype={
$0(){var w=this.a
return w.n(w.gckY())},
$S:0}
A.e4o.prototype={
$0(){var w=this.a
return w.n(w.gbz4())},
$S:0}
A.e4p.prototype={
$0(){var w=this.a
return w.n(new A.e44(w))},
$S:0}
A.e44.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.ah()
s=w.r
w.anp(50+t*(Math.min(s.a,s.b)/2-70),v.ah()*3.141592653589793*2,0.7+v.ah()*0.5,v.hd())}},
$S:0}
A.e4h.prototype={
$0(){var w=this.a
return w.n(B.d.gqH(w.e))},
$S:0}
A.enl.prototype={
$1(d){return this.a.fB$-d.b>6000},
$S:724}
A.enm.prototype={
$1(d){var w=this.a.e
return new C.a3(w,new A.enk(d),C.S(w).k("a3<1>")).gH(0)>=3},
$S:724}
A.enk.prototype={
$1(d){return d.a.aD(0,this.a.a).gcr()<14},
$S:z+54}
A.ena.prototype={
$0(){return A.qf(this.b,this.a.d,"swarm")},
$S:0}
A.enb.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ap(e.b,e.d)
v.w=u
return new C.es(C.aJ(B.c5,C.b1(w,w,w,new A.boc(v.e,v.f,v.ax,v.at,v.ay,v.fB$,w),u),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new A.en7(v),new A.en8(v),new A.en9(v),w,w,w,w,w,w,w,w,new A.en_(v),new A.en0(v),new A.en1(v),w,w,w,!1,B.ae),v.d)},
$S:193}
A.en8.prototype={
$1(d){return this.a.ay=d.b},
$S:42}
A.en9.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
A.en7.prototype={
$1(d){return this.a.ay=null},
$S:36}
A.en0.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.V(v,w.fB$))
if(w.ch)A.e1(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)A.kY("flute",7,500,0.3)},
$S:23}
A.en1.prototype={
$1(d){return this.a.ay=null},
$S:51}
A.en_.prototype={
$0(){return this.a.ay=null},
$S:0}
A.enc.prototype={
$0(){var w=this.a
return w.n(new A.en6(w,this.b))},
$S:0}
A.en6.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
A.end.prototype={
$0(){var w=this.a
return w.n(new A.en5(w,this.b))},
$S:0}
A.en5.prototype={
$0(){var w=this.a
w.ax=this.b.a
B.d.a8(w.e)},
$S:0}
A.ene.prototype={
$0(){var w=this.a
return w.n(new A.en4(w))},
$S:0}
A.en4.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
A.enf.prototype={
$1(d){var w=this.a
return w.n(new A.en3(w,d))},
$S:6}
A.en3.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.eng.prototype={
$1(d){var w=this.a
return w.n(new A.en2(w,d))},
$S:6}
A.en2.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.enh.prototype={
$1(d){var w=this.a
return w.n(new A.emZ(w,d))},
$S:6}
A.emZ.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.eni.prototype={
$1(d){var w=this.a
return w.n(new A.emY(w,d))},
$S:6}
A.emY.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.enj.prototype={
$1(d){var w=this.a
return w.n(new A.emX(w,d))},
$S:6}
A.emX.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.dxm.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new A.dxl(w,d))},
$S:132}
A.dxl.prototype={
$0(){var w=this.a,v=this.b,u=J.a4(v),t=C.aQ(u.h(v,"unlocked"))
t=t==null?null:B.k.L(t)
w.w=B.o.D(t==null?1:t,1,100)
t=C.aQ(u.h(v,"level"))
t=t==null?null:B.k.L(t)
if(t==null)t=w.w
w.r=B.o.D(t,1,w.w)
t=C.Q(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.ji(v==null?B.uL:v)
v=v.gaf(v)
while(v.C()){u=v.gT(v)
t.m(0,C.t(u.a),B.k.L(C.fc(u.b)))}w.x=t
w.Q=!0
B.d.a8(w.d)},
$S:0}
A.dxn.prototype={
$1(d){return d.d!=null},
$S:z+13}
A.dxo.prototype={
$1(d){var w=d.d
return w!=null&&this.a.WZ(w)>0},
$S:z+13}
A.dxc.prototype={
$0(){var w=this.a
w.r=B.o.D(this.b,1,w.w)
w.avt()},
$S:0}
A.dxf.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.ez(w,D.aa3,new C.B(B.bC,new C.a8(340,480,C.u(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,B.jp,w,w,w),B.U,C.C(C.ig(!0,w,w,B.z,M.aHx,new A.dxe(u,d),100,w,w,B.af,!1),1)],x.p),B.m,w,B.e,B.j,0,B.p),w),w),w,w,w,w,B.cZ,w,new C.b5(v,B.V),w)},
$S:45}
A.dxe.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new A.dxd(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?B.cd:B.c.j(0.1)
else q=B.c.j(0.03)
u=C.H(p?B.be:B.du,B.r,1)
o=p?o:"\ud83d\udd12"
t=p?B.c:B.j8
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(B.a.aO("\u2605",n)+B.a.aO("\u2606",3-n),s,s,s,s,s,s,D.exJ,s,s,s))
return C.aJ(s,C.p(s,C.u(o,B.m,s,B.b5,B.j,0,B.p),B.i,s,s,new C.o(q,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,B.ae)},
$S:73}
A.dxd.prototype={
$0(){C.a6(this.a,!1).K(this.b)
return null},
$S:0}
A.dxj.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ap(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.ga9D()
o=C.b1(q,q,q,new A.b6B(p.d,w,v,p.gbXY(),q),o)
v=p.bPW("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gGG()
t=p.as>=p.gGG()?B.bq:B.c
s=this.b
r=x.p
s=C.a([o,C.an(q,C.A(C.a([v,p.aqR("GOAL",""+w+" / "+u,t),p.aqR("STARS",B.a.aO("\u2605",s)+B.a.aO("\u2606",3-s),B.aM)],r),B.m,q,B.iZ,B.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(B.md)
if(p.Q&&!p.y)s.push(D.aNc)
if(p.z){o=C.m(24)
w=this.c
v=C.H((w?B.bq:B.cJ).j(0.6),B.r,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?B.bq:B.cJ,q,q,q,q,q,q,q,q,22,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.ar,C.d("You blasted "+p.as+" dots. The goal was "+p.gGG()+".",q,q,q,q,q,q,B.hN,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(B.a.aO("\u2605",t==null?1:t),q,q,q,q,q,q,D.eoD,q,q,q))}u.push(B.aC)
t=C.a([new A.ff(B.lV,"Try again",new A.dxg(p),B.c,q)],r)
if(w&&p.r<100)t.push(new A.ff(B.jD,"Next level",new A.dxh(p),B.bq,q))
u.push(C.A(t,B.m,q,B.e,B.R,0,q,q))
s.push(C.at(C.p(q,C.u(u,B.m,q,B.e,B.R,0,B.p),B.i,q,q,new C.o(D.SX,q,v,o,q,q,B.n),q,q,q,q,B.a8,q,q,q),q,q,q))}return C.aJ(B.c5,new C.am(B.W,q,B.aX,B.q,s,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dxi(p),q,q,q,q,!1,B.ae)},
$S:35}
A.dxi.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fB$
A.e1(180,"",200,1,0.4,"sine")
C.j5()},
$S:23}
A.dxg.prototype={
$0(){var w=this.a
return w.n(w.gaZz())},
$S:0}
A.dxh.prototype={
$0(){var w=this.a
return w.aT4(w.r+1)},
$S:0}
A.dxk.prototype={
$0(){var w=this.a
return w.n(w.gaZz())},
$S:0}
A.cEc.prototype={
$3(d,e,f){var w,v
if(e<=0)return
w=this.a
$.a1()
v=C.T()
v.r=f.j(0.18).gt(0)
w.aw(d,e,v)
v=C.T()
v.b=B.aj
v.c=3
v.r=f.j(0.9).gt(0)
w.aw(d,e,v)
v=C.T()
v.r=f.j(0.25).gt(0)
v.z=B.mK
w.aw(d,e*0.5,v)},
$S:725}
A.e0o.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcDg()?this.a.chd(w,v,d.b):w.aD(0,v).gcr())<24},
$S:z+87}
A.e0N.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+58}
A.e0C.prototype={
$0(){var w=this.a
return w.n(new A.e0t(w))},
$S:0}
A.e0t.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
A.e0D.prototype={
$0(){return A.qf(this.b,this.a.d,"marble-music")},
$S:0}
A.e0E.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ap(e.b,e.d)
v.w=u
return new C.es(C.aJ(B.c5,C.b1(w,w,w,new A.bdw(v.e,v.f,v.at,v.ax,v.fB$,w),u),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new A.e0z(v),new A.e0A(v),new A.e0B(v),w,w,w,w,w,w,w,w,w,w,new A.e0s(v),w,w,w,!1,B.ae),v.d)},
$S:193}
A.e0s.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.XE(w)
u.e.push(new A.Ea(w,w,v,u.aKo(v)))
if(u.ay)A.kY(u.z,v+12,700,0.5)}if(u.x==="erase")u.aMS(d.b)},
$S:51}
A.e0A.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:42}
A.e0B.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aMS(d.b)},
$S:18}
A.e0z.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aD(0,w).gcr()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.XE(t.ap(0,w).eV(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new A.Ea(w,t,v,u.aKo(v)))
if(u.ay)A.kY(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:36}
A.e0F.prototype={
$0(){var w=this.a
return w.n(new A.e0y(w,this.b))},
$S:0}
A.e0y.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
A.e0G.prototype={
$0(){var w=this.a
return w.n(new A.e0x(w,this.b))},
$S:0}
A.e0x.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.e0H.prototype={
$0(){var w=this.a
return w.n(new A.e0w(w,this.b))},
$S:0}
A.e0w.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.e0I.prototype={
$1(d){var w=this.a
return w.n(new A.e0v(w,d))},
$S:6}
A.e0v.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.e0J.prototype={
$0(){var w=this.a
return w.n(new A.e0u(w))},
$S:0}
A.e0u.prototype={
$0(){return this.a.au5("stairs")},
$S:0}
A.e0K.prototype={
$0(){var w=this.a
return w.n(new A.e0r(w))},
$S:0}
A.e0r.prototype={
$0(){return this.a.au5("pinball")},
$S:0}
A.e0L.prototype={
$0(){var w=this.a
return w.n(new A.e0q(w))},
$S:0}
A.e0q.prototype={
$0(){return this.a.au5("random")},
$S:0}
A.e0M.prototype={
$0(){var w=this.a
return w.n(new A.e0p(w))},
$S:0}
A.e0p.prototype={
$0(){var w=this.a
B.d.a8(w.e)
B.d.a8(w.f)},
$S:0}
A.e3O.prototype={
$0(){return B.d.W(this.a.e,this.b)},
$S:0}
A.e3P.prototype={
$0(){var w=this.b,v=new A.aaS(this.a.a,this.c)
v.c=w.fB$
return w.e.push(v)},
$S:0}
A.e3W.prototype={
$0(){var w=this.a
return w.n(new A.e3V(w))},
$S:0}
A.e3V.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
A.e3X.prototype={
$0(){return A.qf(this.b,this.a.d,"orbit-sequencer")},
$S:0}
A.e3Y.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.ap(e.b,e.d)
if(!u.f){u.f=!0
u.aLI()}w=u.w
return new C.es(C.aJ(B.c5,C.b1(v,v,v,new A.bgU(u.e,u.gaT6(),6,u.gcbC(),u.gchE(),u.fB$,v),w),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.e3U(u),v,v,v,!1,B.ae),u.d)},
$S:193}
A.e3U.prototype={
$1(d){return this.a.bY_(d.b)},
$S:51}
A.e3Z.prototype={
$1(d){var w=this.a
return w.n(new A.e3T(w,d))},
$S:6}
A.e3T.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.e4_.prototype={
$0(){var w=this.a
return w.n(new A.e3S(w,this.b))},
$S:0}
A.e3S.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.e40.prototype={
$0(){var w=this.a
return w.n(new A.e3R(w,this.b))},
$S:0}
A.e3R.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.e41.prototype={
$0(){var w=this.a
return w.n(w.gbD_())},
$S:0}
A.e42.prototype={
$0(){var w=this.a
return w.n(new A.e3Q(w))},
$S:0}
A.e3Q.prototype={
$0(){var w,v=this.a,u=v.e
B.d.a8(u)
for(v=v.r,w=0;w<9;++w)u.push(new A.aaS(v.aE(6),v.ah()))},
$S:0}
A.e43.prototype={
$0(){var w=this.a
return w.n(B.d.gqH(w.e))},
$S:0}
A.fbf.prototype={
$2(d,e){var w=B.o.aj(d,100),v=B.o.J(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:140}
A.e3N.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new A.e3M(w,d))},
$S:132}
A.e3M.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aW(v==null?B.cK:v)
while(v.C())w.push(B.k.L(C.fc(v.gT(v))))
return this.a.x.v(0,w)},
$S:0}
A.e3z.prototype={
$2(d,e){var w=this.b
if(B.o.aj(d,100)===w||B.o.J(d,100)===w)this.a.a+=e},
$S:140}
A.e3t.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new A.b5t(w.b,new C.v(w.c*(0.2+0.6*v.ah()),w.e*(0.2+0.6*v.ah()))))},
$S:0}
A.e3u.prototype={
$0(){var w=this.a
B.d.a8(w.e)
w.f.a8(0)
w.r=null},
$S:0}
A.e3y.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this.b
if(m==null)this.a.r=null
else{w=this.a
v=w.r
if(v==null)w.r=m
else if(v===m)w.r=null
else{u=Math.min(v,m)
t=Math.max(v,m)
s=u*100+t
m=w.f
r=m.h(0,s)
if(r==null)r=0
q=r>=3?0:r+1
if(q===0)m.W(0,s)
else{v=w.e
p=D.uK.h(0,v[u].a).a
o=w.afM(u)
v=D.uK.h(0,v[t].a).a
n=w.afM(t)
if(q<=p-o+r&&q<=v-n+r){m.m(0,s,q)
A.v3("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaTc()&&w.x.G(0,w.d)){A.v3("zap",12,300,0.5)
m=w.x
m=C.z(m,C.a2(m).k("cj.E"))
A.v0("molecule_maker",C.D(["done",m],x.N,x.z))}}}},
$S:0}
A.e3x.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a2(t).k("ct<1>"),r=this.b,q=s.k("a3<E.E>"),p=C.z(new C.a3(new C.ct(t,s),new A.e3v(r),q),q.k("E.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.J)(p),++w)t.W(0,p[w])
s=x.S
v=C.Q(s,s)
t.bD(0,new A.e3w(r,v))
t.a8(0)
t.v(0,v)
B.d.ct(u.e,r)
u.r=null},
$S:0}
A.e3v.prototype={
$1(d){var w=this.a
return B.o.aj(d,100)===w||B.o.J(d,100)===w},
$S:64}
A.e3w.prototype={
$2(d,e){var w=B.o.aj(d,100),v=B.o.J(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.m(0,w*100+v,e)},
$S:140}
A.e3H.prototype={
$1(d){return""+d.b+" "+D.uK.h(0,d.a).c.toLowerCase()},
$S:394}
A.e3I.prototype={
$0(){var w=this.a
return w.n(new A.e3G(w))},
$S:0}
A.e3G.prototype={
$0(){var w=this.a;++w.d
w.asG(0)},
$S:0}
A.e3J.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.ap(e.b,e.d)
return C.aJ(B.c5,C.b1(w,w,w,new A.bec(v.e,v.f,v.r,v.gcrL(),w),B.fx),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,new A.e3C(v),new A.e3D(v),new A.e3E(v,e),w,w,w,w,w,w,w,w,w,w,new A.e3F(v),w,w,w,!1,B.ae)},
$S:35}
A.e3F.prototype={
$1(d){return this.a.bYm(d.b)},
$S:51}
A.e3D.prototype={
$1(d){var w=this.a
return w.w=w.aTd(d.b)},
$S:42}
A.e3E.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.n(new A.e3A(w,v,d,this.b))},
$S:18}
A.e3A.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.v(B.k.D(t.b.a+s.a,26,r.b-26),B.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
A.e3C.prototype={
$1(d){return this.a.w=null},
$S:36}
A.e3K.prototype={
$0(){var w=this.a
return w.n(new A.e3B(w,this.b))},
$S:0}
A.e3B.prototype={
$0(){var w=this.a
w.d=this.b
w.asG(0)},
$S:0}
A.e3L.prototype={
$0(){return this.a.bYg(0,this.b.a)},
$S:0}
A.dg2.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[B.o.aj(d,100)].b,i=k[B.o.J(d,100)].b,h=i.aD(0,j),g=new C.v(-h.b,h.a).eV(0,Math.max(h.gcr(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.a1()
m=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
m.r=B.ak.gt(0)
m.c=4
m.d=B.bZ
l=m.M()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:140}
A.dFg.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dFf(w,d))},
$S:132}
A.dFf.prototype={
$0(){var w=C.aQ(J.q(this.b,"best"))
w=w==null?null:B.k.L(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
A.dF5.prototype={
$0(){var w,v,u=J.e0(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.apO[w.aE(4)]
return B.d.fJ(u)},
$S:22}
A.dF4.prototype={
$1(d){return A.fDI(d)==="*"},
$S:3}
A.dF6.prototype={
$1(d){return d!==this.a},
$S:3}
A.dF3.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
A.v0("dna_lab",C.D(["best",r],x.N,x.z))}r=s.d
A.v3("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga6g()[r]+" codes for "+C.t(D.AG.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.aW_()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.J)(w),++u)r.push(D.AG.h(0,w[u]))
r="Protein built: "+B.d.aH(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
A.v3("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
A.dFe.prototype={
$3$ghost(d,e,f){var w=null,v=f?B.du:e,u=C.m(8),t=f?C.H(B.be,B.r,1):w
return C.p(B.C,C.d(d,w,w,w,w,w,w,C.l(w,w,f?B.be:B.x,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.i,w,w,new C.o(v,w,t,u,w,w,B.n),w,40,w,B.mw,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1797}
A.dF9.prototype={
$1(d){var w=D.d0L.h(0,d)
return w==null?B.c:w},
$S:726}
A.dFa.prototype={
$0(){var w=this.a
return w.n(new A.dF8(w,this.b))},
$S:0}
A.dF8.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.as7()},
$S:0}
A.dFb.prototype={
$0(){var w=this.a
return w.n(new A.dF7(w))},
$S:0}
A.dF7.prototype={
$0(){var w=this.a;++w.e
w.as7()},
$S:0}
A.dFc.prototype={
$0(){return this.a.aTb(this.b)},
$S:0}
A.dFd.prototype={
$0(){return this.a.aTb(this.b)},
$S:0}
A.dI5.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dI4(w,d))},
$S:132}
A.dI4.prototype={
$0(){var w=C.aQ(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
A.dHT.prototype={
$0(){},
$S:0}
A.dHS.prototype={
$0(){var w,v,u=this
switch(u.b){case"drought":w=u.a
v=w.f
w.f=C.a([v[0]*0.2,v[1],v[2]],x.n)
break
case"disease":w=u.a
v=w.f
w.f=C.a([v[0],v[1]*0.3,v[2]],x.n)
break
case"foxes":w=u.a
v=w.f
w.f=C.a([v[0],v[1],v[2]+12],x.n)
break
case"rabbits":w=u.a
v=w.f
w.f=C.a([v[0],v[1]+40,v[2]],x.n)
break}},
$S:0}
A.dHU.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
B.d.a8(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
A.dHY.prototype={
$1(d){var w=this.a
return w.n(new A.dHX(w,d))},
$S:6}
A.dHX.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.dHZ.prototype={
$1(d){var w=this.a
return w.n(new A.dHW(w,d))},
$S:6}
A.dHW.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.dI_.prototype={
$1(d){var w=this.a
return w.n(new A.dHV(w,d))},
$S:6}
A.dHV.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.dI0.prototype={
$0(){return this.a.a7p("drought")},
$S:0}
A.dI1.prototype={
$0(){return this.a.a7p("disease")},
$S:0}
A.dI2.prototype={
$0(){return this.a.a7p("foxes")},
$S:0}
A.dI3.prototype={
$0(){return this.a.a7p("rabbits")},
$S:0}
A.cXH.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.f9()
k.e2(B.o.L(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.ah()
p=k.ah()
o=(r&1)===0?1:-1
o=B.k.J(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.ah()
p=Math.sin(s+r*2)
n=new C.mr(new C.eE(e,l,l,B.cT,l,l,l,l,l,l,new C.F(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),B.a5,B.cp,new C.km(1),l,l,l,l,B.co,l)
n.fK()
n.a6(w,new C.v(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1799}
A.cXJ.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this.a.c
if(l.length<2)return
w=$.a1()
v=C.a([],x.v)
u=new C.b_(w.r,B.au,null,null,v)
for(w=this.b,t=w.a,s=w.c-t,r=w.d,w=r-w.b,q=0;q<l.length;++q){p=t+s*q/159
o=r-w*B.k.D(l[q][d]/e,0,1)
if(q===0){n=new C.bj(p,o)
v.push(n)
m=u.f
if(m!=null)n.bI(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}else{n=new C.aw(p,o)
v.push(n)
m=u.f
if(m!=null)n.bI(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}}$.a1()
l=C.T()
l.b=B.aj
l.c=2.6
l.r=f.gt(0)
l.e=B.fj
this.c.b4(u,l)},
$S:1800}
A.cXI.prototype={
$3(d,e,f){var w=null,v=C.jF(w,w,w,w,C.dw(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),d),B.a5,B.cp,w,B.f3,B.co)
v.fK()
v.a6(this.a,new C.v(f,this.b.b+2))},
$S:1801}
A.bBf.prototype={
$2(d,e){return d+e.a*e.b},
$S:1802}
A.f79.prototype={
$2(d,e){return e.a-d.a},
$S:1803}
A.dtx.prototype={
$2(d,e){return d+e},
$S:76}
A.dtK.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.n(new A.dtJ(v,B.k.D((v.gv_()-w[v.e].gu4())/Math.max(w[v.e].gu4(),8),-1,1)*0.32,u))},
$S:8}
A.dtJ.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
A.dtL.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dtI(w,d))},
$S:132}
A.dtI.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aW(v==null?B.cK:v)
while(v.C())w.push(B.k.L(C.fc(v.gT(v))))
return this.a.r.v(0,w)},
$S:0}
A.dty.prototype={
$0(){var w=this.a.f,v=this.b,u=B.o.J(w[v]+1,6)
w[v]=u
return u},
$S:0}
A.dtD.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1804}
A.dtE.prototype={
$0(){var w=this.a
return w.n(new A.dtC(w))},
$S:0}
A.dtC.prototype={
$0(){var w=this.a;++w.e
B.d.hh(w.f,0,5,0)},
$S:0}
A.dtF.prototype={
$2(d,e){var w=null,v=this.a
return C.aJ(B.c5,C.b1(w,w,w,new A.b5F(v.w,this.b.a,v.f,v.gv_()===v.d[v.e].gu4(),w),B.fx),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dtB(v,e),w,w,w,!1,B.ae)},
$S:35}
A.dtB.prototype={
$1(d){var w=this.b.b,v=B.k.U((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cnP(v-1)},
$S:51}
A.dtG.prototype={
$0(){var w=this.a
return w.n(new A.dtA(w,this.b))},
$S:0}
A.dtA.prototype={
$0(){var w=this.a
w.e=this.b
B.d.hh(w.f,0,5,0)},
$S:0}
A.dtH.prototype={
$0(){var w=this.a
return w.n(new A.dtz(w))},
$S:0}
A.dtz.prototype={
$0(){return B.d.hh(this.a.f,0,5,0)},
$S:0}
A.cwL.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bZ(C.dy(new C.v(d,s),20,w),B.uT)
$.a1()
q=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
q.r=f.gt(0)
p=q.M()
u.drawRRect(C.fL(r),p)
p.delete()
q=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
q.b=B.aj
q.c=1.2
q.r=B.dx.gt(0)
p=q.M()
u.drawRRect(C.fL(r),p)
p.delete()
A.f6e(v,"1",new C.v(d,s),B.bg,11)}},
$S:1805}
A.dLT.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.n(new A.dLS(w,v))},
$S:8}
A.dLS.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
A.dLU.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dLR(w,d))},
$S:132}
A.dLR.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aW(v==null?B.cK:v)
while(v.C())w.push(B.k.L(C.fc(v.gT(v))))
return this.a.w.v(0,w)},
$S:0}
A.dLJ.prototype={
$0(){var w=B.k.U(this.c)
this.a.d[this.b]=w
return w},
$S:0}
A.dLN.prototype={
$0(){var w=this.a
return w.n(new A.dLM(w))},
$S:0}
A.dLM.prototype={
$0(){return this.a.r++},
$S:0}
A.dLO.prototype={
$0(){var w=this.a
return w.n(new A.dLL(w,this.b))},
$S:0}
A.dLL.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dLP.prototype={
$1(d){var w=this.a
return w.n(new A.dLK(w,d))},
$S:6}
A.dLK.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.dLQ.prototype={
$1(d){return this.a.bYn(this.b,d)},
$S:6}
A.d3z.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bI1(d,e,f,g),m=this.b
$.a1()
w=C.T()
v=C.aq(h,B.c,i?0.1:0.35)
v.toString
u=C.aq(h,B.x,0.5)
u.toString
w.saz(new C.bT(B.C,0.5,B.w,null,0,C.a([v,h,u],x.O),null,null).aB(0,C.c1(d,e+6)))
m.b4(n,w)
w=C.T()
w.b=B.aj
w.c=1.5
w.r=B.aV.gt(0)
m.b4(n,w)
w=C.T()
w.r=B.x.j(0.28).gt(0)
m.aw(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.ax(B.Z,B.Y,B.a3,B.a4,B.a2)
p.r=B.hT.gt(0)
p.c=3
o=p.M()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.T()
w.r=B.aJ.gt(0)
m.aw(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1806}
A.d3A.prototype={
$3(d,e,f){var w=this,v=w.b
return A.f6e(w.a,d,new C.v(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1807}
A.dxJ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dxI(w,d))},
$S:132}
A.dxI.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aW(v==null?B.cK:v)
while(v.C())w.push(B.k.L(C.fc(v.gT(v))))
return this.a.Q.v(0,w)},
$S:0}
A.dxr.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.ju(90-(w-65)):d},
$S:13}
A.dxA.prototype={
$1(d){return this.a.n(new A.dxz())},
$S:2}
A.dxz.prototype={
$0(){},
$S:0}
A.dxB.prototype={
$1(d){return this.a.n(new A.dxy())},
$S:2}
A.dxy.prototype={
$0(){},
$S:0}
A.dxC.prototype={
$0(){var w=this.a
return w.n(new A.dxx(w))},
$S:0}
A.dxx.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aS8()},
$S:0}
A.dxD.prototype={
$0(){var w=this.a
return w.n(new A.dxw(w))},
$S:0}
A.dxw.prototype={
$0(){return this.a.f=0},
$S:0}
A.dxE.prototype={
$0(){var w=this.a
return w.n(new A.dxv(w))},
$S:0}
A.dxv.prototype={
$0(){return this.a.f=1},
$S:0}
A.dxF.prototype={
$0(){var w=this.a
return w.n(new A.dxu(w,this.b))},
$S:0}
A.dxu.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dxG.prototype={
$1(d){var w=this.a
return w.n(new A.dxt(w,d))},
$S:6}
A.dxt.prototype={
$0(){return this.a.w=B.k.U(this.b)},
$S:0}
A.dxH.prototype={
$1(d){var w=this.a
w.n(new A.dxs(w,d))
if(w.ga6G()&&w.Q.G(0,w.x)){A.v3("zap",9,220,0.45)
w=w.Q
w=C.z(w,C.a2(w).k("cj.E"))
A.v0("cipher_lab",C.D(["done",w],x.N,x.z))}},
$S:6}
A.dxs.prototype={
$0(){return this.a.z=B.k.U(this.b)},
$S:0}
A.bGB.prototype={
$1(d){return d.r<=0},
$S:z+62}
A.bGL.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+15}
A.bGH.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+15}
A.bGN.prototype={
$2(d,e){var w=this.a
return w.ci(0,d.a+"."+e,new A.bGO(w))},
$S:z+5}
A.bGO.prototype={
$0(){return this.a.a},
$S:111}
A.bGM.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:87}
A.bGP.prototype={
$2(d,e){var w=this.a
return w.ci(0,this.b.$1(this.c.$2(d,e)),new A.bGQ(w))},
$S:z+5}
A.bGQ.prototype={
$0(){return this.a.a},
$S:111}
A.bGD.prototype={
$2(d,e){var w=this.a
return w.ci(0,d.a+"."+e,new A.bGE(w))},
$S:z+5}
A.bGE.prototype={
$0(){return this.a.a},
$S:111}
A.bGC.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:87}
A.bGF.prototype={
$2(d,e){var w=this.a
return w.ci(0,this.b.$1(this.c.$2(d,e)),new A.bGG(w))},
$S:z+5}
A.bGG.prototype={
$0(){return this.a.a},
$S:111}
A.bGK.prototype={
$1(d){return d.b===this.a},
$S:z+1}
A.bGJ.prototype={
$1(d){return d.ax>=this.a&&!d.x},
$S:z+1}
A.bGI.prototype={
$1(d){return d.b===this.a},
$S:z+1}
A.bC2.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
A.bC3.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+9}
A.ced.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:188}
A.bC_.prototype={
$2(d,e){if(d==="short"){A.e1(1800,"",120,0,0.55,"noise")
A.e1(200,"",160,2.2,0.4,"saw")
C.fT()}if(d==="burn"){A.e1(140,"",320,0,0.6,"noise")
A.e1(900,"",160,1.5,0.35,"square")}},
$S:z+65}
A.bC0.prototype={
$0(){},
$S:0}
A.bBz.prototype={
$0(){},
$S:0}
A.bC1.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
A.bBY.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ap(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aJ(B.c5,C.b1(p,p,p,new A.aOi(w,v,u,t,s,r==null?B.m0:r,p),n),B.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,new A.bBT(o),new A.bBU(o),new A.bBV(o),p,p,p,p,p,p,p,p,p,p,new A.bBW(o),p,p,p,!1,B.ae)],q)
if(o.a.c.a.length===0)n.push(D.aW6)
if(o.e!=null)n.push(C.an(8,o.aTe(C.A(C.a([D.bkM,new A.ff(B.X8,"Cut wire",new A.bBX(o),B.cJ,p)],q),B.m,p,B.e,B.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.an(8,o.c6D(w),p,p,10,10,p,p))}return C.k0(new C.am(B.W,p,B.aX,B.q,n,p),B.q,p)},
$S:400}
A.bBU.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b0C(s)
if(r!=null){t.n(new A.bBR(t,r,d))
return}w=t.aVF(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.v(v*u.a,w.d*u.b).aD(0,s)
t.n(new A.bBS(t,w))}},
$S:42}
A.bBR.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
A.bBS.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bBV.prototype={
$1(d){var w=this.a
if(w.f!=null)w.n(new A.bBP(w,d))
else if(w.w!=null)w.n(new A.bBQ(w,d.b.ap(0,w.x)))},
$S:18}
A.bBP.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
A.bBQ.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=B.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=B.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
A.bBT.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b0C(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.ayG(u.a,u.b,v.a,v.b)!=null)A.e1(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.aaG()},
$S:36}
A.bBW.prototype={
$1(d){var w=this.a,v=d.b,u=w.aVF(v)
if(u!=null){w.n(new A.bBN(w,u))
w.a.toString
return}w.n(new A.bBO(w,w.csz(v)))},
$S:51}
A.bBN.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
A.e1(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
A.e1(200,"",70,0,0.2,"saw")}},
$S:0}
A.bBO.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
A.bBX.prototype={
$0(){var w=this.a
B.d.W(w.a.c.b,w.e)
w.e=null
A.e1(300,"",50,0,0.35,"noise")
w.aaG()},
$S:0}
A.bBZ.prototype={
$0(){return this.a.bhz(this.b)},
$S:0}
A.bBK.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.A(C.a([C.d(d,w,w,w,w,w,w,D.enj,w,w,w),C.C(C.mq(this.b.d,w,w,g,h,new A.bBM(this.a,f),B.k.D(e,h,g)),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1808}
A.bBM.prototype={
$1(d){var w=this.a
w.n(new A.bBL(this.b,d))
w.a.toString},
$S:6}
A.bBL.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.bBD.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
A.e1(260,"",70,0,0.35,"noise")
w.aaG()},
$S:0}
A.bBE.prototype={
$0(){var w=this.a
return w.n(new A.bBC(w))},
$S:0}
A.bBC.prototype={
$0(){return this.a.d=null},
$S:0}
A.bBF.prototype={
$0(){var w=this.a
w.n(new A.bBB(this.b,this.c))
w.a.toString},
$S:0}
A.bBB.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.bBG.prototype={
$0(){var w=this.a
w.n(new A.bBA(this.b,this.c))
w.a.toString},
$S:0}
A.bBA.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.bBH.prototype={
$1(d){return this.a.f=d},
$S:6}
A.bBI.prototype={
$1(d){return this.a.f=d},
$S:6}
A.bBJ.prototype={
$1(d){return this.a.f=d},
$S:6}
A.eYE.prototype={
$1(d){return d.aBo("bulb")},
$S:z+2}
A.eYF.prototype={
$1(d){return d.aAy(0,"switch")&&d.aBo("bulb")},
$S:z+2}
A.eYG.prototype={
$1(d){return B.d.bc(d.a,new A.eYu())},
$S:z+2}
A.eYu.prototype={
$1(d){return d.b==="motor"&&d.ax>0.3},
$S:z+1}
A.eYH.prototype={
$1(d){return d.aAy(0,"resistor")&&B.d.bc(d.a,new A.eYt())},
$S:z+2}
A.eYt.prototype={
$1(d){return d.b==="led"&&d.ax>0.3&&!d.x},
$S:z+1}
A.eYI.prototype={
$1(d){return!d.aAy(0,"battery")&&d.aBo("bulb")},
$S:z+2}
A.eYy.prototype={
$1(d){return B.d.bc(d.a,new A.eYs())},
$S:z+2}
A.eYs.prototype={
$1(d){return d.b==="radio"&&d.ax>0},
$S:z+1}
A.eYz.prototype={
$1(d){return B.d.bc(d.a,new A.eYr())},
$S:z+2}
A.eYr.prototype={
$1(d){return d.b==="tv"&&d.ax>0},
$S:z+1}
A.eYA.prototype={
$1(d){return B.d.bc(d.a,new A.eYq())},
$S:z+2}
A.eYq.prototype={
$1(d){return d.b==="heater"&&d.ax>0.5},
$S:z+1}
A.dIb.prototype={
$0(){},
$S:0}
A.dIa.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.ePi,B.aw,D.eBp,B.U],o)
for(w=this.a,v=0;v<12;++v){u=D.Nh[v]
t=B.c.j(0.06)
s=new C.b2(14,14)
r=new C.ay(B.bG,1,B.r,-1)
n.push(C.aJ(q,C.p(q,C.u(C.a([new C.w(u.a,q,B.ka,q,q,q,q,q,q,q,q,q),B.bw,new C.w(u.b,q,D.eta,q,q,q,q,B.a0,q,3,q,q)],o),B.F,q,B.e,B.j,0,B.p),B.i,q,q,new C.o(t,q,new C.c2(r,r,r,r),new C.bx(s,s,s,s),q,q,B.n),q,q,q,B.cR,B.bj,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dI9(w,d,u),q,q,q,q,q,q,!1,B.ae))}return C.ez(q,D.aa3,new C.B(B.c2,new C.a8(340,q,C.cX(n,q,q,q,q,B.af,!0),q),q),q,q,q,q,B.cZ,q,new C.b5(p,B.V),q)},
$S:45}
A.dI9.prototype={
$0(){C.a6(this.b,!1).K(null)
var w=this.a
w.n(new A.dI8(w,this.c))
A.e1(800,"",120,-0.5,0.3,"square")},
$S:0}
A.dI8.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bb0()},
$S:0}
A.dId.prototype={
$0(){var w=this.a
return w.n(new A.dIc(w,this.b))},
$S:0}
A.dIc.prototype={
$0(){var w,v=this.a
if(this.b)w=v.f+1
else{$.bzb()
w=Math.min(8,v.f+1)}return v.f=w},
$S:0}
A.dIe.prototype={
$0(){var w=this.a
return w.n(w.d.gcJ_())},
$S:0}
A.dIf.prototype={
$0(){var w=this.a,v=w.d
return w.n(v.gqH(v))},
$S:0}
A.dXb.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new A.dXa(w,d))},
$S:132}
A.dXa.prototype={
$0(){var w=this.a,v=this.b,u=J.a4(v),t=C.aQ(u.h(v,"best"))
t=t==null?null:B.k.L(t)
w.e=t==null?0:t
v=C.aQ(u.h(v,"level"))
v=v==null?null:B.k.L(v)
if(v==null)v=0
w.d=v
w.f=A.fEb(v)},
$S:0}
A.dXc.prototype={
$0(){},
$S:0}
A.dX1.prototype={
$0(){var w=this.a,v=B.o.D(this.b,0,59)
w.d=v
w.f=A.fEb(v)
w.r.a8(0)
w.x=!1},
$S:0}
A.dX2.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.guB().r){C.jz()
return}q.m(0,p,"/")}else if(o==="/")q.m(0,p,"\\")
else q.W(0,p)
A.v3("click",s.c+s.d,60,0.4)
if(A.h1I(r.guB(),q).b.a===r.guB().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}A.v0("laser_maze",C.D(["best",p,"level",Math.min(q,59)],x.N,x.z))
A.Aj("bell",D.ajy,700,0.45)
for(q=r.guB().c,q=C.ee(q,q.r,C.a2(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.V(new C.v((B.o.J(t,7)+0.5)*p+w,(B.o.aj(t,7)+0.5)*p+v),0))}}},
$S:0}
A.dX5.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.ap(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aJ(B.c5,C.b1(s,s,s,new A.bcH(r.guB(),w,v.a,u,r.w,r.z,s),q),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.dX3(r),s,s,s,!1,B.ae),C.an(s,C.ec(C.A(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,E.aJ5,s,s,s),C.d(""+u.a+"/"+r.guB().c.a+" \u2605   mirrors "+w.a+"/"+r.guB().r,s,s,s,s,s,s,P.a3x,s,s,s)],t),B.m,s,B.iZ,B.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(A.f1Q("Beam delivered! \u2605","Level "+(r.d+1)+" done.",B.bq,C.a([new A.ff(B.jD,"Next level",new A.dX4(r),B.bq,s)],t)))
return new C.am(B.W,s,B.aX,B.q,w,s)},
$S:62}
A.dX3.prototype={
$1(d){return this.a.bYD(d.b)},
$S:51}
A.dX4.prototype={
$0(){var w=this.a
return w.aaI(w.d+1)},
$S:0}
A.dX6.prototype={
$0(){var w=this.a,v=w.r
return w.n(v.gqH(v))},
$S:0}
A.dX7.prototype={
$0(){var w=this.a
return w.aaI(w.d+1)},
$S:0}
A.dX8.prototype={
$0(){var w=this.a
return w.aaI(w.d-1)},
$S:0}
A.dX9.prototype={
$0(){return this.a.aaI(this.b)},
$S:0}
A.d8l.prototype={
$1(d){var w=this.b
return new C.v(this.a+(B.o.J(d,7)+0.5)*w,this.c+(B.o.aj(d,7)+0.5)*w)},
$S:727}
A.d8o.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.v(r,s):new C.v(r,r),p=new C.v(-q.a,-q.b)
r=this.c
w=t.ap(0,q)
v=t.ap(0,p)
$.a1()
u=C.T()
u.r=(f?B.j7:B.aJ).gt(0)
u.c=7
u.d=B.bZ
r.bU(w,v,u)
w=t.ap(0,q)
v=t.ap(0,p)
u=C.T()
u.r=B.c.gt(0)
u.c=2.4
u.d=B.bZ
r.bU(w,v,u)},
$S:1810}
A.d8m.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:447}
A.d8n.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:447}
A.dXu.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dXt(w,d))},
$S:132}
A.dXt.prototype={
$0(){var w=C.aQ(J.q(this.b,"best"))
w=w==null?null:B.k.L(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
A.dXv.prototype={
$0(){},
$S:0}
A.dXf.prototype={
$1(d){return d===0},
$S:134}
A.dXo.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.x(1,q[0],q[1],q[2],B.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,E.a3H,s,s,s)
w=r.z==="play"?B.k.dF(r.y):20
v=x.p
w=C.A(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?B.cJ:B.c,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,P.a3x,s,s,s)],v),B.m,s,B.iZ,B.j,0,s,s)
q=r.z==="ready"
u=q?B.du:p
t=C.m(22)
t=C.C(C.p(s,s,B.i,s,s,new C.o(u,s,C.H(B.be,B.r,2),t,s,s,B.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.u(C.a([new C.B(D.bf9,w,s),C.C(C.A(C.a([C.C(new C.B(B.bT,C.u(C.a([t,B.ar,C.d(q?"TARGET":"TARGET: "+r.gcnS(),s,s,s,s,s,s,D.aJO,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),1),C.C(new C.B(B.bT,C.u(C.a([C.C(C.b1(s,s,s,new A.bcW(r.f,s),B.fx),1),B.ar,C.d("YOURS \xb7 "+B.k.U(B.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aJO,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),1)],v),B.m,s,B.e,B.j,0,s,s),1)],v),B.m,s,B.e,B.j,0,B.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(A.f1Q("Light Mixer","Match each colour with red, green and blue light."+q,B.b8,C.a([new A.ff(B.iX,"Start",new A.dXl(r),B.bq,s)],v)))}if(r.z==="result")w.push(A.f1Q(r.Q,"Score so far: "+r.w,B.aM,C.a([new A.ff(B.jD,"Next colour",new A.dXm(r),B.bq,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(A.f1Q("Finished! "+q,u,B.bq,C.a([new A.ff(B.lV,"Play again",new A.dXn(r),B.bq,s)],v)))}return new C.am(B.W,s,B.a9,B.q,w,s)},
$S:62}
A.dXl.prototype={
$0(){var w=this.a
return w.n(new A.dXh(w))},
$S:0}
A.dXh.prototype={
$0(){var w=this.a
w.w=w.r=0
w.asI()},
$S:0}
A.dXm.prototype={
$0(){var w=this.a
return w.n(w.gbYB())},
$S:0}
A.dXn.prototype={
$0(){var w=this.a
return w.n(new A.dXg(w))},
$S:0}
A.dXg.prototype={
$0(){var w=this.a
w.w=w.r=0
w.asI()},
$S:0}
A.dXp.prototype={
$1(d){var w=this.a
return w.n(new A.dXk(w,d))},
$S:6}
A.dXk.prototype={
$0(){var w=B.k.U(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
A.dXq.prototype={
$1(d){var w=this.a
return w.n(new A.dXj(w,d))},
$S:6}
A.dXj.prototype={
$0(){var w=B.k.U(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
A.dXr.prototype={
$1(d){var w=this.a
return w.n(new A.dXi(w,d))},
$S:6}
A.dXi.prototype={
$0(){var w=B.k.U(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
A.dXs.prototype={
$0(){var w=this.a
return w.n(w.gbYC())},
$S:0}
A.eZm.prototype={
$0(){return D.dFz},
$S:z+67}
A.eZn.prototype={
$0(){return D.ddh},
$S:z+68}
A.eZo.prototype={
$0(){return D.d9R},
$S:z+69}
A.eZp.prototype={
$0(){return D.dcI},
$S:z+70}
A.eZq.prototype={
$0(){return D.dhE},
$S:z+71}
A.eZr.prototype={
$0(){return D.dBs},
$S:z+72}
A.eZs.prototype={
$0(){return D.dDE},
$S:z+73}
A.eZt.prototype={
$0(){return D.dgY},
$S:z+74}
A.c92.prototype={
$0(){return C.a6(this.a,!1).pT()},
$S:0}
A.c93.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.h56(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.b2(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.a9(0,B.G,p.j(0.4),B.dm,16)],t)
n=B.c.j(0.85)
j.push(C.aJ(m,C.p(m,new C.am(B.W,m,B.a9,B.q,C.a([new C.cE(m,-6,-6,m,m,m,new C.w(r.c,m,I.QB,m,m,m,m,m,m,m,m,m),m),new C.bE(B.l7,m,m,C.u(C.a([new C.w(r.a,m,D.exA,m,m,m,m,m,m,m,m,m),B.dh,new C.w(r.b,m,new C.F(!0,n,m,m,m,m,12,B.a_,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),B.F,m,B.e,B.R,0,B.p),m)],k),m),B.i,m,m,new C.o(m,m,m,new C.bx(q,q,q,q),p,new C.a7(B.ax,B.aE,B.w,o,m,m),B.n),m,v,m,m,B.bC,m,m,l),B.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.c91(d,r),m,m,m,m,m,m,!1,B.ae))}return C.cf(B.bI,j,B.by,14,14)},
$S:172}
A.c91.prototype={
$0(){return C.a6(this.a,!1).cz(C.eN(new A.c90(this.b),!1,null,x.H))},
$S:0}
A.c90.prototype={
$1(d){return this.a.f.$0()},
$S:44}
A.es_.prototype={
$0(){var w=this.a
return w.w=w.d[w.aZ_(w.f)]},
$S:0}
A.erW.prototype={
$0(){var w=this.a
w.w=""
w.r=9+B.cz.ah()*7},
$S:0}
A.erV.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bH(0,B.c0)
w.w=""},
$S:0}
A.erY.prototype={
$0(){var w=this.a
return w.n(new A.erX(w,this.b))},
$S:0}
A.erX.prototype={
$0(){var w=this.a.d
if(w.length>2)B.d.ct(w,this.b)},
$S:0}
A.erZ.prototype={
$1(d){return this.a.aTx(0)},
$S:2}
A.dKb.prototype={
$0(){return A.Aj("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
A.dKc.prototype={
$0(){},
$S:0}
A.dK6.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
A.dK8.prototype={
$0(){return this.a.aTz(this.b)},
$S:0}
A.dK9.prototype={
$0(){var w=this.a
return w.n(new A.dK7(w))},
$S:0}
A.dK7.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
A.dKa.prototype={
$0(){var w=this.a
return w.aTz(w.d)},
$S:0}
A.dw9.prototype={
$2(d,e){return d+e},
$S:94}
A.dwa.prototype={
$0(){},
$S:0}
A.dw4.prototype={
$2(d,e){return d+e},
$S:94}
A.dw7.prototype={
$0(){var w=this.a
return w.n(new A.dw6(w,this.b))},
$S:0}
A.dw6.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
A.dw8.prototype={
$0(){var w=this.a
return w.n(new A.dw5(w))},
$S:0}
A.dw5.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
A.dHI.prototype={
$0(){return A.qf(this.b,this.a.d,"drawing")},
$S:0}
A.dHJ.prototype={
$1(d){var w=this.a
return w.n(new A.dHH(w,d))},
$S:42}
A.dHH.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new A.aEz(u,v,t))},
$S:0}
A.dHK.prototype={
$1(d){var w=this.a
return w.n(new A.dHG(w,d))},
$S:18}
A.dHG.prototype={
$0(){return B.d.gai(this.a.e).c.push(this.b.b)},
$S:0}
A.dHL.prototype={
$1(d){var w=this.a
return w.n(new A.dHF(w,d))},
$S:23}
A.dHF.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new A.aEz(u,v,t))},
$S:0}
A.dHM.prototype={
$0(){var w=this.a
return w.n(new A.dHE(w,this.b))},
$S:0}
A.dHE.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
A.dHN.prototype={
$1(d){var w=this.a
return w.n(new A.dHD(w,d))},
$S:6}
A.dHD.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dHO.prototype={
$0(){var w=this.a
return w.n(new A.dHC(w))},
$S:0}
A.dHC.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
A.dHP.prototype={
$0(){var w=this.a
return w.n(new A.dHB(w))},
$S:0}
A.dHB.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
A.dHQ.prototype={
$0(){var w=this.a
return w.n(B.d.gqH(w.e))},
$S:0}
A.dHR.prototype={
$0(){var w=this.a
return w.n(new A.dHA(w))},
$S:0}
A.dHA.prototype={
$0(){var w=this.a
w.x=D.aqf[B.o.J(B.d.cP(D.aqf,w.x)+1,4)]},
$S:0}
A.e1D.prototype={
$0(){return this.a.f.G(0,this.b)},
$S:0}
A.e1E.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
A.Aj("bell",C.a([0,4,7],w),500,0.45)
u.n(new A.e1C(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)A.Aj("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
A.e1C.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
A.e1F.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new A.e1B(w))},
$S:11}
A.e1B.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
A.e1J.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return C.aJ(w,C.mR(new A.e1H(v,e),w,B.b7,B.u3,w,new C.bm(0,u,x.e7),x.i),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e1I(v,e),w,w,w,w,w,w,!1,B.ae)},
$S:73}
A.e1I.prototype={
$0(){return this.a.bZp(this.b)},
$S:0}
A.e1H.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.df(),m=n.a
m.$flags&2&&C.ah(m)
m[11]=0.001
n.fk(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bGj
if(o)v=q.a.r.q(0,q.b)?B.bq.j(0.25):B.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.H(u.r.q(0,t)?B.bq:B.be,B.r,1)
if(o){r=C.df()
r.fk(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fp(B.C,C.d(u[t],p,p,p,p,p,p,D.ev_,p,p,p),p,r,!0)
u=r}else u=D.eOa
return C.fp(B.C,C.p(B.C,u,B.i,p,p,new C.o(v,p,s,m,p,w,B.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:136}
A.e1K.prototype={
$0(){var w=this.a
return w.n(new A.e1G(w,this.b))},
$S:0}
A.e1G.prototype={
$0(){var w=this.a
w.d=this.b.a
w.aog()},
$S:0}
A.e1L.prototype={
$0(){var w=this.a
return w.n(w.gbBz())},
$S:0}
A.e9m.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
A.e9n.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
A.e9k.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.e9l.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new A.e9j(w))},
$S:11}
A.e9j.prototype={
$0(){return this.a.f=-1},
$S:0}
A.e9o.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
A.e9p.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
A.e9q.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aTy()},
$S:11}
A.e9r.prototype={
$0(){return this.a.bZv(this.b)},
$S:0}
A.enE.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:70}
A.enN.prototype={
$3$big(d,e,f){var w=null,v=C.C(C.d(d,w,1,B.a0,w,w,w,C.l(w,w,B.aP,w,w,w,w,w,w,w,w,f?16:14,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.B(B.li,C.A(C.a([v,B.ab,new C.dp(1,B.cj,C.f0(B.C,C.d(e,w,w,w,w,w,w,C.l(w,w,B.c,w,w,w,w,w,w,w,w,f?30:18,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.i,B.e8),w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1812}
A.enJ.prototype={
$1(d){return this.a.n(new A.enI())},
$S:2}
A.enI.prototype={
$0(){},
$S:0}
A.enK.prototype={
$0(){var w=this.a
return w.n(new A.enH(w,this.b))},
$S:0}
A.enH.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.enL.prototype={
$1(d){var w=this.a
return w.n(new A.enG(w,d))},
$S:6}
A.enG.prototype={
$0(){return this.a.f=B.k.U(this.b)},
$S:0}
A.enM.prototype={
$0(){var w=this.a
return w.n(new A.enF(w))},
$S:0}
A.enF.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
A.e0i.prototype={
$0(){},
$S:0}
A.e0j.prototype={
$0(){},
$S:0}
A.e0b.prototype={
$0(){var w=this.a
return w.n(new A.e0a(w))},
$S:0}
A.e0a.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.bS(u,1,!1,x.S)
w.r=0.9
A.a5M("hat",0.6)},
$S:0}
A.e0c.prototype={
$0(){var w=this.a
return w.n(new A.e09(w))},
$S:0}
A.e09.prototype={
$0(){this.a.y=1.1
A.kY("bell",36,200,0.4)},
$S:0}
A.e0d.prototype={
$0(){var w=this.a
return w.n(new A.e08(w))},
$S:0}
A.e08.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aE(Math.max(v,u)-t+1)
w.as=u
A.kY("bell",12+B.o.J(u,12),500,0.5)},
$S:0}
A.e0e.prototype={
$0(){var w=this.a
return w.n(new A.e07(w,this.b))},
$S:0}
A.e07.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
A.e0f.prototype={
$1(d){var w=this.a
return w.n(new A.e06(w,d))},
$S:6}
A.e06.prototype={
$0(){var w,v,u,t=this.a,s=t.e=B.k.U(this.b),r=J.e0(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
A.e0g.prototype={
$1(d){var w=this.a
return w.n(new A.e05(w,d))},
$S:6}
A.e05.prototype={
$0(){return this.a.z=B.k.U(this.b)},
$S:0}
A.e0h.prototype={
$1(d){var w=this.a
return w.n(new A.e04(w,d))},
$S:6}
A.e04.prototype={
$0(){return this.a.Q=B.k.U(this.b)},
$S:0}
A.cl8.prototype={
$0(){return C.a6(this.a,!1).pT()},
$S:0}
A.cl9.prototype={
$0(){var w=this.a
return A.hMy(this.b,w.c,w.e,w.d)},
$S:0}
A.fu8.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,B.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.enP,v,v,v)
return C.ei(C.a([C.bF(!1,D.eEl,v,v,!0,v,v,new A.fu7(d),v,v)],x.p),v,v,D.rk,w,v,v,v,new C.b5(u,new C.ay(s,1,B.r,-1)),t,v)},
$S:19}
A.fu7.prototype={
$0(){C.a6(this.a,!1).K(null)
return null},
$S:0}
A.cl4.prototype={
$0(){C.eL()
this.a.e.$0()},
$S:0}
A.cl3.prototype={
$0(){C.eL()
this.a.e.$0()},
$S:0}
A.cla.prototype={
$0(){C.eL()
this.a.e.$0()},
$S:0}
A.cl5.prototype={
$0(){var w=this.a
B.d.W(w.fb$,this.b.b6())
if(w.c!=null)this.c.$0()},
$S:0}
A.cl7.prototype={
$1(d){var w=this.a,v=d.a,u=B.k.D((v-w.kt$.a)/1e6,0,0.04)
w.kt$=d
w.fB$=B.o.aj(v,1000)
w.kZ(u)
if(w.c!=null)w.n(new A.cl6())},
$S:8}
A.cl6.prototype={
$0(){},
$S:0}
A.c8X.prototype={
$2(d,e){var w,v,u,t
for(w=e.length,v=this.a,u=v.$flags|0,t=0;t<w;++t){u&2&&C.ah(v,9)
v.setUint8(d+t,e.charCodeAt(t))}},
$S:447}
A.c8Z.prototype={
$0(){var w=this
return A.hj4(w.a,w.b,w.c,w.d,w.e)},
$S:278}
A.c8Y.prototype={
$0(){var w=this
return A.kY(w.a,w.b,w.c,w.d)},
$S:1}
A.dMU.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new A.dMT(w,d))},
$S:z+76}
A.dMT.prototype={
$0(){return this.a.cin(this.b)},
$S:0}
A.dMm.prototype={
$0(){var w,v,u,t=this.a,s=J.a4(t),r=s.gH(t),q=new Float64Array(r*4)
for(w=0;w<s.gH(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:1813}
A.dMk.prototype={
$0(){return this.a.id=D.a_8},
$S:0}
A.dMl.prototype={
$0(){var w=this.b.a,v=C.S(w).k("a3<1>")
v=C.oG(new C.a3(w,new A.dMj(this.c),v),6,v.k("E.E"))
w=C.z(v,C.a2(v).k("E.E"))
return this.a.id=w},
$S:0}
A.dMj.prototype={
$1(d){return B.a.q(d.a.toLowerCase(),this.a)},
$S:z+77}
A.dMi.prototype={
$1(d){var w=null,v=C.ce(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,B.ak,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),B.q,w,B.z,w,w,w,w,B.af)
return C.ei(C.a([C.bF(!1,B.px,w,w,!0,w,w,new A.dMh(d),w,w)],x.p),w,w,D.rk,v,w,w,w,w,D.eOe,w)},
$S:19}
A.dMh.prototype={
$0(){C.a6(this.a,!1).K(null)
return null},
$S:0}
A.dMF.prototype={
$0(){return A.qf(this.b,this.a.d,"earth")},
$S:0}
A.dMG.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ap(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gTS()
r=p.z
o=C.a([C.aJ(B.c5,C.b1(q,q,q,new A.bb8(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dMt(p),new A.dMu(p),new A.dMv(p),q,q,q,q,q,q,q,new A.dMw(p),q,q,q,!1,B.ae)],x.p)
if(p.r==null)o.push(Ac.a7q)
w=this.b
if(w!=null)o.push(C.an(8,p.c_6(w),q,q,10,10,q,q))
return new C.es(new C.am(B.W,q,B.aX,B.q,o,q),p.d)},
$S:193}
A.dMu.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:372}
A.dMv.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=B.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gTS()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=B.k.D(u.x+v.b*w,-85,85)}},
$S:281}
A.dMt.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gTS()*u.z)
v=d.a.a
u.Q=B.k.D(-v.a*w,-160,160)
u.as=B.k.D(v.b*w,-100,100)},
$S:498}
A.dMw.prototype={
$1(d){var w=this.a,v=w.c_9(d.b)
if(v!=null)w.n(new A.dMn(w,v))
else w.n(new A.dMo(w))},
$S:51}
A.dMn.prototype={
$0(){return this.a.at7(this.b)},
$S:0}
A.dMo.prototype={
$0(){return this.a.fx=null},
$S:0}
A.dMH.prototype={
$0(){var w=this.a
w.e.bH(0,B.c0)
w.n(new A.dMs(w,this.b))},
$S:0}
A.dMs.prototype={
$0(){var w=this.a
w.id=D.a_8
w.at7(this.b)},
$S:0}
A.dML.prototype={
$0(){var w=this.a
return w.n(new A.dME(w))},
$S:0}
A.dME.prototype={
$0(){var w=this.a
w.fx=null
w.app(15,w.y,1)},
$S:0}
A.dMM.prototype={
$0(){var w=this.a
return w.n(new A.dMD(w,this.b))},
$S:0}
A.dMD.prototype={
$0(){var w=this.b.b
return this.a.app(w.a,w.b,w.c)},
$S:0}
A.dMN.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.n(new A.dMC(w,v))},
$S:0}
A.dMC.prototype={
$0(){var w=this.b.a
return this.a.at7(w[B.cz.aE(w.length)])},
$S:0}
A.dMO.prototype={
$1(d){var w=this.a
return w.n(new A.dMB(w,d))},
$S:6}
A.dMB.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
A.dMP.prototype={
$1(d){var w=this.a
return w.n(new A.dMA(w,d))},
$S:6}
A.dMA.prototype={
$0(){return this.a.dy=this.b},
$S:0}
A.dMQ.prototype={
$1(d){var w=this.a
return w.n(new A.dMz(w,d))},
$S:6}
A.dMz.prototype={
$0(){return this.a.fr=this.b},
$S:0}
A.dMR.prototype={
$0(){var w=this.a
return w.n(new A.dMy(w))},
$S:0}
A.dMy.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
A.dMS.prototype={
$0(){var w=this.a
return w.n(new A.dMx(w))},
$S:0}
A.dMx.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
A.dMI.prototype={
$0(){var w=this.a
return w.n(new A.dMr(w))},
$S:0}
A.dMr.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
A.dMJ.prototype={
$0(){var w=this.a
return w.n(new A.dMq(w))},
$S:0}
A.dMq.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
A.dMK.prototype={
$0(){var w=this.a
return w.n(new A.dMp(w))},
$S:0}
A.dMp.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
A.dMg.prototype={
$2(d,e){var w=null
return C.C(C.u(C.a([C.d(d,w,w,w,w,w,w,D.aIw,w,w,w),B.y3,C.d(e,w,2,B.a0,w,w,w,B.QQ,w,w,w)],x.p),B.F,w,B.e,B.j,0,B.p),1)},
$S:127}
A.dMf.prototype={
$0(){var w=this.a
return w.n(new A.dMe(w))},
$S:0}
A.dMe.prototype={
$0(){return this.a.fx=null},
$S:0}
A.d4n.prototype={
$0(){var w=null,v=C.jF(w,w,w,w,C.dw(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,B.I,w,w,!0,w,w,w,w,w,D.cGf,w,w),this.a),B.a5,B.cp,w,B.f3,B.co)
v.fK()
return v},
$S:309}
A.d4o.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.v(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1814}
A.eZf.prototype={
$0(){return D.dfe},
$S:z+78}
A.eZg.prototype={
$0(){return D.dDm},
$S:z+79}
A.eZh.prototype={
$0(){return D.dfg},
$S:z+80}
A.eZi.prototype={
$0(){return D.d9D},
$S:z+81}
A.eZj.prototype={
$0(){return D.dfc},
$S:z+82}
A.eZk.prototype={
$0(){return D.dBt},
$S:z+83}
A.eZl.prototype={
$0(){return D.dBr},
$S:z+84}
A.eoa.prototype={
$0(){return C.a6(this.a,!1).pT()},
$S:0}
A.eob.prototype={
$0(){var w=this.a
return w.n(new A.eo9(w))},
$S:0}
A.eo9.prototype={
$0(){var w=this.a
return w.d=B.o.J(w.gaN4()+1,16)},
$S:0}
A.eoc.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.h55(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.b2(18,18)
q=s.d
p=new C.ay(q.j(0.5),1,B.r,-1)
o=C.a([q.j(0.28),D.b6y],u)
k.push(C.aJ(n,C.p(n,C.u(C.a([C.U(s.c,q,n,n,n,30),B.P,new C.w(s.a,n,D.es8,n,B.L,n,n,n,n,2,n,n),B.dh,new C.w(s.b,n,D.ewZ,n,B.L,n,n,n,n,2,n,n)],l),B.m,n,B.b5,B.j,0,B.p),B.i,n,n,new C.o(n,n,new C.c2(p,p,p,p),new C.bx(r,r,r,r),n,new C.a7(B.ax,B.aE,B.w,o,n,n),B.n),n,v,n,n,B.ch,n,n,m),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.eo8(d,s),n,n,n,n,n,n,!1,B.ae))}return C.cf(B.fz,k,B.by,10,10)},
$S:172}
A.eo8.prototype={
$0(){return C.a6(this.a,!1).cz(C.eN(new A.eo7(this.b),!1,null,x.H))},
$S:0}
A.eo7.prototype={
$1(d){return this.a.e.$0()},
$S:44}
A.egA.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
A.egL.prototype={
$0(){return A.qf(this.b,this.a.d,"solar-system")},
$S:0}
A.egM.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.ap(e.b,e.d)
u.ch=t
t=C.a([C.aJ(B.c5,C.b1(v,v,v,new A.bnk(u,v),t),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.egI(u),new A.egJ(u),v,v,v,v,v,v,v,new A.egK(u),v,v,v,!1,B.ae)],x.p)
w=this.b
if(w!=null)t.push(C.an(8,u.c_b(w),v,v,10,10,v,v))
return new C.es(new C.am(B.W,v,B.aX,B.q,t,v),u.d)},
$S:193}
A.egI.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:372}
A.egJ.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=B.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ap(0,d.a)},
$S:281}
A.egK.prototype={
$1(d){var w=this.a,v=w.c_e(d.b)
if(v!=null)w.aTU(v)},
$S:51}
A.egN.prototype={
$0(){var w=this.a
return w.n(new A.egH(w))},
$S:0}
A.egH.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=B.J
w.w=1},
$S:0}
A.egO.prototype={
$0(){return this.a.aTU(this.b)},
$S:0}
A.egP.prototype={
$1(d){var w=this.a
return w.n(new A.egG(w,d))},
$S:6}
A.egG.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
A.egQ.prototype={
$1(d){var w=this.a
return w.n(new A.egF(w,d))},
$S:6}
A.egF.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.egR.prototype={
$0(){var w=this.a
return w.n(new A.egE(w))},
$S:0}
A.egE.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
A.egS.prototype={
$0(){var w=this.a
return w.n(new A.egD(w))},
$S:0}
A.egD.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
A.egT.prototype={
$0(){var w=this.a
return w.n(new A.egC(w))},
$S:0}
A.egC.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
A.egU.prototype={
$0(){var w=this.a
return w.n(new A.egB(w))},
$S:0}
A.egB.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
A.egz.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=B.k.ab(d/365.25,w)+" Earth years"}else w=B.k.ab(d,0)+" Earth days"
return w},
$S:453}
A.egy.prototype={
$2(d,e){var w=null
return C.C(C.u(C.a([C.d(d,w,w,w,w,w,w,D.aIw,w,w,w),B.y3,C.d(e,w,2,B.a0,w,w,w,B.QQ,w,w,w)],x.p),B.F,w,B.e,B.j,0,B.p),1)},
$S:127}
A.egx.prototype={
$0(){var w=this.a
return w.n(new A.egw(w))},
$S:0}
A.egw.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
A.eHY.prototype={
$0(){var w=null,v=C.jF(w,w,w,w,C.dw(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,B.I,w,w,!0,w,w,w,w,w,E.Np,w,w),this.a),B.a5,B.cp,w,B.f3,B.co)
v.fK()
return v},
$S:309}
A.eHZ.prototype={
$1(d){return d.c>0},
$S:z+8}
A.eI_.prototype={
$1(d){return d.c>0},
$S:z+8}
A.dMY.prototype={
$0(){},
$S:0}
A.dNq.prototype={
$1(d){return d!=null},
$S:397}
A.dNc.prototype={
$0(){var w=this.a
return w.n(new A.dN3(w,this.b))},
$S:0}
A.dN3.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
A.dNd.prototype={
$0(){var w=this.a
return w.n(new A.dN2(w))},
$S:0}
A.dN2.prototype={
$0(){return this.a.f=!1},
$S:0}
A.dNe.prototype={
$0(){var w=this.a
return w.n(new A.dNb(w))},
$S:0}
A.dNb.prototype={
$0(){return this.a.f=!0},
$S:0}
A.dNi.prototype={
$0(){var w=this.a
return w.n(new A.dNa(w))},
$S:0}
A.dNa.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
A.dNj.prototype={
$1(d){var w=this.a
return w.n(new A.dN9(w,d))},
$S:6}
A.dN9.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dNk.prototype={
$0(){var w=this.a
return w.n(w.gclt())},
$S:0}
A.dNl.prototype={
$1(d){var w=this.a
return w.n(new A.dN8(w,d))},
$S:6}
A.dN8.prototype={
$0(){return this.a.at=this.b},
$S:0}
A.dNm.prototype={
$1(d){var w=this.a
return w.n(new A.dN7(w,d))},
$S:6}
A.dN7.prototype={
$0(){return this.a.ax=this.b},
$S:0}
A.dNn.prototype={
$1(d){var w=this.a
return w.n(new A.dN6(w,d))},
$S:6}
A.dN6.prototype={
$0(){return this.a.ay=this.b},
$S:0}
A.dNo.prototype={
$1(d){var w=this.a
return w.n(new A.dN5(w,d))},
$S:6}
A.dN5.prototype={
$0(){return this.a.ch=this.b},
$S:0}
A.dNp.prototype={
$0(){var w=this.a
return w.n(new A.dN4(w))},
$S:0}
A.dN4.prototype={
$0(){return this.a.ay=4},
$S:0}
A.dNf.prototype={
$0(){var w=this.a
return w.n(new A.dN1(w))},
$S:0}
A.dN1.prototype={
$0(){return this.a.ay=7.67},
$S:0}
A.dNg.prototype={
$0(){var w=this.a
return w.n(new A.dN0(w))},
$S:0}
A.dN0.prototype={
$0(){return this.a.ay=9},
$S:0}
A.dNh.prototype={
$0(){var w=this.a
return w.n(new A.dN_(w))},
$S:0}
A.dN_.prototype={
$0(){return this.a.ay=11.3},
$S:0}
A.dMX.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.c_(0,C.bQ(g,new C.o(D.b5k,g,g,C.m(20),g,g,B.n),B.ba),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.xo[q]
n=C.bg(o.d)
o=C.u(C.a([new C.w(o.a,g,new C.F(!0,n,g,g,g,g,12.5,B.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.w(C.t(D.xo[q].b)+" m/s\xb2",g,D.ewk,g,g,g,g,g,g,g,g,g)],a0),B.m,g,B.e,B.j,0,B.p)
n=p+t
m=C.p(g,g,B.i,B.du,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.U(Q.WV,C.bg(D.xo[q].d),g,g,g,22):C.p(g,g,B.i,g,g,new C.o(C.bg(D.xo[q].d),g,g,g,C.a([new C.a9(0,B.G,C.bg(D.xo[q].d).j(0.6),B.J,10)],u),g,B.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,B.i,C.bg(D.xo[q].d).j(0.6),g,g,g,3,g,B.fi,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=B.k.ab(i,2)+" s"
h=v[q]==null?"":"to land"
B.d.v(a1,C.a([new C.cE(p,8,g,g,f,g,o,g),new C.cE(n-0.5,54,g,e,g,g,m,g),new C.cE(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cE(p,g,g,8,f,g,C.u(C.a([j,B.aw,new C.w(i,g,B.yc,g,g,g,g,g,g,g,g,g),new C.w(h,g,D.eoZ,g,g,g,g,g,g,g,g,g)],a0),B.m,g,B.e,B.j,0,B.p),g)],a0))}if(!w.x&&B.d.e7(v,new A.dMW()))a1.push(D.aWn)
return new C.am(B.W,g,B.a9,B.q,a1,g)},
$S:62}
A.dMW.prototype={
$1(d){return d==null},
$S:397}
A.dMZ.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=B.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,B.i,v,v,new C.o(B.c.j(0.05),v,v,p,v,v,B.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.de(v,v,v,v,B.b7,new C.o(v,v,v,C.m(8),v,new C.a7(B.a1,B.a7,B.w,C.a([C.bg(t).j(0.9),C.bg(t).j(0.4)],x.O),v,v),B.n),B.iz,v,26,v,v,v,v,e.b*q)
w=r<100?B.k.ab(r,1):A.F6(r)
u=u.ax*9.81/s
u=u<10?B.k.ab(u,2):B.k.ab(u,0)
return new C.am(B.W,v,B.a9,B.q,C.a([p,t,C.an(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.euM,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:62}
A.dMV.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b1(v,v,v,new A.b6s(new C.v(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),B.at)
o=B.x.j(0.55)
p=C.m(14)
q=C.H(B.bG,B.r,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(B.a.q(u,"forever")||B.a.q(u,"again"))u=B.bq
else u=B.a.q(u,"escapes")?B.b3:B.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=B.k.ab(Math.sqrt(58.86870477034412),1)
s=B.k.ab(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+A.F6(B.k.D(r.cx.gcr()-6371,0,9e9))+" km":""
w=x.p
return new C.am(B.W,v,B.aX,B.q,C.a([n,C.an(v,C.p(v,C.u(C.a([u,B.bw,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,G.aK4,v,v,v)],w),B.F,v,B.e,B.R,0,B.p),B.i,v,v,new C.o(o,v,q,p,v,v,B.n),v,v,v,v,B.bT,v,v,v),v,v,12,12,8,v)],w),v)},
$S:62}
A.e9u.prototype={
$0(){return A.qf(this.b,this.a.d,"size-compare")},
$S:0}
A.e9v.prototype={
$0(){var w=this.a
return w.n(new A.e9t(w,this.b))},
$S:0}
A.e9t.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.e9w.prototype={
$0(){var w=this.a
return w.n(new A.e9s(w,this.b))},
$S:0}
A.e9s.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.eG7.prototype={
$3(d,e,f){var w,v,u=this.a
$.a1()
w=C.T()
w.r=f.j(0.2).gt(0)
w.z=new C.hG(B.G,Math.max(2,e*0.18))
u.aw(d,e*1.12,w)
w=C.T()
v=C.aq(f,B.x,0.6)
v.toString
w.saz(new C.bT(N.qT,0.5,B.w,null,0,C.a([B.c,f,v],x.O),G.Zn,null).aB(0,C.c1(d,e)))
u.aw(d,e,w)},
$S:725}
A.dvB.prototype={
$1(d){return d.e<=0},
$S:z+86}
A.dvp.prototype={
$1(d){return d.b},
$S:z+57}
A.dvq.prototype={
$0(){return A.qf(this.b,this.a.d,"black-hole")},
$S:0}
A.dvr.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ap(e.b,e.d)
p.Q=o
o=C.aJ(B.c5,C.b1(q,q,q,new A.b5Q(p,q),o),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dvn(p),q,q,q,q,q,q,q,q,q,new A.dvo(p),q,q,q,q,!1,B.ae)
w=B.x.j(0.55)
v=C.m(14)
u=C.H(B.bG,B.r,1)
t=p.r
if(t<1000)t=B.k.ab(t,t<10?1:0)+" Suns"
else t=A.f8Z(t)+" Suns"
t=p.abi("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.an(q,C.p(q,C.A(C.a([t,p.abi("EDGE WIDTH",(s<100?B.k.ab(s,1):A.F6(s))+" km"),p.abi("TIME",B.k.ab(this.b*100,0)+"%"),p.abi("EATEN",""+p.as)],r),B.m,q,B.e,B.j,0,q,q),B.i,q,q,new C.o(w,q,u,v,q,q,B.n),q,q,q,q,B.bT,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.dPv)
return new C.es(new C.am(B.W,q,B.aX,B.q,r,q),p.d)},
$S:193}
A.dvo.prototype={
$1(d){return this.a.aTV(d.b)},
$S:23}
A.dvn.prototype={
$1(d){if(B.cz.ah()<0.12)this.a.aTV(d.b)},
$S:18}
A.dvt.prototype={
$1(d){var w=this.a
return w.n(new A.dvm(w,d))},
$S:6}
A.dvm.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
A.dvu.prototype={
$0(){var w=this.a
return w.n(new A.dvl(w))},
$S:0}
A.dvl.prototype={
$0(){return this.a.r=10},
$S:0}
A.dvv.prototype={
$0(){var w=this.a
return w.n(new A.dvk(w))},
$S:0}
A.dvk.prototype={
$0(){return this.a.r=21},
$S:0}
A.dvw.prototype={
$0(){var w=this.a
return w.n(new A.dvj(w))},
$S:0}
A.dvj.prototype={
$0(){return this.a.r=43e5},
$S:0}
A.dvx.prototype={
$0(){var w=this.a
return w.n(new A.dvi(w))},
$S:0}
A.dvi.prototype={
$0(){return this.a.r=65e8},
$S:0}
A.dvy.prototype={
$0(){var w=this.a
return w.n(new A.dvh(w))},
$S:0}
A.dvh.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
A.dvz.prototype={
$0(){var w=this.a
return w.n(new A.dvg(w))},
$S:0}
A.dvg.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.dvA.prototype={
$0(){var w=this.a
return w.n(new A.dvf(w))},
$S:0}
A.dvf.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.dvs.prototype={
$0(){var w=this.a
return w.n(new A.dve(w))},
$S:0}
A.dve.prototype={
$0(){var w=this.a
B.d.a8(w.z)
w.as=0},
$S:0}
A.dLv.prototype={
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
e[r]=new C.v(p,i)
q=d[r]
d[r]=new C.v(q.a+p*s,q.b+i*s)}},
$S:1815}
A.dLl.prototype={
$0(){return A.qf(this.b,this.a.d,"galaxy")},
$S:0}
A.dLm.prototype={
$0(){var w=this.a
return w.n(new A.dLk(w,this.b))},
$S:0}
A.dLk.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.Xw()},
$S:0}
A.dLn.prototype={
$0(){var w=this.a
return w.n(new A.dLj(w))},
$S:0}
A.dLj.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.Xw()}w.cll()},
$S:0}
A.dLo.prototype={
$1(d){var w=this.a
return w.n(new A.dLi(w,d))},
$S:6}
A.dLi.prototype={
$0(){var w=this.a
w.f=B.k.U(this.b)
w.Xw()},
$S:0}
A.dLp.prototype={
$1(d){var w=this.a
return w.n(new A.dLh(w,d))},
$S:6}
A.dLh.prototype={
$0(){var w=this.a
w.r=this.b
w.Xw()},
$S:0}
A.dLq.prototype={
$1(d){var w=this.a
return w.n(new A.dLg(w,d))},
$S:6}
A.dLg.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.dLr.prototype={
$1(d){var w=this.a
return w.n(new A.dLf(w,d))},
$S:6}
A.dLf.prototype={
$0(){return this.a.ax=this.b},
$S:0}
A.dLs.prototype={
$0(){var w=this.a
return w.n(new A.dLe(w))},
$S:0}
A.dLe.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.dLt.prototype={
$0(){var w=this.a
return w.n(new A.dLd(w))},
$S:0}
A.dLd.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
A.dLu.prototype={
$0(){var w=this.a
return w.n(new A.dLc(w))},
$S:0}
A.dLc.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.d1w.prototype={
$6(d,e,f,g,h,i){return g.ap(0,new C.v((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1816}
A.e9a.prototype={
$0(){return A.qf(this.b,this.a.d,"seasons-moon")},
$S:0}
A.e9b.prototype={
$0(){var w=this.a
return w.n(new A.e99(w))},
$S:0}
A.e99.prototype={
$0(){return this.a.f="seasons"},
$S:0}
A.e9c.prototype={
$0(){var w=this.a
return w.n(new A.e98(w))},
$S:0}
A.e98.prototype={
$0(){return this.a.f="moon"},
$S:0}
A.e9d.prototype={
$0(){var w=this.a
return w.n(new A.e97(w))},
$S:0}
A.e97.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.e9e.prototype={
$0(){var w=this.a
return w.n(new A.e96(w))},
$S:0}
A.e96.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
A.e9f.prototype={
$1(d){var w=this.a
return w.n(new A.e95(w,d))},
$S:6}
A.e95.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.e9g.prototype={
$1(d){var w=this.a
return w.n(new A.e94(w,d))},
$S:6}
A.e94.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.e9h.prototype={
$1(d){var w=this.a
return w.n(new A.e93(w,d))},
$S:6}
A.e93.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.e9i.prototype={
$1(d){var w=this.a
return w.n(new A.e92(w,d))},
$S:6}
A.e92.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=A.aIx.prototype
w.boz=w.p
w=A.aHA.prototype
w.bnA=w.p
w=A.aHB.prototype
w.bnB=w.p
w=A.aHG.prototype
w.bnG=w.p
w=A.aJk.prototype
w.bps=w.p
w=A.aIv.prototype
w.box=w.p
w=A.aIE.prototype
w.boG=w.p
w=A.aIK.prototype
w.boM=w.p
w=A.aHE.prototype
w.bnE=w.p
w=A.aIs.prototype
w.bou=w.p
w=A.aIH.prototype
w.boJ=w.p
w=A.aIq.prototype
w.bos=w.p
w=A.aIr.prototype
w.bot=w.p
w=A.aHR.prototype
w.bnS=w.p
w=A.aHw.prototype
w.bnw=w.p
w=A.aHZ.prototype
w.bo_=w.p
w=A.auk.prototype
w.bkL=w.p
w=A.aIf.prototype
w.boh=w.p
w=A.aIg.prototype
w.boi=w.p
w=A.aHC.prototype
w.bnC=w.p
w=A.aHU.prototype
w.bnV=w.p
w=A.aIo.prototype
w.boq=w.p
w=A.aIR.prototype
w.boT=w.p
w=A.aI_.prototype
w.bo1=w.p
w=A.aI0.prototype
w.bo2=w.p
w=A.aI1.prototype
w.bo3=w.p
w=A.aIA.prototype
w.boC=w.p
w=A.aID.prototype
w.boF=w.p
w=A.aHz.prototype
w.bnz=w.p
w=A.aHX.prototype
w.bnY=w.p
w=A.aIz.prototype
w.boB=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i
w(A.aAP.prototype,"gasg","bWh",0)
var s
v(s=A.azi.prototype,"gc2B","c2C",36)
w(s,"gbWN","aSG",0)
w(A.azl.prototype,"gbXJ","bXK",0)
u(A.azC.prototype,"gbXP","bXQ",53)
w(s=A.aDK.prototype,"gcl3","cl4",0)
w(s,"gc94","acH",0)
w(s,"gc6N","c6O",0)
w(s,"gbXO","aat",4)
w(s=A.aAO.prototype,"gbyL","a6f",4)
w(s,"gc65","aVw",0)
w(s,"gc9J","acP",4)
t(s,"gbXS","aau",4)
w(A.aB1.prototype,"gbPt","bPu",0)
w(s=A.aAI.prototype,"gckY","ckZ",0)
w(s,"gbz4","bz5",0)
w(s=A.azk.prototype,"gaZz","avt",0)
v(s,"gbXY","WZ",55)
w(s,"gbXX","aaw",4)
v(s=A.aAH.prototype,"gcbC","aug",59)
v(s,"gchE","avp",14)
w(s,"gbD_","aLI",0)
v(s=A.aAG.prototype,"gcrL","afM",14)
t(s,"gbYh","asG",0)
w(s,"gcdQ","cdR",0)
v(s=A.azO.prototype,"gbYi","bYj",61)
w(s,"gbYk","bYl",0)
t(s=A.a20.prototype,"gqH","a8",0)
w(s,"gcJ_","bb0",0)
w(s=A.azP.prototype,"gbYp","bYq",0)
w(s,"gccn","ada",4)
w(s=A.aAs.prototype,"gbYB","asI",0)
w(s,"gbYC","aTf",0)
w(s=A.aBd.prototype,"gbZq","bZr",0)
t(s,"gbZo","aTx",0)
w(A.aAC.prototype,"gbBz","aog",0)
t(A.aAT.prototype,"gbZs","bZt",0)
v(s=A.aA_.prototype,"gc_7","c_8",75)
w(s,"gbGi","bGj",0)
w(s=A.aA0.prototype,"gclt","clu",0)
w(s,"gc_c","c_d",0)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(C.aC,[A.agX,A.Er,A.tZ,A.aOj,A.a0K,A.b5U,A.bVj,A.x2,A.AU,A.mS,A.b6C,A.zg,A.bo0,A.pv,A.q8,A.AY,A.WY,A.ac2,A.Z8,A.B7,A.a9_,A.a9g,A.abb,A.Ee,A.bh5,A.NT,A.Yt,A.a96,A.a9z,A.Ea,A.aan,A.aaS,A.ry,A.b5t,A.aO8,A.mO,A.v8,A.a7I,A.a8M,A.a20,A.pZ,A.b6D,A.aSz,A.bpk,A.aEz,A.m6,A.a8s,A.a8t,A.ub,A.N9,A.x0,A.N8,A.bpf,A.NB,A.ac7])
v(C.i2,[A.faZ,A.f2S,A.f8p,A.f8q,A.faW,A.faX,A.dUd,A.dUw,A.e88,A.e7G,A.e7H,A.e7I,A.e7J,A.e7K,A.e7L,A.e7M,A.e7N,A.e7E,A.e7F,A.e7D,A.e83,A.e84,A.e85,A.dvG,A.dvI,A.dvL,A.dvW,A.bVk,A.bVl,A.eYv,A.eYw,A.eYx,A.eYB,A.eYC,A.eYD,A.dyd,A.dxV,A.dye,A.dxQ,A.dxL,A.dxN,A.dxT,A.dy5,A.dy3,A.dy4,A.dy2,A.dy_,A.dy1,A.eFC,A.eFj,A.eFq,A.eFz,A.eFd,A.d82,A.d83,A.d8_,A.d80,A.d81,A.d84,A.d85,A.d86,A.d87,A.d88,A.d89,A.d8a,A.d8b,A.d8c,A.e74,A.e75,A.e76,A.e77,A.e72,A.e73,A.e7z,A.e7b,A.e7d,A.e6Y,A.e7v,A.e7t,A.e7u,A.e7s,A.e7r,A.e7_,A.ehk,A.ehi,A.eh6,A.eha,A.eh5,A.ehb,A.ehc,A.ehg,A.enW,A.eo1,A.e4q,A.e4r,A.e4c,A.e4d,A.e4b,A.e4g,A.e4i,A.e4j,A.enl,A.enm,A.enk,A.en8,A.en9,A.en7,A.en0,A.en1,A.enf,A.eng,A.enh,A.eni,A.enj,A.dxm,A.dxn,A.dxo,A.dxf,A.dxi,A.cEc,A.e0o,A.e0N,A.e0s,A.e0A,A.e0B,A.e0z,A.e0I,A.e3U,A.e3Z,A.e3N,A.e3v,A.e3H,A.e3F,A.e3D,A.e3E,A.e3C,A.dFg,A.dF4,A.dF6,A.dFe,A.dF9,A.dI5,A.dHY,A.dHZ,A.dI_,A.cXH,A.cXJ,A.cXI,A.dtK,A.dtL,A.dtD,A.dtB,A.cwL,A.dLT,A.dLU,A.dLP,A.dLQ,A.d3z,A.d3A,A.dxJ,A.dxr,A.dxA,A.dxB,A.dxG,A.dxH,A.bGB,A.bGL,A.bGH,A.bGM,A.bGC,A.bGK,A.bGJ,A.bGI,A.bC2,A.bC1,A.bBU,A.bBV,A.bBT,A.bBW,A.bBK,A.bBM,A.bBH,A.bBI,A.bBJ,A.eYE,A.eYF,A.eYG,A.eYu,A.eYH,A.eYt,A.eYI,A.eYy,A.eYs,A.eYz,A.eYr,A.eYA,A.eYq,A.dIa,A.dXb,A.dX3,A.d8l,A.d8o,A.dXu,A.dXf,A.dXp,A.dXq,A.dXr,A.c90,A.erZ,A.dHJ,A.dHK,A.dHL,A.dHN,A.e1H,A.enE,A.enN,A.enJ,A.enL,A.e0f,A.e0g,A.e0h,A.fu8,A.cl7,A.dMU,A.dMj,A.dMi,A.dMu,A.dMv,A.dMt,A.dMw,A.dMO,A.dMP,A.dMQ,A.eo7,A.egI,A.egJ,A.egK,A.egP,A.egQ,A.egz,A.eHZ,A.eI_,A.dNq,A.dNj,A.dNl,A.dNm,A.dNn,A.dNo,A.dMW,A.eG7,A.dvB,A.dvp,A.dvo,A.dvn,A.dvt,A.dLv,A.dLo,A.dLp,A.dLq,A.dLr,A.d1w,A.e9f,A.e9g,A.e9h,A.e9i])
v(C.kw,[A.faY,A.dUi,A.dUg,A.e7P,A.e81,A.dxM,A.dy8,A.dDs,A.eFF,A.eFG,A.eFi,A.eFv,A.eFw,A.eFr,A.eFx,A.eFc,A.e70,A.e71,A.e7y,A.e7q,A.e7f,A.enV,A.e4f,A.enb,A.dxe,A.dxj,A.e0E,A.e3Y,A.fbf,A.e3z,A.e3w,A.e3J,A.dg2,A.bBf,A.f79,A.dtx,A.dtF,A.bGN,A.bGP,A.bGD,A.bGF,A.bC3,A.ced,A.bC_,A.bBY,A.dX5,A.d8m,A.d8n,A.dXo,A.c93,A.dw9,A.dw4,A.e1J,A.c8X,A.dMG,A.dMg,A.d4o,A.eoc,A.egM,A.egy,A.dMX,A.dMZ,A.dMV,A.dvr])
v(C.ae,[A.Th,A.TG,A.Sa,A.Sf,A.Ll,A.aDJ,A.TF,A.TU,A.U5,A.TE,A.U0,A.Sd,A.Tz,A.TD,A.TC,A.SA,A.SQ,A.S5,A.T3,A.Se,A.afK,A.SR,A.Tm,A.To,A.Ua,A.SY,A.Sb,A.SP,A.TA,A.TK,A.U4,A.Ty,A.T4,A.U6,A.TT,A.T5,A.TL,A.S9,A.T1,A.TH])
v(C.ag,[A.bfB,A.aIx,A.aHA,A.aHG,A.azC,A.aJk,A.aIv,A.aIE,A.aIK,A.aIs,A.aIH,A.aHE,A.aIq,A.aIr,A.aAG,A.bf5,A.aHR,A.aHw,A.aHZ,A.bf_,A.auk,A.azP,A.aIf,A.aIg,A.aIR,A.aHU,A.aHC,A.bf6,A.aAC,A.aAT,A.bgj,A.aIo,A.aI_,A.bgm,A.aID,A.aI1,A.aIA,A.aHz,A.aHX,A.aIz])
v(C.jj,[A.dUb,A.dUc,A.dUo,A.dUp,A.dUk,A.dUj,A.dUl,A.dUh,A.dUm,A.dUf,A.dUn,A.dUe,A.dUs,A.dUr,A.dUt,A.dUq,A.dUu,A.dUv,A.dUx,A.e87,A.e89,A.e8a,A.e7R,A.e7Q,A.e7O,A.e7X,A.e7Y,A.e7U,A.e7Z,A.e7T,A.e8_,A.e80,A.e7S,A.e82,A.e7W,A.e86,A.e7V,A.dw2,A.dw1,A.dvF,A.dw3,A.dvH,A.dvJ,A.dvK,A.dvM,A.dvC,A.dvD,A.dvE,A.dvT,A.dvU,A.dvV,A.dvS,A.dvX,A.dvR,A.dvY,A.dvQ,A.dvZ,A.dvP,A.dw_,A.dvO,A.dw0,A.dvN,A.dxS,A.dxR,A.dxW,A.dxO,A.dxP,A.dxX,A.dxY,A.dxZ,A.dxU,A.dxK,A.dy7,A.dy6,A.dy9,A.dya,A.dyb,A.dy0,A.dyc,A.cEF,A.dDq,A.dDp,A.dDr,A.eYT,A.eYU,A.eYV,A.eZ5,A.eZ8,A.eZ9,A.eZa,A.eZb,A.eZc,A.eZd,A.eZe,A.eYW,A.eYX,A.eYY,A.eYZ,A.eZ_,A.eZ0,A.eZ1,A.eZ2,A.eZ3,A.eZ4,A.eZ6,A.eZ7,A.eFE,A.eFD,A.eFl,A.eFk,A.eFg,A.eFf,A.eFh,A.eFe,A.eFt,A.eFs,A.eFu,A.eFm,A.eFy,A.eFp,A.eFA,A.eFo,A.eFB,A.eFn,A.e79,A.e6Z,A.e78,A.e6V,A.e7a,A.e7c,A.e6W,A.e6X,A.e7x,A.e7w,A.e7n,A.e7o,A.e7p,A.e7j,A.e7k,A.e7i,A.e7l,A.e7h,A.e7m,A.e7g,A.e7e,A.d7Z,A.ehj,A.egW,A.egV,A.eh4,A.ehd,A.eh3,A.ehe,A.eh2,A.ehf,A.eh1,A.eh0,A.ehh,A.eh_,A.eh7,A.egZ,A.eh8,A.egY,A.eh9,A.egX,A.enU,A.enT,A.enX,A.enS,A.enY,A.enR,A.enZ,A.enQ,A.eo_,A.enP,A.eo0,A.enO,A.e4e,A.e4a,A.e49,A.e48,A.e4k,A.e47,A.e4l,A.e46,A.e4m,A.e45,A.e4n,A.e4o,A.e4p,A.e44,A.e4h,A.ena,A.en_,A.enc,A.en6,A.end,A.en5,A.ene,A.en4,A.en3,A.en2,A.emZ,A.emY,A.emX,A.dxl,A.dxc,A.dxd,A.dxg,A.dxh,A.dxk,A.e0C,A.e0t,A.e0D,A.e0F,A.e0y,A.e0G,A.e0x,A.e0H,A.e0w,A.e0v,A.e0J,A.e0u,A.e0K,A.e0r,A.e0L,A.e0q,A.e0M,A.e0p,A.e3O,A.e3P,A.e3W,A.e3V,A.e3X,A.e3T,A.e4_,A.e3S,A.e40,A.e3R,A.e41,A.e42,A.e3Q,A.e43,A.e3M,A.e3t,A.e3u,A.e3y,A.e3x,A.e3I,A.e3G,A.e3A,A.e3K,A.e3B,A.e3L,A.dFf,A.dF5,A.dF3,A.dFa,A.dF8,A.dFb,A.dF7,A.dFc,A.dFd,A.dI4,A.dHT,A.dHS,A.dHU,A.dHX,A.dHW,A.dHV,A.dI0,A.dI1,A.dI2,A.dI3,A.dtJ,A.dtI,A.dty,A.dtE,A.dtC,A.dtG,A.dtA,A.dtH,A.dtz,A.dLS,A.dLR,A.dLJ,A.dLN,A.dLM,A.dLO,A.dLL,A.dLK,A.dxI,A.dxz,A.dxy,A.dxC,A.dxx,A.dxD,A.dxw,A.dxE,A.dxv,A.dxF,A.dxu,A.dxt,A.dxs,A.bGO,A.bGQ,A.bGE,A.bGG,A.bC0,A.bBz,A.bBR,A.bBS,A.bBP,A.bBQ,A.bBN,A.bBO,A.bBX,A.bBZ,A.bBL,A.bBD,A.bBE,A.bBC,A.bBF,A.bBB,A.bBG,A.bBA,A.dIb,A.dI9,A.dI8,A.dId,A.dIc,A.dIe,A.dIf,A.dXa,A.dXc,A.dX1,A.dX2,A.dX4,A.dX6,A.dX7,A.dX8,A.dX9,A.dXt,A.dXv,A.dXl,A.dXh,A.dXm,A.dXn,A.dXg,A.dXk,A.dXj,A.dXi,A.dXs,A.eZm,A.eZn,A.eZo,A.eZp,A.eZq,A.eZr,A.eZs,A.eZt,A.c92,A.c91,A.es_,A.erW,A.erV,A.erY,A.erX,A.dKb,A.dKc,A.dK6,A.dK8,A.dK9,A.dK7,A.dKa,A.dwa,A.dw7,A.dw6,A.dw8,A.dw5,A.dHI,A.dHH,A.dHG,A.dHF,A.dHM,A.dHE,A.dHD,A.dHO,A.dHC,A.dHP,A.dHB,A.dHQ,A.dHR,A.dHA,A.e1D,A.e1E,A.e1C,A.e1F,A.e1B,A.e1I,A.e1K,A.e1G,A.e1L,A.e9m,A.e9n,A.e9k,A.e9l,A.e9j,A.e9o,A.e9p,A.e9q,A.e9r,A.enI,A.enK,A.enH,A.enG,A.enM,A.enF,A.e0i,A.e0j,A.e0b,A.e0a,A.e0c,A.e09,A.e0d,A.e08,A.e0e,A.e07,A.e06,A.e05,A.e04,A.cl8,A.cl9,A.fu7,A.cl4,A.cl3,A.cla,A.cl5,A.cl6,A.c8Z,A.c8Y,A.dMT,A.dMm,A.dMk,A.dMl,A.dMh,A.dMF,A.dMn,A.dMo,A.dMH,A.dMs,A.dML,A.dME,A.dMM,A.dMD,A.dMN,A.dMC,A.dMB,A.dMA,A.dMz,A.dMR,A.dMy,A.dMS,A.dMx,A.dMI,A.dMr,A.dMJ,A.dMq,A.dMK,A.dMp,A.dMf,A.dMe,A.d4n,A.eZf,A.eZg,A.eZh,A.eZi,A.eZj,A.eZk,A.eZl,A.eoa,A.eob,A.eo9,A.eo8,A.egA,A.egL,A.egN,A.egH,A.egO,A.egG,A.egF,A.egR,A.egE,A.egS,A.egD,A.egT,A.egC,A.egU,A.egB,A.egx,A.egw,A.eHY,A.dMY,A.dNc,A.dN3,A.dNd,A.dN2,A.dNe,A.dNb,A.dNi,A.dNa,A.dN9,A.dNk,A.dN8,A.dN7,A.dN6,A.dN5,A.dNp,A.dN4,A.dNf,A.dN1,A.dNg,A.dN0,A.dNh,A.dN_,A.e9u,A.e9v,A.e9t,A.e9w,A.e9s,A.dvq,A.dvm,A.dvu,A.dvl,A.dvv,A.dvk,A.dvw,A.dvj,A.dvx,A.dvi,A.dvy,A.dvh,A.dvz,A.dvg,A.dvA,A.dvf,A.dvs,A.dve,A.dLl,A.dLm,A.dLk,A.dLn,A.dLj,A.dLi,A.dLh,A.dLg,A.dLf,A.dLs,A.dLe,A.dLt,A.dLd,A.dLu,A.dLc,A.e9a,A.e9b,A.e99,A.e9c,A.e98,A.e9d,A.e97,A.e9e,A.e96,A.e95,A.e94,A.e93,A.e92])
u(A.bsz,A.aIx)
u(A.aAP,A.bsz)
v(C.n1,[A.bcE,A.b6U,A.bnr,A.b5A,A.bm8,A.blB,A.b6g,A.blD,A.bpt,A.bcC,A.bnm,A.bgT,A.boc,A.b6B,A.bdw,A.bgU,A.bec,A.b9A,A.b5F,A.bb1,A.aOi,A.bcH,A.bcW,A.bqE,A.blC,A.bh6,A.bb8,A.bnk,A.b6s,A.bmU,A.b5Q,A.baZ,A.bmb])
u(A.aHB,A.aHA)
u(A.azi,A.aHB)
u(A.bsj,A.aHG)
u(A.azl,A.bsj)
v(C.m7,[A.Iv,A.YX])
v(C.ar,[A.bmu,A.acc,A.ab7,A.O1,A.bmY,A.a5N,A.b8W,A.b2H,A.dv,A.eD,A.ast,A.ff,A.DJ])
u(A.aDK,A.aJk)
u(A.bcB,C.p_)
u(A.aAO,A.aIv)
u(A.bga,A.aIE)
u(A.aB1,A.aIK)
u(A.bsy,A.aIs)
u(A.aAI,A.bsy)
u(A.bsG,A.aIH)
u(A.bgf,A.bsG)
u(A.bsi,A.aHE)
u(A.azk,A.bsi)
u(A.bsw,A.aIq)
u(A.bfQ,A.bsw)
u(A.bsx,A.aIr)
u(A.aAH,A.bsx)
u(A.azO,A.aHR)
u(A.beN,A.aHw)
u(A.bfh,A.aHZ)
u(A.b5S,A.auk)
u(A.afL,A.b5S)
u(A.bsp,A.aIf)
u(A.bfD,A.bsp)
u(A.bsq,A.aIg)
u(A.aAs,A.bsq)
u(A.bsH,A.aIR)
u(A.aBd,A.bsH)
u(A.bsl,A.aHU)
u(A.bfc,A.bsl)
u(A.bsh,A.aHC)
u(A.beS,A.bsh)
u(A.bsv,A.aIo)
u(A.bfO,A.bsv)
u(A.aI0,A.aI_)
u(A.aA_,A.aI0)
u(A.bsD,A.aID)
u(A.bg9,A.bsD)
u(A.bsn,A.aI1)
u(A.aA0,A.bsn)
u(A.bsB,A.aIA)
u(A.bg6,A.bsB)
u(A.bsg,A.aHz)
u(A.beR,A.bsg)
u(A.bsm,A.aHX)
u(A.bff,A.bsm)
u(A.bsA,A.aIz)
u(A.bg5,A.bsA)
w(A.aIx,C.ca)
w(A.bsz,A.m6)
w(A.aHA,C.ca)
w(A.aHB,A.m6)
w(A.aHG,C.ca)
w(A.bsj,A.m6)
w(A.aJk,C.eH)
w(A.aIv,C.ca)
w(A.aIE,C.ca)
w(A.aIK,C.ca)
w(A.aHE,C.ca)
w(A.bsi,A.m6)
w(A.aIs,C.ca)
w(A.bsy,A.m6)
w(A.aIH,C.ca)
w(A.bsG,A.m6)
w(A.aIq,C.ca)
w(A.bsw,A.m6)
w(A.aIr,C.ca)
w(A.bsx,A.m6)
w(A.aHR,C.ca)
w(A.aHw,C.ca)
w(A.aHZ,C.ca)
w(A.auk,C.ca)
w(A.b5S,A.m6)
w(A.aIf,C.ca)
w(A.bsp,A.m6)
w(A.aIg,C.ca)
w(A.bsq,A.m6)
w(A.aHC,C.ca)
w(A.bsh,A.m6)
w(A.aHU,C.ca)
w(A.bsl,A.m6)
w(A.aIo,C.ca)
w(A.bsv,A.m6)
w(A.aIR,C.ca)
w(A.bsH,A.m6)
w(A.aI_,C.ca)
w(A.aI0,A.m6)
w(A.aI1,C.ca)
w(A.bsn,A.m6)
w(A.aIA,C.ca)
w(A.bsB,A.m6)
w(A.aID,C.ca)
w(A.bsD,A.m6)
w(A.aHz,C.ca)
w(A.bsg,A.m6)
w(A.aHX,C.ca)
w(A.bsm,A.m6)
w(A.aIz,C.ca)
w(A.bsA,A.m6)})()
C.ka(b.typeUniverse,JSON.parse('{"Th":{"ae":[],"r":[]},"bfB":{"ag":["Th"]},"TG":{"ae":[],"r":[]},"aAP":{"ag":["TG"]},"bcE":{"aA":[]},"Sa":{"ae":[],"r":[]},"azi":{"ag":["Sa"]},"Sf":{"ae":[],"r":[]},"azl":{"ag":["Sf"]},"b6U":{"aA":[]},"acc":{"ar":[],"r":[]},"ab7":{"ar":[],"r":[]},"aDJ":{"ae":[],"r":[]},"Ll":{"ae":[],"r":[]},"azC":{"ag":["Ll"]},"bmu":{"ar":[],"r":[]},"O1":{"ar":[],"r":[]},"bnr":{"aA":[]},"bmY":{"ar":[],"r":[]},"b5A":{"aA":[]},"aDK":{"ag":["aDJ"]},"bm8":{"aA":[]},"blB":{"aA":[]},"b6g":{"aA":[]},"blD":{"aA":[]},"bpt":{"aA":[]},"TF":{"ae":[],"r":[]},"bcB":{"aA":[]},"aAO":{"ag":["TF"]},"bcC":{"aA":[]},"TU":{"ae":[],"r":[]},"U5":{"ae":[],"r":[]},"bga":{"ag":["TU"]},"bnm":{"aA":[]},"aB1":{"ag":["U5"]},"TE":{"ae":[],"r":[]},"U0":{"ae":[],"r":[]},"Sd":{"ae":[],"r":[]},"aAI":{"ag":["TE"]},"bgT":{"aA":[]},"bgf":{"ag":["U0"]},"boc":{"aA":[]},"azk":{"ag":["Sd"]},"b6B":{"aA":[]},"Tz":{"ae":[],"r":[]},"TD":{"ae":[],"r":[]},"bfQ":{"ag":["Tz"]},"bdw":{"aA":[]},"aAH":{"ag":["TD"]},"bgU":{"aA":[]},"TC":{"ae":[],"r":[]},"SA":{"ae":[],"r":[]},"SQ":{"ae":[],"r":[]},"aAG":{"ag":["TC"]},"bec":{"aA":[]},"bf5":{"ag":["SA"]},"azO":{"ag":["SQ"]},"b9A":{"aA":[]},"S5":{"ae":[],"r":[]},"T3":{"ae":[],"r":[]},"Se":{"ae":[],"r":[]},"beN":{"ag":["S5"]},"b5F":{"aA":[]},"bfh":{"ag":["T3"]},"bb1":{"aA":[]},"bf_":{"ag":["Se"]},"aOi":{"aA":[]},"afK":{"ae":[],"r":[]},"afL":{"ag":["afK"]},"SR":{"ae":[],"r":[]},"azP":{"ag":["SR"]},"Tm":{"ae":[],"r":[]},"To":{"ae":[],"r":[]},"bfD":{"ag":["Tm"]},"bcH":{"aA":[]},"aAs":{"ag":["To"]},"bcW":{"aA":[]},"a5N":{"ar":[],"r":[]},"Ua":{"ae":[],"r":[]},"SY":{"ae":[],"r":[]},"Sb":{"ae":[],"r":[]},"SP":{"ae":[],"r":[]},"TA":{"ae":[],"r":[]},"TK":{"ae":[],"r":[]},"U4":{"ae":[],"r":[]},"Ty":{"ae":[],"r":[]},"aBd":{"ag":["Ua"]},"bqE":{"aA":[]},"bfc":{"ag":["SY"]},"blC":{"aA":[]},"beS":{"ag":["Sb"]},"bf6":{"ag":["SP"]},"bh6":{"aA":[]},"aAC":{"ag":["TA"]},"aAT":{"ag":["TK"]},"bgj":{"ag":["U4"]},"bfO":{"ag":["Ty"]},"b8W":{"ar":[],"r":[]},"b2H":{"ar":[],"r":[]},"dv":{"ar":[],"r":[]},"eD":{"ar":[],"r":[]},"ast":{"ar":[],"r":[]},"ff":{"ar":[],"r":[]},"DJ":{"ar":[],"r":[]},"T4":{"ae":[],"r":[]},"aA_":{"ag":["T4"]},"bb8":{"aA":[]},"U6":{"ae":[],"r":[]},"bgm":{"ag":["U6"]},"TT":{"ae":[],"r":[]},"T5":{"ae":[],"r":[]},"TL":{"ae":[],"r":[]},"bg9":{"ag":["TT"]},"bnk":{"aA":[]},"aA0":{"ag":["T5"]},"b6s":{"aA":[]},"bg6":{"ag":["TL"]},"bmU":{"aA":[]},"S9":{"ae":[],"r":[]},"T1":{"ae":[],"r":[]},"TH":{"ae":[],"r":[]},"beR":{"ag":["S9"]},"b5Q":{"aA":[]},"bff":{"ag":["T1"]},"baZ":{"aA":[]},"bg5":{"ag":["TH"]},"bmb":{"aA":[]}}'))
C.O9(b.typeUniverse,JSON.parse('{"m6":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.az
return{F:w("cW"),G:w("x"),l:w("bt<n,n>"),J:w("bt<n,P>"),I:w("bt<n,G>"),Z:w("a_"),M:w("M<d4>"),f5:w("M<afC>"),gh:w("M<aO8>"),Y:w("M<a0K>"),V:w("M<a9>"),O:w("M<x>"),dh:w("M<QI>"),aJ:w("M<av<aC>>"),w:w("M<a_>"),k:w("M<al<x>>"),x:w("M<al<QI>>"),gO:w("M<al<al<P>>>"),bj:w("M<al<n>>"),b:w("M<al<P>>"),ez:w("M<a0<n,aC>>"),g:w("M<v>"),bz:w("M<v8>"),ds:w("M<apB>"),v:w("M<hw>"),R:w("M<+(v,P)>"),ev:w("M<+(v,G)>"),L:w("M<+(n,n)>"),fT:w("M<+(P,r)>"),T:w("M<+(G,n)>"),u:w("M<+(G,G)>"),c:w("M<+(n,n,a_)>"),e:w("M<+(n,P,P,G)>"),o:w("M<+(n,G,n,G)>"),d:w("M<+(n,n,P,P,a0<n,P>)>"),_:w("M<tZ>"),q:w("M<cI>"),fQ:w("M<a7I>"),s:w("M<n>"),cF:w("M<ao>"),X:w("M<vj>"),B:w("M<a8s>"),p:w("M<r>"),bL:w("M<a8M>"),C:w("M<l0>"),aq:w("M<b5t>"),a_:w("M<a9_>"),cS:w("M<a96>"),cB:w("M<mS>"),ba:w("M<a9g>"),d9:w("M<NB>"),bi:w("M<a9z>"),eW:w("M<AY>"),fY:w("M<WY>"),aX:w("M<Ea>"),ea:w("M<aan>"),gB:w("M<aaS>"),ed:w("M<NT>"),g4:w("M<bh5>"),aS:w("M<Yt>"),ac:w("M<abb>"),cd:w("M<B7>"),fr:w("M<ac2>"),e4:w("M<Z8>"),r:w("M<ac7>"),au:w("M<aEz>"),f7:w("M<R>"),n:w("M<P>"),t:w("M<G>"),dS:w("M<aA?>"),d4:w("M<n?>"),gJ:w("cn<afL>"),A:w("cn<ag<ae>>"),bF:w("al<x>"),ew:w("al<aC>"),a:w("al<@>"),bW:w("al<G>"),h:w("a0<n,@>"),f:w("a0<@,@>"),bd:w("I<mO,n>"),dv:w("I<n,n>"),fR:w("I<+(P,r),r>"),m:w("iA"),gA:w("y2"),P:w("cu"),K:w("aC"),W:w("v8"),D:w("mO"),fA:w("AG"),N:w("n"),bO:w("ao"),j:w("mr"),e7:w("bm<P>"),cL:w("a8t"),gj:w("cv<n>"),dg:w("e2<q8>"),E:w("b5U"),a2:w("AU"),f3:w("q8"),es:w("Ee"),U:w("mu"),y:w("R"),i:w("P"),z:w("@"),S:w("G"),Q:w("al<@>?"),fF:w("a0<@,@>?"),cK:w("aC?"),az:w("qR?"),dk:w("n?"),cD:w("P?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aNE=new C.d4(0,0.85)
D.eTt=new C.w("Tap once to start the chain",null,E.QK,null,null,null,null,null,null,null,null,null)
D.aNc=new C.bE(D.aNE,null,null,D.eTt,null)
D.aNv=new C.d4(0,0.1)
D.aOx=new A.aOj(0,0,0)
D.HS=new A.aOj(0,0.5,0)
D.aP4=new C.ay(B.bq,1,B.r,-1)
D.aQE=new C.aV(0,1/0,0,250)
D.aJr=new C.F(!0,B.c1,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMr=new C.w("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aJr,null,B.L,null,null,null,null,null,null,null)
D.dKy=new C.B(B.nh,D.eMr,null)
D.aW6=new C.cw(B.C,null,null,D.dKy,null)
D.ePQ=new C.w("Press Drop! and watch them fall from 20 metres.",null,B.kb,null,B.L,null,null,null,null,null,null,null)
D.dKC=new C.B(B.nh,D.ePQ,null)
D.aWn=new C.cw(B.C,null,null,D.dKC,null)
D.exj=new C.F(!0,B.j8,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUd=new C.w("Draw anywhere",null,D.exj,null,null,null,null,null,null,null,null,null)
D.aWr=new C.cw(B.C,null,null,D.eUd,null)
D.eDu=new C.w("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aJr,null,B.L,null,null,null,null,null,null,null)
D.dLg=new C.B(B.Dy,D.eDu,null)
D.aWJ=new C.cw(B.C,null,null,D.dLg,null)
D.a7I=new C.x(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,B.t)
D.aYr=new C.x(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,B.t)
D.aZ2=new C.x(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,B.t)
D.aZM=new C.x(1,1,0.16470588235294117,0.10196078431372549,B.t)
D.SW=new C.x(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,B.t)
D.aZR=new C.x(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,B.t)
D.aZV=new C.x(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,B.t)
D.aZZ=new C.x(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,B.t)
D.SX=new C.x(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,B.t)
D.b_Z=new C.x(1,0.16470588235294117,0.16470588235294117,0.2,B.t)
D.b18=new C.x(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,B.t)
D.a8K=new C.x(1,1,0.23137254901960785,0.12156862745098039,B.t)
D.b1x=new C.x(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,B.t)
D.b1C=new C.x(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,B.t)
D.yX=new C.x(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,B.t)
D.b2c=new C.x(1,1,0.9686274509803922,0.8,B.t)
D.a94=new C.x(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,B.t)
D.b2M=new C.x(1,1,0.47843137254901963,0.09411764705882353,B.t)
D.b2T=new C.x(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,B.t)
D.a9g=new C.x(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,B.t)
D.Tn=new C.x(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,B.t)
D.b3m=new C.x(1,0.984313725490196,0.6509803921568628,0.8509803921568627,B.t)
D.a9l=new C.x(1,1,0.5411764705882353,0.5411764705882353,B.t)
D.Tu=new C.x(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,B.t)
D.a9t=new C.x(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,B.t)
D.a9y=new C.x(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,B.t)
D.b4Q=new C.x(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,B.t)
D.b4S=new C.x(1,0.043137254901960784,0.10588235294117647,0.2,B.t)
D.b4W=new C.x(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,B.t)
D.a9T=new C.x(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,B.t)
D.b5k=new C.x(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,B.t)
D.CQ=new C.x(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,B.t)
D.aa3=new C.x(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,B.t)
D.b6m=new C.x(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,B.t)
D.b6p=new C.x(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,B.t)
D.b6y=new C.x(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,B.t)
D.b6B=new C.x(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,B.t)
D.b6V=new C.x(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,B.t)
D.aaG=new C.x(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,B.t)
D.b7y=new C.x(1,0.7490196078431373,0.8431372549019608,1,B.t)
D.b80=new C.x(1,1,0.41568627450980394,0,B.t)
D.b89=new C.x(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,B.t)
D.rk=new C.x(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,B.t)
D.b8x=new C.x(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,B.t)
D.b8O=new C.x(1,1,0.9529411764705882,0.6274509803921569,B.t)
D.b8S=new C.x(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,B.t)
D.bc3=new C.b6(11e6)
D.abS=new C.L(0,0,7,0)
D.bd5=new C.L(0,0,8,6)
D.abU=new C.L(0,0,9,0)
D.bdA=new C.L(10,0,10,4)
D.bdE=new C.L(10,10,10,6)
D.ac2=new C.L(10,6,10,2)
D.UN=new C.L(10,6,10,4)
D.bdT=new C.L(10,6,10,8)
D.bdV=new C.L(10,8,0,10)
D.bex=new C.L(12,8,8,8)
D.beE=new C.L(14,0,14,30)
D.acj=new C.L(14,0,14,6)
D.beF=new C.L(14,10,10,10)
D.acp=new C.L(14,10,8,12)
D.bf9=new C.L(14,8,14,6)
D.bfB=new C.L(16,4,16,28)
D.bfL=new C.L(16,8,16,12)
D.biv=new C.L(4,4,6,2)
D.bix=new C.L(4,4,8,2)
D.bj4=new C.L(8,14,8,12)
D.bjd=new C.L(8,6,16,0)
D.eCG=new C.w("REACTION LAB",null,W.aJZ,null,null,null,null,B.a0,null,1,null,null)
D.bjN=new C.bI(1,B.bt,D.eCG,null)
D.euh=new C.F(!0,B.c,null,null,null,null,17,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFx=new C.w("CORE PROTOCOL",null,D.euh,null,null,null,null,null,null,null,null,null)
D.bjZ=new C.bI(1,B.bt,D.eFx,null)
D.eBq=new C.w("Wire selected",null,B.hi,null,null,null,null,null,null,null,null,null)
D.bkM=new C.bI(1,B.bt,D.eBq,null)
D.afp=new C.a_(62712,"MaterialIcons",!1)
D.bnT=new C.a_(62878,"MaterialIcons",!1)
D.X_=new C.a_(62908,"MaterialIcons",!1)
D.bnW=new C.a_(62918,"MaterialIcons",!1)
D.bnX=new C.a_(62931,"MaterialIcons",!1)
D.bnZ=new C.a_(62951,"MaterialIcons",!1)
D.bo0=new C.a_(62970,"MaterialIcons",!1)
D.bof=new C.a_(63064,"MaterialIcons",!1)
D.boh=new C.a_(63070,"MaterialIcons",!1)
D.wI=new C.a_(63128,"MaterialIcons",!1)
D.Ed=new C.a_(63726,"MaterialIcons",!1)
D.bpB=new C.a_(983122,"MaterialIcons",!1)
D.bpP=new C.a_(983247,"MaterialIcons",!1)
D.bpV=new C.a_(983316,"MaterialIcons",!1)
D.bq1=new C.a_(983415,"MaterialIcons",!1)
D.bq2=new C.a_(983417,"MaterialIcons",!1)
D.bq3=new C.a_(983442,"MaterialIcons",!1)
D.bq4=new C.a_(983443,"MaterialIcons",!1)
D.bqb=new C.a_(983501,"MaterialIcons",!1)
D.bqm=new C.a_(983616,"MaterialIcons",!1)
D.agL=new C.a_(983617,"MaterialIcons",!1)
D.bqn=new C.a_(983624,"MaterialIcons",!1)
D.bqS=new C.a_(984561,"MaterialIcons",!1)
D.brq=new C.ac(B.wO,24,B.aM,null,null,null)
D.bs9=new C.ac(D.wI,23,B.ak,null,null,null)
D.bsI=new C.ac(B.no,21,B.ak,null,null,null)
D.bt6=new C.ac(B.p3,22,B.ak,null,null,null)
D.bpA=new C.a_(983117,"MaterialIcons",!1)
D.bu3=new C.ac(D.bpA,28,B.c,null,null,null)
D.bui=new C.ac(B.je,18,null,null,null,null)
D.bw_=new C.ac(B.e4,21,B.cJ,null,null,null)
D.bwe=new C.ac(B.lV,null,B.ak,null,null,null)
D.bwo=new C.ac(B.XU,21,B.ak,null,null,null)
D.ai_=new C.ac(B.eq,19,null,null,null,null)
D.lY=new C.ac(B.up,21,B.ak,null,null,null)
D.bzy=new C.ac(S.zW,21,B.ak,null,null,null)
D.bzF=new C.ac(B.je,21,B.ak,null,null,null)
D.bAu=new C.ac(B.fw,20,B.aA,null,null,null)
D.bB7=new C.ac(B.dP,null,B.aM,null,null,null)
D.bBr=new C.ac(B.jE,null,B.aA,null,null,null)
D.cTt=w([B.dG,B.db,B.dG],x.O)
D.bDy=new C.a7(B.a1,B.a7,B.w,D.cTt,null,null)
D.czv=w([B.cg,B.bu],x.O)
D.bDG=new C.a7(B.b4,B.bc,B.w,D.czv,null,null)
D.czR=w([B.j7,B.ho],x.O)
D.bDX=new C.a7(B.b4,B.bc,B.w,D.czR,null,null)
D.aj1=new C.a7(B.b4,B.bc,B.w,I.Zx,null,null)
D.cxo=w([B.nK,B.hP],x.O)
D.bEy=new C.a7(B.b4,B.bc,B.w,D.cxo,null,null)
D.cze=w([B.fr,B.aG],x.O)
D.bEH=new C.a7(B.b4,B.bc,B.w,D.cze,null,null)
D.c6N=w([B.cg,B.fJ],x.O)
D.bFc=new C.a7(B.a1,B.a7,B.w,D.c6N,null,null)
D.b3q=new C.x(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,B.t)
D.aYx=new C.x(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,B.t)
D.cv6=w([D.b3q,D.aYx],x.O)
D.bFJ=new C.a7(B.b4,B.bc,B.w,D.cv6,null,null)
D.bGj=new C.a7(B.ax,B.aE,B.w,B.Zt,null,null)
D.b78=new C.x(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,B.t)
D.cYc=w([D.b78,B.SZ],x.O)
D.bGp=new C.a7(B.b4,B.bc,B.w,D.cYc,null,null)
D.cHv=w([B.aG,B.x],x.O)
D.bGu=new C.a7(B.b4,B.bc,B.w,D.cHv,null,null)
D.b6E=new C.x(1,0.788235294117647,0.6509803921568628,0.4196078431372549,B.t)
D.b7e=new C.x(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,B.t)
D.cjh=w([B.IS,D.b6E,D.b7e],x.O)
D.bGE=new C.a7(B.b4,B.bc,B.w,D.cjh,null,null)
D.c77=w([B.dB,B.hR],x.O)
D.bGT=new C.a7(B.b4,B.bc,B.w,D.c77,null,null)
D.bGZ=new C.a7(B.ax,B.aE,B.w,B.NO,null,null)
D.aju=w([0,2,4,6,7,9,11],x.t)
D.bHy=w([0,4,7],x.t)
D.ajy=w([0,4,7,12],x.t)
D.bHz=w([0,4,7,4],x.t)
D.arC=w([B.fU,B.q2],x.O)
D.arc=w([B.hS,B.cU],x.O)
D.apH=w([B.bD,B.dM],x.O)
D.crH=w([B.aM,B.dB],x.O)
D.cxJ=w([B.cJ,B.f5],x.O)
D.cPH=w([B.cd,B.lH],x.O)
D.apd=w([B.dg,B.kO],x.O)
D.cwt=w([B.bO,B.aI],x.O)
D.bHS=w([D.arC,D.arc,B.ZB,D.apH,D.crH,D.cxJ,B.aqN,D.cPH,D.apd,D.cwt],x.k)
D.ajB=w([1],x.n)
D.bMw=w([120,220,380],x.t)
D.bQg=w([12,16,19,24],x.t)
D.bQp=w([1400,800,450,2400],x.t)
D.bUo=w([1,2,3],x.n)
D.bUz=w([1,-1],x.n)
D.bUA=w([0,0.6,1],x.n)
D.bYJ=w([250,450,900,1500],x.t)
D.c6L=w([B.aH,B.cX,B.br,B.b3,B.bD,B.c,B.aG],x.O)
D.aZd=new C.x(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,B.t)
D.b6X=new C.x(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,B.t)
D.b5m=new C.x(1,0.7450980392156863,0.5411764705882353,0.4,B.t)
D.b9r=new C.x(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,B.t)
D.b4I=new C.x(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,B.t)
D.aow=w([D.aZd,D.b6X,D.b5m,D.b9r,D.b4I],x.O)
D.e1r=new C.V("type","Typewriter")
D.dYt=new C.V("bounce","Bounce")
D.e1O=new C.V("wave","Wave")
D.e2n=new C.V("zoom","Zoom")
D.cec=w([D.e1r,D.dYt,D.e1O,B.a2f,G.aFH,D.e2n,G.aFJ],x.L)
D.ceo=w([50,25,75],x.t)
D.ciD=w([1,2,3,4,5,6,7],x.n)
D.cjN=w([0,5,10,15,18,20,25],x.t)
D.dZv=new C.V("fish","Fish")
D.dZx=new C.V("fly","Fireflies")
D.dYr=new C.V("bird","Birds")
D.cnV=w([D.dZv,D.dZx,D.dYr],x.L)
D.crY=w([900,500,250,1600],x.t)
D.cvq=w([0.78,1],x.n)
D.apI=w([0,2,4,7,9,12,14,16],x.t)
D.dLF=new A.mO("battery","Battery","\ud83d\udd0b",B.bq,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.dLH=new A.mO("solar","Solar panel","\u2600\ufe0f",B.cX,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.dLS=new A.mO("crank","Hand crank","\ud83d\udd04",B.dg,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.dLM=new A.mO("turbine","Wind turbine","\ud83c\udf2c\ufe0f",B.b3,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.dLJ=new A.mO("switch","Switch","\ud83c\udf9a\ufe0f",B.bD,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.dLT=new A.mO("fuse","Fuse","\ud83e\uddef",B.cJ,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.dLE=new A.mO("pot","Dimmer knob","\ud83c\udf9b\ufe0f",B.hS,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.dLP=new A.mO("resistor","Resistor","\u3030\ufe0f",B.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.dLQ=new A.mO("bulb","Light bulb","\ud83d\udca1",B.j2,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.dLI=new A.mO("led","LED","\ud83d\udd34",B.aH,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.dLK=new A.mO("motor","Motor","\u2699\ufe0f",B.bO,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.dLO=new A.mO("buzzer","Buzzer","\ud83d\udd14",B.cd,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.dLG=new A.mO("heater","Heater","\ud83d\udd25",B.dg,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.dLN=new A.mO("capacitor","Capacitor","\ud83e\udeab",B.cH,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.dLL=new A.mO("radio","Radio","\ud83d\udcfb",B.pY,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.dLR=new A.mO("tv","TV","\ud83d\udcfa",B.b8,"Needs about 6 volts or more. With power it shows a picture made of millions of tiny coloured dots.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.N4=w([D.dLF,D.dLH,D.dLS,D.dLM,D.dLJ,D.dLT,D.dLE,D.dLP,D.dLQ,D.dLI,D.dLK,D.dLO,D.dLG,D.dLN,D.dLL,D.dLR],C.az("M<mO>"))
D.apO=w(["A","T","C","G"],x.s)
D.cvW=w(["A","U","C","G"],x.s)
D.cws=w([1,2.76,5.4,8.93,13.3],x.n)
D.cx6=w([B.aG,B.aH,B.dg,B.cX,B.br,B.cA,B.cf,B.bB,B.SZ],x.O)
D.Zv=w([0.04,0.17,0.3],x.n)
D.cxr=w([1,0.6,0.38,0.22,0.12],x.n)
D.cxF=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.F2=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.e8C=new A.tZ("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.e8I=new A.tZ("Medium engine","A good all-rounder.",0.3,0.9)
D.e8H=new A.tZ("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.F3=w([D.e8C,D.e8I,D.e8H],x._)
D.dTC=new C.V(6,"Easy")
D.dTS=new C.V(8,"Medium")
D.dRi=new C.V(10,"Hard")
D.cyu=w([D.dTC,D.dTS,D.dRi],x.T)
D.aq5=w([0.55,0.78,1],x.n)
D.czW=w([0.93,0.975,1],x.n)
D.aqf=w([B.c,B.hA,B.pQ,B.aG],x.O)
D.cBp=w([1,0.7,0.45,0.28,0.16,0.1,0.06],x.n)
D.cBq=w([1,0.55,0.32,0.2,0.12,0.07],x.n)
D.eYx=new A.x0("Moon",1737,4291941851)
D.eYu=new A.x0("Earth",6371,4281908728)
D.eYy=new A.x0("Neptune",24622,4284524026)
D.eYz=new A.x0("Saturn",58232,4294829706)
D.eYv=new A.x0("Jupiter",69911,4294677052)
D.eYA=new A.x0("Sun",696340,4294688548)
D.eYB=new A.x0("Sirius A",119e4,4290763774)
D.eYs=new A.x0("Arcturus",179e5,4294818420)
D.eYt=new A.x0("Betelgeuse",531e6,4294472049)
D.eYw=new A.x0("UY Scuti",667e6,4293870660)
D.Nf=w([D.eYx,D.eYu,D.eYy,D.eYz,D.eYv,D.eYA,D.eYB,D.eYs,D.eYt,D.eYw],C.az("M<x0>"))
D.e5o=new C.bA("glow","Glow",B.X1)
D.e3i=new C.bA("rainbow","Rainbow",B.nn)
D.e3C=new C.bA("stars","Stars",B.hJ)
D.e32=new C.bA("sparks","Sparks",B.dP)
D.e4K=new C.bA("fire","Fire",B.uq)
D.cBC=w([D.e5o,D.e3i,D.e3C,D.e32,D.e4K],x.c)
D.aqj=w([B.br,B.aH,B.cX,B.db],x.O)
D.cCs=w([0.2,1],x.n)
D.e8z=new A.tZ("Radar","Shows your height above the ground.",0.1,0)
D.e8A=new A.tZ("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.e8x=new A.tZ("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aqs=w([D.e8z,D.e8A,D.e8x],x._)
D.e47=new C.bA("attract","Attract",B.x_)
D.e3W=new C.bA("scare","Scare",B.rN)
D.e3b=new C.bA("food","Food",B.rU)
D.bpG=new C.a_(983158,"MaterialIcons",!1)
D.e4p=new C.bA("hunt","Hunt",D.bpG)
D.cD2=w([D.e47,D.e3W,D.e3b,D.e4p],x.c)
D.cDp=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cDD=w([47,100,220,470,1000],x.n)
D.aqJ=w([0,2,4,7,9],x.t)
D.a1k={volts:0}
D.ay_=new C.bt(D.a1k,[3],x.J)
D.PA=new C.fz(["b","battery",0.2,0.3,D.ay_])
D.dHc={on:0}
D.d1P=new C.bt(D.dHc,[1],x.J)
D.Gp=new C.fz(["s","switch",0.5,0.3,D.d1P])
D.e7t=new C.fz(["l","bulb",0.8,0.3,B.m0])
D.czC=w([D.PA,D.Gp,D.e7t],x.d)
D.Go=new C.d6(["b",0,"s",0])
D.e6K=new C.d6(["s",1,"l",0])
D.e6t=new C.d6(["l",1,"b",1])
D.cOL=w([D.Go,D.e6K,D.e6t],x.o)
D.cz6=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.dQR=new A.pZ("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.czC,D.cOL,D.cz6)
D.aAe={ohms:0}
D.ay2=new C.bt(D.aAe,[220],x.J)
D.e74=new C.fz(["r","resistor",0.5,0.3,D.ay2])
D.e7F=new C.fz(["d","led",0.8,0.3,B.m0])
D.cRp=w([D.PA,D.e74,D.e7F],x.d)
D.e68=new C.d6(["b",0,"r",0])
D.e6F=new C.d6(["r",1,"d",0])
D.e6d=new C.d6(["d",1,"b",1])
D.cYH=w([D.e68,D.e6F,D.e6d],x.o)
D.cRP=w(["led","diode","indicator"],x.s)
D.dQW=new A.pZ("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.cRp,D.cYH,D.cRP)
D.a1j={level:0}
D.d1d=new C.bt(D.a1j,[0.2],x.J)
D.e78=new C.fz(["p","pot",0.5,0.3,D.d1d])
D.e7b=new C.fz(["m","motor",0.8,0.3,B.m0])
D.czU=w([D.PA,D.e78,D.e7b],x.d)
D.e67=new C.d6(["b",0,"p",0])
D.e6A=new C.d6(["p",1,"m",0])
D.e6x=new C.d6(["m",1,"b",1])
D.cVe=w([D.e67,D.e6A,D.e6x],x.o)
D.cOx=w(["fan","motor","spin","dimmer"],x.s)
D.dQQ=new A.pZ("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.czU,D.cVe,D.cOx)
D.a0_=new C.bt(D.a1j,[0.9],x.J)
D.e7M=new C.fz(["s","solar",0.25,0.3,D.a0_])
D.aFM=new C.fz(["l","bulb",0.75,0.3,B.m0])
D.cCb=w([D.e7M,D.aFM],x.d)
D.e6H=new C.d6(["s",0,"l",0])
D.e6v=new C.d6(["l",1,"s",1])
D.cAz=w([D.e6H,D.e6v],x.o)
D.cVK=w(["solar","sun","without battery","no battery","free"],x.s)
D.dQS=new A.pZ("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cCb,D.cAz,D.cVK)
D.e7I=new C.fz(["c","crank",0.25,0.3,D.a0_])
D.cN1=w([D.e7I,D.aFM],x.d)
D.e69=new C.d6(["c",0,"l",0])
D.e6u=new C.d6(["l",1,"c",1])
D.cNx=w([D.e69,D.e6u],x.o)
D.cN9=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.dQP=new A.pZ("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.cN1,D.cNx,D.cN9)
D.d1c=new C.bt(D.a1j,[0.7],x.J)
D.e7d=new C.fz(["t","turbine",0.25,0.3,D.d1c])
D.e73=new C.fz(["m","motor",0.75,0.3,B.m0])
D.cI4=w([D.e7d,D.e73],x.d)
D.e6R=new C.d6(["t",0,"m",0])
D.e6y=new C.d6(["m",1,"t",1])
D.cHd=w([D.e6R,D.e6y],x.o)
D.cM_=w(["wind","turbine","windmill","water","hydro"],x.s)
D.dQN=new A.pZ("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.cI4,D.cHd,D.cM_)
D.d2e=new C.bt(D.a1k,[9],x.J)
D.aFL=new C.fz(["b","battery",0.2,0.3,D.d2e])
D.e7q=new C.fz(["r","radio",0.8,0.3,B.m0])
D.cWe=w([D.aFL,D.Gp,D.e7q],x.d)
D.e6L=new C.d6(["s",1,"r",0])
D.e6D=new C.d6(["r",1,"b",1])
D.bHi=w([D.Go,D.e6L,D.e6D],x.o)
D.cV1=w(["radio","music","listen"],x.s)
D.dQV=new A.pZ("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.cWe,D.bHi,D.cV1)
D.d2f=new C.bt(D.a1k,[12],x.J)
D.e7a=new C.fz(["b","battery",0.2,0.3,D.d2f])
D.e7u=new C.fz(["t","tv",0.8,0.3,B.m0])
D.czD=w([D.e7a,D.Gp,D.e7u],x.d)
D.e6M=new C.d6(["s",1,"t",0])
D.e6S=new C.d6(["t",1,"b",1])
D.cPK=w([D.Go,D.e6M,D.e6S],x.o)
D.cWd=w(["tv","television","screen","watch"],x.s)
D.dQL=new A.pZ("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.czD,D.cPK,D.cWd)
D.e7l=new C.fz(["z","buzzer",0.8,0.3,B.m0])
D.cgG=w([D.PA,D.Gp,D.e7l],x.d)
D.e6N=new C.d6(["s",1,"z",0])
D.e71=new C.d6(["z",1,"b",1])
D.cvg=w([D.Go,D.e6N,D.e71],x.o)
D.cTx=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.dQT=new A.pZ("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cgG,D.cvg,D.cTx)
D.e79=new C.fz(["h","heater",0.8,0.3,B.m0])
D.cKK=w([D.aFL,D.Gp,D.e79],x.d)
D.e6J=new C.d6(["s",1,"h",0])
D.e6j=new C.d6(["h",1,"b",1])
D.cvS=w([D.Go,D.e6J,D.e6j],x.o)
D.c0V=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.dQM=new A.pZ("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.cKK,D.cvS,D.c0V)
D.e7w=new C.fz(["s","solar",0.2,0.25,D.a0_])
D.d2k=new C.bt(D.aAe,[100],x.J)
D.e7z=new C.fz(["r","resistor",0.55,0.25,D.d2k])
D.e7E=new C.fz(["c","capacitor",0.85,0.25,B.m0])
D.e75=new C.fz(["q","resistor",0.55,0.6,D.ay2])
D.e7x=new C.fz(["d","led",0.85,0.6,B.m0])
D.cPo=w([D.e7w,D.e7z,D.e7E,D.e75,D.e7x],x.d)
D.e6I=new C.d6(["s",0,"r",0])
D.e6E=new C.d6(["r",1,"c",0])
D.e6b=new C.d6(["c",1,"s",1])
D.e6a=new C.d6(["c",0,"q",0])
D.e6C=new C.d6(["q",1,"d",0])
D.e6e=new C.d6(["d",1,"c",1])
D.cFl=w([D.e6I,D.e6E,D.e6b,D.e6a,D.e6C,D.e6e],x.o)
D.cMv=w(["capacitor","store","charge","flash"],x.s)
D.dQU=new A.pZ("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.cPo,D.cFl,D.cMv)
D.e7f=new C.fz(["b","battery",0.15,0.3,D.ay_])
D.e7J=new C.fz(["l1","bulb",0.5,0.3,B.m0])
D.e7j=new C.fz(["l2","bulb",0.85,0.3,B.m0])
D.cxY=w([D.e7f,D.e7J,D.e7j],x.d)
D.e66=new C.d6(["b",0,"l1",0])
D.e6q=new C.d6(["l1",1,"l2",0])
D.e6r=new C.d6(["l2",1,"b",1])
D.cIH=w([D.e66,D.e6q,D.e6r],x.o)
D.cW3=w(["series","two bulbs","dim"],x.s)
D.dQO=new A.pZ("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cxY,D.cIH,D.cW3)
D.Nh=w([D.dQR,D.dQW,D.dQQ,D.dQS,D.dQP,D.dQN,D.dQV,D.dQL,D.dQT,D.dQM,D.dQU,D.dQO],C.az("M<pZ>"))
D.cF6=w([1,0.6,0.45,0.3,0.22,0.15],x.n)
D.f7o=new A.Er("Moon",1.62,B.fJ,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.f7m=new A.Er("Mars",3.71,B.aH,"Mars has about 38 percent of Earth's gravity.")
D.f7p=new A.Er("Mercury",3.7,B.jv,"Mercury is small, so its gravity is like Mars.")
D.f7j=new A.Er("Venus",8.87,B.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.f7l=new A.Er("Earth",9.81,B.b3,"On Earth gravity is strong, and the air also slows you down.")
D.f7n=new A.Er("Neptune",11.15,B.db,"Neptune pulls a little harder than Earth.")
D.f7k=new A.Er("Jupiter",24.79,B.dg,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.qn=w([D.f7o,D.f7m,D.f7p,D.f7j,D.f7l,D.f7n,D.f7k],C.az("M<Er>"))
D.cFk=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.ZK=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cFV=w([0.2,0.5,0.8],x.n)
D.cG4=w([1,2,3,4,5,6],x.n)
D.boa=new C.a_(63040,"MaterialIcons",!1)
D.e3Z=new C.bA("peg","Peg",D.boa)
D.e3f=new C.bA("bar","Bar",P.A3)
D.e3E=new C.bA("erase","Erase",B.Kx)
D.cG5=w([D.e3Z,D.e3f,D.e3E],x.c)
D.eaZ=new C.cI(B.bg,B.J,4)
D.cGf=w([D.eaZ],x.q)
D.aqY=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aMX=new A.Iv(0,"accordion")
D.cwz=w([B.iW,B.A4,B.E0],x.w)
D.cCV=w(["Mail","SMS","Ad"],x.s)
D.cx_=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.f5B=new A.zg(D.aMX,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.arC,D.cwz,D.cCV,D.cx_)
D.a5v=new A.Iv(1,"flip")
D.cMp=w([B.p2,A_.Ev,B.rV],x.w)
D.cHE=w(["Unlock","Verify","Secure"],x.s)
D.cvH=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.f5A=new A.zg(D.a5v,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.arc,D.cMp,D.cHE,D.cvH)
D.aMY=new A.Iv(2,"towers")
D.cGy=w([B.wX,B.p7,B.hI],x.w)
D.cGb=w(["Save","Grow","Earn"],x.s)
D.cjW=w(["","",""],x.s)
D.f5C=new A.zg(D.aMY,"GROWTH SKYLINE","Solid towers rise from the floor and light up",B.ZB,D.cGy,D.cGb,D.cjW)
D.a5w=new A.Iv(3,"assemble")
D.cNc=w([B.lW,B.hc,B.dP],x.w)
D.cCl=w(["Launch","Charge","Shine"],x.s)
D.cJZ=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.f5E=new A.zg(D.a5w,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.apH,D.cNc,D.cCl,D.cJZ)
D.aMZ=new A.Iv(4,"carousel")
D.cN2=w([B.b8,B.j9],x.O)
D.cD4=w([B.no,B.afR,B.L9],x.w)
D.cyj=w(["Explore","Discover","Learn"],x.s)
D.cI_=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.f5z=new A.zg(D.aMZ,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.cN2,D.cD4,D.cyj,D.cI_)
D.aN_=new A.Iv(5,"burst")
D.cG7=w([B.kk,B.tS],x.O)
D.cwW=w([B.kT,B.lT,B.hH],x.w)
D.cxd=w(["Cheer","Win","Love"],x.s)
D.czc=w(["Make some noise","First place","Share the joy"],x.s)
D.f5D=new A.zg(D.aN_,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cG7,D.cwW,D.cxd,D.czc)
D.aqZ=w([D.f5B,D.f5A,D.f5C,D.f5E,D.f5z,D.f5D],C.az("M<zg>"))
D.e40=new C.bA("skin","Skin",B.afS)
D.e5b=new C.bA("muscle","Muscles",B.KK)
D.e4Y=new C.bA("organ","Organs",B.hH)
D.bnA=new C.a_(62747,"MaterialIcons",!1)
D.e50=new C.bA("bone","Skeleton",D.bnA)
D.e5h=new C.bA("vessel","Blood vessels",B.ux)
D.cGD=w([D.e40,D.e5b,D.e4Y,D.e50,D.e5h],x.c)
D.e8B=new A.tZ("Simple legs","Light. Land gently.",0.15,0.2)
D.e8D=new A.tZ("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.e8G=new A.tZ("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.At=w([D.e8B,D.e8D,D.e8G],x._)
D.cI7=w([1.77,3.55,7.15,16.7],x.n)
D.cKm=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.e1_=new C.V("spiral","Spiral")
D.dTA=new C.V("barred","Barred spiral")
D.dZe=new C.V("elliptical","Elliptical")
D.cL0=w([D.e1_,D.dTA,D.dZe],x.L)
D.e5T=new C.d6(["beat",0.18,0.28,0])
D.e6O=new C.d6(["burst",0.7,0.2,0])
D.e6X=new C.d6(["delay",0.45,0.5,1])
D.e6z=new C.d6(["ripple",0.75,0.6,3])
D.cC6=w([D.e5T,D.e6O,D.e6X,D.e6z],x.e)
D.a2a=new C.V(2,3)
D.cLO=w([K.mM,I.Gn,D.a2a],x.u)
D.f4S=new A.Ee("First spark","A clock lights a burst and a ripple",D.cC6,D.cLO)
D.e6h=new C.d6(["beat",0.15,0.3,1])
D.e5z=new C.d6(["ripple",0.62,0.15,0])
D.e6U=new C.d6(["delay",0.4,0.45,0])
D.e64=new C.d6(["ripple",0.7,0.45,0])
D.e5P=new C.d6(["delay",0.4,0.7,1])
D.e6B=new C.d6(["shake",0.75,0.75,0])
D.cWT=w([D.e6h,D.e5z,D.e6U,D.e64,D.e5P,D.e6B],x.e)
D.dRJ=new C.V(2,4)
D.aFB=new C.V(4,5)
D.cFb=w([K.mM,I.Gn,D.a2a,D.dRJ,D.aFB],x.u)
D.f4U=new A.Ee("Heartbeat","Two thumps, then a shake",D.cWT,D.cFb)
D.e5Y=new C.d6(["dice",0.15,0.7,1])
D.e6Z=new C.d6(["echo",0.4,0.7,0])
D.e63=new C.d6(["comet",0.7,0.5,4])
D.e6P=new C.d6(["burst",0.72,0.2,1])
D.e6f=new C.d6(["burst",0.3,0.25,0])
D.e5Z=new C.d6(["pop",0.55,0.85,0])
D.c0w=w([D.e5Y,D.e6Z,D.e63,D.e6P,D.e6f,D.e5Z],x.e)
D.dRt=new C.V(1,3)
D.dRu=new C.V(1,4)
D.aFA=new C.V(0,5)
D.cMY=w([K.mM,I.uV,D.dRt,D.dRu,D.aFA],x.u)
D.f4T=new A.Ee("Fireworks","Dice launch comets that burst in colour",D.c0w,D.cMY)
D.e61=new C.d6(["beat",0.15,0.2,2])
D.e6n=new C.d6(["chance",0.4,0.2,0])
D.e5V=new C.d6(["ball",0.7,0.12,3])
D.e5J=new C.d6(["chance",0.4,0.5,1])
D.e6Y=new C.d6(["ball",0.3,0.08,1])
D.e5C=new C.d6(["ripple",0.7,0.55,3])
D.bUB=w([D.e61,D.e6n,D.e5V,D.e5J,D.e6Y,D.e5C],x.e)
D.a2b=new C.V(3,4)
D.dRK=new C.V(2,5)
D.cgq=w([K.mM,I.uV,I.a29,D.a2b,D.dRK],x.u)
D.f4R=new A.Ee("Rain","Balls fall at random and splash",D.bUB,D.cgq)
D.e6o=new C.d6(["beat",0.12,0.45,2])
D.e6Q=new C.d6(["toggle",0.38,0.2,0])
D.e6W=new C.d6(["wash",0.7,0.15,4])
D.e5X=new C.d6(["count3",0.38,0.45,0])
D.e6T=new C.d6(["burst",0.72,0.4,0])
D.e6g=new C.d6(["light",0.55,0.7,1])
D.e5K=new C.d6(["pop",0.8,0.8,4])
D.cPm=w([D.e6o,D.e6Q,D.e6W,D.e5X,D.e6T,D.e6g,D.e5K],x.e)
D.dRY=new C.V(3,6)
D.bXI=w([K.mM,I.uV,I.a29,D.a2b,D.aFA,D.dRY],x.u)
D.f4P=new A.Ee("Disco","A beat drives lights, washes and bursts",D.cPm,D.bXI)
D.e70=new C.d6(["button",0.12,0.2,0])
D.e5E=new C.d6(["delay",0.34,0.2,1])
D.e7_=new C.d6(["light",0.56,0.2,1])
D.e6V=new C.d6(["delay",0.56,0.45,1])
D.e6p=new C.d6(["ball",0.34,0.6,0])
D.e5I=new C.d6(["delay",0.34,0.8,1])
D.e5y=new C.d6(["burst",0.7,0.8,5])
D.bHV=w([D.e70,D.e5E,D.e7_,D.e6V,D.e6p,D.e5I,D.e5y],x.e)
D.dTr=new C.V(5,6)
D.cTG=w([K.mM,I.uV,D.a2a,D.a2b,D.aFB,D.dTr],x.u)
D.f4Q=new A.Ee("Domino","Tap the button and watch it run down the line",D.bHV,D.cTG)
D.arg=w([D.f4S,D.f4U,D.f4T,D.f4R,D.f4P,D.f4Q],C.az("M<Ee>"))
D.cL8=w([0.05,0.15,0.25],x.n)
D.cLn=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.cLZ=w([1.5,3,4.5,9,12],x.n)
D.e2Q=new C.bA("dice","Dice",B.lS)
D.e3K=new C.bA("coin","Coin",E.wR)
D.e5c=new C.bA("num","Number",B.wZ)
D.cM8=w([D.e2Q,D.e3K,D.e5c],x.c)
D.cMc=w(["skin","muscle","organ","bone","vessel"],x.s)
D.eYC=new A.N9("Moon",1.62,0,4291941851)
D.eYD=new A.N9("Mars",3.71,0.01,4294472049)
D.eYE=new A.N9("Earth",9.81,1,4281908728)
D.eYG=new A.N9("Jupiter",24.79,1.4,4294677052)
D.eYF=new A.N9("Sun",274,2,4294688548)
D.xo=w([D.eYC,D.eYD,D.eYE,D.eYG,D.eYF],C.az("M<N9>"))
D.arm=w([B.cJ,B.aM,B.bq,B.b3,B.bD,B.cd,B.dg,B.hS],x.O)
D.dG0={H:0}
D.d1Q=new C.bt(D.dG0,[2],x.I)
D.d3h=new A.ry("Hydrogen","H\u2082",D.d1Q,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.dG1={H:0,Cl:1}
D.d21=new C.bt(D.dG1,[1,1],x.I)
D.d3j=new A.ry("Hydrogen chloride","HCl",D.d21,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.dG2={H:0,O:1}
D.d1z=new C.bt(D.dG2,[2,1],x.I)
D.d3k=new A.ry("Water","H\u2082O",D.d1z,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.dGd={N:0,H:1}
D.d2n=new C.bt(D.dGd,[1,3],x.I)
D.d3s=new A.ry("Ammonia","NH\u2083",D.d2n,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a1i={C:0,H:1}
D.d2i=new C.bt(D.a1i,[1,4],x.I)
D.d3l=new A.ry("Methane","CH\u2084",D.d2i,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.dG3={H:0,S:1}
D.d0I=new C.bt(D.dG3,[2,1],x.I)
D.d3r=new A.ry("Hydrogen sulfide","H\u2082S",D.d0I,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.dGi={O:0}
D.d2l=new C.bt(D.dGi,[2],x.I)
D.d3t=new A.ry("Oxygen","O\u2082",D.d2l,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.dGc={N:0}
D.d1R=new C.bt(D.dGc,[2],x.I)
D.d3i=new A.ry("Nitrogen","N\u2082",D.d1R,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.dFR={C:0,O:1}
D.d2s=new C.bt(D.dFR,[1,2],x.I)
D.d3p=new A.ry("Carbon dioxide","CO\u2082",D.d2s,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aAb={C:0,H:1,O:2}
D.d0u=new C.bt(D.aAb,[1,2,1],x.I)
D.d3q=new A.ry("Formaldehyde","CH\u2082O",D.d0u,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.d2h=new C.bt(D.a1i,[2,4],x.I)
D.d3n=new A.ry("Ethene","C\u2082H\u2084",D.d2h,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.d2g=new C.bt(D.a1i,[2,6],x.I)
D.d3m=new A.ry("Ethane","C\u2082H\u2086",D.d2g,"Two carbons joined by a single bond, each holding three hydrogens.")
D.d0v=new C.bt(D.aAb,[1,4,1],x.I)
D.d3o=new A.ry("Methanol","CH\u2083OH",D.d0v,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.ZZ=w([D.d3h,D.d3j,D.d3k,D.d3s,D.d3l,D.d3r,D.d3t,D.d3i,D.d3p,D.d3q,D.d3n,D.d3m,D.d3o],C.az("M<ry>"))
D.cNW=w([],x.Y)
D.cNX=w([],x.x)
D.a_8=w([],x.B)
D.cOh=w([0,0.46,0.82],x.n)
D.cOt=w([5,10,15,25,45,60],x.t)
D.cOJ=w([-0.045,0.03,-0.015],x.n)
D.cP5=w([0.9,0.97,1],x.n)
D.arI=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.t1=w([0.05,0.2,0.35],x.n)
D.cxh=w([D.CQ,D.CQ],x.O)
D.cC3=w([B.D2,B.M],x.O)
D.cBb=w([B.h8,B.hQ],x.O)
D.cvE=w([B.j9,B.mk],x.O)
D.bUa=w([B.lH,B.dn],x.O)
D.arJ=w([D.cxh,D.cC3,D.cBb,D.cvE,D.bUa],x.k)
D.eYq=new A.ub("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.eYr=new A.ub("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.eYi=new A.ub("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.eYp=new A.ub("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.eYn=new A.ub("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.eYj=new A.ub("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.eYo=new A.ub("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.eYk=new A.ub("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.eYm=new A.ub("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.eYl=new A.ub("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.Ay=w([D.eYq,D.eYr,D.eYi,D.eYp,D.eYn,D.eYj,D.eYo,D.eYk,D.eYm,D.eYl],C.az("M<ub>"))
D.b4q=new C.x(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,B.t)
D.cQ6=w([D.CQ,D.b4q,D.a94,B.a8H],x.O)
D.dR6=new C.V(0,"AND")
D.dRv=new C.V(1,"Adder")
D.dRL=new C.V(2,"Blinker")
D.dRZ=new C.V(3,"Memory")
D.cRB=w([D.dR6,D.dRv,D.dRL,D.dRZ],x.T)
D.arS=w([-104,0,104],x.n)
D.cS0=w([-1,1],x.n)
D.cS2=w([-24,24],x.n)
D.cS5=w([-8,8],x.n)
D.arU=w([-92,0,92],x.n)
D.cSo=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.e8y=new A.tZ("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.e8F=new A.tZ("Medium tank","Balanced.",0.35,1)
D.e8E=new A.tZ("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.NR=w([D.e8y,D.e8F,D.e8E],x._)
D.cSE=w([1,2,3,4,6,8],x.n)
D.mH=w([0.04,0.2,0.36],x.n)
D.as2=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.cTs=w([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],x.n)
D.e4X=new C.bA(D.aMX,"Fold",B.XP)
D.e4e=new C.bA(D.a5v,"Flip",B.E7)
D.bnV=new C.a_(62889,"MaterialIcons",!1)
D.e5a=new C.bA(D.aMY,"Rise",D.bnV)
D.ah1=new C.a_(983870,"MaterialIcons",!1)
D.e2s=new C.bA(D.a5w,"Assemble",D.ah1)
D.e2B=new C.bA(D.aMZ,"Spin",D.afp)
D.e2y=new C.bA(D.aN_,"Pop",B.kT)
D.cTD=w([D.e4X,D.e4e,D.e5a,D.e2s,D.e2B,D.e2y],C.az("M<+(Iv,n,a_)>"))
D.as7=w([B.cd,B.j2,B.bo,B.b3,B.bD,B.cJ],x.O)
D.cTO=w([B.b3,B.dg,B.dg,B.bq],x.O)
D.cTZ=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.e1T=new C.V("Make the output turn HALF as fast as the input.",0.5)
D.dV1=new C.V("Make the output turn TWICE as fast.",2)
D.dRA=new C.V("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.e19=new C.V("Make the output turn 4 times faster.",4)
D.dXT=new C.V("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.dZA=new C.V("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.dYE=new C.V("Make the output turn 3 times faster.",3)
D.dZ5=new C.V("Make the output spin at the same speed as the input, using four different gears.",1)
D.asc=w([D.e1T,D.dV1,D.dRA,D.e19,D.dXT,D.dZA,D.dYE,D.dZ5],C.az("M<+(n,P)>"))
D.cV_=w([1,2,3,4,5,6,7,8],x.n)
D.NT=w([B.cd,B.cX,B.bq,B.b3,B.bD,B.cJ,B.c,B.dg],x.O)
D.cVH=w(["solar","turbine","crank","pot"],x.s)
D.cW1=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.cW5=w([0,0.35,0.75,1],x.n)
D.e2L=new C.bA("drop","Drop",B.XL)
D.e2N=new C.bA("weight","Weight",Q.ah5)
D.e55=new C.bA("cannon","Newton's cannon",B.Xi)
D.cWE=w([D.e2L,D.e2N,D.e55],x.c)
D.e0m=new C.V("piano","Piano")
D.e0c=new C.V("organ","Organ")
D.dYp=new C.V("bell","Bell")
D.e0o=new C.V("pluck","Pluck")
D.e18=new C.V("synth","Synth")
D.dZw=new C.V("flute","Flute")
D.asr=w([D.e0m,D.e0c,D.dYp,D.e0o,D.e18,D.dZw],x.L)
D.cX2=w(["volts","level","ohms","on"],x.s)
D.cY6=w([B.iW,B.A4,B.E0,B.p2,A_.Ev,B.rV,B.wX,B.p7,B.hI,B.lW,B.hc,B.dP,B.hH,B.hJ,B.lT,B.lU,B.wY,B.qi,B.ln,B.E_,B.rU,B.KM,B.wJ,B.agz,B.KB,B.wU,B.KK,B.agd,M.agY,B.kT],x.w)
D.cYD=w([1,0.18,0.06],x.n)
D.cYZ=w([0.72,1],x.n)
D.cZ8=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.dHh={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.d0o=new C.bt(D.dHh,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aAd={A:0,T:1,C:2,G:3}
D.a_V=new C.bt(D.aAd,["U","A","G","C"],x.l)
D.d0w=new C.bt(D.aAd,["T","A","G","C"],x.l)
D.dG9={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.cN6=w([0,2,4,5,7,9,11],x.t)
D.cwE=w([0,2,3,5,7,8,10],x.t)
D.cRN=w([0,3,5,6,7,10],x.t)
D.AF=new C.bt(D.dG9,[D.aqJ,D.cN6,D.cwE,D.cRN,D.aju],C.az("bt<n,al<G>>"))
D.dH5={A:0,T:1,U:2,C:3,G:4}
D.d0L=new C.bt(D.dH5,[B.cJ,B.cH,B.cH,B.aM,B.bq],C.az("bt<n,x>"))
D.dFC={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.f_4=new A.x2("Switch",D.agL,B.cX,0,"Tap it to turn it ON or OFF.")
D.f_0=new A.x2("Blinker",B.o8,B.bo,0,"Turns itself ON and OFF. Tap to change the speed.")
D.f_1=new A.x2("AND",D.ah1,B.cH,2,"ON only when BOTH inputs are ON.")
D.bpo=new C.a_(63671,"MaterialIcons",!1)
D.f__=new A.x2("OR",D.bpo,B.bD,2,"ON when EITHER input is ON.")
D.f_2=new A.x2("XOR",H.X6,B.cd,2,"ON when the inputs are DIFFERENT.")
D.eZX=new A.x2("NAND",B.rK,B.b3,2,"OFF only when BOTH inputs are ON.")
D.bos=new C.a_(63176,"MaterialIcons",!1)
D.eZY=new A.x2("NOR",D.bos,B.hS,2,"ON only when BOTH inputs are OFF.")
D.eZZ=new A.x2("NOT",U.Eo,B.dg,1,"Flips the signal: ON becomes OFF.")
D.f_3=new A.x2("Light",B.wO,B.j2,1,"Glows when its input is ON.")
D.f_5=new A.x2("Buzzer",B.np,B.cJ,1,"Beeps while its input is ON.")
D.xA=new C.bt(D.dFC,[D.f_4,D.f_0,D.f_1,D.f__,D.f_2,D.eZX,D.eZY,D.eZZ,D.f_3,D.f_5],C.az("bt<n,x2>"))
D.dH2={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.e36=new C.bA(3,20,1.9)
D.e2H=new C.bA(33,90,1.6)
D.e5t=new C.bA(52,15,3.2)
D.e5r=new C.bA(45,-100,1.8)
D.e48=new C.bA(-15,-60,1.9)
D.e3G=new C.bA(-25,140,2.4)
D.e3y=new C.bA(-82,0,2.2)
D.axS=new C.bt(D.dH2,[D.e36,D.e2H,D.e5t,D.e5r,D.e48,D.e3G,D.e3y],C.az("bt<n,+(P,P,P)>"))
D.cw6=w([B.C],x.M)
D.cwn=w([B.ax,B.aE],x.M)
D.cEn=w([B.ax,B.C,B.aE],x.M)
D.cFE=w([B.ax,B.kH,B.C,B.l7,B.aE],x.M)
D.cRx=w([B.ax,B.kH,B.a1,B.a7,B.l7,B.aE],x.M)
D.d1G=new C.dW([1,D.cw6,2,D.cwn,3,D.cEn,4,B.asx,5,D.cFE,6,D.cRx],C.az("dW<G,al<d4>>"))
D.dGa={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.e4j=new C.bA(1,B.cg,"Hydrogen")
D.e3l=new C.bA(4,B.bu,"Carbon")
D.e2t=new C.bA(3,B.db,"Nitrogen")
D.e4A=new C.bA(2,B.aH,"Oxygen")
D.e42=new C.bA(2,B.cX,"Sulfur")
D.e53=new C.bA(1,B.br,"Chlorine")
D.uK=new C.bt(D.dGa,[D.e4j,D.e3l,D.e2t,D.e4A,D.e42,D.e53],C.az("bt<n,+(G,x,n)>"))
D.dHm={Calm:0,Box:1,Sleep:2}
D.cdY=w([4,2,6,0],x.n)
D.ce4=w([4,4,4,4],x.n)
D.ce5=w([4,7,8,0],x.n)
D.Oh=new C.bt(D.dHm,[D.cdY,D.ce4,D.ce5],C.az("bt<n,al<P>>"))
D.dFL={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.vo=new A.YX(0,"source")
D.cFe=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.f3v=new A.pv("Clock",B.o8,D.vo,B.bo,D.cFe)
D.f3r=new A.pv("Button",B.x_,D.vo,B.aM,B.T)
D.cV3=w(["random","quick","slow"],x.s)
D.f3C=new A.pv("Dice",B.lS,D.vo,B.cd,D.cV3)
D.bp4=new C.a_(63484,"MaterialIcons",!1)
D.C_=new A.YX(1,"logic")
D.cYU=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.f3y=new A.pv("Delay",D.bp4,D.C_,B.cH,D.cYU)
D.cOz=w(["fast","mid","slow"],x.s)
D.f3D=new A.pv("Echo",B.ags,D.C_,B.bD,D.cOz)
D.f3A=new A.pv("Every 2nd",U.Eo,D.C_,B.hS,B.T)
D.boH=new C.a_(63309,"MaterialIcons",!1)
D.f3x=new A.pv("Every 3rd",D.boH,D.C_,B.b3,B.T)
D.bqH=new C.a_(983902,"MaterialIcons",!1)
D.bHm=w(["50%","25%","75%"],x.s)
D.f3F=new A.pv("Chance",D.bqH,D.C_,B.dg,D.bHm)
D.pF=new A.YX(2,"out")
D.f3t=new A.pv("Light",B.wO,D.pF,B.j2,B.T)
D.f3u=new A.pv("Burst",B.kT,D.pF,B.cd,B.T)
D.f3s=new A.pv("Ripple",B.x4,D.pF,B.b8,B.T)
D.f3B=new A.pv("Ball",B.agE,D.pF,B.dg,B.T)
D.f3z=new A.pv("Comet",B.lW,D.pF,B.bD,B.T)
D.bqt=new C.a_(983669,"MaterialIcons",!1)
D.f3E=new A.pv("Shake",D.bqt,D.pF,B.cJ,B.T)
D.f3G=new A.pv("Pop",B.E1,D.pF,B.bq,B.T)
D.f3w=new A.pv("Wash",B.KP,D.pF,B.nO,B.T)
D.m1=new C.bt(D.dFL,[D.f3v,D.f3r,D.f3C,D.f3y,D.f3D,D.f3A,D.f3x,D.f3F,D.f3t,D.f3u,D.f3s,D.f3B,D.f3z,D.f3E,D.f3G,D.f3w],C.az("bt<n,pv>"))
D.dH1={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"ORBIT STUDIO":5,"SWARM STUDIO":6,"FIREWORK DESIGNER":7,"CHAIN BURST":8,"CIRCUIT LAB":9,"PERIODIC TABLE":10,"BODY EXPLORER":11,"SPIN THE WHEEL":12,"FOCUS TIMER":13,"MEMORY MATCH":14,"LUCKY POCKET":15,"ELECTRONICS LAB":16,"AI INVENTOR":17,"MAGNET LAB":18,"RADIO LAB":19,"POWER PLANT":20,"POWER GRID":21,"INTERNET JOURNEY":22,"ROBOT CODER":23,"BUG SMASHER":24,"ROCKET LANDER":25,"DATA SNAKE":26,"BINARY 2048":27,"SIGNAL BREAKER":28,"PASSWORD LAB":29,"WAVE LAB":30,"BUG HUNT":31,"MOLECULE MAKER":32,"DNA LAB":33,"ECOSYSTEM LAB":34,"BALANCE LAB":35,"GEAR LAB":36,"OPTICS LAB":37,"LASER MAZE":38,"LIGHT MIXER":39,"ATOM BUILDER":40,"CIPHER LAB":41,"PIXEL TV":42}
D.ay1=new C.bt(D.dH1,["sparkle","sparkle","whoosh","click","bounce","space","bubble","pop","zap","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","lab","organic","organic","click","tech","sparkle","zap","sparkle","lab","tech","tech"],x.l)
D.dH6={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.AG=new C.bt(D.dH6,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.dFK={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.e2c=new C.V("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.dTp=new C.V("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.dTn=new C.V("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.dZ4=new C.V("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.dZH=new C.V("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.dZ1=new C.V("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.dS0=new C.V("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.dY1=new C.V("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.e2i=new C.V("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.dZS=new C.V("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.dUK=new C.V("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.dRT=new C.V("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.dUg=new C.V("Movement","They pull your legs together and help you balance.")
D.dVe=new C.V("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.dTu=new C.V("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.e0P=new C.V("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.e1D=new C.V("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.dXU=new C.V("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.e1s=new C.V("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.dXe=new C.V("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.dZY=new C.V("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.dRU=new C.V("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.dVp=new C.V("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.dZM=new C.V("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.dXp=new C.V("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.e1y=new C.V("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.dYO=new C.V("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.dS_=new C.V("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.e_g=new C.V("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.e0C=new C.V("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.e_I=new C.V("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.dRd=new C.V("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.dYA=new C.V("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.dYD=new C.V("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.dVK=new C.V("Movement","The chest muscles push your arms forward, like when you push a door.")
D.dTx=new C.V("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.dV8=new C.V("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.dY7=new C.V("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.e07=new C.V("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.e2g=new C.V("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.dZW=new C.V("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.dR3=new C.V("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.dYb=new C.V("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.dRq=new C.V("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.e0g=new C.V("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.e0M=new C.V("Movement","These lift your foot up so your toes do not drag on the ground.")
D.dYm=new C.V("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.e0p=new C.V("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.dRW=new C.V("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.e1a=new C.V("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.dU1=new C.V("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.e_Y=new C.V("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.dVC=new C.V("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.dXl=new C.V("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.e_5=new C.V("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.e1k=new C.V("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.e1c=new C.V("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.e1g=new C.V("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.dXF=new C.V("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.e_v=new C.V("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.e_F=new C.V("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.e10=new C.V("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.dYl=new C.V("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.dWz=new C.V("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.dVY=new C.V("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.dYx=new C.V("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.e_1=new C.V("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.dWQ=new C.V("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.dX7=new C.V("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.dU9=new C.V("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.e0L=new C.V("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.dUz=new C.V("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.dRo=new C.V("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.dVJ=new C.V("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.dRl=new C.V("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.dTK=new C.V("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.dVN=new C.V("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.dUF=new C.V("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.e_d=new C.V("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.dVh=new C.V("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.e25=new C.V("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.dW0=new C.V("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.dXB=new C.V("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.dYS=new C.V("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.dUJ=new C.V("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.dUB=new C.V("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.d2J=new C.bt(D.dFK,[D.e2c,D.dTp,D.dTn,D.dZ4,D.dZH,D.dZ1,D.dS0,D.dY1,D.e2i,D.dZS,D.dUK,D.dRT,D.dUg,D.dVe,D.dTu,D.e0P,D.e1D,D.dXU,D.e1s,D.dXe,D.dZY,D.dRU,D.dVp,D.dZM,D.dXp,D.e1y,D.dYO,D.dS_,D.e_g,D.e0C,D.e_I,D.dRd,D.dYA,D.dYD,D.dVK,D.dTx,D.dV8,D.dY7,D.e07,D.e2g,D.dZW,D.dR3,D.dYb,D.dRq,D.e0g,D.e0M,D.dYm,D.e0p,D.dRW,D.e1a,D.dU1,D.e_Y,D.dVC,D.dXl,D.e_5,D.e1k,D.e1c,D.e1g,D.dXF,D.e_v,D.e_F,D.e10,D.dYl,D.dWz,D.dVY,D.dYx,D.e_1,D.dWQ,D.dX7,D.dU9,D.e0L,D.dUz,D.dRo,D.dVJ,D.dRl,D.dTK,D.dVN,D.dUF,D.e_d,D.dVh,D.e25,D.dW0,D.dXB,D.dYS,D.dUJ,D.dUB],C.az("bt<n,+(n,n)>"))
D.d2L=new C.hG(B.G,11)
D.d5P=new A.S5(null)
D.d9D=new A.S9(null)
D.d9E=new A.Sa(null)
D.d9R=new A.Sb(null)
D.dbS=new A.Sd(null)
D.dbT=new A.Se(null)
D.dbU=new A.Sf(null)
D.dcG=new A.SA(null)
D.dcI=new A.SP(null)
D.dcJ=new A.SQ(null)
D.dcK=new A.SR(null)
D.ddh=new A.SY(null)
D.dfc=new A.T1(null)
D.dfd=new A.T3(null)
D.dfe=new A.T4(null)
D.dfg=new A.T5(null)
D.dg0=new A.Th(null)
D.dgR=new A.Tm(null)
D.dgT=new A.To(null)
D.dgY=new A.Ty(null)
D.dh8=new A.Tz(null)
D.dhE=new A.TA(null)
D.dj8=new A.TC(null)
D.dkb=new A.TD(null)
D.dkc=new A.TE(null)
D.dlx=new A.TF(null)
D.dBq=new A.TG(null)
D.dBr=new A.TH(null)
D.dBs=new A.TK(null)
D.dBt=new A.TL(null)
D.dDm=new A.TT(null)
D.dDn=new A.TU(null)
D.dDv=new A.U0(null)
D.dDE=new A.U4(null)
D.dDF=new A.U5(null)
D.dDG=new A.a5N(null)
D.dE6=new A.U6(null)
D.dFz=new A.Ua(null)
D.dHv=new C.v(0,118)
D.dHw=new C.v(0,13)
D.dHx=new C.v(0,17)
D.dHB=new C.v(0,330)
D.dHG=new C.v(0,-13)
D.a1m=new C.v(0,-6)
D.dHK=new C.v(0,-6771)
D.dHL=new C.v(0,-9)
D.aAo=new C.v(11,8)
D.dHQ=new C.v(14,-18)
D.dHR=new C.v(18,-12)
D.aAs=new C.v(20,0)
D.dHX=new C.v(20,-17)
D.dHZ=new C.v(22,10)
D.aAt=new C.v(22,8)
D.dI0=new C.v(24,-18)
D.dI1=new C.v(25,8)
D.dI2=new C.v(26,0)
D.dI6=new C.v(28,-30)
D.dIb=new C.v(30,18)
D.aAx=new C.v(34,-32)
D.G3=new C.v(36,0)
D.dIh=new C.v(42,0)
D.dIl=new C.v(4,11)
D.dIn=new C.v(4,-2)
D.dIq=new C.v(5,0)
D.dIr=new C.v(5,17)
D.dIs=new C.v(5,6)
D.dIE=new C.v(-2.6,-1)
D.dIF=new C.v(1.9,-0.8)
D.dII=new C.v(-0.22,0.09)
D.dIN=new C.v(2.6,1)
D.dJr=new C.v(-10,12)
D.dJs=new C.v(-11,-2)
D.dJt=new C.v(-13,-5)
D.dJu=new C.v(-14,2)
D.dJv=new C.v(-14,-12)
D.dJw=new C.v(-17,-18)
D.aAI=new C.v(-20,0)
D.dJz=new C.v(-20,-9)
D.Pa=new C.v(-22,8)
D.dJA=new C.v(-22,-10)
D.dJB=new C.v(-22,-11)
D.dJC=new C.v(-26,0)
D.dJH=new C.v(-42,0)
D.dJJ=new C.v(-4,11)
D.dJK=new C.v(-4,-2)
D.dJM=new C.v(-5,0)
D.dJN=new C.v(-5,20)
D.dJO=new C.v(-5,6)
D.dJP=new C.v(-6,-42)
D.eDf=new C.w("Thinking\u2026",null,B.im,null,null,null,null,null,null,null,null,null)
D.dKF=new C.B(B.lj,D.eDf,null)
D.eRQ=new C.w("Start from a ready-made board",null,B.fS,null,null,null,null,null,null,null,null,null)
D.dKP=new C.B(A9.wi,D.eRQ,null)
D.bij=new C.L(4,0,4,14)
D.ez2=new C.F(!0,B.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eE6=new C.w("Games and little helpers for a spare minute.",null,D.ez2,null,null,null,null,null,null,null,null,null)
D.dKX=new C.B(D.bij,D.eE6,null)
D.eP0=new C.w("Tap to throw in a star",null,B.kb,null,null,null,null,null,null,null,null,null)
D.aWp=new C.cw(B.C,null,null,D.eP0,null)
D.dPv=new C.cE(0,null,0,14,null,null,D.aWp,null)
D.cP3=w([B.iN,B.bu],x.O)
D.aFs=new C.bT(B.C,0.5,B.w,null,0,D.cP3,null,null)
D.cVB=w([B.fr,M.CR],x.O)
D.dQc=new C.bT(B.C,0.5,B.w,null,0,D.cVB,null,null)
D.cHj=w([B.c,B.bO],x.O)
D.dQe=new C.bT(B.C,0.5,B.w,null,0,D.cHj,null,null)
D.dQf=new C.bT(B.C,0.5,B.w,null,0,I.arB,null,null)
D.cVT=w([B.cg,B.mo],x.O)
D.aFt=new C.bT(B.C,0.5,B.w,null,0,D.cVT,null,null)
D.b1M=new C.x(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,B.t)
D.b6j=new C.x(1,0.027450980392156862,0.10196078431372549,0.2,B.t)
D.cGm=w([D.b1M,D.aaG,D.b6j],x.O)
D.cNg=w([0,0.7,1],x.n)
D.dQk=new C.bT(B.vr,0.5,B.w,null,0,D.cGm,D.cNg,null)
D.ceb=w([B.z9,B.aZ,B.K],x.O)
D.cSZ=w([0.3,0.7,1],x.n)
D.dQl=new C.bT(B.C,0.5,B.w,null,0,D.ceb,D.cSZ,null)
D.cgV=w([B.fJ,B.d3],x.O)
D.dQm=new C.bT(B.C,0.5,B.w,null,0,D.cgV,null,null)
D.cCc=w([B.z9,B.aZ,B.h8],x.O)
D.dQn=new C.bT(B.C,0.5,B.w,null,0,D.cCc,null,null)
D.cve=w([B.hA,B.aM,B.dB],x.O)
D.dQp=new C.bT(B.vr,0.5,B.w,null,0,D.cve,null,null)
D.cPz=w([B.mo,M.CR],x.O)
D.dQq=new C.bT(B.vr,0.5,B.w,null,0,D.cPz,null,null)
D.b1X=new C.x(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,B.t)
D.b0i=new C.x(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,B.t)
D.cEh=w([D.b1X,D.b0i],x.O)
D.dQs=new C.bT(B.C,0.5,B.w,null,0,D.cEh,null,null)
D.b5Q=new C.x(1,0.11372549019607843,0.3607843137254902,0.611764705882353,B.t)
D.b49=new C.x(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,B.t)
D.b4d=new C.x(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,B.t)
D.cXL=w([D.b5Q,D.b49,D.b4d],x.O)
D.cB5=w([0,0.65,1],x.n)
D.dQt=new C.bT(I.a5E,0.5,B.w,null,0,D.cXL,D.cB5,null)
D.dQu=new C.bT(B.C,0.5,B.w,null,0,D.apd,null,null)
D.cVa=w([B.n7,B.aZ,B.h8],x.O)
D.dQy=new C.bT(B.C,0.5,B.w,null,0,D.cVa,null,null)
D.aFy=new C.b2(9,9)
D.dRa=new C.V(0,-4)
D.dU_=new C.V(0.22,4)
D.dXz=new C.V(0.8,-4)
D.e1d=new C.V(0.58,4)
D.e2O=new C.bA("Moon",1.62,4291941851)
D.e3j=new C.bA("Neptune",11.15,4284524026)
D.e3R=new C.bA("Sun",274,4294688548)
D.e44=new C.bA("Mercury",3.7,4288455599)
D.e4a=new C.bA("Earth",9.81,4281908728)
D.e4c=new C.bA("Mars",3.71,4294472049)
D.e4u=new C.bA("Venus",8.87,4294759245)
D.e4y=new C.bA("Saturn",10.44,4294829706)
D.e4Q=new C.bA("Jupiter",24.79,4294677052)
D.e7O=new C.af(14,-14,20,14)
D.e7P=new C.af(20,-2,30,2)
D.e7R=new C.af(4,-13,30,-3)
D.e7Y=new C.af(-12,-22,12,8)
D.e7Z=new C.af(-12,-6,10,6)
D.e8_=new C.af(-14,20,14,24)
D.e80=new C.af(-14,6,14,10)
D.e81=new C.af(-14,-26,14,18)
D.e82=new C.af(-16,-22,-9,18)
D.e84=new C.af(-22,-3,22,3)
D.e85=new C.af(-22,-4,22,12)
D.aFP=new C.af(-24,-9,24,9)
D.e86=new C.af(-28,-16,28,16)
D.e87=new C.af(-30,-12,30,14)
D.e88=new C.af(-30,-14,0,14)
D.e89=new C.af(-30,-2,30,18)
D.e8a=new C.af(-33,7,33,17)
D.e8b=new C.af(-33,-21,33,17)
D.e8c=new C.af(-34,14,34,26)
D.a2h=new C.af(-34,-18,34,18)
D.e8d=new C.af(-34,-4,34,7)
D.e8e=new C.af(-36,-24,36,20)
D.e8f=new C.af(-38,-22,38,22)
D.e8h=new C.af(-46,-34,46,28)
D.e8i=new C.af(-48,-3,48,3)
D.e8m=new C.af(14,-9,17.5,9)
D.ecG=new C.ap(300,300)
D.aXC=new C.f7(2,null,null,null,null,B.bD,null,null,null,null)
D.ee2=new C.a8(16,16,D.aXC,null)
D.aHy=new C.hI(3,12,12,0.82,null)
D.eTp=new C.w("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aHJ=new C.aX(D.eTp,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.cPB=w([B.cJ,B.cX,B.bq,B.b3,B.nO,B.cJ],x.O)
D.ejT=new C.fP(B.C,0,6.283185307179586,B.w,D.cPB,null,null)
D.esk=new C.F(!0,B.aM,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.Np,null,null,null)
D.ekX=new C.eE("You are here (Sun)",null,null,B.cT,null,null,null,null,null,null,D.esk)
D.aK2=new C.F(!0,B.aA,null,null,null,null,10.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ekY=new C.eE("What we see",null,null,B.cT,null,null,null,null,null,null,D.aK2)
D.epR=new C.F(!0,G.a88,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.el0=new C.eE("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,B.cT,null,null,null,null,null,null,D.epR)
D.epC=new C.F(!0,B.c1,null,null,null,null,15,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.el5=new C.eE("Add atoms with the buttons below",null,null,B.cT,null,null,null,null,null,null,D.epC)
D.aIw=new C.F(!0,B.c1,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ell=new C.F(!0,B.x,null,null,null,null,24,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eln=new C.F(!0,B.c,null,null,null,null,110,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.elS=new C.F(!0,B.bg,null,null,null,null,15,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.em9=new C.F(!0,B.cH,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.emF=new C.F(!0,B.c,null,null,null,null,12.5,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.emV=new C.F(!0,B.c,null,null,null,null,13.5,B.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.enj=new C.F(!0,B.aP,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.enF=new C.F(!0,B.c1,null,null,null,null,9,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.enP=new C.F(!0,B.ak,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ebb=new C.cI(B.hT,B.dF,6)
D.cJL=w([D.ebb],x.q)
D.eo7=new C.F(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cJL,null,null,null)
D.eo9=new C.F(!0,B.aP,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eod=new C.F(!0,B.c,null,null,null,null,17,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eof=new C.F(!0,B.c1,null,null,null,null,10.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoD=new C.F(!0,B.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aIU=new C.F(!0,B.c1,null,null,null,null,9.5,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoY=new C.F(!0,B.aA,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoZ=new C.F(!0,B.c1,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.epU=new C.F(!0,B.c,null,null,null,null,60,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eql=new C.F(!0,B.aA,null,null,null,null,10.5,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eqO=new C.F(!0,B.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eqU=new C.F(!0,B.c,null,null,null,null,12.5,B.a_,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.erA=new C.F(!0,B.c,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.Np,null,null,null)
D.es0=new C.F(!0,B.aA,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.es8=new C.F(!0,B.c,null,null,null,null,11.5,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esL=new C.F(!0,B.c,null,null,null,null,20,B.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.et3=new C.F(!0,B.bJ,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.et7=new C.F(!0,B.c1,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eta=new C.F(!0,B.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etg=new C.F(!0,B.aA,null,null,null,null,18,B.I,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etH=new C.F(!0,B.c1,null,null,null,null,8.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etV=new C.F(!0,B.ak,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJw=new C.F(!0,B.ak,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eu9=new C.F(!0,B.ak,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a3X=new C.F(!0,B.c,null,null,null,null,9.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euG=new C.F(!0,B.c,null,null,null,null,20,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eb2=new C.cI(B.x,B.J,5)
D.cyW=w([D.eb2],x.q)
D.euH=new C.F(!0,B.c,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cyW,null,null,null)
D.ebe=new C.cI(B.aV,B.J,3)
D.cYd=w([D.ebe],x.q)
D.euM=new C.F(!0,B.c,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cYd,null,null,null)
D.ev_=new C.F(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ev4=new C.F(!0,B.hR,null,null,null,null,30,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evj=new C.F(!0,B.c1,null,null,null,null,10.5,B.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evO=new C.F(!0,B.bq,null,null,null,null,30,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewk=new C.F(!0,B.c1,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewZ=new C.F(!0,B.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ex6=new C.F(!0,B.x,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJO=new C.F(!0,B.aA,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exA=new C.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exJ=new C.F(!0,B.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exQ=new C.F(!0,B.aM,null,null,null,null,26,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.QT=new C.F(!0,B.ak,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eya=new C.F(!0,B.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aK_=new C.F(!0,B.ak,null,null,null,null,12,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyd=new C.F(!0,B.aM,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4f=new C.F(!0,B.c,null,null,null,null,13,B.a_,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eA3=new C.w("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,B.QR,null,null,null,null,null,null,null,null,null)
D.eAs=new C.w("LETTER COUNT OF THE SECRET VERSION",null,O.m9,null,null,null,null,null,null,null,null,null)
D.eBp=new C.w("Pick one, then change it and see what happens.",null,B.QR,null,null,null,null,null,null,null,null,null)
D.epo=new C.F(!0,B.ak,null,null,null,null,null,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCn=new C.w("What do you want to invent? Type it below, or tap an idea.",null,D.epo,null,null,null,null,null,null,null,null,null)
D.eCJ=new C.w("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,R.a3v,null,null,null,null,null,null,null,null,null)
D.eDK=new C.w("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.eEl=new C.w("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.eET=new C.w("Make it yours",null,B.l2,null,null,null,null,null,null,null,null,null)
D.eoF=new C.F(!0,B.aA,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eF7=new C.w("Your mass never changes. What changes is how hard each world pulls on it.",null,D.eoF,null,null,null,null,null,null,null,null,null)
D.etl=new C.F(!0,B.j8,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eH9=new C.w("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.etl,null,null,null,null,null,null,null,null,null)
D.eHo=new C.w("YOUR DECODING",null,O.m9,null,null,null,null,null,null,null,null,null)
D.evz=new C.F(!0,B.c1,null,null,null,null,9,B.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIA=new C.w("WHAT HAPPENS",null,D.evz,null,null,null,null,null,null,null,null,null)
D.eK7=new C.w("Check",null,null,null,null,null,null,null,null,null,null,null)
D.eKK=new C.w("Change the words and pictures on the three slabs.",null,B.QR,null,null,null,null,null,null,null,null,null)
D.eKU=new C.w("All the parts and wires will be removed.",null,B.hN,null,null,null,null,null,null,null,null,null)
D.eLc=new C.w("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.eLL=new C.w("All challenges done! Keep inventing.",null,B.hi,null,null,null,null,null,null,null,null,null)
D.eLK=new C.w("Tap the crank on the board again and again to spin it faster.",null,B.im,null,null,null,null,null,null,null,null,null)
D.eMz=new C.w("INTERCEPTED",null,O.m9,null,null,null,null,null,null,null,null,null)
D.eNn=new C.w("Remove this part",null,R.aIz,null,null,null,null,null,null,null,null,null)
D.eNE=new C.w("Clear the board?",null,B.dj,null,null,null,null,null,null,null,null,null)
D.ev5=new C.F(!0,B.bo,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNT=new C.w("How the Lab works",null,D.ev5,null,null,null,null,null,null,null,null,null)
D.eOa=new C.w("?",null,I.aJX,null,null,null,null,null,null,null,null,null)
D.etf=new C.F(!0,B.b3,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOe=new C.w("Planet Earth",null,D.etf,null,null,null,null,null,null,null,null,null)
D.ePi=new C.w("Ready-made circuits",null,B.dQ,null,null,null,null,null,null,null,null,null)
D.aIM=new C.F(!0,null,null,null,null,null,16,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQ6=new C.w("UNIVERSE EXPLORER",null,D.aIM,null,null,null,null,null,null,null,null,null)
D.eSm=new C.w("SECRET VERSION",null,O.m9,null,null,null,null,null,null,null,null,null)
D.exU=new C.F(!0,B.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSR=new C.w("\u26a0 There is no air here, so a parachute will not work.",null,D.exU,null,null,null,null,null,null,null,null,null)
D.eTZ=new C.w("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,R.a3v,null,null,null,null,null,null,null,null,null)
D.eUC=new C.w("You build a machine. A little light runs along the wires, and every part it touches does something.",null,B.a3W,null,null,null,null,null,null,null,null,null)
D.eUX=new C.w("Tap it to change its setting. Drag from the right dot to connect.",null,B.l3,null,null,null,null,null,null,null,null,null)
D.eVO=new C.w("TOOLBOX",null,D.aIM,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.fS9=null
$.fS8=null
$.fXY=0
$.hoo=C.Q(x.N,x.j)
$.hoZ=C.Q(x.N,x.j)
$.hj3=C.Q(x.N,C.az("dQ"))
$.c8W=C.a([],C.az("M<afw>"))
$.fPc=0
$.c9_="music"
$.fRv=null
$.hoK=C.Q(x.N,x.j)
$.hpM=C.Q(x.N,x.j)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hU_","bza",()=>{var v="led"
return C.a([A.auS("Both together","Make the light glow only when BOTH switches are ON.",2,new A.eYv(),v),A.auS("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new A.eYw(),v),A.auS("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new A.eYx(),v),A.auS("Flip it","One switch only: make the light glow when the switch is OFF.",1,new A.eYB(),v),A.auS("Not both","Make the light go OFF only when both switches are ON.",2,new A.eYC(),v),A.auS("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new A.eYD(),"buzzer")],C.az("M<b6C>"))})
w($,"hUq","bzc",()=>C.a([A.np("UNIVERSE","Earth, space and gravity",B.L9,B.b3,new A.eYT()),A.np("ELECTRONICS LAB","Batteries, wires, real circuits",X.X9,B.b3,new A.eYU()),A.np("AI INVENTOR","Say it, watch it get built",B.dP,B.bD,new A.eYV()),A.np("DISCOVERY LAB","Body Explorer: a real 3D human",D.X_,B.bq,new A.eZ5()),A.np("TOOLBOX","Converter, clock, games",M.afA,B.dg,new A.eZ8()),A.np("MOLECULE MAKER","Join atoms into real molecules",B.KA,B.hS,new A.eZ9()),A.np("DNA LAB","Copy DNA, build a protein",D.X_,B.cd,new A.eZa()),A.np("ECOSYSTEM LAB","Grass, rabbits and foxes",B.wU,B.bq,new A.eZb()),A.np("BALANCE LAB","Levers, weight and torque",B.agX,B.aM,new A.eZc()),A.np("GEAR LAB","Teeth, speed and force",B.El,B.dg,new A.eZd()),A.np("LASER MAZE","Bend the beam with mirrors",G.afV,B.aH,new A.eZe()),A.np("LIGHT MIXER","Match colours with light",D.bof,B.b8,new A.eYW()),A.np("CIPHER LAB","Make and crack secret codes",B.x3,B.b3,new A.eYX()),A.np("REACTION LAB","Wire parts together",B.x7,B.bo,new A.eYY()),A.np("SPARK PAINTER","Paint with light",B.X1,B.cd,new A.eYZ()),A.np("ROCKET LANDER","Land softly on the pad",B.lW,B.b3,new A.eZ_()),A.np("ORBIT STUDIO","Slingshot planets",B.no,B.dg,new A.eZ0()),A.np("SWARM STUDIO","A living school of fish",B.KA,B.bq,new A.eZ1()),A.np("CHAIN BURST","One tap, a whole chain",B.hc,B.cd,new A.eZ2()),A.np("TITLE ANIMATOR","Make a moving title",B.A8,B.cX,new A.eZ3()),A.np("CIRCUIT LAB","Connect logic, learn it",B.Xv,B.cH,new A.eZ4()),A.np("MARBLE MUSIC","Marbles ring the notes",D.bnW,B.b8,new A.eZ6()),A.np("ORBIT SEQUENCER","Planets play the tune",D.bqn,B.bD,new A.eZ7())],C.az("M<bo0>")))
w($,"hVU","a0m",()=>{var v,u,t=C.Q(x.N,x.D)
for(v=0;v<16;++v){u=D.N4[v]
t.m(0,u.a,u)}return t})
w($,"hU0","bzb",()=>C.a([A.Wt("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new A.eYE()),A.Wt("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new A.eYF()),A.Wt("Spin the motor","A battery and a motor in a loop will make it spin.",new A.eYG()),A.Wt("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new A.eYH()),A.Wt("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new A.eYI()),A.Wt("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new A.eYy()),A.Wt("Watch TV","A TV needs more power. Set a battery to 12 volts.",new A.eYz()),A.Wt("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new A.eYA())],C.az("M<b6D>")))
w($,"hUs","h56",()=>C.a([A.Zq("Spin the Wheel","Let luck decide","\ud83c\udfa1",B.aM,B.ck,new A.eZm()),A.Zq("Focus Timer","Work, then rest","\u23f1\ufe0f",B.cJ,B.bR,new A.eZn()),A.Zq("Breathe","Calm down in a minute","\ud83e\udee7",B.hS,B.cA,new A.eZo()),A.Zq("Draw Pad","Sketch and share","\ud83c\udfa8",B.bB,B.b0,new A.eZp()),A.Zq("Memory Match","Find the pairs","\ud83c\udccf",B.b3,B.cf,new A.eZq()),A.Zq("Simon Sounds","Copy the tune","\ud83c\udfb5",B.cX,B.br,new A.eZr()),A.Zq("Tip & Split","Share the bill","\ud83e\uddfe",B.bq,B.aW,new A.eZs()),A.Zq("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",B.bD,B.az,new A.eZt())],C.az("M<bpk>")))
w($,"hUr","h55",()=>C.a([A.act("EARTH GLOBE","Turn it, tap a country",B.no,B.b3,new A.eZf()),A.act("SOLAR SYSTEM","The Sun and its worlds",D.bnZ,B.aM,new A.eZg()),A.act("GRAVITY LAB","Drop, weigh, orbit",B.XL,B.dg,new A.eZh()),A.act("BLACK HOLE","Throw in a star",B.DO,B.bD,new A.eZi()),A.act("GALAXY","Build, tilt, collide",B.wG,B.fU,new A.eZj()),A.act("SIZE COMPARE","Earth next to a star",D.boh,B.cd,new A.eZk()),A.act("SEASONS & MOON","Why it is summer",B.ui,B.bo,new A.eZl())],C.az("M<bpf>")))})()};
(a=>{a["aek3D0h74QlRTQVg164osBvykXc="]=a.current})($__dart_deferred_initializers__);