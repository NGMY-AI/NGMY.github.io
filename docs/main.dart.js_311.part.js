((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A0,A9,A1,A2,I,P,A3,Aa,A4,A5,G,Ab,A6,Ac,Y,Ad,Ae,Q,N,Af,Ag,Z,O,V,Ah,Ai,R,M,Aj,W,K,S,Ak,E,F,L,B={
bz7(d){return B.hRX(d)},
hRX(d){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bz7=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qS(C.n7(""),d,A.hD,null,null).d7(0,A.Yt),$async$bz7)
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
return C.i($async$bz7,v)},
i2A(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Qe[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.cS(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.h7(D.Qe,new B.fxv())
if(w==null)w=A.d.gI(D.Qe)
s=C.U(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.K)(r),++u){l=r[u].a
k=l[0]
l=$.qj().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.K)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gI(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.ajL(w.a,w.b,m,w,s,!1)},
hXg(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.M(D.QF,new B.fnw(),x.bd).aH(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
iaq(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cK(b2,"{")
v=A.a.oD(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.S.aK(0,A.a.ap(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aX(a5)
r=0
for(a6=x.j,a7=J.aV(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=C.u(J.q(q,"kind"))
o=C.u(J.q(q,"id"))
if(!$.qj().ai(0,p)||J.f4(s,o)||J.ad(t)>=8)continue
J.ce(s,o)
n=C.U(a5,a8)
for(a9=0;a9<4;++a9){m=D.dju[a9]
l=J.q(q,m)
if(typeof l=="number")J.aG(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.dT(J.q(q,"x")):0.2+A.k.E(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.dT(J.q(q,"y")):0.25+A.k.an(r,3)*0.3,0.1,0.9)
J.ce(t,new C.e8([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=C.u(J.q(g,0))
e=C.u(J.q(g,2))
d=A.o.D(A.k.N(C.dT(J.q(g,1))),0,1)
a0=A.o.D(A.k.N(C.dT(J.q(g,3))),0,1)
if(J.f4(s,f)&&J.f4(s,e)&&!J.A(f,e))J.ce(i,new C.cA([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.L.a(J.q(u,"steps"))
a0=J.aV(a0==null?A.cv:a0)
while(a0.C()){a2=a0.gR(a0)
J.ce(a1,C.u(a2))}a3=a1
a0=J.q(u,"title")
a0=C.u(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new B.mB(a0,C.u(a1==null?"":a1),t,i,A.U)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.u(a5==null?"":a5)
return new B.ajL(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
i1a(d){var w,v,u=B.h76()
d.B(u)
for(w=0;w<60;++w)u.v4(0,0.03333333333333333)
v=u.a
return A.d.b6(v,new B.fuh(u))&&!A.d.d6(v,new B.fui())},
i19(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.U(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.K)(l),++u){t=l[u];++v
k.n(0,t.a,$.qj().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.K)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.u(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.dhO,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aH(q,", ")+")"
s.push(C.u(p)+n+": "+o+", current "+A.k.aa(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.K)(w),++u){m=w[u]
l.push(C.u(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.u(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aH(s,"\n")+"\nWires: "+A.d.aH(l,"; ")},
hQx(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.K)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aH(v,"\n")+"\n\n"}v=A.d.aH(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
i2z(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qj().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.QF[u]
if(A.d.b6(w,new B.fxs(s)))if(!C.cS(r,s.b.toLowerCase(),0))v=C.cS(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a_(w,new B.fxt(e),C.T(w).k("a_<1>")).gam(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.aa(A.d.cJ(w,0,new B.fxu())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gI(w)
w=$.qj().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ajL:function ajL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fxv:function fxv(){},
fnw:function fnw(){},
fuh:function fuh(d){this.a=d},
fui:function fui(){},
fxs:function fxs(d){this.a=d},
fxt:function fxt(d){this.a=d},
fxu:function fxu(){},
Vl:function Vl(d,e){this.c=d
this.a=e},
bjM:function bjM(d,e,f,g,h){var _=this
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
e84:function e84(d){this.a=d},
e85:function e85(d,e,f){this.a=d
this.b=e
this.c=f},
e86:function e86(d){this.a=d},
e8h:function e8h(d){this.a=d},
e8i:function e8i(d,e){this.a=d
this.b=e},
e8d:function e8d(d){this.a=d},
e8b:function e8b(d,e){this.a=d
this.b=e},
e8c:function e8c(d,e,f){this.a=d
this.b=e
this.c=f},
e8e:function e8e(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e89:function e89(d){this.a=d},
e8a:function e8a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8f:function e8f(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e88:function e88(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8g:function e8g(d,e){this.a=d
this.b=e},
e87:function e87(d,e){this.a=d
this.b=e},
e8l:function e8l(d){this.a=d},
e8k:function e8k(d){this.a=d},
e8m:function e8m(d){this.a=d},
e8j:function e8j(d){this.a=d},
e8n:function e8n(d,e){this.a=d
this.b=e},
e8o:function e8o(d,e){this.a=d
this.b=e},
e8p:function e8p(d,e){this.a=d
this.b=e},
e8q:function e8q(d,e){this.a=d
this.b=e},
bzs(d,e,f){var w=null
return C.x(C.a([C.d(d,w,w,w,w,w,w,D.aQm,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.N,0,A.p)},
hkz(d,e,f,g){var w=null,v=C.n(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.x(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zT,A.L,w,w),A.aB,C.bV(A.fT,g,A.br,0,8)],x.p),A.m,w,A.e,A.N,0,A.p),A.f,w,w,new C.o(D.Wm,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
G3:function G3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uR:function uR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VN:function VN(d){this.a=d},
aE4:function aE4(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.ft$=h
_.l4$=i
_.fW$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
eob:function eob(){},
eov:function eov(d){this.a=d},
eou:function eou(d,e){this.a=d
this.b=e},
eow:function eow(){},
eox:function eox(){},
eod:function eod(d,e,f){this.a=d
this.b=e
this.c=f},
eoc:function eoc(d,e){this.a=d
this.b=e},
eo2:function eo2(d){this.a=d},
eo3:function eo3(d){this.a=d},
eo4:function eo4(d){this.a=d},
eo5:function eo5(d){this.a=d},
eo6:function eo6(d){this.a=d},
eo7:function eo7(d){this.a=d},
eo8:function eo8(d){this.a=d},
eo9:function eo9(d){this.a=d},
eoa:function eoa(d){this.a=d},
eo0:function eo0(d){this.a=d},
eo1:function eo1(d){this.a=d},
eo_:function eo_(d){this.a=d},
eoo:function eoo(d,e){this.a=d
this.b=e},
eoj:function eoj(d){this.a=d},
eok:function eok(d){this.a=d},
eog:function eog(d){this.a=d},
eol:function eol(d){this.a=d},
eof:function eof(d){this.a=d},
eom:function eom(d){this.a=d},
eon:function eon(d){this.a=d},
eoe:function eoe(d){this.a=d},
eop:function eop(d,e){this.a=d
this.b=e},
eoi:function eoi(d,e){this.a=d
this.b=e},
eoq:function eoq(d){this.a=d},
eor:function eor(d){this.a=d},
eos:function eos(d){this.a=d},
eot:function eot(d){this.a=d},
eoh:function eoh(d){this.a=d},
bgL:function bgL(d,e){this.b=d
this.a=e},
aLW:function aLW(){},
bx6:function bx6(){},
cFv(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cFv=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.qV().jH(0,"assets/data/body3d.bin"),$async$cFv)
case 3:d=a1
$.hfW=J.f1(A.dD.gaP(d),d.byteOffset,d.byteLength)
t=C.aS3(d)
s=t.getUint32(4,!0)
r=C.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=C.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=C.js(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.d6M[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a2Y(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aYH))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.b9S(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cFv,v)},
aRR:function aRR(d,e,f){this.a=d
this.b=e
this.c=f},
a2Y:function a2Y(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b9S:function b9S(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ub:function Ub(d){this.a=d},
aCu:function aCu(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.ft$=s
_.l4$=t
_.fW$=u
_.fu$=v
_.bt$=w
_.a9$=a0
_.c=_.a=null},
dFr:function dFr(d){this.a=d},
dFq:function dFq(d,e){this.a=d
this.b=e},
dF3:function dF3(d,e){this.a=d
this.b=e},
dF4:function dF4(){},
dFs:function dFs(){},
dF5:function dF5(d,e){this.a=d
this.b=e},
dF6:function dF6(d){this.a=d},
dF7:function dF7(){},
dF8:function dF8(d){this.a=d},
dFa:function dFa(d,e){this.a=d
this.b=e},
dF9:function dF9(d){this.a=d},
dF0:function dF0(d,e,f){this.a=d
this.b=e
this.c=f},
dF1:function dF1(d){this.a=d},
dF2:function dF2(d){this.a=d},
dFh:function dFh(d){this.a=d},
dFi:function dFi(d,e){this.a=d
this.b=e},
dFj:function dFj(d,e){this.a=d
this.b=e},
dFk:function dFk(d){this.a=d},
dFg:function dFg(d,e){this.a=d
this.b=e},
dFl:function dFl(d,e){this.a=d
this.b=e},
dFf:function dFf(d,e){this.a=d
this.b=e},
dFm:function dFm(d){this.a=d},
dFe:function dFe(d){this.a=d},
dFn:function dFn(d){this.a=d},
dFd:function dFd(d){this.a=d},
dFo:function dFo(d){this.a=d},
dFc:function dFc(d){this.a=d},
dFp:function dFp(d){this.a=d},
dFb:function dFb(d){this.a=d},
aKY:function aKY(){},
aKZ:function aKZ(){},
c0J:function c0J(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c0K:function c0K(d,e){this.a=d
this.b=e},
c0L:function c0L(d){this.a=d},
axZ(d,e,f,g,h){return new B.baA(d,e,f,g,h)},
fYN(d,e,f,g,h,i){return $.hNV.c9(0,d+"|"+C.u(e)+"|"+f.l()+"|"+C.u(g),new B.cMh(d,e,f,i,g,h))},
y3:function y3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ck:function Ck(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
no:function no(d,e,f){this.a=d
this.b=e
this.c=f},
baA:function baA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fhd:function fhd(){},
fhe:function fhe(){},
fhf:function fhf(){},
fhm:function fhm(){},
fhn:function fhn(){},
fho:function fho(){},
Uh:function Uh(d){this.a=d},
aCx:function aCx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.ft$=m
_.l4$=n
_.fW$=o
_.fu$=p
_.bt$=q
_.a9$=r
_.c=_.a=null},
dHC:function dHC(d){this.a=d},
dHg:function dHg(d,e){this.a=d
this.b=e},
dHj:function dHj(){},
dHD:function dHD(){},
dHe:function dHe(d,e){this.a=d
this.b=e},
dHf:function dHf(d,e){this.a=d
this.b=e},
dHk:function dHk(d,e,f){this.a=d
this.b=e
this.c=f},
dH9:function dH9(){},
dHa:function dHa(){},
dHb:function dHb(d){this.a=d},
dHc:function dHc(d,e){this.a=d
this.b=e},
dHd:function dHd(d,e,f){this.a=d
this.b=e
this.c=f},
dHl:function dHl(){},
dHm:function dHm(d,e){this.a=d
this.b=e},
dHn:function dHn(d){this.a=d},
dHi:function dHi(d,e){this.a=d
this.b=e},
dHh:function dHh(d){this.a=d},
dH8:function dH8(d,e,f){this.a=d
this.b=e
this.c=f},
dHw:function dHw(d){this.a=d},
dHv:function dHv(d){this.a=d},
dHx:function dHx(d){this.a=d},
dHu:function dHu(d){this.a=d},
dHs:function dHs(d){this.a=d},
dHt:function dHt(d){this.a=d},
dHr:function dHr(d){this.a=d},
dHo:function dHo(d){this.a=d},
dHq:function dHq(d){this.a=d},
dHy:function dHy(d,e){this.a=d
this.b=e},
dHz:function dHz(d,e){this.a=d
this.b=e},
dHA:function dHA(d){this.a=d},
dHp:function dHp(d){this.a=d},
dHB:function dHB(d,e){this.a=d
this.b=e},
baT:function baT(d,e){this.b=d
this.a=e},
cMh:function cMh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aL3:function aL3(){},
bwQ:function bwQ(){},
hEL(){return new B.Ne(null)},
oC(d,e,f,g,h){return new B.bsr(d,e,f,g,h)},
bqR(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fZi(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Ne:function Ne(d){this.a=d},
Kj:function Kj(d,e){this.a=d
this.b=e},
Ax:function Ax(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aCO:function aCO(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dNr:function dNr(d,e){this.a=d
this.b=e},
dNq:function dNq(d){this.a=d},
dNt:function dNt(d,e){this.a=d
this.b=e},
dNs:function dNs(d){this.a=d},
bsr:function bsr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fhE:function fhE(){},
fhF:function fhF(){},
fhG:function fhG(){},
fhR:function fhR(){},
fhT:function fhT(){},
fhU:function fhU(){},
fhV:function fhV(){},
fhW:function fhW(){},
fhX:function fhX(){},
fhY:function fhY(){},
fhZ:function fhZ(){},
fhH:function fhH(){},
fhI:function fhI(){},
fhJ:function fhJ(){},
fhK:function fhK(){},
fhL:function fhL(){},
fhM:function fhM(){},
fhN:function fhN(){},
fhO:function fhO(){},
fhP:function fhP(){},
fhQ:function fhQ(){},
fhS:function fhS(){},
bqS:function bqS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eYT:function eYT(d){this.a=d},
eYS:function eYS(d,e){this.a=d
this.b=e},
eYQ:function eYQ(d){this.a=d},
eYU:function eYU(d){this.a=d},
eYR:function eYR(d,e){this.a=d
this.b=e},
aeN:function aeN(d,e,f){this.c=d
this.d=e
this.a=f},
adF:function adF(d,e,f){this.c=d
this.d=e
this.a=f},
PW:function PW(d,e,f,g,h,i,j,k,l,m){var _=this
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
brQ:function brQ(d,e){this.b=d
this.a=e},
brl:function brl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9z:function b9z(d,e){this.b=d
this.a=e},
aH3:function aH3(d,e){this.c=d
this.a=e},
aH4:function aH4(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cQ$=e
_.b4$=f
_.c=_.a=null},
eYz:function eYz(d){this.a=d},
eYy:function eYy(d){this.a=d},
eYx:function eYx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eYw:function eYw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eYu:function eYu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eYt:function eYt(d,e,f){this.a=d
this.b=e
this.c=f},
eYv:function eYv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eYs:function eYs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eYH:function eYH(d){this.a=d},
eYG:function eYG(d){this.a=d},
eYI:function eYI(d,e){this.a=d
this.b=e},
eYJ:function eYJ(d,e){this.a=d
this.b=e},
eYK:function eYK(d,e){this.a=d
this.b=e},
eYF:function eYF(d,e,f){this.a=d
this.b=e
this.c=f},
eYL:function eYL(d,e,f){this.a=d
this.b=e
this.c=f},
eYE:function eYE(d){this.a=d},
eYA:function eYA(d){this.a=d},
eYM:function eYM(d){this.a=d},
eYN:function eYN(d){this.a=d},
eYD:function eYD(d,e){this.a=d
this.b=e},
eYO:function eYO(d,e){this.a=d
this.b=e},
eYC:function eYC(d,e){this.a=d
this.b=e},
eYP:function eYP(d,e){this.a=d
this.b=e},
eYB:function eYB(d,e){this.a=d
this.b=e},
eYq:function eYq(){},
eYr:function eYr(){},
bqu:function bqu(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpW:function bpW(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bae:function bae(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpY:function bpY(d,e,f){this.b=d
this.c=e
this.a=f},
btW:function btW(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aMN:function aMN(){},
hm_(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new C.v(w,0)),u=e.aD(0,new C.v(w,0)),t=1-f,s=3*t
return d.aG(0,t*t*t).ad(0,v.aG(0,s*t*f)).ad(0,u.aG(0,s*f*f)).ad(0,e.aG(0,f*f*f))},
bgK(d,e,f,g,h,i){return $.hOv.c9(0,d+"|"+C.u(e)+"|"+f.l()+"|"+C.u(g),new B.dhg(d,e,f,i,g,h))},
a0b:function a0b(d,e){this.a=d
this.b=e},
q7:function q7(d,e,f,g,h){var _=this
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
Co:function Co(d,e){this.a=d
this.b=e},
Z9:function Z9(d,e){this.a=d
this.b=e},
aeD:function aeD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0o:function a0o(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Cy:function Cy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abw:function abw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abN:function abN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adJ:function adJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgI:function bgI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.U$=t
_.bu$=_.bI$=0},
dhk:function dhk(d){this.a=d},
dhl:function dhl(d){this.a=d},
dhh:function dhh(d,e){this.a=d
this.b=e},
dhi:function dhi(d){this.a=d},
dhj:function dhj(d){this.a=d},
dhm:function dhm(d){this.a=d},
dhn:function dhn(d){this.a=d},
dho:function dho(d){this.a=d},
dhp:function dhp(d){this.a=d},
dhq:function dhq(d){this.a=d},
dhr:function dhr(d){this.a=d},
dhs:function dhs(d){this.a=d},
dht:function dht(d){this.a=d},
dhu:function dhu(d){this.a=d},
FP:function FP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VM:function VM(d){this.a=d},
aE3:function aE3(d,e,f,g,h,i,j){var _=this
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
_.bt$=i
_.a9$=j
_.c=_.a=null},
enw:function enw(d){this.a=d},
enl:function enl(d){this.a=d},
enn:function enn(){},
eno:function eno(){},
enr:function enr(){},
ens:function ens(d,e,f){this.a=d
this.b=e
this.c=f},
ent:function ent(d){this.a=d},
enu:function enu(d){this.a=d},
enp:function enp(){},
enq:function enq(d){this.a=d},
enW:function enW(d){this.a=d},
env:function env(){},
enh:function enh(d){this.a=d},
eny:function eny(d){this.a=d},
enx:function enx(d){this.a=d},
enA:function enA(){},
enz:function enz(d,e){this.a=d
this.b=e},
enk:function enk(){},
eni:function eni(d){this.a=d},
enj:function enj(d){this.a=d},
enU:function enU(d){this.a=d},
enT:function enT(d){this.a=d},
enV:function enV(d){this.a=d},
enK:function enK(d,e){this.a=d
this.b=e},
enS:function enS(d){this.a=d},
enQ:function enQ(d){this.a=d},
enR:function enR(d){this.a=d},
enP:function enP(d){this.a=d},
enO:function enO(d){this.a=d},
enL:function enL(d){this.a=d},
enM:function enM(d){this.a=d},
enN:function enN(d){this.a=d},
enm:function enm(){},
enG:function enG(d){this.a=d},
enH:function enH(d){this.a=d},
enF:function enF(d){this.a=d},
enI:function enI(d){this.a=d},
enE:function enE(d){this.a=d},
enJ:function enJ(d){this.a=d},
enD:function enD(d){this.a=d},
enC:function enC(d){this.a=d},
enB:function enB(d,e){this.a=d
this.b=e},
bgJ:function bgJ(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dhg:function dhg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aLU:function aLU(){},
bli:function bli(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
PN:function PN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
W0:function W0(d){this.a=d},
bkm:function bkm(d,e,f,g,h,i,j,k){var _=this
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
_.bt$=j
_.a9$=k
_.c=_.a=null},
ezB:function ezB(d){this.a=d},
ezz:function ezz(d){this.a=d},
ezA:function ezA(){},
ezc:function ezc(){},
ezb:function ezb(){},
ezl:function ezl(d,e){this.a=d
this.b=e},
ezn:function ezn(d){this.a=d},
ezr:function ezr(d){this.a=d},
ezm:function ezm(d){this.a=d},
ezs:function ezs(d){this.a=d},
ezt:function ezt(d){this.a=d},
ezu:function ezu(d,e){this.a=d
this.b=e},
ezk:function ezk(d,e){this.a=d
this.b=e},
ezv:function ezv(d){this.a=d},
ezj:function ezj(d){this.a=d},
ezw:function ezw(d,e){this.a=d
this.b=e},
ezi:function ezi(d,e){this.a=d
this.b=e},
ezx:function ezx(d){this.a=d},
ezh:function ezh(d,e){this.a=d
this.b=e},
ezy:function ezy(d){this.a=d},
ezg:function ezg(d){this.a=d},
ezo:function ezo(d){this.a=d},
ezf:function ezf(d){this.a=d},
ezp:function ezp(d){this.a=d},
eze:function eze(d){this.a=d},
ezq:function ezq(d,e){this.a=d
this.b=e},
ezd:function ezd(d,e){this.a=d
this.b=e},
brL:function brL(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
Wc:function Wc(d){this.a=d},
aEj:function aEj(d,e,f,g){var _=this
_.d=d
_.e=$
_.f=e
_.r="bounce"
_.w=3
_.x=56
_.y=0
_.z=!0
_.Q=0
_.bt$=f
_.a9$=g
_.c=_.a=null},
eGa:function eGa(d,e){this.a=d
this.b=e},
eGb:function eGb(d,e,f){this.a=d
this.b=e
this.c=f},
eGc:function eGc(d){this.a=d},
eG9:function eG9(){},
eGd:function eGd(d,e){this.a=d
this.b=e},
eG8:function eG8(d,e){this.a=d
this.b=e},
eGe:function eGe(d,e){this.a=d
this.b=e},
eG7:function eG7(d,e){this.a=d
this.b=e},
eGf:function eGf(d){this.a=d},
eG6:function eG6(d){this.a=d},
eGg:function eGg(d,e){this.a=d
this.b=e},
eG5:function eG5(d,e){this.a=d
this.b=e},
eGh:function eGh(d){this.a=d},
eGi:function eGi(d){this.a=d},
eG4:function eG4(d,e){this.a=d
this.b=e},
aM2:function aM2(){},
aM8:function aM8(){},
a_G:function a_G(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
VJ:function VJ(d){this.a=d},
aDW:function aDW(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.ft$=h
_.l4$=i
_.fW$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
ek1:function ek1(d){this.a=d},
ek2:function ek2(d,e){this.a=d
this.b=e},
ejQ:function ejQ(d,e){this.a=d
this.b=e},
ejR:function ejR(d){this.a=d},
ejO:function ejO(d){this.a=d},
ejP:function ejP(d){this.a=d},
ejN:function ejN(d){this.a=d},
ejS:function ejS(d){this.a=d},
ejM:function ejM(d,e){this.a=d
this.b=e},
ejU:function ejU(d){this.a=d},
ejL:function ejL(d,e){this.a=d
this.b=e},
ejV:function ejV(d){this.a=d},
ejK:function ejK(d,e){this.a=d
this.b=e},
ejW:function ejW(d){this.a=d},
ejJ:function ejJ(d){this.a=d},
ejX:function ejX(d){this.a=d},
ejI:function ejI(d){this.a=d},
ejY:function ejY(d){this.a=d},
ejH:function ejH(d){this.a=d},
ejZ:function ejZ(d){this.a=d},
ek_:function ek_(d){this.a=d},
ek0:function ek0(d){this.a=d},
ejG:function ejG(d){this.a=d},
ejT:function ejT(d){this.a=d},
bl5:function bl5(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abD:function abD(d,e,f){this.a=d
this.b=e
this.c=f},
W7:function W7(d){this.a=d},
bkr:function bkr(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.ft$=i
_.l4$=j
_.fW$=k
_.fu$=l
_.bt$=m
_.a9$=n
_.c=_.a=null},
eFC:function eFC(d){this.a=d},
eFD:function eFD(d){this.a=d},
eFB:function eFB(d){this.a=d},
eFr:function eFr(d,e){this.a=d
this.b=e},
eFs:function eFs(d){this.a=d},
eFp:function eFp(d){this.a=d},
eFq:function eFq(d){this.a=d},
eFo:function eFo(d){this.a=d},
eFh:function eFh(d){this.a=d},
eFi:function eFi(d){this.a=d},
eFg:function eFg(d){this.a=d},
eFt:function eFt(d,e){this.a=d
this.b=e},
eFn:function eFn(d,e){this.a=d
this.b=e},
eFu:function eFu(d,e){this.a=d
this.b=e},
eFm:function eFm(d,e){this.a=d
this.b=e},
eFv:function eFv(d){this.a=d},
eFl:function eFl(d){this.a=d},
eFw:function eFw(d){this.a=d},
eFk:function eFk(d,e){this.a=d
this.b=e},
eFx:function eFx(d){this.a=d},
eFj:function eFj(d,e){this.a=d
this.b=e},
eFy:function eFy(d){this.a=d},
eFf:function eFf(d,e){this.a=d
this.b=e},
eFz:function eFz(d){this.a=d},
eFe:function eFe(d,e){this.a=d
this.b=e},
eFA:function eFA(d){this.a=d},
eFd:function eFd(d,e){this.a=d
this.b=e},
bsD:function bsD(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
ac5:function ac5(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
Uf:function Uf(d){this.a=d},
aCw:function aCw(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=1
_.x=g
_.Q=_.z=_.y=!1
_.as=0
_.at=null
_.ax=0
_.ft$=h
_.l4$=i
_.fW$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
dGL:function dGL(d){this.a=d},
dGK:function dGK(d,e){this.a=d
this.b=e},
dGM:function dGM(){},
dGN:function dGN(d){this.a=d},
dGB:function dGB(d,e){this.a=d
this.b=e},
dGE:function dGE(d){this.a=d},
dGD:function dGD(d,e){this.a=d
this.b=e},
dGC:function dGC(d,e){this.a=d
this.b=e},
dGI:function dGI(d,e,f){this.a=d
this.b=e
this.c=f},
dGH:function dGH(d){this.a=d},
dGF:function dGF(d){this.a=d},
dGG:function dGG(d){this.a=d},
dGJ:function dGJ(d){this.a=d},
baz:function baz(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cLP:function cLP(d){this.a=d},
aL1:function aL1(){},
bwP:function bwP(){},
aLR:function aLR(){},
bx5:function bx5(){},
aM5:function aM5(){},
bxd:function bxd(){},
FL:function FL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
acV:function acV(d,e,f){this.a=d
this.b=e
this.c=f},
VD:function VD(d){this.a=d},
bk0:function bk0(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.ft$=i
_.l4$=j
_.fW$=k
_.fu$=l
_.bt$=m
_.a9$=n
_.c=_.a=null},
efv:function efv(d,e){this.a=d
this.b=e},
efU:function efU(d){this.a=d},
efJ:function efJ(d){this.a=d},
efA:function efA(d){this.a=d},
efK:function efK(d,e){this.a=d
this.b=e},
efL:function efL(d){this.a=d},
efz:function efz(d){this.a=d},
efH:function efH(d){this.a=d},
efI:function efI(d){this.a=d},
efG:function efG(d){this.a=d},
efM:function efM(d,e){this.a=d
this.b=e},
efF:function efF(d,e){this.a=d
this.b=e},
efN:function efN(d,e){this.a=d
this.b=e},
efE:function efE(d,e){this.a=d
this.b=e},
efO:function efO(d,e){this.a=d
this.b=e},
efD:function efD(d,e){this.a=d
this.b=e},
efP:function efP(d){this.a=d},
efC:function efC(d,e){this.a=d
this.b=e},
efQ:function efQ(d){this.a=d},
efB:function efB(d){this.a=d},
efR:function efR(d){this.a=d},
efy:function efy(d){this.a=d},
efS:function efS(d){this.a=d},
efx:function efx(d){this.a=d},
efT:function efT(d){this.a=d},
efw:function efw(d){this.a=d},
bhD:function bhD(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
adq:function adq(d,e){this.a=d
this.b=e
this.c=-1000},
VI:function VI(d){this.a=d},
aDV:function aDV(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=!1
_.r=f
_.w=g
_.x=80
_.y="Pentatonic"
_.z="bell"
_.Q=!0
_.ft$=h
_.l4$=i
_.fW$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
ejp:function ejp(d,e){this.a=d
this.b=e},
ejq:function ejq(d,e,f){this.a=d
this.b=e
this.c=f},
ejx:function ejx(d){this.a=d},
ejw:function ejw(d){this.a=d},
ejy:function ejy(d,e){this.a=d
this.b=e},
ejz:function ejz(d){this.a=d},
ejv:function ejv(d){this.a=d},
ejA:function ejA(d){this.a=d},
eju:function eju(d,e){this.a=d
this.b=e},
ejB:function ejB(d,e){this.a=d
this.b=e},
ejt:function ejt(d,e){this.a=d
this.b=e},
ejC:function ejC(d,e){this.a=d
this.b=e},
ejs:function ejs(d,e){this.a=d
this.b=e},
ejD:function ejD(d){this.a=d},
ejE:function ejE(d){this.a=d},
ejr:function ejr(d){this.a=d},
ejF:function ejF(d){this.a=d},
bl6:function bl6(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aLP:function aLP(){},
bx3:function bx3(){},
aLQ:function aLQ(){},
bx4:function bx4(){},
fdw(d,e,f){var w=null,v=e.j(0.12),u=C.n(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a8F,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ik,w,w,1/0)},
i2Z(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.U(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.K)(d),++u){t=d[u]
s=v.h(0,t)
v.n(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gM(j))return!1
for(j=j.gdL(j),j=j.gae(j);j.C();){s=j.gR(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.c2(d.length,0,!1,w)
q=d.length
p=J.e4(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bM(0,new B.fxM(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.we.h(0,d[n]).a)return!1
m=C.ev([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.K)(j),++u){k=j[u]
if(m.L(0,k))l.push(k)}return m.a===d.length},
h0R(d){var w="TCAG",v=C.aK(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cK(w,v[0])*16+A.a.cK(w,v[1])*4+A.a.cK(w,v[2])]},
tl:function tl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b9s:function b9s(d,e){this.a=d
this.b=e},
fxM:function fxM(d,e){this.a=d
this.b=e},
VG:function VG(d){this.a=d},
aDT:function aDT(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
eiU:function eiU(d){this.a=d},
eiT:function eiT(d,e){this.a=d
this.b=e},
eiG:function eiG(d,e){this.a=d
this.b=e},
eiA:function eiA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eiB:function eiB(d){this.a=d},
eiF:function eiF(d,e){this.a=d
this.b=e},
eiE:function eiE(d,e){this.a=d
this.b=e},
eiC:function eiC(d){this.a=d},
eiD:function eiD(d,e){this.a=d
this.b=e},
eiO:function eiO(){},
eiP:function eiP(d){this.a=d},
eiN:function eiN(d){this.a=d},
eiQ:function eiQ(d){this.a=d},
eiM:function eiM(d){this.a=d},
eiK:function eiK(d){this.a=d},
eiL:function eiL(d,e){this.a=d
this.b=e},
eiH:function eiH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eiJ:function eiJ(d){this.a=d},
eiR:function eiR(d,e){this.a=d
this.b=e},
eiI:function eiI(d,e){this.a=d
this.b=e},
eiS:function eiS(d,e){this.a=d
this.b=e},
bik:function bik(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dpq:function dpq(d,e){this.a=d
this.b=e},
UE:function UE(d){this.a=d},
bjg:function bjg(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dPv:function dPv(d){this.a=d},
dPu:function dPu(d,e){this.a=d
this.b=e},
dPk:function dPk(d){this.a=d},
dPj:function dPj(){},
dPl:function dPl(d){this.a=d},
dPi:function dPi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPt:function dPt(){},
dPo:function dPo(){},
dPp:function dPp(d,e){this.a=d
this.b=e},
dPn:function dPn(d,e){this.a=d
this.b=e},
dPq:function dPq(d){this.a=d},
dPm:function dPm(d){this.a=d},
dPr:function dPr(d,e){this.a=d
this.b=e},
dPs:function dPs(d,e){this.a=d
this.b=e},
UU:function UU(d){this.a=d},
aD_:function aD_(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=0
_.z=_.y=_.x=1
_.as=_.Q=0
_.at="Grass feeds rabbits, rabbits feed foxes. Keep all three alive!"
_.bt$=g
_.a9$=h
_.c=_.a=null},
dSk:function dSk(d){this.a=d},
dSj:function dSj(d,e){this.a=d
this.b=e},
dS7:function dS7(){},
dS6:function dS6(d,e){this.a=d
this.b=e},
dS8:function dS8(d){this.a=d},
dSc:function dSc(d){this.a=d},
dSb:function dSb(d,e){this.a=d
this.b=e},
dSd:function dSd(d){this.a=d},
dSa:function dSa(d,e){this.a=d
this.b=e},
dSe:function dSe(d){this.a=d},
dS9:function dS9(d,e){this.a=d
this.b=e},
dSf:function dSf(d){this.a=d},
dSg:function dSg(d){this.a=d},
dSh:function dSh(d){this.a=d},
dSi:function dSi(d){this.a=d},
bdE:function bdE(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d4x:function d4x(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d4z:function d4z(d,e,f){this.a=d
this.b=e
this.c=f},
d4y:function d4y(d,e){this.a=d
this.b=e},
aLf:function aLf(){},
bzY(d,e,f){var w=null,v=e.j(0.12),u=C.n(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a8F,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ik,w,w,1/0)},
fqZ(d,e,f,g,h){var w,v,u=null,t=C.h3(u,u,u,u,C.d3(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),e),A.a4,A.c6,u,A.dP,A.c5)
t.en()
w=t.b
v=w.c
w=w.a.c
w=f.aD(0,new C.v(v/2,w.gbd(w)/2))
t.a4(d,w)},
i02(){var w,v,u,t,s,r,q,p,o=new C.eE()
o.dt(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.an(t,4)
r=C.aX(v)
q=C.a([],u)
while(q.length<s){p=1+o.aw(5)
if(r.L(0,p))q.push(new C.z(p,1+o.aw(2+A.o.an(t,3))))}A.d.aZ(q,new B.frZ())
w.push(new B.aRH(q))}return w},
a1C(d,e){var w,v,u,t
for(w=new C.Xf(d),v="";w.C();){u=C.jK(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jK(65+A.o.E(A.o.E(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
icO(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aK(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.Xf(d),v=0,u="";w.C();){t=C.jK(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.E(v,p)
u+=C.jK(65+A.o.E(A.o.E(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aRH:function aRH(d){this.a=d},
bFY:function bFY(){},
frZ:function frZ(){},
U6:function U6(d){this.a=d},
biV:function biV(d,e,f,g,h,i){var _=this
_.d=d
_.e=0
_.f=e
_.r=f
_.w=0
_.x=$
_.y=g
_.bt$=h
_.a9$=i
_.c=_.a=null},
dCW:function dCW(){},
dD8:function dD8(d){this.a=d},
dD7:function dD7(d,e,f){this.a=d
this.b=e
this.c=f},
dD9:function dD9(d){this.a=d},
dD6:function dD6(d,e){this.a=d
this.b=e},
dCX:function dCX(d,e){this.a=d
this.b=e},
dD1:function dD1(){},
dD2:function dD2(d){this.a=d},
dD0:function dD0(d){this.a=d},
dD3:function dD3(d,e){this.a=d
this.b=e},
dD_:function dD_(d,e){this.a=d
this.b=e},
dD4:function dD4(d,e){this.a=d
this.b=e},
dCZ:function dCZ(d,e){this.a=d
this.b=e},
dD5:function dD5(d){this.a=d},
dCY:function dCY(d){this.a=d},
b9E:function b9E(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cEm:function cEm(d,e){this.a=d
this.b=e},
V7:function V7(d){this.a=d},
bjs:function bjs(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bt$=g
_.a9$=h
_.c=_.a=null},
dWn:function dWn(d){this.a=d},
dWm:function dWm(d,e){this.a=d
this.b=e},
dWo:function dWo(d){this.a=d},
dWl:function dWl(d,e){this.a=d
this.b=e},
dWd:function dWd(d,e,f){this.a=d
this.b=e
this.c=f},
dWh:function dWh(d){this.a=d},
dWg:function dWg(d){this.a=d},
dWi:function dWi(d,e){this.a=d
this.b=e},
dWf:function dWf(d,e){this.a=d
this.b=e},
dWj:function dWj(d){this.a=d},
dWe:function dWe(d,e){this.a=d
this.b=e},
dWk:function dWk(d,e){this.a=d
this.b=e},
bf7:function bf7(d,e,f){this.b=d
this.c=e
this.a=f},
dcx:function dcx(d,e){this.a=d
this.b=e},
dcy:function dcy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ug:function Ug(d){this.a=d},
bj7:function bj7(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dH7:function dH7(d){this.a=d},
dH6:function dH6(d,e){this.a=d
this.b=e},
dGQ:function dGQ(){},
dGZ:function dGZ(d){this.a=d},
dGY:function dGY(){},
dH_:function dH_(d){this.a=d},
dGX:function dGX(){},
dH0:function dH0(d){this.a=d},
dGW:function dGW(d){this.a=d},
dH1:function dH1(d){this.a=d},
dGV:function dGV(d){this.a=d},
dH2:function dH2(d){this.a=d},
dGU:function dGU(d){this.a=d},
dH3:function dH3(d,e){this.a=d
this.b=e},
dGT:function dGT(d,e){this.a=d
this.b=e},
dH4:function dH4(d){this.a=d},
dGS:function dGS(d,e){this.a=d
this.b=e},
dH5:function dH5(d){this.a=d},
dGR:function dGR(d,e){this.a=d
this.b=e},
aKU:function aKU(){},
aLn:function aLn(){},
hr3(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aD(0,e).gcn()*0.1
return new C.v((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h76(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a4j(w,v,u,A.cG,C.U(x.N,x.y))},
hyC(d,e,f){var w=d.c,v=e===0?-1:1
return new C.v(w*f.a+v*B.h77(d),d.d*f.b)},
h77(d){return 42+(D.m0.ai(0,d.b)?(d.ch-1)*38:0)},
ed:function ed(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ty:function ty(d,e,f,g){var _=this
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
aab:function aab(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
abi:function abi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4j:function a4j(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bMf:function bMf(){},
bMq:function bMq(d){this.a=d},
bMl:function bMl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bMr:function bMr(d){this.a=d},
bMs:function bMs(d){this.a=d},
bMu:function bMu(d){this.a=d},
bMv:function bMv(d){this.a=d},
bMt:function bMt(d){this.a=d},
bMw:function bMw(d,e,f){this.a=d
this.b=e
this.c=f},
bMx:function bMx(d){this.a=d},
bMh:function bMh(d){this.a=d},
bMi:function bMi(d){this.a=d},
bMg:function bMg(d){this.a=d},
bMj:function bMj(d,e,f){this.a=d
this.b=e
this.c=f},
bMk:function bMk(d){this.a=d},
bMe:function bMe(d){this.a=d},
bMy:function bMy(d,e){this.a=d
this.b=e},
bMm:function bMm(d,e){this.a=d
this.b=e},
bMp:function bMp(d){this.a=d},
bMo:function bMo(d){this.a=d},
bMn:function bMn(d){this.a=d},
aiy:function aiy(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bH9:function bH9(){},
bHa:function bHa(){},
mB:function mB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cl4:function cl4(d){this.a=d},
iam(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.fJ7(),c9=new B.fJ9(),d0=new B.fJa(),d1=new B.fJ8(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aE(w,d1.$3(new C.a9(w.a,w.b,w.c,w.d),A.bL,A.bK))
d3.bE(D.ea3,D.e7R,c9.$2(A.dB,1.4))
d3.bE(D.e7H,D.e7G,c9.$2(A.bq,2.4))
d3.bE(D.e7I,Y.aH7,c9.$2(A.bq,2.4))
if(c7){d2=c8.$1(A.f9.j(0.5))
d2.z=A.Rr
d3.af(D.e7r,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.E(d2+v/3,1)
d6.$5(d3,"\u2744",new C.v(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aE(d0.$4(-22,-26,44,50),d1.$3(D.aN1,A.aQ,A.cr))
d3.af(A.cJ,16,c8.$1(A.bq))
d3.af(A.cJ,13,c8.$1(c7?A.aN.j(0.85):A.M))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(0,4)
d3.ja(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.ad,3).H()
d2.drawLine.apply(d2,[0,0,s*11,t*11,r])
r.delete()}d2.restore()
for(t=d5*0.8,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
s=Math.sin(v*2+d5)
r=c8.$1(A.c.j(0.8*(1-u))).H()
d2.drawCircle(s*9,4-u*12,1.6+u*2,r)
r.delete()}}d3.af(D.ea_,2.4,c8.$1(c7?A.bd:A.ak))
d3.af(D.eaH,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aE(d0.$5(-14,14,28,12,4),c8.$1(A.ec))
d2=$.W().r
t=x.v
q=new C.aO(d2,A.ao,c6,c6,C.a([],t))
q.F(new C.b5(-16,-26))
q.F(new C.ap(16,-26))
q.F(new C.ap(12,14))
q.F(new C.ap(-12,14))
q.F(new C.bE())
d3.aR(q,c8.$1(A.f9.j(0.35)))
if(c7){d2=new C.aO(d2,A.ao,c6,c6,C.a([],t))
d2.F(new C.b5(-14,-10))
d2.F(new C.ap(14,-10))
d2.F(new C.ap(12,14))
d2.F(new C.ap(-12,14))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.av.j(0.7)))}d3.aR(q,c9.$2(A.ad,1.6))
d2=d3.a
J.by(d2.save())
d2.translate(0,10)
d3.ja(0,d4.y)
d3.bE(D.a5N,D.aHn,c9.$2(A.bN,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.E(s+v*0.33,1)
r=c8.$1(A.f0).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aE(d0.$5(-10,-4,20,10,4),c8.$1(A.aJ))
d3.af(A.iq,3,c8.$1(c7?A.bd:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a3x[m]
r=c9.$2(A.bq,3).H()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.by(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).H()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=C.ch(A.J,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).H()
d2.drawOval(C.c0(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
w.F(new C.b5(-24,-12))
w.F(new C.ap(10,-12))
w.F(new C.ap(10,2))
w.F(new C.ap(-2,2))
w.F(new C.ap(-6,22))
w.F(new C.ap(-16,22))
w.F(new C.ap(-14,2))
w.F(new C.ap(-24,2))
w.F(new C.bE())
d3.aR(w,d1.$3(D.eP2,A.aM,A.d5))
d3.b0(D.eOs,c8.$1(A.dy))
d2=d3.a
J.by(d2.save())
d2.translate(18,-5)
d3.ja(0,d4.y*2)
d3.bE(A.J,D.e7L,c9.$2(A.bN,2.4))
d3.bE(A.a5M,D.e7K,c9.$2(A.hM,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dQ.j(1-u)).H()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(16,-6))
d2.F(new C.ap(52,-26))
d2.F(new C.ap(52,18))
d2.F(new C.ap(16,4))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.bM.j(0.35*v)))}d3.aE(d0.$5(-26,-6,30,12,3),d1.$3(D.eP8,A.bm,A.ct))
k=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
k.F(new C.b5(4,-6))
k.F(new C.ap(18,-12))
k.F(new C.ap(18,12))
k.F(new C.ap(4,6))
k.F(new C.bE())
d3.aR(k,c8.$1(A.ec))
d3.af(D.e7P,7,c8.$1(c7?A.c:A.dy))
return!0
case"neon":d3.aE(d0.$5(-30,-14,60,28,6),c8.$1(L.ml))
if(c7)j=d4.ax>0.5||A.o.E(A.k.bm(d5*17),3)!==0
else j=!1
i=j?A.bY:D.biE
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bY.j(0.35))
t.z=A.lv
d3.aE(d2,t)}d3.aE(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.ea9,i,17)
return!0
case"microwave":d3.aE(d0.$4(-30,-18,60,38),d1.$3(D.ePe,A.bN,A.bm))
d2=d0.$5(-26,-14,38,30,3)
d3.aE(d2,c8.$1(c7?A.bM.j(0.75):A.ax))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(-7,8)
d3.ja(0,d4.y*0.5)
d3.hV(C.ch(A.J,7,22),c8.$1(A.d5))
d2.restore()}d3.aE(d0.$5(15,-14,12,12,2),c8.$1(L.ml))
if(c7)d6.$5(d3,"0:"+A.a.aV(A.o.u(59-A.o.E(A.k.bm(d5),60)),2,"0"),D.e7Q,A.b2,6.5)
d3.af(D.e81,4,c8.$1(A.dy))
return!0
case"doorbell":d3.aE(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.af(A.Sh,10,c8.$1(c7?A.bH:A.bq))
d2=d3.a
J.by(d2.save())
d2.translate(0,-8)
d3.ja(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.eaJ,A.c,16)
d2.restore()
d3.af(A.kb,6,c8.$1(A.d_))
d3.af(A.kb,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bU(A.Sh,14+v*6+A.k.E(t,6))
r=c9.$2(A.bH.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c0(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bE(D.ea8,D.eaF,c9.$2(A.bq,4))
d2=d3.a
J.by(d2.save())
d3.ja(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aE(d0.$5(-24,-14,46,22,5),d1.$3(D.eP3,A.bN,A.ak))
d3.af(D.aH9,8,c8.$1(A.ax))
d3.af(D.aH9,4.5,c8.$1(c7?A.aN:A.ct))
d3.af(D.ea6,2.2,c8.$1(c7&&A.o.E(A.k.bm(d5*1.6),2)===0?A.av:A.kr))
d2.restore()
if(c7)d6.$5(d3,"REC",D.eah,A.av,9)
return!0
case"console":d3.aE(d0.$5(-28,-22,56,44,8),d1.$3(D.ePb,A.iY,A.fc))
d3.aE(d0.$5(-20,-17,40,22,3),c8.$1(A.dI))
if(c7){d2=d5*2.3
d3.af(new C.v(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.b0(new C.a9(-18,t,-15.6,t+8),c8.$1(A.b2))
d2=-9+Math.sin(d2-0.4)*6
d3.b0(new C.a9(15.6,d2,18,d2+8),c8.$1(A.bY))}d3.af(D.ea2,4,c8.$1(A.aW))
d3.af(D.e7M,2.4,c8.$1(A.av))
d3.af(D.e7Z,2.4,c8.$1(A.bd))
return!0
case"heartmon":d3.aE(d0.$5(-30,-22,60,44,6),c8.$1(A.ax))
d3.aE(d0.$5(-26,-18,52,28,3),c8.$1(A.dI))
if(c7){d2=$.W()
t=C.a([],x.v)
h=new C.aO(d2.r,A.ao,c6,c6,t)
for(d2=d5*0.5,l=-25;l<=25;++l){u=A.k.E((l+25)/50-d2,1)
if(u<0.1)g=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)g=0.6
else{s=u<0.2?-0.4:0
g=s}f=-4+g*11
if(l===-25){s=new C.b5(l,f)
t.push(s)
p=h.f
if(p!=null)s.bC(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new C.ap(l,f)
t.push(s)
p=h.f
if(p!=null)s.bC(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aR(h,c9.$2(A.b2,1.8))
d6.$5(d3,"72",D.e7N,A.h3,11)
d2=d5*9
d6.$5(d3,"\u2665",D.eal,A.h3.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.af(D.eab,3,c8.$1(c7?A.bd:A.bq))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aE(d2,c8.$1(A.cA.j(c7?0.5:0.3)))
d3.aE(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.b0(D.eP5,c8.$1(F.tm))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.by(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.te(0,-1,1)
d3.hV(C.ch(A.J,8,14),c8.$1(A.cs))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,0))
d2.F(new C.ap(-12,-4))
d2.F(new C.ap(-12,4))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.cc))
d3.af(D.e8t,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.E(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.E(v,2)
r=c9.$2(A.ad,1).H()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.W().r
t=x.v
e=new C.aO(d2,A.ao,c6,c6,C.a([],t))
e.F(new C.b5(-9,22))
e.F(new C.ap(-5,-16))
e.F(new C.ap(5,-16))
e.F(new C.ap(9,22))
e.F(new C.bE())
d3.aR(e,d1.$3(D.ePz,A.c,A.bz))
d3.b0(D.ePy,c8.$1(c7?A.dQ:A.bq))
s=new C.aO(d2,A.ao,c6,c6,C.a([],t))
s.F(new C.b5(-7,-22))
s.F(new C.ap(0,-29))
s.F(new C.ap(7,-22))
s.F(new C.bE())
d3.aR(s,c8.$1(A.er))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aO(d2,A.ao,c6,c6,C.a([],t))
d2.F(new C.b5(0,-19))
t=d*34
d2.F(new C.ap(t,-26))
d2.F(new C.ap(t,-12))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.dQ.j(0.45)))
d2=c8.$1(A.dQ.j(0.35))
d2.z=A.Rr
d3.af(D.e7s,14,d2)}return!0
case"discoball":d3.bE(D.e7x,K.aH5,c9.$2(A.dy,1.4))
d3.af(A.J,16,d1.$3(D.eOR,A.aQ,A.ak))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.dr,0.7).H()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.dr,0.7).H()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.E(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.d7K[A.o.E(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aE(d0.$5(-14,-4,28,24,5),d1.$3(D.eOP,A.cr,A.ak))
d3.aE(d0.$5(-12,-26,24,20,5),d1.$3(D.eOI,A.aL,A.bK))
d3.bE(D.e7w,D.e7y,c9.$2(A.bq,1.6))
d3.af(D.e7z,2.2,c8.$1(c7?A.av:A.bq))
a1=c7&&A.k.E(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a3z[m]
if(c7)t=a1?A.b8:A.f2
else t=A.ct
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.by(d2.save())
d2.translate(14,0)
d3.ja(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bE(A.J,D.a5J,c9.$2(A.bK,4))
d2.restore()
d3.bE(D.e9W,D.eaf,c9.$2(A.bK,4))
d3.b0(D.ePx,c8.$1(c7?A.b8.j(0.7):A.aJ))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.ay5[m]+1,d2,10,14,2)
p=C.aq(A.bM,A.d5,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.et(s),r)
r.delete()}d3.aE(d0.$5(-24,-6,48,26,8),d1.$3(D.eP4,A.bN,A.bm))
for(m=0;m<2;++m){l=D.ay5[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fl:A.ax).H()
t.drawRRect(C.et(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cs.j(0.5))
s.z=G.mI
r=s.H()
t.drawRRect(C.et(d2),r)
r.delete()}}d3.bE(D.e85,D.e8m,c9.$2(A.ax,3))
return!0
case"ledstrip":d3.aE(d0.$5(-34,-4,68,10,4),c8.$1(A.ct))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.E(t+v*40,360)
i=c7?new H.mS(1,a3,0.8,1).iI():A.ec
if(c7){s=c8.$1(i.j(0.45))
s.z=G.mI
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aE(d0.$5(-40,-2,6,6,1),c8.$1(A.dy))
return!0
case"pump":d3.aE(d0.$5(-16,-2,32,22,6),d1.$3(D.eOU,A.cA,A.Lc))
d3.af(D.eam,8,c8.$1(A.qV))
d2=d3.a
J.by(d2.save())
d2.translate(-2,9)
d3.ja(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.f9,2.4).H()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
t.F(new C.b5(16,6))
t.F(new C.ap(26,6))
t.F(new C.ap(26,-20))
t.F(new C.ap(10,-20))
d3.aR(t,c9.$2(A.bK,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.E(t+v*0.2,1)
r=c8.$1(A.fW).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.af(D.e8V,3.2,c8.$1(A.fW.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.by(d2.save())
d3.ja(0,-0.15)
d3.aE(d0.$5(-26,-14,40,22,10),d1.$3(D.eP6,A.iU,A.tp))
d3.aE(d0.$5(14,-10,12,14,3),c8.$1(A.ct))
d3.aE(d0.$5(-10,6,12,22,4),c8.$1(A.ec))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cs.j(0.4))
d2.z=G.mI
d3.af(D.e80,8,d2)}return!0
case"headphones":d3.fa(C.ch(A.dE,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bq,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=F.QS[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new C.a9(s,0,s+14,20),A.bu,A.pE).H()
d2.drawRRect(C.et(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=C.bU(new C.v(l,10),10+v*5+A.k.E(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eC.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[C.c0(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new C.v(-4,-8-A.k.E(d5*14,8)),A.km,12)
return!0
case"smartwatch":d3.aE(d0.$5(-8,-30,16,14,3),c8.$1(A.ct))
d3.aE(d0.$5(-8,14,16,14,3),c8.$1(A.ct))
d3.aE(d0.$5(-14,-17,28,32,8),d1.$3(D.eON,A.dy,A.ec))
d3.aE(d0.$5(-11,-14,22,26,6),c8.$1(A.dI))
if(c7){a4=new C.S(Date.now(),0,!1)
d6.$5(d3,A.a.aV(A.o.u(C.dk(a4)),2,"0")+":"+A.a.aV(A.o.u(C.h2(a4)),2,"0"),D.e7D,A.b2,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.aq(A.Eq,A.h3,g)
d2.toString
d6.$5(d3,"\u2665",new C.v(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.E(A.k.bm(d5*2),6)),A.dE,A.c,7)}return!0
case"tablet":d3.aE(d0.$5(-30,-22,60,44,6),c8.$1(L.ml))
d3.aE(d0.$5(-30,-22,60,44,6),c9.$2(A.bK,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.et(a5),$.pz(),!0)
d2.translate(-27,-19)
E.L7(d3,D.eVl,d5,c6)
d2.restore()}else d3.aE(a5,c8.$1(D.vn))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aE(a6,d1.$3(new C.a9(a6.a,a6.b,a6.c,a6.d),A.dM,A.dc))
d3.aE(a6,c9.$2(A.b_,1.2))
d3.af(D.aHu,9,c8.$1(A.ax))
d3.af(D.aHu,6,c9.$2(A.d5,2))
d3.aE(d0.$5(4,-2,14,10,2),c8.$1(A.ax))
d3.aE(d0.$5(-22,-19,44,12,2),c8.$1(A.dI))
d2=A.k.aa(d4.db,1)
t=A.k.aa(c7?d4.dx:d4.e,1)
s=c7?A.b2:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.e8Z,s,8.2)
d3.af(D.e7S,2.4,c8.$1(c7?A.bd:A.aJ))
d6.$5(d3,"IN",D.eag,A.ad,6)
d6.$5(d3,"OUT",D.e8N,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.aq(A.bK,A.av,a7)
t.toString
d3.aE(d2,c8.$1(t))
d3.af(D.e7t,3,c8.$1(A.aJ))
d3.aE(d0.$5(-12,-4,24,18,3),d1.$3(D.eOJ,A.ec,A.hJ))
d6.$5(d3,"7805",D.a5N,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.ddL[m]-1
r=c8.$1(A.e3).H()
d2.drawRect(C.c0(new C.a9(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.E(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.eaI,A.bk,9)
return!0
case"diode":d3.bE(D.aHy,D.aHi,c9.$2(A.e3,2.4))
d3.aE(d0.$5(-14,-7,28,14,6),c8.$1(A.aF.j(0.85)))
d3.b0(D.eOy,c8.$1(A.bk))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dQ.j(0.4))
t.z=A.jv
d3.aE(d2,t)}d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,-4))
d2.F(new C.ap(-8,4))
d2.F(new C.ap(-1,0))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.aW))
d6.$5(d3,"one way",D.ea4,A.aA,8)
return!0
case"ldr":d3.bE(D.aHy,D.a5N,c9.$2(A.e3,2.4))
d3.bE(D.aHn,D.aHi,c9.$2(A.e3,2.4))
d3.af(A.J,12,c8.$1(A.d5))
d3.af(A.J,12,c9.$2(A.ty,1.6))
d2=$.W()
t=C.a([],x.v)
a8=new C.aO(d2.r,A.ao,c6,c6,t)
a8.F(new C.b5(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new C.ap(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bC(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aR(a8,c9.$2(A.bM,1.4))
d2=C.aq(A.bq,A.dQ,d4.f)
d2.toString
d6.$5(d3,"\u2600",new C.v(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.e9X,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.eb
break A}if("sonytv"===d2){t=A.qQ
break A}if("appletv"===d2){t=A.e3
break A}t=F.Es
break A}a9=d2==="lgtv"||d2==="appletv"
d3.aE(d0.$5(-36,-24,72,a9?42:44,6),c8.$1(t))
t=a9?-35:-33
s=a9?-23:-21
p=a9?70:66
a5=d0.$5(t,s,p,a9?40:38,3)
t=a5.a
s=a5.b
if(c7){p=d3.a
J.by(p.save())
p.clipRRect(C.et(a5),$.pz(),!0)
p.translate(t,s)
E.h3f(d3,new C.ar(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.af(D.e8n,1.6,c8.$1(A.b2))}else{d3.aE(a5,c8.$1(D.vn))
p=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
p.F(new C.b5(t,s))
p.F(new C.ap(t+24,s))
p.F(new C.ap(t,s+22))
p.F(new C.bE())
d3.aR(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aE(d0.$5(-22,19,44,3,1.5),c8.$1(A.dy))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=F.mG[m]
s=$.W()
p=C.a([],t)
s=new C.aO(s.r,A.ao,c6,c6,p)
p.push(new C.b5(l*30,20))
p.push(new C.ap(l*22,20))
p.push(new C.ap(l*26,26))
p.push(new C.bE())
r=c8.$1(A.dy).H()
p=s.gbK().a.snapshot()
d2.drawPath((s.e=new C.cC(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.e9A,A.bN,5.5)
break
case"appletv":d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,18))
d2.F(new C.ap(8,18))
d2.F(new C.ap(12,25))
d2.F(new C.ap(-12,25))
d2.F(new C.bE())
d3.aR(d2,c8.$1(D.X9))
d6.$5(d3,"Apple TV",D.e9_,A.bq,4.8)
break
default:d3.aE(d0.$5(-34,19,68,7,3),c8.$1(D.bh9))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dr,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.eaE,F.tm,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.m0.h(0,d2)
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
b7=C.aq(b6,A.c,0.35)
b7.toString
d3.aE(w,d1.$3(new C.a9(p,o,b4,b5),b7,b6))
a5=d0.$5(t+2,s,b2-4,b3-4,3.5)
if(c7){t=d3.a
J.by(t.save())
t.clipRRect(C.et(a5),$.pz(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.L7(d3,new C.ar(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aE(a5,c8.$1(D.vn))
if(b1){t=a5.b
s=a5.d
d3.bE(new C.v(0,t),new C.v(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aE(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.af(new C.v(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aE(d0.$5(-17,-28,34,52,4),c8.$1(A.ec))
d3.aE(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bN))
if(c7){d6.$5(d3,"NGMY",D.eaL,A.ax,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.E(v,4)===3?14:22
r=c8.$1(A.bm).H()
d2.drawRect(C.c0(new C.a9(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.af(A.aH3,1.6,c8.$1(A.ax))}return!0
case"laptop":d3.aE(d0.$5(-30,-28,60,42,4),d1.$3(D.ePf,A.cr,A.bm))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.et(b8),$.pz(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.L7(d3,new C.ar(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aE(b8,c8.$1(D.vn))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-38,16))
d2.F(new C.ap(38,16))
d2.F(new C.ap(34,21))
d2.F(new C.ap(-34,21))
d2.F(new C.bE())
d3.aR(d2,c8.$1(D.X9))
d3.aE(d0.$5(-7,16,14,2,1),c8.$1(A.bm))
return!0
case"imac":d3.aE(d0.$5(-32,-28,64,46,5),d1.$3(D.ePj,A.bL,A.cr))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.et(b9),$.pz(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.L7(d3,new C.ar(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aE(b9,c8.$1(D.vn))
d3.af(D.aGZ,2,c8.$1(A.bK))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,18))
d2.F(new C.ap(6,18))
d2.F(new C.ap(10,26))
d2.F(new C.ap(-10,26))
d2.F(new C.bE())
d3.aR(d2,c8.$1(D.X9))
return!0
case"monitor":d3.aE(d0.$5(-34,-28,68,40,3),c8.$1(A.eb))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.et(c0),$.pz(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.L7(d3,new C.ar(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aE(c0,c8.$1(D.vn))
d3.b0(D.ePp,c8.$1(A.bm))
d3.aE(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dy))
return!0
case"projector":if(c7){d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(14,4))
d2.F(new C.ap(-32,-42))
d2.F(new C.ap(34,-42))
d2.F(new C.bE())
d3.aR(d2,c8.$1(A.dQ.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.by(d2.save())
d2.clipRRect(C.et(c1),$.pz(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.L7(d3,new C.ar(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aE(d0.$5(-26,-4,52,24,6),d1.$3(D.eP7,A.iB,A.dy))
d3.af(D.aH8,7,c8.$1(A.ax))
d3.af(D.aH8,4,c8.$1(c7?A.dQ:A.ct))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dr,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aE(d0.$5(-34,-10,68,32,12),c8.$1(A.ax))
c2=d0.$5(-30,-20,60,28,8)
d3.aE(c2,c8.$1(L.ml))
d3.aE(c2,c9.$2(A.bq,1.2))
if(c7){c3=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
c3.F(new C.b5(-26,4))
c3.F(new C.cW(-10,-14+Math.sin(d5)*3,6,-6))
c3.F(new C.ap(22,-16))
d3.aR(c3,c9.$2(A.aN,2.2))
d2=A.k.E(d5*6,48)
d3.af(new C.v(-26+d2,4-d2*0.1),2.4,c8.$1(A.b2))
d6.$5(d3,""+(88+A.o.E(A.k.bm(d5*2),5)),D.e8W,A.c,10)
d6.$5(d3,"km/h",D.e8T,A.aA,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aE(c4,d1.$3(new C.a9(c4.a,c4.b,c4.c,c4.d),A.dy,A.ec))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.et(c5),$.pz(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.L7(d3,new C.ar(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.bu.j(0.2))
d2.z=A.lv
d3.af(A.J,26,d2)}else d3.aE(c5,c8.$1(A.M))
d3.bE(D.eaq,D.eav,c9.$2(A.bm,4))
d3.bE(D.e8o,D.e8w,c9.$2(A.bm,4))
return!0}return!1},
fJ7:function fJ7(){},
fJ9:function fJ9(){},
fJa:function fJa(){},
fJ8:function fJ8(){},
h5X(d,e,f,g){return new B.aiw(d,g,f,e)},
FA(d,e,f){return new B.baB(d,e,f)},
aiw:function aiw(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aix:function aix(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.ft$=h
_.l4$=i
_.fW$=j
_.fu$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
bGO:function bGO(d,e){this.a=d
this.b=e},
bGP:function bGP(d){this.a=d},
bGN:function bGN(d){this.a=d},
bGQ:function bGQ(){},
bGR:function bGR(d){this.a=d},
bGS:function bGS(d,e,f){this.a=d
this.b=e
this.c=f},
bGM:function bGM(d,e){this.a=d
this.b=e},
bGK:function bGK(d,e){this.a=d
this.b=e},
bGL:function bGL(d,e,f){this.a=d
this.b=e
this.c=f},
bGE:function bGE(d,e){this.a=d
this.b=e},
bGF:function bGF(){},
bGG:function bGG(d,e){this.a=d
this.b=e},
bGH:function bGH(d,e){this.a=d
this.b=e},
bGI:function bGI(d){this.a=d},
bGJ:function bGJ(d){this.a=d},
bH6:function bH6(d){this.a=d},
bH7:function bH7(){},
bGh:function bGh(){},
bH8:function bH8(d,e){this.a=d
this.b=e},
bH5:function bH5(d,e,f){this.a=d
this.b=e
this.c=f},
bH0:function bH0(d){this.a=d},
bGY:function bGY(d,e,f){this.a=d
this.b=e
this.c=f},
bGZ:function bGZ(d,e){this.a=d
this.b=e},
bH1:function bH1(d){this.a=d},
bGW:function bGW(d,e){this.a=d
this.b=e},
bGX:function bGX(d,e){this.a=d
this.b=e},
bH_:function bH_(d){this.a=d},
bH2:function bH2(d){this.a=d},
bGU:function bGU(d,e){this.a=d
this.b=e},
bGV:function bGV(d,e){this.a=d
this.b=e},
bH3:function bH3(d){this.a=d},
bGT:function bGT(d){this.a=d},
bH4:function bH4(d){this.a=d},
bGi:function bGi(d,e){this.a=d
this.b=e},
bGB:function bGB(d,e){this.a=d
this.b=e},
bGD:function bGD(d,e){this.a=d
this.b=e},
bGC:function bGC(d,e){this.a=d
this.b=e},
bGo:function bGo(d,e){this.a=d
this.b=e},
bGp:function bGp(d){this.a=d},
bGn:function bGn(d){this.a=d},
bGq:function bGq(d,e,f){this.a=d
this.b=e
this.c=f},
bGm:function bGm(d,e){this.a=d
this.b=e},
bGt:function bGt(d,e){this.a=d
this.b=e},
bGu:function bGu(d,e){this.a=d
this.b=e},
bGv:function bGv(d,e){this.a=d
this.b=e},
bGw:function bGw(d,e,f){this.a=d
this.b=e
this.c=f},
bGl:function bGl(d,e){this.a=d
this.b=e},
bGx:function bGx(d,e,f){this.a=d
this.b=e
this.c=f},
bGk:function bGk(d,e){this.a=d
this.b=e},
bGy:function bGy(d,e,f){this.a=d
this.b=e
this.c=f},
bGj:function bGj(d,e){this.a=d
this.b=e},
bGz:function bGz(d){this.a=d},
bGA:function bGA(d){this.a=d},
bGr:function bGr(d){this.a=d},
bGs:function bGs(d){this.a=d},
baB:function baB(d,e,f){this.a=d
this.b=e
this.c=f},
fhp:function fhp(){},
fhq:function fhq(){},
fhr:function fhr(){},
fhc:function fhc(){},
fhs:function fhs(){},
fhb:function fhb(){},
fht:function fht(){},
fhg:function fhg(){},
fha:function fha(){},
fhh:function fhh(){},
fh9:function fh9(){},
fhi:function fhi(){},
fh8:function fh8(){},
fhj:function fhj(){},
fh6:function fh6(){},
fh7:function fh7(){},
fhk:function fhk(){},
fh4:function fh4(){},
fh5:function fh5(){},
fhl:function fhl(){},
fh3:function fh3(){},
UV:function UV(d){this.a=d},
aD0:function aD0(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dSs:function dSs(d,e){this.a=d
this.b=e},
dSB:function dSB(d){this.a=d},
dSC:function dSC(){},
dSD:function dSD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSE:function dSE(){},
dSr:function dSr(d){this.a=d},
dSq:function dSq(d,e,f){this.a=d
this.b=e
this.c=f},
dSp:function dSp(d,e){this.a=d
this.b=e},
dSn:function dSn(d){this.a=d},
dSo:function dSo(){},
dSA:function dSA(d){this.a=d},
dSz:function dSz(d){this.a=d},
dSx:function dSx(d,e){this.a=d
this.b=e},
dSv:function dSv(d){this.a=d},
dSw:function dSw(){},
dSy:function dSy(d,e,f){this.a=d
this.b=e
this.c=f},
dSt:function dSt(d,e){this.a=d
this.b=e},
dSu:function dSu(){},
dSG:function dSG(d){this.a=d},
dSH:function dSH(d,e){this.a=d
this.b=e},
dSF:function dSF(){},
dSI:function dSI(d,e){this.a=d
this.b=e},
dSJ:function dSJ(d){this.a=d},
dSK:function dSK(d){this.a=d},
ax7:function ax7(d,e){this.c=d
this.a=e},
b8N:function b8N(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
cBU:function cBU(d){this.a=d},
b8M:function b8M(d,e){this.b=d
this.a=e},
cBT:function cBT(d){this.a=d},
axq:function axq(){},
axr:function axr(){},
aJq:function aJq(){},
bwS:function bwS(){},
ian(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bU(A.wk,23)
$.W()
b8=C.N()
b8.r=A.ax.gp(0)
b9.af(A.wk,25,b8)
b8=C.N()
b8.sar(D.eiK.av(0,v))
b9.af(A.wk,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.bk.gp(0)
o.c=A.o.E(u,5)===0?1.8:1
n=o.H()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.D(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=C.N()
r.r=A.bz.gp(0)
r.c=2
r.d=A.bS
b9.bE(A.wk,new C.v(b8*18,s*18-2),r)
r=C.N()
r.r=A.bk.gp(0)
b9.af(A.wk,3,r)
c2.$5(b9,w?"V":"A",D.eay,A.bk,12)
c2.$5(b9,w?A.k.aa(m,1)+" V":""+A.k.V(m*1000)+" mA",D.ea1,A.ax,9.5)
return!0
case"fan":b8=C.bx(D.eOF,A.hF)
$.W()
s=C.N()
s.r=A.bq.gp(0)
b9.aE(b8,s)
s=C.N()
s.r=A.ak.gp(0)
b9.b0(D.ePq,s)
s=C.N()
s.r=A.M.j(0.6).gp(0)
b9.af(D.wl,22,s)
for(b8=b9.a,u=0;u<4;++u){J.by(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.ch(A.aH2,18,10)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.fW.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c0(s),n)
n.delete()
b8.restore()}b8=C.N()
b8.r=A.bn.gp(0)
b9.af(D.wl,4,b8)
b8=C.N()
b8.b=A.ae
b8.c=2
b8.r=A.cr.gp(0)
b9.af(D.wl,22,b8)
b8=C.N()
b8.b=A.ae
b8.c=0.8
b8.r=A.jj.gp(0)
b9.af(D.wl,14,b8)
return!0
case"speaker":l=C.bx(D.aN1,A.uH)
$.W()
b8=C.N()
b8.sar(D.aoW.av(0,new C.a9(l.a,l.b,l.c,l.d)))
b9.aE(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.N()
b8.sar(D.ej6.av(0,C.bU(A.cB,15)))
b9.af(A.cB,14+k,b8)
b8=C.N()
b8.r=A.dy.gp(0)
b9.af(A.cB,5,b8)
b8=C.N()
b8.r=A.bm.gp(0)
b9.af(D.aH4,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bU(D.e84,6+u*6+A.k.E(b8,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.bY.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c0(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bx(D.ePi,A.uH)
$.W()
b8=C.N()
b8.sar(D.bYd.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
b8=C.bx(D.aN3,A.it)
s=C.N()
s.r=A.hJ.gp(0)
b9.aE(b8,s)
if(b7){i=new C.S(Date.now(),0,!1)
h=C.BX(i)<500?":":" "
g=A.a.aV(A.o.u(C.dk(i)),2,"0")
f=A.a.aV(A.o.u(C.h2(i)),2,"0")
b8=C.N()
b8.r=A.b2.j(0.12).gp(0)
b9.b0(D.aN3,b8)
c2.$5(b9,g+h+f,D.eaj,A.b2,21)}b8=C.N()
b8.r=A.cr.gp(0)
b9.af(D.eai,2.4,b8)
b8=C.N()
b8.r=A.cr.gp(0)
b9.af(D.e88,2.4,b8)
return!0
case"calculator":j=C.bx(D.eOZ,A.he)
$.W()
b8=C.N()
b8.sar(D.bXY.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
b8=C.bx(D.eOT,A.hd)
s=C.N()
s.r=(b7?A.Xl:D.bjb).gp(0)
b9.aE(b8,s)
if(b7)c2.$5(b9,"3.14159",D.ea0,A.Wd,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bx(new C.a9(q,s,q+6,r),A.SN)
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.cc:A.bN).gp(0)
n=p.H()
b8.drawRRect(C.et(q),n)
n.delete()}return!0
case"phone":j=C.bx(D.eOQ,A.he)
$.W()
b8=C.N()
b8.r=L.ml.gp(0)
b9.aE(j,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.9
b8.r=D.agu.gp(0)
b9.aE(j,b8)
a0=C.bx(D.eOH,A.hF)
if(b7){b8=C.N()
b8.sar(D.bZw.av(0,new C.a9(a0.a,a0.b,a0.c,a0.d)))
b9.aE(a0,b8)
b8=b9.a
J.by(b8.save())
b8.clipRRect(C.et(a0),$.pz(),!0)
b8.translate(-12,-25)
E.L7(b9,D.eUX,c1,b6)
b8.restore()
a1=A.k.E(c1*0.12,1)
b8=C.bx(D.eOE,A.hd)
s=C.N()
s.r=A.aW.gp(0)
b9.aE(b8,s)
s=C.N()
s.r=A.b2.gp(0)
b9.b0(new C.a9(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.e9i,A.c,6)}else{b8=C.N()
b8.r=D.vn.gp(0)
b9.aE(a0,b8)}b8=C.bx(D.ePA,D.ejf)
s=C.N()
s.r=A.w.gp(0)
b9.aE(b8,s)
return!0
case"router":j=C.bx(D.ePh,A.qq)
$.W()
b8=C.N()
b8.sar(D.bYu.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aE(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=F.QS[a2]
s=a3<0?-4:4
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.ct.gp(0)
r.c=4
r.d=A.bS
n=r.H()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.E(A.k.bm(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(a4?A.bd:A.aJ).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bU(D.wl,8+u*6+A.k.E(s,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.hm.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c0(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bx(D.eOY,A.hF)
s=$.W()
r=C.N()
r.r=A.ec.gp(0)
b9.aE(b8,r)
if(b7){b8=C.N()
b8.r=A.av.j(0.5*a5).gp(0)
b8.z=A.zb
b9.af(A.wk,34,b8)}a6=new C.aO(s.r,A.ao,b6,b6,C.a([],x.v))
a6.F(new C.b5(-16,12))
a6.F(new C.ap(-16,-2))
a6.F(new C.cW(0,-30,16,-2))
a6.F(new C.ap(16,12))
a6.F(new C.bE())
b8=C.N()
b8.r=C.aq(A.er,D.bbu,a5).gp(0)
b9.aR(a6,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.4
b8.r=A.bX.gp(0)
b9.aR(a6,b8)
if(b7){b8=b9.a
J.by(b8.save())
b8.translate(0,-2)
b9.ja(0,c1*7)
s=C.N()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bE(A.J,D.aH4,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.by(b8.save())
b8.translate(0,a7)
s=$.W().r
r=x.v
j=new C.aO(s,A.ao,b6,b6,C.a([],r))
j.F(new C.b5(-28,8))
j.F(new C.ap(-28,-2))
j.F(new C.ap(-16,-4))
j.F(new C.ap(-10,-16))
j.F(new C.ap(10,-16))
j.F(new C.ap(18,-4))
j.F(new C.ap(28,-2))
j.F(new C.ap(28,8))
j.F(new C.bE())
q=C.N()
q.sar(D.bWz.av(0,D.ePa))
b9.aR(j,q)
q=new C.aO(s,A.ao,b6,b6,C.a([],r))
q.F(new C.b5(-8,-4))
q.F(new C.ap(-4,-13))
q.F(new C.ap(4,-13))
q.F(new C.ap(4,-4))
q.F(new C.bE())
p=C.N()
p.r=A.f9.gp(0)
b9.aR(q,p)
r=new C.aO(s,A.ao,b6,b6,C.a([],r))
r.F(new C.b5(8,-4))
r.F(new C.ap(8,-13))
r.F(new C.ap(11,-13))
r.F(new C.ap(15,-4))
r.F(new C.bE())
s=C.N()
s.r=A.f9.gp(0)
b9.aR(r,s)
for(a2=0;a2<2;++a2){a3=F.ay6[a2]
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.ax.gp(0)
n=s.H()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.by(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.bN.gp(0)
q.c=1.6
n=q.H()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.E(s+u*8,14)
q=-4+u*5
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.aA.gp(0)
p.c=1.6
n=p.H()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.W().r
s=x.v
j=new C.aO(b8,A.ao,b6,b6,C.a([],s))
j.F(new C.b5(-18,20))
j.F(new C.ap(-14,-12))
j.F(new C.cW(0,-20,14,-12))
j.F(new C.ap(18,20))
j.F(new C.bE())
r=C.N()
r.sar(D.bXE.av(0,D.eOX))
b9.aR(j,r)
r=new C.aO(b8,A.ao,b6,b6,C.a([],s))
r.F(new C.b5(14,-10))
r.F(new C.ap(30,-22))
r.F(new C.ap(32,-18))
r.F(new C.ap(16,-4))
r.F(new C.bE())
q=C.N()
q.r=A.e3.gp(0)
b9.aR(r,q)
s=new C.aO(b8,A.ao,b6,b6,C.a([],s))
s.F(new C.b5(-14,-8))
s.F(new C.cW(-34,-6,-18,12))
b8=C.N()
b8.b=A.ae
b8.c=5
b8.r=A.ax.gp(0)
b9.aR(s,b8)
b8=C.N()
if(b7){s=C.aq(A.cs,A.tw,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.ec
b8.r=s.gp(0)
b9.b0(D.eOW,b8)
if(b7){b8=C.N()
b8.r=A.cs.j(0.3).gp(0)
b8.z=A.lv
b9.af(A.aH0,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.E(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.N()
b8.r=A.ax.gp(0)
b9.af(D.e7q,3,b8)
return!0
case"lamp":if(b7){u=A.k.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new C.aO($.W().r,A.ao,b6,b6,C.a([],x.v))
b8.F(new C.b5(-10,-14))
b8.F(new C.ap(-30,24))
b8.F(new C.ap(10,24))
b8.F(new C.ap(8,-14))
b8.F(new C.bE())
s=C.N()
s.r=A.dQ.j(0.28*u).gp(0)
b9.aR(b8,s)
s=C.N()
s.r=A.dQ.j(0.5*u).gp(0)
s.z=Z.HI
b9.af(D.ean,24,s)}b8=C.bx(D.ePw,A.hF)
s=$.W()
r=C.N()
r.r=A.ec.gp(0)
b9.aE(b8,r)
r=C.N()
r.r=A.dy.gp(0)
r.c=3
r.d=A.bS
b9.bE(D.e7E,D.aHa,r)
r=C.N()
r.r=A.dy.gp(0)
r.c=3
r.d=A.bS
b9.bE(D.aHa,D.eao,r)
a9=new C.aO(s.r,A.ao,b6,b6,C.a([],x.v))
a9.F(new C.b5(-14,-16))
a9.F(new C.ap(6,-26))
a9.F(new C.ap(10,-12))
a9.F(new C.ap(-10,-6))
a9.F(new C.bE())
s=C.N()
s.r=(b7?A.aM:A.k_).gp(0)
b9.aR(a9,s)
b8=C.N()
b8.r=(b7?A.c:A.bm).gp(0)
b9.af(D.eap,4,b8)
return!0
case"lights":b8=$.W().r
s=x.v
b0=new C.aO(b8,A.ao,b6,b6,C.a([],s))
b0.F(new C.b5(-34,-6))
b0.F(new C.cW(0,22,34,-6))
r=C.N()
r.b=A.ae
r.c=2
r.r=A.hk.gp(0)
b9.aR(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.E(q+u*0.7,1.8)<1.1
if(b2){b3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b3.r=D.a2z[u].j(0.6).gp(0)
b3.z=A.Rr
n=b3.H()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=C.a([],s)
b4=new C.aO(b8,A.ao,b6,b6,b3)
b3.push(new C.b5(p-3,o))
b3.push(new C.ap(p+3,o))
b5=o+11
b3.push(new C.ap(p+5,b5))
b3.push(new C.cW(p,o+17,p-5,b5))
b3.push(new C.bE())
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
if(b2)o=D.a2z[u]
else{o=C.aq(D.a2z[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbK().a.snapshot()
r.drawPath((b4.e=new C.cC(p)).a,n)
n.delete()}return!0}return B.iam(b9,c0,c1,c2)},
fO:function fO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h1k(d){var w=D.m0.h(0,d)
return(w==null?null:w.b)===D.zB},
iby(d,e,f){return C.a6(d,!1).cm(C.uK(null,!1,!0,!0,new B.fNO(e,f),A.eM,null,A.pT,new B.fNP(),x.H))},
Jg:function Jg(d,e){this.a=d
this.b=e},
m8:function m8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fNO:function fNO(d,e){this.a=d
this.b=e},
fNP:function fNP(){},
UC:function UC(d,e,f){this.c=d
this.d=e
this.a=f},
bje:function bje(d,e){var _=this
_.d=$
_.e=null
_.bt$=d
_.a9$=e
_.c=_.a=null},
dOo:function dOo(d){this.a=d},
dOn:function dOn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOl:function dOl(){},
dOm:function dOm(d){this.a=d},
dOk:function dOk(d){this.a=d},
dOj:function dOj(d,e){this.a=d
this.b=e},
dOi:function dOi(d,e){this.a=d
this.b=e},
dOh:function dOh(d){this.a=d},
dOg:function dOg(d){this.a=d},
dOc:function dOc(d){this.a=d},
dOb:function dOb(d){this.a=d},
dOf:function dOf(d,e,f){this.a=d
this.b=e
this.c=f},
dOe:function dOe(d){this.a=d},
dOd:function dOd(d){this.a=d},
buX:function buX(d,e,f){this.b=d
this.c=e
this.a=f},
aew:function aew(d,e,f){this.b=d
this.c=e
this.a=f},
aLc:function aLc(){},
fmd(d,e,f,g){var w=null,v=C.n(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.x(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zT,A.L,w,w),A.aB,C.bV(A.fT,g,A.br,0,8)],x.p),A.m,w,A.e,A.N,0,A.p),A.f,w,w,new C.o(D.Wm,w,u,v,w,w,A.n),w,w,w,A.ex,A.a9,w,w,w),w,w,w)},
h1r(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eE()
b4.dt(b5*977+13)
w=A.o.D(1+A.o.an(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aw(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.U(u,t)
m=w
l=0
k=N.mL
j=!0
i=0
for(;;){if(!(j&&i<12))break
A:{++i
h=2+b4.aw(4)
for(g=k.a,f=k.b,e=0;e<h;r=a0,l=d){d=l+g
a0=r+f
if(d<0||a0<0||d>=7||a0>=7){e=99
break}a1=a0*7+d
if(A.d.t(p,a1)||a1===q){j=!1
break}p.push(a1);++e}if(!j||e>=99||m===0)break
a2=b4.hi()?new C.z(f,-g):new C.z(-f,g)
a3=new C.z(-f,-g).A(0,a2)
a4=l+a2.a
a5=r+a2.b
if(a4<0||a5<0||a4>=7||a5>=7)break A
o.push(r*7+l);--m
g=A.d.gal(o)
n.n(0,g,a3?"/":"\\")
k=a2}}if(!j||o.length<w||p.length<5)continue
g=C.a([],v)
for(f=p.length,a6=0;a6<p.length;p.length===f||(0,C.K)(p),++a6){a7=p[a6]
if(!A.d.t(o,a7))g.push(a7)}if(g.length<3)continue
a8=A.o.D(2+A.o.an(b5,8),2,4)
a9=C.ev([A.d.gal(g)],u)
A.d.fp(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.K)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.L(0,a7)}b0=C.aX(u)
b1=3+A.o.an(b5,3)
v=q+1
b2=0
for(;;){if(b0.a<b1){b3=b2+1
g=b2<200
b2=b3}else g=!1
if(!g)break
B:{a7=b4.aw(49)
if(A.d.t(p,a7)||a7===q||a9.t(0,a7)||A.d.t(o,a7))break B
if(a7===v)break B
b0.L(0,a7)}}v=b5>=10?1:0
return new B.aWj(b0,a9,C.U(u,t),q,N.mL,w+v)}return new B.aWj(C.aX(u),C.ev([25],u),C.U(u,t),21,N.mL,1)},
hqX(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aX(x.S),n=d.e,m=A.o.E(n,7),l=A.o.an(n,7),k=d.f
p.push(n)
for(n=d.c,w=d.b,v=d.d,u=0;u<200;++u){t=k.a
m+=t
s=k.b
l+=s
if(m<0||l<0||m>=7||l>=7)break
r=l*7+m
if(w.t(0,r))break
p.push(r)
if(n.t(0,r))o.L(0,r)
q=e.h(0,r)
if(q==null)q=v.h(0,r)
if(q==="/")k=new C.z(-s,-t)
if(q==="\\")k=new C.z(k.b,k.a)}return new C.boa(p,o)},
hmf(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aWj:function aWj(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
Vq:function Vq(d){this.a=d},
bjO:function bjO(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.ft$=g
_.l4$=h
_.fW$=i
_.fu$=j
_.bt$=k
_.a9$=l
_.c=_.a=null},
eb4:function eb4(d){this.a=d},
eb3:function eb3(d,e){this.a=d
this.b=e},
eb5:function eb5(){},
eaV:function eaV(d,e){this.a=d
this.b=e},
eaW:function eaW(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eaZ:function eaZ(d,e){this.a=d
this.b=e},
eaX:function eaX(d){this.a=d},
eaY:function eaY(d){this.a=d},
eb_:function eb_(d){this.a=d},
eb0:function eb0(d){this.a=d},
eb1:function eb1(d){this.a=d},
eb2:function eb2(d,e){this.a=d
this.b=e},
bgO:function bgO(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
dhD:function dhD(d,e,f){this.a=d
this.b=e
this.c=f},
dhG:function dhG(d,e,f){this.a=d
this.b=e
this.c=f},
dhE:function dhE(d){this.a=d},
dhF:function dhF(d){this.a=d},
Vs:function Vs(d){this.a=d},
aDF:function aDF(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.ft$=g
_.l4$=h
_.fW$=i
_.fu$=j
_.bt$=k
_.a9$=l
_.c=_.a=null},
ebn:function ebn(d){this.a=d},
ebm:function ebm(d,e){this.a=d
this.b=e},
ebo:function ebo(){},
eb8:function eb8(){},
ebh:function ebh(d,e){this.a=d
this.b=e},
ebe:function ebe(d){this.a=d},
eba:function eba(d){this.a=d},
ebf:function ebf(d){this.a=d},
ebg:function ebg(d){this.a=d},
eb9:function eb9(d){this.a=d},
ebi:function ebi(d){this.a=d},
ebd:function ebd(d,e){this.a=d
this.b=e},
ebj:function ebj(d){this.a=d},
ebc:function ebc(d,e){this.a=d
this.b=e},
ebk:function ebk(d){this.a=d},
ebb:function ebb(d,e){this.a=d
this.b=e},
ebl:function ebl(d){this.a=d},
bh2:function bh2(d,e){this.b=d
this.a=e},
aLE:function aLE(){},
bwX:function bwX(){},
aLF:function aLF(){},
bwY:function bwY(){},
a0H(d,e,f,g,h,i){return new B.btM(d,e,f,g,h,i)},
btM:function btM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fi6:function fi6(){},
fi7:function fi7(){},
fi8:function fi8(){},
fi9:function fi9(){},
fia:function fia(){},
fib:function fib(){},
fic:function fic(){},
fid:function fid(){},
a8b:function a8b(d){this.a=d},
cfI:function cfI(d){this.a=d},
cfJ:function cfJ(){},
cfH:function cfH(d,e){this.a=d
this.b=e},
cfG:function cfG(d){this.a=d},
Wi:function Wi(d){this.a=d},
aEw:function aEw(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.ft$=f
_.l4$=g
_.fW$=h
_.fu$=i
_.bt$=j
_.a9$=k
_.c=_.a=null},
eKD:function eKD(d){this.a=d},
eKz:function eKz(d){this.a=d},
eKy:function eKy(d,e){this.a=d
this.b=e},
eKB:function eKB(d,e){this.a=d
this.b=e},
eKA:function eKA(d,e){this.a=d
this.b=e},
eKC:function eKC(d){this.a=d},
bv8:function bv8(d,e,f){this.b=d
this.c=e
this.a=f},
V1:function V1(d){this.a=d},
bjn:function bjn(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.ft$=d
_.l4$=e
_.fW$=f
_.fu$=g
_.bt$=h
_.a9$=i
_.c=_.a=null},
dUG:function dUG(){},
dUH:function dUH(){},
dUB:function dUB(d,e){this.a=d
this.b=e},
dUD:function dUD(d,e){this.a=d
this.b=e},
dUE:function dUE(d){this.a=d},
dUC:function dUC(d){this.a=d},
dUF:function dUF(d){this.a=d},
bpX:function bpX(d,e,f){this.b=d
this.c=e
this.a=f},
Uc:function Uc(d){this.a=d},
bj_:function bj_(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.ft$=d
_.l4$=e
_.fW$=f
_.fu$=g
_.bt$=h
_.a9$=i
_.c=_.a=null},
dFy:function dFy(){},
dFz:function dFz(){},
dFt:function dFt(){},
dFw:function dFw(d,e){this.a=d
this.b=e},
dFv:function dFv(d,e){this.a=d
this.b=e},
dFx:function dFx(d){this.a=d},
dFu:function dFu(d){this.a=d},
aHV:function aHV(d,e,f){this.a=d
this.b=e
this.c=f},
UT:function UT(d){this.a=d},
bjh:function bjh(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dRX:function dRX(d,e){this.a=d
this.b=e},
dRY:function dRY(d){this.a=d},
dRW:function dRW(d,e){this.a=d
this.b=e},
dRZ:function dRZ(d){this.a=d},
dRV:function dRV(d,e){this.a=d
this.b=e},
dS_:function dS_(d){this.a=d},
dRU:function dRU(d,e){this.a=d
this.b=e},
dS0:function dS0(d,e){this.a=d
this.b=e},
dRT:function dRT(d,e){this.a=d
this.b=e},
dS1:function dS1(d){this.a=d},
dRS:function dRS(d,e){this.a=d
this.b=e},
dS2:function dS2(d){this.a=d},
dRR:function dRR(d){this.a=d},
dS3:function dS3(d){this.a=d},
dRQ:function dRQ(d){this.a=d},
dS4:function dS4(d){this.a=d},
dS5:function dS5(d){this.a=d},
dRP:function dRP(d){this.a=d},
blj:function blj(d,e,f){this.b=d
this.c=e
this.a=f},
VE:function VE(d){this.a=d},
aDP:function aDP(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
egK:function egK(d,e){this.a=d
this.b=e},
egL:function egL(d,e,f){this.a=d
this.b=e
this.c=f},
egJ:function egJ(d,e,f){this.a=d
this.b=e
this.c=f},
egM:function egM(d){this.a=d},
egI:function egI(d){this.a=d},
egQ:function egQ(d){this.a=d},
egP:function egP(d,e){this.a=d
this.b=e},
egO:function egO(d,e){this.a=d
this.b=e},
egR:function egR(d,e){this.a=d
this.b=e},
egN:function egN(d,e){this.a=d
this.b=e},
egS:function egS(d){this.a=d},
VR:function VR(d){this.a=d},
aEa:function aEa(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
erD:function erD(d){this.a=d},
erE:function erE(d){this.a=d},
erB:function erB(d,e){this.a=d
this.b=e},
erC:function erC(d){this.a=d},
erA:function erA(d){this.a=d},
erF:function erF(d){this.a=d},
erG:function erG(d){this.a=d},
erH:function erH(d){this.a=d},
erI:function erI(d,e){this.a=d
this.b=e},
Wb:function Wb(d){this.a=d},
bkv:function bkv(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eFV:function eFV(){},
eG3:function eG3(){},
eG_:function eG_(d){this.a=d},
eFZ:function eFZ(){},
eG0:function eG0(d,e){this.a=d
this.b=e},
eFY:function eFY(d,e){this.a=d
this.b=e},
eG1:function eG1(d){this.a=d},
eFX:function eFX(d,e){this.a=d
this.b=e},
eG2:function eG2(d){this.a=d},
eFW:function eFW(d){this.a=d},
VC:function VC(d){this.a=d},
bjZ:function bjZ(d,e,f,g,h,i,j,k){var _=this
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
_.ft$=f
_.l4$=g
_.fW$=h
_.fu$=i
_.bt$=j
_.a9$=k
_.c=_.a=null},
efp:function efp(){},
efq:function efq(){},
efi:function efi(d){this.a=d},
efh:function efh(d){this.a=d},
efj:function efj(d){this.a=d},
efg:function efg(d){this.a=d},
efk:function efk(d){this.a=d},
eff:function eff(d){this.a=d},
efl:function efl(d,e){this.a=d
this.b=e},
efe:function efe(d,e){this.a=d
this.b=e},
efm:function efm(d){this.a=d},
efd:function efd(d,e){this.a=d
this.b=e},
efn:function efn(d){this.a=d},
efc:function efc(d,e){this.a=d
this.b=e},
efo:function efo(d){this.a=d},
efb:function efb(d,e){this.a=d
this.b=e},
bd_:function bd_(d,e,f){this.c=d
this.d=e
this.a=f},
aL_:function aL_(){},
bwO:function bwO(){},
aLi:function aLi(){},
bwT:function bwT(){},
aLN:function aLN(){},
bx2:function bx2(){},
aMg:function aMg(){},
bxe:function bxe(){},
jL(d,e,f,g,h,i){return new B.b6z(h,d,f,g,i,e,null)},
hqM(d,e,f,g){var w=null
return C.ca(w,w,!0,w,new B.fRD(g,e,f),d,w,!0,!0,x.H)},
hH(d,e,f,g,h,i,j){return new B.avy(f,j,i,h,g,d,e,null)},
qU(d,e,f){return B.icn(d,e,f)},
icn(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qU=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aW.ak$.x.h(0,e)
n=n==null?null:n.gba()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.m1(2),$async$qU)
case 7:q=h
w=8
return C.b(q.hv(A.h0),$async$qU)
case 8:p=h
if(p==null){w=1
break}o=J.eX(A.dD.gaP(p))
w=9
return C.b(B.cqD(C.a([B.hfH(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qU)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.J(x.gV).f.S(D.aP9)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qU,v)},
li(d,e,f,g){var w,v=$.arF
if(v==="music")return E.dG(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dG(261.63*v,w,f,0,g,"sine")}return B.w2(v,e,f,g)},
w2(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return E.dG(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return E.dG(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return E.dG(140+A.o.E(e,12)*9,"",150,0.9,g,v)
case"bubble":return E.dG(260+A.o.E(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":E.dG(t,"",160,-0.7,g*0.4,w)
return E.dG(900,"",90,0,g*0.45,u)
case"zap":return E.dG(t*3,"",150,1.6,g*0.4,"square")
case"click":return E.dG(2600+A.o.E(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":E.dG(320,"",220,-0.7,g*0.35,v)
return E.dG(1500,"",200,0,g*0.22,u)
case"organic":return E.dG(85+A.o.E(e,12)*5,"",190,1.1,g,v)
case"lab":return E.dG(t*1.6,"",140,-0.3,g*0.55,w)
default:return E.dG(t,"",s,0,g*0.5,w)}},
BK(d,e,f,g){var w,v,u,t,s,r,q,p=$.arF
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.K)(e),++w)B.li(d,e[w],f,g)
return}for(p=C.db(e,0,C.dI(4,"count",x.S),C.T(e).c),v=p.$ti,p=new C.bQ(p,p.gM(0),v.k("bQ<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.li(d,s,f,g)
else C.bN(new C.ba(1000*q),new B.cfE(d,s,f,g),u)}},
a8a(d,e){var w="sine",v="noise"
switch(d){case"kick":E.dG(95,"",200,1.8,e,w)
break
case"snare":E.dG(220,"",140,0,e*0.65,v)
break
case"hat":E.dG(5000,"",50,0,e*0.35,v)
break
case"open":E.dG(5200,"",220,0,e*0.35,v)
break
case"clap":E.dG(1100,"",100,0,e*0.5,v)
break
case"tom":E.dG(150,"",230,1,e,w)
break
case"low":E.dG(100,"",260,0.9,e,w)
break
case"rim":E.dG(1700,"",60,0,e*0.4,"square")
break
case"cow":E.dG(820,"",240,0,e*0.3,"square")
break
case"crash":E.dG(3200,"",650,0,e*0.4,v)
break
case"shake":E.dG(7000,"",90,0,e*0.3,v)
break
default:E.dG(60,"",300,0,e,w)}},
zw(d){return B.hHN(d)},
hHN(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$zw=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.ay(),$async$zw)
case 7:r=f
q=C.aU(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.U(x.N,x.z)
w=1
break}p=A.S.aK(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?C.a2(p,o,n):C.U(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=C.U(x.N,x.z)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$zw,v)},
w_(d,e){return B.hHO(d,e)},
hHO(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$w_=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$w_)
case 6:s=g
w=7
return C.b(s.aq("String","ngmy_play_progress_v1_"+d,A.S.ao(e,null)),$async$w_)
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
return C.i($async$w_,v)},
b6z:function b6z(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
csC:function csC(d){this.a=d},
csD:function csD(d,e){this.a=d
this.b=e},
fRD:function fRD(d,e,f){this.a=d
this.b=e
this.c=f},
fRC:function fRC(d){this.a=d},
dB:function dB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
csy:function csy(d){this.a=d},
eV:function eV(d,e,f){this.c=d
this.d=e
this.a=f},
avy:function avy(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
fj:function fj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
csx:function csx(d){this.a=d},
Ff:function Ff(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
csE:function csE(d){this.a=d},
mE:function mE(){},
csz:function csz(d,e,f){this.a=d
this.b=e
this.c=f},
csB:function csB(d){this.a=d},
csA:function csA(){},
cfE:function cfE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cvd(){var w=0,v=C.j(x.cL),u,t
var $async$cvd=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.qV().bfX("assets/data/world110.json"),$async$cvd)
case 3:u=t.hMm(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cvd,v)},
hMm(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.S.aK(0,a2,null)),a1=C.a([],x.F)
for(w=J.aV(a0),v=x.n,u=x.b,t=x.a,s=x.gO;w.C();){r=t.a(w.gR(w))
q=C.a([],s)
for(p=J.a4(r),o=J.aV(d.a(p.h(r,"r")));o.C();){n=o.gR(o)
m=C.a([],u)
for(l=J.aV(d.a(n));l.C();){k=l.gR(l)
j=J.a4(k)
m.push(C.a([C.dT(j.h(k,0)),C.dT(j.h(k,1))],v))}q.push(m)}o=C.cQ(p.h(r,"n"))
m=C.cQ(p.h(r,"a"))
l=C.cQ(p.h(r,"ct"))
j=C.cQ(p.h(r,"sr"))
i=C.dT(p.h(r,"pop"))
h=C.dT(p.h(r,"gdp"))
g=C.cQ(p.h(r,"inc"))
f=C.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aQc(g,f,"",0)
f=C.dT(J.q(p.h(r,"c"),0))
p=C.dT(J.q(p.h(r,"c"),1))
e=new B.aaY(o,m,l,j,i,h,g,f,p,q)
e.byi(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.aaZ(a1)},
fvb(d){if(d>=1e12)return A.k.aa(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.aa(d/1e9,2)+" billion"
if(d>=1e6)return A.k.aa(d/1e6,1)+" million"
if(d>=1000)return A.k.aa(d/1000,1)+" thousand"
return A.k.aa(d,0)},
GO(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.E(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
aaY:function aaY(d,e,f,g,h,i,j,k,l,m){var _=this
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
aaZ:function aaZ(d){this.a=d},
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
P1:function P1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
y1:function y1(d,e,f){this.a=d
this.b=e
this.c=f},
P0:function P0(d){this.a=0
this.b=d
this.c=0},
hOf(d,e,f){return $.hOg.c9(0,d+"|"+C.u(e)+"|"+f.l(),new B.ddm(d,e,f))},
V8:function V8(d){this.a=d},
aDb:function aDb(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.ft$=j
_.l4$=k
_.fW$=l
_.fu$=m
_.bt$=n
_.a9$=o
_.c=_.a=null},
dXo:function dXo(d){this.a=d},
dXn:function dXn(d,e){this.a=d
this.b=e},
dWR:function dWR(d){this.a=d},
dWP:function dWP(d){this.a=d},
dWQ:function dWQ(d,e,f){this.a=d
this.b=e
this.c=f},
dWO:function dWO(d){this.a=d},
dWN:function dWN(){},
dWM:function dWM(d){this.a=d},
dX9:function dX9(d,e){this.a=d
this.b=e},
dXa:function dXa(d,e){this.a=d
this.b=e},
dWZ:function dWZ(d){this.a=d},
dX_:function dX_(d){this.a=d},
dWY:function dWY(d){this.a=d},
dX0:function dX0(d){this.a=d},
dWS:function dWS(d,e){this.a=d
this.b=e},
dWT:function dWT(d){this.a=d},
dXb:function dXb(d,e){this.a=d
this.b=e},
dWX:function dWX(d,e){this.a=d
this.b=e},
dXf:function dXf(d){this.a=d},
dX8:function dX8(d){this.a=d},
dXg:function dXg(d,e){this.a=d
this.b=e},
dX7:function dX7(d,e){this.a=d
this.b=e},
dXh:function dXh(d){this.a=d},
dX6:function dX6(d,e){this.a=d
this.b=e},
dXi:function dXi(d){this.a=d},
dX5:function dX5(d,e){this.a=d
this.b=e},
dXj:function dXj(d){this.a=d},
dX4:function dX4(d,e){this.a=d
this.b=e},
dXk:function dXk(d){this.a=d},
dX3:function dX3(d,e){this.a=d
this.b=e},
dXl:function dXl(d){this.a=d},
dX2:function dX2(d){this.a=d},
dXm:function dXm(d){this.a=d},
dX1:function dX1(d){this.a=d},
dXc:function dXc(d){this.a=d},
dWW:function dWW(d){this.a=d},
dXd:function dXd(d){this.a=d},
dWV:function dWV(d){this.a=d},
dXe:function dXe(d){this.a=d},
dWU:function dWU(d){this.a=d},
dWL:function dWL(){},
dWK:function dWK(d){this.a=d},
dWJ:function dWJ(d){this.a=d},
bfe:function bfe(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ddm:function ddm(d,e,f){this.a=d
this.b=e
this.c=f},
ddn:function ddn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aLo:function aLo(){},
aLp:function aLp(){},
af3(d,e,f,g,h){return new B.btH(d,e,f,g,h)},
btH:function btH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fi_:function fi_(){},
fi0:function fi0(){},
fi1:function fi1(){},
fi2:function fi2(){},
fi3:function fi3(){},
fi4:function fi4(){},
fi5:function fi5(){},
We:function We(d){this.a=d},
bkz:function bkz(){this.d=$
this.c=this.a=null},
eGO:function eGO(d){this.a=d},
eGP:function eGP(d){this.a=d},
eGN:function eGN(d){this.a=d},
eGQ:function eGQ(){},
eGM:function eGM(d,e){this.a=d
this.b=e},
eGL:function eGL(d){this.a=d},
hOH(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eE()
v.dt(w)
t.push(v.aj()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eE()
v.dt(w+900)
u.push(2.2+v.aj())}return new B.bkl(new C.cs(null,x.A),new B.P0(A.cG),A.J,A.aw,t,u,$,A.bx,0,C.a([],x.X),null,null)},
hOJ(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hOI(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hgT(d,e,f){return $.hPj.c9(0,d+"|"+C.u(e)+"|"+f.l(),new B.f0b(d,e,f))},
W_:function W_(d){this.a=d},
bkl:function bkl(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.ft$=j
_.l4$=k
_.fW$=l
_.fu$=m
_.bt$=n
_.a9$=o
_.c=_.a=null},
eyR:function eyR(d,e){this.a=d
this.b=e},
ez1:function ez1(d,e){this.a=d
this.b=e},
ez2:function ez2(d,e){this.a=d
this.b=e},
eyZ:function eyZ(d){this.a=d},
ez_:function ez_(d){this.a=d},
ez0:function ez0(d){this.a=d},
ez3:function ez3(d){this.a=d},
eyY:function eyY(d){this.a=d},
ez4:function ez4(d,e){this.a=d
this.b=e},
ez5:function ez5(d){this.a=d},
eyX:function eyX(d,e){this.a=d
this.b=e},
ez6:function ez6(d){this.a=d},
eyW:function eyW(d,e){this.a=d
this.b=e},
ez7:function ez7(d){this.a=d},
eyV:function eyV(d){this.a=d},
ez8:function ez8(d){this.a=d},
eyU:function eyU(d){this.a=d},
ez9:function ez9(d){this.a=d},
eyT:function eyT(d){this.a=d},
eza:function eza(d){this.a=d},
eyS:function eyS(d){this.a=d},
eyQ:function eyQ(){},
eyP:function eyP(){},
eyO:function eyO(d){this.a=d},
eyN:function eyN(d){this.a=d},
brJ:function brJ(d,e){this.b=d
this.a=e},
f0b:function f0b(d,e,f){this.a=d
this.b=e
this.c=f},
f0c:function f0c(){},
f0d:function f0d(){},
V9:function V9(d){this.a=d},
aDc:function aDc(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.ft$=k
_.l4$=l
_.fW$=m
_.fu$=n
_.bt$=o
_.a9$=p
_.c=_.a=null},
dXs:function dXs(){},
dXV:function dXV(){},
dXH:function dXH(d,e){this.a=d
this.b=e},
dXy:function dXy(d,e){this.a=d
this.b=e},
dXI:function dXI(d){this.a=d},
dXx:function dXx(d){this.a=d},
dXJ:function dXJ(d){this.a=d},
dXG:function dXG(d){this.a=d},
dXN:function dXN(d){this.a=d},
dXF:function dXF(d){this.a=d},
dXO:function dXO(d){this.a=d},
dXE:function dXE(d,e){this.a=d
this.b=e},
dXP:function dXP(d){this.a=d},
dXQ:function dXQ(d){this.a=d},
dXD:function dXD(d,e){this.a=d
this.b=e},
dXR:function dXR(d){this.a=d},
dXC:function dXC(d,e){this.a=d
this.b=e},
dXS:function dXS(d){this.a=d},
dXB:function dXB(d,e){this.a=d
this.b=e},
dXT:function dXT(d){this.a=d},
dXA:function dXA(d,e){this.a=d
this.b=e},
dXU:function dXU(d){this.a=d},
dXz:function dXz(d){this.a=d},
dXK:function dXK(d){this.a=d},
dXw:function dXw(d){this.a=d},
dXL:function dXL(d){this.a=d},
dXv:function dXv(d){this.a=d},
dXM:function dXM(d){this.a=d},
dXu:function dXu(d){this.a=d},
dXr:function dXr(d){this.a=d},
dXq:function dXq(){},
dXt:function dXt(d,e){this.a=d
this.b=e},
dXp:function dXp(d){this.a=d},
baq:function baq(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
VS:function VS(d){this.a=d},
bki:function bki(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.ft$=e
_.l4$=f
_.fW$=g
_.fu$=h
_.bt$=i
_.a9$=j
_.c=_.a=null},
erL:function erL(d,e){this.a=d
this.b=e},
erM:function erM(d,e){this.a=d
this.b=e},
erK:function erK(d,e){this.a=d
this.b=e},
erN:function erN(d,e){this.a=d
this.b=e},
erJ:function erJ(d,e){this.a=d
this.b=e},
brh:function brh(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eZl:function eZl(d){this.a=d},
aLq:function aLq(){},
bwV:function bwV(){},
aLZ:function aLZ(){},
bx8:function bx8(){},
aM1:function aM1(){},
bxa:function bxa(){},
hOF(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eE()
v.dt(w)
v=v.aj()
u=new C.eE()
u.dt(w+500)
s.push(new C.v(v,u.aj()))}return new B.biZ(new C.cs(null,x.A),new B.P0(A.cG),t,A.aw,s,$,A.bx,0,C.a([],x.X),null,null)},
Pv:function Pv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Ua:function Ua(d){this.a=d},
biZ:function biZ(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.ft$=i
_.l4$=j
_.fW$=k
_.fu$=l
_.bt$=m
_.a9$=n
_.c=_.a=null},
dF_:function dF_(){},
dEO:function dEO(){},
dEP:function dEP(d,e){this.a=d
this.b=e},
dEQ:function dEQ(d,e){this.a=d
this.b=e},
dEN:function dEN(d){this.a=d},
dEM:function dEM(d){this.a=d},
dES:function dES(d){this.a=d},
dEL:function dEL(d,e){this.a=d
this.b=e},
dET:function dET(d){this.a=d},
dEK:function dEK(d){this.a=d},
dEU:function dEU(d){this.a=d},
dEJ:function dEJ(d){this.a=d},
dEV:function dEV(d){this.a=d},
dEI:function dEI(d){this.a=d},
dEW:function dEW(d){this.a=d},
dEH:function dEH(d){this.a=d},
dEX:function dEX(d){this.a=d},
dEG:function dEG(d){this.a=d},
dEY:function dEY(d){this.a=d},
dEF:function dEF(d){this.a=d},
dEZ:function dEZ(d){this.a=d},
dEE:function dEE(d){this.a=d},
dER:function dER(d){this.a=d},
dED:function dED(d){this.a=d},
b9P:function b9P(d,e){this.b=d
this.a=e},
aeI:function aeI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
V5:function V5(d){this.a=d},
bjq:function bjq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.ft$=p
_.l4$=q
_.fW$=r
_.fu$=s
_.bt$=t
_.a9$=u
_.c=_.a=null},
dW_:function dW_(d){this.a=d},
dVQ:function dVQ(d,e){this.a=d
this.b=e},
dVR:function dVR(d,e){this.a=d
this.b=e},
dVP:function dVP(d,e){this.a=d
this.b=e},
dVS:function dVS(d){this.a=d},
dVO:function dVO(d){this.a=d},
dVT:function dVT(d){this.a=d},
dVN:function dVN(d,e){this.a=d
this.b=e},
dVU:function dVU(d){this.a=d},
dVM:function dVM(d,e){this.a=d
this.b=e},
dVV:function dVV(d){this.a=d},
dVL:function dVL(d,e){this.a=d
this.b=e},
dVW:function dVW(d){this.a=d},
dVK:function dVK(d,e){this.a=d
this.b=e},
dVX:function dVX(d){this.a=d},
dVJ:function dVJ(d){this.a=d},
dVY:function dVY(d){this.a=d},
dVI:function dVI(d){this.a=d},
dVZ:function dVZ(d){this.a=d},
dVH:function dVH(d){this.a=d},
bf4:function bf4(d,e){this.b=d
this.a=e},
dau:function dau(d){this.a=d},
VO:function VO(d){this.a=d},
bkh:function bkh(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.ft$=f
_.l4$=g
_.fW$=h
_.fu$=i
_.bt$=j
_.a9$=k
_.c=_.a=null},
er_:function er_(d,e){this.a=d
this.b=e},
er0:function er0(d){this.a=d},
eqZ:function eqZ(d){this.a=d},
er1:function er1(d){this.a=d},
eqY:function eqY(d){this.a=d},
er2:function er2(d){this.a=d},
eqX:function eqX(d){this.a=d},
er3:function er3(d){this.a=d},
eqW:function eqW(d){this.a=d},
er4:function er4(d){this.a=d},
eqV:function eqV(d,e){this.a=d
this.b=e},
er5:function er5(d){this.a=d},
eqU:function eqU(d,e){this.a=d
this.b=e},
er6:function er6(d){this.a=d},
eqT:function eqT(d,e){this.a=d
this.b=e},
er7:function er7(d){this.a=d},
eqS:function eqS(d,e){this.a=d
this.b=e},
bqx:function bqx(d,e){this.b=d
this.a=e},
aKX:function aKX(){},
bwN:function bwN(){},
aLl:function aLl(){},
bwU:function bwU(){},
aLY:function aLY(){},
bx7:function bx7(){},
hfH(d,e,f){var w,v
C.fU(0,0,!1)
w=new C.ll(e,f,$,null)
v=w.bIx(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
i1i(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.U(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.D)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,C.K)(w),++q){p=w[q]
u.push(C.F(["k",p.b,"x",C.nZ(A.k.aa(p.c,4)),"y",C.nZ(A.k.aa(p.d,4)),"v",p.e,"l",C.nZ(A.k.aa(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.nZ(A.k.aa(p.as,3)),"ch",p.at,"vc",C.nZ(A.k.aa(p.z,3)),"s",C.nZ(A.k.aa(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.K)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.C(f,C.a3(f).k("co.E"))
A.d.fq(l)
return A.S.ao(C.F(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
iaL(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.S.aK(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=C.a([],x.fs)
g=x.L
f=g.a(J.q(w,"parts"))
f=J.aV(f==null?A.cv:f)
while(f.C()){u=f.gR(f)
t=i.a(u)
e=C.aU(J.q(t,"k"))
s=e==null?"":e
if(!$.qj().ai(0,s)){J.ce(v,null)
continue}d=s
a0=C.aJ(J.q(t,"x"))
if(a0==null)a0=0.5
a1=C.aJ(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new B.ty(a2,d,a0,a1)
a3.apL(a2,d,a0,a1)
h.push(a3)
r=a3
a1=C.aJ(J.q(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=C.aJ(J.q(t,"l"))
if(d==null)d=r.f
r.f=d
d=C.aJ(J.q(t,"o"))
if(d==null)d=r.r
r.r=d
d=C.jN(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=C.jN(J.q(t,"b"))
r.x=d===!0
d=C.aU(J.q(t,"bw"))
if(d==null)d=""
r.ay=d
d=C.aJ(J.q(t,"c"))
if(d==null)d=r.as
r.as=d
d=C.aJ(J.q(t,"ch"))
r.at=A.k.N(d==null?0:d)
d=C.aJ(J.q(t,"vc"))
if(d==null)d=0
r.z=d
d=C.aJ(J.q(t,"s"))
r.ch=A.k.D(d==null?1:d,1,2.6)
J.ce(v,r)}i=g.a(J.q(w,"wires"))
i=J.aV(i==null?A.cv:i)
h=x.j
while(i.C()){q=i.gR(i)
p=h.a(q)
f=C.aJ(J.q(p,0))
o=f==null?a5:A.k.N(f)
f=C.aJ(J.q(p,2))
n=f==null?a5:A.k.N(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.q(v,o)
l=J.q(v,n)
if(m!=null&&l!=null)a6.aki(m,A.k.N(C.dT(J.q(p,1))),l,A.k.N(C.dT(J.q(p,3))))}i=C.aJ(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=C.aX(x.S)
h=g.a(J.q(w,"done"))
h=J.aV(h==null?A.cv:h)
while(h.C()){j=h.gR(h)
J.ce(k,A.k.N(C.dT(j)))}return new C.bob(i,k)}catch(a4){return a5}},
fx7(){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fx7=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.ay(),$async$fx7)
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
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$fx7,v)},
bDx(d){return B.icj(d)},
icj(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bDx=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.ay(),$async$bDx)
case 7:w=6
return C.b(f.aq("String","ngmy_electronics_lab_v1",d),$async$bDx)
case 6:u=1
w=5
break
case 3:u=2
r=t.pop()
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$bDx,v)},
cqD(d,e){var w=0,v=C.j(x.g7),u
var $async$cqD=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.h49().xa(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cqD,v)}},D,T,H,U,A_,A7,A8,Al,X
J=c[1]
C=c[0]
A=c[2]
A0=c[145]
A9=c[144]
A1=c[137]
A2=c[134]
I=c[126]
P=c[121]
A3=c[123]
Aa=c[139]
A4=c[109]
A5=c[99]
G=c[129]
Ab=c[138]
A6=c[142]
Ac=c[67]
Y=c[76]
Ad=c[84]
Ae=c[80]
Q=c[88]
N=c[115]
Af=c[119]
Ag=c[117]
Z=c[125]
O=c[127]
V=c[143]
Ah=c[71]
Ai=c[141]
R=c[133]
M=c[140]
Aj=c[94]
W=c[116]
K=c[132]
S=c[95]
Ak=c[24]
E=c[26]
F=c[92]
L=c[102]
B=a.updateHolder(c[17],B)
D=c[124]
T=c[136]
H=c[41]
U=c[130]
A_=c[104]
A7=c[135]
A8=c[128]
Al=c[131]
X=c[97]
B.ajL.prototype={}
B.Vl.prototype={
T(){return new B.bjM(C.U(x.N,x.i),new C.as(A.as,$.aw()),C.a([],x.X),C.a([],x.K),C.mC(0,null,null))}}
B.bjM.prototype={
gVX(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
this.ch.q()
this.a2()},
No(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$No=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jM()
p.bP(0,A.c8)
t.m(new B.e84(t))
t.a.toString
p=t.gVX()
w=3
return C.b(B.bz7(B.hQx(q,B.i19(p),o,t.ay)),$async$No)
case 3:s=e
r=s==null?null:J.iZ(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=B.i2z(q,p,o)
if(t.c==null){w=1
break}t.m(new B.e85(t,o,r))
$.aW.x1$.push(new B.e86(t))
case 1:return C.h(u,v)}})
return C.i($async$No,v)},
XX(d){return this.bZz(d)},
aVx(){return this.XX(null)},
bZz(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$XX=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jM()
t.f.saX(0,o)
t.m(new B.e8h(t))
E.dG(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.bz7(B.hXg(o)),$async$XX)
case 3:r=n.a=m.iaq(f)
p.b=""
if(r!=null&&!B.i1a(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.i2A(o)
q=C.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.ajL(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new B.e8i(p,t))
t.c3W(p.a)
case 1:return C.h(u,v)}})
return C.i($async$XX,v)},
c3W(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
A.d.a8(w)
w=++m.as
v=m.gVX()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new B.e8d(m))
t=d.d
s=C.U(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.e8b(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.e8e(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.K)(r),++u){p.$2(o,new B.e8f(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.e8g(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bu.j(0.1),g=C.n(16),f=C.I(A.bu.j(0.35),A.q,1)
if(m.x)j=C.B(C.a([D.eWp,A.be,C.E(C.d(m.Q,l,l,l,l,l,l,A.TH,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.fl2
else{w=C.E(C.d(k.a,l,l,l,l,l,l,A.U5,l,l,l),1)
v=x.p
w=C.a([C.B(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.f66,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.D(A.vv,C.d(u,l,l,l,l,l,l,D.f8M,l,l,l),l))
w.push(A.cV)
w.push(C.d(k.b,l,l,l,l,l,l,F.DC,l,l,l))
u=k.e
if(u.length!==0){t=A.aM.j(0.12)
s=C.n(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.fbb,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.i4,A.cp,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aA
w.push(new C.D(A.Mh,new C.cl(A.aP,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.y(t,l,A.m8,l,l,l,l,l,l,l,l,l),A.bp,new C.bB(1,A.bh,new C.y(q,l,new C.H(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.K)(j),++p){o=j[p]
t=new C.aT(12,12)
s=new C.aT(12,12)
A.d.v(w,C.a([A.O,new C.bI(A.a8,l,l,C.p(l,new C.y(o.a,l,A.a83,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.bu.j(0.3),l,l,new C.bp(t,t,t,t),l,l,A.n),l,l,l,l,A.fN,l,l,l),l),A.au,C.p(l,new C.y(o.b,l,D.fgu,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bp(s,s,s,s),l,l,A.n),l,l,l,l,A.bR,l,l,l)],v))}if(m.ax)w.push(D.ebH)
j=C.cd(C.x(w,A.F,l,A.e,A.j,0,A.p),A.r,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=C.x(C.a([C.ai0(C.p(l,j,A.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.bsq,A.ej,l,l,1/0),A.bc,A.ih),C.E(B.h5X(m.gVX(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dB("Ask about it",i,new B.e8l(m),l,A.bu,l),new B.dB("Invent something new",!i,new B.e8m(m),l,A.bu,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dfW[p]
i.push(new B.dB(n,!1,new B.e8n(m,n),l,A.bu,l))}f.push(new B.eV(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.d_9[p]
i.push(new B.dB(r,!1,new B.e8o(m,r),l,A.bu,l))}f.push(new B.eV(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.E(C.aM(l,A.U,!1,l,!0,A.r,l,C.aN(),m.f,l,l,l,l,l,2,C.bs(l,new C.b4(4,C.n(16),A.Y),l,A.eR,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kI,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.e8p(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dp,!0,A.a4,l,A.an,l,A.aPS,l,l),1)
h=m.at
v=h&&j?D.bHf:A.dX
j=h&&j?"Ask":"Invent"
f.push(C.B(C.a([i,A.ab,new B.fj(v,j,new B.e8q(m,k),A.bu,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jL(A.bu,A.hb,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.x(f,A.m,l,A.e,A.N,0,A.p))}}
B.G3.prototype={}
B.uR.prototype={}
B.VN.prototype={
T(){return new B.aE4(A.J,A.J,A.aw,C.aX(x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aE4.prototype={
gaWM(){var w,v,u,t=this,s=D.Hc[t.cx],r=D.QT[t.cy],q=D.Cm[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.eb(w,w.r,C.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aws[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cJ(p,0,new B.eob())},
ga2d(){return D.Hc[this.cx].d/this.gaWM()},
gaO0(){return 0.1*(D.Hc[this.cx].d/0.9)/D.QT[this.cy].d},
Z(){this.a1()
this.li()
B.zw("rocket_lander").bB(new B.eov(this),x.P)},
c44(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cG.aj()*0.6
w.f=new C.v(0.15+A.cG.aj()*0.7,0.08)
w.r=new C.v((A.cG.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
lB(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new B.eow())
return}w=D.rr[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.v(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga2d()
v=v.ad(0,new C.v(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaO0())}if(m.dy){t=m.r
v=v.aD(0,t.aG(0,t.gcn()*6*D.ayo[m.d]))}t=m.r=m.r.ad(0,v.aG(0,d))
s=m.f=m.f.ad(0,t.aG(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new C.v(-t.a*0.4,t.b)
t=new C.v(A.k.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new C.v(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Cm[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
B.w_("rocket_lander",C.F(["unlocked",t],x.N,x.z))
B.BK("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga2d()/(D.rr[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.aa(m.ga2d()/(D.rr[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dG(80,"",500,0,0.6,"noise")
C.fL()}}if(m.Q&&m.x>0&&A.o.E(A.k.bm(m.CW*20),2)===0)E.dG(90,"",70,0,0.12,"noise")
m.m(new B.eox())},
afv(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.f8g,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dB(e[w].a,f.$1(w),new B.eod(this,g,w),v,h,v))
return new C.D(A.eI,C.x(C.a([u,A.cV,C.bV(A.bA,s,A.br,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bDJ(d){var w,v,u,t,s=this,r=null,q=s.ga2d()/(D.rr[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaO0()),o=D.ayo[s.d],n=C.n(24),m=d.c,l=C.I(m.j(0.6),A.q,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.au,C.d(d.d+" Gravity here: "+C.u(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.U_,r,r,r),A.R,s.afv("ENGINE: "+D.Hc[s.cx].b,D.Hc,new B.eo2(s),new B.eo3(s),A.cs),s.afv("FUEL TANK: "+D.QT[s.cy].b,D.QT,new B.eo4(s),new B.eo5(s),A.b2),s.afv("LANDING GEAR: "+D.Cm[s.db].b,D.Cm,new B.eo6(s),new B.eo7(s),A.aN),s.afv("EXTRAS (tap to add)",D.aws,new B.eo8(s),new B.eo9(s),A.bu)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fDe)
o=(q?A.b2:A.c9).j(0.14)
w=C.n(12)
v=A.k.aa(s.gaWM(),2)
u=A.k.aa(s.ga2d()/(D.rr[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.Cm[s.db].d*100)+".",r,r,r,r,r,r,D.f8U,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.i4,A.bR,r,r,r))
m.push(A.R)
m.push(new C.bI(A.A,r,r,new B.fj(A.no,"Launch",new B.eoa(s),A.b2,r),r))
return C.av(C.p(r,C.cd(C.x(m,A.F,r,A.e,A.N,0,A.p),A.r,r,A.y,r,A.bQ,r,r,A.ah),A.f,r,A.lE,new C.o(D.biM,r,l,n,r,r,A.n),r,r,r,A.bR,r,r,r,r),r,r,r)},
aXU(d,e,f,g){var w=null,v=f?A.cs:A.c.j(0.1),u=C.n(18),t=C.I(A.b_,A.q,1)
return C.oe(A.jI,C.p(w,C.X(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.eo_(e),new B.eo0(e),w,w,w,w,new B.eo1(e))},
aXT(d,e,f){return this.aXU(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cq(new B.eoo(s,D.rr[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rr[w].a:"\ud83d\udd12"
o.push(new B.dB(v,s.d===w,new B.eop(s,w),r,D.rr[w].c,r))}v=C.a([s.aXT(F.ami,new B.eoq(s),s.y),A.be,s.aXU(A.vT,new B.eor(s),s.Q,130),A.be,s.aXT(A.O_,new B.eos(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aN:A.c.j(0.1)
t=C.n(18)
A.d.v(v,C.a([A.be,C.aC(r,C.p(r,D.bLu,A.f,r,r,new C.o(u,r,C.I(A.b_,A.q,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.eot(s),r,r,r,r,r,r,!1,A.a7)],p))}return B.jL(A.cs,A.hb,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.x(C.a([new B.eV(o,"WORLD",r),C.B(v,A.m,r,A.b9,A.j,0,r,r)],p),A.m,r,A.e,A.N,0,A.p))}}
B.bgL.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rr[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.W(),d=C.N(),a0=j.c,a1=C.aq(D.blv,a0,0.25)
a1.toString
d.sar(new C.a8(A.b0,A.b4,A.x,C.a([F.adW,a1],x.O),l,l).av(0,new C.a9(0,0,g,f)))
a2.b0(new C.a9(0,0,g,f),d)
w=new C.eE()
w.dt(5)
for(g=a2.a,v=0;v<70;++v){f=w.aj()
d=w.aj()
a1=w.aj()
u=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
u.r=A.c.j(0.2+w.aj()*0.5).gp(0)
t=u.H()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=C.a([],f)
r=new C.aO(e.r,A.ao,l,l,d)
r.F(new C.b5(0,s+14))
q=new C.eE()
q.dt(2)
for(p=0;p<=i;p+=18){e=new C.ap(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.aj()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bC(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.F(new C.ap(i,h))
r.F(new C.ap(0,h))
r.F(new C.bE())
e=$.W()
d=C.N()
d.r=C.aq(a0,A.w,0.6).gp(0)
a2.aR(r,d)
o=C.ch(new C.v(k.ax*i,s+10),8,k.ay*i)
d=C.bx(o,A.it)
a0=C.N()
a0.r=A.bd.gp(0)
a2.aE(d,a0)
a0=C.bx(o.cz(2),A.qq)
d=C.N()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aE(a0,d)
if(k.as==="ready")return
d=k.f
J.by(g.save())
g.translate(d.a*i,d.b*h)
a2.ja(0,k.w)
i=k.as
if(i==="crashed"){k=C.N()
k.r=A.cs.j(0.6).gp(0)
k.z=Z.HI
a2.af(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.aO(i,A.ao,l,l,C.a([],f))
n.F(new C.b5(-8,18))
n.F(new C.ap(0,44+Math.sin(k.CW*40)*8))
n.F(new C.ap(8,18))
n.F(new C.bE())
k=C.N()
k.r=A.aM.gp(0)
a2.aR(n,k)
i=new C.aO(i,A.ao,l,l,C.a([],f))
i.F(new C.b5(-4,18))
i.F(new C.ap(0,32))
i.F(new C.ap(4,18))
i.F(new C.bE())
k=C.N()
k.r=A.c.gp(0)
a2.aR(i,k)}k=e.r
m=new C.aO(k,A.ao,l,l,C.a([],f))
m.F(new C.b5(0,-26))
m.F(new C.cW(14,-10,11,18))
m.F(new C.ap(-11,18))
m.F(new C.cW(-14,-10,0,-26))
m.F(new C.bE())
i=C.N()
i.sar(D.bY6.av(0,D.eOO))
a2.aR(m,i)
i=C.N()
i.r=A.aN.gp(0)
a2.af(D.wl,5,i)
i=new C.aO(k,A.ao,l,l,C.a([],f))
i.F(new C.b5(-11,6))
i.F(new C.ap(-20,20))
i.F(new C.ap(-11,18))
i.F(new C.bE())
h=C.N()
h.r=A.av.gp(0)
a2.aR(i,h)
f=new C.aO(k,A.ao,l,l,C.a([],f))
f.F(new C.b5(11,6))
f.F(new C.ap(20,20))
f.F(new C.ap(11,18))
f.F(new C.bE())
k=C.N()
k.r=A.av.gp(0)
a2.aR(f,k)
g.restore()},
au(d){return!0}}
B.aLW.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bx6.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvN()}}
B.aRR.prototype={}
B.a2Y.prototype={}
B.b9S.prototype={}
B.Ub.prototype={
T(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.ev(["skin"],x.N),o=new Float32Array(0)
return new B.aCu(w,v,u,t,s,r,q,new C.cs(null,x.A),p,D.Ko,D.Ko,A.aw,A.cG,o,new Int32Array(0),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCu.prototype={
Z(){var w=this
w.a1()
w.li()
w.as=new B.c0J(w.gccp())
new B.dFr(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a7(0)
v.d=null}this.buO()},
ccq(d){var w,v=this
if(v.c==null)return
w=J.a4(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eZ(0,C.F(["t","init","data",$.hfW],x.N,x.z))
v.at=!0
v.ax=""
v.ayn()
break
case"pick":v.m(new B.dF3(v,d))
break
case"shot":v.ahn(C.u(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.u(w.h(d,"text")))
break}},
ayn(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.auo[q.CW]
v=new B.dF4()
u=q.ay
u=C.C(u,C.a3(u).k("co.E"))
A.d.fq(u)
t=x.N
s=C.F(["layers",u,"skinMode",q.ch,"tone","#"+C.u(v.$1(w.b))+C.u(v.$1(w.c))+C.u(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.S.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.U(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.eZ(0,u)}},
ahn(d){return this.ctj(d)},
ctj(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ahn=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cI.aL(A.a.b5(d,A.a.cK(d,",")+1))
w=6
return C.b(B.cqD(C.a([B.hfH(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$ahn)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.J(x.gV).f.S(D.aP9)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$ahn,v)},
axP(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
lB(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bm(w)!==A.k.bm(v.ok)){B.a8a("kick",0.4)
v.a4R(170,new B.dFs())}v.ok=w
return},
ahc(d){var w,v,u,t,s=this
s.m(new B.dF5(s,d))
if(d==null){s.fx=D.Ko
s.dy=1
w=s.as
if(w!=null)w.eZ(0,C.F(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.T(w).k("a_<1>")
u=C.C(new C.a_(w,new B.dF6(d),v),v.k("J.E"))
t=A.d.gI(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.L(0,t)
if(s.ch===2)s.ch=1}s.ayn()
w=s.as
if(w!=null)w.eZ(0,C.F(["t","focus","group",d],x.N,x.z))
s.go=0
s.cvL(t,d)
return},
cvL(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a8a("kick",0.8)
this.a4R(260,new B.dF7())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dG(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a4R(w*70,new B.dF8(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dG(110,"",360,0.7,0.3,"saw")
else B.w2("organic",6+A.o.E(e.length,8),200,0.6)
break
case"bone":E.dG(210+e.length*4,"",80,0.6,0.55,"tri")
E.dG(2400,"",20,0,0.3,v)
break
case"muscle":E.dG(70,"",150,1,0.6,"sine")
break
case"vessel":E.dG(300,"",380,0.4,0.22,v)
B.a8a("kick",0.3)
break
default:B.w2("organic",2+A.o.E(e.length,6),200,0.4)}},
cAg(d){this.m(new B.dFa(this,d))},
aYb(){var w,v,u,t,s,r,q,p=this,o=C.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(p.axP(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.L(0,s.a)}q=C.C(o,o.$ti.k("co.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aw(w)]
p.p4=""},
bVb(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dF0(u,w,d))
v=x.t
B.BK("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a4R(1100,new B.dF1(u))
return}if(d==null){if(u.cx!=null)u.ahc(null)
return}u.ahc(d)},
bYT(d,e){var w,v=this,u=null,t=C.n(18),s=C.I(A.bY.j(0.5),A.q,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.f4E,u,u,u)}else if(d==null||e==null)w=D.fiA
else{w=x.p
w=C.B(C.a([C.E(C.x(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hH,u,u,u),A.cV,C.d(e.b,u,u,u,u,u,u,F.DC,u,u,u)],w),A.F,u,A.e,A.N,0,A.p),1),C.aH(u,u,u,u,D.bNV,u,u,u,new B.dF2(v),u,u,u,u,"Back to the whole body",A.ce)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.Wj,u,s,t,u,u,A.n),u,u,u,u,I.ahX,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dqS.h(0,g)
i.ayn()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d8F
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(i.axP(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.mE,h,h,h,new B.dFh(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bI:C.DQ(h,A.qo,q)}else q=A.kE
q=C.x(C.a([C.E(q,1),new C.D(F.YQ,i.bYT(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.d0G[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dB(l,n,new B.dFi(i,o),o.c,A.bY,h))}p=C.a([new B.eV(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.K)(w),++s){k=w[s]
n.push(new B.dB(k,k===i.cx,new B.dFj(i,k),h,A.aM,h))}p.push(new B.eV(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hH(A.c9,""+A.k.V(n)+" beats/min","Heart rate",180,40,new B.dFk(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.Ff(D.auo[j],i.CW===j,new B.dFl(i,j),!1,h))
p.push(new B.eV(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dB("Spin",n,new B.dFm(i),D.al8,A.aN,h),new B.fj(A.k6,"Reset view",new B.dFn(i),A.c,h),new B.dB(l,m,new B.dFo(i),A.Gu,A.aM,h)],v)
if(t.t(0,"organ"))v.push(new B.dB("Heartbeat sound",i.k4,new B.dFp(i),A.o7,A.c9,h))
p.push(new B.eV(v,h,h))
return B.jL(A.bY,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.x(p,A.m,h,A.e,A.N,0,A.p))}}
B.aKY.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.aKZ.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.buN()}}
B.c0J.prototype={
kH(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aK(e,"</script","<\\/script")
v=$.hlZ
$.hlZ=v+1
u="ngmy-body-viewer-"+v
$.yC()
$.qi().pU(u,new B.c0K(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fM(v,"message",new B.c0L(t),!1,x.gA)
t.b=u},
eZ(d,e){var w,v
try{w=this.c
if(w!=null){w=C.bz4(w.contentWindow)
if(w!=null)J.fTl(w,e,"*")}}catch(v){}}}
B.y3.prototype={}
B.Ck.prototype={}
B.no.prototype={}
B.baA.prototype={}
B.Uh.prototype={
T(){var w=x.N,v=x.y,u=x.S
return new B.aCx(C.U(w,x.a2),C.a([],x.cB),C.U(w,v),C.U(w,v),C.U(w,u),A.aw,A.J,A.J,C.aX(u),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCx.prototype={
Z(){var w=this
w.a1()
w.li()
w.acd()
$.aW.x1$.push(new B.dHC(w))},
acd(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$acd=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$acd)
case 6:q=e.tc("ngmy_circuit_passed_v1")
r=q==null?A.U:q
if(s.c!=null)s.m(new B.dHg(s,r))
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
return C.i($async$acd,v)},
acx(d){return this.c1G(d)},
c1G(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$acx=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.L(0,d)
u=3
w=6
return C.b(C.ay(),$async$acx)
case 6:r=f
q=s.cx
p=C.a3(q).k("jR<co.E,m>")
q=C.C(new C.jR(q,new B.dHj(),p),p.k("J.E"))
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
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$acx,v)},
awx(d,e,f,g){var w="c"+this.y++,v=new B.Ck(w,e,f,g)
this.d.n(0,w,v)
return v},
mB(d,e,f){return this.awx(0,e,f,0)},
abz(d,e){var w
if(D.z9.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new C.v(-36,w))},
tC(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aS5(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fW$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.du(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.dY(m,D.cLG[A.o.E(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tC(p,0)&&n.tC(p,1)
break
case"or":p=q.a
o=n.tC(p,0)||n.tC(p,1)
break
case"xor":p=q.a
o=n.tC(p,0)!==n.tC(p,1)
break
case"nand":p=q.a
o=!(n.tC(p,0)&&n.tC(p,1))
break
case"nor":p=q.a
o=!(n.tC(p,0)||n.tC(p,1))
break
case"not":o=!n.tC(q.a,0)
break
default:o=n.tC(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bNS(){return this.aS5(null)},
lB(d){var w,v,u,t,s,r,q,p,o,n=this
n.bNS()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a3(w).k("bc<2>")).gae(0),v=new C.f2(w,new B.dHD()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.fW$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fW$)
o=s+1
E.dG(520+90*A.o.E(s,4),"",200,0,0.25,"square")
s=o}}},
awy(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
m4(d,e){var w=this.x
return new C.v(d*w.a,e*w.b)},
asM(d){var w=this
if(w.x.A(0,A.aw)){$.aW.x1$.push(new B.dHe(w,d))
return}w.m(new B.dHf(w,d))},
cw2(d){this.m(new B.dHk(this,d,$.bDT()[d]))},
c6i(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bDT()[a0]
v=d.d
u=C.a3(v).k("bc<2>")
t=u.k("a_<J.E>")
s=t.k("J.E")
r=C.C(new C.a_(new C.bc(v,u),new B.dH9(),t),s)
A.d.aZ(r,new B.dHa())
q=C.C(new C.a_(new C.bc(v,u),new B.dHb(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dHc(d,w))
return}u=d.r
p=C.dQ(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dC(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.h4(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aS5(0)
h=m.h(0,A.d.gI(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jK(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aH(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.m(new B.dHd(d,o,a0))},
axl(d){var w,v,u,t,s=this.d,r=C.a3(s).k("bc<2>")
s=C.C(new C.bc(s,r),r.k("J.E"))
r=C.T(s).k("dx<1>")
s=new C.dx(s,r)
s=new C.bQ(s,s.gM(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ceO(d){var w,v,u,t,s,r=this.d,q=C.a3(r).k("bc<2>")
r=C.C(new C.bc(r,q),q.k("J.E"))
q=C.T(r).k("dx<1>")
r=new C.dx(r,q)
r=new C.bQ(r,r.gM(0),q.k("bQ<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bYM(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.z9.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.abz(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.z(p,o)
s=l}}}return t},
bMM(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.abz(p,o)
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
c6k(d){var w,v,u,t=this,s=t.axl(d)
if(s!=null){w=t.d.h(0,s)
w.toString
C.eY()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
E.dG(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new B.dHl())
return}u=t.bMM(d)
if(u!=null)t.m(new B.dHm(t,u))
else t.m(new B.dHn(t))},
avn(d){return this.c0G(d)},
c0G(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$avn=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.axl(d)
if(s==null){w=1
break}C.jl()
t.m(new B.dHi(t,s))
case 1:return C.h(u,v)}})
return C.i($async$avn,v)},
bzz(d){if(this.x.A(0,A.aw))return
this.m(new B.dH8(this,d,A.cG))
C.eY()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bDT()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.X(i.ax?A.o7:O.rn,A.ad,h,h,h,21),h,h,h,new B.dHw(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.n(16)
s=A.cl.j(0.14)
r=C.I(A.cl.j(0.5),A.q,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.f3P,h,h,h),C.d(w.b,h,h,h,h,h,h,D.fc6,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.D(A.lP,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.b2:A.f0,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.B(C.a([C.E(C.x(q,A.F,h,A.e,A.j,0,A.p),1),C.bG(D.ftC,i.gc6h(),C.bn(A.cl,h,h,h,h,h,h,h,h,h,h,A.ce))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,Y.Mq,D.bt2,h,h,1/0))}u.push(C.E(C.cq(new B.dHx(i)),1))
if(f!=null){t=C.n(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.z9.h(0,r).a+": "+D.z9.h(0,r).e,h,h,h,h,h,h,A.rV,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,A8.ahG,A.bR,h,h,1/0))}u=C.x(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.z9.gdL(D.z9),s=s.gae(s);s.C();){r=s.gR(s)
q=new C.aT(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.az(o.j(0.5),1,A.q,-1)
t.push(C.aC(h,C.p(h,C.x(C.a([C.X(p.b,o,h,h,h,20),A.bC,new C.y(p.a,h,D.aR1,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.N,0,A.p),A.f,h,h,new C.o(n,h,new C.bO(m,m,m,m),new C.bp(q,q,q,q),h,h,A.n),h,h,h,A.fC,Aj.Mm,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dHy(i,r),h,h,h,h,h,h,!1,A.a7))}s=C.a([],g)
for(l=0;l<4;++l){k=D.dcZ[l]
s.push(new B.fj(A.O0,k.b,new B.dHz(i,k),A.cl,h))}s.push(new B.fj(D.yf,"Clear",new B.dHA(i),A.c9,h))
r=C.a([],g)
for(j=0;q=$.bDT(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.eh:A.ln
o=i.ay
n=i.cx.t(0,j)?A.b2:A.bH
r.push(new B.dB(q.a,o===j,new B.dHB(i,j),p,n,h))}return B.jL(A.cl,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.x(C.a([new B.eV(t,"PARTS",h),new B.eV(s,"TRY",h),new B.eV(r,"TASKS",h)],g),A.m,h,A.e,A.N,0,A.p))}}
B.baT.prototype={
a4(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.acu.gp(0)
a7.b0(new C.a9(0,0,0+a5,0+a6),w)
v=C.N()
v.r=A.c.j(0.05).gp(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.H()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,C.K)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.abz(j,m.c)
f=q.h(0,l)===!0
l=$.W()
e=C.a([],p)
d=new C.aO(l.r,A.ao,a4,a4,e)
e.push(new C.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.pH(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=9
l.r=A.bH.j(0.28).gp(0)
l.z=G.mI
s=l.H()
l=d.gbK().a.snapshot()
w.drawPath((d.e=new C.cC(l)).a,s)
s.delete()}l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=3.2
l.d=A.bS
l.r=(f?A.dQ:A.bq).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new C.cC(d.gbK().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ad(0,D.Ie)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.aO($.W().r,A.ao,a4,a4,C.a([],p))
w=a3.b
p.F(new C.b5(a6,w))
r=g.b
p.F(new C.pH(a6+a0,w,a5-a0,r,a5,r))
r=C.N()
r.b=A.ae
r.c=3
r.r=A.ad.gp(0)
a7.aR(p,r)}for(a5=new C.du(o,o.r,o.e);a5.C();)this.c6j(a7,a5.d)},
c6j(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.z9.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.ch(a0.c,64,64)
s=C.bx(t,A.l9)
r=w.cy===v
q=s.eU(A.cB)
$.W()
p=C.N()
p.r=A.w.j(0.55).gp(0)
p.z=A.lv
d.aE(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.N()
p.sar(new C.bT(A.A,0.5,A.x,g,0,C.a([e.c.j(0.6),A.K],x.O),g,g).av(0,C.bU(a0.c,52)))
d.af(q,52,p)}q=s.eU(A.cJ)
p=C.N()
o=e.c
p.r=C.aq(o,A.w,0.65).gp(0)
d.aE(q,p)
n=u?0.35:0
q=C.N()
p=C.aq(o,A.c,0.1+n)
p.toString
m=C.aq(o,A.w,u?0.2:0.45)
m.toString
q.sar(new C.a8(A.b0,A.b4,A.x,C.a([p,m],x.O),g,g).av(0,t))
d.aE(s,q)
q=C.N()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aE(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.uc:D.bHL}else l=e.b
k=B.fYN(C.jK(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aD(0,new C.v(p/2,q.gbd(q)/2)))
j=B.fYN(e.a,10.5,A.c,g,g,A.H)
j.a4(d,a0.c.ad(0,new C.v(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.fYN(f,9,u?A.dQ:A.bX,g,g,A.u)
i.a4(d,a0.c.ad(0,new C.v(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aYP(d,w.abz(a0,h),o)
this.aYP(d,a0.c.ad(0,D.Ie),o)},
aYP(d,e,f){var w
$.W()
w=C.N()
w.r=D.acu.gp(0)
d.af(e,8.5,w)
w=C.N()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.af(e,8.5,w)
w=C.N()
w.r=A.c.gp(0)
d.af(e,3.2,w)},
au(d){return!0}}
B.aL3.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bwQ.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.buT()}}
B.Ne.prototype={
T(){return new B.aCO(C.mC(0,null,null))}}
B.Kj.prototype={
a5(){return"_UnfoldStyle."+this.b}}
B.Ax.prototype={}
B.aCO.prototype={
c6o(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new B.dNr(w,e))},
c_z(){var w=this
w.e.q()
w.e=C.mC(w.f,null,null)
w.m(new B.dNq(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.on(t,C.c8(v,A.c_,t?new B.bqS(w.e,w.gc6n(w),new B.dNs(d),v):new B.aH3(u,new C.cx(u.b,x.gj)),v,!1,!1,v,!1),new B.dNt(w,u),x.C)}}
B.bsr.prototype={}
B.bqS.prototype={
aYQ(d,e){var w=null
return new C.D(I.Zi,C.x(C.a([C.d(d,w,w,w,w,w,w,D.f4o,w,w,w),A.bC,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.B(C.a([C.aH(v,v,v,v,S.np,v,v,v,w.e,v,v,v,v,v,v),A.rP,D.byU],u),A.m,v,A.e,A.j,0,v,v),s=w.aYQ("STUDIOS","Play, make things, and keep what you make")
$.bDU()
return C.bm(!0,C.x(C.a([new C.D(D.bxX,t,v),C.E(C.vz(0,v,A.r,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,C.a([new C.ma(s,v),new C.nR(A.hQ,C.OO(new C.oq(new B.eYT(d),22,!0,!0,!0,0,C.t0(),v),D.aOZ),v),new C.ma(w.aYQ("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nR(D.bt9,C.OO(new C.oq(new B.eYU(w),6,!0,!0,!0,0,C.t0(),v),D.aOZ),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)}}
B.aeN.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.n(20),n=C.n(20),m=C.aq(F.n8,p,0.3)
m.toString
w=x.O
m=C.a([m,D.afi],w)
v=C.I(p.j(0.6),A.q,1.2)
u=x.V
t=C.a([new C.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.aq(p,A.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ac(0,A.G,p.j(0.5),A.J,12)],u)
return C.aF(!1,A.a1,!0,r,C.aL(!1,o,!0,C.eH(C.x(C.a([C.p(r,C.X(q.c,A.c,r,r,r,24),A.f,r,r,new C.o(r,r,r,r,u,new C.a8(A.az,A.aC,A.x,w,r,r),A.a5),r,44,r,r,r,r,r,44),A.O,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cV,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b9,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a8(A.az,A.aC,A.x,m,r,r),A.n),r,A.FK,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
B.adF.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.n(20),g=C.n(20),f=C.aq(F.n8,A.d.gI(i),0.24)
f.toString
w=x.O
f=C.a([f,D.afi],w)
v=C.I(A.d.gI(i).j(0.35),A.q,1)
u=x.V
t=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cB,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aT(6,6)
m=C.a([A.d.gI(i),A.d.gal(i)],w)
l=C.a([new C.ac(0,A.G,A.w.j(0.45),I.aHt,0)],u)
r.push(C.p(k,C.X(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bp(n,n,n,n),l,new C.a8(A.a3,A.a8,A.x,m,k,k),A.n),k,17,k,new C.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.x(r,A.m,k,A.e,A.N,0,A.p)
u=C.aq(A.d.gI(i),A.d.gal(i),0.4)
u.toString
return C.aF(!1,A.a1,!0,k,C.aL(!1,h,!0,C.eH(C.x(C.a([new C.a7(58,k,w,k),A.R,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.au,C.X(A.C0,A.d.gI(i),k,k,k,18)],s),A.m,k,A.b9,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a8(A.az,A.aC,A.x,f,k,k),A.n),k,A.FK,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag)}}
B.PW.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.c_(j,new C.o(h,j,j,C.n(22),j,j,A.n),A.bf),j,j,2,2,8,j)
u=C.n(22)
t=k.y
s=x.V
r=C.a([new C.ac(0,A.G,A.w.j(0.55),A.Sf,26),new C.ac(-6,A.G,A.d.gI(i).j(0.1+0.4*t),A.J,30)],s)
q=C.n(22)
p=C.aq(A.d.gI(i),A.c,0.14)
p.toString
o=A.d.gI(i)
n=A.d.gal(i)
i=C.aq(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bZ(0,C.c_(j,new C.o(j,j,j,j,j,new C.a8(A.az,A.aC,A.x,C.a([p,o,n,i],m),D.dif,j),A.n),A.bf),0,0,0),C.ao(j,C.c_(j,new C.o(j,j,j,j,j,new C.a8(A.b0,A.b4,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bf),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bZ(0,C.b3(j,j,j,new B.brQ(i,j),A.aw),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.q,1.4)
s=C.a([new C.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.X(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a5),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.f5Z,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.au,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a6,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Ts)
p.push(C.p(j,j,A.f,j,j,new C.o(A.c.j(0.28),j,j,C.n(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.D(A.fO,C.B(C.a([s,A.eo,C.E(C.x(p,A.F,j,A.e,A.N,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bZ(0,C.e_(C.en(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.n(22)
m.push(C.bZ(0,C.e_(C.c_(j,new C.o(j,j,C.I(A.c.j(0.3),A.q,1.2),i,j,j,A.n),A.bf),!0,j),0,0,0))
return new C.a7(w,v,new C.an(A.W,j,A.aa,A.f,C.a([h,C.bZ(0,C.c_(C.bw(q,new C.an(A.W,j,A.aa,A.r,m,j),A.aq),new C.o(j,j,j,u,r,j,A.n),A.bf),0,0,0)],l),j),j)}}
B.brQ.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.a9(r,-10,s,w)
u=d.a
J.by(u.save())
u.translate(v.gbQ().a,v.gbQ().b)
d.ja(0,0.35)
t=C.ch(A.J,(w- -10)*1.6,s-r)
$.W()
s=C.N()
s.sar(new C.a8(A.a3,A.a8,A.x,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).av(0,t))
d.b0(t,s)
u.restore()},
au(d){return d.b!==this.b}}
B.brl.prototype={
B(d){var w=null,v=C.n(22),u=C.a([D.bgU,D.aeu],x.O),t=this.e,s=C.I(A.d.gI(t).j(0.4),A.q,1.2),r=C.a([new C.ac(0,A.G,A.w.j(0.5),A.kb,24)],x.V),q=C.n(22),p=A.d.gI(t)
return new C.a7(this.c,this.d,C.c_(C.bw(q,C.b3(C.av(C.X(A.js,A.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b9z(p,w),A.aw),A.aq),new C.o(w,w,s,v,r,new C.a8(A.az,A.aC,A.x,u,w,w),A.n),A.bf),w)}}
B.b9z.prototype={
a4(d,e){var w,v,u,t,s,r,q,p
$.W()
w=C.N()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.H()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.H()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ec(A.J)
$.W()
t=C.N()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gp(0)
d.af(u,30,t)},
au(d){return!1}}
B.aH3.prototype={
T(){return new B.aH4(new C.cs(null,x.A),null,null)}}
B.aH4.prototype={
gtZ(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,D.bqx,null,1,null,v)
w.cL(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
gZg(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.fM,null,1,null,v)
w.fh(0,!0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
gawz(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc6l(){var w=this.w
if(w===$){w=C.C(this.a.c.d,x.G)
this.w=w}return w},
gaVg(){var w=this.x
if(w===$){w=C.C(this.a.c.e,x.Z)
this.x=w}return w},
gaVZ(){var w=this.y
if(w===$){w=C.C(this.a.c.f,x.N)
this.y=w}return w},
gb6x(){var w=this.z
if(w===$){w=C.C(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a1()
var w=this.gtZ()
w.da()
w.dU$.L(0,this.gcvM())},
cvN(){var w,v,u,t,s,r,q,p=this,o=p.gtZ().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gawz().a){case 0:w=D.nt
break
case 1:w=D.ul
break
case 2:w=D.a2D
break
case 3:w=D.nt
break
case 4:w=D.d5D
break
case 5:w=D.ul
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.aab)r=0.09
else r=s===D.aac?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dG(260+90*v,"",260,1.6,0.18,"tri")
u=D.c_E[v]
B.li("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.BK("bell",D.c8n,1400,0.35)}}p.ax=o},
q(){this.gtZ().q()
this.gZg().q()
this.bwL()},
afW(){var w=this
w.gtZ().cUY(0,C.dE(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new B.eYz(w))},
cgQ(){this.gtZ().bT(0)
this.m(new B.eYy(this))},
adx(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$adx=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaVZ(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){q=t[r]
l.push(new C.as(new C.bb(q,A.b5,A.aO),$.aw()))}m=C.a([],m)
for(t=u.gb6x(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){p=t[r]
m.push(new C.as(new C.bb(p,A.b5,A.aO),$.aw()))}o=C.C(u.gaVg(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.bS(F.n8,null,new B.eYx(u,l,m,o),t,!0,!0,!0,A.lx,!1,!1,x.H),$async$adx)
case 2:l=C.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.U$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$adx,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gawz(),f=i.a.c,e=f.b,d=i.gc6l(),a0=new B.Ax(g,e,f.c,d,i.gaVg(),i.gaVZ(),i.gb6x())
f=C.aq(A.d.gI(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.X(i.at?A.o7:O.rn,A.ad,h,h,h,21),h,h,h,new B.eYH(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bRo,h,h,h,i.gc6m(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.mE,h,h,h,new B.eYI(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c6(i.gZg(),new B.eYJ(i,a0),h),C.cq(new B.eYK(i,a0))],g)
u=i.as
t=u?i.gcgP():i.gcj7()
u=u?D.bH0:A.u6
s=C.aq(A.d.gI(d),A.d.gal(d),0.4)
s.toString
t=C.B(C.a([C.aH(h,h,h,h,C.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.ce),C.E(C.c6(i.gtZ(),new B.eYL(i,a1,a0),h),1),C.aH(h,h,h,h,D.bNL,h,h,h,new B.eYM(i),h,h,h,h,"Replay",A.ce)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.aa(s,1)
r=C.aq(A.d.gI(d),A.d.gal(d),0.4)
r.toString
s=B.hH(r,u+"x","Speed",2.5,0.4,new B.eYN(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.dfw[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gI(d),A.d.gal(d),0.4)
r.toString
u.push(new B.dB(p.b,o===p.a,new B.eYO(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.c_Z[q]
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}m=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}l=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}k=A.d.gI(o).A(0,A.d.gI(n))?A.c:A.b_
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}j=new C.az(k,A.d.gI(o).A(0,A.d.gI(n))?2.5:1,A.q,-1)
d.push(C.aC(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bO(j,j,j,j),h,h,new C.a8(A.az,A.aC,A.x,n,h,h),A.a5),h,l,h,D.ahq,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.eYP(i,n),h,h,h,h,h,h,!1,A.a7))}return B.jL(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.ex(new C.an(A.W,h,A.b1,A.r,v,h),i.f),e,C.x(C.a([t,s,new B.eV(u,"STYLE",h),new B.eV(d,"THEME",h)],g),A.m,h,A.e,A.N,0,A.p))},
byL(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nt[r]
p=A.k.D((1-A.ew.aA(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.nt[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.nt[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=C.dp()
l=n.a
l.$flags&2&&C.aj(l)
l[11]=0.0013
n.k9(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nt[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nt[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nt[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cL(0,r*118,0,f,f,f,new C.kH(q,new C.iJ(n,f,A.b0,!0,f,new B.PW(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nt[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gI(w)
v=D.nt[r]
t=v+0.12
e.push(new C.cL(0,r*118-3-2,0,f,f,4,new C.ml(new B.bqu(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.aw,f,f),f))}return new C.a7(a2,358,new C.an(A.W,f,A.aa,A.f,e,f),f)},
bPj(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.ul[r]
p=A.pP.aA(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.ul[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.ul[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dp()
k=m.a
k.$flags&2&&C.aj(k)
k[11]=0.0011
m.jP(n,n,n,1)
m.fE(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.PW(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dp()
k.fE(3.141592653589793)
k=new C.iJ(k,f,A.A,!0,f,new B.brl(a2,108,w,f),f)}e.push(new C.cL(0,r*130,0,f,f,f,new C.kH(q,new C.iJ(m,f,A.A,!0,f,k,f),f),f))}return new C.a7(a2,378,new C.an(A.W,f,A.aa,A.f,e,f),f)},
cAN(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a2D[w]
l.push(A.cu.aA(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bZ(0,C.b3(n,n,n,new B.btW(d.d,l,D.aw5,m,B.bqR(e,0.4,0.62),f,B.bqR(e,0.45,0.7),n),A.aw),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.fZi(g,w)
q=D.aw5[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cL(r,s-q*m*p+12,n,n,t,n,new C.kH(o,C.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.fZi(g,w)
r=D.a2D[w]
q=r+0.15
v.push(new C.cL(s,l,n,n,t,n,new C.kH(A.k.D((e-q)/(r+0.25-q),0,1),new C.y(u[w],n,A.U9,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a7(g,m+90,new C.an(A.W,n,A.aa,A.f,v,n),n)},
bF_(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cu.aA(0,B.bqR(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bZ(0,C.av(C.dW(C.b3(f,f,f,new B.bpW(A.d.gI(a1),B.bqR(a3,0,0.2),a4,f),new C.ar(a5*0.95,70)),D.e7i),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dC.aA(0,A.k.D((o-0.7)/0.3,0,1))
l=C.dp()
m=l.a
m.$flags&2&&C.aj(m)
m[11]=0.001
l.fE(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jP(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.E(r,1):-1
w.push(new C.z(o,new C.cL(0,0,0,0,f,f,new C.cp(A.A,f,f,new C.kH(k*(0.45+0.55*o),C.dW(new C.iJ(l,f,A.A,!0,f,new B.PW(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.v(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new B.eYq())
A.d.v(a0,new C.M(w,new B.eYr(),x.fR))
return new C.a7(a5,330,new C.an(A.W,f,A.aa,A.f,a0,f),f)},
bE9(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.ul[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.mU.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.ul[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.ay4[q]
k=C.dp()
k.mN(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jP(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.ul[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cL(0,0,0,0,e,e,new C.cp(A.A,e,e,new C.kH(m,C.dW(new C.iJ(k,e,A.A,!0,e,new B.PW(d,92,w,p,j,i,0,g*s,h,e),e),new C.v(0,l)),e),e),e))
l=D.ul[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cL(0,0,0,0,e,e,new C.cp(A.A,e,e,C.dW(new C.ml(new B.bae(w,f,q,e),e,new C.ar(r,212),e,e),new C.v(0,D.ay4[q])),e),e))}return new C.a7(a4,330,new C.an(A.W,e,A.aa,A.f,a0,e),e)},
bBG(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.v(-b0,-150),new C.v(b0,-40),D.e7m],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nt[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.cu.aA(0,p)
q=D.ayd[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nt[r]
f=g+0.2
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.nt[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=C.dp()
d=f.a
d.$flags&2&&C.aj(d)
d[11]=0.001
f.mN(l*h+D.d9D[r]*o)
f.fE(l*0.9)
h=0.55+0.45*o
f.jP(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,new C.kH(g,C.dW(new C.iJ(f,a3,A.A,!0,a3,new B.PW(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.v(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nt[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.ayd[r]
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,C.dW(new C.ml(new B.bpY(A.d.gI(w),a2,a3),a3,new C.ar(a4,30),a3,a3),new C.v(0,q+48-4)),a3),a3))}}return new C.a7(b0,330,new C.an(A.W,a3,A.aa,A.f,a6,a3),a3)}}
B.bqu.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.a9(w-v,0,w+v,e.b)
q=C.bx(u,A.hd)
$.W()
t=C.N()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=G.mI
d.aE(q,t)
t=C.bx(u,A.hd)
q=C.N()
q.r=A.c.j(s).gp(0)
d.aE(t,q)},
au(d){return d.c!==this.c||d.d!==this.d}}
B.bpW.prototype={
a4(d,e){var w,v,u=this.c,t=C.ch(e.ec(A.J),e.b*u,e.a*u)
$.W()
u=C.N()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=Z.HI
d.hV(t,u)
u=C.N()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hV(t,u)
u=t.cz(-14)
v=C.N()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.hV(u,v)},
au(d){return!0}}
B.bae.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ec(A.J),f=this.c,e=A.cu.aA(0,f)
$.W()
w=C.N()
w.b=A.ae
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gI(u).j(0.6*v).gp(0)
d.af(g,40+e*a0.a*0.42,w)
t=new C.eE()
t.dt(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.aj()*3.141592653589793*2
n=(40+t.aj()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.aj()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i=(p&1)===0?A.d.gI(u):A.c
j.r=i.j(A.k.D(v,0,1)).gp(0)
h=j.H()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
au(d){return!0}}
B.bpY.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ec(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.ch(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.W()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.H()
t.drawOval(C.c0(p),n)
n.delete()}},
au(d){return d.c!==this.c}}
B.btW.prototype={
a4(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.a9(0,d0,0+c5,d0+60)
$.W()
d0=C.N()
w=c1.b
v=x.O
d0.sar(new C.a8(A.b0,A.b4,A.x,C.a([A.d.gI(w).j(0.18),A.K],v),c2,c2).av(0,d1))
d2.b0(d1,d0)
d0=C.N()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bE(new C.v(0,c4),new C.v(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.fZi(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.W()
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.lv
a4=a3.H()
t.drawOval(C.c0(new C.a9(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.a9(d,a1,a3,a1+a0)
a6=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a7=C.aq(A.d.gI(w),A.c,0.1)
a7.toString
a6.sar(new C.a8(A.b0,A.b4,A.x,C.a([a7,A.d.gal(w)],v),c2,c2).av(0,a5))
a4=a6.H()
t.drawRect(C.c0(a5),a4)
a4.delete()
a2=a2.r
a6=C.a([],n)
a8=new C.aO(a2,A.ao,c2,c2,a6)
a6.push(new C.b5(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new C.ap(a7,a9))
a6.push(new C.ap(a7,m))
a6.push(new C.ap(a3,c4))
a6.push(new C.bE())
a6=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=C.aq(A.d.gal(w),A.w,0.5).gp(0)
a4=a6.H()
a6=a8.gbK().a.snapshot()
t.drawPath((a8.e=new C.cC(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.aO(a2,A.ao,c2,c2,a6)
a6.push(new C.b5(d,a1))
a6.push(new C.ap(d+c8,a9))
a6.push(new C.ap(a7,a9))
a6.push(new C.ap(a3,a1))
a6.push(new C.bE())
a2=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.r=C.aq(A.d.gI(w),A.c,0.45).gp(0)
a4=a2.H()
a2=b0.gbK().a.snapshot()
t.drawPath((b0.e=new C.cC(a2)).a,a4)
a4.delete()
b1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.H()
t.drawRect(C.c0(a5),a4)
a4.delete()
a4=b1.H()
a2=a8.e
t.drawPath((a2==null?a8.e=new C.cC(a8.gbK().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cC(b0.gbK().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bm(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.bx(new C.a9(b7,a7,b7+r,b5),A.hd)
$.W()
b9=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.H()
t.drawRRect(C.et(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.a9(d,a1,a3,a1+28)
J.by(t.save())
t.clipRect(C.c0(a5),$.oM()[1],!0)
$.W()
a1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.sar(new C.a8(A.b0,A.b4,A.x,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).av(0,c0))
a4=a1.H()
t.drawRect(C.c0(c0),a4)
a4.delete()
t.restore()}}},
au(d){return!0}}
B.aMN.prototype={
aT(){this.b3()
this.b_()
this.dK()},
q(){var w=this,v=w.b4$
if(v!=null)v.a3(0,w.gdF())
w.b4$=null
w.a2()}}
B.a0b.prototype={
a5(){return"_Role."+this.b}}
B.q7.prototype={}
B.qM.prototype={}
B.Co.prototype={}
B.Z9.prototype={}
B.aeD.prototype={}
B.a0o.prototype={
gY(d){return this.d}}
B.Cy.prototype={}
B.abw.prototype={}
B.abN.prototype={}
B.adJ.prototype={}
B.bgI.prototype={
a2m(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dG(d,"",e,g,h,f)},
b7z(d,e,f){return this.a2m(d,e,f,0,0.55)},
aB8(d,e,f,g){return this.a2m(d,e,f,0,g)},
b7A(d,e,f,g){return this.a2m(d,e,f,g,0.55)},
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
w.aU()},
ajA(d,e,f,g){var w="n"+this.ay++,v=new B.qM(w,e,f,g)
this.a.n(0,w,v)
this.aU()
return v},
B3(d,e,f){return this.ajA(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.br(w.b,new B.dhk(e))
A.d.br(w.c,new B.dhl(e))
w.aU()},
bbo(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mH.h(0,v.b).c===D.wU)return!1
w=this.b
if(A.d.b6(w,new B.dhh(d,e)))return!1
w.push(new B.Co(d,e))
this.aU()
return!0},
bZw(d){var w
if(d.b==="beat")return D.c8x[A.o.E(d.d,4)]
w=this.at
switch(A.o.E(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aEF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.E(w,6)
t=D.ayt[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.Cy(u,t,j.ax,90))
w.push(new B.Cy(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new B.a0o(u,new C.v(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b7z(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.E(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.aj()*0.5)
m.toString
v.push(new B.a0o(u,new C.v(o*p,n*p),m,3+w.aj()*4.5,1000+w.aw(700),j.ax))}j.f.push(new B.Cy(u,t,j.ax,120))
j.aB8(120,200,"noise",0.5)
j.b7z(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.Cy(u,t,j.ax,230))
w.push(new B.Cy(u,t,j.ax+160,160))
w.push(new B.Cy(u,t,j.ax+320,100))
j.b7A(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.abw(u,new C.v((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b7A(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new B.abN(u,u.ad(0,new C.v(Math.cos(q),Math.sin(q)).aG(0,260+w.aj()*200)),t,j.ax))
j.a2m(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fL()
j.a2m(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.adJ(u,D.axS[v],t,j.ax))
j.aB8(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aB8(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c4D[A.o.E(w,3)]
for(k=1;k<=3;++k)j.cqT(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new C.f2(w,new B.dhi(d));v.C();)j.azE(w.gR(0),j.ax+D.cgW[A.o.E(g.d,4)])
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
case"chance":s=j.at.aw(100)<D.cxT[A.o.E(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new C.f2(w,new B.dhj(d));v.C();)j.azE(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.ze(w,0,v-700)},
cqT(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.Z9(e,"~"+d))},
azE(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.aeD(d.a,v,e,w))
u.push(new B.Z9(w,v))},
a62(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=C.a3(w).k("bc<2>")
w=C.C(new C.bc(w,v),v.k("J.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aEF(r)
u.n(0,r,o.ax+o.bZw(s))}}w=o.c
v=C.T(w).k("a_<1>")
q=C.C(new C.a_(w,new B.dhm(o),v),v.k("J.E"))
if(q.length!==0){A.d.br(w,new B.dhn(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.K)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b5(u,1)
for(u=A.d.gae(v),r=new C.f2(u,new B.dho(p));r.C();)o.azE(u.gR(0),o.ax)}else o.aEF(u)}}A.d.br(o.d,new B.dhp(o))
A.d.br(o.e,new B.dhq(o))
A.d.br(o.f,new B.dhr(o))
A.d.br(o.w,new B.dhs(o))
A.d.br(o.x,new B.dht(o))
A.d.br(o.r,new B.dhu(o))
o.aU()},
v4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
ah(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=C.a([],x.D)
for(v=this.a,v=new C.du(v,v.r,v.e),u=x.N,t=x.C;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(C.F(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=C.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,C.K)(t),++o){n=t[o]
v.push(C.a([n.a,n.b],r))}return A.S.ao(C.F(["nodes",m,"edges",v],u,x.ew),null)},
cMG(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.S.aK(0,d,null))
k.a8(0)
for(o=x.j,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=C.u(J.q(v,"k"))
if(!D.mH.ai(0,u))continue
t=C.u(J.q(v,"id"))
m.n(0,t,new B.qM(t,u,new C.v(C.dT(J.q(v,"x"))*k.cy.a,C.dT(J.q(v,"y"))*k.cy.b),A.k.N(C.dT(J.q(v,"p")))))
s=C.c7(C.aK(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=C.u(J.q(r,0))
p=C.u(J.q(r,1))
if(m.ai(0,q)&&m.ai(0,p))n.push(new B.Co(q,p))}k.aU()
return!0}catch(l){return!1}},
cPI(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new B.qM(n,r,new C.v(q*p.a,o*p.b),s))
l.aU()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bbo(w[m.a],w[m.b])}},
gY(d){return this.cy}}
B.FP.prototype={}
B.VM.prototype={
T(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aE3(new B.bgI(C.U(w,x.f3),v,u,t,s,r,q,p,o,C.U(w,n),C.U(w,n),C.U(w,n),C.U(w,n),A.cG,A.K,A.aw,$.aw()),A.bx,A.J,A.J,A.U,null,null)}}
B.aE3.prototype={
ac6(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$ac6=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.ay(),$async$ac6)
case 6:q=n.jN(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new B.enw(s))
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
return C.i($async$ac6,v)},
a93(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a93=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new B.enl(s))
u=3
w=6
return C.b(C.ay(),$async$a93)
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
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$a93,v)},
bKY(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a3(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cJ(0,0,new B.enn())+"|"+A.d.cJ(o,0,new B.eno())
if(v===p.ch)return p.CW
u=new B.enr()
t=x.s
s=C.a([],t)
r=new B.ens(p,s,u)
for(n=new C.bc(n,w).gae(0),w=new C.f2(n,new B.enp());w.C();){q=n.gR(0)
if(!A.d.b6(o,new B.enq(q)))s.push(C.u(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.db(s,0,C.dI(5,"count",x.S),x.N).dJ(0)},
Z(){var w,v=this
v.a1()
v.ac6()
v.d.db=v.ay
w=v.qy(new B.enW(v))
w.hZ(0)
v.e!==$&&C.aP()
v.e=w},
q(){var w=this,v=w.as
if(v!=null)v.a7(0)
v=w.e
v===$&&C.c()
v.q()
v=w.d
v.U$=$.aw()
v.P$=0
w.bvL()},
abD(d){return this.bYZ(d)},
bYZ(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$abD=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.ay(),$async$abD)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cMG(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aWq(A.d.gI(D.axl))
if(s.c!=null)s.m(new B.env())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$abD,v)},
aWq(d){this.d.cPI(0,d.c,d.d)
this.E7()},
E7(){var w=this.as
if(w!=null)w.a7(0)
this.as=C.cM(A.lO,new B.enh(this))},
awA(d){var w,v,u,t,s=this.d.a,r=C.a3(s).k("bc<2>")
s=C.C(new C.bc(s,r),r.k("J.E"))
r=C.T(s).k("dx<1>")
s=new C.dx(s,r)
s=new C.bQ(s,s.gM(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ceP(d){var w,v,u,t,s,r=this.d.a,q=C.a3(r).k("bc<2>")
r=C.C(new C.bc(r,q),q.k("J.E"))
q=C.T(r).k("dx<1>")
r=new C.dx(r,q)
r=new C.bQ(r,r.gM(0),q.k("bQ<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bYN(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mH.h(0,r.b).c===D.wU)continue
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
c6r(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.hm_(new C.v(n.a+36,n.b+0),new C.v(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cyx(d){var w,v,u,t,s,r,q=this,p=q.awA(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eY()
u=v.b
if(u==="button"){w.aEF(p)
return}if(q.r)return
t=D.mH.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qF)s=6
else s=1
v.d=A.o.E(v.d+1,s)
w.aU()
q.E7()
return}if(q.r)return
r=q.c6r(d)
if(r!=null){w=q.d
A.d.cA(w.b,r)
w.aU()
q.E7()}},
cg7(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.ceP(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.awA(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aD(0,d)}},
cg8(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aU()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.v(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aU()}}},
b0y(){var w,v,u=this
if(u.z!=null){w=u.bYN(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bbo(v,w)}else v=!1
if(v){C.jT()
u.E7()}u.z=null
u.d.aU()}else if(u.x!=null){if(u.at)u.E7()
u.x=null}},
acj(d){return this.c0H(d)},
c0H(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$acj=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.awA(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.jl()
p=t.c
p.toString
w=3
return C.b(C.bS(F.n8,null,new B.eny(q),p,!0,!0,!1,A.lx,!1,!1,x.y),$async$acj)
case 3:if(f===!0){r.W(0,s)
t.E7()}case 1:return C.h(u,v)}})
return C.i($async$acj,v)},
c6p(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.B3(0,d,new C.v(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
C.eY()
this.E7()},
ag3(){var w=0,v=C.j(x.H),u=this,t,s
var $async$ag3=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.bS(F.n8,null,new B.enA(),s,!0,!0,!0,A.lx,!1,!1,x.es),$async$ag3)
case 2:t=e
if(t!=null)u.aWq(t)
return C.h(null,v)}})
return C.i($async$ag3,v)},
ady(d){var w=0,v=C.j(x.H),u=this,t
var $async$ady=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.enk(),t,null,!0,!0,x.y),$async$ady)
case 2:if(f===!0){u.d.a8(0)
u.E7()}return C.h(null,v)}})
return C.i($async$ady,v)},
B(d){var w=this,v=null,u=C.a([C.ai0(w.r?new C.bI(A.a3,v,v,new C.D(A.FL,C.hn(D.bLK,D.fmx,new B.enU(w),v),v),v):w.c6s(),A.bc,A.iF),C.E(C.cq(new B.enV(w)),1)],x.p)
if(!w.r)u.push(w.ctm())
return C.c8(v,A.c_,C.bm(!0,C.x(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bGG(){var w=null,v=new B.enm(),u=A.w.j(0.7),t=C.n(26),s=C.I(A.bv.j(0.5),A.q,1)
return C.bZ(0,C.en(C.av(C.p(w,C.cd(C.x(C.a([D.fxB,A.au,D.fF7,A.aB,v.$4(A.oY,A.bv,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(A_.BY,A.cl,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.lm,A.bY,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.all,A.bH,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fEr,new C.bI(A.a8,w,w,C.bK(!1,D.fuM,w,w,!0,w,w,this.gbGz(),w,w),w)],x.p),A.F,w,A.e,A.N,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),A.f,w,A.VH,new C.o(F.n8,w,s,t,w,w,A.n),w,w,w,A.fD,A8.aiF,w,w,w),w,w,w),u,!0),0,0,0)},
c6s(){var w=this,v=null,u=C.aH(v,v,v,v,S.np,v,v,v,new B.enG(w),v,v,v,v,v,v),t=w.a8w(A.NP,"How it works",new B.enH(w),!0),s=w.ay?A.o7:O.rn
return new C.D(D.bxc,C.B(C.a([u,D.byG,t,w.a8w(s,"Sound",new B.enI(w),!0),w.a8w(A.dX,"Ideas",w.gcjQ(),!0),w.a8w(D.yf,"Clear",w.gc6q(w),!0),w.aNj(A.iJ,"Show",new B.enJ(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aNj(d,e,f,g,h){var w=null,v=h?A.bv:A.c.j(0.08),u=C.n(14),t=C.n(14),s=C.a([C.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.D(Ac.vF,C.aF(!1,A.a1,!0,u,C.aL(!1,t,!0,C.hx(new C.D(new C.Q(8,8,8,8),C.B(s,A.m,w,A.e,A.N,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ag),w)},
a8w(d,e,f,g){return this.aNj(d,e,f,g,!1)},
ctm(){var w=null,v=new B.enC(this),u=A.c.j(0.08)
return C.p(w,C.cd(C.B(C.a([v.$2("START",D.wU),v.$2("CHANGE",D.DX),v.$2("REACT",D.qF)],x.p),A.F,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aP),A.f,w,w,new C.o(F.AO,w,new C.bO(new C.az(u,1,A.q,-1),A.Y,A.Y,A.Y),w,w,w,A.n),w,w,w,w,D.bss,w,w,w)},
ctn(d){var w,v,u,t,s=null,r=D.mH.h(0,d)
r.toString
w=C.n(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.q,1)
return new C.D(A.fC,C.aC(s,C.p(s,C.x(C.a([C.X(r.b,v,s,s,s,22),A.cV,C.d(r.a,s,1,A.a2,s,s,s,D.aR1,s,s,s)],x.p),A.m,s,A.e,A.N,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a8(A.b0,A.b4,A.x,u,s,s),A.n),s,s,s,s,A.hP,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.enB(this,d),s,s,s,s,s,s,!1,A.a7),s)}}
B.bgJ.prototype={
a4(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.by(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.W()
u=C.N()
u.r=A.c.j(0.05).gp(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.H()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.W()
o=C.N()
o.r=b5.cx.j(0.4*((p-b6)/800)).gp(0)
b8.b0(new C.a9(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){l=w[m]
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
d=C.a([],o)
a0=new C.aO(e.r,A.ao,b4,b4,d)
d.push(new C.b5(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new C.pH(h+a1,i,f-a1,g,f,g))
a2=D.mH.h(0,k.b).d
a3=D.mH.h(0,j.b).d
e=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=3
e.d=A.bS
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.rz(new C.v(h,i),new C.v(f,g))
e.sar(new C.a8(A.a3,A.a8,A.x,d,b4,b4).av(0,new C.a9(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbK().a.snapshot()
b7.drawPath((a0.e=new C.cC(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.hm_(new C.v(i.a+36,i.b+0),new C.v(h.a-36,h.b),a5)
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gp(0)
h.z=G.mI
q=h.H()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.c.gp(0)
q=g.H()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ad(0,D.Ie)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.aO($.W().r,A.ao,b4,b4,C.a([],o))
o=a8.b
a0.F(new C.b5(t,o))
i=a9.b
a0.F(new C.pH(t+a1,o,w-a1,i,w,i))
i=C.N()
i.b=A.ae
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aR(a0,i)
i=C.N()
i.r=A.c.gp(0)
b8.af(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b0=w[m]
o=b0.c
v=A.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dV.aA(0,v)
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.b=A.ae
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gp(0)
q=h.H()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b1=w[m]
v=A.k.D((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=C.lj(o,i,A.dV.aA(0,v))
h.toString
i=C.lj(o,i,A.dV.aA(0,A.k.D(v-0.35,0,1)))
i.toString
$.W()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.c=5
o.d=A.bS
g=b1.c
f=C.a([g.j(0),g],p)
e=C.rz(i,h)
o.sar(new C.a8(A.a3,A.a8,A.x,f,b4,b4).av(0,new C.a9(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.H()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=A.c.gp(0)
q=i.H()
b7.drawCircle(o,h,6,q)
q.delete()
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=g.j(0.5*(1-v)).gp(0)
i.z=A.jv
q=i.H()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
v=A.k.D((b6-a4.f)/a4.e,0,1)
o=a4.a
$.W()
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=a4.c.j(1-v).gp(0)
q=i.H()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){j=w[m]
o=j.a
$.W()
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.jv
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.sar(new C.bT(P.ps,0.5,A.x,b4,0,C.a([A.c,h],p),b4,b4).av(0,C.bU(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.K)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.bgK(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a4(b8,new C.v(t.a-o/2,t.b-(40+60*v+p.gbd(p)/2)))}for(b5=new C.du(n,n.r,n.e);b5.C();)b3.cfG(b8,b5.d,b6)
b7.restore()},
cfG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mH.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.ch(e.c,64,64)
t=C.bx(u,A.is)
s=t.eU(A.cB)
$.W()
r=C.N()
r.r=A.w.j(0.55).gp(0)
r.z=A.lv
d.aE(s,r)
if(v>0){s=t.cz(6)
r=C.N()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.zb
d.aE(s,r)}s=t.eU(A.cJ)
r=C.N()
q=h.d
r.r=C.aq(q,A.w,0.65).gp(0)
d.aE(s,r)
r=C.N()
s=C.aq(q,A.c,0.18+0.4*v)
s.toString
p=C.aq(q,A.w,0.35)
p.toString
r.sar(new C.a8(A.b0,A.b4,A.x,C.a([s,p],x.O),j,j).av(0,u))
d.aE(t,r)
r=C.N()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aE(t,r)
r=h.b
p=e.c
o=B.bgK(C.jK(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aD(0,new C.v(s/2,r.gbd(r)/2)))
n=B.bgK(h.a,11,A.c,j,j,A.H)
n.a4(d,e.c.ad(0,new C.v(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.E(e.d,r)]
else m=i==="pop"?D.axS[A.o.E(e.d,6)]:j
h=h.c
if(h===D.qF){s=e.c.ad(0,new C.v(0,62))
r=C.N()
r.r=D.ayt[A.o.E(e.d,6)].gp(0)
d.af(s,5,r)}else if(m!=null){l=B.bgK(m,9.5,A.aA,j,j,A.P)
l.a4(d,e.c.ad(0,new C.v(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bgK(m,9.5,A.aA,j,j,A.P)
l.a4(d,e.c.ad(0,new C.v(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wU)k.b1n(d,e.c.aD(0,D.Ie),q)
k.b1n(d,e.c.ad(0,D.Ie),q)},
b1n(d,e,f){var w
$.W()
w=C.N()
w.r=A.c_.gp(0)
d.af(e,9,w)
w=C.N()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.af(e,9,w)
w=C.N()
w.r=A.c.gp(0)
d.af(e,3.5,w)},
au(d){return!0}}
B.aLU.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bli.prototype={}
B.PN.prototype={
gY(d){return this.d}}
B.W0.prototype={
T(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.bkm(new C.cs(null,x.A),w,v,A.cG,A.bx,D.EX,null,null)}}
B.bkm.prototype={
b_5(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bm((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.awK[A.o.E(v,5)]+12*A.o.an(v,5)+12
switch(t.z){case"glow":B.li("synth",u,420,0.3)
break
case"rainbow":B.li("bell",u,700,0.35)
break
case"stars":B.li("pluck",u+12,400,0.4)
break
case"sparks":E.dG(2400+t.r.aw(2000),"",60,0,0.18,"noise")
break
default:E.dG(110+t.r.aw(60),"",140,0,0.22,"noise")}},
c9r(d){return this.b_5(d,!1)},
Z(){var w,v=this
v.a1()
w=v.qy(new B.ezB(v))
w.hZ(0)
v.w!==$&&C.aP()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.bvU()},
gb0S(){var w=this.Q
return w<0?new H.mS(1,A.k.E(this.y*0.18,360),0.85,1).iI():D.QW[w]},
aRL(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb0S(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=C.aq(A.bH,A.av,v.aj())
m.toString
j.push(new B.PN(new C.v(u+(q-0.5)*p,t),new C.v((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.aj()*0.4),l.y,700+v.aw(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.aj()*200
n=C.aq(k,A.c,v.aj()*0.6)
n.toString
j.push(new B.PN(d,new C.v(q*o,p*o),n,1.5+v.aj()*3,l.y,600+v.aw(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.aj()*40
j.push(new B.PN(d,new C.v(q*o,p*o),k,1.2+v.aj()*1.8,l.y,500))}}},
aYS(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb0S()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.bli(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aRL(e)
r.b_5(e,!0)
r.m(new B.ezc())},
aYR(){this.ax=null
this.m(new B.ezb())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.mE,n,n,n,new B.ezl(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.brL(k,o.f,o.y,o.at,n),A.aw)],m)
if(!o.ay&&k.length===0)j.push(D.b61)
k=C.aC(A.c7,new C.an(A.W,n,A.b1,A.r,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.ezm(o),new B.ezn(o),new B.ezr(o),n,n,n,n,n,n,n,n,n,new B.ezs(o),new B.ezt(o),n,n,n,!1,A.a7)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cW_[w]
j.push(new B.dB(v.b,o.z===v.a,new B.ezu(o,v),v.c,A.bY,n))}u=C.a([new B.Ff(A.c,o.Q<0,new B.ezv(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.Ff(D.QW[t],o.Q===t,new B.ezw(o,t),!1,n))
s=o.as
s=B.hH(A.bY,A.o.u(A.k.V(s)),"Size",36,4,new B.ezx(o),s)
r=o.ch
q=r?A.o7:O.rn
q=C.a([new B.dB("Sound",r,new B.ezy(o),q,A.bY,n),new B.fj(A.rm,"Undo",new B.ezo(o),A.c,n),new B.fj(D.yf,"Clear",new B.ezp(o),A.c9,n)],m)
for(w=0;w<4;++w){p=D.dbi[w]
q.push(new B.Ff(p,o.at.A(0,p),new B.ezq(o,p),!1,n))}return B.jL(A.bY,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.ex(k,o.d),"SPARK PAINTER",C.x(C.a([new B.eV(j,"BRUSH",n),new B.eV(u,"COLOUR",n),s,new B.eV(q,n,n)],m),A.m,n,A.e,A.N,0,A.p))}}
B.brL.prototype={
a4(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.W()
w=C.N()
v=a4.e
w.r=v.gp(v)
a6.b0(new C.a9(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.W()
o=C.a([],t)
n=new C.aO(p.r,A.ao,a5,a5,o)
o.push(new C.b5(A.d.gI(q).a,A.d.gI(q).b))
for(p=C.T(q),m=p.k("nn<1>"),l=new C.nn(q,1,a5,m),l.zK(q,1,a5,p.c),l=new C.bQ(l,l.gM(0),m.k("bQ<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bC(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gI(q)
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=r.c.gp(0)
j=p.H()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bS
q.e=A.fG
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new C.hC(A.G,p)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cC(n.gbK().a.snapshot()):q).a,j)
j.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bS
q.e=A.fG
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cC(n.gbK().a.snapshot()):q).a,j)
j.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bS
q.e=A.fG
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cC(n.gbK().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.mS(1,A.o.E(i*5,360),0.85,1).iI()
o=q[i-1]
m=q[i]
$.W()
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.c=p
l.d=A.bS
l.r=h.gp(0)
j=l.H()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,C.K)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gI(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new H.mS(1,A.o.E(a3*23,360),0.7,1).iI():l
a4.c6t(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=S.Rp
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c6t(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.W(),o=C.a([],x.v),n=new C.aO(p.r,A.ao,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new C.b5(r,q)
o.push(r)
q=n.f
if(q!=null)r.bC(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.ap(r,q)
o.push(r)
q=n.f
if(q!=null)r.bC(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.F(new C.bE())
$.W()
p=C.N()
p.r=h.j(0.4).gp(0)
p.z=A.jv
d.aR(n,p)
p=C.N()
p.r=h.gp(0)
d.aR(n,p)},
au(d){return!0}}
B.Wc.prototype={
T(){return new B.aEj(new C.cs(null,x.A),new C.as(new C.bb("NGMY",A.b5,A.aO),$.aw()),null,null)}}
B.aEj.prototype={
gIN(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.tK,null,1,null,v)
w.cL(0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
Z(){this.a1()
var w=this.gIN()
w.da()
w.dU$.L(0,this.gbXV())},
bXW(){var w,v,u,t,s,r,q,p=this,o=p.gIN().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.m4:new C.mb(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dG(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dG(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.li(s,D.avH[A.o.E(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIN().q()
var w=this.f
w.U$=$.aw()
w.P$=0
this.bw_()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.mb(h)
w=C.C(h,C.a3(h).k("J.E"))}v=D.QW[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.mE,j,j,j,new B.eGa(k,d),j,j,j,j,"Share",j)],h)
t=C.n(26)
s=D.axT[k.y]
s=C.bw(t,C.c_(C.av(C.c6(k.gIN(),new B.eGb(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a8(A.az,A.aC,A.x,s,j,j),A.n),A.bf),A.aq)
t=A.c.j(0.06)
t=C.aM(j,A.U,!1,j,!0,A.r,j,C.aN(),i,j,j,j,j,j,2,C.bs(j,new C.b4(4,C.n(14),A.Y),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.DB,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.eGc(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.hu,!0,A.a4,j,A.an,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cxF[r]
i.push(new B.dB(q.b,k.r===q.a,new B.eGd(k,q),j,A.bH,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.Ff(D.QW[o],k.w===o,new B.eGe(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.o7:O.rn
l=C.a([new B.dB(m,n,new B.eGf(k),l,A.bH,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.Ff(D.axT[o][0],k.y===o,new B.eGg(k,o),!1,j))
n.push(A.bp)
n.push(new B.fj(A.mA,"Replay",new B.eGh(k),A.c,j))
m=k.x
return B.jL(A.bH,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.D(A.bB,new C.ex(s,k.d),j),"TITLE ANIMATOR",C.x(C.a([t,A.O,new B.eV(i,"MOVE",j),new B.eV(p,"COLOUR",j),new B.eV(l,"SOUND",j),new B.eV(n,"BACK",j),B.hH(A.bH,A.o.u(A.k.V(m)),"Size",96,28,new B.eGi(k),m)],h),A.m,j,A.e,A.N,0,A.p))},
c_J(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cR(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
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
p.push(new C.cR(h,A.J,30*v))
p.push(new C.cR(h.j(0.8),A.J,60*v))
w=h
m=v
break
case"glitch":u=A.o.E(A.k.bm(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b8
else w=u?A.bY:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.mU.aA(0,t)
w=h
m=t
break
case"rainbow":w=new H.mS(1,A.k.E(g*360+e*40,360),0.75,1).iI()
A.d.a8(p)
p.push(new C.cR(w.j(0.7),A.J,18))
break
default:w=h}return C.de(C.dW(C.ef(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.v(l,o)),m)}}
B.aM2.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.aM8.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.a_G.prototype={}
B.VJ.prototype={
T(){var w=C.a([],x.aS)
return new B.aDW(new C.cs(null,x.A),w,A.cG,A.aw,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDW.prototype={
gadz(){var w=this.r
return new C.v(w.a/2,w.b/2)},
b27(){return new H.mS(1,this.f.aj()*360,0.6,1).iI()},
ar2(d,e,f,g){var w=this,v=w.gadz().ad(0,new C.v(Math.cos(e),Math.sin(e)).aG(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.a_G(v,new C.v(-t,s).aG(0,r).aG(0,u*f),w.Q*(0.6+w.f.aj()*0.9),w.b27(),C.a([],x.g)))},
bG0(d,e,f){return this.ar2(d,e,f,!1)},
bG_(d,e){return this.ar2(d,e,1,!1)},
cvH(){var w,v,u,t=this
A.d.a8(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bG_(40+w*u/5,v.aj()*3.141592653589793*2)},
bGV(){var w=this.r
this.bG0(Math.min(w.a,w.b)*0.42,this.f.aj()*3.141592653589793*2,0.45)},
Z(){this.a1()
this.li()},
lB(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.aw))return
w=a2.e
v=w.length
if(v===0&&a2.fW$<300)return
u=a2.gadz()
t=a3*a2.x/4
for(s=u.a,r=u.b,q=0;q<4;++q,v=o)for(p=0;o=w.length,p<o;w.length===v||(0,C.K)(w),++p){n=w[p]
o=n.a
m=s-o.a
o=r-o.b
l=Math.max(m*m+o*o,400)
k=Math.sqrt(l)
j=1e6*a2.w/l
i=new C.v(m/k*j,o/k*j)
if(a2.y)for(o=w.length,h=0;h<w.length;w.length===o||(0,C.K)(w),++h){g=w[h]
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
n.a=new C.v(j.a+m*t,j.b+o*t)}for(p=0;o=w.length,p<o;w.length===v||(0,C.K)(w),++p){n=w[p]
if(a2.z){o=n.e
if(o.length!==0){m=A.d.gal(o)
j=n.a
f=m.a-j.a
j=m.b-j.b
j=Math.sqrt(f*f+j*j)>3
m=j}else m=!0
if(m)o.push(n.a)
if(o.length>260)A.d.cA(o,0)}else A.d.a8(n.e)}for(p=0;p<w.length;w.length===o||(0,C.K)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lX(v.a-s)!==J.lX(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fW$-n.r>250){n.r=a2.fW$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
B.li("bell",D.avH[A.k.V((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a_(w,new B.ek1(u),C.T(w).k("a_<1>")).gM(0)>0&&a2.ax)E.dG(70,"",300,0.6,0.8,"sine")
A.d.br(w,new B.ek2(a2,u))},
cjJ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gadz()
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
if(A.o.E(s,3)===0)k.push(t)
if(m<16)break}return k},
gaW3(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aD(0,w).aG(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mE,r,r,r,new B.ejQ(s,d),r,r,r,r,"Share",r)],q),o=C.cq(new B.ejR(s)),n=s.w
n=B.hH(A.cs,A.k.aa(n,1)+"x","Sun mass",2.5,0.3,new B.ejS(s),n)
w=s.x
w=B.hH(A.cs,A.k.aa(w,1)+"x","Time",3,0.2,new B.ejU(s),w)
v=s.Q
v=B.hH(A.cs,A.o.u(A.k.V(v)),"Planet size",16,3,new B.ejV(s),v)
u=s.ax
t=u?A.o7:O.rn
return B.jL(A.cs,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.x(C.a([n,w,v,new B.eV(C.a([new B.dB("Sound",u,new B.ejW(s),t,A.cs,r),new B.dB("Trails",s.z,new B.ejX(s),A.O6,A.cs,r),new B.dB("Planets pull each other",s.y,new B.ejY(s),A.yD,A.cs,r)],q),r,r),new B.eV(C.a([new B.fj(A.mz,"Solar system",new B.ejZ(s),A.cs,r),new B.fj(A.no,"Comet",new B.ek_(s),A.c,r),new B.fj(A.mw,"Cluster",new B.ek0(s),A.c,r),new B.fj(D.yf,"Clear",new B.ejT(s),A.c9,r)],q),r,r)],q),A.m,r,A.e,A.N,0,A.p))}}
B.bl5.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.W()
w=C.N()
w.r=D.WZ.gp(0)
d.b0(new C.a9(0,0,0+g,0+f),w)
v=new C.eE()
v.dt(5)
for(w=d.a,u=0;u<70;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.25+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*g,s*f,r*1.2+0.3,p)
p.delete()}o=16+i.d*6
g=i.c
f=o*3.2
t=C.N()
s=x.O
t.sar(new C.bT(A.A,0.5,A.x,h,0,C.a([A.cs.j(0.45),A.K],s),h,h).av(0,C.bU(g,f)))
d.af(g,f,t)
t=C.N()
t.sar(D.ej3.av(0,C.bU(g,o)))
d.af(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.c=2.2*l+0.4
j.d=A.bS
j.r=r.j(l*0.8).gp(0)
p=j.H()
w.drawLine.apply(w,[q.a,q.b,k.a,k.b,p])
p.delete()}t=m.a
r=m.c
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k=m.d
q.r=k.j(0.3).gp(0)
q.z=G.mI
p=q.H()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j=C.aq(k,A.w,0.5)
j.toString
q.sar(new C.bT(P.ps,0.5,A.x,h,0,C.a([A.c,k,j],s),h,h).av(0,C.bU(m.a,r)))
p=q.H()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.N()
t.c=2
t.r=A.jj.gp(0)
d.bE(g,f,t)
t=C.N()
t.r=A.c.gp(0)
d.af(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.7).gp(0)
p=t.H()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
au(d){return!0}}
B.abD.prototype={}
B.W7.prototype={
T(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.bkr(new C.cs(null,x.A),w,v,A.cG,A.aw,$,A.bx,0,C.a([],x.X),null,null)}}
B.bkr.prototype={
Z(){this.a1()
this.li()},
c6u(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.e,v=k.r;w.length<A.k.V(k.x);){u=v.aj()*3.141592653589793*2
t=k.w
s=v.aj()
r=k.w
q=v.aj()
p=Math.cos(u)
o=Math.sin(u)
n=k.as
m=v.aj()
l=k.ax
if(l==="fish")l=170
else l=l==="fly"?50:300
w.push(new B.abD(new C.v(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.v(p*n,o*n),A.k.E(m*60+l,360)))}while(w.length>A.k.V(k.x))w.pop()},
lB(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.aw))return
a2.c6u()
w=a2.f
A.d.br(w,new B.eFC(a2))
v=a2.e
u=v.length
for(t=0;t<u;++t){s=v[t]
for(r=A.J,q=A.J,p=A.J,o=0,n=0;n<u;++n){if(t===n)continue
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
f=new C.v(0+(r.a/o-l.a)*k+(q.a/o-j.a)*i+p.a*g,0+(r.b/o-l.b)*k+(q.b/o-j.b)*i+p.b*g)}else f=A.J
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
f=new C.v(f.a-k/e*j*30,f.b-l/e*j*30)}}for(l=w.length,d=0;d<w.length;w.length===l||(0,C.K)(w),++d){k=w[d].a
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
k=A.k.D(a0,l*0.5,l*k)
s.b=new C.v(j.a/a0*k,j.b/a0*k)}l=s.a
k=s.b
s.a=new C.v(l.a+k.a*a3,l.b+k.b*a3)}a1=w.length
A.d.br(w,new B.eFD(a2))
if(w.length<a1&&a2.ch)B.li("bell",12+a2.r.aw(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fW$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fW$
B.li("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.mE,l,l,l,new B.eFr(m,d),l,l,l,l,"Share",l)],k),i=C.cq(new B.eFs(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cXC[w]
h.push(new B.dB(v.b,m.at===v.a,new B.eFt(m,v),v.c,A.b2,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cHC[w]
u.push(new B.dB(t.b,m.ax===t.a,new B.eFu(m,t),l,A.b2,l))}s=m.ch
r=s?A.o7:O.rn
r=C.a([new B.dB("Sound",s,new B.eFv(m),r,A.b2,l)],k)
s=m.x
s=B.hH(A.b2,A.o.u(A.k.V(s)),"How many",150,15,new B.eFw(m),s)
q=B.hH(A.b2,l,"Together",2.5,0,new B.eFx(m),m.y)
p=B.hH(A.b2,l,"Apart",2.5,0,new B.eFy(m),m.z)
o=B.hH(A.b2,l,"Same way",2.5,0,new B.eFz(m),m.Q)
n=m.as
return B.jL(A.b2,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.x(C.a([new B.eV(h,"TOUCH",l),new B.eV(u,"LOOK",l),new B.eV(r,l,l),s,q,p,o,B.hH(A.b2,A.o.u(A.k.V(n)),"Speed",280,50,new B.eFA(m),n)],k),A.m,l,A.e,A.N,0,A.p))}}
B.bsD.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.aej,D.blV],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.d9,U.LH],v):C.a([D.biQ,D.b9Y],v)}v=0+a6.a
u=0+a6.b
t=$.W()
s=C.N()
s.sar(new C.a8(A.b0,A.b4,A.x,w,a3,a3).av(0,new C.a9(0,0,v,u)))
a5.b0(new C.a9(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){q=v[r].a
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bH.gp(0)
o=p.H()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.bH.j(0.25).gp(0)
n.z=G.mI
o=n.H()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.mS(1,j,0.7,1).iI()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
f.r=h.j(0.35*g).gp(0)
f.z=A.jv
o=f.H()
s.drawCircle(j.a,j.b,9,o)
o.delete()
j=k.a
f=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
f.r=A.c.j(g).gp(0)
o=f.H()
s.drawCircle(j.a,j.b,2.6,o)
o.delete()
break
case"bird":J.by(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
e=Math.sin(l+j)*5
j=C.a([],m)
d=new C.aO(t,A.ao,a3,a3,j)
j.push(new C.b5(8,0))
j.push(new C.ap(-6,-7-e))
j.push(new C.ap(-2,0))
j.push(new C.ap(-6,7+e))
j.push(new C.bE())
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=h.gp(0)
o=j.H()
j=d.gbK().a.snapshot()
s.drawPath((d.e=new C.cC(j)).a,o)
o.delete()
s.restore()
break
default:J.by(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
a0=Math.sin(n+j)*3
j=C.a([],m)
d=new C.aO(t,A.ao,a3,a3,j)
j.push(new C.b5(9,0))
j.push(new C.cW(0,-6,-7,a0))
j.push(new C.ap(-12,-4+a0))
j.push(new C.ap(-12,4+a0))
j.push(new C.ap(-7,a0))
j.push(new C.cW(0,6,9,0))
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
f=C.aq(h,A.cA,0.6)
f.toString
j.sar(new C.a8(A.a3,A.a8,A.x,C.a([h,f],q),a3,a3).av(0,D.eOK))
o=j.H()
j=d.gbK().a.snapshot()
s.drawPath((d.e=new C.cC(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.c9
else a1=v==="scare"?A.bH:A.b2
v=u?12:22
u=C.N()
u.b=A.ae
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.af(a4,v,u)}},
au(d){return!0}}
B.ac5.prototype={}
B.Uf.prototype={
T(){var w=C.a([],x.bi)
return new B.aCw(w,A.cG,A.aw,C.U(x.N,x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCw.prototype={
gI9(){var w=this.r,v=18+A.k.V(w*0.85)
return A.o.D(A.k.V(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gacA(){return 54-8*(this.r/100)},
Z(){this.a1()
this.li()
B.zw("chain_burst").bB(new B.dGL(this),x.P)},
aYU(){return B.w_("chain_burst",C.F(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
azI(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
A.d.a8(k)
l.z=l.y=!1
w=l.as=0
l.at=null
v=18+A.k.V(l.r*0.85)
for(u=l.e;w<v;++w){t=u.aj()*3.141592653589793*2
s=u.aj()
r=l.f
q=u.aj()
p=l.f
o=Math.cos(t)
n=Math.sin(t)
m=(30+l.r*0.45)*(0.6+u.aj()*0.8)
k.push(new B.ac5(new C.v(20+s*(r.a-40),20+q*(p.b-40)),new C.v(o*m,n*m),new H.mS(1,u.aj()*360,0.6,1).iI()))}},
Zh(d){var w,v=this
if(d==null)return 0
w=(v.fW$-d)/1000
if(w<0.4)return v.gacA()*A.dV.aA(0,w/0.4)
if(w<1.1)return v.gacA()
if(w<1.5)return v.gacA()*(1-(w-1.1)/0.4)
return 0},
lB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.aw)||!j.Q)return
w=j.d
if(w.length===0)j.azI()
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
if(s<8||s>j.f.b-8)t.b=new C.v(r.a,-r.b)}if(j.y){n=C.a([],x.U)
v=j.at
if(v!=null)n.push(new C.z(v,j.Zh(j.ax)))
for(v=A.d.gae(w),s=new C.f2(v,new B.dGM());s.C();){r=v.gR(0)
n.push(new C.z(r.a,j.Zh(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.K)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fW$
E.dG(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eY()
break}}}if(!(j.at!=null&&j.Zh(j.ax)>0||A.d.b6(w,new B.dGN(j)))&&j.fW$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gI9()){if(j.as>=j.gI9()*1.5)k=3
else k=j.as>=j.gI9()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.BK("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aYU()}else E.dG(120,"",300,0,0.3,"saw")}}},
aYT(d){this.m(new B.dGB(this,d))
this.aYU()},
adA(){var w=0,v=C.j(x.H),u=this,t,s
var $async$adA=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dGE(u),s,null,!0,!0,x.S),$async$adA)
case 2:t=e
if(t!=null)u.aYT(t)
return C.h(null,v)}})
return C.i($async$adA,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gI9(),t=w.x.h(0,""+w.r)
return B.jL(A.bY,A.hb,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cq(new B.dGI(w,t==null?0:t,u)),"CHAIN BURST",C.B(C.a([new B.fj(A.ri,"Levels",w.gc6v(),A.bY,v),new B.fj(A.k6,"New board",new B.dGJ(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
auA(d,e,f){var w=null
return C.x(C.a([C.d(d,w,w,w,w,w,w,D.aQm,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bYp(d,e){return this.auA(d,e,A.c)}}
B.baz.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.W()
w=C.N()
w.r=D.EX.gp(0)
d.b0(new C.a9(0,0,0+e.a,0+e.b),w)
v=new B.cLP(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),A.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,C.K)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=n.j(0.25).gp(0)
p.z=G.mI
m=p.H()
t.drawCircle(o.a,o.b,12,m)
m.delete()
o=q.a
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=n.gp(0)
m=p.H()
t.drawCircle(o.a,o.b,8,m)
m.delete()}}},
au(d){return!0}}
B.aL1.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bwP.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.buR()}}
B.aLR.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bx5.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvI()}}
B.aM5.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bxd.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvX()}}
B.FL.prototype={
gcOY(){return this.a.aD(0,this.b).gcn()>4}}
B.acV.prototype={}
B.VD.prototype={
T(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.bk0(new C.cs(null,x.A),w,v,A.cG,A.aw,$,A.bx,0,C.a([],x.X),null,null)}}
B.bk0.prototype={
aPk(d){return new H.mS(1,A.o.E(d*29,360),0.6,1).iI()},
a_1(d){var w,v=D.CA.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bm(d.a/s*t),0,t-1)
return v[A.o.E(w,u)]+12*A.o.dY(w,u)},
aS0(d){A.d.br(this.e,new B.efv(this,d))},
crM(d,e,f){var w=f.aD(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aD(0,e).gcn()
return d.aD(0,e.ad(0,w.aG(0,A.k.D((d.aD(0,e).a*v+d.aD(0,e).b*u)/t,0,1)))).gcn()},
ayd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
A.d.a8(f)
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
k=g.a_1(new C.v((q+n)/2,(p+m)/2))
p=r?o:new C.v(n,p)
r=r?l:new C.v(q,m)
f.push(new B.FL(p,r,k,new H.mS(1,A.o.E(k*29,360),0.6,1).iI()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.v(v*(0.1+i*0.16+r),w)
k=g.a_1(h)
f.push(new B.FL(h,h,k,new H.mS(1,A.o.E(k*29,360),0.6,1).iI()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.v(v*(0.08+w.aj()*0.84),u*(0.2+w.aj()*0.65))
k=g.a_1(h)
f.push(new B.FL(h,h,k,new H.mS(1,A.o.E(k*29,360),0.6,1).iI()))}}},
Z(){this.a1()
this.li()},
c6x(d,e){var w,v=this.fW$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
B.li(v,d.c+12,w,A.k.D(0.25+e/900,0.25,0.8))}},
lB(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.aw))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new B.acV(new C.v(a2.w.a*(0.2+v.aj()*0.6),6),new C.v((v.aj()-0.5)*40,0),new H.mS(1,v.aj()*360,0.5,1).iI()))}if(u>3)a2.as=0
for(v=w.length,u=a2.e,t=a3/2,s=900*t,r=0;r<w.length;w.length===v||(0,C.K)(w),++r){q=w[r]
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
q.b=new C.v(-o.a*0.6,o.b)}for(o=u.length,i=0;i<u.length;u.length===o||(0,C.K)(u),++i){h=u[i]
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
e=A.k.D(((k.a-m)*l+(k.b-j)*n)/(l*l+n*n),0,1)
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
if(a1<0){a2.c6x(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.v(m.a-l*k,m.b-n*k)}}}}}A.d.br(w,new B.efU(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.X(q.ay?A.o7:O.rn,A.ad,p,p,p,21),p,p,p,new B.efJ(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.mE,p,p,p,new B.efK(q,d),p,p,p,p,"Share",p)],o),m=C.cq(new B.efL(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.d04[w]
l.push(new B.dB(v.b,q.x===v.a,new B.efM(q,v),v.c,A.b8,p))}u=C.a([],o)
for(t=J.aV(D.CA.gee(D.CA));t.C();){s=t.gR(t)
u.push(new B.dB(s,q.y===s,new B.efN(q,s),p,A.b8,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.ayP[w]
t.push(new B.dB(r.b,q.z===r.a,new B.efO(q,r),p,A.b8,p))}s=q.Q
return B.jL(A.b8,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.x(C.a([new B.eV(l,"TOOL",p),new B.eV(u,"SCALE",p),new B.eV(t,"SOUND",p),B.hH(A.b8,A.k.aa(s,1)+"/s","Marbles",4,0.3,new B.efP(q),s),new B.eV(C.a([new B.fj(D.bHA,"Stairs",new B.efQ(q),A.b8,p),new B.fj(Al.NO,"Pinball",new B.efR(q),A.c,p),new B.fj(A.mw,"Random",new B.efS(q),A.c,p),new B.fj(D.yf,"Clear",new B.efT(q),A.c9,p)],o),p,p)],o),A.m,p,A.e,A.N,0,A.p))}}
B.bhD.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.W()
w=C.N()
w.sar(D.bYH.av(0,new C.a9(0,0,a0,a1)))
a2.b0(new C.a9(0,0,a0,a1),w)
for(a0=e.b,a1=a0.length,w=a2.a,v=x.O,u=e.f,t=0;t<a0.length;a0.length===a1||(0,C.K)(a0),++t){s=a0[t]
r=A.k.D(1-(u-s.e)/280,0,1)
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
if(Math.sqrt(m*m+k*k)>4){q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bS
q.c=12+j
q.r=i.j(0.2+h).gp(0)
q.z=A.jv
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bS
q.c=6
q.r=C.aq(i,A.c,r*0.7).gp(0)
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=i.j(0.25+h).gp(0)
p.z=A.jv
g=p.H()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p=C.aq(i,A.w,0.4)
p.toString
j.sar(new C.bT(P.ps,0.5,A.x,d,0,C.a([A.c,i,p],v),d,d).av(0,C.bU(q,9)))
g=j.H()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.N()
u.c=5
u.d=A.bS
u.r=A.aA.gp(0)
a2.bE(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.K)(a0),++t){f=a0[t]
u=f.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p=f.c
q.r=p.j(0.3).gp(0)
q.z=A.rx
g=q.H()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.sar(new C.bT(P.ps,0.5,A.x,d,0,C.a([A.c,p],v),d,d).av(0,C.bU(f.a,7)))
g=q.H()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
au(d){return!0}}
B.adq.prototype={}
B.VI.prototype={
T(){var w=C.a([],x.gB)
return new B.aDV(new C.cs(null,x.A),w,A.cG,A.aw,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDV.prototype={
gaYV(){var w=this.w
return new C.v(w.a/2,w.b/2)},
ayq(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
azD(d){var w=D.CA.h(0,this.y),v=5-d,u=w.length
return w[A.o.E(v,u)]+12*A.o.dY(v,u)},
Z(){this.a1()
this.li()},
aQL(){var w,v,u,t,s=this.e
A.d.a8(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.adq(w,A.k.E(t/v+u,1)))}},
lB(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.aw))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fW$
if(p.Q){r=p.z
s=p.azD(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.li(r,s+12,q,0.55)}}}},
c6y(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aD(0,h.gaYV()),e=f.gcn()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.ayq(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=A.k.E((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
s=h.e
s=C.a(s.slice(0),C.T(s))
r=s.length
q=d.a
p=d.b
o=0
for(;o<s.length;s.length===r||(0,C.K)(s),++o){n=s[o]
m=n.a
if(m!==g.a)continue
l=n.b*2*3.141592653589793-1.5707963267948966
k=h.w
j=Math.cos(l)
i=Math.sin(l)
m=h.ayq(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.ejp(h,n).$0()
h.c.ef()
return}}h.m(new B.ejq(g,h,t))
if(h.Q)B.li(h.z,h.azD(g.a)+12,700,0.5)
C.eY()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.X(r.Q?A.o7:O.rn,A.ad,q,q,q,21),q,q,q,new B.ejx(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.mE,q,q,q,new B.ejy(r,d),q,q,q,q,"Share",q)],p),n=C.cq(new B.ejz(r)),m=r.x
m=B.hH(A.bu,""+A.k.V(m),"Tempo",180,40,new B.ejA(r),m)
w=C.a([],p)
for(v=J.aV(D.CA.gee(D.CA));v.C();){u=v.gR(v)
w.push(new B.dB(u,r.y===u,new B.ejB(r,u),q,A.bu,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.ayP[t]
v.push(new B.dB(s.b,r.z===s.a,new B.ejC(r,s),q,A.bu,q))}return B.jL(A.bu,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.x(C.a([m,new B.eV(w,"SCALE",q),new B.eV(v,"SOUND",q),new B.eV(C.a([new B.fj(A.dX,"Demo",new B.ejD(r),A.bu,q),new B.fj(A.mw,"Random",new B.ejE(r),A.c,q),new B.fj(D.yf,"Clear",new B.ejF(r),A.c9,q)],p),q,q)],p),A.m,q,A.e,A.N,0,A.p))}}
B.bl6.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.W()
w=C.N()
w.r=D.WZ.gp(0)
a5.b0(new C.a9(0,0,0+a6.a,0+a6.b),w)
w=a3.d
v=a3.e
u=v.$1(w-1)+14
t=a3.c
s=t.aD(0,new C.v(0,u))
r=C.N()
r.c=2
q=x.O
p=t.a
o=p-1
n=t.b
m=n-u
r.sar(new C.a8(A.b4,A.b0,A.x,C.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).av(0,new C.a9(o,m,o+2,m+u)))
a5.bE(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mS(1,A.k.E(s.$1(l)*23,360),0.55,1).iI()
o=v.$1(l)
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.di9[A.o.E(A.o.E(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.kk(new C.es(o,a4,a4,A.cO,a4,a4,a4,a4,a4,a4,new C.H(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a4,A.c6,new C.jv(1),a4,a4,a4,a4,A.c5,a4)
i.en()
o=i.b.c
m=J.fT2(v.$1(l))
h=i.b.a.c
i.a4(a5,new C.v(p+-o/2,n+(m-h.gbd(h)-2)))}w=C.N()
w.sar(D.eiG.av(0,C.bU(t,16)))
a5.af(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.K)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.mS(1,A.k.E(s.$1(a0)*23,360),0.55,1).iI()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fT2(v.$1(a0))
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=3*a2
a0.r=k.j(a2).gp(0)
j=a0.H()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=k.j(0.35).gp(0)
d.z=A.jv
j=d.H()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.sar(new C.bT(P.ps,0.5,A.x,a4,0,C.a([A.c,k],q),a4,a4).av(0,C.bU(new C.v(h,a1),8.5)))
j=d.H()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
au(d){return!0}}
B.aLP.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bx3.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvG()}}
B.aLQ.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bx4.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvH()}}
B.tl.prototype={}
B.b9s.prototype={}
B.VG.prototype={
T(){var w=x.S
return new B.aDT(C.a([],x.aq),C.U(w,w),C.aX(w),D.eV1)}}
B.aDT.prototype={
Z(){this.a1()
B.zw("molecule_maker").bB(new B.eiU(this),x.P)},
aj7(d){var w={}
w.a=0
this.f.bM(0,new B.eiG(w,d))
return w.a},
gaZ0(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)t.push(w[u].a)
return B.i2Z(t,this.f,D.a39[this.d])},
c6P(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eE()
w.dt(t*7+3)
t=v.y
v.m(new B.eiA(v,e,t.a,w,t.b))
B.w2("pop",u.length,90,0.35)},
awE(d){return this.m(new B.eiB(this))},
aZ1(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c6V(d){this.m(new B.eiF(this,this.aZ1(d)))},
coc(){var w=this.r
if(w==null)return
this.m(new B.eiE(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a39[k.d],h=k.gaZ0()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.we.h(0,w[u].a).a-k.aj7(u)
w=i.c
w=w.gdL(w)
t=w.dz(w,new B.eiO(),x.N).aH(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.b2:A.hm
r=x.p
s=C.x(C.a([new C.D(A.fN,B.fdw(w,s,h&&k.d<12?new B.fj(A.j1,"Next",new B.eiP(k),A.b2,j):j),j),C.E(C.cq(new B.eiQ(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dB(p+D.a39[u].b,k.d===u,new B.eiR(k,u),j,A.hm,j))}q=C.a([],r)
for(p=D.we.gdL(D.we),p=p.gae(p);p.C();){o=p.gR(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dy:m.b
q.push(new B.dB(n+" \xb7 "+m.a,!1,new B.eiS(k,o),j,l,j))}return B.jL(A.hm,A.hb,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.x(C.a([new B.eV(w,"GOAL",j),new B.eV(q,"ADD",j),new B.eV(C.a([new B.dB("Remove selected atom",!1,k.gcob(),A.e7,A.c9,j),new B.dB("Clear all",!1,k.gc6Q(k),A.k6,A.aM,j)],r),j,j)],r),A.m,j,A.e,A.N,0,A.p))}}
B.bik.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.E(t*37,10)
r=A.o.E(t*53,10)
$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.hm.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bM(0,new B.dpq(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.we.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bU(j,26)
if(q===t){$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.aM.j(0.4).gp(0)
h.z=A.jv
p=h.H()
u.drawCircle(j.a,j.b,34,p)
p.delete()}j=m.b
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g=l.b
f=C.aq(g,A.c,0.5)
f.toString
e=C.aq(g,A.w,0.5)
e.toString
h.sar(new C.bT(A.K6,0.5,A.x,a3,0,C.a([f,g,e],r),I.awT,a3).av(0,i))
p=h.H()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.ax:A.c
d=new C.kk(new C.es(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,new C.H(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a4,A.c6,new C.jv(1),a3,a3,a3,a3,A.c5,a3)
d.en()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a4(a4,new C.v(n.a-h/2,n.b-j.gbd(j)/2))
n=k===0
a0=n?A.bd:A.aF
j=m.b
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=a0.gp(0)
p=h.H()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.u(k)
a1=new C.kk(new C.es(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,A.nC),A.a4,A.c6,new C.jv(1),a3,a3,a3,a3,A.c5,a3)
a1.en()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a4(a4,new C.v(n.a+(20-h/2),n.b+(-20-j.gbd(j)/2)))}if(n===0){d=C.h3(a3,a3,a3,a3,D.f2K,A.a4,A.c6,a3,A.dP,A.c5)
d.en()
d.a4(a4,new C.v((w-d.b.c)/2,v/2))}},
au(d){return!0}}
B.UE.prototype={
T(){var w=x.s
return new B.bjg(C.a([],w),C.a([],w))}}
B.bjg.prototype={
Z(){this.a1()
this.avY()
B.zw("dna_lab").bB(new B.dPv(this),x.P)},
gb3m(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a4f.h(0,w[u])
t.toString
s.push(t)}return A.d.h2(s)},
ga94(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ap(this.gb3m(),w,v))}return u},
avY(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eE()
k.dt(l.e*31+l.d*7+C.BX(new C.S(Date.now(),0,!1)))
w=new B.dPk(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mI(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a4f.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.h2(r))}if(!A.d.b6(t,new B.dPj()))break}l.f=v
A.d.a8(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.b14()},
b14(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.h0R(s.ga94()[r])
v=J.dJ(D.CB.gee(D.CB),new B.dPl(w)).dJ(0)
u=new C.eE()
u.dt(r+s.e)
A.d.fp(v,u)
u=C.a([w],x.s)
A.d.v(u,C.db(v,0,C.dI(3,"count",x.S),C.T(v).c))
t=new C.eE()
t.dt(s.e*3+r)
A.d.fp(u,t)
s.z=u},
aZ_(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.doo.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a4f.h(0,w.f[v])
u.toString
break A}u=B.h0R(w.ga94()[v])
break A}w.m(new B.dPi(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dPt(),e=new B.dPo(),d=h.d===2?h.gb3m():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mQ,g,g,g),A.au],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bY.j(0.18):A.K
q=new C.aT(10,10)
p=new C.az(t.length===s?A.bY:A.bE,1,A.q,-1)
o=C.a([],a0)
for(n=h.ga94()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cl(A.aP,A.e,A.N,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,D.bry,A.ek,g,g,g))}v.push(C.bV(A.bA,u,A.br,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.bV(A.bA,u,A.br,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a7(34,g,new C.cp(A.A,g,g,C.X(Ah.NV,j<t.length?A.aA:A.bE,g,g,g,14),g),g))
A.d.v(v,C.a([new C.D(A.Ml,C.bV(A.bA,u,A.br,0,0),g)],a0))}v.push(A.am)
v.push(C.d(w,g,g,g,g,g,g,Q.mQ,g,g,g))
v.push(A.au)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.b2.j(0.25):A.dm
q=new C.aT(12,12)
o=j<t.length
p=new C.az(o?A.b2:A.b_,1,A.q,-1)
if(o){o=D.CB.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.bX
u.push(C.p(g,new C.y(o,g,new C.H(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,g,A.ej,g,g,g))}v.push(C.bV(A.bA,u,A.br,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.bV(A.bA,u,A.br,0,0))}v.push(A.aB)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.fdw(u,t>=(h.d===2?3:9)?A.b2:A.bY,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.fdw(u,A.bY,g))}v.push(A.R)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,K.U2,g,g,g))
v=C.cd(C.x(v,A.F,g,A.e,A.j,0,A.p),A.r,g,A.y,g,A.bB,g,g,A.ah)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dB(D.d5R[j],h.d===j,new B.dPp(h,j),g,A.bY,g))
u=C.a([new B.eV(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bI(A.a3,g,g,new B.fj(A.k6,"New strand",new B.dPq(h),A.b2,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.K)(t),++l){i=t[l]
q=D.CB.h(0,i)
q.toString
a0.push(new B.fj(D.a09,q,new B.dPr(h,i),A.bY,g))}u.push(C.bV(A.bA,a0,A.br,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.avM:D.cPL
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aT(14,14)
a0.push(C.aC(g,C.p(A.A,new C.y(k,g,D.f2Z,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bp(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dPs(h,k),g,g,g,g,g,g,!1,A.a7))}u.push(C.B(a0,A.m,g,A.qf,A.j,0,g,g))}return B.jL(A.bY,A.hb,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.x(u,A.m,g,A.e,A.N,0,A.p))}}
B.UU.prototype={
T(){return new B.aD_(A.bx,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aD_.prototype={
Z(){var w,v=this
v.a1()
w=v.qy(v.gc6R())
w.hZ(0)
v.d!==$&&C.aP()
v.d=w
B.zw("ecosystem").bB(new B.dSk(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.bv5()},
gaME(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c6S(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
m.e=d
if(l<=0)return
for(w=l*1.5/4,v=x.n,u=0;u<4;++u){t=m.f
s=m.x
r=m.y
q=m.z
p=t[0]
o=t[1]
n=t[2]
m.f=C.a([A.k.D(p+(s*(100-p)*0.05-0.0016*o*p)*w,0,100),A.k.D(o+(0.9*r*o*p/(p+40)-0.019*q*o*n-0.35*o)*w,0,400),A.k.D(n+(0.01*q*o*n-0.4*n)*w,0,200)],v)}w=m.w+=l
v=m.r
if(v.length===0||w-A.d.gal(v)[3]>0.25){w=C.C(m.f,x.i)
w.push(m.w)
v.push(w)
if(v.length>160)A.d.cA(v,0)}if(m.gaME()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.E(A.k.bm(w),5)===0)B.w_("ecosystem",C.F(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.m(new B.dS7())},
aag(d){this.m(new B.dS6(this,d))
B.w2("pop",3,120,0.4)},
c6U(){return this.m(new B.dS8(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.x(C.a([new C.D(D.YP,B.fdw(r,t.gaME()?A.b2:A.c9,s),s),C.E(new C.D(D.bs5,C.bw(C.n(18),C.b3(s,s,s,new B.bdE(t.f,t.r,t.w,s),A.f5),A.aq),s),1),new C.D(A.eI,C.d("Alive together: "+A.k.V(t.Q)+" s     Best: "+A.k.V(t.as)+" s",s,s,s,s,s,s,D.fa2,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hH(A.b2,A.k.aa(w,1)+"\xd7","Grass growth",2,0.2,new B.dSc(t),w)
v=t.y
v=B.hH(A.bN,A.k.aa(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dSd(t),v)
u=t.z
return B.jL(A.b2,A.hb,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.x(C.a([w,v,B.hH(A.cs,A.k.aa(u,1)+"\xd7","Fox hunting",2,0.3,new B.dSe(t),u),new B.eV(C.a([new B.dB("Drought",!1,new B.dSf(t),A.yB,A.aM,s),new B.dB("Disease",!1,new B.dSg(t),D.bHs,A.bu,s),new B.dB("+ Foxes",!1,new B.dSh(t),s,A.cs,s),new B.dB("+ Rabbits",!1,new B.dSi(t),s,A.bN,s),new B.dB("Reset",!1,t.gc6T(),A.k6,A.aN,s)],q),s,s)],q),A.m,s,A.e,A.N,0,A.p))}}
B.bdE.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.W()
w=C.N()
w.sar(D.bWI.av(0,new C.a9(0,0,d,a0)))
a1.b0(new C.a9(0,0,d,a0),w)
w=h.b
a0=C.aq(A.vb,A.bd,A.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.N()
t.r=a0.gp(0)
a1.b0(new C.a9(0,v,d,v+u),t)
s=A.k.V(w[0]*0.9)
r=new C.eE()
r.dt(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.aj()*e
o=f*(0.6+0.4*r.aj())
t=Math.sin(a0+q)
n=r.aj()
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.hk.gp(0)
m.c=1.6
l=m.H()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new B.d4x(h,a2,f,a1)
k.$5(Math.min(A.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.a9(10,a0,e,u)
t=C.N()
t.r=D.beF.gp(0)
a1.b0(new C.a9(0,f,d,f+g),t)
i=C.N()
i.r=A.dm.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d4z(h,j,a1)
g.$3(0,100,A.bd)
g.$3(1,120,A.bN)
g.$3(2,24,A.cs)
g=new B.d4y(a1,j)
g.$3("Grass "+A.k.V(w[0]),A.bd,16)
g.$3("Rabbits "+A.k.V(w[1]),A.bN,102)
g.$3("Foxes "+A.k.V(w[2]),A.cs,200)},
au(d){return!0}}
B.aLf.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.aRH.prototype={
guX(){return A.d.cJ(this.a,0,new B.bFY())}}
B.U6.prototype={
T(){var w=x.S
return new B.biV(B.i02(),C.c2(5,0,!1,w),C.aX(w),A.bx,null,null)}}
B.biV.prototype={
gvU(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cJ(t,0,new B.dCW())},
Z(){var w,v=this
v.a1()
w=v.qy(new B.dD8(v))
w.hZ(0)
v.x!==$&&C.aP()
v.x=w
B.zw("balance_lab").bB(new B.dD9(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.buJ()},
cyK(d){var w,v=this
v.m(new B.dCX(v,d))
B.w2("click",v.f[d],60,0.4)
if(v.gvU()===v.d[v.e].guX()&&v.r.L(0,v.e)){B.w2("zap",10,260,0.5)
w=v.r
w=C.C(w,C.a3(w).k("co.E"))
B.w_("balance_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.M(k,new B.dD1(),C.T(k).k("M<1,m>")).aH(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aH(k," + ")
if(o.gvU()===m[o.e].guX())s="\u2696\ufe0f Balanced! "+m[o.e].guX()+" = "+o.gvU()+". The torques are equal, so the seesaw stays level."
else s=o.gvU()>m[o.e].guX()?"The right side is too strong ("+o.gvU()+" vs "+m[o.e].guX()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].guX()+" vs "+o.gvU()+"). Add weight to the right, or place it further from the middle."
k=o.gvU()===m[o.e].guX()?A.b2:A.aM
k=B.bzY(s,k,o.gvU()===m[o.e].guX()&&o.e<m.length-1?new B.fj(A.j1,"Next",new B.dD2(o),A.b2,n):n)
w=C.E(C.cq(new B.dD3(o,l)),1)
u=j.length===0?"0":j
u=C.E(C.d("Left torque\n"+u+" = "+m[o.e].guX(),n,n,n,n,n,n,D.aRy,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.x(C.a([new C.D(D.YP,k,n),w,new C.D(D.ahR,C.B(C.a([u,C.E(C.d("Right torque\n"+r+" = "+o.gvU(),n,n,n,n,n,n,D.aRy,A.dN,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dB(w+p,o.e===v,new B.dD4(o,v),n,A.aM,n))}return B.jL(A.aM,A.hb,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.x(C.a([new B.eV(u,"LEVEL",n),new B.eV(C.a([new B.dB("Clear right side",!1,new B.dD5(o),A.k6,A.c9,n)],q),n,n)],q),A.m,n,A.e,A.N,0,A.p))}}
B.b9E.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aO($.W().r,A.ao,null,null,C.a([],x.v))
i.F(new C.b5(h,f))
w=f+70
i.F(new C.ap(h-30,w))
i.F(new C.ap(h+30,w))
i.F(new C.bE())
v=C.N()
v.r=A.ak.gp(0)
d.aR(i,v)
v=h-120
i=C.N()
i.r=A.aJ.gp(0)
d.b0(new C.a9(v,w,v+240,w+8),i)
i=d.a
J.by(i.save())
i.translate(h,f)
d.ja(0,j.b)
u=g*5.8
t=C.bx(new C.a9(-u,-9,u,9),A.he)
w=C.N()
w.sar(D.bZo.av(0,new C.a9(t.a,t.b,t.c,t.d)))
d.aE(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.W()
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.hM.gp(0)
v.c=1.5
r=v.H()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
B.fqZ(d,""+Math.abs(s),new C.v(w,22),A.bX,10)}q=new B.cEm(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aN)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bY)
if(w[s]===0){l=C.bx(C.ch(new C.v(m,-22),22,v),A.he)
$.W()
k=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k.b=A.ae
k.c=1.4
k.r=A.b_.gp(0)
r=k.H()
i.drawRRect(C.et(l),r)
r.delete()
B.fqZ(d,"+",new C.v(m,-22),A.bX,14)}}i.restore()
$.W()
i=C.N()
i.r=(j.e?A.b2:A.aL).gp(0)
d.af(new C.v(h,f),7,i)},
au(d){return!0},
gjq(){return this.e}}
B.V7.prototype={
T(){return new B.bjs(C.a([16,32,12,24],x.t),C.aX(x.S),A.bx,null,null)}}
B.bjs.prototype={
ga0u(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gadJ(){var w=this.ga0u(),v=this.r,u=D.ayy[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.dd(this.d,x.S).a<4)
else w=!1
return w},
Z(){var w,v=this
v.a1()
w=v.qy(new B.dWn(v))
w.hZ(0)
v.x!==$&&C.aP()
v.x=w
B.zw("gear_lab").bB(new B.dWo(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bvd()},
c6W(d,e){var w,v=this
v.m(new B.dWd(v,d,e))
if(v.gadJ()&&v.w.L(0,v.r)){B.w2("zap",8,240,0.45)
w=v.w
w=C.C(w,C.a3(w).k("co.E"))
B.w_("gear_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga0u(),n=r.ga0u(),m=D.ayy[r.r].a
m=r.gadJ()?"\u2705 Done! Ratio "+A.k.aa(r.ga0u(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gadJ()?A.b2:A.cs
v=r.d
u=x.p
n=C.x(C.a([new C.D(D.YP,B.bzY(m,w,r.gadJ()&&r.r<7?new B.fj(A.j1,"Next",new B.dWh(r),A.b2,q):q),q),C.E(C.b3(q,q,q,new B.bf7(v,r.f,q),A.f5),1),new C.D(D.ahR,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.aa(r.ga0u(),2)+"   \xb7   Output "+A.k.aa(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.aa(1/n,2),q,q,q,q,q,q,R.a7Z,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dB(m+s,r.r===t,new B.dWi(r,t),q,A.cs,q))}p=r.e
u=C.a([new B.eV(o,"GOAL",q),B.hH(A.aN,""+A.k.V(p)+" rpm","Input speed",120,10,new B.dWj(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.avy("Gear "+s+" teeth",p,new B.dWk(r,t),8,40,D.dfJ[t],""+p,q))}return B.jL(A.cs,A.hb,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.x(u,A.m,q,A.e,A.N,0,A.p))}}
B.bf7.prototype={
bQi(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.W(),j=C.a([],x.v),i=new C.aO(k.r,A.ao,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.ejZ,D.epr,D.eFO,D.ewy],s=v===0,r=0;r<4;++r){q=t[r]
p=q.a
o=u+p*h
n=e+q.b
m=k+Math.cos(o)*n
l=w+Math.sin(o)*n
if(s&&p===0){p=new C.b5(m,l)
j.push(p)
m=i.f
if(m!=null)p.bC(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}else{p=new C.ap(m,l)
j.push(p)
m=i.f
if(m!=null)p.bC(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}}}i.F(new C.bE())
return i},
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.n)
for(w=this.b,v=0;v<4;++v)g.push(w[v]*2.2)
u=g[0]
t=u+g[1]+6
s=g[2]
r=g[3]
q=t+s+r+6
p=-u-6
o=q+r+6
n=A.d.ff(g,A.pu)
m=-n-6
l=n+6
r=e.a
u=e.b
k=Math.min(r/(o-p),u/(l-m))*0.96
s=d.a
J.by(s.save())
s.translate(r/2-(p+o)/2*k,u/2-(m+l)/2*k)
d.bZ(0,k)
j=this.c
u=w[0]
r=w[1]
i=-j*u/r+3.141592653589793/r
r=w[2]
u=w[3]
h=new B.dcx(this,d)
h.$6$back(new C.v(t,0),g[2],r,i,A.d5,!0)
h.$5(new C.v(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.cS)
h.$5(new C.v(0,0),g[0],w[0],j,A.n0)
h.$5(new C.v(t,0),g[1],w[1],i,A.fl)
s.restore()
s=new B.dcy(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aN)
s.$3("2+3 \xb7 shared axle",t,A.cs)
s.$3("4 \xb7 output",q,A.b2)},
au(d){return!0}}
B.Ug.prototype={
T(){var w=$.aw()
return new B.bj7(new C.as(new C.bb("Meet me at noon",A.b5,A.aO),w),new C.as(new C.bb("LEMON",A.b5,A.aO),w),C.aX(x.S))}}
B.bj7.prototype={
Z(){this.a1()
this.aXD()
B.zw("cipher_lab").bB(new B.dH7(this),x.P)},
q(){var w=this.d,v=$.aw()
w.U$=v
w.P$=0
w=this.e
w.U$=v
w.P$=0
this.a2()},
aXD(){this.y=1+A.cG.aw(25)
this.z=0},
ga9y(){var w=this
return B.a1C(B.a1C(D.Hb[w.x],w.y),-w.z)===D.Hb[w.x]},
gaxC(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a1C(u,v.w)
break A}if(1===t){w=new C.M(C.a(B.a1C(u,0).split(""),x.s),new B.dGQ(),x.dv).h2(0)
break A}w=B.icO(u,v.e.a.a)
break A}return w},
aSU(d){var w,v,u,t,s,r=null,q=C.c2(26,0,!1,x.S)
for(w=new C.d5(d.toUpperCase()),v=x.e8,w=new C.bQ(w,w.gM(0),v.k("bQ<bW.E>")),v=v.k("bW.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.ff(q,A.An))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aT(2,2)
v.push(new C.bB(1,A.bh,C.x(C.a([C.p(r,r,A.f,r,r,new C.o(A.aN,r,r,new C.bp(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.ME,r,r,r,r),new C.y(C.jK(65+s),r,D.fbS,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.m_,A.j,0,A.p),r))}return new C.a7(r,70,C.B(v,A.dz,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aM(o,A.U,!1,o,!0,A.r,o,C.aN(),p.d,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.n(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kH,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dGZ(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,D.f64,!0,A.a4,o,A.an,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.R,C.aM(o,A.U,!1,o,!0,A.r,o,C.aN(),p.e,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.n(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kH,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dH_(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.iP,!0,A.a4,o,A.an,o,o,o,o)],v))}w.push(A.aB)
w.push(D.fCI)
w.push(A.au)
v=A.aN.j(0.12)
u=C.n(14)
t=C.I(A.aN.j(0.4),A.q,1)
w.push(C.p(o,C.zP(p.gaxC().length===0?"\u2026":p.gaxC(),D.faR,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bB,o,o,o))
w.push(A.ac)
w.push(B.bzY(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aN,o))
w.push(A.ac)
w.push(D.fj0)
w.push(A.au)
w.push(p.aSU(p.gaxC()))
w.push(A.au)
w.push(D.flp)
s=C.cw(w,o,A.bB,o,o,A.ah,!1)}else{w=B.bzY("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aM,o)
v=C.d(B.a1C(D.Hb[p.x],p.y),o,o,o,o,o,o,D.fbr,o,o,o)
u=(p.ga9y()?A.b2:A.aN).j(0.14)
t=C.n(14)
r=C.I((p.ga9y()?A.b2:A.aN).j(0.5),A.q,1)
t=C.a([w,A.ac,D.fwd,v,A.R,D.fqC,C.p(o,C.d(B.a1C(B.a1C(D.Hb[p.x],p.y),-p.z),o,o,o,o,o,o,D.fcU,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bB,o,o,o),A.ac,p.aSU(B.a1C(D.Hb[p.x],p.y)),A.O],x.p)
if(p.ga9y())t.push(B.bzY("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.b2,new B.fj(A.k6,"Next",new B.dH0(p),A.b2,o)))
s=C.cw(t,o,A.bB,o,o,A.ah,!1)}w=p.f
v=x.p
w=C.a([new B.eV(C.a([new B.dB("Make a secret",w===0,new B.dH1(p),A.js,A.aN,o),new B.dB("Crack a code",w===1,new B.dH2(p),A.q5,A.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dB(n[q],p.r===q,new B.dH3(p,q),o,A.aN,o))
v=C.a([new B.eV(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hH(A.aN,""+u,"Shift",25,1,new B.dH4(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hH(A.aM,""+v,"Shift back",25,0,new B.dH5(p),v))}return B.jL(A.aN,A.hb,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.x(w,A.m,o,A.e,A.N,0,A.p))}}
B.aKU.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.aLn.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.ed.prototype={}
B.ty.prototype={
apL(d,e,f,g){var w=this
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
B.aab.prototype={}
B.abi.prototype={}
B.a4j.prototype={
bdd(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hi()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new B.aab(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c2O(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.br(w,new B.bMf())},
ajA(d,e,f,g){var w="p"+this.c++,v=new B.ty(w,e,f,g)
v.apL(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.br(this.b,new B.bMq(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cGN(d,e,f,g,h){return A.d.b6(this.b,new B.bMl(e,f,g,h))},
aki(d,e,f,g){var w
if(d===f||this.cGN(0,d,e,f,g))return null
w=new B.abi(d,e,f,g)
this.b.push(w)
return w},
aAb(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zG(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
amT(d){return this.LC(d)&&!d.x&&d.cx>this.zG(d)},
b5N(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
LC(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c6X(d){var w,v=d.b
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
v4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c2O(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.T(v).k("a_<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.K)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a_(v,new B.bMr(a2),t).cJ(0,0,new B.bMs(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.U(x.N,u)
n=new B.bMu(o)
m=C.a([],x.t)
l=new B.bMt(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.K)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.K)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.U(u,u)
f=new B.bMw(g,l,n)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,C.K)(v),++s){q=v[s]
f.$2(q,0)
f.$2(q,1)}e=g.a
if(e===0)return
s=0
for(;;){if(!(s<t)){d=0
break}q=v[s]
u=q.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){d=f.$2(q,1)
break}++s}for(u=v.length,s=0;s<u;++s)v[s].CW=0
a2.b5J(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zG(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b5J(e,d,w,!0)
a2.bNc(a4)},
b5J(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.U(x.N,b3),b5=new B.bMh(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bMg(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.K)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bMj(C.U(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,C.K)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=C.c2(b7,0,!1,b3)
v=x.W
k=C.U(v,b3)
j=C.U(v,b3)
v=b2.y
i=0.3/b9
q=x.b
h=b7<0
g="Length must be a non-negative integer: "+b7
f=0
for(;;){if(!(f<(c0?10:1)))break
if(h)C.b8(C.dK(g,null))
e=C.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=C.c2(b7,0,!1,b3)
a0=C.c2(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.K)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b5N(t)*(1+t.CW))
a4=b2.aAb(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c6X(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bQh(e,a0,b8)
if(!c0)break
for(a1=w.length,a8=!1,u=0;u<w.length;w.length===a1||(0,C.K)(w),++u){t=w[u]
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
c0=!0}for(b3=w.length,u=0;u<w.length;w.length===b3||(0,C.K)(w),++u){t=w[u]
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
bQh(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return C.c2(d,0,!1,x.i)
u=C.a([],x.b)
for(t=a0.length,s=x.n,r=0;r<a0.length;a0.length===t||(0,C.K)(a0),++r){q=a0[r]
p=C.a([],s)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,C.K)(a0),++n){m=a0[n]
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
t[m]=t[m]-g*u[l][m]}}}f=C.c2(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bNc(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aAb(o)/a1.b5N(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zG(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bFi(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bdd(o,3,260)
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
if(l>26)a1.tK(o,"The "+$.qj().h(0,n).b+" got "+A.k.aa(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tK(o,"More than 1.5 amps went through the "+$.qj().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tK(o,"The regulator had to turn "+A.k.aa(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.aa(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tK(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.za.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qj().h(0,n).b
l=f.b
l=l===A.k.jb(l)?""+A.k.V(l):C.u(l)
g=f.c
g=g===A.k.jb(g)?""+A.k.V(g):C.u(g)
a1.tK(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.aa(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eSJ.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tK(o,"The bulb got "+A.k.aa(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
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
if(!o.x&&Math.abs(o.z)>13)a1.tK(o,"The capacitor was charged to "+A.k.aa(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bFi(d){return A.d.b6(this.a,new B.bMe(d))},
tK(d,e){var w
d.x=!0
d.ay=e
this.bdd(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bhS(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aGn(d){var w=d.b
return D.aNY.t(0,w)||D.za.ai(0,w)||w==="buck"||w==="regulator"},
beE(d){var w,v=!0
if(!this.LC(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.za.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Uw(d,e){var w=this.b
return new C.a_(w,new B.bMy(d,e),C.T(w).k("a_<1>")).gM(0)},
Ct(d){var w,v
if(d.x)return!1
w=d.b
if(D.za.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bcK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qj().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aGn(d)||i.Ct(d))return null
w=i.Uw(d,0)
v=i.Uw(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.T(u).k("a_<1>")
s=C.C(new C.a_(u,i.gcPh(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jb(r)?""+A.k.V(r):C.u(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.aa(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.za.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aGs("battery"),o=J.aV(t.a),t=new C.f2(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.Uw(n,0)+i.Uw(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aGs("switch"),o=J.aV(t.a),t=new C.f2(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qj().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zG(k))return"The "+$.qj().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.aa(k.cx,2)+" amps, but it can only give about "+A.k.aa(i.zG(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b6(u,new B.bMm(i,d))
h=q.b
h=h===A.k.jb(h)?""+A.k.V(h):C.u(h)
u=A.k.aa(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.aa(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.aa(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aGs(d){var w=this.a
return new C.a_(w,new B.bMp(d),C.T(w).k("a_<1>"))},
aG0(d){return this.aGs(d).b6(0,new B.bMo(0.35))},
pL(d,e){return A.d.b6(this.a,new B.bMn(e))}}
B.aiy.prototype={
a4(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.W()
w=C.N()
w.r=F.Lm.gp(0)
c0.b0(new C.a9(0,0,b8,b9),w)
v=C.N()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.m0.ai(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.m0.ai(0,h.b)?(h.ch-1)*38:0
b4.cDL(c0,new C.v(k*b6+j*(42+i),l*b7),new C.v(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.hyC(q.a,q.b,c1)
q=b4.e
q.toString
$.W()
p=C.N()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bS
c0.bE(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.W()
g=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=D.adR.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.zb
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.by(w.save())
w.translate(j,i)
h=A.k.D(A.mU.aA(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.cgE(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zG(a0)){g=j+0
f=i+-40
e=Math.sin(r.d*10)
a2=$.W().r
a3=C.a([],k)
a4=new C.aO(a2,A.ao,b5,b5,a3)
a5=f-13
a3.push(new C.b5(g,a5))
a6=g+13
a7=f+10
a3.push(new C.ap(a6,a7))
a8=g-13
a3.push(new C.ap(a8,a7))
a3.push(new C.bE())
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.av.j(0.65+0.35*e).gp(0)
s=a3.H()
e=a4.gbK().a.snapshot()
w.drawPath((a4.e=new C.cC(e)).a,s)
s.delete()
e=C.a([],k)
a2=new C.aO(a2,A.ao,b5,b5,e)
e.push(new C.b5(g,a5))
e.push(new C.ap(a6,a7))
e.push(new C.ap(a8,a7))
e.push(new C.bE())
e=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=1.6
e.r=A.c.gp(0)
s=e.H()
e=a2.gbK().a.snapshot()
w.drawPath((a2.e=new C.cC(e)).a,s)
s.delete()
a9=new C.kk(new C.es("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.H(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c6,new C.jv(1),b5,b5,b5,b5,A.c5,b5)
a9.en()
a9.a4(c0,new C.v(g+-3,f+-8))}if(!a0.x)g=(D.aNY.t(0,h)||D.za.ai(0,h)||h==="buck"||h==="regulator")&&!r.Ct(a0)&&r.Uw(a0,0)+r.Uw(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.W()
g=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.aF.gp(0)
s=g.H()
w.drawCircle(j,i,10,s)
s.delete()
a9=new C.kk(new C.es("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.H(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c6,new C.jv(1),b5,b5,b5,b5,A.c5,b5)
a9.en()
a9.a4(c0,new C.v(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.m0.ai(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.W()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=F.Lm.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2.4
j.r=(i&&r.beE(a0)?A.c9:A.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.beE(a0)){a9=new C.kk(new C.es("+",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.H(!0,A.c9,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c6,new C.jv(1),b5,b5,b5,b5,A.c5,b5)
a9.en()
a9.a4(c0,new C.v(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=C.aq(F.XG,F.XN,b2)
j.toString
i=b1.f
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=j.gp(0)
h.c=2.4
h.d=A.bS
s=h.H()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=j.j(0.35*b2).gp(0)
i.z=A.Rq
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b6(q,new B.bH9())){b3=A.d.cJ(q,0,new B.bHa())
$.W()
b7=C.N()
b7.r=D.b9I.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.b0(new C.a9(0,0,b8,b9),b7)
a9=C.h3(b5,b5,b5,b5,D.f2D,A.a4,A.c6,b5,A.dP,A.c5)
a9.wE(b6-24)
a9.a4(c0,new C.v(12,10))}},
qk(d,e,f,g,h){var w=null,v=C.h3(w,w,w,w,C.d3(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.c6,w,A.dP,A.c5)
v.en()
v.a4(d,f)},
cDL(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aO($.W().r,A.ao,null,null,C.a([],x.v))
d.F(new C.b5(a1.a,a1.b))
w=B.hr3(a1,a2,a3)
d.F(new C.cW(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(A.aM,D.adR,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(A.aN,A.aM,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bm
u=C.N()
u.b=A.ae
u.c=a4?7:5
u.d=A.bS
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aR(d,u)
u=C.N()
u.b=A.ae
u.c=2.4
u.d=A.bS
u.r=(a4?A.c:o).gp(0)
a0.aR(d,u)
if(q){n=new C.Ss(new C.vD(C.x9(d),!1,C.a([],x.f5))).gI(0)
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
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jz()
h=t[u].b
h===$&&C.c()
h=A.k.E(j*22+i*m*l,h.a.length())
v.jz()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.jz()
g=t[u].b
g===$&&C.c()
f=A.k.E(h+i,g.a.length())
v.jz()
i=t[u].MK(f).a
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
OU(d,e,f,g){var w,v,u,t
$.W()
w=C.N()
v=g?A.b0:A.a3
u=g?A.b4:A.a8
t=C.aq(e,A.w,0.3)
t.toString
w.sar(new C.a8(v,u,A.x,C.a([e,f,e,t],x.O),A.Hd,null).av(0,d))
return w},
avN(d,e,f){return this.OU(d,e,f,!0)},
c2p(d,e){return this.OU(d,A.bm,A.iB,e)},
ah9(d,e){var w,v,u
$.W()
w=C.N()
w.sar(D.aMp.av(0,C.bU(e,4.2)))
d.af(e,4.2,w)
w=e.ad(0,D.e92)
v=e.ad(0,D.e9b)
u=C.N()
u.r=A.ec.gp(0)
u.c=1.2
d.bE(w,v,u)},
cgE(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.W(),c0=C.N()
c0.sar(D.bWn.av(0,D.ePt))
c0.c=3.4
c0.d=A.bS
w=C.N()
w.r=A.w.j(0.45).gp(0)
w.z=G.mI
c1.hV(D.ePl,w)
if(c3){w=C.bx(D.ePs,A.kd)
v=C.N()
v.r=A.c.j(0.14).gp(0)
c1.aE(w,v)}u=B.h77(c2)
c1.bE(new C.v(-u,0),D.eak,c0)
c1.bE(D.e8a,new C.v(u,0),c0)
t=c2.x
w=c2.b
s=D.m0.ai(0,w)&&c2.ch!==1
if(s){J.by(c1.a.save())
c1.bZ(0,c2.ch)}switch(w){case"battery":b3.bC5(c1,c2)
break
case"solar":r=C.bx(D.ePo,A.it)
c1.aE(r,b3.OU(new C.a9(r.a,r.b,r.c,r.d),A.dy,A.bN,!1))
b9=C.N()
w=C.aq(D.bd6,A.d_,0.25+0.55*c2.f)
w.toString
v=C.aq(D.bl2,A.mm,0.3+0.4*c2.f)
v.toString
b9.sar(new C.a8(A.az,A.aC,A.x,C.a([w,v],x.O),b4,b4).av(0,D.a6E))
c1.b0(D.a6E,b9)
q=C.N()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(b9=c1.a,p=1;p<6;++p){w=-34+p*68/6
o=q.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}for(p=1;p<4;++p){w=-18+p*9
o=q.H()
b9.drawLine.apply(b9,[-34,w,34,w,o])
o.delete()}for(p=0;p<6;++p){w=-34+(p+0.5)*68/6
$.W()
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.cr.j(0.5).gp(0)
v.c=0.6
o=v.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new C.aO($.W().r,A.ao,b4,b4,C.a([],x.v))
b9.F(new C.b5(-34,18))
b9.F(new C.ap(-6+40*c2.f,-18))
b9.F(new C.ap(4+40*c2.f,-18))
b9.F(new C.ap(-24,18))
b9.F(new C.bE())
w=C.N()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aR(b9,w)
w=c2.f
b9=C.N()
b9.r=A.dQ.j(0.9).gp(0)
c1.af(D.e8g,4+4*w,b9)
break
case"crank":n=C.bx(D.eP9,A.hf)
c1.aE(n,b3.avN(new C.a9(n.a,n.b,n.c,n.d),A.bq,A.bK))
b9=C.N()
b9.sar(D.aMq.av(0,C.bU(A.J,12)))
c1.af(A.J,12,b9)
m=new C.v(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.N()
b9.r=A.cr.gp(0)
b9.c=5
b9.d=A.bS
c1.bE(A.J,m,b9)
b9=C.N()
b9.sar(D.eiZ.av(0,C.bU(m,7)))
c1.af(m,7,b9)
b3.ah9(c1,D.ead)
b3.ah9(c1,D.e83)
break
case"turbine":b9=b9.r
w=x.v
v=new C.aO(b9,A.ao,b4,b4,C.a([],w))
v.F(new C.b5(-3,24))
v.F(new C.ap(3,24))
v.F(new C.ap(1.5,0))
v.F(new C.ap(-1.5,0))
v.F(new C.bE())
l=C.N()
l.r=A.bN.gp(0)
c1.aR(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.by(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=C.a([],w)
j=new C.aO(b9,A.ao,b4,b4,l)
l.push(new C.b5(0,-2))
l.push(new C.cW(6,-14,2,-30))
l.push(new C.cW(-2,-14,0,-2))
l.push(new C.bE())
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.gp(0)
o=l.H()
l=j.gbK().a.snapshot()
v.drawPath((j.e=new C.cC(l)).a,o)
o.delete()
v.restore()}b9=C.N()
b9.sar(D.eiF.av(0,C.bU(A.J,4.5)))
c1.af(A.J,4.5,b9)
break
case"switch":n=C.bx(D.ePg,A.qq)
b9=C.N()
b9.sar(D.aoW.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aE(n,b9)
b3.ah9(c1,D.Sk)
b3.ah9(c1,D.aHf)
i=c2.w?D.aHf:D.e7O
b9=C.N()
b9.r=A.ax.gp(0)
b9.c=6
b9.d=A.bS
c1.bE(D.Sk,i,b9)
b9=C.N()
b9.r=(c2.w?A.b2:A.bN).gp(0)
b9.c=4
b9.d=A.bS
c1.bE(D.Sk,i,b9)
b9=C.lj(D.Sk,i,0.85)
b9.toString
w=C.N()
w.r=A.av.gp(0)
c1.af(b9,5,w)
break
case"fuse":h=C.bx(D.aN2,D.aMu)
b9=C.N()
b9.r=A.f9.j(0.25).gp(0)
c1.aE(h,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.aA.gp(0)
c1.aE(h,b9)
if(!t){b9=C.N()
b9.c=1.6
b9.r=C.aq(A.bN,A.cs,c2.fx).gp(0)
c1.bE(D.aHw,D.aHe,b9)}else{b9=C.N()
b9.c=1.6
b9.r=A.bX.gp(0)
c1.bE(D.aHw,D.eaB,b9)
b9=C.N()
b9.c=1.6
b9.r=A.bX.gp(0)
c1.bE(D.e8H,D.aHe,b9)
b9=C.N()
b9.r=A.dB.gp(0)
c1.af(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.ch(new C.v(F.mG[g]*22,0),20,9)
w=C.bx(f,A.hF)
o=b3.OU(f,A.d5,A.oF,!0).H()
b9.drawRRect(C.et(w),o)
o.delete()}break
case"pot":b9=C.N()
b9.sar(D.eiR.av(0,C.bU(A.J,21)))
c1.af(A.J,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.aA.gp(0)
d.c=1.2
o=d.H()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=C.N()
b9.sar(D.eiD.av(0,C.bU(A.J,13)))
c1.af(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=C.N()
j.r=A.aM.gp(0)
j.c=3
j.d=A.bS
c1.bE(new C.v(b9*3,w*3),new C.v(v*12,l*12),j)
break
case"resistor":a1=C.bx(D.aN2,D.aMu)
b9=C.N()
b9.sar(D.bZG.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aE(a1,b9)
b9=x.O
a2=C.F([47,C.a([C.b0(b5),C.b0(b6),A.w],b9),100,C.a([C.b0(b7),A.w,C.b0(b7)],b9),220,C.a([C.b0(b8),C.b0(b8),C.b0(b7)],b9),470,C.a([C.b0(b5),C.b0(b6),C.b0(b7)],b9),1000,C.a([C.b0(b7),A.w,C.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=a3[p].gp(0)
o=v.H()
b9.drawRect(C.c0(new C.a9(w,-9,w+4.5,9)),o)
o.delete()}b9=C.N()
b9.r=A.aM.gp(0)
c1.b0(D.ePC,b9)
b9=c2.r
b3.qk(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.e9T,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.N()
v.r=A.dQ.j(0.55*w).gp(0)
v.z=A.zb
c1.af(D.wl,34,v)}n=C.ch(D.e7j,12,18)
c1.aE(C.bx(n,A.hF),b3.OU(n,A.bm,A.e3,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.dr.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.N()
if(t)v=A.Ws
else{v=C.aq(A.e3,A.i1,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.ER
else{l=C.aq(A.dy,A.dQ,c2.fx)
l.toString}w.sar(new C.bT(A.t5,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).av(0,C.bU(A.rG,17)))
c1.af(A.rG,17,w)
w=C.N()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.af(A.rG,17,w)
b9=b9.r
w=x.v
l=new C.aO(b9,A.ao,b4,b4,C.a([],w))
l.F(new C.b5(-9,-12))
l.F(new C.cW(-12,-4,-9,0))
v=C.N()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aR(l,v)
v=C.N()
v.r=A.cX.gp(0)
v.c=1.4
c1.bE(D.eax,D.eaz,v)
v=C.N()
v.r=A.cX.gp(0)
v.c=1.4
c1.bE(D.e8A,D.e8D,v)
w=C.a([],w)
a4=new C.aO(b9,A.ao,b4,b4,w)
a4.F(new C.b5(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new C.ap(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bC(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.W()
b9=C.N()
b9.b=A.ae
b9.c=1.8
if(t)w=A.aW
else{w=C.aq(A.dy,D.bdV,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aR(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.N()
v.r=A.av.j(0.6*w).gp(0)
v.z=D.dqU
c1.af(A.rG,30,v)}w=C.N()
w.r=A.e3.gp(0)
w.c=2.4
c1.bE(D.eaD,D.eaC,w)
w=C.N()
w.r=A.e3.gp(0)
w.c=2.4
c1.bE(D.e8J,D.e8I,w)
b9=b9.r
w=x.v
a6=new C.aO(b9,A.ao,b4,b4,C.a([],w))
a6.F(new C.b5(-12,8))
a6.F(new C.ap(-12,-6))
a6.F(new C.cW(0,-26,12,-6))
a6.F(new C.ap(12,8))
a6.F(new C.bE())
v=C.N()
if(t)l=A.j0
else{l=C.aq(A.er,D.aeD,c2.fx)
l.toString}if(t)j=A.kt
else{j=C.aq(A.kr,A.av,c2.fx)
j.toString}v.sar(new C.a8(A.az,A.aC,A.x,C.a([l,j],x.O),b4,b4).av(0,D.eOG))
c1.aR(a6,v)
v=C.N()
v.b=A.ae
v.c=1.2
v.r=A.jj.gp(0)
c1.aR(a6,v)
v=C.N()
v.r=A.eK.gp(0)
c1.b0(D.eOM,v)
w=new C.aO(b9,A.ao,b4,b4,C.a([],w))
w.F(new C.b5(-7,-4))
w.F(new C.cW(-6,-12,0,-15))
b9=C.N()
b9.b=A.ae
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aR(w,b9)
break
case"motor":a7=new C.a9(-28,-14,20,14)
c1.aE(C.bx(a7,A.he),b3.avN(a7,A.ak,A.aL))
b9=C.N()
b9.r=A.ct.gp(0)
c1.b0(D.eOt,b9)
b9=C.N()
b9.r=A.cr.gp(0)
c1.b0(D.eOu,b9)
b9=c1.a
J.by(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.by(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.ch(D.e7B,15,7)
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.cs.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c0(w),o)
o.delete()
b9.restore()}w=C.N()
w.r=A.ax.gp(0)
c1.af(A.J,3,w)
b9.restore()
b3.qk(c1,"M",D.eac,A.ax,14)
break
case"buzzer":a8=C.ch(A.J,42,42)
b9=C.N()
b9.sar(D.eiV.av(0,a8))
c1.hV(a8,b9)
b9=C.N()
b9.r=A.w.gp(0)
c1.af(A.J,6,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.b_.gp(0)
c1.af(A.J,6,b9)
b3.qk(c1,"+",D.ea5,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.E(w.d*14,5):0
l=C.bU(A.J,24+k*5+l)
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2
j.r=A.bY.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c0(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.bx(D.ePc,A.he)
w=C.N()
w.sar(D.bXl.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aE(n,w)
w=C.a([],x.v)
a9=new C.aO(b9.r,A.ao,b4,b4,w)
a9.F(new C.b5(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new C.cW(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bC(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.W()
w=C.N()
w.b=A.ae
w.c=10
w.r=D.bey.j(0.5*b9).gp(0)
w.z=A.jv
c1.aR(a9,w)}$.W()
b9=C.N()
b9.b=A.ae
b9.c=3.2
b9.d=A.bS
b9.r=C.aq(A.lK,A3.Xv,c2.fx).gp(0)
c1.aR(a9,b9)
break
case"capacitor":a7=new C.a9(-16,-22,16,18)
b9=C.bx(a7,A.he)
w=C.N()
w.sar(D.bWf.av(0,a7))
c1.aE(b9,w)
w=C.N()
w.r=A.bN.gp(0)
c1.b0(D.eOS,w)
for(p=0;p<4;++p){b0=new C.kk(new C.es("\u2212",b4,b4,A.cO,b4,b4,b4,b4,b4,b4,new C.H(!0,A.ax,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.c6,new C.jv(1),b4,b4,b4,b4,A.c5,b4)
b0.en()
b0.a4(c1,new C.v(-14,-18+p*9))}b1=new C.a9(-16,-24,16,-17)
c1.aE(C.bx(b1,A.hF),b3.c2p(b1,!1))
b9=38*c2.fx
w=18-b9
$.W()
v=C.N()
v.r=A.b2.j(0.5).gp(0)
c1.b0(new C.a9(-3,w,11,w+b9),v)
b3.qk(c1,"1F",D.wl,A.c,11)
break
case"radio":a1=C.bx(D.a6E,A.hf)
b9=C.N()
b9.sar(D.bZW.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aE(a1,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.oF.j(0.6).gp(0)
c1.aE(a1,b9)
b9=C.bx(D.ePd,A.it)
w=C.N()
w.r=A.dH.gp(0)
c1.aE(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.lK.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=C.N()
w.r=(c2.fx>0?A.fJ:A.nR).gp(0)
c1.b0(D.eOw,w)
if(c2.fx>0){w=8+A.k.E(b3.b.d*7,18)
v=C.N()
v.r=A.bz.gp(0)
v.c=1.6
c1.bE(new C.v(w,-13),new C.v(w,-3),v)}w=C.N()
w.sar(D.aMq.av(0,C.bU(D.a5J,6)))
c1.af(D.a5J,6,w)
w=C.N()
w.r=A.oF.gp(0)
c1.af(D.e89,4,w)
w=C.N()
w.r=A.e3.gp(0)
w.c=1.8
c1.bE(D.e87,D.aHj,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bU(D.aHj,4+k*5+A.k.E(w.d*8,5))
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.4
l.r=A.nW.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c0(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.bx(D.ePn,A.he)
v=C.N()
v.r=L.ml.gp(0)
c1.aE(w,v)
b2=C.bx(D.ePk,A.hF)
if(c2.fx>0&&!c2.x){b9=c1.a
J.by(b9.save())
b9.clipRRect(C.et(b2),$.pz(),!0)
b9.translate(-33,-21)
E.h3f(c1,D.eVs,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.N()
b9.r=A.b2.gp(0)
c1.af(D.e8l,1.6,b9)}else{w=C.N()
w.r=D.vn.gp(0)
c1.aE(b2,w)
b9=new C.aO(b9.r,A.ao,b4,b4,C.a([],x.v))
b9.F(new C.b5(-33,-21))
b9.F(new C.ap(-10,-21))
b9.F(new C.ap(-33,0))
b9.F(new C.bE())
w=C.N()
w.r=A.c.j(0.05).gp(0)
c1.aR(b9,w)}b9=C.N()
b9.r=A.bq.gp(0)
c1.b0(D.eOL,b9)
break}B.ian(c1,c2,b3.b.d,b3.gc6Y())
if(t)b3.qk(c1,"\u2716",D.eaG,A.av,14)
if(s)c1.a.restore()},
bC5(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.a9(-28,-13,28,13)
d.aE(C.bx(w,A.qq),m.avN(w,A.dy,A.iX))
v=new C.a9(-22,-13,22,13)
$.W()
u=C.N()
u.sar(D.aoP.av(0,v))
d.b0(v,u)
u=C.N()
u.r=A.dU.gp(0)
d.b0(D.eP0,u)
t=new C.a9(28,-5,34,5)
d.aE(C.bx(t,A.hd),m.OU(t,A.dy,A.iB,!0))
m.qk(d,"+",D.e7T,A.aM,11)
m.qk(d,"\u2212",D.eae,A.ad,11)
m.qk(d,C.u(l===A.k.jb(l)?A.k.V(l):l)+"V",D.e9Z,A.aM,13)
if(l===1.5){u=C.N()
u.r=A.bE.gp(0)
d.b0(D.eP_,u)
u=e.as
s=C.N()
s.r=C.aq(A.av,A.b2,u).gp(0)
d.b0(new C.a9(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qk(d,"FLAT",D.e9S,A.c9,9)}if(l>2){u=C.N()
u.r=A.b_.gp(0)
u.c=1
d.bE(D.e7p,D.aGZ,u)
m.qk(d,l>3?"3 cells":"2 cells",D.e9Y,A.aA,8)}}else if(l<=9){r=new C.a9(-22,-17,22,17)
u=C.bx(r,A.qq)
$.W()
s=C.N()
s.sar(D.bZt.av(0,r))
d.aE(u,s)
s=C.N()
s.r=A.cS.gp(0)
d.b0(D.eP1,s)
for(u=d.a,q=0;q<2;++q){p=F.ayc[q]
s=p<0?5:3.6
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.sar(D.aMp.av(0,C.bU(new C.v(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.qk(d,"9V",D.e9U,A.c,16)}else{r=new C.a9(-34,-16,34,16)
u=C.bx(r,A.it)
$.W()
s=C.N()
s.sar(D.aoP.av(0,r))
d.aE(u,s)
s=C.N()
s.r=A.bH.gp(0)
d.b0(D.ePm,s)
for(u=d.a,q=0;q<2;++q){s=C.bx(C.ch(new C.v(F.a3x[q],-20),8,10),A.hd)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.cr.gp(0)
n=o.H()
u.drawRRect(C.et(s),n)
n.delete()}m.qk(d,"+",D.e8_,A.av,10)
m.qk(d,"12V",D.e9V,A.ax,15)}},
au(d){return!0}}
B.mB.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=C.U(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new B.ty(o,r,q,p)
n.apL(o,r,q,p)
k.push(n)
J.iw(s[4],new B.cl4(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.K)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.aki(m,u[1],l,u[3])}}}
B.aiw.prototype={
T(){var w=x.N
return new B.aix(A.J,A.aw,C.U(w,x.gl),C.aX(w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aix.prototype={
adM(d){var w=this,v=w.as
if(v!=null)v.a7(0)
w.m(new B.bGO(w,d))
w.as=C.cM(A.lk,new B.bGP(w))},
q(){var w=this.as
if(w!=null)w.a7(0)
w=this.ch
if(w!=null)w.a7(0)
this.brW()},
a_B(d,e){return this.ceA(d,e)},
b01(d){return this.a_B(d,!1)},
ceA(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$a_B=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.r7:A.xE
p=d.b
w=3
return C.b(E.h3y(s,r,p,d.ax<3.2,q,$.qj().h(0,p).b),$async$a_B)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return C.h(u,v)}})
return C.i($async$a_B,v)},
cre(d){var w=this,v=new C.S(Date.now(),0,!1),u=w.at.c9(0,d.a,new B.bGQ()),t=J.cF(u)
t.L(u,v)
t.br(u,new B.bGR(v))
if(t.gM(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a7(0)
w.a0W(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a7(0)
w.ch=C.cM(A.ku,new B.bGS(w,u,d))}},
a_h(d){return this.ccY(d)},
ccY(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$a_h=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.iby(s,d.b,A.k.V(A.k.E(t.a.c.d*0.12,1)*100)),$async$a_h)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$a_h,v)},
a0W(d){return this.coQ(d)},
coQ(d){var w=0,v=C.j(x.H),u=this,t
var $async$a0W=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bS(F.kR,null,new B.bGM(u,d),t,!0,!0,!1,A.kC,!1,!1,x.H),$async$a0W)
case 2:return C.h(null,v)}})
return C.i($async$a0W,v)},
Z(){this.a1()
this.beO()
this.li()},
beO(){this.a.c.e=new B.bH6(this)},
lB(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.v4(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
r=D.m0.h(0,s.b)
if((r==null?null:r.b)!==D.zB)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.L(0,s.a)
q.a_B(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)E.dG(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)E.dG(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cG.aj()<0.5
else u=!1
if(u)E.dG(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){E.dG(900+A.cG.aw(800),"",90,0,0.1,o)
if(A.cG.aj()<0.35)E.dG(300+A.cG.aw(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cG.aj()<0.4
else u=!1
if(u)E.dG(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)E.dG(330+A.o.E(110*A.k.bm(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dG((A.k.bm(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)E.dG(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)E.dG(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cG.aj()<0.5
else u=!1
if(u)E.dG(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)E.dG(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)E.dG(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new B.bH7())},
b73(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.m0.ai(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new C.z(p,n)
r=i}}}return s},
b0I(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.T(w).k("dx<1>"),w=new C.dx(w,v),w=new C.bQ(w,w.gM(0),v.k("bQ<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.m0.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cDM(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.m0.ai(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.m0.ai(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=B.hr3(new C.v(k,n),new C.v(i,l),p)
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
adK(){this.a.toString
this.m(new B.bGh())},
boH(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.d_S[v]
if(!A.d.b6(p.a.c.a,new B.bH8(u,w))){o=new C.v(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?K.Ig:o
s=s?K.Ig:o
q=t.ajA(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dG(1200,"",50,0,0.3,"tri")
p.adK()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.QF[v].a)
u=w.length
t=u>8
s=t?A.d.ds(w,0,A.o.an(u+1,2)):w
r=t?A.d.fQ(w,A.o.an(w.length+1,2)):A.U
q=n.a.d
if(q!=null){w=C.a3(q).k("cu<1>")
w=C.C(new C.cu(q,w),w.k("J.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.K)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.b0x(s,!0))
n.a.toString
if(t)w.push(n.b0x(r,!0))
w.push(C.E(C.cq(new B.bH5(n,q,m)),1))
return C.x(w,A.m,null,A.e,A.j,0,A.p)},
b0x(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.K)(d),++v){u=d[v]
t=$.qj()
s=t.h(0,u).d.j(0.14)
r=new C.aT(14,14)
q=new C.az(t.h(0,u).d.j(0.5),1,A.q,-1)
m.push(C.aC(p,C.p(p,C.x(C.a([new C.y(t.h(0,u).c,p,A.zR,p,p,p,p,p,p,p,p,p),new C.y(t.h(0,u).b,p,A.nz,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.b9,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bO(q,q,q,q),new C.bp(r,r,r,r),p,p,A.n),p,p,p,F.tM,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGi(this,u),p,p,p,p,p,p,!1,A.a7))}return C.p(p,C.cw(m,p,A.h7,p,p,A.aP,!1),A.f,p,p,new C.o(F.AO,p,new C.bO(A.Y,A.Y,new C.az(o,1,A.q,-1),A.Y),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aZ4(d){var w=null,v=C.n(18)
return C.p(w,d,A.f,w,w,new C.o(F.acy,w,C.I(A.bE,A.q,1),v,w,w,A.n),w,w,w,w,F.ahS,w,w,w)},
cgF(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qj().h(0,o),m=d.dy,l=d.fr,k=new B.bGB(q,n),j=C.d(n.c,p,p,p,p,p,p,A.Jj,p,p,p),i=n.b,h=n.d,g=x.p
i=C.B(C.a([j,A.ab,C.E(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bNw,p,p,p,new B.bGo(q,d),p,p,p,p,"Remove part",A.ce),C.aH(p,p,p,p,A.GH,p,p,p,new B.bGp(q),p,p,p,p,p,A.ce)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,F.DC,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.fbg,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.aa(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.aa(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.aa(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.au,w,A.am,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.c9:A.aM,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bcK(d)
if(v!=null){l=(d.x?A.av:A.aF).j(0.14)
j=C.n(10)
i=C.I((d.x?A.av:A.aF).j(0.5),A.q,1)
m.push(new C.D(A.i4,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fhG,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cp,p,p,p),p))}if(B.h1k(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dB("CH "+t,d.at===u,new B.bGq(q,d,u),p,h,p))}l=C.bV(A.bA,l,A.br,4,6)
l=C.a([A.am,l,A.au,C.d(q.a.c.Ct(d)?"Showing: "+F.Qf[A.o.E(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hg,p,p,p)],g)
if(q.a.c.Ct(d))l.push(new B.fj(A.Gg,"Open big screen",new B.bGt(q,d),h,p))
A.d.v(m,l)}if(D.m0.ai(0,o)&&!B.h1k(o)){l=C.a([A.am,C.d(q.a.c.Ct(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hg,p,p,p)],g)
if(q.a.c.Ct(d))l.push(new B.fj(A.NW,"Open the "+$.qj().h(0,o).b,new B.bGu(q,d),h,p))
A.d.v(m,l)}if(D.m0.ai(0,o))A.d.v(m,C.a([A.am,new B.fj(A.BT,"Make it bigger (or tap it 4 times)",new B.bGv(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.aa(d.db,1)
if(q.a.c.Ct(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.am,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.aa(i,1)+" V",p,p,p,p,p,p,D.fc5,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.dgT[s]
j=r===A.k.jb(r)?A.k.V(r):r
l.push(new B.dB(C.u(j)+" V out",d.e===r,new B.bGw(q,d,r),p,h,p))}i.push(new C.D(A.lP,C.bV(A.bA,l,A.br,0,6),p))}if(o==="regulator")i.push(D.fzS)
A.d.v(m,i)}if(q.a.c.LC(d)&&!d.x){l=A.k.aa(d.cx,2)
j=A.k.aa(q.a.c.zG(d),2)
i=q.a.c
w=i.amT(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.amT(d)?A.c9:A.es,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.n(4)
w=A.k.D(d.cx/q.a.c.zG(d),0,1)
i=q.a.c.amT(d)?A.av:A.b2
m.push(new C.D(A.i4,C.x(C.a([l,A.cV,C.bw(j,C.m5(A.bE,p,p,5,p,w,new C.lZ(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.D(A.i4,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.f61,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d6x[s]
j=r===1.5?"1.5 V (rechargeable)":C.u(r)+" V"
l.push(new B.dB(j,d.e===r,new B.bGx(q,d,r),p,h,p))}m.push(C.bV(A.bA,l,A.br,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cYh[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new B.dB(j,d.r===r,new B.bGy(q,d,r),p,h,p))}m.push(C.bV(A.bA,l,A.br,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bGz(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bGA(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bGr(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bGs(d)))
if(o==="crank")m.push(D.fvl)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hg,p,p,p))
return q.aZ4(new C.cT(D.b_I,C.cd(C.x(m,A.F,p,A.e,A.N,0,A.p),A.r,p,A.y,p,p,p,p,A.ah),p))}}
B.baB.prototype={}
B.UV.prototype={
T(){return new B.aD0(B.h76(),new C.cs(null,x.gJ),C.aX(x.S))}}
B.aD0.prototype={
Z(){this.a1()
$.aW.bU$.push(this)
this.adL()},
adL(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$adL=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.fx7(),$async$adL)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.iaL(t.d,r)
if(s!=null){t.m(new B.dSs(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$adL,v)},
ET(){var w,v=this
if(!v.as)return
w=B.i1i(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bDx(w)},
j6(d){if(d!==A.fw)this.ET()},
q(){$.aW.hL(this)
this.ET()
this.a2()},
c7_(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.T(v).k("a_<1>")
t=new C.a_(v,new B.dSB(q),u).gM(0)
s=new C.a_(v,new B.dSC(),u).gM(0)
r=new C.a_(v,w.gcSM(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dSD(q,t,s,r))}if(A.o.E(q.w,45)===0)q.ET()
if(A.o.E(q.w,10)===0){w=q.f
$.ahJ()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.ahJ()[q.f].c.$1(q.d)){w.L(0,q.f)
B.BK("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dSE())
q.ET()
w=q.c
w.toString
w=C.Xh(w)
if(w!=null)w.S(C.b2(p,p,p,p,p,A.r,p,C.d("\u2705 Challenge done: "+$.ahJ()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mo,p,p,p,p,p,p,p,p,p,p))}},
agq(){var w=0,v=C.j(x.H),u=this,t
var $async$agq=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dSr(u),t,null,!0,!0,x.H),$async$agq)
case 2:return C.h(null,v)}})
return C.i($async$agq,v)},
aZ3(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.n(12),t=C.I(f.j(0.45),A.q,1)
u=C.a([C.ao(w,C.p(w,C.X(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aC(w,C.hx(new C.a7(40,38,new C.an(A.W,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7)},
aZ2(d,e,f,g){return this.aZ3(d,e,f,g,null)},
aqq(d,e,f,g){var w=null,v=f.j(0.1),u=C.n(10),t=C.I(f.j(0.4),A.q,1)
return C.E(C.aC(w,C.p(w,C.B(C.a([C.X(d,f,w,w,w,15),A.ee,new C.dq(1,A.co,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b9,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7),1)},
aeJ(){var w=0,v=C.j(x.H),u=this,t
var $async$aeJ=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a6(t,!1).cm(C.e9(new B.dSn(u),!1,null,x.H)),$async$aeJ)
case 2:t=u.e.gbk()
if(t!=null)t.beO()
if(u.c!=null)u.m(new B.dSo())
u.ET()
return C.h(null,v)}})
return C.i($async$aeJ,v)},
bFb(){var w,v,u,t,s=null,r=this.f
$.ahJ()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bd:A.av
u=C.n(9)
t=C.I(F.AO,A.q,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wC,s,s,s),s,s,s),A.f,s,D.b_P,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eS,s,s,s)},
ahw(){var w=0,v=C.j(x.H),u=this,t
var $async$ahw=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bS(F.kR,null,new B.dSA(u),t,!0,!0,!0,A.kC,!1,!1,x.H),$async$ahw)
case 2:return C.h(null,v)}})
return C.i($async$ahw,v)},
c70(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aC(r,C.p(r,D.bOK,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a5),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dSG(d),r,r,r,r,r,r,!1,A.a7),o=C.n(11)
o=C.p(r,D.b5u,A.f,r,r,new C.o(A.bn,r,C.I(A.aN.j(0.45),A.q,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.x(C.a([C.B(C.a([p,A.ab,o,A.ab,C.E(C.x(C.a([D.fxV,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f0:A.fW,r,r,r,r,r,r,r,r,11.5,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.ax7(s.gccF(),r),A.rP,s.aZ2(A.ye,"Construction Lab: real 3D wiring, plumbing and a house",A.cs,new B.dSH(s,d)),s.aZ3(A.ln,"Challenges",A.aM,s.gctQ(),s.bFb()),s.aZ2(A.NP,"How to play",A.aN,new B.dSI(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.am,C.B(C.a([s.aqq(A.o5,"Circuits",A.bu,s.gcmF()),A.bp,s.aqq(A.oU,"Repair",A.aM,new B.dSJ(s)),A.bp,s.aqq(D.yf,"Clear",A.c9,new B.dSK(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.N,0,A.p),A.f,r,r,new C.o(F.AO,r,new C.bO(A.Y,A.Y,new C.az(q,1,A.q,-1),A.Y),r,r,r,A.n),r,r,r,r,D.bxY,r,r,r)},
B(d){var w=this,v=null
$.arF="tech"
return C.c8(v,A.c_,C.bm(!0,C.x(C.a([w.c70(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.E(B.h5X(w.d,w.e,w.gc6Z(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
B.ax7.prototype={
T(){return new B.b8N(null,null)}}
B.b8N.prototype={
gawF(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.T,null,1,null,v)
w.cL(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.gawF().q()
this.btb()},
B(d){var w=null,v=this.a.c
return C.aC(w,C.hx(new C.a7(42,42,C.c6(this.gawF(),new B.cBU(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a7)}}
B.b8M.prototype={
a4(d,e){var w,v,u,t=null,s=e.ec(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.W()
w=C.N()
w.r=A.b6.j(0.25+0.15*o).gp(0)
w.z=G.mI
d.af(s,r+2+o*2,w)
w=C.N()
w.sar(D.eiQ.av(0,C.bU(s,r)))
d.af(s,r,w)
v=C.N()
v.b=A.ae
v.c=2.2
v.sar(new C.fW(A.A,0,6.283185307179586,A.x,D.cPK,t,new C.mp(p)).av(0,C.bU(s,r)))
d.af(s,r,v)
p=new B.cBT(d)
p.$3(s.ad(0,A.rG),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.e8U),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.eaK),2.6,0.5+0.5*Math.cos(q))
u=C.h3(t,t,t,t,D.f2J,A.a4,A.c6,t,A.dP,A.c5)
u.en()
u.a4(d,s.ad(0,new C.v(-u.b.c/2,5)))},
au(d){return d.b!==this.b}}
B.axq.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.axr.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.brV()}}
B.aJq.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bwS.prototype={}
B.fO.prototype={}
B.Jg.prototype={
a5(){return"ScreenStyle."+this.b}}
B.m8.prototype={}
B.UC.prototype={
T(){return new B.bje(null,null)}}
B.bje.prototype={
ga91(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.o1,null,1,null,v)
w.cs(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.ga91().q()
this.bv1()},
gRE(){var w=this.ga91().y
w=w==null?null:A.o.an(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.m0.h(0,this.a.c)
if(v==null)v=D.aNj
return C.c8(w,U.LH,C.bm(!0,new C.an(A.W,w,A.aa,A.r,C.a([C.av(v.b===D.zC?this.bHm(v):this.cjp(v),w,w,w),C.ao(w,C.aH(w,w,w,w,A.mD,w,w,w,new B.dOo(d),w,w,w,C.nB(w,A.aW,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.f4j,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c71(d){var w
A:{if(D.IE===d){w=0.46153846153846156
break A}if(D.uL===d){w=0.45
break A}if(D.wr===d){w=0.9259259259259258
break A}if(D.SX===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cjp(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.IE
A:{if(D.IE===p){w=44
break A}if(D.uL===p){w=30
break A}if(D.wr===p){w=22
break A}if(D.SX===p){w=26
break A}w=14
break A}v=C.c6(this.ga91(),new B.dOn(this,w,d,o),q)
if(p===D.a6N)v=new C.Dn(D.byA,v,q)
p=this.c71(p)
u=o?4:5
t=d.c
s=C.aq(t,A.c,o?0.25:0.08)
s.toString
r=C.aq(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.n(w)
s=C.a([new C.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fK(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.n(w-3),q,q,A.n),q,q,q,q,A2.FN,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a8(A.az,A.aC,A.x,r,q,q),A.n),q,q,q,D.bsi,new C.Q(u,u,u,u),q,q,q),q)},
b6f(d){var w,v,u,t=null,s=new C.S(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bm(this.gRE()*0.4),0,100),q=d.b===D.IE,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aV(A.o.u(C.dk(s)),2,"0")+":"+A.a.aV(A.o.u(C.h2(s)),2,"0"),t,t,t,t,t,t,A.rW,t,t,t),A.b7],x.p)
for(w=0;w<4;++w){v=new C.aT(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bp(v,v,v,v),t,t,A.n),t,4+w*2,t,D.byi,t,t,t,3))}n.push(A.db)
n.push(D.fqO)
n.push(A.bp)
v=C.I(A.ad,A.q,1)
u=C.n(4)
n.push(C.p(t,new C.bI(A.a3,t,t,C.Bg(A.A,C.p(t,t,A.f,t,t,new C.o(A.b2,t,t,C.n(2),t,t,A.n),t,t,t,A2.FN,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qt)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.fi_,t,t,t))
return new C.D(new C.Q(p,12,o,2),C.B(n,A.m,t,A.e,A.j,0,t,t),t)},
auC(d,e,f){var w,v=null,u=d.d,t=C.aq(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.n(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.dcc,new C.a8(A.az,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.au,C.d(d.a,v,1,A.a2,v,v,v,D.f8P,v,v,v)],w))
return C.aC(v,C.x(t,A.m,v,A.e,A.N,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dOj(this,d),v,v,v,v,v,v,!1,A.a7)},
bYv(d,e){return this.auC(d,e,!0)},
bYd(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.SX||n===D.wr,l=d.d,k=C.aq(l,A.w,0.55)
k.toString
l=C.aq(l,A.kp,0.5)
l.toString
l=C.a([k,A.dx,l],x.O)
k=p.b6f(d)
w=m?190:138
v=C.n(24)
u=C.I(A.b_,A.q,1)
w=C.aC(o,C.p(o,C.bw(C.n(23),C.b3(o,o,o,new B.aew(0,p.gRE(),o),A.f5),A.aq),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hQ,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dOh(p),o,o,o,o,o,o,!1,A.a7)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<8;++s){r=F.k8[s]
t.push(new C.cp(A.A,o,o,p.bYv(r,m?58:54),o))}k=C.a([k,A.am,w,A.ac,C.E(C.m2(0.92,t,v,8,12,A7.vB,o,!1),1)],u)
if(n!==D.a6N){n=A.c.j(0.16)
w=C.n(28)
u=C.a([],u)
for(v=C.db(F.k8,0,C.dI(4,"count",x.S),x.gD),t=v.$ti,v=new C.bQ(v,v.gM(0),t.k("bQ<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.auC(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.B(u,A.m,o,A.qf,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.bt7,T.ajj,o,o,o))}return C.p(o,C.x(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a8(A.az,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bAJ(d,e){var w=null
return C.p(w,C.x(C.a([this.b6f(d),C.E(C.b3(w,w,w,new B.aew(e,this.gRE(),w),A.f5),1),C.aC(w,C.p(w,C.av(C.d(F.k8[e].a,w,w,w,w,w,w,A.J9,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dOc(this),w,w,w,w,w,w,!1,A.a7)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bHm(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.aq(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.n(r?26:14)
u=C.a([new C.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fK(1.5384615384615383,C.p(t,C.c6(this.ga91(),new B.dOf(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a8(A.az,A.aC,A.x,w,t,t),A.n),t,t,t,D.bxT,new C.Q(8,8,8,s),t,t,t),t)}}
B.buX.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.W()
w=C.N()
v=this.c
u=C.aq(v,A.w,0.6)
u.toString
t=C.aq(v,A.kp,0.4)
t.toString
w.sar(new C.a8(A.az,A.aC,A.x,C.a([u,A.dx,t],x.O),null,null).av(0,new C.a9(0,0,n,m)))
d.b0(new C.a9(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=v.j(0.1).gp(0)
r.z=D.dqZ
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
au(d){return!0}}
B.aew.prototype={
a4(d,e){return E.Rk(d,e,this.b,this.c)},
au(d){return!0}}
B.aLc.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.aWj.prototype={}
B.Vq.prototype={
T(){return new B.bjO(C.U(x.S,x.N),A.aw,C.a([],x.U),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjO.prototype={
gvs(){var w=this.f
return w===$?this.f=B.h1r(0):w},
Z(){this.a1()
this.li()
B.zw("laser_maze").bB(new B.eb4(this),x.P)},
lB(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.z(u.a,t)
if(t>0.8)A.d.cA(w,v)}this.m(new B.eb5())},
adQ(d){var w=this
w.m(new B.eaV(w,d))
B.w_("laser_maze",C.F(["best",w.e,"level",w.d],x.N,x.z))},
c7h(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.gdB()/7
u=v*7
t=(w.a-u)/2
s=A.k.D((w.b-u)/2,8,300)
r=A.k.bm((d.a-t)/v)
q=A.k.bm((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.gvs().b.t(0,p)||p===o.gvs().e||o.gvs().d.ai(0,p))return
o.m(new B.eaW(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cq(new B.eaZ(t,B.hqX(t.gvs(),t.r))),q=x.p,p=C.a([new B.dB("Clear mirrors",!1,new B.eb_(t),A.k6,A.aM,s),new B.dB("Skip",!1,new B.eb0(t),D.bHt,A.aN,s)],q)
if(t.d>0)p.push(new B.dB("Back",!1,new B.eb1(t),D.bHu,A.aN,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dB(""+u,v===t.d,new B.eb2(t,v),s,A.av,s))}return B.jL(A.av,A.hb,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.x(C.a([new B.eV(p,s,s),new B.eV(w,"LEVEL",s)],q),A.m,s,A.e,A.N,0,A.p))}}
B.bgO.prototype={
a4(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gdB()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.dhD(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bx(new C.a9(a5,a6,a8,a4),A.kd)
v=$.W()
u=C.N()
u.r=L.ml.gp(0)
a9.aE(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.dm.gp(0)
q=r.H()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.dm.gp(0)
q=s.H()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.eb(a8,a8.r,C.a3(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.bx(C.ch(p,u,u),A.hf)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.sar(D.c_1.av(0,C.ch(p,a3,a3)))
q=o.H()
w.drawRRect(C.et(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aO(v.r,A.ao,a2,a2,u)
n.F(new C.b5(a7.$1(A.d.gI(a8)).a,a7.$1(A.d.gI(a8)).b))
for(a8=C.db(a8,1,a2,C.T(a8).c),v=a8.$ti,a8=new C.bQ(a8,a8.gM(0),v.k("bQ<ak.E>")),v=v.k("ak.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.ap(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bC(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.W()
a8=C.N()
a8.b=A.ae
a8.c=14
a8.e=A.fG
a8.r=A.av.j(0.28+0.08*Math.sin(a1.f*12)).gp(0)
a8.z=A.lv
a9.aR(n,a8)
a8=C.N()
a8.b=A.ae
a8.c=4
a8.e=A.fG
a8.r=D.aeD.gp(0)
a9.aR(n,a8)
a8=C.N()
a8.b=A.ae
a8.c=1.6
a8.e=A.fG
a8.r=A.c.gp(0)
a9.aR(n,a8)}for(a8=a4.c,a8=C.eb(a8,a8.r,C.a3(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.aM.j(0.5).gp(0)
m.z=A.CD
q=m.H()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=(l?A.aM:A.bq).gp(0)
q=m.H()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?A.c:A.aA
i=new C.kk(new C.es("\u2605",a2,a2,A.cO,a2,a2,a2,a2,a2,a2,new C.H(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a4,A.c6,new C.jv(1),a2,a2,a2,a2,A.c5,a2)
i.en()
j=i.b
h=j.c
j=j.a.c
i.a4(a9,new C.v(m-h/2,k-j.gbd(j)/2))}g=new B.dhG(a7,a3,a9)
a1.c.bM(0,new B.dhE(g))
a4.d.bM(0,new B.dhF(g))
f=a7.$1(a4.e)
a4=C.bx(C.ch(f,o,a3*0.8),A.hf)
a8=C.N()
a8.r=A.av.gp(0)
a9.aE(a4,a8)
v=f.ad(0,new C.v(v,0))
a8=C.N()
a8.r=A.c.gp(0)
a9.af(v,5,a8)
for(a4=a1.r,a8=a4.length,e=0;e<a4.length;a4.length===a8||(0,C.K)(a4),++e){d=a4[e]
a0=d.b/0.8
v=d.a
u=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
s=1-a0
u.c=4*s
u.r=A.aM.j(s).gp(0)
q=u.H()
w.drawCircle(v.a,v.b,a3*(0.3+a0),q)
q.delete()}},
au(d){return!0}}
B.Vs.prototype={
T(){var w=x.n
return new B.aDF(A.cG,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDF.prototype={
Z(){this.a1()
this.li()
B.zw("light_mixer").bB(new B.ebn(this),x.P)},
lB(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aZ9()
w.m(new B.ebo())},
awJ(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aw(5)/4)
u.e=t
if(A.d.d6(t,new B.eb8()))u.e[w.aw(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aZ9(){var w,v,u=this
if(u.z!=="play")return
w=A.k.V(A.k.D(1-B.hmf(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.w2(v,A.o.an(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.w_("light_mixer",C.F(["best",v],x.N,x.z))}}else u.z="result"},
gcyN(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.F(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cRL[A.o.E(A.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cq(new B.ebh(v,B.hmf(v.e,t))),r=t[0]
r=B.hH(A.av,""+A.k.V(r*100)+"%","Red",1,0,new B.ebi(v),r)
w=t[1]
w=B.hH(A.bd,""+A.k.V(w*100)+"%","Green",1,0,new B.ebj(v),w)
t=t[2]
return B.jL(A.b8,A.hb,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.x(C.a([r,w,B.hH(A.d_,""+A.k.V(t*100)+"%","Blue",1,0,new B.ebk(v),t),new C.bI(A.a8,u,u,new B.fj(A.ho,"Lock it in",new B.ebl(v),A.b2,u),u)],x.p),A.m,u,A.e,A.N,0,A.p))}}
B.bh2.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bx(new C.a9(0,0,n,m),A.qp)
$.W()
w=C.N()
w.r=A.w.gp(0)
d.aE(l,w)
w=d.a
J.by(w.save())
w.clipRRect(C.et(C.bx(new C.a9(0,0,n,m),A.qp)),$.pz(),!0)
v=e.gdB()*0.3
u=e.ec(A.J)
l=-v*0.55
t=v*0.45
s=[u.ad(0,new C.v(0,l)),u.ad(0,new C.v(l,t)),u.ad(0,new C.v(v*0.55,t))]
r=[A.Ey,I.adE,I.ae4]
d.lg(new C.a9(0,0,n,m),C.N())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.a=A.nI
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bx(new C.a9(0,0,n,m),A.qp)
m=C.N()
m.b=A.ae
m.c=2
m.r=A.b_.gp(0)
d.aE(n,m)},
au(d){return!0}}
B.aLE.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bwX.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvv()}}
B.aLF.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bwY.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvw()}}
B.btM.prototype={}
B.a8b.prototype={
B(d){var w=null
return C.c8(C.eF(w,w,w,!0,!0,D.aeQ,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.anO,w,w,w,new B.cfI(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fGu,w,w,w,1,w,!0),D.aeQ,C.cw(C.a([D.ec0,C.cq(new B.cfJ())],x.p),w,D.bu7,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.Wi.prototype={
T(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aEw(w,new C.as(A.as,$.aw()),$,A.bx,0,C.a([],x.X),null,null)}}
B.aEw.prototype={
Z(){this.a1()
this.li()},
b4d(d){var w=this.d.length
return A.o.E(A.k.bm(A.k.E(A.k.E(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
lB(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b4d(v.f)
if(w!==v.x){v.x=w
B.li("bell",24+A.o.E(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.eKD(v))
B.BK("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c8e(){if(this.d.length<2)return
this.m(new B.eKz(this))},
aZv(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.eKy(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc8d(),p=s.d,o=C.E(C.aC(r,C.b3(r,r,r,new B.bv8(p,s.f,r),A.f5),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a7),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.x(C.a([o,new C.a7(r,40,C.av(C.d(n,r,r,r,r,r,r,D.fga,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.axr[A.o.E(v,8)].j(0.9)
t=new C.aT(20,20)
o.push(C.aC(r,C.p(r,new C.y(p[v],r,D.ffr,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bp(t,t,t,t),r,r,A.n),r,r,r,A.fC,A.h8,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new B.eKB(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a7))}p=A.c.j(0.07)
return B.jL(A.aM,A.hb,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.x(C.a([new B.eV(o,r,r),C.B(C.a([C.E(C.aM(r,A.U,!1,r,!0,A.r,r,C.aN(),s.e,r,r,r,r,r,2,C.bs(r,new C.b4(4,C.n(14),A.Y),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kI,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.aj,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.eKC(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dp,!0,A.a4,r,A.an,r,r,r,r),1),A.ab,new B.fj(A.hB,"Add",s.gc8b(s),A.c,r),A.bp,new B.fj(A.mw,"Spin",q,A.b2,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.N,0,A.p))}}
B.bv8.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.v(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.W()
w=C.N()
w.r=D.bb8.gp(0)
a1.af(d,f,w)
w=C.N()
w.b=A.ae
w.c=3
w.r=A.aM.gp(0)
a1.af(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=C.bU(d,a0)
n=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.axr[A.o.E(q,8)].gp(0)
m=n.H()
n=p*57.29577951308232
f.drawArc.apply(f,[C.c0(o),n,s,!0,m])
m.delete()
o=C.bU(d,a0)
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.H()
f.drawArc.apply(f,[C.c0(o),n,s,!0,m])
m.delete()
J.by(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.ap(o,0,11)+"\u2026"
k=new C.kk(new C.es(o,i,i,A.cO,i,i,i,i,i,i,D.f3w),A.a4,A.c6,new C.jv(1),i,i,i,i,A.c5,i)
k.en()
o=k.b
n=o.c
o=o.a.c
k.a4(a1,new C.v(a0-n-16,-o.gbd(o)/2))
f.restore()}f=C.N()
f.r=D.aeu.gp(0)
a1.af(d,20,f)
f=C.N()
f.b=A.ae
f.c=3
f.r=A.aM.gp(0)
a1.af(d,20,f)
j=new C.aO(h.r,A.ao,i,i,C.a([],x.v))
e-=a0
j.F(new C.b5(g,e+26))
e-=10
j.F(new C.ap(g-14,e))
j.F(new C.ap(g+14,e))
j.F(new C.bE())
e=C.N()
e.r=A.c.gp(0)
a1.aR(j,e)
e=C.N()
e.b=A.ae
e.c=2
e.r=A.aW.gp(0)
a1.aR(j,e)},
au(d){return!0}}
B.V1.prototype={
T(){return new B.bjn($,A.bx,0,C.a([],x.X),null,null)}}
B.bjn.prototype={
Z(){this.a1()
this.li()},
lB(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.BK("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a4R(900,new B.dUG())}w.m(new B.dUH())},
aZx(d){return this.m(new B.dUB(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aV(A.o.u(A.k.an(m,60)),2,"0")
v=A.a.aV(A.o.u(A.o.E(A.k.dk(m),60)),2,"0")
m=C.b3(n,n,n,new B.bpX(l,A.c9,n),A.aOD)
u=C.d(w+":"+v,n,n,n,n,n,n,D.f7M,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a7(280,280,new C.an(A.A,n,A.aa,A.r,C.a([m,C.x(C.a([u,C.d(t,n,n,n,n,n,n,D.f6Q,n,n,n),A.au,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.wx,n,n,n)],s),A.m,n,A.e,A.N,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.d9h[r]
u.push(new B.dB(""+q+" min",o.d===q,new B.dUD(o,q),n,A.c9,n))}m=o.f
p=m?A1.yn:A.iJ
m=m?"Pause":"Start"
return B.jL(A.c9,A.hb,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.x(C.a([new B.eV(u,n,n),new B.eV(C.a([new B.fj(p,m,new B.dUE(o),A.b2,n),new B.fj(A.k6,"Reset",new B.dUF(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.N,0,A.p))}}
B.bpX.prototype={
a4(d,e){var w,v,u,t,s=e.ec(A.J),r=e.a/2-14
$.W()
w=C.N()
w.b=A.ae
w.c=16
w.r=A.c.j(0.08).gp(0)
d.af(s,r,w)
w=C.bU(s,r)
v=C.N()
v.b=A.ae
v.c=16
v.d=A.bS
u=this.c
t=C.aq(u,A.c,0.4)
t.toString
v.sar(new C.fW(A.A,-1.5707963267948966,4.71238898038469,A.x,C.a([u,t,u],x.O),null,null).av(0,C.bU(s,r)))
d.fa(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
au(d){return d.b!==this.b}}
B.Uc.prototype={
T(){return new B.bj_($,A.bx,0,C.a([],x.X),null,null)}}
B.bj_.prototype={
Z(){this.a1()
this.li()},
lB(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Rk.h(0,p.d)
w.toString
v=A.d.ff(w,new B.dFy())
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
B.li("flute",D.c_F[t]+5,1400,0.35)}p.m(new B.dFz())},
gc8h(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.K6("Press Start",0.5)
w=D.Rk.h(0,this.d)
w.toString
v=A.d.ff(w,new B.dFt())
u=A.k.E(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.K6("Breathe in",0.5+0.5*A.dC.aA(0,p))
case 1:return new C.K6("Hold",1)
case 2:return new C.K6("Breathe out",1-0.5*A.dC.aA(0,p))
default:return new C.K6("Hold",0.5)}}}return new C.K6("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc8h(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hm.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ac(0,A.G,A.hm.j(0.35),A.J,40)],v):q,q,A.a5),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.DE,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kI,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a7(300,340,new C.an(A.A,q,A.aa,A.r,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.Rk.gee(D.Rk));w.C();){v=w.gR(w)
o.push(new B.dB(v,r.d===v,new B.dFw(r,v),q,A.hm,q))}w=r.e
v=w?A.O5:A.iJ
w=w?"Stop":"Start"
o.push(new B.fj(v,w,new B.dFx(r),A.b2,q))
return B.jL(A.hm,A.hb,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eV(o,q,q))}}
B.aHV.prototype={}
B.UT.prototype={
T(){return new B.bjh(new C.cs(null,x.A),C.a([],x.au),A.ax,A.c)}}
B.bjh.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.mE,s,s,s,new B.dRX(t,d),s,s,s,s,"Share",s)],r),p=C.bw(C.n(18),new C.ex(C.aC(s,C.b3(s,s,s,new B.blj(t.e,t.x,s),A.f5),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dRY(t),new B.dRZ(t),s,s,s,s,s,s,s,s,s,new B.dS_(t),s,s,s,s,!1,A.a7),t.d),A.aq),o=C.a([],r)
for(w=0;w<9;++w){v=D.cR8[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.Ff(v,u,new B.dS0(t,v),!1,s))}u=t.r
return B.jL(A.bD,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.D(A.bR,p,s),"DRAW PAD",C.x(C.a([new B.eV(o,s,s),B.hH(A.bD,""+A.k.V(u),"Brush",30,2,new B.dS1(t),u),new B.eV(C.a([new B.dB("Eraser",t.w,new B.dS2(t),A.G7,A.bD,s),new B.fj(A.rm,"Undo",new B.dS3(t),A.c,s),new B.fj(A.e7,"Clear",new B.dS4(t),A.c,s),new B.fj(A.NL,"Paper",new B.dS5(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.N,0,A.p))}}
B.blj.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.W()
w=C.N()
w.r=this.c.gp(0)
d.b0(new C.a9(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bS
p.e=A.fG
p.b=A.ae
m=r.c
if(m.length===1){q=A.d.gI(m)
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=o.gp(o)
l=m.H()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=C.a([],t)
k=new C.aO(q.r,A.ao,null,null,o)
o.push(new C.b5(A.d.gI(m).a,A.d.gI(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new C.cW(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bC(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new C.ap(A.d.gal(m).a,A.d.gal(m).b)
o.push(q)
o=k.f
if(o!=null)q.bC(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.H()
q=k.e
u.drawPath((q==null?k.e=new C.cC(k.gbK().a.snapshot()):q).a,l)
l.delete()}}},
au(d){return!0}}
B.VE.prototype={
T(){var w=x.S
return new B.aDP(C.aX(w),C.aX(w))}}
B.aDP.prototype={
Z(){this.a1()
this.arW()},
arW(){var w,v,u=this,t=x.N,s=C.bo(D.de8,!0,t)
A.d.CM(s)
w=x.S
v=C.T(s).c
t=C.C(C.db(s,0,C.dI(u.d,"count",w),v),t)
A.d.v(t,C.db(s,0,C.dI(u.d,"count",w),v))
A.d.CM(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
c8c(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.li("bell",12+A.o.E(d,9),150,0.35)
s.m(new B.egK(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gal(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bN(A.nd,new B.egL(s,v,u),t)
else{s.x=!0
C.bN(Ab.Fp,new B.egM(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.TW,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.an(p,2)+" / "+o
o=x.p
p=C.x(C.a([new C.D(A.xO,C.B(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aM:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hE,A.j,0,q,q),q),C.E(C.im(!0,q,q,A.y,new C.hQ(v,8,8,1,q),new B.egQ(r),r.e.length,A.bl,q,A.ah,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cSB[t]
o.push(new B.dB(s.b,r.d===s.a,new B.egR(r,s),q,A.aN,q))}o.push(new B.fj(D.bHr,"New game",new B.egS(r),A.b2,q))
return B.jL(A.aN,A.hb,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eV(o,q,q))}}
B.VR.prototype={
T(){return new B.aEa(C.a([],x.t))}}
B.aEa.prototype={
c8g(d){A.d.a8(this.d)
this.w=!0
this.aZw()},
aZw(){this.d.push(A.cG.aw(4))
this.e=0
this.ZH()},
ZH(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZH=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.erD(t))
s=x.H
w=3
return C.b(C.bN(A.lO,null,s),$async$ZH)
case 3:r=t.d,q=C.bo(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aSE(n)
w=7
return C.b(C.bN(new C.ba(1000*Math.max(280,600-r.length*18)),null,s),$async$ZH)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.erE(t))
case 1:return C.h(u,v)}})
return C.i($async$ZH,v)},
aSE(d){this.m(new B.erB(this,d))
B.li("marimba",D.app[d]+5,450,0.55)
C.bN(A.Fm,new B.erC(this),x.H)},
c8i(d){var w,v,u=this
if(!u.w||u.r)return
u.aSE(d)
w=u.d
v=u.e
if(w[v]!==d){E.dG(90,"",600,0,0.5,"saw")
u.m(new B.erF(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.erG(u))
C.bN(A.ii,new B.erH(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,K.U2,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.fgx,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.awk[v]
u=u.j(q.f===v?1:0.35)
t=new C.aT(28,28)
s=q.f===v?C.a([new C.ac(0,A.G,D.awk[v].j(0.8),A.J,30)],w):p
r=new C.az(A.c.j(q.f===v?0.9:0.15),2,A.q,-1)
l.push(C.aC(p,C.df(p,p,p,p,A.bc,new C.o(u,p,new C.bO(r,r,r,r),new C.bp(t,t,t,t),s,p,A.n),A.jm,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.erI(q,v),p,p,p,p,p,p,!1,A.a7))}o=C.av(new C.D(A.a9,C.x(C.a([o,A.am,n,A.d7,new C.fK(1,C.m2(1,l,2,12,12,p,A.dS,!1),p)],m),A.m,p,A.b9,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jL(A.bH,A.hb,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eV(C.a([new B.fj(A.iJ,n,q.gc8f(q),A.b2,p)],m),p,p))}}
B.Wb.prototype={
T(){return new B.bkv(new C.as(A.as,$.aw()))}}
B.bkv.prototype={
avu(d){return C.oI(A.k.aa(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.eFV(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d6(C.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.eG3()
l=C.aM(m,A.U,!1,m,!0,A.r,m,C.aN(),l,m,m,m,m,m,2,C.bs(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.n(16),Aa.x_),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.n(16),D.aZf),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.kH,"Bill amount",!0,!0,!1,m,m,m,m,D.fe6,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,A.dW,m,m,m,1,m,m,!1,"\u2022",m,new B.eG_(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aQ6,!0,A.a4,m,A.an,m,m,m,m)
k=A.b2.j(0.1)
s=C.n(20)
r=C.I(A.b2.j(0.35),A.q,1)
q=x.p
s=C.cw(C.a([l,A.by,C.p(m,C.x(C.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.avu(w)),t.$2("Total","$"+n.avu(v)),X.M7,t.$3$big("Each of "+n.f+" pays","$"+n.avu(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bQ,m,m,m)],q),m,A.fD,m,m,A.ah,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cDq[p]
r.push(new B.dB(""+o+"%",A.k.V(n.e)===o,new B.eG0(n,o),m,A.b2,m))}l=n.f
return B.jL(A.b2,A.hb,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.x(C.a([new B.eV(r,"TIP",m),B.hH(A.aN,""+l,"People",20,1,new B.eG1(n),l),new B.eV(C.a([new B.dB("Round up",n.r,new B.eG2(n),m,A.aM,m)],q),m,m)],q),A.m,m,A.e,A.N,0,A.p))}}
B.VC.prototype={
T(){var w=C.a([3,5],x.t)
return new B.bjZ(w,A.cG,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjZ.prototype={
Z(){this.a1()
this.li()},
lB(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.E(A.k.bm(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t
B.a8a("snare",0.5)}u.m(new B.efp())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hi()
u.w=t
u.x=t?0:3.141592653589793
B.li("bell",24,400,0.5)}u.m(new B.efq())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bd_(v,o.r>0,n))}u=C.aC(n,C.av(C.bV(A.fT,m,A.br,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.efi(o),n,n,n,n,n,n,!1,A.a7)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.d5,A.q,6)
s=C.a([new C.ac(0,A.G,A.aM.j(0.4),A.J,30)],x.V)
u=C.aC(n,C.av(C.ef(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fdl,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.eiU,A.a5),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.efj(o),n,n,n,n,n,n,!1,A.a7)}else{m=o.as
u=C.aC(n,C.av(C.x(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.f30,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kI,n,n,n)],x.p),A.m,n,A.e,A.N,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.efk(o),n,n,n,n,n,n,!1,A.a7)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.d6J[r]
v.push(new B.dB(q.b,o.d===q.a,new B.efl(o,q),q.c,A.bu,n))}v=C.a([new B.eV(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hH(A.bu,""+s,"Dice",4,1,new B.efm(o),s))}if(o.d==="num"){s=o.z
s=B.hH(A.bu,""+s,"From",100,1,new B.efn(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hH(A.bu,""+p,"To",1000,2,new B.efo(o),p)],m))}return B.jL(A.bu,A.hb,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.x(v,A.m,n,A.e,A.N,0,A.p))}}
B.bd_.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cG.aj()-0.5)*0.6
else w=0
v=C.n(22)
u=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cB,14)],x.V)
t=C.a([],x.p)
for(s=D.dpG.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bI(s[q],p,p,C.p(p,p,A.f,p,p,M.aby,p,18,p,p,p,p,p,18),p))
return C.eJ(A.A,w,C.p(p,new C.an(A.W,p,A.aa,A.r,t,p),A.f,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bB,p,p,100),p)}}
B.aL_.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bwO.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.buP()}}
B.aLi.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bwT.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bv8()}}
B.aLN.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bx2.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvE()}}
B.aMg.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bxe.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bw7()}}
B.b6z.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aEg.h(0,t)
$.arF=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,S.np,u,u,u,new B.csC(d),u,u,u,u,u,u),C.E(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.X(A.NP,s,u,u,u,22),u,u,u,new B.csD(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.D(D.bxa,C.B(t,A.m,u,A.e,A.j,0,u,u),u),C.E(v.f,1)],w)
w.push(C.p(u,v.r,A.f,u,u,new C.o(F.AO,u,new C.bO(new C.az(A.c.j(0.08),1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,A.Fr,u,u,1/0))
return C.c8(u,A.c_,C.bm(!0,C.x(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),u,!1,!1,u,u)}}
B.dB.prototype={
B(d){var w,v,u,t=this,s=null,r=C.n(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.I(o,A.q,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.X(u,q?t.r:A.aS,s,s,s,16),A.ee],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.D(F.tM,C.aC(s,C.df(s,C.B(v,A.m,s,A.e,A.N,0,s,s),s,s,A.bc,new C.o(p,s,o,r,s,s,A.n),A.eH,s,s,s,A.h8,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.csy(t),s,s,s,s,s,s,!1,A.a7),s)}}
B.eV.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a7(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.E(C.cd(C.B(this.c,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aP),1))
return new C.D(A.cw,C.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.avy.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.av6(d).cJq(q,A.bE,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.E(C.a9Y(C.l0(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a7(s,34,C.B(C.a([new C.a7(78,s,r,s),q,new C.a7(38,s,C.d(u==null?A.k.aa(w,1):u,s,s,s,s,s,s,A.J9,A.dN,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fj.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.D(F.tM,C.aF(!1,A.a1,!0,C.n(12),C.aL(!1,C.n(12),!0,new C.D(Ai.ahE,C.B(C.a([C.X(w.c,u,v,v,v,17),A.ee,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.N,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.csx(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ag),v)}}
B.Ff.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.f1k:u
w=t?A.c:A.b_
w=C.I(w,A.q,t?2.5:1)
return C.aC(u,C.df(u,u,u,u,A.bc,new C.o(p,u,w,u,t?C.a([new C.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a5),A.hz,u,r,D.ahq,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.csE(v),u,u,u,u,u,u,!1,A.a7)}}
B.mE.prototype={
a4R(d,e){var w=C.dj()
w.seL(C.cM(C.dE(0,0,0,d,0,0),new B.csz(this,w,e)))
this.fu$.push(w.bj())},
li(){var w=this,v=w.qy(new B.csB(w))
v.hZ(0)
w.ft$!==$&&C.aP()
w.ft$=v}}
B.aaY.prototype={
byi(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.K)(w),++q)for(p=A.d.gae(w[q]);p.C();){o=p.gR(0)
n=J.a4(o)
if(n.h(o,0)<s)s=n.h(o,0)
if(n.h(o,0)>t)t=n.h(o,0)
if(n.h(o,1)<r)r=n.h(o,1)
if(n.h(o,1)>u)u=n.h(o,1)}g.z!==$&&C.aP()
g.z=s
g.Q!==$&&C.aP()
g.Q=t
g.as!==$&&C.aP()
g.as=r
g.at!==$&&C.aP()
g.at=u
for(m=0,q=0;q<w.length;w.length===p||(0,C.K)(w),++q){for(v=A.d.gae(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gR(0)
n=J.a4(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aP()
g.ax=m
w=g.bBw()
g.ay!==$&&C.aP()
g.ay=w},
bBw(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
Fy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
for(k=l.y,w=k.length,v=0;v<k.length;k.length===w||(0,C.K)(k),++v){u=k[v]
for(t=u.length-1,s=!1,r=0;r<u.length;q=r+1,t=r,r=q){p=J.q(u[r],0)
o=J.q(u[r],1)
n=J.q(u[t],0)
m=J.q(u[t],1)
if(o>f!==m>f&&e<(n-p)*(f-o)/(m-o)+p)s=!s}if(s)return!0}return!1}}
B.aaZ.prototype={
cFj(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(r.Fy(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
B.v5.prototype={}
B.P1.prototype={}
B.y1.prototype={}
B.P0.prototype={
fo(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.apk[w.aw(7)]
w=w.hi()?0:12
u=A.o.E(t.c++,3)===0?"flute":"bell"
B.li(u,v+w-12,2200,0.1)}}
B.V8.prototype={
T(){var w=$.aw()
return new B.aDb(new C.cs(null,x.A),new C.as(A.as,w),new B.P0(A.cG),D.d8K,A.aw,D.a3i,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDb.prototype={
Z(){var w,v=this
v.a1()
v.li()
v.a.toString
w=$.hfg
if(w==null)w=$.hfg=B.cvd()
w.bB(new B.dXo(v),x.P)},
q(){var w=this.e
w.U$=$.aw()
w.P$=0
this.bvg()},
ct_(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n)q.push(new B.dWR(p[n]).$0())
w.push(q)}this.w=w},
gVU(){var w=this.fy
return w.A(0,A.aw)?100:Math.min(w.a,w.b)*0.43},
at7(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
axc(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.at7(d.x,d.w,105/Math.max(w,3))
C.eY()
B.li("bell",(A.d.cK(D.a2T,d.c)+1)*3+12,900,0.45)
E.dG(300,"",280,1.4,0.15,"tri")},
lB(d){var w,v,u,t,s,r,q,p=this
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
c8X(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.aw))return null
w=n.fy
v=n.gVU()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gVU()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cFj((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c8W(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dWP(w))
return}w.m(new B.dWQ(w,v,A.a.i(d).toLowerCase()))},
bOs(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new B.dWN(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bK7,n,n,n,o.gbOr(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.mE,n,n,n,new B.dX9(o,d),n,n,n,n,"Share",n)],l),j=C.cq(new B.dXa(o,m)),i=A.c.j(0.06)
i=C.a([C.aM(n,A.U,!1,n,!0,A.r,n,C.aN(),o.e,n,n,n,n,n,2,C.bs(n,new C.b4(4,C.n(14),A.Y),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.DB,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bSf,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc8V(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.iP,!0,A.a4,n,A.an,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
w.push(new B.dB(s.a,!1,new B.dXb(o,s),A.my,A.aN,n))}i.push(new C.D(A.i4,new C.a7(n,38,C.cw(w,n,n,n,n,A.aP,!1),n),n))}i.push(A.am)
w=C.a([new B.dB("Whole Earth",!1,new B.dXf(o),A.hp,A.aN,n)],l)
for(v=D.aEf.gdL(D.aEf),v=v.gae(v);v.C();){u=v.gR(v)
w.push(new B.dB(u.a,!1,new B.dXg(o,u),n,A.aN,n))}w.push(new B.dB("Random",!1,new B.dXh(o),A.mw,A.aN,n))
i.push(new B.eV(w,"GO TO",n))
w=o.z
i.push(B.hH(A.aN,A.k.aa(w,1)+"x","Zoom",16,0.8,new B.dXi(o),w))
w=o.dy
i.push(B.hH(A.bH,A.a.aV(A.o.u(A.k.bm(w)),2,"0")+":00","Time",24,0,new B.dXj(o),w))
w=o.fr
i.push(B.hH(A.b2,o.crJ(),"Season",365,0,new B.dXk(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lU:D.Gq
i.push(new B.eV(C.a([new B.dB("Spin",w,new B.dXl(o),D.bFh,A.aN,n),new B.dB("Night",v,new B.dXm(o),A.vL,A.aN,n),new B.dB("Borders",u,new B.dXc(o),D.bFl,A.aN,n),new B.dB("Names",r,new B.dXd(o),X.Gl,A.aN,n),new B.dB("Music",q,new B.dXe(o),p,A.aN,n)],l),n,n))
return B.jL(A.aN,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.x(i,A.m,n,A.e,A.N,0,A.p))},
crJ(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.ax_[u])v=u
return A.im[v]+" "+(A.k.bm(w-D.ax_[v])+1)},
c8U(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mS(1,A.o.E((A.d.cK(D.a2T,t)+1)*47,360),0.55,1).iI()
r=new B.dWL()
q=C.n(20)
p=C.I(s.j(0.6),A.q,1)
o=x.p
n=C.B(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a5),j,10,j,j,j,j,j,10),A.ab,C.E(C.d(d.a,j,1,A.a2,j,j,j,A.dj,j,j,j),1),C.aH(j,j,j,j,A.GH,j,j,j,new B.dWK(this),j,j,j,j,j,A.ce)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hg,j,j,j)
m=D.doe.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.B(C.a([m,A.ab,r.$2("PEOPLE",l?B.fvb(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.GO(i)+" km\xb2")
if(l)m=(w<10?A.k.aa(w,1):B.GO(w))+" per km\xb2"
else m="\u2014"
m=C.B(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.aa(u,3):A.k.aa(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.x(C.a([n,t,A.O,v,A.O,m,A.O,C.B(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.fvb(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.N,0,A.p),A.f,j,j,new C.o(D.Wj,j,p,q,j,j,A.n),j,j,j,j,D.ahY,j,j,j)}}
B.bfe.prototype={
a4(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.W(),d7=C.N()
d7.r=D.AK.gp(0)
d8.b0(new C.a9(0,0,0+d4,0+d5),d7)
w=new C.eE()
w.dt(4)
for(d7=d8.a,v=0;v<90;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.25+w.aj()*0.5).gp(0)
q=r.H()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new C.v(d4,d5)
o=d2.f
u=C.N()
t=x.O
u.sar(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.aN.j(0.35),A.K],t),D.cU8,d3).av(0,C.bU(p,o*1.1)))
d8.af(p,o*1.05,u)
n=C.bU(p,o)
u=C.N()
u.sar(D.eiY.av(0,n))
d8.af(p,o,u)
J.by(d7.save())
u=x.v
d6=new C.aO(d6.r,A.ao,d3,d3,C.a([],u))
d6.F(new C.k4(n))
d8.qv(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=C.N()
g.b=A.ae
m=g.c=0.7
g.r=A.c.j(0.1).gp(0)
f=new B.ddn(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cC(d.gbK().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ao,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bC(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cC(d.gbK().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cC(d.gbK().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ao,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bC(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cC(d.gbK().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.E((A.d.cK(D.a2T,a7.c)+1)*47,360)
$.W()
b0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new H.mS(1,a9,a3,a8?1:0.62).iI().gp(0)
b1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=a8?2.2:m
b1.e=A.fG
b1.r=(a8?A.c:A.w.j(0.55)).gp(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,C.K)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.W()
b7=C.a([],u)
b8=new C.aO(b6.r,A.ao,d3,d3,b7)
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
if(v===0){b6=new C.b5(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bC(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new C.ap(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bC(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new C.bE()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bC(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cC(b8.gbK().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cC(b8.gbK().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.K)(a5),++b3){d=a5[b3]
$.W()
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.b=A.ae
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.rx
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cC(d.gbK().a.snapshot()):s).a,q)
q.delete()}if(d2.z)for(u=d6.length,s=d2.r,r=!(s<1.8),s=14/s,b3=0;b3<d6.length;d6.length===u||(0,C.K)(d6),++b3){a7=d6[b3]
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
b2=a8?A.c:A.c.j(0.9)
c9=B.hOf(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbd(b2)
c9.a4(d8,new C.v(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.D(k*c0+j*c1*c4,-1,1)
$.W()
u=C.N()
u.sar(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b8X.j(0.78)],t),D.d96,d3).av(0,C.bU(new C.v(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.af(p,o,u)}$.W()
d4=C.N()
d4.sar(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.dlM,d3).av(0,n))
d8.af(p,o,d4)
d7.restore()
d7=C.N()
d7.b=A.ae
d7.c=1.4
d7.r=A.fW.j(0.5).gp(0)
d8.af(p,o,d7)},
au(d){return!0}}
B.aLo.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.aLp.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvf()}}
B.btH.prototype={}
B.We.prototype={
T(){return new B.bkz()}}
B.bkz.prototype={
gaSd(){var w=this.d
if(w===$)w=this.d=A.cG.aw(16)
return w},
B(d){var w=null,v=C.eF(w,w,w,!0,!0,D.AK,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.anO,w,w,w,new B.eGO(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fAa,w,w,w,1,w,!0),u=C.n(18),t=A.aN.j(0.1),s=C.I(A.aN.j(0.35),A.q,1),r=x.p
return C.c8(v,D.AK,C.cw(C.a([C.p(w,C.B(C.a([D.bIQ,A.at,C.E(C.d(D.cY2[this.gaSd()],w,w,w,w,w,w,D.a8F,w,w,w),1),C.aH(w,w,w,w,D.bTf,w,w,w,new B.eGP(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bB,w,w,w),A.aB,C.cq(new B.eGQ())],r),w,A.Z2,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.W_.prototype={
T(){return B.hOH()}}
B.bkl.prototype={
cjq(d){var w=d.c,v=B.hOJ(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.v(Math.cos(t)*v,Math.sin(t)*v)},
Z(){this.a1()
this.li()},
lB(d){var w,v,u,t=this
t.e.fo(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cjq(w)
u=new C.v(-v.a,-v.b).aG(0,t.w)
v=C.lj(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc8Y(){var w=this.ch
return new C.v(w.a/2,w.b/2).ad(0,this.x)},
c91(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.Ct[s]
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
aZS(d){this.m(new B.eyR(this,d))
C.eY()
B.li("bell",D.dlZ[A.o.E(A.d.cK(D.Ct,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.mE,m,m,m,new B.ez1(n,d),m,m,m,m,"Share",m)],k),i=C.cq(new B.ez2(n,l)),h=C.a([new B.dB("All",!1,new B.ez3(n),A.a0Z,A.aM,m)],k)
for(w=0;w<10;++w){v=D.Ct[w]
h.push(new B.dB(v.a,n.z===v,new B.ez4(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.aa(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=B.hH(A.aM,s,"Time",1,0,new B.ez5(n),u/t)
u=n.w
u=B.hH(A.aM,A.k.aa(u,1)+"x","Zoom",9,0.5,new B.ez6(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lU:D.Gq
return B.jL(A.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.x(C.a([new B.eV(h,"GO TO",m),t,u,new B.eV(C.a([new B.dB("Orbits",s,new B.ez7(n),m,A.aM,m),new B.dB("Names",r,new B.ez8(n),m,A.aM,m),new B.dB("Asteroids",q,new B.ez9(n),m,A.aM,m),new B.dB("Music",p,new B.eza(n),o,A.aM,m)],k),m,m)],k),A.m,m,A.e,A.N,0,A.p))},
c8Z(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new B.eyP(),m=C.n(20),l=C.I(q.j(0.6),A.q,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a5),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.B(C.a([k,A.ab,C.E(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.kg,r,r,r),1),C.aH(r,r,r,r,A.GH,r,r,r,new B.eyO(this),r,r,r,r,r,A.ce)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,F.DC,r,r,r)
v=n.$2("WIDTH",B.GO(d.d*2)+" km")
u=p===0
p=C.B(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.u(p)+" AU ("+B.GO(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.eyQ().$1(v))
t=d.f
v=C.B(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.aa(t/24,0)+" Earth days":A.k.aa(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.B(C.a([n.$2("GRAVITY",C.u(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.aa(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.aa(o,1)+" minutes":A.k.aa(o/60,1)+" hours"
return C.p(r,C.x(C.a([j,A.au,k,A.O,p,A.O,v,A.O,s,A.O,C.B(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.N,0,A.p),A.f,r,r,new C.o(D.Wj,r,l,m,r,r,A.n),r,r,r,r,D.ahY,r,r,r)}}
B.brJ.prototype={
a4(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.AK.gp(0)
a7.b0(new C.a9(0,0,0+a5,0+a6),w)
v=new C.eE()
v.dt(8)
for(w=a7.a,u=0;u<110;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.aj()*0.5).gp(0)
p=q.H()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc8Y()
n=a5.w
if(a5.as)for(a6=A.d.gae(D.Ct),t=new C.f2(a6,new B.f0c()),s=o.a,r=o.b;t.C();){q=a6.gR(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
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
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.5).gp(0)
p=l.H()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=B.hOI(A.d.gI(D.Ct))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.N()
s=x.O
t.sar(new C.bT(A.A,0.5,A.x,a4,0,C.a([A.aM.j(0.5),A.K],s),a4,a4).av(0,C.bU(o,a6)))
a7.af(o,a6,t)
t=C.N()
t.sar(D.eiS.av(0,C.bU(o,i)))
a7.af(o,i,t)
if(a5.at){h=B.hgT("Sun",10.5,A.ad)
h.a4(a7,o.ad(0,new C.v(-h.b.c/2,i+4)))}for(a6=A.d.gae(D.Ct),t=new C.f2(a6,new B.f0d()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gR(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=C.b0(l.z)
d=l.a
if(d==="Saturn"){J.by(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=C.ch(A.J,j*1.3,j*4.2)
a1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.b=A.ae
a1.c=j*0.45
a1.r=A.bM.j(0.55).gp(0)
p=a1.H()
w.drawOval(C.c0(a0),p)
p.delete()
w.restore()}a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gp(0)
a0.z=A.rx
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1=C.aq(e,A.w,0.55)
a1.toString
a0.sar(new C.bT(P.ps,0.5,A.x,a4,0,C.a([A.c,e,a1],s),I.a2v,a4).av(0,C.bU(new C.v(g,f),j)))
p=a0.H()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=2
l.r=A.c.gp(0)
p=l.H()
w.drawCircle(g,f,j+7,p)
p.delete()}if(r&&d==="Earth"){k=a5.f/27.3*2*3.141592653589793
a2=j+11*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.c.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.d2k[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.hgT(d,10.5,A.ad)
h.a4(a7,new C.v(g+-h.b.c/2,f+(j+4)))}}},
au(d){return!0}}
B.V9.prototype={
T(){var w=x.i
return new B.aDc(new B.P0(A.cG),C.c2(5,0,!1,w),C.c2(5,0,!1,w),C.c2(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDc.prototype={
cwf(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c90(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.e7A
s.cy=new C.v(s.ay,0)
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
E.dG(150,"",400,0,0.5,"noise")
E.dG(90,"",300,1.5,0.6,"sine")
s.m(new B.dXs())},
Z(){this.a1()
this.li()},
lB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fo(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.yX[r]
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
if(q.a!=="Sun")E.dG(60+p*5,"",220,0.6,0.55,"sine")
break}}}if(A.d.d6(s,new B.dXV()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
E.dG(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||A.d.gal(v).aD(0,i.cx).gcn()>120)v.push(i.cx)
if(v.length>700)A.d.cA(v,0)
if(i.cx.gcn()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bMH()
else n=n==="weight"?p.cDB():p.bEN()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.diX[u]
v.push(new B.dB(t.b,p.d===t.a,new B.dXH(p,t),t.c,A.cs,o))}v=C.a([new B.eV(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dB("Hammer",!s,new B.dXI(p),Ag.Gk,A.cs,o),new B.dB("Feather",s,new B.dXJ(p),X.Nu,A.cs,o),new B.dB(q,r,new B.dXN(p),A.G8,A.aN,o)],w)
q=p.w
A.d.v(v,C.a([new B.eV(r,o,o),B.hH(A.cs,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new B.dXO(p),q),new B.eV(C.a([new B.fj(A.tY,"Drop!",new B.dXP(p),A.b2,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hH(A.cs,""+A.k.V(s)+" kg","Your weight",120,20,new B.dXQ(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hH(A.cs,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new B.dXR(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hH(A.cs,A.k.aa(s,1)+" km/s","Speed",13,0,new B.dXS(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hH(A.cs,A.k.aa(r,1)+"x out","View",8,0.5,new B.dXT(p),r),new B.eV(C.a([new B.fj(A.no,"Fire!",p.gc9_(),A.b2,o),new B.fj(A.tY,"Falls",new B.dXU(p),A.c,o),new B.fj(A.re,"Orbit 7.7",new B.dXK(p),A.c,o),new B.fj(D.bIf,"Oval 9",new B.dXL(p),A.c,o),new B.fj(A.BT,"Escape",new B.dXM(p),A.c,o)],w),o,o)],w))}return B.jL(A.cs,A.hb,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.x(v,A.m,o,A.e,A.N,0,A.p))},
bMH(){return new C.D(D.bsa,C.cq(new B.dXr(this)),null)},
cDB(){var w,v,u,t=null,s=[D.eIx,D.eJZ,D.eK6,D.eKp,D.eK4,D.eKv,D.eJ5,D.eKS,D.eJJ],r=x.p,q=C.a([D.fo1,A.R],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.D(A.cw,new C.cl(A.aP,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a7(62,t,new C.y(v.a,t,new C.H(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bB(1,A.bh,new C.Bq(new B.dXt(this,v),t),t)],r),t),t))}q.push(A.au)
q.push(D.fqn)
return C.cw(q,t,A.ik,t,t,A.ah,!1)},
bEN(){return C.cq(new B.dXp(this))}}
B.baq.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.W(),e=C.N()
e.r=D.AK.gp(0)
d.b0(new C.a9(0,0,0+h,0+g),e)
w=new C.eE()
w.dt(2)
for(e=d.a,v=0;v<80;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.aj()*0.5).gp(0)
q=r.H()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=C.N()
e.sar(new C.bT(A.A,0.5,A.x,i,0,C.a([A.K,A.aN.j(0.35),A.K],x.O),D.da0,i).av(0,C.bU(g,p*1.1)))
d.af(g,p*1.06,e)
e=C.N()
e.sar(D.eiM.av(0,C.bU(g,p)))
d.af(g,p,e)
o=g.ad(0,new C.v(0,-p))
f=f.r
e=x.v
n=new C.aO(f,A.ao,i,i,C.a([],e))
u=o.a
t=o.b
s=t+3
n.F(new C.b5(u-16,s))
n.F(new C.ap(u,t-400*h-4))
n.F(new C.ap(u+16,s))
n.F(new C.bE())
s=C.N()
s.r=A.ak.gp(0)
d.aR(n,s)
s=o.ad(0,new C.v(0,-400*h-6))
u=C.N()
u.r=A.c.gp(0)
d.af(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.aO(f,A.ao,i,i,e)
f=g.a
t=g.b
m.F(new C.b5(f+A.d.gI(u).a*h,t+A.d.gI(u).b*h))
for(u=C.db(u,1,i,C.T(u).c),s=u.$ti,u=new C.bQ(u,u.gM(0),s.k("bQ<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.ap(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bC(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.W()
f=C.N()
f.b=A.ae
f.c=2.4
f.d=A.bS
f.r=A.cs.j(0.9).gp(0)
d.aR(m,f)}if(j.f){f=j.d
k=g.ad(0,new C.v(f.a*h,f.b*h))
h=C.N()
h.r=A.cs.j(0.4).gp(0)
h.z=G.mI
d.af(k,7,h)
h=C.N()
h.r=A.c.gp(0)
d.af(k,4,h)}},
au(d){return!0}}
B.VS.prototype={
T(){return new B.bki(new C.cs(null,x.A),$,A.bx,0,C.a([],x.X),null,null)}}
B.bki.prototype={
Z(){this.a1()
this.li()},
lB(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Qb[l.e],i=D.Qb[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aH(k,k,k,k,D.mE,k,k,k,new B.erL(l,d),k,k,k,k,"Share",k)],u)
s=C.E(C.b3(k,k,k,new B.brh(f,g,v,k),A.f5),1)
r=g.a
q=v<10?A.k.aa(v,1):B.GO(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.hH,A.L,k,k)
o=B.GO(v*v*v)
n=A.a.cb(p,"s")?"":"s"
h=C.x(C.a([s,C.p(k,C.x(C.a([q,A.au,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A5.zP,A.L,k,k),A.bC,C.d(p+": "+B.GO(w*2)+" km wide. "+r+": "+B.GO(h*2)+" km wide.",k,k,k,k,k,k,A5.Jh,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.buh,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.Qb[m]
r.push(new B.dB(w.a,l.e===m,new B.erM(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.Qb[m]
w.push(new B.dB(s.a,l.f===m,new B.erN(l,m),k,C.b0(s.c),k))}return B.jL(A.bY,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.ex(h,l.d),"SIZE COMPARE",C.x(C.a([new B.eV(r,"FIRST",k),new B.eV(w,"SECOND",k)],u),A.m,k,A.e,A.N,0,A.p))}}
B.brh.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.W()
w=C.N()
w.r=D.WZ.gp(0)
d.b0(new C.a9(0,0,0+h,0+g),w)
v=new C.eE()
v.dt(6)
for(w=d.a,u=0;u<70;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new C.v(h,g)
w=new B.eZl(d)
t=this.c
w.$3(m,o,C.b0(t.c))
s=o-n
l=new C.v(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,C.b0(s.c))
w=C.N()
w.b=A.ae
w.c=1.4
w.r=A.ad.gp(0)
d.af(l,n+3,w)
k=C.h3(i,i,i,i,C.d3(i,i,i,i,i,i,i,i,i,D.f9A,s.a),A.a4,A.c6,i,A.dP,A.c5)
k.en()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbd(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbd(g)-6
h=g}k.a4(d,l.ad(0,new C.v(-w/2,h)))
j=C.h3(i,i,i,i,C.d3(i,i,i,i,i,i,i,i,i,D.fcV,t.a),A.a4,A.c6,i,A.dP,A.c5)
j.en()
t=j.b
h=t.c
t=t.a.c
j.a4(d,m.ad(0,new C.v(-h/2,-t.gbd(t)/2)))},
au(d){return!0}}
B.aLq.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bwV.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvh()}}
B.aLZ.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bx8.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvQ()}}
B.aM1.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bxa.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvT()}}
B.Pv.prototype={}
B.Ua.prototype={
T(){return B.hOF()}}
B.biZ.prototype={
Z(){this.a1()
this.li()},
lB(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fo(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dG(70,"",500,0.3,0.5,"sine")}}A.d.br(w,new B.dF_())},
aZT(d){var w,v,u,t=this.Q
if(t.A(0,A.aw))return
w=this.gb7S()
v=d.aD(0,new C.v(t.a/2,t.b*0.42))
u=A.k.D(v.gcn()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.Pv(t,u,1.2,new C.vI(1,30+A.cG.aj()*40,0.9,0.7).iI()))
B.li("bell",60+A.k.V(12-u)*2,400,0.35)},
gb7S(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.M(m,new B.dEO(),C.T(m).k("M<1,L>")).ff(0,A.v7),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.mE,n,n,n,new B.dEP(o,d),n,n,n,n,"Share",n)],m)
v=C.cq(new B.dEQ(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.aa(s,0)+" Suns":B.fvb(s)+" Suns"
t=B.hH(A.bu,s,"Mass",1,0,new B.dES(o),u/t)
u=C.a([new B.dB("Star (10)",!1,new B.dET(o),n,A.bu,n),new B.dB("Cygnus X-1 (21)",!1,new B.dEU(o),n,A.bu,n),new B.dB("Milky Way core (4 million)",!1,new B.dEV(o),n,A.bu,n),new B.dB("M87 (6.5 billion)",!1,new B.dEW(o),n,A.bu,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lU:D.Gq
return B.jL(A.bu,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.x(C.a([t,new B.eV(u,"LIKE",n),new B.eV(C.a([new B.dB("Glowing ring",s,new B.dEX(o),n,A.bu,n),new B.dB("Bent light",r,new B.dEY(o),n,A.bu,n),new B.dB("Music",q,new B.dEZ(o),p,A.bu,n),new B.fj(A.k6,"Clear",new B.dER(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.N,0,A.p))},
aew(d,e){var w=null
return C.E(C.x(C.a([C.d(d,w,w,w,w,w,w,D.f5v,w,w,w),A.bC,C.d(e,w,2,w,w,w,w,L.zM,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b9P.prototype={
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.W()
w=C.N()
w.r=D.bh0.gp(0)
b2.b0(new C.a9(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.v(w,v)
t=this.b
s=t.gb7S()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.K)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new C.v(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.D(o/h,0,n)
i=new C.v(w+k/h*g,v+j/h*g)}}k=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.c.j(0.6).gp(0)
f=k.H()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=C.N()
b0.b=A.ae
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=S.Rp
b2.af(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(A.vf,A.fl,d)
n.toString
k=Math.cos(a4)
$.W()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gp(0)
f=j.H()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=n.j(b1).gp(0)
f=k.H()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.W()
b1=C.N()
b1.sar(new C.bT(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cPb,null).av(0,C.bU(u,b0)))
b2.af(u,b0,b1)
b1=C.N()
b1.r=A.w.gp(0)
b2.af(u,s,b1)
b1=C.N()
b1.b=A.ae
b1.c=1
b1.r=A.bu.j(0.55).gp(0)
b2.af(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,C.K)(b0),++m){a7=b0[m]
a0=s*a7.b
t=w+Math.cos(a7.a)*a0
r=v+Math.sin(a7.a)*a0*0.9
a8=1+A.k.D(3.5/a7.b,0,5)
a9=3*a8
q=-Math.sin(a7.a)*a9
o=Math.cos(a7.a)*a9
n=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
n.c=4.2/Math.sqrt(a8)
n.d=A.bS
k=a7.d
n.r=k.j(A.k.D(a7.b/2,0.2,1)).gp(0)
f=n.H()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=k.j(0.2).gp(0)
o.z=G.mI
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
au(d){return!0}}
B.aeI.prototype={}
B.V5.prototype={
T(){var w=x.r,v=x.g
return new B.bjq(new C.cs(null,x.A),new B.P0(A.cG),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjq.prototype={
Z(){this.a1()
this.ZU()
this.li()},
ZU(){var w,v,u,t,s,r,q,p,o=this,n=new C.eE()
n.dt(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new B.aeI(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.aw(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hi()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new B.aeI(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cw5(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.e93
k.cx=D.e96
w=new C.eE()
w.dt(9)
v=k.cy
A.d.a8(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.aeI(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
A.d.v(v,u)
u=x.g
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.K)(v),++q){p=v[q]
o=p.b
n=p.a
s.push(new C.v(Math.cos(o)*n,Math.sin(o)*n))}k.dx=s
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.K)(v),++q){p=v[q]
o=p.b
n=p.a+0.2
s.push(new C.v(-Math.sin(o)*0.55/Math.sqrt(n),Math.cos(o)*0.55/Math.sqrt(n)))}k.fr=s
v=C.a([],u)
for(s=k.ay,r=x.S,s=C.db(s,0,C.dI(900,"count",r),C.T(s).c),o=s.$ti,s=new C.bQ(s,s.gM(0),o.k("bQ<ak.E>")),o=o.k("ak.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.v(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.db(u,0,C.dI(900,"count",r),C.T(u).c),r=u.$ti,u=new C.bQ(u,u.gM(0),r.k("bQ<ak.E>")),r=r.k("ak.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.v(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
E.dG(110,"",900,0.5,0.45,"sine")},
lB(d){var w,v,u,t,s,r,q,p=this
p.e.fo(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aD(0,p.fx)
s=Math.max(0.25,t.gcn())
r=t.eG(0,s).aG(0,0.9/(s*s))
w=p.fy.ad(0,r.aG(0,u))
p.fy=w
v=p.cx.aD(0,r.aG(0,u))
p.cx=v
w=p.fx.ad(0,w.aG(0,u))
p.fx=w
v=p.CW.ad(0,v.aG(0,u))
p.CW=v
q=new B.dW_(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mE,r,r,r,new B.dVQ(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.bf4(s,r),A.aw),n=A.w.j(0.5),m=C.n(14),l=C.I(A.bE,A.q,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Ad.a7U,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bR,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.d5v[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dB(u.b,o,new B.dVR(s,u),r,A.h4,r))}l.push(new B.dB("Collide",s.ch,new B.dVS(s),A.yc,A.bY,r))
o=C.a([new B.eV(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hH(A.h4,""+n,"Arms",6,2,new B.dVT(s),n)
l=s.r
A.d.v(o,C.a([n,B.hH(A.h4,A.k.aa(l,1),"Winding",6,0.8,new B.dVU(s),l)],q))}n=s.as
o.push(B.hH(A.h4,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new B.dVV(s),n))
n=s.ax
o.push(B.hH(A.h4,A.k.aa(n,1)+"x","Speed",4,0,new B.dVW(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lU:D.Gq
o.push(new B.eV(C.a([new B.dB("Dark matter",n,new B.dVX(s),r,A.bu,r),new B.dB("You are here",l,new B.dVY(s),r,A.aM,r),new B.dB("Music",w,new B.dVZ(s),t,A.h4,r)],q),r,r))
return B.jL(A.h4,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.ex(new C.an(A.W,r,A.b1,A.r,m,r),s.d),"GALAXY",C.x(o,A.m,r,A.e,A.N,0,A.p))}}
B.bf4.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.W()
w=C.N()
w.r=D.bj4.gp(0)
a3.b0(new C.a9(0,0,0+a1,0+a2),w)
v=new C.eE()
v.dt(3)
for(w=a3.a,u=0;u<90;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.15+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new C.v(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=C.N()
t.sar(new C.bT(A.A,0.5,A.x,a0,0,C.a([A.aE.j(0.32),A.aE.j(0.12),A.K],x.O),D.ccN,a0).av(0,C.bU(o,a2)))
a3.af(o,a2,t)}m=new B.dau(a1.as)
a2=n*0.3
t=C.N()
t.sar(new C.bT(A.A,0.5,A.x,a0,0,C.a([A.fJ.j(0.85),A.aF.j(0.3),A.K],x.O),a0,a0).av(0,C.bU(o,a2)))
a3.af(o,a2,t)
if(!a1.ch){l=C.N()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=A.k.E(q,360)
l.r=new H.mS(1,r,q>200?0.45:0.55,1).iI().j(0.35+(1-s)*0.5).gp(0)
s=s<0.3?1.3:1
p=l.H()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.W()
a2=C.N()
a2.b=A.ae
a2.c=1.6
a2.r=A.aM.gp(0)
a3.af(g,9,a2)
f=C.h3(a0,a0,a0,a0,D.f2z,A.a4,A.c6,a0,A.dP,A.c5)
f.en()
f.a4(a3,g.ad(0,new C.v(-f.b.c/2,12)))}}else{e=n*0.8
l=C.N()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.bki.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.bf9.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.W()
w=C.N()
w.r=A.fJ.gp(0)
a3.af(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.N()
w.r=A.iy.gp(0)
a3.af(a1,5,w)}},
au(d){return!0}}
B.VO.prototype={
T(){return new B.bkh(new C.cs(null,x.A),new B.P0(A.cG),$,A.bx,0,C.a([],x.X),null,null)}}
B.bkh.prototype={
Z(){this.a1()
this.li()},
lB(d){var w,v,u,t=this
t.e.fo(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.E(t.r+d*0.04*v,1)
else{w=A.k.E(t.w+d*0.05*v,1)
t.w=w
u=A.k.bm(w*4)
if(u!==A.k.bm(t.as))B.li("bell",60+u*4,500,0.35)
t.as=u}},
gcrI(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gci2(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.mE,q,q,q,new B.er_(r,d),q,q,q,q,"Share",q)],p),n=C.E(new C.ex(C.b3(q,q,q,new B.bqx(r,q),A.f5),r.d),1)
if(r.f==="seasons")w=r.gcrI()
else{w=r.gci2()
v=A.k.an(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.x(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A6.TU,A.L,q,q),A.f,q,q,q,q,q,q,q,K.ai7,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A1.yn:A.iJ
t=r.Q
s=t?A.lU:D.Gq
s=C.a([new B.eV(C.a([new B.dB("Seasons",n==="seasons",new B.er0(r),A.yB,A.bv,q),new B.dB("Moon phases",n==="moon",new B.er1(r),A.vL,A.bv,q),new B.dB(u,!1,new B.er2(r),v,A.bv,q),new B.dB("Music",t,new B.er3(r),s,A.bv,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hH(A.bv,D.d4P[A.o.E(A.k.bm(n*12),12)],"Month",1,0,new B.er4(r),n)
v=r.z
A.d.v(s,C.a([n,B.hH(A.bv,A.k.aa(v,1)+"\xb0","Tilt",90,0,new B.er5(r),v)],p))}else{p=r.w
s.push(B.hH(A.bv,""+(A.k.bm(p*29.5)+1),"Day of month",1,0,new B.er6(r),p))}p=r.y
s.push(B.hH(A.bv,A.k.aa(p,1)+"x","Speed",4,0.2,new B.er7(r),p))
return B.jL(A.bv,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.x(s,A.m,q,A.e,A.N,0,A.p))}}
B.bqx.prototype={
a4(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.W(),b8=C.N()
b8.r=D.AK.gp(0)
b9.b0(new C.a9(0,0,0+b5,0+b6),b8)
w=new C.eE()
w.dt(4)
for(b8=b9.a,v=0;v<70;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.aj()*0.4).gp(0)
q=r.H()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new C.v(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=C.ch(p,n*2,o*2)
t=C.N()
t.b=A.ae
t.c=1
t.r=A.b_.gp(0)
b9.hV(u,t)
t=C.N()
t.sar(D.eiO.av(0,C.bU(p,34)))
b9.af(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new C.v(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aD(0,l).eG(0,p.aD(0,l).gcn())
J.by(b8.save())
b8.translate(l.a,l.b)
s=C.N()
s.r=D.bgX.gp(0)
b9.af(A.J,k,s)
J.by(b8.save())
b7=new C.aO(b7.r,A.ao,b4,b4,C.a([],x.v))
b7.F(new C.k4(C.bU(A.J,k)))
b9.qv(0,b7)
b7=i.aG(0,k).aG(0,0.35)
s=k*1.1
b6=C.N()
b6.sar(D.eiX.av(0,C.bU(A.J,s)))
b9.af(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.v(s,b6)
b7=new C.v(-s,-b6).aG(0,k).aG(0,1.7)
b5=h.aG(0,k).aG(0,1.7)
t=C.N()
t.c=2
t.r=A.c9.gp(0)
b9.bE(b7,b5,t)
t=h.aG(0,k).aG(0,1.7)
b5=C.N()
b5.r=A.c9.gp(0)
b9.af(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.h3(b4,b4,b4,b4,C.d3(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aRC,b5),A.a4,A.c6,b4,A.dP,A.c5)
f.en()
f.a4(b9,l.ad(0,new C.v(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.N()
r.b=A.ae
r.c=1
r.r=A.b_.gp(0)
b9.af(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=A.aM.j(0.6).gp(0)
a0.c=2
q=a0.H()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.N()
r.sar(new C.bT(new C.dc(-0.5,0),1.1,A.x,b4,0,C.a([D.bcD,D.ag3],x.O),D.cX_,b4).av(0,C.bU(p,k)))
b9.af(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new C.v(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.N()
r.r=D.b9T.gp(0)
b9.af(a1,a2,r)
J.by(b8.save())
b7=b7.r
r=x.v
d=new C.aO(b7,A.ao,b4,b4,C.a([],r))
d.F(new C.k4(C.bU(a1,a2)))
b9.qv(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.N()
a3.r=A.bN.gp(0)
b9.b0(new C.a9(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aD(0,p).eG(0,a1.aD(0,p).gcn())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.at5[a5]
a7=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a7.r=A.aN.j(0.45).gp(0)
a7.z=A.jv
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.v(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.N()
b6.r=D.b9O.gp(0)
b9.af(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.by(b8.save())
b6=new C.aO(b7,A.ao,b4,b4,C.a([],r))
b6.F(new C.k4(C.bU(a8,a9)))
b9.qv(0,b6)
s=s.w
b1=new C.aO(b7,A.ao,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.F(new C.b5(u,b5))
b6=b2>0
b1.aCs(new C.v(u,t+a9),b6,new C.aT(a9,a9))
if(b0<0.5)b6=b2<0
b1.aCs(new C.v(u,b5),b6,new C.aT(a9*Math.abs(1-2*b0),a9))
b6=C.N()
b6.r=A.bN.gp(0)
b9.aR(b1,b6)
b8.restore()
b8=C.N()
b8.b=A.ae
b8.c=1
b8.r=A.b_.gp(0)
b9.af(a8,a9,b8)
b3=C.h3(b4,b4,b4,b4,D.f2A,A.a4,A.c6,b4,A.dP,A.c5)
b3.en()
b3.a4(b9,a8.ad(0,new C.v(-b3.b.c/2,a9+6)))}},
au(d){return!0}}
B.aKX.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bwN.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.buM()}}
B.aLl.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bwU.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvb()}}
B.aLY.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
B.bx7.prototype={
q(){var w,v,u
for(w=this.fu$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a7(0)
w=this.ft$
w===$&&C.c()
w.q()
this.bvP()}}
var z=a.updateTypes(["~()","R(ty)","R(a4j)","aA<~>()","R(Co)","G(ty,G)","L(L,ty)","R(Ck)","R(Z9)","R(abi)","R(v5)","R(a2Y)","R(no)","R(a_G)","R(ac5)","G(G)","Uh()","UU()","U6()","V7()","Vq()","Vs()","Ug()","VM()","W0()","VN()","VJ()","W7()","Uf()","Wc()","R(mB)","VD()","VI()","aeN(Y,G)","adF(Y,G)","~(a5<@,@>)","G(Ck,Ck)","m(ed)","R(aeD)","R(a0o)","R(Cy)","R(abN)","R(adJ)","R(abw)","G(G,qM)","G(G,Co)","m(qM)","~(qM,ai<m>,G)","qM?(Co)","R(qM)","t(m,a0b)","R(PN)","~(Ax)","R(abD)","L(G?)","We()","R(FL)","R(acV)","L(G)","UV()","L(Pv)","R(aab)","Ub()","a8b()","~(B6,m,v,w,L)","~(m,ty)","VG()","Vl(Y)","Nd(Y)","UC(Y,br<L>,br<L>)","Wi()","V1()","Uc()","UT()","VE()","VR()","Wb()","VC()","~(m)","cr(aaZ)","R(aaY)","V8()","W_()","V9()","Ua()","V5()","VS()","VO()","UE()","R(Pv)","~(ba)"])
B.fxv.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.fnw.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gI(d.e.split(". "))+"."},
$S:z+37}
B.fuh.prototype={
$1(d){var w
if(!this.a.LC(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.fui.prototype={
$1(d){return d.x},
$S:z+1}
B.fxs.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.fxt.prototype={
$1(d){var w
if(!this.a.LC(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.fxu.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
B.e84.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e85.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.z(this.b,this.c))},
$S:0}
B.e86.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.md(v,A.dV,A.ih)}},
$S:8}
B.e8h.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.e8i.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.e8d.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.e8b.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dE(0,0,0,d,0,0),new B.e8c(w,this.b,e)))},
$S:1849}
B.e8c.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.e8e.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gVX().ajA(0,u[1],u[2],u[3])
u[4].bM(0,new B.e89(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dG(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.e8a(w.a,v,w.f,w.r))},
$S:0}
B.e89.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:193}
B.e8a.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bm(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e8f.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gVX().aki(t,u[1],s,u[3])
E.dG(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.e88(w.a,v,w.e,w.f))},
$S:0}
B.e88.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bm(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e8g.prototype={
$0(){E.dG(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.e87(w,this.b))},
$S:0}
B.e87.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.e8l.prototype={
$0(){var w=this.a
return w.m(new B.e8k(w))},
$S:0}
B.e8k.prototype={
$0(){return this.a.at=!0},
$S:0}
B.e8m.prototype={
$0(){var w=this.a
return w.m(new B.e8j(w))},
$S:0}
B.e8j.prototype={
$0(){return this.a.at=!1},
$S:0}
B.e8n.prototype={
$0(){var w=this.a
w.f.saX(0,this.b)
w.No()},
$S:0}
B.e8o.prototype={
$0(){return this.a.XX(this.b)},
$S:0}
B.e8p.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.No():w.aVx()},
$S:2}
B.e8q.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.No():w.aVx()},
$S:0}
B.eob.prototype={
$2(d,e){return d+e},
$S:1850}
B.eov.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.eou(w,d))},
$S:133}
B.eou.prototype={
$0(){var w=C.aJ(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.eow.prototype={
$0(){},
$S:0}
B.eox.prototype={
$0(){},
$S:0}
B.eod.prototype={
$0(){return this.a.m(new B.eoc(this.b,this.c))},
$S:0}
B.eoc.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.eo2.prototype={
$1(d){return this.a.cx===d},
$S:33}
B.eo3.prototype={
$1(d){return this.a.cx=d},
$S:27}
B.eo4.prototype={
$1(d){return this.a.cy===d},
$S:33}
B.eo5.prototype={
$1(d){return this.a.cy=d},
$S:27}
B.eo6.prototype={
$1(d){return this.a.db===d},
$S:33}
B.eo7.prototype={
$1(d){return this.a.db=d},
$S:27}
B.eo8.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:33}
B.eo9.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.L(0,d)},
$S:27}
B.eoa.prototype={
$0(){var w=this.a
return w.m(w.gaw6())},
$S:0}
B.eo0.prototype={
$1(d){return this.a.$1(!0)},
$S:82}
B.eo1.prototype={
$1(d){return this.a.$1(!1)},
$S:132}
B.eo_.prototype={
$1(d){return this.a.$1(!1)},
$S:180}
B.eoo.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new B.bgL(o,p),n)
w=this.b
v=B.bzs("WORLD",w.a,w.c)
u=B.bzs("GRAVITY",C.u(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.c9:A.b2
t=B.bzs("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.Cm[o.db].d?A.c9:A.c
q=x.p
s=C.a([v,u,t,B.bzs("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.bzs("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.ao(p,C.B(s,A.m,p,A.hE,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bDJ(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rr[w].a+".":"You landed on every world!"
v=C.a([new B.fj(A.mA,"Again",new B.eoj(o),A.c,p),new B.fj(A.oU,"Rebuild",new B.eok(o),A.aM,p)],q)
if(o.d+1<7)v.push(new B.fj(A.j1,"Next world",new B.eol(o),A.b2,p))
n.push(B.hkz("Perfect landing!",w,A.b2,v))}if(o.as==="crashed")n.push(B.hkz("Crash!",o.at,A.c9,C.a([new B.fj(A.mA,"Try again",new B.eom(o),A.b2,p),new B.fj(A.oU,"Rebuild",new B.eon(o),A.aM,p)],q)))
return new C.an(A.W,p,A.b1,A.r,n,p)},
$S:65}
B.eoj.prototype={
$0(){var w=this.a
return w.m(w.gaw6())},
$S:0}
B.eok.prototype={
$0(){var w=this.a
return w.m(new B.eog(w))},
$S:0}
B.eog.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.eol.prototype={
$0(){var w=this.a
return w.m(new B.eof(w))},
$S:0}
B.eof.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.eom.prototype={
$0(){var w=this.a
return w.m(w.gaw6())},
$S:0}
B.eon.prototype={
$0(){var w=this.a
return w.m(new B.eoe(w))},
$S:0}
B.eoe.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.eop.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.eoi(v,w))},
$S:0}
B.eoi.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.eoq.prototype={
$1(d){return this.a.y=d},
$S:9}
B.eor.prototype={
$1(d){return this.a.Q=d},
$S:9}
B.eos.prototype={
$1(d){return this.a.z=d},
$S:9}
B.eot.prototype={
$0(){var w=this.a
return w.m(new B.eoh(w))},
$S:0}
B.eoh.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dFr.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.hfV
if(q==null)q=$.hfV=B.cFv()
w=3
return C.b(C.iP(C.a([q,$.qV().bfX("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kH(0,C.cQ(J.q(s,1)))
q.m(new B.dFq(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:50}
B.dFq.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dF3.prototype={
$0(){return this.a.bVb(C.aU(J.q(this.b,"group")))},
$S:0}
B.dF4.prototype={
$1(d){return A.a.aV(A.o.fX(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:277}
B.dFs.prototype={
$0(){return B.a8a("kick",0.25)},
$S:0}
B.dF5.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dF6.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dF7.prototype={
$0(){return B.a8a("kick",0.5)},
$S:0}
B.dF8.prototype={
$0(){return E.dG(1300+this.a.R8.aw(900),"",40,0,0.2,"square")},
$S:0}
B.dFa.prototype={
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
u=w}if(u.cx!=null&&!A.d.b6(u.d.e,new B.dF9(u)))u.cx=null
u.go=0},
$S:0}
B.dF9.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.axP(d)},
$S:z+11}
B.dF0.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dF1.prototype={
$0(){var w=this.a
return w.m(w.gc4A())},
$S:0}
B.dF2.prototype={
$0(){return this.a.ahc(null)},
$S:0}
B.dFh.prototype={
$0(){var w=this.a.as
return w==null?null:w.eZ(0,C.F(["t","shot"],x.N,x.z))},
$S:0}
B.dFi.prototype={
$0(){return this.a.cAg(this.b.a)},
$S:0}
B.dFj.prototype={
$0(){return this.a.ahc(this.b)},
$S:0}
B.dFk.prototype={
$1(d){var w=this.a
return w.m(new B.dFg(w,d))},
$S:6}
B.dFg.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dFl.prototype={
$0(){var w=this.a
return w.m(new B.dFf(w,this.b))},
$S:0}
B.dFf.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dFm.prototype={
$0(){var w=this.a
return w.m(new B.dFe(w))},
$S:0}
B.dFe.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dFn.prototype={
$0(){var w=this.a
return w.m(new B.dFd(w))},
$S:0}
B.dFd.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eZ(0,C.F(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Ko},
$S:0}
B.dFo.prototype={
$0(){var w=this.a
return w.m(new B.dFc(w))},
$S:0}
B.dFc.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aYb()
else w.p2=null},
$S:0}
B.dFp.prototype={
$0(){var w=this.a
return w.m(new B.dFb(w))},
$S:0}
B.dFb.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.c0K.prototype={
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
$S:314}
B.c0L.prototype={
$1(d){var w=new C.rP([],[]).pB(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:479}
B.fhd.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)},
$S:203}
B.fhe.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)||w.h(d,1)},
$S:203}
B.fhf.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)!==w.h(d,1)},
$S:203}
B.fhm.prototype={
$1(d){return!J.q(d,0)},
$S:203}
B.fhn.prototype={
$1(d){var w=J.a4(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:203}
B.fho.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:203}
B.dHC.prototype={
$1(d){return this.a.asM(0)},
$S:8}
B.dHg.prototype={
$0(){var w=this.b
return this.a.cx=new C.M(w,C.i0O(),C.T(w).k("M<1,G>")).fP(0)},
$S:0}
B.dHj.prototype={
$1(d){return""+d},
$S:83}
B.dHD.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dHe.prototype={
$1(d){return this.a.asM(this.b)},
$S:8}
B.dHf.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.awy(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mB(0,d,a1.m4(0.15,0.3))
u=a1.mB(0,d,a1.m4(0.15,0.62))
t=a1.mB(0,"and",a1.m4(0.48,0.46))
s=a1.mB(0,a0,a1.m4(0.82,0.46))
a1=t.a
w.push(new B.no(v.a,a1,0))
w.push(new B.no(u.a,a1,1))
w.push(new B.no(a1,s.a,0))
break
case 1:v=a1.mB(0,d,a1.m4(0.12,0.25))
u=a1.mB(0,d,a1.m4(0.12,0.65))
r=a1.mB(0,"xor",a1.m4(0.46,0.25))
q=a1.mB(0,"and",a1.m4(0.46,0.65))
p=a1.awx(0,a0,a1.m4(0.82,0.25),0)
o=a1.awx(0,a0,a1.m4(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new B.no(a1,n,0))
m=u.a
w.push(new B.no(m,n,1))
l=q.a
w.push(new B.no(a1,l,0))
w.push(new B.no(m,l,1))
w.push(new B.no(n,p.a,0))
w.push(new B.no(l,o.a,0))
break
case 2:k=a1.mB(0,"clock",a1.m4(0.15,0.4))
j=a1.mB(0,"not",a1.m4(0.45,0.65))
s=a1.mB(0,a0,a1.m4(0.82,0.3))
i=a1.mB(0,"buzzer",a1.m4(0.82,0.65))
a1=k.a
w.push(new B.no(a1,s.a,0))
n=j.a
w.push(new B.no(a1,n,0))
w.push(new B.no(n,i.a,0))
break
default:h=a1.mB(0,d,a1.m4(0.12,0.25))
g=a1.mB(0,d,a1.m4(0.12,0.7))
f=a1.mB(0,"nor",a1.m4(0.5,0.25))
e=a1.mB(0,"nor",a1.m4(0.5,0.7))
s=a1.mB(0,a0,a1.m4(0.86,0.25))
a1=f.a
w.push(new B.no(g.a,a1,0))
n=e.a
w.push(new B.no(n,a1,1))
w.push(new B.no(h.a,n,0))
w.push(new B.no(a1,n,1))
w.push(new B.no(a1,s.a,0))}},
$S:0}
B.dHk.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.awy(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new B.Ck(p,"switch",new C.v(0.14*q.a,r*q.b),0))}o.mB(0,w.e,o.m4(0.86,0.5))},
$S:0}
B.dH9.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
B.dHa.prototype={
$2(d,e){return A.k.aM(d.c.b,e.c.b)},
$S:z+36}
B.dHb.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
B.dHc.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dHd.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.acx(this.c)
if(v.ax)B.BK("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gI(w)
v.CW=!1
if(v.ax)E.dG(140,"",250,0,0.3,"square")}},
$S:0}
B.dHl.prototype={
$0(){},
$S:0}
B.dHm.prototype={
$0(){return A.d.cA(this.a.e,this.b)},
$S:0}
B.dHn.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dHi.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.br(w.e,new B.dHh(v))
w.cy=null},
$S:0}
B.dHh.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dH8.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mB(0,this.b,new C.v(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
B.dHw.prototype={
$0(){var w=this.a
return w.m(new B.dHv(w))},
$S:0}
B.dHv.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dHx.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.x=u
return C.aC(A.c7,C.jA(C.b3(w,w,w,new B.baT(v,w),u),A.r,w),A.y,!1,w,w,w,w,w,w,w,w,w,new B.dHq(v),w,w,w,new B.dHr(v),new B.dHs(v),new B.dHt(v),w,w,w,w,w,w,w,w,w,w,new B.dHu(v),w,w,w,!1,A.a7)},
$S:35}
B.dHu.prototype={
$1(d){return this.a.c6k(d.b)},
$S:51}
B.dHs.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ceO(u)
if(t!=null){v.as=t
v.at=u
return}w=v.axl(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aD(0,u)}},
$S:44}
B.dHt.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.v(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dHr.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bYM(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.br(v,new B.dHo(w))
u=t.as
u.toString
v.push(new B.no(u,w.a,w.b))
C.jT()}}t.z=t.as=null},
$S:38}
B.dHo.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dHq.prototype={
$1(d){return this.a.avn(d.b)},
$S:281}
B.dHy.prototype={
$0(){return this.a.bzz(this.b.a)},
$S:0}
B.dHz.prototype={
$0(){return this.a.asM(this.b.a)},
$S:0}
B.dHA.prototype={
$0(){var w=this.a
return w.m(new B.dHp(w))},
$S:0}
B.dHp.prototype={
$0(){var w=this.a
w.awy(0)
w.ay=null},
$S:0}
B.dHB.prototype={
$0(){return this.a.cw2(this.b)},
$S:0}
B.cMh.prototype={
$0(){var w=this,v=null,u=C.h3(v,v,v,v,C.d3(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.c6,v,A.dP,A.c5)
u.en()
return u},
$S:342}
B.dNr.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dNq.prototype={
$0(){return this.a.d=null},
$S:0}
B.dNt.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c_z()},
$S:122}
B.dNs.prototype={
$0(){return C.a6(this.a,!1).lz()},
$S:0}
B.fhE.prototype={
$0(){return D.e25},
$S:z+55}
B.fhF.prototype={
$0(){return D.dBd},
$S:z+59}
B.fhG.prototype={
$0(){return D.dy5},
$S:z+62}
B.fhR.prototype={
$0(){return D.e1v},
$S:z+63}
B.fhT.prototype={
$0(){return D.dHC},
$S:z+66}
B.fhU.prototype={
$0(){return D.dB8},
$S:z+88}
B.fhV.prototype={
$0(){return D.dBb},
$S:z+17}
B.fhW.prototype={
$0(){return D.dug},
$S:z+18}
B.fhX.prototype={
$0(){return D.dDH},
$S:z+19}
B.fhY.prototype={
$0(){return D.dFk},
$S:z+20}
B.fhZ.prototype={
$0(){return D.dFm},
$S:z+21}
B.fhH.prototype={
$0(){return D.dAk},
$S:z+22}
B.fhI.prototype={
$0(){return D.dKl},
$S:z+23}
B.fhJ.prototype={
$0(){return D.e1c},
$S:z+24}
B.fhK.prototype={
$0(){return D.e_e},
$S:z+25}
B.fhL.prototype={
$0(){return D.dJ0},
$S:z+26}
B.fhM.prototype={
$0(){return D.e1k},
$S:z+27}
B.fhN.prototype={
$0(){return D.dAj},
$S:z+28}
B.fhO.prototype={
$0(){return D.e1u},
$S:z+29}
B.fhP.prototype={
$0(){return D.dAl},
$S:z+16}
B.fhQ.prototype={
$0(){return D.dFC},
$S:z+31}
B.fhS.prototype={
$0(){return D.dJ_},
$S:z+32}
B.eYT.prototype={
$2(d,e){return new B.aeN($.bDU()[e],new B.eYS(e,this.a),null)},
$S:z+33}
B.eYS.prototype={
$0(){var w=this.a,v=F.aEg.h(0,$.bDU()[w].a)
$.arF=v==null?"music":v
C.a6(this.b,!1).cm(C.e9(new B.eYQ(w),!1,null,x.H))},
$S:0}
B.eYQ.prototype={
$1(d){return $.bDU()[this.a].e.$0()},
$S:42}
B.eYU.prototype={
$2(d,e){return new B.adF(D.ax0[e],new B.eYR(this.a,e),null)},
$S:z+34}
B.eYR.prototype={
$0(){return this.a.d.$1(D.ax0[this.b])},
$S:0}
B.eYz.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eYy.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eYx.prototype={
$1(d){var w=this
return new C.e2(new B.eYw(w.a,w.b,w.c,w.d),null)},
$S:21}
B.eYw.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.fnK,A.au,D.fuh,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aT(12,12)
m=new C.aT(12,12)
m=C.a([new C.bB(1,A.bh,C.aM(d,A.U,!1,d,!0,A.r,d,C.aN(),r[p],d,d,d,d,d,2,new C.e3(d,d,d,d,d,d,d,d,d,d,"Title",d,G.DB,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(n,n,n,n),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iP,!0,A.a4,d,A.an,d,d,d,d),d),A.ab,new C.bB(2,A.bh,C.aM(d,A.U,!1,d,!0,A.r,d,C.aN(),q[p],d,d,d,d,d,2,new C.e3(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.DB,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(m,m,m,m),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iP,!0,A.a4,d,A.an,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.dkS[l]
j=new C.aT(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}h=A.d.gI(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}g=A.d.gI(i)}else g=A.bE
f=new C.az(g,u[p].A(0,k)?1.8:1,A.q,-1)
n.push(C.aC(d,C.p(d,C.X(k,u[p].A(0,k)?A.c:A.aS,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bO(f,f,f,f),new C.bp(j,j,j,j),d,d,A.n),d,d,d,A.fC,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eYu(a3,p,u,k),d,d,d,d,d,d,!1,A.a7))}A.d.v(v,C.a([new C.y("SLAB "+o,d,D.fdC,d,d,d,d,d,d,d,d,d),A.am,new C.cl(A.aP,A.e,A.j,A.m,d,A.p,d,0,m,d),A.O,new C.a7(d,44,C.cw(n,d,d,d,d,A.aP,!1),d),A.aB],w))}v.push(C.bG(A.zV,new B.eYv(t,r,q,u,a2),d))
return new C.D(new C.Q(0,0,0,a1.f.d),C.bm(!0,new C.cT(new C.aY(0,1/0,0,a0.a.b*0.86),C.cw(v,d,A4.xP,d,d,A.ah,!0),d),!0,!1,A.af,!0,!0),d)},
$S:110}
B.eYu.prototype={
$0(){var w=this
return w.a.$1(new B.eYt(w.b,w.c,w.d))},
$S:0}
B.eYt.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eYv.prototype={
$0(){var w=this,v=w.a
v.m(new B.eYs(v,w.b,w.c,w.d))
C.a6(w.e,!1).O(null)},
$S:0}
B.eYs.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this
for(w=m.d,v=m.c,u=m.a,t=m.b,s=x.N,r=x.Z,q=0;q<3;++q){p=u.y
if(p===$){p=C.C(u.a.c.f,s)
u.y=p
o=p}else o=p
n=A.a.i(t[q].a.a)
if(n.length===0)n=o[q]
p[q]=n
p=u.z
if(p===$){p=C.C(u.a.c.r,s)
u.z=p}p[q]=A.a.i(v[q].a.a)
p=u.x
if(p===$){p=C.C(u.a.c.e,r)
u.x=p}p[q]=w[q]}},
$S:0}
B.eYH.prototype={
$0(){var w=this.a
return w.m(new B.eYG(w))},
$S:0}
B.eYG.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eYI.prototype={
$0(){return B.qU(this.b,this.a.f,"scene")},
$S:0}
B.eYJ.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gI(u),A.d.gal(u),0.4)
u.toString
w=this.a.gZg().x
w===$&&C.c()
return C.c_(v,new C.o(v,v,v,v,v,new C.bT(D.aXD,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.c_],x.O),v,v),A.n),A.bf)},
$S:316}
B.eYK.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.eQ(A.A,C.c6(new C.ha(C.a([u.gtZ(),u.gZg()],x.dS)),new B.eYF(u,this.b,v),w),A.f,A.dZ),w,w,w)},
$S:242}
B.eYF.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gtZ().x
r===$&&C.c()
w=r<0.9?1:1-B.bqR(r,0.9,0.98)
v=s.gZg().x
v===$&&C.c()
u=A.dC.aA(0,v)
switch(s.gawz().a){case 0:s=s.byL(t.b,r,u,t.c)
break
case 1:s=s.bPj(t.b,r,u,t.c)
break
case 2:s=s.cAN(t.b,r,u,t.c)
break
case 3:s=s.bBG(t.b,r,u,t.c)
break
case 4:s=s.bF_(t.b,r,u,t.c)
break
case 5:s=s.bE9(t.b,r,u,t.c)
break
default:s=null}return C.de(s,w)},
$S:233}
B.eYL.prototype={
$2(d,e){var w=C.av6(this.b),v=this.c.d,u=C.aq(A.d.gI(v),A.d.gal(v),0.4)
u.toString
v=C.aq(A.d.gI(v),A.d.gal(v),0.4)
v.toString
v=w.cJk(u,A.bE,v,3.5)
u=this.a
w=u.gtZ().x
w===$&&C.c()
return C.a9Y(C.l0(null,null,null,1,0,new B.eYE(u),A.k.D(w,0,1)),v)},
$S:1854}
B.eYE.prototype={
$1(d){var w=this.a
w.gtZ().sp(0,d)
if(w.as)w.m(new B.eYA(w))},
$S:6}
B.eYA.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eYM.prototype={
$0(){var w=this.a
w.gtZ().sp(0,0)
w.afW()},
$S:0}
B.eYN.prototype={
$1(d){var w=this.a
w.m(new B.eYD(w,d))
if(w.as)w.afW()},
$S:6}
B.eYD.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eYO.prototype={
$0(){var w=this.a
w.m(new B.eYC(w,this.b))
w.gtZ().sp(0,0)
if(w.as)w.afW()},
$S:0}
B.eYC.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eYP.prototype={
$0(){var w=this.a
return w.m(new B.eYB(w,this.b))},
$S:0}
B.eYB.prototype={
$0(){var w=C.C(this.b,x.G)
return this.a.w=w},
$S:0}
B.eYq.prototype={
$2(d,e){return A.k.aM(d.a,e.a)},
$S:1855}
B.eYr.prototype={
$1(d){return d.b},
$S:1856}
B.dhk.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.dhl.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.dhh.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.dhi.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dhj.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dhm.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dhn.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dho.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dhp.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.dhq.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.dhr.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.dhs.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.dht.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.dhu.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.enw.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.enl.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.enn.prototype={
$2(d,e){return d+e.d*7+A.o.E(A.a.gX(e.b),97)},
$S:z+44}
B.eno.prototype={
$2(d,e){return d+A.o.E(A.a.gX(e.a),31)+A.o.E(A.a.gX(e.b),17)},
$S:z+45}
B.enr.prototype={
$1(d){var w=D.mH.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.E(d.d,u)]+")":t},
$S:z+46}
B.ens.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.T(q),o=x.dg,n=C.C(new C.ea(new C.cO(new C.a_(q,new B.ent(d),p.k("a_<1>")),new B.enu(r),p.k("cO<1,qM?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aH(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.K)(n),++v){u=n[v]
if(w.length>=6)return
t=C.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.ent.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.enu.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.enp.prototype={
$1(d){return D.mH.h(0,d.b).c===D.wU},
$S:z+49}
B.enq.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.enW.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.v4(0,u)
w.a62(A.o.an(v,1000))},
$S:8}
B.env.prototype={
$0(){},
$S:0}
B.enh.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$$0)
case 6:e.aq("String","ngmy_core_reaction_lab_v1",s.a.d.ah())
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
B.eny.prototype={
$1(d){var w=null,v=this.a.b
return C.bm(!0,C.x(C.a([A.O,C.dN(!1,w,w,w,!0,w,w,w,!0,w,C.X(D.mH.h(0,v).b,D.mH.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fFu,w,C.d(D.mH.h(0,v).a,w,w,w,w,w,w,A.hu,w,w,w),w,w,w),C.dN(!1,w,w,w,!0,w,w,w,!0,w,V.anS,w,w,w,w,new B.enx(d),!1,w,w,w,w,w,w,w,D.fx3,w,w,w)],x.p),A.m,w,A.e,A.N,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
B.enx.prototype={
$0(){C.a6(this.a,!1).O(!0)
return null},
$S:0}
B.enA.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.ebR],x.p)
for(w=0;w<6;++w){v=D.axl[w]
s.push(C.dN(!1,u,u,u,!0,u,u,u,!0,u,D.bSV,u,u,u,u,new B.enz(d,v),!1,u,u,u,u,u,new C.y(v.b,u,A.kH,u,u,u,u,u,u,u,u,u),u,new C.y(v.a,u,A.hu,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bm(!0,new C.cT(new C.aY(0,1/0,0,t.a.b*0.7),C.cw(s,u,D.bxM,u,u,A.ah,!0),u),!0,!1,A.af,!0,!0)},
$S:26}
B.enz.prototype={
$0(){C.a6(this.a,!1).O(this.b)
return null},
$S:0}
B.enk.prototype={
$1(d){var w=null
return C.em(C.a([C.bK(!1,A.df,w,w,!0,w,w,new B.eni(d),w,w),C.bK(!1,A.DG,w,w,!0,w,w,new B.enj(d),w,w)],x.p),w,w,F.n8,D.fus,w,w,w,w,D.fxl,w)},
$S:20}
B.eni.prototype={
$0(){C.a6(this.a,!1).O(!1)
return null},
$S:0}
B.enj.prototype={
$0(){C.a6(this.a,!1).O(!0)
return null},
$S:0}
B.enU.prototype={
$0(){var w=this.a
return w.m(new B.enT(w))},
$S:0}
B.enT.prototype={
$0(){return this.a.r=!1},
$S:0}
B.enV.prototype={
$2(d,e){var w,v,u,t=null,s=new C.ar(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.mi(new B.enK(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b6k:t
v=C.a([C.b3(u,t,t,new B.bgJ(w,v,new B.enL(r),new B.enM(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.e_(C.c6(w,new B.enN(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bGG())
return C.aC(A.c7,C.jA(new C.an(A.W,t,A.b1,A.r,v,t),A.r,t),A.y,!1,t,t,t,t,t,t,t,t,t,new B.enO(r),t,r.gcg6(),t,new B.enP(r),new B.enQ(r),new B.enR(r),t,t,t,t,t,t,t,t,t,t,new B.enS(r),t,t,t,!1,A.a7)},
$S:35}
B.enK.prototype={
$0(){return this.a.abD(this.b)},
$S:0}
B.enS.prototype={
$1(d){return this.a.cyx(d.b)},
$S:51}
B.enQ.prototype={
$1(d){return this.a.cg7(d.b)},
$S:44}
B.enR.prototype={
$1(d){return this.a.cg8(d.b)},
$S:18}
B.enP.prototype={
$1(d){return this.a.b0y()},
$S:38}
B.enO.prototype={
$1(d){return this.a.acj(d.b)},
$S:281}
B.enL.prototype={
$0(){return this.a.z},
$S:647}
B.enM.prototype={
$0(){return this.a.Q},
$S:721}
B.enN.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bKY()
if(p.length===0)return A.bI
w=A.w.j(0.55)
v=C.n(14)
u=C.I(A.bE,A.q,1)
t=C.a([D.frW,A.cV],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.K)(p),++r)t.push(new C.y(p[r],q,D.fcl,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.x(t,A.F,q,A.e,A.N,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h8,q,q,q)},
$S:62}
B.enm.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.n(12),t=C.I(e.j(0.6),A.q,1),s=x.p
return new C.D(A.e6,C.B(C.a([C.p(w,C.X(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.be,C.E(C.x(C.a([C.d(f,w,w,w,w,w,w,A6.TU,w,w,w),A.bC,C.d(g,w,w,w,w,w,w,F.U_,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1858}
B.enG.prototype={
$0(){var w=this.a.c
w.toString
return C.a6(w,!1).lz()},
$S:0}
B.enH.prototype={
$0(){var w=this.a
return w.m(new B.enF(w))},
$S:0}
B.enF.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.enI.prototype={
$0(){var w=this.a
return w.m(new B.enE(w))},
$S:0}
B.enE.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.enJ.prototype={
$0(){var w=this.a
return w.m(new B.enD(w))},
$S:0}
B.enD.prototype={
$0(){return this.a.r=!0},
$S:0}
B.enC.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.mH.gdL(D.mH),w=w.gae(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.K)(p),++r)u.push(s.ctn(p[r]))
return new C.D(I.ahn,C.x(C.a([new C.D(R.aj2,w,q),C.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.enB.prototype={
$0(){return this.a.c6p(this.b)},
$S:0}
B.dhg.prototype={
$0(){var w=this,v=null,u=C.h3(v,v,v,v,C.d3(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.c6,v,A.dP,A.c5)
u.en()
return u},
$S:342}
B.ezB.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.an(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.v(s.a+q*n,s.b+r*n)
t.b=new C.v(q*v,r*v)}A.d.br(o,new B.ezz(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.ezA())},
$S:8}
B.ezz.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.ezA.prototype={
$0(){},
$S:0}
B.ezc.prototype={
$0(){},
$S:0}
B.ezb.prototype={
$0(){},
$S:0}
B.ezl.prototype={
$0(){return B.qU(this.b,this.a.d,"spark-painter")},
$S:0}
B.ezn.prototype={
$1(d){return this.a.aYS(0,d.b)},
$S:44}
B.ezr.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aD(0,u).gcn()>2.5}else w=!1
if(w)t.a.push(u)
v.aRL(u)
v.c9r(u)
return null},
$S:18}
B.ezm.prototype={
$1(d){return this.a.aYR()},
$S:38}
B.ezs.prototype={
$1(d){return this.a.aYS(0,d.b)},
$S:23}
B.ezt.prototype={
$1(d){return this.a.aYR()},
$S:51}
B.ezu.prototype={
$0(){var w=this.a
return w.m(new B.ezk(w,this.b))},
$S:0}
B.ezk.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ezv.prototype={
$0(){var w=this.a
return w.m(new B.ezj(w))},
$S:0}
B.ezj.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.ezw.prototype={
$0(){var w=this.a
return w.m(new B.ezi(w,this.b))},
$S:0}
B.ezi.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ezx.prototype={
$1(d){var w=this.a
return w.m(new B.ezh(w,d))},
$S:6}
B.ezh.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.ezy.prototype={
$0(){var w=this.a
return w.m(new B.ezg(w))},
$S:0}
B.ezg.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.ezo.prototype={
$0(){var w=this.a
return w.m(new B.ezf(w))},
$S:0}
B.ezf.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.ezp.prototype={
$0(){var w=this.a
return w.m(new B.eze(w))},
$S:0}
B.eze.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.ezq.prototype={
$0(){var w=this.a
return w.m(new B.ezd(w,this.b))},
$S:0}
B.ezd.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eGa.prototype={
$0(){return B.qU(this.b,this.a.d,"title")},
$S:0}
B.eGb.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIN().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.c_J(v[t],t,s,q,u))
return new C.D(A.fD,C.bV(A.fT,w,A.t2,0,0),null)},
$S:685}
B.eGc.prototype={
$1(d){return this.a.m(new B.eG9())},
$S:2}
B.eG9.prototype={
$0(){},
$S:0}
B.eGd.prototype={
$0(){var w=this.a
w.m(new B.eG8(w,this.b))
w=w.gIN()
w.iG(0,0)
w.cL(0)},
$S:0}
B.eG8.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eGe.prototype={
$0(){var w=this.a
return w.m(new B.eG7(w,this.b))},
$S:0}
B.eG7.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eGf.prototype={
$0(){var w=this.a
return w.m(new B.eG6(w))},
$S:0}
B.eG6.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eGg.prototype={
$0(){var w=this.a
return w.m(new B.eG5(w,this.b))},
$S:0}
B.eG5.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eGh.prototype={
$0(){var w=this.a.gIN()
w.iG(0,0)
w.cL(0)},
$S:0}
B.eGi.prototype={
$1(d){var w=this.a
return w.m(new B.eG4(w,d))},
$S:6}
B.eG4.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ek1.prototype={
$1(d){return d.a.aD(0,this.a).gcn()<16},
$S:z+13}
B.ek2.prototype={
$1(d){var w=this.b
return d.a.aD(0,w).gcn()<16||d.a.aD(0,w).gcn()>this.a.r.gamh()*2.2},
$S:z+13}
B.ejQ.prototype={
$0(){return B.qU(this.b,this.a.d,"orbits")},
$S:0}
B.ejR.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.ar(e.b,e.d)
q.r=p
w=q.gadz()
v=q.w
u=q.as
t=q.at
s=u==null?A.a3c:q.cjJ(u,q.gaW3())
return new C.ex(C.aC(A.c7,C.b3(r,r,r,new B.bl5(q.e,w,v,u,t,s,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.ejN(q),new B.ejO(q),new B.ejP(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a7),q.d)},
$S:179}
B.ejO.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:44}
B.ejP.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.ejN.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aD(0,w).gcn()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.a_G(u,v.gaW3(),v.Q,v.b27(),C.a([],x.g)))
C.jT()
if(v.ax)E.dG(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:38}
B.ejS.prototype={
$1(d){var w=this.a
return w.m(new B.ejM(w,d))},
$S:6}
B.ejM.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ejU.prototype={
$1(d){var w=this.a
return w.m(new B.ejL(w,d))},
$S:6}
B.ejL.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ejV.prototype={
$1(d){var w=this.a
return w.m(new B.ejK(w,d))},
$S:6}
B.ejK.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ejW.prototype={
$0(){var w=this.a
return w.m(new B.ejJ(w))},
$S:0}
B.ejJ.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.ejX.prototype={
$0(){var w=this.a
return w.m(new B.ejI(w))},
$S:0}
B.ejI.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.ejY.prototype={
$0(){var w=this.a
return w.m(new B.ejH(w))},
$S:0}
B.ejH.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.ejZ.prototype={
$0(){var w=this.a
return w.m(w.gcvG())},
$S:0}
B.ek_.prototype={
$0(){var w=this.a
return w.m(w.gbGU())},
$S:0}
B.ek0.prototype={
$0(){var w=this.a
return w.m(new B.ejG(w))},
$S:0}
B.ejG.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.aj()
s=w.r
w.ar2(50+t*(Math.min(s.a,s.b)/2-70),v.aj()*3.141592653589793*2,0.7+v.aj()*0.5,v.hi())}},
$S:0}
B.ejT.prototype={
$0(){var w=this.a
return w.m(A.d.grG(w.e))},
$S:0}
B.eFC.prototype={
$1(d){return this.a.fW$-d.b>6000},
$S:723}
B.eFD.prototype={
$1(d){var w=this.a.e
return new C.a_(w,new B.eFB(d),C.T(w).k("a_<1>")).gM(0)>=3},
$S:723}
B.eFB.prototype={
$1(d){return d.a.aD(0,this.a.a).gcn()<14},
$S:z+53}
B.eFr.prototype={
$0(){return B.qU(this.b,this.a.d,"swarm")},
$S:0}
B.eFs.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.ex(C.aC(A.c7,C.b3(w,w,w,new B.bsD(v.e,v.f,v.ax,v.at,v.ay,v.fW$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eFo(v),new B.eFp(v),new B.eFq(v),w,w,w,w,w,w,w,w,new B.eFg(v),new B.eFh(v),new B.eFi(v),w,w,w,!1,A.a7),v.d)},
$S:179}
B.eFp.prototype={
$1(d){return this.a.ay=d.b},
$S:44}
B.eFq.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.eFo.prototype={
$1(d){return this.a.ay=null},
$S:38}
B.eFh.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.z(v,w.fW$))
if(w.ch)E.dG(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.li("flute",7,500,0.3)},
$S:23}
B.eFi.prototype={
$1(d){return this.a.ay=null},
$S:51}
B.eFg.prototype={
$0(){return this.a.ay=null},
$S:0}
B.eFt.prototype={
$0(){var w=this.a
return w.m(new B.eFn(w,this.b))},
$S:0}
B.eFn.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.eFu.prototype={
$0(){var w=this.a
return w.m(new B.eFm(w,this.b))},
$S:0}
B.eFm.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a8(w.e)},
$S:0}
B.eFv.prototype={
$0(){var w=this.a
return w.m(new B.eFl(w))},
$S:0}
B.eFl.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eFw.prototype={
$1(d){var w=this.a
return w.m(new B.eFk(w,d))},
$S:6}
B.eFk.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eFx.prototype={
$1(d){var w=this.a
return w.m(new B.eFj(w,d))},
$S:6}
B.eFj.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eFy.prototype={
$1(d){var w=this.a
return w.m(new B.eFf(w,d))},
$S:6}
B.eFf.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eFz.prototype={
$1(d){var w=this.a
return w.m(new B.eFe(w,d))},
$S:6}
B.eFe.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eFA.prototype={
$1(d){var w=this.a
return w.m(new B.eFd(w,d))},
$S:6}
B.eFd.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dGL.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dGK(w,d))},
$S:133}
B.dGK.prototype={
$0(){var w=this.a,v=this.b,u=J.a4(v),t=C.aJ(u.h(v,"unlocked"))
t=t==null?null:A.k.N(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aJ(u.h(v,"level"))
t=t==null?null:A.k.N(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.U(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jz(v==null?A.rw:v)
v=v.gae(v)
while(v.C()){u=v.gR(v)
t.n(0,C.u(u.a),A.k.N(C.dT(u.b)))}w.x=t
w.Q=!0
A.d.a8(w.d)},
$S:0}
B.dGM.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dGN.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Zh(w)>0},
$S:z+14}
B.dGB.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.azI()},
$S:0}
B.dGE.prototype={
$1(d){var w=null,v=C.n(22),u=this.a
return C.eL(w,F.kR,new C.D(A.bB,new C.a7(340,480,C.x(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.hH,w,w,w),A.R,C.E(C.im(!0,w,w,A.y,T.aOY,new B.dGD(u,d),100,w,w,A.ah,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.d1,w,new C.b7(v,A.Y),w)},
$S:48}
B.dGD.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dGC(this.b,r):s
v=C.n(12)
if(p)q=r===q.r?A.bY:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.b_:A.dm,A.q,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.jj
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aG("\u2605",n)+A.a.aG("\u2606",3-n),s,s,s,s,s,s,D.fg3,s,s,s))
return C.aC(s,C.p(s,C.x(o,A.m,s,A.b9,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.a7)},
$S:78}
B.dGC.prototype={
$0(){C.a6(this.a,!1).O(this.b)
return null},
$S:0}
B.dGI.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gacA()
o=C.b3(q,q,q,new B.baz(p.d,w,v,p.gc6w(),q),o)
v=p.bYp("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gI9()
t=p.as>=p.gI9()?A.b2:A.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.B(C.a([v,p.auA("GOAL",""+w+" / "+u,t),p.auA("STARS",A.a.aG("\u2605",s)+A.a.aG("\u2606",3-s),A.aM)],r),A.m,q,A.hE,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lH)
if(p.Q&&!p.y)s.push(D.aXl)
if(p.z){o=C.n(24)
w=this.c
v=C.I((w?A.b2:A.c9).j(0.6),A.q,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.b2:A.c9,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.am,C.d("You blasted "+p.as+" dots. The goal was "+p.gI9()+".",q,q,q,q,q,q,A.hG,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aG("\u2605",t==null?1:t),q,q,q,q,q,q,D.f6w,q,q,q))}u.push(A.aB)
t=C.a([new B.fj(A.mA,"Try again",new B.dGF(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fj(A.j1,"Next level",new B.dGG(p),A.b2,q))
u.push(C.B(t,A.m,q,A.e,A.N,0,q,q))
s.push(C.av(C.p(q,C.x(u,A.m,q,A.e,A.N,0,A.p),A.f,q,q,new C.o(D.Wm,q,v,o,q,q,A.n),q,q,q,q,A.a9,q,q,q),q,q,q))}return C.aC(A.c7,new C.an(A.W,q,A.b1,A.r,s,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dGH(p),q,q,q,q,!1,A.a7)},
$S:35}
B.dGH.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fW$
E.dG(180,"",200,1,0.4,"sine")
C.jl()},
$S:23}
B.dGF.prototype={
$0(){var w=this.a
return w.m(w.gb4N())},
$S:0}
B.dGG.prototype={
$0(){var w=this.a
return w.aYT(w.r+1)},
$S:0}
B.dGJ.prototype={
$0(){var w=this.a
return w.m(w.gb4N())},
$S:0}
B.cLP.prototype={
$3(d,e,f){var w,v
if(e<=0)return
w=this.a
$.W()
v=C.N()
v.r=f.j(0.18).gp(0)
w.af(d,e,v)
v=C.N()
v.b=A.ae
v.c=3
v.r=f.j(0.9).gp(0)
w.af(d,e,v)
v=C.N()
v.r=f.j(0.25).gp(0)
v.z=A.lv
w.af(d,e*0.5,v)},
$S:724}
B.efv.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcOY()?this.a.crM(w,v,d.b):w.aD(0,v).gcn())<24},
$S:z+56}
B.efU.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.efJ.prototype={
$0(){var w=this.a
return w.m(new B.efA(w))},
$S:0}
B.efA.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.efK.prototype={
$0(){return B.qU(this.b,this.a.d,"marble-music")},
$S:0}
B.efL.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.ex(C.aC(A.c7,C.b3(w,w,w,new B.bhD(v.e,v.f,v.at,v.ax,v.fW$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.efG(v),new B.efH(v),new B.efI(v),w,w,w,w,w,w,w,w,w,w,new B.efz(v),w,w,w,!1,A.a7),v.d)},
$S:179}
B.efz.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.a_1(w)
u.e.push(new B.FL(w,w,v,u.aPk(v)))
if(u.ay)B.li(u.z,v+12,700,0.5)}if(u.x==="erase")u.aS0(d.b)},
$S:51}
B.efH.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:44}
B.efI.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aS0(d.b)},
$S:18}
B.efG.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aD(0,w).gcn()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.a_1(t.ad(0,w).eG(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.FL(w,t,v,u.aPk(v)))
if(u.ay)B.li(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:38}
B.efM.prototype={
$0(){var w=this.a
return w.m(new B.efF(w,this.b))},
$S:0}
B.efF.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.efN.prototype={
$0(){var w=this.a
return w.m(new B.efE(w,this.b))},
$S:0}
B.efE.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.efO.prototype={
$0(){var w=this.a
return w.m(new B.efD(w,this.b))},
$S:0}
B.efD.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.efP.prototype={
$1(d){var w=this.a
return w.m(new B.efC(w,d))},
$S:6}
B.efC.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.efQ.prototype={
$0(){var w=this.a
return w.m(new B.efB(w))},
$S:0}
B.efB.prototype={
$0(){return this.a.ayd("stairs")},
$S:0}
B.efR.prototype={
$0(){var w=this.a
return w.m(new B.efy(w))},
$S:0}
B.efy.prototype={
$0(){return this.a.ayd("pinball")},
$S:0}
B.efS.prototype={
$0(){var w=this.a
return w.m(new B.efx(w))},
$S:0}
B.efx.prototype={
$0(){return this.a.ayd("random")},
$S:0}
B.efT.prototype={
$0(){var w=this.a
return w.m(new B.efw(w))},
$S:0}
B.efw.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.ejp.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.ejq.prototype={
$0(){var w=this.b,v=new B.adq(this.a.a,this.c)
v.c=w.fW$
return w.e.push(v)},
$S:0}
B.ejx.prototype={
$0(){var w=this.a
return w.m(new B.ejw(w))},
$S:0}
B.ejw.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.ejy.prototype={
$0(){return B.qU(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.ejz.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.ar(e.b,e.d)
if(!u.f){u.f=!0
u.aQL()}w=u.w
return new C.ex(C.aC(A.c7,C.b3(v,v,v,new B.bl6(u.e,u.gaYV(),6,u.gclP(),u.gcse(),u.fW$,v),w),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.ejv(u),v,v,v,!1,A.a7),u.d)},
$S:179}
B.ejv.prototype={
$1(d){return this.a.c6y(d.b)},
$S:51}
B.ejA.prototype={
$1(d){var w=this.a
return w.m(new B.eju(w,d))},
$S:6}
B.eju.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ejB.prototype={
$0(){var w=this.a
return w.m(new B.ejt(w,this.b))},
$S:0}
B.ejt.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.ejC.prototype={
$0(){var w=this.a
return w.m(new B.ejs(w,this.b))},
$S:0}
B.ejs.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.ejD.prototype={
$0(){var w=this.a
return w.m(w.gbKU())},
$S:0}
B.ejE.prototype={
$0(){var w=this.a
return w.m(new B.ejr(w))},
$S:0}
B.ejr.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a8(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.adq(v.aw(6),v.aj()))},
$S:0}
B.ejF.prototype={
$0(){var w=this.a
return w.m(A.d.grG(w.e))},
$S:0}
B.fxM.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.E(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:140}
B.eiU.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.eiT(w,d))},
$S:133}
B.eiT.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cv:v)
while(v.C())w.push(A.k.N(C.dT(v.gR(v))))
return this.a.x.v(0,w)},
$S:0}
B.eiG.prototype={
$2(d,e){var w=this.b
if(A.o.an(d,100)===w||A.o.E(d,100)===w)this.a.a+=e},
$S:140}
B.eiA.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b9s(w.b,new C.v(w.c*(0.2+0.6*v.aj()),w.e*(0.2+0.6*v.aj()))))},
$S:0}
B.eiB.prototype={
$0(){var w=this.a
A.d.a8(w.e)
w.f.a8(0)
w.r=null},
$S:0}
B.eiF.prototype={
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
p=D.we.h(0,v[u].a).a
o=w.aj7(u)
v=D.we.h(0,v[t].a).a
n=w.aj7(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.w2("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaZ0()&&w.x.L(0,w.d)){B.w2("zap",12,300,0.5)
m=w.x
m=C.C(m,C.a3(m).k("co.E"))
B.w_("molecule_maker",C.F(["done",m],x.N,x.z))}}}},
$S:0}
B.eiE.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a3(t).k("cu<1>"),r=this.b,q=s.k("a_<J.E>"),p=C.C(new C.a_(new C.cu(t,s),new B.eiC(r),q),q.k("J.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.K)(p),++w)t.W(0,p[w])
s=x.S
v=C.U(s,s)
t.bM(0,new B.eiD(r,v))
t.a8(0)
t.v(0,v)
A.d.cA(u.e,r)
u.r=null},
$S:0}
B.eiC.prototype={
$1(d){var w=this.a
return A.o.an(d,100)===w||A.o.E(d,100)===w},
$S:33}
B.eiD.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.E(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:140}
B.eiO.prototype={
$1(d){return""+d.b+" "+D.we.h(0,d.a).c.toLowerCase()},
$S:418}
B.eiP.prototype={
$0(){var w=this.a
return w.m(new B.eiN(w))},
$S:0}
B.eiN.prototype={
$0(){var w=this.a;++w.d
w.awE(0)},
$S:0}
B.eiQ.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.ar(e.b,e.d)
return C.aC(A.c7,C.b3(w,w,w,new B.bik(v.e,v.f,v.r,v.gcCW(),w),A.f5),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eiJ(v),new B.eiK(v),new B.eiL(v,e),w,w,w,w,w,w,w,w,w,w,new B.eiM(v),w,w,w,!1,A.a7)},
$S:35}
B.eiM.prototype={
$1(d){return this.a.c6V(d.b)},
$S:51}
B.eiK.prototype={
$1(d){var w=this.a
return w.w=w.aZ1(d.b)},
$S:44}
B.eiL.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.eiH(w,v,d,this.b))},
$S:18}
B.eiH.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.v(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.eiJ.prototype={
$1(d){return this.a.w=null},
$S:38}
B.eiR.prototype={
$0(){var w=this.a
return w.m(new B.eiI(w,this.b))},
$S:0}
B.eiI.prototype={
$0(){var w=this.a
w.d=this.b
w.awE(0)},
$S:0}
B.eiS.prototype={
$0(){return this.a.c6P(0,this.b.a)},
$S:0}
B.dpq.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.an(d,100)].b,i=k[A.o.E(d,100)].b,h=i.aD(0,j),g=new C.v(-h.b,h.a).eG(0,Math.max(h.gcn(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.W()
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.ad.gp(0)
m.c=4
m.d=A.bS
l=m.H()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:140}
B.dPv.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dPu(w,d))},
$S:133}
B.dPu.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dPk.prototype={
$0(){var w,v,u=J.e4(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.avM[w.aw(4)]
return A.d.h2(u)},
$S:22}
B.dPj.prototype={
$1(d){return B.h0R(d)==="*"},
$S:3}
B.dPl.prototype={
$1(d){return d!==this.a},
$S:3}
B.dPi.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
B.w_("dna_lab",C.F(["best",r],x.N,x.z))}r=s.d
B.w2("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga94()[r]+" codes for "+C.u(D.CB.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.b14()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.K)(w),++u)r.push(D.CB.h(0,w[u]))
r="Protein built: "+A.d.aH(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.w2("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dPt.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dm:e,u=C.n(8),t=f?C.I(A.b_,A.q,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.b_:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.mt,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1862}
B.dPo.prototype={
$1(d){var w=D.doI.h(0,d)
return w==null?A.c:w},
$S:725}
B.dPp.prototype={
$0(){var w=this.a
return w.m(new B.dPn(w,this.b))},
$S:0}
B.dPn.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.avY()},
$S:0}
B.dPq.prototype={
$0(){var w=this.a
return w.m(new B.dPm(w))},
$S:0}
B.dPm.prototype={
$0(){var w=this.a;++w.e
w.avY()},
$S:0}
B.dPr.prototype={
$0(){return this.a.aZ_(this.b)},
$S:0}
B.dPs.prototype={
$0(){return this.a.aZ_(this.b)},
$S:0}
B.dSk.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dSj(w,d))},
$S:133}
B.dSj.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dS7.prototype={
$0(){},
$S:0}
B.dS6.prototype={
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
B.dS8.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a8(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dSc.prototype={
$1(d){var w=this.a
return w.m(new B.dSb(w,d))},
$S:6}
B.dSb.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dSd.prototype={
$1(d){var w=this.a
return w.m(new B.dSa(w,d))},
$S:6}
B.dSa.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dSe.prototype={
$1(d){var w=this.a
return w.m(new B.dS9(w,d))},
$S:6}
B.dS9.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dSf.prototype={
$0(){return this.a.aag("drought")},
$S:0}
B.dSg.prototype={
$0(){return this.a.aag("disease")},
$S:0}
B.dSh.prototype={
$0(){return this.a.aag("foxes")},
$S:0}
B.dSi.prototype={
$0(){return this.a.aag("rabbits")},
$S:0}
B.d4x.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.eE()
k.dt(A.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.aj()
p=k.aj()
o=(r&1)===0?1:-1
o=A.k.E(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.aj()
p=Math.sin(s+r*2)
n=new C.kk(new C.es(e,l,l,A.cO,l,l,l,l,l,l,new C.H(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a4,A.c6,new C.jv(1),l,l,l,l,A.c5,l)
n.en()
n.a4(w,new C.v(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1864}
B.d4z.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this.a.c
if(l.length<2)return
w=$.W()
v=C.a([],x.v)
u=new C.aO(w.r,A.ao,null,null,v)
for(w=this.b,t=w.a,s=w.c-t,r=w.d,w=r-w.b,q=0;q<l.length;++q){p=t+s*q/159
o=r-w*A.k.D(l[q][d]/e,0,1)
if(q===0){n=new C.b5(p,o)
v.push(n)
m=u.f
if(m!=null)n.bC(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}else{n=new C.ap(p,o)
v.push(n)
m=u.f
if(m!=null)n.bC(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}}$.W()
l=C.N()
l.b=A.ae
l.c=2.6
l.r=f.gp(0)
l.e=A.fG
this.c.aR(u,l)},
$S:1865}
B.d4y.prototype={
$3(d,e,f){var w=null,v=C.h3(w,w,w,w,C.d3(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a4,A.c6,w,A.dP,A.c5)
v.en()
v.a4(this.a,new C.v(f,this.b.b+2))},
$S:1866}
B.bFY.prototype={
$2(d,e){return d+e.a*e.b},
$S:1867}
B.frZ.prototype={
$2(d,e){return e.a-d.a},
$S:1868}
B.dCW.prototype={
$2(d,e){return d+e},
$S:74}
B.dD8.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dD7(v,A.k.D((v.gvU()-w[v.e].guX())/Math.max(w[v.e].guX(),8),-1,1)*0.32,u))},
$S:8}
B.dD7.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dD9.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dD6(w,d))},
$S:133}
B.dD6.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cv:v)
while(v.C())w.push(A.k.N(C.dT(v.gR(v))))
return this.a.r.v(0,w)},
$S:0}
B.dCX.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.E(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dD1.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1869}
B.dD2.prototype={
$0(){var w=this.a
return w.m(new B.dD0(w))},
$S:0}
B.dD0.prototype={
$0(){var w=this.a;++w.e
A.d.h6(w.f,0,5,0)},
$S:0}
B.dD3.prototype={
$2(d,e){var w=null,v=this.a
return C.aC(A.c7,C.b3(w,w,w,new B.b9E(v.w,this.b.a,v.f,v.gvU()===v.d[v.e].guX(),w),A.f5),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dD_(v,e),w,w,w,!1,A.a7)},
$S:35}
B.dD_.prototype={
$1(d){var w=this.b.b,v=A.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cyK(v-1)},
$S:51}
B.dD4.prototype={
$0(){var w=this.a
return w.m(new B.dCZ(w,this.b))},
$S:0}
B.dCZ.prototype={
$0(){var w=this.a
w.e=this.b
A.d.h6(w.f,0,5,0)},
$S:0}
B.dD5.prototype={
$0(){var w=this.a
return w.m(new B.dCY(w))},
$S:0}
B.dCY.prototype={
$0(){return A.d.h6(this.a.f,0,5,0)},
$S:0}
B.cEm.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bx(C.ch(new C.v(d,s),20,w),A.qq)
$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=f.gp(0)
p=q.H()
u.drawRRect(C.et(r),p)
p.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.2
q.r=A.dB.gp(0)
p=q.H()
u.drawRRect(C.et(r),p)
p.delete()
B.fqZ(v,"1",new C.v(d,s),A.bk,11)}},
$S:1870}
B.dWn.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new B.dWm(w,v))},
$S:8}
B.dWm.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dWo.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dWl(w,d))},
$S:133}
B.dWl.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cv:v)
while(v.C())w.push(A.k.N(C.dT(v.gR(v))))
return this.a.w.v(0,w)},
$S:0}
B.dWd.prototype={
$0(){var w=A.k.V(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dWh.prototype={
$0(){var w=this.a
return w.m(new B.dWg(w))},
$S:0}
B.dWg.prototype={
$0(){return this.a.r++},
$S:0}
B.dWi.prototype={
$0(){var w=this.a
return w.m(new B.dWf(w,this.b))},
$S:0}
B.dWf.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dWj.prototype={
$1(d){var w=this.a
return w.m(new B.dWe(w,d))},
$S:6}
B.dWe.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dWk.prototype={
$1(d){return this.a.c6W(this.b,d)},
$S:6}
B.dcx.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bQi(d,e,f,g),m=this.b
$.W()
w=C.N()
v=C.aq(h,A.c,i?0.1:0.35)
v.toString
u=C.aq(h,A.w,0.5)
u.toString
w.sar(new C.bT(A.A,0.5,A.x,null,0,C.a([v,h,u],x.O),null,null).av(0,C.bU(d,e+6)))
m.aR(n,w)
w=C.N()
w.b=A.ae
w.c=1.5
w.r=A.aW.gp(0)
m.aR(n,w)
w=C.N()
w.r=A.w.j(0.28).gp(0)
m.af(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.hM.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.N()
w.r=A.aL.gp(0)
m.af(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1871}
B.dcy.prototype={
$3(d,e,f){var w=this,v=w.b
return B.fqZ(w.a,d,new C.v(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1872}
B.dH7.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dH6(w,d))},
$S:133}
B.dH6.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cv:v)
while(v.C())w.push(A.k.N(C.dT(v.gR(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dGQ.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jK(90-(w-65)):d},
$S:14}
B.dGZ.prototype={
$1(d){return this.a.m(new B.dGY())},
$S:2}
B.dGY.prototype={
$0(){},
$S:0}
B.dH_.prototype={
$1(d){return this.a.m(new B.dGX())},
$S:2}
B.dGX.prototype={
$0(){},
$S:0}
B.dH0.prototype={
$0(){var w=this.a
return w.m(new B.dGW(w))},
$S:0}
B.dGW.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aXD()},
$S:0}
B.dH1.prototype={
$0(){var w=this.a
return w.m(new B.dGV(w))},
$S:0}
B.dGV.prototype={
$0(){return this.a.f=0},
$S:0}
B.dH2.prototype={
$0(){var w=this.a
return w.m(new B.dGU(w))},
$S:0}
B.dGU.prototype={
$0(){return this.a.f=1},
$S:0}
B.dH3.prototype={
$0(){var w=this.a
return w.m(new B.dGT(w,this.b))},
$S:0}
B.dGT.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dH4.prototype={
$1(d){var w=this.a
return w.m(new B.dGS(w,d))},
$S:6}
B.dGS.prototype={
$0(){return this.a.w=A.k.V(this.b)},
$S:0}
B.dH5.prototype={
$1(d){var w=this.a
w.m(new B.dGR(w,d))
if(w.ga9y()&&w.Q.L(0,w.x)){B.w2("zap",9,220,0.45)
w=w.Q
w=C.C(w,C.a3(w).k("co.E"))
B.w_("cipher_lab",C.F(["done",w],x.N,x.z))}},
$S:6}
B.dGR.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.bMf.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bMq.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bMl.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bMr.prototype={
$1(d){return this.a.LC(d)&&!d.x},
$S:z+1}
B.bMs.prototype={
$2(d,e){return Math.max(d,this.a.aAb(e))},
$S:z+6}
B.bMu.prototype={
$2(d,e){var w=this.a
return w.c9(0,d.a+"."+e,new B.bMv(w))},
$S:z+5}
B.bMv.prototype={
$0(){return this.a.a},
$S:106}
B.bMt.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:76}
B.bMw.prototype={
$2(d,e){var w=this.a
return w.c9(0,this.b.$1(this.c.$2(d,e)),new B.bMx(w))},
$S:z+5}
B.bMx.prototype={
$0(){return this.a.a},
$S:106}
B.bMh.prototype={
$2(d,e){var w=this.a
return w.c9(0,d.a+"."+e,new B.bMi(w))},
$S:z+5}
B.bMi.prototype={
$0(){return this.a.a},
$S:106}
B.bMg.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:76}
B.bMj.prototype={
$2(d,e){var w=this.a
return w.c9(0,this.b.$1(this.c.$2(d,e)),new B.bMk(w))},
$S:z+5}
B.bMk.prototype={
$0(){return this.a.a},
$S:106}
B.bMe.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bMy.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bMm.prototype={
$1(d){return d!==this.b&&this.a.aGn(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bMp.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bMo.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bMn.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bH9.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bHa.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.cl4.prototype={
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
$S:193}
B.fJ7.prototype={
$1(d){var w
$.W()
w=C.N()
w.r=d.gp(0)
return w},
$S:1873}
B.fJ9.prototype={
$2(d,e){var w
$.W()
w=C.N()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bS
return w},
$S:1874}
B.fJa.prototype={
$5(d,e,f,g,h){return C.bx(new C.a9(d,e,d+f,e+g),new C.aT(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1875}
B.fJ8.prototype={
$3(d,e,f){var w
$.W()
w=C.N()
w.sar(new C.a8(A.b0,A.b4,A.x,C.a([e,f],x.O),null,null).av(0,d))
return w},
$S:1876}
B.bGO.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bGP.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.bGN(w))},
$S:0}
B.bGN.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bGQ.prototype={
$0(){return C.a([],x.ey)},
$S:1877}
B.bGR.prototype={
$1(d){return this.a.bA(d).a>15e5},
$S:376}
B.bGS.prototype={
$0(){var w,v,u
J.bE1(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.Ct(v))if(B.h1k(v.b))w.b01(v)
else w.a_h(v)
else{u=w.a.c.bcK(v)
w.adM(u==null?"The "+$.qj().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bGM.prototype={
$1(d){return new C.e2(new B.bGK(this.a,this.b),null)},
$S:21}
B.bGK.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bGL(this.a,v,e),t=$.qj(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.kg,w,w,w),q=C.aH(w,w,w,w,D.bJA,w,w,w,new B.bGG(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bm(!0,new C.D(A.xR,C.x(C.a([r,A.au,D.fGs,A.R,C.B(C.a([q,C.E(C.l0(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bQf,w,w,w,new B.bGH(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.B(C.a([C.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b7,C.bK(!1,D.fk8,w,w,!0,w,w,new B.bGI(u),w,w),C.bK(!1,A.zV,w,w,!0,w,w,new B.bGJ(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:88}
B.bGL.prototype={
$1(d){var w=this.a
w.m(new B.bGE(this.b,d))
this.c.$1(new B.bGF())
w.a.toString},
$S:6}
B.bGE.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
B.bGF.prototype={
$0(){},
$S:0}
B.bGG.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
B.bGH.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
B.bGI.prototype={
$0(){return this.a.$1(1)},
$S:0}
B.bGJ.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.bH6.prototype={
$2(d,e){var w
if(d==="short"){E.dG(1800,"",120,0,0.55,"noise")
E.dG(200,"",160,2.2,0.4,"saw")
C.fL()
w=this.a
if(w.c!=null)w.adM("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dG(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.adM("\u26a0 Overloaded! The "+$.qj().h(0,e.b).b+" can only give about "+A.k.aa(w.a.c.zG(e),2)+" amps but your gadgets are asking for "+A.k.aa(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.adM("Burnt out! "+e.ay)
E.dG(140,"",320,0,0.6,"noise")
E.dG(900,"",160,1.5,0.35,"square")}},
$S:z+65}
B.bH7.prototype={
$0(){},
$S:0}
B.bGh.prototype={
$0(){},
$S:0}
B.bH8.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bH5.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aC(A.c7,C.b3(p,p,p,new B.aiy(w,v,u,t,s,r==null?A.j4:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bH_(o),new B.bH0(o),new B.bH1(o),p,p,p,p,p,p,p,p,p,p,new B.bH2(o),p,p,p,!1,A.a7)],q)
if(o.a.c.a.length===0)n.push(D.b5D)
w=o.Q
if(w!=null){v=C.n(14)
u=C.I(A.cs,A.q,1)
n.push(C.ao(p,C.aC(p,C.p(p,C.B(C.a([D.fio,C.E(C.d(w,p,p,p,p,p,p,D.faB,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.bb3,p,u,v,p,p,A.n),p,p,p,p,A.nh,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bH3(o),p,p,p,p,p,p,!1,A.a7),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aZ4(C.B(C.a([D.bzR,new B.fj(A.G9,"Cut wire",new B.bH4(o),A.c9,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.cgF(w),p,p,10,10,p,p))}return C.jA(new C.an(A.W,p,A.b1,A.r,n,p),A.r,p)},
$S:358}
B.bH0.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b73(s)
if(r!=null){t.m(new B.bGY(t,r,d))
return}w=t.b0I(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.v(v*u.a,w.d*u.b).aD(0,s)
t.m(new B.bGZ(t,w))}},
$S:44}
B.bGY.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bGZ.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bH1.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new B.bGW(w,d))
else if(w.w!=null)w.m(new B.bGX(w,d.b.ad(0,w.x)))},
$S:18}
B.bGW.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bGX.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bH_.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b73(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.aki(u.a,u.b,v.a,v.b)!=null)E.dG(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.adK()},
$S:38}
B.bH2.prototype={
$1(d){var w=this.a,v=d.b,u=w.b0I(v)
if(u!=null){w.m(new B.bGU(w,u))
if(D.m0.ai(0,u.b))w.cre(u)
w.a.toString
return}w.m(new B.bGV(w,w.cDM(v)))},
$S:51}
B.bGU.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dG(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dG(200,"",70,0,0.2,"saw")}},
$S:0}
B.bGV.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bH3.prototype={
$0(){var w=this.a
return w.m(new B.bGT(w))},
$S:0}
B.bGT.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bH4.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dG(300,"",50,0,0.35,"noise")
w.adK()},
$S:0}
B.bGi.prototype={
$0(){return this.a.boH(this.b)},
$S:0}
B.bGB.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.B(C.a([C.d(d,w,w,w,w,w,w,D.f56,w,w,w),C.E(C.l0(this.b.d,w,w,g,h,new B.bGD(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1878}
B.bGD.prototype={
$1(d){var w=this.a
w.m(new B.bGC(this.b,d))
w.a.toString},
$S:6}
B.bGC.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bGo.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dG(260,"",70,0,0.35,"noise")
w.adK()},
$S:0}
B.bGp.prototype={
$0(){var w=this.a
return w.m(new B.bGn(w))},
$S:0}
B.bGn.prototype={
$0(){return this.a.d=null},
$S:0}
B.bGq.prototype={
$0(){this.a.m(new B.bGm(this.b,this.c))
E.dG(900,"",40,0,0.3,"noise")},
$S:0}
B.bGm.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bGt.prototype={
$0(){return this.a.b01(this.b)},
$S:0}
B.bGu.prototype={
$0(){return this.a.a_h(this.b)},
$S:0}
B.bGv.prototype={
$0(){return this.a.a0W(this.b)},
$S:0}
B.bGw.prototype={
$0(){var w=this.a
w.m(new B.bGl(this.b,this.c))
w.a.toString},
$S:0}
B.bGl.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bGx.prototype={
$0(){var w=this.a
w.m(new B.bGk(this.b,this.c))
w.a.toString},
$S:0}
B.bGk.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bGy.prototype={
$0(){var w=this.a
w.m(new B.bGj(this.b,this.c))
w.a.toString},
$S:0}
B.bGj.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bGz.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bGA.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bGr.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bGs.prototype={
$1(d){return this.a.f=d},
$S:6}
B.fhp.prototype={
$1(d){return d.aG0("bulb")},
$S:z+2}
B.fhq.prototype={
$1(d){return d.pL(0,"switch")&&d.aG0("bulb")},
$S:z+2}
B.fhr.prototype={
$1(d){return A.d.b6(d.a,new B.fhc())},
$S:z+2}
B.fhc.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.fhs.prototype={
$1(d){return d.pL(0,"resistor")&&A.d.b6(d.a,new B.fhb())},
$S:z+2}
B.fhb.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.fht.prototype={
$1(d){return!d.pL(0,"battery")&&d.aG0("bulb")},
$S:z+2}
B.fhg.prototype={
$1(d){return A.d.b6(d.a,new B.fha())},
$S:z+2}
B.fha.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fhh.prototype={
$1(d){return A.d.b6(d.a,new B.fh9())},
$S:z+2}
B.fh9.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fhi.prototype={
$1(d){return A.d.b6(d.a,new B.fh8())},
$S:z+2}
B.fh8.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.fhj.prototype={
$1(d){var w=d.a
return A.d.b6(w,new B.fh6())&&A.d.b6(w,new B.fh7())&&d.pL(0,"buck")},
$S:z+2}
B.fh6.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fh7.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.fhk.prototype={
$1(d){var w=d.a
return A.d.b6(w,new B.fh4())&&A.d.b6(w,new B.fh5())},
$S:z+2}
B.fh4.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.fh5.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fhl.prototype={
$1(d){return A.d.b6(d.a,new B.fh3())},
$S:z+2}
B.fh3.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
B.dSs.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
B.dSB.prototype={
$1(d){var w=this.a.d
return w.aGn(d)&&w.Ct(d)},
$S:z+1}
B.dSC.prototype={
$1(d){return d.x},
$S:z+1}
B.dSD.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
B.dSE.prototype={
$0(){},
$S:0}
B.dSr.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.n(22),o=x.p,n=C.a([D.fzg,A.au,D.fk4,A.R],o)
for(w=this.a,v=0;v<19;++v){u=D.Qe[v]
t=A.c.j(0.06)
s=new C.aT(14,14)
r=new C.az(A.bE,1,A.q,-1)
n.push(C.aC(q,C.p(q,C.x(C.a([new C.y(u.a,q,A.kf,q,q,q,q,q,q,q,q,q),A.bC,new C.y(u.b,q,D.fbl,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bO(r,r,r,r),new C.bp(s,s,s,s),q,q,A.n),q,q,q,A.cw,A.bl,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dSq(w,d,u),q,q,q,q,q,q,!1,A.a7))}return C.eL(q,F.kR,new C.D(A.bQ,new C.a7(340,q,C.cw(n,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d1,q,new C.b7(p,A.Y),q)},
$S:48}
B.dSq.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.m(new B.dSp(w,this.c))
E.dG(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dSp.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bhS()},
$S:0}
B.dSn.prototype={
$1(d){return new B.Vl(this.a.d,null)},
$S:z+67}
B.dSo.prototype={
$0(){},
$S:0}
B.dSA.prototype={
$1(d){return new C.e2(new B.dSz(this.a),null)},
$S:21}
B.dSz.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ahJ(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.b2:A.aN
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.B(C.a([D.fwy,A.b7,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.O,C.bw(C.n(4),C.m5(A.bE,m,m,5,m,w.a/11,new C.lZ(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.fn7)
else{h=f.j(0.1)
t=C.n(14)
s=C.I(f.j(0.5),A.q,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Ae.TS,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.DC,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.x(C.a([r,A.au,q,new C.bI(A.a8,m,m,C.bK(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dSx(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bl,m,m,m))}u.push(A.R)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aT(12,12)
n=new C.az(o===l.f?f.j(0.6):A.dm,1,A.q,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aA:A.c
u.push(C.aC(m,C.p(m,new C.cl(A.aP,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.y(s,m,A.a8o,m,m,m,m,m,m,m,m,m),A.at,new C.bB(1,A.bh,new C.y(r.a,m,new C.H(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bO(n,n,n,n),new C.bp(t,t,t,t),m,m,A.n),m,m,m,A.eI,A.nh,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dSy(l,o,e),m,m,m,m,m,m,!1,A.a7))}return C.bm(!0,new C.cT(new C.aY(0,1/0,0,k.a.b*0.75),C.cw(u,m,A4.xP,m,m,A.ah,!0),m),!0,!1,A.af,!0,!0)},
$S:88}
B.dSx.prototype={
$0(){var w=this.a
w.m(new B.dSv(w))
this.b.$1(new B.dSw())
w.ET()},
$S:0}
B.dSv.prototype={
$0(){var w=this.a
$.ahJ()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dSw.prototype={
$0(){},
$S:0}
B.dSy.prototype={
$0(){var w=this.a
w.m(new B.dSt(w,this.b))
this.c.$1(new B.dSu())
w.ET()},
$S:0}
B.dSt.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dSu.prototype={
$0(){},
$S:0}
B.dSG.prototype={
$0(){return C.a6(this.a,!1).lz()},
$S:0}
B.dSH.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(C.mf("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return C.b(C.a6(t.b,!1).cm(C.e9(new B.dSF(),!1,null,x.H)),$async$$0)
case 4:case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
B.dSF.prototype={
$1(d){C.lo("construction")
return Ak.hEK()},
$S:z+68}
B.dSI.prototype={
$0(){return B.hqM(this.a,"ELECTRONICS LAB",this.b,A.aN)},
$S:0}
B.dSJ.prototype={
$0(){var w=this.a
return w.m(w.d.gcUX())},
$S:0}
B.dSK.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grG(v))
w.ET()},
$S:0}
B.cBU.prototype={
$2(d,e){var w=null,v=this.a.gawF().x
v===$&&C.c()
return C.b3(w,w,w,new B.b8M(v,w),A.aw)},
$S:71}
B.cBT.prototype={
$3(d,e,f){var w=new C.aO($.W().r,A.ao,null,null,C.a([],x.v)),v=d.a,u=d.b,t=u-e
w.F(new C.b5(v,t))
w.F(new C.cW(v,u,v+e,u))
w.F(new C.cW(v,u,v,u+e))
w.F(new C.cW(v,u,v-e,u))
w.F(new C.cW(v,u,v,t))
w.F(new C.bE())
t=C.N()
t.r=A.c.j(f).gp(0)
this.a.aR(w,t)},
$S:668}
B.fNO.prototype={
$3(d,e,f){return new B.UC(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fNP.prototype={
$4(d,e,f,g){var w=x.Y
return new C.d_(e,!1,C.is(A.A,g,null,new C.bf(C.cH(A.cu,e,null),new C.bq(0.85,1,w),w.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:31}
B.dOo.prototype={
$0(){return C.a6(this.a,!1).lz()},
$S:0}
B.dOn.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bYd(o):q.bAJ(o,p),m=x.p
p=C.a([C.qm(new C.nh(n,new C.cx(p,x.aC)),A.pT,C.rV(),A.bc,A.bc,new B.dOl())],m)
n=t.d
if(n){w=A.k.E(q.gRE(),12)<4
v=w?150:96
u=C.n(16)
m=C.a([A.at],m)
if(w)m.push(D.bzC)
else m.push(A.b7)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.b2:A.ax,s,s,s,s,s,A.a5),s,9,s,s,s,s,s,9))
m.push(A.at)
p.push(C.ao(s,C.av(C.df(s,C.B(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ew,new C.o(A.w,s,s,u,s,s,A.n),A.nd,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.uL)p.push(C.ao(s,C.av(C.p(s,s,A.f,s,s,A.Kt,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wr)p.push(C.ao(s,C.p(s,s,A.f,s,s,A.Kt,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aC(s,C.av(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.n(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dOm(q),s,s,s,s,s,s,!1,A.a7),s,s,0,0,s,s))
return C.bw(r,new C.an(A.W,s,A.b1,A.r,p,s),A.aq)},
$S:334}
B.dOl.prototype={
$2(d,e){var w=x.Y
return new C.d_(e,!1,C.is(A.A,d,null,new C.bf(e,new C.bq(0.92,1,w),w.k("bf<bJ.T>"))),null)},
$S:386}
B.dOm.prototype={
$0(){var w=this.a
return w.m(new B.dOk(w))},
$S:0}
B.dOk.prototype={
$0(){return this.a.e=null},
$S:0}
B.dOj.prototype={
$0(){var w=this.a
return w.m(new B.dOi(w,this.b))},
$S:0}
B.dOi.prototype={
$0(){return this.a.e=A.d.cK(F.k8,this.b)},
$S:0}
B.dOh.prototype={
$0(){var w=this.a
return w.m(new B.dOg(w))},
$S:0}
B.dOg.prototype={
$0(){return this.a.e=0},
$S:0}
B.dOc.prototype={
$0(){var w=this.a
return w.m(new B.dOb(w))},
$S:0}
B.dOb.prototype={
$0(){return this.a.e=null},
$S:0}
B.dOf.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.n(o?20:8),m=A.w.j(0.55),l=x.p
m=C.p(p,C.B(C.a([D.fEV,A.at,C.E(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eF,p,p,p,D.fhh,p,p,p),1),C.d(A.a.aV(A.o.u(C.dk(new C.S(Date.now(),0,!1))),2,"0")+":"+A.a.aV(A.o.u(C.h2(new C.S(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qx,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.kW,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.buX(w.gRE(),this.c.d,p),A.aw)],l)
o=w.e
if(o!=null){u=C.n(10)
t=C.I(A.b_,A.q,1)
s=C.n(10)
o=C.p(p,C.B(C.a([C.aC(p,C.p(p,p,A.f,p,p,A.abr,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dOe(w),p,p,p,p,p,p,!1,A.a7),A.ee,C.p(p,p,A.f,p,p,A.abx,p,12,p,p,p,p,p,12),A.ee,C.p(p,p,A.f,p,p,D.b12,p,12,p,p,p,p,p,12),A.at,C.E(C.d(F.k8[o].a,p,1,A.a2,p,p,p,A.a8g,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.ct,p,p,p,24,p,p,A.fr,p,p,p)
r=w.e
r.toString
v.push(C.bZ(0,new C.D(D.bwm,C.p(p,C.bw(s,C.x(C.a([o,C.E(C.b3(p,p,p,new B.aew(r,w.gRE(),p),A.f5),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new C.o(A.w,p,t,u,D.dhk,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.n(18)
t=C.I(A.b_,A.q,1)
s=C.a([],l)
for(q=0;q<8;++q)s.push(new C.D(A.jp,w.auC(F.k8[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.B(s,A.m,p,A.e,A.N,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.ll,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bw(n,C.p(p,C.x(C.a([m,C.E(new C.an(A.W,p,A.b1,A.r,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,U.LH,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:334}
B.dOe.prototype={
$0(){var w=this.a
return w.m(new B.dOd(w))},
$S:0}
B.dOd.prototype={
$0(){return this.a.e=null},
$S:0}
B.eb4.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.eb3(w,d))},
$S:133}
B.eb3.prototype={
$0(){var w=this.a,v=this.b,u=J.a4(v),t=C.aJ(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=C.aJ(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=B.h1r(v)},
$S:0}
B.eb5.prototype={
$0(){},
$S:0}
B.eaV.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.h1r(v)
w.r.a8(0)
w.x=!1},
$S:0}
B.eaW.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gvs().r){C.jT()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.w2("click",s.c+s.d,60,0.4)
if(B.hqX(r.gvs(),q).b.a===r.gvs().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.w_("laser_maze",C.F(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.BK("bell",D.app,700,0.45)
for(q=r.gvs().c,q=C.eb(q,q.r,C.a3(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.z(new C.v((A.o.E(t,7)+0.5)*p+w,(A.o.an(t,7)+0.5)*p+v),0))}}},
$S:0}
B.eaZ.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.ar(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aC(A.c7,C.b3(s,s,s,new B.bgO(r.gvs(),w,v.a,u,r.w,r.z,s),q),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.eaX(r),s,s,s,!1,A.a7),C.ao(s,C.e_(C.B(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,K.aQx,s,s,s),C.d(""+u.a+"/"+r.gvs().c.a+" \u2605   mirrors "+w.a+"/"+r.gvs().r,s,s,s,s,s,s,R.a7X,s,s,s)],t),A.m,s,A.hE,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.fmd("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.b2,C.a([new B.fj(A.j1,"Next level",new B.eaY(r),A.b2,s)],t)))
return new C.an(A.W,s,A.b1,A.r,w,s)},
$S:65}
B.eaX.prototype={
$1(d){return this.a.c7h(d.b)},
$S:51}
B.eaY.prototype={
$0(){var w=this.a
return w.adQ(w.d+1)},
$S:0}
B.eb_.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.grG(v))},
$S:0}
B.eb0.prototype={
$0(){var w=this.a
return w.adQ(w.d+1)},
$S:0}
B.eb1.prototype={
$0(){var w=this.a
return w.adQ(w.d-1)},
$S:0}
B.eb2.prototype={
$0(){return this.a.adQ(this.b)},
$S:0}
B.dhD.prototype={
$1(d){var w=this.b
return new C.v(this.a+(A.o.E(d,7)+0.5)*w,this.c+(A.o.an(d,7)+0.5)*w)},
$S:726}
B.dhG.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.v(r,s):new C.v(r,r),p=new C.v(-q.a,-q.b)
r=this.c
w=t.ad(0,q)
v=t.ad(0,p)
$.W()
u=C.N()
u.r=(f?A.fW:A.aL).gp(0)
u.c=7
u.d=A.bS
r.bE(w,v,u)
w=t.ad(0,q)
v=t.ad(0,p)
u=C.N()
u.r=A.c.gp(0)
u.c=2.4
u.d=A.bS
r.bE(w,v,u)},
$S:1880}
B.dhE.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:391}
B.dhF.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:391}
B.ebn.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.ebm(w,d))},
$S:133}
B.ebm.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.ebo.prototype={
$0(){},
$S:0}
B.eb8.prototype={
$1(d){return d===0},
$S:119}
B.ebh.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.u(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,K.a88,s,s,s)
w=r.z==="play"?A.k.dk(r.y):20
v=x.p
w=C.B(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.c9:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,R.a7X,s,s,s)],v),A.m,s,A.hE,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dm:p
t=C.n(22)
t=C.E(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.b_,A.q,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.x(C.a([new C.D(D.btG,w,s),C.E(C.B(C.a([C.E(new C.D(A.bR,C.x(C.a([t,A.am,C.d(q?"TARGET":"TARGET: "+r.gcyN(),s,s,s,s,s,s,D.aRn,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.E(new C.D(A.bR,C.x(C.a([C.E(C.b3(s,s,s,new B.bh2(r.f,s),A.f5),1),A.am,C.d("YOURS \xb7 "+A.k.V(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aRn,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.fmd("Light Mixer","Match each colour with red, green and blue light."+q,A.b8,C.a([new B.fj(A.iJ,"Start",new B.ebe(r),A.b2,s)],v)))}if(r.z==="result")w.push(B.fmd(r.Q,"Score so far: "+r.w,A.aM,C.a([new B.fj(A.j1,"Next colour",new B.ebf(r),A.b2,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.fmd("Finished! "+q,u,A.b2,C.a([new B.fj(A.mA,"Play again",new B.ebg(r),A.b2,s)],v)))}return new C.an(A.W,s,A.aa,A.r,w,s)},
$S:65}
B.ebe.prototype={
$0(){var w=this.a
return w.m(new B.eba(w))},
$S:0}
B.eba.prototype={
$0(){var w=this.a
w.w=w.r=0
w.awJ()},
$S:0}
B.ebf.prototype={
$0(){var w=this.a
return w.m(w.gc7f())},
$S:0}
B.ebg.prototype={
$0(){var w=this.a
return w.m(new B.eb9(w))},
$S:0}
B.eb9.prototype={
$0(){var w=this.a
w.w=w.r=0
w.awJ()},
$S:0}
B.ebi.prototype={
$1(d){var w=this.a
return w.m(new B.ebd(w,d))},
$S:6}
B.ebd.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.ebj.prototype={
$1(d){var w=this.a
return w.m(new B.ebc(w,d))},
$S:6}
B.ebc.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.ebk.prototype={
$1(d){var w=this.a
return w.m(new B.ebb(w,d))},
$S:6}
B.ebb.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.ebl.prototype={
$0(){var w=this.a
return w.m(w.gc7g())},
$S:0}
B.fi6.prototype={
$0(){return D.e3y},
$S:z+70}
B.fi7.prototype={
$0(){return D.dBL},
$S:z+71}
B.fi8.prototype={
$0(){return D.dyi},
$S:z+72}
B.fi9.prototype={
$0(){return D.dBa},
$S:z+73}
B.fia.prototype={
$0(){return D.dG7},
$S:z+74}
B.fib.prototype={
$0(){return D.e_h},
$S:z+75}
B.fic.prototype={
$0(){return D.e1t},
$S:z+76}
B.fid.prototype={
$0(){return D.dFr},
$S:z+77}
B.cfI.prototype={
$0(){return C.a6(this.a,!1).lz()},
$S:0}
B.cfJ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.huo(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aT(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ac(0,A.G,p.j(0.4),A.dn,16)],t)
n=A.c.j(0.85)
j.push(C.aC(m,C.p(m,new C.an(A.W,m,A.aa,A.r,C.a([new C.cL(m,-6,-6,m,m,m,new C.y(r.c,m,M.TR,m,m,m,m,m,m,m,m,m),m),new C.bI(A.lC,m,m,C.x(C.a([new C.y(r.a,m,D.ffU,m,m,m,m,m,m,m,m,m),A.cV,new C.y(r.b,m,new C.H(!0,n,m,m,m,m,12,A.a6,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.N,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bp(q,q,q,q),p,new C.a8(A.az,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bB,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.cfH(d,r),m,m,m,m,m,m,!1,A.a7))}return C.bV(A.bA,j,A.br,14,14)},
$S:171}
B.cfH.prototype={
$0(){return C.a6(this.a,!1).cm(C.e9(new B.cfG(this.b),!1,null,x.H))},
$S:0}
B.cfG.prototype={
$1(d){return this.a.f.$0()},
$S:42}
B.eKD.prototype={
$0(){var w=this.a
return w.w=w.d[w.b4d(w.f)]},
$S:0}
B.eKz.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cG.aj()*7},
$S:0}
B.eKy.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.c8)
w.w=""},
$S:0}
B.eKB.prototype={
$0(){var w=this.a
return w.m(new B.eKA(w,this.b))},
$S:0}
B.eKA.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cA(w,this.b)},
$S:0}
B.eKC.prototype={
$1(d){return this.a.aZv(0)},
$S:2}
B.dUG.prototype={
$0(){return B.BK("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dUH.prototype={
$0(){},
$S:0}
B.dUB.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dUD.prototype={
$0(){return this.a.aZx(this.b)},
$S:0}
B.dUE.prototype={
$0(){var w=this.a
return w.m(new B.dUC(w))},
$S:0}
B.dUC.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dUF.prototype={
$0(){var w=this.a
return w.aZx(w.d)},
$S:0}
B.dFy.prototype={
$2(d,e){return d+e},
$S:86}
B.dFz.prototype={
$0(){},
$S:0}
B.dFt.prototype={
$2(d,e){return d+e},
$S:86}
B.dFw.prototype={
$0(){var w=this.a
return w.m(new B.dFv(w,this.b))},
$S:0}
B.dFv.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dFx.prototype={
$0(){var w=this.a
return w.m(new B.dFu(w))},
$S:0}
B.dFu.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dRX.prototype={
$0(){return B.qU(this.b,this.a.d,"drawing")},
$S:0}
B.dRY.prototype={
$1(d){var w=this.a
return w.m(new B.dRW(w,d))},
$S:44}
B.dRW.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aHV(u,v,t))},
$S:0}
B.dRZ.prototype={
$1(d){var w=this.a
return w.m(new B.dRV(w,d))},
$S:18}
B.dRV.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
B.dS_.prototype={
$1(d){var w=this.a
return w.m(new B.dRU(w,d))},
$S:23}
B.dRU.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aHV(u,v,t))},
$S:0}
B.dS0.prototype={
$0(){var w=this.a
return w.m(new B.dRT(w,this.b))},
$S:0}
B.dRT.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dS1.prototype={
$1(d){var w=this.a
return w.m(new B.dRS(w,d))},
$S:6}
B.dRS.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dS2.prototype={
$0(){var w=this.a
return w.m(new B.dRR(w))},
$S:0}
B.dRR.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dS3.prototype={
$0(){var w=this.a
return w.m(new B.dRQ(w))},
$S:0}
B.dRQ.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dS4.prototype={
$0(){var w=this.a
return w.m(A.d.grG(w.e))},
$S:0}
B.dS5.prototype={
$0(){var w=this.a
return w.m(new B.dRP(w))},
$S:0}
B.dRP.prototype={
$0(){var w=this.a
w.x=D.awg[A.o.E(A.d.cK(D.awg,w.x)+1,4)]},
$S:0}
B.egK.prototype={
$0(){return this.a.f.L(0,this.b)},
$S:0}
B.egL.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.BK("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.egJ(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.BK("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.egJ.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
B.egM.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.egI(w))},
$S:11}
B.egI.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
B.egQ.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aC(w,C.mF(new B.egO(v,e),w,A.bc,A.pT,w,w,new C.bq(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.egP(v,e),w,w,w,w,w,w,!1,A.a7)},
$S:78}
B.egP.prototype={
$0(){return this.a.c8c(this.b)},
$S:0}
B.egO.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dp(),m=n.a
m.$flags&2&&C.aj(m)
m[11]=0.001
n.fE(3.141592653589793*e)
m=C.n(16)
w=o?p:D.bZh
if(o)v=q.a.r.t(0,q.b)?A.b2.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.b2:A.b_,A.q,1)
if(o){r=C.dp()
r.fE(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fv(A.A,C.d(u[t],p,p,p,p,p,p,D.fdf,p,p,p),p,r,!0)
u=r}else u=D.fxY
return C.fv(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:136}
B.egR.prototype={
$0(){var w=this.a
return w.m(new B.egN(w,this.b))},
$S:0}
B.egN.prototype={
$0(){var w=this.a
w.d=this.b.a
w.arW()},
$S:0}
B.egS.prototype={
$0(){var w=this.a
return w.m(w.gbJr())},
$S:0}
B.erD.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.erE.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.erB.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.erC.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.erA(w))},
$S:11}
B.erA.prototype={
$0(){return this.a.f=-1},
$S:0}
B.erF.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.erG.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.erH.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aZw()},
$S:11}
B.erI.prototype={
$0(){return this.a.c8i(this.b)},
$S:0}
B.eFV.prototype={
$1(d){return C.u(d.h(0,1))+","},
$S:70}
B.eG3.prototype={
$3$big(d,e,f){var w=null,v=C.E(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aS,w,w,w,w,w,w,w,w,f?16:14,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.D(A.kV,C.B(C.a([v,A.ab,new C.dq(1,A.co,C.eQ(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.dZ),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1882}
B.eG_.prototype={
$1(d){return this.a.m(new B.eFZ())},
$S:2}
B.eFZ.prototype={
$0(){},
$S:0}
B.eG0.prototype={
$0(){var w=this.a
return w.m(new B.eFY(w,this.b))},
$S:0}
B.eFY.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eG1.prototype={
$1(d){var w=this.a
return w.m(new B.eFX(w,d))},
$S:6}
B.eFX.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
B.eG2.prototype={
$0(){var w=this.a
return w.m(new B.eFW(w))},
$S:0}
B.eFW.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.efp.prototype={
$0(){},
$S:0}
B.efq.prototype={
$0(){},
$S:0}
B.efi.prototype={
$0(){var w=this.a
return w.m(new B.efh(w))},
$S:0}
B.efh.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c2(u,1,!1,x.S)
w.r=0.9
B.a8a("hat",0.6)},
$S:0}
B.efj.prototype={
$0(){var w=this.a
return w.m(new B.efg(w))},
$S:0}
B.efg.prototype={
$0(){this.a.y=1.1
B.li("bell",36,200,0.4)},
$S:0}
B.efk.prototype={
$0(){var w=this.a
return w.m(new B.eff(w))},
$S:0}
B.eff.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
B.li("bell",12+A.o.E(u,12),500,0.5)},
$S:0}
B.efl.prototype={
$0(){var w=this.a
return w.m(new B.efe(w,this.b))},
$S:0}
B.efe.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.efm.prototype={
$1(d){var w=this.a
return w.m(new B.efd(w,d))},
$S:6}
B.efd.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e4(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.efn.prototype={
$1(d){var w=this.a
return w.m(new B.efc(w,d))},
$S:6}
B.efc.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.efo.prototype={
$1(d){var w=this.a
return w.m(new B.efb(w,d))},
$S:6}
B.efb.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
B.csC.prototype={
$0(){return C.a6(this.a,!1).lz()},
$S:0}
B.csD.prototype={
$0(){var w=this.a
return B.hqM(this.b,w.c,w.e,w.d)},
$S:0}
B.fRD.prototype={
$1(d){var w,v=null,u=C.n(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.f5F,v,v,v)
return C.em(C.a([C.bK(!1,D.fnc,v,v,!0,v,v,new B.fRC(d),v,v)],x.p),v,v,F.n8,w,v,v,v,new C.b7(u,new C.az(s,1,A.q,-1)),t,v)},
$S:20}
B.fRC.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.csy.prototype={
$0(){C.eY()
this.a.e.$0()},
$S:0}
B.csx.prototype={
$0(){C.eY()
this.a.e.$0()},
$S:0}
B.csE.prototype={
$0(){C.eY()
this.a.e.$0()},
$S:0}
B.csz.prototype={
$0(){var w=this.a
A.d.W(w.fu$,this.b.bj())
if(w.c!=null)this.c.$0()},
$S:0}
B.csB.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.l4$.a)/1e6,0,0.04)
w.l4$=d
w.fW$=A.o.an(v,1000)
w.lB(u)
if(w.c!=null)w.m(new B.csA())},
$S:8}
B.csA.prototype={
$0(){},
$S:0}
B.cfE.prototype={
$0(){var w=this
return B.li(w.a,w.b,w.c,w.d)},
$S:1}
B.dXo.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dXn(w,d))},
$S:z+79}
B.dXn.prototype={
$0(){return this.a.ct_(this.b)},
$S:0}
B.dWR.prototype={
$0(){var w,v,u,t=this.a,s=J.a4(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:692}
B.dWP.prototype={
$0(){return this.a.id=D.a3i},
$S:0}
B.dWQ.prototype={
$0(){var w=this.b.a,v=C.T(w).k("a_<1>")
v=C.ph(new C.a_(w,new B.dWO(this.c),v),6,v.k("J.E"))
w=C.C(v,C.a3(v).k("J.E"))
return this.a.id=w},
$S:0}
B.dWO.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dWN.prototype={
$1(d){var w=null,v=C.cd(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.r,w,A.y,w,w,w,w,A.ah)
return C.em(C.a([C.bK(!1,A.pm,w,w,!0,w,w,new B.dWM(d),w,w)],x.p),w,w,F.n8,v,w,w,w,w,D.fy2,w)},
$S:20}
B.dWM.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.dX9.prototype={
$0(){return B.qU(this.b,this.a.d,"earth")},
$S:0}
B.dXa.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gVU()
r=p.z
o=C.a([C.aC(A.c7,C.b3(q,q,q,new B.bfe(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dWY(p),new B.dWZ(p),new B.dX_(p),q,q,q,q,q,q,q,new B.dX0(p),q,q,q,!1,A.a7)],x.p)
if(p.r==null)o.push(A9.ac9)
w=this.b
if(w!=null)o.push(C.ao(8,p.c8U(w),q,q,10,10,q,q))
return new C.ex(new C.an(A.W,q,A.b1,A.r,o,q),p.d)},
$S:179}
B.dWZ.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:272}
B.dX_.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gVU()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:220}
B.dWY.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gVU()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:759}
B.dX0.prototype={
$1(d){var w=this.a,v=w.c8X(d.b)
if(v!=null)w.m(new B.dWS(w,v))
else w.m(new B.dWT(w))},
$S:51}
B.dWS.prototype={
$0(){return this.a.axc(this.b)},
$S:0}
B.dWT.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dXb.prototype={
$0(){var w=this.a
w.e.bP(0,A.c8)
w.m(new B.dWX(w,this.b))},
$S:0}
B.dWX.prototype={
$0(){var w=this.a
w.id=D.a3i
w.axc(this.b)},
$S:0}
B.dXf.prototype={
$0(){var w=this.a
return w.m(new B.dX8(w))},
$S:0}
B.dX8.prototype={
$0(){var w=this.a
w.fx=null
w.at7(15,w.y,1)},
$S:0}
B.dXg.prototype={
$0(){var w=this.a
return w.m(new B.dX7(w,this.b))},
$S:0}
B.dX7.prototype={
$0(){var w=this.b.b
return this.a.at7(w.a,w.b,w.c)},
$S:0}
B.dXh.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dX6(w,v))},
$S:0}
B.dX6.prototype={
$0(){var w=this.b.a
return this.a.axc(w[A.cG.aw(w.length)])},
$S:0}
B.dXi.prototype={
$1(d){var w=this.a
return w.m(new B.dX5(w,d))},
$S:6}
B.dX5.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dXj.prototype={
$1(d){var w=this.a
return w.m(new B.dX4(w,d))},
$S:6}
B.dX4.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dXk.prototype={
$1(d){var w=this.a
return w.m(new B.dX3(w,d))},
$S:6}
B.dX3.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dXl.prototype={
$0(){var w=this.a
return w.m(new B.dX2(w))},
$S:0}
B.dX2.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dXm.prototype={
$0(){var w=this.a
return w.m(new B.dX1(w))},
$S:0}
B.dX1.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dXc.prototype={
$0(){var w=this.a
return w.m(new B.dWW(w))},
$S:0}
B.dWW.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dXd.prototype={
$0(){var w=this.a
return w.m(new B.dWV(w))},
$S:0}
B.dWV.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dXe.prototype={
$0(){var w=this.a
return w.m(new B.dWU(w))},
$S:0}
B.dWU.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dWL.prototype={
$2(d,e){var w=null
return C.E(C.x(C.a([C.d(d,w,w,w,w,w,w,D.aPY,w,w,w),A.uO,C.d(e,w,2,A.a2,w,w,w,A.U8,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:129}
B.dWK.prototype={
$0(){var w=this.a
return w.m(new B.dWJ(w))},
$S:0}
B.dWJ.prototype={
$0(){return this.a.fx=null},
$S:0}
B.ddm.prototype={
$0(){var w=null,v=C.h3(w,w,w,w,C.d3(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.d0g,w,w),this.a),A.a4,A.c6,w,A.dP,A.c5)
v.en()
return v},
$S:342}
B.ddn.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.v(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1883}
B.fi_.prototype={
$0(){return D.dDI},
$S:z+81}
B.fi0.prototype={
$0(){return D.e1b},
$S:z+82}
B.fi1.prototype={
$0(){return D.dDK},
$S:z+83}
B.fi2.prototype={
$0(){return D.dy4},
$S:z+84}
B.fi3.prototype={
$0(){return D.dDG},
$S:z+85}
B.fi4.prototype={
$0(){return D.e_i},
$S:z+86}
B.fi5.prototype={
$0(){return D.e_g},
$S:z+87}
B.eGO.prototype={
$0(){return C.a6(this.a,!1).lz()},
$S:0}
B.eGP.prototype={
$0(){var w=this.a
return w.m(new B.eGN(w))},
$S:0}
B.eGN.prototype={
$0(){var w=this.a
return w.d=A.o.E(w.gaSd()+1,16)},
$S:0}
B.eGQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hun(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aT(18,18)
q=s.d
p=new C.az(q.j(0.5),1,A.q,-1)
o=C.a([q.j(0.28),D.bj0],u)
k.push(C.aC(n,C.p(n,C.x(C.a([C.X(s.c,q,n,n,n,30),A.O,new C.y(s.a,n,D.fab,n,A.L,n,n,n,n,2,n,n),A.cV,new C.y(s.b,n,D.ffi,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b9,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bO(p,p,p,p),new C.bp(r,r,r,r),n,new C.a8(A.az,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.cp,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eGM(d,s),n,n,n,n,n,n,!1,A.a7))}return C.bV(A.fT,k,A.br,10,10)},
$S:171}
B.eGM.prototype={
$0(){return C.a6(this.a,!1).cm(C.e9(new B.eGL(this.b),!1,null,x.H))},
$S:0}
B.eGL.prototype={
$1(d){return this.a.e.$0()},
$S:42}
B.eyR.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.ez1.prototype={
$0(){return B.qU(this.b,this.a.d,"solar-system")},
$S:0}
B.ez2.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.ar(e.b,e.d)
u.ch=t
t=C.a([C.aC(A.c7,C.b3(v,v,v,new B.brJ(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.eyZ(u),new B.ez_(u),v,v,v,v,v,v,v,new B.ez0(u),v,v,v,!1,A.a7)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c8Z(w),v,v,10,10,v,v))
return new C.ex(new C.an(A.W,v,A.b1,A.r,t,v),u.d)},
$S:179}
B.eyZ.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:272}
B.ez_.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:220}
B.ez0.prototype={
$1(d){var w=this.a,v=w.c91(d.b)
if(v!=null)w.aZS(v)},
$S:51}
B.ez3.prototype={
$0(){var w=this.a
return w.m(new B.eyY(w))},
$S:0}
B.eyY.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.ez4.prototype={
$0(){return this.a.aZS(this.b)},
$S:0}
B.ez5.prototype={
$1(d){var w=this.a
return w.m(new B.eyX(w,d))},
$S:6}
B.eyX.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.ez6.prototype={
$1(d){var w=this.a
return w.m(new B.eyW(w,d))},
$S:6}
B.eyW.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ez7.prototype={
$0(){var w=this.a
return w.m(new B.eyV(w))},
$S:0}
B.eyV.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.ez8.prototype={
$0(){var w=this.a
return w.m(new B.eyU(w))},
$S:0}
B.eyU.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.ez9.prototype={
$0(){var w=this.a
return w.m(new B.eyT(w))},
$S:0}
B.eyT.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.eza.prototype={
$0(){var w=this.a
return w.m(new B.eyS(w))},
$S:0}
B.eyS.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.eyQ.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.aa(d/365.25,w)+" Earth years"}else w=A.k.aa(d,0)+" Earth days"
return w},
$S:277}
B.eyP.prototype={
$2(d,e){var w=null
return C.E(C.x(C.a([C.d(d,w,w,w,w,w,w,D.aPY,w,w,w),A.uO,C.d(e,w,2,A.a2,w,w,w,A.U8,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:129}
B.eyO.prototype={
$0(){var w=this.a
return w.m(new B.eyN(w))},
$S:0}
B.eyN.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.f0b.prototype={
$0(){var w=null,v=C.h3(w,w,w,w,C.d3(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,K.Qn,w,w),this.a),A.a4,A.c6,w,A.dP,A.c5)
v.en()
return v},
$S:342}
B.f0c.prototype={
$1(d){return d.c>0},
$S:z+10}
B.f0d.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dXs.prototype={
$0(){},
$S:0}
B.dXV.prototype={
$1(d){return d!=null},
$S:364}
B.dXH.prototype={
$0(){var w=this.a
return w.m(new B.dXy(w,this.b))},
$S:0}
B.dXy.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dXI.prototype={
$0(){var w=this.a
return w.m(new B.dXx(w))},
$S:0}
B.dXx.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dXJ.prototype={
$0(){var w=this.a
return w.m(new B.dXG(w))},
$S:0}
B.dXG.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dXN.prototype={
$0(){var w=this.a
return w.m(new B.dXF(w))},
$S:0}
B.dXF.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dXO.prototype={
$1(d){var w=this.a
return w.m(new B.dXE(w,d))},
$S:6}
B.dXE.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dXP.prototype={
$0(){var w=this.a
return w.m(w.gcwe())},
$S:0}
B.dXQ.prototype={
$1(d){var w=this.a
return w.m(new B.dXD(w,d))},
$S:6}
B.dXD.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dXR.prototype={
$1(d){var w=this.a
return w.m(new B.dXC(w,d))},
$S:6}
B.dXC.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dXS.prototype={
$1(d){var w=this.a
return w.m(new B.dXB(w,d))},
$S:6}
B.dXB.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dXT.prototype={
$1(d){var w=this.a
return w.m(new B.dXA(w,d))},
$S:6}
B.dXA.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dXU.prototype={
$0(){var w=this.a
return w.m(new B.dXz(w))},
$S:0}
B.dXz.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dXK.prototype={
$0(){var w=this.a
return w.m(new B.dXw(w))},
$S:0}
B.dXw.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dXL.prototype={
$0(){var w=this.a
return w.m(new B.dXv(w))},
$S:0}
B.dXv.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dXM.prototype={
$0(){var w=this.a
return w.m(new B.dXu(w))},
$S:0}
B.dXu.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dXr.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bZ(0,C.c_(g,new C.o(D.bhw,g,g,C.n(20),g,g,A.n),A.bf),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.yX[q]
n=C.b0(o.d)
o=C.x(C.a([new C.y(o.a,g,new C.H(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.y(C.u(D.yX[q].b)+" m/s\xb2",g,D.feF,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.dm,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.X(X.Nu,C.b0(D.yX[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b0(D.yX[q].d),g,g,g,C.a([new C.ac(0,A.G,C.b0(D.yX[q].d).j(0.6),A.J,10)],u),g,A.a5),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b0(D.yX[q].d).j(0.6),g,g,g,3,g,A.fr,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.aa(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cL(p,8,g,g,f,g,o,g),new C.cL(n-0.5,54,g,e,g,g,m,g),new C.cL(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cL(p,g,g,8,f,g,C.x(C.a([j,A.au,new C.y(i,g,A.rW,g,g,g,g,g,g,g,g,g),new C.y(h,g,D.f6R,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d6(v,new B.dXq()))a1.push(D.b5Y)
return new C.an(A.W,g,A.aa,A.r,a1,g)},
$S:65}
B.dXq.prototype={
$1(d){return d==null},
$S:364}
B.dXt.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.n(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.df(v,v,v,v,A.bc,new C.o(v,v,v,C.n(8),v,new C.a8(A.a3,A.a8,A.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),A.n),A.ih,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.aa(r,1):B.GO(r)
u=u.ax*9.81/s
u=u<10?A.k.aa(u,2):A.k.aa(u,0)
return new C.an(A.W,v,A.aa,A.r,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.fd_,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:65}
B.dXp.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new B.baq(new C.v(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.aw)
o=A.w.j(0.55)
p=C.n(14)
q=C.I(A.bE,A.q,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.b2
else u=A.a.t(u,"escapes")?A.aN:A.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.aa(Math.sqrt(58.86870477034412),1)
s=A.k.aa(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+B.GO(A.k.D(r.cx.gcn()-6371,0,9e9))+" km":""
w=x.p
return new C.an(A.W,v,A.b1,A.r,C.a([n,C.ao(v,C.p(v,C.x(C.a([u,A.bC,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aRE,v,v,v)],w),A.F,v,A.e,A.N,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bR,v,v,v),v,v,12,12,8,v)],w),v)},
$S:65}
B.erL.prototype={
$0(){return B.qU(this.b,this.a.d,"size-compare")},
$S:0}
B.erM.prototype={
$0(){var w=this.a
return w.m(new B.erK(w,this.b))},
$S:0}
B.erK.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.erN.prototype={
$0(){var w=this.a
return w.m(new B.erJ(w,this.b))},
$S:0}
B.erJ.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eZl.prototype={
$3(d,e,f){var w,v,u=this.a
$.W()
w=C.N()
w.r=f.j(0.2).gp(0)
w.z=new C.hC(A.G,Math.max(2,e*0.18))
u.af(d,e*1.12,w)
w=C.N()
v=C.aq(f,A.w,0.6)
v.toString
w.sar(new C.bT(P.ps,0.5,A.x,null,0,C.a([A.c,f,v],x.O),I.a2v,null).av(0,C.bU(d,e)))
u.af(d,e,w)},
$S:724}
B.dF_.prototype={
$1(d){return d.e<=0},
$S:z+89}
B.dEO.prototype={
$1(d){return d.b},
$S:z+60}
B.dEP.prototype={
$0(){return B.qU(this.b,this.a.d,"black-hole")},
$S:0}
B.dEQ.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.Q=o
o=C.aC(A.c7,C.b3(q,q,q,new B.b9P(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dEM(p),q,q,q,q,q,q,q,q,q,new B.dEN(p),q,q,q,q,!1,A.a7)
w=A.w.j(0.55)
v=C.n(14)
u=C.I(A.bE,A.q,1)
t=p.r
if(t<1000)t=A.k.aa(t,t<10?1:0)+" Suns"
else t=B.fvb(t)+" Suns"
t=p.aew("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.B(C.a([t,p.aew("EDGE WIDTH",(s<100?A.k.aa(s,1):B.GO(s))+" km"),p.aew("TIME",A.k.aa(this.b*100,0)+"%"),p.aew("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bR,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.ehV)
return new C.ex(new C.an(A.W,q,A.b1,A.r,r,q),p.d)},
$S:179}
B.dEN.prototype={
$1(d){return this.a.aZT(d.b)},
$S:23}
B.dEM.prototype={
$1(d){if(A.cG.aj()<0.12)this.a.aZT(d.b)},
$S:18}
B.dES.prototype={
$1(d){var w=this.a
return w.m(new B.dEL(w,d))},
$S:6}
B.dEL.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dET.prototype={
$0(){var w=this.a
return w.m(new B.dEK(w))},
$S:0}
B.dEK.prototype={
$0(){return this.a.r=10},
$S:0}
B.dEU.prototype={
$0(){var w=this.a
return w.m(new B.dEJ(w))},
$S:0}
B.dEJ.prototype={
$0(){return this.a.r=21},
$S:0}
B.dEV.prototype={
$0(){var w=this.a
return w.m(new B.dEI(w))},
$S:0}
B.dEI.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dEW.prototype={
$0(){var w=this.a
return w.m(new B.dEH(w))},
$S:0}
B.dEH.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dEX.prototype={
$0(){var w=this.a
return w.m(new B.dEG(w))},
$S:0}
B.dEG.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dEY.prototype={
$0(){var w=this.a
return w.m(new B.dEF(w))},
$S:0}
B.dEF.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dEZ.prototype={
$0(){var w=this.a
return w.m(new B.dEE(w))},
$S:0}
B.dEE.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dER.prototype={
$0(){var w=this.a
return w.m(new B.dED(w))},
$S:0}
B.dED.prototype={
$0(){var w=this.a
A.d.a8(w.z)
w.as=0},
$S:0}
B.dW_.prototype={
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
$S:1884}
B.dVQ.prototype={
$0(){return B.qU(this.b,this.a.d,"galaxy")},
$S:0}
B.dVR.prototype={
$0(){var w=this.a
return w.m(new B.dVP(w,this.b))},
$S:0}
B.dVP.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.ZU()},
$S:0}
B.dVS.prototype={
$0(){var w=this.a
return w.m(new B.dVO(w))},
$S:0}
B.dVO.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.ZU()}w.cw5()},
$S:0}
B.dVT.prototype={
$1(d){var w=this.a
return w.m(new B.dVN(w,d))},
$S:6}
B.dVN.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.ZU()},
$S:0}
B.dVU.prototype={
$1(d){var w=this.a
return w.m(new B.dVM(w,d))},
$S:6}
B.dVM.prototype={
$0(){var w=this.a
w.r=this.b
w.ZU()},
$S:0}
B.dVV.prototype={
$1(d){var w=this.a
return w.m(new B.dVL(w,d))},
$S:6}
B.dVL.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dVW.prototype={
$1(d){var w=this.a
return w.m(new B.dVK(w,d))},
$S:6}
B.dVK.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dVX.prototype={
$0(){var w=this.a
return w.m(new B.dVJ(w))},
$S:0}
B.dVJ.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dVY.prototype={
$0(){var w=this.a
return w.m(new B.dVI(w))},
$S:0}
B.dVI.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dVZ.prototype={
$0(){var w=this.a
return w.m(new B.dVH(w))},
$S:0}
B.dVH.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dau.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new C.v((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1885}
B.er_.prototype={
$0(){return B.qU(this.b,this.a.d,"seasons-moon")},
$S:0}
B.er0.prototype={
$0(){var w=this.a
return w.m(new B.eqZ(w))},
$S:0}
B.eqZ.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.er1.prototype={
$0(){var w=this.a
return w.m(new B.eqY(w))},
$S:0}
B.eqY.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.er2.prototype={
$0(){var w=this.a
return w.m(new B.eqX(w))},
$S:0}
B.eqX.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.er3.prototype={
$0(){var w=this.a
return w.m(new B.eqW(w))},
$S:0}
B.eqW.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.er4.prototype={
$1(d){var w=this.a
return w.m(new B.eqV(w,d))},
$S:6}
B.eqV.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.er5.prototype={
$1(d){var w=this.a
return w.m(new B.eqU(w,d))},
$S:6}
B.eqU.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.er6.prototype={
$1(d){var w=this.a
return w.m(new B.eqT(w,d))},
$S:6}
B.eqT.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.er7.prototype={
$1(d){var w=this.a
return w.m(new B.eqS(w,d))},
$S:6}
B.eqS.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aLW.prototype
w.bvN=w.q
w=B.aKY.prototype
w.buN=w.q
w=B.aKZ.prototype
w.buO=w.q
w=B.aL3.prototype
w.buT=w.q
w=B.aMN.prototype
w.bwL=w.q
w=B.aLU.prototype
w.bvL=w.q
w=B.aM2.prototype
w.bvU=w.q
w=B.aM8.prototype
w.bw_=w.q
w=B.aL1.prototype
w.buR=w.q
w=B.aLR.prototype
w.bvI=w.q
w=B.aM5.prototype
w.bvX=w.q
w=B.aLP.prototype
w.bvG=w.q
w=B.aLQ.prototype
w.bvH=w.q
w=B.aLf.prototype
w.bv5=w.q
w=B.aKU.prototype
w.buJ=w.q
w=B.aLn.prototype
w.bvd=w.q
w=B.axq.prototype
w.brV=w.q
w=B.axr.prototype
w.brW=w.q
w=B.aJq.prototype
w.btb=w.q
w=B.aLc.prototype
w.bv1=w.q
w=B.aLE.prototype
w.bvv=w.q
w=B.aLF.prototype
w.bvw=w.q
w=B.aL_.prototype
w.buP=w.q
w=B.aLi.prototype
w.bv8=w.q
w=B.aLN.prototype
w.bvE=w.q
w=B.aMg.prototype
w.bw7=w.q
w=B.aLo.prototype
w.bvf=w.q
w=B.aLp.prototype
w.bvg=w.q
w=B.aLq.prototype
w.bvh=w.q
w=B.aLZ.prototype
w.bvQ=w.q
w=B.aM1.prototype
w.bvT=w.q
w=B.aKX.prototype
w.buM=w.q
w=B.aLl.prototype
w.bvb=w.q
w=B.aLY.prototype
w.bvP=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aE4.prototype,"gaw6","c44",0)
var r
v(r=B.aCu.prototype,"gccp","ccq",35)
w(r,"gc4A","aYb",0)
w(B.aCx.prototype,"gc6h","c6i",0)
u(B.aCO.prototype,"gc6n","c6o",52)
w(r=B.aH4.prototype,"gcvM","cvN",0)
w(r,"gcj7","afW",0)
w(r,"gcgP","cgQ",0)
w(r,"gc6m","adx",3)
w(r=B.aE3.prototype,"gbGz","a93",3)
w(r,"gcg6","b0y",0)
w(r,"gcjQ","ag3",3)
t(r,"gc6q","ady",3)
w(B.aEj.prototype,"gbXV","bXW",0)
w(r=B.aDW.prototype,"gcvG","cvH",0)
w(r,"gbGU","bGV",0)
w(r=B.aCw.prototype,"gb4N","azI",0)
v(r,"gc6w","Zh",54)
w(r,"gc6v","adA",3)
v(r=B.aDV.prototype,"gclP","ayq",58)
v(r,"gcse","azD",15)
w(r,"gbKU","aQL",0)
v(r=B.aDT.prototype,"gcCW","aj7",15)
t(r,"gc6Q","awE",0)
w(r,"gcob","coc",0)
v(r=B.aD_.prototype,"gc6R","c6S",90)
w(r,"gc6T","c6U",0)
t(r=B.a4j.prototype,"grG","a8",0)
v(r,"gcSM","amT",1)
v(r,"gcPh","LC",1)
w(r,"gcUX","bhS",0)
s(B.aiy.prototype,"gc6Y",0,5,null,["$5"],["qk"],64,0,0)
w(r=B.aD0.prototype,"gc6Z","c7_",0)
w(r,"gcmF","agq",3)
w(r,"gccF","aeJ",3)
w(r,"gctQ","ahw",3)
w(r=B.aDF.prototype,"gc7f","awJ",0)
w(r,"gc7g","aZ9",0)
w(r=B.aEw.prototype,"gc8d","c8e",0)
t(r,"gc8b","aZv",0)
w(B.aDP.prototype,"gbJr","arW",0)
t(B.aEa.prototype,"gc8f","c8g",0)
v(r=B.aDb.prototype,"gc8V","c8W",78)
w(r,"gbOr","bOs",0)
w(r=B.aDc.prototype,"gcwe","cwf",0)
w(r,"gc9_","c90",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aD,[B.ajL,B.G3,B.uR,B.aRR,B.a2Y,B.b9S,B.c0J,B.y3,B.Ck,B.no,B.baA,B.Ax,B.bsr,B.q7,B.qM,B.Co,B.Z9,B.aeD,B.a0o,B.Cy,B.abw,B.abN,B.adJ,B.FP,B.bli,B.PN,B.a_G,B.abD,B.ac5,B.FL,B.acV,B.adq,B.tl,B.b9s,B.aRH,B.ed,B.ty,B.aab,B.abi,B.a4j,B.mB,B.baB,B.fO,B.m8,B.aWj,B.btM,B.aHV,B.mE,B.aaY,B.aaZ,B.v5,B.P1,B.y1,B.P0,B.btH,B.Pv,B.aeI])
u(C.i_,[B.fxv,B.fnw,B.fuh,B.fui,B.fxs,B.fxt,B.e86,B.e8p,B.eov,B.eo2,B.eo3,B.eo4,B.eo5,B.eo6,B.eo7,B.eo8,B.eo9,B.eo0,B.eo1,B.eo_,B.eoq,B.eor,B.eos,B.dF4,B.dF6,B.dF9,B.dFk,B.c0K,B.c0L,B.fhd,B.fhe,B.fhf,B.fhm,B.fhn,B.fho,B.dHC,B.dHj,B.dHD,B.dHe,B.dH9,B.dHb,B.dHh,B.dHu,B.dHs,B.dHt,B.dHr,B.dHo,B.dHq,B.eYQ,B.eYx,B.eYE,B.eYN,B.eYr,B.dhk,B.dhl,B.dhh,B.dhi,B.dhj,B.dhm,B.dhn,B.dho,B.dhp,B.dhq,B.dhr,B.dhs,B.dht,B.dhu,B.enr,B.ens,B.ent,B.enu,B.enp,B.enq,B.enW,B.eny,B.enA,B.enk,B.enS,B.enQ,B.enR,B.enP,B.enO,B.enm,B.ezB,B.ezz,B.ezn,B.ezr,B.ezm,B.ezs,B.ezt,B.ezx,B.eGc,B.eGi,B.ek1,B.ek2,B.ejO,B.ejP,B.ejN,B.ejS,B.ejU,B.ejV,B.eFC,B.eFD,B.eFB,B.eFp,B.eFq,B.eFo,B.eFh,B.eFi,B.eFw,B.eFx,B.eFy,B.eFz,B.eFA,B.dGL,B.dGM,B.dGN,B.dGE,B.dGH,B.cLP,B.efv,B.efU,B.efz,B.efH,B.efI,B.efG,B.efP,B.ejv,B.ejA,B.eiU,B.eiC,B.eiO,B.eiM,B.eiK,B.eiL,B.eiJ,B.dPv,B.dPj,B.dPl,B.dPt,B.dPo,B.dSk,B.dSc,B.dSd,B.dSe,B.d4x,B.d4z,B.d4y,B.dD8,B.dD9,B.dD1,B.dD_,B.cEm,B.dWn,B.dWo,B.dWj,B.dWk,B.dcx,B.dcy,B.dH7,B.dGQ,B.dGZ,B.dH_,B.dH4,B.dH5,B.bMf,B.bMq,B.bMl,B.bMr,B.bMt,B.bMg,B.bMe,B.bMy,B.bMm,B.bMp,B.bMo,B.bMn,B.bH9,B.fJ7,B.fJa,B.fJ8,B.bGR,B.bGM,B.bGL,B.bH8,B.bH0,B.bH1,B.bH_,B.bH2,B.bGB,B.bGD,B.bGz,B.bGA,B.bGr,B.bGs,B.fhp,B.fhq,B.fhr,B.fhc,B.fhs,B.fhb,B.fht,B.fhg,B.fha,B.fhh,B.fh9,B.fhi,B.fh8,B.fhj,B.fh6,B.fh7,B.fhk,B.fh4,B.fh5,B.fhl,B.fh3,B.dSB,B.dSC,B.dSr,B.dSn,B.dSA,B.dSF,B.cBT,B.fNO,B.fNP,B.eb4,B.eaX,B.dhD,B.dhG,B.ebn,B.eb8,B.ebi,B.ebj,B.ebk,B.cfG,B.eKC,B.dRY,B.dRZ,B.dS_,B.dS1,B.egO,B.eFV,B.eG3,B.eG_,B.eG1,B.efm,B.efn,B.efo,B.fRD,B.csB,B.dXo,B.dWO,B.dWN,B.dWZ,B.dX_,B.dWY,B.dX0,B.dXi,B.dXj,B.dXk,B.eGL,B.eyZ,B.ez_,B.ez0,B.ez5,B.ez6,B.eyQ,B.f0c,B.f0d,B.dXV,B.dXO,B.dXQ,B.dXR,B.dXS,B.dXT,B.dXq,B.eZl,B.dF_,B.dEO,B.dEN,B.dEM,B.dES,B.dW_,B.dVT,B.dVU,B.dVV,B.dVW,B.dau,B.er4,B.er5,B.er6,B.er7])
u(C.km,[B.fxu,B.e8b,B.e89,B.eob,B.eoo,B.dHa,B.dHx,B.dNt,B.eYT,B.eYU,B.eYw,B.eYJ,B.eYK,B.eYF,B.eYL,B.eYq,B.enn,B.eno,B.enV,B.enN,B.enC,B.eGb,B.ejR,B.eFs,B.dGD,B.dGI,B.efL,B.ejz,B.fxM,B.eiG,B.eiD,B.eiQ,B.dpq,B.bFY,B.frZ,B.dCW,B.dD3,B.bMs,B.bMu,B.bMw,B.bMh,B.bMj,B.bHa,B.cl4,B.fJ9,B.bGK,B.bH6,B.bH5,B.dSz,B.cBU,B.dOn,B.dOl,B.dOf,B.eaZ,B.dhE,B.dhF,B.ebh,B.cfJ,B.dFy,B.dFt,B.egQ,B.dXa,B.dWL,B.ddn,B.eGQ,B.ez2,B.eyP,B.dXr,B.dXt,B.dXp,B.dEQ])
u(C.ag,[B.Vl,B.VN,B.Ub,B.Uh,B.Ne,B.aH3,B.VM,B.W0,B.Wc,B.VJ,B.W7,B.Uf,B.VD,B.VI,B.VG,B.UE,B.UU,B.U6,B.V7,B.Ug,B.aiw,B.UV,B.ax7,B.UC,B.Vq,B.Vs,B.Wi,B.V1,B.Uc,B.UT,B.VE,B.VR,B.Wb,B.VC,B.V8,B.We,B.W_,B.V9,B.VS,B.Ua,B.V5,B.VO])
u(C.ah,[B.bjM,B.aLW,B.aKY,B.aL3,B.aCO,B.aMN,B.aLU,B.aM2,B.aM8,B.aLR,B.aM5,B.aL1,B.aLP,B.aLQ,B.aDT,B.bjg,B.aLf,B.aKU,B.aLn,B.bj7,B.axq,B.bwS,B.aJq,B.aLc,B.aLE,B.aLF,B.aMg,B.aLi,B.aL_,B.bjh,B.aDP,B.aEa,B.bkv,B.aLN,B.aLo,B.bkz,B.aM1,B.aLq,B.aLZ,B.aKX,B.aLl,B.aLY])
u(C.ja,[B.e84,B.e85,B.e8h,B.e8i,B.e8d,B.e8c,B.e8e,B.e8a,B.e8f,B.e88,B.e8g,B.e87,B.e8l,B.e8k,B.e8m,B.e8j,B.e8n,B.e8o,B.e8q,B.eou,B.eow,B.eox,B.eod,B.eoc,B.eoa,B.eoj,B.eok,B.eog,B.eol,B.eof,B.eom,B.eon,B.eoe,B.eop,B.eoi,B.eot,B.eoh,B.dFr,B.dFq,B.dF3,B.dFs,B.dF5,B.dF7,B.dF8,B.dFa,B.dF0,B.dF1,B.dF2,B.dFh,B.dFi,B.dFj,B.dFg,B.dFl,B.dFf,B.dFm,B.dFe,B.dFn,B.dFd,B.dFo,B.dFc,B.dFp,B.dFb,B.dHg,B.dHf,B.dHk,B.dHc,B.dHd,B.dHl,B.dHm,B.dHn,B.dHi,B.dH8,B.dHw,B.dHv,B.dHy,B.dHz,B.dHA,B.dHp,B.dHB,B.cMh,B.dNr,B.dNq,B.dNs,B.fhE,B.fhF,B.fhG,B.fhR,B.fhT,B.fhU,B.fhV,B.fhW,B.fhX,B.fhY,B.fhZ,B.fhH,B.fhI,B.fhJ,B.fhK,B.fhL,B.fhM,B.fhN,B.fhO,B.fhP,B.fhQ,B.fhS,B.eYS,B.eYR,B.eYz,B.eYy,B.eYu,B.eYt,B.eYv,B.eYs,B.eYH,B.eYG,B.eYI,B.eYA,B.eYM,B.eYD,B.eYO,B.eYC,B.eYP,B.eYB,B.enw,B.enl,B.env,B.enh,B.enx,B.enz,B.eni,B.enj,B.enU,B.enT,B.enK,B.enL,B.enM,B.enG,B.enH,B.enF,B.enI,B.enE,B.enJ,B.enD,B.enB,B.dhg,B.ezA,B.ezc,B.ezb,B.ezl,B.ezu,B.ezk,B.ezv,B.ezj,B.ezw,B.ezi,B.ezh,B.ezy,B.ezg,B.ezo,B.ezf,B.ezp,B.eze,B.ezq,B.ezd,B.eGa,B.eG9,B.eGd,B.eG8,B.eGe,B.eG7,B.eGf,B.eG6,B.eGg,B.eG5,B.eGh,B.eG4,B.ejQ,B.ejM,B.ejL,B.ejK,B.ejW,B.ejJ,B.ejX,B.ejI,B.ejY,B.ejH,B.ejZ,B.ek_,B.ek0,B.ejG,B.ejT,B.eFr,B.eFg,B.eFt,B.eFn,B.eFu,B.eFm,B.eFv,B.eFl,B.eFk,B.eFj,B.eFf,B.eFe,B.eFd,B.dGK,B.dGB,B.dGC,B.dGF,B.dGG,B.dGJ,B.efJ,B.efA,B.efK,B.efM,B.efF,B.efN,B.efE,B.efO,B.efD,B.efC,B.efQ,B.efB,B.efR,B.efy,B.efS,B.efx,B.efT,B.efw,B.ejp,B.ejq,B.ejx,B.ejw,B.ejy,B.eju,B.ejB,B.ejt,B.ejC,B.ejs,B.ejD,B.ejE,B.ejr,B.ejF,B.eiT,B.eiA,B.eiB,B.eiF,B.eiE,B.eiP,B.eiN,B.eiH,B.eiR,B.eiI,B.eiS,B.dPu,B.dPk,B.dPi,B.dPp,B.dPn,B.dPq,B.dPm,B.dPr,B.dPs,B.dSj,B.dS7,B.dS6,B.dS8,B.dSb,B.dSa,B.dS9,B.dSf,B.dSg,B.dSh,B.dSi,B.dD7,B.dD6,B.dCX,B.dD2,B.dD0,B.dD4,B.dCZ,B.dD5,B.dCY,B.dWm,B.dWl,B.dWd,B.dWh,B.dWg,B.dWi,B.dWf,B.dWe,B.dH6,B.dGY,B.dGX,B.dH0,B.dGW,B.dH1,B.dGV,B.dH2,B.dGU,B.dH3,B.dGT,B.dGS,B.dGR,B.bMv,B.bMx,B.bMi,B.bMk,B.bGO,B.bGP,B.bGN,B.bGQ,B.bGS,B.bGE,B.bGF,B.bGG,B.bGH,B.bGI,B.bGJ,B.bH7,B.bGh,B.bGY,B.bGZ,B.bGW,B.bGX,B.bGU,B.bGV,B.bH3,B.bGT,B.bH4,B.bGi,B.bGC,B.bGo,B.bGp,B.bGn,B.bGq,B.bGm,B.bGt,B.bGu,B.bGv,B.bGw,B.bGl,B.bGx,B.bGk,B.bGy,B.bGj,B.dSs,B.dSD,B.dSE,B.dSq,B.dSp,B.dSo,B.dSx,B.dSv,B.dSw,B.dSy,B.dSt,B.dSu,B.dSG,B.dSH,B.dSI,B.dSJ,B.dSK,B.dOo,B.dOm,B.dOk,B.dOj,B.dOi,B.dOh,B.dOg,B.dOc,B.dOb,B.dOe,B.dOd,B.eb3,B.eb5,B.eaV,B.eaW,B.eaY,B.eb_,B.eb0,B.eb1,B.eb2,B.ebm,B.ebo,B.ebe,B.eba,B.ebf,B.ebg,B.eb9,B.ebd,B.ebc,B.ebb,B.ebl,B.fi6,B.fi7,B.fi8,B.fi9,B.fia,B.fib,B.fic,B.fid,B.cfI,B.cfH,B.eKD,B.eKz,B.eKy,B.eKB,B.eKA,B.dUG,B.dUH,B.dUB,B.dUD,B.dUE,B.dUC,B.dUF,B.dFz,B.dFw,B.dFv,B.dFx,B.dFu,B.dRX,B.dRW,B.dRV,B.dRU,B.dS0,B.dRT,B.dRS,B.dS2,B.dRR,B.dS3,B.dRQ,B.dS4,B.dS5,B.dRP,B.egK,B.egL,B.egJ,B.egM,B.egI,B.egP,B.egR,B.egN,B.egS,B.erD,B.erE,B.erB,B.erC,B.erA,B.erF,B.erG,B.erH,B.erI,B.eFZ,B.eG0,B.eFY,B.eFX,B.eG2,B.eFW,B.efp,B.efq,B.efi,B.efh,B.efj,B.efg,B.efk,B.eff,B.efl,B.efe,B.efd,B.efc,B.efb,B.csC,B.csD,B.fRC,B.csy,B.csx,B.csE,B.csz,B.csA,B.cfE,B.dXn,B.dWR,B.dWP,B.dWQ,B.dWM,B.dX9,B.dWS,B.dWT,B.dXb,B.dWX,B.dXf,B.dX8,B.dXg,B.dX7,B.dXh,B.dX6,B.dX5,B.dX4,B.dX3,B.dXl,B.dX2,B.dXm,B.dX1,B.dXc,B.dWW,B.dXd,B.dWV,B.dXe,B.dWU,B.dWK,B.dWJ,B.ddm,B.fi_,B.fi0,B.fi1,B.fi2,B.fi3,B.fi4,B.fi5,B.eGO,B.eGP,B.eGN,B.eGM,B.eyR,B.ez1,B.ez3,B.eyY,B.ez4,B.eyX,B.eyW,B.ez7,B.eyV,B.ez8,B.eyU,B.ez9,B.eyT,B.eza,B.eyS,B.eyO,B.eyN,B.f0b,B.dXs,B.dXH,B.dXy,B.dXI,B.dXx,B.dXJ,B.dXG,B.dXN,B.dXF,B.dXE,B.dXP,B.dXD,B.dXC,B.dXB,B.dXA,B.dXU,B.dXz,B.dXK,B.dXw,B.dXL,B.dXv,B.dXM,B.dXu,B.erL,B.erM,B.erK,B.erN,B.erJ,B.dEP,B.dEL,B.dET,B.dEK,B.dEU,B.dEJ,B.dEV,B.dEI,B.dEW,B.dEH,B.dEX,B.dEG,B.dEY,B.dEF,B.dEZ,B.dEE,B.dER,B.dED,B.dVQ,B.dVR,B.dVP,B.dVS,B.dVO,B.dVN,B.dVM,B.dVL,B.dVK,B.dVX,B.dVJ,B.dVY,B.dVI,B.dVZ,B.dVH,B.er_,B.er0,B.eqZ,B.er1,B.eqY,B.er2,B.eqX,B.er3,B.eqW,B.eqV,B.eqU,B.eqT,B.eqS])
t(B.bx6,B.aLW)
t(B.aE4,B.bx6)
u(C.mO,[B.bgL,B.baT,B.brQ,B.b9z,B.bqu,B.bpW,B.bae,B.bpY,B.btW,B.bgJ,B.brL,B.bl5,B.bsD,B.baz,B.bhD,B.bl6,B.bik,B.bdE,B.b9E,B.bf7,B.aiy,B.b8M,B.buX,B.aew,B.bgO,B.bh2,B.bv8,B.bpX,B.blj,B.bfe,B.brJ,B.baq,B.brh,B.b9P,B.bf4,B.bqx])
t(B.aKZ,B.aKY)
t(B.aCu,B.aKZ)
t(B.bwQ,B.aL3)
t(B.aCx,B.bwQ)
u(C.mc,[B.Kj,B.a0b,B.Jg])
u(C.au,[B.bqS,B.aeN,B.adF,B.PW,B.brl,B.a8b,B.bd_,B.b6z,B.dB,B.eV,B.avy,B.fj,B.Ff])
t(B.aH4,B.aMN)
t(B.bgI,C.oQ)
t(B.aE3,B.aLU)
t(B.bkm,B.aM2)
t(B.aEj,B.aM8)
t(B.bx5,B.aLR)
t(B.aDW,B.bx5)
t(B.bxd,B.aM5)
t(B.bkr,B.bxd)
t(B.bwP,B.aL1)
t(B.aCw,B.bwP)
t(B.bx3,B.aLP)
t(B.bk0,B.bx3)
t(B.bx4,B.aLQ)
t(B.aDV,B.bx4)
t(B.aD_,B.aLf)
t(B.biV,B.aKU)
t(B.bjs,B.aLn)
t(B.axr,B.axq)
t(B.aix,B.axr)
t(B.aD0,B.bwS)
t(B.b8N,B.aJq)
t(B.bje,B.aLc)
t(B.bwX,B.aLE)
t(B.bjO,B.bwX)
t(B.bwY,B.aLF)
t(B.aDF,B.bwY)
t(B.bxe,B.aMg)
t(B.aEw,B.bxe)
t(B.bwT,B.aLi)
t(B.bjn,B.bwT)
t(B.bwO,B.aL_)
t(B.bj_,B.bwO)
t(B.bx2,B.aLN)
t(B.bjZ,B.bx2)
t(B.aLp,B.aLo)
t(B.aDb,B.aLp)
t(B.bxa,B.aM1)
t(B.bkl,B.bxa)
t(B.bwV,B.aLq)
t(B.aDc,B.bwV)
t(B.bx8,B.aLZ)
t(B.bki,B.bx8)
t(B.bwN,B.aKX)
t(B.biZ,B.bwN)
t(B.bwU,B.aLl)
t(B.bjq,B.bwU)
t(B.bx7,B.aLY)
t(B.bkh,B.bx7)
w(B.aLW,C.c9)
w(B.bx6,B.mE)
w(B.aKY,C.c9)
w(B.aKZ,B.mE)
w(B.aL3,C.c9)
w(B.bwQ,B.mE)
w(B.aMN,C.eW)
w(B.aLU,C.c9)
w(B.aM2,C.c9)
w(B.aM8,C.c9)
w(B.aL1,C.c9)
w(B.bwP,B.mE)
w(B.aLR,C.c9)
w(B.bx5,B.mE)
w(B.aM5,C.c9)
w(B.bxd,B.mE)
w(B.aLP,C.c9)
w(B.bx3,B.mE)
w(B.aLQ,C.c9)
w(B.bx4,B.mE)
w(B.aLf,C.c9)
w(B.aKU,C.c9)
w(B.aLn,C.c9)
w(B.axq,C.c9)
w(B.axr,B.mE)
w(B.aJq,C.c9)
v(B.bwS,C.eB)
w(B.aLc,C.c9)
w(B.aLE,C.c9)
w(B.bwX,B.mE)
w(B.aLF,C.c9)
w(B.bwY,B.mE)
w(B.aL_,C.c9)
w(B.bwO,B.mE)
w(B.aLi,C.c9)
w(B.bwT,B.mE)
w(B.aLN,C.c9)
w(B.bx2,B.mE)
w(B.aMg,C.c9)
w(B.bxe,B.mE)
w(B.aLo,C.c9)
w(B.aLp,B.mE)
w(B.aLq,C.c9)
w(B.bwV,B.mE)
w(B.aLZ,C.c9)
w(B.bx8,B.mE)
w(B.aM1,C.c9)
w(B.bxa,B.mE)
w(B.aKX,C.c9)
w(B.bwN,B.mE)
w(B.aLl,C.c9)
w(B.bwU,B.mE)
w(B.aLY,C.c9)
w(B.bx7,B.mE)})()
C.k0(b.typeUniverse,JSON.parse('{"Vl":{"ag":[],"t":[]},"bjM":{"ah":["Vl"]},"VN":{"ag":[],"t":[]},"aE4":{"ah":["VN"]},"bgL":{"aB":[]},"Ub":{"ag":[],"t":[]},"aCu":{"ah":["Ub"]},"Uh":{"ag":[],"t":[]},"aCx":{"ah":["Uh"]},"baT":{"aB":[]},"aeN":{"au":[],"t":[]},"adF":{"au":[],"t":[]},"aH3":{"ag":[],"t":[]},"Ne":{"ag":[],"t":[]},"aCO":{"ah":["Ne"]},"bqS":{"au":[],"t":[]},"PW":{"au":[],"t":[]},"brQ":{"aB":[]},"brl":{"au":[],"t":[]},"b9z":{"aB":[]},"aH4":{"ah":["aH3"]},"bqu":{"aB":[]},"bpW":{"aB":[]},"bae":{"aB":[]},"bpY":{"aB":[]},"btW":{"aB":[]},"VM":{"ag":[],"t":[]},"bgI":{"aB":[]},"aE3":{"ah":["VM"]},"bgJ":{"aB":[]},"W0":{"ag":[],"t":[]},"Wc":{"ag":[],"t":[]},"bkm":{"ah":["W0"]},"brL":{"aB":[]},"aEj":{"ah":["Wc"]},"VJ":{"ag":[],"t":[]},"W7":{"ag":[],"t":[]},"Uf":{"ag":[],"t":[]},"aDW":{"ah":["VJ"]},"bl5":{"aB":[]},"bkr":{"ah":["W7"]},"bsD":{"aB":[]},"aCw":{"ah":["Uf"]},"baz":{"aB":[]},"VD":{"ag":[],"t":[]},"VI":{"ag":[],"t":[]},"bk0":{"ah":["VD"]},"bhD":{"aB":[]},"aDV":{"ah":["VI"]},"bl6":{"aB":[]},"VG":{"ag":[],"t":[]},"UE":{"ag":[],"t":[]},"UU":{"ag":[],"t":[]},"aDT":{"ah":["VG"]},"bik":{"aB":[]},"bjg":{"ah":["UE"]},"aD_":{"ah":["UU"]},"bdE":{"aB":[]},"U6":{"ag":[],"t":[]},"V7":{"ag":[],"t":[]},"Ug":{"ag":[],"t":[]},"biV":{"ah":["U6"]},"b9E":{"aB":[]},"bjs":{"ah":["V7"]},"bf7":{"aB":[]},"bj7":{"ah":["Ug"]},"aiy":{"aB":[]},"aiw":{"ag":[],"t":[]},"aix":{"ah":["aiw"]},"UV":{"ag":[],"t":[]},"ax7":{"ag":[],"t":[]},"aD0":{"ah":["UV"],"eB":[]},"b8N":{"ah":["ax7"]},"b8M":{"aB":[]},"UC":{"ag":[],"t":[]},"bje":{"ah":["UC"]},"buX":{"aB":[]},"aew":{"aB":[]},"Vq":{"ag":[],"t":[]},"Vs":{"ag":[],"t":[]},"bjO":{"ah":["Vq"]},"bgO":{"aB":[]},"aDF":{"ah":["Vs"]},"bh2":{"aB":[]},"a8b":{"au":[],"t":[]},"Wi":{"ag":[],"t":[]},"V1":{"ag":[],"t":[]},"Uc":{"ag":[],"t":[]},"UT":{"ag":[],"t":[]},"VE":{"ag":[],"t":[]},"VR":{"ag":[],"t":[]},"Wb":{"ag":[],"t":[]},"VC":{"ag":[],"t":[]},"aEw":{"ah":["Wi"]},"bv8":{"aB":[]},"bjn":{"ah":["V1"]},"bpX":{"aB":[]},"bj_":{"ah":["Uc"]},"bjh":{"ah":["UT"]},"blj":{"aB":[]},"aDP":{"ah":["VE"]},"aEa":{"ah":["VR"]},"bkv":{"ah":["Wb"]},"bjZ":{"ah":["VC"]},"bd_":{"au":[],"t":[]},"b6z":{"au":[],"t":[]},"dB":{"au":[],"t":[]},"eV":{"au":[],"t":[]},"avy":{"au":[],"t":[]},"fj":{"au":[],"t":[]},"Ff":{"au":[],"t":[]},"V8":{"ag":[],"t":[]},"aDb":{"ah":["V8"]},"bfe":{"aB":[]},"We":{"ag":[],"t":[]},"bkz":{"ah":["We"]},"W_":{"ag":[],"t":[]},"V9":{"ag":[],"t":[]},"VS":{"ag":[],"t":[]},"bkl":{"ah":["W_"]},"brJ":{"aB":[]},"aDc":{"ah":["V9"]},"baq":{"aB":[]},"bki":{"ah":["VS"]},"brh":{"aB":[]},"Ua":{"ag":[],"t":[]},"V5":{"ag":[],"t":[]},"VO":{"ag":[],"t":[]},"biZ":{"ah":["Ua"]},"b9P":{"aB":[]},"bjq":{"ah":["V5"]},"bf4":{"aB":[]},"bkh":{"ah":["VO"]},"bqx":{"aB":[]}}'))
C.Kk(b.typeUniverse,JSON.parse('{"mE":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.ax
return{x:w("lZ<w?>"),e8:w("d5"),G:w("w"),l:w("bk<m,m>"),J:w("bk<m,L>"),I:w("bk<m,G>"),R:w("dD<m>"),Z:w("a0"),M:w("O<dc>"),f5:w("O<a2U>"),gh:w("O<aRH>"),h:w("O<a2Y>"),V:w("O<ac>"),O:w("O<w>"),ey:w("O<S>"),dh:w("O<HB>"),aJ:w("O<aA<aD>>"),w:w("O<a0>"),Q:w("O<ai<w>>"),B:w("O<ai<HB>>"),gO:w("O<ai<ai<L>>>"),bj:w("O<ai<m>>"),b:w("O<ai<L>>"),fA:w("O<ai<G?>>"),D:w("O<a5<m,aD>>"),g:w("O<v>"),bz:w("O<ty>"),ds:w("O<a8y>"),v:w("O<hv>"),U:w("O<+(v,L)>"),ev:w("O<+(v,G)>"),K:w("O<+(m,m)>"),fT:w("O<+(L,t)>"),E:w("O<+(G,m)>"),u:w("O<+(G,G)>"),c:w("O<+(m,m,a0)>"),e:w("O<+(m,L,L,G)>"),o:w("O<+(m,G,m,G)>"),d:w("O<+(m,m,L,L,a5<m,L>)>"),_:w("O<uR>"),q:w("O<cR>"),fQ:w("O<aab>"),s:w("O<m>"),cF:w("O<as>"),X:w("O<wh>"),F:w("O<aaY>"),p:w("O<t>"),bL:w("O<abi>"),fH:w("O<ll>"),aq:w("O<b9s>"),a_:w("O<abw>"),cS:w("O<abD>"),cB:w("O<no>"),ba:w("O<abN>"),d9:w("O<Pv>"),bi:w("O<ac5>"),eW:w("O<Co>"),fY:w("O<Z9>"),aX:w("O<FL>"),ea:w("O<acV>"),gB:w("O<adq>"),ed:w("O<PN>"),g4:w("O<bli>"),aS:w("O<a_G>"),ac:w("O<adJ>"),cd:w("O<Cy>"),fr:w("O<aeD>"),e4:w("O<a0o>"),r:w("O<aeI>"),au:w("O<aHV>"),f7:w("O<R>"),n:w("O<L>"),t:w("O<G>"),dS:w("O<aB?>"),fs:w("O<ty?>"),d4:w("O<m?>"),bN:w("O<G?>"),gJ:w("cs<aix>"),A:w("cs<ah<ag>>"),bF:w("ai<w>"),gl:w("ai<S>"),ew:w("ai<aD>"),j:w("ai<@>"),bW:w("ai<G>"),a:w("a5<m,@>"),f:w("a5<@,@>"),bd:w("M<ed,m>"),dv:w("M<m,m>"),fR:w("M<+(L,t),t>"),m:w("iE"),gA:w("zc"),gD:w("vS"),P:w("cr"),C:w("aD"),W:w("ty"),dV:w("ed"),g7:w("C5"),N:w("m"),bO:w("as"),k:w("kk"),Y:w("bq<L>"),cL:w("aaZ"),gj:w("cx<m>"),aC:w("cx<G?>"),dg:w("ea<qM>"),e3:w("b9S"),a2:w("Ck"),f3:w("qM"),es:w("FP"),gV:w("n2"),y:w("R"),i:w("L"),z:w("@"),S:w("G"),L:w("ai<@>?"),fF:w("a5<@,@>?"),cK:w("aD?"),az:w("q0?"),T:w("m?"),cD:w("L?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aXN=new C.dc(0,0.85)
D.fDT=new C.y("Tap once to start the chain",null,K.U2,null,null,null,null,null,null,null,null,null)
D.aXl=new C.bI(D.aXN,null,null,D.fDT,null)
D.aXD=new C.dc(0,0.1)
D.aYH=new B.aRR(0,0,0)
D.Ko=new B.aRR(0,0.5,0)
D.aZf=new C.az(A.b2,1,A.q,-1)
D.b_I=new C.aY(0,1/0,0,290)
D.b_P=new C.aY(16,1/0,16,1/0)
D.b12=new C.o(A.bd,null,null,null,null,null,A.a5)
D.f4I=new C.H(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGg=new C.y("\u26a1",null,D.f4I,null,null,null,null,null,null,null,null,null)
D.b5u=new C.cp(A.A,null,null,D.fGg,null)
D.aQX=new C.H(!0,A.bX,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw4=new C.y("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aQX,null,A.L,null,null,null,null,null,null,null)
D.ebA=new C.D(A.o2,D.fw4,null)
D.b5D=new C.cp(A.A,null,null,D.ebA,null)
D.fzT=new C.y("Press Drop! and watch them fall from 20 metres.",null,A.kI,null,A.L,null,null,null,null,null,null,null)
D.ebE=new C.D(A.o2,D.fzT,null)
D.b5Y=new C.cp(A.A,null,null,D.ebE,null)
D.ffD=new C.H(!0,A.jj,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEG=new C.y("Draw anywhere",null,D.ffD,null,null,null,null,null,null,null,null,null)
D.b61=new C.cp(A.A,null,null,D.fEG,null)
D.fmg=new C.y("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aQX,null,A.L,null,null,null,null,null,null,null)
D.ecl=new C.D(A.FE,D.fmg,null)
D.b6k=new C.cp(A.A,null,null,D.ecl,null)
D.acu=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b8X=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b9I=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.Wj=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b9O=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b9T=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.b9Y=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.Wm=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bb3=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.bb8=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.bbu=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.bcD=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.adR=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.bd6=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.AK=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.bdV=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.aej=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.bey=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.beF=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.aeu=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.WZ=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.bf9=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.aeD=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.aeQ=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.X9=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bgU=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bgX=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bh0=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.bh9=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.afi=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.bhw=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.EX=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.biE=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.biM=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.biQ=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.bj0=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.bj4=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bjb=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.vn=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.ag3=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.bki=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.bl2=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.blv=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.blV=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.agu=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.bqx=new C.ba(11e6)
D.bry=new C.Q(0,0,8,6)
D.ahq=new C.Q(0,0,9,0)
D.bs5=new C.Q(10,0,10,4)
D.bsa=new C.Q(10,10,10,6)
D.bsi=new C.Q(10,34,10,26)
D.bsq=new C.Q(10,6,10,2)
D.YP=new C.Q(10,6,10,4)
D.bss=new C.Q(10,8,0,10)
D.bt2=new C.Q(12,8,8,8)
D.bt7=new C.Q(14,0,14,22)
D.bt9=new C.Q(14,0,14,30)
D.ahR=new C.Q(14,0,14,6)
D.ahY=new C.Q(14,10,8,12)
D.btG=new C.Q(14,8,14,6)
D.bu7=new C.Q(16,4,16,28)
D.buh=new C.Q(16,8,16,12)
D.bwm=new C.Q(26,12,26,58)
D.bxa=new C.Q(4,4,6,2)
D.bxc=new C.Q(4,4,8,2)
D.bxM=new C.Q(8,14,8,12)
D.bxT=new C.Q(8,40,8,30)
D.bxX=new C.Q(8,6,16,0)
D.bxY=new C.Q(8,6,8,8)
D.byi=new C.Q(0,0,1.5,0)
D.aYt=new C.H0(26,"saturation")
D.byA=new C.yU(A.cX,D.aYt,null,A.acs)
D.flm=new C.y("REACTION LAB",null,Y.aRx,null,null,null,null,A.a2,null,1,null,null)
D.byG=new C.bB(1,A.bh,D.flm,null)
D.fcu=new C.H(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fox=new C.y("CORE PROTOCOL",null,D.fcu,null,null,null,null,null,null,null,null,null)
D.byU=new C.bB(1,A.bh,D.fox,null)
D.fpf=new C.y("\ud83d\udce2 NGMY Ads",null,A.qx,null,null,null,null,A.eF,null,1,null,null)
D.bzC=new C.bB(1,A.bh,D.fpf,null)
D.fk5=new C.y("Wire selected",null,A.hu,null,null,null,null,null,null,null,null,null)
D.bzR=new C.bB(1,A.bh,D.fk5,null)
D.al8=new C.a0(62712,"MaterialIcons",!1)
D.bFh=new C.a0(62878,"MaterialIcons",!1)
D.a09=new C.a0(62908,"MaterialIcons",!1)
D.bFk=new C.a0(62918,"MaterialIcons",!1)
D.bFl=new C.a0(62931,"MaterialIcons",!1)
D.bFo=new C.a0(62951,"MaterialIcons",!1)
D.bFF=new C.a0(63064,"MaterialIcons",!1)
D.bFH=new C.a0(63070,"MaterialIcons",!1)
D.yf=new C.a0(63128,"MaterialIcons",!1)
D.Gq=new C.a0(63726,"MaterialIcons",!1)
D.bH0=new C.a0(983122,"MaterialIcons",!1)
D.bHf=new C.a0(983247,"MaterialIcons",!1)
D.bHr=new C.a0(983415,"MaterialIcons",!1)
D.bHs=new C.a0(983417,"MaterialIcons",!1)
D.bHt=new C.a0(983442,"MaterialIcons",!1)
D.bHu=new C.a0(983443,"MaterialIcons",!1)
D.amr=new C.a0(983467,"MaterialIcons",!1)
D.bHA=new C.a0(983501,"MaterialIcons",!1)
D.bHL=new C.a0(983616,"MaterialIcons",!1)
D.bHM=new C.a0(983624,"MaterialIcons",!1)
D.bHZ=new C.a0(983776,"MaterialIcons",!1)
D.bIf=new C.a0(984561,"MaterialIcons",!1)
D.bIQ=new C.ae(A.rj,24,A.aM,null,null,null)
D.bJA=new C.ae(A.NZ,null,A.ad,null,null,null)
D.bK7=new C.ae(A.mz,21,A.ad,null,null,null)
D.bH_=new C.a0(983117,"MaterialIcons",!1)
D.bLu=new C.ae(D.bH_,28,A.c,null,null,null)
D.bLK=new C.ae(A.jr,18,null,null,null,null)
D.bNw=new C.ae(A.e7,21,A.c9,null,null,null)
D.bNL=new C.ae(A.mA,null,A.ad,null,null,null)
D.bNV=new C.ae(A.a0Z,21,A.ad,null,null,null)
D.bOK=new C.ae(A.eE,17,A.ad,null,null,null)
D.anO=new C.ae(A.eE,19,null,null,null,null)
D.mE=new C.ae(A.vS,21,A.ad,null,null,null)
D.bQf=new C.ae(A.Nr,null,A.ad,null,null,null)
D.bRo=new C.ae(A.jr,21,A.ad,null,null,null)
D.bSf=new C.ae(A.fg,20,A.aA,null,null,null)
D.bSV=new C.ae(A.dX,null,A.aM,null,null,null)
D.bTf=new C.ae(A.k6,null,A.aA,null,null,null)
D.dfk=w([A.dc,A.d_,A.dc],x.O)
D.bWf=new C.a8(A.a3,A.a8,A.x,D.dfk,null,null)
D.cTH=w([A.bN,A.bm],x.O)
D.bWn=new C.a8(A.b0,A.b4,A.x,D.cTH,null,null)
D.bWz=new C.a8(A.b0,A.b4,A.x,A.ay_,null,null)
D.cU3=w([A.fW,A.f9],x.O)
D.bWI=new C.a8(A.b0,A.b4,A.x,D.cU3,null,null)
D.aoP=new C.a8(A.b0,A.b4,A.x,M.a2F,null,null)
D.cRt=w([A.oC,A.ic],x.O)
D.bXl=new C.a8(A.b0,A.b4,A.x,D.cRt,null,null)
D.cTp=w([A.ec,A.ax],x.O)
D.aoW=new C.a8(A.b0,A.b4,A.x,D.cTp,null,null)
D.d9t=w([A.dy,A.iX,A.bm],x.O)
D.bXE=new C.a8(A.a3,A.a8,A.x,D.d9t,null,null)
D.d9z=w([A.jk,A.ct],x.O)
D.bXY=new C.a8(A.b0,A.b4,A.x,D.d9z,null,null)
D.cqb=w([A.bN,A.dy],x.O)
D.bY6=new C.a8(A.a3,A.a8,A.x,D.cqb,null,null)
D.ayH=w([A.ec,L.ml],x.O)
D.bYd=new C.a8(A.b0,A.b4,A.x,D.ayH,null,null)
D.bYu=new C.a8(A.b0,A.b4,A.x,I.api,null,null)
D.bfg=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b8k=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cOP=w([D.bfg,D.b8k],x.O)
D.bYH=new C.a8(A.b0,A.b4,A.x,D.cOP,null,null)
D.bZh=new C.a8(A.az,A.aC,A.x,A.a2C,null,null)
D.bjJ=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.dkZ=w([D.bjJ,A.KV],x.O)
D.bZo=new C.a8(A.b0,A.b4,A.x,D.dkZ,null,null)
D.d1B=w([A.ax,A.w],x.O)
D.bZt=new C.a8(A.b0,A.b4,A.x,D.d1B,null,null)
D.bZw=new C.a8(A.b0,A.b4,A.x,T.ay3,null,null)
D.bj8=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bjT=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cCU=w([A.LK,D.bj8,D.bjT],x.O)
D.bZG=new C.a8(A.b0,A.b4,A.x,D.cCU,null,null)
D.cqv=w([A.d5,A.fA],x.O)
D.bZW=new C.a8(A.b0,A.b4,A.x,D.cqv,null,null)
D.c_1=new C.a8(A.az,A.aC,A.x,A.a3r,null,null)
D.apk=w([0,2,4,6,7,9,11],x.t)
D.c_E=w([0,4,7],x.t)
D.app=w([0,4,7,12],x.t)
D.c_F=w([0,4,7,4],x.t)
D.axL=w([A.h4,A.pM],x.O)
D.axh=w([A.hm,A.cT],x.O)
D.avG=w([A.bu,A.dR],x.O)
D.cLq=w([A.aM,A.d5],x.O)
D.cRP=w([A.c9,A.eK],x.O)
D.daM=w([A.bY,A.lI],x.O)
D.av7=w([A.cs,A.k_],x.O)
D.cQo=w([A.bK,A.aJ],x.O)
D.c_Z=w([D.axL,D.axh,A.a2K,D.avG,D.cLq,D.cRP,A.awO,D.daM,D.av7,D.cQo],x.Q)
D.c4D=w([120,220,380],x.t)
D.c8n=w([12,16,19,24],x.t)
D.c8x=w([1400,800,450,2400],x.t)
D.ccN=w([0,0.6,1],x.n)
D.cgW=w([250,450,900,1500],x.t)
D.b98=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bju=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bhy=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bmL=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bgK=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.auo=w([D.b98,D.bju,D.bhy,D.bmL,D.bgK],x.O)
D.eG5=new C.z("type","Typewriter")
D.eyC=new C.z("bounce","Bounce")
D.eGS=new C.z("wave","Wave")
D.eHY=new C.z("zoom","Zoom")
D.cxF=w([D.eG5,D.eyC,D.eGS,A.a6A,I.aMG,D.eHY,I.aMK],x.K)
D.cxT=w([50,25,75],x.t)
D.cDq=w([0,5,10,15,18,20,25],x.t)
D.eAg=new C.z("fish","Fish")
D.eAi=new C.z("fly","Fireflies")
D.eyA=new C.z("bird","Birds")
D.cHC=w([D.eAg,D.eAi,D.eyA],x.K)
D.cLG=w([900,500,250,1600],x.t)
D.cPb=w([0.78,1],x.n)
D.avH=w([0,2,4,7,9,12,14,16],x.t)
D.cPK=w([A.bu,A.bD,A.b8,A.bu],x.O)
D.avM=w(["A","T","C","G"],x.s)
D.cPL=w(["A","U","C","G"],x.s)
D.a2z=w([A.av,A.bH,A.bd,A.aN,A.nW],x.O)
D.cR8=w([A.ax,A.av,A.cs,A.bH,A.bd,A.cA,A.cb,A.bD,A.KV],x.O)
D.a2D=w([0.04,0.17,0.3],x.n)
D.cRL=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.Hb=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.ePZ=new B.uR("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eQ4=new B.uR("Medium engine","A good all-rounder.",0.3,0.9)
D.eQ3=new B.uR("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Hc=w([D.ePZ,D.eQ4,D.eQ3],x._)
D.eoj=new C.z(6,"Easy")
D.ep0=new C.z(8,"Medium")
D.ekh=new C.z(10,"Hard")
D.cSB=w([D.eoj,D.ep0,D.ekh],x.E)
D.aw5=w([0.55,0.78,1],x.n)
D.cU8=w([0.93,0.975,1],x.n)
D.awg=w([A.c,A.fJ,A.oE,A.ax],x.O)
D.fJf=new B.y1("Moon",1737,4291941851)
D.fJc=new B.y1("Earth",6371,4281908728)
D.fJg=new B.y1("Neptune",24622,4284524026)
D.fJh=new B.y1("Saturn",58232,4294829706)
D.fJd=new B.y1("Jupiter",69911,4294677052)
D.fJi=new B.y1("Sun",696340,4294688548)
D.fJj=new B.y1("Sirius A",119e4,4290763774)
D.fJa=new B.y1("Arcturus",179e5,4294818420)
D.fJb=new B.y1("Betelgeuse",531e6,4294472049)
D.fJe=new B.y1("UY Scuti",667e6,4293870660)
D.Qb=w([D.fJf,D.fJc,D.fJg,D.fJh,D.fJd,D.fJi,D.fJj,D.fJa,D.fJb,D.fJe],C.ax("O<y1>"))
D.eLv=new C.bl("glow","Glow",A.a0b)
D.eJ4=new C.bl("rainbow","Rainbow",A.nm)
D.eJr=new C.bl("stars","Stars",A.i6)
D.eIP=new C.bl("sparks","Sparks",A.dX)
D.eKM=new C.bl("fire","Fire",A.vT)
D.cW_=w([D.eLv,D.eJ4,D.eJr,D.eIP,D.eKM],x.c)
D.awk=w([A.bd,A.av,A.bH,A.d_],x.O)
D.cX_=w([0.2,1],x.n)
D.ePW=new B.uR("Radar","Shows your height above the ground.",0.1,0)
D.ePX=new B.uR("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.ePU=new B.uR("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aws=w([D.ePW,D.ePX,D.ePU],x._)
D.eK1=new C.bl("attract","Attract",A.yw)
D.eJO=new C.bl("scare","Scare",A.rh)
D.eIY=new C.bl("food","Food",A.u9)
D.bH5=new C.a0(983158,"MaterialIcons",!1)
D.eKk=new C.bl("hunt","Hunt",D.bH5)
D.cXC=w([D.eK1,D.eJO,D.eIY,D.eKk],x.c)
D.cY2=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cYh=w([47,100,220,470,1000],x.n)
D.awK=w([0,2,4,7,9],x.t)
D.Id={volts:0}
D.a4p=new C.bk(D.Id,[3],x.J)
D.IA=new C.e8(["b","battery",0.2,0.3,D.a4p])
D.e6R={on:0}
D.dpR=new C.bk(D.e6R,[1],x.J)
D.Dj=new C.e8(["s","switch",0.5,0.3,D.dpR])
D.eO4=new C.e8(["l","bulb",0.8,0.3,A.j4])
D.cTO=w([D.IA,D.Dj,D.eO4],x.d)
D.Di=new C.cA(["b",0,"s",0])
D.eN5=new C.cA(["s",1,"l",0])
D.aMS=new C.cA(["l",1,"b",1])
D.d9F=w([D.Di,D.eN5,D.aMS],x.o)
D.cTh=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.ejt=new B.mB("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cTO,D.d9F,D.cTh)
D.aGT={ohms:0}
D.aEs=new C.bk(D.aGT,[220],x.J)
D.eNy=new C.e8(["r","resistor",0.5,0.3,D.aEs])
D.eOj=new C.e8(["d","led",0.8,0.3,A.j4])
D.dcN=w([D.IA,D.eNy,D.eOj],x.d)
D.eMr=new C.cA(["b",0,"r",0])
D.eN_=new C.cA(["r",1,"d",0])
D.eMx=new C.cA(["d",1,"b",1])
D.dlt=w([D.eMr,D.eN_,D.eMx],x.o)
D.ddc=w(["led","diode","indicator"],x.s)
D.ejA=new B.mB("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dcN,D.dlt,D.ddc)
D.a5G={level:0}
D.dpc=new C.bk(D.a5G,[0.2],x.J)
D.eNE=new C.e8(["p","pot",0.5,0.3,D.dpc])
D.eNG=new C.e8(["m","motor",0.8,0.3,A.j4])
D.cU6=w([D.IA,D.eNE,D.eNG],x.d)
D.eMq=new C.cA(["b",0,"p",0])
D.eMW=new C.cA(["p",1,"m",0])
D.eMS=new C.cA(["m",1,"b",1])
D.dhg=w([D.eMq,D.eMW,D.eMS],x.o)
D.d9m=w(["fan","motor","spin","dimmer"],x.s)
D.ejr=new B.mB("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cU6,D.dhg,D.d9m)
D.a4l=new C.bk(D.a5G,[0.9],x.J)
D.aMZ=new C.e8(["s","solar",0.25,0.3,D.a4l])
D.aMY=new C.e8(["l","bulb",0.75,0.3,A.j4])
D.cWH=w([D.aMZ,D.aMY],x.d)
D.eN2=new C.cA(["s",0,"l",0])
D.eMR=new C.cA(["l",1,"s",1])
D.cUR=w([D.eN2,D.eMR],x.o)
D.dhR=w(["solar","sun","without battery","no battery","free"],x.s)
D.eju=new B.mB("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cWH,D.cUR,D.dhR)
D.eOm=new C.e8(["c","crank",0.25,0.3,D.a4l])
D.d7I=w([D.eOm,D.aMY],x.d)
D.eMu=new C.cA(["c",0,"l",0])
D.eMQ=new C.cA(["l",1,"c",1])
D.d8g=w([D.eMu,D.eMQ],x.o)
D.d7R=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.ejq=new B.mB("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d7I,D.d8g,D.d7R)
D.dpb=new C.bk(D.a5G,[0.7],x.J)
D.eNJ=new C.e8(["t","turbine",0.25,0.3,D.dpb])
D.eNw=new C.e8(["m","motor",0.75,0.3,A.j4])
D.d2f=w([D.eNJ,D.eNw],x.d)
D.eNd=new C.cA(["t",0,"m",0])
D.eMT=new C.cA(["m",1,"t",1])
D.d1f=w([D.eNd,D.eMT],x.o)
D.d6y=w(["wind","turbine","windmill","water","hydro"],x.s)
D.ejn=new B.mB("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.d2f,D.d1f,D.d6y)
D.aEp=new C.bk(D.Id,[9],x.J)
D.a6D=new C.e8(["b","battery",0.2,0.3,D.aEp])
D.aMX=new C.e8(["r","radio",0.8,0.3,A.j4])
D.dis=w([D.a6D,D.Dj,D.aMX],x.d)
D.eN7=new C.cA(["s",1,"r",0])
D.aMT=new C.cA(["r",1,"b",1])
D.c_m=w([D.Di,D.eN7,D.aMT],x.o)
D.dh2=w(["radio","music","listen"],x.s)
D.ejz=new B.mB("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dis,D.c_m,D.dh2)
D.dqi=new C.bk(D.Id,[12],x.J)
D.aMW=new C.e8(["b","battery",0.2,0.3,D.dqi])
D.eO5=new C.e8(["t","tv",0.8,0.3,A.j4])
D.cTQ=w([D.aMW,D.Dj,D.eO5],x.d)
D.eN8=new C.cA(["s",1,"t",0])
D.aMU=new C.cA(["t",1,"b",1])
D.daP=w([D.Di,D.eN8,D.aMU],x.o)
D.dip=w(["tv","television","screen","watch"],x.s)
D.ejk=new B.mB("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cTQ,D.daP,D.dip)
D.eNW=new C.e8(["z","buzzer",0.8,0.3,A.j4])
D.cAc=w([D.IA,D.Dj,D.eNW],x.d)
D.eN9=new C.cA(["s",1,"z",0])
D.eNr=new C.cA(["z",1,"b",1])
D.cP_=w([D.Di,D.eN9,D.eNr],x.o)
D.dfq=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.ejw=new B.mB("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cAc,D.cP_,D.dfq)
D.eNF=new C.e8(["h","heater",0.8,0.3,A.j4])
D.d5f=w([D.a6D,D.Dj,D.eNF],x.d)
D.eN4=new C.cA(["s",1,"h",0])
D.eMF=new C.cA(["h",1,"b",1])
D.cPG=w([D.Di,D.eN4,D.eMF],x.o)
D.ckc=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.ejl=new B.mB("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d5f,D.cPG,D.ckc)
D.eO7=new C.e8(["s","solar",0.2,0.25,D.a4l])
D.dqp=new C.bk(D.aGT,[100],x.J)
D.eOa=new C.e8(["r","resistor",0.55,0.25,D.dqp])
D.eOh=new C.e8(["c","capacitor",0.85,0.25,A.j4])
D.eNB=new C.e8(["q","resistor",0.55,0.6,D.aEs])
D.eO8=new C.e8(["d","led",0.85,0.6,A.j4])
D.dam=w([D.eO7,D.eOa,D.eOh,D.eNB,D.eO8],x.d)
D.eN3=new C.cA(["s",0,"r",0])
D.eMZ=new C.cA(["r",1,"c",0])
D.eMw=new C.cA(["c",1,"s",1])
D.eMv=new C.cA(["c",0,"q",0])
D.eMY=new C.cA(["q",1,"d",0])
D.eMy=new C.cA(["d",1,"c",1])
D.d_b=w([D.eN3,D.eMZ,D.eMw,D.eMv,D.eMY,D.eMy],x.o)
D.d74=w(["capacitor","store","charge","flash"],x.s)
D.ejy=new B.mB("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dam,D.d_b,D.d74)
D.eNM=new C.e8(["b","battery",0.15,0.3,D.a4p])
D.eOn=new C.e8(["l1","bulb",0.5,0.3,A.j4])
D.eNT=new C.e8(["l2","bulb",0.85,0.3,A.j4])
D.cS3=w([D.eNM,D.eOn,D.eNT],x.d)
D.eMp=new C.cA(["b",0,"l1",0])
D.eMN=new C.cA(["l1",1,"l2",0])
D.eMO=new C.cA(["l2",1,"b",1])
D.d2W=w([D.eMp,D.eMN,D.eMO],x.o)
D.dib=w(["series","two bulbs","dim"],x.s)
D.ejo=new B.mB("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cS3,D.d2W,D.dib)
D.e79={volts:0,charge:1}
D.dqu=new C.bk(D.e79,[1.5,0],x.J)
D.eOf=new C.e8(["b","battery",0.75,0.3,D.dqu])
D.cRu=w([D.aMZ,D.eOf],x.d)
D.eN1=new C.cA(["s",0,"b",0])
D.eMt=new C.cA(["b",1,"s",1])
D.d_t=w([D.eN1,D.eMt],x.o)
D.d7d=w(["charge","rechargeable","flat","recharge"],x.s)
D.ejm=new B.mB("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cRu,D.d_t,D.d7d)
D.dqh=new C.bk(D.Id,[4.5],x.J)
D.eNH=new C.e8(["b","battery",0.2,0.3,D.dqh])
D.aMV=new C.e8(["p","phone",0.8,0.3,A.j4])
D.d25=w([D.eNH,D.Dj,D.aMV],x.d)
D.eN6=new C.cA(["s",1,"p",0])
D.a6C=new C.cA(["p",1,"b",1])
D.dep=w([D.Di,D.eN6,D.a6C],x.o)
D.dfR=w(["phone","charger","usb","mobile"],x.s)
D.ejs=new B.mB("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.d25,D.dep,D.dfR)
D.eNt=new C.e8(["f","fan",0.8,0.3,A.j4])
D.ccm=w([D.IA,D.eNt],x.d)
D.eMo=new C.cA(["b",0,"f",0])
D.eMD=new C.cA(["f",1,"b",1])
D.cQb=w([D.eMo,D.eMD],x.o)
D.d9l=w(["fan","cool","air","wind"],x.s)
D.ejB=new B.mB("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.ccm,D.cQb,D.d9l)
D.eO_=new C.e8(["b","battery",0.15,0.2,D.a4p])
D.eNu=new C.e8(["a","ammeter",0.5,0.2,A.j4])
D.eNs=new C.e8(["l","bulb",0.85,0.2,A.j4])
D.eO1=new C.e8(["v","voltmeter",0.5,0.6,A.j4])
D.d7w=w([D.eO_,D.eNu,D.eNs,D.eO1],x.d)
D.eMm=new C.cA(["b",0,"a",0])
D.eMl=new C.cA(["a",1,"l",0])
D.eNf=new C.cA(["v",0,"l",0])
D.eNg=new C.cA(["v",1,"l",1])
D.d_k=w([D.eMm,D.eMl,D.aMS,D.eNf,D.eNg],x.o)
D.dls=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.ejx=new B.mB("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d7w,D.d_k,D.dls)
D.eOq=new C.e8(["b","battery",0.15,0.2,D.aEp])
D.eNL=new C.e8(["t","tv",0.55,0.2,A.j4])
D.aEq=new C.bk(D.Id,[5],x.J)
D.eNz=new C.e8(["c","buck",0.4,0.5,D.aEq])
D.eNN=new C.e8(["p","phone",0.8,0.5,A.j4])
D.cY4=w([D.eOq,D.eNL,D.eNz,D.eNN],x.d)
D.eMs=new C.cA(["b",0,"t",0])
D.aMQ=new C.cA(["b",0,"c",0])
D.aMR=new C.cA(["c",1,"p",0])
D.d22=w([D.eMs,D.aMU,D.aMQ,D.aMR,D.a6C],x.o)
D.cWh=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.ejp=new B.mB("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cY4,D.d22,D.cWh)
D.eNA=new C.e8(["c","buck",0.5,0.3,D.aEq])
D.cPx=w([D.aMW,D.eNA,D.aMV],x.d)
D.cUf=w([D.aMQ,D.aMR,D.a6C],x.o)
D.cnC=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.ejj=new B.mB("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cPx,D.cUf,D.cnC)
D.eNR=new C.e8(["d","diode",0.5,0.3,A.j4])
D.d38=w([D.a6D,D.eNR,D.aMX],x.d)
D.eMn=new C.cA(["b",0,"d",0])
D.eMz=new C.cA(["d",1,"r",0])
D.cCK=w([D.eMn,D.eMz,D.aMT],x.o)
D.cVX=w(["diode","protect","backwards","one way"],x.s)
D.ejv=new B.mB("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.d38,D.cCK,D.cVX)
D.Qe=w([D.ejt,D.ejA,D.ejr,D.eju,D.ejq,D.ejn,D.ejz,D.ejk,D.ejw,D.ejl,D.ejy,D.ejo,D.ejm,D.ejs,D.ejB,D.ejx,D.ejp,D.ejj,D.ejv],C.ax("O<mB>"))
D.haD=new B.G3("Moon",1.62,A.dy,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.haB=new B.G3("Mars",3.71,A.av,"Mars has about 38 percent of Earth's gravity.")
D.haE=new B.G3("Mercury",3.7,A.jZ,"Mercury is small, so its gravity is like Mars.")
D.hay=new B.G3("Venus",8.87,A.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.haA=new B.G3("Earth",9.81,A.aN,"On Earth gravity is strong, and the air also slows you down.")
D.haC=new B.G3("Neptune",11.15,A.d_,"Neptune pulls a little harder than Earth.")
D.haz=new B.G3("Jupiter",24.79,A.cs,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rr=w([D.haD,D.haB,D.haE,D.hay,D.haA,D.haC,D.haz],C.ax("O<G3>"))
D.d_9=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a2T=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.d_S=w([0.2,0.5,0.8],x.n)
D.bFA=new C.a0(63040,"MaterialIcons",!1)
D.eJS=new C.bl("peg","Peg",D.bFA)
D.eJ1=new C.bl("bar","Bar",R.BW)
D.eJu=new C.bl("erase","Erase",A.Nv)
D.d04=w([D.eJS,D.eJ1,D.eJu],x.c)
D.eT8=new C.cR(A.bk,A.J,4)
D.d0g=w([D.eT8],x.q)
D.ax_=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aWs=new B.Kj(0,"accordion")
D.cQu=w([A.jt,A.BX,A.BK],x.w)
D.cXu=w(["Mail","SMS","Ad"],x.s)
D.cR_=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.h8Q=new B.Ax(D.aWs,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.axL,D.cQu,D.cXu,D.cR_)
D.aab=new B.Kj(1,"flip")
D.d6Z=w([A.q5,A0.GB,A.ua],x.w)
D.d1M=w(["Unlock","Verify","Secure"],x.s)
D.cPt=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.h8P=new B.Ax(D.aab,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.axh,D.d6Z,D.d1M,D.cPt)
D.aWt=new B.Kj(2,"towers")
D.d0A=w([A.ys,A.q9,A.hS],x.w)
D.d0b=w(["Save","Grow","Earn"],x.s)
D.cDz=w(["","",""],x.s)
D.h8R=new B.Ax(D.aWt,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a2K,D.d0A,D.d0b,D.cDz)
D.aac=new B.Kj(3,"assemble")
D.d7U=w([A.no,A.h9,A.dX],x.w)
D.cWT=w(["Launch","Charge","Shine"],x.s)
D.d4o=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.h8T=new B.Ax(D.aac,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.avG,D.d7U,D.cWT,D.d4o)
D.aWu=new B.Kj(4,"carousel")
D.d7J=w([A.b8,A.f2],x.O)
D.cXE=w([A.mz,A.alF,A.O7],x.w)
D.cSr=w(["Explore","Discover","Learn"],x.s)
D.d2a=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.h8O=new B.Ax(D.aWu,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d7J,D.cXE,D.cSr,D.d2a)
D.aWv=new B.Kj(5,"burst")
D.d06=w([A.iU,A.tp],x.O)
D.cQV=w([A.lm,A.mx,A.i5],x.w)
D.cRg=w(["Cheer","Win","Love"],x.s)
D.cTn=w(["Make some noise","First place","Share the joy"],x.s)
D.h8S=new B.Ax(D.aWv,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.d06,D.cQV,D.cRg,D.cTn)
D.ax0=w([D.h8Q,D.h8P,D.h8R,D.h8T,D.h8O,D.h8S],C.ax("O<Ax>"))
D.eJU=new C.bl("skin","Skin",A.alG)
D.eLh=new C.bl("muscle","Muscles",A.NH)
D.eL_=new C.bl("organ","Organs",A.i5)
D.bF0=new C.a0(62747,"MaterialIcons",!1)
D.eL5=new C.bl("bone","Skeleton",D.bF0)
D.eLn=new C.bl("vessel","Blood vessels",A.qb)
D.d0G=w([D.eJU,D.eLh,D.eL_,D.eL5,D.eLn],x.c)
D.ePY=new B.uR("Simple legs","Light. Land gently.",0.15,0.2)
D.eQ_=new B.uR("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eQ2=new B.uR("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Cm=w([D.ePY,D.eQ_,D.eQ2],x._)
D.d2k=w([1.77,3.55,7.15,16.7],x.n)
D.d4P=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.eFz=new C.z("spiral","Spiral")
D.eog=new C.z("barred","Barred spiral")
D.ezL=new C.z("elliptical","Elliptical")
D.d5v=w([D.eFz,D.eog,D.ezL],x.K)
D.eM3=new C.cA(["beat",0.18,0.28,0])
D.eNa=new C.cA(["burst",0.7,0.2,0])
D.eNl=new C.cA(["delay",0.45,0.5,1])
D.eMV=new C.cA(["ripple",0.75,0.6,3])
D.cWC=w([D.eM3,D.eNa,D.eNl,D.eMV],x.e)
D.d6m=w([N.la,M.Iz,F.SO],x.u)
D.h84=new B.FP("First spark","A clock lights a burst and a ripple",D.cWC,D.d6m)
D.eMC=new C.cA(["beat",0.15,0.3,1])
D.eLI=new C.cA(["ripple",0.62,0.15,0])
D.eNh=new C.cA(["delay",0.4,0.45,0])
D.eMi=new C.cA(["ripple",0.7,0.45,0])
D.eM_=new C.cA(["delay",0.4,0.7,1])
D.eMX=new C.cA(["shake",0.75,0.75,0])
D.djg=w([D.eMC,D.eLI,D.eNh,D.eMi,D.eM_,D.eMX],x.e)
D.elg=new C.z(2,4)
D.aMz=new C.z(4,5)
D.d__=w([N.la,M.Iz,F.SO,D.elg,D.aMz],x.u)
D.h86=new B.FP("Heartbeat","Two thumps, then a shake",D.djg,D.d__)
D.eM8=new C.cA(["dice",0.15,0.7,1])
D.eNn=new C.cA(["echo",0.4,0.7,0])
D.eMg=new C.cA(["comet",0.7,0.5,4])
D.eNb=new C.cA(["burst",0.72,0.2,1])
D.eMA=new C.cA(["burst",0.3,0.25,0])
D.eM9=new C.cA(["pop",0.55,0.85,0])
D.cjM=w([D.eM8,D.eNn,D.eMg,D.eNb,D.eMA,D.eM9],x.e)
D.ekG=new C.z(1,3)
D.ekH=new C.z(1,4)
D.aMw=new C.z(0,5)
D.d7E=w([N.la,W.uI,D.ekG,D.ekH,D.aMw],x.u)
D.h85=new B.FP("Fireworks","Dice launch comets that burst in colour",D.cjM,D.d7E)
D.eMd=new C.cA(["beat",0.15,0.2,2])
D.eMK=new C.cA(["chance",0.4,0.2,0])
D.eM5=new C.cA(["ball",0.7,0.12,3])
D.eLT=new C.cA(["chance",0.4,0.5,1])
D.eNm=new C.cA(["ball",0.3,0.08,1])
D.eLM=new C.cA(["ripple",0.7,0.55,3])
D.ccO=w([D.eMd,D.eMK,D.eM5,D.eLT,D.eNm,D.eLM],x.e)
D.elh=new C.z(2,5)
D.czX=w([N.la,W.uI,M.a6w,F.SP,D.elh],x.u)
D.h83=new B.FP("Rain","Balls fall at random and splash",D.ccO,D.czX)
D.eML=new C.cA(["beat",0.12,0.45,2])
D.eNc=new C.cA(["toggle",0.38,0.2,0])
D.eNj=new C.cA(["wash",0.7,0.15,4])
D.eM7=new C.cA(["count3",0.38,0.45,0])
D.eNe=new C.cA(["burst",0.72,0.4,0])
D.eMB=new C.cA(["light",0.55,0.7,1])
D.eLU=new C.cA(["pop",0.8,0.8,4])
D.dak=w([D.eML,D.eNc,D.eNj,D.eM7,D.eNe,D.eMB,D.eLU],x.e)
D.elM=new C.z(3,6)
D.cfW=w([N.la,W.uI,M.a6w,F.SP,D.aMw,D.elM],x.u)
D.h81=new B.FP("Disco","A beat drives lights, washes and bursts",D.dak,D.cfW)
D.eNq=new C.cA(["button",0.12,0.2,0])
D.eLO=new C.cA(["delay",0.34,0.2,1])
D.eNp=new C.cA(["light",0.56,0.2,1])
D.eNi=new C.cA(["delay",0.56,0.45,1])
D.eMM=new C.cA(["ball",0.34,0.6,0])
D.eLS=new C.cA(["delay",0.34,0.8,1])
D.eLH=new C.cA(["burst",0.7,0.8,5])
D.c01=w([D.eNq,D.eLO,D.eNp,D.eNi,D.eMM,D.eLS,D.eLH],x.e)
D.enT=new C.z(5,6)
D.dfz=w([N.la,W.uI,F.SO,F.SP,D.aMz,D.enT],x.u)
D.h82=new B.FP("Domino","Tap the button and watch it run down the line",D.c01,D.dfz)
D.axl=w([D.h84,D.h86,D.h85,D.h83,D.h81,D.h82],C.ax("O<FP>"))
D.d5D=w([0.05,0.15,0.25],x.n)
D.d5R=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.d6x=w([1.5,3,4.5,9,12],x.n)
D.eIz=new C.bl("dice","Dice",A.mw)
D.eJB=new C.bl("coin","Coin",K.yl)
D.eLi=new C.bl("num","Number",A.yu)
D.d6J=w([D.eIz,D.eJB,D.eLi],x.c)
D.d6M=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fJk=new B.P1("Moon",1.62,0,4291941851)
D.fJl=new B.P1("Mars",3.71,0.01,4294472049)
D.fJm=new B.P1("Earth",9.81,1,4281908728)
D.fJo=new B.P1("Jupiter",24.79,1.4,4294677052)
D.fJn=new B.P1("Sun",274,2,4294688548)
D.yX=w([D.fJk,D.fJl,D.fJm,D.fJo,D.fJn],C.ax("O<P1>"))
D.axr=w([A.c9,A.aM,A.b2,A.aN,A.bu,A.bY,A.cs,A.hm],x.O)
D.e58={H:0}
D.dpS=new C.bk(D.e58,[2],x.I)
D.drr=new B.tl("Hydrogen","H\u2082",D.dpS,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.e59={H:0,Cl:1}
D.dq4=new C.bk(D.e59,[1,1],x.I)
D.drt=new B.tl("Hydrogen chloride","HCl",D.dq4,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.e5a={H:0,O:1}
D.dpz=new C.bk(D.e5a,[2,1],x.I)
D.dru=new B.tl("Water","H\u2082O",D.dpz,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.e5o={N:0,H:1}
D.dqt=new C.bk(D.e5o,[1,3],x.I)
D.drC=new B.tl("Ammonia","NH\u2083",D.dqt,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a5F={C:0,H:1}
D.dqm=new C.bk(D.a5F,[1,4],x.I)
D.drv=new B.tl("Methane","CH\u2084",D.dqm,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.e5b={H:0,S:1}
D.doF=new C.bk(D.e5b,[2,1],x.I)
D.drB=new B.tl("Hydrogen sulfide","H\u2082S",D.doF,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.e5t={O:0}
D.dqr=new C.bk(D.e5t,[2],x.I)
D.drD=new B.tl("Oxygen","O\u2082",D.dqr,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.e5n={N:0}
D.dpT=new C.bk(D.e5n,[2],x.I)
D.drs=new B.tl("Nitrogen","N\u2082",D.dpT,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.e4Y={C:0,O:1}
D.dqy=new C.bk(D.e4Y,[1,2],x.I)
D.drz=new B.tl("Carbon dioxide","CO\u2082",D.dqy,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aGQ={C:0,H:1,O:2}
D.dom=new C.bk(D.aGQ,[1,2,1],x.I)
D.drA=new B.tl("Formaldehyde","CH\u2082O",D.dom,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.dql=new C.bk(D.a5F,[2,4],x.I)
D.drx=new B.tl("Ethene","C\u2082H\u2084",D.dql,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.dqk=new C.bk(D.a5F,[2,6],x.I)
D.drw=new B.tl("Ethane","C\u2082H\u2086",D.dqk,"Two carbons joined by a single bond, each holding three hydrogens.")
D.don=new C.bk(D.aGQ,[1,4,1],x.I)
D.dry=new B.tl("Methanol","CH\u2083OH",D.don,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a39=w([D.drr,D.drt,D.dru,D.drC,D.drv,D.drB,D.drD,D.drs,D.drz,D.drA,D.drx,D.drw,D.dry],C.ax("O<tl>"))
D.d7K=w([A.bY,A.aN,A.dQ,A.b2],x.O)
D.d8F=w([],x.h)
D.d8K=w([],x.B)
D.a3i=w([],x.F)
D.ed4=new B.ed("battery","Battery","\ud83d\udd0b",A.b2,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eda=new B.ed("solar","Solar panel","\u2600\ufe0f",A.bH,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.edP=new B.ed("crank","Hand crank","\ud83d\udd04",A.cs,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.edr=new B.ed("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aN,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.ecX=new B.ed("buck","Step-down converter","\ud83d\udd3d",A.hm,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.edp=new B.ed("regulator","5 V regulator","\ud83e\uddca",A.bK,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.edU=new B.ed("diode","Diode","\u27a1\ufe0f",A.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.edB=new B.ed("ldr","Light sensor","\ud83c\udf1e",A.dQ,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.edf=new B.ed("switch","Switch","\ud83c\udf9a\ufe0f",A.bu,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.edR=new B.ed("fuse","Fuse","\ud83e\uddef",A.c9,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.ecP=new B.ed("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hm,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.edC=new B.ed("resistor","Resistor","\u3030\ufe0f",A.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.edE=new B.ed("bulb","Light bulb","\ud83d\udca1",A.dQ,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.edc=new B.ed("led","LED","\ud83d\udd34",A.av,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.edg=new B.ed("motor","Motor","\u2699\ufe0f",A.bK,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.edy=new B.ed("buzzer","Buzzer","\ud83d\udd14",A.bY,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.ed5=new B.ed("heater","Heater","\ud83d\udd25",A.cs,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.edt=new B.ed("capacitor","Capacitor","\ud83e\udeab",A.cl,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.edl=new B.ed("radio","Radio","\ud83d\udcfb",A.nW,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.edi=new B.ed("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b8,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.ecW=new B.ed("voltmeter","Voltmeter","\ud83e\udded",A.bv,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.ed2=new B.ed("ammeter","Ammeter","\ud83d\udcdf",A.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.ed8=new B.ed("fan","Fan","\ud83c\udf00",A.aN,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.edW=new B.ed("speaker","Speaker","\ud83d\udd0a",A.bY,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.edL=new B.ed("clock","Digital clock","\u23f0",A.b2,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.edo=new B.ed("calculator","Calculator","\ud83e\uddee",A.KO,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.ed1=new B.ed("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cl,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.edV=new B.ed("router","WiFi router","\ud83d\udcf6",A.hm,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.edY=new B.ed("siren","Siren","\ud83d\udea8",A.av,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.ecS=new B.ed("toycar","Toy car","\ud83d\ude97",A.cs,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.edZ=new B.ed("kettle","Kettle","\ud83e\uded6",A.mk,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.ed_=new B.ed("lamp","Desk lamp","\ud83e\ude94",A.dQ,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.edb=new B.ed("lights","Party lights","\ud83c\udf84",A.nW,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.edm=new B.ed("fridge","Fridge","\ud83e\uddca",A.fW,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.ecU=new B.ed("washer","Washing machine","\ud83e\udee7",A.cl,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.edM=new B.ed("blender","Blender","\ud83e\udd64",A.c9,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.edj=new B.ed("drone","Drone","\ud83d\ude81",A.bK,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.ecZ=new B.ed("drill","Power drill","\ud83d\udd29",A.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.edn=new B.ed("torch","Torch","\ud83d\udd26",A.bM,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.edJ=new B.ed("neon","Neon sign","\ud83e\udea7",A.bY,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.ecV=new B.ed("microwave","Microwave","\ud83c\udf72",A.cs,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.edD=new B.ed("doorbell","Doorbell","\ud83d\udd14",A.bH,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.ed7=new B.ed("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.edx=new B.ed("console","Game console","\ud83c\udfae",A.bu,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.edO=new B.ed("heartmon","Heart monitor","\ud83e\ude7a",A.h3,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.ecT=new B.ed("aquarium","Aquarium","\ud83d\udc20",A.b8,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eds=new B.ed("lighthouse","Lighthouse","\ud83d\uddfc",A.dQ,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.edA=new B.ed("discoball","Disco ball","\ud83e\udea9",A.nW,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.edT=new B.ed("robot","Robot","\ud83e\udd16",A.aN,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.ecR=new B.ed("toaster","Toaster","\ud83c\udf5e",A.dU,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.edX=new B.ed("ledstrip","LED strip","\ud83c\udf08",A.bY,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.edI=new B.ed("pump","Water pump","\ud83d\udeb0",A.aN,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.edu=new B.ed("hairdryer","Hair dryer","\ud83d\udca8",A.iU,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.edG=new B.ed("headphones","Headphones","\ud83c\udfa7",A.bu,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.ed0=new B.ed("smartwatch","Apple Watch Ultra","\u231a",A.bv,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.edS=new B.ed("tablet","iPad Pro M5","\ud83d\udcf2",A.cl,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.ecO=new B.ed("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h3,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.edk=new B.ed("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bs,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.edd=new B.ed("appletv","Apple TV 4K","\ud83d\udcfa",A.bN,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.edz=new B.ed("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.tm,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.ecQ=new B.ed("iphonefold","iPhone Fold","\ud83d\udcf1",A.b6,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.ed3=new B.ed("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d_,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.edQ=new B.ed("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cA,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.edv=new B.ed("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bd,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.edq=new B.ed("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cc,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.edH=new B.ed("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.av,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.ede=new B.ed("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b2,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.edw=new B.ed("honor","Honor Magic V5","\ud83d\udcf1",A.cl,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.edF=new B.ed("vivo","vivo X300 Pro","\ud83d\udcf1",A.cs,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.edK=new B.ed("ereader","Kindle Scribe","\ud83d\udcd6",A.bs,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.ecN=new B.ed("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cb,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.edh=new B.ed("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cA,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.ed9=new B.ed("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b8,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.ecY=new B.ed("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dQ,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.ed6=new B.ed("carscreen","Luxury car touchscreen","\ud83d\ude98",A.av,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.edN=new B.ed("vision","Apple Vision Pro","\ud83e\udd7d",A.bu,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.QF=w([D.ed4,D.eda,D.edP,D.edr,D.ecX,D.edp,D.edU,D.edB,D.edf,D.edR,D.ecP,D.edC,D.edE,D.edc,D.edg,D.edy,D.ed5,D.edt,D.edl,D.edi,D.ecW,D.ed2,D.ed8,D.edW,D.edL,D.edo,D.ed1,D.edV,D.edY,D.ecS,D.edZ,D.ed_,D.edb,D.edm,D.ecU,D.edM,D.edj,D.ecZ,D.edn,D.edJ,D.ecV,D.edD,D.ed7,D.edx,D.edO,D.ecT,D.eds,D.edA,D.edT,D.ecR,D.edX,D.edI,D.edu,D.edG,D.ed0,D.edS,D.ecO,D.edk,D.edd,D.edz,D.ecQ,D.ed3,D.edQ,D.edv,D.edq,D.edH,D.ede,D.edw,D.edF,D.edK,D.ecN,D.edh,D.ed9,D.ecY,D.ed6,D.edN],C.ax("O<ed>"))
D.d96=w([0,0.46,0.82],x.n)
D.d9h=w([5,10,15,25,45,60],x.t)
D.d9D=w([-0.045,0.03,-0.015],x.n)
D.da0=w([0.9,0.97,1],x.n)
D.axS=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.ul=w([0.05,0.2,0.35],x.n)
D.cRk=w([D.EX,D.EX],x.O)
D.cWy=w([A.F6,A.M],x.O)
D.cVB=w([A.fl,A.hl],x.O)
D.cPp=w([A.f2,A.nV],x.O)
D.cck=w([A.lI,A.dx],x.O)
D.axT=w([D.cRk,D.cWy,D.cVB,D.cPp,D.cck],x.Q)
D.fJ8=new B.v5("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fJ9=new B.v5("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fJ0=new B.v5("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fJ7=new B.v5("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fJ5=new B.v5("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fJ1=new B.v5("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fJ6=new B.v5("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fJ2=new B.v5("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fJ4=new B.v5("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fJ3=new B.v5("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.Ct=w([D.fJ8,D.fJ9,D.fJ0,D.fJ7,D.fJ5,D.fJ1,D.fJ6,D.fJ2,D.fJ4,D.fJ3],C.ax("O<v5>"))
D.bgq=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.dbi=w([D.EX,D.bgq,D.aej,A.adO],x.O)
D.b2h=new C.ac(0,A.G,A.hM,A.dE,6)
D.dcc=w([D.b2h],x.V)
D.ejV=new C.z(0,"AND")
D.ekI=new C.z(1,"Adder")
D.eli=new C.z(2,"Blinker")
D.elN=new C.z(3,"Memory")
D.dcZ=w([D.ejV,D.ekI,D.eli,D.elN],x.E)
D.ay4=w([-104,0,104],x.n)
D.ay5=w([-14,3],x.n)
D.ddL=w([-8,0,8],x.n)
D.ayd=w([-92,0,92],x.n)
D.de8=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.ePV=new B.uR("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eQ1=new B.uR("Medium tank","Balanced.",0.35,1)
D.eQ0=new B.uR("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.QT=w([D.ePV,D.eQ1,D.eQ0],x._)
D.nt=w([0.04,0.2,0.36],x.n)
D.ayo=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eKZ=new C.bl(D.aWs,"Fold",K.amB)
D.eK8=new C.bl(D.aab,"Flip",A.Ge)
D.bFj=new C.a0(62889,"MaterialIcons",!1)
D.eLg=new C.bl(D.aWt,"Rise",D.bFj)
D.amP=new C.a0(983870,"MaterialIcons",!1)
D.eI7=new C.bl(D.aac,"Assemble",D.amP)
D.eIg=new C.bl(D.aWu,"Spin",D.al8)
D.eId=new C.bl(D.aWv,"Pop",A.lm)
D.dfw=w([D.eKZ,D.eK8,D.eLg,D.eI7,D.eIg,D.eId],C.ax("O<+(Kj,m,a0)>"))
D.ayt=w([A.bY,A.dQ,A.bv,A.aN,A.bu,A.c9],x.O)
D.dfJ=w([A.aN,A.cs,A.cs,A.b2],x.O)
D.dfW=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.eH3=new C.z("Make the output turn HALF as fast as the input.",0.5)
D.erD=new C.z("Make the output turn TWICE as fast.",2)
D.ekS=new C.z("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.eFJ=new C.z("Make the output turn 4 times faster.",4)
D.exe=new C.z("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.eAm=new C.z("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.eyR=new C.z("Make the output turn 3 times faster.",3)
D.ezC=new C.z("Make the output spin at the same speed as the input, using four different gears.",1)
D.ayy=w([D.eH3,D.erD,D.ekS,D.eFJ,D.exe,D.eAm,D.eyR,D.ezC],C.ax("O<+(m,L)>"))
D.dgT=w([3,4.5,5,6,9],x.n)
D.b2Q=new C.ac(0,A.G,A.aW,A.J,16)
D.dhk=w([D.b2Q],x.V)
D.QW=w([A.bY,A.bH,A.b2,A.aN,A.bu,A.c9,A.c,A.cs],x.O)
D.dhO=w(["solar","turbine","crank","pot"],x.s)
D.di9=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.dif=w([0,0.35,0.75,1],x.n)
D.eIt=new C.bl("drop","Drop",D.amr)
D.eIv=new C.bl("weight","Weight",U.amT)
D.eLb=new C.bl("cannon","Newton's cannon",A.alS)
D.diX=w([D.eIt,D.eIv,D.eLb],x.c)
D.eEn=new C.z("piano","Piano")
D.eE3=new C.z("organ","Organ")
D.eyy=new C.z("bell","Bell")
D.eEp=new C.z("pluck","Pluck")
D.eFI=new C.z("synth","Synth")
D.eAh=new C.z("flute","Flute")
D.ayP=w([D.eEn,D.eE3,D.eyy,D.eEp,D.eFI,D.eAh],x.K)
D.dju=w(["volts","level","ohms","on"],x.s)
D.dkS=w([A.jt,A.BX,A.BK,A.q5,A0.GB,A.ua,A.ys,A.q9,A.hS,A.no,A.h9,A.dX,A.i5,A.i6,A.mx,A.lT,A.vZ,A.ro,A.lU,A.G5,A.u9,A.Gd,A.BM,A.amm,A.Nz,A.yo,A.NH,A.am1,T.amL,A.lm],x.w)
D.dlM=w([0.72,1],x.n)
D.dlZ=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.e6X={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.doe=new C.bk(D.e6X,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aGS={A:0,T:1,C:2,G:3}
D.a4f=new C.bk(D.aGS,["U","A","G","C"],x.l)
D.doo=new C.bk(D.aGS,["T","A","G","C"],x.l)
D.e5k={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.d7O=w([0,2,4,5,7,9,11],x.t)
D.cQB=w([0,2,3,5,7,8,10],x.t)
D.dda=w([0,3,5,6,7,10],x.t)
D.CA=new C.bk(D.e5k,[D.awK,D.d7O,D.cQB,D.dda,D.apk],C.ax("bk<m,ai<G>>"))
D.e6J={A:0,T:1,U:2,C:3,G:4}
D.doI=new C.bk(D.e6J,[A.c9,A.cl,A.cl,A.aM,A.b2],C.ax("bk<m,w>"))
D.e4G={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.h1s=new B.y3("Switch",F.uc,A.bH,0,"Tap it to turn it ON or OFF.")
D.h1o=new B.y3("Blinker",A.oY,A.bv,0,"Turns itself ON and OFF. Tap to change the speed.")
D.h1p=new B.y3("AND",D.amP,A.cl,2,"ON only when BOTH inputs are ON.")
D.bGO=new C.a0(63671,"MaterialIcons",!1)
D.h1n=new B.y3("OR",D.bGO,A.bu,2,"ON when EITHER input is ON.")
D.h1q=new B.y3("XOR",G.a0g,A.bY,2,"ON when the inputs are DIFFERENT.")
D.h1k=new B.y3("NAND",A.tZ,A.aN,2,"OFF only when BOTH inputs are ON.")
D.bFU=new C.a0(63176,"MaterialIcons",!1)
D.h1l=new B.y3("NOR",D.bFU,A.hm,2,"ON only when BOTH inputs are OFF.")
D.h1m=new B.y3("NOT",A_.BY,A.cs,1,"Flips the signal: ON becomes OFF.")
D.h1r=new B.y3("Light",A.rj,A.dQ,1,"Glows when its input is ON.")
D.h1t=new B.y3("Buzzer",A.o7,A.c9,1,"Beeps while its input is ON.")
D.z9=new C.bk(D.e4G,[D.h1s,D.h1o,D.h1p,D.h1n,D.h1q,D.h1k,D.h1l,D.h1m,D.h1r,D.h1t],C.ax("bk<m,y3>"))
D.e6G={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eIT=new C.bl(3,20,1.9)
D.eIo=new C.bl(33,90,1.6)
D.eLA=new C.bl(52,15,3.2)
D.eLy=new C.bl(45,-100,1.8)
D.eK2=new C.bl(-15,-60,1.9)
D.eJw=new C.bl(-25,140,2.4)
D.eJn=new C.bl(-82,0,2.2)
D.aEf=new C.bk(D.e6G,[D.eIT,D.eIo,D.eLA,D.eLy,D.eK2,D.eJw,D.eJn],C.ax("bk<m,+(L,L,L)>"))
D.cPY=w([A.A],x.M)
D.cQh=w([A.az,A.aC],x.M)
D.cZ4=w([A.az,A.A,A.aC],x.M)
D.d_z=w([A.az,A.ld,A.A,A.lC,A.aC],x.M)
D.dcV=w([A.az,A.ld,A.a3,A.a8,A.lC,A.aC],x.M)
D.dpG=new C.dt([1,D.cPY,2,D.cQh,3,D.cZ4,4,A.ayU,5,D.d_z,6,D.dcV],C.ax("dt<G,ai<dc>>"))
D.e5l={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.eKe=new C.bl(1,A.bN,"Hydrogen")
D.eJ7=new C.bl(4,A.bm,"Carbon")
D.eI8=new C.bl(3,A.d_,"Nitrogen")
D.eKy=new C.bl(2,A.av,"Oxygen")
D.eJW=new C.bl(2,A.bH,"Sulfur")
D.eL8=new C.bl(1,A.bd,"Chlorine")
D.we=new C.bk(D.e5l,[D.eKe,D.eJ7,D.eI8,D.eKy,D.eJW,D.eL8],C.ax("bk<m,+(G,w,m)>"))
D.e76={Calm:0,Box:1,Sleep:2}
D.cxq=w([4,2,6,0],x.n)
D.cxx=w([4,4,4,4],x.n)
D.cxy=w([4,7,8,0],x.n)
D.Rk=new C.bk(D.e76,[D.cxq,D.cxx,D.cxy],C.ax("bk<m,ai<L>>"))
D.e4Q={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wU=new B.a0b(0,"source")
D.d_2=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.h6I=new B.q7("Clock",A.oY,D.wU,A.bv,D.d_2)
D.h6E=new B.q7("Button",A.yw,D.wU,A.aM,A.U)
D.dh4=w(["random","quick","slow"],x.s)
D.h6P=new B.q7("Dice",A.mw,D.wU,A.bY,D.dh4)
D.bGs=new C.a0(63484,"MaterialIcons",!1)
D.DX=new B.a0b(1,"logic")
D.dlH=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.h6L=new B.q7("Delay",D.bGs,D.DX,A.cl,D.dlH)
D.d9o=w(["fast","mid","slow"],x.s)
D.h6Q=new B.q7("Echo",A.amg,D.DX,A.bu,D.d9o)
D.h6N=new B.q7("Every 2nd",A_.BY,D.DX,A.hm,A.U)
D.bG7=new C.a0(63309,"MaterialIcons",!1)
D.h6K=new B.q7("Every 3rd",D.bG7,D.DX,A.aN,A.U)
D.bI6=new C.a0(983902,"MaterialIcons",!1)
D.c_r=w(["50%","25%","75%"],x.s)
D.h6S=new B.q7("Chance",D.bI6,D.DX,A.cs,D.c_r)
D.qF=new B.a0b(2,"out")
D.h6G=new B.q7("Light",A.rj,D.qF,A.dQ,A.U)
D.h6H=new B.q7("Burst",A.lm,D.qF,A.bY,A.U)
D.h6F=new B.q7("Ripple",A.yA,D.qF,A.b8,A.U)
D.h6O=new B.q7("Ball",A.amt,D.qF,A.cs,A.U)
D.h6M=new B.q7("Comet",A.no,D.qF,A.bu,A.U)
D.bHR=new C.a0(983669,"MaterialIcons",!1)
D.h6R=new B.q7("Shake",D.bHR,D.qF,A.c9,A.U)
D.h6T=new B.q7("Pop",A.G6,D.qF,A.b2,A.U)
D.h6J=new B.q7("Wash",A.NL,D.qF,A.pB,A.U)
D.mH=new C.bk(D.e4Q,[D.h6I,D.h6E,D.h6P,D.h6L,D.h6Q,D.h6N,D.h6K,D.h6S,D.h6G,D.h6H,D.h6F,D.h6O,D.h6M,D.h6R,D.h6T,D.h6J],C.ax("bk<m,q7>"))
D.e6K={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.CB=new C.bk(D.e6K,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.e52={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.zB=new B.Jg(0,"tv")
D.eRs=new B.m8("Samsung Neo QLED 8K",D.zB,F.EK,A.aN)
D.eRj=new B.m8("LG OLED evo G5",D.zB,A.eb,A.h3)
D.eRa=new B.m8("Sony Bravia 9",D.zB,A.qQ,A.bs)
D.eRe=new B.m8("Apple TV 4K",D.zB,A.e3,A.bN)
D.eRb=new B.m8("Bang and Olufsen Beovision",D.zB,F.Es,F.tm)
D.IE=new B.Jg(1,"iphone")
D.aNj=new B.m8("iPhone 18 Pro Max",D.IE,D.agu,A.cb)
D.wr=new B.Jg(3,"fold")
D.bmt=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eRo=new B.m8("iPhone Fold",D.wr,D.bmt,A.b6)
D.uL=new B.Jg(2,"android")
D.eRp=new B.m8("Samsung Galaxy S26 Ultra",D.uL,F.acF,A.d_)
D.bfZ=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eRh=new B.m8("Samsung Galaxy Z Fold7",D.wr,D.bfZ,A.cA)
D.eRd=new B.m8("Google Pixel 10 Pro XL",D.uL,A.dy,A.bd)
D.eRl=new B.m8("Xiaomi 16 Ultra",D.uL,A.lM,A.cc)
D.eRg=new B.m8("Huawei Mate 80 Pro Max",D.uL,A.eK,A.av)
D.eRc=new B.m8("OPPO Find X9 Ultra",D.uL,A.e_,A.b2)
D.eRu=new B.m8("Honor Magic V5",D.wr,A.dc,A.cl)
D.eRi=new B.m8("vivo X300 Pro",D.uL,A.hl,A.cs)
D.SX=new B.Jg(4,"tablet")
D.eRn=new B.m8("iPad Pro M5",D.SX,A.dy,A.aN)
D.a6N=new B.Jg(5,"reader")
D.eRv=new B.m8("Kindle Scribe",D.a6N,A.ec,A.bs)
D.zC=new B.Jg(6,"computer")
D.eRm=new B.m8("MacBook Pro M5 Max",D.zC,A.dy,A.cb)
D.eRr=new B.m8("iMac 32 inch",D.zC,A.bN,A.cA)
D.eRk=new B.m8("Pro Display XDR 8K",D.zC,A.lM,A.b8)
D.eRf=new B.m8("Sony Laser Projector",D.zC,A.ct,A.dQ)
D.eRq=new B.m8("Luxury car touchscreen",D.zC,L.ml,A.av)
D.eRt=new B.m8("Apple Vision Pro",D.zC,A.jk,A.bu)
D.m0=new C.bk(D.e52,[D.eRs,D.eRj,D.eRa,D.eRe,D.eRb,D.aNj,D.eRo,D.eRp,D.eRh,D.eRd,D.eRl,D.eRg,D.eRc,D.eRu,D.eRi,D.eRn,D.eRv,D.eRm,D.eRr,D.eRk,D.eRf,D.eRq,D.eRt],C.ax("bk<m,m8>"))
D.e5f={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bpb=new B.fO(20,4,13,!1)
D.bpC=new B.fO(14,5,13.5,!1)
D.bpt=new B.fO(9,2.4,10,!1)
D.bpH=new B.fO(7,5,12.5,!1)
D.bpw=new B.fO(8,3.5,12,!1)
D.bp7=new B.fO(15,2,6,!1)
D.bpF=new B.fO(45,6,13.5,!0)
D.bpn=new B.fO(10,8,13.5,!1)
D.bpf=new B.fO(25,3,12,!0)
D.bpl=new B.fO(35,4,12,!0)
D.bpm=new B.fO(40,4.5,9.5,!0)
D.bpo=new B.fO(55,3,9,!0)
D.bp8=new B.fO(18,3,9,!1)
D.bpE=new B.fO(22,4,13.5,!1)
D.bpx=new B.fO(16,5,13.5,!1)
D.bpj=new B.fO(30,4,9,!0)
D.bpQ=new B.fO(5,3.5,13,!1)
D.bpr=new B.fO(25,3,13.5,!0)
D.bpA=new B.fO(14,2.5,9,!1)
D.bpq=new B.fO(6,6,13,!1)
D.bpI=new B.fO(30,1.2,5,!0)
D.bpP=new B.fO(35,3,4.5,!0)
D.bpL=new B.fO(20,4.5,7.5,!0)
D.bpp=new B.fO(55,5.5,13.5,!0)
D.bp6=new B.fO(45,5.5,13.5,!0)
D.bpB=new B.fO(40,5.5,13.5,!0)
D.bpO=new B.fO(60,6,13.5,!0)
D.agW=new B.fO(28,4,7,!0)
D.Fj=new B.fO(25,4,7,!0)
D.bpi=new B.fO(30,4,7,!0)
D.bpd=new B.fO(22,4,7,!0)
D.bpe=new B.fO(24,4,7,!0)
D.bps=new B.fO(60,3,5.5,!0)
D.bp9=new B.fO(18,9,14,!0)
D.bpg=new B.fO(25,9,14,!0)
D.agX=new B.fO(30,8,14,!0)
D.bpc=new B.fO(20,8,14,!0)
D.bpk=new B.fO(30,9,14,!0)
D.bpJ=new B.fO(22,5,9.5,!0)
D.bpa=new B.fO(30,2.5,10.5,!0)
D.bpy=new B.fO(50,5.5,13.5,!0)
D.bpN=new B.fO(12,2,9.5,!1)
D.bpv=new B.fO(16,1.3,9.5,!0)
D.bpG=new B.fO(40,2.5,7,!0)
D.bpM=new B.fO(60,1.2,4.8,!0)
D.bpK=new B.fO(18,5,13.5,!0)
D.bpD=new B.fO(8,2,9.5,!1)
D.bpu=new B.fO(12,2.5,8,!1)
D.bph=new B.fO(20,3.5,13.5,!0)
D.bpz=new B.fO(3.5,3,13,!1)
D.za=new C.bk(D.e5f,[D.bpb,D.bpC,D.bpt,D.bpH,D.bpw,D.bp7,D.bpF,D.bpn,D.bpf,D.bpl,D.bpm,D.bpo,D.bp8,D.bpE,D.bpx,D.bpj,D.bpQ,D.bpr,D.bpA,D.bpq,D.bpI,D.bpP,D.bpL,D.bpp,D.bp6,D.bpB,D.bpO,D.agW,D.Fj,D.bpi,D.Fj,D.bpd,D.Fj,D.bpe,D.agW,D.Fj,D.bps,D.bp9,D.bpg,D.agX,D.bpc,D.bpk,D.bpJ,D.bpa,D.bpy,D.bpN,D.bpv,D.bpG,D.bpM,D.Fj,D.agX,D.bpK,D.bpD,D.bpu,D.bph,D.bpz],C.ax("bk<m,fO>"))
D.e4P={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eHE=new C.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.enQ=new C.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.enL=new C.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.ezB=new C.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eAy=new C.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.ezx=new C.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.elS=new C.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.exx=new C.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eHM=new C.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eAS=new C.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.er1=new C.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.elA=new C.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eq4=new C.z("Movement","They pull your legs together and help you balance.")
D.erX=new C.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.enZ=new C.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eFj=new C.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eGl=new C.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.exf=new C.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eG6=new C.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.evY=new C.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eB0=new C.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.elH=new C.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.esj=new C.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eAH=new C.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.ewh=new C.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eGe=new C.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.ez2=new C.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.elQ=new C.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eBz=new C.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eEX=new C.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eDc=new C.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.ek5=new C.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eyL=new C.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eyP=new C.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.et_=new C.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eoc=new C.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.erM=new C.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.exH=new C.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eDX=new C.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eHJ=new C.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eAY=new C.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.ejP=new C.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.exS=new C.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.ekB=new C.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eEc=new C.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eFf=new C.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eyh=new C.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eEr=new C.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.elJ=new C.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eFL=new C.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.epu=new C.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eDC=new C.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.esG=new C.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.ewc=new C.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eBh=new C.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eFW=new C.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eFN=new C.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eFS=new C.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.ewG=new C.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eC4=new C.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eD9=new C.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eFA=new C.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eyg=new C.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.euB=new C.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.etp=new C.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eyG=new C.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eBa=new C.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.ev6=new C.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.evM=new C.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.epQ=new C.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eFb=new C.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eqC=new C.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eky=new C.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.esZ=new C.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.ekt=new C.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eoB=new C.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.et3=new C.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eqL=new C.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eBv=new C.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.es_=new C.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eHr=new C.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.ety=new C.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.ewA=new C.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eza=new C.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eqU=new C.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eqE=new C.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dqS=new C.bk(D.e4P,[D.eHE,D.enQ,D.enL,D.ezB,D.eAy,D.ezx,D.elS,D.exx,D.eHM,D.eAS,D.er1,D.elA,D.eq4,D.erX,D.enZ,D.eFj,D.eGl,D.exf,D.eG6,D.evY,D.eB0,D.elH,D.esj,D.eAH,D.ewh,D.eGe,D.ez2,D.elQ,D.eBz,D.eEX,D.eDc,D.ek5,D.eyL,D.eyP,D.et_,D.eoc,D.erM,D.exH,D.eDX,D.eHJ,D.eAY,D.ejP,D.exS,D.ekB,D.eEc,D.eFf,D.eyh,D.eEr,D.elJ,D.eFL,D.epu,D.eDC,D.esG,D.ewc,D.eBh,D.eFW,D.eFN,D.eFS,D.ewG,D.eC4,D.eD9,D.eFA,D.eyg,D.euB,D.etp,D.eyG,D.eBa,D.ev6,D.evM,D.epQ,D.eFb,D.eqC,D.eky,D.esZ,D.ekt,D.eoB,D.et3,D.eqL,D.eBv,D.es_,D.eHr,D.ety,D.ewA,D.eza,D.eqU,D.eqE],C.ax("bk<m,+(m,m)>"))
D.dqU=new C.hC(A.G,11)
D.dqZ=new C.hC(A.G,30)
D.dug=new B.U6(null)
D.dy4=new B.Ua(null)
D.dy5=new B.Ub(null)
D.dyi=new B.Uc(null)
D.dAj=new B.Uf(null)
D.dAk=new B.Ug(null)
D.dAl=new B.Uh(null)
D.dB8=new B.UE(null)
D.dBa=new B.UT(null)
D.dBb=new B.UU(null)
D.dBd=new B.UV(null)
D.dBL=new B.V1(null)
D.dDG=new B.V5(null)
D.dDH=new B.V7(null)
D.dDI=new B.V8(null)
D.dDK=new B.V9(null)
D.dFk=new B.Vq(null)
D.dFm=new B.Vs(null)
D.dFr=new B.VC(null)
D.dFC=new B.VD(null)
D.dG7=new B.VE(null)
D.dHC=new B.VG(null)
D.dJ_=new B.VI(null)
D.dJ0=new B.VJ(null)
D.dKl=new B.VM(null)
D.e_e=new B.VN(null)
D.e_g=new B.VO(null)
D.e_h=new B.VR(null)
D.e_i=new B.VS(null)
D.e1b=new B.W_(null)
D.e1c=new B.W0(null)
D.e1k=new B.W7(null)
D.e1t=new B.Wb(null)
D.e1u=new B.Wc(null)
D.e1v=new B.a8b(null)
D.e25=new B.We(null)
D.e3y=new B.Wi(null)
D.e7i=new C.v(0,118)
D.aGZ=new C.v(0,13)
D.e7j=new C.v(0,17)
D.e7m=new C.v(0,330)
D.e7p=new C.v(0,-13)
D.aH4=new C.v(0,-14)
D.e7q=new C.v(0,-17)
D.e7r=new C.v(0,-18)
D.e7s=new C.v(0,-19)
D.e7t=new C.v(0,-20)
D.e7w=new C.v(0,-26)
D.e7x=new C.v(0,-28)
D.e7y=new C.v(0,-31)
D.e7z=new C.v(0,-32)
D.wl=new C.v(0,-6)
D.e7A=new C.v(0,-6771)
D.e7B=new C.v(0,-9)
D.e7D=new C.v(-9.5,-11)
D.e7E=new C.v(10,20)
D.e7G=new C.v(10,-13)
D.e7H=new C.v(10,-22)
D.e7I=new C.v(10,-4)
D.a5J=new C.v(11,8)
D.e7K=new C.v(12,2)
D.e7L=new C.v(14,0)
D.e7M=new C.v(14,12)
D.aH8=new C.v(14,8)
D.e7N=new C.v(14,-17)
D.e7O=new C.v(14,-18)
D.aH9=new C.v(14,-3)
D.aHa=new C.v(14,-4)
D.e7P=new C.v(15,0)
D.e7Q=new C.v(15,-12)
D.e7R=new C.v(16,-8)
D.e7S=new C.v(18,14)
D.e7T=new C.v(18,-12)
D.aHe=new C.v(20,0)
D.e7Z=new C.v(20,15)
D.e8_=new C.v(20,-17)
D.e80=new C.v(20,-3)
D.e81=new C.v(21,8)
D.e83=new C.v(22,10)
D.aHf=new C.v(22,8)
D.e84=new C.v(24,0)
D.e85=new C.v(24,2)
D.e87=new C.v(24,-18)
D.e88=new C.v(24,-22)
D.e89=new C.v(25,8)
D.e8a=new C.v(26,0)
D.e8g=new C.v(28,-30)
D.e8l=new C.v(30,18)
D.e8m=new C.v(30,2)
D.e8n=new C.v(31,19)
D.e8o=new C.v(32,0)
D.aHi=new C.v(34,0)
D.aHj=new C.v(34,-32)
D.Ie=new C.v(36,0)
D.e8t=new C.v(3,-1)
D.e8w=new C.v(40,3)
D.e8A=new C.v(4,11)
D.e8D=new C.v(4,-2)
D.e8H=new C.v(5,0)
D.e8I=new C.v(5,17)
D.e8J=new C.v(5,6)
D.e8N=new C.v(6,11)
D.e8T=new C.v(8,7)
D.e8U=new C.v(8,-10)
D.e8V=new C.v(8,-14)
D.e8W=new C.v(8,-3)
D.aHn=new C.v(9,0)
D.e8Z=new C.v(-20.5,-17.6)
D.e9_=new C.v(-9,18.5)
D.e92=new C.v(-2.6,-1)
D.e93=new C.v(1.9,-0.8)
D.e96=new C.v(-0.22,0.09)
D.e9b=new C.v(2.6,1)
D.e9i=new C.v(-9,12.2)
D.e9A=new C.v(-9,20.5)
D.e9S=new C.v(-10,0)
D.e9T=new C.v(-10,12)
D.aHu=new C.v(-10,4)
D.e9U=new C.v(-11,-2)
D.e9V=new C.v(-13,-5)
D.e9W=new C.v(-14,0)
D.e9X=new C.v(-14,13)
D.e9Y=new C.v(-14,2)
D.e9Z=new C.v(-14,-12)
D.ea_=new C.v(-14,-19)
D.ea0=new C.v(-14,-23)
D.ea1=new C.v(-15,6)
D.ea2=new C.v(-16,14)
D.ea3=new C.v(-16,-8)
D.ea4=new C.v(-17,10)
D.ea5=new C.v(-17,-18)
D.ea6=new C.v(-17,-8)
D.ea8=new C.v(-18,20)
D.ea9=new C.v(-18,-9)
D.aHw=new C.v(-20,0)
D.eab=new C.v(-20,16)
D.eac=new C.v(-20,-9)
D.Sk=new C.v(-22,8)
D.ead=new C.v(-22,-10)
D.eae=new C.v(-22,-11)
D.eaf=new C.v(-24,10)
D.eag=new C.v(-24,11)
D.eah=new C.v(-24,14)
D.eai=new C.v(-24,-22)
D.eaj=new C.v(-25,-11)
D.eak=new C.v(-26,0)
D.eal=new C.v(-26,-18)
D.eam=new C.v(-2,9)
D.ean=new C.v(-2,-10)
D.eao=new C.v(-2,-20)
D.eap=new C.v(-2,-9)
D.eaq=new C.v(-32,0)
D.aHy=new C.v(-34,0)
D.eav=new C.v(-40,3)
D.eax=new C.v(-4,11)
D.eay=new C.v(-4,-17)
D.eaz=new C.v(-4,-2)
D.eaB=new C.v(-5,0)
D.eaC=new C.v(-5,20)
D.eaD=new C.v(-5,6)
D.eaE=new C.v(-6,26)
D.eaF=new C.v(-6,6)
D.eaG=new C.v(-6,-42)
D.eaH=new C.v(-7,-19)
D.eaI=new C.v(-7,-24)
D.eaJ=new C.v(-8,-9)
D.a5N=new C.v(-9,0)
D.eaK=new C.v(-9,1)
D.eaL=new C.v(-9,-23)
D.fm_=new C.y("Thinking\u2026",null,A.hg,null,null,null,null,null,null,null,null,null)
D.ebH=new C.D(A.jH,D.fm_,null)
D.fC7=new C.y("Start from a ready-made board",null,A.fS,null,null,null,null,null,null,null,null,null)
D.ebR=new C.D(A7.vB,D.fC7,null)
D.bwZ=new C.Q(4,0,4,14)
D.fhr=new C.H(!0,A.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmV=new C.y("Games and little helpers for a spare minute.",null,D.fhr,null,null,null,null,null,null,null,null,null)
D.ec0=new C.D(D.bwZ,D.fmV,null)
D.fyV=new C.y("Tap to throw in a star",null,A.kI,null,null,null,null,null,null,null,null,null)
D.b6_=new C.cp(A.A,null,null,D.fyV,null)
D.ehV=new C.cL(0,null,0,14,null,null,D.b6_,null)
D.d9Z=w([A.iB,A.bm],x.O)
D.aMp=new C.bT(A.A,0.5,A.x,null,0,D.d9Z,null,null)
D.eiD=new C.bT(A.A,0.5,A.x,null,0,D.ayH,null,null)
D.d1l=w([A.c,A.bK],x.O)
D.eiF=new C.bT(A.A,0.5,A.x,null,0,D.d1l,null,null)
D.eiG=new C.bT(A.A,0.5,A.x,null,0,M.axK,null,null)
D.di1=w([A.bN,A.jk],x.O)
D.aMq=new C.bT(A.A,0.5,A.x,null,0,D.di1,null,null)
D.cHd=w([A.c,A.bN],x.O)
D.eiK=new C.bT(A.t5,0.5,A.x,null,0,D.cHd,null,null)
D.bdo=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.biJ=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.d0n=w([D.bdo,D.ag3,D.biJ],x.O)
D.d7Y=w([0,0.7,1],x.n)
D.eiM=new C.bT(A.t5,0.5,A.x,null,0,D.d0n,D.d7Y,null)
D.cxE=w([A.oM,A.aF,A.K],x.O)
D.deO=w([0.3,0.7,1],x.n)
D.eiO=new C.bT(A.A,0.5,A.x,null,0,D.cxE,D.deO,null)
D.bmx=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.dgd=w([A.fc,D.bmx],x.O)
D.eiQ=new C.bT(A.t5,0.5,A.x,null,0,D.dgd,null,null)
D.cAs=w([A.dy,A.ct],x.O)
D.eiR=new C.bT(A.A,0.5,A.x,null,0,D.cAs,null,null)
D.cWI=w([A.oM,A.aF,A.fl],x.O)
D.eiS=new C.bT(A.A,0.5,A.x,null,0,D.cWI,null,null)
D.cOY=w([A.fJ,A.aM,A.d5],x.O)
D.eiU=new C.bT(A.t5,0.5,A.x,null,0,D.cOY,null,null)
D.daz=w([A.jk,L.ml],x.O)
D.eiV=new C.bT(A.t5,0.5,A.x,null,0,D.daz,null,null)
D.bdC=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.bbA=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cYX=w([D.bdC,D.bbA],x.O)
D.eiX=new C.bT(A.A,0.5,A.x,null,0,D.cYX,null,null)
D.bi7=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.bg5=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.bg9=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.dkq=w([D.bi7,D.bg5,D.bg9],x.O)
D.cVv=w([0,0.65,1],x.n)
D.eiY=new C.bT(M.aam,0.5,A.x,null,0,D.dkq,D.cVv,null)
D.eiZ=new C.bT(A.A,0.5,A.x,null,0,D.av7,null,null)
D.dhc=w([A.lJ,A.aF,A.fl],x.O)
D.ej3=new C.bT(A.A,0.5,A.x,null,0,D.dhc,null,null)
D.diS=w([A.jk,A.hJ],x.O)
D.ej6=new C.bT(A.A,0.5,A.x,null,0,D.diS,null,null)
D.aMu=new C.aT(9,9)
D.ejf=new C.aT(1.4,1.4)
D.ejZ=new C.z(0,-4)
D.epr=new C.z(0.22,4)
D.ewy=new C.z(0.8,-4)
D.eFO=new C.z(0.58,4)
D.eIx=new C.bl("Moon",1.62,4291941851)
D.eJ5=new C.bl("Neptune",11.15,4284524026)
D.eJJ=new C.bl("Sun",274,4294688548)
D.eJZ=new C.bl("Mercury",3.7,4288455599)
D.eK4=new C.bl("Earth",9.81,4281908728)
D.eK6=new C.bl("Mars",3.71,4294472049)
D.eKp=new C.bl("Venus",8.87,4294759245)
D.eKv=new C.bl("Saturn",10.44,4294829706)
D.eKS=new C.bl("Jupiter",24.79,4294677052)
D.eOs=new C.a9(10,-8,18,-2)
D.eOt=new C.a9(14,-14,20,14)
D.eOu=new C.a9(20,-2,30,2)
D.eOw=new C.a9(4,-13,30,-3)
D.eOy=new C.a9(8,-7,12,7)
D.eOE=new C.a9(-12,12,12,19)
D.eOF=new C.a9(-12,14,12,22)
D.eOG=new C.a9(-12,-22,12,8)
D.eOH=new C.a9(-12,-25,12,19)
D.eOI=new C.a9(-12,-26,12,-6)
D.eOJ=new C.a9(-12,-4,12,14)
D.eOK=new C.a9(-12,-6,10,6)
D.eOL=new C.a9(-14,20,14,24)
D.eOM=new C.a9(-14,6,14,10)
D.eON=new C.a9(-14,-17,14,15)
D.eOO=new C.a9(-14,-26,14,18)
D.eOP=new C.a9(-14,-4,14,20)
D.eOQ=new C.a9(-15,-29,15,25)
D.eOR=new C.a9(-16,-16,16,16)
D.eOS=new C.a9(-16,-22,-9,18)
D.eOT=new C.a9(-16,-24,16,-10)
D.eOU=new C.a9(-16,-2,16,20)
D.eOW=new C.a9(-18,20,18,24)
D.eOX=new C.a9(-18,-18,18,20)
D.eOY=new C.a9(-20,12,20,22)
D.eOZ=new C.a9(-20,-28,20,26)
D.eP_=new C.a9(-22,14,22,18)
D.aN1=new C.a9(-22,-26,22,24)
D.eP0=new C.a9(-22,-3,22,3)
D.eP1=new C.a9(-22,-4,22,12)
D.eP2=new C.a9(-24,-12,10,22)
D.eP3=new C.a9(-24,-14,22,8)
D.eP4=new C.a9(-24,-6,24,20)
D.aN2=new C.a9(-24,-9,24,9)
D.eP5=new C.a9(-25,14,25,19)
D.eP6=new C.a9(-26,-14,14,8)
D.eP7=new C.a9(-26,-4,26,20)
D.eP8=new C.a9(-26,-6,4,6)
D.aN3=new C.a9(-28,-13,28,13)
D.eP9=new C.a9(-28,-16,28,16)
D.ePa=new C.a9(-28,-16,28,8)
D.ePb=new C.a9(-28,-22,28,22)
D.ePc=new C.a9(-30,-12,30,14)
D.ePd=new C.a9(-30,-14,0,14)
D.ePe=new C.a9(-30,-18,30,20)
D.ePf=new C.a9(-30,-28,30,14)
D.ePg=new C.a9(-30,-2,30,18)
D.ePh=new C.a9(-30,-4,30,18)
D.ePi=new C.a9(-32,-17,32,17)
D.ePj=new C.a9(-32,-28,32,18)
D.ePk=new C.a9(-33,-21,33,17)
D.ePl=new C.a9(-34,14,34,26)
D.a6E=new C.a9(-34,-18,34,18)
D.ePm=new C.a9(-34,-4,34,7)
D.ePn=new C.a9(-36,-24,36,20)
D.ePo=new C.a9(-38,-22,38,22)
D.ePp=new C.a9(-3,12,3,22)
D.ePq=new C.a9(-3,5,3,15)
D.ePs=new C.a9(-46,-34,46,28)
D.ePt=new C.a9(-48,-3,48,3)
D.ePw=new C.a9(-6,18,24,24)
D.ePx=new C.a9(-6,5,6,12)
D.ePy=new C.a9(-6,-22,6,-15)
D.ePz=new C.a9(-9,-16,9,22)
D.ePA=new C.a9(-4.5,-24,4.5,-21.2)
D.ePC=new C.a9(14,-9,17.5,9)
D.e6w={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aNY=new C.dD(D.e6w,5,x.R)
D.e63={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eSJ=new C.dD(D.e63,10,x.R)
D.eUX=new C.ar(24,44)
D.eV1=new C.ar(300,300)
D.eVl=new C.ar(54,38)
D.eVs=new C.ar(66,38)
D.b7i=new C.fk(2,null,null,null,null,A.bu,null,null,null,null)
D.eWp=new C.a7(16,16,D.b7i,null)
D.aOZ=new C.hQ(3,12,12,0.82,null)
D.fDP=new C.y("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aP9=new C.b1(D.fDP,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.daC=w([A.c9,A.bH,A.b2,A.aN,A.pB,A.c9],x.O)
D.f1k=new C.fW(A.A,0,6.283185307179586,A.x,D.daC,null,null)
D.fam=new C.H(!0,A.aM,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Qn,null,null,null)
D.f2z=new C.es("You are here (Sun)",null,null,A.cO,null,null,null,null,null,null,D.fam)
D.aRC=new C.H(!0,A.aA,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2A=new C.es("What we see",null,null,A.cO,null,null,null,null,null,null,D.aRC)
D.f7I=new C.H(!0,A3.KT,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2D=new C.es("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cO,null,null,null,null,null,null,D.f7I)
D.fcA=new C.H(!0,A.km,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2J=new C.es("AI",null,null,A.cO,null,null,null,null,null,null,D.fcA)
D.f7t=new C.H(!0,A.bX,null,null,null,null,15,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2K=new C.es("Add atoms with the buttons below",null,null,A.cO,null,null,null,null,null,null,D.f7t)
D.aPY=new C.H(!0,A.bX,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2Z=new C.H(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f30=new C.H(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3w=new C.H(!0,A.bk,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3P=new C.H(!0,A.cl,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4j=new C.H(!0,A.bX,null,null,null,null,11,A.P,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4o=new C.H(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4E=new C.H(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f56=new C.H(!0,A.aS,null,null,null,null,12,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5v=new C.H(!0,A.bX,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5F=new C.H(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTl=new C.cR(A.hM,A.dE,6)
D.d48=w([D.eTl],x.q)
D.f5Z=new C.H(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d48,null,null,null)
D.f61=new C.H(!0,A.es,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f64=new C.H(!0,A.c,null,null,null,null,17,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f66=new C.H(!0,A.bX,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6w=new C.H(!0,A.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQm=new C.H(!0,A.bX,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6Q=new C.H(!0,A.aA,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6R=new C.H(!0,A.bX,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7M=new C.H(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8g=new C.H(!0,A.aA,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8M=new C.H(!0,A.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTo=new C.cR(A.aW,A.J,3)
D.ayW=w([D.eTo],x.q)
D.f8P=new C.H(!0,A.c,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ayW,null,null,null)
D.f8U=new C.H(!0,A.c,null,null,null,null,12.5,A.a6,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9A=new C.H(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Qn,null,null,null)
D.fa2=new C.H(!0,A.aA,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fab=new C.H(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faB=new C.H(!0,A.tw,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faR=new C.H(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbb=new C.H(!0,A.bM,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbg=new C.H(!0,A.bX,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbl=new C.H(!0,A.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbr=new C.H(!0,A.aA,null,null,null,null,18,A.H,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbS=new C.H(!0,A.bX,null,null,null,null,8.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc5=new C.H(!0,A.n7,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc6=new C.H(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcl=new C.H(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aR1=new C.H(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcU=new C.H(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTc=new C.cR(A.w,A.J,5)
D.cT5=w([D.eTc],x.q)
D.fcV=new C.H(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cT5,null,null,null)
D.fd_=new C.H(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ayW,null,null,null)
D.fdf=new C.H(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdl=new C.H(!0,A.fA,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdC=new C.H(!0,A.bX,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe6=new C.H(!0,A.b2,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feF=new C.H(!0,A.bX,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffi=new C.H(!0,A.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffr=new C.H(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRn=new C.H(!0,A.aA,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffU=new C.H(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg3=new C.H(!0,A.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fga=new C.H(!0,A.aM,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgu=new C.H(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRy=new C.H(!0,A.ad,null,null,null,null,12,A.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgx=new C.H(!0,A.aM,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhh=new C.H(!0,A.aS,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8F=new C.H(!0,A.c,null,null,null,null,13,A.a6,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhG=new C.H(!0,A.tw,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi_=new C.H(!0,A.b2,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f69=new C.H(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fio=new C.y("\u26a0\ufe0f ",null,D.f69,null,null,null,null,null,null,null,null,null)
D.fiA=new C.y("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.wB,null,null,null,null,null,null,null,null,null)
D.fj0=new C.y("LETTER COUNT OF THE SECRET VERSION",null,Q.mQ,null,null,null,null,null,null,null,null,null)
D.fk4=new C.y("Pick one, then change it and see what happens.",null,A.wB,null,null,null,null,null,null,null,null,null)
D.fk8=new C.y("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.f7e=new C.H(!0,A.ad,null,null,null,null,null,A.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl2=new C.y("What do you want to invent? Type it below, or tap an idea.",null,D.f7e,null,null,null,null,null,null,null,null,null)
D.flp=new C.y("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,V.a7V,null,null,null,null,null,null,null,null,null)
D.fmx=new C.y("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fn7=new C.y("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fnc=new C.y("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fnK=new C.y("Make it yours",null,A.kg,null,null,null,null,null,null,null,null,null)
D.fo1=new C.y("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a82,null,null,null,null,null,null,null,null,null)
D.fbw=new C.H(!0,A.jj,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqn=new C.y("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.fbw,null,null,null,null,null,null,null,null,null)
D.fqC=new C.y("YOUR DECODING",null,Q.mQ,null,null,null,null,null,null,null,null,null)
D.fqO=new C.y("5G",null,U.aQp,null,null,null,null,null,null,null,null,null)
D.fdS=new C.H(!0,A.bX,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frW=new C.y("WHAT HAPPENS",null,D.fdS,null,null,null,null,null,null,null,null,null)
D.ftC=new C.y("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fuh=new C.y("Change the words and pictures on the three slabs.",null,A.wB,null,null,null,null,null,null,null,null,null)
D.fus=new C.y("All the parts and wires will be removed.",null,A.hG,null,null,null,null,null,null,null,null,null)
D.fuM=new C.y("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fvl=new C.y("Tap the crank on the board again and again to spin it faster.",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fwd=new C.y("INTERCEPTED",null,Q.mQ,null,null,null,null,null,null,null,null,null)
D.fwy=new C.y("\ud83c\udfaf Challenges",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fx3=new C.y("Remove this part",null,V.aQ1,null,null,null,null,null,null,null,null,null)
D.fxl=new C.y("Clear the board?",null,A.dp,null,null,null,null,null,null,null,null,null)
D.fdm=new C.H(!0,A.bv,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxB=new C.y("How the Lab works",null,D.fdm,null,null,null,null,null,null,null,null,null)
D.f4Q=new C.H(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxV=new C.y("Electronics Lab",null,D.f4Q,null,null,null,null,A.a2,null,1,null,null)
D.fxY=new C.y("?",null,M.aRw,null,null,null,null,null,null,null,null,null)
D.fbq=new C.H(!0,A.aN,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy2=new C.y("Planet Earth",null,D.fbq,null,null,null,null,null,null,null,null,null)
D.fzg=new C.y("Ready-made circuits",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fzS=new C.y("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fAa=new C.y("UNIVERSE EXPLORER",null,I.a80,null,null,null,null,null,null,null,null,null)
D.fCI=new C.y("SECRET VERSION",null,Q.mQ,null,null,null,null,null,null,null,null,null)
D.fgd=new C.H(!0,A.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDe=new C.y("\u26a0 There is no air here, so a parachute will not work.",null,D.fgd,null,null,null,null,null,null,null,null,null)
D.fEr=new C.y("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,V.a7V,null,null,null,null,null,null,null,null,null)
D.fEV=new C.y("NGMY",null,A.uS,null,null,null,null,null,null,null,null,null)
D.fF7=new C.y("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.U1,null,null,null,null,null,null,null,null,null)
D.fFu=new C.y("Tap it to change its setting. Drag from the right dot to connect.",null,A.kH,null,null,null,null,null,null,null,null,null)
D.fGs=new C.y("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.wB,null,null,null,null,null,null,null,null,null)
D.fGu=new C.y("TOOLBOX",null,I.a80,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hfW=null
$.hfV=null
$.hlZ=0
$.hNV=C.U(x.N,x.k)
$.hOv=C.U(x.N,x.k)
$.hfg=null
$.hOg=C.U(x.N,x.k)
$.hPj=C.U(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ijO","bDT",()=>{var v="led"
return C.a([B.axZ("Both together","Make the light glow only when BOTH switches are ON.",2,new B.fhd(),v),B.axZ("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.fhe(),v),B.axZ("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.fhf(),v),B.axZ("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.fhm(),v),B.axZ("Not both","Make the light go OFF only when both switches are ON.",2,new B.fhn(),v),B.axZ("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.fho(),"buzzer")],C.ax("O<baA>"))})
w($,"ikf","bDU",()=>C.a([B.oC("UNIVERSE","Earth, space and gravity",A.O7,A.aN,new B.fhE()),B.oC("ELECTRONICS LAB","Batteries, wires, real circuits",Af.BN,A.aN,new B.fhF()),B.oC("DISCOVERY LAB","Body Explorer: a real 3D human",D.a09,A.b2,new B.fhG()),B.oC("TOOLBOX","Converter, clock, games",T.alk,A.cs,new B.fhR()),B.oC("MOLECULE MAKER","Join atoms into real molecules",A.Ny,A.hm,new B.fhT()),B.oC("DNA LAB","Copy DNA, build a protein",D.a09,A.bY,new B.fhU()),B.oC("ECOSYSTEM LAB","Grass, rabbits and foxes",A.yo,A.b2,new B.fhV()),B.oC("BALANCE LAB","Levers, weight and torque",D.bHZ,A.aM,new B.fhW()),B.oC("GEAR LAB","Teeth, speed and force",A.BV,A.cs,new B.fhX()),B.oC("LASER MAZE","Bend the beam with mirrors",I.alJ,A.av,new B.fhY()),B.oC("LIGHT MIXER","Match colours with light",D.bFF,A.b8,new B.fhZ()),B.oC("CIPHER LAB","Make and crack secret codes",A.yz,A.aN,new B.fhH()),B.oC("REACTION LAB","Wire parts together",A.yD,A.bv,new B.fhI()),B.oC("SPARK PAINTER","Paint with light",A.a0b,A.bY,new B.fhJ()),B.oC("ROCKET LANDER","Land softly on the pad",A.no,A.aN,new B.fhK()),B.oC("ORBIT STUDIO","Slingshot planets",A.mz,A.cs,new B.fhL()),B.oC("SWARM STUDIO","A living school of fish",A.Ny,A.b2,new B.fhM()),B.oC("CHAIN BURST","One tap, a whole chain",A.h9,A.bY,new B.fhN()),B.oC("TITLE ANIMATOR","Make a moving title",A.yv,A.bH,new B.fhO()),B.oC("CIRCUIT LAB","Connect logic, learn it",A.a0B,A.cl,new B.fhP()),B.oC("MARBLE MUSIC","Marbles ring the notes",D.bFk,A.b8,new B.fhQ()),B.oC("ORBIT SEQUENCER","Planets play the tune",D.bHM,A.bu,new B.fhS())],C.ax("O<bsr>")))
w($,"ilL","qj",()=>{var v,u,t=C.U(x.N,x.dV)
for(v=0;v<76;++v){u=D.QF[v]
t.n(0,u.a,u)}return t})
w($,"ijP","ahJ",()=>C.a([B.FA("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.fhp()),B.FA("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.fhq()),B.FA("Spin the motor","A battery and a motor in a loop will make it spin.",new B.fhr()),B.FA("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.fhs()),B.FA("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.fht()),B.FA("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.fhg()),B.FA("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.fhh()),B.FA("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.fhi()),B.FA("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.fhj()),B.FA("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.fhk()),B.FA("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.fhl())],C.ax("O<baB>")))
w($,"ikh","huo",()=>C.a([B.a0H("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aM,A.cc,new B.fi6()),B.a0H("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c9,A.bz,new B.fi7()),B.a0H("Breathe","Calm down in a minute","\ud83e\udee7",A.hm,A.cA,new B.fi8()),B.a0H("Draw Pad","Sketch and share","\ud83c\udfa8",A.bD,A.b6,new B.fi9()),B.a0H("Memory Match","Find the pairs","\ud83c\udccf",A.aN,A.cb,new B.fia()),B.a0H("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bH,A.bd,new B.fib()),B.a0H("Tip & Split","Share the bill","\ud83e\uddfe",A.b2,A.aZ,new B.fic()),B.a0H("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bu,A.aE,new B.fid())],C.ax("O<btM>")))
w($,"ikg","hun",()=>C.a([B.af3("EARTH GLOBE","Turn it, tap a country",A.mz,A.aN,new B.fi_()),B.af3("SOLAR SYSTEM","The Sun and its worlds",D.bFo,A.aM,new B.fi0()),B.af3("GRAVITY LAB","Drop, weigh, orbit",D.amr,A.cs,new B.fi1()),B.af3("BLACK HOLE","Throw in a star",A.FW,A.bu,new B.fi2()),B.af3("GALAXY","Build, tilt, collide",A.yc,A.h4,new B.fi3()),B.af3("SIZE COMPARE","Earth next to a star",D.bFH,A.bY,new B.fi4()),B.af3("SEASONS & MOON","Why it is summer",A.vL,A.bv,new B.fi5())],C.ax("O<btH>")))})()};
(a=>{a["0znNUEl62GaI4LOyG4WT7LEa834="]=a.current})($__dart_deferred_initializers__);