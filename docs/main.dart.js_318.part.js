((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A_,A6,A0,A1,I,A7,A8,U,V,A2,G,A9,A3,Aa,W,Ab,Ac,N,Ad,Ae,X,P,Y,Af,L,Ag,Ah,R,Ai,K,Q,Aj,E,F,H,C={
byW(d){return C.hRZ(d)},
hRZ(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$byW=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.qX(B.n6(""),d,A.hF,null,null).d9(0,A.YK),$async$byW)
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
return B.i($async$byW,v)},
i2K(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Qq[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cU(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fZ(D.Qq,new C.fwN())
if(w==null)w=A.d.gH(D.Qq)
s=B.U(x.N,x.E)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.L)(r),++u){l=r[u].a
k=l[0]
l=$.ql().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.L)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.ajO(w.a,w.b,m,w,s,!1)},
hXk(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.M(D.QR,new C.fmk(),x.bd).aG(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
iaz(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cD(b2,"{")
v=A.a.oG(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.S.aM(0,A.a.ap(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aY(a5)
r=0
for(a6=x.j,a7=J.aW(a6.a(J.r(u,"parts"))),a8=x.i;a7.C();){q=a7.gT(a7)
p=B.u(J.r(q,"kind"))
o=B.u(J.r(q,"id"))
if(!$.ql().ai(0,p)||J.f1(s,o)||J.ad(t)>=8)continue
J.ca(s,o)
n=B.U(a5,a8)
for(a9=0;a9<4;++a9){m=D.dmh[a9]
l=J.r(q,m)
if(typeof l=="number")J.aG(n,m,l)}k=A.k.D(typeof J.r(q,"x")=="number"?B.e5(J.r(q,"x")):0.2+A.k.E(r,3)*0.3,0.16,0.84)
j=A.k.D(typeof J.r(q,"y")=="number"?B.e5(J.r(q,"y")):0.25+A.k.an(r,3)*0.3,0.1,0.9)
J.ca(t,new B.e9([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aW(a6.a(J.r(u,"wires")));a5.C();){h=a5.gT(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.u(J.r(g,0))
e=B.u(J.r(g,2))
d=A.o.D(A.k.O(B.e5(J.r(g,1))),0,1)
a0=A.o.D(A.k.O(B.e5(J.r(g,3))),0,1)
if(J.f1(s,f)&&J.f1(s,e)&&!J.A(f,e))J.ca(i,new B.cv([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.bM.a(J.r(u,"steps"))
a0=J.aW(a0==null?A.cx:a0)
while(a0.C()){a2=a0.gT(a0)
J.ca(a1,B.u(a2))}a3=a1
a0=J.r(u,"title")
a0=B.u(a0==null?"My invention":a0)
a1=J.r(u,"explain")
a4=new C.mG(a0,B.u(a1==null?"":a1),t,i,A.U)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.r(u,"honest")
a5=B.u(a5==null?"":a5)
return new C.ajO(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
i1k(d){var w,v,u=C.h6R()
d.B(u)
for(w=0;w<60;++w)u.va(0,0.03333333333333333)
v=u.a
return A.d.b3(v,new C.ftx(u))&&!A.d.d8(v,new C.fty())},
i1j(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.U(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.L)(l),++u){t=l[u];++v
k.n(0,t.a,$.ql().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.L)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.u(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.q(D.dkz,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aG(q,", ")+")"
s.push(B.u(p)+n+": "+o+", current "+A.k.ab(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.L)(w),++u){m=w[u]
l.push(B.u(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.u(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aG(s,"\n")+"\nWires: "+A.d.aG(l,"; ")},
hQy(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.L)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aG(v,"\n")+"\n\n"}v=A.d.aG(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
i2J(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.ql().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.QR[u]
if(A.d.b3(w,new C.fwK(s)))if(!B.cU(r,s.b.toLowerCase(),0))v=B.cU(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Z(w,new C.fwL(e),B.S(w).k("Z<1>")).gal(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ab(A.d.cM(w,0,new C.fwM())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.ql().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ajO:function ajO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fwN:function fwN(){},
fmk:function fmk(){},
ftx:function ftx(d){this.a=d},
fty:function fty(){},
fwK:function fwK(d){this.a=d},
fwL:function fwL(d){this.a=d},
fwM:function fwM(){},
Vu:function Vu(d,e){this.c=d
this.a=e},
bjJ:function bjJ(d,e,f,g,h){var _=this
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
e91:function e91(d){this.a=d},
e92:function e92(d,e,f){this.a=d
this.b=e
this.c=f},
e93:function e93(d){this.a=d},
e9e:function e9e(d){this.a=d},
e9f:function e9f(d,e){this.a=d
this.b=e},
e9a:function e9a(d){this.a=d},
e98:function e98(d,e){this.a=d
this.b=e},
e99:function e99(d,e,f){this.a=d
this.b=e
this.c=f},
e9b:function e9b(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e96:function e96(d){this.a=d},
e97:function e97(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9c:function e9c(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e95:function e95(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9d:function e9d(d,e){this.a=d
this.b=e},
e94:function e94(d,e){this.a=d
this.b=e},
e9i:function e9i(d){this.a=d},
e9h:function e9h(d){this.a=d},
e9j:function e9j(d){this.a=d},
e9g:function e9g(d){this.a=d},
e9k:function e9k(d,e){this.a=d
this.b=e},
e9l:function e9l(d,e){this.a=d
this.b=e},
e9m:function e9m(d,e){this.a=d
this.b=e},
e9n:function e9n(d,e){this.a=d
this.b=e},
bzg(d,e,f){var w=null
return B.w(B.a([B.d(d,w,w,w,w,w,w,D.f9s,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.P,0,A.p)},
hkn(d,e,f,g){var w=null,v=B.m(24),u=B.I(f.j(0.6),A.q,1)
return B.at(B.p(w,B.w(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.al,B.d(e,w,w,w,w,w,w,A.A3,A.L,w,w),A.aA,B.bV(A.fW,g,A.bs,0,8)],x.p),A.m,w,A.e,A.P,0,A.p),A.f,w,w,new B.o(D.bb6,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
G6:function G6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uU:function uU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VR:function VR(d){this.a=d},
aEf:function aEf(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.iH$=h
_.oz$=i
_.nb$=j
_.iI$=k
_.bw$=l
_.aa$=m
_.c=_.a=null},
enh:function enh(){},
enB:function enB(d){this.a=d},
enA:function enA(d,e){this.a=d
this.b=e},
enC:function enC(){},
enD:function enD(){},
enj:function enj(d,e,f){this.a=d
this.b=e
this.c=f},
eni:function eni(d,e){this.a=d
this.b=e},
en8:function en8(d){this.a=d},
en9:function en9(d){this.a=d},
ena:function ena(d){this.a=d},
enb:function enb(d){this.a=d},
enc:function enc(d){this.a=d},
end:function end(d){this.a=d},
ene:function ene(d){this.a=d},
enf:function enf(d){this.a=d},
eng:function eng(d){this.a=d},
en6:function en6(d){this.a=d},
en7:function en7(d){this.a=d},
en5:function en5(d){this.a=d},
enu:function enu(d,e){this.a=d
this.b=e},
enp:function enp(d){this.a=d},
enq:function enq(d){this.a=d},
enm:function enm(d){this.a=d},
enr:function enr(d){this.a=d},
enl:function enl(d){this.a=d},
ens:function ens(d){this.a=d},
ent:function ent(d){this.a=d},
enk:function enk(d){this.a=d},
env:function env(d,e){this.a=d
this.b=e},
eno:function eno(d,e){this.a=d
this.b=e},
enw:function enw(d){this.a=d},
enx:function enx(d){this.a=d},
eny:function eny(d){this.a=d},
enz:function enz(d){this.a=d},
enn:function enn(d){this.a=d},
bgP:function bgP(d,e){this.b=d
this.a=e},
aLZ:function aLZ(){},
bwW:function bwW(){},
cHa(){var w=0,v=B.j(x.F),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cHa=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.qZ().jI(0,"assets/data/body3d.bin"),$async$cHa)
case 3:d=a1
$.hfH=J.eZ(A.dC.gaP(d),d.byteOffset,d.byteLength)
t=B.aS7(d)
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
e=D.d9j[i]
g=B.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a30(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aZG))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.b9X(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cHa,v)},
aRV:function aRV(d,e,f){this.a=d
this.b=e
this.c=f},
a30:function a30(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b9X:function b9X(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Uo:function Uo(d){this.a=d},
aCL:function aCL(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.iH$=s
_.oz$=t
_.nb$=u
_.iI$=v
_.bw$=w
_.aa$=a0
_.c=_.a=null},
dGI:function dGI(d){this.a=d},
dGH:function dGH(d,e){this.a=d
this.b=e},
dGk:function dGk(d,e){this.a=d
this.b=e},
dGl:function dGl(){},
dGJ:function dGJ(){},
dGm:function dGm(d,e){this.a=d
this.b=e},
dGn:function dGn(d){this.a=d},
dGo:function dGo(){},
dGp:function dGp(d){this.a=d},
dGr:function dGr(d,e){this.a=d
this.b=e},
dGq:function dGq(d){this.a=d},
dGh:function dGh(d,e,f){this.a=d
this.b=e
this.c=f},
dGi:function dGi(d){this.a=d},
dGj:function dGj(d){this.a=d},
dGy:function dGy(d){this.a=d},
dGz:function dGz(d,e){this.a=d
this.b=e},
dGA:function dGA(d,e){this.a=d
this.b=e},
dGB:function dGB(d){this.a=d},
dGx:function dGx(d,e){this.a=d
this.b=e},
dGC:function dGC(d,e){this.a=d
this.b=e},
dGw:function dGw(d,e){this.a=d
this.b=e},
dGD:function dGD(d){this.a=d},
dGv:function dGv(d){this.a=d},
dGE:function dGE(d){this.a=d},
dGu:function dGu(d){this.a=d},
dGF:function dGF(d){this.a=d},
dGt:function dGt(d){this.a=d},
dGG:function dGG(d){this.a=d},
dGs:function dGs(d){this.a=d},
aL8:function aL8(){},
aL9:function aL9(){},
c2n:function c2n(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c2o:function c2o(d,e){this.a=d
this.b=e},
c2p:function c2p(d){this.a=d},
aye(d,e,f,g,h){return new C.baE(d,e,f,g,h)},
fYq(d,e,f,g,h,i){return $.hNV.c4(0,d+"|"+B.u(e)+"|"+f.l()+"|"+B.u(g),new C.cNW(d,e,f,i,g,h))},
y9:function y9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Cl:function Cl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
np:function np(d,e,f){this.a=d
this.b=e
this.c=f},
baE:function baE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fg9:function fg9(){},
fga:function fga(){},
fgb:function fgb(){},
fgi:function fgi(){},
fgj:function fgj(){},
fgk:function fgk(){},
Us:function Us(d){this.a=d},
aCN:function aCN(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.iH$=m
_.oz$=n
_.nb$=o
_.iI$=p
_.bw$=q
_.aa$=r
_.c=_.a=null},
dIn:function dIn(d){this.a=d},
dI1:function dI1(d,e){this.a=d
this.b=e},
dI4:function dI4(){},
dIo:function dIo(){},
dI_:function dI_(d,e){this.a=d
this.b=e},
dI0:function dI0(d,e){this.a=d
this.b=e},
dI5:function dI5(d,e,f){this.a=d
this.b=e
this.c=f},
dHV:function dHV(){},
dHW:function dHW(){},
dHX:function dHX(d){this.a=d},
dHY:function dHY(d,e){this.a=d
this.b=e},
dHZ:function dHZ(d,e,f){this.a=d
this.b=e
this.c=f},
dI6:function dI6(){},
dI7:function dI7(d,e){this.a=d
this.b=e},
dI8:function dI8(d){this.a=d},
dI3:function dI3(d,e){this.a=d
this.b=e},
dI2:function dI2(d){this.a=d},
dHU:function dHU(d,e,f){this.a=d
this.b=e
this.c=f},
dIh:function dIh(d){this.a=d},
dIg:function dIg(d){this.a=d},
dIi:function dIi(d){this.a=d},
dIf:function dIf(d){this.a=d},
dId:function dId(d){this.a=d},
dIe:function dIe(d){this.a=d},
dIc:function dIc(d){this.a=d},
dI9:function dI9(d){this.a=d},
dIb:function dIb(d){this.a=d},
dIj:function dIj(d,e){this.a=d
this.b=e},
dIk:function dIk(d,e){this.a=d
this.b=e},
dIl:function dIl(d){this.a=d},
dIa:function dIa(d){this.a=d},
dIm:function dIm(d,e){this.a=d
this.b=e},
baX:function baX(d,e){this.b=d
this.a=e},
cNW:function cNW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aLd:function aLd(){},
bwK:function bwK(){},
hEM(){return new C.No(null)},
Qe(d,e,f,g,h){return new C.bsl(d,e,f,g,h)},
bqL(d,e,f){return A.k.D((d-e)/(f-e),0,1)},
fYW(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
No:function No(d){this.a=d},
Kp:function Kp(d,e){this.a=d
this.b=e},
AB:function AB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aD3:function aD3(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dOd:function dOd(d,e){this.a=d
this.b=e},
dOc:function dOc(d){this.a=d},
dOf:function dOf(d,e){this.a=d
this.b=e},
dOe:function dOe(d){this.a=d},
bsl:function bsl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fgA:function fgA(){},
fgB:function fgB(){},
fgC:function fgC(){},
fgD:function fgD(){},
fgE:function fgE(){},
fgF:function fgF(){},
fgG:function fgG(){},
fgH:function fgH(){},
fgI:function fgI(){},
bqM:function bqM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eXz:function eXz(d){this.a=d},
eXy:function eXy(d,e){this.a=d
this.b=e},
eXw:function eXw(d){this.a=d},
eXA:function eXA(d){this.a=d},
eXx:function eXx(d,e){this.a=d
this.b=e},
aeM:function aeM(d,e,f){this.c=d
this.d=e
this.a=f},
adE:function adE(d,e,f){this.c=d
this.d=e
this.a=f},
Q7:function Q7(d,e,f,g,h,i,j,k,l,m){var _=this
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
brK:function brK(d,e){this.b=d
this.a=e},
brf:function brf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9F:function b9F(d,e){this.b=d
this.a=e},
aHf:function aHf(d,e){this.c=d
this.a=e},
aHg:function aHg(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cR$=e
_.b4$=f
_.c=_.a=null},
eXf:function eXf(d){this.a=d},
eXe:function eXe(d){this.a=d},
eXd:function eXd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eXc:function eXc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eXa:function eXa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eX9:function eX9(d,e,f){this.a=d
this.b=e
this.c=f},
eXb:function eXb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eX8:function eX8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eXn:function eXn(d){this.a=d},
eXm:function eXm(d){this.a=d},
eXo:function eXo(d,e){this.a=d
this.b=e},
eXp:function eXp(d,e){this.a=d
this.b=e},
eXq:function eXq(d,e){this.a=d
this.b=e},
eXl:function eXl(d,e,f){this.a=d
this.b=e
this.c=f},
eXr:function eXr(d,e,f){this.a=d
this.b=e
this.c=f},
eXk:function eXk(d){this.a=d},
eXg:function eXg(d){this.a=d},
eXs:function eXs(d){this.a=d},
eXt:function eXt(d){this.a=d},
eXj:function eXj(d,e){this.a=d
this.b=e},
eXu:function eXu(d,e){this.a=d
this.b=e},
eXi:function eXi(d,e){this.a=d
this.b=e},
eXv:function eXv(d,e){this.a=d
this.b=e},
eXh:function eXh(d,e){this.a=d
this.b=e},
eX6:function eX6(){},
eX7:function eX7(){},
bqo:function bqo(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpQ:function bpQ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
baj:function baj(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpS:function bpS(d,e,f){this.b=d
this.c=e
this.a=f},
btP:function btP(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aMP:function aMP(){},
hlP(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ad(0,new B.x(w,0)),u=e.aF(0,new B.x(w,0)),t=1-f,s=3*t
return d.aI(0,t*t*t).ad(0,v.aI(0,s*t*f)).ad(0,u.aI(0,s*f*f)).ad(0,e.aI(0,f*f*f))},
bgO(d,e,f,g,h,i){return $.hOv.c4(0,d+"|"+B.u(e)+"|"+f.l()+"|"+B.u(g),new C.diR(d,e,f,i,g,h))},
a0e:function a0e(d,e){this.a=d
this.b=e},
q9:function q9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qQ:function qQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Cp:function Cp(d,e){this.a=d
this.b=e},
Zc:function Zc(d,e){this.a=d
this.b=e},
aeC:function aeC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0r:function a0r(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Cz:function Cz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abz:function abz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abP:function abP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adI:function adI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgM:function bgM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bt$=_.bH$=0},
diV:function diV(d){this.a=d},
diW:function diW(d){this.a=d},
diS:function diS(d,e){this.a=d
this.b=e},
diT:function diT(d){this.a=d},
diU:function diU(d){this.a=d},
diX:function diX(d){this.a=d},
diY:function diY(d){this.a=d},
diZ:function diZ(d){this.a=d},
dj_:function dj_(d){this.a=d},
dj0:function dj0(d){this.a=d},
dj1:function dj1(d){this.a=d},
dj2:function dj2(d){this.a=d},
dj3:function dj3(d){this.a=d},
dj4:function dj4(d){this.a=d},
FR:function FR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VQ:function VQ(d){this.a=d},
aEe:function aEe(d,e,f,g,h,i,j){var _=this
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
emC:function emC(d){this.a=d},
emr:function emr(d){this.a=d},
emt:function emt(){},
emu:function emu(){},
emx:function emx(){},
emy:function emy(d,e,f){this.a=d
this.b=e
this.c=f},
emz:function emz(d){this.a=d},
emA:function emA(d){this.a=d},
emv:function emv(){},
emw:function emw(d){this.a=d},
en1:function en1(d){this.a=d},
emB:function emB(){},
emn:function emn(d){this.a=d},
emE:function emE(d){this.a=d},
emD:function emD(d){this.a=d},
emG:function emG(){},
emF:function emF(d,e){this.a=d
this.b=e},
emq:function emq(){},
emo:function emo(d){this.a=d},
emp:function emp(d){this.a=d},
en_:function en_(d){this.a=d},
emZ:function emZ(d){this.a=d},
en0:function en0(d){this.a=d},
emQ:function emQ(d,e){this.a=d
this.b=e},
emY:function emY(d){this.a=d},
emW:function emW(d){this.a=d},
emX:function emX(d){this.a=d},
emV:function emV(d){this.a=d},
emU:function emU(d){this.a=d},
emR:function emR(d){this.a=d},
emS:function emS(d){this.a=d},
emT:function emT(d){this.a=d},
ems:function ems(){},
emM:function emM(d){this.a=d},
emN:function emN(d){this.a=d},
emL:function emL(d){this.a=d},
emO:function emO(d){this.a=d},
emK:function emK(d){this.a=d},
emP:function emP(d){this.a=d},
emJ:function emJ(d){this.a=d},
emI:function emI(d){this.a=d},
emH:function emH(d,e){this.a=d
this.b=e},
bgN:function bgN(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
diR:function diR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aLX:function aLX(){},
bla:function bla(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
PZ:function PZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
W4:function W4(d){this.a=d},
bkh:function bkh(d,e,f,g,h,i,j,k){var _=this
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
eyI:function eyI(d){this.a=d},
eyG:function eyG(d){this.a=d},
eyH:function eyH(){},
eyj:function eyj(){},
eyi:function eyi(){},
eys:function eys(d,e){this.a=d
this.b=e},
eyu:function eyu(d){this.a=d},
eyy:function eyy(d){this.a=d},
eyt:function eyt(d){this.a=d},
eyz:function eyz(d){this.a=d},
eyA:function eyA(d){this.a=d},
eyB:function eyB(d,e){this.a=d
this.b=e},
eyr:function eyr(d,e){this.a=d
this.b=e},
eyC:function eyC(d){this.a=d},
eyq:function eyq(d){this.a=d},
eyD:function eyD(d,e){this.a=d
this.b=e},
eyp:function eyp(d,e){this.a=d
this.b=e},
eyE:function eyE(d){this.a=d},
eyo:function eyo(d,e){this.a=d
this.b=e},
eyF:function eyF(d){this.a=d},
eyn:function eyn(d){this.a=d},
eyv:function eyv(d){this.a=d},
eym:function eym(d){this.a=d},
eyw:function eyw(d){this.a=d},
eyl:function eyl(d){this.a=d},
eyx:function eyx(d,e){this.a=d
this.b=e},
eyk:function eyk(d,e){this.a=d
this.b=e},
brF:function brF(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
Wf:function Wf(d){this.a=d},
aEu:function aEu(d,e,f,g){var _=this
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
eER:function eER(d,e){this.a=d
this.b=e},
eES:function eES(d,e,f){this.a=d
this.b=e
this.c=f},
eET:function eET(d){this.a=d},
eEQ:function eEQ(){},
eEU:function eEU(d,e){this.a=d
this.b=e},
eEP:function eEP(d,e){this.a=d
this.b=e},
eEV:function eEV(d,e){this.a=d
this.b=e},
eEO:function eEO(d,e){this.a=d
this.b=e},
eEW:function eEW(d){this.a=d},
eEN:function eEN(d){this.a=d},
eEX:function eEX(d,e){this.a=d
this.b=e},
eEM:function eEM(d,e){this.a=d
this.b=e},
eEY:function eEY(d){this.a=d},
eEZ:function eEZ(d){this.a=d},
eEL:function eEL(d,e){this.a=d
this.b=e},
aM5:function aM5(){},
aMa:function aMa(){},
hqX(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aF(0,e).gcH()*0.1
return new B.x((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
h6R(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a4m(w,v,u,A.cW,B.U(x.N,x.y))},
hyz(d,e,f){var w=d.c,v=e===0?-1:1
return new B.x(w*f.a+v*C.h6S(d),d.d*f.b)},
h6S(d){return 42+(D.m5.ai(0,d.b)?(d.ch-1)*38:0)},
eb:function eb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tA:function tA(d,e,f,g){var _=this
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
aaf:function aaf(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
abl:function abl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4m:function a4m(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bMn:function bMn(){},
bMy:function bMy(d){this.a=d},
bMt:function bMt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bMz:function bMz(d){this.a=d},
bMA:function bMA(d){this.a=d},
bMC:function bMC(d){this.a=d},
bMD:function bMD(d){this.a=d},
bMB:function bMB(d){this.a=d},
bME:function bME(d,e,f){this.a=d
this.b=e
this.c=f},
bMF:function bMF(d){this.a=d},
bMp:function bMp(d){this.a=d},
bMq:function bMq(d){this.a=d},
bMo:function bMo(d){this.a=d},
bMr:function bMr(d,e,f){this.a=d
this.b=e
this.c=f},
bMs:function bMs(d){this.a=d},
bMm:function bMm(d){this.a=d},
bMG:function bMG(d,e){this.a=d
this.b=e},
bMu:function bMu(d,e){this.a=d
this.b=e},
bMx:function bMx(d){this.a=d},
bMw:function bMw(d){this.a=d},
bMv:function bMv(d){this.a=d},
aiA:function aiA(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bGZ:function bGZ(){},
bH_:function bH_(){},
mG:function mG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cmK:function cmK(d){this.a=d},
iav(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.fIu(),c9=new C.fIw(),d0=new C.fIx(),d1=new C.fIv(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aD(w,d1.$3(new B.a9(w.a,w.b,w.c,w.d),A.bM,A.bK))
d3.bL(D.ec5,D.e9T,c9.$2(A.dI,1.4))
d3.bL(D.e9J,D.e9I,c9.$2(A.br,2.4))
d3.bL(D.e9K,W.aHp,c9.$2(A.br,2.4))
if(c7){d2=c8.$1(A.fg.j(0.5))
d2.z=A.RD
d3.af(D.e9t,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.E(d2+v/3,1)
d6.$5(d3,"\u2744",new B.x(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aD(d0.$4(-22,-26,44,50),d1.$3(D.aNh,A.aP,A.cr))
d3.af(A.cH,16,c8.$1(A.br))
d3.af(A.cH,13,c8.$1(c7?A.aR.j(0.85):A.M))
if(c7){d2=d3.a
J.bx(d2.save())
d2.translate(0,4)
d3.jq(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.ad,3).L()
d2.drawLine.apply(d2,[0,0,s*11,t*11,r])
r.delete()}d2.restore()
for(t=d5*0.8,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
s=Math.sin(v*2+d5)
r=c8.$1(A.c.j(0.8*(1-u))).L()
d2.drawCircle(s*9,4-u*12,1.6+u*2,r)
r.delete()}}d3.af(D.ec1,2.4,c8.$1(c7?A.be:A.ak))
d3.af(D.ecJ,2.4,c8.$1(A.ak))
return!0
case"blender":d3.aD(d0.$5(-14,14,28,12,4),c8.$1(A.e4))
d2=$.X().r
t=x.v
q=new B.aO(d2,A.ao,c6,c6,B.a([],t))
q.F(new B.b5(-16,-26))
q.F(new B.ap(16,-26))
q.F(new B.ap(12,14))
q.F(new B.ap(-12,14))
q.F(new B.bE())
d3.aS(q,c8.$1(A.fg.j(0.35)))
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
d3.jq(0,d4.y)
d3.bL(D.a60,D.aHF,c9.$2(A.bP,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.E(s+v*0.33,1)
r=c8.$1(A.f2).L()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aD(d0.$5(-10,-4,20,10,4),c8.$1(A.aJ))
d3.af(A.ix,3,c8.$1(c7?A.be:A.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a3N[m]
r=c9.$2(A.br,3).L()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.bx(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).L()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=B.cj(A.J,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).L()
d2.drawOval(B.bW(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new B.aO($.X().r,A.ao,c6,c6,B.a([],x.v))
w.F(new B.b5(-24,-12))
w.F(new B.ap(10,-12))
w.F(new B.ap(10,2))
w.F(new B.ap(-2,2))
w.F(new B.ap(-6,22))
w.F(new B.ap(-16,22))
w.F(new B.ap(-14,2))
w.F(new B.ap(-24,2))
w.F(new B.bE())
d3.aS(w,d1.$3(D.eRw,A.aS,A.d8))
d3.b1(D.eQX,c8.$1(A.dt))
d2=d3.a
J.bx(d2.save())
d2.translate(18,-5)
d3.jq(0,d4.y*2)
d3.bL(A.J,D.e9N,c9.$2(A.bP,2.4))
d3.bL(A.a6_,D.e9M,c9.$2(A.i5,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dP.j(1-u)).L()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aO($.X().r,A.ao,c6,c6,B.a([],x.v))
d2.F(new B.b5(16,-6))
d2.F(new B.ap(52,-26))
d2.F(new B.ap(52,18))
d2.F(new B.ap(16,4))
d2.F(new B.bE())
d3.aS(d2,c8.$1(A.bL.j(0.35*v)))}d3.aD(d0.$5(-26,-6,30,12,3),d1.$3(D.eRC,A.bl,A.cp))
k=new B.aO($.X().r,A.ao,c6,c6,B.a([],x.v))
k.F(new B.b5(4,-6))
k.F(new B.ap(18,-12))
k.F(new B.ap(18,12))
k.F(new B.ap(4,6))
k.F(new B.bE())
d3.aS(k,c8.$1(A.e4))
d3.af(D.e9R,7,c8.$1(c7?A.c:A.dt))
return!0
case"neon":d3.aD(d0.$5(-30,-14,60,28,6),c8.$1(H.n1))
if(c7)j=d4.ax>0.5||A.o.E(A.k.bm(d5*17),3)!==0
else j=!1
i=j?A.c6:D.bk5
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c6.j(0.35))
t.z=A.mI
d3.aD(d2,t)}d3.aD(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.ecb,i,17)
return!0
case"microwave":d3.aD(d0.$4(-30,-18,60,38),d1.$3(D.eRI,A.bP,A.bl))
d2=d0.$5(-26,-14,38,30,3)
d3.aD(d2,c8.$1(c7?A.bL.j(0.75):A.av))
if(c7){d2=d3.a
J.bx(d2.save())
d2.translate(-7,8)
d3.jq(0,d4.y*0.5)
d3.hI(B.cj(A.J,7,22),c8.$1(A.d8))
d2.restore()}d3.aD(d0.$5(15,-14,12,12,2),c8.$1(H.n1))
if(c7)d6.$5(d3,"0:"+A.a.aY(A.o.u(59-A.o.E(A.k.bm(d5),60)),2,"0"),D.e9S,A.bo,6.5)
d3.af(D.ea3,4,c8.$1(A.dt))
return!0
case"doorbell":d3.aD(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.af(A.Ss,10,c8.$1(c7?A.bH:A.br))
d2=d3.a
J.bx(d2.save())
d2.translate(0,-8)
d3.jq(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.ecL,A.c,16)
d2.restore()
d3.af(A.kj,6,c8.$1(A.d0))
d3.af(A.kj,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=B.bU(A.Ss,14+v*6+A.k.E(t,6))
r=c9.$2(A.bH.j(0.9-v*0.3),1.8).L()
d2.drawArc.apply(d2,[B.bW(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bL(D.eca,D.ecH,c9.$2(A.br,4))
d2=d3.a
J.bx(d2.save())
d3.jq(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aD(d0.$5(-24,-14,46,22,5),d1.$3(D.eRx,A.bP,A.ak))
d3.af(D.aHr,8,c8.$1(A.av))
d3.af(D.aHr,4.5,c8.$1(c7?A.aR:A.cp))
d3.af(D.ec8,2.2,c8.$1(c7&&A.o.E(A.k.bm(d5*1.6),2)===0?A.aw:A.kw))
d2.restore()
if(c7)d6.$5(d3,"REC",D.ecj,A.aw,9)
return!0
case"console":d3.aD(d0.$5(-28,-22,56,44,8),d1.$3(D.eRF,A.j6,A.fc))
d3.aD(d0.$5(-20,-17,40,22,3),c8.$1(A.dH))
if(c7){d2=d5*2.3
d3.af(new B.x(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.b1(new B.a9(-18,t,-15.6,t+8),c8.$1(A.bo))
d2=-9+Math.sin(d2-0.4)*6
d3.b1(new B.a9(15.6,d2,18,d2+8),c8.$1(A.c6))}d3.af(D.ec4,4,c8.$1(A.aW))
d3.af(D.e9O,2.4,c8.$1(A.aw))
d3.af(D.ea0,2.4,c8.$1(A.be))
return!0
case"heartmon":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(A.av))
d3.aD(d0.$5(-26,-18,52,28,3),c8.$1(A.dH))
if(c7){d2=$.X()
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
h.e=null}}d3.aS(h,c9.$2(A.bo,1.8))
d6.$5(d3,"72",D.e9P,A.h6,11)
d2=d5*9
d6.$5(d3,"\u2665",D.ecn,A.h6.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.af(D.ecd,3,c8.$1(c7?A.be:A.br))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aD(d2,c8.$1(A.cC.j(c7?0.5:0.3)))
d3.aD(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.b1(D.eRz,c8.$1(F.tq))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bx(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.v8(0,-1,1)
d3.hI(B.cj(A.J,8,14),c8.$1(A.cY))
d2=new B.aO($.X().r,A.ao,c6,c6,B.a([],x.v))
d2.F(new B.b5(-6,0))
d2.F(new B.ap(-12,-4))
d2.F(new B.ap(-12,4))
d2.F(new B.bE())
d3.aS(d2,c8.$1(A.c9))
d3.af(D.eav,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.E(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.E(v,2)
r=c9.$2(A.ad,1).L()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.X().r
t=x.v
e=new B.aO(d2,A.ao,c6,c6,B.a([],t))
e.F(new B.b5(-9,22))
e.F(new B.ap(-5,-16))
e.F(new B.ap(5,-16))
e.F(new B.ap(9,22))
e.F(new B.bE())
d3.aS(e,d1.$3(D.eS2,A.c,A.bx))
d3.b1(D.eS1,c8.$1(c7?A.dP:A.br))
s=new B.aO(d2,A.ao,c6,c6,B.a([],t))
s.F(new B.b5(-7,-22))
s.F(new B.ap(0,-29))
s.F(new B.ap(7,-22))
s.F(new B.bE())
d3.aS(s,c8.$1(A.eu))
if(c7){d=Math.sin(d4.y*0.3)
d2=new B.aO(d2,A.ao,c6,c6,B.a([],t))
d2.F(new B.b5(0,-19))
t=d*34
d2.F(new B.ap(t,-26))
d2.F(new B.ap(t,-12))
d2.F(new B.bE())
d3.aS(d2,c8.$1(A.dP.j(0.45)))
d2=c8.$1(A.dP.j(0.35))
d2.z=A.RD
d3.af(D.e9u,14,d2)}return!0
case"discoball":d3.bL(D.e9z,K.aHn,c9.$2(A.dt,1.4))
d3.af(A.J,16,d1.$3(D.eRk,A.aP,A.ak))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.dq,0.7).L()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.dq,0.7).L()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.E(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.daj[A.o.E(v,4)].j(0.5+0.5*Math.sin(s+v))).L()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aD(d0.$5(-14,-4,28,24,5),d1.$3(D.eRi,A.cr,A.ak))
d3.aD(d0.$5(-12,-26,24,20,5),d1.$3(D.eRc,A.aL,A.bK))
d3.bL(D.e9y,D.e9A,c9.$2(A.br,1.6))
d3.af(D.e9B,2.2,c8.$1(c7?A.aw:A.br))
a1=c7&&A.k.E(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a3P[m]
if(c7)t=a1?A.bb:A.f4
else t=A.cp
r=c8.$1(t).L()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bx(d2.save())
d2.translate(14,0)
d3.jq(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bL(A.J,D.a5X,c9.$2(A.bK,4))
d2.restore()
d3.bL(D.ebY,D.ech,c9.$2(A.bK,4))
d3.b1(D.eS0,c8.$1(c7?A.bb.j(0.7):A.aJ))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.ayp[m]+1,d2,10,14,2)
p=B.ar(A.bL,A.d8,a2)
p.toString
r=c8.$1(p).L()
t.drawRRect(B.eU(s),r)
r.delete()}d3.aD(d0.$5(-24,-6,48,26,8),d1.$3(D.eRy,A.bP,A.bl))
for(m=0;m<2;++m){l=D.ayp[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fn:A.av).L()
t.drawRRect(B.eU(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cY.j(0.5))
s.z=G.pd
r=s.L()
t.drawRRect(B.eU(d2),r)
r.delete()}}d3.bL(D.ea7,D.eao,c9.$2(A.av,3))
return!0
case"ledstrip":d3.aD(d0.$5(-34,-4,68,10,4),c8.$1(A.cp))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.E(t+v*40,360)
i=c7?new M.vL(1,a3,0.8,1).m_():A.e4
if(c7){s=c8.$1(i.j(0.45))
s.z=G.pd
r=s.L()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).L()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aD(d0.$5(-40,-2,6,6,1),c8.$1(A.dt))
return!0
case"pump":d3.aD(d0.$5(-16,-2,32,22,6),d1.$3(D.eRn,A.cC,A.Lr))
d3.af(D.eco,8,c8.$1(A.qX))
d2=d3.a
J.bx(d2.save())
d2.translate(-2,9)
d3.jq(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.fg,2.4).L()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new B.aO($.X().r,A.ao,c6,c6,B.a([],x.v))
t.F(new B.b5(16,6))
t.F(new B.ap(26,6))
t.F(new B.ap(26,-20))
t.F(new B.ap(10,-20))
d3.aS(t,c9.$2(A.bK,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.E(t+v*0.2,1)
r=c8.$1(A.hk).L()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.af(D.eaX,3.2,c8.$1(A.hk.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bx(d2.save())
d3.jq(0,-0.15)
d3.aD(d0.$5(-26,-14,40,22,10),d1.$3(D.eRA,A.i3,A.tt))
d3.aD(d0.$5(14,-10,12,14,3),c8.$1(A.cp))
d3.aD(d0.$5(-10,6,12,22,4),c8.$1(A.e4))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.E(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).L()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cY.j(0.4))
d2.z=G.pd
d3.af(D.ea2,8,d2)}return!0
case"headphones":d3.eY(B.cj(A.dD,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.br,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=F.R3[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new B.a9(s,0,s+14,20),A.by,A.oM).L()
d2.drawRRect(B.eU(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=B.bU(new B.x(l,10),10+v*5+A.k.E(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eE.j(0.9-v*0.3),1.6).L()
d2.drawArc.apply(d2,[B.bW(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new B.x(-4,-8-A.k.E(d5*14,8)),A.kr,12)
return!0
case"smartwatch":d3.aD(d0.$5(-8,-30,16,14,3),c8.$1(A.cp))
d3.aD(d0.$5(-8,14,16,14,3),c8.$1(A.cp))
d3.aD(d0.$5(-14,-17,28,32,8),d1.$3(D.eRg,A.dt,A.e4))
d3.aD(d0.$5(-11,-14,22,26,6),c8.$1(A.dH))
if(c7){a4=new B.T(Date.now(),0,!1)
d6.$5(d3,A.a.aY(A.o.u(B.dl(a4)),2,"0")+":"+A.a.aY(A.o.u(B.h1(a4)),2,"0"),D.e9F,A.bo,9.5)
g=(Math.sin(d5*9)+1)/2
d2=B.ar(A.EC,A.h6,g)
d2.toString
d6.$5(d3,"\u2665",new B.x(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.E(A.k.bm(d5*2),6)),A.dD,A.c,7)}return!0
case"tablet":d3.aD(d0.$5(-30,-22,60,44,6),c8.$1(H.n1))
d3.aD(d0.$5(-30,-22,60,44,6),c9.$2(A.bK,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bx(d2.save())
d2.clipRRect(B.eU(a5),$.py(),!0)
d2.translate(-27,-19)
E.Le(d3,D.eXP,d5,c6)
d2.restore()}else d3.aD(a5,c8.$1(D.vB))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aD(a6,d1.$3(new B.a9(a6.a,a6.b,a6.c,a6.d),A.dL,A.d7))
d3.aD(a6,c9.$2(A.aZ,1.2))
d3.af(D.aHM,9,c8.$1(A.av))
d3.af(D.aHM,6,c9.$2(A.d8,2))
d3.aD(d0.$5(4,-2,14,10,2),c8.$1(A.av))
d3.aD(d0.$5(-22,-19,44,12,2),c8.$1(A.dH))
d2=A.k.ab(d4.db,1)
t=A.k.ab(c7?d4.dx:d4.e,1)
s=c7?A.bo:A.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.eb0,s,8.2)
d3.af(D.e9U,2.4,c8.$1(c7?A.be:A.aJ))
d6.$5(d3,"IN",D.eci,A.ad,6)
d6.$5(d3,"OUT",D.eaP,A.ad,6)
return!0
case"regulator":a7=c7?A.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ar(A.bK,A.aw,a7)
t.toString
d3.aD(d2,c8.$1(t))
d3.af(D.e9v,3,c8.$1(A.aJ))
d3.aD(d0.$5(-12,-4,24,18,3),d1.$3(D.eRd,A.e4,A.hK))
d6.$5(d3,"7805",D.a60,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.dgp[m]-1
r=c8.$1(A.e6).L()
d2.drawRect(B.bW(new B.a9(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.E(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).L()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.ecK,A.bk,9)
return!0
case"diode":d3.bL(D.aHQ,D.aHA,c9.$2(A.e6,2.4))
d3.aD(d0.$5(-14,-7,28,14,6),c8.$1(A.aF.j(0.85)))
d3.b1(D.eR2,c8.$1(A.bk))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dP.j(0.4))
t.z=A.lC
d3.aD(d2,t)}d2=new B.aO($.X().r,A.ao,c6,c6,B.a([],x.v))
d2.F(new B.b5(-8,-4))
d2.F(new B.ap(-8,4))
d2.F(new B.ap(-1,0))
d2.F(new B.bE())
d3.aS(d2,c8.$1(A.aW))
d6.$5(d3,"one way",D.ec6,A.aB,8)
return!0
case"ldr":d3.bL(D.aHQ,D.a60,c9.$2(A.e6,2.4))
d3.bL(D.aHF,D.aHA,c9.$2(A.e6,2.4))
d3.af(A.J,12,c8.$1(A.d8))
d3.af(A.J,12,c9.$2(A.tD,1.6))
d2=$.X()
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
d2=B.ar(A.br,A.dP,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.x(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.ebZ,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.ef
break A}if("sonytv"===d2){t=A.qS
break A}if("appletv"===d2){t=A.e6
break A}t=F.EE
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
p.clipRRect(B.eU(a5),$.py(),!0)
p.translate(t,s)
E.h2X(d3,new B.as(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.af(D.eap,1.6,c8.$1(A.bo))}else{d3.aD(a5,c8.$1(D.vB))
p=new B.aO($.X().r,A.ao,c6,c6,B.a([],x.v))
p.F(new B.b5(t,s))
p.F(new B.ap(t+24,s))
p.F(new B.ap(t,s+22))
p.F(new B.bE())
d3.aS(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.aD(d0.$5(-22,19,44,3,1.5),c8.$1(A.dt))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=H.iS[m]
s=$.X()
p=B.a([],t)
s=new B.aO(s.r,A.ao,c6,c6,p)
p.push(new B.b5(l*30,20))
p.push(new B.ap(l*22,20))
p.push(new B.ap(l*26,26))
p.push(new B.bE())
r=c8.$1(A.dt).L()
p=s.gbE().a.snapshot()
d2.drawPath((s.e=new B.cC(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.ebC,A.bP,5.5)
break
case"appletv":d2=new B.aO($.X().r,A.ao,c6,c6,B.a([],x.v))
d2.F(new B.b5(-8,18))
d2.F(new B.ap(8,18))
d2.F(new B.ap(12,25))
d2.F(new B.ap(-12,25))
d2.F(new B.bE())
d3.aS(d2,c8.$1(D.Xq))
d6.$5(d3,"Apple TV",D.eb1,A.br,4.8)
break
default:d3.aD(d0.$5(-34,19,68,7,3),c8.$1(D.biy))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dq,0.6).L()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.ecG,F.tq,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.m5.h(0,d2)
b1=b0.b===D.wG
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
d3.aD(w,d1.$3(new B.a9(p,o,b4,b5),b7,b6))
a5=d0.$5(t+2,s,b2-4,b3-4,3.5)
if(c7){t=d3.a
J.bx(t.save())
t.clipRRect(B.eU(a5),$.py(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.Le(d3,new B.as(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aD(a5,c8.$1(D.vB))
if(b1){t=a5.b
s=a5.d
d3.bL(new B.x(0,t),new B.x(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aD(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.af(new B.x(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.aD(d0.$5(-17,-28,34,52,4),c8.$1(A.e4))
d3.aD(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bP))
if(c7){d6.$5(d3,"NGMY",D.ecN,A.av,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.E(v,4)===3?14:22
r=c8.$1(A.bl).L()
d2.drawRect(B.bW(new B.a9(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.af(A.aHl,1.6,c8.$1(A.av))}return!0
case"laptop":d3.aD(d0.$5(-30,-28,60,42,4),d1.$3(D.eRJ,A.cr,A.bl))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bx(d2.save())
d2.clipRRect(B.eU(b8),$.py(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.Le(d3,new B.as(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aD(b8,c8.$1(D.vB))
d2=new B.aO($.X().r,A.ao,c6,c6,B.a([],x.v))
d2.F(new B.b5(-38,16))
d2.F(new B.ap(38,16))
d2.F(new B.ap(34,21))
d2.F(new B.ap(-34,21))
d2.F(new B.bE())
d3.aS(d2,c8.$1(D.Xq))
d3.aD(d0.$5(-7,16,14,2,1),c8.$1(A.bl))
return!0
case"imac":d3.aD(d0.$5(-32,-28,64,46,5),d1.$3(D.eRN,A.bM,A.cr))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bx(d2.save())
d2.clipRRect(B.eU(b9),$.py(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.Le(d3,new B.as(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aD(b9,c8.$1(D.vB))
d3.af(D.aHg,2,c8.$1(A.bK))
d2=new B.aO($.X().r,A.ao,c6,c6,B.a([],x.v))
d2.F(new B.b5(-6,18))
d2.F(new B.ap(6,18))
d2.F(new B.ap(10,26))
d2.F(new B.ap(-10,26))
d2.F(new B.bE())
d3.aS(d2,c8.$1(D.Xq))
return!0
case"monitor":d3.aD(d0.$5(-34,-28,68,40,3),c8.$1(A.ef))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.bx(d2.save())
d2.clipRRect(B.eU(c0),$.py(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.Le(d3,new B.as(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aD(c0,c8.$1(D.vB))
d3.b1(D.eRT,c8.$1(A.bl))
d3.aD(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dt))
return!0
case"projector":if(c7){d2=new B.aO($.X().r,A.ao,c6,c6,B.a([],x.v))
d2.F(new B.b5(14,4))
d2.F(new B.ap(-32,-42))
d2.F(new B.ap(34,-42))
d2.F(new B.bE())
d3.aS(d2,c8.$1(A.dP.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bx(d2.save())
d2.clipRRect(B.eU(c1),$.py(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.Le(d3,new B.as(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aD(d0.$5(-26,-4,52,24,6),d1.$3(D.eRB,A.ij,A.dt))
d3.af(D.aHq,7,c8.$1(A.av))
d3.af(D.aHq,4,c8.$1(c7?A.dP:A.cp))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dq,1).L()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aD(d0.$5(-34,-10,68,32,12),c8.$1(A.av))
c2=d0.$5(-30,-20,60,28,8)
d3.aD(c2,c8.$1(H.n1))
d3.aD(c2,c9.$2(A.br,1.2))
if(c7){c3=new B.aO($.X().r,A.ao,c6,c6,B.a([],x.v))
c3.F(new B.b5(-26,4))
c3.F(new B.cR(-10,-14+Math.sin(d5)*3,6,-6))
c3.F(new B.ap(22,-16))
d3.aS(c3,c9.$2(A.aR,2.2))
d2=A.k.E(d5*6,48)
d3.af(new B.x(-26+d2,4-d2*0.1),2.4,c8.$1(A.bo))
d6.$5(d3,""+(88+A.o.E(A.k.bm(d5*2),5)),D.eaY,A.c,10)
d6.$5(d3,"km/h",D.eaV,A.aB,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aD(c4,d1.$3(new B.a9(c4.a,c4.b,c4.c,c4.d),A.dt,A.e4))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.bx(d2.save())
d2.clipRRect(B.eU(c5),$.py(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.Le(d3,new B.as(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.by.j(0.2))
d2.z=A.mI
d3.af(A.J,26,d2)}else d3.aD(c5,c8.$1(A.M))
d3.bL(D.ecs,D.ecx,c9.$2(A.bl,4))
d3.bL(D.eaq,D.eay,c9.$2(A.bl,4))
return!0}return!1},
fIu:function fIu(){},
fIw:function fIw(){},
fIx:function fIx(){},
fIv:function fIv(){},
h5G(d,e,f,g){return new C.aiy(d,g,f,e)},
FB(d,e,f){return new C.baF(d,e,f)},
aiy:function aiy(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aiz:function aiz(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.iH$=h
_.oz$=i
_.nb$=j
_.iI$=k
_.bw$=l
_.aa$=m
_.c=_.a=null},
bGD:function bGD(d,e){this.a=d
this.b=e},
bGE:function bGE(d){this.a=d},
bGC:function bGC(d){this.a=d},
bGF:function bGF(){},
bGG:function bGG(d){this.a=d},
bGH:function bGH(d,e,f){this.a=d
this.b=e
this.c=f},
bGB:function bGB(d,e){this.a=d
this.b=e},
bGz:function bGz(d,e){this.a=d
this.b=e},
bGA:function bGA(d,e,f){this.a=d
this.b=e
this.c=f},
bGt:function bGt(d,e){this.a=d
this.b=e},
bGu:function bGu(){},
bGv:function bGv(d,e){this.a=d
this.b=e},
bGw:function bGw(d,e){this.a=d
this.b=e},
bGx:function bGx(d){this.a=d},
bGy:function bGy(d){this.a=d},
bGW:function bGW(d){this.a=d},
bGX:function bGX(){},
bG6:function bG6(){},
bGY:function bGY(d,e){this.a=d
this.b=e},
bGV:function bGV(d,e,f){this.a=d
this.b=e
this.c=f},
bGQ:function bGQ(d){this.a=d},
bGN:function bGN(d,e,f){this.a=d
this.b=e
this.c=f},
bGO:function bGO(d,e){this.a=d
this.b=e},
bGR:function bGR(d){this.a=d},
bGL:function bGL(d,e){this.a=d
this.b=e},
bGM:function bGM(d,e){this.a=d
this.b=e},
bGP:function bGP(d){this.a=d},
bGS:function bGS(d){this.a=d},
bGJ:function bGJ(d,e){this.a=d
this.b=e},
bGK:function bGK(d,e){this.a=d
this.b=e},
bGT:function bGT(d){this.a=d},
bGI:function bGI(d){this.a=d},
bGU:function bGU(d){this.a=d},
bG7:function bG7(d,e){this.a=d
this.b=e},
bGq:function bGq(d,e){this.a=d
this.b=e},
bGs:function bGs(d,e){this.a=d
this.b=e},
bGr:function bGr(d,e){this.a=d
this.b=e},
bGd:function bGd(d,e){this.a=d
this.b=e},
bGe:function bGe(d){this.a=d},
bGc:function bGc(d){this.a=d},
bGf:function bGf(d,e,f){this.a=d
this.b=e
this.c=f},
bGb:function bGb(d,e){this.a=d
this.b=e},
bGi:function bGi(d,e){this.a=d
this.b=e},
bGj:function bGj(d,e){this.a=d
this.b=e},
bGk:function bGk(d,e){this.a=d
this.b=e},
bGl:function bGl(d,e,f){this.a=d
this.b=e
this.c=f},
bGa:function bGa(d,e){this.a=d
this.b=e},
bGm:function bGm(d,e,f){this.a=d
this.b=e
this.c=f},
bG9:function bG9(d,e){this.a=d
this.b=e},
bGn:function bGn(d,e,f){this.a=d
this.b=e
this.c=f},
bG8:function bG8(d,e){this.a=d
this.b=e},
bGo:function bGo(d){this.a=d},
bGp:function bGp(d){this.a=d},
bGg:function bGg(d){this.a=d},
bGh:function bGh(d){this.a=d},
baF:function baF(d,e,f){this.a=d
this.b=e
this.c=f},
fgl:function fgl(){},
fgm:function fgm(){},
fgn:function fgn(){},
fg8:function fg8(){},
fgo:function fgo(){},
fg7:function fg7(){},
fgp:function fgp(){},
fgc:function fgc(){},
fg6:function fg6(){},
fgd:function fgd(){},
fg5:function fg5(){},
fge:function fge(){},
fg4:function fg4(){},
fgf:function fgf(){},
fg2:function fg2(){},
fg3:function fg3(){},
fgg:function fgg(){},
fg0:function fg0(){},
fg1:function fg1(){},
fgh:function fgh(){},
fg_:function fg_(){},
V3:function V3(d){this.a=d},
aDf:function aDf(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dSM:function dSM(d,e){this.a=d
this.b=e},
dSV:function dSV(d){this.a=d},
dSW:function dSW(){},
dSX:function dSX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSY:function dSY(){},
dSL:function dSL(d){this.a=d},
dSK:function dSK(d,e,f){this.a=d
this.b=e
this.c=f},
dSJ:function dSJ(d,e){this.a=d
this.b=e},
dSH:function dSH(d){this.a=d},
dSI:function dSI(){},
dSU:function dSU(d){this.a=d},
dST:function dST(d){this.a=d},
dSR:function dSR(d,e){this.a=d
this.b=e},
dSP:function dSP(d){this.a=d},
dSQ:function dSQ(){},
dSS:function dSS(d,e,f){this.a=d
this.b=e
this.c=f},
dSN:function dSN(d,e){this.a=d
this.b=e},
dSO:function dSO(){},
dT_:function dT_(d){this.a=d},
dT0:function dT0(d,e){this.a=d
this.b=e},
dSZ:function dSZ(){},
dT1:function dT1(d,e){this.a=d
this.b=e},
dT2:function dT2(d){this.a=d},
dT3:function dT3(d){this.a=d},
axn:function axn(d,e){this.c=d
this.a=e},
b8U:function b8U(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
cDA:function cDA(d){this.a=d},
b8T:function b8T(d,e){this.b=d
this.a=e},
cDz:function cDz(d){this.a=d},
axG:function axG(){},
axH:function axH(){},
aJC:function aJC(){},
bwM:function bwM(){},
iax(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bU(A.wy,23)
$.X()
b8=B.N()
b8.r=A.av.gp(0)
b9.af(A.wy,25,b8)
b8=B.N()
b8.sau(D.ekO.aA(0,v))
b9.af(A.wy,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
o.r=A.bk.gp(0)
o.c=A.o.E(u,5)===0?1.8:1
n=o.L()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.D(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.N()
r.r=A.bx.gp(0)
r.c=2
r.d=A.bV
b9.bL(A.wy,new B.x(b8*18,s*18-2),r)
r=B.N()
r.r=A.bk.gp(0)
b9.af(A.wy,3,r)
c2.$5(b9,w?"V":"A",D.ecA,A.bk,12)
c2.$5(b9,w?A.k.ab(m,1)+" V":""+A.k.V(m*1000)+" mA",D.ec3,A.av,9.5)
return!0
case"fan":b8=B.bz(D.eR9,A.hG)
$.X()
s=B.N()
s.r=A.br.gp(0)
b9.aD(b8,s)
s=B.N()
s.r=A.ak.gp(0)
b9.b1(D.eRU,s)
s=B.N()
s.r=A.M.j(0.6).gp(0)
b9.af(D.wz,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bx(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.cj(A.aHk,18,10)
r=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
r.r=A.hk.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.L()
b8.drawOval(B.bW(s),n)
n.delete()
b8.restore()}b8=B.N()
b8.r=A.bm.gp(0)
b9.af(D.wz,4,b8)
b8=B.N()
b8.b=A.ag
b8.c=2
b8.r=A.cr.gp(0)
b9.af(D.wz,22,b8)
b8=B.N()
b8.b=A.ag
b8.c=0.8
b8.r=A.k5.gp(0)
b9.af(D.wz,14,b8)
return!0
case"speaker":l=B.bz(D.aNh,A.uS)
$.X()
b8=B.N()
b8.sau(D.apd.aA(0,new B.a9(l.a,l.b,l.c,l.d)))
b9.aD(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=B.N()
b8.sau(D.el9.aA(0,B.bU(A.cz,15)))
b9.af(A.cz,14+k,b8)
b8=B.N()
b8.r=A.dt.gp(0)
b9.af(A.cz,5,b8)
b8=B.N()
b8.r=A.bl.gp(0)
b9.af(D.aHm,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=B.bU(D.ea6,6+u*6+A.k.E(b8,6))
q=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
q.b=A.ag
q.c=1.8
q.r=A.c6.j(0.9-u*0.2).gp(0)
n=q.L()
s.drawArc.apply(s,[B.bW(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=B.bz(D.eRM,A.uS)
$.X()
b8=B.N()
b8.sau(D.c_d.aA(0,new B.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=B.bz(D.aNj,A.iA)
s=B.N()
s.r=A.hK.gp(0)
b9.aD(b8,s)
if(b7){i=new B.T(Date.now(),0,!1)
h=B.EV(i)<500?":":" "
g=A.a.aY(A.o.u(B.dl(i)),2,"0")
f=A.a.aY(A.o.u(B.h1(i)),2,"0")
b8=B.N()
b8.r=A.bo.j(0.12).gp(0)
b9.b1(D.aNj,b8)
c2.$5(b9,g+h+f,D.ecl,A.bo,21)}b8=B.N()
b8.r=A.cr.gp(0)
b9.af(D.eck,2.4,b8)
b8=B.N()
b8.r=A.cr.gp(0)
b9.af(D.eaa,2.4,b8)
return!0
case"calculator":j=B.bz(D.eRs,A.hY)
$.X()
b8=B.N()
b8.sau(D.bZY.aA(0,new B.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
b8=B.bz(D.eRm,A.hd)
s=B.N()
s.r=(b7?A.XC:D.bkE).gp(0)
b9.aD(b8,s)
if(b7)c2.$5(b9,"3.14159",D.ec2,A.Ws,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=B.bz(new B.a9(q,s,q+6,r),A.SY)
$.X()
p=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
p.r=(d===3?A.c9:A.bP).gp(0)
n=p.L()
b8.drawRRect(B.eU(q),n)
n.delete()}return!0
case"phone":j=B.bz(D.eRj,A.hY)
$.X()
b8=B.N()
b8.r=H.n1.gp(0)
b9.aD(j,b8)
b8=B.N()
b8.b=A.ag
b8.c=1.9
b8.r=D.agM.gp(0)
b9.aD(j,b8)
a0=B.bz(D.eRb,A.hG)
if(b7){b8=B.N()
b8.sau(D.c0w.aA(0,new B.a9(a0.a,a0.b,a0.c,a0.d)))
b9.aD(a0,b8)
b8=b9.a
J.bx(b8.save())
b8.clipRRect(B.eU(a0),$.py(),!0)
b8.translate(-12,-25)
E.Le(b9,D.eXr,c1,b6)
b8.restore()
a1=A.k.E(c1*0.12,1)
b8=B.bz(D.eR8,A.hd)
s=B.N()
s.r=A.aW.gp(0)
b9.aD(b8,s)
s=B.N()
s.r=A.bo.gp(0)
b9.b1(new B.a9(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.ebk,A.c,6)}else{b8=B.N()
b8.r=D.vB.gp(0)
b9.aD(a0,b8)}b8=B.bz(D.eS3,D.eli)
s=B.N()
s.r=A.w.gp(0)
b9.aD(b8,s)
return!0
case"router":j=B.bz(D.eRL,A.rJ)
$.X()
b8=B.N()
b8.sau(D.c_u.aA(0,new B.a9(j.a,j.b,j.c,j.d)))
b9.aD(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=F.R3[a2]
s=a3<0?-4:4
r=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
r.r=A.cp.gp(0)
r.c=4
r.d=A.bV
n=r.L()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.E(A.k.bm(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
s.r=(a4?A.be:A.aJ).gp(0)
n=s.L()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=B.bU(D.wz,8+u*6+A.k.E(s,6))
q=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
q.b=A.ag
q.c=1.8
q.r=A.iH.j(0.9-u*0.2).gp(0)
n=q.L()
b8.drawArc.apply(b8,[B.bW(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bz(D.eRr,A.hG)
s=$.X()
r=B.N()
r.r=A.e4.gp(0)
b9.aD(b8,r)
if(b7){b8=B.N()
b8.r=A.aw.j(0.5*a5).gp(0)
b8.z=A.zo
b9.af(A.wy,34,b8)}a6=new B.aO(s.r,A.ao,b6,b6,B.a([],x.v))
a6.F(new B.b5(-16,12))
a6.F(new B.ap(-16,-2))
a6.F(new B.cR(0,-30,16,-2))
a6.F(new B.ap(16,12))
a6.F(new B.bE())
b8=B.N()
b8.r=B.ar(A.eu,D.bcD,a5).gp(0)
b9.aS(a6,b8)
b8=B.N()
b8.b=A.ag
b8.c=1.4
b8.r=A.bX.gp(0)
b9.aS(a6,b8)
if(b7){b8=b9.a
J.bx(b8.save())
b8.translate(0,-2)
b9.jq(0,c1*7)
s=B.N()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bL(A.J,D.aHm,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bx(b8.save())
b8.translate(0,a7)
s=$.X().r
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
q.sau(D.bYy.aA(0,D.eRE))
b9.aS(j,q)
q=new B.aO(s,A.ao,b6,b6,B.a([],r))
q.F(new B.b5(-8,-4))
q.F(new B.ap(-4,-13))
q.F(new B.ap(4,-13))
q.F(new B.ap(4,-4))
q.F(new B.bE())
p=B.N()
p.r=A.fg.gp(0)
b9.aS(q,p)
r=new B.aO(s,A.ao,b6,b6,B.a([],r))
r.F(new B.b5(8,-4))
r.F(new B.ap(8,-13))
r.F(new B.ap(11,-13))
r.F(new B.ap(15,-4))
r.F(new B.bE())
s=B.N()
s.r=A.fg.gp(0)
b9.aS(r,s)
for(a2=0;a2<2;++a2){a3=F.ayq[a2]
s=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
s.r=A.av.gp(0)
n=s.L()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bx(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
q.r=A.bP.gp(0)
q.c=1.6
n=q.L()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.E(s+u*8,14)
q=-4+u*5
p=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
p.r=A.aB.gp(0)
p.c=1.6
n=p.L()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.X().r
s=x.v
j=new B.aO(b8,A.ao,b6,b6,B.a([],s))
j.F(new B.b5(-18,20))
j.F(new B.ap(-14,-12))
j.F(new B.cR(0,-20,14,-12))
j.F(new B.ap(18,20))
j.F(new B.bE())
r=B.N()
r.sau(D.bZD.aA(0,D.eRq))
b9.aS(j,r)
r=new B.aO(b8,A.ao,b6,b6,B.a([],s))
r.F(new B.b5(14,-10))
r.F(new B.ap(30,-22))
r.F(new B.ap(32,-18))
r.F(new B.ap(16,-4))
r.F(new B.bE())
q=B.N()
q.r=A.e6.gp(0)
b9.aS(r,q)
s=new B.aO(b8,A.ao,b6,b6,B.a([],s))
s.F(new B.b5(-14,-8))
s.F(new B.cR(-34,-6,-18,12))
b8=B.N()
b8.b=A.ag
b8.c=5
b8.r=A.av.gp(0)
b9.aS(s,b8)
b8=B.N()
if(b7){s=B.ar(A.cY,A.tA,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.e4
b8.r=s.gp(0)
b9.b1(D.eRp,b8)
if(b7){b8=B.N()
b8.r=A.cY.j(0.3).gp(0)
b8.z=A.mI
b9.af(A.aHi,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.E(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.L()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=B.N()
b8.r=A.av.gp(0)
b9.af(D.e9s,3,b8)
return!0
case"lamp":if(b7){u=A.k.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aO($.X().r,A.ao,b6,b6,B.a([],x.v))
b8.F(new B.b5(-10,-14))
b8.F(new B.ap(-30,24))
b8.F(new B.ap(10,24))
b8.F(new B.ap(8,-14))
b8.F(new B.bE())
s=B.N()
s.r=A.dP.j(0.28*u).gp(0)
b9.aS(b8,s)
s=B.N()
s.r=A.dP.j(0.5*u).gp(0)
s.z=X.HW
b9.af(D.ecp,24,s)}b8=B.bz(D.eS_,A.hG)
s=$.X()
r=B.N()
r.r=A.e4.gp(0)
b9.aD(b8,r)
r=B.N()
r.r=A.dt.gp(0)
r.c=3
r.d=A.bV
b9.bL(D.e9G,D.aHs,r)
r=B.N()
r.r=A.dt.gp(0)
r.c=3
r.d=A.bV
b9.bL(D.aHs,D.ecq,r)
a9=new B.aO(s.r,A.ao,b6,b6,B.a([],x.v))
a9.F(new B.b5(-14,-16))
a9.F(new B.ap(6,-26))
a9.F(new B.ap(10,-12))
a9.F(new B.ap(-10,-6))
a9.F(new B.bE())
s=B.N()
s.r=(b7?A.aS:A.k6).gp(0)
b9.aS(a9,s)
b8=B.N()
b8.r=(b7?A.c:A.bl).gp(0)
b9.af(D.ecr,4,b8)
return!0
case"lights":b8=$.X().r
s=x.v
b0=new B.aO(b8,A.ao,b6,b6,B.a([],s))
b0.F(new B.b5(-34,-6))
b0.F(new B.cR(0,22,34,-6))
r=B.N()
r.b=A.ag
r.c=2
r.r=A.hj.gp(0)
b9.aS(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.E(q+u*0.7,1.8)<1.1
if(b2){b3=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
b3.r=D.a2T[u].j(0.6).gp(0)
b3.z=A.RD
n=b3.L()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=B.a([],s)
b4=new B.aO(b8,A.ao,b6,b6,b3)
b3.push(new B.b5(p-3,o))
b3.push(new B.ap(p+3,o))
b5=o+11
b3.push(new B.ap(p+5,b5))
b3.push(new B.cR(p,o+17,p-5,b5))
b3.push(new B.bE())
p=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
if(b2)o=D.a2T[u]
else{o=B.ar(D.a2T[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.L()
p=b4.gbE().a.snapshot()
r.drawPath((b4.e=new B.cC(p)).a,n)
n.delete()}return!0}return C.iav(b9,c0,c1,c2)},
fN:function fN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h1_(d){var w=D.m5.h(0,d)
return(w==null?null:w.b)===D.zO},
ibH(d,e,f){return B.a3(d,!1).cg(B.uN(null,!1,!0,!0,new C.fNc(e,f),A.eN,null,A.pX,new C.fNd(),x.H))},
Jn:function Jn(d,e){this.a=d
this.b=e},
mb:function mb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fNc:function fNc(d,e){this.a=d
this.b=e},
fNd:function fNd(){},
UN:function UN(d,e,f){this.c=d
this.d=e
this.a=f},
bjc:function bjc(d,e){var _=this
_.d=$
_.e=null
_.bw$=d
_.aa$=e
_.c=_.a=null},
dPa:function dPa(d){this.a=d},
dP9:function dP9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dP7:function dP7(){},
dP8:function dP8(d){this.a=d},
dP6:function dP6(d){this.a=d},
dP5:function dP5(d,e){this.a=d
this.b=e},
dP4:function dP4(d,e){this.a=d
this.b=e},
dP3:function dP3(d){this.a=d},
dP2:function dP2(d){this.a=d},
dOZ:function dOZ(d){this.a=d},
dOY:function dOY(d){this.a=d},
dP1:function dP1(d,e,f){this.a=d
this.b=e
this.c=f},
dP0:function dP0(d){this.a=d},
dP_:function dP_(d){this.a=d},
buQ:function buQ(d,e,f){this.b=d
this.c=e
this.a=f},
aev:function aev(d,e,f){this.b=d
this.c=e
this.a=f},
aLm:function aLm(){},
a0L(d,e,f,g,h,i){return new C.btF(d,e,f,g,h,i)},
btF:function btF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fgQ:function fgQ(){},
fgR:function fgR(){},
fgS:function fgS(){},
fgT:function fgT(){},
fgU:function fgU(){},
fgV:function fgV(){},
fgW:function fgW(){},
fgX:function fgX(){},
a8f:function a8f(d){this.a=d},
chn:function chn(d){this.a=d},
cho:function cho(){},
chm:function chm(d,e){this.a=d
this.b=e},
chl:function chl(d){this.a=d},
Wl:function Wl(d){this.a=d},
aEH:function aEH(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.iH$=f
_.oz$=g
_.nb$=h
_.iI$=i
_.bw$=j
_.aa$=k
_.c=_.a=null},
eJj:function eJj(d){this.a=d},
eJf:function eJf(d){this.a=d},
eJe:function eJe(d,e){this.a=d
this.b=e},
eJh:function eJh(d,e){this.a=d
this.b=e},
eJg:function eJg(d,e){this.a=d
this.b=e},
eJi:function eJi(d){this.a=d},
bv1:function bv1(d,e,f){this.b=d
this.c=e
this.a=f},
Vb:function Vb(d){this.a=d},
bjl:function bjl(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.iH$=d
_.oz$=e
_.nb$=f
_.iI$=g
_.bw$=h
_.aa$=i
_.c=_.a=null},
dVq:function dVq(){},
dVr:function dVr(){},
dVl:function dVl(d,e){this.a=d
this.b=e},
dVn:function dVn(d,e){this.a=d
this.b=e},
dVo:function dVo(d){this.a=d},
dVm:function dVm(d){this.a=d},
dVp:function dVp(d){this.a=d},
bpR:function bpR(d,e,f){this.b=d
this.c=e
this.a=f},
Up:function Up(d){this.a=d},
biZ:function biZ(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.iH$=d
_.oz$=e
_.nb$=f
_.iI$=g
_.bw$=h
_.aa$=i
_.c=_.a=null},
dGP:function dGP(){},
dGQ:function dGQ(){},
dGK:function dGK(){},
dGN:function dGN(d,e){this.a=d
this.b=e},
dGM:function dGM(d,e){this.a=d
this.b=e},
dGO:function dGO(d){this.a=d},
dGL:function dGL(d){this.a=d},
aI6:function aI6(d,e,f){this.a=d
this.b=e
this.c=f},
V2:function V2(d){this.a=d},
bje:function bje(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dSv:function dSv(d,e){this.a=d
this.b=e},
dSw:function dSw(d){this.a=d},
dSu:function dSu(d,e){this.a=d
this.b=e},
dSx:function dSx(d){this.a=d},
dSt:function dSt(d,e){this.a=d
this.b=e},
dSy:function dSy(d){this.a=d},
dSs:function dSs(d,e){this.a=d
this.b=e},
dSz:function dSz(d,e){this.a=d
this.b=e},
dSr:function dSr(d,e){this.a=d
this.b=e},
dSA:function dSA(d){this.a=d},
dSq:function dSq(d,e){this.a=d
this.b=e},
dSB:function dSB(d){this.a=d},
dSp:function dSp(d){this.a=d},
dSC:function dSC(d){this.a=d},
dSo:function dSo(d){this.a=d},
dSD:function dSD(d){this.a=d},
dSE:function dSE(d){this.a=d},
dSn:function dSn(d){this.a=d},
blb:function blb(d,e,f){this.b=d
this.c=e
this.a=f},
VL:function VL(d){this.a=d},
aE2:function aE2(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
egP:function egP(d,e){this.a=d
this.b=e},
egQ:function egQ(d,e,f){this.a=d
this.b=e
this.c=f},
egO:function egO(d,e,f){this.a=d
this.b=e
this.c=f},
egR:function egR(d){this.a=d},
egN:function egN(d){this.a=d},
egV:function egV(d){this.a=d},
egU:function egU(d,e){this.a=d
this.b=e},
egT:function egT(d,e){this.a=d
this.b=e},
egW:function egW(d,e){this.a=d
this.b=e},
egS:function egS(d,e){this.a=d
this.b=e},
egX:function egX(d){this.a=d},
VV:function VV(d){this.a=d},
aEl:function aEl(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eqK:function eqK(d){this.a=d},
eqL:function eqL(d){this.a=d},
eqI:function eqI(d,e){this.a=d
this.b=e},
eqJ:function eqJ(d){this.a=d},
eqH:function eqH(d){this.a=d},
eqM:function eqM(d){this.a=d},
eqN:function eqN(d){this.a=d},
eqO:function eqO(d){this.a=d},
eqP:function eqP(d,e){this.a=d
this.b=e},
We:function We(d){this.a=d},
bkp:function bkp(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eEB:function eEB(){},
eEK:function eEK(){},
eEG:function eEG(d){this.a=d},
eEF:function eEF(){},
eEH:function eEH(d,e){this.a=d
this.b=e},
eEE:function eEE(d,e){this.a=d
this.b=e},
eEI:function eEI(d){this.a=d},
eED:function eED(d,e){this.a=d
this.b=e},
eEJ:function eEJ(d){this.a=d},
eEC:function eEC(d){this.a=d},
VK:function VK(d){this.a=d},
bjV:function bjV(d,e,f,g,h,i,j,k){var _=this
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
_.iH$=f
_.oz$=g
_.nb$=h
_.iI$=i
_.bw$=j
_.aa$=k
_.c=_.a=null},
efU:function efU(){},
efV:function efV(){},
efN:function efN(d){this.a=d},
efM:function efM(d){this.a=d},
efO:function efO(d){this.a=d},
efL:function efL(d){this.a=d},
efP:function efP(d){this.a=d},
efK:function efK(d){this.a=d},
efQ:function efQ(d,e){this.a=d
this.b=e},
efJ:function efJ(d,e){this.a=d
this.b=e},
efR:function efR(d){this.a=d},
efI:function efI(d,e){this.a=d
this.b=e},
efS:function efS(d){this.a=d},
efH:function efH(d,e){this.a=d
this.b=e},
efT:function efT(d){this.a=d},
efG:function efG(d,e){this.a=d
this.b=e},
bd3:function bd3(d,e,f){this.c=d
this.d=e
this.a=f},
aLa:function aLa(){},
bwJ:function bwJ(){},
aLr:function aLr(){},
bwN:function bwN(){},
aLT:function aLT(){},
bwV:function bwV(){},
aMi:function aMi(){},
bx2:function bx2(){},
ow(d,e,f,g,h,i){return new C.b6F(h,d,f,g,i,e,null)},
hqG(d,e,f,g){var w=null
return B.cd(w,w,!0,w,new C.fR1(g,e,f),d,w,!0,!0,x.H)},
lO(d,e,f,g,h,i,j){return new C.b6G(f,j,i,h,g,d,e,null)},
wU(d,e,f){return C.icw(d,e,f)},
icw(d,e,f){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$wU=B.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aV.aj$.x.h(0,e)
n=n==null?null:n.gba()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return B.b(r.m0(2),$async$wU)
case 7:q=h
w=8
return B.b(q.hu(A.h4),$async$wU)
case 8:p=h
if(p==null){w=1
break}o=J.eV(A.dC.gaP(p))
w=9
return B.b(C.csk(B.a([C.hfs(o,"image/png",f+".png")],x.D),"Made in NGMY Core Protocol"),$async$wU)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.I(x.U).f.R(D.aPo)
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$wU,v)},
pZ(d,e,f,g){var w,v=$.arU
if(v==="music")return E.dX(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dX(261.63*v,w,f,0,g,"sine")}return C.fWD(v,e,f,g)},
fWD(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.D(e,-12,36)/12),s=Math.min(f,260)
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
IU(d,e,f,g){var w,v,u,t,s,r,q,p=$.arU
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.L)(e),++w)C.pZ(d,e[w],f,g)
return}for(p=B.d0(e,0,B.dB(4,"count",x.S),B.S(e).c),v=p.$ti,p=new B.bQ(p,p.gK(0),v.k("bQ<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)C.pZ(d,s,f,g)
else B.bN(new B.bb(1000*q),new C.chj(d,s,f,g),u)}},
a8e(d,e){var w="sine",v="noise"
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
cff(d){return C.hHN(d)},
hHN(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cff=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cff)
case 7:r=f
q=B.aU(J.r(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.U(x.N,x.A)
w=1
break}p=A.S.aM(0,q,null)
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
return B.i($async$cff,v)},
b0Q(d,e){return C.hHO(d,e)},
hHO(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b0Q=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b0Q)
case 6:s=g
w=7
return B.b(s.aq("String","ngmy_play_progress_v1_"+d,A.S.ao(e,null)),$async$b0Q)
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
return B.i($async$b0Q,v)},
b6F:function b6F(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cuh:function cuh(d){this.a=d},
cui:function cui(d,e){this.a=d
this.b=e},
fR1:function fR1(d,e,f){this.a=d
this.b=e
this.c=f},
fR0:function fR0(d){this.a=d},
f4:function f4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cud:function cud(d){this.a=d},
hn:function hn(d,e,f){this.c=d
this.d=e
this.a=f},
b6G:function b6G(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
j6:function j6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cuc:function cuc(d){this.a=d},
Fg:function Fg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cuj:function cuj(d){this.a=d},
qJ:function qJ(){},
cue:function cue(d,e,f){this.a=d
this.b=e
this.c=f},
cug:function cug(d){this.a=d},
cuf:function cuf(){},
chj:function chj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cwT(){var w=0,v=B.j(x.cL),u,t
var $async$cwT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=C
w=3
return B.b($.qZ().bg6("assets/data/world110.json"),$async$cwT)
case 3:u=t.hMm(e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cwT,v)},
hMm(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.S.aM(0,a2,null)),a1=B.a([],x.m)
for(w=J.aW(a0),v=x.n,u=x.b,t=x.P,s=x.gO;w.C();){r=t.a(w.gT(w))
q=B.a([],s)
for(p=J.a4(r),o=J.aW(d.a(p.h(r,"r")));o.C();){n=o.gT(o)
m=B.a([],u)
for(l=J.aW(d.a(n));l.C();){k=l.gT(l)
j=J.a4(k)
m.push(B.a([B.e5(j.h(k,0)),B.e5(j.h(k,1))],v))}q.push(m)}o=B.cO(p.h(r,"n"))
m=B.cO(p.h(r,"a"))
l=B.cO(p.h(r,"ct"))
j=B.cO(p.h(r,"sr"))
i=B.e5(p.h(r,"pop"))
h=B.e5(p.h(r,"gdp"))
g=B.cO(p.h(r,"inc"))
f=B.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=B.aQf(g,f,"",0)
f=B.e5(J.r(p.h(r,"c"),0))
p=B.e5(J.r(p.h(r,"c"),1))
e=new C.ab0(o,m,l,j,i,h,g,f,p,q)
e.byw(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new C.ab1(a1)},
fur(d){if(d>=1e12)return A.k.ab(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.ab(d/1e9,2)+" billion"
if(d>=1e6)return A.k.ab(d/1e6,1)+" million"
if(d>=1000)return A.k.ab(d/1000,1)+" thousand"
return A.k.ab(d,0)},
GS(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.E(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
ab0:function ab0(d,e,f,g,h,i,j,k,l,m){var _=this
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
ab1:function ab1(d){this.a=d},
v7:function v7(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
Pc:function Pc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
y7:function y7(d,e,f){this.a=d
this.b=e
this.c=f},
Pb:function Pb(d){this.a=0
this.b=d
this.c=0},
hOf(d,e,f){return $.hOg.c4(0,d+"|"+B.u(e)+"|"+f.l(),new C.deX(d,e,f))},
Vh:function Vh(d){this.a=d},
aDq:function aDq(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.iH$=j
_.oz$=k
_.nb$=l
_.iI$=m
_.bw$=n
_.aa$=o
_.c=_.a=null},
dXX:function dXX(d){this.a=d},
dXW:function dXW(d,e){this.a=d
this.b=e},
dXp:function dXp(d){this.a=d},
dXn:function dXn(d){this.a=d},
dXo:function dXo(d,e,f){this.a=d
this.b=e
this.c=f},
dXm:function dXm(d){this.a=d},
dXl:function dXl(){},
dXk:function dXk(d){this.a=d},
dXI:function dXI(d,e){this.a=d
this.b=e},
dXJ:function dXJ(d,e){this.a=d
this.b=e},
dXx:function dXx(d){this.a=d},
dXy:function dXy(d){this.a=d},
dXw:function dXw(d){this.a=d},
dXz:function dXz(d){this.a=d},
dXq:function dXq(d,e){this.a=d
this.b=e},
dXr:function dXr(d){this.a=d},
dXK:function dXK(d,e){this.a=d
this.b=e},
dXv:function dXv(d,e){this.a=d
this.b=e},
dXO:function dXO(d){this.a=d},
dXH:function dXH(d){this.a=d},
dXP:function dXP(d,e){this.a=d
this.b=e},
dXG:function dXG(d,e){this.a=d
this.b=e},
dXQ:function dXQ(d){this.a=d},
dXF:function dXF(d,e){this.a=d
this.b=e},
dXR:function dXR(d){this.a=d},
dXE:function dXE(d,e){this.a=d
this.b=e},
dXS:function dXS(d){this.a=d},
dXD:function dXD(d,e){this.a=d
this.b=e},
dXT:function dXT(d){this.a=d},
dXC:function dXC(d,e){this.a=d
this.b=e},
dXU:function dXU(d){this.a=d},
dXB:function dXB(d){this.a=d},
dXV:function dXV(d){this.a=d},
dXA:function dXA(d){this.a=d},
dXL:function dXL(d){this.a=d},
dXu:function dXu(d){this.a=d},
dXM:function dXM(d){this.a=d},
dXt:function dXt(d){this.a=d},
dXN:function dXN(d){this.a=d},
dXs:function dXs(d){this.a=d},
dXj:function dXj(){},
dXi:function dXi(d){this.a=d},
dXh:function dXh(d){this.a=d},
bfh:function bfh(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
deX:function deX(d,e,f){this.a=d
this.b=e
this.c=f},
deY:function deY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aLw:function aLw(){},
aLx:function aLx(){},
af2(d,e,f,g,h){return new C.btA(d,e,f,g,h)},
btA:function btA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fgJ:function fgJ(){},
fgK:function fgK(){},
fgL:function fgL(){},
fgM:function fgM(){},
fgN:function fgN(){},
fgO:function fgO(){},
fgP:function fgP(){},
Wh:function Wh(d){this.a=d},
bkt:function bkt(){this.d=$
this.c=this.a=null},
eFu:function eFu(d){this.a=d},
eFv:function eFv(d){this.a=d},
eFt:function eFt(d){this.a=d},
eFw:function eFw(){},
eFs:function eFs(d,e){this.a=d
this.b=e},
eFr:function eFr(d){this.a=d},
hOH(){var w,v,u=x.n,t=B.a([],u)
for(w=0;w<260;++w){v=new B.ez()
v.dr(w)
t.push(v.am()*3.141592653589793*2)}u=B.a([],u)
for(w=0;w<260;++w){v=new B.ez()
v.dr(w+900)
u.push(2.2+v.am())}return new C.bkg(new B.cw(null,x.z),new C.Pb(A.cW),A.J,A.az,t,u,$,A.bE,0,B.a([],x.X),null,null)},
hOJ(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hOI(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hgE(d,e,f){return $.hPj.c4(0,d+"|"+B.u(e)+"|"+f.l(),new C.eZS(d,e,f))},
W3:function W3(d){this.a=d},
bkg:function bkg(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.iH$=j
_.oz$=k
_.nb$=l
_.iI$=m
_.bw$=n
_.aa$=o
_.c=_.a=null},
exY:function exY(d,e){this.a=d
this.b=e},
ey8:function ey8(d,e){this.a=d
this.b=e},
ey9:function ey9(d,e){this.a=d
this.b=e},
ey5:function ey5(d){this.a=d},
ey6:function ey6(d){this.a=d},
ey7:function ey7(d){this.a=d},
eya:function eya(d){this.a=d},
ey4:function ey4(d){this.a=d},
eyb:function eyb(d,e){this.a=d
this.b=e},
eyc:function eyc(d){this.a=d},
ey3:function ey3(d,e){this.a=d
this.b=e},
eyd:function eyd(d){this.a=d},
ey2:function ey2(d,e){this.a=d
this.b=e},
eye:function eye(d){this.a=d},
ey1:function ey1(d){this.a=d},
eyf:function eyf(d){this.a=d},
ey0:function ey0(d){this.a=d},
eyg:function eyg(d){this.a=d},
ey_:function ey_(d){this.a=d},
eyh:function eyh(d){this.a=d},
exZ:function exZ(d){this.a=d},
exX:function exX(){},
exW:function exW(){},
exV:function exV(d){this.a=d},
exU:function exU(d){this.a=d},
brD:function brD(d,e){this.b=d
this.a=e},
eZS:function eZS(d,e,f){this.a=d
this.b=e
this.c=f},
eZT:function eZT(){},
eZU:function eZU(){},
Vi:function Vi(d){this.a=d},
aDr:function aDr(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.iH$=k
_.oz$=l
_.nb$=m
_.iI$=n
_.bw$=o
_.aa$=p
_.c=_.a=null},
dY0:function dY0(){},
dYt:function dYt(){},
dYf:function dYf(d,e){this.a=d
this.b=e},
dY6:function dY6(d,e){this.a=d
this.b=e},
dYg:function dYg(d){this.a=d},
dY5:function dY5(d){this.a=d},
dYh:function dYh(d){this.a=d},
dYe:function dYe(d){this.a=d},
dYl:function dYl(d){this.a=d},
dYd:function dYd(d){this.a=d},
dYm:function dYm(d){this.a=d},
dYc:function dYc(d,e){this.a=d
this.b=e},
dYn:function dYn(d){this.a=d},
dYo:function dYo(d){this.a=d},
dYb:function dYb(d,e){this.a=d
this.b=e},
dYp:function dYp(d){this.a=d},
dYa:function dYa(d,e){this.a=d
this.b=e},
dYq:function dYq(d){this.a=d},
dY9:function dY9(d,e){this.a=d
this.b=e},
dYr:function dYr(d){this.a=d},
dY8:function dY8(d,e){this.a=d
this.b=e},
dYs:function dYs(d){this.a=d},
dY7:function dY7(d){this.a=d},
dYi:function dYi(d){this.a=d},
dY4:function dY4(d){this.a=d},
dYj:function dYj(d){this.a=d},
dY3:function dY3(d){this.a=d},
dYk:function dYk(d){this.a=d},
dY2:function dY2(d){this.a=d},
dY_:function dY_(d){this.a=d},
dXZ:function dXZ(){},
dY1:function dY1(d,e){this.a=d
this.b=e},
dXY:function dXY(d){this.a=d},
bav:function bav(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
VW:function VW(d){this.a=d},
bkd:function bkd(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.iH$=e
_.oz$=f
_.nb$=g
_.iI$=h
_.bw$=i
_.aa$=j
_.c=_.a=null},
eqS:function eqS(d,e){this.a=d
this.b=e},
eqT:function eqT(d,e){this.a=d
this.b=e},
eqR:function eqR(d,e){this.a=d
this.b=e},
eqU:function eqU(d,e){this.a=d
this.b=e},
eqQ:function eqQ(d,e){this.a=d
this.b=e},
brb:function brb(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eY1:function eY1(d){this.a=d},
aLy:function aLy(){},
bwP:function bwP(){},
aM1:function aM1(){},
bwY:function bwY(){},
aM4:function aM4(){},
bx_:function bx_(){},
hOF(){var w,v,u,t=B.a([],x.d9),s=B.a([],x.g)
for(w=0;w<150;++w){v=new B.ez()
v.dr(w)
v=v.am()
u=new B.ez()
u.dr(w+500)
s.push(new B.x(v,u.am()))}return new C.biY(new B.cw(null,x.z),new C.Pb(A.cW),t,A.az,s,$,A.bE,0,B.a([],x.X),null,null)},
PG:function PG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Un:function Un(d){this.a=d},
biY:function biY(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.iH$=i
_.oz$=j
_.nb$=k
_.iI$=l
_.bw$=m
_.aa$=n
_.c=_.a=null},
dGg:function dGg(){},
dG4:function dG4(){},
dG5:function dG5(d,e){this.a=d
this.b=e},
dG6:function dG6(d,e){this.a=d
this.b=e},
dG3:function dG3(d){this.a=d},
dG2:function dG2(d){this.a=d},
dG8:function dG8(d){this.a=d},
dG1:function dG1(d,e){this.a=d
this.b=e},
dG9:function dG9(d){this.a=d},
dG0:function dG0(d){this.a=d},
dGa:function dGa(d){this.a=d},
dG_:function dG_(d){this.a=d},
dGb:function dGb(d){this.a=d},
dFZ:function dFZ(d){this.a=d},
dGc:function dGc(d){this.a=d},
dFY:function dFY(d){this.a=d},
dGd:function dGd(d){this.a=d},
dFX:function dFX(d){this.a=d},
dGe:function dGe(d){this.a=d},
dFW:function dFW(d){this.a=d},
dGf:function dGf(d){this.a=d},
dFV:function dFV(d){this.a=d},
dG7:function dG7(d){this.a=d},
dFU:function dFU(d){this.a=d},
b9U:function b9U(d,e){this.b=d
this.a=e},
aeH:function aeH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vf:function Vf(d){this.a=d},
bjo:function bjo(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.iH$=p
_.oz$=q
_.nb$=r
_.iI$=s
_.bw$=t
_.aa$=u
_.c=_.a=null},
dWK:function dWK(d){this.a=d},
dWA:function dWA(d,e){this.a=d
this.b=e},
dWB:function dWB(d,e){this.a=d
this.b=e},
dWz:function dWz(d,e){this.a=d
this.b=e},
dWC:function dWC(d){this.a=d},
dWy:function dWy(d){this.a=d},
dWD:function dWD(d){this.a=d},
dWx:function dWx(d,e){this.a=d
this.b=e},
dWE:function dWE(d){this.a=d},
dWw:function dWw(d,e){this.a=d
this.b=e},
dWF:function dWF(d){this.a=d},
dWv:function dWv(d,e){this.a=d
this.b=e},
dWG:function dWG(d){this.a=d},
dWu:function dWu(d,e){this.a=d
this.b=e},
dWH:function dWH(d){this.a=d},
dWt:function dWt(d){this.a=d},
dWI:function dWI(d){this.a=d},
dWs:function dWs(d){this.a=d},
dWJ:function dWJ(d){this.a=d},
dWr:function dWr(d){this.a=d},
bf8:function bf8(d,e){this.b=d
this.a=e},
dc5:function dc5(d){this.a=d},
VS:function VS(d){this.a=d},
bkc:function bkc(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.iH$=f
_.oz$=g
_.nb$=h
_.iI$=i
_.bw$=j
_.aa$=k
_.c=_.a=null},
eq6:function eq6(d,e){this.a=d
this.b=e},
eq7:function eq7(d){this.a=d},
eq5:function eq5(d){this.a=d},
eq8:function eq8(d){this.a=d},
eq4:function eq4(d){this.a=d},
eq9:function eq9(d){this.a=d},
eq3:function eq3(d){this.a=d},
eqa:function eqa(d){this.a=d},
eq2:function eq2(d){this.a=d},
eqb:function eqb(d){this.a=d},
eq1:function eq1(d,e){this.a=d
this.b=e},
eqc:function eqc(d){this.a=d},
eq0:function eq0(d,e){this.a=d
this.b=e},
eqd:function eqd(d){this.a=d},
eq_:function eq_(d,e){this.a=d
this.b=e},
eqe:function eqe(d){this.a=d},
epZ:function epZ(d,e){this.a=d
this.b=e},
bqr:function bqr(d,e){this.b=d
this.a=e},
aL7:function aL7(){},
bwI:function bwI(){},
aLu:function aLu(){},
bwO:function bwO(){},
aM0:function aM0(){},
bwX:function bwX(){},
hfs(d,e,f){var w,v
B.fU(0,0,!1)
w=new B.lp(e,f,$,null)
v=w.bII(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
i1s(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.U(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.C)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.L)(w),++q){p=w[q]
u.push(B.G(["k",p.b,"x",B.o2(A.k.ab(p.c,4)),"y",B.o2(A.k.ab(p.d,4)),"v",p.e,"l",B.o2(A.k.ab(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.o2(A.k.ab(p.as,3)),"ch",p.at,"vc",B.o2(A.k.ab(p.z,3)),"s",B.o2(A.k.ab(p.ch,2))],s,r))}w=B.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.L)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a5(f).k("co.E"))
A.d.fc(l)
return A.S.ao(B.G(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
iaU(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.S.aM(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=B.a([],x.fs)
g=x.bM
f=g.a(J.r(w,"parts"))
f=J.aW(f==null?A.cx:f)
while(f.C()){u=f.gT(f)
t=i.a(u)
e=B.aU(J.r(t,"k"))
s=e==null?"":e
if(!$.ql().ai(0,s)){J.ca(v,null)
continue}d=s
a0=B.aJ(J.r(t,"x"))
if(a0==null)a0=0.5
a1=B.aJ(J.r(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.tA(a2,d,a0,a1)
a3.aq9(a2,d,a0,a1)
h.push(a3)
r=a3
a1=B.aJ(J.r(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=B.aJ(J.r(t,"l"))
if(d==null)d=r.f
r.f=d
d=B.aJ(J.r(t,"o"))
if(d==null)d=r.r
r.r=d
d=B.jK(J.r(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.jK(J.r(t,"b"))
r.x=d===!0
d=B.aU(J.r(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aJ(J.r(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aJ(J.r(t,"ch"))
r.at=A.k.O(d==null?0:d)
d=B.aJ(J.r(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aJ(J.r(t,"s"))
r.ch=A.k.D(d==null?1:d,1,2.6)
J.ca(v,r)}i=g.a(J.r(w,"wires"))
i=J.aW(i==null?A.cx:i)
h=x.j
while(i.C()){q=i.gT(i)
p=h.a(q)
f=B.aJ(J.r(p,0))
o=f==null?a5:A.k.O(f)
f=B.aJ(J.r(p,2))
n=f==null?a5:A.k.O(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.r(v,o)
l=J.r(v,n)
if(m!=null&&l!=null)a6.akz(m,A.k.O(B.e5(J.r(p,1))),l,A.k.O(B.e5(J.r(p,3))))}i=B.aJ(J.r(w,"challenge"))
i=A.k.O(i==null?0:i)
k=B.aY(x.S)
h=g.a(J.r(w,"done"))
h=J.aW(h==null?A.cx:h)
while(h.C()){j=h.gT(h)
J.ca(k,A.k.O(B.e5(j)))}return new B.bo4(i,k)}catch(a4){return a5}},
fwp(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fwp=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.az(),$async$fwp)
case 7:r=o.aU(n.r(e.a,"ngmy_electronics_lab_v1"))
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
return B.i($async$fwp,v)},
bDj(d){return C.ics(d)},
ics(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bDj=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.az(),$async$bDj)
case 7:w=6
return B.b(f.aq("String","ngmy_electronics_lab_v1",d),$async$bDj)
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
return B.i($async$bDj,v)},
csk(d,e){var w=0,v=B.j(x.g7),u
var $async$csk=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.h3R().xh(d,null,null,null,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$csk,v)}},D,O,M,S,Z,A4,A5,T
J=c[1]
B=c[0]
A=c[2]
A_=c[148]
A6=c[147]
A0=c[138]
A1=c[136]
I=c[128]
A7=c[125]
A8=c[140]
U=c[103]
V=c[133]
A2=c[112]
G=c[132]
A9=c[139]
A3=c[143]
Aa=c[69]
W=c[78]
Ab=c[86]
Ac=c[82]
N=c[119]
Ad=c[123]
Ae=c[121]
X=c[127]
P=c[129]
Y=c[144]
Af=c[142]
L=c[141]
Ag=c[99]
Ah=c[145]
R=c[120]
Ai=c[146]
K=c[134]
Q=c[100]
Aj=c[24]
E=c[26]
F=c[96]
H=c[95]
C=a.updateHolder(c[17],C)
D=c[126]
O=c[130]
M=c[43]
S=c[135]
Z=c[106]
A4=c[137]
A5=c[131]
T=c[101]
C.ajO.prototype={}
C.Vu.prototype={
U(){return new C.bjJ(B.U(x.N,x.i),new B.aq(A.at,$.ax()),B.a([],x.X),B.a([],x.L),B.mH(0,null,null))}}
C.bjJ.prototype={
gWe(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
this.ch.t()
this.a2()},
Pd(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Pd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aV.aj$.d.c
if(s!=null)s.jQ()
p.bP(0,A.c5)
t.m(new C.e91(t))
t.a.toString
p=t.gWe()
w=3
return B.b(C.byW(C.hQy(q,C.i1j(p),o,t.ay)),$async$Pd)
case 3:s=e
r=s==null?null:J.iY(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=C.i2J(q,p,o)
if(t.c==null){w=1
break}t.m(new C.e92(t,o,r))
$.aV.x1$.push(new C.e93(t))
case 1:return B.h(u,v)}})
return B.i($async$Pd,v)},
Ye(d){return this.bZR(d)},
aVO(){return this.Ye(null)},
bZR(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Ye=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aV.aj$.d.c
if(s!=null)s.jQ()
t.f.saU(0,o)
t.m(new C.e9e(t))
E.dX(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.byW(C.hXk(o)),$async$Ye)
case 3:r=n.a=m.iaz(f)
p.b=""
if(r!=null&&!C.i1k(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.i2K(o)
q=B.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.ajO(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.e9f(p,t))
t.c4g(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Ye,v)},
c4g(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
A.d.a8(w)
w=++m.as
v=m.gWe()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.e9a(m))
t=d.d
s=B.U(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.e98(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.e9b(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.L)(r),++u){p.$2(o,new C.e9c(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.e9d(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.by.j(0.1),g=B.m(16),f=B.I(A.by.j(0.35),A.q,1)
if(m.x)j=B.B(B.a([D.eYW,A.bc,B.E(B.d(m.Q,l,l,l,l,l,l,A.DE,l,l,l),1)],x.p),A.m,l,A.e,A.j,0,l,l)
else if(k==null)j=D.fo5
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.Ug,l,l,l),1)
v=x.p
w=B.a([B.B(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.f8O,l,l,l)],v),A.m,l,A.e,A.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.tS,B.d(u,l,l,l,l,l,l,D.fbz,l,l,l),l))
w.push(A.cO)
w.push(B.d(k.b,l,l,l,l,l,l,F.DQ,l,l,l))
u=k.e
if(u.length!==0){t=A.aS.j(0.12)
s=B.m(10)
w.push(B.p(l,B.d(u,l,l,l,l,l,l,D.fe1,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.i7,A.cm,l,l,l))}w.push(A.al)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aB
w.push(new B.D(A.Mv,new B.c9(A.aM,A.e,A.j,A.E,l,A.p,l,0,B.a([new B.y(t,l,A.md,l,l,l,l,l,l,l,l,l),A.bn,new B.by(1,A.bd,new B.y(q,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.L)(j),++p){o=j[p]
t=new B.aQ(12,12)
s=new B.aQ(12,12)
A.d.v(w,B.a([A.N,new B.bK(A.a8,l,l,B.p(l,new B.y(o.a,l,A.TZ,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.by.j(0.3),l,l,new B.bk(t,t,t,t),l,l,A.n),l,l,l,l,A.h1,l,l,l),l),A.au,B.p(l,new B.y(o.b,l,D.fjp,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.c.j(0.07),l,l,new B.bk(s,s,s,s),l,l,A.n),l,l,l,l,A.bT,l,l,l)],v))}if(m.ax)w.push(D.edJ)
j=B.cc(B.w(w,A.E,l,A.e,A.j,0,A.p),A.r,m.ch,A.y,l,l,l,l,A.af)}w=x.p
g=B.w(B.a([B.ai2(B.p(l,j,A.f,l,new B.aX(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.btY,A.ew,l,l,1/0),A.b8,A.im),B.E(C.h5G(m.gWe(),l,l,m.e),1)],w),A.m,l,A.e,A.j,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new C.f4("Ask about it",i,new C.e9i(m),l,A.by,l),new C.f4("Invent something new",!i,new C.e9j(m),l,A.by,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.diD[p]
i.push(new C.f4(n,!1,new C.e9k(m,n),l,A.by,l))}f.push(new C.hn(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.d1F[p]
i.push(new C.f4(r,!1,new C.e9l(m,r),l,A.by,l))}f.push(new C.hn(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aL(l,A.U,!1,l,!0,A.r,l,B.aN(),m.f,l,l,l,l,l,2,B.br(l,new B.b4(4,B.m(16),A.X),l,A.eO,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kP,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.e9m(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.dd,!0,A.a6,l,A.an,l,A.aQ6,l,l),1)
h=m.at
v=h&&j?D.bJc:A.e2
j=h&&j?"Ask":"Invent"
f.push(B.B(B.a([i,A.ab,new C.j6(v,j,new C.e9n(m,k),A.by,l)],w),A.m,l,A.e,A.j,0,l,l))
return C.ow(A.by,A.hT,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.w(f,A.m,l,A.e,A.P,0,A.p))}}
C.G6.prototype={}
C.uU.prototype={}
C.VR.prototype={
U(){return new C.aEf(A.J,A.J,A.az,B.aY(x.S),$,A.bE,0,B.a([],x.X),null,null)}}
C.aEf.prototype={
gaX1(){var w,v,u,t=this,s=D.Hn[t.cx],r=D.R4[t.cy],q=D.CB[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.em(w,w.r,B.a5(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.awI[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cM(p,0,new C.enh())},
ga2w(){return D.Hn[this.cx].d/this.gaX1()},
gaOk(){return 0.1*(D.Hn[this.cx].d/0.9)/D.R4[this.cy].d},
a_(){this.a1()
this.p_()
C.cff("rocket_lander").bK(new C.enB(this),x.a)},
c4p(){var w=this
w.ay=A.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cW.am()*0.6
w.f=new B.x(0.15+A.cW.am()*0.7,0.08)
w.r=new B.x((A.cW.am()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
pY(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.enC())
return}w=D.rr[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.x(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga2w()
v=v.ad(0,new B.x(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaOk())}if(m.dy){t=m.r
v=v.aF(0,t.aI(0,t.gcH()*6*D.ayI[m.d]))}t=m.r=m.r.ad(0,v.aI(0,d))
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
p=D.CB[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b0Q("rocket_lander",B.G(["unlocked",t],x.N,x.A))
C.IU("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga2w()/(D.rr[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ab(m.ga2w()/(D.rr[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dX(80,"",500,0,0.6,"noise")
B.fG()}}if(m.Q&&m.x>0&&A.o.E(A.k.bm(m.CW*20),2)===0)E.dX(90,"",70,0,0.12,"noise")
m.m(new C.enD())},
afM(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fb2,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new C.f4(e[w].a,f.$1(w),new C.enj(this,g,w),v,h,v))
return new B.D(A.eF,B.w(B.a([u,A.cO,B.bV(A.bB,s,A.bs,6,6)],t),A.E,v,A.e,A.j,0,A.p),v)},
bDY(d){var w,v,u,t,s=this,r=null,q=s.ga2w()/(D.rr[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaOk()),o=D.ayI[s.d],n=B.m(24),m=d.c,l=B.I(m.j(0.6),A.q,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.au,B.d(d.d+" Gravity here: "+B.u(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.Ub,r,r,r),A.R,s.afM("ENGINE: "+D.Hn[s.cx].b,D.Hn,new C.en8(s),new C.en9(s),A.cY),s.afM("FUEL TANK: "+D.R4[s.cy].b,D.R4,new C.ena(s),new C.enb(s),A.bo),s.afM("LANDING GEAR: "+D.CB[s.db].b,D.CB,new C.enc(s),new C.end(s),A.aR),s.afM("EXTRAS (tap to add)",D.awI,new C.ene(s),new C.enf(s),A.by)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.fGz)
o=(q?A.bo:A.cs).j(0.14)
w=B.m(12)
v=A.k.ab(s.gaX1(),2)
u=A.k.ab(s.ga2w()/(D.rr[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.CB[s.db].d*100)+".",r,r,r,r,r,r,D.fbH,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.i7,A.bT,r,r,r))
m.push(A.R)
m.push(new B.bK(A.A,r,r,new C.j6(A.ob,"Launch",new C.eng(s),A.bo,r),r))
return B.at(B.p(r,B.cc(B.w(m,A.E,r,A.e,A.P,0,A.p),A.r,r,A.y,r,A.bQ,r,r,A.af),A.f,r,A.lN,new B.o(D.bkd,r,l,n,r,r,A.n),r,r,r,A.bT,r,r,r,r),r,r,r)},
aY9(d,e,f,g){var w=null,v=f?A.cY:A.c.j(0.1),u=B.m(18),t=B.I(A.aZ,A.q,1)
return B.nF(A.jK,B.p(w,B.W(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.en5(e),new C.en6(e),w,w,w,w,new C.en7(e))},
aY8(d,e,f){return this.aY9(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cA(new C.enu(s,D.rr[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rr[w].a:"\ud83d\udd12"
o.push(new C.f4(v,s.d===w,new C.env(s,w),r,D.rr[w].c,r))}v=B.a([s.aY8(F.amB,new C.enw(s),s.y),A.bc,s.aY9(A.w6,new C.enx(s),s.Q,130),A.bc,s.aY8(A.Od,new C.eny(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aR:A.c.j(0.1)
t=B.m(18)
A.d.v(v,B.a([A.bc,B.aB(r,B.p(r,D.bNm,A.f,r,r,new B.o(u,r,B.I(A.aZ,A.q,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.enz(s),r,r,r,r,r,r,!1,A.a5)],p))}return C.ow(A.cY,A.hT,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.w(B.a([new C.hn(o,"WORLD",r),B.B(v,A.m,r,A.b7,A.j,0,r,r)],p),A.m,r,A.e,A.P,0,A.p))}}
C.bgP.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rr[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.X(),d=B.N(),a0=j.c,a1=B.ar(D.bn_,a0,0.25)
a1.toString
d.sau(new B.a8(A.b3,A.b6,A.x,B.a([H.aec,a1],x.O),l,l).aA(0,new B.a9(0,0,g,f)))
a2.b1(new B.a9(0,0,g,f),d)
w=new B.ez()
w.dr(5)
for(g=a2.a,v=0;v<70;++v){f=w.am()
d=w.am()
a1=w.am()
u=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
u.r=A.c.j(0.2+w.am()*0.5).gp(0)
t=u.L()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=B.a([],f)
r=new B.aO(e.r,A.ao,l,l,d)
r.F(new B.b5(0,s+14))
q=new B.ez()
q.dr(2)
for(p=0;p<=i;p+=18){e=new B.ap(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.am()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bA(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.F(new B.ap(i,h))
r.F(new B.ap(0,h))
r.F(new B.bE())
e=$.X()
d=B.N()
d.r=B.ar(a0,A.w,0.6).gp(0)
a2.aS(r,d)
o=B.cj(new B.x(k.ax*i,s+10),8,k.ay*i)
d=B.bz(o,A.iA)
a0=B.N()
a0.r=A.be.gp(0)
a2.aD(d,a0)
a0=B.bz(o.cs(2),A.rJ)
d=B.N()
d.b=A.ag
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aD(a0,d)
if(k.as==="ready")return
d=k.f
J.bx(g.save())
g.translate(d.a*i,d.b*h)
a2.jq(0,k.w)
i=k.as
if(i==="crashed"){k=B.N()
k.r=A.cY.j(0.6).gp(0)
k.z=X.HW
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
i.sau(D.c_6.aA(0,D.eRh))
a2.aS(m,i)
i=B.N()
i.r=A.aR.gp(0)
a2.af(D.wz,5,i)
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
aw(d){return!0}}
C.aLZ.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.bwW.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bw0()}}
C.aRV.prototype={}
C.a30.prototype={}
C.b9X.prototype={}
C.Uo.prototype={
U(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.ex(["skin"],x.N),o=new Float32Array(0)
return new C.aCL(w,v,u,t,s,r,q,new B.cw(null,x.z),p,D.KE,D.KE,A.az,A.cW,o,new Int32Array(0),$,A.bE,0,B.a([],x.X),null,null)}}
C.aCL.prototype={
a_(){var w=this
w.a1()
w.p_()
w.as=new C.c2n(w.gccF())
new C.dGI(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a4(0)
v.d=null}this.bv9()},
ccG(d){var w,v=this
if(v.c==null)return
w=J.a4(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f3(0,B.G(["t","init","data",$.hfH],x.N,x.A))
v.at=!0
v.ax=""
v.ayK()
break
case"pick":v.m(new C.dGk(v,d))
break
case"shot":v.ahD(B.u(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.u(w.h(d,"text")))
break}},
ayK(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.auE[q.CW]
v=new C.dGl()
u=q.ay
u=B.C(u,B.a5(u).k("co.E"))
A.d.fc(u)
t=x.N
s=B.G(["layers",u,"skinMode",q.ch,"tone","#"+B.u(v.$1(w.b))+B.u(v.$1(w.c))+B.u(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.S.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=B.U(t,x.A)
u.n(0,"t","state")
u.v(0,s)
v.f3(0,u)}},
ahD(d){return this.ctC(d)},
ctC(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ahD=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cF.aL(A.a.b2(d,A.a.cD(d,",")+1))
w=6
return B.b(C.csk(B.a([C.hfs(r,"image/png","body.png")],x.D),"Made in NGMY Core Protocol"),$async$ahD)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.I(x.U).f.R(D.aPo)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ahD,v)},
ayc(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.q(0,w)},
pY(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.q(0,"organ")&&A.k.bm(w)!==A.k.bm(v.ok)){C.a8e("kick",0.4)
v.a5b(170,new C.dGJ())}v.ok=w
return},
ahs(d){var w,v,u,t,s=this
s.m(new C.dGm(s,d))
if(d==null){s.fx=D.KE
s.dy=1
w=s.as
if(w!=null)w.f3(0,B.G(["t","focus","group",null],x.N,x.A))
return}w=s.d.e
v=B.S(w).k("Z<1>")
u=B.C(new B.Z(w,new C.dGn(d),v),v.k("J.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ay.q(0,t)){s.ay.M(0,t)
if(s.ch===2)s.ch=1}s.ayK()
w=s.as
if(w!=null)w.f3(0,B.G(["t","focus","group",d],x.N,x.A))
s.go=0
s.cw4(t,d)
return},
cw4(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){C.a8e("kick",0.8)
this.a5b(260,new C.dGo())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dX(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a5b(w*70,new C.dGp(this))
else if(A.a.q(e,"intestine")||e==="Stomach")E.dX(110,"",360,0.7,0.3,"saw")
else C.fWD("organic",6+A.o.E(e.length,8),200,0.6)
break
case"bone":E.dX(210+e.length*4,"",80,0.6,0.55,"tri")
E.dX(2400,"",20,0,0.3,v)
break
case"muscle":E.dX(70,"",150,1,0.6,"sine")
break
case"vessel":E.dX(300,"",380,0.4,0.22,v)
C.a8e("kick",0.3)
break
default:C.fWD("organic",2+A.o.E(e.length,6),200,0.4)}},
cAC(d){this.m(new C.dGr(this,d))},
aYr(){var w,v,u,t,s,r,q,p=this,o=B.aY(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
if(p.ayc(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.M(0,s.a)}q=B.C(o,o.$ti.k("co.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.ar(w)]
p.p4=""},
bVu(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new C.dGh(u,w,d))
v=x.t
C.IU("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.a5b(1100,new C.dGi(u))
return}if(d==null){if(u.cx!=null)u.ahs(null)
return}u.ahs(d)},
bZa(d,e){var w,v=this,u=null,t=B.m(18),s=B.I(A.c6.j(0.5),A.q,1)
if(v.p1){w=v.p2
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.f7f,u,u,u)}else if(d==null||e==null)w=D.fly
else{w=x.p
w=B.B(B.a([B.E(B.w(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hI,u,u,u),A.cO,B.d(e.b,u,u,u,u,u,u,F.DQ,u,u,u)],w),A.E,u,A.e,A.P,0,A.p),1),B.aI(u,u,u,u,D.bPP,u,u,u,new C.dGj(v),u,u,u,u,"Back to the whole body",A.cc)],w),A.E,u,A.e,A.j,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(D.Wz,u,s,t,u,u,A.n),u,u,u,u,I.aif,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dts.h(0,g)
i.ayK()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dbd
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,B.L)(v),++s){r=v[s]
if(i.ayc(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aI(h,h,h,h,D.qf,h,h,h,new C.dGy(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bI:B.DQ(h,A.qq,q)}else q=A.kM
q=B.w(B.a([B.E(q,1),new B.D(F.Z2,i.bZa(g,f),h)],v),A.m,h,A.e,A.j,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){o=D.d3b[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.q(0,n)
p.push(new C.f4(l,n,new C.dGz(i,o),o.c,A.c6,h))}p=B.a([new C.hn(p,h,h)],v)
if(!i.p1&&w.length!==0){n=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.L)(w),++s){k=w[s]
n.push(new C.f4(k,k===i.cx,new C.dGA(i,k),h,A.aS,h))}p.push(new C.hn(n,"FIND",h))}if(t.q(0,"organ")){n=i.k3
p.push(C.lO(A.cs,""+A.k.V(n)+" beats/min","Heart rate",180,40,new C.dGB(i),n))}if(i.ch>0&&t.a===0){n=B.a([],v)
for(j=0;j<5;++j)n.push(new C.Fg(D.auE[j],i.CW===j,new C.dGC(i,j),!1,h))
p.push(new C.hn(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=B.a([new C.f4("Spin",n,new C.dGD(i),D.alr,A.aR,h),new C.j6(A.o8,"Reset view",new C.dGE(i),A.c,h),new C.f4(l,m,new C.dGF(i),A.GD,A.aS,h)],v)
if(t.q(0,"organ"))v.push(new C.f4("Heartbeat sound",i.k4,new C.dGG(i),A.um,A.cs,h))
p.push(new C.hn(v,h,h))
return C.ow(A.c6,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.w(p,A.m,h,A.e,A.P,0,A.p))}}
C.aL8.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.aL9.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bv8()}}
C.c2n.prototype={
kI(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aM(e,"</script","<\\/script")
v=$.hlO
$.hlO=v+1
u="ngmy-body-viewer-"+v
$.yL()
$.qk().q_(u,new C.c2o(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fL(v,"message",new C.c2p(t),!1,x.gA)
t.b=u},
f3(d,e){var w,v
try{w=this.c
if(w!=null){w=B.byT(w.contentWindow)
if(w!=null)J.fST(w,e,"*")}}catch(v){}}}
C.y9.prototype={}
C.Cl.prototype={}
C.np.prototype={}
C.baE.prototype={}
C.Us.prototype={
U(){var w=x.N,v=x.y,u=x.S
return new C.aCN(B.U(w,x.a2),B.a([],x.cB),B.U(w,v),B.U(w,v),B.U(w,u),A.az,A.J,A.J,B.aY(u),$,A.bE,0,B.a([],x.X),null,null)}}
C.aCN.prototype={
a_(){var w=this
w.a1()
w.p_()
w.acw()
$.aV.x1$.push(new C.dIn(w))},
acw(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$acw=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$acw)
case 6:q=e.ti("ngmy_circuit_passed_v1")
r=q==null?A.U:q
if(s.c!=null)s.m(new C.dI1(s,r))
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
return B.i($async$acw,v)},
acQ(d){return this.c2_(d)},
c2_(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$acQ=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.M(0,d)
u=3
w=6
return B.b(B.az(),$async$acQ)
case 6:r=f
q=s.cx
p=B.a5(q).k("jT<co.E,n>")
q=B.C(new B.jT(q,new C.dI4(),p),p.k("J.E"))
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
return B.i($async$acQ,v)},
awX(d,e,f,g){var w="c"+this.y++,v=new C.Cl(w,e,f,g)
this.d.n(0,w,v)
return v},
mx(d,e,f){return this.awX(0,e,f,0)},
abS(d,e){var w
if(D.zm.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ad(0,new B.x(-36,w))},
tH(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aSm(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.nb$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dt(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.e6(m,D.cO_[A.o.E(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tH(p,0)&&n.tH(p,1)
break
case"or":p=q.a
o=n.tH(p,0)||n.tH(p,1)
break
case"xor":p=q.a
o=n.tH(p,0)!==n.tH(p,1)
break
case"nand":p=q.a
o=!(n.tH(p,0)&&n.tH(p,1))
break
case"nor":p=q.a
o=!(n.tH(p,0)||n.tH(p,1))
break
case"not":o=!n.tH(q.a,0)
break
default:o=n.tH(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bO9(){return this.aSm(null)},
pY(d){var w,v,u,t,s,r,q,p,o,n=this
n.bO9()
if(!n.ax)return
for(w=n.d,w=new B.bc(w,B.a5(w).k("bc<2>")).gae(0),v=new B.f5(w,new C.dIo()),u=n.f,t=n.w,s=0;v.C();){r=w.gT(0).a
if(u.h(0,r)===!0){q=n.nb$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.nb$)
o=s+1
E.dX(520+90*A.o.E(s,4),"",200,0,0.25,"square")
s=o}}},
awY(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
m2(d,e){var w=this.x
return new B.x(d*w.a,e*w.b)},
at9(d){var w=this
if(w.x.A(0,A.az)){$.aV.x1$.push(new C.dI_(w,d))
return}w.m(new C.dI0(w,d))},
cwm(d){this.m(new C.dI5(this,d,$.bDF()[d]))},
c6I(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bDF()[a0]
v=d.d
u=B.a5(v).k("bc<2>")
t=u.k("Z<J.E>")
s=t.k("J.E")
r=B.C(new B.Z(new B.bc(v,u),new C.dHV(),t),s)
A.d.aW(r,new C.dHW())
q=B.C(new B.Z(new B.bc(v,u),new C.dHX(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dHY(d,w))
return}u=d.r
p=B.dO(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dC(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h1(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aSm(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.l_(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aG(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.m(new C.dHZ(d,o,a0))},
axK(d){var w,v,u,t,s=this.d,r=B.a5(s).k("bc<2>")
s=B.C(new B.bc(s,r),r.k("J.E"))
r=B.S(s).k("dx<1>")
s=new B.dx(s,r)
s=new B.bQ(s,s.gK(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cf4(d){var w,v,u,t,s,r=this.d,q=B.a5(r).k("bc<2>")
r=B.C(new B.bc(r,q),q.k("J.E"))
q=B.S(r).k("dx<1>")
r=new B.dx(r,q)
r=new B.bQ(r,r.gK(0),q.k("bQ<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bZ3(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.zm.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.abS(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.z(p,o)
s=l}}}return t},
bMY(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.abS(p,o)
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
c6K(d){var w,v,u,t=this,s=t.axK(d)
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
t.m(new C.dI6())
return}u=t.bMY(d)
if(u!=null)t.m(new C.dI7(t,u))
else t.m(new C.dI8(t))},
avL(d){return this.c1_(d)},
c1_(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$avL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.axK(d)
if(s==null){w=1
break}B.jB()
t.m(new C.dI3(t,s))
case 1:return B.h(u,v)}})
return B.i($async$avL,v)},
bzO(d){if(this.x.A(0,A.az))return
this.m(new C.dHU(this,d,A.cW))
B.f_()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bDF()[g]
g=x.p
v=B.a([B.aI(h,h,h,h,B.W(i.ax?A.um:P.Cd,A.ad,h,h,h,21),h,h,h,new C.dIh(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.m(16)
s=A.co.j(0.14)
r=B.I(A.co.j(0.5),A.q,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.f6n,h,h,h),B.d(w.b,h,h,h,h,h,h,O.a8z,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.kZ,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bo:A.f2,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.B(B.a([B.E(B.w(q,A.E,h,A.e,A.j,0,A.p),1),B.bH(D.fwO,i.gc6H(),B.bn(A.co,h,h,h,h,h,h,h,h,h,h,A.cc))],g),A.m,h,A.e,A.j,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,W.MG,D.buB,h,h,1/0))}u.push(B.E(B.cA(new C.dIi(i)),1))
if(f!=null){t=B.m(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.d(D.zm.h(0,r).a+": "+D.zm.h(0,r).e,h,h,h,h,h,h,A.rX,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A5.ai_,A.bT,h,h,1/0))}u=B.w(u,A.m,h,A.e,A.j,0,A.p)
t=B.a([],g)
for(s=D.zm.gdR(D.zm),s=s.gae(s);s.C();){r=s.gT(s)
q=new B.aQ(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.q,-1)
t.push(B.aB(h,B.p(h,B.w(B.a([B.W(p.b,o,h,h,h,20),A.bA,new B.y(p.a,h,D.aRi,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.P,0,A.p),A.f,h,h,new B.o(n,h,new B.bJ(m,m,m,m),new B.bk(q,q,q,q),h,h,A.n),h,h,h,A.fu,Ag.MB,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dIj(i,r),h,h,h,h,h,h,!1,A.a5))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dfC[l]
s.push(new C.j6(A.Oe,k.b,new C.dIk(i,k),A.co,h))}s.push(new C.j6(D.NS,"Clear",new C.dIl(i),A.cs,h))
r=B.a([],g)
for(j=0;q=$.bDF(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ea:A.lu
o=i.ay
n=i.cx.q(0,j)?A.bo:A.bH
r.push(new C.f4(q.a,o===j,new C.dIm(i,j),p,n,h))}return C.ow(A.co,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.w(B.a([new C.hn(t,"PARTS",h),new C.hn(s,"TRY",h),new C.hn(r,"TASKS",h)],g),A.m,h,A.e,A.P,0,A.p))}}
C.baX.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.X()
w=B.N()
w.r=D.acL.gp(0)
a7.b1(new B.a9(0,0,0+a5,0+a6),w)
v=B.N()
v.r=A.c.j(0.05).gp(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.L()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,B.L)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.abS(j,m.c)
f=q.h(0,l)===!0
l=$.X()
e=B.a([],p)
d=new B.aO(l.r,A.ao,a4,a4,e)
e.push(new B.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new B.pH(h+a0,i,l-a0,a1,l,a1))
if(f){l=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
l.b=A.ag
l.c=9
l.r=A.bH.j(0.28).gp(0)
l.z=G.pd
s=l.L()
l=d.gbE().a.snapshot()
w.drawPath((d.e=new B.cC(l)).a,s)
s.delete()}l=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
l.b=A.ag
l.c=3.2
l.d=A.bV
l.r=(f?A.dP:A.br).gp(0)
s=l.L()
l=d.e
w.drawPath((l==null?d.e=new B.cC(d.gbE().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ad(0,D.It)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new B.aO($.X().r,A.ao,a4,a4,B.a([],p))
w=a3.b
p.F(new B.b5(a6,w))
r=g.b
p.F(new B.pH(a6+a0,w,a5-a0,r,a5,r))
r=B.N()
r.b=A.ag
r.c=3
r.r=A.ad.gp(0)
a7.aS(p,r)}for(a5=new B.dt(o,o.r,o.e);a5.C();)this.c6J(a7,a5.d)},
c6J(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.zm.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.cj(a0.c,64,64)
s=B.bz(t,A.lg)
r=w.cy===v
q=s.eT(A.cz)
$.X()
p=B.N()
p.r=A.w.j(0.55).gp(0)
p.z=A.mI
d.aD(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.N()
p.sau(new B.c_(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.K],x.O),g,g).aA(0,B.bU(a0.c,52)))
d.af(q,52,p)}q=s.eT(A.cH)
p=B.N()
o=e.c
p.r=B.ar(o,A.w,0.65).gp(0)
d.aD(q,p)
n=u?0.35:0
q=B.N()
p=B.ar(o,A.c,0.1+n)
p.toString
m=B.ar(o,A.w,u?0.2:0.45)
m.toString
q.sau(new B.a8(A.b3,A.b6,A.x,B.a([p,m],x.O),g,g).aA(0,t))
d.aD(s,q)
q=B.N()
q.b=A.ag
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aD(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.uk:D.bJE}else l=e.b
k=C.fYq(B.l_(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a6(d,v.aF(0,new B.x(p/2,q.gbg(q)/2)))
j=C.fYq(e.a,10.5,A.c,g,g,A.H)
j.a6(d,a0.c.ad(0,new B.x(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.fYq(f,9,u?A.dP:A.bX,g,g,A.u)
i.a6(d,a0.c.ad(0,new B.x(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aZ4(d,w.abS(a0,h),o)
this.aZ4(d,a0.c.ad(0,D.It),o)},
aZ4(d,e,f){var w
$.X()
w=B.N()
w.r=D.acL.gp(0)
d.af(e,8.5,w)
w=B.N()
w.b=A.ag
w.c=2.2
w.r=f.gp(0)
d.af(e,8.5,w)
w=B.N()
w.r=A.c.gp(0)
d.af(e,3.2,w)},
aw(d){return!0}}
C.aLd.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.bwK.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bvd()}}
C.No.prototype={
U(){return new C.aD3(B.mH(0,null,null))}}
C.Kp.prototype={
a3(){return"_UnfoldStyle."+this.b}}
C.AB.prototype={}
C.aD3.prototype={
c6O(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.m(new C.dOd(w,e))},
c_R(){var w=this
w.e.t()
w.e=B.mH(w.f,null,null)
w.m(new C.dOc(w))},
t(){this.e.t()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.os(t,B.c4(v,A.bZ,t?new C.bqM(w.e,w.gc6N(w),new C.dOe(d),v):new C.aHf(u,new B.cx(u.b,x.gj)),v,!1,!1,v,!1),new C.dOf(w,u),x.K)}}
C.bsl.prototype={}
C.bqM.prototype={
aZ5(d,e){var w=null
return new B.D(I.Zv,B.w(B.a([B.d(d,w,w,w,w,w,w,D.f6Z,w,w,w),A.bA,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.j,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=B.B(B.a([B.aI(v,v,v,v,Q.nn,v,v,v,w.e,v,v,v,v,v,v),A.rQ,D.bAB],u),A.m,v,A.e,A.j,0,v,v),s=w.aZ5("STUDIOS","Play, make things, and keep what you make")
$.bDG()
return B.bm(!0,B.w(B.a([new B.D(D.bzD,t,v),B.E(B.vB(0,v,A.r,w.c,A.y,v,v,v,v,v,!1,v,A.af,!1,B.a([new B.md(s,v),new B.nU(A.hA,B.OZ(new B.ov(new C.eXz(d),9,!0,!0,!0,0,B.t4(),v),D.aPd),v),new B.md(w.aZ5("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.nU(D.buI,B.OZ(new B.ov(new C.eXA(w),6,!0,!0,!0,0,B.t4(),v),D.aPd),v)],u)),1)],u),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0)}}
C.aeM.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.m(20),n=B.m(20),m=B.ar(F.n5,p,0.3)
m.toString
w=x.O
m=B.a([m,D.afx],w)
v=B.I(p.j(0.6),A.q,1.2)
u=x.V
t=B.a([new B.ac(-4,A.G,p.j(0.22),A.J,14)],u)
s=B.ar(p,A.w,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ac(0,A.G,p.j(0.5),A.J,12)],u)
return B.aF(!1,A.a2,!0,r,B.aK(!1,o,!0,B.eF(B.w(B.a([B.p(r,B.W(q.c,A.c,r,r,r,24),A.f,r,r,new B.o(r,r,r,r,u,new B.a8(A.ax,A.aC,A.x,w,r,r),A.a4),r,44,r,r,r,r,r,44),A.N,B.d(q.a,r,2,A.a1,r,r,r,B.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cO,B.d(q.b,r,2,A.a1,r,r,r,B.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b7,A.j,0,A.p),r,new B.o(r,r,v,n,t,new B.a8(A.ax,A.aC,A.x,m,r,r),A.n),r,A.FV,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ah)}}
C.adE.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.m(20),g=B.m(20),f=B.ar(F.n5,A.d.gH(i),0.24)
f.toString
w=x.O
f=B.a([f,D.afx],w)
v=B.I(A.d.gH(i).j(0.35),A.q,1)
u=x.V
t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cz,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.aQ(6,6)
m=B.a([A.d.gH(i),A.d.gak(i)],w)
l=B.a([new B.ac(0,A.G,A.w.j(0.45),I.aHL,0)],u)
r.push(B.p(k,B.W(q[p],A.c,k,k,k,11),A.f,k,k,new B.o(k,k,k,new B.bk(n,n,n,n),l,new B.a8(A.a3,A.a8,A.x,m,k,k),A.n),k,17,k,new B.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.w(r,A.m,k,A.e,A.P,0,A.p)
u=B.ar(A.d.gH(i),A.d.gak(i),0.4)
u.toString
return B.aF(!1,A.a2,!0,k,B.aK(!1,h,!0,B.eF(B.w(B.a([new B.a7(58,k,w,k),A.R,B.d(j.b,k,2,A.a1,k,k,k,B.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.au,B.W(A.Cb,A.d.gH(i),k,k,k,18)],s),A.m,k,A.b7,A.j,0,A.p),k,new B.o(k,k,v,g,t,new B.a8(A.ax,A.aC,A.x,f,k,k),A.n),k,A.FV,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ah)}}
C.Q7.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gak(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,B.c0(j,new B.o(h,j,j,B.m(22),j,j,A.n),A.bf),j,j,2,2,8,j)
u=B.m(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.Sq,26),new B.ac(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.m(22)
p=B.ar(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gak(i)
i=B.ar(A.d.gak(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bS(0,B.c0(j,new B.o(j,j,j,j,j,new B.a8(A.ax,A.aC,A.x,B.a([p,o,n,i],m),D.dl_,j),A.n),A.bf),0,0,0),B.ao(j,B.c0(j,new B.o(j,j,j,j,j,new B.a8(A.b3,A.b6,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bf),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bS(0,B.b3(j,j,j,new C.brK(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.I(A.c.j(0.5),A.q,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.p(j,B.W(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a4),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.f8F,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.au,B.d(i,j,1,A.a1,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a7,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.TC)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.fR,B.B(B.a([s,A.er,B.E(B.w(p,A.E,j,A.e,A.P,0,A.p),1)],l),A.m,j,A.e,A.j,0,j,j),j))
i=k.x
if(i>0)m.push(B.bS(0,B.e2(B.el(j,A.w.j(A.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=B.m(22)
m.push(B.bS(0,B.e2(B.c0(j,new B.o(j,j,B.I(A.c.j(0.3),A.q,1.2),i,j,j,A.n),A.bf),!0,j),0,0,0))
return new B.a7(w,v,new B.an(A.V,j,A.aa,A.f,B.a([h,B.bS(0,B.c0(B.bv(q,new B.an(A.V,j,A.aa,A.r,m,j),A.aq),new B.o(j,j,j,u,r,j,A.n),A.bf),0,0,0)],l),j),j)}}
C.brK.prototype={
a6(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a9(r,-10,s,w)
u=d.a
J.bx(u.save())
u.translate(v.gbN().a,v.gbN().b)
d.jq(0,0.35)
t=B.cj(A.J,(w- -10)*1.6,s-r)
$.X()
s=B.N()
s.sau(new B.a8(A.a3,A.a8,A.x,B.a([A.K,A.c.j(0.3),A.K],x.O),null,null).aA(0,t))
d.b1(t,s)
u.restore()},
aw(d){return d.b!==this.b}}
C.brf.prototype={
B(d){var w=null,v=B.m(22),u=B.a([D.bii,D.aeK],x.O),t=this.e,s=B.I(A.d.gH(t).j(0.4),A.q,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.kj,24)],x.V),q=B.m(22),p=A.d.gH(t)
return new B.a7(this.c,this.d,B.c0(B.bv(q,B.b3(B.at(B.W(A.jM,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.b9F(p,w),A.az),A.aq),new B.o(w,w,s,v,r,new B.a8(A.ax,A.aC,A.x,u,w,w),A.n),A.bf),w)}}
C.b9F.prototype={
a6(d,e){var w,v,u,t,s,r,q,p
$.X()
w=B.N()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.L()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.L()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ef(A.J)
$.X()
t=B.N()
t.b=A.ag
t.c=1.4
t.r=v.j(0.35).gp(0)
d.af(u,30,t)},
aw(d){return!1}}
C.aHf.prototype={
U(){return new C.aHg(new B.cw(null,x.z),null,null)}}
C.aHg.prototype={
gu2(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,D.bs4,null,1,null,v)
w.cL(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gZz(){var w,v=this,u=v.e
if(u===$){w=B.bl(null,A.fP,null,1,null,v)
w.fk(0,!0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
gawZ(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc6L(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaVx(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaWf(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb6E(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a1()
var w=this.gu2()
w.de()
w.dV$.M(0,this.gcw5())},
cw6(){var w,v,u,t,s,r,q,p=this,o=p.gu2().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gawZ().a){case 0:w=D.nq
break
case 1:w=D.uu
break
case 2:w=D.a2X
break
case 3:w=D.nq
break
case 4:w=D.d8a
break
case 5:w=D.uu
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.aar)r=0.09
else r=s===D.aas?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dX(260+90*v,"",260,1.6,0.18,"tri")
u=D.c1E[v]
C.pZ("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.IU("bell",D.car,1400,0.35)}}p.ax=o},
t(){this.gu2().t()
this.gZz().t()
this.bwY()},
adS(){var w=this
w.gu2().cVo(0,B.dE(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new C.eXf(w))},
ch7(){this.gu2().bR(0)
this.m(new C.eXe(this))},
adR(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$adR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaWf(),s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
l.push(new B.aq(new B.ba(q,A.b4,A.aN),$.ax()))}m=B.a([],m)
for(t=u.gb6E(),s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){p=t[r]
m.push(new B.aq(new B.ba(p,A.b4,A.aN),$.ax()))}o=B.C(u.gaVx(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bR(F.n5,null,new C.eXd(u,l,m,o),t,!0,!0,!0,A.lE,!1,!1,x.H),$async$adR)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.S$=$.ax()
n.P$=0}return B.h(null,v)}})
return B.i($async$adR,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gawZ(),f=i.a.c,e=f.b,d=i.gc6L(),a0=new C.AB(g,e,f.c,d,i.gaVx(),i.gaWf(),i.gb6E())
f=B.ar(A.d.gH(d),A.d.gak(d),0.4)
f.toString
g=x.p
w=B.a([B.aI(h,h,h,h,B.W(i.at?A.um:P.Cd,A.ad,h,h,h,21),h,h,h,new C.eXn(i),h,h,h,h,"Sound",h),B.aI(h,h,h,h,D.bTk,h,h,h,i.gc6M(),h,h,h,h,"Edit words and pictures",h),B.aI(h,h,h,h,D.qf,h,h,h,new C.eXo(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c7(i.gZz(),new C.eXp(i,a0),h),B.cA(new C.eXq(i,a0))],g)
u=i.as
t=u?i.gch6():i.gc6P()
u=u?D.bIZ:A.uf
s=B.ar(A.d.gH(d),A.d.gak(d),0.4)
s.toString
t=B.B(B.a([B.aI(h,h,h,h,B.W(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cc),B.E(B.c7(i.gu2(),new C.eXr(i,a1,a0),h),1),B.aI(h,h,h,h,D.bPF,h,h,h,new C.eXs(i),h,h,h,h,"Replay",A.cc)],g),A.m,h,A.e,A.j,0,h,h)
s=i.Q
u=A.k.ab(s,1)
r=B.ar(A.d.gH(d),A.d.gak(d),0.4)
r.toString
s=C.lO(r,u+"x","Speed",2.5,0.4,new C.eXt(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.did[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gH(d),A.d.gak(d),0.4)
r.toString
u.push(new C.f4(p.b,o===p.a,new C.eXu(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.c21[q]
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}m=A.d.gH(o).A(0,A.d.gH(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}l=A.d.gH(o).A(0,A.d.gH(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}k=A.d.gH(o).A(0,A.d.gH(n))?A.c:A.aZ
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}j=new B.ay(k,A.d.gH(o).A(0,A.d.gH(n))?2.5:1,A.q,-1)
d.push(B.aB(h,B.p(h,h,A.f,h,h,new B.o(h,h,new B.bJ(j,j,j,j),h,h,new B.a8(A.ax,A.aC,A.x,n,h,h),A.a4),h,l,h,D.ahK,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eXv(i,n),h,h,h,h,h,h,!1,A.a5))}return C.ow(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.eJ(new B.an(A.V,h,A.b2,A.r,v,h),i.f),e,B.w(B.a([t,s,new C.hn(u,"STYLE",h),new C.hn(d,"THEME",h)],g),A.m,h,A.e,A.P,0,A.p))},
bz_(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nq[r]
p=A.k.D((1-A.ev.av(0,A.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.D(p/1.5707963267948966,0,1)
q=D.nq[r]
n=q+0.12
m=A.k.D((a0-n)/(q+0.2-n),0,1)
n=D.nq[r]
q=n-0.01
q=A.k.D((a0-q)/(n+0.03-q),0,1)
n=B.dk()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.kc(p)
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
e.push(new B.cM(0,r*118,0,f,f,f,new B.kH(q,new B.iI(n,f,A.b3,!0,f,new C.Q7(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nq[r]
u=v-0.02
g=A.k.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.nq[r]
t=v+0.12
e.push(new B.cM(0,r*118-3-2,0,f,f,4,new B.mp(new C.bqo(u,g,1-A.k.D((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a7(a2,358,new B.an(A.V,f,A.aa,A.f,e,f),f)},
bPD(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.uu[r]
p=A.pT.av(0,A.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.uu[r]
m=q+0.15
l=A.k.D((a0-m)/(q+0.25-m),0,1)
m=D.uu[r]
q=m-0.03
q=A.k.D((a0-q)/(m+0.01-q),0,1)
m=B.dk()
k=m.a
k.$flags&2&&B.aj(k)
k[11]=0.0011
m.jT(n,n,n,1)
m.fz(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.Q7(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dk()
k.fz(3.141592653589793)
k=new B.iI(k,f,A.A,!0,f,new C.brf(a2,108,w,f),f)}e.push(new B.cM(0,r*130,0,f,f,f,new B.kH(q,new B.iI(m,f,A.A,!0,f,k,f),f),f))}return new B.a7(a2,378,new B.an(A.V,f,A.aa,A.f,e,f),f)},
cB4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a2X[w]
l.push(A.ct.av(0,A.k.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bS(0,B.b3(n,n,n,new C.btP(d.d,l,D.awl,m,C.bqL(e,0.4,0.62),f,C.bqL(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.fYW(g,w)
q=D.awl[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cM(r,s-q*m*p+12,n,n,t,n,new B.kH(o,B.W(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.fYW(g,w)
r=D.a2X[w]
q=r+0.15
v.push(new B.cM(s,l,n,n,t,n,new B.kH(A.k.D((e-q)/(r+0.25-q),0,1),new B.y(u[w],n,A.Ul,n,A.L,n,n,n,n,n,n,n),n),n))}return new B.a7(g,m+90,new B.an(A.V,n,A.aa,A.f,v,n),n)},
bFd(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.ct.av(0,C.bqL(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bS(0,B.at(B.dU(B.b3(f,f,f,new C.bpQ(A.d.gH(a1),C.bqL(a3,0,0.2),a4,f),new B.as(a5*0.95,70)),D.e9k),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.D((a3-l)/(0.12+m-l),0,1)
j=A.dz.av(0,A.k.D((o-0.7)/0.3,0,1))
l=B.dk()
m=l.a
m.$flags&2&&B.aj(m)
m[11]=0.001
l.fz(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jT(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.E(r,1):-1
w.push(new B.z(o,new B.cM(0,0,0,0,f,f,new B.cm(A.A,f,f,new B.kH(k*(0.45+0.55*o),B.dU(new B.iI(l,f,A.A,!0,f,new C.Q7(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.x(n*a5*0.34,-o*18)),f),f),f)))}A.d.aW(w,new C.eX6())
A.d.v(a0,new B.M(w,new C.eX7(),x.fR))
return new B.a7(a5,330,new B.an(A.V,f,A.aa,A.f,a0,f),f)},
bEo(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.uu[q]
o=A.k.D((a2-p)/(p+0.22-p),0,1)
n=A.lO.av(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.uu[q]
m=A.k.D((a2-m)/(m+0.02-m),0,1)
l=D.ayo[q]
k=B.dk()
k.mK(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jT(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.uu[q]
g=h+0.1
g=A.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cM(0,0,0,0,e,e,new B.cm(A.A,e,e,new B.kH(m,B.dU(new B.iI(k,e,A.A,!0,e,new C.Q7(d,92,w,p,j,i,0,g*s,h,e),e),new B.x(0,l)),e),e),e))
l=D.uu[q]
h=l+0.02
f=A.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cM(0,0,0,0,e,e,new B.cm(A.A,e,e,B.dU(new B.mp(new C.baj(w,f,q,e),e,new B.as(r,212),e,e),new B.x(0,D.ayo[q])),e),e))}return new B.a7(a4,330,new B.an(A.V,e,A.aa,A.f,a0,e),e)},
bBV(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.x(-b0,-150),new B.x(b0,-40),D.e9o],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nq[r]
p=A.k.D((a8-q)/(q+0.2-q),0,1)
o=A.ct.av(0,p)
q=D.ayx[r]
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
f=B.dk()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.mK(l*h+D.dcc[r]*o)
f.fz(l*0.9)
h=0.55+0.45*o
f.jT(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cM(0,0,0,0,a3,a3,new B.cm(A.A,a3,a3,new B.kH(g,B.dU(new B.iI(f,a3,A.A,!0,a3,new C.Q7(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.x(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nq[r]
i=q+0.17
a2=A.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.ayx[r]
a6.push(new B.cM(0,0,0,0,a3,a3,new B.cm(A.A,a3,a3,B.dU(new B.mp(new C.bpS(A.d.gH(w),a2,a3),a3,new B.as(a4,30),a3,a3),new B.x(0,q+48-4)),a3),a3))}}return new B.a7(b0,330,new B.an(A.V,a3,A.aa,A.f,a6,a3),a3)}}
C.bqo.prototype={
a6(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a9(w-v,0,w+v,e.b)
q=B.bz(u,A.hd)
$.X()
t=B.N()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=G.pd
d.aD(q,t)
t=B.bz(u,A.hd)
q=B.N()
q.r=A.c.j(s).gp(0)
d.aD(t,q)},
aw(d){return d.c!==this.c||d.d!==this.d}}
C.bpQ.prototype={
a6(d,e){var w,v,u=this.c,t=B.cj(e.ef(A.J),e.b*u,e.a*u)
$.X()
u=B.N()
u.b=A.ag
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=X.HW
d.hI(t,u)
u=B.N()
u.b=A.ag
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hI(t,u)
u=t.cs(-14)
v=B.N()
v.b=A.ag
v.c=1
v.r=w.j(0.3).gp(0)
d.hI(u,v)},
aw(d){return!0}}
C.baj.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ef(A.J),f=this.c,e=A.ct.av(0,f)
$.X()
w=B.N()
w.b=A.ag
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.af(g,40+e*a0.a*0.42,w)
t=new B.ez()
t.dr(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.am()*3.141592653589793*2
n=(40+t.am()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.am()
j=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
i=(p&1)===0?A.d.gH(u):A.c
j.r=i.j(A.k.D(v,0,1)).gp(0)
h=j.L()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
aw(d){return!0}}
C.bpS.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ef(A.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=B.cj(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.X()
o=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
o.b=A.ag
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.L()
t.drawOval(B.bW(p),n)
n.delete()}},
aw(d){return d.c!==this.c}}
C.btP.prototype={
a6(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new B.a9(0,d0,0+c5,d0+60)
$.X()
d0=B.N()
w=c1.b
v=x.O
d0.sau(new B.a8(A.b3,A.b6,A.x,B.a([A.d.gH(w).j(0.18),A.K],v),c2,c2).aA(0,d1))
d2.b1(d1,d0)
d0=B.N()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bL(new B.x(0,c4),new B.x(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=C.fYW(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.X()
a3=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.mI
a4=a3.L()
t.drawOval(B.bW(new B.a9(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new B.a9(d,a1,a3,a1+a0)
a6=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a7=B.ar(A.d.gH(w),A.c,0.1)
a7.toString
a6.sau(new B.a8(A.b3,A.b6,A.x,B.a([a7,A.d.gak(w)],v),c2,c2).aA(0,a5))
a4=a6.L()
t.drawRect(B.bW(a5),a4)
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
a6=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a6.r=B.ar(A.d.gak(w),A.w,0.5).gp(0)
a4=a6.L()
a6=a8.gbE().a.snapshot()
t.drawPath((a8.e=new B.cC(a6)).a,a4)
a4.delete()
a6=B.a([],n)
b0=new B.aO(a2,A.ao,c2,c2,a6)
a6.push(new B.b5(d,a1))
a6.push(new B.ap(d+c8,a9))
a6.push(new B.ap(a7,a9))
a6.push(new B.ap(a3,a1))
a6.push(new B.bE())
a2=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a2.r=B.ar(A.d.gH(w),A.c,0.45).gp(0)
a4=a2.L()
a2=b0.gbE().a.snapshot()
t.drawPath((b0.e=new B.cC(a2)).a,a4)
a4.delete()
b1=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
b1.b=A.ag
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.L()
t.drawRect(B.bW(a5),a4)
a4.delete()
a4=b1.L()
a2=a8.e
t.drawPath((a2==null?a8.e=new B.cC(a8.gbE().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.L()
a2=b0.e
t.drawPath((a2==null?b0.e=new B.cC(b0.gbE().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bm(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=B.bz(new B.a9(b7,a7,b7+r,b5),A.hd)
$.X()
b9=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.L()
t.drawRRect(B.eU(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new B.a9(d,a1,a3,a1+28)
J.bx(t.save())
t.clipRect(B.bW(a5),$.n9()[1],!0)
$.X()
a1=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a1.sau(new B.a8(A.b3,A.b6,A.x,B.a([A.K,A.c.j(0.4),A.K],v),c2,c2).aA(0,c0))
a4=a1.L()
t.drawRect(B.bW(c0),a4)
a4.delete()
t.restore()}}},
aw(d){return!0}}
C.aMP.prototype={
aX(){this.b6()
this.b5()
this.dL()},
t(){var w=this,v=w.b4$
if(v!=null)v.a5(0,w.gdH())
w.b4$=null
w.a2()}}
C.a0e.prototype={
a3(){return"_Role."+this.b}}
C.q9.prototype={}
C.qQ.prototype={}
C.Cp.prototype={}
C.Zc.prototype={}
C.aeC.prototype={}
C.a0r.prototype={
gY(d){return this.d}}
C.Cz.prototype={}
C.abz.prototype={}
C.abP.prototype={}
C.adI.prototype={}
C.bgM.prototype={
a2F(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dX(d,"",e,g,h,f)},
b7I(d,e,f){return this.a2F(d,e,f,0,0.55)},
aBs(d,e,f,g){return this.a2F(d,e,f,0,g)},
b7J(d,e,f,g){return this.a2F(d,e,f,g,0.55)},
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
ajQ(d,e,f,g){var w="n"+this.ay++,v=new C.qQ(w,e,f,g)
this.a.n(0,w,v)
this.aT()
return v},
B9(d,e,f){return this.ajQ(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bs(w.b,new C.diV(e))
A.d.bs(w.c,new C.diW(e))
w.aT()},
bbw(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mH.h(0,v.b).c===D.x7)return!1
w=this.b
if(A.d.b3(w,new C.diS(d,e)))return!1
w.push(new C.Cp(d,e))
this.aT()
return!0},
bZO(d){var w
if(d.b==="beat")return D.caB[A.o.E(d.d,4)]
w=this.at
switch(A.o.E(d.d,3)){case 1:return 350+w.ar(500)
case 2:return 1400+w.ar(2200)
default:return 450+w.ar(2000)}},
aF_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.E(w,6)
t=D.ayN[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Cz(u,t,j.ax,90))
w.push(new C.Cz(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.am()*3.141592653589793*2
v.push(new C.a0r(u,new B.x(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b7I(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.E(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.am()*3.141592653589793*2
p=100+w.am()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.am()*0.5)
m.toString
v.push(new C.a0r(u,new B.x(o*p,n*p),m,3+w.am()*4.5,1000+w.ar(700),j.ax))}j.f.push(new C.Cz(u,t,j.ax,120))
j.aBs(120,200,"noise",0.5)
j.b7I(261.63*Math.pow(2,([7,12,16,19][w.ar(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Cz(u,t,j.ax,230))
w.push(new C.Cz(u,t,j.ax+160,160))
w.push(new C.Cz(u,t,j.ax+320,100))
j.b7J(180+j.at.ar(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.abz(u,new B.x((w.am()-0.5)*220,-260-w.am()*180),t,j.ax))
j.b7J(300+w.ar(300),110,h,0.8)
break
case"comet":w=j.at
q=w.am()*3.141592653589793*2
j.w.push(new C.abP(u,u.ad(0,new B.x(Math.cos(q),Math.sin(q)).aI(0,260+w.am()*200)),t,j.ax))
j.a2F(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fG()
j.a2F(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.adI(u,D.aya[v],t,j.ax))
j.aBs(261.63*Math.pow(2,([0,5,9,12][j.at.ar(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aBs(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.c6H[A.o.E(w,3)]
for(k=1;k<=3;++k)j.crb(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.f5(w,new C.diT(d));v.C();)j.azZ(w.gT(0),j.ax+D.cj2[A.o.E(g.d,4)])
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
case"chance":s=j.at.ar(100)<D.cA4[A.o.E(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.f5(w,new C.diU(d));v.C();)j.azZ(w.gT(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.zj(w,0,v-700)},
crb(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.Zc(e,"~"+d))},
azZ(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.aeC(d.a,v,e,w))
u.push(new C.Zc(w,v))},
a6o(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a5(w).k("bc<2>")
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
else if(o.ax>=q){o.aF_(r)
u.n(0,r,o.ax+o.bZO(s))}}w=o.c
v=B.S(w).k("Z<1>")
q=B.C(new B.Z(w,new C.diX(o),v),v.k("J.E"))
if(q.length!==0){A.d.bs(w,new C.diY(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.L)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b2(u,1)
for(u=A.d.gae(v),r=new B.f5(u,new C.diZ(p));r.C();)o.azZ(u.gT(0),o.ax)}else o.aF_(u)}}A.d.bs(o.d,new C.dj_(o))
A.d.bs(o.e,new C.dj0(o))
A.d.bs(o.f,new C.dj1(o))
A.d.bs(o.w,new C.dj2(o))
A.d.bs(o.x,new C.dj3(o))
A.d.bs(o.r,new C.dj4(o))
o.aT()},
va(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
for(v=this.a,v=new B.dt(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.G(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.S.ao(B.G(["nodes",m,"edges",v],u,x.ew),null)},
Ty(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.S.aM(0,d,null))
k.a8(0)
for(o=x.j,n=J.aW(o.a(J.r(w,"nodes"))),m=k.a;n.C();){v=n.gT(n)
u=B.u(J.r(v,"k"))
if(!D.mH.ai(0,u))continue
t=B.u(J.r(v,"id"))
m.n(0,t,new C.qQ(t,u,new B.x(B.e5(J.r(v,"x"))*k.cy.a,B.e5(J.r(v,"y"))*k.cy.b),A.k.O(B.e5(J.r(v,"p")))))
s=B.c8(B.aM(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aW(o.a(J.r(w,"edges"))),n=k.b;o.C();){r=o.gT(o)
q=B.u(J.r(r,0))
p=B.u(J.r(r,1))
if(m.ai(0,q)&&m.ai(0,p))n.push(new C.Cp(q,p))}k.aT()
return!0}catch(l){return!1}},
cQ7(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.qQ(n,r,new B.x(q*p.a,o*p.b),s))
l.aT()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bbw(w[m.a],w[m.b])}},
gY(d){return this.cy}}
C.FR.prototype={}
C.VQ.prototype={
U(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aEe(new C.bgM(B.U(w,x.f3),v,u,t,s,r,q,p,o,B.U(w,n),B.U(w,n),B.U(w,n),B.U(w,n),A.cW,A.K,A.az,$.ax()),A.bE,A.J,A.J,A.U,null,null)}}
C.aEe.prototype={
acp(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$acp=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.az(),$async$acp)
case 6:q=n.jK(m.r(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.emC(s))
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
return B.i($async$acp,v)},
a9n(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$a9n=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.emr(s))
u=3
w=6
return B.b(B.az(),$async$a9n)
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
return B.i($async$a9n,v)},
bL8(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a5(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new B.bc(n,w).cM(0,0,new C.emt())+"|"+A.d.cM(o,0,new C.emu())
if(v===p.ch)return p.CW
u=new C.emx()
t=x.s
s=B.a([],t)
r=new C.emy(p,s,u)
for(n=new B.bc(n,w).gae(0),w=new B.f5(n,new C.emv());w.C();){q=n.gT(0)
if(!A.d.b3(o,new C.emw(q)))s.push(B.u(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.d0(s,0,B.dB(5,"count",x.S),x.N).dB(0)},
a_(){var w,v=this
v.a1()
v.acp()
v.d.db=v.ay
w=v.wr(new C.en1(v))
w.hQ(0)
v.e!==$&&B.aP()
v.e=w},
t(){var w=this,v=w.as
if(v!=null)v.a4(0)
v=w.e
v===$&&B.c()
v.t()
v=w.d
v.S$=$.ax()
v.P$=0
w.bvZ()},
abW(d){return this.bZg(d)},
bZg(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$abW=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.az(),$async$abW)
case 6:q=m.aU(l.r(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Ty(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aWG(A.d.gH(D.axB))
if(s.c!=null)s.m(new C.emB())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$abW,v)},
aWG(d){this.d.cQ7(0,d.c,d.d)
this.Eg()},
Eg(){var w=this.as
if(w!=null)w.a4(0)
this.as=B.cL(A.lW,new C.emn(this))},
ax_(d){var w,v,u,t,s=this.d.a,r=B.a5(s).k("bc<2>")
s=B.C(new B.bc(s,r),r.k("J.E"))
r=B.S(s).k("dx<1>")
s=new B.dx(s,r)
s=new B.bQ(s,s.gK(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cf5(d){var w,v,u,t,s,r=this.d.a,q=B.a5(r).k("bc<2>")
r=B.C(new B.bc(r,q),q.k("J.E"))
q=B.S(r).k("dx<1>")
r=new B.dx(r,q)
r=new B.bQ(r,r.gK(0),q.k("bQ<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bZ4(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dt(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mH.h(0,r.b).c===D.x7)continue
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
c6S(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hlP(new B.x(n.a+36,n.b+0),new B.x(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cyT(d){var w,v,u,t,s,r,q=this,p=q.ax_(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f_()
u=v.b
if(u==="button"){w.aF_(p)
return}if(q.r)return
t=D.mH.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qH)s=6
else s=1
v.d=A.o.E(v.d+1,s)
w.aT()
q.Eg()
return}if(q.r)return
r=q.c6S(d)
if(r!=null){w=q.d
A.d.cG(w.b,r)
w.aT()
q.Eg()}},
cgo(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cf5(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.ax_(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aF(0,d)}},
cgp(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aT()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.x(A.k.D(d.a+s.y.a,46,t.a-46),A.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aT()}}},
b0I(){var w,v,u=this
if(u.z!=null){w=u.bZ4(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bbw(v,w)}else v=!1
if(v){B.ko()
u.Eg()}u.z=null
u.d.aT()}else if(u.x!=null){if(u.at)u.Eg()
u.x=null}},
acC(d){return this.c10(d)},
c10(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$acC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.ax_(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jB()
p=t.c
p.toString
w=3
return B.b(B.bR(F.n5,null,new C.emE(q),p,!0,!0,!1,A.lE,!1,!1,x.y),$async$acC)
case 3:if(f===!0){r.W(0,s)
t.Eg()}case 1:return B.h(u,v)}})
return B.i($async$acC,v)},
c6Q(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.B9(0,d,new B.x(v.a*(0.25+u.am()*0.5),v.b*(0.2+u.am()*0.55)))
B.f_()
this.Eg()},
agj(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bR(F.n5,null,new C.emG(),s,!0,!0,!0,A.lE,!1,!1,x.es),$async$agj)
case 2:t=e
if(t!=null)u.aWG(t)
return B.h(null,v)}})
return B.i($async$agj,v)},
adT(d){var w=0,v=B.j(x.H),u=this,t
var $async$adT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cd(null,null,!0,null,new C.emq(),t,null,!0,!0,x.y),$async$adT)
case 2:if(f===!0){u.d.a8(0)
u.Eg()}return B.h(null,v)}})
return B.i($async$adT,v)},
B(d){var w=this,v=null,u=B.a([B.ai2(w.r?new B.bK(A.a3,v,v,new B.D(A.FW,B.ho(D.bNC,D.fpB,new C.en_(w),v),v),v):w.c6T(),A.b8,A.iM),B.E(B.cA(new C.en0(w)),1)],x.p)
if(!w.r)u.push(w.ctF())
return B.c4(v,A.bZ,B.bm(!0,B.w(u,A.m,v,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0),v,!1,!1,v,v)},
bGT(){var w=null,v=new C.ems(),u=A.w.j(0.7),t=B.m(26),s=B.I(A.bu.j(0.5),A.q,1)
return B.bS(0,B.el(B.at(B.p(w,B.cc(B.w(B.a([D.fAO,A.au,D.fIs,A.aA,v.$4(A.p1,A.bu,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Z.C7,A.co,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.l3,A.c6,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.alE,A.bH,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fHL,new B.bK(A.a8,w,w,B.bM(!1,D.fxY,w,w,!0,w,w,this.gbGM(),w,w),w)],x.p),A.E,w,A.e,A.P,0,A.p),A.r,w,A.y,w,w,w,w,A.af),A.f,w,A.VW,new B.o(F.n5,w,s,t,w,w,A.n),w,w,w,A.fa,A5.aiX,w,w,w),w,w,w),u,!0),0,0,0)},
c6T(){var w=this,v=null,u=B.aI(v,v,v,v,Q.nn,v,v,v,new C.emM(w),v,v,v,v,v,v),t=w.a8Q(A.O3,"How it works",new C.emN(w),!0),s=w.ay?A.um:P.Cd
return new B.D(D.byR,B.B(B.a([u,D.bAn,t,w.a8Q(s,"Sound",new C.emO(w),!0),w.a8Q(A.e2,"Ideas",w.gck8(),!0),w.a8Q(D.NS,"Clear",w.gc6R(w),!0),w.aND(A.is,"Show",new C.emP(w),!0,!0)],x.p),A.m,v,A.e,A.j,0,v,v),v)},
aND(d,e,f,g,h){var w=null,v=h?A.bu:A.c.j(0.08),u=B.m(14),t=B.m(14),s=B.a([B.W(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Aa.vT,B.aF(!1,A.a2,!0,u,B.aK(!1,t,!0,B.hp(new B.D(new B.Q(8,8,8,8),B.B(s,A.m,w,A.e,A.P,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ah),w)},
a8Q(d,e,f,g){return this.aND(d,e,f,g,!1)},
ctF(){var w=null,v=new C.emI(this),u=A.c.j(0.08)
return B.p(w,B.cc(B.B(B.a([v.$2("START",D.x7),v.$2("CHANGE",D.E9),v.$2("REACT",D.qH)],x.p),A.E,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aM),A.f,w,w,new B.o(F.AX,w,new B.bJ(new B.ay(u,1,A.q,-1),A.X,A.X,A.X),w,w,w,A.n),w,w,w,w,D.bu_,w,w,w)},
ctG(d){var w,v,u,t,s=null,r=D.mH.h(0,d)
r.toString
w=B.m(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.I(v.j(0.5),A.q,1)
return new B.D(A.fu,B.aB(s,B.p(s,B.w(B.a([B.W(r.b,v,s,s,s,22),A.cO,B.d(r.a,s,1,A.a1,s,s,s,D.aRi,s,s,s)],x.p),A.m,s,A.e,A.P,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a8(A.b3,A.b6,A.x,u,s,s),A.n),s,s,s,s,A.hz,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.emH(this,d),s,s,s,s,s,s,!1,A.a5),s)}}
C.bgN.prototype={
a6(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bx(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.X()
u=B.N()
u.r=A.c.j(0.05).gp(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.L()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.X()
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
e=$.X()
d=B.a([],o)
a0=new B.aO(e.r,A.ao,b4,b4,d)
d.push(new B.b5(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new B.pH(h+a1,i,f-a1,g,f,g))
a2=D.mH.h(0,k.b).d
a3=D.mH.h(0,j.b).d
e=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
e.b=A.ag
e.c=3
e.d=A.bV
d=B.a([a2.j(0.55),a3.j(0.55)],p)
g=B.rC(new B.x(h,i),new B.x(f,g))
e.sau(new B.a8(A.a3,A.a8,A.x,d,b4,b4).aA(0,new B.a9(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.L()
i=a0.gbE().a.snapshot()
b7.drawPath((a0.e=new B.cC(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=C.hlP(new B.x(i.a+36,i.b+0),new B.x(h.a-36,h.b),a5)
$.X()
h=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
h.r=A.c.j(0.35).gp(0)
h.z=G.pd
q=h.L()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
g.r=A.c.gp(0)
q=g.L()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ad(0,D.It)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new B.aO($.X().r,A.ao,b4,b4,B.a([],o))
o=a8.b
a0.F(new B.b5(t,o))
i=a9.b
a0.F(new B.pH(t+a1,o,w-a1,i,w,i))
i=B.N()
i.b=A.ag
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
i=A.dY.av(0,v)
$.X()
h=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
h.b=A.ag
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gp(0)
q=h.L()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){b1=w[m]
v=A.k.D((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=B.ks(o,i,A.dY.av(0,v))
h.toString
i=B.ks(o,i,A.dY.av(0,A.k.D(v-0.35,0,1)))
i.toString
$.X()
o=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
o.c=5
o.d=A.bV
g=b1.c
f=B.a([g.j(0),g],p)
e=B.rC(i,h)
o.sau(new B.a8(A.a3,A.a8,A.x,f,b4,b4).aA(0,new B.a9(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.L()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
i.r=A.c.gp(0)
q=i.L()
b7.drawCircle(o,h,6,q)
q.delete()
i=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
i.r=g.j(0.5*(1-v)).gp(0)
i.z=A.lC
q=i.L()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){a4=w[m]
v=A.k.D((b6-a4.f)/a4.e,0,1)
o=a4.a
$.X()
i=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
i.r=a4.c.j(1-v).gp(0)
q=i.L()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,B.L)(w),++m){j=w[m]
o=j.a
$.X()
i=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.lC
q=i.L()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
i.sau(new B.c_(V.xa,0.5,A.x,b4,0,B.a([A.c,h],p),b4,b4).aA(0,B.bU(j.a,8)))
q=i.L()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,B.L)(b5),++m){a6=b5[m]
v=A.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=C.bgO(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a6(b8,new B.x(t.a-o/2,t.b-(40+60*v+p.gbg(p)/2)))}for(b5=new B.dt(n,n.r,n.e);b5.C();)b3.cfX(b8,b5.d,b6)
b7.restore()},
cfX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mH.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.D(1-(f-w)/520,0,1)
u=B.cj(e.c,64,64)
t=B.bz(u,A.iz)
s=t.eT(A.cz)
$.X()
r=B.N()
r.r=A.w.j(0.55).gp(0)
r.z=A.mI
d.aD(s,r)
if(v>0){s=t.cs(6)
r=B.N()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.zo
d.aD(s,r)}s=t.eT(A.cH)
r=B.N()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.aD(s,r)
r=B.N()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sau(new B.a8(A.b3,A.b6,A.x,B.a([s,p],x.O),j,j).aA(0,u))
d.aD(t,r)
r=B.N()
r.b=A.ag
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aD(t,r)
r=h.b
p=e.c
o=C.bgO(B.l_(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a6(d,p.aF(0,new B.x(s/2,r.gbg(r)/2)))
n=C.bgO(h.a,11,A.c,j,j,A.H)
n.a6(d,e.c.ad(0,new B.x(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.E(e.d,r)]
else m=i==="pop"?D.aya[A.o.E(e.d,6)]:j
h=h.c
if(h===D.qH){s=e.c.ad(0,new B.x(0,62))
r=B.N()
r.r=D.ayN[A.o.E(e.d,6)].gp(0)
d.af(s,5,r)}else if(m!=null){l=C.bgO(m,9.5,A.aB,j,j,A.O)
l.a6(d,e.c.ad(0,new B.x(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bgO(m,9.5,A.aB,j,j,A.O)
l.a6(d,e.c.ad(0,new B.x(-l.b.c/2,54)))}if(k.c)return
if(h!==D.x7)k.b1w(d,e.c.aF(0,D.It),q)
k.b1w(d,e.c.ad(0,D.It),q)},
b1w(d,e,f){var w
$.X()
w=B.N()
w.r=A.bZ.gp(0)
d.af(e,9,w)
w=B.N()
w.b=A.ag
w.c=2.2
w.r=f.gp(0)
d.af(e,9,w)
w=B.N()
w.r=A.c.gp(0)
d.af(e,3.5,w)},
aw(d){return!0}}
C.aLX.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.bla.prototype={}
C.PZ.prototype={
gY(d){return this.d}}
C.W4.prototype={
U(){var w=B.a([],x.g4),v=B.a([],x.ed)
return new C.bkh(new B.cw(null,x.z),w,v,A.cW,A.bE,D.LH,null,null)}}
C.bkh.prototype={
b_e(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.D(A.k.bm((1-d.b/(B.aH(w,null,x.l).w.a.b*0.7))*10),0,9)
u=D.d0e[A.o.E(v,5)]+12*A.o.an(v,5)+12
switch(t.z){case"glow":C.pZ("synth",u,420,0.3)
break
case"rainbow":C.pZ("bell",u,700,0.35)
break
case"stars":C.pZ("pluck",u+12,400,0.4)
break
case"sparks":E.dX(2400+t.r.ar(2000),"",60,0,0.18,"noise")
break
default:E.dX(110+t.r.ar(60),"",140,0,0.22,"noise")}},
c9G(d){return this.b_e(d,!1)},
a_(){var w,v=this
v.a1()
w=v.wr(new C.eyI(v))
w.hQ(0)
v.w!==$&&B.aP()
v.w=w},
t(){var w=this.w
w===$&&B.c()
w.t()
this.bw7()},
gb11(){var w=this.Q
return w<0?new M.vL(1,A.k.E(this.y*0.18,360),0.85,1).m_():D.R7[w]},
aS1(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb11(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.am()*3.141592653589793*2
switch(l.z){case"fire":q=v.am()
p=l.as
o=v.am()
n=v.am()
m=B.ar(A.bH,A.aw,v.am())
m.toString
j.push(new C.PZ(new B.x(u+(q-0.5)*p,t),new B.x((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.am()*0.4),l.y,700+v.ar(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.am()*200
n=B.ar(k,A.c,v.am()*0.6)
n.toString
j.push(new C.PZ(d,new B.x(q*o,p*o),n,1.5+v.am()*3,l.y,600+v.ar(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.am()*40
j.push(new C.PZ(d,new B.x(q*o,p*o),k,1.2+v.am()*1.8,l.y,500))}}},
aZ7(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb11()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=B.a([],x.g)
r.ax=new C.bla(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aS1(e)
r.b_e(e,!0)
r.m(new C.eyj())},
aZ6(){this.ax=null
this.m(new C.eyi())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([B.aI(n,n,n,n,D.qf,n,n,n,new C.eys(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=B.a([B.b3(n,n,n,new C.brF(k,o.f,o.y,o.at,n),A.az)],m)
if(!o.ay&&k.length===0)j.push(D.b77)
k=B.aB(A.ch,new B.an(A.V,n,A.b2,A.r,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eyt(o),new C.eyu(o),new C.eyy(o),n,n,n,n,n,n,n,n,n,new C.eyz(o),new C.eyA(o),n,n,n,!1,A.a5)
j=B.a([],m)
for(w=0;w<5;++w){v=D.cYp[w]
j.push(new C.f4(v.b,o.z===v.a,new C.eyB(o,v),v.c,A.c6,n))}u=B.a([new C.Fg(A.c,o.Q<0,new C.eyC(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new C.Fg(D.R7[t],o.Q===t,new C.eyD(o,t),!1,n))
s=o.as
s=C.lO(A.c6,A.o.u(A.k.V(s)),"Size",36,4,new C.eyE(o),s)
r=o.ch
q=r?A.um:P.Cd
q=B.a([new C.f4("Sound",r,new C.eyF(o),q,A.c6,n),new C.j6(A.rm,"Undo",new C.eyv(o),A.c,n),new C.j6(D.NS,"Clear",new C.eyw(o),A.cs,n)],m)
for(w=0;w<4;++w){p=D.ddT[w]
q.push(new C.Fg(p,o.at.A(0,p),new C.eyx(o,p),!1,n))}return C.ow(A.c6,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new B.eJ(k,o.d),"SPARK PAINTER",B.w(B.a([new C.hn(j,"BRUSH",n),new C.hn(u,"COLOUR",n),s,new C.hn(q,n,n)],m),A.m,n,A.e,A.P,0,A.p))}}
C.brF.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.X()
w=B.N()
v=a4.e
w.r=v.gp(v)
a6.b1(new B.a9(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.L)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.X()
o=B.a([],t)
n=new B.aO(p.r,A.ao,a5,a5,o)
o.push(new B.b5(A.d.gH(q).a,A.d.gH(q).b))
for(p=B.S(q),m=p.k("lP<1>"),l=new B.lP(q,1,a5,m),l.vf(q,1,a5,p.c),l=new B.bQ(l,l.gK(0),m.k("bQ<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new B.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bA(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gH(q)
$.X()
p=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
p.r=r.c.gp(0)
j=p.L()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.X()
q=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
q.b=A.ag
q.d=A.bV
q.e=A.hr
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new B.hC(A.G,p)
j=q.L()
q=n.e
u.drawPath((q==null?n.e=new B.cC(n.gbE().a.snapshot()):q).a,j)
j.delete()
q=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
q.b=A.ag
q.d=A.bV
q.e=A.hr
q.c=p
q.r=o.gp(0)
j=q.L()
q=n.e
u.drawPath((q==null?n.e=new B.cC(n.gbE().a.snapshot()):q).a,j)
j.delete()
q=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
q.b=A.ag
q.d=A.bV
q.e=A.hr
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.L()
q=n.e
u.drawPath((q==null?n.e=new B.cC(n.gbE().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new M.vL(1,A.o.E(i*5,360),0.85,1).m_()
o=q[i-1]
m=q[i]
$.X()
l=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
l.c=p
l.d=A.bV
l.r=h.gp(0)
j=l.L()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,B.L)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gH(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new M.vL(1,A.o.E(a3*23,360),0.7,1).m_():l
a4.c6U(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,B.L)(w),++s){a0=w[s]
e=A.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.X()
p=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=Q.RB
j=p.L()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c6U(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.X(),o=B.a([],x.v),n=new B.aO(p.r,A.ao,null,null,o)
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
$.X()
p=B.N()
p.r=h.j(0.4).gp(0)
p.z=A.lC
d.aS(n,p)
p=B.N()
p.r=h.gp(0)
d.aS(n,p)},
aw(d){return!0}}
C.Wf.prototype={
U(){return new C.aEu(new B.cw(null,x.z),new B.aq(new B.ba("NGMY",A.b4,A.aN),$.ax()),null,null)}}
C.aEu.prototype={
gIY(){var w,v=this,u=v.e
if(u===$){w=B.bl(null,A.r6,null,1,null,v)
w.cL(0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
a_(){this.a1()
var w=this.gIY()
w.de()
w.dV$.M(0,this.gbYd())},
bYe(){var w,v,u,t,s,r,q,p=this,o=p.gIY().x
o===$&&B.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?A.m9:new B.me(w)).gK(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)E.dX(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dX(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
C.pZ(s,D.cRx[A.o.E(t,8)]+12,450,0.35)}}p.Q=o},
t(){this.gIY().t()
var w=this.f
w.S$=$.ax()
w.P$=0
this.bwc()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=B.a(["\u2026"],x.s)
else{h=new B.me(h)
w=B.C(h,B.a5(h).k("J.E"))}v=D.R7[k.w]
h=x.p
u=B.a([B.aI(j,j,j,j,D.qf,j,j,j,new C.eER(k,d),j,j,j,j,"Share",j)],h)
t=B.m(26)
s=D.ayb[k.y]
s=B.bv(t,B.c0(B.at(B.c7(k.gIY(),new C.eES(k,w,v),j),j,j,j),new B.o(j,j,j,j,j,new B.a8(A.ax,A.aC,A.x,s,j,j),A.n),A.bf),A.aq)
t=A.c.j(0.06)
t=B.aL(j,A.U,!1,j,!0,A.r,j,B.aN(),i,j,j,j,j,j,2,B.br(j,new B.b4(4,B.m(14),A.X),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,G.DP,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new C.eET(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.fJ,!0,A.a6,j,A.an,j,j,j,j)
i=B.a([],h)
for(r=0;r<7;++r){q=D.czR[r]
i.push(new C.f4(q.b,k.r===q.a,new C.eEU(k,q),j,A.bH,j))}p=B.a([],h)
for(o=0;o<8;++o)p.push(new C.Fg(D.R7[o],k.w===o,new C.eEV(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?A.um:P.Cd
l=B.a([new C.f4(m,n,new C.eEW(k),l,A.bH,j)],h)
n=B.a([],h)
for(o=0;o<5;++o)n.push(new C.Fg(D.ayb[o][0],k.y===o,new C.eEX(k,o),!1,j))
n.push(A.bn)
n.push(new C.j6(A.o9,"Replay",new C.eEY(k),A.c,j))
m=k.x
return C.ow(A.bH,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new B.D(A.bC,new B.eJ(s,k.d),j),"TITLE ANIMATOR",B.w(B.a([t,A.N,new C.hn(i,"MOVE",j),new C.hn(p,"COLOUR",j),new C.hn(l,"SOUND",j),new C.hn(n,"BACK",j),C.lO(A.bH,A.o.u(A.k.V(m)),"Size",96,28,new C.eEZ(k),m)],h),A.m,j,A.e,A.P,0,A.p))},
c00(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=B.a([new B.cS(h.j(0.7),A.J,18)],x.q),o=0,n=1,m=1,l=0
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
if(u&&(e&1)===0)w=A.bb
else w=u?A.c6:h
break
case"zoom":t=A.k.D(g*1.4-q*0.5,0,1)
n=A.lO.av(0,t)
w=h
m=t
break
case"rainbow":w=new M.vL(1,A.k.E(g*360+e*40,360),0.75,1).m_()
A.d.a8(p)
p.push(new B.cS(w.j(0.7),A.J,18))
break
default:w=h}return B.dd(B.dU(B.ed(A.A,B.d(d,r,r,r,r,r,r,B.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,A.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new B.x(l,o)),m)}}
C.aM5.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.aMa.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.eb.prototype={}
C.tA.prototype={
aq9(d,e,f,g){var w=this
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
C.aaf.prototype={}
C.abl.prototype={}
C.a4m.prototype={
bdo(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.ht()?-1:1
v=t.am()*3.141592653589793*2
u=f*(0.3+t.am())
s.push(new C.aaf(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.am()*0.45));++r}},
c38(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bs(w,new C.bMn())},
ajQ(d,e,f,g){var w="p"+this.c++,v=new C.tA(w,e,f,g)
v.aq9(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bs(this.b,new C.bMy(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cHc(d,e,f,g,h){return A.d.b3(this.b,new C.bMt(e,f,g,h))},
akz(d,e,f,g){var w
if(d===f||this.cHc(0,d,e,f,g))return null
w=new C.abl(d,e,f,g)
this.b.push(w)
return w},
aAv(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zM(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
anc(d){return this.LM(d)&&!d.x&&d.cx>this.zM(d)},
b5T(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
LM(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c7a(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.zn.h(0,v)
if(w!=null)return w.a
return 100},
va(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c38(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.S(v).k("Z<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.L)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Z(v,new C.bMz(a2),t).cM(0,0,new C.bMA(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.U(x.N,u)
n=new C.bMC(o)
m=B.a([],x.t)
l=new C.bMB(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.L)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.L)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.U(u,u)
f=new C.bME(g,l,n)
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
a2.b5P(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zM(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b5P(e,d,w,!0)
a2.bNr(a4)},
b5P(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.U(x.N,b3),b5=new C.bMp(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bMo(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.L)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bMr(B.U(b3,b3),r,b5)
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
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b5T(t)*(1+t.CW))
a4=b2.aAv(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c7a(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bQB(e,a0,b8)
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
bQB(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
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
bNr(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.L)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aAv(o)/a1.b5T(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zM(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bFw(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bdo(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tN(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.tN(o,"The "+$.ql().h(0,n).b+" got "+A.k.ab(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tN(o,"More than 1.5 amps went through the "+$.ql().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tN(o,"The regulator had to turn "+A.k.ab(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.ab(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tN(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.zn.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.ql().h(0,n).b
l=f.b
l=l===A.k.jb(l)?""+A.k.V(l):B.u(l)
g=f.c
g=g===A.k.jb(g)?""+A.k.V(g):B.u(g)
a1.tN(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ab(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eVd.q(0,n)){m=o.fx>0?A.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tN(o,"The bulb got "+A.k.ab(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tN(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.D(j/14,0,1)
break
case"motor":n=A.k.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tN(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.D(i/1,0,1)
if(!o.x&&i>1)a1.tN(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tN(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tN(o,"The capacitor was charged to "+A.k.ab(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bFw(d){return A.d.b3(this.a,new C.bMm(d))},
tN(d,e){var w
d.x=!0
d.ay=e
this.bdo(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bi3(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aGI(d){var w=d.b
return D.aOd.q(0,w)||D.zn.ai(0,w)||w==="buck"||w==="regulator"},
beP(d){var w,v=!0
if(!this.LM(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.zn.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
UO(d,e){var w=this.b
return new B.Z(w,new C.bMG(d,e),B.S(w).k("Z<1>")).gK(0)},
CA(d){var w,v
if(d.x)return!1
w=d.b
if(D.zn.ai(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bcV(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.ql().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aGI(d)||i.CA(d))return null
w=i.UO(d,0)
v=i.UO(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.S(u).k("Z<1>")
s=B.C(new B.Z(u,i.gcPH(),t),t.k("J.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jb(r)?""+A.k.V(r):B.u(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ab(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.zn.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aGN("battery"),o=J.aW(t.a),t=new B.f5(o,t.b);t.C();){n=o.gT(o)
if(n.e===1.5&&n.as<=0.02&&i.UO(n,0)+i.UO(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aGN("switch"),o=J.aW(t.a),t=new B.f5(o,t.b);t.C();)if(!o.gT(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.ql().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zM(k))return"The "+$.ql().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ab(k.cx,2)+" amps, but it can only give about "+A.k.ab(i.zM(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b3(u,new C.bMu(i,d))
h=q.b
h=h===A.k.jb(h)?""+A.k.V(h):B.u(h)
u=A.k.ab(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ab(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ab(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aGN(d){var w=this.a
return new B.Z(w,new C.bMx(d),B.S(w).k("Z<1>"))},
aGk(d){return this.aGN(d).b3(0,new C.bMw(0.35))},
pP(d,e){return A.d.b3(this.a,new C.bMv(e))}}
C.aiA.prototype={
a6(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.X()
w=B.N()
w.r=H.AZ.gp(0)
c0.b1(new B.a9(0,0,b8,b9),w)
v=B.N()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.L()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,B.L)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.m5.ai(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.m5.ai(0,h.b)?(h.ch-1)*38:0
b4.cE4(c0,new B.x(k*b6+j*(42+i),l*b7),new B.x(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=C.hyz(q.a,q.b,c1)
q=b4.e
q.toString
$.X()
p=B.N()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bV
c0.bL(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,B.L)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.X()
g=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
g.r=D.ae7.j(A.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.zo
s=g.L()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bx(w.save())
w.translate(j,i)
h=A.k.D(A.lO.av(0,A.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.cgW(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zM(a0)){g=j+0
f=i+-40
e=Math.sin(r.d*10)
a2=$.X().r
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
a3=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a3.r=A.aw.j(0.65+0.35*e).gp(0)
s=a3.L()
e=a4.gbE().a.snapshot()
w.drawPath((a4.e=new B.cC(e)).a,s)
s.delete()
e=B.a([],k)
a2=new B.aO(a2,A.ao,b5,b5,e)
e.push(new B.b5(g,a5))
e.push(new B.ap(a6,a7))
e.push(new B.ap(a8,a7))
e.push(new B.bE())
e=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
e.b=A.ag
e.c=1.6
e.r=A.c.gp(0)
s=e.L()
e=a2.gbE().a.snapshot()
w.drawPath((a2.e=new B.cC(e)).a,s)
s.delete()
a9=new B.l3(new B.eS("!",b5,b5,A.d_,b5,b5,b5,b5,b5,b5,new B.F(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a6,A.cb,new B.kK(1),b5,b5,b5,b5,A.c7,b5)
a9.eQ()
a9.a6(c0,new B.x(g+-3,f+-8))}if(!a0.x)g=(D.aOd.q(0,h)||D.zn.ai(0,h)||h==="buck"||h==="regulator")&&!r.CA(a0)&&r.UO(a0,0)+r.UO(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.X()
g=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
g.r=A.aF.gp(0)
s=g.L()
w.drawCircle(j,i,10,s)
s.delete()
a9=new B.l3(new B.eS("!",b5,b5,A.d_,b5,b5,b5,b5,b5,b5,new B.F(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a6,A.cb,new B.kK(1),b5,b5,b5,b5,A.c7,b5)
a9.eQ()
a9.a6(c0,new B.x(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.m5.ai(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.X()
j=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
j.r=H.AZ.gp(0)
s=j.L()
w.drawCircle(f,g,7,s)
s.delete()
j=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
j.b=A.ag
j.c=2.4
j.r=(i&&r.beP(a0)?A.cs:A.ad).gp(0)
s=j.L()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.beP(a0)){a9=new B.l3(new B.eS("+",b5,b5,A.d_,b5,b5,b5,b5,b5,b5,new B.F(!0,A.cs,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a6,A.cb,new B.kK(1),b5,b5,b5,b5,A.c7,b5)
a9.eQ()
a9.a6(c0,new B.x(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,B.L)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.D(b1.r/0.8,0,1)
j=B.ar(F.XX,F.Y3,b2)
j.toString
i=b1.f
$.X()
h=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
h.r=j.gp(0)
h.c=2.4
h.d=A.bV
s=h.L()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
i.r=j.j(0.35*b2).gp(0)
i.z=A.RC
s=i.L()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b3(q,new C.bGZ())){b3=A.d.cM(q,0,new C.bH_())
$.X()
b7=B.N()
b7.r=D.baS.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.b1(new B.a9(0,0,b8,b9),b7)
a9=B.h2(b5,b5,b5,b5,D.f5c,A.a6,A.cb,b5,A.dS,A.c7)
a9.uF(b6-24)
a9.a6(c0,new B.x(12,10))}},
qs(d,e,f,g,h){var w=null,v=B.h2(w,w,w,w,B.d1(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a6,A.cb,w,A.dS,A.c7)
v.eQ()
v.a6(d,f)},
cE4(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new B.aO($.X().r,A.ao,null,null,B.a([],x.v))
d.F(new B.b5(a1.a,a1.b))
w=C.hqX(a1,a2,a3)
d.F(new B.cR(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aS,D.ae7,A.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aR,A.aS,A.k.D(r*1.2,0,1))
u.toString
o=u}else o=A.bl
u=B.N()
u.b=A.ag
u.c=a4?7:5
u.d=A.bV
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aS(d,u)
u=B.N()
u.b=A.ag
u.c=2.4
u.d=A.bV
u.r=(a4?A.c:o).gp(0)
a0.aS(d,u)
if(q){n=new B.SG(new B.vF(B.xd(d),!1,B.a([],x.f5))).gH(0)
m=40+A.k.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.jB()
i=t[u].b
i===$&&B.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jB()
h=t[u].b
h===$&&B.c()
h=A.k.E(j*22+i*m*l,h.a.length())
v.jB()
i=t[u].b
i===$&&B.c()
i=i.a.length()
v.jB()
g=t[u].b
g===$&&B.c()
f=A.k.E(h+i,g.a.length())
v.jB()
i=t[u].MU(f).a
h=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
h.r=A.c.gp(0)
e=h.L()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
P5(d,e,f,g){var w,v,u,t
$.X()
w=B.N()
v=g?A.b3:A.a3
u=g?A.b6:A.a8
t=B.ar(e,A.w,0.3)
t.toString
w.sau(new B.a8(v,u,A.x,B.a([e,f,e,t],x.O),A.Ho,null).aA(0,d))
return w},
awa(d,e,f){return this.P5(d,e,f,!0)},
c2J(d,e){return this.P5(d,A.bl,A.ij,e)},
ahp(d,e){var w,v,u
$.X()
w=B.N()
w.sau(D.aMH.aA(0,B.bU(e,4.2)))
d.af(e,4.2,w)
w=e.ad(0,D.eb4)
v=e.ad(0,D.ebd)
u=B.N()
u.r=A.e4.gp(0)
u.c=1.2
d.bL(w,v,u)},
cgW(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.X(),c0=B.N()
c0.sau(D.bYl.aA(0,D.eRX))
c0.c=3.4
c0.d=A.bV
w=B.N()
w.r=A.w.j(0.45).gp(0)
w.z=G.pd
c1.hI(D.eRP,w)
if(c3){w=B.bz(D.eRW,A.kK)
v=B.N()
v.r=A.c.j(0.14).gp(0)
c1.aD(w,v)}u=C.h6S(c2)
c1.bL(new B.x(-u,0),D.ecm,c0)
c1.bL(D.eac,new B.x(u,0),c0)
t=c2.x
w=c2.b
s=D.m5.ai(0,w)&&c2.ch!==1
if(s){J.bx(c1.a.save())
c1.bZ(0,c2.ch)}switch(w){case"battery":b3.bCk(c1,c2)
break
case"solar":r=B.bz(D.eRS,A.iA)
c1.aD(r,b3.P5(new B.a9(r.a,r.b,r.c,r.d),A.dt,A.bP,!1))
b9=B.N()
w=B.ar(D.bei,A.d0,0.25+0.55*c2.f)
w.toString
v=B.ar(D.bmw,A.mq,0.3+0.4*c2.f)
v.toString
b9.sau(new B.a8(A.ax,A.aC,A.x,B.a([w,v],x.O),b4,b4).aA(0,D.a6X))
c1.b1(D.a6X,b9)
q=B.N()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(b9=c1.a,p=1;p<6;++p){w=-34+p*68/6
o=q.L()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}for(p=1;p<4;++p){w=-18+p*9
o=q.L()
b9.drawLine.apply(b9,[-34,w,34,w,o])
o.delete()}for(p=0;p<6;++p){w=-34+(p+0.5)*68/6
$.X()
v=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
v.r=A.cr.j(0.5).gp(0)
v.c=0.6
o=v.L()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new B.aO($.X().r,A.ao,b4,b4,B.a([],x.v))
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
b9.r=A.dP.j(0.9).gp(0)
c1.af(D.eai,4+4*w,b9)
break
case"crank":n=B.bz(D.eRD,A.hH)
c1.aD(n,b3.awa(new B.a9(n.a,n.b,n.c,n.d),A.br,A.bK))
b9=B.N()
b9.sau(D.aMI.aA(0,B.bU(A.J,12)))
c1.af(A.J,12,b9)
m=new B.x(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.N()
b9.r=A.cr.gp(0)
b9.c=5
b9.d=A.bV
c1.bL(A.J,m,b9)
b9=B.N()
b9.sau(D.el2.aA(0,B.bU(m,7)))
c1.af(m,7,b9)
b3.ahp(c1,D.ecf)
b3.ahp(c1,D.ea5)
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
l.r=A.bP.gp(0)
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
l=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
l.r=A.c.gp(0)
o=l.L()
l=j.gbE().a.snapshot()
v.drawPath((j.e=new B.cC(l)).a,o)
o.delete()
v.restore()}b9=B.N()
b9.sau(D.ekK.aA(0,B.bU(A.J,4.5)))
c1.af(A.J,4.5,b9)
break
case"switch":n=B.bz(D.eRK,A.rJ)
b9=B.N()
b9.sau(D.apd.aA(0,new B.a9(n.a,n.b,n.c,n.d)))
c1.aD(n,b9)
b3.ahp(c1,D.Sv)
b3.ahp(c1,D.aHx)
i=c2.w?D.aHx:D.e9Q
b9=B.N()
b9.r=A.av.gp(0)
b9.c=6
b9.d=A.bV
c1.bL(D.Sv,i,b9)
b9=B.N()
b9.r=(c2.w?A.bo:A.bP).gp(0)
b9.c=4
b9.d=A.bV
c1.bL(D.Sv,i,b9)
b9=B.ks(D.Sv,i,0.85)
b9.toString
w=B.N()
w.r=A.aw.gp(0)
c1.af(b9,5,w)
break
case"fuse":h=B.bz(D.aNi,D.aMM)
b9=B.N()
b9.r=A.fg.j(0.25).gp(0)
c1.aD(h,b9)
b9=B.N()
b9.b=A.ag
b9.c=1.4
b9.r=A.aB.gp(0)
c1.aD(h,b9)
if(!t){b9=B.N()
b9.c=1.6
b9.r=B.ar(A.bP,A.cY,c2.fx).gp(0)
c1.bL(D.aHO,D.aHw,b9)}else{b9=B.N()
b9.c=1.6
b9.r=A.bX.gp(0)
c1.bL(D.aHO,D.ecD,b9)
b9=B.N()
b9.c=1.6
b9.r=A.bX.gp(0)
c1.bL(D.eaJ,D.aHw,b9)
b9=B.N()
b9.r=A.dI.gp(0)
c1.af(A.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=B.cj(new B.x(H.iS[g]*22,0),20,9)
w=B.bz(f,A.hG)
o=b3.P5(f,A.d8,A.oJ,!0).L()
b9.drawRRect(B.eU(w),o)
o.delete()}break
case"pot":b9=B.N()
b9.sau(D.ekV.aA(0,B.bU(A.J,21)))
c1.af(A.J,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
d.r=A.aB.gp(0)
d.c=1.2
o=d.L()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=B.N()
b9.sau(D.ekI.aA(0,B.bU(A.J,13)))
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
case"resistor":a1=B.bz(D.aNi,D.aMM)
b9=B.N()
b9.sau(D.c0G.aA(0,new B.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=x.O
a2=B.G([47,B.a([B.b0(b5),B.b0(b6),A.w],b9),100,B.a([B.b0(b7),A.w,B.b0(b7)],b9),220,B.a([B.b0(b8),B.b0(b8),B.b0(b7)],b9),470,B.a([B.b0(b5),B.b0(b6),B.b0(b7)],b9),1000,B.a([B.b0(b7),A.w,B.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
v.r=a3[p].gp(0)
o=v.L()
b9.drawRect(B.bW(new B.a9(w,-9,w+4.5,9)),o)
o.delete()}b9=B.N()
b9.r=A.aS.gp(0)
c1.b1(D.eS5,b9)
b9=c2.r
b3.qs(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.ebV,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.N()
v.r=A.dP.j(0.55*w).gp(0)
v.z=A.zo
c1.af(D.wz,34,v)}n=B.cj(D.e9l,12,18)
c1.aD(B.bz(n,A.hG),b3.P5(n,A.bl,A.e6,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
l.r=A.dq.gp(0)
l.c=1
o=l.L()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=B.N()
if(t)v=A.WJ
else{v=B.ar(A.e6,A.hM,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.F4
else{l=B.ar(A.dt,A.dP,c2.fx)
l.toString}w.sau(new B.c_(A.t9,0.5,A.x,b4,0,B.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aA(0,B.bU(A.rG,17)))
c1.af(A.rG,17,w)
w=B.N()
w.b=A.ag
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.af(A.rG,17,w)
b9=b9.r
w=x.v
l=new B.aO(b9,A.ao,b4,b4,B.a([],w))
l.F(new B.b5(-9,-12))
l.F(new B.cR(-12,-4,-9,0))
v=B.N()
v.b=A.ag
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aS(l,v)
v=B.N()
v.r=A.cU.gp(0)
v.c=1.4
c1.bL(D.ecz,D.ecB,v)
v=B.N()
v.r=A.cU.gp(0)
v.c=1.4
c1.bL(D.eaC,D.eaF,v)
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
a4.e=null}$.X()
b9=B.N()
b9.b=A.ag
b9.c=1.8
if(t)w=A.aW
else{w=B.ar(A.dt,D.bfa,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aS(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.N()
v.r=A.aw.j(0.6*w).gp(0)
v.z=D.dtu
c1.af(A.rG,30,v)}w=B.N()
w.r=A.e6.gp(0)
w.c=2.4
c1.bL(D.ecF,D.ecE,w)
w=B.N()
w.r=A.e6.gp(0)
w.c=2.4
c1.bL(D.eaL,D.eaK,w)
b9=b9.r
w=x.v
a6=new B.aO(b9,A.ao,b4,b4,B.a([],w))
a6.F(new B.b5(-12,8))
a6.F(new B.ap(-12,-6))
a6.F(new B.cR(0,-26,12,-6))
a6.F(new B.ap(12,8))
a6.F(new B.bE())
v=B.N()
if(t)l=A.j8
else{l=B.ar(A.eu,D.bgJ,c2.fx)
l.toString}if(t)j=A.ky
else{j=B.ar(A.kw,A.aw,c2.fx)
j.toString}v.sau(new B.a8(A.ax,A.aC,A.x,B.a([l,j],x.O),b4,b4).aA(0,D.eRa))
c1.aS(a6,v)
v=B.N()
v.b=A.ag
v.c=1.2
v.r=A.k5.gp(0)
c1.aS(a6,v)
v=B.N()
v.r=A.en.gp(0)
c1.b1(D.eRf,v)
w=new B.aO(b9,A.ao,b4,b4,B.a([],w))
w.F(new B.b5(-7,-4))
w.F(new B.cR(-6,-12,0,-15))
b9=B.N()
b9.b=A.ag
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aS(w,b9)
break
case"motor":a7=new B.a9(-28,-14,20,14)
c1.aD(B.bz(a7,A.hY),b3.awa(a7,A.ak,A.aL))
b9=B.N()
b9.r=A.cp.gp(0)
c1.b1(D.eQY,b9)
b9=B.N()
b9.r=A.cr.gp(0)
c1.b1(D.eQZ,b9)
b9=c1.a
J.bx(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bx(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=B.cj(D.e9D,15,7)
v=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
v.r=A.cY.j(0.9).gp(0)
o=v.L()
b9.drawOval(B.bW(w),o)
o.delete()
b9.restore()}w=B.N()
w.r=A.av.gp(0)
c1.af(A.J,3,w)
b9.restore()
b3.qs(c1,"M",D.ece,A.av,14)
break
case"buzzer":a8=B.cj(A.J,42,42)
b9=B.N()
b9.sau(D.ekZ.aA(0,a8))
c1.hI(a8,b9)
b9=B.N()
b9.r=A.w.gp(0)
c1.af(A.J,6,b9)
b9=B.N()
b9.b=A.ag
b9.c=1.4
b9.r=A.aZ.gp(0)
c1.af(A.J,6,b9)
b3.qs(c1,"+",D.ec7,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.E(w.d*14,5):0
l=B.bU(A.J,24+k*5+l)
j=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
j.b=A.ag
j.c=2
j.r=A.c6.j(v*(1-k*0.22)).gp(0)
o=j.L()
b9.drawArc.apply(b9,[B.bW(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=B.bz(D.eRG,A.hY)
w=B.N()
w.sau(D.bZk.aA(0,new B.a9(n.a,n.b,n.c,n.d)))
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
if(b9>0.1){$.X()
w=B.N()
w.b=A.ag
w.c=10
w.r=D.bfP.j(0.5*b9).gp(0)
w.z=A.lC
c1.aS(a9,w)}$.X()
b9=B.N()
b9.b=A.ag
b9.c=3.2
b9.d=A.bV
b9.r=B.ar(A.lT,A7.XL,c2.fx).gp(0)
c1.aS(a9,b9)
break
case"capacitor":a7=new B.a9(-16,-22,16,18)
b9=B.bz(a7,A.hY)
w=B.N()
w.sau(D.bYd.aA(0,a7))
c1.aD(b9,w)
w=B.N()
w.r=A.bP.gp(0)
c1.b1(D.eRl,w)
for(p=0;p<4;++p){b0=new B.l3(new B.eS("\u2212",b4,b4,A.d_,b4,b4,b4,b4,b4,b4,new B.F(!0,A.av,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a6,A.cb,new B.kK(1),b4,b4,b4,b4,A.c7,b4)
b0.eQ()
b0.a6(c1,new B.x(-14,-18+p*9))}b1=new B.a9(-16,-24,16,-17)
c1.aD(B.bz(b1,A.hG),b3.c2J(b1,!1))
b9=38*c2.fx
w=18-b9
$.X()
v=B.N()
v.r=A.bo.j(0.5).gp(0)
c1.b1(new B.a9(-3,w,11,w+b9),v)
b3.qs(c1,"1F",D.wz,A.c,11)
break
case"radio":a1=B.bz(D.a6X,A.hH)
b9=B.N()
b9.sau(D.c0W.aA(0,new B.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aD(a1,b9)
b9=B.N()
b9.b=A.ag
b9.c=1.4
b9.r=A.oJ.j(0.6).gp(0)
c1.aD(a1,b9)
b9=B.bz(D.eRH,A.iA)
w=B.N()
w.r=A.dG.gp(0)
c1.aD(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
v.r=A.lT.gp(0)
v.c=1.4
o=v.L()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=B.N()
w.r=(c2.fx>0?A.fL:A.nP).gp(0)
c1.b1(D.eR0,w)
if(c2.fx>0){w=8+A.k.E(b3.b.d*7,18)
v=B.N()
v.r=A.bx.gp(0)
v.c=1.6
c1.bL(new B.x(w,-13),new B.x(w,-3),v)}w=B.N()
w.sau(D.aMI.aA(0,B.bU(D.a5X,6)))
c1.af(D.a5X,6,w)
w=B.N()
w.r=A.oJ.gp(0)
c1.af(D.eab,4,w)
w=B.N()
w.r=A.e6.gp(0)
w.c=1.8
c1.bL(D.ea9,D.aHB,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=B.bU(D.aHB,4+k*5+A.k.E(w.d*8,5))
l=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
l.b=A.ag
l.c=1.4
l.r=A.nV.j(0.7).gp(0)
o=l.L()
b9.drawArc.apply(b9,[B.bW(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=B.bz(D.eRR,A.hY)
v=B.N()
v.r=H.n1.gp(0)
c1.aD(w,v)
b2=B.bz(D.eRO,A.hG)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bx(b9.save())
b9.clipRRect(B.eU(b2),$.py(),!0)
b9.translate(-33,-21)
E.h2X(c1,D.eXW,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.N()
b9.r=A.bo.gp(0)
c1.af(D.ean,1.6,b9)}else{w=B.N()
w.r=D.vB.gp(0)
c1.aD(b2,w)
b9=new B.aO(b9.r,A.ao,b4,b4,B.a([],x.v))
b9.F(new B.b5(-33,-21))
b9.F(new B.ap(-10,-21))
b9.F(new B.ap(-33,0))
b9.F(new B.bE())
w=B.N()
w.r=A.c.j(0.05).gp(0)
c1.aS(b9,w)}b9=B.N()
b9.r=A.br.gp(0)
c1.b1(D.eRe,b9)
break}C.iax(c1,c2,b3.b.d,b3.gc7b())
if(t)b3.qs(c1,"\u2716",D.ecI,A.aw,14)
if(s)c1.a.restore()},
bCk(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new B.a9(-28,-13,28,13)
d.aD(B.bz(w,A.rJ),m.awa(w,A.dt,A.j5))
v=new B.a9(-22,-13,22,13)
$.X()
u=B.N()
u.sau(D.ap6.aA(0,v))
d.b1(v,u)
u=B.N()
u.r=A.dT.gp(0)
d.b1(D.eRu,u)
t=new B.a9(28,-5,34,5)
d.aD(B.bz(t,A.hd),m.P5(t,A.dt,A.ij,!0))
m.qs(d,"+",D.e9V,A.aS,11)
m.qs(d,"\u2212",D.ecg,A.ad,11)
m.qs(d,B.u(l===A.k.jb(l)?A.k.V(l):l)+"V",D.ec0,A.aS,13)
if(l===1.5){u=B.N()
u.r=A.bz.gp(0)
d.b1(D.eRt,u)
u=e.as
s=B.N()
s.r=B.ar(A.aw,A.bo,u).gp(0)
d.b1(new B.a9(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qs(d,"FLAT",D.ebU,A.cs,9)}if(l>2){u=B.N()
u.r=A.aZ.gp(0)
u.c=1
d.bL(D.e9r,D.aHg,u)
m.qs(d,l>3?"3 cells":"2 cells",D.ec_,A.aB,8)}}else if(l<=9){r=new B.a9(-22,-17,22,17)
u=B.bz(r,A.rJ)
$.X()
s=B.N()
s.sau(D.c0t.aA(0,r))
d.aD(u,s)
s=B.N()
s.r=A.cS.gp(0)
d.b1(D.eRv,s)
for(u=d.a,q=0;q<2;++q){p=F.ayw[q]
s=p<0?5:3.6
o=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
o.sau(D.aMH.aA(0,B.bU(new B.x(p,-18),5)))
n=o.L()
u.drawCircle(p,-18,s,n)
n.delete()}m.qs(d,"9V",D.ebW,A.c,16)}else{r=new B.a9(-34,-16,34,16)
u=B.bz(r,A.iA)
$.X()
s=B.N()
s.sau(D.ap6.aA(0,r))
d.aD(u,s)
s=B.N()
s.r=A.bH.gp(0)
d.b1(D.eRQ,s)
for(u=d.a,q=0;q<2;++q){s=B.bz(B.cj(new B.x(F.a3N[q],-20),8,10),A.hd)
o=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
o.r=A.cr.gp(0)
n=o.L()
u.drawRRect(B.eU(s),n)
n.delete()}m.qs(d,"+",D.ea1,A.aw,10)
m.qs(d,"12V",D.ebX,A.av,15)}},
aw(d){return!0}}
C.mG.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=B.U(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.tA(o,r,q,p)
n.aq9(o,r,q,p)
k.push(n)
J.iu(s[4],new C.cmK(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.L)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.akz(m,u[1],l,u[3])}}}
C.aiy.prototype={
U(){var w=x.N
return new C.aiz(A.J,A.az,B.U(w,x.gl),B.aY(w),$,A.bE,0,B.a([],x.X),null,null)}}
C.aiz.prototype={
ae3(d){var w=this,v=w.as
if(v!=null)v.a4(0)
w.m(new C.bGD(w,d))
w.as=B.cL(A.lr,new C.bGE(w))},
t(){var w=this.as
if(w!=null)w.a4(0)
w=this.ch
if(w!=null)w.a4(0)
this.bsi()},
a_T(d,e){return this.ceR(d,e)},
b0b(d){return this.a_T(d,!1)},
ceR(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a_T=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.r8:A.xV
p=d.b
w=3
return B.b(E.h3f(s,r,p,d.ax<3.2,q,$.ql().h(0,p).b),$async$a_T)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a_T,v)},
crx(d){var w=this,v=new B.T(Date.now(),0,!1),u=w.at.c4(0,d.a,new C.bGF()),t=J.cB(u)
t.M(u,v)
t.bs(u,new C.bGG(v))
if(t.gK(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a4(0)
w.a1c(d)
return}if(t.gK(u)===3){t=w.ch
if(t!=null)t.a4(0)
w.ch=B.cL(A.kB,new C.bGH(w,u,d))}},
a_z(d){return this.cdd(d)},
cdd(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a_z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.ibH(s,d.b,A.k.V(A.k.E(t.a.c.d*0.12,1)*100)),$async$a_z)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a_z,v)},
a1c(d){return this.cp6(d)},
cp6(d){var w=0,v=B.j(x.H),u=this,t
var $async$a1c=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bR(F.lp,null,new C.bGB(u,d),t,!0,!0,!1,A.jV,!1,!1,x.H),$async$a1c)
case 2:return B.h(null,v)}})
return B.i($async$a1c,v)},
a_(){this.a1()
this.beZ()
this.p_()},
beZ(){this.a.c.e=new C.bGW(this)},
pY(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.va(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=D.m5.h(0,s.b)
if((r==null?null:r.b)!==D.zO)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.ay){u.M(0,s.a)
q.a_T(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)E.dX(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)E.dX(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cW.am()<0.5
else u=!1
if(u)E.dX(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){E.dX(900+A.cW.ar(800),"",90,0,0.1,o)
if(A.cW.am()<0.35)E.dX(300+A.cW.ar(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cW.am()<0.4
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
case"kettle":if(s.fx>0)u=A.cW.am()<0.5
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
q.m(new C.bGX())},
b7c(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.L)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.m5.ai(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.z(p,n)
r=i}}}return s},
b0S(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.S(w).k("dx<1>"),w=new B.dx(w,v),w=new B.bQ(w,w.gK(0),v.k("bQ<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.m5.ai(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cE5(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.L)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.m5.ai(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.m5.ai(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hqX(new B.x(k,n),new B.x(i,l),p)
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
ae1(){this.a.toString
this.m(new C.bG6())},
bp1(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.d2o[v]
if(!A.d.b3(p.a.c.a,new C.bGY(u,w))){o=new B.x(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?K.Iv:o
s=s?K.Iv:o
q=t.ajQ(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dX(1200,"",50,0,0.3,"tri")
p.ae1()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.QR[v].a)
u=w.length
t=u>8
s=t?A.d.du(w,0,A.o.an(u+1,2)):w
r=t?A.d.fO(w,A.o.an(w.length+1,2)):A.U
q=n.a.d
if(q!=null){w=B.a5(q).k("cr<1>")
w=B.C(new B.cr(q,w),w.k("J.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.L)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b0H(s,!0))
n.a.toString
if(t)w.push(n.b0H(r,!0))
w.push(B.E(B.cA(new C.bGV(n,q,m)),1))
return B.w(w,A.m,null,A.e,A.j,0,A.p)},
b0H(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.L)(d),++v){u=d[v]
t=$.ql()
s=t.h(0,u).d.j(0.14)
r=new B.aQ(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.q,-1)
m.push(B.aB(p,B.p(p,B.w(B.a([new B.y(t.h(0,u).c,p,A.A2,p,p,p,p,p,p,p,p,p),new B.y(t.h(0,u).b,p,A.nw,p,p,p,p,A.a1,p,1,p,p)],n),A.m,p,A.b7,A.j,0,A.p),A.f,p,p,new B.o(s,p,new B.bJ(q,q,q,q),new B.bk(r,r,r,r),p,p,A.n),p,p,p,F.tQ,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bG7(this,u),p,p,p,p,p,p,!1,A.a5))}return B.p(p,B.cs(m,p,A.h0,p,p,A.aM,!1),A.f,p,p,new B.o(F.AX,p,new B.bJ(A.X,A.X,new B.ay(o,1,A.q,-1),A.X),p,p,p,A.n),p,58,p,p,p,p,p,p)},
aZe(d){var w=null,v=B.m(18)
return B.p(w,d,A.f,w,w,new B.o(F.acP,w,B.I(A.bz,A.q,1),v,w,w,A.n),w,w,w,w,F.aia,w,w,w)},
cgX(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.ql().h(0,o),m=d.dy,l=d.fr,k=new C.bGq(q,n),j=B.d(n.c,p,p,p,p,p,p,A.Jz,p,p,p),i=n.b,h=n.d,g=x.p
i=B.B(B.a([j,A.ab,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aI(p,p,p,p,D.bPq,p,p,p,new C.bGd(q,d),p,p,p,p,"Remove part",A.cc),B.aI(p,p,p,p,A.GT,p,p,p,new C.bGe(q),p,p,p,p,p,A.cc)],g),A.m,p,A.e,A.j,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,F.DQ,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fe6,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ab(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ab(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ab(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.au,w,A.al,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.cs:A.aS,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bcV(d)
if(v!=null){l=(d.x?A.aw:A.aF).j(0.14)
j=B.m(10)
i=B.I((d.x?A.aw:A.aF).j(0.5),A.q,1)
m.push(new B.D(A.i7,B.p(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fkC,p,p,p),A.f,p,p,new B.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cm,p,p,p),p))}if(C.h1_(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new C.f4("CH "+t,d.at===u,new C.bGf(q,d,u),p,h,p))}l=B.bV(A.bB,l,A.bs,4,6)
l=B.a([A.al,l,A.au,B.d(q.a.c.CA(d)?"Showing: "+F.Qr[A.o.E(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hf,p,p,p)],g)
if(q.a.c.CA(d))l.push(new C.j6(A.Gq,"Open big screen",new C.bGi(q,d),h,p))
A.d.v(m,l)}if(D.m5.ai(0,o)&&!C.h1_(o)){l=B.a([A.al,B.d(q.a.c.CA(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hf,p,p,p)],g)
if(q.a.c.CA(d))l.push(new C.j6(A.O9,"Open the "+$.ql().h(0,o).b,new C.bGj(q,d),h,p))
A.d.v(m,l)}if(D.m5.ai(0,o))A.d.v(m,B.a([A.al,new C.j6(A.C3,"Make it bigger (or tap it 4 times)",new C.bGk(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ab(d.db,1)
if(q.a.c.CA(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.al,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ab(i,1)+" V",p,p,p,p,p,p,D.feW,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.djD[s]
j=r===A.k.jb(r)?A.k.V(r):r
l.push(new C.f4(B.u(j)+" V out",d.e===r,new C.bGl(q,d,r),p,h,p))}i.push(new B.D(A.kZ,B.bV(A.bB,l,A.bs,0,6),p))}if(o==="regulator")i.push(D.fD8)
A.d.v(m,i)}if(q.a.c.LM(d)&&!d.x){l=A.k.ab(d.cx,2)
j=A.k.ab(q.a.c.zM(d),2)
i=q.a.c
w=i.anc(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.anc(d)?A.cs:A.em,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.m(4)
w=A.k.D(d.cx/q.a.c.zM(d),0,1)
i=q.a.c.anc(d)?A.aw:A.bo
m.push(new B.D(A.i7,B.w(B.a([l,A.cO,B.bv(j,B.li(A.bz,p,p,5,p,w,new B.m2(i,x.x)),A.aq)],g),A.E,p,A.e,A.j,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.i7,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.f8K,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.d94[s]
j=r===1.5?"1.5 V (rechargeable)":B.u(r)+" V"
l.push(new C.f4(j,d.e===r,new C.bGm(q,d,r),p,h,p))}m.push(B.bV(A.bB,l,A.bs,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.d_J[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new C.f4(j,d.r===r,new C.bGn(q,d,r),p,h,p))}m.push(B.bV(A.bB,l,A.bs,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bGo(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bGp(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bGg(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bGh(d)))
if(o==="crank")m.push(D.fyx)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hf,p,p,p))
return q.aZe(new B.cT(D.b0H,B.cc(B.w(m,A.E,p,A.e,A.P,0,A.p),A.r,p,A.y,p,p,p,p,A.af),p))}}
C.baF.prototype={}
C.V3.prototype={
U(){return new C.aDf(C.h6R(),new B.cw(null,x.gJ),B.aY(x.S))}}
C.aDf.prototype={
a_(){this.a1()
$.aV.bY$.push(this)
this.ae2()},
ae2(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ae2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fwp(),$async$ae2)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.iaU(t.d,r)
if(s!=null){t.m(new C.dSM(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$ae2,v)},
F1(){var w,v=this
if(!v.as)return
w=C.i1s(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bDj(w)},
j7(d){if(d!==A.fA)this.F1()},
t(){$.aV.hN(this)
this.F1()
this.a2()},
c7d(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.S(v).k("Z<1>")
t=new B.Z(v,new C.dSV(q),u).gK(0)
s=new B.Z(v,new C.dSW(),u).gK(0)
r=new B.Z(v,w.gcTc(),u).gK(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.dSX(q,t,s,r))}if(A.o.E(q.w,45)===0)q.F1()
if(A.o.E(q.w,10)===0){w=q.f
$.ahM()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.ahM()[q.f].c.$1(q.d)){w.M(0,q.f)
C.IU("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.dSY())
q.F1()
w=q.c
w.toString
w=B.Xj(w)
if(w!=null)w.R(B.b2(p,p,p,p,p,A.r,p,B.d("\u2705 Challenge done: "+$.ahM()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.ms,p,p,p,p,p,p,p,p,p,p))}},
agF(){var w=0,v=B.j(x.H),u=this,t
var $async$agF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cd(null,null,!0,null,new C.dSL(u),t,null,!0,!0,x.H),$async$agF)
case 2:return B.h(null,v)}})
return B.i($async$agF,v)},
aZd(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.m(12),t=B.I(f.j(0.45),A.q,1)
u=B.a([B.ao(w,B.p(w,B.W(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aB(w,B.hp(new B.a7(40,38,new B.an(A.V,w,A.aa,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a5)},
aZc(d,e,f,g){return this.aZd(d,e,f,g,null)},
aqP(d,e,f,g){var w=null,v=f.j(0.1),u=B.m(10),t=B.I(f.j(0.4),A.q,1)
return B.E(B.aB(w,B.p(w,B.B(B.a([B.W(d,f,w,w,w,15),A.ei,new B.dr(1,A.cn,B.d(e,w,1,A.a1,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b7,A.j,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a5),1)},
af_(){var w=0,v=B.j(x.H),u=this,t
var $async$af_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a3(t,!1).cg(B.e_(new C.dSH(u),!1,null,x.H)),$async$af_)
case 2:t=u.e.gbk()
if(t!=null)t.beZ()
if(u.c!=null)u.m(new C.dSI())
u.F1()
return B.h(null,v)}})
return B.i($async$af_,v)},
bFp(){var w,v,u,t,s=null,r=this.f
$.ahM()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.be:A.aw
u=B.m(9)
t=B.I(F.AX,A.q,1.5)
return B.p(s,B.at(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wP,s,s,s),s,s,s),A.f,s,D.b0O,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eT,s,s,s)},
ahM(){var w=0,v=B.j(x.H),u=this,t
var $async$ahM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bR(F.lp,null,new C.dSU(u),t,!0,!0,!0,A.jV,!1,!1,x.H),$async$ahM)
case 2:return B.h(null,v)}})
return B.i($async$ahM,v)},
c7e(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aB(r,B.p(r,D.bQF,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a4),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dT_(d),r,r,r,r,r,r,!1,A.a5),o=B.m(11)
o=B.p(r,D.b6z,A.f,r,r,new B.o(A.bm,r,B.I(A.aR.j(0.45),A.q,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.w(B.a([B.B(B.a([p,A.ab,o,A.ab,B.E(B.w(B.a([D.fB8,B.d(w,r,1,A.a1,r,r,r,B.l(r,r,s.y>0||s.z>0?A.f2:A.hk,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.j,0,A.p),1),new C.axn(s.gccV(),r),A.rQ,s.aZc(A.yy,"Construction Lab: real 3D wiring, plumbing and a house",A.cY,new C.dT0(s,d)),s.aZd(A.lu,"Challenges",A.aS,s.gcu7(),s.bFp()),s.aZc(A.O3,"How to play",A.aR,new C.dT1(d,e))],v),A.m,r,A.e,A.j,0,r,r),A.al,B.B(B.a([s.aqP(A.o5,"Circuits",A.by,s.gcmY()),A.bn,s.aqP(A.oY,"Repair",A.aS,new C.dT2(s)),A.bn,s.aqP(D.NS,"Clear",A.cs,new C.dT3(s))],v),A.m,r,A.e,A.j,0,r,r)],v),A.m,r,A.e,A.P,0,A.p),A.f,r,r,new B.o(F.AX,r,new B.bJ(A.X,A.X,new B.ay(q,1,A.q,-1),A.X),r,r,r,A.n),r,r,r,r,D.bzE,r,r,r)},
B(d){var w=this,v=null
$.arU="tech"
return B.c4(v,A.bZ,B.bm(!0,B.w(B.a([w.c7e(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.h5G(w.d,w.e,w.gc7c(),v),1)],x.p),A.m,v,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0),v,!1,!1,v,v)}}
C.axn.prototype={
U(){return new C.b8U(null,null)}}
C.b8U.prototype={
gax3(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.T,null,1,null,v)
w.cL(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gax3().t()
this.bty()},
B(d){var w=null,v=this.a.c
return B.aB(w,B.hp(new B.a7(42,42,B.c7(this.gax3(),new C.cDA(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a5)}}
C.b8T.prototype={
a6(d,e){var w,v,u,t=null,s=e.ef(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.X()
w=B.N()
w.r=A.b5.j(0.25+0.15*o).gp(0)
w.z=G.pd
d.af(s,r+2+o*2,w)
w=B.N()
w.sau(D.ekU.aA(0,B.bU(s,r)))
d.af(s,r,w)
v=B.N()
v.b=A.ag
v.c=2.2
v.sau(new B.fW(A.A,0,6.283185307179586,A.x,D.cS3,t,new B.mu(p)).aA(0,B.bU(s,r)))
d.af(s,r,v)
p=new C.cDz(d)
p.$3(s.ad(0,A.rG),8+o*1.5,1)
q*=4
p.$3(s.ad(0,D.eaW),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ad(0,D.ecM),2.6,0.5+0.5*Math.cos(q))
u=B.h2(t,t,t,t,D.f5i,A.a6,A.cb,t,A.dS,A.c7)
u.eQ()
u.a6(d,s.ad(0,new B.x(-u.b.c/2,5)))},
aw(d){return d.b!==this.b}}
C.axG.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.axH.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bsh()}}
C.aJC.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.bwM.prototype={}
C.fN.prototype={}
C.Jn.prototype={
a3(){return"ScreenStyle."+this.b}}
C.mb.prototype={}
C.UN.prototype={
U(){return new C.bjc(null,null)}}
C.bjc.prototype={
ga9l(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.o1,null,1,null,v)
w.cr(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.ga9l().t()
this.bvm()},
gRT(){var w=this.ga9l().y
w=w==null?null:A.o.an(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.m5.h(0,this.a.c)
if(v==null)v=D.aNz
return B.c4(w,S.XP,B.bm(!0,new B.an(A.V,w,A.aa,A.r,B.a([B.at(v.b===D.zP?this.bHx(v):this.cjJ(v),w,w,w),B.ao(w,B.aI(w,w,w,w,A.mE,w,w,w,new C.dPa(d),w,w,w,B.nD(w,A.aW,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ao(6,B.at(B.d(v.a,w,w,w,w,w,w,D.f6U,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ae,!0,!0),w,!1,!1,w,w)},
c7f(d){var w
A:{if(D.IT===d){w=0.46153846153846156
break A}if(D.uW===d){w=0.45
break A}if(D.wG===d){w=0.9259259259259258
break A}if(D.T6===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cjJ(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.IT
A:{if(D.IT===p){w=44
break A}if(D.uW===p){w=30
break A}if(D.wG===p){w=22
break A}if(D.T6===p){w=26
break A}w=14
break A}v=B.c7(this.ga9l(),new C.dP9(this,w,d,o),q)
if(p===D.a75)v=new B.Dn(D.bAg,v,q)
p=this.c7f(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.m(w)
s=B.a([new B.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new B.fK(p,B.p(q,B.p(q,v,A.f,q,q,new B.o(A.w,q,q,B.m(w-3),q,q,A.n),q,q,q,q,A1.FY,q,q,q),A.f,q,q,new B.o(q,q,q,t,s,new B.a8(A.ax,A.aC,A.x,r,q,q),A.n),q,q,q,D.btQ,new B.Q(u,u,u,u),q,q,q),q)},
b6l(d){var w,v,u,t=null,s=new B.T(Date.now(),0,!1),r=A.o.D(this.a.d+A.k.bm(this.gRT()*0.4),0,100),q=d.b===D.IT,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.aY(A.o.u(B.dl(s)),2,"0")+":"+A.a.aY(A.o.u(B.h1(s)),2,"0"),t,t,t,t,t,t,A.rY,t,t,t),A.b0],x.p)
for(w=0;w<4;++w){v=new B.aQ(1,1)
n.push(B.p(t,t,A.f,t,t,new B.o(A.c,t,t,new B.bk(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bzZ,t,t,t,3))}n.push(A.db)
n.push(D.ftW)
n.push(A.bn)
v=B.I(A.ad,A.q,1)
u=B.m(4)
n.push(B.p(t,new B.bK(A.a3,t,t,B.Bi(A.A,B.p(t,t,A.f,t,t,new B.o(A.bo,t,t,B.m(2),t,t,A.n),t,t,t,A1.FY,t,t,t,t),t,r/100),t),A.f,t,t,new B.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qu)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fkX,t,t,t))
return new B.D(new B.Q(p,12,o,2),B.B(n,A.m,t,A.e,A.j,0,t,t),t)},
av_(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.m(e*0.26)
w=x.p
t=B.a([B.p(v,B.at(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.deQ,new B.a8(A.ax,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.au,B.d(d.a,v,1,A.a1,v,v,v,D.fbC,v,v,v)],w))
return B.aB(v,B.w(t,A.m,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dP5(this,d),v,v,v,v,v,v,!1,A.a5)},
bYN(d,e){return this.av_(d,e,!0)},
bYw(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.T6||n===D.wG,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.ku,0.5)
l.toString
l=B.a([k,A.dx,l],x.O)
k=p.b6l(d)
w=m?190:138
v=B.m(24)
u=B.I(A.aZ,A.q,1)
w=B.aB(o,B.p(o,B.bv(B.m(23),B.b3(o,o,o,new C.aev(0,p.gRT(),o),A.fG),A.aq),A.f,o,o,new B.o(o,o,u,v,o,o,A.n),o,w,o,A.hA,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dP3(p),o,o,o,o,o,o,!1,A.a5)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.kf[s]
t.push(new B.cm(A.A,o,o,p.bYN(r,m?58:54),o))}k=B.a([k,A.al,w,A.ac,B.E(B.kG(0.92,t,v,8,12,A4.vO,o,!1),1)],u)
if(n!==D.a75){n=A.c.j(0.16)
w=B.m(28)
u=B.a([],u)
for(v=B.d0(F.kf,0,B.dB(4,"count",x.S),x.gD),t=v.$ti,v=new B.bQ(v,v.gK(0),t.k("bQ<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.av_(q==null?t.a(q):q,50,!1))}k.push(B.p(o,B.B(u,A.m,o,A.rx,A.j,0,o,o),A.f,o,o,new B.o(n,o,o,w,o,o,A.n),o,o,o,D.buG,O.ajC,o,o,o))}return B.p(o,B.w(k,A.m,o,A.e,A.j,0,A.p),A.f,o,o,new B.o(o,o,o,o,o,new B.a8(A.ax,A.aC,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bAY(d,e){var w=null
return B.p(w,B.w(B.a([this.b6l(d),B.E(B.b3(w,w,w,new C.aev(e,this.gRT(),w),A.fG),1),B.aB(w,B.p(w,B.at(B.d(F.kf[e].a,w,w,w,w,w,w,A.Jo,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dOZ(this),w,w,w,w,w,w,!1,A.a5)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bHx(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.m(r?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new B.fK(1.5384615384615383,B.p(t,B.c7(this.ga9l(),new C.dP1(this,r,d),t),A.f,t,t,new B.o(t,t,t,v,u,new B.a8(A.ax,A.aC,A.x,w,t,t),A.n),t,t,t,D.bzz,new B.Q(8,8,8,s),t,t,t),t)}}
C.buQ.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.X()
w=B.N()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.ku,0.4)
t.toString
w.sau(new B.a8(A.ax,A.aC,A.x,B.a([u,A.dx,t],x.O),null,null).aA(0,new B.a9(0,0,n,m)))
d.b1(new B.a9(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
r.r=v.j(0.1).gp(0)
r.z=D.dtz
q=r.L()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
aw(d){return!0}}
C.aev.prototype={
a6(d,e){return E.Rx(d,e,this.b,this.c)},
aw(d){return!0}}
C.aLm.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.btF.prototype={}
C.a8f.prototype={
B(d){var w=null
return B.c4(B.eD(w,w,w,!0,!0,D.af4,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,D.ao5,w,w,w,new C.chn(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fJR,w,w,w,1,w,!0),D.af4,B.cs(B.a([D.ee4,B.cA(new C.cho())],x.p),w,D.bvI,w,w,A.af,!1),w,!1,!1,w,w)}}
C.Wl.prototype={
U(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aEH(w,new B.aq(A.at,$.ax()),$,A.bE,0,B.a([],x.X),null,null)}}
C.aEH.prototype={
a_(){this.a1()
this.p_()},
b4j(d){var w=this.d.length
return A.o.E(A.k.bm(A.k.E(A.k.E(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
pY(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b4j(v.f)
if(w!==v.x){v.x=w
C.pZ("bell",24+A.o.E(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eJj(v))
C.IU("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
c8t(){if(this.d.length<2)return
this.m(new C.eJf(this))},
aZE(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eJe(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc8s(),p=s.d,o=B.E(B.aB(r,B.b3(r,r,r,new C.bv1(p,s.f,r),A.fG),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a5),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.w(B.a([o,new B.a7(r,40,B.at(B.d(n,r,r,r,r,r,r,D.fj5,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.j,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.axH[A.o.E(v,8)].j(0.9)
t=new B.aQ(20,20)
o.push(B.aB(r,B.p(r,new B.y(p[v],r,D.fik,r,r,r,r,r,r,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bk(t,t,t,t),r,r,A.n),r,r,r,A.fu,A.ha,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eJh(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a5))}p=A.c.j(0.07)
return C.ow(A.aS,A.hT,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.w(B.a([new C.hn(o,r,r),B.B(B.a([B.E(B.aL(r,A.U,!1,r,!0,A.r,r,B.aN(),s.e,r,r,r,r,r,2,B.br(r,new B.b4(4,B.m(14),A.X),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kP,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.aj,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eJi(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.dd,!0,A.a6,r,A.an,r,r,r,r),1),A.ab,new C.j6(A.hC,"Add",s.gc8p(s),A.c,r),A.bn,new C.j6(A.oZ,"Spin",q,A.bo,r)],w),A.m,r,A.e,A.j,0,r,r)],w),A.m,r,A.e,A.P,0,A.p))}}
C.bv1.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new B.x(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.X()
w=B.N()
w.r=D.bch.gp(0)
a1.af(d,f,w)
w=B.N()
w.b=A.ag
w.c=3
w.r=A.aS.gp(0)
a1.af(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=B.bU(d,a0)
n=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
n.r=D.axH[A.o.E(q,8)].gp(0)
m=n.L()
n=p*57.29577951308232
f.drawArc.apply(f,[B.bW(o),n,s,!0,m])
m.delete()
o=B.bU(d,a0)
l=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
l.b=A.ag
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.L()
f.drawArc.apply(f,[B.bW(o),n,s,!0,m])
m.delete()
J.bx(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.ap(o,0,11)+"\u2026"
k=new B.l3(new B.eS(o,i,i,A.d_,i,i,i,i,i,i,D.f63),A.a6,A.cb,new B.kK(1),i,i,i,i,A.c7,i)
k.eQ()
o=k.b
n=o.c
o=o.a.c
k.a6(a1,new B.x(a0-n-16,-o.gbg(o)/2))
f.restore()}f=B.N()
f.r=D.aeK.gp(0)
a1.af(d,20,f)
f=B.N()
f.b=A.ag
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
e.b=A.ag
e.c=2
e.r=A.aW.gp(0)
a1.aS(j,e)},
aw(d){return!0}}
C.Vb.prototype={
U(){return new C.bjl($,A.bE,0,B.a([],x.X),null,null)}}
C.bjl.prototype={
a_(){this.a1()
this.p_()},
pY(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.IU("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.a5b(900,new C.dVq())}w.m(new C.dVr())},
aZG(d){return this.m(new C.dVl(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aY(A.o.u(A.k.an(m,60)),2,"0")
v=A.a.aY(A.o.u(A.o.E(A.k.dk(m),60)),2,"0")
m=B.b3(n,n,n,new C.bpR(l,A.cs,n),A.aOT)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fax,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a7(280,280,new B.an(A.A,n,A.aa,A.r,B.a([m,B.w(B.a([u,B.d(t,n,n,n,n,n,n,D.f9A,n,n,n),A.au,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.v0,n,n,n)],s),A.m,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dbR[r]
u.push(new C.f4(""+q+" min",o.d===q,new C.dVn(o,q),n,A.cs,n))}m=o.f
p=m?A0.yG:A.is
m=m?"Pause":"Start"
return C.ow(A.cs,A.hT,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.w(B.a([new C.hn(u,n,n),new C.hn(B.a([new C.j6(p,m,new C.dVo(o),A.bo,n),new C.j6(A.o8,"Reset",new C.dVp(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.P,0,A.p))}}
C.bpR.prototype={
a6(d,e){var w,v,u,t,s=e.ef(A.J),r=e.a/2-14
$.X()
w=B.N()
w.b=A.ag
w.c=16
w.r=A.c.j(0.08).gp(0)
d.af(s,r,w)
w=B.bU(s,r)
v=B.N()
v.b=A.ag
v.c=16
v.d=A.bV
u=this.c
t=B.ar(u,A.c,0.4)
t.toString
v.sau(new B.fW(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aA(0,B.bU(s,r)))
d.eY(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aw(d){return d.b!==this.b}}
C.Up.prototype={
U(){return new C.biZ($,A.bE,0,B.a([],x.X),null,null)}}
C.biZ.prototype={
a_(){this.a1()
this.p_()},
pY(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Rw.h(0,p.d)
w.toString
v=A.d.f9(w,new C.dGP())
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
C.pZ("flute",D.c1G[t]+5,1400,0.35)}p.m(new C.dGQ())},
gc8w(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.Kc("Press Start",0.5)
w=D.Rw.h(0,this.d)
w.toString
v=A.d.f9(w,new C.dGK())
u=A.k.E(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.Kc("Breathe in",0.5+0.5*A.dz.av(0,p))
case 1:return new B.Kc("Hold",1)
case 2:return new B.Kc("Breathe out",1-0.5*A.dz.av(0,p))
default:return new B.Kc("Hold",0.5)}}}return new B.Kc("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc8w(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.iH.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.iH.j(0.35),A.J,40)],v):q,q,A.a4),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.t_,q,q,q))
n.push(B.ao(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kP,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a7(300,340,new B.an(A.A,q,A.aa,A.r,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aW(D.Rw.ger(D.Rw));w.C();){v=w.gT(w)
o.push(new C.f4(v,r.d===v,new C.dGN(r,v),q,A.iH,q))}w=r.e
v=w?A.GI:A.is
w=w?"Stop":"Start"
o.push(new C.j6(v,w,new C.dGO(r),A.bo,q))
return C.ow(A.iH,A.hT,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new C.hn(o,q,q))}}
C.aI6.prototype={}
C.V2.prototype={
U(){return new C.bje(new B.cw(null,x.z),B.a([],x.au),A.av,A.c)}}
C.bje.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aI(s,s,s,s,D.qf,s,s,s,new C.dSv(t,d),s,s,s,s,"Share",s)],r),p=B.bv(B.m(18),new B.eJ(B.aB(s,B.b3(s,s,s,new C.blb(t.e,t.x,s),A.fG),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dSw(t),new C.dSx(t),s,s,s,s,s,s,s,s,s,new C.dSy(t),s,s,s,s,!1,A.a5),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.cTv[w]
u=!t.w&&t.f.A(0,v)
o.push(new C.Fg(v,u,new C.dSz(t,v),!1,s))}u=t.r
return C.ow(A.bD,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bT,p,s),"DRAW PAD",B.w(B.a([new C.hn(o,s,s),C.lO(A.bD,""+A.k.V(u),"Brush",30,2,new C.dSA(t),u),new C.hn(B.a([new C.f4("Eraser",t.w,new C.dSB(t),A.Gi,A.bD,s),new C.j6(A.rm,"Undo",new C.dSC(t),A.c,s),new C.j6(A.eb,"Clear",new C.dSD(t),A.c,s),new C.j6(A.O0,"Paper",new C.dSE(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.P,0,A.p))}}
C.blb.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.X()
w=B.N()
w.r=this.c.gp(0)
d.b1(new B.a9(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.L)(w),++s){r=w[s]
q=$.X()
p=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bV
p.e=A.hr
p.b=A.ag
m=r.c
if(m.length===1){q=A.d.gH(m)
m=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
m.r=o.gp(o)
l=m.L()
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
l=p.L()
q=k.e
u.drawPath((q==null?k.e=new B.cC(k.gbE().a.snapshot()):q).a,l)
l.delete()}}},
aw(d){return!0}}
C.VL.prototype={
U(){var w=x.S
return new C.aE2(B.aY(w),B.aY(w))}}
C.aE2.prototype={
a_(){this.a1()
this.axs()},
axs(){var w,v,u=this,t=x.N,s=B.bo(D.dgO,!0,t)
A.d.CU(s)
w=x.S
v=B.S(s).c
t=B.C(B.d0(s,0,B.dB(u.d,"count",w),v),t)
A.d.v(t,B.d0(s,0,B.dB(u.d,"count",w),v))
A.d.CU(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
c8r(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
C.pZ("bell",12+A.o.E(d,9),150,0.35)
s.m(new C.egP(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gak(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bN(A.na,new C.egQ(s,v,u),t)
else{s.x=!0
B.bN(A9.FB,new C.egR(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.U7,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.an(p,2)+" / "+o
o=x.p
p=B.w(B.a([new B.D(A.y6,B.B(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aS:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.iv,A.j,0,q,q),q),B.E(B.iw(!0,q,q,A.y,new B.hP(v,8,8,1,q),new C.egV(r),r.e.length,A.bj,q,A.af,!1),1)],o),A.m,q,A.e,A.j,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.cUY[t]
o.push(new C.f4(s.b,r.d===s.a,new C.egW(r,s),q,A.aR,q))}o.push(new C.j6(D.bJo,"New game",new C.egX(r),A.bo,q))
return C.ow(A.aR,A.hT,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new C.hn(o,q,q))}}
C.VV.prototype={
U(){return new C.aEl(B.a([],x.t))}}
C.aEl.prototype={
c8v(d){A.d.a8(this.d)
this.w=!0
this.aZF()},
aZF(){this.d.push(A.cW.ar(4))
this.e=0
this.ZZ()},
ZZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eqK(t))
s=x.H
w=3
return B.b(B.bN(A.lW,null,s),$async$ZZ)
case 3:r=t.d,q=B.bo(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aSV(n)
w=7
return B.b(B.bN(new B.bb(1000*Math.max(280,600-r.length*18)),null,s),$async$ZZ)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eqL(t))
case 1:return B.h(u,v)}})
return B.i($async$ZZ,v)},
aSV(d){this.m(new C.eqI(this,d))
C.pZ("marimba",D.c1F[d]+5,450,0.55)
B.bN(A.Fz,new C.eqJ(this),x.H)},
c8x(d){var w,v,u=this
if(!u.w||u.r)return
u.aSV(d)
w=u.d
v=u.e
if(w[v]!==d){E.dX(90,"",600,0,0.5,"saw")
u.m(new C.eqM(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.eqN(u))
B.bN(A.io,new C.eqO(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,K.aRl,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fjs,A.L,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.awA[v]
u=u.j(q.f===v?1:0.35)
t=new B.aQ(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.awA[v].j(0.8),A.J,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.q,-1)
l.push(B.aB(p,B.db(p,p,p,p,A.b8,new B.o(u,p,new B.bJ(r,r,r,r),new B.bk(t,t,t,t),s,p,A.n),A.js,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eqP(q,v),p,p,p,p,p,p,!1,A.a5))}o=B.at(new B.D(A.a9,B.w(B.a([o,A.al,n,A.d5,new B.fK(1,B.kG(1,l,2,12,12,p,A.dO,!1),p)],m),A.m,p,A.b7,A.j,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return C.ow(A.bH,A.hT,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new C.hn(B.a([new C.j6(A.is,n,q.gc8u(q),A.bo,p)],m),p,p))}}
C.We.prototype={
U(){return new C.bkp(new B.aq(A.at,$.ax()))}}
C.bkp.prototype={
avS(d){return B.oM(A.k.ab(d,2),B.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eEB(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.d6(B.aM(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eEK()
l=B.aL(m,A.U,!1,m,!0,A.r,m,B.aN(),l,m,m,m,m,m,2,B.br(m,m,m,m,m,m,m,m,!0,new B.b4(4,B.m(16),A8.xe),m,m,m,m,m,m,m,m,m,m,m,new B.b4(4,B.m(16),D.b_e),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lG,"Bill amount",!0,!0,!1,m,m,m,m,D.fgX,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,A.dX,m,m,m,1,m,m,!1,"\u2022",m,new C.eEG(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aQn,!0,A.a6,m,A.an,m,m,m,m)
k=A.bo.j(0.1)
s=B.m(20)
r=B.I(A.bo.j(0.35),A.q,1)
q=x.p
s=B.cs(B.a([l,A.bv,B.p(m,B.w(B.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.avS(w)),t.$2("Total","$"+n.avS(v)),T.Mk,t.$3$big("Each of "+n.f+" pays","$"+n.avS(u),!0)],q),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bQ,m,m,m)],q),m,A.fa,m,m,A.af,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cFF[p]
r.push(new C.f4(""+o+"%",A.k.V(n.e)===o,new C.eEH(n,o),m,A.bo,m))}l=n.f
return C.ow(A.bo,A.hT,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.w(B.a([new C.hn(r,"TIP",m),C.lO(A.aR,""+l,"People",20,1,new C.eEI(n),l),new C.hn(B.a([new C.f4("Round up",n.r,new C.eEJ(n),m,A.aS,m)],q),m,m)],q),A.m,m,A.e,A.P,0,A.p))}}
C.VK.prototype={
U(){var w=B.a([3,5],x.t)
return new C.bjV(w,A.cW,$,A.bE,0,B.a([],x.X),null,null)}}
C.bjV.prototype={
a_(){this.a1()
this.p_()},
pY(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.E(A.k.bm(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.ar(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.ar(6)+1)
u.f=t
C.a8e("snare",0.5)}u.m(new C.efU())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.ht()
u.w=t
u.x=t?0:3.141592653589793
C.pZ("bell",24,400,0.5)}u.m(new C.efV())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bd3(v,o.r>0,n))}u=B.aB(n,B.at(B.bV(A.fW,m,A.bs,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.efN(o),n,n,n,n,n,n,!1,A.a5)}else if(m==="coin"){t=A.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.I(A.d8,A.q,6)
s=B.a([new B.ac(0,A.G,A.aS.j(0.4),A.J,30)],x.V)
u=B.aB(n,B.at(B.ed(A.A,B.p(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fga,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.ekY,A.a4),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.efO(o),n,n,n,n,n,n,!1,A.a5)}else{m=o.as
u=B.aB(n,B.at(B.w(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.f5y,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kP,n,n,n)],x.p),A.m,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.efP(o),n,n,n,n,n,n,!1,A.a5)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.d9g[r]
v.push(new C.f4(q.b,o.d===q.a,new C.efQ(o,q),q.c,A.by,n))}v=B.a([new C.hn(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(C.lO(A.by,""+s,"Dice",4,1,new C.efR(o),s))}if(o.d==="num"){s=o.z
s=C.lO(A.by,""+s,"From",100,1,new C.efS(o),s)
p=o.Q
A.d.v(v,B.a([s,C.lO(A.by,""+p,"To",1000,2,new C.efT(o),p)],m))}return C.ow(A.by,A.hT,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.w(v,A.m,n,A.e,A.P,0,A.p))}}
C.bd3.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cW.am()-0.5)*0.6
else w=0
v=B.m(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cz,14)],x.V)
t=B.a([],x.p)
for(s=D.dso.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bK(s[q],p,p,B.p(p,p,A.f,p,p,L.abP,p,18,p,p,p,p,p,18),p))
return B.eG(A.A,w,B.p(p,new B.an(A.V,p,A.aa,A.r,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bC,p,p,100),p)}}
C.aLa.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.bwJ.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bva()}}
C.aLr.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.bwN.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bvs()}}
C.aLT.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.bwV.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bvV()}}
C.aMi.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.bx2.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bwk()}}
C.b6F.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aEA.h(0,t)
$.arU=s==null?"music":s
s=v.d
w=x.p
t=B.a([B.aI(u,u,u,u,Q.nn,u,u,u,new C.cuh(d),u,u,u,u,u,u),B.E(B.d(t,u,1,A.a1,u,u,u,B.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(B.aI(u,u,u,u,B.W(A.O3,s,u,u,u,22),u,u,u,new C.cui(v,d),u,u,u,u,"How to play",u))
w=B.a([new B.D(D.byP,B.B(t,A.m,u,A.e,A.j,0,u,u),u),B.E(v.f,1)],w)
w.push(B.p(u,v.r,A.f,u,u,new B.o(F.AX,u,new B.bJ(new B.ay(A.c.j(0.08),1,A.q,-1),A.X,A.X,A.X),u,u,u,A.n),u,u,u,u,A.FE,u,u,1/0))
return B.c4(u,A.bZ,B.bm(!0,B.w(w,A.m,u,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0),u,!1,!1,u,u)}}
C.f4.prototype={
B(d){var w,v,u,t=this,s=null,r=B.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=B.I(o,A.q,q?1.6:1)
w=x.p
v=B.a([],w)
u=t.f
if(u!=null)A.d.v(v,B.a([B.W(u,q?t.r:A.aQ,s,s,s,16),A.ei],w))
v.push(B.d(t.c,s,s,s,s,s,s,B.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new B.D(F.tQ,B.aB(s,B.db(s,B.B(v,A.m,s,A.e,A.P,0,s,s),s,s,A.b8,new B.o(p,s,o,r,s,s,A.n),A.eL,s,s,s,A.ha,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cud(t),s,s,s,s,s,s,!1,A.a5),s)}}
C.hn.prototype={
B(d){var w=null,v=B.a([],x.p),u=this.d
if(u!=null)v.push(new B.a7(54,w,B.d(u,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(B.E(B.cc(B.B(this.c,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aM),1))
return new B.D(A.cu,B.B(v,A.m,w,A.e,A.j,0,w,w),w)}}
C.b6G.prototype={
B(d){var w,v,u=this,t=null,s=B.d(u.c,t,t,t,t,t,t,B.l(t,t,A.c.j(0.7),t,t,t,t,t,t,t,t,11.5,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),r=u.w
r=B.avn(d).cJP(r,A.bz,r.j(0.2),r,3.5)
w=u.f
v=u.r
r=B.E(B.aa1(B.l2(t,t,t,v,w,u.e,A.k.D(u.d,w,v)),r),1)
return new B.a7(t,34,B.B(B.a([new B.a7(78,t,s,t),r,new B.a7(38,t,B.d(u.x,t,t,t,t,t,t,A.Jo,A.dQ,t,t),t)],x.p),A.m,t,A.e,A.j,0,t,t),t)}}
C.j6.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new B.D(F.tQ,B.aF(!1,A.a2,!0,B.m(12),B.aK(!1,B.m(12),!0,new B.D(Af.ahY,B.B(B.a([B.W(w.c,u,v,v,v,17),A.ei,B.d(w.d,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.cuc(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ah),v)}}
C.Fg.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.f3U:u
w=t?A.c:A.aZ
w=B.I(w,A.q,t?2.5:1)
return B.aB(u,B.db(u,u,u,u,A.b8,new B.o(p,u,w,u,t?B.a([new B.ac(0,A.G,v.c.j(0.6),A.J,10)],x.V):u,q,A.a4),A.hl,u,r,D.ahK,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cuj(v),u,u,u,u,u,u,!1,A.a5)}}
C.qJ.prototype={
a5b(d,e){var w=B.dj()
w.seL(B.cL(B.dE(0,0,0,d,0,0),new C.cue(this,w,e)))
this.iI$.push(w.bj())},
p_(){var w=this,v=w.wr(new C.cug(w))
v.hQ(0)
w.iH$!==$&&B.aP()
w.iH$=v}}
C.ab0.prototype={
byw(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,B.L)(w),++q)for(p=A.d.gae(w[q]);p.C();){o=p.gT(0)
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
for(m=0,q=0;q<w.length;w.length===p||(0,B.L)(w),++q){for(v=A.d.gae(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gT(0)
n=J.a4(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&B.aP()
g.ax=m
w=g.bBL()
g.ay!==$&&B.aP()
g.ay=w},
bBL(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.r(s[q],1)+J.r(s[p],1))/2*3.141592653589793/180
n=J.r(s[q],0)
m=Math.cos(o)
l=J.r(s[q],1)
k=J.r(s[p],0)
j=Math.cos(o)
r+=n*m*J.r(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
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
for(k=l.y,w=k.length,v=0;v<k.length;k.length===w||(0,B.L)(k),++v){u=k[v]
for(t=u.length-1,s=!1,r=0;r<u.length;q=r+1,t=r,r=q){p=J.r(u[r],0)
o=J.r(u[r],1)
n=J.r(u[t],0)
m=J.r(u[t],1)
if(o>f!==m>f&&e<(n-p)*(f-o)/(m-o)+p)s=!s}if(s)return!0}return!1}}
C.ab1.prototype={
cFI(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,B.L)(v),++s){r=v[s]
if(r.FI(0,w,e)){if(t!=null){q=r.ax
q===$&&B.c()
p=t.ax
p===$&&B.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
C.v7.prototype={}
C.Pc.prototype={}
C.y7.prototype={}
C.Pb.prototype={
fq(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.c1q[w.ar(7)]
w=w.ht()?0:12
u=A.o.E(t.c++,3)===0?"flute":"bell"
C.pZ(u,v+w-12,2200,0.1)}}
C.Vh.prototype={
U(){var w=$.ax()
return new C.aDq(new B.cw(null,x.z),new B.aq(A.at,w),new C.Pb(A.cW),D.dbh,A.az,D.a3A,$,A.bE,0,B.a([],x.X),null,null)}}
C.aDq.prototype={
a_(){var w,v=this
v.a1()
v.p_()
v.a.toString
w=$.hf1
if(w==null)w=$.hf1=C.cwT()
w.bK(new C.dXX(v),x.a)},
t(){var w=this.e
w.S$=$.ax()
w.P$=0
this.bvz()},
cth(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=B.a([],x.B)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,B.L)(v),++s){r=v[s]
q=B.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,B.L)(p),++n)q.push(new C.dXp(p[n]).$0())
w.push(q)}this.w=w},
gWb(){var w=this.fy
return w.A(0,A.az)?100:Math.min(w.a,w.b)*0.43},
atw(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.D(f,1,16)
w.Q=w.as=0},
axB(d){var w
this.fx=d
w=d.ax
w===$&&B.c()
this.atw(d.x,d.w,105/Math.max(w,3))
B.f_()
C.pZ("bell",(A.d.cD(D.a3c,d.c)+1)*3+12,900,0.45)
E.dX(300,"",280,1.4,0.15,"tri")},
pY(d){var w,v,u,t,s,r,q,p=this
p.f.fq(0,d,p.db)
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
c9b(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.az))return null
w=n.fy
v=n.gWb()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gWb()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cFI((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c9a(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new C.dXn(w))
return}w.m(new C.dXo(w,v,A.a.i(d).toLowerCase()))},
bOM(){var w=null,v=this.c
v.toString
B.cd(w,w,!0,w,new C.dXl(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=B.a([B.aI(n,n,n,n,D.bM_,n,n,n,o.gbOL(),n,n,n,n,"Earth facts",n),B.aI(n,n,n,n,D.qf,n,n,n,new C.dXI(o,d),n,n,n,n,"Share",n)],l),j=B.cA(new C.dXJ(o,m)),i=A.c.j(0.06)
i=B.a([B.aL(n,A.U,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,B.br(n,new B.b4(4,B.m(14),A.X),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,G.DP,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bUb,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc99(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.jg,!0,A.a6,n,A.an,n,n,n,n)],l)
if(o.id.length!==0){w=B.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
w.push(new C.f4(s.a,!1,new C.dXK(o,s),A.mB,A.aR,n))}i.push(new B.D(A.i7,new B.a7(n,38,B.cs(w,n,n,n,n,A.aM,!1),n),n))}i.push(A.al)
w=B.a([new C.f4("Whole Earth",!1,new C.dXO(o),A.ho,A.aR,n)],l)
for(v=D.aEz.gdR(D.aEz),v=v.gae(v);v.C();){u=v.gT(v)
w.push(new C.f4(u.a,!1,new C.dXP(o,u),n,A.aR,n))}w.push(new C.f4("Random",!1,new C.dXQ(o),A.oZ,A.aR,n))
i.push(new C.hn(w,"GO TO",n))
w=o.z
i.push(C.lO(A.aR,A.k.ab(w,1)+"x","Zoom",16,0.8,new C.dXR(o),w))
w=o.dy
i.push(C.lO(A.bH,A.a.aY(A.o.u(A.k.bm(w)),2,"0")+":00","Time",24,0,new C.dXS(o),w))
w=o.fr
i.push(C.lO(A.bo,o.cs1(),"Season",365,0,new C.dXT(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.m_:D.Gz
i.push(new C.hn(B.a([new C.f4("Spin",w,new C.dXU(o),D.bHi,A.aR,n),new C.f4("Night",v,new C.dXV(o),A.w_,A.aR,n),new C.f4("Borders",u,new C.dXL(o),D.bHm,A.aR,n),new C.f4("Names",r,new C.dXM(o),T.C0,A.aR,n),new C.f4("Music",q,new C.dXN(o),p,A.aR,n)],l),n,n))
return C.ow(A.aR,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",B.w(i,A.m,n,A.e,A.P,0,A.p))},
cs1(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.axd[u])v=u
return A.it[v]+" "+(A.k.bm(w-D.axd[v])+1)},
c98(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&B.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new M.vL(1,A.o.E((A.d.cD(D.a3c,t)+1)*47,360),0.55,1).m_()
r=new C.dXj()
q=B.m(20)
p=B.I(s.j(0.6),A.q,1)
o=x.p
n=B.B(B.a([B.p(j,j,A.f,j,j,new B.o(s,j,j,j,j,j,A.a4),j,10,j,j,j,j,j,10),A.ab,B.E(B.d(d.a,j,1,A.a1,j,j,j,A.df,j,j,j),1),B.aI(j,j,j,j,A.GT,j,j,j,new C.dXi(this),j,j,j,j,j,A.cc)],o),A.m,j,A.e,A.j,0,j,j)
m=d.d
t=B.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hf,j,j,j)
m=D.dr1.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=B.B(B.a([m,A.ab,r.$2("PEOPLE",l?C.fur(v):"\u2014")],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("SIZE",C.GS(i)+" km\xb2")
if(l)m=(w<10?A.k.ab(w,1):C.GS(w))+" per km\xb2"
else m="\u2014"
m=B.B(B.a([i,A.ab,r.$2("CROWDING",m)],o),A.m,j,A.e,A.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.ab(u,3):A.k.ab(u,1))+"% of people")
l=d.f
k=d.r
return B.p(j,B.w(B.a([n,t,A.N,v,A.N,m,A.N,B.B(B.a([i,A.ab,r.$2("ECONOMY",l>0?"$"+C.fur(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.j,0,j,j)],o),A.E,j,A.e,A.P,0,A.p),A.f,j,j,new B.o(D.Wz,j,p,q,j,j,A.n),j,j,j,j,D.aig,j,j,j)}}
C.bfh.prototype={
a6(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.X(),d7=B.N()
d7.r=D.AT.gp(0)
d8.b1(new B.a9(0,0,0+d4,0+d5),d7)
w=new B.ez()
w.dr(4)
for(d7=d8.a,v=0;v<90;++v){u=w.am()
t=w.am()
s=w.am()
r=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
r.r=A.c.j(0.25+w.am()*0.5).gp(0)
q=r.L()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new B.x(d4,d5)
o=d2.f
u=B.N()
t=x.O
u.sau(new B.c_(A.A,0.5,A.x,d3,0,B.a([A.K,A.aR.j(0.35),A.K],t),D.cWw,d3).aA(0,B.bU(p,o*1.1)))
d8.af(p,o*1.05,u)
n=B.bU(p,o)
u=B.N()
u.sau(D.el1.aA(0,n))
d8.af(p,o,u)
J.bx(d7.save())
u=x.v
d6=new B.aO(d6.r,A.ao,d3,d3,B.a([],u))
d6.F(new B.jQ(n))
d8.pE(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=B.N()
g.b=A.ag
m=g.c=0.7
g.r=A.c.j(0.1).gp(0)
f=new C.deY(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.L()
s=d.e
d7.drawPath((s==null?d.e=new B.cC(d.gbE().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.X()
a3=B.a([],u)
d=new B.aO(a2.r,A.ao,d3,d3,a3)
a3.push(new B.b5(s,r))}else{s=new B.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bA(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.L()
d6=d.e
d7.drawPath((d6==null?d.e=new B.cC(d.gbE().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.L()
s=d.e
d7.drawPath((s==null?d.e=new B.cC(d.gbE().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.X()
a3=B.a([],u)
d=new B.aO(a2.r,A.ao,d3,d3,a3)
a3.push(new B.b5(s,r))}else{s=new B.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bA(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.L()
d6=d.e
d7.drawPath((d6==null?d.e=new B.cC(d.gbE().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=B.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.E((A.d.cD(D.a3c,a7.c)+1)*47,360)
$.X()
b0=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a3=a8?0.35:0.5
b0.r=new M.vL(1,a9,a3,a8?1:0.62).m_().gp(0)
b1=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
b1.b=A.ag
b1.c=a8?2.2:m
b1.e=A.hr
b1.r=(a8?A.c:A.w.j(0.55)).gp(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,B.L)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.X()
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
q=b0.L()
b6=b8.e
d7.drawPath((b6==null?b8.e=new B.cC(b8.gbE().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.L()
b6=b8.e
d7.drawPath((b6==null?b8.e=new B.cC(b8.gbE().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,B.L)(a5),++b3){d=a5[b3]
$.X()
s=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
s.b=A.ag
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.uy
q=s.L()
s=d.e
d7.drawPath((s==null?d.e=new B.cC(d.gbE().a.snapshot()):s).a,q)
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
c9=C.hOf(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbg(b2)
c9.a6(d8,new B.x(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.D(k*c0+j*c1*c4,-1,1)
$.X()
u=B.N()
u.sau(new B.c_(A.A,0.5,A.x,d3,0,B.a([A.K,A.K,D.ba5.j(0.78)],t),D.dbG,d3).aA(0,B.bU(new B.x(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.af(p,o,u)}$.X()
d4=B.N()
d4.sau(new B.c_(A.A,0.5,A.x,d3,0,B.a([A.K,A.w.j(0.4)],t),D.doz,d3).aA(0,n))
d8.af(p,o,d4)
d7.restore()
d7=B.N()
d7.b=A.ag
d7.c=1.4
d7.r=A.hk.j(0.5).gp(0)
d8.af(p,o,d7)},
aw(d){return!0}}
C.aLw.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.aLx.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bvy()}}
C.btA.prototype={}
C.Wh.prototype={
U(){return new C.bkt()}}
C.bkt.prototype={
gaSu(){var w=this.d
if(w===$)w=this.d=A.cW.ar(16)
return w},
B(d){var w=null,v=B.eD(w,w,w,!0,!0,D.AT,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,D.ao5,w,w,w,new C.eFu(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fDr,w,w,w,1,w,!0),u=B.m(18),t=A.aR.j(0.1),s=B.I(A.aR.j(0.35),A.q,1),r=x.p
return B.c4(v,D.AT,B.cs(B.a([B.p(w,B.B(B.a([D.bKH,A.as,B.E(B.d(D.d_t[this.gaSu()],w,w,w,w,w,w,D.fkp,w,w,w),1),B.aI(w,w,w,w,D.bVb,w,w,w,new C.eFv(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bC,w,w,w),A.aA,B.cA(new C.eFw())],r),w,A.Ze,w,w,A.af,!1),w,!1,!1,w,w)}}
C.W3.prototype={
U(){return C.hOH()}}
C.bkg.prototype={
cjK(d){var w=d.c,v=C.hOJ(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new B.x(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a1()
this.p_()},
pY(d){var w,v,u,t=this
t.e.fq(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cjK(w)
u=new B.x(-v.a,-v.b).aI(0,t.w)
v=B.ks(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc9c(){var w=this.ch
return new B.x(w.a/2,w.b/2).ad(0,this.x)},
c9g(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.CI[s]
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
b_0(d){this.m(new C.exY(this,d))
B.f_()
C.pZ("bell",D.doM[A.o.E(A.d.cD(D.CI,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=B.a([B.aI(m,m,m,m,D.qf,m,m,m,new C.ey8(n,d),m,m,m,m,"Share",m)],k),i=B.cA(new C.ey9(n,l)),h=B.a([new C.f4("All",!1,new C.eya(n),A.a1e,A.aS,m)],k)
for(w=0;w<10;++w){v=D.CI[w]
h.push(new C.f4(v.a,n.z===v,new C.eyb(n,v),m,B.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.ab(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=C.lO(A.aS,s,"Time",1,0,new C.eyc(n),u/t)
u=n.w
u=C.lO(A.aS,A.k.ab(u,1)+"x","Zoom",9,0.5,new C.eyd(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.m_:D.Gz
return C.ow(A.aS,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",B.w(B.a([new C.hn(h,"GO TO",m),t,u,new C.hn(B.a([new C.f4("Orbits",s,new C.eye(n),m,A.aS,m),new C.f4("Names",r,new C.eyf(n),m,A.aS,m),new C.f4("Asteroids",q,new C.eyg(n),m,A.aS,m),new C.f4("Music",p,new C.eyh(n),o,A.aS,m)],k),m,m)],k),A.m,m,A.e,A.P,0,A.p))},
c9d(d){var w,v,u,t,s,r=null,q=B.b0(d.z),p=d.c,o=p*8.317,n=new C.exW(),m=B.m(20),l=B.I(q.j(0.6),A.q,1),k=B.p(r,r,A.f,r,r,new B.o(q,r,r,r,r,r,A.a4),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=B.B(B.a([k,A.ab,B.E(B.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.jY,r,r,r),1),B.aI(r,r,r,r,A.GT,r,r,r,new C.exV(this),r,r,r,r,r,A.cc)],w),A.m,r,A.e,A.j,0,r,r)
k=B.d(d.y,r,r,r,r,r,r,F.DQ,r,r,r)
v=n.$2("WIDTH",C.GS(d.d*2)+" km")
u=p===0
p=B.B(B.a([v,A.ab,n.$2("FROM THE SUN",u?"\u2014":B.u(p)+" AU ("+C.GS(p*149.6)+" million km)")],w),A.m,r,A.e,A.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new C.exX().$1(v))
t=d.f
v=B.B(B.a([v,A.ab,n.$2("ONE DAY",t>=48?A.k.ab(t/24,0)+" Earth days":A.k.ab(t,1)+" hours")],w),A.m,r,A.e,A.j,0,r,r)
t=d.r
s=t>50?0:1
s=B.B(B.a([n.$2("GRAVITY",B.u(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.ab(50*t/9.81,s)+" kg"),A.ab,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.ab(o,1)+" minutes":A.k.ab(o/60,1)+" hours"
return B.p(r,B.w(B.a([j,A.au,k,A.N,p,A.N,v,A.N,s,A.N,B.B(B.a([t,A.ab,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.j,0,r,r)],w),A.E,r,A.e,A.P,0,A.p),A.f,r,r,new B.o(D.Wz,r,l,m,r,r,A.n),r,r,r,r,D.aig,r,r,r)}}
C.brD.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.X()
w=B.N()
w.r=D.AT.gp(0)
a7.b1(new B.a9(0,0,0+a5,0+a6),w)
v=new B.ez()
v.dr(8)
for(w=a7.a,u=0;u<110;++u){t=v.am()
s=v.am()
r=v.am()
q=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.am()*0.5).gp(0)
p=q.L()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc9c()
n=a5.w
if(a5.as)for(a6=A.d.gae(D.CI),t=new B.f5(a6,new C.eZT()),s=o.a,r=o.b;t.C();){q=a6.gT(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
m.b=A.ag
m.c=1
m.r=A.c.j(0.12).gp(0)
p=m.L()
w.drawCircle(s,r,q*n,p)
p.delete()}if(a5.ax)for(a6=a5.CW,t=o.a,s=o.b,r=a5.cx,u=0;u<a6.length;++u){q=a6[u]
m=a5.f
l=r[u]
k=q+m*0.0016/l
j=(l===0?0:30+150*Math.sqrt(l/30.1))*n
q=Math.cos(k)
m=Math.sin(k)
l=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
l.r=A.c.j(0.5).gp(0)
p=l.L()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=C.hOI(A.d.gH(D.CI))*Math.sqrt(n)*1.4
a6=i*3.2
t=B.N()
s=x.O
t.sau(new B.c_(A.A,0.5,A.x,a4,0,B.a([A.aS.j(0.5),A.K],s),a4,a4).aA(0,B.bU(o,a6)))
a7.af(o,a6,t)
t=B.N()
t.sau(D.ekW.aA(0,B.bU(o,i)))
a7.af(o,i,t)
if(a5.at){h=C.hgE("Sun",10.5,A.ad)
h.a6(a7,o.ad(0,new B.x(-h.b.c/2,i+4)))}for(a6=A.d.gae(D.CI),t=new B.f5(a6,new C.eZU()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gT(0)
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
a0=B.cj(A.J,j*1.3,j*4.2)
a1=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a1.b=A.ag
a1.c=j*0.45
a1.r=A.bL.j(0.55).gp(0)
p=a1.L()
w.drawOval(B.bW(a0),p)
p.delete()
w.restore()}a0=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a0.r=e.j(0.3).gp(0)
a0.z=A.uy
p=a0.L()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a1=B.ar(e,A.w,0.55)
a1.toString
a0.sau(new B.c_(V.xa,0.5,A.x,a4,0,B.a([A.c,e,a1],s),I.a2P,a4).aA(0,B.bU(new B.x(g,f),j)))
p=a0.L()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
l.b=A.ag
l.c=2
l.r=A.c.gp(0)
p=l.L()
w.drawCircle(g,f,j+7,p)
p.delete()}if(r&&d==="Earth"){k=a5.f/27.3*2*3.141592653589793
a2=j+11*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a3.r=A.c.gp(0)
p=a3.L()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.d4P[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a3.r=A.ad.gp(0)
p=a3.L()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=C.hgE(d,10.5,A.ad)
h.a6(a7,new B.x(g+-h.b.c/2,f+(j+4)))}}},
aw(d){return!0}}
C.Vi.prototype={
U(){var w=x.i
return new C.aDr(new C.Pb(A.cW),B.c3(5,0,!1,w),B.c3(5,0,!1,w),B.c3(5,null,!1,x.cD),A.J,A.J,B.a([],x.g),$,A.bE,0,B.a([],x.X),null,null)}}
C.aDr.prototype={
cwz(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c9f(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.e9C
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
s.m(new C.dY0())},
a_(){this.a1()
this.p_()},
pY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fq(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.z9[r]
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
break}}}if(A.d.d8(s,new C.dYt()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
if(v.length===0||A.d.gak(v).aF(0,i.cx).gcH()>120)v.push(i.cx)
if(v.length>700)A.d.cG(v,0)
if(i.cx.gcH()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bMS()
else n=n==="weight"?p.cDT():p.bF1()
w=x.p
v=B.a([],w)
for(u=0;u<3;++u){t=D.dlK[u]
v.push(new C.f4(t.b,p.d===t.a,new C.dYf(p,t),t.c,A.cY,o))}v=B.a([new C.hn(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=B.a([new C.f4("Hammer",!s,new C.dYg(p),Ae.Gu,A.cY,o),new C.f4("Feather",s,new C.dYh(p),T.NL,A.cY,o),new C.f4(q,r,new C.dYl(p),A.Gj,A.aR,o)],w)
q=p.w
A.d.v(v,B.a([new C.hn(r,o,o),C.lO(A.cY,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new C.dYm(p),q),new C.hn(B.a([new C.j6(A.u4,"Drop!",new C.dYn(p),A.bo,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=C.lO(A.cY,""+A.k.V(s)+" kg","Your weight",120,20,new C.dYo(p),s)
r=p.ax
A.d.v(v,B.a([s,C.lO(A.cY,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new C.dYp(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=C.lO(A.cY,A.k.ab(s,1)+" km/s","Speed",13,0,new C.dYq(p),s)
r=p.ch
A.d.v(v,B.a([s,C.lO(A.cY,A.k.ab(r,1)+"x out","View",8,0.5,new C.dYr(p),r),new C.hn(B.a([new C.j6(A.ob,"Fire!",p.gc9e(),A.bo,o),new C.j6(A.u4,"Falls",new C.dYs(p),A.c,o),new C.j6(A.rf,"Orbit 7.7",new C.dYi(p),A.c,o),new C.j6(D.bK6,"Oval 9",new C.dYj(p),A.c,o),new C.j6(A.C3,"Escape",new C.dYk(p),A.c,o)],w),o,o)],w))}return C.ow(A.cY,A.hT,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",B.w(v,A.m,o,A.e,A.P,0,A.p))},
bMS(){return new B.D(D.btH,B.cA(new C.dY_(this)),null)},
cDT(){var w,v,u,t=null,s=[D.eL1,D.eMr,D.eMy,D.eMQ,D.eMw,D.eMX,D.eLA,D.eNk,D.eMe],r=x.p,q=B.a([D.fr7,A.R],r)
for(w=0;w<9;++w){v=s[w]
u=B.b0(v.c)
q.push(new B.D(A.cu,new B.c9(A.aM,A.e,A.j,A.m,t,A.p,t,0,B.a([new B.a7(62,t,new B.y(v.a,t,new B.F(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new B.by(1,A.bd,new B.Bs(new C.dY1(this,v),t),t)],r),t),t))}q.push(A.au)
q.push(D.ftx)
return B.cs(q,t,A.iO,t,t,A.af,!1)},
bF1(){return B.cA(new C.dXY(this))}}
C.bav.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.X(),e=B.N()
e.r=D.AT.gp(0)
d.b1(new B.a9(0,0,0+h,0+g),e)
w=new B.ez()
w.dr(2)
for(e=d.a,v=0;v<80;++v){u=w.am()
t=w.am()
s=w.am()
r=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.am()*0.5).gp(0)
q=r.L()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=B.N()
e.sau(new B.c_(A.A,0.5,A.x,i,0,B.a([A.K,A.aR.j(0.35),A.K],x.O),D.dcA,i).aA(0,B.bU(g,p*1.1)))
d.af(g,p*1.06,e)
e=B.N()
e.sau(D.ekQ.aA(0,B.bU(g,p)))
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
for(u=B.d0(u,1,i,B.S(u).c),s=u.$ti,u=new B.bQ(u,u.gK(0),s.k("bQ<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new B.ap(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bA(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.X()
f=B.N()
f.b=A.ag
f.c=2.4
f.d=A.bV
f.r=A.cY.j(0.9).gp(0)
d.aS(m,f)}if(j.f){f=j.d
k=g.ad(0,new B.x(f.a*h,f.b*h))
h=B.N()
h.r=A.cY.j(0.4).gp(0)
h.z=G.pd
d.af(k,7,h)
h=B.N()
h.r=A.c.gp(0)
d.af(k,4,h)}},
aw(d){return!0}}
C.VW.prototype={
U(){return new C.bkd(new B.cw(null,x.z),$,A.bE,0,B.a([],x.X),null,null)}}
C.bkd.prototype={
a_(){this.a1()
this.p_()},
pY(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.Qn[l.e],i=D.Qn[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=B.a([B.aI(k,k,k,k,D.qf,k,k,k,new C.eqS(l,d),k,k,k,k,"Share",k)],u)
s=B.E(B.b3(k,k,k,new C.brb(f,g,v,k),A.fG),1)
r=g.a
q=v<10?A.k.ab(v,1):C.GS(v)
p=f.a
q=B.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.hI,A.L,k,k)
o=C.GS(v*v*v)
n=A.a.cc(p,"s")?"":"s"
h=B.w(B.a([s,B.p(k,B.w(B.a([q,A.au,B.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,U.v1,A.L,k,k),A.bA,B.d(p+": "+C.GS(w*2)+" km wide. "+r+": "+C.GS(h*2)+" km wide.",k,k,k,k,k,k,U.DL,A.L,k,k)],u),A.m,k,A.e,A.j,0,A.p),A.f,k,k,k,k,k,k,k,D.bvT,k,k,1/0)],u),A.m,k,A.e,A.j,0,A.p)
r=B.a([],u)
for(m=0;m<10;++m){w=D.Qn[m]
r.push(new C.f4(w.a,l.e===m,new C.eqT(l,m),k,B.b0(w.c),k))}w=B.a([],u)
for(m=0;m<10;++m){s=D.Qn[m]
w.push(new C.f4(s.a,l.f===m,new C.eqU(l,m),k,B.b0(s.c),k))}return C.ow(A.c6,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new B.eJ(h,l.d),"SIZE COMPARE",B.w(B.a([new C.hn(r,"FIRST",k),new C.hn(w,"SECOND",k)],u),A.m,k,A.e,A.P,0,A.p))}}
C.brb.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.X()
w=B.N()
w.r=D.bgb.gp(0)
d.b1(new B.a9(0,0,0+h,0+g),w)
v=new B.ez()
v.dr(6)
for(w=d.a,u=0;u<70;++u){t=v.am()
s=v.am()
r=v.am()
q=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
q.r=A.c.j(0.2+v.am()*0.4).gp(0)
p=q.L()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new B.x(h,g)
w=new C.eY1(d)
t=this.c
w.$3(m,o,B.b0(t.c))
s=o-n
l=new B.x(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,B.b0(s.c))
w=B.N()
w.b=A.ag
w.c=1.4
w.r=A.ad.gp(0)
d.af(l,n+3,w)
k=B.h2(i,i,i,i,B.d1(i,i,i,i,i,i,i,i,i,D.fcq,s.a),A.a6,A.cb,i,A.dS,A.c7)
k.eQ()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbg(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbg(g)-6
h=g}k.a6(d,l.ad(0,new B.x(-w/2,h)))
j=B.h2(i,i,i,i,B.d1(i,i,i,i,i,i,i,i,i,D.ffK,t.a),A.a6,A.cb,i,A.dS,A.c7)
j.eQ()
t=j.b
h=t.c
t=t.a.c
j.a6(d,m.ad(0,new B.x(-h/2,-t.gbg(t)/2)))},
aw(d){return!0}}
C.aLy.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.bwP.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bvA()}}
C.aM1.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.bwY.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bw3()}}
C.aM4.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.bx_.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bw6()}}
C.PG.prototype={}
C.Un.prototype={
U(){return C.hOF()}}
C.biY.prototype={
a_(){this.a1()
this.p_()},
pY(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fq(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dX(70,"",500,0.3,0.5,"sine")}}A.d.bs(w,new C.dGg())},
b_1(d){var w,v,u,t=this.Q
if(t.A(0,A.az))return
w=this.gb80()
v=d.aF(0,new B.x(t.a/2,t.b*0.42))
u=A.k.D(v.gcH()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new C.PG(t,u,1.2,new B.vK(1,30+A.cW.am()*40,0.9,0.7).m_()))
C.pZ("bell",60+A.k.V(12-u)*2,400,0.35)},
gb80(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.D(m.length===0?3:new B.M(m,new C.dG4(),B.S(m).k("M<1,K>")).f9(0,A.vm),1.0001,99))
m=x.p
w=B.a([B.aI(n,n,n,n,D.qf,n,n,n,new C.dG5(o,d),n,n,n,n,"Share",n)],m)
v=B.cA(new C.dG6(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.ab(s,0)+" Suns":C.fur(s)+" Suns"
t=C.lO(A.by,s,"Mass",1,0,new C.dG8(o),u/t)
u=B.a([new C.f4("Star (10)",!1,new C.dG9(o),n,A.by,n),new C.f4("Cygnus X-1 (21)",!1,new C.dGa(o),n,A.by,n),new C.f4("Milky Way core (4 million)",!1,new C.dGb(o),n,A.by,n),new C.f4("M87 (6.5 billion)",!1,new C.dGc(o),n,A.by,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.m_:D.Gz
return C.ow(A.by,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",B.w(B.a([t,new C.hn(u,"LIKE",n),new C.hn(B.a([new C.f4("Glowing ring",s,new C.dGd(o),n,A.by,n),new C.f4("Bent light",r,new C.dGe(o),n,A.by,n),new C.f4("Music",q,new C.dGf(o),p,A.by,n),new C.j6(A.o8,"Clear",new C.dG7(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.P,0,A.p))},
aeN(d,e){var w=null
return B.E(B.w(B.a([B.d(d,w,w,w,w,w,w,D.f89,w,w,w),A.bA,B.d(e,w,2,w,w,w,w,H.zZ,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),1)}}
C.b9U.prototype={
a6(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.X()
w=B.N()
w.r=D.bip.gp(0)
b2.b1(new B.a9(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new B.x(w,v)
t=this.b
s=t.gb80()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,B.L)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new B.x(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.D(o/h,0,n)
i=new B.x(w+k/h*g,v+j/h*g)}}k=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
k.r=A.c.j(0.6).gp(0)
f=k.L()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=B.N()
b0.b=A.ag
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=Q.RB
b2.af(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=B.ar(A.vt,A.fn,d)
n.toString
k=Math.cos(a4)
$.X()
j=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gp(0)
f=j.L()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
k.r=n.j(b1).gp(0)
f=k.L()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.X()
b1=B.N()
b1.sau(new B.c_(A.A,0.5,A.x,null,0,B.a([A.w,A.w.j(0)],x.O),D.cRu,null).aA(0,B.bU(u,b0)))
b2.af(u,b0,b1)
b1=B.N()
b1.r=A.w.gp(0)
b2.af(u,s,b1)
b1=B.N()
b1.b=A.ag
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
n=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
n.c=4.2/Math.sqrt(a8)
n.d=A.bV
k=a7.d
n.r=k.j(A.k.D(a7.b/2,0.2,1)).gp(0)
f=n.L()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
o.r=k.j(0.2).gp(0)
o.z=G.pd
f=o.L()
p.drawCircle(t,r,6,f)
f.delete()}},
aw(d){return!0}}
C.aeH.prototype={}
C.Vf.prototype={
U(){var w=x.r,v=x.g
return new C.bjo(new B.cw(null,x.z),new C.Pb(A.cW),B.a([],w),A.J,A.J,B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.a([],v),A.J,A.J,$,A.bE,0,B.a([],x.X),null,null)}}
C.bjo.prototype={
a_(){this.a1()
this.a_b()
this.p_()},
a_b(){var w,v,u,t,s,r,q,p,o=this,n=new B.ez()
n.dr(5)
w=B.a([],x.r)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.am(),1.6)
w.push(new C.aeH(t,n.am()*3.141592653589793*2,(n.am()-0.5)*0.5*t,25+n.am()*20))}else{t=Math.pow(n.am(),0.8)
s=n.ar(o.f)
r=n.am()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.ht()?0:3.141592653589793
q=r+(n.am()-0.5)*0.25}r=n.am()
p=t<0.25?35+n.am()*15:205+n.am()*50
w.push(new C.aeH(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cwp(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.eb5
k.cx=D.eb8
w=new B.ez()
w.dr(9)
v=k.cy
A.d.a8(v)
u=B.a([],x.r)
for(t=0;t<900;++t)u.push(new C.aeH(Math.pow(w.am(),0.8)*0.7,w.am()*3.141592653589793*2,0,320+w.am()*30))
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
for(s=k.ay,r=x.S,s=B.d0(s,0,B.dB(900,"count",r),B.S(s).c),o=s.$ti,s=new B.bQ(s,s.gK(0),o.k("bQ<ak.E>")),o=o.k("ak.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new B.x(l*n,Math.sin(m)*n))}k.db=v
v=B.a([],u)
for(u=k.ay,u=B.d0(u,0,B.dB(900,"count",r),B.S(u).c),r=u.$ti,u=new B.bQ(u,u.gK(0),r.k("bQ<ak.E>")),r=r.k("ak.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new B.x(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.J
E.dX(110,"",900,0.5,0.45,"sine")},
pY(d){var w,v,u,t,s,r,q,p=this
p.e.fq(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aF(0,p.fx)
s=Math.max(0.25,t.gcH())
r=t.eS(0,s).aI(0,0.9/(s*s))
w=p.fy.ad(0,r.aI(0,u))
p.fy=w
v=p.cx.aF(0,r.aI(0,u))
p.cx=v
w=p.fx.ad(0,w.aI(0,u))
p.fx=w
v=p.CW.ad(0,v.aI(0,u))
p.CW=v
q=new C.dWK(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=B.a([B.aI(r,r,r,r,D.qf,r,r,r,new C.dWA(s,d),r,r,r,r,"Share",r)],q),o=B.b3(r,r,r,new C.bf8(s,r),A.az),n=A.w.j(0.5),m=B.m(14),l=B.I(A.bz,A.q,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=B.a([o,B.ao(8,B.p(r,B.d(w,r,r,r,r,r,r,Ab.a8b,r,r,r),A.f,r,r,new B.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bT,r,r,r),r,r,10,10,r,r)],q)
l=B.a([],q)
for(v=0;v<3;++v){u=D.d82[v]
o=s.Q===u.a&&!s.ch
l.push(new C.f4(u.b,o,new C.dWB(s,u),r,A.h7,r))}l.push(new C.f4("Collide",s.ch,new C.dWC(s),A.yw,A.c6,r))
o=B.a([new C.hn(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=C.lO(A.h7,""+n,"Arms",6,2,new C.dWD(s),n)
l=s.r
A.d.v(o,B.a([n,C.lO(A.h7,A.k.ab(l,1),"Winding",6,0.8,new C.dWE(s),l)],q))}n=s.as
o.push(C.lO(A.h7,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new C.dWF(s),n))
n=s.ax
o.push(C.lO(A.h7,A.k.ab(n,1)+"x","Speed",4,0,new C.dWG(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.m_:D.Gz
o.push(new C.hn(B.a([new C.f4("Dark matter",n,new C.dWH(s),r,A.by,r),new C.f4("You are here",l,new C.dWI(s),r,A.aS,r),new C.f4("Music",w,new C.dWJ(s),t,A.h7,r)],q),r,r))
return C.ow(A.h7,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new B.eJ(new B.an(A.V,r,A.b2,A.r,m,r),s.d),"GALAXY",B.w(o,A.m,r,A.e,A.P,0,A.p))}}
C.bf8.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.X()
w=B.N()
w.r=D.bkv.gp(0)
a3.b1(new B.a9(0,0,0+a1,0+a2),w)
v=new B.ez()
v.dr(3)
for(w=a3.a,u=0;u<90;++u){t=v.am()
s=v.am()
r=v.am()
q=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
q.r=A.c.j(0.15+v.am()*0.4).gp(0)
p=q.L()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new B.x(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=B.N()
t.sau(new B.c_(A.A,0.5,A.x,a0,0,B.a([A.aD.j(0.32),A.aD.j(0.12),A.K],x.O),D.ceT,a0).aA(0,B.bU(o,a2)))
a3.af(o,a2,t)}m=new C.dc5(a1.as)
a2=n*0.3
t=B.N()
t.sau(new B.c_(A.A,0.5,A.x,a0,0,B.a([A.fL.j(0.85),A.aF.j(0.3),A.K],x.O),a0,a0).aA(0,B.bU(o,a2)))
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
l.r=new M.vL(1,r,q>200?0.45:0.55,1).m_().j(0.35+(1-s)*0.5).gp(0)
s=s<0.3?1.3:1
p=l.L()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.X()
a2=B.N()
a2.b=A.ag
a2.c=1.6
a2.r=A.aS.gp(0)
a3.af(g,9,a2)
f=B.h2(a0,a0,a0,a0,D.f58,A.a6,A.cb,a0,A.dS,A.c7)
f.eQ()
f.a6(a3,g.ad(0,new B.x(-f.b.c/2,12)))}}else{e=n*0.8
l=B.N()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.L)(a2),++k){d=a2[k]
l.r=D.blL.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.L()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.L)(a2),++k){d=a2[k]
l.r=D.bgu.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.L()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.X()
w=B.N()
w.r=A.fL.gp(0)
a3.af(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=B.N()
w.r=A.i2.gp(0)
a3.af(a1,5,w)}},
aw(d){return!0}}
C.VS.prototype={
U(){return new C.bkc(new B.cw(null,x.z),new C.Pb(A.cW),$,A.bE,0,B.a([],x.X),null,null)}}
C.bkc.prototype={
a_(){this.a1()
this.p_()},
pY(d){var w,v,u,t=this
t.e.fq(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.E(t.r+d*0.04*v,1)
else{w=A.k.E(t.w+d*0.05*v,1)
t.w=w
u=A.k.bm(w*4)
if(u!==A.k.bm(t.as))C.pZ("bell",60+u*4,500,0.35)
t.as=u}},
gcs0(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcik(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=B.a([B.aI(q,q,q,q,D.qf,q,q,q,new C.eq6(r,d),q,q,q,q,"Share",q)],p),n=B.E(new B.eJ(B.b3(q,q,q,new C.bqr(r,q),A.fG),r.d),1)
if(r.f==="seasons")w=r.gcs0()
else{w=r.gcik()
v=A.k.an(A.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=B.w(B.a([n,B.p(q,B.d(w,q,q,q,q,q,q,A3.U3,A.L,q,q),A.f,q,q,q,q,q,q,q,K.aip,q,q,1/0)],p),A.m,q,A.e,A.j,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A0.yG:A.is
t=r.Q
s=t?A.m_:D.Gz
s=B.a([new C.hn(B.a([new C.f4("Seasons",n==="seasons",new C.eq7(r),A.Cf,A.bu,q),new C.f4("Moon phases",n==="moon",new C.eq8(r),A.w_,A.bu,q),new C.f4(u,!1,new C.eq9(r),v,A.bu,q),new C.f4("Music",t,new C.eqa(r),s,A.bu,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=C.lO(A.bu,D.d7m[A.o.E(A.k.bm(n*12),12)],"Month",1,0,new C.eqb(r),n)
v=r.z
A.d.v(s,B.a([n,C.lO(A.bu,A.k.ab(v,1)+"\xb0","Tilt",90,0,new C.eqc(r),v)],p))}else{p=r.w
s.push(C.lO(A.bu,""+(A.k.bm(p*29.5)+1),"Day of month",1,0,new C.eqd(r),p))}p=r.y
s.push(C.lO(A.bu,A.k.ab(p,1)+"x","Speed",4,0.2,new C.eqe(r),p))
return C.ow(A.bu,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",B.w(s,A.m,q,A.e,A.P,0,A.p))}}
C.bqr.prototype={
a6(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.X(),b8=B.N()
b8.r=D.AT.gp(0)
b9.b1(new B.a9(0,0,0+b5,0+b6),b8)
w=new B.ez()
w.dr(4)
for(b8=b9.a,v=0;v<70;++v){u=w.am()
t=w.am()
s=w.am()
r=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
r.r=A.c.j(0.2+w.am()*0.4).gp(0)
q=r.L()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new B.x(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=B.cj(p,n*2,o*2)
t=B.N()
t.b=A.ag
t.c=1
t.r=A.aZ.gp(0)
b9.hI(u,t)
t=B.N()
t.sau(D.ekS.aA(0,B.bU(p,34)))
b9.af(p,22,t)
m=s.r*2*3.141592653589793
l=p.ad(0,new B.x(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aF(0,l).eS(0,p.aF(0,l).gcH())
J.bx(b8.save())
b8.translate(l.a,l.b)
s=B.N()
s.r=D.bil.gp(0)
b9.af(A.J,k,s)
J.bx(b8.save())
b7=new B.aO(b7.r,A.ao,b4,b4,B.a([],x.v))
b7.F(new B.jQ(B.bU(A.J,k)))
b9.pE(0,b7)
b7=i.aI(0,k).aI(0,0.35)
s=k*1.1
b6=B.N()
b6.sau(D.el0.aA(0,B.bU(A.J,s)))
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
f=B.h2(b4,b4,b4,b4,B.d1(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aRR,b5),A.a6,A.cb,b4,A.dS,A.c7)
f.eQ()
f.a6(b9,l.ad(0,new B.x(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=B.N()
r.b=A.ag
r.c=1
r.r=A.aZ.gp(0)
b9.af(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a0.r=A.aS.j(0.6).gp(0)
a0.c=2
q=a0.L()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=B.N()
r.sau(new B.c_(new B.df(-0.5,0),1.1,A.x,b4,0,B.a([D.bdP,D.agk],x.O),D.cZr,b4).aA(0,B.bU(p,k)))
b9.af(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ad(0,new B.x(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=B.N()
r.r=D.bb1.gp(0)
b9.af(a1,a2,r)
J.bx(b8.save())
b7=b7.r
r=x.v
d=new B.aO(b7,A.ao,b4,b4,B.a([],r))
d.F(new B.jQ(B.bU(a1,a2)))
b9.pE(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=B.N()
a3.r=A.bP.gp(0)
b9.b1(new B.a9(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aF(0,p).eS(0,a1.aF(0,p).gcH())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.atl[a5]
a7=new B.aw(A.Y,A.W,A.a_,A.a0,A.Z)
a7.r=A.aR.j(0.45).gp(0)
a7.z=A.lC
q=a7.L()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new B.x(u,t)
a9=Math.min(b5,b6)*0.1
b6=B.N()
b6.r=D.baX.gp(0)
b9.af(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bx(b8.save())
b6=new B.aO(b7,A.ao,b4,b4,B.a([],r))
b6.F(new B.jQ(B.bU(a8,a9)))
b9.pE(0,b6)
s=s.w
b1=new B.aO(b7,A.ao,b4,b4,B.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.F(new B.b5(u,b5))
b6=b2>0
b1.aCM(new B.x(u,t+a9),b6,new B.aQ(a9,a9))
if(b0<0.5)b6=b2<0
b1.aCM(new B.x(u,b5),b6,new B.aQ(a9*Math.abs(1-2*b0),a9))
b6=B.N()
b6.r=A.bP.gp(0)
b9.aS(b1,b6)
b8.restore()
b8=B.N()
b8.b=A.ag
b8.c=1
b8.r=A.aZ.gp(0)
b9.af(a8,a9,b8)
b3=B.h2(b4,b4,b4,b4,D.f59,A.a6,A.cb,b4,A.dS,A.c7)
b3.eQ()
b3.a6(b9,a8.ad(0,new B.x(-b3.b.c/2,a9+6)))}},
aw(d){return!0}}
C.aL7.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.bwI.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bv7()}}
C.aLu.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.bwO.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bvv()}}
C.aM0.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbF())
w.aa$=null
w.a2()},
aX(){this.b6()
this.b5()
this.bG()}}
C.bwX.prototype={
t(){var w,v,u
for(w=this.iI$,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)w[u].a4(0)
w=this.iH$
w===$&&B.c()
w.t()
this.bw2()}}
var z=a.updateTypes(["R(tA)","~()","R(a4m)","R(Cp)","aA<~>()","H(tA,H)","K(K,tA)","R(Cl)","R(Zc)","R(abl)","R(v7)","R(a30)","R(np)","Wh()","a8f()","VQ()","W4()","VR()","Wf()","Us()","aeM(Y,H)","adE(Y,H)","H(Cl,Cl)","R(mG)","n(eb)","R(aeC)","R(a0r)","R(Cz)","R(abP)","R(adI)","R(abz)","H(H,qQ)","H(H,Cp)","n(qQ)","~(qQ,ai<n>,H)","qQ?(Cp)","R(qQ)","t(n,a0e)","R(PZ)","R(aaf)","~(AB)","~(a6<@,@>)","~(x4,n,x,v,K)","~(n,tA)","V3()","K(PG)","Nn(Y)","UN(Y,bq<K>,bq<K>)","Wl()","Vb()","Up()","V2()","VL()","VV()","We()","VK()","~(n)","cq(ab1)","R(ab0)","Vh()","W3()","Vi()","Un()","Vf()","VW()","VS()","Uo()","R(PG)","Vu(Y)"])
C.fwN.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+23}
C.fmk.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.ftx.prototype={
$1(d){var w
if(!this.a.LM(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fty.prototype={
$1(d){return d.x},
$S:z+0}
C.fwK.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fwL.prototype={
$1(d){var w
if(!this.a.LM(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fwM.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.e91.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.e92.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.z(this.b,this.c))},
$S:0}
C.e93.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd0(v).Q
v.toString
w.mb(v,A.dY,A.im)}},
$S:9}
C.e9e.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.e9f.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.e9a.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.e98.prototype={
$2(d,e){var w=this.a
w.r.push(B.cL(B.dE(0,0,0,d,0,0),new C.e99(w,this.b,e)))},
$S:1857}
C.e99.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.e9b.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gWe().ajQ(0,u[1],u[2],u[3])
u[4].bQ(0,new C.e96(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dX(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.e97(w.a,v,w.f,w.r))},
$S:0}
C.e96.prototype={
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
C.e97.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bm(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.e9c.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gWe().akz(t,u[1],s,u[3])
E.dX(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.e95(w.a,v,w.e,w.f))},
$S:0}
C.e95.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.k.bm(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.e9d.prototype={
$0(){E.dX(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.e94(w,this.b))},
$S:0}
C.e94.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.e9i.prototype={
$0(){var w=this.a
return w.m(new C.e9h(w))},
$S:0}
C.e9h.prototype={
$0(){return this.a.at=!0},
$S:0}
C.e9j.prototype={
$0(){var w=this.a
return w.m(new C.e9g(w))},
$S:0}
C.e9g.prototype={
$0(){return this.a.at=!1},
$S:0}
C.e9k.prototype={
$0(){var w=this.a
w.f.saU(0,this.b)
w.Pd()},
$S:0}
C.e9l.prototype={
$0(){return this.a.Ye(this.b)},
$S:0}
C.e9m.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Pd():w.aVO()},
$S:2}
C.e9n.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Pd():w.aVO()},
$S:0}
C.enh.prototype={
$2(d,e){return d+e},
$S:1858}
C.enB.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.enA(w,d))},
$S:1859}
C.enA.prototype={
$0(){var w=B.aJ(J.r(this.b,"unlocked"))
w=w==null?null:A.k.O(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.enC.prototype={
$0(){},
$S:0}
C.enD.prototype={
$0(){},
$S:0}
C.enj.prototype={
$0(){return this.a.m(new C.eni(this.b,this.c))},
$S:0}
C.eni.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.en8.prototype={
$1(d){return this.a.cx===d},
$S:33}
C.en9.prototype={
$1(d){return this.a.cx=d},
$S:31}
C.ena.prototype={
$1(d){return this.a.cy===d},
$S:33}
C.enb.prototype={
$1(d){return this.a.cy=d},
$S:31}
C.enc.prototype={
$1(d){return this.a.db===d},
$S:33}
C.end.prototype={
$1(d){return this.a.db=d},
$S:31}
C.ene.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:33}
C.enf.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.M(0,d)},
$S:31}
C.eng.prototype={
$0(){var w=this.a
return w.m(w.gawt())},
$S:0}
C.en6.prototype={
$1(d){return this.a.$1(!0)},
$S:77}
C.en7.prototype={
$1(d){return this.a.$1(!1)},
$S:119}
C.en5.prototype={
$1(d){return this.a.$1(!1)},
$S:169}
C.enu.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.as(e.b,e.d)
o.ch=n
n=B.b3(p,p,p,new C.bgP(o,p),n)
w=this.b
v=C.bzg("WORLD",w.a,w.c)
u=C.bzg("GRAVITY",B.u(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.cs:A.bo
t=C.bzg("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.CB[o.db].d?A.cs:A.c
q=x.p
s=B.a([v,u,t,C.bzg("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bzg("HEIGHT",""+A.k.V(A.k.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.B(s,A.m,p,A.iv,A.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bDY(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rr[w].a+".":"You landed on every world!"
v=B.a([new C.j6(A.o9,"Again",new C.enp(o),A.c,p),new C.j6(A.oY,"Rebuild",new C.enq(o),A.aS,p)],q)
if(o.d+1<7)v.push(new C.j6(A.kE,"Next world",new C.enr(o),A.bo,p))
n.push(C.hkn("Perfect landing!",w,A.bo,v))}if(o.as==="crashed")n.push(C.hkn("Crash!",o.at,A.cs,B.a([new C.j6(A.o9,"Try again",new C.ens(o),A.bo,p),new C.j6(A.oY,"Rebuild",new C.ent(o),A.aS,p)],q)))
return new B.an(A.V,p,A.b2,A.r,n,p)},
$S:68}
C.enp.prototype={
$0(){var w=this.a
return w.m(w.gawt())},
$S:0}
C.enq.prototype={
$0(){var w=this.a
return w.m(new C.enm(w))},
$S:0}
C.enm.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.enr.prototype={
$0(){var w=this.a
return w.m(new C.enl(w))},
$S:0}
C.enl.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.ens.prototype={
$0(){var w=this.a
return w.m(w.gawt())},
$S:0}
C.ent.prototype={
$0(){var w=this.a
return w.m(new C.enk(w))},
$S:0}
C.enk.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.env.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.eno(v,w))},
$S:0}
C.eno.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.enw.prototype={
$1(d){return this.a.y=d},
$S:8}
C.enx.prototype={
$1(d){return this.a.Q=d},
$S:8}
C.eny.prototype={
$1(d){return this.a.z=d},
$S:8}
C.enz.prototype={
$0(){var w=this.a
return w.m(new C.enn(w))},
$S:0}
C.enn.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dGI.prototype={
$0(){var w=0,v=B.j(x.a),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=$.hfG
if(q==null)q=$.hfG=C.cHa()
w=3
return B.b(B.iO(B.a([q,$.qZ().bg6("assets/data/three.min.js")],x.aJ),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kI(0,B.cO(J.r(s,1)))
q.m(new C.dGH(q,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:51}
C.dGH.prototype={
$0(){return this.a.d=x.F.a(J.r(this.b,0))},
$S:0}
C.dGk.prototype={
$0(){return this.a.bVu(B.aU(J.r(this.b,"group")))},
$S:0}
C.dGl.prototype={
$1(d){return A.a.aY(A.o.fV(A.o.D(A.k.V(d*255),0,255),16),2,"0")},
$S:319}
C.dGJ.prototype={
$0(){return C.a8e("kick",0.25)},
$S:0}
C.dGm.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dGn.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.dGo.prototype={
$0(){return C.a8e("kick",0.5)},
$S:0}
C.dGp.prototype={
$0(){return E.dX(1300+this.a.R8.ar(900),"",40,0,0.2,"square")},
$S:0}
C.dGr.prototype={
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
u=w}if(u.cx!=null&&!A.d.b3(u.d.e,new C.dGq(u)))u.cx=null
u.go=0},
$S:0}
C.dGq.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.ayc(d)},
$S:z+11}
C.dGh.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
C.dGi.prototype={
$0(){var w=this.a
return w.m(w.gc4Z())},
$S:0}
C.dGj.prototype={
$0(){return this.a.ahs(null)},
$S:0}
C.dGy.prototype={
$0(){var w=this.a.as
return w==null?null:w.f3(0,B.G(["t","shot"],x.N,x.A))},
$S:0}
C.dGz.prototype={
$0(){return this.a.cAC(this.b.a)},
$S:0}
C.dGA.prototype={
$0(){return this.a.ahs(this.b)},
$S:0}
C.dGB.prototype={
$1(d){var w=this.a
return w.m(new C.dGx(w,d))},
$S:7}
C.dGx.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.dGC.prototype={
$0(){var w=this.a
return w.m(new C.dGw(w,this.b))},
$S:0}
C.dGw.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.dGD.prototype={
$0(){var w=this.a
return w.m(new C.dGv(w))},
$S:0}
C.dGv.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.dGE.prototype={
$0(){var w=this.a
return w.m(new C.dGu(w))},
$S:0}
C.dGu.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f3(0,B.G(["t","reset"],x.N,x.A))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.KE},
$S:0}
C.dGF.prototype={
$0(){var w=this.a
return w.m(new C.dGt(w))},
$S:0}
C.dGt.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aYr()
else w.p2=null},
$S:0}
C.dGG.prototype={
$0(){var w=this.a
return w.m(new C.dGs(w))},
$S:0}
C.dGs.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
C.c2o.prototype={
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
$S:275}
C.c2p.prototype={
$1(d){var w=new B.rT([],[]).pG(d.data,!0)
if(x.f.b(w)&&J.r(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:681}
C.fg9.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)},
$S:221}
C.fga.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)||w.h(d,1)},
$S:221}
C.fgb.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)!==w.h(d,1)},
$S:221}
C.fgi.prototype={
$1(d){return!J.r(d,0)},
$S:221}
C.fgj.prototype={
$1(d){var w=J.a4(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:221}
C.fgk.prototype={
$1(d){var w=J.a4(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:221}
C.dIn.prototype={
$1(d){return this.a.at9(0)},
$S:9}
C.dI1.prototype={
$0(){var w=this.b
return this.a.cx=new B.M(w,B.i0X(),B.S(w).k("M<1,H>")).fE(0)},
$S:0}
C.dI4.prototype={
$1(d){return""+d},
$S:79}
C.dIo.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dI_.prototype={
$1(d){return this.a.at9(this.b)},
$S:9}
C.dI0.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.awY(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mx(0,d,a1.m2(0.15,0.3))
u=a1.mx(0,d,a1.m2(0.15,0.62))
t=a1.mx(0,"and",a1.m2(0.48,0.46))
s=a1.mx(0,a0,a1.m2(0.82,0.46))
a1=t.a
w.push(new C.np(v.a,a1,0))
w.push(new C.np(u.a,a1,1))
w.push(new C.np(a1,s.a,0))
break
case 1:v=a1.mx(0,d,a1.m2(0.12,0.25))
u=a1.mx(0,d,a1.m2(0.12,0.65))
r=a1.mx(0,"xor",a1.m2(0.46,0.25))
q=a1.mx(0,"and",a1.m2(0.46,0.65))
p=a1.awX(0,a0,a1.m2(0.82,0.25),0)
o=a1.awX(0,a0,a1.m2(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.np(a1,n,0))
m=u.a
w.push(new C.np(m,n,1))
l=q.a
w.push(new C.np(a1,l,0))
w.push(new C.np(m,l,1))
w.push(new C.np(n,p.a,0))
w.push(new C.np(l,o.a,0))
break
case 2:k=a1.mx(0,"clock",a1.m2(0.15,0.4))
j=a1.mx(0,"not",a1.m2(0.45,0.65))
s=a1.mx(0,a0,a1.m2(0.82,0.3))
i=a1.mx(0,"buzzer",a1.m2(0.82,0.65))
a1=k.a
w.push(new C.np(a1,s.a,0))
n=j.a
w.push(new C.np(a1,n,0))
w.push(new C.np(n,i.a,0))
break
default:h=a1.mx(0,d,a1.m2(0.12,0.25))
g=a1.mx(0,d,a1.m2(0.12,0.7))
f=a1.mx(0,"nor",a1.m2(0.5,0.25))
e=a1.mx(0,"nor",a1.m2(0.5,0.7))
s=a1.mx(0,a0,a1.m2(0.86,0.25))
a1=f.a
w.push(new C.np(g.a,a1,0))
n=e.a
w.push(new C.np(n,a1,1))
w.push(new C.np(h.a,n,0))
w.push(new C.np(a1,n,1))
w.push(new C.np(a1,s.a,0))}},
$S:0}
C.dI5.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.awY(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.Cl(p,"switch",new B.x(0.14*q.a,r*q.b),0))}o.mx(0,w.e,o.m2(0.86,0.5))},
$S:0}
C.dHV.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dHW.prototype={
$2(d,e){return A.k.aK(d.c.b,e.c.b)},
$S:z+22}
C.dHX.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dHY.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dHZ.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.acQ(this.c)
if(v.ax)C.IU("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)E.dX(140,"",250,0,0.3,"square")}},
$S:0}
C.dI6.prototype={
$0(){},
$S:0}
C.dI7.prototype={
$0(){return A.d.cG(this.a.e,this.b)},
$S:0}
C.dI8.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dI3.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bs(w.e,new C.dI2(v))
w.cy=null},
$S:0}
C.dI2.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+12}
C.dHU.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mx(0,this.b,new B.x(w.x.a*(0.3+v.am()*0.4),w.x.b*(0.2+v.am()*0.6))).a},
$S:0}
C.dIh.prototype={
$0(){var w=this.a
return w.m(new C.dIg(w))},
$S:0}
C.dIg.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dIi.prototype={
$2(d,e){var w=null,v=this.a,u=new B.as(e.b,e.d)
v.x=u
return B.aB(A.ch,B.jx(B.b3(w,w,w,new C.baX(v,w),u),A.r,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dIb(v),w,w,w,new C.dIc(v),new C.dId(v),new C.dIe(v),w,w,w,w,w,w,w,w,w,w,new C.dIf(v),w,w,w,!1,A.a5)},
$S:37}
C.dIf.prototype={
$1(d){return this.a.c6K(d.b)},
$S:64}
C.dId.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cf4(u)
if(t!=null){v.as=t
v.at=u
return}w=v.axK(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aF(0,u)}},
$S:49}
C.dIe.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.x(A.k.D(w.a+u.Q.a,46,u.x.a-46),A.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:21}
C.dIc.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bZ3(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bs(v,new C.dI9(w))
u=t.as
u.toString
v.push(new C.np(u,w.a,w.b))
B.ko()}}t.z=t.as=null},
$S:42}
C.dI9.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+12}
C.dIb.prototype={
$1(d){return this.a.avL(d.b)},
$S:323}
C.dIj.prototype={
$0(){return this.a.bzO(this.b.a)},
$S:0}
C.dIk.prototype={
$0(){return this.a.at9(this.b.a)},
$S:0}
C.dIl.prototype={
$0(){var w=this.a
return w.m(new C.dIa(w))},
$S:0}
C.dIa.prototype={
$0(){var w=this.a
w.awY(0)
w.ay=null},
$S:0}
C.dIm.prototype={
$0(){return this.a.cwm(this.b)},
$S:0}
C.cNW.prototype={
$0(){var w=this,v=null,u=B.h2(v,v,v,v,B.d1(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a6,A.cb,v,A.dS,A.c7)
u.eQ()
return u},
$S:335}
C.dOd.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dOc.prototype={
$0(){return this.a.d=null},
$S:0}
C.dOf.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c_R()},
$S:123}
C.dOe.prototype={
$0(){return B.a3(this.a,!1).iW()},
$S:0}
C.fgA.prototype={
$0(){return D.e4h},
$S:z+13}
C.fgB.prototype={
$0(){return D.dDx},
$S:z+44}
C.fgC.prototype={
$0(){return D.dAt},
$S:z+66}
C.fgD.prototype={
$0(){return D.e3H},
$S:z+14}
C.fgE.prototype={
$0(){return D.dMy},
$S:z+15}
C.fgF.prototype={
$0(){return D.e3p},
$S:z+16}
C.fgG.prototype={
$0(){return D.e1r},
$S:z+17}
C.fgH.prototype={
$0(){return D.e3G},
$S:z+18}
C.fgI.prototype={
$0(){return D.dCH},
$S:z+19}
C.eXz.prototype={
$2(d,e){return new C.aeM($.bDG()[e],new C.eXy(e,this.a),null)},
$S:z+20}
C.eXy.prototype={
$0(){var w=this.a,v=F.aEA.h(0,$.bDG()[w].a)
$.arU=v==null?"music":v
B.a3(this.b,!1).cg(B.e_(new C.eXw(w),!1,null,x.H))},
$S:0}
C.eXw.prototype={
$1(d){return $.bDG()[this.a].e.$0()},
$S:39}
C.eXA.prototype={
$2(d,e){return new C.adE(D.axe[e],new C.eXx(this.a,e),null)},
$S:z+21}
C.eXx.prototype={
$0(){return this.a.d.$1(D.axe[this.b])},
$S:0}
C.eXf.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eXe.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eXd.prototype={
$1(d){var w=this
return new B.dY(new C.eXc(w.a,w.b,w.c,w.d),null)},
$S:19}
C.eXc.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.l,a1=B.aH(a2,d,a0).w
a0=B.aH(a2,d,a0).w
w=x.p
v=B.a([D.fqP,A.au,D.fxt,A.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new B.aQ(12,12)
m=new B.aQ(12,12)
m=B.a([new B.by(1,A.bd,B.aL(d,A.U,!1,d,!0,A.r,d,B.aN(),r[p],d,d,d,d,d,2,new B.e3(d,d,d,d,d,d,d,d,d,d,"Title",d,G.DP,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b4(4,new B.bk(n,n,n,n),A.X),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.jg,!0,A.a6,d,A.an,d,d,d,d),d),A.ab,new B.by(2,A.bd,B.aL(d,A.U,!1,d,!0,A.r,d,B.aN(),q[p],d,d,d,d,d,2,new B.e3(d,d,d,d,d,d,d,d,d,d,"Small line",d,G.DP,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b4(4,new B.bk(m,m,m,m),A.X),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.jg,!0,A.a6,d,A.an,d,d,d,d),d)],w)
n=B.a([],w)
for(l=0;l<30;++l){k=D.dnG[l]
j=new B.aQ(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}h=A.d.gH(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}g=A.d.gH(i)}else g=A.bz
f=new B.ay(g,u[p].A(0,k)?1.8:1,A.q,-1)
n.push(B.aB(d,B.p(d,B.W(k,u[p].A(0,k)?A.c:A.aQ,d,d,d,22),A.f,d,d,new B.o(h,d,new B.bJ(f,f,f,f),new B.bk(j,j,j,j),d,d,A.n),d,d,d,A.fu,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eXa(a3,p,u,k),d,d,d,d,d,d,!1,A.a5))}A.d.v(v,B.a([new B.y("SLAB "+o,d,D.fgs,d,d,d,d,d,d,d,d,d),A.al,new B.c9(A.aM,A.e,A.j,A.m,d,A.p,d,0,m,d),A.N,new B.a7(d,44,B.cs(n,d,d,d,d,A.aM,!1),d),A.aA],w))}v.push(B.bH(A.wQ,new C.eXb(t,r,q,u,a2),d))
return new B.D(new B.Q(0,0,0,a1.f.d),B.bm(!0,new B.cT(new B.aX(0,1/0,0,a0.a.b*0.86),B.cs(v,d,A2.y7,d,d,A.af,!0),d),!0,!1,A.ae,!0,!0),d)},
$S:101}
C.eXa.prototype={
$0(){var w=this
return w.a.$1(new C.eX9(w.b,w.c,w.d))},
$S:0}
C.eX9.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.eXb.prototype={
$0(){var w=this,v=w.a
v.m(new C.eX8(v,w.b,w.c,w.d))
B.a3(w.e,!1).N(null)},
$S:0}
C.eX8.prototype={
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
C.eXn.prototype={
$0(){var w=this.a
return w.m(new C.eXm(w))},
$S:0}
C.eXm.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.eXo.prototype={
$0(){return C.wU(this.b,this.a.f,"scene")},
$S:0}
C.eXp.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gH(u),A.d.gak(u),0.4)
u.toString
w=this.a.gZz().x
w===$&&B.c()
return B.c0(v,new B.o(v,v,v,v,v,new B.c_(D.aY0,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.bZ],x.O),v,v),A.n),A.bf)},
$S:289}
C.eXq.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(B.eN(A.A,B.c7(new B.ha(B.a([u.gu2(),u.gZz()],x.dS)),new C.eXl(u,this.b,v),w),A.f,A.e_),w,w,w)},
$S:262}
C.eXl.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gu2().x
r===$&&B.c()
w=r<0.9?1:1-C.bqL(r,0.9,0.98)
v=s.gZz().x
v===$&&B.c()
u=A.dz.av(0,v)
switch(s.gawZ().a){case 0:s=s.bz_(t.b,r,u,t.c)
break
case 1:s=s.bPD(t.b,r,u,t.c)
break
case 2:s=s.cB4(t.b,r,u,t.c)
break
case 3:s=s.bBV(t.b,r,u,t.c)
break
case 4:s=s.bFd(t.b,r,u,t.c)
break
case 5:s=s.bEo(t.b,r,u,t.c)
break
default:s=null}return B.dd(s,w)},
$S:216}
C.eXr.prototype={
$2(d,e){var w=B.avn(this.b),v=this.c.d,u=B.ar(A.d.gH(v),A.d.gak(v),0.4)
u.toString
v=B.ar(A.d.gH(v),A.d.gak(v),0.4)
v.toString
v=w.cJJ(u,A.bz,v,3.5)
u=this.a
w=u.gu2().x
w===$&&B.c()
return B.aa1(B.l2(null,null,null,1,0,new C.eXk(u),A.k.D(w,0,1)),v)},
$S:1862}
C.eXk.prototype={
$1(d){var w=this.a
w.gu2().sp(0,d)
if(w.as)w.m(new C.eXg(w))},
$S:7}
C.eXg.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eXs.prototype={
$0(){var w=this.a
w.gu2().sp(0,0)
w.adS()},
$S:0}
C.eXt.prototype={
$1(d){var w=this.a
w.m(new C.eXj(w,d))
if(w.as)w.adS()},
$S:7}
C.eXj.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eXu.prototype={
$0(){var w=this.a
w.m(new C.eXi(w,this.b))
w.gu2().sp(0,0)
if(w.as)w.adS()},
$S:0}
C.eXi.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.eXv.prototype={
$0(){var w=this.a
return w.m(new C.eXh(w,this.b))},
$S:0}
C.eXh.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.eX6.prototype={
$2(d,e){return A.k.aK(d.a,e.a)},
$S:1863}
C.eX7.prototype={
$1(d){return d.b},
$S:1864}
C.diV.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+3}
C.diW.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.diS.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+3}
C.diT.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.diU.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.diX.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.diY.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.diZ.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.dj_.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dj0.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dj1.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dj2.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dj3.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dj4.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.emC.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.emr.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.emt.prototype={
$2(d,e){return d+e.d*7+A.o.E(A.a.gX(e.b),97)},
$S:z+31}
C.emu.prototype={
$2(d,e){return d+A.o.E(A.a.gX(e.a),31)+A.o.E(A.a.gX(e.b),17)},
$S:z+32}
C.emx.prototype={
$1(d){var w=D.mH.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.E(d.d,u)]+")":t},
$S:z+33}
C.emy.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.S(q),o=x.dg,n=B.C(new B.ea(new B.cP(new B.Z(q,new C.emz(d),p.k("Z<1>")),new C.emA(r),p.k("cP<1,qQ?>")),o),o.k("J.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aG(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.L)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.emz.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.emA.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.emv.prototype={
$1(d){return D.mH.h(0,d.b).c===D.x7},
$S:z+36}
C.emw.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.en1.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.va(0,u)
w.a6o(A.o.an(v,1000))},
$S:9}
C.emB.prototype={
$0(){},
$S:0}
C.emn.prototype={
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
C.emE.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.w(B.a([A.N,B.dL(!1,w,w,w,!0,w,w,w,!0,w,B.W(D.mH.h(0,v).b,D.mH.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fIP,w,B.d(D.mH.h(0,v).a,w,w,w,w,w,w,A.fJ,w,w,w),w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,Y.ao9,w,w,w,w,new C.emD(d),!1,w,w,w,w,w,w,w,D.fAf,w,w,w)],x.p),A.m,w,A.e,A.P,0,A.p),!0,!1,A.ae,!0,!0)},
$S:27}
C.emD.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.emG.prototype={
$1(d){var w,v,u=null,t=B.aH(d,u,x.l).w,s=B.a([D.edV],x.p)
for(w=0;w<6;++w){v=D.axB[w]
s.push(B.dL(!1,u,u,u,!0,u,u,u,!0,u,D.bUR,u,u,u,u,new C.emF(d,v),!1,u,u,u,u,u,new B.y(v.b,u,A.lG,u,u,u,u,u,u,u,u,u),u,new B.y(v.a,u,A.fJ,u,u,u,u,u,u,u,u,u),u,u,u))}return B.bm(!0,new B.cT(new B.aX(0,1/0,0,t.a.b*0.7),B.cs(s,u,D.bzs,u,u,A.af,!0),u),!0,!1,A.ae,!0,!0)},
$S:27}
C.emF.prototype={
$0(){B.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.emq.prototype={
$1(d){var w=null
return B.ek(B.a([B.bM(!1,A.dh,w,w,!0,w,w,new C.emo(d),w,w),B.bM(!1,A.DT,w,w,!0,w,w,new C.emp(d),w,w)],x.p),w,w,F.n5,D.fxE,w,w,w,w,D.fAy,w)},
$S:18}
C.emo.prototype={
$0(){B.a3(this.a,!1).N(!1)
return null},
$S:0}
C.emp.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.en_.prototype={
$0(){var w=this.a
return w.m(new C.emZ(w))},
$S:0}
C.emZ.prototype={
$0(){return this.a.r=!1},
$S:0}
C.en0.prototype={
$2(d,e){var w,v,u,t=null,s=new B.as(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.mm(new C.emQ(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b7q:t
v=B.a([B.b3(u,t,t,new C.bgN(w,v,new C.emR(r),new C.emS(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,B.e2(B.c7(w,new C.emT(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bGT())
return B.aB(A.ch,B.jx(new B.an(A.V,t,A.b2,A.r,v,t),A.r,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.emU(r),t,r.gcgn(),t,new C.emV(r),new C.emW(r),new C.emX(r),t,t,t,t,t,t,t,t,t,t,new C.emY(r),t,t,t,!1,A.a5)},
$S:37}
C.emQ.prototype={
$0(){return this.a.abW(this.b)},
$S:0}
C.emY.prototype={
$1(d){return this.a.cyT(d.b)},
$S:64}
C.emW.prototype={
$1(d){return this.a.cgo(d.b)},
$S:49}
C.emX.prototype={
$1(d){return this.a.cgp(d.b)},
$S:21}
C.emV.prototype={
$1(d){return this.a.b0I()},
$S:42}
C.emU.prototype={
$1(d){return this.a.acC(d.b)},
$S:323}
C.emR.prototype={
$0(){return this.a.z},
$S:575}
C.emS.prototype={
$0(){return this.a.Q},
$S:629}
C.emT.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bL8()
if(p.length===0)return A.bI
w=A.w.j(0.55)
v=B.m(14)
u=B.I(A.bz,A.q,1)
t=B.a([D.fv4,A.cO],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.L)(p),++r)t.push(new B.y(p[r],q,D.ffa,q,q,q,q,A.a1,q,2,q,q))
return B.p(q,B.w(t,A.E,q,A.e,A.P,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.ha,q,q,q)},
$S:60}
C.ems.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.m(12),t=B.I(e.j(0.6),A.q,1),s=x.p
return new B.D(A.e9,B.B(B.a([B.p(w,B.W(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bc,B.E(B.w(B.a([B.d(f,w,w,w,w,w,w,A3.U3,w,w,w),A.bA,B.d(g,w,w,w,w,w,w,F.Ub,w,w,w)],s),A.E,w,A.e,A.j,0,A.p),1)],s),A.E,w,A.e,A.j,0,w,w),w)},
$S:1866}
C.emM.prototype={
$0(){var w=this.a.c
w.toString
return B.a3(w,!1).iW()},
$S:0}
C.emN.prototype={
$0(){var w=this.a
return w.m(new C.emL(w))},
$S:0}
C.emL.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.emO.prototype={
$0(){var w=this.a
return w.m(new C.emK(w))},
$S:0}
C.emK.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.emP.prototype={
$0(){var w=this.a
return w.m(new C.emJ(w))},
$S:0}
C.emJ.prototype={
$0(){return this.a.r=!0},
$S:0}
C.emI.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.mH.gdR(D.mH),w=w.gae(w);w.C();){v=w.gT(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.L)(p),++r)u.push(s.ctG(p[r]))
return new B.D(I.ahH,B.w(B.a([new B.D(Ah.ajl,w,q),B.B(u,A.m,q,A.e,A.j,0,q,q)],v),A.E,q,A.e,A.j,0,A.p),q)},
$S:z+37}
C.emH.prototype={
$0(){return this.a.c6Q(this.b)},
$S:0}
C.diR.prototype={
$0(){var w=this,v=null,u=B.h2(v,v,v,v,B.d1(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a6,A.cb,v,A.dS,A.c7)
u.eQ()
return u},
$S:335}
C.eyI.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.an(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new B.x(s.a+q*n,s.b+r*n)
t.b=new B.x(q*v,r*v)}A.d.bs(o,new C.eyG(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new C.eyH())},
$S:9}
C.eyG.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+38}
C.eyH.prototype={
$0(){},
$S:0}
C.eyj.prototype={
$0(){},
$S:0}
C.eyi.prototype={
$0(){},
$S:0}
C.eys.prototype={
$0(){return C.wU(this.b,this.a.d,"spark-painter")},
$S:0}
C.eyu.prototype={
$1(d){return this.a.aZ7(0,d.b)},
$S:49}
C.eyy.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gak(w).aF(0,u).gcH()>2.5}else w=!1
if(w)t.a.push(u)
v.aS1(u)
v.c9G(u)
return null},
$S:21}
C.eyt.prototype={
$1(d){return this.a.aZ6()},
$S:42}
C.eyz.prototype={
$1(d){return this.a.aZ7(0,d.b)},
$S:23}
C.eyA.prototype={
$1(d){return this.a.aZ6()},
$S:64}
C.eyB.prototype={
$0(){var w=this.a
return w.m(new C.eyr(w,this.b))},
$S:0}
C.eyr.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
C.eyC.prototype={
$0(){var w=this.a
return w.m(new C.eyq(w))},
$S:0}
C.eyq.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.eyD.prototype={
$0(){var w=this.a
return w.m(new C.eyp(w,this.b))},
$S:0}
C.eyp.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eyE.prototype={
$1(d){var w=this.a
return w.m(new C.eyo(w,d))},
$S:7}
C.eyo.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eyF.prototype={
$0(){var w=this.a
return w.m(new C.eyn(w))},
$S:0}
C.eyn.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eyv.prototype={
$0(){var w=this.a
return w.m(new C.eym(w))},
$S:0}
C.eym.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.eyw.prototype={
$0(){var w=this.a
return w.m(new C.eyl(w))},
$S:0}
C.eyl.prototype={
$0(){var w=this.a
A.d.a8(w.e)
A.d.a8(w.f)},
$S:0}
C.eyx.prototype={
$0(){var w=this.a
return w.m(new C.eyk(w,this.b))},
$S:0}
C.eyk.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eER.prototype={
$0(){return C.wU(this.b,this.a.d,"title")},
$S:0}
C.eES.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gIY().x
q===$&&B.c()
w=B.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.c00(v[t],t,s,q,u))
return new B.D(A.fa,B.bV(A.fW,w,A.t6,0,0),null)},
$S:549}
C.eET.prototype={
$1(d){return this.a.m(new C.eEQ())},
$S:2}
C.eEQ.prototype={
$0(){},
$S:0}
C.eEU.prototype={
$0(){var w=this.a
w.m(new C.eEP(w,this.b))
w=w.gIY()
w.iK(0,0)
w.cL(0)},
$S:0}
C.eEP.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.eEV.prototype={
$0(){var w=this.a
return w.m(new C.eEO(w,this.b))},
$S:0}
C.eEO.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eEW.prototype={
$0(){var w=this.a
return w.m(new C.eEN(w))},
$S:0}
C.eEN.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
C.eEX.prototype={
$0(){var w=this.a
return w.m(new C.eEM(w,this.b))},
$S:0}
C.eEM.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eEY.prototype={
$0(){var w=this.a.gIY()
w.iK(0,0)
w.cL(0)},
$S:0}
C.eEZ.prototype={
$1(d){var w=this.a
return w.m(new C.eEL(w,d))},
$S:7}
C.eEL.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.bMn.prototype={
$1(d){return d.r<=0},
$S:z+39}
C.bMy.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bMt.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bMz.prototype={
$1(d){return this.a.LM(d)&&!d.x},
$S:z+0}
C.bMA.prototype={
$2(d,e){return Math.max(d,this.a.aAv(e))},
$S:z+6}
C.bMC.prototype={
$2(d,e){var w=this.a
return w.c4(0,d.a+"."+e,new C.bMD(w))},
$S:z+5}
C.bMD.prototype={
$0(){return this.a.a},
$S:99}
C.bMB.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:73}
C.bME.prototype={
$2(d,e){var w=this.a
return w.c4(0,this.b.$1(this.c.$2(d,e)),new C.bMF(w))},
$S:z+5}
C.bMF.prototype={
$0(){return this.a.a},
$S:99}
C.bMp.prototype={
$2(d,e){var w=this.a
return w.c4(0,d.a+"."+e,new C.bMq(w))},
$S:z+5}
C.bMq.prototype={
$0(){return this.a.a},
$S:99}
C.bMo.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:73}
C.bMr.prototype={
$2(d,e){var w=this.a
return w.c4(0,this.b.$1(this.c.$2(d,e)),new C.bMs(w))},
$S:z+5}
C.bMs.prototype={
$0(){return this.a.a},
$S:99}
C.bMm.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bMG.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bMu.prototype={
$1(d){return d!==this.b&&this.a.aGI(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bMx.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bMw.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bMv.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bGZ.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bH_.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.cmK.prototype={
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
$S:188}
C.fIu.prototype={
$1(d){var w
$.X()
w=B.N()
w.r=d.gp(0)
return w},
$S:1867}
C.fIw.prototype={
$2(d,e){var w
$.X()
w=B.N()
w.b=A.ag
w.c=e
w.r=d.gp(0)
w.d=A.bV
return w},
$S:1868}
C.fIx.prototype={
$5(d,e,f,g,h){return B.bz(new B.a9(d,e,d+f,e+g),new B.aQ(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1869}
C.fIv.prototype={
$3(d,e,f){var w
$.X()
w=B.N()
w.sau(new B.a8(A.b3,A.b6,A.x,B.a([e,f],x.O),null,null).aA(0,d))
return w},
$S:1870}
C.bGD.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bGE.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bGC(w))},
$S:0}
C.bGC.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bGF.prototype={
$0(){return B.a([],x.ey)},
$S:1871}
C.bGG.prototype={
$1(d){return this.a.bz(d).a>15e5},
$S:396}
C.bGH.prototype={
$0(){var w,v,u
J.bDP(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.CA(v))if(C.h1_(v.b))w.b0b(v)
else w.a_z(v)
else{u=w.a.c.bcV(v)
w.ae3(u==null?"The "+$.ql().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bGB.prototype={
$1(d){return new B.dY(new C.bGz(this.a,this.b),null)},
$S:19}
C.bGz.prototype={
$2(d,e){var w=null,v=this.b,u=new C.bGA(this.a,v,e),t=$.ql(),s=v.b,r=B.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.jY,w,w,w),q=B.aI(w,w,w,w,D.bLt,w,w,w,new C.bGv(u,v),w,w,w,w,w,w),p=A.k.D(v.ch,1,2.6),o=x.p
return B.bm(!0,new B.D(A.vP,B.w(B.a([r,A.au,D.fJP,A.R,B.B(B.a([q,B.E(B.l2(t.h(0,s).d,w,w,2.6,1,u,p),1),B.aI(w,w,w,w,D.bSb,w,w,w,new C.bGw(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.j,0,w,w),B.B(B.a([B.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,B.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b0,B.bM(!1,D.fnb,w,w,!0,w,w,new C.bGx(u),w,w),B.bM(!1,A.wQ,w,w,!0,w,w,new C.bGy(d),w,w)],o),A.m,w,A.e,A.j,0,w,w)],o),A.E,w,A.e,A.P,0,A.p),w),!0,!1,A.ae,!0,!0)},
$S:86}
C.bGA.prototype={
$1(d){var w=this.a
w.m(new C.bGt(this.b,d))
this.c.$1(new C.bGu())
w.a.toString},
$S:7}
C.bGt.prototype={
$0(){return this.a.ch=A.k.D(this.b,1,2.6)},
$S:0}
C.bGu.prototype={
$0(){},
$S:0}
C.bGv.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
C.bGw.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
C.bGx.prototype={
$0(){return this.a.$1(1)},
$S:0}
C.bGy.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.bGW.prototype={
$2(d,e){var w
if(d==="short"){E.dX(1800,"",120,0,0.55,"noise")
E.dX(200,"",160,2.2,0.4,"saw")
B.fG()
w=this.a
if(w.c!=null)w.ae3("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dX(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.ae3("\u26a0 Overloaded! The "+$.ql().h(0,e.b).b+" can only give about "+A.k.ab(w.a.c.zM(e),2)+" amps but your gadgets are asking for "+A.k.ab(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.ae3("Burnt out! "+e.ay)
E.dX(140,"",320,0,0.6,"noise")
E.dX(900,"",160,1.5,0.35,"square")}},
$S:z+43}
C.bGX.prototype={
$0(){},
$S:0}
C.bG6.prototype={
$0(){},
$S:0}
C.bGY.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bGV.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.as(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.aB(A.ch,B.b3(p,p,p,new C.aiA(w,v,u,t,s,r==null?A.jc:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bGP(o),new C.bGQ(o),new C.bGR(o),p,p,p,p,p,p,p,p,p,p,new C.bGS(o),p,p,p,!1,A.a5)],q)
if(o.a.c.a.length===0)n.push(D.b6I)
w=o.Q
if(w!=null){v=B.m(14)
u=B.I(A.cY,A.q,1)
n.push(B.ao(p,B.aB(p,B.p(p,B.B(B.a([D.fll,B.E(B.d(w,p,p,p,p,p,p,D.fdr,p,p,p),1)],q),A.E,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(D.bcc,p,u,v,p,p,A.n),p,p,p,p,A.nf,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bGT(o),p,p,p,p,p,p,!1,A.a5),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ao(8,o.aZe(B.B(B.a([D.bBz,new C.j6(A.Gk,"Cut wire",new C.bGU(o),A.cs,p)],q),A.m,p,A.e,A.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ao(8,o.cgX(w),p,p,10,10,p,p))}return B.jx(new B.an(A.V,p,A.b2,A.r,n,p),A.r,p)},
$S:437}
C.bGQ.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b7c(s)
if(r!=null){t.m(new C.bGN(t,r,d))
return}w=t.b0S(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.x(v*u.a,w.d*u.b).aF(0,s)
t.m(new C.bGO(t,w))}},
$S:49}
C.bGN.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bGO.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bGR.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bGL(w,d))
else if(w.w!=null)w.m(new C.bGM(w,d.b.ad(0,w.x)))},
$S:21}
C.bGL.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bGM.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bGP.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b7c(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.akz(u.a,u.b,v.a,v.b)!=null)E.dX(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.ae1()},
$S:42}
C.bGS.prototype={
$1(d){var w=this.a,v=d.b,u=w.b0S(v)
if(u!=null){w.m(new C.bGJ(w,u))
if(D.m5.ai(0,u.b))w.crx(u)
w.a.toString
return}w.m(new C.bGK(w,w.cE5(v)))},
$S:64}
C.bGJ.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dX(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dX(200,"",70,0,0.2,"saw")}},
$S:0}
C.bGK.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bGT.prototype={
$0(){var w=this.a
return w.m(new C.bGI(w))},
$S:0}
C.bGI.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bGU.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dX(300,"",50,0,0.35,"noise")
w.ae1()},
$S:0}
C.bG7.prototype={
$0(){return this.a.bp1(this.b)},
$S:0}
C.bGq.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.B(B.a([B.d(d,w,w,w,w,w,w,D.f7J,w,w,w),B.E(B.l2(this.b.d,w,w,g,h,new C.bGs(this.a,f),A.k.D(e,h,g)),1)],x.p),A.m,w,A.e,A.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1872}
C.bGs.prototype={
$1(d){var w=this.a
w.m(new C.bGr(this.b,d))
w.a.toString},
$S:7}
C.bGr.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bGd.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dX(260,"",70,0,0.35,"noise")
w.ae1()},
$S:0}
C.bGe.prototype={
$0(){var w=this.a
return w.m(new C.bGc(w))},
$S:0}
C.bGc.prototype={
$0(){return this.a.d=null},
$S:0}
C.bGf.prototype={
$0(){this.a.m(new C.bGb(this.b,this.c))
E.dX(900,"",40,0,0.3,"noise")},
$S:0}
C.bGb.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bGi.prototype={
$0(){return this.a.b0b(this.b)},
$S:0}
C.bGj.prototype={
$0(){return this.a.a_z(this.b)},
$S:0}
C.bGk.prototype={
$0(){return this.a.a1c(this.b)},
$S:0}
C.bGl.prototype={
$0(){var w=this.a
w.m(new C.bGa(this.b,this.c))
w.a.toString},
$S:0}
C.bGa.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bGm.prototype={
$0(){var w=this.a
w.m(new C.bG9(this.b,this.c))
w.a.toString},
$S:0}
C.bG9.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bGn.prototype={
$0(){var w=this.a
w.m(new C.bG8(this.b,this.c))
w.a.toString},
$S:0}
C.bG8.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bGo.prototype={
$1(d){return this.a.f=d},
$S:7}
C.bGp.prototype={
$1(d){return this.a.f=d},
$S:7}
C.bGg.prototype={
$1(d){return this.a.f=d},
$S:7}
C.bGh.prototype={
$1(d){return this.a.f=d},
$S:7}
C.fgl.prototype={
$1(d){return d.aGk("bulb")},
$S:z+2}
C.fgm.prototype={
$1(d){return d.pP(0,"switch")&&d.aGk("bulb")},
$S:z+2}
C.fgn.prototype={
$1(d){return A.d.b3(d.a,new C.fg8())},
$S:z+2}
C.fg8.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fgo.prototype={
$1(d){return d.pP(0,"resistor")&&A.d.b3(d.a,new C.fg7())},
$S:z+2}
C.fg7.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fgp.prototype={
$1(d){return!d.pP(0,"battery")&&d.aGk("bulb")},
$S:z+2}
C.fgc.prototype={
$1(d){return A.d.b3(d.a,new C.fg6())},
$S:z+2}
C.fg6.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fgd.prototype={
$1(d){return A.d.b3(d.a,new C.fg5())},
$S:z+2}
C.fg5.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fge.prototype={
$1(d){return A.d.b3(d.a,new C.fg4())},
$S:z+2}
C.fg4.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fgf.prototype={
$1(d){var w=d.a
return A.d.b3(w,new C.fg2())&&A.d.b3(w,new C.fg3())&&d.pP(0,"buck")},
$S:z+2}
C.fg2.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fg3.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fgg.prototype={
$1(d){var w=d.a
return A.d.b3(w,new C.fg0())&&A.d.b3(w,new C.fg1())},
$S:z+2}
C.fg0.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fg1.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fgh.prototype={
$1(d){return A.d.b3(d.a,new C.fg_())},
$S:z+2}
C.fg_.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.dSM.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
C.dSV.prototype={
$1(d){var w=this.a.d
return w.aGI(d)&&w.CA(d)},
$S:z+0}
C.dSW.prototype={
$1(d){return d.x},
$S:z+0}
C.dSX.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.dSY.prototype={
$0(){},
$S:0}
C.dSL.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.m(22),o=x.p,n=B.a([D.fCv,A.au,D.fn6,A.R],o)
for(w=this.a,v=0;v<19;++v){u=D.Qq[v]
t=A.c.j(0.06)
s=new B.aQ(14,14)
r=new B.ay(A.bz,1,A.q,-1)
n.push(B.aB(q,B.p(q,B.w(B.a([new B.y(u.a,q,A.iY,q,q,q,q,q,q,q,q,q),A.bA,new B.y(u.b,q,D.feb,q,q,q,q,A.a1,q,3,q,q)],o),A.E,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(t,q,new B.bJ(r,r,r,r),new B.bk(s,s,s,s),q,q,A.n),q,q,q,A.cu,A.bj,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dSK(w,d,u),q,q,q,q,q,q,!1,A.a5))}return B.eM(q,F.lp,new B.D(A.bQ,new B.a7(340,q,B.cs(n,q,q,q,q,A.af,!0),q),q),q,q,q,q,A.d4,q,new B.b7(p,A.X),q)},
$S:47}
C.dSK.prototype={
$0(){B.a3(this.b,!1).N(null)
var w=this.a
w.m(new C.dSJ(w,this.c))
E.dX(800,"",120,-0.5,0.3,"square")},
$S:0}
C.dSJ.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bi3()},
$S:0}
C.dSH.prototype={
$1(d){return new C.Vu(this.a.d,null)},
$S:z+68}
C.dSI.prototype={
$0(){},
$S:0}
C.dSU.prototype={
$1(d){return new B.dY(new C.dST(this.a),null)},
$S:19}
C.dST.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ahM(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.bo:A.aR
k=B.aH(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.B(B.a([D.fzK,A.b0,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.j,0,m,m),A.N,B.bv(B.m(4),B.li(A.bz,m,m,5,m,w.a/11,new B.m2(f,x.x)),A.aq),A.ac],v)
if(h)u.push(D.fqc)
else{h=f.j(0.1)
t=B.m(14)
s=B.I(f.j(0.5),A.q,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ac.Jv,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.DQ,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.w(B.a([r,A.au,q,new B.bK(A.a8,m,m,B.bM(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new C.dSR(l,e),m,m),m)],v),A.E,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bj,m,m,m))}u.push(A.R)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aQ(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dr,1,A.q,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.q(0,o)?A.aB:A.c
u.push(B.aB(m,B.p(m,new B.c9(A.aM,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.y(s,m,A.a8y,m,m,m,m,m,m,m,m,m),A.as,new B.by(1,A.bd,new B.y(r.a,m,new B.F(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bJ(n,n,n,n),new B.bk(t,t,t,t),m,m,A.n),m,m,m,A.eF,A.nf,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.dSS(l,o,e),m,m,m,m,m,m,!1,A.a5))}return B.bm(!0,new B.cT(new B.aX(0,1/0,0,k.a.b*0.75),B.cs(u,m,A2.y7,m,m,A.af,!0),m),!0,!1,A.ae,!0,!0)},
$S:86}
C.dSR.prototype={
$0(){var w=this.a
w.m(new C.dSP(w))
this.b.$1(new C.dSQ())
w.F1()},
$S:0}
C.dSP.prototype={
$0(){var w=this.a
$.ahM()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.dSQ.prototype={
$0(){},
$S:0}
C.dSS.prototype={
$0(){var w=this.a
w.m(new C.dSN(w,this.b))
this.c.$1(new C.dSO())
w.F1()},
$S:0}
C.dSN.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dSO.prototype={
$0(){},
$S:0}
C.dT_.prototype={
$0(){return B.a3(this.a,!1).iW()},
$S:0}
C.dT0.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.mj("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a3(t.b,!1).cg(B.e_(new C.dSZ(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dSZ.prototype={
$1(d){B.ls("construction")
return Aj.hEL()},
$S:z+46}
C.dT1.prototype={
$0(){return C.hqG(this.a,"ELECTRONICS LAB",this.b,A.aR)},
$S:0}
C.dT2.prototype={
$0(){var w=this.a
return w.m(w.d.gcVn())},
$S:0}
C.dT3.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gBt(v))
w.F1()},
$S:0}
C.cDA.prototype={
$2(d,e){var w=null,v=this.a.gax3().x
v===$&&B.c()
return B.b3(w,w,w,new C.b8T(v,w),A.az)},
$S:69}
C.cDz.prototype={
$3(d,e,f){var w=new B.aO($.X().r,A.ao,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.F(new B.b5(v,t))
w.F(new B.cR(v,u,v+e,u))
w.F(new B.cR(v,u,v,u+e))
w.F(new B.cR(v,u,v-e,u))
w.F(new B.cR(v,u,v,t))
w.F(new B.bE())
t=B.N()
t.r=A.c.j(f).gp(0)
this.a.aS(w,t)},
$S:456}
C.fNc.prototype={
$3(d,e,f){return new C.UN(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+47}
C.fNd.prototype={
$4(d,e,f,g){var w=x.Y
return new B.d_(e,!1,B.iq(A.A,g,null,new B.bf(B.cH(A.ct,e,null),new B.bp(0.85,1,w),w.k("bf<bL.T>"))),null)},
$C:"$4",
$R:4,
$S:32}
C.dPa.prototype={
$0(){return B.a3(this.a,!1).iW()},
$S:0}
C.dP9.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bYw(o):q.bAY(o,p),m=x.p
p=B.a([B.qo(new B.nj(n,new B.cx(p,x.aC)),A.pX,B.rY(),A.b8,A.b8,new C.dP7())],m)
n=t.d
if(n){w=A.k.E(q.gRT(),12)<4
v=w?150:96
u=B.m(16)
m=B.a([A.as],m)
if(w)m.push(D.bBk)
else m.push(A.b0)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.bo:A.av,s,s,s,s,s,A.a4),s,9,s,s,s,s,s,9))
m.push(A.as)
p.push(B.ao(s,B.at(B.db(s,B.B(m,A.m,s,A.e,A.j,0,s,s),s,s,A.ev,new B.o(A.w,s,s,u,s,s,A.n),A.na,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.uW)p.push(B.ao(s,B.at(B.p(s,s,A.f,s,s,A.KJ,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wG)p.push(B.ao(s,B.p(s,s,A.f,s,s,A.KJ,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aB(s,B.at(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dP8(q),s,s,s,s,s,s,!1,A.a5),s,s,0,0,s,s))
return B.bv(r,new B.an(A.V,s,A.b2,A.r,p,s),A.aq)},
$S:298}
C.dP7.prototype={
$2(d,e){var w=x.Y
return new B.d_(e,!1,B.iq(A.A,d,null,new B.bf(e,new B.bp(0.92,1,w),w.k("bf<bL.T>"))),null)},
$S:402}
C.dP8.prototype={
$0(){var w=this.a
return w.m(new C.dP6(w))},
$S:0}
C.dP6.prototype={
$0(){return this.a.e=null},
$S:0}
C.dP5.prototype={
$0(){var w=this.a
return w.m(new C.dP4(w,this.b))},
$S:0}
C.dP4.prototype={
$0(){return this.a.e=A.d.cD(F.kf,this.b)},
$S:0}
C.dP3.prototype={
$0(){var w=this.a
return w.m(new C.dP2(w))},
$S:0}
C.dP2.prototype={
$0(){return this.a.e=0},
$S:0}
C.dOZ.prototype={
$0(){var w=this.a
return w.m(new C.dOY(w))},
$S:0}
C.dOY.prototype={
$0(){return this.a.e=null},
$S:0}
C.dP1.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.m(o?20:8),m=A.w.j(0.55),l=x.p
m=B.p(p,B.B(B.a([D.fIe,A.as,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eJ,p,p,p,D.fkc,p,p,p),1),B.d(A.a.aY(A.o.u(B.dl(new B.T(Date.now(),0,!1))),2,"0")+":"+A.a.aY(A.o.u(B.h1(new B.T(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qy,p,p,p)],l),A.m,p,A.e,A.j,0,p,p),A.f,m,p,p,p,24,p,p,A.l0,p,p,p)
w=this.a
v=B.a([B.b3(p,p,p,new C.buQ(w.gRT(),this.c.d,p),A.az)],l)
o=w.e
if(o!=null){u=B.m(10)
t=B.I(A.aZ,A.q,1)
s=B.m(10)
o=B.p(p,B.B(B.a([B.aB(p,B.p(p,p,A.f,p,p,A.abI,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dP0(w),p,p,p,p,p,p,!1,A.a5),A.ei,B.p(p,p,A.f,p,p,A.abO,p,12,p,p,p,p,p,12),A.ei,B.p(p,p,A.f,p,p,D.b22,p,12,p,p,p,p,p,12),A.as,B.E(B.d(F.kf[o].a,p,1,A.a1,p,p,p,A.a8r,p,p,p),1)],l),A.m,p,A.e,A.j,0,p,p),A.f,A.cp,p,p,p,24,p,p,A.fv,p,p,p)
r=w.e
r.toString
v.push(B.bS(0,new B.D(D.by0,B.p(p,B.bv(s,B.w(B.a([o,B.E(B.b3(p,p,p,new C.aev(r,w.gRT(),p),A.fG),1)],l),A.m,p,A.e,A.j,0,A.p),A.aq),A.f,p,p,new B.o(A.w,p,t,u,D.dk3,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.m(18)
t=B.I(A.aZ,A.q,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jw,w.av_(F.kf[q],34,!1),p))
v.push(B.ao(8,B.at(B.p(p,B.B(s,A.m,p,A.e,A.P,0,p,p),A.f,p,p,new B.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lt,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bv(n,B.p(p,B.w(B.a([m,B.E(new B.an(A.V,p,A.b2,A.r,v,p),1)],l),A.m,p,A.e,A.j,0,A.p),A.f,S.XP,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:298}
C.dP0.prototype={
$0(){var w=this.a
return w.m(new C.dP_(w))},
$S:0}
C.dP_.prototype={
$0(){return this.a.e=null},
$S:0}
C.fgQ.prototype={
$0(){return D.e5K},
$S:z+48}
C.fgR.prototype={
$0(){return D.dE4},
$S:z+49}
C.fgS.prototype={
$0(){return D.dAG},
$S:z+50}
C.fgT.prototype={
$0(){return D.dDv},
$S:z+51}
C.fgU.prototype={
$0(){return D.dIn},
$S:z+52}
C.fgV.prototype={
$0(){return D.e1u},
$S:z+53}
C.fgW.prototype={
$0(){return D.e3F},
$S:z+54}
C.fgX.prototype={
$0(){return D.dHI},
$S:z+55}
C.chn.prototype={
$0(){return B.a3(this.a,!1).iW()},
$S:0}
C.cho.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=B.a([],k)
for(w=$.hui(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aQ(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.dn,16)],t)
n=A.c.j(0.85)
j.push(B.aB(m,B.p(m,new B.an(A.V,m,A.aa,A.r,B.a([new B.cM(m,-6,-6,m,m,m,new B.y(r.c,m,Ai.Jt,m,m,m,m,m,m,m,m,m),m),new B.bK(A.lL,m,m,B.w(B.a([new B.y(r.a,m,D.fiP,m,m,m,m,m,m,m,m,m),A.cO,new B.y(r.b,m,new B.F(!0,n,m,m,m,m,12,A.a7,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.E,m,A.e,A.P,0,A.p),m)],k),m),A.f,m,m,new B.o(m,m,m,new B.bk(q,q,q,q),p,new B.a8(A.ax,A.aC,A.x,o,m,m),A.n),m,v,m,m,A.bC,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.chm(d,r),m,m,m,m,m,m,!1,A.a5))}return B.bV(A.bB,j,A.bs,14,14)},
$S:175}
C.chm.prototype={
$0(){return B.a3(this.a,!1).cg(B.e_(new C.chl(this.b),!1,null,x.H))},
$S:0}
C.chl.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eJj.prototype={
$0(){var w=this.a
return w.w=w.d[w.b4j(w.f)]},
$S:0}
C.eJf.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cW.am()*7},
$S:0}
C.eJe.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.c5)
w.w=""},
$S:0}
C.eJh.prototype={
$0(){var w=this.a
return w.m(new C.eJg(w,this.b))},
$S:0}
C.eJg.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cG(w,this.b)},
$S:0}
C.eJi.prototype={
$1(d){return this.a.aZE(0)},
$S:2}
C.dVq.prototype={
$0(){return C.IU("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.dVr.prototype={
$0(){},
$S:0}
C.dVl.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.dVn.prototype={
$0(){return this.a.aZG(this.b)},
$S:0}
C.dVo.prototype={
$0(){var w=this.a
return w.m(new C.dVm(w))},
$S:0}
C.dVm.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.dVp.prototype={
$0(){var w=this.a
return w.aZG(w.d)},
$S:0}
C.dGP.prototype={
$2(d,e){return d+e},
$S:78}
C.dGQ.prototype={
$0(){},
$S:0}
C.dGK.prototype={
$2(d,e){return d+e},
$S:78}
C.dGN.prototype={
$0(){var w=this.a
return w.m(new C.dGM(w,this.b))},
$S:0}
C.dGM.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dGO.prototype={
$0(){var w=this.a
return w.m(new C.dGL(w))},
$S:0}
C.dGL.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.dSv.prototype={
$0(){return C.wU(this.b,this.a.d,"drawing")},
$S:0}
C.dSw.prototype={
$1(d){var w=this.a
return w.m(new C.dSu(w,d))},
$S:49}
C.dSu.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aI6(u,v,t))},
$S:0}
C.dSx.prototype={
$1(d){var w=this.a
return w.m(new C.dSt(w,d))},
$S:21}
C.dSt.prototype={
$0(){return A.d.gak(this.a.e).c.push(this.b.b)},
$S:0}
C.dSy.prototype={
$1(d){var w=this.a
return w.m(new C.dSs(w,d))},
$S:23}
C.dSs.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aI6(u,v,t))},
$S:0}
C.dSz.prototype={
$0(){var w=this.a
return w.m(new C.dSr(w,this.b))},
$S:0}
C.dSr.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.dSA.prototype={
$1(d){var w=this.a
return w.m(new C.dSq(w,d))},
$S:7}
C.dSq.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dSB.prototype={
$0(){var w=this.a
return w.m(new C.dSp(w))},
$S:0}
C.dSp.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dSC.prototype={
$0(){var w=this.a
return w.m(new C.dSo(w))},
$S:0}
C.dSo.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.dSD.prototype={
$0(){var w=this.a
return w.m(A.d.gBt(w.e))},
$S:0}
C.dSE.prototype={
$0(){var w=this.a
return w.m(new C.dSn(w))},
$S:0}
C.dSn.prototype={
$0(){var w=this.a
w.x=D.aww[A.o.E(A.d.cD(D.aww,w.x)+1,4)]},
$S:0}
C.egP.prototype={
$0(){return this.a.f.M(0,this.b)},
$S:0}
C.egQ.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.IU("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.egO(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.IU("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
C.egO.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.egR.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.egN(w))},
$S:11}
C.egN.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.egV.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aB(w,B.mf(new C.egT(v,e),w,A.b8,A.pX,w,w,new B.bp(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.egU(v,e),w,w,w,w,w,w,!1,A.a5)},
$S:82}
C.egU.prototype={
$0(){return this.a.c8r(this.b)},
$S:0}
C.egT.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dk(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fz(3.141592653589793*e)
m=B.m(16)
w=o?p:D.c0i
if(o)v=q.a.r.q(0,q.b)?A.bo.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.I(u.r.q(0,t)?A.bo:A.aZ,A.q,1)
if(o){r=B.dk()
r.fz(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fo(A.A,B.d(u[t],p,p,p,p,p,p,O.a8C,p,p,p),p,r,!0)
u=r}else u=D.fBc
return B.fo(A.A,B.p(A.A,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:129}
C.egW.prototype={
$0(){var w=this.a
return w.m(new C.egS(w,this.b))},
$S:0}
C.egS.prototype={
$0(){var w=this.a
w.d=this.b.a
w.axs()},
$S:0}
C.egX.prototype={
$0(){var w=this.a
return w.m(w.gc8q())},
$S:0}
C.eqK.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eqL.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eqI.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eqJ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eqH(w))},
$S:11}
C.eqH.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eqM.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eqN.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eqO.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aZF()},
$S:11}
C.eqP.prototype={
$0(){return this.a.c8x(this.b)},
$S:0}
C.eEB.prototype={
$1(d){return B.u(d.h(0,1))+","},
$S:71}
C.eEK.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a1,w,w,w,B.l(w,w,A.aQ,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.l_,B.B(B.a([v,A.ab,new B.dr(1,A.cn,B.eN(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e_),w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1873}
C.eEG.prototype={
$1(d){return this.a.m(new C.eEF())},
$S:2}
C.eEF.prototype={
$0(){},
$S:0}
C.eEH.prototype={
$0(){var w=this.a
return w.m(new C.eEE(w,this.b))},
$S:0}
C.eEE.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eEI.prototype={
$1(d){var w=this.a
return w.m(new C.eED(w,d))},
$S:7}
C.eED.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
C.eEJ.prototype={
$0(){var w=this.a
return w.m(new C.eEC(w))},
$S:0}
C.eEC.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.efU.prototype={
$0(){},
$S:0}
C.efV.prototype={
$0(){},
$S:0}
C.efN.prototype={
$0(){var w=this.a
return w.m(new C.efM(w))},
$S:0}
C.efM.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c3(u,1,!1,x.S)
w.r=0.9
C.a8e("hat",0.6)},
$S:0}
C.efO.prototype={
$0(){var w=this.a
return w.m(new C.efL(w))},
$S:0}
C.efL.prototype={
$0(){this.a.y=1.1
C.pZ("bell",36,200,0.4)},
$S:0}
C.efP.prototype={
$0(){var w=this.a
return w.m(new C.efK(w))},
$S:0}
C.efK.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.ar(Math.max(v,u)-t+1)
w.as=u
C.pZ("bell",12+A.o.E(u,12),500,0.5)},
$S:0}
C.efQ.prototype={
$0(){var w=this.a
return w.m(new C.efJ(w,this.b))},
$S:0}
C.efJ.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.efR.prototype={
$1(d){var w=this.a
return w.m(new C.efI(w,d))},
$S:7}
C.efI.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e4(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.efS.prototype={
$1(d){var w=this.a
return w.m(new C.efH(w,d))},
$S:7}
C.efH.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
C.efT.prototype={
$1(d){var w=this.a
return w.m(new C.efG(w,d))},
$S:7}
C.efG.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
C.cuh.prototype={
$0(){return B.a3(this.a,!1).iW()},
$S:0}
C.cui.prototype={
$0(){var w=this.a
return C.hqG(this.b,w.c,w.e,w.d)},
$S:0}
C.fR1.prototype={
$1(d){var w,v=null,u=B.m(24),t=this.a,s=t.j(0.4)
t=B.d(this.b,v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=B.d(this.c,v,v,v,v,v,v,D.f8l,v,v,v)
return B.ek(B.a([B.bM(!1,D.fqh,v,v,!0,v,v,new C.fR0(d),v,v)],x.p),v,v,F.n5,w,v,v,v,new B.b7(u,new B.ay(s,1,A.q,-1)),t,v)},
$S:18}
C.fR0.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.cud.prototype={
$0(){B.f_()
this.a.e.$0()},
$S:0}
C.cuc.prototype={
$0(){B.f_()
this.a.e.$0()},
$S:0}
C.cuj.prototype={
$0(){B.f_()
this.a.e.$0()},
$S:0}
C.cue.prototype={
$0(){var w=this.a
A.d.W(w.iI$,this.b.bj())
if(w.c!=null)this.c.$0()},
$S:0}
C.cug.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.D((v-w.oz$.a)/1e6,0,0.04)
w.oz$=d
w.nb$=A.o.an(v,1000)
w.pY(u)
if(w.c!=null)w.m(new C.cuf())},
$S:9}
C.cuf.prototype={
$0(){},
$S:0}
C.chj.prototype={
$0(){var w=this
return C.pZ(w.a,w.b,w.c,w.d)},
$S:1}
C.dXX.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dXW(w,d))},
$S:z+57}
C.dXW.prototype={
$0(){return this.a.cth(this.b)},
$S:0}
C.dXp.prototype={
$0(){var w,v,u,t=this.a,s=J.a4(t),r=s.gK(t),q=new Float64Array(r*4)
for(w=0;w<s.gK(t);++w){v=J.r(s.h(t,w),0)*3.141592653589793/180
u=J.r(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:665}
C.dXn.prototype={
$0(){return this.a.id=D.a3A},
$S:0}
C.dXo.prototype={
$0(){var w=this.b.a,v=B.S(w).k("Z<1>")
v=B.ph(new B.Z(w,new C.dXm(this.c),v),6,v.k("J.E"))
w=B.C(v,B.a5(v).k("J.E"))
return this.a.id=w},
$S:0}
C.dXm.prototype={
$1(d){return A.a.q(d.a.toLowerCase(),this.a)},
$S:z+58}
C.dXl.prototype={
$1(d){var w=null,v=B.cc(B.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,B.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.r,w,A.y,w,w,w,w,A.af)
return B.ek(B.a([B.bM(!1,A.pr,w,w,!0,w,w,new C.dXk(d),w,w)],x.p),w,w,F.n5,v,w,w,w,w,D.fBh,w)},
$S:18}
C.dXk.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.dXI.prototype={
$0(){return C.wU(this.b,this.a.d,"earth")},
$S:0}
C.dXJ.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new B.as(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gWb()
r=p.z
o=B.a([B.aB(A.ch,B.b3(q,q,q,new C.bfh(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dXw(p),new C.dXx(p),new C.dXy(p),q,q,q,q,q,q,q,new C.dXz(p),q,q,q,!1,A.a5)],x.p)
if(p.r==null)o.push(A6.acq)
w=this.b
if(w!=null)o.push(B.ao(8,p.c98(w),q,q,10,10,q,q))
return new B.eJ(new B.an(A.V,q,A.b2,A.r,o,q),p.d)},
$S:468}
C.dXx.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:248}
C.dXy.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gWb()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.D(u.x+v.b*w,-85,85)}},
$S:225}
C.dXw.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gWb()*u.z)
v=d.a.a
u.Q=A.k.D(-v.a*w,-160,160)
u.as=A.k.D(v.b*w,-100,100)},
$S:515}
C.dXz.prototype={
$1(d){var w=this.a,v=w.c9b(d.b)
if(v!=null)w.m(new C.dXq(w,v))
else w.m(new C.dXr(w))},
$S:64}
C.dXq.prototype={
$0(){return this.a.axB(this.b)},
$S:0}
C.dXr.prototype={
$0(){return this.a.fx=null},
$S:0}
C.dXK.prototype={
$0(){var w=this.a
w.e.bP(0,A.c5)
w.m(new C.dXv(w,this.b))},
$S:0}
C.dXv.prototype={
$0(){var w=this.a
w.id=D.a3A
w.axB(this.b)},
$S:0}
C.dXO.prototype={
$0(){var w=this.a
return w.m(new C.dXH(w))},
$S:0}
C.dXH.prototype={
$0(){var w=this.a
w.fx=null
w.atw(15,w.y,1)},
$S:0}
C.dXP.prototype={
$0(){var w=this.a
return w.m(new C.dXG(w,this.b))},
$S:0}
C.dXG.prototype={
$0(){var w=this.b.b
return this.a.atw(w.a,w.b,w.c)},
$S:0}
C.dXQ.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new C.dXF(w,v))},
$S:0}
C.dXF.prototype={
$0(){var w=this.b.a
return this.a.axB(w[A.cW.ar(w.length)])},
$S:0}
C.dXR.prototype={
$1(d){var w=this.a
return w.m(new C.dXE(w,d))},
$S:7}
C.dXE.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
C.dXS.prototype={
$1(d){var w=this.a
return w.m(new C.dXD(w,d))},
$S:7}
C.dXD.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.dXT.prototype={
$1(d){var w=this.a
return w.m(new C.dXC(w,d))},
$S:7}
C.dXC.prototype={
$0(){return this.a.fr=this.b},
$S:0}
C.dXU.prototype={
$0(){var w=this.a
return w.m(new C.dXB(w))},
$S:0}
C.dXB.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.dXV.prototype={
$0(){var w=this.a
return w.m(new C.dXA(w))},
$S:0}
C.dXA.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
C.dXL.prototype={
$0(){var w=this.a
return w.m(new C.dXu(w))},
$S:0}
C.dXu.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.dXM.prototype={
$0(){var w=this.a
return w.m(new C.dXt(w))},
$S:0}
C.dXt.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.dXN.prototype={
$0(){var w=this.a
return w.m(new C.dXs(w))},
$S:0}
C.dXs.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
C.dXj.prototype={
$2(d,e){var w=null
return B.E(B.w(B.a([B.d(d,w,w,w,w,w,w,D.aQc,w,w,w),A.uZ,B.d(e,w,2,A.a1,w,w,w,A.Uk,w,w,w)],x.p),A.E,w,A.e,A.j,0,A.p),1)},
$S:131}
C.dXi.prototype={
$0(){var w=this.a
return w.m(new C.dXh(w))},
$S:0}
C.dXh.prototype={
$0(){return this.a.fx=null},
$S:0}
C.deX.prototype={
$0(){var w=null,v=B.h2(w,w,w,w,B.d1(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.d2M,w,w),this.a),A.a6,A.cb,w,A.dS,A.c7)
v.eQ()
return v},
$S:335}
C.deY.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new B.x(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1875}
C.fgJ.prototype={
$0(){return D.dG0},
$S:z+59}
C.fgK.prototype={
$0(){return D.e3o},
$S:z+60}
C.fgL.prototype={
$0(){return D.dG2},
$S:z+61}
C.fgM.prototype={
$0(){return D.dAs},
$S:z+62}
C.fgN.prototype={
$0(){return D.dG_},
$S:z+63}
C.fgO.prototype={
$0(){return D.e1v},
$S:z+64}
C.fgP.prototype={
$0(){return D.e1t},
$S:z+65}
C.eFu.prototype={
$0(){return B.a3(this.a,!1).iW()},
$S:0}
C.eFv.prototype={
$0(){var w=this.a
return w.m(new C.eFt(w))},
$S:0}
C.eFt.prototype={
$0(){var w=this.a
return w.d=A.o.E(w.gaSu()+1,16)},
$S:0}
C.eFw.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=B.a([],l)
for(w=$.huh(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new B.aQ(18,18)
q=s.d
p=new B.ay(q.j(0.5),1,A.q,-1)
o=B.a([q.j(0.28),D.bkr],u)
k.push(B.aB(n,B.p(n,B.w(B.a([B.W(s.c,q,n,n,n,30),A.N,new B.y(s.a,n,D.fd_,n,A.L,n,n,n,n,2,n,n),A.cO,new B.y(s.b,n,D.fib,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b7,A.j,0,A.p),A.f,n,n,new B.o(n,n,new B.bJ(p,p,p,p),new B.bk(r,r,r,r),n,new B.a8(A.ax,A.aC,A.x,o,n,n),A.n),n,v,n,n,A.cm,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eFs(d,s),n,n,n,n,n,n,!1,A.a5))}return B.bV(A.fW,k,A.bs,10,10)},
$S:175}
C.eFs.prototype={
$0(){return B.a3(this.a,!1).cg(B.e_(new C.eFr(this.b),!1,null,x.H))},
$S:0}
C.eFr.prototype={
$1(d){return this.a.e.$0()},
$S:39}
C.exY.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
C.ey8.prototype={
$0(){return C.wU(this.b,this.a.d,"solar-system")},
$S:0}
C.ey9.prototype={
$2(d,e){var w,v=null,u=this.a,t=new B.as(e.b,e.d)
u.ch=t
t=B.a([B.aB(A.ch,B.b3(v,v,v,new C.brD(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ey5(u),new C.ey6(u),v,v,v,v,v,v,v,new C.ey7(u),v,v,v,!1,A.a5)],x.p)
w=this.b
if(w!=null)t.push(B.ao(8,u.c9d(w),v,v,10,10,v,v))
return new B.eJ(new B.an(A.V,v,A.b2,A.r,t,v),u.d)},
$S:468}
C.ey5.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:248}
C.ey6.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ad(0,d.a)},
$S:225}
C.ey7.prototype={
$1(d){var w=this.a,v=w.c9g(d.b)
if(v!=null)w.b_0(v)},
$S:64}
C.eya.prototype={
$0(){var w=this.a
return w.m(new C.ey4(w))},
$S:0}
C.ey4.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.J
w.w=1},
$S:0}
C.eyb.prototype={
$0(){return this.a.b_0(this.b)},
$S:0}
C.eyc.prototype={
$1(d){var w=this.a
return w.m(new C.ey3(w,d))},
$S:7}
C.ey3.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
C.eyd.prototype={
$1(d){var w=this.a
return w.m(new C.ey2(w,d))},
$S:7}
C.ey2.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eye.prototype={
$0(){var w=this.a
return w.m(new C.ey1(w))},
$S:0}
C.ey1.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
C.eyf.prototype={
$0(){var w=this.a
return w.m(new C.ey0(w))},
$S:0}
C.ey0.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.eyg.prototype={
$0(){var w=this.a
return w.m(new C.ey_(w))},
$S:0}
C.ey_.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.eyh.prototype={
$0(){var w=this.a
return w.m(new C.exZ(w))},
$S:0}
C.exZ.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.exX.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.ab(d/365.25,w)+" Earth years"}else w=A.k.ab(d,0)+" Earth days"
return w},
$S:319}
C.exW.prototype={
$2(d,e){var w=null
return B.E(B.w(B.a([B.d(d,w,w,w,w,w,w,D.aQc,w,w,w),A.uZ,B.d(e,w,2,A.a1,w,w,w,A.Uk,w,w,w)],x.p),A.E,w,A.e,A.j,0,A.p),1)},
$S:131}
C.exV.prototype={
$0(){var w=this.a
return w.m(new C.exU(w))},
$S:0}
C.exU.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
C.eZS.prototype={
$0(){var w=null,v=B.h2(w,w,w,w,B.d1(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,K.Qz,w,w),this.a),A.a6,A.cb,w,A.dS,A.c7)
v.eQ()
return v},
$S:335}
C.eZT.prototype={
$1(d){return d.c>0},
$S:z+10}
C.eZU.prototype={
$1(d){return d.c>0},
$S:z+10}
C.dY0.prototype={
$0(){},
$S:0}
C.dYt.prototype={
$1(d){return d!=null},
$S:392}
C.dYf.prototype={
$0(){var w=this.a
return w.m(new C.dY6(w,this.b))},
$S:0}
C.dY6.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dYg.prototype={
$0(){var w=this.a
return w.m(new C.dY5(w))},
$S:0}
C.dY5.prototype={
$0(){return this.a.f=!1},
$S:0}
C.dYh.prototype={
$0(){var w=this.a
return w.m(new C.dYe(w))},
$S:0}
C.dYe.prototype={
$0(){return this.a.f=!0},
$S:0}
C.dYl.prototype={
$0(){var w=this.a
return w.m(new C.dYd(w))},
$S:0}
C.dYd.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dYm.prototype={
$1(d){var w=this.a
return w.m(new C.dYc(w,d))},
$S:7}
C.dYc.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.dYn.prototype={
$0(){var w=this.a
return w.m(w.gcwy())},
$S:0}
C.dYo.prototype={
$1(d){var w=this.a
return w.m(new C.dYb(w,d))},
$S:7}
C.dYb.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.dYp.prototype={
$1(d){var w=this.a
return w.m(new C.dYa(w,d))},
$S:7}
C.dYa.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.dYq.prototype={
$1(d){var w=this.a
return w.m(new C.dY9(w,d))},
$S:7}
C.dY9.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dYr.prototype={
$1(d){var w=this.a
return w.m(new C.dY8(w,d))},
$S:7}
C.dY8.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.dYs.prototype={
$0(){var w=this.a
return w.m(new C.dY7(w))},
$S:0}
C.dY7.prototype={
$0(){return this.a.ay=4},
$S:0}
C.dYi.prototype={
$0(){var w=this.a
return w.m(new C.dY4(w))},
$S:0}
C.dY4.prototype={
$0(){return this.a.ay=7.67},
$S:0}
C.dYj.prototype={
$0(){var w=this.a
return w.m(new C.dY3(w))},
$S:0}
C.dY3.prototype={
$0(){return this.a.ay=9},
$S:0}
C.dYk.prototype={
$0(){var w=this.a
return w.m(new C.dY2(w))},
$S:0}
C.dY2.prototype={
$0(){return this.a.ay=11.3},
$S:0}
C.dY_.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=B.a([B.bS(0,B.c0(g,new B.o(D.biX,g,g,B.m(20),g,g,A.n),A.bf),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.z9[q]
n=B.b0(o.d)
o=B.w(B.a([new B.y(o.a,g,new B.F(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new B.y(B.u(D.z9[q].b)+" m/s\xb2",g,D.fhw,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p)
n=p+t
m=B.p(g,g,A.f,A.dr,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?B.W(T.NL,B.b0(D.z9[q].d),g,g,g,22):B.p(g,g,A.f,g,g,new B.o(B.b0(D.z9[q].d),g,g,g,B.a([new B.ac(0,A.G,B.b0(D.z9[q].d).j(0.6),A.J,10)],u),g,A.a4),g,22,g,g,g,g,g,22)
j=B.p(g,g,A.f,B.b0(D.z9[q].d).j(0.6),g,g,g,3,g,A.fv,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.ab(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,B.a([new B.cM(p,8,g,g,f,g,o,g),new B.cM(n-0.5,54,g,e,g,g,m,g),new B.cM(n-11,54+s*(l/20),g,g,g,g,k,g),new B.cM(p,g,g,8,f,g,B.w(B.a([j,A.au,new B.y(i,g,A.rY,g,g,g,g,g,g,g,g,g),new B.y(h,g,D.f9B,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.j,0,A.p),g)],a0))}if(!w.x&&A.d.d8(v,new C.dXZ()))a1.push(D.b72)
return new B.an(A.V,g,A.aa,A.r,a1,g)},
$S:68}
C.dXZ.prototype={
$1(d){return d==null},
$S:392}
C.dY1.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=B.m(8)
p=B.p(v,v,A.f,v,v,new B.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=B.db(v,v,v,v,A.b8,new B.o(v,v,v,B.m(8),v,new B.a8(A.a3,A.a8,A.x,B.a([B.b0(t).j(0.9),B.b0(t).j(0.4)],x.O),v,v),A.n),A.im,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.ab(r,1):C.GS(r)
u=u.ax*9.81/s
u=u<10?A.k.ab(u,2):A.k.ab(u,0)
return new B.an(A.V,v,A.aa,A.r,B.a([p,t,B.ao(v,B.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.ffP,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:68}
C.dXY.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=B.b3(v,v,v,new C.bav(new B.x(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.az)
o=A.w.j(0.55)
p=B.m(14)
q=B.I(A.bz,A.q,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.q(u,"forever")||A.a.q(u,"again"))u=A.bo
else u=A.a.q(u,"escapes")?A.aR:A.c
u=B.d(t,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.ab(Math.sqrt(58.86870477034412),1)
s=A.k.ab(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+C.GS(A.k.D(r.cx.gcH()-6371,0,9e9))+" km":""
w=x.p
return new B.an(A.V,v,A.b2,A.r,B.a([n,B.ao(v,B.p(v,B.w(B.a([u,A.bA,B.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,I.aRU,v,v,v)],w),A.E,v,A.e,A.P,0,A.p),A.f,v,v,new B.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bT,v,v,v),v,v,12,12,8,v)],w),v)},
$S:68}
C.eqS.prototype={
$0(){return C.wU(this.b,this.a.d,"size-compare")},
$S:0}
C.eqT.prototype={
$0(){var w=this.a
return w.m(new C.eqR(w,this.b))},
$S:0}
C.eqR.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eqU.prototype={
$0(){var w=this.a
return w.m(new C.eqQ(w,this.b))},
$S:0}
C.eqQ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eY1.prototype={
$3(d,e,f){var w,v,u=this.a
$.X()
w=B.N()
w.r=f.j(0.2).gp(0)
w.z=new B.hC(A.G,Math.max(2,e*0.18))
u.af(d,e*1.12,w)
w=B.N()
v=B.ar(f,A.w,0.6)
v.toString
w.sau(new B.c_(V.xa,0.5,A.x,null,0,B.a([A.c,f,v],x.O),I.a2P,null).aA(0,B.bU(d,e)))
u.af(d,e,w)},
$S:1876}
C.dGg.prototype={
$1(d){return d.e<=0},
$S:z+67}
C.dG4.prototype={
$1(d){return d.b},
$S:z+45}
C.dG5.prototype={
$0(){return C.wU(this.b,this.a.d,"black-hole")},
$S:0}
C.dG6.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new B.as(e.b,e.d)
p.Q=o
o=B.aB(A.ch,B.b3(q,q,q,new C.b9U(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dG2(p),q,q,q,q,q,q,q,q,q,new C.dG3(p),q,q,q,q,!1,A.a5)
w=A.w.j(0.55)
v=B.m(14)
u=B.I(A.bz,A.q,1)
t=p.r
if(t<1000)t=A.k.ab(t,t<10?1:0)+" Suns"
else t=C.fur(t)+" Suns"
t=p.aeN("MASS",t)
s=2.953*p.r
r=x.p
r=B.a([o,B.ao(q,B.p(q,B.B(B.a([t,p.aeN("EDGE WIDTH",(s<100?A.k.ab(s,1):C.GS(s))+" km"),p.aeN("TIME",A.k.ab(this.b*100,0)+"%"),p.aeN("EATEN",""+p.as)],r),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bT,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.ek_)
return new B.eJ(new B.an(A.V,q,A.b2,A.r,r,q),p.d)},
$S:468}
C.dG3.prototype={
$1(d){return this.a.b_1(d.b)},
$S:23}
C.dG2.prototype={
$1(d){if(A.cW.am()<0.12)this.a.b_1(d.b)},
$S:21}
C.dG8.prototype={
$1(d){var w=this.a
return w.m(new C.dG1(w,d))},
$S:7}
C.dG1.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
C.dG9.prototype={
$0(){var w=this.a
return w.m(new C.dG0(w))},
$S:0}
C.dG0.prototype={
$0(){return this.a.r=10},
$S:0}
C.dGa.prototype={
$0(){var w=this.a
return w.m(new C.dG_(w))},
$S:0}
C.dG_.prototype={
$0(){return this.a.r=21},
$S:0}
C.dGb.prototype={
$0(){var w=this.a
return w.m(new C.dFZ(w))},
$S:0}
C.dFZ.prototype={
$0(){return this.a.r=43e5},
$S:0}
C.dGc.prototype={
$0(){var w=this.a
return w.m(new C.dFY(w))},
$S:0}
C.dFY.prototype={
$0(){return this.a.r=65e8},
$S:0}
C.dGd.prototype={
$0(){var w=this.a
return w.m(new C.dFX(w))},
$S:0}
C.dFX.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dGe.prototype={
$0(){var w=this.a
return w.m(new C.dFW(w))},
$S:0}
C.dFW.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.dGf.prototype={
$0(){var w=this.a
return w.m(new C.dFV(w))},
$S:0}
C.dFV.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.dG7.prototype={
$0(){var w=this.a
return w.m(new C.dFU(w))},
$S:0}
C.dFU.prototype={
$0(){var w=this.a
A.d.a8(w.z)
w.as=0},
$S:0}
C.dWK.prototype={
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
C.dWA.prototype={
$0(){return C.wU(this.b,this.a.d,"galaxy")},
$S:0}
C.dWB.prototype={
$0(){var w=this.a
return w.m(new C.dWz(w,this.b))},
$S:0}
C.dWz.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.a_b()},
$S:0}
C.dWC.prototype={
$0(){var w=this.a
return w.m(new C.dWy(w))},
$S:0}
C.dWy.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.a_b()}w.cwp()},
$S:0}
C.dWD.prototype={
$1(d){var w=this.a
return w.m(new C.dWx(w,d))},
$S:7}
C.dWx.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.a_b()},
$S:0}
C.dWE.prototype={
$1(d){var w=this.a
return w.m(new C.dWw(w,d))},
$S:7}
C.dWw.prototype={
$0(){var w=this.a
w.r=this.b
w.a_b()},
$S:0}
C.dWF.prototype={
$1(d){var w=this.a
return w.m(new C.dWv(w,d))},
$S:7}
C.dWv.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dWG.prototype={
$1(d){var w=this.a
return w.m(new C.dWu(w,d))},
$S:7}
C.dWu.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.dWH.prototype={
$0(){var w=this.a
return w.m(new C.dWt(w))},
$S:0}
C.dWt.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.dWI.prototype={
$0(){var w=this.a
return w.m(new C.dWs(w))},
$S:0}
C.dWs.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
C.dWJ.prototype={
$0(){var w=this.a
return w.m(new C.dWr(w))},
$S:0}
C.dWr.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.dc5.prototype={
$6(d,e,f,g,h,i){return g.ad(0,new B.x((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1878}
C.eq6.prototype={
$0(){return C.wU(this.b,this.a.d,"seasons-moon")},
$S:0}
C.eq7.prototype={
$0(){var w=this.a
return w.m(new C.eq5(w))},
$S:0}
C.eq5.prototype={
$0(){return this.a.f="seasons"},
$S:0}
C.eq8.prototype={
$0(){var w=this.a
return w.m(new C.eq4(w))},
$S:0}
C.eq4.prototype={
$0(){return this.a.f="moon"},
$S:0}
C.eq9.prototype={
$0(){var w=this.a
return w.m(new C.eq3(w))},
$S:0}
C.eq3.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.eqa.prototype={
$0(){var w=this.a
return w.m(new C.eq2(w))},
$S:0}
C.eq2.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
C.eqb.prototype={
$1(d){var w=this.a
return w.m(new C.eq1(w,d))},
$S:7}
C.eq1.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eqc.prototype={
$1(d){var w=this.a
return w.m(new C.eq0(w,d))},
$S:7}
C.eq0.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eqd.prototype={
$1(d){var w=this.a
return w.m(new C.eq_(w,d))},
$S:7}
C.eq_.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eqe.prototype={
$1(d){var w=this.a
return w.m(new C.epZ(w,d))},
$S:7}
C.epZ.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=C.aLZ.prototype
w.bw0=w.t
w=C.aL8.prototype
w.bv8=w.t
w=C.aL9.prototype
w.bv9=w.t
w=C.aLd.prototype
w.bvd=w.t
w=C.aMP.prototype
w.bwY=w.t
w=C.aLX.prototype
w.bvZ=w.t
w=C.aM5.prototype
w.bw7=w.t
w=C.aMa.prototype
w.bwc=w.t
w=C.axG.prototype
w.bsh=w.t
w=C.axH.prototype
w.bsi=w.t
w=C.aJC.prototype
w.bty=w.t
w=C.aLm.prototype
w.bvm=w.t
w=C.aLa.prototype
w.bva=w.t
w=C.aLr.prototype
w.bvs=w.t
w=C.aLT.prototype
w.bvV=w.t
w=C.aMi.prototype
w.bwk=w.t
w=C.aLw.prototype
w.bvy=w.t
w=C.aLx.prototype
w.bvz=w.t
w=C.aLy.prototype
w.bvA=w.t
w=C.aM1.prototype
w.bw3=w.t
w=C.aM4.prototype
w.bw6=w.t
w=C.aL7.prototype
w.bv7=w.t
w=C.aLu.prototype
w.bvv=w.t
w=C.aM0.prototype
w.bw2=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(C.aEf.prototype,"gawt","c4p",1)
var r
v(r=C.aCL.prototype,"gccF","ccG",41)
w(r,"gc4Z","aYr",1)
w(C.aCN.prototype,"gc6H","c6I",1)
u(C.aD3.prototype,"gc6N","c6O",40)
w(r=C.aHg.prototype,"gcw5","cw6",1)
w(r,"gc6P","adS",1)
w(r,"gch6","ch7",1)
w(r,"gc6M","adR",4)
w(r=C.aEe.prototype,"gbGM","a9n",4)
w(r,"gcgn","b0I",1)
w(r,"gck8","agj",4)
t(r,"gc6R","adT",4)
w(C.aEu.prototype,"gbYd","bYe",1)
t(r=C.a4m.prototype,"gBt","a8",1)
v(r,"gcTc","anc",0)
v(r,"gcPH","LM",0)
w(r,"gcVn","bi3",1)
s(C.aiA.prototype,"gc7b",0,5,null,["$5"],["qs"],42,0,0)
w(r=C.aDf.prototype,"gc7c","c7d",1)
w(r,"gcmY","agF",4)
w(r,"gccV","af_",4)
w(r,"gcu7","ahM",4)
w(r=C.aEH.prototype,"gc8s","c8t",1)
t(r,"gc8p","aZE",1)
w(C.aE2.prototype,"gc8q","axs",1)
t(C.aEl.prototype,"gc8u","c8v",1)
v(r=C.aDq.prototype,"gc99","c9a",56)
w(r,"gbOL","bOM",1)
w(r=C.aDr.prototype,"gcwy","cwz",1)
w(r,"gc9e","c9f",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.ajO,C.G6,C.uU,C.aRV,C.a30,C.b9X,C.c2n,C.y9,C.Cl,C.np,C.baE,C.AB,C.bsl,C.q9,C.qQ,C.Cp,C.Zc,C.aeC,C.a0r,C.Cz,C.abz,C.abP,C.adI,C.FR,C.bla,C.PZ,C.eb,C.tA,C.aaf,C.abl,C.a4m,C.mG,C.baF,C.fN,C.mb,C.btF,C.aI6,C.qJ,C.ab0,C.ab1,C.v7,C.Pc,C.y7,C.Pb,C.btA,C.PG,C.aeH])
u(B.hS,[C.fwN,C.fmk,C.ftx,C.fty,C.fwK,C.fwL,C.e93,C.e9m,C.enB,C.en8,C.en9,C.ena,C.enb,C.enc,C.end,C.ene,C.enf,C.en6,C.en7,C.en5,C.enw,C.enx,C.eny,C.dGl,C.dGn,C.dGq,C.dGB,C.c2o,C.c2p,C.fg9,C.fga,C.fgb,C.fgi,C.fgj,C.fgk,C.dIn,C.dI4,C.dIo,C.dI_,C.dHV,C.dHX,C.dI2,C.dIf,C.dId,C.dIe,C.dIc,C.dI9,C.dIb,C.eXw,C.eXd,C.eXk,C.eXt,C.eX7,C.diV,C.diW,C.diS,C.diT,C.diU,C.diX,C.diY,C.diZ,C.dj_,C.dj0,C.dj1,C.dj2,C.dj3,C.dj4,C.emx,C.emy,C.emz,C.emA,C.emv,C.emw,C.en1,C.emE,C.emG,C.emq,C.emY,C.emW,C.emX,C.emV,C.emU,C.ems,C.eyI,C.eyG,C.eyu,C.eyy,C.eyt,C.eyz,C.eyA,C.eyE,C.eET,C.eEZ,C.bMn,C.bMy,C.bMt,C.bMz,C.bMB,C.bMo,C.bMm,C.bMG,C.bMu,C.bMx,C.bMw,C.bMv,C.bGZ,C.fIu,C.fIx,C.fIv,C.bGG,C.bGB,C.bGA,C.bGY,C.bGQ,C.bGR,C.bGP,C.bGS,C.bGq,C.bGs,C.bGo,C.bGp,C.bGg,C.bGh,C.fgl,C.fgm,C.fgn,C.fg8,C.fgo,C.fg7,C.fgp,C.fgc,C.fg6,C.fgd,C.fg5,C.fge,C.fg4,C.fgf,C.fg2,C.fg3,C.fgg,C.fg0,C.fg1,C.fgh,C.fg_,C.dSV,C.dSW,C.dSL,C.dSH,C.dSU,C.dSZ,C.cDz,C.fNc,C.fNd,C.chl,C.eJi,C.dSw,C.dSx,C.dSy,C.dSA,C.egT,C.eEB,C.eEK,C.eEG,C.eEI,C.efR,C.efS,C.efT,C.fR1,C.cug,C.dXX,C.dXm,C.dXl,C.dXx,C.dXy,C.dXw,C.dXz,C.dXR,C.dXS,C.dXT,C.eFr,C.ey5,C.ey6,C.ey7,C.eyc,C.eyd,C.exX,C.eZT,C.eZU,C.dYt,C.dYm,C.dYo,C.dYp,C.dYq,C.dYr,C.dXZ,C.eY1,C.dGg,C.dG4,C.dG3,C.dG2,C.dG8,C.dWK,C.dWD,C.dWE,C.dWF,C.dWG,C.dc5,C.eqb,C.eqc,C.eqd,C.eqe])
u(B.k6,[C.fwM,C.e98,C.e96,C.enh,C.enu,C.dHW,C.dIi,C.dOf,C.eXz,C.eXA,C.eXc,C.eXp,C.eXq,C.eXl,C.eXr,C.eX6,C.emt,C.emu,C.en0,C.emT,C.emI,C.eES,C.bMA,C.bMC,C.bME,C.bMp,C.bMr,C.bH_,C.cmK,C.fIw,C.bGz,C.bGW,C.bGV,C.dST,C.cDA,C.dP9,C.dP7,C.dP1,C.cho,C.dGP,C.dGK,C.egV,C.dXJ,C.dXj,C.deY,C.eFw,C.ey9,C.exW,C.dY_,C.dY1,C.dXY,C.dG6])
u(B.ag,[C.Vu,C.VR,C.Uo,C.Us,C.No,C.aHf,C.VQ,C.W4,C.Wf,C.aiy,C.V3,C.axn,C.UN,C.Wl,C.Vb,C.Up,C.V2,C.VL,C.VV,C.We,C.VK,C.Vh,C.Wh,C.W3,C.Vi,C.VW,C.Un,C.Vf,C.VS])
u(B.ah,[C.bjJ,C.aLZ,C.aL8,C.aLd,C.aD3,C.aMP,C.aLX,C.aM5,C.aMa,C.axG,C.bwM,C.aJC,C.aLm,C.aMi,C.aLr,C.aLa,C.bje,C.aE2,C.aEl,C.bkp,C.aLT,C.aLw,C.bkt,C.aM4,C.aLy,C.aM1,C.aL7,C.aLu,C.aM0])
u(B.j0,[C.e91,C.e92,C.e9e,C.e9f,C.e9a,C.e99,C.e9b,C.e97,C.e9c,C.e95,C.e9d,C.e94,C.e9i,C.e9h,C.e9j,C.e9g,C.e9k,C.e9l,C.e9n,C.enA,C.enC,C.enD,C.enj,C.eni,C.eng,C.enp,C.enq,C.enm,C.enr,C.enl,C.ens,C.ent,C.enk,C.env,C.eno,C.enz,C.enn,C.dGI,C.dGH,C.dGk,C.dGJ,C.dGm,C.dGo,C.dGp,C.dGr,C.dGh,C.dGi,C.dGj,C.dGy,C.dGz,C.dGA,C.dGx,C.dGC,C.dGw,C.dGD,C.dGv,C.dGE,C.dGu,C.dGF,C.dGt,C.dGG,C.dGs,C.dI1,C.dI0,C.dI5,C.dHY,C.dHZ,C.dI6,C.dI7,C.dI8,C.dI3,C.dHU,C.dIh,C.dIg,C.dIj,C.dIk,C.dIl,C.dIa,C.dIm,C.cNW,C.dOd,C.dOc,C.dOe,C.fgA,C.fgB,C.fgC,C.fgD,C.fgE,C.fgF,C.fgG,C.fgH,C.fgI,C.eXy,C.eXx,C.eXf,C.eXe,C.eXa,C.eX9,C.eXb,C.eX8,C.eXn,C.eXm,C.eXo,C.eXg,C.eXs,C.eXj,C.eXu,C.eXi,C.eXv,C.eXh,C.emC,C.emr,C.emB,C.emn,C.emD,C.emF,C.emo,C.emp,C.en_,C.emZ,C.emQ,C.emR,C.emS,C.emM,C.emN,C.emL,C.emO,C.emK,C.emP,C.emJ,C.emH,C.diR,C.eyH,C.eyj,C.eyi,C.eys,C.eyB,C.eyr,C.eyC,C.eyq,C.eyD,C.eyp,C.eyo,C.eyF,C.eyn,C.eyv,C.eym,C.eyw,C.eyl,C.eyx,C.eyk,C.eER,C.eEQ,C.eEU,C.eEP,C.eEV,C.eEO,C.eEW,C.eEN,C.eEX,C.eEM,C.eEY,C.eEL,C.bMD,C.bMF,C.bMq,C.bMs,C.bGD,C.bGE,C.bGC,C.bGF,C.bGH,C.bGt,C.bGu,C.bGv,C.bGw,C.bGx,C.bGy,C.bGX,C.bG6,C.bGN,C.bGO,C.bGL,C.bGM,C.bGJ,C.bGK,C.bGT,C.bGI,C.bGU,C.bG7,C.bGr,C.bGd,C.bGe,C.bGc,C.bGf,C.bGb,C.bGi,C.bGj,C.bGk,C.bGl,C.bGa,C.bGm,C.bG9,C.bGn,C.bG8,C.dSM,C.dSX,C.dSY,C.dSK,C.dSJ,C.dSI,C.dSR,C.dSP,C.dSQ,C.dSS,C.dSN,C.dSO,C.dT_,C.dT0,C.dT1,C.dT2,C.dT3,C.dPa,C.dP8,C.dP6,C.dP5,C.dP4,C.dP3,C.dP2,C.dOZ,C.dOY,C.dP0,C.dP_,C.fgQ,C.fgR,C.fgS,C.fgT,C.fgU,C.fgV,C.fgW,C.fgX,C.chn,C.chm,C.eJj,C.eJf,C.eJe,C.eJh,C.eJg,C.dVq,C.dVr,C.dVl,C.dVn,C.dVo,C.dVm,C.dVp,C.dGQ,C.dGN,C.dGM,C.dGO,C.dGL,C.dSv,C.dSu,C.dSt,C.dSs,C.dSz,C.dSr,C.dSq,C.dSB,C.dSp,C.dSC,C.dSo,C.dSD,C.dSE,C.dSn,C.egP,C.egQ,C.egO,C.egR,C.egN,C.egU,C.egW,C.egS,C.egX,C.eqK,C.eqL,C.eqI,C.eqJ,C.eqH,C.eqM,C.eqN,C.eqO,C.eqP,C.eEF,C.eEH,C.eEE,C.eED,C.eEJ,C.eEC,C.efU,C.efV,C.efN,C.efM,C.efO,C.efL,C.efP,C.efK,C.efQ,C.efJ,C.efI,C.efH,C.efG,C.cuh,C.cui,C.fR0,C.cud,C.cuc,C.cuj,C.cue,C.cuf,C.chj,C.dXW,C.dXp,C.dXn,C.dXo,C.dXk,C.dXI,C.dXq,C.dXr,C.dXK,C.dXv,C.dXO,C.dXH,C.dXP,C.dXG,C.dXQ,C.dXF,C.dXE,C.dXD,C.dXC,C.dXU,C.dXB,C.dXV,C.dXA,C.dXL,C.dXu,C.dXM,C.dXt,C.dXN,C.dXs,C.dXi,C.dXh,C.deX,C.fgJ,C.fgK,C.fgL,C.fgM,C.fgN,C.fgO,C.fgP,C.eFu,C.eFv,C.eFt,C.eFs,C.exY,C.ey8,C.eya,C.ey4,C.eyb,C.ey3,C.ey2,C.eye,C.ey1,C.eyf,C.ey0,C.eyg,C.ey_,C.eyh,C.exZ,C.exV,C.exU,C.eZS,C.dY0,C.dYf,C.dY6,C.dYg,C.dY5,C.dYh,C.dYe,C.dYl,C.dYd,C.dYc,C.dYn,C.dYb,C.dYa,C.dY9,C.dY8,C.dYs,C.dY7,C.dYi,C.dY4,C.dYj,C.dY3,C.dYk,C.dY2,C.eqS,C.eqT,C.eqR,C.eqU,C.eqQ,C.dG5,C.dG1,C.dG9,C.dG0,C.dGa,C.dG_,C.dGb,C.dFZ,C.dGc,C.dFY,C.dGd,C.dFX,C.dGe,C.dFW,C.dGf,C.dFV,C.dG7,C.dFU,C.dWA,C.dWB,C.dWz,C.dWC,C.dWy,C.dWx,C.dWw,C.dWv,C.dWu,C.dWH,C.dWt,C.dWI,C.dWs,C.dWJ,C.dWr,C.eq6,C.eq7,C.eq5,C.eq8,C.eq4,C.eq9,C.eq3,C.eqa,C.eq2,C.eq1,C.eq0,C.eq_,C.epZ])
t(C.bwW,C.aLZ)
t(C.aEf,C.bwW)
u(B.mq,[C.bgP,C.baX,C.brK,C.b9F,C.bqo,C.bpQ,C.baj,C.bpS,C.btP,C.bgN,C.brF,C.aiA,C.b8T,C.buQ,C.aev,C.bv1,C.bpR,C.blb,C.bfh,C.brD,C.bav,C.brb,C.b9U,C.bf8,C.bqr])
t(C.aL9,C.aL8)
t(C.aCL,C.aL9)
t(C.bwK,C.aLd)
t(C.aCN,C.bwK)
u(B.lU,[C.Kp,C.a0e,C.Jn])
u(B.au,[C.bqM,C.aeM,C.adE,C.Q7,C.brf,C.a8f,C.bd3,C.b6F,C.f4,C.hn,C.b6G,C.j6,C.Fg])
t(C.aHg,C.aMP)
t(C.bgM,B.oc)
t(C.aEe,C.aLX)
t(C.bkh,C.aM5)
t(C.aEu,C.aMa)
t(C.axH,C.axG)
t(C.aiz,C.axH)
t(C.aDf,C.bwM)
t(C.b8U,C.aJC)
t(C.bjc,C.aLm)
t(C.bx2,C.aMi)
t(C.aEH,C.bx2)
t(C.bwN,C.aLr)
t(C.bjl,C.bwN)
t(C.bwJ,C.aLa)
t(C.biZ,C.bwJ)
t(C.bwV,C.aLT)
t(C.bjV,C.bwV)
t(C.aLx,C.aLw)
t(C.aDq,C.aLx)
t(C.bx_,C.aM4)
t(C.bkg,C.bx_)
t(C.bwP,C.aLy)
t(C.aDr,C.bwP)
t(C.bwY,C.aM1)
t(C.bkd,C.bwY)
t(C.bwI,C.aL7)
t(C.biY,C.bwI)
t(C.bwO,C.aLu)
t(C.bjo,C.bwO)
t(C.bwX,C.aM0)
t(C.bkc,C.bwX)
w(C.aLZ,B.cp)
w(C.bwW,C.qJ)
w(C.aL8,B.cp)
w(C.aL9,C.qJ)
w(C.aLd,B.cp)
w(C.bwK,C.qJ)
w(C.aMP,B.eT)
w(C.aLX,B.cp)
w(C.aM5,B.cp)
w(C.aMa,B.cp)
w(C.axG,B.cp)
w(C.axH,C.qJ)
w(C.aJC,B.cp)
v(C.bwM,B.ey)
w(C.aLm,B.cp)
w(C.aLa,B.cp)
w(C.bwJ,C.qJ)
w(C.aLr,B.cp)
w(C.bwN,C.qJ)
w(C.aLT,B.cp)
w(C.bwV,C.qJ)
w(C.aMi,B.cp)
w(C.bx2,C.qJ)
w(C.aLw,B.cp)
w(C.aLx,C.qJ)
w(C.aLy,B.cp)
w(C.bwP,C.qJ)
w(C.aM1,B.cp)
w(C.bwY,C.qJ)
w(C.aM4,B.cp)
w(C.bx_,C.qJ)
w(C.aL7,B.cp)
w(C.bwI,C.qJ)
w(C.aLu,B.cp)
w(C.bwO,C.qJ)
w(C.aM0,B.cp)
w(C.bwX,C.qJ)})()
B.jJ(b.typeUniverse,JSON.parse('{"Vu":{"ag":[],"t":[]},"bjJ":{"ah":["Vu"]},"VR":{"ag":[],"t":[]},"aEf":{"ah":["VR"]},"bgP":{"aC":[]},"Uo":{"ag":[],"t":[]},"aCL":{"ah":["Uo"]},"Us":{"ag":[],"t":[]},"aCN":{"ah":["Us"]},"baX":{"aC":[]},"aeM":{"au":[],"t":[]},"adE":{"au":[],"t":[]},"aHf":{"ag":[],"t":[]},"No":{"ag":[],"t":[]},"aD3":{"ah":["No"]},"bqM":{"au":[],"t":[]},"Q7":{"au":[],"t":[]},"brK":{"aC":[]},"brf":{"au":[],"t":[]},"b9F":{"aC":[]},"aHg":{"ah":["aHf"]},"bqo":{"aC":[]},"bpQ":{"aC":[]},"baj":{"aC":[]},"bpS":{"aC":[]},"btP":{"aC":[]},"VQ":{"ag":[],"t":[]},"bgM":{"aC":[]},"aEe":{"ah":["VQ"]},"bgN":{"aC":[]},"W4":{"ag":[],"t":[]},"Wf":{"ag":[],"t":[]},"bkh":{"ah":["W4"]},"brF":{"aC":[]},"aEu":{"ah":["Wf"]},"aiA":{"aC":[]},"aiy":{"ag":[],"t":[]},"aiz":{"ah":["aiy"]},"V3":{"ag":[],"t":[]},"axn":{"ag":[],"t":[]},"aDf":{"ah":["V3"],"ey":[]},"b8U":{"ah":["axn"]},"b8T":{"aC":[]},"UN":{"ag":[],"t":[]},"bjc":{"ah":["UN"]},"buQ":{"aC":[]},"aev":{"aC":[]},"a8f":{"au":[],"t":[]},"Wl":{"ag":[],"t":[]},"Vb":{"ag":[],"t":[]},"Up":{"ag":[],"t":[]},"V2":{"ag":[],"t":[]},"VL":{"ag":[],"t":[]},"VV":{"ag":[],"t":[]},"We":{"ag":[],"t":[]},"VK":{"ag":[],"t":[]},"aEH":{"ah":["Wl"]},"bv1":{"aC":[]},"bjl":{"ah":["Vb"]},"bpR":{"aC":[]},"biZ":{"ah":["Up"]},"bje":{"ah":["V2"]},"blb":{"aC":[]},"aE2":{"ah":["VL"]},"aEl":{"ah":["VV"]},"bkp":{"ah":["We"]},"bjV":{"ah":["VK"]},"bd3":{"au":[],"t":[]},"b6F":{"au":[],"t":[]},"f4":{"au":[],"t":[]},"hn":{"au":[],"t":[]},"b6G":{"au":[],"t":[]},"j6":{"au":[],"t":[]},"Fg":{"au":[],"t":[]},"Vh":{"ag":[],"t":[]},"aDq":{"ah":["Vh"]},"bfh":{"aC":[]},"Wh":{"ag":[],"t":[]},"bkt":{"ah":["Wh"]},"W3":{"ag":[],"t":[]},"Vi":{"ag":[],"t":[]},"VW":{"ag":[],"t":[]},"bkg":{"ah":["W3"]},"brD":{"aC":[]},"aDr":{"ah":["Vi"]},"bav":{"aC":[]},"bkd":{"ah":["VW"]},"brb":{"aC":[]},"Un":{"ag":[],"t":[]},"Vf":{"ag":[],"t":[]},"VS":{"ag":[],"t":[]},"biY":{"ah":["Un"]},"b9U":{"aC":[]},"bjo":{"ah":["Vf"]},"bf8":{"aC":[]},"bkc":{"ah":["VS"]},"bqr":{"aC":[]}}'))
B.G3(b.typeUniverse,JSON.parse('{"qJ":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.av
return{x:w("m2<v?>"),G:w("v"),J:w("bt<n,K>"),R:w("dD<n>"),Z:w("a1"),M:w("O<df>"),f5:w("O<a2X>"),h:w("O<a30>"),V:w("O<ac>"),O:w("O<v>"),ey:w("O<T>"),dh:w("O<HH>"),aJ:w("O<aA<aD>>"),w:w("O<a1>"),Q:w("O<ai<v>>"),B:w("O<ai<HH>>"),gO:w("O<ai<ai<K>>>"),bj:w("O<ai<n>>"),b:w("O<ai<K>>"),fA:w("O<ai<H?>>"),C:w("O<a6<n,aD>>"),g:w("O<x>"),bz:w("O<tA>"),ds:w("O<a8C>"),v:w("O<he>"),L:w("O<+(n,n)>"),fT:w("O<+(K,t)>"),I:w("O<+(H,n)>"),u:w("O<+(H,H)>"),c:w("O<+(n,n,a1)>"),e:w("O<+(n,K,K,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,K,K,a6<n,K>)>"),_:w("O<uU>"),q:w("O<cS>"),fQ:w("O<aaf>"),s:w("O<n>"),cF:w("O<aq>"),X:w("O<wi>"),m:w("O<ab0>"),p:w("O<t>"),bL:w("O<abl>"),D:w("O<lp>"),a_:w("O<abz>"),cB:w("O<np>"),ba:w("O<abP>"),d9:w("O<PG>"),eW:w("O<Cp>"),fY:w("O<Zc>"),ed:w("O<PZ>"),g4:w("O<bla>"),ac:w("O<adI>"),cd:w("O<Cz>"),fr:w("O<aeC>"),e4:w("O<a0r>"),r:w("O<aeH>"),au:w("O<aI6>"),f7:w("O<R>"),n:w("O<K>"),t:w("O<H>"),dS:w("O<aC?>"),fs:w("O<tA?>"),bN:w("O<H?>"),gJ:w("cw<aiz>"),z:w("cw<ah<ag>>"),bF:w("ai<v>"),gl:w("ai<T>"),ew:w("ai<aD>"),j:w("ai<@>"),P:w("a6<n,@>"),f:w("a6<@,@>"),bd:w("M<eb,n>"),fR:w("M<+(K,t),t>"),l:w("iD"),gA:w("zk"),gD:w("vV"),a:w("cq"),K:w("aD"),W:w("tA"),E:w("eb"),g7:w("C6"),N:w("n"),bO:w("aq"),k:w("l3"),Y:w("bp<K>"),cL:w("ab1"),gj:w("cx<n>"),aC:w("cx<H?>"),dg:w("ea<qQ>"),F:w("b9X"),a2:w("Cl"),f3:w("qQ"),es:w("FR"),U:w("n1"),y:w("R"),i:w("K"),A:w("@"),S:w("H"),bM:w("ai<@>?"),cK:w("aD?"),az:w("q2?"),T:w("n?"),cD:w("K?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aY0=new B.df(0,0.1)
D.aZG=new C.aRV(0,0,0)
D.KE=new C.aRV(0,0.5,0)
D.b_e=new B.ay(A.bo,1,A.q,-1)
D.b0H=new B.aX(0,1/0,0,290)
D.b0O=new B.aX(16,1/0,16,1/0)
D.b22=new B.o(A.be,null,null,null,null,null,A.a4)
D.f7j=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJA=new B.y("\u26a1",null,D.f7j,null,null,null,null,null,null,null,null,null)
D.b6z=new B.cm(A.A,null,null,D.fJA,null)
D.aRd=new B.F(!0,A.bX,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzg=new B.y("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aRd,null,A.L,null,null,null,null,null,null,null)
D.edC=new B.D(A.o2,D.fzg,null)
D.b6I=new B.cm(A.A,null,null,D.edC,null)
D.fD9=new B.y("Press Drop! and watch them fall from 20 metres.",null,A.kP,null,A.L,null,null,null,null,null,null,null)
D.edG=new B.D(A.o2,D.fD9,null)
D.b72=new B.cm(A.A,null,null,D.edG,null)
D.fix=new B.F(!0,A.k5,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI_=new B.y("Draw anywhere",null,D.fix,null,null,null,null,null,null,null,null,null)
D.b77=new B.cm(A.A,null,null,D.fI_,null)
D.fpk=new B.y("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aRd,null,A.L,null,null,null,null,null,null,null)
D.eep=new B.D(A.FQ,D.fpk,null)
D.b7q=new B.cm(A.A,null,null,D.eep,null)
D.acL=new B.v(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.t)
D.ba5=new B.v(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.t)
D.baS=new B.v(1,1,0.16470588235294117,0.10196078431372549,A.t)
D.Wz=new B.v(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.t)
D.baX=new B.v(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.t)
D.bb1=new B.v(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.t)
D.bb6=new B.v(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bcc=new B.v(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.t)
D.bch=new B.v(1,0.16470588235294117,0.16470588235294117,0.2,A.t)
D.bcD=new B.v(1,1,0.4196078431372549,0.4196078431372549,A.t)
D.bdP=new B.v(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.t)
D.ae7=new B.v(1,1,0.23137254901960785,0.12156862745098039,A.t)
D.bei=new B.v(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.t)
D.AT=new B.v(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.t)
D.bfa=new B.v(1,1,0.9686274509803922,0.8,A.t)
D.bfP=new B.v(1,1,0.47843137254901963,0.09411764705882353,A.t)
D.aeK=new B.v(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.t)
D.bgb=new B.v(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.t)
D.bgu=new B.v(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.t)
D.bgJ=new B.v(1,1,0.5411764705882353,0.5411764705882353,A.t)
D.af4=new B.v(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.t)
D.Xq=new B.v(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.t)
D.bii=new B.v(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.t)
D.bil=new B.v(1,0.043137254901960784,0.10588235294117647,0.2,A.t)
D.bip=new B.v(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.t)
D.biy=new B.v(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.t)
D.afx=new B.v(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.t)
D.biX=new B.v(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.t)
D.LH=new B.v(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.t)
D.bk5=new B.v(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.t)
D.bkd=new B.v(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.t)
D.bkr=new B.v(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.t)
D.bkv=new B.v(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.t)
D.bkE=new B.v(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.t)
D.vB=new B.v(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.t)
D.agk=new B.v(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.t)
D.blL=new B.v(1,0.7490196078431373,0.8431372549019608,1,A.t)
D.bmw=new B.v(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.t)
D.bn_=new B.v(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.t)
D.agM=new B.v(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.t)
D.bs4=new B.bb(11e6)
D.ahK=new B.Q(0,0,9,0)
D.btH=new B.Q(10,10,10,6)
D.btQ=new B.Q(10,34,10,26)
D.btY=new B.Q(10,6,10,2)
D.bu_=new B.Q(10,8,0,10)
D.buB=new B.Q(12,8,8,8)
D.buG=new B.Q(14,0,14,22)
D.buI=new B.Q(14,0,14,30)
D.aig=new B.Q(14,10,8,12)
D.bvI=new B.Q(16,4,16,28)
D.bvT=new B.Q(16,8,16,12)
D.by0=new B.Q(26,12,26,58)
D.byP=new B.Q(4,4,6,2)
D.byR=new B.Q(4,4,8,2)
D.bzs=new B.Q(8,14,8,12)
D.bzz=new B.Q(8,40,8,30)
D.bzD=new B.Q(8,6,16,0)
D.bzE=new B.Q(8,6,8,8)
D.bzZ=new B.Q(0,0,1.5,0)
D.aZs=new B.H5(26,"saturation")
D.bAg=new B.z0(A.cU,D.aZs,null,A.acJ)
D.fop=new B.y("REACTION LAB",null,W.aRN,null,null,null,null,A.a1,null,1,null,null)
D.bAn=new B.by(1,A.bd,D.fop,null)
D.ffj=new B.F(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frC=new B.y("CORE PROTOCOL",null,D.ffj,null,null,null,null,null,null,null,null,null)
D.bAB=new B.by(1,A.bd,D.frC,null)
D.fsn=new B.y("\ud83d\udce2 NGMY Ads",null,A.qy,null,null,null,null,A.eJ,null,1,null,null)
D.bBk=new B.by(1,A.bd,D.fsn,null)
D.fn8=new B.y("Wire selected",null,A.fJ,null,null,null,null,null,null,null,null,null)
D.bBz=new B.by(1,A.bd,D.fn8,null)
D.alr=new B.a1(62712,"MaterialIcons",!1)
D.bHi=new B.a1(62878,"MaterialIcons",!1)
D.bHl=new B.a1(62908,"MaterialIcons",!1)
D.bHm=new B.a1(62931,"MaterialIcons",!1)
D.bHp=new B.a1(62951,"MaterialIcons",!1)
D.bHG=new B.a1(63070,"MaterialIcons",!1)
D.NS=new B.a1(63128,"MaterialIcons",!1)
D.Gz=new B.a1(63726,"MaterialIcons",!1)
D.bIZ=new B.a1(983122,"MaterialIcons",!1)
D.bJc=new B.a1(983247,"MaterialIcons",!1)
D.bJo=new B.a1(983415,"MaterialIcons",!1)
D.amK=new B.a1(983467,"MaterialIcons",!1)
D.bJE=new B.a1(983616,"MaterialIcons",!1)
D.bK6=new B.a1(984561,"MaterialIcons",!1)
D.bKH=new B.ae(A.ri,24,A.aS,null,null,null)
D.bLt=new B.ae(A.Oc,null,A.ad,null,null,null)
D.bM_=new B.ae(A.o7,21,A.ad,null,null,null)
D.bIY=new B.a1(983117,"MaterialIcons",!1)
D.bNm=new B.ae(D.bIY,28,A.c,null,null,null)
D.bNC=new B.ae(A.j9,18,null,null,null,null)
D.bPq=new B.ae(A.eb,21,A.cs,null,null,null)
D.bPF=new B.ae(A.o9,null,A.ad,null,null,null)
D.bPP=new B.ae(A.a1e,21,A.ad,null,null,null)
D.bQF=new B.ae(A.eH,17,A.ad,null,null,null)
D.ao5=new B.ae(A.eH,19,null,null,null,null)
D.qf=new B.ae(A.w5,21,A.ad,null,null,null)
D.bSb=new B.ae(A.NI,null,A.ad,null,null,null)
D.bTk=new B.ae(A.j9,21,A.ad,null,null,null)
D.bUb=new B.ae(A.fh,20,A.aB,null,null,null)
D.bUR=new B.ae(A.e2,null,A.aS,null,null,null)
D.bVb=new B.ae(A.o8,null,A.aB,null,null,null)
D.di1=w([A.d7,A.d0,A.d7],x.O)
D.bYd=new B.a8(A.a3,A.a8,A.x,D.di1,null,null)
D.cW4=w([A.bP,A.bl],x.O)
D.bYl=new B.a8(A.b3,A.b6,A.x,D.cW4,null,null)
D.bYy=new B.a8(A.b3,A.b6,A.x,A.ayi,null,null)
D.ap6=new B.a8(A.b3,A.b6,A.x,L.a2Z,null,null)
D.cTQ=w([A.oH,A.ig],x.O)
D.bZk=new B.a8(A.b3,A.b6,A.x,D.cTQ,null,null)
D.cVN=w([A.e4,A.av],x.O)
D.apd=new B.a8(A.b3,A.b6,A.x,D.cVN,null,null)
D.dc2=w([A.dt,A.j5,A.bl],x.O)
D.bZD=new B.a8(A.a3,A.a8,A.x,D.dc2,null,null)
D.dc8=w([A.h9,A.cp],x.O)
D.bZY=new B.a8(A.b3,A.b6,A.x,D.dc8,null,null)
D.csm=w([A.bP,A.dt],x.O)
D.c_6=new B.a8(A.a3,A.a8,A.x,D.csm,null,null)
D.az0=w([A.e4,H.n1],x.O)
D.c_d=new B.a8(A.b3,A.b6,A.x,D.az0,null,null)
D.c_u=new B.a8(A.b3,A.b6,A.x,I.apz,null,null)
D.c0i=new B.a8(A.ax,A.aC,A.x,A.a2W,null,null)
D.d46=w([A.av,A.w],x.O)
D.c0t=new B.a8(A.b3,A.b6,A.x,D.d46,null,null)
D.c0w=new B.a8(A.b3,A.b6,A.x,O.ayn,null,null)
D.bkz=new B.v(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.t)
D.bll=new B.v(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.t)
D.cF8=w([A.LX,D.bkz,D.bll],x.O)
D.c0G=new B.a8(A.b3,A.b6,A.x,D.cF8,null,null)
D.csG=w([A.d8,A.fZ],x.O)
D.c0W=new B.a8(A.b3,A.b6,A.x,D.csG,null,null)
D.c1q=w([0,2,4,6,7,9,11],x.t)
D.c1E=w([0,4,7],x.t)
D.c1F=w([0,4,7,12],x.t)
D.c1G=w([0,4,7,4],x.t)
D.ay2=w([A.h7,A.pP],x.O)
D.axx=w([A.iH,A.cM],x.O)
D.avX=w([A.by,A.dM],x.O)
D.cNK=w([A.aS,A.d8],x.O)
D.cUb=w([A.cs,A.en],x.O)
D.ddm=w([A.c6,A.lR],x.O)
D.avo=w([A.cY,A.k6],x.O)
D.cSI=w([A.bK,A.aJ],x.O)
D.c21=w([D.ay2,D.axx,A.a33,D.avX,D.cNK,D.cUb,A.ax2,D.ddm,D.avo,D.cSI],x.Q)
D.c6H=w([120,220,380],x.t)
D.car=w([12,16,19,24],x.t)
D.caB=w([1400,800,450,2400],x.t)
D.ceT=w([0,0.6,1],x.n)
D.cj2=w([250,450,900,1500],x.t)
D.bah=new B.v(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.t)
D.bkX=new B.v(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.t)
D.biZ=new B.v(1,0.7450980392156863,0.5411764705882353,0.4,A.t)
D.bog=new B.v(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.t)
D.bi7=new B.v(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.t)
D.auE=w([D.bah,D.bkX,D.biZ,D.bog,D.bi7],x.O)
D.eIt=new B.z("type","Typewriter")
D.eAX=new B.z("bounce","Bounce")
D.eJj=new B.z("wave","Wave")
D.eKo=new B.z("zoom","Zoom")
D.czR=w([D.eIt,D.eAX,D.eJj,A.a6P,I.aMZ,D.eKo,I.aN3],x.L)
D.cA4=w([50,25,75],x.t)
D.cFF=w([0,5,10,15,18,20,25],x.t)
D.cO_=w([900,500,250,1600],x.t)
D.cRu=w([0.78,1],x.n)
D.cRx=w([0,2,4,7,9,12,14,16],x.t)
D.cS3=w([A.by,A.bD,A.bb,A.by],x.O)
D.a2T=w([A.aw,A.bH,A.be,A.aR,A.nV],x.O)
D.cTv=w([A.av,A.aw,A.cY,A.bH,A.be,A.cC,A.c8,A.bD,A.WF],x.O)
D.a2X=w([0.04,0.17,0.3],x.n)
D.eSs=new C.uU("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eSy=new C.uU("Medium engine","A good all-rounder.",0.3,0.9)
D.eSx=new C.uU("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Hn=w([D.eSs,D.eSy,D.eSx],x._)
D.eqw=new B.z(6,"Easy")
D.erf=new B.z(8,"Medium")
D.emk=new B.z(10,"Hard")
D.cUY=w([D.eqw,D.erf,D.emk],x.I)
D.awl=w([0.55,0.78,1],x.n)
D.cWw=w([0.93,0.975,1],x.n)
D.aww=w([A.c,A.fL,A.nM,A.av],x.O)
D.fMC=new C.y7("Moon",1737,4291941851)
D.fMz=new C.y7("Earth",6371,4281908728)
D.fMD=new C.y7("Neptune",24622,4284524026)
D.fME=new C.y7("Saturn",58232,4294829706)
D.fMA=new C.y7("Jupiter",69911,4294677052)
D.fMF=new C.y7("Sun",696340,4294688548)
D.fMG=new C.y7("Sirius A",119e4,4290763774)
D.fMx=new C.y7("Arcturus",179e5,4294818420)
D.fMy=new C.y7("Betelgeuse",531e6,4294472049)
D.fMB=new C.y7("UY Scuti",667e6,4293870660)
D.Qn=w([D.fMC,D.fMz,D.fMD,D.fME,D.fMA,D.fMF,D.fMG,D.fMx,D.fMy,D.fMB],B.av("O<y7>"))
D.eNY=new B.bj("glow","Glow",A.a0n)
D.eLz=new B.bj("rainbow","Rainbow",A.nl)
D.eLW=new B.bj("stars","Stars",A.i9)
D.eLk=new B.bj("sparks","Sparks",A.e2)
D.eNc=new B.bj("fire","Fire",A.w6)
D.cYp=w([D.eNY,D.eLz,D.eLW,D.eLk,D.eNc],x.c)
D.awA=w([A.be,A.aw,A.bH,A.d0],x.O)
D.cZr=w([0.2,1],x.n)
D.eSp=new C.uU("Radar","Shows your height above the ground.",0.1,0)
D.eSq=new C.uU("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.eSn=new C.uU("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.awI=w([D.eSp,D.eSq,D.eSn],x._)
D.d_t=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.d_J=w([47,100,220,470,1000],x.n)
D.d0e=w([0,2,4,7,9],x.t)
D.Is={volts:0}
D.a4E=new B.bt(D.Is,[3],x.J)
D.IP=new B.e9(["b","battery",0.2,0.3,D.a4E])
D.e8S={on:0}
D.dsz=new B.bt(D.e8S,[1],x.J)
D.Dv=new B.e9(["s","switch",0.5,0.3,D.dsz])
D.eQz=new B.e9(["l","bulb",0.8,0.3,A.jc])
D.cWb=w([D.IP,D.Dv,D.eQz],x.d)
D.Du=new B.cv(["b",0,"s",0])
D.ePA=new B.cv(["s",1,"l",0])
D.aN7=new B.cv(["l",1,"b",1])
D.dce=w([D.Du,D.ePA,D.aN7],x.o)
D.cVF=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.elw=new C.mG("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cWb,D.dce,D.cVF)
D.aHa={ohms:0}
D.aEM=new B.bt(D.aHa,[220],x.J)
D.eQ2=new B.e9(["r","resistor",0.5,0.3,D.aEM])
D.eQO=new B.e9(["d","led",0.8,0.3,A.jc])
D.dfq=w([D.IP,D.eQ2,D.eQO],x.d)
D.eOW=new B.cv(["b",0,"r",0])
D.ePu=new B.cv(["r",1,"d",0])
D.eP1=new B.cv(["d",1,"b",1])
D.dog=w([D.eOW,D.ePu,D.eP1],x.o)
D.dfQ=w(["led","diode","indicator"],x.s)
D.elD=new C.mG("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dfq,D.dog,D.dfQ)
D.a5U={level:0}
D.drW=new B.bt(D.a5U,[0.2],x.J)
D.eQ8=new B.e9(["p","pot",0.5,0.3,D.drW])
D.eQa=new B.e9(["m","motor",0.8,0.3,A.jc])
D.cWt=w([D.IP,D.eQ8,D.eQa],x.d)
D.eOV=new B.cv(["b",0,"p",0])
D.ePq=new B.cv(["p",1,"m",0])
D.ePm=new B.cv(["m",1,"b",1])
D.dk_=w([D.eOV,D.ePq,D.ePm],x.o)
D.dbW=w(["fan","motor","spin","dimmer"],x.s)
D.elu=new C.mG("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cWt,D.dk_,D.dbW)
D.a4B=new B.bt(D.a5U,[0.9],x.J)
D.aNe=new B.e9(["s","solar",0.25,0.3,D.a4B])
D.aNd=new B.e9(["l","bulb",0.75,0.3,A.jc])
D.cZ7=w([D.aNe,D.aNd],x.d)
D.ePx=new B.cv(["s",0,"l",0])
D.ePl=new B.cv(["l",1,"s",1])
D.cXe=w([D.ePx,D.ePl],x.o)
D.dkC=w(["solar","sun","without battery","no battery","free"],x.s)
D.elx=new C.mG("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cZ7,D.cXe,D.dkC)
D.eQR=new B.e9(["c","crank",0.25,0.3,D.a4B])
D.dah=w([D.eQR,D.aNd],x.d)
D.eOZ=new B.cv(["c",0,"l",0])
D.ePk=new B.cv(["l",1,"c",1])
D.daP=w([D.eOZ,D.ePk],x.o)
D.dap=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.elt=new C.mG("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dah,D.daP,D.dap)
D.drV=new B.bt(D.a5U,[0.7],x.J)
D.eQd=new B.e9(["t","turbine",0.25,0.3,D.drV])
D.eQ0=new B.e9(["m","motor",0.75,0.3,A.jc])
D.d4K=w([D.eQd,D.eQ0],x.d)
D.ePI=new B.cv(["t",0,"m",0])
D.ePn=new B.cv(["m",1,"t",1])
D.d3L=w([D.ePI,D.ePn],x.o)
D.d95=w(["wind","turbine","windmill","water","hydro"],x.s)
D.elq=new C.mG("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.d4K,D.d3L,D.d95)
D.aEJ=new B.bt(D.Is,[9],x.J)
D.a6W=new B.e9(["b","battery",0.2,0.3,D.aEJ])
D.aNc=new B.e9(["r","radio",0.8,0.3,A.jc])
D.dld=w([D.a6W,D.Dv,D.aNc],x.d)
D.ePC=new B.cv(["s",1,"r",0])
D.aN8=new B.cv(["r",1,"b",1])
D.c1m=w([D.Du,D.ePC,D.aN8],x.o)
D.djN=w(["radio","music","listen"],x.s)
D.elC=new C.mG("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dld,D.c1m,D.djN)
D.dsZ=new B.bt(D.Is,[12],x.J)
D.aNb=new B.e9(["b","battery",0.2,0.3,D.dsZ])
D.eQA=new B.e9(["t","tv",0.8,0.3,A.jc])
D.cWd=w([D.aNb,D.Dv,D.eQA],x.d)
D.ePD=new B.cv(["s",1,"t",0])
D.aN9=new B.cv(["t",1,"b",1])
D.ddp=w([D.Du,D.ePD,D.aN9],x.o)
D.dla=w(["tv","television","screen","watch"],x.s)
D.eln=new C.mG("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cWd,D.ddp,D.dla)
D.eQq=new B.e9(["z","buzzer",0.8,0.3,A.jc])
D.cCp=w([D.IP,D.Dv,D.eQq],x.d)
D.ePE=new B.cv(["s",1,"z",0])
D.ePW=new B.cv(["z",1,"b",1])
D.cRi=w([D.Du,D.ePE,D.ePW],x.o)
D.di7=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.elz=new C.mG("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cCp,D.cRi,D.di7)
D.eQ9=new B.e9(["h","heater",0.8,0.3,A.jc])
D.d7N=w([D.a6W,D.Dv,D.eQ9],x.d)
D.ePz=new B.cv(["s",1,"h",0])
D.eP9=new B.cv(["h",1,"b",1])
D.cS_=w([D.Du,D.ePz,D.eP9],x.o)
D.cml=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.elo=new C.mG("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.d7N,D.cS_,D.cml)
D.eQC=new B.e9(["s","solar",0.2,0.25,D.a4B])
D.dt2=new B.bt(D.aHa,[100],x.J)
D.eQF=new B.e9(["r","resistor",0.55,0.25,D.dt2])
D.eQM=new B.e9(["c","capacitor",0.85,0.25,A.jc])
D.eQ5=new B.e9(["q","resistor",0.55,0.6,D.aEM])
D.eQD=new B.e9(["d","led",0.85,0.6,A.jc])
D.dcW=w([D.eQC,D.eQF,D.eQM,D.eQ5,D.eQD],x.d)
D.ePy=new B.cv(["s",0,"r",0])
D.ePt=new B.cv(["r",1,"c",0])
D.eP0=new B.cv(["c",1,"s",1])
D.eP_=new B.cv(["c",0,"q",0])
D.ePs=new B.cv(["q",1,"d",0])
D.eP2=new B.cv(["d",1,"c",1])
D.d1H=w([D.ePy,D.ePt,D.eP0,D.eP_,D.ePs,D.eP2],x.o)
D.d9C=w(["capacitor","store","charge","flash"],x.s)
D.elB=new C.mG("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dcW,D.d1H,D.d9C)
D.eQg=new B.e9(["b","battery",0.15,0.3,D.a4E])
D.eQS=new B.e9(["l1","bulb",0.5,0.3,A.jc])
D.eQn=new B.e9(["l2","bulb",0.85,0.3,A.jc])
D.cUq=w([D.eQg,D.eQS,D.eQn],x.d)
D.eOU=new B.cv(["b",0,"l1",0])
D.ePh=new B.cv(["l1",1,"l2",0])
D.ePi=new B.cv(["l2",1,"b",1])
D.d5r=w([D.eOU,D.ePh,D.ePi],x.o)
D.dkW=w(["series","two bulbs","dim"],x.s)
D.elr=new C.mG("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cUq,D.d5r,D.dkW)
D.e9a={volts:0,charge:1}
D.dt5=new B.bt(D.e9a,[1.5,0],x.J)
D.eQK=new B.e9(["b","battery",0.75,0.3,D.dt5])
D.cTR=w([D.aNe,D.eQK],x.d)
D.ePw=new B.cv(["s",0,"b",0])
D.eOY=new B.cv(["b",1,"s",1])
D.d2_=w([D.ePw,D.eOY],x.o)
D.d9L=w(["charge","rechargeable","flat","recharge"],x.s)
D.elp=new C.mG("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cTR,D.d2_,D.d9L)
D.dsY=new B.bt(D.Is,[4.5],x.J)
D.eQb=new B.e9(["b","battery",0.2,0.3,D.dsY])
D.aNa=new B.e9(["p","phone",0.8,0.3,A.jc])
D.d4A=w([D.eQb,D.Dv,D.aNa],x.d)
D.ePB=new B.cv(["s",1,"p",0])
D.a6V=new B.cv(["p",1,"b",1])
D.dh5=w([D.Du,D.ePB,D.a6V],x.o)
D.dix=w(["phone","charger","usb","mobile"],x.s)
D.elv=new C.mG("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.d4A,D.dh5,D.dix)
D.ePY=new B.e9(["f","fan",0.8,0.3,A.jc])
D.ceq=w([D.IP,D.ePY],x.d)
D.eOT=new B.cv(["b",0,"f",0])
D.eP7=new B.cv(["f",1,"b",1])
D.cSv=w([D.eOT,D.eP7],x.o)
D.dbV=w(["fan","cool","air","wind"],x.s)
D.elE=new C.mG("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.ceq,D.cSv,D.dbV)
D.eQu=new B.e9(["b","battery",0.15,0.2,D.a4E])
D.ePZ=new B.e9(["a","ammeter",0.5,0.2,A.jc])
D.ePX=new B.e9(["l","bulb",0.85,0.2,A.jc])
D.eQw=new B.e9(["v","voltmeter",0.5,0.6,A.jc])
D.da5=w([D.eQu,D.ePZ,D.ePX,D.eQw],x.d)
D.eOR=new B.cv(["b",0,"a",0])
D.eOQ=new B.cv(["a",1,"l",0])
D.ePK=new B.cv(["v",0,"l",0])
D.ePL=new B.cv(["v",1,"l",1])
D.d1R=w([D.eOR,D.eOQ,D.aN7,D.ePK,D.ePL],x.o)
D.dof=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.elA=new C.mG("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.da5,D.d1R,D.dof)
D.eQV=new B.e9(["b","battery",0.15,0.2,D.aEJ])
D.eQf=new B.e9(["t","tv",0.55,0.2,A.jc])
D.aEK=new B.bt(D.Is,[5],x.J)
D.eQ3=new B.e9(["c","buck",0.4,0.5,D.aEK])
D.eQh=new B.e9(["p","phone",0.8,0.5,A.jc])
D.d_w=w([D.eQV,D.eQf,D.eQ3,D.eQh],x.d)
D.eOX=new B.cv(["b",0,"t",0])
D.aN5=new B.cv(["b",0,"c",0])
D.aN6=new B.cv(["c",1,"p",0])
D.d4x=w([D.eOX,D.aN9,D.aN5,D.aN6,D.a6V],x.o)
D.cYH=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.els=new C.mG("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.d_w,D.d4x,D.cYH)
D.eQ4=new B.e9(["c","buck",0.5,0.3,D.aEK])
D.cRR=w([D.aNb,D.eQ4,D.aNa],x.d)
D.cWD=w([D.aN5,D.aN6,D.a6V],x.o)
D.cpM=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.elm=new C.mG("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cRR,D.cWD,D.cpM)
D.eQl=new B.e9(["d","diode",0.5,0.3,A.jc])
D.d5E=w([D.a6W,D.eQl,D.aNc],x.d)
D.eOS=new B.cv(["b",0,"d",0])
D.eP3=new B.cv(["d",1,"r",0])
D.cEX=w([D.eOS,D.eP3,D.aN8],x.o)
D.cYm=w(["diode","protect","backwards","one way"],x.s)
D.ely=new C.mG("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.d5E,D.cEX,D.cYm)
D.Qq=w([D.elw,D.elD,D.elu,D.elx,D.elt,D.elq,D.elC,D.eln,D.elz,D.elo,D.elB,D.elr,D.elp,D.elv,D.elE,D.elA,D.els,D.elm,D.ely],B.av("O<mG>"))
D.hg9=new C.G6("Moon",1.62,A.dt,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hg7=new C.G6("Mars",3.71,A.aw,"Mars has about 38 percent of Earth's gravity.")
D.hga=new C.G6("Mercury",3.7,A.k4,"Mercury is small, so its gravity is like Mars.")
D.hg4=new C.G6("Venus",8.87,A.aS,"Venus is almost as heavy as Earth, with strong gravity.")
D.hg6=new C.G6("Earth",9.81,A.aR,"On Earth gravity is strong, and the air also slows you down.")
D.hg8=new C.G6("Neptune",11.15,A.d0,"Neptune pulls a little harder than Earth.")
D.hg5=new C.G6("Jupiter",24.79,A.cY,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rr=w([D.hg9,D.hg7,D.hga,D.hg4,D.hg6,D.hg8,D.hg5],B.av("O<G6>"))
D.d1F=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a3c=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.d2o=w([0.2,0.5,0.8],x.n)
D.eVC=new B.cS(A.bk,A.J,4)
D.d2M=w([D.eVC],x.q)
D.axd=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aWR=new C.Kp(0,"accordion")
D.cSQ=w([A.jx,A.C6,A.BT],x.w)
D.cZW=w(["Mail","SMS","Ad"],x.s)
D.cTm=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hem=new C.AB(D.aWR,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.ay2,D.cSQ,D.cZW,D.cTm)
D.aar=new C.Kp(1,"flip")
D.d9w=w([A.rj,A_.GN,A.ui],x.w)
D.d4h=w(["Unlock","Verify","Secure"],x.s)
D.cRN=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hel=new C.AB(D.aar,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.axx,D.d9w,D.d4h,D.cRN)
D.aWS=new C.Kp(2,"towers")
D.d35=w([A.yK,A.qc,A.hR],x.w)
D.d2H=w(["Save","Grow","Earn"],x.s)
D.cFQ=w(["","",""],x.s)
D.hen=new C.AB(D.aWS,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a33,D.d35,D.d2H,D.cFQ)
D.aas=new C.Kp(3,"assemble")
D.das=w([A.ob,A.hn,A.e2],x.w)
D.cZj=w(["Launch","Charge","Shine"],x.s)
D.d6V=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hep=new C.AB(D.aas,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.avX,D.das,D.cZj,D.d6V)
D.aWT=new C.Kp(4,"carousel")
D.dai=w([A.bb,A.f4],x.O)
D.d_4=w([A.o7,A.alX,A.Oj],x.w)
D.cUO=w(["Explore","Discover","Learn"],x.s)
D.d4F=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hek=new C.AB(D.aWT,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dai,D.d_4,D.cUO,D.d4F)
D.aWU=new C.Kp(5,"burst")
D.d2C=w([A.i3,A.tt],x.O)
D.cTh=w([A.l3,A.mA,A.i8],x.w)
D.cTD=w(["Cheer","Win","Love"],x.s)
D.cVL=w(["Make some noise","First place","Share the joy"],x.s)
D.heo=new C.AB(D.aWU,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.d2C,D.cTh,D.cTD,D.cVL)
D.axe=w([D.hem,D.hel,D.hen,D.hep,D.hek,D.heo],B.av("O<AB>"))
D.eMn=new B.bj("skin","Skin",A.alY)
D.eNK=new B.bj("muscle","Muscles",A.NX)
D.eNs=new B.bj("organ","Organs",A.i8)
D.bH1=new B.a1(62747,"MaterialIcons",!1)
D.eNy=new B.bj("bone","Skeleton",D.bH1)
D.eNQ=new B.bj("vessel","Blood vessels",A.qe)
D.d3b=w([D.eMn,D.eNK,D.eNs,D.eNy,D.eNQ],x.c)
D.eSr=new C.uU("Simple legs","Light. Land gently.",0.15,0.2)
D.eSt=new C.uU("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.eSw=new C.uU("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.CB=w([D.eSr,D.eSt,D.eSw],x._)
D.d4P=w([1.77,3.55,7.15,16.7],x.n)
D.d7m=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.eHZ=new B.z("spiral","Spiral")
D.eqt=new B.z("barred","Barred spiral")
D.eC3=new B.z("elliptical","Elliptical")
D.d82=w([D.eHZ,D.eqt,D.eC3],x.L)
D.eOy=new B.cv(["beat",0.18,0.28,0])
D.ePF=new B.cv(["burst",0.7,0.2,0])
D.ePQ=new B.cv(["delay",0.45,0.5,1])
D.ePp=new B.cv(["ripple",0.75,0.6,3])
D.cZ2=w([D.eOy,D.ePF,D.ePQ,D.ePp],x.e)
D.d8U=w([N.lh,L.IO,F.SZ],x.u)
D.hdC=new C.FR("First spark","A clock lights a burst and a ripple",D.cZ2,D.d8U)
D.eP6=new B.cv(["beat",0.15,0.3,1])
D.eOc=new B.cv(["ripple",0.62,0.15,0])
D.ePM=new B.cv(["delay",0.4,0.45,0])
D.eON=new B.cv(["ripple",0.7,0.45,0])
D.eOu=new B.cv(["delay",0.4,0.7,1])
D.ePr=new B.cv(["shake",0.75,0.75,0])
D.dm3=w([D.eP6,D.eOc,D.ePM,D.eON,D.eOu,D.ePr],x.e)
D.enn=new B.z(2,4)
D.aMS=new B.z(4,5)
D.d1v=w([N.lh,L.IO,F.SZ,D.enn,D.aMS],x.u)
D.hdE=new C.FR("Heartbeat","Two thumps, then a shake",D.dm3,D.d1v)
D.eOD=new B.cv(["dice",0.15,0.7,1])
D.ePS=new B.cv(["echo",0.4,0.7,0])
D.eOL=new B.cv(["comet",0.7,0.5,4])
D.ePG=new B.cv(["burst",0.72,0.2,1])
D.eP4=new B.cv(["burst",0.3,0.25,0])
D.eOE=new B.cv(["pop",0.55,0.85,0])
D.clT=w([D.eOD,D.ePS,D.eOL,D.ePG,D.eP4,D.eOE],x.e)
D.emM=new B.z(1,3)
D.emN=new B.z(1,4)
D.aMO=new B.z(0,5)
D.dad=w([N.lh,R.uT,D.emM,D.emN,D.aMO],x.u)
D.hdD=new C.FR("Fireworks","Dice launch comets that burst in colour",D.clT,D.dad)
D.eOI=new B.cv(["beat",0.15,0.2,2])
D.ePe=new B.cv(["chance",0.4,0.2,0])
D.eOA=new B.cv(["ball",0.7,0.12,3])
D.eOn=new B.cv(["chance",0.4,0.5,1])
D.ePR=new B.cv(["ball",0.3,0.08,1])
D.eOg=new B.cv(["ripple",0.7,0.55,3])
D.ceU=w([D.eOI,D.ePe,D.eOA,D.eOn,D.ePR,D.eOg],x.e)
D.eno=new B.z(2,5)
D.cC8=w([N.lh,R.uT,L.a6K,F.T_,D.eno],x.u)
D.hdB=new C.FR("Rain","Balls fall at random and splash",D.ceU,D.cC8)
D.ePf=new B.cv(["beat",0.12,0.45,2])
D.ePH=new B.cv(["toggle",0.38,0.2,0])
D.ePO=new B.cv(["wash",0.7,0.15,4])
D.eOC=new B.cv(["count3",0.38,0.45,0])
D.ePJ=new B.cv(["burst",0.72,0.4,0])
D.eP5=new B.cv(["light",0.55,0.7,1])
D.eOo=new B.cv(["pop",0.8,0.8,4])
D.dcU=w([D.ePf,D.ePH,D.ePO,D.eOC,D.ePJ,D.eP5,D.eOo],x.e)
D.enW=new B.z(3,6)
D.ci2=w([N.lh,R.uT,L.a6K,F.T_,D.aMO,D.enW],x.u)
D.hdz=new C.FR("Disco","A beat drives lights, washes and bursts",D.dcU,D.ci2)
D.ePV=new B.cv(["button",0.12,0.2,0])
D.eOi=new B.cv(["delay",0.34,0.2,1])
D.ePU=new B.cv(["light",0.56,0.2,1])
D.ePN=new B.cv(["delay",0.56,0.45,1])
D.ePg=new B.cv(["ball",0.34,0.6,0])
D.eOm=new B.cv(["delay",0.34,0.8,1])
D.eOb=new B.cv(["burst",0.7,0.8,5])
D.c24=w([D.ePV,D.eOi,D.ePU,D.ePN,D.ePg,D.eOm,D.eOb],x.e)
D.eq5=new B.z(5,6)
D.dig=w([N.lh,R.uT,F.SZ,F.T_,D.aMS,D.eq5],x.u)
D.hdA=new C.FR("Domino","Tap the button and watch it run down the line",D.c24,D.dig)
D.axB=w([D.hdC,D.hdE,D.hdD,D.hdB,D.hdz,D.hdA],B.av("O<FR>"))
D.d8a=w([0.05,0.15,0.25],x.n)
D.d94=w([1.5,3,4.5,9,12],x.n)
D.eL3=new B.bj("dice","Dice",A.oZ)
D.eM5=new B.bj("coin","Coin",K.yE)
D.eNL=new B.bj("num","Number",A.yM)
D.d9g=w([D.eL3,D.eM5,D.eNL],x.c)
D.d9j=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fMH=new C.Pc("Moon",1.62,0,4291941851)
D.fMI=new C.Pc("Mars",3.71,0.01,4294472049)
D.fMJ=new C.Pc("Earth",9.81,1,4281908728)
D.fML=new C.Pc("Jupiter",24.79,1.4,4294677052)
D.fMK=new C.Pc("Sun",274,2,4294688548)
D.z9=w([D.fMH,D.fMI,D.fMJ,D.fML,D.fMK],B.av("O<Pc>"))
D.axH=w([A.cs,A.aS,A.bo,A.aR,A.by,A.c6,A.cY,A.iH],x.O)
D.daj=w([A.c6,A.aR,A.dP,A.bo],x.O)
D.dbd=w([],x.h)
D.dbh=w([],x.B)
D.a3A=w([],x.m)
D.ef9=new C.eb("battery","Battery","\ud83d\udd0b",A.bo,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eff=new C.eb("solar","Solar panel","\u2600\ufe0f",A.bH,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.efU=new C.eb("crank","Hand crank","\ud83d\udd04",A.cY,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.efw=new C.eb("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aR,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.ef1=new C.eb("buck","Step-down converter","\ud83d\udd3d",A.iH,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.efu=new C.eb("regulator","5 V regulator","\ud83e\uddca",A.bK,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.efZ=new C.eb("diode","Diode","\u27a1\ufe0f",A.aS,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.efG=new C.eb("ldr","Light sensor","\ud83c\udf1e",A.dP,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.efk=new C.eb("switch","Switch","\ud83c\udf9a\ufe0f",A.by,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.efW=new C.eb("fuse","Fuse","\ud83e\uddef",A.cs,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.eeU=new C.eb("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.iH,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.efH=new C.eb("resistor","Resistor","\u3030\ufe0f",A.aS,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.efJ=new C.eb("bulb","Light bulb","\ud83d\udca1",A.dP,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.efh=new C.eb("led","LED","\ud83d\udd34",A.aw,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.efl=new C.eb("motor","Motor","\u2699\ufe0f",A.bK,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.efD=new C.eb("buzzer","Buzzer","\ud83d\udd14",A.c6,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.efa=new C.eb("heater","Heater","\ud83d\udd25",A.cY,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.efy=new C.eb("capacitor","Capacitor","\ud83e\udeab",A.co,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.efq=new C.eb("radio","Radio","\ud83d\udcfb",A.nV,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.efn=new C.eb("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.bb,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.ef0=new C.eb("voltmeter","Voltmeter","\ud83e\udded",A.bu,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.ef7=new C.eb("ammeter","Ammeter","\ud83d\udcdf",A.aS,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.efd=new C.eb("fan","Fan","\ud83c\udf00",A.aR,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eg0=new C.eb("speaker","Speaker","\ud83d\udd0a",A.c6,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.efQ=new C.eb("clock","Digital clock","\u23f0",A.bo,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eft=new C.eb("calculator","Calculator","\ud83e\uddee",A.L3,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.ef6=new C.eb("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.co,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eg_=new C.eb("router","WiFi router","\ud83d\udcf6",A.iH,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eg2=new C.eb("siren","Siren","\ud83d\udea8",A.aw,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.eeX=new C.eb("toycar","Toy car","\ud83d\ude97",A.cY,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eg3=new C.eb("kettle","Kettle","\ud83e\uded6",A.mp,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.ef4=new C.eb("lamp","Desk lamp","\ud83e\ude94",A.dP,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.efg=new C.eb("lights","Party lights","\ud83c\udf84",A.nV,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.efr=new C.eb("fridge","Fridge","\ud83e\uddca",A.hk,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.eeZ=new C.eb("washer","Washing machine","\ud83e\udee7",A.co,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.efR=new C.eb("blender","Blender","\ud83e\udd64",A.cs,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.efo=new C.eb("drone","Drone","\ud83d\ude81",A.bK,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.ef3=new C.eb("drill","Power drill","\ud83d\udd29",A.aS,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.efs=new C.eb("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.efO=new C.eb("neon","Neon sign","\ud83e\udea7",A.c6,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.ef_=new C.eb("microwave","Microwave","\ud83c\udf72",A.cY,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.efI=new C.eb("doorbell","Doorbell","\ud83d\udd14",A.bH,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.efc=new C.eb("camera","Security camera","\ud83d\udcf7",A.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.efC=new C.eb("console","Game console","\ud83c\udfae",A.by,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.efT=new C.eb("heartmon","Heart monitor","\ud83e\ude7a",A.h6,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.eeY=new C.eb("aquarium","Aquarium","\ud83d\udc20",A.bb,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.efx=new C.eb("lighthouse","Lighthouse","\ud83d\uddfc",A.dP,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.efF=new C.eb("discoball","Disco ball","\ud83e\udea9",A.nV,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.efY=new C.eb("robot","Robot","\ud83e\udd16",A.aR,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.eeW=new C.eb("toaster","Toaster","\ud83c\udf5e",A.dT,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eg1=new C.eb("ledstrip","LED strip","\ud83c\udf08",A.c6,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.efN=new C.eb("pump","Water pump","\ud83d\udeb0",A.aR,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.efz=new C.eb("hairdryer","Hair dryer","\ud83d\udca8",A.i3,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.efL=new C.eb("headphones","Headphones","\ud83c\udfa7",A.by,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.ef5=new C.eb("smartwatch","Apple Watch Ultra","\u231a",A.bu,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.efX=new C.eb("tablet","iPad Pro M5","\ud83d\udcf2",A.co,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.eeT=new C.eb("lgtv","LG OLED evo G5","\ud83d\udcfa",A.h6,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.efp=new C.eb("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bq,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.efi=new C.eb("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.efE=new C.eb("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.tq,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.eeV=new C.eb("iphonefold","iPhone Fold","\ud83d\udcf1",A.b5,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.ef8=new C.eb("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d0,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.efV=new C.eb("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cC,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.efA=new C.eb("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.be,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.efv=new C.eb("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c9,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.efM=new C.eb("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aw,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.efj=new C.eb("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bo,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.efB=new C.eb("honor","Honor Magic V5","\ud83d\udcf1",A.co,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.efK=new C.eb("vivo","vivo X300 Pro","\ud83d\udcf1",A.cY,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.efP=new C.eb("ereader","Kindle Scribe","\ud83d\udcd6",A.bq,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.eeS=new C.eb("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.c8,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.efm=new C.eb("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cC,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.efe=new C.eb("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.bb,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.ef2=new C.eb("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dP,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.efb=new C.eb("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aw,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.efS=new C.eb("vision","Apple Vision Pro","\ud83e\udd7d",A.by,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.QR=w([D.ef9,D.eff,D.efU,D.efw,D.ef1,D.efu,D.efZ,D.efG,D.efk,D.efW,D.eeU,D.efH,D.efJ,D.efh,D.efl,D.efD,D.efa,D.efy,D.efq,D.efn,D.ef0,D.ef7,D.efd,D.eg0,D.efQ,D.eft,D.ef6,D.eg_,D.eg2,D.eeX,D.eg3,D.ef4,D.efg,D.efr,D.eeZ,D.efR,D.efo,D.ef3,D.efs,D.efO,D.ef_,D.efI,D.efc,D.efC,D.efT,D.eeY,D.efx,D.efF,D.efY,D.eeW,D.eg1,D.efN,D.efz,D.efL,D.ef5,D.efX,D.eeT,D.efp,D.efi,D.efE,D.eeV,D.ef8,D.efV,D.efA,D.efv,D.efM,D.efj,D.efB,D.efK,D.efP,D.eeS,D.efm,D.efe,D.ef2,D.efb,D.efS],B.av("O<eb>"))
D.dbG=w([0,0.46,0.82],x.n)
D.dbR=w([5,10,15,25,45,60],x.t)
D.dcc=w([-0.045,0.03,-0.015],x.n)
D.dcA=w([0.9,0.97,1],x.n)
D.aya=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.uu=w([0.05,0.2,0.35],x.n)
D.cTH=w([D.LH,D.LH],x.O)
D.cYY=w([A.Fj,A.M],x.O)
D.cY0=w([A.fn,A.hy],x.O)
D.cRJ=w([A.f4,A.nU],x.O)
D.ceo=w([A.lR,A.dx],x.O)
D.ayb=w([D.cTH,D.cYY,D.cY0,D.cRJ,D.ceo],x.Q)
D.fMv=new C.v7("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fMw=new C.v7("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fMn=new C.v7("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fMu=new C.v7("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fMs=new C.v7("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fMo=new C.v7("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fMt=new C.v7("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fMp=new C.v7("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fMr=new C.v7("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fMq=new C.v7("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.CI=w([D.fMv,D.fMw,D.fMn,D.fMu,D.fMs,D.fMo,D.fMt,D.fMp,D.fMr,D.fMq],B.av("O<v7>"))
D.bhN=new B.v(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.t)
D.bfs=new B.v(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.t)
D.ddT=w([D.LH,D.bhN,D.bfs,A.ae4],x.O)
D.b3j=new B.ac(0,A.G,A.i5,A.dD,6)
D.deQ=w([D.b3j],x.V)
D.elY=new B.z(0,"AND")
D.emO=new B.z(1,"Adder")
D.enp=new B.z(2,"Blinker")
D.enX=new B.z(3,"Memory")
D.dfC=w([D.elY,D.emO,D.enp,D.enX],x.I)
D.ayo=w([-104,0,104],x.n)
D.ayp=w([-14,3],x.n)
D.dgp=w([-8,0,8],x.n)
D.ayx=w([-92,0,92],x.n)
D.dgO=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.eSo=new C.uU("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.eSv=new C.uU("Medium tank","Balanced.",0.35,1)
D.eSu=new C.uU("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.R4=w([D.eSo,D.eSv,D.eSu],x._)
D.nq=w([0.04,0.2,0.36],x.n)
D.ayI=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eNr=new B.bj(D.aWR,"Fold",K.amU)
D.eMA=new B.bj(D.aar,"Flip",A.Go)
D.bHk=new B.a1(62889,"MaterialIcons",!1)
D.eNJ=new B.bj(D.aWS,"Rise",D.bHk)
D.an7=new B.a1(983870,"MaterialIcons",!1)
D.eKy=new B.bj(D.aas,"Assemble",D.an7)
D.eKH=new B.bj(D.aWT,"Spin",D.alr)
D.eKE=new B.bj(D.aWU,"Pop",A.l3)
D.did=w([D.eNr,D.eMA,D.eNJ,D.eKy,D.eKH,D.eKE],B.av("O<+(Kp,n,a1)>"))
D.ayN=w([A.c6,A.dP,A.bu,A.aR,A.by,A.cs],x.O)
D.diD=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.djD=w([3,4.5,5,6,9],x.n)
D.b3S=new B.ac(0,A.G,A.aW,A.J,16)
D.dk3=w([D.b3S],x.V)
D.R7=w([A.c6,A.bH,A.bo,A.aR,A.by,A.cs,A.c,A.cY],x.O)
D.dkz=w(["solar","turbine","crank","pot"],x.s)
D.dl_=w([0,0.35,0.75,1],x.n)
D.eKX=new B.bj("drop","Drop",D.amK)
D.eKZ=new B.bj("weight","Weight",S.anb)
D.eND=new B.bj("cannon","Newton's cannon",A.am8)
D.dlK=w([D.eKX,D.eKZ,D.eND],x.c)
D.dmh=w(["volts","level","ohms","on"],x.s)
D.dnG=w([A.jx,A.C6,A.BT,A.rj,A_.GN,A.ui,A.yK,A.qc,A.hR,A.ob,A.hn,A.e2,A.i8,A.i9,A.mA,A.lZ,A.wd,A.rn,A.m_,A.Gg,A.wc,A.BZ,A.BV,A.amF,A.NO,A.C4,A.NX,A.amk,O.an3,A.l3],x.w)
D.doz=w([0.72,1],x.n)
D.doM=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.e8Y={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dr1=new B.bt(D.e8Y,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],B.av("bt<n,n>"))
D.e6S={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.h6g=new C.y9("Switch",F.uk,A.bH,0,"Tap it to turn it ON or OFF.")
D.h6c=new C.y9("Blinker",A.p1,A.bu,0,"Turns itself ON and OFF. Tap to change the speed.")
D.h6d=new C.y9("AND",D.an7,A.co,2,"ON only when BOTH inputs are ON.")
D.bIM=new B.a1(63671,"MaterialIcons",!1)
D.h6b=new C.y9("OR",D.bIM,A.by,2,"ON when EITHER input is ON.")
D.h6e=new C.y9("XOR",G.a0t,A.c6,2,"ON when the inputs are DIFFERENT.")
D.h68=new C.y9("NAND",A.u5,A.aR,2,"OFF only when BOTH inputs are ON.")
D.bHT=new B.a1(63176,"MaterialIcons",!1)
D.h69=new C.y9("NOR",D.bHT,A.iH,2,"ON only when BOTH inputs are OFF.")
D.h6a=new C.y9("NOT",Z.C7,A.cY,1,"Flips the signal: ON becomes OFF.")
D.h6f=new C.y9("Light",A.ri,A.dP,1,"Glows when its input is ON.")
D.h6h=new C.y9("Buzzer",A.um,A.cs,1,"Beeps while its input is ON.")
D.zm=new B.bt(D.e6S,[D.h6g,D.h6c,D.h6d,D.h6b,D.h6e,D.h68,D.h69,D.h6a,D.h6f,D.h6h],B.av("bt<n,y9>"))
D.e8J={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eLp=new B.bj(3,20,1.9)
D.eKS=new B.bj(33,90,1.6)
D.eO3=new B.bj(52,15,3.2)
D.eO1=new B.bj(45,-100,1.8)
D.eMu=new B.bj(-15,-60,1.9)
D.eM_=new B.bj(-25,140,2.4)
D.eLR=new B.bj(-82,0,2.2)
D.aEz=new B.bt(D.e8J,[D.eLp,D.eKS,D.eO3,D.eO1,D.eMu,D.eM_,D.eLR],B.av("bt<n,+(K,K,K)>"))
D.cSg=w([A.A],x.M)
D.cSB=w([A.ax,A.aC],x.M)
D.d0y=w([A.ax,A.A,A.aC],x.M)
D.d25=w([A.ax,A.lk,A.A,A.lL,A.aC],x.M)
D.dfy=w([A.ax,A.lk,A.a3,A.a8,A.lL,A.aC],x.M)
D.dso=new B.dv([1,D.cSg,2,D.cSB,3,D.d0y,4,A.azd,5,D.d25,6,D.dfy],B.av("dv<H,ai<df>>"))
D.e98={Calm:0,Box:1,Sleep:2}
D.czB=w([4,2,6,0],x.n)
D.czI=w([4,4,4,4],x.n)
D.czJ=w([4,7,8,0],x.n)
D.Rw=new B.bt(D.e98,[D.czB,D.czI,D.czJ],B.av("bt<n,ai<K>>"))
D.e72={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.x7=new C.a0e(0,"source")
D.d1y=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hcf=new C.q9("Clock",A.p1,D.x7,A.bu,D.d1y)
D.hcb=new C.q9("Button",A.Ca,D.x7,A.aS,A.U)
D.djP=w(["random","quick","slow"],x.s)
D.hcm=new C.q9("Dice",A.oZ,D.x7,A.c6,D.djP)
D.bIr=new B.a1(63484,"MaterialIcons",!1)
D.E9=new C.a0e(1,"logic")
D.dou=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hci=new C.q9("Delay",D.bIr,D.E9,A.co,D.dou)
D.dbY=w(["fast","mid","slow"],x.s)
D.hcn=new C.q9("Echo",A.amz,D.E9,A.by,D.dbY)
D.hck=new C.q9("Every 2nd",Z.C7,D.E9,A.iH,A.U)
D.bI6=new B.a1(63309,"MaterialIcons",!1)
D.hch=new C.q9("Every 3rd",D.bI6,D.E9,A.aR,A.U)
D.bJY=new B.a1(983902,"MaterialIcons",!1)
D.c1s=w(["50%","25%","75%"],x.s)
D.hcp=new C.q9("Chance",D.bJY,D.E9,A.cY,D.c1s)
D.qH=new C.a0e(2,"out")
D.hcd=new C.q9("Light",A.ri,D.qH,A.dP,A.U)
D.hce=new C.q9("Burst",A.l3,D.qH,A.c6,A.U)
D.hcc=new C.q9("Ripple",A.yP,D.qH,A.bb,A.U)
D.hcl=new C.q9("Ball",A.amM,D.qH,A.cY,A.U)
D.hcj=new C.q9("Comet",A.ob,D.qH,A.by,A.U)
D.bJJ=new B.a1(983669,"MaterialIcons",!1)
D.hco=new C.q9("Shake",D.bJJ,D.qH,A.cs,A.U)
D.hcq=new C.q9("Pop",A.Gh,D.qH,A.bo,A.U)
D.hcg=new C.q9("Wash",A.O0,D.qH,A.pF,A.U)
D.mH=new B.bt(D.e72,[D.hcf,D.hcb,D.hcm,D.hci,D.hcn,D.hck,D.hch,D.hcp,D.hcd,D.hce,D.hcc,D.hcl,D.hcj,D.hco,D.hcq,D.hcg],B.av("bt<n,q9>"))
D.e7e={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.zO=new C.Jn(0,"tv")
D.eTW=new C.mb("Samsung Neo QLED 8K",D.zO,F.EY,A.aR)
D.eTN=new C.mb("LG OLED evo G5",D.zO,A.ef,A.h6)
D.eTE=new C.mb("Sony Bravia 9",D.zO,A.qS,A.bq)
D.eTI=new C.mb("Apple TV 4K",D.zO,A.e6,A.bP)
D.eTF=new C.mb("Bang and Olufsen Beovision",D.zO,F.EE,F.tq)
D.IT=new C.Jn(1,"iphone")
D.aNz=new C.mb("iPhone 18 Pro Max",D.IT,D.agM,A.c8)
D.wG=new C.Jn(3,"fold")
D.bnZ=new B.v(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.t)
D.eTS=new C.mb("iPhone Fold",D.wG,D.bnZ,A.b5)
D.uW=new C.Jn(2,"android")
D.eTT=new C.mb("Samsung Galaxy S26 Ultra",D.uW,F.acW,A.d0)
D.bhl=new B.v(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.t)
D.eTL=new C.mb("Samsung Galaxy Z Fold7",D.wG,D.bhl,A.cC)
D.eTH=new C.mb("Google Pixel 10 Pro XL",D.uW,A.dt,A.be)
D.eTP=new C.mb("Xiaomi 16 Ultra",D.uW,A.kz,A.c9)
D.eTK=new C.mb("Huawei Mate 80 Pro Max",D.uW,A.en,A.aw)
D.eTG=new C.mb("OPPO Find X9 Ultra",D.uW,A.dV,A.bo)
D.eTY=new C.mb("Honor Magic V5",D.wG,A.d7,A.co)
D.eTM=new C.mb("vivo X300 Pro",D.uW,A.hy,A.cY)
D.T6=new C.Jn(4,"tablet")
D.eTR=new C.mb("iPad Pro M5",D.T6,A.dt,A.aR)
D.a75=new C.Jn(5,"reader")
D.eTZ=new C.mb("Kindle Scribe",D.a75,A.e4,A.bq)
D.zP=new C.Jn(6,"computer")
D.eTQ=new C.mb("MacBook Pro M5 Max",D.zP,A.dt,A.c8)
D.eTV=new C.mb("iMac 32 inch",D.zP,A.bP,A.cC)
D.eTO=new C.mb("Pro Display XDR 8K",D.zP,A.kz,A.bb)
D.eTJ=new C.mb("Sony Laser Projector",D.zP,A.cp,A.dP)
D.eTU=new C.mb("Luxury car touchscreen",D.zP,H.n1,A.aw)
D.eTX=new C.mb("Apple Vision Pro",D.zP,A.h9,A.by)
D.m5=new B.bt(D.e7e,[D.eTW,D.eTN,D.eTE,D.eTI,D.eTF,D.aNz,D.eTS,D.eTT,D.eTL,D.eTH,D.eTP,D.eTK,D.eTG,D.eTY,D.eTM,D.eTR,D.eTZ,D.eTQ,D.eTV,D.eTO,D.eTJ,D.eTU,D.eTX],B.av("bt<n,mb>"))
D.e7m={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bqJ=new C.fN(20,4,13,!1)
D.br9=new C.fN(14,5,13.5,!1)
D.br0=new C.fN(9,2.4,10,!1)
D.bre=new C.fN(7,5,12.5,!1)
D.br3=new C.fN(8,3.5,12,!1)
D.bqF=new C.fN(15,2,6,!1)
D.brc=new C.fN(45,6,13.5,!0)
D.bqV=new C.fN(10,8,13.5,!1)
D.bqN=new C.fN(25,3,12,!0)
D.bqT=new C.fN(35,4,12,!0)
D.bqU=new C.fN(40,4.5,9.5,!0)
D.bqW=new C.fN(55,3,9,!0)
D.bqG=new C.fN(18,3,9,!1)
D.brb=new C.fN(22,4,13.5,!1)
D.br4=new C.fN(16,5,13.5,!1)
D.bqR=new C.fN(30,4,9,!0)
D.brn=new C.fN(5,3.5,13,!1)
D.bqZ=new C.fN(25,3,13.5,!0)
D.br7=new C.fN(14,2.5,9,!1)
D.bqY=new C.fN(6,6,13,!1)
D.brf=new C.fN(30,1.2,5,!0)
D.brm=new C.fN(35,3,4.5,!0)
D.bri=new C.fN(20,4.5,7.5,!0)
D.bqX=new C.fN(55,5.5,13.5,!0)
D.bqE=new C.fN(45,5.5,13.5,!0)
D.br8=new C.fN(40,5.5,13.5,!0)
D.brl=new C.fN(60,6,13.5,!0)
D.ahe=new C.fN(28,4,7,!0)
D.Fw=new C.fN(25,4,7,!0)
D.bqQ=new C.fN(30,4,7,!0)
D.bqL=new C.fN(22,4,7,!0)
D.bqM=new C.fN(24,4,7,!0)
D.br_=new C.fN(60,3,5.5,!0)
D.bqH=new C.fN(18,9,14,!0)
D.bqO=new C.fN(25,9,14,!0)
D.ahf=new C.fN(30,8,14,!0)
D.bqK=new C.fN(20,8,14,!0)
D.bqS=new C.fN(30,9,14,!0)
D.brg=new C.fN(22,5,9.5,!0)
D.bqI=new C.fN(30,2.5,10.5,!0)
D.br5=new C.fN(50,5.5,13.5,!0)
D.brk=new C.fN(12,2,9.5,!1)
D.br2=new C.fN(16,1.3,9.5,!0)
D.brd=new C.fN(40,2.5,7,!0)
D.brj=new C.fN(60,1.2,4.8,!0)
D.brh=new C.fN(18,5,13.5,!0)
D.bra=new C.fN(8,2,9.5,!1)
D.br1=new C.fN(12,2.5,8,!1)
D.bqP=new C.fN(20,3.5,13.5,!0)
D.br6=new C.fN(3.5,3,13,!1)
D.zn=new B.bt(D.e7m,[D.bqJ,D.br9,D.br0,D.bre,D.br3,D.bqF,D.brc,D.bqV,D.bqN,D.bqT,D.bqU,D.bqW,D.bqG,D.brb,D.br4,D.bqR,D.brn,D.bqZ,D.br7,D.bqY,D.brf,D.brm,D.bri,D.bqX,D.bqE,D.br8,D.brl,D.ahe,D.Fw,D.bqQ,D.Fw,D.bqL,D.Fw,D.bqM,D.ahe,D.Fw,D.br_,D.bqH,D.bqO,D.ahf,D.bqK,D.bqS,D.brg,D.bqI,D.br5,D.brk,D.br2,D.brd,D.brj,D.Fw,D.ahf,D.brh,D.bra,D.br1,D.bqP,D.br6],B.av("bt<n,fN>"))
D.e71={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eK4=new B.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eq2=new B.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.epY=new B.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eBV=new B.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eCN=new B.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eBR=new B.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eo3=new B.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.ezT=new B.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eKc=new B.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eD7=new B.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eti=new B.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.enK=new B.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.esk=new B.z("Movement","They pull your legs together and help you balance.")
D.euc=new B.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eqb=new B.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eHI=new B.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eIK=new B.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.ezB=new B.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eIu=new B.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eyi=new B.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eDg=new B.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.enR=new B.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.euz=new B.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eCW=new B.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eyC=new B.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eIC=new B.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eBm=new B.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eo1=new B.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eDP=new B.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eHl=new B.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eFB=new B.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.em8=new B.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eB5=new B.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eB9=new B.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.evg=new B.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eqp=new B.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eu1=new B.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eA2=new B.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eGn=new B.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eK9=new B.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eDd=new B.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.elS=new B.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eAd=new B.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.emH=new B.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eGC=new B.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eHE=new B.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eAD=new B.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eGP=new B.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.enT=new B.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eI9=new B.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.erJ=new B.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eG1=new B.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.euX=new B.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eyx=new B.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eDx=new B.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eIj=new B.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eIb=new B.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eIf=new B.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.ez1=new B.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eEl=new B.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eFy=new B.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eI_=new B.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eAC=new B.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.ewV=new B.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.evH=new B.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eB0=new B.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eDq=new B.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.exq=new B.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.ey6=new B.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.es4=new B.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eHA=new B.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.esS=new B.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.emE=new B.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.evf=new B.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.emz=new B.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eqQ=new B.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.evk=new B.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.et1=new B.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eDL=new B.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.euf=new B.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eJS=new B.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.evR=new B.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eyV=new B.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eBu=new B.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eta=new B.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.esU=new B.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dts=new B.bt(D.e71,[D.eK4,D.eq2,D.epY,D.eBV,D.eCN,D.eBR,D.eo3,D.ezT,D.eKc,D.eD7,D.eti,D.enK,D.esk,D.euc,D.eqb,D.eHI,D.eIK,D.ezB,D.eIu,D.eyi,D.eDg,D.enR,D.euz,D.eCW,D.eyC,D.eIC,D.eBm,D.eo1,D.eDP,D.eHl,D.eFB,D.em8,D.eB5,D.eB9,D.evg,D.eqp,D.eu1,D.eA2,D.eGn,D.eK9,D.eDd,D.elS,D.eAd,D.emH,D.eGC,D.eHE,D.eAD,D.eGP,D.enT,D.eI9,D.erJ,D.eG1,D.euX,D.eyx,D.eDx,D.eIj,D.eIb,D.eIf,D.ez1,D.eEl,D.eFy,D.eI_,D.eAC,D.ewV,D.evH,D.eB0,D.eDq,D.exq,D.ey6,D.es4,D.eHA,D.esS,D.emE,D.evf,D.emz,D.eqQ,D.evk,D.et1,D.eDL,D.euf,D.eJS,D.evR,D.eyV,D.eBu,D.eta,D.esU],B.av("bt<n,+(n,n)>"))
D.dtu=new B.hC(A.G,11)
D.dtz=new B.hC(A.G,30)
D.dAs=new C.Un(null)
D.dAt=new C.Uo(null)
D.dAG=new C.Up(null)
D.dCH=new C.Us(null)
D.dDv=new C.V2(null)
D.dDx=new C.V3(null)
D.dE4=new C.Vb(null)
D.dG_=new C.Vf(null)
D.dG0=new C.Vh(null)
D.dG2=new C.Vi(null)
D.dHI=new C.VK(null)
D.dIn=new C.VL(null)
D.dMy=new C.VQ(null)
D.e1r=new C.VR(null)
D.e1t=new C.VS(null)
D.e1u=new C.VV(null)
D.e1v=new C.VW(null)
D.e3o=new C.W3(null)
D.e3p=new C.W4(null)
D.e3F=new C.We(null)
D.e3G=new C.Wf(null)
D.e3H=new C.a8f(null)
D.e4h=new C.Wh(null)
D.e5K=new C.Wl(null)
D.e9k=new B.x(0,118)
D.aHg=new B.x(0,13)
D.e9l=new B.x(0,17)
D.e9o=new B.x(0,330)
D.e9r=new B.x(0,-13)
D.aHm=new B.x(0,-14)
D.e9s=new B.x(0,-17)
D.e9t=new B.x(0,-18)
D.e9u=new B.x(0,-19)
D.e9v=new B.x(0,-20)
D.e9y=new B.x(0,-26)
D.e9z=new B.x(0,-28)
D.e9A=new B.x(0,-31)
D.e9B=new B.x(0,-32)
D.wz=new B.x(0,-6)
D.e9C=new B.x(0,-6771)
D.e9D=new B.x(0,-9)
D.e9F=new B.x(-9.5,-11)
D.e9G=new B.x(10,20)
D.e9I=new B.x(10,-13)
D.e9J=new B.x(10,-22)
D.e9K=new B.x(10,-4)
D.a5X=new B.x(11,8)
D.e9M=new B.x(12,2)
D.e9N=new B.x(14,0)
D.e9O=new B.x(14,12)
D.aHq=new B.x(14,8)
D.e9P=new B.x(14,-17)
D.e9Q=new B.x(14,-18)
D.aHr=new B.x(14,-3)
D.aHs=new B.x(14,-4)
D.e9R=new B.x(15,0)
D.e9S=new B.x(15,-12)
D.e9T=new B.x(16,-8)
D.e9U=new B.x(18,14)
D.e9V=new B.x(18,-12)
D.aHw=new B.x(20,0)
D.ea0=new B.x(20,15)
D.ea1=new B.x(20,-17)
D.ea2=new B.x(20,-3)
D.ea3=new B.x(21,8)
D.ea5=new B.x(22,10)
D.aHx=new B.x(22,8)
D.ea6=new B.x(24,0)
D.ea7=new B.x(24,2)
D.ea9=new B.x(24,-18)
D.eaa=new B.x(24,-22)
D.eab=new B.x(25,8)
D.eac=new B.x(26,0)
D.eai=new B.x(28,-30)
D.ean=new B.x(30,18)
D.eao=new B.x(30,2)
D.eap=new B.x(31,19)
D.eaq=new B.x(32,0)
D.aHA=new B.x(34,0)
D.aHB=new B.x(34,-32)
D.It=new B.x(36,0)
D.eav=new B.x(3,-1)
D.eay=new B.x(40,3)
D.eaC=new B.x(4,11)
D.eaF=new B.x(4,-2)
D.eaJ=new B.x(5,0)
D.eaK=new B.x(5,17)
D.eaL=new B.x(5,6)
D.eaP=new B.x(6,11)
D.eaV=new B.x(8,7)
D.eaW=new B.x(8,-10)
D.eaX=new B.x(8,-14)
D.eaY=new B.x(8,-3)
D.aHF=new B.x(9,0)
D.eb0=new B.x(-20.5,-17.6)
D.eb1=new B.x(-9,18.5)
D.eb4=new B.x(-2.6,-1)
D.eb5=new B.x(1.9,-0.8)
D.eb8=new B.x(-0.22,0.09)
D.ebd=new B.x(2.6,1)
D.ebk=new B.x(-9,12.2)
D.ebC=new B.x(-9,20.5)
D.ebU=new B.x(-10,0)
D.ebV=new B.x(-10,12)
D.aHM=new B.x(-10,4)
D.ebW=new B.x(-11,-2)
D.ebX=new B.x(-13,-5)
D.ebY=new B.x(-14,0)
D.ebZ=new B.x(-14,13)
D.ec_=new B.x(-14,2)
D.ec0=new B.x(-14,-12)
D.ec1=new B.x(-14,-19)
D.ec2=new B.x(-14,-23)
D.ec3=new B.x(-15,6)
D.ec4=new B.x(-16,14)
D.ec5=new B.x(-16,-8)
D.ec6=new B.x(-17,10)
D.ec7=new B.x(-17,-18)
D.ec8=new B.x(-17,-8)
D.eca=new B.x(-18,20)
D.ecb=new B.x(-18,-9)
D.aHO=new B.x(-20,0)
D.ecd=new B.x(-20,16)
D.ece=new B.x(-20,-9)
D.Sv=new B.x(-22,8)
D.ecf=new B.x(-22,-10)
D.ecg=new B.x(-22,-11)
D.ech=new B.x(-24,10)
D.eci=new B.x(-24,11)
D.ecj=new B.x(-24,14)
D.eck=new B.x(-24,-22)
D.ecl=new B.x(-25,-11)
D.ecm=new B.x(-26,0)
D.ecn=new B.x(-26,-18)
D.eco=new B.x(-2,9)
D.ecp=new B.x(-2,-10)
D.ecq=new B.x(-2,-20)
D.ecr=new B.x(-2,-9)
D.ecs=new B.x(-32,0)
D.aHQ=new B.x(-34,0)
D.ecx=new B.x(-40,3)
D.ecz=new B.x(-4,11)
D.ecA=new B.x(-4,-17)
D.ecB=new B.x(-4,-2)
D.ecD=new B.x(-5,0)
D.ecE=new B.x(-5,20)
D.ecF=new B.x(-5,6)
D.ecG=new B.x(-6,26)
D.ecH=new B.x(-6,6)
D.ecI=new B.x(-6,-42)
D.ecJ=new B.x(-7,-19)
D.ecK=new B.x(-7,-24)
D.ecL=new B.x(-8,-9)
D.a60=new B.x(-9,0)
D.ecM=new B.x(-9,1)
D.ecN=new B.x(-9,-23)
D.fp2=new B.y("Thinking\u2026",null,A.hf,null,null,null,null,null,null,null,null,null)
D.edJ=new B.D(A.jJ,D.fp2,null)
D.fFr=new B.y("Start from a ready-made board",null,A.fV,null,null,null,null,null,null,null,null,null)
D.edV=new B.D(A4.vO,D.fFr,null)
D.byD=new B.Q(4,0,4,14)
D.fkm=new B.F(!0,A.aB,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq_=new B.y("Games and little helpers for a spare minute.",null,D.fkm,null,null,null,null,null,null,null,null,null)
D.ee4=new B.D(D.byD,D.fq_,null)
D.fC9=new B.y("Tap to throw in a star",null,A.kP,null,null,null,null,null,null,null,null,null)
D.b74=new B.cm(A.A,null,null,D.fC9,null)
D.ek_=new B.cM(0,null,0,14,null,null,D.b74,null)
D.dcy=w([A.ij,A.bl],x.O)
D.aMH=new B.c_(A.A,0.5,A.x,null,0,D.dcy,null,null)
D.ekI=new B.c_(A.A,0.5,A.x,null,0,D.az0,null,null)
D.d3R=w([A.c,A.bK],x.O)
D.ekK=new B.c_(A.A,0.5,A.x,null,0,D.d3R,null,null)
D.dkN=w([A.bP,A.h9],x.O)
D.aMI=new B.c_(A.A,0.5,A.x,null,0,D.dkN,null,null)
D.cJu=w([A.c,A.bP],x.O)
D.ekO=new B.c_(A.t9,0.5,A.x,null,0,D.cJu,null,null)
D.beB=new B.v(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.t)
D.bka=new B.v(1,0.027450980392156862,0.10196078431372549,0.2,A.t)
D.d2T=w([D.beB,D.agk,D.bka],x.O)
D.daw=w([0,0.7,1],x.n)
D.ekQ=new B.c_(A.t9,0.5,A.x,null,0,D.d2T,D.daw,null)
D.czQ=w([A.oQ,A.aF,A.K],x.O)
D.dhv=w([0.3,0.7,1],x.n)
D.ekS=new B.c_(A.A,0.5,A.x,null,0,D.czQ,D.dhv,null)
D.bo2=new B.v(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.t)
D.diV=w([A.fc,D.bo2],x.O)
D.ekU=new B.c_(A.t9,0.5,A.x,null,0,D.diV,null,null)
D.cCF=w([A.dt,A.cp],x.O)
D.ekV=new B.c_(A.A,0.5,A.x,null,0,D.cCF,null,null)
D.cZ8=w([A.oQ,A.aF,A.fn],x.O)
D.ekW=new B.c_(A.A,0.5,A.x,null,0,D.cZ8,null,null)
D.cRg=w([A.fL,A.aS,A.d8],x.O)
D.ekY=new B.c_(A.t9,0.5,A.x,null,0,D.cRg,null,null)
D.dda=w([A.h9,H.n1],x.O)
D.ekZ=new B.c_(A.t9,0.5,A.x,null,0,D.dda,null,null)
D.beP=new B.v(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.t)
D.bcJ=new B.v(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.t)
D.d0q=w([D.beP,D.bcJ],x.O)
D.el0=new B.c_(A.A,0.5,A.x,null,0,D.d0q,null,null)
D.bjy=new B.v(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.t)
D.bhs=new B.v(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.t)
D.bhw=new B.v(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.t)
D.dnd=w([D.bjy,D.bhs,D.bhw],x.O)
D.cXV=w([0,0.65,1],x.n)
D.el1=new B.c_(L.aaC,0.5,A.x,null,0,D.dnd,D.cXV,null)
D.el2=new B.c_(A.A,0.5,A.x,null,0,D.avo,null,null)
D.dlF=w([A.h9,A.hK],x.O)
D.el9=new B.c_(A.A,0.5,A.x,null,0,D.dlF,null,null)
D.aMM=new B.aQ(9,9)
D.eli=new B.aQ(1.4,1.4)
D.eL1=new B.bj("Moon",1.62,4291941851)
D.eLA=new B.bj("Neptune",11.15,4284524026)
D.eMe=new B.bj("Sun",274,4294688548)
D.eMr=new B.bj("Mercury",3.7,4288455599)
D.eMw=new B.bj("Earth",9.81,4281908728)
D.eMy=new B.bj("Mars",3.71,4294472049)
D.eMQ=new B.bj("Venus",8.87,4294759245)
D.eMX=new B.bj("Saturn",10.44,4294829706)
D.eNk=new B.bj("Jupiter",24.79,4294677052)
D.eQX=new B.a9(10,-8,18,-2)
D.eQY=new B.a9(14,-14,20,14)
D.eQZ=new B.a9(20,-2,30,2)
D.eR0=new B.a9(4,-13,30,-3)
D.eR2=new B.a9(8,-7,12,7)
D.eR8=new B.a9(-12,12,12,19)
D.eR9=new B.a9(-12,14,12,22)
D.eRa=new B.a9(-12,-22,12,8)
D.eRb=new B.a9(-12,-25,12,19)
D.eRc=new B.a9(-12,-26,12,-6)
D.eRd=new B.a9(-12,-4,12,14)
D.eRe=new B.a9(-14,20,14,24)
D.eRf=new B.a9(-14,6,14,10)
D.eRg=new B.a9(-14,-17,14,15)
D.eRh=new B.a9(-14,-26,14,18)
D.eRi=new B.a9(-14,-4,14,20)
D.eRj=new B.a9(-15,-29,15,25)
D.eRk=new B.a9(-16,-16,16,16)
D.eRl=new B.a9(-16,-22,-9,18)
D.eRm=new B.a9(-16,-24,16,-10)
D.eRn=new B.a9(-16,-2,16,20)
D.eRp=new B.a9(-18,20,18,24)
D.eRq=new B.a9(-18,-18,18,20)
D.eRr=new B.a9(-20,12,20,22)
D.eRs=new B.a9(-20,-28,20,26)
D.eRt=new B.a9(-22,14,22,18)
D.aNh=new B.a9(-22,-26,22,24)
D.eRu=new B.a9(-22,-3,22,3)
D.eRv=new B.a9(-22,-4,22,12)
D.eRw=new B.a9(-24,-12,10,22)
D.eRx=new B.a9(-24,-14,22,8)
D.eRy=new B.a9(-24,-6,24,20)
D.aNi=new B.a9(-24,-9,24,9)
D.eRz=new B.a9(-25,14,25,19)
D.eRA=new B.a9(-26,-14,14,8)
D.eRB=new B.a9(-26,-4,26,20)
D.eRC=new B.a9(-26,-6,4,6)
D.aNj=new B.a9(-28,-13,28,13)
D.eRD=new B.a9(-28,-16,28,16)
D.eRE=new B.a9(-28,-16,28,8)
D.eRF=new B.a9(-28,-22,28,22)
D.eRG=new B.a9(-30,-12,30,14)
D.eRH=new B.a9(-30,-14,0,14)
D.eRI=new B.a9(-30,-18,30,20)
D.eRJ=new B.a9(-30,-28,30,14)
D.eRK=new B.a9(-30,-2,30,18)
D.eRL=new B.a9(-30,-4,30,18)
D.eRM=new B.a9(-32,-17,32,17)
D.eRN=new B.a9(-32,-28,32,18)
D.eRO=new B.a9(-33,-21,33,17)
D.eRP=new B.a9(-34,14,34,26)
D.a6X=new B.a9(-34,-18,34,18)
D.eRQ=new B.a9(-34,-4,34,7)
D.eRR=new B.a9(-36,-24,36,20)
D.eRS=new B.a9(-38,-22,38,22)
D.eRT=new B.a9(-3,12,3,22)
D.eRU=new B.a9(-3,5,3,15)
D.eRW=new B.a9(-46,-34,46,28)
D.eRX=new B.a9(-48,-3,48,3)
D.eS_=new B.a9(-6,18,24,24)
D.eS0=new B.a9(-6,5,6,12)
D.eS1=new B.a9(-6,-22,6,-15)
D.eS2=new B.a9(-9,-16,9,22)
D.eS3=new B.a9(-4.5,-24,4.5,-21.2)
D.eS5=new B.a9(14,-9,17.5,9)
D.e8z={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aOd=new B.dD(D.e8z,5,x.R)
D.e86={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eVd=new B.dD(D.e86,10,x.R)
D.eXr=new B.as(24,44)
D.eXP=new B.as(54,38)
D.eXW=new B.as(66,38)
D.b8p=new B.fj(2,null,null,null,null,A.by,null,null,null,null)
D.eYW=new B.a7(16,16,D.b8p,null)
D.aPd=new B.hP(3,12,12,0.82,null)
D.fH9=new B.y("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aPo=new B.b1(D.fH9,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.ddd=w([A.cs,A.bH,A.bo,A.aR,A.pF,A.cs],x.O)
D.f3U=new B.fW(A.A,0,6.283185307179586,A.x,D.ddd,null,null)
D.fdc=new B.F(!0,A.aS,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Qz,null,null,null)
D.f58=new B.eS("You are here (Sun)",null,null,A.d_,null,null,null,null,null,null,D.fdc)
D.aRR=new B.F(!0,A.aB,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f59=new B.eS("What we see",null,null,A.d_,null,null,null,null,null,null,D.aRR)
D.fat=new B.F(!0,U.EG,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5c=new B.eS("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.d_,null,null,null,null,null,null,D.fat)
D.ffp=new B.F(!0,A.kr,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5i=new B.eS("AI",null,null,A.d_,null,null,null,null,null,null,D.ffp)
D.aQc=new B.F(!0,A.bX,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5y=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f63=new B.F(!0,A.bk,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6n=new B.F(!0,A.co,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6U=new B.F(!0,A.bX,null,null,null,null,11,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6Z=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7f=new B.F(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7J=new B.F(!0,A.aQ,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f89=new B.F(!0,A.bX,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8l=new B.F(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVQ=new B.cS(A.i5,A.dD,6)
D.d6F=w([D.eVQ],x.q)
D.f8F=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.d6F,null,null,null)
D.f8K=new B.F(!0,A.em,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8O=new B.F(!0,A.bX,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9s=new B.F(!0,A.bX,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9A=new B.F(!0,A.aB,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9B=new B.F(!0,A.bX,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fax=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb2=new B.F(!0,A.aB,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbz=new B.F(!0,A.aS,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVT=new B.cS(A.aW,A.J,3)
D.azf=w([D.eVT],x.q)
D.fbC=new B.F(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.azf,null,null,null)
D.fbH=new B.F(!0,A.c,null,null,null,null,12.5,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcq=new B.F(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Qz,null,null,null)
D.fd_=new B.F(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdr=new B.F(!0,A.tA,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe1=new B.F(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe6=new B.F(!0,A.bX,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feb=new B.F(!0,A.aB,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feW=new B.F(!0,A.n4,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffa=new B.F(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRi=new B.F(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVG=new B.cS(A.w,A.J,5)
D.cVs=w([D.eVG],x.q)
D.ffK=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cVs,null,null,null)
D.ffP=new B.F(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.azf,null,null,null)
D.fga=new B.F(!0,A.fZ,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgs=new B.F(!0,A.bX,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgX=new B.F(!0,A.bo,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhw=new B.F(!0,A.bX,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fib=new B.F(!0,A.aB,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fik=new B.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiP=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj5=new B.F(!0,A.aS,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjp=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjs=new B.F(!0,A.aS,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkc=new B.F(!0,A.aQ,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkp=new B.F(!0,A.c,null,null,null,null,13,A.a7,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkC=new B.F(!0,A.tA,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkX=new B.F(!0,A.bo,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8R=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fll=new B.y("\u26a0\ufe0f ",null,D.f8R,null,null,null,null,null,null,null,null,null)
D.fly=new B.y("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.v6,null,null,null,null,null,null,null,null,null)
D.fn6=new B.y("Pick one, then change it and see what happens.",null,A.v6,null,null,null,null,null,null,null,null,null)
D.fnb=new B.y("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.fa_=new B.F(!0,A.ad,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo5=new B.y("What do you want to invent? Type it below, or tap an idea.",null,D.fa_,null,null,null,null,null,null,null,null,null)
D.fpB=new B.y("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fqc=new B.y("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.fJ,null,null,null,null,null,null,null,null,null)
D.fqh=new B.y("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fqP=new B.y("Make it yours",null,A.jY,null,null,null,null,null,null,null,null,null)
D.fr7=new B.y("Your mass never changes. What changes is how hard each world pulls on it.",null,F.a8f,null,null,null,null,null,null,null,null,null)
D.fem=new B.F(!0,A.k5,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftx=new B.y("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.fem,null,null,null,null,null,null,null,null,null)
D.ftW=new B.y("5G",null,S.aQG,null,null,null,null,null,null,null,null,null)
D.fgI=new B.F(!0,A.bX,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv4=new B.y("WHAT HAPPENS",null,D.fgI,null,null,null,null,null,null,null,null,null)
D.fwO=new B.y("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fxt=new B.y("Change the words and pictures on the three slabs.",null,A.v6,null,null,null,null,null,null,null,null,null)
D.fxE=new B.y("All the parts and wires will be removed.",null,A.he,null,null,null,null,null,null,null,null,null)
D.fxY=new B.y("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fyx=new B.y("Tap the crank on the board again and again to spin it faster.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fzK=new B.y("\ud83c\udfaf Challenges",null,A.df,null,null,null,null,null,null,null,null,null)
D.fAf=new B.y("Remove this part",null,Y.aQh,null,null,null,null,null,null,null,null,null)
D.fAy=new B.y("Clear the board?",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fgb=new B.F(!0,A.bu,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAO=new B.y("How the Lab works",null,D.fgb,null,null,null,null,null,null,null,null,null)
D.f7s=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB8=new B.y("Electronics Lab",null,D.f7s,null,null,null,null,A.a1,null,1,null,null)
D.fBc=new B.y("?",null,L.aRM,null,null,null,null,null,null,null,null,null)
D.feh=new B.F(!0,A.aR,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBh=new B.y("Planet Earth",null,D.feh,null,null,null,null,null,null,null,null,null)
D.fCv=new B.y("Ready-made circuits",null,A.df,null,null,null,null,null,null,null,null,null)
D.fD8=new B.y("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fDr=new B.y("UNIVERSE EXPLORER",null,I.a8d,null,null,null,null,null,null,null,null,null)
D.fj8=new B.F(!0,A.aS,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGz=new B.y("\u26a0 There is no air here, so a parachute will not work.",null,D.fj8,null,null,null,null,null,null,null,null,null)
D.fHL=new B.y("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,Y.aQg,null,null,null,null,null,null,null,null,null)
D.fIe=new B.y("NGMY",null,A.v4,null,null,null,null,null,null,null,null,null)
D.fIs=new B.y("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.Ud,null,null,null,null,null,null,null,null,null)
D.fIP=new B.y("Tap it to change its setting. Drag from the right dot to connect.",null,A.lG,null,null,null,null,null,null,null,null,null)
D.fJP=new B.y("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.v6,null,null,null,null,null,null,null,null,null)
D.fJR=new B.y("TOOLBOX",null,I.a8d,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hfH=null
$.hfG=null
$.hlO=0
$.hNV=B.U(x.N,x.k)
$.hOv=B.U(x.N,x.k)
$.hf1=null
$.hOg=B.U(x.N,x.k)
$.hPj=B.U(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ijZ","bDF",()=>{var v="led"
return B.a([C.aye("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fg9(),v),C.aye("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fga(),v),C.aye("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fgb(),v),C.aye("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fgi(),v),C.aye("Not both","Make the light go OFF only when both switches are ON.",2,new C.fgj(),v),C.aye("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fgk(),"buzzer")],B.av("O<baE>"))})
w($,"ikq","bDG",()=>B.a([C.Qe("UNIVERSE","Earth, space and gravity",A.Oj,A.aR,new C.fgA()),C.Qe("ELECTRONICS LAB","Batteries, wires, real circuits",Ad.BW,A.aR,new C.fgB()),C.Qe("DISCOVERY LAB","Body Explorer: a real 3D human",D.bHl,A.bo,new C.fgC()),C.Qe("TOOLBOX","Converter, clock, games",O.alD,A.cY,new C.fgD()),C.Qe("REACTION LAB","Wire parts together",A.Ch,A.bu,new C.fgE()),C.Qe("SPARK PAINTER","Paint with light",A.a0n,A.c6,new C.fgF()),C.Qe("ROCKET LANDER","Land softly on the pad",A.ob,A.aR,new C.fgG()),C.Qe("TITLE ANIMATOR","Make a moving title",A.yN,A.bH,new C.fgH()),C.Qe("CIRCUIT LAB","Connect logic, learn it",A.a0P,A.co,new C.fgI())],B.av("O<bsl>")))
w($,"ilY","ql",()=>{var v,u,t=B.U(x.N,x.E)
for(v=0;v<76;++v){u=D.QR[v]
t.n(0,u.a,u)}return t})
w($,"ik_","ahM",()=>B.a([C.FB("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fgl()),C.FB("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fgm()),C.FB("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fgn()),C.FB("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fgo()),C.FB("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fgp()),C.FB("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fgc()),C.FB("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fgd()),C.FB("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fge()),C.FB("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fgf()),C.FB("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fgg()),C.FB("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fgh())],B.av("O<baF>")))
w($,"iks","hui",()=>B.a([C.a0L("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aS,A.c9,new C.fgQ()),C.a0L("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cs,A.bx,new C.fgR()),C.a0L("Breathe","Calm down in a minute","\ud83e\udee7",A.iH,A.cC,new C.fgS()),C.a0L("Draw Pad","Sketch and share","\ud83c\udfa8",A.bD,A.b5,new C.fgT()),C.a0L("Memory Match","Find the pairs","\ud83c\udccf",A.aR,A.c8,new C.fgU()),C.a0L("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bH,A.be,new C.fgV()),C.a0L("Tip & Split","Share the bill","\ud83e\uddfe",A.bo,A.b_,new C.fgW()),C.a0L("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.by,A.aD,new C.fgX())],B.av("O<btF>")))
w($,"ikr","huh",()=>B.a([C.af2("EARTH GLOBE","Turn it, tap a country",A.o7,A.aR,new C.fgJ()),C.af2("SOLAR SYSTEM","The Sun and its worlds",D.bHp,A.aS,new C.fgK()),C.af2("GRAVITY LAB","Drop, weigh, orbit",D.amK,A.cY,new C.fgL()),C.af2("BLACK HOLE","Throw in a star",A.G6,A.by,new C.fgM()),C.af2("GALAXY","Build, tilt, collide",A.yw,A.h7,new C.fgN()),C.af2("SIZE COMPARE","Earth next to a star",D.bHG,A.c6,new C.fgO()),C.af2("SEASONS & MOON","Why it is summer",A.w_,A.bu,new C.fgP())],B.av("O<btA>")))})()};
(a=>{a["YFBDdsgS+ouf3ZXnF7lCdX+qrGQ="]=a.current})($__dart_deferred_initializers__);