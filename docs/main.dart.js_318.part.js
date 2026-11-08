((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A_,A6,A0,A1,K,V,A7,R,A2,H,A8,A3,A9,W,Aa,Ab,O,Ac,Ad,X,P,Y,Ae,M,Af,Ag,S,Ah,L,Q,Ai,E,F,I,C={
bzr(d){return C.hTT(d)},
hTT(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bzr=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.r0(B.n9(""),d,A.hK,null,null).da(0,A.Z0),$async$bzr)
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
return B.i($async$bzr,v)},
i4J(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.QB[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cU(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.h_(D.QB,new C.fyr())
if(w==null)w=A.d.gI(D.QB)
s=B.T(x.N,x.E)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.M)(r),++u){l=r[u].a
k=l[0]
l=$.qo().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.M)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gI(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.ak2(w.a,w.b,m,w,s,!1)},
hZj(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.R0,new C.fnY(),x.bd).aG(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
icD(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cD(b2,"{")
v=A.a.oL(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.T.aN(0,A.a.ap(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aX(a5)
r=0
for(a6=x.j,a7=J.aV(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=B.w(J.q(q,"kind"))
o=B.w(J.q(q,"id"))
if(!$.qo().ai(0,p)||J.f_(s,o)||J.ad(t)>=8)continue
J.cc(s,o)
n=B.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.doc[a9]
l=J.q(q,m)
if(typeof l=="number")J.aG(n,m,l)}k=A.k.E(typeof J.q(q,"x")=="number"?B.e5(J.q(q,"x")):0.2+A.k.F(r,3)*0.3,0.16,0.84)
j=A.k.E(typeof J.q(q,"y")=="number"?B.e5(J.q(q,"y")):0.25+A.k.an(r,3)*0.3,0.1,0.9)
J.cc(t,new B.e9([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.q(g,0))
e=B.w(J.q(g,2))
d=A.o.E(A.k.O(B.e5(J.q(g,1))),0,1)
a0=A.o.E(A.k.O(B.e5(J.q(g,3))),0,1)
if(J.f_(s,f)&&J.f_(s,e)&&!J.A(f,e))J.cc(i,new B.cw([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.bM.a(J.q(u,"steps"))
a0=J.aV(a0==null?A.cy:a0)
while(a0.C()){a2=a0.gR(a0)
J.cc(a1,B.w(a2))}a3=a1
a0=J.q(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new C.mI(a0,B.w(a1==null?"":a1),t,i,A.X)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.ak2(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
i3j(d){var w,v,u=C.h8F()
d.B(u)
for(w=0;w<60;++w)u.vf(0,0.03333333333333333)
v=u.a
return A.d.b3(v,new C.fva(u))&&!A.d.d9(v,new C.fvb())},
i3i(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.M)(l),++u){t=l[u];++v
k.n(0,t.a,$.qo().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.M)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.q(D.dmt,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aG(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.k.ac(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.M)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aG(s,"\n")+"\nWires: "+A.d.aG(l,"; ")},
hSr(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.M)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aG(v,"\n")+"\n\n"}v=A.d.aG(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
i4I(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qo().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.R0[u]
if(A.d.b3(w,new C.fyo(s)))if(!B.cU(r,s.b.toLowerCase(),0))v=B.cU(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Z(w,new C.fyp(e),B.S(w).k("Z<1>")).gam(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ac(A.d.cL(w,0,new C.fyq())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gI(w)
w=$.qo().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ak2:function ak2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fyr:function fyr(){},
fnY:function fnY(){},
fva:function fva(d){this.a=d},
fvb:function fvb(){},
fyo:function fyo(d){this.a=d},
fyp:function fyp(d){this.a=d},
fyq:function fyq(){},
VH:function VH(d,e){this.c=d
this.a=e},
bkd:function bkd(d,e,f,g,h){var _=this
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
eaG:function eaG(d){this.a=d},
eaH:function eaH(d,e,f){this.a=d
this.b=e
this.c=f},
eaI:function eaI(d){this.a=d},
eaT:function eaT(d){this.a=d},
eaU:function eaU(d,e){this.a=d
this.b=e},
eaP:function eaP(d){this.a=d},
eaN:function eaN(d,e){this.a=d
this.b=e},
eaO:function eaO(d,e,f){this.a=d
this.b=e
this.c=f},
eaQ:function eaQ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eaL:function eaL(d){this.a=d},
eaM:function eaM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eaR:function eaR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eaK:function eaK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eaS:function eaS(d,e){this.a=d
this.b=e},
eaJ:function eaJ(d,e){this.a=d
this.b=e},
eaX:function eaX(d){this.a=d},
eaW:function eaW(d){this.a=d},
eaY:function eaY(d){this.a=d},
eaV:function eaV(d){this.a=d},
eaZ:function eaZ(d,e){this.a=d
this.b=e},
eb_:function eb_(d,e){this.a=d
this.b=e},
eb0:function eb0(d,e){this.a=d
this.b=e},
eb1:function eb1(d,e){this.a=d
this.b=e},
bzM(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fcV,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.P,0,A.p)},
hme(d,e,f,g){var w=null,v=B.m(24),u=B.I(f.j(0.6),A.r,1)
return B.at(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,B.d(e,w,w,w,w,w,w,A.wS,A.L,w,w),A.aA,B.bW(A.fA,g,A.bq,0,8)],x.p),A.m,w,A.e,A.P,0,A.p),A.f,w,w,new B.o(D.bc1,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
Gh:function Gh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uX:function uX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
W3:function W3(d){this.a=d},
aEA:function aEA(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.iJ$=h
_.oE$=i
_.nf$=j
_.iK$=k
_.bx$=l
_.aa$=m
_.c=_.a=null},
eoW:function eoW(){},
epf:function epf(d){this.a=d},
epe:function epe(d,e){this.a=d
this.b=e},
epg:function epg(){},
eph:function eph(){},
eoY:function eoY(d,e,f){this.a=d
this.b=e
this.c=f},
eoX:function eoX(d,e){this.a=d
this.b=e},
eoN:function eoN(d){this.a=d},
eoO:function eoO(d){this.a=d},
eoP:function eoP(d){this.a=d},
eoQ:function eoQ(d){this.a=d},
eoR:function eoR(d){this.a=d},
eoS:function eoS(d){this.a=d},
eoT:function eoT(d){this.a=d},
eoU:function eoU(d){this.a=d},
eoV:function eoV(d){this.a=d},
eoL:function eoL(d){this.a=d},
eoM:function eoM(d){this.a=d},
eoK:function eoK(d){this.a=d},
ep8:function ep8(d,e){this.a=d
this.b=e},
ep3:function ep3(d){this.a=d},
ep4:function ep4(d){this.a=d},
ep0:function ep0(d){this.a=d},
ep5:function ep5(d){this.a=d},
ep_:function ep_(d){this.a=d},
ep6:function ep6(d){this.a=d},
ep7:function ep7(d){this.a=d},
eoZ:function eoZ(d){this.a=d},
ep9:function ep9(d,e){this.a=d
this.b=e},
ep2:function ep2(d,e){this.a=d
this.b=e},
epa:function epa(d){this.a=d},
epb:function epb(d){this.a=d},
epc:function epc(d){this.a=d},
epd:function epd(d){this.a=d},
ep1:function ep1(d){this.a=d},
bhj:function bhj(d,e){this.b=d
this.a=e},
aMk:function aMk(){},
bxr:function bxr(){},
cIC(){var w=0,v=B.j(x.F),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cIC=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.r2().jJ(0,"assets/data/body3d.bin"),$async$cIC)
case 3:d=a1
$.hhx=J.eZ(A.dF.gaQ(d),d.byteOffset,d.byteLength)
t=B.aSu(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jv(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.db9[i]
g=B.b1((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a3d(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b_p))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.ban(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cIC,v)},
aSh:function aSh(d,e,f){this.a=d
this.b=e
this.c=f},
a3d:function a3d(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
ban:function ban(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
UA:function UA(d){this.a=d},
aD5:function aD5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.iJ$=s
_.oE$=t
_.nf$=u
_.iK$=v
_.bx$=w
_.aa$=a0
_.c=_.a=null},
dIh:function dIh(d){this.a=d},
dIg:function dIg(d,e){this.a=d
this.b=e},
dHU:function dHU(d,e){this.a=d
this.b=e},
dHV:function dHV(){},
dIi:function dIi(){},
dHW:function dHW(d,e){this.a=d
this.b=e},
dHX:function dHX(d){this.a=d},
dHY:function dHY(){},
dHZ:function dHZ(d){this.a=d},
dI0:function dI0(d,e){this.a=d
this.b=e},
dI_:function dI_(d){this.a=d},
dHR:function dHR(d,e,f){this.a=d
this.b=e
this.c=f},
dHS:function dHS(d){this.a=d},
dHT:function dHT(d){this.a=d},
dI7:function dI7(d){this.a=d},
dI8:function dI8(d,e){this.a=d
this.b=e},
dI9:function dI9(d,e){this.a=d
this.b=e},
dIa:function dIa(d){this.a=d},
dI6:function dI6(d,e){this.a=d
this.b=e},
dIb:function dIb(d,e){this.a=d
this.b=e},
dI5:function dI5(d,e){this.a=d
this.b=e},
dIc:function dIc(d){this.a=d},
dI4:function dI4(d){this.a=d},
dId:function dId(d){this.a=d},
dI3:function dI3(d){this.a=d},
dIe:function dIe(d){this.a=d},
dI2:function dI2(d){this.a=d},
dIf:function dIf(d){this.a=d},
dI1:function dI1(d){this.a=d},
aLu:function aLu(){},
aLv:function aLv(){},
c3k:function c3k(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c3l:function c3l(d,e){this.a=d
this.b=e},
c3m:function c3m(d){this.a=d},
ayw(d,e,f,g,h){return new C.bb6(d,e,f,g,h)},
h_g(d,e,f,g,h,i){return $.hPP.c4(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cPw(d,e,f,i,g,h))},
yf:function yf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Cx:function Cx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ns:function ns(d,e,f){this.a=d
this.b=e
this.c=f},
bb6:function bb6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fhN:function fhN(){},
fhO:function fhO(){},
fhP:function fhP(){},
fhW:function fhW(){},
fhX:function fhX(){},
fhY:function fhY(){},
UF:function UF(d){this.a=d},
aD7:function aD7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.iJ$=m
_.oE$=n
_.nf$=o
_.iK$=p
_.bx$=q
_.aa$=r
_.c=_.a=null},
dJX:function dJX(d){this.a=d},
dJB:function dJB(d,e){this.a=d
this.b=e},
dJE:function dJE(){},
dJY:function dJY(){},
dJz:function dJz(d,e){this.a=d
this.b=e},
dJA:function dJA(d,e){this.a=d
this.b=e},
dJF:function dJF(d,e,f){this.a=d
this.b=e
this.c=f},
dJu:function dJu(){},
dJv:function dJv(){},
dJw:function dJw(d){this.a=d},
dJx:function dJx(d,e){this.a=d
this.b=e},
dJy:function dJy(d,e,f){this.a=d
this.b=e
this.c=f},
dJG:function dJG(){},
dJH:function dJH(d,e){this.a=d
this.b=e},
dJI:function dJI(d){this.a=d},
dJD:function dJD(d,e){this.a=d
this.b=e},
dJC:function dJC(d){this.a=d},
dJt:function dJt(d,e,f){this.a=d
this.b=e
this.c=f},
dJR:function dJR(d){this.a=d},
dJQ:function dJQ(d){this.a=d},
dJS:function dJS(d){this.a=d},
dJP:function dJP(d){this.a=d},
dJN:function dJN(d){this.a=d},
dJO:function dJO(d){this.a=d},
dJM:function dJM(d){this.a=d},
dJJ:function dJJ(d){this.a=d},
dJL:function dJL(d){this.a=d},
dJT:function dJT(d,e){this.a=d
this.b=e},
dJU:function dJU(d,e){this.a=d
this.b=e},
dJV:function dJV(d){this.a=d},
dJK:function dJK(d){this.a=d},
dJW:function dJW(d,e){this.a=d
this.b=e},
bbp:function bbp(d,e){this.b=d
this.a=e},
cPw:function cPw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aLz:function aLz(){},
bxf:function bxf(){},
hGF(){return new C.Nw(null)},
Qq(d,e,f,g,h){return new C.bsQ(d,e,f,g,h)},
brf(d,e,f){return A.k.E((d-e)/(f-e),0,1)},
h_M(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Nw:function Nw(d){this.a=d},
KA:function KA(d,e){this.a=d
this.b=e},
AH:function AH(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aDo:function aDo(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dPN:function dPN(d,e){this.a=d
this.b=e},
dPM:function dPM(d){this.a=d},
dPP:function dPP(d,e){this.a=d
this.b=e},
dPO:function dPO(d){this.a=d},
bsQ:function bsQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fid:function fid(){},
fie:function fie(){},
fif:function fif(){},
fig:function fig(){},
fih:function fih(){},
fii:function fii(){},
fij:function fij(){},
fik:function fik(){},
fil:function fil(){},
brg:function brg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eZe:function eZe(d){this.a=d},
eZd:function eZd(d,e){this.a=d
this.b=e},
eZb:function eZb(d){this.a=d},
eZf:function eZf(d){this.a=d},
eZc:function eZc(d,e){this.a=d
this.b=e},
aeY:function aeY(d,e,f){this.c=d
this.d=e
this.a=f},
adQ:function adQ(d,e,f){this.c=d
this.d=e
this.a=f},
Qj:function Qj(d,e,f,g,h,i,j,k,l,m){var _=this
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
bse:function bse(d,e){this.b=d
this.a=e},
brK:function brK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ba5:function ba5(d,e){this.b=d
this.a=e},
aHB:function aHB(d,e){this.c=d
this.a=e},
aHC:function aHC(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cO$=e
_.b2$=f
_.c=_.a=null},
eYV:function eYV(d){this.a=d},
eYU:function eYU(d){this.a=d},
eYT:function eYT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eYS:function eYS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eYQ:function eYQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eYP:function eYP(d,e,f){this.a=d
this.b=e
this.c=f},
eYR:function eYR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eYO:function eYO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZ2:function eZ2(d){this.a=d},
eZ1:function eZ1(d){this.a=d},
eZ3:function eZ3(d,e){this.a=d
this.b=e},
eZ4:function eZ4(d,e){this.a=d
this.b=e},
eZ5:function eZ5(d,e){this.a=d
this.b=e},
eZ0:function eZ0(d,e,f){this.a=d
this.b=e
this.c=f},
eZ6:function eZ6(d,e,f){this.a=d
this.b=e
this.c=f},
eZ_:function eZ_(d){this.a=d},
eYW:function eYW(d){this.a=d},
eZ7:function eZ7(d){this.a=d},
eZ8:function eZ8(d){this.a=d},
eYZ:function eYZ(d,e){this.a=d
this.b=e},
eZ9:function eZ9(d,e){this.a=d
this.b=e},
eYY:function eYY(d,e){this.a=d
this.b=e},
eZa:function eZa(d,e){this.a=d
this.b=e},
eYX:function eYX(d,e){this.a=d
this.b=e},
eYM:function eYM(){},
eYN:function eYN(){},
bqT:function bqT(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqk:function bqk(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
baL:function baL(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqm:function bqm(d,e,f){this.b=d
this.c=e
this.a=f},
buj:function buj(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aNa:function aNa(){},
hnG(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a9(0,new B.t(w,0)),u=e.aF(0,new B.t(w,0)),t=1-f,s=3*t
return d.aI(0,t*t*t).a9(0,v.aI(0,s*t*f)).a9(0,u.aI(0,s*f*f)).a9(0,e.aI(0,f*f*f))},
bhi(d,e,f,g,h,i){return $.hQp.c4(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dkq(d,e,f,i,g,h))},
a0s:function a0s(d,e){this.a=d
this.b=e},
qc:function qc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qU:function qU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
CB:function CB(d,e){this.a=d
this.b=e},
Zq:function Zq(d,e){this.a=d
this.b=e},
aeM:function aeM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0F:function a0F(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
CL:function CL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abK:function abK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ac_:function ac_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adT:function adT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bhg:function bhg(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bu$=_.bI$=0},
dku:function dku(d){this.a=d},
dkv:function dkv(d){this.a=d},
dkr:function dkr(d,e){this.a=d
this.b=e},
dks:function dks(d){this.a=d},
dkt:function dkt(d){this.a=d},
dkw:function dkw(d){this.a=d},
dkx:function dkx(d){this.a=d},
dky:function dky(d){this.a=d},
dkz:function dkz(d){this.a=d},
dkA:function dkA(d){this.a=d},
dkB:function dkB(d){this.a=d},
dkC:function dkC(d){this.a=d},
dkD:function dkD(d){this.a=d},
dkE:function dkE(d){this.a=d},
G1:function G1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
W2:function W2(d){this.a=d},
aEz:function aEz(d,e,f,g,h,i,j){var _=this
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
_.aa$=j
_.c=_.a=null},
eog:function eog(d){this.a=d},
eo5:function eo5(d){this.a=d},
eo7:function eo7(){},
eo8:function eo8(){},
eob:function eob(){},
eoc:function eoc(d,e,f){this.a=d
this.b=e
this.c=f},
eod:function eod(d){this.a=d},
eoe:function eoe(d){this.a=d},
eo9:function eo9(){},
eoa:function eoa(d){this.a=d},
eoG:function eoG(d){this.a=d},
eof:function eof(){},
eo1:function eo1(d){this.a=d},
eoi:function eoi(d){this.a=d},
eoh:function eoh(d){this.a=d},
eok:function eok(){},
eoj:function eoj(d,e){this.a=d
this.b=e},
eo4:function eo4(){},
eo2:function eo2(d){this.a=d},
eo3:function eo3(d){this.a=d},
eoE:function eoE(d){this.a=d},
eoD:function eoD(d){this.a=d},
eoF:function eoF(d){this.a=d},
eou:function eou(d,e){this.a=d
this.b=e},
eoC:function eoC(d){this.a=d},
eoA:function eoA(d){this.a=d},
eoB:function eoB(d){this.a=d},
eoz:function eoz(d){this.a=d},
eoy:function eoy(d){this.a=d},
eov:function eov(d){this.a=d},
eow:function eow(d){this.a=d},
eox:function eox(d){this.a=d},
eo6:function eo6(){},
eoq:function eoq(d){this.a=d},
eor:function eor(d){this.a=d},
eop:function eop(d){this.a=d},
eos:function eos(d){this.a=d},
eoo:function eoo(d){this.a=d},
eot:function eot(d){this.a=d},
eon:function eon(d){this.a=d},
eom:function eom(d){this.a=d},
eol:function eol(d,e){this.a=d
this.b=e},
bhh:function bhh(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dkq:function dkq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aMi:function aMi(){},
blF:function blF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Q8:function Q8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Wh:function Wh(d){this.a=d},
bkM:function bkM(d,e,f,g,h,i,j,k){var _=this
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
_.bx$=j
_.aa$=k
_.c=_.a=null},
eAm:function eAm(d){this.a=d},
eAk:function eAk(d){this.a=d},
eAl:function eAl(){},
ezY:function ezY(){},
ezX:function ezX(){},
eA6:function eA6(d,e){this.a=d
this.b=e},
eA8:function eA8(d){this.a=d},
eAc:function eAc(d){this.a=d},
eA7:function eA7(d){this.a=d},
eAd:function eAd(d){this.a=d},
eAe:function eAe(d){this.a=d},
eAf:function eAf(d,e){this.a=d
this.b=e},
eA5:function eA5(d,e){this.a=d
this.b=e},
eAg:function eAg(d){this.a=d},
eA4:function eA4(d){this.a=d},
eAh:function eAh(d,e){this.a=d
this.b=e},
eA3:function eA3(d,e){this.a=d
this.b=e},
eAi:function eAi(d){this.a=d},
eA2:function eA2(d,e){this.a=d
this.b=e},
eAj:function eAj(d){this.a=d},
eA1:function eA1(d){this.a=d},
eA9:function eA9(d){this.a=d},
eA0:function eA0(d){this.a=d},
eAa:function eAa(d){this.a=d},
eA_:function eA_(d){this.a=d},
eAb:function eAb(d,e){this.a=d
this.b=e},
ezZ:function ezZ(d,e){this.a=d
this.b=e},
bs9:function bs9(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
Ws:function Ws(d){this.a=d},
aEP:function aEP(d,e,f,g){var _=this
_.d=d
_.e=$
_.f=e
_.r="bounce"
_.w=3
_.x=56
_.y=0
_.z=!0
_.Q=0
_.bx$=f
_.aa$=g
_.c=_.a=null},
eGv:function eGv(d,e){this.a=d
this.b=e},
eGw:function eGw(d,e,f){this.a=d
this.b=e
this.c=f},
eGx:function eGx(d){this.a=d},
eGu:function eGu(){},
eGy:function eGy(d,e){this.a=d
this.b=e},
eGt:function eGt(d,e){this.a=d
this.b=e},
eGz:function eGz(d,e){this.a=d
this.b=e},
eGs:function eGs(d,e){this.a=d
this.b=e},
eGA:function eGA(d){this.a=d},
eGr:function eGr(d){this.a=d},
eGB:function eGB(d,e){this.a=d
this.b=e},
eGq:function eGq(d,e){this.a=d
this.b=e},
eGC:function eGC(d){this.a=d},
eGD:function eGD(d){this.a=d},
eGp:function eGp(d,e){this.a=d
this.b=e},
aMr:function aMr(){},
aMw:function aMw(){},
hsR(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aF(0,e).gcH()*0.1
return new B.t((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h8F(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a4y(w,v,u,A.cW,B.T(x.N,x.y))},
hAt(d,e,f){var w=d.c,v=e===0?-1:1
return new B.t(w*f.a+v*C.h8G(d),d.d*f.b)},
h8G(d){return 42+(D.ma.ai(0,d.b)?(d.ch-1)*38:0)},
ed:function ed(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tB:function tB(d,e,f,g){var _=this
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
aaq:function aaq(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
abw:function abw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4y:function a4y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bN3:function bN3(){},
bNe:function bNe(d){this.a=d},
bN9:function bN9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bNf:function bNf(d){this.a=d},
bNg:function bNg(d){this.a=d},
bNi:function bNi(d){this.a=d},
bNj:function bNj(d){this.a=d},
bNh:function bNh(d){this.a=d},
bNk:function bNk(d,e,f){this.a=d
this.b=e
this.c=f},
bNl:function bNl(d){this.a=d},
bN5:function bN5(d){this.a=d},
bN6:function bN6(d){this.a=d},
bN4:function bN4(d){this.a=d},
bN7:function bN7(d,e,f){this.a=d
this.b=e
this.c=f},
bN8:function bN8(d){this.a=d},
bN2:function bN2(d){this.a=d},
bNm:function bNm(d,e){this.a=d
this.b=e},
bNa:function bNa(d,e){this.a=d
this.b=e},
bNd:function bNd(d){this.a=d},
bNc:function bNc(d){this.a=d},
bNb:function bNb(d){this.a=d},
aiN:function aiN(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bHv:function bHv(){},
bHw:function bHw(){},
mI:function mI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cnY:function cnY(d){this.a=d},
icz(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.fKc(),c9=new C.fKe(),d0=new C.fKf(),d1=new C.fKd(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aD(w,d1.$3(new B.a5(w.a,w.b,w.c,w.d),A.bN,A.bL))
d3.br(D.eeU,D.ebZ,c9.$2(A.dM,1.4))
d3.br(D.ebH,D.ebG,c9.$2(A.bs,2.4))
d3.br(D.ebI,W.aI2,c9.$2(A.bs,2.4))
if(c7){d2=c8.$1(A.fi.j(0.5))
d2.z=A.RO
d3.ae(D.ebs,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.t(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aD(d0.$4(-22,-26,44,50),d1.$3(D.aO1,A.aP,A.cr))
d3.ae(A.cH,16,c8.$1(A.bs))
d3.ae(A.cH,13,c8.$1(c7?A.aR.j(0.85):A.M))
if(c7){d2=d3.a
J.bq(d2.save())
d2.translate(0,4)
d3.j_(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.ae,3).H()
d2.drawLine.apply(d2,[0,0,s*11,t*11,r])
r.delete()}d2.restore()
for(t=d5*0.8,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=Math.sin(v*2+d5)
r=c8.$1(A.c.j(0.8*(1-u))).H()
d2.drawCircle(s*9,4-u*12,1.6+u*2,r)
r.delete()}}d3.ae(D.eeM,2.4,c8.$1(c7?A.be:A.al))
d3.ae(D.efA,2.4,c8.$1(A.al))
return!0
case"blender":d3.aD(d0.$5(-14,14,28,12,4),c8.$1(A.e5))
d2=$.V().r
t=x.v
q=new B.aI(d2,A.ai,c6,c6,B.a([],t))
q.D(new B.b0(-16,-26))
q.D(new B.ap(16,-26))
q.D(new B.ap(12,14))
q.D(new B.ap(-12,14))
q.D(new B.bv())
d3.aJ(q,c8.$1(A.fi.j(0.35)))
if(c7){d2=new B.aI(d2,A.ai,c6,c6,B.a([],t))
d2.D(new B.b0(-14,-10))
d2.D(new B.ap(14,-10))
d2.D(new B.ap(12,14))
d2.D(new B.ap(-12,14))
d2.D(new B.bv())
d3.aJ(d2,c8.$1(A.aw.j(0.7)))}d3.aJ(q,c9.$2(A.ae,1.6))
d2=d3.a
J.bq(d2.save())
d2.translate(0,10)
d3.j_(0,d4.y)
d3.br(D.a6q,D.aIo,c9.$2(A.bO,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.F(s+v*0.33,1)
r=c8.$1(A.f3).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aD(d0.$5(-10,-4,20,10,4),c8.$1(A.aJ))
d3.ae(A.i0,3,c8.$1(c7?A.be:A.al))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a47[m]
r=c9.$2(A.bs,3).H()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.bq(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).H()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=B.bN(A.J,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).H()
d2.drawOval(B.bQ(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new B.aI($.V().r,A.ai,c6,c6,B.a([],x.v))
w.D(new B.b0(-24,-12))
w.D(new B.ap(10,-12))
w.D(new B.ap(10,2))
w.D(new B.ap(-2,2))
w.D(new B.ap(-6,22))
w.D(new B.ap(-16,22))
w.D(new B.ap(-14,2))
w.D(new B.ap(-24,2))
w.D(new B.bv())
d3.aJ(w,d1.$3(D.eUQ,A.aT,A.d9))
d3.aU(D.eU0,c8.$1(A.dv))
d2=d3.a
J.bq(d2.save())
d2.translate(18,-5)
d3.j_(0,d4.y*2)
d3.br(A.J,D.ebR,c9.$2(A.bO,2.4))
d3.br(A.a6n,D.ebQ,c9.$2(A.ia,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dR.j(1-u)).H()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.E(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aI($.V().r,A.ai,c6,c6,B.a([],x.v))
d2.D(new B.b0(16,-6))
d2.D(new B.ap(52,-26))
d2.D(new B.ap(52,18))
d2.D(new B.ap(16,4))
d2.D(new B.bv())
d3.aJ(d2,c8.$1(A.bM.j(0.35*v)))}d3.aD(d0.$5(-26,-6,30,12,3),d1.$3(D.eUW,A.bl,A.cp))
k=new B.aI($.V().r,A.ai,c6,c6,B.a([],x.v))
k.D(new B.b0(4,-6))
k.D(new B.ap(18,-12))
k.D(new B.ap(18,12))
k.D(new B.ap(4,6))
k.D(new B.bv())
d3.aJ(k,c8.$1(A.e5))
d3.ae(D.ebV,7,c8.$1(c7?A.c:A.dv))
return!0
case"neon":d3.aD(d0.$5(-30,-14,60,28,6),c8.$1(I.n9))
if(c7)j=d4.ax>0.5||A.o.F(A.k.bm(d5*17),3)!==0
else j=!1
i=j?A.c8:D.blC
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c8.j(0.35))
t.z=A.mQ
d3.aD(d2,t)}d3.aD(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.ef_,i,17)
return!0
case"microwave":d3.aD(d0.$4(-30,-18,60,38),d1.$3(D.eV1,A.bO,A.bl))
d2=d0.$5(-26,-14,38,30,3)
d3.aD(d2,c8.$1(c7?A.bM.j(0.75):A.au))
if(c7){d2=d3.a
J.bq(d2.save())
d2.translate(-7,8)
d3.j_(0,d4.y*0.5)
d3.dX(B.bN(A.J,7,22),c8.$1(A.d9))
d2.restore()}d3.aD(d0.$5(15,-14,12,12,2),c8.$1(I.n9))
if(c7)d6.$5(d3,"0:"+A.a.aZ(A.o.u(59-A.o.F(A.k.bm(d5),60)),2,"0"),D.ebW,A.bm,6.5)
d3.ae(D.ecb,4,c8.$1(A.dv))
return!0
case"doorbell":d3.aD(d0.$5(-16,-26,32,52,8),c8.$1(A.aM))
d3.ae(A.IA,10,c8.$1(c7?A.bI:A.bs))
d2=d3.a
J.bq(d2.save())
d2.translate(0,-8)
d3.j_(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.efE,A.c,16)
d2.restore()
d3.ae(A.km,6,c8.$1(A.d0))
d3.ae(A.km,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=B.bX(A.IA,14+v*6+A.k.F(t,6))
r=c9.$2(A.bI.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[B.bQ(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.br(D.eeZ,D.efy,c9.$2(A.bs,4))
d2=d3.a
J.bq(d2.save())
d3.j_(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aD(d0.$5(-24,-14,46,22,5),d1.$3(D.eUR,A.bO,A.al))
d3.ae(D.aI6,8,c8.$1(A.au))
d3.ae(D.aI6,4.5,c8.$1(c7?A.aR:A.cp))
d3.ae(D.eeX,2.2,c8.$1(c7&&A.o.F(A.k.bm(d5*1.6),2)===0?A.aw:A.kz))
d2.restore()
if(c7)d6.$5(d3,"REC",D.ef7,A.aw,9)
return!0
case"console":d3.aD(d0.$5(-28,-22,56,44,8),d1.$3(D.eUZ,A.j5,A.fe))
d3.aD(d0.$5(-20,-17,40,22,3),c8.$1(A.dL))
if(c7){d2=d5*2.3
d3.ae(new B.t(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aU(new B.a5(-18,t,-15.6,t+8),c8.$1(A.bm))
d2=-9+Math.sin(d2-0.4)*6
d3.aU(new B.a5(15.6,d2,18,d2+8),c8.$1(A.c8))}d3.ae(D.eeS,4,c8.$1(A.aW))
d3.ae(D.ebS,2.4,c8.$1(A.aw))
d3.ae(D.ec8,2.4,c8.$1(A.be))
return!0
case"heartmon":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(A.au))
d3.aD(d0.$5(-26,-18,52,28,3),c8.$1(A.dL))
if(c7){d2=$.V()
t=B.a([],x.v)
h=new B.aI(d2.r,A.ai,c6,c6,t)
for(d2=d5*0.5,l=-25;l<=25;++l){u=A.k.F((l+25)/50-d2,1)
if(u<0.1)g=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)g=0.6
else{s=u<0.2?-0.4:0
g=s}f=-4+g*11
if(l===-25){s=new B.b0(l,f)
t.push(s)
p=h.f
if(p!=null)s.by(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new B.ap(l,f)
t.push(s)
p=h.f
if(p!=null)s.by(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aJ(h,c9.$2(A.bm,1.8))
d6.$5(d3,"72",D.ebT,A.ha,11)
d2=d5*9
d6.$5(d3,"\u2665",D.efc,A.ha.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ae(D.ef1,3,c8.$1(c7?A.be:A.bs))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aD(d2,c8.$1(A.cC.j(c7?0.5:0.3)))
d3.aD(d0.$5(-26,-20,52,40,4),c9.$2(A.ae,1.6))
d3.aU(D.eUT,c8.$1(F.tv))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bq(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.p_(0,-1,1)
d3.dX(B.bN(A.J,8,14),c8.$1(A.cZ))
d2=new B.aI($.V().r,A.ai,c6,c6,B.a([],x.v))
d2.D(new B.b0(-6,0))
d2.D(new B.ap(-12,-4))
d2.D(new B.ap(-12,4))
d2.D(new B.bv())
d3.aJ(d2,c8.$1(A.ca))
d3.ae(D.ecN,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.F(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.F(v,2)
r=c9.$2(A.ae,1).H()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.V().r
t=x.v
e=new B.aI(d2,A.ai,c6,c6,B.a([],t))
e.D(new B.b0(-9,22))
e.D(new B.ap(-5,-16))
e.D(new B.ap(5,-16))
e.D(new B.ap(9,22))
e.D(new B.bv())
d3.aJ(e,d1.$3(D.eVs,A.c,A.bx))
d3.aU(D.eVp,c8.$1(c7?A.dR:A.bs))
s=new B.aI(d2,A.ai,c6,c6,B.a([],t))
s.D(new B.b0(-7,-22))
s.D(new B.ap(0,-29))
s.D(new B.ap(7,-22))
s.D(new B.bv())
d3.aJ(s,c8.$1(A.ev))
if(c7){d=Math.sin(d4.y*0.3)
d2=new B.aI(d2,A.ai,c6,c6,B.a([],t))
d2.D(new B.b0(0,-19))
t=d*34
d2.D(new B.ap(t,-26))
d2.D(new B.ap(t,-12))
d2.D(new B.bv())
d3.aJ(d2,c8.$1(A.dR.j(0.45)))
d2=c8.$1(A.dR.j(0.35))
d2.z=A.RO
d3.ae(D.ebt,14,d2)}return!0
case"discoball":d3.br(D.ebw,L.aHZ,c9.$2(A.dv,1.4))
d3.ae(A.J,16,d1.$3(D.eUA,A.aP,A.al))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.dp,0.7).H()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.dp,0.7).H()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.F(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.dc9[A.o.F(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aD(d0.$5(-14,-4,28,24,5),d1.$3(D.eUx,A.cr,A.al))
d3.aD(d0.$5(-12,-26,24,20,5),d1.$3(D.eUq,A.aM,A.bL))
d3.br(G.aI_,D.ebx,c9.$2(A.bs,1.6))
d3.ae(D.eby,2.2,c8.$1(c7?A.aw:A.bs))
a1=c7&&A.k.F(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a49[m]
if(c7)t=a1?A.bc:A.f5
else t=A.cp
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bq(d2.save())
d2.translate(14,0)
d3.j_(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.br(A.J,D.a6j,c9.$2(A.bL,4))
d2.restore()
d3.br(D.eeI,D.ef5,c9.$2(A.bL,4))
d3.aU(D.eVo,c8.$1(c7?A.bc.j(0.7):A.aJ))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.az1[m]+1,d2,10,14,2)
p=B.ar(A.bM,A.d9,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(B.eL(s),r)
r.delete()}d3.aD(d0.$5(-24,-6,48,26,8),d1.$3(D.eUS,A.bO,A.bl))
for(m=0;m<2;++m){l=D.az1[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fu:A.au).H()
t.drawRRect(B.eL(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cZ.j(0.5))
s.z=H.ph
r=s.H()
t.drawRRect(B.eL(d2),r)
r.delete()}}d3.br(D.ecg,D.ecz,c9.$2(A.au,3))
return!0
case"ledstrip":d3.aD(d0.$5(-34,-4,68,10,4),c8.$1(A.cp))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.F(t+v*40,360)
i=c7?new N.vN(1,a3,0.8,1).m1():A.e5
if(c7){s=c8.$1(i.j(0.45))
s.z=H.ph
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aD(d0.$5(-40,-2,6,6,1),c8.$1(A.dv))
return!0
case"pump":d3.aD(d0.$5(-16,-2,32,22,6),d1.$3(D.eUG,A.cC,A.LB))
d3.ae(D.efd,8,c8.$1(A.r1))
d2=d3.a
J.bq(d2.save())
d2.translate(-2,9)
d3.j_(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.fi,2.4).H()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new B.aI($.V().r,A.ai,c6,c6,B.a([],x.v))
t.D(new B.b0(16,6))
t.D(new B.ap(26,6))
t.D(new B.ap(26,-20))
t.D(new B.ap(10,-20))
d3.aJ(t,c9.$2(A.bL,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.F(t+v*0.2,1)
r=c8.$1(A.hn).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ae(D.edo,3.2,c8.$1(A.hn.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bq(d2.save())
d3.j_(0,-0.15)
d3.aD(d0.$5(-26,-14,40,22,10),d1.$3(D.eUU,A.i8,A.ty))
d3.aD(d0.$5(14,-10,12,14,3),c8.$1(A.cp))
d3.aD(d0.$5(-10,6,12,22,4),c8.$1(A.e5))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cZ.j(0.4))
d2.z=H.ph
d3.ae(D.eca,8,d2)}return!0
case"headphones":d3.e2(B.bN(A.dz,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bs,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=F.Rd[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new B.a5(s,0,s+14,20),A.by,A.oP).H()
d2.drawRRect(B.eL(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=B.bX(new B.t(l,10),10+v*5+A.k.F(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eF.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[B.bQ(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new B.t(-4,-8-A.k.F(d5*14,8)),A.ku,12)
return!0
case"smartwatch":d3.aD(d0.$5(-8,-30,16,14,3),c8.$1(A.cp))
d3.aD(d0.$5(-8,14,16,14,3),c8.$1(A.cp))
d3.aD(d0.$5(-14,-17,28,32,8),d1.$3(D.eUv,A.dv,A.e5))
d3.aD(d0.$5(-11,-14,22,26,6),c8.$1(A.dL))
if(c7){a4=new B.U(Date.now(),0,!1)
d6.$5(d3,A.a.aZ(A.o.u(B.dl(a4)),2,"0")+":"+A.a.aZ(A.o.u(B.h3(a4)),2,"0"),D.ebB,A.bm,9.5)
g=(Math.sin(d5*9)+1)/2
d2=B.ar(A.EI,A.ha,g)
d2.toString
d6.$5(d3,"\u2665",new B.t(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.F(A.k.bm(d5*2),6)),A.dz,A.c,7)}return!0
case"tablet":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(I.n9))
d3.aD(d0.$5(-30,-22,60,44,6),c9.$2(A.bL,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bq(d2.save())
d2.clipRRect(B.eL(a5),$.oR(),!0)
d2.translate(-27,-19)
E.Lo(d3,D.f0e,d5,c6)
d2.restore()}else d3.aD(a5,c8.$1(D.vI))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aD(a6,d1.$3(new B.a5(a6.a,a6.b,a6.c,a6.d),A.dK,A.d8))
d3.aD(a6,c9.$2(A.aZ,1.2))
d3.ae(D.aIv,9,c8.$1(A.au))
d3.ae(D.aIv,6,c9.$2(A.d9,2))
d3.aD(d0.$5(4,-2,14,10,2),c8.$1(A.au))
d3.aD(d0.$5(-22,-19,44,12,2),c8.$1(A.dL))
d2=A.k.ac(d4.db,1)
t=A.k.ac(c7?d4.dx:d4.e,1)
s=c7?A.bm:A.al
d6.$5(d3,d2+"\u2192"+t+"V",D.edx,s,8.2)
d3.ae(D.ec_,2.4,c8.$1(c7?A.be:A.aJ))
d6.$5(d3,"IN",D.ef6,A.ae,6)
d6.$5(d3,"OUT",D.edg,A.ae,6)
return!0
case"regulator":a7=c7?A.k.E(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ar(A.bL,A.aw,a7)
t.toString
d3.aD(d2,c8.$1(t))
d3.ae(G.a6h,3,c8.$1(A.aJ))
d3.aD(d0.$5(-12,-4,24,18,3),d1.$3(D.eUr,A.e5,A.hO))
d6.$5(d3,"7805",D.a6q,A.ae,8)
for(d2=d3.a,m=0;m<3;++m){t=D.dii[m]-1
r=c8.$1(A.e2).H()
d2.drawRect(B.bQ(new B.a5(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.F(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.efB,A.bk,9)
return!0
case"diode":d3.br(D.aIz,D.aIi,c9.$2(A.e2,2.4))
d3.aD(d0.$5(-14,-7,28,14,6),c8.$1(A.aE.j(0.85)))
d3.aU(D.eUc,c8.$1(A.bk))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dR.j(0.4))
t.z=A.lI
d3.aD(d2,t)}d2=new B.aI($.V().r,A.ai,c6,c6,B.a([],x.v))
d2.D(new B.b0(-8,-4))
d2.D(new B.ap(-8,4))
d2.D(new B.ap(-1,0))
d2.D(new B.bv())
d3.aJ(d2,c8.$1(A.aW))
d6.$5(d3,"one way",D.eeV,A.aB,8)
return!0
case"ldr":d3.br(D.aIz,D.a6q,c9.$2(A.e2,2.4))
d3.br(D.aIo,D.aIi,c9.$2(A.e2,2.4))
d3.ae(A.J,12,c8.$1(A.d9))
d3.ae(A.J,12,c9.$2(A.tH,1.6))
d2=$.V()
t=B.a([],x.v)
a8=new B.aI(d2.r,A.ai,c6,c6,t)
a8.D(new B.b0(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.ap(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.by(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aJ(a8,c9.$2(A.bM,1.4))
d2=B.ar(A.bs,A.dR,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.t(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.eeJ,A.ae,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.eg
break A}if("sonytv"===d2){t=A.qX
break A}if("appletv"===d2){t=A.e2
break A}t=F.EK
break A}a9=d2==="lgtv"||d2==="appletv"
d3.aD(d0.$5(-36,-24,72,a9?42:44,6),c8.$1(t))
t=a9?-35:-33
s=a9?-23:-21
p=a9?70:66
a5=d0.$5(t,s,p,a9?40:38,3)
t=a5.a
s=a5.b
if(c7){p=d3.a
J.bq(p.save())
p.clipRRect(B.eL(a5),$.oR(),!0)
p.translate(t,s)
E.h4M(d3,new B.au(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ae(D.ecC,1.6,c8.$1(A.bm))}else{d3.aD(a5,c8.$1(D.vI))
p=new B.aI($.V().r,A.ai,c6,c6,B.a([],x.v))
p.D(new B.b0(t,s))
p.D(new B.ap(t+24,s))
p.D(new B.ap(t,s+22))
p.D(new B.bv())
d3.aJ(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aD(d0.$5(-22,19,44,3,1.5),c8.$1(A.dv))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=I.je[m]
s=$.V()
p=B.a([],t)
s=new B.aI(s.r,A.ai,c6,c6,p)
p.push(new B.b0(l*30,20))
p.push(new B.ap(l*22,20))
p.push(new B.ap(l*26,26))
p.push(new B.bv())
r=c8.$1(A.dv).H()
p=s.gbB().a.snapshot()
d2.drawPath((s.e=new B.cv(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.eea,A.bO,5.5)
break
case"appletv":d2=new B.aI($.V().r,A.ai,c6,c6,B.a([],x.v))
d2.D(new B.b0(-8,18))
d2.D(new B.ap(8,18))
d2.D(new B.ap(12,25))
d2.D(new B.ap(-12,25))
d2.D(new B.bv())
d3.aJ(d2,c8.$1(D.XF))
d6.$5(d3,"Apple TV",D.edy,A.bs,4.8)
break
default:d3.aD(d0.$5(-34,19,68,7,3),c8.$1(D.bk_))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dp,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.efx,F.tv,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.ma.h(0,d2)
b1=b0.b===D.wH
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
d3.aD(w,d1.$3(new B.a5(p,o,b4,b5),b7,b6))
a5=d0.$5(t+2,s,b2-4,b3-4,3.5)
if(c7){t=d3.a
J.bq(t.save())
t.clipRRect(B.eL(a5),$.oR(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.Lo(d3,new B.au(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aD(a5,c8.$1(D.vI))
if(b1){t=a5.b
s=a5.d
d3.br(new B.t(0,t),new B.t(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aD(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ae(new B.t(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aD(d0.$5(-17,-28,34,52,4),c8.$1(A.e5))
d3.aD(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.efH,A.au,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.F(v,4)===3?14:22
r=c8.$1(A.bl).H()
d2.drawRect(B.bQ(new B.a5(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ae(A.aHY,1.6,c8.$1(A.au))}return!0
case"laptop":d3.aD(d0.$5(-30,-28,60,42,4),d1.$3(D.eV2,A.cr,A.bl))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bq(d2.save())
d2.clipRRect(B.eL(b8),$.oR(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.Lo(d3,new B.au(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aD(b8,c8.$1(D.vI))
d2=new B.aI($.V().r,A.ai,c6,c6,B.a([],x.v))
d2.D(new B.b0(-38,16))
d2.D(new B.ap(38,16))
d2.D(new B.ap(34,21))
d2.D(new B.ap(-34,21))
d2.D(new B.bv())
d3.aJ(d2,c8.$1(D.XF))
d3.aD(d0.$5(-7,16,14,2,1),c8.$1(A.bl))
return!0
case"imac":d3.aD(d0.$5(-32,-28,64,46,5),d1.$3(D.eV6,A.bN,A.cr))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bq(d2.save())
d2.clipRRect(B.eL(b9),$.oR(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.Lo(d3,new B.au(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aD(b9,c8.$1(D.vI))
d3.ae(D.aHT,2,c8.$1(A.bL))
d2=new B.aI($.V().r,A.ai,c6,c6,B.a([],x.v))
d2.D(new B.b0(-6,18))
d2.D(new B.ap(6,18))
d2.D(new B.ap(10,26))
d2.D(new B.ap(-10,26))
d2.D(new B.bv())
d3.aJ(d2,c8.$1(D.XF))
return!0
case"monitor":d3.aD(d0.$5(-34,-28,68,40,3),c8.$1(A.eg))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.bq(d2.save())
d2.clipRRect(B.eL(c0),$.oR(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.Lo(d3,new B.au(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aD(c0,c8.$1(D.vI))
d3.aU(D.eVd,c8.$1(A.bl))
d3.aD(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dv))
return!0
case"projector":if(c7){d2=new B.aI($.V().r,A.ai,c6,c6,B.a([],x.v))
d2.D(new B.b0(14,4))
d2.D(new B.ap(-32,-42))
d2.D(new B.ap(34,-42))
d2.D(new B.bv())
d3.aJ(d2,c8.$1(A.dR.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bq(d2.save())
d2.clipRRect(B.eL(c1),$.oR(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.Lo(d3,new B.au(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aD(d0.$5(-26,-4,52,24,6),d1.$3(D.eUV,A.ip,A.dv))
d3.ae(D.aI4,7,c8.$1(A.au))
d3.ae(D.aI4,4,c8.$1(c7?A.dR:A.cp))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dp,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aD(d0.$5(-34,-10,68,32,12),c8.$1(A.au))
c2=d0.$5(-30,-20,60,28,8)
d3.aD(c2,c8.$1(I.n9))
d3.aD(c2,c9.$2(A.bs,1.2))
if(c7){c3=new B.aI($.V().r,A.ai,c6,c6,B.a([],x.v))
c3.D(new B.b0(-26,4))
c3.D(new B.c8(-10,-14+Math.sin(d5)*3,6,-6))
c3.D(new B.ap(22,-16))
d3.aJ(c3,c9.$2(A.aR,2.2))
d2=A.k.F(d5*6,48)
d3.ae(new B.t(-26+d2,4-d2*0.1),2.4,c8.$1(A.bm))
d6.$5(d3,""+(88+A.o.F(A.k.bm(d5*2),5)),G.aIn,A.c,10)
d6.$5(d3,"km/h",D.edm,A.aB,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aD(c4,d1.$3(new B.a5(c4.a,c4.b,c4.c,c4.d),A.dv,A.e5))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.bq(d2.save())
d2.clipRRect(B.eL(c5),$.oR(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.Lo(d3,new B.au(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.by.j(0.2))
d2.z=A.mQ
d3.ae(A.J,26,d2)}else d3.aD(c5,c8.$1(A.M))
d3.br(D.efh,D.efm,c9.$2(A.bl,4))
d3.br(D.ecE,D.ecQ,c9.$2(A.bl,4))
return!0}return!1},
fKc:function fKc(){},
fKe:function fKe(){},
fKf:function fKf(){},
fKd:function fKd(){},
h7u(d,e,f,g){return new C.aiL(d,g,f,e)},
FN(d,e,f){return new C.bb7(d,e,f)},
aiL:function aiL(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aiM:function aiM(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.iJ$=h
_.oE$=i
_.nf$=j
_.iK$=k
_.bx$=l
_.aa$=m
_.c=_.a=null},
bH9:function bH9(d,e){this.a=d
this.b=e},
bHa:function bHa(d){this.a=d},
bH8:function bH8(d){this.a=d},
bHb:function bHb(){},
bHc:function bHc(d){this.a=d},
bHd:function bHd(d,e,f){this.a=d
this.b=e
this.c=f},
bH7:function bH7(d,e){this.a=d
this.b=e},
bH5:function bH5(d,e){this.a=d
this.b=e},
bH6:function bH6(d,e,f){this.a=d
this.b=e
this.c=f},
bH_:function bH_(d,e){this.a=d
this.b=e},
bH0:function bH0(){},
bH1:function bH1(d,e){this.a=d
this.b=e},
bH2:function bH2(d,e){this.a=d
this.b=e},
bH3:function bH3(d){this.a=d},
bH4:function bH4(d){this.a=d},
bHs:function bHs(d){this.a=d},
bHt:function bHt(){},
bGD:function bGD(){},
bHu:function bHu(d,e){this.a=d
this.b=e},
bHr:function bHr(d,e,f){this.a=d
this.b=e
this.c=f},
bHm:function bHm(d){this.a=d},
bHj:function bHj(d,e,f){this.a=d
this.b=e
this.c=f},
bHk:function bHk(d,e){this.a=d
this.b=e},
bHn:function bHn(d){this.a=d},
bHh:function bHh(d,e){this.a=d
this.b=e},
bHi:function bHi(d,e){this.a=d
this.b=e},
bHl:function bHl(d){this.a=d},
bHo:function bHo(d){this.a=d},
bHf:function bHf(d,e){this.a=d
this.b=e},
bHg:function bHg(d,e){this.a=d
this.b=e},
bHp:function bHp(d){this.a=d},
bHe:function bHe(d){this.a=d},
bHq:function bHq(d){this.a=d},
bGE:function bGE(d,e){this.a=d
this.b=e},
bGX:function bGX(d,e){this.a=d
this.b=e},
bGZ:function bGZ(d,e){this.a=d
this.b=e},
bGY:function bGY(d,e){this.a=d
this.b=e},
bGK:function bGK(d,e){this.a=d
this.b=e},
bGL:function bGL(d){this.a=d},
bGJ:function bGJ(d){this.a=d},
bGM:function bGM(d,e,f){this.a=d
this.b=e
this.c=f},
bGI:function bGI(d,e){this.a=d
this.b=e},
bGP:function bGP(d,e){this.a=d
this.b=e},
bGQ:function bGQ(d,e){this.a=d
this.b=e},
bGR:function bGR(d,e){this.a=d
this.b=e},
bGS:function bGS(d,e,f){this.a=d
this.b=e
this.c=f},
bGH:function bGH(d,e){this.a=d
this.b=e},
bGT:function bGT(d,e,f){this.a=d
this.b=e
this.c=f},
bGG:function bGG(d,e){this.a=d
this.b=e},
bGU:function bGU(d,e,f){this.a=d
this.b=e
this.c=f},
bGF:function bGF(d,e){this.a=d
this.b=e},
bGV:function bGV(d){this.a=d},
bGW:function bGW(d){this.a=d},
bGN:function bGN(d){this.a=d},
bGO:function bGO(d){this.a=d},
bb7:function bb7(d,e,f){this.a=d
this.b=e
this.c=f},
fhZ:function fhZ(){},
fi_:function fi_(){},
fi0:function fi0(){},
fhM:function fhM(){},
fi1:function fi1(){},
fhL:function fhL(){},
fi2:function fi2(){},
fhQ:function fhQ(){},
fhK:function fhK(){},
fhR:function fhR(){},
fhJ:function fhJ(){},
fhS:function fhS(){},
fhI:function fhI(){},
fhT:function fhT(){},
fhG:function fhG(){},
fhH:function fhH(){},
fhU:function fhU(){},
fhE:function fhE(){},
fhF:function fhF(){},
fhV:function fhV(){},
fhD:function fhD(){},
Vg:function Vg(d){this.a=d},
aDA:function aDA(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dUl:function dUl(d,e){this.a=d
this.b=e},
dUu:function dUu(d){this.a=d},
dUv:function dUv(){},
dUw:function dUw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUx:function dUx(){},
dUk:function dUk(d){this.a=d},
dUj:function dUj(d,e,f){this.a=d
this.b=e
this.c=f},
dUi:function dUi(d,e){this.a=d
this.b=e},
dUg:function dUg(d){this.a=d},
dUh:function dUh(){},
dUt:function dUt(d){this.a=d},
dUs:function dUs(d){this.a=d},
dUq:function dUq(d,e){this.a=d
this.b=e},
dUo:function dUo(d){this.a=d},
dUp:function dUp(){},
dUr:function dUr(d,e,f){this.a=d
this.b=e
this.c=f},
dUm:function dUm(d,e){this.a=d
this.b=e},
dUn:function dUn(){},
dUz:function dUz(d){this.a=d},
dUA:function dUA(d,e){this.a=d
this.b=e},
dUy:function dUy(){},
dUB:function dUB(d,e){this.a=d
this.b=e},
dUC:function dUC(d){this.a=d},
dUD:function dUD(d){this.a=d},
axD:function axD(d,e){this.c=d
this.a=e},
b9k:function b9k(d,e){var _=this
_.d=$
_.bx$=d
_.aa$=e
_.c=_.a=null},
cF1:function cF1(d){this.a=d},
b9j:function b9j(d,e){this.b=d
this.a=e},
cF0:function cF0(d){this.a=d},
axW:function axW(){},
axX:function axX(){},
aJY:function aJY(){},
bxh:function bxh(){},
icB(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bX(A.uS,23)
$.V()
b8=B.K()
b8.r=A.au.gp(0)
b9.ae(A.uS,25,b8)
b8=B.K()
b8.sar(D.enO.aA(0,v))
b9.ae(A.uS,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
o.r=A.bk.gp(0)
o.c=A.o.F(u,5)===0?1.8:1
n=o.H()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.E(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.K()
r.r=A.bx.gp(0)
r.c=2
r.d=A.bG
b9.br(A.uS,new B.t(b8*18,s*18-2),r)
r=B.K()
r.r=A.bk.gp(0)
b9.ae(A.uS,3,r)
c2.$5(b9,w?"V":"A",D.efp,A.bk,12)
c2.$5(b9,w?A.k.ac(m,1)+" V":""+A.k.V(m*1000)+" mA",D.eeP,A.au,9.5)
return!0
case"fan":b8=B.bz(D.eUn,A.hM)
$.V()
s=B.K()
s.r=A.bs.gp(0)
b9.aD(b8,s)
s=B.K()
s.r=A.al.gp(0)
b9.aU(D.eVe,s)
s=B.K()
s.r=A.M.j(0.6).gp(0)
b9.ae(G.uT,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bq(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bN(A.aHX,18,10)
r=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
r.r=A.hn.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(B.bQ(s),n)
n.delete()
b8.restore()}b8=B.K()
b8.r=A.bn.gp(0)
b9.ae(G.uT,4,b8)
b8=B.K()
b8.b=A.ac
b8.c=2
b8.r=A.cr.gp(0)
b9.ae(G.uT,22,b8)
b8=B.K()
b8.b=A.ac
b8.c=0.8
b8.r=A.jK.gp(0)
b9.ae(G.uT,14,b8)
return!0
case"speaker":l=B.bz(D.aO1,A.uY)
$.V()
b8=B.K()
b8.sar(D.apP.aA(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aD(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=B.K()
b8.sar(D.eo9.aA(0,B.bX(A.cv,15)))
b9.ae(A.cv,14+k,b8)
b8=B.K()
b8.r=A.dv.gp(0)
b9.ae(A.cv,5,b8)
b8=B.K()
b8.r=A.bl.gp(0)
b9.ae(G.a6g,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=B.bX(D.ecf,6+u*6+A.k.F(b8,6))
q=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
q.b=A.ac
q.c=1.8
q.r=A.c8.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[B.bQ(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=B.bz(D.eV5,A.uY)
$.V()
b8=B.K()
b8.sar(D.c0W.aA(0,new B.a5(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=B.bz(D.aO3,A.iC)
s=B.K()
s.r=A.hO.gp(0)
b9.aD(b8,s)
if(b7){i=new B.U(Date.now(),0,!1)
h=B.F6(i)<500?":":" "
g=A.a.aZ(A.o.u(B.dl(i)),2,"0")
f=A.a.aZ(A.o.u(B.h3(i)),2,"0")
b8=B.K()
b8.r=A.bm.j(0.12).gp(0)
b9.aU(D.aO3,b8)
c2.$5(b9,g+h+f,D.efa,A.bm,21)}b8=B.K()
b8.r=A.cr.gp(0)
b9.ae(D.ef8,2.4,b8)
b8=B.K()
b8.r=A.cr.gp(0)
b9.ae(D.ecj,2.4,b8)
return!0
case"calculator":j=B.bz(D.eUL,A.i2)
$.V()
b8=B.K()
b8.sar(D.c0G.aA(0,new B.a5(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=B.bz(D.eUE,A.hi)
s=B.K()
s.r=(b7?A.XR:D.bma).gp(0)
b9.aD(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eeO,A.WF,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=B.bz(new B.a5(q,s,q+6,r),A.T8)
$.V()
p=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
p.r=(d===3?A.ca:A.bO).gp(0)
n=p.H()
b8.drawRRect(B.eL(q),n)
n.delete()}return!0
case"phone":j=B.bz(D.eUz,A.i2)
$.V()
b8=B.K()
b8.r=I.n9.gp(0)
b9.aD(j,b8)
b8=B.K()
b8.b=A.ac
b8.c=1.9
b8.r=D.ahl.gp(0)
b9.aD(j,b8)
a0=B.bz(D.eUp,A.hM)
if(b7){b8=B.K()
b8.sar(D.c2e.aA(0,new B.a5(a0.a,a0.b,a0.c,a0.d)))
b9.aD(a0,b8)
b8=b9.a
J.bq(b8.save())
b8.clipRRect(B.eL(a0),$.oR(),!0)
b8.translate(-12,-25)
E.Lo(b9,D.f_R,c1,b6)
b8.restore()
a1=A.k.F(c1*0.12,1)
b8=B.bz(D.eUm,A.hi)
s=B.K()
s.r=A.aW.gp(0)
b9.aD(b8,s)
s=B.K()
s.r=A.bm.gp(0)
b9.aU(new B.a5(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.edR,A.c,6)}else{b8=B.K()
b8.r=D.vI.gp(0)
b9.aD(a0,b8)}b8=B.bz(D.eVt,D.eoi)
s=B.K()
s.r=A.w.gp(0)
b9.aD(b8,s)
return!0
case"router":j=B.bz(D.eV4,A.rR)
$.V()
b8=B.K()
b8.sar(D.c1c.aA(0,new B.a5(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=F.Rd[a2]
s=a3<0?-4:4
r=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
r.r=A.cp.gp(0)
r.c=4
r.d=A.bG
n=r.H()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.F(A.k.bm(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
s.r=(a4?A.be:A.aJ).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=B.bX(G.uT,8+u*6+A.k.F(s,6))
q=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
q.b=A.ac
q.c=1.8
q.r=A.iK.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[B.bQ(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bz(D.eUK,A.hM)
s=$.V()
r=B.K()
r.r=A.e5.gp(0)
b9.aD(b8,r)
if(b7){b8=B.K()
b8.r=A.aw.j(0.5*a5).gp(0)
b8.z=A.zs
b9.ae(A.uS,34,b8)}a6=new B.aI(s.r,A.ai,b6,b6,B.a([],x.v))
a6.D(new B.b0(-16,12))
a6.D(new B.ap(-16,-2))
a6.D(new B.c8(0,-30,16,-2))
a6.D(new B.ap(16,12))
a6.D(new B.bv())
b8=B.K()
b8.r=B.ar(A.ev,D.bdH,a5).gp(0)
b9.aJ(a6,b8)
b8=B.K()
b8.b=A.ac
b8.c=1.4
b8.r=A.bU.gp(0)
b9.aJ(a6,b8)
if(b7){b8=b9.a
J.bq(b8.save())
b8.translate(0,-2)
b9.j_(0,c1*7)
s=B.K()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.br(A.J,G.a6g,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bq(b8.save())
b8.translate(0,a7)
s=$.V().r
r=x.v
j=new B.aI(s,A.ai,b6,b6,B.a([],r))
j.D(new B.b0(-28,8))
j.D(new B.ap(-28,-2))
j.D(new B.ap(-16,-4))
j.D(new B.ap(-10,-16))
j.D(new B.ap(10,-16))
j.D(new B.ap(18,-4))
j.D(new B.ap(28,-2))
j.D(new B.ap(28,8))
j.D(new B.bv())
q=B.K()
q.sar(D.c_g.aA(0,D.eUY))
b9.aJ(j,q)
q=new B.aI(s,A.ai,b6,b6,B.a([],r))
q.D(new B.b0(-8,-4))
q.D(new B.ap(-4,-13))
q.D(new B.ap(4,-13))
q.D(new B.ap(4,-4))
q.D(new B.bv())
p=B.K()
p.r=A.fi.gp(0)
b9.aJ(q,p)
r=new B.aI(s,A.ai,b6,b6,B.a([],r))
r.D(new B.b0(8,-4))
r.D(new B.ap(8,-13))
r.D(new B.ap(11,-13))
r.D(new B.ap(15,-4))
r.D(new B.bv())
s=B.K()
s.r=A.fi.gp(0)
b9.aJ(r,s)
for(a2=0;a2<2;++a2){a3=F.az2[a2]
s=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
s.r=A.au.gp(0)
n=s.H()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bq(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
q.r=A.bO.gp(0)
q.c=1.6
n=q.H()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.F(s+u*8,14)
q=-4+u*5
p=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
p.r=A.aB.gp(0)
p.c=1.6
n=p.H()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.V().r
s=x.v
j=new B.aI(b8,A.ai,b6,b6,B.a([],s))
j.D(new B.b0(-18,20))
j.D(new B.ap(-14,-12))
j.D(new B.c8(0,-20,14,-12))
j.D(new B.ap(18,20))
j.D(new B.bv())
r=B.K()
r.sar(D.c0l.aA(0,D.eUJ))
b9.aJ(j,r)
r=new B.aI(b8,A.ai,b6,b6,B.a([],s))
r.D(new B.b0(14,-10))
r.D(new B.ap(30,-22))
r.D(new B.ap(32,-18))
r.D(new B.ap(16,-4))
r.D(new B.bv())
q=B.K()
q.r=A.e2.gp(0)
b9.aJ(r,q)
s=new B.aI(b8,A.ai,b6,b6,B.a([],s))
s.D(new B.b0(-14,-8))
s.D(new B.c8(-34,-6,-18,12))
b8=B.K()
b8.b=A.ac
b8.c=5
b8.r=A.au.gp(0)
b9.aJ(s,b8)
b8=B.K()
if(b7){s=B.ar(A.cZ,A.tF,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.e5
b8.r=s.gp(0)
b9.aU(D.eUI,b8)
if(b7){b8=B.K()
b8.r=A.cZ.j(0.3).gp(0)
b8.z=A.mQ
b9.ae(A.aHV,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.F(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=B.K()
b8.r=A.au.gp(0)
b9.ae(D.ebr,3,b8)
return!0
case"lamp":if(b7){u=A.k.E(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aI($.V().r,A.ai,b6,b6,B.a([],x.v))
b8.D(new B.b0(-10,-14))
b8.D(new B.ap(-30,24))
b8.D(new B.ap(10,24))
b8.D(new B.ap(8,-14))
b8.D(new B.bv())
s=B.K()
s.r=A.dR.j(0.28*u).gp(0)
b9.aJ(b8,s)
s=B.K()
s.r=A.dR.j(0.5*u).gp(0)
s.z=X.I1
b9.ae(D.efe,24,s)}b8=B.bz(D.eVn,A.hM)
s=$.V()
r=B.K()
r.r=A.e5.gp(0)
b9.aD(b8,r)
r=B.K()
r.r=A.dv.gp(0)
r.c=3
r.d=A.bG
b9.br(D.ebD,D.aI7,r)
r=B.K()
r.r=A.dv.gp(0)
r.c=3
r.d=A.bG
b9.br(D.aI7,D.eff,r)
a9=new B.aI(s.r,A.ai,b6,b6,B.a([],x.v))
a9.D(new B.b0(-14,-16))
a9.D(new B.ap(6,-26))
a9.D(new B.ap(10,-12))
a9.D(new B.ap(-10,-6))
a9.D(new B.bv())
s=B.K()
s.r=(b7?A.aT:A.k9).gp(0)
b9.aJ(a9,s)
b8=B.K()
b8.r=(b7?A.c:A.bl).gp(0)
b9.ae(D.efg,4,b8)
return!0
case"lights":b8=$.V().r
s=x.v
b0=new B.aI(b8,A.ai,b6,b6,B.a([],s))
b0.D(new B.b0(-34,-6))
b0.D(new B.c8(0,22,34,-6))
r=B.K()
r.b=A.ac
r.c=2
r.r=A.hc.gp(0)
b9.aJ(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.F(q+u*0.7,1.8)<1.1
if(b2){b3=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
b3.r=D.a3c[u].j(0.6).gp(0)
b3.z=A.RO
n=b3.H()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=B.a([],s)
b4=new B.aI(b8,A.ai,b6,b6,b3)
b3.push(new B.b0(p-3,o))
b3.push(new B.ap(p+3,o))
b5=o+11
b3.push(new B.ap(p+5,b5))
b3.push(new B.c8(p,o+17,p-5,b5))
b3.push(new B.bv())
p=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
if(b2)o=D.a3c[u]
else{o=B.ar(D.a3c[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbB().a.snapshot()
r.drawPath((b4.e=new B.cv(p)).a,n)
n.delete()}return!0}return C.icz(b9,c0,c1,c2)},
fN:function fN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h2Q(d){var w=D.ma.h(0,d)
return(w==null?null:w.b)===D.zS},
idL(d,e,f){return B.a3(d,!1).cg(B.uQ(null,!1,!0,!0,new C.fOZ(e,f),A.eO,null,A.q1,new C.fP_(),x.H))},
Jy:function Jy(d,e){this.a=d
this.b=e},
mg:function mg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fOZ:function fOZ(d,e){this.a=d
this.b=e},
fP_:function fP_(){},
V_:function V_(d,e,f){this.c=d
this.d=e
this.a=f},
bjH:function bjH(d,e){var _=this
_.d=$
_.e=null
_.bx$=d
_.aa$=e
_.c=_.a=null},
dQK:function dQK(d){this.a=d},
dQJ:function dQJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQH:function dQH(){},
dQI:function dQI(d){this.a=d},
dQG:function dQG(d){this.a=d},
dQF:function dQF(d,e){this.a=d
this.b=e},
dQE:function dQE(d,e){this.a=d
this.b=e},
dQD:function dQD(d){this.a=d},
dQC:function dQC(d){this.a=d},
dQy:function dQy(d){this.a=d},
dQx:function dQx(d){this.a=d},
dQB:function dQB(d,e,f){this.a=d
this.b=e
this.c=f},
dQA:function dQA(d){this.a=d},
dQz:function dQz(d){this.a=d},
bvl:function bvl(d,e,f){this.b=d
this.c=e
this.a=f},
aeF:function aeF(d,e,f){this.b=d
this.c=e
this.a=f},
aLI:function aLI(){},
a0Z(d,e,f,g,h,i){return new C.bu9(d,e,f,g,h,i)},
bu9:function bu9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fit:function fit(){},
fiu:function fiu(){},
fiv:function fiv(){},
fiw:function fiw(){},
fix:function fix(){},
fiy:function fiy(){},
fiz:function fiz(){},
fiA:function fiA(){},
a8p:function a8p(d){this.a=d},
cik:function cik(d){this.a=d},
cil:function cil(){},
cij:function cij(d,e){this.a=d
this.b=e},
cii:function cii(d){this.a=d},
Wy:function Wy(d){this.a=d},
aF1:function aF1(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.iJ$=f
_.oE$=g
_.nf$=h
_.iK$=i
_.bx$=j
_.aa$=k
_.c=_.a=null},
eKY:function eKY(d){this.a=d},
eKU:function eKU(d){this.a=d},
eKT:function eKT(d,e){this.a=d
this.b=e},
eKW:function eKW(d,e){this.a=d
this.b=e},
eKV:function eKV(d,e){this.a=d
this.b=e},
eKX:function eKX(d){this.a=d},
bvx:function bvx(d,e,f){this.b=d
this.c=e
this.a=f},
Vo:function Vo(d){this.a=d},
bjQ:function bjQ(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.iJ$=d
_.oE$=e
_.nf$=f
_.iK$=g
_.bx$=h
_.aa$=i
_.c=_.a=null},
dX2:function dX2(){},
dX3:function dX3(){},
dWY:function dWY(d,e){this.a=d
this.b=e},
dX_:function dX_(d,e){this.a=d
this.b=e},
dX0:function dX0(d){this.a=d},
dWZ:function dWZ(d){this.a=d},
dX1:function dX1(d){this.a=d},
bql:function bql(d,e,f){this.b=d
this.c=e
this.a=f},
UB:function UB(d){this.a=d},
bjt:function bjt(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.iJ$=d
_.oE$=e
_.nf$=f
_.iK$=g
_.bx$=h
_.aa$=i
_.c=_.a=null},
dIo:function dIo(){},
dIp:function dIp(){},
dIj:function dIj(){},
dIm:function dIm(d,e){this.a=d
this.b=e},
dIl:function dIl(d,e){this.a=d
this.b=e},
dIn:function dIn(d){this.a=d},
dIk:function dIk(d){this.a=d},
aIs:function aIs(d,e,f){this.a=d
this.b=e
this.c=f},
Vf:function Vf(d){this.a=d},
bjJ:function bjJ(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dU4:function dU4(d,e){this.a=d
this.b=e},
dU5:function dU5(d){this.a=d},
dU3:function dU3(d,e){this.a=d
this.b=e},
dU6:function dU6(d){this.a=d},
dU2:function dU2(d,e){this.a=d
this.b=e},
dU7:function dU7(d){this.a=d},
dU1:function dU1(d,e){this.a=d
this.b=e},
dU8:function dU8(d,e){this.a=d
this.b=e},
dU0:function dU0(d,e){this.a=d
this.b=e},
dU9:function dU9(d){this.a=d},
dU_:function dU_(d,e){this.a=d
this.b=e},
dUa:function dUa(d){this.a=d},
dTZ:function dTZ(d){this.a=d},
dUb:function dUb(d){this.a=d},
dTY:function dTY(d){this.a=d},
dUc:function dUc(d){this.a=d},
dUd:function dUd(d){this.a=d},
dTX:function dTX(d){this.a=d},
blG:function blG(d,e,f){this.b=d
this.c=e
this.a=f},
VY:function VY(d){this.a=d},
aEn:function aEn(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
eit:function eit(d,e){this.a=d
this.b=e},
eiu:function eiu(d,e,f){this.a=d
this.b=e
this.c=f},
eis:function eis(d,e,f){this.a=d
this.b=e
this.c=f},
eiv:function eiv(d){this.a=d},
eir:function eir(d){this.a=d},
eiz:function eiz(d){this.a=d},
eiy:function eiy(d,e){this.a=d
this.b=e},
eix:function eix(d,e){this.a=d
this.b=e},
eiA:function eiA(d,e){this.a=d
this.b=e},
eiw:function eiw(d,e){this.a=d
this.b=e},
eiB:function eiB(d){this.a=d},
W7:function W7(d){this.a=d},
aEG:function aEG(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eso:function eso(d){this.a=d},
esp:function esp(d){this.a=d},
esm:function esm(d,e){this.a=d
this.b=e},
esn:function esn(d){this.a=d},
esl:function esl(d){this.a=d},
esq:function esq(d){this.a=d},
esr:function esr(d){this.a=d},
ess:function ess(d){this.a=d},
est:function est(d,e){this.a=d
this.b=e},
Wr:function Wr(d){this.a=d},
bkU:function bkU(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eGf:function eGf(){},
eGo:function eGo(){},
eGk:function eGk(d){this.a=d},
eGj:function eGj(){},
eGl:function eGl(d,e){this.a=d
this.b=e},
eGi:function eGi(d,e){this.a=d
this.b=e},
eGm:function eGm(d){this.a=d},
eGh:function eGh(d,e){this.a=d
this.b=e},
eGn:function eGn(d){this.a=d},
eGg:function eGg(d){this.a=d},
VX:function VX(d){this.a=d},
bkp:function bkp(d,e,f,g,h,i,j,k){var _=this
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
_.iJ$=f
_.oE$=g
_.nf$=h
_.iK$=i
_.bx$=j
_.aa$=k
_.c=_.a=null},
ehy:function ehy(){},
ehz:function ehz(){},
ehr:function ehr(d){this.a=d},
ehq:function ehq(d){this.a=d},
ehs:function ehs(d){this.a=d},
ehp:function ehp(d){this.a=d},
eht:function eht(d){this.a=d},
eho:function eho(d){this.a=d},
ehu:function ehu(d,e){this.a=d
this.b=e},
ehn:function ehn(d,e){this.a=d
this.b=e},
ehv:function ehv(d){this.a=d},
ehm:function ehm(d,e){this.a=d
this.b=e},
ehw:function ehw(d){this.a=d},
ehl:function ehl(d,e){this.a=d
this.b=e},
ehx:function ehx(d){this.a=d},
ehk:function ehk(d,e){this.a=d
this.b=e},
bdw:function bdw(d,e,f){this.c=d
this.d=e
this.a=f},
aLw:function aLw(){},
bxe:function bxe(){},
aLN:function aLN(){},
bxi:function bxi(){},
aMe:function aMe(){},
bxq:function bxq(){},
aME:function aME(){},
bxy:function bxy(){},
oy(d,e,f,g,h,i){return new C.b73(h,d,f,g,i,e,null)},
hsz(d,e,f,g){var w=null
return B.cf(w,w,!0,w,new C.fSO(g,e,f),d,w,!0,!0,x.H)},
lS(d,e,f,g,h,i,j){return new C.b74(f,j,i,h,g,d,e,null)},
wX(d,e,f){return C.ieA(d,e,f)},
ieA(d,e,f){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$wX=B.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aW.ak$.x.h(0,e)
n=n==null?null:n.gba()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return B.b(r.m2(2),$async$wX)
case 7:q=h
w=8
return B.b(q.hw(A.h7),$async$wX)
case 8:p=h
if(p==null){w=1
break}o=J.eV(A.dF.gaQ(p))
w=9
return B.b(B.b67(B.a([B.h_7(o,"image/png",f+".png")],x.D),null,"Made in NGMY Core Protocol"),$async$wX)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.J(x.U).f.S(D.aQ8)
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$wX,v)},
q0(d,e,f,g){var w,v=$.as5
if(v==="music")return E.dX(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dX(261.63*v,w,f,0,g,"sine")}return C.fYr(v,e,f,g)},
fYr(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.E(e,-12,36)/12),s=Math.min(f,260)
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
J4(d,e,f,g){var w,v,u,t,s,r,q,p=$.as5
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.M)(e),++w)C.q0(d,e[w],f,g)
return}for(p=B.d1(e,0,B.dB(4,"count",x.S),B.S(e).c),v=p.$ti,p=new B.bS(p,p.gL(0),v.k("bS<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)C.q0(d,s,f,g)
else B.bO(new B.b9(1000*q),new C.cig(d,s,f,g),u)}},
a8o(d,e){var w="sine",v="noise"
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
cgc(d){return C.hJH(d)},
hJH(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cgc=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cgc)
case 7:r=f
q=B.aU(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.T(x.N,x.A)
w=1
break}p=A.T.aN(0,q,null)
o=x.N
n=x.A
o=x.f.b(p)?B.a2(p,o,n):B.T(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=B.T(x.N,x.A)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$cgc,v)},
b1d(d,e){return C.hJI(d,e)},
hJI(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b1d=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b1d)
case 6:s=g
w=7
return B.b(s.aq("String","ngmy_play_progress_v1_"+d,A.T.ao(e,null)),$async$b1d)
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
return B.i($async$b1d,v)},
b73:function b73(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cvt:function cvt(d){this.a=d},
cvu:function cvu(d,e){this.a=d
this.b=e},
fSO:function fSO(d,e,f){this.a=d
this.b=e
this.c=f},
fSN:function fSN(d){this.a=d},
f4:function f4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cvp:function cvp(d){this.a=d},
ho:function ho(d,e,f){this.c=d
this.d=e
this.a=f},
b74:function b74(d,e,f,g,h,i,j,k){var _=this
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
cvo:function cvo(d){this.a=d},
Fs:function Fs(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cvv:function cvv(d){this.a=d},
qM:function qM(){},
cvq:function cvq(d,e,f){this.a=d
this.b=e
this.c=f},
cvs:function cvs(d){this.a=d},
cvr:function cvr(){},
cig:function cig(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cy4(){var w=0,v=B.j(x.cL),u,t
var $async$cy4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=C
w=3
return B.b($.r2().bgq("assets/data/world110.json"),$async$cy4)
case 3:u=t.hOg(e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cy4,v)},
hOg(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.T.aN(0,a2,null)),a1=B.a([],x.m)
for(w=J.aV(a0),v=x.n,u=x.b,t=x.P,s=x.gO;w.C();){r=t.a(w.gR(w))
q=B.a([],s)
for(p=J.a4(r),o=J.aV(d.a(p.h(r,"r")));o.C();){n=o.gR(o)
m=B.a([],u)
for(l=J.aV(d.a(n));l.C();){k=l.gR(l)
j=J.a4(k)
m.push(B.a([B.e5(j.h(k,0)),B.e5(j.h(k,1))],v))}q.push(m)}o=B.cP(p.h(r,"n"))
m=B.cP(p.h(r,"a"))
l=B.cP(p.h(r,"ct"))
j=B.cP(p.h(r,"sr"))
i=B.e5(p.h(r,"pop"))
h=B.e5(p.h(r,"gdp"))
g=B.cP(p.h(r,"inc"))
f=B.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=B.aQC(g,f,"",0)
f=B.e5(J.q(p.h(r,"c"),0))
p=B.e5(J.q(p.h(r,"c"),1))
e=new C.abb(o,m,l,j,i,h,g,f,p,q)
e.byU(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new C.abc(a1)},
fw4(d){if(d>=1e12)return A.k.ac(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.ac(d/1e9,2)+" billion"
if(d>=1e6)return A.k.ac(d/1e6,1)+" million"
if(d>=1000)return A.k.ac(d/1000,1)+" thousand"
return A.k.ac(d,0)},
H2(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.F(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
abb:function abb(d,e,f,g,h,i,j,k,l,m){var _=this
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
abc:function abc(d){this.a=d},
va:function va(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
Pm:function Pm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yd:function yd(d,e,f){this.a=d
this.b=e
this.c=f},
Pl:function Pl(d){this.a=0
this.b=d
this.c=0},
hQ9(d,e,f){return $.hQa.c4(0,d+"|"+B.w(e)+"|"+f.l(),new C.dgw(d,e,f))},
Vu:function Vu(d){this.a=d},
aDL:function aDL(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.iJ$=j
_.oE$=k
_.nf$=l
_.iK$=m
_.bx$=n
_.aa$=o
_.c=_.a=null},
dZz:function dZz(d){this.a=d},
dZy:function dZy(d,e){this.a=d
this.b=e},
dZ1:function dZ1(d){this.a=d},
dZ_:function dZ_(d){this.a=d},
dZ0:function dZ0(d,e,f){this.a=d
this.b=e
this.c=f},
dYZ:function dYZ(d){this.a=d},
dYY:function dYY(){},
dYX:function dYX(d){this.a=d},
dZk:function dZk(d,e){this.a=d
this.b=e},
dZl:function dZl(d,e){this.a=d
this.b=e},
dZ9:function dZ9(d){this.a=d},
dZa:function dZa(d){this.a=d},
dZ8:function dZ8(d){this.a=d},
dZb:function dZb(d){this.a=d},
dZ2:function dZ2(d,e){this.a=d
this.b=e},
dZ3:function dZ3(d){this.a=d},
dZm:function dZm(d,e){this.a=d
this.b=e},
dZ7:function dZ7(d,e){this.a=d
this.b=e},
dZq:function dZq(d){this.a=d},
dZj:function dZj(d){this.a=d},
dZr:function dZr(d,e){this.a=d
this.b=e},
dZi:function dZi(d,e){this.a=d
this.b=e},
dZs:function dZs(d){this.a=d},
dZh:function dZh(d,e){this.a=d
this.b=e},
dZt:function dZt(d){this.a=d},
dZg:function dZg(d,e){this.a=d
this.b=e},
dZu:function dZu(d){this.a=d},
dZf:function dZf(d,e){this.a=d
this.b=e},
dZv:function dZv(d){this.a=d},
dZe:function dZe(d,e){this.a=d
this.b=e},
dZw:function dZw(d){this.a=d},
dZd:function dZd(d){this.a=d},
dZx:function dZx(d){this.a=d},
dZc:function dZc(d){this.a=d},
dZn:function dZn(d){this.a=d},
dZ6:function dZ6(d){this.a=d},
dZo:function dZo(d){this.a=d},
dZ5:function dZ5(d){this.a=d},
dZp:function dZp(d){this.a=d},
dZ4:function dZ4(d){this.a=d},
dYW:function dYW(){},
dYV:function dYV(d){this.a=d},
dYU:function dYU(d){this.a=d},
bfK:function bfK(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dgw:function dgw(d,e,f){this.a=d
this.b=e
this.c=f},
dgx:function dgx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aLS:function aLS(){},
aLT:function aLT(){},
afe(d,e,f,g,h){return new C.bu4(d,e,f,g,h)},
bu4:function bu4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fim:function fim(){},
fin:function fin(){},
fio:function fio(){},
fip:function fip(){},
fiq:function fiq(){},
fir:function fir(){},
fis:function fis(){},
Wu:function Wu(d){this.a=d},
bkY:function bkY(){this.d=$
this.c=this.a=null},
eH8:function eH8(d){this.a=d},
eH9:function eH9(d){this.a=d},
eH7:function eH7(d){this.a=d},
eHa:function eHa(){},
eH6:function eH6(d,e){this.a=d
this.b=e},
eH5:function eH5(d){this.a=d},
hQB(){var w,v,u=x.n,t=B.a([],u)
for(w=0;w<260;++w){v=new B.eb()
v.d5(w)
t.push(v.aj()*3.141592653589793*2)}u=B.a([],u)
for(w=0;w<260;++w){v=new B.eb()
v.d5(w+900)
u.push(2.2+v.aj())}return new C.bkL(new B.cz(null,x.z),new C.Pl(A.cW),A.J,A.ax,t,u,$,A.bE,0,B.a([],x.X),null,null)},
hQD(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hQC(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hiu(d,e,f){return $.hRd.c4(0,d+"|"+B.w(e)+"|"+f.l(),new C.f0x(d,e,f))},
Wg:function Wg(d){this.a=d},
bkL:function bkL(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.iJ$=j
_.oE$=k
_.nf$=l
_.iK$=m
_.bx$=n
_.aa$=o
_.c=_.a=null},
ezC:function ezC(d,e){this.a=d
this.b=e},
ezN:function ezN(d,e){this.a=d
this.b=e},
ezO:function ezO(d,e){this.a=d
this.b=e},
ezK:function ezK(d){this.a=d},
ezL:function ezL(d){this.a=d},
ezM:function ezM(d){this.a=d},
ezP:function ezP(d){this.a=d},
ezJ:function ezJ(d){this.a=d},
ezQ:function ezQ(d,e){this.a=d
this.b=e},
ezR:function ezR(d){this.a=d},
ezI:function ezI(d,e){this.a=d
this.b=e},
ezS:function ezS(d){this.a=d},
ezH:function ezH(d,e){this.a=d
this.b=e},
ezT:function ezT(d){this.a=d},
ezG:function ezG(d){this.a=d},
ezU:function ezU(d){this.a=d},
ezF:function ezF(d){this.a=d},
ezV:function ezV(d){this.a=d},
ezE:function ezE(d){this.a=d},
ezW:function ezW(d){this.a=d},
ezD:function ezD(d){this.a=d},
ezB:function ezB(){},
ezA:function ezA(){},
ezz:function ezz(d){this.a=d},
ezy:function ezy(d){this.a=d},
bs7:function bs7(d,e){this.b=d
this.a=e},
f0x:function f0x(d,e,f){this.a=d
this.b=e
this.c=f},
f0y:function f0y(){},
f0z:function f0z(){},
Vv:function Vv(d){this.a=d},
aDM:function aDM(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.iJ$=k
_.oE$=l
_.nf$=m
_.iK$=n
_.bx$=o
_.aa$=p
_.c=_.a=null},
dZD:function dZD(){},
e_5:function e_5(){},
dZS:function dZS(d,e){this.a=d
this.b=e},
dZJ:function dZJ(d,e){this.a=d
this.b=e},
dZT:function dZT(d){this.a=d},
dZI:function dZI(d){this.a=d},
dZU:function dZU(d){this.a=d},
dZR:function dZR(d){this.a=d},
dZY:function dZY(d){this.a=d},
dZQ:function dZQ(d){this.a=d},
dZZ:function dZZ(d){this.a=d},
dZP:function dZP(d,e){this.a=d
this.b=e},
e__:function e__(d){this.a=d},
e_0:function e_0(d){this.a=d},
dZO:function dZO(d,e){this.a=d
this.b=e},
e_1:function e_1(d){this.a=d},
dZN:function dZN(d,e){this.a=d
this.b=e},
e_2:function e_2(d){this.a=d},
dZM:function dZM(d,e){this.a=d
this.b=e},
e_3:function e_3(d){this.a=d},
dZL:function dZL(d,e){this.a=d
this.b=e},
e_4:function e_4(d){this.a=d},
dZK:function dZK(d){this.a=d},
dZV:function dZV(d){this.a=d},
dZH:function dZH(d){this.a=d},
dZW:function dZW(d){this.a=d},
dZG:function dZG(d){this.a=d},
dZX:function dZX(d){this.a=d},
dZF:function dZF(d){this.a=d},
dZC:function dZC(d){this.a=d},
dZB:function dZB(){},
dZE:function dZE(d,e){this.a=d
this.b=e},
dZA:function dZA(d){this.a=d},
baX:function baX(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
W8:function W8(d){this.a=d},
bkI:function bkI(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.iJ$=e
_.oE$=f
_.nf$=g
_.iK$=h
_.bx$=i
_.aa$=j
_.c=_.a=null},
esw:function esw(d,e){this.a=d
this.b=e},
esx:function esx(d,e){this.a=d
this.b=e},
esv:function esv(d,e){this.a=d
this.b=e},
esy:function esy(d,e){this.a=d
this.b=e},
esu:function esu(d,e){this.a=d
this.b=e},
brG:function brG(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eZH:function eZH(d){this.a=d},
aLU:function aLU(){},
bxk:function bxk(){},
aMn:function aMn(){},
bxt:function bxt(){},
aMq:function aMq(){},
bxv:function bxv(){},
hQz(){var w,v,u,t=B.a([],x.d9),s=B.a([],x.g)
for(w=0;w<150;++w){v=new B.eb()
v.d5(w)
v=v.aj()
u=new B.eb()
u.d5(w+500)
s.push(new B.t(v,u.aj()))}return new C.bjs(new B.cz(null,x.z),new C.Pl(A.cW),t,A.ax,s,$,A.bE,0,B.a([],x.X),null,null)},
PQ:function PQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Uz:function Uz(d){this.a=d},
bjs:function bjs(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.iJ$=i
_.oE$=j
_.nf$=k
_.iK$=l
_.bx$=m
_.aa$=n
_.c=_.a=null},
dHQ:function dHQ(){},
dHE:function dHE(){},
dHF:function dHF(d,e){this.a=d
this.b=e},
dHG:function dHG(d,e){this.a=d
this.b=e},
dHD:function dHD(d){this.a=d},
dHC:function dHC(d){this.a=d},
dHI:function dHI(d){this.a=d},
dHB:function dHB(d,e){this.a=d
this.b=e},
dHJ:function dHJ(d){this.a=d},
dHA:function dHA(d){this.a=d},
dHK:function dHK(d){this.a=d},
dHz:function dHz(d){this.a=d},
dHL:function dHL(d){this.a=d},
dHy:function dHy(d){this.a=d},
dHM:function dHM(d){this.a=d},
dHx:function dHx(d){this.a=d},
dHN:function dHN(d){this.a=d},
dHw:function dHw(d){this.a=d},
dHO:function dHO(d){this.a=d},
dHv:function dHv(d){this.a=d},
dHP:function dHP(d){this.a=d},
dHu:function dHu(d){this.a=d},
dHH:function dHH(d){this.a=d},
dHt:function dHt(d){this.a=d},
bak:function bak(d,e){this.b=d
this.a=e},
aeT:function aeT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vs:function Vs(d){this.a=d},
bjT:function bjT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.iJ$=p
_.oE$=q
_.nf$=r
_.iK$=s
_.bx$=t
_.aa$=u
_.c=_.a=null},
dYm:function dYm(d){this.a=d},
dYc:function dYc(d,e){this.a=d
this.b=e},
dYd:function dYd(d,e){this.a=d
this.b=e},
dYb:function dYb(d,e){this.a=d
this.b=e},
dYe:function dYe(d){this.a=d},
dYa:function dYa(d){this.a=d},
dYf:function dYf(d){this.a=d},
dY9:function dY9(d,e){this.a=d
this.b=e},
dYg:function dYg(d){this.a=d},
dY8:function dY8(d,e){this.a=d
this.b=e},
dYh:function dYh(d){this.a=d},
dY7:function dY7(d,e){this.a=d
this.b=e},
dYi:function dYi(d){this.a=d},
dY6:function dY6(d,e){this.a=d
this.b=e},
dYj:function dYj(d){this.a=d},
dY5:function dY5(d){this.a=d},
dYk:function dYk(d){this.a=d},
dY4:function dY4(d){this.a=d},
dYl:function dYl(d){this.a=d},
dY3:function dY3(d){this.a=d},
bfB:function bfB(d,e){this.b=d
this.a=e},
ddG:function ddG(d){this.a=d},
W4:function W4(d){this.a=d},
bkH:function bkH(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.iJ$=f
_.oE$=g
_.nf$=h
_.iK$=i
_.bx$=j
_.aa$=k
_.c=_.a=null},
erL:function erL(d,e){this.a=d
this.b=e},
erM:function erM(d){this.a=d},
erK:function erK(d){this.a=d},
erN:function erN(d){this.a=d},
erJ:function erJ(d){this.a=d},
erO:function erO(d){this.a=d},
erI:function erI(d){this.a=d},
erP:function erP(d){this.a=d},
erH:function erH(d){this.a=d},
erQ:function erQ(d){this.a=d},
erG:function erG(d,e){this.a=d
this.b=e},
erR:function erR(d){this.a=d},
erF:function erF(d,e){this.a=d
this.b=e},
erS:function erS(d){this.a=d},
erE:function erE(d,e){this.a=d
this.b=e},
erT:function erT(d){this.a=d},
erD:function erD(d,e){this.a=d
this.b=e},
bqW:function bqW(d,e){this.b=d
this.a=e},
aLt:function aLt(){},
bxd:function bxd(){},
aLQ:function aLQ(){},
bxj:function bxj(){},
aMm:function aMm(){},
bxs:function bxs(){},
i3q(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.C)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.M)(w),++q){p=w[q]
u.push(B.G(["k",p.b,"x",B.o5(A.k.ac(p.c,4)),"y",B.o5(A.k.ac(p.d,4)),"v",p.e,"l",B.o5(A.k.ac(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.o5(A.k.ac(p.as,3)),"ch",p.at,"vc",B.o5(A.k.ac(p.z,3)),"s",B.o5(A.k.ac(p.ch,2))],s,r))}w=B.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.M)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a6(f).k("cr.E"))
A.d.fc(l)
return A.T.ao(B.G(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
icY(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.T.aN(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=B.a([],x.fs)
g=x.bM
f=g.a(J.q(w,"parts"))
f=J.aV(f==null?A.cy:f)
while(f.C()){u=f.gR(f)
t=i.a(u)
e=B.aU(J.q(t,"k"))
s=e==null?"":e
if(!$.qo().ai(0,s)){J.cc(v,null)
continue}d=s
a0=B.aK(J.q(t,"x"))
if(a0==null)a0=0.5
a1=B.aK(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.tB(a2,d,a0,a1)
a3.aqs(a2,d,a0,a1)
h.push(a3)
r=a3
a1=B.aK(J.q(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=B.aK(J.q(t,"l"))
if(d==null)d=r.f
r.f=d
d=B.aK(J.q(t,"o"))
if(d==null)d=r.r
r.r=d
d=B.jP(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.jP(J.q(t,"b"))
r.x=d===!0
d=B.aU(J.q(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aK(J.q(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aK(J.q(t,"ch"))
r.at=A.k.O(d==null?0:d)
d=B.aK(J.q(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aK(J.q(t,"s"))
r.ch=A.k.E(d==null?1:d,1,2.6)
J.cc(v,r)}i=g.a(J.q(w,"wires"))
i=J.aV(i==null?A.cy:i)
h=x.j
while(i.C()){q=i.gR(i)
p=h.a(q)
f=B.aK(J.q(p,0))
o=f==null?a5:A.k.O(f)
f=B.aK(J.q(p,2))
n=f==null?a5:A.k.O(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.q(v,o)
l=J.q(v,n)
if(m!=null&&l!=null)a6.akP(m,A.k.O(B.e5(J.q(p,1))),l,A.k.O(B.e5(J.q(p,3))))}i=B.aK(J.q(w,"challenge"))
i=A.k.O(i==null?0:i)
k=B.aX(x.S)
h=g.a(J.q(w,"done"))
h=J.aV(h==null?A.cy:h)
while(h.C()){j=h.gR(h)
J.cc(k,A.k.O(B.e5(j)))}return new B.boz(i,k)}catch(a4){return a5}},
fy3(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fy3=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.az(),$async$fy3)
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
return B.i($async$fy3,v)},
bDQ(d){return C.iew(d)},
iew(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bDQ=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.az(),$async$bDQ)
case 7:w=6
return B.b(f.aq("String","ngmy_electronics_lab_v1",d),$async$bDQ)
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
return B.i($async$bDQ,v)}},D,G,N,T,Z,A4,A5,U
J=c[1]
B=c[0]
A=c[2]
A_=c[150]
A6=c[149]
A0=c[140]
A1=c[138]
K=c[132]
V=c[128]
A7=c[142]
R=c[105]
A2=c[114]
H=c[135]
A8=c[141]
A3=c[145]
A9=c[71]
W=c[80]
Aa=c[88]
Ab=c[84]
O=c[122]
Ac=c[126]
Ad=c[124]
X=c[130]
P=c[133]
Y=c[146]
Ae=c[144]
M=c[143]
Af=c[100]
Ag=c[147]
S=c[123]
Ah=c[148]
L=c[136]
Q=c[101]
Ai=c[24]
E=c[26]
F=c[97]
I=c[98]
C=a.updateHolder(c[17],C)
D=c[129]
G=c[131]
N=c[43]
T=c[137]
Z=c[108]
A4=c[139]
A5=c[134]
U=c[102]
C.ak2.prototype={}
C.VH.prototype={
U(){return new C.bkd(B.T(x.N,x.i),new B.as(A.at,$.ax()),B.a([],x.X),B.a([],x.L),B.mJ(0,null,null))}}
C.bkd.prototype={
gWj(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a3(0)
this.ch.t()
this.a1()},
Pg(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Pg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jR()
p.bP(0,A.c7)
t.m(new C.eaG(t))
t.a.toString
p=t.gWj()
w=3
return B.b(C.bzr(C.hSr(q,C.i3i(p),o,t.ay)),$async$Pg)
case 3:s=e
r=s==null?null:J.iZ(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=C.i4I(q,p,o)
if(t.c==null){w=1
break}t.m(new C.eaH(t,o,r))
$.aW.x1$.push(new C.eaI(t))
case 1:return B.h(u,v)}})
return B.i($async$Pg,v)},
Yl(d){return this.c_i(d)},
aW5(){return this.Yl(null)},
c_i(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Yl=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jR()
t.f.saX(0,o)
t.m(new C.eaT(t))
E.dX(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bzr(C.hZj(o)),$async$Yl)
case 3:r=n.a=m.icD(f)
p.b=""
if(r!=null&&!C.i3j(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.i4J(o)
q=B.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.ak2(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.eaU(p,t))
t.c4K(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Yl,v)},
c4K(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a3(0)
A.d.a8(w)
w=++m.as
v=m.gWj()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.eaP(m))
t=d.d
s=B.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.eaN(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.eaQ(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.M)(r),++u){p.$2(o,new C.eaR(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.eaS(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.by.j(0.1),g=B.m(16),f=B.I(A.by.j(0.35),A.r,1)
if(m.x)j=B.B(B.a([D.f1l,A.ba,B.E(B.d(m.Q,l,l,l,l,l,l,A.DL,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.frH
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.Us,l,l,l),1)
v=x.p
w=B.a([B.B(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fch,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.tX,B.d(u,l,l,l,l,l,l,D.ff1,l,l,l),l))
w.push(A.cK)
w.push(B.d(k.b,l,l,l,l,l,l,F.DW,l,l,l))
u=k.e
if(u.length!==0){t=A.aT.j(0.12)
s=B.m(10)
w.push(B.p(l,B.d(u,l,l,l,l,l,l,D.fhv,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.ic,A.cm,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aB
w.push(new B.D(A.MH,new B.cb(A.aN,A.e,A.j,A.E,l,A.p,l,0,B.a([new B.y(t,l,A.mi,l,l,l,l,l,l,l,l,l),A.bo,new B.bA(1,A.bd,new B.y(q,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.M)(j),++p){o=j[p]
t=new B.aQ(12,12)
s=new B.aQ(12,12)
A.d.v(w,B.a([A.N,new B.bL(A.a8,l,l,B.p(l,new B.y(o.a,l,A.Ua,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.by.j(0.3),l,l,new B.bk(t,t,t,t),l,l,A.n),l,l,l,l,A.h4,l,l,l),l),A.av,B.p(l,new B.y(o.b,l,D.fmY,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.c.j(0.07),l,l,new B.bk(s,s,s,s),l,l,A.n),l,l,l,l,A.bT,l,l,l)],v))}if(m.ax)w.push(D.egI)
j=B.cd(B.x(w,A.E,l,A.e,A.j,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ag)}w=x.p
g=B.x(B.a([B.aif(B.p(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.bvD,A.ex,l,l,1/0),A.b7,A.is),B.E(C.h7u(m.gWj(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new C.f4("Ask about it",i,new C.eaX(m),l,A.by,l),new C.f4("Invent something new",!i,new C.eaY(m),l,A.by,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dkw[p]
i.push(new C.f4(n,!1,new C.eaZ(m,n),l,A.by,l))}f.push(new C.ho(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.d3q[p]
i.push(new C.f4(r,!1,new C.eb_(m,r),l,A.by,l))}f.push(new C.ho(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aN(l,A.X,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bs(l,new B.b5(4,B.m(16),A.a0),l,A.eP,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kP,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.eb0(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.df,!0,A.a6,l,A.ao,l,A.aQR,l,l),1)
h=m.at
v=h&&j?D.bKT:A.e3
j=h&&j?"Ask":"Invent"
f.push(B.B(B.a([i,A.ab,new C.j7(v,j,new C.eb1(m,k),A.by,l)],w),A.m,l,A.e,A.j,0,l,l))
return C.oy(A.by,A.fV,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.m,l,A.e,A.P,0,A.p))}}
C.Gh.prototype={}
C.uX.prototype={}
C.W3.prototype={
U(){return new C.aEA(A.J,A.J,A.ax,B.aX(x.S),$,A.bE,0,B.a([],x.X),null,null)}}
C.aEA.prototype={
gaXk(){var w,v,u,t=this,s=D.Hu[t.cx],r=D.Re[t.cy],q=D.CH[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.en(w,w.r,B.a6(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.axk[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cL(p,0,new C.eoW())},
ga2G(){return D.Hu[this.cx].d/this.gaXk()},
gaOC(){return 0.1*(D.Hu[this.cx].d/0.9)/D.Re[this.cy].d},
a_(){this.a2()
this.p9()
C.cgc("rocket_lander").bL(new C.epf(this),x.a)},
c4T(){var w=this
w.ay=A.k.E(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cW.aj()*0.6
w.f=new B.t(0.15+A.cW.aj()*0.7,0.08)
w.r=new B.t((A.cW.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
q3(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.epg())
return}w=D.rx[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.E(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.t(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga2G()
v=v.a9(0,new B.t(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaOC())}if(m.dy){t=m.r
v=v.aF(0,t.aI(0,t.gcH()*6*D.azk[m.d]))}t=m.r=m.r.a9(0,v.aI(0,d))
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
p=D.CH[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b1d("rocket_lander",B.G(["unlocked",t],x.N,x.A))
C.J4("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga2G()/(D.rx[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ac(m.ga2G()/(D.rx[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dX(80,"",500,0,0.6,"noise")
B.fG()}}if(m.Q&&m.x>0&&A.o.F(A.k.bm(m.CW*20),2)===0)E.dX(90,"",70,0,0.12,"noise")
m.m(new C.eph())},
ag2(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fev,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new C.f4(e[w].a,f.$1(w),new C.eoY(this,g,w),v,h,v))
return new B.D(A.eG,B.x(B.a([u,A.cK,B.bW(A.bD,s,A.bq,6,6)],t),A.E,v,A.e,A.j,0,A.p),v)},
bEm(d){var w,v,u,t,s=this,r=null,q=s.ga2G()/(D.rx[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaOC()),o=D.azk[s.d],n=B.m(24),m=d.c,l=B.I(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.av,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.Un,r,r,r),A.R,s.ag2("ENGINE: "+D.Hu[s.cx].b,D.Hu,new C.eoN(s),new C.eoO(s),A.cZ),s.ag2("FUEL TANK: "+D.Re[s.cy].b,D.Re,new C.eoP(s),new C.eoQ(s),A.bm),s.ag2("LANDING GEAR: "+D.CH[s.db].b,D.CH,new C.eoR(s),new C.eoS(s),A.aR),s.ag2("EXTRAS (tap to add)",D.axk,new C.eoT(s),new C.eoU(s),A.by)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.fKc)
o=(q?A.bm:A.cs).j(0.14)
w=B.m(12)
v=A.k.ac(s.gaXk(),2)
u=A.k.ac(s.ga2G()/(D.rx[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.CH[s.db].d*100)+".",r,r,r,r,r,r,D.ff9,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.ic,A.bT,r,r,r))
m.push(A.R)
m.push(new B.bL(A.A,r,r,new C.j7(A.of,"Launch",new C.eoV(s),A.bm,r),r))
return B.at(B.p(r,B.cd(B.x(m,A.E,r,A.e,A.P,0,A.p),A.t,r,A.y,r,A.bQ,r,r,A.ag),A.f,r,A.lT,new B.o(D.blK,r,l,n,r,r,A.n),r,r,r,A.bT,r,r,r,r),r,r,r)},
aYs(d,e,f,g){var w=null,v=f?A.cZ:A.c.j(0.1),u=B.m(18),t=B.I(A.aZ,A.r,1)
return B.nI(A.jz,B.p(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.eoK(e),new C.eoL(e),w,w,w,w,new C.eoM(e))},
aYr(d,e,f){return this.aYs(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cC(new C.ep8(s,D.rx[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rx[w].a:"\ud83d\udd12"
o.push(new C.f4(v,s.d===w,new C.ep9(s,w),r,D.rx[w].c,r))}v=B.a([s.aYr(F.anc,new C.epa(s),s.y),A.ba,s.aYs(A.w9,new C.epb(s),s.Q,130),A.ba,s.aYr(A.On,new C.epc(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aR:A.c.j(0.1)
t=B.m(18)
A.d.v(v,B.a([A.ba,B.aB(r,B.p(r,D.bP3,A.f,r,r,new B.o(u,r,B.I(A.aZ,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.epd(s),r,r,r,r,r,r,!1,A.a4)],p))}return C.oy(A.cZ,A.fV,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new C.ho(o,"WORLD",r),B.B(v,A.m,r,A.b8,A.j,0,r,r)],p),A.m,r,A.e,A.P,0,A.p))}}
C.bhj.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rx[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.V(),d=B.K(),a0=j.c,a1=B.ar(D.boF,a0,0.25)
a1.toString
d.sar(new B.a9(A.b3,A.b6,A.x,B.a([F.aeE,a1],x.O),l,l).aA(0,new B.a5(0,0,g,f)))
a2.aU(new B.a5(0,0,g,f),d)
w=new B.eb()
w.d5(5)
for(g=a2.a,v=0;v<70;++v){f=w.aj()
d=w.aj()
a1=w.aj()
u=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
u.r=A.c.j(0.2+w.aj()*0.5).gp(0)
t=u.H()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=B.a([],f)
r=new B.aI(e.r,A.ai,l,l,d)
r.D(new B.b0(0,s+14))
q=new B.eb()
q.d5(2)
for(p=0;p<=i;p+=18){e=new B.ap(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.aj()*18))
d.push(e)
a1=r.f
if(a1!=null)e.by(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.D(new B.ap(i,h))
r.D(new B.ap(0,h))
r.D(new B.bv())
e=$.V()
d=B.K()
d.r=B.ar(a0,A.w,0.6).gp(0)
a2.aJ(r,d)
o=B.bN(new B.t(k.ax*i,s+10),8,k.ay*i)
d=B.bz(o,A.iC)
a0=B.K()
a0.r=A.be.gp(0)
a2.aD(d,a0)
a0=B.bz(o.ct(2),A.rR)
d=B.K()
d.b=A.ac
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aD(a0,d)
if(k.as==="ready")return
d=k.f
J.bq(g.save())
g.translate(d.a*i,d.b*h)
a2.j_(0,k.w)
i=k.as
if(i==="crashed"){k=B.K()
k.r=A.cZ.j(0.6).gp(0)
k.z=X.I1
a2.ae(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new B.aI(i,A.ai,l,l,B.a([],f))
n.D(new B.b0(-8,18))
n.D(new B.ap(0,44+Math.sin(k.CW*40)*8))
n.D(new B.ap(8,18))
n.D(new B.bv())
k=B.K()
k.r=A.aT.gp(0)
a2.aJ(n,k)
i=new B.aI(i,A.ai,l,l,B.a([],f))
i.D(new B.b0(-4,18))
i.D(new B.ap(0,32))
i.D(new B.ap(4,18))
i.D(new B.bv())
k=B.K()
k.r=A.c.gp(0)
a2.aJ(i,k)}k=e.r
m=new B.aI(k,A.ai,l,l,B.a([],f))
m.D(new B.b0(0,-26))
m.D(new B.c8(14,-10,11,18))
m.D(new B.ap(-11,18))
m.D(new B.c8(-14,-10,0,-26))
m.D(new B.bv())
i=B.K()
i.sar(D.c0P.aA(0,D.eUw))
a2.aJ(m,i)
i=B.K()
i.r=A.aR.gp(0)
a2.ae(G.uT,5,i)
i=new B.aI(k,A.ai,l,l,B.a([],f))
i.D(new B.b0(-11,6))
i.D(new B.ap(-20,20))
i.D(new B.ap(-11,18))
i.D(new B.bv())
h=B.K()
h.r=A.aw.gp(0)
a2.aJ(i,h)
f=new B.aI(k,A.ai,l,l,B.a([],f))
f.D(new B.b0(11,6))
f.D(new B.ap(20,20))
f.D(new B.ap(11,18))
f.D(new B.bv())
k=B.K()
k.r=A.aw.gp(0)
a2.aJ(f,k)
g.restore()},
av(d){return!0}}
C.aMk.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bxr.prototype={
t(){var w,v,u
for(w=this.iK$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a3(0)
w=this.iJ$
w===$&&B.c()
w.t()
this.bwo()}}
C.aSh.prototype={}
C.a3d.prototype={}
C.ban.prototype={}
C.UA.prototype={
U(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.ey(["skin"],x.N),o=new Float32Array(0)
return new C.aD5(w,v,u,t,s,r,q,new B.cz(null,x.z),p,D.KO,D.KO,A.ax,A.cW,o,new Int32Array(0),$,A.bE,0,B.a([],x.X),null,null)}}
C.aD5.prototype={
a_(){var w=this
w.a2()
w.p9()
w.as=new C.c3k(w.gcdf())
new C.dIh(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a3(0)
v.d=null}this.bvx()},
cdg(d){var w,v=this
if(v.c==null)return
w=J.a4(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f3(0,B.G(["t","init","data",$.hhx],x.N,x.A))
v.at=!0
v.ax=""
v.az1()
break
case"pick":v.m(new C.dHU(v,d))
break
case"shot":v.ahT(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
break}},
az1(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.avf[q.CW]
v=new C.dHV()
u=q.ay
u=B.C(u,B.a6(u).k("cr.E"))
A.d.fc(u)
t=x.N
s=B.G(["layers",u,"skinMode",q.ch,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.T.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=B.T(t,x.A)
u.n(0,"t","state")
u.v(0,s)
v.f3(0,u)}},
ahT(d){return this.cuc(d)},
cuc(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ahT=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cF.aM(A.a.b4(d,A.a.cD(d,",")+1))
w=6
return B.b(B.b67(B.a([B.h_7(r,"image/png","body.png")],x.D),null,"Made in NGMY Core Protocol"),$async$ahT)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.J(x.U).f.S(D.aQ8)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ahT,v)},
ayu(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.q(0,w)},
q3(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.q(0,"organ")&&A.k.bm(w)!==A.k.bm(v.ok)){C.a8o("kick",0.4)
v.a5l(170,new C.dIi())}v.ok=w
return},
ahI(d){var w,v,u,t,s=this
s.m(new C.dHW(s,d))
if(d==null){s.fx=D.KO
s.dy=1
w=s.as
if(w!=null)w.f3(0,B.G(["t","focus","group",null],x.N,x.A))
return}w=s.d.e
v=B.S(w).k("Z<1>")
u=B.C(new B.Z(w,new C.dHX(d),v),v.k("J.E"))
t=A.d.gI(u).b
if(t!=="skin"&&!s.ay.q(0,t)){s.ay.M(0,t)
if(s.ch===2)s.ch=1}s.az1()
w=s.as
if(w!=null)w.f3(0,B.G(["t","focus","group",d],x.N,x.A))
s.go=0
s.cwG(t,d)
return},
cwG(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){C.a8o("kick",0.8)
this.a5l(260,new C.dHY())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dX(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a5l(w*70,new C.dHZ(this))
else if(A.a.q(e,"intestine")||e==="Stomach")E.dX(110,"",360,0.7,0.3,"saw")
else C.fYr("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":E.dX(210+e.length*4,"",80,0.6,0.55,"tri")
E.dX(2400,"",20,0,0.3,v)
break
case"muscle":E.dX(70,"",150,1,0.6,"sine")
break
case"vessel":E.dX(300,"",380,0.4,0.22,v)
C.a8o("kick",0.3)
break
default:C.fYr("organic",2+A.o.F(e.length,6),200,0.4)}},
cBd(d){this.m(new C.dI0(this,d))},
aYK(){var w,v,u,t,s,r,q,p=this,o=B.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
if(p.ayu(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.M(0,s.a)}q=B.C(o,o.$ti.k("cr.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.au(w)]
p.p4=""},
bVW(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new C.dHR(u,w,d))
v=x.t
C.J4("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.a5l(1100,new C.dHS(u))
return}if(d==null){if(u.cx!=null)u.ahI(null)
return}u.ahI(d)},
bZC(d,e){var w,v=this,u=null,t=B.m(18),s=B.I(A.c8.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.faH,u,u,u)}else if(d==null||e==null)w=D.fp7
else{w=x.p
w=B.B(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hx,u,u,u),A.cK,B.d(e.b,u,u,u,u,u,u,F.DW,u,u,u)],w),A.E,u,A.e,A.P,0,A.p),1),B.aJ(u,u,u,u,D.bRw,u,u,u,new C.dHT(v),u,u,u,u,"Back to the whole body",A.cd)],w),A.E,u,A.e,A.j,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(D.WM,u,s,t,u,u,A.n),u,u,u,u,K.aiQ,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dvo.h(0,g)
i.az1()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dd3
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,B.M)(v),++s){r=v[s]
if(i.ayu(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aJ(h,h,h,h,D.qk,h,h,h,new C.dI7(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bJ:B.E1(h,A.qv,q)}else q=A.kM
q=B.x(B.a([B.E(q,1),new B.D(F.Zk,i.bZC(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){o=D.d4Y[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.q(0,n)
p.push(new C.f4(l,n,new C.dI8(i,o),o.c,A.c8,h))}p=B.a([new C.ho(p,h,h)],v)
if(!i.p1&&w.length!==0){n=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.M)(w),++s){k=w[s]
n.push(new C.f4(k,k===i.cx,new C.dI9(i,k),h,A.aT,h))}p.push(new C.ho(n,"FIND",h))}if(t.q(0,"organ")){n=i.k3
p.push(C.lS(A.cs,""+A.k.V(n)+" beats/min","Heart rate",180,40,new C.dIa(i),n))}if(i.ch>0&&t.a===0){n=B.a([],v)
for(j=0;j<5;++j)n.push(new C.Fs(D.avf[j],i.CW===j,new C.dIb(i,j),!1,h))
p.push(new C.ho(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=B.a([new C.f4("Spin",n,new C.dIc(i),D.am2,A.aR,h),new C.j7(A.oc,"Reset view",new C.dId(i),A.c,h),new C.f4(l,m,new C.dIe(i),A.GK,A.aT,h)],v)
if(t.q(0,"organ"))v.push(new C.f4("Heartbeat sound",i.k4,new C.dIf(i),A.ut,A.cs,h))
p.push(new C.ho(v,h,h))
return C.oy(A.c8,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.m,h,A.e,A.P,0,A.p))}}
C.aLu.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.aLv.prototype={
t(){var w,v,u
for(w=this.iK$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a3(0)
w=this.iJ$
w===$&&B.c()
w.t()
this.bvw()}}
C.c3k.prototype={
kJ(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hnF
$.hnF=v+1
u="ngmy-body-viewer-"+v
$.yR()
$.qn().q5(u,new C.c3l(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fM(v,"message",new C.c3m(t),!1,x.gA)
t.b=u},
f3(d,e){var w,v
try{w=this.c
if(w!=null){w=B.bzo(w.contentWindow)
if(w!=null)J.fUI(w,e,"*")}}catch(v){}}}
C.yf.prototype={}
C.Cx.prototype={}
C.ns.prototype={}
C.bb6.prototype={}
C.UF.prototype={
U(){var w=x.N,v=x.y,u=x.S
return new C.aD7(B.T(w,x.a2),B.a([],x.cB),B.T(w,v),B.T(w,v),B.T(w,u),A.ax,A.J,A.J,B.aX(u),$,A.bE,0,B.a([],x.X),null,null)}}
C.aD7.prototype={
a_(){var w=this
w.a2()
w.p9()
w.acH()
$.aW.x1$.push(new C.dJX(w))},
acH(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$acH=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$acH)
case 6:q=e.tq("ngmy_circuit_passed_v1")
r=q==null?A.X:q
if(s.c!=null)s.m(new C.dJB(s,r))
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
return B.i($async$acH,v)},
ad1(d){return this.c2r(d)},
c2r(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$ad1=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.M(0,d)
u=3
w=6
return B.b(B.az(),$async$ad1)
case 6:r=f
q=s.cx
p=B.a6(q).k("jY<cr.E,n>")
q=B.C(new B.jY(q,new C.dJE(),p),p.k("J.E"))
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
return B.i($async$ad1,v)},
axd(d,e,f,g){var w="c"+this.y++,v=new C.Cx(w,e,f,g)
this.d.n(0,w,v)
return v},
mA(d,e,f){return this.axd(0,e,f,0)},
ac2(d,e){var w
if(D.zq.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a9(0,new B.t(-36,w))},
tN(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aSE(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.nf$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dr(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.e9(m,D.cPI[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tN(p,0)&&n.tN(p,1)
break
case"or":p=q.a
o=n.tN(p,0)||n.tN(p,1)
break
case"xor":p=q.a
o=n.tN(p,0)!==n.tN(p,1)
break
case"nand":p=q.a
o=!(n.tN(p,0)&&n.tN(p,1))
break
case"nor":p=q.a
o=!(n.tN(p,0)||n.tN(p,1))
break
case"not":o=!n.tN(q.a,0)
break
default:o=n.tN(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bOy(){return this.aSE(null)},
q3(d){var w,v,u,t,s,r,q,p,o,n=this
n.bOy()
if(!n.ax)return
for(w=n.d,w=new B.bc(w,B.a6(w).k("bc<2>")).gaf(0),v=new B.f5(w,new C.dJY()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.nf$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.nf$)
o=s+1
E.dX(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
axe(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
m5(d,e){var w=this.x
return new B.t(d*w.a,e*w.b)},
atr(d){var w=this
if(w.x.A(0,A.ax)){$.aW.x1$.push(new C.dJz(w,d))
return}w.m(new C.dJA(w,d))},
cwY(d){this.m(new C.dJF(this,d,$.bEb()[d]))},
c7d(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bEb()[a0]
v=d.d
u=B.a6(v).k("bc<2>")
t=u.k("Z<J.E>")
s=t.k("J.E")
r=B.C(new B.Z(new B.bc(v,u),new C.dJu(),t),s)
A.d.aV(r,new C.dJv())
q=B.C(new B.Z(new B.bc(v,u),new C.dJw(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dJx(d,w))
return}u=d.r
p=B.dP(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dC(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h2(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aSE(0)
h=m.h(0,A.d.gI(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.l1(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aG(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.m(new C.dJy(d,o,a0))},
ay1(d){var w,v,u,t,s=this.d,r=B.a6(s).k("bc<2>")
s=B.C(new B.bc(s,r),r.k("J.E"))
r=B.S(s).k("dx<1>")
s=new B.dx(s,r)
s=new B.bS(s,s.gL(0),r.k("bS<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cfF(d){var w,v,u,t,s,r=this.d,q=B.a6(r).k("bc<2>")
r=B.C(new B.bc(r,q),q.k("J.E"))
q=B.S(r).k("dx<1>")
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
bZv(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dr(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.zq.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.ac2(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.z(p,o)
s=l}}}return t},
bNm(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.ac2(p,o)
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
c7f(d){var w,v,u,t=this,s=t.ay1(d)
if(s!=null){w=t.d.h(0,s)
w.toString
B.f0()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
E.dX(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dJG())
return}u=t.bNm(d)
if(u!=null)t.m(new C.dJH(t,u))
else t.m(new C.dJI(t))},
aw2(d){return this.c1q(d)},
c1q(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$aw2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.ay1(d)
if(s==null){w=1
break}B.jH()
t.m(new C.dJD(t,s))
case 1:return B.h(u,v)}})
return B.i($async$aw2,v)},
bAb(d){if(this.x.A(0,A.ax))return
this.m(new C.dJt(this,d,A.cW))
B.f0()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bEb()[g]
g=x.p
v=B.a([B.aJ(h,h,h,h,B.X(i.ax?A.ut:P.Cj,A.ae,h,h,h,21),h,h,h,new C.dJR(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.m(16)
s=A.co.j(0.14)
r=B.I(A.co.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.f9P,h,h,h),B.d(w.b,h,h,h,h,h,h,G.a8X,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.l_,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bm:A.f3,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.B(B.a([B.E(B.x(q,A.E,h,A.e,A.j,0,A.p),1),B.bH(D.fAq,i.gc7c(),B.bp(A.co,h,h,h,h,h,h,h,h,h,h,A.cd))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,W.MR,D.bwg,h,h,1/0))}u.push(B.E(B.cC(new C.dJS(i)),1))
if(f!=null){t=B.m(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.d(D.zq.h(0,r).a+": "+D.zq.h(0,r).e,h,h,h,h,h,h,A.t4,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A5.aiA,A.bT,h,h,1/0))}u=B.x(u,A.m,h,A.e,A.j,0,A.p)
t=B.a([],g)
for(s=D.zq.gdT(D.zq),s=s.gaf(s);s.C();){r=s.gR(s)
q=new B.aQ(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.aB(h,B.p(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bC,new B.y(p.a,h,D.aS3,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.P,0,A.p),A.f,h,h,new B.o(n,h,new B.bI(m,m,m,m),new B.bk(q,q,q,q),h,h,A.n),h,h,h,A.fw,Af.MN,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dJT(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dht[l]
s.push(new C.j7(A.Oo,k.b,new C.dJU(i,k),A.co,h))}s.push(new C.j7(D.O2,"Clear",new C.dJV(i),A.cs,h))
r=B.a([],g)
for(j=0;q=$.bEb(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.eb:A.lB
o=i.ay
n=i.cx.q(0,j)?A.bm:A.bI
r.push(new C.f4(q.a,o===j,new C.dJW(i,j),p,n,h))}return C.oy(A.co,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new C.ho(t,"PARTS",h),new C.ho(s,"TRY",h),new C.ho(r,"TASKS",h)],g),A.m,h,A.e,A.P,0,A.p))}}
C.bbp.prototype={
a5(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.V()
w=B.K()
w.r=D.ad7.gp(0)
a7.aU(new B.a5(0,0,0+a5,0+a6),w)
v=B.K()
v.r=A.c.j(0.05).gp(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.H()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,B.M)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.ac2(j,m.c)
f=q.h(0,l)===!0
l=$.V()
e=B.a([],p)
d=new B.aI(l.r,A.ai,a4,a4,e)
e.push(new B.b0(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new B.lD(h+a0,i,l-a0,a1,l,a1))
if(f){l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.b=A.ac
l.c=9
l.r=A.bI.j(0.28).gp(0)
l.z=H.ph
s=l.H()
l=d.gbB().a.snapshot()
w.drawPath((d.e=new B.cv(l)).a,s)
s.delete()}l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.b=A.ac
l.c=3.2
l.d=A.bG
l.r=(f?A.dR:A.bs).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new B.cv(d.gbB().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.a9(0,D.IB)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new B.aI($.V().r,A.ai,a4,a4,B.a([],p))
w=a3.b
p.D(new B.b0(a6,w))
r=g.b
p.D(new B.lD(a6+a0,w,a5-a0,r,a5,r))
r=B.K()
r.b=A.ac
r.c=3
r.r=A.ae.gp(0)
a7.aJ(p,r)}for(a5=new B.dr(o,o.r,o.e);a5.C();)this.c7e(a7,a5.d)},
c7e(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.zq.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bN(a0.c,64,64)
s=B.bz(t,A.lj)
r=w.cy===v
q=s.eS(A.cv)
$.V()
p=B.K()
p.r=A.w.j(0.55).gp(0)
p.z=A.mQ
d.aD(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.K()
p.sar(new B.c0(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.K],x.O),g,g).aA(0,B.bX(a0.c,52)))
d.ae(q,52,p)}q=s.eS(A.cH)
p=B.K()
o=e.c
p.r=B.ar(o,A.w,0.65).gp(0)
d.aD(q,p)
n=u?0.35:0
q=B.K()
p=B.ar(o,A.c,0.1+n)
p.toString
m=B.ar(o,A.w,u?0.2:0.45)
m.toString
q.sar(new B.a9(A.b3,A.b6,A.x,B.a([p,m],x.O),g,g).aA(0,t))
d.aD(s,q)
q=B.K()
q.b=A.ac
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aD(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.ur:D.bLk}else l=e.b
k=C.h_g(B.l1(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aF(0,new B.t(p/2,q.gbc(q)/2)))
j=C.h_g(e.a,10.5,A.c,g,g,A.H)
j.a5(d,a0.c.a9(0,new B.t(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.h_g(f,9,u?A.dR:A.bU,g,g,A.u)
i.a5(d,a0.c.a9(0,new B.t(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aZn(d,w.ac2(a0,h),o)
this.aZn(d,a0.c.a9(0,D.IB),o)},
aZn(d,e,f){var w
$.V()
w=B.K()
w.r=D.ad7.gp(0)
d.ae(e,8.5,w)
w=B.K()
w.b=A.ac
w.c=2.2
w.r=f.gp(0)
d.ae(e,8.5,w)
w=B.K()
w.r=A.c.gp(0)
d.ae(e,3.2,w)},
av(d){return!0}}
C.aLz.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bxf.prototype={
t(){var w,v,u
for(w=this.iK$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a3(0)
w=this.iJ$
w===$&&B.c()
w.t()
this.bvB()}}
C.Nw.prototype={
U(){return new C.aDo(B.mJ(0,null,null))}}
C.KA.prototype={
a4(){return"_UnfoldStyle."+this.b}}
C.AH.prototype={}
C.aDo.prototype={
c7k(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcn(0).at
v.toString
w.f=v}w.m(new C.dPN(w,e))},
c0j(){var w=this
w.e.t()
w.e=B.mJ(w.f,null,null)
w.m(new C.dPM(w))},
t(){this.e.t()
this.a1()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.ou(t,B.c5(v,A.bZ,t?new C.brg(w.e,w.gc7j(w),new C.dPO(d),v):new C.aHB(u,new B.cs(u.b,x.gj)),v,!1,!1,v,!1),new C.dPP(w,u),x.K)}}
C.bsQ.prototype={}
C.brg.prototype={
aZo(d,e){var w=null
return new B.D(K.ZN,B.x(B.a([B.d(d,w,w,w,w,w,w,D.faq,w,w,w),A.bC,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=B.B(B.a([B.aJ(v,v,v,v,Q.ns,v,v,v,w.e,v,v,v,v,v,v),A.rY,D.bCg],u),A.m,v,A.e,A.j,0,v,v),s=w.aZo("STUDIOS","Play, make things, and keep what you make")
$.bEc()
return B.bm(!0,B.x(B.a([new B.D(D.bBi,t,v),B.E(B.vF(0,v,A.t,w.c,A.y,v,v,v,v,v,!1,v,A.ag,!1,B.a([new B.mi(s,v),new B.nX(A.hF,B.P8(new B.ox(new C.eZe(d),9,!0,!0,!0,0,B.t5(),v),D.aPY),v),new B.mi(w.aZo("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.nX(D.bwn,B.P8(new B.ox(new C.eZf(w),6,!0,!0,!0,0,B.t5(),v),D.aPY),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)}}
C.aeY.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.m(20),n=B.m(20),m=B.ar(F.nd,p,0.3)
m.toString
w=x.O
m=B.a([m,D.ag3],w)
v=B.I(p.j(0.6),A.r,1.2)
u=x.V
t=B.a([new B.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=B.ar(p,A.w,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ac(0,A.G,p.j(0.5),A.J,12)],u)
return B.aF(!1,A.a1,!0,r,B.aM(!1,o,!0,B.eF(B.x(B.a([B.p(r,B.X(q.c,A.c,r,r,r,24),A.f,r,r,new B.o(r,r,r,r,u,new B.a9(A.ay,A.aD,A.x,w,r,r),A.a5),r,44,r,r,r,r,r,44),A.N,B.d(q.a,r,2,A.a2,r,r,r,B.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cK,B.d(q.b,r,2,A.a2,r,r,r,B.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b8,A.j,0,A.p),r,new B.o(r,r,v,n,t,new B.a9(A.ay,A.aD,A.x,m,r,r),A.n),r,A.G0,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ah)}}
C.adQ.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.m(20),g=B.m(20),f=B.ar(F.nd,A.d.gI(i),0.24)
f.toString
w=x.O
f=B.a([f,D.ag3],w)
v=B.I(A.d.gI(i).j(0.35),A.r,1)
u=x.V
t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cv,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.aQ(6,6)
m=B.a([A.d.gI(i),A.d.gal(i)],w)
l=B.a([new B.ac(0,A.G,A.w.j(0.45),K.aIu,0)],u)
r.push(B.p(k,B.X(q[p],A.c,k,k,k,11),A.f,k,k,new B.o(k,k,k,new B.bk(n,n,n,n),l,new B.a9(A.a3,A.a8,A.x,m,k,k),A.n),k,17,k,new B.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.x(r,A.m,k,A.e,A.P,0,A.p)
u=B.ar(A.d.gI(i),A.d.gal(i),0.4)
u.toString
return B.aF(!1,A.a1,!0,k,B.aM(!1,h,!0,B.eF(B.x(B.a([new B.a7(58,k,w,k),A.R,B.d(j.b,k,2,A.a2,k,k,k,B.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.av,B.X(A.Ch,A.d.gI(i),k,k,k,18)],s),A.m,k,A.b8,A.j,0,A.p),k,new B.o(k,k,v,g,t,new B.a9(A.ay,A.aD,A.x,f,k,k),A.n),k,A.G0,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ah)}}
C.Qj.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,B.c1(j,new B.o(h,j,j,B.m(22),j,j,A.n),A.bf),j,j,2,2,8,j)
u=B.m(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.Iz,26),new B.ac(-6,A.G,A.d.gI(i).j(0.1+0.4*t),A.J,30)],s)
q=B.m(22)
p=B.ar(A.d.gI(i),A.c,0.14)
p.toString
o=A.d.gI(i)
n=A.d.gal(i)
i=B.ar(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bU(0,B.c1(j,new B.o(j,j,j,j,j,new B.a9(A.ay,A.aD,A.x,B.a([p,o,n,i],m),D.dmU,j),A.n),A.bf),0,0,0),B.ao(j,B.c1(j,new B.o(j,j,j,j,j,new B.a9(A.b3,A.b6,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bf),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bU(0,B.b4(j,j,j,new C.bse(i,j),A.ax),0,0,0))
i=A.c.j(0.16)
p=B.I(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.p(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a5),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fc8,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.av,B.d(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a7,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.TO)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.fU,B.B(B.a([s,A.es,B.E(B.x(p,A.E,j,A.e,A.P,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(B.bU(0,B.e2(B.em(j,A.w.j(A.k.E(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=B.m(22)
m.push(B.bU(0,B.e2(B.c1(j,new B.o(j,j,B.I(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bf),!0,j),0,0,0))
return new B.a7(w,v,new B.an(A.a_,j,A.aa,A.f,B.a([h,B.bU(0,B.c1(B.bx(q,new B.an(A.a_,j,A.aa,A.t,m,j),A.aq),new B.o(j,j,j,u,r,j,A.n),A.bf),0,0,0)],l),j),j)}}
C.bse.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a5(r,-10,s,w)
u=d.a
J.bq(u.save())
u.translate(v.gbN().a,v.gbN().b)
d.j_(0,0.35)
t=B.bN(A.J,(w- -10)*1.6,s-r)
$.V()
s=B.K()
s.sar(new B.a9(A.a3,A.a8,A.x,B.a([A.K,A.c.j(0.3),A.K],x.O),null,null).aA(0,t))
d.aU(t,s)
u.restore()},
av(d){return d.b!==this.b}}
C.brK.prototype={
B(d){var w=null,v=B.m(22),u=B.a([D.bjK,D.afd],x.O),t=this.e,s=B.I(A.d.gI(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.km,24)],x.V),q=B.m(22),p=A.d.gI(t)
return new B.a7(this.c,this.d,B.c1(B.bx(q,B.b4(B.at(B.X(A.jQ,A.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.ba5(p,w),A.ax),A.aq),new B.o(w,w,s,v,r,new B.a9(A.ay,A.aD,A.x,u,w,w),A.n),A.bf),w)}}
C.ba5.prototype={
a5(d,e){var w,v,u,t,s,r,q,p
$.V()
w=B.K()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.H()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.H()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.eg(A.J)
$.V()
t=B.K()
t.b=A.ac
t.c=1.4
t.r=v.j(0.35).gp(0)
d.ae(u,30,t)},
av(d){return!1}}
C.aHB.prototype={
U(){return new C.aHC(new B.cz(null,x.z),null,null)}}
C.aHC.prototype={
gu9(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,D.btK,null,1,null,v)
w.cM(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gZI(){var w,v=this,u=v.e
if(u===$){w=B.bl(null,A.fT,null,1,null,v)
w.fl(0,!0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
gaxf(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc7h(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaVP(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaWx(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb6Z(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a2()
var w=this.gu9()
w.df()
w.dR$.M(0,this.gcwH())},
cwI(){var w,v,u,t,s,r,q,p=this,o=p.gu9().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gaxf().a){case 0:w=D.nv
break
case 1:w=D.uA
break
case 2:w=D.a3g
break
case 3:w=D.nv
break
case 4:w=D.da_
break
case 5:w=D.uA
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.aaP)r=0.09
else r=s===D.aaQ?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dX(260+90*v,"",260,1.6,0.18,"tri")
u=D.c3m[v]
C.q0("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.J4("bell",D.cca,1400,0.35)}}p.ax=o},
t(){this.gu9().t()
this.gZI().t()
this.bxl()},
ae6(){var w=this
w.gu9().cW2(0,B.dE(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new C.eYV(w))},
chI(){this.gu9().bR(0)
this.m(new C.eYU(this))},
ae5(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$ae5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaWx(),s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
l.push(new B.as(new B.bb(q,A.b4,A.aO),$.ax()))}m=B.a([],m)
for(t=u.gb6Z(),s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){p=t[r]
m.push(new B.as(new B.bb(p,A.b4,A.aO),$.ax()))}o=B.C(u.gaVP(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bT(F.nd,null,new C.eYT(u,l,m,o),t,!0,!0,!0,A.lK,!1,!1,x.H),$async$ae5)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.T$=$.ax()
n.P$=0}return B.h(null,v)}})
return B.i($async$ae5,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gaxf(),f=i.a.c,e=f.b,d=i.gc7h(),a0=new C.AH(g,e,f.c,d,i.gaVP(),i.gaWx(),i.gb6Z())
f=B.ar(A.d.gI(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=B.a([B.aJ(h,h,h,h,B.X(i.at?A.ut:P.Cj,A.ae,h,h,h,21),h,h,h,new C.eZ2(i),h,h,h,h,"Sound",h),B.aJ(h,h,h,h,D.bV2,h,h,h,i.gc7i(),h,h,h,h,"Edit words and pictures",h),B.aJ(h,h,h,h,D.qk,h,h,h,new C.eZ3(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c9(i.gZI(),new C.eZ4(i,a0),h),B.cC(new C.eZ5(i,a0))],g)
u=i.as
t=u?i.gchH():i.gc7l()
u=u?D.bKF:A.um
s=B.ar(A.d.gI(d),A.d.gal(d),0.4)
s.toString
t=B.B(B.a([B.aJ(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cd),B.E(B.c9(i.gu9(),new C.eZ6(i,a1,a0),h),1),B.aJ(h,h,h,h,D.bRm,h,h,h,new C.eZ7(i),h,h,h,h,"Replay",A.cd)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.ac(s,1)
r=B.ar(A.d.gI(d),A.d.gal(d),0.4)
r.toString
s=C.lS(r,u+"x","Speed",2.5,0.4,new C.eZ8(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.dk6[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gI(d),A.d.gal(d),0.4)
r.toString
u.push(new C.f4(p.b,o===p.a,new C.eZ9(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.c3K[q]
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
d.push(B.aB(h,B.p(h,h,A.f,h,h,new B.o(h,h,new B.bI(j,j,j,j),h,h,new B.a9(A.ay,A.aD,A.x,n,h,h),A.a5),h,l,h,D.aij,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eZa(i,n),h,h,h,h,h,h,!1,A.a4))}return C.oy(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.eG(new B.an(A.a_,h,A.b1,A.t,v,h),i.f),e,B.x(B.a([t,s,new C.ho(u,"STYLE",h),new C.ho(d,"THEME",h)],g),A.m,h,A.e,A.P,0,A.p))},
bzn(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nv[r]
p=A.k.E((1-A.ew.aw(0,A.k.E((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.E(p/1.5707963267948966,0,1)
q=D.nv[r]
n=q+0.12
m=A.k.E((a0-n)/(q+0.2-n),0,1)
n=D.nv[r]
q=n-0.01
q=A.k.E((a0-q)/(n+0.03-q),0,1)
n=B.dk()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.kd(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nv[r]
h=i+0.1
if(A.k.E((a0-h)/(i+0.3-h),0,1)>0){i=D.nv[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nv[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cN(0,r*118,0,f,f,f,new B.kw(q,new B.iJ(n,f,A.b3,!0,f,new C.Qj(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nv[r]
u=v-0.02
g=A.k.E((a0-u)/(v+0.1-u),0,1)
u=A.d.gI(w)
v=D.nv[r]
t=v+0.12
e.push(new B.cN(0,r*118-3-2,0,f,f,4,new B.ms(new C.bqT(u,g,1-A.k.E((a0-t)/(v+0.22-t),0,1),f),f,A.ax,f,f),f))}return new B.a7(a2,358,new B.an(A.a_,f,A.aa,A.f,e,f),f)},
bQ3(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.uA[r]
p=A.pY.aw(0,A.k.E((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.uA[r]
m=q+0.15
l=A.k.E((a0-m)/(q+0.25-m),0,1)
m=D.uA[r]
q=m-0.03
q=A.k.E((a0-q)/(m+0.01-q),0,1)
m=B.dk()
k=m.a
k.$flags&2&&B.aj(k)
k[11]=0.0011
m.jU(n,n,n,1)
m.fB(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.Qj(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dk()
k.fB(3.141592653589793)
k=new B.iJ(k,f,A.A,!0,f,new C.brK(a2,108,w,f),f)}e.push(new B.cN(0,r*130,0,f,f,f,new B.kw(q,new B.iJ(m,f,A.A,!0,f,k,f),f),f))}return new B.a7(a2,378,new B.an(A.a_,f,A.aa,A.f,e,f),f)},
cBG(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a3g[w]
l.push(A.cu.aw(0,A.k.E((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bU(0,B.b4(n,n,n,new C.buj(d.d,l,D.awX,m,C.brf(e,0.4,0.62),f,C.brf(e,0.45,0.7),n),A.ax),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.h_M(g,w)
q=D.awX[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cN(r,s-q*m*p+12,n,n,t,n,new B.kw(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.h_M(g,w)
r=D.a3g[w]
q=r+0.15
v.push(new B.cN(s,l,n,n,t,n,new B.kw(A.k.E((e-q)/(r+0.25-q),0,1),new B.y(u[w],n,A.Uw,n,A.L,n,n,n,n,n,n,n),n),n))}return new B.a7(g,m+90,new B.an(A.a_,n,A.aa,A.f,v,n),n)},
bFB(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cu.aw(0,C.brf(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bU(0,B.at(B.dJ(B.b4(f,f,f,new C.bqk(A.d.gI(a1),C.brf(a3,0,0.2),a4,f),new B.au(a5*0.95,70)),D.ebg),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.E((a3-l)/(0.12+m-l),0,1)
j=A.dB.aw(0,A.k.E((o-0.7)/0.3,0,1))
l=B.dk()
m=l.a
m.$flags&2&&B.aj(m)
m[11]=0.001
l.fB(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jU(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.F(r,1):-1
w.push(new B.z(o,new B.cN(0,0,0,0,f,f,new B.ci(A.A,f,f,new B.kw(k*(0.45+0.55*o),B.dJ(new B.iJ(l,f,A.A,!0,f,new C.Qj(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.t(n*a5*0.34,-o*18)),f),f),f)))}A.d.aV(w,new C.eYM())
A.d.v(a0,new B.N(w,new C.eYN(),x.fR))
return new B.a7(a5,330,new B.an(A.a_,f,A.aa,A.f,a0,f),f)},
c7g(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.uA[q]
o=A.k.E((a2-p)/(p+0.22-p),0,1)
n=A.lo.aw(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.uA[q]
m=A.k.E((a2-m)/(m+0.02-m),0,1)
l=D.az0[q]
k=B.dk()
k.mO(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jU(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.uA[q]
g=h+0.1
g=A.k.E((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cN(0,0,0,0,e,e,new B.ci(A.A,e,e,new B.kw(m,B.dJ(new B.iJ(k,e,A.A,!0,e,new C.Qj(d,92,w,p,j,i,0,g*s,h,e),e),new B.t(0,l)),e),e),e))
l=D.uA[q]
h=l+0.02
f=A.k.E((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cN(0,0,0,0,e,e,new B.ci(A.A,e,e,B.dJ(new B.ms(new C.baL(w,f,q,e),e,new B.au(r,212),e,e),new B.t(0,D.az0[q])),e),e))}return new B.a7(a4,330,new B.an(A.a_,e,A.aa,A.f,a0,e),e)},
bCi(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.t(-b0,-150),new B.t(b0,-40),D.ebk],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nv[r]
p=A.k.E((a8-q)/(q+0.2-q),0,1)
o=A.cu.aw(0,p)
q=D.az9[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nv[r]
f=g+0.2
e=A.k.E((a8-f)/(g+0.3-f),0,1)
f=D.nv[r]
g=f-0.01
g=A.k.E((a8-g)/(f+0.03-g),0,1)
f=B.dk()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.mO(l*h+D.de2[r]*o)
f.fB(l*0.9)
h=0.55+0.45*o
f.jU(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cN(0,0,0,0,a3,a3,new B.ci(A.A,a3,a3,new B.kw(g,B.dJ(new B.iJ(f,a3,A.A,!0,a3,new C.Qj(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.t(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nv[r]
i=q+0.17
a2=A.k.E((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.az9[r]
a6.push(new B.cN(0,0,0,0,a3,a3,new B.ci(A.A,a3,a3,B.dJ(new B.ms(new C.bqm(A.d.gI(w),a2,a3),a3,new B.au(a4,30),a3,a3),new B.t(0,q+48-4)),a3),a3))}}return new B.a7(b0,330,new B.an(A.a_,a3,A.aa,A.f,a6,a3),a3)}}
C.bqT.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a5(w-v,0,w+v,e.b)
q=B.bz(u,A.hi)
$.V()
t=B.K()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=H.ph
d.aD(q,t)
t=B.bz(u,A.hi)
q=B.K()
q.r=A.c.j(s).gp(0)
d.aD(t,q)},
av(d){return d.c!==this.c||d.d!==this.d}}
C.bqk.prototype={
a5(d,e){var w,v,u=this.c,t=B.bN(e.eg(A.J),e.b*u,e.a*u)
$.V()
u=B.K()
u.b=A.ac
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=X.I1
d.dX(t,u)
u=B.K()
u.b=A.ac
u.c=2.5
u.r=w.j(0.7).gp(0)
d.dX(t,u)
u=t.ct(-14)
v=B.K()
v.b=A.ac
v.c=1
v.r=w.j(0.3).gp(0)
d.dX(u,v)},
av(d){return!0}}
C.baL.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.eg(A.J),f=this.c,e=A.cu.aw(0,f)
$.V()
w=B.K()
w.b=A.ac
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gI(u).j(0.6*v).gp(0)
d.ae(g,40+e*a0.a*0.42,w)
t=new B.eb()
t.d5(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.aj()*3.141592653589793*2
n=(40+t.aj()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.aj()
j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
i=(p&1)===0?A.d.gI(u):A.c
j.r=i.j(A.k.E(v,0,1)).gp(0)
h=j.H()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
av(d){return!0}}
C.bqm.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.eg(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.E(s-r*0.18,0,1)
if(q<=0)continue
p=B.bN(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.V()
o=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
o.b=A.ac
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.H()
t.drawOval(B.bQ(p),n)
n.delete()}},
av(d){return d.c!==this.c}}
C.buj.prototype={
a5(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new B.a5(0,d0,0+c5,d0+60)
$.V()
d0=B.K()
w=c1.b
v=x.O
d0.sar(new B.a9(A.b3,A.b6,A.x,B.a([A.d.gI(w).j(0.18),A.K],v),c2,c2).aA(0,d1))
d2.aU(d1,d0)
d0=B.K()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.br(new B.t(0,c4),new B.t(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=C.h_M(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.V()
a3=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.mQ
a4=a3.H()
t.drawOval(B.bQ(new B.a5(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new B.a5(d,a1,a3,a1+a0)
a6=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a7=B.ar(A.d.gI(w),A.c,0.1)
a7.toString
a6.sar(new B.a9(A.b3,A.b6,A.x,B.a([a7,A.d.gal(w)],v),c2,c2).aA(0,a5))
a4=a6.H()
t.drawRect(B.bQ(a5),a4)
a4.delete()
a2=a2.r
a6=B.a([],n)
a8=new B.aI(a2,A.ai,c2,c2,a6)
a6.push(new B.b0(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new B.ap(a7,a9))
a6.push(new B.ap(a7,m))
a6.push(new B.ap(a3,c4))
a6.push(new B.bv())
a6=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a6.r=B.ar(A.d.gal(w),A.w,0.5).gp(0)
a4=a6.H()
a6=a8.gbB().a.snapshot()
t.drawPath((a8.e=new B.cv(a6)).a,a4)
a4.delete()
a6=B.a([],n)
b0=new B.aI(a2,A.ai,c2,c2,a6)
a6.push(new B.b0(d,a1))
a6.push(new B.ap(d+c8,a9))
a6.push(new B.ap(a7,a9))
a6.push(new B.ap(a3,a1))
a6.push(new B.bv())
a2=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a2.r=B.ar(A.d.gI(w),A.c,0.45).gp(0)
a4=a2.H()
a2=b0.gbB().a.snapshot()
t.drawPath((b0.e=new B.cv(a2)).a,a4)
a4.delete()
b1=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
b1.b=A.ac
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.H()
t.drawRect(B.bQ(a5),a4)
a4.delete()
a4=b1.H()
a2=a8.e
t.drawPath((a2==null?a8.e=new B.cv(a8.gbB().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new B.cv(b0.gbB().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bm(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=B.bz(new B.a5(b7,a7,b7+r,b5),A.hi)
$.V()
b9=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.H()
t.drawRRect(B.eL(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new B.a5(d,a1,a3,a1+28)
J.bq(t.save())
t.clipRect(B.bQ(a5),$.nc()[1],!0)
$.V()
a1=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a1.sar(new B.a9(A.b3,A.b6,A.x,B.a([A.K,A.c.j(0.4),A.K],v),c2,c2).aA(0,c0))
a4=a1.H()
t.drawRect(B.bQ(c0),a4)
a4.delete()
t.restore()}}},
av(d){return!0}}
C.aNa.prototype={
aW(){this.b6()
this.b5()
this.dH()},
t(){var w=this,v=w.b2$
if(v!=null)v.a6(0,w.gdD())
w.b2$=null
w.a1()}}
C.a0s.prototype={
a4(){return"_Role."+this.b}}
C.qc.prototype={}
C.qU.prototype={}
C.CB.prototype={}
C.Zq.prototype={}
C.aeM.prototype={}
C.a0F.prototype={
gY(d){return this.d}}
C.CL.prototype={}
C.abK.prototype={}
C.ac_.prototype={}
C.adT.prototype={}
C.bhg.prototype={
a2P(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dX(d,"",e,g,h,f)},
b83(d,e,f){return this.a2P(d,e,f,0,0.55)},
aBL(d,e,f,g){return this.a2P(d,e,f,0,g)},
b84(d,e,f,g){return this.a2P(d,e,f,g,0.55)},
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
ak5(d,e,f,g){var w="n"+this.ay++,v=new C.qU(w,e,f,g)
this.a.n(0,w,v)
this.aT()
return v},
B7(d,e,f){return this.ak5(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bt(w.b,new C.dku(e))
A.d.bt(w.c,new C.dkv(e))
w.aT()},
bbQ(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mP.h(0,v.b).c===D.xa)return!1
w=this.b
if(A.d.b3(w,new C.dkr(d,e)))return!1
w.push(new C.CB(d,e))
this.aT()
return!0},
c_f(d){var w
if(d.b==="beat")return D.cck[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.au(500)
case 2:return 1400+w.au(2200)
default:return 450+w.au(2000)}},
aFj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.azp[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.CL(u,t,j.ax,90))
w.push(new C.CL(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new C.a0F(u,new B.t(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b83(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.aj()*0.5)
m.toString
v.push(new C.a0F(u,new B.t(o*p,n*p),m,3+w.aj()*4.5,1000+w.au(700),j.ax))}j.f.push(new C.CL(u,t,j.ax,120))
j.aBL(120,200,"noise",0.5)
j.b83(261.63*Math.pow(2,([7,12,16,19][w.au(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.CL(u,t,j.ax,230))
w.push(new C.CL(u,t,j.ax+160,160))
w.push(new C.CL(u,t,j.ax+320,100))
j.b84(180+j.at.au(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.abK(u,new B.t((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b84(300+w.au(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new C.ac_(u,u.a9(0,new B.t(Math.cos(q),Math.sin(q)).aI(0,260+w.aj()*200)),t,j.ax))
j.a2P(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fG()
j.a2P(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.adT(u,D.ayN[v],t,j.ax))
j.aBL(261.63*Math.pow(2,([0,5,9,12][j.at.au(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aBL(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c8q[A.o.F(w,3)]
for(k=1;k<=3;++k)j.crM(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gaf(j.b),v=new B.f5(w,new C.dks(d));v.C();)j.aAg(w.gR(0),j.ax+D.ckM[A.o.F(g.d,4)])
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
case"chance":s=j.at.au(100)<D.cBO[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gaf(j.b),v=new B.f5(w,new C.dkt(d));v.C();)j.aAg(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.zi(w,0,v-700)},
crM(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.Zq(e,"~"+d))},
aAg(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.aeM(d.a,v,e,w))
u.push(new C.Zq(w,v))},
a6x(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a6(w).k("bc<2>")
w=B.C(new B.bc(w,v),v.k("J.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aFj(r)
u.n(0,r,o.ax+o.c_f(s))}}w=o.c
v=B.S(w).k("Z<1>")
q=B.C(new B.Z(w,new C.dkw(o),v),v.k("J.E"))
if(q.length!==0){A.d.bt(w,new C.dkx(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.M)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b4(u,1)
for(u=A.d.gaf(v),r=new B.f5(u,new C.dky(p));r.C();)o.aAg(u.gR(0),o.ax)}else o.aFj(u)}}A.d.bt(o.d,new C.dkz(o))
A.d.bt(o.e,new C.dkA(o))
A.d.bt(o.f,new C.dkB(o))
A.d.bt(o.w,new C.dkC(o))
A.d.bt(o.x,new C.dkD(o))
A.d.bt(o.r,new C.dkE(o))
o.aT()},
vf(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
m=B.a([],x.C)
for(v=this.a,v=new B.dr(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.G(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.M)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.T.ao(B.G(["nodes",m,"edges",v],u,x.ew),null)},
TD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.T.aN(0,d,null))
k.a8(0)
for(o=x.j,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=B.w(J.q(v,"k"))
if(!D.mP.ai(0,u))continue
t=B.w(J.q(v,"id"))
m.n(0,t,new C.qU(t,u,new B.t(B.e5(J.q(v,"x"))*k.cy.a,B.e5(J.q(v,"y"))*k.cy.b),A.k.O(B.e5(J.q(v,"p")))))
s=B.ca(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=B.w(J.q(r,0))
p=B.w(J.q(r,1))
if(m.ai(0,q)&&m.ai(0,p))n.push(new C.CB(q,p))}k.aT()
return!0}catch(l){return!1}},
cQK(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.qU(n,r,new B.t(q*p.a,o*p.b),s))
l.aT()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bbQ(w[m.a],w[m.b])}},
gY(d){return this.cy}}
C.G1.prototype={}
C.W2.prototype={
U(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aEz(new C.bhg(B.T(w,x.f3),v,u,t,s,r,q,p,o,B.T(w,n),B.T(w,n),B.T(w,n),B.T(w,n),A.cW,A.K,A.ax,$.ax()),A.bE,A.J,A.J,A.X,null,null)}}
C.aEz.prototype={
acA(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$acA=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.az(),$async$acA)
case 6:q=n.jP(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.eog(s))
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
return B.i($async$acA,v)},
a9y(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$a9y=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.eo5(s))
u=3
w=6
return B.b(B.az(),$async$a9y)
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
return B.i($async$a9y,v)},
bLw(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a6(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new B.bc(n,w).cL(0,0,new C.eo7())+"|"+A.d.cL(o,0,new C.eo8())
if(v===p.ch)return p.CW
u=new C.eob()
t=x.s
s=B.a([],t)
r=new C.eoc(p,s,u)
for(n=new B.bc(n,w).gaf(0),w=new B.f5(n,new C.eo9());w.C();){q=n.gR(0)
if(!A.d.b3(o,new C.eoa(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.d1(s,0,B.dB(5,"count",x.S),x.N).dm(0)},
a_(){var w,v=this
v.a2()
v.acA()
v.d.db=v.ay
w=v.rU(new C.eoG(v))
w.hj(0)
v.e!==$&&B.aP()
v.e=w},
t(){var w=this,v=w.as
if(v!=null)v.a3(0)
v=w.e
v===$&&B.c()
v.t()
v=w.d
v.T$=$.ax()
v.P$=0
w.bwm()},
ac6(d){return this.bZI(d)},
bZI(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$ac6=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.az(),$async$ac6)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.TD(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aWY(A.d.gI(D.ayd))
if(s.c!=null)s.m(new C.eof())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ac6,v)},
aWY(d){this.d.cQK(0,d.c,d.d)
this.Eg()},
Eg(){var w=this.as
if(w!=null)w.a3(0)
this.as=B.cL(A.lx,new C.eo1(this))},
axg(d){var w,v,u,t,s=this.d.a,r=B.a6(s).k("bc<2>")
s=B.C(new B.bc(s,r),r.k("J.E"))
r=B.S(s).k("dx<1>")
s=new B.dx(s,r)
s=new B.bS(s,s.gL(0),r.k("bS<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cfG(d){var w,v,u,t,s,r=this.d.a,q=B.a6(r).k("bc<2>")
r=B.C(new B.bc(r,q),q.k("J.E"))
q=B.S(r).k("dx<1>")
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
bZw(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dr(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mP.h(0,r.b).c===D.xa)continue
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
c7o(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hnG(new B.t(n.a+36,n.b+0),new B.t(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
czu(d){var w,v,u,t,s,r,q=this,p=q.axg(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f0()
u=v.b
if(u==="button"){w.aFj(p)
return}if(q.r)return
t=D.mP.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qM)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.aT()
q.Eg()
return}if(q.r)return
r=q.c7o(d)
if(r!=null){w=q.d
A.d.cG(w.b,r)
w.aT()
q.Eg()}},
cgZ(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cfG(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.axg(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aF(0,d)}},
ch_(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aT()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.t(A.k.E(d.a+s.y.a,46,t.a-46),A.k.E(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aT()}}},
b10(){var w,v,u=this
if(u.z!=null){w=u.bZw(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bbQ(v,w)}else v=!1
if(v){B.kr()
u.Eg()}u.z=null
u.d.aT()}else if(u.x!=null){if(u.at)u.Eg()
u.x=null}},
acN(d){return this.c1r(d)},
c1r(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$acN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.axg(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jH()
p=t.c
p.toString
w=3
return B.b(B.bT(F.nd,null,new C.eoi(q),p,!0,!0,!1,A.lK,!1,!1,x.y),$async$acN)
case 3:if(f===!0){r.W(0,s)
t.Eg()}case 1:return B.h(u,v)}})
return B.i($async$acN,v)},
c7m(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.B7(0,d,new B.t(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
B.f0()
this.Eg()},
agA(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(F.nd,null,new C.eok(),s,!0,!0,!0,A.lK,!1,!1,x.es),$async$agA)
case 2:t=e
if(t!=null)u.aWY(t)
return B.h(null,v)}})
return B.i($async$agA,v)},
ae7(d){var w=0,v=B.j(x.H),u=this,t
var $async$ae7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.eo4(),t,null,!0,!0,x.y),$async$ae7)
case 2:if(f===!0){u.d.a8(0)
u.Eg()}return B.h(null,v)}})
return B.i($async$ae7,v)},
B(d){var w=this,v=null,u=B.a([B.aif(w.r?new B.bL(A.a3,v,v,new B.D(A.G1,B.hp(D.bPj,D.ftb,new C.eoE(w),v),v),v):w.c7p(),A.b7,A.iO),B.E(B.cC(new C.eoF(w)),1)],x.p)
if(!w.r)u.push(w.cuf())
return B.c5(v,A.bZ,B.bm(!0,B.x(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bHg(){var w=null,v=new C.eo6(),u=A.w.j(0.7),t=B.m(26),s=B.I(A.bu.j(0.5),A.r,1)
return B.bU(0,B.em(B.at(B.p(w,B.cd(B.x(B.a([D.fEr,A.av,D.fM6,A.aA,v.$4(A.p5,A.bu,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Z.Cd,A.co,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.l5,A.c8,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.amf,A.bI,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fLo,new B.bL(A.a8,w,w,B.bK(!1,D.fBA,w,w,!0,w,w,this.gbH9(),w,w),w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ag),A.f,w,A.W7,new B.o(F.nd,w,s,t,w,w,A.n),w,w,w,A.fc,A5.ajy,w,w,w),w,w,w),u,!0),0,0,0)},
c7p(){var w=this,v=null,u=B.aJ(v,v,v,v,Q.ns,v,v,v,new C.eoq(w),v,v,v,v,v,v),t=w.a9_(A.Od,"How it works",new C.eor(w),!0),s=w.ay?A.ut:P.Cj
return new B.D(D.bAw,B.B(B.a([u,D.bC2,t,w.a9_(s,"Sound",new C.eos(w),!0),w.a9_(A.e3,"Ideas",w.gckJ(),!0),w.a9_(D.O2,"Clear",w.gc7n(w),!0),w.aNV(A.id,"Show",new C.eot(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aNV(d,e,f,g,h){var w=null,v=h?A.bu:A.c.j(0.08),u=B.m(14),t=B.m(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(A9.vY,B.aF(!1,A.a1,!0,u,B.aM(!1,t,!0,B.hc(new B.D(new B.Q(8,8,8,8),B.B(s,A.m,w,A.e,A.P,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ah),w)},
a9_(d,e,f,g){return this.aNV(d,e,f,g,!1)},
cuf(){var w=null,v=new C.eom(this),u=A.c.j(0.08)
return B.p(w,B.cd(B.B(B.a([v.$2("START",D.xa),v.$2("CHANGE",D.Ef),v.$2("REACT",D.qM)],x.p),A.E,w,A.e,A.j,0,w,w),A.t,w,A.y,w,w,w,w,A.aN),A.f,w,w,new B.o(F.B1,w,new B.bI(new B.ay(u,1,A.r,-1),A.a0,A.a0,A.a0),w,w,w,A.n),w,w,w,w,D.bvF,w,w,w)},
cug(d){var w,v,u,t,s=null,r=D.mP.h(0,d)
r.toString
w=B.m(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.I(v.j(0.5),A.r,1)
return new B.D(A.fw,B.aB(s,B.p(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cK,B.d(r.a,s,1,A.a2,s,s,s,D.aS3,s,s,s)],x.p),A.m,s,A.e,A.P,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a9(A.b3,A.b6,A.x,u,s,s),A.n),s,s,s,s,A.hE,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eol(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bhh.prototype={
a5(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bq(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.V()
u=B.K()
u.r=A.c.j(0.05).gp(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.H()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.V()
o=B.K()
o.r=b5.cx.j(0.4*((p-b6)/800)).gp(0)
b8.aU(new B.a5(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){l=w[m]
k=n.h(0,l.a)
j=n.h(0,l.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=j.c
f=g.a-36
g=g.b
e=$.V()
d=B.a([],o)
a0=new B.aI(e.r,A.ai,b4,b4,d)
d.push(new B.b0(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new B.lD(h+a1,i,f-a1,g,f,g))
a2=D.mP.h(0,k.b).d
a3=D.mP.h(0,j.b).d
e=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
e.b=A.ac
e.c=3
e.d=A.bG
d=B.a([a2.j(0.55),a3.j(0.55)],p)
g=B.rG(new B.t(h,i),new B.t(f,g))
e.sar(new B.a9(A.a3,A.a8,A.x,d,b4,b4).aA(0,new B.a5(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbB().a.snapshot()
b7.drawPath((a0.e=new B.cv(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.E((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=C.hnG(new B.t(i.a+36,i.b+0),new B.t(h.a-36,h.b),a5)
$.V()
h=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
h.r=A.c.j(0.35).gp(0)
h.z=H.ph
q=h.H()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
g.r=A.c.gp(0)
q=g.H()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.a9(0,D.IB)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new B.aI($.V().r,A.ai,b4,b4,B.a([],o))
o=a8.b
a0.D(new B.b0(t,o))
i=a9.b
a0.D(new B.lD(t+a1,o,w-a1,i,w,i))
i=B.K()
i.b=A.ac
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aJ(a0,i)
i=B.K()
i.r=A.c.gp(0)
b8.ae(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){b0=w[m]
o=b0.c
v=A.k.E((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dZ.aw(0,v)
$.V()
h=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
h.b=A.ac
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gp(0)
q=h.H()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){b1=w[m]
v=A.k.E((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=B.kv(o,i,A.dZ.aw(0,v))
h.toString
i=B.kv(o,i,A.dZ.aw(0,A.k.E(v-0.35,0,1)))
i.toString
$.V()
o=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
o.c=5
o.d=A.bG
g=b1.c
f=B.a([g.j(0),g],p)
e=B.rG(i,h)
o.sar(new B.a9(A.a3,A.a8,A.x,f,b4,b4).aA(0,new B.a5(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.H()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
i.r=A.c.gp(0)
q=i.H()
b7.drawCircle(o,h,6,q)
q.delete()
i=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
i.r=g.j(0.5*(1-v)).gp(0)
i.z=A.lI
q=i.H()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){a4=w[m]
v=A.k.E((b6-a4.f)/a4.e,0,1)
o=a4.a
$.V()
i=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
i.r=a4.c.j(1-v).gp(0)
q=i.H()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){j=w[m]
o=j.a
$.V()
i=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.lI
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
i.sar(new B.c0(V.xd,0.5,A.x,b4,0,B.a([A.c,h],p),b4,b4).aA(0,B.bX(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,B.M)(b5),++m){a6=b5[m]
v=A.k.E((b6-a6.d)/1000,0,1)
t=1-v
b2=C.bhi(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a5(b8,new B.t(t.a-o/2,t.b-(40+60*v+p.gbc(p)/2)))}for(b5=new B.dr(n,n.r,n.e);b5.C();)b3.cgx(b8,b5.d,b6)
b7.restore()},
cgx(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mP.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.E(1-(f-w)/520,0,1)
u=B.bN(e.c,64,64)
t=B.bz(u,A.iB)
s=t.eS(A.cv)
$.V()
r=B.K()
r.r=A.w.j(0.55).gp(0)
r.z=A.mQ
d.aD(s,r)
if(v>0){s=t.ct(6)
r=B.K()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.zs
d.aD(s,r)}s=t.eS(A.cH)
r=B.K()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.aD(s,r)
r=B.K()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sar(new B.a9(A.b3,A.b6,A.x,B.a([s,p],x.O),j,j).aA(0,u))
d.aD(t,r)
r=B.K()
r.b=A.ac
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aD(t,r)
r=h.b
p=e.c
o=C.bhi(B.l1(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aF(0,new B.t(s/2,r.gbc(r)/2)))
n=C.bhi(h.a,11,A.c,j,j,A.H)
n.a5(d,e.c.a9(0,new B.t(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.ayN[A.o.F(e.d,6)]:j
h=h.c
if(h===D.qM){s=e.c.a9(0,new B.t(0,62))
r=B.K()
r.r=D.azp[A.o.F(e.d,6)].gp(0)
d.ae(s,5,r)}else if(m!=null){l=C.bhi(m,9.5,A.aB,j,j,A.O)
l.a5(d,e.c.a9(0,new B.t(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bhi(m,9.5,A.aB,j,j,A.O)
l.a5(d,e.c.a9(0,new B.t(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xa)k.b1P(d,e.c.aF(0,D.IB),q)
k.b1P(d,e.c.a9(0,D.IB),q)},
b1P(d,e,f){var w
$.V()
w=B.K()
w.r=A.bZ.gp(0)
d.ae(e,9,w)
w=B.K()
w.b=A.ac
w.c=2.2
w.r=f.gp(0)
d.ae(e,9,w)
w=B.K()
w.r=A.c.gp(0)
d.ae(e,3.5,w)},
av(d){return!0}}
C.aMi.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.blF.prototype={}
C.Q8.prototype={
gY(d){return this.d}}
C.Wh.prototype={
U(){var w=B.a([],x.g4),v=B.a([],x.ed)
return new C.bkM(new B.cz(null,x.z),w,v,A.cW,A.bE,D.LR,null,null)}}
C.bkM.prototype={
b_x(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.E(A.k.bm((1-d.b/(B.aH(w,null,x.l).w.a.b*0.7))*10),0,9)
u=D.d2_[A.o.F(v,5)]+12*A.o.an(v,5)+12
switch(t.z){case"glow":C.q0("synth",u,420,0.3)
break
case"rainbow":C.q0("bell",u,700,0.35)
break
case"stars":C.q0("pluck",u+12,400,0.4)
break
case"sparks":E.dX(2400+t.r.au(2000),"",60,0,0.18,"noise")
break
default:E.dX(110+t.r.au(60),"",140,0,0.22,"noise")}},
cag(d){return this.b_x(d,!1)},
a_(){var w,v=this
v.a2()
w=v.rU(new C.eAm(v))
w.hj(0)
v.w!==$&&B.aP()
v.w=w},
t(){var w=this.w
w===$&&B.c()
w.t()
this.bwv()},
gb1k(){var w=this.Q
return w<0?new N.vN(1,A.k.F(this.y*0.18,360),0.85,1).m1():D.Rh[w]},
aSj(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb1k(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=B.ar(A.bI,A.aw,v.aj())
m.toString
j.push(new C.Q8(new B.t(u+(q-0.5)*p,t),new B.t((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.aj()*0.4),l.y,700+v.au(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.aj()*200
n=B.ar(k,A.c,v.aj()*0.6)
n.toString
j.push(new C.Q8(d,new B.t(q*o,p*o),n,1.5+v.aj()*3,l.y,600+v.au(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.aj()*40
j.push(new C.Q8(d,new B.t(q*o,p*o),k,1.2+v.aj()*1.8,l.y,500))}}},
aZq(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb1k()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=B.a([],x.g)
r.ax=new C.blF(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aSj(e)
r.b_x(e,!0)
r.m(new C.ezY())},
aZp(){this.ax=null
this.m(new C.ezX())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([B.aJ(n,n,n,n,D.qk,n,n,n,new C.eA6(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=B.a([B.b4(n,n,n,new C.bs9(k,o.f,o.y,o.at,n),A.ax)],m)
if(!o.ay&&k.length===0)j.push(D.b7S)
k=B.aB(A.cc,new B.an(A.a_,n,A.b1,A.t,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eA7(o),new C.eA8(o),new C.eAc(o),n,n,n,n,n,n,n,n,n,new C.eAd(o),new C.eAe(o),n,n,n,!1,A.a4)
j=B.a([],m)
for(w=0;w<5;++w){v=D.d_9[w]
j.push(new C.f4(v.b,o.z===v.a,new C.eAf(o,v),v.c,A.c8,n))}u=B.a([new C.Fs(A.c,o.Q<0,new C.eAg(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new C.Fs(D.Rh[t],o.Q===t,new C.eAh(o,t),!1,n))
s=o.as
s=C.lS(A.c8,A.o.u(A.k.V(s)),"Size",36,4,new C.eAi(o),s)
r=o.ch
q=r?A.ut:P.Cj
q=B.a([new C.f4("Sound",r,new C.eAj(o),q,A.c8,n),new C.j7(A.rs,"Undo",new C.eA9(o),A.c,n),new C.j7(D.O2,"Clear",new C.eAa(o),A.cs,n)],m)
for(w=0;w<4;++w){p=D.dfK[w]
q.push(new C.Fs(p,o.at.A(0,p),new C.eAb(o,p),!1,n))}return C.oy(A.c8,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new B.eG(k,o.d),"SPARK PAINTER",B.x(B.a([new C.ho(j,"BRUSH",n),new C.ho(u,"COLOUR",n),s,new C.ho(q,n,n)],m),A.m,n,A.e,A.P,0,A.p))}}
C.bs9.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.V()
w=B.K()
v=a4.e
w.r=v.gp(v)
a6.aU(new B.a5(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.M)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.V()
o=B.a([],t)
n=new B.aI(p.r,A.ai,a5,a5,o)
o.push(new B.b0(A.d.gI(q).a,A.d.gI(q).b))
for(p=B.S(q),m=p.k("jw<1>"),l=new B.jw(q,1,a5,m),l.pd(q,1,a5,p.c),l=new B.bS(l,l.gL(0),m.k("bS<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new B.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.by(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gI(q)
$.V()
p=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
p.r=r.c.gp(0)
j=p.H()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.V()
q=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
q.b=A.ac
q.d=A.bG
q.e=A.dS
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new B.hC(A.G,p)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new B.cv(n.gbB().a.snapshot()):q).a,j)
j.delete()
q=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
q.b=A.ac
q.d=A.bG
q.e=A.dS
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new B.cv(n.gbB().a.snapshot()):q).a,j)
j.delete()
q=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
q.b=A.ac
q.d=A.bG
q.e=A.dS
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new B.cv(n.gbB().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new N.vN(1,A.o.F(i*5,360),0.85,1).m1()
o=q[i-1]
m=q[i]
$.V()
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.c=p
l.d=A.bG
l.r=h.gp(0)
j=l.H()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,B.M)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gI(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new N.vN(1,A.o.F(a3*23,360),0.7,1).m1():l
a4.c7q(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,B.M)(w),++s){a0=w[s]
e=A.k.E((t-a0.e)/a0.f,0,1)
q=a0.a
$.V()
p=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=Q.RM
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c7q(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.V(),o=B.a([],x.v),n=new B.aI(p.r,A.ai,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new B.b0(r,q)
o.push(r)
q=n.f
if(q!=null)r.by(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new B.ap(r,q)
o.push(r)
q=n.f
if(q!=null)r.by(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.D(new B.bv())
$.V()
p=B.K()
p.r=h.j(0.4).gp(0)
p.z=A.lI
d.aJ(n,p)
p=B.K()
p.r=h.gp(0)
d.aJ(n,p)},
av(d){return!0}}
C.Ws.prototype={
U(){return new C.aEP(new B.cz(null,x.z),new B.as(new B.bb("NGMY",A.b4,A.aO),$.ax()),null,null)}}
C.aEP.prototype={
gJ_(){var w,v=this,u=v.e
if(u===$){w=B.bl(null,A.q4,null,1,null,v)
w.cM(0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
a_(){this.a2()
var w=this.gJ_()
w.df()
w.dR$.M(0,this.gbYF())},
bYG(){var w,v,u,t,s,r,q,p=this,o=p.gJ_().x
o===$&&B.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.me:new B.mj(w)).gL(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dX(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dX(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
C.q0(s,D.cTf[A.o.F(t,8)]+12,450,0.35)}}p.Q=o},
t(){this.gJ_().t()
var w=this.f
w.T$=$.ax()
w.P$=0
this.bwA()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=B.a(["\u2026"],x.s)
else{h=new B.mj(h)
w=B.C(h,B.a6(h).k("J.E"))}v=D.Rh[k.w]
h=x.p
u=B.a([B.aJ(j,j,j,j,D.qk,j,j,j,new C.eGv(k,d),j,j,j,j,"Share",j)],h)
t=B.m(26)
s=D.ayO[k.y]
s=B.bx(t,B.c1(B.at(B.c9(k.gJ_(),new C.eGw(k,w,v),j),j,j,j),new B.o(j,j,j,j,j,new B.a9(A.ay,A.aD,A.x,s,j,j),A.n),A.bf),A.aq)
t=A.c.j(0.06)
t=B.aN(j,A.X,!1,j,!0,A.t,j,B.aO(),i,j,j,j,j,j,2,B.bs(j,new B.b5(4,B.m(14),A.a0),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,H.DV,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ak,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new C.eGx(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.fO,!0,A.a6,j,A.ao,j,j,j,j)
i=B.a([],h)
for(r=0;r<7;++r){q=D.cBA[r]
i.push(new C.f4(q.b,k.r===q.a,new C.eGy(k,q),j,A.bI,j))}p=B.a([],h)
for(o=0;o<8;++o)p.push(new C.Fs(D.Rh[o],k.w===o,new C.eGz(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.ut:P.Cj
l=B.a([new C.f4(m,n,new C.eGA(k),l,A.bI,j)],h)
n=B.a([],h)
for(o=0;o<5;++o)n.push(new C.Fs(D.ayO[o][0],k.y===o,new C.eGB(k,o),!1,j))
n.push(A.bo)
n.push(new C.j7(A.od,"Replay",new C.eGC(k),A.c,j))
m=k.x
return C.oy(A.bI,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new B.D(A.bB,new B.eG(s,k.d),j),"TITLE ANIMATOR",B.x(B.a([t,A.N,new C.ho(i,"MOVE",j),new C.ho(p,"COLOUR",j),new C.ho(l,"SOUND",j),new C.ho(n,"BACK",j),C.lS(A.bI,A.o.u(A.k.V(m)),"Size",96,28,new C.eGD(k),m)],h),A.m,j,A.e,A.P,0,A.p))},
c0t(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=B.a([new B.cS(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
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
if(u&&(e&1)===0)w=A.bc
else w=u?A.c8:h
break
case"zoom":t=A.k.E(g*1.4-q*0.5,0,1)
n=A.lo.aw(0,t)
w=h
m=t
break
case"rainbow":w=new N.vN(1,A.k.F(g*360+e*40,360),0.75,1).m1()
A.d.a8(p)
p.push(new B.cS(w.j(0.7),A.J,18))
break
default:w=h}return B.d6(B.dJ(B.ea(A.A,B.d(d,r,r,r,r,r,r,B.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new B.t(l,o)),m)}}
C.aMr.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.aMw.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.ed.prototype={}
C.tB.prototype={
aqs(d,e,f,g){var w=this
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
C.aaq.prototype={}
C.abw.prototype={}
C.a4y.prototype={
bdI(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.he()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new C.aaq(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c3A(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bt(w,new C.bN3())},
ak5(d,e,f,g){var w="p"+this.c++,v=new C.tB(w,e,f,g)
v.aqs(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bt(this.b,new C.bNe(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cHP(d,e,f,g,h){return A.d.b3(this.b,new C.bN9(e,f,g,h))},
akP(d,e,f,g){var w
if(d===f||this.cHP(0,d,e,f,g))return null
w=new C.abw(d,e,f,g)
this.b.push(w)
return w},
aAN(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zL(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
anw(d){return this.LP(d)&&!d.x&&d.cx>this.zL(d)},
b6b(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
LP(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c7H(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.zr.h(0,v)
if(w!=null)return w.a
return 100},
vf(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c3A(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.S(v).k("Z<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.M)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Z(v,new C.bNf(a2),t).cL(0,0,new C.bNg(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.T(x.N,u)
n=new C.bNi(o)
m=B.a([],x.t)
l=new C.bNh(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.M)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.M)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.T(u,u)
f=new C.bNk(g,l,n)
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
a2.b67(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zL(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b67(e,d,w,!0)
a2.bNQ(a4)},
b67(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.T(x.N,b3),b5=new C.bN5(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bN4(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.M)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bN7(B.T(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.M)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.c2(b7,0,!1,b3)
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
if(h)B.b8(B.dI(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c2(b7,0,!1,b3)
a0=B.c2(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.M)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b6b(t)*(1+t.CW))
a4=b2.aAN(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c7H(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bR1(e,a0,b8)
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
bR1(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.c2(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=B.c2(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bNQ(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.M)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aAN(o)/a1.b6b(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zL(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bFU(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bdI(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tT(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.tT(o,"The "+$.qo().h(0,n).b+" got "+A.k.ac(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tT(o,"More than 1.5 amps went through the "+$.qo().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tT(o,"The regulator had to turn "+A.k.ac(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.ac(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tT(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.zr.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qo().h(0,n).b
l=f.b
l=l===A.k.je(l)?""+A.k.V(l):B.w(l)
g=f.c
g=g===A.k.je(g)?""+A.k.V(g):B.w(g)
a1.tT(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ac(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eYD.q(0,n)){m=o.fx>0?A.k.E((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.E(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tT(o,"The bulb got "+A.k.ac(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.E((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tT(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.E(j/14,0,1)
break
case"motor":n=A.k.E(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.E(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tT(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.E(i/1,0,1)
if(!o.x&&i>1)a1.tT(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tT(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.E(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tT(o,"The capacitor was charged to "+A.k.ac(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bFU(d){return A.d.b3(this.a,new C.bN2(d))},
tT(d,e){var w
d.x=!0
d.ay=e
this.bdI(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bin(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aH_(d){var w=d.b
return D.aOZ.q(0,w)||D.zr.ai(0,w)||w==="buck"||w==="regulator"},
bf8(d){var w,v=!0
if(!this.LP(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.zr.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
UT(d,e){var w=this.b
return new B.Z(w,new C.bNm(d,e),B.S(w).k("Z<1>")).gL(0)},
CA(d){var w,v
if(d.x)return!1
w=d.b
if(D.zr.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bde(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qo().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aH_(d)||i.CA(d))return null
w=i.UT(d,0)
v=i.UT(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.S(u).k("Z<1>")
s=B.C(new B.Z(u,i.gcQj(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.je(r)?""+A.k.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ac(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.zr.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aH4("battery"),o=J.aV(t.a),t=new B.f5(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.UT(n,0)+i.UT(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aH4("switch"),o=J.aV(t.a),t=new B.f5(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qo().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zL(k))return"The "+$.qo().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ac(k.cx,2)+" amps, but it can only give about "+A.k.ac(i.zL(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b3(u,new C.bNa(i,d))
h=q.b
h=h===A.k.je(h)?""+A.k.V(h):B.w(h)
u=A.k.ac(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ac(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ac(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aH4(d){var w=this.a
return new B.Z(w,new C.bNd(d),B.S(w).k("Z<1>"))},
aGE(d){return this.aH4(d).b3(0,new C.bNc(0.35))},
pV(d,e){return A.d.b3(this.a,new C.bNb(e))}}
C.aiN.prototype={
a5(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.V()
w=B.K()
w.r=F.B3.gp(0)
c0.aU(new B.a5(0,0,b8,b9),w)
v=B.K()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,B.M)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.ma.ai(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.ma.ai(0,h.b)?(h.ch-1)*38:0
b4.cEH(c0,new B.t(k*b6+j*(42+i),l*b7),new B.t(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=C.hAt(q.a,q.b,c1)
q=b4.e
q.toString
$.V()
p=B.K()
p.r=A.ae.gp(0)
p.c=3
p.d=A.bG
c0.br(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,B.M)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.V()
g=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
g.r=D.aez.j(A.k.E(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.zs
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bq(w.save())
w.translate(j,i)
h=A.k.E(A.lo.aw(0,A.k.E(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.chw(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zL(a0)){g=j+0
f=i+-40
e=Math.sin(r.d*10)
a2=$.V().r
a3=B.a([],k)
a4=new B.aI(a2,A.ai,b5,b5,a3)
a5=f-13
a3.push(new B.b0(g,a5))
a6=g+13
a7=f+10
a3.push(new B.ap(a6,a7))
a8=g-13
a3.push(new B.ap(a8,a7))
a3.push(new B.bv())
a3=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a3.r=A.aw.j(0.65+0.35*e).gp(0)
s=a3.H()
e=a4.gbB().a.snapshot()
w.drawPath((a4.e=new B.cv(e)).a,s)
s.delete()
e=B.a([],k)
a2=new B.aI(a2,A.ai,b5,b5,e)
e.push(new B.b0(g,a5))
e.push(new B.ap(a6,a7))
e.push(new B.ap(a8,a7))
e.push(new B.bv())
e=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
e.b=A.ac
e.c=1.6
e.r=A.c.gp(0)
s=e.H()
e=a2.gbB().a.snapshot()
w.drawPath((a2.e=new B.cv(e)).a,s)
s.delete()
a9=new B.kz(new B.eH("!",b5,b5,A.cY,b5,b5,b5,b5,b5,b5,new B.F(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a6,A.c5,new B.km(1),b5,b5,b5,b5,A.c4,b5)
a9.eI()
a9.a5(c0,new B.t(g+-3,f+-8))}if(!a0.x)g=(D.aOZ.q(0,h)||D.zr.ai(0,h)||h==="buck"||h==="regulator")&&!r.CA(a0)&&r.UT(a0,0)+r.UT(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.V()
g=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
g.r=A.aE.gp(0)
s=g.H()
w.drawCircle(j,i,10,s)
s.delete()
a9=new B.kz(new B.eH("!",b5,b5,A.cY,b5,b5,b5,b5,b5,b5,new B.F(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a6,A.c5,new B.km(1),b5,b5,b5,b5,A.c4,b5)
a9.eI()
a9.a5(c0,new B.t(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.ma.ai(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.V()
j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
j.r=F.B3.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
j.b=A.ac
j.c=2.4
j.r=(i&&r.bf8(a0)?A.cs:A.ae).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bf8(a0)){a9=new B.kz(new B.eH("+",b5,b5,A.cY,b5,b5,b5,b5,b5,b5,new B.F(!0,A.cs,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a6,A.c5,new B.km(1),b5,b5,b5,b5,A.c4,b5)
a9.eI()
a9.a5(c0,new B.t(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,B.M)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.E(b1.r/0.8,0,1)
j=B.ar(I.Ma,F.Yk,b2)
j.toString
i=b1.f
$.V()
h=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
h.r=j.gp(0)
h.c=2.4
h.d=A.bG
s=h.H()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
i.r=j.j(0.35*b2).gp(0)
i.z=A.RN
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b3(q,new C.bHv())){b3=A.d.cL(q,0,new C.bHw())
$.V()
b7=B.K()
b7.r=D.bbL.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aU(new B.a5(0,0,b8,b9),b7)
a9=B.fS(b5,b5,b5,b5,D.f8D,A.a6,A.c5,b5,A.dP,A.c4)
a9.qR(b6-24)
a9.a5(c0,new B.t(12,10))}},
qy(d,e,f,g,h){var w=null,v=B.fS(w,w,w,w,B.cX(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a6,A.c5,w,A.dP,A.c4)
v.eI()
v.a5(d,f)},
cEH(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new B.aI($.V().r,A.ai,null,null,B.a([],x.v))
d.D(new B.b0(a1.a,a1.b))
w=C.hsR(a1,a2,a3)
d.D(new B.c8(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aT,D.aez,A.k.E(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aR,A.aT,A.k.E(r*1.2,0,1))
u.toString
o=u}else o=A.bl
u=B.K()
u.b=A.ac
u.c=a4?7:5
u.d=A.bG
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aJ(d,u)
u=B.K()
u.b=A.ac
u.c=2.4
u.d=A.bG
u.r=(a4?A.c:o).gp(0)
a0.aJ(d,u)
if(q){n=new B.SQ(new B.tk(B.xi(d),!1,B.a([],x.f5))).gI(0)
m=40+A.k.E(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.ii()
i=t[u].b
i===$&&B.c()
if(!(j<i.a.length()/22))break
i=k.d
v.ii()
h=t[u].b
h===$&&B.c()
h=A.k.F(j*22+i*m*l,h.a.length())
v.ii()
i=t[u].b
i===$&&B.c()
i=i.a.length()
v.ii()
g=t[u].b
g===$&&B.c()
f=A.k.F(h+i,g.a.length())
v.ii()
i=t[u].H2(f).a
h=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
P8(d,e,f,g){var w,v,u,t
$.V()
w=B.K()
v=g?A.b3:A.a3
u=g?A.b6:A.a8
t=B.ar(e,A.w,0.3)
t.toString
w.sar(new B.a9(v,u,A.x,B.a([e,f,e,t],x.O),A.Hv,null).aA(0,d))
return w},
aws(d,e,f){return this.P8(d,e,f,!0)},
c3a(d,e){return this.P8(d,A.bl,A.ip,e)},
ahF(d,e){var w,v,u
$.V()
w=B.K()
w.sar(D.aNr.aA(0,B.bX(e,4.2)))
d.ae(e,4.2,w)
w=e.a9(0,D.edB)
v=e.a9(0,D.edK)
u=B.K()
u.r=A.e5.gp(0)
u.c=1.2
d.br(w,v,u)},
chw(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.V(),c0=B.K()
c0.sar(D.c_3.aA(0,D.eVk))
c0.c=3.4
c0.d=A.bG
w=B.K()
w.r=A.w.j(0.45).gp(0)
w.z=H.ph
c1.dX(D.eV8,w)
if(c3){w=B.bz(D.eVi,A.kK)
v=B.K()
v.r=A.c.j(0.14).gp(0)
c1.aD(w,v)}u=C.h8G(c2)
c1.br(new B.t(-u,0),D.efb,c0)
c1.br(D.ecm,new B.t(u,0),c0)
t=c2.x
w=c2.b
s=D.ma.ai(0,w)&&c2.ch!==1
if(s){J.bq(c1.a.save())
c1.bX(0,c2.ch)}switch(w){case"battery":b3.bCI(c1,c2)
break
case"solar":r=B.bz(D.eVb,A.iC)
c1.aD(r,b3.P8(new B.a5(r.a,r.b,r.c,r.d),A.dv,A.bO,!1))
b9=B.K()
w=B.ar(D.bfs,A.d0,0.25+0.55*c2.f)
w.toString
v=B.ar(D.boa,A.mw,0.3+0.4*c2.f)
v.toString
b9.sar(new B.a9(A.ay,A.aD,A.x,B.a([w,v],x.O),b4,b4).aA(0,D.a7j))
c1.aU(D.a7j,b9)
q=B.K()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(b9=c1.a,p=1;p<6;++p){w=-34+p*68/6
o=q.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}for(p=1;p<4;++p){w=-18+p*9
o=q.H()
b9.drawLine.apply(b9,[-34,w,34,w,o])
o.delete()}for(p=0;p<6;++p){w=-34+(p+0.5)*68/6
$.V()
v=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
v.r=A.cr.j(0.5).gp(0)
v.c=0.6
o=v.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new B.aI($.V().r,A.ai,b4,b4,B.a([],x.v))
b9.D(new B.b0(-34,18))
b9.D(new B.ap(-6+40*c2.f,-18))
b9.D(new B.ap(4+40*c2.f,-18))
b9.D(new B.ap(-24,18))
b9.D(new B.bv())
w=B.K()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aJ(b9,w)
w=c2.f
b9=B.K()
b9.r=A.dR.j(0.9).gp(0)
c1.ae(D.ecs,4+4*w,b9)
break
case"crank":n=B.bz(D.eUX,A.hu)
c1.aD(n,b3.aws(new B.a5(n.a,n.b,n.c,n.d),A.bs,A.bL))
b9=B.K()
b9.sar(D.aNs.aA(0,B.bX(A.J,12)))
c1.ae(A.J,12,b9)
m=new B.t(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.K()
b9.r=A.cr.gp(0)
b9.c=5
b9.d=A.bG
c1.br(A.J,m,b9)
b9=B.K()
b9.sar(D.eo2.aA(0,B.bX(m,7)))
c1.ae(m,7,b9)
b3.ahF(c1,D.ef3)
b3.ahF(c1,D.ece)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aI(b9,A.ai,b4,b4,B.a([],w))
v.D(new B.b0(-3,24))
v.D(new B.ap(3,24))
v.D(new B.ap(1.5,0))
v.D(new B.ap(-1.5,0))
v.D(new B.bv())
l=B.K()
l.r=A.bO.gp(0)
c1.aJ(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.bq(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=B.a([],w)
j=new B.aI(b9,A.ai,b4,b4,l)
l.push(new B.b0(0,-2))
l.push(new B.c8(6,-14,2,-30))
l.push(new B.c8(-2,-14,0,-2))
l.push(new B.bv())
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.r=A.c.gp(0)
o=l.H()
l=j.gbB().a.snapshot()
v.drawPath((j.e=new B.cv(l)).a,o)
o.delete()
v.restore()}b9=B.K()
b9.sar(D.enK.aA(0,B.bX(A.J,4.5)))
c1.ae(A.J,4.5,b9)
break
case"switch":n=B.bz(D.eV3,A.rR)
b9=B.K()
b9.sar(D.apP.aA(0,new B.a5(n.a,n.b,n.c,n.d)))
c1.aD(n,b9)
b3.ahF(c1,D.SE)
b3.ahF(c1,D.aIf)
i=c2.w?D.aIf:G.aI5
b9=B.K()
b9.r=A.au.gp(0)
b9.c=6
b9.d=A.bG
c1.br(D.SE,i,b9)
b9=B.K()
b9.r=(c2.w?A.bm:A.bO).gp(0)
b9.c=4
b9.d=A.bG
c1.br(D.SE,i,b9)
b9=B.kv(D.SE,i,0.85)
b9.toString
w=B.K()
w.r=A.aw.gp(0)
c1.ae(b9,5,w)
break
case"fuse":h=B.bz(D.aO2,D.aNw)
b9=B.K()
b9.r=A.fi.j(0.25).gp(0)
c1.aD(h,b9)
b9=B.K()
b9.b=A.ac
b9.c=1.4
b9.r=A.aB.gp(0)
c1.aD(h,b9)
if(!t){b9=B.K()
b9.c=1.6
b9.r=B.ar(A.bO,A.cZ,c2.fx).gp(0)
c1.br(D.aIx,D.aIc,b9)}else{b9=B.K()
b9.c=1.6
b9.r=A.bU.gp(0)
c1.br(D.aIx,D.efu,b9)
b9=B.K()
b9.c=1.6
b9.r=A.bU.gp(0)
c1.br(D.eda,D.aIc,b9)
b9=B.K()
b9.r=A.dM.gp(0)
c1.ae(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=B.bN(new B.t(I.je[g]*22,0),20,9)
w=B.bz(f,A.hM)
o=b3.P8(f,A.d9,A.oM,!0).H()
b9.drawRRect(B.eL(w),o)
o.delete()}break
case"pot":b9=B.K()
b9.sar(D.enV.aA(0,B.bX(A.J,21)))
c1.ae(A.J,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
d.r=A.aB.gp(0)
d.c=1.2
o=d.H()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=B.K()
b9.sar(D.enI.aA(0,B.bX(A.J,13)))
c1.ae(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=B.K()
j.r=A.aT.gp(0)
j.c=3
j.d=A.bG
c1.br(new B.t(b9*3,w*3),new B.t(v*12,l*12),j)
break
case"resistor":a1=B.bz(D.aO2,D.aNw)
b9=B.K()
b9.sar(D.c2o.aA(0,new B.a5(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=x.O
a2=B.G([47,B.a([B.b1(b5),B.b1(b6),A.w],b9),100,B.a([B.b1(b7),A.w,B.b1(b7)],b9),220,B.a([B.b1(b8),B.b1(b8),B.b1(b7)],b9),470,B.a([B.b1(b5),B.b1(b6),B.b1(b7)],b9),1000,B.a([B.b1(b7),A.w,B.b1(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
v.r=a3[p].gp(0)
o=v.H()
b9.drawRect(B.bQ(new B.a5(w,-9,w+4.5,9)),o)
o.delete()}b9=B.K()
b9.r=A.aT.gp(0)
c1.aU(D.eVv,b9)
b9=c2.r
b3.qy(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.eex,A.ae,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.K()
v.r=A.dR.j(0.55*w).gp(0)
v.z=A.zs
c1.ae(G.uT,34,v)}n=B.bN(D.ebh,12,18)
c1.aD(B.bz(n,A.hM),b3.P8(n,A.bl,A.e2,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.r=A.dp.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=B.K()
if(t)v=A.WX
else{v=B.ar(A.e2,A.hQ,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.Fb
else{l=B.ar(A.dv,A.dR,c2.fx)
l.toString}w.sar(new B.c0(A.tf,0.5,A.x,b4,0,B.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aA(0,B.bX(A.rN,17)))
c1.ae(A.rN,17,w)
w=B.K()
w.b=A.ac
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ae(A.rN,17,w)
b9=b9.r
w=x.v
l=new B.aI(b9,A.ai,b4,b4,B.a([],w))
l.D(new B.b0(-9,-12))
l.D(new B.c8(-12,-4,-9,0))
v=B.K()
v.b=A.ac
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aJ(l,v)
v=B.K()
v.r=A.cU.gp(0)
v.c=1.4
c1.br(D.efo,D.efq,v)
v=B.K()
v.r=A.cU.gp(0)
v.c=1.4
c1.br(D.ed2,D.ed5,v)
w=B.a([],w)
a4=new B.aI(b9,A.ai,b4,b4,w)
a4.D(new B.b0(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new B.ap(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.by(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.V()
b9=B.K()
b9.b=A.ac
b9.c=1.8
if(t)w=A.aW
else{w=B.ar(A.dv,D.bgq,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aJ(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.K()
v.r=A.aw.j(0.6*w).gp(0)
v.z=D.dvq
c1.ae(A.rN,30,v)}w=B.K()
w.r=A.e2.gp(0)
w.c=2.4
c1.br(D.efw,D.efv,w)
w=B.K()
w.r=A.e2.gp(0)
w.c=2.4
c1.br(D.edc,D.edb,w)
b9=b9.r
w=x.v
a6=new B.aI(b9,A.ai,b4,b4,B.a([],w))
a6.D(new B.b0(-12,8))
a6.D(new B.ap(-12,-6))
a6.D(new B.c8(0,-26,12,-6))
a6.D(new B.ap(12,8))
a6.D(new B.bv())
v=B.K()
if(t)l=A.j7
else{l=B.ar(A.ev,D.bi2,c2.fx)
l.toString}if(t)j=A.kB
else{j=B.ar(A.kz,A.aw,c2.fx)
j.toString}v.sar(new B.a9(A.ay,A.aD,A.x,B.a([l,j],x.O),b4,b4).aA(0,D.eUo))
c1.aJ(a6,v)
v=B.K()
v.b=A.ac
v.c=1.2
v.r=A.jK.gp(0)
c1.aJ(a6,v)
v=B.K()
v.r=A.el.gp(0)
c1.aU(D.eUu,v)
w=new B.aI(b9,A.ai,b4,b4,B.a([],w))
w.D(new B.b0(-7,-4))
w.D(new B.c8(-6,-12,0,-15))
b9=B.K()
b9.b=A.ac
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aJ(w,b9)
break
case"motor":a7=new B.a5(-28,-14,20,14)
c1.aD(B.bz(a7,A.i2),b3.aws(a7,A.al,A.aM))
b9=B.K()
b9.r=A.cp.gp(0)
c1.aU(D.eU1,b9)
b9=B.K()
b9.r=A.cr.gp(0)
c1.aU(D.eU3,b9)
b9=c1.a
J.bq(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bq(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=B.bN(G.aI0,15,7)
v=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
v.r=A.cZ.j(0.9).gp(0)
o=v.H()
b9.drawOval(B.bQ(w),o)
o.delete()
b9.restore()}w=B.K()
w.r=A.au.gp(0)
c1.ae(A.J,3,w)
b9.restore()
b3.qy(c1,"M",D.ef2,A.au,14)
break
case"buzzer":a8=B.bN(A.J,42,42)
b9=B.K()
b9.sar(D.enZ.aA(0,a8))
c1.dX(a8,b9)
b9=B.K()
b9.r=A.w.gp(0)
c1.ae(A.J,6,b9)
b9=B.K()
b9.b=A.ac
b9.c=1.4
b9.r=A.aZ.gp(0)
c1.ae(A.J,6,b9)
b3.qy(c1,"+",D.eeW,A.ae,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.F(w.d*14,5):0
l=B.bX(A.J,24+k*5+l)
j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
j.b=A.ac
j.c=2
j.r=A.c8.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[B.bQ(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=B.bz(D.eV_,A.i2)
w=B.K()
w.sar(D.c02.aA(0,new B.a5(n.a,n.b,n.c,n.d)))
c1.aD(n,w)
w=B.a([],x.v)
a9=new B.aI(b9.r,A.ai,b4,b4,w)
a9.D(new B.b0(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new B.c8(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.by(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.V()
w=B.K()
w.b=A.ac
w.c=10
w.r=D.bh6.j(0.5*b9).gp(0)
w.z=A.lI
c1.aJ(a9,w)}$.V()
b9=B.K()
b9.b=A.ac
b9.c=3.2
b9.d=A.bG
b9.r=B.ar(A.lX,R.M2,c2.fx).gp(0)
c1.aJ(a9,b9)
break
case"capacitor":a7=new B.a5(-16,-22,16,18)
b9=B.bz(a7,A.i2)
w=B.K()
w.sar(D.bZW.aA(0,a7))
c1.aD(b9,w)
w=B.K()
w.r=A.bO.gp(0)
c1.aU(D.eUD,w)
for(p=0;p<4;++p){b0=new B.kz(new B.eH("\u2212",b4,b4,A.cY,b4,b4,b4,b4,b4,b4,new B.F(!0,A.au,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a6,A.c5,new B.km(1),b4,b4,b4,b4,A.c4,b4)
b0.eI()
b0.a5(c1,new B.t(-14,-18+p*9))}b1=new B.a5(-16,-24,16,-17)
c1.aD(B.bz(b1,A.hM),b3.c3a(b1,!1))
b9=38*c2.fx
w=18-b9
$.V()
v=B.K()
v.r=A.bm.j(0.5).gp(0)
c1.aU(new B.a5(-3,w,11,w+b9),v)
b3.qy(c1,"1F",G.uT,A.c,11)
break
case"radio":a1=B.bz(D.a7j,A.hu)
b9=B.K()
b9.sar(D.c2E.aA(0,new B.a5(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=B.K()
b9.b=A.ac
b9.c=1.4
b9.r=A.oM.j(0.6).gp(0)
c1.aD(a1,b9)
b9=B.bz(D.eV0,A.iC)
w=B.K()
w.r=A.dJ.gp(0)
c1.aD(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
v.r=A.lX.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=B.K()
w.r=(c2.fx>0?A.h0:A.nU).gp(0)
c1.aU(D.eU7,w)
if(c2.fx>0){w=8+A.k.F(b3.b.d*7,18)
v=B.K()
v.r=A.bx.gp(0)
v.c=1.6
c1.br(new B.t(w,-13),new B.t(w,-3),v)}w=B.K()
w.sar(D.aNs.aA(0,B.bX(D.a6j,6)))
c1.ae(D.a6j,6,w)
w=B.K()
w.r=A.oM.gp(0)
c1.ae(D.ecl,4,w)
w=B.K()
w.r=A.e2.gp(0)
w.c=1.8
c1.br(D.eci,D.aIj,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=B.bX(D.aIj,4+k*5+A.k.F(w.d*8,5))
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.b=A.ac
l.c=1.4
l.r=A.o_.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[B.bQ(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=B.bz(D.eVa,A.i2)
v=B.K()
v.r=I.n9.gp(0)
c1.aD(w,v)
b2=B.bz(D.eV7,A.hM)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bq(b9.save())
b9.clipRRect(B.eL(b2),$.oR(),!0)
b9.translate(-33,-21)
E.h4M(c1,D.f0l,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.K()
b9.r=A.bm.gp(0)
c1.ae(D.ecy,1.6,b9)}else{w=B.K()
w.r=D.vI.gp(0)
c1.aD(b2,w)
b9=new B.aI(b9.r,A.ai,b4,b4,B.a([],x.v))
b9.D(new B.b0(-33,-21))
b9.D(new B.ap(-10,-21))
b9.D(new B.ap(-33,0))
b9.D(new B.bv())
w=B.K()
w.r=A.c.j(0.05).gp(0)
c1.aJ(b9,w)}b9=B.K()
b9.r=A.bs.gp(0)
c1.aU(D.eUt,b9)
break}C.icB(c1,c2,b3.b.d,b3.gc7I())
if(t)b3.qy(c1,"\u2716",D.efz,A.aw,14)
if(s)c1.a.restore()},
bCI(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new B.a5(-28,-13,28,13)
d.aD(B.bz(w,A.rR),m.aws(w,A.dv,A.j4))
v=new B.a5(-22,-13,22,13)
$.V()
u=B.K()
u.sar(D.apI.aA(0,v))
d.aU(v,u)
u=B.K()
u.r=A.dV.gp(0)
d.aU(D.eUN,u)
t=new B.a5(28,-5,34,5)
d.aD(B.bz(t,A.hi),m.P8(t,A.dv,A.ip,!0))
m.qy(d,"+",D.ec0,A.aT,11)
m.qy(d,"\u2212",D.ef4,A.ae,11)
m.qy(d,B.w(l===A.k.je(l)?A.k.V(l):l)+"V",D.eeL,A.aT,13)
if(l===1.5){u=B.K()
u.r=A.bz.gp(0)
d.aU(D.eUM,u)
u=e.as
s=B.K()
s.r=B.ar(A.aw,A.bm,u).gp(0)
d.aU(new B.a5(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qy(d,"FLAT",D.eew,A.cs,9)}if(l>2){u=B.K()
u.r=A.aZ.gp(0)
u.c=1
d.br(D.ebq,D.aHT,u)
m.qy(d,l>3?"3 cells":"2 cells",D.eeK,A.aB,8)}}else if(l<=9){r=new B.a5(-22,-17,22,17)
u=B.bz(r,A.rR)
$.V()
s=B.K()
s.sar(D.c2b.aA(0,r))
d.aD(u,s)
s=B.K()
s.r=A.cS.gp(0)
d.aU(D.eUO,s)
for(u=d.a,q=0;q<2;++q){p=F.az8[q]
s=p<0?5:3.6
o=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
o.sar(D.aNr.aA(0,B.bX(new B.t(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.qy(d,"9V",D.eeD,A.c,16)}else{r=new B.a5(-34,-16,34,16)
u=B.bz(r,A.iC)
$.V()
s=B.K()
s.sar(D.apI.aA(0,r))
d.aD(u,s)
s=B.K()
s.r=A.bI.gp(0)
d.aU(D.eV9,s)
for(u=d.a,q=0;q<2;++q){s=B.bz(B.bN(new B.t(F.a47[q],-20),8,10),A.hi)
o=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
o.r=A.cr.gp(0)
n=o.H()
u.drawRRect(B.eL(s),n)
n.delete()}m.qy(d,"+",D.ec9,A.aw,10)
m.qy(d,"12V",D.eeH,A.au,15)}},
av(d){return!0}}
C.mI.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=B.T(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.M)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.tB(o,r,q,p)
n.aqs(o,r,q,p)
k.push(n)
J.iv(s[4],new C.cnY(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.M)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.akP(m,u[1],l,u[3])}}}
C.aiL.prototype={
U(){var w=x.N
return new C.aiM(A.J,A.ax,B.T(w,x.gl),B.aX(w),$,A.bE,0,B.a([],x.X),null,null)}}
C.aiM.prototype={
aei(d){var w=this,v=w.as
if(v!=null)v.a3(0)
w.m(new C.bH9(w,d))
w.as=B.cL(A.ly,new C.bHa(w))},
t(){var w=this.as
if(w!=null)w.a3(0)
w=this.ch
if(w!=null)w.a3(0)
this.bsD()},
a01(d,e){return this.cfr(d,e)},
b0u(d){return this.a01(d,!1)},
cfr(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a01=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.rd:A.xY
p=d.b
w=3
return B.b(E.h54(s,r,p,d.ax<3.2,q,$.qo().h(0,p).b),$async$a01)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a01,v)},
cs7(d){var w=this,v=new B.U(Date.now(),0,!1),u=w.at.c4(0,d.a,new C.bHb()),t=J.cD(u)
t.M(u,v)
t.bt(u,new C.bHc(v))
if(t.gL(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a3(0)
w.a1l(d)
return}if(t.gL(u)===3){t=w.ch
if(t!=null)t.a3(0)
w.ch=B.cL(A.j9,new C.bHd(w,u,d))}},
a_I(d){return this.cdO(d)},
cdO(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a_I=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.idL(s,d.b,A.k.V(A.k.F(t.a.c.d*0.12,1)*100)),$async$a_I)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a_I,v)},
a1l(d){return this.cpH(d)},
cpH(d){var w=0,v=B.j(x.H),u=this,t
var $async$a1l=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(F.lv,null,new C.bH7(u,d),t,!0,!0,!1,A.jZ,!1,!1,x.H),$async$a1l)
case 2:return B.h(null,v)}})
return B.i($async$a1l,v)},
a_(){this.a2()
this.bfi()
this.p9()},
bfi(){this.a.c.e=new C.bHs(this)},
q3(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vf(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
r=D.ma.h(0,s.b)
if((r==null?null:r.b)!==D.zS)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.ay){u.M(0,s.a)
q.a01(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)E.dX(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)E.dX(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cW.aj()<0.5
else u=!1
if(u)E.dX(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){E.dX(900+A.cW.au(800),"",90,0,0.1,o)
if(A.cW.aj()<0.35)E.dX(300+A.cW.au(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cW.aj()<0.4
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
case"kettle":if(s.fx>0)u=A.cW.aj()<0.5
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
q.m(new C.bHt())},
b7x(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.M)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.ma.ai(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.z(p,n)
r=i}}}return s},
b1a(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.S(w).k("dx<1>"),w=new B.dx(w,v),w=new B.bS(w,w.gL(0),v.k("bS<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.ma.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cEI(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.M)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.ma.ai(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.ma.ai(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hsR(new B.t(k,n),new B.t(i,l),p)
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
aeg(){this.a.toString
this.m(new C.bGD())},
bpm(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.d49[v]
if(!A.d.b3(p.a.c.a,new C.bHu(u,w))){o=new B.t(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?L.ID:o
s=s?L.ID:o
q=t.ak5(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dX(1200,"",50,0,0.3,"tri")
p.aeg()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.R0[v].a)
u=w.length
t=u>8
s=t?A.d.ds(w,0,A.o.an(u+1,2)):w
r=t?A.d.fP(w,A.o.an(w.length+1,2)):A.X
q=n.a.d
if(q!=null){w=B.a6(q).k("cu<1>")
w=B.C(new B.cu(q,w),w.k("J.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.M)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b1_(s,!0))
n.a.toString
if(t)w.push(n.b1_(r,!0))
w.push(B.E(B.cC(new C.bHr(n,q,m)),1))
return B.x(w,A.m,null,A.e,A.j,0,A.p)},
b1_(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.M)(d),++v){u=d[v]
t=$.qo()
s=t.h(0,u).d.j(0.14)
r=new B.aQ(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aB(p,B.p(p,B.x(B.a([new B.y(t.h(0,u).c,p,A.A7,p,p,p,p,p,p,p,p,p),new B.y(t.h(0,u).b,p,A.nB,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.b8,A.j,0,A.p),A.f,p,p,new B.o(s,p,new B.bI(q,q,q,q),new B.bk(r,r,r,r),p,p,A.n),p,p,p,F.tU,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bGE(this,u),p,p,p,p,p,p,!1,A.a4))}return B.p(p,B.cq(m,p,A.h3,p,p,A.aN,!1),A.f,p,p,new B.o(F.B1,p,new B.bI(A.a0,A.a0,new B.ay(o,1,A.r,-1),A.a0),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aZx(d){var w=null,v=B.m(18)
return B.p(w,d,A.f,w,w,new B.o(F.adc,w,B.I(A.bz,A.r,1),v,w,w,A.n),w,w,w,w,F.aiL,w,w,w)},
chx(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qo().h(0,o),m=d.dy,l=d.fr,k=new C.bGX(q,n),j=B.d(n.c,p,p,p,p,p,p,A.JH,p,p,p),i=n.b,h=n.d,g=x.p
i=B.B(B.a([j,A.ab,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aJ(p,p,p,p,D.bR7,p,p,p,new C.bGK(q,d),p,p,p,p,"Remove part",A.cd),B.aJ(p,p,p,p,A.H_,p,p,p,new C.bGL(q),p,p,p,p,p,A.cd)],g),A.m,p,A.e,A.j,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,F.DW,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fhA,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ac(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ac(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ac(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.av,w,A.am,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.cs:A.aT,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bde(d)
if(v!=null){l=(d.x?A.aw:A.aE).j(0.14)
j=B.m(10)
i=B.I((d.x?A.aw:A.aE).j(0.5),A.r,1)
m.push(new B.D(A.ic,B.p(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.foa,p,p,p),A.f,p,p,new B.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cm,p,p,p),p))}if(C.h2Q(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new C.f4("CH "+t,d.at===u,new C.bGM(q,d,u),p,h,p))}l=B.bW(A.bD,l,A.bq,4,6)
l=B.a([A.am,l,A.av,B.d(q.a.c.CA(d)?"Showing: "+F.QC[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hj,p,p,p)],g)
if(q.a.c.CA(d))l.push(new C.j7(A.Gx,"Open big screen",new C.bGP(q,d),h,p))
A.d.v(m,l)}if(D.ma.ai(0,o)&&!C.h2Q(o)){l=B.a([A.am,B.d(q.a.c.CA(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hj,p,p,p)],g)
if(q.a.c.CA(d))l.push(new C.j7(A.Oj,"Open the "+$.qo().h(0,o).b,new C.bGQ(q,d),h,p))
A.d.v(m,l)}if(D.ma.ai(0,o))A.d.v(m,B.a([A.am,new C.j7(A.C9,"Make it bigger (or tap it 4 times)",new C.bGR(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ac(d.db,1)
if(q.a.c.CA(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.am,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ac(i,1)+" V",p,p,p,p,p,p,D.fir,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dlw[s]
j=r===A.k.je(r)?A.k.V(r):r
l.push(new C.f4(B.w(j)+" V out",d.e===r,new C.bGS(q,d,r),p,h,p))}i.push(new B.D(A.l_,B.bW(A.bD,l,A.bq,0,6),p))}if(o==="regulator")i.push(D.fGM)
A.d.v(m,i)}if(q.a.c.LP(d)&&!d.x){l=A.k.ac(d.cx,2)
j=A.k.ac(q.a.c.zL(d),2)
i=q.a.c
w=i.anw(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.anw(d)?A.cs:A.eo,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.m(4)
w=A.k.E(d.cx/q.a.c.zL(d),0,1)
i=q.a.c.anw(d)?A.aw:A.bm
m.push(new B.D(A.ic,B.x(B.a([l,A.cK,B.bx(j,B.lk(A.bz,p,p,5,p,w,new B.m5(i,x.x)),A.aq)],g),A.E,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.ic,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.fcd,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.daU[s]
j=r===1.5?"1.5 V (rechargeable)":B.w(r)+" V"
l.push(new C.f4(j,d.e===r,new C.bGT(q,d,r),p,h,p))}m.push(B.bW(A.bD,l,A.bq,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.d1s[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new C.f4(j,d.r===r,new C.bGU(q,d,r),p,h,p))}m.push(B.bW(A.bD,l,A.bq,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bGV(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bGW(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bGN(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bGO(d)))
if(o==="crank")m.push(D.fC9)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hj,p,p,p))
return q.aZx(new B.cT(D.b1r,B.cd(B.x(m,A.E,p,A.e,A.P,0,A.p),A.t,p,A.y,p,p,p,p,A.ag),p))}}
C.bb7.prototype={}
C.Vg.prototype={
U(){return new C.aDA(C.h8F(),new B.cz(null,x.gJ),B.aX(x.S))}}
C.aDA.prototype={
a_(){this.a2()
$.aW.bZ$.push(this)
this.aeh()},
aeh(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fy3(),$async$aeh)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.icY(t.d,r)
if(s!=null){t.m(new C.dUl(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$aeh,v)},
F1(){var w,v=this
if(!v.as)return
w=C.i3q(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bDQ(w)},
j9(d){if(d!==A.fC)this.F1()},
t(){$.aW.hN(this)
this.F1()
this.a1()},
c7K(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.S(v).k("Z<1>")
t=new B.Z(v,new C.dUu(q),u).gL(0)
s=new B.Z(v,new C.dUv(),u).gL(0)
r=new B.Z(v,w.gcTR(),u).gL(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.dUw(q,t,s,r))}if(A.o.F(q.w,45)===0)q.F1()
if(A.o.F(q.w,10)===0){w=q.f
$.ahZ()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.ahZ()[q.f].c.$1(q.d)){w.M(0,q.f)
C.J4("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.dUx())
q.F1()
w=q.c
w.toString
w=B.Xw(w)
if(w!=null)w.S(B.b3(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.ahZ()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.my,p,p,p,p,p,p,p,p,p,p))}},
agW(){var w=0,v=B.j(x.H),u=this,t
var $async$agW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.dUk(u),t,null,!0,!0,x.H),$async$agW)
case 2:return B.h(null,v)}})
return B.i($async$agW,v)},
aZw(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.m(12),t=B.I(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.p(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aB(w,B.hc(new B.a7(40,38,new B.an(A.a_,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
aZv(d,e,f,g){return this.aZw(d,e,f,g,null)},
ar7(d,e,f,g){var w=null,v=f.j(0.1),u=B.m(10),t=B.I(f.j(0.4),A.r,1)
return B.E(B.aB(w,B.p(w,B.B(B.a([B.X(d,f,w,w,w,15),A.ej,new B.ds(1,A.cn,B.d(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b8,A.j,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
afg(){var w=0,v=B.j(x.H),u=this,t
var $async$afg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a3(t,!1).cg(B.e_(new C.dUg(u),!1,null,x.H)),$async$afg)
case 2:t=u.e.gbk()
if(t!=null)t.bfi()
if(u.c!=null)u.m(new C.dUh())
u.F1()
return B.h(null,v)}})
return B.i($async$afg,v)},
bFN(){var w,v,u,t,s=null,r=this.f
$.ahZ()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.be:A.aw
u=B.m(9)
t=B.I(F.B1,A.r,1.5)
return B.p(s,B.at(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wR,s,s,s),s,s,s),A.f,s,D.b1y,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eU,s,s,s)},
ai1(){var w=0,v=B.j(x.H),u=this,t
var $async$ai1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(F.lv,null,new C.dUt(u),t,!0,!0,!0,A.jZ,!1,!1,x.H),$async$ai1)
case 2:return B.h(null,v)}})
return B.i($async$ai1,v)},
c7L(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aB(r,B.p(r,D.bSm,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a5),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dUz(d),r,r,r,r,r,r,!1,A.a4),o=B.m(11)
o=B.p(r,D.b7j,A.f,r,r,new B.o(A.bn,r,B.I(A.aR.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.x(B.a([B.B(B.a([p,A.ab,o,A.ab,B.E(B.x(B.a([D.fEM,B.d(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.f3:A.hn,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.j,0,A.p),1),new C.axD(s.gcdv(),r),A.rY,s.aZv(A.yB,"Construction Lab: real 3D wiring, plumbing and a house",A.cZ,new C.dUA(s,d)),s.aZw(A.lB,"Challenges",A.aT,s.gcuI(),s.bFN()),s.aZv(A.Od,"How to play",A.aR,new C.dUB(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.am,B.B(B.a([s.ar7(A.o9,"Circuits",A.by,s.gcny()),A.bo,s.ar7(A.p1,"Repair",A.aT,new C.dUC(s)),A.bo,s.ar7(D.O2,"Clear",A.cs,new C.dUD(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.P,0,A.p),A.f,r,r,new B.o(F.B1,r,new B.bI(A.a0,A.a0,new B.ay(q,1,A.r,-1),A.a0),r,r,r,A.n),r,r,r,r,D.bBj,r,r,r)},
B(d){var w=this,v=null
$.as5="tech"
return B.c5(v,A.bZ,B.bm(!0,B.x(B.a([w.c7L(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.h7u(w.d,w.e,w.gc7J(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
C.axD.prototype={
U(){return new C.b9k(null,null)}}
C.b9k.prototype={
gaxk(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.V,null,1,null,v)
w.cM(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gaxk().t()
this.btW()},
B(d){var w=null,v=this.a.c
return B.aB(w,B.hc(new B.a7(42,42,B.c9(this.gaxk(),new C.cF1(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.b9j.prototype={
a5(d,e){var w,v,u,t=null,s=e.eg(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.V()
w=B.K()
w.r=A.b5.j(0.25+0.15*o).gp(0)
w.z=H.ph
d.ae(s,r+2+o*2,w)
w=B.K()
w.sar(D.enU.aA(0,B.bX(s,r)))
d.ae(s,r,w)
v=B.K()
v.b=A.ac
v.c=2.2
v.sar(new B.fX(A.A,0,6.283185307179586,A.x,D.cTM,t,new B.mw(p)).aA(0,B.bX(s,r)))
d.ae(s,r,v)
p=new C.cF0(d)
p.$3(s.a9(0,A.rN),8+o*1.5,1)
q*=4
p.$3(s.a9(0,D.edn),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a9(0,D.efF),2.6,0.5+0.5*Math.cos(q))
u=B.fS(t,t,t,t,D.f8J,A.a6,A.c5,t,A.dP,A.c4)
u.eI()
u.a5(d,s.a9(0,new B.t(-u.b.c/2,5)))},
av(d){return d.b!==this.b}}
C.axW.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.axX.prototype={
t(){var w,v,u
for(w=this.iK$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a3(0)
w=this.iJ$
w===$&&B.c()
w.t()
this.bsC()}}
C.aJY.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bxh.prototype={}
C.fN.prototype={}
C.Jy.prototype={
a4(){return"ScreenStyle."+this.b}}
C.mg.prototype={}
C.V_.prototype={
U(){return new C.bjH(null,null)}}
C.bjH.prototype={
ga9w(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.o5,null,1,null,v)
w.cp(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.ga9w().t()
this.bvK()},
gRY(){var w=this.ga9w().y
w=w==null?null:A.o.an(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.ma.h(0,this.a.c)
if(v==null)v=D.aOk
return B.c5(w,T.Y3,B.bm(!0,new B.an(A.a_,w,A.aa,A.t,B.a([B.at(v.b===D.zT?this.bHV(v):this.ckj(v),w,w,w),B.ao(w,B.aJ(w,w,w,w,A.mM,w,w,w,new C.dQK(d),w,w,w,B.nG(w,A.aW,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ao(6,B.at(B.d(v.a,w,w,w,w,w,w,D.fal,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c7M(d){var w
A:{if(D.J0===d){w=0.46153846153846156
break A}if(D.v1===d){w=0.45
break A}if(D.wH===d){w=0.9259259259259258
break A}if(D.Ti===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
ckj(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.J0
A:{if(D.J0===p){w=44
break A}if(D.v1===p){w=30
break A}if(D.wH===p){w=22
break A}if(D.Ti===p){w=26
break A}w=14
break A}v=B.c9(this.ga9w(),new C.dQJ(this,w,d,o),q)
if(p===D.a7s)v=new B.Bg(D.bBW,v,q)
p=this.c7M(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.m(w)
s=B.a([new B.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new B.fL(p,B.p(q,B.p(q,v,A.f,q,q,new B.o(A.w,q,q,B.m(w-3),q,q,A.n),q,q,q,q,A1.G3,q,q,q),A.f,q,q,new B.o(q,q,q,t,s,new B.a9(A.ay,A.aD,A.x,r,q,q),A.n),q,q,q,D.bvv,new B.Q(u,u,u,u),q,q,q),q)},
b6G(d){var w,v,u,t=null,s=new B.U(Date.now(),0,!1),r=A.o.E(this.a.d+A.k.bm(this.gRY()*0.4),0,100),q=d.b===D.J0,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.aZ(A.o.u(B.dl(s)),2,"0")+":"+A.a.aZ(A.o.u(B.h3(s)),2,"0"),t,t,t,t,t,t,A.t5,t,t,t),A.b0],x.p)
for(w=0;w<4;++w){v=new B.aQ(1,1)
n.push(B.p(t,t,A.f,t,t,new B.o(A.c,t,t,new B.bk(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bBE,t,t,t,3))}n.push(A.dc)
n.push(D.fxw)
n.push(A.bo)
v=B.I(A.ae,A.r,1)
u=B.m(4)
n.push(B.p(t,new B.bL(A.a3,t,t,B.Bt(A.A,B.p(t,t,A.f,t,t,new B.o(A.bm,t,t,B.m(2),t,t,A.n),t,t,t,A1.G3,t,t,t,t),t,r/100),t),A.f,t,t,new B.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qz)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fow,t,t,t))
return new B.D(new B.Q(p,12,o,2),B.B(n,A.m,t,A.e,A.j,0,t,t),t)},
avi(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.m(e*0.26)
w=x.p
t=B.a([B.p(v,B.at(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dgH,new B.a9(A.ay,A.aD,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.av,B.d(d.a,v,1,A.a2,v,v,v,D.ff4,v,v,v)],w))
return B.aB(v,B.x(t,A.m,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dQF(this,d),v,v,v,v,v,v,!1,A.a4)},
bZe(d,e){return this.avi(d,e,!0)},
bYY(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.Ti||n===D.wH,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.kx,0.5)
l.toString
l=B.a([k,A.du,l],x.O)
k=p.b6G(d)
w=m?190:138
v=B.m(24)
u=B.I(A.aZ,A.r,1)
w=B.aB(o,B.p(o,B.bx(B.m(23),B.b4(o,o,o,new C.aeF(0,p.gRY(),o),A.fL),A.aq),A.f,o,o,new B.o(o,o,u,v,o,o,A.n),o,w,o,A.hF,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dQD(p),o,o,o,o,o,o,!1,A.a4)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.ki[s]
t.push(new B.ci(A.A,o,o,p.bZe(r,m?58:54),o))}k=B.a([k,A.am,w,A.ad,B.E(B.kK(0.92,t,v,8,12,A4.vT,o,!1),1)],u)
if(n!==D.a7s){n=A.c.j(0.16)
w=B.m(28)
u=B.a([],u)
for(v=B.d1(F.ki,0,B.dB(4,"count",x.S),x.gD),t=v.$ti,v=new B.bS(v,v.gL(0),t.k("bS<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.avi(q==null?t.a(q):q,50,!1))}k.push(B.p(o,B.B(u,A.m,o,A.rD,A.j,0,o,o),A.f,o,o,new B.o(n,o,o,w,o,o,A.n),o,o,o,D.bwl,G.akd,o,o,o))}return B.p(o,B.x(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new B.o(o,o,o,o,o,new B.a9(A.ay,A.aD,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bBl(d,e){var w=null
return B.p(w,B.x(B.a([this.b6G(d),B.E(B.b4(w,w,w,new C.aeF(e,this.gRY(),w),A.fL),1),B.aB(w,B.p(w,B.at(B.d(F.ki[e].a,w,w,w,w,w,w,A.Jv,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dQy(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bHV(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.m(r?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new B.fL(1.5384615384615383,B.p(t,B.c9(this.ga9w(),new C.dQB(this,r,d),t),A.f,t,t,new B.o(t,t,t,v,u,new B.a9(A.ay,A.aD,A.x,w,t,t),A.n),t,t,t,D.bBe,new B.Q(8,8,8,s),t,t,t),t)}}
C.bvl.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.V()
w=B.K()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.kx,0.4)
t.toString
w.sar(new B.a9(A.ay,A.aD,A.x,B.a([u,A.du,t],x.O),null,null).aA(0,new B.a5(0,0,n,m)))
d.aU(new B.a5(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
r.r=v.j(0.1).gp(0)
r.z=D.dvv
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
av(d){return!0}}
C.aeF.prototype={
a5(d,e){return E.RI(d,e,this.b,this.c)},
av(d){return!0}}
C.aLI.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bu9.prototype={}
C.a8p.prototype={
B(d){var w=null
return B.c5(B.eD(w,w,w,!0,!0,D.afA,w,1,!0,w,0,!1,w,!1,w,w,B.aJ(w,w,w,w,D.aoH,w,w,w,new C.cik(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fNx,w,w,w,1,w,!0),D.afA,B.cq(B.a([D.eh4,B.cC(new C.cil())],x.p),w,D.bxn,w,w,A.ag,!1),w,!1,!1,w,w)}}
C.Wy.prototype={
U(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aF1(w,new B.as(A.at,$.ax()),$,A.bE,0,B.a([],x.X),null,null)}}
C.aF1.prototype={
a_(){this.a2()
this.p9()},
b4C(d){var w=this.d.length
return A.o.F(A.k.bm(A.k.F(A.k.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
q3(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b4C(v.f)
if(w!==v.x){v.x=w
C.q0("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eKY(v))
C.J4("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
c93(){if(this.d.length<2)return
this.m(new C.eKU(this))},
aZX(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eKT(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc92(),p=s.d,o=B.E(B.aB(r,B.b4(r,r,r,new C.bvx(p,s.f,r),A.fL),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a7(r,40,B.at(B.d(n,r,r,r,r,r,r,D.fmE,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.ayj[A.o.F(v,8)].j(0.9)
t=new B.aQ(20,20)
o.push(B.aB(r,B.p(r,new B.y(p[v],r,D.flT,r,r,r,r,r,r,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bk(t,t,t,t),r,r,A.n),r,r,r,A.fw,A.hf,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eKW(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return C.oy(A.aT,A.fV,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new C.ho(o,r,r),B.B(B.a([B.E(B.aN(r,A.X,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bs(r,new B.b5(4,B.m(14),A.a0),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kP,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eKX(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.df,!0,A.a6,r,A.ao,r,r,r,r),1),A.ab,new C.j7(A.hH,"Add",s.gc9_(s),A.c,r),A.bo,new C.j7(A.p2,"Spin",q,A.bm,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.P,0,A.p))}}
C.bvx.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new B.t(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.V()
w=B.K()
w.r=D.bdk.gp(0)
a1.ae(d,f,w)
w=B.K()
w.b=A.ac
w.c=3
w.r=A.aT.gp(0)
a1.ae(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=B.bX(d,a0)
n=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
n.r=D.ayj[A.o.F(q,8)].gp(0)
m=n.H()
n=p*57.29577951308232
f.drawArc.apply(f,[B.bQ(o),n,s,!0,m])
m.delete()
o=B.bX(d,a0)
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.b=A.ac
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.H()
f.drawArc.apply(f,[B.bQ(o),n,s,!0,m])
m.delete()
J.bq(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.ap(o,0,11)+"\u2026"
k=new B.kz(new B.eH(o,i,i,A.cY,i,i,i,i,i,i,D.f9v),A.a6,A.c5,new B.km(1),i,i,i,i,A.c4,i)
k.eI()
o=k.b
n=o.c
o=o.a.c
k.a5(a1,new B.t(a0-n-16,-o.gbc(o)/2))
f.restore()}f=B.K()
f.r=D.afd.gp(0)
a1.ae(d,20,f)
f=B.K()
f.b=A.ac
f.c=3
f.r=A.aT.gp(0)
a1.ae(d,20,f)
j=new B.aI(h.r,A.ai,i,i,B.a([],x.v))
e-=a0
j.D(new B.b0(g,e+26))
e-=10
j.D(new B.ap(g-14,e))
j.D(new B.ap(g+14,e))
j.D(new B.bv())
e=B.K()
e.r=A.c.gp(0)
a1.aJ(j,e)
e=B.K()
e.b=A.ac
e.c=2
e.r=A.aW.gp(0)
a1.aJ(j,e)},
av(d){return!0}}
C.Vo.prototype={
U(){return new C.bjQ($,A.bE,0,B.a([],x.X),null,null)}}
C.bjQ.prototype={
a_(){this.a2()
this.p9()},
q3(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.J4("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.a5l(900,new C.dX2())}w.m(new C.dX3())},
aZZ(d){return this.m(new C.dWY(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aZ(A.o.u(A.k.an(m,60)),2,"0")
v=A.a.aZ(A.o.u(A.o.F(A.k.dk(m),60)),2,"0")
m=B.b4(n,n,n,new C.bql(l,A.cs,n),A.aPD)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fe_,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a7(280,280,new B.an(A.A,n,A.aa,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fd2,n,n,n),A.av,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.v7,n,n,n)],s),A.m,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.ddH[r]
u.push(new C.f4(""+q+" min",o.d===q,new C.dX_(o,q),n,A.cs,n))}m=o.f
p=m?A0.yJ:A.id
m=m?"Pause":"Start"
return C.oy(A.cs,A.fV,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new C.ho(u,n,n),new C.ho(B.a([new C.j7(p,m,new C.dX0(o),A.bm,n),new C.j7(A.oc,"Reset",new C.dX1(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.P,0,A.p))}}
C.bql.prototype={
a5(d,e){var w,v,u,t,s=e.eg(A.J),r=e.a/2-14
$.V()
w=B.K()
w.b=A.ac
w.c=16
w.r=A.c.j(0.08).gp(0)
d.ae(s,r,w)
w=B.bX(s,r)
v=B.K()
v.b=A.ac
v.c=16
v.d=A.bG
u=this.c
t=B.ar(u,A.c,0.4)
t.toString
v.sar(new B.fX(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aA(0,B.bX(s,r)))
d.e2(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
av(d){return d.b!==this.b}}
C.UB.prototype={
U(){return new C.bjt($,A.bE,0,B.a([],x.X),null,null)}}
C.bjt.prototype={
a_(){this.a2()
this.p9()},
q3(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.RG.h(0,p.d)
w.toString
v=A.d.f9(w,new C.dIo())
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
C.q0("flute",D.c3o[t]+5,1400,0.35)}p.m(new C.dIp())},
gc96(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.Kn("Press Start",0.5)
w=D.RG.h(0,this.d)
w.toString
v=A.d.f9(w,new C.dIj())
u=A.k.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.Kn("Breathe in",0.5+0.5*A.dB.aw(0,p))
case 1:return new B.Kn("Hold",1)
case 2:return new B.Kn("Breathe out",1-0.5*A.dB.aw(0,p))
default:return new B.Kn("Hold",0.5)}}}return new B.Kn("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc96(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.iK.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.iK.j(0.35),A.J,40)],v):q,q,A.a5),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.oC,q,q,q))
n.push(B.ao(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kP,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a7(300,340,new B.an(A.A,q,A.aa,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aV(D.RG.ges(D.RG));w.C();){v=w.gR(w)
o.push(new C.f4(v,r.d===v,new C.dIm(r,v),q,A.iK,q))}w=r.e
v=w?A.GP:A.id
w=w?"Stop":"Start"
o.push(new C.j7(v,w,new C.dIn(r),A.bm,q))
return C.oy(A.iK,A.fV,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new C.ho(o,q,q))}}
C.aIs.prototype={}
C.Vf.prototype={
U(){return new C.bjJ(new B.cz(null,x.z),B.a([],x.au),A.au,A.c)}}
C.bjJ.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aJ(s,s,s,s,D.qk,s,s,s,new C.dU4(t,d),s,s,s,s,"Share",s)],r),p=B.bx(B.m(18),new B.eG(B.aB(s,B.b4(s,s,s,new C.blG(t.e,t.x,s),A.fL),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dU5(t),new C.dU6(t),s,s,s,s,s,s,s,s,s,new C.dU7(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.cVe[w]
u=!t.w&&t.f.A(0,v)
o.push(new C.Fs(v,u,new C.dU8(t,v),!1,s))}u=t.r
return C.oy(A.bA,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bT,p,s),"DRAW PAD",B.x(B.a([new C.ho(o,s,s),C.lS(A.bA,""+A.k.V(u),"Brush",30,2,new C.dU9(t),u),new C.ho(B.a([new C.f4("Eraser",t.w,new C.dUa(t),A.Go,A.bA,s),new C.j7(A.rs,"Undo",new C.dUb(t),A.c,s),new C.j7(A.ec,"Clear",new C.dUc(t),A.c,s),new C.j7(A.Oa,"Paper",new C.dUd(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.P,0,A.p))}}
C.blG.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.V()
w=B.K()
w.r=this.c.gp(0)
d.aU(new B.a5(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.M)(w),++s){r=w[s]
q=$.V()
p=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bG
p.e=A.dS
p.b=A.ac
m=r.c
if(m.length===1){q=A.d.gI(m)
m=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
m.r=o.gp(o)
l=m.H()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=B.a([],t)
k=new B.aI(q.r,A.ai,null,null,o)
o.push(new B.b0(A.d.gI(m).a,A.d.gI(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new B.c8(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.by(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new B.ap(A.d.gal(m).a,A.d.gal(m).b)
o.push(q)
o=k.f
if(o!=null)q.by(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.H()
q=k.e
u.drawPath((q==null?k.e=new B.cv(k.gbB().a.snapshot()):q).a,l)
l.delete()}}},
av(d){return!0}}
C.VY.prototype={
U(){var w=x.S
return new C.aEn(B.aX(w),B.aX(w))}}
C.aEn.prototype={
a_(){this.a2()
this.axJ()},
axJ(){var w,v,u=this,t=x.N,s=B.bo(D.diH,!0,t)
A.d.CU(s)
w=x.S
v=B.S(s).c
t=B.C(B.d1(s,0,B.dB(u.d,"count",w),v),t)
A.d.v(t,B.d1(s,0,B.dB(u.d,"count",w),v))
A.d.CU(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
c91(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
C.q0("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.eit(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gal(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bO(A.ni,new C.eiu(s,v,u),t)
else{s.x=!0
B.bO(A8.FH,new C.eiv(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.Uj,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.an(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.y9,B.B(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aT:A.ae,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.iy,A.j,0,q,q),q),B.E(B.ix(!0,q,q,A.y,new B.hQ(v,8,8,1,q),new C.eiz(r),r.e.length,A.bh,q,A.ag,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.cWJ[t]
o.push(new C.f4(s.b,r.d===s.a,new C.eiA(r,s),q,A.aR,q))}o.push(new C.j7(D.bL4,"New game",new C.eiB(r),A.bm,q))
return C.oy(A.aR,A.fV,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new C.ho(o,q,q))}}
C.W7.prototype={
U(){return new C.aEG(B.a([],x.t))}}
C.aEG.prototype={
c95(d){A.d.a8(this.d)
this.w=!0
this.aZY()},
aZY(){this.d.push(A.cW.au(4))
this.e=0
this.a_7()},
a_7(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eso(t))
s=x.H
w=3
return B.b(B.bO(A.lx,null,s),$async$a_7)
case 3:r=t.d,q=B.bo(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aTc(n)
w=7
return B.b(B.bO(new B.b9(1000*Math.max(280,600-r.length*18)),null,s),$async$a_7)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.esp(t))
case 1:return B.h(u,v)}})
return B.i($async$a_7,v)},
aTc(d){this.m(new C.esm(this,d))
C.q0("marimba",D.c3n[d]+5,450,0.55)
B.bO(A.FF,new C.esn(this),x.H)},
c97(d){var w,v,u=this
if(!u.w||u.r)return
u.aTc(d)
w=u.d
v=u.e
if(w[v]!==d){E.dX(90,"",600,0,0.5,"saw")
u.m(new C.esq(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.esr(u))
B.bO(A.hD,new C.ess(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,L.aS6,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fn0,A.L,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.axc[v]
u=u.j(q.f===v?1:0.35)
t=new B.aQ(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.axc[v].j(0.8),A.J,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aB(p,B.d9(p,p,p,p,A.b7,new B.o(u,p,new B.bI(r,r,r,r),new B.bk(t,t,t,t),s,p,A.n),A.jv,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.est(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.D(A.a9,B.x(B.a([o,A.am,n,A.d6,new B.fL(1,B.kK(1,l,2,12,12,p,A.dQ,!1),p)],m),A.m,p,A.b8,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return C.oy(A.bI,A.fV,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new C.ho(B.a([new C.j7(A.id,n,q.gc94(q),A.bm,p)],m),p,p))}}
C.Wr.prototype={
U(){return new C.bkU(new B.as(A.at,$.ax()))}}
C.bkU.prototype={
aw9(d){return B.oO(A.k.ac(d,2),B.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eGf(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.d7(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eGo()
l=B.aN(m,A.X,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bs(m,m,m,m,m,m,m,m,!0,new B.b5(4,B.m(16),A7.xh),m,m,m,m,m,m,m,m,m,m,m,new B.b5(4,B.m(16),D.b_Y),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lM,"Bill amount",!0,!0,!1,m,m,m,m,D.fkt,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,A.e_,m,m,m,1,m,m,!1,"\u2022",m,new C.eGk(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aR7,!0,A.a6,m,A.ao,m,m,m,m)
k=A.bm.j(0.1)
s=B.m(20)
r=B.I(A.bm.j(0.35),A.r,1)
q=x.p
s=B.cq(B.a([l,A.bv,B.p(m,B.x(B.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.aw9(w)),t.$2("Total","$"+n.aw9(v)),U.Mx,t.$3$big("Each of "+n.f+" pays","$"+n.aw9(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bQ,m,m,m)],q),m,A.fc,m,m,A.ag,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cHo[p]
r.push(new C.f4(""+o+"%",A.k.V(n.e)===o,new C.eGl(n,o),m,A.bm,m))}l=n.f
return C.oy(A.bm,A.fV,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new C.ho(r,"TIP",m),C.lS(A.aR,""+l,"People",20,1,new C.eGm(n),l),new C.ho(B.a([new C.f4("Round up",n.r,new C.eGn(n),m,A.aT,m)],q),m,m)],q),A.m,m,A.e,A.P,0,A.p))}}
C.VX.prototype={
U(){var w=B.a([3,5],x.t)
return new C.bkp(w,A.cW,$,A.bE,0,B.a([],x.X),null,null)}}
C.bkp.prototype={
a_(){this.a2()
this.p9()},
q3(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.k.bm(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.au(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.au(6)+1)
u.f=t
C.a8o("snare",0.5)}u.m(new C.ehy())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.he()
u.w=t
u.x=t?0:3.141592653589793
C.q0("bell",24,400,0.5)}u.m(new C.ehz())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bdw(v,o.r>0,n))}u=B.aB(n,B.at(B.bW(A.fA,m,A.bq,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ehr(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.k.E(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.I(A.d9,A.r,6)
s=B.a([new B.ac(0,A.G,A.aT.j(0.4),A.J,30)],x.V)
u=B.aB(n,B.at(B.ea(A.A,B.p(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fjH,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.enY,A.a5),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ehs(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aB(n,B.at(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.f8Z,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kP,n,n,n)],x.p),A.m,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eht(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.db5[r]
v.push(new C.f4(q.b,o.d===q.a,new C.ehu(o,q),q.c,A.by,n))}v=B.a([new C.ho(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(C.lS(A.by,""+s,"Dice",4,1,new C.ehv(o),s))}if(o.d==="num"){s=o.z
s=C.lS(A.by,""+s,"From",100,1,new C.ehw(o),s)
p=o.Q
A.d.v(v,B.a([s,C.lS(A.by,""+p,"To",1000,2,new C.ehx(o),p)],m))}return C.oy(A.by,A.fV,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.m,n,A.e,A.P,0,A.p))}}
C.bdw.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cW.aj()-0.5)*0.6
else w=0
v=B.m(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cv,14)],x.V)
t=B.a([],x.p)
for(s=D.duj.h(0,A.o.E(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bL(s[q],p,p,B.p(p,p,A.f,p,p,M.acb,p,18,p,p,p,p,p,18),p))
return B.eI(A.A,w,B.p(p,new B.an(A.a_,p,A.aa,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bB,p,p,100),p)}}
C.aLw.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bxe.prototype={
t(){var w,v,u
for(w=this.iK$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a3(0)
w=this.iJ$
w===$&&B.c()
w.t()
this.bvy()}}
C.aLN.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bxi.prototype={
t(){var w,v,u
for(w=this.iK$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a3(0)
w=this.iJ$
w===$&&B.c()
w.t()
this.bvQ()}}
C.aMe.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bxq.prototype={
t(){var w,v,u
for(w=this.iK$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a3(0)
w=this.iJ$
w===$&&B.c()
w.t()
this.bwi()}}
C.aME.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bxy.prototype={
t(){var w,v,u
for(w=this.iK$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a3(0)
w=this.iJ$
w===$&&B.c()
w.t()
this.bwI()}}
C.b73.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aFc.h(0,t)
$.as5=s==null?"music":s
s=v.d
w=x.p
t=B.a([B.aJ(u,u,u,u,Q.ns,u,u,u,new C.cvt(d),u,u,u,u,u,u),B.E(B.d(t,u,1,A.a2,u,u,u,B.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(B.aJ(u,u,u,u,B.X(A.Od,s,u,u,u,22),u,u,u,new C.cvu(v,d),u,u,u,u,"How to play",u))
w=B.a([new B.D(D.bAu,B.B(t,A.m,u,A.e,A.j,0,u,u),u),B.E(v.f,1)],w)
w.push(B.p(u,v.r,A.f,u,u,new B.o(F.B1,u,new B.bI(new B.ay(A.c.j(0.08),1,A.r,-1),A.a0,A.a0,A.a0),u,u,u,A.n),u,u,u,u,A.FJ,u,u,1/0))
return B.c5(u,A.bZ,B.bm(!0,B.x(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),u,!1,!1,u,u)}}
C.f4.prototype={
B(d){var w,v,u,t=this,s=null,r=B.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=B.I(o,A.r,q?1.6:1)
w=x.p
v=B.a([],w)
u=t.f
if(u!=null)A.d.v(v,B.a([B.X(u,q?t.r:A.aQ,s,s,s,16),A.ej],w))
v.push(B.d(t.c,s,s,s,s,s,s,B.l(s,s,q?A.c:A.ae,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new B.D(F.tU,B.aB(s,B.d9(s,B.B(v,A.m,s,A.e,A.P,0,s,s),s,s,A.b7,new B.o(p,s,o,r,s,s,A.n),A.eM,s,s,s,A.hf,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cvp(t),s,s,s,s,s,s,!1,A.a4),s)}}
C.ho.prototype={
B(d){var w=null,v=B.a([],x.p),u=this.d
if(u!=null)v.push(new B.a7(54,w,B.d(u,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(B.E(B.cd(B.B(this.c,A.m,w,A.e,A.j,0,w,w),A.t,w,A.y,w,w,w,w,A.aN),1))
return new B.D(A.ct,B.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
C.b74.prototype={
B(d){var w,v,u=this,t=null,s=B.d(u.c,t,t,t,t,t,t,B.l(t,t,A.c.j(0.7),t,t,t,t,t,t,t,t,11.5,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),r=u.w
r=B.avB(d).cKr(r,A.bz,r.j(0.2),r,3.5)
w=u.f
v=u.r
r=B.E(B.aac(B.l4(t,t,t,v,w,u.e,A.k.E(u.d,w,v)),r),1)
return new B.a7(t,34,B.B(B.a([new B.a7(78,t,s,t),r,new B.a7(38,t,B.d(u.x,t,t,t,t,t,t,A.Jv,A.dT,t,t),t)],x.p),A.m,t,A.e,A.j,0,t,t),t)}}
C.j7.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new B.D(F.tU,B.aF(!1,A.a1,!0,B.m(12),B.aM(!1,B.m(12),!0,new B.D(Ae.aiy,B.B(B.a([B.X(w.c,u,v,v,v,17),A.ej,B.d(w.d,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.cvo(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ah),v)}}
C.Fs.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.f7j:u
w=t?A.c:A.aZ
w=B.I(w,A.r,t?2.5:1)
return B.aB(u,B.d9(u,u,u,u,A.b7,new B.o(p,u,w,u,t?B.a([new B.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a5),A.ho,u,r,D.aij,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cvv(v),u,u,u,u,u,u,!1,A.a4)}}
C.qM.prototype={
a5l(d,e){var w=B.dj()
w.seO(B.cL(B.dE(0,0,0,d,0,0),new C.cvq(this,w,e)))
this.iK$.push(w.bj())},
p9(){var w=this,v=w.rU(new C.cvs(w))
v.hj(0)
w.iJ$!==$&&B.aP()
w.iJ$=v}}
C.abb.prototype={
byU(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,B.M)(w),++q)for(p=A.d.gaf(w[q]);p.C();){o=p.gR(0)
n=J.a4(o)
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
n=J.a4(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&B.aP()
g.ax=m
w=g.bC8()
g.ay!==$&&B.aP()
g.ay=w},
bC8(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
FI(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
for(t=u.length-1,s=!1,r=0;r<u.length;q=r+1,t=r,r=q){p=J.q(u[r],0)
o=J.q(u[r],1)
n=J.q(u[t],0)
m=J.q(u[t],1)
if(o>f!==m>f&&e<(n-p)*(f-o)/(m-o)+p)s=!s}if(s)return!0}return!1}}
C.abc.prototype={
cGk(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,B.M)(v),++s){r=v[s]
if(r.FI(0,w,e)){if(t!=null){q=r.ax
q===$&&B.c()
p=t.ax
p===$&&B.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
C.va.prototype={}
C.Pm.prototype={}
C.yd.prototype={}
C.Pl.prototype={
fu(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.c38[w.au(7)]
w=w.he()?0:12
u=A.o.F(t.c++,3)===0?"flute":"bell"
C.q0(u,v+w-12,2200,0.1)}}
C.Vu.prototype={
U(){var w=$.ax()
return new C.aDL(new B.cz(null,x.z),new B.as(A.at,w),new C.Pl(A.cW),D.dd7,A.ax,D.a3U,$,A.bE,0,B.a([],x.X),null,null)}}
C.aDL.prototype={
a_(){var w,v=this
v.a2()
v.p9()
v.a.toString
w=$.hgT
if(w==null)w=$.hgT=C.cy4()
w.bL(new C.dZz(v),x.a)},
t(){var w=this.e
w.T$=$.ax()
w.P$=0
this.bvX()},
ctT(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=B.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,B.M)(v),++s){r=v[s]
q=B.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,B.M)(p),++n)q.push(new C.dZ1(p[n]).$0())
w.push(q)}this.w=w},
gWg(){var w=this.fy
return w.A(0,A.ax)?100:Math.min(w.a,w.b)*0.43},
atO(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.E(f,1,16)
w.Q=w.as=0},
axT(d){var w
this.fx=d
w=d.ax
w===$&&B.c()
this.atO(d.x,d.w,105/Math.max(w,3))
B.f0()
C.q0("bell",(A.d.cD(D.a3w,d.c)+1)*3+12,900,0.45)
E.dX(300,"",280,1.4,0.15,"tri")},
q3(d){var w,v,u,t,s,r,q,p=this
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
c9M(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.ax))return null
w=n.fy
v=n.gWg()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gWg()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.E(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cGk((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c9L(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new C.dZ_(w))
return}w.m(new C.dZ0(w,v,A.a.i(d).toLowerCase()))},
bPa(){var w=null,v=this.c
v.toString
B.cf(w,w,!0,w,new C.dYY(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=B.a([B.aJ(n,n,n,n,D.bNH,n,n,n,o.gbP9(),n,n,n,n,"Earth facts",n),B.aJ(n,n,n,n,D.qk,n,n,n,new C.dZk(o,d),n,n,n,n,"Share",n)],l),j=B.cC(new C.dZl(o,m)),i=A.c.j(0.06)
i=B.a([B.aN(n,A.X,!1,n,!0,A.t,n,B.aO(),o.e,n,n,n,n,n,2,B.bs(n,new B.b5(4,B.m(14),A.a0),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,H.DV,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bVU,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc9K(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.jj,!0,A.a6,n,A.ao,n,n,n,n)],l)
if(o.id.length!==0){w=B.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,B.M)(v),++t){s=v[t]
w.push(new C.f4(s.a,!1,new C.dZm(o,s),A.mJ,A.aR,n))}i.push(new B.D(A.ic,new B.a7(n,38,B.cq(w,n,n,n,n,A.aN,!1),n),n))}i.push(A.am)
w=B.a([new C.f4("Whole Earth",!1,new C.dZq(o),A.hr,A.aR,n)],l)
for(v=D.aFb.gdT(D.aFb),v=v.gaf(v);v.C();){u=v.gR(v)
w.push(new C.f4(u.a,!1,new C.dZr(o,u),n,A.aR,n))}w.push(new C.f4("Random",!1,new C.dZs(o),A.p2,A.aR,n))
i.push(new C.ho(w,"GO TO",n))
w=o.z
i.push(C.lS(A.aR,A.k.ac(w,1)+"x","Zoom",16,0.8,new C.dZt(o),w))
w=o.dy
i.push(C.lS(A.bI,A.a.aZ(A.o.u(A.k.bm(w)),2,"0")+":00","Time",24,0,new C.dZu(o),w))
w=o.fr
i.push(C.lS(A.bm,o.csD(),"Season",365,0,new C.dZv(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.m4:D.GG
i.push(new C.ho(B.a([new C.f4("Spin",w,new C.dZw(o),D.bIZ,A.aR,n),new C.f4("Night",v,new C.dZx(o),A.w3,A.aR,n),new C.f4("Borders",u,new C.dZn(o),D.bJ2,A.aR,n),new C.f4("Names",r,new C.dZo(o),U.C6,A.aR,n),new C.f4("Music",q,new C.dZp(o),p,A.aR,n)],l),n,n))
return C.oy(A.aR,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",B.x(i,A.m,n,A.e,A.P,0,A.p))},
csD(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.axQ[u])v=u
return A.iw[v]+" "+(A.k.bm(w-D.axQ[v])+1)},
c9J(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&B.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new N.vN(1,A.o.F((A.d.cD(D.a3w,t)+1)*47,360),0.55,1).m1()
r=new C.dYW()
q=B.m(20)
p=B.I(s.j(0.6),A.r,1)
o=x.p
n=B.B(B.a([B.p(j,j,A.f,j,j,new B.o(s,j,j,j,j,j,A.a5),j,10,j,j,j,j,j,10),A.ab,B.E(B.d(d.a,j,1,A.a2,j,j,j,A.de,j,j,j),1),B.aJ(j,j,j,j,A.H_,j,j,j,new C.dYV(this),j,j,j,j,j,A.cd)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=B.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hj,j,j,j)
m=D.dsX.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=B.B(B.a([m,A.ab,r.$2("PEOPLE",l?C.fw4(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",C.H2(i)+" km\xb2")
if(l)m=(w<10?A.k.ac(w,1):C.H2(w))+" per km\xb2"
else m="\u2014"
m=B.B(B.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.ac(u,3):A.k.ac(u,1))+"% of people")
l=d.f
k=d.r
return B.p(j,B.x(B.a([n,t,A.N,v,A.N,m,A.N,B.B(B.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+C.fw4(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.E,j,A.e,A.P,0,A.p),A.f,j,j,new B.o(D.WM,j,p,q,j,j,A.n),j,j,j,j,D.aiR,j,j,j)}}
C.bfK.prototype={
a5(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.V(),d7=B.K()
d7.r=D.AY.gp(0)
d8.aU(new B.a5(0,0,0+d4,0+d5),d7)
w=new B.eb()
w.d5(4)
for(d7=d8.a,v=0;v<90;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
r.r=A.c.j(0.25+w.aj()*0.5).gp(0)
q=r.H()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new B.t(d4,d5)
o=d2.f
u=B.K()
t=x.O
u.sar(new B.c0(A.A,0.5,A.x,d3,0,B.a([A.K,A.aR.j(0.35),A.K],t),D.cYi,d3).aA(0,B.bX(p,o*1.1)))
d8.ae(p,o*1.05,u)
n=B.bX(p,o)
u=B.K()
u.sar(D.eo1.aA(0,n))
d8.ae(p,o,u)
J.bq(d7.save())
u=x.v
d6=new B.aI(d6.r,A.ai,d3,d3,B.a([],u))
d6.D(new B.jC(n))
d8.mE(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=B.K()
g.b=A.ac
m=g.c=0.7
g.r=A.c.j(0.1).gp(0)
f=new C.dgx(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new B.cv(d.gbB().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.V()
a3=B.a([],u)
d=new B.aI(a2.r,A.ai,d3,d3,a3)
a3.push(new B.b0(s,r))}else{s=new B.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.by(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new B.cv(d.gbB().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new B.cv(d.gbB().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.V()
a3=B.a([],u)
d=new B.aI(a2.r,A.ai,d3,d3,a3)
a3.push(new B.b0(s,r))}else{s=new B.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.by(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new B.cv(d.gbB().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=B.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.F((A.d.cD(D.a3w,a7.c)+1)*47,360)
$.V()
b0=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a3=a8?0.35:0.5
b0.r=new N.vN(1,a9,a3,a8?1:0.62).m1().gp(0)
b1=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
b1.b=A.ac
b1.c=a8?2.2:m
b1.e=A.dS
b1.r=(a8?A.c:A.w.j(0.55)).gp(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,B.M)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.V()
b7=B.a([],u)
b8=new B.aI(b6.r,A.ai,d3,d3,b7)
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
if(v===0){b6=new B.b0(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.by(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new B.ap(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.by(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new B.bv()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.by(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new B.cv(b8.gbB().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new B.cv(b8.gbB().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,B.M)(a5),++b3){d=a5[b3]
$.V()
s=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
s.b=A.ac
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.uE
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new B.cv(d.gbB().a.snapshot()):s).a,q)
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
c9=C.hQ9(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbc(b2)
c9.a5(d8,new B.t(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.E(k*c0+j*c1*c4,-1,1)
$.V()
u=B.K()
u.sar(new B.c0(A.A,0.5,A.x,d3,0,B.a([A.K,A.K,D.baW.j(0.78)],t),D.ddv,d3).aA(0,B.bX(new B.t(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ae(p,o,u)}$.V()
d4=B.K()
d4.sar(new B.c0(A.A,0.5,A.x,d3,0,B.a([A.K,A.w.j(0.4)],t),D.dqu,d3).aA(0,n))
d8.ae(p,o,d4)
d7.restore()
d7=B.K()
d7.b=A.ac
d7.c=1.4
d7.r=A.hn.j(0.5).gp(0)
d8.ae(p,o,d7)},
av(d){return!0}}
C.aLS.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.aLT.prototype={
t(){var w,v,u
for(w=this.iK$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a3(0)
w=this.iJ$
w===$&&B.c()
w.t()
this.bvW()}}
C.bu4.prototype={}
C.Wu.prototype={
U(){return new C.bkY()}}
C.bkY.prototype={
gaSM(){var w=this.d
if(w===$)w=this.d=A.cW.au(16)
return w},
B(d){var w=null,v=B.eD(w,w,w,!0,!0,D.AY,w,1,!0,w,0,!1,w,!1,w,w,B.aJ(w,w,w,w,D.aoH,w,w,w,new C.eH8(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fH4,w,w,w,1,w,!0),u=B.m(18),t=A.aR.j(0.1),s=B.I(A.aR.j(0.35),A.r,1),r=x.p
return B.c5(v,D.AY,B.cq(B.a([B.p(w,B.B(B.a([D.bMn,A.as,B.E(B.d(D.d1d[this.gaSM()],w,w,w,w,w,w,D.fnY,w,w,w),1),B.aJ(w,w,w,w,D.bWU,w,w,w,new C.eH9(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bB,w,w,w),A.aA,B.cC(new C.eHa())],r),w,A.Zw,w,w,A.ag,!1),w,!1,!1,w,w)}}
C.Wg.prototype={
U(){return C.hQB()}}
C.bkL.prototype={
ckk(d){var w=d.c,v=C.hQD(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new B.t(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a2()
this.p9()},
q3(d){var w,v,u,t=this
t.e.fu(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.ckk(w)
u=new B.t(-v.a,-v.b).aI(0,t.w)
v=B.kv(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc9N(){var w=this.ch
return new B.t(w.a/2,w.b/2).a9(0,this.x)},
c9R(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.CP[s]
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
b_j(d){this.m(new C.ezC(this,d))
B.f0()
C.q0("bell",D.dqH[A.o.F(A.d.cD(D.CP,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=B.a([B.aJ(m,m,m,m,D.qk,m,m,m,new C.ezN(n,d),m,m,m,m,"Share",m)],k),i=B.cC(new C.ezO(n,l)),h=B.a([new C.f4("All",!1,new C.ezP(n),A.a1x,A.aT,m)],k)
for(w=0;w<10;++w){v=D.CP[w]
h.push(new C.f4(v.a,n.z===v,new C.ezQ(n,v),m,B.b1(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.ac(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=C.lS(A.aT,s,"Time",1,0,new C.ezR(n),u/t)
u=n.w
u=C.lS(A.aT,A.k.ac(u,1)+"x","Zoom",9,0.5,new C.ezS(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.m4:D.GG
return C.oy(A.aT,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",B.x(B.a([new C.ho(h,"GO TO",m),t,u,new C.ho(B.a([new C.f4("Orbits",s,new C.ezT(n),m,A.aT,m),new C.f4("Names",r,new C.ezU(n),m,A.aT,m),new C.f4("Asteroids",q,new C.ezV(n),m,A.aT,m),new C.f4("Music",p,new C.ezW(n),o,A.aT,m)],k),m,m)],k),A.m,m,A.e,A.P,0,A.p))},
c9O(d){var w,v,u,t,s,r=null,q=B.b1(d.z),p=d.c,o=p*8.317,n=new C.ezA(),m=B.m(20),l=B.I(q.j(0.6),A.r,1),k=B.p(r,r,A.f,r,r,new B.o(q,r,r,r,r,r,A.a5),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=B.B(B.a([k,A.ab,B.E(B.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.k1,r,r,r),1),B.aJ(r,r,r,r,A.H_,r,r,r,new C.ezz(this),r,r,r,r,r,A.cd)],w),A.m,r,A.e,A.j,0,r,r)
k=B.d(d.y,r,r,r,r,r,r,F.DW,r,r,r)
v=n.$2("WIDTH",C.H2(d.d*2)+" km")
u=p===0
p=B.B(B.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":B.w(p)+" AU ("+C.H2(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new C.ezB().$1(v))
t=d.f
v=B.B(B.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.ac(t/24,0)+" Earth days":A.k.ac(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=B.B(B.a([n.$2("GRAVITY",B.w(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.ac(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.ac(o,1)+" minutes":A.k.ac(o/60,1)+" hours"
return B.p(r,B.x(B.a([j,A.av,k,A.N,p,A.N,v,A.N,s,A.N,B.B(B.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.E,r,A.e,A.P,0,A.p),A.f,r,r,new B.o(D.WM,r,l,m,r,r,A.n),r,r,r,r,D.aiR,r,r,r)}}
C.bs7.prototype={
a5(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.V()
w=B.K()
w.r=D.AY.gp(0)
a7.aU(new B.a5(0,0,0+a5,0+a6),w)
v=new B.eb()
v.d5(8)
for(w=a7.a,u=0;u<110;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
q.r=A.c.j(0.2+v.aj()*0.5).gp(0)
p=q.H()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc9N()
n=a5.w
if(a5.as)for(a6=A.d.gaf(D.CP),t=new B.f5(a6,new C.f0y()),s=o.a,r=o.b;t.C();){q=a6.gR(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
m.b=A.ac
m.c=1
m.r=A.c.j(0.12).gp(0)
p=m.H()
w.drawCircle(s,r,q*n,p)
p.delete()}if(a5.ax)for(a6=a5.CW,t=o.a,s=o.b,r=a5.cx,u=0;u<a6.length;++u){q=a6[u]
m=a5.f
l=r[u]
k=q+m*0.0016/l
j=(l===0?0:30+150*Math.sqrt(l/30.1))*n
q=Math.cos(k)
m=Math.sin(k)
l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.r=A.c.j(0.5).gp(0)
p=l.H()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=C.hQC(A.d.gI(D.CP))*Math.sqrt(n)*1.4
a6=i*3.2
t=B.K()
s=x.O
t.sar(new B.c0(A.A,0.5,A.x,a4,0,B.a([A.aT.j(0.5),A.K],s),a4,a4).aA(0,B.bX(o,a6)))
a7.ae(o,a6,t)
t=B.K()
t.sar(D.enW.aA(0,B.bX(o,i)))
a7.ae(o,i,t)
if(a5.at){h=C.hiu("Sun",10.5,A.ae)
h.a5(a7,o.a9(0,new B.t(-h.b.c/2,i+4)))}for(a6=A.d.gaf(D.CP),t=new B.f5(a6,new C.f0z()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gR(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=B.b1(l.z)
d=l.a
if(d==="Saturn"){J.bq(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=B.bN(A.J,j*1.3,j*4.2)
a1=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a1.b=A.ac
a1.c=j*0.45
a1.r=A.bM.j(0.55).gp(0)
p=a1.H()
w.drawOval(B.bQ(a0),p)
p.delete()
w.restore()}a0=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a0.r=e.j(0.3).gp(0)
a0.z=A.uE
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a1=B.ar(e,A.w,0.55)
a1.toString
a0.sar(new B.c0(V.xd,0.5,A.x,a4,0,B.a([A.c,e,a1],s),K.a37,a4).aA(0,B.bX(new B.t(g,f),j)))
p=a0.H()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
l.b=A.ac
l.c=2
l.r=A.c.gp(0)
p=l.H()
w.drawCircle(g,f,j+7,p)
p.delete()}if(r&&d==="Earth"){k=a5.f/27.3*2*3.141592653589793
a2=j+11*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a3.r=A.c.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.d6D[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a3.r=A.ae.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=C.hiu(d,10.5,A.ae)
h.a5(a7,new B.t(g+-h.b.c/2,f+(j+4)))}}},
av(d){return!0}}
C.Vv.prototype={
U(){var w=x.i
return new C.aDM(new C.Pl(A.cW),B.c2(5,0,!1,w),B.c2(5,0,!1,w),B.c2(5,null,!1,x.cD),A.J,A.J,B.a([],x.g),$,A.bE,0,B.a([],x.X),null,null)}}
C.aDM.prototype={
cxa(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c9Q(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.ebz
s.cy=new B.t(s.ay,0)
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
s.m(new C.dZD())},
a_(){this.a2()
this.p9()},
q3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fu(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.zc[r]
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
break}}}if(A.d.d9(s,new C.e_5()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
E.dX(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||A.d.gal(v).aF(0,i.cx).gcH()>120)v.push(i.cx)
if(v.length>700)A.d.cG(v,0)
if(i.cx.gcH()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bNg()
else n=n==="weight"?p.cEv():p.bFp()
w=x.p
v=B.a([],w)
for(u=0;u<3;++u){t=D.dnE[u]
v.push(new C.f4(t.b,p.d===t.a,new C.dZS(p,t),t.c,A.cZ,o))}v=B.a([new C.ho(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=B.a([new C.f4("Hammer",!s,new C.dZT(p),Ad.GB,A.cZ,o),new C.f4("Feather",s,new C.dZU(p),U.NW,A.cZ,o),new C.f4(q,r,new C.dZY(p),A.Gp,A.aR,o)],w)
q=p.w
A.d.v(v,B.a([new C.ho(r,o,o),C.lS(A.cZ,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new C.dZZ(p),q),new C.ho(B.a([new C.j7(A.ua,"Drop!",new C.e__(p),A.bm,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=C.lS(A.cZ,""+A.k.V(s)+" kg","Your weight",120,20,new C.e_0(p),s)
r=p.ax
A.d.v(v,B.a([s,C.lS(A.cZ,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new C.e_1(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=C.lS(A.cZ,A.k.ac(s,1)+" km/s","Speed",13,0,new C.e_2(p),s)
r=p.ch
A.d.v(v,B.a([s,C.lS(A.cZ,A.k.ac(r,1)+"x out","View",8,0.5,new C.e_3(p),r),new C.ho(B.a([new C.j7(A.of,"Fire!",p.gc9P(),A.bm,o),new C.j7(A.ua,"Falls",new C.e_4(p),A.c,o),new C.j7(A.rl,"Orbit 7.7",new C.dZV(p),A.c,o),new C.j7(D.bLN,"Oval 9",new C.dZW(p),A.c,o),new C.j7(A.C9,"Escape",new C.dZX(p),A.c,o)],w),o,o)],w))}return C.oy(A.cZ,A.fV,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",B.x(v,A.m,o,A.e,A.P,0,A.p))},
bNg(){return new B.D(D.bvm,B.cC(new C.dZC(this)),null)},
cEv(){var w,v,u,t=null,s=[D.eO3,D.ePw,D.ePD,D.ePW,D.ePB,D.eQ2,D.eOD,D.eQo,D.ePh],r=x.p,q=B.a([D.fuI,A.R],r)
for(w=0;w<9;++w){v=s[w]
u=B.b1(v.c)
q.push(new B.D(A.ct,new B.cb(A.aN,A.e,A.j,A.m,t,A.p,t,0,B.a([new B.a7(62,t,new B.y(v.a,t,new B.F(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new B.bA(1,A.bd,new B.BE(new C.dZE(this,v),t),t)],r),t),t))}q.push(A.av)
q.push(D.fx7)
return B.cq(q,t,A.iQ,t,t,A.ag,!1)},
bFp(){return B.cC(new C.dZA(this))}}
C.baX.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.V(),e=B.K()
e.r=D.AY.gp(0)
d.aU(new B.a5(0,0,0+h,0+g),e)
w=new B.eb()
w.d5(2)
for(e=d.a,v=0;v<80;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
r.r=A.c.j(0.2+w.aj()*0.5).gp(0)
q=r.H()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=B.K()
e.sar(new B.c0(A.A,0.5,A.x,i,0,B.a([A.K,A.aR.j(0.35),A.K],x.O),D.deq,i).aA(0,B.bX(g,p*1.1)))
d.ae(g,p*1.06,e)
e=B.K()
e.sar(D.enQ.aA(0,B.bX(g,p)))
d.ae(g,p,e)
o=g.a9(0,new B.t(0,-p))
f=f.r
e=x.v
n=new B.aI(f,A.ai,i,i,B.a([],e))
u=o.a
t=o.b
s=t+3
n.D(new B.b0(u-16,s))
n.D(new B.ap(u,t-400*h-4))
n.D(new B.ap(u+16,s))
n.D(new B.bv())
s=B.K()
s.r=A.al.gp(0)
d.aJ(n,s)
s=o.a9(0,new B.t(0,-400*h-6))
u=B.K()
u.r=A.c.gp(0)
d.ae(s,4,u)
u=j.e
if(u.length>1){e=B.a([],e)
m=new B.aI(f,A.ai,i,i,e)
f=g.a
t=g.b
m.D(new B.b0(f+A.d.gI(u).a*h,t+A.d.gI(u).b*h))
for(u=B.d1(u,1,i,B.S(u).c),s=u.$ti,u=new B.bS(u,u.gL(0),s.k("bS<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new B.ap(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.by(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.V()
f=B.K()
f.b=A.ac
f.c=2.4
f.d=A.bG
f.r=A.cZ.j(0.9).gp(0)
d.aJ(m,f)}if(j.f){f=j.d
k=g.a9(0,new B.t(f.a*h,f.b*h))
h=B.K()
h.r=A.cZ.j(0.4).gp(0)
h.z=H.ph
d.ae(k,7,h)
h=B.K()
h.r=A.c.gp(0)
d.ae(k,4,h)}},
av(d){return!0}}
C.W8.prototype={
U(){return new C.bkI(new B.cz(null,x.z),$,A.bE,0,B.a([],x.X),null,null)}}
C.bkI.prototype={
a_(){this.a2()
this.p9()},
q3(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Qx[l.e],i=D.Qx[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=B.a([B.aJ(k,k,k,k,D.qk,k,k,k,new C.esw(l,d),k,k,k,k,"Share",k)],u)
s=B.E(B.b4(k,k,k,new C.brG(f,g,v,k),A.fL),1)
r=g.a
q=v<10?A.k.ac(v,1):C.H2(v)
p=f.a
q=B.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.hx,A.L,k,k)
o=C.H2(v*v*v)
n=A.a.cc(p,"s")?"":"s"
h=B.x(B.a([s,B.p(k,B.x(B.a([q,A.av,B.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,R.v8,A.L,k,k),A.bC,B.d(p+": "+C.H2(w*2)+" km wide. "+r+": "+C.H2(h*2)+" km wide.",k,k,k,k,k,k,R.DR,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.bxy,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=B.a([],u)
for(m=0;m<10;++m){w=D.Qx[m]
r.push(new C.f4(w.a,l.e===m,new C.esx(l,m),k,B.b1(w.c),k))}w=B.a([],u)
for(m=0;m<10;++m){s=D.Qx[m]
w.push(new C.f4(s.a,l.f===m,new C.esy(l,m),k,B.b1(s.c),k))}return C.oy(A.c8,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new B.eG(h,l.d),"SIZE COMPARE",B.x(B.a([new C.ho(r,"FIRST",k),new C.ho(w,"SECOND",k)],u),A.m,k,A.e,A.P,0,A.p))}}
C.brG.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.V()
w=B.K()
w.r=D.bhs.gp(0)
d.aU(new B.a5(0,0,0+h,0+g),w)
v=new B.eb()
v.d5(6)
for(w=d.a,u=0;u<70;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
q.r=A.c.j(0.2+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new B.t(h,g)
w=new C.eZH(d)
t=this.c
w.$3(m,o,B.b1(t.c))
s=o-n
l=new B.t(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,B.b1(s.c))
w=B.K()
w.b=A.ac
w.c=1.4
w.r=A.ae.gp(0)
d.ae(l,n+3,w)
k=B.fS(i,i,i,i,B.cX(i,i,i,i,i,i,i,i,i,D.ffT,s.a),A.a6,A.c5,i,A.dP,A.c4)
k.eI()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbc(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbc(g)-6
h=g}k.a5(d,l.a9(0,new B.t(-w/2,h)))
j=B.fS(i,i,i,i,B.cX(i,i,i,i,i,i,i,i,i,D.fjf,t.a),A.a6,A.c5,i,A.dP,A.c4)
j.eI()
t=j.b
h=t.c
t=t.a.c
j.a5(d,m.a9(0,new B.t(-h/2,-t.gbc(t)/2)))},
av(d){return!0}}
C.aLU.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bxk.prototype={
t(){var w,v,u
for(w=this.iK$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a3(0)
w=this.iJ$
w===$&&B.c()
w.t()
this.bvY()}}
C.aMn.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bxt.prototype={
t(){var w,v,u
for(w=this.iK$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a3(0)
w=this.iJ$
w===$&&B.c()
w.t()
this.bwr()}}
C.aMq.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bxv.prototype={
t(){var w,v,u
for(w=this.iK$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a3(0)
w=this.iJ$
w===$&&B.c()
w.t()
this.bwu()}}
C.PQ.prototype={}
C.Uz.prototype={
U(){return C.hQz()}}
C.bjs.prototype={
a_(){this.a2()
this.p9()},
q3(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fu(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dX(70,"",500,0.3,0.5,"sine")}}A.d.bt(w,new C.dHQ())},
b_k(d){var w,v,u,t=this.Q
if(t.A(0,A.ax))return
w=this.gb8m()
v=d.aF(0,new B.t(t.a/2,t.b*0.42))
u=A.k.E(v.gcH()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new C.PQ(t,u,1.2,new B.vM(1,30+A.cW.aj()*40,0.9,0.7).m1()))
C.q0("bell",60+A.k.V(12-u)*2,400,0.35)},
gb8m(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.E(m.length===0?3:new B.N(m,new C.dHE(),B.S(m).k("N<1,L>")).f9(0,A.vt),1.0001,99))
m=x.p
w=B.a([B.aJ(n,n,n,n,D.qk,n,n,n,new C.dHF(o,d),n,n,n,n,"Share",n)],m)
v=B.cC(new C.dHG(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.ac(s,0)+" Suns":C.fw4(s)+" Suns"
t=C.lS(A.by,s,"Mass",1,0,new C.dHI(o),u/t)
u=B.a([new C.f4("Star (10)",!1,new C.dHJ(o),n,A.by,n),new C.f4("Cygnus X-1 (21)",!1,new C.dHK(o),n,A.by,n),new C.f4("Milky Way core (4 million)",!1,new C.dHL(o),n,A.by,n),new C.f4("M87 (6.5 billion)",!1,new C.dHM(o),n,A.by,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.m4:D.GG
return C.oy(A.by,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",B.x(B.a([t,new C.ho(u,"LIKE",n),new C.ho(B.a([new C.f4("Glowing ring",s,new C.dHN(o),n,A.by,n),new C.f4("Bent light",r,new C.dHO(o),n,A.by,n),new C.f4("Music",q,new C.dHP(o),p,A.by,n),new C.j7(A.oc,"Clear",new C.dHH(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.P,0,A.p))},
af3(d,e){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,D.fbD,w,w,w),A.bC,B.d(e,w,2,w,w,w,w,I.A1,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
C.bak.prototype={
a5(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.V()
w=B.K()
w.r=D.bjR.gp(0)
b2.aU(new B.a5(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new B.t(w,v)
t=this.b
s=t.gb8m()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,B.M)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new B.t(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.E(o/h,0,n)
i=new B.t(w+k/h*g,v+j/h*g)}}k=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
k.r=A.c.j(0.6).gp(0)
f=k.H()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=B.K()
b0.b=A.ac
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=Q.RM
b2.ae(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=B.ar(A.vA,A.fu,d)
n.toString
k=Math.cos(a4)
$.V()
j=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gp(0)
f=j.H()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
k.r=n.j(b1).gp(0)
f=k.H()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.V()
b1=B.K()
b1.sar(new B.c0(A.A,0.5,A.x,null,0,B.a([A.w,A.w.j(0)],x.O),D.cTc,null).aA(0,B.bX(u,b0)))
b2.ae(u,b0,b1)
b1=B.K()
b1.r=A.w.gp(0)
b2.ae(u,s,b1)
b1=B.K()
b1.b=A.ac
b1.c=1
b1.r=A.by.j(0.55).gp(0)
b2.ae(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,B.M)(b0),++m){a7=b0[m]
a0=s*a7.b
t=w+Math.cos(a7.a)*a0
r=v+Math.sin(a7.a)*a0*0.9
a8=1+A.k.E(3.5/a7.b,0,5)
a9=3*a8
q=-Math.sin(a7.a)*a9
o=Math.cos(a7.a)*a9
n=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
n.c=4.2/Math.sqrt(a8)
n.d=A.bG
k=a7.d
n.r=k.j(A.k.E(a7.b/2,0.2,1)).gp(0)
f=n.H()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
o.r=k.j(0.2).gp(0)
o.z=H.ph
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
av(d){return!0}}
C.aeT.prototype={}
C.Vs.prototype={
U(){var w=x.r,v=x.g
return new C.bjT(new B.cz(null,x.z),new C.Pl(A.cW),B.a([],w),A.J,A.J,B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.a([],v),A.J,A.J,$,A.bE,0,B.a([],x.X),null,null)}}
C.bjT.prototype={
a_(){this.a2()
this.a_k()
this.p9()},
a_k(){var w,v,u,t,s,r,q,p,o=this,n=new B.eb()
n.d5(5)
w=B.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new C.aeT(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.au(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.he()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new C.aeT(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cx0(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.edC
k.cx=D.edF
w=new B.eb()
w.d5(9)
v=k.cy
A.d.a8(v)
u=B.a([],x.r)
for(t=0;t<900;++t)u.push(new C.aeT(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
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
for(s=k.ay,r=x.S,s=B.d1(s,0,B.dB(900,"count",r),B.S(s).c),o=s.$ti,s=new B.bS(s,s.gL(0),o.k("bS<ak.E>")),o=o.k("ak.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new B.t(l*n,Math.sin(m)*n))}k.db=v
v=B.a([],u)
for(u=k.ay,u=B.d1(u,0,B.dB(900,"count",r),B.S(u).c),r=u.$ti,u=new B.bS(u,u.gL(0),r.k("bS<ak.E>")),r=r.k("ak.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new B.t(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
E.dX(110,"",900,0.5,0.45,"sine")},
q3(d){var w,v,u,t,s,r,q,p=this
p.e.fu(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aF(0,p.fx)
s=Math.max(0.25,t.gcH())
r=t.eQ(0,s).aI(0,0.9/(s*s))
w=p.fy.a9(0,r.aI(0,u))
p.fy=w
v=p.cx.aF(0,r.aI(0,u))
p.cx=v
w=p.fx.a9(0,w.aI(0,u))
p.fx=w
v=p.CW.a9(0,v.aI(0,u))
p.CW=v
q=new C.dYm(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=B.a([B.aJ(r,r,r,r,D.qk,r,r,r,new C.dYc(s,d),r,r,r,r,"Share",r)],q),o=B.b4(r,r,r,new C.bfB(s,r),A.ax),n=A.w.j(0.5),m=B.m(14),l=B.I(A.bz,A.r,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=B.a([o,B.ao(8,B.p(r,B.d(w,r,r,r,r,r,r,Aa.a8z,r,r,r),A.f,r,r,new B.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bT,r,r,r),r,r,10,10,r,r)],q)
l=B.a([],q)
for(v=0;v<3;++v){u=D.d9S[v]
o=s.Q===u.a&&!s.ch
l.push(new C.f4(u.b,o,new C.dYd(s,u),r,A.hb,r))}l.push(new C.f4("Collide",s.ch,new C.dYe(s),A.yz,A.c8,r))
o=B.a([new C.ho(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=C.lS(A.hb,""+n,"Arms",6,2,new C.dYf(s),n)
l=s.r
A.d.v(o,B.a([n,C.lS(A.hb,A.k.ac(l,1),"Winding",6,0.8,new C.dYg(s),l)],q))}n=s.as
o.push(C.lS(A.hb,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new C.dYh(s),n))
n=s.ax
o.push(C.lS(A.hb,A.k.ac(n,1)+"x","Speed",4,0,new C.dYi(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.m4:D.GG
o.push(new C.ho(B.a([new C.f4("Dark matter",n,new C.dYj(s),r,A.by,r),new C.f4("You are here",l,new C.dYk(s),r,A.aT,r),new C.f4("Music",w,new C.dYl(s),t,A.hb,r)],q),r,r))
return C.oy(A.hb,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new B.eG(new B.an(A.a_,r,A.b1,A.t,m,r),s.d),"GALAXY",B.x(o,A.m,r,A.e,A.P,0,A.p))}}
C.bfB.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.V()
w=B.K()
w.r=D.bm2.gp(0)
a3.aU(new B.a5(0,0,0+a1,0+a2),w)
v=new B.eb()
v.d5(3)
for(w=a3.a,u=0;u<90;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
q.r=A.c.j(0.15+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new B.t(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=B.K()
t.sar(new B.c0(A.A,0.5,A.x,a0,0,B.a([A.aC.j(0.32),A.aC.j(0.12),A.K],x.O),D.cgB,a0).aA(0,B.bX(o,a2)))
a3.ae(o,a2,t)}m=new C.ddG(a1.as)
a2=n*0.3
t=B.K()
t.sar(new B.c0(A.A,0.5,A.x,a0,0,B.a([A.h0.j(0.85),A.aE.j(0.3),A.K],x.O),a0,a0).aA(0,B.bX(o,a2)))
a3.ae(o,a2,t)
if(!a1.ch){l=B.K()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.M)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=A.k.F(q,360)
l.r=new N.vN(1,r,q>200?0.45:0.55,1).m1().j(0.35+(1-s)*0.5).gp(0)
s=s<0.3?1.3:1
p=l.H()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.V()
a2=B.K()
a2.b=A.ac
a2.c=1.6
a2.r=A.aT.gp(0)
a3.ae(g,9,a2)
f=B.fS(a0,a0,a0,a0,D.f8y,A.a6,A.c5,a0,A.dP,A.c4)
f.eI()
f.a5(a3,g.a9(0,new B.t(-f.b.c/2,12)))}}else{e=n*0.8
l=B.K()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.M)(a2),++k){d=a2[k]
l.r=D.bnn.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.M)(a2),++k){d=a2[k]
l.r=D.bhM.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.V()
w=B.K()
w.r=A.h0.gp(0)
a3.ae(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=B.K()
w.r=A.i7.gp(0)
a3.ae(a1,5,w)}},
av(d){return!0}}
C.W4.prototype={
U(){return new C.bkH(new B.cz(null,x.z),new C.Pl(A.cW),$,A.bE,0,B.a([],x.X),null,null)}}
C.bkH.prototype={
a_(){this.a2()
this.p9()},
q3(d){var w,v,u,t=this
t.e.fu(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.F(t.r+d*0.04*v,1)
else{w=A.k.F(t.w+d*0.05*v,1)
t.w=w
u=A.k.bm(w*4)
if(u!==A.k.bm(t.as))C.q0("bell",60+u*4,500,0.35)
t.as=u}},
gcsC(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gciV(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=B.a([B.aJ(q,q,q,q,D.qk,q,q,q,new C.erL(r,d),q,q,q,q,"Share",q)],p),n=B.E(new B.eG(B.b4(q,q,q,new C.bqW(r,q),A.fL),r.d),1)
if(r.f==="seasons")w=r.gcsC()
else{w=r.gciV()
v=A.k.an(A.k.E(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=B.x(B.a([n,B.p(q,B.d(w,q,q,q,q,q,q,A3.Uf,A.L,q,q),A.f,q,q,q,q,q,q,q,L.aj_,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A0.yJ:A.id
t=r.Q
s=t?A.m4:D.GG
s=B.a([new C.ho(B.a([new C.f4("Seasons",n==="seasons",new C.erM(r),A.Cl,A.bu,q),new C.f4("Moon phases",n==="moon",new C.erN(r),A.w3,A.bu,q),new C.f4(u,!1,new C.erO(r),v,A.bu,q),new C.f4("Music",t,new C.erP(r),s,A.bu,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=C.lS(A.bu,D.d9a[A.o.F(A.k.bm(n*12),12)],"Month",1,0,new C.erQ(r),n)
v=r.z
A.d.v(s,B.a([n,C.lS(A.bu,A.k.ac(v,1)+"\xb0","Tilt",90,0,new C.erR(r),v)],p))}else{p=r.w
s.push(C.lS(A.bu,""+(A.k.bm(p*29.5)+1),"Day of month",1,0,new C.erS(r),p))}p=r.y
s.push(C.lS(A.bu,A.k.ac(p,1)+"x","Speed",4,0.2,new C.erT(r),p))
return C.oy(A.bu,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",B.x(s,A.m,q,A.e,A.P,0,A.p))}}
C.bqW.prototype={
a5(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.V(),b8=B.K()
b8.r=D.AY.gp(0)
b9.aU(new B.a5(0,0,0+b5,0+b6),b8)
w=new B.eb()
w.d5(4)
for(b8=b9.a,v=0;v<70;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
r.r=A.c.j(0.2+w.aj()*0.4).gp(0)
q=r.H()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new B.t(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=B.bN(p,n*2,o*2)
t=B.K()
t.b=A.ac
t.c=1
t.r=A.aZ.gp(0)
b9.dX(u,t)
t=B.K()
t.sar(D.enS.aA(0,B.bX(p,34)))
b9.ae(p,22,t)
m=s.r*2*3.141592653589793
l=p.a9(0,new B.t(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aF(0,l).eQ(0,p.aF(0,l).gcH())
J.bq(b8.save())
b8.translate(l.a,l.b)
s=B.K()
s.r=D.bjN.gp(0)
b9.ae(A.J,k,s)
J.bq(b8.save())
b7=new B.aI(b7.r,A.ai,b4,b4,B.a([],x.v))
b7.D(new B.jC(B.bX(A.J,k)))
b9.mE(0,b7)
b7=i.aI(0,k).aI(0,0.35)
s=k*1.1
b6=B.K()
b6.sar(D.eo0.aA(0,B.bX(A.J,s)))
b9.ae(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new B.t(s,b6)
b7=new B.t(-s,-b6).aI(0,k).aI(0,1.7)
b5=h.aI(0,k).aI(0,1.7)
t=B.K()
t.c=2
t.r=A.cs.gp(0)
b9.br(b7,b5,t)
t=h.aI(0,k).aI(0,1.7)
b5=B.K()
b5.r=A.cs.gp(0)
b9.ae(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=B.fS(b4,b4,b4,b4,B.cX(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aSC,b5),A.a6,A.c5,b4,A.dP,A.c4)
f.eI()
f.a5(b9,l.a9(0,new B.t(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=B.K()
r.b=A.ac
r.c=1
r.r=A.aZ.gp(0)
b9.ae(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a0.r=A.aT.j(0.6).gp(0)
a0.c=2
q=a0.H()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=B.K()
r.sar(new B.c0(new B.df(-0.5,0),1.1,A.x,b4,0,B.a([D.beZ,D.agU],x.O),D.d0b,b4).aA(0,B.bX(p,k)))
b9.ae(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.a9(0,new B.t(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=B.K()
r.r=D.bbW.gp(0)
b9.ae(a1,a2,r)
J.bq(b8.save())
b7=b7.r
r=x.v
d=new B.aI(b7,A.ai,b4,b4,B.a([],r))
d.D(new B.jC(B.bX(a1,a2)))
b9.mE(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=B.K()
a3.r=A.bO.gp(0)
b9.aU(new B.a5(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aF(0,p).eQ(0,a1.aF(0,p).gcH())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.atX[a5]
a7=new B.aq(A.U,A.S,A.Y,A.Z,A.W)
a7.r=A.aR.j(0.45).gp(0)
a7.z=A.lI
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new B.t(u,t)
a9=Math.min(b5,b6)*0.1
b6=B.K()
b6.r=D.bbR.gp(0)
b9.ae(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bq(b8.save())
b6=new B.aI(b7,A.ai,b4,b4,B.a([],r))
b6.D(new B.jC(B.bX(a8,a9)))
b9.mE(0,b6)
s=s.w
b1=new B.aI(b7,A.ai,b4,b4,B.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.D(new B.b0(u,b5))
b6=b2>0
b1.aD4(new B.t(u,t+a9),b6,new B.aQ(a9,a9))
if(b0<0.5)b6=b2<0
b1.aD4(new B.t(u,b5),b6,new B.aQ(a9*Math.abs(1-2*b0),a9))
b6=B.K()
b6.r=A.bO.gp(0)
b9.aJ(b1,b6)
b8.restore()
b8=B.K()
b8.b=A.ac
b8.c=1
b8.r=A.aZ.gp(0)
b9.ae(a8,a9,b8)
b3=B.fS(b4,b4,b4,b4,D.f8z,A.a6,A.c5,b4,A.dP,A.c4)
b3.eI()
b3.a5(b9,a8.a9(0,new B.t(-b3.b.c/2,a9+6)))}},
av(d){return!0}}
C.aLt.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bxd.prototype={
t(){var w,v,u
for(w=this.iK$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a3(0)
w=this.iJ$
w===$&&B.c()
w.t()
this.bvv()}}
C.aLQ.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bxj.prototype={
t(){var w,v,u
for(w=this.iK$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a3(0)
w=this.iJ$
w===$&&B.c()
w.t()
this.bvT()}}
C.aMm.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bxs.prototype={
t(){var w,v,u
for(w=this.iK$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a3(0)
w=this.iJ$
w===$&&B.c()
w.t()
this.bwq()}}
var z=a.updateTypes(["R(tB)","~()","R(a4y)","R(CB)","aA<~>()","H(tB,H)","L(L,tB)","R(Cx)","R(Zq)","R(abw)","R(va)","R(a3d)","R(ns)","Wu()","a8p()","W2()","Wh()","W3()","Ws()","UF()","aeY(Y,H)","adQ(Y,H)","H(Cx,Cx)","R(mI)","n(ed)","R(aeM)","R(a0F)","R(CL)","R(ac_)","R(adT)","R(abK)","H(H,qU)","H(H,CB)","n(qU)","~(qU,ai<n>,H)","qU?(CB)","R(qU)","v(n,a0s)","R(Q8)","R(aaq)","~(AH)","~(a8<@,@>)","~(x8,n,t,u,L)","~(n,tB)","Vg()","L(PQ)","Nv(Y)","V_(Y,br<L>,br<L>)","Wy()","Vo()","UB()","Vf()","VY()","W7()","Wr()","VX()","~(n)","ct(abc)","R(abb)","Vu()","Wg()","Vv()","Uz()","Vs()","W8()","W4()","UA()","R(PQ)","VH(Y)"])
C.fyr.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+23}
C.fnY.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gI(d.e.split(". "))+"."},
$S:z+24}
C.fva.prototype={
$1(d){var w
if(!this.a.LP(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fvb.prototype={
$1(d){return d.x},
$S:z+0}
C.fyo.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fyp.prototype={
$1(d){var w
if(!this.a.LP(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fyq.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.eaG.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eaH.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.z(this.b,this.c))},
$S:0}
C.eaI.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd1(v).Q
v.toString
w.me(v,A.dZ,A.is)}},
$S:9}
C.eaT.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.eaU.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.eaP.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.eaN.prototype={
$2(d,e){var w=this.a
w.r.push(B.cL(B.dE(0,0,0,d,0,0),new C.eaO(w,this.b,e)))},
$S:1859}
C.eaO.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.eaQ.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gWj().ak5(0,u[1],u[2],u[3])
u[4].bQ(0,new C.eaL(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dX(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.eaM(w.a,v,w.f,w.r))},
$S:0}
C.eaL.prototype={
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
C.eaM.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bm(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eaR.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gWj().akP(t,u[1],s,u[3])
E.dX(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.eaK(w.a,v,w.e,w.f))},
$S:0}
C.eaK.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bm(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eaS.prototype={
$0(){E.dX(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.eaJ(w,this.b))},
$S:0}
C.eaJ.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.eaX.prototype={
$0(){var w=this.a
return w.m(new C.eaW(w))},
$S:0}
C.eaW.prototype={
$0(){return this.a.at=!0},
$S:0}
C.eaY.prototype={
$0(){var w=this.a
return w.m(new C.eaV(w))},
$S:0}
C.eaV.prototype={
$0(){return this.a.at=!1},
$S:0}
C.eaZ.prototype={
$0(){var w=this.a
w.f.saX(0,this.b)
w.Pg()},
$S:0}
C.eb_.prototype={
$0(){return this.a.Yl(this.b)},
$S:0}
C.eb0.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Pg():w.aW5()},
$S:2}
C.eb1.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Pg():w.aW5()},
$S:0}
C.eoW.prototype={
$2(d,e){return d+e},
$S:1860}
C.epf.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.epe(w,d))},
$S:1861}
C.epe.prototype={
$0(){var w=B.aK(J.q(this.b,"unlocked"))
w=w==null?null:A.k.O(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.epg.prototype={
$0(){},
$S:0}
C.eph.prototype={
$0(){},
$S:0}
C.eoY.prototype={
$0(){return this.a.m(new C.eoX(this.b,this.c))},
$S:0}
C.eoX.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eoN.prototype={
$1(d){return this.a.cx===d},
$S:34}
C.eoO.prototype={
$1(d){return this.a.cx=d},
$S:31}
C.eoP.prototype={
$1(d){return this.a.cy===d},
$S:34}
C.eoQ.prototype={
$1(d){return this.a.cy=d},
$S:31}
C.eoR.prototype={
$1(d){return this.a.db===d},
$S:34}
C.eoS.prototype={
$1(d){return this.a.db=d},
$S:31}
C.eoT.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:34}
C.eoU.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.M(0,d)},
$S:31}
C.eoV.prototype={
$0(){var w=this.a
return w.m(w.gawK())},
$S:0}
C.eoL.prototype={
$1(d){return this.a.$1(!0)},
$S:76}
C.eoM.prototype={
$1(d){return this.a.$1(!1)},
$S:128}
C.eoK.prototype={
$1(d){return this.a.$1(!1)},
$S:171}
C.ep8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.au(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bhj(o,p),n)
w=this.b
v=C.bzM("WORLD",w.a,w.c)
u=C.bzM("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.cs:A.bm
t=C.bzM("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.CH[o.db].d?A.cs:A.c
q=x.p
s=B.a([v,u,t,C.bzM("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bzM("HEIGHT",""+A.k.V(A.k.E(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.B(s,A.m,p,A.iy,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bEm(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rx[w].a+".":"You landed on every world!"
v=B.a([new C.j7(A.od,"Again",new C.ep3(o),A.c,p),new C.j7(A.p1,"Rebuild",new C.ep4(o),A.aT,p)],q)
if(o.d+1<7)v.push(new C.j7(A.jP,"Next world",new C.ep5(o),A.bm,p))
n.push(C.hme("Perfect landing!",w,A.bm,v))}if(o.as==="crashed")n.push(C.hme("Crash!",o.at,A.cs,B.a([new C.j7(A.od,"Try again",new C.ep6(o),A.bm,p),new C.j7(A.p1,"Rebuild",new C.ep7(o),A.aT,p)],q)))
return new B.an(A.a_,p,A.b1,A.t,n,p)},
$S:67}
C.ep3.prototype={
$0(){var w=this.a
return w.m(w.gawK())},
$S:0}
C.ep4.prototype={
$0(){var w=this.a
return w.m(new C.ep0(w))},
$S:0}
C.ep0.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.ep5.prototype={
$0(){var w=this.a
return w.m(new C.ep_(w))},
$S:0}
C.ep_.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.ep6.prototype={
$0(){var w=this.a
return w.m(w.gawK())},
$S:0}
C.ep7.prototype={
$0(){var w=this.a
return w.m(new C.eoZ(w))},
$S:0}
C.eoZ.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.ep9.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.ep2(v,w))},
$S:0}
C.ep2.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.epa.prototype={
$1(d){return this.a.y=d},
$S:8}
C.epb.prototype={
$1(d){return this.a.Q=d},
$S:8}
C.epc.prototype={
$1(d){return this.a.z=d},
$S:8}
C.epd.prototype={
$0(){var w=this.a
return w.m(new C.ep1(w))},
$S:0}
C.ep1.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dIh.prototype={
$0(){var w=0,v=B.j(x.a),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=$.hhw
if(q==null)q=$.hhw=C.cIC()
w=3
return B.b(B.iP(B.a([q,$.r2().bgq("assets/data/three.min.js")],x.aJ),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kJ(0,B.cP(J.q(s,1)))
q.m(new C.dIg(q,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:49}
C.dIg.prototype={
$0(){return this.a.d=x.F.a(J.q(this.b,0))},
$S:0}
C.dHU.prototype={
$0(){return this.a.bVW(B.aU(J.q(this.b,"group")))},
$S:0}
C.dHV.prototype={
$1(d){return A.a.aZ(A.o.fW(A.o.E(A.k.V(d*255),0,255),16),2,"0")},
$S:325}
C.dIi.prototype={
$0(){return C.a8o("kick",0.25)},
$S:0}
C.dHW.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dHX.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.dHY.prototype={
$0(){return C.a8o("kick",0.5)},
$S:0}
C.dHZ.prototype={
$0(){return E.dX(1300+this.a.R8.au(900),"",40,0,0.2,"square")},
$S:0}
C.dI0.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.ch
if(w===2)w=1
else w=w===1?0:2
u.ch=w}else{w=this.a
v=w.ay
if(v.q(0,u))v.W(0,u)
else{v.M(0,u)
if(w.ch===2)w.ch=1}if(v.a===0&&w.ch===0)w.ch=2
u=w}if(u.cx!=null&&!A.d.b3(u.d.e,new C.dI_(u)))u.cx=null
u.go=0},
$S:0}
C.dI_.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.ayu(d)},
$S:z+11}
C.dHR.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
C.dHS.prototype={
$0(){var w=this.a
return w.m(w.gc5s())},
$S:0}
C.dHT.prototype={
$0(){return this.a.ahI(null)},
$S:0}
C.dI7.prototype={
$0(){var w=this.a.as
return w==null?null:w.f3(0,B.G(["t","shot"],x.N,x.A))},
$S:0}
C.dI8.prototype={
$0(){return this.a.cBd(this.b.a)},
$S:0}
C.dI9.prototype={
$0(){return this.a.ahI(this.b)},
$S:0}
C.dIa.prototype={
$1(d){var w=this.a
return w.m(new C.dI6(w,d))},
$S:7}
C.dI6.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.dIb.prototype={
$0(){var w=this.a
return w.m(new C.dI5(w,this.b))},
$S:0}
C.dI5.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.dIc.prototype={
$0(){var w=this.a
return w.m(new C.dI4(w))},
$S:0}
C.dI4.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.dId.prototype={
$0(){var w=this.a
return w.m(new C.dI3(w))},
$S:0}
C.dI3.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f3(0,B.G(["t","reset"],x.N,x.A))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.KO},
$S:0}
C.dIe.prototype={
$0(){var w=this.a
return w.m(new C.dI2(w))},
$S:0}
C.dI2.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aYK()
else w.p2=null},
$S:0}
C.dIf.prototype={
$0(){var w=this.a
return w.m(new C.dI1(w))},
$S:0}
C.dI1.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
C.c3l.prototype={
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
$S:303}
C.c3m.prototype={
$1(d){var w=new B.rV([],[]).pM(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:481}
C.fhN.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)},
$S:209}
C.fhO.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)||w.h(d,1)},
$S:209}
C.fhP.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)!==w.h(d,1)},
$S:209}
C.fhW.prototype={
$1(d){return!J.q(d,0)},
$S:209}
C.fhX.prototype={
$1(d){var w=J.a4(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:209}
C.fhY.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:209}
C.dJX.prototype={
$1(d){return this.a.atr(0)},
$S:9}
C.dJB.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.i2W(),B.S(w).k("N<1,H>")).fH(0)},
$S:0}
C.dJE.prototype={
$1(d){return""+d},
$S:80}
C.dJY.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dJz.prototype={
$1(d){return this.a.atr(this.b)},
$S:9}
C.dJA.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.axe(0)
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
p=a1.axd(0,a0,a1.m5(0.82,0.25),0)
o=a1.axd(0,a0,a1.m5(0.82,0.65),0)
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
C.dJF.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.axe(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.Cx(p,"switch",new B.t(0.14*q.a,r*q.b),0))}o.mA(0,w.e,o.m5(0.86,0.5))},
$S:0}
C.dJu.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dJv.prototype={
$2(d,e){return A.k.aL(d.c.b,e.c.b)},
$S:z+22}
C.dJw.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dJx.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dJy.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.ad1(this.c)
if(v.ax)C.J4("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gI(w)
v.CW=!1
if(v.ax)E.dX(140,"",250,0,0.3,"square")}},
$S:0}
C.dJG.prototype={
$0(){},
$S:0}
C.dJH.prototype={
$0(){return A.d.cG(this.a.e,this.b)},
$S:0}
C.dJI.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dJD.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bt(w.e,new C.dJC(v))
w.cy=null},
$S:0}
C.dJC.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
C.dJt.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mA(0,this.b,new B.t(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
C.dJR.prototype={
$0(){var w=this.a
return w.m(new C.dJQ(w))},
$S:0}
C.dJQ.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dJS.prototype={
$2(d,e){var w=null,v=this.a,u=new B.au(e.b,e.d)
v.x=u
return B.aB(A.cc,B.jD(B.b4(w,w,w,new C.bbp(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dJL(v),w,w,w,new C.dJM(v),new C.dJN(v),new C.dJO(v),w,w,w,w,w,w,w,w,w,w,new C.dJP(v),w,w,w,!1,A.a4)},
$S:37}
C.dJP.prototype={
$1(d){return this.a.c7f(d.b)},
$S:66}
C.dJN.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cfF(u)
if(t!=null){v.as=t
v.at=u
return}w=v.ay1(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aF(0,u)}},
$S:51}
C.dJO.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.t(A.k.E(w.a+u.Q.a,46,u.x.a-46),A.k.E(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:21}
C.dJM.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bZv(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bt(v,new C.dJJ(w))
u=t.as
u.toString
v.push(new C.ns(u,w.a,w.b))
B.kr()}}t.z=t.as=null},
$S:43}
C.dJJ.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
C.dJL.prototype={
$1(d){return this.a.aw2(d.b)},
$S:278}
C.dJT.prototype={
$0(){return this.a.bAb(this.b.a)},
$S:0}
C.dJU.prototype={
$0(){return this.a.atr(this.b.a)},
$S:0}
C.dJV.prototype={
$0(){var w=this.a
return w.m(new C.dJK(w))},
$S:0}
C.dJK.prototype={
$0(){var w=this.a
w.axe(0)
w.ay=null},
$S:0}
C.dJW.prototype={
$0(){return this.a.cwY(this.b)},
$S:0}
C.cPw.prototype={
$0(){var w=this,v=null,u=B.fS(v,v,v,v,B.cX(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a6,A.c5,v,A.dP,A.c4)
u.eI()
return u},
$S:342}
C.dPN.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dPM.prototype={
$0(){return this.a.d=null},
$S:0}
C.dPP.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c0j()},
$S:121}
C.dPO.prototype={
$0(){return B.a3(this.a,!1).ib()},
$S:0}
C.fid.prototype={
$0(){return D.e6d},
$S:z+13}
C.fie.prototype={
$0(){return D.dFt},
$S:z+44}
C.fif.prototype={
$0(){return D.dCp},
$S:z+66}
C.fig.prototype={
$0(){return D.e5D},
$S:z+14}
C.fih.prototype={
$0(){return D.dOu},
$S:z+15}
C.fii.prototype={
$0(){return D.e5l},
$S:z+16}
C.fij.prototype={
$0(){return D.e3n},
$S:z+17}
C.fik.prototype={
$0(){return D.e5C},
$S:z+18}
C.fil.prototype={
$0(){return D.dED},
$S:z+19}
C.eZe.prototype={
$2(d,e){return new C.aeY($.bEc()[e],new C.eZd(e,this.a),null)},
$S:z+20}
C.eZd.prototype={
$0(){var w=this.a,v=F.aFc.h(0,$.bEc()[w].a)
$.as5=v==null?"music":v
B.a3(this.b,!1).cg(B.e_(new C.eZb(w),!1,null,x.H))},
$S:0}
C.eZb.prototype={
$1(d){return $.bEc()[this.a].e.$0()},
$S:38}
C.eZf.prototype={
$2(d,e){return new C.adQ(D.axR[e],new C.eZc(this.a,e),null)},
$S:z+21}
C.eZc.prototype={
$0(){return this.a.d.$1(D.axR[this.b])},
$S:0}
C.eYV.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eYU.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eYT.prototype={
$1(d){var w=this
return new B.dY(new C.eYS(w.a,w.b,w.c,w.d),null)},
$S:19}
C.eYS.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.l,a1=B.aH(a2,d,a0).w
a0=B.aH(a2,d,a0).w
w=x.p
v=B.a([D.fup,A.av,D.fB5,A.ad],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new B.aQ(12,12)
m=new B.aQ(12,12)
m=B.a([new B.bA(1,A.bd,B.aN(d,A.X,!1,d,!0,A.t,d,B.aO(),r[p],d,d,d,d,d,2,new B.e3(d,d,d,d,d,d,d,d,d,d,"Title",d,H.DV,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b5(4,new B.bk(n,n,n,n),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.jj,!0,A.a6,d,A.ao,d,d,d,d),d),A.ab,new B.bA(2,A.bd,B.aN(d,A.X,!1,d,!0,A.t,d,B.aO(),q[p],d,d,d,d,d,2,new B.e3(d,d,d,d,d,d,d,d,d,d,"Small line",d,H.DV,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b5(4,new B.bk(m,m,m,m),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ak,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.jj,!0,A.a6,d,A.ao,d,d,d,d),d)],w)
n=B.a([],w)
for(l=0;l<30;++l){k=D.dpB[l]
j=new B.aQ(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}h=A.d.gI(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}g=A.d.gI(i)}else g=A.bz
f=new B.ay(g,u[p].A(0,k)?1.8:1,A.r,-1)
n.push(B.aB(d,B.p(d,B.X(k,u[p].A(0,k)?A.c:A.aQ,d,d,d,22),A.f,d,d,new B.o(h,d,new B.bI(f,f,f,f),new B.bk(j,j,j,j),d,d,A.n),d,d,d,A.fw,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eYQ(a3,p,u,k),d,d,d,d,d,d,!1,A.a4))}A.d.v(v,B.a([new B.y("SLAB "+o,d,D.fjZ,d,d,d,d,d,d,d,d,d),A.am,new B.cb(A.aN,A.e,A.j,A.m,d,A.p,d,0,m,d),A.N,new B.a7(d,44,B.cq(n,d,d,d,d,A.aN,!1),d),A.aA],w))}v.push(B.bH(A.wT,new C.eYR(t,r,q,u,a2),d))
return new B.D(new B.Q(0,0,0,a1.f.d),B.bm(!0,new B.cT(new B.aY(0,1/0,0,a0.a.b*0.86),B.cq(v,d,A2.ya,d,d,A.ag,!0),d),!0,!1,A.af,!0,!0),d)},
$S:106}
C.eYQ.prototype={
$0(){var w=this
return w.a.$1(new C.eYP(w.b,w.c,w.d))},
$S:0}
C.eYP.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.eYR.prototype={
$0(){var w=this,v=w.a
v.m(new C.eYO(v,w.b,w.c,w.d))
B.a3(w.e,!1).N(null)},
$S:0}
C.eYO.prototype={
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
C.eZ2.prototype={
$0(){var w=this.a
return w.m(new C.eZ1(w))},
$S:0}
C.eZ1.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.eZ3.prototype={
$0(){return C.wX(this.b,this.a.f,"scene")},
$S:0}
C.eZ4.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gI(u),A.d.gal(u),0.4)
u.toString
w=this.a.gZI().x
w===$&&B.c()
return B.c1(v,new B.o(v,v,v,v,v,new B.c0(D.aYK,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.bZ],x.O),v,v),A.n),A.bf)},
$S:305}
C.eZ5.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(B.eQ(A.A,B.c9(new B.h5(B.a([u.gu9(),u.gZI()],x.dS)),new C.eZ0(u,this.b,v),w),A.f,A.e0),w,w,w)},
$S:245}
C.eZ0.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gu9().x
r===$&&B.c()
w=r<0.9?1:1-C.brf(r,0.9,0.98)
v=s.gZI().x
v===$&&B.c()
u=A.dB.aw(0,v)
switch(s.gaxf().a){case 0:s=s.bzn(t.b,r,u,t.c)
break
case 1:s=s.bQ3(t.b,r,u,t.c)
break
case 2:s=s.cBG(t.b,r,u,t.c)
break
case 3:s=s.bCi(t.b,r,u,t.c)
break
case 4:s=s.bFB(t.b,r,u,t.c)
break
case 5:s=s.c7g(t.b,r,u,t.c)
break
default:s=null}return B.d6(s,w)},
$S:229}
C.eZ6.prototype={
$2(d,e){var w=B.avB(this.b),v=this.c.d,u=B.ar(A.d.gI(v),A.d.gal(v),0.4)
u.toString
v=B.ar(A.d.gI(v),A.d.gal(v),0.4)
v.toString
v=w.cKl(u,A.bz,v,3.5)
u=this.a
w=u.gu9().x
w===$&&B.c()
return B.aac(B.l4(null,null,null,1,0,new C.eZ_(u),A.k.E(w,0,1)),v)},
$S:1864}
C.eZ_.prototype={
$1(d){var w=this.a
w.gu9().sp(0,d)
if(w.as)w.m(new C.eYW(w))},
$S:7}
C.eYW.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eZ7.prototype={
$0(){var w=this.a
w.gu9().sp(0,0)
w.ae6()},
$S:0}
C.eZ8.prototype={
$1(d){var w=this.a
w.m(new C.eYZ(w,d))
if(w.as)w.ae6()},
$S:7}
C.eYZ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eZ9.prototype={
$0(){var w=this.a
w.m(new C.eYY(w,this.b))
w.gu9().sp(0,0)
if(w.as)w.ae6()},
$S:0}
C.eYY.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.eZa.prototype={
$0(){var w=this.a
return w.m(new C.eYX(w,this.b))},
$S:0}
C.eYX.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.eYM.prototype={
$2(d,e){return A.k.aL(d.a,e.a)},
$S:1865}
C.eYN.prototype={
$1(d){return d.b},
$S:1866}
C.dku.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+3}
C.dkv.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dkr.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+3}
C.dks.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.dkt.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.dkw.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dkx.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dky.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.dkz.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dkA.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dkB.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dkC.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dkD.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dkE.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.eog.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eo5.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eo7.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.eo8.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.eob.prototype={
$1(d){var w=D.mP.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.eoc.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.S(q),o=x.dg,n=B.C(new B.ec(new B.cQ(new B.Z(q,new C.eod(d),p.k("Z<1>")),new C.eoe(r),p.k("cQ<1,qU?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aG(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.M)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.eod.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.eoe.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.eo9.prototype={
$1(d){return D.mP.h(0,d.b).c===D.xa},
$S:z+36}
C.eoa.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.eoG.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.E((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vf(0,u)
w.a6x(A.o.an(v,1000))},
$S:9}
C.eof.prototype={
$0(){},
$S:0}
C.eo1.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$$0)
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
C.eoi.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.x(B.a([A.N,B.dM(!1,w,w,w,!0,w,w,w,!0,w,B.X(D.mP.h(0,v).b,D.mP.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fMt,w,B.d(D.mP.h(0,v).a,w,w,w,w,w,w,A.fO,w,w,w),w,w,w),B.dM(!1,w,w,w,!0,w,w,w,!0,w,Y.aoL,w,w,w,w,new C.eoh(d),!1,w,w,w,w,w,w,w,D.fDT,w,w,w)],x.p),A.m,w,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.eoh.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.eok.prototype={
$1(d){var w,v,u=null,t=B.aH(d,u,x.l).w,s=B.a([D.egU],x.p)
for(w=0;w<6;++w){v=D.ayd[w]
s.push(B.dM(!1,u,u,u,!0,u,u,u,!0,u,D.bWz,u,u,u,u,new C.eoj(d,v),!1,u,u,u,u,u,new B.y(v.b,u,A.lM,u,u,u,u,u,u,u,u,u),u,new B.y(v.a,u,A.fO,u,u,u,u,u,u,u,u,u),u,u,u))}return B.bm(!0,new B.cT(new B.aY(0,1/0,0,t.a.b*0.7),B.cq(s,u,D.bB7,u,u,A.ag,!0),u),!0,!1,A.af,!0,!0)},
$S:26}
C.eoj.prototype={
$0(){B.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.eo4.prototype={
$1(d){var w=null
return B.el(B.a([B.bK(!1,A.di,w,w,!0,w,w,new C.eo2(d),w,w),B.bK(!1,A.DZ,w,w,!0,w,w,new C.eo3(d),w,w)],x.p),w,w,F.nd,D.fBg,w,w,w,w,D.fEb,w)},
$S:18}
C.eo2.prototype={
$0(){B.a3(this.a,!1).N(!1)
return null},
$S:0}
C.eo3.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.eoE.prototype={
$0(){var w=this.a
return w.m(new C.eoD(w))},
$S:0}
C.eoD.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eoF.prototype={
$2(d,e){var w,v,u,t=null,s=new B.au(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.mq(new C.eou(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b8b:t
v=B.a([B.b4(u,t,t,new C.bhh(w,v,new C.eov(r),new C.eow(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,B.e2(B.c9(w,new C.eox(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bHg())
return B.aB(A.cc,B.jD(new B.an(A.a_,t,A.b1,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eoy(r),t,r.gcgY(),t,new C.eoz(r),new C.eoA(r),new C.eoB(r),t,t,t,t,t,t,t,t,t,t,new C.eoC(r),t,t,t,!1,A.a4)},
$S:37}
C.eou.prototype={
$0(){return this.a.ac6(this.b)},
$S:0}
C.eoC.prototype={
$1(d){return this.a.czu(d.b)},
$S:66}
C.eoA.prototype={
$1(d){return this.a.cgZ(d.b)},
$S:51}
C.eoB.prototype={
$1(d){return this.a.ch_(d.b)},
$S:21}
C.eoz.prototype={
$1(d){return this.a.b10()},
$S:43}
C.eoy.prototype={
$1(d){return this.a.acN(d.b)},
$S:278}
C.eov.prototype={
$0(){return this.a.z},
$S:649}
C.eow.prototype={
$0(){return this.a.Q},
$S:723}
C.eox.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bLw()
if(p.length===0)return A.bJ
w=A.w.j(0.55)
v=B.m(14)
u=B.I(A.bz,A.r,1)
t=B.a([D.fyG,A.cK],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.M)(p),++r)t.push(new B.y(p[r],q,D.fiG,q,q,q,q,A.a2,q,2,q,q))
return B.p(q,B.x(t,A.E,q,A.e,A.P,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.hf,q,q,q)},
$S:59}
C.eo6.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.m(12),t=B.I(e.j(0.6),A.r,1),s=x.p
return new B.D(A.ea,B.B(B.a([B.p(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.ba,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,A3.Uf,w,w,w),A.bC,B.d(g,w,w,w,w,w,w,F.Un,w,w,w)],s),A.E,w,A.e,A.j,0,A.p),1)],s),A.E,w,A.e,A.j,0,w,w),w)},
$S:1868}
C.eoq.prototype={
$0(){var w=this.a.c
w.toString
return B.a3(w,!1).ib()},
$S:0}
C.eor.prototype={
$0(){var w=this.a
return w.m(new C.eop(w))},
$S:0}
C.eop.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eos.prototype={
$0(){var w=this.a
return w.m(new C.eoo(w))},
$S:0}
C.eoo.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eot.prototype={
$0(){var w=this.a
return w.m(new C.eon(w))},
$S:0}
C.eon.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eom.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.mP.gdT(D.mP),w=w.gaf(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.M)(p),++r)u.push(s.cug(p[r]))
return new B.D(K.aig,B.x(B.a([new B.D(Ag.ajX,w,q),B.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.E,q,A.e,A.j,0,A.p),q)},
$S:z+37}
C.eol.prototype={
$0(){return this.a.c7m(this.b)},
$S:0}
C.dkq.prototype={
$0(){var w=this,v=null,u=B.fS(v,v,v,v,B.cX(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a6,A.c5,v,A.dP,A.c4)
u.eI()
return u},
$S:342}
C.eAm.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.E((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.an(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new B.t(s.a+q*n,s.b+r*n)
t.b=new B.t(q*v,r*v)}A.d.bt(o,new C.eAk(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new C.eAl())},
$S:9}
C.eAk.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+38}
C.eAl.prototype={
$0(){},
$S:0}
C.ezY.prototype={
$0(){},
$S:0}
C.ezX.prototype={
$0(){},
$S:0}
C.eA6.prototype={
$0(){return C.wX(this.b,this.a.d,"spark-painter")},
$S:0}
C.eA8.prototype={
$1(d){return this.a.aZq(0,d.b)},
$S:51}
C.eAc.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aF(0,u).gcH()>2.5}else w=!1
if(w)t.a.push(u)
v.aSj(u)
v.cag(u)
return null},
$S:21}
C.eA7.prototype={
$1(d){return this.a.aZp()},
$S:43}
C.eAd.prototype={
$1(d){return this.a.aZq(0,d.b)},
$S:23}
C.eAe.prototype={
$1(d){return this.a.aZp()},
$S:66}
C.eAf.prototype={
$0(){var w=this.a
return w.m(new C.eA5(w,this.b))},
$S:0}
C.eA5.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
C.eAg.prototype={
$0(){var w=this.a
return w.m(new C.eA4(w))},
$S:0}
C.eA4.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.eAh.prototype={
$0(){var w=this.a
return w.m(new C.eA3(w,this.b))},
$S:0}
C.eA3.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eAi.prototype={
$1(d){var w=this.a
return w.m(new C.eA2(w,d))},
$S:7}
C.eA2.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eAj.prototype={
$0(){var w=this.a
return w.m(new C.eA1(w))},
$S:0}
C.eA1.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eA9.prototype={
$0(){var w=this.a
return w.m(new C.eA0(w))},
$S:0}
C.eA0.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.eAa.prototype={
$0(){var w=this.a
return w.m(new C.eA_(w))},
$S:0}
C.eA_.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
C.eAb.prototype={
$0(){var w=this.a
return w.m(new C.ezZ(w,this.b))},
$S:0}
C.ezZ.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eGv.prototype={
$0(){return C.wX(this.b,this.a.d,"title")},
$S:0}
C.eGw.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gJ_().x
q===$&&B.c()
w=B.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.c0t(v[t],t,s,q,u))
return new B.D(A.fc,B.bW(A.fA,w,A.tc,0,0),null)},
$S:687}
C.eGx.prototype={
$1(d){return this.a.m(new C.eGu())},
$S:2}
C.eGu.prototype={
$0(){},
$S:0}
C.eGy.prototype={
$0(){var w=this.a
w.m(new C.eGt(w,this.b))
w=w.gJ_()
w.iM(0,0)
w.cM(0)},
$S:0}
C.eGt.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.eGz.prototype={
$0(){var w=this.a
return w.m(new C.eGs(w,this.b))},
$S:0}
C.eGs.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eGA.prototype={
$0(){var w=this.a
return w.m(new C.eGr(w))},
$S:0}
C.eGr.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
C.eGB.prototype={
$0(){var w=this.a
return w.m(new C.eGq(w,this.b))},
$S:0}
C.eGq.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eGC.prototype={
$0(){var w=this.a.gJ_()
w.iM(0,0)
w.cM(0)},
$S:0}
C.eGD.prototype={
$1(d){var w=this.a
return w.m(new C.eGp(w,d))},
$S:7}
C.eGp.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.bN3.prototype={
$1(d){return d.r<=0},
$S:z+39}
C.bNe.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bN9.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bNf.prototype={
$1(d){return this.a.LP(d)&&!d.x},
$S:z+0}
C.bNg.prototype={
$2(d,e){return Math.max(d,this.a.aAN(e))},
$S:z+6}
C.bNi.prototype={
$2(d,e){var w=this.a
return w.c4(0,d.a+"."+e,new C.bNj(w))},
$S:z+5}
C.bNj.prototype={
$0(){return this.a.a},
$S:98}
C.bNh.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:73}
C.bNk.prototype={
$2(d,e){var w=this.a
return w.c4(0,this.b.$1(this.c.$2(d,e)),new C.bNl(w))},
$S:z+5}
C.bNl.prototype={
$0(){return this.a.a},
$S:98}
C.bN5.prototype={
$2(d,e){var w=this.a
return w.c4(0,d.a+"."+e,new C.bN6(w))},
$S:z+5}
C.bN6.prototype={
$0(){return this.a.a},
$S:98}
C.bN4.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:73}
C.bN7.prototype={
$2(d,e){var w=this.a
return w.c4(0,this.b.$1(this.c.$2(d,e)),new C.bN8(w))},
$S:z+5}
C.bN8.prototype={
$0(){return this.a.a},
$S:98}
C.bN2.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bNm.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bNa.prototype={
$1(d){return d!==this.b&&this.a.aH_(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bNd.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bNc.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bNb.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bHv.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bHw.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.cnY.prototype={
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
C.fKc.prototype={
$1(d){var w
$.V()
w=B.K()
w.r=d.gp(0)
return w},
$S:1869}
C.fKe.prototype={
$2(d,e){var w
$.V()
w=B.K()
w.b=A.ac
w.c=e
w.r=d.gp(0)
w.d=A.bG
return w},
$S:1870}
C.fKf.prototype={
$5(d,e,f,g,h){return B.bz(new B.a5(d,e,d+f,e+g),new B.aQ(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1871}
C.fKd.prototype={
$3(d,e,f){var w
$.V()
w=B.K()
w.sar(new B.a9(A.b3,A.b6,A.x,B.a([e,f],x.O),null,null).aA(0,d))
return w},
$S:1872}
C.bH9.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bHa.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bH8(w))},
$S:0}
C.bH8.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bHb.prototype={
$0(){return B.a([],x.ey)},
$S:1873}
C.bHc.prototype={
$1(d){return this.a.bC(d).a>15e5},
$S:368}
C.bHd.prototype={
$0(){var w,v,u
J.bEl(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.CA(v))if(C.h2Q(v.b))w.b0u(v)
else w.a_I(v)
else{u=w.a.c.bde(v)
w.aei(u==null?"The "+$.qo().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bH7.prototype={
$1(d){return new B.dY(new C.bH5(this.a,this.b),null)},
$S:19}
C.bH5.prototype={
$2(d,e){var w=null,v=this.b,u=new C.bH6(this.a,v,e),t=$.qo(),s=v.b,r=B.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.k1,w,w,w),q=B.aJ(w,w,w,w,D.bN9,w,w,w,new C.bH1(u,v),w,w,w,w,w,w),p=A.k.E(v.ch,1,2.6),o=x.p
return B.bm(!0,new B.D(A.vU,B.x(B.a([r,A.av,D.fNv,A.R,B.B(B.a([q,B.E(B.l4(t.h(0,s).d,w,w,2.6,1,u,p),1),B.aJ(w,w,w,w,D.bTU,w,w,w,new C.bH2(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),B.B(B.a([B.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,B.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b0,B.bK(!1,D.fqN,w,w,!0,w,w,new C.bH3(u),w,w),B.bK(!1,A.wT,w,w,!0,w,w,new C.bH4(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.E,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:86}
C.bH6.prototype={
$1(d){var w=this.a
w.m(new C.bH_(this.b,d))
this.c.$1(new C.bH0())
w.a.toString},
$S:7}
C.bH_.prototype={
$0(){return this.a.ch=A.k.E(this.b,1,2.6)},
$S:0}
C.bH0.prototype={
$0(){},
$S:0}
C.bH1.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
C.bH2.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
C.bH3.prototype={
$0(){return this.a.$1(1)},
$S:0}
C.bH4.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.bHs.prototype={
$2(d,e){var w
if(d==="short"){E.dX(1800,"",120,0,0.55,"noise")
E.dX(200,"",160,2.2,0.4,"saw")
B.fG()
w=this.a
if(w.c!=null)w.aei("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dX(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.aei("\u26a0 Overloaded! The "+$.qo().h(0,e.b).b+" can only give about "+A.k.ac(w.a.c.zL(e),2)+" amps but your gadgets are asking for "+A.k.ac(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.aei("Burnt out! "+e.ay)
E.dX(140,"",320,0,0.6,"noise")
E.dX(900,"",160,1.5,0.35,"square")}},
$S:z+43}
C.bHt.prototype={
$0(){},
$S:0}
C.bGD.prototype={
$0(){},
$S:0}
C.bHu.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bHr.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.au(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.aB(A.cc,B.b4(p,p,p,new C.aiN(w,v,u,t,s,r==null?A.jf:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bHl(o),new C.bHm(o),new C.bHn(o),p,p,p,p,p,p,p,p,p,p,new C.bHo(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.b7s)
w=o.Q
if(w!=null){v=B.m(14)
u=B.I(A.cZ,A.r,1)
n.push(B.ao(p,B.aB(p,B.p(p,B.B(B.a([D.foV,B.E(B.d(w,p,p,p,p,p,p,D.fgV,p,p,p),1)],q),A.E,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(D.bde,p,u,v,p,p,A.n),p,p,p,p,A.nm,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bHp(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ao(8,o.aZx(B.B(B.a([D.bDf,new C.j7(A.Gq,"Cut wire",new C.bHq(o),A.cs,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ao(8,o.chx(w),p,p,10,10,p,p))}return B.jD(new B.an(A.a_,p,A.b1,A.t,n,p),A.t,p)},
$S:473}
C.bHm.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b7x(s)
if(r!=null){t.m(new C.bHj(t,r,d))
return}w=t.b1a(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.t(v*u.a,w.d*u.b).aF(0,s)
t.m(new C.bHk(t,w))}},
$S:51}
C.bHj.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bHk.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bHn.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bHh(w,d))
else if(w.w!=null)w.m(new C.bHi(w,d.b.a9(0,w.x)))},
$S:21}
C.bHh.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bHi.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.E(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.E(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bHl.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b7x(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.akP(u.a,u.b,v.a,v.b)!=null)E.dX(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.aeg()},
$S:43}
C.bHo.prototype={
$1(d){var w=this.a,v=d.b,u=w.b1a(v)
if(u!=null){w.m(new C.bHf(w,u))
if(D.ma.ai(0,u.b))w.cs7(u)
w.a.toString
return}w.m(new C.bHg(w,w.cEI(v)))},
$S:66}
C.bHf.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dX(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dX(200,"",70,0,0.2,"saw")}},
$S:0}
C.bHg.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bHp.prototype={
$0(){var w=this.a
return w.m(new C.bHe(w))},
$S:0}
C.bHe.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bHq.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dX(300,"",50,0,0.35,"noise")
w.aeg()},
$S:0}
C.bGE.prototype={
$0(){return this.a.bpm(this.b)},
$S:0}
C.bGX.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.B(B.a([B.d(d,w,w,w,w,w,w,D.fbc,w,w,w),B.E(B.l4(this.b.d,w,w,g,h,new C.bGZ(this.a,f),A.k.E(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1874}
C.bGZ.prototype={
$1(d){var w=this.a
w.m(new C.bGY(this.b,d))
w.a.toString},
$S:7}
C.bGY.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bGK.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dX(260,"",70,0,0.35,"noise")
w.aeg()},
$S:0}
C.bGL.prototype={
$0(){var w=this.a
return w.m(new C.bGJ(w))},
$S:0}
C.bGJ.prototype={
$0(){return this.a.d=null},
$S:0}
C.bGM.prototype={
$0(){this.a.m(new C.bGI(this.b,this.c))
E.dX(900,"",40,0,0.3,"noise")},
$S:0}
C.bGI.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bGP.prototype={
$0(){return this.a.b0u(this.b)},
$S:0}
C.bGQ.prototype={
$0(){return this.a.a_I(this.b)},
$S:0}
C.bGR.prototype={
$0(){return this.a.a1l(this.b)},
$S:0}
C.bGS.prototype={
$0(){var w=this.a
w.m(new C.bGH(this.b,this.c))
w.a.toString},
$S:0}
C.bGH.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bGT.prototype={
$0(){var w=this.a
w.m(new C.bGG(this.b,this.c))
w.a.toString},
$S:0}
C.bGG.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bGU.prototype={
$0(){var w=this.a
w.m(new C.bGF(this.b,this.c))
w.a.toString},
$S:0}
C.bGF.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bGV.prototype={
$1(d){return this.a.f=d},
$S:7}
C.bGW.prototype={
$1(d){return this.a.f=d},
$S:7}
C.bGN.prototype={
$1(d){return this.a.f=d},
$S:7}
C.bGO.prototype={
$1(d){return this.a.f=d},
$S:7}
C.fhZ.prototype={
$1(d){return d.aGE("bulb")},
$S:z+2}
C.fi_.prototype={
$1(d){return d.pV(0,"switch")&&d.aGE("bulb")},
$S:z+2}
C.fi0.prototype={
$1(d){return A.d.b3(d.a,new C.fhM())},
$S:z+2}
C.fhM.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fi1.prototype={
$1(d){return d.pV(0,"resistor")&&A.d.b3(d.a,new C.fhL())},
$S:z+2}
C.fhL.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fi2.prototype={
$1(d){return!d.pV(0,"battery")&&d.aGE("bulb")},
$S:z+2}
C.fhQ.prototype={
$1(d){return A.d.b3(d.a,new C.fhK())},
$S:z+2}
C.fhK.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fhR.prototype={
$1(d){return A.d.b3(d.a,new C.fhJ())},
$S:z+2}
C.fhJ.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fhS.prototype={
$1(d){return A.d.b3(d.a,new C.fhI())},
$S:z+2}
C.fhI.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fhT.prototype={
$1(d){var w=d.a
return A.d.b3(w,new C.fhG())&&A.d.b3(w,new C.fhH())&&d.pV(0,"buck")},
$S:z+2}
C.fhG.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fhH.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fhU.prototype={
$1(d){var w=d.a
return A.d.b3(w,new C.fhE())&&A.d.b3(w,new C.fhF())},
$S:z+2}
C.fhE.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fhF.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fhV.prototype={
$1(d){return A.d.b3(d.a,new C.fhD())},
$S:z+2}
C.fhD.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.dUl.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
C.dUu.prototype={
$1(d){var w=this.a.d
return w.aH_(d)&&w.CA(d)},
$S:z+0}
C.dUv.prototype={
$1(d){return d.x},
$S:z+0}
C.dUw.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.dUx.prototype={
$0(){},
$S:0}
C.dUk.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.m(22),o=x.p,n=B.a([D.fG8,A.av,D.fqI,A.R],o)
for(w=this.a,v=0;v<19;++v){u=D.QB[v]
t=A.c.j(0.06)
s=new B.aQ(14,14)
r=new B.ay(A.bz,1,A.r,-1)
n.push(B.aB(q,B.p(q,B.x(B.a([new B.y(u.a,q,A.iE,q,q,q,q,q,q,q,q,q),A.bC,new B.y(u.b,q,D.fhF,q,q,q,q,A.a2,q,3,q,q)],o),A.E,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(t,q,new B.bI(r,r,r,r),new B.bk(s,s,s,s),q,q,A.n),q,q,q,A.ct,A.bh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dUj(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eP(q,F.lv,new B.D(A.bQ,new B.a7(340,q,B.cq(n,q,q,q,q,A.ag,!0),q),q),q,q,q,q,A.d5,q,new B.b7(p,A.a0),q)},
$S:47}
C.dUj.prototype={
$0(){B.a3(this.b,!1).N(null)
var w=this.a
w.m(new C.dUi(w,this.c))
E.dX(800,"",120,-0.5,0.3,"square")},
$S:0}
C.dUi.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bin()},
$S:0}
C.dUg.prototype={
$1(d){return new C.VH(this.a.d,null)},
$S:z+68}
C.dUh.prototype={
$0(){},
$S:0}
C.dUt.prototype={
$1(d){return new B.dY(new C.dUs(this.a),null)},
$S:19}
C.dUs.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ahZ(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.bm:A.aR
k=B.aH(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.B(B.a([D.fDm,A.b0,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.N,B.bx(B.m(4),B.lk(A.bz,m,m,5,m,w.a/11,new B.m5(f,x.x)),A.aq),A.ad],v)
if(h)u.push(D.ftN)
else{h=f.j(0.1)
t=B.m(14)
s=B.I(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ab.JD,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.DW,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.x(B.a([r,A.av,q,new B.bL(A.a8,m,m,B.bK(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new C.dUq(l,e),m,m),m)],v),A.E,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bh,m,m,m))}u.push(A.R)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aQ(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.ds,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.q(0,o)?A.aB:A.c
u.push(B.aB(m,B.p(m,new B.cb(A.aN,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.y(s,m,A.a8W,m,m,m,m,m,m,m,m,m),A.as,new B.bA(1,A.bd,new B.y(r.a,m,new B.F(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bI(n,n,n,n),new B.bk(t,t,t,t),m,m,A.n),m,m,m,A.eG,A.nm,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.dUr(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bm(!0,new B.cT(new B.aY(0,1/0,0,k.a.b*0.75),B.cq(u,m,A2.ya,m,m,A.ag,!0),m),!0,!1,A.af,!0,!0)},
$S:86}
C.dUq.prototype={
$0(){var w=this.a
w.m(new C.dUo(w))
this.b.$1(new C.dUp())
w.F1()},
$S:0}
C.dUo.prototype={
$0(){var w=this.a
$.ahZ()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.dUp.prototype={
$0(){},
$S:0}
C.dUr.prototype={
$0(){var w=this.a
w.m(new C.dUm(w,this.b))
this.c.$1(new C.dUn())
w.F1()},
$S:0}
C.dUm.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dUn.prototype={
$0(){},
$S:0}
C.dUz.prototype={
$0(){return B.a3(this.a,!1).ib()},
$S:0}
C.dUA.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.mn("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a3(t.b,!1).cg(B.e_(new C.dUy(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dUy.prototype={
$1(d){B.lu("construction")
return Ai.hGE()},
$S:z+46}
C.dUB.prototype={
$0(){return C.hsz(this.a,"ELECTRONICS LAB",this.b,A.aR)},
$S:0}
C.dUC.prototype={
$0(){var w=this.a
return w.m(w.d.gcW1())},
$S:0}
C.dUD.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gBs(v))
w.F1()},
$S:0}
C.cF1.prototype={
$2(d,e){var w=null,v=this.a.gaxk().x
v===$&&B.c()
return B.b4(w,w,w,new C.b9j(v,w),A.ax)},
$S:68}
C.cF0.prototype={
$3(d,e,f){var w=new B.aI($.V().r,A.ai,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.D(new B.b0(v,t))
w.D(new B.c8(v,u,v+e,u))
w.D(new B.c8(v,u,v,u+e))
w.D(new B.c8(v,u,v-e,u))
w.D(new B.c8(v,u,v,t))
w.D(new B.bv())
t=B.K()
t.r=A.c.j(f).gp(0)
this.a.aJ(w,t)},
$S:445}
C.fOZ.prototype={
$3(d,e,f){return new C.V_(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+47}
C.fP_.prototype={
$4(d,e,f,g){var w=x.Y
return new B.d0(e,!1,B.iq(A.A,g,null,new B.bf(B.cJ(A.cu,e,null),new B.bn(0.85,1,w),w.k("bf<bM.T>"))),null)},
$C:"$4",
$R:4,
$S:32}
C.dQK.prototype={
$0(){return B.a3(this.a,!1).ib()},
$S:0}
C.dQJ.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bYY(o):q.bBl(o,p),m=x.p
p=B.a([B.qr(new B.nm(n,new B.cs(p,x.aC)),A.q1,B.t_(),A.b7,A.b7,new C.dQH())],m)
n=t.d
if(n){w=A.k.F(q.gRY(),12)<4
v=w?150:96
u=B.m(16)
m=B.a([A.as],m)
if(w)m.push(D.bD0)
else m.push(A.b0)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.bm:A.au,s,s,s,s,s,A.a5),s,9,s,s,s,s,s,9))
m.push(A.as)
p.push(B.ao(s,B.at(B.d9(s,B.B(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ew,new B.o(A.w,s,s,u,s,s,A.n),A.ni,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.v1)p.push(B.ao(s,B.at(B.p(s,s,A.f,s,s,A.KT,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wH)p.push(B.ao(s,B.p(s,s,A.f,s,s,A.KT,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aB(s,B.at(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dQI(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bx(r,new B.an(A.a_,s,A.b1,A.t,p,s),A.aq)},
$S:328}
C.dQH.prototype={
$2(d,e){var w=x.Y
return new B.d0(e,!1,B.iq(A.A,d,null,new B.bf(e,new B.bn(0.92,1,w),w.k("bf<bM.T>"))),null)},
$S:379}
C.dQI.prototype={
$0(){var w=this.a
return w.m(new C.dQG(w))},
$S:0}
C.dQG.prototype={
$0(){return this.a.e=null},
$S:0}
C.dQF.prototype={
$0(){var w=this.a
return w.m(new C.dQE(w,this.b))},
$S:0}
C.dQE.prototype={
$0(){return this.a.e=A.d.cD(F.ki,this.b)},
$S:0}
C.dQD.prototype={
$0(){var w=this.a
return w.m(new C.dQC(w))},
$S:0}
C.dQC.prototype={
$0(){return this.a.e=0},
$S:0}
C.dQy.prototype={
$0(){var w=this.a
return w.m(new C.dQx(w))},
$S:0}
C.dQx.prototype={
$0(){return this.a.e=null},
$S:0}
C.dQB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.m(o?20:8),m=A.w.j(0.55),l=x.p
m=B.p(p,B.B(B.a([D.fLT,A.as,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eK,p,p,p,D.fnL,p,p,p),1),B.d(A.a.aZ(A.o.u(B.dl(new B.U(Date.now(),0,!1))),2,"0")+":"+A.a.aZ(A.o.u(B.h3(new B.U(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qD,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.l1,p,p,p)
w=this.a
v=B.a([B.b4(p,p,p,new C.bvl(w.gRY(),this.c.d,p),A.ax)],l)
o=w.e
if(o!=null){u=B.m(10)
t=B.I(A.aZ,A.r,1)
s=B.m(10)
o=B.p(p,B.B(B.a([B.aB(p,B.p(p,p,A.f,p,p,A.ac4,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dQA(w),p,p,p,p,p,p,!1,A.a4),A.ej,B.p(p,p,A.f,p,p,A.aca,p,12,p,p,p,p,p,12),A.ej,B.p(p,p,A.f,p,p,D.b2N,p,12,p,p,p,p,p,12),A.as,B.E(B.d(F.ki[o].a,p,1,A.a2,p,p,p,A.a8P,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cp,p,p,p,24,p,p,A.fx,p,p,p)
r=w.e
r.toString
v.push(B.bU(0,new B.D(D.bzG,B.p(p,B.bx(s,B.x(B.a([o,B.E(B.b4(p,p,p,new C.aeF(r,w.gRY(),p),A.fL),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new B.o(A.w,p,t,u,D.dlY,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.m(18)
t=B.I(A.aZ,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jy,w.avi(F.ki[q],34,!1),p))
v.push(B.ao(8,B.at(B.p(p,B.B(s,A.m,p,A.e,A.P,0,p,p),A.f,p,p,new B.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lA,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bx(n,B.p(p,B.x(B.a([m,B.E(new B.an(A.a_,p,A.b1,A.t,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,T.Y3,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:328}
C.dQA.prototype={
$0(){var w=this.a
return w.m(new C.dQz(w))},
$S:0}
C.dQz.prototype={
$0(){return this.a.e=null},
$S:0}
C.fit.prototype={
$0(){return D.e7G},
$S:z+48}
C.fiu.prototype={
$0(){return D.dG0},
$S:z+49}
C.fiv.prototype={
$0(){return D.dCC},
$S:z+50}
C.fiw.prototype={
$0(){return D.dFr},
$S:z+51}
C.fix.prototype={
$0(){return D.dKj},
$S:z+52}
C.fiy.prototype={
$0(){return D.e3q},
$S:z+53}
C.fiz.prototype={
$0(){return D.e5B},
$S:z+54}
C.fiA.prototype={
$0(){return D.dJE},
$S:z+55}
C.cik.prototype={
$0(){return B.a3(this.a,!1).ib()},
$S:0}
C.cil.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=B.a([],k)
for(w=$.hwc(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aQ(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.dq,16)],t)
n=A.c.j(0.85)
j.push(B.aB(m,B.p(m,new B.an(A.a_,m,A.aa,A.t,B.a([new B.cN(m,-6,-6,m,m,m,new B.y(r.c,m,Ah.JB,m,m,m,m,m,m,m,m,m),m),new B.bL(A.lR,m,m,B.x(B.a([new B.y(r.a,m,D.fmn,m,m,m,m,m,m,m,m,m),A.cK,new B.y(r.b,m,new B.F(!0,n,m,m,m,m,12,A.a7,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.E,m,A.e,A.P,0,A.p),m)],k),m),A.f,m,m,new B.o(m,m,m,new B.bk(q,q,q,q),p,new B.a9(A.ay,A.aD,A.x,o,m,m),A.n),m,v,m,m,A.bB,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.cij(d,r),m,m,m,m,m,m,!1,A.a4))}return B.bW(A.bD,j,A.bq,14,14)},
$S:175}
C.cij.prototype={
$0(){return B.a3(this.a,!1).cg(B.e_(new C.cii(this.b),!1,null,x.H))},
$S:0}
C.cii.prototype={
$1(d){return this.a.f.$0()},
$S:38}
C.eKY.prototype={
$0(){var w=this.a
return w.w=w.d[w.b4C(w.f)]},
$S:0}
C.eKU.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cW.aj()*7},
$S:0}
C.eKT.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.c7)
w.w=""},
$S:0}
C.eKW.prototype={
$0(){var w=this.a
return w.m(new C.eKV(w,this.b))},
$S:0}
C.eKV.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cG(w,this.b)},
$S:0}
C.eKX.prototype={
$1(d){return this.a.aZX(0)},
$S:2}
C.dX2.prototype={
$0(){return C.J4("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.dX3.prototype={
$0(){},
$S:0}
C.dWY.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.dX_.prototype={
$0(){return this.a.aZZ(this.b)},
$S:0}
C.dX0.prototype={
$0(){var w=this.a
return w.m(new C.dWZ(w))},
$S:0}
C.dWZ.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.dX1.prototype={
$0(){var w=this.a
return w.aZZ(w.d)},
$S:0}
C.dIo.prototype={
$2(d,e){return d+e},
$S:78}
C.dIp.prototype={
$0(){},
$S:0}
C.dIj.prototype={
$2(d,e){return d+e},
$S:78}
C.dIm.prototype={
$0(){var w=this.a
return w.m(new C.dIl(w,this.b))},
$S:0}
C.dIl.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dIn.prototype={
$0(){var w=this.a
return w.m(new C.dIk(w))},
$S:0}
C.dIk.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.dU4.prototype={
$0(){return C.wX(this.b,this.a.d,"drawing")},
$S:0}
C.dU5.prototype={
$1(d){var w=this.a
return w.m(new C.dU3(w,d))},
$S:51}
C.dU3.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aIs(u,v,t))},
$S:0}
C.dU6.prototype={
$1(d){var w=this.a
return w.m(new C.dU2(w,d))},
$S:21}
C.dU2.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.dU7.prototype={
$1(d){var w=this.a
return w.m(new C.dU1(w,d))},
$S:23}
C.dU1.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aIs(u,v,t))},
$S:0}
C.dU8.prototype={
$0(){var w=this.a
return w.m(new C.dU0(w,this.b))},
$S:0}
C.dU0.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.dU9.prototype={
$1(d){var w=this.a
return w.m(new C.dU_(w,d))},
$S:7}
C.dU_.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dUa.prototype={
$0(){var w=this.a
return w.m(new C.dTZ(w))},
$S:0}
C.dTZ.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dUb.prototype={
$0(){var w=this.a
return w.m(new C.dTY(w))},
$S:0}
C.dTY.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.dUc.prototype={
$0(){var w=this.a
return w.m(A.d.gBs(w.e))},
$S:0}
C.dUd.prototype={
$0(){var w=this.a
return w.m(new C.dTX(w))},
$S:0}
C.dTX.prototype={
$0(){var w=this.a
w.x=D.ax7[A.o.F(A.d.cD(D.ax7,w.x)+1,4)]},
$S:0}
C.eit.prototype={
$0(){return this.a.f.M(0,this.b)},
$S:0}
C.eiu.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.J4("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.eis(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.J4("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.eis.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.eiv.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.eir(w))},
$S:12}
C.eir.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.eiz.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aB(w,B.l5(new C.eix(v,e),w,A.b7,A.q1,w,w,new B.bn(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eiy(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.eiy.prototype={
$0(){return this.a.c91(this.b)},
$S:0}
C.eix.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dk(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fB(3.141592653589793*e)
m=B.m(16)
w=o?p:D.c20
if(o)v=q.a.r.q(0,q.b)?A.bm.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.I(u.r.q(0,t)?A.bm:A.aZ,A.r,1)
if(o){r=B.dk()
r.fB(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fo(A.A,B.d(u[t],p,p,p,p,p,p,G.a9_,p,p,p),p,r,!0)
u=r}else u=D.fEQ
return B.fo(A.A,B.p(A.A,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:103}
C.eiA.prototype={
$0(){var w=this.a
return w.m(new C.eiw(w,this.b))},
$S:0}
C.eiw.prototype={
$0(){var w=this.a
w.d=this.b.a
w.axJ()},
$S:0}
C.eiB.prototype={
$0(){var w=this.a
return w.m(w.gc90())},
$S:0}
C.eso.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.esp.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.esm.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.esn.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.esl(w))},
$S:12}
C.esl.prototype={
$0(){return this.a.f=-1},
$S:0}
C.esq.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.esr.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.ess.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aZY()},
$S:12}
C.est.prototype={
$0(){return this.a.c97(this.b)},
$S:0}
C.eGf.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:71}
C.eGo.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.l(w,w,A.aQ,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.l0,B.B(B.a([v,A.ab,new B.ds(1,A.cn,B.eQ(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e0),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1875}
C.eGk.prototype={
$1(d){return this.a.m(new C.eGj())},
$S:2}
C.eGj.prototype={
$0(){},
$S:0}
C.eGl.prototype={
$0(){var w=this.a
return w.m(new C.eGi(w,this.b))},
$S:0}
C.eGi.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eGm.prototype={
$1(d){var w=this.a
return w.m(new C.eGh(w,d))},
$S:7}
C.eGh.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
C.eGn.prototype={
$0(){var w=this.a
return w.m(new C.eGg(w))},
$S:0}
C.eGg.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ehy.prototype={
$0(){},
$S:0}
C.ehz.prototype={
$0(){},
$S:0}
C.ehr.prototype={
$0(){var w=this.a
return w.m(new C.ehq(w))},
$S:0}
C.ehq.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c2(u,1,!1,x.S)
w.r=0.9
C.a8o("hat",0.6)},
$S:0}
C.ehs.prototype={
$0(){var w=this.a
return w.m(new C.ehp(w))},
$S:0}
C.ehp.prototype={
$0(){this.a.y=1.1
C.q0("bell",36,200,0.4)},
$S:0}
C.eht.prototype={
$0(){var w=this.a
return w.m(new C.eho(w))},
$S:0}
C.eho.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.au(Math.max(v,u)-t+1)
w.as=u
C.q0("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.ehu.prototype={
$0(){var w=this.a
return w.m(new C.ehn(w,this.b))},
$S:0}
C.ehn.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.ehv.prototype={
$1(d){var w=this.a
return w.m(new C.ehm(w,d))},
$S:7}
C.ehm.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e4(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.ehw.prototype={
$1(d){var w=this.a
return w.m(new C.ehl(w,d))},
$S:7}
C.ehl.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
C.ehx.prototype={
$1(d){var w=this.a
return w.m(new C.ehk(w,d))},
$S:7}
C.ehk.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
C.cvt.prototype={
$0(){return B.a3(this.a,!1).ib()},
$S:0}
C.cvu.prototype={
$0(){var w=this.a
return C.hsz(this.b,w.c,w.e,w.d)},
$S:0}
C.fSO.prototype={
$1(d){var w,v=null,u=B.m(24),t=this.a,s=t.j(0.4)
t=B.d(this.b,v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=B.d(this.c,v,v,v,v,v,v,D.fbP,v,v,v)
return B.el(B.a([B.bK(!1,D.ftS,v,v,!0,v,v,new C.fSN(d),v,v)],x.p),v,v,F.nd,w,v,v,v,new B.b7(u,new B.ay(s,1,A.r,-1)),t,v)},
$S:18}
C.fSN.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.cvp.prototype={
$0(){B.f0()
this.a.e.$0()},
$S:0}
C.cvo.prototype={
$0(){B.f0()
this.a.e.$0()},
$S:0}
C.cvv.prototype={
$0(){B.f0()
this.a.e.$0()},
$S:0}
C.cvq.prototype={
$0(){var w=this.a
A.d.W(w.iK$,this.b.bj())
if(w.c!=null)this.c.$0()},
$S:0}
C.cvs.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.E((v-w.oE$.a)/1e6,0,0.04)
w.oE$=d
w.nf$=A.o.an(v,1000)
w.q3(u)
if(w.c!=null)w.m(new C.cvr())},
$S:9}
C.cvr.prototype={
$0(){},
$S:0}
C.cig.prototype={
$0(){var w=this
return C.q0(w.a,w.b,w.c,w.d)},
$S:1}
C.dZz.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dZy(w,d))},
$S:z+57}
C.dZy.prototype={
$0(){return this.a.ctT(this.b)},
$S:0}
C.dZ1.prototype={
$0(){var w,v,u,t=this.a,s=J.a4(t),r=s.gL(t),q=new Float64Array(r*4)
for(w=0;w<s.gL(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:700}
C.dZ_.prototype={
$0(){return this.a.id=D.a3U},
$S:0}
C.dZ0.prototype={
$0(){var w=this.b.a,v=B.S(w).k("Z<1>")
v=B.pn(new B.Z(w,new C.dYZ(this.c),v),6,v.k("J.E"))
w=B.C(v,B.a6(v).k("J.E"))
return this.a.id=w},
$S:0}
C.dYZ.prototype={
$1(d){return A.a.q(d.a.toLowerCase(),this.a)},
$S:z+58}
C.dYY.prototype={
$1(d){var w=null,v=B.cd(B.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,B.l(w,w,A.ae,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.t,w,A.y,w,w,w,w,A.ag)
return B.el(B.a([B.bK(!1,A.pv,w,w,!0,w,w,new C.dYX(d),w,w)],x.p),w,w,F.nd,v,w,w,w,w,D.fEV,w)},
$S:18}
C.dYX.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.dZk.prototype={
$0(){return C.wX(this.b,this.a.d,"earth")},
$S:0}
C.dZl.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new B.au(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gWg()
r=p.z
o=B.a([B.aB(A.cc,B.b4(q,q,q,new C.bfK(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dZ8(p),new C.dZ9(p),new C.dZa(p),q,q,q,q,q,q,q,new C.dZb(p),q,q,q,!1,A.a4)],x.p)
if(p.r==null)o.push(A6.acO)
w=this.b
if(w!=null)o.push(B.ao(8,p.c9J(w),q,q,10,10,q,q))
return new B.eG(new B.an(A.a_,q,A.b1,A.t,o,q),p.d)},
$S:398}
C.dZ9.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:247}
C.dZa.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.E(u.go*d.d,0.8,16)
else{w=57.2958/(u.gWg()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.E(u.x+v.b*w,-85,85)}},
$S:223}
C.dZ8.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gWg()*u.z)
v=d.a.a
u.Q=A.k.E(-v.a*w,-160,160)
u.as=A.k.E(v.b*w,-100,100)},
$S:706}
C.dZb.prototype={
$1(d){var w=this.a,v=w.c9M(d.b)
if(v!=null)w.m(new C.dZ2(w,v))
else w.m(new C.dZ3(w))},
$S:66}
C.dZ2.prototype={
$0(){return this.a.axT(this.b)},
$S:0}
C.dZ3.prototype={
$0(){return this.a.fx=null},
$S:0}
C.dZm.prototype={
$0(){var w=this.a
w.e.bP(0,A.c7)
w.m(new C.dZ7(w,this.b))},
$S:0}
C.dZ7.prototype={
$0(){var w=this.a
w.id=D.a3U
w.axT(this.b)},
$S:0}
C.dZq.prototype={
$0(){var w=this.a
return w.m(new C.dZj(w))},
$S:0}
C.dZj.prototype={
$0(){var w=this.a
w.fx=null
w.atO(15,w.y,1)},
$S:0}
C.dZr.prototype={
$0(){var w=this.a
return w.m(new C.dZi(w,this.b))},
$S:0}
C.dZi.prototype={
$0(){var w=this.b.b
return this.a.atO(w.a,w.b,w.c)},
$S:0}
C.dZs.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new C.dZh(w,v))},
$S:0}
C.dZh.prototype={
$0(){var w=this.b.a
return this.a.axT(w[A.cW.au(w.length)])},
$S:0}
C.dZt.prototype={
$1(d){var w=this.a
return w.m(new C.dZg(w,d))},
$S:7}
C.dZg.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
C.dZu.prototype={
$1(d){var w=this.a
return w.m(new C.dZf(w,d))},
$S:7}
C.dZf.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.dZv.prototype={
$1(d){var w=this.a
return w.m(new C.dZe(w,d))},
$S:7}
C.dZe.prototype={
$0(){return this.a.fr=this.b},
$S:0}
C.dZw.prototype={
$0(){var w=this.a
return w.m(new C.dZd(w))},
$S:0}
C.dZd.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.dZx.prototype={
$0(){var w=this.a
return w.m(new C.dZc(w))},
$S:0}
C.dZc.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
C.dZn.prototype={
$0(){var w=this.a
return w.m(new C.dZ6(w))},
$S:0}
C.dZ6.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.dZo.prototype={
$0(){var w=this.a
return w.m(new C.dZ5(w))},
$S:0}
C.dZ5.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.dZp.prototype={
$0(){var w=this.a
return w.m(new C.dZ4(w))},
$S:0}
C.dZ4.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
C.dYW.prototype={
$2(d,e){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,D.aQX,w,w,w),A.v5,B.d(e,w,2,A.a2,w,w,w,A.Uv,w,w,w)],x.p),A.E,w,A.e,A.j,0,A.p),1)},
$S:131}
C.dYV.prototype={
$0(){var w=this.a
return w.m(new C.dYU(w))},
$S:0}
C.dYU.prototype={
$0(){return this.a.fx=null},
$S:0}
C.dgw.prototype={
$0(){var w=null,v=B.fS(w,w,w,w,B.cX(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.d4x,w,w),this.a),A.a6,A.c5,w,A.dP,A.c4)
v.eI()
return v},
$S:342}
C.dgx.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new B.t(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1877}
C.fim.prototype={
$0(){return D.dHX},
$S:z+59}
C.fin.prototype={
$0(){return D.e5k},
$S:z+60}
C.fio.prototype={
$0(){return D.dHZ},
$S:z+61}
C.fip.prototype={
$0(){return D.dCo},
$S:z+62}
C.fiq.prototype={
$0(){return D.dHW},
$S:z+63}
C.fir.prototype={
$0(){return D.e3r},
$S:z+64}
C.fis.prototype={
$0(){return D.e3p},
$S:z+65}
C.eH8.prototype={
$0(){return B.a3(this.a,!1).ib()},
$S:0}
C.eH9.prototype={
$0(){var w=this.a
return w.m(new C.eH7(w))},
$S:0}
C.eH7.prototype={
$0(){var w=this.a
return w.d=A.o.F(w.gaSM()+1,16)},
$S:0}
C.eHa.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=B.a([],l)
for(w=$.hwb(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new B.aQ(18,18)
q=s.d
p=new B.ay(q.j(0.5),1,A.r,-1)
o=B.a([q.j(0.28),D.blZ],u)
k.push(B.aB(n,B.p(n,B.x(B.a([B.X(s.c,q,n,n,n,30),A.N,new B.y(s.a,n,D.fgt,n,A.L,n,n,n,n,2,n,n),A.cK,new B.y(s.b,n,D.flK,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b8,A.j,0,A.p),A.f,n,n,new B.o(n,n,new B.bI(p,p,p,p),new B.bk(r,r,r,r),n,new B.a9(A.ay,A.aD,A.x,o,n,n),A.n),n,v,n,n,A.cm,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eH6(d,s),n,n,n,n,n,n,!1,A.a4))}return B.bW(A.fA,k,A.bq,10,10)},
$S:175}
C.eH6.prototype={
$0(){return B.a3(this.a,!1).cg(B.e_(new C.eH5(this.b),!1,null,x.H))},
$S:0}
C.eH5.prototype={
$1(d){return this.a.e.$0()},
$S:38}
C.ezC.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
C.ezN.prototype={
$0(){return C.wX(this.b,this.a.d,"solar-system")},
$S:0}
C.ezO.prototype={
$2(d,e){var w,v=null,u=this.a,t=new B.au(e.b,e.d)
u.ch=t
t=B.a([B.aB(A.cc,B.b4(v,v,v,new C.bs7(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ezK(u),new C.ezL(u),v,v,v,v,v,v,v,new C.ezM(u),v,v,v,!1,A.a4)],x.p)
w=this.b
if(w!=null)t.push(B.ao(8,u.c9O(w),v,v,10,10,v,v))
return new B.eG(new B.an(A.a_,v,A.b1,A.t,t,v),u.d)},
$S:398}
C.ezK.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:247}
C.ezL.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.E(w.y*d.d,0.5,9)
else w.x=w.x.a9(0,d.a)},
$S:223}
C.ezM.prototype={
$1(d){var w=this.a,v=w.c9R(d.b)
if(v!=null)w.b_j(v)},
$S:66}
C.ezP.prototype={
$0(){var w=this.a
return w.m(new C.ezJ(w))},
$S:0}
C.ezJ.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
C.ezQ.prototype={
$0(){return this.a.b_j(this.b)},
$S:0}
C.ezR.prototype={
$1(d){var w=this.a
return w.m(new C.ezI(w,d))},
$S:7}
C.ezI.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
C.ezS.prototype={
$1(d){var w=this.a
return w.m(new C.ezH(w,d))},
$S:7}
C.ezH.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ezT.prototype={
$0(){var w=this.a
return w.m(new C.ezG(w))},
$S:0}
C.ezG.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
C.ezU.prototype={
$0(){var w=this.a
return w.m(new C.ezF(w))},
$S:0}
C.ezF.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.ezV.prototype={
$0(){var w=this.a
return w.m(new C.ezE(w))},
$S:0}
C.ezE.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.ezW.prototype={
$0(){var w=this.a
return w.m(new C.ezD(w))},
$S:0}
C.ezD.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.ezB.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.ac(d/365.25,w)+" Earth years"}else w=A.k.ac(d,0)+" Earth days"
return w},
$S:325}
C.ezA.prototype={
$2(d,e){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,D.aQX,w,w,w),A.v5,B.d(e,w,2,A.a2,w,w,w,A.Uv,w,w,w)],x.p),A.E,w,A.e,A.j,0,A.p),1)},
$S:131}
C.ezz.prototype={
$0(){var w=this.a
return w.m(new C.ezy(w))},
$S:0}
C.ezy.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
C.f0x.prototype={
$0(){var w=null,v=B.fS(w,w,w,w,B.cX(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,L.QK,w,w),this.a),A.a6,A.c5,w,A.dP,A.c4)
v.eI()
return v},
$S:342}
C.f0y.prototype={
$1(d){return d.c>0},
$S:z+10}
C.f0z.prototype={
$1(d){return d.c>0},
$S:z+10}
C.dZD.prototype={
$0(){},
$S:0}
C.e_5.prototype={
$1(d){return d!=null},
$S:356}
C.dZS.prototype={
$0(){var w=this.a
return w.m(new C.dZJ(w,this.b))},
$S:0}
C.dZJ.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dZT.prototype={
$0(){var w=this.a
return w.m(new C.dZI(w))},
$S:0}
C.dZI.prototype={
$0(){return this.a.f=!1},
$S:0}
C.dZU.prototype={
$0(){var w=this.a
return w.m(new C.dZR(w))},
$S:0}
C.dZR.prototype={
$0(){return this.a.f=!0},
$S:0}
C.dZY.prototype={
$0(){var w=this.a
return w.m(new C.dZQ(w))},
$S:0}
C.dZQ.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dZZ.prototype={
$1(d){var w=this.a
return w.m(new C.dZP(w,d))},
$S:7}
C.dZP.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e__.prototype={
$0(){var w=this.a
return w.m(w.gcx9())},
$S:0}
C.e_0.prototype={
$1(d){var w=this.a
return w.m(new C.dZO(w,d))},
$S:7}
C.dZO.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.e_1.prototype={
$1(d){var w=this.a
return w.m(new C.dZN(w,d))},
$S:7}
C.dZN.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.e_2.prototype={
$1(d){var w=this.a
return w.m(new C.dZM(w,d))},
$S:7}
C.dZM.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.e_3.prototype={
$1(d){var w=this.a
return w.m(new C.dZL(w,d))},
$S:7}
C.dZL.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.e_4.prototype={
$0(){var w=this.a
return w.m(new C.dZK(w))},
$S:0}
C.dZK.prototype={
$0(){return this.a.ay=4},
$S:0}
C.dZV.prototype={
$0(){var w=this.a
return w.m(new C.dZH(w))},
$S:0}
C.dZH.prototype={
$0(){return this.a.ay=7.67},
$S:0}
C.dZW.prototype={
$0(){var w=this.a
return w.m(new C.dZG(w))},
$S:0}
C.dZG.prototype={
$0(){return this.a.ay=9},
$S:0}
C.dZX.prototype={
$0(){var w=this.a
return w.m(new C.dZF(w))},
$S:0}
C.dZF.prototype={
$0(){return this.a.ay=11.3},
$S:0}
C.dZC.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=B.a([B.bU(0,B.c1(g,new B.o(D.bkp,g,g,B.m(20),g,g,A.n),A.bf),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.zc[q]
n=B.b1(o.d)
o=B.x(B.a([new B.y(o.a,g,new B.F(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new B.y(B.w(D.zc[q].b)+" m/s\xb2",g,D.fl4,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=B.p(g,g,A.f,A.ds,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?B.X(U.NW,B.b1(D.zc[q].d),g,g,g,22):B.p(g,g,A.f,g,g,new B.o(B.b1(D.zc[q].d),g,g,g,B.a([new B.ac(0,A.G,B.b1(D.zc[q].d).j(0.6),A.J,10)],u),g,A.a5),g,22,g,g,g,g,g,22)
j=B.p(g,g,A.f,B.b1(D.zc[q].d).j(0.6),g,g,g,3,g,A.fx,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.ac(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,B.a([new B.cN(p,8,g,g,f,g,o,g),new B.cN(n-0.5,54,g,e,g,g,m,g),new B.cN(n-11,54+s*(l/20),g,g,g,g,k,g),new B.cN(p,g,g,8,f,g,B.x(B.a([j,A.av,new B.y(i,g,A.t5,g,g,g,g,g,g,g,g,g),new B.y(h,g,D.fd3,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d9(v,new C.dZB()))a1.push(D.b7N)
return new B.an(A.a_,g,A.aa,A.t,a1,g)},
$S:67}
C.dZB.prototype={
$1(d){return d==null},
$S:356}
C.dZE.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.E(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=B.m(8)
p=B.p(v,v,A.f,v,v,new B.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=B.d9(v,v,v,v,A.b7,new B.o(v,v,v,B.m(8),v,new B.a9(A.a3,A.a8,A.x,B.a([B.b1(t).j(0.9),B.b1(t).j(0.4)],x.O),v,v),A.n),A.is,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.ac(r,1):C.H2(r)
u=u.ax*9.81/s
u=u<10?A.k.ac(u,2):A.k.ac(u,0)
return new B.an(A.a_,v,A.aa,A.t,B.a([p,t,B.ao(v,B.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.fjk,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:67}
C.dZA.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=B.b4(v,v,v,new C.baX(new B.t(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.ax)
o=A.w.j(0.55)
p=B.m(14)
q=B.I(A.bz,A.r,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.q(u,"forever")||A.a.q(u,"again"))u=A.bm
else u=A.a.q(u,"escapes")?A.aR:A.c
u=B.d(t,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.ac(Math.sqrt(58.86870477034412),1)
s=A.k.ac(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+C.H2(A.k.E(r.cx.gcH()-6371,0,9e9))+" km":""
w=x.p
return new B.an(A.a_,v,A.b1,A.t,B.a([n,B.ao(v,B.p(v,B.x(B.a([u,A.bC,B.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,K.aSF,v,v,v)],w),A.E,v,A.e,A.P,0,A.p),A.f,v,v,new B.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bT,v,v,v),v,v,12,12,8,v)],w),v)},
$S:67}
C.esw.prototype={
$0(){return C.wX(this.b,this.a.d,"size-compare")},
$S:0}
C.esx.prototype={
$0(){var w=this.a
return w.m(new C.esv(w,this.b))},
$S:0}
C.esv.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.esy.prototype={
$0(){var w=this.a
return w.m(new C.esu(w,this.b))},
$S:0}
C.esu.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eZH.prototype={
$3(d,e,f){var w,v,u=this.a
$.V()
w=B.K()
w.r=f.j(0.2).gp(0)
w.z=new B.hC(A.G,Math.max(2,e*0.18))
u.ae(d,e*1.12,w)
w=B.K()
v=B.ar(f,A.w,0.6)
v.toString
w.sar(new B.c0(V.xd,0.5,A.x,null,0,B.a([A.c,f,v],x.O),K.a37,null).aA(0,B.bX(d,e)))
u.ae(d,e,w)},
$S:1878}
C.dHQ.prototype={
$1(d){return d.e<=0},
$S:z+67}
C.dHE.prototype={
$1(d){return d.b},
$S:z+45}
C.dHF.prototype={
$0(){return C.wX(this.b,this.a.d,"black-hole")},
$S:0}
C.dHG.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new B.au(e.b,e.d)
p.Q=o
o=B.aB(A.cc,B.b4(q,q,q,new C.bak(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dHC(p),q,q,q,q,q,q,q,q,q,new C.dHD(p),q,q,q,q,!1,A.a4)
w=A.w.j(0.55)
v=B.m(14)
u=B.I(A.bz,A.r,1)
t=p.r
if(t<1000)t=A.k.ac(t,t<10?1:0)+" Suns"
else t=C.fw4(t)+" Suns"
t=p.af3("MASS",t)
s=2.953*p.r
r=x.p
r=B.a([o,B.ao(q,B.p(q,B.B(B.a([t,p.af3("EDGE WIDTH",(s<100?A.k.ac(s,1):C.H2(s))+" km"),p.af3("TIME",A.k.ac(this.b*100,0)+"%"),p.af3("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bT,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.en_)
return new B.eG(new B.an(A.a_,q,A.b1,A.t,r,q),p.d)},
$S:398}
C.dHD.prototype={
$1(d){return this.a.b_k(d.b)},
$S:23}
C.dHC.prototype={
$1(d){if(A.cW.aj()<0.12)this.a.b_k(d.b)},
$S:21}
C.dHI.prototype={
$1(d){var w=this.a
return w.m(new C.dHB(w,d))},
$S:7}
C.dHB.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
C.dHJ.prototype={
$0(){var w=this.a
return w.m(new C.dHA(w))},
$S:0}
C.dHA.prototype={
$0(){return this.a.r=10},
$S:0}
C.dHK.prototype={
$0(){var w=this.a
return w.m(new C.dHz(w))},
$S:0}
C.dHz.prototype={
$0(){return this.a.r=21},
$S:0}
C.dHL.prototype={
$0(){var w=this.a
return w.m(new C.dHy(w))},
$S:0}
C.dHy.prototype={
$0(){return this.a.r=43e5},
$S:0}
C.dHM.prototype={
$0(){var w=this.a
return w.m(new C.dHx(w))},
$S:0}
C.dHx.prototype={
$0(){return this.a.r=65e8},
$S:0}
C.dHN.prototype={
$0(){var w=this.a
return w.m(new C.dHw(w))},
$S:0}
C.dHw.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dHO.prototype={
$0(){var w=this.a
return w.m(new C.dHv(w))},
$S:0}
C.dHv.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.dHP.prototype={
$0(){var w=this.a
return w.m(new C.dHu(w))},
$S:0}
C.dHu.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.dHH.prototype={
$0(){var w=this.a
return w.m(new C.dHt(w))},
$S:0}
C.dHt.prototype={
$0(){var w=this.a
A.d.a8(w.z)
w.as=0},
$S:0}
C.dYm.prototype={
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
$S:1879}
C.dYc.prototype={
$0(){return C.wX(this.b,this.a.d,"galaxy")},
$S:0}
C.dYd.prototype={
$0(){var w=this.a
return w.m(new C.dYb(w,this.b))},
$S:0}
C.dYb.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.a_k()},
$S:0}
C.dYe.prototype={
$0(){var w=this.a
return w.m(new C.dYa(w))},
$S:0}
C.dYa.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.a_k()}w.cx0()},
$S:0}
C.dYf.prototype={
$1(d){var w=this.a
return w.m(new C.dY9(w,d))},
$S:7}
C.dY9.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.a_k()},
$S:0}
C.dYg.prototype={
$1(d){var w=this.a
return w.m(new C.dY8(w,d))},
$S:7}
C.dY8.prototype={
$0(){var w=this.a
w.r=this.b
w.a_k()},
$S:0}
C.dYh.prototype={
$1(d){var w=this.a
return w.m(new C.dY7(w,d))},
$S:7}
C.dY7.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dYi.prototype={
$1(d){var w=this.a
return w.m(new C.dY6(w,d))},
$S:7}
C.dY6.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.dYj.prototype={
$0(){var w=this.a
return w.m(new C.dY5(w))},
$S:0}
C.dY5.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.dYk.prototype={
$0(){var w=this.a
return w.m(new C.dY4(w))},
$S:0}
C.dY4.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
C.dYl.prototype={
$0(){var w=this.a
return w.m(new C.dY3(w))},
$S:0}
C.dY3.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.ddG.prototype={
$6(d,e,f,g,h,i){return g.a9(0,new B.t((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1880}
C.erL.prototype={
$0(){return C.wX(this.b,this.a.d,"seasons-moon")},
$S:0}
C.erM.prototype={
$0(){var w=this.a
return w.m(new C.erK(w))},
$S:0}
C.erK.prototype={
$0(){return this.a.f="seasons"},
$S:0}
C.erN.prototype={
$0(){var w=this.a
return w.m(new C.erJ(w))},
$S:0}
C.erJ.prototype={
$0(){return this.a.f="moon"},
$S:0}
C.erO.prototype={
$0(){var w=this.a
return w.m(new C.erI(w))},
$S:0}
C.erI.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.erP.prototype={
$0(){var w=this.a
return w.m(new C.erH(w))},
$S:0}
C.erH.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
C.erQ.prototype={
$1(d){var w=this.a
return w.m(new C.erG(w,d))},
$S:7}
C.erG.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.erR.prototype={
$1(d){var w=this.a
return w.m(new C.erF(w,d))},
$S:7}
C.erF.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.erS.prototype={
$1(d){var w=this.a
return w.m(new C.erE(w,d))},
$S:7}
C.erE.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.erT.prototype={
$1(d){var w=this.a
return w.m(new C.erD(w,d))},
$S:7}
C.erD.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=C.aMk.prototype
w.bwo=w.t
w=C.aLu.prototype
w.bvw=w.t
w=C.aLv.prototype
w.bvx=w.t
w=C.aLz.prototype
w.bvB=w.t
w=C.aNa.prototype
w.bxl=w.t
w=C.aMi.prototype
w.bwm=w.t
w=C.aMr.prototype
w.bwv=w.t
w=C.aMw.prototype
w.bwA=w.t
w=C.axW.prototype
w.bsC=w.t
w=C.axX.prototype
w.bsD=w.t
w=C.aJY.prototype
w.btW=w.t
w=C.aLI.prototype
w.bvK=w.t
w=C.aLw.prototype
w.bvy=w.t
w=C.aLN.prototype
w.bvQ=w.t
w=C.aMe.prototype
w.bwi=w.t
w=C.aME.prototype
w.bwI=w.t
w=C.aLS.prototype
w.bvW=w.t
w=C.aLT.prototype
w.bvX=w.t
w=C.aLU.prototype
w.bvY=w.t
w=C.aMn.prototype
w.bwr=w.t
w=C.aMq.prototype
w.bwu=w.t
w=C.aLt.prototype
w.bvv=w.t
w=C.aLQ.prototype
w.bvT=w.t
w=C.aMm.prototype
w.bwq=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(C.aEA.prototype,"gawK","c4T",1)
var r
v(r=C.aD5.prototype,"gcdf","cdg",41)
w(r,"gc5s","aYK",1)
w(C.aD7.prototype,"gc7c","c7d",1)
u(C.aDo.prototype,"gc7j","c7k",40)
w(r=C.aHC.prototype,"gcwH","cwI",1)
w(r,"gc7l","ae6",1)
w(r,"gchH","chI",1)
w(r,"gc7i","ae5",4)
w(r=C.aEz.prototype,"gbH9","a9y",4)
w(r,"gcgY","b10",1)
w(r,"gckJ","agA",4)
t(r,"gc7n","ae7",4)
w(C.aEP.prototype,"gbYF","bYG",1)
t(r=C.a4y.prototype,"gBs","a8",1)
v(r,"gcTR","anw",0)
v(r,"gcQj","LP",0)
w(r,"gcW1","bin",1)
s(C.aiN.prototype,"gc7I",0,5,null,["$5"],["qy"],42,0,0)
w(r=C.aDA.prototype,"gc7J","c7K",1)
w(r,"gcny","agW",4)
w(r,"gcdv","afg",4)
w(r,"gcuI","ai1",4)
w(r=C.aF1.prototype,"gc92","c93",1)
t(r,"gc9_","aZX",1)
w(C.aEn.prototype,"gc90","axJ",1)
t(C.aEG.prototype,"gc94","c95",1)
v(r=C.aDL.prototype,"gc9K","c9L",56)
w(r,"gbP9","bPa",1)
w(r=C.aDM.prototype,"gcx9","cxa",1)
w(r,"gc9P","c9Q",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.ak2,C.Gh,C.uX,C.aSh,C.a3d,C.ban,C.c3k,C.yf,C.Cx,C.ns,C.bb6,C.AH,C.bsQ,C.qc,C.qU,C.CB,C.Zq,C.aeM,C.a0F,C.CL,C.abK,C.ac_,C.adT,C.G1,C.blF,C.Q8,C.ed,C.tB,C.aaq,C.abw,C.a4y,C.mI,C.bb7,C.fN,C.mg,C.bu9,C.aIs,C.qM,C.abb,C.abc,C.va,C.Pm,C.yd,C.Pl,C.bu4,C.PQ,C.aeT])
u(B.hK,[C.fyr,C.fnY,C.fva,C.fvb,C.fyo,C.fyp,C.eaI,C.eb0,C.epf,C.eoN,C.eoO,C.eoP,C.eoQ,C.eoR,C.eoS,C.eoT,C.eoU,C.eoL,C.eoM,C.eoK,C.epa,C.epb,C.epc,C.dHV,C.dHX,C.dI_,C.dIa,C.c3l,C.c3m,C.fhN,C.fhO,C.fhP,C.fhW,C.fhX,C.fhY,C.dJX,C.dJE,C.dJY,C.dJz,C.dJu,C.dJw,C.dJC,C.dJP,C.dJN,C.dJO,C.dJM,C.dJJ,C.dJL,C.eZb,C.eYT,C.eZ_,C.eZ8,C.eYN,C.dku,C.dkv,C.dkr,C.dks,C.dkt,C.dkw,C.dkx,C.dky,C.dkz,C.dkA,C.dkB,C.dkC,C.dkD,C.dkE,C.eob,C.eoc,C.eod,C.eoe,C.eo9,C.eoa,C.eoG,C.eoi,C.eok,C.eo4,C.eoC,C.eoA,C.eoB,C.eoz,C.eoy,C.eo6,C.eAm,C.eAk,C.eA8,C.eAc,C.eA7,C.eAd,C.eAe,C.eAi,C.eGx,C.eGD,C.bN3,C.bNe,C.bN9,C.bNf,C.bNh,C.bN4,C.bN2,C.bNm,C.bNa,C.bNd,C.bNc,C.bNb,C.bHv,C.fKc,C.fKf,C.fKd,C.bHc,C.bH7,C.bH6,C.bHu,C.bHm,C.bHn,C.bHl,C.bHo,C.bGX,C.bGZ,C.bGV,C.bGW,C.bGN,C.bGO,C.fhZ,C.fi_,C.fi0,C.fhM,C.fi1,C.fhL,C.fi2,C.fhQ,C.fhK,C.fhR,C.fhJ,C.fhS,C.fhI,C.fhT,C.fhG,C.fhH,C.fhU,C.fhE,C.fhF,C.fhV,C.fhD,C.dUu,C.dUv,C.dUk,C.dUg,C.dUt,C.dUy,C.cF0,C.fOZ,C.fP_,C.cii,C.eKX,C.dU5,C.dU6,C.dU7,C.dU9,C.eix,C.eGf,C.eGo,C.eGk,C.eGm,C.ehv,C.ehw,C.ehx,C.fSO,C.cvs,C.dZz,C.dYZ,C.dYY,C.dZ9,C.dZa,C.dZ8,C.dZb,C.dZt,C.dZu,C.dZv,C.eH5,C.ezK,C.ezL,C.ezM,C.ezR,C.ezS,C.ezB,C.f0y,C.f0z,C.e_5,C.dZZ,C.e_0,C.e_1,C.e_2,C.e_3,C.dZB,C.eZH,C.dHQ,C.dHE,C.dHD,C.dHC,C.dHI,C.dYm,C.dYf,C.dYg,C.dYh,C.dYi,C.ddG,C.erQ,C.erR,C.erS,C.erT])
u(B.ka,[C.fyq,C.eaN,C.eaL,C.eoW,C.ep8,C.dJv,C.dJS,C.dPP,C.eZe,C.eZf,C.eYS,C.eZ4,C.eZ5,C.eZ0,C.eZ6,C.eYM,C.eo7,C.eo8,C.eoF,C.eox,C.eom,C.eGw,C.bNg,C.bNi,C.bNk,C.bN5,C.bN7,C.bHw,C.cnY,C.fKe,C.bH5,C.bHs,C.bHr,C.dUs,C.cF1,C.dQJ,C.dQH,C.dQB,C.cil,C.dIo,C.dIj,C.eiz,C.dZl,C.dYW,C.dgx,C.eHa,C.ezO,C.ezA,C.dZC,C.dZE,C.dZA,C.dHG])
u(B.ag,[C.VH,C.W3,C.UA,C.UF,C.Nw,C.aHB,C.W2,C.Wh,C.Ws,C.aiL,C.Vg,C.axD,C.V_,C.Wy,C.Vo,C.UB,C.Vf,C.VY,C.W7,C.Wr,C.VX,C.Vu,C.Wu,C.Wg,C.Vv,C.W8,C.Uz,C.Vs,C.W4])
u(B.ah,[C.bkd,C.aMk,C.aLu,C.aLz,C.aDo,C.aNa,C.aMi,C.aMr,C.aMw,C.axW,C.bxh,C.aJY,C.aLI,C.aME,C.aLN,C.aLw,C.bjJ,C.aEn,C.aEG,C.bkU,C.aMe,C.aLS,C.bkY,C.aMq,C.aLU,C.aMn,C.aLt,C.aLQ,C.aMm])
u(B.jc,[C.eaG,C.eaH,C.eaT,C.eaU,C.eaP,C.eaO,C.eaQ,C.eaM,C.eaR,C.eaK,C.eaS,C.eaJ,C.eaX,C.eaW,C.eaY,C.eaV,C.eaZ,C.eb_,C.eb1,C.epe,C.epg,C.eph,C.eoY,C.eoX,C.eoV,C.ep3,C.ep4,C.ep0,C.ep5,C.ep_,C.ep6,C.ep7,C.eoZ,C.ep9,C.ep2,C.epd,C.ep1,C.dIh,C.dIg,C.dHU,C.dIi,C.dHW,C.dHY,C.dHZ,C.dI0,C.dHR,C.dHS,C.dHT,C.dI7,C.dI8,C.dI9,C.dI6,C.dIb,C.dI5,C.dIc,C.dI4,C.dId,C.dI3,C.dIe,C.dI2,C.dIf,C.dI1,C.dJB,C.dJA,C.dJF,C.dJx,C.dJy,C.dJG,C.dJH,C.dJI,C.dJD,C.dJt,C.dJR,C.dJQ,C.dJT,C.dJU,C.dJV,C.dJK,C.dJW,C.cPw,C.dPN,C.dPM,C.dPO,C.fid,C.fie,C.fif,C.fig,C.fih,C.fii,C.fij,C.fik,C.fil,C.eZd,C.eZc,C.eYV,C.eYU,C.eYQ,C.eYP,C.eYR,C.eYO,C.eZ2,C.eZ1,C.eZ3,C.eYW,C.eZ7,C.eYZ,C.eZ9,C.eYY,C.eZa,C.eYX,C.eog,C.eo5,C.eof,C.eo1,C.eoh,C.eoj,C.eo2,C.eo3,C.eoE,C.eoD,C.eou,C.eov,C.eow,C.eoq,C.eor,C.eop,C.eos,C.eoo,C.eot,C.eon,C.eol,C.dkq,C.eAl,C.ezY,C.ezX,C.eA6,C.eAf,C.eA5,C.eAg,C.eA4,C.eAh,C.eA3,C.eA2,C.eAj,C.eA1,C.eA9,C.eA0,C.eAa,C.eA_,C.eAb,C.ezZ,C.eGv,C.eGu,C.eGy,C.eGt,C.eGz,C.eGs,C.eGA,C.eGr,C.eGB,C.eGq,C.eGC,C.eGp,C.bNj,C.bNl,C.bN6,C.bN8,C.bH9,C.bHa,C.bH8,C.bHb,C.bHd,C.bH_,C.bH0,C.bH1,C.bH2,C.bH3,C.bH4,C.bHt,C.bGD,C.bHj,C.bHk,C.bHh,C.bHi,C.bHf,C.bHg,C.bHp,C.bHe,C.bHq,C.bGE,C.bGY,C.bGK,C.bGL,C.bGJ,C.bGM,C.bGI,C.bGP,C.bGQ,C.bGR,C.bGS,C.bGH,C.bGT,C.bGG,C.bGU,C.bGF,C.dUl,C.dUw,C.dUx,C.dUj,C.dUi,C.dUh,C.dUq,C.dUo,C.dUp,C.dUr,C.dUm,C.dUn,C.dUz,C.dUA,C.dUB,C.dUC,C.dUD,C.dQK,C.dQI,C.dQG,C.dQF,C.dQE,C.dQD,C.dQC,C.dQy,C.dQx,C.dQA,C.dQz,C.fit,C.fiu,C.fiv,C.fiw,C.fix,C.fiy,C.fiz,C.fiA,C.cik,C.cij,C.eKY,C.eKU,C.eKT,C.eKW,C.eKV,C.dX2,C.dX3,C.dWY,C.dX_,C.dX0,C.dWZ,C.dX1,C.dIp,C.dIm,C.dIl,C.dIn,C.dIk,C.dU4,C.dU3,C.dU2,C.dU1,C.dU8,C.dU0,C.dU_,C.dUa,C.dTZ,C.dUb,C.dTY,C.dUc,C.dUd,C.dTX,C.eit,C.eiu,C.eis,C.eiv,C.eir,C.eiy,C.eiA,C.eiw,C.eiB,C.eso,C.esp,C.esm,C.esn,C.esl,C.esq,C.esr,C.ess,C.est,C.eGj,C.eGl,C.eGi,C.eGh,C.eGn,C.eGg,C.ehy,C.ehz,C.ehr,C.ehq,C.ehs,C.ehp,C.eht,C.eho,C.ehu,C.ehn,C.ehm,C.ehl,C.ehk,C.cvt,C.cvu,C.fSN,C.cvp,C.cvo,C.cvv,C.cvq,C.cvr,C.cig,C.dZy,C.dZ1,C.dZ_,C.dZ0,C.dYX,C.dZk,C.dZ2,C.dZ3,C.dZm,C.dZ7,C.dZq,C.dZj,C.dZr,C.dZi,C.dZs,C.dZh,C.dZg,C.dZf,C.dZe,C.dZw,C.dZd,C.dZx,C.dZc,C.dZn,C.dZ6,C.dZo,C.dZ5,C.dZp,C.dZ4,C.dYV,C.dYU,C.dgw,C.fim,C.fin,C.fio,C.fip,C.fiq,C.fir,C.fis,C.eH8,C.eH9,C.eH7,C.eH6,C.ezC,C.ezN,C.ezP,C.ezJ,C.ezQ,C.ezI,C.ezH,C.ezT,C.ezG,C.ezU,C.ezF,C.ezV,C.ezE,C.ezW,C.ezD,C.ezz,C.ezy,C.f0x,C.dZD,C.dZS,C.dZJ,C.dZT,C.dZI,C.dZU,C.dZR,C.dZY,C.dZQ,C.dZP,C.e__,C.dZO,C.dZN,C.dZM,C.dZL,C.e_4,C.dZK,C.dZV,C.dZH,C.dZW,C.dZG,C.dZX,C.dZF,C.esw,C.esx,C.esv,C.esy,C.esu,C.dHF,C.dHB,C.dHJ,C.dHA,C.dHK,C.dHz,C.dHL,C.dHy,C.dHM,C.dHx,C.dHN,C.dHw,C.dHO,C.dHv,C.dHP,C.dHu,C.dHH,C.dHt,C.dYc,C.dYd,C.dYb,C.dYe,C.dYa,C.dY9,C.dY8,C.dY7,C.dY6,C.dYj,C.dY5,C.dYk,C.dY4,C.dYl,C.dY3,C.erL,C.erM,C.erK,C.erN,C.erJ,C.erO,C.erI,C.erP,C.erH,C.erG,C.erF,C.erE,C.erD])
t(C.bxr,C.aMk)
t(C.aEA,C.bxr)
u(B.mT,[C.bhj,C.bbp,C.bse,C.ba5,C.bqT,C.bqk,C.baL,C.bqm,C.buj,C.bhh,C.bs9,C.aiN,C.b9j,C.bvl,C.aeF,C.bvx,C.bql,C.blG,C.bfK,C.bs7,C.baX,C.brG,C.bak,C.bfB,C.bqW])
t(C.aLv,C.aLu)
t(C.aD5,C.aLv)
t(C.bxf,C.aLz)
t(C.aD7,C.bxf)
u(B.lX,[C.KA,C.a0s,C.Jy])
u(B.av,[C.brg,C.aeY,C.adQ,C.Qj,C.brK,C.a8p,C.bdw,C.b73,C.f4,C.ho,C.b74,C.j7,C.Fs])
t(C.aHC,C.aNa)
t(C.bhg,B.oV)
t(C.aEz,C.aMi)
t(C.bkM,C.aMr)
t(C.aEP,C.aMw)
t(C.axX,C.axW)
t(C.aiM,C.axX)
t(C.aDA,C.bxh)
t(C.b9k,C.aJY)
t(C.bjH,C.aLI)
t(C.bxy,C.aME)
t(C.aF1,C.bxy)
t(C.bxi,C.aLN)
t(C.bjQ,C.bxi)
t(C.bxe,C.aLw)
t(C.bjt,C.bxe)
t(C.bxq,C.aMe)
t(C.bkp,C.bxq)
t(C.aLT,C.aLS)
t(C.aDL,C.aLT)
t(C.bxv,C.aMq)
t(C.bkL,C.bxv)
t(C.bxk,C.aLU)
t(C.aDM,C.bxk)
t(C.bxt,C.aMn)
t(C.bkI,C.bxt)
t(C.bxd,C.aLt)
t(C.bjs,C.bxd)
t(C.bxj,C.aLQ)
t(C.bjT,C.bxj)
t(C.bxs,C.aMm)
t(C.bkH,C.bxs)
w(C.aMk,B.co)
w(C.bxr,C.qM)
w(C.aLu,B.co)
w(C.aLv,C.qM)
w(C.aLz,B.co)
w(C.bxf,C.qM)
w(C.aNa,B.eN)
w(C.aMi,B.co)
w(C.aMr,B.co)
w(C.aMw,B.co)
w(C.axW,B.co)
w(C.axX,C.qM)
w(C.aJY,B.co)
v(C.bxh,B.ez)
w(C.aLI,B.co)
w(C.aLw,B.co)
w(C.bxe,C.qM)
w(C.aLN,B.co)
w(C.bxi,C.qM)
w(C.aMe,B.co)
w(C.bxq,C.qM)
w(C.aME,B.co)
w(C.bxy,C.qM)
w(C.aLS,B.co)
w(C.aLT,C.qM)
w(C.aLU,B.co)
w(C.bxk,C.qM)
w(C.aMn,B.co)
w(C.bxt,C.qM)
w(C.aMq,B.co)
w(C.bxv,C.qM)
w(C.aLt,B.co)
w(C.bxd,C.qM)
w(C.aLQ,B.co)
w(C.bxj,C.qM)
w(C.aMm,B.co)
w(C.bxs,C.qM)})()
B.jk(b.typeUniverse,JSON.parse('{"VH":{"ag":[],"v":[]},"bkd":{"ah":["VH"]},"W3":{"ag":[],"v":[]},"aEA":{"ah":["W3"]},"bhj":{"aC":[]},"UA":{"ag":[],"v":[]},"aD5":{"ah":["UA"]},"UF":{"ag":[],"v":[]},"aD7":{"ah":["UF"]},"bbp":{"aC":[]},"aeY":{"av":[],"v":[]},"adQ":{"av":[],"v":[]},"aHB":{"ag":[],"v":[]},"Nw":{"ag":[],"v":[]},"aDo":{"ah":["Nw"]},"brg":{"av":[],"v":[]},"Qj":{"av":[],"v":[]},"bse":{"aC":[]},"brK":{"av":[],"v":[]},"ba5":{"aC":[]},"aHC":{"ah":["aHB"]},"bqT":{"aC":[]},"bqk":{"aC":[]},"baL":{"aC":[]},"bqm":{"aC":[]},"buj":{"aC":[]},"W2":{"ag":[],"v":[]},"bhg":{"aC":[]},"aEz":{"ah":["W2"]},"bhh":{"aC":[]},"Wh":{"ag":[],"v":[]},"Ws":{"ag":[],"v":[]},"bkM":{"ah":["Wh"]},"bs9":{"aC":[]},"aEP":{"ah":["Ws"]},"aiN":{"aC":[]},"aiL":{"ag":[],"v":[]},"aiM":{"ah":["aiL"]},"Vg":{"ag":[],"v":[]},"axD":{"ag":[],"v":[]},"aDA":{"ah":["Vg"],"ez":[]},"b9k":{"ah":["axD"]},"b9j":{"aC":[]},"V_":{"ag":[],"v":[]},"bjH":{"ah":["V_"]},"bvl":{"aC":[]},"aeF":{"aC":[]},"a8p":{"av":[],"v":[]},"Wy":{"ag":[],"v":[]},"Vo":{"ag":[],"v":[]},"UB":{"ag":[],"v":[]},"Vf":{"ag":[],"v":[]},"VY":{"ag":[],"v":[]},"W7":{"ag":[],"v":[]},"Wr":{"ag":[],"v":[]},"VX":{"ag":[],"v":[]},"aF1":{"ah":["Wy"]},"bvx":{"aC":[]},"bjQ":{"ah":["Vo"]},"bql":{"aC":[]},"bjt":{"ah":["UB"]},"bjJ":{"ah":["Vf"]},"blG":{"aC":[]},"aEn":{"ah":["VY"]},"aEG":{"ah":["W7"]},"bkU":{"ah":["Wr"]},"bkp":{"ah":["VX"]},"bdw":{"av":[],"v":[]},"b73":{"av":[],"v":[]},"f4":{"av":[],"v":[]},"ho":{"av":[],"v":[]},"b74":{"av":[],"v":[]},"j7":{"av":[],"v":[]},"Fs":{"av":[],"v":[]},"Vu":{"ag":[],"v":[]},"aDL":{"ah":["Vu"]},"bfK":{"aC":[]},"Wu":{"ag":[],"v":[]},"bkY":{"ah":["Wu"]},"Wg":{"ag":[],"v":[]},"Vv":{"ag":[],"v":[]},"W8":{"ag":[],"v":[]},"bkL":{"ah":["Wg"]},"bs7":{"aC":[]},"aDM":{"ah":["Vv"]},"baX":{"aC":[]},"bkI":{"ah":["W8"]},"brG":{"aC":[]},"Uz":{"ag":[],"v":[]},"Vs":{"ag":[],"v":[]},"W4":{"ag":[],"v":[]},"bjs":{"ah":["Uz"]},"bak":{"aC":[]},"bjT":{"ah":["Vs"]},"bfB":{"aC":[]},"bkH":{"ah":["W4"]},"bqW":{"aC":[]}}'))
B.Ge(b.typeUniverse,JSON.parse('{"qM":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.aw
return{x:w("m5<u?>"),G:w("u"),J:w("bu<n,L>"),R:w("dD<n>"),Z:w("a1"),M:w("O<df>"),f5:w("O<a39>"),h:w("O<a3d>"),V:w("O<ac>"),O:w("O<u>"),ey:w("O<U>"),dh:w("O<HS>"),aJ:w("O<aA<aD>>"),w:w("O<a1>"),Q:w("O<ai<u>>"),B:w("O<ai<HS>>"),gO:w("O<ai<ai<L>>>"),bj:w("O<ai<n>>"),b:w("O<ai<L>>"),fA:w("O<ai<H?>>"),C:w("O<a8<n,aD>>"),g:w("O<t>"),bz:w("O<tB>"),ds:w("O<a8M>"),v:w("O<h9>"),L:w("O<+(n,n)>"),fT:w("O<+(L,v)>"),I:w("O<+(H,n)>"),u:w("O<+(H,H)>"),c:w("O<+(n,n,a1)>"),e:w("O<+(n,L,L,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,L,L,a8<n,L>)>"),_:w("O<uX>"),q:w("O<cS>"),fQ:w("O<aaq>"),s:w("O<n>"),cF:w("O<as>"),X:w("O<wk>"),m:w("O<abb>"),p:w("O<v>"),bL:w("O<abw>"),D:w("O<lr>"),a_:w("O<abK>"),cB:w("O<ns>"),ba:w("O<ac_>"),d9:w("O<PQ>"),eW:w("O<CB>"),fY:w("O<Zq>"),ed:w("O<Q8>"),g4:w("O<blF>"),ac:w("O<adT>"),cd:w("O<CL>"),fr:w("O<aeM>"),e4:w("O<a0F>"),r:w("O<aeT>"),au:w("O<aIs>"),f7:w("O<R>"),n:w("O<L>"),t:w("O<H>"),dS:w("O<aC?>"),fs:w("O<tB?>"),bN:w("O<H?>"),gJ:w("cz<aiM>"),z:w("cz<ah<ag>>"),bF:w("ai<u>"),gl:w("ai<U>"),ew:w("ai<aD>"),j:w("ai<@>"),P:w("a8<n,@>"),f:w("a8<@,@>"),bd:w("N<ed,n>"),fR:w("N<+(L,v),v>"),l:w("iE"),gA:w("zq"),gD:w("vX"),a:w("ct"),K:w("aD"),W:w("tB"),E:w("ed"),N:w("n"),bO:w("as"),k:w("kz"),Y:w("bn<L>"),cL:w("abc"),gj:w("cs<n>"),aC:w("cs<H?>"),dg:w("ec<qU>"),F:w("ban"),a2:w("Cx"),f3:w("qU"),es:w("G1"),U:w("n4"),y:w("R"),i:w("L"),A:w("@"),S:w("H"),bM:w("ai<@>?"),cK:w("aD?"),az:w("q4?"),T:w("n?"),cD:w("L?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aYK=new B.df(0,0.1)
D.b_p=new C.aSh(0,0,0)
D.KO=new C.aSh(0,0.5,0)
D.b_Y=new B.ay(A.bm,1,A.r,-1)
D.b1r=new B.aY(0,1/0,0,290)
D.b1y=new B.aY(16,1/0,16,1/0)
D.b2N=new B.o(A.be,null,null,null,null,null,A.a5)
D.faL=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNg=new B.y("\u26a1",null,D.faL,null,null,null,null,null,null,null,null,null)
D.b7j=new B.ci(A.A,null,null,D.fNg,null)
D.aRZ=new B.F(!0,A.bU,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCT=new B.y("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aRZ,null,A.L,null,null,null,null,null,null,null)
D.egB=new B.D(A.o6,D.fCT,null)
D.b7s=new B.ci(A.A,null,null,D.egB,null)
D.fGN=new B.y("Press Drop! and watch them fall from 20 metres.",null,A.kP,null,A.L,null,null,null,null,null,null,null)
D.egF=new B.D(A.o6,D.fGN,null)
D.b7N=new B.ci(A.A,null,null,D.egF,null)
D.fm5=new B.F(!0,A.jK,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLE=new B.y("Draw anywhere",null,D.fm5,null,null,null,null,null,null,null,null,null)
D.b7S=new B.ci(A.A,null,null,D.fLE,null)
D.fsV=new B.y("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aRZ,null,A.L,null,null,null,null,null,null,null)
D.ehp=new B.D(A.FW,D.fsV,null)
D.b8b=new B.ci(A.A,null,null,D.ehp,null)
D.ad7=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.baW=new B.u(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.q)
D.bbL=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.WM=new B.u(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
D.bbR=new B.u(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.q)
D.bbW=new B.u(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.q)
D.bc1=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bde=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bdk=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bdH=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.beZ=new B.u(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.q)
D.aez=new B.u(1,1,0.23137254901960785,0.12156862745098039,A.q)
D.bfs=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.AY=new B.u(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.q)
D.bgq=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bh6=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.afd=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bhs=new B.u(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.q)
D.bhM=new B.u(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.q)
D.bi2=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.afA=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.XF=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bjK=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.bjN=new B.u(1,0.043137254901960784,0.10588235294117647,0.2,A.q)
D.bjR=new B.u(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.q)
D.bk_=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.ag3=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bkp=new B.u(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.q)
D.LR=new B.u(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.q)
D.blC=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.blK=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.blZ=new B.u(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.q)
D.bm2=new B.u(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.q)
D.bma=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.vI=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.agU=new B.u(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.q)
D.bnn=new B.u(1,0.7490196078431373,0.8431372549019608,1,A.q)
D.boa=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.boF=new B.u(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.q)
D.ahl=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.btK=new B.b9(11e6)
D.aij=new B.Q(0,0,9,0)
D.bvm=new B.Q(10,10,10,6)
D.bvv=new B.Q(10,34,10,26)
D.bvD=new B.Q(10,6,10,2)
D.bvF=new B.Q(10,8,0,10)
D.bwg=new B.Q(12,8,8,8)
D.bwl=new B.Q(14,0,14,22)
D.bwn=new B.Q(14,0,14,30)
D.aiR=new B.Q(14,10,8,12)
D.bxn=new B.Q(16,4,16,28)
D.bxy=new B.Q(16,8,16,12)
D.bzG=new B.Q(26,12,26,58)
D.bAu=new B.Q(4,4,6,2)
D.bAw=new B.Q(4,4,8,2)
D.bB7=new B.Q(8,14,8,12)
D.bBe=new B.Q(8,40,8,30)
D.bBi=new B.Q(8,6,16,0)
D.bBj=new B.Q(8,6,8,8)
D.bBE=new B.Q(0,0,1.5,0)
D.b_b=new B.Hh(26,"saturation")
D.bBW=new B.xh(A.cU,D.b_b,null,A.WD)
D.fs0=new B.y("REACTION LAB",null,W.aSy,null,null,null,null,A.a2,null,1,null,null)
D.bC2=new B.bA(1,A.bd,D.fs0,null)
D.fiP=new B.F(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvc=new B.y("CORE PROTOCOL",null,D.fiP,null,null,null,null,null,null,null,null,null)
D.bCg=new B.bA(1,A.bd,D.fvc,null)
D.fvY=new B.y("\ud83d\udce2 NGMY Ads",null,A.qD,null,null,null,null,A.eK,null,1,null,null)
D.bD0=new B.bA(1,A.bd,D.fvY,null)
D.fqK=new B.y("Wire selected",null,A.fO,null,null,null,null,null,null,null,null,null)
D.bDf=new B.bA(1,A.bd,D.fqK,null)
D.am2=new B.a1(62712,"MaterialIcons",!1)
D.bIZ=new B.a1(62878,"MaterialIcons",!1)
D.bJ1=new B.a1(62908,"MaterialIcons",!1)
D.bJ2=new B.a1(62931,"MaterialIcons",!1)
D.bJ5=new B.a1(62951,"MaterialIcons",!1)
D.bJm=new B.a1(63070,"MaterialIcons",!1)
D.O2=new B.a1(63128,"MaterialIcons",!1)
D.GG=new B.a1(63726,"MaterialIcons",!1)
D.bKF=new B.a1(983122,"MaterialIcons",!1)
D.bKT=new B.a1(983247,"MaterialIcons",!1)
D.bL4=new B.a1(983415,"MaterialIcons",!1)
D.anl=new B.a1(983467,"MaterialIcons",!1)
D.bLk=new B.a1(983616,"MaterialIcons",!1)
D.bLN=new B.a1(984561,"MaterialIcons",!1)
D.bMn=new B.ae(A.ro,24,A.aT,null,null,null)
D.bN9=new B.ae(A.Om,null,A.ae,null,null,null)
D.bNH=new B.ae(A.ob,21,A.ae,null,null,null)
D.bKE=new B.a1(983117,"MaterialIcons",!1)
D.bP3=new B.ae(D.bKE,28,A.c,null,null,null)
D.bPj=new B.ae(A.jb,18,null,null,null,null)
D.bR7=new B.ae(A.ec,21,A.cs,null,null,null)
D.bRm=new B.ae(A.od,null,A.ae,null,null,null)
D.bRw=new B.ae(A.a1x,21,A.ae,null,null,null)
D.bSm=new B.ae(A.eI,17,A.ae,null,null,null)
D.aoH=new B.ae(A.eI,19,null,null,null,null)
D.qk=new B.ae(A.uk,21,A.ae,null,null,null)
D.bTU=new B.ae(A.NT,null,A.ae,null,null,null)
D.bV2=new B.ae(A.jb,21,A.ae,null,null,null)
D.bVU=new B.ae(A.fj,20,A.aB,null,null,null)
D.bWz=new B.ae(A.e3,null,A.aT,null,null,null)
D.bWU=new B.ae(A.oc,null,A.aB,null,null,null)
D.djV=w([A.d8,A.d0,A.d8],x.O)
D.bZW=new B.a9(A.a3,A.a8,A.x,D.djV,null,null)
D.cXR=w([A.bO,A.bl],x.O)
D.c_3=new B.a9(A.b3,A.b6,A.x,D.cXR,null,null)
D.c_g=new B.a9(A.b3,A.b6,A.x,A.ayV,null,null)
D.apI=new B.a9(A.b3,A.b6,A.x,M.a3i,null,null)
D.cVA=w([A.oL,A.il],x.O)
D.c02=new B.a9(A.b3,A.b6,A.x,D.cVA,null,null)
D.cXz=w([A.e5,A.au],x.O)
D.apP=new B.a9(A.b3,A.b6,A.x,D.cXz,null,null)
D.ddT=w([A.dv,A.j4,A.bl],x.O)
D.c0l=new B.a9(A.a3,A.a8,A.x,D.ddT,null,null)
D.ddZ=w([A.he,A.cp],x.O)
D.c0G=new B.a9(A.b3,A.b6,A.x,D.ddZ,null,null)
D.cu5=w([A.bO,A.dv],x.O)
D.c0P=new B.a9(A.a3,A.a8,A.x,D.cu5,null,null)
D.azD=w([A.e5,I.n9],x.O)
D.c0W=new B.a9(A.b3,A.b6,A.x,D.azD,null,null)
D.c1c=new B.a9(A.b3,A.b6,A.x,K.aqa,null,null)
D.c20=new B.a9(A.ay,A.aD,A.x,A.a3f,null,null)
D.d5T=w([A.au,A.w],x.O)
D.c2b=new B.a9(A.b3,A.b6,A.x,D.d5T,null,null)
D.c2e=new B.a9(A.b3,A.b6,A.x,G.az_,null,null)
D.bm6=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bmU=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cGS=w([A.M8,D.bm6,D.bmU],x.O)
D.c2o=new B.a9(A.b3,A.b6,A.x,D.cGS,null,null)
D.cup=w([A.d9,A.h1],x.O)
D.c2E=new B.a9(A.b3,A.b6,A.x,D.cup,null,null)
D.c38=w([0,2,4,6,7,9,11],x.t)
D.c3m=w([0,4,7],x.t)
D.c3n=w([0,4,7,12],x.t)
D.c3o=w([0,4,7,4],x.t)
D.ayF=w([A.hb,A.pU],x.O)
D.ay9=w([A.iK,A.cN],x.O)
D.awy=w([A.by,A.dD],x.O)
D.cPs=w([A.aT,A.d9],x.O)
D.cVW=w([A.cs,A.el],x.O)
D.dfd=w([A.c8,A.lq],x.O)
D.aw_=w([A.cZ,A.k9],x.O)
D.cUq=w([A.bL,A.aJ],x.O)
D.c3K=w([D.ayF,D.ay9,A.a3n,D.awy,D.cPs,D.cVW,A.axF,D.dfd,D.aw_,D.cUq],x.Q)
D.c8q=w([120,220,380],x.t)
D.cca=w([12,16,19,24],x.t)
D.cck=w([1400,800,450,2400],x.t)
D.cgB=w([0,0.6,1],x.n)
D.ckM=w([250,450,900,1500],x.t)
D.bb9=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bmu=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bkr=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bpX=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bjA=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.avf=w([D.bb9,D.bmu,D.bkr,D.bpX,D.bjA],x.O)
D.eLw=new B.z("type","Typewriter")
D.eE_=new B.z("bounce","Bounce")
D.eMn=new B.z("wave","Wave")
D.eNs=new B.z("zoom","Zoom")
D.cBA=w([D.eLw,D.eE_,D.eMn,A.a7b,K.aNJ,D.eNs,K.aNO],x.L)
D.cBO=w([50,25,75],x.t)
D.cHo=w([0,5,10,15,18,20,25],x.t)
D.cPI=w([900,500,250,1600],x.t)
D.cTc=w([0.78,1],x.n)
D.cTf=w([0,2,4,7,9,12,14,16],x.t)
D.cTM=w([A.by,A.bA,A.bc,A.by],x.O)
D.a3c=w([A.aw,A.bI,A.be,A.aR,A.o_],x.O)
D.cVe=w([A.au,A.aw,A.cZ,A.bI,A.be,A.cC,A.c9,A.bA,A.WS],x.O)
D.a3g=w([0.04,0.17,0.3],x.n)
D.eVS=new C.uX("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eVY=new C.uX("Medium engine","A good all-rounder.",0.3,0.9)
D.eVX=new C.uX("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Hu=w([D.eVS,D.eVY,D.eVX],x._)
D.etu=new B.z(6,"Easy")
D.eud=new B.z(8,"Medium")
D.epk=new B.z(10,"Hard")
D.cWJ=w([D.etu,D.eud,D.epk],x.I)
D.awX=w([0.55,0.78,1],x.n)
D.cYi=w([0.93,0.975,1],x.n)
D.ax7=w([A.c,A.h0,A.nR,A.au],x.O)
D.fQi=new C.yd("Moon",1737,4291941851)
D.fQf=new C.yd("Earth",6371,4281908728)
D.fQj=new C.yd("Neptune",24622,4284524026)
D.fQk=new C.yd("Saturn",58232,4294829706)
D.fQg=new C.yd("Jupiter",69911,4294677052)
D.fQl=new C.yd("Sun",696340,4294688548)
D.fQm=new C.yd("Sirius A",119e4,4290763774)
D.fQd=new C.yd("Arcturus",179e5,4294818420)
D.fQe=new C.yd("Betelgeuse",531e6,4294472049)
D.fQh=new C.yd("UY Scuti",667e6,4293870660)
D.Qx=w([D.fQi,D.fQf,D.fQj,D.fQk,D.fQg,D.fQl,D.fQm,D.fQd,D.fQe,D.fQh],B.aw("O<yd>"))
D.eR1=new B.bj("glow","Glow",A.a0F)
D.eOC=new B.bj("rainbow","Rainbow",A.nq)
D.eOZ=new B.bj("stars","Stars",A.ie)
D.eOm=new B.bj("sparks","Sparks",A.e3)
D.eQi=new B.bj("fire","Fire",A.w9)
D.d_9=w([D.eR1,D.eOC,D.eOZ,D.eOm,D.eQi],x.c)
D.axc=w([A.be,A.aw,A.bI,A.d0],x.O)
D.d0b=w([0.2,1],x.n)
D.eVP=new C.uX("Radar","Shows your height above the ground.",0.1,0)
D.eVQ=new C.uX("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eVN=new C.uX("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.axk=w([D.eVP,D.eVQ,D.eVN],x._)
D.d1d=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.d1s=w([47,100,220,470,1000],x.n)
D.d2_=w([0,2,4,7,9],x.t)
D.Iy={volts:0}
D.a4Z=new B.bu(D.Iy,[3],x.J)
D.IX=new B.e9(["b","battery",0.2,0.3,D.a4Z])
D.eaO={on:0}
D.duu=new B.bu(D.eaO,[1],x.J)
D.DC=new B.e9(["s","switch",0.5,0.3,D.duu])
D.eTD=new B.e9(["l","bulb",0.8,0.3,A.jf])
D.cXY=w([D.IX,D.DC,D.eTD],x.d)
D.DB=new B.cw(["b",0,"s",0])
D.eSE=new B.cw(["s",1,"l",0])
D.aNS=new B.cw(["l",1,"b",1])
D.de4=w([D.DB,D.eSE,D.aNS],x.o)
D.cXr=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eow=new C.mI("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cXY,D.de4,D.cXr)
D.aHN={ohms:0}
D.aFo=new B.bu(D.aHN,[220],x.J)
D.eT6=new B.e9(["r","resistor",0.5,0.3,D.aFo])
D.eTS=new B.e9(["d","led",0.8,0.3,A.jf])
D.dhh=w([D.IX,D.eT6,D.eTS],x.d)
D.eS_=new B.cw(["b",0,"r",0])
D.eSy=new B.cw(["r",1,"d",0])
D.eS5=new B.cw(["d",1,"b",1])
D.dqb=w([D.eS_,D.eSy,D.eS5],x.o)
D.dhH=w(["led","diode","indicator"],x.s)
D.eoD=new C.mI("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dhh,D.dqb,D.dhH)
D.a6e={level:0}
D.dtR=new B.bu(D.a6e,[0.2],x.J)
D.eTc=new B.e9(["p","pot",0.5,0.3,D.dtR])
D.eTe=new B.e9(["m","motor",0.8,0.3,A.jf])
D.cYf=w([D.IX,D.eTc,D.eTe],x.d)
D.eRZ=new B.cw(["b",0,"p",0])
D.eSu=new B.cw(["p",1,"m",0])
D.eSq=new B.cw(["m",1,"b",1])
D.dlU=w([D.eRZ,D.eSu,D.eSq],x.o)
D.ddM=w(["fan","motor","spin","dimmer"],x.s)
D.eou=new C.mI("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cYf,D.dlU,D.ddM)
D.a4W=new B.bu(D.a6e,[0.9],x.J)
D.aNZ=new B.e9(["s","solar",0.25,0.3,D.a4W])
D.aNY=new B.e9(["l","bulb",0.75,0.3,A.jf])
D.d_S=w([D.aNZ,D.aNY],x.d)
D.eSB=new B.cw(["s",0,"l",0])
D.eSp=new B.cw(["l",1,"s",1])
D.cZ_=w([D.eSB,D.eSp],x.o)
D.dmw=w(["solar","sun","without battery","no battery","free"],x.s)
D.eox=new C.mI("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d_S,D.cZ_,D.dmw)
D.eTV=new B.e9(["c","crank",0.25,0.3,D.a4W])
D.dc7=w([D.eTV,D.aNY],x.d)
D.eS2=new B.cw(["c",0,"l",0])
D.eSo=new B.cw(["l",1,"c",1])
D.dcF=w([D.eS2,D.eSo],x.o)
D.dcf=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eot=new C.mI("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dc7,D.dcF,D.dcf)
D.dtQ=new B.bu(D.a6e,[0.7],x.J)
D.eTh=new B.e9(["t","turbine",0.25,0.3,D.dtQ])
D.eT4=new B.e9(["m","motor",0.75,0.3,A.jf])
D.d6y=w([D.eTh,D.eT4],x.d)
D.eSM=new B.cw(["t",0,"m",0])
D.eSr=new B.cw(["m",1,"t",1])
D.d5x=w([D.eSM,D.eSr],x.o)
D.daV=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eoq=new C.mI("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.d6y,D.d5x,D.daV)
D.aFl=new B.bu(D.Iy,[9],x.J)
D.a7i=new B.e9(["b","battery",0.2,0.3,D.aFl])
D.aNX=new B.e9(["r","radio",0.8,0.3,A.jf])
D.dn7=w([D.a7i,D.DC,D.aNX],x.d)
D.eSG=new B.cw(["s",1,"r",0])
D.aNT=new B.cw(["r",1,"b",1])
D.c34=w([D.DB,D.eSG,D.aNT],x.o)
D.dlG=w(["radio","music","listen"],x.s)
D.eoC=new C.mI("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dn7,D.c34,D.dlG)
D.duV=new B.bu(D.Iy,[12],x.J)
D.aNW=new B.e9(["b","battery",0.2,0.3,D.duV])
D.eTE=new B.e9(["t","tv",0.8,0.3,A.jf])
D.cY_=w([D.aNW,D.DC,D.eTE],x.d)
D.eSH=new B.cw(["s",1,"t",0])
D.aNU=new B.cw(["t",1,"b",1])
D.dfg=w([D.DB,D.eSH,D.aNU],x.o)
D.dn4=w(["tv","television","screen","watch"],x.s)
D.eon=new C.mI("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cY_,D.dfg,D.dn4)
D.eTu=new B.e9(["z","buzzer",0.8,0.3,A.jf])
D.cE8=w([D.IX,D.DC,D.eTu],x.d)
D.eSI=new B.cw(["s",1,"z",0])
D.eT_=new B.cw(["z",1,"b",1])
D.cT0=w([D.DB,D.eSI,D.eT_],x.o)
D.dk0=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eoz=new C.mI("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cE8,D.cT0,D.dk0)
D.eTd=new B.e9(["h","heater",0.8,0.3,A.jf])
D.d9C=w([D.a7i,D.DC,D.eTd],x.d)
D.eSD=new B.cw(["s",1,"h",0])
D.eSd=new B.cw(["h",1,"b",1])
D.cTI=w([D.DB,D.eSD,D.eSd],x.o)
D.co3=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eoo=new C.mI("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d9C,D.cTI,D.co3)
D.eTG=new B.e9(["s","solar",0.2,0.25,D.a4W])
D.duZ=new B.bu(D.aHN,[100],x.J)
D.eTJ=new B.e9(["r","resistor",0.55,0.25,D.duZ])
D.eTQ=new B.e9(["c","capacitor",0.85,0.25,A.jf])
D.eT9=new B.e9(["q","resistor",0.55,0.6,D.aFo])
D.eTH=new B.e9(["d","led",0.85,0.6,A.jf])
D.deM=w([D.eTG,D.eTJ,D.eTQ,D.eT9,D.eTH],x.d)
D.eSC=new B.cw(["s",0,"r",0])
D.eSx=new B.cw(["r",1,"c",0])
D.eS4=new B.cw(["c",1,"s",1])
D.eS3=new B.cw(["c",0,"q",0])
D.eSw=new B.cw(["q",1,"d",0])
D.eS6=new B.cw(["d",1,"c",1])
D.d3s=w([D.eSC,D.eSx,D.eS4,D.eS3,D.eSw,D.eS6],x.o)
D.dbs=w(["capacitor","store","charge","flash"],x.s)
D.eoB=new C.mI("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.deM,D.d3s,D.dbs)
D.eTk=new B.e9(["b","battery",0.15,0.3,D.a4Z])
D.eTW=new B.e9(["l1","bulb",0.5,0.3,A.jf])
D.eTr=new B.e9(["l2","bulb",0.85,0.3,A.jf])
D.cWa=w([D.eTk,D.eTW,D.eTr],x.d)
D.eRY=new B.cw(["b",0,"l1",0])
D.eSl=new B.cw(["l1",1,"l2",0])
D.eSm=new B.cw(["l2",1,"b",1])
D.d7f=w([D.eRY,D.eSl,D.eSm],x.o)
D.dmQ=w(["series","two bulbs","dim"],x.s)
D.eor=new C.mI("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cWa,D.d7f,D.dmQ)
D.eb6={volts:0,charge:1}
D.dv1=new B.bu(D.eb6,[1.5,0],x.J)
D.eTO=new B.e9(["b","battery",0.75,0.3,D.dv1])
D.cVB=w([D.aNZ,D.eTO],x.d)
D.eSA=new B.cw(["s",0,"b",0])
D.eS1=new B.cw(["b",1,"s",1])
D.d3L=w([D.eSA,D.eS1],x.o)
D.dbB=w(["charge","rechargeable","flat","recharge"],x.s)
D.eop=new C.mI("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cVB,D.d3L,D.dbB)
D.duU=new B.bu(D.Iy,[4.5],x.J)
D.eTf=new B.e9(["b","battery",0.2,0.3,D.duU])
D.aNV=new B.e9(["p","phone",0.8,0.3,A.jf])
D.d6o=w([D.eTf,D.DC,D.aNV],x.d)
D.eSF=new B.cw(["s",1,"p",0])
D.a7h=new B.cw(["p",1,"b",1])
D.diZ=w([D.DB,D.eSF,D.a7h],x.o)
D.dkq=w(["phone","charger","usb","mobile"],x.s)
D.eov=new C.mI("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.d6o,D.diZ,D.dkq)
D.eT1=new B.e9(["f","fan",0.8,0.3,A.jf])
D.cg9=w([D.IX,D.eT1],x.d)
D.eRX=new B.cw(["b",0,"f",0])
D.eSb=new B.cw(["f",1,"b",1])
D.cUd=w([D.eRX,D.eSb],x.o)
D.ddL=w(["fan","cool","air","wind"],x.s)
D.eoE=new C.mI("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cg9,D.cUd,D.ddL)
D.eTy=new B.e9(["b","battery",0.15,0.2,D.a4Z])
D.eT2=new B.e9(["a","ammeter",0.5,0.2,A.jf])
D.eT0=new B.e9(["l","bulb",0.85,0.2,A.jf])
D.eTA=new B.e9(["v","voltmeter",0.5,0.6,A.jf])
D.dbW=w([D.eTy,D.eT2,D.eT0,D.eTA],x.d)
D.eRV=new B.cw(["b",0,"a",0])
D.eRU=new B.cw(["a",1,"l",0])
D.eSO=new B.cw(["v",0,"l",0])
D.eSP=new B.cw(["v",1,"l",1])
D.d3C=w([D.eRV,D.eRU,D.aNS,D.eSO,D.eSP],x.o)
D.dqa=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eoA=new C.mI("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dbW,D.d3C,D.dqa)
D.eTZ=new B.e9(["b","battery",0.15,0.2,D.aFl])
D.eTj=new B.e9(["t","tv",0.55,0.2,A.jf])
D.aFm=new B.bu(D.Iy,[5],x.J)
D.eT7=new B.e9(["c","buck",0.4,0.5,D.aFm])
D.eTl=new B.e9(["p","phone",0.8,0.5,A.jf])
D.d1f=w([D.eTZ,D.eTj,D.eT7,D.eTl],x.d)
D.eS0=new B.cw(["b",0,"t",0])
D.aNQ=new B.cw(["b",0,"c",0])
D.aNR=new B.cw(["c",1,"p",0])
D.d6l=w([D.eS0,D.aNU,D.aNQ,D.aNR,D.a7h],x.o)
D.d_r=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eos=new C.mI("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.d1f,D.d6l,D.d_r)
D.eT8=new B.e9(["c","buck",0.5,0.3,D.aFm])
D.cTz=w([D.aNW,D.eT8,D.aNV],x.d)
D.cYp=w([D.aNQ,D.aNR,D.a7h],x.o)
D.crv=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eom=new C.mI("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cTz,D.cYp,D.crv)
D.eTp=new B.e9(["d","diode",0.5,0.3,A.jf])
D.d7s=w([D.a7i,D.eTp,D.aNX],x.d)
D.eRW=new B.cw(["b",0,"d",0])
D.eS7=new B.cw(["d",1,"r",0])
D.cGG=w([D.eRW,D.eS7,D.aNT],x.o)
D.d_6=w(["diode","protect","backwards","one way"],x.s)
D.eoy=new C.mI("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.d7s,D.cGG,D.d_6)
D.QB=w([D.eow,D.eoD,D.eou,D.eox,D.eot,D.eoq,D.eoC,D.eon,D.eoz,D.eoo,D.eoB,D.eor,D.eop,D.eov,D.eoE,D.eoA,D.eos,D.eom,D.eoy],B.aw("O<mI>"))
D.hjO=new C.Gh("Moon",1.62,A.dv,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hjM=new C.Gh("Mars",3.71,A.aw,"Mars has about 38 percent of Earth's gravity.")
D.hjP=new C.Gh("Mercury",3.7,A.k8,"Mercury is small, so its gravity is like Mars.")
D.hjJ=new C.Gh("Venus",8.87,A.aT,"Venus is almost as heavy as Earth, with strong gravity.")
D.hjL=new C.Gh("Earth",9.81,A.aR,"On Earth gravity is strong, and the air also slows you down.")
D.hjN=new C.Gh("Neptune",11.15,A.d0,"Neptune pulls a little harder than Earth.")
D.hjK=new C.Gh("Jupiter",24.79,A.cZ,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rx=w([D.hjO,D.hjM,D.hjP,D.hjJ,D.hjL,D.hjN,D.hjK],B.aw("O<Gh>"))
D.d3q=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a3w=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.d49=w([0.2,0.5,0.8],x.n)
D.eZ1=new B.cS(A.bk,A.J,4)
D.d4x=w([D.eZ1],x.q)
D.axQ=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aXA=new C.KA(0,"accordion")
D.cUy=w([A.jA,A.Cc,A.BZ],x.w)
D.d0G=w(["Mail","SMS","Ad"],x.s)
D.cV5=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hi0=new C.AH(D.aXA,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.ayF,D.cUy,D.d0G,D.cV5)
D.aaP=new C.KA(1,"flip")
D.dbm=w([A.rp,A_.GU,A.up],x.w)
D.d65=w(["Unlock","Verify","Secure"],x.s)
D.cTv=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hi_=new C.AH(D.aaP,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.ay9,D.dbm,D.d65,D.cTv)
D.aXB=new C.KA(2,"towers")
D.d4S=w([A.yN,A.qh,A.hW],x.w)
D.d4s=w(["Save","Grow","Earn"],x.s)
D.cHz=w(["","",""],x.s)
D.hi1=new C.AH(D.aXB,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a3n,D.d4S,D.d4s,D.cHz)
D.aaQ=new C.KA(3,"assemble")
D.dci=w([A.of,A.hq,A.e3],x.w)
D.d03=w(["Launch","Charge","Shine"],x.s)
D.d8J=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hi3=new C.AH(D.aaQ,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.awy,D.dci,D.d03,D.d8J)
D.aXC=new C.KA(4,"carousel")
D.dc8=w([A.bc,A.f5],x.O)
D.d0P=w([A.ob,A.amy,A.Ot],x.w)
D.cWz=w(["Explore","Discover","Learn"],x.s)
D.d6t=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hhZ=new C.AH(D.aXC,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dc8,D.d0P,D.cWz,D.d6t)
D.aXD=new C.KA(5,"burst")
D.d4n=w([A.i8,A.ty],x.O)
D.cV0=w([A.l5,A.mI,A.hV],x.w)
D.cVm=w(["Cheer","Win","Love"],x.s)
D.cXx=w(["Make some noise","First place","Share the joy"],x.s)
D.hi2=new C.AH(D.aXD,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.d4n,D.cV0,D.cVm,D.cXx)
D.axR=w([D.hi0,D.hi_,D.hi1,D.hi3,D.hhZ,D.hi2],B.aw("O<AH>"))
D.ePs=new B.bj("skin","Skin",A.amz)
D.eQO=new B.bj("muscle","Muscles",A.O6)
D.eQw=new B.bj("organ","Organs",A.hV)
D.bII=new B.a1(62747,"MaterialIcons",!1)
D.eQC=new B.bj("bone","Skeleton",D.bII)
D.eQU=new B.bj("vessel","Blood vessels",A.qj)
D.d4Y=w([D.ePs,D.eQO,D.eQw,D.eQC,D.eQU],x.c)
D.eVR=new C.uX("Simple legs","Light. Land gently.",0.15,0.2)
D.eVT=new C.uX("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eVW=new C.uX("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.CH=w([D.eVR,D.eVT,D.eVW],x._)
D.d6D=w([1.77,3.55,7.15,16.7],x.n)
D.d9a=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.eL0=new B.z("spiral","Spiral")
D.etr=new B.z("barred","Barred spiral")
D.eF6=new B.z("elliptical","Elliptical")
D.d9S=w([D.eL0,D.etr,D.eF6],x.L)
D.eRC=new B.cw(["beat",0.18,0.28,0])
D.eSJ=new B.cw(["burst",0.7,0.2,0])
D.eSU=new B.cw(["delay",0.45,0.5,1])
D.eSt=new B.cw(["ripple",0.75,0.6,3])
D.d_N=w([D.eRC,D.eSJ,D.eSU,D.eSt],x.e)
D.daJ=w([O.lk,M.IW,F.T9],x.u)
D.hhe=new C.G1("First spark","A clock lights a burst and a ripple",D.d_N,D.daJ)
D.eSa=new B.cw(["beat",0.15,0.3,1])
D.eRg=new B.cw(["ripple",0.62,0.15,0])
D.eSQ=new B.cw(["delay",0.4,0.45,0])
D.eRR=new B.cw(["ripple",0.7,0.45,0])
D.eRy=new B.cw(["delay",0.4,0.7,1])
D.eSv=new B.cw(["shake",0.75,0.75,0])
D.dnZ=w([D.eSa,D.eRg,D.eSQ,D.eRR,D.eRy,D.eSv],x.e)
D.eqn=new B.z(2,4)
D.aNC=new B.z(4,5)
D.d3g=w([O.lk,M.IW,F.T9,D.eqn,D.aNC],x.u)
D.hhg=new C.G1("Heartbeat","Two thumps, then a shake",D.dnZ,D.d3g)
D.eRH=new B.cw(["dice",0.15,0.7,1])
D.eSW=new B.cw(["echo",0.4,0.7,0])
D.eRP=new B.cw(["comet",0.7,0.5,4])
D.eSK=new B.cw(["burst",0.72,0.2,1])
D.eS8=new B.cw(["burst",0.3,0.25,0])
D.eRI=new B.cw(["pop",0.55,0.85,0])
D.cnC=w([D.eRH,D.eSW,D.eRP,D.eSK,D.eS8,D.eRI],x.e)
D.epM=new B.z(1,3)
D.epN=new B.z(1,4)
D.aNy=new B.z(0,5)
D.dc3=w([O.lk,S.uZ,D.epM,D.epN,D.aNy],x.u)
D.hhf=new C.G1("Fireworks","Dice launch comets that burst in colour",D.cnC,D.dc3)
D.eRM=new B.cw(["beat",0.15,0.2,2])
D.eSi=new B.cw(["chance",0.4,0.2,0])
D.eRE=new B.cw(["ball",0.7,0.12,3])
D.eRr=new B.cw(["chance",0.4,0.5,1])
D.eSV=new B.cw(["ball",0.3,0.08,1])
D.eRk=new B.cw(["ripple",0.7,0.55,3])
D.cgD=w([D.eRM,D.eSi,D.eRE,D.eRr,D.eSV,D.eRk],x.e)
D.eqo=new B.z(2,5)
D.cDS=w([O.lk,S.uZ,M.a77,F.Ta,D.eqo],x.u)
D.hhd=new C.G1("Rain","Balls fall at random and splash",D.cgD,D.cDS)
D.eSj=new B.cw(["beat",0.12,0.45,2])
D.eSL=new B.cw(["toggle",0.38,0.2,0])
D.eSS=new B.cw(["wash",0.7,0.15,4])
D.eRG=new B.cw(["count3",0.38,0.45,0])
D.eSN=new B.cw(["burst",0.72,0.4,0])
D.eS9=new B.cw(["light",0.55,0.7,1])
D.eRs=new B.cw(["pop",0.8,0.8,4])
D.deK=w([D.eSj,D.eSL,D.eSS,D.eRG,D.eSN,D.eS9,D.eRs],x.e)
D.eqU=new B.z(3,6)
D.cjM=w([O.lk,S.uZ,M.a77,F.Ta,D.aNy,D.eqU],x.u)
D.hhb=new C.G1("Disco","A beat drives lights, washes and bursts",D.deK,D.cjM)
D.eSZ=new B.cw(["button",0.12,0.2,0])
D.eRm=new B.cw(["delay",0.34,0.2,1])
D.eSY=new B.cw(["light",0.56,0.2,1])
D.eSR=new B.cw(["delay",0.56,0.45,1])
D.eSk=new B.cw(["ball",0.34,0.6,0])
D.eRq=new B.cw(["delay",0.34,0.8,1])
D.eRf=new B.cw(["burst",0.7,0.8,5])
D.c3N=w([D.eSZ,D.eRm,D.eSY,D.eSR,D.eSk,D.eRq,D.eRf],x.e)
D.et3=new B.z(5,6)
D.dk9=w([O.lk,S.uZ,F.T9,F.Ta,D.aNC,D.et3],x.u)
D.hhc=new C.G1("Domino","Tap the button and watch it run down the line",D.c3N,D.dk9)
D.ayd=w([D.hhe,D.hhg,D.hhf,D.hhd,D.hhb,D.hhc],B.aw("O<G1>"))
D.da_=w([0.05,0.15,0.25],x.n)
D.daU=w([1.5,3,4.5,9,12],x.n)
D.eO6=new B.bj("dice","Dice",A.p2)
D.eP8=new B.bj("coin","Coin",L.yH)
D.eQP=new B.bj("num","Number",A.yP)
D.db5=w([D.eO6,D.eP8,D.eQP],x.c)
D.db9=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fQn=new C.Pm("Moon",1.62,0,4291941851)
D.fQo=new C.Pm("Mars",3.71,0.01,4294472049)
D.fQp=new C.Pm("Earth",9.81,1,4281908728)
D.fQr=new C.Pm("Jupiter",24.79,1.4,4294677052)
D.fQq=new C.Pm("Sun",274,2,4294688548)
D.zc=w([D.fQn,D.fQo,D.fQp,D.fQr,D.fQq],B.aw("O<Pm>"))
D.ayj=w([A.cs,A.aT,A.bm,A.aR,A.by,A.c8,A.cZ,A.iK],x.O)
D.dc9=w([A.c8,A.aR,A.dR,A.bm],x.O)
D.dd3=w([],x.h)
D.dd7=w([],x.B)
D.a3U=w([],x.m)
D.ei9=new C.ed("battery","Battery","\ud83d\udd0b",A.bm,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eif=new C.ed("solar","Solar panel","\u2600\ufe0f",A.bI,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eiU=new C.ed("crank","Hand crank","\ud83d\udd04",A.cZ,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eiw=new C.ed("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aR,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.ei1=new C.ed("buck","Step-down converter","\ud83d\udd3d",A.iK,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eiu=new C.ed("regulator","5 V regulator","\ud83e\uddca",A.bL,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eiZ=new C.ed("diode","Diode","\u27a1\ufe0f",A.aT,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eiG=new C.ed("ldr","Light sensor","\ud83c\udf1e",A.dR,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eik=new C.ed("switch","Switch","\ud83c\udf9a\ufe0f",A.by,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eiW=new C.ed("fuse","Fuse","\ud83e\uddef",A.cs,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.ehU=new C.ed("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.iK,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eiH=new C.ed("resistor","Resistor","\u3030\ufe0f",A.aT,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eiJ=new C.ed("bulb","Light bulb","\ud83d\udca1",A.dR,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eih=new C.ed("led","LED","\ud83d\udd34",A.aw,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eil=new C.ed("motor","Motor","\u2699\ufe0f",A.bL,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eiD=new C.ed("buzzer","Buzzer","\ud83d\udd14",A.c8,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.eia=new C.ed("heater","Heater","\ud83d\udd25",A.cZ,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eiy=new C.ed("capacitor","Capacitor","\ud83e\udeab",A.co,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eiq=new C.ed("radio","Radio","\ud83d\udcfb",A.o_,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.ein=new C.ed("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.bc,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.ei0=new C.ed("voltmeter","Voltmeter","\ud83e\udded",A.bu,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.ei7=new C.ed("ammeter","Ammeter","\ud83d\udcdf",A.aT,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.eid=new C.ed("fan","Fan","\ud83c\udf00",A.aR,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.ej0=new C.ed("speaker","Speaker","\ud83d\udd0a",A.c8,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eiQ=new C.ed("clock","Digital clock","\u23f0",A.bm,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eit=new C.ed("calculator","Calculator","\ud83e\uddee",A.Ld,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.ei6=new C.ed("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.co,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.ej_=new C.ed("router","WiFi router","\ud83d\udcf6",A.iK,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.ej2=new C.ed("siren","Siren","\ud83d\udea8",A.aw,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.ehX=new C.ed("toycar","Toy car","\ud83d\ude97",A.cZ,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.ej3=new C.ed("kettle","Kettle","\ud83e\uded6",A.mv,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.ei4=new C.ed("lamp","Desk lamp","\ud83e\ude94",A.dR,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eig=new C.ed("lights","Party lights","\ud83c\udf84",A.o_,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eir=new C.ed("fridge","Fridge","\ud83e\uddca",A.hn,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.ehZ=new C.ed("washer","Washing machine","\ud83e\udee7",A.co,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eiR=new C.ed("blender","Blender","\ud83e\udd64",A.cs,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eio=new C.ed("drone","Drone","\ud83d\ude81",A.bL,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.ei3=new C.ed("drill","Power drill","\ud83d\udd29",A.aT,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eis=new C.ed("torch","Torch","\ud83d\udd26",A.bM,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eiO=new C.ed("neon","Neon sign","\ud83e\udea7",A.c8,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.ei_=new C.ed("microwave","Microwave","\ud83c\udf72",A.cZ,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eiI=new C.ed("doorbell","Doorbell","\ud83d\udd14",A.bI,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.eic=new C.ed("camera","Security camera","\ud83d\udcf7",A.al,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eiC=new C.ed("console","Game console","\ud83c\udfae",A.by,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eiT=new C.ed("heartmon","Heart monitor","\ud83e\ude7a",A.ha,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.ehY=new C.ed("aquarium","Aquarium","\ud83d\udc20",A.bc,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eix=new C.ed("lighthouse","Lighthouse","\ud83d\uddfc",A.dR,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eiF=new C.ed("discoball","Disco ball","\ud83e\udea9",A.o_,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eiY=new C.ed("robot","Robot","\ud83e\udd16",A.aR,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.ehW=new C.ed("toaster","Toaster","\ud83c\udf5e",A.dV,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.ej1=new C.ed("ledstrip","LED strip","\ud83c\udf08",A.c8,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eiN=new C.ed("pump","Water pump","\ud83d\udeb0",A.aR,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eiz=new C.ed("hairdryer","Hair dryer","\ud83d\udca8",A.i8,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eiL=new C.ed("headphones","Headphones","\ud83c\udfa7",A.by,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.ei5=new C.ed("smartwatch","Apple Watch Ultra","\u231a",A.bu,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eiX=new C.ed("tablet","iPad Pro M5","\ud83d\udcf2",A.co,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.ehT=new C.ed("lgtv","LG OLED evo G5","\ud83d\udcfa",A.ha,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eip=new C.ed("sonytv","Sony Bravia 9","\ud83d\udcfa",A.br,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eii=new C.ed("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eiE=new C.ed("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.tv,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.ehV=new C.ed("iphonefold","iPhone Fold","\ud83d\udcf1",A.b5,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.ei8=new C.ed("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d0,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eiV=new C.ed("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cC,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eiA=new C.ed("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.be,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eiv=new C.ed("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.ca,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eiM=new C.ed("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aw,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eij=new C.ed("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bm,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eiB=new C.ed("honor","Honor Magic V5","\ud83d\udcf1",A.co,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eiK=new C.ed("vivo","vivo X300 Pro","\ud83d\udcf1",A.cZ,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eiP=new C.ed("ereader","Kindle Scribe","\ud83d\udcd6",A.br,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.ehS=new C.ed("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.c9,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eim=new C.ed("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cC,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.eie=new C.ed("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.bc,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.ei2=new C.ed("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dR,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.eib=new C.ed("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aw,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eiS=new C.ed("vision","Apple Vision Pro","\ud83e\udd7d",A.by,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.R0=w([D.ei9,D.eif,D.eiU,D.eiw,D.ei1,D.eiu,D.eiZ,D.eiG,D.eik,D.eiW,D.ehU,D.eiH,D.eiJ,D.eih,D.eil,D.eiD,D.eia,D.eiy,D.eiq,D.ein,D.ei0,D.ei7,D.eid,D.ej0,D.eiQ,D.eit,D.ei6,D.ej_,D.ej2,D.ehX,D.ej3,D.ei4,D.eig,D.eir,D.ehZ,D.eiR,D.eio,D.ei3,D.eis,D.eiO,D.ei_,D.eiI,D.eic,D.eiC,D.eiT,D.ehY,D.eix,D.eiF,D.eiY,D.ehW,D.ej1,D.eiN,D.eiz,D.eiL,D.ei5,D.eiX,D.ehT,D.eip,D.eii,D.eiE,D.ehV,D.ei8,D.eiV,D.eiA,D.eiv,D.eiM,D.eij,D.eiB,D.eiK,D.eiP,D.ehS,D.eim,D.eie,D.ei2,D.eib,D.eiS],B.aw("O<ed>"))
D.ddv=w([0,0.46,0.82],x.n)
D.ddH=w([5,10,15,25,45,60],x.t)
D.de2=w([-0.045,0.03,-0.015],x.n)
D.deq=w([0.9,0.97,1],x.n)
D.ayN=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.uA=w([0.05,0.2,0.35],x.n)
D.cVr=w([D.LR,D.LR],x.O)
D.d_I=w([A.Fp,A.M],x.O)
D.cZL=w([A.fu,A.hC],x.O)
D.cTr=w([A.f5,A.nZ],x.O)
D.cg7=w([A.lq,A.du],x.O)
D.ayO=w([D.cVr,D.d_I,D.cZL,D.cTr,D.cg7],x.Q)
D.fQb=new C.va("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fQc=new C.va("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fQ3=new C.va("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fQa=new C.va("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fQ8=new C.va("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fQ4=new C.va("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fQ9=new C.va("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fQ5=new C.va("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fQ7=new C.va("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fQ6=new C.va("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.CP=w([D.fQb,D.fQc,D.fQ3,D.fQa,D.fQ8,D.fQ4,D.fQ9,D.fQ5,D.fQ7,D.fQ6],B.aw("O<va>"))
D.bjf=new B.u(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.q)
D.bgJ=new B.u(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.q)
D.dfK=w([D.LR,D.bjf,D.bgJ,A.aew],x.O)
D.b43=new B.ac(0,A.G,A.ia,A.dz,6)
D.dgH=w([D.b43],x.V)
D.eoY=new B.z(0,"AND")
D.epO=new B.z(1,"Adder")
D.eqp=new B.z(2,"Blinker")
D.eqV=new B.z(3,"Memory")
D.dht=w([D.eoY,D.epO,D.eqp,D.eqV],x.I)
D.az0=w([-104,0,104],x.n)
D.az1=w([-14,3],x.n)
D.dii=w([-8,0,8],x.n)
D.az9=w([-92,0,92],x.n)
D.diH=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eVO=new C.uX("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eVV=new C.uX("Medium tank","Balanced.",0.35,1)
D.eVU=new C.uX("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Re=w([D.eVO,D.eVV,D.eVU],x._)
D.nv=w([0.04,0.2,0.36],x.n)
D.azk=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eQv=new B.bj(D.aXA,"Fold",L.anv)
D.ePG=new B.bj(D.aaP,"Flip",A.Gv)
D.bJ0=new B.a1(62889,"MaterialIcons",!1)
D.eQN=new B.bj(D.aXB,"Rise",D.bJ0)
D.anJ=new B.a1(983870,"MaterialIcons",!1)
D.eNC=new B.bj(D.aaQ,"Assemble",D.anJ)
D.eNL=new B.bj(D.aXC,"Spin",D.am2)
D.eNI=new B.bj(D.aXD,"Pop",A.l5)
D.dk6=w([D.eQv,D.ePG,D.eQN,D.eNC,D.eNL,D.eNI],B.aw("O<+(KA,n,a1)>"))
D.azp=w([A.c8,A.dR,A.bu,A.aR,A.by,A.cs],x.O)
D.dkw=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dlw=w([3,4.5,5,6,9],x.n)
D.b4C=new B.ac(0,A.G,A.aW,A.J,16)
D.dlY=w([D.b4C],x.V)
D.Rh=w([A.c8,A.bI,A.bm,A.aR,A.by,A.cs,A.c,A.cZ],x.O)
D.dmt=w(["solar","turbine","crank","pot"],x.s)
D.dmU=w([0,0.35,0.75,1],x.n)
D.eO_=new B.bj("drop","Drop",D.anl)
D.eO1=new B.bj("weight","Weight",T.anN)
D.eQH=new B.bj("cannon","Newton's cannon",A.amK)
D.dnE=w([D.eO_,D.eO1,D.eQH],x.c)
D.doc=w(["volts","level","ohms","on"],x.s)
D.dpB=w([A.jA,A.Cc,A.BZ,A.rp,A_.GU,A.up,A.yN,A.qh,A.hW,A.of,A.hq,A.e3,A.hV,A.ie,A.mI,A.m3,A.wg,A.rt,A.m4,A.Gm,A.wf,A.C4,A.C0,A.ang,A.NZ,A.Ca,A.O6,A.amW,G.anF,A.l5],x.w)
D.dqu=w([0.72,1],x.n)
D.dqH=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.eaU={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dsX=new B.bu(D.eaU,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],B.aw("bu<n,n>"))
D.e8O={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.h9I=new C.yf("Switch",F.ur,A.bI,0,"Tap it to turn it ON or OFF.")
D.h9E=new C.yf("Blinker",A.p5,A.bu,0,"Turns itself ON and OFF. Tap to change the speed.")
D.h9F=new C.yf("AND",D.anJ,A.co,2,"ON only when BOTH inputs are ON.")
D.bKs=new B.a1(63671,"MaterialIcons",!1)
D.h9D=new C.yf("OR",D.bKs,A.by,2,"ON when EITHER input is ON.")
D.h9G=new C.yf("XOR",H.a0L,A.c8,2,"ON when the inputs are DIFFERENT.")
D.h9A=new C.yf("NAND",A.ub,A.aR,2,"OFF only when BOTH inputs are ON.")
D.bJz=new B.a1(63176,"MaterialIcons",!1)
D.h9B=new C.yf("NOR",D.bJz,A.iK,2,"ON only when BOTH inputs are OFF.")
D.h9C=new C.yf("NOT",Z.Cd,A.cZ,1,"Flips the signal: ON becomes OFF.")
D.h9H=new C.yf("Light",A.ro,A.dR,1,"Glows when its input is ON.")
D.h9J=new C.yf("Buzzer",A.ut,A.cs,1,"Beeps while its input is ON.")
D.zq=new B.bu(D.e8O,[D.h9I,D.h9E,D.h9F,D.h9D,D.h9G,D.h9A,D.h9B,D.h9C,D.h9H,D.h9J],B.aw("bu<n,yf>"))
D.eaF={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eOr=new B.bj(3,20,1.9)
D.eNV=new B.bj(33,90,1.6)
D.eR7=new B.bj(52,15,3.2)
D.eR5=new B.bj(45,-100,1.8)
D.ePz=new B.bj(-15,-60,1.9)
D.eP2=new B.bj(-25,140,2.4)
D.eOU=new B.bj(-82,0,2.2)
D.aFb=new B.bu(D.eaF,[D.eOr,D.eNV,D.eR7,D.eR5,D.ePz,D.eP2,D.eOU],B.aw("bu<n,+(L,L,L)>"))
D.cTZ=w([A.A],x.M)
D.cUj=w([A.ay,A.aD],x.M)
D.d2j=w([A.ay,A.A,A.aD],x.M)
D.d3R=w([A.ay,A.ln,A.A,A.lR,A.aD],x.M)
D.dhp=w([A.ay,A.ln,A.a3,A.a8,A.lR,A.aD],x.M)
D.duj=new B.dv([1,D.cTZ,2,D.cUj,3,D.d2j,4,A.azQ,5,D.d3R,6,D.dhp],B.aw("dv<H,ai<df>>"))
D.eb4={Calm:0,Box:1,Sleep:2}
D.cBk=w([4,2,6,0],x.n)
D.cBr=w([4,4,4,4],x.n)
D.cBs=w([4,7,8,0],x.n)
D.RG=new B.bu(D.eb4,[D.cBk,D.cBr,D.cBs],B.aw("bu<n,ai<L>>"))
D.e8Z={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xa=new C.a0s(0,"source")
D.d3j=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hfS=new C.qc("Clock",A.p5,D.xa,A.bu,D.d3j)
D.hfO=new C.qc("Button",A.Cg,D.xa,A.aT,A.X)
D.dlI=w(["random","quick","slow"],x.s)
D.hfZ=new C.qc("Dice",A.p2,D.xa,A.c8,D.dlI)
D.bK7=new B.a1(63484,"MaterialIcons",!1)
D.Ef=new C.a0s(1,"logic")
D.dqp=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hfV=new C.qc("Delay",D.bK7,D.Ef,A.co,D.dqp)
D.ddO=w(["fast","mid","slow"],x.s)
D.hg_=new C.qc("Echo",A.ana,D.Ef,A.by,D.ddO)
D.hfX=new C.qc("Every 2nd",Z.Cd,D.Ef,A.iK,A.X)
D.bJN=new B.a1(63309,"MaterialIcons",!1)
D.hfU=new C.qc("Every 3rd",D.bJN,D.Ef,A.aR,A.X)
D.bLE=new B.a1(983902,"MaterialIcons",!1)
D.c3a=w(["50%","25%","75%"],x.s)
D.hg1=new C.qc("Chance",D.bLE,D.Ef,A.cZ,D.c3a)
D.qM=new C.a0s(2,"out")
D.hfQ=new C.qc("Light",A.ro,D.qM,A.dR,A.X)
D.hfR=new C.qc("Burst",A.l5,D.qM,A.c8,A.X)
D.hfP=new C.qc("Ripple",A.yS,D.qM,A.bc,A.X)
D.hfY=new C.qc("Ball",A.ann,D.qM,A.cZ,A.X)
D.hfW=new C.qc("Comet",A.of,D.qM,A.by,A.X)
D.bLp=new B.a1(983669,"MaterialIcons",!1)
D.hg0=new C.qc("Shake",D.bLp,D.qM,A.cs,A.X)
D.hg2=new C.qc("Pop",A.Gn,D.qM,A.bm,A.X)
D.hfT=new C.qc("Wash",A.Oa,D.qM,A.pK,A.X)
D.mP=new B.bu(D.e8Z,[D.hfS,D.hfO,D.hfZ,D.hfV,D.hg_,D.hfX,D.hfU,D.hg1,D.hfQ,D.hfR,D.hfP,D.hfY,D.hfW,D.hg0,D.hg2,D.hfT],B.aw("bu<n,qc>"))
D.e9a={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.zS=new C.Jy(0,"tv")
D.eXl=new C.mg("Samsung Neo QLED 8K",D.zS,F.F4,A.aR)
D.eXc=new C.mg("LG OLED evo G5",D.zS,A.eg,A.ha)
D.eX3=new C.mg("Sony Bravia 9",D.zS,A.qX,A.br)
D.eX7=new C.mg("Apple TV 4K",D.zS,A.e2,A.bO)
D.eX4=new C.mg("Bang and Olufsen Beovision",D.zS,F.EK,F.tv)
D.J0=new C.Jy(1,"iphone")
D.aOk=new C.mg("iPhone 18 Pro Max",D.J0,D.ahl,A.c9)
D.wH=new C.Jy(3,"fold")
D.bpF=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.eXh=new C.mg("iPhone Fold",D.wH,D.bpF,A.b5)
D.v1=new C.Jy(2,"android")
D.eXi=new C.mg("Samsung Galaxy S26 Ultra",D.v1,F.adj,A.d0)
D.biK=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.eXa=new C.mg("Samsung Galaxy Z Fold7",D.wH,D.biK,A.cC)
D.eX6=new C.mg("Google Pixel 10 Pro XL",D.v1,A.dv,A.be)
D.eXe=new C.mg("Xiaomi 16 Ultra",D.v1,A.j8,A.ca)
D.eX9=new C.mg("Huawei Mate 80 Pro Max",D.v1,A.el,A.aw)
D.eX5=new C.mg("OPPO Find X9 Ultra",D.v1,A.dY,A.bm)
D.eXn=new C.mg("Honor Magic V5",D.wH,A.d8,A.co)
D.eXb=new C.mg("vivo X300 Pro",D.v1,A.hC,A.cZ)
D.Ti=new C.Jy(4,"tablet")
D.eXg=new C.mg("iPad Pro M5",D.Ti,A.dv,A.aR)
D.a7s=new C.Jy(5,"reader")
D.eXo=new C.mg("Kindle Scribe",D.a7s,A.e5,A.br)
D.zT=new C.Jy(6,"computer")
D.eXf=new C.mg("MacBook Pro M5 Max",D.zT,A.dv,A.c9)
D.eXk=new C.mg("iMac 32 inch",D.zT,A.bO,A.cC)
D.eXd=new C.mg("Pro Display XDR 8K",D.zT,A.j8,A.bc)
D.eX8=new C.mg("Sony Laser Projector",D.zT,A.cp,A.dR)
D.eXj=new C.mg("Luxury car touchscreen",D.zT,I.n9,A.aw)
D.eXm=new C.mg("Apple Vision Pro",D.zT,A.he,A.by)
D.ma=new B.bu(D.e9a,[D.eXl,D.eXc,D.eX3,D.eX7,D.eX4,D.aOk,D.eXh,D.eXi,D.eXa,D.eX6,D.eXe,D.eX9,D.eX5,D.eXn,D.eXb,D.eXg,D.eXo,D.eXf,D.eXk,D.eXd,D.eX8,D.eXj,D.eXm],B.aw("bu<n,mg>"))
D.e9i={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bso=new C.fN(20,4,13,!1)
D.bsP=new C.fN(14,5,13.5,!1)
D.bsG=new C.fN(9,2.4,10,!1)
D.bsU=new C.fN(7,5,12.5,!1)
D.bsJ=new C.fN(8,3.5,12,!1)
D.bsk=new C.fN(15,2,6,!1)
D.bsS=new C.fN(45,6,13.5,!0)
D.bsA=new C.fN(10,8,13.5,!1)
D.bss=new C.fN(25,3,12,!0)
D.bsy=new C.fN(35,4,12,!0)
D.bsz=new C.fN(40,4.5,9.5,!0)
D.bsB=new C.fN(55,3,9,!0)
D.bsl=new C.fN(18,3,9,!1)
D.bsR=new C.fN(22,4,13.5,!1)
D.bsK=new C.fN(16,5,13.5,!1)
D.bsw=new C.fN(30,4,9,!0)
D.bt2=new C.fN(5,3.5,13,!1)
D.bsE=new C.fN(25,3,13.5,!0)
D.bsN=new C.fN(14,2.5,9,!1)
D.bsD=new C.fN(6,6,13,!1)
D.bsV=new C.fN(30,1.2,5,!0)
D.bt1=new C.fN(35,3,4.5,!0)
D.bsY=new C.fN(20,4.5,7.5,!0)
D.bsC=new C.fN(55,5.5,13.5,!0)
D.bsj=new C.fN(45,5.5,13.5,!0)
D.bsO=new C.fN(40,5.5,13.5,!0)
D.bt0=new C.fN(60,6,13.5,!0)
D.ahO=new C.fN(28,4,7,!0)
D.FC=new C.fN(25,4,7,!0)
D.bsv=new C.fN(30,4,7,!0)
D.bsq=new C.fN(22,4,7,!0)
D.bsr=new C.fN(24,4,7,!0)
D.bsF=new C.fN(60,3,5.5,!0)
D.bsm=new C.fN(18,9,14,!0)
D.bst=new C.fN(25,9,14,!0)
D.ahP=new C.fN(30,8,14,!0)
D.bsp=new C.fN(20,8,14,!0)
D.bsx=new C.fN(30,9,14,!0)
D.bsW=new C.fN(22,5,9.5,!0)
D.bsn=new C.fN(30,2.5,10.5,!0)
D.bsL=new C.fN(50,5.5,13.5,!0)
D.bt_=new C.fN(12,2,9.5,!1)
D.bsI=new C.fN(16,1.3,9.5,!0)
D.bsT=new C.fN(40,2.5,7,!0)
D.bsZ=new C.fN(60,1.2,4.8,!0)
D.bsX=new C.fN(18,5,13.5,!0)
D.bsQ=new C.fN(8,2,9.5,!1)
D.bsH=new C.fN(12,2.5,8,!1)
D.bsu=new C.fN(20,3.5,13.5,!0)
D.bsM=new C.fN(3.5,3,13,!1)
D.zr=new B.bu(D.e9i,[D.bso,D.bsP,D.bsG,D.bsU,D.bsJ,D.bsk,D.bsS,D.bsA,D.bss,D.bsy,D.bsz,D.bsB,D.bsl,D.bsR,D.bsK,D.bsw,D.bt2,D.bsE,D.bsN,D.bsD,D.bsV,D.bt1,D.bsY,D.bsC,D.bsj,D.bsO,D.bt0,D.ahO,D.FC,D.bsv,D.FC,D.bsq,D.FC,D.bsr,D.ahO,D.FC,D.bsF,D.bsm,D.bst,D.ahP,D.bsp,D.bsx,D.bsW,D.bsn,D.bsL,D.bt_,D.bsI,D.bsT,D.bsZ,D.FC,D.ahP,D.bsX,D.bsQ,D.bsH,D.bsu,D.bsM],B.aw("bu<n,fN>"))
D.e8Y={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eN8=new B.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.et0=new B.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.esW=new B.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eEY=new B.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eFS=new B.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eEU=new B.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.er2=new B.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eCW=new B.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eNg=new B.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eGc=new B.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.ewh=new B.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eqI=new B.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.evi=new B.z("Movement","They pull your legs together and help you balance.")
D.exb=new B.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.et9=new B.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eKK=new B.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eLO=new B.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eCE=new B.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eLx=new B.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eBj=new B.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eGl=new B.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eqP=new B.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.exy=new B.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eG0=new B.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eBE=new B.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eLF=new B.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eEp=new B.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.er0=new B.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eGU=new B.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eKn=new B.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eIC=new B.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.ep8=new B.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eE8=new B.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eEc=new B.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eyg=new B.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.etn=new B.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.ex0=new B.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eD5=new B.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eJo=new B.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eNd=new B.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eGi=new B.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eoS=new B.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eDg=new B.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.epH=new B.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eJD=new B.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eKG=new B.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eDG=new B.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eJQ=new B.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eqR=new B.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eLc=new B.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.euH=new B.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eJ2=new B.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.exW=new B.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eBz=new B.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eGC=new B.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eLm=new B.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eLe=new B.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eLi=new B.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eC4=new B.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eHq=new B.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eIz=new B.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eL1=new B.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eDF=new B.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.ezW=new B.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eyH=new B.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eE3=new B.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eGv=new B.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eAr=new B.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eB7=new B.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.ev2=new B.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eKC=new B.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.evR=new B.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.epE=new B.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eyf=new B.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.epz=new B.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.etO=new B.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eyk=new B.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.ew0=new B.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eGQ=new B.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.exe=new B.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eMW=new B.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eyR=new B.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eBY=new B.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eEx=new B.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.ew9=new B.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.evT=new B.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dvo=new B.bu(D.e8Y,[D.eN8,D.et0,D.esW,D.eEY,D.eFS,D.eEU,D.er2,D.eCW,D.eNg,D.eGc,D.ewh,D.eqI,D.evi,D.exb,D.et9,D.eKK,D.eLO,D.eCE,D.eLx,D.eBj,D.eGl,D.eqP,D.exy,D.eG0,D.eBE,D.eLF,D.eEp,D.er0,D.eGU,D.eKn,D.eIC,D.ep8,D.eE8,D.eEc,D.eyg,D.etn,D.ex0,D.eD5,D.eJo,D.eNd,D.eGi,D.eoS,D.eDg,D.epH,D.eJD,D.eKG,D.eDG,D.eJQ,D.eqR,D.eLc,D.euH,D.eJ2,D.exW,D.eBz,D.eGC,D.eLm,D.eLe,D.eLi,D.eC4,D.eHq,D.eIz,D.eL1,D.eDF,D.ezW,D.eyH,D.eE3,D.eGv,D.eAr,D.eB7,D.ev2,D.eKC,D.evR,D.epE,D.eyf,D.epz,D.etO,D.eyk,D.ew0,D.eGQ,D.exe,D.eMW,D.eyR,D.eBY,D.eEx,D.ew9,D.evT],B.aw("bu<n,+(n,n)>"))
D.dvq=new B.hC(A.G,11)
D.dvv=new B.hC(A.G,30)
D.dCo=new C.Uz(null)
D.dCp=new C.UA(null)
D.dCC=new C.UB(null)
D.dED=new C.UF(null)
D.dFr=new C.Vf(null)
D.dFt=new C.Vg(null)
D.dG0=new C.Vo(null)
D.dHW=new C.Vs(null)
D.dHX=new C.Vu(null)
D.dHZ=new C.Vv(null)
D.dJE=new C.VX(null)
D.dKj=new C.VY(null)
D.dOu=new C.W2(null)
D.e3n=new C.W3(null)
D.e3p=new C.W4(null)
D.e3q=new C.W7(null)
D.e3r=new C.W8(null)
D.e5k=new C.Wg(null)
D.e5l=new C.Wh(null)
D.e5B=new C.Wr(null)
D.e5C=new C.Ws(null)
D.e5D=new C.a8p(null)
D.e6d=new C.Wu(null)
D.e7G=new C.Wy(null)
D.ebg=new B.t(0,118)
D.aHT=new B.t(0,13)
D.ebh=new B.t(0,17)
D.ebk=new B.t(0,330)
D.ebq=new B.t(0,-13)
D.ebr=new B.t(0,-17)
D.ebs=new B.t(0,-18)
D.ebt=new B.t(0,-19)
D.ebw=new B.t(0,-28)
D.ebx=new B.t(0,-31)
D.eby=new B.t(0,-32)
D.ebz=new B.t(0,-6771)
D.ebB=new B.t(-9.5,-11)
D.ebD=new B.t(10,20)
D.ebG=new B.t(10,-13)
D.ebH=new B.t(10,-22)
D.ebI=new B.t(10,-4)
D.a6j=new B.t(11,8)
D.ebQ=new B.t(12,2)
D.ebR=new B.t(14,0)
D.ebS=new B.t(14,12)
D.aI4=new B.t(14,8)
D.ebT=new B.t(14,-17)
D.aI6=new B.t(14,-3)
D.aI7=new B.t(14,-4)
D.ebV=new B.t(15,0)
D.ebW=new B.t(15,-12)
D.ebZ=new B.t(16,-8)
D.ec_=new B.t(18,14)
D.ec0=new B.t(18,-12)
D.aIc=new B.t(20,0)
D.ec8=new B.t(20,15)
D.ec9=new B.t(20,-17)
D.eca=new B.t(20,-3)
D.ecb=new B.t(21,8)
D.ece=new B.t(22,10)
D.aIf=new B.t(22,8)
D.ecf=new B.t(24,0)
D.ecg=new B.t(24,2)
D.eci=new B.t(24,-18)
D.ecj=new B.t(24,-22)
D.ecl=new B.t(25,8)
D.ecm=new B.t(26,0)
D.ecs=new B.t(28,-30)
D.ecy=new B.t(30,18)
D.ecz=new B.t(30,2)
D.ecC=new B.t(31,19)
D.ecE=new B.t(32,0)
D.aIi=new B.t(34,0)
D.aIj=new B.t(34,-32)
D.IB=new B.t(36,0)
D.ecN=new B.t(3,-1)
D.ecQ=new B.t(40,3)
D.ed2=new B.t(4,11)
D.ed5=new B.t(4,-2)
D.eda=new B.t(5,0)
D.edb=new B.t(5,17)
D.edc=new B.t(5,6)
D.edg=new B.t(6,11)
D.edm=new B.t(8,7)
D.edn=new B.t(8,-10)
D.edo=new B.t(8,-14)
D.aIo=new B.t(9,0)
D.edx=new B.t(-20.5,-17.6)
D.edy=new B.t(-9,18.5)
D.edB=new B.t(-2.6,-1)
D.edC=new B.t(1.9,-0.8)
D.edF=new B.t(-0.22,0.09)
D.edK=new B.t(2.6,1)
D.edR=new B.t(-9,12.2)
D.eea=new B.t(-9,20.5)
D.eew=new B.t(-10,0)
D.eex=new B.t(-10,12)
D.aIv=new B.t(-10,4)
D.eeD=new B.t(-11,-2)
D.eeH=new B.t(-13,-5)
D.eeI=new B.t(-14,0)
D.eeJ=new B.t(-14,13)
D.eeK=new B.t(-14,2)
D.eeL=new B.t(-14,-12)
D.eeM=new B.t(-14,-19)
D.eeO=new B.t(-14,-23)
D.eeP=new B.t(-15,6)
D.eeS=new B.t(-16,14)
D.eeU=new B.t(-16,-8)
D.eeV=new B.t(-17,10)
D.eeW=new B.t(-17,-18)
D.eeX=new B.t(-17,-8)
D.eeZ=new B.t(-18,20)
D.ef_=new B.t(-18,-9)
D.aIx=new B.t(-20,0)
D.ef1=new B.t(-20,16)
D.ef2=new B.t(-20,-9)
D.SE=new B.t(-22,8)
D.ef3=new B.t(-22,-10)
D.ef4=new B.t(-22,-11)
D.ef5=new B.t(-24,10)
D.ef6=new B.t(-24,11)
D.ef7=new B.t(-24,14)
D.ef8=new B.t(-24,-22)
D.efa=new B.t(-25,-11)
D.efb=new B.t(-26,0)
D.efc=new B.t(-26,-18)
D.efd=new B.t(-2,9)
D.efe=new B.t(-2,-10)
D.eff=new B.t(-2,-20)
D.efg=new B.t(-2,-9)
D.efh=new B.t(-32,0)
D.aIz=new B.t(-34,0)
D.efm=new B.t(-40,3)
D.efo=new B.t(-4,11)
D.efp=new B.t(-4,-17)
D.efq=new B.t(-4,-2)
D.efu=new B.t(-5,0)
D.efv=new B.t(-5,20)
D.efw=new B.t(-5,6)
D.efx=new B.t(-6,26)
D.efy=new B.t(-6,6)
D.efz=new B.t(-6,-42)
D.efA=new B.t(-7,-19)
D.efB=new B.t(-7,-24)
D.efE=new B.t(-8,-9)
D.a6q=new B.t(-9,0)
D.efF=new B.t(-9,1)
D.efH=new B.t(-9,-23)
D.fsD=new B.y("Thinking\u2026",null,A.hj,null,null,null,null,null,null,null,null,null)
D.egI=new B.D(A.jN,D.fsD,null)
D.fJ4=new B.y("Start from a ready-made board",null,A.fY,null,null,null,null,null,null,null,null,null)
D.egU=new B.D(A4.vT,D.fJ4,null)
D.bAi=new B.Q(4,0,4,14)
D.fnV=new B.F(!0,A.aB,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftA=new B.y("Games and little helpers for a spare minute.",null,D.fnV,null,null,null,null,null,null,null,null,null)
D.eh4=new B.D(D.bAi,D.ftA,null)
D.fFN=new B.y("Tap to throw in a star",null,A.kP,null,null,null,null,null,null,null,null,null)
D.b7P=new B.ci(A.A,null,null,D.fFN,null)
D.en_=new B.cN(0,null,0,14,null,null,D.b7P,null)
D.deo=w([A.ip,A.bl],x.O)
D.aNr=new B.c0(A.A,0.5,A.x,null,0,D.deo,null,null)
D.enI=new B.c0(A.A,0.5,A.x,null,0,D.azD,null,null)
D.d5D=w([A.c,A.bL],x.O)
D.enK=new B.c0(A.A,0.5,A.x,null,0,D.d5D,null,null)
D.dmH=w([A.bO,A.he],x.O)
D.aNs=new B.c0(A.A,0.5,A.x,null,0,D.dmH,null,null)
D.cLd=w([A.c,A.bO],x.O)
D.enO=new B.c0(A.tf,0.5,A.x,null,0,D.cLd,null,null)
D.bfO=new B.u(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.q)
D.blH=new B.u(1,0.027450980392156862,0.10196078431372549,0.2,A.q)
D.d4F=w([D.bfO,D.agU,D.blH],x.O)
D.dcm=w([0,0.7,1],x.n)
D.enQ=new B.c0(A.tf,0.5,A.x,null,0,D.d4F,D.dcm,null)
D.cBz=w([A.oU,A.aE,A.K],x.O)
D.djo=w([0.3,0.7,1],x.n)
D.enS=new B.c0(A.A,0.5,A.x,null,0,D.cBz,D.djo,null)
D.bpJ=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dkO=w([A.fe,D.bpJ],x.O)
D.enU=new B.c0(A.tf,0.5,A.x,null,0,D.dkO,null,null)
D.cEo=w([A.dv,A.cp],x.O)
D.enV=new B.c0(A.A,0.5,A.x,null,0,D.cEo,null,null)
D.d_T=w([A.oU,A.aE,A.fu],x.O)
D.enW=new B.c0(A.A,0.5,A.x,null,0,D.d_T,null,null)
D.cSZ=w([A.h0,A.aT,A.d9],x.O)
D.enY=new B.c0(A.tf,0.5,A.x,null,0,D.cSZ,null,null)
D.df0=w([A.he,I.n9],x.O)
D.enZ=new B.c0(A.tf,0.5,A.x,null,0,D.df0,null,null)
D.bg3=new B.u(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.q)
D.bdO=new B.u(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.q)
D.d2b=w([D.bg3,D.bdO],x.O)
D.eo0=new B.c0(A.A,0.5,A.x,null,0,D.d2b,null,null)
D.bl4=new B.u(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.q)
D.biR=new B.u(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.q)
D.biW=new B.u(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.q)
D.dp8=w([D.bl4,D.biR,D.biW],x.O)
D.eo1=new B.c0(M.ab_,0.5,A.x,null,0,D.dp8,G.axa,null)
D.eo2=new B.c0(A.A,0.5,A.x,null,0,D.aw_,null,null)
D.dnz=w([A.he,A.hO],x.O)
D.eo9=new B.c0(A.A,0.5,A.x,null,0,D.dnz,null,null)
D.aNw=new B.aQ(9,9)
D.eoi=new B.aQ(1.4,1.4)
D.eO3=new B.bj("Moon",1.62,4291941851)
D.eOD=new B.bj("Neptune",11.15,4284524026)
D.ePh=new B.bj("Sun",274,4294688548)
D.ePw=new B.bj("Mercury",3.7,4288455599)
D.ePB=new B.bj("Earth",9.81,4281908728)
D.ePD=new B.bj("Mars",3.71,4294472049)
D.ePW=new B.bj("Venus",8.87,4294759245)
D.eQ2=new B.bj("Saturn",10.44,4294829706)
D.eQo=new B.bj("Jupiter",24.79,4294677052)
D.eU0=new B.a5(10,-8,18,-2)
D.eU1=new B.a5(14,-14,20,14)
D.eU3=new B.a5(20,-2,30,2)
D.eU7=new B.a5(4,-13,30,-3)
D.eUc=new B.a5(8,-7,12,7)
D.eUm=new B.a5(-12,12,12,19)
D.eUn=new B.a5(-12,14,12,22)
D.eUo=new B.a5(-12,-22,12,8)
D.eUp=new B.a5(-12,-25,12,19)
D.eUq=new B.a5(-12,-26,12,-6)
D.eUr=new B.a5(-12,-4,12,14)
D.eUt=new B.a5(-14,20,14,24)
D.eUu=new B.a5(-14,6,14,10)
D.eUv=new B.a5(-14,-17,14,15)
D.eUw=new B.a5(-14,-26,14,18)
D.eUx=new B.a5(-14,-4,14,20)
D.eUz=new B.a5(-15,-29,15,25)
D.eUA=new B.a5(-16,-16,16,16)
D.eUD=new B.a5(-16,-22,-9,18)
D.eUE=new B.a5(-16,-24,16,-10)
D.eUG=new B.a5(-16,-2,16,20)
D.eUI=new B.a5(-18,20,18,24)
D.eUJ=new B.a5(-18,-18,18,20)
D.eUK=new B.a5(-20,12,20,22)
D.eUL=new B.a5(-20,-28,20,26)
D.eUM=new B.a5(-22,14,22,18)
D.aO1=new B.a5(-22,-26,22,24)
D.eUN=new B.a5(-22,-3,22,3)
D.eUO=new B.a5(-22,-4,22,12)
D.eUQ=new B.a5(-24,-12,10,22)
D.eUR=new B.a5(-24,-14,22,8)
D.eUS=new B.a5(-24,-6,24,20)
D.aO2=new B.a5(-24,-9,24,9)
D.eUT=new B.a5(-25,14,25,19)
D.eUU=new B.a5(-26,-14,14,8)
D.eUV=new B.a5(-26,-4,26,20)
D.eUW=new B.a5(-26,-6,4,6)
D.aO3=new B.a5(-28,-13,28,13)
D.eUX=new B.a5(-28,-16,28,16)
D.eUY=new B.a5(-28,-16,28,8)
D.eUZ=new B.a5(-28,-22,28,22)
D.eV_=new B.a5(-30,-12,30,14)
D.eV0=new B.a5(-30,-14,0,14)
D.eV1=new B.a5(-30,-18,30,20)
D.eV2=new B.a5(-30,-28,30,14)
D.eV3=new B.a5(-30,-2,30,18)
D.eV4=new B.a5(-30,-4,30,18)
D.eV5=new B.a5(-32,-17,32,17)
D.eV6=new B.a5(-32,-28,32,18)
D.eV7=new B.a5(-33,-21,33,17)
D.eV8=new B.a5(-34,14,34,26)
D.a7j=new B.a5(-34,-18,34,18)
D.eV9=new B.a5(-34,-4,34,7)
D.eVa=new B.a5(-36,-24,36,20)
D.eVb=new B.a5(-38,-22,38,22)
D.eVd=new B.a5(-3,12,3,22)
D.eVe=new B.a5(-3,5,3,15)
D.eVi=new B.a5(-46,-34,46,28)
D.eVk=new B.a5(-48,-3,48,3)
D.eVn=new B.a5(-6,18,24,24)
D.eVo=new B.a5(-6,5,6,12)
D.eVp=new B.a5(-6,-22,6,-15)
D.eVs=new B.a5(-9,-16,9,22)
D.eVt=new B.a5(-4.5,-24,4.5,-21.2)
D.eVv=new B.a5(14,-9,17.5,9)
D.eav={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aOZ=new B.dD(D.eav,5,x.R)
D.ea2={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eYD=new B.dD(D.ea2,10,x.R)
D.f_R=new B.au(24,44)
D.f0e=new B.au(54,38)
D.f0l=new B.au(66,38)
D.b9c=new B.fi(2,null,null,null,null,A.by,null,null,null,null)
D.f1l=new B.a7(16,16,D.b9c,null)
D.aPY=new B.hQ(3,12,12,0.82,null)
D.fKN=new B.y("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aQ8=new B.b2(D.fKN,null,null,null,null,null,null,null,null,null,null,null,null,A.V,!1,null,null,null,A.t,null)
D.df3=w([A.cs,A.bI,A.bm,A.aR,A.pK,A.cs],x.O)
D.f7j=new B.fX(A.A,0,6.283185307179586,A.x,D.df3,null,null)
D.fgG=new B.F(!0,A.aT,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.QK,null,null,null)
D.f8y=new B.eH("You are here (Sun)",null,null,A.cY,null,null,null,null,null,null,D.fgG)
D.aSC=new B.F(!0,A.aB,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8z=new B.eH("What we see",null,null,A.cY,null,null,null,null,null,null,D.aSC)
D.fdW=new B.F(!0,R.AR,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8D=new B.eH("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cY,null,null,null,null,null,null,D.fdW)
D.fiV=new B.F(!0,A.ku,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8J=new B.eH("AI",null,null,A.cY,null,null,null,null,null,null,D.fiV)
D.aQX=new B.F(!0,A.bU,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8Z=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9v=new B.F(!0,A.bk,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9P=new B.F(!0,A.co,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fal=new B.F(!0,A.bU,null,null,null,null,11,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faq=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faH=new B.F(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbc=new B.F(!0,A.aQ,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbD=new B.F(!0,A.bU,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbP=new B.F(!0,A.ae,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZf=new B.cS(A.ia,A.dz,6)
D.d8t=w([D.eZf],x.q)
D.fc8=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d8t,null,null,null)
D.fcd=new B.F(!0,A.eo,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fch=new B.F(!0,A.bU,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcV=new B.F(!0,A.bU,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd2=new B.F(!0,A.aB,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd3=new B.F(!0,A.bU,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe_=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fev=new B.F(!0,A.aB,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff1=new B.F(!0,A.aT,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZi=new B.cS(A.aW,A.J,3)
D.azS=w([D.eZi],x.q)
D.ff4=new B.F(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.azS,null,null,null)
D.ff9=new B.F(!0,A.c,null,null,null,null,12.5,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffT=new B.F(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.QK,null,null,null)
D.fgt=new B.F(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgV=new B.F(!0,A.tF,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhv=new B.F(!0,A.bM,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhA=new B.F(!0,A.bU,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhF=new B.F(!0,A.aB,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fir=new B.F(!0,A.nc,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiG=new B.F(!0,A.ae,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aS3=new B.F(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ5=new B.cS(A.w,A.J,5)
D.cXe=w([D.eZ5],x.q)
D.fjf=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cXe,null,null,null)
D.fjk=new B.F(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.azS,null,null,null)
D.fjH=new B.F(!0,A.h1,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjZ=new B.F(!0,A.bU,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkt=new B.F(!0,A.bm,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl4=new B.F(!0,A.bU,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flK=new B.F(!0,A.aB,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flT=new B.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmn=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmE=new B.F(!0,A.aT,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmY=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn0=new B.F(!0,A.aT,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnL=new B.F(!0,A.aQ,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnY=new B.F(!0,A.c,null,null,null,null,13,A.a7,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foa=new B.F(!0,A.tF,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fow=new B.F(!0,A.bm,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fck=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foV=new B.y("\u26a0\ufe0f ",null,D.fck,null,null,null,null,null,null,null,null,null)
D.fp7=new B.y("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.vd,null,null,null,null,null,null,null,null,null)
D.fqI=new B.y("Pick one, then change it and see what happens.",null,A.vd,null,null,null,null,null,null,null,null,null)
D.fqN=new B.y("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.fds=new B.F(!0,A.ae,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frH=new B.y("What do you want to invent? Type it below, or tap an idea.",null,D.fds,null,null,null,null,null,null,null,null,null)
D.ftb=new B.y("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.ftN=new B.y("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.fO,null,null,null,null,null,null,null,null,null)
D.ftS=new B.y("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fup=new B.y("Make it yours",null,A.k1,null,null,null,null,null,null,null,null,null)
D.fuI=new B.y("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a8D,null,null,null,null,null,null,null,null,null)
D.fhQ=new B.F(!0,A.jK,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx7=new B.y("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.fhQ,null,null,null,null,null,null,null,null,null)
D.fxw=new B.y("5G",null,T.aRr,null,null,null,null,null,null,null,null,null)
D.fke=new B.F(!0,A.bU,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyG=new B.y("WHAT HAPPENS",null,D.fke,null,null,null,null,null,null,null,null,null)
D.fAq=new B.y("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fB5=new B.y("Change the words and pictures on the three slabs.",null,A.vd,null,null,null,null,null,null,null,null,null)
D.fBg=new B.y("All the parts and wires will be removed.",null,A.h9,null,null,null,null,null,null,null,null,null)
D.fBA=new B.y("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fC9=new B.y("Tap the crank on the board again and again to spin it faster.",null,A.hj,null,null,null,null,null,null,null,null,null)
D.fDm=new B.y("\ud83c\udfaf Challenges",null,A.de,null,null,null,null,null,null,null,null,null)
D.fDT=new B.y("Remove this part",null,Y.aR1,null,null,null,null,null,null,null,null,null)
D.fEb=new B.y("Clear the board?",null,A.df,null,null,null,null,null,null,null,null,null)
D.fjI=new B.F(!0,A.bu,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEr=new B.y("How the Lab works",null,D.fjI,null,null,null,null,null,null,null,null,null)
D.faU=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEM=new B.y("Electronics Lab",null,D.faU,null,null,null,null,A.a2,null,1,null,null)
D.fEQ=new B.y("?",null,M.aSx,null,null,null,null,null,null,null,null,null)
D.fhL=new B.F(!0,A.aR,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEV=new B.y("Planet Earth",null,D.fhL,null,null,null,null,null,null,null,null,null)
D.fG8=new B.y("Ready-made circuits",null,A.de,null,null,null,null,null,null,null,null,null)
D.fGM=new B.y("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hj,null,null,null,null,null,null,null,null,null)
D.fH4=new B.y("UNIVERSE EXPLORER",null,K.a8B,null,null,null,null,null,null,null,null,null)
D.fmH=new B.F(!0,A.aT,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKc=new B.y("\u26a0 There is no air here, so a parachute will not work.",null,D.fmH,null,null,null,null,null,null,null,null,null)
D.fLo=new B.y("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,Y.aR0,null,null,null,null,null,null,null,null,null)
D.fLT=new B.y("NGMY",null,A.vb,null,null,null,null,null,null,null,null,null)
D.fM6=new B.y("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.Up,null,null,null,null,null,null,null,null,null)
D.fMt=new B.y("Tap it to change its setting. Drag from the right dot to connect.",null,A.lM,null,null,null,null,null,null,null,null,null)
D.fNv=new B.y("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.vd,null,null,null,null,null,null,null,null,null)
D.fNx=new B.y("TOOLBOX",null,K.a8B,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hhx=null
$.hhw=null
$.hnF=0
$.hPP=B.T(x.N,x.k)
$.hQp=B.T(x.N,x.k)
$.hgT=null
$.hQa=B.T(x.N,x.k)
$.hRd=B.T(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"im2","bEb",()=>{var v="led"
return B.a([C.ayw("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fhN(),v),C.ayw("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fhO(),v),C.ayw("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fhP(),v),C.ayw("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fhW(),v),C.ayw("Not both","Make the light go OFF only when both switches are ON.",2,new C.fhX(),v),C.ayw("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fhY(),"buzzer")],B.aw("O<bb6>"))})
w($,"imu","bEc",()=>B.a([C.Qq("UNIVERSE","Earth, space and gravity",A.Ot,A.aR,new C.fid()),C.Qq("ELECTRONICS LAB","Batteries, wires, real circuits",Ac.C1,A.aR,new C.fie()),C.Qq("DISCOVERY LAB","Body Explorer: a real 3D human",D.bJ1,A.bm,new C.fif()),C.Qq("TOOLBOX","Converter, clock, games",G.ame,A.cZ,new C.fig()),C.Qq("REACTION LAB","Wire parts together",A.Cn,A.bu,new C.fih()),C.Qq("SPARK PAINTER","Paint with light",A.a0F,A.c8,new C.fii()),C.Qq("ROCKET LANDER","Land softly on the pad",A.of,A.aR,new C.fij()),C.Qq("TITLE ANIMATOR","Make a moving title",A.yQ,A.bI,new C.fik()),C.Qq("CIRCUIT LAB","Connect logic, learn it",A.a16,A.co,new C.fil())],B.aw("O<bsQ>")))
w($,"io1","qo",()=>{var v,u,t=B.T(x.N,x.E)
for(v=0;v<76;++v){u=D.R0[v]
t.n(0,u.a,u)}return t})
w($,"im3","ahZ",()=>B.a([C.FN("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fhZ()),C.FN("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fi_()),C.FN("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fi0()),C.FN("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fi1()),C.FN("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fi2()),C.FN("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fhQ()),C.FN("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fhR()),C.FN("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fhS()),C.FN("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fhT()),C.FN("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fhU()),C.FN("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fhV())],B.aw("O<bb7>")))
w($,"imw","hwc",()=>B.a([C.a0Z("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aT,A.ca,new C.fit()),C.a0Z("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cs,A.bx,new C.fiu()),C.a0Z("Breathe","Calm down in a minute","\ud83e\udee7",A.iK,A.cC,new C.fiv()),C.a0Z("Draw Pad","Sketch and share","\ud83c\udfa8",A.bA,A.b5,new C.fiw()),C.a0Z("Memory Match","Find the pairs","\ud83c\udccf",A.aR,A.c9,new C.fix()),C.a0Z("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bI,A.be,new C.fiy()),C.a0Z("Tip & Split","Share the bill","\ud83e\uddfe",A.bm,A.b_,new C.fiz()),C.a0Z("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.by,A.aC,new C.fiA())],B.aw("O<bu9>")))
w($,"imv","hwb",()=>B.a([C.afe("EARTH GLOBE","Turn it, tap a country",A.ob,A.aR,new C.fim()),C.afe("SOLAR SYSTEM","The Sun and its worlds",D.bJ5,A.aT,new C.fin()),C.afe("GRAVITY LAB","Drop, weigh, orbit",D.anl,A.cZ,new C.fio()),C.afe("BLACK HOLE","Throw in a star",A.Gc,A.by,new C.fip()),C.afe("GALAXY","Build, tilt, collide",A.yz,A.hb,new C.fiq()),C.afe("SIZE COMPARE","Earth next to a star",D.bJm,A.c8,new C.fir()),C.afe("SEASONS & MOON","Why it is summer",A.w3,A.bu,new C.fis())],B.aw("O<bu4>")))})()};
(a=>{a["inocAk4Zvgmyl+V+GpoNhMnSWrg="]=a.current})($__dart_deferred_initializers__);