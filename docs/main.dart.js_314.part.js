((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A0,A1,Aa,A2,A3,I,P,A4,Ab,A5,A6,G,Ac,Ad,A7,Ae,Y,Af,Ag,N,Q,Ah,Ai,Z,O,V,Aj,Ak,R,M,Al,W,K,S,Am,E,F,L,B={
byH(d){return B.hQn(d)},
hQn(d){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o
var $async$byH=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qP(C.n5(""),d,A.hB,null,null).d6(0,A.Y2),$async$byH)
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
return C.i($async$byH,v)},
i10(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Q_[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.cS(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.hn(D.Q_,new B.fw8())
if(w==null)w=A.d.gI(D.Q_)
s=C.T(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.K)(r),++u){l=r[u].a
k=l[0]
l=$.qf().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.K)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gI(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.ajy(w.a,w.b,m,w,s,!1)},
hVG(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.M(D.Qp,new B.fmo(),x.bd).aH(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
i8S(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cH(b2,"{")
v=A.a.oD(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.S.aI(0,A.a.ap(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aX(a5)
r=0
for(a6=x.j,a7=J.aV(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=C.t(J.q(q,"kind"))
o=C.t(J.q(q,"id"))
if(!$.qf().ai(0,p)||J.f1(s,o)||J.ad(t)>=8)continue
J.ci(s,o)
n=C.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dh4[a9]
l=J.q(q,m)
if(typeof l=="number")J.aG(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.dR(J.q(q,"x")):0.2+A.k.E(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.dR(J.q(q,"y")):0.25+A.k.an(r,3)*0.3,0.1,0.9)
J.ci(t,new C.e7([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=C.t(J.q(g,0))
e=C.t(J.q(g,2))
d=A.o.D(A.k.N(C.dR(J.q(g,1))),0,1)
a0=A.o.D(A.k.N(C.dR(J.q(g,3))),0,1)
if(J.f1(s,f)&&J.f1(s,e)&&!J.A(f,e))J.ci(i,new C.cA([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.L.a(J.q(u,"steps"))
a0=J.aV(a0==null?A.cv:a0)
while(a0.C()){a2=a0.gR(a0)
J.ci(a1,C.t(a2))}a3=a1
a0=J.q(u,"title")
a0=C.t(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new B.mz(a0,C.t(a1==null?"":a1),t,i,A.T)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.t(a5==null?"":a5)
return new B.ajy(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
i_B(d){var w,v,u=B.h5B()
d.B(u)
for(w=0;w<60;++w)u.v3(0,0.03333333333333333)
v=u.a
return A.d.b4(v,new B.ft6(u))&&!A.d.d7(v,new B.ft7())},
i_A(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.K)(l),++u){t=l[u];++v
k.n(0,t.a,$.qf().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.K)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.dfu,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aH(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+A.k.ab(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.K)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aH(s,"\n")+"\nWires: "+A.d.aH(l,"; ")},
hOY(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.K)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aH(v,"\n")+"\n\n"}v=A.d.aH(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
i1_(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qf().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Qp[u]
if(A.d.b4(w,new B.fw5(s)))if(!C.cS(r,s.b.toLowerCase(),0))v=C.cS(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a_(w,new B.fw6(e),C.U(w).k("a_<1>")).gam(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ab(A.d.cK(w,0,new B.fw7())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gI(w)
w=$.qf().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ajy:function ajy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fw8:function fw8(){},
fmo:function fmo(){},
ft6:function ft6(d){this.a=d},
ft7:function ft7(){},
fw5:function fw5(d){this.a=d},
fw6:function fw6(d){this.a=d},
fw7:function fw7(){},
Va:function Va(d,e){this.c=d
this.a=e},
bjn:function bjn(d,e,f,g,h){var _=this
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
e7_:function e7_(d){this.a=d},
e70:function e70(d,e,f){this.a=d
this.b=e
this.c=f},
e71:function e71(d){this.a=d},
e7c:function e7c(d){this.a=d},
e7d:function e7d(d,e){this.a=d
this.b=e},
e78:function e78(d){this.a=d},
e76:function e76(d,e){this.a=d
this.b=e},
e77:function e77(d,e,f){this.a=d
this.b=e
this.c=f},
e79:function e79(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e74:function e74(d){this.a=d},
e75:function e75(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7a:function e7a(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e73:function e73(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7b:function e7b(d,e){this.a=d
this.b=e},
e72:function e72(d,e){this.a=d
this.b=e},
e7g:function e7g(d){this.a=d},
e7f:function e7f(d){this.a=d},
e7h:function e7h(d){this.a=d},
e7e:function e7e(d){this.a=d},
e7i:function e7i(d,e){this.a=d
this.b=e},
e7j:function e7j(d,e){this.a=d
this.b=e},
e7k:function e7k(d,e){this.a=d
this.b=e},
e7l:function e7l(d,e){this.a=d
this.b=e},
bz2(d,e,f){var w=null
return C.w(C.a([C.d(d,w,w,w,w,w,w,D.aPI,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.P,0,A.p)},
hj3(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.w(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zI,A.L,w,w),A.aB,C.bW(A.fR,g,A.bq,0,8)],x.p),A.m,w,A.e,A.P,0,A.p),A.f,w,w,new C.o(D.W5,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
FW:function FW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uM:function uM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VC:function VC(d){this.a=d},
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
_.fq$=h
_.l1$=i
_.fT$=j
_.fs$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
en5:function en5(){},
enp:function enp(d){this.a=d},
eno:function eno(d,e){this.a=d
this.b=e},
enq:function enq(){},
enr:function enr(){},
en7:function en7(d,e,f){this.a=d
this.b=e
this.c=f},
en6:function en6(d,e){this.a=d
this.b=e},
emX:function emX(d){this.a=d},
emY:function emY(d){this.a=d},
emZ:function emZ(d){this.a=d},
en_:function en_(d){this.a=d},
en0:function en0(d){this.a=d},
en1:function en1(d){this.a=d},
en2:function en2(d){this.a=d},
en3:function en3(d){this.a=d},
en4:function en4(d){this.a=d},
emV:function emV(d){this.a=d},
emW:function emW(d){this.a=d},
emU:function emU(d){this.a=d},
eni:function eni(d,e){this.a=d
this.b=e},
end:function end(d){this.a=d},
ene:function ene(d){this.a=d},
ena:function ena(d){this.a=d},
enf:function enf(d){this.a=d},
en9:function en9(d){this.a=d},
eng:function eng(d){this.a=d},
enh:function enh(d){this.a=d},
en8:function en8(d){this.a=d},
enj:function enj(d,e){this.a=d
this.b=e},
enc:function enc(d,e){this.a=d
this.b=e},
enk:function enk(d){this.a=d},
enl:function enl(d){this.a=d},
enm:function enm(d){this.a=d},
enn:function enn(d){this.a=d},
enb:function enb(d){this.a=d},
bgm:function bgm(d,e){this.b=d
this.a=e},
aLC:function aLC(){},
bwG:function bwG(){},
cEM(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cEM=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.qS().jC(0,"assets/data/body3d.bin"),$async$cEM)
case 3:d=a1
$.heq=J.eZ(A.dD.gaN(d),d.byteOffset,d.byteLength)
t=C.aRI(d)
s=t.getUint32(4,!0)
r=C.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=C.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=C.jq(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.d4H[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a2N(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aXK))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.b9t(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cEM,v)},
aRv:function aRv(d,e,f){this.a=d
this.b=e
this.c=f},
a2N:function a2N(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b9t:function b9t(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
U2:function U2(d){this.a=d},
aCa:function aCa(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.fq$=s
_.l1$=t
_.fT$=u
_.fs$=v
_.bt$=w
_.a9$=a0
_.c=_.a=null},
dEH:function dEH(d){this.a=d},
dEG:function dEG(d,e){this.a=d
this.b=e},
dEj:function dEj(d,e){this.a=d
this.b=e},
dEk:function dEk(){},
dEI:function dEI(){},
dEl:function dEl(d,e){this.a=d
this.b=e},
dEm:function dEm(d){this.a=d},
dEn:function dEn(){},
dEo:function dEo(d){this.a=d},
dEq:function dEq(d,e){this.a=d
this.b=e},
dEp:function dEp(d){this.a=d},
dEg:function dEg(d,e,f){this.a=d
this.b=e
this.c=f},
dEh:function dEh(d){this.a=d},
dEi:function dEi(d){this.a=d},
dEx:function dEx(d){this.a=d},
dEy:function dEy(d,e){this.a=d
this.b=e},
dEz:function dEz(d,e){this.a=d
this.b=e},
dEA:function dEA(d){this.a=d},
dEw:function dEw(d,e){this.a=d
this.b=e},
dEB:function dEB(d,e){this.a=d
this.b=e},
dEv:function dEv(d,e){this.a=d
this.b=e},
dEC:function dEC(d){this.a=d},
dEu:function dEu(d){this.a=d},
dED:function dED(d){this.a=d},
dEt:function dEt(d){this.a=d},
dEE:function dEE(d){this.a=d},
dEs:function dEs(d){this.a=d},
dEF:function dEF(d){this.a=d},
dEr:function dEr(d){this.a=d},
aKE:function aKE(){},
aKF:function aKF(){},
c05:function c05(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c06:function c06(d,e){this.a=d
this.b=e},
c07:function c07(d){this.a=d},
axF(d,e,f,g,h){return new B.bab(d,e,f,g,h)},
fXm(d,e,f,g,h,i){return $.hMl.c8(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.cLy(d,e,f,i,g,h))},
xZ:function xZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Cc:function Cc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nm:function nm(d,e,f){this.a=d
this.b=e
this.c=f},
bab:function bab(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fg5:function fg5(){},
fg6:function fg6(){},
fg7:function fg7(){},
fge:function fge(){},
fgf:function fgf(){},
fgg:function fgg(){},
U7:function U7(d){this.a=d},
aCd:function aCd(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.fq$=m
_.l1$=n
_.fT$=o
_.fs$=p
_.bt$=q
_.a9$=r
_.c=_.a=null},
dGS:function dGS(d){this.a=d},
dGw:function dGw(d,e){this.a=d
this.b=e},
dGz:function dGz(){},
dGT:function dGT(){},
dGu:function dGu(d,e){this.a=d
this.b=e},
dGv:function dGv(d,e){this.a=d
this.b=e},
dGA:function dGA(d,e,f){this.a=d
this.b=e
this.c=f},
dGp:function dGp(){},
dGq:function dGq(){},
dGr:function dGr(d){this.a=d},
dGs:function dGs(d,e){this.a=d
this.b=e},
dGt:function dGt(d,e,f){this.a=d
this.b=e
this.c=f},
dGB:function dGB(){},
dGC:function dGC(d,e){this.a=d
this.b=e},
dGD:function dGD(d){this.a=d},
dGy:function dGy(d,e){this.a=d
this.b=e},
dGx:function dGx(d){this.a=d},
dGo:function dGo(d,e,f){this.a=d
this.b=e
this.c=f},
dGM:function dGM(d){this.a=d},
dGL:function dGL(d){this.a=d},
dGN:function dGN(d){this.a=d},
dGK:function dGK(d){this.a=d},
dGI:function dGI(d){this.a=d},
dGJ:function dGJ(d){this.a=d},
dGH:function dGH(d){this.a=d},
dGE:function dGE(d){this.a=d},
dGG:function dGG(d){this.a=d},
dGO:function dGO(d,e){this.a=d
this.b=e},
dGP:function dGP(d,e){this.a=d
this.b=e},
dGQ:function dGQ(d){this.a=d},
dGF:function dGF(d){this.a=d},
dGR:function dGR(d,e){this.a=d
this.b=e},
bau:function bau(d,e){this.b=d
this.a=e},
cLy:function cLy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aKK:function aKK(){},
bwp:function bwp(){},
hDa(){return new B.N9(null)},
oy(d,e,f,g,h){return new B.bs0(d,e,f,g,h)},
bqr(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fXS(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
N9:function N9(d){this.a=d},
Kd:function Kd(d,e){this.a=d
this.b=e},
Ar:function Ar(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aCu:function aCu(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dMH:function dMH(d,e){this.a=d
this.b=e},
dMG:function dMG(d){this.a=d},
dMJ:function dMJ(d,e){this.a=d
this.b=e},
dMI:function dMI(d){this.a=d},
bs0:function bs0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fgw:function fgw(){},
fgx:function fgx(){},
fgy:function fgy(){},
fgJ:function fgJ(){},
fgL:function fgL(){},
fgM:function fgM(){},
fgN:function fgN(){},
fgO:function fgO(){},
fgP:function fgP(){},
fgQ:function fgQ(){},
fgR:function fgR(){},
fgz:function fgz(){},
fgA:function fgA(){},
fgB:function fgB(){},
fgC:function fgC(){},
fgD:function fgD(){},
fgE:function fgE(){},
fgF:function fgF(){},
fgG:function fgG(){},
fgH:function fgH(){},
fgI:function fgI(){},
fgK:function fgK(){},
bqs:function bqs(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eXN:function eXN(d){this.a=d},
eXM:function eXM(d,e){this.a=d
this.b=e},
eXK:function eXK(d){this.a=d},
eXO:function eXO(d){this.a=d},
eXL:function eXL(d,e){this.a=d
this.b=e},
aeA:function aeA(d,e,f){this.c=d
this.d=e
this.a=f},
ads:function ads(d,e,f){this.c=d
this.d=e
this.a=f},
PR:function PR(d,e,f,g,h,i,j,k,l,m){var _=this
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
brq:function brq(d,e){this.b=d
this.a=e},
bqW:function bqW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9a:function b9a(d,e){this.b=d
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
_.cO$=e
_.b2$=f
_.c=_.a=null},
eXt:function eXt(d){this.a=d},
eXs:function eXs(d){this.a=d},
eXr:function eXr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eXq:function eXq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eXo:function eXo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eXn:function eXn(d,e,f){this.a=d
this.b=e
this.c=f},
eXp:function eXp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eXm:function eXm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eXB:function eXB(d){this.a=d},
eXA:function eXA(d){this.a=d},
eXC:function eXC(d,e){this.a=d
this.b=e},
eXD:function eXD(d,e){this.a=d
this.b=e},
eXE:function eXE(d,e){this.a=d
this.b=e},
eXz:function eXz(d,e,f){this.a=d
this.b=e
this.c=f},
eXF:function eXF(d,e,f){this.a=d
this.b=e
this.c=f},
eXy:function eXy(d){this.a=d},
eXu:function eXu(d){this.a=d},
eXG:function eXG(d){this.a=d},
eXH:function eXH(d){this.a=d},
eXx:function eXx(d,e){this.a=d
this.b=e},
eXI:function eXI(d,e){this.a=d
this.b=e},
eXw:function eXw(d,e){this.a=d
this.b=e},
eXJ:function eXJ(d,e){this.a=d
this.b=e},
eXv:function eXv(d,e){this.a=d
this.b=e},
eXk:function eXk(){},
eXl:function eXl(){},
bq4:function bq4(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpw:function bpw(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9Q:function b9Q(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpy:function bpy(d,e,f){this.b=d
this.c=e
this.a=f},
btv:function btv(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aMt:function aMt(){},
hkt(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new C.u(w,0)),u=e.aC(0,new C.u(w,0)),t=1-f,s=3*t
return d.aG(0,t*t*t).ad(0,v.aG(0,s*t*f)).ad(0,u.aG(0,s*f*f)).ad(0,e.aG(0,f*f*f))},
bgl(d,e,f,g,h,i){return $.hMW.c8(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.dgw(d,e,f,i,g,h))},
a00:function a00(d,e){this.a=d
this.b=e},
q2:function q2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qJ:function qJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Cg:function Cg(d,e){this.a=d
this.b=e},
YZ:function YZ(d,e){this.a=d
this.b=e},
aeq:function aeq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0d:function a0d(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Cq:function Cq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abj:function abj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abA:function abA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adw:function adw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgj:function bgj(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bv$=_.bI$=0},
dgA:function dgA(d){this.a=d},
dgB:function dgB(d){this.a=d},
dgx:function dgx(d,e){this.a=d
this.b=e},
dgy:function dgy(d){this.a=d},
dgz:function dgz(d){this.a=d},
dgC:function dgC(d){this.a=d},
dgD:function dgD(d){this.a=d},
dgE:function dgE(d){this.a=d},
dgF:function dgF(d){this.a=d},
dgG:function dgG(d){this.a=d},
dgH:function dgH(d){this.a=d},
dgI:function dgI(d){this.a=d},
dgJ:function dgJ(d){this.a=d},
dgK:function dgK(d){this.a=d},
FI:function FI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VB:function VB(d){this.a=d},
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
_.bt$=i
_.a9$=j
_.c=_.a=null},
emq:function emq(d){this.a=d},
emf:function emf(d){this.a=d},
emh:function emh(){},
emi:function emi(){},
eml:function eml(){},
emm:function emm(d,e,f){this.a=d
this.b=e
this.c=f},
emn:function emn(d){this.a=d},
emo:function emo(d){this.a=d},
emj:function emj(){},
emk:function emk(d){this.a=d},
emQ:function emQ(d){this.a=d},
emp:function emp(){},
emb:function emb(d){this.a=d},
ems:function ems(d){this.a=d},
emr:function emr(d){this.a=d},
emu:function emu(){},
emt:function emt(d,e){this.a=d
this.b=e},
eme:function eme(){},
emc:function emc(d){this.a=d},
emd:function emd(d){this.a=d},
emO:function emO(d){this.a=d},
emN:function emN(d){this.a=d},
emP:function emP(d){this.a=d},
emE:function emE(d,e){this.a=d
this.b=e},
emM:function emM(d){this.a=d},
emK:function emK(d){this.a=d},
emL:function emL(d){this.a=d},
emJ:function emJ(d){this.a=d},
emI:function emI(d){this.a=d},
emF:function emF(d){this.a=d},
emG:function emG(d){this.a=d},
emH:function emH(d){this.a=d},
emg:function emg(){},
emA:function emA(d){this.a=d},
emB:function emB(d){this.a=d},
emz:function emz(d){this.a=d},
emC:function emC(d){this.a=d},
emy:function emy(d){this.a=d},
emD:function emD(d){this.a=d},
emx:function emx(d){this.a=d},
emw:function emw(d){this.a=d},
emv:function emv(d,e){this.a=d
this.b=e},
bgk:function bgk(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dgw:function dgw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aLA:function aLA(){},
bkU:function bkU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
PI:function PI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
VQ:function VQ(d){this.a=d},
bjY:function bjY(d,e,f,g,h,i,j,k){var _=this
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
eyv:function eyv(d){this.a=d},
eyt:function eyt(d){this.a=d},
eyu:function eyu(){},
ey6:function ey6(){},
ey5:function ey5(){},
eyf:function eyf(d,e){this.a=d
this.b=e},
eyh:function eyh(d){this.a=d},
eyl:function eyl(d){this.a=d},
eyg:function eyg(d){this.a=d},
eym:function eym(d){this.a=d},
eyn:function eyn(d){this.a=d},
eyo:function eyo(d,e){this.a=d
this.b=e},
eye:function eye(d,e){this.a=d
this.b=e},
eyp:function eyp(d){this.a=d},
eyd:function eyd(d){this.a=d},
eyq:function eyq(d,e){this.a=d
this.b=e},
eyc:function eyc(d,e){this.a=d
this.b=e},
eyr:function eyr(d){this.a=d},
eyb:function eyb(d,e){this.a=d
this.b=e},
eys:function eys(d){this.a=d},
eya:function eya(d){this.a=d},
eyi:function eyi(d){this.a=d},
ey9:function ey9(d){this.a=d},
eyj:function eyj(d){this.a=d},
ey8:function ey8(d){this.a=d},
eyk:function eyk(d,e){this.a=d
this.b=e},
ey7:function ey7(d,e){this.a=d
this.b=e},
brl:function brl(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
W1:function W1(d){this.a=d},
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
_.bt$=f
_.a9$=g
_.c=_.a=null},
eF4:function eF4(d,e){this.a=d
this.b=e},
eF5:function eF5(d,e,f){this.a=d
this.b=e
this.c=f},
eF6:function eF6(d){this.a=d},
eF3:function eF3(){},
eF7:function eF7(d,e){this.a=d
this.b=e},
eF2:function eF2(d,e){this.a=d
this.b=e},
eF8:function eF8(d,e){this.a=d
this.b=e},
eF1:function eF1(d,e){this.a=d
this.b=e},
eF9:function eF9(d){this.a=d},
eF0:function eF0(d){this.a=d},
eFa:function eFa(d,e){this.a=d
this.b=e},
eF_:function eF_(d,e){this.a=d
this.b=e},
eFb:function eFb(d){this.a=d},
eFc:function eFc(d){this.a=d},
eEZ:function eEZ(d,e){this.a=d
this.b=e},
aLJ:function aLJ(){},
aLP:function aLP(){},
a_v:function a_v(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
Vy:function Vy(d){this.a=d},
aDC:function aDC(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fq$=h
_.l1$=i
_.fT$=j
_.fs$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
eiX:function eiX(d){this.a=d},
eiY:function eiY(d,e){this.a=d
this.b=e},
eiL:function eiL(d,e){this.a=d
this.b=e},
eiM:function eiM(d){this.a=d},
eiJ:function eiJ(d){this.a=d},
eiK:function eiK(d){this.a=d},
eiI:function eiI(d){this.a=d},
eiN:function eiN(d){this.a=d},
eiH:function eiH(d,e){this.a=d
this.b=e},
eiP:function eiP(d){this.a=d},
eiG:function eiG(d,e){this.a=d
this.b=e},
eiQ:function eiQ(d){this.a=d},
eiF:function eiF(d,e){this.a=d
this.b=e},
eiR:function eiR(d){this.a=d},
eiE:function eiE(d){this.a=d},
eiS:function eiS(d){this.a=d},
eiD:function eiD(d){this.a=d},
eiT:function eiT(d){this.a=d},
eiC:function eiC(d){this.a=d},
eiU:function eiU(d){this.a=d},
eiV:function eiV(d){this.a=d},
eiW:function eiW(d){this.a=d},
eiB:function eiB(d){this.a=d},
eiO:function eiO(d){this.a=d},
bkH:function bkH(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abq:function abq(d,e,f){this.a=d
this.b=e
this.c=f},
VX:function VX(d){this.a=d},
bk2:function bk2(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fq$=i
_.l1$=j
_.fT$=k
_.fs$=l
_.bt$=m
_.a9$=n
_.c=_.a=null},
eEw:function eEw(d){this.a=d},
eEx:function eEx(d){this.a=d},
eEv:function eEv(d){this.a=d},
eEl:function eEl(d,e){this.a=d
this.b=e},
eEm:function eEm(d){this.a=d},
eEj:function eEj(d){this.a=d},
eEk:function eEk(d){this.a=d},
eEi:function eEi(d){this.a=d},
eEb:function eEb(d){this.a=d},
eEc:function eEc(d){this.a=d},
eEa:function eEa(d){this.a=d},
eEn:function eEn(d,e){this.a=d
this.b=e},
eEh:function eEh(d,e){this.a=d
this.b=e},
eEo:function eEo(d,e){this.a=d
this.b=e},
eEg:function eEg(d,e){this.a=d
this.b=e},
eEp:function eEp(d){this.a=d},
eEf:function eEf(d){this.a=d},
eEq:function eEq(d){this.a=d},
eEe:function eEe(d,e){this.a=d
this.b=e},
eEr:function eEr(d){this.a=d},
eEd:function eEd(d,e){this.a=d
this.b=e},
eEs:function eEs(d){this.a=d},
eE9:function eE9(d,e){this.a=d
this.b=e},
eEt:function eEt(d){this.a=d},
eE8:function eE8(d,e){this.a=d
this.b=e},
eEu:function eEu(d){this.a=d},
eE7:function eE7(d,e){this.a=d
this.b=e},
bsc:function bsc(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abT:function abT(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
U5:function U5(d){this.a=d},
aCc:function aCc(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=1
_.x=g
_.Q=_.z=_.y=!1
_.as=0
_.at=null
_.ax=0
_.fq$=h
_.l1$=i
_.fT$=j
_.fs$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
dG0:function dG0(d){this.a=d},
dG_:function dG_(d,e){this.a=d
this.b=e},
dG1:function dG1(){},
dG2:function dG2(d){this.a=d},
dFR:function dFR(d,e){this.a=d
this.b=e},
dFU:function dFU(d){this.a=d},
dFT:function dFT(d,e){this.a=d
this.b=e},
dFS:function dFS(d,e){this.a=d
this.b=e},
dFY:function dFY(d,e,f){this.a=d
this.b=e
this.c=f},
dFX:function dFX(d){this.a=d},
dFV:function dFV(d){this.a=d},
dFW:function dFW(d){this.a=d},
dFZ:function dFZ(d){this.a=d},
baa:function baa(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cL5:function cL5(d){this.a=d},
aKI:function aKI(){},
bwo:function bwo(){},
aLx:function aLx(){},
bwF:function bwF(){},
aLM:function aLM(){},
bwN:function bwN(){},
FE:function FE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
acI:function acI(d,e,f){this.a=d
this.b=e
this.c=f},
Vs:function Vs(d){this.a=d},
bjC:function bjC(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fq$=i
_.l1$=j
_.fT$=k
_.fs$=l
_.bt$=m
_.a9$=n
_.c=_.a=null},
eeq:function eeq(d,e){this.a=d
this.b=e},
eeP:function eeP(d){this.a=d},
eeE:function eeE(d){this.a=d},
eev:function eev(d){this.a=d},
eeF:function eeF(d,e){this.a=d
this.b=e},
eeG:function eeG(d){this.a=d},
eeu:function eeu(d){this.a=d},
eeC:function eeC(d){this.a=d},
eeD:function eeD(d){this.a=d},
eeB:function eeB(d){this.a=d},
eeH:function eeH(d,e){this.a=d
this.b=e},
eeA:function eeA(d,e){this.a=d
this.b=e},
eeI:function eeI(d,e){this.a=d
this.b=e},
eez:function eez(d,e){this.a=d
this.b=e},
eeJ:function eeJ(d,e){this.a=d
this.b=e},
eey:function eey(d,e){this.a=d
this.b=e},
eeK:function eeK(d){this.a=d},
eex:function eex(d,e){this.a=d
this.b=e},
eeL:function eeL(d){this.a=d},
eew:function eew(d){this.a=d},
eeM:function eeM(d){this.a=d},
eet:function eet(d){this.a=d},
eeN:function eeN(d){this.a=d},
ees:function ees(d){this.a=d},
eeO:function eeO(d){this.a=d},
eer:function eer(d){this.a=d},
bhe:function bhe(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
add:function add(d,e){this.a=d
this.b=e
this.c=-1000},
Vx:function Vx(d){this.a=d},
aDB:function aDB(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=!1
_.r=f
_.w=g
_.x=80
_.y="Pentatonic"
_.z="bell"
_.Q=!0
_.fq$=h
_.l1$=i
_.fT$=j
_.fs$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
eik:function eik(d,e){this.a=d
this.b=e},
eil:function eil(d,e,f){this.a=d
this.b=e
this.c=f},
eis:function eis(d){this.a=d},
eir:function eir(d){this.a=d},
eit:function eit(d,e){this.a=d
this.b=e},
eiu:function eiu(d){this.a=d},
eiq:function eiq(d){this.a=d},
eiv:function eiv(d){this.a=d},
eip:function eip(d,e){this.a=d
this.b=e},
eiw:function eiw(d,e){this.a=d
this.b=e},
eio:function eio(d,e){this.a=d
this.b=e},
eix:function eix(d,e){this.a=d
this.b=e},
ein:function ein(d,e){this.a=d
this.b=e},
eiy:function eiy(d){this.a=d},
eiz:function eiz(d){this.a=d},
eim:function eim(d){this.a=d},
eiA:function eiA(d){this.a=d},
bkI:function bkI(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aLv:function aLv(){},
bwD:function bwD(){},
aLw:function aLw(){},
bwE:function bwE(){},
fco(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a8a,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ii,w,w,1/0)},
i1p(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.T(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.K)(d),++u){t=d[u]
s=v.h(0,t)
v.n(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gM(j))return!1
for(j=j.gdO(j),j=j.gae(j);j.C();){s=j.gR(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.c2(d.length,0,!1,w)
q=d.length
p=J.e3(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bK(0,new B.fwp(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.w4.h(0,d[n]).a)return!1
m=C.eu([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.K)(j),++u){k=j[u]
if(m.L(0,k))l.push(k)}return m.a===d.length},
h_q(d){var w="TCAG",v=C.aK(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cH(w,v[0])*16+A.a.cH(w,v[1])*4+A.a.cH(w,v[2])]},
te:function te(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b93:function b93(d,e){this.a=d
this.b=e},
fwp:function fwp(d,e){this.a=d
this.b=e},
Vv:function Vv(d){this.a=d},
aDz:function aDz(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
ehP:function ehP(d){this.a=d},
ehO:function ehO(d,e){this.a=d
this.b=e},
ehB:function ehB(d,e){this.a=d
this.b=e},
ehv:function ehv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ehw:function ehw(d){this.a=d},
ehA:function ehA(d,e){this.a=d
this.b=e},
ehz:function ehz(d,e){this.a=d
this.b=e},
ehx:function ehx(d){this.a=d},
ehy:function ehy(d,e){this.a=d
this.b=e},
ehJ:function ehJ(){},
ehK:function ehK(d){this.a=d},
ehI:function ehI(d){this.a=d},
ehL:function ehL(d){this.a=d},
ehH:function ehH(d){this.a=d},
ehF:function ehF(d){this.a=d},
ehG:function ehG(d,e){this.a=d
this.b=e},
ehC:function ehC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ehE:function ehE(d){this.a=d},
ehM:function ehM(d,e){this.a=d
this.b=e},
ehD:function ehD(d,e){this.a=d
this.b=e},
ehN:function ehN(d,e){this.a=d
this.b=e},
bhW:function bhW(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
doG:function doG(d,e){this.a=d
this.b=e},
Ut:function Ut(d){this.a=d},
biS:function biS(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dOL:function dOL(d){this.a=d},
dOK:function dOK(d,e){this.a=d
this.b=e},
dOA:function dOA(d){this.a=d},
dOz:function dOz(){},
dOB:function dOB(d){this.a=d},
dOy:function dOy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOJ:function dOJ(){},
dOE:function dOE(){},
dOF:function dOF(d,e){this.a=d
this.b=e},
dOD:function dOD(d,e){this.a=d
this.b=e},
dOG:function dOG(d){this.a=d},
dOC:function dOC(d){this.a=d},
dOH:function dOH(d,e){this.a=d
this.b=e},
dOI:function dOI(d,e){this.a=d
this.b=e},
UJ:function UJ(d){this.a=d},
aCG:function aCG(d,e,f,g,h){var _=this
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
dRA:function dRA(d){this.a=d},
dRz:function dRz(d,e){this.a=d
this.b=e},
dRn:function dRn(){},
dRm:function dRm(d,e){this.a=d
this.b=e},
dRo:function dRo(d){this.a=d},
dRs:function dRs(d){this.a=d},
dRr:function dRr(d,e){this.a=d
this.b=e},
dRt:function dRt(d){this.a=d},
dRq:function dRq(d,e){this.a=d
this.b=e},
dRu:function dRu(d){this.a=d},
dRp:function dRp(d,e){this.a=d
this.b=e},
dRv:function dRv(d){this.a=d},
dRw:function dRw(d){this.a=d},
dRx:function dRx(d){this.a=d},
dRy:function dRy(d){this.a=d},
bdf:function bdf(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d3O:function d3O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d3Q:function d3Q(d,e,f){this.a=d
this.b=e
this.c=f},
d3P:function d3P(d,e){this.a=d
this.b=e},
aKW:function aKW(){},
bzy(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.E(C.d(d,w,w,w,w,w,w,D.a8a,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.B(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ii,w,w,1/0)},
fpR(d,e,f,g,h){var w,v,u=null,t=C.h1(u,u,u,u,C.d3(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),e),A.a4,A.c6,u,A.dP,A.c5)
t.en()
w=t.b
v=w.c
w=w.a.c
w=f.aC(0,new C.u(v/2,w.gbd(w)/2))
t.a4(d,w)},
hZt(){var w,v,u,t,s,r,q,p,o=new C.eJ()
o.dw(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.an(t,4)
r=C.aX(v)
q=C.a([],u)
while(q.length<s){p=1+o.aA(5)
if(r.L(0,p))q.push(new C.z(p,1+o.aA(2+A.o.an(t,3))))}A.d.b0(q,new B.fqR())
w.push(new B.aRl(q))}return w},
a1r(d,e){var w,v,u,t
for(w=new C.X4(d),v="";w.C();){u=C.jH(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jH(65+A.o.E(A.o.E(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
ibd(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aK(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.X4(d),v=0,u="";w.C();){t=C.jH(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.E(v,p)
u+=C.jH(65+A.o.E(A.o.E(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aRl:function aRl(d){this.a=d},
bFy:function bFy(){},
fqR:function fqR(){},
TY:function TY(d){this.a=d},
biw:function biw(d,e,f,g,h,i){var _=this
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
dCb:function dCb(){},
dCo:function dCo(d){this.a=d},
dCn:function dCn(d,e,f){this.a=d
this.b=e
this.c=f},
dCp:function dCp(d){this.a=d},
dCm:function dCm(d,e){this.a=d
this.b=e},
dCc:function dCc(d,e){this.a=d
this.b=e},
dCh:function dCh(){},
dCi:function dCi(d){this.a=d},
dCg:function dCg(d){this.a=d},
dCj:function dCj(d,e){this.a=d
this.b=e},
dCf:function dCf(d,e){this.a=d
this.b=e},
dCk:function dCk(d,e){this.a=d
this.b=e},
dCe:function dCe(d,e){this.a=d
this.b=e},
dCl:function dCl(d){this.a=d},
dCd:function dCd(d){this.a=d},
b9f:function b9f(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cDD:function cDD(d,e){this.a=d
this.b=e},
UX:function UX(d){this.a=d},
bj3:function bj3(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bt$=g
_.a9$=h
_.c=_.a=null},
dVD:function dVD(d){this.a=d},
dVC:function dVC(d,e){this.a=d
this.b=e},
dVE:function dVE(d){this.a=d},
dVB:function dVB(d,e){this.a=d
this.b=e},
dVt:function dVt(d,e,f){this.a=d
this.b=e
this.c=f},
dVx:function dVx(d){this.a=d},
dVw:function dVw(d){this.a=d},
dVy:function dVy(d,e){this.a=d
this.b=e},
dVv:function dVv(d,e){this.a=d
this.b=e},
dVz:function dVz(d){this.a=d},
dVu:function dVu(d,e){this.a=d
this.b=e},
dVA:function dVA(d,e){this.a=d
this.b=e},
beJ:function beJ(d,e,f){this.b=d
this.c=e
this.a=f},
dbO:function dbO(d,e){this.a=d
this.b=e},
dbP:function dbP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
U6:function U6(d){this.a=d},
biJ:function biJ(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dGn:function dGn(d){this.a=d},
dGm:function dGm(d,e){this.a=d
this.b=e},
dG5:function dG5(){},
dGe:function dGe(d){this.a=d},
dGd:function dGd(){},
dGf:function dGf(d){this.a=d},
dGc:function dGc(){},
dGg:function dGg(d){this.a=d},
dGb:function dGb(d){this.a=d},
dGh:function dGh(d){this.a=d},
dGa:function dGa(d){this.a=d},
dGi:function dGi(d){this.a=d},
dG9:function dG9(d){this.a=d},
dGj:function dGj(d,e){this.a=d
this.b=e},
dG8:function dG8(d,e){this.a=d
this.b=e},
dGk:function dGk(d){this.a=d},
dG7:function dG7(d,e){this.a=d
this.b=e},
dGl:function dGl(d){this.a=d},
dG6:function dG6(d,e){this.a=d
this.b=e},
aKA:function aKA(){},
aL3:function aL3(){},
hpx(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aC(0,e).gcm()*0.1
return new C.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h5B(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a48(w,v,u,A.cG,C.T(x.N,x.y))},
hx3(d,e,f){var w=d.c,v=e===0?-1:1
return new C.u(w*f.a+v*B.h5C(d),d.d*f.b)},
h5C(d){return 42+(D.m0.ai(0,d.b)?(d.ch-1)*38:0)},
eb:function eb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tr:function tr(d,e,f,g){var _=this
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
a9Z:function a9Z(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ab5:function ab5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a48:function a48(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bLJ:function bLJ(){},
bLU:function bLU(d){this.a=d},
bLP:function bLP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLV:function bLV(d){this.a=d},
bLW:function bLW(d){this.a=d},
bLY:function bLY(d){this.a=d},
bLZ:function bLZ(d){this.a=d},
bLX:function bLX(d){this.a=d},
bM_:function bM_(d,e,f){this.a=d
this.b=e
this.c=f},
bM0:function bM0(d){this.a=d},
bLL:function bLL(d){this.a=d},
bLM:function bLM(d){this.a=d},
bLK:function bLK(d){this.a=d},
bLN:function bLN(d,e,f){this.a=d
this.b=e
this.c=f},
bLO:function bLO(d){this.a=d},
bLI:function bLI(d){this.a=d},
bM1:function bM1(d,e){this.a=d
this.b=e},
bLQ:function bLQ(d,e){this.a=d
this.b=e},
bLT:function bLT(d){this.a=d},
bLS:function bLS(d){this.a=d},
bLR:function bLR(d){this.a=d},
ail:function ail(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bGK:function bGK(){},
bGL:function bGL(){},
mz:function mz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ckp:function ckp(d){this.a=d},
i8O(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.fHL(),c9=new B.fHN(),d0=new B.fHO(),d1=new B.fHM(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aD(w,d1.$3(new C.a9(w.a,w.b,w.c,w.d),A.bK,A.bJ))
d3.bF(D.e72,D.e4Q,c9.$2(A.dB,1.4))
d3.bF(D.e4G,D.e4F,c9.$2(A.br,2.4))
d3.bF(D.e4H,Y.aGB,c9.$2(A.br,2.4))
if(c7){d2=c8.$1(A.f8.j(0.5))
d2.z=A.Ra
d3.af(D.e4q,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.E(d2+v/3,1)
d6.$5(d3,"\u2744",new C.u(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aD(d0.$4(-22,-26,44,50),d1.$3(D.aMr,A.aQ,A.cr))
d3.af(A.cJ,16,c8.$1(A.br))
d3.af(A.cJ,13,c8.$1(c7?A.aP.j(0.85):A.M))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(0,4)
d3.j4(0,d4.y*0.6)
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
r.delete()}}d3.af(D.e6Z,2.4,c8.$1(c7?A.bi:A.ak))
d3.af(D.e7G,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aD(d0.$5(-14,14,28,12,4),c8.$1(A.ee))
d2=$.W().r
t=x.v
q=new C.aO(d2,A.ao,c6,c6,C.a([],t))
q.F(new C.b5(-16,-26))
q.F(new C.ap(16,-26))
q.F(new C.ap(12,14))
q.F(new C.ap(-12,14))
q.F(new C.bE())
d3.aQ(q,c8.$1(A.f8.j(0.35)))
if(c7){d2=new C.aO(d2,A.ao,c6,c6,C.a([],t))
d2.F(new C.b5(-14,-10))
d2.F(new C.ap(14,-10))
d2.F(new C.ap(12,14))
d2.F(new C.ap(-12,14))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(A.ay.j(0.7)))}d3.aQ(q,c9.$2(A.ad,1.6))
d2=d3.a
J.by(d2.save())
d2.translate(0,10)
d3.j4(0,d4.y)
d3.bF(D.a5l,D.aGR,c9.$2(A.bP,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.E(s+v*0.33,1)
r=c8.$1(A.f6).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aD(d0.$5(-10,-4,20,10,4),c8.$1(A.aK))
d3.af(A.io,3,c8.$1(c7?A.bi:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a35[m]
r=c9.$2(A.br,3).H()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.by(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).H()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=C.cg(A.J,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).H()
d2.drawOval(C.c_(p),r)
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
d3.aQ(w,d1.$3(D.eLJ,A.aM,A.d5))
d3.aZ(D.eL8,c8.$1(A.dy))
d2=d3.a
J.by(d2.save())
d2.translate(18,-5)
d3.j4(0,d4.y*2)
d3.bF(A.J,D.e4K,c9.$2(A.bP,2.4))
d3.bF(A.a5k,D.e4J,c9.$2(A.hL,1))
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
d3.aQ(d2,c8.$1(A.bL.j(0.35*v)))}d3.aD(d0.$5(-26,-6,30,12,3),d1.$3(D.eLP,A.bl,A.cu))
k=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
k.F(new C.b5(4,-6))
k.F(new C.ap(18,-12))
k.F(new C.ap(18,12))
k.F(new C.ap(4,6))
k.F(new C.bE())
d3.aQ(k,c8.$1(A.ee))
d3.af(D.e4O,7,c8.$1(c7?A.c:A.dy))
return!0
case"neon":d3.aD(d0.$5(-30,-14,60,28,6),c8.$1(L.ml))
if(c7)j=d4.ax>0.5||A.o.E(A.k.bn(d5*17),3)!==0
else j=!1
i=j?A.bX:D.bhC
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bX.j(0.35))
t.z=A.lv
d3.aD(d2,t)}d3.aD(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.e78,i,17)
return!0
case"microwave":d3.aD(d0.$4(-30,-18,60,38),d1.$3(D.eLV,A.bP,A.bl))
d2=d0.$5(-26,-14,38,30,3)
d3.aD(d2,c8.$1(c7?A.bL.j(0.75):A.az))
if(c7){d2=d3.a
J.by(d2.save())
d2.translate(-7,8)
d3.j4(0,d4.y*0.5)
d3.hS(C.cg(A.J,7,22),c8.$1(A.d5))
d2.restore()}d3.aD(d0.$5(15,-14,12,12,2),c8.$1(L.ml))
if(c7)d6.$5(d3,"0:"+A.a.aU(A.o.u(59-A.o.E(A.k.bn(d5),60)),2,"0"),D.e4P,A.b2,6.5)
d3.af(D.e50,4,c8.$1(A.dy))
return!0
case"doorbell":d3.aD(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.af(A.RZ,10,c8.$1(c7?A.bN:A.br))
d2=d3.a
J.by(d2.save())
d2.translate(0,-8)
d3.j4(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.e7I,A.c,16)
d2.restore()
d3.af(A.kb,6,c8.$1(A.d3))
d3.af(A.kb,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bU(A.RZ,14+v*6+A.k.E(t,6))
r=c9.$2(A.bN.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c_(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bF(D.e77,D.e7E,c9.$2(A.br,4))
d2=d3.a
J.by(d2.save())
d3.j4(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aD(d0.$5(-24,-14,46,22,5),d1.$3(D.eLK,A.bP,A.ak))
d3.af(D.aGD,8,c8.$1(A.az))
d3.af(D.aGD,4.5,c8.$1(c7?A.aP:A.cu))
d3.af(D.e75,2.2,c8.$1(c7&&A.o.E(A.k.bn(d5*1.6),2)===0?A.ay:A.kr))
d2.restore()
if(c7)d6.$5(d3,"REC",D.e7g,A.ay,9)
return!0
case"console":d3.aD(d0.$5(-28,-22,56,44,8),d1.$3(D.eLS,A.iW,A.fc))
d3.aD(d0.$5(-20,-17,40,22,3),c8.$1(A.dI))
if(c7){d2=d5*2.3
d3.af(new C.u(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aZ(new C.a9(-18,t,-15.6,t+8),c8.$1(A.b2))
d2=-9+Math.sin(d2-0.4)*6
d3.aZ(new C.a9(15.6,d2,18,d2+8),c8.$1(A.bX))}d3.af(D.e71,4,c8.$1(A.aW))
d3.af(D.e4L,2.4,c8.$1(A.ay))
d3.af(D.e4Y,2.4,c8.$1(A.bi))
return!0
case"heartmon":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(A.az))
d3.aD(d0.$5(-26,-18,52,28,3),c8.$1(A.dI))
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
if(p!=null)s.bB(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new C.ap(l,f)
t.push(s)
p=h.f
if(p!=null)s.bB(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aQ(h,c9.$2(A.b2,1.8))
d6.$5(d3,"72",D.e4M,A.h3,11)
d2=d5*9
d6.$5(d3,"\u2665",D.e7k,A.h3.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.af(D.e7a,3,c8.$1(c7?A.bi:A.br))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aD(d2,c8.$1(A.cB.j(c7?0.5:0.3)))
d3.aD(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.aZ(D.eLM,c8.$1(F.th))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.by(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.tc(0,-1,1)
d3.hS(C.cg(A.J,8,14),c8.$1(A.cs))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,0))
d2.F(new C.ap(-12,-4))
d2.F(new C.ap(-12,4))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(A.cg))
d3.af(D.e5s,1.2,c8.$1(A.w))
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
d3.aQ(e,d1.$3(D.eMf,A.c,A.bz))
d3.aZ(D.eMe,c8.$1(c7?A.dQ:A.br))
s=new C.aO(d2,A.ao,c6,c6,C.a([],t))
s.F(new C.b5(-7,-22))
s.F(new C.ap(0,-29))
s.F(new C.ap(7,-22))
s.F(new C.bE())
d3.aQ(s,c8.$1(A.eq))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aO(d2,A.ao,c6,c6,C.a([],t))
d2.F(new C.b5(0,-19))
t=d*34
d2.F(new C.ap(t,-26))
d2.F(new C.ap(t,-12))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(A.dQ.j(0.45)))
d2=c8.$1(A.dQ.j(0.35))
d2.z=A.Ra
d3.af(D.e4r,14,d2)}return!0
case"discoball":d3.bF(D.e4w,K.aGz,c9.$2(A.dy,1.4))
d3.af(A.J,16,d1.$3(D.eLx,A.aQ,A.ak))
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
r=c8.$1(D.d5F[A.o.E(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aD(d0.$5(-14,-4,28,24,5),d1.$3(D.eLv,A.cr,A.ak))
d3.aD(d0.$5(-12,-26,24,20,5),d1.$3(D.eLo,A.aL,A.bJ))
d3.bF(D.e4v,D.e4x,c9.$2(A.br,1.6))
d3.af(D.e4y,2.2,c8.$1(c7?A.ay:A.br))
a1=c7&&A.k.E(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a37[m]
if(c7)t=a1?A.b8:A.f0
else t=A.cu
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.by(d2.save())
d2.translate(14,0)
d3.j4(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bF(A.J,D.a5h,c9.$2(A.bJ,4))
d2.restore()
d3.bF(D.e6V,D.e7e,c9.$2(A.bJ,4))
d3.aZ(D.eMd,c8.$1(c7?A.b8.j(0.7):A.aK))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.axA[m]+1,d2,10,14,2)
p=C.aq(A.bL,A.d5,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.es(s),r)
r.delete()}d3.aD(d0.$5(-24,-6,48,26,8),d1.$3(D.eLL,A.bP,A.bl))
for(m=0;m<2;++m){l=D.axA[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fl:A.az).H()
t.drawRRect(C.es(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cs.j(0.5))
s.z=G.mH
r=s.H()
t.drawRRect(C.es(d2),r)
r.delete()}}d3.bF(D.e54,D.e5l,c9.$2(A.az,3))
return!0
case"ledstrip":d3.aD(d0.$5(-34,-4,68,10,4),c8.$1(A.cu))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.E(t+v*40,360)
i=c7?new H.mP(1,a3,0.8,1).iE():A.ee
if(c7){s=c8.$1(i.j(0.45))
s.z=G.mH
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aD(d0.$5(-40,-2,6,6,1),c8.$1(A.dy))
return!0
case"pump":d3.aD(d0.$5(-16,-2,32,22,6),d1.$3(D.eLA,A.cB,A.L_))
d3.af(D.e7l,8,c8.$1(A.qS))
d2=d3.a
J.by(d2.save())
d2.translate(-2,9)
d3.j4(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.f8,2.4).H()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
t.F(new C.b5(16,6))
t.F(new C.ap(26,6))
t.F(new C.ap(26,-20))
t.F(new C.ap(10,-20))
d3.aQ(t,c9.$2(A.bJ,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.E(t+v*0.2,1)
r=c8.$1(A.fU).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.af(D.e5U,3.2,c8.$1(A.fU.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.by(d2.save())
d3.j4(0,-0.15)
d3.aD(d0.$5(-26,-14,40,22,10),d1.$3(D.eLN,A.jd,A.tk))
d3.aD(d0.$5(14,-10,12,14,3),c8.$1(A.cu))
d3.aD(d0.$5(-10,6,12,22,4),c8.$1(A.ee))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cs.j(0.4))
d2.z=G.mH
d3.af(D.e5_,8,d2)}return!0
case"headphones":d3.f9(C.cg(A.dE,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.br,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=F.a34[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new C.a9(s,0,s+14,20),A.bu,A.pB).H()
d2.drawRRect(C.es(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=C.bU(new C.u(l,10),10+v*5+A.k.E(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eB.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[C.c_(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new C.u(-4,-8-A.k.E(d5*14,8)),A.km,12)
return!0
case"smartwatch":d3.aD(d0.$5(-8,-30,16,14,3),c8.$1(A.cu))
d3.aD(d0.$5(-8,14,16,14,3),c8.$1(A.cu))
d3.aD(d0.$5(-14,-17,28,32,8),d1.$3(D.eLt,A.dy,A.ee))
d3.aD(d0.$5(-11,-14,22,26,6),c8.$1(A.dI))
if(c7){a4=new C.S(Date.now(),0,!1)
d6.$5(d3,A.a.aU(A.o.u(C.dk(a4)),2,"0")+":"+A.a.aU(A.o.u(C.h0(a4)),2,"0"),D.e4C,A.b2,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.aq(A.Ei,A.h3,g)
d2.toString
d6.$5(d3,"\u2665",new C.u(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.E(A.k.bn(d5*2),6)),A.dE,A.c,7)}return!0
case"tablet":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(L.ml))
d3.aD(d0.$5(-30,-22,60,44,6),c9.$2(A.bJ,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.es(a5),$.pu(),!0)
d2.translate(-27,-19)
E.L1(d3,D.eRH,d5,c6)
d2.restore()}else d3.aD(a5,c8.$1(D.ve))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aD(a6,d1.$3(new C.a9(a6.a,a6.b,a6.c,a6.d),A.dM,A.di))
d3.aD(a6,c9.$2(A.b0,1.2))
d3.af(D.aGY,9,c8.$1(A.az))
d3.af(D.aGY,6,c9.$2(A.d5,2))
d3.aD(d0.$5(4,-2,14,10,2),c8.$1(A.az))
d3.aD(d0.$5(-22,-19,44,12,2),c8.$1(A.dI))
d2=A.k.ab(d4.db,1)
t=A.k.ab(c7?d4.dx:d4.e,1)
s=c7?A.b2:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.e5Y,s,8.2)
d3.af(D.e4R,2.4,c8.$1(c7?A.bi:A.aK))
d6.$5(d3,"IN",D.e7f,A.ad,6)
d6.$5(d3,"OUT",D.e5M,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.aq(A.bJ,A.ay,a7)
t.toString
d3.aD(d2,c8.$1(t))
d3.af(D.e4s,3,c8.$1(A.aK))
d3.aD(d0.$5(-12,-4,24,18,3),d1.$3(D.eLp,A.ee,A.hI))
d6.$5(d3,"7805",D.a5l,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.dbt[m]-1
r=c8.$1(A.e2).H()
d2.drawRect(C.c_(new C.a9(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.E(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.e7H,A.bj,9)
return!0
case"diode":d3.bF(D.aH1,D.aGM,c9.$2(A.e2,2.4))
d3.aD(d0.$5(-14,-7,28,14,6),c8.$1(A.aF.j(0.85)))
d3.aZ(D.eLe,c8.$1(A.bj))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dQ.j(0.4))
t.z=A.jt
d3.aD(d2,t)}d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,-4))
d2.F(new C.ap(-8,4))
d2.F(new C.ap(-1,0))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(A.aW))
d6.$5(d3,"one way",D.e73,A.aA,8)
return!0
case"ldr":d3.bF(D.aH1,D.a5l,c9.$2(A.e2,2.4))
d3.bF(D.aGR,D.aGM,c9.$2(A.e2,2.4))
d3.af(A.J,12,c8.$1(A.d5))
d3.af(A.J,12,c9.$2(A.tt,1.6))
d2=$.W()
t=C.a([],x.v)
a8=new C.aO(d2.r,A.ao,c6,c6,t)
a8.F(new C.b5(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new C.ap(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bB(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aQ(a8,c9.$2(A.bL,1.4))
d2=C.aq(A.br,A.dQ,d4.f)
d2.toString
d6.$5(d3,"\u2600",new C.u(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.e6W,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.ea
break A}if("sonytv"===d2){t=A.qN
break A}if("appletv"===d2){t=A.e2
break A}t=F.Ek
break A}a9=d2==="lgtv"||d2==="appletv"
d3.aD(d0.$5(-36,-24,72,a9?42:44,6),c8.$1(t))
t=a9?-35:-33
s=a9?-23:-21
p=a9?70:66
a5=d0.$5(t,s,p,a9?40:38,3)
t=a5.a
s=a5.b
if(c7){p=d3.a
J.by(p.save())
p.clipRRect(C.es(a5),$.pu(),!0)
p.translate(t,s)
E.h1N(d3,new C.ar(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.af(D.e5m,1.6,c8.$1(A.b2))}else{d3.aD(a5,c8.$1(D.ve))
p=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
p.F(new C.b5(t,s))
p.F(new C.ap(t+24,s))
p.F(new C.ap(t,s+22))
p.F(new C.bE())
d3.aQ(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aD(d0.$5(-22,19,44,3,1.5),c8.$1(A.dy))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=F.mF[m]
s=$.W()
p=C.a([],t)
s=new C.aO(s.r,A.ao,c6,c6,p)
p.push(new C.b5(l*30,20))
p.push(new C.ap(l*22,20))
p.push(new C.ap(l*26,26))
p.push(new C.bE())
r=c8.$1(A.dy).H()
p=s.gbL().a.snapshot()
d2.drawPath((s.e=new C.cC(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.e6z,A.bP,5.5)
break
case"appletv":d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-8,18))
d2.F(new C.ap(8,18))
d2.F(new C.ap(12,25))
d2.F(new C.ap(-12,25))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(D.WU))
d6.$5(d3,"Apple TV",D.e5Z,A.br,4.8)
break
default:d3.aD(d0.$5(-34,19,68,7,3),c8.$1(D.bg7))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dr,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.e7D,F.th,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.m0.h(0,d2)
b1=b0.b===D.wh
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
d3.aD(w,d1.$3(new C.a9(p,o,b4,b5),b7,b6))
a5=d0.$5(t+2,s,b2-4,b3-4,3.5)
if(c7){t=d3.a
J.by(t.save())
t.clipRRect(C.es(a5),$.pu(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.L1(d3,new C.ar(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aD(a5,c8.$1(D.ve))
if(b1){t=a5.b
s=a5.d
d3.bF(new C.u(0,t),new C.u(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aD(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.af(new C.u(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aD(d0.$5(-17,-28,34,52,4),c8.$1(A.ee))
d3.aD(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bP))
if(c7){d6.$5(d3,"NGMY",D.e7K,A.az,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.E(v,4)===3?14:22
r=c8.$1(A.bl).H()
d2.drawRect(C.c_(new C.a9(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.af(A.aGx,1.6,c8.$1(A.az))}return!0
case"laptop":d3.aD(d0.$5(-30,-28,60,42,4),d1.$3(D.eLW,A.cr,A.bl))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.es(b8),$.pu(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.L1(d3,new C.ar(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aD(b8,c8.$1(D.ve))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-38,16))
d2.F(new C.ap(38,16))
d2.F(new C.ap(34,21))
d2.F(new C.ap(-34,21))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(D.WU))
d3.aD(d0.$5(-7,16,14,2,1),c8.$1(A.bl))
return!0
case"imac":d3.aD(d0.$5(-32,-28,64,46,5),d1.$3(D.eM_,A.bK,A.cr))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.es(b9),$.pu(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.L1(d3,new C.ar(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aD(b9,c8.$1(D.ve))
d3.af(D.aGs,2,c8.$1(A.bJ))
d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(-6,18))
d2.F(new C.ap(6,18))
d2.F(new C.ap(10,26))
d2.F(new C.ap(-10,26))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(D.WU))
return!0
case"monitor":d3.aD(d0.$5(-34,-28,68,40,3),c8.$1(A.ea))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.es(c0),$.pu(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.L1(d3,new C.ar(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aD(c0,c8.$1(D.ve))
d3.aZ(D.eM5,c8.$1(A.bl))
d3.aD(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dy))
return!0
case"projector":if(c7){d2=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
d2.F(new C.b5(14,4))
d2.F(new C.ap(-32,-42))
d2.F(new C.ap(34,-42))
d2.F(new C.bE())
d3.aQ(d2,c8.$1(A.dQ.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.by(d2.save())
d2.clipRRect(C.es(c1),$.pu(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.L1(d3,new C.ar(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aD(d0.$5(-26,-4,52,24,6),d1.$3(D.eLO,A.iA,A.dy))
d3.af(D.aGC,7,c8.$1(A.az))
d3.af(D.aGC,4,c8.$1(c7?A.dQ:A.cu))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dr,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aD(d0.$5(-34,-10,68,32,12),c8.$1(A.az))
c2=d0.$5(-30,-20,60,28,8)
d3.aD(c2,c8.$1(L.ml))
d3.aD(c2,c9.$2(A.br,1.2))
if(c7){c3=new C.aO($.W().r,A.ao,c6,c6,C.a([],x.v))
c3.F(new C.b5(-26,4))
c3.F(new C.cV(-10,-14+Math.sin(d5)*3,6,-6))
c3.F(new C.ap(22,-16))
d3.aQ(c3,c9.$2(A.aP,2.2))
d2=A.k.E(d5*6,48)
d3.af(new C.u(-26+d2,4-d2*0.1),2.4,c8.$1(A.b2))
d6.$5(d3,""+(88+A.o.E(A.k.bn(d5*2),5)),D.e5V,A.c,10)
d6.$5(d3,"km/h",D.e5S,A.aA,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aD(c4,d1.$3(new C.a9(c4.a,c4.b,c4.c,c4.d),A.dy,A.ee))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.by(d2.save())
d2.clipRRect(C.es(c5),$.pu(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.L1(d3,new C.ar(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.bu.j(0.2))
d2.z=A.lv
d3.af(A.J,26,d2)}else d3.aD(c5,c8.$1(A.M))
d3.bF(D.e7p,D.e7u,c9.$2(A.bl,4))
d3.bF(D.e5n,D.e5v,c9.$2(A.bl,4))
return!0}return!1},
fHL:function fHL(){},
fHN:function fHN(){},
fHO:function fHO(){},
fHM:function fHM(){},
h4t(d,e,f,g){return new B.aij(d,g,f,e)},
Fs(d,e,f){return new B.bac(d,e,f)},
aij:function aij(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aik:function aik(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.fq$=h
_.l1$=i
_.fT$=j
_.fs$=k
_.bt$=l
_.a9$=m
_.c=_.a=null},
bGo:function bGo(d,e){this.a=d
this.b=e},
bGp:function bGp(d){this.a=d},
bGn:function bGn(d){this.a=d},
bGq:function bGq(){},
bGr:function bGr(d){this.a=d},
bGs:function bGs(d,e,f){this.a=d
this.b=e
this.c=f},
bGm:function bGm(d,e){this.a=d
this.b=e},
bGk:function bGk(d,e){this.a=d
this.b=e},
bGl:function bGl(d,e,f){this.a=d
this.b=e
this.c=f},
bGe:function bGe(d,e){this.a=d
this.b=e},
bGf:function bGf(){},
bGg:function bGg(d,e){this.a=d
this.b=e},
bGh:function bGh(d,e){this.a=d
this.b=e},
bGi:function bGi(d){this.a=d},
bGj:function bGj(d){this.a=d},
bGH:function bGH(d){this.a=d},
bGI:function bGI(){},
bFS:function bFS(){},
bGJ:function bGJ(d,e){this.a=d
this.b=e},
bGG:function bGG(d,e,f){this.a=d
this.b=e
this.c=f},
bGB:function bGB(d){this.a=d},
bGy:function bGy(d,e,f){this.a=d
this.b=e
this.c=f},
bGz:function bGz(d,e){this.a=d
this.b=e},
bGC:function bGC(d){this.a=d},
bGw:function bGw(d,e){this.a=d
this.b=e},
bGx:function bGx(d,e){this.a=d
this.b=e},
bGA:function bGA(d){this.a=d},
bGD:function bGD(d){this.a=d},
bGu:function bGu(d,e){this.a=d
this.b=e},
bGv:function bGv(d,e){this.a=d
this.b=e},
bGE:function bGE(d){this.a=d},
bGt:function bGt(d){this.a=d},
bGF:function bGF(d){this.a=d},
bFT:function bFT(d,e){this.a=d
this.b=e},
bGb:function bGb(d,e){this.a=d
this.b=e},
bGd:function bGd(d,e){this.a=d
this.b=e},
bGc:function bGc(d,e){this.a=d
this.b=e},
bFZ:function bFZ(d,e){this.a=d
this.b=e},
bG_:function bG_(d){this.a=d},
bFY:function bFY(d){this.a=d},
bG0:function bG0(d,e,f){this.a=d
this.b=e
this.c=f},
bFX:function bFX(d,e){this.a=d
this.b=e},
bG3:function bG3(d,e){this.a=d
this.b=e},
bG4:function bG4(d,e){this.a=d
this.b=e},
bG5:function bG5(d,e){this.a=d
this.b=e},
bG6:function bG6(d,e,f){this.a=d
this.b=e
this.c=f},
bFW:function bFW(d,e){this.a=d
this.b=e},
bG7:function bG7(d,e,f){this.a=d
this.b=e
this.c=f},
bFV:function bFV(d,e){this.a=d
this.b=e},
bG8:function bG8(d,e,f){this.a=d
this.b=e
this.c=f},
bFU:function bFU(d,e){this.a=d
this.b=e},
bG9:function bG9(d){this.a=d},
bGa:function bGa(d){this.a=d},
bG1:function bG1(d){this.a=d},
bG2:function bG2(d){this.a=d},
bac:function bac(d,e,f){this.a=d
this.b=e
this.c=f},
fgh:function fgh(){},
fgi:function fgi(){},
fgj:function fgj(){},
fg4:function fg4(){},
fgk:function fgk(){},
fg3:function fg3(){},
fgl:function fgl(){},
fg8:function fg8(){},
fg2:function fg2(){},
fg9:function fg9(){},
fg1:function fg1(){},
fga:function fga(){},
fg0:function fg0(){},
fgb:function fgb(){},
ffZ:function ffZ(){},
fg_:function fg_(){},
fgc:function fgc(){},
ffX:function ffX(){},
ffY:function ffY(){},
fgd:function fgd(){},
ffW:function ffW(){},
UK:function UK(d){this.a=d},
aCH:function aCH(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dRI:function dRI(d,e){this.a=d
this.b=e},
dRR:function dRR(d){this.a=d},
dRS:function dRS(){},
dRT:function dRT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRU:function dRU(){},
dRH:function dRH(d){this.a=d},
dRG:function dRG(d,e,f){this.a=d
this.b=e
this.c=f},
dRF:function dRF(d,e){this.a=d
this.b=e},
dRD:function dRD(d){this.a=d},
dRE:function dRE(){},
dRQ:function dRQ(d){this.a=d},
dRP:function dRP(d){this.a=d},
dRN:function dRN(d,e){this.a=d
this.b=e},
dRL:function dRL(d){this.a=d},
dRM:function dRM(){},
dRO:function dRO(d,e,f){this.a=d
this.b=e
this.c=f},
dRJ:function dRJ(d,e){this.a=d
this.b=e},
dRK:function dRK(){},
dRW:function dRW(d){this.a=d},
dRX:function dRX(d,e){this.a=d
this.b=e},
dRV:function dRV(){},
dRY:function dRY(d,e){this.a=d
this.b=e},
dRZ:function dRZ(d){this.a=d},
dS_:function dS_(d){this.a=d},
awO:function awO(d,e){this.c=d
this.a=e},
b8o:function b8o(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
cBa:function cBa(d){this.a=d},
b8n:function b8n(d,e){this.b=d
this.a=e},
cB9:function cB9(d){this.a=d},
ax6:function ax6(){},
ax7:function ax7(){},
aJ6:function aJ6(){},
bwr:function bwr(){},
i8P(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bU(A.wa,23)
$.W()
b8=C.N()
b8.r=A.az.gp(0)
b9.af(A.wa,25,b8)
b8=C.N()
b8.saq(D.efJ.aw(0,v))
b9.af(A.wa,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.bj.gp(0)
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
b9.bF(A.wa,new C.u(b8*18,s*18-2),r)
r=C.N()
r.r=A.bj.gp(0)
b9.af(A.wa,3,r)
c2.$5(b9,w?"V":"A",D.e7x,A.bj,12)
c2.$5(b9,w?A.k.ab(m,1)+" V":""+A.k.V(m*1000)+" mA",D.e70,A.az,9.5)
return!0
case"fan":b8=C.bx(D.eLl,A.hD)
$.W()
s=C.N()
s.r=A.br.gp(0)
b9.aD(b8,s)
s=C.N()
s.r=A.ak.gp(0)
b9.aZ(D.eM6,s)
s=C.N()
s.r=A.M.j(0.6).gp(0)
b9.af(D.wb,22,s)
for(b8=b9.a,u=0;u<4;++u){J.by(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.cg(A.aGw,18,10)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.fU.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c_(s),n)
n.delete()
b8.restore()}b8=C.N()
b8.r=A.bo.gp(0)
b9.af(D.wb,4,b8)
b8=C.N()
b8.b=A.ae
b8.c=2
b8.r=A.cr.gp(0)
b9.af(D.wb,22,b8)
b8=C.N()
b8.b=A.ae
b8.c=0.8
b8.r=A.jh.gp(0)
b9.af(D.wb,14,b8)
return!0
case"speaker":l=C.bx(D.aMr,A.uB)
$.W()
b8=C.N()
b8.saq(D.aor.aw(0,new C.a9(l.a,l.b,l.c,l.d)))
b9.aD(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.N()
b8.saq(D.eg5.aw(0,C.bU(A.cz,15)))
b9.af(A.cz,14+k,b8)
b8=C.N()
b8.r=A.dy.gp(0)
b9.af(A.cz,5,b8)
b8=C.N()
b8.r=A.bl.gp(0)
b9.af(D.aGy,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bU(D.e53,6+u*6+A.k.E(b8,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.bX.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c_(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bx(D.eLZ,A.uB)
$.W()
b8=C.N()
b8.saq(D.bWw.aw(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bx(D.aMt,A.ir)
s=C.N()
s.r=A.hI.gp(0)
b9.aD(b8,s)
if(b7){i=new C.S(Date.now(),0,!1)
h=C.BP(i)<500?":":" "
g=A.a.aU(A.o.u(C.dk(i)),2,"0")
f=A.a.aU(A.o.u(C.h0(i)),2,"0")
b8=C.N()
b8.r=A.b2.j(0.12).gp(0)
b9.aZ(D.aMt,b8)
c2.$5(b9,g+h+f,D.e7i,A.b2,21)}b8=C.N()
b8.r=A.cr.gp(0)
b9.af(D.e7h,2.4,b8)
b8=C.N()
b8.r=A.cr.gp(0)
b9.af(D.e57,2.4,b8)
return!0
case"calculator":j=C.bx(D.eLF,A.hf)
$.W()
b8=C.N()
b8.saq(D.bWg.aw(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bx(D.eLz,A.he)
s=C.N()
s.r=(b7?A.X5:D.bi9).gp(0)
b9.aD(b8,s)
if(b7)c2.$5(b9,"3.14159",D.e7_,A.VX,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bx(new C.a9(q,s,q+6,r),A.Su)
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.cg:A.bP).gp(0)
n=p.H()
b8.drawRRect(C.es(q),n)
n.delete()}return!0
case"phone":j=C.bx(D.eLw,A.hf)
$.W()
b8=C.N()
b8.r=L.ml.gp(0)
b9.aD(j,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.9
b8.r=D.afW.gp(0)
b9.aD(j,b8)
a0=C.bx(D.eLn,A.hD)
if(b7){b8=C.N()
b8.saq(D.bXP.aw(0,new C.a9(a0.a,a0.b,a0.c,a0.d)))
b9.aD(a0,b8)
b8=b9.a
J.by(b8.save())
b8.clipRRect(C.es(a0),$.pu(),!0)
b8.translate(-12,-25)
E.L1(b9,D.eRi,c1,b6)
b8.restore()
a1=A.k.E(c1*0.12,1)
b8=C.bx(D.eLk,A.he)
s=C.N()
s.r=A.aW.gp(0)
b9.aD(b8,s)
s=C.N()
s.r=A.b2.gp(0)
b9.aZ(new C.a9(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.e6h,A.c,6)}else{b8=C.N()
b8.r=D.ve.gp(0)
b9.aD(a0,b8)}b8=C.bx(D.eMg,D.ege)
s=C.N()
s.r=A.w.gp(0)
b9.aD(b8,s)
return!0
case"router":j=C.bx(D.eLY,A.ql)
$.W()
b8=C.N()
b8.saq(D.bWN.aw(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=F.a34[a2]
s=a3<0?-4:4
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.cu.gp(0)
r.c=4
r.d=A.bS
n=r.H()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.E(A.k.bn(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(a4?A.bi:A.aK).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bU(D.wb,8+u*6+A.k.E(s,6))
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.hw.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c_(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bx(D.eLE,A.hD)
s=$.W()
r=C.N()
r.r=A.ee.gp(0)
b9.aD(b8,r)
if(b7){b8=C.N()
b8.r=A.ay.j(0.5*a5).gp(0)
b8.z=A.z1
b9.af(A.wa,34,b8)}a6=new C.aO(s.r,A.ao,b6,b6,C.a([],x.v))
a6.F(new C.b5(-16,12))
a6.F(new C.ap(-16,-2))
a6.F(new C.cV(0,-30,16,-2))
a6.F(new C.ap(16,12))
a6.F(new C.bE())
b8=C.N()
b8.r=C.aq(A.eq,D.bav,a5).gp(0)
b9.aQ(a6,b8)
b8=C.N()
b8.b=A.ae
b8.c=1.4
b8.r=A.c0.gp(0)
b9.aQ(a6,b8)
if(b7){b8=b9.a
J.by(b8.save())
b8.translate(0,-2)
b9.j4(0,c1*7)
s=C.N()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bF(A.J,D.aGy,s)
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
q.saq(D.bUS.aw(0,D.eLR))
b9.aQ(j,q)
q=new C.aO(s,A.ao,b6,b6,C.a([],r))
q.F(new C.b5(-8,-4))
q.F(new C.ap(-4,-13))
q.F(new C.ap(4,-13))
q.F(new C.ap(4,-4))
q.F(new C.bE())
p=C.N()
p.r=A.f8.gp(0)
b9.aQ(q,p)
r=new C.aO(s,A.ao,b6,b6,C.a([],r))
r.F(new C.b5(8,-4))
r.F(new C.ap(8,-13))
r.F(new C.ap(11,-13))
r.F(new C.ap(15,-4))
r.F(new C.bE())
s=C.N()
s.r=A.f8.gp(0)
b9.aQ(r,s)
for(a2=0;a2<2;++a2){a3=D.dbd[a2]
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.az.gp(0)
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
q.r=A.bP.gp(0)
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
j.F(new C.cV(0,-20,14,-12))
j.F(new C.ap(18,20))
j.F(new C.bE())
r=C.N()
r.saq(D.bVX.aw(0,D.eLD))
b9.aQ(j,r)
r=new C.aO(b8,A.ao,b6,b6,C.a([],s))
r.F(new C.b5(14,-10))
r.F(new C.ap(30,-22))
r.F(new C.ap(32,-18))
r.F(new C.ap(16,-4))
r.F(new C.bE())
q=C.N()
q.r=A.e2.gp(0)
b9.aQ(r,q)
s=new C.aO(b8,A.ao,b6,b6,C.a([],s))
s.F(new C.b5(-14,-8))
s.F(new C.cV(-34,-6,-18,12))
b8=C.N()
b8.b=A.ae
b8.c=5
b8.r=A.az.gp(0)
b9.aQ(s,b8)
b8=C.N()
if(b7){s=C.aq(A.cs,A.tr,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.ee
b8.r=s.gp(0)
b9.aZ(D.eLC,b8)
if(b7){b8=C.N()
b8.r=A.cs.j(0.3).gp(0)
b8.z=A.lv
b9.af(A.aGu,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.E(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.N()
b8.r=A.az.gp(0)
b9.af(D.e4p,3,b8)
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
b9.aQ(b8,s)
s=C.N()
s.r=A.dQ.j(0.5*u).gp(0)
s.z=Z.HB
b9.af(D.e7m,24,s)}b8=C.bx(D.eMc,A.hD)
s=$.W()
r=C.N()
r.r=A.ee.gp(0)
b9.aD(b8,r)
r=C.N()
r.r=A.dy.gp(0)
r.c=3
r.d=A.bS
b9.bF(D.e4D,D.aGE,r)
r=C.N()
r.r=A.dy.gp(0)
r.c=3
r.d=A.bS
b9.bF(D.aGE,D.e7n,r)
a9=new C.aO(s.r,A.ao,b6,b6,C.a([],x.v))
a9.F(new C.b5(-14,-16))
a9.F(new C.ap(6,-26))
a9.F(new C.ap(10,-12))
a9.F(new C.ap(-10,-6))
a9.F(new C.bE())
s=C.N()
s.r=(b7?A.aM:A.k_).gp(0)
b9.aQ(a9,s)
b8=C.N()
b8.r=(b7?A.c:A.bl).gp(0)
b9.af(D.e7o,4,b8)
return!0
case"lights":b8=$.W().r
s=x.v
b0=new C.aO(b8,A.ao,b6,b6,C.a([],s))
b0.F(new C.b5(-34,-6))
b0.F(new C.cV(0,22,34,-6))
r=C.N()
r.b=A.ae
r.c=2
r.r=A.hk.gp(0)
b9.aQ(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.E(q+u*0.7,1.8)<1.1
if(b2){b3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b3.r=D.a26[u].j(0.6).gp(0)
b3.z=A.Ra
n=b3.H()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=C.a([],s)
b4=new C.aO(b8,A.ao,b6,b6,b3)
b3.push(new C.b5(p-3,o))
b3.push(new C.ap(p+3,o))
b5=o+11
b3.push(new C.ap(p+5,b5))
b3.push(new C.cV(p,o+17,p-5,b5))
b3.push(new C.bE())
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
if(b2)o=D.a26[u]
else{o=C.aq(D.a26[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbL().a.snapshot()
r.drawPath((b4.e=new C.cC(p)).a,n)
n.delete()}return!0}return B.i8O(b9,c0,c1,c2)},
fN:function fN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h_T(d){var w=D.m0.h(0,d)
return(w==null?null:w.b)===D.zr},
i9Y(d,e,f){return C.a6(d,!1).ck(C.uF(null,!1,!0,!0,new B.fMr(e,f),A.eL,null,A.pQ,new B.fMs(),x.H))},
J9:function J9(d,e){this.a=d
this.b=e},
m6:function m6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fMr:function fMr(d,e){this.a=d
this.b=e},
fMs:function fMs(){},
Ur:function Ur(d,e,f){this.c=d
this.d=e
this.a=f},
biQ:function biQ(d,e){var _=this
_.d=$
_.e=null
_.bt$=d
_.a9$=e
_.c=_.a=null},
dNE:function dNE(d){this.a=d},
dND:function dND(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNB:function dNB(){},
dNC:function dNC(d){this.a=d},
dNA:function dNA(d){this.a=d},
dNz:function dNz(d,e){this.a=d
this.b=e},
dNy:function dNy(d,e){this.a=d
this.b=e},
dNx:function dNx(d){this.a=d},
dNw:function dNw(d){this.a=d},
dNs:function dNs(d){this.a=d},
dNr:function dNr(d){this.a=d},
dNv:function dNv(d,e,f){this.a=d
this.b=e
this.c=f},
dNu:function dNu(d){this.a=d},
dNt:function dNt(d){this.a=d},
buw:function buw(d,e,f){this.b=d
this.c=e
this.a=f},
aej:function aej(d,e,f){this.b=d
this.c=e
this.a=f},
aKT:function aKT(){},
fl5(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.w(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,C.d(e,w,w,w,w,w,w,A.zI,A.L,w,w),A.aB,C.bW(A.fR,g,A.bq,0,8)],x.p),A.m,w,A.e,A.P,0,A.p),A.f,w,w,new C.o(D.W5,w,u,v,w,w,A.n),w,w,w,A.ex,A.a9,w,w,w),w,w,w)},
h_Z(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eJ()
b4.dw(b5*977+13)
w=A.o.D(1+A.o.an(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aA(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.T(u,t)
m=w
l=0
k=N.mK
j=!0
i=0
for(;;){if(!(j&&i<12))break
A:{++i
h=2+b4.aA(4)
for(g=k.a,f=k.b,e=0;e<h;r=a0,l=d){d=l+g
a0=r+f
if(d<0||a0<0||d>=7||a0>=7){e=99
break}a1=a0*7+d
if(A.d.t(p,a1)||a1===q){j=!1
break}p.push(a1);++e}if(!j||e>=99||m===0)break
a2=b4.he()?new C.z(f,-g):new C.z(-f,g)
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
a9=C.eu([A.d.gal(g)],u)
A.d.fn(g,b4)
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
B:{a7=b4.aA(49)
if(A.d.t(p,a7)||a7===q||a9.t(0,a7)||A.d.t(o,a7))break B
if(a7===v)break B
b0.L(0,a7)}}v=b5>=10?1:0
return new B.aVZ(b0,a9,C.T(u,t),q,N.mK,w+v)}return new B.aVZ(C.aX(u),C.eu([25],u),C.T(u,t),21,N.mK,1)},
hpq(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aX(x.S),n=d.e,m=A.o.E(n,7),l=A.o.an(n,7),k=d.f
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
if(q==="\\")k=new C.z(k.b,k.a)}return new C.bnM(p,o)},
hkJ(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aVZ:function aVZ(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
Vf:function Vf(d){this.a=d},
bjp:function bjp(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fq$=g
_.l1$=h
_.fT$=i
_.fs$=j
_.bt$=k
_.a9$=l
_.c=_.a=null},
ea_:function ea_(d){this.a=d},
e9Z:function e9Z(d,e){this.a=d
this.b=e},
ea0:function ea0(){},
e9Q:function e9Q(d,e){this.a=d
this.b=e},
e9R:function e9R(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e9U:function e9U(d,e){this.a=d
this.b=e},
e9S:function e9S(d){this.a=d},
e9T:function e9T(d){this.a=d},
e9V:function e9V(d){this.a=d},
e9W:function e9W(d){this.a=d},
e9X:function e9X(d){this.a=d},
e9Y:function e9Y(d,e){this.a=d
this.b=e},
bgp:function bgp(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
dgT:function dgT(d,e,f){this.a=d
this.b=e
this.c=f},
dgW:function dgW(d,e,f){this.a=d
this.b=e
this.c=f},
dgU:function dgU(d){this.a=d},
dgV:function dgV(d){this.a=d},
Vh:function Vh(d){this.a=d},
aDl:function aDl(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fq$=g
_.l1$=h
_.fT$=i
_.fs$=j
_.bt$=k
_.a9$=l
_.c=_.a=null},
eai:function eai(d){this.a=d},
eah:function eah(d,e){this.a=d
this.b=e},
eaj:function eaj(){},
ea3:function ea3(){},
eac:function eac(d,e){this.a=d
this.b=e},
ea9:function ea9(d){this.a=d},
ea5:function ea5(d){this.a=d},
eaa:function eaa(d){this.a=d},
eab:function eab(d){this.a=d},
ea4:function ea4(d){this.a=d},
ead:function ead(d){this.a=d},
ea8:function ea8(d,e){this.a=d
this.b=e},
eae:function eae(d){this.a=d},
ea7:function ea7(d,e){this.a=d
this.b=e},
eaf:function eaf(d){this.a=d},
ea6:function ea6(d,e){this.a=d
this.b=e},
eag:function eag(d){this.a=d},
bgE:function bgE(d,e){this.b=d
this.a=e},
aLk:function aLk(){},
bww:function bww(){},
aLl:function aLl(){},
bwx:function bwx(){},
a0w(d,e,f,g,h,i){return new B.btl(d,e,f,g,h,i)},
btl:function btl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fgZ:function fgZ(){},
fh_:function fh_(){},
fh0:function fh0(){},
fh1:function fh1(){},
fh2:function fh2(){},
fh3:function fh3(){},
fh4:function fh4(){},
fh5:function fh5(){},
a7Z:function a7Z(d){this.a=d},
cf2:function cf2(d){this.a=d},
cf3:function cf3(){},
cf1:function cf1(d,e){this.a=d
this.b=e},
cf0:function cf0(d){this.a=d},
W7:function W7(d){this.a=d},
aEc:function aEc(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fq$=f
_.l1$=g
_.fT$=h
_.fs$=i
_.bt$=j
_.a9$=k
_.c=_.a=null},
eJx:function eJx(d){this.a=d},
eJt:function eJt(d){this.a=d},
eJs:function eJs(d,e){this.a=d
this.b=e},
eJv:function eJv(d,e){this.a=d
this.b=e},
eJu:function eJu(d,e){this.a=d
this.b=e},
eJw:function eJw(d){this.a=d},
buI:function buI(d,e,f){this.b=d
this.c=e
this.a=f},
UR:function UR(d){this.a=d},
biZ:function biZ(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fq$=d
_.l1$=e
_.fT$=f
_.fs$=g
_.bt$=h
_.a9$=i
_.c=_.a=null},
dTW:function dTW(){},
dTX:function dTX(){},
dTR:function dTR(d,e){this.a=d
this.b=e},
dTT:function dTT(d,e){this.a=d
this.b=e},
dTU:function dTU(d){this.a=d},
dTS:function dTS(d){this.a=d},
dTV:function dTV(d){this.a=d},
bpx:function bpx(d,e,f){this.b=d
this.c=e
this.a=f},
U3:function U3(d){this.a=d},
biB:function biB(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fq$=d
_.l1$=e
_.fT$=f
_.fs$=g
_.bt$=h
_.a9$=i
_.c=_.a=null},
dEO:function dEO(){},
dEP:function dEP(){},
dEJ:function dEJ(){},
dEM:function dEM(d,e){this.a=d
this.b=e},
dEL:function dEL(d,e){this.a=d
this.b=e},
dEN:function dEN(d){this.a=d},
dEK:function dEK(d){this.a=d},
aHB:function aHB(d,e,f){this.a=d
this.b=e
this.c=f},
UI:function UI(d){this.a=d},
biT:function biT(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dRc:function dRc(d,e){this.a=d
this.b=e},
dRd:function dRd(d){this.a=d},
dRb:function dRb(d,e){this.a=d
this.b=e},
dRe:function dRe(d){this.a=d},
dRa:function dRa(d,e){this.a=d
this.b=e},
dRf:function dRf(d){this.a=d},
dR9:function dR9(d,e){this.a=d
this.b=e},
dRg:function dRg(d,e){this.a=d
this.b=e},
dR8:function dR8(d,e){this.a=d
this.b=e},
dRh:function dRh(d){this.a=d},
dR7:function dR7(d,e){this.a=d
this.b=e},
dRi:function dRi(d){this.a=d},
dR6:function dR6(d){this.a=d},
dRj:function dRj(d){this.a=d},
dR5:function dR5(d){this.a=d},
dRk:function dRk(d){this.a=d},
dRl:function dRl(d){this.a=d},
dR4:function dR4(d){this.a=d},
bkV:function bkV(d,e,f){this.b=d
this.c=e
this.a=f},
Vt:function Vt(d){this.a=d},
aDv:function aDv(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
efF:function efF(d,e){this.a=d
this.b=e},
efG:function efG(d,e,f){this.a=d
this.b=e
this.c=f},
efE:function efE(d,e,f){this.a=d
this.b=e
this.c=f},
efH:function efH(d){this.a=d},
efD:function efD(d){this.a=d},
efL:function efL(d){this.a=d},
efK:function efK(d,e){this.a=d
this.b=e},
efJ:function efJ(d,e){this.a=d
this.b=e},
efM:function efM(d,e){this.a=d
this.b=e},
efI:function efI(d,e){this.a=d
this.b=e},
efN:function efN(d){this.a=d},
VG:function VG(d){this.a=d},
aDR:function aDR(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eqx:function eqx(d){this.a=d},
eqy:function eqy(d){this.a=d},
eqv:function eqv(d,e){this.a=d
this.b=e},
eqw:function eqw(d){this.a=d},
equ:function equ(d){this.a=d},
eqz:function eqz(d){this.a=d},
eqA:function eqA(d){this.a=d},
eqB:function eqB(d){this.a=d},
eqC:function eqC(d,e){this.a=d
this.b=e},
W0:function W0(d){this.a=d},
bk6:function bk6(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eEP:function eEP(){},
eEY:function eEY(){},
eEU:function eEU(d){this.a=d},
eET:function eET(){},
eEV:function eEV(d,e){this.a=d
this.b=e},
eES:function eES(d,e){this.a=d
this.b=e},
eEW:function eEW(d){this.a=d},
eER:function eER(d,e){this.a=d
this.b=e},
eEX:function eEX(d){this.a=d},
eEQ:function eEQ(d){this.a=d},
Vr:function Vr(d){this.a=d},
bjA:function bjA(d,e,f,g,h,i,j,k){var _=this
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
_.fq$=f
_.l1$=g
_.fT$=h
_.fs$=i
_.bt$=j
_.a9$=k
_.c=_.a=null},
eek:function eek(){},
eel:function eel(){},
eed:function eed(d){this.a=d},
eec:function eec(d){this.a=d},
eee:function eee(d){this.a=d},
eeb:function eeb(d){this.a=d},
eef:function eef(d){this.a=d},
eea:function eea(d){this.a=d},
eeg:function eeg(d,e){this.a=d
this.b=e},
ee9:function ee9(d,e){this.a=d
this.b=e},
eeh:function eeh(d){this.a=d},
ee8:function ee8(d,e){this.a=d
this.b=e},
eei:function eei(d){this.a=d},
ee7:function ee7(d,e){this.a=d
this.b=e},
eej:function eej(d){this.a=d},
ee6:function ee6(d,e){this.a=d
this.b=e},
bcB:function bcB(d,e,f){this.c=d
this.d=e
this.a=f},
aKG:function aKG(){},
bwn:function bwn(){},
aKZ:function aKZ(){},
bws:function bws(){},
aLt:function aLt(){},
bwC:function bwC(){},
aLX:function aLX(){},
bwO:function bwO(){},
jI(d,e,f,g,h,i){return new B.b6b(h,d,f,g,i,e,null)},
hpf(d,e,f,g){var w=null
return C.cb(w,w,!0,w,new B.fQg(g,e,f),d,w,!0,!0,x.H)},
hE(d,e,f,g,h,i,j){return new B.ave(f,j,i,h,g,d,e,null)},
qR(d,e,f){return B.iaN(d,e,f)},
iaN(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qR=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aW.ak$.x.h(0,e)
n=n==null?null:n.gba()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.m_(2),$async$qR)
case 7:q=h
w=8
return C.b(q.hv(A.fZ),$async$qR)
case 8:p=h
if(p==null){w=1
break}o=J.eT(A.dD.gaN(p))
w=9
return C.b(B.cpY(C.a([B.heb(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qR)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.J(x.gV).f.U(D.aOv)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qR,v)},
lf(d,e,f,g){var w,v=$.arn
if(v==="music")return E.dE(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dE(261.63*v,w,f,0,g,"sine")}return B.vX(v,e,f,g)},
vX(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return E.dE(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return E.dE(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return E.dE(140+A.o.E(e,12)*9,"",150,0.9,g,v)
case"bubble":return E.dE(260+A.o.E(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":E.dE(t,"",160,-0.7,g*0.4,w)
return E.dE(900,"",90,0,g*0.45,u)
case"zap":return E.dE(t*3,"",150,1.6,g*0.4,"square")
case"click":return E.dE(2600+A.o.E(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":E.dE(320,"",220,-0.7,g*0.35,v)
return E.dE(1500,"",200,0,g*0.22,u)
case"organic":return E.dE(85+A.o.E(e,12)*5,"",190,1.1,g,v)
case"lab":return E.dE(t*1.6,"",140,-0.3,g*0.55,w)
default:return E.dE(t,"",s,0,g*0.5,w)}},
BC(d,e,f,g){var w,v,u,t,s,r,q,p=$.arn
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.K)(e),++w)B.lf(d,e[w],f,g)
return}for(p=C.db(e,0,C.dG(4,"count",x.S),C.U(e).c),v=p.$ti,p=new C.bQ(p,p.gM(0),v.k("bQ<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.lf(d,s,f,g)
else C.bN(new C.ba(1000*q),new B.ceZ(d,s,f,g),u)}},
a7Y(d,e){var w="sine",v="noise"
switch(d){case"kick":E.dE(95,"",200,1.8,e,w)
break
case"snare":E.dE(220,"",140,0,e*0.65,v)
break
case"hat":E.dE(5000,"",50,0,e*0.35,v)
break
case"open":E.dE(5200,"",220,0,e*0.35,v)
break
case"clap":E.dE(1100,"",100,0,e*0.5,v)
break
case"tom":E.dE(150,"",230,1,e,w)
break
case"low":E.dE(100,"",260,0.9,e,w)
break
case"rim":E.dE(1700,"",60,0,e*0.4,"square")
break
case"cow":E.dE(820,"",240,0,e*0.3,"square")
break
case"crash":E.dE(3200,"",650,0,e*0.4,v)
break
case"shake":E.dE(7000,"",90,0,e*0.3,v)
break
default:E.dE(60,"",300,0,e,w)}},
zq(d){return B.hGd(d)},
hGd(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$zq=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$zq)
case 7:r=f
q=C.aU(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.T(x.N,x.z)
w=1
break}p=A.S.aI(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?C.a2(p,o,n):C.T(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=C.T(x.N,x.z)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$zq,v)},
vU(d,e){return B.hGe(d,e)},
hGe(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$vU=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$vU)
case 6:s=g
w=7
return C.b(s.ar("String","ngmy_play_progress_v1_"+d,A.S.ao(e,null)),$async$vU)
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
return C.i($async$vU,v)},
b6b:function b6b(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
crX:function crX(d){this.a=d},
crY:function crY(d,e){this.a=d
this.b=e},
fQg:function fQg(d,e,f){this.a=d
this.b=e
this.c=f},
fQf:function fQf(d){this.a=d},
dA:function dA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
crT:function crT(d){this.a=d},
eR:function eR(d,e,f){this.c=d
this.d=e
this.a=f},
ave:function ave(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
fi:function fi(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
crS:function crS(d){this.a=d},
F7:function F7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
crZ:function crZ(d){this.a=d},
mC:function mC(){},
crU:function crU(d,e,f){this.a=d
this.b=e
this.c=f},
crW:function crW(d){this.a=d},
crV:function crV(){},
ceZ:function ceZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cuy(){var w=0,v=C.j(x.cL),u,t
var $async$cuy=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.qS().bfw("assets/data/world110.json"),$async$cuy)
case 3:u=t.hKN(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cuy,v)},
hKN(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.S.aI(0,a2,null)),a1=C.a([],x.F)
for(w=J.aV(a0),v=x.n,u=x.b,t=x.a,s=x.gO;w.C();){r=t.a(w.gR(w))
q=C.a([],s)
for(p=J.a4(r),o=J.aV(d.a(p.h(r,"r")));o.C();){n=o.gR(o)
m=C.a([],u)
for(l=J.aV(d.a(n));l.C();){k=l.gR(l)
j=J.a4(k)
m.push(C.a([C.dR(j.h(k,0)),C.dR(j.h(k,1))],v))}q.push(m)}o=C.cP(p.h(r,"n"))
m=C.cP(p.h(r,"a"))
l=C.cP(p.h(r,"ct"))
j=C.cP(p.h(r,"sr"))
i=C.dR(p.h(r,"pop"))
h=C.dR(p.h(r,"gdp"))
g=C.cP(p.h(r,"inc"))
f=C.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aPR(g,f,"",0)
f=C.dR(J.q(p.h(r,"c"),0))
p=C.dR(J.q(p.h(r,"c"),1))
e=new B.aaL(o,m,l,j,i,h,g,f,p,q)
e.bxR(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.aaM(a1)},
ftZ(d){if(d>=1e12)return A.k.ab(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.ab(d/1e9,2)+" billion"
if(d>=1e6)return A.k.ab(d/1e6,1)+" million"
if(d>=1000)return A.k.ab(d/1000,1)+" thousand"
return A.k.ab(d,0)},
GG(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.E(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
aaL:function aaL(d,e,f,g,h,i,j,k,l,m){var _=this
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
aaM:function aaM(d){this.a=d},
v0:function v0(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
OX:function OX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xX:function xX(d,e,f){this.a=d
this.b=e
this.c=f},
OW:function OW(d){this.a=0
this.b=d
this.c=0},
hMG(d,e,f){return $.hMH.c8(0,d+"|"+C.t(e)+"|"+f.l(),new B.dcD(d,e,f))},
UY:function UY(d){this.a=d},
aCS:function aCS(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fq$=j
_.l1$=k
_.fT$=l
_.fs$=m
_.bt$=n
_.a9$=o
_.c=_.a=null},
dWE:function dWE(d){this.a=d},
dWD:function dWD(d,e){this.a=d
this.b=e},
dW6:function dW6(d){this.a=d},
dW4:function dW4(d){this.a=d},
dW5:function dW5(d,e,f){this.a=d
this.b=e
this.c=f},
dW3:function dW3(d){this.a=d},
dW2:function dW2(){},
dW1:function dW1(d){this.a=d},
dWp:function dWp(d,e){this.a=d
this.b=e},
dWq:function dWq(d,e){this.a=d
this.b=e},
dWe:function dWe(d){this.a=d},
dWf:function dWf(d){this.a=d},
dWd:function dWd(d){this.a=d},
dWg:function dWg(d){this.a=d},
dW7:function dW7(d,e){this.a=d
this.b=e},
dW8:function dW8(d){this.a=d},
dWr:function dWr(d,e){this.a=d
this.b=e},
dWc:function dWc(d,e){this.a=d
this.b=e},
dWv:function dWv(d){this.a=d},
dWo:function dWo(d){this.a=d},
dWw:function dWw(d,e){this.a=d
this.b=e},
dWn:function dWn(d,e){this.a=d
this.b=e},
dWx:function dWx(d){this.a=d},
dWm:function dWm(d,e){this.a=d
this.b=e},
dWy:function dWy(d){this.a=d},
dWl:function dWl(d,e){this.a=d
this.b=e},
dWz:function dWz(d){this.a=d},
dWk:function dWk(d,e){this.a=d
this.b=e},
dWA:function dWA(d){this.a=d},
dWj:function dWj(d,e){this.a=d
this.b=e},
dWB:function dWB(d){this.a=d},
dWi:function dWi(d){this.a=d},
dWC:function dWC(d){this.a=d},
dWh:function dWh(d){this.a=d},
dWs:function dWs(d){this.a=d},
dWb:function dWb(d){this.a=d},
dWt:function dWt(d){this.a=d},
dWa:function dWa(d){this.a=d},
dWu:function dWu(d){this.a=d},
dW9:function dW9(d){this.a=d},
dW0:function dW0(){},
dW_:function dW_(d){this.a=d},
dVZ:function dVZ(d){this.a=d},
beQ:function beQ(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dcD:function dcD(d,e,f){this.a=d
this.b=e
this.c=f},
dcE:function dcE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aL4:function aL4(){},
aL5:function aL5(){},
aeR(d,e,f,g,h){return new B.btg(d,e,f,g,h)},
btg:function btg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fgS:function fgS(){},
fgT:function fgT(){},
fgU:function fgU(){},
fgV:function fgV(){},
fgW:function fgW(){},
fgX:function fgX(){},
fgY:function fgY(){},
W3:function W3(d){this.a=d},
bka:function bka(){this.d=$
this.c=this.a=null},
eFI:function eFI(d){this.a=d},
eFJ:function eFJ(d){this.a=d},
eFH:function eFH(d){this.a=d},
eFK:function eFK(){},
eFG:function eFG(d,e){this.a=d
this.b=e},
eFF:function eFF(d){this.a=d},
hN7(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eJ()
v.dw(w)
t.push(v.aj()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eJ()
v.dw(w+900)
u.push(2.2+v.aj())}return new B.bjX(new C.cs(null,x.A),new B.OW(A.cG),A.J,A.av,t,u,$,A.bx,0,C.a([],x.X),null,null)},
hN9(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hN8(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hfn(d,e,f){return $.hNK.c8(0,d+"|"+C.t(e)+"|"+f.l(),new B.f_5(d,e,f))},
VP:function VP(d){this.a=d},
bjX:function bjX(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fq$=j
_.l1$=k
_.fT$=l
_.fs$=m
_.bt$=n
_.a9$=o
_.c=_.a=null},
exL:function exL(d,e){this.a=d
this.b=e},
exW:function exW(d,e){this.a=d
this.b=e},
exX:function exX(d,e){this.a=d
this.b=e},
exT:function exT(d){this.a=d},
exU:function exU(d){this.a=d},
exV:function exV(d){this.a=d},
exY:function exY(d){this.a=d},
exS:function exS(d){this.a=d},
exZ:function exZ(d,e){this.a=d
this.b=e},
ey_:function ey_(d){this.a=d},
exR:function exR(d,e){this.a=d
this.b=e},
ey0:function ey0(d){this.a=d},
exQ:function exQ(d,e){this.a=d
this.b=e},
ey1:function ey1(d){this.a=d},
exP:function exP(d){this.a=d},
ey2:function ey2(d){this.a=d},
exO:function exO(d){this.a=d},
ey3:function ey3(d){this.a=d},
exN:function exN(d){this.a=d},
ey4:function ey4(d){this.a=d},
exM:function exM(d){this.a=d},
exK:function exK(){},
exJ:function exJ(){},
exI:function exI(d){this.a=d},
exH:function exH(d){this.a=d},
brj:function brj(d,e){this.b=d
this.a=e},
f_5:function f_5(d,e,f){this.a=d
this.b=e
this.c=f},
f_6:function f_6(){},
f_7:function f_7(){},
UZ:function UZ(d){this.a=d},
aCT:function aCT(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fq$=k
_.l1$=l
_.fT$=m
_.fs$=n
_.bt$=o
_.a9$=p
_.c=_.a=null},
dWI:function dWI(){},
dXa:function dXa(){},
dWX:function dWX(d,e){this.a=d
this.b=e},
dWO:function dWO(d,e){this.a=d
this.b=e},
dWY:function dWY(d){this.a=d},
dWN:function dWN(d){this.a=d},
dWZ:function dWZ(d){this.a=d},
dWW:function dWW(d){this.a=d},
dX2:function dX2(d){this.a=d},
dWV:function dWV(d){this.a=d},
dX3:function dX3(d){this.a=d},
dWU:function dWU(d,e){this.a=d
this.b=e},
dX4:function dX4(d){this.a=d},
dX5:function dX5(d){this.a=d},
dWT:function dWT(d,e){this.a=d
this.b=e},
dX6:function dX6(d){this.a=d},
dWS:function dWS(d,e){this.a=d
this.b=e},
dX7:function dX7(d){this.a=d},
dWR:function dWR(d,e){this.a=d
this.b=e},
dX8:function dX8(d){this.a=d},
dWQ:function dWQ(d,e){this.a=d
this.b=e},
dX9:function dX9(d){this.a=d},
dWP:function dWP(d){this.a=d},
dX_:function dX_(d){this.a=d},
dWM:function dWM(d){this.a=d},
dX0:function dX0(d){this.a=d},
dWL:function dWL(d){this.a=d},
dX1:function dX1(d){this.a=d},
dWK:function dWK(d){this.a=d},
dWH:function dWH(d){this.a=d},
dWG:function dWG(){},
dWJ:function dWJ(d,e){this.a=d
this.b=e},
dWF:function dWF(d){this.a=d},
ba1:function ba1(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
VH:function VH(d){this.a=d},
bjU:function bjU(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fq$=e
_.l1$=f
_.fT$=g
_.fs$=h
_.bt$=i
_.a9$=j
_.c=_.a=null},
eqF:function eqF(d,e){this.a=d
this.b=e},
eqG:function eqG(d,e){this.a=d
this.b=e},
eqE:function eqE(d,e){this.a=d
this.b=e},
eqH:function eqH(d,e){this.a=d
this.b=e},
eqD:function eqD(d,e){this.a=d
this.b=e},
bqS:function bqS(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eYf:function eYf(d){this.a=d},
aL6:function aL6(){},
bwu:function bwu(){},
aLF:function aLF(){},
bwI:function bwI(){},
aLI:function aLI(){},
bwK:function bwK(){},
hN5(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eJ()
v.dw(w)
v=v.aj()
u=new C.eJ()
u.dw(w+500)
s.push(new C.u(v,u.aj()))}return new B.biA(new C.cs(null,x.A),new B.OW(A.cG),t,A.av,s,$,A.bx,0,C.a([],x.X),null,null)},
Pq:function Pq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
U1:function U1(d){this.a=d},
biA:function biA(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.fq$=i
_.l1$=j
_.fT$=k
_.fs$=l
_.bt$=m
_.a9$=n
_.c=_.a=null},
dEf:function dEf(){},
dE3:function dE3(){},
dE4:function dE4(d,e){this.a=d
this.b=e},
dE5:function dE5(d,e){this.a=d
this.b=e},
dE2:function dE2(d){this.a=d},
dE1:function dE1(d){this.a=d},
dE7:function dE7(d){this.a=d},
dE0:function dE0(d,e){this.a=d
this.b=e},
dE8:function dE8(d){this.a=d},
dE_:function dE_(d){this.a=d},
dE9:function dE9(d){this.a=d},
dDZ:function dDZ(d){this.a=d},
dEa:function dEa(d){this.a=d},
dDY:function dDY(d){this.a=d},
dEb:function dEb(d){this.a=d},
dDX:function dDX(d){this.a=d},
dEc:function dEc(d){this.a=d},
dDW:function dDW(d){this.a=d},
dEd:function dEd(d){this.a=d},
dDV:function dDV(d){this.a=d},
dEe:function dEe(d){this.a=d},
dDU:function dDU(d){this.a=d},
dE6:function dE6(d){this.a=d},
dDT:function dDT(d){this.a=d},
b9q:function b9q(d,e){this.b=d
this.a=e},
aev:function aev(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
UV:function UV(d){this.a=d},
bj1:function bj1(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.fq$=p
_.l1$=q
_.fT$=r
_.fs$=s
_.bt$=t
_.a9$=u
_.c=_.a=null},
dVf:function dVf(d){this.a=d},
dV5:function dV5(d,e){this.a=d
this.b=e},
dV6:function dV6(d,e){this.a=d
this.b=e},
dV4:function dV4(d,e){this.a=d
this.b=e},
dV7:function dV7(d){this.a=d},
dV3:function dV3(d){this.a=d},
dV8:function dV8(d){this.a=d},
dV2:function dV2(d,e){this.a=d
this.b=e},
dV9:function dV9(d){this.a=d},
dV1:function dV1(d,e){this.a=d
this.b=e},
dVa:function dVa(d){this.a=d},
dV0:function dV0(d,e){this.a=d
this.b=e},
dVb:function dVb(d){this.a=d},
dV_:function dV_(d,e){this.a=d
this.b=e},
dVc:function dVc(d){this.a=d},
dUZ:function dUZ(d){this.a=d},
dVd:function dVd(d){this.a=d},
dUY:function dUY(d){this.a=d},
dVe:function dVe(d){this.a=d},
dUX:function dUX(d){this.a=d},
beG:function beG(d,e){this.b=d
this.a=e},
d9L:function d9L(d){this.a=d},
VD:function VD(d){this.a=d},
bjT:function bjT(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.fq$=f
_.l1$=g
_.fT$=h
_.fs$=i
_.bt$=j
_.a9$=k
_.c=_.a=null},
epU:function epU(d,e){this.a=d
this.b=e},
epV:function epV(d){this.a=d},
epT:function epT(d){this.a=d},
epW:function epW(d){this.a=d},
epS:function epS(d){this.a=d},
epX:function epX(d){this.a=d},
epR:function epR(d){this.a=d},
epY:function epY(d){this.a=d},
epQ:function epQ(d){this.a=d},
epZ:function epZ(d){this.a=d},
epP:function epP(d,e){this.a=d
this.b=e},
eq_:function eq_(d){this.a=d},
epO:function epO(d,e){this.a=d
this.b=e},
eq0:function eq0(d){this.a=d},
epN:function epN(d,e){this.a=d
this.b=e},
eq1:function eq1(d){this.a=d},
epM:function epM(d,e){this.a=d
this.b=e},
bq7:function bq7(d,e){this.b=d
this.a=e},
aKD:function aKD(){},
bwm:function bwm(){},
aL1:function aL1(){},
bwt:function bwt(){},
aLE:function aLE(){},
bwH:function bwH(){},
heb(d,e,f){var w,v
C.fT(0,0,!1)
w=new C.li(e,f,$,null)
v=w.bI0(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
i_J(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.D)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,C.K)(w),++q){p=w[q]
u.push(C.F(["k",p.b,"x",C.nX(A.k.ab(p.c,4)),"y",C.nX(A.k.ab(p.d,4)),"v",p.e,"l",C.nX(A.k.ab(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.nX(A.k.ab(p.as,3)),"ch",p.at,"vc",C.nX(A.k.ab(p.z,3)),"s",C.nX(A.k.ab(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.K)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.C(f,C.a3(f).k("co.E"))
A.d.fo(l)
return A.S.ao(C.F(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
i9a(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.S.aI(0,a7,a5)
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
if(!$.qf().ai(0,s)){J.ci(v,null)
continue}d=s
a0=C.aJ(J.q(t,"x"))
if(a0==null)a0=0.5
a1=C.aJ(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new B.tr(a2,d,a0,a1)
a3.apz(a2,d,a0,a1)
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
d=C.jK(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=C.jK(J.q(t,"b"))
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
J.ci(v,r)}i=g.a(J.q(w,"wires"))
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
if(m!=null&&l!=null)a6.ak9(m,A.k.N(C.dR(J.q(p,1))),l,A.k.N(C.dR(J.q(p,3))))}i=C.aJ(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=C.aX(x.S)
h=g.a(J.q(w,"done"))
h=J.aV(h==null?A.cv:h)
while(h.C()){j=h.gR(h)
J.ci(k,A.k.N(C.dR(j)))}return new C.bnN(i,k)}catch(a4){return a5}},
fvL(){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fvL=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.az(),$async$fvL)
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
return C.i($async$fvL,v)},
bD7(d){return B.iaJ(d)},
iaJ(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bD7=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.az(),$async$bD7)
case 7:w=6
return C.b(f.ar("String","ngmy_electronics_lab_v1",d),$async$bD7)
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
return C.i($async$bD7,v)},
cpY(d,e){var w=0,v=C.j(x.g7),u
var $async$cpY=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.h2G().x9(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cpY,v)}},D,T,H,U,A_,A8,A9,An,X
J=c[1]
C=c[0]
A=c[2]
A0=c[137]
A1=c[146]
Aa=c[145]
A2=c[138]
A3=c[134]
I=c[126]
P=c[120]
A4=c[122]
Ab=c[140]
A5=c[111]
A6=c[99]
G=c[129]
Ac=c[124]
Ad=c[139]
A7=c[143]
Ae=c[67]
Y=c[76]
Af=c[84]
Ag=c[80]
N=c[115]
Q=c[88]
Ah=c[147]
Ai=c[117]
Z=c[125]
O=c[127]
V=c[144]
Aj=c[71]
Ak=c[142]
R=c[133]
M=c[141]
Al=c[94]
W=c[116]
K=c[132]
S=c[95]
Am=c[24]
E=c[26]
F=c[92]
L=c[104]
B=a.updateHolder(c[17],B)
D=c[123]
T=c[136]
H=c[41]
U=c[130]
A_=c[106]
A8=c[135]
A9=c[128]
An=c[131]
X=c[97]
B.ajy.prototype={}
B.Va.prototype={
T(){return new B.bjn(C.T(x.N,x.i),new C.as(A.as,$.aw()),C.a([],x.X),C.a([],x.K),C.mA(0,null,null))}}
B.bjn.prototype={
gVT(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
this.ch.q()
this.a2()},
Nk(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$Nk=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jI()
p.bO(0,A.c8)
t.m(new B.e7_(t))
t.a.toString
p=t.gVT()
w=3
return C.b(B.byH(B.hOY(q,B.i_A(p),o,t.ay)),$async$Nk)
case 3:s=e
r=s==null?null:J.iV(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=B.i1_(q,p,o)
if(t.c==null){w=1
break}t.m(new B.e70(t,o,r))
$.aW.x1$.push(new B.e71(t))
case 1:return C.h(u,v)}})
return C.i($async$Nk,v)},
XU(d){return this.bZ0(d)},
aVd(){return this.XU(null)},
bZ0(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$XU=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ak$.d.c
if(s!=null)s.jI()
t.f.saW(0,o)
t.m(new B.e7c(t))
E.dE(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.byH(B.hVG(o)),$async$XU)
case 3:r=n.a=m.i8S(f)
p.b=""
if(r!=null&&!B.i_B(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.i10(o)
q=C.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.ajy(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new B.e7d(p,t))
t.c3l(p.a)
case 1:return C.h(u,v)}})
return C.i($async$XU,v)},
c3l(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
A.d.a8(w)
w=++m.as
v=m.gVT()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new B.e78(m))
t=d.d
s=C.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.e76(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.e79(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.K)(r),++u){p.$2(o,new B.e7a(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.e7b(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bu.j(0.1),g=C.m(16),f=C.I(A.bu.j(0.35),A.q,1)
if(m.x)j=C.B(C.a([D.eSL,A.bd,C.E(C.d(m.Q,l,l,l,l,l,l,A.To,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.fhf
else{w=C.E(C.d(k.a,l,l,l,l,l,l,Ac.TO,l,l,l),1)
v=x.p
w=C.a([C.B(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.f2p,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.D(A.vm,C.d(u,l,l,l,l,l,l,D.f51,l,l,l),l))
w.push(A.cS)
w.push(C.d(k.b,l,l,l,l,l,l,F.Du,l,l,l))
u=k.e
if(u.length!==0){t=A.aM.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.f7q,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.i1,A.cp,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aA
w.push(new C.D(A.M2,new C.cl(A.aO,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.y(t,l,A.m8,l,l,l,l,l,l,l,l,l),A.bp,new C.bB(1,A.bg,new C.y(q,l,new C.H(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.K)(j),++p){o=j[p]
t=new C.aT(12,12)
s=new C.aT(12,12)
A.d.v(w,C.a([A.N,new C.bI(A.a8,l,l,C.p(l,new C.y(o.a,l,A.a7A,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.bu.j(0.3),l,l,new C.bp(t,t,t,t),l,l,A.n),l,l,l,l,A.fL,l,l,l),l),A.at,C.p(l,new C.y(o.b,l,D.fcH,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bp(s,s,s,s),l,l,A.n),l,l,l,l,A.bR,l,l,l)],v))}if(m.ax)w.push(D.e8G)
j=C.c9(C.w(w,A.F,l,A.e,A.j,0,A.p),A.r,m.ch,A.y,l,l,l,l,A.ag)}w=x.p
g=C.w(C.a([C.ahO(C.p(l,j,A.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.brj,A.ej,l,l,1/0),A.bc,A.ig),C.E(B.h4t(m.gVT(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dA("Ask about it",i,new B.e7g(m),l,A.bu,l),new B.dA("Invent something new",!i,new B.e7h(m),l,A.bu,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.ddC[p]
i.push(new B.dA(n,!1,new B.e7i(m,n),l,A.bu,l))}f.push(new B.eR(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cYg[p]
i.push(new B.dA(r,!1,new B.e7j(m,r),l,A.bu,l))}f.push(new B.eR(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.E(C.aM(l,A.T,!1,l,!0,A.r,l,C.aN(),m.f,l,l,l,l,l,2,C.bs(l,new C.b4(4,C.m(16),A.Y),l,A.eR,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kI,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.e7k(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dp,!0,A.a4,l,A.an,l,A.aPd,l,l),1)
h=m.at
v=h&&j?D.bFF:A.dX
j=h&&j?"Ask":"Invent"
f.push(C.B(C.a([i,A.ab,new B.fi(v,j,new B.e7l(m,k),A.bu,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jI(A.bu,A.hc,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.w(f,A.m,l,A.e,A.P,0,A.p))}}
B.FW.prototype={}
B.uM.prototype={}
B.VC.prototype={
T(){return new B.aDL(A.J,A.J,A.av,C.aX(x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDL.prototype={
gaWs(){var w,v,u,t=this,s=D.H5[t.cx],r=D.QC[t.cy],q=D.Cb[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ea(w,w.r,C.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.avW[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cK(p,0,new B.en5())},
ga29(){return D.H5[this.cx].d/this.gaWs()},
gaNL(){return 0.1*(D.H5[this.cx].d/0.9)/D.QC[this.cy].d},
a_(){this.a1()
this.lg()
B.zq("rocket_lander").bA(new B.enp(this),x.P)},
c3u(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cG.aj()*0.6
w.f=new C.u(0.15+A.cG.aj()*0.7,0.08)
w.r=new C.u((A.cG.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
lz(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new B.enq())
return}w=D.ro[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga29()
v=v.ad(0,new C.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaNL())}if(m.dy){t=m.r
v=v.aC(0,t.aG(0,t.gcm()*6*D.axR[m.d]))}t=m.r=m.r.ad(0,v.aG(0,d))
s=m.f=m.f.ad(0,t.aG(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new C.u(-t.a*0.4,t.b)
t=new C.u(A.k.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new C.u(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Cb[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
B.vU("rocket_lander",C.F(["unlocked",t],x.N,x.z))
B.BC("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga29()/(D.ro[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ab(m.ga29()/(D.ro[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dE(80,"",500,0,0.6,"noise")
C.fJ()}}if(m.Q&&m.x>0&&A.o.E(A.k.bn(m.CW*20),2)===0)E.dE(90,"",70,0,0.12,"noise")
m.m(new B.enr())},
afl(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.f4x,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dA(e[w].a,f.$1(w),new B.en7(this,g,w),v,h,v))
return new C.D(A.eI,C.w(C.a([u,A.cS,C.bW(A.bA,s,A.bq,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bDe(d){var w,v,u,t,s=this,r=null,q=s.ga29()/(D.ro[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaNL()),o=D.axR[s.d],n=C.m(24),m=d.c,l=C.I(m.j(0.6),A.q,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.TI,r,r,r),A.R,s.afl("ENGINE: "+D.H5[s.cx].b,D.H5,new B.emX(s),new B.emY(s),A.cs),s.afl("FUEL TANK: "+D.QC[s.cy].b,D.QC,new B.emZ(s),new B.en_(s),A.b2),s.afl("LANDING GEAR: "+D.Cb[s.db].b,D.Cb,new B.en0(s),new B.en1(s),A.aP),s.afl("EXTRAS (tap to add)",D.avW,new B.en2(s),new B.en3(s),A.bu)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fzo)
o=(q?A.b2:A.c9).j(0.14)
w=C.m(12)
v=A.k.ab(s.gaWs(),2)
u=A.k.ab(s.ga29()/(D.ro[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.Cb[s.db].d*100)+".",r,r,r,r,r,r,D.f59,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.i1,A.bR,r,r,r))
m.push(A.R)
m.push(new C.bI(A.A,r,r,new B.fi(A.nm,"Launch",new B.en4(s),A.b2,r),r))
return C.av(C.p(r,C.c9(C.w(m,A.F,r,A.e,A.P,0,A.p),A.r,r,A.y,r,A.bQ,r,r,A.ag),A.f,r,A.lE,new C.o(D.bhK,r,l,n,r,r,A.n),r,r,r,A.bR,r,r,r,r),r,r,r)},
aXA(d,e,f,g){var w=null,v=f?A.cs:A.c.j(0.1),u=C.m(18),t=C.I(A.b0,A.q,1)
return C.oc(A.jH,C.p(w,C.X(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.emU(e),new B.emV(e),w,w,w,w,new B.emW(e))},
aXz(d,e,f){return this.aXA(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cq(new B.eni(s,D.ro[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.ro[w].a:"\ud83d\udd12"
o.push(new B.dA(v,s.d===w,new B.enj(s,w),r,D.ro[w].c,r))}v=C.a([s.aXz(F.alM,new B.enk(s),s.y),A.bd,s.aXA(A.vJ,new B.enl(s),s.Q,130),A.bd,s.aXz(A.NL,new B.enm(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aP:A.c.j(0.1)
t=C.m(18)
A.d.v(v,C.a([A.bd,C.aC(r,C.p(r,D.bJU,A.f,r,r,new C.o(u,r,C.I(A.b0,A.q,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.enn(s),r,r,r,r,r,r,!1,A.a7)],p))}return B.jI(A.cs,A.hc,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.w(C.a([new B.eR(o,"WORLD",r),C.B(v,A.m,r,A.b9,A.j,0,r,r)],p),A.m,r,A.e,A.P,0,A.p))}}
B.bgm.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.ro[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.W(),d=C.N(),a0=j.c,a1=C.aq(D.bkt,a0,0.25)
a1.toString
d.saq(new C.a8(A.b_,A.b4,A.x,C.a([F.adl,a1],x.O),l,l).aw(0,new C.a9(0,0,g,f)))
a2.aZ(new C.a9(0,0,g,f),d)
w=new C.eJ()
w.dw(5)
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
q=new C.eJ()
q.dw(2)
for(p=0;p<=i;p+=18){e=new C.ap(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.aj()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bB(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.F(new C.ap(i,h))
r.F(new C.ap(0,h))
r.F(new C.bE())
e=$.W()
d=C.N()
d.r=C.aq(a0,A.w,0.6).gp(0)
a2.aQ(r,d)
o=C.cg(new C.u(k.ax*i,s+10),8,k.ay*i)
d=C.bx(o,A.ir)
a0=C.N()
a0.r=A.bi.gp(0)
a2.aD(d,a0)
a0=C.bx(o.cv(2),A.ql)
d=C.N()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aD(a0,d)
if(k.as==="ready")return
d=k.f
J.by(g.save())
g.translate(d.a*i,d.b*h)
a2.j4(0,k.w)
i=k.as
if(i==="crashed"){k=C.N()
k.r=A.cs.j(0.6).gp(0)
k.z=Z.HB
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
a2.aQ(n,k)
i=new C.aO(i,A.ao,l,l,C.a([],f))
i.F(new C.b5(-4,18))
i.F(new C.ap(0,32))
i.F(new C.ap(4,18))
i.F(new C.bE())
k=C.N()
k.r=A.c.gp(0)
a2.aQ(i,k)}k=e.r
m=new C.aO(k,A.ao,l,l,C.a([],f))
m.F(new C.b5(0,-26))
m.F(new C.cV(14,-10,11,18))
m.F(new C.ap(-11,18))
m.F(new C.cV(-14,-10,0,-26))
m.F(new C.bE())
i=C.N()
i.saq(D.bWp.aw(0,D.eLu))
a2.aQ(m,i)
i=C.N()
i.r=A.aP.gp(0)
a2.af(D.wb,5,i)
i=new C.aO(k,A.ao,l,l,C.a([],f))
i.F(new C.b5(-11,6))
i.F(new C.ap(-20,20))
i.F(new C.ap(-11,18))
i.F(new C.bE())
h=C.N()
h.r=A.ay.gp(0)
a2.aQ(i,h)
f=new C.aO(k,A.ao,l,l,C.a([],f))
f.F(new C.b5(11,6))
f.F(new C.ap(20,20))
f.F(new C.ap(11,18))
f.F(new C.bE())
k=C.N()
k.r=A.ay.gp(0)
a2.aQ(f,k)
g.restore()},
av(d){return!0}}
B.aLC.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bwG.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bvl()}}
B.aRv.prototype={}
B.a2N.prototype={}
B.b9t.prototype={}
B.U2.prototype={
T(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.eu(["skin"],x.N),o=new Float32Array(0)
return new B.aCa(w,v,u,t,s,r,q,new C.cs(null,x.A),p,D.Ka,D.Ka,A.av,A.cG,o,new Int32Array(0),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCa.prototype={
a_(){var w=this
w.a1()
w.lg()
w.as=new B.c05(w.gcbO())
new B.dEH(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a6(0)
v.d=null}this.bum()},
cbP(d){var w,v=this
if(v.c==null)return
w=J.a4(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eZ(0,C.F(["t","init","data",$.heq],x.N,x.z))
v.at=!0
v.ax=""
v.aya()
break
case"pick":v.m(new B.dEj(v,d))
break
case"shot":v.ahd(C.t(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
aya(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.atU[q.CW]
v=new B.dEk()
u=q.ay
u=C.C(u,C.a3(u).k("co.E"))
A.d.fo(u)
t=x.N
s=C.F(["layers",u,"skinMode",q.ch,"tone","#"+C.t(v.$1(w.b))+C.t(v.$1(w.c))+C.t(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.S.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.T(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.eZ(0,u)}},
ahd(d){return this.csG(d)},
csG(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ahd=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cI.aJ(A.a.b3(d,A.a.cH(d,",")+1))
w=6
return C.b(B.cpY(C.a([B.heb(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$ahd)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.J(x.gV).f.U(D.aOv)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$ahd,v)},
axC(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
lz(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bn(w)!==A.k.bn(v.ok)){B.a7Y("kick",0.4)
v.a4M(170,new B.dEI())}v.ok=w
return},
ah2(d){var w,v,u,t,s=this
s.m(new B.dEl(s,d))
if(d==null){s.fx=D.Ka
s.dy=1
w=s.as
if(w!=null)w.eZ(0,C.F(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.U(w).k("a_<1>")
u=C.C(new C.a_(w,new B.dEm(d),v),v.k("J.E"))
t=A.d.gI(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.L(0,t)
if(s.ch===2)s.ch=1}s.aya()
w=s.as
if(w!=null)w.eZ(0,C.F(["t","focus","group",d],x.N,x.z))
s.go=0
s.cv7(t,d)
return},
cv7(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a7Y("kick",0.8)
this.a4M(260,new B.dEn())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dE(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a4M(w*70,new B.dEo(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dE(110,"",360,0.7,0.3,"saw")
else B.vX("organic",6+A.o.E(e.length,8),200,0.6)
break
case"bone":E.dE(210+e.length*4,"",80,0.6,0.55,"tri")
E.dE(2400,"",20,0,0.3,v)
break
case"muscle":E.dE(70,"",150,1,0.6,"sine")
break
case"vessel":E.dE(300,"",380,0.4,0.22,v)
B.a7Y("kick",0.3)
break
default:B.vX("organic",2+A.o.E(e.length,6),200,0.4)}},
czC(d){this.m(new B.dEq(this,d))},
aXS(){var w,v,u,t,s,r,q,p=this,o=C.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(p.axC(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.L(0,s.a)}q=C.C(o,o.$ti.k("co.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aA(w)]
p.p4=""},
bUD(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dEg(u,w,d))
v=x.t
B.BC("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a4M(1100,new B.dEh(u))
return}if(d==null){if(u.cx!=null)u.ah2(null)
return}u.ah2(d)},
bYk(d,e){var w,v=this,u=null,t=C.m(18),s=C.I(A.bX.j(0.5),A.q,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.f0X,u,u,u)}else if(d==null||e==null)w=D.feN
else{w=x.p
w=C.B(C.a([C.E(C.w(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hF,u,u,u),A.cS,C.d(e.b,u,u,u,u,u,u,F.Du,u,u,u)],w),A.F,u,A.e,A.P,0,A.p),1),C.aH(u,u,u,u,D.bMj,u,u,u,new B.dEi(v),u,u,u,u,"Back to the whole body",A.cc)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.W2,u,s,t,u,u,A.n),u,u,u,u,I.ahr,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dod.h(0,g)
i.aya()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d6z
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(i.axC(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.mD,h,h,h,new B.dEx(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bH:C.DL(h,A.qj,q)}else q=A.kE
q=C.w(C.a([C.E(q,1),new C.D(F.Yo,i.bYk(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cZI[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dA(l,n,new B.dEy(i,o),o.c,A.bX,h))}p=C.a([new B.eR(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.K)(w),++s){k=w[s]
n.push(new B.dA(k,k===i.cx,new B.dEz(i,k),h,A.aM,h))}p.push(new B.eR(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hE(A.c9,""+A.k.V(n)+" beats/min","Heart rate",180,40,new B.dEA(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.F7(D.atU[j],i.CW===j,new B.dEB(i,j),!1,h))
p.push(new B.eR(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dA("Spin",n,new B.dEC(i),D.akB,A.aP,h),new B.fi(A.k6,"Reset view",new B.dED(i),A.c,h),new B.dA(l,m,new B.dEE(i),A.Gm,A.aM,h)],v)
if(t.t(0,"organ"))v.push(new B.dA("Heartbeat sound",i.k4,new B.dEF(i),A.o5,A.c9,h))
p.push(new B.eR(v,h,h))
return B.jI(A.bX,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.w(p,A.m,h,A.e,A.P,0,A.p))}}
B.aKE.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.aKF.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bul()}}
B.c05.prototype={
kC(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aK(e,"</script","<\\/script")
v=$.hks
$.hks=v+1
u="ngmy-body-viewer-"+v
$.yx()
$.qe().pU(u,new B.c06(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fL(v,"message",new B.c07(t),!1,x.gA)
t.b=u},
eZ(d,e){var w,v
try{w=this.c
if(w!=null){w=C.byE(w.contentWindow)
if(w!=null)J.fRX(w,e,"*")}}catch(v){}}}
B.xZ.prototype={}
B.Cc.prototype={}
B.nm.prototype={}
B.bab.prototype={}
B.U7.prototype={
T(){var w=x.N,v=x.y,u=x.S
return new B.aCd(C.T(w,x.a2),C.a([],x.cB),C.T(w,v),C.T(w,v),C.T(w,u),A.av,A.J,A.J,C.aX(u),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCd.prototype={
a_(){var w=this
w.a1()
w.lg()
w.ac3()
$.aW.x1$.push(new B.dGS(w))},
ac3(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ac3=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$ac3)
case 6:q=e.ta("ngmy_circuit_passed_v1")
r=q==null?A.T:q
if(s.c!=null)s.m(new B.dGw(s,r))
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
return C.i($async$ac3,v)},
acn(d){return this.c15(d)},
c15(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$acn=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.L(0,d)
u=3
w=6
return C.b(C.az(),$async$acn)
case 6:r=f
q=s.cx
p=C.a3(q).k("jO<co.E,n>")
q=C.C(new C.jO(q,new B.dGz(),p),p.k("J.E"))
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
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$acn,v)},
awk(d,e,f,g){var w="c"+this.y++,v=new B.Cc(w,e,f,g)
this.d.n(0,w,v)
return v},
mA(d,e,f){return this.awk(0,e,f,0)},
abp(d,e){var w
if(D.z_.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new C.u(-36,w))},
tB(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aRO(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fT$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.du(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.e7(m,D.cJV[A.o.E(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tB(p,0)&&n.tB(p,1)
break
case"or":p=q.a
o=n.tB(p,0)||n.tB(p,1)
break
case"xor":p=q.a
o=n.tB(p,0)!==n.tB(p,1)
break
case"nand":p=q.a
o=!(n.tB(p,0)&&n.tB(p,1))
break
case"nor":p=q.a
o=!(n.tB(p,0)||n.tB(p,1))
break
case"not":o=!n.tB(q.a,0)
break
default:o=n.tB(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bNj(){return this.aRO(null)},
lz(d){var w,v,u,t,s,r,q,p,o,n=this
n.bNj()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a3(w).k("bc<2>")).gae(0),v=new C.f_(w,new B.dGT()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.fT$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fT$)
o=s+1
E.dE(520+90*A.o.E(s,4),"",200,0,0.25,"square")
s=o}}},
awl(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
m2(d,e){var w=this.x
return new C.u(d*w.a,e*w.b)},
asy(d){var w=this
if(w.x.A(0,A.av)){$.aW.x1$.push(new B.dGu(w,d))
return}w.m(new B.dGv(w,d))},
cvp(d){this.m(new B.dGA(this,d,$.bDt()[d]))},
c5H(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bDt()[a0]
v=d.d
u=C.a3(v).k("bc<2>")
t=u.k("a_<J.E>")
s=t.k("J.E")
r=C.C(new C.a_(new C.bc(v,u),new B.dGp(),t),s)
A.d.b0(r,new B.dGq())
q=C.C(new C.a_(new C.bc(v,u),new B.dGr(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dGs(d,w))
return}u=d.r
p=C.dO(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dz(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.h1(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aRO(0)
h=m.h(0,A.d.gI(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jH(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aH(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.m(new B.dGt(d,o,a0))},
ax8(d){var w,v,u,t,s=this.d,r=C.a3(s).k("bc<2>")
s=C.C(new C.bc(s,r),r.k("J.E"))
r=C.U(s).k("dz<1>")
s=new C.dz(s,r)
s=new C.bQ(s,s.gM(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cec(d){var w,v,u,t,s,r=this.d,q=C.a3(r).k("bc<2>")
r=C.C(new C.bc(r,q),q.k("J.E"))
q=C.U(r).k("dz<1>")
r=new C.dz(r,q)
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
bYd(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.z_.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.abp(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.z(p,o)
s=l}}}return t},
bMd(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.abp(p,o)
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
c5J(d){var w,v,u,t=this,s=t.ax8(d)
if(s!=null){w=t.d.h(0,s)
w.toString
C.eU()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
E.dE(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new B.dGB())
return}u=t.bMd(d)
if(u!=null)t.m(new B.dGC(t,u))
else t.m(new B.dGD(t))},
av8(d){return this.c05(d)},
c05(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$av8=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.ax8(d)
if(s==null){w=1
break}C.jj()
t.m(new B.dGy(t,s))
case 1:return C.h(u,v)}})
return C.i($async$av8,v)},
bz6(d){if(this.x.A(0,A.av))return
this.m(new B.dGo(this,d,A.cG))
C.eU()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bDt()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.X(i.ax?A.o5:O.rk,A.ad,h,h,h,21),h,h,h,new B.dGM(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=A.cn.j(0.14)
r=C.I(A.cn.j(0.5),A.q,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.f07,h,h,h),C.d(w.b,h,h,h,h,h,h,D.f8l,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.D(A.lP,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.b2:A.f6,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.B(C.a([C.E(C.w(q,A.F,h,A.e,A.j,0,A.p),1),C.bG(D.fpP,i.gc5G(),C.bn(A.cn,h,h,h,h,h,h,h,h,h,h,A.cc))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,Y.Mb,D.brW,h,h,1/0))}u.push(C.E(C.cq(new B.dGN(i)),1))
if(f!=null){t=C.m(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.z_.h(0,r).a+": "+D.z_.h(0,r).e,h,h,h,h,h,h,A.rR,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,A9.ah9,A.bR,h,h,1/0))}u=C.w(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.z_.gdO(D.z_),s=s.gae(s);s.C();){r=s.gR(s)
q=new C.aT(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.ay(o.j(0.5),1,A.q,-1)
t.push(C.aC(h,C.p(h,C.w(C.a([C.X(p.b,o,h,h,h,20),A.bD,new C.y(p.a,h,D.aQn,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.P,0,A.p),A.f,h,h,new C.o(n,h,new C.bO(m,m,m,m),new C.bp(q,q,q,q),h,h,A.n),h,h,h,A.fB,Al.M7,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dGO(i,r),h,h,h,h,h,h,!1,A.a7))}s=C.a([],g)
for(l=0;l<4;++l){k=D.daJ[l]
s.push(new B.fi(A.NM,k.b,new B.dGP(i,k),A.cn,h))}s.push(new B.fi(D.y8,"Clear",new B.dGQ(i),A.c9,h))
r=C.a([],g)
for(j=0;q=$.bDt(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.eg:A.ln
o=i.ay
n=i.cx.t(0,j)?A.b2:A.bN
r.push(new B.dA(q.a,o===j,new B.dGR(i,j),p,n,h))}return B.jI(A.cn,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.w(C.a([new B.eR(t,"PARTS",h),new B.eR(s,"TRY",h),new B.eR(r,"TASKS",h)],g),A.m,h,A.e,A.P,0,A.p))}}
B.bau.prototype={
a4(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.abX.gp(0)
a7.aZ(new C.a9(0,0,0+a5,0+a6),w)
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
g=a5.abp(j,m.c)
f=q.h(0,l)===!0
l=$.W()
e=C.a([],p)
d=new C.aO(l.r,A.ao,a4,a4,e)
e.push(new C.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.pC(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=9
l.r=A.bN.j(0.28).gp(0)
l.z=G.mH
s=l.H()
l=d.gbL().a.snapshot()
w.drawPath((d.e=new C.cC(l)).a,s)
s.delete()}l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=3.2
l.d=A.bS
l.r=(f?A.dQ:A.br).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new C.cC(d.gbL().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ad(0,D.I7)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.aO($.W().r,A.ao,a4,a4,C.a([],p))
w=a3.b
p.F(new C.b5(a6,w))
r=g.b
p.F(new C.pC(a6+a0,w,a5-a0,r,a5,r))
r=C.N()
r.b=A.ae
r.c=3
r.r=A.ad.gp(0)
a7.aQ(p,r)}for(a5=new C.du(o,o.r,o.e);a5.C();)this.c5I(a7,a5.d)},
c5I(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.z_.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.cg(a0.c,64,64)
s=C.bx(t,A.l9)
r=w.cy===v
q=s.eT(A.cz)
$.W()
p=C.N()
p.r=A.w.j(0.55).gp(0)
p.z=A.lv
d.aD(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.N()
p.saq(new C.bT(A.A,0.5,A.x,g,0,C.a([e.c.j(0.6),A.K],x.O),g,g).aw(0,C.bU(a0.c,52)))
d.af(q,52,p)}q=s.eT(A.cJ)
p=C.N()
o=e.c
p.r=C.aq(o,A.w,0.65).gp(0)
d.aD(q,p)
n=u?0.35:0
q=C.N()
p=C.aq(o,A.c,0.1+n)
p.toString
m=C.aq(o,A.w,u?0.2:0.45)
m.toString
q.saq(new C.a8(A.b_,A.b4,A.x,C.a([p,m],x.O),g,g).aw(0,t))
d.aD(s,q)
q=C.N()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aD(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.NT:D.bGa}else l=e.b
k=B.fXm(C.jH(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aC(0,new C.u(p/2,q.gbd(q)/2)))
j=B.fXm(e.a,10.5,A.c,g,g,A.H)
j.a4(d,a0.c.ad(0,new C.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.fXm(f,9,u?A.dQ:A.c0,g,g,A.u)
i.a4(d,a0.c.ad(0,new C.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aYq(d,w.abp(a0,h),o)
this.aYq(d,a0.c.ad(0,D.I7),o)},
aYq(d,e,f){var w
$.W()
w=C.N()
w.r=D.abX.gp(0)
d.af(e,8.5,w)
w=C.N()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.af(e,8.5,w)
w=C.N()
w.r=A.c.gp(0)
d.af(e,3.2,w)},
av(d){return!0}}
B.aKK.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bwp.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bur()}}
B.N9.prototype={
T(){return new B.aCu(C.mA(0,null,null))}}
B.Kd.prototype={
a5(){return"_UnfoldStyle."+this.b}}
B.Ar.prototype={}
B.aCu.prototype={
c5N(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.m(new B.dMH(w,e))},
c__(){var w=this
w.e.q()
w.e=C.mA(w.f,null,null)
w.m(new B.dMG(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.ok(t,C.c7(v,A.bZ,t?new B.bqs(w.e,w.gc5M(w),new B.dMI(d),v):new B.aGK(u,new C.cx(u.b,x.gj)),v,!1,!1,v,!1),new B.dMJ(w,u),x.C)}}
B.bs0.prototype={}
B.bqs.prototype={
aYr(d,e){var w=null
return new C.D(I.YP,C.w(C.a([C.d(d,w,w,w,w,w,w,D.f0H,w,w,w),A.bD,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.B(C.a([C.aH(v,v,v,v,S.nn,v,v,v,w.e,v,v,v,v,v,v),A.rM,D.bxM],u),A.m,v,A.e,A.j,0,v,v),s=w.aYr("STUDIOS","Play, make things, and keep what you make")
$.bDu()
return C.bm(!0,C.w(C.a([new C.D(D.bwP,t,v),C.E(C.vv(0,v,A.r,w.c,A.y,v,v,v,v,v,!1,v,A.ag,!1,C.a([new C.m8(s,v),new C.nP(A.hO,C.OJ(new C.on(new B.eXN(d),22,!0,!0,!0,0,C.rV(),v),D.aOk),v),new C.m8(w.aYr("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nP(D.bs2,C.OJ(new C.on(new B.eXO(w),6,!0,!0,!0,0,C.rV(),v),D.aOk),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)}}
B.aeA.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.aq(F.n7,p,0.3)
m.toString
w=x.O
m=C.a([m,D.aeI],w)
v=C.I(p.j(0.6),A.q,1.2)
u=x.V
t=C.a([new C.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.aq(p,A.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ac(0,A.G,p.j(0.5),A.J,12)],u)
return C.aF(!1,A.a1,!0,r,C.aL(!1,o,!0,C.eF(C.w(C.a([C.p(r,C.X(q.c,A.c,r,r,r,24),A.f,r,r,new C.o(r,r,r,r,u,new C.a8(A.ax,A.aC,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.N,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cS,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b9,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a8(A.ax,A.aC,A.x,m,r,r),A.n),r,A.FC,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ah)}}
B.ads.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.aq(F.n7,A.d.gI(i),0.24)
f.toString
w=x.O
f=C.a([f,D.aeI],w)
v=C.I(A.d.gI(i).j(0.35),A.q,1)
u=x.V
t=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cz,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aT(6,6)
m=C.a([A.d.gI(i),A.d.gal(i)],w)
l=C.a([new C.ac(0,A.G,A.w.j(0.45),I.aGX,0)],u)
r.push(C.p(k,C.X(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bp(n,n,n,n),l,new C.a8(A.a3,A.a8,A.x,m,k,k),A.n),k,17,k,new C.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.w(r,A.m,k,A.e,A.P,0,A.p)
u=C.aq(A.d.gI(i),A.d.gal(i),0.4)
u.toString
return C.aF(!1,A.a1,!0,k,C.aL(!1,h,!0,C.eF(C.w(C.a([new C.a7(58,k,w,k),A.R,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.at,C.X(A.BO,A.d.gI(i),k,k,k,18)],s),A.m,k,A.b9,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a8(A.ax,A.aC,A.x,f,k,k),A.n),k,A.FC,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ah)}}
B.PR.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.c0(j,new C.o(h,j,j,C.m(22),j,j,A.n),A.be),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.ac(0,A.G,A.w.j(0.55),A.RX,26),new C.ac(-6,A.G,A.d.gI(i).j(0.1+0.4*t),A.J,30)],s)
q=C.m(22)
p=C.aq(A.d.gI(i),A.c,0.14)
p.toString
o=A.d.gI(i)
n=A.d.gal(i)
i=C.aq(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bZ(0,C.c0(j,new C.o(j,j,j,j,j,new C.a8(A.ax,A.aC,A.x,C.a([p,o,n,i],m),D.dfV,j),A.n),A.be),0,0,0),C.ao(j,C.c0(j,new C.o(j,j,j,j,j,new C.a8(A.b_,A.b4,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.be),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bZ(0,C.b3(j,j,j,new B.brq(i,j),A.av),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.q,1.4)
s=C.a([new C.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.X(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.f2h,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.at,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a5,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.T9)
p.push(C.p(j,j,A.f,j,j,new C.o(A.c.j(0.28),j,j,C.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.D(A.fM,C.B(C.a([s,A.er,C.E(C.w(p,A.F,j,A.e,A.P,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bZ(0,C.dZ(C.el(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.bZ(0,C.dZ(C.c0(j,new C.o(j,j,C.I(A.c.j(0.3),A.q,1.2),i,j,j,A.n),A.be),!0,j),0,0,0))
return new C.a7(w,v,new C.an(A.W,j,A.aa,A.f,C.a([h,C.bZ(0,C.c0(C.bw(q,new C.an(A.W,j,A.aa,A.r,m,j),A.aq),new C.o(j,j,j,u,r,j,A.n),A.be),0,0,0)],l),j),j)}}
B.brq.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.a9(r,-10,s,w)
u=d.a
J.by(u.save())
u.translate(v.gbP().a,v.gbP().b)
d.j4(0,0.35)
t=C.cg(A.J,(w- -10)*1.6,s-r)
$.W()
s=C.N()
s.saq(new C.a8(A.a3,A.a8,A.x,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).aw(0,t))
d.aZ(t,s)
u.restore()},
av(d){return d.b!==this.b}}
B.bqW.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.bfS,D.adU],x.O),t=this.e,s=C.I(A.d.gI(t).j(0.4),A.q,1.2),r=C.a([new C.ac(0,A.G,A.w.j(0.5),A.kb,24)],x.V),q=C.m(22),p=A.d.gI(t)
return new C.a7(this.c,this.d,C.c0(C.bw(q,C.b3(C.av(C.X(A.jq,A.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b9a(p,w),A.av),A.aq),new C.o(w,w,s,v,r,new C.a8(A.ax,A.aC,A.x,u,w,w),A.n),A.be),w)}}
B.b9a.prototype={
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
av(d){return!1}}
B.aGK.prototype={
T(){return new B.aGL(new C.cs(null,x.A),null,null)}}
B.aGL.prototype={
gtZ(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,D.bpr,null,1,null,v)
w.cI(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
gZd(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.fK,null,1,null,v)
w.ff(0,!0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
gawm(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc5K(){var w=this.w
if(w===$){w=C.C(this.a.c.d,x.G)
this.w=w}return w},
gaUX(){var w=this.x
if(w===$){w=C.C(this.a.c.e,x.Z)
this.x=w}return w},
gaVE(){var w=this.y
if(w===$){w=C.C(this.a.c.f,x.N)
this.y=w}return w},
gb66(){var w=this.z
if(w===$){w=C.C(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a1()
var w=this.gtZ()
w.da()
w.dV$.L(0,this.gcv8())},
cv9(){var w,v,u,t,s,r,q,p=this,o=p.gtZ().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gawm().a){case 0:w=D.nq
break
case 1:w=D.uf
break
case 2:w=D.a2a
break
case 3:w=D.nq
break
case 4:w=D.d3B
break
case 5:w=D.uf
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a9F)r=0.09
else r=s===D.a9G?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dE(260+90*v,"",260,1.6,0.18,"tri")
u=D.bYW[v]
B.lf("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.BC("bell",D.c6F,1400,0.35)}}p.ax=o},
q(){this.gtZ().q()
this.gZd().q()
this.bwj()},
afM(){var w=this
w.gtZ().cUf(0,C.dC(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new B.eXt(w))},
cge(){this.gtZ().bY(0)
this.m(new B.eXs(this))},
adn(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$adn=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaVE(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){q=t[r]
l.push(new C.as(new C.bb(q,A.b5,A.aN),$.aw()))}m=C.a([],m)
for(t=u.gb66(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){p=t[r]
m.push(new C.as(new C.bb(p,A.b5,A.aN),$.aw()))}o=C.C(u.gaUX(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.bS(F.n7,null,new B.eXr(u,l,m,o),t,!0,!0,!0,A.lx,!1,!1,x.H),$async$adn)
case 2:l=C.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.S$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$adn,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gawm(),f=i.a.c,e=f.b,d=i.gc5K(),a0=new B.Ar(g,e,f.c,d,i.gaUX(),i.gaVE(),i.gb66())
f=C.aq(A.d.gI(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.X(i.at?A.o5:O.rk,A.ad,h,h,h,21),h,h,h,new B.eXB(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bPL,h,h,h,i.gc5L(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.mD,h,h,h,new B.eXC(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c6(i.gZd(),new B.eXD(i,a0),h),C.cq(new B.eXE(i,a0))],g)
u=i.as
t=u?i.gcgd():i.gciw()
u=u?D.bFq:A.u1
s=C.aq(A.d.gI(d),A.d.gal(d),0.4)
s.toString
t=C.B(C.a([C.aH(h,h,h,h,C.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cc),C.E(C.c6(i.gtZ(),new B.eXF(i,a1,a0),h),1),C.aH(h,h,h,h,D.bM9,h,h,h,new B.eXG(i),h,h,h,h,"Replay",A.cc)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.ab(s,1)
r=C.aq(A.d.gI(d),A.d.gal(d),0.4)
r.toString
s=B.hE(r,u+"x","Speed",2.5,0.4,new B.eXH(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.ddc[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gI(d),A.d.gal(d),0.4)
r.toString
u.push(new B.dA(p.b,o===p.a,new B.eXI(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bZg[q]
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}m=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}l=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}k=A.d.gI(o).A(0,A.d.gI(n))?A.c:A.b0
o=i.w
if(o===$){o=C.C(i.a.c.d,r)
i.w=o}j=new C.ay(k,A.d.gI(o).A(0,A.d.gI(n))?2.5:1,A.q,-1)
d.push(C.aC(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bO(j,j,j,j),h,h,new C.a8(A.ax,A.aC,A.x,n,h,h),A.a6),h,l,h,D.agU,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.eXJ(i,n),h,h,h,h,h,h,!1,A.a7))}return B.jI(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.ew(new C.an(A.W,h,A.b1,A.r,v,h),i.f),e,C.w(C.a([t,s,new B.eR(u,"STYLE",h),new B.eR(d,"THEME",h)],g),A.m,h,A.e,A.P,0,A.p))},
byi(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nq[r]
p=A.k.D((1-A.ew.az(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.nq[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.nq[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=C.dp()
l=n.a
l.$flags&2&&C.aj(l)
l[11]=0.0013
n.k5(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nq[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nq[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nq[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cL(0,r*118,0,f,f,f,new C.kD(q,new C.iG(n,f,A.b_,!0,f,new B.PR(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nq[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gI(w)
v=D.nq[r]
t=v+0.12
e.push(new C.cL(0,r*118-3-2,0,f,f,4,new C.mj(new B.bq4(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.av,f,f),f))}return new C.a7(a2,358,new C.an(A.W,f,A.aa,A.f,e,f),f)},
bOL(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.uf[r]
p=A.pM.az(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.uf[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.uf[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dp()
k=m.a
k.$flags&2&&C.aj(k)
k[11]=0.0011
m.jL(n,n,n,1)
m.fC(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.PR(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dp()
k.fC(3.141592653589793)
k=new C.iG(k,f,A.A,!0,f,new B.bqW(a2,108,w,f),f)}e.push(new C.cL(0,r*130,0,f,f,f,new C.kD(q,new C.iG(m,f,A.A,!0,f,k,f),f),f))}return new C.a7(a2,378,new C.an(A.W,f,A.aa,A.f,e,f),f)},
cA8(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a2a[w]
l.push(A.ct.az(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bZ(0,C.b3(n,n,n,new B.btv(d.d,l,D.avz,m,B.bqr(e,0.4,0.62),f,B.bqr(e,0.45,0.7),n),A.av),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.fXS(g,w)
q=D.avz[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cL(r,s-q*m*p+12,n,n,t,n,new C.kD(o,C.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.fXS(g,w)
r=D.a2a[w]
q=r+0.15
v.push(new C.cL(s,l,n,n,t,n,new C.kD(A.k.D((e-q)/(r+0.25-q),0,1),new C.y(u[w],n,A.TS,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a7(g,m+90,new C.an(A.W,n,A.aa,A.f,v,n),n)},
bEt(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.ct.az(0,B.bqr(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bZ(0,C.av(C.dV(C.b3(f,f,f,new B.bpw(A.d.gI(a1),B.bqr(a3,0,0.2),a4,f),new C.ar(a5*0.95,70)),D.e4h),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dC.az(0,A.k.D((o-0.7)/0.3,0,1))
l=C.dp()
m=l.a
m.$flags&2&&C.aj(m)
m[11]=0.001
l.fC(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jL(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.E(r,1):-1
w.push(new C.z(o,new C.cL(0,0,0,0,f,f,new C.cp(A.A,f,f,new C.kD(k*(0.45+0.55*o),C.dV(new C.iG(l,f,A.A,!0,f,new B.PR(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.u(n*a5*0.34,-o*18)),f),f),f)))}A.d.b0(w,new B.eXk())
A.d.v(a0,new C.M(w,new B.eXl(),x.fR))
return new C.a7(a5,330,new C.an(A.W,f,A.aa,A.f,a0,f),f)},
bDF(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.uf[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.mT.az(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.uf[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.axz[q]
k=C.dp()
k.mN(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jL(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.uf[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cL(0,0,0,0,e,e,new C.cp(A.A,e,e,new C.kD(m,C.dV(new C.iG(k,e,A.A,!0,e,new B.PR(d,92,w,p,j,i,0,g*s,h,e),e),new C.u(0,l)),e),e),e))
l=D.uf[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cL(0,0,0,0,e,e,new C.cp(A.A,e,e,C.dV(new C.mj(new B.b9Q(w,f,q,e),e,new C.ar(r,212),e,e),new C.u(0,D.axz[q])),e),e))}return new C.a7(a4,330,new C.an(A.W,e,A.aa,A.f,a0,e),e)},
bBd(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.u(-b0,-150),new C.u(b0,-40),D.e4l],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nq[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.ct.az(0,p)
q=D.axH[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nq[r]
f=g+0.2
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.nq[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=C.dp()
d=f.a
d.$flags&2&&C.aj(d)
d[11]=0.001
f.mN(l*h+D.d7t[r]*o)
f.fC(l*0.9)
h=0.55+0.45*o
f.jL(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,new C.kD(g,C.dV(new C.iG(f,a3,A.A,!0,a3,new B.PR(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nq[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.axH[r]
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cp(A.A,a3,a3,C.dV(new C.mj(new B.bpy(A.d.gI(w),a2,a3),a3,new C.ar(a4,30),a3,a3),new C.u(0,q+48-4)),a3),a3))}}return new C.a7(b0,330,new C.an(A.W,a3,A.aa,A.f,a6,a3),a3)}}
B.bq4.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.a9(w-v,0,w+v,e.b)
q=C.bx(u,A.he)
$.W()
t=C.N()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=G.mH
d.aD(q,t)
t=C.bx(u,A.he)
q=C.N()
q.r=A.c.j(s).gp(0)
d.aD(t,q)},
av(d){return d.c!==this.c||d.d!==this.d}}
B.bpw.prototype={
a4(d,e){var w,v,u=this.c,t=C.cg(e.ec(A.J),e.b*u,e.a*u)
$.W()
u=C.N()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=Z.HB
d.hS(t,u)
u=C.N()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hS(t,u)
u=t.cv(-14)
v=C.N()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.hS(u,v)},
av(d){return!0}}
B.b9Q.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ec(A.J),f=this.c,e=A.ct.az(0,f)
$.W()
w=C.N()
w.b=A.ae
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gI(u).j(0.6*v).gp(0)
d.af(g,40+e*a0.a*0.42,w)
t=new C.eJ()
t.dw(this.d*17+3)
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
av(d){return!0}}
B.bpy.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ec(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.cg(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.W()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.H()
t.drawOval(C.c_(p),n)
n.delete()}},
av(d){return d.c!==this.c}}
B.btv.prototype={
a4(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.a9(0,d0,0+c5,d0+60)
$.W()
d0=C.N()
w=c1.b
v=x.O
d0.saq(new C.a8(A.b_,A.b4,A.x,C.a([A.d.gI(w).j(0.18),A.K],v),c2,c2).aw(0,d1))
d2.aZ(d1,d0)
d0=C.N()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bF(new C.u(0,c4),new C.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.fXS(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.W()
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.lv
a4=a3.H()
t.drawOval(C.c_(new C.a9(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.a9(d,a1,a3,a1+a0)
a6=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a7=C.aq(A.d.gI(w),A.c,0.1)
a7.toString
a6.saq(new C.a8(A.b_,A.b4,A.x,C.a([a7,A.d.gal(w)],v),c2,c2).aw(0,a5))
a4=a6.H()
t.drawRect(C.c_(a5),a4)
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
a6=a8.gbL().a.snapshot()
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
a2=b0.gbL().a.snapshot()
t.drawPath((b0.e=new C.cC(a2)).a,a4)
a4.delete()
b1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.H()
t.drawRect(C.c_(a5),a4)
a4.delete()
a4=b1.H()
a2=a8.e
t.drawPath((a2==null?a8.e=new C.cC(a8.gbL().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cC(b0.gbL().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bn(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.bx(new C.a9(b7,a7,b7+r,b5),A.he)
$.W()
b9=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.H()
t.drawRRect(C.es(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.a9(d,a1,a3,a1+28)
J.by(t.save())
t.clipRect(C.c_(a5),$.oH()[1],!0)
$.W()
a1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.saq(new C.a8(A.b_,A.b4,A.x,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).aw(0,c0))
a4=a1.H()
t.drawRect(C.c_(c0),a4)
a4.delete()
t.restore()}}},
av(d){return!0}}
B.aMt.prototype={
aT(){this.b_()
this.aY()
this.dL()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdF())
w.b2$=null
w.a2()}}
B.a00.prototype={
a5(){return"_Role."+this.b}}
B.q2.prototype={}
B.qJ.prototype={}
B.Cg.prototype={}
B.YZ.prototype={}
B.aeq.prototype={}
B.a0d.prototype={
gZ(d){return this.d}}
B.Cq.prototype={}
B.abj.prototype={}
B.abA.prototype={}
B.adw.prototype={}
B.bgj.prototype={
a2i(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dE(d,"",e,g,h,f)},
b76(d,e,f){return this.a2i(d,e,f,0,0.55)},
aAX(d,e,f,g){return this.a2i(d,e,f,0,g)},
b77(d,e,f,g){return this.a2i(d,e,f,g,0.55)},
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
w.aX()},
ajp(d,e,f,g){var w="n"+this.ay++,v=new B.qJ(w,e,f,g)
this.a.n(0,w,v)
this.aX()
return v},
B2(d,e,f){return this.ajp(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bq(w.b,new B.dgA(e))
A.d.bq(w.c,new B.dgB(e))
w.aX()},
baW(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mG.h(0,v.b).c===D.wJ)return!1
w=this.b
if(A.d.b4(w,new B.dgx(d,e)))return!1
w.push(new B.Cg(d,e))
this.aX()
return!0},
bYY(d){var w
if(d.b==="beat")return D.c6O[A.o.E(d.d,4)]
w=this.at
switch(A.o.E(d.d,3)){case 1:return 350+w.aA(500)
case 2:return 1400+w.aA(2200)
default:return 450+w.aA(2000)}},
aEp(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.E(w,6)
t=D.axW[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.Cq(u,t,j.ax,90))
w.push(new B.Cq(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new B.a0d(u,new C.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b76(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.E(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.aj()*0.5)
m.toString
v.push(new B.a0d(u,new C.u(o*p,n*p),m,3+w.aj()*4.5,1000+w.aA(700),j.ax))}j.f.push(new B.Cq(u,t,j.ax,120))
j.aAX(120,200,"noise",0.5)
j.b76(261.63*Math.pow(2,([7,12,16,19][w.aA(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.Cq(u,t,j.ax,230))
w.push(new B.Cq(u,t,j.ax+160,160))
w.push(new B.Cq(u,t,j.ax+320,100))
j.b77(180+j.at.aA(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.abj(u,new C.u((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b77(300+w.aA(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new B.abA(u,u.ad(0,new C.u(Math.cos(q),Math.sin(q)).aG(0,260+w.aj()*200)),t,j.ax))
j.a2i(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fJ()
j.a2i(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.adw(u,D.axm[v],t,j.ax))
j.aAX(261.63*Math.pow(2,([0,5,9,12][j.at.aA(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aAX(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c2V[A.o.E(w,3)]
for(k=1;k<=3;++k)j.cqg(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new C.f_(w,new B.dgy(d));v.C();)j.azr(w.gR(0),j.ax+D.cfc[A.o.E(g.d,4)])
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
case"chance":s=j.at.aA(100)<D.cw7[A.o.E(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new C.f_(w,new B.dgz(d));v.C();)j.azr(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.zc(w,0,v-700)},
cqg(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.YZ(e,"~"+d))},
azr(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.aeq(d.a,v,e,w))
u.push(new B.YZ(w,v))},
aHN(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aEp(r)
u.n(0,r,o.ax+o.bYY(s))}}w=o.c
v=C.U(w).k("a_<1>")
q=C.C(new C.a_(w,new B.dgC(o),v),v.k("J.E"))
if(q.length!==0){A.d.bq(w,new B.dgD(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.K)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b3(u,1)
for(u=A.d.gae(v),r=new C.f_(u,new B.dgE(p));r.C();)o.azr(u.gR(0),o.ax)}else o.aEp(u)}}A.d.bq(o.d,new B.dgF(o))
A.d.bq(o.e,new B.dgG(o))
A.d.bq(o.f,new B.dgH(o))
A.d.bq(o.w,new B.dgI(o))
A.d.bq(o.x,new B.dgJ(o))
A.d.bq(o.r,new B.dgK(o))
o.aX()},
v3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new C.u(q.a+o*e,q.b+p*e)
r.b=new C.u(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new C.u(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new C.u(l,o)
if(o>n){p=m.a=new C.u(l,n)
t=m.b=new C.u(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new C.u(-t.a*0.8,t.b)}},
ag(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
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
cLY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.S.aI(0,d,null))
k.a8(0)
for(o=x.j,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=C.t(J.q(v,"k"))
if(!D.mG.ai(0,u))continue
t=C.t(J.q(v,"id"))
m.n(0,t,new B.qJ(t,u,new C.u(C.dR(J.q(v,"x"))*k.cy.a,C.dR(J.q(v,"y"))*k.cy.b),A.k.N(C.dR(J.q(v,"p")))))
s=C.c8(C.aK(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.ai(0,q)&&m.ai(0,p))n.push(new B.Cg(q,p))}k.aX()
return!0}catch(l){return!1}},
cP_(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new B.qJ(n,r,new C.u(q*p.a,o*p.b),s))
l.aX()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.baW(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
B.FI.prototype={}
B.VB.prototype={
T(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aDK(new B.bgj(C.T(w,x.f3),v,u,t,s,r,q,p,o,C.T(w,n),C.T(w,n),C.T(w,n),C.T(w,n),A.cG,A.K,A.av,$.aw()),A.bx,A.J,A.J,A.T,null,null)}}
B.aDK.prototype={
abX(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$abX=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.az(),$async$abX)
case 6:q=n.jK(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new B.emq(s))
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
return C.i($async$abX,v)},
a8W(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a8W=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new B.emf(s))
u=3
w=6
return C.b(C.az(),$async$a8W)
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
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$a8W,v)},
bKr(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a3(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cK(0,0,new B.emh())+"|"+A.d.cK(o,0,new B.emi())
if(v===p.ch)return p.CW
u=new B.eml()
t=x.s
s=C.a([],t)
r=new B.emm(p,s,u)
for(n=new C.bc(n,w).gae(0),w=new C.f_(n,new B.emj());w.C();){q=n.gR(0)
if(!A.d.b4(o,new B.emk(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.db(s,0,C.dG(5,"count",x.S),x.N).dK(0)},
a_(){var w,v=this
v.a1()
v.abX()
v.d.db=v.ay
w=v.qy(new B.emQ(v))
w.iX(0)
v.e!==$&&C.aP()
v.e=w},
q(){var w=this,v=w.as
if(v!=null)v.a6(0)
v=w.e
v===$&&C.c()
v.q()
v=w.d
v.S$=$.aw()
v.P$=0
w.bvj()},
abt(d){return this.bYq(d)},
bYq(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$abt=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.az(),$async$abt)
case 6:q=m.aU(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cLY(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aW6(A.d.gI(D.awP))
if(s.c!=null)s.m(new B.emp())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$abt,v)},
aW6(d){this.d.cP_(0,d.c,d.d)
this.E7()},
E7(){var w=this.as
if(w!=null)w.a6(0)
this.as=C.cM(A.lO,new B.emb(this))},
awn(d){var w,v,u,t,s=this.d.a,r=C.a3(s).k("bc<2>")
s=C.C(new C.bc(s,r),r.k("J.E"))
r=C.U(s).k("dz<1>")
s=new C.dz(s,r)
s=new C.bQ(s,s.gM(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ced(d){var w,v,u,t,s,r=this.d.a,q=C.a3(r).k("bc<2>")
r=C.C(new C.bc(r,q),q.k("J.E"))
q=C.U(r).k("dz<1>")
r=new C.dz(r,q)
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
bYe(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mG.h(0,r.b).c===D.wJ)continue
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
c5Q(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.hkt(new C.u(n.a+36,n.b+0),new C.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cxT(d){var w,v,u,t,s,r,q=this,p=q.awn(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eU()
u=v.b
if(u==="button"){w.aEp(p)
return}if(q.r)return
t=D.mG.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qC)s=6
else s=1
v.d=A.o.E(v.d+1,s)
w.aX()
q.E7()
return}if(q.r)return
r=q.c5Q(d)
if(r!=null){w=q.d
A.d.cw(w.b,r)
w.aX()
q.E7()}},
cfw(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.ced(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.awn(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aC(0,d)}},
cfx(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aX()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.u(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aX()}}},
b08(){var w,v,u=this
if(u.z!=null){w=u.bYe(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.baW(v,w)}else v=!1
if(v){C.jQ()
u.E7()}u.z=null
u.d.aX()}else if(u.x!=null){if(u.at)u.E7()
u.x=null}},
ac9(d){return this.c06(d)},
c06(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$ac9=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.awn(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.jj()
p=t.c
p.toString
w=3
return C.b(C.bS(F.n7,null,new B.ems(q),p,!0,!0,!1,A.lx,!1,!1,x.y),$async$ac9)
case 3:if(f===!0){r.W(0,s)
t.E7()}case 1:return C.h(u,v)}})
return C.i($async$ac9,v)},
c5O(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.B2(0,d,new C.u(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
C.eU()
this.E7()},
afU(){var w=0,v=C.j(x.H),u=this,t,s
var $async$afU=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.bS(F.n7,null,new B.emu(),s,!0,!0,!0,A.lx,!1,!1,x.es),$async$afU)
case 2:t=e
if(t!=null)u.aW6(t)
return C.h(null,v)}})
return C.i($async$afU,v)},
ado(d){var w=0,v=C.j(x.H),u=this,t
var $async$ado=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cb(null,null,!0,null,new B.eme(),t,null,!0,!0,x.y),$async$ado)
case 2:if(f===!0){u.d.a8(0)
u.E7()}return C.h(null,v)}})
return C.i($async$ado,v)},
B(d){var w=this,v=null,u=C.a([C.ahO(w.r?new C.bI(A.a3,v,v,new C.D(A.FD,C.hj(D.bK9,D.fiL,new B.emO(w),v),v),v):w.c5R(),A.bc,A.iE),C.E(C.cq(new B.emP(w)),1)],x.p)
if(!w.r)u.push(w.csJ())
return C.c7(v,A.bZ,C.bm(!0,C.w(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bG9(){var w=null,v=new B.emg(),u=A.w.j(0.7),t=C.m(26),s=C.I(A.bv.j(0.5),A.q,1)
return C.bZ(0,C.el(C.av(C.p(w,C.c9(C.w(C.a([D.ftN,A.at,D.fBh,A.aB,v.$4(A.oT,A.bv,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(A_.BM,A.cn,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.lm,A.bX,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.akO,A.bN,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fAB,new C.bI(A.a8,w,w,C.bK(!1,D.fqZ,w,w,!0,w,w,this.gbG2(),w,w),w)],x.p),A.F,w,A.e,A.P,0,A.p),A.r,w,A.y,w,w,w,w,A.ag),A.f,w,A.Vp,new C.o(F.n7,w,s,t,w,w,A.n),w,w,w,A.fC,A9.ai9,w,w,w),w,w,w),u,!0),0,0,0)},
c5R(){var w=this,v=null,u=C.aH(v,v,v,v,S.nn,v,v,v,new B.emA(w),v,v,v,v,v,v),t=w.a8o(A.NB,"How it works",new B.emB(w),!0),s=w.ay?A.o5:O.rk
return new C.D(D.bw4,C.B(C.a([u,D.bxy,t,w.a8o(s,"Sound",new B.emC(w),!0),w.a8o(A.dX,"Ideas",w.gcje(),!0),w.a8o(D.y8,"Clear",w.gc5P(w),!0),w.aN3(A.iI,"Show",new B.emD(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aN3(d,e,f,g,h){var w=null,v=h?A.bv:A.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.D(Ae.vw,C.aF(!1,A.a1,!0,u,C.aL(!1,t,!0,C.ht(new C.D(new C.Q(8,8,8,8),C.B(s,A.m,w,A.e,A.P,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ah),w)},
a8o(d,e,f,g){return this.aN3(d,e,f,g,!1)},
csJ(){var w=null,v=new B.emw(this),u=A.c.j(0.08)
return C.p(w,C.c9(C.B(C.a([v.$2("START",D.wJ),v.$2("CHANGE",D.DP),v.$2("REACT",D.qC)],x.p),A.F,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),A.f,w,w,new C.o(F.AD,w,new C.bO(new C.ay(u,1,A.q,-1),A.Y,A.Y,A.Y),w,w,w,A.n),w,w,w,w,D.brl,w,w,w)},
csK(d){var w,v,u,t,s=null,r=D.mG.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.q,1)
return new C.D(A.fB,C.aC(s,C.p(s,C.w(C.a([C.X(r.b,v,s,s,s,22),A.cS,C.d(r.a,s,1,A.a2,s,s,s,D.aQn,s,s,s)],x.p),A.m,s,A.e,A.P,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a8(A.b_,A.b4,A.x,u,s,s),A.n),s,s,s,s,A.hN,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.emv(this,d),s,s,s,s,s,s,!1,A.a7),s)}}
B.bgk.prototype={
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
b8.aZ(new C.a9(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){l=w[m]
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
d.push(new C.pC(h+a1,i,f-a1,g,f,g))
a2=D.mG.h(0,k.b).d
a3=D.mG.h(0,j.b).d
e=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=3
e.d=A.bS
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.rv(new C.u(h,i),new C.u(f,g))
e.saq(new C.a8(A.a3,A.a8,A.x,d,b4,b4).aw(0,new C.a9(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbL().a.snapshot()
b7.drawPath((a0.e=new C.cC(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.hkt(new C.u(i.a+36,i.b+0),new C.u(h.a-36,h.b),a5)
$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gp(0)
h.z=G.mH
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
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ad(0,D.I7)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.aO($.W().r,A.ao,b4,b4,C.a([],o))
o=a8.b
a0.F(new C.b5(t,o))
i=a9.b
a0.F(new C.pC(t+a1,o,w-a1,i,w,i))
i=C.N()
i.b=A.ae
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aQ(a0,i)
i=C.N()
i.r=A.c.gp(0)
b8.af(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b0=w[m]
o=b0.c
v=A.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dV.az(0,v)
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
h=C.lg(o,i,A.dV.az(0,v))
h.toString
i=C.lg(o,i,A.dV.az(0,A.k.D(v-0.35,0,1)))
i.toString
$.W()
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.c=5
o.d=A.bS
g=b1.c
f=C.a([g.j(0),g],p)
e=C.rv(i,h)
o.saq(new C.a8(A.a3,A.a8,A.x,f,b4,b4).aw(0,new C.a9(e.a-4,e.b-4,e.c+4,e.d+4)))
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
i.z=A.jt
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
i.z=A.jt
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
i.saq(new C.bT(P.pp,0.5,A.x,b4,0,C.a([A.c,h],p),b4,b4).aw(0,C.bU(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.K)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.bgl(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a4(b8,new C.u(t.a-o/2,t.b-(40+60*v+p.gbd(p)/2)))}for(b5=new C.du(n,n.r,n.e);b5.C();)b3.cf4(b8,b5.d,b6)
b7.restore()},
cf4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mG.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.cg(e.c,64,64)
t=C.bx(u,A.iq)
s=t.eT(A.cz)
$.W()
r=C.N()
r.r=A.w.j(0.55).gp(0)
r.z=A.lv
d.aD(s,r)
if(v>0){s=t.cv(6)
r=C.N()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.z1
d.aD(s,r)}s=t.eT(A.cJ)
r=C.N()
q=h.d
r.r=C.aq(q,A.w,0.65).gp(0)
d.aD(s,r)
r=C.N()
s=C.aq(q,A.c,0.18+0.4*v)
s.toString
p=C.aq(q,A.w,0.35)
p.toString
r.saq(new C.a8(A.b_,A.b4,A.x,C.a([s,p],x.O),j,j).aw(0,u))
d.aD(t,r)
r=C.N()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aD(t,r)
r=h.b
p=e.c
o=B.bgl(C.jH(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aC(0,new C.u(s/2,r.gbd(r)/2)))
n=B.bgl(h.a,11,A.c,j,j,A.H)
n.a4(d,e.c.ad(0,new C.u(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.E(e.d,r)]
else m=i==="pop"?D.axm[A.o.E(e.d,6)]:j
h=h.c
if(h===D.qC){s=e.c.ad(0,new C.u(0,62))
r=C.N()
r.r=D.axW[A.o.E(e.d,6)].gp(0)
d.af(s,5,r)}else if(m!=null){l=B.bgl(m,9.5,A.aA,j,j,A.O)
l.a4(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bgl(m,9.5,A.aA,j,j,A.O)
l.a4(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wJ)k.b0Y(d,e.c.aC(0,D.I7),q)
k.b0Y(d,e.c.ad(0,D.I7),q)},
b0Y(d,e,f){var w
$.W()
w=C.N()
w.r=A.bZ.gp(0)
d.af(e,9,w)
w=C.N()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.af(e,9,w)
w=C.N()
w.r=A.c.gp(0)
d.af(e,3.5,w)},
av(d){return!0}}
B.aLA.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bkU.prototype={}
B.PI.prototype={
gZ(d){return this.d}}
B.VQ.prototype={
T(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.bjY(new C.cs(null,x.A),w,v,A.cG,A.bx,D.EP,null,null)}}
B.bjY.prototype={
aZG(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bn((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.awd[A.o.E(v,5)]+12*A.o.an(v,5)+12
switch(t.z){case"glow":B.lf("synth",u,420,0.3)
break
case"rainbow":B.lf("bell",u,700,0.35)
break
case"stars":B.lf("pluck",u+12,400,0.4)
break
case"sparks":E.dE(2400+t.r.aA(2000),"",60,0,0.18,"noise")
break
default:E.dE(110+t.r.aA(60),"",140,0,0.22,"noise")}},
c8Q(d){return this.aZG(d,!1)},
a_(){var w,v=this
v.a1()
w=v.qy(new B.eyv(v))
w.iX(0)
v.w!==$&&C.aP()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.bvs()},
gb0s(){var w=this.Q
return w<0?new H.mP(1,A.k.E(this.y*0.18,360),0.85,1).iE():D.QF[w]},
aRt(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb0s(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=C.aq(A.bN,A.ay,v.aj())
m.toString
j.push(new B.PI(new C.u(u+(q-0.5)*p,t),new C.u((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.aj()*0.4),l.y,700+v.aA(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.aj()*200
n=C.aq(k,A.c,v.aj()*0.6)
n.toString
j.push(new B.PI(d,new C.u(q*o,p*o),n,1.5+v.aj()*3,l.y,600+v.aA(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.aj()*40
j.push(new B.PI(d,new C.u(q*o,p*o),k,1.2+v.aj()*1.8,l.y,500))}}},
aYt(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb0s()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.bkU(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aRt(e)
r.aZG(e,!0)
r.m(new B.ey6())},
aYs(){this.ax=null
this.m(new B.ey5())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.mD,n,n,n,new B.eyf(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.brl(k,o.f,o.y,o.at,n),A.av)],m)
if(!o.ay&&k.length===0)j.push(D.b54)
k=C.aC(A.c7,new C.an(A.W,n,A.b1,A.r,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eyg(o),new B.eyh(o),new B.eyl(o),n,n,n,n,n,n,n,n,n,new B.eym(o),new B.eyn(o),n,n,n,!1,A.a7)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cU9[w]
j.push(new B.dA(v.b,o.z===v.a,new B.eyo(o,v),v.c,A.bX,n))}u=C.a([new B.F7(A.c,o.Q<0,new B.eyp(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.F7(D.QF[t],o.Q===t,new B.eyq(o,t),!1,n))
s=o.as
s=B.hE(A.bX,A.o.u(A.k.V(s)),"Size",36,4,new B.eyr(o),s)
r=o.ch
q=r?A.o5:O.rk
q=C.a([new B.dA("Sound",r,new B.eys(o),q,A.bX,n),new B.fi(A.rj,"Undo",new B.eyi(o),A.c,n),new B.fi(D.y8,"Clear",new B.eyj(o),A.c9,n)],m)
for(w=0;w<4;++w){p=D.d94[w]
q.push(new B.F7(p,o.at.A(0,p),new B.eyk(o,p),!1,n))}return B.jI(A.bX,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.ew(k,o.d),"SPARK PAINTER",C.w(C.a([new B.eR(j,"BRUSH",n),new B.eR(u,"COLOUR",n),s,new B.eR(q,n,n)],m),A.m,n,A.e,A.P,0,A.p))}}
B.brl.prototype={
a4(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.W()
w=C.N()
v=a4.e
w.r=v.gp(v)
a6.aZ(new C.a9(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.W()
o=C.a([],t)
n=new C.aO(p.r,A.ao,a5,a5,o)
o.push(new C.b5(A.d.gI(q).a,A.d.gI(q).b))
for(p=C.U(q),m=p.k("nl<1>"),l=new C.nl(q,1,a5,m),l.zI(q,1,a5,p.c),l=new C.bQ(l,l.gM(0),m.k("bQ<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bB(k)
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
q.e=A.fE
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new C.hz(A.G,p)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cC(n.gbL().a.snapshot()):q).a,j)
j.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bS
q.e=A.fE
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cC(n.gbL().a.snapshot()):q).a,j)
j.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bS
q.e=A.fE
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cC(n.gbL().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.mP(1,A.o.E(i*5,360),0.85,1).iE()
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
a1=k?new H.mP(1,A.o.E(a3*23,360),0.7,1).iE():l
a4.c5S(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=S.R8
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c5S(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.W(),o=C.a([],x.v),n=new C.aO(p.r,A.ao,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new C.b5(r,q)
o.push(r)
q=n.f
if(q!=null)r.bB(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.ap(r,q)
o.push(r)
q=n.f
if(q!=null)r.bB(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.F(new C.bE())
$.W()
p=C.N()
p.r=h.j(0.4).gp(0)
p.z=A.jt
d.aQ(n,p)
p=C.N()
p.r=h.gp(0)
d.aQ(n,p)},
av(d){return!0}}
B.W1.prototype={
T(){return new B.aE_(new C.cs(null,x.A),new C.as(new C.bb("NGMY",A.b5,A.aN),$.aw()),null,null)}}
B.aE_.prototype={
gIJ(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.tE,null,1,null,v)
w.cI(0)
v.e!==$&&C.bL()
v.e=w
u=w}return u},
a_(){this.a1()
var w=this.gIJ()
w.da()
w.dV$.L(0,this.gbXm())},
bXn(){var w,v,u,t,s,r,q,p=this,o=p.gIJ().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.m4:new C.m9(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dE(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dE(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.lf(s,D.ava[A.o.E(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIJ().q()
var w=this.f
w.S$=$.aw()
w.P$=0
this.bvy()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.m9(h)
w=C.C(h,C.a3(h).k("J.E"))}v=D.QF[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.mD,j,j,j,new B.eF4(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.axn[k.y]
s=C.bw(t,C.c0(C.av(C.c6(k.gIJ(),new B.eF5(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a8(A.ax,A.aC,A.x,s,j,j),A.n),A.be),A.aq)
t=A.c.j(0.06)
t=C.aM(j,A.T,!1,j,!0,A.r,j,C.aN(),i,j,j,j,j,j,2,C.bs(j,new C.b4(4,C.m(14),A.Y),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.Ds,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.eF6(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.hs,!0,A.a4,j,A.an,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cvU[r]
i.push(new B.dA(q.b,k.r===q.a,new B.eF7(k,q),j,A.bN,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.F7(D.QF[o],k.w===o,new B.eF8(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.o5:O.rk
l=C.a([new B.dA(m,n,new B.eF9(k),l,A.bN,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.F7(D.axn[o][0],k.y===o,new B.eFa(k,o),!1,j))
n.push(A.bp)
n.push(new B.fi(A.mz,"Replay",new B.eFb(k),A.c,j))
m=k.x
return B.jI(A.bN,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.D(A.bB,new C.ew(s,k.d),j),"TITLE ANIMATOR",C.w(C.a([t,A.N,new B.eR(i,"MOVE",j),new B.eR(p,"COLOUR",j),new B.eR(l,"SOUND",j),new B.eR(n,"BACK",j),B.hE(A.bN,A.o.u(A.k.V(m)),"Size",96,28,new B.eFc(k),m)],h),A.m,j,A.e,A.P,0,A.p))},
c_9(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cR(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bn(g*1.6*f)?1:0
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
case"glitch":u=A.o.E(A.k.bn(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b8
else w=u?A.bX:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.mT.az(0,t)
w=h
m=t
break
case"rainbow":w=new H.mP(1,A.k.E(g*360+e*40,360),0.75,1).iE()
A.d.a8(p)
p.push(new C.cR(w.j(0.7),A.J,18))
break
default:w=h}return C.de(C.dV(C.ed(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.u(l,o)),m)}}
B.aLJ.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.aLP.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.a_v.prototype={}
B.Vy.prototype={
T(){var w=C.a([],x.aS)
return new B.aDC(new C.cs(null,x.A),w,A.cG,A.av,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDC.prototype={
gadp(){var w=this.r
return new C.u(w.a/2,w.b/2)},
b1I(){return new H.mP(1,this.f.aj()*360,0.6,1).iE()},
aqQ(d,e,f,g){var w=this,v=w.gadp().ad(0,new C.u(Math.cos(e),Math.sin(e)).aG(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.a_v(v,new C.u(-t,s).aG(0,r).aG(0,u*f),w.Q*(0.6+w.f.aj()*0.9),w.b1I(),C.a([],x.g)))},
bFu(d,e,f){return this.aqQ(d,e,f,!1)},
bFt(d,e){return this.aqQ(d,e,1,!1)},
cv3(){var w,v,u,t=this
A.d.a8(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bFt(40+w*u/5,v.aj()*3.141592653589793*2)},
bGo(){var w=this.r
this.bFu(Math.min(w.a,w.b)*0.42,this.f.aj()*3.141592653589793*2,0.45)},
a_(){this.a1()
this.lg()},
lz(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.av))return
w=a2.e
v=w.length
if(v===0&&a2.fT$<300)return
u=a2.gadp()
t=a3*a2.x/4
for(s=u.a,r=u.b,q=0;q<4;++q,v=o)for(p=0;o=w.length,p<o;w.length===v||(0,C.K)(w),++p){n=w[p]
o=n.a
m=s-o.a
o=r-o.b
l=Math.max(m*m+o*o,400)
k=Math.sqrt(l)
j=1e6*a2.w/l
i=new C.u(m/k*j,o/k*j)
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
i=new C.u(i.a+f/m*d*a0,i.b+j/m*d*a0)}o=n.b
m=o.a+i.a*t
o=o.b+i.b*t
n.b=new C.u(m,o)
j=n.a
n.a=new C.u(j.a+m*t,j.b+o*t)}for(p=0;o=w.length,p<o;w.length===v||(0,C.K)(w),++p){n=w[p]
if(a2.z){o=n.e
if(o.length!==0){m=A.d.gal(o)
j=n.a
f=m.a-j.a
j=m.b-j.b
j=Math.sqrt(f*f+j*j)>3
m=j}else m=!0
if(m)o.push(n.a)
if(o.length>260)A.d.cw(o,0)}else A.d.a8(n.e)}for(p=0;p<w.length;w.length===o||(0,C.K)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lV(v.a-s)!==J.lV(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fT$-n.r>250){n.r=a2.fT$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
B.lf("bell",D.ava[A.k.V((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a_(w,new B.eiX(u),C.U(w).k("a_<1>")).gM(0)>0&&a2.ax)E.dE(70,"",300,0.6,0.8,"sine")
A.d.bq(w,new B.eiY(a2,u))},
cj7(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gadp()
for(w=j.a,v=j.b,u=e,t=d,s=0;s<220;++s){r=t.a
q=w-r
p=t.b
o=v-p
n=Math.max(q*q+o*o,400)
m=Math.sqrt(n)
l=1e6*this.w/n
q=u.a+q/m*l*0.016666666666666666
l=u.b+o/m*l*0.016666666666666666
u=new C.u(q,l)
t=new C.u(r+q*0.016666666666666666,p+l*0.016666666666666666)
if(A.o.E(s,3)===0)k.push(t)
if(m<16)break}return k},
gaVJ(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aC(0,w).aG(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mD,r,r,r,new B.eiL(s,d),r,r,r,r,"Share",r)],q),o=C.cq(new B.eiM(s)),n=s.w
n=B.hE(A.cs,A.k.ab(n,1)+"x","Sun mass",2.5,0.3,new B.eiN(s),n)
w=s.x
w=B.hE(A.cs,A.k.ab(w,1)+"x","Time",3,0.2,new B.eiP(s),w)
v=s.Q
v=B.hE(A.cs,A.o.u(A.k.V(v)),"Planet size",16,3,new B.eiQ(s),v)
u=s.ax
t=u?A.o5:O.rk
return B.jI(A.cs,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.w(C.a([n,w,v,new B.eR(C.a([new B.dA("Sound",u,new B.eiR(s),t,A.cs,r),new B.dA("Trails",s.z,new B.eiS(s),A.NS,A.cs,r),new B.dA("Planets pull each other",s.y,new B.eiT(s),A.yw,A.cs,r)],q),r,r),new B.eR(C.a([new B.fi(A.my,"Solar system",new B.eiU(s),A.cs,r),new B.fi(A.nm,"Comet",new B.eiV(s),A.c,r),new B.fi(A.mv,"Cluster",new B.eiW(s),A.c,r),new B.fi(D.y8,"Clear",new B.eiO(s),A.c9,r)],q),r,r)],q),A.m,r,A.e,A.P,0,A.p))}}
B.bkH.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.W()
w=C.N()
w.r=D.WJ.gp(0)
d.aZ(new C.a9(0,0,0+g,0+f),w)
v=new C.eJ()
v.dw(5)
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
t.saq(new C.bT(A.A,0.5,A.x,h,0,C.a([A.cs.j(0.45),A.K],s),h,h).aw(0,C.bU(g,f)))
d.af(g,f,t)
t=C.N()
t.saq(D.eg2.aw(0,C.bU(g,o)))
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
q.z=G.mH
p=q.H()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j=C.aq(k,A.w,0.5)
j.toString
q.saq(new C.bT(P.pp,0.5,A.x,h,0,C.a([A.c,k,j],s),h,h).aw(0,C.bU(m.a,r)))
p=q.H()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.N()
t.c=2
t.r=A.jh.gp(0)
d.bF(g,f,t)
t=C.N()
t.r=A.c.gp(0)
d.af(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.7).gp(0)
p=t.H()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
av(d){return!0}}
B.abq.prototype={}
B.VX.prototype={
T(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.bk2(new C.cs(null,x.A),w,v,A.cG,A.av,$,A.bx,0,C.a([],x.X),null,null)}}
B.bk2.prototype={
a_(){this.a1()
this.lg()},
c5T(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
w.push(new B.abq(new C.u(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.u(p*n,o*n),A.k.E(m*60+l,360)))}while(w.length>A.k.V(k.x))w.pop()},
lz(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.av))return
a2.c5T()
w=a2.f
A.d.bq(w,new B.eEw(a2))
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
r=new C.u(r.a+j,r.b+l)
l=m.b
q=new C.u(q.a+l.a,q.b+l.b)
if(h<676&&h>0.01){l=Math.sqrt(h)
h=26-Math.sqrt(h)
p=new C.u(p.a-i/l*h,p.b-k/l*h)}}}if(o>0){l=s.a
k=0.8*a2.y
j=s.b
i=1.6*a2.Q
g=7*a2.z
f=new C.u(0+(r.a/o-l.a)*k+(q.a/o-j.a)*i+p.a*g,0+(r.b/o-l.b)*k+(q.b/o-j.b)*i+p.b*g)}else f=A.J
l=s.a
k=l.a
if(k<40)f=new C.u(f.a+(40-k)*6,f.b+0)
j=a2.w
i=j.a-40
if(k>i)f=new C.u(f.a-(k-i)*6,f.b)
l=l.b
if(l<40)f=new C.u(f.a+0,f.b+(40-l)*6)
j=j.b-40
if(l>j)f=new C.u(f.a,f.b-(l-j)*6)
j=a2.ay
if(j!=null){k=j.a-k
l=j.b-l
e=Math.sqrt(k*k+l*l)
j=a2.at
if(j==="attract"&&e<260&&e>1)f=new C.u(f.a+k/e*420,f.b+l/e*420)
if(j==="scare"&&e<170&&e>1){i=170-e
f=new C.u(f.a-k/e*i*22,f.b-l/e*i*22)}if(j==="hunt"&&e<220&&e>1){j=220-e
f=new C.u(f.a-k/e*j*30,f.b-l/e*j*30)}}for(l=w.length,d=0;d<w.length;w.length===l||(0,C.K)(w),++d){k=w[d].a
j=s.a
i=k.a-j.a
j=k.b-j.b
e=Math.sqrt(i*i+j*j)
if(e<220&&e>1)f=new C.u(f.a+i/e*360,f.b+j/e*360)}l=s.b
k=l.a+f.a*a3
l=l.b+f.b*a3
s.b=new C.u(k,l)
a0=Math.sqrt(k*k+l*l)
l=a2.as
k=a2.at==="hunt"&&a2.ay!=null?1.5:1
if(a0>0.01){j=s.b
k=A.k.D(a0,l*0.5,l*k)
s.b=new C.u(j.a/a0*k,j.b/a0*k)}l=s.a
k=s.b
s.a=new C.u(l.a+k.a*a3,l.b+k.b*a3)}a1=w.length
A.d.bq(w,new B.eEx(a2))
if(w.length<a1&&a2.ch)B.lf("bell",12+a2.r.aA(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fT$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fT$
B.lf("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.mD,l,l,l,new B.eEl(m,d),l,l,l,l,"Share",l)],k),i=C.cq(new B.eEm(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cVM[w]
h.push(new B.dA(v.b,m.at===v.a,new B.eEn(m,v),v.c,A.b2,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cFR[w]
u.push(new B.dA(t.b,m.ax===t.a,new B.eEo(m,t),l,A.b2,l))}s=m.ch
r=s?A.o5:O.rk
r=C.a([new B.dA("Sound",s,new B.eEp(m),r,A.b2,l)],k)
s=m.x
s=B.hE(A.b2,A.o.u(A.k.V(s)),"How many",150,15,new B.eEq(m),s)
q=B.hE(A.b2,l,"Together",2.5,0,new B.eEr(m),m.y)
p=B.hE(A.b2,l,"Apart",2.5,0,new B.eEs(m),m.z)
o=B.hE(A.b2,l,"Same way",2.5,0,new B.eEt(m),m.Q)
n=m.as
return B.jI(A.b2,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.w(C.a([new B.eR(h,"TOUCH",l),new B.eR(u,"LOOK",l),new B.eR(r,l,l),s,q,p,o,B.hE(A.b2,A.o.u(A.k.V(n)),"Speed",280,50,new B.eEu(m),n)],k),A.m,l,A.e,A.P,0,A.p))}}
B.bsc.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.adJ,D.bkT],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.da,U.Ls],v):C.a([D.bhO,D.b90],v)}v=0+a6.a
u=0+a6.b
t=$.W()
s=C.N()
s.saq(new C.a8(A.b_,A.b4,A.x,w,a3,a3).aw(0,new C.a9(0,0,v,u)))
a5.aZ(new C.a9(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){q=v[r].a
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bN.gp(0)
o=p.H()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.bN.j(0.25).gp(0)
n.z=G.mH
o=n.H()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.mP(1,j,0.7,1).iE()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
f.r=h.j(0.35*g).gp(0)
f.z=A.jt
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
j=d.gbL().a.snapshot()
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
j.push(new C.cV(0,-6,-7,a0))
j.push(new C.ap(-12,-4+a0))
j.push(new C.ap(-12,4+a0))
j.push(new C.ap(-7,a0))
j.push(new C.cV(0,6,9,0))
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
f=C.aq(h,A.cB,0.6)
f.toString
j.saq(new C.a8(A.a3,A.a8,A.x,C.a([h,f],q),a3,a3).aw(0,D.eLq))
o=j.H()
j=d.gbL().a.snapshot()
s.drawPath((d.e=new C.cC(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.c9
else a1=v==="scare"?A.bN:A.b2
v=u?12:22
u=C.N()
u.b=A.ae
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.af(a4,v,u)}},
av(d){return!0}}
B.abT.prototype={}
B.U5.prototype={
T(){var w=C.a([],x.bi)
return new B.aCc(w,A.cG,A.av,C.T(x.N,x.S),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCc.prototype={
gI6(){var w=this.r,v=18+A.k.V(w*0.85)
return A.o.D(A.k.V(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gacq(){return 54-8*(this.r/100)},
a_(){this.a1()
this.lg()
B.zq("chain_burst").bA(new B.dG0(this),x.P)},
aYv(){return B.vU("chain_burst",C.F(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
azv(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
k.push(new B.abT(new C.u(20+s*(r.a-40),20+q*(p.b-40)),new C.u(o*m,n*m),new H.mP(1,u.aj()*360,0.6,1).iE()))}},
Ze(d){var w,v=this
if(d==null)return 0
w=(v.fT$-d)/1000
if(w<0.4)return v.gacq()*A.dV.az(0,w/0.4)
if(w<1.1)return v.gacq()
if(w<1.5)return v.gacq()*(1-(w-1.1)/0.4)
return 0},
lz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.av)||!j.Q)return
w=j.d
if(w.length===0)j.azv()
for(v=w.length,u=0;u<v;++u){t=w[u]
if(t.d!=null)continue
s=t.a
r=t.b
q=r.a
p=r.b
o=s.a+q*d
s=s.b+p*d
t.a=new C.u(o,s)
if(o<8||o>j.f.a-8)r=t.b=new C.u(-q,p)
if(s<8||s>j.f.b-8)t.b=new C.u(r.a,-r.b)}if(j.y){n=C.a([],x.U)
v=j.at
if(v!=null)n.push(new C.z(v,j.Ze(j.ax)))
for(v=A.d.gae(w),s=new C.f_(v,new B.dG1());s.C();){r=v.gR(0)
n.push(new C.z(r.a,j.Ze(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.K)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fT$
E.dE(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eU()
break}}}if(!(j.at!=null&&j.Ze(j.ax)>0||A.d.b4(w,new B.dG2(j)))&&j.fT$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gI6()){if(j.as>=j.gI6()*1.5)k=3
else k=j.as>=j.gI6()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.BC("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aYv()}else E.dE(120,"",300,0,0.3,"saw")}}},
aYu(d){this.m(new B.dFR(this,d))
this.aYv()},
adq(){var w=0,v=C.j(x.H),u=this,t,s
var $async$adq=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.cb(null,null,!0,null,new B.dFU(u),s,null,!0,!0,x.S),$async$adq)
case 2:t=e
if(t!=null)u.aYu(t)
return C.h(null,v)}})
return C.i($async$adq,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gI6(),t=w.x.h(0,""+w.r)
return B.jI(A.bX,A.hc,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cq(new B.dFY(w,t==null?0:t,u)),"CHAIN BURST",C.B(C.a([new B.fi(A.rf,"Levels",w.gc5U(),A.bX,v),new B.fi(A.k6,"New board",new B.dFZ(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
aun(d,e,f){var w=null
return C.w(C.a([C.d(d,w,w,w,w,w,w,D.aPI,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bXR(d,e){return this.aun(d,e,A.c)}}
B.baa.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.W()
w=C.N()
w.r=D.EP.gp(0)
d.aZ(new C.a9(0,0,0+e.a,0+e.b),w)
v=new B.cL5(d)
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
p.z=G.mH
m=p.H()
t.drawCircle(o.a,o.b,12,m)
m.delete()
o=q.a
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=n.gp(0)
m=p.H()
t.drawCircle(o.a,o.b,8,m)
m.delete()}}},
av(d){return!0}}
B.aKI.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bwo.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bup()}}
B.aLx.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bwF.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bvg()}}
B.aLM.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bwN.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bvv()}}
B.FE.prototype={
gcOf(){return this.a.aC(0,this.b).gcm()>4}}
B.acI.prototype={}
B.Vs.prototype={
T(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.bjC(new C.cs(null,x.A),w,v,A.cG,A.av,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjC.prototype={
aP3(d){return new H.mP(1,A.o.E(d*29,360),0.6,1).iE()},
ZZ(d){var w,v=D.Cp.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bn(d.a/s*t),0,t-1)
return v[A.o.E(w,u)]+12*A.o.e7(w,u)},
aRJ(d){A.d.bq(this.e,new B.eeq(this,d))},
cr8(d,e,f){var w=f.aC(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aC(0,e).gcm()
return d.aC(0,e.ad(0,w.aG(0,A.k.D((d.aC(0,e).a*v+d.aC(0,e).b*u)/t,0,1)))).gcm()},
ay0(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
A.d.a8(f)
w=g.w
v=w.a
u=w.b
switch(d){case"stairs":for(w=u*0.045,t=v*0.5,s=0;s<7;++s){r=(s&1)===0
q=v*(r?0.08:0.42)
p=u*(0.2+s*0.1)
o=new C.u(q,p)
n=q+t
m=p+w
l=new C.u(n,m)
k=g.ZZ(new C.u((q+n)/2,(p+m)/2))
p=r?o:new C.u(n,p)
r=r?l:new C.u(q,m)
f.push(new B.FE(p,r,k,new H.mP(1,A.o.E(k*29,360),0.6,1).iE()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.u(v*(0.1+i*0.16+r),w)
k=g.ZZ(h)
f.push(new B.FE(h,h,k,new H.mP(1,A.o.E(k*29,360),0.6,1).iE()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.u(v*(0.08+w.aj()*0.84),u*(0.2+w.aj()*0.65))
k=g.ZZ(h)
f.push(new B.FE(h,h,k,new H.mP(1,A.o.E(k*29,360),0.6,1).iE()))}}},
a_(){this.a1()
this.lg()},
c5W(d,e){var w,v=this.fT$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
B.lf(v,d.c+12,w,A.k.D(0.25+e/900,0.25,0.8))}},
lz(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.av))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new B.acI(new C.u(a2.w.a*(0.2+v.aj()*0.6),6),new C.u((v.aj()-0.5)*40,0),new H.mP(1,v.aj()*360,0.5,1).iE()))}if(u>3)a2.as=0
for(v=w.length,u=a2.e,t=a3/2,s=900*t,r=0;r<w.length;w.length===v||(0,C.K)(w),++r){q=w[r]
for(p=0;p<2;++p){o=q.b
n=o.a+0
o=o.b+s
m=q.b=new C.u(n,o)
l=q.a
k=l.a+n*t
l=l.b+o*t
j=q.a=new C.u(k,l)
if(k<7){m=q.a=new C.u(7,l)
o=q.b=new C.u(-n*0.6,o)
n=m}else{n=j
o=m}m=a2.w.a-7
if(n.a>m){q.a=new C.u(m,n.b)
q.b=new C.u(-o.a*0.6,o.b)}for(o=u.length,i=0;i<u.length;u.length===o||(0,C.K)(u),++i){h=u[i]
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
g=new C.u(m+l*e,j+n*e)
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
q.a=new C.u(m+l*j,k+n*j)
j=q.b
a1=j.a*l+j.b*n
if(a1<0){a2.c5W(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.u(m.a-l*k,m.b-n*k)}}}}}A.d.bq(w,new B.eeP(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.X(q.ay?A.o5:O.rk,A.ad,p,p,p,21),p,p,p,new B.eeE(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.mD,p,p,p,new B.eeF(q,d),p,p,p,p,"Share",p)],o),m=C.cq(new B.eeG(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cZ8[w]
l.push(new B.dA(v.b,q.x===v.a,new B.eeH(q,v),v.c,A.b8,p))}u=C.a([],o)
for(t=J.aV(D.Cp.gee(D.Cp));t.C();){s=t.gR(t)
u.push(new B.dA(s,q.y===s,new B.eeI(q,s),p,A.b8,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.ayh[w]
t.push(new B.dA(r.b,q.z===r.a,new B.eeJ(q,r),p,A.b8,p))}s=q.Q
return B.jI(A.b8,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.w(C.a([new B.eR(l,"TOOL",p),new B.eR(u,"SCALE",p),new B.eR(t,"SOUND",p),B.hE(A.b8,A.k.ab(s,1)+"/s","Marbles",4,0.3,new B.eeK(q),s),new B.eR(C.a([new B.fi(D.bG_,"Stairs",new B.eeL(q),A.b8,p),new B.fi(An.NA,"Pinball",new B.eeM(q),A.c,p),new B.fi(A.mv,"Random",new B.eeN(q),A.c,p),new B.fi(D.y8,"Clear",new B.eeO(q),A.c9,p)],o),p,p)],o),A.m,p,A.e,A.P,0,A.p))}}
B.bhe.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.W()
w=C.N()
w.saq(D.bX_.aw(0,new C.a9(0,0,a0,a1)))
a2.aZ(new C.a9(0,0,a0,a1),w)
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
q.z=A.jt
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
p.z=A.jt
g=p.H()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p=C.aq(i,A.w,0.4)
p.toString
j.saq(new C.bT(P.pp,0.5,A.x,d,0,C.a([A.c,i,p],v),d,d).aw(0,C.bU(q,9)))
g=j.H()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.N()
u.c=5
u.d=A.bS
u.r=A.aA.gp(0)
a2.bF(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.K)(a0),++t){f=a0[t]
u=f.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p=f.c
q.r=p.j(0.3).gp(0)
q.z=A.ru
g=q.H()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.saq(new C.bT(P.pp,0.5,A.x,d,0,C.a([A.c,p],v),d,d).aw(0,C.bU(f.a,7)))
g=q.H()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
av(d){return!0}}
B.add.prototype={}
B.Vx.prototype={
T(){var w=C.a([],x.gB)
return new B.aDB(new C.cs(null,x.A),w,A.cG,A.av,$,A.bx,0,C.a([],x.X),null,null)}}
B.aDB.prototype={
gaYw(){var w=this.w
return new C.u(w.a/2,w.b/2)},
ayd(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
azq(d){var w=D.Cp.h(0,this.y),v=5-d,u=w.length
return w[A.o.E(v,u)]+12*A.o.e7(v,u)},
a_(){this.a1()
this.lg()},
aQt(){var w,v,u,t,s=this.e
A.d.a8(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.add(w,A.k.E(t/v+u,1)))}},
lz(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.av))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fT$
if(p.Q){r=p.z
s=p.azq(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.lf(r,s+12,q,0.55)}}}},
c5X(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aC(0,h.gaYw()),e=f.gcm()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.ayd(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=A.k.E((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
s=h.e
s=C.a(s.slice(0),C.U(s))
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
m=h.ayd(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.eik(h,n).$0()
h.c.ef()
return}}h.m(new B.eil(g,h,t))
if(h.Q)B.lf(h.z,h.azq(g.a)+12,700,0.5)
C.eU()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.X(r.Q?A.o5:O.rk,A.ad,q,q,q,21),q,q,q,new B.eis(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.mD,q,q,q,new B.eit(r,d),q,q,q,q,"Share",q)],p),n=C.cq(new B.eiu(r)),m=r.x
m=B.hE(A.bu,""+A.k.V(m),"Tempo",180,40,new B.eiv(r),m)
w=C.a([],p)
for(v=J.aV(D.Cp.gee(D.Cp));v.C();){u=v.gR(v)
w.push(new B.dA(u,r.y===u,new B.eiw(r,u),q,A.bu,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.ayh[t]
v.push(new B.dA(s.b,r.z===s.a,new B.eix(r,s),q,A.bu,q))}return B.jI(A.bu,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.w(C.a([m,new B.eR(w,"SCALE",q),new B.eR(v,"SOUND",q),new B.eR(C.a([new B.fi(A.dX,"Demo",new B.eiy(r),A.bu,q),new B.fi(A.mv,"Random",new B.eiz(r),A.c,q),new B.fi(D.y8,"Clear",new B.eiA(r),A.c9,q)],p),q,q)],p),A.m,q,A.e,A.P,0,A.p))}}
B.bkI.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.W()
w=C.N()
w.r=D.WJ.gp(0)
a5.aZ(new C.a9(0,0,0+a6.a,0+a6.b),w)
w=a3.d
v=a3.e
u=v.$1(w-1)+14
t=a3.c
s=t.aC(0,new C.u(0,u))
r=C.N()
r.c=2
q=x.O
p=t.a
o=p-1
n=t.b
m=n-u
r.saq(new C.a8(A.b4,A.b_,A.x,C.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).aw(0,new C.a9(o,m,o+2,m+u)))
a5.bF(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mP(1,A.k.E(s.$1(l)*23,360),0.55,1).iE()
o=v.$1(l)
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.dfP[A.o.E(A.o.E(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.kh(new C.er(o,a4,a4,A.cO,a4,a4,a4,a4,a4,a4,new C.H(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a4,A.c6,new C.js(1),a4,a4,a4,a4,A.c5,a4)
i.en()
o=i.b.c
m=J.fRE(v.$1(l))
h=i.b.a.c
i.a4(a5,new C.u(p+-o/2,n+(m-h.gbd(h)-2)))}w=C.N()
w.saq(D.efF.aw(0,C.bU(t,16)))
a5.af(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.K)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.mP(1,A.k.E(s.$1(a0)*23,360),0.55,1).iE()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fRE(v.$1(a0))
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=3*a2
a0.r=k.j(a2).gp(0)
j=a0.H()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=k.j(0.35).gp(0)
d.z=A.jt
j=d.H()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
d.saq(new C.bT(P.pp,0.5,A.x,a4,0,C.a([A.c,k],q),a4,a4).aw(0,C.bU(new C.u(h,a1),8.5)))
j=d.H()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
av(d){return!0}}
B.aLv.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bwD.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bve()}}
B.aLw.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bwE.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bvf()}}
B.te.prototype={}
B.b93.prototype={}
B.Vv.prototype={
T(){var w=x.S
return new B.aDz(C.a([],x.aq),C.T(w,w),C.aX(w),D.eRn)}}
B.aDz.prototype={
a_(){this.a1()
B.zq("molecule_maker").bA(new B.ehP(this),x.P)},
aiY(d){var w={}
w.a=0
this.f.bK(0,new B.ehB(w,d))
return w.a},
gaYC(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)t.push(w[u].a)
return B.i1p(t,this.f,D.a2H[this.d])},
c6d(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eJ()
w.dw(t*7+3)
t=v.y
v.m(new B.ehv(v,e,t.a,w,t.b))
B.vX("pop",u.length,90,0.35)},
awr(d){return this.m(new B.ehw(this))},
aYD(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c6j(d){this.m(new B.ehA(this,this.aYD(d)))},
cnB(){var w=this.r
if(w==null)return
this.m(new B.ehz(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a2H[k.d],h=k.gaYC()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.w4.h(0,w[u].a).a-k.aiY(u)
w=i.c
w=w.gdO(w)
t=w.du(w,new B.ehJ(),x.N).aH(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.b2:A.hw
r=x.p
s=C.w(C.a([new C.D(A.fL,B.fco(w,s,h&&k.d<12?new B.fi(A.j_,"Next",new B.ehK(k),A.b2,j):j),j),C.E(C.cq(new B.ehL(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dA(p+D.a2H[u].b,k.d===u,new B.ehM(k,u),j,A.hw,j))}q=C.a([],r)
for(p=D.w4.gdO(D.w4),p=p.gae(p);p.C();){o=p.gR(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dy:m.b
q.push(new B.dA(n+" \xb7 "+m.a,!1,new B.ehN(k,o),j,l,j))}return B.jI(A.hw,A.hc,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.w(C.a([new B.eR(w,"GOAL",j),new B.eR(q,"ADD",j),new B.eR(C.a([new B.dA("Remove selected atom",!1,k.gcnA(),A.e6,A.c9,j),new B.dA("Clear all",!1,k.gc6e(k),A.k6,A.aM,j)],r),j,j)],r),A.m,j,A.e,A.P,0,A.p))}}
B.bhW.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.E(t*37,10)
r=A.o.E(t*53,10)
$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.hw.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bK(0,new B.doG(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.w4.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bU(j,26)
if(q===t){$.W()
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.aM.j(0.4).gp(0)
h.z=A.jt
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
h.saq(new C.bT(A.JT,0.5,A.x,a3,0,C.a([f,g,e],r),I.awm,a3).aw(0,i))
p=h.H()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.az:A.c
d=new C.kh(new C.er(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,new C.H(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a4,A.c6,new C.js(1),a3,a3,a3,a3,A.c5,a3)
d.en()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a4(a4,new C.u(n.a-h/2,n.b-j.gbd(j)/2))
n=k===0
a0=n?A.bi:A.aF
j=m.b
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=a0.gp(0)
p=h.H()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.t(k)
a1=new C.kh(new C.er(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,A.nz),A.a4,A.c6,new C.js(1),a3,a3,a3,a3,A.c5,a3)
a1.en()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a4(a4,new C.u(n.a+(20-h/2),n.b+(-20-j.gbd(j)/2)))}if(n===0){d=C.h1(a3,a3,a3,a3,D.f_2,A.a4,A.c6,a3,A.dP,A.c5)
d.en()
d.a4(a4,new C.u((w-d.b.c)/2,v/2))}},
av(d){return!0}}
B.Ut.prototype={
T(){var w=x.s
return new B.biS(C.a([],w),C.a([],w))}}
B.biS.prototype={
a_(){this.a1()
this.avK()
B.zq("dna_lab").bA(new B.dOL(this),x.P)},
gb2X(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a3O.h(0,w[u])
t.toString
s.push(t)}return A.d.h_(s)},
ga8X(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ap(this.gb2X(),w,v))}return u},
avK(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eJ()
k.dw(l.e*31+l.d*7+C.BP(new C.S(Date.now(),0,!1)))
w=new B.dOA(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mG(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a3O.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.h_(r))}if(!A.d.b4(t,new B.dOz()))break}l.f=v
A.d.a8(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.b0F()},
b0F(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.h_q(s.ga8X()[r])
v=J.dH(D.Cq.gee(D.Cq),new B.dOB(w)).dK(0)
u=new C.eJ()
u.dw(r+s.e)
A.d.fn(v,u)
u=C.a([w],x.s)
A.d.v(u,C.db(v,0,C.dG(3,"count",x.S),C.U(v).c))
t=new C.eJ()
t.dw(s.e*3+r)
A.d.fn(u,t)
s.z=u},
aYB(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.dlS.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a3O.h(0,w.f[v])
u.toString
break A}u=B.h_q(w.ga8X()[v])
break A}w.m(new B.dOy(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dOJ(),e=new B.dOE(),d=h.d===2?h.gb2X():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mP,g,g,g),A.at],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bX.j(0.18):A.K
q=new C.aT(10,10)
p=new C.ay(t.length===s?A.bX:A.bE,1,A.q,-1)
o=C.a([],a0)
for(n=h.ga8X()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cl(A.aO,A.e,A.P,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,D.bqs,A.ek,g,g,g))}v.push(C.bW(A.bA,u,A.bq,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.bW(A.bA,u,A.bq,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a7(34,g,new C.cp(A.A,g,g,C.X(Aj.NH,j<t.length?A.aA:A.bE,g,g,g,14),g),g))
A.d.v(v,C.a([new C.D(A.M6,C.bW(A.bA,u,A.bq,0,0),g)],a0))}v.push(A.am)
v.push(C.d(w,g,g,g,g,g,g,Q.mP,g,g,g))
v.push(A.at)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.b2.j(0.25):A.dm
q=new C.aT(12,12)
o=j<t.length
p=new C.ay(o?A.b2:A.b0,1,A.q,-1)
if(o){o=D.Cq.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.c0
u.push(C.p(g,new C.y(o,g,new C.H(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(r,g,new C.bO(p,p,p,p),new C.bp(q,q,q,q),g,g,A.n),g,g,g,g,A.ej,g,g,g))}v.push(C.bW(A.bA,u,A.bq,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.bW(A.bA,u,A.bq,0,0))}v.push(A.aB)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.fco(u,t>=(h.d===2?3:9)?A.b2:A.bX,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.fco(u,A.bX,g))}v.push(A.R)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,K.TL,g,g,g))
v=C.c9(C.w(v,A.F,g,A.e,A.j,0,A.p),A.r,g,A.y,g,A.bB,g,g,A.ag)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dA(D.d3P[j],h.d===j,new B.dOF(h,j),g,A.bX,g))
u=C.a([new B.eR(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bI(A.a3,g,g,new B.fi(A.k6,"New strand",new B.dOG(h),A.b2,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.K)(t),++l){i=t[l]
q=D.Cq.h(0,i)
q.toString
a0.push(new B.fi(D.a_F,q,new B.dOH(h,i),A.bX,g))}u.push(C.bW(A.bA,a0,A.bq,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.avf:D.cO0
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aT(14,14)
a0.push(C.aC(g,C.p(A.A,new C.y(k,g,D.f_h,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bp(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dOI(h,k),g,g,g,g,g,g,!1,A.a7))}u.push(C.B(a0,A.m,g,A.qa,A.j,0,g,g))}return B.jI(A.bX,A.hc,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.w(u,A.m,g,A.e,A.P,0,A.p))}}
B.UJ.prototype={
T(){return new B.aCG(A.bx,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aCG.prototype={
a_(){var w,v=this
v.a1()
w=v.qy(v.gc6f())
w.iX(0)
v.d!==$&&C.aP()
v.d=w
B.zq("ecosystem").bA(new B.dRA(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.buE()},
gaMo(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c6g(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length>160)A.d.cw(v,0)}if(m.gaMo()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.E(A.k.bn(w),5)===0)B.vU("ecosystem",C.F(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.m(new B.dRn())},
aa8(d){this.m(new B.dRm(this,d))
B.vX("pop",3,120,0.4)},
c6i(){return this.m(new B.dRo(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.w(C.a([new C.D(D.Yn,B.fco(r,t.gaMo()?A.b2:A.c9,s),s),C.E(new C.D(D.bqZ,C.bw(C.m(18),C.b3(s,s,s,new B.bdf(t.f,t.r,t.w,s),A.f3),A.aq),s),1),new C.D(A.eI,C.d("Alive together: "+A.k.V(t.Q)+" s     Best: "+A.k.V(t.as)+" s",s,s,s,s,s,s,D.f6i,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hE(A.b2,A.k.ab(w,1)+"\xd7","Grass growth",2,0.2,new B.dRs(t),w)
v=t.y
v=B.hE(A.bP,A.k.ab(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dRt(t),v)
u=t.z
return B.jI(A.b2,A.hc,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.w(C.a([w,v,B.hE(A.cs,A.k.ab(u,1)+"\xd7","Fox hunting",2,0.3,new B.dRu(t),u),new B.eR(C.a([new B.dA("Drought",!1,new B.dRv(t),A.yu,A.aM,s),new B.dA("Disease",!1,new B.dRw(t),D.bFS,A.bu,s),new B.dA("+ Foxes",!1,new B.dRx(t),s,A.cs,s),new B.dA("+ Rabbits",!1,new B.dRy(t),s,A.bP,s),new B.dA("Reset",!1,t.gc6h(),A.k6,A.aP,s)],q),s,s)],q),A.m,s,A.e,A.P,0,A.p))}}
B.bdf.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.W()
w=C.N()
w.saq(D.bV0.aw(0,new C.a9(0,0,d,a0)))
a1.aZ(new C.a9(0,0,d,a0),w)
w=h.b
a0=C.aq(A.v5,A.bi,A.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.N()
t.r=a0.gp(0)
a1.aZ(new C.a9(0,v,d,v+u),t)
s=A.k.V(w[0]*0.9)
r=new C.eJ()
r.dw(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.aj()*e
o=f*(0.6+0.4*r.aj())
t=Math.sin(a0+q)
n=r.aj()
m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.hk.gp(0)
m.c=1.6
l=m.H()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new B.d3O(h,a2,f,a1)
k.$5(Math.min(A.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.a9(10,a0,e,u)
t=C.N()
t.r=D.bdD.gp(0)
a1.aZ(new C.a9(0,f,d,f+g),t)
i=C.N()
i.r=A.dm.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d3Q(h,j,a1)
g.$3(0,100,A.bi)
g.$3(1,120,A.bP)
g.$3(2,24,A.cs)
g=new B.d3P(a1,j)
g.$3("Grass "+A.k.V(w[0]),A.bi,16)
g.$3("Rabbits "+A.k.V(w[1]),A.bP,102)
g.$3("Foxes "+A.k.V(w[2]),A.cs,200)},
av(d){return!0}}
B.aKW.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.aRl.prototype={
guW(){return A.d.cK(this.a,0,new B.bFy())}}
B.TY.prototype={
T(){var w=x.S
return new B.biw(B.hZt(),C.c2(5,0,!1,w),C.aX(w),A.bx,null,null)}}
B.biw.prototype={
gvT(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cK(t,0,new B.dCb())},
a_(){var w,v=this
v.a1()
w=v.qy(new B.dCo(v))
w.iX(0)
v.x!==$&&C.aP()
v.x=w
B.zq("balance_lab").bA(new B.dCp(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.buh()},
cy5(d){var w,v=this
v.m(new B.dCc(v,d))
B.vX("click",v.f[d],60,0.4)
if(v.gvT()===v.d[v.e].guW()&&v.r.L(0,v.e)){B.vX("zap",10,260,0.5)
w=v.r
w=C.C(w,C.a3(w).k("co.E"))
B.vU("balance_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.M(k,new B.dCh(),C.U(k).k("M<1,n>")).aH(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aH(k," + ")
if(o.gvT()===m[o.e].guW())s="\u2696\ufe0f Balanced! "+m[o.e].guW()+" = "+o.gvT()+". The torques are equal, so the seesaw stays level."
else s=o.gvT()>m[o.e].guW()?"The right side is too strong ("+o.gvT()+" vs "+m[o.e].guW()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].guW()+" vs "+o.gvT()+"). Add weight to the right, or place it further from the middle."
k=o.gvT()===m[o.e].guW()?A.b2:A.aM
k=B.bzy(s,k,o.gvT()===m[o.e].guW()&&o.e<m.length-1?new B.fi(A.j_,"Next",new B.dCi(o),A.b2,n):n)
w=C.E(C.cq(new B.dCj(o,l)),1)
u=j.length===0?"0":j
u=C.E(C.d("Left torque\n"+u+" = "+m[o.e].guW(),n,n,n,n,n,n,D.aQV,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.w(C.a([new C.D(D.Yn,k,n),w,new C.D(D.ahl,C.B(C.a([u,C.E(C.d("Right torque\n"+r+" = "+o.gvT(),n,n,n,n,n,n,D.aQV,A.dN,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dA(w+p,o.e===v,new B.dCk(o,v),n,A.aM,n))}return B.jI(A.aM,A.hc,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.w(C.a([new B.eR(u,"LEVEL",n),new B.eR(C.a([new B.dA("Clear right side",!1,new B.dCl(o),A.k6,A.c9,n)],q),n,n)],q),A.m,n,A.e,A.P,0,A.p))}}
B.b9f.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aO($.W().r,A.ao,null,null,C.a([],x.v))
i.F(new C.b5(h,f))
w=f+70
i.F(new C.ap(h-30,w))
i.F(new C.ap(h+30,w))
i.F(new C.bE())
v=C.N()
v.r=A.ak.gp(0)
d.aQ(i,v)
v=h-120
i=C.N()
i.r=A.aK.gp(0)
d.aZ(new C.a9(v,w,v+240,w+8),i)
i=d.a
J.by(i.save())
i.translate(h,f)
d.j4(0,j.b)
u=g*5.8
t=C.bx(new C.a9(-u,-9,u,9),A.hf)
w=C.N()
w.saq(D.bXH.aw(0,new C.a9(t.a,t.b,t.c,t.d)))
d.aD(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.W()
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.hL.gp(0)
v.c=1.5
r=v.H()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
B.fpR(d,""+Math.abs(s),new C.u(w,22),A.c0,10)}q=new B.cDD(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aP)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bX)
if(w[s]===0){l=C.bx(C.cg(new C.u(m,-22),22,v),A.hf)
$.W()
k=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k.b=A.ae
k.c=1.4
k.r=A.b0.gp(0)
r=k.H()
i.drawRRect(C.es(l),r)
r.delete()
B.fpR(d,"+",new C.u(m,-22),A.c0,14)}}i.restore()
$.W()
i=C.N()
i.r=(j.e?A.b2:A.aL).gp(0)
d.af(new C.u(h,f),7,i)},
av(d){return!0},
gjj(){return this.e}}
B.UX.prototype={
T(){return new B.bj3(C.a([16,32,12,24],x.t),C.aX(x.S),A.bx,null,null)}}
B.bj3.prototype={
ga0r(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gadz(){var w=this.ga0r(),v=this.r,u=D.ay0[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.dd(this.d,x.S).a<4)
else w=!1
return w},
a_(){var w,v=this
v.a1()
w=v.qy(new B.dVD(v))
w.iX(0)
v.x!==$&&C.aP()
v.x=w
B.zq("gear_lab").bA(new B.dVE(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.buM()},
c6k(d,e){var w,v=this
v.m(new B.dVt(v,d,e))
if(v.gadz()&&v.w.L(0,v.r)){B.vX("zap",8,240,0.45)
w=v.w
w=C.C(w,C.a3(w).k("co.E"))
B.vU("gear_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga0r(),n=r.ga0r(),m=D.ay0[r.r].a
m=r.gadz()?"\u2705 Done! Ratio "+A.k.ab(r.ga0r(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gadz()?A.b2:A.cs
v=r.d
u=x.p
n=C.w(C.a([new C.D(D.Yn,B.bzy(m,w,r.gadz()&&r.r<7?new B.fi(A.j_,"Next",new B.dVx(r),A.b2,q):q),q),C.E(C.b3(q,q,q,new B.beJ(v,r.f,q),A.f3),1),new C.D(D.ahl,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.ab(r.ga0r(),2)+"   \xb7   Output "+A.k.ab(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.ab(1/n,2),q,q,q,q,q,q,R.a7w,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dA(m+s,r.r===t,new B.dVy(r,t),q,A.cs,q))}p=r.e
u=C.a([new B.eR(o,"GOAL",q),B.hE(A.aP,""+A.k.V(p)+" rpm","Input speed",120,10,new B.dVz(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.ave("Gear "+s+" teeth",p,new B.dVA(r,t),8,40,D.ddp[t],""+p,q))}return B.jI(A.cs,A.hc,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.w(u,A.m,q,A.e,A.P,0,A.p))}}
B.beJ.prototype={
bPK(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.W(),j=C.a([],x.v),i=new C.aO(k.r,A.ao,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.egX,D.eme,D.eCp,D.etk],s=v===0,r=0;r<4;++r){q=t[r]
p=q.a
o=u+p*h
n=e+q.b
m=k+Math.cos(o)*n
l=w+Math.sin(o)*n
if(s&&p===0){p=new C.b5(m,l)
j.push(p)
m=i.f
if(m!=null)p.bB(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}else{p=new C.ap(m,l)
j.push(p)
m=i.f
if(m!=null)p.bB(m)
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
n=A.d.fd(g,A.pr)
m=-n-6
l=n+6
r=e.a
u=e.b
k=Math.min(r/(o-p),u/(l-m))*0.96
s=d.a
J.by(s.save())
s.translate(r/2-(p+o)/2*k,u/2-(m+l)/2*k)
d.bX(0,k)
j=this.c
u=w[0]
r=w[1]
i=-j*u/r+3.141592653589793/r
r=w[2]
u=w[3]
h=new B.dbO(this,d)
h.$6$back(new C.u(t,0),g[2],r,i,A.d5,!0)
h.$5(new C.u(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.cZ)
h.$5(new C.u(0,0),g[0],w[0],j,A.n_)
h.$5(new C.u(t,0),g[1],w[1],i,A.fl)
s.restore()
s=new B.dbP(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aP)
s.$3("2+3 \xb7 shared axle",t,A.cs)
s.$3("4 \xb7 output",q,A.b2)},
av(d){return!0}}
B.U6.prototype={
T(){var w=$.aw()
return new B.biJ(new C.as(new C.bb("Meet me at noon",A.b5,A.aN),w),new C.as(new C.bb("LEMON",A.b5,A.aN),w),C.aX(x.S))}}
B.biJ.prototype={
a_(){this.a1()
this.aXj()
B.zq("cipher_lab").bA(new B.dGn(this),x.P)},
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
aXj(){this.y=1+A.cG.aA(25)
this.z=0},
ga9q(){var w=this
return B.a1r(B.a1r(D.H4[w.x],w.y),-w.z)===D.H4[w.x]},
gaxp(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a1r(u,v.w)
break A}if(1===t){w=new C.M(C.a(B.a1r(u,0).split(""),x.s),new B.dG5(),x.dv).h_(0)
break A}w=B.ibd(u,v.e.a.a)
break A}return w},
aSC(d){var w,v,u,t,s,r=null,q=C.c2(26,0,!1,x.S)
for(w=new C.d5(d.toUpperCase()),v=x.e8,w=new C.bQ(w,w.gM(0),v.k("bQ<bV.E>")),v=v.k("bV.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.fd(q,A.Ad))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aT(2,2)
v.push(new C.bB(1,A.bg,C.w(C.a([C.p(r,r,A.f,r,r,new C.o(A.aP,r,r,new C.bp(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.Mq,r,r,r,r),new C.y(C.jH(65+s),r,D.f86,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.m_,A.j,0,A.p),r))}return new C.a7(r,70,C.B(v,A.dA,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.d,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kH,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dGe(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,D.f2n,!0,A.a4,o,A.an,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.R,C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.e,o,o,o,o,o,2,C.bs(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kH,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dGf(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.iO,!0,A.a4,o,A.an,o,o,o,o)],v))}w.push(A.aB)
w.push(D.fyS)
w.push(A.at)
v=A.aP.j(0.12)
u=C.m(14)
t=C.I(A.aP.j(0.4),A.q,1)
w.push(C.p(o,C.zJ(p.gaxp().length===0?"\u2026":p.gaxp(),D.f75,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bB,o,o,o))
w.push(A.ac)
w.push(B.bzy(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aP,o))
w.push(A.ac)
w.push(D.ffd)
w.push(A.at)
w.push(p.aSC(p.gaxp()))
w.push(A.at)
w.push(D.fhC)
s=C.cw(w,o,A.bB,o,o,A.ag,!1)}else{w=B.bzy("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aM,o)
v=C.d(B.a1r(D.H4[p.x],p.y),o,o,o,o,o,o,D.f7G,o,o,o)
u=(p.ga9q()?A.b2:A.aP).j(0.14)
t=C.m(14)
r=C.I((p.ga9q()?A.b2:A.aP).j(0.5),A.q,1)
t=C.a([w,A.ac,D.fsq,v,A.R,D.fmO,C.p(o,C.d(B.a1r(B.a1r(D.H4[p.x],p.y),-p.z),o,o,o,o,o,o,D.f98,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bB,o,o,o),A.ac,p.aSC(B.a1r(D.H4[p.x],p.y)),A.N],x.p)
if(p.ga9q())t.push(B.bzy("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.b2,new B.fi(A.k6,"Next",new B.dGg(p),A.b2,o)))
s=C.cw(t,o,A.bB,o,o,A.ag,!1)}w=p.f
v=x.p
w=C.a([new B.eR(C.a([new B.dA("Make a secret",w===0,new B.dGh(p),A.jq,A.aP,o),new B.dA("Crack a code",w===1,new B.dGi(p),A.q1,A.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dA(n[q],p.r===q,new B.dGj(p,q),o,A.aP,o))
v=C.a([new B.eR(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hE(A.aP,""+u,"Shift",25,1,new B.dGk(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hE(A.aM,""+v,"Shift back",25,0,new B.dGl(p),v))}return B.jI(A.aP,A.hc,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.w(w,A.m,o,A.e,A.P,0,A.p))}}
B.aKA.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.aL3.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.eb.prototype={}
B.tr.prototype={
apz(d,e,f,g){var w=this
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
B.a9Z.prototype={}
B.ab5.prototype={}
B.a48.prototype={
bcM(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.he()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new B.a9Z(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c2d(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bq(w,new B.bLJ())},
ajp(d,e,f,g){var w="p"+this.c++,v=new B.tr(w,e,f,g)
v.apz(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bq(this.b,new B.bLU(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cG4(d,e,f,g,h){return A.d.b4(this.b,new B.bLP(e,f,g,h))},
ak9(d,e,f,g){var w
if(d===f||this.cG4(0,d,e,f,g))return null
w=new B.ab5(d,e,f,g)
this.b.push(w)
return w},
azZ(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zE(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
amK(d){return this.Lw(d)&&!d.x&&d.cx>this.zE(d)},
b5m(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Lw(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c6l(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.z0.h(0,v)
if(w!=null)return w.a
return 100},
v3(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c2d(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.U(v).k("a_<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.K)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a_(v,new B.bLV(a2),t).cK(0,0,new B.bLW(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.T(x.N,u)
n=new B.bLY(o)
m=C.a([],x.t)
l=new B.bLX(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.K)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.K)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.T(u,u)
f=new B.bM_(g,l,n)
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
a2.b5i(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zE(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b5i(e,d,w,!0)
a2.bME(a4)},
b5i(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.T(x.N,b3),b5=new B.bLL(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bLK(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.K)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bLN(C.T(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,C.K)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=C.c2(b7,0,!1,b3)
v=x.W
k=C.T(v,b3)
j=C.T(v,b3)
v=b2.y
i=0.3/b9
q=x.b
h=b7<0
g="Length must be a non-negative integer: "+b7
f=0
for(;;){if(!(f<(c0?10:1)))break
if(h)C.b8(C.dI(g,null))
e=C.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=C.c2(b7,0,!1,b3)
a0=C.c2(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.K)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b5m(t)*(1+t.CW))
a4=b2.azZ(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c6l(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bPJ(e,a0,b8)
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
bPJ(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
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
bME(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.azZ(o)/a1.b5m(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zE(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bEM(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bcM(o,3,260)
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
if(l>26)a1.tK(o,"The "+$.qf().h(0,n).b+" got "+A.k.ab(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tK(o,"More than 1.5 amps went through the "+$.qf().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tK(o,"The regulator had to turn "+A.k.ab(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.ab(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tK(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.z0.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qf().h(0,n).b
l=f.b
l=l===A.k.k6(l)?""+A.k.V(l):C.t(l)
g=f.c
g=g===A.k.k6(g)?""+A.k.V(g):C.t(g)
a1.tK(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ab(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.ePh.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
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
bEM(d){return A.d.b4(this.a,new B.bLI(d))},
tK(d,e){var w
d.x=!0
d.ay=e
this.bcM(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bhr(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aG6(d){var w=d.b
return D.aNl.t(0,w)||D.z0.ai(0,w)||w==="buck"||w==="regulator"},
bec(d){var w,v=!0
if(!this.Lw(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.z0.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Us(d,e){var w=this.b
return new C.a_(w,new B.bM1(d,e),C.U(w).k("a_<1>")).gM(0)},
Ct(d){var w,v
if(d.x)return!1
w=d.b
if(D.z0.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bci(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qf().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aG6(d)||i.Ct(d))return null
w=i.Us(d,0)
v=i.Us(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.U(u).k("a_<1>")
s=C.C(new C.a_(u,i.gcOz(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.k6(r)?""+A.k.V(r):C.t(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ab(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.z0.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aGb("battery"),o=J.aV(t.a),t=new C.f_(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.Us(n,0)+i.Us(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aGb("switch"),o=J.aV(t.a),t=new C.f_(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qf().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zE(k))return"The "+$.qf().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ab(k.cx,2)+" amps, but it can only give about "+A.k.ab(i.zE(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b4(u,new B.bLQ(i,d))
h=q.b
h=h===A.k.k6(h)?""+A.k.V(h):C.t(h)
u=A.k.ab(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ab(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ab(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aGb(d){var w=this.a
return new C.a_(w,new B.bLT(d),C.U(w).k("a_<1>"))},
aFK(d){return this.aGb(d).b4(0,new B.bLS(0.35))},
pL(d,e){return A.d.b4(this.a,new B.bLR(e))}}
B.ail.prototype={
a4(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.W()
w=C.N()
w.r=F.L7.gp(0)
c0.aZ(new C.a9(0,0,b8,b9),w)
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
b4.cD2(c0,new C.u(k*b6+j*(42+i),l*b7),new C.u(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.hx3(q.a,q.b,c1)
q=b4.e
q.toString
$.W()
p=C.N()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bS
c0.bF(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.W()
g=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=D.adg.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.z1
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.by(w.save())
w.translate(j,i)
h=A.k.D(A.mT.az(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.cg2(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zE(a0)){g=j+0
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
a3.r=A.ay.j(0.65+0.35*e).gp(0)
s=a3.H()
e=a4.gbL().a.snapshot()
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
e=a2.gbL().a.snapshot()
w.drawPath((a2.e=new C.cC(e)).a,s)
s.delete()
a9=new C.kh(new C.er("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.H(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c6,new C.js(1),b5,b5,b5,b5,A.c5,b5)
a9.en()
a9.a4(c0,new C.u(g+-3,f+-8))}if(!a0.x)g=(D.aNl.t(0,h)||D.z0.ai(0,h)||h==="buck"||h==="regulator")&&!r.Ct(a0)&&r.Us(a0,0)+r.Us(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.W()
g=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.aF.gp(0)
s=g.H()
w.drawCircle(j,i,10,s)
s.delete()
a9=new C.kh(new C.er("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.H(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c6,new C.js(1),b5,b5,b5,b5,A.c5,b5)
a9.en()
a9.a4(c0,new C.u(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.m0.ai(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.W()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=F.L7.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2.4
j.r=(i&&r.bec(a0)?A.c9:A.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bec(a0)){a9=new C.kh(new C.er("+",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.H(!0,A.c9,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.c6,new C.js(1),b5,b5,b5,b5,A.c5,b5)
a9.en()
a9.a4(c0,new C.u(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=C.aq(F.Xp,F.Xw,b2)
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
i.z=A.R9
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b4(q,new B.bGK())){b3=A.d.cK(q,0,new B.bGL())
$.W()
b7=C.N()
b7.r=D.b8L.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aZ(new C.a9(0,0,b8,b9),b7)
a9=C.h1(b5,b5,b5,b5,D.eZW,A.a4,A.c6,b5,A.dP,A.c5)
a9.wD(b6-24)
a9.a4(c0,new C.u(12,10))}},
qk(d,e,f,g,h){var w=null,v=C.h1(w,w,w,w,C.d3(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.c6,w,A.dP,A.c5)
v.en()
v.a4(d,f)},
cD2(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aO($.W().r,A.ao,null,null,C.a([],x.v))
d.F(new C.b5(a1.a,a1.b))
w=B.hpx(a1,a2,a3)
d.F(new C.cV(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(A.aM,D.adg,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(A.aP,A.aM,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bl
u=C.N()
u.b=A.ae
u.c=a4?7:5
u.d=A.bS
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aQ(d,u)
u=C.N()
u.b=A.ae
u.c=2.4
u.d=A.bS
u.r=(a4?A.c:o).gp(0)
a0.aQ(d,u)
if(q){n=new C.Sm(new C.vy(C.x3(d),!1,C.a([],x.f5))).gI(0)
m=40+A.k.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.ju()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.ju()
h=t[u].b
h===$&&C.c()
h=A.k.E(j*22+i*m*l,h.a.length())
v.ju()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.ju()
g=t[u].b
g===$&&C.c()
f=A.k.E(h+i,g.a.length())
v.ju()
i=t[u].ME(f).a
h=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
OQ(d,e,f,g){var w,v,u,t
$.W()
w=C.N()
v=g?A.b_:A.a3
u=g?A.b4:A.a8
t=C.aq(e,A.w,0.3)
t.toString
w.saq(new C.a8(v,u,A.x,C.a([e,f,e,t],x.O),A.H6,null).aw(0,d))
return w},
avz(d,e,f){return this.OQ(d,e,f,!0)},
c1P(d,e){return this.OQ(d,A.bl,A.iA,e)},
ah_(d,e){var w,v,u
$.W()
w=C.N()
w.saq(D.aLT.aw(0,C.bU(e,4.2)))
d.af(e,4.2,w)
w=e.ad(0,D.e61)
v=e.ad(0,D.e6a)
u=C.N()
u.r=A.ee.gp(0)
u.c=1.2
d.bF(w,v,u)},
cg2(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.W(),c0=C.N()
c0.saq(D.bUG.aw(0,D.eM9))
c0.c=3.4
c0.d=A.bS
w=C.N()
w.r=A.w.j(0.45).gp(0)
w.z=G.mH
c1.hS(D.eM1,w)
if(c3){w=C.bx(D.eM8,A.kd)
v=C.N()
v.r=A.c.j(0.14).gp(0)
c1.aD(w,v)}u=B.h5C(c2)
c1.bF(new C.u(-u,0),D.e7j,c0)
c1.bF(D.e59,new C.u(u,0),c0)
t=c2.x
w=c2.b
s=D.m0.ai(0,w)&&c2.ch!==1
if(s){J.by(c1.a.save())
c1.bX(0,c2.ch)}switch(w){case"battery":b3.bBD(c1,c2)
break
case"solar":r=C.bx(D.eM4,A.ir)
c1.aD(r,b3.OQ(new C.a9(r.a,r.b,r.c,r.d),A.dy,A.bP,!1))
b9=C.N()
w=C.aq(D.bc6,A.d3,0.25+0.55*c2.f)
w.toString
v=C.aq(D.bk0,A.mm,0.3+0.4*c2.f)
v.toString
b9.saq(new C.a8(A.ax,A.aC,A.x,C.a([w,v],x.O),b4,b4).aw(0,D.a6c))
c1.aZ(D.a6c,b9)
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
c1.aQ(b9,w)
w=c2.f
b9=C.N()
b9.r=A.dQ.j(0.9).gp(0)
c1.af(D.e5f,4+4*w,b9)
break
case"crank":n=C.bx(D.eLQ,A.hg)
c1.aD(n,b3.avz(new C.a9(n.a,n.b,n.c,n.d),A.br,A.bJ))
b9=C.N()
b9.saq(D.aLU.aw(0,C.bU(A.J,12)))
c1.af(A.J,12,b9)
m=new C.u(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.N()
b9.r=A.cr.gp(0)
b9.c=5
b9.d=A.bS
c1.bF(A.J,m,b9)
b9=C.N()
b9.saq(D.efY.aw(0,C.bU(m,7)))
c1.af(m,7,b9)
b3.ah_(c1,D.e7c)
b3.ah_(c1,D.e52)
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
l.r=A.bP.gp(0)
c1.aQ(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.by(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=C.a([],w)
j=new C.aO(b9,A.ao,b4,b4,l)
l.push(new C.b5(0,-2))
l.push(new C.cV(6,-14,2,-30))
l.push(new C.cV(-2,-14,0,-2))
l.push(new C.bE())
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.gp(0)
o=l.H()
l=j.gbL().a.snapshot()
v.drawPath((j.e=new C.cC(l)).a,o)
o.delete()
v.restore()}b9=C.N()
b9.saq(D.efE.aw(0,C.bU(A.J,4.5)))
c1.af(A.J,4.5,b9)
break
case"switch":n=C.bx(D.eLX,A.ql)
b9=C.N()
b9.saq(D.aor.aw(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,b9)
b3.ah_(c1,D.S1)
b3.ah_(c1,D.aGJ)
i=c2.w?D.aGJ:D.e4N
b9=C.N()
b9.r=A.az.gp(0)
b9.c=6
b9.d=A.bS
c1.bF(D.S1,i,b9)
b9=C.N()
b9.r=(c2.w?A.b2:A.bP).gp(0)
b9.c=4
b9.d=A.bS
c1.bF(D.S1,i,b9)
b9=C.lg(D.S1,i,0.85)
b9.toString
w=C.N()
w.r=A.ay.gp(0)
c1.af(b9,5,w)
break
case"fuse":h=C.bx(D.aMs,D.aLY)
b9=C.N()
b9.r=A.f8.j(0.25).gp(0)
c1.aD(h,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.aA.gp(0)
c1.aD(h,b9)
if(!t){b9=C.N()
b9.c=1.6
b9.r=C.aq(A.bP,A.cs,c2.fx).gp(0)
c1.bF(D.aH_,D.aGI,b9)}else{b9=C.N()
b9.c=1.6
b9.r=A.c0.gp(0)
c1.bF(D.aH_,D.e7A,b9)
b9=C.N()
b9.c=1.6
b9.r=A.c0.gp(0)
c1.bF(D.e5G,D.aGI,b9)
b9=C.N()
b9.r=A.dB.gp(0)
c1.af(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.cg(new C.u(F.mF[g]*22,0),20,9)
w=C.bx(f,A.hD)
o=b3.OQ(f,A.d5,A.oz,!0).H()
b9.drawRRect(C.es(w),o)
o.delete()}break
case"pot":b9=C.N()
b9.saq(D.efQ.aw(0,C.bU(A.J,21)))
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
b9.saq(D.efC.aw(0,C.bU(A.J,13)))
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
c1.bF(new C.u(b9*3,w*3),new C.u(v*12,l*12),j)
break
case"resistor":a1=C.bx(D.aMs,D.aLY)
b9=C.N()
b9.saq(D.bXZ.aw(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=x.O
a2=C.F([47,C.a([C.b0(b5),C.b0(b6),A.w],b9),100,C.a([C.b0(b7),A.w,C.b0(b7)],b9),220,C.a([C.b0(b8),C.b0(b8),C.b0(b7)],b9),470,C.a([C.b0(b5),C.b0(b6),C.b0(b7)],b9),1000,C.a([C.b0(b7),A.w,C.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=a3[p].gp(0)
o=v.H()
b9.drawRect(C.c_(new C.a9(w,-9,w+4.5,9)),o)
o.delete()}b9=C.N()
b9.r=A.aM.gp(0)
c1.aZ(D.eMi,b9)
b9=c2.r
b3.qk(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.e6S,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.N()
v.r=A.dQ.j(0.55*w).gp(0)
v.z=A.z1
c1.af(D.wb,34,v)}n=C.cg(D.e4i,12,18)
c1.aD(C.bx(n,A.hD),b3.OQ(n,A.bl,A.e2,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.dr.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.N()
if(t)v=A.Wb
else{v=C.aq(A.e2,A.hY,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.EJ
else{l=C.aq(A.dy,A.dQ,c2.fx)
l.toString}w.saq(new C.bT(A.t0,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aw(0,C.bU(A.rD,17)))
c1.af(A.rD,17,w)
w=C.N()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.af(A.rD,17,w)
b9=b9.r
w=x.v
l=new C.aO(b9,A.ao,b4,b4,C.a([],w))
l.F(new C.b5(-9,-12))
l.F(new C.cV(-12,-4,-9,0))
v=C.N()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aQ(l,v)
v=C.N()
v.r=A.cV.gp(0)
v.c=1.4
c1.bF(D.e7w,D.e7y,v)
v=C.N()
v.r=A.cV.gp(0)
v.c=1.4
c1.bF(D.e5z,D.e5C,v)
w=C.a([],w)
a4=new C.aO(b9,A.ao,b4,b4,w)
a4.F(new C.b5(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new C.ap(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bB(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.W()
b9=C.N()
b9.b=A.ae
b9.c=1.8
if(t)w=A.aW
else{w=C.aq(A.dy,D.bcU,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aQ(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.N()
v.r=A.ay.j(0.6*w).gp(0)
v.z=D.dof
c1.af(A.rD,30,v)}w=C.N()
w.r=A.e2.gp(0)
w.c=2.4
c1.bF(D.e7C,D.e7B,w)
w=C.N()
w.r=A.e2.gp(0)
w.c=2.4
c1.bF(D.e5I,D.e5H,w)
b9=b9.r
w=x.v
a6=new C.aO(b9,A.ao,b4,b4,C.a([],w))
a6.F(new C.b5(-12,8))
a6.F(new C.ap(-12,-6))
a6.F(new C.cV(0,-26,12,-6))
a6.F(new C.ap(12,8))
a6.F(new C.bE())
v=C.N()
if(t)l=A.jj
else{l=C.aq(A.eq,D.ae2,c2.fx)
l.toString}if(t)j=A.kt
else{j=C.aq(A.kr,A.ay,c2.fx)
j.toString}v.saq(new C.a8(A.ax,A.aC,A.x,C.a([l,j],x.O),b4,b4).aw(0,D.eLm))
c1.aQ(a6,v)
v=C.N()
v.b=A.ae
v.c=1.2
v.r=A.jh.gp(0)
c1.aQ(a6,v)
v=C.N()
v.r=A.eQ.gp(0)
c1.aZ(D.eLs,v)
w=new C.aO(b9,A.ao,b4,b4,C.a([],w))
w.F(new C.b5(-7,-4))
w.F(new C.cV(-6,-12,0,-15))
b9=C.N()
b9.b=A.ae
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aQ(w,b9)
break
case"motor":a7=new C.a9(-28,-14,20,14)
c1.aD(C.bx(a7,A.hf),b3.avz(a7,A.ak,A.aL))
b9=C.N()
b9.r=A.cu.gp(0)
c1.aZ(D.eL9,b9)
b9=C.N()
b9.r=A.cr.gp(0)
c1.aZ(D.eLa,b9)
b9=c1.a
J.by(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.by(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.cg(D.e4A,15,7)
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.cs.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c_(w),o)
o.delete()
b9.restore()}w=C.N()
w.r=A.az.gp(0)
c1.af(A.J,3,w)
b9.restore()
b3.qk(c1,"M",D.e7b,A.az,14)
break
case"buzzer":a8=C.cg(A.J,42,42)
b9=C.N()
b9.saq(D.efU.aw(0,a8))
c1.hS(a8,b9)
b9=C.N()
b9.r=A.w.gp(0)
c1.af(A.J,6,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.b0.gp(0)
c1.af(A.J,6,b9)
b3.qk(c1,"+",D.e74,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.E(w.d*14,5):0
l=C.bU(A.J,24+k*5+l)
j=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2
j.r=A.bX.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c_(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.bx(D.eLT,A.hf)
w=C.N()
w.saq(D.bVE.aw(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,w)
w=C.a([],x.v)
a9=new C.aO(b9.r,A.ao,b4,b4,w)
a9.F(new C.b5(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new C.cV(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bB(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.W()
w=C.N()
w.b=A.ae
w.c=10
w.r=D.bdw.j(0.5*b9).gp(0)
w.z=A.jt
c1.aQ(a9,w)}$.W()
b9=C.N()
b9.b=A.ae
b9.c=3.2
b9.d=A.bS
b9.r=C.aq(A.lK,A4.Xe,c2.fx).gp(0)
c1.aQ(a9,b9)
break
case"capacitor":a7=new C.a9(-16,-22,16,18)
b9=C.bx(a7,A.hf)
w=C.N()
w.saq(D.bUy.aw(0,a7))
c1.aD(b9,w)
w=C.N()
w.r=A.bP.gp(0)
c1.aZ(D.eLy,w)
for(p=0;p<4;++p){b0=new C.kh(new C.er("\u2212",b4,b4,A.cO,b4,b4,b4,b4,b4,b4,new C.H(!0,A.az,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.c6,new C.js(1),b4,b4,b4,b4,A.c5,b4)
b0.en()
b0.a4(c1,new C.u(-14,-18+p*9))}b1=new C.a9(-16,-24,16,-17)
c1.aD(C.bx(b1,A.hD),b3.c1P(b1,!1))
b9=38*c2.fx
w=18-b9
$.W()
v=C.N()
v.r=A.b2.j(0.5).gp(0)
c1.aZ(new C.a9(-3,w,11,w+b9),v)
b3.qk(c1,"1F",D.wb,A.c,11)
break
case"radio":a1=C.bx(D.a6c,A.hg)
b9=C.N()
b9.saq(D.bYe.aw(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=C.N()
b9.b=A.ae
b9.c=1.4
b9.r=A.oz.j(0.6).gp(0)
c1.aD(a1,b9)
b9=C.bx(D.eLU,A.ir)
w=C.N()
w.r=A.dH.gp(0)
c1.aD(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.lK.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=C.N()
w.r=(c2.fx>0?A.h5:A.nO).gp(0)
c1.aZ(D.eLc,w)
if(c2.fx>0){w=8+A.k.E(b3.b.d*7,18)
v=C.N()
v.r=A.bz.gp(0)
v.c=1.6
c1.bF(new C.u(w,-13),new C.u(w,-3),v)}w=C.N()
w.saq(D.aLU.aw(0,C.bU(D.a5h,6)))
c1.af(D.a5h,6,w)
w=C.N()
w.r=A.oz.gp(0)
c1.af(D.e58,4,w)
w=C.N()
w.r=A.e2.gp(0)
w.c=1.8
c1.bF(D.e56,D.aGN,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bU(D.aGN,4+k*5+A.k.E(w.d*8,5))
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.4
l.r=A.nT.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c_(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.bx(D.eM3,A.hf)
v=C.N()
v.r=L.ml.gp(0)
c1.aD(w,v)
b2=C.bx(D.eM0,A.hD)
if(c2.fx>0&&!c2.x){b9=c1.a
J.by(b9.save())
b9.clipRRect(C.es(b2),$.pu(),!0)
b9.translate(-33,-21)
E.h1N(c1,D.eRO,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.N()
b9.r=A.b2.gp(0)
c1.af(D.e5k,1.6,b9)}else{w=C.N()
w.r=D.ve.gp(0)
c1.aD(b2,w)
b9=new C.aO(b9.r,A.ao,b4,b4,C.a([],x.v))
b9.F(new C.b5(-33,-21))
b9.F(new C.ap(-10,-21))
b9.F(new C.ap(-33,0))
b9.F(new C.bE())
w=C.N()
w.r=A.c.j(0.05).gp(0)
c1.aQ(b9,w)}b9=C.N()
b9.r=A.br.gp(0)
c1.aZ(D.eLr,b9)
break}B.i8P(c1,c2,b3.b.d,b3.gc6m())
if(t)b3.qk(c1,"\u2716",D.e7F,A.ay,14)
if(s)c1.a.restore()},
bBD(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.a9(-28,-13,28,13)
d.aD(C.bx(w,A.ql),m.avz(w,A.dy,A.iV))
v=new C.a9(-22,-13,22,13)
$.W()
u=C.N()
u.saq(D.aok.aw(0,v))
d.aZ(v,u)
u=C.N()
u.r=A.dU.gp(0)
d.aZ(D.eLH,u)
t=new C.a9(28,-5,34,5)
d.aD(C.bx(t,A.he),m.OQ(t,A.dy,A.iA,!0))
m.qk(d,"+",D.e4S,A.aM,11)
m.qk(d,"\u2212",D.e7d,A.ad,11)
m.qk(d,C.t(l===A.k.k6(l)?A.k.V(l):l)+"V",D.e6Y,A.aM,13)
if(l===1.5){u=C.N()
u.r=A.bE.gp(0)
d.aZ(D.eLG,u)
u=e.as
s=C.N()
s.r=C.aq(A.ay,A.b2,u).gp(0)
d.aZ(new C.a9(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qk(d,"FLAT",D.e6R,A.c9,9)}if(l>2){u=C.N()
u.r=A.b0.gp(0)
u.c=1
d.bF(D.e4o,D.aGs,u)
m.qk(d,l>3?"3 cells":"2 cells",D.e6X,A.aA,8)}}else if(l<=9){r=new C.a9(-22,-17,22,17)
u=C.bx(r,A.ql)
$.W()
s=C.N()
s.saq(D.bXM.aw(0,r))
d.aD(u,s)
s=C.N()
s.r=A.cZ.gp(0)
d.aZ(D.eLI,s)
for(u=d.a,q=0;q<2;++q){p=F.axG[q]
s=p<0?5:3.6
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(D.aLT.aw(0,C.bU(new C.u(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.qk(d,"9V",D.e6T,A.c,16)}else{r=new C.a9(-34,-16,34,16)
u=C.bx(r,A.ir)
$.W()
s=C.N()
s.saq(D.aok.aw(0,r))
d.aD(u,s)
s=C.N()
s.r=A.bN.gp(0)
d.aZ(D.eM2,s)
for(u=d.a,q=0;q<2;++q){s=C.bx(C.cg(new C.u(F.a35[q],-20),8,10),A.he)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.cr.gp(0)
n=o.H()
u.drawRRect(C.es(s),n)
n.delete()}m.qk(d,"+",D.e4Z,A.ay,10)
m.qk(d,"12V",D.e6U,A.az,15)}},
av(d){return!0}}
B.mz.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=C.T(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new B.tr(o,r,q,p)
n.apz(o,r,q,p)
k.push(n)
J.iu(s[4],new B.ckp(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.K)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.ak9(m,u[1],l,u[3])}}}
B.aij.prototype={
T(){var w=x.N
return new B.aik(A.J,A.av,C.T(w,x.gl),C.aX(w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aik.prototype={
adC(d){var w=this,v=w.as
if(v!=null)v.a6(0)
w.m(new B.bGo(w,d))
w.as=C.cM(A.lk,new B.bGp(w))},
q(){var w=this.as
if(w!=null)w.a6(0)
w=this.ch
if(w!=null)w.a6(0)
this.bru()},
a_y(d,e){return this.cdZ(d,e)},
b_C(d){return this.a_y(d,!1)},
cdZ(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$a_y=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.r4:A.xx
p=d.b
w=3
return C.b(E.h24(s,r,p,d.ax<3.2,q,$.qf().h(0,p).b),$async$a_y)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return C.h(u,v)}})
return C.i($async$a_y,v)},
cqC(d){var w=this,v=new C.S(Date.now(),0,!1),u=w.at.c8(0,d.a,new B.bGq()),t=J.cF(u)
t.L(u,v)
t.bq(u,new B.bGr(v))
if(t.gM(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a6(0)
w.a0T(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a6(0)
w.ch=C.cM(A.ku,new B.bGs(w,u,d))}},
a_e(d){return this.ccm(d)},
ccm(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$a_e=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.i9Y(s,d.b,A.k.V(A.k.E(t.a.c.d*0.12,1)*100)),$async$a_e)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$a_e,v)},
a0T(d){return this.coe(d)},
coe(d){var w=0,v=C.j(x.H),u=this,t
var $async$a0T=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bS(F.kR,null,new B.bGm(u,d),t,!0,!0,!1,A.kC,!1,!1,x.H),$async$a0T)
case 2:return C.h(null,v)}})
return C.i($async$a0T,v)},
a_(){this.a1()
this.ben()
this.lg()},
ben(){this.a.c.e=new B.bGH(this)},
lz(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.v3(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
r=D.m0.h(0,s.b)
if((r==null?null:r.b)!==D.zr)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.L(0,s.a)
q.a_y(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)E.dE(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)E.dE(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cG.aj()<0.5
else u=!1
if(u)E.dE(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){E.dE(900+A.cG.aA(800),"",90,0,0.1,o)
if(A.cG.aj()<0.35)E.dE(300+A.cG.aA(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cG.aj()<0.4
else u=!1
if(u)E.dE(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)E.dE(330+A.o.E(110*A.k.bn(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dE((A.k.bn(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)E.dE(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)E.dE(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cG.aj()<0.5
else u=!1
if(u)E.dE(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)E.dE(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)E.dE(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new B.bGI())},
b6B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
b0i(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.U(w).k("dz<1>"),w=new C.dz(w,v),w=new C.bQ(w,w.gM(0),v.k("bQ<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.m0.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cD3(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
h=B.hpx(new C.u(k,n),new C.u(i,l),p)
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
adA(){this.a.toString
this.m(new B.bFS())},
bog(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cYX[v]
if(!A.d.b4(p.a.c.a,new B.bGJ(u,w))){o=new C.u(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?K.I9:o
s=s?K.I9:o
q=t.ajp(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dE(1200,"",50,0,0.3,"tri")
p.adA()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.Qp[v].a)
u=w.length
t=u>8
s=t?A.d.dr(w,0,A.o.an(u+1,2)):w
r=t?A.d.fN(w,A.o.an(w.length+1,2)):A.T
q=n.a.d
if(q!=null){w=C.a3(q).k("cu<1>")
w=C.C(new C.cu(q,w),w.k("J.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.K)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.b07(s,!0))
n.a.toString
if(t)w.push(n.b07(r,!0))
w.push(C.E(C.cq(new B.bGG(n,q,m)),1))
return C.w(w,A.m,null,A.e,A.j,0,A.p)},
b07(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.K)(d),++v){u=d[v]
t=$.qf()
s=t.h(0,u).d.j(0.14)
r=new C.aT(14,14)
q=new C.ay(t.h(0,u).d.j(0.5),1,A.q,-1)
m.push(C.aC(p,C.p(p,C.w(C.a([new C.y(t.h(0,u).c,p,A.zH,p,p,p,p,p,p,p,p,p),new C.y(t.h(0,u).b,p,A.nw,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.b9,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bO(q,q,q,q),new C.bp(r,r,r,r),p,p,A.n),p,p,p,F.tG,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bFT(this,u),p,p,p,p,p,p,!1,A.a7))}return C.p(p,C.cw(m,p,A.h8,p,p,A.aO,!1),A.f,p,p,new C.o(F.AD,p,new C.bO(A.Y,A.Y,new C.ay(o,1,A.q,-1),A.Y),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aYG(d){var w=null,v=C.m(18)
return C.p(w,d,A.f,w,w,new C.o(F.ac0,w,C.I(A.bE,A.q,1),v,w,w,A.n),w,w,w,w,F.ahm,w,w,w)},
cg3(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qf().h(0,o),m=d.dy,l=d.fr,k=new B.bGb(q,n),j=C.d(n.c,p,p,p,p,p,p,A.Dp,p,p,p),i=n.b,h=n.d,g=x.p
i=C.B(C.a([j,A.ab,C.E(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bLV,p,p,p,new B.bFZ(q,d),p,p,p,p,"Remove part",A.cc),C.aH(p,p,p,p,A.GA,p,p,p,new B.bG_(q),p,p,p,p,p,A.cc)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,F.Du,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.f7v,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ab(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ab(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ab(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.at,w,A.am,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.c9:A.aM,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bci(d)
if(v!=null){l=(d.x?A.ay:A.aF).j(0.14)
j=C.m(10)
i=C.I((d.x?A.ay:A.aF).j(0.5),A.q,1)
m.push(new C.D(A.i1,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fdT,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cp,p,p,p),p))}if(B.h_T(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dA("CH "+t,d.at===u,new B.bG0(q,d,u),p,h,p))}l=C.bW(A.bA,l,A.bq,4,6)
l=C.a([A.am,l,A.at,C.d(q.a.c.Ct(d)?"Showing: "+F.Q0[A.o.E(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.h2,p,p,p)],g)
if(q.a.c.Ct(d))l.push(new B.fi(A.G8,"Open big screen",new B.bG3(q,d),h,p))
A.d.v(m,l)}if(D.m0.ai(0,o)&&!B.h_T(o)){l=C.a([A.am,C.d(q.a.c.Ct(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.h2,p,p,p)],g)
if(q.a.c.Ct(d))l.push(new B.fi(A.NI,"Open the "+$.qf().h(0,o).b,new B.bG4(q,d),h,p))
A.d.v(m,l)}if(D.m0.ai(0,o))A.d.v(m,C.a([A.am,new B.fi(A.BH,"Make it bigger (or tap it 4 times)",new B.bG5(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ab(d.db,1)
if(q.a.c.Ct(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.am,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ab(i,1)+" V",p,p,p,p,p,p,D.f8k,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.dez[s]
j=r===A.k.k6(r)?A.k.V(r):r
l.push(new B.dA(C.t(j)+" V out",d.e===r,new B.bG6(q,d,r),p,h,p))}i.push(new C.D(A.lP,C.bW(A.bA,l,A.bq,0,6),p))}if(o==="regulator")i.push(D.fw1)
A.d.v(m,i)}if(q.a.c.Lw(d)&&!d.x){l=A.k.ab(d.cx,2)
j=A.k.ab(q.a.c.zE(d),2)
i=q.a.c
w=i.amK(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.amK(d)?A.c9:A.eu,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.m(4)
w=A.k.D(d.cx/q.a.c.zE(d),0,1)
i=q.a.c.amK(d)?A.ay:A.b2
m.push(new C.D(A.i1,C.w(C.a([l,A.cS,C.bw(j,C.m3(A.bE,p,p,5,p,w,new C.lX(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.D(A.i1,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.f2k,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d4u[s]
j=r===1.5?"1.5 V (rechargeable)":C.t(r)+" V"
l.push(new B.dA(j,d.e===r,new B.bG7(q,d,r),p,h,p))}m.push(C.bW(A.bA,l,A.bq,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cWq[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new B.dA(j,d.r===r,new B.bG8(q,d,r),p,h,p))}m.push(C.bW(A.bA,l,A.bq,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bG9(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bGa(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bG1(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bG2(d)))
if(o==="crank")m.push(D.fry)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.h2,p,p,p))
return q.aYG(new C.cT(D.aZL,C.c9(C.w(m,A.F,p,A.e,A.P,0,A.p),A.r,p,A.y,p,p,p,p,A.ag),p))}}
B.bac.prototype={}
B.UK.prototype={
T(){return new B.aCH(B.h5B(),new C.cs(null,x.gJ),C.aX(x.S))}}
B.aCH.prototype={
a_(){this.a1()
$.aW.c_$.push(this)
this.adB()},
adB(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$adB=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.fvL(),$async$adB)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.i9a(t.d,r)
if(s!=null){t.m(new B.dRI(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$adB,v)},
ET(){var w,v=this
if(!v.as)return
w=B.i_J(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bD7(w)},
j0(d){if(d!==A.fv)this.ET()},
q(){$.aW.hJ(this)
this.ET()
this.a2()},
c6o(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.U(v).k("a_<1>")
t=new C.a_(v,new B.dRR(q),u).gM(0)
s=new C.a_(v,new B.dRS(),u).gM(0)
r=new C.a_(v,w.gcS3(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dRT(q,t,s,r))}if(A.o.E(q.w,45)===0)q.ET()
if(A.o.E(q.w,10)===0){w=q.f
$.ahw()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.ahw()[q.f].c.$1(q.d)){w.L(0,q.f)
B.BC("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dRU())
q.ET()
w=q.c
w.toString
w=C.X6(w)
if(w!=null)w.U(C.b2(p,p,p,p,p,A.r,p,C.d("\u2705 Challenge done: "+$.ahw()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mo,p,p,p,p,p,p,p,p,p,p))}},
agg(){var w=0,v=C.j(x.H),u=this,t
var $async$agg=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.cb(null,null,!0,null,new B.dRH(u),t,null,!0,!0,x.H),$async$agg)
case 2:return C.h(null,v)}})
return C.i($async$agg,v)},
aYF(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.m(12),t=C.I(f.j(0.45),A.q,1)
u=C.a([C.ao(w,C.p(w,C.X(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aC(w,C.ht(new C.a7(40,38,new C.an(A.W,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7)},
aYE(d,e,f,g){return this.aYF(d,e,f,g,null)},
aqd(d,e,f,g){var w=null,v=f.j(0.1),u=C.m(10),t=C.I(f.j(0.4),A.q,1)
return C.E(C.aC(w,C.p(w,C.B(C.a([C.X(d,f,w,w,w,15),A.ec,new C.dq(1,A.co,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b9,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7),1)},
aez(){var w=0,v=C.j(x.H),u=this,t
var $async$aez=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a6(t,!1).ck(C.e8(new B.dRD(u),!1,null,x.H)),$async$aez)
case 2:t=u.e.gbj()
if(t!=null)t.ben()
if(u.c!=null)u.m(new B.dRE())
u.ET()
return C.h(null,v)}})
return C.i($async$aez,v)},
bEF(){var w,v,u,t,s=null,r=this.f
$.ahw()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bi:A.ay
u=C.m(9)
t=C.I(F.AD,A.q,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wr,s,s,s),s,s,s),A.f,s,D.aZS,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eS,s,s,s)},
ahm(){var w=0,v=C.j(x.H),u=this,t
var $async$ahm=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bS(F.kR,null,new B.dRQ(u),t,!0,!0,!0,A.kC,!1,!1,x.H),$async$ahm)
case 2:return C.h(null,v)}})
return C.i($async$ahm,v)},
c6p(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aC(r,C.p(r,D.bN8,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dRW(d),r,r,r,r,r,r,!1,A.a7),o=C.m(11)
o=C.p(r,D.b4x,A.f,r,r,new C.o(A.bo,r,C.I(A.aP.j(0.45),A.q,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.w(C.a([C.B(C.a([p,A.ab,o,A.ab,C.E(C.w(C.a([D.fu6,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f6:A.fU,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.awO(s.gcc3(),r),A.rM,s.aYE(A.y7,"Construction Lab: real 3D wiring, plumbing and a house",A.cs,new B.dRX(s,d)),s.aYF(A.ln,"Challenges",A.aM,s.gctb(),s.bEF()),s.aYE(A.NB,"How to play",A.aP,new B.dRY(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.am,C.B(C.a([s.aqd(A.o3,"Circuits",A.bu,s.gcm2()),A.bp,s.aqd(A.oP,"Repair",A.aM,new B.dRZ(s)),A.bp,s.aqd(D.y8,"Clear",A.c9,new B.dS_(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.P,0,A.p),A.f,r,r,new C.o(F.AD,r,new C.bO(A.Y,A.Y,new C.ay(q,1,A.q,-1),A.Y),r,r,r,A.n),r,r,r,r,D.bwQ,r,r,r)},
B(d){var w=this,v=null
$.arn="tech"
return C.c7(v,A.bZ,C.bm(!0,C.w(C.a([w.c6p(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.E(B.h4t(w.d,w.e,w.gc6n(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
B.awO.prototype={
T(){return new B.b8o(null,null)}}
B.b8o.prototype={
gaws(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.U,null,1,null,v)
w.cI(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.gaws().q()
this.bsK()},
B(d){var w=null,v=this.a.c
return C.aC(w,C.ht(new C.a7(42,42,C.c6(this.gaws(),new B.cBa(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a7)}}
B.b8n.prototype={
a4(d,e){var w,v,u,t=null,s=e.ec(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.W()
w=C.N()
w.r=A.b6.j(0.25+0.15*o).gp(0)
w.z=G.mH
d.af(s,r+2+o*2,w)
w=C.N()
w.saq(D.efP.aw(0,C.bU(s,r)))
d.af(s,r,w)
v=C.N()
v.b=A.ae
v.c=2.2
v.saq(new C.fV(A.A,0,6.283185307179586,A.x,D.cO_,t,new C.mn(p)).aw(0,C.bU(s,r)))
d.af(s,r,v)
p=new B.cB9(d)
p.$3(s.ad(0,A.rD),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.e5T),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.e7J),2.6,0.5+0.5*Math.cos(q))
u=C.h1(t,t,t,t,D.f_1,A.a4,A.c6,t,A.dP,A.c5)
u.en()
u.a4(d,s.ad(0,new C.u(-u.b.c/2,5)))},
av(d){return d.b!==this.b}}
B.ax6.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.ax7.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.brt()}}
B.aJ6.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bwr.prototype={}
B.fN.prototype={}
B.J9.prototype={
a5(){return"ScreenStyle."+this.b}}
B.m6.prototype={}
B.Ur.prototype={
T(){return new B.biQ(null,null)}}
B.biQ.prototype={
ga8U(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.nZ,null,1,null,v)
w.cr(0)
v.d!==$&&C.bL()
v.d=w
u=w}return u},
q(){this.ga8U().q()
this.buA()},
gRB(){var w=this.ga8U().y
w=w==null?null:A.o.an(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.m0.h(0,this.a.c)
if(v==null)v=D.aMJ
return C.c7(w,U.Ls,C.bm(!0,new C.an(A.W,w,A.aa,A.r,C.a([C.av(v.b===D.zs?this.bGQ(v):this.ciO(v),w,w,w),C.ao(w,C.aH(w,w,w,w,A.mC,w,w,w,new B.dNE(d),w,w,w,C.nz(w,A.aW,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.f0C,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c6q(d){var w
A:{if(D.Ix===d){w=0.46153846153846156
break A}if(D.uF===d){w=0.45
break A}if(D.wh===d){w=0.9259259259259258
break A}if(D.SE===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
ciO(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.Ix
A:{if(D.Ix===p){w=44
break A}if(D.uF===p){w=30
break A}if(D.wh===p){w=22
break A}if(D.SE===p){w=26
break A}w=14
break A}v=C.c6(this.ga8U(),new B.dND(this,w,d,o),q)
if(p===D.a6l)v=new C.Dh(D.bxs,v,q)
p=this.c6q(p)
u=o?4:5
t=d.c
s=C.aq(t,A.c,o?0.25:0.08)
s.toString
r=C.aq(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.m(w)
s=C.a([new C.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fI(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.m(w-3),q,q,A.n),q,q,q,q,A3.FF,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a8(A.ax,A.aC,A.x,r,q,q),A.n),q,q,q,D.brb,new C.Q(u,u,u,u),q,q,q),q)},
b5P(d){var w,v,u,t=null,s=new C.S(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bn(this.gRB()*0.4),0,100),q=d.b===D.Ix,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aU(A.o.u(C.dk(s)),2,"0")+":"+A.a.aU(A.o.u(C.h0(s)),2,"0"),t,t,t,t,t,t,A.rS,t,t,t),A.b7],x.p)
for(w=0;w<4;++w){v=new C.aT(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bp(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bxa,t,t,t,3))}n.push(A.db)
n.push(D.fn_)
n.push(A.bp)
v=C.I(A.ad,A.q,1)
u=C.m(4)
n.push(C.p(t,new C.bI(A.a3,t,t,C.DJ(A.A,C.p(t,t,A.f,t,t,new C.o(A.b2,t,t,C.m(2),t,t,A.n),t,t,t,A3.FF,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qo)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.fec,t,t,t))
return new C.D(new C.Q(p,12,o,2),C.B(n,A.m,t,A.e,A.j,0,t,t),t)},
aup(d,e,f){var w,v=null,u=d.d,t=C.aq(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.m(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.d9Z,new C.a8(A.ax,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.at,C.d(d.a,v,1,A.a2,v,v,v,D.f54,v,v,v)],w))
return C.aC(v,C.w(t,A.m,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dNz(this,d),v,v,v,v,v,v,!1,A.a7)},
bXX(d,e){return this.aup(d,e,!0)},
bXF(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.SE||n===D.wh,l=d.d,k=C.aq(l,A.w,0.55)
k.toString
l=C.aq(l,A.kp,0.5)
l.toString
l=C.a([k,A.dx,l],x.O)
k=p.b5P(d)
w=m?190:138
v=C.m(24)
u=C.I(A.b0,A.q,1)
w=C.aC(o,C.p(o,C.bw(C.m(23),C.b3(o,o,o,new B.aej(0,p.gRB(),o),A.f3),A.aq),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hO,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dNx(p),o,o,o,o,o,o,!1,A.a7)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<8;++s){r=F.k8[s]
t.push(new C.cp(A.A,o,o,p.bXX(r,m?58:54),o))}k=C.a([k,A.am,w,A.ac,C.E(C.m0(0.92,t,v,8,12,A8.vs,o,!1),1)],u)
if(n!==D.a6l){n=A.c.j(0.16)
w=C.m(28)
u=C.a([],u)
for(v=C.db(F.k8,0,C.dG(4,"count",x.S),x.gD),t=v.$ti,v=new C.bQ(v,v.gM(0),t.k("bQ<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.aup(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.B(u,A.m,o,A.qa,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.bs0,T.aiP,o,o,o))}return C.p(o,C.w(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a8(A.ax,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bAg(d,e){var w=null
return C.p(w,C.w(C.a([this.b5P(d),C.E(C.b3(w,w,w,new B.aej(e,this.gRB(),w),A.f3),1),C.aC(w,C.p(w,C.av(C.d(F.k8[e].a,w,w,w,w,w,w,A0.J0,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dNs(this),w,w,w,w,w,w,!1,A.a7)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bGQ(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.aq(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.m(r?26:14)
u=C.a([new C.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fI(1.5384615384615383,C.p(t,C.c6(this.ga8U(),new B.dNv(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a8(A.ax,A.aC,A.x,w,t,t),A.n),t,t,t,D.bwL,new C.Q(8,8,8,s),t,t,t),t)}}
B.buw.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.W()
w=C.N()
v=this.c
u=C.aq(v,A.w,0.6)
u.toString
t=C.aq(v,A.kp,0.4)
t.toString
w.saq(new C.a8(A.ax,A.aC,A.x,C.a([u,A.dx,t],x.O),null,null).aw(0,new C.a9(0,0,n,m)))
d.aZ(new C.a9(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=v.j(0.1).gp(0)
r.z=D.dok
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
av(d){return!0}}
B.aej.prototype={
a4(d,e){return E.Rf(d,e,this.b,this.c)},
av(d){return!0}}
B.aKT.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.aVZ.prototype={}
B.Vf.prototype={
T(){return new B.bjp(C.T(x.S,x.N),A.av,C.a([],x.U),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjp.prototype={
gvr(){var w=this.f
return w===$?this.f=B.h_Z(0):w},
a_(){this.a1()
this.lg()
B.zq("laser_maze").bA(new B.ea_(this),x.P)},
lz(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.z(u.a,t)
if(t>0.8)A.d.cw(w,v)}this.m(new B.ea0())},
adG(d){var w=this
w.m(new B.e9Q(w,d))
B.vU("laser_maze",C.F(["best",w.e,"level",w.d],x.N,x.z))},
c6G(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.gdE()/7
u=v*7
t=(w.a-u)/2
s=A.k.D((w.b-u)/2,8,300)
r=A.k.bn((d.a-t)/v)
q=A.k.bn((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.gvr().b.t(0,p)||p===o.gvr().e||o.gvr().d.ai(0,p))return
o.m(new B.e9R(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cq(new B.e9U(t,B.hpq(t.gvr(),t.r))),q=x.p,p=C.a([new B.dA("Clear mirrors",!1,new B.e9V(t),A.k6,A.aM,s),new B.dA("Skip",!1,new B.e9W(t),D.bFT,A.aP,s)],q)
if(t.d>0)p.push(new B.dA("Back",!1,new B.e9X(t),D.bFU,A.aP,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dA(""+u,v===t.d,new B.e9Y(t,v),s,A.ay,s))}return B.jI(A.ay,A.hc,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.w(C.a([new B.eR(p,s,s),new B.eR(w,"LEVEL",s)],q),A.m,s,A.e,A.P,0,A.p))}}
B.bgp.prototype={
a4(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gdE()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.dgT(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bx(new C.a9(a5,a6,a8,a4),A.kd)
v=$.W()
u=C.N()
u.r=L.ml.gp(0)
a9.aD(w,u)
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
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.ea(a8,a8.r,C.a3(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.bx(C.cg(p,u,u),A.hg)
o=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(D.bYk.aw(0,C.cg(p,a3,a3)))
q=o.H()
w.drawRRect(C.es(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aO(v.r,A.ao,a2,a2,u)
n.F(new C.b5(a7.$1(A.d.gI(a8)).a,a7.$1(A.d.gI(a8)).b))
for(a8=C.db(a8,1,a2,C.U(a8).c),v=a8.$ti,a8=new C.bQ(a8,a8.gM(0),v.k("bQ<ak.E>")),v=v.k("ak.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.ap(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bB(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.W()
a8=C.N()
a8.b=A.ae
a8.c=14
a8.e=A.fE
a8.r=A.ay.j(0.28+0.08*Math.sin(a1.f*12)).gp(0)
a8.z=A.lv
a9.aQ(n,a8)
a8=C.N()
a8.b=A.ae
a8.c=4
a8.e=A.fE
a8.r=D.ae2.gp(0)
a9.aQ(n,a8)
a8=C.N()
a8.b=A.ae
a8.c=1.6
a8.e=A.fE
a8.r=A.c.gp(0)
a9.aQ(n,a8)}for(a8=a4.c,a8=C.ea(a8,a8.r,C.a3(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.aM.j(0.5).gp(0)
m.z=A.Cs
q=m.H()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
m.r=(l?A.aM:A.br).gp(0)
q=m.H()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?A.c:A.aA
i=new C.kh(new C.er("\u2605",a2,a2,A.cO,a2,a2,a2,a2,a2,a2,new C.H(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a4,A.c6,new C.js(1),a2,a2,a2,a2,A.c5,a2)
i.en()
j=i.b
h=j.c
j=j.a.c
i.a4(a9,new C.u(m-h/2,k-j.gbd(j)/2))}g=new B.dgW(a7,a3,a9)
a1.c.bK(0,new B.dgU(g))
a4.d.bK(0,new B.dgV(g))
f=a7.$1(a4.e)
a4=C.bx(C.cg(f,o,a3*0.8),A.hg)
a8=C.N()
a8.r=A.ay.gp(0)
a9.aD(a4,a8)
v=f.ad(0,new C.u(v,0))
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
av(d){return!0}}
B.Vh.prototype={
T(){var w=x.n
return new B.aDl(A.cG,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bx,0,C.a([],x.X),null,null)}}
B.aDl.prototype={
a_(){this.a1()
this.lg()
B.zq("light_mixer").bA(new B.eai(this),x.P)},
lz(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aYK()
w.m(new B.eaj())},
aww(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aA(5)/4)
u.e=t
if(A.d.d7(t,new B.ea3()))u.e[w.aA(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aYK(){var w,v,u=this
if(u.z!=="play")return
w=A.k.V(A.k.D(1-B.hkJ(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.vX(v,A.o.an(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.vU("light_mixer",C.F(["best",v],x.N,x.z))}}else u.z="result"},
gcy8(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.F(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cPZ[A.o.E(A.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cq(new B.eac(v,B.hkJ(v.e,t))),r=t[0]
r=B.hE(A.ay,""+A.k.V(r*100)+"%","Red",1,0,new B.ead(v),r)
w=t[1]
w=B.hE(A.bi,""+A.k.V(w*100)+"%","Green",1,0,new B.eae(v),w)
t=t[2]
return B.jI(A.b8,A.hc,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.w(C.a([r,w,B.hE(A.d3,""+A.k.V(t*100)+"%","Blue",1,0,new B.eaf(v),t),new C.bI(A.a8,u,u,new B.fi(A.hn,"Lock it in",new B.eag(v),A.b2,u),u)],x.p),A.m,u,A.e,A.P,0,A.p))}}
B.bgE.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bx(new C.a9(0,0,n,m),A.qk)
$.W()
w=C.N()
w.r=A.w.gp(0)
d.aD(l,w)
w=d.a
J.by(w.save())
w.clipRRect(C.es(C.bx(new C.a9(0,0,n,m),A.qk)),$.pu(),!0)
v=e.gdE()*0.3
u=e.ec(A.J)
l=-v*0.55
t=v*0.45
s=[u.ad(0,new C.u(0,l)),u.ad(0,new C.u(l,t)),u.ad(0,new C.u(v*0.55,t))]
r=[A.Eq,I.ad3,I.adu]
d.le(new C.a9(0,0,n,m),C.N())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.a=A.nF
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bx(new C.a9(0,0,n,m),A.qk)
m=C.N()
m.b=A.ae
m.c=2
m.r=A.b0.gp(0)
d.aD(n,m)},
av(d){return!0}}
B.aLk.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bww.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bv3()}}
B.aLl.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bwx.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bv4()}}
B.btl.prototype={}
B.a7Z.prototype={
B(d){var w=null
return C.c7(C.eD(w,w,w,!0,!0,D.aef,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.ani,w,w,w,new B.cf2(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fCC,w,w,w,1,w,!0),D.aef,C.cw(C.a([D.e9_,C.cq(new B.cf3())],x.p),w,D.bt0,w,w,A.ag,!1),w,!1,!1,w,w)}}
B.W7.prototype={
T(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aEc(w,new C.as(A.as,$.aw()),$,A.bx,0,C.a([],x.X),null,null)}}
B.aEc.prototype={
a_(){this.a1()
this.lg()},
b3O(d){var w=this.d.length
return A.o.E(A.k.bn(A.k.E(A.k.E(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
lz(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b3O(v.f)
if(w!==v.x){v.x=w
B.lf("bell",24+A.o.E(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.eJx(v))
B.BC("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c7D(){if(this.d.length<2)return
this.m(new B.eJt(this))},
aZ5(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.eJs(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc7C(),p=s.d,o=C.E(C.aC(r,C.b3(r,r,r,new B.buI(p,s.f,r),A.f3),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a7),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.w(C.a([o,new C.a7(r,40,C.av(C.d(n,r,r,r,r,r,r,D.fcn,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.awV[A.o.E(v,8)].j(0.9)
t=new C.aT(20,20)
o.push(C.aC(r,C.p(r,new C.y(p[v],r,D.fbE,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bp(t,t,t,t),r,r,A.n),r,r,r,A.fB,A.h9,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new B.eJv(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a7))}p=A.c.j(0.07)
return B.jI(A.aM,A.hc,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.w(C.a([new B.eR(o,r,r),C.B(C.a([C.E(C.aM(r,A.T,!1,r,!0,A.r,r,C.aN(),s.e,r,r,r,r,r,2,C.bs(r,new C.b4(4,C.m(14),A.Y),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kI,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ai,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.eJw(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dp,!0,A.a4,r,A.an,r,r,r,r),1),A.ab,new B.fi(A.hz,"Add",s.gc7A(s),A.c,r),A.bp,new B.fi(A.mv,"Spin",q,A.b2,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.P,0,A.p))}}
B.buI.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.W()
w=C.N()
w.r=D.baa.gp(0)
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
n.r=D.awV[A.o.E(q,8)].gp(0)
m=n.H()
n=p*57.29577951308232
f.drawArc.apply(f,[C.c_(o),n,s,!0,m])
m.delete()
o=C.bU(d,a0)
l=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.H()
f.drawArc.apply(f,[C.c_(o),n,s,!0,m])
m.delete()
J.by(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.ap(o,0,11)+"\u2026"
k=new C.kh(new C.er(o,i,i,A.cO,i,i,i,i,i,i,D.f_P),A.a4,A.c6,new C.js(1),i,i,i,i,A.c5,i)
k.en()
o=k.b
n=o.c
o=o.a.c
k.a4(a1,new C.u(a0-n-16,-o.gbd(o)/2))
f.restore()}f=C.N()
f.r=D.adU.gp(0)
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
a1.aQ(j,e)
e=C.N()
e.b=A.ae
e.c=2
e.r=A.aW.gp(0)
a1.aQ(j,e)},
av(d){return!0}}
B.UR.prototype={
T(){return new B.biZ($,A.bx,0,C.a([],x.X),null,null)}}
B.biZ.prototype={
a_(){this.a1()
this.lg()},
lz(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.BC("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a4M(900,new B.dTW())}w.m(new B.dTX())},
aZ7(d){return this.m(new B.dTR(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aU(A.o.u(A.k.an(m,60)),2,"0")
v=A.a.aU(A.o.u(A.o.E(A.k.dA(m),60)),2,"0")
m=C.b3(n,n,n,new B.bpx(l,A.c9,n),A.aNZ)
u=C.d(w+":"+v,n,n,n,n,n,n,D.f42,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a7(280,280,new C.an(A.A,n,A.aa,A.r,C.a([m,C.w(C.a([u,C.d(t,n,n,n,n,n,n,D.f37,n,n,n),A.at,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.wn,n,n,n)],s),A.m,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.d79[r]
u.push(new B.dA(""+q+" min",o.d===q,new B.dTT(o,q),n,A.c9,n))}m=o.f
p=m?A2.yg:A.iI
m=m?"Pause":"Start"
return B.jI(A.c9,A.hc,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.w(C.a([new B.eR(u,n,n),new B.eR(C.a([new B.fi(p,m,new B.dTU(o),A.b2,n),new B.fi(A.k6,"Reset",new B.dTV(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.P,0,A.p))}}
B.bpx.prototype={
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
v.saq(new C.fV(A.A,-1.5707963267948966,4.71238898038469,A.x,C.a([u,t,u],x.O),null,null).aw(0,C.bU(s,r)))
d.f9(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
av(d){return d.b!==this.b}}
B.U3.prototype={
T(){return new B.biB($,A.bx,0,C.a([],x.X),null,null)}}
B.biB.prototype={
a_(){this.a1()
this.lg()},
lz(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.R3.h(0,p.d)
w.toString
v=A.d.fd(w,new B.dEO())
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
B.lf("flute",D.bYX[t]+5,1400,0.35)}p.m(new B.dEP())},
gc7G(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.K0("Press Start",0.5)
w=D.R3.h(0,this.d)
w.toString
v=A.d.fd(w,new B.dEJ())
u=A.k.E(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.K0("Breathe in",0.5+0.5*A.dC.az(0,p))
case 1:return new C.K0("Hold",1)
case 2:return new C.K0("Breathe out",1-0.5*A.dC.az(0,p))
default:return new C.K0("Hold",0.5)}}}return new C.K0("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc7G(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hw.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ac(0,A.G,A.hw.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.zJ,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kI,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a7(300,340,new C.an(A.A,q,A.aa,A.r,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.R3.gee(D.R3));w.C();){v=w.gR(w)
o.push(new B.dA(v,r.d===v,new B.dEM(r,v),q,A.hw,q))}w=r.e
v=w?A.NR:A.iI
w=w?"Stop":"Start"
o.push(new B.fi(v,w,new B.dEN(r),A.b2,q))
return B.jI(A.hw,A.hc,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eR(o,q,q))}}
B.aHB.prototype={}
B.UI.prototype={
T(){return new B.biT(new C.cs(null,x.A),C.a([],x.au),A.az,A.c)}}
B.biT.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.mD,s,s,s,new B.dRc(t,d),s,s,s,s,"Share",s)],r),p=C.bw(C.m(18),new C.ew(C.aC(s,C.b3(s,s,s,new B.bkV(t.e,t.x,s),A.f3),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dRd(t),new B.dRe(t),s,s,s,s,s,s,s,s,s,new B.dRf(t),s,s,s,s,!1,A.a7),t.d),A.aq),o=C.a([],r)
for(w=0;w<9;++w){v=D.cPl[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.F7(v,u,new B.dRg(t,v),!1,s))}u=t.r
return B.jI(A.bC,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.D(A.bR,p,s),"DRAW PAD",C.w(C.a([new B.eR(o,s,s),B.hE(A.bC,""+A.k.V(u),"Brush",30,2,new B.dRh(t),u),new B.eR(C.a([new B.dA("Eraser",t.w,new B.dRi(t),A.G_,A.bC,s),new B.fi(A.rj,"Undo",new B.dRj(t),A.c,s),new B.fi(A.e6,"Clear",new B.dRk(t),A.c,s),new B.fi(A.Nx,"Paper",new B.dRl(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.P,0,A.p))}}
B.bkV.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.W()
w=C.N()
w.r=this.c.gp(0)
d.aZ(new C.a9(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=$.W()
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bS
p.e=A.fE
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
i=new C.cV(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bB(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new C.ap(A.d.gal(m).a,A.d.gal(m).b)
o.push(q)
o=k.f
if(o!=null)q.bB(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.H()
q=k.e
u.drawPath((q==null?k.e=new C.cC(k.gbL().a.snapshot()):q).a,l)
l.delete()}}},
av(d){return!0}}
B.Vt.prototype={
T(){var w=x.S
return new B.aDv(C.aX(w),C.aX(w))}}
B.aDv.prototype={
a_(){this.a1()
this.arI()},
arI(){var w,v,u=this,t=x.N,s=C.bo(D.dbQ,!0,t)
A.d.CM(s)
w=x.S
v=C.U(s).c
t=C.C(C.db(s,0,C.dG(u.d,"count",w),v),t)
A.d.v(t,C.db(s,0,C.dG(u.d,"count",w),v))
A.d.CM(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
c7B(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.lf("bell",12+A.o.E(d,9),150,0.35)
s.m(new B.efF(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gal(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bN(A.nb,new B.efG(s,v,u),t)
else{s.x=!0
C.bN(Ad.Fh,new B.efH(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.TE,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.an(p,2)+" / "+o
o=x.p
p=C.w(C.a([new C.D(A.xH,C.B(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aM:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hC,A.j,0,q,q),q),C.E(C.ij(!0,q,q,A.y,new C.hN(v,8,8,1,q),new B.efL(r),r.e.length,A.bm,q,A.ag,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cQP[t]
o.push(new B.dA(s.b,r.d===s.a,new B.efM(r,s),q,A.aP,q))}o.push(new B.fi(D.bFR,"New game",new B.efN(r),A.b2,q))
return B.jI(A.aP,A.hc,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eR(o,q,q))}}
B.VG.prototype={
T(){return new B.aDR(C.a([],x.t))}}
B.aDR.prototype={
c7F(d){A.d.a8(this.d)
this.w=!0
this.aZ6()},
aZ6(){this.d.push(A.cG.aA(4))
this.e=0
this.ZE()},
ZE(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZE=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.eqx(t))
s=x.H
w=3
return C.b(C.bN(A.lO,null,s),$async$ZE)
case 3:r=t.d,q=C.bo(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aSm(n)
w=7
return C.b(C.bN(new C.ba(1000*Math.max(280,600-r.length*18)),null,s),$async$ZE)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.eqy(t))
case 1:return C.h(u,v)}})
return C.i($async$ZE,v)},
aSm(d){this.m(new B.eqv(this,d))
B.lf("marimba",D.aoV[d]+5,450,0.55)
C.bN(A.Fe,new B.eqw(this),x.H)},
c7H(d){var w,v,u=this
if(!u.w||u.r)return
u.aSm(d)
w=u.d
v=u.e
if(w[v]!==d){E.dE(90,"",600,0,0.5,"saw")
u.m(new B.eqz(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.eqA(u))
C.bN(A.ih,new B.eqB(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,K.TL,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.fcK,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.avO[v]
u=u.j(q.f===v?1:0.35)
t=new C.aT(28,28)
s=q.f===v?C.a([new C.ac(0,A.G,D.avO[v].j(0.8),A.J,30)],w):p
r=new C.ay(A.c.j(q.f===v?0.9:0.15),2,A.q,-1)
l.push(C.aC(p,C.df(p,p,p,p,A.bc,new C.o(u,p,new C.bO(r,r,r,r),new C.bp(t,t,t,t),s,p,A.n),A.jk,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.eqC(q,v),p,p,p,p,p,p,!1,A.a7))}o=C.av(new C.D(A.a9,C.w(C.a([o,A.am,n,A.d7,new C.fI(1,C.m0(1,l,2,12,12,p,A.dS,!1),p)],m),A.m,p,A.b9,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jI(A.bN,A.hc,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eR(C.a([new B.fi(A.iI,n,q.gc7E(q),A.b2,p)],m),p,p))}}
B.W0.prototype={
T(){return new B.bk6(new C.as(A.as,$.aw()))}}
B.bk6.prototype={
avg(d){return C.oE(A.k.ab(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.eEP(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d6(C.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.eEY()
l=C.aM(m,A.T,!1,m,!0,A.r,m,C.aN(),l,m,m,m,m,m,2,C.bs(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.m(16),Ab.wP),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.m(16),D.aYi),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.kH,"Bill amount",!0,!0,!1,m,m,m,m,D.fak,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,A.dW,m,m,m,1,m,m,!1,"\u2022",m,new B.eEU(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aPs,!0,A.a4,m,A.an,m,m,m,m)
k=A.b2.j(0.1)
s=C.m(20)
r=C.I(A.b2.j(0.35),A.q,1)
q=x.p
s=C.cw(C.a([l,A.by,C.p(m,C.w(C.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.avg(w)),t.$2("Total","$"+n.avg(v)),X.LT,t.$3$big("Each of "+n.f+" pays","$"+n.avg(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bQ,m,m,m)],q),m,A.fC,m,m,A.ag,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cBD[p]
r.push(new B.dA(""+o+"%",A.k.V(n.e)===o,new B.eEV(n,o),m,A.b2,m))}l=n.f
return B.jI(A.b2,A.hc,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.w(C.a([new B.eR(r,"TIP",m),B.hE(A.aP,""+l,"People",20,1,new B.eEW(n),l),new B.eR(C.a([new B.dA("Round up",n.r,new B.eEX(n),m,A.aM,m)],q),m,m)],q),A.m,m,A.e,A.P,0,A.p))}}
B.Vr.prototype={
T(){var w=C.a([3,5],x.t)
return new B.bjA(w,A.cG,$,A.bx,0,C.a([],x.X),null,null)}}
B.bjA.prototype={
a_(){this.a1()
this.lg()},
lz(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.E(A.k.bn(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aA(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aA(6)+1)
u.f=t
B.a7Y("snare",0.5)}u.m(new B.eek())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.he()
u.w=t
u.x=t?0:3.141592653589793
B.lf("bell",24,400,0.5)}u.m(new B.eel())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bcB(v,o.r>0,n))}u=C.aC(n,C.av(C.bW(A.fR,m,A.bq,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eed(o),n,n,n,n,n,n,!1,A.a7)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.d5,A.q,6)
s=C.a([new C.ac(0,A.G,A.aM.j(0.4),A.J,30)],x.V)
u=C.aC(n,C.av(C.ed(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.f9z,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.efT,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eee(o),n,n,n,n,n,n,!1,A.a7)}else{m=o.as
u=C.aC(n,C.av(C.w(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.f_j,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kI,n,n,n)],x.p),A.m,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eef(o),n,n,n,n,n,n,!1,A.a7)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.d4E[r]
v.push(new B.dA(q.b,o.d===q.a,new B.eeg(o,q),q.c,A.bu,n))}v=C.a([new B.eR(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hE(A.bu,""+s,"Dice",4,1,new B.eeh(o),s))}if(o.d==="num"){s=o.z
s=B.hE(A.bu,""+s,"From",100,1,new B.eei(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hE(A.bu,""+p,"To",1000,2,new B.eej(o),p)],m))}return B.jI(A.bu,A.hc,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.w(v,A.m,n,A.e,A.P,0,A.p))}}
B.bcB.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cG.aj()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cz,14)],x.V)
t=C.a([],x.p)
for(s=D.dn3.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bI(s[q],p,p,C.p(p,p,A.f,p,p,M.ab0,p,18,p,p,p,p,p,18),p))
return C.eH(A.A,w,C.p(p,new C.an(A.W,p,A.aa,A.r,t,p),A.f,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bB,p,p,100),p)}}
B.aKG.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bwn.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bun()}}
B.aKZ.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bws.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.buH()}}
B.aLt.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bwC.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bvc()}}
B.aLX.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bwO.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bvG()}}
B.b6b.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aDK.h(0,t)
$.arn=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,S.nn,u,u,u,new B.crX(d),u,u,u,u,u,u),C.E(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.X(A.NB,s,u,u,u,22),u,u,u,new B.crY(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.D(D.bw2,C.B(t,A.m,u,A.e,A.j,0,u,u),u),C.E(v.f,1)],w)
w.push(C.p(u,v.r,A.f,u,u,new C.o(F.AD,u,new C.bO(new C.ay(A.c.j(0.08),1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,A.Fj,u,u,1/0))
return C.c7(u,A.bZ,C.bm(!0,C.w(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),u,!1,!1,u,u)}}
B.dA.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.I(o,A.q,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.X(u,q?t.r:A.aS,s,s,s,16),A.ec],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.D(F.tG,C.aC(s,C.df(s,C.B(v,A.m,s,A.e,A.P,0,s,s),s,s,A.bc,new C.o(p,s,o,r,s,s,A.n),A.eH,s,s,s,A.h9,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.crT(t),s,s,s,s,s,s,!1,A.a7),s)}}
B.eR.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a7(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.E(C.c9(C.B(this.c,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),1))
return new C.D(A.cy,C.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.ave.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.auO(d).cII(q,A.bE,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.E(C.a9L(C.kY(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a7(s,34,C.B(C.a([new C.a7(78,s,r,s),q,new C.a7(38,s,C.d(u==null?A.k.ab(w,1):u,s,s,s,s,s,s,A0.J0,A.dN,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fi.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.D(F.tG,C.aF(!1,A.a1,!0,C.m(12),C.aL(!1,C.m(12),!0,new C.D(Ak.ah7,C.B(C.a([C.X(w.c,u,v,v,v,17),A.ec,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.crS(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ah),v)}}
B.F7.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.eYD:u
w=t?A.c:A.b0
w=C.I(w,A.q,t?2.5:1)
return C.aC(u,C.df(u,u,u,u,A.bc,new C.o(p,u,w,u,t?C.a([new C.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hx,u,r,D.agU,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.crZ(v),u,u,u,u,u,u,!1,A.a7)}}
B.mC.prototype={
a4M(d,e){var w=C.dj()
w.seI(C.cM(C.dC(0,0,0,d,0,0),new B.crU(this,w,e)))
this.fs$.push(w.bi())},
lg(){var w=this,v=w.qy(new B.crW(w))
v.iX(0)
w.fq$!==$&&C.aP()
w.fq$=v}}
B.aaL.prototype={
bxR(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
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
w=g.bB3()
g.ay!==$&&C.aP()
g.ay=w},
bB3(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
B.aaM.prototype={
cEB(d,e){var w,v,u,t,s,r,q,p
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
B.v0.prototype={}
B.OX.prototype={}
B.xX.prototype={}
B.OW.prototype={
fm(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.aoQ[w.aA(7)]
w=w.he()?0:12
u=A.o.E(t.c++,3)===0?"flute":"bell"
B.lf(u,v+w-12,2200,0.1)}}
B.UY.prototype={
T(){var w=$.aw()
return new B.aCS(new C.cs(null,x.A),new C.as(A.as,w),new B.OW(A.cG),D.d6D,A.av,D.a2Q,$,A.bx,0,C.a([],x.X),null,null)}}
B.aCS.prototype={
a_(){var w,v=this
v.a1()
v.lg()
v.a.toString
w=$.hdL
if(w==null)w=$.hdL=B.cuy()
w.bA(new B.dWE(v),x.P)},
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.buP()},
csl(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n)q.push(new B.dW6(p[n]).$0())
w.push(q)}this.w=w},
gVQ(){var w=this.fy
return w.A(0,A.av)?100:Math.min(w.a,w.b)*0.43},
asV(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
ax_(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.asV(d.x,d.w,105/Math.max(w,3))
C.eU()
B.lf("bell",(A.d.cH(D.a2q,d.c)+1)*3+12,900,0.45)
E.dE(300,"",280,1.4,0.15,"tri")},
lz(d){var w,v,u,t,s,r,q,p=this
p.f.fm(0,d,p.db)
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
c8l(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.av))return null
w=n.fy
v=n.gVQ()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gVQ()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cEB((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c8k(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dW4(w))
return}w.m(new B.dW5(w,v,A.a.i(d).toLowerCase()))},
bNU(){var w=null,v=this.c
v.toString
C.cb(w,w,!0,w,new B.dW2(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bIx,n,n,n,o.gbNT(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.mD,n,n,n,new B.dWp(o,d),n,n,n,n,"Share",n)],l),j=C.cq(new B.dWq(o,m)),i=A.c.j(0.06)
i=C.a([C.aM(n,A.T,!1,n,!0,A.r,n,C.aN(),o.e,n,n,n,n,n,2,C.bs(n,new C.b4(4,C.m(14),A.Y),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.Ds,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bQD,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc8j(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.iO,!0,A.a4,n,A.an,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
w.push(new B.dA(s.a,!1,new B.dWr(o,s),A.mx,A.aP,n))}i.push(new C.D(A.i1,new C.a7(n,38,C.cw(w,n,n,n,n,A.aO,!1),n),n))}i.push(A.am)
w=C.a([new B.dA("Whole Earth",!1,new B.dWv(o),A.ho,A.aP,n)],l)
for(v=D.aDJ.gdO(D.aDJ),v=v.gae(v);v.C();){u=v.gR(v)
w.push(new B.dA(u.a,!1,new B.dWw(o,u),n,A.aP,n))}w.push(new B.dA("Random",!1,new B.dWx(o),A.mv,A.aP,n))
i.push(new B.eR(w,"GO TO",n))
w=o.z
i.push(B.hE(A.aP,A.k.ab(w,1)+"x","Zoom",16,0.8,new B.dWy(o),w))
w=o.dy
i.push(B.hE(A.bN,A.a.aU(A.o.u(A.k.bn(w)),2,"0")+":00","Time",24,0,new B.dWz(o),w))
w=o.fr
i.push(B.hE(A.b2,o.cr5(),"Season",365,0,new B.dWA(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lU:D.Gi
i.push(new B.eR(C.a([new B.dA("Spin",w,new B.dWB(o),D.bDH,A.aP,n),new B.dA("Night",v,new B.dWC(o),A.vB,A.aP,n),new B.dA("Borders",u,new B.dWs(o),D.bDL,A.aP,n),new B.dA("Names",r,new B.dWt(o),X.Gd,A.aP,n),new B.dA("Music",q,new B.dWu(o),p,A.aP,n)],l),n,n))
return B.jI(A.aP,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.w(i,A.m,n,A.e,A.P,0,A.p))},
cr5(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.awt[u])v=u
return A.ik[v]+" "+(A.k.bn(w-D.awt[v])+1)},
c8i(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mP(1,A.o.E((A.d.cH(D.a2q,t)+1)*47,360),0.55,1).iE()
r=new B.dW0()
q=C.m(20)
p=C.I(s.j(0.6),A.q,1)
o=x.p
n=C.B(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ab,C.E(C.d(d.a,j,1,A.a2,j,j,j,A.dj,j,j,j),1),C.aH(j,j,j,j,A.GA,j,j,j,new B.dW_(this),j,j,j,j,j,A.cc)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.h2,j,j,j)
m=D.dlK.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.B(C.a([m,A.ab,r.$2("PEOPLE",l?B.ftZ(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.GG(i)+" km\xb2")
if(l)m=(w<10?A.k.ab(w,1):B.GG(w))+" per km\xb2"
else m="\u2014"
m=C.B(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.ab(u,3):A.k.ab(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.w(C.a([n,t,A.N,v,A.N,m,A.N,C.B(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.ftZ(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.P,0,A.p),A.f,j,j,new C.o(D.W2,j,p,q,j,j,A.n),j,j,j,j,D.ahs,j,j,j)}}
B.beQ.prototype={
a4(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.W(),d7=C.N()
d7.r=D.Az.gp(0)
d8.aZ(new C.a9(0,0,0+d4,0+d5),d7)
w=new C.eJ()
w.dw(4)
for(d7=d8.a,v=0;v<90;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.25+w.aj()*0.5).gp(0)
q=r.H()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new C.u(d4,d5)
o=d2.f
u=C.N()
t=x.O
u.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.aP.j(0.35),A.K],t),D.cSl,d3).aw(0,C.bU(p,o*1.1)))
d8.af(p,o*1.05,u)
n=C.bU(p,o)
u=C.N()
u.saq(D.efX.aw(0,n))
d8.af(p,o,u)
J.by(d7.save())
u=x.v
d6=new C.aO(d6.r,A.ao,d3,d3,C.a([],u))
d6.F(new C.k1(n))
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
f=new B.dcE(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cC(d.gbL().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ao,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bB(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cC(d.gbL().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cC(d.gbL().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aO(a2.r,A.ao,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bB(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cC(d.gbL().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.E((A.d.cH(D.a2q,a7.c)+1)*47,360)
$.W()
b0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new H.mP(1,a9,a3,a8?1:0.62).iE().gp(0)
b1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=a8?2.2:m
b1.e=A.fE
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
if(c8!=null)b6.bB(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new C.ap(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bB(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new C.bE()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bB(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cC(b8.gbL().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cC(b8.gbL().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.K)(a5),++b3){d=a5[b3]
$.W()
s=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
s.b=A.ae
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.ru
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cC(d.gbL().a.snapshot()):s).a,q)
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
c9=B.hMG(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbd(b2)
c9.a4(d8,new C.u(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.D(k*c0+j*c1*c4,-1,1)
$.W()
u=C.N()
u.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b7Z.j(0.78)],t),D.d6Z,d3).aw(0,C.bU(new C.u(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.af(p,o,u)}$.W()
d4=C.N()
d4.saq(new C.bT(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.dji,d3).aw(0,n))
d8.af(p,o,d4)
d7.restore()
d7=C.N()
d7.b=A.ae
d7.c=1.4
d7.r=A.fU.j(0.5).gp(0)
d8.af(p,o,d7)},
av(d){return!0}}
B.aL4.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.aL5.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.buO()}}
B.btg.prototype={}
B.W3.prototype={
T(){return new B.bka()}}
B.bka.prototype={
gaRW(){var w=this.d
if(w===$)w=this.d=A.cG.aA(16)
return w},
B(d){var w=null,v=C.eD(w,w,w,!0,!0,D.Az,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.ani,w,w,w,new B.eFI(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fwk,w,w,w,1,w,!0),u=C.m(18),t=A.aP.j(0.1),s=C.I(A.aP.j(0.35),A.q,1),r=x.p
return C.c7(v,D.Az,C.cw(C.a([C.p(w,C.B(C.a([D.bHf,A.au,C.E(C.d(D.cWb[this.gaRW()],w,w,w,w,w,w,D.a8a,w,w,w),1),C.aH(w,w,w,w,D.bRD,w,w,w,new B.eFJ(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bB,w,w,w),A.aB,C.cq(new B.eFK())],r),w,A.YA,w,w,A.ag,!1),w,!1,!1,w,w)}}
B.VP.prototype={
T(){return B.hN7()}}
B.bjX.prototype={
ciP(d){var w=d.c,v=B.hN9(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.u(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a1()
this.lg()},
lz(d){var w,v,u,t=this
t.e.fm(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.ciP(w)
u=new C.u(-v.a,-v.b).aG(0,t.w)
v=C.lg(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc8m(){var w=this.ch
return new C.u(w.a/2,w.b/2).ad(0,this.x)},
c8q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.Cj[s]
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
aZs(d){this.m(new B.exL(this,d))
C.eU()
B.lf("bell",D.dju[A.o.E(A.d.cH(D.Cj,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.mD,m,m,m,new B.exW(n,d),m,m,m,m,"Share",m)],k),i=C.cq(new B.exX(n,l)),h=C.a([new B.dA("All",!1,new B.exY(n),A.a0w,A.aM,m)],k)
for(w=0;w<10;++w){v=D.Cj[w]
h.push(new B.dA(v.a,n.z===v,new B.exZ(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.ab(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=B.hE(A.aM,s,"Time",1,0,new B.ey_(n),u/t)
u=n.w
u=B.hE(A.aM,A.k.ab(u,1)+"x","Zoom",9,0.5,new B.ey0(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lU:D.Gi
return B.jI(A.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.w(C.a([new B.eR(h,"GO TO",m),t,u,new B.eR(C.a([new B.dA("Orbits",s,new B.ey1(n),m,A.aM,m),new B.dA("Names",r,new B.ey2(n),m,A.aM,m),new B.dA("Asteroids",q,new B.ey3(n),m,A.aM,m),new B.dA("Music",p,new B.ey4(n),o,A.aM,m)],k),m,m)],k),A.m,m,A.e,A.P,0,A.p))},
c8n(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new B.exJ(),m=C.m(20),l=C.I(q.j(0.6),A.q,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.B(C.a([k,A.ab,C.E(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.kg,r,r,r),1),C.aH(r,r,r,r,A.GA,r,r,r,new B.exI(this),r,r,r,r,r,A.cc)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,F.Du,r,r,r)
v=n.$2("WIDTH",B.GG(d.d*2)+" km")
u=p===0
p=C.B(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+B.GG(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.exK().$1(v))
t=d.f
v=C.B(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.ab(t/24,0)+" Earth days":A.k.ab(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.B(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.ab(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.ab(o,1)+" minutes":A.k.ab(o/60,1)+" hours"
return C.p(r,C.w(C.a([j,A.at,k,A.N,p,A.N,v,A.N,s,A.N,C.B(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.P,0,A.p),A.f,r,r,new C.o(D.W2,r,l,m,r,r,A.n),r,r,r,r,D.ahs,r,r,r)}}
B.brj.prototype={
a4(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.N()
w.r=D.Az.gp(0)
a7.aZ(new C.a9(0,0,0+a5,0+a6),w)
v=new C.eJ()
v.dw(8)
for(w=a7.a,u=0;u<110;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.aj()*0.5).gp(0)
p=q.H()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc8m()
n=a5.w
if(a5.as)for(a6=A.d.gae(D.Cj),t=new C.f_(a6,new B.f_6()),s=o.a,r=o.b;t.C();){q=a6.gR(0).c
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
p.delete()}i=B.hN8(A.d.gI(D.Cj))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.N()
s=x.O
t.saq(new C.bT(A.A,0.5,A.x,a4,0,C.a([A.aM.j(0.5),A.K],s),a4,a4).aw(0,C.bU(o,a6)))
a7.af(o,a6,t)
t=C.N()
t.saq(D.efR.aw(0,C.bU(o,i)))
a7.af(o,i,t)
if(a5.at){h=B.hfn("Sun",10.5,A.ad)
h.a4(a7,o.ad(0,new C.u(-h.b.c/2,i+4)))}for(a6=A.d.gae(D.Cj),t=new C.f_(a6,new B.f_7()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gR(0)
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
a0=C.cg(A.J,j*1.3,j*4.2)
a1=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.b=A.ae
a1.c=j*0.45
a1.r=A.bL.j(0.55).gp(0)
p=a1.H()
w.drawOval(C.c_(a0),p)
p.delete()
w.restore()}a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gp(0)
a0.z=A.ru
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a1=C.aq(e,A.w,0.55)
a1.toString
a0.saq(new C.bT(P.pp,0.5,A.x,a4,0,C.a([A.c,e,a1],s),I.a22,a4).aw(0,C.bU(new C.u(g,f),j)))
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
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.d0m[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.hfn(d,10.5,A.ad)
h.a4(a7,new C.u(g+-h.b.c/2,f+(j+4)))}}},
av(d){return!0}}
B.UZ.prototype={
T(){var w=x.i
return new B.aCT(new B.OW(A.cG),C.c2(5,0,!1,w),C.c2(5,0,!1,w),C.c2(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bx,0,C.a([],x.X),null,null)}}
B.aCT.prototype={
cvC(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c8p(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.e4z
s.cy=new C.u(s.ay,0)
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
E.dE(150,"",400,0,0.5,"noise")
E.dE(90,"",300,1.5,0.6,"sine")
s.m(new B.dWI())},
a_(){this.a1()
this.lg()},
lz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fm(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.yN[r]
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
if(q.a!=="Sun")E.dE(60+p*5,"",220,0.6,0.55,"sine")
break}}}if(A.d.d7(s,new B.dXa()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
i.cy=new C.u(k,s)
k=p+k*w
s=t+s*w
i.cx=new C.u(k,s)
j=Math.sqrt(k*k+s*s)
s=i.cy
k=i.cx
t=-398600/(j*j*j)
p=k.a
k=k.b
i.cy=new C.u(s.a+p*t*v,s.b+k*t*v)
i.dy+=w
if(Math.sqrt(p*p+k*k)<6371){i.CW=!1
E.dE(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||A.d.gal(v).aC(0,i.cx).gcm()>120)v.push(i.cx)
if(v.length>700)A.d.cw(v,0)
if(i.cx.gcm()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bM8()
else n=n==="weight"?p.cCT():p.bEg()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.dgy[u]
v.push(new B.dA(t.b,p.d===t.a,new B.dWX(p,t),t.c,A.cs,o))}v=C.a([new B.eR(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dA("Hammer",!s,new B.dWY(p),Ai.Gc,A.cs,o),new B.dA("Feather",s,new B.dWZ(p),X.Ng,A.cs,o),new B.dA(q,r,new B.dX2(p),A.G0,A.aP,o)],w)
q=p.w
A.d.v(v,C.a([new B.eR(r,o,o),B.hE(A.cs,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new B.dX3(p),q),new B.eR(C.a([new B.fi(A.tT,"Drop!",new B.dX4(p),A.b2,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hE(A.cs,""+A.k.V(s)+" kg","Your weight",120,20,new B.dX5(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hE(A.cs,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new B.dX6(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hE(A.cs,A.k.ab(s,1)+" km/s","Speed",13,0,new B.dX7(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hE(A.cs,A.k.ab(r,1)+"x out","View",8,0.5,new B.dX8(p),r),new B.eR(C.a([new B.fi(A.nm,"Fire!",p.gc8o(),A.b2,o),new B.fi(A.tT,"Falls",new B.dX9(p),A.c,o),new B.fi(A.rb,"Orbit 7.7",new B.dX_(p),A.c,o),new B.fi(D.bGF,"Oval 9",new B.dX0(p),A.c,o),new B.fi(A.BH,"Escape",new B.dX1(p),A.c,o)],w),o,o)],w))}return B.jI(A.cs,A.hc,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.w(v,A.m,o,A.e,A.P,0,A.p))},
bM8(){return new C.D(D.br3,C.cq(new B.dWH(this)),null)},
cCT(){var w,v,u,t=null,s=[D.eFb,D.eGF,D.eGN,D.eH5,D.eGL,D.eHb,D.eFM,D.eHy,D.eGp],r=x.p,q=C.a([D.fkf,A.R],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.D(A.cy,new C.cl(A.aO,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a7(62,t,new C.y(v.a,t,new C.H(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bB(1,A.bg,new C.Bi(new B.dWJ(this,v),t),t)],r),t),t))}q.push(A.at)
q.push(D.fmz)
return C.cw(q,t,A.ii,t,t,A.ag,!1)},
bEg(){return C.cq(new B.dWF(this))}}
B.ba1.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.W(),e=C.N()
e.r=D.Az.gp(0)
d.aZ(new C.a9(0,0,0+h,0+g),e)
w=new C.eJ()
w.dw(2)
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
e.saq(new C.bT(A.A,0.5,A.x,i,0,C.a([A.K,A.aP.j(0.35),A.K],x.O),D.d7R,i).aw(0,C.bU(g,p*1.1)))
d.af(g,p*1.06,e)
e=C.N()
e.saq(D.efL.aw(0,C.bU(g,p)))
d.af(g,p,e)
o=g.ad(0,new C.u(0,-p))
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
d.aQ(n,s)
s=o.ad(0,new C.u(0,-400*h-6))
u=C.N()
u.r=A.c.gp(0)
d.af(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.aO(f,A.ao,i,i,e)
f=g.a
t=g.b
m.F(new C.b5(f+A.d.gI(u).a*h,t+A.d.gI(u).b*h))
for(u=C.db(u,1,i,C.U(u).c),s=u.$ti,u=new C.bQ(u,u.gM(0),s.k("bQ<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.ap(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bB(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.W()
f=C.N()
f.b=A.ae
f.c=2.4
f.d=A.bS
f.r=A.cs.j(0.9).gp(0)
d.aQ(m,f)}if(j.f){f=j.d
k=g.ad(0,new C.u(f.a*h,f.b*h))
h=C.N()
h.r=A.cs.j(0.4).gp(0)
h.z=G.mH
d.af(k,7,h)
h=C.N()
h.r=A.c.gp(0)
d.af(k,4,h)}},
av(d){return!0}}
B.VH.prototype={
T(){return new B.bjU(new C.cs(null,x.A),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjU.prototype={
a_(){this.a1()
this.lg()},
lz(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.PX[l.e],i=D.PX[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aH(k,k,k,k,D.mD,k,k,k,new B.eqF(l,d),k,k,k,k,"Share",k)],u)
s=C.E(C.b3(k,k,k,new B.bqS(f,g,v,k),A.f3),1)
r=g.a
q=v<10?A.k.ab(v,1):B.GG(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.hF,A.L,k,k)
o=B.GG(v*v*v)
n=A.a.ca(p,"s")?"":"s"
h=C.w(C.a([s,C.p(k,C.w(C.a([q,A.at,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A6.zE,A.L,k,k),A.bD,C.d(p+": "+B.GG(w*2)+" km wide. "+r+": "+B.GG(h*2)+" km wide.",k,k,k,k,k,k,A6.zF,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.bta,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.PX[m]
r.push(new B.dA(w.a,l.e===m,new B.eqG(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.PX[m]
w.push(new B.dA(s.a,l.f===m,new B.eqH(l,m),k,C.b0(s.c),k))}return B.jI(A.bX,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.ew(h,l.d),"SIZE COMPARE",C.w(C.a([new B.eR(r,"FIRST",k),new B.eR(w,"SECOND",k)],u),A.m,k,A.e,A.P,0,A.p))}}
B.bqS.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.W()
w=C.N()
w.r=D.WJ.gp(0)
d.aZ(new C.a9(0,0,0+h,0+g),w)
v=new C.eJ()
v.dw(6)
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
m=new C.u(h,g)
w=new B.eYf(d)
t=this.c
w.$3(m,o,C.b0(t.c))
s=o-n
l=new C.u(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,C.b0(s.c))
w=C.N()
w.b=A.ae
w.c=1.4
w.r=A.ad.gp(0)
d.af(l,n+3,w)
k=C.h1(i,i,i,i,C.d3(i,i,i,i,i,i,i,i,i,D.f5Q,s.a),A.a4,A.c6,i,A.dP,A.c5)
k.en()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbd(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbd(g)-6
h=g}k.a4(d,l.ad(0,new C.u(-w/2,h)))
j=C.h1(i,i,i,i,C.d3(i,i,i,i,i,i,i,i,i,D.f99,t.a),A.a4,A.c6,i,A.dP,A.c5)
j.en()
t=j.b
h=t.c
t=t.a.c
j.a4(d,m.ad(0,new C.u(-h/2,-t.gbd(t)/2)))},
av(d){return!0}}
B.aL6.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bwu.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.buQ()}}
B.aLF.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bwI.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bvo()}}
B.aLI.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bwK.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bvr()}}
B.Pq.prototype={}
B.U1.prototype={
T(){return B.hN5()}}
B.biA.prototype={
a_(){this.a1()
this.lg()},
lz(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fm(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dE(70,"",500,0.3,0.5,"sine")}}A.d.bq(w,new B.dEf())},
aZt(d){var w,v,u,t=this.Q
if(t.A(0,A.av))return
w=this.gb7p()
v=d.aC(0,new C.u(t.a/2,t.b*0.42))
u=A.k.D(v.gcm()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.Pq(t,u,1.2,new C.vD(1,30+A.cG.aj()*40,0.9,0.7).iE()))
B.lf("bell",60+A.k.V(12-u)*2,400,0.35)},
gb7p(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.M(m,new B.dE3(),C.U(m).k("M<1,L>")).fd(0,A.v1),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.mD,n,n,n,new B.dE4(o,d),n,n,n,n,"Share",n)],m)
v=C.cq(new B.dE5(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.ab(s,0)+" Suns":B.ftZ(s)+" Suns"
t=B.hE(A.bu,s,"Mass",1,0,new B.dE7(o),u/t)
u=C.a([new B.dA("Star (10)",!1,new B.dE8(o),n,A.bu,n),new B.dA("Cygnus X-1 (21)",!1,new B.dE9(o),n,A.bu,n),new B.dA("Milky Way core (4 million)",!1,new B.dEa(o),n,A.bu,n),new B.dA("M87 (6.5 billion)",!1,new B.dEb(o),n,A.bu,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lU:D.Gi
return B.jI(A.bu,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.w(C.a([t,new B.eR(u,"LIKE",n),new B.eR(C.a([new B.dA("Glowing ring",s,new B.dEc(o),n,A.bu,n),new B.dA("Bent light",r,new B.dEd(o),n,A.bu,n),new B.dA("Music",q,new B.dEe(o),p,A.bu,n),new B.fi(A.k6,"Clear",new B.dE6(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.P,0,A.p))},
aem(d,e){var w=null
return C.E(C.w(C.a([C.d(d,w,w,w,w,w,w,D.f1O,w,w,w),A.bD,C.d(e,w,2,w,w,w,w,L.zC,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b9q.prototype={
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.W()
w=C.N()
w.r=D.bfZ.gp(0)
b2.aZ(new C.a9(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.u(w,v)
t=this.b
s=t.gb7p()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.K)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new C.u(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.D(o/h,0,n)
i=new C.u(w+k/h*g,v+j/h*g)}}k=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.c.j(0.6).gp(0)
f=k.H()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=C.N()
b0.b=A.ae
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=S.R8
b2.af(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(A.v9,A.fl,d)
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
b1.saq(new C.bT(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cNs,null).aw(0,C.bU(u,b0)))
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
o.z=G.mH
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
av(d){return!0}}
B.aev.prototype={}
B.UV.prototype={
T(){var w=x.r,v=x.g
return new B.bj1(new C.cs(null,x.A),new B.OW(A.cG),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bx,0,C.a([],x.X),null,null)}}
B.bj1.prototype={
a_(){this.a1()
this.ZR()
this.lg()},
ZR(){var w,v,u,t,s,r,q,p,o=this,n=new C.eJ()
n.dw(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new B.aev(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.aA(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.he()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new B.aev(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cvs(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.e62
k.cx=D.e65
w=new C.eJ()
w.dw(9)
v=k.cy
A.d.a8(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.aev(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
A.d.v(v,u)
u=x.g
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.K)(v),++q){p=v[q]
o=p.b
n=p.a
s.push(new C.u(Math.cos(o)*n,Math.sin(o)*n))}k.dx=s
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.K)(v),++q){p=v[q]
o=p.b
n=p.a+0.2
s.push(new C.u(-Math.sin(o)*0.55/Math.sqrt(n),Math.cos(o)*0.55/Math.sqrt(n)))}k.fr=s
v=C.a([],u)
for(s=k.ay,r=x.S,s=C.db(s,0,C.dG(900,"count",r),C.U(s).c),o=s.$ti,s=new C.bQ(s,s.gM(0),o.k("bQ<ak.E>")),o=o.k("ak.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.u(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.db(u,0,C.dG(900,"count",r),C.U(u).c),r=u.$ti,u=new C.bQ(u,u.gM(0),r.k("bQ<ak.E>")),r=r.k("ak.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.u(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
E.dE(110,"",900,0.5,0.45,"sine")},
lz(d){var w,v,u,t,s,r,q,p=this
p.e.fm(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aC(0,p.fx)
s=Math.max(0.25,t.gcm())
r=t.eC(0,s).aG(0,0.9/(s*s))
w=p.fy.ad(0,r.aG(0,u))
p.fy=w
v=p.cx.aC(0,r.aG(0,u))
p.cx=v
w=p.fx.ad(0,w.aG(0,u))
p.fx=w
v=p.CW.ad(0,v.aG(0,u))
p.CW=v
q=new B.dVf(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mD,r,r,r,new B.dV5(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.beG(s,r),A.av),n=A.w.j(0.5),m=C.m(14),l=C.I(A.bE,A.q,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Af.a7r,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bR,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.d3t[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dA(u.b,o,new B.dV6(s,u),r,A.h4,r))}l.push(new B.dA("Collide",s.ch,new B.dV7(s),A.y5,A.bX,r))
o=C.a([new B.eR(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hE(A.h4,""+n,"Arms",6,2,new B.dV8(s),n)
l=s.r
A.d.v(o,C.a([n,B.hE(A.h4,A.k.ab(l,1),"Winding",6,0.8,new B.dV9(s),l)],q))}n=s.as
o.push(B.hE(A.h4,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new B.dVa(s),n))
n=s.ax
o.push(B.hE(A.h4,A.k.ab(n,1)+"x","Speed",4,0,new B.dVb(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lU:D.Gi
o.push(new B.eR(C.a([new B.dA("Dark matter",n,new B.dVc(s),r,A.bu,r),new B.dA("You are here",l,new B.dVd(s),r,A.aM,r),new B.dA("Music",w,new B.dVe(s),t,A.h4,r)],q),r,r))
return B.jI(A.h4,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.ew(new C.an(A.W,r,A.b1,A.r,m,r),s.d),"GALAXY",C.w(o,A.m,r,A.e,A.P,0,A.p))}}
B.beG.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.W()
w=C.N()
w.r=D.bi2.gp(0)
a3.aZ(new C.a9(0,0,0+a1,0+a2),w)
v=new C.eJ()
v.dw(3)
for(w=a3.a,u=0;u<90;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.15+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new C.u(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=C.N()
t.saq(new C.bT(A.A,0.5,A.x,a0,0,C.a([A.aE.j(0.32),A.aE.j(0.12),A.K],x.O),D.cb3,a0).aw(0,C.bU(o,a2)))
a3.af(o,a2,t)}m=new B.d9L(a1.as)
a2=n*0.3
t=C.N()
t.saq(new C.bT(A.A,0.5,A.x,a0,0,C.a([A.h5.j(0.85),A.aF.j(0.3),A.K],x.O),a0,a0).aw(0,C.bU(o,a2)))
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
l.r=new H.mP(1,r,q>200?0.45:0.55,1).iE().j(0.35+(1-s)*0.5).gp(0)
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
f=C.h1(a0,a0,a0,a0,D.eZS,A.a4,A.c6,a0,A.dP,A.c5)
f.en()
f.a4(a3,g.ad(0,new C.u(-f.b.c/2,12)))}}else{e=n*0.8
l=C.N()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.bjg.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.be6.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.W()
w=C.N()
w.r=A.h5.gp(0)
a3.af(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.N()
w.r=A.ix.gp(0)
a3.af(a1,5,w)}},
av(d){return!0}}
B.VD.prototype={
T(){return new B.bjT(new C.cs(null,x.A),new B.OW(A.cG),$,A.bx,0,C.a([],x.X),null,null)}}
B.bjT.prototype={
a_(){this.a1()
this.lg()},
lz(d){var w,v,u,t=this
t.e.fm(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.E(t.r+d*0.04*v,1)
else{w=A.k.E(t.w+d*0.05*v,1)
t.w=w
u=A.k.bn(w*4)
if(u!==A.k.bn(t.as))B.lf("bell",60+u*4,500,0.35)
t.as=u}},
gcr4(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gchr(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.mD,q,q,q,new B.epU(r,d),q,q,q,q,"Share",q)],p),n=C.E(new C.ew(C.b3(q,q,q,new B.bq7(r,q),A.f3),r.d),1)
if(r.f==="seasons")w=r.gcr4()
else{w=r.gchr()
v=A.k.an(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.w(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A7.TC,A.L,q,q),A.f,q,q,q,q,q,q,q,K.ahC,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A2.yg:A.iI
t=r.Q
s=t?A.lU:D.Gi
s=C.a([new B.eR(C.a([new B.dA("Seasons",n==="seasons",new B.epV(r),A.yu,A.bv,q),new B.dA("Moon phases",n==="moon",new B.epW(r),A.vB,A.bv,q),new B.dA(u,!1,new B.epX(r),v,A.bv,q),new B.dA("Music",t,new B.epY(r),s,A.bv,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hE(A.bv,D.d2O[A.o.E(A.k.bn(n*12),12)],"Month",1,0,new B.epZ(r),n)
v=r.z
A.d.v(s,C.a([n,B.hE(A.bv,A.k.ab(v,1)+"\xb0","Tilt",90,0,new B.eq_(r),v)],p))}else{p=r.w
s.push(B.hE(A.bv,""+(A.k.bn(p*29.5)+1),"Day of month",1,0,new B.eq0(r),p))}p=r.y
s.push(B.hE(A.bv,A.k.ab(p,1)+"x","Speed",4,0.2,new B.eq1(r),p))
return B.jI(A.bv,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.w(s,A.m,q,A.e,A.P,0,A.p))}}
B.bq7.prototype={
a4(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.W(),b8=C.N()
b8.r=D.Az.gp(0)
b9.aZ(new C.a9(0,0,0+b5,0+b6),b8)
w=new C.eJ()
w.dw(4)
for(b8=b9.a,v=0;v<70;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.aj()*0.4).gp(0)
q=r.H()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new C.u(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=C.cg(p,n*2,o*2)
t=C.N()
t.b=A.ae
t.c=1
t.r=A.b0.gp(0)
b9.hS(u,t)
t=C.N()
t.saq(D.efN.aw(0,C.bU(p,34)))
b9.af(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new C.u(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aC(0,l).eC(0,p.aC(0,l).gcm())
J.by(b8.save())
b8.translate(l.a,l.b)
s=C.N()
s.r=D.bfV.gp(0)
b9.af(A.J,k,s)
J.by(b8.save())
b7=new C.aO(b7.r,A.ao,b4,b4,C.a([],x.v))
b7.F(new C.k1(C.bU(A.J,k)))
b9.qv(0,b7)
b7=i.aG(0,k).aG(0,0.35)
s=k*1.1
b6=C.N()
b6.saq(D.efW.aw(0,C.bU(A.J,s)))
b9.af(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.u(s,b6)
b7=new C.u(-s,-b6).aG(0,k).aG(0,1.7)
b5=h.aG(0,k).aG(0,1.7)
t=C.N()
t.c=2
t.r=A.c9.gp(0)
b9.bF(b7,b5,t)
t=h.aG(0,k).aG(0,1.7)
b5=C.N()
b5.r=A.c9.gp(0)
b9.af(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.h1(b4,b4,b4,b4,C.d3(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aQZ,b5),A.a4,A.c6,b4,A.dP,A.c5)
f.en()
f.a4(b9,l.ad(0,new C.u(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.N()
r.b=A.ae
r.c=1
r.r=A.b0.gp(0)
b9.af(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=A.aM.j(0.6).gp(0)
a0.c=2
q=a0.H()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.N()
r.saq(new C.bT(new C.dc(-0.5,0),1.1,A.x,b4,0,C.a([D.bbD,D.afv],x.O),D.cV9,b4).aw(0,C.bU(p,k)))
b9.af(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new C.u(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.N()
r.r=D.b8W.gp(0)
b9.af(a1,a2,r)
J.by(b8.save())
b7=b7.r
r=x.v
d=new C.aO(b7,A.ao,b4,b4,C.a([],r))
d.F(new C.k1(C.bU(a1,a2)))
b9.qv(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.N()
a3.r=A.bP.gp(0)
b9.aZ(new C.a9(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aC(0,p).eC(0,a1.aC(0,p).gcm())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.asB[a5]
a7=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
a7.r=A.aP.j(0.45).gp(0)
a7.z=A.jt
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.u(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.N()
b6.r=D.b8R.gp(0)
b9.af(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.by(b8.save())
b6=new C.aO(b7,A.ao,b4,b4,C.a([],r))
b6.F(new C.k1(C.bU(a8,a9)))
b9.qv(0,b6)
s=s.w
b1=new C.aO(b7,A.ao,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.F(new C.b5(u,b5))
b6=b2>0
b1.aCg(new C.u(u,t+a9),b6,new C.aT(a9,a9))
if(b0<0.5)b6=b2<0
b1.aCg(new C.u(u,b5),b6,new C.aT(a9*Math.abs(1-2*b0),a9))
b6=C.N()
b6.r=A.bP.gp(0)
b9.aQ(b1,b6)
b8.restore()
b8=C.N()
b8.b=A.ae
b8.c=1
b8.r=A.b0.gp(0)
b9.af(a8,a9,b8)
b3=C.h1(b4,b4,b4,b4,D.eZT,A.a4,A.c6,b4,A.dP,A.c5)
b3.en()
b3.a4(b9,a8.ad(0,new C.u(-b3.b.c/2,a9+6)))}},
av(d){return!0}}
B.aKD.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bwm.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.buk()}}
B.aL1.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bwt.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.buK()}}
B.aLE.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
B.bwH.prototype={
q(){var w,v,u
for(w=this.fs$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a6(0)
w=this.fq$
w===$&&C.c()
w.q()
this.bvn()}}
var z=a.updateTypes(["~()","R(tr)","R(a48)","aA<~>()","R(Cg)","G(tr,G)","L(L,tr)","R(Cc)","R(YZ)","R(ab5)","R(v0)","R(a2N)","R(nm)","R(a_v)","R(abT)","G(G)","U7()","UJ()","TY()","UX()","Vf()","Vh()","U6()","VB()","VQ()","VC()","Vy()","VX()","U5()","W1()","R(mz)","Vs()","Vx()","aeA(Y,G)","ads(Y,G)","~(a5<@,@>)","G(Cc,Cc)","n(eb)","R(aeq)","R(a0d)","R(Cq)","R(abA)","R(adw)","R(abj)","G(G,qJ)","G(G,Cg)","n(qJ)","~(qJ,ai<n>,G)","qJ?(Cg)","R(qJ)","r(n,a00)","R(PI)","~(Ar)","R(abq)","L(G?)","W3()","R(FE)","R(acI)","L(G)","UK()","L(Pq)","R(a9Z)","U2()","a7Z()","~(B_,n,u,v,L)","~(n,tr)","Vv()","Va(Y)","N8(Y)","Ur(Y,br<L>,br<L>)","W7()","UR()","U3()","UI()","Vt()","VG()","W0()","Vr()","~(n)","cr(aaM)","R(aaL)","UY()","VP()","UZ()","U1()","UV()","VH()","VD()","Ut()","R(Pq)","~(ba)"])
B.fw8.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.fmo.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gI(d.e.split(". "))+"."},
$S:z+37}
B.ft6.prototype={
$1(d){var w
if(!this.a.Lw(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.ft7.prototype={
$1(d){return d.x},
$S:z+1}
B.fw5.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.fw6.prototype={
$1(d){var w
if(!this.a.Lw(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.fw7.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
B.e7_.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e70.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.z(this.b,this.c))},
$S:0}
B.e71.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gcZ(v).Q
v.toString
w.mb(v,A.dV,A.ig)}},
$S:9}
B.e7c.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.e7d.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.e78.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.e76.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dC(0,0,0,d,0,0),new B.e77(w,this.b,e)))},
$S:1843}
B.e77.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.e79.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gVT().ajp(0,u[1],u[2],u[3])
u[4].bK(0,new B.e74(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dE(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.e75(w.a,v,w.f,w.r))},
$S:0}
B.e74.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:198}
B.e75.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bn(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e7a.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gVT().ak9(t,u[1],s,u[3])
E.dE(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.e73(w.a,v,w.e,w.f))},
$S:0}
B.e73.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bn(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e7b.prototype={
$0(){E.dE(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.e72(w,this.b))},
$S:0}
B.e72.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.e7g.prototype={
$0(){var w=this.a
return w.m(new B.e7f(w))},
$S:0}
B.e7f.prototype={
$0(){return this.a.at=!0},
$S:0}
B.e7h.prototype={
$0(){var w=this.a
return w.m(new B.e7e(w))},
$S:0}
B.e7e.prototype={
$0(){return this.a.at=!1},
$S:0}
B.e7i.prototype={
$0(){var w=this.a
w.f.saW(0,this.b)
w.Nk()},
$S:0}
B.e7j.prototype={
$0(){return this.a.XU(this.b)},
$S:0}
B.e7k.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Nk():w.aVd()},
$S:2}
B.e7l.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Nk():w.aVd()},
$S:0}
B.en5.prototype={
$2(d,e){return d+e},
$S:1844}
B.enp.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.eno(w,d))},
$S:129}
B.eno.prototype={
$0(){var w=C.aJ(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.enq.prototype={
$0(){},
$S:0}
B.enr.prototype={
$0(){},
$S:0}
B.en7.prototype={
$0(){return this.a.m(new B.en6(this.b,this.c))},
$S:0}
B.en6.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.emX.prototype={
$1(d){return this.a.cx===d},
$S:33}
B.emY.prototype={
$1(d){return this.a.cx=d},
$S:27}
B.emZ.prototype={
$1(d){return this.a.cy===d},
$S:33}
B.en_.prototype={
$1(d){return this.a.cy=d},
$S:27}
B.en0.prototype={
$1(d){return this.a.db===d},
$S:33}
B.en1.prototype={
$1(d){return this.a.db=d},
$S:27}
B.en2.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:33}
B.en3.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.L(0,d)},
$S:27}
B.en4.prototype={
$0(){var w=this.a
return w.m(w.gavT())},
$S:0}
B.emV.prototype={
$1(d){return this.a.$1(!0)},
$S:79}
B.emW.prototype={
$1(d){return this.a.$1(!1)},
$S:127}
B.emU.prototype={
$1(d){return this.a.$1(!1)},
$S:191}
B.eni.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new B.bgm(o,p),n)
w=this.b
v=B.bz2("WORLD",w.a,w.c)
u=B.bz2("GRAVITY",C.t(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.c9:A.b2
t=B.bz2("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.Cb[o.db].d?A.c9:A.c
q=x.p
s=C.a([v,u,t,B.bz2("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.bz2("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.ao(p,C.B(s,A.m,p,A.hC,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bDe(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.ro[w].a+".":"You landed on every world!"
v=C.a([new B.fi(A.mz,"Again",new B.end(o),A.c,p),new B.fi(A.oP,"Rebuild",new B.ene(o),A.aM,p)],q)
if(o.d+1<7)v.push(new B.fi(A.j_,"Next world",new B.enf(o),A.b2,p))
n.push(B.hj3("Perfect landing!",w,A.b2,v))}if(o.as==="crashed")n.push(B.hj3("Crash!",o.at,A.c9,C.a([new B.fi(A.mz,"Try again",new B.eng(o),A.b2,p),new B.fi(A.oP,"Rebuild",new B.enh(o),A.aM,p)],q)))
return new C.an(A.W,p,A.b1,A.r,n,p)},
$S:63}
B.end.prototype={
$0(){var w=this.a
return w.m(w.gavT())},
$S:0}
B.ene.prototype={
$0(){var w=this.a
return w.m(new B.ena(w))},
$S:0}
B.ena.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.enf.prototype={
$0(){var w=this.a
return w.m(new B.en9(w))},
$S:0}
B.en9.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.eng.prototype={
$0(){var w=this.a
return w.m(w.gavT())},
$S:0}
B.enh.prototype={
$0(){var w=this.a
return w.m(new B.en8(w))},
$S:0}
B.en8.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.enj.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.enc(v,w))},
$S:0}
B.enc.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.enk.prototype={
$1(d){return this.a.y=d},
$S:8}
B.enl.prototype={
$1(d){return this.a.Q=d},
$S:8}
B.enm.prototype={
$1(d){return this.a.z=d},
$S:8}
B.enn.prototype={
$0(){var w=this.a
return w.m(new B.enb(w))},
$S:0}
B.enb.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dEH.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.hep
if(q==null)q=$.hep=B.cEM()
w=3
return C.b(C.iM(C.a([q,$.qS().bfw("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kC(0,C.cP(J.q(s,1)))
q.m(new B.dEG(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:52}
B.dEG.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dEj.prototype={
$0(){return this.a.bUD(C.aU(J.q(this.b,"group")))},
$S:0}
B.dEk.prototype={
$1(d){return A.a.aU(A.o.fU(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:315}
B.dEI.prototype={
$0(){return B.a7Y("kick",0.25)},
$S:0}
B.dEl.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dEm.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dEn.prototype={
$0(){return B.a7Y("kick",0.5)},
$S:0}
B.dEo.prototype={
$0(){return E.dE(1300+this.a.R8.aA(900),"",40,0,0.2,"square")},
$S:0}
B.dEq.prototype={
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
u=w}if(u.cx!=null&&!A.d.b4(u.d.e,new B.dEp(u)))u.cx=null
u.go=0},
$S:0}
B.dEp.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.axC(d)},
$S:z+11}
B.dEg.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dEh.prototype={
$0(){var w=this.a
return w.m(w.gc4_())},
$S:0}
B.dEi.prototype={
$0(){return this.a.ah2(null)},
$S:0}
B.dEx.prototype={
$0(){var w=this.a.as
return w==null?null:w.eZ(0,C.F(["t","shot"],x.N,x.z))},
$S:0}
B.dEy.prototype={
$0(){return this.a.czC(this.b.a)},
$S:0}
B.dEz.prototype={
$0(){return this.a.ah2(this.b)},
$S:0}
B.dEA.prototype={
$1(d){var w=this.a
return w.m(new B.dEw(w,d))},
$S:6}
B.dEw.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dEB.prototype={
$0(){var w=this.a
return w.m(new B.dEv(w,this.b))},
$S:0}
B.dEv.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dEC.prototype={
$0(){var w=this.a
return w.m(new B.dEu(w))},
$S:0}
B.dEu.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dED.prototype={
$0(){var w=this.a
return w.m(new B.dEt(w))},
$S:0}
B.dEt.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eZ(0,C.F(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Ka},
$S:0}
B.dEE.prototype={
$0(){var w=this.a
return w.m(new B.dEs(w))},
$S:0}
B.dEs.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aXS()
else w.p2=null},
$S:0}
B.dEF.prototype={
$0(){var w=this.a
return w.m(new B.dEr(w))},
$S:0}
B.dEr.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.c06.prototype={
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
$S:323}
B.c07.prototype={
$1(d){var w=new C.rK([],[]).pB(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:613}
B.fg5.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)},
$S:234}
B.fg6.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)||w.h(d,1)},
$S:234}
B.fg7.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)!==w.h(d,1)},
$S:234}
B.fge.prototype={
$1(d){return!J.q(d,0)},
$S:234}
B.fgf.prototype={
$1(d){var w=J.a4(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:234}
B.fgg.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:234}
B.dGS.prototype={
$1(d){return this.a.asy(0)},
$S:9}
B.dGw.prototype={
$0(){var w=this.b
return this.a.cx=new C.M(w,C.i_e(),C.U(w).k("M<1,G>")).fM(0)},
$S:0}
B.dGz.prototype={
$1(d){return""+d},
$S:81}
B.dGT.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dGu.prototype={
$1(d){return this.a.asy(this.b)},
$S:9}
B.dGv.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.awl(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mA(0,d,a1.m2(0.15,0.3))
u=a1.mA(0,d,a1.m2(0.15,0.62))
t=a1.mA(0,"and",a1.m2(0.48,0.46))
s=a1.mA(0,a0,a1.m2(0.82,0.46))
a1=t.a
w.push(new B.nm(v.a,a1,0))
w.push(new B.nm(u.a,a1,1))
w.push(new B.nm(a1,s.a,0))
break
case 1:v=a1.mA(0,d,a1.m2(0.12,0.25))
u=a1.mA(0,d,a1.m2(0.12,0.65))
r=a1.mA(0,"xor",a1.m2(0.46,0.25))
q=a1.mA(0,"and",a1.m2(0.46,0.65))
p=a1.awk(0,a0,a1.m2(0.82,0.25),0)
o=a1.awk(0,a0,a1.m2(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new B.nm(a1,n,0))
m=u.a
w.push(new B.nm(m,n,1))
l=q.a
w.push(new B.nm(a1,l,0))
w.push(new B.nm(m,l,1))
w.push(new B.nm(n,p.a,0))
w.push(new B.nm(l,o.a,0))
break
case 2:k=a1.mA(0,"clock",a1.m2(0.15,0.4))
j=a1.mA(0,"not",a1.m2(0.45,0.65))
s=a1.mA(0,a0,a1.m2(0.82,0.3))
i=a1.mA(0,"buzzer",a1.m2(0.82,0.65))
a1=k.a
w.push(new B.nm(a1,s.a,0))
n=j.a
w.push(new B.nm(a1,n,0))
w.push(new B.nm(n,i.a,0))
break
default:h=a1.mA(0,d,a1.m2(0.12,0.25))
g=a1.mA(0,d,a1.m2(0.12,0.7))
f=a1.mA(0,"nor",a1.m2(0.5,0.25))
e=a1.mA(0,"nor",a1.m2(0.5,0.7))
s=a1.mA(0,a0,a1.m2(0.86,0.25))
a1=f.a
w.push(new B.nm(g.a,a1,0))
n=e.a
w.push(new B.nm(n,a1,1))
w.push(new B.nm(h.a,n,0))
w.push(new B.nm(a1,n,1))
w.push(new B.nm(a1,s.a,0))}},
$S:0}
B.dGA.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.awl(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new B.Cc(p,"switch",new C.u(0.14*q.a,r*q.b),0))}o.mA(0,w.e,o.m2(0.86,0.5))},
$S:0}
B.dGp.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
B.dGq.prototype={
$2(d,e){return A.k.aL(d.c.b,e.c.b)},
$S:z+36}
B.dGr.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
B.dGs.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dGt.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.acn(this.c)
if(v.ax)B.BC("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gI(w)
v.CW=!1
if(v.ax)E.dE(140,"",250,0,0.3,"square")}},
$S:0}
B.dGB.prototype={
$0(){},
$S:0}
B.dGC.prototype={
$0(){return A.d.cw(this.a.e,this.b)},
$S:0}
B.dGD.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dGy.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bq(w.e,new B.dGx(v))
w.cy=null},
$S:0}
B.dGx.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dGo.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mA(0,this.b,new C.u(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
B.dGM.prototype={
$0(){var w=this.a
return w.m(new B.dGL(w))},
$S:0}
B.dGL.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dGN.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.x=u
return C.aC(A.c7,C.jx(C.b3(w,w,w,new B.bau(v,w),u),A.r,w),A.y,!1,w,w,w,w,w,w,w,w,w,new B.dGG(v),w,w,w,new B.dGH(v),new B.dGI(v),new B.dGJ(v),w,w,w,w,w,w,w,w,w,w,new B.dGK(v),w,w,w,!1,A.a7)},
$S:35}
B.dGK.prototype={
$1(d){return this.a.c5J(d.b)},
$S:50}
B.dGI.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cec(u)
if(t!=null){v.as=t
v.at=u
return}w=v.ax8(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aC(0,u)}},
$S:43}
B.dGJ.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.u(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dGH.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bYd(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bq(v,new B.dGE(w))
u=t.as
u.toString
v.push(new B.nm(u,w.a,w.b))
C.jQ()}}t.z=t.as=null},
$S:37}
B.dGE.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dGG.prototype={
$1(d){return this.a.av8(d.b)},
$S:288}
B.dGO.prototype={
$0(){return this.a.bz6(this.b.a)},
$S:0}
B.dGP.prototype={
$0(){return this.a.asy(this.b.a)},
$S:0}
B.dGQ.prototype={
$0(){var w=this.a
return w.m(new B.dGF(w))},
$S:0}
B.dGF.prototype={
$0(){var w=this.a
w.awl(0)
w.ay=null},
$S:0}
B.dGR.prototype={
$0(){return this.a.cvp(this.b)},
$S:0}
B.cLy.prototype={
$0(){var w=this,v=null,u=C.h1(v,v,v,v,C.d3(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.c6,v,A.dP,A.c5)
u.en()
return u},
$S:294}
B.dMH.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dMG.prototype={
$0(){return this.a.d=null},
$S:0}
B.dMJ.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c__()},
$S:126}
B.dMI.prototype={
$0(){return C.a6(this.a,!1).lx()},
$S:0}
B.fgw.prototype={
$0(){return D.e_m},
$S:z+55}
B.fgx.prototype={
$0(){return D.dyu},
$S:z+59}
B.fgy.prototype={
$0(){return D.dvm},
$S:z+62}
B.fgJ.prototype={
$0(){return D.dZM},
$S:z+63}
B.fgL.prototype={
$0(){return D.dET},
$S:z+66}
B.fgM.prototype={
$0(){return D.dyp},
$S:z+88}
B.fgN.prototype={
$0(){return D.dys},
$S:z+17}
B.fgO.prototype={
$0(){return D.drx},
$S:z+18}
B.fgP.prototype={
$0(){return D.dAY},
$S:z+19}
B.fgQ.prototype={
$0(){return D.dCB},
$S:z+20}
B.fgR.prototype={
$0(){return D.dCD},
$S:z+21}
B.fgz.prototype={
$0(){return D.dxB},
$S:z+22}
B.fgA.prototype={
$0(){return D.dHC},
$S:z+23}
B.fgB.prototype={
$0(){return D.dZt},
$S:z+24}
B.fgC.prototype={
$0(){return D.dXv},
$S:z+25}
B.fgD.prototype={
$0(){return D.dGh},
$S:z+26}
B.fgE.prototype={
$0(){return D.dZB},
$S:z+27}
B.fgF.prototype={
$0(){return D.dxA},
$S:z+28}
B.fgG.prototype={
$0(){return D.dZL},
$S:z+29}
B.fgH.prototype={
$0(){return D.dxC},
$S:z+16}
B.fgI.prototype={
$0(){return D.dCT},
$S:z+31}
B.fgK.prototype={
$0(){return D.dGg},
$S:z+32}
B.eXN.prototype={
$2(d,e){return new B.aeA($.bDu()[e],new B.eXM(e,this.a),null)},
$S:z+33}
B.eXM.prototype={
$0(){var w=this.a,v=F.aDK.h(0,$.bDu()[w].a)
$.arn=v==null?"music":v
C.a6(this.b,!1).ck(C.e8(new B.eXK(w),!1,null,x.H))},
$S:0}
B.eXK.prototype={
$1(d){return $.bDu()[this.a].e.$0()},
$S:39}
B.eXO.prototype={
$2(d,e){return new B.ads(D.awu[e],new B.eXL(this.a,e),null)},
$S:z+34}
B.eXL.prototype={
$0(){return this.a.d.$1(D.awu[this.b])},
$S:0}
B.eXt.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eXs.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eXr.prototype={
$1(d){var w=this
return new C.e1(new B.eXq(w.a,w.b,w.c,w.d),null)},
$S:21}
B.eXq.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.fjY,A.at,D.fqu,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aT(12,12)
m=new C.aT(12,12)
m=C.a([new C.bB(1,A.bg,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),r[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Title",d,G.Ds,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(n,n,n,n),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iO,!0,A.a4,d,A.an,d,d,d,d),d),A.ab,new C.bB(2,A.bg,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),q[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.Ds,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bp(m,m,m,m),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iO,!0,A.a4,d,A.an,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.dio[l]
j=new C.aT(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}h=A.d.gI(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.C(t.a.c.d,s)
t.w=i}g=A.d.gI(i)}else g=A.bE
f=new C.ay(g,u[p].A(0,k)?1.8:1,A.q,-1)
n.push(C.aC(d,C.p(d,C.X(k,u[p].A(0,k)?A.c:A.aS,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bO(f,f,f,f),new C.bp(j,j,j,j),d,d,A.n),d,d,d,A.fB,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eXo(a3,p,u,k),d,d,d,d,d,d,!1,A.a7))}A.d.v(v,C.a([new C.y("SLAB "+o,d,D.f9Q,d,d,d,d,d,d,d,d,d),A.am,new C.cl(A.aO,A.e,A.j,A.m,d,A.p,d,0,m,d),A.N,new C.a7(d,44,C.cw(n,d,d,d,d,A.aO,!1),d),A.aB],w))}v.push(C.bG(A.zL,new B.eXp(t,r,q,u,a2),d))
return new C.D(new C.Q(0,0,0,a1.f.d),C.bm(!0,new C.cT(new C.aY(0,1/0,0,a0.a.b*0.86),C.cw(v,d,A5.xI,d,d,A.ag,!0),d),!0,!1,A.af,!0,!0),d)},
$S:107}
B.eXo.prototype={
$0(){var w=this
return w.a.$1(new B.eXn(w.b,w.c,w.d))},
$S:0}
B.eXn.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eXp.prototype={
$0(){var w=this,v=w.a
v.m(new B.eXm(v,w.b,w.c,w.d))
C.a6(w.e,!1).O(null)},
$S:0}
B.eXm.prototype={
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
B.eXB.prototype={
$0(){var w=this.a
return w.m(new B.eXA(w))},
$S:0}
B.eXA.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eXC.prototype={
$0(){return B.qR(this.b,this.a.f,"scene")},
$S:0}
B.eXD.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gI(u),A.d.gal(u),0.4)
u.toString
w=this.a.gZd().x
w===$&&C.c()
return C.c0(v,new C.o(v,v,v,v,v,new C.bT(D.aWG,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.bZ],x.O),v,v),A.n),A.be)},
$S:321}
B.eXE.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.f6(A.A,C.c6(new C.h8(C.a([u.gtZ(),u.gZd()],x.dS)),new B.eXz(u,this.b,v),w),A.f,A.ei),w,w,w)},
$S:242}
B.eXz.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gtZ().x
r===$&&C.c()
w=r<0.9?1:1-B.bqr(r,0.9,0.98)
v=s.gZd().x
v===$&&C.c()
u=A.dC.az(0,v)
switch(s.gawm().a){case 0:s=s.byi(t.b,r,u,t.c)
break
case 1:s=s.bOL(t.b,r,u,t.c)
break
case 2:s=s.cA8(t.b,r,u,t.c)
break
case 3:s=s.bBd(t.b,r,u,t.c)
break
case 4:s=s.bEt(t.b,r,u,t.c)
break
case 5:s=s.bDF(t.b,r,u,t.c)
break
default:s=null}return C.de(s,w)},
$S:204}
B.eXF.prototype={
$2(d,e){var w=C.auO(this.b),v=this.c.d,u=C.aq(A.d.gI(v),A.d.gal(v),0.4)
u.toString
v=C.aq(A.d.gI(v),A.d.gal(v),0.4)
v.toString
v=w.cIC(u,A.bE,v,3.5)
u=this.a
w=u.gtZ().x
w===$&&C.c()
return C.a9L(C.kY(null,null,null,1,0,new B.eXy(u),A.k.D(w,0,1)),v)},
$S:1848}
B.eXy.prototype={
$1(d){var w=this.a
w.gtZ().sp(0,d)
if(w.as)w.m(new B.eXu(w))},
$S:6}
B.eXu.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eXG.prototype={
$0(){var w=this.a
w.gtZ().sp(0,0)
w.afM()},
$S:0}
B.eXH.prototype={
$1(d){var w=this.a
w.m(new B.eXx(w,d))
if(w.as)w.afM()},
$S:6}
B.eXx.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eXI.prototype={
$0(){var w=this.a
w.m(new B.eXw(w,this.b))
w.gtZ().sp(0,0)
if(w.as)w.afM()},
$S:0}
B.eXw.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eXJ.prototype={
$0(){var w=this.a
return w.m(new B.eXv(w,this.b))},
$S:0}
B.eXv.prototype={
$0(){var w=C.C(this.b,x.G)
return this.a.w=w},
$S:0}
B.eXk.prototype={
$2(d,e){return A.k.aL(d.a,e.a)},
$S:1849}
B.eXl.prototype={
$1(d){return d.b},
$S:1850}
B.dgA.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.dgB.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.dgx.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.dgy.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dgz.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dgC.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dgD.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.dgE.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.dgF.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.dgG.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.dgH.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.dgI.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.dgJ.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.dgK.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.emq.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.emf.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.emh.prototype={
$2(d,e){return d+e.d*7+A.o.E(A.a.gX(e.b),97)},
$S:z+44}
B.emi.prototype={
$2(d,e){return d+A.o.E(A.a.gX(e.a),31)+A.o.E(A.a.gX(e.b),17)},
$S:z+45}
B.eml.prototype={
$1(d){var w=D.mG.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.E(d.d,u)]+")":t},
$S:z+46}
B.emm.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.U(q),o=x.dg,n=C.C(new C.e9(new C.cQ(new C.a_(q,new B.emn(d),p.k("a_<1>")),new B.emo(r),p.k("cQ<1,qJ?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aH(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.K)(n),++v){u=n[v]
if(w.length>=6)return
t=C.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.emn.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.emo.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.emj.prototype={
$1(d){return D.mG.h(0,d.b).c===D.wJ},
$S:z+49}
B.emk.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.emQ.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.v3(0,u)
w.aHN(A.o.an(v,1000))},
$S:9}
B.emp.prototype={
$0(){},
$S:0}
B.emb.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$$0)
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
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$$0,v)},
$S:1}
B.ems.prototype={
$1(d){var w=null,v=this.a.b
return C.bm(!0,C.w(C.a([A.N,C.dL(!1,w,w,w,!0,w,w,w,!0,w,C.X(D.mG.h(0,v).b,D.mG.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fBE,w,C.d(D.mG.h(0,v).a,w,w,w,w,w,w,A.hs,w,w,w),w,w,w),C.dL(!1,w,w,w,!0,w,w,w,!0,w,V.anm,w,w,w,w,new B.emr(d),!1,w,w,w,w,w,w,w,D.ftf,w,w,w)],x.p),A.m,w,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
B.emr.prototype={
$0(){C.a6(this.a,!1).O(!0)
return null},
$S:0}
B.emu.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.e8Q],x.p)
for(w=0;w<6;++w){v=D.awP[w]
s.push(C.dL(!1,u,u,u,!0,u,u,u,!0,u,D.bRi,u,u,u,u,new B.emt(d,v),!1,u,u,u,u,u,new C.y(v.b,u,A.kH,u,u,u,u,u,u,u,u,u),u,new C.y(v.a,u,A.hs,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bm(!0,new C.cT(new C.aY(0,1/0,0,t.a.b*0.7),C.cw(s,u,D.bwE,u,u,A.ag,!0),u),!0,!1,A.af,!0,!0)},
$S:26}
B.emt.prototype={
$0(){C.a6(this.a,!1).O(this.b)
return null},
$S:0}
B.eme.prototype={
$1(d){var w=null
return C.ek(C.a([C.bK(!1,A.de,w,w,!0,w,w,new B.emc(d),w,w),C.bK(!1,A.Dy,w,w,!0,w,w,new B.emd(d),w,w)],x.p),w,w,F.n7,D.fqF,w,w,w,w,D.ftx,w)},
$S:20}
B.emc.prototype={
$0(){C.a6(this.a,!1).O(!1)
return null},
$S:0}
B.emd.prototype={
$0(){C.a6(this.a,!1).O(!0)
return null},
$S:0}
B.emO.prototype={
$0(){var w=this.a
return w.m(new B.emN(w))},
$S:0}
B.emN.prototype={
$0(){return this.a.r=!1},
$S:0}
B.emP.prototype={
$2(d,e){var w,v,u,t=null,s=new C.ar(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.mg(new B.emE(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b5n:t
v=C.a([C.b3(u,t,t,new B.bgk(w,v,new B.emF(r),new B.emG(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.dZ(C.c6(w,new B.emH(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bG9())
return C.aC(A.c7,C.jx(new C.an(A.W,t,A.b1,A.r,v,t),A.r,t),A.y,!1,t,t,t,t,t,t,t,t,t,new B.emI(r),t,r.gcfv(),t,new B.emJ(r),new B.emK(r),new B.emL(r),t,t,t,t,t,t,t,t,t,t,new B.emM(r),t,t,t,!1,A.a7)},
$S:35}
B.emE.prototype={
$0(){return this.a.abt(this.b)},
$S:0}
B.emM.prototype={
$1(d){return this.a.cxT(d.b)},
$S:50}
B.emK.prototype={
$1(d){return this.a.cfw(d.b)},
$S:43}
B.emL.prototype={
$1(d){return this.a.cfx(d.b)},
$S:18}
B.emJ.prototype={
$1(d){return this.a.b08()},
$S:37}
B.emI.prototype={
$1(d){return this.a.ac9(d.b)},
$S:288}
B.emF.prototype={
$0(){return this.a.z},
$S:588}
B.emG.prototype={
$0(){return this.a.Q},
$S:622}
B.emH.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bKr()
if(p.length===0)return A.bH
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bE,A.q,1)
t=C.a([D.fo7,A.cS],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.K)(p),++r)t.push(new C.y(p[r],q,D.f8A,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.w(t,A.F,q,A.e,A.P,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h9,q,q,q)},
$S:61}
B.emg.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.I(e.j(0.6),A.q,1),s=x.p
return new C.D(A.e5,C.B(C.a([C.p(w,C.X(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bd,C.E(C.w(C.a([C.d(f,w,w,w,w,w,w,A7.TC,w,w,w),A.bD,C.d(g,w,w,w,w,w,w,F.TI,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1852}
B.emA.prototype={
$0(){var w=this.a.c
w.toString
return C.a6(w,!1).lx()},
$S:0}
B.emB.prototype={
$0(){var w=this.a
return w.m(new B.emz(w))},
$S:0}
B.emz.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.emC.prototype={
$0(){var w=this.a
return w.m(new B.emy(w))},
$S:0}
B.emy.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.emD.prototype={
$0(){var w=this.a
return w.m(new B.emx(w))},
$S:0}
B.emx.prototype={
$0(){return this.a.r=!0},
$S:0}
B.emw.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.mG.gdO(D.mG),w=w.gae(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.K)(p),++r)u.push(s.csK(p[r]))
return new C.D(I.agR,C.w(C.a([new C.D(R.aix,w,q),C.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.emv.prototype={
$0(){return this.a.c5O(this.b)},
$S:0}
B.dgw.prototype={
$0(){var w=this,v=null,u=C.h1(v,v,v,v,C.d3(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.c6,v,A.dP,A.c5)
u.en()
return u},
$S:294}
B.eyv.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.an(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.u(s.a+q*n,s.b+r*n)
t.b=new C.u(q*v,r*v)}A.d.bq(o,new B.eyt(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.eyu())},
$S:9}
B.eyt.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.eyu.prototype={
$0(){},
$S:0}
B.ey6.prototype={
$0(){},
$S:0}
B.ey5.prototype={
$0(){},
$S:0}
B.eyf.prototype={
$0(){return B.qR(this.b,this.a.d,"spark-painter")},
$S:0}
B.eyh.prototype={
$1(d){return this.a.aYt(0,d.b)},
$S:43}
B.eyl.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aC(0,u).gcm()>2.5}else w=!1
if(w)t.a.push(u)
v.aRt(u)
v.c8Q(u)
return null},
$S:18}
B.eyg.prototype={
$1(d){return this.a.aYs()},
$S:37}
B.eym.prototype={
$1(d){return this.a.aYt(0,d.b)},
$S:22}
B.eyn.prototype={
$1(d){return this.a.aYs()},
$S:50}
B.eyo.prototype={
$0(){var w=this.a
return w.m(new B.eye(w,this.b))},
$S:0}
B.eye.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.eyp.prototype={
$0(){var w=this.a
return w.m(new B.eyd(w))},
$S:0}
B.eyd.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.eyq.prototype={
$0(){var w=this.a
return w.m(new B.eyc(w,this.b))},
$S:0}
B.eyc.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eyr.prototype={
$1(d){var w=this.a
return w.m(new B.eyb(w,d))},
$S:6}
B.eyb.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.eys.prototype={
$0(){var w=this.a
return w.m(new B.eya(w))},
$S:0}
B.eya.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eyi.prototype={
$0(){var w=this.a
return w.m(new B.ey9(w))},
$S:0}
B.ey9.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.eyj.prototype={
$0(){var w=this.a
return w.m(new B.ey8(w))},
$S:0}
B.ey8.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.eyk.prototype={
$0(){var w=this.a
return w.m(new B.ey7(w,this.b))},
$S:0}
B.ey7.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eF4.prototype={
$0(){return B.qR(this.b,this.a.d,"title")},
$S:0}
B.eF5.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIJ().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.c_9(v[t],t,s,q,u))
return new C.D(A.fC,C.bW(A.fR,w,A.rY,0,0),null)},
$S:715}
B.eF6.prototype={
$1(d){return this.a.m(new B.eF3())},
$S:2}
B.eF3.prototype={
$0(){},
$S:0}
B.eF7.prototype={
$0(){var w=this.a
w.m(new B.eF2(w,this.b))
w=w.gIJ()
w.iC(0,0)
w.cI(0)},
$S:0}
B.eF2.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eF8.prototype={
$0(){var w=this.a
return w.m(new B.eF1(w,this.b))},
$S:0}
B.eF1.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eF9.prototype={
$0(){var w=this.a
return w.m(new B.eF0(w))},
$S:0}
B.eF0.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eFa.prototype={
$0(){var w=this.a
return w.m(new B.eF_(w,this.b))},
$S:0}
B.eF_.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eFb.prototype={
$0(){var w=this.a.gIJ()
w.iC(0,0)
w.cI(0)},
$S:0}
B.eFc.prototype={
$1(d){var w=this.a
return w.m(new B.eEZ(w,d))},
$S:6}
B.eEZ.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eiX.prototype={
$1(d){return d.a.aC(0,this.a).gcm()<16},
$S:z+13}
B.eiY.prototype={
$1(d){var w=this.b
return d.a.aC(0,w).gcm()<16||d.a.aC(0,w).gcm()>this.a.r.gam8()*2.2},
$S:z+13}
B.eiL.prototype={
$0(){return B.qR(this.b,this.a.d,"orbits")},
$S:0}
B.eiM.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.ar(e.b,e.d)
q.r=p
w=q.gadp()
v=q.w
u=q.as
t=q.at
s=u==null?A.a2K:q.cj7(u,q.gaVJ())
return new C.ew(C.aC(A.c7,C.b3(r,r,r,new B.bkH(q.e,w,v,u,t,s,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.eiI(q),new B.eiJ(q),new B.eiK(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a7),q.d)},
$S:201}
B.eiJ.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:43}
B.eiK.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.eiI.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aC(0,w).gcm()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.a_v(u,v.gaVJ(),v.Q,v.b1I(),C.a([],x.g)))
C.jQ()
if(v.ax)E.dE(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:37}
B.eiN.prototype={
$1(d){var w=this.a
return w.m(new B.eiH(w,d))},
$S:6}
B.eiH.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eiP.prototype={
$1(d){var w=this.a
return w.m(new B.eiG(w,d))},
$S:6}
B.eiG.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eiQ.prototype={
$1(d){var w=this.a
return w.m(new B.eiF(w,d))},
$S:6}
B.eiF.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eiR.prototype={
$0(){var w=this.a
return w.m(new B.eiE(w))},
$S:0}
B.eiE.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.eiS.prototype={
$0(){var w=this.a
return w.m(new B.eiD(w))},
$S:0}
B.eiD.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eiT.prototype={
$0(){var w=this.a
return w.m(new B.eiC(w))},
$S:0}
B.eiC.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.eiU.prototype={
$0(){var w=this.a
return w.m(w.gcv2())},
$S:0}
B.eiV.prototype={
$0(){var w=this.a
return w.m(w.gbGn())},
$S:0}
B.eiW.prototype={
$0(){var w=this.a
return w.m(new B.eiB(w))},
$S:0}
B.eiB.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.aj()
s=w.r
w.aqQ(50+t*(Math.min(s.a,s.b)/2-70),v.aj()*3.141592653589793*2,0.7+v.aj()*0.5,v.he())}},
$S:0}
B.eiO.prototype={
$0(){var w=this.a
return w.m(A.d.grE(w.e))},
$S:0}
B.eEw.prototype={
$1(d){return this.a.fT$-d.b>6000},
$S:609}
B.eEx.prototype={
$1(d){var w=this.a.e
return new C.a_(w,new B.eEv(d),C.U(w).k("a_<1>")).gM(0)>=3},
$S:609}
B.eEv.prototype={
$1(d){return d.a.aC(0,this.a.a).gcm()<14},
$S:z+53}
B.eEl.prototype={
$0(){return B.qR(this.b,this.a.d,"swarm")},
$S:0}
B.eEm.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.ew(C.aC(A.c7,C.b3(w,w,w,new B.bsc(v.e,v.f,v.ax,v.at,v.ay,v.fT$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eEi(v),new B.eEj(v),new B.eEk(v),w,w,w,w,w,w,w,w,new B.eEa(v),new B.eEb(v),new B.eEc(v),w,w,w,!1,A.a7),v.d)},
$S:201}
B.eEj.prototype={
$1(d){return this.a.ay=d.b},
$S:43}
B.eEk.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.eEi.prototype={
$1(d){return this.a.ay=null},
$S:37}
B.eEb.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.z(v,w.fT$))
if(w.ch)E.dE(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.lf("flute",7,500,0.3)},
$S:22}
B.eEc.prototype={
$1(d){return this.a.ay=null},
$S:50}
B.eEa.prototype={
$0(){return this.a.ay=null},
$S:0}
B.eEn.prototype={
$0(){var w=this.a
return w.m(new B.eEh(w,this.b))},
$S:0}
B.eEh.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.eEo.prototype={
$0(){var w=this.a
return w.m(new B.eEg(w,this.b))},
$S:0}
B.eEg.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a8(w.e)},
$S:0}
B.eEp.prototype={
$0(){var w=this.a
return w.m(new B.eEf(w))},
$S:0}
B.eEf.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eEq.prototype={
$1(d){var w=this.a
return w.m(new B.eEe(w,d))},
$S:6}
B.eEe.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eEr.prototype={
$1(d){var w=this.a
return w.m(new B.eEd(w,d))},
$S:6}
B.eEd.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eEs.prototype={
$1(d){var w=this.a
return w.m(new B.eE9(w,d))},
$S:6}
B.eE9.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eEt.prototype={
$1(d){var w=this.a
return w.m(new B.eE8(w,d))},
$S:6}
B.eE8.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eEu.prototype={
$1(d){var w=this.a
return w.m(new B.eE7(w,d))},
$S:6}
B.eE7.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dG0.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dG_(w,d))},
$S:129}
B.dG_.prototype={
$0(){var w=this.a,v=this.b,u=J.a4(v),t=C.aJ(u.h(v,"unlocked"))
t=t==null?null:A.k.N(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aJ(u.h(v,"level"))
t=t==null?null:A.k.N(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.T(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jw(v==null?A.rt:v)
v=v.gae(v)
while(v.C()){u=v.gR(v)
t.n(0,C.t(u.a),A.k.N(C.dR(u.b)))}w.x=t
w.Q=!0
A.d.a8(w.d)},
$S:0}
B.dG1.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dG2.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Ze(w)>0},
$S:z+14}
B.dFR.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.azv()},
$S:0}
B.dFU.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.eK(w,F.kR,new C.D(A.bB,new C.a7(340,480,C.w(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.hF,w,w,w),A.R,C.E(C.ij(!0,w,w,A.y,T.aOj,new B.dFT(u,d),100,w,w,A.ag,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.d0,w,new C.b7(v,A.Y),w)},
$S:48}
B.dFT.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dFS(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?A.bX:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.b0:A.dm,A.q,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.jh
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aG("\u2605",n)+A.a.aG("\u2606",3-n),s,s,s,s,s,s,D.fcg,s,s,s))
return C.aC(s,C.p(s,C.w(o,A.m,s,A.b9,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.a7)},
$S:75}
B.dFS.prototype={
$0(){C.a6(this.a,!1).O(this.b)
return null},
$S:0}
B.dFY.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gacq()
o=C.b3(q,q,q,new B.baa(p.d,w,v,p.gc5V(),q),o)
v=p.bXR("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gI6()
t=p.as>=p.gI6()?A.b2:A.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.B(C.a([v,p.aun("GOAL",""+w+" / "+u,t),p.aun("STARS",A.a.aG("\u2605",s)+A.a.aG("\u2606",3-s),A.aM)],r),A.m,q,A.hC,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lH)
if(p.Q&&!p.y)s.push(D.aWo)
if(p.z){o=C.m(24)
w=this.c
v=C.I((w?A.b2:A.c9).j(0.6),A.q,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.b2:A.c9,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.am,C.d("You blasted "+p.as+" dots. The goal was "+p.gI6()+".",q,q,q,q,q,q,A.hE,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aG("\u2605",t==null?1:t),q,q,q,q,q,q,D.f2O,q,q,q))}u.push(A.aB)
t=C.a([new B.fi(A.mz,"Try again",new B.dFV(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fi(A.j_,"Next level",new B.dFW(p),A.b2,q))
u.push(C.B(t,A.m,q,A.e,A.P,0,q,q))
s.push(C.av(C.p(q,C.w(u,A.m,q,A.e,A.P,0,A.p),A.f,q,q,new C.o(D.W5,q,v,o,q,q,A.n),q,q,q,q,A.a9,q,q,q),q,q,q))}return C.aC(A.c7,new C.an(A.W,q,A.b1,A.r,s,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dFX(p),q,q,q,q,!1,A.a7)},
$S:35}
B.dFX.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fT$
E.dE(180,"",200,1,0.4,"sine")
C.jj()},
$S:22}
B.dFV.prototype={
$0(){var w=this.a
return w.m(w.gb4n())},
$S:0}
B.dFW.prototype={
$0(){var w=this.a
return w.aYu(w.r+1)},
$S:0}
B.dFZ.prototype={
$0(){var w=this.a
return w.m(w.gb4n())},
$S:0}
B.cL5.prototype={
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
$S:604}
B.eeq.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcOf()?this.a.cr8(w,v,d.b):w.aC(0,v).gcm())<24},
$S:z+56}
B.eeP.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.eeE.prototype={
$0(){var w=this.a
return w.m(new B.eev(w))},
$S:0}
B.eev.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.eeF.prototype={
$0(){return B.qR(this.b,this.a.d,"marble-music")},
$S:0}
B.eeG.prototype={
$2(d,e){var w=null,v=this.a,u=new C.ar(e.b,e.d)
v.w=u
return new C.ew(C.aC(A.c7,C.b3(w,w,w,new B.bhe(v.e,v.f,v.at,v.ax,v.fT$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eeB(v),new B.eeC(v),new B.eeD(v),w,w,w,w,w,w,w,w,w,w,new B.eeu(v),w,w,w,!1,A.a7),v.d)},
$S:201}
B.eeu.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.ZZ(w)
u.e.push(new B.FE(w,w,v,u.aP3(v)))
if(u.ay)B.lf(u.z,v+12,700,0.5)}if(u.x==="erase")u.aRJ(d.b)},
$S:50}
B.eeC.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:43}
B.eeD.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aRJ(d.b)},
$S:18}
B.eeB.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aC(0,w).gcm()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.ZZ(t.ad(0,w).eC(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.FE(w,t,v,u.aP3(v)))
if(u.ay)B.lf(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:37}
B.eeH.prototype={
$0(){var w=this.a
return w.m(new B.eeA(w,this.b))},
$S:0}
B.eeA.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.eeI.prototype={
$0(){var w=this.a
return w.m(new B.eez(w,this.b))},
$S:0}
B.eez.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eeJ.prototype={
$0(){var w=this.a
return w.m(new B.eey(w,this.b))},
$S:0}
B.eey.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.eeK.prototype={
$1(d){var w=this.a
return w.m(new B.eex(w,d))},
$S:6}
B.eex.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eeL.prototype={
$0(){var w=this.a
return w.m(new B.eew(w))},
$S:0}
B.eew.prototype={
$0(){return this.a.ay0("stairs")},
$S:0}
B.eeM.prototype={
$0(){var w=this.a
return w.m(new B.eet(w))},
$S:0}
B.eet.prototype={
$0(){return this.a.ay0("pinball")},
$S:0}
B.eeN.prototype={
$0(){var w=this.a
return w.m(new B.ees(w))},
$S:0}
B.ees.prototype={
$0(){return this.a.ay0("random")},
$S:0}
B.eeO.prototype={
$0(){var w=this.a
return w.m(new B.eer(w))},
$S:0}
B.eer.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
B.eik.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.eil.prototype={
$0(){var w=this.b,v=new B.add(this.a.a,this.c)
v.c=w.fT$
return w.e.push(v)},
$S:0}
B.eis.prototype={
$0(){var w=this.a
return w.m(new B.eir(w))},
$S:0}
B.eir.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.eit.prototype={
$0(){return B.qR(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.eiu.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.ar(e.b,e.d)
if(!u.f){u.f=!0
u.aQt()}w=u.w
return new C.ew(C.aC(A.c7,C.b3(v,v,v,new B.bkI(u.e,u.gaYw(),6,u.gcld(),u.gcrB(),u.fT$,v),w),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.eiq(u),v,v,v,!1,A.a7),u.d)},
$S:201}
B.eiq.prototype={
$1(d){return this.a.c5X(d.b)},
$S:50}
B.eiv.prototype={
$1(d){var w=this.a
return w.m(new B.eip(w,d))},
$S:6}
B.eip.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eiw.prototype={
$0(){var w=this.a
return w.m(new B.eio(w,this.b))},
$S:0}
B.eio.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eix.prototype={
$0(){var w=this.a
return w.m(new B.ein(w,this.b))},
$S:0}
B.ein.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.eiy.prototype={
$0(){var w=this.a
return w.m(w.gbKn())},
$S:0}
B.eiz.prototype={
$0(){var w=this.a
return w.m(new B.eim(w))},
$S:0}
B.eim.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a8(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.add(v.aA(6),v.aj()))},
$S:0}
B.eiA.prototype={
$0(){var w=this.a
return w.m(A.d.grE(w.e))},
$S:0}
B.fwp.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.E(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:137}
B.ehP.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.ehO(w,d))},
$S:129}
B.ehO.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cv:v)
while(v.C())w.push(A.k.N(C.dR(v.gR(v))))
return this.a.x.v(0,w)},
$S:0}
B.ehB.prototype={
$2(d,e){var w=this.b
if(A.o.an(d,100)===w||A.o.E(d,100)===w)this.a.a+=e},
$S:137}
B.ehv.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b93(w.b,new C.u(w.c*(0.2+0.6*v.aj()),w.e*(0.2+0.6*v.aj()))))},
$S:0}
B.ehw.prototype={
$0(){var w=this.a
A.d.a8(w.e)
w.f.a8(0)
w.r=null},
$S:0}
B.ehA.prototype={
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
p=D.w4.h(0,v[u].a).a
o=w.aiY(u)
v=D.w4.h(0,v[t].a).a
n=w.aiY(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.vX("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaYC()&&w.x.L(0,w.d)){B.vX("zap",12,300,0.5)
m=w.x
m=C.C(m,C.a3(m).k("co.E"))
B.vU("molecule_maker",C.F(["done",m],x.N,x.z))}}}},
$S:0}
B.ehz.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a3(t).k("cu<1>"),r=this.b,q=s.k("a_<J.E>"),p=C.C(new C.a_(new C.cu(t,s),new B.ehx(r),q),q.k("J.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.K)(p),++w)t.W(0,p[w])
s=x.S
v=C.T(s,s)
t.bK(0,new B.ehy(r,v))
t.a8(0)
t.v(0,v)
A.d.cw(u.e,r)
u.r=null},
$S:0}
B.ehx.prototype={
$1(d){var w=this.a
return A.o.an(d,100)===w||A.o.E(d,100)===w},
$S:33}
B.ehy.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.E(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:137}
B.ehJ.prototype={
$1(d){return""+d.b+" "+D.w4.h(0,d.a).c.toLowerCase()},
$S:390}
B.ehK.prototype={
$0(){var w=this.a
return w.m(new B.ehI(w))},
$S:0}
B.ehI.prototype={
$0(){var w=this.a;++w.d
w.awr(0)},
$S:0}
B.ehL.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.ar(e.b,e.d)
return C.aC(A.c7,C.b3(w,w,w,new B.bhW(v.e,v.f,v.r,v.gcCe(),w),A.f3),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ehE(v),new B.ehF(v),new B.ehG(v,e),w,w,w,w,w,w,w,w,w,w,new B.ehH(v),w,w,w,!1,A.a7)},
$S:35}
B.ehH.prototype={
$1(d){return this.a.c6j(d.b)},
$S:50}
B.ehF.prototype={
$1(d){var w=this.a
return w.w=w.aYD(d.b)},
$S:43}
B.ehG.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.ehC(w,v,d,this.b))},
$S:18}
B.ehC.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.u(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.ehE.prototype={
$1(d){return this.a.w=null},
$S:37}
B.ehM.prototype={
$0(){var w=this.a
return w.m(new B.ehD(w,this.b))},
$S:0}
B.ehD.prototype={
$0(){var w=this.a
w.d=this.b
w.awr(0)},
$S:0}
B.ehN.prototype={
$0(){return this.a.c6d(0,this.b.a)},
$S:0}
B.doG.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.an(d,100)].b,i=k[A.o.E(d,100)].b,h=i.aC(0,j),g=new C.u(-h.b,h.a).eC(0,Math.max(h.gcm(),1))
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
$S:137}
B.dOL.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dOK(w,d))},
$S:129}
B.dOK.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dOA.prototype={
$0(){var w,v,u=J.e3(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.avf[w.aA(4)]
return A.d.h_(u)},
$S:23}
B.dOz.prototype={
$1(d){return B.h_q(d)==="*"},
$S:3}
B.dOB.prototype={
$1(d){return d!==this.a},
$S:3}
B.dOy.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
B.vU("dna_lab",C.F(["best",r],x.N,x.z))}r=s.d
B.vX("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga8X()[r]+" codes for "+C.t(D.Cq.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.b0F()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.K)(w),++u)r.push(D.Cq.h(0,w[u]))
r="Protein built: "+A.d.aH(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.vX("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dOJ.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dm:e,u=C.m(8),t=f?C.I(A.b0,A.q,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.b0:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.ng,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1856}
B.dOE.prototype={
$1(d){var w=D.dm7.h(0,d)
return w==null?A.c:w},
$S:602}
B.dOF.prototype={
$0(){var w=this.a
return w.m(new B.dOD(w,this.b))},
$S:0}
B.dOD.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.avK()},
$S:0}
B.dOG.prototype={
$0(){var w=this.a
return w.m(new B.dOC(w))},
$S:0}
B.dOC.prototype={
$0(){var w=this.a;++w.e
w.avK()},
$S:0}
B.dOH.prototype={
$0(){return this.a.aYB(this.b)},
$S:0}
B.dOI.prototype={
$0(){return this.a.aYB(this.b)},
$S:0}
B.dRA.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dRz(w,d))},
$S:129}
B.dRz.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dRn.prototype={
$0(){},
$S:0}
B.dRm.prototype={
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
B.dRo.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a8(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dRs.prototype={
$1(d){var w=this.a
return w.m(new B.dRr(w,d))},
$S:6}
B.dRr.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dRt.prototype={
$1(d){var w=this.a
return w.m(new B.dRq(w,d))},
$S:6}
B.dRq.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dRu.prototype={
$1(d){var w=this.a
return w.m(new B.dRp(w,d))},
$S:6}
B.dRp.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dRv.prototype={
$0(){return this.a.aa8("drought")},
$S:0}
B.dRw.prototype={
$0(){return this.a.aa8("disease")},
$S:0}
B.dRx.prototype={
$0(){return this.a.aa8("foxes")},
$S:0}
B.dRy.prototype={
$0(){return this.a.aa8("rabbits")},
$S:0}
B.d3O.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.eJ()
k.dw(A.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.aj()
p=k.aj()
o=(r&1)===0?1:-1
o=A.k.E(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.aj()
p=Math.sin(s+r*2)
n=new C.kh(new C.er(e,l,l,A.cO,l,l,l,l,l,l,new C.H(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a4,A.c6,new C.js(1),l,l,l,l,A.c5,l)
n.en()
n.a4(w,new C.u(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1858}
B.d3Q.prototype={
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
if(m!=null)n.bB(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}else{n=new C.ap(p,o)
v.push(n)
m=u.f
if(m!=null)n.bB(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}}$.W()
l=C.N()
l.b=A.ae
l.c=2.6
l.r=f.gp(0)
l.e=A.fE
this.c.aQ(u,l)},
$S:1859}
B.d3P.prototype={
$3(d,e,f){var w=null,v=C.h1(w,w,w,w,C.d3(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a4,A.c6,w,A.dP,A.c5)
v.en()
v.a4(this.a,new C.u(f,this.b.b+2))},
$S:1860}
B.bFy.prototype={
$2(d,e){return d+e.a*e.b},
$S:1861}
B.fqR.prototype={
$2(d,e){return e.a-d.a},
$S:1862}
B.dCb.prototype={
$2(d,e){return d+e},
$S:72}
B.dCo.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dCn(v,A.k.D((v.gvT()-w[v.e].guW())/Math.max(w[v.e].guW(),8),-1,1)*0.32,u))},
$S:9}
B.dCn.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dCp.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dCm(w,d))},
$S:129}
B.dCm.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cv:v)
while(v.C())w.push(A.k.N(C.dR(v.gR(v))))
return this.a.r.v(0,w)},
$S:0}
B.dCc.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.E(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dCh.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1863}
B.dCi.prototype={
$0(){var w=this.a
return w.m(new B.dCg(w))},
$S:0}
B.dCg.prototype={
$0(){var w=this.a;++w.e
A.d.h2(w.f,0,5,0)},
$S:0}
B.dCj.prototype={
$2(d,e){var w=null,v=this.a
return C.aC(A.c7,C.b3(w,w,w,new B.b9f(v.w,this.b.a,v.f,v.gvT()===v.d[v.e].guW(),w),A.f3),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dCf(v,e),w,w,w,!1,A.a7)},
$S:35}
B.dCf.prototype={
$1(d){var w=this.b.b,v=A.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cy5(v-1)},
$S:50}
B.dCk.prototype={
$0(){var w=this.a
return w.m(new B.dCe(w,this.b))},
$S:0}
B.dCe.prototype={
$0(){var w=this.a
w.e=this.b
A.d.h2(w.f,0,5,0)},
$S:0}
B.dCl.prototype={
$0(){var w=this.a
return w.m(new B.dCd(w))},
$S:0}
B.dCd.prototype={
$0(){return A.d.h2(this.a.f,0,5,0)},
$S:0}
B.cDD.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bx(C.cg(new C.u(d,s),20,w),A.ql)
$.W()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.r=f.gp(0)
p=q.H()
u.drawRRect(C.es(r),p)
p.delete()
q=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.2
q.r=A.dB.gp(0)
p=q.H()
u.drawRRect(C.es(r),p)
p.delete()
B.fpR(v,"1",new C.u(d,s),A.bj,11)}},
$S:1864}
B.dVD.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new B.dVC(w,v))},
$S:9}
B.dVC.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dVE.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dVB(w,d))},
$S:129}
B.dVB.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cv:v)
while(v.C())w.push(A.k.N(C.dR(v.gR(v))))
return this.a.w.v(0,w)},
$S:0}
B.dVt.prototype={
$0(){var w=A.k.V(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dVx.prototype={
$0(){var w=this.a
return w.m(new B.dVw(w))},
$S:0}
B.dVw.prototype={
$0(){return this.a.r++},
$S:0}
B.dVy.prototype={
$0(){var w=this.a
return w.m(new B.dVv(w,this.b))},
$S:0}
B.dVv.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dVz.prototype={
$1(d){var w=this.a
return w.m(new B.dVu(w,d))},
$S:6}
B.dVu.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dVA.prototype={
$1(d){return this.a.c6k(this.b,d)},
$S:6}
B.dbO.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bPK(d,e,f,g),m=this.b
$.W()
w=C.N()
v=C.aq(h,A.c,i?0.1:0.35)
v.toString
u=C.aq(h,A.w,0.5)
u.toString
w.saq(new C.bT(A.A,0.5,A.x,null,0,C.a([v,h,u],x.O),null,null).aw(0,C.bU(d,e+6)))
m.aQ(n,w)
w=C.N()
w.b=A.ae
w.c=1.5
w.r=A.aW.gp(0)
m.aQ(n,w)
w=C.N()
w.r=A.w.j(0.28).gp(0)
m.af(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.hL.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.N()
w.r=A.aL.gp(0)
m.af(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1865}
B.dbP.prototype={
$3(d,e,f){var w=this,v=w.b
return B.fpR(w.a,d,new C.u(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1866}
B.dGn.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dGm(w,d))},
$S:129}
B.dGm.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cv:v)
while(v.C())w.push(A.k.N(C.dR(v.gR(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dG5.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jH(90-(w-65)):d},
$S:14}
B.dGe.prototype={
$1(d){return this.a.m(new B.dGd())},
$S:2}
B.dGd.prototype={
$0(){},
$S:0}
B.dGf.prototype={
$1(d){return this.a.m(new B.dGc())},
$S:2}
B.dGc.prototype={
$0(){},
$S:0}
B.dGg.prototype={
$0(){var w=this.a
return w.m(new B.dGb(w))},
$S:0}
B.dGb.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aXj()},
$S:0}
B.dGh.prototype={
$0(){var w=this.a
return w.m(new B.dGa(w))},
$S:0}
B.dGa.prototype={
$0(){return this.a.f=0},
$S:0}
B.dGi.prototype={
$0(){var w=this.a
return w.m(new B.dG9(w))},
$S:0}
B.dG9.prototype={
$0(){return this.a.f=1},
$S:0}
B.dGj.prototype={
$0(){var w=this.a
return w.m(new B.dG8(w,this.b))},
$S:0}
B.dG8.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dGk.prototype={
$1(d){var w=this.a
return w.m(new B.dG7(w,d))},
$S:6}
B.dG7.prototype={
$0(){return this.a.w=A.k.V(this.b)},
$S:0}
B.dGl.prototype={
$1(d){var w=this.a
w.m(new B.dG6(w,d))
if(w.ga9q()&&w.Q.L(0,w.x)){B.vX("zap",9,220,0.45)
w=w.Q
w=C.C(w,C.a3(w).k("co.E"))
B.vU("cipher_lab",C.F(["done",w],x.N,x.z))}},
$S:6}
B.dG6.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.bLJ.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bLU.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bLP.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bLV.prototype={
$1(d){return this.a.Lw(d)&&!d.x},
$S:z+1}
B.bLW.prototype={
$2(d,e){return Math.max(d,this.a.azZ(e))},
$S:z+6}
B.bLY.prototype={
$2(d,e){var w=this.a
return w.c8(0,d.a+"."+e,new B.bLZ(w))},
$S:z+5}
B.bLZ.prototype={
$0(){return this.a.a},
$S:108}
B.bLX.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:77}
B.bM_.prototype={
$2(d,e){var w=this.a
return w.c8(0,this.b.$1(this.c.$2(d,e)),new B.bM0(w))},
$S:z+5}
B.bM0.prototype={
$0(){return this.a.a},
$S:108}
B.bLL.prototype={
$2(d,e){var w=this.a
return w.c8(0,d.a+"."+e,new B.bLM(w))},
$S:z+5}
B.bLM.prototype={
$0(){return this.a.a},
$S:108}
B.bLK.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:77}
B.bLN.prototype={
$2(d,e){var w=this.a
return w.c8(0,this.b.$1(this.c.$2(d,e)),new B.bLO(w))},
$S:z+5}
B.bLO.prototype={
$0(){return this.a.a},
$S:108}
B.bLI.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bM1.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bLQ.prototype={
$1(d){return d!==this.b&&this.a.aG6(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bLT.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bLS.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bLR.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bGK.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bGL.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.ckp.prototype={
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
$S:198}
B.fHL.prototype={
$1(d){var w
$.W()
w=C.N()
w.r=d.gp(0)
return w},
$S:1867}
B.fHN.prototype={
$2(d,e){var w
$.W()
w=C.N()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bS
return w},
$S:1868}
B.fHO.prototype={
$5(d,e,f,g,h){return C.bx(new C.a9(d,e,d+f,e+g),new C.aT(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1869}
B.fHM.prototype={
$3(d,e,f){var w
$.W()
w=C.N()
w.saq(new C.a8(A.b_,A.b4,A.x,C.a([e,f],x.O),null,null).aw(0,d))
return w},
$S:1870}
B.bGo.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bGp.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.bGn(w))},
$S:0}
B.bGn.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bGq.prototype={
$0(){return C.a([],x.ey)},
$S:1871}
B.bGr.prototype={
$1(d){return this.a.bE(d).a>15e5},
$S:393}
B.bGs.prototype={
$0(){var w,v,u
J.bDC(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.Ct(v))if(B.h_T(v.b))w.b_C(v)
else w.a_e(v)
else{u=w.a.c.bci(v)
w.adC(u==null?"The "+$.qf().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bGm.prototype={
$1(d){return new C.e1(new B.bGk(this.a,this.b),null)},
$S:21}
B.bGk.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bGl(this.a,v,e),t=$.qf(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.kg,w,w,w),q=C.aH(w,w,w,w,D.bI_,w,w,w,new B.bGg(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bm(!0,new C.D(A.xK,C.w(C.a([r,A.at,D.fCA,A.R,C.B(C.a([q,C.E(C.kY(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bOC,w,w,w,new B.bGh(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.B(C.a([C.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b7,C.bK(!1,D.fgl,w,w,!0,w,w,new B.bGi(u),w,w),C.bK(!1,A.zL,w,w,!0,w,w,new B.bGj(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:87}
B.bGl.prototype={
$1(d){var w=this.a
w.m(new B.bGe(this.b,d))
this.c.$1(new B.bGf())
w.a.toString},
$S:6}
B.bGe.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
B.bGf.prototype={
$0(){},
$S:0}
B.bGg.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
B.bGh.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
B.bGi.prototype={
$0(){return this.a.$1(1)},
$S:0}
B.bGj.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.bGH.prototype={
$2(d,e){var w
if(d==="short"){E.dE(1800,"",120,0,0.55,"noise")
E.dE(200,"",160,2.2,0.4,"saw")
C.fJ()
w=this.a
if(w.c!=null)w.adC("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dE(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.adC("\u26a0 Overloaded! The "+$.qf().h(0,e.b).b+" can only give about "+A.k.ab(w.a.c.zE(e),2)+" amps but your gadgets are asking for "+A.k.ab(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.adC("Burnt out! "+e.ay)
E.dE(140,"",320,0,0.6,"noise")
E.dE(900,"",160,1.5,0.35,"square")}},
$S:z+65}
B.bGI.prototype={
$0(){},
$S:0}
B.bFS.prototype={
$0(){},
$S:0}
B.bGJ.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bGG.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.ar(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aC(A.c7,C.b3(p,p,p,new B.ail(w,v,u,t,s,r==null?A.j2:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGA(o),new B.bGB(o),new B.bGC(o),p,p,p,p,p,p,p,p,p,p,new B.bGD(o),p,p,p,!1,A.a7)],q)
if(o.a.c.a.length===0)n.push(D.b4G)
w=o.Q
if(w!=null){v=C.m(14)
u=C.I(A.cs,A.q,1)
n.push(C.ao(p,C.aC(p,C.p(p,C.B(C.a([D.feB,C.E(C.d(w,p,p,p,p,p,p,D.f6Q,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.ba5,p,u,v,p,p,A.n),p,p,p,p,A.o_,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bGE(o),p,p,p,p,p,p,!1,A.a7),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aYG(C.B(C.a([D.byI,new B.fi(A.G1,"Cut wire",new B.bGF(o),A.c9,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.cg3(w),p,p,10,10,p,p))}return C.jx(new C.an(A.W,p,A.b1,A.r,n,p),A.r,p)},
$S:459}
B.bGB.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b6B(s)
if(r!=null){t.m(new B.bGy(t,r,d))
return}w=t.b0i(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.u(v*u.a,w.d*u.b).aC(0,s)
t.m(new B.bGz(t,w))}},
$S:43}
B.bGy.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bGz.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bGC.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new B.bGw(w,d))
else if(w.w!=null)w.m(new B.bGx(w,d.b.ad(0,w.x)))},
$S:18}
B.bGw.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bGx.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bGA.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b6B(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.ak9(u.a,u.b,v.a,v.b)!=null)E.dE(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.adA()},
$S:37}
B.bGD.prototype={
$1(d){var w=this.a,v=d.b,u=w.b0i(v)
if(u!=null){w.m(new B.bGu(w,u))
if(D.m0.ai(0,u.b))w.cqC(u)
w.a.toString
return}w.m(new B.bGv(w,w.cD3(v)))},
$S:50}
B.bGu.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dE(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dE(200,"",70,0,0.2,"saw")}},
$S:0}
B.bGv.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bGE.prototype={
$0(){var w=this.a
return w.m(new B.bGt(w))},
$S:0}
B.bGt.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bGF.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dE(300,"",50,0,0.35,"noise")
w.adA()},
$S:0}
B.bFT.prototype={
$0(){return this.a.bog(this.b)},
$S:0}
B.bGb.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.B(C.a([C.d(d,w,w,w,w,w,w,D.f1q,w,w,w),C.E(C.kY(this.b.d,w,w,g,h,new B.bGd(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1872}
B.bGd.prototype={
$1(d){var w=this.a
w.m(new B.bGc(this.b,d))
w.a.toString},
$S:6}
B.bGc.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bFZ.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dE(260,"",70,0,0.35,"noise")
w.adA()},
$S:0}
B.bG_.prototype={
$0(){var w=this.a
return w.m(new B.bFY(w))},
$S:0}
B.bFY.prototype={
$0(){return this.a.d=null},
$S:0}
B.bG0.prototype={
$0(){this.a.m(new B.bFX(this.b,this.c))
E.dE(900,"",40,0,0.3,"noise")},
$S:0}
B.bFX.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bG3.prototype={
$0(){return this.a.b_C(this.b)},
$S:0}
B.bG4.prototype={
$0(){return this.a.a_e(this.b)},
$S:0}
B.bG5.prototype={
$0(){return this.a.a0T(this.b)},
$S:0}
B.bG6.prototype={
$0(){var w=this.a
w.m(new B.bFW(this.b,this.c))
w.a.toString},
$S:0}
B.bFW.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bG7.prototype={
$0(){var w=this.a
w.m(new B.bFV(this.b,this.c))
w.a.toString},
$S:0}
B.bFV.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bG8.prototype={
$0(){var w=this.a
w.m(new B.bFU(this.b,this.c))
w.a.toString},
$S:0}
B.bFU.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bG9.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bGa.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bG1.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bG2.prototype={
$1(d){return this.a.f=d},
$S:6}
B.fgh.prototype={
$1(d){return d.aFK("bulb")},
$S:z+2}
B.fgi.prototype={
$1(d){return d.pL(0,"switch")&&d.aFK("bulb")},
$S:z+2}
B.fgj.prototype={
$1(d){return A.d.b4(d.a,new B.fg4())},
$S:z+2}
B.fg4.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.fgk.prototype={
$1(d){return d.pL(0,"resistor")&&A.d.b4(d.a,new B.fg3())},
$S:z+2}
B.fg3.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.fgl.prototype={
$1(d){return!d.pL(0,"battery")&&d.aFK("bulb")},
$S:z+2}
B.fg8.prototype={
$1(d){return A.d.b4(d.a,new B.fg2())},
$S:z+2}
B.fg2.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fg9.prototype={
$1(d){return A.d.b4(d.a,new B.fg1())},
$S:z+2}
B.fg1.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fga.prototype={
$1(d){return A.d.b4(d.a,new B.fg0())},
$S:z+2}
B.fg0.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.fgb.prototype={
$1(d){var w=d.a
return A.d.b4(w,new B.ffZ())&&A.d.b4(w,new B.fg_())&&d.pL(0,"buck")},
$S:z+2}
B.ffZ.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fg_.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.fgc.prototype={
$1(d){var w=d.a
return A.d.b4(w,new B.ffX())&&A.d.b4(w,new B.ffY())},
$S:z+2}
B.ffX.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.ffY.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fgd.prototype={
$1(d){return A.d.b4(d.a,new B.ffW())},
$S:z+2}
B.ffW.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
B.dRI.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
B.dRR.prototype={
$1(d){var w=this.a.d
return w.aG6(d)&&w.Ct(d)},
$S:z+1}
B.dRS.prototype={
$1(d){return d.x},
$S:z+1}
B.dRT.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
B.dRU.prototype={
$0(){},
$S:0}
B.dRH.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.fvq,A.at,D.fgh,A.R],o)
for(w=this.a,v=0;v<19;++v){u=D.Q_[v]
t=A.c.j(0.06)
s=new C.aT(14,14)
r=new C.ay(A.bE,1,A.q,-1)
n.push(C.aC(q,C.p(q,C.w(C.a([new C.y(u.a,q,A.kf,q,q,q,q,q,q,q,q,q),A.bD,new C.y(u.b,q,D.f7A,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bO(r,r,r,r),new C.bp(s,s,s,s),q,q,A.n),q,q,q,A.cy,A.bm,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dRG(w,d,u),q,q,q,q,q,q,!1,A.a7))}return C.eK(q,F.kR,new C.D(A.bQ,new C.a7(340,q,C.cw(n,q,q,q,q,A.ag,!0),q),q),q,q,q,q,A.d0,q,new C.b7(p,A.Y),q)},
$S:48}
B.dRG.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.m(new B.dRF(w,this.c))
E.dE(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dRF.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bhr()},
$S:0}
B.dRD.prototype={
$1(d){return new B.Va(this.a.d,null)},
$S:z+67}
B.dRE.prototype={
$0(){},
$S:0}
B.dRQ.prototype={
$1(d){return new C.e1(new B.dRP(this.a),null)},
$S:21}
B.dRP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ahw(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.b2:A.aP
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.B(C.a([D.fsK,A.b7,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.N,C.bw(C.m(4),C.m3(A.bE,m,m,5,m,w.a/11,new C.lX(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.fjl)
else{h=f.j(0.1)
t=C.m(14)
s=C.I(f.j(0.5),A.q,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Ag.TA,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.Du,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.w(C.a([r,A.at,q,new C.bI(A.a8,m,m,C.bK(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dRN(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bm,m,m,m))}u.push(A.R)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aT(12,12)
n=new C.ay(o===l.f?f.j(0.6):A.dm,1,A.q,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aA:A.c
u.push(C.aC(m,C.p(m,new C.cl(A.aO,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.y(s,m,A.a7V,m,m,m,m,m,m,m,m,m),A.au,new C.bB(1,A.bg,new C.y(r.a,m,new C.H(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bO(n,n,n,n),new C.bp(t,t,t,t),m,m,A.n),m,m,m,A.eI,A.o_,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dRO(l,o,e),m,m,m,m,m,m,!1,A.a7))}return C.bm(!0,new C.cT(new C.aY(0,1/0,0,k.a.b*0.75),C.cw(u,m,A5.xI,m,m,A.ag,!0),m),!0,!1,A.af,!0,!0)},
$S:87}
B.dRN.prototype={
$0(){var w=this.a
w.m(new B.dRL(w))
this.b.$1(new B.dRM())
w.ET()},
$S:0}
B.dRL.prototype={
$0(){var w=this.a
$.ahw()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dRM.prototype={
$0(){},
$S:0}
B.dRO.prototype={
$0(){var w=this.a
w.m(new B.dRJ(w,this.b))
this.c.$1(new B.dRK())
w.ET()},
$S:0}
B.dRJ.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dRK.prototype={
$0(){},
$S:0}
B.dRW.prototype={
$0(){return C.a6(this.a,!1).lx()},
$S:0}
B.dRX.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(C.md("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return C.b(C.a6(t.b,!1).ck(C.e8(new B.dRV(),!1,null,x.H)),$async$$0)
case 4:case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
B.dRV.prototype={
$1(d){C.lm("construction")
return Am.hD9()},
$S:z+68}
B.dRY.prototype={
$0(){return B.hpf(this.a,"ELECTRONICS LAB",this.b,A.aP)},
$S:0}
B.dRZ.prototype={
$0(){var w=this.a
return w.m(w.d.gcUe())},
$S:0}
B.dS_.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grE(v))
w.ET()},
$S:0}
B.cBa.prototype={
$2(d,e){var w=null,v=this.a.gaws().x
v===$&&C.c()
return C.b3(w,w,w,new B.b8n(v,w),A.av)},
$S:70}
B.cB9.prototype={
$3(d,e,f){var w=new C.aO($.W().r,A.ao,null,null,C.a([],x.v)),v=d.a,u=d.b,t=u-e
w.F(new C.b5(v,t))
w.F(new C.cV(v,u,v+e,u))
w.F(new C.cV(v,u,v,u+e))
w.F(new C.cV(v,u,v-e,u))
w.F(new C.cV(v,u,v,t))
w.F(new C.bE())
t=C.N()
t.r=A.c.j(f).gp(0)
this.a.aQ(w,t)},
$S:672}
B.fMr.prototype={
$3(d,e,f){return new B.Ur(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fMs.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cZ(e,!1,C.iq(A.A,g,null,new C.bf(C.cH(A.ct,e,null),new C.bq(0.85,1,w),w.k("bf<bJ.T>"))),null)},
$C:"$4",
$R:4,
$S:31}
B.dNE.prototype={
$0(){return C.a6(this.a,!1).lx()},
$S:0}
B.dND.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bXF(o):q.bAg(o,p),m=x.p
p=C.a([C.qi(new C.nf(n,new C.cx(p,x.aC)),A.pQ,C.rQ(),A.bc,A.bc,new B.dNB())],m)
n=t.d
if(n){w=A.k.E(q.gRB(),12)<4
v=w?150:96
u=C.m(16)
m=C.a([A.au],m)
if(w)m.push(D.byu)
else m.push(A.b7)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.b2:A.az,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.au)
p.push(C.ao(s,C.av(C.df(s,C.B(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ew,new C.o(A.w,s,s,u,s,s,A.n),A.nb,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.uF)p.push(C.ao(s,C.av(C.p(s,s,A.f,s,s,A.Kg,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wh)p.push(C.ao(s,C.p(s,s,A.f,s,s,A.Kg,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aC(s,C.av(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dNC(q),s,s,s,s,s,s,!1,A.a7),s,s,0,0,s,s))
return C.bw(r,new C.an(A.W,s,A.b1,A.r,p,s),A.aq)},
$S:304}
B.dNB.prototype={
$2(d,e){var w=x.Y
return new C.cZ(e,!1,C.iq(A.A,d,null,new C.bf(e,new C.bq(0.92,1,w),w.k("bf<bJ.T>"))),null)},
$S:410}
B.dNC.prototype={
$0(){var w=this.a
return w.m(new B.dNA(w))},
$S:0}
B.dNA.prototype={
$0(){return this.a.e=null},
$S:0}
B.dNz.prototype={
$0(){var w=this.a
return w.m(new B.dNy(w,this.b))},
$S:0}
B.dNy.prototype={
$0(){return this.a.e=A.d.cH(F.k8,this.b)},
$S:0}
B.dNx.prototype={
$0(){var w=this.a
return w.m(new B.dNw(w))},
$S:0}
B.dNw.prototype={
$0(){return this.a.e=0},
$S:0}
B.dNs.prototype={
$0(){var w=this.a
return w.m(new B.dNr(w))},
$S:0}
B.dNr.prototype={
$0(){return this.a.e=null},
$S:0}
B.dNv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.m(o?20:8),m=A.w.j(0.55),l=x.p
m=C.p(p,C.B(C.a([D.fB4,A.au,C.E(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eE,p,p,p,D.fdu,p,p,p),1),C.d(A.a.aU(A.o.u(C.dk(new C.S(Date.now(),0,!1))),2,"0")+":"+A.a.aU(A.o.u(C.h0(new C.S(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qu,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.kW,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.buw(w.gRB(),this.c.d,p),A.av)],l)
o=w.e
if(o!=null){u=C.m(10)
t=C.I(A.b0,A.q,1)
s=C.m(10)
o=C.p(p,C.B(C.a([C.aC(p,C.p(p,p,A.f,p,p,A.Kf,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dNu(w),p,p,p,p,p,p,!1,A.a7),A.ec,C.p(p,p,A.f,p,p,A.ab_,p,12,p,p,p,p,p,12),A.ec,C.p(p,p,A.f,p,p,F.Vs,p,12,p,p,p,p,p,12),A.au,C.E(C.d(F.k8[o].a,p,1,A.a2,p,p,p,A.a7N,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cu,p,p,p,24,p,p,A.fr,p,p,p)
r=w.e
r.toString
v.push(C.bZ(0,new C.D(D.bve,C.p(p,C.bw(s,C.w(C.a([o,C.E(C.b3(p,p,p,new B.aej(r,w.gRB(),p),A.f3),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new C.o(A.w,p,t,u,D.df1,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.m(18)
t=C.I(A.b0,A.q,1)
s=C.a([],l)
for(q=0;q<8;++q)s.push(new C.D(A.jn,w.aup(F.k8[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.B(s,A.m,p,A.e,A.P,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.ll,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bw(n,C.p(p,C.w(C.a([m,C.E(new C.an(A.W,p,A.b1,A.r,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,U.Ls,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:304}
B.dNu.prototype={
$0(){var w=this.a
return w.m(new B.dNt(w))},
$S:0}
B.dNt.prototype={
$0(){return this.a.e=null},
$S:0}
B.ea_.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.e9Z(w,d))},
$S:129}
B.e9Z.prototype={
$0(){var w=this.a,v=this.b,u=J.a4(v),t=C.aJ(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=C.aJ(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=B.h_Z(v)},
$S:0}
B.ea0.prototype={
$0(){},
$S:0}
B.e9Q.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.h_Z(v)
w.r.a8(0)
w.x=!1},
$S:0}
B.e9R.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gvr().r){C.jQ()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.vX("click",s.c+s.d,60,0.4)
if(B.hpq(r.gvr(),q).b.a===r.gvr().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.vU("laser_maze",C.F(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.BC("bell",D.aoV,700,0.45)
for(q=r.gvr().c,q=C.ea(q,q.r,C.a3(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.z(new C.u((A.o.E(t,7)+0.5)*p+w,(A.o.an(t,7)+0.5)*p+v),0))}}},
$S:0}
B.e9U.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.ar(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aC(A.c7,C.b3(s,s,s,new B.bgp(r.gvr(),w,v.a,u,r.w,r.z,s),q),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.e9S(r),s,s,s,!1,A.a7),C.ao(s,C.dZ(C.B(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,K.aPT,s,s,s),C.d(""+u.a+"/"+r.gvr().c.a+" \u2605   mirrors "+w.a+"/"+r.gvr().r,s,s,s,s,s,s,R.a7u,s,s,s)],t),A.m,s,A.hC,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.fl5("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.b2,C.a([new B.fi(A.j_,"Next level",new B.e9T(r),A.b2,s)],t)))
return new C.an(A.W,s,A.b1,A.r,w,s)},
$S:63}
B.e9S.prototype={
$1(d){return this.a.c6G(d.b)},
$S:50}
B.e9T.prototype={
$0(){var w=this.a
return w.adG(w.d+1)},
$S:0}
B.e9V.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.grE(v))},
$S:0}
B.e9W.prototype={
$0(){var w=this.a
return w.adG(w.d+1)},
$S:0}
B.e9X.prototype={
$0(){var w=this.a
return w.adG(w.d-1)},
$S:0}
B.e9Y.prototype={
$0(){return this.a.adG(this.b)},
$S:0}
B.dgT.prototype={
$1(d){var w=this.b
return new C.u(this.a+(A.o.E(d,7)+0.5)*w,this.c+(A.o.an(d,7)+0.5)*w)},
$S:600}
B.dgW.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.u(r,s):new C.u(r,r),p=new C.u(-q.a,-q.b)
r=this.c
w=t.ad(0,q)
v=t.ad(0,p)
$.W()
u=C.N()
u.r=(f?A.fU:A.aL).gp(0)
u.c=7
u.d=A.bS
r.bF(w,v,u)
w=t.ad(0,q)
v=t.ad(0,p)
u=C.N()
u.r=A.c.gp(0)
u.c=2.4
u.d=A.bS
r.bF(w,v,u)},
$S:1874}
B.dgU.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:424}
B.dgV.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:424}
B.eai.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.eah(w,d))},
$S:129}
B.eah.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.eaj.prototype={
$0(){},
$S:0}
B.ea3.prototype={
$1(d){return d===0},
$S:125}
B.eac.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.v(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,K.a7F,s,s,s)
w=r.z==="play"?A.k.dA(r.y):20
v=x.p
w=C.B(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.c9:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,R.a7u,s,s,s)],v),A.m,s,A.hC,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dm:p
t=C.m(22)
t=C.E(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.b0,A.q,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.w(C.a([new C.D(D.bsz,w,s),C.E(C.B(C.a([C.E(new C.D(A.bR,C.w(C.a([t,A.am,C.d(q?"TARGET":"TARGET: "+r.gcy8(),s,s,s,s,s,s,D.aQJ,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.E(new C.D(A.bR,C.w(C.a([C.E(C.b3(s,s,s,new B.bgE(r.f,s),A.f3),1),A.am,C.d("YOURS \xb7 "+A.k.V(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aQJ,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.fl5("Light Mixer","Match each colour with red, green and blue light."+q,A.b8,C.a([new B.fi(A.iI,"Start",new B.ea9(r),A.b2,s)],v)))}if(r.z==="result")w.push(B.fl5(r.Q,"Score so far: "+r.w,A.aM,C.a([new B.fi(A.j_,"Next colour",new B.eaa(r),A.b2,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.fl5("Finished! "+q,u,A.b2,C.a([new B.fi(A.mz,"Play again",new B.eab(r),A.b2,s)],v)))}return new C.an(A.W,s,A.aa,A.r,w,s)},
$S:63}
B.ea9.prototype={
$0(){var w=this.a
return w.m(new B.ea5(w))},
$S:0}
B.ea5.prototype={
$0(){var w=this.a
w.w=w.r=0
w.aww()},
$S:0}
B.eaa.prototype={
$0(){var w=this.a
return w.m(w.gc6E())},
$S:0}
B.eab.prototype={
$0(){var w=this.a
return w.m(new B.ea4(w))},
$S:0}
B.ea4.prototype={
$0(){var w=this.a
w.w=w.r=0
w.aww()},
$S:0}
B.ead.prototype={
$1(d){var w=this.a
return w.m(new B.ea8(w,d))},
$S:6}
B.ea8.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.eae.prototype={
$1(d){var w=this.a
return w.m(new B.ea7(w,d))},
$S:6}
B.ea7.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.eaf.prototype={
$1(d){var w=this.a
return w.m(new B.ea6(w,d))},
$S:6}
B.ea6.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.eag.prototype={
$0(){var w=this.a
return w.m(w.gc6F())},
$S:0}
B.fgZ.prototype={
$0(){return D.e0P},
$S:z+70}
B.fh_.prototype={
$0(){return D.dz1},
$S:z+71}
B.fh0.prototype={
$0(){return D.dvz},
$S:z+72}
B.fh1.prototype={
$0(){return D.dyr},
$S:z+73}
B.fh2.prototype={
$0(){return D.dDo},
$S:z+74}
B.fh3.prototype={
$0(){return D.dXy},
$S:z+75}
B.fh4.prototype={
$0(){return D.dZK},
$S:z+76}
B.fh5.prototype={
$0(){return D.dCI},
$S:z+77}
B.cf2.prototype={
$0(){return C.a6(this.a,!1).lx()},
$S:0}
B.cf3.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.hsR(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aT(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ac(0,A.G,p.j(0.4),A.dn,16)],t)
n=A.c.j(0.85)
j.push(C.aC(m,C.p(m,new C.an(A.W,m,A.aa,A.r,C.a([new C.cL(m,-6,-6,m,m,m,new C.y(r.c,m,M.Tz,m,m,m,m,m,m,m,m,m),m),new C.bI(A.lC,m,m,C.w(C.a([new C.y(r.a,m,D.fc6,m,m,m,m,m,m,m,m,m),A.cS,new C.y(r.b,m,new C.H(!0,n,m,m,m,m,12,A.a5,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.P,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bp(q,q,q,q),p,new C.a8(A.ax,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bB,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.cf1(d,r),m,m,m,m,m,m,!1,A.a7))}return C.bW(A.bA,j,A.bq,14,14)},
$S:175}
B.cf1.prototype={
$0(){return C.a6(this.a,!1).ck(C.e8(new B.cf0(this.b),!1,null,x.H))},
$S:0}
B.cf0.prototype={
$1(d){return this.a.f.$0()},
$S:39}
B.eJx.prototype={
$0(){var w=this.a
return w.w=w.d[w.b3O(w.f)]},
$S:0}
B.eJt.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cG.aj()*7},
$S:0}
B.eJs.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bO(0,A.c8)
w.w=""},
$S:0}
B.eJv.prototype={
$0(){var w=this.a
return w.m(new B.eJu(w,this.b))},
$S:0}
B.eJu.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cw(w,this.b)},
$S:0}
B.eJw.prototype={
$1(d){return this.a.aZ5(0)},
$S:2}
B.dTW.prototype={
$0(){return B.BC("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dTX.prototype={
$0(){},
$S:0}
B.dTR.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dTT.prototype={
$0(){return this.a.aZ7(this.b)},
$S:0}
B.dTU.prototype={
$0(){var w=this.a
return w.m(new B.dTS(w))},
$S:0}
B.dTS.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dTV.prototype={
$0(){var w=this.a
return w.aZ7(w.d)},
$S:0}
B.dEO.prototype={
$2(d,e){return d+e},
$S:89}
B.dEP.prototype={
$0(){},
$S:0}
B.dEJ.prototype={
$2(d,e){return d+e},
$S:89}
B.dEM.prototype={
$0(){var w=this.a
return w.m(new B.dEL(w,this.b))},
$S:0}
B.dEL.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dEN.prototype={
$0(){var w=this.a
return w.m(new B.dEK(w))},
$S:0}
B.dEK.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dRc.prototype={
$0(){return B.qR(this.b,this.a.d,"drawing")},
$S:0}
B.dRd.prototype={
$1(d){var w=this.a
return w.m(new B.dRb(w,d))},
$S:43}
B.dRb.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aHB(u,v,t))},
$S:0}
B.dRe.prototype={
$1(d){var w=this.a
return w.m(new B.dRa(w,d))},
$S:18}
B.dRa.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
B.dRf.prototype={
$1(d){var w=this.a
return w.m(new B.dR9(w,d))},
$S:22}
B.dR9.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aHB(u,v,t))},
$S:0}
B.dRg.prototype={
$0(){var w=this.a
return w.m(new B.dR8(w,this.b))},
$S:0}
B.dR8.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dRh.prototype={
$1(d){var w=this.a
return w.m(new B.dR7(w,d))},
$S:6}
B.dR7.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dRi.prototype={
$0(){var w=this.a
return w.m(new B.dR6(w))},
$S:0}
B.dR6.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dRj.prototype={
$0(){var w=this.a
return w.m(new B.dR5(w))},
$S:0}
B.dR5.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dRk.prototype={
$0(){var w=this.a
return w.m(A.d.grE(w.e))},
$S:0}
B.dRl.prototype={
$0(){var w=this.a
return w.m(new B.dR4(w))},
$S:0}
B.dR4.prototype={
$0(){var w=this.a
w.x=D.avK[A.o.E(A.d.cH(D.avK,w.x)+1,4)]},
$S:0}
B.efF.prototype={
$0(){return this.a.f.L(0,this.b)},
$S:0}
B.efG.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.BC("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.efE(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.BC("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.efE.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
B.efH.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.efD(w))},
$S:11}
B.efD.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
B.efL.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aC(w,C.mD(new B.efJ(v,e),w,A.bc,A.pQ,w,w,new C.bq(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.efK(v,e),w,w,w,w,w,w,!1,A.a7)},
$S:75}
B.efK.prototype={
$0(){return this.a.c7B(this.b)},
$S:0}
B.efJ.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dp(),m=n.a
m.$flags&2&&C.aj(m)
m[11]=0.001
n.fC(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bXA
if(o)v=q.a.r.t(0,q.b)?A.b2.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.b2:A.b0,A.q,1)
if(o){r=C.dp()
r.fC(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fu(A.A,C.d(u[t],p,p,p,p,p,p,D.f9t,p,p,p),p,r,!0)
u=r}else u=D.fu9
return C.fu(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:142}
B.efM.prototype={
$0(){var w=this.a
return w.m(new B.efI(w,this.b))},
$S:0}
B.efI.prototype={
$0(){var w=this.a
w.d=this.b.a
w.arI()},
$S:0}
B.efN.prototype={
$0(){var w=this.a
return w.m(w.gbIV())},
$S:0}
B.eqx.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.eqy.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.eqv.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eqw.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.equ(w))},
$S:11}
B.equ.prototype={
$0(){return this.a.f=-1},
$S:0}
B.eqz.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.eqA.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.eqB.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aZ6()},
$S:11}
B.eqC.prototype={
$0(){return this.a.c7H(this.b)},
$S:0}
B.eEP.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:71}
B.eEY.prototype={
$3$big(d,e,f){var w=null,v=C.E(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aS,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.D(A.kV,C.B(C.a([v,A.ab,new C.dq(1,A.co,C.f6(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.ei),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1876}
B.eEU.prototype={
$1(d){return this.a.m(new B.eET())},
$S:2}
B.eET.prototype={
$0(){},
$S:0}
B.eEV.prototype={
$0(){var w=this.a
return w.m(new B.eES(w,this.b))},
$S:0}
B.eES.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eEW.prototype={
$1(d){var w=this.a
return w.m(new B.eER(w,d))},
$S:6}
B.eER.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
B.eEX.prototype={
$0(){var w=this.a
return w.m(new B.eEQ(w))},
$S:0}
B.eEQ.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.eek.prototype={
$0(){},
$S:0}
B.eel.prototype={
$0(){},
$S:0}
B.eed.prototype={
$0(){var w=this.a
return w.m(new B.eec(w))},
$S:0}
B.eec.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c2(u,1,!1,x.S)
w.r=0.9
B.a7Y("hat",0.6)},
$S:0}
B.eee.prototype={
$0(){var w=this.a
return w.m(new B.eeb(w))},
$S:0}
B.eeb.prototype={
$0(){this.a.y=1.1
B.lf("bell",36,200,0.4)},
$S:0}
B.eef.prototype={
$0(){var w=this.a
return w.m(new B.eea(w))},
$S:0}
B.eea.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aA(Math.max(v,u)-t+1)
w.as=u
B.lf("bell",12+A.o.E(u,12),500,0.5)},
$S:0}
B.eeg.prototype={
$0(){var w=this.a
return w.m(new B.ee9(w,this.b))},
$S:0}
B.ee9.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.eeh.prototype={
$1(d){var w=this.a
return w.m(new B.ee8(w,d))},
$S:6}
B.ee8.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e3(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.eei.prototype={
$1(d){var w=this.a
return w.m(new B.ee7(w,d))},
$S:6}
B.ee7.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.eej.prototype={
$1(d){var w=this.a
return w.m(new B.ee6(w,d))},
$S:6}
B.ee6.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
B.crX.prototype={
$0(){return C.a6(this.a,!1).lx()},
$S:0}
B.crY.prototype={
$0(){var w=this.a
return B.hpf(this.b,w.c,w.e,w.d)},
$S:0}
B.fQg.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.f1Y,v,v,v)
return C.ek(C.a([C.bK(!1,D.fjq,v,v,!0,v,v,new B.fQf(d),v,v)],x.p),v,v,F.n7,w,v,v,v,new C.b7(u,new C.ay(s,1,A.q,-1)),t,v)},
$S:20}
B.fQf.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.crT.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crS.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crZ.prototype={
$0(){C.eU()
this.a.e.$0()},
$S:0}
B.crU.prototype={
$0(){var w=this.a
A.d.W(w.fs$,this.b.bi())
if(w.c!=null)this.c.$0()},
$S:0}
B.crW.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.l1$.a)/1e6,0,0.04)
w.l1$=d
w.fT$=A.o.an(v,1000)
w.lz(u)
if(w.c!=null)w.m(new B.crV())},
$S:9}
B.crV.prototype={
$0(){},
$S:0}
B.ceZ.prototype={
$0(){var w=this
return B.lf(w.a,w.b,w.c,w.d)},
$S:1}
B.dWE.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dWD(w,d))},
$S:z+79}
B.dWD.prototype={
$0(){return this.a.csl(this.b)},
$S:0}
B.dW6.prototype={
$0(){var w,v,u,t=this.a,s=J.a4(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:734}
B.dW4.prototype={
$0(){return this.a.id=D.a2Q},
$S:0}
B.dW5.prototype={
$0(){var w=this.b.a,v=C.U(w).k("a_<1>")
v=C.pd(new C.a_(w,new B.dW3(this.c),v),6,v.k("J.E"))
w=C.C(v,C.a3(v).k("J.E"))
return this.a.id=w},
$S:0}
B.dW3.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dW2.prototype={
$1(d){var w=null,v=C.c9(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.r,w,A.y,w,w,w,w,A.ag)
return C.ek(C.a([C.bK(!1,A.pj,w,w,!0,w,w,new B.dW1(d),w,w)],x.p),w,w,F.n7,v,w,w,w,w,D.fud,w)},
$S:20}
B.dW1.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.dWp.prototype={
$0(){return B.qR(this.b,this.a.d,"earth")},
$S:0}
B.dWq.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gVQ()
r=p.z
o=C.a([C.aC(A.c7,C.b3(q,q,q,new B.beQ(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dWd(p),new B.dWe(p),new B.dWf(p),q,q,q,q,q,q,q,new B.dWg(p),q,q,q,!1,A.a7)],x.p)
if(p.r==null)o.push(Aa.abC)
w=this.b
if(w!=null)o.push(C.ao(8,p.c8i(w),q,q,10,10,q,q))
return new C.ew(new C.an(A.W,q,A.b1,A.r,o,q),p.d)},
$S:201}
B.dWe.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:249}
B.dWf.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gVQ()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:215}
B.dWd.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gVQ()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:616}
B.dWg.prototype={
$1(d){var w=this.a,v=w.c8l(d.b)
if(v!=null)w.m(new B.dW7(w,v))
else w.m(new B.dW8(w))},
$S:50}
B.dW7.prototype={
$0(){return this.a.ax_(this.b)},
$S:0}
B.dW8.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dWr.prototype={
$0(){var w=this.a
w.e.bO(0,A.c8)
w.m(new B.dWc(w,this.b))},
$S:0}
B.dWc.prototype={
$0(){var w=this.a
w.id=D.a2Q
w.ax_(this.b)},
$S:0}
B.dWv.prototype={
$0(){var w=this.a
return w.m(new B.dWo(w))},
$S:0}
B.dWo.prototype={
$0(){var w=this.a
w.fx=null
w.asV(15,w.y,1)},
$S:0}
B.dWw.prototype={
$0(){var w=this.a
return w.m(new B.dWn(w,this.b))},
$S:0}
B.dWn.prototype={
$0(){var w=this.b.b
return this.a.asV(w.a,w.b,w.c)},
$S:0}
B.dWx.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dWm(w,v))},
$S:0}
B.dWm.prototype={
$0(){var w=this.b.a
return this.a.ax_(w[A.cG.aA(w.length)])},
$S:0}
B.dWy.prototype={
$1(d){var w=this.a
return w.m(new B.dWl(w,d))},
$S:6}
B.dWl.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dWz.prototype={
$1(d){var w=this.a
return w.m(new B.dWk(w,d))},
$S:6}
B.dWk.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dWA.prototype={
$1(d){var w=this.a
return w.m(new B.dWj(w,d))},
$S:6}
B.dWj.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dWB.prototype={
$0(){var w=this.a
return w.m(new B.dWi(w))},
$S:0}
B.dWi.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dWC.prototype={
$0(){var w=this.a
return w.m(new B.dWh(w))},
$S:0}
B.dWh.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dWs.prototype={
$0(){var w=this.a
return w.m(new B.dWb(w))},
$S:0}
B.dWb.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dWt.prototype={
$0(){var w=this.a
return w.m(new B.dWa(w))},
$S:0}
B.dWa.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dWu.prototype={
$0(){var w=this.a
return w.m(new B.dW9(w))},
$S:0}
B.dW9.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dW0.prototype={
$2(d,e){var w=null
return C.E(C.w(C.a([C.d(d,w,w,w,w,w,w,D.aPj,w,w,w),A.uI,C.d(e,w,2,A.a2,w,w,w,A.TR,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:131}
B.dW_.prototype={
$0(){var w=this.a
return w.m(new B.dVZ(w))},
$S:0}
B.dVZ.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dcD.prototype={
$0(){var w=null,v=C.h1(w,w,w,w,C.d3(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.cZj,w,w),this.a),A.a4,A.c6,w,A.dP,A.c5)
v.en()
return v},
$S:294}
B.dcE.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.u(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1877}
B.fgS.prototype={
$0(){return D.dAZ},
$S:z+81}
B.fgT.prototype={
$0(){return D.dZs},
$S:z+82}
B.fgU.prototype={
$0(){return D.dB0},
$S:z+83}
B.fgV.prototype={
$0(){return D.dvl},
$S:z+84}
B.fgW.prototype={
$0(){return D.dAX},
$S:z+85}
B.fgX.prototype={
$0(){return D.dXz},
$S:z+86}
B.fgY.prototype={
$0(){return D.dXx},
$S:z+87}
B.eFI.prototype={
$0(){return C.a6(this.a,!1).lx()},
$S:0}
B.eFJ.prototype={
$0(){var w=this.a
return w.m(new B.eFH(w))},
$S:0}
B.eFH.prototype={
$0(){var w=this.a
return w.d=A.o.E(w.gaRW()+1,16)},
$S:0}
B.eFK.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hsQ(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aT(18,18)
q=s.d
p=new C.ay(q.j(0.5),1,A.q,-1)
o=C.a([q.j(0.28),D.bhZ],u)
k.push(C.aC(n,C.p(n,C.w(C.a([C.X(s.c,q,n,n,n,30),A.N,new C.y(s.a,n,D.f6q,n,A.L,n,n,n,n,2,n,n),A.cS,new C.y(s.b,n,D.fbv,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b9,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bO(p,p,p,p),new C.bp(r,r,r,r),n,new C.a8(A.ax,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.cp,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eFG(d,s),n,n,n,n,n,n,!1,A.a7))}return C.bW(A.fR,k,A.bq,10,10)},
$S:175}
B.eFG.prototype={
$0(){return C.a6(this.a,!1).ck(C.e8(new B.eFF(this.b),!1,null,x.H))},
$S:0}
B.eFF.prototype={
$1(d){return this.a.e.$0()},
$S:39}
B.exL.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.exW.prototype={
$0(){return B.qR(this.b,this.a.d,"solar-system")},
$S:0}
B.exX.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.ar(e.b,e.d)
u.ch=t
t=C.a([C.aC(A.c7,C.b3(v,v,v,new B.brj(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.exT(u),new B.exU(u),v,v,v,v,v,v,v,new B.exV(u),v,v,v,!1,A.a7)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c8n(w),v,v,10,10,v,v))
return new C.ew(new C.an(A.W,v,A.b1,A.r,t,v),u.d)},
$S:201}
B.exT.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:249}
B.exU.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:215}
B.exV.prototype={
$1(d){var w=this.a,v=w.c8q(d.b)
if(v!=null)w.aZs(v)},
$S:50}
B.exY.prototype={
$0(){var w=this.a
return w.m(new B.exS(w))},
$S:0}
B.exS.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.exZ.prototype={
$0(){return this.a.aZs(this.b)},
$S:0}
B.ey_.prototype={
$1(d){var w=this.a
return w.m(new B.exR(w,d))},
$S:6}
B.exR.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.ey0.prototype={
$1(d){var w=this.a
return w.m(new B.exQ(w,d))},
$S:6}
B.exQ.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ey1.prototype={
$0(){var w=this.a
return w.m(new B.exP(w))},
$S:0}
B.exP.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.ey2.prototype={
$0(){var w=this.a
return w.m(new B.exO(w))},
$S:0}
B.exO.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.ey3.prototype={
$0(){var w=this.a
return w.m(new B.exN(w))},
$S:0}
B.exN.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.ey4.prototype={
$0(){var w=this.a
return w.m(new B.exM(w))},
$S:0}
B.exM.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.exK.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.ab(d/365.25,w)+" Earth years"}else w=A.k.ab(d,0)+" Earth days"
return w},
$S:315}
B.exJ.prototype={
$2(d,e){var w=null
return C.E(C.w(C.a([C.d(d,w,w,w,w,w,w,D.aPj,w,w,w),A.uI,C.d(e,w,2,A.a2,w,w,w,A.TR,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:131}
B.exI.prototype={
$0(){var w=this.a
return w.m(new B.exH(w))},
$S:0}
B.exH.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.f_5.prototype={
$0(){var w=null,v=C.h1(w,w,w,w,C.d3(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,K.Q8,w,w),this.a),A.a4,A.c6,w,A.dP,A.c5)
v.en()
return v},
$S:294}
B.f_6.prototype={
$1(d){return d.c>0},
$S:z+10}
B.f_7.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dWI.prototype={
$0(){},
$S:0}
B.dXa.prototype={
$1(d){return d!=null},
$S:463}
B.dWX.prototype={
$0(){var w=this.a
return w.m(new B.dWO(w,this.b))},
$S:0}
B.dWO.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dWY.prototype={
$0(){var w=this.a
return w.m(new B.dWN(w))},
$S:0}
B.dWN.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dWZ.prototype={
$0(){var w=this.a
return w.m(new B.dWW(w))},
$S:0}
B.dWW.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dX2.prototype={
$0(){var w=this.a
return w.m(new B.dWV(w))},
$S:0}
B.dWV.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dX3.prototype={
$1(d){var w=this.a
return w.m(new B.dWU(w,d))},
$S:6}
B.dWU.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dX4.prototype={
$0(){var w=this.a
return w.m(w.gcvB())},
$S:0}
B.dX5.prototype={
$1(d){var w=this.a
return w.m(new B.dWT(w,d))},
$S:6}
B.dWT.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dX6.prototype={
$1(d){var w=this.a
return w.m(new B.dWS(w,d))},
$S:6}
B.dWS.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dX7.prototype={
$1(d){var w=this.a
return w.m(new B.dWR(w,d))},
$S:6}
B.dWR.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dX8.prototype={
$1(d){var w=this.a
return w.m(new B.dWQ(w,d))},
$S:6}
B.dWQ.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dX9.prototype={
$0(){var w=this.a
return w.m(new B.dWP(w))},
$S:0}
B.dWP.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dX_.prototype={
$0(){var w=this.a
return w.m(new B.dWM(w))},
$S:0}
B.dWM.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dX0.prototype={
$0(){var w=this.a
return w.m(new B.dWL(w))},
$S:0}
B.dWL.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dX1.prototype={
$0(){var w=this.a
return w.m(new B.dWK(w))},
$S:0}
B.dWK.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dWH.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bZ(0,C.c0(g,new C.o(D.bgu,g,g,C.m(20),g,g,A.n),A.be),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.yN[q]
n=C.b0(o.d)
o=C.w(C.a([new C.y(o.a,g,new C.H(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.y(C.t(D.yN[q].b)+" m/s\xb2",g,D.faS,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.dm,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.X(X.Ng,C.b0(D.yN[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b0(D.yN[q].d),g,g,g,C.a([new C.ac(0,A.G,C.b0(D.yN[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b0(D.yN[q].d).j(0.6),g,g,g,3,g,A.fr,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.ab(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cL(p,8,g,g,f,g,o,g),new C.cL(n-0.5,54,g,e,g,g,m,g),new C.cL(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cL(p,g,g,8,f,g,C.w(C.a([j,A.at,new C.y(i,g,A.rS,g,g,g,g,g,g,g,g,g),new C.y(h,g,D.f38,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d7(v,new B.dWG()))a1.push(D.b50)
return new C.an(A.W,g,A.aa,A.r,a1,g)},
$S:63}
B.dWG.prototype={
$1(d){return d==null},
$S:463}
B.dWJ.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.df(v,v,v,v,A.bc,new C.o(v,v,v,C.m(8),v,new C.a8(A.a3,A.a8,A.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),A.n),A.ig,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.ab(r,1):B.GG(r)
u=u.ax*9.81/s
u=u<10?A.k.ab(u,2):A.k.ab(u,0)
return new C.an(A.W,v,A.aa,A.r,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.f9e,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:63}
B.dWF.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new B.ba1(new C.u(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.av)
o=A.w.j(0.55)
p=C.m(14)
q=C.I(A.bE,A.q,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.b2
else u=A.a.t(u,"escapes")?A.aP:A.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.ab(Math.sqrt(58.86870477034412),1)
s=A.k.ab(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+B.GG(A.k.D(r.cx.gcm()-6371,0,9e9))+" km":""
w=x.p
return new C.an(A.W,v,A.b1,A.r,C.a([n,C.ao(v,C.p(v,C.w(C.a([u,A.bD,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aR0,v,v,v)],w),A.F,v,A.e,A.P,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bR,v,v,v),v,v,12,12,8,v)],w),v)},
$S:63}
B.eqF.prototype={
$0(){return B.qR(this.b,this.a.d,"size-compare")},
$S:0}
B.eqG.prototype={
$0(){var w=this.a
return w.m(new B.eqE(w,this.b))},
$S:0}
B.eqE.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eqH.prototype={
$0(){var w=this.a
return w.m(new B.eqD(w,this.b))},
$S:0}
B.eqD.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eYf.prototype={
$3(d,e,f){var w,v,u=this.a
$.W()
w=C.N()
w.r=f.j(0.2).gp(0)
w.z=new C.hz(A.G,Math.max(2,e*0.18))
u.af(d,e*1.12,w)
w=C.N()
v=C.aq(f,A.w,0.6)
v.toString
w.saq(new C.bT(P.pp,0.5,A.x,null,0,C.a([A.c,f,v],x.O),I.a22,null).aw(0,C.bU(d,e)))
u.af(d,e,w)},
$S:604}
B.dEf.prototype={
$1(d){return d.e<=0},
$S:z+89}
B.dE3.prototype={
$1(d){return d.b},
$S:z+60}
B.dE4.prototype={
$0(){return B.qR(this.b,this.a.d,"black-hole")},
$S:0}
B.dE5.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.ar(e.b,e.d)
p.Q=o
o=C.aC(A.c7,C.b3(q,q,q,new B.b9q(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dE1(p),q,q,q,q,q,q,q,q,q,new B.dE2(p),q,q,q,q,!1,A.a7)
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bE,A.q,1)
t=p.r
if(t<1000)t=A.k.ab(t,t<10?1:0)+" Suns"
else t=B.ftZ(t)+" Suns"
t=p.aem("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.B(C.a([t,p.aem("EDGE WIDTH",(s<100?A.k.ab(s,1):B.GG(s))+" km"),p.aem("TIME",A.k.ab(this.b*100,0)+"%"),p.aem("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bR,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.eeU)
return new C.ew(new C.an(A.W,q,A.b1,A.r,r,q),p.d)},
$S:201}
B.dE2.prototype={
$1(d){return this.a.aZt(d.b)},
$S:22}
B.dE1.prototype={
$1(d){if(A.cG.aj()<0.12)this.a.aZt(d.b)},
$S:18}
B.dE7.prototype={
$1(d){var w=this.a
return w.m(new B.dE0(w,d))},
$S:6}
B.dE0.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dE8.prototype={
$0(){var w=this.a
return w.m(new B.dE_(w))},
$S:0}
B.dE_.prototype={
$0(){return this.a.r=10},
$S:0}
B.dE9.prototype={
$0(){var w=this.a
return w.m(new B.dDZ(w))},
$S:0}
B.dDZ.prototype={
$0(){return this.a.r=21},
$S:0}
B.dEa.prototype={
$0(){var w=this.a
return w.m(new B.dDY(w))},
$S:0}
B.dDY.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dEb.prototype={
$0(){var w=this.a
return w.m(new B.dDX(w))},
$S:0}
B.dDX.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dEc.prototype={
$0(){var w=this.a
return w.m(new B.dDW(w))},
$S:0}
B.dDW.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dEd.prototype={
$0(){var w=this.a
return w.m(new B.dDV(w))},
$S:0}
B.dDV.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dEe.prototype={
$0(){var w=this.a
return w.m(new B.dDU(w))},
$S:0}
B.dDU.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dE6.prototype={
$0(){var w=this.a
return w.m(new B.dDT(w))},
$S:0}
B.dDT.prototype={
$0(){var w=this.a
A.d.a8(w.z)
w.as=0},
$S:0}
B.dVf.prototype={
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
e[r]=new C.u(p,i)
q=d[r]
d[r]=new C.u(q.a+p*s,q.b+i*s)}},
$S:1878}
B.dV5.prototype={
$0(){return B.qR(this.b,this.a.d,"galaxy")},
$S:0}
B.dV6.prototype={
$0(){var w=this.a
return w.m(new B.dV4(w,this.b))},
$S:0}
B.dV4.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.ZR()},
$S:0}
B.dV7.prototype={
$0(){var w=this.a
return w.m(new B.dV3(w))},
$S:0}
B.dV3.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.ZR()}w.cvs()},
$S:0}
B.dV8.prototype={
$1(d){var w=this.a
return w.m(new B.dV2(w,d))},
$S:6}
B.dV2.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.ZR()},
$S:0}
B.dV9.prototype={
$1(d){var w=this.a
return w.m(new B.dV1(w,d))},
$S:6}
B.dV1.prototype={
$0(){var w=this.a
w.r=this.b
w.ZR()},
$S:0}
B.dVa.prototype={
$1(d){var w=this.a
return w.m(new B.dV0(w,d))},
$S:6}
B.dV0.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dVb.prototype={
$1(d){var w=this.a
return w.m(new B.dV_(w,d))},
$S:6}
B.dV_.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dVc.prototype={
$0(){var w=this.a
return w.m(new B.dUZ(w))},
$S:0}
B.dUZ.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dVd.prototype={
$0(){var w=this.a
return w.m(new B.dUY(w))},
$S:0}
B.dUY.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dVe.prototype={
$0(){var w=this.a
return w.m(new B.dUX(w))},
$S:0}
B.dUX.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.d9L.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new C.u((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1879}
B.epU.prototype={
$0(){return B.qR(this.b,this.a.d,"seasons-moon")},
$S:0}
B.epV.prototype={
$0(){var w=this.a
return w.m(new B.epT(w))},
$S:0}
B.epT.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.epW.prototype={
$0(){var w=this.a
return w.m(new B.epS(w))},
$S:0}
B.epS.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.epX.prototype={
$0(){var w=this.a
return w.m(new B.epR(w))},
$S:0}
B.epR.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.epY.prototype={
$0(){var w=this.a
return w.m(new B.epQ(w))},
$S:0}
B.epQ.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.epZ.prototype={
$1(d){var w=this.a
return w.m(new B.epP(w,d))},
$S:6}
B.epP.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.eq_.prototype={
$1(d){var w=this.a
return w.m(new B.epO(w,d))},
$S:6}
B.epO.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eq0.prototype={
$1(d){var w=this.a
return w.m(new B.epN(w,d))},
$S:6}
B.epN.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eq1.prototype={
$1(d){var w=this.a
return w.m(new B.epM(w,d))},
$S:6}
B.epM.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aLC.prototype
w.bvl=w.q
w=B.aKE.prototype
w.bul=w.q
w=B.aKF.prototype
w.bum=w.q
w=B.aKK.prototype
w.bur=w.q
w=B.aMt.prototype
w.bwj=w.q
w=B.aLA.prototype
w.bvj=w.q
w=B.aLJ.prototype
w.bvs=w.q
w=B.aLP.prototype
w.bvy=w.q
w=B.aKI.prototype
w.bup=w.q
w=B.aLx.prototype
w.bvg=w.q
w=B.aLM.prototype
w.bvv=w.q
w=B.aLv.prototype
w.bve=w.q
w=B.aLw.prototype
w.bvf=w.q
w=B.aKW.prototype
w.buE=w.q
w=B.aKA.prototype
w.buh=w.q
w=B.aL3.prototype
w.buM=w.q
w=B.ax6.prototype
w.brt=w.q
w=B.ax7.prototype
w.bru=w.q
w=B.aJ6.prototype
w.bsK=w.q
w=B.aKT.prototype
w.buA=w.q
w=B.aLk.prototype
w.bv3=w.q
w=B.aLl.prototype
w.bv4=w.q
w=B.aKG.prototype
w.bun=w.q
w=B.aKZ.prototype
w.buH=w.q
w=B.aLt.prototype
w.bvc=w.q
w=B.aLX.prototype
w.bvG=w.q
w=B.aL4.prototype
w.buO=w.q
w=B.aL5.prototype
w.buP=w.q
w=B.aL6.prototype
w.buQ=w.q
w=B.aLF.prototype
w.bvo=w.q
w=B.aLI.prototype
w.bvr=w.q
w=B.aKD.prototype
w.buk=w.q
w=B.aL1.prototype
w.buK=w.q
w=B.aLE.prototype
w.bvn=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aDL.prototype,"gavT","c3u",0)
var r
v(r=B.aCa.prototype,"gcbO","cbP",35)
w(r,"gc4_","aXS",0)
w(B.aCd.prototype,"gc5G","c5H",0)
u(B.aCu.prototype,"gc5M","c5N",52)
w(r=B.aGL.prototype,"gcv8","cv9",0)
w(r,"gciw","afM",0)
w(r,"gcgd","cge",0)
w(r,"gc5L","adn",3)
w(r=B.aDK.prototype,"gbG2","a8W",3)
w(r,"gcfv","b08",0)
w(r,"gcje","afU",3)
t(r,"gc5P","ado",3)
w(B.aE_.prototype,"gbXm","bXn",0)
w(r=B.aDC.prototype,"gcv2","cv3",0)
w(r,"gbGn","bGo",0)
w(r=B.aCc.prototype,"gb4n","azv",0)
v(r,"gc5V","Ze",54)
w(r,"gc5U","adq",3)
v(r=B.aDB.prototype,"gcld","ayd",58)
v(r,"gcrB","azq",15)
w(r,"gbKn","aQt",0)
v(r=B.aDz.prototype,"gcCe","aiY",15)
t(r,"gc6e","awr",0)
w(r,"gcnA","cnB",0)
v(r=B.aCG.prototype,"gc6f","c6g",90)
w(r,"gc6h","c6i",0)
t(r=B.a48.prototype,"grE","a8",0)
v(r,"gcS3","amK",1)
v(r,"gcOz","Lw",1)
w(r,"gcUe","bhr",0)
s(B.ail.prototype,"gc6m",0,5,null,["$5"],["qk"],64,0,0)
w(r=B.aCH.prototype,"gc6n","c6o",0)
w(r,"gcm2","agg",3)
w(r,"gcc3","aez",3)
w(r,"gctb","ahm",3)
w(r=B.aDl.prototype,"gc6E","aww",0)
w(r,"gc6F","aYK",0)
w(r=B.aEc.prototype,"gc7C","c7D",0)
t(r,"gc7A","aZ5",0)
w(B.aDv.prototype,"gbIV","arI",0)
t(B.aDR.prototype,"gc7E","c7F",0)
v(r=B.aCS.prototype,"gc8j","c8k",78)
w(r,"gbNT","bNU",0)
w(r=B.aCT.prototype,"gcvB","cvC",0)
w(r,"gc8o","c8p",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aD,[B.ajy,B.FW,B.uM,B.aRv,B.a2N,B.b9t,B.c05,B.xZ,B.Cc,B.nm,B.bab,B.Ar,B.bs0,B.q2,B.qJ,B.Cg,B.YZ,B.aeq,B.a0d,B.Cq,B.abj,B.abA,B.adw,B.FI,B.bkU,B.PI,B.a_v,B.abq,B.abT,B.FE,B.acI,B.add,B.te,B.b93,B.aRl,B.eb,B.tr,B.a9Z,B.ab5,B.a48,B.mz,B.bac,B.fN,B.m6,B.aVZ,B.btl,B.aHB,B.mC,B.aaL,B.aaM,B.v0,B.OX,B.xX,B.OW,B.btg,B.Pq,B.aev])
u(C.hW,[B.fw8,B.fmo,B.ft6,B.ft7,B.fw5,B.fw6,B.e71,B.e7k,B.enp,B.emX,B.emY,B.emZ,B.en_,B.en0,B.en1,B.en2,B.en3,B.emV,B.emW,B.emU,B.enk,B.enl,B.enm,B.dEk,B.dEm,B.dEp,B.dEA,B.c06,B.c07,B.fg5,B.fg6,B.fg7,B.fge,B.fgf,B.fgg,B.dGS,B.dGz,B.dGT,B.dGu,B.dGp,B.dGr,B.dGx,B.dGK,B.dGI,B.dGJ,B.dGH,B.dGE,B.dGG,B.eXK,B.eXr,B.eXy,B.eXH,B.eXl,B.dgA,B.dgB,B.dgx,B.dgy,B.dgz,B.dgC,B.dgD,B.dgE,B.dgF,B.dgG,B.dgH,B.dgI,B.dgJ,B.dgK,B.eml,B.emm,B.emn,B.emo,B.emj,B.emk,B.emQ,B.ems,B.emu,B.eme,B.emM,B.emK,B.emL,B.emJ,B.emI,B.emg,B.eyv,B.eyt,B.eyh,B.eyl,B.eyg,B.eym,B.eyn,B.eyr,B.eF6,B.eFc,B.eiX,B.eiY,B.eiJ,B.eiK,B.eiI,B.eiN,B.eiP,B.eiQ,B.eEw,B.eEx,B.eEv,B.eEj,B.eEk,B.eEi,B.eEb,B.eEc,B.eEq,B.eEr,B.eEs,B.eEt,B.eEu,B.dG0,B.dG1,B.dG2,B.dFU,B.dFX,B.cL5,B.eeq,B.eeP,B.eeu,B.eeC,B.eeD,B.eeB,B.eeK,B.eiq,B.eiv,B.ehP,B.ehx,B.ehJ,B.ehH,B.ehF,B.ehG,B.ehE,B.dOL,B.dOz,B.dOB,B.dOJ,B.dOE,B.dRA,B.dRs,B.dRt,B.dRu,B.d3O,B.d3Q,B.d3P,B.dCo,B.dCp,B.dCh,B.dCf,B.cDD,B.dVD,B.dVE,B.dVz,B.dVA,B.dbO,B.dbP,B.dGn,B.dG5,B.dGe,B.dGf,B.dGk,B.dGl,B.bLJ,B.bLU,B.bLP,B.bLV,B.bLX,B.bLK,B.bLI,B.bM1,B.bLQ,B.bLT,B.bLS,B.bLR,B.bGK,B.fHL,B.fHO,B.fHM,B.bGr,B.bGm,B.bGl,B.bGJ,B.bGB,B.bGC,B.bGA,B.bGD,B.bGb,B.bGd,B.bG9,B.bGa,B.bG1,B.bG2,B.fgh,B.fgi,B.fgj,B.fg4,B.fgk,B.fg3,B.fgl,B.fg8,B.fg2,B.fg9,B.fg1,B.fga,B.fg0,B.fgb,B.ffZ,B.fg_,B.fgc,B.ffX,B.ffY,B.fgd,B.ffW,B.dRR,B.dRS,B.dRH,B.dRD,B.dRQ,B.dRV,B.cB9,B.fMr,B.fMs,B.ea_,B.e9S,B.dgT,B.dgW,B.eai,B.ea3,B.ead,B.eae,B.eaf,B.cf0,B.eJw,B.dRd,B.dRe,B.dRf,B.dRh,B.efJ,B.eEP,B.eEY,B.eEU,B.eEW,B.eeh,B.eei,B.eej,B.fQg,B.crW,B.dWE,B.dW3,B.dW2,B.dWe,B.dWf,B.dWd,B.dWg,B.dWy,B.dWz,B.dWA,B.eFF,B.exT,B.exU,B.exV,B.ey_,B.ey0,B.exK,B.f_6,B.f_7,B.dXa,B.dX3,B.dX5,B.dX6,B.dX7,B.dX8,B.dWG,B.eYf,B.dEf,B.dE3,B.dE2,B.dE1,B.dE7,B.dVf,B.dV8,B.dV9,B.dVa,B.dVb,B.d9L,B.epZ,B.eq_,B.eq0,B.eq1])
u(C.kj,[B.fw7,B.e76,B.e74,B.en5,B.eni,B.dGq,B.dGN,B.dMJ,B.eXN,B.eXO,B.eXq,B.eXD,B.eXE,B.eXz,B.eXF,B.eXk,B.emh,B.emi,B.emP,B.emH,B.emw,B.eF5,B.eiM,B.eEm,B.dFT,B.dFY,B.eeG,B.eiu,B.fwp,B.ehB,B.ehy,B.ehL,B.doG,B.bFy,B.fqR,B.dCb,B.dCj,B.bLW,B.bLY,B.bM_,B.bLL,B.bLN,B.bGL,B.ckp,B.fHN,B.bGk,B.bGH,B.bGG,B.dRP,B.cBa,B.dND,B.dNB,B.dNv,B.e9U,B.dgU,B.dgV,B.eac,B.cf3,B.dEO,B.dEJ,B.efL,B.dWq,B.dW0,B.dcE,B.eFK,B.exX,B.exJ,B.dWH,B.dWJ,B.dWF,B.dE5])
u(C.ag,[B.Va,B.VC,B.U2,B.U7,B.N9,B.aGK,B.VB,B.VQ,B.W1,B.Vy,B.VX,B.U5,B.Vs,B.Vx,B.Vv,B.Ut,B.UJ,B.TY,B.UX,B.U6,B.aij,B.UK,B.awO,B.Ur,B.Vf,B.Vh,B.W7,B.UR,B.U3,B.UI,B.Vt,B.VG,B.W0,B.Vr,B.UY,B.W3,B.VP,B.UZ,B.VH,B.U1,B.UV,B.VD])
u(C.ah,[B.bjn,B.aLC,B.aKE,B.aKK,B.aCu,B.aMt,B.aLA,B.aLJ,B.aLP,B.aLx,B.aLM,B.aKI,B.aLv,B.aLw,B.aDz,B.biS,B.aKW,B.aKA,B.aL3,B.biJ,B.ax6,B.bwr,B.aJ6,B.aKT,B.aLk,B.aLl,B.aLX,B.aKZ,B.aKG,B.biT,B.aDv,B.aDR,B.bk6,B.aLt,B.aL4,B.bka,B.aLI,B.aL6,B.aLF,B.aKD,B.aL1,B.aLE])
u(C.j8,[B.e7_,B.e70,B.e7c,B.e7d,B.e78,B.e77,B.e79,B.e75,B.e7a,B.e73,B.e7b,B.e72,B.e7g,B.e7f,B.e7h,B.e7e,B.e7i,B.e7j,B.e7l,B.eno,B.enq,B.enr,B.en7,B.en6,B.en4,B.end,B.ene,B.ena,B.enf,B.en9,B.eng,B.enh,B.en8,B.enj,B.enc,B.enn,B.enb,B.dEH,B.dEG,B.dEj,B.dEI,B.dEl,B.dEn,B.dEo,B.dEq,B.dEg,B.dEh,B.dEi,B.dEx,B.dEy,B.dEz,B.dEw,B.dEB,B.dEv,B.dEC,B.dEu,B.dED,B.dEt,B.dEE,B.dEs,B.dEF,B.dEr,B.dGw,B.dGv,B.dGA,B.dGs,B.dGt,B.dGB,B.dGC,B.dGD,B.dGy,B.dGo,B.dGM,B.dGL,B.dGO,B.dGP,B.dGQ,B.dGF,B.dGR,B.cLy,B.dMH,B.dMG,B.dMI,B.fgw,B.fgx,B.fgy,B.fgJ,B.fgL,B.fgM,B.fgN,B.fgO,B.fgP,B.fgQ,B.fgR,B.fgz,B.fgA,B.fgB,B.fgC,B.fgD,B.fgE,B.fgF,B.fgG,B.fgH,B.fgI,B.fgK,B.eXM,B.eXL,B.eXt,B.eXs,B.eXo,B.eXn,B.eXp,B.eXm,B.eXB,B.eXA,B.eXC,B.eXu,B.eXG,B.eXx,B.eXI,B.eXw,B.eXJ,B.eXv,B.emq,B.emf,B.emp,B.emb,B.emr,B.emt,B.emc,B.emd,B.emO,B.emN,B.emE,B.emF,B.emG,B.emA,B.emB,B.emz,B.emC,B.emy,B.emD,B.emx,B.emv,B.dgw,B.eyu,B.ey6,B.ey5,B.eyf,B.eyo,B.eye,B.eyp,B.eyd,B.eyq,B.eyc,B.eyb,B.eys,B.eya,B.eyi,B.ey9,B.eyj,B.ey8,B.eyk,B.ey7,B.eF4,B.eF3,B.eF7,B.eF2,B.eF8,B.eF1,B.eF9,B.eF0,B.eFa,B.eF_,B.eFb,B.eEZ,B.eiL,B.eiH,B.eiG,B.eiF,B.eiR,B.eiE,B.eiS,B.eiD,B.eiT,B.eiC,B.eiU,B.eiV,B.eiW,B.eiB,B.eiO,B.eEl,B.eEa,B.eEn,B.eEh,B.eEo,B.eEg,B.eEp,B.eEf,B.eEe,B.eEd,B.eE9,B.eE8,B.eE7,B.dG_,B.dFR,B.dFS,B.dFV,B.dFW,B.dFZ,B.eeE,B.eev,B.eeF,B.eeH,B.eeA,B.eeI,B.eez,B.eeJ,B.eey,B.eex,B.eeL,B.eew,B.eeM,B.eet,B.eeN,B.ees,B.eeO,B.eer,B.eik,B.eil,B.eis,B.eir,B.eit,B.eip,B.eiw,B.eio,B.eix,B.ein,B.eiy,B.eiz,B.eim,B.eiA,B.ehO,B.ehv,B.ehw,B.ehA,B.ehz,B.ehK,B.ehI,B.ehC,B.ehM,B.ehD,B.ehN,B.dOK,B.dOA,B.dOy,B.dOF,B.dOD,B.dOG,B.dOC,B.dOH,B.dOI,B.dRz,B.dRn,B.dRm,B.dRo,B.dRr,B.dRq,B.dRp,B.dRv,B.dRw,B.dRx,B.dRy,B.dCn,B.dCm,B.dCc,B.dCi,B.dCg,B.dCk,B.dCe,B.dCl,B.dCd,B.dVC,B.dVB,B.dVt,B.dVx,B.dVw,B.dVy,B.dVv,B.dVu,B.dGm,B.dGd,B.dGc,B.dGg,B.dGb,B.dGh,B.dGa,B.dGi,B.dG9,B.dGj,B.dG8,B.dG7,B.dG6,B.bLZ,B.bM0,B.bLM,B.bLO,B.bGo,B.bGp,B.bGn,B.bGq,B.bGs,B.bGe,B.bGf,B.bGg,B.bGh,B.bGi,B.bGj,B.bGI,B.bFS,B.bGy,B.bGz,B.bGw,B.bGx,B.bGu,B.bGv,B.bGE,B.bGt,B.bGF,B.bFT,B.bGc,B.bFZ,B.bG_,B.bFY,B.bG0,B.bFX,B.bG3,B.bG4,B.bG5,B.bG6,B.bFW,B.bG7,B.bFV,B.bG8,B.bFU,B.dRI,B.dRT,B.dRU,B.dRG,B.dRF,B.dRE,B.dRN,B.dRL,B.dRM,B.dRO,B.dRJ,B.dRK,B.dRW,B.dRX,B.dRY,B.dRZ,B.dS_,B.dNE,B.dNC,B.dNA,B.dNz,B.dNy,B.dNx,B.dNw,B.dNs,B.dNr,B.dNu,B.dNt,B.e9Z,B.ea0,B.e9Q,B.e9R,B.e9T,B.e9V,B.e9W,B.e9X,B.e9Y,B.eah,B.eaj,B.ea9,B.ea5,B.eaa,B.eab,B.ea4,B.ea8,B.ea7,B.ea6,B.eag,B.fgZ,B.fh_,B.fh0,B.fh1,B.fh2,B.fh3,B.fh4,B.fh5,B.cf2,B.cf1,B.eJx,B.eJt,B.eJs,B.eJv,B.eJu,B.dTW,B.dTX,B.dTR,B.dTT,B.dTU,B.dTS,B.dTV,B.dEP,B.dEM,B.dEL,B.dEN,B.dEK,B.dRc,B.dRb,B.dRa,B.dR9,B.dRg,B.dR8,B.dR7,B.dRi,B.dR6,B.dRj,B.dR5,B.dRk,B.dRl,B.dR4,B.efF,B.efG,B.efE,B.efH,B.efD,B.efK,B.efM,B.efI,B.efN,B.eqx,B.eqy,B.eqv,B.eqw,B.equ,B.eqz,B.eqA,B.eqB,B.eqC,B.eET,B.eEV,B.eES,B.eER,B.eEX,B.eEQ,B.eek,B.eel,B.eed,B.eec,B.eee,B.eeb,B.eef,B.eea,B.eeg,B.ee9,B.ee8,B.ee7,B.ee6,B.crX,B.crY,B.fQf,B.crT,B.crS,B.crZ,B.crU,B.crV,B.ceZ,B.dWD,B.dW6,B.dW4,B.dW5,B.dW1,B.dWp,B.dW7,B.dW8,B.dWr,B.dWc,B.dWv,B.dWo,B.dWw,B.dWn,B.dWx,B.dWm,B.dWl,B.dWk,B.dWj,B.dWB,B.dWi,B.dWC,B.dWh,B.dWs,B.dWb,B.dWt,B.dWa,B.dWu,B.dW9,B.dW_,B.dVZ,B.dcD,B.fgS,B.fgT,B.fgU,B.fgV,B.fgW,B.fgX,B.fgY,B.eFI,B.eFJ,B.eFH,B.eFG,B.exL,B.exW,B.exY,B.exS,B.exZ,B.exR,B.exQ,B.ey1,B.exP,B.ey2,B.exO,B.ey3,B.exN,B.ey4,B.exM,B.exI,B.exH,B.f_5,B.dWI,B.dWX,B.dWO,B.dWY,B.dWN,B.dWZ,B.dWW,B.dX2,B.dWV,B.dWU,B.dX4,B.dWT,B.dWS,B.dWR,B.dWQ,B.dX9,B.dWP,B.dX_,B.dWM,B.dX0,B.dWL,B.dX1,B.dWK,B.eqF,B.eqG,B.eqE,B.eqH,B.eqD,B.dE4,B.dE0,B.dE8,B.dE_,B.dE9,B.dDZ,B.dEa,B.dDY,B.dEb,B.dDX,B.dEc,B.dDW,B.dEd,B.dDV,B.dEe,B.dDU,B.dE6,B.dDT,B.dV5,B.dV6,B.dV4,B.dV7,B.dV3,B.dV2,B.dV1,B.dV0,B.dV_,B.dVc,B.dUZ,B.dVd,B.dUY,B.dVe,B.dUX,B.epU,B.epV,B.epT,B.epW,B.epS,B.epX,B.epR,B.epY,B.epQ,B.epP,B.epO,B.epN,B.epM])
t(B.bwG,B.aLC)
t(B.aDL,B.bwG)
u(C.mM,[B.bgm,B.bau,B.brq,B.b9a,B.bq4,B.bpw,B.b9Q,B.bpy,B.btv,B.bgk,B.brl,B.bkH,B.bsc,B.baa,B.bhe,B.bkI,B.bhW,B.bdf,B.b9f,B.beJ,B.ail,B.b8n,B.buw,B.aej,B.bgp,B.bgE,B.buI,B.bpx,B.bkV,B.beQ,B.brj,B.ba1,B.bqS,B.b9q,B.beG,B.bq7])
t(B.aKF,B.aKE)
t(B.aCa,B.aKF)
t(B.bwp,B.aKK)
t(B.aCd,B.bwp)
u(C.ma,[B.Kd,B.a00,B.J9])
u(C.au,[B.bqs,B.aeA,B.ads,B.PR,B.bqW,B.a7Z,B.bcB,B.b6b,B.dA,B.eR,B.ave,B.fi,B.F7])
t(B.aGL,B.aMt)
t(B.bgj,C.oL)
t(B.aDK,B.aLA)
t(B.bjY,B.aLJ)
t(B.aE_,B.aLP)
t(B.bwF,B.aLx)
t(B.aDC,B.bwF)
t(B.bwN,B.aLM)
t(B.bk2,B.bwN)
t(B.bwo,B.aKI)
t(B.aCc,B.bwo)
t(B.bwD,B.aLv)
t(B.bjC,B.bwD)
t(B.bwE,B.aLw)
t(B.aDB,B.bwE)
t(B.aCG,B.aKW)
t(B.biw,B.aKA)
t(B.bj3,B.aL3)
t(B.ax7,B.ax6)
t(B.aik,B.ax7)
t(B.aCH,B.bwr)
t(B.b8o,B.aJ6)
t(B.biQ,B.aKT)
t(B.bww,B.aLk)
t(B.bjp,B.bww)
t(B.bwx,B.aLl)
t(B.aDl,B.bwx)
t(B.bwO,B.aLX)
t(B.aEc,B.bwO)
t(B.bws,B.aKZ)
t(B.biZ,B.bws)
t(B.bwn,B.aKG)
t(B.biB,B.bwn)
t(B.bwC,B.aLt)
t(B.bjA,B.bwC)
t(B.aL5,B.aL4)
t(B.aCS,B.aL5)
t(B.bwK,B.aLI)
t(B.bjX,B.bwK)
t(B.bwu,B.aL6)
t(B.aCT,B.bwu)
t(B.bwI,B.aLF)
t(B.bjU,B.bwI)
t(B.bwm,B.aKD)
t(B.biA,B.bwm)
t(B.bwt,B.aL1)
t(B.bj1,B.bwt)
t(B.bwH,B.aLE)
t(B.bjT,B.bwH)
w(B.aLC,C.ca)
w(B.bwG,B.mC)
w(B.aKE,C.ca)
w(B.aKF,B.mC)
w(B.aKK,C.ca)
w(B.bwp,B.mC)
w(B.aMt,C.eS)
w(B.aLA,C.ca)
w(B.aLJ,C.ca)
w(B.aLP,C.ca)
w(B.aKI,C.ca)
w(B.bwo,B.mC)
w(B.aLx,C.ca)
w(B.bwF,B.mC)
w(B.aLM,C.ca)
w(B.bwN,B.mC)
w(B.aLv,C.ca)
w(B.bwD,B.mC)
w(B.aLw,C.ca)
w(B.bwE,B.mC)
w(B.aKW,C.ca)
w(B.aKA,C.ca)
w(B.aL3,C.ca)
w(B.ax6,C.ca)
w(B.ax7,B.mC)
w(B.aJ6,C.ca)
v(B.bwr,C.ez)
w(B.aKT,C.ca)
w(B.aLk,C.ca)
w(B.bww,B.mC)
w(B.aLl,C.ca)
w(B.bwx,B.mC)
w(B.aKG,C.ca)
w(B.bwn,B.mC)
w(B.aKZ,C.ca)
w(B.bws,B.mC)
w(B.aLt,C.ca)
w(B.bwC,B.mC)
w(B.aLX,C.ca)
w(B.bwO,B.mC)
w(B.aL4,C.ca)
w(B.aL5,B.mC)
w(B.aL6,C.ca)
w(B.bwu,B.mC)
w(B.aLF,C.ca)
w(B.bwI,B.mC)
w(B.aLI,C.ca)
w(B.bwK,B.mC)
w(B.aKD,C.ca)
w(B.bwm,B.mC)
w(B.aL1,C.ca)
w(B.bwt,B.mC)
w(B.aLE,C.ca)
w(B.bwH,B.mC)})()
C.jY(b.typeUniverse,JSON.parse('{"Va":{"ag":[],"r":[]},"bjn":{"ah":["Va"]},"VC":{"ag":[],"r":[]},"aDL":{"ah":["VC"]},"bgm":{"aB":[]},"U2":{"ag":[],"r":[]},"aCa":{"ah":["U2"]},"U7":{"ag":[],"r":[]},"aCd":{"ah":["U7"]},"bau":{"aB":[]},"aeA":{"au":[],"r":[]},"ads":{"au":[],"r":[]},"aGK":{"ag":[],"r":[]},"N9":{"ag":[],"r":[]},"aCu":{"ah":["N9"]},"bqs":{"au":[],"r":[]},"PR":{"au":[],"r":[]},"brq":{"aB":[]},"bqW":{"au":[],"r":[]},"b9a":{"aB":[]},"aGL":{"ah":["aGK"]},"bq4":{"aB":[]},"bpw":{"aB":[]},"b9Q":{"aB":[]},"bpy":{"aB":[]},"btv":{"aB":[]},"VB":{"ag":[],"r":[]},"bgj":{"aB":[]},"aDK":{"ah":["VB"]},"bgk":{"aB":[]},"VQ":{"ag":[],"r":[]},"W1":{"ag":[],"r":[]},"bjY":{"ah":["VQ"]},"brl":{"aB":[]},"aE_":{"ah":["W1"]},"Vy":{"ag":[],"r":[]},"VX":{"ag":[],"r":[]},"U5":{"ag":[],"r":[]},"aDC":{"ah":["Vy"]},"bkH":{"aB":[]},"bk2":{"ah":["VX"]},"bsc":{"aB":[]},"aCc":{"ah":["U5"]},"baa":{"aB":[]},"Vs":{"ag":[],"r":[]},"Vx":{"ag":[],"r":[]},"bjC":{"ah":["Vs"]},"bhe":{"aB":[]},"aDB":{"ah":["Vx"]},"bkI":{"aB":[]},"Vv":{"ag":[],"r":[]},"Ut":{"ag":[],"r":[]},"UJ":{"ag":[],"r":[]},"aDz":{"ah":["Vv"]},"bhW":{"aB":[]},"biS":{"ah":["Ut"]},"aCG":{"ah":["UJ"]},"bdf":{"aB":[]},"TY":{"ag":[],"r":[]},"UX":{"ag":[],"r":[]},"U6":{"ag":[],"r":[]},"biw":{"ah":["TY"]},"b9f":{"aB":[]},"bj3":{"ah":["UX"]},"beJ":{"aB":[]},"biJ":{"ah":["U6"]},"ail":{"aB":[]},"aij":{"ag":[],"r":[]},"aik":{"ah":["aij"]},"UK":{"ag":[],"r":[]},"awO":{"ag":[],"r":[]},"aCH":{"ah":["UK"],"ez":[]},"b8o":{"ah":["awO"]},"b8n":{"aB":[]},"Ur":{"ag":[],"r":[]},"biQ":{"ah":["Ur"]},"buw":{"aB":[]},"aej":{"aB":[]},"Vf":{"ag":[],"r":[]},"Vh":{"ag":[],"r":[]},"bjp":{"ah":["Vf"]},"bgp":{"aB":[]},"aDl":{"ah":["Vh"]},"bgE":{"aB":[]},"a7Z":{"au":[],"r":[]},"W7":{"ag":[],"r":[]},"UR":{"ag":[],"r":[]},"U3":{"ag":[],"r":[]},"UI":{"ag":[],"r":[]},"Vt":{"ag":[],"r":[]},"VG":{"ag":[],"r":[]},"W0":{"ag":[],"r":[]},"Vr":{"ag":[],"r":[]},"aEc":{"ah":["W7"]},"buI":{"aB":[]},"biZ":{"ah":["UR"]},"bpx":{"aB":[]},"biB":{"ah":["U3"]},"biT":{"ah":["UI"]},"bkV":{"aB":[]},"aDv":{"ah":["Vt"]},"aDR":{"ah":["VG"]},"bk6":{"ah":["W0"]},"bjA":{"ah":["Vr"]},"bcB":{"au":[],"r":[]},"b6b":{"au":[],"r":[]},"dA":{"au":[],"r":[]},"eR":{"au":[],"r":[]},"ave":{"au":[],"r":[]},"fi":{"au":[],"r":[]},"F7":{"au":[],"r":[]},"UY":{"ag":[],"r":[]},"aCS":{"ah":["UY"]},"beQ":{"aB":[]},"W3":{"ag":[],"r":[]},"bka":{"ah":["W3"]},"VP":{"ag":[],"r":[]},"UZ":{"ag":[],"r":[]},"VH":{"ag":[],"r":[]},"bjX":{"ah":["VP"]},"brj":{"aB":[]},"aCT":{"ah":["UZ"]},"ba1":{"aB":[]},"bjU":{"ah":["VH"]},"bqS":{"aB":[]},"U1":{"ag":[],"r":[]},"UV":{"ag":[],"r":[]},"VD":{"ag":[],"r":[]},"biA":{"ah":["U1"]},"b9q":{"aB":[]},"bj1":{"ah":["UV"]},"beG":{"aB":[]},"bjT":{"ah":["VD"]},"bq7":{"aB":[]}}'))
C.Ke(b.typeUniverse,JSON.parse('{"mC":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.ax
return{x:w("lX<v?>"),e8:w("d5"),G:w("v"),l:w("bl<n,n>"),J:w("bl<n,L>"),I:w("bl<n,G>"),R:w("em<n>"),Z:w("a0"),M:w("O<dc>"),f5:w("O<a2J>"),gh:w("O<aRl>"),h:w("O<a2N>"),V:w("O<ac>"),O:w("O<v>"),ey:w("O<S>"),dh:w("O<Ht>"),aJ:w("O<aA<aD>>"),w:w("O<a0>"),Q:w("O<ai<v>>"),B:w("O<ai<Ht>>"),gO:w("O<ai<ai<L>>>"),bj:w("O<ai<n>>"),b:w("O<ai<L>>"),fA:w("O<ai<G?>>"),D:w("O<a5<n,aD>>"),g:w("O<u>"),bz:w("O<tr>"),ds:w("O<a8l>"),v:w("O<hr>"),U:w("O<+(u,L)>"),ev:w("O<+(u,G)>"),K:w("O<+(n,n)>"),fT:w("O<+(L,r)>"),E:w("O<+(G,n)>"),u:w("O<+(G,G)>"),c:w("O<+(n,n,a0)>"),e:w("O<+(n,L,L,G)>"),o:w("O<+(n,G,n,G)>"),d:w("O<+(n,n,L,L,a5<n,L>)>"),_:w("O<uM>"),q:w("O<cR>"),fQ:w("O<a9Z>"),s:w("O<n>"),cF:w("O<as>"),X:w("O<wb>"),F:w("O<aaL>"),p:w("O<r>"),bL:w("O<ab5>"),fH:w("O<li>"),aq:w("O<b93>"),a_:w("O<abj>"),cS:w("O<abq>"),cB:w("O<nm>"),ba:w("O<abA>"),d9:w("O<Pq>"),bi:w("O<abT>"),eW:w("O<Cg>"),fY:w("O<YZ>"),aX:w("O<FE>"),ea:w("O<acI>"),gB:w("O<add>"),ed:w("O<PI>"),g4:w("O<bkU>"),aS:w("O<a_v>"),ac:w("O<adw>"),cd:w("O<Cq>"),fr:w("O<aeq>"),e4:w("O<a0d>"),r:w("O<aev>"),au:w("O<aHB>"),f7:w("O<R>"),n:w("O<L>"),t:w("O<G>"),dS:w("O<aB?>"),fs:w("O<tr?>"),d4:w("O<n?>"),bN:w("O<G?>"),gJ:w("cs<aik>"),A:w("cs<ah<ag>>"),bF:w("ai<v>"),gl:w("ai<S>"),ew:w("ai<aD>"),j:w("ai<@>"),bW:w("ai<G>"),a:w("a5<n,@>"),f:w("a5<@,@>"),bd:w("M<eb,n>"),dv:w("M<n,n>"),fR:w("M<+(L,r),r>"),m:w("iB"),gA:w("z6"),gD:w("vM"),P:w("cr"),C:w("aD"),W:w("tr"),dV:w("eb"),g7:w("BY"),N:w("n"),bO:w("as"),k:w("kh"),Y:w("bq<L>"),cL:w("aaM"),gj:w("cx<n>"),aC:w("cx<G?>"),dg:w("e9<qJ>"),e3:w("b9t"),a2:w("Cc"),f3:w("qJ"),es:w("FI"),gV:w("n0"),y:w("R"),i:w("L"),z:w("@"),S:w("G"),L:w("ai<@>?"),fF:w("a5<@,@>?"),cK:w("aD?"),az:w("pW?"),T:w("n?"),cD:w("L?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aWQ=new C.dc(0,0.85)
D.fA2=new C.y("Tap once to start the chain",null,K.TL,null,null,null,null,null,null,null,null,null)
D.aWo=new C.bI(D.aWQ,null,null,D.fA2,null)
D.aWG=new C.dc(0,0.1)
D.aXK=new B.aRv(0,0,0)
D.Ka=new B.aRv(0,0.5,0)
D.aYi=new C.ay(A.b2,1,A.q,-1)
D.aZL=new C.aY(0,1/0,0,290)
D.aZS=new C.aY(16,1/0,16,1/0)
D.f10=new C.H(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCp=new C.y("\u26a1",null,D.f10,null,null,null,null,null,null,null,null,null)
D.b4x=new C.cp(A.A,null,null,D.fCp,null)
D.aQi=new C.H(!0,A.c0,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsh=new C.y("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aQi,null,A.L,null,null,null,null,null,null,null)
D.e8z=new C.D(A.o0,D.fsh,null)
D.b4G=new C.cp(A.A,null,null,D.e8z,null)
D.fw2=new C.y("Press Drop! and watch them fall from 20 metres.",null,A.kI,null,A.L,null,null,null,null,null,null,null)
D.e8D=new C.D(A.o0,D.fw2,null)
D.b50=new C.cp(A.A,null,null,D.e8D,null)
D.fbQ=new C.H(!0,A.jh,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAQ=new C.y("Draw anywhere",null,D.fbQ,null,null,null,null,null,null,null,null,null)
D.b54=new C.cp(A.A,null,null,D.fAQ,null)
D.fiu=new C.y("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aQi,null,A.L,null,null,null,null,null,null,null)
D.e9k=new C.D(A.Fw,D.fiu,null)
D.b5n=new C.cp(A.A,null,null,D.e9k,null)
D.abX=new C.v(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b7Z=new C.v(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b8L=new C.v(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.W2=new C.v(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b8R=new C.v(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b8W=new C.v(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.b90=new C.v(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.W5=new C.v(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.ba5=new C.v(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.baa=new C.v(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.bav=new C.v(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.bbD=new C.v(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.adg=new C.v(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.bc6=new C.v(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.Az=new C.v(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.bcU=new C.v(1,1,0.9686274509803922,0.8,A.t)
D.adJ=new C.v(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.bdw=new C.v(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.bdD=new C.v(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.adU=new C.v(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.WJ=new C.v(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.be6=new C.v(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.ae2=new C.v(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.aef=new C.v(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.WU=new C.v(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bfS=new C.v(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bfV=new C.v(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bfZ=new C.v(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.bg7=new C.v(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.aeI=new C.v(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.bgu=new C.v(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.EP=new C.v(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.bhC=new C.v(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.bhK=new C.v(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bhO=new C.v(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.bhZ=new C.v(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.bi2=new C.v(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bi9=new C.v(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.ve=new C.v(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.afv=new C.v(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.bjg=new C.v(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.bk0=new C.v(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.bkt=new C.v(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.bkT=new C.v(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.afW=new C.v(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.bpr=new C.ba(11e6)
D.bqs=new C.Q(0,0,8,6)
D.agU=new C.Q(0,0,9,0)
D.bqZ=new C.Q(10,0,10,4)
D.br3=new C.Q(10,10,10,6)
D.brb=new C.Q(10,34,10,26)
D.brj=new C.Q(10,6,10,2)
D.Yn=new C.Q(10,6,10,4)
D.brl=new C.Q(10,8,0,10)
D.brW=new C.Q(12,8,8,8)
D.bs0=new C.Q(14,0,14,22)
D.bs2=new C.Q(14,0,14,30)
D.ahl=new C.Q(14,0,14,6)
D.ahs=new C.Q(14,10,8,12)
D.bsz=new C.Q(14,8,14,6)
D.bt0=new C.Q(16,4,16,28)
D.bta=new C.Q(16,8,16,12)
D.bve=new C.Q(26,12,26,58)
D.bw2=new C.Q(4,4,6,2)
D.bw4=new C.Q(4,4,8,2)
D.bwE=new C.Q(8,14,8,12)
D.bwL=new C.Q(8,40,8,30)
D.bwP=new C.Q(8,6,16,0)
D.bwQ=new C.Q(8,6,8,8)
D.bxa=new C.Q(0,0,1.5,0)
D.aXw=new C.GT(26,"saturation")
D.bxs=new C.yO(A.cV,D.aXw,null,A.abV)
D.fhz=new C.y("REACTION LAB",null,Y.aQU,null,null,null,null,A.a2,null,1,null,null)
D.bxy=new C.bB(1,A.bg,D.fhz,null)
D.f8J=new C.H(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkK=new C.y("CORE PROTOCOL",null,D.f8J,null,null,null,null,null,null,null,null,null)
D.bxM=new C.bB(1,A.bg,D.fkK,null)
D.flr=new C.y("\ud83d\udce2 NGMY Ads",null,A.qu,null,null,null,null,A.eE,null,1,null,null)
D.byu=new C.bB(1,A.bg,D.flr,null)
D.fgi=new C.y("Wire selected",null,A.hs,null,null,null,null,null,null,null,null,null)
D.byI=new C.bB(1,A.bg,D.fgi,null)
D.akB=new C.a0(62712,"MaterialIcons",!1)
D.bDH=new C.a0(62878,"MaterialIcons",!1)
D.a_F=new C.a0(62908,"MaterialIcons",!1)
D.bDK=new C.a0(62918,"MaterialIcons",!1)
D.bDL=new C.a0(62931,"MaterialIcons",!1)
D.bDO=new C.a0(62951,"MaterialIcons",!1)
D.bE4=new C.a0(63064,"MaterialIcons",!1)
D.bE6=new C.a0(63070,"MaterialIcons",!1)
D.y8=new C.a0(63128,"MaterialIcons",!1)
D.Gi=new C.a0(63726,"MaterialIcons",!1)
D.bFq=new C.a0(983122,"MaterialIcons",!1)
D.bFF=new C.a0(983247,"MaterialIcons",!1)
D.bFR=new C.a0(983415,"MaterialIcons",!1)
D.bFS=new C.a0(983417,"MaterialIcons",!1)
D.bFT=new C.a0(983442,"MaterialIcons",!1)
D.bFU=new C.a0(983443,"MaterialIcons",!1)
D.alV=new C.a0(983467,"MaterialIcons",!1)
D.bG_=new C.a0(983501,"MaterialIcons",!1)
D.bGa=new C.a0(983616,"MaterialIcons",!1)
D.bGb=new C.a0(983624,"MaterialIcons",!1)
D.bGo=new C.a0(983776,"MaterialIcons",!1)
D.bGF=new C.a0(984561,"MaterialIcons",!1)
D.bHf=new C.ae(A.rg,24,A.aM,null,null,null)
D.bI_=new C.ae(A.NK,null,A.ad,null,null,null)
D.bIx=new C.ae(A.my,21,A.ad,null,null,null)
D.bFp=new C.a0(983117,"MaterialIcons",!1)
D.bJU=new C.ae(D.bFp,28,A.c,null,null,null)
D.bK9=new C.ae(A.jp,18,null,null,null,null)
D.bLV=new C.ae(A.e6,21,A.c9,null,null,null)
D.bM9=new C.ae(A.mz,null,A.ad,null,null,null)
D.bMj=new C.ae(A.a0w,21,A.ad,null,null,null)
D.bN8=new C.ae(A.eD,17,A.ad,null,null,null)
D.ani=new C.ae(A.eD,19,null,null,null,null)
D.mD=new C.ae(A.vI,21,A.ad,null,null,null)
D.bOC=new C.ae(A.Nd,null,A.ad,null,null,null)
D.bPL=new C.ae(A.jp,21,A.ad,null,null,null)
D.bQD=new C.ae(A.fg,20,A.aA,null,null,null)
D.bRi=new C.ae(A.dX,null,A.aM,null,null,null)
D.bRD=new C.ae(A.k6,null,A.aA,null,null,null)
D.dd0=w([A.di,A.d3,A.di],x.O)
D.bUy=new C.a8(A.a3,A.a8,A.x,D.dd0,null,null)
D.cRV=w([A.bP,A.bl],x.O)
D.bUG=new C.a8(A.b_,A.b4,A.x,D.cRV,null,null)
D.bUS=new C.a8(A.b_,A.b4,A.x,A.axu,null,null)
D.cSg=w([A.fU,A.f8],x.O)
D.bV0=new C.a8(A.b_,A.b4,A.x,D.cSg,null,null)
D.aok=new C.a8(A.b_,A.b4,A.x,M.a2c,null,null)
D.cPH=w([A.ow,A.ib],x.O)
D.bVE=new C.a8(A.b_,A.b4,A.x,D.cPH,null,null)
D.cRD=w([A.ee,A.az],x.O)
D.aor=new C.a8(A.b_,A.b4,A.x,D.cRD,null,null)
D.d7k=w([A.dy,A.iV,A.bl],x.O)
D.bVX=new C.a8(A.a3,A.a8,A.x,D.d7k,null,null)
D.d7q=w([A.ji,A.cu],x.O)
D.bWg=new C.a8(A.b_,A.b4,A.x,D.d7q,null,null)
D.cor=w([A.bP,A.dy],x.O)
D.bWp=new C.a8(A.a3,A.a8,A.x,D.cor,null,null)
D.ay9=w([A.ee,L.ml],x.O)
D.bWw=new C.a8(A.b_,A.b4,A.x,D.ay9,null,null)
D.bWN=new C.a8(A.b_,A.b4,A.x,I.aoO,null,null)
D.bed=new C.v(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b7n=new C.v(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cN3=w([D.bed,D.b7n],x.O)
D.bX_=new C.a8(A.b_,A.b4,A.x,D.cN3,null,null)
D.bXA=new C.a8(A.ax,A.aC,A.x,A.a29,null,null)
D.biH=new C.v(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.div=w([D.biH,A.KI],x.O)
D.bXH=new C.a8(A.b_,A.b4,A.x,D.div,null,null)
D.d_E=w([A.az,A.w],x.O)
D.bXM=new C.a8(A.b_,A.b4,A.x,D.d_E,null,null)
D.bXP=new C.a8(A.b_,A.b4,A.x,T.axy,null,null)
D.bi6=new C.v(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.biR=new C.v(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cB7=w([A.Lv,D.bi6,D.biR],x.O)
D.bXZ=new C.a8(A.b_,A.b4,A.x,D.cB7,null,null)
D.coL=w([A.d5,A.fz],x.O)
D.bYe=new C.a8(A.b_,A.b4,A.x,D.coL,null,null)
D.bYk=new C.a8(A.ax,A.aC,A.x,A.a2Z,null,null)
D.aoQ=w([0,2,4,6,7,9,11],x.t)
D.bYW=w([0,4,7],x.t)
D.aoV=w([0,4,7,12],x.t)
D.bYX=w([0,4,7,4],x.t)
D.axf=w([A.h4,A.pJ],x.O)
D.awL=w([A.hw,A.cY],x.O)
D.av9=w([A.bu,A.dR],x.O)
D.cJE=w([A.aM,A.d5],x.O)
D.cQ2=w([A.c9,A.eQ],x.O)
D.d8A=w([A.bX,A.lI],x.O)
D.auD=w([A.cs,A.k_],x.O)
D.cOD=w([A.bJ,A.aK],x.O)
D.bZg=w([D.axf,D.awL,A.a2h,D.av9,D.cJE,D.cQ2,A.awh,D.d8A,D.auD,D.cOD],x.Q)
D.c2V=w([120,220,380],x.t)
D.c6F=w([12,16,19,24],x.t)
D.c6O=w([1400,800,450,2400],x.t)
D.cb3=w([0,0.6,1],x.n)
D.cfc=w([250,450,900,1500],x.t)
D.b8b=new C.v(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bis=new C.v(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bgw=new C.v(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.blH=new C.v(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bfI=new C.v(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.atU=w([D.b8b,D.bis,D.bgw,D.blH,D.bfI],x.O)
D.eCH=new C.z("type","Typewriter")
D.evo=new C.z("bounce","Bounce")
D.eDt=new C.z("wave","Wave")
D.eEz=new C.z("zoom","Zoom")
D.cvU=w([D.eCH,D.evo,D.eDt,A.a68,I.aM9,D.eEz,I.aMd],x.K)
D.cw7=w([50,25,75],x.t)
D.cBD=w([0,5,10,15,18,20,25],x.t)
D.ex2=new C.z("fish","Fish")
D.ex4=new C.z("fly","Fireflies")
D.evm=new C.z("bird","Birds")
D.cFR=w([D.ex2,D.ex4,D.evm],x.K)
D.cJV=w([900,500,250,1600],x.t)
D.cNs=w([0.78,1],x.n)
D.ava=w([0,2,4,7,9,12,14,16],x.t)
D.cO_=w([A.bu,A.bC,A.b8,A.bu],x.O)
D.avf=w(["A","T","C","G"],x.s)
D.cO0=w(["A","U","C","G"],x.s)
D.a26=w([A.ay,A.bN,A.bi,A.aP,A.nT],x.O)
D.cPl=w([A.az,A.ay,A.cs,A.bN,A.bi,A.cB,A.ce,A.bC,A.KI],x.O)
D.a2a=w([0.04,0.17,0.3],x.n)
D.cPZ=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.H4=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eMF=new B.uM("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eML=new B.uM("Medium engine","A good all-rounder.",0.3,0.9)
D.eMK=new B.uM("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.H5=w([D.eMF,D.eML,D.eMK],x._)
D.elc=new C.z(6,"Easy")
D.elR=new C.z(8,"Medium")
D.ehe=new C.z(10,"Hard")
D.cQP=w([D.elc,D.elR,D.ehe],x.E)
D.avz=w([0.55,0.78,1],x.n)
D.cSl=w([0.93,0.975,1],x.n)
D.avK=w([A.c,A.h5,A.oy,A.az],x.O)
D.fFn=new B.xX("Moon",1737,4291941851)
D.fFk=new B.xX("Earth",6371,4281908728)
D.fFo=new B.xX("Neptune",24622,4284524026)
D.fFp=new B.xX("Saturn",58232,4294829706)
D.fFl=new B.xX("Jupiter",69911,4294677052)
D.fFq=new B.xX("Sun",696340,4294688548)
D.fFr=new B.xX("Sirius A",119e4,4290763774)
D.fFi=new B.xX("Arcturus",179e5,4294818420)
D.fFj=new B.xX("Betelgeuse",531e6,4294472049)
D.fFm=new B.xX("UY Scuti",667e6,4293870660)
D.PX=w([D.fFn,D.fFk,D.fFo,D.fFp,D.fFl,D.fFq,D.fFr,D.fFi,D.fFj,D.fFm],C.ax("O<xX>"))
D.eIb=new C.bk("glow","Glow",A.a_H)
D.eFL=new C.bk("rainbow","Rainbow",A.nk)
D.eG7=new C.bk("stars","Stars",A.i4)
D.eFv=new C.bk("sparks","Sparks",A.dX)
D.eHs=new C.bk("fire","Fire",A.vJ)
D.cU9=w([D.eIb,D.eFL,D.eG7,D.eFv,D.eHs],x.c)
D.avO=w([A.bi,A.ay,A.bN,A.d3],x.O)
D.cV9=w([0.2,1],x.n)
D.eMC=new B.uM("Radar","Shows your height above the ground.",0.1,0)
D.eMD=new B.uM("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eMA=new B.uM("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.avW=w([D.eMC,D.eMD,D.eMA],x._)
D.eGI=new C.bk("attract","Attract",A.yp)
D.eGu=new C.bk("scare","Scare",A.re)
D.eFE=new C.bk("food","Food",A.u4)
D.bFv=new C.a0(983158,"MaterialIcons",!1)
D.eH0=new C.bk("hunt","Hunt",D.bFv)
D.cVM=w([D.eGI,D.eGu,D.eFE,D.eH0],x.c)
D.cWb=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cWq=w([47,100,220,470,1000],x.n)
D.awd=w([0,2,4,7,9],x.t)
D.I6={volts:0}
D.a3Y=new C.bl(D.I6,[3],x.J)
D.It=new C.e7(["b","battery",0.2,0.3,D.a3Y])
D.e3S={on:0}
D.dnd=new C.bl(D.e3S,[1],x.J)
D.D8=new C.e7(["s","switch",0.5,0.3,D.dnd])
D.eKL=new C.e7(["l","bulb",0.8,0.3,A.j2])
D.cS1=w([D.It,D.D8,D.eKL],x.d)
D.D7=new C.cA(["b",0,"s",0])
D.eJM=new C.cA(["s",1,"l",0])
D.aMh=new C.cA(["l",1,"b",1])
D.d7v=w([D.D7,D.eJM,D.aMh],x.o)
D.cRv=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.egs=new B.mz("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cS1,D.d7v,D.cRv)
D.aGm={ohms:0}
D.aDW=new C.bl(D.aGm,[220],x.J)
D.eKe=new C.e7(["r","resistor",0.5,0.3,D.aDW])
D.eL_=new C.e7(["d","led",0.8,0.3,A.j2])
D.dax=w([D.It,D.eKe,D.eL_],x.d)
D.eJ7=new C.cA(["b",0,"r",0])
D.eJG=new C.cA(["r",1,"d",0])
D.eJd=new C.cA(["d",1,"b",1])
D.dj_=w([D.eJ7,D.eJG,D.eJd],x.o)
D.daX=w(["led","diode","indicator"],x.s)
D.egz=new B.mz("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dax,D.dj_,D.daX)
D.a5e={level:0}
D.dmA=new C.bl(D.a5e,[0.2],x.J)
D.eKk=new C.e7(["p","pot",0.5,0.3,D.dmA])
D.eKm=new C.e7(["m","motor",0.8,0.3,A.j2])
D.cSj=w([D.It,D.eKk,D.eKm],x.d)
D.eJ6=new C.cA(["b",0,"p",0])
D.eJC=new C.cA(["p",1,"m",0])
D.eJy=new C.cA(["m",1,"b",1])
D.deY=w([D.eJ6,D.eJC,D.eJy],x.o)
D.d7e=w(["fan","motor","spin","dimmer"],x.s)
D.egq=new B.mz("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cSj,D.deY,D.d7e)
D.a3U=new C.bl(D.a5e,[0.9],x.J)
D.aMo=new C.e7(["s","solar",0.25,0.3,D.a3U])
D.aMn=new C.e7(["l","bulb",0.75,0.3,A.j2])
D.cUR=w([D.aMo,D.aMn],x.d)
D.eJJ=new C.cA(["s",0,"l",0])
D.eJx=new C.cA(["l",1,"s",1])
D.cT2=w([D.eJJ,D.eJx],x.o)
D.dfx=w(["solar","sun","without battery","no battery","free"],x.s)
D.egt=new B.mz("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cUR,D.cT2,D.dfx)
D.eL2=new C.e7(["c","crank",0.25,0.3,D.a3U])
D.d5D=w([D.eL2,D.aMn],x.d)
D.eJa=new C.cA(["c",0,"l",0])
D.eJw=new C.cA(["l",1,"c",1])
D.d6a=w([D.eJa,D.eJw],x.o)
D.d5M=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.egp=new B.mz("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d5D,D.d6a,D.d5M)
D.dmz=new C.bl(D.a5e,[0.7],x.J)
D.eKp=new C.e7(["t","turbine",0.25,0.3,D.dmz])
D.eKc=new C.e7(["m","motor",0.75,0.3,A.j2])
D.d0h=w([D.eKp,D.eKc],x.d)
D.eJU=new C.cA(["t",0,"m",0])
D.eJz=new C.cA(["m",1,"t",1])
D.d_i=w([D.eJU,D.eJz],x.o)
D.d4v=w(["wind","turbine","windmill","water","hydro"],x.s)
D.egm=new B.mz("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.d0h,D.d_i,D.d4v)
D.aDT=new C.bl(D.I6,[9],x.J)
D.a6b=new C.e7(["b","battery",0.2,0.3,D.aDT])
D.aMm=new C.e7(["r","radio",0.8,0.3,A.j2])
D.dg6=w([D.a6b,D.D8,D.aMm],x.d)
D.eJO=new C.cA(["s",1,"r",0])
D.aMi=new C.cA(["r",1,"b",1])
D.bYE=w([D.D7,D.eJO,D.aMi],x.o)
D.deJ=w(["radio","music","listen"],x.s)
D.egy=new B.mz("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dg6,D.bYE,D.deJ)
D.dnF=new C.bl(D.I6,[12],x.J)
D.aMl=new C.e7(["b","battery",0.2,0.3,D.dnF])
D.eKM=new C.e7(["t","tv",0.8,0.3,A.j2])
D.cS2=w([D.aMl,D.D8,D.eKM],x.d)
D.eJP=new C.cA(["s",1,"t",0])
D.aMj=new C.cA(["t",1,"b",1])
D.d8D=w([D.D7,D.eJP,D.aMj],x.o)
D.dg4=w(["tv","television","screen","watch"],x.s)
D.egj=new B.mz("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cS2,D.d8D,D.dg4)
D.eKC=new C.e7(["z","buzzer",0.8,0.3,A.j2])
D.cyr=w([D.It,D.D8,D.eKC],x.d)
D.eJQ=new C.cA(["s",1,"z",0])
D.eK7=new C.cA(["z",1,"b",1])
D.cNe=w([D.D7,D.eJQ,D.eK7],x.o)
D.dd5=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.egv=new B.mz("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cyr,D.cNe,D.dd5)
D.eKl=new C.e7(["h","heater",0.8,0.3,A.j2])
D.d3d=w([D.a6b,D.D8,D.eKl],x.d)
D.eJL=new C.cA(["s",1,"h",0])
D.eJl=new C.cA(["h",1,"b",1])
D.cNW=w([D.D7,D.eJL,D.eJl],x.o)
D.cit=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.egk=new B.mz("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d3d,D.cNW,D.cit)
D.eKO=new C.e7(["s","solar",0.2,0.25,D.a3U])
D.dnK=new C.bl(D.aGm,[100],x.J)
D.eKR=new C.e7(["r","resistor",0.55,0.25,D.dnK])
D.eKY=new C.e7(["c","capacitor",0.85,0.25,A.j2])
D.eKh=new C.e7(["q","resistor",0.55,0.6,D.aDW])
D.eKP=new C.e7(["d","led",0.85,0.6,A.j2])
D.d8b=w([D.eKO,D.eKR,D.eKY,D.eKh,D.eKP],x.d)
D.eJK=new C.cA(["s",0,"r",0])
D.eJF=new C.cA(["r",1,"c",0])
D.eJc=new C.cA(["c",1,"s",1])
D.eJb=new C.cA(["c",0,"q",0])
D.eJE=new C.cA(["q",1,"d",0])
D.eJe=new C.cA(["d",1,"c",1])
D.cYi=w([D.eJK,D.eJF,D.eJc,D.eJb,D.eJE,D.eJe],x.o)
D.d5_=w(["capacitor","store","charge","flash"],x.s)
D.egx=new B.mz("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.d8b,D.cYi,D.d5_)
D.eKs=new C.e7(["b","battery",0.15,0.3,D.a3Y])
D.eL3=new C.e7(["l1","bulb",0.5,0.3,A.j2])
D.eKz=new C.e7(["l2","bulb",0.85,0.3,A.j2])
D.cQh=w([D.eKs,D.eL3,D.eKz],x.d)
D.eJ5=new C.cA(["b",0,"l1",0])
D.eJt=new C.cA(["l1",1,"l2",0])
D.eJu=new C.cA(["l2",1,"b",1])
D.d0Y=w([D.eJ5,D.eJt,D.eJu],x.o)
D.dfR=w(["series","two bulbs","dim"],x.s)
D.egn=new B.mz("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cQh,D.d0Y,D.dfR)
D.e48={volts:0,charge:1}
D.dnP=new C.bl(D.e48,[1.5,0],x.J)
D.eKW=new C.e7(["b","battery",0.75,0.3,D.dnP])
D.cPI=w([D.aMo,D.eKW],x.d)
D.eJI=new C.cA(["s",0,"b",0])
D.eJ9=new C.cA(["b",1,"s",1])
D.cYz=w([D.eJI,D.eJ9],x.o)
D.d58=w(["charge","rechargeable","flat","recharge"],x.s)
D.egl=new B.mz("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cPI,D.cYz,D.d58)
D.dnE=new C.bl(D.I6,[4.5],x.J)
D.eKn=new C.e7(["b","battery",0.2,0.3,D.dnE])
D.aMk=new C.e7(["p","phone",0.8,0.3,A.j2])
D.d07=w([D.eKn,D.D8,D.aMk],x.d)
D.eJN=new C.cA(["s",1,"p",0])
D.a6a=new C.cA(["p",1,"b",1])
D.dc5=w([D.D7,D.eJN,D.a6a],x.o)
D.ddx=w(["phone","charger","usb","mobile"],x.s)
D.egr=new B.mz("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.d07,D.dc5,D.ddx)
D.eK9=new C.e7(["f","fan",0.8,0.3,A.j2])
D.caD=w([D.It,D.eK9],x.d)
D.eJ4=new C.cA(["b",0,"f",0])
D.eJj=new C.cA(["f",1,"b",1])
D.cOr=w([D.eJ4,D.eJj],x.o)
D.d7d=w(["fan","cool","air","wind"],x.s)
D.egA=new B.mz("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.caD,D.cOr,D.d7d)
D.eKG=new C.e7(["b","battery",0.15,0.2,D.a3Y])
D.eKa=new C.e7(["a","ammeter",0.5,0.2,A.j2])
D.eK8=new C.e7(["l","bulb",0.85,0.2,A.j2])
D.eKI=new C.e7(["v","voltmeter",0.5,0.6,A.j2])
D.d5r=w([D.eKG,D.eKa,D.eK8,D.eKI],x.d)
D.eJ2=new C.cA(["b",0,"a",0])
D.eJ1=new C.cA(["a",1,"l",0])
D.eJW=new C.cA(["v",0,"l",0])
D.eJX=new C.cA(["v",1,"l",1])
D.cYq=w([D.eJ2,D.eJ1,D.aMh,D.eJW,D.eJX],x.o)
D.diZ=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.egw=new B.mz("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d5r,D.cYq,D.diZ)
D.eL6=new C.e7(["b","battery",0.15,0.2,D.aDT])
D.eKr=new C.e7(["t","tv",0.55,0.2,A.j2])
D.aDU=new C.bl(D.I6,[5],x.J)
D.eKf=new C.e7(["c","buck",0.4,0.5,D.aDU])
D.eKt=new C.e7(["p","phone",0.8,0.5,A.j2])
D.cWd=w([D.eL6,D.eKr,D.eKf,D.eKt],x.d)
D.eJ8=new C.cA(["b",0,"t",0])
D.aMf=new C.cA(["b",0,"c",0])
D.aMg=new C.cA(["c",1,"p",0])
D.d04=w([D.eJ8,D.aMj,D.aMf,D.aMg,D.a6a],x.o)
D.cUq=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.ego=new B.mz("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cWd,D.d04,D.cUq)
D.eKg=new C.e7(["c","buck",0.5,0.3,D.aDU])
D.cNN=w([D.aMl,D.eKg,D.aMk],x.d)
D.cSs=w([D.aMf,D.aMg,D.a6a],x.o)
D.clT=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.egi=new B.mz("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cNN,D.cSs,D.clT)
D.eKx=new C.e7(["d","diode",0.5,0.3,A.j2])
D.d1a=w([D.a6b,D.eKx,D.aMm],x.d)
D.eJ3=new C.cA(["b",0,"d",0])
D.eJf=new C.cA(["d",1,"r",0])
D.cAY=w([D.eJ3,D.eJf,D.aMi],x.o)
D.cU6=w(["diode","protect","backwards","one way"],x.s)
D.egu=new B.mz("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.d1a,D.cAY,D.cU6)
D.Q_=w([D.egs,D.egz,D.egq,D.egt,D.egp,D.egm,D.egy,D.egj,D.egv,D.egk,D.egx,D.egn,D.egl,D.egr,D.egA,D.egw,D.ego,D.egi,D.egu],C.ax("O<mz>"))
D.h4E=new B.FW("Moon",1.62,A.dy,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.h4C=new B.FW("Mars",3.71,A.ay,"Mars has about 38 percent of Earth's gravity.")
D.h4F=new B.FW("Mercury",3.7,A.jY,"Mercury is small, so its gravity is like Mars.")
D.h4z=new B.FW("Venus",8.87,A.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.h4B=new B.FW("Earth",9.81,A.aP,"On Earth gravity is strong, and the air also slows you down.")
D.h4D=new B.FW("Neptune",11.15,A.d3,"Neptune pulls a little harder than Earth.")
D.h4A=new B.FW("Jupiter",24.79,A.cs,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.ro=w([D.h4E,D.h4C,D.h4F,D.h4z,D.h4B,D.h4D,D.h4A],C.ax("O<FW>"))
D.cYg=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a2q=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cYX=w([0.2,0.5,0.8],x.n)
D.bE_=new C.a0(63040,"MaterialIcons",!1)
D.eGy=new C.bk("peg","Peg",D.bE_)
D.eFI=new C.bk("bar","Bar",R.BK)
D.eGa=new C.bk("erase","Erase",A.Nh)
D.cZ8=w([D.eGy,D.eFI,D.eGa],x.c)
D.ePD=new C.cR(A.bj,A.J,4)
D.cZj=w([D.ePD],x.q)
D.awt=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aVv=new B.Kd(0,"accordion")
D.cOJ=w([A.jr,A.BL,A.Bz],x.w)
D.cVE=w(["Mail","SMS","Ad"],x.s)
D.cPd=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.h2R=new B.Ar(D.aVv,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.axf,D.cOJ,D.cVE,D.cPd)
D.a9F=new B.Kd(1,"flip")
D.d4U=w([A.q1,A1.Gu,A.u5],x.w)
D.d_O=w(["Unlock","Verify","Secure"],x.s)
D.cNJ=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.h2Q=new B.Ar(D.a9F,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.awL,D.d4U,D.d_O,D.cNJ)
D.aVw=new B.Kd(2,"towers")
D.cZC=w([A.yl,A.q5,A.hP],x.w)
D.cZe=w(["Save","Grow","Earn"],x.s)
D.cBM=w(["","",""],x.s)
D.h2S=new B.Ar(D.aVw,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a2h,D.cZC,D.cZe,D.cBM)
D.a9G=new B.Kd(3,"assemble")
D.d5P=w([A.nm,A.ha,A.dX],x.w)
D.cV2=w(["Launch","Charge","Shine"],x.s)
D.d2p=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.h2U=new B.Ar(D.a9G,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.av9,D.d5P,D.cV2,D.d2p)
D.aVx=new B.Kd(4,"carousel")
D.d5E=w([A.b8,A.f0],x.O)
D.cVO=w([A.my,A.al7,A.a0o],x.w)
D.cQF=w(["Explore","Discover","Learn"],x.s)
D.d0c=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.h2P=new B.Ar(D.aVx,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d5E,D.cVO,D.cQF,D.d0c)
D.aVy=new B.Kd(5,"burst")
D.cZa=w([A.jd,A.tk],x.O)
D.cP8=w([A.lm,A.mw,A.i3],x.w)
D.cPu=w(["Cheer","Win","Love"],x.s)
D.cRB=w(["Make some noise","First place","Share the joy"],x.s)
D.h2T=new B.Ar(D.aVy,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cZa,D.cP8,D.cPu,D.cRB)
D.awu=w([D.h2R,D.h2Q,D.h2S,D.h2U,D.h2P,D.h2T],C.ax("O<Ar>"))
D.eGA=new C.bk("skin","Skin",A.al8)
D.eHY=new C.bk("muscle","Muscles",A.Nt)
D.eHG=new C.bk("organ","Organs",A.i3)
D.bDq=new C.a0(62747,"MaterialIcons",!1)
D.eHM=new C.bk("bone","Skeleton",D.bDq)
D.eI3=new C.bk("vessel","Blood vessels",A.q7)
D.cZI=w([D.eGA,D.eHY,D.eHG,D.eHM,D.eI3],x.c)
D.eME=new B.uM("Simple legs","Light. Land gently.",0.15,0.2)
D.eMG=new B.uM("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eMJ=new B.uM("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Cb=w([D.eME,D.eMG,D.eMJ],x._)
D.d0m=w([1.77,3.55,7.15,16.7],x.n)
D.d2O=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.eCa=new C.z("spiral","Spiral")
D.el9=new C.z("barred","Barred spiral")
D.ewx=new C.z("elliptical","Elliptical")
D.d3t=w([D.eCa,D.el9,D.ewx],x.K)
D.eIK=new C.cA(["beat",0.18,0.28,0])
D.eJR=new C.cA(["burst",0.7,0.2,0])
D.eK1=new C.cA(["delay",0.45,0.5,1])
D.eJB=new C.cA(["ripple",0.75,0.6,3])
D.cUM=w([D.eIK,D.eJR,D.eK1,D.eJB],x.e)
D.d4j=w([N.la,M.Is,F.Sv],x.u)
D.h25=new B.FI("First spark","A clock lights a burst and a ripple",D.cUM,D.d4j)
D.eJi=new C.cA(["beat",0.15,0.3,1])
D.eIo=new C.cA(["ripple",0.62,0.15,0])
D.eJY=new C.cA(["delay",0.4,0.45,0])
D.eIZ=new C.cA(["ripple",0.7,0.45,0])
D.eIG=new C.cA(["delay",0.4,0.7,1])
D.eJD=new C.cA(["shake",0.75,0.75,0])
D.dgR=w([D.eJi,D.eIo,D.eJY,D.eIZ,D.eIG,D.eJD],x.e)
D.eid=new C.z(2,4)
D.aM2=new C.z(4,5)
D.cY7=w([N.la,M.Is,F.Sv,D.eid,D.aM2],x.u)
D.h27=new B.FI("Heartbeat","Two thumps, then a shake",D.dgR,D.cY7)
D.eIP=new C.cA(["dice",0.15,0.7,1])
D.eK3=new C.cA(["echo",0.4,0.7,0])
D.eIX=new C.cA(["comet",0.7,0.5,4])
D.eJS=new C.cA(["burst",0.72,0.2,1])
D.eJg=new C.cA(["burst",0.3,0.25,0])
D.eIQ=new C.cA(["pop",0.55,0.85,0])
D.ci2=w([D.eIP,D.eK3,D.eIX,D.eJS,D.eJg,D.eIQ],x.e)
D.ehD=new C.z(1,3)
D.ehE=new C.z(1,4)
D.aM_=new C.z(0,5)
D.d5z=w([N.la,W.uC,D.ehD,D.ehE,D.aM_],x.u)
D.h26=new B.FI("Fireworks","Dice launch comets that burst in colour",D.ci2,D.d5z)
D.eIU=new C.cA(["beat",0.15,0.2,2])
D.eJq=new C.cA(["chance",0.4,0.2,0])
D.eIM=new C.cA(["ball",0.7,0.12,3])
D.eIz=new C.cA(["chance",0.4,0.5,1])
D.eK2=new C.cA(["ball",0.3,0.08,1])
D.eIs=new C.cA(["ripple",0.7,0.55,3])
D.cb4=w([D.eIU,D.eJq,D.eIM,D.eIz,D.eK2,D.eIs],x.e)
D.eie=new C.z(2,5)
D.cyb=w([N.la,W.uC,M.a64,F.Sw,D.eie],x.u)
D.h24=new B.FI("Rain","Balls fall at random and splash",D.cb4,D.cyb)
D.eJr=new C.cA(["beat",0.12,0.45,2])
D.eJT=new C.cA(["toggle",0.38,0.2,0])
D.eK_=new C.cA(["wash",0.7,0.15,4])
D.eIO=new C.cA(["count3",0.38,0.45,0])
D.eJV=new C.cA(["burst",0.72,0.4,0])
D.eJh=new C.cA(["light",0.55,0.7,1])
D.eIA=new C.cA(["pop",0.8,0.8,4])
D.d89=w([D.eJr,D.eJT,D.eK_,D.eIO,D.eJV,D.eJh,D.eIA],x.e)
D.eiH=new C.z(3,6)
D.cec=w([N.la,W.uC,M.a64,F.Sw,D.aM_,D.eiH],x.u)
D.h22=new B.FI("Disco","A beat drives lights, washes and bursts",D.d89,D.cec)
D.eK6=new C.cA(["button",0.12,0.2,0])
D.eIu=new C.cA(["delay",0.34,0.2,1])
D.eK5=new C.cA(["light",0.56,0.2,1])
D.eJZ=new C.cA(["delay",0.56,0.45,1])
D.eJs=new C.cA(["ball",0.34,0.6,0])
D.eIy=new C.cA(["delay",0.34,0.8,1])
D.eIn=new C.cA(["burst",0.7,0.8,5])
D.bZj=w([D.eK6,D.eIu,D.eK5,D.eJZ,D.eJs,D.eIy,D.eIn],x.e)
D.ekN=new C.z(5,6)
D.ddf=w([N.la,W.uC,F.Sv,F.Sw,D.aM2,D.ekN],x.u)
D.h23=new B.FI("Domino","Tap the button and watch it run down the line",D.bZj,D.ddf)
D.awP=w([D.h25,D.h27,D.h26,D.h24,D.h22,D.h23],C.ax("O<FI>"))
D.d3B=w([0.05,0.15,0.25],x.n)
D.d3P=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.d4u=w([1.5,3,4.5,9,12],x.n)
D.eFd=new C.bk("dice","Dice",A.mv)
D.eGh=new C.bk("coin","Coin",K.ye)
D.eHZ=new C.bk("num","Number",A.yn)
D.d4E=w([D.eFd,D.eGh,D.eHZ],x.c)
D.d4H=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fFs=new B.OX("Moon",1.62,0,4291941851)
D.fFt=new B.OX("Mars",3.71,0.01,4294472049)
D.fFu=new B.OX("Earth",9.81,1,4281908728)
D.fFw=new B.OX("Jupiter",24.79,1.4,4294677052)
D.fFv=new B.OX("Sun",274,2,4294688548)
D.yN=w([D.fFs,D.fFt,D.fFu,D.fFw,D.fFv],C.ax("O<OX>"))
D.awV=w([A.c9,A.aM,A.b2,A.aP,A.bu,A.bX,A.cs,A.hw],x.O)
D.e2p={H:0}
D.dne=new C.bl(D.e2p,[2],x.I)
D.doN=new B.te("Hydrogen","H\u2082",D.dne,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.e2q={H:0,Cl:1}
D.dnr=new C.bl(D.e2q,[1,1],x.I)
D.doP=new B.te("Hydrogen chloride","HCl",D.dnr,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.e2r={H:0,O:1}
D.dmX=new C.bl(D.e2r,[2,1],x.I)
D.doQ=new B.te("Water","H\u2082O",D.dmX,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.e2E={N:0,H:1}
D.dnO=new C.bl(D.e2E,[1,3],x.I)
D.doY=new B.te("Ammonia","NH\u2083",D.dnO,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a5d={C:0,H:1}
D.dnI=new C.bl(D.a5d,[1,4],x.I)
D.doR=new B.te("Methane","CH\u2084",D.dnI,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.e2s={H:0,S:1}
D.dm4=new C.bl(D.e2s,[2,1],x.I)
D.doX=new B.te("Hydrogen sulfide","H\u2082S",D.dm4,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.e2J={O:0}
D.dnM=new C.bl(D.e2J,[2],x.I)
D.doZ=new B.te("Oxygen","O\u2082",D.dnM,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.e2D={N:0}
D.dnf=new C.bl(D.e2D,[2],x.I)
D.doO=new B.te("Nitrogen","N\u2082",D.dnf,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.e2d={C:0,O:1}
D.dnU=new C.bl(D.e2d,[1,2],x.I)
D.doV=new B.te("Carbon dioxide","CO\u2082",D.dnU,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aGj={C:0,H:1,O:2}
D.dlQ=new C.bl(D.aGj,[1,2,1],x.I)
D.doW=new B.te("Formaldehyde","CH\u2082O",D.dlQ,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.dnH=new C.bl(D.a5d,[2,4],x.I)
D.doT=new B.te("Ethene","C\u2082H\u2084",D.dnH,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.dnG=new C.bl(D.a5d,[2,6],x.I)
D.doS=new B.te("Ethane","C\u2082H\u2086",D.dnG,"Two carbons joined by a single bond, each holding three hydrogens.")
D.dlR=new C.bl(D.aGj,[1,4,1],x.I)
D.doU=new B.te("Methanol","CH\u2083OH",D.dlR,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a2H=w([D.doN,D.doP,D.doQ,D.doY,D.doR,D.doX,D.doZ,D.doO,D.doV,D.doW,D.doT,D.doS,D.doU],C.ax("O<te>"))
D.d5F=w([A.bX,A.aP,A.dQ,A.b2],x.O)
D.d6z=w([],x.h)
D.d6D=w([],x.B)
D.a2Q=w([],x.F)
D.ea3=new B.eb("battery","Battery","\ud83d\udd0b",A.b2,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.ea9=new B.eb("solar","Solar panel","\u2600\ufe0f",A.bN,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eaO=new B.eb("crank","Hand crank","\ud83d\udd04",A.cs,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eaq=new B.eb("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aP,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.e9W=new B.eb("buck","Step-down converter","\ud83d\udd3d",A.hw,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eao=new B.eb("regulator","5 V regulator","\ud83e\uddca",A.bJ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eaT=new B.eb("diode","Diode","\u27a1\ufe0f",A.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eaA=new B.eb("ldr","Light sensor","\ud83c\udf1e",A.dQ,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eae=new B.eb("switch","Switch","\ud83c\udf9a\ufe0f",A.bu,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eaQ=new B.eb("fuse","Fuse","\ud83e\uddef",A.c9,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.e9O=new B.eb("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hw,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eaB=new B.eb("resistor","Resistor","\u3030\ufe0f",A.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eaD=new B.eb("bulb","Light bulb","\ud83d\udca1",A.dQ,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eab=new B.eb("led","LED","\ud83d\udd34",A.ay,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eaf=new B.eb("motor","Motor","\u2699\ufe0f",A.bJ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eax=new B.eb("buzzer","Buzzer","\ud83d\udd14",A.bX,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.ea4=new B.eb("heater","Heater","\ud83d\udd25",A.cs,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eas=new B.eb("capacitor","Capacitor","\ud83e\udeab",A.cn,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eak=new B.eb("radio","Radio","\ud83d\udcfb",A.nT,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eah=new B.eb("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b8,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.e9V=new B.eb("voltmeter","Voltmeter","\ud83e\udded",A.bv,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.ea1=new B.eb("ammeter","Ammeter","\ud83d\udcdf",A.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.ea7=new B.eb("fan","Fan","\ud83c\udf00",A.aP,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eaV=new B.eb("speaker","Speaker","\ud83d\udd0a",A.bX,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eaK=new B.eb("clock","Digital clock","\u23f0",A.b2,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.ean=new B.eb("calculator","Calculator","\ud83e\uddee",A.KB,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.ea0=new B.eb("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cn,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eaU=new B.eb("router","WiFi router","\ud83d\udcf6",A.hw,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eaX=new B.eb("siren","Siren","\ud83d\udea8",A.ay,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.e9R=new B.eb("toycar","Toy car","\ud83d\ude97",A.cs,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eaY=new B.eb("kettle","Kettle","\ud83e\uded6",A.mk,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.e9Z=new B.eb("lamp","Desk lamp","\ud83e\ude94",A.dQ,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eaa=new B.eb("lights","Party lights","\ud83c\udf84",A.nT,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eal=new B.eb("fridge","Fridge","\ud83e\uddca",A.fU,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.e9T=new B.eb("washer","Washing machine","\ud83e\udee7",A.cn,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eaL=new B.eb("blender","Blender","\ud83e\udd64",A.c9,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eai=new B.eb("drone","Drone","\ud83d\ude81",A.bJ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.e9Y=new B.eb("drill","Power drill","\ud83d\udd29",A.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eam=new B.eb("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eaI=new B.eb("neon","Neon sign","\ud83e\udea7",A.bX,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.e9U=new B.eb("microwave","Microwave","\ud83c\udf72",A.cs,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eaC=new B.eb("doorbell","Doorbell","\ud83d\udd14",A.bN,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.ea6=new B.eb("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eaw=new B.eb("console","Game console","\ud83c\udfae",A.bu,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eaN=new B.eb("heartmon","Heart monitor","\ud83e\ude7a",A.h3,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.e9S=new B.eb("aquarium","Aquarium","\ud83d\udc20",A.b8,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.ear=new B.eb("lighthouse","Lighthouse","\ud83d\uddfc",A.dQ,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eaz=new B.eb("discoball","Disco ball","\ud83e\udea9",A.nT,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eaS=new B.eb("robot","Robot","\ud83e\udd16",A.aP,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.e9Q=new B.eb("toaster","Toaster","\ud83c\udf5e",A.dU,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eaW=new B.eb("ledstrip","LED strip","\ud83c\udf08",A.bX,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eaH=new B.eb("pump","Water pump","\ud83d\udeb0",A.aP,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eat=new B.eb("hairdryer","Hair dryer","\ud83d\udca8",A.jd,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eaF=new B.eb("headphones","Headphones","\ud83c\udfa7",A.bu,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.ea_=new B.eb("smartwatch","Apple Watch Ultra","\u231a",A.bv,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eaR=new B.eb("tablet","iPad Pro M5","\ud83d\udcf2",A.cn,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.e9N=new B.eb("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h3,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eaj=new B.eb("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bs,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eac=new B.eb("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eay=new B.eb("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.th,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.e9P=new B.eb("iphonefold","iPhone Fold","\ud83d\udcf1",A.b6,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.ea2=new B.eb("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d3,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eaP=new B.eb("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cB,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eau=new B.eb("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bi,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eap=new B.eb("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cg,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eaG=new B.eb("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ay,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.ead=new B.eb("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b2,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eav=new B.eb("honor","Honor Magic V5","\ud83d\udcf1",A.cn,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eaE=new B.eb("vivo","vivo X300 Pro","\ud83d\udcf1",A.cs,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eaJ=new B.eb("ereader","Kindle Scribe","\ud83d\udcd6",A.bs,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.e9M=new B.eb("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ce,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eag=new B.eb("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cB,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.ea8=new B.eb("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b8,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.e9X=new B.eb("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dQ,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.ea5=new B.eb("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ay,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eaM=new B.eb("vision","Apple Vision Pro","\ud83e\udd7d",A.bu,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Qp=w([D.ea3,D.ea9,D.eaO,D.eaq,D.e9W,D.eao,D.eaT,D.eaA,D.eae,D.eaQ,D.e9O,D.eaB,D.eaD,D.eab,D.eaf,D.eax,D.ea4,D.eas,D.eak,D.eah,D.e9V,D.ea1,D.ea7,D.eaV,D.eaK,D.ean,D.ea0,D.eaU,D.eaX,D.e9R,D.eaY,D.e9Z,D.eaa,D.eal,D.e9T,D.eaL,D.eai,D.e9Y,D.eam,D.eaI,D.e9U,D.eaC,D.ea6,D.eaw,D.eaN,D.e9S,D.ear,D.eaz,D.eaS,D.e9Q,D.eaW,D.eaH,D.eat,D.eaF,D.ea_,D.eaR,D.e9N,D.eaj,D.eac,D.eay,D.e9P,D.ea2,D.eaP,D.eau,D.eap,D.eaG,D.ead,D.eav,D.eaE,D.eaJ,D.e9M,D.eag,D.ea8,D.e9X,D.ea5,D.eaM],C.ax("O<eb>"))
D.d6Z=w([0,0.46,0.82],x.n)
D.d79=w([5,10,15,25,45,60],x.t)
D.d7t=w([-0.045,0.03,-0.015],x.n)
D.d7R=w([0.9,0.97,1],x.n)
D.axm=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.uf=w([0.05,0.2,0.35],x.n)
D.cPy=w([D.EP,D.EP],x.O)
D.cUI=w([A.EZ,A.M],x.O)
D.cTL=w([A.fl,A.hl],x.O)
D.cNG=w([A.f0,A.nS],x.O)
D.caB=w([A.lI,A.dx],x.O)
D.axn=w([D.cPy,D.cUI,D.cTL,D.cNG,D.caB],x.Q)
D.fFg=new B.v0("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fFh=new B.v0("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fF8=new B.v0("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fFf=new B.v0("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fFd=new B.v0("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fF9=new B.v0("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fFe=new B.v0("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fFa=new B.v0("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fFc=new B.v0("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fFb=new B.v0("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.Cj=w([D.fFg,D.fFh,D.fF8,D.fFf,D.fFd,D.fF9,D.fFe,D.fFa,D.fFc,D.fFb],C.ax("O<v0>"))
D.bfo=new C.v(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.d94=w([D.EP,D.bfo,D.adJ,A.add],x.O)
D.b1k=new C.ac(0,A.G,A.hL,A.dE,6)
D.d9Z=w([D.b1k],x.V)
D.egT=new C.z(0,"AND")
D.ehF=new C.z(1,"Adder")
D.eif=new C.z(2,"Blinker")
D.eiI=new C.z(3,"Memory")
D.daJ=w([D.egT,D.ehF,D.eif,D.eiI],x.E)
D.axz=w([-104,0,104],x.n)
D.axA=w([-14,3],x.n)
D.dbd=w([-16,16],x.n)
D.dbt=w([-8,0,8],x.n)
D.axH=w([-92,0,92],x.n)
D.dbQ=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eMB=new B.uM("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eMI=new B.uM("Medium tank","Balanced.",0.35,1)
D.eMH=new B.uM("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.QC=w([D.eMB,D.eMI,D.eMH],x._)
D.nq=w([0.04,0.2,0.36],x.n)
D.axR=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eHF=new C.bk(D.aVv,"Fold",K.am4)
D.eGP=new C.bk(D.a9F,"Flip",A.G6)
D.bDJ=new C.a0(62889,"MaterialIcons",!1)
D.eHX=new C.bk(D.aVw,"Rise",D.bDJ)
D.ami=new C.a0(983870,"MaterialIcons",!1)
D.eEJ=new C.bk(D.a9G,"Assemble",D.ami)
D.eEU=new C.bk(D.aVx,"Spin",D.akB)
D.eER=new C.bk(D.aVy,"Pop",A.lm)
D.ddc=w([D.eHF,D.eGP,D.eHX,D.eEJ,D.eEU,D.eER],C.ax("O<+(Kd,n,a0)>"))
D.axW=w([A.bX,A.dQ,A.bv,A.aP,A.bu,A.c9],x.O)
D.ddp=w([A.aP,A.cs,A.cs,A.b2],x.O)
D.ddC=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.eDF=new C.z("Make the output turn HALF as fast as the input.",0.5)
D.eop=new C.z("Make the output turn TWICE as fast.",2)
D.ehP=new C.z("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.eCk=new C.z("Make the output turn 4 times faster.",4)
D.eu0=new C.z("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.ex8=new C.z("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.evD=new C.z("Make the output turn 3 times faster.",3)
D.ewo=new C.z("Make the output spin at the same speed as the input, using four different gears.",1)
D.ay0=w([D.eDF,D.eop,D.ehP,D.eCk,D.eu0,D.ex8,D.evD,D.ewo],C.ax("O<+(n,L)>"))
D.dez=w([3,4.5,5,6,9],x.n)
D.b1T=new C.ac(0,A.G,A.aW,A.J,16)
D.df1=w([D.b1T],x.V)
D.QF=w([A.bX,A.bN,A.b2,A.aP,A.bu,A.c9,A.c,A.cs],x.O)
D.dfu=w(["solar","turbine","crank","pot"],x.s)
D.dfP=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.dfV=w([0,0.35,0.75,1],x.n)
D.eF6=new C.bk("drop","Drop",D.alV)
D.eF8=new C.bk("weight","Weight",U.amm)
D.eHS=new C.bk("cannon","Newton's cannon",A.alk)
D.dgy=w([D.eF6,D.eF8,D.eHS],x.c)
D.eAZ=new C.z("piano","Piano")
D.eAF=new C.z("organ","Organ")
D.evk=new C.z("bell","Bell")
D.eB0=new C.z("pluck","Pluck")
D.eCj=new C.z("synth","Synth")
D.ex3=new C.z("flute","Flute")
D.ayh=w([D.eAZ,D.eAF,D.evk,D.eB0,D.eCj,D.ex3],x.K)
D.dh4=w(["volts","level","ohms","on"],x.s)
D.dio=w([A.jr,A.BL,A.Bz,A.q1,A1.Gu,A.u5,A.yl,A.q5,A.hP,A.nm,A.ha,A.dX,A.i3,A.i4,A.mw,A.lT,A.vP,A.rl,A.lU,A.FY,A.u4,A.G5,A.BB,A.alQ,A.Nl,A.yh,A.Nt,A.alu,T.ame,A.lm],x.w)
D.dji=w([0.72,1],x.n)
D.dju=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.e3X={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dlK=new C.bl(D.e3X,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aGl={A:0,T:1,C:2,G:3}
D.a3O=new C.bl(D.aGl,["U","A","G","C"],x.l)
D.dlS=new C.bl(D.aGl,["T","A","G","C"],x.l)
D.e2A={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.d5J=w([0,2,4,5,7,9,11],x.t)
D.cOP=w([0,2,3,5,7,8,10],x.t)
D.daV=w([0,3,5,6,7,10],x.t)
D.Cp=new C.bl(D.e2A,[D.awd,D.d5J,D.cOP,D.daV,D.aoQ],C.ax("bl<n,ai<G>>"))
D.e3L={A:0,T:1,U:2,C:3,G:4}
D.dm7=new C.bl(D.e3L,[A.c9,A.cn,A.cn,A.aM,A.b2],C.ax("bl<n,v>"))
D.e1W={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.fWN=new B.xZ("Switch",F.NT,A.bN,0,"Tap it to turn it ON or OFF.")
D.fWJ=new B.xZ("Blinker",A.oT,A.bv,0,"Turns itself ON and OFF. Tap to change the speed.")
D.fWK=new B.xZ("AND",D.ami,A.cn,2,"ON only when BOTH inputs are ON.")
D.bFd=new C.a0(63671,"MaterialIcons",!1)
D.fWI=new B.xZ("OR",D.bFd,A.bu,2,"ON when EITHER input is ON.")
D.fWL=new B.xZ("XOR",G.a_M,A.bX,2,"ON when the inputs are DIFFERENT.")
D.fWF=new B.xZ("NAND",A.tU,A.aP,2,"OFF only when BOTH inputs are ON.")
D.bEj=new C.a0(63176,"MaterialIcons",!1)
D.fWG=new B.xZ("NOR",D.bEj,A.hw,2,"ON only when BOTH inputs are OFF.")
D.fWH=new B.xZ("NOT",A_.BM,A.cs,1,"Flips the signal: ON becomes OFF.")
D.fWM=new B.xZ("Light",A.rg,A.dQ,1,"Glows when its input is ON.")
D.fWO=new B.xZ("Buzzer",A.o5,A.c9,1,"Beeps while its input is ON.")
D.z_=new C.bl(D.e1W,[D.fWN,D.fWJ,D.fWK,D.fWI,D.fWL,D.fWF,D.fWG,D.fWH,D.fWM,D.fWO],C.ax("bl<n,xZ>"))
D.e3I={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eFz=new C.bk(3,20,1.9)
D.eF1=new C.bk(33,90,1.6)
D.eIg=new C.bk(52,15,3.2)
D.eIe=new C.bk(45,-100,1.8)
D.eGJ=new C.bk(-15,-60,1.9)
D.eGc=new C.bk(-25,140,2.4)
D.eG3=new C.bk(-82,0,2.2)
D.aDJ=new C.bl(D.e3I,[D.eFz,D.eF1,D.eIg,D.eIe,D.eGJ,D.eGc,D.eG3],C.ax("bl<n,+(L,L,L)>"))
D.cOd=w([A.A],x.M)
D.cOx=w([A.ax,A.aC],x.M)
D.cXd=w([A.ax,A.A,A.aC],x.M)
D.cYF=w([A.ax,A.ld,A.A,A.lC,A.aC],x.M)
D.daF=w([A.ax,A.ld,A.a3,A.a8,A.lC,A.aC],x.M)
D.dn3=new C.dT([1,D.cOd,2,D.cOx,3,D.cXd,4,A.aym,5,D.cYF,6,D.daF],C.ax("dT<G,ai<dc>>"))
D.e2B={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.eGV=new C.bk(1,A.bP,"Hydrogen")
D.eFO=new C.bk(4,A.bl,"Carbon")
D.eEL=new C.bk(3,A.d3,"Nitrogen")
D.eHe=new C.bk(2,A.ay,"Oxygen")
D.eGC=new C.bk(2,A.bN,"Sulfur")
D.eHP=new C.bk(1,A.bi,"Chlorine")
D.w4=new C.bl(D.e2B,[D.eGV,D.eFO,D.eEL,D.eHe,D.eGC,D.eHP],C.ax("bl<n,+(G,v,n)>"))
D.e45={Calm:0,Box:1,Sleep:2}
D.cvF=w([4,2,6,0],x.n)
D.cvM=w([4,4,4,4],x.n)
D.cvN=w([4,7,8,0],x.n)
D.R3=new C.bl(D.e45,[D.cvF,D.cvM,D.cvN],C.ax("bl<n,ai<L>>"))
D.e25={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wJ=new B.a00(0,"source")
D.cYa=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.h0J=new B.q2("Clock",A.oT,D.wJ,A.bv,D.cYa)
D.h0F=new B.q2("Button",A.yp,D.wJ,A.aM,A.T)
D.deL=w(["random","quick","slow"],x.s)
D.h0Q=new B.q2("Dice",A.mv,D.wJ,A.bX,D.deL)
D.bES=new C.a0(63484,"MaterialIcons",!1)
D.DP=new B.a00(1,"logic")
D.djd=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.h0M=new B.q2("Delay",D.bES,D.DP,A.cn,D.djd)
D.d7g=w(["fast","mid","slow"],x.s)
D.h0R=new B.q2("Echo",A.alK,D.DP,A.bu,D.d7g)
D.h0O=new B.q2("Every 2nd",A_.BM,D.DP,A.hw,A.T)
D.bEx=new C.a0(63309,"MaterialIcons",!1)
D.h0L=new B.q2("Every 3rd",D.bEx,D.DP,A.aP,A.T)
D.bGw=new C.a0(983902,"MaterialIcons",!1)
D.bYJ=w(["50%","25%","75%"],x.s)
D.h0T=new B.q2("Chance",D.bGw,D.DP,A.cs,D.bYJ)
D.qC=new B.a00(2,"out")
D.h0H=new B.q2("Light",A.rg,D.qC,A.dQ,A.T)
D.h0I=new B.q2("Burst",A.lm,D.qC,A.bX,A.T)
D.h0G=new B.q2("Ripple",A.yt,D.qC,A.b8,A.T)
D.h0P=new B.q2("Ball",A.alX,D.qC,A.cs,A.T)
D.h0N=new B.q2("Comet",A.nm,D.qC,A.bu,A.T)
D.bGg=new C.a0(983669,"MaterialIcons",!1)
D.h0S=new B.q2("Shake",D.bGg,D.qC,A.c9,A.T)
D.h0U=new B.q2("Pop",A.FZ,D.qC,A.b2,A.T)
D.h0K=new B.q2("Wash",A.Nx,D.qC,A.py,A.T)
D.mG=new C.bl(D.e25,[D.h0J,D.h0F,D.h0Q,D.h0M,D.h0R,D.h0O,D.h0L,D.h0T,D.h0H,D.h0I,D.h0G,D.h0P,D.h0N,D.h0S,D.h0U,D.h0K],C.ax("bl<n,q2>"))
D.e3M={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.Cq=new C.bl(D.e3M,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.e2j={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.zr=new B.J9(0,"tv")
D.eO8=new B.m6("Samsung Neo QLED 8K",D.zr,F.EC,A.aP)
D.eO_=new B.m6("LG OLED evo G5",D.zr,A.ea,A.h3)
D.eNR=new B.m6("Sony Bravia 9",D.zr,A.qN,A.bs)
D.eNV=new B.m6("Apple TV 4K",D.zr,A.e2,A.bP)
D.eNS=new B.m6("Bang and Olufsen Beovision",D.zr,F.Ek,F.th)
D.Ix=new B.J9(1,"iphone")
D.aMJ=new B.m6("iPhone 18 Pro Max",D.Ix,D.afW,A.ce)
D.wh=new B.J9(3,"fold")
D.blr=new C.v(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eO4=new B.m6("iPhone Fold",D.wh,D.blr,A.b6)
D.uF=new B.J9(2,"android")
D.eO5=new B.m6("Samsung Galaxy S26 Ultra",D.uF,F.ac6,A.d3)
D.beW=new C.v(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eNY=new B.m6("Samsung Galaxy Z Fold7",D.wh,D.beW,A.cB)
D.eNU=new B.m6("Google Pixel 10 Pro XL",D.uF,A.dy,A.bi)
D.eO1=new B.m6("Xiaomi 16 Ultra",D.uF,A.lM,A.cg)
D.eNX=new B.m6("Huawei Mate 80 Pro Max",D.uF,A.eQ,A.ay)
D.eNT=new B.m6("OPPO Find X9 Ultra",D.uF,A.dZ,A.b2)
D.eOa=new B.m6("Honor Magic V5",D.wh,A.di,A.cn)
D.eNZ=new B.m6("vivo X300 Pro",D.uF,A.hl,A.cs)
D.SE=new B.J9(4,"tablet")
D.eO3=new B.m6("iPad Pro M5",D.SE,A.dy,A.aP)
D.a6l=new B.J9(5,"reader")
D.eOb=new B.m6("Kindle Scribe",D.a6l,A.ee,A.bs)
D.zs=new B.J9(6,"computer")
D.eO2=new B.m6("MacBook Pro M5 Max",D.zs,A.dy,A.ce)
D.eO7=new B.m6("iMac 32 inch",D.zs,A.bP,A.cB)
D.eO0=new B.m6("Pro Display XDR 8K",D.zs,A.lM,A.b8)
D.eNW=new B.m6("Sony Laser Projector",D.zs,A.cu,A.dQ)
D.eO6=new B.m6("Luxury car touchscreen",D.zs,L.ml,A.ay)
D.eO9=new B.m6("Apple Vision Pro",D.zs,A.ji,A.bu)
D.m0=new C.bl(D.e2j,[D.eO8,D.eO_,D.eNR,D.eNV,D.eNS,D.aMJ,D.eO4,D.eO5,D.eNY,D.eNU,D.eO1,D.eNX,D.eNT,D.eOa,D.eNZ,D.eO3,D.eOb,D.eO2,D.eO7,D.eO0,D.eNW,D.eO6,D.eO9],C.ax("bl<n,m6>"))
D.e2v={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bo5=new B.fN(20,4,13,!1)
D.bow=new B.fN(14,5,13.5,!1)
D.bon=new B.fN(9,2.4,10,!1)
D.boB=new B.fN(7,5,12.5,!1)
D.boq=new B.fN(8,3.5,12,!1)
D.bo1=new B.fN(15,2,6,!1)
D.boz=new B.fN(45,6,13.5,!0)
D.boh=new B.fN(10,8,13.5,!1)
D.bo9=new B.fN(25,3,12,!0)
D.bof=new B.fN(35,4,12,!0)
D.bog=new B.fN(40,4.5,9.5,!0)
D.boi=new B.fN(55,3,9,!0)
D.bo2=new B.fN(18,3,9,!1)
D.boy=new B.fN(22,4,13.5,!1)
D.bor=new B.fN(16,5,13.5,!1)
D.bod=new B.fN(30,4,9,!0)
D.boK=new B.fN(5,3.5,13,!1)
D.bol=new B.fN(25,3,13.5,!0)
D.bou=new B.fN(14,2.5,9,!1)
D.bok=new B.fN(6,6,13,!1)
D.boC=new B.fN(30,1.2,5,!0)
D.boJ=new B.fN(35,3,4.5,!0)
D.boF=new B.fN(20,4.5,7.5,!0)
D.boj=new B.fN(55,5.5,13.5,!0)
D.bo0=new B.fN(45,5.5,13.5,!0)
D.bov=new B.fN(40,5.5,13.5,!0)
D.boI=new B.fN(60,6,13.5,!0)
D.ago=new B.fN(28,4,7,!0)
D.Fb=new B.fN(25,4,7,!0)
D.boc=new B.fN(30,4,7,!0)
D.bo7=new B.fN(22,4,7,!0)
D.bo8=new B.fN(24,4,7,!0)
D.bom=new B.fN(60,3,5.5,!0)
D.bo3=new B.fN(18,9,14,!0)
D.boa=new B.fN(25,9,14,!0)
D.agp=new B.fN(30,8,14,!0)
D.bo6=new B.fN(20,8,14,!0)
D.boe=new B.fN(30,9,14,!0)
D.boD=new B.fN(22,5,9.5,!0)
D.bo4=new B.fN(30,2.5,10.5,!0)
D.bos=new B.fN(50,5.5,13.5,!0)
D.boH=new B.fN(12,2,9.5,!1)
D.bop=new B.fN(16,1.3,9.5,!0)
D.boA=new B.fN(40,2.5,7,!0)
D.boG=new B.fN(60,1.2,4.8,!0)
D.boE=new B.fN(18,5,13.5,!0)
D.box=new B.fN(8,2,9.5,!1)
D.boo=new B.fN(12,2.5,8,!1)
D.bob=new B.fN(20,3.5,13.5,!0)
D.bot=new B.fN(3.5,3,13,!1)
D.z0=new C.bl(D.e2v,[D.bo5,D.bow,D.bon,D.boB,D.boq,D.bo1,D.boz,D.boh,D.bo9,D.bof,D.bog,D.boi,D.bo2,D.boy,D.bor,D.bod,D.boK,D.bol,D.bou,D.bok,D.boC,D.boJ,D.boF,D.boj,D.bo0,D.bov,D.boI,D.ago,D.Fb,D.boc,D.Fb,D.bo7,D.Fb,D.bo8,D.ago,D.Fb,D.bom,D.bo3,D.boa,D.agp,D.bo6,D.boe,D.boD,D.bo4,D.bos,D.boH,D.bop,D.boA,D.boG,D.Fb,D.agp,D.boE,D.box,D.boo,D.bob,D.bot],C.ax("bl<n,fN>"))
D.e24={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eEf=new C.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.ekK=new C.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.ekF=new C.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.ewn=new C.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.exk=new C.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.ewj=new C.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eiN=new C.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.euj=new C.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eEn=new C.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.exE=new C.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.enO=new C.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eiv=new C.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.emS=new C.z("Movement","They pull your legs together and help you balance.")
D.eoJ=new C.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.ekT=new C.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eBV=new C.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eCX=new C.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eu1=new C.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eCI=new C.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.esK=new C.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.exN=new C.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eiC=new C.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.ep5=new C.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.ext=new C.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.et3=new C.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eCQ=new C.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.evP=new C.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eiL=new C.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eyl=new C.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eBy=new C.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.ezP=new C.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eh3=new C.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.evx=new C.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.evB=new C.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.epM=new C.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.el5=new C.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eoy=new C.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eut=new C.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eAy=new C.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eEk=new C.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.exK=new C.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.egO=new C.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.euE=new C.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.ehy=new C.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eAO=new C.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eBR=new C.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.ev3=new C.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eB2=new C.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eiE=new C.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eCm=new C.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.emh=new C.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eAd=new C.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eps=new C.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.esZ=new C.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.ey3=new C.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eCx=new C.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eCo=new C.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eCt=new C.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.ets=new C.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eyR=new C.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.ezM=new C.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eCb=new C.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.ev2=new C.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.ern=new C.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eqb=new C.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.evs=new C.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.exX=new C.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.erT=new C.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.esy=new C.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.emD=new C.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eBN=new C.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.enp=new C.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.ehv=new C.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.epL=new C.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.ehq=new C.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.els=new C.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.epQ=new C.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eny=new C.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eyh=new C.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eoM=new C.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eE2=new C.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eqk=new C.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.etm=new C.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.evX=new C.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.enG=new C.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.enr=new C.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dod=new C.bl(D.e24,[D.eEf,D.ekK,D.ekF,D.ewn,D.exk,D.ewj,D.eiN,D.euj,D.eEn,D.exE,D.enO,D.eiv,D.emS,D.eoJ,D.ekT,D.eBV,D.eCX,D.eu1,D.eCI,D.esK,D.exN,D.eiC,D.ep5,D.ext,D.et3,D.eCQ,D.evP,D.eiL,D.eyl,D.eBy,D.ezP,D.eh3,D.evx,D.evB,D.epM,D.el5,D.eoy,D.eut,D.eAy,D.eEk,D.exK,D.egO,D.euE,D.ehy,D.eAO,D.eBR,D.ev3,D.eB2,D.eiE,D.eCm,D.emh,D.eAd,D.eps,D.esZ,D.ey3,D.eCx,D.eCo,D.eCt,D.ets,D.eyR,D.ezM,D.eCb,D.ev2,D.ern,D.eqb,D.evs,D.exX,D.erT,D.esy,D.emD,D.eBN,D.enp,D.ehv,D.epL,D.ehq,D.els,D.epQ,D.eny,D.eyh,D.eoM,D.eE2,D.eqk,D.etm,D.evX,D.enG,D.enr],C.ax("bl<n,+(n,n)>"))
D.dof=new C.hz(A.G,11)
D.dok=new C.hz(A.G,30)
D.drx=new B.TY(null)
D.dvl=new B.U1(null)
D.dvm=new B.U2(null)
D.dvz=new B.U3(null)
D.dxA=new B.U5(null)
D.dxB=new B.U6(null)
D.dxC=new B.U7(null)
D.dyp=new B.Ut(null)
D.dyr=new B.UI(null)
D.dys=new B.UJ(null)
D.dyu=new B.UK(null)
D.dz1=new B.UR(null)
D.dAX=new B.UV(null)
D.dAY=new B.UX(null)
D.dAZ=new B.UY(null)
D.dB0=new B.UZ(null)
D.dCB=new B.Vf(null)
D.dCD=new B.Vh(null)
D.dCI=new B.Vr(null)
D.dCT=new B.Vs(null)
D.dDo=new B.Vt(null)
D.dET=new B.Vv(null)
D.dGg=new B.Vx(null)
D.dGh=new B.Vy(null)
D.dHC=new B.VB(null)
D.dXv=new B.VC(null)
D.dXx=new B.VD(null)
D.dXy=new B.VG(null)
D.dXz=new B.VH(null)
D.dZs=new B.VP(null)
D.dZt=new B.VQ(null)
D.dZB=new B.VX(null)
D.dZK=new B.W0(null)
D.dZL=new B.W1(null)
D.dZM=new B.a7Z(null)
D.e_m=new B.W3(null)
D.e0P=new B.W7(null)
D.e4h=new C.u(0,118)
D.aGs=new C.u(0,13)
D.e4i=new C.u(0,17)
D.e4l=new C.u(0,330)
D.e4o=new C.u(0,-13)
D.aGy=new C.u(0,-14)
D.e4p=new C.u(0,-17)
D.e4q=new C.u(0,-18)
D.e4r=new C.u(0,-19)
D.e4s=new C.u(0,-20)
D.e4v=new C.u(0,-26)
D.e4w=new C.u(0,-28)
D.e4x=new C.u(0,-31)
D.e4y=new C.u(0,-32)
D.wb=new C.u(0,-6)
D.e4z=new C.u(0,-6771)
D.e4A=new C.u(0,-9)
D.e4C=new C.u(-9.5,-11)
D.e4D=new C.u(10,20)
D.e4F=new C.u(10,-13)
D.e4G=new C.u(10,-22)
D.e4H=new C.u(10,-4)
D.a5h=new C.u(11,8)
D.e4J=new C.u(12,2)
D.e4K=new C.u(14,0)
D.e4L=new C.u(14,12)
D.aGC=new C.u(14,8)
D.e4M=new C.u(14,-17)
D.e4N=new C.u(14,-18)
D.aGD=new C.u(14,-3)
D.aGE=new C.u(14,-4)
D.e4O=new C.u(15,0)
D.e4P=new C.u(15,-12)
D.e4Q=new C.u(16,-8)
D.e4R=new C.u(18,14)
D.e4S=new C.u(18,-12)
D.aGI=new C.u(20,0)
D.e4Y=new C.u(20,15)
D.e4Z=new C.u(20,-17)
D.e5_=new C.u(20,-3)
D.e50=new C.u(21,8)
D.e52=new C.u(22,10)
D.aGJ=new C.u(22,8)
D.e53=new C.u(24,0)
D.e54=new C.u(24,2)
D.e56=new C.u(24,-18)
D.e57=new C.u(24,-22)
D.e58=new C.u(25,8)
D.e59=new C.u(26,0)
D.e5f=new C.u(28,-30)
D.e5k=new C.u(30,18)
D.e5l=new C.u(30,2)
D.e5m=new C.u(31,19)
D.e5n=new C.u(32,0)
D.aGM=new C.u(34,0)
D.aGN=new C.u(34,-32)
D.I7=new C.u(36,0)
D.e5s=new C.u(3,-1)
D.e5v=new C.u(40,3)
D.e5z=new C.u(4,11)
D.e5C=new C.u(4,-2)
D.e5G=new C.u(5,0)
D.e5H=new C.u(5,17)
D.e5I=new C.u(5,6)
D.e5M=new C.u(6,11)
D.e5S=new C.u(8,7)
D.e5T=new C.u(8,-10)
D.e5U=new C.u(8,-14)
D.e5V=new C.u(8,-3)
D.aGR=new C.u(9,0)
D.e5Y=new C.u(-20.5,-17.6)
D.e5Z=new C.u(-9,18.5)
D.e61=new C.u(-2.6,-1)
D.e62=new C.u(1.9,-0.8)
D.e65=new C.u(-0.22,0.09)
D.e6a=new C.u(2.6,1)
D.e6h=new C.u(-9,12.2)
D.e6z=new C.u(-9,20.5)
D.e6R=new C.u(-10,0)
D.e6S=new C.u(-10,12)
D.aGY=new C.u(-10,4)
D.e6T=new C.u(-11,-2)
D.e6U=new C.u(-13,-5)
D.e6V=new C.u(-14,0)
D.e6W=new C.u(-14,13)
D.e6X=new C.u(-14,2)
D.e6Y=new C.u(-14,-12)
D.e6Z=new C.u(-14,-19)
D.e7_=new C.u(-14,-23)
D.e70=new C.u(-15,6)
D.e71=new C.u(-16,14)
D.e72=new C.u(-16,-8)
D.e73=new C.u(-17,10)
D.e74=new C.u(-17,-18)
D.e75=new C.u(-17,-8)
D.e77=new C.u(-18,20)
D.e78=new C.u(-18,-9)
D.aH_=new C.u(-20,0)
D.e7a=new C.u(-20,16)
D.e7b=new C.u(-20,-9)
D.S1=new C.u(-22,8)
D.e7c=new C.u(-22,-10)
D.e7d=new C.u(-22,-11)
D.e7e=new C.u(-24,10)
D.e7f=new C.u(-24,11)
D.e7g=new C.u(-24,14)
D.e7h=new C.u(-24,-22)
D.e7i=new C.u(-25,-11)
D.e7j=new C.u(-26,0)
D.e7k=new C.u(-26,-18)
D.e7l=new C.u(-2,9)
D.e7m=new C.u(-2,-10)
D.e7n=new C.u(-2,-20)
D.e7o=new C.u(-2,-9)
D.e7p=new C.u(-32,0)
D.aH1=new C.u(-34,0)
D.e7u=new C.u(-40,3)
D.e7w=new C.u(-4,11)
D.e7x=new C.u(-4,-17)
D.e7y=new C.u(-4,-2)
D.e7A=new C.u(-5,0)
D.e7B=new C.u(-5,20)
D.e7C=new C.u(-5,6)
D.e7D=new C.u(-6,26)
D.e7E=new C.u(-6,6)
D.e7F=new C.u(-6,-42)
D.e7G=new C.u(-7,-19)
D.e7H=new C.u(-7,-24)
D.e7I=new C.u(-8,-9)
D.a5l=new C.u(-9,0)
D.e7J=new C.u(-9,1)
D.e7K=new C.u(-9,-23)
D.fid=new C.y("Thinking\u2026",null,A.h2,null,null,null,null,null,null,null,null,null)
D.e8G=new C.D(A.jG,D.fid,null)
D.fyh=new C.y("Start from a ready-made board",null,A.fQ,null,null,null,null,null,null,null,null,null)
D.e8Q=new C.D(A8.vs,D.fyh,null)
D.bvR=new C.Q(4,0,4,14)
D.fdE=new C.H(!0,A.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj8=new C.y("Games and little helpers for a spare minute.",null,D.fdE,null,null,null,null,null,null,null,null,null)
D.e9_=new C.D(D.bvR,D.fj8,null)
D.fv4=new C.y("Tap to throw in a star",null,A.kI,null,null,null,null,null,null,null,null,null)
D.b52=new C.cp(A.A,null,null,D.fv4,null)
D.eeU=new C.cL(0,null,0,14,null,null,D.b52,null)
D.d7P=w([A.iA,A.bl],x.O)
D.aLT=new C.bT(A.A,0.5,A.x,null,0,D.d7P,null,null)
D.efC=new C.bT(A.A,0.5,A.x,null,0,D.ay9,null,null)
D.d_o=w([A.c,A.bJ],x.O)
D.efE=new C.bT(A.A,0.5,A.x,null,0,D.d_o,null,null)
D.efF=new C.bT(A.A,0.5,A.x,null,0,M.axe,null,null)
D.dfH=w([A.bP,A.ji],x.O)
D.aLU=new C.bT(A.A,0.5,A.x,null,0,D.dfH,null,null)
D.cFq=w([A.c,A.bP],x.O)
D.efJ=new C.bT(A.t0,0.5,A.x,null,0,D.cFq,null,null)
D.bcn=new C.v(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.bhH=new C.v(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.cZq=w([D.bcn,D.afv,D.bhH],x.O)
D.d5T=w([0,0.7,1],x.n)
D.efL=new C.bT(A.t0,0.5,A.x,null,0,D.cZq,D.d5T,null)
D.cvT=w([A.oG,A.aF,A.K],x.O)
D.dcu=w([0.3,0.7,1],x.n)
D.efN=new C.bT(A.A,0.5,A.x,null,0,D.cvT,D.dcu,null)
D.blv=new C.v(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.ddU=w([A.fc,D.blv],x.O)
D.efP=new C.bT(A.t0,0.5,A.x,null,0,D.ddU,null,null)
D.cyH=w([A.dy,A.cu],x.O)
D.efQ=new C.bT(A.A,0.5,A.x,null,0,D.cyH,null,null)
D.cUS=w([A.oG,A.aF,A.fl],x.O)
D.efR=new C.bT(A.A,0.5,A.x,null,0,D.cUS,null,null)
D.cNc=w([A.h5,A.aM,A.d5],x.O)
D.efT=new C.bT(A.t0,0.5,A.x,null,0,D.cNc,null,null)
D.d8n=w([A.ji,L.ml],x.O)
D.efU=new C.bT(A.t0,0.5,A.x,null,0,D.d8n,null,null)
D.bcB=new C.v(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.baB=new C.v(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cX5=w([D.bcB,D.baB],x.O)
D.efW=new C.bT(A.A,0.5,A.x,null,0,D.cX5,null,null)
D.bh5=new C.v(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.bf3=new C.v(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.bf7=new C.v(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.dhZ=w([D.bh5,D.bf3,D.bf7],x.O)
D.cTF=w([0,0.65,1],x.n)
D.efX=new C.bT(M.a9Q,0.5,A.x,null,0,D.dhZ,D.cTF,null)
D.efY=new C.bT(A.A,0.5,A.x,null,0,D.auD,null,null)
D.deU=w([A.lJ,A.aF,A.fl],x.O)
D.eg2=new C.bT(A.A,0.5,A.x,null,0,D.deU,null,null)
D.dgt=w([A.ji,A.hI],x.O)
D.eg5=new C.bT(A.A,0.5,A.x,null,0,D.dgt,null,null)
D.aLY=new C.aT(9,9)
D.ege=new C.aT(1.4,1.4)
D.egX=new C.z(0,-4)
D.eme=new C.z(0.22,4)
D.etk=new C.z(0.8,-4)
D.eCp=new C.z(0.58,4)
D.eFb=new C.bk("Moon",1.62,4291941851)
D.eFM=new C.bk("Neptune",11.15,4284524026)
D.eGp=new C.bk("Sun",274,4294688548)
D.eGF=new C.bk("Mercury",3.7,4288455599)
D.eGL=new C.bk("Earth",9.81,4281908728)
D.eGN=new C.bk("Mars",3.71,4294472049)
D.eH5=new C.bk("Venus",8.87,4294759245)
D.eHb=new C.bk("Saturn",10.44,4294829706)
D.eHy=new C.bk("Jupiter",24.79,4294677052)
D.eL8=new C.a9(10,-8,18,-2)
D.eL9=new C.a9(14,-14,20,14)
D.eLa=new C.a9(20,-2,30,2)
D.eLc=new C.a9(4,-13,30,-3)
D.eLe=new C.a9(8,-7,12,7)
D.eLk=new C.a9(-12,12,12,19)
D.eLl=new C.a9(-12,14,12,22)
D.eLm=new C.a9(-12,-22,12,8)
D.eLn=new C.a9(-12,-25,12,19)
D.eLo=new C.a9(-12,-26,12,-6)
D.eLp=new C.a9(-12,-4,12,14)
D.eLq=new C.a9(-12,-6,10,6)
D.eLr=new C.a9(-14,20,14,24)
D.eLs=new C.a9(-14,6,14,10)
D.eLt=new C.a9(-14,-17,14,15)
D.eLu=new C.a9(-14,-26,14,18)
D.eLv=new C.a9(-14,-4,14,20)
D.eLw=new C.a9(-15,-29,15,25)
D.eLx=new C.a9(-16,-16,16,16)
D.eLy=new C.a9(-16,-22,-9,18)
D.eLz=new C.a9(-16,-24,16,-10)
D.eLA=new C.a9(-16,-2,16,20)
D.eLC=new C.a9(-18,20,18,24)
D.eLD=new C.a9(-18,-18,18,20)
D.eLE=new C.a9(-20,12,20,22)
D.eLF=new C.a9(-20,-28,20,26)
D.eLG=new C.a9(-22,14,22,18)
D.aMr=new C.a9(-22,-26,22,24)
D.eLH=new C.a9(-22,-3,22,3)
D.eLI=new C.a9(-22,-4,22,12)
D.eLJ=new C.a9(-24,-12,10,22)
D.eLK=new C.a9(-24,-14,22,8)
D.eLL=new C.a9(-24,-6,24,20)
D.aMs=new C.a9(-24,-9,24,9)
D.eLM=new C.a9(-25,14,25,19)
D.eLN=new C.a9(-26,-14,14,8)
D.eLO=new C.a9(-26,-4,26,20)
D.eLP=new C.a9(-26,-6,4,6)
D.aMt=new C.a9(-28,-13,28,13)
D.eLQ=new C.a9(-28,-16,28,16)
D.eLR=new C.a9(-28,-16,28,8)
D.eLS=new C.a9(-28,-22,28,22)
D.eLT=new C.a9(-30,-12,30,14)
D.eLU=new C.a9(-30,-14,0,14)
D.eLV=new C.a9(-30,-18,30,20)
D.eLW=new C.a9(-30,-28,30,14)
D.eLX=new C.a9(-30,-2,30,18)
D.eLY=new C.a9(-30,-4,30,18)
D.eLZ=new C.a9(-32,-17,32,17)
D.eM_=new C.a9(-32,-28,32,18)
D.eM0=new C.a9(-33,-21,33,17)
D.eM1=new C.a9(-34,14,34,26)
D.a6c=new C.a9(-34,-18,34,18)
D.eM2=new C.a9(-34,-4,34,7)
D.eM3=new C.a9(-36,-24,36,20)
D.eM4=new C.a9(-38,-22,38,22)
D.eM5=new C.a9(-3,12,3,22)
D.eM6=new C.a9(-3,5,3,15)
D.eM8=new C.a9(-46,-34,46,28)
D.eM9=new C.a9(-48,-3,48,3)
D.eMc=new C.a9(-6,18,24,24)
D.eMd=new C.a9(-6,5,6,12)
D.eMe=new C.a9(-6,-22,6,-15)
D.eMf=new C.a9(-9,-16,9,22)
D.eMg=new C.a9(-4.5,-24,4.5,-21.2)
D.eMi=new C.a9(14,-9,17.5,9)
D.e3F={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aNl=new C.em(D.e3F,5,x.R)
D.e3h={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.ePh=new C.em(D.e3h,10,x.R)
D.eRi=new C.ar(24,44)
D.eRn=new C.ar(300,300)
D.eRH=new C.ar(54,38)
D.eRO=new C.ar(66,38)
D.b6l=new C.fj(2,null,null,null,null,A.bu,null,null,null,null)
D.eSL=new C.a7(16,16,D.b6l,null)
D.aOk=new C.hN(3,12,12,0.82,null)
D.fzZ=new C.y("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aOv=new C.b1(D.fzZ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.d8q=w([A.c9,A.bN,A.b2,A.aP,A.py,A.c9],x.O)
D.eYD=new C.fV(A.A,0,6.283185307179586,A.x,D.d8q,null,null)
D.f6B=new C.H(!0,A.aM,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Q8,null,null,null)
D.eZS=new C.er("You are here (Sun)",null,null,A.cO,null,null,null,null,null,null,D.f6B)
D.aQZ=new C.H(!0,A.aA,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZT=new C.er("What we see",null,null,A.cO,null,null,null,null,null,null,D.aQZ)
D.f4_=new C.H(!0,A4.KG,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZW=new C.er("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cO,null,null,null,null,null,null,D.f4_)
D.f8P=new C.H(!0,A.km,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_1=new C.er("AI",null,null,A.cO,null,null,null,null,null,null,D.f8P)
D.f3L=new C.H(!0,A.c0,null,null,null,null,15,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_2=new C.er("Add atoms with the buttons below",null,null,A.cO,null,null,null,null,null,null,D.f3L)
D.aPj=new C.H(!0,A.c0,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_h=new C.H(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_j=new C.H(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_P=new C.H(!0,A.bj,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f07=new C.H(!0,A.cn,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0C=new C.H(!0,A.c0,null,null,null,null,11,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0H=new C.H(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0X=new C.H(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1q=new C.H(!0,A.aS,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1O=new C.H(!0,A.c0,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1Y=new C.H(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePQ=new C.cR(A.hL,A.dE,6)
D.d29=w([D.ePQ],x.q)
D.f2h=new C.H(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d29,null,null,null)
D.f2k=new C.H(!0,A.eu,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2n=new C.H(!0,A.c,null,null,null,null,17,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2p=new C.H(!0,A.c0,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2O=new C.H(!0,A.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPI=new C.H(!0,A.c0,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f37=new C.H(!0,A.aA,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f38=new C.H(!0,A.c0,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f42=new C.H(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4x=new C.H(!0,A.aA,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f51=new C.H(!0,A.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePT=new C.cR(A.aW,A.J,3)
D.ayp=w([D.ePT],x.q)
D.f54=new C.H(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ayp,null,null,null)
D.f59=new C.H(!0,A.c,null,null,null,null,12.5,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5Q=new C.H(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Q8,null,null,null)
D.f6i=new C.H(!0,A.aA,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6q=new C.H(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6Q=new C.H(!0,A.tr,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f75=new C.H(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7q=new C.H(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7v=new C.H(!0,A.c0,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7A=new C.H(!0,A.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7G=new C.H(!0,A.aA,null,null,null,null,18,A.H,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f86=new C.H(!0,A.c0,null,null,null,null,8.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8k=new C.H(!0,A.n6,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8l=new C.H(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8A=new C.H(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQn=new C.H(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f98=new C.H(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePH=new C.cR(A.w,A.J,5)
D.cRj=w([D.ePH],x.q)
D.f99=new C.H(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cRj,null,null,null)
D.f9e=new C.H(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.ayp,null,null,null)
D.f9t=new C.H(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9z=new C.H(!0,A.fz,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9Q=new C.H(!0,A.c0,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fak=new C.H(!0,A.b2,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faS=new C.H(!0,A.c0,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbv=new C.H(!0,A.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbE=new C.H(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQJ=new C.H(!0,A.aA,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc6=new C.H(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcg=new C.H(!0,A.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcn=new C.H(!0,A.aM,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcH=new C.H(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQV=new C.H(!0,A.ad,null,null,null,null,12,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcK=new C.H(!0,A.aM,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdu=new C.H(!0,A.aS,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8a=new C.H(!0,A.c,null,null,null,null,13,A.a5,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdT=new C.H(!0,A.tr,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fec=new C.H(!0,A.b2,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2s=new C.H(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feB=new C.y("\u26a0\ufe0f ",null,D.f2s,null,null,null,null,null,null,null,null,null)
D.feN=new C.y("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.wq,null,null,null,null,null,null,null,null,null)
D.ffd=new C.y("LETTER COUNT OF THE SECRET VERSION",null,Q.mP,null,null,null,null,null,null,null,null,null)
D.fgh=new C.y("Pick one, then change it and see what happens.",null,A.wq,null,null,null,null,null,null,null,null,null)
D.fgl=new C.y("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.f3w=new C.H(!0,A.ad,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhf=new C.y("What do you want to invent? Type it below, or tap an idea.",null,D.f3w,null,null,null,null,null,null,null,null,null)
D.fhC=new C.y("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,V.a7s,null,null,null,null,null,null,null,null,null)
D.fiL=new C.y("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fjl=new C.y("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fjq=new C.y("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fjY=new C.y("Make it yours",null,A.kg,null,null,null,null,null,null,null,null,null)
D.fkf=new C.y("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a7z,null,null,null,null,null,null,null,null,null)
D.f7L=new C.H(!0,A.jh,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmz=new C.y("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.f7L,null,null,null,null,null,null,null,null,null)
D.fmO=new C.y("YOUR DECODING",null,Q.mP,null,null,null,null,null,null,null,null,null)
D.fn_=new C.y("5G",null,U.aPL,null,null,null,null,null,null,null,null,null)
D.fa5=new C.H(!0,A.c0,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo7=new C.y("WHAT HAPPENS",null,D.fa5,null,null,null,null,null,null,null,null,null)
D.fpP=new C.y("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fqu=new C.y("Change the words and pictures on the three slabs.",null,A.wq,null,null,null,null,null,null,null,null,null)
D.fqF=new C.y("All the parts and wires will be removed.",null,A.hE,null,null,null,null,null,null,null,null,null)
D.fqZ=new C.y("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fry=new C.y("Tap the crank on the board again and again to spin it faster.",null,A.h2,null,null,null,null,null,null,null,null,null)
D.fsq=new C.y("INTERCEPTED",null,Q.mP,null,null,null,null,null,null,null,null,null)
D.fsK=new C.y("\ud83c\udfaf Challenges",null,A.dj,null,null,null,null,null,null,null,null,null)
D.ftf=new C.y("Remove this part",null,V.aPn,null,null,null,null,null,null,null,null,null)
D.ftx=new C.y("Clear the board?",null,A.dp,null,null,null,null,null,null,null,null,null)
D.f9A=new C.H(!0,A.bv,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftN=new C.y("How the Lab works",null,D.f9A,null,null,null,null,null,null,null,null,null)
D.f18=new C.H(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu6=new C.y("Electronics Lab",null,D.f18,null,null,null,null,A.a2,null,1,null,null)
D.fu9=new C.y("?",null,M.aQS,null,null,null,null,null,null,null,null,null)
D.f7F=new C.H(!0,A.aP,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fud=new C.y("Planet Earth",null,D.f7F,null,null,null,null,null,null,null,null,null)
D.fvq=new C.y("Ready-made circuits",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fw1=new C.y("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.h2,null,null,null,null,null,null,null,null,null)
D.fwk=new C.y("UNIVERSE EXPLORER",null,I.a7y,null,null,null,null,null,null,null,null,null)
D.fyS=new C.y("SECRET VERSION",null,Q.mP,null,null,null,null,null,null,null,null,null)
D.fcq=new C.H(!0,A.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzo=new C.y("\u26a0 There is no air here, so a parachute will not work.",null,D.fcq,null,null,null,null,null,null,null,null,null)
D.fAB=new C.y("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,V.a7s,null,null,null,null,null,null,null,null,null)
D.fB4=new C.y("NGMY",null,A.uM,null,null,null,null,null,null,null,null,null)
D.fBh=new C.y("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.TK,null,null,null,null,null,null,null,null,null)
D.fBE=new C.y("Tap it to change its setting. Drag from the right dot to connect.",null,A.kH,null,null,null,null,null,null,null,null,null)
D.fCA=new C.y("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.wq,null,null,null,null,null,null,null,null,null)
D.fCC=new C.y("TOOLBOX",null,I.a7y,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.heq=null
$.hep=null
$.hks=0
$.hMl=C.T(x.N,x.k)
$.hMW=C.T(x.N,x.k)
$.hdL=null
$.hMH=C.T(x.N,x.k)
$.hNK=C.T(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iic","bDt",()=>{var v="led"
return C.a([B.axF("Both together","Make the light glow only when BOTH switches are ON.",2,new B.fg5(),v),B.axF("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.fg6(),v),B.axF("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.fg7(),v),B.axF("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.fge(),v),B.axF("Not both","Make the light go OFF only when both switches are ON.",2,new B.fgf(),v),B.axF("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.fgg(),"buzzer")],C.ax("O<bab>"))})
w($,"iiE","bDu",()=>C.a([B.oy("UNIVERSE","Earth, space and gravity",A.a0o,A.aP,new B.fgw()),B.oy("ELECTRONICS LAB","Batteries, wires, real circuits",Ah.a_O,A.aP,new B.fgx()),B.oy("DISCOVERY LAB","Body Explorer: a real 3D human",D.a_F,A.b2,new B.fgy()),B.oy("TOOLBOX","Converter, clock, games",T.akN,A.cs,new B.fgJ()),B.oy("MOLECULE MAKER","Join atoms into real molecules",A.Nk,A.hw,new B.fgL()),B.oy("DNA LAB","Copy DNA, build a protein",D.a_F,A.bX,new B.fgM()),B.oy("ECOSYSTEM LAB","Grass, rabbits and foxes",A.yh,A.b2,new B.fgN()),B.oy("BALANCE LAB","Levers, weight and torque",D.bGo,A.aM,new B.fgO()),B.oy("GEAR LAB","Teeth, speed and force",A.BJ,A.cs,new B.fgP()),B.oy("LASER MAZE","Bend the beam with mirrors",I.alb,A.ay,new B.fgQ()),B.oy("LIGHT MIXER","Match colours with light",D.bE4,A.b8,new B.fgR()),B.oy("CIPHER LAB","Make and crack secret codes",A.ys,A.aP,new B.fgz()),B.oy("REACTION LAB","Wire parts together",A.yw,A.bv,new B.fgA()),B.oy("SPARK PAINTER","Paint with light",A.a_H,A.bX,new B.fgB()),B.oy("ROCKET LANDER","Land softly on the pad",A.nm,A.aP,new B.fgC()),B.oy("ORBIT STUDIO","Slingshot planets",A.my,A.cs,new B.fgD()),B.oy("SWARM STUDIO","A living school of fish",A.Nk,A.b2,new B.fgE()),B.oy("CHAIN BURST","One tap, a whole chain",A.ha,A.bX,new B.fgF()),B.oy("TITLE ANIMATOR","Make a moving title",A.yo,A.bN,new B.fgG()),B.oy("CIRCUIT LAB","Connect logic, learn it",A.a07,A.cn,new B.fgH()),B.oy("MARBLE MUSIC","Marbles ring the notes",D.bDK,A.b8,new B.fgI()),B.oy("ORBIT SEQUENCER","Planets play the tune",D.bGb,A.bu,new B.fgK())],C.ax("O<bs0>")))
w($,"ik8","qf",()=>{var v,u,t=C.T(x.N,x.dV)
for(v=0;v<76;++v){u=D.Qp[v]
t.n(0,u.a,u)}return t})
w($,"iid","ahw",()=>C.a([B.Fs("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.fgh()),B.Fs("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.fgi()),B.Fs("Spin the motor","A battery and a motor in a loop will make it spin.",new B.fgj()),B.Fs("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.fgk()),B.Fs("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.fgl()),B.Fs("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.fg8()),B.Fs("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.fg9()),B.Fs("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.fga()),B.Fs("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.fgb()),B.Fs("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.fgc()),B.Fs("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.fgd())],C.ax("O<bac>")))
w($,"iiG","hsR",()=>C.a([B.a0w("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aM,A.cg,new B.fgZ()),B.a0w("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c9,A.bz,new B.fh_()),B.a0w("Breathe","Calm down in a minute","\ud83e\udee7",A.hw,A.cB,new B.fh0()),B.a0w("Draw Pad","Sketch and share","\ud83c\udfa8",A.bC,A.b6,new B.fh1()),B.a0w("Memory Match","Find the pairs","\ud83c\udccf",A.aP,A.ce,new B.fh2()),B.a0w("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bN,A.bi,new B.fh3()),B.a0w("Tip & Split","Share the bill","\ud83e\uddfe",A.b2,A.aZ,new B.fh4()),B.a0w("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bu,A.aE,new B.fh5())],C.ax("O<btl>")))
w($,"iiF","hsQ",()=>C.a([B.aeR("EARTH GLOBE","Turn it, tap a country",A.my,A.aP,new B.fgS()),B.aeR("SOLAR SYSTEM","The Sun and its worlds",D.bDO,A.aM,new B.fgT()),B.aeR("GRAVITY LAB","Drop, weigh, orbit",D.alV,A.cs,new B.fgU()),B.aeR("BLACK HOLE","Throw in a star",A.FO,A.bu,new B.fgV()),B.aeR("GALAXY","Build, tilt, collide",A.y5,A.h4,new B.fgW()),B.aeR("SIZE COMPARE","Earth next to a star",D.bE6,A.bX,new B.fgX()),B.aeR("SEASONS & MOON","Why it is summer",A.vB,A.bv,new B.fgY())],C.ax("O<btg>")))})()};
(a=>{a["+VmmjBlt33PKvJkY+xFzrOYVDXM="]=a.current})($__dart_deferred_initializers__);