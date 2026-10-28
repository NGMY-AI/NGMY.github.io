((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,A_,A0,Aa,A1,A2,I,P,A3,Ab,A4,A5,G,Ac,Ad,A6,Ae,W,Af,Ag,Q,N,Ah,Ai,X,O,U,Aj,Ak,V,K,A7,L,S,Al,E,F,M,B={
bxG(d){return B.hKn(d)},
hKn(d){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bxG=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qG(C.n1(""),d,A.hl,null).cM(0,A.Xg),$async$bxG)
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
return C.i($async$bxG,v)},
hVU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Po[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.cU(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.iC(D.Po,new B.fqF())
if(w==null)w=A.d.gL(D.Po)
s=C.T(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.L)(r),++u){l=r[u].a
k=l[0]
l=$.q5().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.L)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gL(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new B.aiU(w.a,w.b,m,w,s,!1)},
hPE(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.K(D.PN,new B.fhp(),x.bd).aI(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
i2I(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cJ(b2,"{")
v=A.a.oq(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.R.aG(0,A.a.ap(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aX(a5)
r=0
for(a6=x.j,a7=J.aV(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gS(a7)
p=C.t(J.q(q,"kind"))
o=C.t(J.q(q,"id"))
if(!$.q5().ai(0,p)||J.f_(s,o)||J.ad(t)>=8)continue
J.ch(s,o)
n=C.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dcB[a9]
l=J.q(q,m)
if(typeof l=="number")J.aF(n,m,l)}k=A.k.D(typeof J.q(q,"x")=="number"?C.dQ(J.q(q,"x")):0.2+A.k.G(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.q(q,"y")=="number"?C.dQ(J.q(q,"y")):0.25+A.k.an(r,3)*0.3,0.1,0.9)
J.ch(t,new C.ev([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=C.a([],x.o)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gS(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=C.t(J.q(g,0))
e=C.t(J.q(g,2))
d=A.o.D(A.k.N(C.dQ(J.q(g,1))),0,1)
a0=A.o.D(A.k.N(C.dQ(J.q(g,3))),0,1)
if(J.f_(s,f)&&J.f_(s,e)&&!J.z(f,e))J.ch(i,new C.cH([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.L.a(J.q(u,"steps"))
a0=J.aV(a0==null?A.cu:a0)
while(a0.C()){a2=a0.gS(a0)
J.ch(a1,C.t(a2))}a3=a1
a0=J.q(u,"title")
a0=C.t(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new B.mv(a0,C.t(a1==null?"":a1),t,i,A.T)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.t(a5==null?"":a5)
return new B.aiU(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hUu(d){var w,v,u=B.h_K()
d.B(u)
for(w=0;w<60;++w)u.uP(0,0.03333333333333333)
v=u.a
return A.d.b8(v,new B.fnJ(u))&&!A.d.da(v,new B.fnK())},
hUt(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.L)(l),++u){t=l[u];++v
k.n(0,t.a,$.q5().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.L)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.db2,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aI(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+A.k.aa(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.L)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aI(s,"\n")+"\nWires: "+A.d.aI(l,"; ")},
hIU(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.L)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aI(v,"\n")+"\n\n"}v=A.d.aI(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
hVT(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.q5().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.PN[u]
if(A.d.b8(w,new B.fqC(s)))if(!C.cU(r,s.b.toLowerCase(),0))v=C.cU(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a2(w,new B.fqD(e),C.U(w).k("a2<1>")).gam(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.aa(A.d.cI(w,0,new B.fqE())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gL(w)
w=$.q5().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
aiU:function aiU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fqF:function fqF(){},
fhp:function fhp(){},
fnJ:function fnJ(d){this.a=d},
fnK:function fnK(){},
fqC:function fqC(d){this.a=d},
fqD:function fqD(d){this.a=d},
fqE:function fqE(){},
UI:function UI(d,e){this.c=d
this.a=e},
bis:function bis(d,e,f,g,h){var _=this
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
e3g:function e3g(d){this.a=d},
e3h:function e3h(d,e,f){this.a=d
this.b=e
this.c=f},
e3i:function e3i(d){this.a=d},
e3t:function e3t(d){this.a=d},
e3u:function e3u(d,e){this.a=d
this.b=e},
e3p:function e3p(d){this.a=d},
e3n:function e3n(d,e){this.a=d
this.b=e},
e3o:function e3o(d,e,f){this.a=d
this.b=e
this.c=f},
e3q:function e3q(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e3l:function e3l(d){this.a=d},
e3m:function e3m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3r:function e3r(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e3k:function e3k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3s:function e3s(d,e){this.a=d
this.b=e},
e3j:function e3j(d,e){this.a=d
this.b=e},
e3x:function e3x(d){this.a=d},
e3w:function e3w(d){this.a=d},
e3y:function e3y(d){this.a=d},
e3v:function e3v(d){this.a=d},
e3z:function e3z(d,e){this.a=d
this.b=e},
e3A:function e3A(d,e){this.a=d
this.b=e},
e3B:function e3B(d,e){this.a=d
this.b=e},
e3C:function e3C(d,e){this.a=d
this.b=e},
by1(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aOo,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
hdb(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.an,C.d(e,w,w,w,w,w,w,A.zm,A.L,w,w),A.aA,C.bY(A.fQ,g,A.br,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.Vn,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
FC:function FC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uE:function uE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
V9:function V9(d){this.a=d},
aD2:function aD2(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fj$=h
_.kX$=i
_.fP$=j
_.fk$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
ejf:function ejf(){},
ejz:function ejz(d){this.a=d},
ejy:function ejy(d,e){this.a=d
this.b=e},
ejA:function ejA(){},
ejB:function ejB(){},
ejh:function ejh(d,e,f){this.a=d
this.b=e
this.c=f},
ejg:function ejg(d,e){this.a=d
this.b=e},
ej6:function ej6(d){this.a=d},
ej7:function ej7(d){this.a=d},
ej8:function ej8(d){this.a=d},
ej9:function ej9(d){this.a=d},
eja:function eja(d){this.a=d},
ejb:function ejb(d){this.a=d},
ejc:function ejc(d){this.a=d},
ejd:function ejd(d){this.a=d},
eje:function eje(d){this.a=d},
ej4:function ej4(d){this.a=d},
ej5:function ej5(d){this.a=d},
ej3:function ej3(d){this.a=d},
ejs:function ejs(d,e){this.a=d
this.b=e},
ejn:function ejn(d){this.a=d},
ejo:function ejo(d){this.a=d},
ejk:function ejk(d){this.a=d},
ejp:function ejp(d){this.a=d},
ejj:function ejj(d){this.a=d},
ejq:function ejq(d){this.a=d},
ejr:function ejr(d){this.a=d},
eji:function eji(d){this.a=d},
ejt:function ejt(d,e){this.a=d
this.b=e},
ejm:function ejm(d,e){this.a=d
this.b=e},
eju:function eju(d){this.a=d},
ejv:function ejv(d){this.a=d},
ejw:function ejw(d){this.a=d},
ejx:function ejx(d){this.a=d},
ejl:function ejl(d){this.a=d},
bfr:function bfr(d,e){this.b=d
this.a=e},
aKS:function aKS(){},
bvE:function bvE(){},
cDg(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cDg=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.qK().jr(0,"assets/data/body3d.bin"),$async$cDg)
case 3:d=a1
$.h8x=J.eX(A.dC.gaM(d),d.byteOffset,d.byteLength)
t=C.aQV(d)
s=t.getUint32(4,!0)
r=C.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=C.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=C.jm(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.d0G[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new B.a2j(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aW4))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new B.b8z(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cDg,v)},
aQI:function aQI(d,e,f){this.a=d
this.b=e
this.c=f},
a2j:function a2j(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b8z:function b8z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
TA:function TA(d){this.a=d},
aBs:function aBs(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.fj$=s
_.kX$=t
_.fP$=u
_.fk$=v
_.bq$=w
_.a7$=a0
_.c=_.a=null},
dCJ:function dCJ(d){this.a=d},
dCI:function dCI(d,e){this.a=d
this.b=e},
dCl:function dCl(d,e){this.a=d
this.b=e},
dCm:function dCm(){},
dCK:function dCK(){},
dCn:function dCn(d,e){this.a=d
this.b=e},
dCo:function dCo(d){this.a=d},
dCp:function dCp(){},
dCq:function dCq(d){this.a=d},
dCs:function dCs(d,e){this.a=d
this.b=e},
dCr:function dCr(d){this.a=d},
dCi:function dCi(d,e,f){this.a=d
this.b=e
this.c=f},
dCj:function dCj(d){this.a=d},
dCk:function dCk(d){this.a=d},
dCz:function dCz(d){this.a=d},
dCA:function dCA(d,e){this.a=d
this.b=e},
dCB:function dCB(d,e){this.a=d
this.b=e},
dCC:function dCC(d){this.a=d},
dCy:function dCy(d,e){this.a=d
this.b=e},
dCD:function dCD(d,e){this.a=d
this.b=e},
dCx:function dCx(d,e){this.a=d
this.b=e},
dCE:function dCE(d){this.a=d},
dCw:function dCw(d){this.a=d},
dCF:function dCF(d){this.a=d},
dCv:function dCv(d){this.a=d},
dCG:function dCG(d){this.a=d},
dCu:function dCu(d){this.a=d},
dCH:function dCH(d){this.a=d},
dCt:function dCt(d){this.a=d},
aJU:function aJU(){},
aJV:function aJV(){},
bZO:function bZO(d){var _=this
_.a=d
_.d=_.c=_.b=null},
bZP:function bZP(d,e){this.a=d
this.b=e},
bZQ:function bZQ(d){this.a=d},
awX(d,e,f,g,h){return new B.b9h(d,e,f,g,h)},
fRH(d,e,f,g,h,i){return $.hGj.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.cK2(d,e,f,i,g,h))},
xK:function xK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
BV:function BV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nh:function nh(d,e,f){this.a=d
this.b=e
this.c=f},
b9h:function b9h(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fbE:function fbE(){},
fbF:function fbF(){},
fbG:function fbG(){},
fbN:function fbN(){},
fbO:function fbO(){},
fbP:function fbP(){},
TF:function TF(d){this.a=d},
aBv:function aBv(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.fj$=m
_.kX$=n
_.fP$=o
_.fk$=p
_.bq$=q
_.a7$=r
_.c=_.a=null},
dEU:function dEU(d){this.a=d},
dEy:function dEy(d,e){this.a=d
this.b=e},
dEB:function dEB(){},
dEV:function dEV(){},
dEw:function dEw(d,e){this.a=d
this.b=e},
dEx:function dEx(d,e){this.a=d
this.b=e},
dEC:function dEC(d,e,f){this.a=d
this.b=e
this.c=f},
dEr:function dEr(){},
dEs:function dEs(){},
dEt:function dEt(d){this.a=d},
dEu:function dEu(d,e){this.a=d
this.b=e},
dEv:function dEv(d,e,f){this.a=d
this.b=e
this.c=f},
dED:function dED(){},
dEE:function dEE(d,e){this.a=d
this.b=e},
dEF:function dEF(d){this.a=d},
dEA:function dEA(d,e){this.a=d
this.b=e},
dEz:function dEz(d){this.a=d},
dEq:function dEq(d,e,f){this.a=d
this.b=e
this.c=f},
dEO:function dEO(d){this.a=d},
dEN:function dEN(d){this.a=d},
dEP:function dEP(d){this.a=d},
dEM:function dEM(d){this.a=d},
dEK:function dEK(d){this.a=d},
dEL:function dEL(d){this.a=d},
dEJ:function dEJ(d){this.a=d},
dEG:function dEG(d){this.a=d},
dEI:function dEI(d){this.a=d},
dEQ:function dEQ(d,e){this.a=d
this.b=e},
dER:function dER(d,e){this.a=d
this.b=e},
dES:function dES(d){this.a=d},
dEH:function dEH(d){this.a=d},
dET:function dET(d,e){this.a=d
this.b=e},
b9A:function b9A(d,e){this.b=d
this.a=e},
cK2:function cK2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aK_:function aK_(){},
bvn:function bvn(){},
hxa(){return new B.MN(null)},
ou(d,e,f,g,h){return new B.br_(d,e,f,g,h)},
bpr(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fSc(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
MN:function MN(d){this.a=d},
JS:function JS(d,e){this.a=d
this.b=e},
A7:function A7(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aBM:function aBM(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dKL:function dKL(d,e){this.a=d
this.b=e},
dKK:function dKK(d){this.a=d},
dKN:function dKN(d,e){this.a=d
this.b=e},
dKM:function dKM(d){this.a=d},
br_:function br_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fc4:function fc4(){},
fc5:function fc5(){},
fc6:function fc6(){},
fch:function fch(){},
fcj:function fcj(){},
fck:function fck(){},
fcl:function fcl(){},
fcm:function fcm(){},
fcn:function fcn(){},
fco:function fco(){},
fcp:function fcp(){},
fc7:function fc7(){},
fc8:function fc8(){},
fc9:function fc9(){},
fca:function fca(){},
fcb:function fcb(){},
fcc:function fcc(){},
fcd:function fcd(){},
fce:function fce(){},
fcf:function fcf(){},
fcg:function fcg(){},
fci:function fci(){},
bps:function bps(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eTw:function eTw(d){this.a=d},
eTv:function eTv(d,e){this.a=d
this.b=e},
eTt:function eTt(d){this.a=d},
eTx:function eTx(d){this.a=d},
eTu:function eTu(d,e){this.a=d
this.b=e},
adZ:function adZ(d,e,f){this.c=d
this.d=e
this.a=f},
acT:function acT(d,e,f){this.c=d
this.d=e
this.a=f},
Pr:function Pr(d,e,f,g,h,i,j,k,l,m){var _=this
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
bqq:function bqq(d,e){this.b=d
this.a=e},
bpW:function bpW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b8g:function b8g(d,e){this.b=d
this.a=e},
aG0:function aG0(d,e){this.c=d
this.a=e},
aG1:function aG1(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cS$=e
_.b2$=f
_.c=_.a=null},
eTc:function eTc(d){this.a=d},
eTb:function eTb(d){this.a=d},
eTa:function eTa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eT9:function eT9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eT7:function eT7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eT6:function eT6(d,e,f){this.a=d
this.b=e
this.c=f},
eT8:function eT8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eT5:function eT5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eTk:function eTk(d){this.a=d},
eTj:function eTj(d){this.a=d},
eTl:function eTl(d,e){this.a=d
this.b=e},
eTm:function eTm(d,e){this.a=d
this.b=e},
eTn:function eTn(d,e){this.a=d
this.b=e},
eTi:function eTi(d,e,f){this.a=d
this.b=e
this.c=f},
eTo:function eTo(d,e,f){this.a=d
this.b=e
this.c=f},
eTh:function eTh(d){this.a=d},
eTd:function eTd(d){this.a=d},
eTp:function eTp(d){this.a=d},
eTq:function eTq(d){this.a=d},
eTg:function eTg(d,e){this.a=d
this.b=e},
eTr:function eTr(d,e){this.a=d
this.b=e},
eTf:function eTf(d,e){this.a=d
this.b=e},
eTs:function eTs(d,e){this.a=d
this.b=e},
eTe:function eTe(d,e){this.a=d
this.b=e},
eT3:function eT3(){},
eT4:function eT4(){},
bp4:function bp4(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bow:function bow(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b8W:function b8W(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
boy:function boy(d,e,f){this.b=d
this.c=e
this.a=f},
bst:function bst(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aLH:function aLH(){},
heA(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new C.u(w,0)),u=e.aC(0,new C.u(w,0)),t=1-f,s=3*t
return d.aF(0,t*t*t).ad(0,v.aF(0,s*t*f)).ad(0,u.aF(0,s*f*f)).ad(0,e.aF(0,f*f*f))},
bfq(d,e,f,g,h,i){return $.hGU.cg(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new B.dey(d,e,f,i,g,h))},
a_y:function a_y(d,e){this.a=d
this.b=e},
pU:function pU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qA:function qA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
BZ:function BZ(d,e){this.a=d
this.b=e},
Yy:function Yy(d,e){this.a=d
this.b=e},
adP:function adP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_L:function a_L(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
C9:function C9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aaL:function aaL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ab1:function ab1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acX:function acX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bfo:function bfo(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bt$=_.bM$=0},
deC:function deC(d){this.a=d},
deD:function deD(d){this.a=d},
dez:function dez(d,e){this.a=d
this.b=e},
deA:function deA(d){this.a=d},
deB:function deB(d){this.a=d},
deE:function deE(d){this.a=d},
deF:function deF(d){this.a=d},
deG:function deG(d){this.a=d},
deH:function deH(d){this.a=d},
deI:function deI(d){this.a=d},
deJ:function deJ(d){this.a=d},
deK:function deK(d){this.a=d},
deL:function deL(d){this.a=d},
deM:function deM(d){this.a=d},
Fo:function Fo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
V8:function V8(d){this.a=d},
aD1:function aD1(d,e,f,g,h,i,j){var _=this
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
_.a7$=j
_.c=_.a=null},
eiA:function eiA(d){this.a=d},
eip:function eip(d){this.a=d},
eir:function eir(){},
eis:function eis(){},
eiv:function eiv(){},
eiw:function eiw(d,e,f){this.a=d
this.b=e
this.c=f},
eix:function eix(d){this.a=d},
eiy:function eiy(d){this.a=d},
eit:function eit(){},
eiu:function eiu(d){this.a=d},
ej_:function ej_(d){this.a=d},
eiz:function eiz(){},
eil:function eil(d){this.a=d},
eiC:function eiC(d){this.a=d},
eiB:function eiB(d){this.a=d},
eiE:function eiE(){},
eiD:function eiD(d,e){this.a=d
this.b=e},
eio:function eio(){},
eim:function eim(d){this.a=d},
ein:function ein(d){this.a=d},
eiY:function eiY(d){this.a=d},
eiX:function eiX(d){this.a=d},
eiZ:function eiZ(d){this.a=d},
eiO:function eiO(d,e){this.a=d
this.b=e},
eiW:function eiW(d){this.a=d},
eiU:function eiU(d){this.a=d},
eiV:function eiV(d){this.a=d},
eiT:function eiT(d){this.a=d},
eiS:function eiS(d){this.a=d},
eiP:function eiP(d){this.a=d},
eiQ:function eiQ(d){this.a=d},
eiR:function eiR(d){this.a=d},
eiq:function eiq(){},
eiK:function eiK(d){this.a=d},
eiL:function eiL(d){this.a=d},
eiJ:function eiJ(d){this.a=d},
eiM:function eiM(d){this.a=d},
eiI:function eiI(d){this.a=d},
eiN:function eiN(d){this.a=d},
eiH:function eiH(d){this.a=d},
eiG:function eiG(d){this.a=d},
eiF:function eiF(d,e){this.a=d
this.b=e},
bfp:function bfp(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dey:function dey(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aKQ:function aKQ(){},
bjZ:function bjZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Pi:function Pi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Vo:function Vo(d){this.a=d},
bj2:function bj2(d,e,f,g,h,i,j,k){var _=this
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
_.a7$=k
_.c=_.a=null},
euq:function euq(d){this.a=d},
euo:function euo(d){this.a=d},
eup:function eup(){},
eu1:function eu1(){},
eu0:function eu0(){},
eua:function eua(d,e){this.a=d
this.b=e},
euc:function euc(d){this.a=d},
eug:function eug(d){this.a=d},
eub:function eub(d){this.a=d},
euh:function euh(d){this.a=d},
eui:function eui(d){this.a=d},
euj:function euj(d,e){this.a=d
this.b=e},
eu9:function eu9(d,e){this.a=d
this.b=e},
euk:function euk(d){this.a=d},
eu8:function eu8(d){this.a=d},
eul:function eul(d,e){this.a=d
this.b=e},
eu7:function eu7(d,e){this.a=d
this.b=e},
eum:function eum(d){this.a=d},
eu6:function eu6(d,e){this.a=d
this.b=e},
eun:function eun(d){this.a=d},
eu5:function eu5(d){this.a=d},
eud:function eud(d){this.a=d},
eu4:function eu4(d){this.a=d},
eue:function eue(d){this.a=d},
eu3:function eu3(d){this.a=d},
euf:function euf(d,e){this.a=d
this.b=e},
eu2:function eu2(d,e){this.a=d
this.b=e},
bql:function bql(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
VA:function VA(d){this.a=d},
aDh:function aDh(d,e,f,g){var _=this
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
_.a7$=g
_.c=_.a=null},
eB_:function eB_(d,e){this.a=d
this.b=e},
eB0:function eB0(d,e,f){this.a=d
this.b=e
this.c=f},
eB1:function eB1(d){this.a=d},
eAZ:function eAZ(){},
eB2:function eB2(d,e){this.a=d
this.b=e},
eAY:function eAY(d,e){this.a=d
this.b=e},
eB3:function eB3(d,e){this.a=d
this.b=e},
eAX:function eAX(d,e){this.a=d
this.b=e},
eB4:function eB4(d){this.a=d},
eAW:function eAW(d){this.a=d},
eB5:function eB5(d,e){this.a=d
this.b=e},
eAV:function eAV(d,e){this.a=d
this.b=e},
eB6:function eB6(d){this.a=d},
eB7:function eB7(d){this.a=d},
eAU:function eAU(d,e){this.a=d
this.b=e},
aKZ:function aKZ(){},
aL4:function aL4(){},
a_4:function a_4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
V5:function V5(d){this.a=d},
aCU:function aCU(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fj$=h
_.kX$=i
_.fP$=j
_.fk$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
efd:function efd(d){this.a=d},
efe:function efe(d,e){this.a=d
this.b=e},
ef1:function ef1(d,e){this.a=d
this.b=e},
ef2:function ef2(d){this.a=d},
ef_:function ef_(d){this.a=d},
ef0:function ef0(d){this.a=d},
eeZ:function eeZ(d){this.a=d},
ef3:function ef3(d){this.a=d},
eeY:function eeY(d,e){this.a=d
this.b=e},
ef5:function ef5(d){this.a=d},
eeX:function eeX(d,e){this.a=d
this.b=e},
ef6:function ef6(d){this.a=d},
eeW:function eeW(d,e){this.a=d
this.b=e},
ef7:function ef7(d){this.a=d},
eeV:function eeV(d){this.a=d},
ef8:function ef8(d){this.a=d},
eeU:function eeU(d){this.a=d},
ef9:function ef9(d){this.a=d},
eeT:function eeT(d){this.a=d},
efa:function efa(d){this.a=d},
efb:function efb(d){this.a=d},
efc:function efc(d){this.a=d},
eeS:function eeS(d){this.a=d},
ef4:function ef4(d){this.a=d},
bjM:function bjM(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aaS:function aaS(d,e,f){this.a=d
this.b=e
this.c=f},
Vv:function Vv(d){this.a=d},
bj7:function bj7(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fj$=i
_.kX$=j
_.fP$=k
_.fk$=l
_.bq$=m
_.a7$=n
_.c=_.a=null},
eAr:function eAr(d){this.a=d},
eAs:function eAs(d){this.a=d},
eAq:function eAq(d){this.a=d},
eAg:function eAg(d,e){this.a=d
this.b=e},
eAh:function eAh(d){this.a=d},
eAe:function eAe(d){this.a=d},
eAf:function eAf(d){this.a=d},
eAd:function eAd(d){this.a=d},
eA6:function eA6(d){this.a=d},
eA7:function eA7(d){this.a=d},
eA5:function eA5(d){this.a=d},
eAi:function eAi(d,e){this.a=d
this.b=e},
eAc:function eAc(d,e){this.a=d
this.b=e},
eAj:function eAj(d,e){this.a=d
this.b=e},
eAb:function eAb(d,e){this.a=d
this.b=e},
eAk:function eAk(d){this.a=d},
eAa:function eAa(d){this.a=d},
eAl:function eAl(d){this.a=d},
eA9:function eA9(d,e){this.a=d
this.b=e},
eAm:function eAm(d){this.a=d},
eA8:function eA8(d,e){this.a=d
this.b=e},
eAn:function eAn(d){this.a=d},
eA4:function eA4(d,e){this.a=d
this.b=e},
eAo:function eAo(d){this.a=d},
eA3:function eA3(d,e){this.a=d
this.b=e},
eAp:function eAp(d){this.a=d},
eA2:function eA2(d,e){this.a=d
this.b=e},
brb:function brb(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
abk:function abk(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
TD:function TD(d){this.a=d},
aBu:function aBu(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=1
_.x=g
_.Q=_.z=_.y=!1
_.as=0
_.at=null
_.ax=0
_.fj$=h
_.kX$=i
_.fP$=j
_.fk$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
dE2:function dE2(d){this.a=d},
dE1:function dE1(d,e){this.a=d
this.b=e},
dE3:function dE3(){},
dE4:function dE4(d){this.a=d},
dDT:function dDT(d,e){this.a=d
this.b=e},
dDW:function dDW(d){this.a=d},
dDV:function dDV(d,e){this.a=d
this.b=e},
dDU:function dDU(d,e){this.a=d
this.b=e},
dE_:function dE_(d,e,f){this.a=d
this.b=e
this.c=f},
dDZ:function dDZ(d){this.a=d},
dDX:function dDX(d){this.a=d},
dDY:function dDY(d){this.a=d},
dE0:function dE0(d){this.a=d},
b9g:function b9g(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cJA:function cJA(d){this.a=d},
aJY:function aJY(){},
bvm:function bvm(){},
aKN:function aKN(){},
bvD:function bvD(){},
aL1:function aL1(){},
bvL:function bvL(){},
Fk:function Fk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
ac9:function ac9(d,e,f){this.a=d
this.b=e
this.c=f},
V_:function V_(d){this.a=d},
biH:function biH(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fj$=i
_.kX$=j
_.fP$=k
_.fk$=l
_.bq$=m
_.a7$=n
_.c=_.a=null},
eaH:function eaH(d,e){this.a=d
this.b=e},
eb5:function eb5(d){this.a=d},
eaV:function eaV(d){this.a=d},
eaM:function eaM(d){this.a=d},
eaW:function eaW(d,e){this.a=d
this.b=e},
eaX:function eaX(d){this.a=d},
eaL:function eaL(d){this.a=d},
eaT:function eaT(d){this.a=d},
eaU:function eaU(d){this.a=d},
eaS:function eaS(d){this.a=d},
eaY:function eaY(d,e){this.a=d
this.b=e},
eaR:function eaR(d,e){this.a=d
this.b=e},
eaZ:function eaZ(d,e){this.a=d
this.b=e},
eaQ:function eaQ(d,e){this.a=d
this.b=e},
eb_:function eb_(d,e){this.a=d
this.b=e},
eaP:function eaP(d,e){this.a=d
this.b=e},
eb0:function eb0(d){this.a=d},
eaO:function eaO(d,e){this.a=d
this.b=e},
eb1:function eb1(d){this.a=d},
eaN:function eaN(d){this.a=d},
eb2:function eb2(d){this.a=d},
eaK:function eaK(d){this.a=d},
eb3:function eb3(d){this.a=d},
eaJ:function eaJ(d){this.a=d},
eb4:function eb4(d){this.a=d},
eaI:function eaI(d){this.a=d},
bgj:function bgj(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
acE:function acE(d,e){this.a=d
this.b=e
this.c=-1000},
V4:function V4(d){this.a=d},
aCT:function aCT(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=!1
_.r=f
_.w=g
_.x=80
_.y="Pentatonic"
_.z="bell"
_.Q=!0
_.fj$=h
_.kX$=i
_.fP$=j
_.fk$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
eeB:function eeB(d,e){this.a=d
this.b=e},
eeC:function eeC(d,e,f){this.a=d
this.b=e
this.c=f},
eeJ:function eeJ(d){this.a=d},
eeI:function eeI(d){this.a=d},
eeK:function eeK(d,e){this.a=d
this.b=e},
eeL:function eeL(d){this.a=d},
eeH:function eeH(d){this.a=d},
eeM:function eeM(d){this.a=d},
eeG:function eeG(d,e){this.a=d
this.b=e},
eeN:function eeN(d,e){this.a=d
this.b=e},
eeF:function eeF(d,e){this.a=d
this.b=e},
eeO:function eeO(d,e){this.a=d
this.b=e},
eeE:function eeE(d,e){this.a=d
this.b=e},
eeP:function eeP(d){this.a=d},
eeQ:function eeQ(d){this.a=d},
eeD:function eeD(d){this.a=d},
eeR:function eeR(d){this.a=d},
bjN:function bjN(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aKL:function aKL(){},
bvB:function bvB(){},
aKM:function aKM(){},
bvC:function bvC(){},
f7V(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a7i,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.A(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ix,w,w,1/0)},
hWi(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.T(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.L)(d),++u){t=d[u]
s=v.h(0,t)
v.n(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gM(j))return!1
for(j=j.gdK(j),j=j.gae(j);j.C();){s=j.gS(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.c2(d.length,0,!1,w)
q=d.length
p=J.e3(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bH(0,new B.fqW(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.vN.h(0,d[n]).a)return!1
m=C.ew([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.L)(j),++u){k=j[u]
if(m.K(0,k))l.push(k)}return m.a===d.length},
fUH(d){var w="TCAG",v=C.aK(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[A.a.cJ(w,v[0])*16+A.a.cJ(w,v[1])*4+A.a.cJ(w,v[2])]},
t3:function t3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b89:function b89(d,e){this.a=d
this.b=e},
fqW:function fqW(d,e){this.a=d
this.b=e},
V2:function V2(d){this.a=d},
aCR:function aCR(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
ee5:function ee5(d){this.a=d},
ee4:function ee4(d,e){this.a=d
this.b=e},
edS:function edS(d,e){this.a=d
this.b=e},
edM:function edM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
edN:function edN(d){this.a=d},
edR:function edR(d,e){this.a=d
this.b=e},
edQ:function edQ(d,e){this.a=d
this.b=e},
edO:function edO(d){this.a=d},
edP:function edP(d,e){this.a=d
this.b=e},
ee_:function ee_(){},
ee0:function ee0(d){this.a=d},
edZ:function edZ(d){this.a=d},
ee1:function ee1(d){this.a=d},
edY:function edY(d){this.a=d},
edW:function edW(d){this.a=d},
edX:function edX(d,e){this.a=d
this.b=e},
edT:function edT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edV:function edV(d){this.a=d},
ee2:function ee2(d,e){this.a=d
this.b=e},
edU:function edU(d,e){this.a=d
this.b=e},
ee3:function ee3(d,e){this.a=d
this.b=e},
bh0:function bh0(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dmI:function dmI(d,e){this.a=d
this.b=e},
U0:function U0(d){this.a=d},
bhX:function bhX(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dMP:function dMP(d){this.a=d},
dMO:function dMO(d,e){this.a=d
this.b=e},
dME:function dME(d){this.a=d},
dMD:function dMD(){},
dMF:function dMF(d){this.a=d},
dMC:function dMC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dMN:function dMN(){},
dMI:function dMI(){},
dMJ:function dMJ(d,e){this.a=d
this.b=e},
dMH:function dMH(d,e){this.a=d
this.b=e},
dMK:function dMK(d){this.a=d},
dMG:function dMG(d){this.a=d},
dML:function dML(d,e){this.a=d
this.b=e},
dMM:function dMM(d,e){this.a=d
this.b=e},
Ug:function Ug(d){this.a=d},
aBY:function aBY(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=0
_.z=_.y=_.x=1
_.as=_.Q=0
_.at="Grass feeds rabbits, rabbits feed foxes. Keep all three alive!"
_.bq$=g
_.a7$=h
_.c=_.a=null},
dPE:function dPE(d){this.a=d},
dPD:function dPD(d,e){this.a=d
this.b=e},
dPr:function dPr(){},
dPq:function dPq(d,e){this.a=d
this.b=e},
dPs:function dPs(d){this.a=d},
dPw:function dPw(d){this.a=d},
dPv:function dPv(d,e){this.a=d
this.b=e},
dPx:function dPx(d){this.a=d},
dPu:function dPu(d,e){this.a=d
this.b=e},
dPy:function dPy(d){this.a=d},
dPt:function dPt(d,e){this.a=d
this.b=e},
dPz:function dPz(d){this.a=d},
dPA:function dPA(d){this.a=d},
dPB:function dPB(d){this.a=d},
dPC:function dPC(d){this.a=d},
bck:function bck(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d24:function d24(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d26:function d26(d,e,f){this.a=d
this.b=e
this.c=f},
d25:function d25(d,e){this.a=d
this.b=e},
aKb:function aKb(){},
byx(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),A.q,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a7i,w,w,w),1)],s)
if(f!=null)A.d.v(r,C.a([A.ab,f],s))
return C.p(w,C.A(r,A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ix,w,w,1/0)},
fkP(d,e,f,g,h){var w,v,u=null,t=C.i1(u,u,u,u,C.dn(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),e),A.a4,A.cc,u,A.eh,A.ca)
t.eI()
w=t.b
v=w.c
w=w.a.c
w=f.aC(0,new C.u(v/2,w.gbd(w)/2))
t.a5(d,w)},
hTn(){var w,v,u,t,s,r,q,p,o=new C.eJ()
o.dB(42)
w=C.a([],x.gh)
for(v=x.S,u=x.u,t=0;t<12;++t){s=1+A.o.an(t,4)
r=C.aX(v)
q=C.a([],u)
while(q.length<s){p=1+o.aB(5)
if(r.K(0,p))q.push(new C.y(p,1+o.aB(2+A.o.an(t,3))))}A.d.b_(q,new B.flO())
w.push(new B.aQy(q))}return w},
a0X(d,e){var w,v,u,t
for(w=new C.WC(d),v="";w.C();){u=C.jE(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jE(65+A.o.G(A.o.G(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
i50(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aK(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.WC(d),v=0,u="";w.C();){t=C.jE(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=A.o.G(v,p)
u+=C.jE(65+A.o.G(A.o.G(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aQy:function aQy(d){this.a=d},
bEB:function bEB(){},
flO:function flO(){},
Tv:function Tv(d){this.a=d},
bhB:function bhB(d,e,f,g,h,i){var _=this
_.d=d
_.e=0
_.f=e
_.r=f
_.w=0
_.x=$
_.y=g
_.bq$=h
_.a7$=i
_.c=_.a=null},
dAd:function dAd(){},
dAq:function dAq(d){this.a=d},
dAp:function dAp(d,e,f){this.a=d
this.b=e
this.c=f},
dAr:function dAr(d){this.a=d},
dAo:function dAo(d,e){this.a=d
this.b=e},
dAe:function dAe(d,e){this.a=d
this.b=e},
dAj:function dAj(){},
dAk:function dAk(d){this.a=d},
dAi:function dAi(d){this.a=d},
dAl:function dAl(d,e){this.a=d
this.b=e},
dAh:function dAh(d,e){this.a=d
this.b=e},
dAm:function dAm(d,e){this.a=d
this.b=e},
dAg:function dAg(d,e){this.a=d
this.b=e},
dAn:function dAn(d){this.a=d},
dAf:function dAf(d){this.a=d},
b8l:function b8l(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cC7:function cC7(d,e){this.a=d
this.b=e},
Uu:function Uu(d){this.a=d},
bi8:function bi8(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bq$=g
_.a7$=h
_.c=_.a=null},
dTH:function dTH(d){this.a=d},
dTG:function dTG(d,e){this.a=d
this.b=e},
dTI:function dTI(d){this.a=d},
dTF:function dTF(d,e){this.a=d
this.b=e},
dTx:function dTx(d,e,f){this.a=d
this.b=e
this.c=f},
dTB:function dTB(d){this.a=d},
dTA:function dTA(d){this.a=d},
dTC:function dTC(d,e){this.a=d
this.b=e},
dTz:function dTz(d,e){this.a=d
this.b=e},
dTD:function dTD(d){this.a=d},
dTy:function dTy(d,e){this.a=d
this.b=e},
dTE:function dTE(d,e){this.a=d
this.b=e},
bdO:function bdO(d,e,f){this.b=d
this.c=e
this.a=f},
d9Q:function d9Q(d,e){this.a=d
this.b=e},
d9R:function d9R(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
TE:function TE(d){this.a=d},
bhO:function bhO(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dEp:function dEp(d){this.a=d},
dEo:function dEo(d,e){this.a=d
this.b=e},
dE7:function dE7(){},
dEg:function dEg(d){this.a=d},
dEf:function dEf(){},
dEh:function dEh(d){this.a=d},
dEe:function dEe(){},
dEi:function dEi(d){this.a=d},
dEd:function dEd(d){this.a=d},
dEj:function dEj(d){this.a=d},
dEc:function dEc(d){this.a=d},
dEk:function dEk(d){this.a=d},
dEb:function dEb(d){this.a=d},
dEl:function dEl(d,e){this.a=d
this.b=e},
dEa:function dEa(d,e){this.a=d
this.b=e},
dEm:function dEm(d){this.a=d},
dE9:function dE9(d,e){this.a=d
this.b=e},
dEn:function dEn(d){this.a=d},
dE8:function dE8(d,e){this.a=d
this.b=e},
aJQ:function aJQ(){},
aKj:function aKj(){},
hjx(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aC(0,e).gco()*0.1
return new C.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h_K(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new B.a3B(w,v,u,A.cI,C.T(x.N,x.y))},
hr3(d,e,f){var w=d.c,v=e===0?-1:1
return new C.u(w*f.a+v*B.h_L(d),d.d*f.b)},
h_L(d){return 42+(D.lS.ai(0,d.b)?(d.ch-1)*38:0)},
e9:function e9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tg:function tg(d,e,f,g){var _=this
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
a9t:function a9t(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aax:function aax(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3B:function a3B(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bKu:function bKu(){},
bKF:function bKF(d){this.a=d},
bKA:function bKA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKG:function bKG(d){this.a=d},
bKH:function bKH(d){this.a=d},
bKJ:function bKJ(d){this.a=d},
bKK:function bKK(d){this.a=d},
bKI:function bKI(d){this.a=d},
bKL:function bKL(d,e,f){this.a=d
this.b=e
this.c=f},
bKM:function bKM(d){this.a=d},
bKw:function bKw(d){this.a=d},
bKx:function bKx(d){this.a=d},
bKv:function bKv(d){this.a=d},
bKy:function bKy(d,e,f){this.a=d
this.b=e
this.c=f},
bKz:function bKz(d){this.a=d},
bKt:function bKt(d){this.a=d},
bKN:function bKN(d,e){this.a=d
this.b=e},
bKB:function bKB(d,e){this.a=d
this.b=e},
bKE:function bKE(d){this.a=d},
bKD:function bKD(d){this.a=d},
bKC:function bKC(d){this.a=d},
ahI:function ahI(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bFN:function bFN(){},
bFO:function bFO(){},
mv:function mv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cj6:function cj6(d){this.a=d},
i2F(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new B.fCk(),c9=new B.fCm(),d0=new B.fCn(),d1=new B.fCl(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aD(w,d1.$3(new C.a9(w.a,w.b,w.c,w.d),A.bM,A.bJ))
d3.bA(D.e1Q,D.e_E,c9.$2(A.dA,1.4))
d3.bA(D.e_u,D.e_t,c9.$2(A.bv,2.4))
d3.bA(D.e_v,W.aFp,c9.$2(A.bv,2.4))
if(c7){d2=c8.$1(A.fg.j(0.5))
d2.z=A.Qx
d3.ah(D.e_e,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.G(d2+v/3,1)
d6.$5(d3,"\u2744",new C.u(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aD(d0.$4(-22,-26,44,50),d1.$3(D.aLc,A.aQ,A.cp))
d3.ah(A.cJ,16,c8.$1(A.bv))
d3.ah(A.cJ,13,c8.$1(c7?A.aT.j(0.85):A.M))
if(c7){d2=d3.a
J.bA(d2.save())
d2.translate(0,4)
d3.iW(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.ad,3).H()
d2.drawLine.apply(d2,[0,0,s*11,t*11,r])
r.delete()}d2.restore()
for(t=d5*0.8,v=0;v<4;++v){u=A.k.G(t+v*0.25,1)
s=Math.sin(v*2+d5)
r=c8.$1(A.c.j(0.8*(1-u))).H()
d2.drawCircle(s*9,4-u*12,1.6+u*2,r)
r.delete()}}d3.ah(D.e1M,2.4,c8.$1(c7?A.bo:A.ak))
d3.ah(D.e2t,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aD(d0.$5(-14,14,28,12,4),c8.$1(A.eu))
d2=$.X().r
t=x.v
q=new C.aP(d2,A.ap,c6,c6,C.a([],t))
q.E(new C.b5(-16,-26))
q.E(new C.ap(16,-26))
q.E(new C.ap(12,14))
q.E(new C.ap(-12,14))
q.E(new C.bF())
d3.aP(q,c8.$1(A.fg.j(0.35)))
if(c7){d2=new C.aP(d2,A.ap,c6,c6,C.a([],t))
d2.E(new C.b5(-14,-10))
d2.E(new C.ap(14,-10))
d2.E(new C.ap(12,14))
d2.E(new C.ap(-12,14))
d2.E(new C.bF())
d3.aP(d2,c8.$1(A.ay.j(0.7)))}d3.aP(q,c9.$2(A.ad,1.6))
d2=d3.a
J.bA(d2.save())
d2.translate(0,10)
d3.iW(0,d4.y)
d3.bA(D.a4s,D.aFF,c9.$2(A.bR,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.G(s+v*0.33,1)
r=c8.$1(A.f3).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aD(d0.$5(-10,-4,20,10,4),c8.$1(A.aK))
d3.ah(A.ig,3,c8.$1(c7?A.bo:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a2f[m]
r=c9.$2(A.bv,3).H()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.bA(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).H()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=C.co(A.J,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).H()
d2.drawOval(C.c1(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new C.aP($.X().r,A.ap,c6,c6,C.a([],x.v))
w.E(new C.b5(-24,-12))
w.E(new C.ap(10,-12))
w.E(new C.ap(10,2))
w.E(new C.ap(-2,2))
w.E(new C.ap(-6,22))
w.E(new C.ap(-16,22))
w.E(new C.ap(-14,2))
w.E(new C.ap(-24,2))
w.E(new C.bF())
d3.aP(w,d1.$3(D.eF_,A.aM,A.d9))
d3.aX(D.eEp,c8.$1(A.dz))
d2=d3.a
J.bA(d2.save())
d2.translate(18,-5)
d3.iW(0,d4.y*2)
d3.bA(A.J,D.e_y,c9.$2(A.bR,2.4))
d3.bA(A.a4r,D.e_x,c9.$2(A.hG,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.G(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dN.j(1-u)).H()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new C.aP($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(16,-6))
d2.E(new C.ap(52,-26))
d2.E(new C.ap(52,18))
d2.E(new C.ap(16,4))
d2.E(new C.bF())
d3.aP(d2,c8.$1(A.bK.j(0.35*v)))}d3.aD(d0.$5(-26,-6,30,12,3),d1.$3(D.eF5,A.bn,A.cC))
k=new C.aP($.X().r,A.ap,c6,c6,C.a([],x.v))
k.E(new C.b5(4,-6))
k.E(new C.ap(18,-12))
k.E(new C.ap(18,12))
k.E(new C.ap(4,6))
k.E(new C.bF())
d3.aP(k,c8.$1(A.eu))
d3.ah(D.e_C,7,c8.$1(c7?A.c:A.dz))
return!0
case"neon":d3.aD(d0.$5(-30,-14,60,28,6),c8.$1(M.nI))
if(c7)j=d4.ax>0.5||A.o.G(A.k.bu(d5*17),3)!==0
else j=!1
i=j?A.bU:D.bfz
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.bU.j(0.35))
t.z=A.ll
d3.aD(d2,t)}d3.aD(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.e1W,i,17)
return!0
case"microwave":d3.aD(d0.$4(-30,-18,60,38),d1.$3(D.eFb,A.bR,A.bn))
d2=d0.$5(-26,-14,38,30,3)
d3.aD(d2,c8.$1(c7?A.bK.j(0.75):A.aB))
if(c7){d2=d3.a
J.bA(d2.save())
d2.translate(-7,8)
d3.iW(0,d4.y*0.5)
d3.hM(C.co(A.J,7,22),c8.$1(A.d9))
d2.restore()}d3.aD(d0.$5(15,-14,12,12,2),c8.$1(M.nI))
if(c7)d6.$5(d3,"0:"+A.a.aT(A.o.u(59-A.o.G(A.k.bu(d5),60)),2,"0"),D.e_D,A.b7,6.5)
d3.ah(D.e_P,4,c8.$1(A.dz))
return!0
case"doorbell":d3.aD(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.ah(A.Rl,10,c8.$1(c7?A.co:A.bv))
d2=d3.a
J.bA(d2.save())
d2.translate(0,-8)
d3.iW(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.e2v,A.c,16)
d2.restore()
d3.ah(A.k1,6,c8.$1(A.d6))
d3.ah(A.k1,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bT(A.Rl,14+v*6+A.k.G(t,6))
r=c9.$2(A.co.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c1(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bA(D.e1V,D.e2r,c9.$2(A.bv,4))
d2=d3.a
J.bA(d2.save())
d3.iW(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aD(d0.$5(-24,-14,46,22,5),d1.$3(D.eF0,A.bR,A.ak))
d3.ah(D.aFr,8,c8.$1(A.aB))
d3.ah(D.aFr,4.5,c8.$1(c7?A.aT:A.cC))
d3.ah(D.e1T,2.2,c8.$1(c7&&A.o.G(A.k.bu(d5*1.6),2)===0?A.ay:A.kc))
d2.restore()
if(c7)d6.$5(d3,"REC",D.e23,A.ay,9)
return!0
case"console":d3.aD(d0.$5(-28,-22,56,44,8),d1.$3(D.eF8,A.j8,A.f6))
d3.aD(d0.$5(-20,-17,40,22,3),c8.$1(A.dK))
if(c7){d2=d5*2.3
d3.ah(new C.u(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aX(new C.a9(-18,t,-15.6,t+8),c8.$1(A.b7))
d2=-9+Math.sin(d2-0.4)*6
d3.aX(new C.a9(15.6,d2,18,d2+8),c8.$1(A.bU))}d3.ah(D.e1P,4,c8.$1(A.aX))
d3.ah(D.e_z,2.4,c8.$1(A.ay))
d3.ah(D.e_M,2.4,c8.$1(A.bo))
return!0
case"heartmon":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(A.aB))
d3.aD(d0.$5(-26,-18,52,28,3),c8.$1(A.dK))
if(c7){d2=$.X()
t=C.a([],x.v)
h=new C.aP(d2.r,A.ap,c6,c6,t)
for(d2=d5*0.5,l=-25;l<=25;++l){u=A.k.G((l+25)/50-d2,1)
if(u<0.1)g=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)g=0.6
else{s=u<0.2?-0.4:0
g=s}f=-4+g*11
if(l===-25){s=new C.b5(l,f)
t.push(s)
p=h.f
if(p!=null)s.bx(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new C.ap(l,f)
t.push(s)
p=h.f
if(p!=null)s.bx(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aP(h,c9.$2(A.b7,1.8))
d6.$5(d3,"72",D.e_A,A.h_,11)
d2=d5*9
d6.$5(d3,"\u2665",D.e27,A.h_.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ah(D.e1Y,3,c8.$1(c7?A.bo:A.bv))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aD(d2,c8.$1(A.cy.j(c7?0.5:0.3)))
d3.aD(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.aX(D.eF2,c8.$1(F.t1))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bA(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.rX(0,-1,1)
d3.hM(C.co(A.J,8,14),c8.$1(A.ct))
d2=new C.aP($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-6,0))
d2.E(new C.ap(-12,-4))
d2.E(new C.ap(-12,4))
d2.E(new C.bF())
d3.aP(d2,c8.$1(A.cd))
d3.ah(D.e0g,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.G(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.G(v,2)
r=c9.$2(A.ad,1).H()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.X().r
t=x.v
e=new C.aP(d2,A.ap,c6,c6,C.a([],t))
e.E(new C.b5(-9,22))
e.E(new C.ap(-5,-16))
e.E(new C.ap(5,-16))
e.E(new C.ap(9,22))
e.E(new C.bF())
d3.aP(e,d1.$3(D.eFw,A.c,A.bI))
d3.aX(D.eFv,c8.$1(c7?A.dN:A.bv))
s=new C.aP(d2,A.ap,c6,c6,C.a([],t))
s.E(new C.b5(-7,-22))
s.E(new C.ap(0,-29))
s.E(new C.ap(7,-22))
s.E(new C.bF())
d3.aP(s,c8.$1(A.er))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aP(d2,A.ap,c6,c6,C.a([],t))
d2.E(new C.b5(0,-19))
t=d*34
d2.E(new C.ap(t,-26))
d2.E(new C.ap(t,-12))
d2.E(new C.bF())
d3.aP(d2,c8.$1(A.dN.j(0.45)))
d2=c8.$1(A.dN.j(0.35))
d2.z=A.Qx
d3.ah(D.e_f,14,d2)}return!0
case"discoball":d3.bA(D.e_k,L.aFn,c9.$2(A.dz,1.4))
d3.ah(A.J,16,d1.$3(D.eEO,A.aQ,A.ak))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.dn,0.7).H()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.dn,0.7).H()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.G(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.d1D[A.o.G(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aD(d0.$5(-14,-4,28,24,5),d1.$3(D.eEM,A.cp,A.ak))
d3.aD(d0.$5(-12,-26,24,20,5),d1.$3(D.eEF,A.aL,A.bJ))
d3.bA(D.e_j,D.e_l,c9.$2(A.bv,1.6))
d3.ah(D.e_m,2.2,c8.$1(c7?A.ay:A.bv))
a1=c7&&A.k.G(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a2g[m]
if(c7)t=a1?A.b8:A.fh
else t=A.cC
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bA(d2.save())
d2.translate(14,0)
d3.iW(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bA(A.J,D.a4o,c9.$2(A.bJ,4))
d2.restore()
d3.bA(D.e1I,D.e21,c9.$2(A.bJ,4))
d3.aX(D.eFu,c8.$1(c7?A.b8.j(0.7):A.aK))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.awt[m]+1,d2,10,14,2)
p=C.aq(A.bK,A.d9,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.eq(s),r)
r.delete()}d3.aD(d0.$5(-24,-6,48,26,8),d1.$3(D.eF1,A.bR,A.bn))
for(m=0;m<2;++m){l=D.awt[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fC:A.aB).H()
t.drawRRect(C.eq(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.ct.j(0.5))
s.z=G.mu
r=s.H()
t.drawRRect(C.eq(d2),r)
r.delete()}}d3.bA(D.e_T,D.e09,c9.$2(A.aB,3))
return!0
case"ledstrip":d3.aD(d0.$5(-34,-4,68,10,4),c8.$1(A.cC))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.G(t+v*40,360)
i=c7?new H.mM(1,a3,0.8,1).iG():A.eu
if(c7){s=c8.$1(i.j(0.45))
s.z=G.mu
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aD(d0.$5(-40,-2,6,6,1),c8.$1(A.dz))
return!0
case"pump":d3.aD(d0.$5(-16,-2,32,22,6),d1.$3(D.eER,A.cy,A.Kq))
d3.ah(D.e28,8,c8.$1(A.qF))
d2=d3.a
J.bA(d2.save())
d2.translate(-2,9)
d3.iW(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.fg,2.4).H()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new C.aP($.X().r,A.ap,c6,c6,C.a([],x.v))
t.E(new C.b5(16,6))
t.E(new C.ap(26,6))
t.E(new C.ap(26,-20))
t.E(new C.ap(10,-20))
d3.aP(t,c9.$2(A.bJ,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.G(t+v*0.2,1)
r=c8.$1(A.hi).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ah(D.e0H,3.2,c8.$1(A.hi.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bA(d2.save())
d3.iW(0,-0.15)
d3.aD(d0.$5(-26,-14,40,22,10),d1.$3(D.eF3,A.j4,A.t4))
d3.aD(d0.$5(14,-10,12,14,3),c8.$1(A.cC))
d3.aD(d0.$5(-10,6,12,22,4),c8.$1(A.eu))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.G(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.ct.j(0.4))
d2.z=G.mu
d3.ah(D.e_O,8,d2)}return!0
case"headphones":d3.f4(C.co(A.dD,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bv,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=D.awu[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new C.a9(s,0,s+14,20),A.by,A.pl).H()
d2.drawRRect(C.eq(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=C.bT(new C.u(l,10),10+v*5+A.k.G(t,5))
o=s?2.2:-0.9
r=c9.$2(A.ez.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[C.c1(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new C.u(-4,-8-A.k.G(d5*14,8)),A.k9,12)
return!0
case"smartwatch":d3.aD(d0.$5(-8,-30,16,14,3),c8.$1(A.cC))
d3.aD(d0.$5(-8,14,16,14,3),c8.$1(A.cC))
d3.aD(d0.$5(-14,-17,28,32,8),d1.$3(D.eEK,A.dz,A.eu))
d3.aD(d0.$5(-11,-14,22,26,6),c8.$1(A.dK))
if(c7){a4=new C.S(Date.now(),0,!1)
d6.$5(d3,A.a.aT(A.o.u(C.di(a4)),2,"0")+":"+A.a.aT(A.o.u(C.fY(a4)),2,"0"),D.e_q,A.b7,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.aq(A.DU,A.h_,g)
d2.toString
d6.$5(d3,"\u2665",new C.u(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.G(A.k.bu(d5*2),6)),A.dD,A.c,7)}return!0
case"tablet":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(M.nI))
d3.aD(d0.$5(-30,-22,60,44,6),c9.$2(A.bJ,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.eq(a5),$.pl(),!0)
d2.translate(-27,-19)
E.KF(d3,D.eKM,d5,c6)
d2.restore()}else d3.aD(a5,c8.$1(D.uY))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aD(a6,d1.$3(new C.a9(a6.a,a6.b,a6.c,a6.d),A.dS,A.dq))
d3.aD(a6,c9.$2(A.b2,1.2))
d3.ah(D.aFM,9,c8.$1(A.aB))
d3.ah(D.aFM,6,c9.$2(A.d9,2))
d3.aD(d0.$5(4,-2,14,10,2),c8.$1(A.aB))
d3.aD(d0.$5(-22,-19,44,12,2),c8.$1(A.dK))
d2=A.k.aa(d4.db,1)
t=A.k.aa(c7?d4.dx:d4.e,1)
s=c7?A.b7:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.e0L,s,8.2)
d3.ah(D.e_F,2.4,c8.$1(c7?A.bo:A.aK))
d6.$5(d3,"IN",D.e22,A.ad,6)
d6.$5(d3,"OUT",D.e0z,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.aq(A.bJ,A.ay,a7)
t.toString
d3.aD(d2,c8.$1(t))
d3.ah(D.e_g,3,c8.$1(A.aK))
d3.aD(d0.$5(-12,-4,24,18,3),d1.$3(D.eEG,A.eu,A.hD))
d6.$5(d3,"7805",D.a4s,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.d7a[m]-1
r=c8.$1(A.e_).H()
d2.drawRect(C.c1(new C.a9(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.G(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.e2u,A.bh,9)
return!0
case"diode":d3.bA(D.aFQ,D.aFA,c9.$2(A.e_,2.4))
d3.aD(d0.$5(-14,-7,28,14,6),c8.$1(A.aH.j(0.85)))
d3.aX(D.eEv,c8.$1(A.bh))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dN.j(0.4))
t.z=A.jk
d3.aD(d2,t)}d2=new C.aP($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-8,-4))
d2.E(new C.ap(-8,4))
d2.E(new C.ap(-1,0))
d2.E(new C.bF())
d3.aP(d2,c8.$1(A.aX))
d6.$5(d3,"one way",D.e1R,A.az,8)
return!0
case"ldr":d3.bA(D.aFQ,D.a4s,c9.$2(A.e_,2.4))
d3.bA(D.aFF,D.aFA,c9.$2(A.e_,2.4))
d3.ah(A.J,12,c8.$1(A.d9))
d3.ah(A.J,12,c9.$2(A.td,1.6))
d2=$.X()
t=C.a([],x.v)
a8=new C.aP(d2.r,A.ap,c6,c6,t)
a8.E(new C.b5(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new C.ap(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bx(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aP(a8,c9.$2(A.bK,1.4))
d2=C.aq(A.bv,A.dN,d4.f)
d2.toString
d6.$5(d3,"\u2600",new C.u(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.e1J,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.e8
break A}if("sonytv"===d2){t=A.qy
break A}if("appletv"===d2){t=A.e_
break A}t=F.DW
break A}a9=d2==="lgtv"||d2==="appletv"
d3.aD(d0.$5(-36,-24,72,a9?42:44,6),c8.$1(t))
t=a9?-35:-33
s=a9?-23:-21
p=a9?70:66
a5=d0.$5(t,s,p,a9?40:38,3)
t=a5.a
s=a5.b
if(c7){p=d3.a
J.bA(p.save())
p.clipRRect(C.eq(a5),$.pl(),!0)
p.translate(t,s)
E.fX1(d3,new C.at(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ah(D.e0a,1.6,c8.$1(A.b7))}else{d3.aD(a5,c8.$1(D.uY))
p=new C.aP($.X().r,A.ap,c6,c6,C.a([],x.v))
p.E(new C.b5(t,s))
p.E(new C.ap(t+24,s))
p.E(new C.ap(t,s+22))
p.E(new C.bF())
d3.aP(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aD(d0.$5(-22,19,44,3,1.5),c8.$1(A.dz))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=F.oO[m]
s=$.X()
p=C.a([],t)
s=new C.aP(s.r,A.ap,c6,c6,p)
p.push(new C.b5(l*30,20))
p.push(new C.ap(l*22,20))
p.push(new C.ap(l*26,26))
p.push(new C.bF())
r=c8.$1(A.dz).H()
p=s.gbI().a.snapshot()
d2.drawPath((s.e=new C.cF(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.e1m,A.bR,5.5)
break
case"appletv":d2=new C.aP($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-8,18))
d2.E(new C.ap(8,18))
d2.E(new C.ap(12,25))
d2.E(new C.ap(-12,25))
d2.E(new C.bF())
d3.aP(d2,c8.$1(D.Wb))
d6.$5(d3,"Apple TV",D.e0M,A.bv,4.8)
break
default:d3.aD(d0.$5(-34,19,68,7,3),c8.$1(D.be5))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dn,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.e2q,F.t1,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.lS.h(0,d2)
b1=b0.b===D.w0
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
J.bA(t.save())
t.clipRRect(C.eq(a5),$.pl(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.KF(d3,new C.at(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aD(a5,c8.$1(D.uY))
if(b1){t=a5.b
s=a5.d
d3.bA(new C.u(0,t),new C.u(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aD(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ah(new C.u(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aD(d0.$5(-17,-28,34,52,4),c8.$1(A.eu))
d3.aD(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bR))
if(c7){d6.$5(d3,"NGMY",D.e2x,A.aB,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.G(v,4)===3?14:22
r=c8.$1(A.bn).H()
d2.drawRect(C.c1(new C.a9(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ah(A.aFl,1.6,c8.$1(A.aB))}return!0
case"laptop":d3.aD(d0.$5(-30,-28,60,42,4),d1.$3(D.eFc,A.cp,A.bn))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.eq(b8),$.pl(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.KF(d3,new C.at(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aD(b8,c8.$1(D.uY))
d2=new C.aP($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-38,16))
d2.E(new C.ap(38,16))
d2.E(new C.ap(34,21))
d2.E(new C.ap(-34,21))
d2.E(new C.bF())
d3.aP(d2,c8.$1(D.Wb))
d3.aD(d0.$5(-7,16,14,2,1),c8.$1(A.bn))
return!0
case"imac":d3.aD(d0.$5(-32,-28,64,46,5),d1.$3(D.eFg,A.bM,A.cp))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.eq(b9),$.pl(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.KF(d3,new C.at(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aD(b9,c8.$1(D.uY))
d3.ah(D.aFg,2,c8.$1(A.bJ))
d2=new C.aP($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(-6,18))
d2.E(new C.ap(6,18))
d2.E(new C.ap(10,26))
d2.E(new C.ap(-10,26))
d2.E(new C.bF())
d3.aP(d2,c8.$1(D.Wb))
return!0
case"monitor":d3.aD(d0.$5(-34,-28,68,40,3),c8.$1(A.e8))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.eq(c0),$.pl(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.KF(d3,new C.at(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aD(c0,c8.$1(D.uY))
d3.aX(D.eFm,c8.$1(A.bn))
d3.aD(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dz))
return!0
case"projector":if(c7){d2=new C.aP($.X().r,A.ap,c6,c6,C.a([],x.v))
d2.E(new C.b5(14,4))
d2.E(new C.ap(-32,-42))
d2.E(new C.ap(34,-42))
d2.E(new C.bF())
d3.aP(d2,c8.$1(A.dN.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.eq(c1),$.pl(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.KF(d3,new C.at(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aD(d0.$5(-26,-4,52,24,6),d1.$3(D.eF4,A.iN,A.dz))
d3.ah(D.aFq,7,c8.$1(A.aB))
d3.ah(D.aFq,4,c8.$1(c7?A.dN:A.cC))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dn,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aD(d0.$5(-34,-10,68,32,12),c8.$1(A.aB))
c2=d0.$5(-30,-20,60,28,8)
d3.aD(c2,c8.$1(M.nI))
d3.aD(c2,c9.$2(A.bv,1.2))
if(c7){c3=new C.aP($.X().r,A.ap,c6,c6,C.a([],x.v))
c3.E(new C.b5(-26,4))
c3.E(new C.cS(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new C.ap(22,-16))
d3.aP(c3,c9.$2(A.aT,2.2))
d2=A.k.G(d5*6,48)
d3.ah(new C.u(-26+d2,4-d2*0.1),2.4,c8.$1(A.b7))
d6.$5(d3,""+(88+A.o.G(A.k.bu(d5*2),5)),D.e0I,A.c,10)
d6.$5(d3,"km/h",D.e0F,A.az,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aD(c4,d1.$3(new C.a9(c4.a,c4.b,c4.c,c4.d),A.dz,A.eu))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.eq(c5),$.pl(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.KF(d3,new C.at(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.by.j(0.2))
d2.z=A.ll
d3.ah(A.J,26,d2)}else d3.aD(c5,c8.$1(A.M))
d3.bA(D.e2c,D.e2h,c9.$2(A.bn,4))
d3.bA(D.e0b,D.e0j,c9.$2(A.bn,4))
return!0}return!1},
fCk:function fCk(){},
fCm:function fCm(){},
fCn:function fCn(){},
fCl:function fCl(){},
fZE(d,e,f,g){return new B.ahG(d,g,f,e)},
F8(d,e,f){return new B.b9i(d,e,f)},
ahG:function ahG(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ahH:function ahH(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.fj$=h
_.kX$=i
_.fP$=j
_.fk$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
bFr:function bFr(d,e){this.a=d
this.b=e},
bFs:function bFs(d){this.a=d},
bFq:function bFq(d){this.a=d},
bFt:function bFt(){},
bFu:function bFu(d){this.a=d},
bFv:function bFv(d,e,f){this.a=d
this.b=e
this.c=f},
bFp:function bFp(d,e){this.a=d
this.b=e},
bFn:function bFn(d,e){this.a=d
this.b=e},
bFo:function bFo(d,e,f){this.a=d
this.b=e
this.c=f},
bFh:function bFh(d,e){this.a=d
this.b=e},
bFi:function bFi(){},
bFj:function bFj(d,e){this.a=d
this.b=e},
bFk:function bFk(d,e){this.a=d
this.b=e},
bFl:function bFl(d){this.a=d},
bFm:function bFm(d){this.a=d},
bFK:function bFK(d){this.a=d},
bFL:function bFL(){},
bEV:function bEV(){},
bFM:function bFM(d,e){this.a=d
this.b=e},
bFJ:function bFJ(d,e,f){this.a=d
this.b=e
this.c=f},
bFE:function bFE(d){this.a=d},
bFB:function bFB(d,e,f){this.a=d
this.b=e
this.c=f},
bFC:function bFC(d,e){this.a=d
this.b=e},
bFF:function bFF(d){this.a=d},
bFz:function bFz(d,e){this.a=d
this.b=e},
bFA:function bFA(d,e){this.a=d
this.b=e},
bFD:function bFD(d){this.a=d},
bFG:function bFG(d){this.a=d},
bFx:function bFx(d,e){this.a=d
this.b=e},
bFy:function bFy(d,e){this.a=d
this.b=e},
bFH:function bFH(d){this.a=d},
bFw:function bFw(d){this.a=d},
bFI:function bFI(d){this.a=d},
bEW:function bEW(d,e){this.a=d
this.b=e},
bFe:function bFe(d,e){this.a=d
this.b=e},
bFg:function bFg(d,e){this.a=d
this.b=e},
bFf:function bFf(d,e){this.a=d
this.b=e},
bF1:function bF1(d,e){this.a=d
this.b=e},
bF2:function bF2(d){this.a=d},
bF0:function bF0(d){this.a=d},
bF3:function bF3(d,e,f){this.a=d
this.b=e
this.c=f},
bF_:function bF_(d,e){this.a=d
this.b=e},
bF6:function bF6(d,e){this.a=d
this.b=e},
bF7:function bF7(d,e){this.a=d
this.b=e},
bF8:function bF8(d,e){this.a=d
this.b=e},
bF9:function bF9(d,e,f){this.a=d
this.b=e
this.c=f},
bEZ:function bEZ(d,e){this.a=d
this.b=e},
bFa:function bFa(d,e,f){this.a=d
this.b=e
this.c=f},
bEY:function bEY(d,e){this.a=d
this.b=e},
bFb:function bFb(d,e,f){this.a=d
this.b=e
this.c=f},
bEX:function bEX(d,e){this.a=d
this.b=e},
bFc:function bFc(d){this.a=d},
bFd:function bFd(d){this.a=d},
bF4:function bF4(d){this.a=d},
bF5:function bF5(d){this.a=d},
b9i:function b9i(d,e,f){this.a=d
this.b=e
this.c=f},
fbQ:function fbQ(){},
fbR:function fbR(){},
fbS:function fbS(){},
fbD:function fbD(){},
fbT:function fbT(){},
fbC:function fbC(){},
fbU:function fbU(){},
fbH:function fbH(){},
fbB:function fbB(){},
fbI:function fbI(){},
fbA:function fbA(){},
fbJ:function fbJ(){},
fbz:function fbz(){},
fbK:function fbK(){},
fbx:function fbx(){},
fby:function fby(){},
fbL:function fbL(){},
fbv:function fbv(){},
fbw:function fbw(){},
fbM:function fbM(){},
fbu:function fbu(){},
Uh:function Uh(d){this.a=d},
aBZ:function aBZ(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dPM:function dPM(d,e){this.a=d
this.b=e},
dPV:function dPV(d){this.a=d},
dPW:function dPW(){},
dPX:function dPX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPY:function dPY(){},
dPL:function dPL(d){this.a=d},
dPK:function dPK(d,e,f){this.a=d
this.b=e
this.c=f},
dPJ:function dPJ(d,e){this.a=d
this.b=e},
dPH:function dPH(d){this.a=d},
dPI:function dPI(){},
dPU:function dPU(d){this.a=d},
dPT:function dPT(d){this.a=d},
dPR:function dPR(d,e){this.a=d
this.b=e},
dPP:function dPP(d){this.a=d},
dPQ:function dPQ(){},
dPS:function dPS(d,e,f){this.a=d
this.b=e
this.c=f},
dPN:function dPN(d,e){this.a=d
this.b=e},
dPO:function dPO(){},
dQ_:function dQ_(d){this.a=d},
dQ0:function dQ0(d,e){this.a=d
this.b=e},
dPZ:function dPZ(){},
dQ1:function dQ1(d,e){this.a=d
this.b=e},
dQ2:function dQ2(d){this.a=d},
dQ3:function dQ3(d){this.a=d},
aw5:function aw5(d,e){this.c=d
this.a=e},
b7u:function b7u(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
czF:function czF(d){this.a=d},
b7t:function b7t(d,e){this.b=d
this.a=e},
czE:function czE(d){this.a=d},
awo:function awo(){},
awp:function awp(){},
aIm:function aIm(){},
bvp:function bvp(){},
i2G(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bT(A.vT,23)
$.X()
b8=C.M()
b8.r=A.aB.gp(0)
b9.ah(A.vT,25,b8)
b8=C.M()
b8.saq(D.ear.av(0,v))
b9.ah(A.vT,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.bh.gp(0)
o.c=A.o.G(u,5)===0?1.8:1
n=o.H()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.D(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=C.M()
r.r=A.bI.gp(0)
r.c=2
r.d=A.bO
b9.bA(A.vT,new C.u(b8*18,s*18-2),r)
r=C.M()
r.r=A.bh.gp(0)
b9.ah(A.vT,3,r)
c2.$5(b9,w?"V":"A",D.e2k,A.bh,12)
c2.$5(b9,w?A.k.aa(m,1)+" V":""+A.k.V(m*1000)+" mA",D.e1O,A.aB,9.5)
return!0
case"fan":b8=C.bz(D.eEC,A.hA)
$.X()
s=C.M()
s.r=A.bv.gp(0)
b9.aD(b8,s)
s=C.M()
s.r=A.ak.gp(0)
b9.aX(D.eFn,s)
s=C.M()
s.r=A.M.j(0.6).gp(0)
b9.ah(D.vU,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bA(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.co(A.aFk,18,10)
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.hi.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c1(s),n)
n.delete()
b8.restore()}b8=C.M()
b8.r=A.bm.gp(0)
b9.ah(D.vU,4,b8)
b8=C.M()
b8.b=A.ae
b8.c=2
b8.r=A.cp.gp(0)
b9.ah(D.vU,22,b8)
b8=C.M()
b8.b=A.ae
b8.c=0.8
b8.r=A.j9.gp(0)
b9.ah(D.vU,14,b8)
return!0
case"speaker":l=C.bz(D.aLc,A.ul)
$.X()
b8=C.M()
b8.saq(D.anq.av(0,new C.a9(l.a,l.b,l.c,l.d)))
b9.aD(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.M()
b8.saq(D.eaO.av(0,C.bT(A.cw,15)))
b9.ah(A.cw,14+k,b8)
b8=C.M()
b8.r=A.dz.gp(0)
b9.ah(A.cw,5,b8)
b8=C.M()
b8.r=A.bn.gp(0)
b9.ah(D.aFm,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bT(D.e_S,6+u*6+A.k.G(b8,6))
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.bU.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c1(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.bz(D.eFf,A.ul)
$.X()
b8=C.M()
b8.saq(D.bTk.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bz(D.aLe,A.ii)
s=C.M()
s.r=A.hD.gp(0)
b9.aD(b8,s)
if(b7){i=new C.S(Date.now(),0,!1)
h=C.Bv(i)<500?":":" "
g=A.a.aT(A.o.u(C.di(i)),2,"0")
f=A.a.aT(A.o.u(C.fY(i)),2,"0")
b8=C.M()
b8.r=A.b7.j(0.12).gp(0)
b9.aX(D.aLe,b8)
c2.$5(b9,g+h+f,D.e25,A.b7,21)}b8=C.M()
b8.r=A.cp.gp(0)
b9.ah(D.e24,2.4,b8)
b8=C.M()
b8.r=A.cp.gp(0)
b9.ah(D.e_W,2.4,b8)
return!0
case"calculator":j=C.bz(D.eEW,A.hd)
$.X()
b8=C.M()
b8.saq(D.bT3.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=C.bz(D.eEQ,A.hc)
s=C.M()
s.r=(b7?A.Wo:D.bg4).gp(0)
b9.aD(b8,s)
if(b7)c2.$5(b9,"3.14159",D.e1N,A.Vf,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.bz(new C.a9(q,s,q+6,r),A.RO)
$.X()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=(d===3?A.cd:A.bR).gp(0)
n=p.H()
b8.drawRRect(C.eq(q),n)
n.delete()}return!0
case"phone":j=C.bz(D.eEN,A.hd)
$.X()
b8=C.M()
b8.r=M.nI.gp(0)
b9.aD(j,b8)
b8=C.M()
b8.b=A.ae
b8.c=1.9
b8.r=D.aeY.gp(0)
b9.aD(j,b8)
a0=C.bz(D.eEE,A.hA)
if(b7){b8=C.M()
b8.saq(D.bUD.av(0,new C.a9(a0.a,a0.b,a0.c,a0.d)))
b9.aD(a0,b8)
b8=b9.a
J.bA(b8.save())
b8.clipRRect(C.eq(a0),$.pl(),!0)
b8.translate(-12,-25)
E.KF(b9,D.eKn,c1,b6)
b8.restore()
a1=A.k.G(c1*0.12,1)
b8=C.bz(D.eEB,A.hc)
s=C.M()
s.r=A.aX.gp(0)
b9.aD(b8,s)
s=C.M()
s.r=A.b7.gp(0)
b9.aX(new C.a9(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.e14,A.c,6)}else{b8=C.M()
b8.r=D.uY.gp(0)
b9.aD(a0,b8)}b8=C.bz(D.eFx,D.eaX)
s=C.M()
s.r=A.w.gp(0)
b9.aD(b8,s)
return!0
case"router":j=C.bz(D.eFe,A.rq)
$.X()
b8=C.M()
b8.saq(D.bTB.av(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=D.awu[a2]
s=a3<0?-4:4
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.cC.gp(0)
r.c=4
r.d=A.bO
n=r.H()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.G(A.k.bu(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=(a4?A.bo:A.aK).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bT(D.vU,8+u*6+A.k.G(s,6))
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.8
q.r=A.hv.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c1(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.bz(D.eEV,A.hA)
s=$.X()
r=C.M()
r.r=A.eu.gp(0)
b9.aD(b8,r)
if(b7){b8=C.M()
b8.r=A.ay.j(0.5*a5).gp(0)
b8.z=A.yI
b9.ah(A.vT,34,b8)}a6=new C.aP(s.r,A.ap,b6,b6,C.a([],x.v))
a6.E(new C.b5(-16,12))
a6.E(new C.ap(-16,-2))
a6.E(new C.cS(0,-30,16,-2))
a6.E(new C.ap(16,12))
a6.E(new C.bF())
b8=C.M()
b8.r=C.aq(A.er,D.b8A,a5).gp(0)
b9.aP(a6,b8)
b8=C.M()
b8.b=A.ae
b8.c=1.4
b8.r=A.c_.gp(0)
b9.aP(a6,b8)
if(b7){b8=b9.a
J.bA(b8.save())
b8.translate(0,-2)
b9.iW(0,c1*7)
s=C.M()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bA(A.J,D.aFm,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bA(b8.save())
b8.translate(0,a7)
s=$.X().r
r=x.v
j=new C.aP(s,A.ap,b6,b6,C.a([],r))
j.E(new C.b5(-28,8))
j.E(new C.ap(-28,-2))
j.E(new C.ap(-16,-4))
j.E(new C.ap(-10,-16))
j.E(new C.ap(10,-16))
j.E(new C.ap(18,-4))
j.E(new C.ap(28,-2))
j.E(new C.ap(28,8))
j.E(new C.bF())
q=C.M()
q.saq(D.bRH.av(0,D.eF7))
b9.aP(j,q)
q=new C.aP(s,A.ap,b6,b6,C.a([],r))
q.E(new C.b5(-8,-4))
q.E(new C.ap(-4,-13))
q.E(new C.ap(4,-13))
q.E(new C.ap(4,-4))
q.E(new C.bF())
p=C.M()
p.r=A.fg.gp(0)
b9.aP(q,p)
r=new C.aP(s,A.ap,b6,b6,C.a([],r))
r.E(new C.b5(8,-4))
r.E(new C.ap(8,-13))
r.E(new C.ap(11,-13))
r.E(new C.ap(15,-4))
r.E(new C.bF())
s=C.M()
s.r=A.fg.gp(0)
b9.aP(r,s)
for(a2=0;a2<2;++a2){a3=D.d72[a2]
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.aB.gp(0)
n=s.H()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bA(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.bR.gp(0)
q.c=1.6
n=q.H()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.G(s+u*8,14)
q=-4+u*5
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.az.gp(0)
p.c=1.6
n=p.H()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.X().r
s=x.v
j=new C.aP(b8,A.ap,b6,b6,C.a([],s))
j.E(new C.b5(-18,20))
j.E(new C.ap(-14,-12))
j.E(new C.cS(0,-20,14,-12))
j.E(new C.ap(18,20))
j.E(new C.bF())
r=C.M()
r.saq(D.bSK.av(0,D.eEU))
b9.aP(j,r)
r=new C.aP(b8,A.ap,b6,b6,C.a([],s))
r.E(new C.b5(14,-10))
r.E(new C.ap(30,-22))
r.E(new C.ap(32,-18))
r.E(new C.ap(16,-4))
r.E(new C.bF())
q=C.M()
q.r=A.e_.gp(0)
b9.aP(r,q)
s=new C.aP(b8,A.ap,b6,b6,C.a([],s))
s.E(new C.b5(-14,-8))
s.E(new C.cS(-34,-6,-18,12))
b8=C.M()
b8.b=A.ae
b8.c=5
b8.r=A.aB.gp(0)
b9.aP(s,b8)
b8=C.M()
if(b7){s=C.aq(A.ct,A.uX,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.eu
b8.r=s.gp(0)
b9.aX(D.eET,b8)
if(b7){b8=C.M()
b8.r=A.ct.j(0.3).gp(0)
b8.z=A.ll
b9.ah(A.aFi,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.G(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.M()
b8.r=A.aB.gp(0)
b9.ah(D.e_d,3,b8)
return!0
case"lamp":if(b7){u=A.k.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new C.aP($.X().r,A.ap,b6,b6,C.a([],x.v))
b8.E(new C.b5(-10,-14))
b8.E(new C.ap(-30,24))
b8.E(new C.ap(10,24))
b8.E(new C.ap(8,-14))
b8.E(new C.bF())
s=C.M()
s.r=A.dN.j(0.28*u).gp(0)
b9.aP(b8,s)
s=C.M()
s.r=A.dN.j(0.5*u).gp(0)
s.z=X.Hc
b9.ah(D.e29,24,s)}b8=C.bz(D.eFt,A.hA)
s=$.X()
r=C.M()
r.r=A.eu.gp(0)
b9.aD(b8,r)
r=C.M()
r.r=A.dz.gp(0)
r.c=3
r.d=A.bO
b9.bA(D.e_r,D.aFs,r)
r=C.M()
r.r=A.dz.gp(0)
r.c=3
r.d=A.bO
b9.bA(D.aFs,D.e2a,r)
a9=new C.aP(s.r,A.ap,b6,b6,C.a([],x.v))
a9.E(new C.b5(-14,-16))
a9.E(new C.ap(6,-26))
a9.E(new C.ap(10,-12))
a9.E(new C.ap(-10,-6))
a9.E(new C.bF())
s=C.M()
s.r=(b7?A.aM:A.jQ).gp(0)
b9.aP(a9,s)
b8=C.M()
b8.r=(b7?A.c:A.bn).gp(0)
b9.ah(D.e2b,4,b8)
return!0
case"lights":b8=$.X().r
s=x.v
b0=new C.aP(b8,A.ap,b6,b6,C.a([],s))
b0.E(new C.b5(-34,-6))
b0.E(new C.cS(0,22,34,-6))
r=C.M()
r.b=A.ae
r.c=2
r.r=A.hh.gp(0)
b9.aP(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.G(q+u*0.7,1.8)<1.1
if(b2){b3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b3.r=D.a1k[u].j(0.6).gp(0)
b3.z=A.Qx
n=b3.H()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=C.a([],s)
b4=new C.aP(b8,A.ap,b6,b6,b3)
b3.push(new C.b5(p-3,o))
b3.push(new C.ap(p+3,o))
b5=o+11
b3.push(new C.ap(p+5,b5))
b3.push(new C.cS(p,o+17,p-5,b5))
b3.push(new C.bF())
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
if(b2)o=D.a1k[u]
else{o=C.aq(D.a1k[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbI().a.snapshot()
r.drawPath((b4.e=new C.cF(p)).a,n)
n.delete()}return!0}return B.i2F(b9,c0,c1,c2)},
fJ:function fJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fV8(d){var w=D.lS.h(0,d)
return(w==null?null:w.b)===D.z7},
i3N(d,e,f){return C.a6(d,!1).c8(C.uw(null,!1,!0,!0,new B.fGU(e,f),A.eN,null,A.pB,new B.fGV(),x.H))},
IP:function IP(d,e){this.a=d
this.b=e},
m1:function m1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fGU:function fGU(d,e){this.a=d
this.b=e},
fGV:function fGV(){},
TZ:function TZ(d,e,f){this.c=d
this.d=e
this.a=f},
bhV:function bhV(d,e){var _=this
_.d=$
_.e=null
_.bq$=d
_.a7$=e
_.c=_.a=null},
dLI:function dLI(d){this.a=d},
dLH:function dLH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLF:function dLF(){},
dLG:function dLG(d){this.a=d},
dLE:function dLE(d){this.a=d},
dLD:function dLD(d,e){this.a=d
this.b=e},
dLC:function dLC(d,e){this.a=d
this.b=e},
dLB:function dLB(d){this.a=d},
dLA:function dLA(d){this.a=d},
dLw:function dLw(d){this.a=d},
dLv:function dLv(d){this.a=d},
dLz:function dLz(d,e,f){this.a=d
this.b=e
this.c=f},
dLy:function dLy(d){this.a=d},
dLx:function dLx(d){this.a=d},
btu:function btu(d,e,f){this.b=d
this.c=e
this.a=f},
adI:function adI(d,e,f){this.b=d
this.c=e
this.a=f},
aK8:function aK8(){},
fg6(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),A.q,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.an,C.d(e,w,w,w,w,w,w,A.zm,A.L,w,w),A.aA,C.bY(A.fQ,g,A.br,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new C.o(D.Vn,w,u,v,w,w,A.n),w,w,w,A.ew,A.a9,w,w,w),w,w,w)},
fVe(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eJ()
b4.dB(b5*977+13)
w=A.o.D(1+A.o.an(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aB(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.T(u,t)
m=w
l=0
k=N.mx
j=!0
i=0
for(;;){if(!(j&&i<12))break
A:{++i
h=2+b4.aB(4)
for(g=k.a,f=k.b,e=0;e<h;r=a0,l=d){d=l+g
a0=r+f
if(d<0||a0<0||d>=7||a0>=7){e=99
break}a1=a0*7+d
if(A.d.t(p,a1)||a1===q){j=!1
break}p.push(a1);++e}if(!j||e>=99||m===0)break
a2=b4.h9()?new C.y(f,-g):new C.y(-f,g)
a3=new C.y(-f,-g).A(0,a2)
a4=l+a2.a
a5=r+a2.b
if(a4<0||a5<0||a4>=7||a5>=7)break A
o.push(r*7+l);--m
g=A.d.gal(o)
n.n(0,g,a3?"/":"\\")
k=a2}}if(!j||o.length<w||p.length<5)continue
g=C.a([],v)
for(f=p.length,a6=0;a6<p.length;p.length===f||(0,C.L)(p),++a6){a7=p[a6]
if(!A.d.t(o,a7))g.push(a7)}if(g.length<3)continue
a8=A.o.D(2+A.o.an(b5,8),2,4)
a9=C.ew([A.d.gal(g)],u)
A.d.ft(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.L)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.K(0,a7)}b0=C.aX(u)
b1=3+A.o.an(b5,3)
v=q+1
b2=0
for(;;){if(b0.a<b1){b3=b2+1
g=b2<200
b2=b3}else g=!1
if(!g)break
B:{a7=b4.aB(49)
if(A.d.t(p,a7)||a7===q||a9.t(0,a7)||A.d.t(o,a7))break B
if(a7===v)break B
b0.K(0,a7)}}v=b5>=10?1:0
return new B.aV7(b0,a9,C.T(u,t),q,N.mx,w+v)}return new B.aV7(C.aX(u),C.ew([25],u),C.T(u,t),21,N.mx,1)},
hjp(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aX(x.S),n=d.e,m=A.o.G(n,7),l=A.o.an(n,7),k=d.f
p.push(n)
for(n=d.c,w=d.b,v=d.d,u=0;u<200;++u){t=k.a
m+=t
s=k.b
l+=s
if(m<0||l<0||m>=7||l>=7)break
r=l*7+m
if(w.t(0,r))break
p.push(r)
if(n.t(0,r))o.K(0,r)
q=e.h(0,r)
if(q==null)q=v.h(0,r)
if(q==="/")k=new C.y(-s,-t)
if(q==="\\")k=new C.y(k.b,k.a)}return new C.bmM(p,o)},
heQ(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aV7:function aV7(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
UN:function UN(d){this.a=d},
biu:function biu(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fj$=g
_.kX$=h
_.fP$=i
_.fk$=j
_.bq$=k
_.a7$=l
_.c=_.a=null},
e6g:function e6g(d){this.a=d},
e6f:function e6f(d,e){this.a=d
this.b=e},
e6h:function e6h(){},
e66:function e66(d,e){this.a=d
this.b=e},
e67:function e67(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e6a:function e6a(d,e){this.a=d
this.b=e},
e68:function e68(d){this.a=d},
e69:function e69(d){this.a=d},
e6b:function e6b(d){this.a=d},
e6c:function e6c(d){this.a=d},
e6d:function e6d(d){this.a=d},
e6e:function e6e(d,e){this.a=d
this.b=e},
bfu:function bfu(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
deV:function deV(d,e,f){this.a=d
this.b=e
this.c=f},
deY:function deY(d,e,f){this.a=d
this.b=e
this.c=f},
deW:function deW(d){this.a=d},
deX:function deX(d){this.a=d},
UP:function UP(d){this.a=d},
aCD:function aCD(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fj$=g
_.kX$=h
_.fP$=i
_.fk$=j
_.bq$=k
_.a7$=l
_.c=_.a=null},
e6z:function e6z(d){this.a=d},
e6y:function e6y(d,e){this.a=d
this.b=e},
e6A:function e6A(){},
e6k:function e6k(){},
e6t:function e6t(d,e){this.a=d
this.b=e},
e6q:function e6q(d){this.a=d},
e6m:function e6m(d){this.a=d},
e6r:function e6r(d){this.a=d},
e6s:function e6s(d){this.a=d},
e6l:function e6l(d){this.a=d},
e6u:function e6u(d){this.a=d},
e6p:function e6p(d,e){this.a=d
this.b=e},
e6v:function e6v(d){this.a=d},
e6o:function e6o(d,e){this.a=d
this.b=e},
e6w:function e6w(d){this.a=d},
e6n:function e6n(d,e){this.a=d
this.b=e},
e6x:function e6x(d){this.a=d},
bfJ:function bfJ(d,e){this.b=d
this.a=e},
aKA:function aKA(){},
bvu:function bvu(){},
aKB:function aKB(){},
bvv:function bvv(){},
a02(d,e,f,g,h,i){return new B.bsj(d,e,f,g,h,i)},
bsj:function bsj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fcx:function fcx(){},
fcy:function fcy(){},
fcz:function fcz(){},
fcA:function fcA(){},
fcB:function fcB(){},
fcC:function fcC(){},
fcD:function fcD(){},
fcE:function fcE(){},
a7v:function a7v(d){this.a=d},
cdK:function cdK(d){this.a=d},
cdL:function cdL(){},
cdJ:function cdJ(d,e){this.a=d
this.b=e},
cdI:function cdI(d){this.a=d},
VG:function VG(d){this.a=d},
aDu:function aDu(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fj$=f
_.kX$=g
_.fP$=h
_.fk$=i
_.bq$=j
_.a7$=k
_.c=_.a=null},
eFs:function eFs(d){this.a=d},
eFo:function eFo(d){this.a=d},
eFn:function eFn(d,e){this.a=d
this.b=e},
eFq:function eFq(d,e){this.a=d
this.b=e},
eFp:function eFp(d,e){this.a=d
this.b=e},
eFr:function eFr(d){this.a=d},
btG:function btG(d,e,f){this.b=d
this.c=e
this.a=f},
Uo:function Uo(d){this.a=d},
bi3:function bi3(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fj$=d
_.kX$=e
_.fP$=f
_.fk$=g
_.bq$=h
_.a7$=i
_.c=_.a=null},
dS_:function dS_(){},
dS0:function dS0(){},
dRV:function dRV(d,e){this.a=d
this.b=e},
dRX:function dRX(d,e){this.a=d
this.b=e},
dRY:function dRY(d){this.a=d},
dRW:function dRW(d){this.a=d},
dRZ:function dRZ(d){this.a=d},
box:function box(d,e,f){this.b=d
this.c=e
this.a=f},
TB:function TB(d){this.a=d},
bhG:function bhG(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fj$=d
_.kX$=e
_.fP$=f
_.fk$=g
_.bq$=h
_.a7$=i
_.c=_.a=null},
dCQ:function dCQ(){},
dCR:function dCR(){},
dCL:function dCL(){},
dCO:function dCO(d,e){this.a=d
this.b=e},
dCN:function dCN(d,e){this.a=d
this.b=e},
dCP:function dCP(d){this.a=d},
dCM:function dCM(d){this.a=d},
aGR:function aGR(d,e,f){this.a=d
this.b=e
this.c=f},
Uf:function Uf(d){this.a=d},
bhY:function bhY(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dPg:function dPg(d,e){this.a=d
this.b=e},
dPh:function dPh(d){this.a=d},
dPf:function dPf(d,e){this.a=d
this.b=e},
dPi:function dPi(d){this.a=d},
dPe:function dPe(d,e){this.a=d
this.b=e},
dPj:function dPj(d){this.a=d},
dPd:function dPd(d,e){this.a=d
this.b=e},
dPk:function dPk(d,e){this.a=d
this.b=e},
dPc:function dPc(d,e){this.a=d
this.b=e},
dPl:function dPl(d){this.a=d},
dPb:function dPb(d,e){this.a=d
this.b=e},
dPm:function dPm(d){this.a=d},
dPa:function dPa(d){this.a=d},
dPn:function dPn(d){this.a=d},
dP9:function dP9(d){this.a=d},
dPo:function dPo(d){this.a=d},
dPp:function dPp(d){this.a=d},
dP8:function dP8(d){this.a=d},
bk_:function bk_(d,e,f){this.b=d
this.c=e
this.a=f},
V0:function V0(d){this.a=d},
aCN:function aCN(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
ebW:function ebW(d,e){this.a=d
this.b=e},
ebX:function ebX(d,e,f){this.a=d
this.b=e
this.c=f},
ebV:function ebV(d,e,f){this.a=d
this.b=e
this.c=f},
ebY:function ebY(d){this.a=d},
ebU:function ebU(d){this.a=d},
ec1:function ec1(d){this.a=d},
ec0:function ec0(d,e){this.a=d
this.b=e},
ec_:function ec_(d,e){this.a=d
this.b=e},
ec2:function ec2(d,e){this.a=d
this.b=e},
ebZ:function ebZ(d,e){this.a=d
this.b=e},
ec3:function ec3(d){this.a=d},
Ve:function Ve(d){this.a=d},
aD8:function aD8(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
ems:function ems(d){this.a=d},
emt:function emt(d){this.a=d},
emq:function emq(d,e){this.a=d
this.b=e},
emr:function emr(d){this.a=d},
emp:function emp(d){this.a=d},
emu:function emu(d){this.a=d},
emv:function emv(d){this.a=d},
emw:function emw(d){this.a=d},
emx:function emx(d,e){this.a=d
this.b=e},
Vz:function Vz(d){this.a=d},
bjb:function bjb(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eAK:function eAK(){},
eAT:function eAT(){},
eAP:function eAP(d){this.a=d},
eAO:function eAO(){},
eAQ:function eAQ(d,e){this.a=d
this.b=e},
eAN:function eAN(d,e){this.a=d
this.b=e},
eAR:function eAR(d){this.a=d},
eAM:function eAM(d,e){this.a=d
this.b=e},
eAS:function eAS(d){this.a=d},
eAL:function eAL(d){this.a=d},
UZ:function UZ(d){this.a=d},
biF:function biF(d,e,f,g,h,i,j,k){var _=this
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
_.fj$=f
_.kX$=g
_.fP$=h
_.fk$=i
_.bq$=j
_.a7$=k
_.c=_.a=null},
eaB:function eaB(){},
eaC:function eaC(){},
eau:function eau(d){this.a=d},
eat:function eat(d){this.a=d},
eav:function eav(d){this.a=d},
eas:function eas(d){this.a=d},
eaw:function eaw(d){this.a=d},
ear:function ear(d){this.a=d},
eax:function eax(d,e){this.a=d
this.b=e},
eaq:function eaq(d,e){this.a=d
this.b=e},
eay:function eay(d){this.a=d},
eap:function eap(d,e){this.a=d
this.b=e},
eaz:function eaz(d){this.a=d},
eao:function eao(d,e){this.a=d
this.b=e},
eaA:function eaA(d){this.a=d},
ean:function ean(d,e){this.a=d
this.b=e},
bbG:function bbG(d,e,f){this.c=d
this.d=e
this.a=f},
aJW:function aJW(){},
bvl:function bvl(){},
aKe:function aKe(){},
bvq:function bvq(){},
aKJ:function aKJ(){},
bvA:function bvA(){},
aLc:function aLc(){},
bvM:function bvM(){},
jF(d,e,f,g,h,i){return new B.b5i(h,d,f,g,i,e,null)},
hjg(d,e,f,g){var w=null
return C.ca(w,w,!0,w,new B.fKK(g,e,f),d,w,!0,!0,x.H)},
hy(d,e,f,g,h,i,j){return new B.auv(f,j,i,h,g,d,e,null)},
qI(d,e,f){return B.i4C(d,e,f)},
i4C(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qI=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aU.ak$.x.h(0,e)
n=n==null?null:n.gb7()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.lT(2),$async$qI)
case 7:q=h
w=8
return C.b(q.hp(A.fW),$async$qI)
case 8:p=h
if(p==null){w=1
break}o=J.eQ(A.dC.gaM(p))
w=9
return C.b(B.coA(C.a([B.h8i(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qI)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.I(x.gV).f.R(D.aNe)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qI,v)},
ld(d,e,f,g){var w,v=$.aqF
if(v==="music")return E.dF(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dF(261.63*v,w,f,0,g,"sine")}return B.vK(v,e,f,g)},
vK(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return E.dF(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return E.dF(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return E.dF(140+A.o.G(e,12)*9,"",150,0.9,g,v)
case"bubble":return E.dF(260+A.o.G(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":E.dF(t,"",160,-0.7,g*0.4,w)
return E.dF(900,"",90,0,g*0.45,u)
case"zap":return E.dF(t*3,"",150,1.6,g*0.4,"square")
case"click":return E.dF(2600+A.o.G(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":E.dF(320,"",220,-0.7,g*0.35,v)
return E.dF(1500,"",200,0,g*0.22,u)
case"organic":return E.dF(85+A.o.G(e,12)*5,"",190,1.1,g,v)
case"lab":return E.dF(t*1.6,"",140,-0.3,g*0.55,w)
default:return E.dF(t,"",s,0,g*0.5,w)}},
Bi(d,e,f,g){var w,v,u,t,s,r,q,p=$.aqF
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.L)(e),++w)B.ld(d,e[w],f,g)
return}for(p=C.dd(e,0,C.dJ(4,"count",x.S),C.U(e).c),v=p.$ti,p=new C.bR(p,p.gM(0),v.k("bR<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)B.ld(d,s,f,g)
else C.bN(new C.b9(1000*q),new B.cdG(d,s,f,g),u)}},
a7u(d,e){var w="sine",v="noise"
switch(d){case"kick":E.dF(95,"",200,1.8,e,w)
break
case"snare":E.dF(220,"",140,0,e*0.65,v)
break
case"hat":E.dF(5000,"",50,0,e*0.35,v)
break
case"open":E.dF(5200,"",220,0,e*0.35,v)
break
case"clap":E.dF(1100,"",100,0,e*0.5,v)
break
case"tom":E.dF(150,"",230,1,e,w)
break
case"low":E.dF(100,"",260,0.9,e,w)
break
case"rim":E.dF(1700,"",60,0,e*0.4,"square")
break
case"cow":E.dF(820,"",240,0,e*0.3,"square")
break
case"crash":E.dF(3200,"",650,0,e*0.4,v)
break
case"shake":E.dF(7000,"",90,0,e*0.3,v)
break
default:E.dF(60,"",300,0,e,w)}},
z7(d){return B.hAd(d)},
hAd(d){var w=0,v=C.j(x.a),u,t=2,s=[],r,q,p,o,n,m,l
var $async$z7=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$z7)
case 7:r=f
q=C.aT(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.T(x.N,x.z)
w=1
break}p=A.R.aG(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?C.a1(p,o,n):C.T(o,n)
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
return C.i($async$z7,v)},
vH(d,e){return B.hAe(d,e)},
hAe(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$vH=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$vH)
case 6:s=g
w=7
return C.b(s.au("String","ngmy_play_progress_v1_"+d,A.R.ao(e,null)),$async$vH)
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
return C.i($async$vH,v)},
b5i:function b5i(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cqx:function cqx(d){this.a=d},
cqy:function cqy(d,e){this.a=d
this.b=e},
fKK:function fKK(d,e,f){this.a=d
this.b=e
this.c=f},
fKJ:function fKJ(d){this.a=d},
dz:function dz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cqt:function cqt(d){this.a=d},
eN:function eN(d,e,f){this.c=d
this.d=e
this.a=f},
auv:function auv(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
fg:function fg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cqs:function cqs(d){this.a=d},
ER:function ER(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cqz:function cqz(d){this.a=d},
my:function my(){},
cqu:function cqu(d,e,f){this.a=d
this.b=e
this.c=f},
cqw:function cqw(d){this.a=d},
cqv:function cqv(){},
cdG:function cdG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ct3(){var w=0,v=C.j(x.cL),u,t
var $async$ct3=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=B
w=3
return C.b($.qK().bef("assets/data/world110.json"),$async$ct3)
case 3:u=t.hEL(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$ct3,v)},
hEL(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.R.aG(0,a2,null)),a1=C.a([],x.F)
for(w=J.aV(a0),v=x.n,u=x.b,t=x.a,s=x.gO;w.C();){r=t.a(w.gS(w))
q=C.a([],s)
for(p=J.a5(r),o=J.aV(d.a(p.h(r,"r")));o.C();){n=o.gS(o)
m=C.a([],u)
for(l=J.aV(d.a(n));l.C();){k=l.gS(l)
j=J.a5(k)
m.push(C.a([C.dQ(j.h(k,0)),C.dQ(j.h(k,1))],v))}q.push(m)}o=C.cO(p.h(r,"n"))
m=C.cO(p.h(r,"a"))
l=C.cO(p.h(r,"ct"))
j=C.cO(p.h(r,"sr"))
i=C.dQ(p.h(r,"pop"))
h=C.dQ(p.h(r,"gdp"))
g=C.cO(p.h(r,"inc"))
f=C.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aP3(g,f,"",0)
f=C.dQ(J.q(p.h(r,"c"),0))
p=C.dQ(J.q(p.h(r,"c"),1))
e=new B.aad(o,m,l,j,i,h,g,f,p,q)
e.bwq(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new B.aae(a1)},
fov(d){if(d>=1e12)return A.k.aa(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.aa(d/1e9,2)+" billion"
if(d>=1e6)return A.k.aa(d/1e6,1)+" million"
if(d>=1000)return A.k.aa(d/1000,1)+" thousand"
return A.k.aa(d,0)},
Gl(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.G(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
aad:function aad(d,e,f,g,h,i,j,k,l,m){var _=this
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
aae:function aae(d){this.a=d},
uR:function uR(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
OA:function OA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xI:function xI(d,e,f){this.a=d
this.b=e
this.c=f},
Oz:function Oz(d){this.a=0
this.b=d
this.c=0},
hGE(d,e,f){return $.hGF.cg(0,d+"|"+C.t(e)+"|"+f.l(),new B.daF(d,e,f))},
Uv:function Uv(d){this.a=d},
aC9:function aC9(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fj$=j
_.kX$=k
_.fP$=l
_.fk$=m
_.bq$=n
_.a7$=o
_.c=_.a=null},
dUI:function dUI(d){this.a=d},
dUH:function dUH(d,e){this.a=d
this.b=e},
dUa:function dUa(d){this.a=d},
dU8:function dU8(d){this.a=d},
dU9:function dU9(d,e,f){this.a=d
this.b=e
this.c=f},
dU7:function dU7(d){this.a=d},
dU6:function dU6(){},
dU5:function dU5(d){this.a=d},
dUt:function dUt(d,e){this.a=d
this.b=e},
dUu:function dUu(d,e){this.a=d
this.b=e},
dUi:function dUi(d){this.a=d},
dUj:function dUj(d){this.a=d},
dUh:function dUh(d){this.a=d},
dUk:function dUk(d){this.a=d},
dUb:function dUb(d,e){this.a=d
this.b=e},
dUc:function dUc(d){this.a=d},
dUv:function dUv(d,e){this.a=d
this.b=e},
dUg:function dUg(d,e){this.a=d
this.b=e},
dUz:function dUz(d){this.a=d},
dUs:function dUs(d){this.a=d},
dUA:function dUA(d,e){this.a=d
this.b=e},
dUr:function dUr(d,e){this.a=d
this.b=e},
dUB:function dUB(d){this.a=d},
dUq:function dUq(d,e){this.a=d
this.b=e},
dUC:function dUC(d){this.a=d},
dUp:function dUp(d,e){this.a=d
this.b=e},
dUD:function dUD(d){this.a=d},
dUo:function dUo(d,e){this.a=d
this.b=e},
dUE:function dUE(d){this.a=d},
dUn:function dUn(d,e){this.a=d
this.b=e},
dUF:function dUF(d){this.a=d},
dUm:function dUm(d){this.a=d},
dUG:function dUG(d){this.a=d},
dUl:function dUl(d){this.a=d},
dUw:function dUw(d){this.a=d},
dUf:function dUf(d){this.a=d},
dUx:function dUx(d){this.a=d},
dUe:function dUe(d){this.a=d},
dUy:function dUy(d){this.a=d},
dUd:function dUd(d){this.a=d},
dU4:function dU4(){},
dU3:function dU3(d){this.a=d},
dU2:function dU2(d){this.a=d},
bdV:function bdV(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
daF:function daF(d,e,f){this.a=d
this.b=e
this.c=f},
daG:function daG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aKk:function aKk(){},
aKl:function aKl(){},
aef(d,e,f,g,h){return new B.bse(d,e,f,g,h)},
bse:function bse(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fcq:function fcq(){},
fcr:function fcr(){},
fcs:function fcs(){},
fct:function fct(){},
fcu:function fcu(){},
fcv:function fcv(){},
fcw:function fcw(){},
VC:function VC(d){this.a=d},
bjf:function bjf(){this.d=$
this.c=this.a=null},
eBD:function eBD(d){this.a=d},
eBE:function eBE(d){this.a=d},
eBC:function eBC(d){this.a=d},
eBF:function eBF(){},
eBB:function eBB(d,e){this.a=d
this.b=e},
eBA:function eBA(d){this.a=d},
hH5(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eJ()
v.dB(w)
t.push(v.aj()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eJ()
v.dB(w+900)
u.push(2.2+v.aj())}return new B.bj1(new C.cs(null,x.A),new B.Oz(A.cI),A.J,A.au,t,u,$,A.bw,0,C.a([],x.X),null,null)},
hH7(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hH6(d){return 1.5+1.6*Math.log(d.d/1000+1)},
h9u(d,e,f){return $.hHH.cg(0,d+"|"+C.t(e)+"|"+f.l(),new B.eVP(d,e,f))},
Vn:function Vn(d){this.a=d},
bj1:function bj1(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fj$=j
_.kX$=k
_.fP$=l
_.fk$=m
_.bq$=n
_.a7$=o
_.c=_.a=null},
etG:function etG(d,e){this.a=d
this.b=e},
etR:function etR(d,e){this.a=d
this.b=e},
etS:function etS(d,e){this.a=d
this.b=e},
etO:function etO(d){this.a=d},
etP:function etP(d){this.a=d},
etQ:function etQ(d){this.a=d},
etT:function etT(d){this.a=d},
etN:function etN(d){this.a=d},
etU:function etU(d,e){this.a=d
this.b=e},
etV:function etV(d){this.a=d},
etM:function etM(d,e){this.a=d
this.b=e},
etW:function etW(d){this.a=d},
etL:function etL(d,e){this.a=d
this.b=e},
etX:function etX(d){this.a=d},
etK:function etK(d){this.a=d},
etY:function etY(d){this.a=d},
etJ:function etJ(d){this.a=d},
etZ:function etZ(d){this.a=d},
etI:function etI(d){this.a=d},
eu_:function eu_(d){this.a=d},
etH:function etH(d){this.a=d},
etF:function etF(){},
etE:function etE(){},
etD:function etD(d){this.a=d},
etC:function etC(d){this.a=d},
bqj:function bqj(d,e){this.b=d
this.a=e},
eVP:function eVP(d,e,f){this.a=d
this.b=e
this.c=f},
eVQ:function eVQ(){},
eVR:function eVR(){},
Uw:function Uw(d){this.a=d},
aCa:function aCa(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fj$=k
_.kX$=l
_.fP$=m
_.fk$=n
_.bq$=o
_.a7$=p
_.c=_.a=null},
dUM:function dUM(){},
dVe:function dVe(){},
dV0:function dV0(d,e){this.a=d
this.b=e},
dUS:function dUS(d,e){this.a=d
this.b=e},
dV1:function dV1(d){this.a=d},
dUR:function dUR(d){this.a=d},
dV2:function dV2(d){this.a=d},
dV_:function dV_(d){this.a=d},
dV6:function dV6(d){this.a=d},
dUZ:function dUZ(d){this.a=d},
dV7:function dV7(d){this.a=d},
dUY:function dUY(d,e){this.a=d
this.b=e},
dV8:function dV8(d){this.a=d},
dV9:function dV9(d){this.a=d},
dUX:function dUX(d,e){this.a=d
this.b=e},
dVa:function dVa(d){this.a=d},
dUW:function dUW(d,e){this.a=d
this.b=e},
dVb:function dVb(d){this.a=d},
dUV:function dUV(d,e){this.a=d
this.b=e},
dVc:function dVc(d){this.a=d},
dUU:function dUU(d,e){this.a=d
this.b=e},
dVd:function dVd(d){this.a=d},
dUT:function dUT(d){this.a=d},
dV3:function dV3(d){this.a=d},
dUQ:function dUQ(d){this.a=d},
dV4:function dV4(d){this.a=d},
dUP:function dUP(d){this.a=d},
dV5:function dV5(d){this.a=d},
dUO:function dUO(d){this.a=d},
dUL:function dUL(d){this.a=d},
dUK:function dUK(){},
dUN:function dUN(d,e){this.a=d
this.b=e},
dUJ:function dUJ(d){this.a=d},
b97:function b97(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
Vf:function Vf(d){this.a=d},
biZ:function biZ(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fj$=e
_.kX$=f
_.fP$=g
_.fk$=h
_.bq$=i
_.a7$=j
_.c=_.a=null},
emA:function emA(d,e){this.a=d
this.b=e},
emB:function emB(d,e){this.a=d
this.b=e},
emz:function emz(d,e){this.a=d
this.b=e},
emC:function emC(d,e){this.a=d
this.b=e},
emy:function emy(d,e){this.a=d
this.b=e},
bpS:function bpS(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eTZ:function eTZ(d){this.a=d},
aKm:function aKm(){},
bvs:function bvs(){},
aKV:function aKV(){},
bvG:function bvG(){},
aKY:function aKY(){},
bvI:function bvI(){},
hH3(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eJ()
v.dB(w)
v=v.aj()
u=new C.eJ()
u.dB(w+500)
s.push(new C.u(v,u.aj()))}return new B.bhF(new C.cs(null,x.A),new B.Oz(A.cI),t,A.au,s,$,A.bw,0,C.a([],x.X),null,null)},
P1:function P1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Tz:function Tz(d){this.a=d},
bhF:function bhF(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.fj$=i
_.kX$=j
_.fP$=k
_.fk$=l
_.bq$=m
_.a7$=n
_.c=_.a=null},
dCh:function dCh(){},
dC5:function dC5(){},
dC6:function dC6(d,e){this.a=d
this.b=e},
dC7:function dC7(d,e){this.a=d
this.b=e},
dC4:function dC4(d){this.a=d},
dC3:function dC3(d){this.a=d},
dC9:function dC9(d){this.a=d},
dC2:function dC2(d,e){this.a=d
this.b=e},
dCa:function dCa(d){this.a=d},
dC1:function dC1(d){this.a=d},
dCb:function dCb(d){this.a=d},
dC0:function dC0(d){this.a=d},
dCc:function dCc(d){this.a=d},
dC_:function dC_(d){this.a=d},
dCd:function dCd(d){this.a=d},
dBZ:function dBZ(d){this.a=d},
dCe:function dCe(d){this.a=d},
dBY:function dBY(d){this.a=d},
dCf:function dCf(d){this.a=d},
dBX:function dBX(d){this.a=d},
dCg:function dCg(d){this.a=d},
dBW:function dBW(d){this.a=d},
dC8:function dC8(d){this.a=d},
dBV:function dBV(d){this.a=d},
b8w:function b8w(d,e){this.b=d
this.a=e},
adU:function adU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Us:function Us(d){this.a=d},
bi6:function bi6(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.fj$=p
_.kX$=q
_.fP$=r
_.fk$=s
_.bq$=t
_.a7$=u
_.c=_.a=null},
dTj:function dTj(d){this.a=d},
dT9:function dT9(d,e){this.a=d
this.b=e},
dTa:function dTa(d,e){this.a=d
this.b=e},
dT8:function dT8(d,e){this.a=d
this.b=e},
dTb:function dTb(d){this.a=d},
dT7:function dT7(d){this.a=d},
dTc:function dTc(d){this.a=d},
dT6:function dT6(d,e){this.a=d
this.b=e},
dTd:function dTd(d){this.a=d},
dT5:function dT5(d,e){this.a=d
this.b=e},
dTe:function dTe(d){this.a=d},
dT4:function dT4(d,e){this.a=d
this.b=e},
dTf:function dTf(d){this.a=d},
dT3:function dT3(d,e){this.a=d
this.b=e},
dTg:function dTg(d){this.a=d},
dT2:function dT2(d){this.a=d},
dTh:function dTh(d){this.a=d},
dT1:function dT1(d){this.a=d},
dTi:function dTi(d){this.a=d},
dT0:function dT0(d){this.a=d},
bdL:function bdL(d,e){this.b=d
this.a=e},
d7N:function d7N(d){this.a=d},
Vb:function Vb(d){this.a=d},
biY:function biY(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.fj$=f
_.kX$=g
_.fP$=h
_.fk$=i
_.bq$=j
_.a7$=k
_.c=_.a=null},
elP:function elP(d,e){this.a=d
this.b=e},
elQ:function elQ(d){this.a=d},
elO:function elO(d){this.a=d},
elR:function elR(d){this.a=d},
elN:function elN(d){this.a=d},
elS:function elS(d){this.a=d},
elM:function elM(d){this.a=d},
elT:function elT(d){this.a=d},
elL:function elL(d){this.a=d},
elU:function elU(d){this.a=d},
elK:function elK(d,e){this.a=d
this.b=e},
elV:function elV(d){this.a=d},
elJ:function elJ(d,e){this.a=d
this.b=e},
elW:function elW(d){this.a=d},
elI:function elI(d,e){this.a=d
this.b=e},
elX:function elX(d){this.a=d},
elH:function elH(d,e){this.a=d
this.b=e},
bp7:function bp7(d,e){this.b=d
this.a=e},
aJT:function aJT(){},
bvk:function bvk(){},
aKh:function aKh(){},
bvr:function bvr(){},
aKU:function aKU(){},
bvF:function bvF(){},
h8i(d,e,f){var w,v
C.fQ(0,0,!1)
w=new C.lg(e,f,$,null)
v=w.bGw(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
hUC(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.D)
for(t=w.length,s=x.N,r=x.C,q=0;q<w.length;w.length===t||(0,C.L)(w),++q){p=w[q]
u.push(C.F(["k",p.b,"x",C.nU(A.k.aa(p.c,4)),"y",C.nU(A.k.aa(p.d,4)),"v",p.e,"l",C.nU(A.k.aa(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.nU(A.k.aa(p.as,3)),"ch",p.at,"vc",C.nU(A.k.aa(p.z,3)),"s",C.nU(A.k.aa(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.L)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.B(f,C.a3(f).k("cn.E"))
A.d.fh(l)
return A.R.ao(C.F(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
i3_(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.R.aG(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a9(h)
A.d.a9(a6.b)
v=C.a([],x.fs)
g=x.L
f=g.a(J.q(w,"parts"))
f=J.aV(f==null?A.cu:f)
while(f.C()){u=f.gS(f)
t=i.a(u)
e=C.aT(J.q(t,"k"))
s=e==null?"":e
if(!$.q5().ai(0,s)){J.ch(v,null)
continue}d=s
a0=C.aJ(J.q(t,"x"))
if(a0==null)a0=0.5
a1=C.aJ(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new B.tg(a2,d,a0,a1)
a3.aoY(a2,d,a0,a1)
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
d=C.kc(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=C.kc(J.q(t,"b"))
r.x=d===!0
d=C.aT(J.q(t,"bw"))
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
J.ch(v,r)}i=g.a(J.q(w,"wires"))
i=J.aV(i==null?A.cu:i)
h=x.j
while(i.C()){q=i.gS(i)
p=h.a(q)
f=C.aJ(J.q(p,0))
o=f==null?a5:A.k.N(f)
f=C.aJ(J.q(p,2))
n=f==null?a5:A.k.N(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.q(v,o)
l=J.q(v,n)
if(m!=null&&l!=null)a6.ajz(m,A.k.N(C.dQ(J.q(p,1))),l,A.k.N(C.dQ(J.q(p,3))))}i=C.aJ(J.q(w,"challenge"))
i=A.k.N(i==null?0:i)
k=C.aX(x.S)
h=g.a(J.q(w,"done"))
h=J.aV(h==null?A.cu:h)
while(h.C()){j=h.gS(h)
J.ch(k,A.k.N(C.dQ(j)))}return new C.bmN(i,k)}catch(a4){return a5}},
fqh(){var w=0,v=C.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fqh=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.az(),$async$fqh)
case 7:r=o.aT(n.q(e.a,"ngmy_electronics_lab_v1"))
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
return C.i($async$fqh,v)},
bCa(d){return B.i4y(d)},
i4y(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bCa=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.az(),$async$bCa)
case 7:w=6
return C.b(f.au("String","ngmy_electronics_lab_v1",d),$async$bCa)
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
return C.i($async$bCa,v)},
coA(d,e){var w=0,v=C.j(x.g7),u
var $async$coA=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.fXS().wO(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$coA,v)}},D,T,H,R,Y,A8,A9,Am,Z
J=c[1]
C=c[0]
A=c[2]
A_=c[130]
A0=c[140]
Aa=c[139]
A1=c[131]
A2=c[127]
I=c[119]
P=c[111]
A3=c[115]
Ab=c[133]
A4=c[136]
A5=c[112]
G=c[122]
Ac=c[117]
Ad=c[132]
A6=c[135]
Ae=c[67]
W=c[76]
Af=c[83]
Ag=c[80]
Q=c[87]
N=c[106]
Ah=c[141]
Ai=c[107]
X=c[118]
O=c[120]
U=c[137]
Aj=c[71]
Ak=c[94]
V=c[138]
K=c[134]
A7=c[91]
L=c[126]
S=c[92]
Al=c[24]
E=c[26]
F=c[93]
M=c[103]
B=a.updateHolder(c[17],B)
D=c[116]
T=c[129]
H=c[41]
R=c[124]
Y=c[123]
A8=c[128]
A9=c[121]
Am=c[125]
Z=c[98]
B.aiU.prototype={}
B.UI.prototype={
U(){return new B.bis(C.T(x.N,x.i),new C.ar(A.as,$.aw()),C.a([],x.X),C.a([],x.K),C.mw(0,null,null))}}
B.bis.prototype={
gVu(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
this.ch.q()
this.a2()},
MY(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$MY=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aU.ak$.d.c
if(s!=null)s.jx()
p.bN(0,A.c3)
t.m(new B.e3g(t))
t.a.toString
p=t.gVu()
w=3
return C.b(B.bxG(B.hIU(q,B.hUt(p),o,t.ay)),$async$MY)
case 3:s=e
r=s==null?null:J.iS(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=B.hVT(q,p,o)
if(t.c==null){w=1
break}t.m(new B.e3h(t,o,r))
$.aU.x1$.push(new B.e3i(t))
case 1:return C.h(u,v)}})
return C.i($async$MY,v)},
Xt(d){return this.bXc(d)},
aUd(){return this.Xt(null)},
bXc(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Xt=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aU.ak$.d.c
if(s!=null)s.jx()
t.f.saV(0,o)
t.m(new B.e3t(t))
E.dF(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=B
w=3
return C.b(B.bxG(B.hPE(o)),$async$Xt)
case 3:r=n.a=m.i2I(f)
p.b=""
if(r!=null&&!B.hUu(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=B.hVU(o)
q=C.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new B.aiU(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new B.e3u(p,t))
t.c1p(p.a)
case 1:return C.h(u,v)}})
return C.i($async$Xt,v)},
c1p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
A.d.a9(w)
w=++m.as
v=m.gVu()
A.d.a9(v.a)
A.d.a9(v.b)
m.e.a9(0)
m.m(new B.e3p(m))
t=d.d
s=C.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new B.e3n(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new B.e3q(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.L)(r),++u){p.$2(o,new B.e3r(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new B.e3s(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.by.j(0.1),g=C.m(16),f=C.I(A.by.j(0.35),A.q,1)
if(m.x)j=C.A(C.a([D.eLQ,A.bf,C.D(C.d(m.Q,l,l,l,l,l,l,A.SF,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.fa0
else{w=C.D(C.d(k.a,l,l,l,l,l,l,Ac.T9,l,l,l),1)
v=x.p
w=C.a([C.A(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.eWi,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.C(A.v6,C.d(u,l,l,l,l,l,l,D.eYT,l,l,l),l))
w.push(A.cX)
w.push(C.d(k.b,l,l,l,l,l,l,F.D3,l,l,l))
u=k.e
if(u.length!==0){t=A.aM.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.f0g,l,l,l),A.f,l,l,new C.o(t,l,l,s,l,l,A.n),l,l,l,A.ia,A.ck,l,l,l))}w.push(A.an)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.az
w.push(new C.C(A.Lp,new C.cm(A.aO,A.e,A.j,A.F,l,A.p,l,0,C.a([new C.x(t,l,A.mE,l,l,l,l,l,l,l,l,l),A.bp,new C.bD(1,A.bi,new C.x(q,l,new C.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.L)(j),++p){o=j[p]
t=new C.aW(12,12)
s=new C.aW(12,12)
A.d.v(w,C.a([A.O,new C.bH(A.a7,l,l,C.p(l,new C.x(o.a,l,A.a6H,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.by.j(0.3),l,l,new C.bq(t,t,t,t),l,l,A.n),l,l,l,l,A.fH,l,l,l),l),A.at,C.p(l,new C.x(o.b,l,D.f5w,l,l,l,l,l,l,l,l,l),A.f,l,l,new C.o(A.c.j(0.07),l,l,new C.bq(s,s,s,s),l,l,A.n),l,l,l,l,A.bS,l,l,l)],v))}if(m.ax)w.push(D.e3t)
j=C.cd(C.v(w,A.F,l,A.e,A.j,0,A.p),A.r,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=C.v(C.a([C.aha(C.p(l,j,A.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,A.n),l,l,l,D.boO,A.ei,l,l,1/0),A.bc,A.i8),C.D(B.fZE(m.gVu(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new B.dz("Ask about it",i,new B.e3x(m),l,A.by,l),new B.dz("Invent something new",!i,new B.e3y(m),l,A.by,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.d9c[p]
i.push(new B.dz(n,!1,new B.e3z(m,n),l,A.by,l))}f.push(new B.eN(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cUu[p]
i.push(new B.dz(r,!1,new B.e3A(m,r),l,A.by,l))}f.push(new B.eN(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=C.D(C.aM(l,A.T,!1,l,!0,A.r,l,C.aN(),m.f,l,l,l,l,l,2,C.br(l,new C.b4(4,C.m(16),A.Y),l,A.eP,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kw,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new B.e3B(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dl,!0,A.a4,l,A.am,l,A.aNW,l,l),1)
h=m.at
v=h&&j?D.bCQ:A.dW
j=h&&j?"Ask":"Invent"
f.push(C.A(C.a([i,A.ab,new B.fg(v,j,new B.e3C(m,k),A.by,l)],w),A.m,l,A.e,A.j,0,l,l))
return B.jF(A.by,A.ha,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.v(f,A.m,l,A.e,A.Q,0,A.p))}}
B.FC.prototype={}
B.uE.prototype={}
B.V9.prototype={
U(){return new B.aD2(A.J,A.J,A.au,C.aX(x.S),$,A.bw,0,C.a([],x.X),null,null)}}
B.aD2.prototype={
gaVn(){var w,v,u,t=this,s=D.GG[t.cx],r=D.Q_[t.cy],q=D.BP[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ec(w,w.r,C.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.auU[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cI(p,0,new B.ejf())},
ga1G(){return D.GG[this.cx].d/this.gaVn()},
gaMV(){return 0.1*(D.GG[this.cx].d/0.9)/D.Q_[this.cy].d},
a_(){this.a1()
this.la()
B.z7("rocket_lander").bz(new B.ejz(this),x.P)},
c1y(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cI.aj()*0.6
w.f=new C.u(0.15+A.cI.aj()*0.7,0.08)
w.r=new C.u((A.cI.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
lr(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new B.ejA())
return}w=D.r8[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga1G()
v=v.ad(0,new C.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaMV())}if(m.dy){t=m.r
v=v.aC(0,t.aF(0,t.gco()*6*D.awH[m.d]))}t=m.r=m.r.ad(0,v.aF(0,d))
s=m.f=m.f.ad(0,t.aF(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new C.u(-t.a*0.4,t.b)
t=new C.u(A.k.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new C.u(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.BP[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
B.vH("rocket_lander",C.F(["unlocked",t],x.N,x.z))
B.Bi("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga1G()/(D.r8[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.aa(m.ga1G()/(D.r8[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dF(80,"",500,0,0.6,"noise")
C.fK()}}if(m.Q&&m.x>0&&A.o.G(A.k.bu(m.CW*20),2)===0)E.dF(90,"",70,0,0.12,"noise")
m.m(new B.ejB())},
aeL(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.eYq,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new B.dz(e[w].a,f.$1(w),new B.ejh(this,g,w),v,h,v))
return new C.C(A.eO,C.v(C.a([u,A.cX,C.bY(A.bz,s,A.br,6,6)],t),A.F,v,A.e,A.j,0,A.p),v)},
bBL(d){var w,v,u,t,s=this,r=null,q=s.ga1G()/(D.r8[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaMV()),o=D.awH[s.d],n=C.m(24),m=d.c,l=C.I(m.j(0.6),A.q,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.T4,r,r,r),A.S,s.aeL("ENGINE: "+D.GG[s.cx].b,D.GG,new B.ej6(s),new B.ej7(s),A.ct),s.aeL("FUEL TANK: "+D.Q_[s.cy].b,D.Q_,new B.ej8(s),new B.ej9(s),A.b7),s.aeL("LANDING GEAR: "+D.BP[s.db].b,D.BP,new B.eja(s),new B.ejb(s),A.aT),s.aeL("EXTRAS (tap to add)",D.auU,new B.ejc(s),new B.ejd(s),A.by)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.frJ)
o=(q?A.b7:A.ci).j(0.14)
w=C.m(12)
v=A.k.aa(s.gaVn(),2)
u=A.k.aa(s.ga1G()/(D.r8[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.BP[s.db].d*100)+".",r,r,r,r,r,r,D.eZ0,r,r,r),A.f,r,r,new C.o(o,r,r,w,r,r,A.n),r,r,r,A.ia,A.bS,r,r,r))
m.push(A.S)
m.push(new C.bH(A.A,r,r,new B.fg(A.nb,"Launch",new B.eje(s),A.b7,r),r))
return C.av(C.p(r,C.cd(C.v(m,A.F,r,A.e,A.Q,0,A.p),A.r,r,A.y,r,A.bV,r,r,A.ah),A.f,r,A.lw,new C.o(D.bfH,r,l,n,r,r,A.n),r,r,r,A.bS,r,r,r,r),r,r,r)},
aWv(d,e,f,g){var w=null,v=f?A.ct:A.c.j(0.1),u=C.m(18),t=C.I(A.b2,A.q,1)
return C.o8(A.jf,C.p(w,C.W(d,A.c,w,w,w,30),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new B.ej3(e),new B.ej4(e),w,w,w,w,new B.ej5(e))},
aWu(d,e,f){return this.aWv(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cp(new B.ejs(s,D.r8[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.r8[w].a:"\ud83d\udd12"
o.push(new B.dz(v,s.d===w,new B.ejt(s,w),r,D.r8[w].c,r))}v=C.a([s.aWu(F.akK,new B.eju(s),s.y),A.bf,s.aWv(A.vs,new B.ejv(s),s.Q,130),A.bf,s.aWu(A.Nb,new B.ejw(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aT:A.c.j(0.1)
t=C.m(18)
A.d.v(v,C.a([A.bf,C.aE(r,C.p(r,D.bH1,A.f,r,r,new C.o(u,r,C.I(A.b2,A.q,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.ejx(s),r,r,r,r,r,r,!1,A.a8)],p))}return B.jF(A.ct,A.ha,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.v(C.a([new B.eN(o,"WORLD",r),C.A(v,A.m,r,A.bb,A.j,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
B.bfr.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.r8[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.X(),d=C.M(),a0=j.c,a1=C.aq(D.bik,a0,0.25)
a1.toString
d.saq(new C.a8(A.b0,A.b5,A.x,C.a([F.aco,a1],x.O),l,l).av(0,new C.a9(0,0,g,f)))
a2.aX(new C.a9(0,0,g,f),d)
w=new C.eJ()
w.dB(5)
for(g=a2.a,v=0;v<70;++v){f=w.aj()
d=w.aj()
a1=w.aj()
u=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
u.r=A.c.j(0.2+w.aj()*0.5).gp(0)
t=u.H()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=C.a([],f)
r=new C.aP(e.r,A.ap,l,l,d)
r.E(new C.b5(0,s+14))
q=new C.eJ()
q.dB(2)
for(p=0;p<=i;p+=18){e=new C.ap(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.aj()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bx(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.E(new C.ap(i,h))
r.E(new C.ap(0,h))
r.E(new C.bF())
e=$.X()
d=C.M()
d.r=C.aq(a0,A.w,0.6).gp(0)
a2.aP(r,d)
o=C.co(new C.u(k.ax*i,s+10),8,k.ay*i)
d=C.bz(o,A.ii)
a0=C.M()
a0.r=A.bo.gp(0)
a2.aD(d,a0)
a0=C.bz(o.cF(2),A.rq)
d=C.M()
d.b=A.ae
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aD(a0,d)
if(k.as==="ready")return
d=k.f
J.bA(g.save())
g.translate(d.a*i,d.b*h)
a2.iW(0,k.w)
i=k.as
if(i==="crashed"){k=C.M()
k.r=A.ct.j(0.6).gp(0)
k.z=X.Hc
a2.ah(A.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.aP(i,A.ap,l,l,C.a([],f))
n.E(new C.b5(-8,18))
n.E(new C.ap(0,44+Math.sin(k.CW*40)*8))
n.E(new C.ap(8,18))
n.E(new C.bF())
k=C.M()
k.r=A.aM.gp(0)
a2.aP(n,k)
i=new C.aP(i,A.ap,l,l,C.a([],f))
i.E(new C.b5(-4,18))
i.E(new C.ap(0,32))
i.E(new C.ap(4,18))
i.E(new C.bF())
k=C.M()
k.r=A.c.gp(0)
a2.aP(i,k)}k=e.r
m=new C.aP(k,A.ap,l,l,C.a([],f))
m.E(new C.b5(0,-26))
m.E(new C.cS(14,-10,11,18))
m.E(new C.ap(-11,18))
m.E(new C.cS(-14,-10,0,-26))
m.E(new C.bF())
i=C.M()
i.saq(D.bTc.av(0,D.eEL))
a2.aP(m,i)
i=C.M()
i.r=A.aT.gp(0)
a2.ah(D.vU,5,i)
i=new C.aP(k,A.ap,l,l,C.a([],f))
i.E(new C.b5(-11,6))
i.E(new C.ap(-20,20))
i.E(new C.ap(-11,18))
i.E(new C.bF())
h=C.M()
h.r=A.ay.gp(0)
a2.aP(i,h)
f=new C.aP(k,A.ap,l,l,C.a([],f))
f.E(new C.b5(11,6))
f.E(new C.ap(20,20))
f.E(new C.ap(11,18))
f.E(new C.bF())
k=C.M()
k.r=A.ay.gp(0)
a2.aP(f,k)
g.restore()},
ar(d){return!0}}
B.aKS.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvE.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btZ()}}
B.aQI.prototype={}
B.a2j.prototype={}
B.b8z.prototype={}
B.TA.prototype={
U(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.ew(["skin"],x.N),o=new Float32Array(0)
return new B.aBs(w,v,u,t,s,r,q,new C.cs(null,x.A),p,D.JG,D.JG,A.au,A.cI,o,new Int32Array(0),$,A.bw,0,C.a([],x.X),null,null)}}
B.aBs.prototype={
a_(){var w=this
w.a1()
w.la()
w.as=new B.bZO(w.gc9G())
new B.dCJ(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a8(0)
v.d=null}this.bt_()},
c9H(d){var w,v=this
if(v.c==null)return
w=J.a5(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eT(0,C.F(["t","init","data",$.h8x],x.N,x.z))
v.at=!0
v.ax=""
v.axv()
break
case"pick":v.m(new B.dCl(v,d))
break
case"shot":v.agC(C.t(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
axv(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.asS[q.CW]
v=new B.dCm()
u=q.ay
u=C.B(u,C.a3(u).k("cn.E"))
A.d.fh(u)
t=x.N
s=C.F(["layers",u,"skinMode",q.ch,"tone","#"+C.t(v.$1(w.b))+C.t(v.$1(w.c))+C.t(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.R.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.T(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.eT(0,u)}},
agC(d){return this.cqi(d)},
cqi(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$agC=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cE.aJ(A.a.b0(d,A.a.cJ(d,",")+1))
w=6
return C.b(B.coA(C.a([B.h8i(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$agC)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.I(x.gV).f.R(D.aNe)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$agC,v)},
awX(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
lr(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bu(w)!==A.k.bu(v.ok)){B.a7u("kick",0.4)
v.a4h(170,new B.dCK())}v.ok=w
return},
agr(d){var w,v,u,t,s=this
s.m(new B.dCn(s,d))
if(d==null){s.fx=D.JG
s.dy=1
w=s.as
if(w!=null)w.eT(0,C.F(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.U(w).k("a2<1>")
u=C.B(new C.a2(w,new B.dCo(d),v),v.k("J.E"))
t=A.d.gL(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.K(0,t)
if(s.ch===2)s.ch=1}s.axv()
w=s.as
if(w!=null)w.eT(0,C.F(["t","focus","group",d],x.N,x.z))
s.go=0
s.csH(t,d)
return},
csH(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){B.a7u("kick",0.8)
this.a4h(260,new B.dCp())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dF(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a4h(w*70,new B.dCq(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dF(110,"",360,0.7,0.3,"saw")
else B.vK("organic",6+A.o.G(e.length,8),200,0.6)
break
case"bone":E.dF(210+e.length*4,"",80,0.6,0.55,"tri")
E.dF(2400,"",20,0,0.3,v)
break
case"muscle":E.dF(70,"",150,1,0.6,"sine")
break
case"vessel":E.dF(300,"",380,0.4,0.22,v)
B.a7u("kick",0.3)
break
default:B.vK("organic",2+A.o.G(e.length,6),200,0.4)}},
cx9(d){this.m(new B.dCs(this,d))},
aWN(){var w,v,u,t,s,r,q,p=this,o=C.aX(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
if(p.awX(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.K(0,s.a)}q=C.B(o,o.$ti.k("cn.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aB(w)]
p.p4=""},
bSQ(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new B.dCi(u,w,d))
v=x.t
B.Bi("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a4h(1100,new B.dCj(u))
return}if(d==null){if(u.cx!=null)u.agr(null)
return}u.agr(d)},
bWw(d,e){var w,v=this,u=null,t=C.m(18),s=C.I(A.bU.j(0.5),A.q,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.eUS,u,u,u)}else if(d==null||e==null)w=D.f7z
else{w=x.p
w=C.A(C.a([C.D(C.v(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.i3,u,u,u),A.cX,C.d(e.b,u,u,u,u,u,u,F.D3,u,u,u)],w),A.F,u,A.e,A.Q,0,A.p),1),C.aH(u,u,u,u,D.bJq,u,u,u,new B.dCk(v),u,u,u,u,"Back to the whole body",A.c8)],w),A.F,u,A.e,A.j,0,u,u)}return C.p(u,w,A.f,u,u,new C.o(D.Vl,u,s,t,u,u,A.n),u,u,u,u,I.agp,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.djE.h(0,g)
i.axv()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.d2x
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(i.awX(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.mr,h,h,h,new B.dCz(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bH:C.Du(h,A.q5,q)}else q=A.ks
q=C.v(C.a([C.D(q,1),new C.C(F.XC,i.bWw(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cVQ[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new B.dz(l,n,new B.dCA(i,o),o.c,A.bU,h))}p=C.a([new B.eN(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.L)(w),++s){k=w[s]
n.push(new B.dz(k,k===i.cx,new B.dCB(i,k),h,A.aM,h))}p.push(new B.eN(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(B.hy(A.ci,""+A.k.V(n)+" beats/min","Heart rate",180,40,new B.dCC(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new B.ER(D.asS[j],i.CW===j,new B.dCD(i,j),!1,h))
p.push(new B.eN(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new B.dz("Spin",n,new B.dCE(i),D.ajy,A.aT,h),new B.fg(A.jY,"Reset view",new B.dCF(i),A.c,h),new B.dz(l,m,new B.dCG(i),A.FW,A.aM,h)],v)
if(t.t(0,"organ"))v.push(new B.dz("Heartbeat sound",i.k4,new B.dCH(i),A.nV,A.ci,h))
p.push(new B.eN(v,h,h))
return B.jF(A.bU,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.v(p,A.m,h,A.e,A.Q,0,A.p))}}
B.aJU.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.aJV.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bsZ()}}
B.bZO.prototype={
kt(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aK(e,"</script","<\\/script")
v=$.hez
$.hez=v+1
u="ngmy-body-viewer-"+v
$.yi()
$.q4().pD(u,new B.bZP(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fH(v,"message",new B.bZQ(t),!1,x.gA)
t.b=u},
eT(d,e){var w,v
try{w=this.c
if(w!=null){w=C.bxD(w.contentWindow)
if(w!=null)J.fMi(w,e,"*")}}catch(v){}}}
B.xK.prototype={}
B.BV.prototype={}
B.nh.prototype={}
B.b9h.prototype={}
B.TF.prototype={
U(){var w=x.N,v=x.y,u=x.S
return new B.aBv(C.T(w,x.a2),C.a([],x.cB),C.T(w,v),C.T(w,v),C.T(w,u),A.au,A.J,A.J,C.aX(u),$,A.bw,0,C.a([],x.X),null,null)}}
B.aBv.prototype={
a_(){var w=this
w.a1()
w.la()
w.abv()
$.aU.x1$.push(new B.dEU(w))},
abv(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$abv=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$abv)
case 6:q=e.rV("ngmy_circuit_passed_v1")
r=q==null?A.T:q
if(s.c!=null)s.m(new B.dEy(s,r))
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
return C.i($async$abv,v)},
abP(d){return this.c_c(d)},
c_c(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$abP=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.K(0,d)
u=3
w=6
return C.b(C.az(),$async$abP)
case 6:r=f
q=s.cx
p=C.a3(q).k("jK<cn.E,n>")
q=C.B(new C.jK(q,new B.dEB(),p),p.k("J.E"))
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
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$abP,v)},
avF(d,e,f,g){var w="c"+this.y++,v=new B.BV(w,e,f,g)
this.d.n(0,w,v)
return v},
mr(d,e,f){return this.avF(0,e,f,0)},
aaR(d,e){var w
if(D.yG.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new C.u(-36,w))},
tk(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aQQ(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fP$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.dt(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.e3(m,D.cGo[A.o.G(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tk(p,0)&&n.tk(p,1)
break
case"or":p=q.a
o=n.tk(p,0)||n.tk(p,1)
break
case"xor":p=q.a
o=n.tk(p,0)!==n.tk(p,1)
break
case"nand":p=q.a
o=!(n.tk(p,0)&&n.tk(p,1))
break
case"nor":p=q.a
o=!(n.tk(p,0)||n.tk(p,1))
break
case"not":o=!n.tk(q.a,0)
break
default:o=n.tk(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bLH(){return this.aQQ(null)},
lr(d){var w,v,u,t,s,r,q,p,o,n=this
n.bLH()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a3(w).k("bc<2>")).gae(0),v=new C.fk(w,new B.dEV()),u=n.f,t=n.w,s=0;v.C();){r=w.gS(0).a
if(u.h(0,r)===!0){q=n.fP$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fP$)
o=s+1
E.dF(520+90*A.o.G(s,4),"",200,0,0.25,"square")
s=o}}},
avG(d){var w=this
w.d.a9(0)
A.d.a9(w.e)
w.f.a9(0)
w.r.a9(0)
w.cy=null},
lX(d,e){var w=this.x
return new C.u(d*w.a,e*w.b)},
arV(d){var w=this
if(w.x.A(0,A.au)){$.aU.x1$.push(new B.dEw(w,d))
return}w.m(new B.dEx(w,d))},
csZ(d){this.m(new B.dEC(this,d,$.bCw()[d]))},
c3A(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bCw()[a0]
v=d.d
u=C.a3(v).k("bc<2>")
t=u.k("a2<J.E>")
s=t.k("J.E")
r=C.B(new C.a2(new C.bc(v,u),new B.dEr(),t),s)
A.d.b_(r,new B.dEs())
q=C.B(new C.a2(new C.bc(v,u),new B.dEt(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new B.dEu(d,w))
return}u=d.r
p=C.dU(u,x.N,x.y)
t=x.s
o=C.a([],t)
for(s=A.o.dv(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((A.o.fY(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aQQ(0)
h=m.h(0,A.d.gL(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jE(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aI(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a9(0)
u.v(0,p)
d.m(new B.dEv(d,o,a0))},
awt(d){var w,v,u,t,s=this.d,r=C.a3(s).k("bc<2>")
s=C.B(new C.bc(s,r),r.k("J.E"))
r=C.U(s).k("dw<1>")
s=new C.dw(s,r)
s=new C.bR(s,s.gM(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cc3(d){var w,v,u,t,s,r=this.d,q=C.a3(r).k("bc<2>")
r=C.B(new C.bc(r,q),q.k("J.E"))
q=C.U(r).k("dw<1>")
r=new C.dw(r,q)
r=new C.bR(r,r.gM(0),q.k("bR<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bWp(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.yG.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.aaR(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.y(p,o)
s=l}}}return t},
bKE(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.aaR(p,o)
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
c3C(d){var w,v,u,t=this,s=t.awt(d)
if(s!=null){w=t.d.h(0,s)
w.toString
C.eS()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
E.dF(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new B.dED())
return}u=t.bKE(d)
if(u!=null)t.m(new B.dEE(t,u))
else t.m(new B.dEF(t))},
aut(d){return this.bZh(d)},
bZh(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$aut=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.awt(d)
if(s==null){w=1
break}C.je()
t.m(new B.dEA(t,s))
case 1:return C.h(u,v)}})
return C.i($async$aut,v)},
bxG(d){if(this.x.A(0,A.au))return
this.m(new B.dEq(this,d,A.cI))
C.eS()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bCw()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.W(i.ax?A.nV:O.r4,A.ad,h,h,h,21),h,h,h,new B.dEO(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=A.cs.j(0.14)
r=C.I(A.cs.j(0.5),A.q,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.eU2,h,h,h),C.d(w.b,h,h,h,h,h,h,D.f1b,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.C(A.mg,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?A.b7:A.f3,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.A(C.a([C.D(C.v(q,A.F,h,A.e,A.j,0,A.p),1),C.bJ(D.fin,i.gc3z(),C.bk(A.cs,h,h,h,h,h,h,h,h,h,h,A.c8))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new C.o(s,h,r,t,h,h,A.n),h,h,h,W.Lz,D.bpq,h,h,1/0))}u.push(C.D(C.cp(new B.dEP(i)),1))
if(f!=null){t=C.m(14)
s=A.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.yG.h(0,r).a+": "+D.yG.h(0,r).e,h,h,h,h,h,h,A.w7,h,h,h),A.f,h,h,new C.o(s,h,h,t,h,h,A.n),h,h,h,A9.ag7,A.bS,h,h,1/0))}u=C.v(u,A.m,h,A.e,A.j,0,A.p)
t=C.a([],g)
for(s=D.yG.gdK(D.yG),s=s.gae(s);s.C();){r=s.gS(s)
q=new C.aW(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.aA(o.j(0.5),1,A.q,-1)
t.push(C.aE(h,C.p(h,C.v(C.a([C.W(p.b,o,h,h,h,20),A.bB,new C.x(p.a,h,D.aP3,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new C.o(n,h,new C.bP(m,m,m,m),new C.bq(q,q,q,q),h,h,A.n),h,h,h,A.fx,A7.Lu,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.dEQ(i,r),h,h,h,h,h,h,!1,A.a8))}s=C.a([],g)
for(l=0;l<4;++l){k=D.d6z[l]
s.push(new B.fg(A.Nc,k.b,new B.dER(i,k),A.cs,h))}s.push(new B.fg(D.xO,"Clear",new B.dES(i),A.ci,h))
r=C.a([],g)
for(j=0;q=$.bCw(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.ee:A.ld
o=i.ay
n=i.cx.t(0,j)?A.b7:A.co
r.push(new B.dz(q.a,o===j,new B.dET(i,j),p,n,h))}return B.jF(A.cs,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.v(C.a([new B.eN(t,"PARTS",h),new B.eN(s,"TRY",h),new B.eN(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
B.b9A.prototype={
a5(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.X()
w=C.M()
w.r=D.aaY.gp(0)
a7.aX(new C.a9(0,0,0+a5,0+a6),w)
v=C.M()
v.r=A.c.j(0.05).gp(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.H()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,C.L)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.aaR(j,m.c)
f=q.h(0,l)===!0
l=$.X()
e=C.a([],p)
d=new C.aP(l.r,A.ap,a4,a4,e)
e.push(new C.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.pt(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=9
l.r=A.co.j(0.28).gp(0)
l.z=G.mu
s=l.H()
l=d.gbI().a.snapshot()
w.drawPath((d.e=new C.cF(l)).a,s)
s.delete()}l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=3.2
l.d=A.bO
l.r=(f?A.dN:A.bv).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new C.cF(d.gbI().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ad(0,D.HJ)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.aP($.X().r,A.ap,a4,a4,C.a([],p))
w=a3.b
p.E(new C.b5(a6,w))
r=g.b
p.E(new C.pt(a6+a0,w,a5-a0,r,a5,r))
r=C.M()
r.b=A.ae
r.c=3
r.r=A.ad.gp(0)
a7.aP(p,r)}for(a5=new C.dt(o,o.r,o.e);a5.C();)this.c3B(a7,a5.d)},
c3B(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.yG.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.co(a0.c,64,64)
s=C.bz(t,A.kW)
r=w.cy===v
q=s.eN(A.cw)
$.X()
p=C.M()
p.r=A.w.j(0.55).gp(0)
p.z=A.ll
d.aD(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.M()
p.saq(new C.bS(A.A,0.5,A.x,g,0,C.a([e.c.j(0.6),A.K],x.O),g,g).av(0,C.bT(a0.c,52)))
d.ah(q,52,p)}q=s.eN(A.cJ)
p=C.M()
o=e.c
p.r=C.aq(o,A.w,0.65).gp(0)
d.aD(q,p)
n=u?0.35:0
q=C.M()
p=C.aq(o,A.c,0.1+n)
p.toString
m=C.aq(o,A.w,u?0.2:0.45)
m.toString
q.saq(new C.a8(A.b0,A.b5,A.x,C.a([p,m],x.O),g,g).av(0,t))
d.aD(s,q)
q=C.M()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aD(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.Nh:D.bDl}else l=e.b
k=B.fRH(C.jE(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aC(0,new C.u(p/2,q.gbd(q)/2)))
j=B.fRH(e.a,10.5,A.c,g,g,A.H)
j.a5(d,a0.c.ad(0,new C.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=B.fRH(f,9,u?A.dN:A.c_,g,g,A.u)
i.a5(d,a0.c.ad(0,new C.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aXk(d,w.aaR(a0,h),o)
this.aXk(d,a0.c.ad(0,D.HJ),o)},
aXk(d,e,f){var w
$.X()
w=C.M()
w.r=D.aaY.gp(0)
d.ah(e,8.5,w)
w=C.M()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.ah(e,8.5,w)
w=C.M()
w.r=A.c.gp(0)
d.ah(e,3.2,w)},
ar(d){return!0}}
B.aK_.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvn.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bt4()}}
B.MN.prototype={
U(){return new B.aBM(C.mw(0,null,null))}}
B.JS.prototype={
a4(){return"_UnfoldStyle."+this.b}}
B.A7.prototype={}
B.aBM.prototype={
c3G(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcr(0).at
v.toString
w.f=v}w.m(new B.dKL(w,e))},
bYb(){var w=this
w.e.q()
w.e=C.mw(w.f,null,null)
w.m(new B.dKK(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.og(t,C.c8(v,A.bX,t?new B.bps(w.e,w.gc3F(w),new B.dKM(d),v):new B.aG0(u,new C.cx(u.b,x.gj)),v,!1,!1,v,!1),new B.dKN(w,u),x.C)}}
B.br_.prototype={}
B.bps.prototype={
aXl(d,e){var w=null
return new C.C(I.Y1,C.v(C.a([C.d(d,w,w,w,w,w,w,D.eUC,w,w,w),A.bB,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.A(C.a([C.aH(v,v,v,v,S.nc,v,v,v,w.e,v,v,v,v,v,v),A.rw,D.bve],u),A.m,v,A.e,A.j,0,v,v),s=w.aXl("STUDIOS","Play, make things, and keep what you make")
$.bCx()
return C.bn(!0,C.v(C.a([new C.C(D.buj,t,v),C.D(C.vj(0,v,A.r,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,C.a([new C.m3(s,v),new C.nM(A.hJ,C.Ol(new C.oj(new B.eTw(d),22,!0,!0,!0,0,C.rK(),v),D.aN3),v),new C.m3(w.aXl("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nM(D.bpx,C.Ol(new C.oj(new B.eTx(w),6,!0,!0,!0,0,C.rK(),v),D.aN3),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)}}
B.adZ.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.aq(F.mW,p,0.3)
m.toString
w=x.O
m=C.a([m,D.adG],w)
v=C.I(p.j(0.6),A.q,1.2)
u=x.V
t=C.a([new C.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=C.aq(p,A.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ac(0,A.G,p.j(0.5),A.J,12)],u)
return C.aG(!1,A.a1,!0,r,C.aL(!1,o,!0,C.eA(C.v(C.a([C.p(r,C.W(q.c,A.c,r,r,r,24),A.f,r,r,new C.o(r,r,r,r,u,new C.a8(A.ax,A.aC,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.O,C.d(q.a,r,2,A.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cX,C.d(q.b,r,2,A.a2,r,r,r,C.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.bb,A.j,0,A.p),r,new C.o(r,r,v,n,t,new C.a8(A.ax,A.aC,A.x,m,r,r),A.n),r,A.Fe,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
B.acT.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.aq(F.mW,A.d.gL(i),0.24)
f.toString
w=x.O
f=C.a([f,D.adG],w)
v=C.I(A.d.gL(i).j(0.35),A.q,1)
u=x.V
t=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cw,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aW(6,6)
m=C.a([A.d.gL(i),A.d.gal(i)],w)
l=C.a([new C.ac(0,A.G,A.w.j(0.45),I.aFL,0)],u)
r.push(C.p(k,C.W(q[p],A.c,k,k,k,11),A.f,k,k,new C.o(k,k,k,new C.bq(n,n,n,n),l,new C.a8(A.a3,A.a7,A.x,m,k,k),A.n),k,17,k,new C.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.v(r,A.m,k,A.e,A.Q,0,A.p)
u=C.aq(A.d.gL(i),A.d.gal(i),0.4)
u.toString
return C.aG(!1,A.a1,!0,k,C.aL(!1,h,!0,C.eA(C.v(C.a([new C.a7(58,k,w,k),A.S,C.d(j.b,k,2,A.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.at,C.W(A.Bu,A.d.gL(i),k,k,k,18)],s),A.m,k,A.bb,A.j,0,A.p),k,new C.o(k,k,v,g,t,new C.a8(A.ax,A.aC,A.x,f,k,k),A.n),k,A.Fe,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag)}}
B.Pr.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.aq(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.c_(j,new C.o(h,j,j,C.m(22),j,j,A.n),A.bd),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.ac(0,A.G,A.w.j(0.55),A.Rj,26),new C.ac(-6,A.G,A.d.gL(i).j(0.1+0.4*t),A.J,30)],s)
q=C.m(22)
p=C.aq(A.d.gL(i),A.c,0.14)
p.toString
o=A.d.gL(i)
n=A.d.gal(i)
i=C.aq(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bZ(0,C.c_(j,new C.o(j,j,j,j,j,new C.a8(A.ax,A.aC,A.x,C.a([p,o,n,i],m),D.dbt,j),A.n),A.bd),0,0,0),C.ao(j,C.c_(j,new C.o(j,j,j,j,j,new C.a8(A.b0,A.b5,A.x,C.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bd),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bZ(0,C.b3(j,j,j,new B.bqq(i,j),A.au),0,0,0))
i=A.c.j(0.16)
p=C.I(A.c.j(0.5),A.q,1.4)
s=C.a([new C.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=C.p(j,C.W(k.f,A.c,j,j,j,28),A.f,j,j,new C.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.eWa,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,C.a([A.at,C.d(i,j,1,A.a2,j,j,j,C.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a5,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Sq)
p.push(C.p(j,j,A.f,j,j,new C.o(A.c.j(0.28),j,j,C.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.C(A.fI,C.A(C.a([s,A.eB,C.D(C.v(p,A.F,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bZ(0,C.e1(C.ek(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.bZ(0,C.e1(C.c_(j,new C.o(j,j,C.I(A.c.j(0.3),A.q,1.2),i,j,j,A.n),A.bd),!0,j),0,0,0))
return new C.a7(w,v,new C.an(A.W,j,A.aa,A.f,C.a([h,C.bZ(0,C.c_(C.bw(q,new C.an(A.W,j,A.aa,A.r,m,j),A.aq),new C.o(j,j,j,u,r,j,A.n),A.bd),0,0,0)],l),j),j)}}
B.bqq.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.a9(r,-10,s,w)
u=d.a
J.bA(u.save())
u.translate(v.gbR().a,v.gbR().b)
d.iW(0,0.35)
t=C.co(A.J,(w- -10)*1.6,s-r)
$.X()
s=C.M()
s.saq(new C.a8(A.a3,A.a7,A.x,C.a([A.K,A.c.j(0.3),A.K],x.O),null,null).av(0,t))
d.aX(t,s)
u.restore()},
ar(d){return d.b!==this.b}}
B.bpW.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.bdR,D.acU],x.O),t=this.e,s=C.I(A.d.gL(t).j(0.4),A.q,1.2),r=C.a([new C.ac(0,A.G,A.w.j(0.5),A.k1,24)],x.V),q=C.m(22),p=A.d.gL(t)
return new C.a7(this.c,this.d,C.c_(C.bw(q,C.b3(C.av(C.W(A.jh,A.d.gL(t).j(0.7),w,w,w,34),w,w,w),w,w,new B.b8g(p,w),A.au),A.aq),new C.o(w,w,s,v,r,new C.a8(A.ax,A.aC,A.x,u,w,w),A.n),A.bd),w)}}
B.b8g.prototype={
a5(d,e){var w,v,u,t,s,r,q,p
$.X()
w=C.M()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.H()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.H()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.eh(A.J)
$.X()
t=C.M()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gp(0)
d.ah(u,30,t)},
ar(d){return!1}}
B.aG0.prototype={
U(){return new B.aG1(new C.cs(null,x.A),null,null)}}
B.aG1.prototype={
gtG(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,D.bmV,null,1,null,v)
w.cH(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
gYL(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.fG,null,1,null,v)
w.f9(0,!0)
v.e!==$&&C.bM()
v.e=w
u=w}return u},
gavH(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc3D(){var w=this.w
if(w===$){w=C.B(this.a.c.d,x.G)
this.w=w}return w},
gaTX(){var w=this.x
if(w===$){w=C.B(this.a.c.e,x.Z)
this.x=w}return w},
gaUB(){var w=this.y
if(w===$){w=C.B(this.a.c.f,x.N)
this.y=w}return w},
gb4S(){var w=this.z
if(w===$){w=C.B(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a1()
var w=this.gtG()
w.d9()
w.dR$.K(0,this.gcsI())},
csJ(){var w,v,u,t,s,r,q,p=this,o=p.gtG().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gavH().a){case 0:w=D.nf
break
case 1:w=D.u_
break
case 2:w=D.a1o
break
case 3:w=D.nf
break
case 4:w=D.d_B
break
case 5:w=D.u_
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a8H)r=0.09
else r=s===D.a8I?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dF(260+90*v,"",260,1.6,0.18,"tri")
u=D.bVI[v]
B.ld("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
B.Bi("bell",D.c3r,1400,0.35)}}p.ax=o},
q(){this.gtG().q()
this.gYL().q()
this.buU()},
afb(){var w=this
w.gtG().cRD(0,C.dC(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new B.eTc(w))},
ce5(){this.gtG().bY(0)
this.m(new B.eTb(this))},
acM(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$acM=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaUB(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){q=t[r]
l.push(new C.ar(new C.bb(q,A.b3,A.aN),$.aw()))}m=C.a([],m)
for(t=u.gb4S(),s=t.length,r=0;r<t.length;t.length===s||(0,C.L)(t),++r){p=t[r]
m.push(new C.ar(new C.bb(p,A.b3,A.aN),$.aw()))}o=C.B(u.gaTX(),x.Z)
t=u.c
t.toString
w=2
return C.b(C.bV(F.mW,null,new B.eTa(u,l,m,o),t,!0,!0,!0,A.lo,!1,!1,x.H),$async$acM)
case 2:l=C.B(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.T$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$acM,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gavH(),f=i.a.c,e=f.b,d=i.gc3D(),a0=new B.A7(g,e,f.c,d,i.gaTX(),i.gaUB(),i.gb4S())
f=C.aq(A.d.gL(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.W(i.at?A.nV:O.r4,A.ad,h,h,h,21),h,h,h,new B.eTk(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bMR,h,h,h,i.gc3E(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.mr,h,h,h,new B.eTl(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c6(i.gYL(),new B.eTm(i,a0),h),C.cp(new B.eTn(i,a0))],g)
u=i.as
t=u?i.gce4():i.gcgn()
u=u?D.bCC:A.tO
s=C.aq(A.d.gL(d),A.d.gal(d),0.4)
s.toString
t=C.A(C.a([C.aH(h,h,h,h,C.W(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.c8),C.D(C.c6(i.gtG(),new B.eTo(i,a1,a0),h),1),C.aH(h,h,h,h,D.bJg,h,h,h,new B.eTp(i),h,h,h,h,"Replay",A.c8)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.aa(s,1)
r=C.aq(A.d.gL(d),A.d.gal(d),0.4)
r.toString
s=B.hy(r,u+"x","Speed",2.5,0.4,new B.eTq(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.d8Q[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.aq(A.d.gL(d),A.d.gal(d),0.4)
r.toString
u.push(new B.dz(p.b,o===p.a,new B.eTr(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bW2[q]
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}m=A.d.gL(o).A(0,A.d.gL(n))?34:28
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}l=A.d.gL(o).A(0,A.d.gL(n))?34:28
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}k=A.d.gL(o).A(0,A.d.gL(n))?A.c:A.b2
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}j=new C.aA(k,A.d.gL(o).A(0,A.d.gL(n))?2.5:1,A.q,-1)
d.push(C.aE(h,C.p(h,h,A.f,h,h,new C.o(h,h,new C.bP(j,j,j,j),h,h,new C.a8(A.ax,A.aC,A.x,n,h,h),A.a6),h,l,h,D.afT,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new B.eTs(i,n),h,h,h,h,h,h,!1,A.a8))}return B.jF(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.et(new C.an(A.W,h,A.b_,A.r,v,h),i.f),e,C.v(C.a([t,s,new B.eN(u,"STYLE",h),new B.eN(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
bwS(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nf[r]
p=A.k.D((1-A.ev.aw(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.nf[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.nf[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=C.dm()
l=n.a
l.$flags&2&&C.ai(l)
l[11]=0.0013
n.jR(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nf[r]
h=i+0.1
if(A.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nf[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nf[r]
h=i+0.1
h=A.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cL(0,r*118,0,f,f,f,new C.kA(q,new C.iE(n,f,A.b0,!0,f,new B.Pr(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nf[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gL(w)
v=D.nf[r]
t=v+0.12
e.push(new C.cL(0,r*118-3-2,0,f,f,4,new C.md(new B.bp4(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.au,f,f),f))}return new C.a7(a2,358,new C.an(A.W,f,A.aa,A.f,e,f),f)},
bN6(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.u_[r]
p=A.py.aw(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.u_[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.u_[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dm()
k=m.a
k.$flags&2&&C.ai(k)
k[11]=0.0011
m.jB(n,n,n,1)
m.fz(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new B.Pr(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dm()
k.fz(3.141592653589793)
k=new C.iE(k,f,A.A,!0,f,new B.bpW(a2,108,w,f),f)}e.push(new C.cL(0,r*130,0,f,f,f,new C.kA(q,new C.iE(m,f,A.A,!0,f,k,f),f),f))}return new C.a7(a2,378,new C.an(A.W,f,A.aa,A.f,e,f),f)},
cxF(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a1o[w]
l.push(A.cr.aw(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bZ(0,C.b3(n,n,n,new B.bst(d.d,l,D.aux,m,B.bpr(e,0.4,0.62),f,B.bpr(e,0.45,0.7),n),A.au),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=B.fSc(g,w)
q=D.aux[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cL(r,s-q*m*p+12,n,n,t,n,new C.kA(o,C.W(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=B.fSc(g,w)
r=D.a1o[w]
q=r+0.15
v.push(new C.cL(s,l,n,n,t,n,new C.kA(A.k.D((e-q)/(r+0.25-q),0,1),new C.x(u[w],n,A.a7b,n,A.L,n,n,n,n,n,n,n),n),n))}return new C.a7(g,m+90,new C.an(A.W,n,A.aa,A.f,v,n),n)},
bCZ(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cr.aw(0,B.bpr(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bZ(0,C.av(C.dW(C.b3(f,f,f,new B.bow(A.d.gL(a1),B.bpr(a3,0,0.2),a4,f),new C.at(a5*0.95,70)),D.e_5),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dB.aw(0,A.k.D((o-0.7)/0.3,0,1))
l=C.dm()
m=l.a
m.$flags&2&&C.ai(m)
m[11]=0.001
l.fz(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jB(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.G(r,1):-1
w.push(new C.y(o,new C.cL(0,0,0,0,f,f,new C.cr(A.A,f,f,new C.kA(k*(0.45+0.55*o),C.dW(new C.iE(l,f,A.A,!0,f,new B.Pr(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.u(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new B.eT3())
A.d.v(a0,new C.K(w,new B.eT4(),x.fR))
return new C.a7(a5,330,new C.an(A.W,f,A.aa,A.f,a0,f),f)},
bCb(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.u_[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.mI.aw(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.u_[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.aws[q]
k=C.dm()
k.mE(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jB(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.u_[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cL(0,0,0,0,e,e,new C.cr(A.A,e,e,new C.kA(m,C.dW(new C.iE(k,e,A.A,!0,e,new B.Pr(d,92,w,p,j,i,0,g*s,h,e),e),new C.u(0,l)),e),e),e))
l=D.u_[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cL(0,0,0,0,e,e,new C.cr(A.A,e,e,C.dW(new C.md(new B.b8W(w,f,q,e),e,new C.at(r,212),e,e),new C.u(0,D.aws[q])),e),e))}return new C.a7(a4,330,new C.an(A.W,e,A.aa,A.f,a0,e),e)},
bzN(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.u(-b0,-150),new C.u(b0,-40),D.e_9],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nf[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.cr.aw(0,p)
q=D.awx[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nf[r]
f=g+0.2
e=A.k.D((a8-f)/(g+0.3-f),0,1)
f=D.nf[r]
g=f-0.01
g=A.k.D((a8-g)/(f+0.03-g),0,1)
f=C.dm()
d=f.a
d.$flags&2&&C.ai(d)
d[11]=0.001
f.mE(l*h+D.d3q[r]*o)
f.fz(l*0.9)
h=0.55+0.45*o
f.jB(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cr(A.A,a3,a3,new C.kA(g,C.dW(new C.iE(f,a3,A.A,!0,a3,new B.Pr(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nf[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.awx[r]
a6.push(new C.cL(0,0,0,0,a3,a3,new C.cr(A.A,a3,a3,C.dW(new C.md(new B.boy(A.d.gL(w),a2,a3),a3,new C.at(a4,30),a3,a3),new C.u(0,q+48-4)),a3),a3))}}return new C.a7(b0,330,new C.an(A.W,a3,A.aa,A.f,a6,a3),a3)}}
B.bp4.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.a9(w-v,0,w+v,e.b)
q=C.bz(u,A.hc)
$.X()
t=C.M()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=G.mu
d.aD(q,t)
t=C.bz(u,A.hc)
q=C.M()
q.r=A.c.j(s).gp(0)
d.aD(t,q)},
ar(d){return d.c!==this.c||d.d!==this.d}}
B.bow.prototype={
a5(d,e){var w,v,u=this.c,t=C.co(e.eh(A.J),e.b*u,e.a*u)
$.X()
u=C.M()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=X.Hc
d.hM(t,u)
u=C.M()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hM(t,u)
u=t.cF(-14)
v=C.M()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.hM(u,v)},
ar(d){return!0}}
B.b8W.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.eh(A.J),f=this.c,e=A.cr.aw(0,f)
$.X()
w=C.M()
w.b=A.ae
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gL(u).j(0.6*v).gp(0)
d.ah(g,40+e*a0.a*0.42,w)
t=new C.eJ()
t.dB(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.aj()*3.141592653589793*2
n=(40+t.aj()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.aj()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i=(p&1)===0?A.d.gL(u):A.c
j.r=i.j(A.k.D(v,0,1)).gp(0)
h=j.H()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
ar(d){return!0}}
B.boy.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.eh(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.co(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.X()
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.H()
t.drawOval(C.c1(p),n)
n.delete()}},
ar(d){return d.c!==this.c}}
B.bst.prototype={
a5(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.a9(0,d0,0+c5,d0+60)
$.X()
d0=C.M()
w=c1.b
v=x.O
d0.saq(new C.a8(A.b0,A.b5,A.x,C.a([A.d.gL(w).j(0.18),A.K],v),c2,c2).av(0,d1))
d2.aX(d1,d0)
d0=C.M()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bA(new C.u(0,c4),new C.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=B.fSc(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.X()
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.ll
a4=a3.H()
t.drawOval(C.c1(new C.a9(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.a9(d,a1,a3,a1+a0)
a6=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a7=C.aq(A.d.gL(w),A.c,0.1)
a7.toString
a6.saq(new C.a8(A.b0,A.b5,A.x,C.a([a7,A.d.gal(w)],v),c2,c2).av(0,a5))
a4=a6.H()
t.drawRect(C.c1(a5),a4)
a4.delete()
a2=a2.r
a6=C.a([],n)
a8=new C.aP(a2,A.ap,c2,c2,a6)
a6.push(new C.b5(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new C.ap(a7,a9))
a6.push(new C.ap(a7,m))
a6.push(new C.ap(a3,c4))
a6.push(new C.bF())
a6=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=C.aq(A.d.gal(w),A.w,0.5).gp(0)
a4=a6.H()
a6=a8.gbI().a.snapshot()
t.drawPath((a8.e=new C.cF(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.aP(a2,A.ap,c2,c2,a6)
a6.push(new C.b5(d,a1))
a6.push(new C.ap(d+c8,a9))
a6.push(new C.ap(a7,a9))
a6.push(new C.ap(a3,a1))
a6.push(new C.bF())
a2=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.r=C.aq(A.d.gL(w),A.c,0.45).gp(0)
a4=a2.H()
a2=b0.gbI().a.snapshot()
t.drawPath((b0.e=new C.cF(a2)).a,a4)
a4.delete()
b1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.H()
t.drawRect(C.c1(a5),a4)
a4.delete()
a4=b1.H()
a2=a8.e
t.drawPath((a2==null?a8.e=new C.cF(a8.gbI().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cF(b0.gbI().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bu(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.bz(new C.a9(b7,a7,b7+r,b5),A.hc)
$.X()
b9=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.H()
t.drawRRect(C.eq(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.a9(d,a1,a3,a1+28)
J.bA(t.save())
t.clipRect(C.c1(a5),$.qJ()[1],!0)
$.X()
a1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.saq(new C.a8(A.b0,A.b5,A.x,C.a([A.K,A.c.j(0.4),A.K],v),c2,c2).av(0,c0))
a4=a1.H()
t.drawRect(C.c1(c0),a4)
a4.delete()
t.restore()}}},
ar(d){return!0}}
B.aLH.prototype={
aQ(){this.aY()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdH())
w.b2$=null
w.a2()}}
B.a_y.prototype={
a4(){return"_Role."+this.b}}
B.pU.prototype={}
B.qA.prototype={}
B.BZ.prototype={}
B.Yy.prototype={}
B.adP.prototype={}
B.a_L.prototype={
gY(d){return this.d}}
B.C9.prototype={}
B.aaL.prototype={}
B.ab1.prototype={}
B.acX.prototype={}
B.bfo.prototype={
a1P(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dF(d,"",e,g,h,f)},
b5S(d,e,f){return this.a1P(d,e,f,0,0.55)},
aAc(d,e,f,g){return this.a1P(d,e,f,0,g)},
b5T(d,e,f,g){return this.a1P(d,e,f,g,0.55)},
a9(d){var w=this
w.a.a9(0)
A.d.a9(w.b)
A.d.a9(w.c)
A.d.a9(w.d)
A.d.a9(w.e)
A.d.a9(w.f)
A.d.a9(w.r)
A.d.a9(w.w)
A.d.a9(w.x)
w.y.a9(0)
w.Q.a9(0)
w.as.a9(0)
w.aZ()},
aiO(d,e,f,g){var w="n"+this.ay++,v=new B.qA(w,e,f,g)
this.a.n(0,w,v)
this.aZ()
return v},
AK(d,e,f){return this.aiO(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bn(w.b,new B.deC(e))
A.d.bn(w.c,new B.deD(e))
w.aZ()},
b9H(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mt.h(0,v.b).c===D.wq)return!1
w=this.b
if(A.d.b8(w,new B.dez(d,e)))return!1
w.push(new B.BZ(d,e))
this.aZ()
return!0},
bX9(d){var w
if(d.b==="beat")return D.c3A[A.o.G(d.d,4)]
w=this.at
switch(A.o.G(d.d,3)){case 1:return 350+w.aB(500)
case 2:return 1400+w.aB(2200)
default:return 450+w.aB(2000)}},
aDE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.G(w,6)
t=D.awM[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new B.C9(u,t,j.ax,90))
w.push(new B.C9(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new B.a_L(u,new C.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b5S(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.G(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.aq(t,A.c,w.aj()*0.5)
m.toString
v.push(new B.a_L(u,new C.u(o*p,n*p),m,3+w.aj()*4.5,1000+w.aB(700),j.ax))}j.f.push(new B.C9(u,t,j.ax,120))
j.aAc(120,200,"noise",0.5)
j.b5S(261.63*Math.pow(2,([7,12,16,19][w.aB(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new B.C9(u,t,j.ax,230))
w.push(new B.C9(u,t,j.ax+160,160))
w.push(new B.C9(u,t,j.ax+320,100))
j.b5T(180+j.at.aB(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new B.aaL(u,new C.u((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.b5T(300+w.aB(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new B.ab1(u,u.ad(0,new C.u(Math.cos(q),Math.sin(q)).aF(0,260+w.aj()*200)),t,j.ax))
j.a1P(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fK()
j.a1P(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new B.acX(u,D.awf[v],t,j.ax))
j.aAc(261.63*Math.pow(2,([0,5,9,12][j.at.aB(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aAc(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c_H[A.o.G(w,3)]
for(k=1;k<=3;++k)j.cnY(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new C.fk(w,new B.deA(d));v.C();)j.ayK(w.gS(0),j.ax+D.cbX[A.o.G(g.d,4)])
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
case"chance":s=j.at.aB(100)<D.csI[A.o.G(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new C.fk(w,new B.deB(d));v.C();)j.ayK(w.gS(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.yV(w,0,v-700)},
cnY(d,e,f){var w=this.c
if(w.length>260)return
w.push(new B.Yy(e,"~"+d))},
ayK(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new B.adP(d.a,v,e,w))
u.push(new B.Yy(w,v))},
aGY(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=C.a3(w).k("bc<2>")
w=C.B(new C.bc(w,v),v.k("J.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aDE(r)
u.n(0,r,o.ax+o.bX9(s))}}w=o.c
v=C.U(w).k("a2<1>")
q=C.B(new C.a2(w,new B.deE(o),v),v.k("J.E"))
if(q.length!==0){A.d.bn(w,new B.deF(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.L)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b0(u,1)
for(u=A.d.gae(v),r=new C.fk(u,new B.deG(p));r.C();)o.ayK(u.gS(0),o.ax)}else o.aDE(u)}}A.d.bn(o.d,new B.deH(o))
A.d.bn(o.e,new B.deI(o))
A.d.bn(o.f,new B.deJ(o))
A.d.bn(o.w,new B.deK(o))
A.d.bn(o.x,new B.deL(o))
A.d.bn(o.r,new B.deM(o))
o.aZ()},
uP(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
af(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=C.a([],x.D)
for(v=this.a,v=new C.dt(v,v.r,v.e),u=x.N,t=x.C;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(C.F(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=C.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,C.L)(t),++o){n=t[o]
v.push(C.a([n.a,n.b],r))}return A.R.ao(C.F(["nodes",m,"edges",v],u,x.ew),null)},
cJl(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.a.a(A.R.aG(0,d,null))
k.a9(0)
for(o=x.j,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gS(n)
u=C.t(J.q(v,"k"))
if(!D.mt.ai(0,u))continue
t=C.t(J.q(v,"id"))
m.n(0,t,new B.qA(t,u,new C.u(C.dQ(J.q(v,"x"))*k.cy.a,C.dQ(J.q(v,"y"))*k.cy.b),A.k.N(C.dQ(J.q(v,"p")))))
s=C.c7(C.aK(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gS(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.ai(0,q)&&m.ai(0,p))n.push(new B.BZ(q,p))}k.aZ()
return!0}catch(l){return!1}},
cMn(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a9(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new B.qA(n,r,new C.u(q*p.a,o*p.b),s))
l.aZ()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.b9H(w[m.a],w[m.b])}},
gY(d){return this.cy}}
B.Fo.prototype={}
B.V8.prototype={
U(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new B.aD1(new B.bfo(C.T(w,x.f3),v,u,t,s,r,q,p,o,C.T(w,n),C.T(w,n),C.T(w,n),C.T(w,n),A.cI,A.K,A.au,$.aw()),A.bw,A.J,A.J,A.T,null,null)}}
B.aD1.prototype={
abo(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$abo=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.az(),$async$abo)
case 6:q=n.kc(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new B.eiA(s))
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
return C.i($async$abo,v)},
a8o(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a8o=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new B.eip(s))
u=3
w=6
return C.b(C.az(),$async$a8o)
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
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$a8o,v)},
bIV(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a3(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cI(0,0,new B.eir())+"|"+A.d.cI(o,0,new B.eis())
if(v===p.ch)return p.CW
u=new B.eiv()
t=x.s
s=C.a([],t)
r=new B.eiw(p,s,u)
for(n=new C.bc(n,w).gae(0),w=new C.fk(n,new B.eit());w.C();){q=n.gS(0)
if(!A.d.b8(o,new B.eiu(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.dd(s,0,C.dJ(5,"count",x.S),x.N).dG(0)},
a_(){var w,v=this
v.a1()
v.abo()
v.d.db=v.ay
w=v.qi(new B.ej_(v))
w.j1(0)
v.e!==$&&C.aO()
v.e=w},
q(){var w=this,v=w.as
if(v!=null)v.a8(0)
v=w.e
v===$&&C.c()
v.q()
v=w.d
v.T$=$.aw()
v.P$=0
w.btX()},
aaV(d){return this.bWC(d)},
bWC(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$aaV=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.az(),$async$aaV)
case 6:q=m.aT(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cJl(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aV2(A.d.gL(D.avK))
if(s.c!=null)s.m(new B.eiz())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$aaV,v)},
aV2(d){this.d.cMn(0,d.c,d.d)
this.DN()},
DN(){var w=this.as
if(w!=null)w.a8(0)
this.as=C.cM(A.lG,new B.eil(this))},
avI(d){var w,v,u,t,s=this.d.a,r=C.a3(s).k("bc<2>")
s=C.B(new C.bc(s,r),r.k("J.E"))
r=C.U(s).k("dw<1>")
s=new C.dw(s,r)
s=new C.bR(s,s.gM(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cc4(d){var w,v,u,t,s,r=this.d.a,q=C.a3(r).k("bc<2>")
r=C.B(new C.bc(r,q),q.k("J.E"))
q=C.U(r).k("dw<1>")
r=new C.dw(r,q)
r=new C.bR(r,r.gM(0),q.k("bR<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bWq(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mt.h(0,r.b).c===D.wq)continue
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
c3J(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=B.heA(new C.u(n.a+36,n.b+0),new C.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cvr(d){var w,v,u,t,s,r,q=this,p=q.avI(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eS()
u=v.b
if(u==="button"){w.aDE(p)
return}if(q.r)return
t=D.mt.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qn)s=6
else s=1
v.d=A.o.G(v.d+1,s)
w.aZ()
q.DN()
return}if(q.r)return
r=q.c3J(d)
if(r!=null){w=q.d
A.d.cA(w.b,r)
w.aZ()
q.DN()}},
cdn(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cc4(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.avI(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aC(0,d)}},
cdo(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aZ()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.u(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aZ()}}},
b_1(){var w,v,u=this
if(u.z!=null){w=u.bWq(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.b9H(v,w)}else v=!1
if(v){C.jM()
u.DN()}u.z=null
u.d.aZ()}else if(u.x!=null){if(u.at)u.DN()
u.x=null}},
abB(d){return this.bZi(d)},
bZi(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$abB=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.avI(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.je()
p=t.c
p.toString
w=3
return C.b(C.bV(F.mW,null,new B.eiC(q),p,!0,!0,!1,A.lo,!1,!1,x.y),$async$abB)
case 3:if(f===!0){r.W(0,s)
t.DN()}case 1:return C.h(u,v)}})
return C.i($async$abB,v)},
c3H(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.AK(0,d,new C.u(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
C.eS()
this.DN()},
afj(){var w=0,v=C.j(x.H),u=this,t,s
var $async$afj=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.bV(F.mW,null,new B.eiE(),s,!0,!0,!0,A.lo,!1,!1,x.es),$async$afj)
case 2:t=e
if(t!=null)u.aV2(t)
return C.h(null,v)}})
return C.i($async$afj,v)},
acN(d){var w=0,v=C.j(x.H),u=this,t
var $async$acN=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.eio(),t,null,!0,!0,x.y),$async$acN)
case 2:if(f===!0){u.d.a9(0)
u.DN()}return C.h(null,v)}})
return C.i($async$acN,v)},
B(d){var w=this,v=null,u=C.a([C.aha(w.r?new C.bH(A.a3,v,v,new C.C(A.Ff,C.hc(D.bHh,D.fbu,new B.eiY(w),v),v),v):w.c3K(),A.bc,A.iv),C.D(C.cp(new B.eiZ(w)),1)],x.p)
if(!w.r)u.push(w.cql())
return C.c8(v,A.bX,C.bn(!0,C.v(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bEF(){var w=null,v=new B.eiq(),u=A.w.j(0.7),t=C.m(26),s=C.I(A.bt.j(0.5),A.q,1)
return C.bZ(0,C.ek(C.av(C.p(w,C.cd(C.v(C.a([D.fmh,A.at,D.fty,A.aA,v.$4(A.oE,A.bt,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.G0,A.cs,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.lc,A.bU,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.ajL,A.co,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fsU,new C.bH(A.a7,w,w,C.bK(!1,D.fjw,w,w,!0,w,w,this.gbEy(),w,w),w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),A.f,w,A.UI,new C.o(F.mW,w,s,t,w,w,A.n),w,w,w,A.fy,A9.ah8,w,w,w),w,w,w),u,!0),0,0,0)},
c3K(){var w=this,v=null,u=C.aH(v,v,v,v,S.nc,v,v,v,new B.eiK(w),v,v,v,v,v,v),t=w.a7R(A.N0,"How it works",new B.eiL(w),!0),s=w.ay?A.nV:O.r4
return new C.C(D.bty,C.A(C.a([u,D.bv1,t,w.a7R(s,"Sound",new B.eiM(w),!0),w.a7R(A.dW,"Ideas",w.gch5(),!0),w.a7R(D.xO,"Clear",w.gc3I(w),!0),w.aMd(A.iT,"Show",new B.eiN(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aMd(d,e,f,g,h){var w=null,v=h?A.bt:A.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.W(d,h?A.w:A.c,w,w,w,20)],x.p)
return new C.C(Ae.vg,C.aG(!1,A.a1,!0,u,C.aL(!1,t,!0,C.hp(new C.C(new C.Q(8,8,8,8),C.A(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ag),w)},
a7R(d,e,f,g){return this.aMd(d,e,f,g,!1)},
cql(){var w=null,v=new B.eiG(this),u=A.c.j(0.08)
return C.p(w,C.cd(C.A(C.a([v.$2("START",D.wq),v.$2("CHANGE",D.Dq),v.$2("REACT",D.qn)],x.p),A.F,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),A.f,w,w,new C.o(D.Ei,w,new C.bP(new C.aA(u,1,A.q,-1),A.Y,A.Y,A.Y),w,w,w,A.n),w,w,w,w,D.boQ,w,w,w)},
cqm(d){var w,v,u,t,s=null,r=D.mt.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),A.q,1)
return new C.C(A.fx,C.aE(s,C.p(s,C.v(C.a([C.W(r.b,v,s,s,s,22),A.cX,C.d(r.a,s,1,A.a2,s,s,s,D.aP3,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new C.o(s,s,t,w,s,new C.a8(A.b0,A.b5,A.x,u,s,s),A.n),s,s,s,s,A.hI,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.eiF(this,d),s,s,s,s,s,s,!1,A.a8),s)}}
B.bfp.prototype={
a5(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bA(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.X()
u=C.M()
u.r=A.c.j(0.05).gp(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.H()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.X()
o=C.M()
o.r=b5.cx.j(0.4*((p-b6)/800)).gp(0)
b8.aX(new C.a9(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){l=w[m]
k=n.h(0,l.a)
j=n.h(0,l.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=j.c
f=g.a-36
g=g.b
e=$.X()
d=C.a([],o)
a0=new C.aP(e.r,A.ap,b4,b4,d)
d.push(new C.b5(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new C.pt(h+a1,i,f-a1,g,f,g))
a2=D.mt.h(0,k.b).d
a3=D.mt.h(0,j.b).d
e=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=3
e.d=A.bO
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.rl(new C.u(h,i),new C.u(f,g))
e.saq(new C.a8(A.a3,A.a7,A.x,d,b4,b4).av(0,new C.a9(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbI().a.snapshot()
b7.drawPath((a0.e=new C.cF(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=B.heA(new C.u(i.a+36,i.b+0),new C.u(h.a-36,h.b),a5)
$.X()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gp(0)
h.z=G.mu
q=h.H()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.c.gp(0)
q=g.H()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ad(0,D.HJ)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.aP($.X().r,A.ap,b4,b4,C.a([],o))
o=a8.b
a0.E(new C.b5(t,o))
i=a9.b
a0.E(new C.pt(t+a1,o,w-a1,i,w,i))
i=C.M()
i.b=A.ae
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aP(a0,i)
i=C.M()
i.r=A.c.gp(0)
b8.ah(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){b0=w[m]
o=b0.c
v=A.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dV.aw(0,v)
$.X()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.b=A.ae
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gp(0)
q=h.H()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){b1=w[m]
v=A.k.D((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=C.le(o,i,A.dV.aw(0,v))
h.toString
i=C.le(o,i,A.dV.aw(0,A.k.D(v-0.35,0,1)))
i.toString
$.X()
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.c=5
o.d=A.bO
g=b1.c
f=C.a([g.j(0),g],p)
e=C.rl(i,h)
o.saq(new C.a8(A.a3,A.a7,A.x,f,b4,b4).av(0,new C.a9(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.H()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=A.c.gp(0)
q=i.H()
b7.drawCircle(o,h,6,q)
q.delete()
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=g.j(0.5*(1-v)).gp(0)
i.z=A.jk
q=i.H()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){a4=w[m]
v=A.k.D((b6-a4.f)/a4.e,0,1)
o=a4.a
$.X()
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=a4.c.j(1-v).gp(0)
q=i.H()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,C.L)(w),++m){j=w[m]
o=j.a
$.X()
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.jk
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.saq(new C.bS(P.pa,0.5,A.x,b4,0,C.a([A.c,h],p),b4,b4).av(0,C.bT(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.L)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=B.bfq(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a5(b8,new C.u(t.a-o/2,t.b-(40+60*v+p.gbd(p)/2)))}for(b5=new C.dt(n,n.r,n.e);b5.C();)b3.ccW(b8,b5.d,b6)
b7.restore()},
ccW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mt.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=C.co(e.c,64,64)
t=C.bz(u,A.jG)
s=t.eN(A.cw)
$.X()
r=C.M()
r.r=A.w.j(0.55).gp(0)
r.z=A.ll
d.aD(s,r)
if(v>0){s=t.cF(6)
r=C.M()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.yI
d.aD(s,r)}s=t.eN(A.cJ)
r=C.M()
q=h.d
r.r=C.aq(q,A.w,0.65).gp(0)
d.aD(s,r)
r=C.M()
s=C.aq(q,A.c,0.18+0.4*v)
s.toString
p=C.aq(q,A.w,0.35)
p.toString
r.saq(new C.a8(A.b0,A.b5,A.x,C.a([s,p],x.O),j,j).av(0,u))
d.aD(t,r)
r=C.M()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aD(t,r)
r=h.b
p=e.c
o=B.bfq(C.jE(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aC(0,new C.u(s/2,r.gbd(r)/2)))
n=B.bfq(h.a,11,A.c,j,j,A.H)
n.a5(d,e.c.ad(0,new C.u(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.G(e.d,r)]
else m=i==="pop"?D.awf[A.o.G(e.d,6)]:j
h=h.c
if(h===D.qn){s=e.c.ad(0,new C.u(0,62))
r=C.M()
r.r=D.awM[A.o.G(e.d,6)].gp(0)
d.ah(s,5,r)}else if(m!=null){l=B.bfq(m,9.5,A.az,j,j,A.P)
l.a5(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=B.bfq(m,9.5,A.az,j,j,A.P)
l.a5(d,e.c.ad(0,new C.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.wq)k.b_R(d,e.c.aC(0,D.HJ),q)
k.b_R(d,e.c.ad(0,D.HJ),q)},
b_R(d,e,f){var w
$.X()
w=C.M()
w.r=A.bX.gp(0)
d.ah(e,9,w)
w=C.M()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.ah(e,9,w)
w=C.M()
w.r=A.c.gp(0)
d.ah(e,3.5,w)},
ar(d){return!0}}
B.aKQ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bjZ.prototype={}
B.Pi.prototype={
gY(d){return this.d}}
B.Vo.prototype={
U(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new B.bj2(new C.cs(null,x.A),w,v,A.cI,A.bw,D.Es,null,null)}}
B.bj2.prototype={
aYA(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bu((1-d.b/(C.aI(w,null,x.m).w.a.b*0.7))*10),0,9)
u=D.avb[A.o.G(v,5)]+12*A.o.an(v,5)+12
switch(t.z){case"glow":B.ld("synth",u,420,0.3)
break
case"rainbow":B.ld("bell",u,700,0.35)
break
case"stars":B.ld("pluck",u+12,400,0.4)
break
case"sparks":E.dF(2400+t.r.aB(2000),"",60,0,0.18,"noise")
break
default:E.dF(110+t.r.aB(60),"",140,0,0.22,"noise")}},
c6J(d){return this.aYA(d,!1)},
a_(){var w,v=this
v.a1()
w=v.qi(new B.euq(v))
w.j1(0)
v.w!==$&&C.aO()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.bu5()},
gb_l(){var w=this.Q
return w<0?new H.mM(1,A.k.G(this.y*0.18,360),0.85,1).iG():D.Q1[w]},
aQv(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb_l(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.aj()*3.141592653589793*2
switch(l.z){case"fire":q=v.aj()
p=l.as
o=v.aj()
n=v.aj()
m=C.aq(A.co,A.ay,v.aj())
m.toString
j.push(new B.Pi(new C.u(u+(q-0.5)*p,t),new C.u((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.aj()*0.4),l.y,700+v.aB(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.aj()*200
n=C.aq(k,A.c,v.aj()*0.6)
n.toString
j.push(new B.Pi(d,new C.u(q*o,p*o),n,1.5+v.aj()*3,l.y,600+v.aB(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.aj()*40
j.push(new B.Pi(d,new C.u(q*o,p*o),k,1.2+v.aj()*1.8,l.y,500))}}},
aXn(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb_l()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new B.bjZ(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aQv(e)
r.aYA(e,!0)
r.m(new B.eu1())},
aXm(){this.ax=null
this.m(new B.eu0())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.mr,n,n,n,new B.eua(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new B.bql(k,o.f,o.y,o.at,n),A.au)],m)
if(!o.ay&&k.length===0)j.push(D.b3l)
k=C.aE(A.c5,new C.an(A.W,n,A.b_,A.r,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eub(o),new B.euc(o),new B.eug(o),n,n,n,n,n,n,n,n,n,new B.euh(o),new B.eui(o),n,n,n,!1,A.a8)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cQt[w]
j.push(new B.dz(v.b,o.z===v.a,new B.euj(o,v),v.c,A.bU,n))}u=C.a([new B.ER(A.c,o.Q<0,new B.euk(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new B.ER(D.Q1[t],o.Q===t,new B.eul(o,t),!1,n))
s=o.as
s=B.hy(A.bU,A.o.u(A.k.V(s)),"Size",36,4,new B.eum(o),s)
r=o.ch
q=r?A.nV:O.r4
q=C.a([new B.dz("Sound",r,new B.eun(o),q,A.bU,n),new B.fg(A.r3,"Undo",new B.eud(o),A.c,n),new B.fg(D.xO,"Clear",new B.eue(o),A.ci,n)],m)
for(w=0;w<4;++w){p=D.d4X[w]
q.push(new B.ER(p,o.at.A(0,p),new B.euf(o,p),!1,n))}return B.jF(A.bU,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.et(k,o.d),"SPARK PAINTER",C.v(C.a([new B.eN(j,"BRUSH",n),new B.eN(u,"COLOUR",n),s,new B.eN(q,n,n)],m),A.m,n,A.e,A.Q,0,A.p))}}
B.bql.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.X()
w=C.M()
v=a4.e
w.r=v.gp(v)
a6.aX(new C.a9(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.X()
o=C.a([],t)
n=new C.aP(p.r,A.ap,a5,a5,o)
o.push(new C.b5(A.d.gL(q).a,A.d.gL(q).b))
for(p=C.U(q),m=p.k("pQ<1>"),l=new C.pQ(q,1,a5,m),l.GQ(q,1,a5,p.c),l=new C.bR(l,l.gM(0),m.k("bR<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bx(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gL(q)
$.X()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=r.c.gp(0)
j=p.H()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.X()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.e=A.fz
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new C.ht(A.G,p)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cF(n.gbI().a.snapshot()):q).a,j)
j.delete()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.e=A.fz
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cF(n.gbI().a.snapshot()):q).a,j)
j.delete()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.e=A.fz
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cF(n.gbI().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.mM(1,A.o.G(i*5,360),0.85,1).iG()
o=q[i-1]
m=q[i]
$.X()
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.c=p
l.d=A.bO
l.r=h.gp(0)
j=l.H()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,C.L)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gL(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new H.mM(1,A.o.G(a3*23,360),0.7,1).iG():l
a4.c3L(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.X()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=S.Qv
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c3L(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.X(),o=C.a([],x.v),n=new C.aP(p.r,A.ap,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new C.b5(r,q)
o.push(r)
q=n.f
if(q!=null)r.bx(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.ap(r,q)
o.push(r)
q=n.f
if(q!=null)r.bx(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.E(new C.bF())
$.X()
p=C.M()
p.r=h.j(0.4).gp(0)
p.z=A.jk
d.aP(n,p)
p=C.M()
p.r=h.gp(0)
d.aP(n,p)},
ar(d){return!0}}
B.VA.prototype={
U(){return new B.aDh(new C.cs(null,x.A),new C.ar(new C.bb("NGMY",A.b3,A.aN),$.aw()),null,null)}}
B.aDh.prototype={
gIo(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,A.tq,null,1,null,v)
w.cH(0)
v.e!==$&&C.bM()
v.e=w
u=w}return u},
a_(){this.a1()
var w=this.gIo()
w.d9()
w.dR$.K(0,this.gbVz())},
bVA(){var w,v,u,t,s,r,q,p=this,o=p.gIo().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.lW:new C.m4(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dF(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dF(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
B.ld(s,D.au8[A.o.G(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gIo().q()
var w=this.f
w.T$=$.aw()
w.P$=0
this.bub()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.m4(h)
w=C.B(h,C.a3(h).k("J.E"))}v=D.Q1[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.mr,j,j,j,new B.eB_(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.awg[k.y]
s=C.bw(t,C.c_(C.av(C.c6(k.gIo(),new B.eB0(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a8(A.ax,A.aC,A.x,s,j,j),A.n),A.bd),A.aq)
t=A.c.j(0.06)
t=C.aM(j,A.T,!1,j,!0,A.r,j,C.aN(),i,j,j,j,j,j,2,C.br(j,new C.b4(4,C.m(14),A.Y),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.D1,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new B.eB1(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.ho,!0,A.a4,j,A.am,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.csw[r]
i.push(new B.dz(q.b,k.r===q.a,new B.eB2(k,q),j,A.co,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new B.ER(D.Q1[o],k.w===o,new B.eB3(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.nV:O.r4
l=C.a([new B.dz(m,n,new B.eB4(k),l,A.co,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new B.ER(D.awg[o][0],k.y===o,new B.eB5(k,o),!1,j))
n.push(A.bp)
n.push(new B.fg(A.mn,"Replay",new B.eB6(k),A.c,j))
m=k.x
return B.jF(A.co,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.C(A.bC,new C.et(s,k.d),j),"TITLE ANIMATOR",C.v(C.a([t,A.O,new B.eN(i,"MOVE",j),new B.eN(p,"COLOUR",j),new B.eN(l,"SOUND",j),new B.eN(n,"BACK",j),B.hy(A.co,A.o.u(A.k.V(m)),"Size",96,28,new B.eB7(k),m)],h),A.m,j,A.e,A.Q,0,A.p))},
bYl(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cP(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<A.k.bu(g*1.6*f)?1:0
w=h
break
case"bounce":o=-Math.abs(Math.sin(A.k.G(g*2-q*0.5,1)*3.141592653589793))*s.x*0.5
w=h
break
case"wave":o=Math.sin(g*3.141592653589793*2-q*3)*s.x*0.28
w=h
break
case"neon":v=Math.sin(g*40+e*7)>0.92?0.25:1
A.d.a9(p)
p.push(new C.cP(h,A.J,30*v))
p.push(new C.cP(h.j(0.8),A.J,60*v))
w=h
m=v
break
case"glitch":u=A.o.G(A.k.bu(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=A.b8
else w=u?A.bU:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.mI.aw(0,t)
w=h
m=t
break
case"rainbow":w=new H.mM(1,A.k.G(g*360+e*40,360),0.75,1).iG()
A.d.a9(p)
p.push(new C.cP(w.j(0.7),A.J,18))
break
default:w=h}return C.dc(C.dW(C.eb(A.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.u(l,o)),m)}}
B.aKZ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.aL4.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.a_4.prototype={}
B.V5.prototype={
U(){var w=C.a([],x.aS)
return new B.aCU(new C.cs(null,x.A),w,A.cI,A.au,$,A.bw,0,C.a([],x.X),null,null)}}
B.aCU.prototype={
gacO(){var w=this.r
return new C.u(w.a/2,w.b/2)},
b0w(){return new H.mM(1,this.f.aj()*360,0.6,1).iG()},
aqd(d,e,f,g){var w=this,v=w.gacO().ad(0,new C.u(Math.cos(e),Math.sin(e)).aF(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new B.a_4(v,new C.u(-t,s).aF(0,r).aF(0,u*f),w.Q*(0.6+w.f.aj()*0.9),w.b0w(),C.a([],x.g)))},
bE_(d,e,f){return this.aqd(d,e,f,!1)},
bDZ(d,e){return this.aqd(d,e,1,!1)},
csD(){var w,v,u,t=this
A.d.a9(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bDZ(40+w*u/5,v.aj()*3.141592653589793*2)},
bEU(){var w=this.r
this.bE_(Math.min(w.a,w.b)*0.42,this.f.aj()*3.141592653589793*2,0.45)},
a_(){this.a1()
this.la()},
lr(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,A.au))return
w=a2.e
v=w.length
if(v===0&&a2.fP$<300)return
u=a2.gacO()
t=a3*a2.x/4
for(s=u.a,r=u.b,q=0;q<4;++q,v=o)for(p=0;o=w.length,p<o;w.length===v||(0,C.L)(w),++p){n=w[p]
o=n.a
m=s-o.a
o=r-o.b
l=Math.max(m*m+o*o,400)
k=Math.sqrt(l)
j=1e6*a2.w/l
i=new C.u(m/k*j,o/k*j)
if(a2.y)for(o=w.length,h=0;h<w.length;w.length===o||(0,C.L)(w),++h){g=w[h]
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
n.a=new C.u(j.a+m*t,j.b+o*t)}for(p=0;o=w.length,p<o;w.length===v||(0,C.L)(w),++p){n=w[p]
if(a2.z){o=n.e
if(o.length!==0){m=A.d.gal(o)
j=n.a
f=m.a-j.a
j=m.b-j.b
j=Math.sqrt(f*f+j*j)>3
m=j}else m=!0
if(m)o.push(n.a)
if(o.length>260)A.d.cA(o,0)}else A.d.a9(n.e)}for(p=0;p<w.length;w.length===o||(0,C.L)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lQ(v.a-s)!==J.lQ(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fP$-n.r>250){n.r=a2.fP$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
B.ld("bell",D.au8[A.k.V((1-A.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a2(w,new B.efd(u),C.U(w).k("a2<1>")).gM(0)>0&&a2.ax)E.dF(70,"",300,0.6,0.8,"sine")
A.d.bn(w,new B.efe(a2,u))},
cgZ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gacO()
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
if(A.o.G(s,3)===0)k.push(t)
if(m<16)break}return k},
gaUG(){var w,v=this.as
if(v==null||this.at==null)v=A.J
else{w=this.at
w.toString
w=v.aC(0,w).aF(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mr,r,r,r,new B.ef1(s,d),r,r,r,r,"Share",r)],q),o=C.cp(new B.ef2(s)),n=s.w
n=B.hy(A.ct,A.k.aa(n,1)+"x","Sun mass",2.5,0.3,new B.ef3(s),n)
w=s.x
w=B.hy(A.ct,A.k.aa(w,1)+"x","Time",3,0.2,new B.ef5(s),w)
v=s.Q
v=B.hy(A.ct,A.o.u(A.k.V(v)),"Planet size",16,3,new B.ef6(s),v)
u=s.ax
t=u?A.nV:O.r4
return B.jF(A.ct,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.v(C.a([n,w,v,new B.eN(C.a([new B.dz("Sound",u,new B.ef7(s),t,A.ct,r),new B.dz("Trails",s.z,new B.ef8(s),A.Ng,A.ct,r),new B.dz("Planets pull each other",s.y,new B.ef9(s),A.yd,A.ct,r)],q),r,r),new B.eN(C.a([new B.fg(A.mm,"Solar system",new B.efa(s),A.ct,r),new B.fg(A.nb,"Comet",new B.efb(s),A.c,r),new B.fg(A.mk,"Cluster",new B.efc(s),A.c,r),new B.fg(D.xO,"Clear",new B.ef4(s),A.ci,r)],q),r,r)],q),A.m,r,A.e,A.Q,0,A.p))}}
B.bjM.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.X()
w=C.M()
w.r=D.W0.gp(0)
d.aX(new C.a9(0,0,0+g,0+f),w)
v=new C.eJ()
v.dB(5)
for(w=d.a,u=0;u<70;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.25+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*g,s*f,r*1.2+0.3,p)
p.delete()}o=16+i.d*6
g=i.c
f=o*3.2
t=C.M()
s=x.O
t.saq(new C.bS(A.A,0.5,A.x,h,0,C.a([A.ct.j(0.45),A.K],s),h,h).av(0,C.bT(g,f)))
d.ah(g,f,t)
t=C.M()
t.saq(D.eaL.av(0,C.bT(g,o)))
d.ah(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.L)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.c=2.2*l+0.4
j.d=A.bO
j.r=r.j(l*0.8).gp(0)
p=j.H()
w.drawLine.apply(w,[q.a,q.b,k.a,k.b,p])
p.delete()}t=m.a
r=m.c
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
k=m.d
q.r=k.j(0.3).gp(0)
q.z=G.mu
p=q.H()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j=C.aq(k,A.w,0.5)
j.toString
q.saq(new C.bS(P.pa,0.5,A.x,h,0,C.a([A.c,k,j],s),h,h).av(0,C.bT(m.a,r)))
p=q.H()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.M()
t.c=2
t.r=A.j9.gp(0)
d.bA(g,f,t)
t=C.M()
t.r=A.c.gp(0)
d.ah(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.L)(g),++n){m=g[n]
t=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.7).gp(0)
p=t.H()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
ar(d){return!0}}
B.aaS.prototype={}
B.Vv.prototype={
U(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new B.bj7(new C.cs(null,x.A),w,v,A.cI,A.au,$,A.bw,0,C.a([],x.X),null,null)}}
B.bj7.prototype={
a_(){this.a1()
this.la()},
c3M(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
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
w.push(new B.aaS(new C.u(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.u(p*n,o*n),A.k.G(m*60+l,360)))}while(w.length>A.k.V(k.x))w.pop()},
lr(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.c3M()
w=a2.f
A.d.bn(w,new B.eAr(a2))
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
f=new C.u(f.a-k/e*j*30,f.b-l/e*j*30)}}for(l=w.length,d=0;d<w.length;w.length===l||(0,C.L)(w),++d){k=w[d].a
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
A.d.bn(w,new B.eAs(a2))
if(w.length<a1&&a2.ch)B.ld("bell",12+a2.r.aB(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fP$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fP$
B.ld("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.mr,l,l,l,new B.eAg(m,d),l,l,l,l,"Share",l)],k),i=C.cp(new B.eAh(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cS4[w]
h.push(new B.dz(v.b,m.at===v.a,new B.eAi(m,v),v.c,A.b7,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cCk[w]
u.push(new B.dz(t.b,m.ax===t.a,new B.eAj(m,t),l,A.b7,l))}s=m.ch
r=s?A.nV:O.r4
r=C.a([new B.dz("Sound",s,new B.eAk(m),r,A.b7,l)],k)
s=m.x
s=B.hy(A.b7,A.o.u(A.k.V(s)),"How many",150,15,new B.eAl(m),s)
q=B.hy(A.b7,l,"Together",2.5,0,new B.eAm(m),m.y)
p=B.hy(A.b7,l,"Apart",2.5,0,new B.eAn(m),m.z)
o=B.hy(A.b7,l,"Same way",2.5,0,new B.eAo(m),m.Q)
n=m.as
return B.jF(A.b7,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.v(C.a([new B.eN(h,"TOUCH",l),new B.eN(u,"LOOK",l),new B.eN(r,l,l),s,q,p,o,B.hy(A.b7,A.o.u(A.k.V(n)),"Speed",280,50,new B.eAp(m),n)],k),A.m,l,A.e,A.Q,0,A.p))}}
B.brb.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.acJ,D.biL],x.O)
else{v=x.O
w=a4==="fly"?C.a([A.db,R.KP],v):C.a([D.bfK,D.b7b],v)}v=0+a6.a
u=0+a6.b
t=$.X()
s=C.M()
s.saq(new C.a8(A.b0,A.b5,A.x,w,a3,a3).av(0,new C.a9(0,0,v,u)))
a5.aX(new C.a9(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){q=v[r].a
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.co.gp(0)
o=p.H()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.co.j(0.25).gp(0)
n.z=G.mu
o=n.H()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.L)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.mM(1,j,0.7,1).iG()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
f.r=h.j(0.35*g).gp(0)
f.z=A.jk
o=f.H()
s.drawCircle(j.a,j.b,9,o)
o.delete()
j=k.a
f=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
f.r=A.c.j(g).gp(0)
o=f.H()
s.drawCircle(j.a,j.b,2.6,o)
o.delete()
break
case"bird":J.bA(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
e=Math.sin(l+j)*5
j=C.a([],m)
d=new C.aP(t,A.ap,a3,a3,j)
j.push(new C.b5(8,0))
j.push(new C.ap(-6,-7-e))
j.push(new C.ap(-2,0))
j.push(new C.ap(-6,7+e))
j.push(new C.bF())
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=h.gp(0)
o=j.H()
j=d.gbI().a.snapshot()
s.drawPath((d.e=new C.cF(j)).a,o)
o.delete()
s.restore()
break
default:J.bA(s.save())
f=k.a
s.translate(f.a,f.b)
s.rotate(i*180/3.141592653589793,0,0)
a0=Math.sin(n+j)*3
j=C.a([],m)
d=new C.aP(t,A.ap,a3,a3,j)
j.push(new C.b5(9,0))
j.push(new C.cS(0,-6,-7,a0))
j.push(new C.ap(-12,-4+a0))
j.push(new C.ap(-12,4+a0))
j.push(new C.ap(-7,a0))
j.push(new C.cS(0,6,9,0))
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
f=C.aq(h,A.cy,0.6)
f.toString
j.saq(new C.a8(A.a3,A.a7,A.x,C.a([h,f],q),a3,a3).av(0,D.eEH))
o=j.H()
j=d.gbI().a.snapshot()
s.drawPath((d.e=new C.cF(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=A.ci
else a1=v==="scare"?A.co:A.b7
v=u?12:22
u=C.M()
u.b=A.ae
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.ah(a4,v,u)}},
ar(d){return!0}}
B.abk.prototype={}
B.TD.prototype={
U(){var w=C.a([],x.bi)
return new B.aBu(w,A.cI,A.au,C.T(x.N,x.S),$,A.bw,0,C.a([],x.X),null,null)}}
B.aBu.prototype={
gHM(){var w=this.r,v=18+A.k.V(w*0.85)
return A.o.D(A.k.V(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gabS(){return 54-8*(this.r/100)},
a_(){this.a1()
this.la()
B.z7("chain_burst").bz(new B.dE2(this),x.P)},
aXp(){return B.vH("chain_burst",C.F(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
ayN(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
A.d.a9(k)
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
k.push(new B.abk(new C.u(20+s*(r.a-40),20+q*(p.b-40)),new C.u(o*m,n*m),new H.mM(1,u.aj()*360,0.6,1).iG()))}},
YM(d){var w,v=this
if(d==null)return 0
w=(v.fP$-d)/1000
if(w<0.4)return v.gabS()*A.dV.aw(0,w/0.4)
if(w<1.1)return v.gabS()
if(w<1.5)return v.gabS()*(1-(w-1.1)/0.4)
return 0},
lr(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,A.au)||!j.Q)return
w=j.d
if(w.length===0)j.ayN()
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
if(v!=null)n.push(new C.y(v,j.YM(j.ax)))
for(v=A.d.gae(w),s=new C.fk(v,new B.dE3());s.C();){r=v.gS(0)
n.push(new C.y(r.a,j.YM(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.L)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fP$
E.dF(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eS()
break}}}if(!(j.at!=null&&j.YM(j.ax)>0||A.d.b8(w,new B.dE4(j)))&&j.fP$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gHM()){if(j.as>=j.gHM()*1.5)k=3
else k=j.as>=j.gHM()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
B.Bi("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aXp()}else E.dF(120,"",300,0,0.3,"saw")}}},
aXo(d){this.m(new B.dDT(this,d))
this.aXp()},
acP(){var w=0,v=C.j(x.H),u=this,t,s
var $async$acP=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dDW(u),s,null,!0,!0,x.S),$async$acP)
case 2:t=e
if(t!=null)u.aXo(t)
return C.h(null,v)}})
return C.i($async$acP,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gHM(),t=w.x.h(0,""+w.r)
return B.jF(A.bU,A.ha,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cp(new B.dE_(w,t==null?0:t,u)),"CHAIN BURST",C.A(C.a([new B.fg(A.r_,"Levels",w.gc3N(),A.bU,v),new B.fg(A.jY,"New board",new B.dE0(w),A.c,v)],x.p),A.m,v,A.e,A.j,0,v,v))},
atJ(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aOo,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p)},
bW2(d,e){return this.atJ(d,e,A.c)}}
B.b9g.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.X()
w=C.M()
w.r=D.Es.gp(0)
d.aX(new C.a9(0,0,0+e.a,0+e.b),w)
v=new B.cJA(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),A.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,C.L)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.X()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=n.j(0.25).gp(0)
p.z=G.mu
m=p.H()
t.drawCircle(o.a,o.b,12,m)
m.delete()
o=q.a
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=n.gp(0)
m=p.H()
t.drawCircle(o.a,o.b,8,m)
m.delete()}}},
ar(d){return!0}}
B.aJY.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvm.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bt2()}}
B.aKN.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvD.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btU()}}
B.aL1.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvL.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bu8()}}
B.Fk.prototype={
gcLC(){return this.a.aC(0,this.b).gco()>4}}
B.ac9.prototype={}
B.V_.prototype={
U(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new B.biH(new C.cs(null,x.A),w,v,A.cI,A.au,$,A.bw,0,C.a([],x.X),null,null)}}
B.biH.prototype={
aOd(d){return new H.mM(1,A.o.G(d*29,360),0.6,1).iG()},
Zw(d){var w,v=D.C0.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=A.o.D(A.k.bu(d.a/s*t),0,t-1)
return v[A.o.G(w,u)]+12*A.o.e3(w,u)},
aQL(d){A.d.bn(this.e,new B.eaH(this,d))},
coP(d,e,f){var w=f.aC(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aC(0,e).gco()
return d.aC(0,e.ad(0,w.aF(0,A.k.D((d.aC(0,e).a*v+d.aC(0,e).b*u)/t,0,1)))).gco()},
axl(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
A.d.a9(f)
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
k=g.Zw(new C.u((q+n)/2,(p+m)/2))
p=r?o:new C.u(n,p)
r=r?l:new C.u(q,m)
f.push(new B.Fk(p,r,k,new H.mM(1,A.o.G(k*29,360),0.6,1).iG()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.u(v*(0.1+i*0.16+r),w)
k=g.Zw(h)
f.push(new B.Fk(h,h,k,new H.mM(1,A.o.G(k*29,360),0.6,1).iG()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.u(v*(0.08+w.aj()*0.84),u*(0.2+w.aj()*0.65))
k=g.Zw(h)
f.push(new B.Fk(h,h,k,new H.mM(1,A.o.G(k*29,360),0.6,1).iG()))}}},
a_(){this.a1()
this.la()},
c3P(d,e){var w,v=this.fP$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
B.ld(v,d.c+12,w,A.k.D(0.25+e/900,0.25,0.8))}},
lr(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,A.au))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new B.ac9(new C.u(a2.w.a*(0.2+v.aj()*0.6),6),new C.u((v.aj()-0.5)*40,0),new H.mM(1,v.aj()*360,0.5,1).iG()))}if(u>3)a2.as=0
for(v=w.length,u=a2.e,t=a3/2,s=900*t,r=0;r<w.length;w.length===v||(0,C.L)(w),++r){q=w[r]
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
q.b=new C.u(-o.a*0.6,o.b)}for(o=u.length,i=0;i<u.length;u.length===o||(0,C.L)(u),++i){h=u[i]
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
if(a1<0){a2.c3P(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.u(m.a-l*k,m.b-n*k)}}}}}A.d.bn(w,new B.eb5(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.W(q.ay?A.nV:O.r4,A.ad,p,p,p,21),p,p,p,new B.eaV(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.mr,p,p,p,new B.eaW(q,d),p,p,p,p,"Share",p)],o),m=C.cp(new B.eaX(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cVj[w]
l.push(new B.dz(v.b,q.x===v.a,new B.eaY(q,v),v.c,A.b8,p))}u=C.a([],o)
for(t=J.aV(D.C0.ged(D.C0));t.C();){s=t.gS(t)
u.push(new B.dz(s,q.y===s,new B.eaZ(q,s),p,A.b8,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.ax8[w]
t.push(new B.dz(r.b,q.z===r.a,new B.eb_(q,r),p,A.b8,p))}s=q.Q
return B.jF(A.b8,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.v(C.a([new B.eN(l,"TOOL",p),new B.eN(u,"SCALE",p),new B.eN(t,"SOUND",p),B.hy(A.b8,A.k.aa(s,1)+"/s","Marbles",4,0.3,new B.eb0(q),s),new B.eN(C.a([new B.fg(D.bDa,"Stairs",new B.eb1(q),A.b8,p),new B.fg(Am.N_,"Pinball",new B.eb2(q),A.c,p),new B.fg(A.mk,"Random",new B.eb3(q),A.c,p),new B.fg(D.xO,"Clear",new B.eb4(q),A.ci,p)],o),p,p)],o),A.m,p,A.e,A.Q,0,A.p))}}
B.bgj.prototype={
a5(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.X()
w=C.M()
w.saq(D.bTO.av(0,new C.a9(0,0,a0,a1)))
a2.aX(new C.a9(0,0,a0,a1),w)
for(a0=e.b,a1=a0.length,w=a2.a,v=x.O,u=e.f,t=0;t<a0.length;a0.length===a1||(0,C.L)(a0),++t){s=a0[t]
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
if(Math.sqrt(m*m+k*k)>4){q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.c=12+j
q.r=i.j(0.2+h).gp(0)
q.z=A.jk
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.d=A.bO
q.c=6
q.r=C.aq(i,A.c,r*0.7).gp(0)
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=i.j(0.25+h).gp(0)
p.z=A.jk
g=p.H()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p=C.aq(i,A.w,0.4)
p.toString
j.saq(new C.bS(P.pa,0.5,A.x,d,0,C.a([A.c,i,p],v),d,d).av(0,C.bT(q,9)))
g=j.H()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.M()
u.c=5
u.d=A.bO
u.r=A.az.gp(0)
a2.bA(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.L)(a0),++t){f=a0[t]
u=f.a
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p=f.c
q.r=p.j(0.3).gp(0)
q.z=A.re
g=q.H()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.saq(new C.bS(P.pa,0.5,A.x,d,0,C.a([A.c,p],v),d,d).av(0,C.bT(f.a,7)))
g=q.H()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
ar(d){return!0}}
B.acE.prototype={}
B.V4.prototype={
U(){var w=C.a([],x.gB)
return new B.aCT(new C.cs(null,x.A),w,A.cI,A.au,$,A.bw,0,C.a([],x.X),null,null)}}
B.aCT.prototype={
gaXq(){var w=this.w
return new C.u(w.a/2,w.b/2)},
axw(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
ayJ(d){var w=D.C0.h(0,this.y),v=5-d,u=w.length
return w[A.o.G(v,u)]+12*A.o.e3(v,u)},
a_(){this.a1()
this.la()},
aPz(){var w,v,u,t,s=this.e
A.d.a9(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new B.acE(w,A.k.G(t/v+u,1)))}},
lr(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,A.au))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fP$
if(p.Q){r=p.z
s=p.ayJ(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
B.ld(r,s+12,q,0.55)}}}},
c3Q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aC(0,h.gaXq()),e=f.gco()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.axw(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=A.k.G((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
s=h.e
s=C.a(s.slice(0),C.U(s))
r=s.length
q=d.a
p=d.b
o=0
for(;o<s.length;s.length===r||(0,C.L)(s),++o){n=s[o]
m=n.a
if(m!==g.a)continue
l=n.b*2*3.141592653589793-1.5707963267948966
k=h.w
j=Math.cos(l)
i=Math.sin(l)
m=h.axw(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new B.eeB(h,n).$0()
h.c.e9()
return}}h.m(new B.eeC(g,h,t))
if(h.Q)B.ld(h.z,h.ayJ(g.a)+12,700,0.5)
C.eS()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.W(r.Q?A.nV:O.r4,A.ad,q,q,q,21),q,q,q,new B.eeJ(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.mr,q,q,q,new B.eeK(r,d),q,q,q,q,"Share",q)],p),n=C.cp(new B.eeL(r)),m=r.x
m=B.hy(A.by,""+A.k.V(m),"Tempo",180,40,new B.eeM(r),m)
w=C.a([],p)
for(v=J.aV(D.C0.ged(D.C0));v.C();){u=v.gS(v)
w.push(new B.dz(u,r.y===u,new B.eeN(r,u),q,A.by,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.ax8[t]
v.push(new B.dz(s.b,r.z===s.a,new B.eeO(r,s),q,A.by,q))}return B.jF(A.by,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.v(C.a([m,new B.eN(w,"SCALE",q),new B.eN(v,"SOUND",q),new B.eN(C.a([new B.fg(A.dW,"Demo",new B.eeP(r),A.by,q),new B.fg(A.mk,"Random",new B.eeQ(r),A.c,q),new B.fg(D.xO,"Clear",new B.eeR(r),A.ci,q)],p),q,q)],p),A.m,q,A.e,A.Q,0,A.p))}}
B.bjN.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.X()
w=C.M()
w.r=D.W0.gp(0)
a5.aX(new C.a9(0,0,0+a6.a,0+a6.b),w)
w=a3.d
v=a3.e
u=v.$1(w-1)+14
t=a3.c
s=t.aC(0,new C.u(0,u))
r=C.M()
r.c=2
q=x.O
p=t.a
o=p-1
n=t.b
m=n-u
r.saq(new C.a8(A.b5,A.b0,A.x,C.a([A.c.j(0.05),A.c.j(0.5)],q),a4,a4).av(0,new C.a9(o,m,o+2,m+u)))
a5.bA(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.mM(1,A.k.G(s.$1(l)*23,360),0.55,1).iG()
o=v.$1(l)
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.dbn[A.o.G(A.o.G(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.kp(new C.ep(o,a4,a4,A.cO,a4,a4,a4,a4,a4,a4,new C.G(!0,m,a4,a4,a4,a4,9.5,A.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),A.a4,A.cc,new C.jo(1),a4,a4,a4,a4,A.ca,a4)
i.eI()
o=i.b.c
m=J.fM_(v.$1(l))
h=i.b.a.c
i.a5(a5,new C.u(p+-o/2,n+(m-h.gbd(h)-2)))}w=C.M()
w.saq(D.ean.av(0,C.bT(t,16)))
a5.ah(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.L)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.mM(1,A.k.G(s.$1(a0)*23,360),0.55,1).iG()
a2=A.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fM_(v.$1(a0))
a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=3*a2
a0.r=k.j(a2).gp(0)
j=a0.H()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=k.j(0.35).gp(0)
d.z=A.jk
j=d.H()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
d.saq(new C.bS(P.pa,0.5,A.x,a4,0,C.a([A.c,k],q),a4,a4).av(0,C.bT(new C.u(h,a1),8.5)))
j=d.H()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
ar(d){return!0}}
B.aKL.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvB.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btS()}}
B.aKM.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvC.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btT()}}
B.t3.prototype={}
B.b89.prototype={}
B.V2.prototype={
U(){var w=x.S
return new B.aCR(C.a([],x.aq),C.T(w,w),C.aX(w),D.eKs)}}
B.aCR.prototype={
a_(){this.a1()
B.z7("molecule_maker").bz(new B.ee5(this),x.P)},
aik(d){var w={}
w.a=0
this.f.bH(0,new B.edS(w,d))
return w.a},
gaXw(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)t.push(w[u].a)
return B.hWi(t,this.f,D.a1U[this.d])},
c46(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eJ()
w.dB(t*7+3)
t=v.y
v.m(new B.edM(v,e,t.a,w,t.b))
B.vK("pop",u.length,90,0.35)},
avM(d){return this.m(new B.edN(this))},
aXx(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c4c(d){this.m(new B.edR(this,this.aXx(d)))},
clk(){var w=this.r
if(w==null)return
this.m(new B.edQ(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a1U[k.d],h=k.gaXw()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.vN.h(0,w[u].a).a-k.aik(u)
w=i.c
w=w.gdK(w)
t=w.dt(w,new B.ee_(),x.N).aI(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?A.b7:A.hv
r=x.p
s=C.v(C.a([new C.C(A.fH,B.f7V(w,s,h&&k.d<12?new B.fg(A.iz,"Next",new B.ee0(k),A.b7,j):j),j),C.D(C.cp(new B.ee1(k)),1)],r),A.m,j,A.e,A.j,0,A.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new B.dz(p+D.a1U[u].b,k.d===u,new B.ee2(k,u),j,A.hv,j))}q=C.a([],r)
for(p=D.vN.gdK(D.vN),p=p.gae(p);p.C();){o=p.gS(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?A.dz:m.b
q.push(new B.dz(n+" \xb7 "+m.a,!1,new B.ee3(k,o),j,l,j))}return B.jF(A.hv,A.ha,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.v(C.a([new B.eN(w,"GOAL",j),new B.eN(q,"ADD",j),new B.eN(C.a([new B.dz("Remove selected atom",!1,k.gclj(),A.e4,A.ci,j),new B.dz("Clear all",!1,k.gc47(k),A.jY,A.aM,j)],r),j,j)],r),A.m,j,A.e,A.Q,0,A.p))}}
B.bh0.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=A.o.G(t*37,10)
r=A.o.G(t*53,10)
$.X()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.hv.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bH(0,new B.dmI(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.vN.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bT(j,26)
if(q===t){$.X()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.aM.j(0.4).gp(0)
h.z=A.jk
p=h.H()
u.drawCircle(j.a,j.b,34,p)
p.delete()}j=m.b
$.X()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
g=l.b
f=C.aq(g,A.c,0.5)
f.toString
e=C.aq(g,A.w,0.5)
e.toString
h.saq(new C.bS(A.Jo,0.5,A.x,a3,0,C.a([f,g,e],r),I.avj,a3).av(0,i))
p=h.H()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?A.aB:A.c
d=new C.kp(new C.ep(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,new C.G(!0,j,a3,a3,a3,a3,19,A.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),A.a4,A.cc,new C.jo(1),a3,a3,a3,a3,A.ca,a3)
d.eI()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a5(a4,new C.u(n.a-h/2,n.b-j.gbd(j)/2))
n=k===0
a0=n?A.bo:A.aH
j=m.b
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=a0.gp(0)
p=h.H()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.t(k)
a1=new C.kp(new C.ep(n,a3,a3,A.cO,a3,a3,a3,a3,a3,a3,A.nn),A.a4,A.cc,new C.jo(1),a3,a3,a3,a3,A.ca,a3)
a1.eI()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a5(a4,new C.u(n.a+(20-h/2),n.b+(-20-j.gbd(j)/2)))}if(n===0){d=C.i1(a3,a3,a3,a3,D.eSX,A.a4,A.cc,a3,A.eh,A.ca)
d.eI()
d.a5(a4,new C.u((w-d.b.c)/2,v/2))}},
ar(d){return!0}}
B.U0.prototype={
U(){var w=x.s
return new B.bhX(C.a([],w),C.a([],w))}}
B.bhX.prototype={
a_(){this.a1()
this.av2()
B.z7("dna_lab").bz(new B.dMP(this),x.P)},
gb1K(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a2W.h(0,w[u])
t.toString
s.push(t)}return A.d.fW(s)},
ga8p(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(A.a.ap(this.gb1K(),w,v))}return u},
av2(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eJ()
k.dB(l.e*31+l.d*7+C.Bv(new C.S(Date.now(),0,!1)))
w=new B.dME(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mC(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=A.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a2W.h(0,p[n])
m.toString
r.push(m)}t.push(A.d.fW(r))}if(!A.d.b8(t,new B.dMD()))break}l.f=v
A.d.a9(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.b_y()},
b_y(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=B.fUH(s.ga8p()[r])
v=J.dH(D.C1.ged(D.C1),new B.dMF(w)).dG(0)
u=new C.eJ()
u.dB(r+s.e)
A.d.ft(v,u)
u=C.a([w],x.s)
A.d.v(u,C.dd(v,0,C.dJ(3,"count",x.S),C.U(v).c))
t=new C.eJ()
t.dB(s.e*3+r)
A.d.ft(u,t)
s.z=u},
aXv(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.dhj.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a2W.h(0,w.f[v])
u.toString
break A}u=B.fUH(w.ga8p()[v])
break A}w.m(new B.dMC(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new B.dMN(),e=new B.dMI(),d=h.d===2?h.gb1K():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,Q.mD,g,g,g),A.at],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?A.bU.j(0.18):A.K
q=new C.aW(10,10)
p=new C.aA(t.length===s?A.bU:A.bF,1,A.q,-1)
o=C.a([],a0)
for(n=h.ga8p()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cm(A.aO,A.e,A.Q,A.m,g,A.p,g,0,o,g),A.f,g,g,new C.o(r,g,new C.bP(p,p,p,p),new C.bq(q,q,q,q),g,g,A.n),g,g,g,D.bnW,A.eo,g,g,g))}v.push(C.bY(A.bz,u,A.br,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.bY(A.bz,u,A.br,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a7(34,g,new C.cr(A.A,g,g,C.W(Aj.N7,j<t.length?A.az:A.bF,g,g,g,14),g),g))
A.d.v(v,C.a([new C.C(A.Lt,C.bY(A.bz,u,A.br,0,0),g)],a0))}v.push(A.an)
v.push(C.d(w,g,g,g,g,g,g,Q.mD,g,g,g))
v.push(A.at)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?A.b7.j(0.25):A.dp
q=new C.aW(12,12)
o=j<t.length
p=new C.aA(o?A.b7:A.b2,1,A.q,-1)
if(o){o=D.C1.h(0,t[j])
o.toString}else o="?"
n=j<t.length?A.c:A.c_
u.push(C.p(g,new C.x(o,g,new C.G(!0,n,g,g,g,g,g,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(r,g,new C.bP(p,p,p,p),new C.bq(q,q,q,q),g,g,A.n),g,g,g,g,A.ei,g,g,g))}v.push(C.bY(A.bz,u,A.br,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",A.c,!0)
u.push(r)}v.push(C.bY(A.bz,u,A.br,0,0))}v.push(A.aA)
u=h.w
if(u.length!==0){t=h.r.length
v.push(B.f7V(u,t>=(h.d===2?3:9)?A.b7:A.bU,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(B.f7V(u,A.bU,g))}v.push(A.S)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,L.T6,g,g,g))
v=C.cd(C.v(v,A.F,g,A.e,A.j,0,A.p),A.r,g,A.y,g,A.bC,g,g,A.ah)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new B.dz(D.d_P[j],h.d===j,new B.dMJ(h,j),g,A.bU,g))
u=C.a([new B.eN(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bH(A.a3,g,g,new B.fg(A.jY,"New strand",new B.dMK(h),A.b7,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.L)(t),++l){i=t[l]
q=D.C1.h(0,i)
q.toString
a0.push(new B.fg(D.ZS,q,new B.dML(h,i),A.bU,g))}u.push(C.bY(A.bz,a0,A.br,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.aud:D.cKu
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aW(14,14)
a0.push(C.aE(g,C.p(A.A,new C.x(k,g,D.eTb,g,g,g,g,g,g,g,g,g),A.f,g,g,new C.o(e.$1(k),g,g,new C.bq(q,q,q,q),g,g,A.n),g,54,g,g,g,g,g,64),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new B.dMM(h,k),g,g,g,g,g,g,!1,A.a8))}u.push(C.A(a0,A.m,g,A.pW,A.j,0,g,g))}return B.jF(A.bU,A.ha,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.v(u,A.m,g,A.e,A.Q,0,A.p))}}
B.Ug.prototype={
U(){return new B.aBY(A.bw,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
B.aBY.prototype={
a_(){var w,v=this
v.a1()
w=v.qi(v.gc48())
w.j1(0)
v.d!==$&&C.aO()
v.d=w
B.z7("ecosystem").bz(new B.dPE(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.bth()},
gaLy(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c49(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length===0||w-A.d.gal(v)[3]>0.25){w=C.B(m.f,x.i)
w.push(m.w)
v.push(w)
if(v.length>160)A.d.cA(v,0)}if(m.gaLy()){w=m.Q+=l
if(w>m.as){m.as=w
if(A.o.G(A.k.bu(w),5)===0)B.vH("ecosystem",C.F(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.m(new B.dPr())},
a9B(d){this.m(new B.dPq(this,d))
B.vK("pop",3,120,0.4)},
c4b(){return this.m(new B.dPs(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.v(C.a([new C.C(D.XB,B.f7V(r,t.gaLy()?A.b7:A.ci,s),s),C.D(new C.C(D.bot,C.bw(C.m(18),C.b3(s,s,s,new B.bck(t.f,t.r,t.w,s),A.f0),A.aq),s),1),new C.C(A.eO,C.d("Alive together: "+A.k.V(t.Q)+" s     Best: "+A.k.V(t.as)+" s",s,s,s,s,s,s,D.f_9,s,s,s),s)],q),A.m,s,A.e,A.j,0,A.p)
w=t.x
w=B.hy(A.b7,A.k.aa(w,1)+"\xd7","Grass growth",2,0.2,new B.dPw(t),w)
v=t.y
v=B.hy(A.bR,A.k.aa(v,1)+"\xd7","Rabbit breeding",2,0.3,new B.dPx(t),v)
u=t.z
return B.jF(A.b7,A.ha,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.v(C.a([w,v,B.hy(A.ct,A.k.aa(u,1)+"\xd7","Fox hunting",2,0.3,new B.dPy(t),u),new B.eN(C.a([new B.dz("Drought",!1,new B.dPz(t),A.yb,A.aM,s),new B.dz("Disease",!1,new B.dPA(t),D.bD2,A.by,s),new B.dz("+ Foxes",!1,new B.dPB(t),s,A.ct,s),new B.dz("+ Rabbits",!1,new B.dPC(t),s,A.bR,s),new B.dz("Reset",!1,t.gc4a(),A.jY,A.aT,s)],q),s,s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bck.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.X()
w=C.M()
w.saq(D.bRQ.av(0,new C.a9(0,0,d,a0)))
a1.aX(new C.a9(0,0,d,a0),w)
w=h.b
a0=C.aq(A.uO,A.bo,A.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.M()
t.r=a0.gp(0)
a1.aX(new C.a9(0,v,d,v+u),t)
s=A.k.V(w[0]*0.9)
r=new C.eJ()
r.dB(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.aj()*e
o=f*(0.6+0.4*r.aj())
t=Math.sin(a0+q)
n=r.aj()
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.hh.gp(0)
m.c=1.6
l=m.H()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new B.d24(h,a2,f,a1)
k.$5(Math.min(A.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(A.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.a9(10,a0,e,u)
t=C.M()
t.r=D.bbB.gp(0)
a1.aX(new C.a9(0,f,d,f+g),t)
i=C.M()
i.r=A.dp.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new B.d26(h,j,a1)
g.$3(0,100,A.bo)
g.$3(1,120,A.bR)
g.$3(2,24,A.ct)
g=new B.d25(a1,j)
g.$3("Grass "+A.k.V(w[0]),A.bo,16)
g.$3("Rabbits "+A.k.V(w[1]),A.bR,102)
g.$3("Foxes "+A.k.V(w[2]),A.ct,200)},
ar(d){return!0}}
B.aKb.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.aQy.prototype={
guH(){return A.d.cI(this.a,0,new B.bEB())}}
B.Tv.prototype={
U(){var w=x.S
return new B.bhB(B.hTn(),C.c2(5,0,!1,w),C.aX(w),A.bw,null,null)}}
B.bhB.prototype={
gvD(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return A.d.cI(t,0,new B.dAd())},
a_(){var w,v=this
v.a1()
w=v.qi(new B.dAq(v))
w.j1(0)
v.x!==$&&C.aO()
v.x=w
B.z7("balance_lab").bz(new B.dAr(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bsV()},
cvE(d){var w,v=this
v.m(new B.dAe(v,d))
B.vK("click",v.f[d],60,0.4)
if(v.gvD()===v.d[v.e].guH()&&v.r.K(0,v.e)){B.vK("zap",10,260,0.5)
w=v.r
w=C.B(w,C.a3(w).k("cn.E"))
B.vH("balance_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.K(k,new B.dAj(),C.U(k).k("K<1,n>")).aI(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=A.d.aI(k," + ")
if(o.gvD()===m[o.e].guH())s="\u2696\ufe0f Balanced! "+m[o.e].guH()+" = "+o.gvD()+". The torques are equal, so the seesaw stays level."
else s=o.gvD()>m[o.e].guH()?"The right side is too strong ("+o.gvD()+" vs "+m[o.e].guH()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].guH()+" vs "+o.gvD()+"). Add weight to the right, or place it further from the middle."
k=o.gvD()===m[o.e].guH()?A.b7:A.aM
k=B.byx(s,k,o.gvD()===m[o.e].guH()&&o.e<m.length-1?new B.fg(A.iz,"Next",new B.dAk(o),A.b7,n):n)
w=C.D(C.cp(new B.dAl(o,l)),1)
u=j.length===0?"0":j
u=C.D(C.d("Left torque\n"+u+" = "+m[o.e].guH(),n,n,n,n,n,n,D.aPB,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.v(C.a([new C.C(D.XB,k,n),w,new C.C(D.agj,C.A(C.a([u,C.D(C.d("Right torque\n"+r+" = "+o.gvD(),n,n,n,n,n,n,D.aPB,A.dL,n,n),1)],q),A.m,n,A.e,A.j,0,n,n),n)],q),A.m,n,A.e,A.j,0,A.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new B.dz(w+p,o.e===v,new B.dAm(o,v),n,A.aM,n))}return B.jF(A.aM,A.ha,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.v(C.a([new B.eN(u,"LEVEL",n),new B.eN(C.a([new B.dz("Clear right side",!1,new B.dAn(o),A.jY,A.ci,n)],q),n,n)],q),A.m,n,A.e,A.Q,0,A.p))}}
B.b8l.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aP($.X().r,A.ap,null,null,C.a([],x.v))
i.E(new C.b5(h,f))
w=f+70
i.E(new C.ap(h-30,w))
i.E(new C.ap(h+30,w))
i.E(new C.bF())
v=C.M()
v.r=A.ak.gp(0)
d.aP(i,v)
v=h-120
i=C.M()
i.r=A.aK.gp(0)
d.aX(new C.a9(v,w,v+240,w+8),i)
i=d.a
J.bA(i.save())
i.translate(h,f)
d.iW(0,j.b)
u=g*5.8
t=C.bz(new C.a9(-u,-9,u,9),A.hd)
w=C.M()
w.saq(D.bUv.av(0,new C.a9(t.a,t.b,t.c,t.d)))
d.aD(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.X()
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.hG.gp(0)
v.c=1.5
r=v.H()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
B.fkP(d,""+Math.abs(s),new C.u(w,22),A.c_,10)}q=new B.cC7(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,A.aT)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],A.bU)
if(w[s]===0){l=C.bz(C.co(new C.u(m,-22),22,v),A.hd)
$.X()
k=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
k.b=A.ae
k.c=1.4
k.r=A.b2.gp(0)
r=k.H()
i.drawRRect(C.eq(l),r)
r.delete()
B.fkP(d,"+",new C.u(m,-22),A.c_,14)}}i.restore()
$.X()
i=C.M()
i.r=(j.e?A.b7:A.aL).gp(0)
d.ah(new C.u(h,f),7,i)},
ar(d){return!0},
gja(){return this.e}}
B.Uu.prototype={
U(){return new B.bi8(C.a([16,32,12,24],x.t),C.aX(x.S),A.bw,null,null)}}
B.bi8.prototype={
ga_Z(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gacY(){var w=this.ga_Z(),v=this.r,u=D.awR[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.db(this.d,x.S).a<4)
else w=!1
return w},
a_(){var w,v=this
v.a1()
w=v.qi(new B.dTH(v))
w.j1(0)
v.x!==$&&C.aO()
v.x=w
B.z7("gear_lab").bz(new B.dTI(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.btp()},
c4d(d,e){var w,v=this
v.m(new B.dTx(v,d,e))
if(v.gacY()&&v.w.K(0,v.r)){B.vK("zap",8,240,0.45)
w=v.w
w=C.B(w,C.a3(w).k("cn.E"))
B.vH("gear_lab",C.F(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga_Z(),n=r.ga_Z(),m=D.awR[r.r].a
m=r.gacY()?"\u2705 Done! Ratio "+A.k.aa(r.ga_Z(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gacY()?A.b7:A.ct
v=r.d
u=x.p
n=C.v(C.a([new C.C(D.XB,B.byx(m,w,r.gacY()&&r.r<7?new B.fg(A.iz,"Next",new B.dTB(r),A.b7,q):q),q),C.D(C.b3(q,q,q,new B.bdO(v,r.f,q),A.f0),1),new C.C(D.agj,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+A.k.aa(r.ga_Z(),2)+"   \xb7   Output "+A.k.aa(p*o,1)+" rpm   \xb7   Force \xd7"+A.k.aa(1/n,2),q,q,q,q,q,q,A7.SH,A.L,q,q),q)],u),A.m,q,A.e,A.j,0,A.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new B.dz(m+s,r.r===t,new B.dTC(r,t),q,A.ct,q))}p=r.e
u=C.a([new B.eN(o,"GOAL",q),B.hy(A.aT,""+A.k.V(p)+" rpm","Input speed",120,10,new B.dTD(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new B.auv("Gear "+s+" teeth",p,new B.dTE(r,t),8,40,D.d90[t],""+p,q))}return B.jF(A.ct,A.ha,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.v(u,A.m,q,A.e,A.Q,0,A.p))}}
B.bdO.prototype={
bO3(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.X(),j=C.a([],x.v),i=new C.aP(k.r,A.ap,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.ebC,D.egs,D.evY,D.enu],s=v===0,r=0;r<4;++r){q=t[r]
p=q.a
o=u+p*h
n=e+q.b
m=k+Math.cos(o)*n
l=w+Math.sin(o)*n
if(s&&p===0){p=new C.b5(m,l)
j.push(p)
m=i.f
if(m!=null)p.bx(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}else{p=new C.ap(m,l)
j.push(p)
m=i.f
if(m!=null)p.bx(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}}}i.E(new C.bF())
return i},
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.n)
for(w=this.b,v=0;v<4;++v)g.push(w[v]*2.2)
u=g[0]
t=u+g[1]+6
s=g[2]
r=g[3]
q=t+s+r+6
p=-u-6
o=q+r+6
n=A.d.fo(g,A.pc)
m=-n-6
l=n+6
r=e.a
u=e.b
k=Math.min(r/(o-p),u/(l-m))*0.96
s=d.a
J.bA(s.save())
s.translate(r/2-(p+o)/2*k,u/2-(m+l)/2*k)
d.bX(0,k)
j=this.c
u=w[0]
r=w[1]
i=-j*u/r+3.141592653589793/r
r=w[2]
u=w[3]
h=new B.d9Q(this,d)
h.$6$back(new C.u(t,0),g[2],r,i,A.d9,!0)
h.$5(new C.u(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,A.d_)
h.$5(new C.u(0,0),g[0],w[0],j,A.mP)
h.$5(new C.u(t,0),g[1],w[1],i,A.fC)
s.restore()
s=new B.d9R(d,e,p,o,k)
s.$3("1 \xb7 input",0,A.aT)
s.$3("2+3 \xb7 shared axle",t,A.ct)
s.$3("4 \xb7 output",q,A.b7)},
ar(d){return!0}}
B.TE.prototype={
U(){var w=$.aw()
return new B.bhO(new C.ar(new C.bb("Meet me at noon",A.b3,A.aN),w),new C.ar(new C.bb("LEMON",A.b3,A.aN),w),C.aX(x.S))}}
B.bhO.prototype={
a_(){this.a1()
this.aWe()
B.z7("cipher_lab").bz(new B.dEp(this),x.P)},
q(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a2()},
aWe(){this.y=1+A.cI.aB(25)
this.z=0},
ga8T(){var w=this
return B.a0X(B.a0X(D.GF[w.x],w.y),-w.z)===D.GF[w.x]},
gawK(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=B.a0X(u,v.w)
break A}if(1===t){w=new C.K(C.a(B.a0X(u,0).split(""),x.s),new B.dE7(),x.dv).fW(0)
break A}w=B.i50(u,v.e.a.a)
break A}return w},
aRE(d){var w,v,u,t,s,r=null,q=C.c2(26,0,!1,x.S)
for(w=new C.d4(d.toUpperCase()),v=x.e8,w=new C.bR(w,w.gM(0),v.k("bR<bU.E>")),v=v.k("bU.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,A.d.fo(q,A.zS))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aW(2,2)
v.push(new C.bD(1,A.bi,C.v(C.a([C.p(r,r,A.f,r,r,new C.o(A.aT,r,r,new C.bq(u,u,u,u),r,r,A.n),r,46*q[s]/t,r,A.LO,r,r,r,r),new C.x(C.jE(65+s),r,D.f0Y,r,r,r,r,r,r,r,r,r)],w),A.m,r,A.lR,A.j,0,A.p),r))}return new C.a7(r,70,C.A(v,A.dG,r,A.e,A.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=A.c.j(0.07)
v=x.p
w=C.a([C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.d,o,o,o,o,o,2,C.br(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kZ,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dEg(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,D.eWg,!0,A.a4,o,A.am,o,o,o,o)],v)
if(p.r===2){u=A.c.j(0.07)
A.d.v(w,C.a([A.S,C.aM(o,A.T,!1,o,!0,A.r,o,C.aN(),p.e,o,o,o,o,o,2,C.br(o,new C.b4(4,C.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.kZ,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new B.dEh(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.iH,!0,A.a4,o,A.am,o,o,o,o)],v))}w.push(A.aA)
w.push(D.frc)
w.push(A.at)
v=A.aT.j(0.12)
u=C.m(14)
t=C.I(A.aT.j(0.4),A.q,1)
w.push(C.p(o,C.zq(p.gawK().length===0?"\u2026":p.gawK(),D.f_X,o),A.f,o,o,new C.o(v,o,t,u,o,o,A.n),o,o,o,o,A.bC,o,o,o))
w.push(A.ac)
w.push(B.byx(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],A.aT,o))
w.push(A.ac)
w.push(D.f80)
w.push(A.at)
w.push(p.aRE(p.gawK()))
w.push(A.at)
w.push(D.fan)
s=C.cB(w,o,A.bC,o,o,A.ah,!1)}else{w=B.byx("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",A.aM,o)
v=C.d(B.a0X(D.GF[p.x],p.y),o,o,o,o,o,o,D.f0w,o,o,o)
u=(p.ga8T()?A.b7:A.aT).j(0.14)
t=C.m(14)
r=C.I((p.ga8T()?A.b7:A.aT).j(0.5),A.q,1)
t=C.a([w,A.ac,D.fkX,v,A.S,D.ffn,C.p(o,C.d(B.a0X(B.a0X(D.GF[p.x],p.y),-p.z),o,o,o,o,o,o,D.f1Z,o,o,o),A.f,o,o,new C.o(u,o,r,t,o,o,A.n),o,o,o,o,A.bC,o,o,o),A.ac,p.aRE(B.a0X(D.GF[p.x],p.y)),A.O],x.p)
if(p.ga8T())t.push(B.byx("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",A.b7,new B.fg(A.jY,"Next",new B.dEi(p),A.b7,o)))
s=C.cB(t,o,A.bC,o,o,A.ah,!1)}w=p.f
v=x.p
w=C.a([new B.eN(C.a([new B.dz("Make a secret",w===0,new B.dEj(p),A.jh,A.aT,o),new B.dz("Crack a code",w===1,new B.dEk(p),A.pM,A.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new B.dz(n[q],p.r===q,new B.dEl(p,q),o,A.aT,o))
v=C.a([new B.eN(u,o,o)],v)
if(p.r===0){u=p.w
v.push(B.hy(A.aT,""+u,"Shift",25,1,new B.dEm(p),u))}A.d.v(w,v)}else{v=p.z
w.push(B.hy(A.aM,""+v,"Shift back",25,0,new B.dEn(p),v))}return B.jF(A.aT,A.ha,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.v(w,A.m,o,A.e,A.Q,0,A.p))}}
B.aJQ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.aKj.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.e9.prototype={}
B.tg.prototype={
aoY(d,e,f,g){var w=this
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
B.a9t.prototype={}
B.aax.prototype={}
B.a3B.prototype={
bbw(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h9()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new B.a9t(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c0k(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bn(w,new B.bKu())},
aiO(d,e,f,g){var w="p"+this.c++,v=new B.tg(w,e,f,g)
v.aoY(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bn(this.b,new B.bKF(e))},
a9(d){A.d.a9(this.a)
A.d.a9(this.b)},
cDv(d,e,f,g,h){return A.d.b8(this.b,new B.bKA(e,f,g,h))},
ajz(d,e,f,g){var w
if(d===f||this.cDv(0,d,e,f,g))return null
w=new B.aax(d,e,f,g)
this.b.push(w)
return w},
azg(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zo(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
ama(d){return this.Lc(d)&&!d.x&&d.cx>this.zo(d)},
b49(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Lc(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c4e(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.yH.h(0,v)
if(w!=null)return w.a
return 100},
uP(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c0k(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.U(v).k("a2<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.L)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a2(v,new B.bKG(a2),t).cI(0,0,new B.bKH(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.T(x.N,u)
n=new B.bKJ(o)
m=C.a([],x.t)
l=new B.bKI(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.L)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.L)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.T(u,u)
f=new B.bKL(g,l,n)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,C.L)(v),++s){q=v[s]
f.$2(q,0)
f.$2(q,1)}e=g.a
if(e===0)return
s=0
for(;;){if(!(s<t)){d=0
break}q=v[s]
u=q.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){d=f.$2(q,1)
break}++s}for(u=v.length,s=0;s<u;++s)v[s].CW=0
a2.b45(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zo(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b45(e,d,w,!0)
a2.bL4(a4)},
b45(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.T(x.N,b3),b5=new B.bKw(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new B.bKv(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.L)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new B.bKy(C.T(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,C.L)(w),++u){t=w[u]
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
if(h)C.ba(C.dI(g,null))
e=C.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=C.c2(b7,0,!1,b3)
a0=C.c2(b7,0,!1,b3)
k.a9(0)
j.a9(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.L)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b49(t)*(1+t.CW))
a4=b2.azg(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c4e(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bO2(e,a0,b8)
if(!c0)break
for(a1=w.length,a8=!1,u=0;u<w.length;w.length===a1||(0,C.L)(w),++u){t=w[u]
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
c0=!0}for(b3=w.length,u=0;u<w.length;w.length===b3||(0,C.L)(w),++u){t=w[u]
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
bO2(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return C.c2(d,0,!1,x.i)
u=C.a([],x.b)
for(t=a0.length,s=x.n,r=0;r<a0.length;a0.length===t||(0,C.L)(a0),++r){q=a0[r]
p=C.a([],s)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,C.L)(a0),++n){m=a0[n]
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
bL4(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.azg(o)/a1.b49(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zo(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bDh(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bbw(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tr(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.tr(o,"The "+$.q5().h(0,n).b+" got "+A.k.aa(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tr(o,"More than 1.5 amps went through the "+$.q5().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tr(o,"The regulator had to turn "+A.k.aa(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.aa(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tr(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.yH.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.q5().h(0,n).b
l=f.b
l=l===A.k.jS(l)?""+A.k.V(l):C.t(l)
g=f.c
g=g===A.k.jS(g)?""+A.k.V(g):C.t(g)
a1.tr(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.aa(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eIq.t(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tr(o,"The bulb got "+A.k.aa(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tr(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.D(j/14,0,1)
break
case"motor":n=A.k.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tr(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.D(i/1,0,1)
if(!o.x&&i>1)a1.tr(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tr(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tr(o,"The capacitor was charged to "+A.k.aa(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bDh(d){return A.d.b8(this.a,new B.bKt(d))},
tr(d,e){var w
d.x=!0
d.ay=e
this.bbw(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bga(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a9(0)},
aFi(d){var w=d.b
return D.aM4.t(0,w)||D.yH.ai(0,w)||w==="buck"||w==="regulator"},
bcV(d){var w,v=!0
if(!this.Lc(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.yH.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
U2(d,e){var w=this.b
return new C.a2(w,new B.bKN(d,e),C.U(w).k("a2<1>")).gM(0)},
C7(d){var w,v
if(d.x)return!1
w=d.b
if(D.yH.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bb2(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.q5().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aFi(d)||i.C7(d))return null
w=i.U2(d,0)
v=i.U2(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.U(u).k("a2<1>")
s=C.B(new C.a2(u,i.gcLW(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jS(r)?""+A.k.V(r):C.t(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.aa(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.yH.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aFn("battery"),o=J.aV(t.a),t=new C.fk(o,t.b);t.C();){n=o.gS(o)
if(n.e===1.5&&n.as<=0.02&&i.U2(n,0)+i.U2(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aFn("switch"),o=J.aV(t.a),t=new C.fk(o,t.b);t.C();)if(!o.gS(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.q5().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zo(k))return"The "+$.q5().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.aa(k.cx,2)+" amps, but it can only give about "+A.k.aa(i.zo(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b8(u,new B.bKB(i,d))
h=q.b
h=h===A.k.jS(h)?""+A.k.V(h):C.t(h)
u=A.k.aa(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.aa(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.aa(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aFn(d){var w=this.a
return new C.a2(w,new B.bKE(d),C.U(w).k("a2<1>"))},
aEX(d){return this.aFn(d).b8(0,new B.bKD(0.35))},
pv(d,e){return A.d.b8(this.a,new B.bKC(e))}}
B.ahI.prototype={
a5(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.X()
w=C.M()
w.r=F.Wa.gp(0)
c0.aX(new C.a9(0,0,b8,b9),w)
v=C.M()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.lS.ai(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.lS.ai(0,h.b)?(h.ch-1)*38:0
b4.cAx(c0,new C.u(k*b6+j*(42+i),l*b7),new C.u(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=B.hr3(q.a,q.b,c1)
q=b4.e
q.toString
$.X()
p=C.M()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bO
c0.bA(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.X()
g=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=D.acj.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.yI
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bA(w.save())
w.translate(j,i)
h=A.k.D(A.mI.aw(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.cdU(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zo(a0)){g=j+0
f=i+-40
e=Math.sin(r.d*10)
a2=$.X().r
a3=C.a([],k)
a4=new C.aP(a2,A.ap,b5,b5,a3)
a5=f-13
a3.push(new C.b5(g,a5))
a6=g+13
a7=f+10
a3.push(new C.ap(a6,a7))
a8=g-13
a3.push(new C.ap(a8,a7))
a3.push(new C.bF())
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ay.j(0.65+0.35*e).gp(0)
s=a3.H()
e=a4.gbI().a.snapshot()
w.drawPath((a4.e=new C.cF(e)).a,s)
s.delete()
e=C.a([],k)
a2=new C.aP(a2,A.ap,b5,b5,e)
e.push(new C.b5(g,a5))
e.push(new C.ap(a6,a7))
e.push(new C.ap(a8,a7))
e.push(new C.bF())
e=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=1.6
e.r=A.c.gp(0)
s=e.H()
e=a2.gbI().a.snapshot()
w.drawPath((a2.e=new C.cF(e)).a,s)
s.delete()
a9=new C.kp(new C.ep("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.cc,new C.jo(1),b5,b5,b5,b5,A.ca,b5)
a9.eI()
a9.a5(c0,new C.u(g+-3,f+-8))}if(!a0.x)g=(D.aM4.t(0,h)||D.yH.ai(0,h)||h==="buck"||h==="regulator")&&!r.C7(a0)&&r.U2(a0,0)+r.U2(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.X()
g=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.aH.gp(0)
s=g.H()
w.drawCircle(j,i,10,s)
s.delete()
a9=new C.kp(new C.ep("!",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.cc,new C.jo(1),b5,b5,b5,b5,A.ca,b5)
a9.eI()
a9.a5(c0,new C.u(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.lS.ai(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.X()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=F.Wa.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2.4
j.r=(i&&r.bcV(a0)?A.ci:A.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bcV(a0)){a9=new C.kp(new C.ep("+",b5,b5,A.cO,b5,b5,b5,b5,b5,b5,new C.G(!0,A.ci,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.cc,new C.jo(1),b5,b5,b5,b5,A.ca,b5)
a9.eI()
a9.a5(c0,new C.u(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=C.aq(F.WH,F.WM,b2)
j.toString
i=b1.f
$.X()
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=j.gp(0)
h.c=2.4
h.d=A.bO
s=h.H()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=j.j(0.35*b2).gp(0)
i.z=A.Qw
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b8(q,new B.bFN())){b3=A.d.cI(q,0,new B.bFO())
$.X()
b7=C.M()
b7.r=D.b6X.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aX(new C.a9(0,0,b8,b9),b7)
a9=C.i1(b5,b5,b5,b5,D.eSQ,A.a4,A.cc,b5,A.eh,A.ca)
a9.Bw(b6-24)
a9.a5(c0,new C.u(12,10))}},
q3(d,e,f,g,h){var w=null,v=C.i1(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.cc,w,A.eh,A.ca)
v.eI()
v.a5(d,f)},
cAx(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aP($.X().r,A.ap,null,null,C.a([],x.v))
d.E(new C.b5(a1.a,a1.b))
w=B.hjx(a1,a2,a3)
d.E(new C.cS(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.aq(A.aM,D.acj,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.aq(A.aT,A.aM,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bn
u=C.M()
u.b=A.ae
u.c=a4?7:5
u.d=A.bO
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aP(d,u)
u=C.M()
u.b=A.ae
u.c=2.4
u.d=A.bO
u.r=(a4?A.c:o).gp(0)
a0.aP(d,u)
if(q){n=new C.RW(new C.vm(C.wP(d),!1,C.a([],x.f5))).gL(0)
m=40+A.k.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.jk()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jk()
h=t[u].b
h===$&&C.c()
h=A.k.G(j*22+i*m*l,h.a.length())
v.jk()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.jk()
g=t[u].b
g===$&&C.c()
f=A.k.G(h+i,g.a.length())
v.jk()
i=t[u].Mi(f).a
h=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
Ot(d,e,f,g){var w,v,u,t
$.X()
w=C.M()
v=g?A.b0:A.a3
u=g?A.b5:A.a7
t=C.aq(e,A.w,0.3)
t.toString
w.saq(new C.a8(v,u,A.x,C.a([e,f,e,t],x.O),A.GH,null).av(0,d))
return w},
auT(d,e,f){return this.Ot(d,e,f,!0)},
c_W(d,e){return this.Ot(d,A.bn,A.iN,e)},
ago(d,e){var w,v,u
$.X()
w=C.M()
w.saq(D.aKH.av(0,C.bT(e,4.2)))
d.ah(e,4.2,w)
w=e.ad(0,D.e0P)
v=e.ad(0,D.e0Y)
u=C.M()
u.r=A.eu.gp(0)
u.c=1.2
d.bA(w,v,u)},
cdU(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.X(),c0=C.M()
c0.saq(D.bRw.av(0,D.eFq))
c0.c=3.4
c0.d=A.bO
w=C.M()
w.r=A.w.j(0.45).gp(0)
w.z=G.mu
c1.hM(D.eFi,w)
if(c3){w=C.bz(D.eFp,A.kq)
v=C.M()
v.r=A.c.j(0.14).gp(0)
c1.aD(w,v)}u=B.h_L(c2)
c1.bA(new C.u(-u,0),D.e26,c0)
c1.bA(D.e_Y,new C.u(u,0),c0)
t=c2.x
w=c2.b
s=D.lS.ai(0,w)&&c2.ch!==1
if(s){J.bA(c1.a.save())
c1.bX(0,c2.ch)}switch(w){case"battery":b3.bAc(c1,c2)
break
case"solar":r=C.bz(D.eFl,A.ii)
c1.aD(r,b3.Ot(new C.a9(r.a,r.b,r.c,r.d),A.dz,A.bR,!1))
b9=C.M()
w=C.aq(D.ba6,A.d6,0.25+0.55*c2.f)
w.toString
v=C.aq(D.bhS,A.mb,0.3+0.4*c2.f)
v.toString
b9.saq(new C.a8(A.ax,A.aC,A.x,C.a([w,v],x.O),b4,b4).av(0,D.a5m))
c1.aX(D.a5m,b9)
q=C.M()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(b9=c1.a,p=1;p<6;++p){w=-34+p*68/6
o=q.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}for(p=1;p<4;++p){w=-18+p*9
o=q.H()
b9.drawLine.apply(b9,[-34,w,34,w,o])
o.delete()}for(p=0;p<6;++p){w=-34+(p+0.5)*68/6
$.X()
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.cp.j(0.5).gp(0)
v.c=0.6
o=v.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new C.aP($.X().r,A.ap,b4,b4,C.a([],x.v))
b9.E(new C.b5(-34,18))
b9.E(new C.ap(-6+40*c2.f,-18))
b9.E(new C.ap(4+40*c2.f,-18))
b9.E(new C.ap(-24,18))
b9.E(new C.bF())
w=C.M()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aP(b9,w)
w=c2.f
b9=C.M()
b9.r=A.dN.j(0.9).gp(0)
c1.ah(D.e03,4+4*w,b9)
break
case"crank":n=C.bz(D.eF6,A.he)
c1.aD(n,b3.auT(new C.a9(n.a,n.b,n.c,n.d),A.bv,A.bJ))
b9=C.M()
b9.saq(D.aKI.av(0,C.bT(A.J,12)))
c1.ah(A.J,12,b9)
m=new C.u(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.M()
b9.r=A.cp.gp(0)
b9.c=5
b9.d=A.bO
c1.bA(A.J,m,b9)
b9=C.M()
b9.saq(D.eaG.av(0,C.bT(m,7)))
c1.ah(m,7,b9)
b3.ago(c1,D.e2_)
b3.ago(c1,D.e_R)
break
case"turbine":b9=b9.r
w=x.v
v=new C.aP(b9,A.ap,b4,b4,C.a([],w))
v.E(new C.b5(-3,24))
v.E(new C.ap(3,24))
v.E(new C.ap(1.5,0))
v.E(new C.ap(-1.5,0))
v.E(new C.bF())
l=C.M()
l.r=A.bR.gp(0)
c1.aP(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.bA(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=C.a([],w)
j=new C.aP(b9,A.ap,b4,b4,l)
l.push(new C.b5(0,-2))
l.push(new C.cS(6,-14,2,-30))
l.push(new C.cS(-2,-14,0,-2))
l.push(new C.bF())
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.gp(0)
o=l.H()
l=j.gbI().a.snapshot()
v.drawPath((j.e=new C.cF(l)).a,o)
o.delete()
v.restore()}b9=C.M()
b9.saq(D.eam.av(0,C.bT(A.J,4.5)))
c1.ah(A.J,4.5,b9)
break
case"switch":n=C.bz(D.eFd,A.rq)
b9=C.M()
b9.saq(D.anq.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,b9)
b3.ago(c1,D.Ro)
b3.ago(c1,D.aFx)
i=c2.w?D.aFx:D.e_B
b9=C.M()
b9.r=A.aB.gp(0)
b9.c=6
b9.d=A.bO
c1.bA(D.Ro,i,b9)
b9=C.M()
b9.r=(c2.w?A.b7:A.bR).gp(0)
b9.c=4
b9.d=A.bO
c1.bA(D.Ro,i,b9)
b9=C.le(D.Ro,i,0.85)
b9.toString
w=C.M()
w.r=A.ay.gp(0)
c1.ah(b9,5,w)
break
case"fuse":h=C.bz(D.aLd,D.aKN)
b9=C.M()
b9.r=A.fg.j(0.25).gp(0)
c1.aD(h,b9)
b9=C.M()
b9.b=A.ae
b9.c=1.4
b9.r=A.az.gp(0)
c1.aD(h,b9)
if(!t){b9=C.M()
b9.c=1.6
b9.r=C.aq(A.bR,A.ct,c2.fx).gp(0)
c1.bA(D.aFO,D.aFw,b9)}else{b9=C.M()
b9.c=1.6
b9.r=A.c_.gp(0)
c1.bA(D.aFO,D.e2n,b9)
b9=C.M()
b9.c=1.6
b9.r=A.c_.gp(0)
c1.bA(D.e0u,D.aFw,b9)
b9=C.M()
b9.r=A.dA.gp(0)
c1.ah(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.co(new C.u(F.oO[g]*22,0),20,9)
w=C.bz(f,A.hA)
o=b3.Ot(f,A.d9,A.oj,!0).H()
b9.drawRRect(C.eq(w),o)
o.delete()}break
case"pot":b9=C.M()
b9.saq(D.eay.av(0,C.bT(A.J,21)))
c1.ah(A.J,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.az.gp(0)
d.c=1.2
o=d.H()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=C.M()
b9.saq(D.eak.av(0,C.bT(A.J,13)))
c1.ah(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=C.M()
j.r=A.aM.gp(0)
j.c=3
j.d=A.bO
c1.bA(new C.u(b9*3,w*3),new C.u(v*12,l*12),j)
break
case"resistor":a1=C.bz(D.aLd,D.aKN)
b9=C.M()
b9.saq(D.bUM.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=x.O
a2=C.F([47,C.a([C.b0(b5),C.b0(b6),A.w],b9),100,C.a([C.b0(b7),A.w,C.b0(b7)],b9),220,C.a([C.b0(b8),C.b0(b8),C.b0(b7)],b9),470,C.a([C.b0(b5),C.b0(b6),C.b0(b7)],b9),1000,C.a([C.b0(b7),A.w,C.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=a3[p].gp(0)
o=v.H()
b9.drawRect(C.c1(new C.a9(w,-9,w+4.5,9)),o)
o.delete()}b9=C.M()
b9.r=A.aM.gp(0)
c1.aX(D.eFz,b9)
b9=c2.r
b3.q3(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.e1F,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.M()
v.r=A.dN.j(0.55*w).gp(0)
v.z=A.yI
c1.ah(D.vU,34,v)}n=C.co(D.e_6,12,18)
c1.aD(C.bz(n,A.hA),b3.Ot(n,A.bn,A.e_,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.dn.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.M()
if(t)v=A.Vs
else{v=C.aq(A.e_,A.hU,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.Em
else{l=C.aq(A.dz,A.dN,c2.fx)
l.toString}w.saq(new C.bS(A.rL,0.5,A.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).av(0,C.bT(A.rn,17)))
c1.ah(A.rn,17,w)
w=C.M()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ah(A.rn,17,w)
b9=b9.r
w=x.v
l=new C.aP(b9,A.ap,b4,b4,C.a([],w))
l.E(new C.b5(-9,-12))
l.E(new C.cS(-12,-4,-9,0))
v=C.M()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aP(l,v)
v=C.M()
v.r=A.cU.gp(0)
v.c=1.4
c1.bA(D.e2j,D.e2l,v)
v=C.M()
v.r=A.cU.gp(0)
v.c=1.4
c1.bA(D.e0n,D.e0q,v)
w=C.a([],w)
a4=new C.aP(b9,A.ap,b4,b4,w)
a4.E(new C.b5(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new C.ap(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bx(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.X()
b9=C.M()
b9.b=A.ae
b9.c=1.8
if(t)w=A.aX
else{w=C.aq(A.dz,D.baT,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aP(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.M()
v.r=A.ay.j(0.6*w).gp(0)
v.z=D.djG
c1.ah(A.rn,30,v)}w=C.M()
w.r=A.e_.gp(0)
w.c=2.4
c1.bA(D.e2p,D.e2o,w)
w=C.M()
w.r=A.e_.gp(0)
w.c=2.4
c1.bA(D.e0w,D.e0v,w)
b9=b9.r
w=x.v
a6=new C.aP(b9,A.ap,b4,b4,C.a([],w))
a6.E(new C.b5(-12,8))
a6.E(new C.ap(-12,-6))
a6.E(new C.cS(0,-26,12,-6))
a6.E(new C.ap(12,8))
a6.E(new C.bF())
v=C.M()
if(t)l=A.ti
else{l=C.aq(A.er,D.ad2,c2.fx)
l.toString}if(t)j=A.kf
else{j=C.aq(A.kc,A.ay,c2.fx)
j.toString}v.saq(new C.a8(A.ax,A.aC,A.x,C.a([l,j],x.O),b4,b4).av(0,D.eED))
c1.aP(a6,v)
v=C.M()
v.b=A.ae
v.c=1.2
v.r=A.j9.gp(0)
c1.aP(a6,v)
v=C.M()
v.r=A.eM.gp(0)
c1.aX(D.eEJ,v)
w=new C.aP(b9,A.ap,b4,b4,C.a([],w))
w.E(new C.b5(-7,-4))
w.E(new C.cS(-6,-12,0,-15))
b9=C.M()
b9.b=A.ae
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aP(w,b9)
break
case"motor":a7=new C.a9(-28,-14,20,14)
c1.aD(C.bz(a7,A.hd),b3.auT(a7,A.ak,A.aL))
b9=C.M()
b9.r=A.cC.gp(0)
c1.aX(D.eEq,b9)
b9=C.M()
b9.r=A.cp.gp(0)
c1.aX(D.eEr,b9)
b9=c1.a
J.bA(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bA(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.co(D.e_o,15,7)
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.ct.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c1(w),o)
o.delete()
b9.restore()}w=C.M()
w.r=A.aB.gp(0)
c1.ah(A.J,3,w)
b9.restore()
b3.q3(c1,"M",D.e1Z,A.aB,14)
break
case"buzzer":a8=C.co(A.J,42,42)
b9=C.M()
b9.saq(D.eaC.av(0,a8))
c1.hM(a8,b9)
b9=C.M()
b9.r=A.w.gp(0)
c1.ah(A.J,6,b9)
b9=C.M()
b9.b=A.ae
b9.c=1.4
b9.r=A.b2.gp(0)
c1.ah(A.J,6,b9)
b3.q3(c1,"+",D.e1S,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.G(w.d*14,5):0
l=C.bT(A.J,24+k*5+l)
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=2
j.r=A.bU.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c1(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.bz(D.eF9,A.hd)
w=C.M()
w.saq(D.bSt.av(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,w)
w=C.a([],x.v)
a9=new C.aP(b9.r,A.ap,b4,b4,w)
a9.E(new C.b5(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new C.cS(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bx(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.X()
w=C.M()
w.b=A.ae
w.c=10
w.r=D.bbu.j(0.5*b9).gp(0)
w.z=A.jk
c1.aP(a9,w)}$.X()
b9=C.M()
b9.b=A.ae
b9.c=3.2
b9.d=A.bO
b9.r=C.aq(A.lC,A3.Ww,c2.fx).gp(0)
c1.aP(a9,b9)
break
case"capacitor":a7=new C.a9(-16,-22,16,18)
b9=C.bz(a7,A.hd)
w=C.M()
w.saq(D.bRo.av(0,a7))
c1.aD(b9,w)
w=C.M()
w.r=A.bR.gp(0)
c1.aX(D.eEP,w)
for(p=0;p<4;++p){b0=new C.kp(new C.ep("\u2212",b4,b4,A.cO,b4,b4,b4,b4,b4,b4,new C.G(!0,A.aB,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.cc,new C.jo(1),b4,b4,b4,b4,A.ca,b4)
b0.eI()
b0.a5(c1,new C.u(-14,-18+p*9))}b1=new C.a9(-16,-24,16,-17)
c1.aD(C.bz(b1,A.hA),b3.c_W(b1,!1))
b9=38*c2.fx
w=18-b9
$.X()
v=C.M()
v.r=A.b7.j(0.5).gp(0)
c1.aX(new C.a9(-3,w,11,w+b9),v)
b3.q3(c1,"1F",D.vU,A.c,11)
break
case"radio":a1=C.bz(D.a5m,A.he)
b9=C.M()
b9.saq(D.bV1.av(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=C.M()
b9.b=A.ae
b9.c=1.4
b9.r=A.oj.j(0.6).gp(0)
c1.aD(a1,b9)
b9=C.bz(D.eFa,A.ii)
w=C.M()
w.r=A.dF.gp(0)
c1.aD(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
v.r=A.lC.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=C.M()
w.r=(c2.fx>0?A.h1:A.nB).gp(0)
c1.aX(D.eEt,w)
if(c2.fx>0){w=8+A.k.G(b3.b.d*7,18)
v=C.M()
v.r=A.bI.gp(0)
v.c=1.6
c1.bA(new C.u(w,-13),new C.u(w,-3),v)}w=C.M()
w.saq(D.aKI.av(0,C.bT(D.a4o,6)))
c1.ah(D.a4o,6,w)
w=C.M()
w.r=A.oj.gp(0)
c1.ah(D.e_X,4,w)
w=C.M()
w.r=A.e_.gp(0)
w.c=1.8
c1.bA(D.e_V,D.aFB,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bT(D.aFB,4+k*5+A.k.G(w.d*8,5))
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=1.4
l.r=A.nG.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c1(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.bz(D.eFk,A.hd)
v=C.M()
v.r=M.nI.gp(0)
c1.aD(w,v)
b2=C.bz(D.eFh,A.hA)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bA(b9.save())
b9.clipRRect(C.eq(b2),$.pl(),!0)
b9.translate(-33,-21)
E.fX1(c1,D.eKT,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.M()
b9.r=A.b7.gp(0)
c1.ah(D.e08,1.6,b9)}else{w=C.M()
w.r=D.uY.gp(0)
c1.aD(b2,w)
b9=new C.aP(b9.r,A.ap,b4,b4,C.a([],x.v))
b9.E(new C.b5(-33,-21))
b9.E(new C.ap(-10,-21))
b9.E(new C.ap(-33,0))
b9.E(new C.bF())
w=C.M()
w.r=A.c.j(0.05).gp(0)
c1.aP(b9,w)}b9=C.M()
b9.r=A.bv.gp(0)
c1.aX(D.eEI,b9)
break}B.i2G(c1,c2,b3.b.d,b3.gc4f())
if(t)b3.q3(c1,"\u2716",D.e2s,A.ay,14)
if(s)c1.a.restore()},
bAc(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.a9(-28,-13,28,13)
d.aD(C.bz(w,A.rq),m.auT(w,A.dz,A.iQ))
v=new C.a9(-22,-13,22,13)
$.X()
u=C.M()
u.saq(D.anj.av(0,v))
d.aX(v,u)
u=C.M()
u.r=A.dT.gp(0)
d.aX(D.eEY,u)
t=new C.a9(28,-5,34,5)
d.aD(C.bz(t,A.hc),m.Ot(t,A.dz,A.iN,!0))
m.q3(d,"+",D.e_G,A.aM,11)
m.q3(d,"\u2212",D.e20,A.ad,11)
m.q3(d,C.t(l===A.k.jS(l)?A.k.V(l):l)+"V",D.e1L,A.aM,13)
if(l===1.5){u=C.M()
u.r=A.bF.gp(0)
d.aX(D.eEX,u)
u=e.as
s=C.M()
s.r=C.aq(A.ay,A.b7,u).gp(0)
d.aX(new C.a9(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.q3(d,"FLAT",D.e1E,A.ci,9)}if(l>2){u=C.M()
u.r=A.b2.gp(0)
u.c=1
d.bA(D.e_c,D.aFg,u)
m.q3(d,l>3?"3 cells":"2 cells",D.e1K,A.az,8)}}else if(l<=9){r=new C.a9(-22,-17,22,17)
u=C.bz(r,A.rq)
$.X()
s=C.M()
s.saq(D.bUA.av(0,r))
d.aD(u,s)
s=C.M()
s.r=A.d_.gp(0)
d.aX(D.eEZ,s)
for(u=d.a,q=0;q<2;++q){p=D.d7b[q]
s=p<0?5:3.6
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(D.aKH.av(0,C.bT(new C.u(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.q3(d,"9V",D.e1G,A.c,16)}else{r=new C.a9(-34,-16,34,16)
u=C.bz(r,A.ii)
$.X()
s=C.M()
s.saq(D.anj.av(0,r))
d.aD(u,s)
s=C.M()
s.r=A.co.gp(0)
d.aX(D.eFj,s)
for(u=d.a,q=0;q<2;++q){s=C.bz(C.co(new C.u(F.a2f[q],-20),8,10),A.hc)
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=A.cp.gp(0)
n=o.H()
u.drawRRect(C.eq(s),n)
n.delete()}m.q3(d,"+",D.e_N,A.ay,10)
m.q3(d,"12V",D.e1H,A.aB,15)}},
ar(d){return!0}}
B.mv.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a9(k)
A.d.a9(d.b)
w=C.T(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new B.tg(o,r,q,p)
n.aoY(o,r,q,p)
k.push(n)
J.io(s[4],new B.cj6(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.L)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.ajz(m,u[1],l,u[3])}}}
B.ahG.prototype={
U(){var w=x.N
return new B.ahH(A.J,A.au,C.T(w,x.gl),C.aX(w),$,A.bw,0,C.a([],x.X),null,null)}}
B.ahH.prototype={
ad0(d){var w=this,v=w.as
if(v!=null)v.a8(0)
w.m(new B.bFr(w,d))
w.as=C.cM(A.l8,new B.bFs(w))},
q(){var w=this.as
if(w!=null)w.a8(0)
w=this.ch
if(w!=null)w.a8(0)
this.bq7()},
a_5(d,e){return this.cbR(d,e)},
aZv(d){return this.a_5(d,!1)},
cbR(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$a_5=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.qO:A.v2
p=d.b
w=3
return C.b(E.fKi(s,r,p,d.ax<3.2,q,$.q5().h(0,p).b),$async$a_5)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return C.h(u,v)}})
return C.i($async$a_5,v)},
coi(d){var w=this,v=new C.S(Date.now(),0,!1),u=w.at.cg(0,d.a,new B.bFt()),t=J.cE(u)
t.K(u,v)
t.bn(u,new B.bFu(v))
if(t.gM(u)>=4){t.a9(u)
t=w.ch
if(t!=null)t.a8(0)
w.a0q(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a8(0)
w.ch=C.cM(A.kg,new B.bFv(w,u,d))}},
ZM(d){return this.cae(d)},
cae(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$ZM=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(B.i3N(s,d.b,A.k.V(A.k.G(t.a.c.d*0.12,1)*100)),$async$ZM)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$ZM,v)},
a0q(d){return this.clY(d)},
clY(d){var w=0,v=C.j(x.H),u=this,t
var $async$a0q=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bV(F.ma,null,new B.bFp(u,d),t,!0,!0,!1,A.kX,!1,!1,x.H),$async$a0q)
case 2:return C.h(null,v)}})
return C.i($async$a0q,v)},
a_(){this.a1()
this.bd5()
this.la()},
bd5(){this.a.c.e=new B.bFK(this)},
lr(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.uP(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=D.lS.h(0,s.b)
if((r==null?null:r.b)!==D.z7)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.K(0,s.a)
q.a_5(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)E.dF(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)E.dF(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cI.aj()<0.5
else u=!1
if(u)E.dF(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){E.dF(900+A.cI.aB(800),"",90,0,0.1,o)
if(A.cI.aj()<0.35)E.dF(300+A.cI.aB(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cI.aj()<0.4
else u=!1
if(u)E.dF(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)E.dF(330+A.o.G(110*A.k.bu(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dF((A.k.bu(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)E.dF(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)E.dF(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cI.aj()<0.5
else u=!1
if(u)E.dF(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)E.dF(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)E.dF(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new B.bFL())},
b5m(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.lS.ai(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new C.y(p,n)
r=i}}}return s},
b_b(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.U(w).k("dw<1>"),w=new C.dw(w,v),w=new C.bR(w,w.gM(0),v.k("bR<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.lS.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cAy(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.L)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.lS.ai(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.lS.ai(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=B.hjx(new C.u(k,n),new C.u(i,l),p)
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
acZ(){this.a.toString
this.m(new B.bEV())},
bmW(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cV8[v]
if(!A.d.b8(p.a.c.a,new B.bFM(u,w))){o=new C.u(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?L.HL:o
s=s?L.HL:o
q=t.aiO(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dF(1200,"",50,0,0.3,"tri")
p.acZ()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.PN[v].a)
u=w.length
t=u>8
s=t?A.d.dq(w,0,A.o.an(u+1,2)):w
r=t?A.d.fJ(w,A.o.an(w.length+1,2)):A.T
q=n.a.d
if(q!=null){w=C.a3(q).k("cu<1>")
w=C.B(new C.cu(q,w),w.k("J.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.L)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.b_0(s,!0))
n.a.toString
if(t)w.push(n.b_0(r,!0))
w.push(C.D(C.cp(new B.bFJ(n,q,m)),1))
return C.v(w,A.m,null,A.e,A.j,0,A.p)},
b_0(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.L)(d),++v){u=d[v]
t=$.q5()
s=t.h(0,u).d.j(0.14)
r=new C.aW(14,14)
q=new C.aA(t.h(0,u).d.j(0.5),1,A.q,-1)
m.push(C.aE(p,C.p(p,C.v(C.a([new C.x(t.h(0,u).c,p,A.zl,p,p,p,p,p,p,p,p,p),new C.x(t.h(0,u).b,p,A.nl,p,p,p,p,A.a2,p,1,p,p)],n),A.m,p,A.bb,A.j,0,A.p),A.f,p,p,new C.o(s,p,new C.bP(q,q,q,q),new C.bq(r,r,r,r),p,p,A.n),p,p,p,F.tt,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bEW(this,u),p,p,p,p,p,p,!1,A.a8))}return C.p(p,C.cB(m,p,A.h5,p,p,A.aO,!1),A.f,p,p,new C.o(D.Ei,p,new C.bP(A.Y,A.Y,new C.aA(o,1,A.q,-1),A.Y),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aXA(d){var w=null,v=C.m(18)
return C.p(w,d,A.f,w,w,new C.o(F.ab1,w,C.I(A.bF,A.q,1),v,w,w,A.n),w,w,w,w,F.agk,w,w,w)},
cdV(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.q5().h(0,o),m=d.dy,l=d.fr,k=new B.bFe(q,n),j=C.d(n.c,p,p,p,p,p,p,A.T_,p,p,p),i=n.b,h=n.d,g=x.p
i=C.A(C.a([j,A.ab,C.D(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bJ1,p,p,p,new B.bF1(q,d),p,p,p,p,"Remove part",A.c8),C.aH(p,p,p,p,A.Ga,p,p,p,new B.bF2(q),p,p,p,p,p,A.c8)],g),A.m,p,A.e,A.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,F.D3,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.f0l,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.aa(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.aa(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.aa(Math.abs(m*l),2)+" watts"
m=C.a([i,j,A.at,w,A.an,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?A.ci:A.aM,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bb2(d)
if(v!=null){l=(d.x?A.ay:A.aH).j(0.14)
j=C.m(10)
i=C.I((d.x?A.ay:A.aH).j(0.5),A.q,1)
m.push(new C.C(A.ia,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.f6I,p,p,p),A.f,p,p,new C.o(l,p,i,j,p,p,A.n),p,p,p,p,A.ck,p,p,p),p))}if(B.fV8(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new B.dz("CH "+t,d.at===u,new B.bF3(q,d,u),p,h,p))}l=C.bY(A.bz,l,A.br,4,6)
l=C.a([A.an,l,A.at,C.d(q.a.c.C7(d)?"Showing: "+F.Pp[A.o.G(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hp,p,p,p)],g)
if(q.a.c.C7(d))l.push(new B.fg(A.FK,"Open big screen",new B.bF6(q,d),h,p))
A.d.v(m,l)}if(D.lS.ai(0,o)&&!B.fV8(o)){l=C.a([A.an,C.d(q.a.c.C7(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hp,p,p,p)],g)
if(q.a.c.C7(d))l.push(new B.fg(A.N8,"Open the "+$.q5().h(0,o).b,new B.bF7(q,d),h,p))
A.d.v(m,l)}if(D.lS.ai(0,o))A.d.v(m,C.a([A.an,new B.fg(A.Bo,"Make it bigger (or tap it 4 times)",new B.bF8(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.aa(d.db,1)
if(q.a.c.C7(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([A.an,C.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.aa(i,1)+" V",p,p,p,p,p,p,D.f1a,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.daa[s]
j=r===A.k.jS(r)?A.k.V(r):r
l.push(new B.dz(C.t(j)+" V out",d.e===r,new B.bF9(q,d,r),p,h,p))}i.push(new C.C(A.mg,C.bY(A.bz,l,A.br,0,6),p))}if(o==="regulator")i.push(D.fos)
A.d.v(m,i)}if(q.a.c.Lc(d)&&!d.x){l=A.k.aa(d.cx,2)
j=A.k.aa(q.a.c.zo(d),2)
i=q.a.c
w=i.ama(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.ama(d)?A.ci:A.es,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.m(4)
w=A.k.D(d.cx/q.a.c.zo(d),0,1)
i=q.a.c.ama(d)?A.ay:A.b7
m.push(new C.C(A.ia,C.v(C.a([l,A.cX,C.bw(j,C.lZ(A.bF,p,p,5,p,w,new C.lS(i,x.x)),A.aq)],g),A.F,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.C(A.ia,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.eWd,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d0t[s]
j=r===1.5?"1.5 V (rechargeable)":C.t(r)+" V"
l.push(new B.dz(j,d.e===r,new B.bFa(q,d,r),p,h,p))}m.push(C.bY(A.bz,l,A.br,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cSI[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new B.dz(j,d.r===r,new B.bFb(q,d,r),p,h,p))}m.push(C.bY(A.bz,l,A.br,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new B.bFc(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new B.bFd(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new B.bF4(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new B.bF5(d)))
if(o==="crank")m.push(D.fk5)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hp,p,p,p))
return q.aXA(new C.cV(D.aY4,C.cd(C.v(m,A.F,p,A.e,A.Q,0,A.p),A.r,p,A.y,p,p,p,p,A.ah),p))}}
B.b9i.prototype={}
B.Uh.prototype={
U(){return new B.aBZ(B.h_K(),new C.cs(null,x.gJ),C.aX(x.S))}}
B.aBZ.prototype={
a_(){this.a1()
$.aU.c2$.push(this)
this.ad_()},
ad_(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$ad_=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(B.fqh(),$async$ad_)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=B.i3_(t.d,r)
if(s!=null){t.m(new B.dPM(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$ad_,v)},
Ey(){var w,v=this
if(!v.as)return
w=B.hUC(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
B.bCa(w)},
iS(d){if(d!==A.fs)this.Ey()},
q(){$.aU.hE(this)
this.Ey()
this.a2()},
c4h(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.U(v).k("a2<1>")
t=new C.a2(v,new B.dPV(q),u).gM(0)
s=new C.a2(v,new B.dPW(),u).gM(0)
r=new C.a2(v,w.gcPr(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new B.dPX(q,t,s,r))}if(A.o.G(q.w,45)===0)q.Ey()
if(A.o.G(q.w,10)===0){w=q.f
$.agT()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.agT()[q.f].c.$1(q.d)){w.K(0,q.f)
B.Bi("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new B.dPY())
q.Ey()
w=q.c
w.toString
w=C.WE(w)
if(w!=null)w.R(C.b2(p,p,p,p,p,A.r,p,C.d("\u2705 Challenge done: "+$.agT()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.md,p,p,p,p,p,p,p,p,p,p))}},
afF(){var w=0,v=C.j(x.H),u=this,t
var $async$afF=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.ca(null,null,!0,null,new B.dPL(u),t,null,!0,!0,x.H),$async$afF)
case 2:return C.h(null,v)}})
return C.i($async$afF,v)},
aXz(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.m(12),t=C.I(f.j(0.45),A.q,1)
u=C.a([C.ao(w,C.p(w,C.W(d,f,w,w,w,18),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aE(w,C.hp(new C.a7(40,38,new C.an(A.W,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8)},
aXy(d,e,f,g){return this.aXz(d,e,f,g,null)},
apC(d,e,f,g){var w=null,v=f.j(0.1),u=C.m(10),t=C.I(f.j(0.4),A.q,1)
return C.D(C.aE(w,C.p(w,C.A(C.a([C.W(d,f,w,w,w,15),A.eb,new C.dq(1,A.cj,C.d(e,w,1,A.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.bb,A.j,0,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),1)},
adZ(){var w=0,v=C.j(x.H),u=this,t
var $async$adZ=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a6(t,!1).c8(C.e8(new B.dPH(u),!1,null,x.H)),$async$adZ)
case 2:t=u.e.gbg()
if(t!=null)t.bd5()
if(u.c!=null)u.m(new B.dPI())
u.Ey()
return C.h(null,v)}})
return C.i($async$adZ,v)},
bDa(){var w,v,u,t,s=null,r=this.f
$.agT()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.bo:A.ay
u=C.m(9)
t=C.I(D.Ei,A.q,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.w8,s,s,s),s,s,s),A.f,s,D.aYb,new C.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eQ,s,s,s)},
agL(){var w=0,v=C.j(x.H),u=this,t
var $async$agL=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.bV(F.ma,null,new B.dPU(u),t,!0,!0,!0,A.kX,!1,!1,x.H),$async$agL)
case 2:return C.h(null,v)}})
return C.i($async$agL,v)},
c4i(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=C.aE(r,C.p(r,D.bKf,A.f,r,r,new C.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dQ_(d),r,r,r,r,r,r,!1,A.a8),o=C.m(11)
o=C.p(r,D.b2O,A.f,r,r,new C.o(A.bm,r,C.I(A.aT.j(0.45),A.q,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.v(C.a([C.A(C.a([p,A.ab,o,A.ab,C.D(C.v(C.a([D.fmz,C.d(w,r,1,A.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?A.f3:A.hi,r,r,r,r,r,r,r,r,11.5,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.F,r,A.e,A.j,0,A.p),1),new B.aw5(s.gc9W(),r),A.rw,s.aXy(A.xN,"Construction Lab: real 3D wiring, plumbing and a house",A.ct,new B.dQ0(s,d)),s.aXz(A.ld,"Challenges",A.aM,s.gcqO(),s.bDa()),s.aXy(A.N0,"How to play",A.aT,new B.dQ1(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.an,C.A(C.a([s.apC(A.pN,"Circuits",A.by,s.gcjN()),A.bp,s.apC(A.qW,"Repair",A.aM,new B.dQ2(s)),A.bp,s.apC(D.xO,"Clear",A.ci,new B.dQ3(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.Ei,r,new C.bP(A.Y,A.Y,new C.aA(q,1,A.q,-1),A.Y),r,r,r,A.n),r,r,r,r,D.buk,r,r,r)},
B(d){var w=this,v=null
$.aqF="tech"
return C.c8(v,A.bX,C.bn(!0,C.v(C.a([w.c4i(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.D(B.fZE(w.d,w.e,w.gc4g(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
B.aw5.prototype={
U(){return new B.b7u(null,null)}}
B.b7u.prototype={
gavN(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.U,null,1,null,v)
w.cH(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
q(){this.gavN().q()
this.brn()},
B(d){var w=null,v=this.a.c
return C.aE(w,C.hp(new C.a7(42,42,C.c6(this.gavN(),new B.czF(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
B.b7t.prototype={
a5(d,e){var w,v,u,t=null,s=e.eh(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.X()
w=C.M()
w.r=A.b6.j(0.25+0.15*o).gp(0)
w.z=G.mu
d.ah(s,r+2+o*2,w)
w=C.M()
w.saq(D.eax.av(0,C.bT(s,r)))
d.ah(s,r,w)
v=C.M()
v.b=A.ae
v.c=2.2
v.saq(new C.fS(A.A,0,6.283185307179586,A.x,D.cKt,t,new C.mh(p)).av(0,C.bT(s,r)))
d.ah(s,r,v)
p=new B.czE(d)
p.$3(s.ad(0,A.rn),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.e0G),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.e2w),2.6,0.5+0.5*Math.cos(q))
u=C.i1(t,t,t,t,D.eSW,A.a4,A.cc,t,A.eh,A.ca)
u.eI()
u.a5(d,s.ad(0,new C.u(-u.b.c/2,5)))},
ar(d){return d.b!==this.b}}
B.awo.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.awp.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bq6()}}
B.aIm.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvp.prototype={}
B.fJ.prototype={}
B.IP.prototype={
a4(){return"ScreenStyle."+this.b}}
B.m1.prototype={}
B.TZ.prototype={
U(){return new B.bhV(null,null)}}
B.bhV.prototype={
ga8m(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,A.nP,null,1,null,v)
w.cq(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
q(){this.ga8m().q()
this.btd()},
gRe(){var w=this.ga8m().y
w=w==null?null:A.o.an(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.lS.h(0,this.a.c)
if(v==null)v=D.aLu
return C.c8(w,R.KP,C.bn(!0,new C.an(A.W,w,A.aa,A.r,C.a([C.av(v.b===D.z8?this.bFl(v):this.cgF(v),w,w,w),C.ao(w,C.aH(w,w,w,w,A.mq,w,w,w,new B.dLI(d),w,w,w,C.nw(w,A.aX,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.eUx,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c4j(d){var w
A:{if(D.I7===d){w=0.46153846153846156
break A}if(D.un===d){w=0.45
break A}if(D.w0===d){w=0.9259259259259258
break A}if(D.RV===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cgF(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.I7
A:{if(D.I7===p){w=44
break A}if(D.un===p){w=30
break A}if(D.w0===p){w=22
break A}if(D.RV===p){w=26
break A}w=14
break A}v=C.c6(this.ga8m(),new B.dLH(this,w,d,o),q)
if(p===D.a5u)v=new C.D1(D.buW,v,q)
p=this.c4j(p)
u=o?4:5
t=d.c
s=C.aq(t,A.c,o?0.25:0.08)
s.toString
r=C.aq(t,A.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.m(w)
s=C.a([new C.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new C.fG(p,C.p(q,C.p(q,v,A.f,q,q,new C.o(A.w,q,q,C.m(w-3),q,q,A.n),q,q,q,q,A2.Fh,q,q,q),A.f,q,q,new C.o(q,q,q,t,s,new C.a8(A.ax,A.aC,A.x,r,q,q),A.n),q,q,q,D.boG,new C.Q(u,u,u,u),q,q,q),q)},
b4A(d){var w,v,u,t=null,s=new C.S(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bu(this.gRe()*0.4),0,100),q=d.b===D.I7,p=q?34:20,o=q?28:18,n=C.a([C.d(A.a.aT(A.o.u(C.di(s)),2,"0")+":"+A.a.aT(A.o.u(C.fY(s)),2,"0"),t,t,t,t,t,t,A.rD,t,t,t),A.b4],x.p)
for(w=0;w<4;++w){v=new C.aW(1,1)
n.push(C.p(t,t,A.f,t,t,new C.o(A.c,t,t,new C.bq(v,v,v,v),t,t,A.n),t,4+w*2,t,D.buE,t,t,t,3))}n.push(A.d8)
n.push(D.ffz)
n.push(A.bp)
v=C.I(A.ad,A.q,1)
u=C.m(4)
n.push(C.p(t,new C.bH(A.a3,t,t,C.Dt(A.A,C.p(t,t,A.f,t,t,new C.o(A.b7,t,t,C.m(2),t,t,A.n),t,t,t,A2.Fh,t,t,t,t),t,r/100),t),A.f,t,t,new C.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.q9)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.f70,t,t,t))
return new C.C(new C.Q(p,12,o,2),C.A(n,A.m,t,A.e,A.j,0,t,t),t)},
atL(d,e,f){var w,v=null,u=d.d,t=C.aq(u,A.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.m(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new C.o(v,v,v,u,D.d5P,new C.a8(A.ax,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,C.a([A.at,C.d(d.a,v,1,A.a2,v,v,v,D.eYW,v,v,v)],w))
return C.aE(v,C.v(t,A.m,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.dLD(this,d),v,v,v,v,v,v,!1,A.a8)},
bW8(d,e){return this.atL(d,e,!0)},
bVS(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.RV||n===D.w0,l=d.d,k=C.aq(l,A.w,0.55)
k.toString
l=C.aq(l,A.kF,0.5)
l.toString
l=C.a([k,A.dv,l],x.O)
k=p.b4A(d)
w=m?190:138
v=C.m(24)
u=C.I(A.b2,A.q,1)
w=C.aE(o,C.p(o,C.bw(C.m(23),C.b3(o,o,o,new B.adI(0,p.gRe(),o),A.f0),A.aq),A.f,o,o,new C.o(o,o,u,v,o,o,A.n),o,w,o,A.hJ,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.dLB(p),o,o,o,o,o,o,!1,A.a8)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<8;++s){r=F.k_[s]
t.push(new C.cr(A.A,o,o,p.bW8(r,m?58:54),o))}k=C.a([k,A.an,w,A.ac,C.D(C.lW(0.92,t,v,8,12,A8.vc,o,!1),1)],u)
if(n!==D.a5u){n=A.c.j(0.16)
w=C.m(28)
u=C.a([],u)
for(v=C.dd(F.k_,0,C.dJ(4,"count",x.S),x.gD),t=v.$ti,v=new C.bR(v,v.gM(0),t.k("bR<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.atL(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.A(u,A.m,o,A.pW,A.j,0,o,o),A.f,o,o,new C.o(n,o,o,w,o,o,A.n),o,o,o,D.bpv,T.ahM,o,o,o))}return C.p(o,C.v(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new C.o(o,o,o,o,o,new C.a8(A.ax,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
byQ(d,e){var w=null
return C.p(w,C.v(C.a([this.b4A(d),C.D(C.b3(w,w,w,new B.adI(e,this.gRe(),w),A.f0),1),C.aE(w,C.p(w,C.av(C.d(F.k_[e].a,w,w,w,w,w,w,A_.Ix,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dLw(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bFl(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.aq(w,A.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.m(r?26:14)
u=C.a([new C.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new C.fG(1.5384615384615383,C.p(t,C.c6(this.ga8m(),new B.dLz(this,r,d),t),A.f,t,t,new C.o(t,t,t,v,u,new C.a8(A.ax,A.aC,A.x,w,t,t),A.n),t,t,t,D.buf,new C.Q(8,8,8,s),t,t,t),t)}}
B.btu.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.X()
w=C.M()
v=this.c
u=C.aq(v,A.w,0.6)
u.toString
t=C.aq(v,A.kF,0.4)
t.toString
w.saq(new C.a8(A.ax,A.aC,A.x,C.a([u,A.dv,t],x.O),null,null).av(0,new C.a9(0,0,n,m)))
d.aX(new C.a9(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=v.j(0.1).gp(0)
r.z=D.djL
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
ar(d){return!0}}
B.adI.prototype={
a5(d,e){return E.bBE(d,e,this.b,this.c)},
ar(d){return!0}}
B.aK8.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.aV7.prototype={}
B.UN.prototype={
U(){return new B.biu(C.T(x.S,x.N),A.au,C.a([],x.U),$,A.bw,0,C.a([],x.X),null,null)}}
B.biu.prototype={
gvc(){var w=this.f
return w===$?this.f=B.fVe(0):w},
a_(){this.a1()
this.la()
B.z7("laser_maze").bz(new B.e6g(this),x.P)},
lr(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.y(u.a,t)
if(t>0.8)A.d.cA(w,v)}this.m(new B.e6h())},
ad4(d){var w=this
w.m(new B.e66(w,d))
B.vH("laser_maze",C.F(["best",w.e,"level",w.d],x.N,x.z))},
c4z(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.geg()/7
u=v*7
t=(w.a-u)/2
s=A.k.D((w.b-u)/2,8,300)
r=A.k.bu((d.a-t)/v)
q=A.k.bu((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.gvc().b.t(0,p)||p===o.gvc().e||o.gvc().d.ai(0,p))return
o.m(new B.e67(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cp(new B.e6a(t,B.hjp(t.gvc(),t.r))),q=x.p,p=C.a([new B.dz("Clear mirrors",!1,new B.e6b(t),A.jY,A.aM,s),new B.dz("Skip",!1,new B.e6c(t),D.bD3,A.aT,s)],q)
if(t.d>0)p.push(new B.dz("Back",!1,new B.e6d(t),D.bD4,A.aT,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new B.dz(""+u,v===t.d,new B.e6e(t,v),s,A.ay,s))}return B.jF(A.ay,A.ha,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.v(C.a([new B.eN(p,s,s),new B.eN(w,"LEVEL",s)],q),A.m,s,A.e,A.Q,0,A.p))}}
B.bfu.prototype={
a5(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.geg()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=A.k.D((b0.b-a4)/2,8,300),a7=new B.deV(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.bz(new C.a9(a5,a6,a8,a4),A.kq)
v=$.X()
u=C.M()
u.r=M.nI.gp(0)
a9.aD(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.dp.gp(0)
q=r.H()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.r=A.dp.gp(0)
q=s.H()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.ec(a8,a8.r,C.a3(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.bz(C.co(p,u,u),A.he)
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(D.bV7.av(0,C.co(p,a3,a3)))
q=o.H()
w.drawRRect(C.eq(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aP(v.r,A.ap,a2,a2,u)
n.E(new C.b5(a7.$1(A.d.gL(a8)).a,a7.$1(A.d.gL(a8)).b))
for(a8=C.dd(a8,1,a2,C.U(a8).c),v=a8.$ti,a8=new C.bR(a8,a8.gM(0),v.k("bR<ak.E>")),v=v.k("ak.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.ap(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bx(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.X()
a8=C.M()
a8.b=A.ae
a8.c=14
a8.e=A.fz
a8.r=A.ay.j(0.28+0.08*Math.sin(a1.f*12)).gp(0)
a8.z=A.ll
a9.aP(n,a8)
a8=C.M()
a8.b=A.ae
a8.c=4
a8.e=A.fz
a8.r=D.ad2.gp(0)
a9.aP(n,a8)
a8=C.M()
a8.b=A.ae
a8.c=1.6
a8.e=A.fz
a8.r=A.c.gp(0)
a9.aP(n,a8)}for(a8=a4.c,a8=C.ec(a8,a8.r,C.a3(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.aM.j(0.5).gp(0)
m.z=A.C3
q=m.H()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=(l?A.aM:A.bv).gp(0)
q=m.H()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?A.c:A.az
i=new C.kp(new C.ep("\u2605",a2,a2,A.cO,a2,a2,a2,a2,a2,a2,new C.G(!0,j,a2,a2,a2,a2,v,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a4,A.cc,new C.jo(1),a2,a2,a2,a2,A.ca,a2)
i.eI()
j=i.b
h=j.c
j=j.a.c
i.a5(a9,new C.u(m-h/2,k-j.gbd(j)/2))}g=new B.deY(a7,a3,a9)
a1.c.bH(0,new B.deW(g))
a4.d.bH(0,new B.deX(g))
f=a7.$1(a4.e)
a4=C.bz(C.co(f,o,a3*0.8),A.he)
a8=C.M()
a8.r=A.ay.gp(0)
a9.aD(a4,a8)
v=f.ad(0,new C.u(v,0))
a8=C.M()
a8.r=A.c.gp(0)
a9.ah(v,5,a8)
for(a4=a1.r,a8=a4.length,e=0;e<a4.length;a4.length===a8||(0,C.L)(a4),++e){d=a4[e]
a0=d.b/0.8
v=d.a
u=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
s=1-a0
u.c=4*s
u.r=A.aM.j(s).gp(0)
q=u.H()
w.drawCircle(v.a,v.b,a3*(0.3+a0),q)
q.delete()}},
ar(d){return!0}}
B.UP.prototype={
U(){var w=x.n
return new B.aCD(A.cI,C.a([1,0.5,0],w),C.a([0,0,0],w),$,A.bw,0,C.a([],x.X),null,null)}}
B.aCD.prototype={
a_(){this.a1()
this.la()
B.z7("light_mixer").bz(new B.e6z(this),x.P)},
lr(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aXE()
w.m(new B.e6A())},
avR(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aB(5)/4)
u.e=t
if(A.d.da(t,new B.e6k()))u.e[w.aB(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aXE(){var w,v,u=this
if(u.z!=="play")return
w=A.k.V(A.k.D(1-B.heQ(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
B.vK(v,A.o.an(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
B.vH("light_mixer",C.F(["best",v],x.N,x.z))}}else u.z="result"},
gcvH(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.F(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cMn[A.o.G(A.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cp(new B.e6t(v,B.heQ(v.e,t))),r=t[0]
r=B.hy(A.ay,""+A.k.V(r*100)+"%","Red",1,0,new B.e6u(v),r)
w=t[1]
w=B.hy(A.bo,""+A.k.V(w*100)+"%","Green",1,0,new B.e6v(v),w)
t=t[2]
return B.jF(A.b8,A.ha,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.v(C.a([r,w,B.hy(A.d6,""+A.k.V(t*100)+"%","Blue",1,0,new B.e6w(v),t),new C.bH(A.a7,u,u,new B.fg(A.hy,"Lock it in",new B.e6x(v),A.b7,u),u)],x.p),A.m,u,A.e,A.Q,0,A.p))}}
B.bfJ.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.bz(new C.a9(0,0,n,m),A.q6)
$.X()
w=C.M()
w.r=A.w.gp(0)
d.aD(l,w)
w=d.a
J.bA(w.save())
w.clipRRect(C.eq(C.bz(new C.a9(0,0,n,m),A.q6)),$.pl(),!0)
v=e.geg()*0.3
u=e.eh(A.J)
l=-v*0.55
t=v*0.45
s=[u.ad(0,new C.u(0,l)),u.ad(0,new C.u(l,t)),u.ad(0,new C.u(v*0.55,t))]
r=[A.E0,I.ac7,I.acw]
d.l8(new C.a9(0,0,n,m),C.M())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.a=A.nt
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.bz(new C.a9(0,0,n,m),A.q6)
m=C.M()
m.b=A.ae
m.c=2
m.r=A.b2.gp(0)
d.aD(n,m)},
ar(d){return!0}}
B.aKA.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvu.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btH()}}
B.aKB.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvv.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btI()}}
B.bsj.prototype={}
B.a7v.prototype={
B(d){var w=null
return C.c8(C.eF(w,w,w,!0,!0,D.adf,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.ami,w,w,w,new B.cdK(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fuU,w,w,w,1,w,!0),D.adf,C.cB(C.a([D.e3M,C.cp(new B.cdL())],x.p),w,D.bqv,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.VG.prototype={
U(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new B.aDu(w,new C.ar(A.as,$.aw()),$,A.bw,0,C.a([],x.X),null,null)}}
B.aDu.prototype={
a_(){this.a1()
this.la()},
b2B(d){var w=this.d.length
return A.o.G(A.k.bu(A.k.G(A.k.G(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
lr(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b2B(v.f)
if(w!==v.x){v.x=w
B.ld("bell",24+A.o.G(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new B.eFs(v))
B.Bi("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c5w(){if(this.d.length<2)return
this.m(new B.eFo(this))},
aY_(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new B.eFn(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc5v(),p=s.d,o=C.D(C.aE(r,C.b3(r,r,r,new B.btG(p,s.f,r),A.f0),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.v(C.a([o,new C.a7(r,40,C.av(C.d(n,r,r,r,r,r,r,D.f5b,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.avQ[A.o.G(v,8)].j(0.9)
t=new C.aW(20,20)
o.push(C.aE(r,C.p(r,new C.x(p[v],r,D.f4s,r,r,r,r,r,r,r,r,r),A.f,r,r,new C.o(u,r,r,new C.bq(t,t,t,t),r,r,A.n),r,r,r,A.fx,A.h6,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new B.eFq(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8))}p=A.c.j(0.07)
return B.jF(A.aM,A.ha,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.v(C.a([new B.eN(o,r,r),C.A(C.a([C.D(C.aM(r,A.T,!1,r,!0,A.r,r,C.aN(),s.e,r,r,r,r,r,2,C.br(r,new C.b4(4,C.m(14),A.Y),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kw,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ai,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new B.eFr(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dl,!0,A.a4,r,A.am,r,r,r,r),1),A.ab,new B.fg(A.hx,"Add",s.gc5t(s),A.c,r),A.bp,new B.fg(A.mk,"Spin",q,A.b7,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
B.btG.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.X()
w=C.M()
w.r=D.b8i.gp(0)
a1.ah(d,f,w)
w=C.M()
w.b=A.ae
w.c=3
w.r=A.aM.gp(0)
a1.ah(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=C.bT(d,a0)
n=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.avQ[A.o.G(q,8)].gp(0)
m=n.H()
n=p*57.29577951308232
f.drawArc.apply(f,[C.c1(o),n,s,!0,m])
m.delete()
o=C.bT(d,a0)
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.b=A.ae
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.H()
f.drawArc.apply(f,[C.c1(o),n,s,!0,m])
m.delete()
J.bA(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.ap(o,0,11)+"\u2026"
k=new C.kp(new C.ep(o,i,i,A.cO,i,i,i,i,i,i,D.eTJ),A.a4,A.cc,new C.jo(1),i,i,i,i,A.ca,i)
k.eI()
o=k.b
n=o.c
o=o.a.c
k.a5(a1,new C.u(a0-n-16,-o.gbd(o)/2))
f.restore()}f=C.M()
f.r=D.acU.gp(0)
a1.ah(d,20,f)
f=C.M()
f.b=A.ae
f.c=3
f.r=A.aM.gp(0)
a1.ah(d,20,f)
j=new C.aP(h.r,A.ap,i,i,C.a([],x.v))
e-=a0
j.E(new C.b5(g,e+26))
e-=10
j.E(new C.ap(g-14,e))
j.E(new C.ap(g+14,e))
j.E(new C.bF())
e=C.M()
e.r=A.c.gp(0)
a1.aP(j,e)
e=C.M()
e.b=A.ae
e.c=2
e.r=A.aX.gp(0)
a1.aP(j,e)},
ar(d){return!0}}
B.Uo.prototype={
U(){return new B.bi3($,A.bw,0,C.a([],x.X),null,null)}}
B.bi3.prototype={
a_(){this.a1()
this.la()},
lr(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
B.Bi("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a4h(900,new B.dS_())}w.m(new B.dS0())},
aY1(d){return this.m(new B.dRV(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aT(A.o.u(A.k.an(m,60)),2,"0")
v=A.a.aT(A.o.u(A.o.G(A.k.dw(m),60)),2,"0")
m=C.b3(n,n,n,new B.box(l,A.ci,n),A.aMI)
u=C.d(w+":"+v,n,n,n,n,n,n,D.eXW,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a7(280,280,new C.an(A.A,n,A.aa,A.r,C.a([m,C.v(C.a([u,C.d(t,n,n,n,n,n,n,D.eX0,n,n,n),A.at,C.d("Sessions done: "+o.r,n,n,n,n,n,n,A.CU,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.d36[r]
u.push(new B.dz(""+q+" min",o.d===q,new B.dRX(o,q),n,A.ci,n))}m=o.f
p=m?A1.xX:A.iT
m=m?"Pause":"Start"
return B.jF(A.ci,A.ha,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.v(C.a([new B.eN(u,n,n),new B.eN(C.a([new B.fg(p,m,new B.dRY(o),A.b7,n),new B.fg(A.jY,"Reset",new B.dRZ(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
B.box.prototype={
a5(d,e){var w,v,u,t,s=e.eh(A.J),r=e.a/2-14
$.X()
w=C.M()
w.b=A.ae
w.c=16
w.r=A.c.j(0.08).gp(0)
d.ah(s,r,w)
w=C.bT(s,r)
v=C.M()
v.b=A.ae
v.c=16
v.d=A.bO
u=this.c
t=C.aq(u,A.c,0.4)
t.toString
v.saq(new C.fS(A.A,-1.5707963267948966,4.71238898038469,A.x,C.a([u,t,u],x.O),null,null).av(0,C.bT(s,r)))
d.f4(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
ar(d){return d.b!==this.b}}
B.TB.prototype={
U(){return new B.bhG($,A.bw,0,C.a([],x.X),null,null)}}
B.bhG.prototype={
a_(){this.a1()
this.la()},
lr(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Qq.h(0,p.d)
w.toString
v=A.d.fo(w,new B.dCQ())
u=A.k.G(p.f,v)
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
B.ld("flute",D.bVJ[t]+5,1400,0.35)}p.m(new B.dCR())},
gc5z(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.JF("Press Start",0.5)
w=D.Qq.h(0,this.d)
w.toString
v=A.d.fo(w,new B.dCL())
u=A.k.G(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.JF("Breathe in",0.5+0.5*A.dB.aw(0,p))
case 1:return new C.JF("Hold",1)
case 2:return new C.JF("Breathe out",1-0.5*A.dB.aw(0,p))
default:return new C.JF("Hold",0.5)}}}return new C.JF("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc5z(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hv.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,A.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ac(0,A.G,A.hv.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,A.D6,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,A.kw,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a7(300,340,new C.an(A.A,q,A.aa,A.r,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.Qq.ged(D.Qq));w.C();){v=w.gS(w)
o.push(new B.dz(v,r.d===v,new B.dCO(r,v),q,A.hv,q))}w=r.e
v=w?A.a_A:A.iT
w=w?"Stop":"Start"
o.push(new B.fg(v,w,new B.dCP(r),A.b7,q))
return B.jF(A.hv,A.ha,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new B.eN(o,q,q))}}
B.aGR.prototype={}
B.Uf.prototype={
U(){return new B.bhY(new C.cs(null,x.A),C.a([],x.au),A.aB,A.c)}}
B.bhY.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.mr,s,s,s,new B.dPg(t,d),s,s,s,s,"Share",s)],r),p=C.bw(C.m(18),new C.et(C.aE(s,C.b3(s,s,s,new B.bk_(t.e,t.x,s),A.f0),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dPh(t),new B.dPi(t),s,s,s,s,s,s,s,s,s,new B.dPj(t),s,s,s,s,!1,A.a8),t.d),A.aq),o=C.a([],r)
for(w=0;w<9;++w){v=D.cLL[w]
u=!t.w&&t.f.A(0,v)
o.push(new B.ER(v,u,new B.dPk(t,v),!1,s))}u=t.r
return B.jF(A.bA,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.C(A.bS,p,s),"DRAW PAD",C.v(C.a([new B.eN(o,s,s),B.hy(A.bA,""+A.k.V(u),"Brush",30,2,new B.dPl(t),u),new B.eN(C.a([new B.dz("Eraser",t.w,new B.dPm(t),A.FC,A.bA,s),new B.fg(A.r3,"Undo",new B.dPn(t),A.c,s),new B.fg(A.e4,"Clear",new B.dPo(t),A.c,s),new B.fg(A.MX,"Paper",new B.dPp(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
B.bk_.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.X()
w=C.M()
w.r=this.c.gp(0)
d.aX(new C.a9(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=$.X()
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bO
p.e=A.fz
p.b=A.ae
m=r.c
if(m.length===1){q=A.d.gL(m)
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=o.gp(o)
l=m.H()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=C.a([],t)
k=new C.aP(q.r,A.ap,null,null,o)
o.push(new C.b5(A.d.gL(m).a,A.d.gL(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new C.cS(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bx(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new C.ap(A.d.gal(m).a,A.d.gal(m).b)
o.push(q)
o=k.f
if(o!=null)q.bx(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.H()
q=k.e
u.drawPath((q==null?k.e=new C.cF(k.gbI().a.snapshot()):q).a,l)
l.delete()}}},
ar(d){return!0}}
B.V0.prototype={
U(){var w=x.S
return new B.aCN(C.aX(w),C.aX(w))}}
B.aCN.prototype={
a_(){this.a1()
this.ar4()},
ar4(){var w,v,u=this,t=x.N,s=C.bl(D.d7w,!0,t)
A.d.Cp(s)
w=x.S
v=C.U(s).c
t=C.B(C.dd(s,0,C.dJ(u.d,"count",w),v),t)
A.d.v(t,C.dd(s,0,C.dJ(u.d,"count",w),v))
A.d.Cp(t)
u.e=t
u.f.a9(0)
u.r.a9(0)
u.w=0
u.x=!1},
c5u(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
B.ld("bell",12+A.o.G(d,9),150,0.35)
s.m(new B.ebW(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gL(0)
u=w.gal(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bN(A.n_,new B.ebX(s,v,u),t)
else{s.x=!0
C.bN(Ad.EV,new B.ebY(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,A.a6Z,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.an(p,2)+" / "+o
o=x.p
p=C.v(C.a([new C.C(A.xn,C.A(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?A.aM:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.hM,A.j,0,q,q),q),C.D(C.id(!0,q,q,A.y,new C.hK(v,8,8,1,q),new B.ec1(r),r.e.length,A.bk,q,A.ah,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cNc[t]
o.push(new B.dz(s.b,r.d===s.a,new B.ec2(r,s),q,A.aT,q))}o.push(new B.fg(D.bD1,"New game",new B.ec3(r),A.b7,q))
return B.jF(A.aT,A.ha,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new B.eN(o,q,q))}}
B.Ve.prototype={
U(){return new B.aD8(C.a([],x.t))}}
B.aD8.prototype={
c5y(d){A.d.a9(this.d)
this.w=!0
this.aY0()},
aY0(){this.d.push(A.cI.aB(4))
this.e=0
this.Zb()},
Zb(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zb=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new B.ems(t))
s=x.H
w=3
return C.b(C.bN(A.lG,null,s),$async$Zb)
case 3:r=t.d,q=C.bl(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aRo(n)
w=7
return C.b(C.bN(new C.b9(1000*Math.max(280,600-r.length*18)),null,s),$async$Zb)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new B.emt(t))
case 1:return C.h(u,v)}})
return C.i($async$Zb,v)},
aRo(d){this.m(new B.emq(this,d))
B.ld("marimba",D.anT[d]+5,450,0.55)
C.bN(A.ET,new B.emr(this),x.H)},
c5A(d){var w,v,u=this
if(!u.w||u.r)return
u.aRo(d)
w=u.d
v=u.e
if(w[v]!==d){E.dF(90,"",600,0,0.5,"saw")
u.m(new B.emu(u))
return}++v
u.e=v
if(v===w.length){u.m(new B.emv(u))
C.bN(A.i9,new B.emw(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,L.T6,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.f5z,A.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.auM[v]
u=u.j(q.f===v?1:0.35)
t=new C.aW(28,28)
s=q.f===v?C.a([new C.ac(0,A.G,D.auM[v].j(0.8),A.J,30)],w):p
r=new C.aA(A.c.j(q.f===v?0.9:0.15),2,A.q,-1)
l.push(C.aE(p,C.dh(p,p,p,p,A.bc,new C.o(u,p,new C.bP(r,r,r,r),new C.bq(t,t,t,t),s,p,A.n),A.ja,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.emx(q,v),p,p,p,p,p,p,!1,A.a8))}o=C.av(new C.C(A.a9,C.v(C.a([o,A.an,n,A.d5,new C.fG(1,C.lW(1,l,2,12,12,p,A.dQ,!1),p)],m),A.m,p,A.bb,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return B.jF(A.co,A.ha,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new B.eN(C.a([new B.fg(A.iT,n,q.gc5x(q),A.b7,p)],m),p,p))}}
B.Vz.prototype={
U(){return new B.bjb(new C.ar(A.as,$.aw()))}}
B.bjb.prototype={
auA(d){return C.oA(A.k.aa(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new B.eAK(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d5(C.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new B.eAT()
l=C.aM(m,A.T,!1,m,!0,A.r,m,C.aN(),l,m,m,m,m,m,2,C.br(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.m(16),Ab.ww),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.m(16),D.aWB),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.kZ,"Bill amount",!0,!0,!1,m,m,m,m,D.f38,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,A.dU,m,m,m,1,m,m,!1,"\u2022",m,new B.eAP(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aO9,!0,A.a4,m,A.am,m,m,m,m)
k=A.b7.j(0.1)
s=C.m(20)
r=C.I(A.b7.j(0.35),A.q,1)
q=x.p
s=C.cB(C.a([l,A.bx,C.p(m,C.v(C.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.auA(w)),t.$2("Total","$"+n.auA(v)),R.Xb,t.$3$big("Each of "+n.f+" pays","$"+n.auA(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bV,m,m,m)],q),m,A.fy,m,m,A.ah,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.cya[p]
r.push(new B.dz(""+o+"%",A.k.V(n.e)===o,new B.eAQ(n,o),m,A.b7,m))}l=n.f
return B.jF(A.b7,A.ha,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.v(C.a([new B.eN(r,"TIP",m),B.hy(A.aT,""+l,"People",20,1,new B.eAR(n),l),new B.eN(C.a([new B.dz("Round up",n.r,new B.eAS(n),m,A.aM,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
B.UZ.prototype={
U(){var w=C.a([3,5],x.t)
return new B.biF(w,A.cI,$,A.bw,0,C.a([],x.X),null,null)}}
B.biF.prototype={
a_(){this.a1()
this.la()},
lr(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.G(A.k.bu(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aB(6)+1)
u.f=t
B.a7u("snare",0.5)}u.m(new B.eaB())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h9()
u.w=t
u.x=t?0:3.141592653589793
B.ld("bell",24,400,0.5)}u.m(new B.eaC())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new B.bbG(v,o.r>0,n))}u=C.aE(n,C.av(C.bY(A.fQ,m,A.br,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eau(o),n,n,n,n,n,n,!1,A.a8)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(A.d9,A.q,6)
s=C.a([new C.ac(0,A.G,A.aM.j(0.4),A.J,30)],x.V)
u=C.aE(n,C.av(C.eb(A.A,C.p(A.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.f2o,n,n,n),A.f,n,n,new C.o(n,n,v,n,s,D.eaB,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eav(o),n,n,n,n,n,n,!1,A.a8)}else{m=o.as
u=C.aE(n,C.av(C.v(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.eTd,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kw,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eaw(o),n,n,n,n,n,n,!1,A.a8)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.d0D[r]
v.push(new B.dz(q.b,o.d===q.a,new B.eax(o,q),q.c,A.by,n))}v=C.a([new B.eN(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(B.hy(A.by,""+s,"Dice",4,1,new B.eay(o),s))}if(o.d==="num"){s=o.z
s=B.hy(A.by,""+s,"From",100,1,new B.eaz(o),s)
p=o.Q
A.d.v(v,C.a([s,B.hy(A.by,""+p,"To",1000,2,new B.eaA(o),p)],m))}return B.jF(A.by,A.ha,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.v(v,A.m,n,A.e,A.Q,0,A.p))}}
B.bbG.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cI.aj()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.ac(0,A.G,A.w.j(0.4),A.cw,14)],x.V)
t=C.a([],x.p)
for(s=D.dit.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bH(s[q],p,p,C.p(p,p,A.f,p,p,K.aa1,p,18,p,p,p,p,p,18),p))
return C.eC(A.A,w,C.p(p,new C.an(A.W,p,A.aa,A.r,t,p),A.f,p,p,new C.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bC,p,p,100),p)}}
B.aJW.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvl.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bt0()}}
B.aKe.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvq.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btk()}}
B.aKJ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvA.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btQ()}}
B.aLc.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvM.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.buj()}}
B.b5i.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aCA.h(0,t)
$.aqF=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,S.nc,u,u,u,new B.cqx(d),u,u,u,u,u,u),C.D(C.d(t,u,1,A.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.W(A.N0,s,u,u,u,22),u,u,u,new B.cqy(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.C(D.btw,C.A(t,A.m,u,A.e,A.j,0,u,u),u),C.D(v.f,1)],w)
w.push(C.p(u,v.r,A.f,u,u,new C.o(D.Ei,u,new C.bP(new C.aA(A.c.j(0.08),1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,A.EX,u,u,1/0))
return C.c8(u,A.bX,C.bn(!0,C.v(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),u,!1,!1,u,u)}}
B.dz.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=C.I(o,A.q,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)A.d.v(v,C.a([C.W(u,q?t.r:A.aR,s,s,s,16),A.eb],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.C(F.tt,C.aE(s,C.dh(s,C.A(v,A.m,s,A.e,A.Q,0,s,s),s,s,A.bc,new C.o(p,s,o,r,s,s,A.n),A.eE,s,s,s,A.h6,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.cqt(t),s,s,s,s,s,s,!1,A.a8),s)}}
B.eN.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a7(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.D(C.cd(C.A(this.c,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO),1))
return new C.C(A.cH,C.A(v,A.m,w,A.e,A.j,0,w,w),w)}}
B.auv.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,A.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.au4(d).cG7(q,A.bF,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.D(C.a9f(C.kU(s,s,s,u,v,t.e,A.k.D(w,v,u)),q),1)
u=t.x
return new C.a7(s,34,C.A(C.a([new C.a7(78,s,r,s),q,new C.a7(38,s,C.d(u==null?A.k.aa(w,1):u,s,s,s,s,s,s,A_.Ix,A.dL,s,s),s)],x.p),A.m,s,A.e,A.j,0,s,s),s)}}
B.fg.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.C(F.tt,C.aG(!1,A.a1,!0,C.m(12),C.aL(!1,C.m(12),!0,new C.C(Ak.XE,C.A(C.a([C.W(w.c,u,v,v,v,17),A.eb,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new B.cqs(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ag),v)}}
B.ER.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.eRI:u
w=t?A.c:A.b2
w=C.I(w,A.q,t?2.5:1)
return C.aE(u,C.dh(u,u,u,u,A.bc,new C.o(p,u,w,u,t?C.a([new C.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a6),A.hX,u,r,D.afT,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.cqz(v),u,u,u,u,u,u,!1,A.a8)}}
B.my.prototype={
a4h(d,e){var w=C.dg()
w.seC(C.cM(C.dC(0,0,0,d,0,0),new B.cqu(this,w,e)))
this.fk$.push(w.bf())},
la(){var w=this,v=w.qi(new B.cqw(w))
v.j1(0)
w.fj$!==$&&C.aO()
w.fj$=v}}
B.aad.prototype={
bwq(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.L)(w),++q)for(p=A.d.gae(w[q]);p.C();){o=p.gS(0)
n=J.a5(o)
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
for(m=0,q=0;q<w.length;w.length===p||(0,C.L)(w),++q){for(v=A.d.gae(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gS(0)
n=J.a5(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aO()
g.ax=m
w=g.bzD()
g.ay!==$&&C.aO()
g.ay=w},
bzD(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
Fc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
for(k=l.y,w=k.length,v=0;v<k.length;k.length===w||(0,C.L)(k),++v){u=k[v]
for(t=u.length-1,s=!1,r=0;r<u.length;q=r+1,t=r,r=q){p=J.q(u[r],0)
o=J.q(u[r],1)
n=J.q(u[t],0)
m=J.q(u[t],1)
if(o>f!==m>f&&e<(n-p)*(f-o)/(m-o)+p)s=!s}if(s)return!0}return!1}}
B.aae.prototype={
cC5(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
if(r.Fc(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
B.uR.prototype={}
B.OA.prototype={}
B.xI.prototype={}
B.Oz.prototype={
fg(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.anO[w.aB(7)]
w=w.h9()?0:12
u=A.o.G(t.c++,3)===0?"flute":"bell"
B.ld(u,v+w-12,2200,0.1)}}
B.Uv.prototype={
U(){var w=$.aw()
return new B.aC9(new C.cs(null,x.A),new C.ar(A.as,w),new B.Oz(A.cI),D.d2z,A.au,D.a22,$,A.bw,0,C.a([],x.X),null,null)}}
B.aC9.prototype={
a_(){var w,v=this
v.a1()
v.la()
v.a.toString
w=$.h7S
if(w==null)w=$.h7S=B.ct3()
w.bz(new B.dUI(v),x.P)},
q(){var w=this.e
w.T$=$.aw()
w.P$=0
this.bts()},
cpZ(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.L)(p),++n)q.push(new B.dUa(p[n]).$0())
w.push(q)}this.w=w},
gVr(){var w=this.fy
return w.A(0,A.au)?100:Math.min(w.a,w.b)*0.43},
asf(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
awk(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.asf(d.x,d.w,105/Math.max(w,3))
C.eS()
B.ld("bell",(A.d.cJ(D.a1E,d.c)+1)*3+12,900,0.45)
E.dF(300,"",280,1.4,0.15,"tri")},
lr(d){var w,v,u,t,s,r,q,p=this
p.f.fg(0,d,p.db)
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
c6e(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.au))return null
w=n.fy
v=n.gVr()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gVr()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cC5((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c6d(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new B.dU8(w))
return}w.m(new B.dU9(w,v,A.a.i(d).toLowerCase()))},
bMh(){var w=null,v=this.c
v.toString
C.ca(w,w,!0,w,new B.dU6(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bFG,n,n,n,o.gbMg(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.mr,n,n,n,new B.dUt(o,d),n,n,n,n,"Share",n)],l),j=C.cp(new B.dUu(o,m)),i=A.c.j(0.06)
i=C.a([C.aM(n,A.T,!1,n,!0,A.r,n,C.aN(),o.e,n,n,n,n,n,2,C.br(n,new C.b4(4,C.m(14),A.Y),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.D1,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bNH,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc6c(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.iH,!0,A.a4,n,A.am,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
w.push(new B.dz(s.a,!1,new B.dUv(o,s),A.na,A.aT,n))}i.push(new C.C(A.ia,new C.a7(n,38,C.cB(w,n,n,n,n,A.aO,!1),n),n))}i.push(A.an)
w=C.a([new B.dz("Whole Earth",!1,new B.dUz(o),A.hj,A.aT,n)],l)
for(v=D.aCz.gdK(D.aCz),v=v.gae(v);v.C();){u=v.gS(v)
w.push(new B.dz(u.a,!1,new B.dUA(o,u),n,A.aT,n))}w.push(new B.dz("Random",!1,new B.dUB(o),A.mk,A.aT,n))
i.push(new B.eN(w,"GO TO",n))
w=o.z
i.push(B.hy(A.aT,A.k.aa(w,1)+"x","Zoom",16,0.8,new B.dUC(o),w))
w=o.dy
i.push(B.hy(A.co,A.a.aT(A.o.u(A.k.bu(w)),2,"0")+":00","Time",24,0,new B.dUD(o),w))
w=o.fr
i.push(B.hy(A.b7,o.coM(),"Season",365,0,new B.dUE(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.lL:D.FT
i.push(new B.eN(C.a([new B.dz("Spin",w,new B.dUF(o),D.bAV,A.aT,n),new B.dz("Night",v,new B.dUG(o),A.vl,A.aT,n),new B.dz("Borders",u,new B.dUw(o),D.bAZ,A.aT,n),new B.dz("Names",r,new B.dUx(o),Z.N4,A.aT,n),new B.dz("Music",q,new B.dUy(o),p,A.aT,n)],l),n,n))
return B.jF(A.aT,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.v(i,A.m,n,A.e,A.Q,0,A.p))},
coM(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.avq[u])v=u
return A.ib[v]+" "+(A.k.bu(w-D.avq[v])+1)},
c6b(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.mM(1,A.o.G((A.d.cJ(D.a1E,t)+1)*47,360),0.55,1).iG()
r=new B.dU4()
q=C.m(20)
p=C.I(s.j(0.6),A.q,1)
o=x.p
n=C.A(C.a([C.p(j,j,A.f,j,j,new C.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ab,C.D(C.d(d.a,j,1,A.a2,j,j,j,A.ds,j,j,j),1),C.aH(j,j,j,j,A.Ga,j,j,j,new B.dU3(this),j,j,j,j,j,A.c8)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hp,j,j,j)
m=D.dhb.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.A(C.a([m,A.ab,r.$2("PEOPLE",l?B.fov(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",B.Gl(i)+" km\xb2")
if(l)m=(w<10?A.k.aa(w,1):B.Gl(w))+" per km\xb2"
else m="\u2014"
m=C.A(C.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.aa(u,3):A.k.aa(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.v(C.a([n,t,A.O,v,A.O,m,A.O,C.A(C.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+B.fov(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.F,j,A.e,A.Q,0,A.p),A.f,j,j,new C.o(D.Vl,j,p,q,j,j,A.n),j,j,j,j,D.agq,j,j,j)}}
B.bdV.prototype={
a5(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.X(),d7=C.M()
d7.r=D.Ad.gp(0)
d8.aX(new C.a9(0,0,0+d4,0+d5),d7)
w=new C.eJ()
w.dB(4)
for(d7=d8.a,v=0;v<90;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.25+w.aj()*0.5).gp(0)
q=r.H()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new C.u(d4,d5)
o=d2.f
u=C.M()
t=x.O
u.saq(new C.bS(A.A,0.5,A.x,d3,0,C.a([A.K,A.aT.j(0.35),A.K],t),D.cOI,d3).av(0,C.bT(p,o*1.1)))
d8.ah(p,o*1.05,u)
n=C.bT(p,o)
u=C.M()
u.saq(D.eaF.av(0,n))
d8.ah(p,o,u)
J.bA(d7.save())
u=x.v
d6=new C.aP(d6.r,A.ap,d3,d3,C.a([],u))
d6.E(new C.ke(n))
d8.qf(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=C.M()
g.b=A.ae
m=g.c=0.7
g.r=A.c.j(0.1).gp(0)
f=new B.daG(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cF(d.gbI().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.X()
a3=C.a([],u)
d=new C.aP(a2.r,A.ap,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bx(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cF(d.gbI().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cF(d.gbI().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.X()
a3=C.a([],u)
d=new C.aP(a2.r,A.ap,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bx(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cF(d.gbI().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.G((A.d.cJ(D.a1E,a7.c)+1)*47,360)
$.X()
b0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new H.mM(1,a9,a3,a8?1:0.62).iG().gp(0)
b1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
b1.b=A.ae
b1.c=a8?2.2:m
b1.e=A.fz
b1.r=(a8?A.c:A.w.j(0.55)).gp(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,C.L)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.X()
b7=C.a([],u)
b8=new C.aP(b6.r,A.ap,d3,d3,b7)
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
if(c8!=null)b6.bx(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new C.ap(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bx(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new C.bF()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bx(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cF(b8.gbI().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cF(b8.gbI().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.L)(a5),++b3){d=a5[b3]
$.X()
s=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
s.b=A.ae
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.re
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cF(d.gbI().a.snapshot()):s).a,q)
q.delete()}if(d2.z)for(u=d6.length,s=d2.r,r=!(s<1.8),s=14/s,b3=0;b3<d6.length;d6.length===u||(0,C.L)(d6),++b3){a7=d6[b3]
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
c9=B.hGE(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbd(b2)
c9.a5(d8,new C.u(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.D(k*c0+j*c1*c4,-1,1)
$.X()
u=C.M()
u.saq(new C.bS(A.A,0.5,A.x,d3,0,C.a([A.K,A.K,D.b69.j(0.78)],t),D.d2W,d3).av(0,C.bT(new C.u(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ah(p,o,u)}$.X()
d4=C.M()
d4.saq(new C.bS(A.A,0.5,A.x,d3,0,C.a([A.K,A.w.j(0.4)],t),D.deK,d3).av(0,n))
d8.ah(p,o,d4)
d7.restore()
d7=C.M()
d7.b=A.ae
d7.c=1.4
d7.r=A.hi.j(0.5).gp(0)
d8.ah(p,o,d7)},
ar(d){return!0}}
B.aKk.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.aKl.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btr()}}
B.bse.prototype={}
B.VC.prototype={
U(){return new B.bjf()}}
B.bjf.prototype={
gaQY(){var w=this.d
if(w===$)w=this.d=A.cI.aB(16)
return w},
B(d){var w=null,v=C.eF(w,w,w,!0,!0,D.Ad,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.ami,w,w,w,new B.eBD(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.foL,w,w,w,1,w,!0),u=C.m(18),t=A.aT.j(0.1),s=C.I(A.aT.j(0.35),A.q,1),r=x.p
return C.c8(v,D.Ad,C.cB(C.a([C.p(w,C.A(C.a([D.bEp,A.av,C.D(C.d(D.cSt[this.gaQY()],w,w,w,w,w,w,D.a7i,w,w,w),1),C.aH(w,w,w,w,D.bOI,w,w,w,new B.eBE(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new C.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bC,w,w,w),A.aA,C.cp(new B.eBF())],r),w,A.XO,w,w,A.ah,!1),w,!1,!1,w,w)}}
B.Vn.prototype={
U(){return B.hH5()}}
B.bj1.prototype={
cgG(d){var w=d.c,v=B.hH7(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.u(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a1()
this.la()},
lr(d){var w,v,u,t=this
t.e.fg(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cgG(w)
u=new C.u(-v.a,-v.b).aF(0,t.w)
v=C.le(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc6f(){var w=this.ch
return new C.u(w.a/2,w.b/2).ad(0,this.x)},
c6j(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.BV[s]
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
aYm(d){this.m(new B.etG(this,d))
C.eS()
B.ld("bell",D.deV[A.o.G(A.d.cJ(D.BV,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.mr,m,m,m,new B.etR(n,d),m,m,m,m,"Share",m)],k),i=C.cp(new B.etS(n,l)),h=C.a([new B.dz("All",!1,new B.etT(n),A.a_J,A.aM,m)],k)
for(w=0;w<10;++w){v=D.BV[w]
h.push(new B.dz(v.a,n.z===v,new B.etU(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.aa(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=B.hy(A.aM,s,"Time",1,0,new B.etV(n),u/t)
u=n.w
u=B.hy(A.aM,A.k.aa(u,1)+"x","Zoom",9,0.5,new B.etW(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.lL:D.FT
return B.jF(A.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.v(C.a([new B.eN(h,"GO TO",m),t,u,new B.eN(C.a([new B.dz("Orbits",s,new B.etX(n),m,A.aM,m),new B.dz("Names",r,new B.etY(n),m,A.aM,m),new B.dz("Asteroids",q,new B.etZ(n),m,A.aM,m),new B.dz("Music",p,new B.eu_(n),o,A.aM,m)],k),m,m)],k),A.m,m,A.e,A.Q,0,A.p))},
c6g(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new B.etE(),m=C.m(20),l=C.I(q.j(0.6),A.q,1),k=C.p(r,r,A.f,r,r,new C.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.A(C.a([k,A.ab,C.D(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.kY,r,r,r),1),C.aH(r,r,r,r,A.Ga,r,r,r,new B.etD(this),r,r,r,r,r,A.c8)],w),A.m,r,A.e,A.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,F.D3,r,r,r)
v=n.$2("WIDTH",B.Gl(d.d*2)+" km")
u=p===0
p=C.A(C.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+B.Gl(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new B.etF().$1(v))
t=d.f
v=C.A(C.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.aa(t/24,0)+" Earth days":A.k.aa(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.A(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.aa(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.aa(o,1)+" minutes":A.k.aa(o/60,1)+" hours"
return C.p(r,C.v(C.a([j,A.at,k,A.O,p,A.O,v,A.O,s,A.O,C.A(C.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.F,r,A.e,A.Q,0,A.p),A.f,r,r,new C.o(D.Vl,r,l,m,r,r,A.n),r,r,r,r,D.agq,r,r,r)}}
B.bqj.prototype={
a5(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.X()
w=C.M()
w.r=D.Ad.gp(0)
a7.aX(new C.a9(0,0,0+a5,0+a6),w)
v=new C.eJ()
v.dB(8)
for(w=a7.a,u=0;u<110;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.aj()*0.5).gp(0)
p=q.H()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc6f()
n=a5.w
if(a5.as)for(a6=A.d.gae(D.BV),t=new C.fk(a6,new B.eVQ()),s=o.a,r=o.b;t.C();){q=a6.gS(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
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
l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.5).gp(0)
p=l.H()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=B.hH6(A.d.gL(D.BV))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.M()
s=x.O
t.saq(new C.bS(A.A,0.5,A.x,a4,0,C.a([A.aM.j(0.5),A.K],s),a4,a4).av(0,C.bT(o,a6)))
a7.ah(o,a6,t)
t=C.M()
t.saq(D.eaz.av(0,C.bT(o,i)))
a7.ah(o,i,t)
if(a5.at){h=B.h9u("Sun",10.5,A.ad)
h.a5(a7,o.ad(0,new C.u(-h.b.c/2,i+4)))}for(a6=A.d.gae(D.BV),t=new C.fk(a6,new B.eVR()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gS(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=C.b0(l.z)
d=l.a
if(d==="Saturn"){J.bA(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=C.co(A.J,j*1.3,j*4.2)
a1=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.b=A.ae
a1.c=j*0.45
a1.r=A.bK.j(0.55).gp(0)
p=a1.H()
w.drawOval(C.c1(a0),p)
p.delete()
w.restore()}a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gp(0)
a0.z=A.re
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a1=C.aq(e,A.w,0.55)
a1.toString
a0.saq(new C.bS(P.pa,0.5,A.x,a4,0,C.a([A.c,e,a1],s),I.a1g,a4).av(0,C.bT(new C.u(g,f),j)))
p=a0.H()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
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
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.c.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.cXq[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=B.h9u(d,10.5,A.ad)
h.a5(a7,new C.u(g+-h.b.c/2,f+(j+4)))}}},
ar(d){return!0}}
B.Uw.prototype={
U(){var w=x.i
return new B.aCa(new B.Oz(A.cI),C.c2(5,0,!1,w),C.c2(5,0,!1,w),C.c2(5,null,!1,x.cD),A.J,A.J,C.a([],x.g),$,A.bw,0,C.a([],x.X),null,null)}}
B.aCa.prototype={
cta(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c6i(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.e_n
s.cy=new C.u(s.ay,0)
w=s.db
A.d.a9(w)
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
E.dF(150,"",400,0,0.5,"noise")
E.dF(90,"",300,1.5,0.6,"sine")
s.m(new B.dUM())},
a_(){this.a1()
this.la()},
lr(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fg(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.yu[r]
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
if(q.a!=="Sun")E.dF(60+p*5,"",220,0.6,0.55,"sine")
break}}}if(A.d.da(s,new B.dVe()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
E.dF(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||A.d.gal(v).aC(0,i.cx).gco()>120)v.push(i.cx)
if(v.length>700)A.d.cA(v,0)
if(i.cx.gco()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bKz()
else n=n==="weight"?p.cAn():p.bCN()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.dc5[u]
v.push(new B.dz(t.b,p.d===t.a,new B.dV0(p,t),t.c,A.ct,o))}v=C.a([new B.eN(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new B.dz("Hammer",!s,new B.dV1(p),Ai.FO,A.ct,o),new B.dz("Feather",s,new B.dV2(p),Z.MF,A.ct,o),new B.dz(q,r,new B.dV6(p),A.FD,A.aT,o)],w)
q=p.w
A.d.v(v,C.a([new B.eN(r,o,o),B.hy(A.ct,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new B.dV7(p),q),new B.eN(C.a([new B.fg(A.qV,"Drop!",new B.dV8(p),A.b7,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=B.hy(A.ct,""+A.k.V(s)+" kg","Your weight",120,20,new B.dV9(p),s)
r=p.ax
A.d.v(v,C.a([s,B.hy(A.ct,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new B.dVa(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=B.hy(A.ct,A.k.aa(s,1)+" km/s","Speed",13,0,new B.dVb(p),s)
r=p.ch
A.d.v(v,C.a([s,B.hy(A.ct,A.k.aa(r,1)+"x out","View",8,0.5,new B.dVc(p),r),new B.eN(C.a([new B.fg(A.nb,"Fire!",p.gc6h(),A.b7,o),new B.fg(A.qV,"Falls",new B.dVd(p),A.c,o),new B.fg(A.qU,"Orbit 7.7",new B.dV3(p),A.c,o),new B.fg(D.bDP,"Oval 9",new B.dV4(p),A.c,o),new B.fg(A.Bo,"Escape",new B.dV5(p),A.c,o)],w),o,o)],w))}return B.jF(A.ct,A.ha,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.v(v,A.m,o,A.e,A.Q,0,A.p))},
bKz(){return new C.C(D.boy,C.cp(new B.dUL(this)),null)},
cAn(){var w,v,u,t=null,s=[D.eyC,D.eA0,D.eA8,D.eAr,D.eA6,D.eAw,D.ez9,D.eAS,D.ezL],r=x.p,q=C.a([D.fcV,A.S],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.C(A.cH,new C.cm(A.aO,A.e,A.j,A.m,t,A.p,t,0,C.a([new C.a7(62,t,new C.x(v.a,t,new C.G(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bD(1,A.bi,new C.AX(new B.dUN(this,v),t),t)],r),t),t))}q.push(A.at)
q.push(D.ff8)
return C.cB(q,t,A.ix,t,t,A.ah,!1)},
bCN(){return C.cp(new B.dUJ(this))}}
B.b97.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.X(),e=C.M()
e.r=D.Ad.gp(0)
d.aX(new C.a9(0,0,0+h,0+g),e)
w=new C.eJ()
w.dB(2)
for(e=d.a,v=0;v<80;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.aj()*0.5).gp(0)
q=r.H()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=C.M()
e.saq(new C.bS(A.A,0.5,A.x,i,0,C.a([A.K,A.aT.j(0.35),A.K],x.O),D.d3O,i).av(0,C.bT(g,p*1.1)))
d.ah(g,p*1.06,e)
e=C.M()
e.saq(D.eat.av(0,C.bT(g,p)))
d.ah(g,p,e)
o=g.ad(0,new C.u(0,-p))
f=f.r
e=x.v
n=new C.aP(f,A.ap,i,i,C.a([],e))
u=o.a
t=o.b
s=t+3
n.E(new C.b5(u-16,s))
n.E(new C.ap(u,t-400*h-4))
n.E(new C.ap(u+16,s))
n.E(new C.bF())
s=C.M()
s.r=A.ak.gp(0)
d.aP(n,s)
s=o.ad(0,new C.u(0,-400*h-6))
u=C.M()
u.r=A.c.gp(0)
d.ah(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.aP(f,A.ap,i,i,e)
f=g.a
t=g.b
m.E(new C.b5(f+A.d.gL(u).a*h,t+A.d.gL(u).b*h))
for(u=C.dd(u,1,i,C.U(u).c),s=u.$ti,u=new C.bR(u,u.gM(0),s.k("bR<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.ap(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bx(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.X()
f=C.M()
f.b=A.ae
f.c=2.4
f.d=A.bO
f.r=A.ct.j(0.9).gp(0)
d.aP(m,f)}if(j.f){f=j.d
k=g.ad(0,new C.u(f.a*h,f.b*h))
h=C.M()
h.r=A.ct.j(0.4).gp(0)
h.z=G.mu
d.ah(k,7,h)
h=C.M()
h.r=A.c.gp(0)
d.ah(k,4,h)}},
ar(d){return!0}}
B.Vf.prototype={
U(){return new B.biZ(new C.cs(null,x.A),$,A.bw,0,C.a([],x.X),null,null)}}
B.biZ.prototype={
a_(){this.a1()
this.la()},
lr(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Pl[l.e],i=D.Pl[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aH(k,k,k,k,D.mr,k,k,k,new B.emA(l,d),k,k,k,k,"Share",k)],u)
s=C.D(C.b3(k,k,k,new B.bpS(f,g,v,k),A.f0),1)
r=g.a
q=v<10?A.k.aa(v,1):B.Gl(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.i3,A.L,k,k)
o=B.Gl(v*v*v)
n=A.a.cb(p,"s")?"":"s"
h=C.v(C.a([s,C.p(k,C.v(C.a([q,A.at,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,A5.SP,A.L,k,k),A.bB,C.d(p+": "+B.Gl(w*2)+" km wide. "+r+": "+B.Gl(h*2)+" km wide.",k,k,k,k,k,k,A5.SY,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.bqF,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.Pl[m]
r.push(new B.dz(w.a,l.e===m,new B.emB(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.Pl[m]
w.push(new B.dz(s.a,l.f===m,new B.emC(l,m),k,C.b0(s.c),k))}return B.jF(A.bU,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.et(h,l.d),"SIZE COMPARE",C.v(C.a([new B.eN(r,"FIRST",k),new B.eN(w,"SECOND",k)],u),A.m,k,A.e,A.Q,0,A.p))}}
B.bpS.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.X()
w=C.M()
w.r=D.W0.gp(0)
d.aX(new C.a9(0,0,0+h,0+g),w)
v=new C.eJ()
v.dB(6)
for(w=d.a,u=0;u<70;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new C.u(h,g)
w=new B.eTZ(d)
t=this.c
w.$3(m,o,C.b0(t.c))
s=o-n
l=new C.u(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,C.b0(s.c))
w=C.M()
w.b=A.ae
w.c=1.4
w.r=A.ad.gp(0)
d.ah(l,n+3,w)
k=C.i1(i,i,i,i,C.dn(i,i,i,i,i,i,i,i,i,D.eZH,s.a),A.a4,A.cc,i,A.eh,A.ca)
k.eI()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbd(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbd(g)-6
h=g}k.a5(d,l.ad(0,new C.u(-w/2,h)))
j=C.i1(i,i,i,i,C.dn(i,i,i,i,i,i,i,i,i,D.f2_,t.a),A.a4,A.cc,i,A.eh,A.ca)
j.eI()
t=j.b
h=t.c
t=t.a.c
j.a5(d,m.ad(0,new C.u(-h/2,-t.gbd(t)/2)))},
ar(d){return!0}}
B.aKm.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvs.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btt()}}
B.aKV.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvG.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bu1()}}
B.aKY.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvI.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bu4()}}
B.P1.prototype={}
B.Tz.prototype={
U(){return B.hH3()}}
B.bhF.prototype={
a_(){this.a1()
this.la()},
lr(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fg(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dF(70,"",500,0.3,0.5,"sine")}}A.d.bn(w,new B.dCh())},
aYn(d){var w,v,u,t=this.Q
if(t.A(0,A.au))return
w=this.gb6a()
v=d.aC(0,new C.u(t.a/2,t.b*0.42))
u=A.k.D(v.gco()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new B.P1(t,u,1.2,new C.wU(1,30+A.cI.aj()*40,0.9,0.7).iG()))
B.ld("bell",60+A.k.V(12-u)*2,400,0.35)},
gb6a(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new C.K(m,new B.dC5(),C.U(m).k("K<1,N>")).fo(0,A.uL),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.mr,n,n,n,new B.dC6(o,d),n,n,n,n,"Share",n)],m)
v=C.cp(new B.dC7(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.aa(s,0)+" Suns":B.fov(s)+" Suns"
t=B.hy(A.by,s,"Mass",1,0,new B.dC9(o),u/t)
u=C.a([new B.dz("Star (10)",!1,new B.dCa(o),n,A.by,n),new B.dz("Cygnus X-1 (21)",!1,new B.dCb(o),n,A.by,n),new B.dz("Milky Way core (4 million)",!1,new B.dCc(o),n,A.by,n),new B.dz("M87 (6.5 billion)",!1,new B.dCd(o),n,A.by,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.lL:D.FT
return B.jF(A.by,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.v(C.a([t,new B.eN(u,"LIKE",n),new B.eN(C.a([new B.dz("Glowing ring",s,new B.dCe(o),n,A.by,n),new B.dz("Bent light",r,new B.dCf(o),n,A.by,n),new B.dz("Music",q,new B.dCg(o),p,A.by,n),new B.fg(A.jY,"Clear",new B.dC8(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.Q,0,A.p))},
adM(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.eVH,w,w,w),A.bB,C.d(e,w,2,w,w,w,w,M.zj,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
B.b8w.prototype={
a5(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.X()
w=C.M()
w.r=D.bdX.gp(0)
b2.aX(new C.a9(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.u(w,v)
t=this.b
s=t.gb6a()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.L)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new C.u(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.D(o/h,0,n)
i=new C.u(w+k/h*g,v+j/h*g)}}k=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.c.j(0.6).gp(0)
f=k.H()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=C.M()
b0.b=A.ae
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=S.Qv
b2.ah(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.aq(A.wT,A.fC,d)
n.toString
k=Math.cos(a4)
$.X()
j=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gp(0)
f=j.H()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=n.j(b1).gp(0)
f=k.H()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.X()
b1=C.M()
b1.saq(new C.bS(A.A,0.5,A.x,null,0,C.a([A.w,A.w.j(0)],x.O),D.cJW,null).av(0,C.bT(u,b0)))
b2.ah(u,b0,b1)
b1=C.M()
b1.r=A.w.gp(0)
b2.ah(u,s,b1)
b1=C.M()
b1.b=A.ae
b1.c=1
b1.r=A.by.j(0.55).gp(0)
b2.ah(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,C.L)(b0),++m){a7=b0[m]
a0=s*a7.b
t=w+Math.cos(a7.a)*a0
r=v+Math.sin(a7.a)*a0*0.9
a8=1+A.k.D(3.5/a7.b,0,5)
a9=3*a8
q=-Math.sin(a7.a)*a9
o=Math.cos(a7.a)*a9
n=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
n.c=4.2/Math.sqrt(a8)
n.d=A.bO
k=a7.d
n.r=k.j(A.k.D(a7.b/2,0.2,1)).gp(0)
f=n.H()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=k.j(0.2).gp(0)
o.z=G.mu
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
ar(d){return!0}}
B.adU.prototype={}
B.Us.prototype={
U(){var w=x.r,v=x.g
return new B.bi6(new C.cs(null,x.A),new B.Oz(A.cI),C.a([],w),A.J,A.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),A.J,A.J,$,A.bw,0,C.a([],x.X),null,null)}}
B.bi6.prototype={
a_(){this.a1()
this.Zo()
this.la()},
Zo(){var w,v,u,t,s,r,q,p,o=this,n=new C.eJ()
n.dB(5)
w=C.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.aj(),1.6)
w.push(new B.adU(t,n.aj()*3.141592653589793*2,(n.aj()-0.5)*0.5*t,25+n.aj()*20))}else{t=Math.pow(n.aj(),0.8)
s=n.aB(o.f)
r=n.aj()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.h9()?0:3.141592653589793
q=r+(n.aj()-0.5)*0.25}r=n.aj()
p=t<0.25?35+n.aj()*15:205+n.aj()*50
w.push(new B.adU(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
ct1(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.e0Q
k.cx=D.e0T
w=new C.eJ()
w.dB(9)
v=k.cy
A.d.a9(v)
u=C.a([],x.r)
for(t=0;t<900;++t)u.push(new B.adU(Math.pow(w.aj(),0.8)*0.7,w.aj()*3.141592653589793*2,0,320+w.aj()*30))
A.d.v(v,u)
u=x.g
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.L)(v),++q){p=v[q]
o=p.b
n=p.a
s.push(new C.u(Math.cos(o)*n,Math.sin(o)*n))}k.dx=s
s=C.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,C.L)(v),++q){p=v[q]
o=p.b
n=p.a+0.2
s.push(new C.u(-Math.sin(o)*0.55/Math.sqrt(n),Math.cos(o)*0.55/Math.sqrt(n)))}k.fr=s
v=C.a([],u)
for(s=k.ay,r=x.S,s=C.dd(s,0,C.dJ(900,"count",r),C.U(s).c),o=s.$ti,s=new C.bR(s,s.gM(0),o.k("bR<ak.E>")),o=o.k("ak.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.u(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.dd(u,0,C.dJ(900,"count",r),C.U(u).c),r=u.$ti,u=new C.bR(u,u.gM(0),r.k("bR<ak.E>")),r=r.k("ak.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.u(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
E.dF(110,"",900,0.5,0.45,"sine")},
lr(d){var w,v,u,t,s,r,q,p=this
p.e.fg(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aC(0,p.fx)
s=Math.max(0.25,t.gco())
r=t.eE(0,s).aF(0,0.9/(s*s))
w=p.fy.ad(0,r.aF(0,u))
p.fy=w
v=p.cx.aC(0,r.aF(0,u))
p.cx=v
w=p.fx.ad(0,w.aF(0,u))
p.fx=w
v=p.CW.ad(0,v.aF(0,u))
p.CW=v
q=new B.dTj(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mr,r,r,r,new B.dT9(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new B.bdL(s,r),A.au),n=A.w.j(0.5),m=C.m(14),l=C.I(A.bF,A.q,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Af.a6A,r,r,r),A.f,r,r,new C.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bS,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.d_t[v]
o=s.Q===u.a&&!s.ch
l.push(new B.dz(u.b,o,new B.dTa(s,u),r,A.h0,r))}l.push(new B.dz("Collide",s.ch,new B.dTb(s),A.xL,A.bU,r))
o=C.a([new B.eN(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=B.hy(A.h0,""+n,"Arms",6,2,new B.dTc(s),n)
l=s.r
A.d.v(o,C.a([n,B.hy(A.h0,A.k.aa(l,1),"Winding",6,0.8,new B.dTd(s),l)],q))}n=s.as
o.push(B.hy(A.h0,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new B.dTe(s),n))
n=s.ax
o.push(B.hy(A.h0,A.k.aa(n,1)+"x","Speed",4,0,new B.dTf(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.lL:D.FT
o.push(new B.eN(C.a([new B.dz("Dark matter",n,new B.dTg(s),r,A.by,r),new B.dz("You are here",l,new B.dTh(s),r,A.aM,r),new B.dz("Music",w,new B.dTi(s),t,A.h0,r)],q),r,r))
return B.jF(A.h0,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.et(new C.an(A.W,r,A.b_,A.r,m,r),s.d),"GALAXY",C.v(o,A.m,r,A.e,A.Q,0,A.p))}}
B.bdL.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.X()
w=C.M()
w.r=D.bfY.gp(0)
a3.aX(new C.a9(0,0,0+a1,0+a2),w)
v=new C.eJ()
v.dB(3)
for(w=a3.a,u=0;u<90;++u){t=v.aj()
s=v.aj()
r=v.aj()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=A.c.j(0.15+v.aj()*0.4).gp(0)
p=q.H()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new C.u(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=C.M()
t.saq(new C.bS(A.A,0.5,A.x,a0,0,C.a([A.aE.j(0.32),A.aE.j(0.12),A.K],x.O),D.c7P,a0).av(0,C.bT(o,a2)))
a3.ah(o,a2,t)}m=new B.d7N(a1.as)
a2=n*0.3
t=C.M()
t.saq(new C.bS(A.A,0.5,A.x,a0,0,C.a([A.h1.j(0.85),A.aH.j(0.3),A.K],x.O),a0,a0).av(0,C.bT(o,a2)))
a3.ah(o,a2,t)
if(!a1.ch){l=C.M()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=A.k.G(q,360)
l.r=new H.mM(1,r,q>200?0.45:0.55,1).iG().j(0.35+(1-s)*0.5).gp(0)
s=s<0.3?1.3:1
p=l.H()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.X()
a2=C.M()
a2.b=A.ae
a2.c=1.6
a2.r=A.aM.gp(0)
a3.ah(g,9,a2)
f=C.i1(a0,a0,a0,a0,D.eSM,A.a4,A.cc,a0,A.eh,A.ca)
f.eI()
f.a5(a3,g.ad(0,new C.u(-f.b.c/2,12)))}}else{e=n*0.8
l=C.M()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bh8.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.L)(a2),++k){d=a2[k]
l.r=D.bc5.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.X()
w=C.M()
w.r=A.h1.gp(0)
a3.ah(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.M()
w.r=A.io.gp(0)
a3.ah(a1,5,w)}},
ar(d){return!0}}
B.Vb.prototype={
U(){return new B.biY(new C.cs(null,x.A),new B.Oz(A.cI),$,A.bw,0,C.a([],x.X),null,null)}}
B.biY.prototype={
a_(){this.a1()
this.la()},
lr(d){var w,v,u,t=this
t.e.fg(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.G(t.r+d*0.04*v,1)
else{w=A.k.G(t.w+d*0.05*v,1)
t.w=w
u=A.k.bu(w*4)
if(u!==A.k.bu(t.as))B.ld("bell",60+u*4,500,0.35)
t.as=u}},
gcoL(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcfi(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.mr,q,q,q,new B.elP(r,d),q,q,q,q,"Share",q)],p),n=C.D(new C.et(C.b3(q,q,q,new B.bp7(r,q),A.f0),r.d),1)
if(r.f==="seasons")w=r.gcoL()
else{w=r.gcfi()
v=A.k.an(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.v(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A6.SX,A.L,q,q),A.f,q,q,q,q,q,q,q,L.agA,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A1.xX:A.iT
t=r.Q
s=t?A.lL:D.FT
s=C.a([new B.eN(C.a([new B.dz("Seasons",n==="seasons",new B.elQ(r),A.yb,A.bt,q),new B.dz("Moon phases",n==="moon",new B.elR(r),A.vl,A.bt,q),new B.dz(u,!1,new B.elS(r),v,A.bt,q),new B.dz("Music",t,new B.elT(r),s,A.bt,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=B.hy(A.bt,D.cZO[A.o.G(A.k.bu(n*12),12)],"Month",1,0,new B.elU(r),n)
v=r.z
A.d.v(s,C.a([n,B.hy(A.bt,A.k.aa(v,1)+"\xb0","Tilt",90,0,new B.elV(r),v)],p))}else{p=r.w
s.push(B.hy(A.bt,""+(A.k.bu(p*29.5)+1),"Day of month",1,0,new B.elW(r),p))}p=r.y
s.push(B.hy(A.bt,A.k.aa(p,1)+"x","Speed",4,0.2,new B.elX(r),p))
return B.jF(A.bt,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.v(s,A.m,q,A.e,A.Q,0,A.p))}}
B.bp7.prototype={
a5(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.X(),b8=C.M()
b8.r=D.Ad.gp(0)
b9.aX(new C.a9(0,0,0+b5,0+b6),b8)
w=new C.eJ()
w.dB(4)
for(b8=b9.a,v=0;v<70;++v){u=w.aj()
t=w.aj()
s=w.aj()
r=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.aj()*0.4).gp(0)
q=r.H()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new C.u(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=C.co(p,n*2,o*2)
t=C.M()
t.b=A.ae
t.c=1
t.r=A.b2.gp(0)
b9.hM(u,t)
t=C.M()
t.saq(D.eav.av(0,C.bT(p,34)))
b9.ah(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new C.u(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aC(0,l).eE(0,p.aC(0,l).gco())
J.bA(b8.save())
b8.translate(l.a,l.b)
s=C.M()
s.r=D.bdT.gp(0)
b9.ah(A.J,k,s)
J.bA(b8.save())
b7=new C.aP(b7.r,A.ap,b4,b4,C.a([],x.v))
b7.E(new C.ke(C.bT(A.J,k)))
b9.qf(0,b7)
b7=i.aF(0,k).aF(0,0.35)
s=k*1.1
b6=C.M()
b6.saq(D.eaE.av(0,C.bT(A.J,s)))
b9.ah(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.u(s,b6)
b7=new C.u(-s,-b6).aF(0,k).aF(0,1.7)
b5=h.aF(0,k).aF(0,1.7)
t=C.M()
t.c=2
t.r=A.ci.gp(0)
b9.bA(b7,b5,t)
t=h.aF(0,k).aF(0,1.7)
b5=C.M()
b5.r=A.ci.gp(0)
b9.ah(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.i1(b4,b4,b4,b4,C.dn(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aPE,b5),A.a4,A.cc,b4,A.eh,A.ca)
f.eI()
f.a5(b9,l.ad(0,new C.u(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.M()
r.b=A.ae
r.c=1
r.r=A.b2.gp(0)
b9.ah(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=A.aM.j(0.6).gp(0)
a0.c=2
q=a0.H()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.M()
r.saq(new C.bS(new C.da(-0.5,0),1.1,A.x,b4,0,C.a([D.b9F,D.aew],x.O),D.cRs,b4).av(0,C.bT(p,k)))
b9.ah(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new C.u(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.M()
r.r=D.b76.gp(0)
b9.ah(a1,a2,r)
J.bA(b8.save())
b7=b7.r
r=x.v
d=new C.aP(b7,A.ap,b4,b4,C.a([],r))
d.E(new C.ke(C.bT(a1,a2)))
b9.qf(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.M()
a3.r=A.bR.gp(0)
b9.aX(new C.a9(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aC(0,p).eE(0,a1.aC(0,p).gco())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.arz[a5]
a7=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
a7.r=A.aT.j(0.45).gp(0)
a7.z=A.jk
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.u(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.M()
b6.r=D.b71.gp(0)
b9.ah(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bA(b8.save())
b6=new C.aP(b7,A.ap,b4,b4,C.a([],r))
b6.E(new C.ke(C.bT(a8,a9)))
b9.qf(0,b6)
s=s.w
b1=new C.aP(b7,A.ap,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.E(new C.b5(u,b5))
b6=b2>0
b1.aBs(new C.u(u,t+a9),b6,new C.aW(a9,a9))
if(b0<0.5)b6=b2<0
b1.aBs(new C.u(u,b5),b6,new C.aW(a9*Math.abs(1-2*b0),a9))
b6=C.M()
b6.r=A.bR.gp(0)
b9.aP(b1,b6)
b8.restore()
b8=C.M()
b8.b=A.ae
b8.c=1
b8.r=A.b2.gp(0)
b9.ah(a8,a9,b8)
b3=C.i1(b4,b4,b4,b4,D.eSN,A.a4,A.cc,b4,A.eh,A.ca)
b3.eI()
b3.a5(b9,a8.ad(0,new C.u(-b3.b.c/2,a9+6)))}},
ar(d){return!0}}
B.aJT.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvk.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bsY()}}
B.aKh.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvr.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.btn()}}
B.aKU.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbv())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bw()}}
B.bvF.prototype={
q(){var w,v,u
for(w=this.fk$,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].a8(0)
w=this.fj$
w===$&&C.c()
w.q()
this.bu0()}}
var z=a.updateTypes(["~()","R(tg)","R(a3B)","ay<~>()","R(BZ)","H(tg,H)","N(N,tg)","R(BV)","R(Yy)","R(aax)","R(uR)","R(a2j)","R(nh)","R(a_4)","R(abk)","H(H)","TF()","Ug()","Tv()","Uu()","UN()","UP()","TE()","V8()","Vo()","V9()","V5()","Vv()","TD()","VA()","R(mv)","V_()","V4()","adZ(Y,H)","acT(Y,H)","~(a4<@,@>)","H(BV,BV)","n(e9)","R(adP)","R(a_L)","R(C9)","R(ab1)","R(acX)","R(aaL)","H(H,qA)","H(H,BZ)","n(qA)","~(qA,aj<n>,H)","qA?(BZ)","R(qA)","r(n,a_y)","R(Pi)","~(A7)","R(aaS)","N(H?)","VC()","R(Fk)","R(ac9)","N(H)","Uh()","N(P1)","R(a9t)","TA()","a7v()","~(AF,n,u,w,N)","~(n,tg)","V2()","UI(Y)","MM(Y)","TZ(Y,bp<N>,bp<N>)","VG()","Uo()","TB()","Uf()","V0()","Ve()","Vz()","UZ()","~(n)","cq(aae)","R(aad)","Uv()","Vn()","Uw()","Tz()","Us()","Vf()","Vb()","U0()","R(P1)","~(b9)"])
B.fqF.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+30}
B.fhp.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gL(d.e.split(". "))+"."},
$S:z+37}
B.fnJ.prototype={
$1(d){var w
if(!this.a.Lc(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
B.fnK.prototype={
$1(d){return d.x},
$S:z+1}
B.fqC.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
B.fqD.prototype={
$1(d){var w
if(!this.a.Lc(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
B.fqE.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
B.e3g.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.e3h.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.y(this.b,this.c))},
$S:0}
B.e3i.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.m5(v,A.dV,A.i8)}},
$S:8}
B.e3t.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a9(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
B.e3u.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
B.e3p.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
B.e3n.prototype={
$2(d,e){var w=this.a
w.r.push(C.cM(C.dC(0,0,0,d,0,0),new B.e3o(w,this.b,e)))},
$S:1827}
B.e3o.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
B.e3q.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gVu().aiO(0,u[1],u[2],u[3])
u[4].bH(0,new B.e3l(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dF(700+w.e*120,"",80,0,0.25,"square")
v.m(new B.e3m(w.a,v,w.f,w.r))},
$S:0}
B.e3l.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:201}
B.e3m.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bu(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e3r.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gVu().ajz(t,u[1],s,u[3])
E.dF(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new B.e3k(w.a,v,w.e,w.f))},
$S:0}
B.e3k.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bu(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
B.e3s.prototype={
$0(){E.dF(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new B.e3j(w,this.b))},
$S:0}
B.e3j.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
B.e3x.prototype={
$0(){var w=this.a
return w.m(new B.e3w(w))},
$S:0}
B.e3w.prototype={
$0(){return this.a.at=!0},
$S:0}
B.e3y.prototype={
$0(){var w=this.a
return w.m(new B.e3v(w))},
$S:0}
B.e3v.prototype={
$0(){return this.a.at=!1},
$S:0}
B.e3z.prototype={
$0(){var w=this.a
w.f.saV(0,this.b)
w.MY()},
$S:0}
B.e3A.prototype={
$0(){return this.a.Xt(this.b)},
$S:0}
B.e3B.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.MY():w.aUd()},
$S:2}
B.e3C.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.MY():w.aUd()},
$S:0}
B.ejf.prototype={
$2(d,e){return d+e},
$S:1828}
B.ejz.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.ejy(w,d))},
$S:126}
B.ejy.prototype={
$0(){var w=C.aJ(J.q(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
B.ejA.prototype={
$0(){},
$S:0}
B.ejB.prototype={
$0(){},
$S:0}
B.ejh.prototype={
$0(){return this.a.m(new B.ejg(this.b,this.c))},
$S:0}
B.ejg.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.ej6.prototype={
$1(d){return this.a.cx===d},
$S:33}
B.ej7.prototype={
$1(d){return this.a.cx=d},
$S:26}
B.ej8.prototype={
$1(d){return this.a.cy===d},
$S:33}
B.ej9.prototype={
$1(d){return this.a.cy=d},
$S:26}
B.eja.prototype={
$1(d){return this.a.db===d},
$S:33}
B.ejb.prototype={
$1(d){return this.a.db=d},
$S:26}
B.ejc.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:33}
B.ejd.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.K(0,d)},
$S:26}
B.eje.prototype={
$0(){var w=this.a
return w.m(w.gavb())},
$S:0}
B.ej4.prototype={
$1(d){return this.a.$1(!0)},
$S:82}
B.ej5.prototype={
$1(d){return this.a.$1(!1)},
$S:136}
B.ej3.prototype={
$1(d){return this.a.$1(!1)},
$S:184}
B.ejs.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.at(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new B.bfr(o,p),n)
w=this.b
v=B.by1("WORLD",w.a,w.c)
u=B.by1("GRAVITY",C.t(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.ci:A.b7
t=B.by1("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.BP[o.db].d?A.ci:A.c
q=x.p
s=C.a([v,u,t,B.by1("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(B.by1("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=C.a([n,C.ao(p,C.A(s,A.m,p,A.hM,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bBL(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.r8[w].a+".":"You landed on every world!"
v=C.a([new B.fg(A.mn,"Again",new B.ejn(o),A.c,p),new B.fg(A.qW,"Rebuild",new B.ejo(o),A.aM,p)],q)
if(o.d+1<7)v.push(new B.fg(A.iz,"Next world",new B.ejp(o),A.b7,p))
n.push(B.hdb("Perfect landing!",w,A.b7,v))}if(o.as==="crashed")n.push(B.hdb("Crash!",o.at,A.ci,C.a([new B.fg(A.mn,"Try again",new B.ejq(o),A.b7,p),new B.fg(A.qW,"Rebuild",new B.ejr(o),A.aM,p)],q)))
return new C.an(A.W,p,A.b_,A.r,n,p)},
$S:61}
B.ejn.prototype={
$0(){var w=this.a
return w.m(w.gavb())},
$S:0}
B.ejo.prototype={
$0(){var w=this.a
return w.m(new B.ejk(w))},
$S:0}
B.ejk.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.ejp.prototype={
$0(){var w=this.a
return w.m(new B.ejj(w))},
$S:0}
B.ejj.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
B.ejq.prototype={
$0(){var w=this.a
return w.m(w.gavb())},
$S:0}
B.ejr.prototype={
$0(){var w=this.a
return w.m(new B.eji(w))},
$S:0}
B.eji.prototype={
$0(){return this.a.as="ready"},
$S:0}
B.ejt.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new B.ejm(v,w))},
$S:0}
B.ejm.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
B.eju.prototype={
$1(d){return this.a.y=d},
$S:9}
B.ejv.prototype={
$1(d){return this.a.Q=d},
$S:9}
B.ejw.prototype={
$1(d){return this.a.z=d},
$S:9}
B.ejx.prototype={
$0(){var w=this.a
return w.m(new B.ejl(w))},
$S:0}
B.ejl.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
B.dCJ.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.h8w
if(q==null)q=$.h8w=B.cDg()
w=3
return C.b(C.iJ(C.a([q,$.qK().bef("assets/data/three.min.js")],x.aJ),x.C),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kt(0,C.cO(J.q(s,1)))
q.m(new B.dCI(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:50}
B.dCI.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
B.dCl.prototype={
$0(){return this.a.bSQ(C.aT(J.q(this.b,"group")))},
$S:0}
B.dCm.prototype={
$1(d){return A.a.aT(A.o.fQ(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:297}
B.dCK.prototype={
$0(){return B.a7u("kick",0.25)},
$S:0}
B.dCn.prototype={
$0(){return this.a.cx=this.b},
$S:0}
B.dCo.prototype={
$1(d){return d.a===this.a},
$S:z+11}
B.dCp.prototype={
$0(){return B.a7u("kick",0.5)},
$S:0}
B.dCq.prototype={
$0(){return E.dF(1300+this.a.R8.aB(900),"",40,0,0.2,"square")},
$S:0}
B.dCs.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.ch
if(w===2)w=1
else w=w===1?0:2
u.ch=w}else{w=this.a
v=w.ay
if(v.t(0,u))v.W(0,u)
else{v.K(0,u)
if(w.ch===2)w.ch=1}if(v.a===0&&w.ch===0)w.ch=2
u=w}if(u.cx!=null&&!A.d.b8(u.d.e,new B.dCr(u)))u.cx=null
u.go=0},
$S:0}
B.dCr.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.awX(d)},
$S:z+11}
B.dCi.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
B.dCj.prototype={
$0(){var w=this.a
return w.m(w.gc23())},
$S:0}
B.dCk.prototype={
$0(){return this.a.agr(null)},
$S:0}
B.dCz.prototype={
$0(){var w=this.a.as
return w==null?null:w.eT(0,C.F(["t","shot"],x.N,x.z))},
$S:0}
B.dCA.prototype={
$0(){return this.a.cx9(this.b.a)},
$S:0}
B.dCB.prototype={
$0(){return this.a.agr(this.b)},
$S:0}
B.dCC.prototype={
$1(d){var w=this.a
return w.m(new B.dCy(w,d))},
$S:6}
B.dCy.prototype={
$0(){return this.a.k3=this.b},
$S:0}
B.dCD.prototype={
$0(){var w=this.a
return w.m(new B.dCx(w,this.b))},
$S:0}
B.dCx.prototype={
$0(){return this.a.CW=this.b},
$S:0}
B.dCE.prototype={
$0(){var w=this.a
return w.m(new B.dCw(w))},
$S:0}
B.dCw.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
B.dCF.prototype={
$0(){var w=this.a
return w.m(new B.dCv(w))},
$S:0}
B.dCv.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eT(0,C.F(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.JG},
$S:0}
B.dCG.prototype={
$0(){var w=this.a
return w.m(new B.dCu(w))},
$S:0}
B.dCu.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aWN()
else w.p2=null},
$S:0}
B.dCH.prototype={
$0(){var w=this.a
return w.m(new B.dCt(w))},
$S:0}
B.dCt.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
B.bZP.prototype={
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
$S:339}
B.bZQ.prototype={
$1(d){var w=new C.rz([],[]).po(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:478}
B.fbE.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)&&w.h(d,1)},
$S:218}
B.fbF.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)||w.h(d,1)},
$S:218}
B.fbG.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)!==w.h(d,1)},
$S:218}
B.fbN.prototype={
$1(d){return!J.q(d,0)},
$S:218}
B.fbO.prototype={
$1(d){var w=J.a5(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:218}
B.fbP.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:218}
B.dEU.prototype={
$1(d){return this.a.arV(0)},
$S:8}
B.dEy.prototype={
$0(){var w=this.b
return this.a.cx=new C.K(w,C.hU7(),C.U(w).k("K<1,H>")).fI(0)},
$S:0}
B.dEB.prototype={
$1(d){return""+d},
$S:77}
B.dEV.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
B.dEw.prototype={
$1(d){return this.a.arV(this.b)},
$S:8}
B.dEx.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.avG(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mr(0,d,a1.lX(0.15,0.3))
u=a1.mr(0,d,a1.lX(0.15,0.62))
t=a1.mr(0,"and",a1.lX(0.48,0.46))
s=a1.mr(0,a0,a1.lX(0.82,0.46))
a1=t.a
w.push(new B.nh(v.a,a1,0))
w.push(new B.nh(u.a,a1,1))
w.push(new B.nh(a1,s.a,0))
break
case 1:v=a1.mr(0,d,a1.lX(0.12,0.25))
u=a1.mr(0,d,a1.lX(0.12,0.65))
r=a1.mr(0,"xor",a1.lX(0.46,0.25))
q=a1.mr(0,"and",a1.lX(0.46,0.65))
p=a1.avF(0,a0,a1.lX(0.82,0.25),0)
o=a1.avF(0,a0,a1.lX(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new B.nh(a1,n,0))
m=u.a
w.push(new B.nh(m,n,1))
l=q.a
w.push(new B.nh(a1,l,0))
w.push(new B.nh(m,l,1))
w.push(new B.nh(n,p.a,0))
w.push(new B.nh(l,o.a,0))
break
case 2:k=a1.mr(0,"clock",a1.lX(0.15,0.4))
j=a1.mr(0,"not",a1.lX(0.45,0.65))
s=a1.mr(0,a0,a1.lX(0.82,0.3))
i=a1.mr(0,"buzzer",a1.lX(0.82,0.65))
a1=k.a
w.push(new B.nh(a1,s.a,0))
n=j.a
w.push(new B.nh(a1,n,0))
w.push(new B.nh(n,i.a,0))
break
default:h=a1.mr(0,d,a1.lX(0.12,0.25))
g=a1.mr(0,d,a1.lX(0.12,0.7))
f=a1.mr(0,"nor",a1.lX(0.5,0.25))
e=a1.mr(0,"nor",a1.lX(0.5,0.7))
s=a1.mr(0,a0,a1.lX(0.86,0.25))
a1=f.a
w.push(new B.nh(g.a,a1,0))
n=e.a
w.push(new B.nh(n,a1,1))
w.push(new B.nh(h.a,n,0))
w.push(new B.nh(a1,n,1))
w.push(new B.nh(a1,s.a,0))}},
$S:0}
B.dEC.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.avG(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new B.BV(p,"switch",new C.u(0.14*q.a,r*q.b),0))}o.mr(0,w.e,o.lX(0.86,0.5))},
$S:0}
B.dEr.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
B.dEs.prototype={
$2(d,e){return A.k.aL(d.c.b,e.c.b)},
$S:z+36}
B.dEt.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
B.dEu.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
B.dEv.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.abP(this.c)
if(v.ax)B.Bi("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gL(w)
v.CW=!1
if(v.ax)E.dF(140,"",250,0,0.3,"square")}},
$S:0}
B.dED.prototype={
$0(){},
$S:0}
B.dEE.prototype={
$0(){return A.d.cA(this.a.e,this.b)},
$S:0}
B.dEF.prototype={
$0(){return this.a.cy=null},
$S:0}
B.dEA.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bn(w.e,new B.dEz(v))
w.cy=null},
$S:0}
B.dEz.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
B.dEq.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mr(0,this.b,new C.u(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
B.dEO.prototype={
$0(){var w=this.a
return w.m(new B.dEN(w))},
$S:0}
B.dEN.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.dEP.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.x=u
return C.aE(A.c5,C.jt(C.b3(w,w,w,new B.b9A(v,w),u),A.r,w),A.y,!1,w,w,w,w,w,w,w,w,w,new B.dEI(v),w,w,w,new B.dEJ(v),new B.dEK(v),new B.dEL(v),w,w,w,w,w,w,w,w,w,w,new B.dEM(v),w,w,w,!1,A.a8)},
$S:35}
B.dEM.prototype={
$1(d){return this.a.c3C(d.b)},
$S:49}
B.dEK.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cc3(u)
if(t!=null){v.as=t
v.at=u
return}w=v.awt(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aC(0,u)}},
$S:42}
B.dEL.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.u(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
B.dEJ.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bWp(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bn(v,new B.dEG(w))
u=t.as
u.toString
v.push(new B.nh(u,w.a,w.b))
C.jM()}}t.z=t.as=null},
$S:37}
B.dEG.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
B.dEI.prototype={
$1(d){return this.a.aut(d.b)},
$S:282}
B.dEQ.prototype={
$0(){return this.a.bxG(this.b.a)},
$S:0}
B.dER.prototype={
$0(){return this.a.arV(this.b.a)},
$S:0}
B.dES.prototype={
$0(){var w=this.a
return w.m(new B.dEH(w))},
$S:0}
B.dEH.prototype={
$0(){var w=this.a
w.avG(0)
w.ay=null},
$S:0}
B.dET.prototype={
$0(){return this.a.csZ(this.b)},
$S:0}
B.cK2.prototype={
$0(){var w=this,v=null,u=C.i1(v,v,v,v,C.dn(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.cc,v,A.eh,A.ca)
u.eI()
return u},
$S:294}
B.dKL.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dKK.prototype={
$0(){return this.a.d=null},
$S:0}
B.dKN.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bYb()},
$S:119}
B.dKM.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
B.fc4.prototype={
$0(){return D.dVm},
$S:z+55}
B.fc5.prototype={
$0(){return D.dtw},
$S:z+59}
B.fc6.prototype={
$0(){return D.dqo},
$S:z+62}
B.fch.prototype={
$0(){return D.dUM},
$S:z+63}
B.fcj.prototype={
$0(){return D.dzU},
$S:z+66}
B.fck.prototype={
$0(){return D.dts},
$S:z+88}
B.fcl.prototype={
$0(){return D.dtv},
$S:z+17}
B.fcm.prototype={
$0(){return D.dmz},
$S:z+18}
B.fcn.prototype={
$0(){return D.dw_},
$S:z+19}
B.fco.prototype={
$0(){return D.dxC},
$S:z+20}
B.fcp.prototype={
$0(){return D.dxE},
$S:z+21}
B.fc7.prototype={
$0(){return D.dsD},
$S:z+22}
B.fc8.prototype={
$0(){return D.dCD},
$S:z+23}
B.fc9.prototype={
$0(){return D.dUt},
$S:z+24}
B.fca.prototype={
$0(){return D.dSw},
$S:z+25}
B.fcb.prototype={
$0(){return D.dBi},
$S:z+26}
B.fcc.prototype={
$0(){return D.dUB},
$S:z+27}
B.fcd.prototype={
$0(){return D.dsC},
$S:z+28}
B.fce.prototype={
$0(){return D.dUL},
$S:z+29}
B.fcf.prototype={
$0(){return D.dsE},
$S:z+16}
B.fcg.prototype={
$0(){return D.dxU},
$S:z+31}
B.fci.prototype={
$0(){return D.dBh},
$S:z+32}
B.eTw.prototype={
$2(d,e){return new B.adZ($.bCx()[e],new B.eTv(e,this.a),null)},
$S:z+33}
B.eTv.prototype={
$0(){var w=this.a,v=F.aCA.h(0,$.bCx()[w].a)
$.aqF=v==null?"music":v
C.a6(this.b,!1).c8(C.e8(new B.eTt(w),!1,null,x.H))},
$S:0}
B.eTt.prototype={
$1(d){return $.bCx()[this.a].e.$0()},
$S:40}
B.eTx.prototype={
$2(d,e){return new B.acT(D.avr[e],new B.eTu(this.a,e),null)},
$S:z+34}
B.eTu.prototype={
$0(){return this.a.d.$1(D.avr[this.b])},
$S:0}
B.eTc.prototype={
$0(){return this.a.as=!0},
$S:0}
B.eTb.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eTa.prototype={
$1(d){var w=this
return new C.e0(new B.eT9(w.a,w.b,w.c,w.d),null)},
$S:20}
B.eT9.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.m,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.fcG,A.at,D.fj1,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aW(12,12)
m=new C.aW(12,12)
m=C.a([new C.bD(1,A.bi,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),r[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Title",d,G.D1,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bq(n,n,n,n),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iH,!0,A.a4,d,A.am,d,d,d,d),d),A.ab,new C.bD(2,A.bi,C.aM(d,A.T,!1,d,!0,A.r,d,C.aN(),q[p],d,d,d,d,d,2,new C.e2(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.D1,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bq(m,m,m,m),A.Y),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.ai,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.iH,!0,A.a4,d,A.am,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.ddR[l]
j=new C.aW(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.B(t.a.c.d,s)
t.w=i}h=A.d.gL(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.B(t.a.c.d,s)
t.w=i}g=A.d.gL(i)}else g=A.bF
f=new C.aA(g,u[p].A(0,k)?1.8:1,A.q,-1)
n.push(C.aE(d,C.p(d,C.W(k,u[p].A(0,k)?A.c:A.aR,d,d,d,22),A.f,d,d,new C.o(h,d,new C.bP(f,f,f,f),new C.bq(j,j,j,j),d,d,A.n),d,d,d,A.fx,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new B.eT7(a3,p,u,k),d,d,d,d,d,d,!1,A.a8))}A.d.v(v,C.a([new C.x("SLAB "+o,d,D.f2F,d,d,d,d,d,d,d,d,d),A.an,new C.cm(A.aO,A.e,A.j,A.m,d,A.p,d,0,m,d),A.O,new C.a7(d,44,C.cB(n,d,d,d,d,A.aO,!1),d),A.aA],w))}v.push(C.bJ(A.zo,new B.eT8(t,r,q,u,a2),d))
return new C.C(new C.Q(0,0,0,a1.f.d),C.bn(!0,new C.cV(new C.aY(0,1/0,0,a0.a.b*0.86),C.cB(v,d,A4.AP,d,d,A.ah,!0),d),!0,!1,A.af,!0,!0),d)},
$S:107}
B.eT7.prototype={
$0(){var w=this
return w.a.$1(new B.eT6(w.b,w.c,w.d))},
$S:0}
B.eT6.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
B.eT8.prototype={
$0(){var w=this,v=w.a
v.m(new B.eT5(v,w.b,w.c,w.d))
C.a6(w.e,!1).O(null)},
$S:0}
B.eT5.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this
for(w=m.d,v=m.c,u=m.a,t=m.b,s=x.N,r=x.Z,q=0;q<3;++q){p=u.y
if(p===$){p=C.B(u.a.c.f,s)
u.y=p
o=p}else o=p
n=A.a.i(t[q].a.a)
if(n.length===0)n=o[q]
p[q]=n
p=u.z
if(p===$){p=C.B(u.a.c.r,s)
u.z=p}p[q]=A.a.i(v[q].a.a)
p=u.x
if(p===$){p=C.B(u.a.c.e,r)
u.x=p}p[q]=w[q]}},
$S:0}
B.eTk.prototype={
$0(){var w=this.a
return w.m(new B.eTj(w))},
$S:0}
B.eTj.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.eTl.prototype={
$0(){return B.qI(this.b,this.a.f,"scene")},
$S:0}
B.eTm.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.aq(A.d.gL(u),A.d.gal(u),0.4)
u.toString
w=this.a.gYL().x
w===$&&C.c()
return C.c_(v,new C.o(v,v,v,v,v,new C.bS(D.aV0,0.9,A.x,v,0,C.a([u.j(0.06+0.03*w),A.bX],x.O),v,v),A.n),A.bd)},
$S:304}
B.eTn.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.f3(A.A,C.c6(new C.h3(C.a([u.gtG(),u.gYL()],x.dS)),new B.eTi(u,this.b,v),w),A.f,A.eg),w,w,w)},
$S:254}
B.eTi.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gtG().x
r===$&&C.c()
w=r<0.9?1:1-B.bpr(r,0.9,0.98)
v=s.gYL().x
v===$&&C.c()
u=A.dB.aw(0,v)
switch(s.gavH().a){case 0:s=s.bwS(t.b,r,u,t.c)
break
case 1:s=s.bN6(t.b,r,u,t.c)
break
case 2:s=s.cxF(t.b,r,u,t.c)
break
case 3:s=s.bzN(t.b,r,u,t.c)
break
case 4:s=s.bCZ(t.b,r,u,t.c)
break
case 5:s=s.bCb(t.b,r,u,t.c)
break
default:s=null}return C.dc(s,w)},
$S:226}
B.eTo.prototype={
$2(d,e){var w=C.au4(this.b),v=this.c.d,u=C.aq(A.d.gL(v),A.d.gal(v),0.4)
u.toString
v=C.aq(A.d.gL(v),A.d.gal(v),0.4)
v.toString
v=w.cG1(u,A.bF,v,3.5)
u=this.a
w=u.gtG().x
w===$&&C.c()
return C.a9f(C.kU(null,null,null,1,0,new B.eTh(u),A.k.D(w,0,1)),v)},
$S:1832}
B.eTh.prototype={
$1(d){var w=this.a
w.gtG().sp(0,d)
if(w.as)w.m(new B.eTd(w))},
$S:6}
B.eTd.prototype={
$0(){return this.a.as=!1},
$S:0}
B.eTp.prototype={
$0(){var w=this.a
w.gtG().sp(0,0)
w.afb()},
$S:0}
B.eTq.prototype={
$1(d){var w=this.a
w.m(new B.eTg(w,d))
if(w.as)w.afb()},
$S:6}
B.eTg.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eTr.prototype={
$0(){var w=this.a
w.m(new B.eTf(w,this.b))
w.gtG().sp(0,0)
if(w.as)w.afb()},
$S:0}
B.eTf.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eTs.prototype={
$0(){var w=this.a
return w.m(new B.eTe(w,this.b))},
$S:0}
B.eTe.prototype={
$0(){var w=C.B(this.b,x.G)
return this.a.w=w},
$S:0}
B.eT3.prototype={
$2(d,e){return A.k.aL(d.a,e.a)},
$S:1833}
B.eT4.prototype={
$1(d){return d.b},
$S:1834}
B.deC.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
B.deD.prototype={
$1(d){return d.b===this.a},
$S:z+8}
B.dez.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
B.deA.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.deB.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.deE.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.deF.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
B.deG.prototype={
$1(d){return d.a===this.a},
$S:z+4}
B.deH.prototype={
$1(d){return d.d<this.a.ax},
$S:z+38}
B.deI.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+39}
B.deJ.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+40}
B.deK.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+41}
B.deL.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+42}
B.deM.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+43}
B.eiA.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.eip.prototype={
$0(){return this.a.ax=!1},
$S:0}
B.eir.prototype={
$2(d,e){return d+e.d*7+A.o.G(A.a.gX(e.b),97)},
$S:z+44}
B.eis.prototype={
$2(d,e){return d+A.o.G(A.a.gX(e.a),31)+A.o.G(A.a.gX(e.b),17)},
$S:z+45}
B.eiv.prototype={
$1(d){var w=D.mt.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.G(d.d,u)]+")":t},
$S:z+46}
B.eiw.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.U(q),o=x.dg,n=C.B(new C.e7(new C.cQ(new C.a2(q,new B.eix(d),p.k("a2<1>")),new B.eiy(r),p.k("cQ<1,qA?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aI(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.L)(n),++v){u=n[v]
if(w.length>=6)return
t=C.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+47}
B.eix.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.eiy.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+48}
B.eit.prototype={
$1(d){return D.mt.h(0,d.b).c===D.wq},
$S:z+49}
B.eiu.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
B.ej_.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.uP(0,u)
w.aGY(A.o.an(v,1000))},
$S:8}
B.eiz.prototype={
$0(){},
$S:0}
B.eil.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$$0)
case 6:e.au("String","ngmy_core_reaction_lab_v1",s.a.d.af())
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
B.eiC.prototype={
$1(d){var w=null,v=this.a.b
return C.bn(!0,C.v(C.a([A.O,C.dN(!1,w,w,w,!0,w,w,w,!0,w,C.W(D.mt.h(0,v).b,D.mt.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.ftV,w,C.d(D.mt.h(0,v).a,w,w,w,w,w,w,A.ho,w,w,w),w,w,w),C.dN(!1,w,w,w,!0,w,w,w,!0,w,U.amm,w,w,w,w,new B.eiB(d),!1,w,w,w,w,w,w,w,D.flL,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:28}
B.eiB.prototype={
$0(){C.a6(this.a,!1).O(!0)
return null},
$S:0}
B.eiE.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.m).w,s=C.a([D.e3D],x.p)
for(w=0;w<6;++w){v=D.avK[w]
s.push(C.dN(!1,u,u,u,!0,u,u,u,!0,u,D.bOn,u,u,u,u,new B.eiD(d,v),!1,u,u,u,u,u,new C.x(v.b,u,A.kZ,u,u,u,u,u,u,u,u,u),u,new C.x(v.a,u,A.ho,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bn(!0,new C.cV(new C.aY(0,1/0,0,t.a.b*0.7),C.cB(s,u,D.bu8,u,u,A.ah,!0),u),!0,!1,A.af,!0,!0)},
$S:28}
B.eiD.prototype={
$0(){C.a6(this.a,!1).O(this.b)
return null},
$S:0}
B.eio.prototype={
$1(d){var w=null
return C.ej(C.a([C.bK(!1,A.de,w,w,!0,w,w,new B.eim(d),w,w),C.bK(!1,A.D8,w,w,!0,w,w,new B.ein(d),w,w)],x.p),w,w,F.mW,D.fjc,w,w,w,w,D.fm2,w)},
$S:19}
B.eim.prototype={
$0(){C.a6(this.a,!1).O(!1)
return null},
$S:0}
B.ein.prototype={
$0(){C.a6(this.a,!1).O(!0)
return null},
$S:0}
B.eiY.prototype={
$0(){var w=this.a
return w.m(new B.eiX(w))},
$S:0}
B.eiX.prototype={
$0(){return this.a.r=!1},
$S:0}
B.eiZ.prototype={
$2(d,e){var w,v,u,t=null,s=new C.at(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.mb(new B.eiO(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b3E:t
v=C.a([C.b3(u,t,t,new B.bfp(w,v,new B.eiP(r),new B.eiQ(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.e1(C.c6(w,new B.eiR(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bEF())
return C.aE(A.c5,C.jt(new C.an(A.W,t,A.b_,A.r,v,t),A.r,t),A.y,!1,t,t,t,t,t,t,t,t,t,new B.eiS(r),t,r.gcdm(),t,new B.eiT(r),new B.eiU(r),new B.eiV(r),t,t,t,t,t,t,t,t,t,t,new B.eiW(r),t,t,t,!1,A.a8)},
$S:35}
B.eiO.prototype={
$0(){return this.a.aaV(this.b)},
$S:0}
B.eiW.prototype={
$1(d){return this.a.cvr(d.b)},
$S:49}
B.eiU.prototype={
$1(d){return this.a.cdn(d.b)},
$S:42}
B.eiV.prototype={
$1(d){return this.a.cdo(d.b)},
$S:18}
B.eiT.prototype={
$1(d){return this.a.b_1()},
$S:37}
B.eiS.prototype={
$1(d){return this.a.abB(d.b)},
$S:282}
B.eiP.prototype={
$0(){return this.a.z},
$S:647}
B.eiQ.prototype={
$0(){return this.a.Q},
$S:718}
B.eiR.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bIV()
if(p.length===0)return A.bH
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bF,A.q,1)
t=C.a([D.fgG,A.cX],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.L)(p),++r)t.push(new C.x(p[r],q,D.f1q,q,q,q,q,A.a2,q,2,q,q))
return C.p(q,C.v(t,A.F,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h6,q,q,q)},
$S:59}
B.eiq.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.I(e.j(0.6),A.q,1),s=x.p
return new C.C(A.e3,C.A(C.a([C.p(w,C.W(d,e,w,w,w,21),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bf,C.D(C.v(C.a([C.d(f,w,w,w,w,w,w,A6.SX,w,w,w),A.bB,C.d(g,w,w,w,w,w,w,F.T4,w,w,w)],s),A.F,w,A.e,A.j,0,A.p),1)],s),A.F,w,A.e,A.j,0,w,w),w)},
$S:1836}
B.eiK.prototype={
$0(){var w=this.a.c
w.toString
return C.a6(w,!1).lN()},
$S:0}
B.eiL.prototype={
$0(){var w=this.a
return w.m(new B.eiJ(w))},
$S:0}
B.eiJ.prototype={
$0(){return this.a.ax=!0},
$S:0}
B.eiM.prototype={
$0(){var w=this.a
return w.m(new B.eiI(w))},
$S:0}
B.eiI.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
B.eiN.prototype={
$0(){var w=this.a
return w.m(new B.eiH(w))},
$S:0}
B.eiH.prototype={
$0(){return this.a.r=!0},
$S:0}
B.eiG.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.mt.gdK(D.mt),w=w.gae(w);w.C();){v=w.gS(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.L)(p),++r)u.push(s.cqm(p[r]))
return new C.C(I.afQ,C.v(C.a([new C.C(V.ahv,w,q),C.A(u,A.m,q,A.e,A.j,0,q,q)],v),A.F,q,A.e,A.j,0,A.p),q)},
$S:z+50}
B.eiF.prototype={
$0(){return this.a.c3H(this.b)},
$S:0}
B.dey.prototype={
$0(){var w=this,v=null,u=C.i1(v,v,v,v,C.dn(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.cc,v,A.eh,A.ca)
u.eI()
return u},
$S:294}
B.euq.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.an(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.u(s.a+q*n,s.b+r*n)
t.b=new C.u(q*v,r*v)}A.d.bn(o,new B.euo(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new B.eup())},
$S:8}
B.euo.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+51}
B.eup.prototype={
$0(){},
$S:0}
B.eu1.prototype={
$0(){},
$S:0}
B.eu0.prototype={
$0(){},
$S:0}
B.eua.prototype={
$0(){return B.qI(this.b,this.a.d,"spark-painter")},
$S:0}
B.euc.prototype={
$1(d){return this.a.aXn(0,d.b)},
$S:42}
B.eug.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gal(w).aC(0,u).gco()>2.5}else w=!1
if(w)t.a.push(u)
v.aQv(u)
v.c6J(u)
return null},
$S:18}
B.eub.prototype={
$1(d){return this.a.aXm()},
$S:37}
B.euh.prototype={
$1(d){return this.a.aXn(0,d.b)},
$S:23}
B.eui.prototype={
$1(d){return this.a.aXm()},
$S:49}
B.euj.prototype={
$0(){var w=this.a
return w.m(new B.eu9(w,this.b))},
$S:0}
B.eu9.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.euk.prototype={
$0(){var w=this.a
return w.m(new B.eu8(w))},
$S:0}
B.eu8.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.eul.prototype={
$0(){var w=this.a
return w.m(new B.eu7(w,this.b))},
$S:0}
B.eu7.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eum.prototype={
$1(d){var w=this.a
return w.m(new B.eu6(w,d))},
$S:6}
B.eu6.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.eun.prototype={
$0(){var w=this.a
return w.m(new B.eu5(w))},
$S:0}
B.eu5.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eud.prototype={
$0(){var w=this.a
return w.m(new B.eu4(w))},
$S:0}
B.eu4.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.eue.prototype={
$0(){var w=this.a
return w.m(new B.eu3(w))},
$S:0}
B.eu3.prototype={
$0(){var w=this.a
A.d.a9(w.e)
A.d.a9(w.f)},
$S:0}
B.euf.prototype={
$0(){var w=this.a
return w.m(new B.eu2(w,this.b))},
$S:0}
B.eu2.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eB_.prototype={
$0(){return B.qI(this.b,this.a.d,"title")},
$S:0}
B.eB0.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIo().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bYl(v[t],t,s,q,u))
return new C.C(A.fy,C.bY(A.fQ,w,A.rI,0,0),null)},
$S:685}
B.eB1.prototype={
$1(d){return this.a.m(new B.eAZ())},
$S:2}
B.eAZ.prototype={
$0(){},
$S:0}
B.eB2.prototype={
$0(){var w=this.a
w.m(new B.eAY(w,this.b))
w=w.gIo()
w.ir(0,0)
w.cH(0)},
$S:0}
B.eAY.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.eB3.prototype={
$0(){var w=this.a
return w.m(new B.eAX(w,this.b))},
$S:0}
B.eAX.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eB4.prototype={
$0(){var w=this.a
return w.m(new B.eAW(w))},
$S:0}
B.eAW.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.eB5.prototype={
$0(){var w=this.a
return w.m(new B.eAV(w,this.b))},
$S:0}
B.eAV.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eB6.prototype={
$0(){var w=this.a.gIo()
w.ir(0,0)
w.cH(0)},
$S:0}
B.eB7.prototype={
$1(d){var w=this.a
return w.m(new B.eAU(w,d))},
$S:6}
B.eAU.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.efd.prototype={
$1(d){return d.a.aC(0,this.a).gco()<16},
$S:z+13}
B.efe.prototype={
$1(d){var w=this.b
return d.a.aC(0,w).gco()<16||d.a.aC(0,w).gco()>this.a.r.galA()*2.2},
$S:z+13}
B.ef1.prototype={
$0(){return B.qI(this.b,this.a.d,"orbits")},
$S:0}
B.ef2.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.at(e.b,e.d)
q.r=p
w=q.gacO()
v=q.w
u=q.as
t=q.at
s=u==null?A.a1X:q.cgZ(u,q.gaUG())
return new C.et(C.aE(A.c5,C.b3(r,r,r,new B.bjM(q.e,w,v,u,t,s,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.eeZ(q),new B.ef_(q),new B.ef0(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a8),q.d)},
$S:199}
B.ef_.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:42}
B.ef0.prototype={
$1(d){return this.a.at=d.b},
$S:18}
B.eeZ.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aC(0,w).gco()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new B.a_4(u,v.gaUG(),v.Q,v.b0w(),C.a([],x.g)))
C.jM()
if(v.ax)E.dF(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:37}
B.ef3.prototype={
$1(d){var w=this.a
return w.m(new B.eeY(w,d))},
$S:6}
B.eeY.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ef5.prototype={
$1(d){var w=this.a
return w.m(new B.eeX(w,d))},
$S:6}
B.eeX.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ef6.prototype={
$1(d){var w=this.a
return w.m(new B.eeW(w,d))},
$S:6}
B.eeW.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.ef7.prototype={
$0(){var w=this.a
return w.m(new B.eeV(w))},
$S:0}
B.eeV.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.ef8.prototype={
$0(){var w=this.a
return w.m(new B.eeU(w))},
$S:0}
B.eeU.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.ef9.prototype={
$0(){var w=this.a
return w.m(new B.eeT(w))},
$S:0}
B.eeT.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.efa.prototype={
$0(){var w=this.a
return w.m(w.gcsC())},
$S:0}
B.efb.prototype={
$0(){var w=this.a
return w.m(w.gbET())},
$S:0}
B.efc.prototype={
$0(){var w=this.a
return w.m(new B.eeS(w))},
$S:0}
B.eeS.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.aj()
s=w.r
w.aqd(50+t*(Math.min(s.a,s.b)/2-70),v.aj()*3.141592653589793*2,0.7+v.aj()*0.5,v.h9())}},
$S:0}
B.ef4.prototype={
$0(){var w=this.a
return w.m(A.d.grl(w.e))},
$S:0}
B.eAr.prototype={
$1(d){return this.a.fP$-d.b>6000},
$S:720}
B.eAs.prototype={
$1(d){var w=this.a.e
return new C.a2(w,new B.eAq(d),C.U(w).k("a2<1>")).gM(0)>=3},
$S:720}
B.eAq.prototype={
$1(d){return d.a.aC(0,this.a.a).gco()<14},
$S:z+53}
B.eAg.prototype={
$0(){return B.qI(this.b,this.a.d,"swarm")},
$S:0}
B.eAh.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.w=u
return new C.et(C.aE(A.c5,C.b3(w,w,w,new B.brb(v.e,v.f,v.ax,v.at,v.ay,v.fP$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eAd(v),new B.eAe(v),new B.eAf(v),w,w,w,w,w,w,w,w,new B.eA5(v),new B.eA6(v),new B.eA7(v),w,w,w,!1,A.a8),v.d)},
$S:199}
B.eAe.prototype={
$1(d){return this.a.ay=d.b},
$S:42}
B.eAf.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
B.eAd.prototype={
$1(d){return this.a.ay=null},
$S:37}
B.eA6.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.y(v,w.fP$))
if(w.ch)E.dF(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)B.ld("flute",7,500,0.3)},
$S:23}
B.eA7.prototype={
$1(d){return this.a.ay=null},
$S:49}
B.eA5.prototype={
$0(){return this.a.ay=null},
$S:0}
B.eAi.prototype={
$0(){var w=this.a
return w.m(new B.eAc(w,this.b))},
$S:0}
B.eAc.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
B.eAj.prototype={
$0(){var w=this.a
return w.m(new B.eAb(w,this.b))},
$S:0}
B.eAb.prototype={
$0(){var w=this.a
w.ax=this.b.a
A.d.a9(w.e)},
$S:0}
B.eAk.prototype={
$0(){var w=this.a
return w.m(new B.eAa(w))},
$S:0}
B.eAa.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.eAl.prototype={
$1(d){var w=this.a
return w.m(new B.eA9(w,d))},
$S:6}
B.eA9.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eAm.prototype={
$1(d){var w=this.a
return w.m(new B.eA8(w,d))},
$S:6}
B.eA8.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eAn.prototype={
$1(d){var w=this.a
return w.m(new B.eA4(w,d))},
$S:6}
B.eA4.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eAo.prototype={
$1(d){var w=this.a
return w.m(new B.eA3(w,d))},
$S:6}
B.eA3.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eAp.prototype={
$1(d){var w=this.a
return w.m(new B.eA2(w,d))},
$S:6}
B.eA2.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dE2.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.dE1(w,d))},
$S:126}
B.dE1.prototype={
$0(){var w=this.a,v=this.b,u=J.a5(v),t=C.aJ(u.h(v,"unlocked"))
t=t==null?null:A.k.N(t)
w.w=A.o.D(t==null?1:t,1,100)
t=C.aJ(u.h(v,"level"))
t=t==null?null:A.k.N(t)
if(t==null)t=w.w
w.r=A.o.D(t,1,w.w)
t=C.T(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.js(v==null?A.rd:v)
v=v.gae(v)
while(v.C()){u=v.gS(v)
t.n(0,C.t(u.a),A.k.N(C.dQ(u.b)))}w.x=t
w.Q=!0
A.d.a9(w.d)},
$S:0}
B.dE3.prototype={
$1(d){return d.d!=null},
$S:z+14}
B.dE4.prototype={
$1(d){var w=d.d
return w!=null&&this.a.YM(w)>0},
$S:z+14}
B.dDT.prototype={
$0(){var w=this.a
w.r=A.o.D(this.b,1,w.w)
w.ayN()},
$S:0}
B.dDW.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.eG(w,F.ma,new C.C(A.bC,new C.a7(340,480,C.v(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,A.i3,w,w,w),A.S,C.D(C.id(!0,w,w,A.y,T.aN2,new B.dDV(u,d),100,w,w,A.ah,!1),1)],x.p),A.m,w,A.e,A.j,0,A.p),w),w),w,w,w,w,A.d0,w,new C.b7(v,A.Y),w)},
$S:47}
B.dDV.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new B.dDU(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?A.bU:A.c.j(0.1)
else q=A.c.j(0.03)
u=C.I(p?A.b2:A.dp,A.q,1)
o=p?o:"\ud83d\udd12"
t=p?A.c:A.j9
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(A.a.aF("\u2605",n)+A.a.aF("\u2606",3-n),s,s,s,s,s,s,D.f54,s,s,s))
return C.aE(s,C.p(s,C.v(o,A.m,s,A.bb,A.j,0,A.p),A.f,s,s,new C.o(q,s,u,v,s,s,A.n),s,s,s,s,s,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,A.a8)},
$S:74}
B.dDU.prototype={
$0(){C.a6(this.a,!1).O(this.b)
return null},
$S:0}
B.dE_.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gabS()
o=C.b3(q,q,q,new B.b9g(p.d,w,v,p.gc3O(),q),o)
v=p.bW2("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gHM()
t=p.as>=p.gHM()?A.b7:A.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.A(C.a([v,p.atJ("GOAL",""+w+" / "+u,t),p.atJ("STARS",A.a.aF("\u2605",s)+A.a.aF("\u2606",3-s),A.aM)],r),A.m,q,A.hM,A.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(A.lz)
if(p.Q&&!p.y)s.push(D.aUJ)
if(p.z){o=C.m(24)
w=this.c
v=C.I((w?A.b7:A.ci).j(0.6),A.q,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?A.b7:A.ci,q,q,q,q,q,q,q,q,22,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.an,C.d("You blasted "+p.as+" dots. The goal was "+p.gHM()+".",q,q,q,q,q,q,A.hB,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(A.a.aF("\u2605",t==null?1:t),q,q,q,q,q,q,D.eWH,q,q,q))}u.push(A.aA)
t=C.a([new B.fg(A.mn,"Try again",new B.dDX(p),A.c,q)],r)
if(w&&p.r<100)t.push(new B.fg(A.iz,"Next level",new B.dDY(p),A.b7,q))
u.push(C.A(t,A.m,q,A.e,A.Q,0,q,q))
s.push(C.av(C.p(q,C.v(u,A.m,q,A.e,A.Q,0,A.p),A.f,q,q,new C.o(D.Vn,q,v,o,q,q,A.n),q,q,q,q,A.a9,q,q,q),q,q,q))}return C.aE(A.c5,new C.an(A.W,q,A.b_,A.r,s,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dDZ(p),q,q,q,q,!1,A.a8)},
$S:35}
B.dDZ.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fP$
E.dF(180,"",200,1,0.4,"sine")
C.je()},
$S:23}
B.dDX.prototype={
$0(){var w=this.a
return w.m(w.gb3a())},
$S:0}
B.dDY.prototype={
$0(){var w=this.a
return w.aXo(w.r+1)},
$S:0}
B.dE0.prototype={
$0(){var w=this.a
return w.m(w.gb3a())},
$S:0}
B.cJA.prototype={
$3(d,e,f){var w,v
if(e<=0)return
w=this.a
$.X()
v=C.M()
v.r=f.j(0.18).gp(0)
w.ah(d,e,v)
v=C.M()
v.b=A.ae
v.c=3
v.r=f.j(0.9).gp(0)
w.ah(d,e,v)
v=C.M()
v.r=f.j(0.25).gp(0)
v.z=A.ll
w.ah(d,e*0.5,v)},
$S:721}
B.eaH.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcLC()?this.a.coP(w,v,d.b):w.aC(0,v).gco())<24},
$S:z+56}
B.eb5.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+57}
B.eaV.prototype={
$0(){var w=this.a
return w.m(new B.eaM(w))},
$S:0}
B.eaM.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.eaW.prototype={
$0(){return B.qI(this.b,this.a.d,"marble-music")},
$S:0}
B.eaX.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.w=u
return new C.et(C.aE(A.c5,C.b3(w,w,w,new B.bgj(v.e,v.f,v.at,v.ax,v.fP$,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eaS(v),new B.eaT(v),new B.eaU(v),w,w,w,w,w,w,w,w,w,w,new B.eaL(v),w,w,w,!1,A.a8),v.d)},
$S:199}
B.eaL.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.Zw(w)
u.e.push(new B.Fk(w,w,v,u.aOd(v)))
if(u.ay)B.ld(u.z,v+12,700,0.5)}if(u.x==="erase")u.aQL(d.b)},
$S:49}
B.eaT.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:42}
B.eaU.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aQL(d.b)},
$S:18}
B.eaS.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aC(0,w).gco()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.Zw(t.ad(0,w).eE(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new B.Fk(w,t,v,u.aOd(v)))
if(u.ay)B.ld(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:37}
B.eaY.prototype={
$0(){var w=this.a
return w.m(new B.eaR(w,this.b))},
$S:0}
B.eaR.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.eaZ.prototype={
$0(){var w=this.a
return w.m(new B.eaQ(w,this.b))},
$S:0}
B.eaQ.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eb_.prototype={
$0(){var w=this.a
return w.m(new B.eaP(w,this.b))},
$S:0}
B.eaP.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.eb0.prototype={
$1(d){var w=this.a
return w.m(new B.eaO(w,d))},
$S:6}
B.eaO.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eb1.prototype={
$0(){var w=this.a
return w.m(new B.eaN(w))},
$S:0}
B.eaN.prototype={
$0(){return this.a.axl("stairs")},
$S:0}
B.eb2.prototype={
$0(){var w=this.a
return w.m(new B.eaK(w))},
$S:0}
B.eaK.prototype={
$0(){return this.a.axl("pinball")},
$S:0}
B.eb3.prototype={
$0(){var w=this.a
return w.m(new B.eaJ(w))},
$S:0}
B.eaJ.prototype={
$0(){return this.a.axl("random")},
$S:0}
B.eb4.prototype={
$0(){var w=this.a
return w.m(new B.eaI(w))},
$S:0}
B.eaI.prototype={
$0(){var w=this.a
A.d.a9(w.e)
A.d.a9(w.f)},
$S:0}
B.eeB.prototype={
$0(){return A.d.W(this.a.e,this.b)},
$S:0}
B.eeC.prototype={
$0(){var w=this.b,v=new B.acE(this.a.a,this.c)
v.c=w.fP$
return w.e.push(v)},
$S:0}
B.eeJ.prototype={
$0(){var w=this.a
return w.m(new B.eeI(w))},
$S:0}
B.eeI.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.eeK.prototype={
$0(){return B.qI(this.b,this.a.d,"orbit-sequencer")},
$S:0}
B.eeL.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.at(e.b,e.d)
if(!u.f){u.f=!0
u.aPz()}w=u.w
return new C.et(C.aE(A.c5,C.b3(v,v,v,new B.bjN(u.e,u.gaXq(),6,u.gcj0(),u.gcpf(),u.fP$,v),w),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.eeH(u),v,v,v,!1,A.a8),u.d)},
$S:199}
B.eeH.prototype={
$1(d){return this.a.c3Q(d.b)},
$S:49}
B.eeM.prototype={
$1(d){var w=this.a
return w.m(new B.eeG(w,d))},
$S:6}
B.eeG.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.eeN.prototype={
$0(){var w=this.a
return w.m(new B.eeF(w,this.b))},
$S:0}
B.eeF.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.eeO.prototype={
$0(){var w=this.a
return w.m(new B.eeE(w,this.b))},
$S:0}
B.eeE.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.eeP.prototype={
$0(){var w=this.a
return w.m(w.gbIR())},
$S:0}
B.eeQ.prototype={
$0(){var w=this.a
return w.m(new B.eeD(w))},
$S:0}
B.eeD.prototype={
$0(){var w,v=this.a,u=v.e
A.d.a9(u)
for(v=v.r,w=0;w<9;++w)u.push(new B.acE(v.aB(6),v.aj()))},
$S:0}
B.eeR.prototype={
$0(){var w=this.a
return w.m(A.d.grl(w.e))},
$S:0}
B.fqW.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.G(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:128}
B.ee5.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.ee4(w,d))},
$S:126}
B.ee4.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gS(v))))
return this.a.x.v(0,w)},
$S:0}
B.edS.prototype={
$2(d,e){var w=this.b
if(A.o.an(d,100)===w||A.o.G(d,100)===w)this.a.a+=e},
$S:128}
B.edM.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new B.b89(w.b,new C.u(w.c*(0.2+0.6*v.aj()),w.e*(0.2+0.6*v.aj()))))},
$S:0}
B.edN.prototype={
$0(){var w=this.a
A.d.a9(w.e)
w.f.a9(0)
w.r=null},
$S:0}
B.edR.prototype={
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
p=D.vN.h(0,v[u].a).a
o=w.aik(u)
v=D.vN.h(0,v[t].a).a
n=w.aik(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
B.vK("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaXw()&&w.x.K(0,w.d)){B.vK("zap",12,300,0.5)
m=w.x
m=C.B(m,C.a3(m).k("cn.E"))
B.vH("molecule_maker",C.F(["done",m],x.N,x.z))}}}},
$S:0}
B.edQ.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a3(t).k("cu<1>"),r=this.b,q=s.k("a2<J.E>"),p=C.B(new C.a2(new C.cu(t,s),new B.edO(r),q),q.k("J.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.L)(p),++w)t.W(0,p[w])
s=x.S
v=C.T(s,s)
t.bH(0,new B.edP(r,v))
t.a9(0)
t.v(0,v)
A.d.cA(u.e,r)
u.r=null},
$S:0}
B.edO.prototype={
$1(d){var w=this.a
return A.o.an(d,100)===w||A.o.G(d,100)===w},
$S:33}
B.edP.prototype={
$2(d,e){var w=A.o.an(d,100),v=A.o.G(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:128}
B.ee_.prototype={
$1(d){return""+d.b+" "+D.vN.h(0,d.a).c.toLowerCase()},
$S:414}
B.ee0.prototype={
$0(){var w=this.a
return w.m(new B.edZ(w))},
$S:0}
B.edZ.prototype={
$0(){var w=this.a;++w.d
w.avM(0)},
$S:0}
B.ee1.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.at(e.b,e.d)
return C.aE(A.c5,C.b3(w,w,w,new B.bh0(v.e,v.f,v.r,v.gczJ(),w),A.f0),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.edV(v),new B.edW(v),new B.edX(v,e),w,w,w,w,w,w,w,w,w,w,new B.edY(v),w,w,w,!1,A.a8)},
$S:35}
B.edY.prototype={
$1(d){return this.a.c4c(d.b)},
$S:49}
B.edW.prototype={
$1(d){var w=this.a
return w.w=w.aXx(d.b)},
$S:42}
B.edX.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new B.edT(w,v,d,this.b))},
$S:18}
B.edT.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.u(A.k.D(t.b.a+s.a,26,r.b-26),A.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
B.edV.prototype={
$1(d){return this.a.w=null},
$S:37}
B.ee2.prototype={
$0(){var w=this.a
return w.m(new B.edU(w,this.b))},
$S:0}
B.edU.prototype={
$0(){var w=this.a
w.d=this.b
w.avM(0)},
$S:0}
B.ee3.prototype={
$0(){return this.a.c46(0,this.b.a)},
$S:0}
B.dmI.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[A.o.an(d,100)].b,i=k[A.o.G(d,100)].b,h=i.aC(0,j),g=new C.u(-h.b,h.a).eE(0,Math.max(h.gco(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.X()
m=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
m.r=A.ad.gp(0)
m.c=4
m.d=A.bO
l=m.H()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:128}
B.dMP.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dMO(w,d))},
$S:126}
B.dMO.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
B.dME.prototype={
$0(){var w,v,u=J.e3(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.aud[w.aB(4)]
return A.d.fW(u)},
$S:22}
B.dMD.prototype={
$1(d){return B.fUH(d)==="*"},
$S:3}
B.dMF.prototype={
$1(d){return d!==this.a},
$S:3}
B.dMC.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
B.vH("dna_lab",C.F(["best",r],x.N,x.z))}r=s.d
B.vK("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga8p()[r]+" codes for "+C.t(D.C1.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.b_y()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.L)(w),++u)r.push(D.C1.h(0,w[u]))
r="Protein built: "+A.d.aI(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
B.vK("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
B.dMN.prototype={
$3$ghost(d,e,f){var w=null,v=f?A.dp:e,u=C.m(8),t=f?C.I(A.b2,A.q,1):w
return C.p(A.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?A.b2:A.w,w,w,w,w,w,w,w,w,17,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new C.o(v,w,t,u,w,w,A.n),w,40,w,A.n4,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1840}
B.dMI.prototype={
$1(d){var w=D.dhy.h(0,d)
return w==null?A.c:w},
$S:722}
B.dMJ.prototype={
$0(){var w=this.a
return w.m(new B.dMH(w,this.b))},
$S:0}
B.dMH.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.av2()},
$S:0}
B.dMK.prototype={
$0(){var w=this.a
return w.m(new B.dMG(w))},
$S:0}
B.dMG.prototype={
$0(){var w=this.a;++w.e
w.av2()},
$S:0}
B.dML.prototype={
$0(){return this.a.aXv(this.b)},
$S:0}
B.dMM.prototype={
$0(){return this.a.aXv(this.b)},
$S:0}
B.dPE.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dPD(w,d))},
$S:126}
B.dPD.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
B.dPr.prototype={
$0(){},
$S:0}
B.dPq.prototype={
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
B.dPs.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
A.d.a9(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
B.dPw.prototype={
$1(d){var w=this.a
return w.m(new B.dPv(w,d))},
$S:6}
B.dPv.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dPx.prototype={
$1(d){var w=this.a
return w.m(new B.dPu(w,d))},
$S:6}
B.dPu.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.dPy.prototype={
$1(d){var w=this.a
return w.m(new B.dPt(w,d))},
$S:6}
B.dPt.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.dPz.prototype={
$0(){return this.a.a9B("drought")},
$S:0}
B.dPA.prototype={
$0(){return this.a.a9B("disease")},
$S:0}
B.dPB.prototype={
$0(){return this.a.a9B("foxes")},
$S:0}
B.dPC.prototype={
$0(){return this.a.a9B("rabbits")},
$S:0}
B.d24.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.eJ()
k.dB(A.o.N(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.aj()
p=k.aj()
o=(r&1)===0?1:-1
o=A.k.G(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.aj()
p=Math.sin(s+r*2)
n=new C.kp(new C.ep(e,l,l,A.cO,l,l,l,l,l,l,new C.G(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),A.a4,A.cc,new C.jo(1),l,l,l,l,A.ca,l)
n.eI()
n.a5(w,new C.u(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1842}
B.d26.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this.a.c
if(l.length<2)return
w=$.X()
v=C.a([],x.v)
u=new C.aP(w.r,A.ap,null,null,v)
for(w=this.b,t=w.a,s=w.c-t,r=w.d,w=r-w.b,q=0;q<l.length;++q){p=t+s*q/159
o=r-w*A.k.D(l[q][d]/e,0,1)
if(q===0){n=new C.b5(p,o)
v.push(n)
m=u.f
if(m!=null)n.bx(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}else{n=new C.ap(p,o)
v.push(n)
m=u.f
if(m!=null)n.bx(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}}$.X()
l=C.M()
l.b=A.ae
l.c=2.6
l.r=f.gp(0)
l.e=A.fz
this.c.aP(u,l)},
$S:1843}
B.d25.prototype={
$3(d,e,f){var w=null,v=C.i1(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),d),A.a4,A.cc,w,A.eh,A.ca)
v.eI()
v.a5(this.a,new C.u(f,this.b.b+2))},
$S:1844}
B.bEB.prototype={
$2(d,e){return d+e.a*e.b},
$S:1845}
B.flO.prototype={
$2(d,e){return e.a-d.a},
$S:1846}
B.dAd.prototype={
$2(d,e){return d+e},
$S:75}
B.dAq.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new B.dAp(v,A.k.D((v.gvD()-w[v.e].guH())/Math.max(w[v.e].guH(),8),-1,1)*0.32,u))},
$S:8}
B.dAp.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
B.dAr.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dAo(w,d))},
$S:126}
B.dAo.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gS(v))))
return this.a.r.v(0,w)},
$S:0}
B.dAe.prototype={
$0(){var w=this.a.f,v=this.b,u=A.o.G(w[v]+1,6)
w[v]=u
return u},
$S:0}
B.dAj.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1847}
B.dAk.prototype={
$0(){var w=this.a
return w.m(new B.dAi(w))},
$S:0}
B.dAi.prototype={
$0(){var w=this.a;++w.e
A.d.fZ(w.f,0,5,0)},
$S:0}
B.dAl.prototype={
$2(d,e){var w=null,v=this.a
return C.aE(A.c5,C.b3(w,w,w,new B.b8l(v.w,this.b.a,v.f,v.gvD()===v.d[v.e].guH(),w),A.f0),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.dAh(v,e),w,w,w,!1,A.a8)},
$S:35}
B.dAh.prototype={
$1(d){var w=this.b.b,v=A.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.cvE(v-1)},
$S:49}
B.dAm.prototype={
$0(){var w=this.a
return w.m(new B.dAg(w,this.b))},
$S:0}
B.dAg.prototype={
$0(){var w=this.a
w.e=this.b
A.d.fZ(w.f,0,5,0)},
$S:0}
B.dAn.prototype={
$0(){var w=this.a
return w.m(new B.dAf(w))},
$S:0}
B.dAf.prototype={
$0(){return A.d.fZ(this.a.f,0,5,0)},
$S:0}
B.cC7.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.bz(C.co(new C.u(d,s),20,w),A.rq)
$.X()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.r=f.gp(0)
p=q.H()
u.drawRRect(C.eq(r),p)
p.delete()
q=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=1.2
q.r=A.dA.gp(0)
p=q.H()
u.drawRRect(C.eq(r),p)
p.delete()
B.fkP(v,"1",new C.u(d,s),A.bh,11)}},
$S:1848}
B.dTH.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new B.dTG(w,v))},
$S:8}
B.dTG.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
B.dTI.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dTF(w,d))},
$S:126}
B.dTF.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gS(v))))
return this.a.w.v(0,w)},
$S:0}
B.dTx.prototype={
$0(){var w=A.k.V(this.c)
this.a.d[this.b]=w
return w},
$S:0}
B.dTB.prototype={
$0(){var w=this.a
return w.m(new B.dTA(w))},
$S:0}
B.dTA.prototype={
$0(){return this.a.r++},
$S:0}
B.dTC.prototype={
$0(){var w=this.a
return w.m(new B.dTz(w,this.b))},
$S:0}
B.dTz.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dTD.prototype={
$1(d){var w=this.a
return w.m(new B.dTy(w,d))},
$S:6}
B.dTy.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.dTE.prototype={
$1(d){return this.a.c4d(this.b,d)},
$S:6}
B.d9Q.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bO3(d,e,f,g),m=this.b
$.X()
w=C.M()
v=C.aq(h,A.c,i?0.1:0.35)
v.toString
u=C.aq(h,A.w,0.5)
u.toString
w.saq(new C.bS(A.A,0.5,A.x,null,0,C.a([v,h,u],x.O),null,null).av(0,C.bT(d,e+6)))
m.aP(n,w)
w=C.M()
w.b=A.ae
w.c=1.5
w.r=A.aX.gp(0)
m.aP(n,w)
w=C.M()
w.r=A.w.j(0.28).gp(0)
m.ah(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.hG.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.M()
w.r=A.aL.gp(0)
m.ah(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1849}
B.d9R.prototype={
$3(d,e,f){var w=this,v=w.b
return B.fkP(w.a,d,new C.u(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1850}
B.dEp.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dEo(w,d))},
$S:126}
B.dEo.prototype={
$0(){var w=C.a([],x.t),v=x.L.a(J.q(this.b,"done"))
v=J.aV(v==null?A.cu:v)
while(v.C())w.push(A.k.N(C.dQ(v.gS(v))))
return this.a.Q.v(0,w)},
$S:0}
B.dE7.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jE(90-(w-65)):d},
$S:14}
B.dEg.prototype={
$1(d){return this.a.m(new B.dEf())},
$S:2}
B.dEf.prototype={
$0(){},
$S:0}
B.dEh.prototype={
$1(d){return this.a.m(new B.dEe())},
$S:2}
B.dEe.prototype={
$0(){},
$S:0}
B.dEi.prototype={
$0(){var w=this.a
return w.m(new B.dEd(w))},
$S:0}
B.dEd.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aWe()},
$S:0}
B.dEj.prototype={
$0(){var w=this.a
return w.m(new B.dEc(w))},
$S:0}
B.dEc.prototype={
$0(){return this.a.f=0},
$S:0}
B.dEk.prototype={
$0(){var w=this.a
return w.m(new B.dEb(w))},
$S:0}
B.dEb.prototype={
$0(){return this.a.f=1},
$S:0}
B.dEl.prototype={
$0(){var w=this.a
return w.m(new B.dEa(w,this.b))},
$S:0}
B.dEa.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dEm.prototype={
$1(d){var w=this.a
return w.m(new B.dE9(w,d))},
$S:6}
B.dE9.prototype={
$0(){return this.a.w=A.k.V(this.b)},
$S:0}
B.dEn.prototype={
$1(d){var w=this.a
w.m(new B.dE8(w,d))
if(w.ga8T()&&w.Q.K(0,w.x)){B.vK("zap",9,220,0.45)
w=w.Q
w=C.B(w,C.a3(w).k("cn.E"))
B.vH("cipher_lab",C.F(["done",w],x.N,x.z))}},
$S:6}
B.dE8.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.bKu.prototype={
$1(d){return d.r<=0},
$S:z+61}
B.bKF.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
B.bKA.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
B.bKG.prototype={
$1(d){return this.a.Lc(d)&&!d.x},
$S:z+1}
B.bKH.prototype={
$2(d,e){return Math.max(d,this.a.azg(e))},
$S:z+6}
B.bKJ.prototype={
$2(d,e){var w=this.a
return w.cg(0,d.a+"."+e,new B.bKK(w))},
$S:z+5}
B.bKK.prototype={
$0(){return this.a.a},
$S:109}
B.bKI.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:76}
B.bKL.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new B.bKM(w))},
$S:z+5}
B.bKM.prototype={
$0(){return this.a.a},
$S:109}
B.bKw.prototype={
$2(d,e){var w=this.a
return w.cg(0,d.a+"."+e,new B.bKx(w))},
$S:z+5}
B.bKx.prototype={
$0(){return this.a.a},
$S:109}
B.bKv.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:76}
B.bKy.prototype={
$2(d,e){var w=this.a
return w.cg(0,this.b.$1(this.c.$2(d,e)),new B.bKz(w))},
$S:z+5}
B.bKz.prototype={
$0(){return this.a.a},
$S:109}
B.bKt.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
B.bKN.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
B.bKB.prototype={
$1(d){return d!==this.b&&this.a.aFi(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
B.bKE.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bKD.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
B.bKC.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bFN.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
B.bFO.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
B.cj6.prototype={
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
$S:201}
B.fCk.prototype={
$1(d){var w
$.X()
w=C.M()
w.r=d.gp(0)
return w},
$S:1851}
B.fCm.prototype={
$2(d,e){var w
$.X()
w=C.M()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bO
return w},
$S:1852}
B.fCn.prototype={
$5(d,e,f,g,h){return C.bz(new C.a9(d,e,d+f,e+g),new C.aW(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1853}
B.fCl.prototype={
$3(d,e,f){var w
$.X()
w=C.M()
w.saq(new C.a8(A.b0,A.b5,A.x,C.a([e,f],x.O),null,null).av(0,d))
return w},
$S:1854}
B.bFr.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bFs.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.bFq(w))},
$S:0}
B.bFq.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bFt.prototype={
$0(){return C.a([],x.ey)},
$S:1855}
B.bFu.prototype={
$1(d){return this.a.by(d).a>15e5},
$S:427}
B.bFv.prototype={
$0(){var w,v,u
J.bCF(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.C7(v))if(B.fV8(v.b))w.aZv(v)
else w.ZM(v)
else{u=w.a.c.bb2(v)
w.ad0(u==null?"The "+$.q5().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
B.bFp.prototype={
$1(d){return new C.e0(new B.bFn(this.a,this.b),null)},
$S:20}
B.bFn.prototype={
$2(d,e){var w=null,v=this.b,u=new B.bFo(this.a,v,e),t=$.q5(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.kY,w,w,w),q=C.aH(w,w,w,w,D.bF8,w,w,w,new B.bFj(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return C.bn(!0,new C.C(A.xp,C.v(C.a([r,A.at,D.fuS,A.S,C.A(C.a([q,C.D(C.kU(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bLI,w,w,w,new B.bFk(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),C.A(C.a([C.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b4,C.bK(!1,D.f96,w,w,!0,w,w,new B.bFl(u),w,w),C.bK(!1,A.zo,w,w,!0,w,w,new B.bFm(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.F,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:83}
B.bFo.prototype={
$1(d){var w=this.a
w.m(new B.bFh(this.b,d))
this.c.$1(new B.bFi())
w.a.toString},
$S:6}
B.bFh.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
B.bFi.prototype={
$0(){},
$S:0}
B.bFj.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
B.bFk.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
B.bFl.prototype={
$0(){return this.a.$1(1)},
$S:0}
B.bFm.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.bFK.prototype={
$2(d,e){var w
if(d==="short"){E.dF(1800,"",120,0,0.55,"noise")
E.dF(200,"",160,2.2,0.4,"saw")
C.fK()
w=this.a
if(w.c!=null)w.ad0("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dF(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.ad0("\u26a0 Overloaded! The "+$.q5().h(0,e.b).b+" can only give about "+A.k.aa(w.a.c.zo(e),2)+" amps but your gadgets are asking for "+A.k.aa(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.ad0("Burnt out! "+e.ay)
E.dF(140,"",320,0,0.6,"noise")
E.dF(900,"",160,1.5,0.35,"square")}},
$S:z+65}
B.bFL.prototype={
$0(){},
$S:0}
B.bEV.prototype={
$0(){},
$S:0}
B.bFM.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
B.bFJ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.at(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aE(A.c5,C.b3(p,p,p,new B.ahI(w,v,u,t,s,r==null?A.iW:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bFD(o),new B.bFE(o),new B.bFF(o),p,p,p,p,p,p,p,p,p,p,new B.bFG(o),p,p,p,!1,A.a8)],q)
if(o.a.c.a.length===0)n.push(D.b2X)
w=o.Q
if(w!=null){v=C.m(14)
u=C.I(A.ct,A.q,1)
n.push(C.ao(p,C.aE(p,C.p(p,C.A(C.a([D.f7o,C.D(C.d(w,p,p,p,p,p,p,D.f_H,p,p,p),1)],q),A.F,p,A.e,A.j,0,p,p),A.f,p,p,new C.o(D.b8d,p,u,v,p,p,A.n),p,p,p,p,A.nQ,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.bFH(o),p,p,p,p,p,p,!1,A.a8),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aXA(C.A(C.a([D.bw7,new B.fg(A.FE,"Cut wire",new B.bFI(o),A.ci,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.cdV(w),p,p,10,10,p,p))}return C.jt(new C.an(A.W,p,A.b_,A.r,n,p),A.r,p)},
$S:460}
B.bFE.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b5m(s)
if(r!=null){t.m(new B.bFB(t,r,d))
return}w=t.b_b(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.u(v*u.a,w.d*u.b).aC(0,s)
t.m(new B.bFC(t,w))}},
$S:42}
B.bFB.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
B.bFC.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bFF.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new B.bFz(w,d))
else if(w.w!=null)w.m(new B.bFA(w,d.b.ad(0,w.x)))},
$S:18}
B.bFz.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
B.bFA.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
B.bFD.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b5m(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.ajz(u.a,u.b,v.a,v.b)!=null)E.dF(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.acZ()},
$S:37}
B.bFG.prototype={
$1(d){var w=this.a,v=d.b,u=w.b_b(v)
if(u!=null){w.m(new B.bFx(w,u))
if(D.lS.ai(0,u.b))w.coi(u)
w.a.toString
return}w.m(new B.bFy(w,w.cAy(v)))},
$S:49}
B.bFx.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dF(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dF(200,"",70,0,0.2,"saw")}},
$S:0}
B.bFy.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
B.bFH.prototype={
$0(){var w=this.a
return w.m(new B.bFw(w))},
$S:0}
B.bFw.prototype={
$0(){return this.a.Q=null},
$S:0}
B.bFI.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dF(300,"",50,0,0.35,"noise")
w.acZ()},
$S:0}
B.bEW.prototype={
$0(){return this.a.bmW(this.b)},
$S:0}
B.bFe.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.A(C.a([C.d(d,w,w,w,w,w,w,D.eVk,w,w,w),C.D(C.kU(this.b.d,w,w,g,h,new B.bFg(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1856}
B.bFg.prototype={
$1(d){var w=this.a
w.m(new B.bFf(this.b,d))
w.a.toString},
$S:6}
B.bFf.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bF1.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dF(260,"",70,0,0.35,"noise")
w.acZ()},
$S:0}
B.bF2.prototype={
$0(){var w=this.a
return w.m(new B.bF0(w))},
$S:0}
B.bF0.prototype={
$0(){return this.a.d=null},
$S:0}
B.bF3.prototype={
$0(){this.a.m(new B.bF_(this.b,this.c))
E.dF(900,"",40,0,0.3,"noise")},
$S:0}
B.bF_.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.bF6.prototype={
$0(){return this.a.aZv(this.b)},
$S:0}
B.bF7.prototype={
$0(){return this.a.ZM(this.b)},
$S:0}
B.bF8.prototype={
$0(){return this.a.a0q(this.b)},
$S:0}
B.bF9.prototype={
$0(){var w=this.a
w.m(new B.bEZ(this.b,this.c))
w.a.toString},
$S:0}
B.bEZ.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.bFa.prototype={
$0(){var w=this.a
w.m(new B.bEY(this.b,this.c))
w.a.toString},
$S:0}
B.bEY.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
B.bFb.prototype={
$0(){var w=this.a
w.m(new B.bEX(this.b,this.c))
w.a.toString},
$S:0}
B.bEX.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bFc.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bFd.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bF4.prototype={
$1(d){return this.a.f=d},
$S:6}
B.bF5.prototype={
$1(d){return this.a.f=d},
$S:6}
B.fbQ.prototype={
$1(d){return d.aEX("bulb")},
$S:z+2}
B.fbR.prototype={
$1(d){return d.pv(0,"switch")&&d.aEX("bulb")},
$S:z+2}
B.fbS.prototype={
$1(d){return A.d.b8(d.a,new B.fbD())},
$S:z+2}
B.fbD.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
B.fbT.prototype={
$1(d){return d.pv(0,"resistor")&&A.d.b8(d.a,new B.fbC())},
$S:z+2}
B.fbC.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
B.fbU.prototype={
$1(d){return!d.pv(0,"battery")&&d.aEX("bulb")},
$S:z+2}
B.fbH.prototype={
$1(d){return A.d.b8(d.a,new B.fbB())},
$S:z+2}
B.fbB.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fbI.prototype={
$1(d){return A.d.b8(d.a,new B.fbA())},
$S:z+2}
B.fbA.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fbJ.prototype={
$1(d){return A.d.b8(d.a,new B.fbz())},
$S:z+2}
B.fbz.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
B.fbK.prototype={
$1(d){var w=d.a
return A.d.b8(w,new B.fbx())&&A.d.b8(w,new B.fby())&&d.pv(0,"buck")},
$S:z+2}
B.fbx.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
B.fby.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
B.fbL.prototype={
$1(d){var w=d.a
return A.d.b8(w,new B.fbv())&&A.d.b8(w,new B.fbw())},
$S:z+2}
B.fbv.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
B.fbw.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
B.fbM.prototype={
$1(d){return A.d.b8(d.a,new B.fbu())},
$S:z+2}
B.fbu.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
B.dPM.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a9(0)
w.v(0,v.b)},
$S:0}
B.dPV.prototype={
$1(d){var w=this.a.d
return w.aFi(d)&&w.C7(d)},
$S:z+1}
B.dPW.prototype={
$1(d){return d.x},
$S:z+1}
B.dPX.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
B.dPY.prototype={
$0(){},
$S:0}
B.dPL.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.fnR,A.at,D.f92,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.Po[v]
t=A.c.j(0.06)
s=new C.aW(14,14)
r=new C.aA(A.bF,1,A.q,-1)
n.push(C.aE(q,C.p(q,C.v(C.a([new C.x(u.a,q,A.kv,q,q,q,q,q,q,q,q,q),A.bB,new C.x(u.b,q,D.f0q,q,q,q,q,A.a2,q,3,q,q)],o),A.F,q,A.e,A.j,0,A.p),A.f,q,q,new C.o(t,q,new C.bP(r,r,r,r),new C.bq(s,s,s,s),q,q,A.n),q,q,q,A.cH,A.bk,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dPK(w,d,u),q,q,q,q,q,q,!1,A.a8))}return C.eG(q,F.ma,new C.C(A.bV,new C.a7(340,q,C.cB(n,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d0,q,new C.b7(p,A.Y),q)},
$S:47}
B.dPK.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.m(new B.dPJ(w,this.c))
E.dF(800,"",120,-0.5,0.3,"square")},
$S:0}
B.dPJ.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bga()},
$S:0}
B.dPH.prototype={
$1(d){return new B.UI(this.a.d,null)},
$S:z+67}
B.dPI.prototype={
$0(){},
$S:0}
B.dPU.prototype={
$1(d){return new C.e0(new B.dPT(this.a),null)},
$S:20}
B.dPT.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.agT(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.b7:A.aT
k=C.aI(d,m,x.m).w
w=l.r
v=x.p
u=C.a([C.A(C.a([D.flg,A.b4,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.O,C.bw(C.m(4),C.lZ(A.bF,m,m,5,m,w.a/11,new C.lS(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.fc3)
else{h=f.j(0.1)
t=C.m(14)
s=C.I(f.j(0.5),A.q,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Ag.SU,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.D3,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.v(C.a([r,A.at,q,new C.bH(A.a7,m,m,C.bK(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new B.dPR(l,e),m,m),m)],v),A.F,m,A.e,A.j,0,A.p),A.f,m,m,new C.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bk,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new C.aW(12,12)
n=new C.aA(o===l.f?f.j(0.6):A.dp,1,A.q,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.az:A.c
u.push(C.aE(m,C.p(m,new C.cm(A.aO,A.e,A.j,A.m,m,A.p,m,0,C.a([new C.x(s,m,A.a71,m,m,m,m,m,m,m,m,m),A.av,new C.bD(1,A.bi,new C.x(r.a,m,new C.G(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new C.o(h,m,new C.bP(n,n,n,n),new C.bq(t,t,t,t),m,m,A.n),m,m,m,A.eO,A.nQ,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.dPS(l,o,e),m,m,m,m,m,m,!1,A.a8))}return C.bn(!0,new C.cV(new C.aY(0,1/0,0,k.a.b*0.75),C.cB(u,m,A4.AP,m,m,A.ah,!0),m),!0,!1,A.af,!0,!0)},
$S:83}
B.dPR.prototype={
$0(){var w=this.a
w.m(new B.dPP(w))
this.b.$1(new B.dPQ())
w.Ey()},
$S:0}
B.dPP.prototype={
$0(){var w=this.a
$.agT()
return w.f=Math.min(11,w.f+1)},
$S:0}
B.dPQ.prototype={
$0(){},
$S:0}
B.dPS.prototype={
$0(){var w=this.a
w.m(new B.dPN(w,this.b))
this.c.$1(new B.dPO())
w.Ey()},
$S:0}
B.dPN.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.dPO.prototype={
$0(){},
$S:0}
B.dQ_.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
B.dQ0.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(C.m8("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return C.b(C.a6(t.b,!1).c8(C.e8(new B.dPZ(),!1,null,x.H)),$async$$0)
case 4:case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
B.dPZ.prototype={
$1(d){C.lj("construction")
return Al.hx9()},
$S:z+68}
B.dQ1.prototype={
$0(){return B.hjg(this.a,"ELECTRONICS LAB",this.b,A.aT)},
$S:0}
B.dQ2.prototype={
$0(){var w=this.a
return w.m(w.d.gcRC())},
$S:0}
B.dQ3.prototype={
$0(){var w=this.a,v=w.d
w.m(v.grl(v))
w.Ey()},
$S:0}
B.czF.prototype={
$2(d,e){var w=null,v=this.a.gavN().x
v===$&&C.c()
return C.b3(w,w,w,new B.b7t(v,w),A.au)},
$S:67}
B.czE.prototype={
$3(d,e,f){var w=new C.aP($.X().r,A.ap,null,null,C.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new C.b5(v,t))
w.E(new C.cS(v,u,v+e,u))
w.E(new C.cS(v,u,v,u+e))
w.E(new C.cS(v,u,v-e,u))
w.E(new C.cS(v,u,v,t))
w.E(new C.bF())
t=C.M()
t.r=A.c.j(f).gp(0)
this.a.aP(w,t)},
$S:668}
B.fGU.prototype={
$3(d,e,f){return new B.TZ(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+69}
B.fGV.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cY(e,!1,C.ij(A.A,g,null,new C.bf(C.cJ(A.cr,e,null),new C.bo(0.85,1,w),w.k("bf<bI.T>"))),null)},
$C:"$4",
$R:4,
$S:31}
B.dLI.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
B.dLH.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bVS(o):q.byQ(o,p),m=x.p
p=C.a([C.q8(new C.nb(n,new C.cx(p,x.aC)),A.pB,C.rF(),A.bc,A.bc,new B.dLF())],m)
n=t.d
if(n){w=A.k.G(q.gRe(),12)<4
v=w?150:96
u=C.m(16)
m=C.a([A.av],m)
if(w)m.push(D.bvU)
else m.push(A.b4)
m.push(C.p(s,s,A.f,s,s,new C.o(w?A.b7:A.aB,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.av)
p.push(C.ao(s,C.av(C.dh(s,C.A(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ev,new C.o(A.w,s,s,u,s,s,A.n),A.n_,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.un)p.push(C.ao(s,C.av(C.p(s,s,A.f,s,s,A.JL,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.w0)p.push(C.ao(s,C.p(s,s,A.f,s,s,A.JL,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aE(s,C.av(C.p(s,s,A.f,s,s,new C.o(A.c.j(0.75),s,s,C.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.dLG(q),s,s,s,s,s,s,!1,A.a8),s,s,0,0,s,s))
return C.bw(r,new C.an(A.W,s,A.b_,A.r,p,s),A.aq)},
$S:332}
B.dLF.prototype={
$2(d,e){var w=x.Y
return new C.cY(e,!1,C.ij(A.A,d,null,new C.bf(e,new C.bo(0.92,1,w),w.k("bf<bI.T>"))),null)},
$S:465}
B.dLG.prototype={
$0(){var w=this.a
return w.m(new B.dLE(w))},
$S:0}
B.dLE.prototype={
$0(){return this.a.e=null},
$S:0}
B.dLD.prototype={
$0(){var w=this.a
return w.m(new B.dLC(w,this.b))},
$S:0}
B.dLC.prototype={
$0(){return this.a.e=A.d.cJ(F.k_,this.b)},
$S:0}
B.dLB.prototype={
$0(){var w=this.a
return w.m(new B.dLA(w))},
$S:0}
B.dLA.prototype={
$0(){return this.a.e=0},
$S:0}
B.dLw.prototype={
$0(){var w=this.a
return w.m(new B.dLv(w))},
$S:0}
B.dLv.prototype={
$0(){return this.a.e=null},
$S:0}
B.dLz.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.m(o?20:8),m=A.w.j(0.55),l=x.p
m=C.p(p,C.A(C.a([D.ftm,A.av,C.D(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eC,p,p,p,D.f6j,p,p,p),1),C.d(A.a.aT(A.o.u(C.di(new C.S(Date.now(),0,!1))),2,"0")+":"+A.a.aT(A.o.u(C.fY(new C.S(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qf,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.l9,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new B.btu(w.gRe(),this.c.d,p),A.au)],l)
o=w.e
if(o!=null){u=C.m(10)
t=C.I(A.b2,A.q,1)
s=C.m(10)
o=C.p(p,C.A(C.a([C.aE(p,C.p(p,p,A.f,p,p,A.a9V,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new B.dLy(w),p,p,p,p,p,p,!1,A.a8),A.eb,C.p(p,p,A.f,p,p,A.aa0,p,12,p,p,p,p,p,12),A.eb,C.p(p,p,A.f,p,p,D.aZo,p,12,p,p,p,p,p,12),A.av,C.D(C.d(F.k_[o].a,p,1,A.a2,p,p,p,A.a6S,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cC,p,p,p,24,p,p,A.fo,p,p,p)
r=w.e
r.toString
v.push(C.bZ(0,new C.C(D.bsJ,C.p(p,C.bw(s,C.v(C.a([o,C.D(C.b3(p,p,p,new B.adI(r,w.gRe(),p),A.f0),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new C.o(A.w,p,t,u,D.daB,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=C.m(18)
t=C.I(A.b2,A.q,1)
s=C.a([],l)
for(q=0;q<8;++q)s.push(new C.C(A.je,w.atL(F.k_[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.A(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new C.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lb,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bw(n,C.p(p,C.v(C.a([m,C.D(new C.an(A.W,p,A.b_,A.r,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,R.KP,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:332}
B.dLy.prototype={
$0(){var w=this.a
return w.m(new B.dLx(w))},
$S:0}
B.dLx.prototype={
$0(){return this.a.e=null},
$S:0}
B.e6g.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new B.e6f(w,d))},
$S:126}
B.e6f.prototype={
$0(){var w=this.a,v=this.b,u=J.a5(v),t=C.aJ(u.h(v,"best"))
t=t==null?null:A.k.N(t)
w.e=t==null?0:t
v=C.aJ(u.h(v,"level"))
v=v==null?null:A.k.N(v)
if(v==null)v=0
w.d=v
w.f=B.fVe(v)},
$S:0}
B.e6h.prototype={
$0(){},
$S:0}
B.e66.prototype={
$0(){var w=this.a,v=A.o.D(this.b,0,59)
w.d=v
w.f=B.fVe(v)
w.r.a9(0)
w.x=!1},
$S:0}
B.e67.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gvc().r){C.jM()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
B.vK("click",s.c+s.d,60,0.4)
if(B.hjp(r.gvc(),q).b.a===r.gvc().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}B.vH("laser_maze",C.F(["best",p,"level",Math.min(q,59)],x.N,x.z))
B.Bi("bell",D.anT,700,0.45)
for(q=r.gvc().c,q=C.ec(q,q.r,C.a3(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.y(new C.u((A.o.G(t,7)+0.5)*p+w,(A.o.an(t,7)+0.5)*p+v),0))}}},
$S:0}
B.e6a.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.at(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aE(A.c5,C.b3(s,s,s,new B.bfu(r.gvc(),w,v.a,u,r.w,r.z,s),q),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new B.e68(r),s,s,s,!1,A.a8),C.ao(s,C.e1(C.A(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,L.aOB,s,s,s),C.d(""+u.a+"/"+r.gvc().c.a+" \u2605   mirrors "+w.a+"/"+r.gvc().r,s,s,s,s,s,s,V.a6D,s,s,s)],t),A.m,s,A.hM,A.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(B.fg6("Beam delivered! \u2605","Level "+(r.d+1)+" done.",A.b7,C.a([new B.fg(A.iz,"Next level",new B.e69(r),A.b7,s)],t)))
return new C.an(A.W,s,A.b_,A.r,w,s)},
$S:61}
B.e68.prototype={
$1(d){return this.a.c4z(d.b)},
$S:49}
B.e69.prototype={
$0(){var w=this.a
return w.ad4(w.d+1)},
$S:0}
B.e6b.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.grl(v))},
$S:0}
B.e6c.prototype={
$0(){var w=this.a
return w.ad4(w.d+1)},
$S:0}
B.e6d.prototype={
$0(){var w=this.a
return w.ad4(w.d-1)},
$S:0}
B.e6e.prototype={
$0(){return this.a.ad4(this.b)},
$S:0}
B.deV.prototype={
$1(d){var w=this.b
return new C.u(this.a+(A.o.G(d,7)+0.5)*w,this.c+(A.o.an(d,7)+0.5)*w)},
$S:723}
B.deY.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.u(r,s):new C.u(r,r),p=new C.u(-q.a,-q.b)
r=this.c
w=t.ad(0,q)
v=t.ad(0,p)
$.X()
u=C.M()
u.r=(f?A.hi:A.aL).gp(0)
u.c=7
u.d=A.bO
r.bA(w,v,u)
w=t.ad(0,q)
v=t.ad(0,p)
u=C.M()
u.r=A.c.gp(0)
u.c=2.4
u.d=A.bO
r.bA(w,v,u)},
$S:1858}
B.deW.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:366}
B.deX.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:366}
B.e6z.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.e6y(w,d))},
$S:126}
B.e6y.prototype={
$0(){var w=C.aJ(J.q(this.b,"best"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
B.e6A.prototype={
$0(){},
$S:0}
B.e6k.prototype={
$1(d){return d===0},
$S:125}
B.e6t.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],A.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,L.a6M,s,s,s)
w=r.z==="play"?A.k.dw(r.y):20
v=x.p
w=C.A(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?A.ci:A.c,s,s,s,s,s,s,s,s,18,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,V.a6D,s,s,s)],v),A.m,s,A.hM,A.j,0,s,s)
q=r.z==="ready"
u=q?A.dp:p
t=C.m(22)
t=C.D(C.p(s,s,A.f,s,s,new C.o(u,s,C.I(A.b2,A.q,2),t,s,s,A.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.v(C.a([new C.C(D.bq3,w,s),C.D(C.A(C.a([C.D(new C.C(A.bS,C.v(C.a([t,A.an,C.d(q?"TARGET":"TARGET: "+r.gcvH(),s,s,s,s,s,s,D.aPp,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1),C.D(new C.C(A.bS,C.v(C.a([C.D(C.b3(s,s,s,new B.bfJ(r.f,s),A.f0),1),A.an,C.d("YOURS \xb7 "+A.k.V(A.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aPp,s,s,s)],v),A.m,s,A.e,A.j,0,A.p),s),1)],v),A.m,s,A.e,A.j,0,s,s),1)],v),A.m,s,A.e,A.j,0,A.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(B.fg6("Light Mixer","Match each colour with red, green and blue light."+q,A.b8,C.a([new B.fg(A.iT,"Start",new B.e6q(r),A.b7,s)],v)))}if(r.z==="result")w.push(B.fg6(r.Q,"Score so far: "+r.w,A.aM,C.a([new B.fg(A.iz,"Next colour",new B.e6r(r),A.b7,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(B.fg6("Finished! "+q,u,A.b7,C.a([new B.fg(A.mn,"Play again",new B.e6s(r),A.b7,s)],v)))}return new C.an(A.W,s,A.aa,A.r,w,s)},
$S:61}
B.e6q.prototype={
$0(){var w=this.a
return w.m(new B.e6m(w))},
$S:0}
B.e6m.prototype={
$0(){var w=this.a
w.w=w.r=0
w.avR()},
$S:0}
B.e6r.prototype={
$0(){var w=this.a
return w.m(w.gc4x())},
$S:0}
B.e6s.prototype={
$0(){var w=this.a
return w.m(new B.e6l(w))},
$S:0}
B.e6l.prototype={
$0(){var w=this.a
w.w=w.r=0
w.avR()},
$S:0}
B.e6u.prototype={
$1(d){var w=this.a
return w.m(new B.e6p(w,d))},
$S:6}
B.e6p.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
B.e6v.prototype={
$1(d){var w=this.a
return w.m(new B.e6o(w,d))},
$S:6}
B.e6o.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
B.e6w.prototype={
$1(d){var w=this.a
return w.m(new B.e6n(w,d))},
$S:6}
B.e6n.prototype={
$0(){var w=A.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
B.e6x.prototype={
$0(){var w=this.a
return w.m(w.gc4y())},
$S:0}
B.fcx.prototype={
$0(){return D.dWP},
$S:z+70}
B.fcy.prototype={
$0(){return D.du3},
$S:z+71}
B.fcz.prototype={
$0(){return D.dqB},
$S:z+72}
B.fcA.prototype={
$0(){return D.dtu},
$S:z+73}
B.fcB.prototype={
$0(){return D.dyp},
$S:z+74}
B.fcC.prototype={
$0(){return D.dSy},
$S:z+75}
B.fcD.prototype={
$0(){return D.dUK},
$S:z+76}
B.fcE.prototype={
$0(){return D.dxJ},
$S:z+77}
B.cdK.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
B.cdL.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.hmR(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aW(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ac(0,A.G,p.j(0.4),A.dk,16)],t)
n=A.c.j(0.85)
j.push(C.aE(m,C.p(m,new C.an(A.W,m,A.aa,A.r,C.a([new C.cL(m,-6,-6,m,m,m,new C.x(r.c,m,K.ST,m,m,m,m,m,m,m,m,m),m),new C.bH(A.lu,m,m,C.v(C.a([new C.x(r.a,m,D.f4V,m,m,m,m,m,m,m,m,m),A.cX,new C.x(r.b,m,new C.G(!0,n,m,m,m,m,12,A.a5,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.F,m,A.e,A.Q,0,A.p),m)],k),m),A.f,m,m,new C.o(m,m,m,new C.bq(q,q,q,q),p,new C.a8(A.ax,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bC,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new B.cdJ(d,r),m,m,m,m,m,m,!1,A.a8))}return C.bY(A.bz,j,A.br,14,14)},
$S:172}
B.cdJ.prototype={
$0(){return C.a6(this.a,!1).c8(C.e8(new B.cdI(this.b),!1,null,x.H))},
$S:0}
B.cdI.prototype={
$1(d){return this.a.f.$0()},
$S:40}
B.eFs.prototype={
$0(){var w=this.a
return w.w=w.d[w.b2B(w.f)]},
$S:0}
B.eFo.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cI.aj()*7},
$S:0}
B.eFn.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bN(0,A.c3)
w.w=""},
$S:0}
B.eFq.prototype={
$0(){var w=this.a
return w.m(new B.eFp(w,this.b))},
$S:0}
B.eFp.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cA(w,this.b)},
$S:0}
B.eFr.prototype={
$1(d){return this.a.aY_(0)},
$S:2}
B.dS_.prototype={
$0(){return B.Bi("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
B.dS0.prototype={
$0(){},
$S:0}
B.dRV.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
B.dRX.prototype={
$0(){return this.a.aY1(this.b)},
$S:0}
B.dRY.prototype={
$0(){var w=this.a
return w.m(new B.dRW(w))},
$S:0}
B.dRW.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
B.dRZ.prototype={
$0(){var w=this.a
return w.aY1(w.d)},
$S:0}
B.dCQ.prototype={
$2(d,e){return d+e},
$S:87}
B.dCR.prototype={
$0(){},
$S:0}
B.dCL.prototype={
$2(d,e){return d+e},
$S:87}
B.dCO.prototype={
$0(){var w=this.a
return w.m(new B.dCN(w,this.b))},
$S:0}
B.dCN.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
B.dCP.prototype={
$0(){var w=this.a
return w.m(new B.dCM(w))},
$S:0}
B.dCM.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
B.dPg.prototype={
$0(){return B.qI(this.b,this.a.d,"drawing")},
$S:0}
B.dPh.prototype={
$1(d){var w=this.a
return w.m(new B.dPf(w,d))},
$S:42}
B.dPf.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aGR(u,v,t))},
$S:0}
B.dPi.prototype={
$1(d){var w=this.a
return w.m(new B.dPe(w,d))},
$S:18}
B.dPe.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
B.dPj.prototype={
$1(d){var w=this.a
return w.m(new B.dPd(w,d))},
$S:23}
B.dPd.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new B.aGR(u,v,t))},
$S:0}
B.dPk.prototype={
$0(){var w=this.a
return w.m(new B.dPc(w,this.b))},
$S:0}
B.dPc.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
B.dPl.prototype={
$1(d){var w=this.a
return w.m(new B.dPb(w,d))},
$S:6}
B.dPb.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dPm.prototype={
$0(){var w=this.a
return w.m(new B.dPa(w))},
$S:0}
B.dPa.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dPn.prototype={
$0(){var w=this.a
return w.m(new B.dP9(w))},
$S:0}
B.dP9.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
B.dPo.prototype={
$0(){var w=this.a
return w.m(A.d.grl(w.e))},
$S:0}
B.dPp.prototype={
$0(){var w=this.a
return w.m(new B.dP8(w))},
$S:0}
B.dP8.prototype={
$0(){var w=this.a
w.x=D.auI[A.o.G(A.d.cJ(D.auI,w.x)+1,4)]},
$S:0}
B.ebW.prototype={
$0(){return this.a.f.K(0,this.b)},
$S:0}
B.ebX.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
B.Bi("bell",C.a([0,4,7],w),500,0.45)
u.m(new B.ebV(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)B.Bi("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
B.ebV.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a9(0)},
$S:0}
B.ebY.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new B.ebU(w))},
$S:11}
B.ebU.prototype={
$0(){var w=this.a
w.f.a9(0)
w.x=!1},
$S:0}
B.ec1.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aE(w,C.mz(new B.ec_(v,e),w,A.bc,A.pB,w,w,new C.bo(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.ec0(v,e),w,w,w,w,w,w,!1,A.a8)},
$S:74}
B.ec0.prototype={
$0(){return this.a.c5u(this.b)},
$S:0}
B.ec_.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dm(),m=n.a
m.$flags&2&&C.ai(m)
m[11]=0.001
n.fz(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bUo
if(o)v=q.a.r.t(0,q.b)?A.b7.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?A.b7:A.b2,A.q,1)
if(o){r=C.dm()
r.fz(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fs(A.A,C.d(u[t],p,p,p,p,p,p,D.f2j,p,p,p),p,r,!0)
u=r}else u=D.fmC
return C.fs(A.A,C.p(A.A,u,A.f,p,p,new C.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:140}
B.ec2.prototype={
$0(){var w=this.a
return w.m(new B.ebZ(w,this.b))},
$S:0}
B.ebZ.prototype={
$0(){var w=this.a
w.d=this.b.a
w.ar4()},
$S:0}
B.ec3.prototype={
$0(){var w=this.a
return w.m(w.gbHq())},
$S:0}
B.ems.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
B.emt.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
B.emq.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.emr.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new B.emp(w))},
$S:11}
B.emp.prototype={
$0(){return this.a.f=-1},
$S:0}
B.emu.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
B.emv.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
B.emw.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aY0()},
$S:11}
B.emx.prototype={
$0(){return this.a.c5A(this.b)},
$S:0}
B.eAK.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:68}
B.eAT.prototype={
$3$big(d,e,f){var w=null,v=C.D(C.d(d,w,1,A.a2,w,w,w,C.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.C(A.kI,C.A(C.a([v,A.ab,new C.dq(1,A.cj,C.f3(A.A,C.d(e,w,w,w,w,w,w,C.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.eg),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1860}
B.eAP.prototype={
$1(d){return this.a.m(new B.eAO())},
$S:2}
B.eAO.prototype={
$0(){},
$S:0}
B.eAQ.prototype={
$0(){var w=this.a
return w.m(new B.eAN(w,this.b))},
$S:0}
B.eAN.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eAR.prototype={
$1(d){var w=this.a
return w.m(new B.eAM(w,d))},
$S:6}
B.eAM.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
B.eAS.prototype={
$0(){var w=this.a
return w.m(new B.eAL(w))},
$S:0}
B.eAL.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.eaB.prototype={
$0(){},
$S:0}
B.eaC.prototype={
$0(){},
$S:0}
B.eau.prototype={
$0(){var w=this.a
return w.m(new B.eat(w))},
$S:0}
B.eat.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c2(u,1,!1,x.S)
w.r=0.9
B.a7u("hat",0.6)},
$S:0}
B.eav.prototype={
$0(){var w=this.a
return w.m(new B.eas(w))},
$S:0}
B.eas.prototype={
$0(){this.a.y=1.1
B.ld("bell",36,200,0.4)},
$S:0}
B.eaw.prototype={
$0(){var w=this.a
return w.m(new B.ear(w))},
$S:0}
B.ear.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aB(Math.max(v,u)-t+1)
w.as=u
B.ld("bell",12+A.o.G(u,12),500,0.5)},
$S:0}
B.eax.prototype={
$0(){var w=this.a
return w.m(new B.eaq(w,this.b))},
$S:0}
B.eaq.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.eay.prototype={
$1(d){var w=this.a
return w.m(new B.eap(w,d))},
$S:6}
B.eap.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e3(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
B.eaz.prototype={
$1(d){var w=this.a
return w.m(new B.eao(w,d))},
$S:6}
B.eao.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
B.eaA.prototype={
$1(d){var w=this.a
return w.m(new B.ean(w,d))},
$S:6}
B.ean.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
B.cqx.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
B.cqy.prototype={
$0(){var w=this.a
return B.hjg(this.b,w.c,w.e,w.d)},
$S:0}
B.fKK.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.eVR,v,v,v)
return C.ej(C.a([C.bK(!1,D.fc8,v,v,!0,v,v,new B.fKJ(d),v,v)],x.p),v,v,F.mW,w,v,v,v,new C.b7(u,new C.aA(s,1,A.q,-1)),t,v)},
$S:19}
B.fKJ.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.cqt.prototype={
$0(){C.eS()
this.a.e.$0()},
$S:0}
B.cqs.prototype={
$0(){C.eS()
this.a.e.$0()},
$S:0}
B.cqz.prototype={
$0(){C.eS()
this.a.e.$0()},
$S:0}
B.cqu.prototype={
$0(){var w=this.a
A.d.W(w.fk$,this.b.bf())
if(w.c!=null)this.c.$0()},
$S:0}
B.cqw.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.kX$.a)/1e6,0,0.04)
w.kX$=d
w.fP$=A.o.an(v,1000)
w.lr(u)
if(w.c!=null)w.m(new B.cqv())},
$S:8}
B.cqv.prototype={
$0(){},
$S:0}
B.cdG.prototype={
$0(){var w=this
return B.ld(w.a,w.b,w.c,w.d)},
$S:1}
B.dUI.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new B.dUH(w,d))},
$S:z+79}
B.dUH.prototype={
$0(){return this.a.cpZ(this.b)},
$S:0}
B.dUa.prototype={
$0(){var w,v,u,t=this.a,s=J.a5(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:703}
B.dU8.prototype={
$0(){return this.a.id=D.a22},
$S:0}
B.dU9.prototype={
$0(){var w=this.b.a,v=C.U(w).k("a2<1>")
v=C.p6(new C.a2(w,new B.dU7(this.c),v),6,v.k("J.E"))
w=C.B(v,C.a3(v).k("J.E"))
return this.a.id=w},
$S:0}
B.dU7.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+80}
B.dU6.prototype={
$1(d){var w=null,v=C.cd(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.r,w,A.y,w,w,w,w,A.ah)
return C.ej(C.a([C.bK(!1,A.qg,w,w,!0,w,w,new B.dU5(d),w,w)],x.p),w,w,F.mW,v,w,w,w,w,D.fmG,w)},
$S:19}
B.dU5.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
B.dUt.prototype={
$0(){return B.qI(this.b,this.a.d,"earth")},
$S:0}
B.dUu.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gVr()
r=p.z
o=C.a([C.aE(A.c5,C.b3(q,q,q,new B.bdV(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dUh(p),new B.dUi(p),new B.dUj(p),q,q,q,q,q,q,q,new B.dUk(p),q,q,q,!1,A.a8)],x.p)
if(p.r==null)o.push(Aa.aaD)
w=this.b
if(w!=null)o.push(C.ao(8,p.c6b(w),q,q,10,10,q,q))
return new C.et(new C.an(A.W,q,A.b_,A.r,o,q),p.d)},
$S:199}
B.dUi.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:234}
B.dUj.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gVr()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:211}
B.dUh.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gVr()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:577}
B.dUk.prototype={
$1(d){var w=this.a,v=w.c6e(d.b)
if(v!=null)w.m(new B.dUb(w,v))
else w.m(new B.dUc(w))},
$S:49}
B.dUb.prototype={
$0(){return this.a.awk(this.b)},
$S:0}
B.dUc.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dUv.prototype={
$0(){var w=this.a
w.e.bN(0,A.c3)
w.m(new B.dUg(w,this.b))},
$S:0}
B.dUg.prototype={
$0(){var w=this.a
w.id=D.a22
w.awk(this.b)},
$S:0}
B.dUz.prototype={
$0(){var w=this.a
return w.m(new B.dUs(w))},
$S:0}
B.dUs.prototype={
$0(){var w=this.a
w.fx=null
w.asf(15,w.y,1)},
$S:0}
B.dUA.prototype={
$0(){var w=this.a
return w.m(new B.dUr(w,this.b))},
$S:0}
B.dUr.prototype={
$0(){var w=this.b.b
return this.a.asf(w.a,w.b,w.c)},
$S:0}
B.dUB.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new B.dUq(w,v))},
$S:0}
B.dUq.prototype={
$0(){var w=this.b.a
return this.a.awk(w[A.cI.aB(w.length)])},
$S:0}
B.dUC.prototype={
$1(d){var w=this.a
return w.m(new B.dUp(w,d))},
$S:6}
B.dUp.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
B.dUD.prototype={
$1(d){var w=this.a
return w.m(new B.dUo(w,d))},
$S:6}
B.dUo.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.dUE.prototype={
$1(d){var w=this.a
return w.m(new B.dUn(w,d))},
$S:6}
B.dUn.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.dUF.prototype={
$0(){var w=this.a
return w.m(new B.dUm(w))},
$S:0}
B.dUm.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
B.dUG.prototype={
$0(){var w=this.a
return w.m(new B.dUl(w))},
$S:0}
B.dUl.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
B.dUw.prototype={
$0(){var w=this.a
return w.m(new B.dUf(w))},
$S:0}
B.dUf.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
B.dUx.prototype={
$0(){var w=this.a
return w.m(new B.dUe(w))},
$S:0}
B.dUe.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
B.dUy.prototype={
$0(){var w=this.a
return w.m(new B.dUd(w))},
$S:0}
B.dUd.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
B.dU4.prototype={
$2(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aO1,w,w,w),A.uq,C.d(e,w,2,A.a2,w,w,w,A.Td,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:139}
B.dU3.prototype={
$0(){var w=this.a
return w.m(new B.dU2(w))},
$S:0}
B.dU2.prototype={
$0(){return this.a.fx=null},
$S:0}
B.daF.prototype={
$0(){var w=null,v=C.i1(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.cVt,w,w),this.a),A.a4,A.cc,w,A.eh,A.ca)
v.eI()
return v},
$S:294}
B.daG.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.u(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1861}
B.fcq.prototype={
$0(){return D.dw0},
$S:z+81}
B.fcr.prototype={
$0(){return D.dUs},
$S:z+82}
B.fcs.prototype={
$0(){return D.dw2},
$S:z+83}
B.fct.prototype={
$0(){return D.dqn},
$S:z+84}
B.fcu.prototype={
$0(){return D.dvZ},
$S:z+85}
B.fcv.prototype={
$0(){return D.dSz},
$S:z+86}
B.fcw.prototype={
$0(){return D.dSx},
$S:z+87}
B.eBD.prototype={
$0(){return C.a6(this.a,!1).lN()},
$S:0}
B.eBE.prototype={
$0(){var w=this.a
return w.m(new B.eBC(w))},
$S:0}
B.eBC.prototype={
$0(){var w=this.a
return w.d=A.o.G(w.gaQY()+1,16)},
$S:0}
B.eBF.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hmQ(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aW(18,18)
q=s.d
p=new C.aA(q.j(0.5),1,A.q,-1)
o=C.a([q.j(0.28),D.bfV],u)
k.push(C.aE(n,C.p(n,C.v(C.a([C.W(s.c,q,n,n,n,30),A.O,new C.x(s.a,n,D.f_h,n,A.L,n,n,n,n,2,n,n),A.cX,new C.x(s.b,n,D.f4j,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.bb,A.j,0,A.p),A.f,n,n,new C.o(n,n,new C.bP(p,p,p,p),new C.bq(r,r,r,r),n,new C.a8(A.ax,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.ck,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eBB(d,s),n,n,n,n,n,n,!1,A.a8))}return C.bY(A.fQ,k,A.br,10,10)},
$S:172}
B.eBB.prototype={
$0(){return C.a6(this.a,!1).c8(C.e8(new B.eBA(this.b),!1,null,x.H))},
$S:0}
B.eBA.prototype={
$1(d){return this.a.e.$0()},
$S:40}
B.etG.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
B.etR.prototype={
$0(){return B.qI(this.b,this.a.d,"solar-system")},
$S:0}
B.etS.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.at(e.b,e.d)
u.ch=t
t=C.a([C.aE(A.c5,C.b3(v,v,v,new B.bqj(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.etO(u),new B.etP(u),v,v,v,v,v,v,v,new B.etQ(u),v,v,v,!1,A.a8)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c6g(w),v,v,10,10,v,v))
return new C.et(new C.an(A.W,v,A.b_,A.r,t,v),u.d)},
$S:199}
B.etO.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:234}
B.etP.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:211}
B.etQ.prototype={
$1(d){var w=this.a,v=w.c6j(d.b)
if(v!=null)w.aYm(v)},
$S:49}
B.etT.prototype={
$0(){var w=this.a
return w.m(new B.etN(w))},
$S:0}
B.etN.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
B.etU.prototype={
$0(){return this.a.aYm(this.b)},
$S:0}
B.etV.prototype={
$1(d){var w=this.a
return w.m(new B.etM(w,d))},
$S:6}
B.etM.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.etW.prototype={
$1(d){var w=this.a
return w.m(new B.etL(w,d))},
$S:6}
B.etL.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.etX.prototype={
$0(){var w=this.a
return w.m(new B.etK(w))},
$S:0}
B.etK.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
B.etY.prototype={
$0(){var w=this.a
return w.m(new B.etJ(w))},
$S:0}
B.etJ.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
B.etZ.prototype={
$0(){var w=this.a
return w.m(new B.etI(w))},
$S:0}
B.etI.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
B.eu_.prototype={
$0(){var w=this.a
return w.m(new B.etH(w))},
$S:0}
B.etH.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
B.etF.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.aa(d/365.25,w)+" Earth years"}else w=A.k.aa(d,0)+" Earth days"
return w},
$S:297}
B.etE.prototype={
$2(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aO1,w,w,w),A.uq,C.d(e,w,2,A.a2,w,w,w,A.Td,w,w,w)],x.p),A.F,w,A.e,A.j,0,A.p),1)},
$S:139}
B.etD.prototype={
$0(){var w=this.a
return w.m(new B.etC(w))},
$S:0}
B.etC.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
B.eVP.prototype={
$0(){var w=null,v=C.i1(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,L.Pw,w,w),this.a),A.a4,A.cc,w,A.eh,A.ca)
v.eI()
return v},
$S:294}
B.eVQ.prototype={
$1(d){return d.c>0},
$S:z+10}
B.eVR.prototype={
$1(d){return d.c>0},
$S:z+10}
B.dUM.prototype={
$0(){},
$S:0}
B.dVe.prototype={
$1(d){return d!=null},
$S:390}
B.dV0.prototype={
$0(){var w=this.a
return w.m(new B.dUS(w,this.b))},
$S:0}
B.dUS.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.dV1.prototype={
$0(){var w=this.a
return w.m(new B.dUR(w))},
$S:0}
B.dUR.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dV2.prototype={
$0(){var w=this.a
return w.m(new B.dV_(w))},
$S:0}
B.dV_.prototype={
$0(){return this.a.f=!0},
$S:0}
B.dV6.prototype={
$0(){var w=this.a
return w.m(new B.dUZ(w))},
$S:0}
B.dUZ.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
B.dV7.prototype={
$1(d){var w=this.a
return w.m(new B.dUY(w,d))},
$S:6}
B.dUY.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dV8.prototype={
$0(){var w=this.a
return w.m(w.gct9())},
$S:0}
B.dV9.prototype={
$1(d){var w=this.a
return w.m(new B.dUX(w,d))},
$S:6}
B.dUX.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.dVa.prototype={
$1(d){var w=this.a
return w.m(new B.dUW(w,d))},
$S:6}
B.dUW.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dVb.prototype={
$1(d){var w=this.a
return w.m(new B.dUV(w,d))},
$S:6}
B.dUV.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.dVc.prototype={
$1(d){var w=this.a
return w.m(new B.dUU(w,d))},
$S:6}
B.dUU.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.dVd.prototype={
$0(){var w=this.a
return w.m(new B.dUT(w))},
$S:0}
B.dUT.prototype={
$0(){return this.a.ay=4},
$S:0}
B.dV3.prototype={
$0(){var w=this.a
return w.m(new B.dUQ(w))},
$S:0}
B.dUQ.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.dV4.prototype={
$0(){var w=this.a
return w.m(new B.dUP(w))},
$S:0}
B.dUP.prototype={
$0(){return this.a.ay=9},
$S:0}
B.dV5.prototype={
$0(){var w=this.a
return w.m(new B.dUO(w))},
$S:0}
B.dUO.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.dUL.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bZ(0,C.c_(g,new C.o(D.ber,g,g,C.m(20),g,g,A.n),A.bd),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.yu[q]
n=C.b0(o.d)
o=C.v(C.a([new C.x(o.a,g,new C.G(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.x(C.t(D.yu[q].b)+" m/s\xb2",g,D.f3G,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=C.p(g,g,A.f,A.dp,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.W(Z.MF,C.b0(D.yu[q].d),g,g,g,22):C.p(g,g,A.f,g,g,new C.o(C.b0(D.yu[q].d),g,g,g,C.a([new C.ac(0,A.G,C.b0(D.yu[q].d).j(0.6),A.J,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,A.f,C.b0(D.yu[q].d).j(0.6),g,g,g,3,g,A.fo,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.aa(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,C.a([new C.cL(p,8,g,g,f,g,o,g),new C.cL(n-0.5,54,g,e,g,g,m,g),new C.cL(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cL(p,g,g,8,f,g,C.v(C.a([j,A.at,new C.x(i,g,A.rD,g,g,g,g,g,g,g,g,g),new C.x(h,g,D.eX1,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.da(v,new B.dUK()))a1.push(D.b3h)
return new C.an(A.W,g,A.aa,A.r,a1,g)},
$S:61}
B.dUK.prototype={
$1(d){return d==null},
$S:390}
B.dUN.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,A.f,v,v,new C.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.dh(v,v,v,v,A.bc,new C.o(v,v,v,C.m(8),v,new C.a8(A.a3,A.a7,A.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),A.n),A.i8,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.aa(r,1):B.Gl(r)
u=u.ax*9.81/s
u=u<10?A.k.aa(u,2):A.k.aa(u,0)
return new C.an(A.W,v,A.aa,A.r,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.f24,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:61}
B.dUJ.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new B.b97(new C.u(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.au)
o=A.w.j(0.55)
p=C.m(14)
q=C.I(A.bF,A.q,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.b7
else u=A.a.t(u,"escapes")?A.aT:A.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.aa(Math.sqrt(58.86870477034412),1)
s=A.k.aa(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+B.Gl(A.k.D(r.cx.gco()-6371,0,9e9))+" km":""
w=x.p
return new C.an(A.W,v,A.b_,A.r,C.a([n,C.ao(v,C.p(v,C.v(C.a([u,A.bB,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aPF,v,v,v)],w),A.F,v,A.e,A.Q,0,A.p),A.f,v,v,new C.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bS,v,v,v),v,v,12,12,8,v)],w),v)},
$S:61}
B.emA.prototype={
$0(){return B.qI(this.b,this.a.d,"size-compare")},
$S:0}
B.emB.prototype={
$0(){var w=this.a
return w.m(new B.emz(w,this.b))},
$S:0}
B.emz.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.emC.prototype={
$0(){var w=this.a
return w.m(new B.emy(w,this.b))},
$S:0}
B.emy.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.eTZ.prototype={
$3(d,e,f){var w,v,u=this.a
$.X()
w=C.M()
w.r=f.j(0.2).gp(0)
w.z=new C.ht(A.G,Math.max(2,e*0.18))
u.ah(d,e*1.12,w)
w=C.M()
v=C.aq(f,A.w,0.6)
v.toString
w.saq(new C.bS(P.pa,0.5,A.x,null,0,C.a([A.c,f,v],x.O),I.a1g,null).av(0,C.bT(d,e)))
u.ah(d,e,w)},
$S:721}
B.dCh.prototype={
$1(d){return d.e<=0},
$S:z+89}
B.dC5.prototype={
$1(d){return d.b},
$S:z+60}
B.dC6.prototype={
$0(){return B.qI(this.b,this.a.d,"black-hole")},
$S:0}
B.dC7.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.Q=o
o=C.aE(A.c5,C.b3(q,q,q,new B.b8w(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.dC3(p),q,q,q,q,q,q,q,q,q,new B.dC4(p),q,q,q,q,!1,A.a8)
w=A.w.j(0.55)
v=C.m(14)
u=C.I(A.bF,A.q,1)
t=p.r
if(t<1000)t=A.k.aa(t,t<10?1:0)+" Suns"
else t=B.fov(t)+" Suns"
t=p.adM("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.A(C.a([t,p.adM("EDGE WIDTH",(s<100?A.k.aa(s,1):B.Gl(s))+" km"),p.adM("TIME",A.k.aa(this.b*100,0)+"%"),p.adM("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new C.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bS,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.e9C)
return new C.et(new C.an(A.W,q,A.b_,A.r,r,q),p.d)},
$S:199}
B.dC4.prototype={
$1(d){return this.a.aYn(d.b)},
$S:23}
B.dC3.prototype={
$1(d){if(A.cI.aj()<0.12)this.a.aYn(d.b)},
$S:18}
B.dC9.prototype={
$1(d){var w=this.a
return w.m(new B.dC2(w,d))},
$S:6}
B.dC2.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dCa.prototype={
$0(){var w=this.a
return w.m(new B.dC1(w))},
$S:0}
B.dC1.prototype={
$0(){return this.a.r=10},
$S:0}
B.dCb.prototype={
$0(){var w=this.a
return w.m(new B.dC0(w))},
$S:0}
B.dC0.prototype={
$0(){return this.a.r=21},
$S:0}
B.dCc.prototype={
$0(){var w=this.a
return w.m(new B.dC_(w))},
$S:0}
B.dC_.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dCd.prototype={
$0(){var w=this.a
return w.m(new B.dBZ(w))},
$S:0}
B.dBZ.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dCe.prototype={
$0(){var w=this.a
return w.m(new B.dBY(w))},
$S:0}
B.dBY.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
B.dCf.prototype={
$0(){var w=this.a
return w.m(new B.dBX(w))},
$S:0}
B.dBX.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dCg.prototype={
$0(){var w=this.a
return w.m(new B.dBW(w))},
$S:0}
B.dBW.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.dC8.prototype={
$0(){var w=this.a
return w.m(new B.dBV(w))},
$S:0}
B.dBV.prototype={
$0(){var w=this.a
A.d.a9(w.z)
w.as=0},
$S:0}
B.dTj.prototype={
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
$S:1862}
B.dT9.prototype={
$0(){return B.qI(this.b,this.a.d,"galaxy")},
$S:0}
B.dTa.prototype={
$0(){var w=this.a
return w.m(new B.dT8(w,this.b))},
$S:0}
B.dT8.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.Zo()},
$S:0}
B.dTb.prototype={
$0(){var w=this.a
return w.m(new B.dT7(w))},
$S:0}
B.dT7.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.Zo()}w.ct1()},
$S:0}
B.dTc.prototype={
$1(d){var w=this.a
return w.m(new B.dT6(w,d))},
$S:6}
B.dT6.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.Zo()},
$S:0}
B.dTd.prototype={
$1(d){var w=this.a
return w.m(new B.dT5(w,d))},
$S:6}
B.dT5.prototype={
$0(){var w=this.a
w.r=this.b
w.Zo()},
$S:0}
B.dTe.prototype={
$1(d){var w=this.a
return w.m(new B.dT4(w,d))},
$S:6}
B.dT4.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.dTf.prototype={
$1(d){var w=this.a
return w.m(new B.dT3(w,d))},
$S:6}
B.dT3.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.dTg.prototype={
$0(){var w=this.a
return w.m(new B.dT2(w))},
$S:0}
B.dT2.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.dTh.prototype={
$0(){var w=this.a
return w.m(new B.dT1(w))},
$S:0}
B.dT1.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
B.dTi.prototype={
$0(){var w=this.a
return w.m(new B.dT0(w))},
$S:0}
B.dT0.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
B.d7N.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new C.u((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1863}
B.elP.prototype={
$0(){return B.qI(this.b,this.a.d,"seasons-moon")},
$S:0}
B.elQ.prototype={
$0(){var w=this.a
return w.m(new B.elO(w))},
$S:0}
B.elO.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.elR.prototype={
$0(){var w=this.a
return w.m(new B.elN(w))},
$S:0}
B.elN.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.elS.prototype={
$0(){var w=this.a
return w.m(new B.elM(w))},
$S:0}
B.elM.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
B.elT.prototype={
$0(){var w=this.a
return w.m(new B.elL(w))},
$S:0}
B.elL.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
B.elU.prototype={
$1(d){var w=this.a
return w.m(new B.elK(w,d))},
$S:6}
B.elK.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.elV.prototype={
$1(d){var w=this.a
return w.m(new B.elJ(w,d))},
$S:6}
B.elJ.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.elW.prototype={
$1(d){var w=this.a
return w.m(new B.elI(w,d))},
$S:6}
B.elI.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.elX.prototype={
$1(d){var w=this.a
return w.m(new B.elH(w,d))},
$S:6}
B.elH.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=B.aKS.prototype
w.btZ=w.q
w=B.aJU.prototype
w.bsZ=w.q
w=B.aJV.prototype
w.bt_=w.q
w=B.aK_.prototype
w.bt4=w.q
w=B.aLH.prototype
w.buU=w.q
w=B.aKQ.prototype
w.btX=w.q
w=B.aKZ.prototype
w.bu5=w.q
w=B.aL4.prototype
w.bub=w.q
w=B.aJY.prototype
w.bt2=w.q
w=B.aKN.prototype
w.btU=w.q
w=B.aL1.prototype
w.bu8=w.q
w=B.aKL.prototype
w.btS=w.q
w=B.aKM.prototype
w.btT=w.q
w=B.aKb.prototype
w.bth=w.q
w=B.aJQ.prototype
w.bsV=w.q
w=B.aKj.prototype
w.btp=w.q
w=B.awo.prototype
w.bq6=w.q
w=B.awp.prototype
w.bq7=w.q
w=B.aIm.prototype
w.brn=w.q
w=B.aK8.prototype
w.btd=w.q
w=B.aKA.prototype
w.btH=w.q
w=B.aKB.prototype
w.btI=w.q
w=B.aJW.prototype
w.bt0=w.q
w=B.aKe.prototype
w.btk=w.q
w=B.aKJ.prototype
w.btQ=w.q
w=B.aLc.prototype
w.buj=w.q
w=B.aKk.prototype
w.btr=w.q
w=B.aKl.prototype
w.bts=w.q
w=B.aKm.prototype
w.btt=w.q
w=B.aKV.prototype
w.bu1=w.q
w=B.aKY.prototype
w.bu4=w.q
w=B.aJT.prototype
w.bsY=w.q
w=B.aKh.prototype
w.btn=w.q
w=B.aKU.prototype
w.bu0=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(B.aD2.prototype,"gavb","c1y",0)
var r
v(r=B.aBs.prototype,"gc9G","c9H",35)
w(r,"gc23","aWN",0)
w(B.aBv.prototype,"gc3z","c3A",0)
u(B.aBM.prototype,"gc3F","c3G",52)
w(r=B.aG1.prototype,"gcsI","csJ",0)
w(r,"gcgn","afb",0)
w(r,"gce4","ce5",0)
w(r,"gc3E","acM",3)
w(r=B.aD1.prototype,"gbEy","a8o",3)
w(r,"gcdm","b_1",0)
w(r,"gch5","afj",3)
t(r,"gc3I","acN",3)
w(B.aDh.prototype,"gbVz","bVA",0)
w(r=B.aCU.prototype,"gcsC","csD",0)
w(r,"gbET","bEU",0)
w(r=B.aBu.prototype,"gb3a","ayN",0)
v(r,"gc3O","YM",54)
w(r,"gc3N","acP",3)
v(r=B.aCT.prototype,"gcj0","axw",58)
v(r,"gcpf","ayJ",15)
w(r,"gbIR","aPz",0)
v(r=B.aCR.prototype,"gczJ","aik",15)
t(r,"gc47","avM",0)
w(r,"gclj","clk",0)
v(r=B.aBY.prototype,"gc48","c49",90)
w(r,"gc4a","c4b",0)
t(r=B.a3B.prototype,"grl","a9",0)
v(r,"gcPr","ama",1)
v(r,"gcLW","Lc",1)
w(r,"gcRC","bga",0)
s(B.ahI.prototype,"gc4f",0,5,null,["$5"],["q3"],64,0,0)
w(r=B.aBZ.prototype,"gc4g","c4h",0)
w(r,"gcjN","afF",3)
w(r,"gc9W","adZ",3)
w(r,"gcqO","agL",3)
w(r=B.aCD.prototype,"gc4x","avR",0)
w(r,"gc4y","aXE",0)
w(r=B.aDu.prototype,"gc5v","c5w",0)
t(r,"gc5t","aY_",0)
w(B.aCN.prototype,"gbHq","ar4",0)
t(B.aD8.prototype,"gc5x","c5y",0)
v(r=B.aC9.prototype,"gc6c","c6d",78)
w(r,"gbMg","bMh",0)
w(r=B.aCa.prototype,"gct9","cta",0)
w(r,"gc6h","c6i",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aC,[B.aiU,B.FC,B.uE,B.aQI,B.a2j,B.b8z,B.bZO,B.xK,B.BV,B.nh,B.b9h,B.A7,B.br_,B.pU,B.qA,B.BZ,B.Yy,B.adP,B.a_L,B.C9,B.aaL,B.ab1,B.acX,B.Fo,B.bjZ,B.Pi,B.a_4,B.aaS,B.abk,B.Fk,B.ac9,B.acE,B.t3,B.b89,B.aQy,B.e9,B.tg,B.a9t,B.aax,B.a3B,B.mv,B.b9i,B.fJ,B.m1,B.aV7,B.bsj,B.aGR,B.my,B.aad,B.aae,B.uR,B.OA,B.xI,B.Oz,B.bse,B.P1,B.adU])
u(C.hT,[B.fqF,B.fhp,B.fnJ,B.fnK,B.fqC,B.fqD,B.e3i,B.e3B,B.ejz,B.ej6,B.ej7,B.ej8,B.ej9,B.eja,B.ejb,B.ejc,B.ejd,B.ej4,B.ej5,B.ej3,B.eju,B.ejv,B.ejw,B.dCm,B.dCo,B.dCr,B.dCC,B.bZP,B.bZQ,B.fbE,B.fbF,B.fbG,B.fbN,B.fbO,B.fbP,B.dEU,B.dEB,B.dEV,B.dEw,B.dEr,B.dEt,B.dEz,B.dEM,B.dEK,B.dEL,B.dEJ,B.dEG,B.dEI,B.eTt,B.eTa,B.eTh,B.eTq,B.eT4,B.deC,B.deD,B.dez,B.deA,B.deB,B.deE,B.deF,B.deG,B.deH,B.deI,B.deJ,B.deK,B.deL,B.deM,B.eiv,B.eiw,B.eix,B.eiy,B.eit,B.eiu,B.ej_,B.eiC,B.eiE,B.eio,B.eiW,B.eiU,B.eiV,B.eiT,B.eiS,B.eiq,B.euq,B.euo,B.euc,B.eug,B.eub,B.euh,B.eui,B.eum,B.eB1,B.eB7,B.efd,B.efe,B.ef_,B.ef0,B.eeZ,B.ef3,B.ef5,B.ef6,B.eAr,B.eAs,B.eAq,B.eAe,B.eAf,B.eAd,B.eA6,B.eA7,B.eAl,B.eAm,B.eAn,B.eAo,B.eAp,B.dE2,B.dE3,B.dE4,B.dDW,B.dDZ,B.cJA,B.eaH,B.eb5,B.eaL,B.eaT,B.eaU,B.eaS,B.eb0,B.eeH,B.eeM,B.ee5,B.edO,B.ee_,B.edY,B.edW,B.edX,B.edV,B.dMP,B.dMD,B.dMF,B.dMN,B.dMI,B.dPE,B.dPw,B.dPx,B.dPy,B.d24,B.d26,B.d25,B.dAq,B.dAr,B.dAj,B.dAh,B.cC7,B.dTH,B.dTI,B.dTD,B.dTE,B.d9Q,B.d9R,B.dEp,B.dE7,B.dEg,B.dEh,B.dEm,B.dEn,B.bKu,B.bKF,B.bKA,B.bKG,B.bKI,B.bKv,B.bKt,B.bKN,B.bKB,B.bKE,B.bKD,B.bKC,B.bFN,B.fCk,B.fCn,B.fCl,B.bFu,B.bFp,B.bFo,B.bFM,B.bFE,B.bFF,B.bFD,B.bFG,B.bFe,B.bFg,B.bFc,B.bFd,B.bF4,B.bF5,B.fbQ,B.fbR,B.fbS,B.fbD,B.fbT,B.fbC,B.fbU,B.fbH,B.fbB,B.fbI,B.fbA,B.fbJ,B.fbz,B.fbK,B.fbx,B.fby,B.fbL,B.fbv,B.fbw,B.fbM,B.fbu,B.dPV,B.dPW,B.dPL,B.dPH,B.dPU,B.dPZ,B.czE,B.fGU,B.fGV,B.e6g,B.e68,B.deV,B.deY,B.e6z,B.e6k,B.e6u,B.e6v,B.e6w,B.cdI,B.eFr,B.dPh,B.dPi,B.dPj,B.dPl,B.ec_,B.eAK,B.eAT,B.eAP,B.eAR,B.eay,B.eaz,B.eaA,B.fKK,B.cqw,B.dUI,B.dU7,B.dU6,B.dUi,B.dUj,B.dUh,B.dUk,B.dUC,B.dUD,B.dUE,B.eBA,B.etO,B.etP,B.etQ,B.etV,B.etW,B.etF,B.eVQ,B.eVR,B.dVe,B.dV7,B.dV9,B.dVa,B.dVb,B.dVc,B.dUK,B.eTZ,B.dCh,B.dC5,B.dC4,B.dC3,B.dC9,B.dTj,B.dTc,B.dTd,B.dTe,B.dTf,B.d7N,B.elU,B.elV,B.elW,B.elX])
u(C.kf,[B.fqE,B.e3n,B.e3l,B.ejf,B.ejs,B.dEs,B.dEP,B.dKN,B.eTw,B.eTx,B.eT9,B.eTm,B.eTn,B.eTi,B.eTo,B.eT3,B.eir,B.eis,B.eiZ,B.eiR,B.eiG,B.eB0,B.ef2,B.eAh,B.dDV,B.dE_,B.eaX,B.eeL,B.fqW,B.edS,B.edP,B.ee1,B.dmI,B.bEB,B.flO,B.dAd,B.dAl,B.bKH,B.bKJ,B.bKL,B.bKw,B.bKy,B.bFO,B.cj6,B.fCm,B.bFn,B.bFK,B.bFJ,B.dPT,B.czF,B.dLH,B.dLF,B.dLz,B.e6a,B.deW,B.deX,B.e6t,B.cdL,B.dCQ,B.dCL,B.ec1,B.dUu,B.dU4,B.daG,B.eBF,B.etS,B.etE,B.dUL,B.dUN,B.dUJ,B.dC7])
u(C.ag,[B.UI,B.V9,B.TA,B.TF,B.MN,B.aG0,B.V8,B.Vo,B.VA,B.V5,B.Vv,B.TD,B.V_,B.V4,B.V2,B.U0,B.Ug,B.Tv,B.Uu,B.TE,B.ahG,B.Uh,B.aw5,B.TZ,B.UN,B.UP,B.VG,B.Uo,B.TB,B.Uf,B.V0,B.Ve,B.Vz,B.UZ,B.Uv,B.VC,B.Vn,B.Uw,B.Vf,B.Tz,B.Us,B.Vb])
u(C.ah,[B.bis,B.aKS,B.aJU,B.aK_,B.aBM,B.aLH,B.aKQ,B.aKZ,B.aL4,B.aKN,B.aL1,B.aJY,B.aKL,B.aKM,B.aCR,B.bhX,B.aKb,B.aJQ,B.aKj,B.bhO,B.awo,B.bvp,B.aIm,B.aK8,B.aKA,B.aKB,B.aLc,B.aKe,B.aJW,B.bhY,B.aCN,B.aD8,B.bjb,B.aKJ,B.aKk,B.bjf,B.aKY,B.aKm,B.aKV,B.aJT,B.aKh,B.aKU])
u(C.j3,[B.e3g,B.e3h,B.e3t,B.e3u,B.e3p,B.e3o,B.e3q,B.e3m,B.e3r,B.e3k,B.e3s,B.e3j,B.e3x,B.e3w,B.e3y,B.e3v,B.e3z,B.e3A,B.e3C,B.ejy,B.ejA,B.ejB,B.ejh,B.ejg,B.eje,B.ejn,B.ejo,B.ejk,B.ejp,B.ejj,B.ejq,B.ejr,B.eji,B.ejt,B.ejm,B.ejx,B.ejl,B.dCJ,B.dCI,B.dCl,B.dCK,B.dCn,B.dCp,B.dCq,B.dCs,B.dCi,B.dCj,B.dCk,B.dCz,B.dCA,B.dCB,B.dCy,B.dCD,B.dCx,B.dCE,B.dCw,B.dCF,B.dCv,B.dCG,B.dCu,B.dCH,B.dCt,B.dEy,B.dEx,B.dEC,B.dEu,B.dEv,B.dED,B.dEE,B.dEF,B.dEA,B.dEq,B.dEO,B.dEN,B.dEQ,B.dER,B.dES,B.dEH,B.dET,B.cK2,B.dKL,B.dKK,B.dKM,B.fc4,B.fc5,B.fc6,B.fch,B.fcj,B.fck,B.fcl,B.fcm,B.fcn,B.fco,B.fcp,B.fc7,B.fc8,B.fc9,B.fca,B.fcb,B.fcc,B.fcd,B.fce,B.fcf,B.fcg,B.fci,B.eTv,B.eTu,B.eTc,B.eTb,B.eT7,B.eT6,B.eT8,B.eT5,B.eTk,B.eTj,B.eTl,B.eTd,B.eTp,B.eTg,B.eTr,B.eTf,B.eTs,B.eTe,B.eiA,B.eip,B.eiz,B.eil,B.eiB,B.eiD,B.eim,B.ein,B.eiY,B.eiX,B.eiO,B.eiP,B.eiQ,B.eiK,B.eiL,B.eiJ,B.eiM,B.eiI,B.eiN,B.eiH,B.eiF,B.dey,B.eup,B.eu1,B.eu0,B.eua,B.euj,B.eu9,B.euk,B.eu8,B.eul,B.eu7,B.eu6,B.eun,B.eu5,B.eud,B.eu4,B.eue,B.eu3,B.euf,B.eu2,B.eB_,B.eAZ,B.eB2,B.eAY,B.eB3,B.eAX,B.eB4,B.eAW,B.eB5,B.eAV,B.eB6,B.eAU,B.ef1,B.eeY,B.eeX,B.eeW,B.ef7,B.eeV,B.ef8,B.eeU,B.ef9,B.eeT,B.efa,B.efb,B.efc,B.eeS,B.ef4,B.eAg,B.eA5,B.eAi,B.eAc,B.eAj,B.eAb,B.eAk,B.eAa,B.eA9,B.eA8,B.eA4,B.eA3,B.eA2,B.dE1,B.dDT,B.dDU,B.dDX,B.dDY,B.dE0,B.eaV,B.eaM,B.eaW,B.eaY,B.eaR,B.eaZ,B.eaQ,B.eb_,B.eaP,B.eaO,B.eb1,B.eaN,B.eb2,B.eaK,B.eb3,B.eaJ,B.eb4,B.eaI,B.eeB,B.eeC,B.eeJ,B.eeI,B.eeK,B.eeG,B.eeN,B.eeF,B.eeO,B.eeE,B.eeP,B.eeQ,B.eeD,B.eeR,B.ee4,B.edM,B.edN,B.edR,B.edQ,B.ee0,B.edZ,B.edT,B.ee2,B.edU,B.ee3,B.dMO,B.dME,B.dMC,B.dMJ,B.dMH,B.dMK,B.dMG,B.dML,B.dMM,B.dPD,B.dPr,B.dPq,B.dPs,B.dPv,B.dPu,B.dPt,B.dPz,B.dPA,B.dPB,B.dPC,B.dAp,B.dAo,B.dAe,B.dAk,B.dAi,B.dAm,B.dAg,B.dAn,B.dAf,B.dTG,B.dTF,B.dTx,B.dTB,B.dTA,B.dTC,B.dTz,B.dTy,B.dEo,B.dEf,B.dEe,B.dEi,B.dEd,B.dEj,B.dEc,B.dEk,B.dEb,B.dEl,B.dEa,B.dE9,B.dE8,B.bKK,B.bKM,B.bKx,B.bKz,B.bFr,B.bFs,B.bFq,B.bFt,B.bFv,B.bFh,B.bFi,B.bFj,B.bFk,B.bFl,B.bFm,B.bFL,B.bEV,B.bFB,B.bFC,B.bFz,B.bFA,B.bFx,B.bFy,B.bFH,B.bFw,B.bFI,B.bEW,B.bFf,B.bF1,B.bF2,B.bF0,B.bF3,B.bF_,B.bF6,B.bF7,B.bF8,B.bF9,B.bEZ,B.bFa,B.bEY,B.bFb,B.bEX,B.dPM,B.dPX,B.dPY,B.dPK,B.dPJ,B.dPI,B.dPR,B.dPP,B.dPQ,B.dPS,B.dPN,B.dPO,B.dQ_,B.dQ0,B.dQ1,B.dQ2,B.dQ3,B.dLI,B.dLG,B.dLE,B.dLD,B.dLC,B.dLB,B.dLA,B.dLw,B.dLv,B.dLy,B.dLx,B.e6f,B.e6h,B.e66,B.e67,B.e69,B.e6b,B.e6c,B.e6d,B.e6e,B.e6y,B.e6A,B.e6q,B.e6m,B.e6r,B.e6s,B.e6l,B.e6p,B.e6o,B.e6n,B.e6x,B.fcx,B.fcy,B.fcz,B.fcA,B.fcB,B.fcC,B.fcD,B.fcE,B.cdK,B.cdJ,B.eFs,B.eFo,B.eFn,B.eFq,B.eFp,B.dS_,B.dS0,B.dRV,B.dRX,B.dRY,B.dRW,B.dRZ,B.dCR,B.dCO,B.dCN,B.dCP,B.dCM,B.dPg,B.dPf,B.dPe,B.dPd,B.dPk,B.dPc,B.dPb,B.dPm,B.dPa,B.dPn,B.dP9,B.dPo,B.dPp,B.dP8,B.ebW,B.ebX,B.ebV,B.ebY,B.ebU,B.ec0,B.ec2,B.ebZ,B.ec3,B.ems,B.emt,B.emq,B.emr,B.emp,B.emu,B.emv,B.emw,B.emx,B.eAO,B.eAQ,B.eAN,B.eAM,B.eAS,B.eAL,B.eaB,B.eaC,B.eau,B.eat,B.eav,B.eas,B.eaw,B.ear,B.eax,B.eaq,B.eap,B.eao,B.ean,B.cqx,B.cqy,B.fKJ,B.cqt,B.cqs,B.cqz,B.cqu,B.cqv,B.cdG,B.dUH,B.dUa,B.dU8,B.dU9,B.dU5,B.dUt,B.dUb,B.dUc,B.dUv,B.dUg,B.dUz,B.dUs,B.dUA,B.dUr,B.dUB,B.dUq,B.dUp,B.dUo,B.dUn,B.dUF,B.dUm,B.dUG,B.dUl,B.dUw,B.dUf,B.dUx,B.dUe,B.dUy,B.dUd,B.dU3,B.dU2,B.daF,B.fcq,B.fcr,B.fcs,B.fct,B.fcu,B.fcv,B.fcw,B.eBD,B.eBE,B.eBC,B.eBB,B.etG,B.etR,B.etT,B.etN,B.etU,B.etM,B.etL,B.etX,B.etK,B.etY,B.etJ,B.etZ,B.etI,B.eu_,B.etH,B.etD,B.etC,B.eVP,B.dUM,B.dV0,B.dUS,B.dV1,B.dUR,B.dV2,B.dV_,B.dV6,B.dUZ,B.dUY,B.dV8,B.dUX,B.dUW,B.dUV,B.dUU,B.dVd,B.dUT,B.dV3,B.dUQ,B.dV4,B.dUP,B.dV5,B.dUO,B.emA,B.emB,B.emz,B.emC,B.emy,B.dC6,B.dC2,B.dCa,B.dC1,B.dCb,B.dC0,B.dCc,B.dC_,B.dCd,B.dBZ,B.dCe,B.dBY,B.dCf,B.dBX,B.dCg,B.dBW,B.dC8,B.dBV,B.dT9,B.dTa,B.dT8,B.dTb,B.dT7,B.dT6,B.dT5,B.dT4,B.dT3,B.dTg,B.dT2,B.dTh,B.dT1,B.dTi,B.dT0,B.elP,B.elQ,B.elO,B.elR,B.elN,B.elS,B.elM,B.elT,B.elL,B.elK,B.elJ,B.elI,B.elH])
t(B.bvE,B.aKS)
t(B.aD2,B.bvE)
u(C.mJ,[B.bfr,B.b9A,B.bqq,B.b8g,B.bp4,B.bow,B.b8W,B.boy,B.bst,B.bfp,B.bql,B.bjM,B.brb,B.b9g,B.bgj,B.bjN,B.bh0,B.bck,B.b8l,B.bdO,B.ahI,B.b7t,B.btu,B.adI,B.bfu,B.bfJ,B.btG,B.box,B.bk_,B.bdV,B.bqj,B.b97,B.bpS,B.b8w,B.bdL,B.bp7])
t(B.aJV,B.aJU)
t(B.aBs,B.aJV)
t(B.bvn,B.aK_)
t(B.aBv,B.bvn)
u(C.m5,[B.JS,B.a_y,B.IP])
u(C.au,[B.bps,B.adZ,B.acT,B.Pr,B.bpW,B.a7v,B.bbG,B.b5i,B.dz,B.eN,B.auv,B.fg,B.ER])
t(B.aG1,B.aLH)
t(B.bfo,C.oG)
t(B.aD1,B.aKQ)
t(B.bj2,B.aKZ)
t(B.aDh,B.aL4)
t(B.bvD,B.aKN)
t(B.aCU,B.bvD)
t(B.bvL,B.aL1)
t(B.bj7,B.bvL)
t(B.bvm,B.aJY)
t(B.aBu,B.bvm)
t(B.bvB,B.aKL)
t(B.biH,B.bvB)
t(B.bvC,B.aKM)
t(B.aCT,B.bvC)
t(B.aBY,B.aKb)
t(B.bhB,B.aJQ)
t(B.bi8,B.aKj)
t(B.awp,B.awo)
t(B.ahH,B.awp)
t(B.aBZ,B.bvp)
t(B.b7u,B.aIm)
t(B.bhV,B.aK8)
t(B.bvu,B.aKA)
t(B.biu,B.bvu)
t(B.bvv,B.aKB)
t(B.aCD,B.bvv)
t(B.bvM,B.aLc)
t(B.aDu,B.bvM)
t(B.bvq,B.aKe)
t(B.bi3,B.bvq)
t(B.bvl,B.aJW)
t(B.bhG,B.bvl)
t(B.bvA,B.aKJ)
t(B.biF,B.bvA)
t(B.aKl,B.aKk)
t(B.aC9,B.aKl)
t(B.bvI,B.aKY)
t(B.bj1,B.bvI)
t(B.bvs,B.aKm)
t(B.aCa,B.bvs)
t(B.bvG,B.aKV)
t(B.biZ,B.bvG)
t(B.bvk,B.aJT)
t(B.bhF,B.bvk)
t(B.bvr,B.aKh)
t(B.bi6,B.bvr)
t(B.bvF,B.aKU)
t(B.biY,B.bvF)
w(B.aKS,C.c9)
w(B.bvE,B.my)
w(B.aJU,C.c9)
w(B.aJV,B.my)
w(B.aK_,C.c9)
w(B.bvn,B.my)
w(B.aLH,C.eU)
w(B.aKQ,C.c9)
w(B.aKZ,C.c9)
w(B.aL4,C.c9)
w(B.aJY,C.c9)
w(B.bvm,B.my)
w(B.aKN,C.c9)
w(B.bvD,B.my)
w(B.aL1,C.c9)
w(B.bvL,B.my)
w(B.aKL,C.c9)
w(B.bvB,B.my)
w(B.aKM,C.c9)
w(B.bvC,B.my)
w(B.aKb,C.c9)
w(B.aJQ,C.c9)
w(B.aKj,C.c9)
w(B.awo,C.c9)
w(B.awp,B.my)
w(B.aIm,C.c9)
v(B.bvp,C.ey)
w(B.aK8,C.c9)
w(B.aKA,C.c9)
w(B.bvu,B.my)
w(B.aKB,C.c9)
w(B.bvv,B.my)
w(B.aJW,C.c9)
w(B.bvl,B.my)
w(B.aKe,C.c9)
w(B.bvq,B.my)
w(B.aKJ,C.c9)
w(B.bvA,B.my)
w(B.aLc,C.c9)
w(B.bvM,B.my)
w(B.aKk,C.c9)
w(B.aKl,B.my)
w(B.aKm,C.c9)
w(B.bvs,B.my)
w(B.aKV,C.c9)
w(B.bvG,B.my)
w(B.aKY,C.c9)
w(B.bvI,B.my)
w(B.aJT,C.c9)
w(B.bvk,B.my)
w(B.aKh,C.c9)
w(B.bvr,B.my)
w(B.aKU,C.c9)
w(B.bvF,B.my)})()
C.jT(b.typeUniverse,JSON.parse('{"UI":{"ag":[],"r":[]},"bis":{"ah":["UI"]},"V9":{"ag":[],"r":[]},"aD2":{"ah":["V9"]},"bfr":{"aB":[]},"TA":{"ag":[],"r":[]},"aBs":{"ah":["TA"]},"TF":{"ag":[],"r":[]},"aBv":{"ah":["TF"]},"b9A":{"aB":[]},"adZ":{"au":[],"r":[]},"acT":{"au":[],"r":[]},"aG0":{"ag":[],"r":[]},"MN":{"ag":[],"r":[]},"aBM":{"ah":["MN"]},"bps":{"au":[],"r":[]},"Pr":{"au":[],"r":[]},"bqq":{"aB":[]},"bpW":{"au":[],"r":[]},"b8g":{"aB":[]},"aG1":{"ah":["aG0"]},"bp4":{"aB":[]},"bow":{"aB":[]},"b8W":{"aB":[]},"boy":{"aB":[]},"bst":{"aB":[]},"V8":{"ag":[],"r":[]},"bfo":{"aB":[]},"aD1":{"ah":["V8"]},"bfp":{"aB":[]},"Vo":{"ag":[],"r":[]},"VA":{"ag":[],"r":[]},"bj2":{"ah":["Vo"]},"bql":{"aB":[]},"aDh":{"ah":["VA"]},"V5":{"ag":[],"r":[]},"Vv":{"ag":[],"r":[]},"TD":{"ag":[],"r":[]},"aCU":{"ah":["V5"]},"bjM":{"aB":[]},"bj7":{"ah":["Vv"]},"brb":{"aB":[]},"aBu":{"ah":["TD"]},"b9g":{"aB":[]},"V_":{"ag":[],"r":[]},"V4":{"ag":[],"r":[]},"biH":{"ah":["V_"]},"bgj":{"aB":[]},"aCT":{"ah":["V4"]},"bjN":{"aB":[]},"V2":{"ag":[],"r":[]},"U0":{"ag":[],"r":[]},"Ug":{"ag":[],"r":[]},"aCR":{"ah":["V2"]},"bh0":{"aB":[]},"bhX":{"ah":["U0"]},"aBY":{"ah":["Ug"]},"bck":{"aB":[]},"Tv":{"ag":[],"r":[]},"Uu":{"ag":[],"r":[]},"TE":{"ag":[],"r":[]},"bhB":{"ah":["Tv"]},"b8l":{"aB":[]},"bi8":{"ah":["Uu"]},"bdO":{"aB":[]},"bhO":{"ah":["TE"]},"ahI":{"aB":[]},"ahG":{"ag":[],"r":[]},"ahH":{"ah":["ahG"]},"Uh":{"ag":[],"r":[]},"aw5":{"ag":[],"r":[]},"aBZ":{"ah":["Uh"],"ey":[]},"b7u":{"ah":["aw5"]},"b7t":{"aB":[]},"TZ":{"ag":[],"r":[]},"bhV":{"ah":["TZ"]},"btu":{"aB":[]},"adI":{"aB":[]},"UN":{"ag":[],"r":[]},"UP":{"ag":[],"r":[]},"biu":{"ah":["UN"]},"bfu":{"aB":[]},"aCD":{"ah":["UP"]},"bfJ":{"aB":[]},"a7v":{"au":[],"r":[]},"VG":{"ag":[],"r":[]},"Uo":{"ag":[],"r":[]},"TB":{"ag":[],"r":[]},"Uf":{"ag":[],"r":[]},"V0":{"ag":[],"r":[]},"Ve":{"ag":[],"r":[]},"Vz":{"ag":[],"r":[]},"UZ":{"ag":[],"r":[]},"aDu":{"ah":["VG"]},"btG":{"aB":[]},"bi3":{"ah":["Uo"]},"box":{"aB":[]},"bhG":{"ah":["TB"]},"bhY":{"ah":["Uf"]},"bk_":{"aB":[]},"aCN":{"ah":["V0"]},"aD8":{"ah":["Ve"]},"bjb":{"ah":["Vz"]},"biF":{"ah":["UZ"]},"bbG":{"au":[],"r":[]},"b5i":{"au":[],"r":[]},"dz":{"au":[],"r":[]},"eN":{"au":[],"r":[]},"auv":{"au":[],"r":[]},"fg":{"au":[],"r":[]},"ER":{"au":[],"r":[]},"Uv":{"ag":[],"r":[]},"aC9":{"ah":["Uv"]},"bdV":{"aB":[]},"VC":{"ag":[],"r":[]},"bjf":{"ah":["VC"]},"Vn":{"ag":[],"r":[]},"Uw":{"ag":[],"r":[]},"Vf":{"ag":[],"r":[]},"bj1":{"ah":["Vn"]},"bqj":{"aB":[]},"aCa":{"ah":["Uw"]},"b97":{"aB":[]},"biZ":{"ah":["Vf"]},"bpS":{"aB":[]},"Tz":{"ag":[],"r":[]},"Us":{"ag":[],"r":[]},"Vb":{"ag":[],"r":[]},"bhF":{"ah":["Tz"]},"b8w":{"aB":[]},"bi6":{"ah":["Us"]},"bdL":{"aB":[]},"biY":{"ah":["Vb"]},"bp7":{"aB":[]}}'))
C.Pz(b.typeUniverse,JSON.parse('{"my":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.ax
return{x:w("lS<w?>"),e8:w("d4"),G:w("w"),l:w("bm<n,n>"),J:w("bm<n,N>"),I:w("bm<n,H>"),R:w("eY<n>"),Z:w("a_"),M:w("O<da>"),f5:w("O<a2f>"),gh:w("O<aQy>"),h:w("O<a2j>"),V:w("O<ac>"),O:w("O<w>"),ey:w("O<S>"),dh:w("O<H9>"),aJ:w("O<ay<aC>>"),w:w("O<a_>"),Q:w("O<aj<w>>"),B:w("O<aj<H9>>"),gO:w("O<aj<aj<N>>>"),bj:w("O<aj<n>>"),b:w("O<aj<N>>"),fA:w("O<aj<H?>>"),D:w("O<a4<n,aC>>"),g:w("O<u>"),bz:w("O<tg>"),ds:w("O<a7S>"),v:w("O<hn>"),U:w("O<+(u,N)>"),ev:w("O<+(u,H)>"),K:w("O<+(n,n)>"),fT:w("O<+(N,r)>"),E:w("O<+(H,n)>"),u:w("O<+(H,H)>"),c:w("O<+(n,n,a_)>"),e:w("O<+(n,N,N,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,N,N,a4<n,N>)>"),_:w("O<uE>"),q:w("O<cP>"),fQ:w("O<a9t>"),s:w("O<n>"),cF:w("O<ar>"),X:w("O<vZ>"),F:w("O<aad>"),p:w("O<r>"),bL:w("O<aax>"),fH:w("O<lg>"),aq:w("O<b89>"),a_:w("O<aaL>"),cS:w("O<aaS>"),cB:w("O<nh>"),ba:w("O<ab1>"),d9:w("O<P1>"),bi:w("O<abk>"),eW:w("O<BZ>"),fY:w("O<Yy>"),aX:w("O<Fk>"),ea:w("O<ac9>"),gB:w("O<acE>"),ed:w("O<Pi>"),g4:w("O<bjZ>"),aS:w("O<a_4>"),ac:w("O<acX>"),cd:w("O<C9>"),fr:w("O<adP>"),e4:w("O<a_L>"),r:w("O<adU>"),au:w("O<aGR>"),f7:w("O<R>"),n:w("O<N>"),t:w("O<H>"),dS:w("O<aB?>"),fs:w("O<tg?>"),d4:w("O<n?>"),bN:w("O<H?>"),gJ:w("cs<ahH>"),A:w("cs<ah<ag>>"),bF:w("aj<w>"),gl:w("aj<S>"),ew:w("aj<aC>"),j:w("aj<@>"),bW:w("aj<H>"),a:w("a4<n,@>"),f:w("a4<@,@>"),bd:w("K<e9,n>"),dv:w("K<n,n>"),fR:w("K<+(N,r),r>"),m:w("iz"),gA:w("yO"),gD:w("vz"),P:w("cq"),C:w("aC"),W:w("tg"),dV:w("e9"),g7:w("BF"),N:w("n"),bO:w("ar"),k:w("kp"),Y:w("bo<N>"),cL:w("aae"),gj:w("cx<n>"),aC:w("cx<H?>"),dg:w("e7<qA>"),e3:w("b8z"),a2:w("BV"),f3:w("qA"),es:w("Fo"),gV:w("mX"),y:w("R"),i:w("N"),z:w("@"),S:w("H"),L:w("aj<@>?"),fF:w("a4<@,@>?"),cK:w("aC?"),az:w("pN?"),T:w("n?"),cD:w("N?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aVa=new C.da(0,0.85)
D.fsn=new C.x("Tap once to start the chain",null,L.T6,null,null,null,null,null,null,null,null,null)
D.aUJ=new C.bH(D.aVa,null,null,D.fsn,null)
D.aV0=new C.da(0,0.1)
D.aW4=new B.aQI(0,0,0)
D.JG=new B.aQI(0,0.5,0)
D.aWB=new C.aA(A.b7,1,A.q,-1)
D.aY4=new C.aY(0,1/0,0,290)
D.aYb=new C.aY(16,1/0,16,1/0)
D.aZo=new C.o(A.bo,null,null,null,null,null,A.a6)
D.eUW=new C.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuH=new C.x("\u26a1",null,D.eUW,null,null,null,null,null,null,null,null,null)
D.b2O=new C.cr(A.A,null,null,D.fuH,null)
D.aOZ=new C.G(!0,A.c_,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkO=new C.x("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aOZ,null,A.L,null,null,null,null,null,null,null)
D.e3m=new C.C(A.nR,D.fkO,null)
D.b2X=new C.cr(A.A,null,null,D.e3m,null)
D.fot=new C.x("Press Drop! and watch them fall from 20 metres.",null,A.kw,null,A.L,null,null,null,null,null,null,null)
D.e3q=new C.C(A.nR,D.fot,null)
D.b3h=new C.cr(A.A,null,null,D.e3q,null)
D.f4E=new C.G(!0,A.j9,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft7=new C.x("Draw anywhere",null,D.f4E,null,null,null,null,null,null,null,null,null)
D.b3l=new C.cr(A.A,null,null,D.ft7,null)
D.fbd=new C.x("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aOZ,null,A.L,null,null,null,null,null,null,null)
D.e46=new C.C(A.F9,D.fbd,null)
D.b3E=new C.cr(A.A,null,null,D.e46,null)
D.aaY=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.b69=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.b6X=new C.w(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.Vl=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.b71=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.b76=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.b7b=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,A.t)
D.Vn=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.b8d=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.b8i=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.b8A=new C.w(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.b9F=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.acj=new C.w(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.ba6=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.Ad=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.baT=new C.w(1,1,0.9686274509803922,0.8,A.t)
D.acJ=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.bbu=new C.w(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.bbB=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,A.t)
D.acU=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.W0=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.bc5=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.ad2=new C.w(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.Ei=new C.w(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.adf=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.Wb=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bdR=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bdT=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bdX=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.be5=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.adG=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.ber=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.Es=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.bfz=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.bfH=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bfK=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,A.t)
D.bfV=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.bfY=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bg4=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.uY=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.aew=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.bh8=new C.w(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.bhS=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.bik=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.biL=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,A.t)
D.aeY=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.bmV=new C.b9(11e6)
D.bnW=new C.Q(0,0,8,6)
D.afT=new C.Q(0,0,9,0)
D.bot=new C.Q(10,0,10,4)
D.boy=new C.Q(10,10,10,6)
D.boG=new C.Q(10,34,10,26)
D.boO=new C.Q(10,6,10,2)
D.XB=new C.Q(10,6,10,4)
D.boQ=new C.Q(10,8,0,10)
D.bpq=new C.Q(12,8,8,8)
D.bpv=new C.Q(14,0,14,22)
D.bpx=new C.Q(14,0,14,30)
D.agj=new C.Q(14,0,14,6)
D.agq=new C.Q(14,10,8,12)
D.bq3=new C.Q(14,8,14,6)
D.bqv=new C.Q(16,4,16,28)
D.bqF=new C.Q(16,8,16,12)
D.bsJ=new C.Q(26,12,26,58)
D.btw=new C.Q(4,4,6,2)
D.bty=new C.Q(4,4,8,2)
D.bu8=new C.Q(8,14,8,12)
D.buf=new C.Q(8,40,8,30)
D.buj=new C.Q(8,6,16,0)
D.buk=new C.Q(8,6,8,8)
D.buE=new C.Q(0,0,1.5,0)
D.aVR=new C.Gy(26,"saturation")
D.buW=new C.yw(A.cU,D.aVR,null,A.aaW)
D.fak=new C.x("REACTION LAB",null,W.aPA,null,null,null,null,A.a2,null,1,null,null)
D.bv1=new C.bD(1,A.bi,D.fak,null)
D.f1z=new C.G(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdn=new C.x("CORE PROTOCOL",null,D.f1z,null,null,null,null,null,null,null,null,null)
D.bve=new C.bD(1,A.bi,D.fdn,null)
D.fe4=new C.x("\ud83d\udce2 NGMY Ads",null,A.qf,null,null,null,null,A.eC,null,1,null,null)
D.bvU=new C.bD(1,A.bi,D.fe4,null)
D.f93=new C.x("Wire selected",null,A.ho,null,null,null,null,null,null,null,null,null)
D.bw7=new C.bD(1,A.bi,D.f93,null)
D.ajy=new C.a_(62712,"MaterialIcons",!1)
D.bAV=new C.a_(62878,"MaterialIcons",!1)
D.ZS=new C.a_(62908,"MaterialIcons",!1)
D.bAY=new C.a_(62918,"MaterialIcons",!1)
D.bAZ=new C.a_(62931,"MaterialIcons",!1)
D.bB1=new C.a_(62951,"MaterialIcons",!1)
D.bBh=new C.a_(63064,"MaterialIcons",!1)
D.bBj=new C.a_(63070,"MaterialIcons",!1)
D.xO=new C.a_(63128,"MaterialIcons",!1)
D.FT=new C.a_(63726,"MaterialIcons",!1)
D.bCC=new C.a_(983122,"MaterialIcons",!1)
D.bCQ=new C.a_(983247,"MaterialIcons",!1)
D.bD1=new C.a_(983415,"MaterialIcons",!1)
D.bD2=new C.a_(983417,"MaterialIcons",!1)
D.bD3=new C.a_(983442,"MaterialIcons",!1)
D.bD4=new C.a_(983443,"MaterialIcons",!1)
D.akU=new C.a_(983467,"MaterialIcons",!1)
D.bDa=new C.a_(983501,"MaterialIcons",!1)
D.bDl=new C.a_(983616,"MaterialIcons",!1)
D.bDm=new C.a_(983624,"MaterialIcons",!1)
D.bDy=new C.a_(983776,"MaterialIcons",!1)
D.bDP=new C.a_(984561,"MaterialIcons",!1)
D.bEp=new C.ae(A.r0,24,A.aM,null,null,null)
D.bF8=new C.ae(A.Na,null,A.ad,null,null,null)
D.bFG=new C.ae(A.mm,21,A.ad,null,null,null)
D.bCB=new C.a_(983117,"MaterialIcons",!1)
D.bH1=new C.ae(D.bCB,28,A.c,null,null,null)
D.bHh=new C.ae(A.jg,18,null,null,null,null)
D.bJ1=new C.ae(A.e4,21,A.ci,null,null,null)
D.bJg=new C.ae(A.mn,null,A.ad,null,null,null)
D.bJq=new C.ae(A.a_J,21,A.ad,null,null,null)
D.bKf=new C.ae(A.eA,17,A.ad,null,null,null)
D.ami=new C.ae(A.eA,19,null,null,null,null)
D.mr=new C.ae(A.vr,21,A.ad,null,null,null)
D.bLI=new C.ae(A.MC,null,A.ad,null,null,null)
D.bMR=new C.ae(A.jg,21,A.ad,null,null,null)
D.bNH=new C.ae(A.fa,20,A.az,null,null,null)
D.bOn=new C.ae(A.dW,null,A.aM,null,null,null)
D.bOI=new C.ae(A.jY,null,A.az,null,null,null)
D.d8F=w([A.dq,A.d6,A.dq],x.O)
D.bRo=new C.a8(A.a3,A.a7,A.x,D.d8F,null,null)
D.cOh=w([A.bR,A.bn],x.O)
D.bRw=new C.a8(A.b0,A.b5,A.x,D.cOh,null,null)
D.bRH=new C.a8(A.b0,A.b5,A.x,A.awn,null,null)
D.cOD=w([A.hi,A.fg],x.O)
D.bRQ=new C.a8(A.b0,A.b5,A.x,D.cOD,null,null)
D.anj=new C.a8(A.b0,A.b5,A.x,K.a1q,null,null)
D.cM5=w([A.oi,A.i5],x.O)
D.bSt=new C.a8(A.b0,A.b5,A.x,D.cM5,null,null)
D.cO_=w([A.eu,A.aB],x.O)
D.anq=new C.a8(A.b0,A.b5,A.x,D.cO_,null,null)
D.d3h=w([A.dz,A.iQ,A.bn],x.O)
D.bSK=new C.a8(A.a3,A.a7,A.x,D.d3h,null,null)
D.d3n=w([A.ju,A.cC],x.O)
D.bT3=new C.a8(A.b0,A.b5,A.x,D.d3n,null,null)
D.cl7=w([A.bR,A.dz],x.O)
D.bTc=new C.a8(A.a3,A.a7,A.x,D.cl7,null,null)
D.ax0=w([A.eu,M.nI],x.O)
D.bTk=new C.a8(A.b0,A.b5,A.x,D.ax0,null,null)
D.bTB=new C.a8(A.b0,A.b5,A.x,I.anM,null,null)
D.bcc=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,A.t)
D.b5y=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,A.t)
D.cJx=w([D.bcc,D.b5y],x.O)
D.bTO=new C.a8(A.b0,A.b5,A.x,D.cJx,null,null)
D.bUo=new C.a8(A.ax,A.aC,A.x,A.a1n,null,null)
D.bgC=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,A.t)
D.ddY=w([D.bgC,A.Ka],x.O)
D.bUv=new C.a8(A.b0,A.b5,A.x,D.ddY,null,null)
D.cWL=w([A.aB,A.w],x.O)
D.bUA=new C.a8(A.b0,A.b5,A.x,D.cWL,null,null)
D.bUD=new C.a8(A.b0,A.b5,A.x,T.awr,null,null)
D.bg1=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bgL=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cxF=w([A.KS,D.bg1,D.bgL],x.O)
D.bUM=new C.a8(A.b0,A.b5,A.x,D.cxF,null,null)
D.clr=w([A.d9,A.fv],x.O)
D.bV1=new C.a8(A.b0,A.b5,A.x,D.clr,null,null)
D.bV7=new C.a8(A.ax,A.aC,A.x,A.a2a,null,null)
D.anO=w([0,2,4,6,7,9,11],x.t)
D.bVI=w([0,4,7],x.t)
D.anT=w([0,4,7,12],x.t)
D.bVJ=w([0,4,7,4],x.t)
D.aw7=w([A.h0,A.pt],x.O)
D.avG=w([A.hv,A.cZ],x.O)
D.au7=w([A.by,A.dO],x.O)
D.cG8=w([A.aM,A.d9],x.O)
D.cMr=w([A.ci,A.eM],x.O)
D.d4t=w([A.bU,A.lA],x.O)
D.atC=w([A.ct,A.jQ],x.O)
D.cL3=w([A.bJ,A.aK],x.O)
D.bW2=w([D.aw7,D.avG,A.a1u,D.au7,D.cG8,D.cMr,A.ave,D.d4t,D.atC,D.cL3],x.Q)
D.c_H=w([120,220,380],x.t)
D.c3r=w([12,16,19,24],x.t)
D.c3A=w([1400,800,450,2400],x.t)
D.c7P=w([0,0.6,1],x.n)
D.cbX=w([250,450,900,1500],x.t)
D.b6m=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bgn=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.bet=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bjy=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bdH=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.asS=w([D.b6m,D.bgn,D.bet,D.bjy,D.bdH],x.O)
D.ewf=new C.y("type","Typewriter")
D.ept=new C.y("bounce","Bounce")
D.ex1=new C.y("wave","Wave")
D.ey5=new C.y("zoom","Zoom")
D.csw=w([D.ewf,D.ept,D.ex1,A.a5i,I.aKX,D.ey5,I.aKZ],x.K)
D.csI=w([50,25,75],x.t)
D.cya=w([0,5,10,15,18,20,25],x.t)
D.er5=new C.y("fish","Fish")
D.er7=new C.y("fly","Fireflies")
D.epr=new C.y("bird","Birds")
D.cCk=w([D.er5,D.er7,D.epr],x.K)
D.cGo=w([900,500,250,1600],x.t)
D.cJW=w([0.78,1],x.n)
D.au8=w([0,2,4,7,9,12,14,16],x.t)
D.cKt=w([A.by,A.bA,A.b8,A.by],x.O)
D.aud=w(["A","T","C","G"],x.s)
D.cKu=w(["A","U","C","G"],x.s)
D.a1k=w([A.ay,A.co,A.bo,A.aT,A.nG],x.O)
D.cLL=w([A.aB,A.ay,A.ct,A.co,A.bo,A.cy,A.c9,A.bA,A.Ka],x.O)
D.a1o=w([0.04,0.17,0.3],x.n)
D.cMn=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.GF=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.eFW=new B.uE("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eG1=new B.uE("Medium engine","A good all-rounder.",0.3,0.9)
D.eG0=new B.uE("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.GG=w([D.eFW,D.eG1,D.eG0],x._)
D.efu=new C.y(6,"Easy")
D.eg4=new C.y(8,"Medium")
D.ebR=new C.y(10,"Hard")
D.cNc=w([D.efu,D.eg4,D.ebR],x.E)
D.aux=w([0.55,0.78,1],x.n)
D.cOI=w([0.93,0.975,1],x.n)
D.auI=w([A.c,A.h1,A.pg,A.aB],x.O)
D.fxF=new B.xI("Moon",1737,4291941851)
D.fxC=new B.xI("Earth",6371,4281908728)
D.fxG=new B.xI("Neptune",24622,4284524026)
D.fxH=new B.xI("Saturn",58232,4294829706)
D.fxD=new B.xI("Jupiter",69911,4294677052)
D.fxI=new B.xI("Sun",696340,4294688548)
D.fxJ=new B.xI("Sirius A",119e4,4290763774)
D.fxA=new B.xI("Arcturus",179e5,4294818420)
D.fxB=new B.xI("Betelgeuse",531e6,4294472049)
D.fxE=new B.xI("UY Scuti",667e6,4293870660)
D.Pl=w([D.fxF,D.fxC,D.fxG,D.fxH,D.fxD,D.fxI,D.fxJ,D.fxA,D.fxB,D.fxE],C.ax("O<xI>"))
D.eBt=new C.bt("glow","Glow",A.ZU)
D.ez8=new C.bt("rainbow","Rainbow",A.n8)
D.ezv=new C.bt("stars","Stars",A.i_)
D.eyT=new C.bt("sparks","Sparks",A.dW)
D.eAM=new C.bt("fire","Fire",A.vs)
D.cQt=w([D.eBt,D.ez8,D.ezv,D.eyT,D.eAM],x.c)
D.auM=w([A.bo,A.ay,A.co,A.d6],x.O)
D.cRs=w([0.2,1],x.n)
D.eFT=new B.uE("Radar","Shows your height above the ground.",0.1,0)
D.eFU=new B.uE("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eFR=new B.uE("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.auU=w([D.eFT,D.eFU,D.eFR],x._)
D.eA3=new C.bt("attract","Attract",A.y6)
D.ezQ=new C.bt("scare","Scare",A.qZ)
D.ez1=new C.bt("food","Food",A.tR)
D.bCH=new C.a_(983158,"MaterialIcons",!1)
D.eAm=new C.bt("hunt","Hunt",D.bCH)
D.cS4=w([D.eA3,D.ezQ,D.ez1,D.eAm],x.c)
D.cSt=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.cSI=w([47,100,220,470,1000],x.n)
D.avb=w([0,2,4,7,9],x.t)
D.HI={volts:0}
D.a34=new C.bm(D.HI,[3],x.J)
D.I3=new C.ev(["b","battery",0.2,0.3,D.a34])
D.dZK={on:0}
D.diC=new C.bm(D.dZK,[1],x.J)
D.CK=new C.ev(["s","switch",0.5,0.3,D.diC])
D.eE1=new C.ev(["l","bulb",0.8,0.3,A.iW])
D.cOo=w([D.I3,D.CK,D.eE1],x.d)
D.CJ=new C.cH(["b",0,"s",0])
D.eD2=new C.cH(["s",1,"l",0])
D.aL2=new C.cH(["l",1,"b",1])
D.d3s=w([D.CJ,D.eD2,D.aL2],x.o)
D.cNS=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eba=new B.mv("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cOo,D.d3s,D.cNS)
D.aFa={ohms:0}
D.aCL=new C.bm(D.aFa,[220],x.J)
D.eDv=new C.ev(["r","resistor",0.5,0.3,D.aCL])
D.eEg=new C.ev(["d","led",0.8,0.3,A.iW])
D.d6o=w([D.I3,D.eDv,D.eEg],x.d)
D.eCn=new C.cH(["b",0,"r",0])
D.eCX=new C.cH(["r",1,"d",0])
D.eCt=new C.cH(["d",1,"b",1])
D.der=w([D.eCn,D.eCX,D.eCt],x.o)
D.d6N=w(["led","diode","indicator"],x.s)
D.ebh=new B.mv("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.d6o,D.der,D.d6N)
D.a4l={level:0}
D.di0=new C.bm(D.a4l,[0.2],x.J)
D.eDB=new C.ev(["p","pot",0.5,0.3,D.di0])
D.eDD=new C.ev(["m","motor",0.8,0.3,A.iW])
D.cOG=w([D.I3,D.eDB,D.eDD],x.d)
D.eCm=new C.cH(["b",0,"p",0])
D.eCT=new C.cH(["p",1,"m",0])
D.eCP=new C.cH(["m",1,"b",1])
D.dax=w([D.eCm,D.eCT,D.eCP],x.o)
D.d3b=w(["fan","motor","spin","dimmer"],x.s)
D.eb8=new B.mv("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cOG,D.dax,D.d3b)
D.a31=new C.bm(D.a4l,[0.9],x.J)
D.aL9=new C.ev(["s","solar",0.25,0.3,D.a31])
D.aL8=new C.ev(["l","bulb",0.75,0.3,A.iW])
D.cRa=w([D.aL9,D.aL8],x.d)
D.eD_=new C.cH(["s",0,"l",0])
D.eCN=new C.cH(["l",1,"s",1])
D.cPp=w([D.eD_,D.eCN],x.o)
D.db5=w(["solar","sun","without battery","no battery","free"],x.s)
D.ebb=new B.mv("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cRa,D.cPp,D.db5)
D.eEj=new C.ev(["c","crank",0.25,0.3,D.a31])
D.d1B=w([D.eEj,D.aL8],x.d)
D.eCq=new C.cH(["c",0,"l",0])
D.eCM=new C.cH(["l",1,"c",1])
D.d28=w([D.eCq,D.eCM],x.o)
D.d1K=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eb7=new B.mv("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.d1B,D.d28,D.d1K)
D.di_=new C.bm(D.a4l,[0.7],x.J)
D.eDG=new C.ev(["t","turbine",0.25,0.3,D.di_])
D.eDt=new C.ev(["m","motor",0.75,0.3,A.iW])
D.cXn=w([D.eDG,D.eDt],x.d)
D.eDa=new C.cH(["t",0,"m",0])
D.eCQ=new C.cH(["m",1,"t",1])
D.cWp=w([D.eDa,D.eCQ],x.o)
D.d0u=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eb4=new B.mv("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.cXn,D.cWp,D.d0u)
D.aCI=new C.bm(D.HI,[9],x.J)
D.a5l=new C.ev(["b","battery",0.2,0.3,D.aCI])
D.aL7=new C.ev(["r","radio",0.8,0.3,A.iW])
D.dbF=w([D.a5l,D.CK,D.aL7],x.d)
D.eD4=new C.cH(["s",1,"r",0])
D.aL3=new C.cH(["r",1,"b",1])
D.bVr=w([D.CJ,D.eD4,D.aL3],x.o)
D.dak=w(["radio","music","listen"],x.s)
D.ebg=new B.mv("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dbF,D.bVr,D.dak)
D.dj4=new C.bm(D.HI,[12],x.J)
D.aL6=new C.ev(["b","battery",0.2,0.3,D.dj4])
D.eE2=new C.ev(["t","tv",0.8,0.3,A.iW])
D.cOp=w([D.aL6,D.CK,D.eE2],x.d)
D.eD5=new C.cH(["s",1,"t",0])
D.aL4=new C.cH(["t",1,"b",1])
D.d4w=w([D.CJ,D.eD5,D.aL4],x.o)
D.dbD=w(["tv","television","screen","watch"],x.s)
D.eb1=new B.mv("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cOp,D.d4w,D.dbD)
D.eDT=new C.ev(["z","buzzer",0.8,0.3,A.iW])
D.cv0=w([D.I3,D.CK,D.eDT],x.d)
D.eD6=new C.cH(["s",1,"z",0])
D.eDo=new C.cH(["z",1,"b",1])
D.cJI=w([D.CJ,D.eD6,D.eDo],x.o)
D.d8K=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.ebd=new B.mv("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cv0,D.cJI,D.d8K)
D.eDC=new C.ev(["h","heater",0.8,0.3,A.iW])
D.d_d=w([D.a5l,D.CK,D.eDC],x.d)
D.eD1=new C.cH(["s",1,"h",0])
D.eCB=new C.cH(["h",1,"b",1])
D.cKp=w([D.CJ,D.eD1,D.eCB],x.o)
D.cfd=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eb2=new B.mv("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d_d,D.cKp,D.cfd)
D.eE4=new C.ev(["s","solar",0.2,0.25,D.a31])
D.dj9=new C.bm(D.aFa,[100],x.J)
D.eE7=new C.ev(["r","resistor",0.55,0.25,D.dj9])
D.eEe=new C.ev(["c","capacitor",0.85,0.25,A.iW])
D.eDy=new C.ev(["q","resistor",0.55,0.6,D.aCL])
D.eE5=new C.ev(["d","led",0.85,0.6,A.iW])
D.d48=w([D.eE4,D.eE7,D.eEe,D.eDy,D.eE5],x.d)
D.eD0=new C.cH(["s",0,"r",0])
D.eCW=new C.cH(["r",1,"c",0])
D.eCs=new C.cH(["c",1,"s",1])
D.eCr=new C.cH(["c",0,"q",0])
D.eCV=new C.cH(["q",1,"d",0])
D.eCu=new C.cH(["d",1,"c",1])
D.cUw=w([D.eD0,D.eCW,D.eCs,D.eCr,D.eCV,D.eCu],x.o)
D.d0Y=w(["capacitor","store","charge","flash"],x.s)
D.ebf=new B.mv("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.d48,D.cUw,D.d0Y)
D.eDJ=new C.ev(["b","battery",0.15,0.3,D.a34])
D.eEk=new C.ev(["l1","bulb",0.5,0.3,A.iW])
D.eDQ=new C.ev(["l2","bulb",0.85,0.3,A.iW])
D.cMF=w([D.eDJ,D.eEk,D.eDQ],x.d)
D.eCl=new C.cH(["b",0,"l1",0])
D.eCJ=new C.cH(["l1",1,"l2",0])
D.eCK=new C.cH(["l2",1,"b",1])
D.cY0=w([D.eCl,D.eCJ,D.eCK],x.o)
D.dbp=w(["series","two bulbs","dim"],x.s)
D.eb5=new B.mv("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cMF,D.cY0,D.dbp)
D.dZX={volts:0,charge:1}
D.djf=new C.bm(D.dZX,[1.5,0],x.J)
D.eEc=new C.ev(["b","battery",0.75,0.3,D.djf])
D.cM6=w([D.aL9,D.eEc],x.d)
D.eCZ=new C.cH(["s",0,"b",0])
D.eCp=new C.cH(["b",1,"s",1])
D.cUM=w([D.eCZ,D.eCp],x.o)
D.d14=w(["charge","rechargeable","flat","recharge"],x.s)
D.eb3=new B.mv("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cM6,D.cUM,D.d14)
D.dj3=new C.bm(D.HI,[4.5],x.J)
D.eDE=new C.ev(["b","battery",0.2,0.3,D.dj3])
D.aL5=new C.ev(["p","phone",0.8,0.3,A.iW])
D.cXd=w([D.eDE,D.CK,D.aL5],x.d)
D.eD3=new C.cH(["s",1,"p",0])
D.a5k=new C.cH(["p",1,"b",1])
D.d7M=w([D.CJ,D.eD3,D.a5k],x.o)
D.d97=w(["phone","charger","usb","mobile"],x.s)
D.eb9=new B.mv("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.cXd,D.d7M,D.d97)
D.eDq=new C.ev(["f","fan",0.8,0.3,A.iW])
D.c7o=w([D.I3,D.eDq],x.d)
D.eCk=new C.cH(["b",0,"f",0])
D.eCz=new C.cH(["f",1,"b",1])
D.cKS=w([D.eCk,D.eCz],x.o)
D.d3a=w(["fan","cool","air","wind"],x.s)
D.ebi=new B.mv("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.c7o,D.cKS,D.d3a)
D.eDX=new C.ev(["b","battery",0.15,0.2,D.a34])
D.eDr=new C.ev(["a","ammeter",0.5,0.2,A.iW])
D.eDp=new C.ev(["l","bulb",0.85,0.2,A.iW])
D.eDZ=new C.ev(["v","voltmeter",0.5,0.6,A.iW])
D.d1n=w([D.eDX,D.eDr,D.eDp,D.eDZ],x.d)
D.eCi=new C.cH(["b",0,"a",0])
D.eCh=new C.cH(["a",1,"l",0])
D.eDc=new C.cH(["v",0,"l",0])
D.eDd=new C.cH(["v",1,"l",1])
D.cUD=w([D.eCi,D.eCh,D.aL2,D.eDc,D.eDd],x.o)
D.deq=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.ebe=new B.mv("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.d1n,D.cUD,D.deq)
D.eEn=new C.ev(["b","battery",0.15,0.2,D.aCI])
D.eDI=new C.ev(["t","tv",0.55,0.2,A.iW])
D.aCJ=new C.bm(D.HI,[5],x.J)
D.eDw=new C.ev(["c","buck",0.4,0.5,D.aCJ])
D.eDK=new C.ev(["p","phone",0.8,0.5,A.iW])
D.cSv=w([D.eEn,D.eDI,D.eDw,D.eDK],x.d)
D.eCo=new C.cH(["b",0,"t",0])
D.aL0=new C.cH(["b",0,"c",0])
D.aL1=new C.cH(["c",1,"p",0])
D.cXa=w([D.eCo,D.aL4,D.aL0,D.aL1,D.a5k],x.o)
D.cQK=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eb6=new B.mv("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cSv,D.cXa,D.cQK)
D.eDx=new C.ev(["c","buck",0.5,0.3,D.aCJ])
D.cKg=w([D.aL6,D.eDx,D.aL5],x.d)
D.cOP=w([D.aL0,D.aL1,D.a5k],x.o)
D.ciB=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eb0=new B.mv("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cKg,D.cOP,D.ciB)
D.eDO=new C.ev(["d","diode",0.5,0.3,A.iW])
D.cYd=w([D.a5l,D.eDO,D.aL7],x.d)
D.eCj=new C.cH(["b",0,"d",0])
D.eCv=new C.cH(["d",1,"r",0])
D.cxv=w([D.eCj,D.eCv,D.aL3],x.o)
D.cQq=w(["diode","protect","backwards","one way"],x.s)
D.ebc=new B.mv("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.cYd,D.cxv,D.cQq)
D.Po=w([D.eba,D.ebh,D.eb8,D.ebb,D.eb7,D.eb4,D.ebg,D.eb1,D.ebd,D.eb2,D.ebf,D.eb5,D.eb3,D.eb9,D.ebi,D.ebe,D.eb6,D.eb0,D.ebc],C.ax("O<mv>"))
D.fT6=new B.FC("Moon",1.62,A.dz,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.fT4=new B.FC("Mars",3.71,A.ay,"Mars has about 38 percent of Earth's gravity.")
D.fT7=new B.FC("Mercury",3.7,A.jP,"Mercury is small, so its gravity is like Mars.")
D.fT1=new B.FC("Venus",8.87,A.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.fT3=new B.FC("Earth",9.81,A.aT,"On Earth gravity is strong, and the air also slows you down.")
D.fT5=new B.FC("Neptune",11.15,A.d6,"Neptune pulls a little harder than Earth.")
D.fT2=new B.FC("Jupiter",24.79,A.ct,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.r8=w([D.fT6,D.fT4,D.fT7,D.fT1,D.fT3,D.fT5,D.fT2],C.ax("O<FC>"))
D.cUu=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a1E=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cV8=w([0.2,0.5,0.8],x.n)
D.bBc=new C.a_(63040,"MaterialIcons",!1)
D.ezU=new C.bt("peg","Peg",D.bBc)
D.ez5=new C.bt("bar","Bar",V.Br)
D.ezy=new C.bt("erase","Erase",A.MG)
D.cVj=w([D.ezU,D.ez5,D.ezy],x.c)
D.eIJ=new C.cP(A.bh,A.J,4)
D.cVt=w([D.eIJ],x.q)
D.avq=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aTR=new B.JS(0,"accordion")
D.cL9=w([A.ji,A.Bs,A.Bg],x.w)
D.cRX=w(["Mail","SMS","Ad"],x.s)
D.cLD=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.fRj=new B.A7(D.aTR,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aw7,D.cL9,D.cRX,D.cLD)
D.a8H=new B.JS(1,"flip")
D.d0S=w([A.pM,A0.G4,A.tS],x.w)
D.cWU=w(["Unlock","Verify","Secure"],x.s)
D.cKc=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.fRi=new B.A7(D.a8H,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.avG,D.d0S,D.cWU,D.cKc)
D.aTS=new B.JS(2,"towers")
D.cVL=w([A.y1,A.pR,A.hK],x.w)
D.cVp=w(["Save","Grow","Earn"],x.s)
D.cyj=w(["","",""],x.s)
D.fRk=new B.A7(D.aTS,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a1u,D.cVL,D.cVp,D.cyj)
D.a8I=new B.JS(3,"assemble")
D.d1N=w([A.nb,A.h8,A.dW],x.w)
D.cRl=w(["Launch","Charge","Shine"],x.s)
D.cZp=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.fRm=new B.A7(D.a8I,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.au7,D.d1N,D.cRl,D.cZp)
D.aTT=new B.JS(4,"carousel")
D.d1C=w([A.b8,A.fh],x.O)
D.cS6=w([A.mm,A.ak3,A.a_C],x.w)
D.cN2=w(["Explore","Discover","Learn"],x.s)
D.cXi=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.fRh=new B.A7(D.aTT,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.d1C,D.cS6,D.cN2,D.cXi)
D.aTU=new B.JS(5,"burst")
D.cVl=w([A.j4,A.t4],x.O)
D.cLy=w([A.lc,A.ml,A.hZ],x.w)
D.cLT=w(["Cheer","Win","Love"],x.s)
D.cNY=w(["Make some noise","First place","Share the joy"],x.s)
D.fRl=new B.A7(D.aTU,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cVl,D.cLy,D.cLT,D.cNY)
D.avr=w([D.fRj,D.fRi,D.fRk,D.fRm,D.fRh,D.fRl],C.ax("O<A7>"))
D.ezW=new C.bt("skin","Skin",A.ak4)
D.eBg=new C.bt("muscle","Muscles",A.MS)
D.eB_=new C.bt("organ","Organs",A.hZ)
D.bAE=new C.a_(62747,"MaterialIcons",!1)
D.eB4=new C.bt("bone","Skeleton",D.bAE)
D.eBm=new C.bt("vessel","Blood vessels",A.pT)
D.cVQ=w([D.ezW,D.eBg,D.eB_,D.eB4,D.eBm],x.c)
D.eFV=new B.uE("Simple legs","Light. Land gently.",0.15,0.2)
D.eFX=new B.uE("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eG_=new B.uE("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.BP=w([D.eFV,D.eFX,D.eG_],x._)
D.cXq=w([1.77,3.55,7.15,16.7],x.n)
D.cZO=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.evJ=new C.y("spiral","Spiral")
D.efs=new C.y("barred","Barred spiral")
D.eqB=new C.y("elliptical","Elliptical")
D.d_t=w([D.evJ,D.efs,D.eqB],x.K)
D.eC_=new C.cH(["beat",0.18,0.28,0])
D.eD7=new C.cH(["burst",0.7,0.2,0])
D.eDi=new C.cH(["delay",0.45,0.5,1])
D.eCS=new C.cH(["ripple",0.75,0.6,3])
D.cR5=w([D.eC_,D.eD7,D.eDi,D.eCS],x.e)
D.a5d=new C.y(2,3)
D.d0i=w([N.ln,K.I2,D.a5d],x.u)
D.fQz=new B.Fo("First spark","A clock lights a burst and a ripple",D.cR5,D.d0i)
D.eCy=new C.cH(["beat",0.15,0.3,1])
D.eBE=new C.cH(["ripple",0.62,0.15,0])
D.eDe=new C.cH(["delay",0.4,0.45,0])
D.eCe=new C.cH(["ripple",0.7,0.45,0])
D.eBW=new C.cH(["delay",0.4,0.7,1])
D.eCU=new C.cH(["shake",0.75,0.75,0])
D.dcn=w([D.eCy,D.eBE,D.eDe,D.eCe,D.eBW,D.eCU],x.e)
D.ecN=new C.y(2,4)
D.aKR=new C.y(4,5)
D.cUl=w([N.ln,K.I2,D.a5d,D.ecN,D.aKR],x.u)
D.fQB=new B.Fo("Heartbeat","Two thumps, then a shake",D.dcn,D.cUl)
D.eC4=new C.cH(["dice",0.15,0.7,1])
D.eDk=new C.cH(["echo",0.4,0.7,0])
D.eCc=new C.cH(["comet",0.7,0.5,4])
D.eD8=new C.cH(["burst",0.72,0.2,1])
D.eCw=new C.cH(["burst",0.3,0.25,0])
D.eC5=new C.cH(["pop",0.55,0.85,0])
D.ceN=w([D.eC4,D.eDk,D.eCc,D.eD8,D.eCw,D.eC5],x.e)
D.ecd=new C.y(1,3)
D.ece=new C.y(1,4)
D.aKP=new C.y(0,5)
D.d1x=w([N.ln,K.vY,D.ecd,D.ece,D.aKP],x.u)
D.fQA=new B.Fo("Fireworks","Dice launch comets that burst in colour",D.ceN,D.d1x)
D.eC9=new C.cH(["beat",0.15,0.2,2])
D.eCG=new C.cH(["chance",0.4,0.2,0])
D.eC1=new C.cH(["ball",0.7,0.12,3])
D.eBP=new C.cH(["chance",0.4,0.5,1])
D.eDj=new C.cH(["ball",0.3,0.08,1])
D.eBI=new C.cH(["ripple",0.7,0.55,3])
D.c7Q=w([D.eC9,D.eCG,D.eC1,D.eBP,D.eDj,D.eBI],x.e)
D.a5e=new C.y(3,4)
D.ecO=new C.y(2,5)
D.cuL=w([N.ln,K.vY,K.a5c,D.a5e,D.ecO],x.u)
D.fQy=new B.Fo("Rain","Balls fall at random and splash",D.c7Q,D.cuL)
D.eCH=new C.cH(["beat",0.12,0.45,2])
D.eD9=new C.cH(["toggle",0.38,0.2,0])
D.eDg=new C.cH(["wash",0.7,0.15,4])
D.eC3=new C.cH(["count3",0.38,0.45,0])
D.eDb=new C.cH(["burst",0.72,0.4,0])
D.eCx=new C.cH(["light",0.55,0.7,1])
D.eBQ=new C.cH(["pop",0.8,0.8,4])
D.d46=w([D.eCH,D.eD9,D.eDg,D.eC3,D.eDb,D.eCx,D.eBQ],x.e)
D.edd=new C.y(3,6)
D.caX=w([N.ln,K.vY,K.a5c,D.a5e,D.aKP,D.edd],x.u)
D.fQw=new B.Fo("Disco","A beat drives lights, washes and bursts",D.d46,D.caX)
D.eDn=new C.cH(["button",0.12,0.2,0])
D.eBK=new C.cH(["delay",0.34,0.2,1])
D.eDm=new C.cH(["light",0.56,0.2,1])
D.eDf=new C.cH(["delay",0.56,0.45,1])
D.eCI=new C.cH(["ball",0.34,0.6,0])
D.eBO=new C.cH(["delay",0.34,0.8,1])
D.eBD=new C.cH(["burst",0.7,0.8,5])
D.bW5=w([D.eDn,D.eBK,D.eDm,D.eDf,D.eCI,D.eBO,D.eBD],x.e)
D.efc=new C.y(5,6)
D.d8T=w([N.ln,K.vY,D.a5d,D.a5e,D.aKR,D.efc],x.u)
D.fQx=new B.Fo("Domino","Tap the button and watch it run down the line",D.bW5,D.d8T)
D.avK=w([D.fQz,D.fQB,D.fQA,D.fQy,D.fQw,D.fQx],C.ax("O<Fo>"))
D.d_B=w([0.05,0.15,0.25],x.n)
D.d_P=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.d0t=w([1.5,3,4.5,9,12],x.n)
D.eyE=new C.bt("dice","Dice",A.mk)
D.ezE=new C.bt("coin","Coin",L.xV)
D.eBh=new C.bt("num","Number",A.y4)
D.d0D=w([D.eyE,D.ezE,D.eBh],x.c)
D.d0G=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fxK=new B.OA("Moon",1.62,0,4291941851)
D.fxL=new B.OA("Mars",3.71,0.01,4294472049)
D.fxM=new B.OA("Earth",9.81,1,4281908728)
D.fxO=new B.OA("Jupiter",24.79,1.4,4294677052)
D.fxN=new B.OA("Sun",274,2,4294688548)
D.yu=w([D.fxK,D.fxL,D.fxM,D.fxO,D.fxN],C.ax("O<OA>"))
D.avQ=w([A.ci,A.aM,A.b7,A.aT,A.by,A.bU,A.ct,A.hv],x.O)
D.dYn={H:0}
D.diD=new C.bm(D.dYn,[2],x.I)
D.dkd=new B.t3("Hydrogen","H\u2082",D.diD,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.dYo={H:0,Cl:1}
D.diQ=new C.bm(D.dYo,[1,1],x.I)
D.dkf=new B.t3("Hydrogen chloride","HCl",D.diQ,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.dYp={H:0,O:1}
D.dim=new C.bm(D.dYp,[2,1],x.I)
D.dkg=new B.t3("Water","H\u2082O",D.dim,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.dYC={N:0,H:1}
D.djd=new C.bm(D.dYC,[1,3],x.I)
D.dko=new B.t3("Ammonia","NH\u2083",D.djd,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a4k={C:0,H:1}
D.dj7=new C.bm(D.a4k,[1,4],x.I)
D.dkh=new B.t3("Methane","CH\u2084",D.dj7,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.dYq={H:0,S:1}
D.dhv=new C.bm(D.dYq,[2,1],x.I)
D.dkn=new B.t3("Hydrogen sulfide","H\u2082S",D.dhv,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.dYH={O:0}
D.djb=new C.bm(D.dYH,[2],x.I)
D.dkp=new B.t3("Oxygen","O\u2082",D.djb,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.dYB={N:0}
D.diE=new C.bm(D.dYB,[2],x.I)
D.dke=new B.t3("Nitrogen","N\u2082",D.diE,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.dYb={C:0,O:1}
D.djk=new C.bm(D.dYb,[1,2],x.I)
D.dkl=new B.t3("Carbon dioxide","CO\u2082",D.djk,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aF7={C:0,H:1,O:2}
D.dhh=new C.bm(D.aF7,[1,2,1],x.I)
D.dkm=new B.t3("Formaldehyde","CH\u2082O",D.dhh,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.dj6=new C.bm(D.a4k,[2,4],x.I)
D.dkj=new B.t3("Ethene","C\u2082H\u2084",D.dj6,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.dj5=new C.bm(D.a4k,[2,6],x.I)
D.dki=new B.t3("Ethane","C\u2082H\u2086",D.dj5,"Two carbons joined by a single bond, each holding three hydrogens.")
D.dhi=new C.bm(D.aF7,[1,4,1],x.I)
D.dkk=new B.t3("Methanol","CH\u2083OH",D.dhi,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a1U=w([D.dkd,D.dkf,D.dkg,D.dko,D.dkh,D.dkn,D.dkp,D.dke,D.dkl,D.dkm,D.dkj,D.dki,D.dkk],C.ax("O<t3>"))
D.d1D=w([A.bU,A.aT,A.dN,A.b7],x.O)
D.d2x=w([],x.h)
D.d2z=w([],x.B)
D.a22=w([],x.F)
D.e4Q=new B.e9("battery","Battery","\ud83d\udd0b",A.b7,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.e4W=new B.e9("solar","Solar panel","\u2600\ufe0f",A.co,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.e5A=new B.e9("crank","Hand crank","\ud83d\udd04",A.ct,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.e5c=new B.e9("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aT,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.e4I=new B.e9("buck","Step-down converter","\ud83d\udd3d",A.hv,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.e5a=new B.e9("regulator","5 V regulator","\ud83e\uddca",A.bJ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.e5F=new B.e9("diode","Diode","\u27a1\ufe0f",A.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.e5m=new B.e9("ldr","Light sensor","\ud83c\udf1e",A.dN,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.e50=new B.e9("switch","Switch","\ud83c\udf9a\ufe0f",A.by,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.e5C=new B.e9("fuse","Fuse","\ud83e\uddef",A.ci,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.e4A=new B.e9("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hv,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.e5n=new B.e9("resistor","Resistor","\u3030\ufe0f",A.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.e5p=new B.e9("bulb","Light bulb","\ud83d\udca1",A.dN,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.e4Y=new B.e9("led","LED","\ud83d\udd34",A.ay,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.e51=new B.e9("motor","Motor","\u2699\ufe0f",A.bJ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.e5j=new B.e9("buzzer","Buzzer","\ud83d\udd14",A.bU,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.e4R=new B.e9("heater","Heater","\ud83d\udd25",A.ct,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.e5e=new B.e9("capacitor","Capacitor","\ud83e\udeab",A.cs,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.e56=new B.e9("radio","Radio","\ud83d\udcfb",A.nG,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.e53=new B.e9("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b8,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.e4H=new B.e9("voltmeter","Voltmeter","\ud83e\udded",A.bt,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.e4O=new B.e9("ammeter","Ammeter","\ud83d\udcdf",A.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.e4U=new B.e9("fan","Fan","\ud83c\udf00",A.aT,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.e5H=new B.e9("speaker","Speaker","\ud83d\udd0a",A.bU,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.e5w=new B.e9("clock","Digital clock","\u23f0",A.b7,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.e59=new B.e9("calculator","Calculator","\ud83e\uddee",A.K4,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.e4N=new B.e9("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cs,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.e5G=new B.e9("router","WiFi router","\ud83d\udcf6",A.hv,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.e5J=new B.e9("siren","Siren","\ud83d\udea8",A.ay,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.e4D=new B.e9("toycar","Toy car","\ud83d\ude97",A.ct,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.e5K=new B.e9("kettle","Kettle","\ud83e\uded6",A.op,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.e4L=new B.e9("lamp","Desk lamp","\ud83e\ude94",A.dN,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.e4X=new B.e9("lights","Party lights","\ud83c\udf84",A.nG,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.e57=new B.e9("fridge","Fridge","\ud83e\uddca",A.hi,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.e4F=new B.e9("washer","Washing machine","\ud83e\udee7",A.cs,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.e5x=new B.e9("blender","Blender","\ud83e\udd64",A.ci,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.e54=new B.e9("drone","Drone","\ud83d\ude81",A.bJ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.e4K=new B.e9("drill","Power drill","\ud83d\udd29",A.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.e58=new B.e9("torch","Torch","\ud83d\udd26",A.bK,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.e5u=new B.e9("neon","Neon sign","\ud83e\udea7",A.bU,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.e4G=new B.e9("microwave","Microwave","\ud83c\udf72",A.ct,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.e5o=new B.e9("doorbell","Doorbell","\ud83d\udd14",A.co,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.e4T=new B.e9("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.e5i=new B.e9("console","Game console","\ud83c\udfae",A.by,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.e5z=new B.e9("heartmon","Heart monitor","\ud83e\ude7a",A.h_,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.e4E=new B.e9("aquarium","Aquarium","\ud83d\udc20",A.b8,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.e5d=new B.e9("lighthouse","Lighthouse","\ud83d\uddfc",A.dN,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.e5l=new B.e9("discoball","Disco ball","\ud83e\udea9",A.nG,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.e5E=new B.e9("robot","Robot","\ud83e\udd16",A.aT,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.e4C=new B.e9("toaster","Toaster","\ud83c\udf5e",A.dT,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.e5I=new B.e9("ledstrip","LED strip","\ud83c\udf08",A.bU,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.e5t=new B.e9("pump","Water pump","\ud83d\udeb0",A.aT,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.e5f=new B.e9("hairdryer","Hair dryer","\ud83d\udca8",A.j4,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.e5r=new B.e9("headphones","Headphones","\ud83c\udfa7",A.by,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.e4M=new B.e9("smartwatch","Apple Watch Ultra","\u231a",A.bt,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.e5D=new B.e9("tablet","iPad Pro M5","\ud83d\udcf2",A.cs,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.e4z=new B.e9("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h_,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.e55=new B.e9("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bq,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.e4Z=new B.e9("appletv","Apple TV 4K","\ud83d\udcfa",A.bR,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.e5k=new B.e9("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.t1,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.e4B=new B.e9("iphonefold","iPhone Fold","\ud83d\udcf1",A.b6,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.e4P=new B.e9("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d6,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.e5B=new B.e9("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cy,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.e5g=new B.e9("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bo,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.e5b=new B.e9("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cd,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.e5s=new B.e9("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ay,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.e5_=new B.e9("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b7,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.e5h=new B.e9("honor","Honor Magic V5","\ud83d\udcf1",A.cs,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.e5q=new B.e9("vivo","vivo X300 Pro","\ud83d\udcf1",A.ct,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.e5v=new B.e9("ereader","Kindle Scribe","\ud83d\udcd6",A.bq,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.e4y=new B.e9("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.c9,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.e52=new B.e9("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cy,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.e4V=new B.e9("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b8,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.e4J=new B.e9("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dN,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.e4S=new B.e9("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ay,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.e5y=new B.e9("vision","Apple Vision Pro","\ud83e\udd7d",A.by,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.PN=w([D.e4Q,D.e4W,D.e5A,D.e5c,D.e4I,D.e5a,D.e5F,D.e5m,D.e50,D.e5C,D.e4A,D.e5n,D.e5p,D.e4Y,D.e51,D.e5j,D.e4R,D.e5e,D.e56,D.e53,D.e4H,D.e4O,D.e4U,D.e5H,D.e5w,D.e59,D.e4N,D.e5G,D.e5J,D.e4D,D.e5K,D.e4L,D.e4X,D.e57,D.e4F,D.e5x,D.e54,D.e4K,D.e58,D.e5u,D.e4G,D.e5o,D.e4T,D.e5i,D.e5z,D.e4E,D.e5d,D.e5l,D.e5E,D.e4C,D.e5I,D.e5t,D.e5f,D.e5r,D.e4M,D.e5D,D.e4z,D.e55,D.e4Z,D.e5k,D.e4B,D.e4P,D.e5B,D.e5g,D.e5b,D.e5s,D.e5_,D.e5h,D.e5q,D.e5v,D.e4y,D.e52,D.e4V,D.e4J,D.e4S,D.e5y],C.ax("O<e9>"))
D.d2W=w([0,0.46,0.82],x.n)
D.d36=w([5,10,15,25,45,60],x.t)
D.d3q=w([-0.045,0.03,-0.015],x.n)
D.d3O=w([0.9,0.97,1],x.n)
D.awf=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.u_=w([0.05,0.2,0.35],x.n)
D.cLX=w([D.Es,D.Es],x.O)
D.cR1=w([A.ED,A.M],x.O)
D.cQ4=w([A.fC,A.hu],x.O)
D.cK9=w([A.fh,A.nF],x.O)
D.c7m=w([A.lA,A.dv],x.O)
D.awg=w([D.cLX,D.cR1,D.cQ4,D.cK9,D.c7m],x.Q)
D.fxy=new B.uR("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fxz=new B.uR("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fxq=new B.uR("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fxx=new B.uR("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fxv=new B.uR("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fxr=new B.uR("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fxw=new B.uR("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fxs=new B.uR("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fxu=new B.uR("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fxt=new B.uR("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.BV=w([D.fxy,D.fxz,D.fxq,D.fxx,D.fxv,D.fxr,D.fxw,D.fxs,D.fxu,D.fxt],C.ax("O<uR>"))
D.bdm=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.d4X=w([D.Es,D.bdm,D.acJ,A.acg],x.O)
D.b_C=new C.ac(0,A.G,A.hG,A.dD,6)
D.d5P=w([D.b_C],x.V)
D.ebz=new C.y(0,"AND")
D.ecf=new C.y(1,"Adder")
D.ecP=new C.y(2,"Blinker")
D.ede=new C.y(3,"Memory")
D.d6z=w([D.ebz,D.ecf,D.ecP,D.ede],x.E)
D.aws=w([-104,0,104],x.n)
D.awt=w([-14,3],x.n)
D.d72=w([-16,16],x.n)
D.awu=w([-22,22],x.n)
D.d7a=w([-8,0,8],x.n)
D.d7b=w([-8,8],x.n)
D.awx=w([-92,0,92],x.n)
D.d7w=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eFS=new B.uE("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eFZ=new B.uE("Medium tank","Balanced.",0.35,1)
D.eFY=new B.uE("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Q_=w([D.eFS,D.eFZ,D.eFY],x._)
D.nf=w([0.04,0.2,0.36],x.n)
D.awH=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eAZ=new C.bt(D.aTR,"Fold",L.al4)
D.eAa=new C.bt(D.a8H,"Flip",A.FI)
D.bAX=new C.a_(62889,"MaterialIcons",!1)
D.eBf=new C.bt(D.aTS,"Rise",D.bAX)
D.ali=new C.a_(983870,"MaterialIcons",!1)
D.eyd=new C.bt(D.a8I,"Assemble",D.ali)
D.eym=new C.bt(D.aTT,"Spin",D.ajy)
D.eyj=new C.bt(D.aTU,"Pop",A.lc)
D.d8Q=w([D.eAZ,D.eAa,D.eBf,D.eyd,D.eym,D.eyj],C.ax("O<+(JS,n,a_)>"))
D.awM=w([A.bU,A.dN,A.bt,A.aT,A.by,A.ci],x.O)
D.d90=w([A.aT,A.ct,A.ct,A.b7],x.O)
D.d9c=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.exb=new C.y("Make the output turn HALF as fast as the input.",0.5)
D.eiB=new C.y("Make the output turn TWICE as fast.",2)
D.ecp=new C.y("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.evT=new C.y("Make the output turn 4 times faster.",4)
D.eo9=new C.y("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.erb=new C.y("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.epI=new C.y("Make the output turn 3 times faster.",3)
D.eqs=new C.y("Make the output spin at the same speed as the input, using four different gears.",1)
D.awR=w([D.exb,D.eiB,D.ecp,D.evT,D.eo9,D.erb,D.epI,D.eqs],C.ax("O<+(n,N)>"))
D.daa=w([3,4.5,5,6,9],x.n)
D.b09=new C.ac(0,A.G,A.aX,A.J,16)
D.daB=w([D.b09],x.V)
D.Q1=w([A.bU,A.co,A.b7,A.aT,A.by,A.ci,A.c,A.ct],x.O)
D.db2=w(["solar","turbine","crank","pot"],x.s)
D.dbn=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.dbt=w([0,0.35,0.75,1],x.n)
D.eyz=new C.bt("drop","Drop",D.akU)
D.eyB=new C.bt("weight","Weight",R.alm)
D.eBa=new C.bt("cannon","Newton's cannon",A.akh)
D.dc5=w([D.eyz,D.eyB,D.eBa],x.c)
D.eux=new C.y("piano","Piano")
D.eud=new C.y("organ","Organ")
D.epp=new C.y("bell","Bell")
D.euz=new C.y("pluck","Pluck")
D.evS=new C.y("synth","Synth")
D.er6=new C.y("flute","Flute")
D.ax8=w([D.eux,D.eud,D.epp,D.euz,D.evS,D.er6],x.K)
D.dcB=w(["volts","level","ohms","on"],x.s)
D.ddR=w([A.ji,A.Bs,A.Bg,A.pM,A0.G4,A.tS,A.y1,A.pR,A.hK,A.nb,A.h8,A.dW,A.hZ,A.i_,A.ml,A.lK,A.y2,A.r5,A.lL,A.FA,A.tR,A.MU,A.Bi,A.akP,A.MK,A.xY,A.MS,A.akr,T.ale,A.lc],x.w)
D.deK=w([0.72,1],x.n)
D.deV=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.dZP={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dhb=new C.bm(D.dZP,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.l)
D.aF9={A:0,T:1,C:2,G:3}
D.a2W=new C.bm(D.aF9,["U","A","G","C"],x.l)
D.dhj=new C.bm(D.aF9,["T","A","G","C"],x.l)
D.dYy={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.d1H=w([0,2,4,5,7,9,11],x.t)
D.cLf=w([0,2,3,5,7,8,10],x.t)
D.d6L=w([0,3,5,6,7,10],x.t)
D.C0=new C.bm(D.dYy,[D.avb,D.d1H,D.cLf,D.d6L,D.anO],C.ax("bm<n,aj<H>>"))
D.dZD={A:0,T:1,U:2,C:3,G:4}
D.dhy=new C.bm(D.dZD,[A.ci,A.cs,A.cs,A.aM,A.b7],C.ax("bm<n,w>"))
D.dXW={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.fKf=new B.xK("Switch",F.Nh,A.co,0,"Tap it to turn it ON or OFF.")
D.fKb=new B.xK("Blinker",A.oE,A.bt,0,"Turns itself ON and OFF. Tap to change the speed.")
D.fKc=new B.xK("AND",D.ali,A.cs,2,"ON only when BOTH inputs are ON.")
D.bCp=new C.a_(63671,"MaterialIcons",!1)
D.fKa=new B.xK("OR",D.bCp,A.by,2,"ON when EITHER input is ON.")
D.fKd=new B.xK("XOR",G.ZZ,A.bU,2,"ON when the inputs are DIFFERENT.")
D.fK7=new B.xK("NAND",A.tH,A.aT,2,"OFF only when BOTH inputs are ON.")
D.bBv=new C.a_(63176,"MaterialIcons",!1)
D.fK8=new B.xK("NOR",D.bBv,A.hv,2,"ON only when BOTH inputs are OFF.")
D.fK9=new B.xK("NOT",Y.G0,A.ct,1,"Flips the signal: ON becomes OFF.")
D.fKe=new B.xK("Light",A.r0,A.dN,1,"Glows when its input is ON.")
D.fKg=new B.xK("Buzzer",A.nV,A.ci,1,"Beeps while its input is ON.")
D.yG=new C.bm(D.dXW,[D.fKf,D.fKb,D.fKc,D.fKa,D.fKd,D.fK7,D.fK8,D.fK9,D.fKe,D.fKg],C.ax("bm<n,xK>"))
D.dZA={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eyX=new C.bt(3,20,1.9)
D.eyu=new C.bt(33,90,1.6)
D.eBy=new C.bt(52,15,3.2)
D.eBw=new C.bt(45,-100,1.8)
D.eA4=new C.bt(-15,-60,1.9)
D.ezA=new C.bt(-25,140,2.4)
D.ezr=new C.bt(-82,0,2.2)
D.aCz=new C.bm(D.dZA,[D.eyX,D.eyu,D.eBy,D.eBw,D.eA4,D.ezA,D.ezr],C.ax("bm<n,+(N,N,N)>"))
D.cKG=w([A.A],x.M)
D.cKY=w([A.ax,A.aC],x.M)
D.cTw=w([A.ax,A.A,A.aC],x.M)
D.cUS=w([A.ax,A.l1,A.A,A.lu,A.aC],x.M)
D.d6v=w([A.ax,A.l1,A.a3,A.a7,A.lu,A.aC],x.M)
D.dit=new C.dS([1,D.cKG,2,D.cKY,3,D.cTw,4,A.axd,5,D.cUS,6,D.d6v],C.ax("dS<H,aj<da>>"))
D.dYz={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.eAg=new C.bt(1,A.bR,"Hydrogen")
D.ezb=new C.bt(4,A.bn,"Carbon")
D.eye=new C.bt(3,A.d6,"Nitrogen")
D.eAz=new C.bt(2,A.ay,"Oxygen")
D.ezY=new C.bt(2,A.co,"Sulfur")
D.eB7=new C.bt(1,A.bo,"Chlorine")
D.vN=new C.bm(D.dYz,[D.eAg,D.ezb,D.eye,D.eAz,D.ezY,D.eB7],C.ax("bm<n,+(H,w,n)>"))
D.dZV={Calm:0,Box:1,Sleep:2}
D.csh=w([4,2,6,0],x.n)
D.cso=w([4,4,4,4],x.n)
D.csp=w([4,7,8,0],x.n)
D.Qq=new C.bm(D.dZV,[D.csh,D.cso,D.csp],C.ax("bm<n,aj<N>>"))
D.dY4={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.wq=new B.a_y(0,"source")
D.cUo=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.fPc=new B.pU("Clock",A.oE,D.wq,A.bt,D.cUo)
D.fP8=new B.pU("Button",A.y6,D.wq,A.aM,A.T)
D.dam=w(["random","quick","slow"],x.s)
D.fPj=new B.pU("Dice",A.mk,D.wq,A.bU,D.dam)
D.bC4=new C.a_(63484,"MaterialIcons",!1)
D.Dq=new B.a_y(1,"logic")
D.deF=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.fPf=new B.pU("Delay",D.bC4,D.Dq,A.cs,D.deF)
D.d3d=w(["fast","mid","slow"],x.s)
D.fPk=new B.pU("Echo",A.akI,D.Dq,A.by,D.d3d)
D.fPh=new B.pU("Every 2nd",Y.G0,D.Dq,A.hv,A.T)
D.bBK=new C.a_(63309,"MaterialIcons",!1)
D.fPe=new B.pU("Every 3rd",D.bBK,D.Dq,A.aT,A.T)
D.bDG=new C.a_(983902,"MaterialIcons",!1)
D.bVw=w(["50%","25%","75%"],x.s)
D.fPm=new B.pU("Chance",D.bDG,D.Dq,A.ct,D.bVw)
D.qn=new B.a_y(2,"out")
D.fPa=new B.pU("Light",A.r0,D.qn,A.dN,A.T)
D.fPb=new B.pU("Burst",A.lc,D.qn,A.bU,A.T)
D.fP9=new B.pU("Ripple",A.ya,D.qn,A.b8,A.T)
D.fPi=new B.pU("Ball",A.akW,D.qn,A.ct,A.T)
D.fPg=new B.pU("Comet",A.nb,D.qn,A.by,A.T)
D.bDq=new C.a_(983669,"MaterialIcons",!1)
D.fPl=new B.pU("Shake",D.bDq,D.qn,A.ci,A.T)
D.fPn=new B.pU("Pop",A.FB,D.qn,A.b7,A.T)
D.fPd=new B.pU("Wash",A.MX,D.qn,A.pj,A.T)
D.mt=new C.bm(D.dY4,[D.fPc,D.fP8,D.fPj,D.fPf,D.fPk,D.fPh,D.fPe,D.fPm,D.fPa,D.fPb,D.fP9,D.fPi,D.fPg,D.fPl,D.fPn,D.fPd],C.ax("bm<n,pU>"))
D.dZE={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.C1=new C.bm(D.dZE,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.l)
D.dYh={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.z7=new B.IP(0,"tv")
D.eHl=new B.m1("Samsung Neo QLED 8K",D.z7,F.Ed,A.aT)
D.eHc=new B.m1("LG OLED evo G5",D.z7,A.e8,A.h_)
D.eH3=new B.m1("Sony Bravia 9",D.z7,A.qy,A.bq)
D.eH7=new B.m1("Apple TV 4K",D.z7,A.e_,A.bR)
D.eH4=new B.m1("Bang and Olufsen Beovision",D.z7,F.DW,F.t1)
D.I7=new B.IP(1,"iphone")
D.aLu=new B.m1("iPhone 18 Pro Max",D.I7,D.aeY,A.c9)
D.w0=new B.IP(3,"fold")
D.bjh=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eHh=new B.m1("iPhone Fold",D.w0,D.bjh,A.b6)
D.un=new B.IP(2,"android")
D.eHi=new B.m1("Samsung Galaxy S26 Ultra",D.un,F.ab8,A.d6)
D.bcU=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eHa=new B.m1("Samsung Galaxy Z Fold7",D.w0,D.bcU,A.cy)
D.eH6=new B.m1("Google Pixel 10 Pro XL",D.un,A.dz,A.bo)
D.eHe=new B.m1("Xiaomi 16 Ultra",D.un,A.lE,A.cd)
D.eH9=new B.m1("Huawei Mate 80 Pro Max",D.un,A.eM,A.ay)
D.eH5=new B.m1("OPPO Find X9 Ultra",D.un,A.e9,A.b7)
D.eHn=new B.m1("Honor Magic V5",D.w0,A.dq,A.cs)
D.eHb=new B.m1("vivo X300 Pro",D.un,A.hu,A.ct)
D.RV=new B.IP(4,"tablet")
D.eHg=new B.m1("iPad Pro M5",D.RV,A.dz,A.aT)
D.a5u=new B.IP(5,"reader")
D.eHo=new B.m1("Kindle Scribe",D.a5u,A.eu,A.bq)
D.z8=new B.IP(6,"computer")
D.eHf=new B.m1("MacBook Pro M5 Max",D.z8,A.dz,A.c9)
D.eHk=new B.m1("iMac 32 inch",D.z8,A.bR,A.cy)
D.eHd=new B.m1("Pro Display XDR 8K",D.z8,A.lE,A.b8)
D.eH8=new B.m1("Sony Laser Projector",D.z8,A.cC,A.dN)
D.eHj=new B.m1("Luxury car touchscreen",D.z8,M.nI,A.ay)
D.eHm=new B.m1("Apple Vision Pro",D.z8,A.ju,A.by)
D.lS=new C.bm(D.dYh,[D.eHl,D.eHc,D.eH3,D.eH7,D.eH4,D.aLu,D.eHh,D.eHi,D.eHa,D.eH6,D.eHe,D.eH9,D.eH5,D.eHn,D.eHb,D.eHg,D.eHo,D.eHf,D.eHk,D.eHd,D.eH8,D.eHj,D.eHm],C.ax("bm<n,m1>"))
D.dYt={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.blB=new B.fJ(20,4,13,!1)
D.bm1=new B.fJ(14,5,13.5,!1)
D.blT=new B.fJ(9,2.4,10,!1)
D.bm6=new B.fJ(7,5,12.5,!1)
D.blW=new B.fJ(8,3.5,12,!1)
D.blx=new B.fJ(15,2,6,!1)
D.bm4=new B.fJ(45,6,13.5,!0)
D.blN=new B.fJ(10,8,13.5,!1)
D.blF=new B.fJ(25,3,12,!0)
D.blL=new B.fJ(35,4,12,!0)
D.blM=new B.fJ(40,4.5,9.5,!0)
D.blO=new B.fJ(55,3,9,!0)
D.bly=new B.fJ(18,3,9,!1)
D.bm3=new B.fJ(22,4,13.5,!1)
D.blX=new B.fJ(16,5,13.5,!1)
D.blJ=new B.fJ(30,4,9,!0)
D.bmf=new B.fJ(5,3.5,13,!1)
D.blR=new B.fJ(25,3,13.5,!0)
D.bm_=new B.fJ(14,2.5,9,!1)
D.blQ=new B.fJ(6,6,13,!1)
D.bm7=new B.fJ(30,1.2,5,!0)
D.bme=new B.fJ(35,3,4.5,!0)
D.bma=new B.fJ(20,4.5,7.5,!0)
D.blP=new B.fJ(55,5.5,13.5,!0)
D.blw=new B.fJ(45,5.5,13.5,!0)
D.bm0=new B.fJ(40,5.5,13.5,!0)
D.bmd=new B.fJ(60,6,13.5,!0)
D.afm=new B.fJ(28,4,7,!0)
D.EQ=new B.fJ(25,4,7,!0)
D.blI=new B.fJ(30,4,7,!0)
D.blD=new B.fJ(22,4,7,!0)
D.blE=new B.fJ(24,4,7,!0)
D.blS=new B.fJ(60,3,5.5,!0)
D.blz=new B.fJ(18,9,14,!0)
D.blG=new B.fJ(25,9,14,!0)
D.afn=new B.fJ(30,8,14,!0)
D.blC=new B.fJ(20,8,14,!0)
D.blK=new B.fJ(30,9,14,!0)
D.bm8=new B.fJ(22,5,9.5,!0)
D.blA=new B.fJ(30,2.5,10.5,!0)
D.blY=new B.fJ(50,5.5,13.5,!0)
D.bmc=new B.fJ(12,2,9.5,!1)
D.blV=new B.fJ(16,1.3,9.5,!0)
D.bm5=new B.fJ(40,2.5,7,!0)
D.bmb=new B.fJ(60,1.2,4.8,!0)
D.bm9=new B.fJ(18,5,13.5,!0)
D.bm2=new B.fJ(8,2,9.5,!1)
D.blU=new B.fJ(12,2.5,8,!1)
D.blH=new B.fJ(20,3.5,13.5,!0)
D.blZ=new B.fJ(3.5,3,13,!1)
D.yH=new C.bm(D.dYt,[D.blB,D.bm1,D.blT,D.bm6,D.blW,D.blx,D.bm4,D.blN,D.blF,D.blL,D.blM,D.blO,D.bly,D.bm3,D.blX,D.blJ,D.bmf,D.blR,D.bm_,D.blQ,D.bm7,D.bme,D.bma,D.blP,D.blw,D.bm0,D.bmd,D.afm,D.EQ,D.blI,D.EQ,D.blD,D.EQ,D.blE,D.afm,D.EQ,D.blS,D.blz,D.blG,D.afn,D.blC,D.blK,D.bm8,D.blA,D.blY,D.bmc,D.blV,D.bm5,D.bmb,D.EQ,D.afn,D.bm9,D.bm2,D.blU,D.blH,D.blZ],C.ax("bm<n,fJ>"))
D.dY3={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.exL=new C.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.ef9=new C.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.ef4=new C.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eqr=new C.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.ern=new C.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eqn=new C.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.edj=new C.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eop=new C.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.exU=new C.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.erI=new C.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.ei0=new C.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.ed1=new C.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eh5=new C.y("Movement","They pull your legs together and help you balance.")
D.eiV=new C.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.efh=new C.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.evt=new C.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eww=new C.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eoa=new C.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.ewg=new C.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.emU=new C.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.erQ=new C.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.ed8=new C.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.ejh=new C.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.erx=new C.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.end=new C.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.ewo=new C.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.epU=new C.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.edh=new C.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eso=new C.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.ev6=new C.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.etn=new C.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.ebI=new C.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.epC=new C.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.epG=new C.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.ejX=new C.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.efo=new C.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eiK=new C.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eoz=new C.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eu6=new C.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.exR=new C.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.erN=new C.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.ebv=new C.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eoK=new C.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.ec8=new C.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eum=new C.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.evp=new C.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.ep9=new C.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.euB=new C.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eda=new C.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.evV=new C.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.egv=new C.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.etM=new C.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.ejE=new C.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.en8=new C.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.es6=new C.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.ew5=new C.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.evX=new C.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.ew1=new C.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.enC=new C.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.esV=new C.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.etk=new C.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.evK=new C.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.ep8=new C.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.ely=new C.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.ekn=new C.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.epx=new C.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.es_=new C.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.em3=new C.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.emI=new C.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.egR=new C.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.evl=new C.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.ehD=new C.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.ec5=new C.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.ejW=new C.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.ec0=new C.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.efJ=new C.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.ek0=new C.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.ehM=new C.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.esk=new C.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eiY=new C.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.exy=new C.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.ekw=new C.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.enw=new C.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eq0=new C.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.ehT=new C.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.ehF=new C.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.djE=new C.bm(D.dY3,[D.exL,D.ef9,D.ef4,D.eqr,D.ern,D.eqn,D.edj,D.eop,D.exU,D.erI,D.ei0,D.ed1,D.eh5,D.eiV,D.efh,D.evt,D.eww,D.eoa,D.ewg,D.emU,D.erQ,D.ed8,D.ejh,D.erx,D.end,D.ewo,D.epU,D.edh,D.eso,D.ev6,D.etn,D.ebI,D.epC,D.epG,D.ejX,D.efo,D.eiK,D.eoz,D.eu6,D.exR,D.erN,D.ebv,D.eoK,D.ec8,D.eum,D.evp,D.ep9,D.euB,D.eda,D.evV,D.egv,D.etM,D.ejE,D.en8,D.es6,D.ew5,D.evX,D.ew1,D.enC,D.esV,D.etk,D.evK,D.ep8,D.ely,D.ekn,D.epx,D.es_,D.em3,D.emI,D.egR,D.evl,D.ehD,D.ec5,D.ejW,D.ec0,D.efJ,D.ek0,D.ehM,D.esk,D.eiY,D.exy,D.ekw,D.enw,D.eq0,D.ehT,D.ehF],C.ax("bm<n,+(n,n)>"))
D.djG=new C.ht(A.G,11)
D.djL=new C.ht(A.G,30)
D.dmz=new B.Tv(null)
D.dqn=new B.Tz(null)
D.dqo=new B.TA(null)
D.dqB=new B.TB(null)
D.dsC=new B.TD(null)
D.dsD=new B.TE(null)
D.dsE=new B.TF(null)
D.dts=new B.U0(null)
D.dtu=new B.Uf(null)
D.dtv=new B.Ug(null)
D.dtw=new B.Uh(null)
D.du3=new B.Uo(null)
D.dvZ=new B.Us(null)
D.dw_=new B.Uu(null)
D.dw0=new B.Uv(null)
D.dw2=new B.Uw(null)
D.dxC=new B.UN(null)
D.dxE=new B.UP(null)
D.dxJ=new B.UZ(null)
D.dxU=new B.V_(null)
D.dyp=new B.V0(null)
D.dzU=new B.V2(null)
D.dBh=new B.V4(null)
D.dBi=new B.V5(null)
D.dCD=new B.V8(null)
D.dSw=new B.V9(null)
D.dSx=new B.Vb(null)
D.dSy=new B.Ve(null)
D.dSz=new B.Vf(null)
D.dUs=new B.Vn(null)
D.dUt=new B.Vo(null)
D.dUB=new B.Vv(null)
D.dUK=new B.Vz(null)
D.dUL=new B.VA(null)
D.dUM=new B.a7v(null)
D.dVm=new B.VC(null)
D.dWP=new B.VG(null)
D.e_5=new C.u(0,118)
D.aFg=new C.u(0,13)
D.e_6=new C.u(0,17)
D.e_9=new C.u(0,330)
D.e_c=new C.u(0,-13)
D.aFm=new C.u(0,-14)
D.e_d=new C.u(0,-17)
D.e_e=new C.u(0,-18)
D.e_f=new C.u(0,-19)
D.e_g=new C.u(0,-20)
D.e_j=new C.u(0,-26)
D.e_k=new C.u(0,-28)
D.e_l=new C.u(0,-31)
D.e_m=new C.u(0,-32)
D.vU=new C.u(0,-6)
D.e_n=new C.u(0,-6771)
D.e_o=new C.u(0,-9)
D.e_q=new C.u(-9.5,-11)
D.e_r=new C.u(10,20)
D.e_t=new C.u(10,-13)
D.e_u=new C.u(10,-22)
D.e_v=new C.u(10,-4)
D.a4o=new C.u(11,8)
D.e_x=new C.u(12,2)
D.e_y=new C.u(14,0)
D.e_z=new C.u(14,12)
D.aFq=new C.u(14,8)
D.e_A=new C.u(14,-17)
D.e_B=new C.u(14,-18)
D.aFr=new C.u(14,-3)
D.aFs=new C.u(14,-4)
D.e_C=new C.u(15,0)
D.e_D=new C.u(15,-12)
D.e_E=new C.u(16,-8)
D.e_F=new C.u(18,14)
D.e_G=new C.u(18,-12)
D.aFw=new C.u(20,0)
D.e_M=new C.u(20,15)
D.e_N=new C.u(20,-17)
D.e_O=new C.u(20,-3)
D.e_P=new C.u(21,8)
D.e_R=new C.u(22,10)
D.aFx=new C.u(22,8)
D.e_S=new C.u(24,0)
D.e_T=new C.u(24,2)
D.e_V=new C.u(24,-18)
D.e_W=new C.u(24,-22)
D.e_X=new C.u(25,8)
D.e_Y=new C.u(26,0)
D.e03=new C.u(28,-30)
D.e08=new C.u(30,18)
D.e09=new C.u(30,2)
D.e0a=new C.u(31,19)
D.e0b=new C.u(32,0)
D.aFA=new C.u(34,0)
D.aFB=new C.u(34,-32)
D.HJ=new C.u(36,0)
D.e0g=new C.u(3,-1)
D.e0j=new C.u(40,3)
D.e0n=new C.u(4,11)
D.e0q=new C.u(4,-2)
D.e0u=new C.u(5,0)
D.e0v=new C.u(5,17)
D.e0w=new C.u(5,6)
D.e0z=new C.u(6,11)
D.e0F=new C.u(8,7)
D.e0G=new C.u(8,-10)
D.e0H=new C.u(8,-14)
D.e0I=new C.u(8,-3)
D.aFF=new C.u(9,0)
D.e0L=new C.u(-20.5,-17.6)
D.e0M=new C.u(-9,18.5)
D.e0P=new C.u(-2.6,-1)
D.e0Q=new C.u(1.9,-0.8)
D.e0T=new C.u(-0.22,0.09)
D.e0Y=new C.u(2.6,1)
D.e14=new C.u(-9,12.2)
D.e1m=new C.u(-9,20.5)
D.e1E=new C.u(-10,0)
D.e1F=new C.u(-10,12)
D.aFM=new C.u(-10,4)
D.e1G=new C.u(-11,-2)
D.e1H=new C.u(-13,-5)
D.e1I=new C.u(-14,0)
D.e1J=new C.u(-14,13)
D.e1K=new C.u(-14,2)
D.e1L=new C.u(-14,-12)
D.e1M=new C.u(-14,-19)
D.e1N=new C.u(-14,-23)
D.e1O=new C.u(-15,6)
D.e1P=new C.u(-16,14)
D.e1Q=new C.u(-16,-8)
D.e1R=new C.u(-17,10)
D.e1S=new C.u(-17,-18)
D.e1T=new C.u(-17,-8)
D.e1V=new C.u(-18,20)
D.e1W=new C.u(-18,-9)
D.aFO=new C.u(-20,0)
D.e1Y=new C.u(-20,16)
D.e1Z=new C.u(-20,-9)
D.Ro=new C.u(-22,8)
D.e2_=new C.u(-22,-10)
D.e20=new C.u(-22,-11)
D.e21=new C.u(-24,10)
D.e22=new C.u(-24,11)
D.e23=new C.u(-24,14)
D.e24=new C.u(-24,-22)
D.e25=new C.u(-25,-11)
D.e26=new C.u(-26,0)
D.e27=new C.u(-26,-18)
D.e28=new C.u(-2,9)
D.e29=new C.u(-2,-10)
D.e2a=new C.u(-2,-20)
D.e2b=new C.u(-2,-9)
D.e2c=new C.u(-32,0)
D.aFQ=new C.u(-34,0)
D.e2h=new C.u(-40,3)
D.e2j=new C.u(-4,11)
D.e2k=new C.u(-4,-17)
D.e2l=new C.u(-4,-2)
D.e2n=new C.u(-5,0)
D.e2o=new C.u(-5,20)
D.e2p=new C.u(-5,6)
D.e2q=new C.u(-6,26)
D.e2r=new C.u(-6,6)
D.e2s=new C.u(-6,-42)
D.e2t=new C.u(-7,-19)
D.e2u=new C.u(-7,-24)
D.e2v=new C.u(-8,-9)
D.a4s=new C.u(-9,0)
D.e2w=new C.u(-9,1)
D.e2x=new C.u(-9,-23)
D.faY=new C.x("Thinking\u2026",null,A.hp,null,null,null,null,null,null,null,null,null)
D.e3t=new C.C(A.kh,D.faY,null)
D.fqF=new C.x("Start from a ready-made board",null,A.fN,null,null,null,null,null,null,null,null,null)
D.e3D=new C.C(A8.vc,D.fqF,null)
D.btk=new C.Q(4,0,4,14)
D.f6t=new C.G(!0,A.az,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbS=new C.x("Games and little helpers for a spare minute.",null,D.f6t,null,null,null,null,null,null,null,null,null)
D.e3M=new C.C(D.btk,D.fbS,null)
D.fnx=new C.x("Tap to throw in a star",null,A.kw,null,null,null,null,null,null,null,null,null)
D.b3j=new C.cr(A.A,null,null,D.fnx,null)
D.e9C=new C.cL(0,null,0,14,null,null,D.b3j,null)
D.d3M=w([A.iN,A.bn],x.O)
D.aKH=new C.bS(A.A,0.5,A.x,null,0,D.d3M,null,null)
D.eak=new C.bS(A.A,0.5,A.x,null,0,D.ax0,null,null)
D.cWv=w([A.c,A.bJ],x.O)
D.eam=new C.bS(A.A,0.5,A.x,null,0,D.cWv,null,null)
D.ean=new C.bS(A.A,0.5,A.x,null,0,K.aw6,null,null)
D.dbf=w([A.bR,A.ju],x.O)
D.aKI=new C.bS(A.A,0.5,A.x,null,0,D.dbf,null,null)
D.cBX=w([A.c,A.bR],x.O)
D.ear=new C.bS(A.rL,0.5,A.x,null,0,D.cBX,null,null)
D.ban=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.bfE=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.cVA=w([D.ban,D.aew,D.bfE],x.O)
D.d1R=w([0,0.7,1],x.n)
D.eat=new C.bS(A.rL,0.5,A.x,null,0,D.cVA,D.d1R,null)
D.csv=w([A.or,A.aH,A.K],x.O)
D.d89=w([0.3,0.7,1],x.n)
D.eav=new C.bS(A.A,0.5,A.x,null,0,D.csv,D.d89,null)
D.bjk=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.d9u=w([A.f6,D.bjk],x.O)
D.eax=new C.bS(A.rL,0.5,A.x,null,0,D.d9u,null,null)
D.cvf=w([A.dz,A.cC],x.O)
D.eay=new C.bS(A.A,0.5,A.x,null,0,D.cvf,null,null)
D.cRb=w([A.or,A.aH,A.fC],x.O)
D.eaz=new C.bS(A.A,0.5,A.x,null,0,D.cRb,null,null)
D.cJG=w([A.h1,A.aM,A.d9],x.O)
D.eaB=new C.bS(A.rL,0.5,A.x,null,0,D.cJG,null,null)
D.d4i=w([A.ju,M.nI],x.O)
D.eaC=new C.bS(A.rL,0.5,A.x,null,0,D.d4i,null,null)
D.baB=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.b8G=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.cTo=w([D.baB,D.b8G],x.O)
D.eaE=new C.bS(A.A,0.5,A.x,null,0,D.cTo,null,null)
D.bf3=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.bd1=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.bd5=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.dds=w([D.bf3,D.bd1,D.bd5],x.O)
D.cPZ=w([0,0.65,1],x.n)
D.eaF=new C.bS(K.a8S,0.5,A.x,null,0,D.dds,D.cPZ,null)
D.eaG=new C.bS(A.A,0.5,A.x,null,0,D.atC,null,null)
D.dat=w([A.lB,A.aH,A.fC],x.O)
D.eaL=new C.bS(A.A,0.5,A.x,null,0,D.dat,null,null)
D.dc0=w([A.ju,A.hD],x.O)
D.eaO=new C.bS(A.A,0.5,A.x,null,0,D.dc0,null,null)
D.aKN=new C.aW(9,9)
D.eaX=new C.aW(1.4,1.4)
D.ebC=new C.y(0,-4)
D.egs=new C.y(0.22,4)
D.enu=new C.y(0.8,-4)
D.evY=new C.y(0.58,4)
D.eyC=new C.bt("Moon",1.62,4291941851)
D.ez9=new C.bt("Neptune",11.15,4284524026)
D.ezL=new C.bt("Sun",274,4294688548)
D.eA0=new C.bt("Mercury",3.7,4288455599)
D.eA6=new C.bt("Earth",9.81,4281908728)
D.eA8=new C.bt("Mars",3.71,4294472049)
D.eAr=new C.bt("Venus",8.87,4294759245)
D.eAw=new C.bt("Saturn",10.44,4294829706)
D.eAS=new C.bt("Jupiter",24.79,4294677052)
D.eEp=new C.a9(10,-8,18,-2)
D.eEq=new C.a9(14,-14,20,14)
D.eEr=new C.a9(20,-2,30,2)
D.eEt=new C.a9(4,-13,30,-3)
D.eEv=new C.a9(8,-7,12,7)
D.eEB=new C.a9(-12,12,12,19)
D.eEC=new C.a9(-12,14,12,22)
D.eED=new C.a9(-12,-22,12,8)
D.eEE=new C.a9(-12,-25,12,19)
D.eEF=new C.a9(-12,-26,12,-6)
D.eEG=new C.a9(-12,-4,12,14)
D.eEH=new C.a9(-12,-6,10,6)
D.eEI=new C.a9(-14,20,14,24)
D.eEJ=new C.a9(-14,6,14,10)
D.eEK=new C.a9(-14,-17,14,15)
D.eEL=new C.a9(-14,-26,14,18)
D.eEM=new C.a9(-14,-4,14,20)
D.eEN=new C.a9(-15,-29,15,25)
D.eEO=new C.a9(-16,-16,16,16)
D.eEP=new C.a9(-16,-22,-9,18)
D.eEQ=new C.a9(-16,-24,16,-10)
D.eER=new C.a9(-16,-2,16,20)
D.eET=new C.a9(-18,20,18,24)
D.eEU=new C.a9(-18,-18,18,20)
D.eEV=new C.a9(-20,12,20,22)
D.eEW=new C.a9(-20,-28,20,26)
D.eEX=new C.a9(-22,14,22,18)
D.aLc=new C.a9(-22,-26,22,24)
D.eEY=new C.a9(-22,-3,22,3)
D.eEZ=new C.a9(-22,-4,22,12)
D.eF_=new C.a9(-24,-12,10,22)
D.eF0=new C.a9(-24,-14,22,8)
D.eF1=new C.a9(-24,-6,24,20)
D.aLd=new C.a9(-24,-9,24,9)
D.eF2=new C.a9(-25,14,25,19)
D.eF3=new C.a9(-26,-14,14,8)
D.eF4=new C.a9(-26,-4,26,20)
D.eF5=new C.a9(-26,-6,4,6)
D.aLe=new C.a9(-28,-13,28,13)
D.eF6=new C.a9(-28,-16,28,16)
D.eF7=new C.a9(-28,-16,28,8)
D.eF8=new C.a9(-28,-22,28,22)
D.eF9=new C.a9(-30,-12,30,14)
D.eFa=new C.a9(-30,-14,0,14)
D.eFb=new C.a9(-30,-18,30,20)
D.eFc=new C.a9(-30,-28,30,14)
D.eFd=new C.a9(-30,-2,30,18)
D.eFe=new C.a9(-30,-4,30,18)
D.eFf=new C.a9(-32,-17,32,17)
D.eFg=new C.a9(-32,-28,32,18)
D.eFh=new C.a9(-33,-21,33,17)
D.eFi=new C.a9(-34,14,34,26)
D.a5m=new C.a9(-34,-18,34,18)
D.eFj=new C.a9(-34,-4,34,7)
D.eFk=new C.a9(-36,-24,36,20)
D.eFl=new C.a9(-38,-22,38,22)
D.eFm=new C.a9(-3,12,3,22)
D.eFn=new C.a9(-3,5,3,15)
D.eFp=new C.a9(-46,-34,46,28)
D.eFq=new C.a9(-48,-3,48,3)
D.eFt=new C.a9(-6,18,24,24)
D.eFu=new C.a9(-6,5,6,12)
D.eFv=new C.a9(-6,-22,6,-15)
D.eFw=new C.a9(-9,-16,9,22)
D.eFx=new C.a9(-4.5,-24,4.5,-21.2)
D.eFz=new C.a9(14,-9,17.5,9)
D.dZx={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aM4=new C.eY(D.dZx,5,x.R)
D.dZc={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eIq=new C.eY(D.dZc,10,x.R)
D.eKn=new C.at(24,44)
D.eKs=new C.at(300,300)
D.eKM=new C.at(54,38)
D.eKT=new C.at(66,38)
D.b4B=new C.fi(2,null,null,null,null,A.by,null,null,null,null)
D.eLQ=new C.a7(16,16,D.b4B,null)
D.aN3=new C.hK(3,12,12,0.82,null)
D.fsj=new C.x("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aNe=new C.b1(D.fsj,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.d4l=w([A.ci,A.co,A.b7,A.aT,A.pj,A.ci],x.O)
D.eRI=new C.fS(A.A,0,6.283185307179586,A.x,D.d4l,null,null)
D.f_s=new C.G(!0,A.aM,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.Pw,null,null,null)
D.eSM=new C.ep("You are here (Sun)",null,null,A.cO,null,null,null,null,null,null,D.f_s)
D.aPE=new C.G(!0,A.az,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSN=new C.ep("What we see",null,null,A.cO,null,null,null,null,null,null,D.aPE)
D.eXT=new C.G(!0,A3.Vo,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSQ=new C.ep("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cO,null,null,null,null,null,null,D.eXT)
D.f1F=new C.G(!0,A.k9,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSW=new C.ep("AI",null,null,A.cO,null,null,null,null,null,null,D.f1F)
D.eXE=new C.G(!0,A.c_,null,null,null,null,15,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSX=new C.ep("Add atoms with the buttons below",null,null,A.cO,null,null,null,null,null,null,D.eXE)
D.aO1=new C.G(!0,A.c_,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTb=new C.G(!0,A.w,null,null,null,null,24,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTd=new C.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTJ=new C.G(!0,A.bh,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU2=new C.G(!0,A.cs,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUx=new C.G(!0,A.c_,null,null,null,null,11,A.P,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUC=new C.G(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUS=new C.G(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVk=new C.G(!0,A.aR,null,null,null,null,12,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVH=new C.G(!0,A.c_,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVR=new C.G(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIW=new C.cP(A.hG,A.dD,6)
D.cZ9=w([D.eIW],x.q)
D.eWa=new C.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cZ9,null,null,null)
D.eWd=new C.G(!0,A.es,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWg=new C.G(!0,A.c,null,null,null,null,17,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWi=new C.G(!0,A.c_,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWH=new C.G(!0,A.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOo=new C.G(!0,A.c_,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX0=new C.G(!0,A.az,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX1=new C.G(!0,A.c_,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXW=new C.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYq=new C.G(!0,A.az,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYT=new C.G(!0,A.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIZ=new C.cP(A.aX,A.J,3)
D.axg=w([D.eIZ],x.q)
D.eYW=new C.G(!0,A.c,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.axg,null,null,null)
D.eZ0=new C.G(!0,A.c,null,null,null,null,12.5,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZH=new C.G(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.Pw,null,null,null)
D.f_9=new C.G(!0,A.az,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_h=new C.G(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_H=new C.G(!0,A.uX,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_X=new C.G(!0,A.c,null,null,null,null,20,A.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0g=new C.G(!0,A.bK,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0l=new C.G(!0,A.c_,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0q=new C.G(!0,A.az,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0w=new C.G(!0,A.az,null,null,null,null,18,A.H,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0Y=new C.G(!0,A.c_,null,null,null,null,8.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1a=new C.G(!0,A.mV,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1b=new C.G(!0,A.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1q=new C.G(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aP3=new C.G(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1Z=new C.G(!0,A.c,null,null,null,null,20,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIN=new C.cP(A.w,A.J,5)
D.cNG=w([D.eIN],x.q)
D.f2_=new C.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cNG,null,null,null)
D.f24=new C.G(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.axg,null,null,null)
D.f2j=new C.G(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2o=new C.G(!0,A.fv,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2F=new C.G(!0,A.c_,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f38=new C.G(!0,A.b7,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3G=new C.G(!0,A.c_,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4j=new C.G(!0,A.az,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4s=new C.G(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPp=new C.G(!0,A.az,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4V=new C.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f54=new C.G(!0,A.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5b=new C.G(!0,A.aM,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5w=new C.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPB=new C.G(!0,A.ad,null,null,null,null,12,A.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5z=new C.G(!0,A.aM,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6j=new C.G(!0,A.aR,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7i=new C.G(!0,A.c,null,null,null,null,13,A.a5,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6I=new C.G(!0,A.uX,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f70=new C.G(!0,A.b7,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWl=new C.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7o=new C.x("\u26a0\ufe0f ",null,D.eWl,null,null,null,null,null,null,null,null,null)
D.f7z=new C.x("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.D2,null,null,null,null,null,null,null,null,null)
D.f80=new C.x("LETTER COUNT OF THE SECRET VERSION",null,Q.mD,null,null,null,null,null,null,null,null,null)
D.f92=new C.x("Pick one, then change it and see what happens.",null,A.D2,null,null,null,null,null,null,null,null,null)
D.f96=new C.x("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.eXp=new C.G(!0,A.ad,null,null,null,null,null,A.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa0=new C.x("What do you want to invent? Type it below, or tap an idea.",null,D.eXp,null,null,null,null,null,null,null,null,null)
D.fan=new C.x("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,U.a6B,null,null,null,null,null,null,null,null,null)
D.fbu=new C.x("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fc3=new C.x("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fc8=new C.x("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fcG=new C.x("Make it yours",null,A.kY,null,null,null,null,null,null,null,null,null)
D.fcV=new C.x("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a6G,null,null,null,null,null,null,null,null,null)
D.f0B=new C.G(!0,A.j9,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff8=new C.x("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.f0B,null,null,null,null,null,null,null,null,null)
D.ffn=new C.x("YOUR DECODING",null,Q.mD,null,null,null,null,null,null,null,null,null)
D.ffz=new C.x("5G",null,R.aOr,null,null,null,null,null,null,null,null,null)
D.f2V=new C.G(!0,A.c_,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgG=new C.x("WHAT HAPPENS",null,D.f2V,null,null,null,null,null,null,null,null,null)
D.fin=new C.x("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fj1=new C.x("Change the words and pictures on the three slabs.",null,A.D2,null,null,null,null,null,null,null,null,null)
D.fjc=new C.x("All the parts and wires will be removed.",null,A.hB,null,null,null,null,null,null,null,null,null)
D.fjw=new C.x("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fk5=new C.x("Tap the crank on the board again and again to spin it faster.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fkX=new C.x("INTERCEPTED",null,Q.mD,null,null,null,null,null,null,null,null,null)
D.flg=new C.x("\ud83c\udfaf Challenges",null,A.ds,null,null,null,null,null,null,null,null,null)
D.flL=new C.x("Remove this part",null,U.aO4,null,null,null,null,null,null,null,null,null)
D.fm2=new C.x("Clear the board?",null,A.dl,null,null,null,null,null,null,null,null,null)
D.f2p=new C.G(!0,A.bt,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmh=new C.x("How the Lab works",null,D.f2p,null,null,null,null,null,null,null,null,null)
D.eV3=new C.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmz=new C.x("Electronics Lab",null,D.eV3,null,null,null,null,A.a2,null,1,null,null)
D.fmC=new C.x("?",null,K.aPy,null,null,null,null,null,null,null,null,null)
D.f0v=new C.G(!0,A.aT,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmG=new C.x("Planet Earth",null,D.f0v,null,null,null,null,null,null,null,null,null)
D.fnR=new C.x("Ready-made circuits",null,A.ds,null,null,null,null,null,null,null,null,null)
D.fos=new C.x("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.foL=new C.x("UNIVERSE EXPLORER",null,I.a6F,null,null,null,null,null,null,null,null,null)
D.frc=new C.x("SECRET VERSION",null,Q.mD,null,null,null,null,null,null,null,null,null)
D.f5f=new C.G(!0,A.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frJ=new C.x("\u26a0 There is no air here, so a parachute will not work.",null,D.f5f,null,null,null,null,null,null,null,null,null)
D.fsU=new C.x("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,U.a6B,null,null,null,null,null,null,null,null,null)
D.ftm=new C.x("NGMY",null,A.uw,null,null,null,null,null,null,null,null,null)
D.fty=new C.x("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.IH,null,null,null,null,null,null,null,null,null)
D.ftV=new C.x("Tap it to change its setting. Drag from the right dot to connect.",null,A.kZ,null,null,null,null,null,null,null,null,null)
D.fuS=new C.x("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.D2,null,null,null,null,null,null,null,null,null)
D.fuU=new C.x("TOOLBOX",null,I.a6F,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.h8x=null
$.h8w=null
$.hez=0
$.hGj=C.T(x.N,x.k)
$.hGU=C.T(x.N,x.k)
$.h7S=null
$.hGF=C.T(x.N,x.k)
$.hHH=C.T(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ic_","bCw",()=>{var v="led"
return C.a([B.awX("Both together","Make the light glow only when BOTH switches are ON.",2,new B.fbE(),v),B.awX("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new B.fbF(),v),B.awX("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new B.fbG(),v),B.awX("Flip it","One switch only: make the light glow when the switch is OFF.",1,new B.fbN(),v),B.awX("Not both","Make the light go OFF only when both switches are ON.",2,new B.fbO(),v),B.awX("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new B.fbP(),"buzzer")],C.ax("O<b9h>"))})
w($,"icq","bCx",()=>C.a([B.ou("UNIVERSE","Earth, space and gravity",A.a_C,A.aT,new B.fc4()),B.ou("ELECTRONICS LAB","Batteries, wires, real circuits",Ah.a_0,A.aT,new B.fc5()),B.ou("DISCOVERY LAB","Body Explorer: a real 3D human",D.ZS,A.b7,new B.fc6()),B.ou("TOOLBOX","Converter, clock, games",T.ajK,A.ct,new B.fch()),B.ou("MOLECULE MAKER","Join atoms into real molecules",A.MJ,A.hv,new B.fcj()),B.ou("DNA LAB","Copy DNA, build a protein",D.ZS,A.bU,new B.fck()),B.ou("ECOSYSTEM LAB","Grass, rabbits and foxes",A.xY,A.b7,new B.fcl()),B.ou("BALANCE LAB","Levers, weight and torque",D.bDy,A.aM,new B.fcm()),B.ou("GEAR LAB","Teeth, speed and force",A.Bq,A.ct,new B.fcn()),B.ou("LASER MAZE","Bend the beam with mirrors",I.ak7,A.ay,new B.fco()),B.ou("LIGHT MIXER","Match colours with light",D.bBh,A.b8,new B.fcp()),B.ou("CIPHER LAB","Make and crack secret codes",A.y9,A.aT,new B.fc7()),B.ou("REACTION LAB","Wire parts together",A.yd,A.bt,new B.fc8()),B.ou("SPARK PAINTER","Paint with light",A.ZU,A.bU,new B.fc9()),B.ou("ROCKET LANDER","Land softly on the pad",A.nb,A.aT,new B.fca()),B.ou("ORBIT STUDIO","Slingshot planets",A.mm,A.ct,new B.fcb()),B.ou("SWARM STUDIO","A living school of fish",A.MJ,A.b7,new B.fcc()),B.ou("CHAIN BURST","One tap, a whole chain",A.h8,A.bU,new B.fcd()),B.ou("TITLE ANIMATOR","Make a moving title",A.y5,A.co,new B.fce()),B.ou("CIRCUIT LAB","Connect logic, learn it",A.a_j,A.cs,new B.fcf()),B.ou("MARBLE MUSIC","Marbles ring the notes",D.bAY,A.b8,new B.fcg()),B.ou("ORBIT SEQUENCER","Planets play the tune",D.bDm,A.by,new B.fci())],C.ax("O<br_>")))
w($,"idV","q5",()=>{var v,u,t=C.T(x.N,x.dV)
for(v=0;v<76;++v){u=D.PN[v]
t.n(0,u.a,u)}return t})
w($,"ic0","agT",()=>C.a([B.F8("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new B.fbQ()),B.F8("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new B.fbR()),B.F8("Spin the motor","A battery and a motor in a loop will make it spin.",new B.fbS()),B.F8("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new B.fbT()),B.F8("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new B.fbU()),B.F8("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new B.fbH()),B.F8("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new B.fbI()),B.F8("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new B.fbJ()),B.F8("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new B.fbK()),B.F8("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new B.fbL()),B.F8("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new B.fbM())],C.ax("O<b9i>")))
w($,"ics","hmR",()=>C.a([B.a02("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aM,A.cd,new B.fcx()),B.a02("Focus Timer","Work, then rest","\u23f1\ufe0f",A.ci,A.bI,new B.fcy()),B.a02("Breathe","Calm down in a minute","\ud83e\udee7",A.hv,A.cy,new B.fcz()),B.a02("Draw Pad","Sketch and share","\ud83c\udfa8",A.bA,A.b6,new B.fcA()),B.a02("Memory Match","Find the pairs","\ud83c\udccf",A.aT,A.c9,new B.fcB()),B.a02("Simon Sounds","Copy the tune","\ud83c\udfb5",A.co,A.bo,new B.fcC()),B.a02("Tip & Split","Share the bill","\ud83e\uddfe",A.b7,A.aZ,new B.fcD()),B.a02("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.by,A.aE,new B.fcE())],C.ax("O<bsj>")))
w($,"icr","hmQ",()=>C.a([B.aef("EARTH GLOBE","Turn it, tap a country",A.mm,A.aT,new B.fcq()),B.aef("SOLAR SYSTEM","The Sun and its worlds",D.bB1,A.aM,new B.fcr()),B.aef("GRAVITY LAB","Drop, weigh, orbit",D.akU,A.ct,new B.fcs()),B.aef("BLACK HOLE","Throw in a star",A.Fq,A.by,new B.fct()),B.aef("GALAXY","Build, tilt, collide",A.xL,A.h0,new B.fcu()),B.aef("SIZE COMPARE","Earth next to a star",D.bBj,A.bU,new B.fcv()),B.aef("SEASONS & MOON","Why it is summer",A.vl,A.bt,new B.fcw())],C.ax("O<bse>")))})()};
(a=>{a["AqfnydF4B9pyMJQzLwstSgv6GWY="]=a.current})($__dart_deferred_initializers__);